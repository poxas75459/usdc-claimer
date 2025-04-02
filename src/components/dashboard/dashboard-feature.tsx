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
    "4us7pgwDo5VEPCc6CyngBmrsZmmvVjmqQMeULWMVE2f49gQcqQVwAPGqLu1XgvC5v8iYzLq6nomUpcw9MZRkdJVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kd3mYKVUeB9B5dyCkcwygCGN3AdiQmZ4u4Qp8DEdjHjdKRm68p9vUYXRi2A8f5CdyqfQKHuDcrV2Pv76rgCoLnv",
  "key1": "2oignEvXXurYME6YaGMEbQR11kjKK86n1QFGszpHDxUU8evkTBVyzUNXQo2LqbFerg3o7z9gkL1fR6S7jvp6hh4f",
  "key2": "49DmSZz2ZEsFpsTaevw7ovXNTwB43aPXFYZddH9nNKYbGFEVaFuSB4MzCT1oJapbTKJcnw44Kw3gELhBcm2EypmH",
  "key3": "3iZZCbYXLVjDjRe45kqzHxAS3URU9T4nCBjrqzfYWmuyc3W1VdzTA2wd9wdJyyPUkhyhRDaUuihgyJULhVuyd7Bd",
  "key4": "4oyHkuMuRGPEkprkihMZLJ44TBj98qDki1gwcKMAFUvGwoQTVssvu6asL9JTkarmdD3RanAZgyyEck3u3Csn7seb",
  "key5": "4AZCLqgE74TpQEgHb2DxtumFofpNw2gmN1uEw5xxUKNcKnGH3TZqq1TEdL8ir4i5XfUbGCBQAVBHtgdCmdxoHKQh",
  "key6": "4ariwLGXcDTtUGXKZVkRJuabqYexxGoT7k8NhWWeSok8tDYMVRGWEcgPHSoLi8QtC7m9TiLE9qJAFo8zaAkBXpYz",
  "key7": "4v5MgYAk2qnjFLq6NbWQTVwQnhL2J5qQYsPoKDatdW9w6bSMRMn3gf4sc8zBLkjsD6Q6816U4skPv15dBziKt7iG",
  "key8": "3z2qJgPu4tyh5Un3yqxDEACE2WrogFrdUaCp1zzBi7TWCta6qcqYvjswBg24NaodMx69nG1mJqevyUQn5Shbasz3",
  "key9": "4WTsXkg8DpsAuajZZ2TXMHTMWqd4HcGnxgswRg9jNTuLRsLc2bXxbRHUuK5zcYZsCEgNAsea3dt47fiSBuy1jfSZ",
  "key10": "WAthejRPondviQFaLgbMZscG3eR6X1c2h1JobDu9htPMpDampYvNExNvLMdsXwggBbJeY6KKWJH7ScDTpgpoQaH",
  "key11": "3fpmhmpSHxAYybjjJxQxSyW3ZTRXDXzcFvh8AwsWuZWYi3CMfPvbnGFRM2NJEWPCwjxPdGnz6D9b6NqL8d2fpniV",
  "key12": "3QUnMdKUtQth2SGNCyDowt68xZPGcxubAqmvf6ide7UjqAt1S3J4MSLbaJ9nySnK6horoAT3WUACgTevgP1RFs6R",
  "key13": "3RciSaoTT8XqNvuSppK9WbrWn84V9hhR5ajc5CPESYSpruYhqSNErLtasLCuTSaZTJ1ir9avYQLikd2jTaFKrHVc",
  "key14": "UyYxsn8TuCrdmPTxQmJY2abjnmg2P5QCeuzGP5e4HCfPDFFKPqTYVAF1VyW6zjLi71pemhLxRfrSV4ANh1jxBqz",
  "key15": "3EWDeMhCNM8yesxCGfP4qmjF1KATgKicU3KFBMU8UHFtVd5u9udTLuwvrHxcECZKQxeiuEkoGM9JWVWTQ5bNiX6q",
  "key16": "3qnAaUxeKyPr4P1MUHBdzo4bwyTaqkPGQvrqZWmwDvZktVYeKDEzEnvMExCV5n9GH5A4e8BuRh7TWUox7CSahcSA",
  "key17": "3WNbHWUHsHuRpLAwhS647QVLz3h1B2tLhRsxv2MQHnrmG5MdtxvcbQnMDKHvB2DkTd27Qn3TVFiJgM77h7tz8Q2D",
  "key18": "sdmTTZq9td3BH1n6VGiGZeYS7vNeG9iHatpPGEHsELuyxnwBPgeBwDzEr9UVyw4e59k2Cpd5yH6XUG8wwy36NQc",
  "key19": "5c4GD8bsMMYhTqaNGwPNbi6bWCcQqdtYVU1dgxtUVXEhTKAQAU4JSHMezTeb8BfnS9s6AiJeJEgwHJiaPmnCZqwW",
  "key20": "52H9r8kzreME92ndBK5rzMzottMrSdfnMopDAcbhpn2Hr3vYsxq4Q8Ye6kVr2AoJwdKmceMrkYADKpDcM4Rqy7X7",
  "key21": "3dyGtJDDsnytHuv6SuZrZbDHQQWdCcC78jnKjHR2APYHXucAsbwebqMET7GT7GX2EXVVesxMz3jFFKrSJ3H2oXGS",
  "key22": "LMFZHmbfE23qqiKMT26hW1FC22d8d1mXnJDoXirrXFmo2VytPzqSoNaqEbcNLFZkS5nZtXcA8aG8gyFPcNsxtHN",
  "key23": "3Xxp7XrdWMRkH55uay36ggDjVY7ya8UpS4xdJdskrczgwCgzNTpaE1Jwc7BVyNAexPa99vgWxu623uY5JKogw8o4",
  "key24": "Bgpbuws9JCGtThnKEWA7LjVuSum7gaoUR6rj4Zi5Wt6f3gQGanLnkQhNiMwTcULZydNaAooN7SiYWQws5AmiAx5",
  "key25": "51BDp4xStiKmNenJR1LvtTpRo78eyipvXxi3G2eXexZeB8GyHMBVMgJmMVrirq5fqZ8WrhhwEAN1CSEop3Pa2vzx",
  "key26": "xAfXdEFGXQVwbg5jx8qa7ukHCnaz6THK8Eg7uN2fxkoVXSXUhGAMNm3jdL8hFhfmrXkNmYGQdHcQ4C7zXnQpinP",
  "key27": "2emgeGg6DJWxKXAj9nV5A69qr3rHuuHmdqXbexepLcAdFfofUVUt7Sm2F9duuGiAvpU3Ke38kbNEEer5ZMuNGLFo",
  "key28": "2NxXYpcuGBT5iuWyx17iQkuzCSLy76RLQU9xJG84Mg3Uwj8aQDcTbqB5utCoRv6wwBbTVwvf7NP1pBPsxN7jPF8b"
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
