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
    "2NYPmhntDS731AyxS6dtLqaEtK2Sma7naaaoVVuXLhBxusjsmzhq1kfF827Ubkd8K6mWKfHZpxm1afuEXCcTBvhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A6GZB1CUETvkPNByXxWSdD92gXWXRgKskLF9p5BJfe3ZsMHqPHLBxoRgNCKPdJTcLchTbKGHLRh8ZzpL9ndS3CA",
  "key1": "4agLwsCBRYHwk6a65HKeSNqTcWCNZAdcdMYRmiZ2n8bqXn3ChGS2Ai1CBbfFsTQYQrhb17qYVNeDR7XSPGmY2hnk",
  "key2": "4tX5Jbq6mXEn369Sgurm7gvP4GG7q7xEHhAqGJgc5S3cZyDH7gGPzx5WqzbrTELnKLwV3A92JPZHenVEuLeV5DHg",
  "key3": "4q5ULX6JHM217T9nsCx425ZggV3fEAwnM6W8ZD92cqN4ExgLbaihw6SqzKxTxWjQe4esky1ogUjK5NLxHr88ijuD",
  "key4": "2yzec2ydybBnBt82vG4R2i8Ttnvx1RnPawaHy9WB7ywKSf7me45sHqzoGq2fAq8Q79rdXTA4pfbCV6F4jqA6L6KR",
  "key5": "4AEmrA8BMau7UUYRkzpQVUjVCQ75g2Hq5KL4dQTGe5cVu1VgyjmbbvVDZUoGigPS81WLUxL2zjMVUvUeT76wsmnk",
  "key6": "2QJEziibBojyXRBKMnthJTMgQeBc1cHVDsMBhkhwwAJKQft8XxqueyBZFUyQLFtcyBs9RLbida5myHnpA5ozkgNq",
  "key7": "5H3vV7a31YZsvoXos9QcQMZXMc8dDrz6PnEkDvDo7gNzd1HsTid5vKcL1EczvNgX6zobGgV2Pkkkx5CtK9RnyaYy",
  "key8": "4bZ27aNesKGDXT91D9JuyHyFZM6ey3nQUFwGmyp8DqJVwbXW5p1J5cDKr7YfoptfQHSCjr3dubzaW5sAdDbpTAf3",
  "key9": "5pjCNgfvd2Z43DMkANvpLz82wSsy8JQgeC5kTR7SeYSahUEmU4aiW5fQ2M5QkSc97JcrViLb3TFvgc1UJFKejqWK",
  "key10": "62j4eeX9idX4yXSchx9ms1fymXEq7ZGpVZSo8TrJnbyMCWVsUthVpPqkCtnE5Z9zr5UbdznyjS29tvXfuhtDmKdq",
  "key11": "3CDYgkLbzPUfPZdxzJDbwYQqQx5CjV33W3xi97s78WCq6N5g9jM27DVT2JhH9bZByMBCCLkaqCCz4b9PtLzrd3cv",
  "key12": "2WaU9BvWr2obK2XjVi9uHuprQ2GW9kqrDrujPSDvqxqo76niXQ64SyZSHWiiRMrpXZeDX3c99xG3SYJnTxzpuBD",
  "key13": "r6ehW1mjRY9sA2iqaBpzZBecRRAz4nnP1bW7zsJF8nCwWyUGSHMpgAJshPGLLhGfS1s44xCtneCWW9ggybke9Aq",
  "key14": "4KFj7X3rBHq4GfvncKwb8oN4ihu7qYSQqhvj2YiE3eQPqgnBNYZnXQdk7qbqWe2dKYJFuR232a4du8eKVzFkKccA",
  "key15": "58QxkDSbAdey4za1Yk3apAbbdXjjN3pn4y5UhboyUrsCyaQSpS96cbm9BJiWdxRSw1ADgrZJRPAAWc6MjJ2eFKCX",
  "key16": "2ptZ7MXVVjXmfZHCye2rdJKNHxCaG7NGPiDTG4TBMB3LS3sJ5CMpu1JUJB48wT8aVS55yGGBXLHHgC6oWPSCgWpW",
  "key17": "51xow92e2bG6QCVZvQoHVr2wAzuxctQwzCPNpkASyTCuqrKczs5N5FezyD3pdD7LAWh7NAX1rSRj8E18EbyKNrCA",
  "key18": "tKiMVvbsizxP6zrKJ9vzyQC1nfp7tAn1ProgEQCRKxJ5imshFn65FWpX1xVDTa5BpahGFp1QizTrJqwRyqqpWLJ",
  "key19": "62Zoc7cZCqz2hT2AhFmdD1yAAYnjcErxP4jxFN8ea1bsfvKETMRfLsggRpxfQCY9KdHCREpfgngxyS6cw4wWscpT",
  "key20": "5qpt2gcKXhmUckME2KSooQDRfGqDkhy1y3GgMw7fdEqMj9F8Zv26ZSDAC3NmQDAoTRcwjXhRS6PbEBafxhvDvgiF",
  "key21": "223CgJ28sUhuZJmKTjwKD8XFTyyUXMD5tT6Xz5HrqW9aVCc872bDvyodBDJArCUNw2dJ6h8ieS7sG5YDrbyomwbr",
  "key22": "yZ4HXwHkmMT9Q4NCWDrx7gEwQqGCB27i658HnV8RtVbYmGBE2PkSuTWw7BSt1TkpKbKaZxyL7GQcPSsEZ36bpY3",
  "key23": "2BuZv6xnJp4WaxEg8DXuhtJwmdP6kgUWT15qyBu29g5Gvx4WbaWxdfysE5GSwhbpQtsB3BcDk6dAi5D3m1tpYzgC",
  "key24": "hdmmpAm1gNHqtYqEGSZByDoWr51HADitwhusffku9saLy9LS6jcwP6xK79atF1mPzMp544gHKDLXeSiCDtGhaj5",
  "key25": "3xv7zQNZoDeyxtB2YWCWPwS4c8qLWGrwzQ8YQ8MWfdi5GYNepWC6HUtYZdbYhkhKRy15H1qp6bfMqSf2FYRAd3sg",
  "key26": "ivaVFCyQ44ZZ98wZSyhQZjXuJ9Pang43LckBPFKz6ZzP4YuUP8WwmHgy9Nx5jELLS59arxN8HxqvAcMnKLBkgeP",
  "key27": "2hovNfiU4M8qN3d9TC4ZgaZzCTn9V8bpgy9vJneqXbrUzK6GXnpip2tVvbbajfqbezQY8je4YW5nzfWRckk5uuMJ",
  "key28": "5yPFLBGVi8WePTysmvpGuL1rrGurjPSThFRfYwfgNN9CD2e1tLfDiTg9uZCYnHn3get5SjN1RiVPaCjkfnvPhepV",
  "key29": "3T6iLkGLsycDV3wMjTDitCXqPsYuuN3w9BfSj8jen8fNFS8UzaGDW6K4meH64y4smdqK1x8KceB7cbdJnAt3ZCgj",
  "key30": "HCCYek3KJ1H1HfumRWu4fATfFa2vczfJBB629frApUM29Fyk8Fvs5akBuWY52ErwQJs7ECdRMH7hgsfZnTjrNMs",
  "key31": "3MxpbvxBRzo7s2K3MWt9kiMNDzUx45N8Cp91exqfmhtFDRBAcrajBQi9yJyBVWy3oSW7bzW6hCNEALx9zEUmpLgb",
  "key32": "3HxYnVhJN1hAWkzQAvo2PszJPb3CnVJjDNHXyNFCFvkAEbFAs7ZNHcjr7Qtd17dK9JQpzS1KagoXeFtNVjun7t26",
  "key33": "2WegDbLSoYv1C6XgQERS7RmsmnF47kGZ4fSAiZDX3PN41SEU8sJRvxwZUoFZi4es4v8rcTyY8DbLz1792AKLkXRT",
  "key34": "412M3miPXBUEuxPvPVY3PacBp15oSb2XL4eFPaeShr73yyasyePXCfgaVZ8Wxgj3BCtfA1Lwah5hEhec16VGLbq8",
  "key35": "Xc2f1vDT9cmRMeJv7J7pGqyJGQKjcHw9egdA7vEkPD8AHHEZZkF4uwcFJJCTrochAyK6LEobrQRFuckHQuNyGdf",
  "key36": "2wM67Mhsi1fgcpK4ZFUvMxG83rzJtdX9AZounxqcw7zqSEobgV5ogF7AnMiJpFreY1uKS3tgDkV4JdgvAQA77cqW",
  "key37": "E9RLAQdwV31Tw5WqLhAMsNbPDL5B4nP4GLUdeaZFC27BvSvuMVs77btfdGtfjsetLaUKyoSvpAQfSLRRGNpHgpK",
  "key38": "4h1kw5FSw6JMv94FtjA1wN4pakFeCM38VcwDVKYk9SJ1kHAU5PHKrHH8K3mhvvPGN7TJiYqVD1RvidqPRiGXmaLk",
  "key39": "7vrqmJ1v3yoywYtQz3dtEgXQaQthLY7Md5LJgF4K1HP192LKRbqREHs4S2UCGRS8dkReUQHTLWowGbh7UqZfYq4",
  "key40": "3Tk2LcSYXo5cWbVS6wMyyFLCpFFrFbVMWtqbPEsZ5nCdP4qjgnsRpc965kNnSHQv1U3eYSSYBertbWboaypfXovp",
  "key41": "3cGufCEBJTHaKV9spyL6VxT7r6yecfaEXfnqNuNGYB6QArGc3pGYQsba82LfuvGymAMrFv2wn2SqAvEmo4a25iYZ",
  "key42": "2BsnCndVqexLsiHVhchecqB2BpJaJ4ETTisNax2nTa6fMV3w6AzS3xhDiC8Y1QFUQCfFeWXhtCMmPVf84QNGsUcW"
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
