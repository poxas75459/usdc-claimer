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
    "5SmrNBgCaJCR7HcVSXrRpkiFtC52Ddyb5mHQ1kakqwCp1T8nDZPtZUUDCBU7yymZ7jhH5ygaW7riVLTg75w8LHLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1matNVjVTR1pSo3K46KKWUVzjdTtGiRkwHDqeKxjSzrX5Tt48PxMecNnRNGsoDGztXAwgyZgD7CqReAPj2Kx8Lw",
  "key1": "2UgSXf6xWaGZGWPgAJbFKBtKHWM7TAcEW25HfXRxi8ZWF4FvukXskGuvS5WeyfytYfax6dKvQWe1XGjjgC6szr6v",
  "key2": "4omD7imNFYW5tWAqUa2J7RprywqdiB6uNkd5k46thkUSK374eG59GVKDWEhZs4x3Bq1zTPCsxQrQ6RAmdNSoSxfu",
  "key3": "eBkQCm139SgrYZrtxVG8c8FigFmJvZVLYNbUxwP5VP4k6S8fTAr2a68jFvcp49v7TKYCGRmE7tdzZ8rBFtUuVsh",
  "key4": "3TtdChVp5DEXafWruSLtmSK8mL17NVKLyBLFQWF8qBQ9Eb4KaMKpBpzahWauf9huAnAgoWzcun2WLUToeyibSnDQ",
  "key5": "5ftx9uEEmotPGyP332k2rFEqsY7sa2uhB7516tuBsoG6tzmfWzKq1r1xGdmu9QcNYnCEL43ZvofJ7Cndu5qDVu4s",
  "key6": "Hw49C1eMV57vaHCeXgKJfiron6Qpc2rLP6PcXhtnTrdtxb2qJKkKeT9WAY4aVDjWfXWBi7CE7yY9GZg7PZ7CrJb",
  "key7": "4XNp2oQQzuPYjb6hY13nzBXALoeNpg1JXgwX23jahDUcfEEu47wnduj2Qn5HKjm1uFGfApSnxUvwnYTtSYqFHWBz",
  "key8": "Q2UKapdPcajfbQHpvvsQLTgzL82f7EUoFj46YRF8wSZUSw3tyoUFXuSTJ3Z98pQReopQqJyAmxAakv5839J7rpj",
  "key9": "fbCTW9SLR3BbWaANYzDtoL3Jcm79oXRhuibhM76pPtBk151Hx7RdmdTsFZMQHHiik7Rqsj44ZP2JZhGGV1j5aay",
  "key10": "5AsPRSGmZNHDSF1DiGSMK5Yj8PBB3qwmTzGS1HJnmCAMfyDmdpJXBwJa3mkC4kPM3E3okq2z3yWrnWJz2uQpjPU5",
  "key11": "a1Ng64TbbcbE1E7WTciTrwjmryAa3VKGsNb3gVPXaaWGYCGMGc3RzjGLE4hYWHdk6otTZxWHoqycu4vEwuWbzxu",
  "key12": "5Rfd9ERZu9vQc7gur5PUJiuwDPqY8sZkbsUL7UYmFmRStpFqLpSQnffZX8ZHWrkmyLq6uQuqhkKCA6opDUCpwJ9a",
  "key13": "3rBahYmVpgNBAHhEwRr9geVSoMUmyfooGvaS24HHe1SmvD94a37DaR9dd7km9BCVpR99WpCFWhiwvt92yXC7MWf1",
  "key14": "5wz1DtXBKut8QTftDEWrFpgFXLTY9P6G5hCeEWcjLcxQj6hJrZhGLXLwQL82NzTWrGgnb41jmJJW4nSQ6Qm531v",
  "key15": "3EaNZTRrKJR3UjUWPZdzmbLVmZbBywRdpjCMARQCt98GaqFgk3yYeGwFfcKTPXQz4kKnsmruagXQjHGLXv5fHZtY",
  "key16": "4cnjcsaTB1v2Jv8xNsbqPpwSrgqartMqXxFc6sCUEECb5Din6sGr1NWwVKuSJWCEH4dtbnC4C3xPVkxCWtjuot1r",
  "key17": "3rPZkF33deVZr1e78FCaXBidGpSZj2eLCC24TrEq414AidftG5Z2QVxYVPv7MpXg3q73t3t4Xy5wJzQd5Q8VBwbz",
  "key18": "4jVwMxSqmxQhiXtf8uP6Tbp9JxDh8G1V2WSo7FyaQ1DkHffm2JosMFU7Xyd2mVSp4BV1vRiC81R8SEDkSaavnArg",
  "key19": "3pVJ5ejyxVKGCDCBLvuQsbYfzrWUewk7iqwyagYRn5AECYsH7jCw4RYdpHJENyaEfkPv956s8zh8GMQMuuojGvvc",
  "key20": "2bNbnTYbu74Bw8yiGznCxVVi6ZmmhE5u3n2zChkrii5fHrn44bMBsGXBa7yucRWuySRzp7xjYyEso5w4r2forfuM",
  "key21": "611ztDGVSh3sdn61aUf6hFKmgC5D6dp2YsdUP3gUhd2LsTojBwAJUv2b7dL5dJ4HJqHAidFMVbvgNQoZPX5PP4bg",
  "key22": "3SATR7W37kQCuaU2fqmAeF9NsHPj3PniTyEqN1L2QuLYTsyMo6YyDZBcJTiVJUwrXrp4fSBLxamUcRL63VUtqaVA",
  "key23": "4PJP3nkyVj2WrvrSMXQY3LQttPfVk3Lyzqbj2CRomt1TA1Bi91cVaqxJ8sDkyPizgjzeNagMu1YD2f5CsAgN3FT3",
  "key24": "6PpyRwGmdJPa4XH3Rh2XC9DUrZZmXyM5JhiwB8MQqBLQGhvb5r4gDf3W9UKMSwPngVYi2zuuRtGAQjaHLNidccA",
  "key25": "4sQN6PciSeqsGQUU1LxR3rLM6rpdkKeSuz8KxpjbUX7UE7ChHmEoK1xoJcdfenoghmgb3qJtgo9ArbaCckWacnSo",
  "key26": "3yDcuTRWbhk2kPGiG948GjBMCgdpys3Ugk5sDSzWa4v7z4AehR32oN54CMCAcnU5jyYwwUQxapyWbA1VHoHeXF8Q",
  "key27": "66JmAatjEhXwZsbNHLcJ3NoZPADHTPzj9AX6WChpZvdiJuwdYVAhiynyfQSiZQYGUbB9YdcCioUQd8LUFi4mmxPT",
  "key28": "2bxZHAeA2ZF1rg6RMCozWrQaXUyxHC8Z26gqMX2DFZEJiyMQutDqoGuASFVPqJ9YiFRuUu45gY9XprWwKshrzo5W",
  "key29": "4ojpzARLvbvbisKSCQak4nxUpcxi1jEyVM4ohJTbqPQRx8Ra5snd2fMvytaKcCjL7o1rvvmAorWMX4CKhWBQeM6r",
  "key30": "zAsobbB7T5vrvTCDgLaSHXxoMqo1vvp1vMbS1rY6sNqbaZ1M1Fi9mnaenak2eZHgty4rWT3QL7HAdB4iu44BEU2",
  "key31": "3yGyrWWRjDEHTiu1VvEp1JEtAoaF1JpgkGRzLmuMGapwVnCnR37tHWBjs3hzgHeuB53pdufeUu5oswK1jGHBWboc",
  "key32": "46REycGf3UDtkVhiWLR4wp1Y3M22EHQ75zMztLV5vQiiJ8tusWqJvpoKKeaYySuNqr359jyh7jWsfEnTH74cg4Ys",
  "key33": "3SLiSReh5vZqpPAXvZSihvV7YwEzwJEjSsAiiCw8GGkt6drYpjpxzCKqcVRAaBTY9YFGwidea2onzJdmBkm9E7ES",
  "key34": "3TXjtEttr1igAVXtuLHqEXQe58E26p3WdnXQiyhQcaSrmWiWtnMRyrpKSPHBekhdzd2tUmgwBciEg8pddDXNu1DE",
  "key35": "4SGSYZrjLg4P4TpjdWUmBNa5d9dDuHDvy3N2NaU93tS1maHx1fq2i9PyXrtjKz8Dz6kixMtDv7Cis4yRTTA6L1o",
  "key36": "neKrREYsMAXBwyNCwdZxYnVScz67gE71Yd2dLr2f8XnXzTpPVdtTRY78hUWkYUWWYTMAerymPTDkAWzCZVmrQMK",
  "key37": "36HkpEbMYSWLrFZsgVqAvca4joAjkFxBbCrzV7Thnn2pbjCcVD9QUd1aPPcCQb3VBAqGg1Nk7qNMCzozGgAKnMpp",
  "key38": "5bEbiGSx1NQ4sM4g6Ex6WNFVwgMobpc37iFxgPraNvWrzhzNMLb1jD5sdoXRRiM7CfXswCm6pMAh5MWKsx1GPqhu",
  "key39": "646f4wB97W2HQpipJEdFVwQgVcjaGotrMn5P1jjMiL637S1spTMT3A99KAhb2rbDygMKaxwdxJeuLh2YdukmKLw8"
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
