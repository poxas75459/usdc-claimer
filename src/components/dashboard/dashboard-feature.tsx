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
    "5R6etDpCdQ2KCsSuL6B6MnTZzzbzxe7gmLhGNYZ1YiY3ZhTFE1sXj2nkqHzsxZxWVgze1JXmokF5q8UVMwYZ5z1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GUcqPANSvWa4wt18k2ruGVcJx9sTuoT1r8G4R2gPuMmPSb4oCxtZgejmScyLtBN3AT3iy1zNPGtCujXGL8hGtsY",
  "key1": "4UiBZZUGybtza2f5cBGxGrkywtxv2V4HZoiw2tb2ZkhjxwRtuFvrqSKijCx8neheoKTkMHkjj5SNkqbZXPheisP8",
  "key2": "62jvELw6iaRaciLNvGmbmFSJrb23TRkDebpT2k7W6Uz3DiHGzp38n8ucaBQTXU5usbtprV8WrNSVmHFqeu9x3mmq",
  "key3": "2i2WpwehVdmAYAzwU3ArxEgQXEu2f5AYPD8qi6J58B1naMs9fk7n19FX3qDaBXiELj4oLN325rqS13LQCESAhMAq",
  "key4": "3LT4SN8C9LgcHjcmLUZmT8JNrfGmVqrFARphJccdg8AoDGnuQxRMLypyWr2jdTj9U2ZyPvuPUiRBLPx7wz1MU1QU",
  "key5": "4YWwiN1L3z7JSCMddA45SGU9SrsudJWWsALsmCBiPg8vEwSLX3T4js3ZBD4b29H5XgLf8phicKnL9RshDPJpjFeP",
  "key6": "4GRgd8wyqjvcwbCvqruDnmKkhwD5EVPdyF9BP3nxoTBx4nnWN1wXYynn9DyGVRxhRxHTfkE4gwk5nNNiZK1psBje",
  "key7": "yDgugfynV4vYR36B2kYbjcfHeSLNoQUFJE9XumNt5hW9Za86b6mrn7v4GoPjhR9jCaXvkXnxg5wWyBiCbCBoqH6",
  "key8": "1zPP8kFhcyr5FYeDTkWfQW2EGwNgXDPhvC8WebjffYPPq2SxCEsr5RxvnBTVJ82vmpGb12uWX84hTU13vD1viXq",
  "key9": "REjCMeAzoub9faPGS1iMzPbrPYsgJ74DY6cLe51XKttT9tDUVNHDd1bpLWx99rLGp3QvzfNkDUehZqsAz6jnkfT",
  "key10": "2jsevWMAZQ5rZQLpxAfVFNf8kBPA9FBjMsv1n6jcjBfVriyfT7Ka4D6fVfqDjzitS5sB1AGcb9qN67iiVFLs4cJk",
  "key11": "3vHwifPmNyi3wvdqNQoM2mH9y2HuM3iV5Mf6SJe9VQYjKGp7V5iPJdBfff5tka5pFxFkuwHnyeT98LbbUdvoX5RK",
  "key12": "51yHZeiqrm7Jb6tt44jB5RUGKaXgaTPKF5GeSNrM5XwRvGZ91Wy8xd9MYb8oBTjzfyJh2tsUZ2kG9njyvoNpbk8q",
  "key13": "4vTjsCGyzbDNVSpfEWFHGgYuNb61pv7Z7S1mvAARQD36VwrjQh75f8p3HHh4DDADg5oWFrJC9boJgEAcHJJ5PMCS",
  "key14": "56TWfQQTaMXuDi9TTVKwVdw7bKWZEtj6daRVANh8dp6gFLKwibwjShJHnEg9gnnLDqg1Wg6YdrqRMN4RE9XHroLF",
  "key15": "MNEWu5jCrXuw7ocPBcgJuWjSQCbC3SJetJ8UhMsbRXWA31M3yqJnNQio9N5gpSSZfWpBNSPnnRVtJgrA7P2NaJL",
  "key16": "3T1RUro9ANq2xxKiz8hvve7etrnAUrnUEcJ72oYAatM5Xbi9zgbCxraffcpVJGaCwr81TLeys53Xq5g4BZ8T71LH",
  "key17": "2sL3GUaGBxyKE1CbXxGskgUjFKJfMzNyv5LZbiH4pDzMZV85n5whWSaEjrDBpfXxgATycLvGYtSDUdGXDVPVJCKv",
  "key18": "4ZxYtnXkSvcqaVx4XQJZnaZCWfNK5P9JenaMXaANY2yVLrte8rxVBqqjF3gr9PQ54Nb2CdUgRt36v4qxqZtQ2fTS",
  "key19": "4Fo5zwQrnA3fDM8m3Um5kXapqP8cRCanAMfvfohzKnsiYkdJ8HxwJkH9MDKAcNQ7n74CvXdxrBgKmiWbxpvJvq3b",
  "key20": "3f1chsm5GwM2MGcv4REAdx51qB6YFgUDBMbGfeNAGDNeZEMumXPnYveaLCRbADuQMCBu4At2zvZ8PCkU9Hm7rfda",
  "key21": "2TXxS4uKrD6A2ZnPoSksxXTx9r5HdQNA7F6XXZooovePpMdvhoZbaCyrHeUQQHDhzZpxfYRj9Uid5LbjuJzU7W4E",
  "key22": "5whnWyVSpcctjtUStn6gjLHzud3mA5X9g2AwLBHB19RtXNpuZ83NfGaEJpaoEjY42PzACh2haj7RJxCdrf67h3MG",
  "key23": "5yVAndqtDAGuAuFR3XWFEyCJiXS2kQ5uhkHfLyxYoTvG9BrzoFP5qUee9YiAHnRQhGJhxZbkQPp9qMic3PJLVdZj",
  "key24": "2BhwRxgcV9xLbks8xfCfwjCtSgXS1KR6ScTpeSmj2oP3bDbkXt7adEXMNRTNb2sywePtdReecsDtJvrYEt11pHzE",
  "key25": "4viXtsu3b979sGWdy9pGRb9phMNv2Rqz2e5Pbkjt9b2rYz3UTYdj8ZhVnhqX2bQeaU1LLC1f7JUJCXUrijsPGLqg",
  "key26": "599CsfgVZ5ytHWQnMpBQh3g62oxSrtdfYUUiC3Tcg1Fc16tFKrwM3MKJdxyhMKKtzBAK5SKU6KvfwvmfWRmjKuAV",
  "key27": "2qmnxP33X72a6uo5NyfAow9xaBZTDhKAeZAq2KsLsHEuCJgA9eUj5W7wrVqHAJqXipxri8PCx4YtQQ7FqSyWoroo",
  "key28": "4VeAvArAbGPecD3ZT54C7AyzAgToAhCbhjrE4FZTJqeUqqjHJ2toz9KtN1wk4g4EWan1v466HkgSCaJ4QMxhVcGY",
  "key29": "3re3FmpVQQBYA5nyVV27ipFAC6hCiC56K7MnqSrrufyLRr2kuje6vX25BqK4QFAFFwrmSxUbT4nqu59bwrgnd9qw",
  "key30": "63fqXw6KCHBas1BEfXigFGPYnwxyF8HAX51Ai2Q7VyzoQ2GEkUWe2W1dqn8h3MStM7bZ56SJqqWCmbedZPx72fju",
  "key31": "3doCMBEvpSRnuBLnhLA6r1ULSHaQ8j9X6hbswMvpuSyGKgHwjkwHYp7KTVc2rFLLnS6rwFP73YfUHT8tEYD6E3j4",
  "key32": "2kkRHuX4RfegvHh5RYAD83ecNQ6PWHnoDw6gEGzVRCUx1WZUCSyR93QjeZXc1z7P5yjaJng91RnWLy17okvNnRCv",
  "key33": "XLYpSo3qXd2rvcTuHLzSWWQq1z6eK5TtpUQRtSQ1BpUxg42gTafZztL7AUrzpYsnkF36jVstuwuSdnP1WDgvWv1",
  "key34": "mTi48QrHZeD8QUzLmmvijuZ4jDZdqRczBc69KnMw5MEcSWhnQbpgAisxkUQRPrFgmrMGrR8idfuXNoxh18RZ4Ae",
  "key35": "3w6GPjLHH8of4LbsCgknuGgwyioT3wqEg8LTPZF1sfa1z1oH23AykFCNxPhY94Js3zsygpNLaP5FVbfYC7LFvMLd",
  "key36": "3xyiNeQMDDBiAHxoXpw9LdeCrZ2ccMh7h3xtUdzL5PNN8KdSDo5cdHVKKZwpLsu3LExFzPKP5NxYR4mRmadu6p6T",
  "key37": "2m7D8PVyLNEMFP931ShzGjHM7CoooNJRLyTjLnKrZngXMiR7nXnVi6bA3DGRzcwAu2hwYdP4EtbQpK7tGonZXKZy",
  "key38": "3VBp4xRD83PeveZwyKJgyuoDVfoUzLwfjqU63DF2gpvqUQ3HzX1La1Hw9WC54Q3jyTNr9Qi44HPwmAuYRs95rQ4q",
  "key39": "3Hsh8EALJYeAqTVMP87wLzZRudx7XbHpET12QNB6CG1RgV75XckYEPXiPU2sxV4qQMbngUMKiR4uwcJuTRN5DErs",
  "key40": "2fobN1akhtu5JAWgDvGzhVSAhFsRGBbyCAKoB6bxGt6882CkxkBEXxuSLwYWFCAeWbdMRkSyYbzXdRKcsJYcGMUd",
  "key41": "66qnnjx9RtXhiUZBpAHCMQ8JkxcpXPDxNxmzNPgxtZPJymoSNHgtX88d3m6v9JdouQqs7AJe5Rax1fU6313WmJyF",
  "key42": "4MxRVa5KUmKTuTTNiMZmi9dBNZYFYN6QBjASQYNEGNUxMaq5zcSi6B86Lg8Fsx3g74vurff7Rm5F8BHuHyANXGB8",
  "key43": "5UsVbovGQzr4Xpy9W8JuqGeTYFGq4T6sMV5D199KoPaobaeQkTT2W2kUJ8qRgtXyjdQjbSKfpjBKDYDS1MrKV43D"
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
