/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4vYUz4g1Jvq7TZM4XuEpf5GMSqyUuhMZZaDdsqJrHj5wMtTHgKwbh1yjvPBpaqjiMAWBp15WBrixQJ1dxtpf5dZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKDbZHQXbiUsaTzXnYwqrhwzbvd596L8ctugU1RBdvqC8SijBFVNjkrxaMATvFdxNq9LRZvTPhDm7VsbaSWT49F",
  "key1": "EcktG6eecVqZX8kCXrP5q9aeeAvpTsxhtYZXv4bLKbyMRCnoG87e1GUgmgWTjTujduDYV5GCzYsYi243sts4WDT",
  "key2": "465pChSxVLCSjBRExPbAqfMPjQa4LyH3DyeX4r8E5mR1khx6xXhUUnjUHRtfHyNiQ6Ppa9DKumiEt7i2MFj9zjin",
  "key3": "5m6F1csdrRC7LDYK31E6bveDwozQp24CR6f9NguJTUxwrTvCWuRA1LDUCgGcQovTAUwJdUtWq5wdE2YcjCuuBaUR",
  "key4": "5CG5YMvFhxAFos7Nbp8RGEi1EbVE4i2KTRuQ2xHoFsMFaEh79qXk1otnVhC6hZixqoyoAFHgBQ3qWHBZdwhTFDEr",
  "key5": "25KwA1tK1xppTdEwy2yDse5UeNwDBYfhqAbq9pT2K6FefuXScY6A2ngBWcENS2TcafwYU9HYLWjBRQPFbKssjvVH",
  "key6": "wD51pNZqes9MyMVJwaMUE4d97ksYkqHRXZ4hEBQPiC3C2xof5PMQ82UDSjkhgjSdGTWg8eb8qzYuHWCZFB6G7c5",
  "key7": "5sGn6M2hg3N5fjAEsgiVwsmQGZHbckR154yvTVBSmNB7LrBmbueqi9GQpkRXqLW2Ps2LbGBTfoSb4FkBuJtVYn6Q",
  "key8": "3QvZWL25kHfytSmfY6hB5iiTYmjo5qa6fMEqZTfo85VjsAA186iKF4qZvgJCCtFoAiweAL29ACY459epnnKn5e9D",
  "key9": "3MnWZKjMDp5pxAghQTW3hsit3i1yGkCv2etBR4n8gxujFC162grrkXr9ccFbrrxpAxmNGA6T1u6ykWCnQqkMvjRP",
  "key10": "49AHbucJt1vvhjkvVX1eqvDwCJab1Sh949Nm69iTsRrL6BS4Uh1jBotjP58GyZYtarSd6uCDFQ6PMKeQyogzzmLG",
  "key11": "4gdvRVhmY6dft4PwMCmXKm6xhw15Q2ZDjdwcDdRgrwJTFvfj3hkf2pgJCZRXHARBHZWvU5KL6ffgYFi79Hht5AS4",
  "key12": "3h2zfD3ZBSJKYmGx6fpcDqa2jvNip49h7Rxsc3dYCMUWYmNp4FYCFjz4jGq9GVxMJ6L4YozGUsi4rFcCfYcyrght",
  "key13": "V1eyZ28L3p4xcroDbAkRq9f7WDUTRFU1stvXyX61FrWh7gmGT6FcgPh52o6V2TqHcZniJg2qbzBGR4AXoUGuHCF",
  "key14": "5rFyniVm6wbzN3dS9gMfjKvW143oesq2faUhUaj4ZnFeEpCB1tmEBSJkybN777Mo8U5gq6h6fokpAyN142ttvKnb",
  "key15": "5Ld12BPUGpLSNprUhAvgYhahwq6py1rbda3Yv2JUHdJTzg9vGCN1duuzWBTu4hvpiXLyccqmsLuDGM4N1pccpMkK",
  "key16": "5yVJDUTj2oodhbRCyFTH9nyHi2Ei11sVe2EfJoVBavf5Jwff1bE6iYcNFs1nKfoiuQKwFNPdgvjmiTpfJd6CExvz",
  "key17": "5fXQdPvaCn7PZH9sWu57gHCCSrQGGEKd5uxECPMuAE2M11GDNovojKPLKPV3XFfc8oEr1CcvFmYYynkaUHpjU8Rr",
  "key18": "2NkgnYtKM34hCqRq18EmH7CBzXLc3AwhdrRtmGDRCqfzMowCwZDeenJ1kKHsPcpnhGGAAwYLzfSTJbe9pKyqDAA6",
  "key19": "5w4sCPQXLi4QJNhwBbwTcc8rBvwH1kTSW3P3N8Qmmu86ruwYLiyn8YTUtdTg3Ut9GisXyVFgbwRivgYW7Zeww3WP",
  "key20": "2a7NLUhFqDV5YJPKqzzgXdqUse3mDR2xPiZBoC66ppUW4zPybn4Gjw7rAJ6tSSicqdjT3HypA5WCGpfig1e21g1B",
  "key21": "DjbfHKrkYQ6RVWBmddaEBnP9nNdbYQXkicU717tR6sgpQ6cyFJ4TnPrGt3jf2tKbxRyv6MSYJPsLjexCxzEKPTU",
  "key22": "64Dxjij1od54VSQM86PydPcmHeaTMuhZTL3wZAo6PgA2YBWqKduH7woJfqVJd1SLDBbtK1iv3XY9LSUfrMFxZtV4",
  "key23": "2o8iwyQrqcHdLotSfdSHDRFysWxtDGKU9Ca5tgn9kLodfWCowJ73J4n7xgNsWwFaiNvx7aDreqNA5vdmyHVDWGhf",
  "key24": "atjtEJHVodGH7RMFXYEZz3fYmMqpcosBgTmFN6TR5B2yGTabxyacggNPpQcUYJiyMRe7kceXrkELBytyPjGT7Wn",
  "key25": "4X6QZTTFSmNxPFMPhrz3c6FVtzWHT3CuS3iWzsezwza59otHJFDtaiu8HMp44F4RESk1pw8HZcV8p5MBdejX61gs",
  "key26": "5VnLqN9AwsJeKCh42gEstzWYSBfMLtZDkfFDD78m1hoTwbWiAAKKeAJ9q86HveHGjsnKsQyvBCjufJrafYAXs941",
  "key27": "3haLnGrqoxJdW5G3dmC8hVN3zUTGgf4HGPCtKsXBYbMxTcD3VVjiZbdBRQi3kQZQLbkNBZSNV83K7q86RHSjY2nq",
  "key28": "3wKCpKgDptME9MfmxfS6HHN7sqBUNVRsqkdFWDcPbW7Wh528bXM8H6og6Kgu2TMaVuqcosCe4mkB5tCwHGNN8DVC",
  "key29": "3n8dSASgvQT5LxHcwvsG8pmSW7EUEs4V3FiVVDZHwHwTdP8PCBiruKdT8kKdPEmZyqJfG5KBYyCpjrvgxnPwfJkF",
  "key30": "NxxLBPFfmm7ybL2oNFaRVoouq7hW6hLdDXb44PBQgkw1eZU7njQdkWsKbjLWafEts4HGqwV33ecCzUP5VTY1eZM",
  "key31": "4YTWgqTgaDWR8tMJaff7txdQLSoQeYrZo4posteCHUYhrYpFzSH42s997A7MmVcWQanF1Xt2c7neAmgNHEgd1SAF",
  "key32": "3NbzUPNRVRE7XC1fCjBnp5fH5evUcmb3aYTq9PbaVQji2HZR2HPCKhmmh8U7t1sYHu7zTgWJuLy4f5KjPk28G7w6",
  "key33": "3XNFFzySgoPsRxobwxJPSBfCeFCg7mvgjvxZ3saNxFmoawRuGu4WV78HzexcSJGd97Gh4kLV6sbDs5HqdGvtzEK8",
  "key34": "5aYZCDY39MTcxLZ2guab31Rw9Twvd5SF6ejfCWAgjBLEBjj8wWPu89MhTCcHkTv3QH4C3GBXA6UpzeWndWeZkK75",
  "key35": "3KJHtBwt76rkUTeyn5aT9khV14UsJrKR6pfKyyxwf8fPUYPN4ULzDoymHcKqwxcRHtG89UDNQoS61nBge1d1R19q",
  "key36": "3spc3yncQjqySMgqhuLCQThqzGwYgbNo22z1sfW1AtyxhBWYi58XSseZPhACnZq6vDCfMH1sbRirwMX5uULd9eku",
  "key37": "4nVve8K85A3ogv9g1q5pMytXaDzvxi26fDZbmJQHm4SxsrZ412EG9MSUNVcwu2SaGJoXFymeMsCVjqXuW35erCS6",
  "key38": "FR5UKuSwijEZJxgBQmin2G8guZhViQuJ7HBHiXQmMnELZMbsQa7ZtoBw5gA6sDuKRbCzR5hUAGrxrLsHkqzk9Tf",
  "key39": "4BQekEUTGk8aUhSyTSZWGYjc4ZV3zQgGrCyqbGvL3hD3rm9EcVjy2gszey3ZrJLaNQUcjGeL7zuXpaoP1mFgHALy",
  "key40": "d3NVXd1iyCVJ5kb6aY7yFFRppTTkevidFWctgee8vySexNaFpCx3mERg9xkQLGCBx9Dv7Rzj31T2L2RbgkGaFok",
  "key41": "4grYM9sNHo1UpySYu5BPfQiNXwdx43YV3cge2owgw4HQ5RGuKtrSHwD7nFgLd2xjx66RT5nwUgoAeRCMteMt8aFx",
  "key42": "2eM2H1WeCvXBSiyGJySiFgPwyGmbyk794ubwraZ8pRCnjvyq584vCFPebZ7c3ZNQgvDGd6mpd24DhEBMM7boT91i"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
