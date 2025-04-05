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
    "2vCbC5HKr6YGPEaJLTJUNARSZ6VuKEAxtm6Tc6jK17gtUB2xLzkKi5yLNNJNB6hLWifuVPY5BLTRs1ANk7gwyDjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvrcBBGqRUE9DCp2pf2G14PHke1Na8djxZAkcxSYeFD44jZrEqZzspGpcGWxa64jgvF1n1VsVvEQhU2j3mwzU7q",
  "key1": "5RXx1VXa1SyZDPgNneGx4NrHmpbrf2upuc6hWmpHMSjbVXQBiVMbvgBx9MKwzEpuXYd8j31VksSs5NkqSvjQCF5L",
  "key2": "4XwiMmwHxf6dd31rj3LeKhJndE4EgfL4fxfbfJgZ8oko1YcerLZ68ryRfyShk3BEFhTrLeCj5vd99Cvag1NfxQWd",
  "key3": "5ckptAjnaw3ZnVpBhRLR9jDtV9a6Y5MjkAsoV4Q7QcxDv4jVK6aHeUqigbU6BAo6wvUWV6xFATCvxygkpwLUrLaa",
  "key4": "5LoYRs3zpmHRd5ymEBwycHkpCJmUoBD1dnutXgdMESpbvsJ5roQvdQCB8HX8Z87xtZUmnKGFdaDgrVYQSaNesSs",
  "key5": "5Pr92kYSHQc4o7Tv6ZueydLChwTS9NmHocu6TBnnppo45dfJsNWTXJ6hqtCsc9jT7o6hieAHxERXW3FU3C6BfBpR",
  "key6": "4LicGiYjc9EqHi3J9Zxdygd7qfm8gcFbia3tV13XAtKWx493qjGCmtmxoXAMyobtwoRh7wQLxULNHBNpBFG4r7hc",
  "key7": "4d1v8kmFANaLzvmFPkEsDggQ8qPAdCGn7tMnhtA6CGg8uz1fNSHYTPXcDQmqwQf7iZ1yHkpsLpcewnvWdExMsqXu",
  "key8": "3BkfjE6NSZCU7NHF17Nx8972k6NT7pdvXTafR6L5nvcJAf576dV9S73WCss3ioLHP79vjYuajKs5fwuuxFJxHR9s",
  "key9": "2Ctan8hWD1e3Wh6o8fsZ2h7FhPYAQfTZRmbpEmJqvdnMNmQ3oVqNiXoZ7nF9GoSPwv4ituGB8xrpeQoJP24byR4g",
  "key10": "oJiga1mMZqS9TWLKzPqVhxkRXfjq3mHrTP7bgZT6eHb6BAtLXvW1kX9R6VnbmHHVQUdmFuc1mKGGDexGYx5QrDf",
  "key11": "4UskWdUZjxpD8oPbYXckG5ywMBoqWoDCdb7n4jMbMu1vt12Nvtvz8H6X822Ji5MoU6aR3b5LQHyDFDoiBi39H1ww",
  "key12": "5xsiLJ9kCsVEzdnK9KpPdizYWZSRTn3hbzjd2kR17AZ8m6aMpDVqaFDi2QztetkH2ph9TZzC5NjopVL3wsEzQpdj",
  "key13": "4KgyfuDmtzroD1qai4yVb7xzqTVRz4pQpeSjPfFcuvgT1EvxaxmkAMggijD1dQurDSmgBqRGjkqKMrncygCYV7rj",
  "key14": "3anGkp5z8AFDt1d85R8QPwDqoxTxpuXJG6TNz87z2m4gMHRwGYsmEeesEVyZvPQQKZis1jtVCKBTyBURgMVgRThh",
  "key15": "2uP3411nTkCEh6JkNaybsfaMEZf9URwGfZnqQNsnMCyQECZ1Q12zELMjNE3eySoPjFfBGV19LL8JWriPy8pEqNgS",
  "key16": "y1jwJY7o6phCmtZat1NvC7pKXNWMSSnEPe9XpHtjvdm4B1nEuehvxyHWczYnV46xebRMdv5gfHxcDtHP9nAgaSd",
  "key17": "5MCqqC9U7UmUxVAXer8LPwcaqugA1PDV9cEpTRrNNHmVduv4z7e6ksbcTzwRQRRobTUrnRtGRxysH3Rc9MJF5Tse",
  "key18": "4KHQsZ7pK6uGZhmrJ5PwGJ1oysQjgyoZ32M8Qj48WaFdZsGXCg6u1Sk1KxYei2Q6uoTYcAFoUoW4FeVfSdmT5uyH",
  "key19": "4smht9AQFL9BYSrDprebZJPFuDmLtqkAkYQG5n7VBoGm62anjRYPib3KyaBHXk7YzuwRPQovq7PuGiYdjfjfn7aW",
  "key20": "3EjnPWuEZvqFjXPKsQNchLMBJ6czFFXxTFkCQSjzUbvDv6RsygBcUFuPvu3hj4Z62kgZGt1BY7uKJfqta1fZdAZ1",
  "key21": "kdUymARjQr3aXQ2FbrBujwuKGR7AzJkdFUgxPwg1amhEwhFbpwLiCgwk9pmA9jbBkyoKDB2QNTznAy1Xu17Z48T",
  "key22": "3TFnbo2FBapbmEC3rVBfoXs6N3ZyRzYm63D8ZUXYZnoEXyDNBtUvnHT5d1QAm2WNo6HzcKrmFEfmPivQcbeZiTpP",
  "key23": "2AxznwFqQtWRFRWytacacWfrJkF12UGgPmfDbWRjgonJUVYgjydipE7TMugWYvSWsz4nzfZBu5v3HPH5EABYhVuW",
  "key24": "bUXAWhWxSwCc7T5ggCRr5aaXPRALrLsuGPMZMRLsZHp8cZGGT7Dm1gtKVnqZP134wfVpw9WWZdonND9d3d6qmn6",
  "key25": "31yTRLS74TtJZk4zELH9effMWDEdb8xSW569HJsr7eZScmdpx9xonL8aZuG15cMfw1oGmzz3RoiYxebBpwCYufxZ",
  "key26": "2NJz6CCzAh6qFimJPjtPTpMwh9JcFY3i17GfAWCDU1TukQEh5uACUdWVNB7FusTe4YfuPisK4nBqqygZUWwkSYFW",
  "key27": "5pM8tw2eVZGt2zPW7tNz86f6hJbJ6W4WAbgam2xkbpuwaL9xPfNi2S3iCFABrVhC32VVCYRk9cr3Pwrasb7yh7td",
  "key28": "2RFNUE9T2RESAJehtZkKXiZHoK3Mon7edtPxBgZYMJPbcZo2kH7mkoSyFog4NUGCPimRMf2hHm1wCjGHJKc4wVKZ",
  "key29": "49qjJAE9QD4z8aLBbKBLsUM2T9riTreDVEdtZ5ABVmNE5HCF7p6g3bvNZNMYXoCZXVTjZ3iWsv5jTkRdtQJkmjdU",
  "key30": "Dth2qY3VrpZHFChHm14fcxTQ3semdnD92sgQeVRwWVzw6e9EheeW8kFZBeWXJVLbdii5zDLAkMZjqxRQx2E9UNo",
  "key31": "5zHChX44zjxV8cwGwBPAko4texCqQZqQ7AzDMkAQZ61V5UFh2FMZ43r3TxvW2uhhtk4TVwZ7PukD9bc8RGYtsmbK",
  "key32": "3KnPvr1rArY6Ac8nBDhxEYTHkk6E8gGxGMj8iX5udGiPspiKprU6FxcSusnbM8pSGLPiBWPQaGYjgX4gRzASQc3p",
  "key33": "4m6e2uXLg9gS7w6ok4f9QqHAmXec8S1EPXDwPwtxqkGLpNC1HVJCDjpoBRhGbtoXN7MyesPoFJguV1cbhqQ5263G",
  "key34": "4nCiEssAMWmC5L93S9nGpe4rf1uT4mJ27j1r6PV1PjpFg3nZ3YaKtspha7NshfyQg91MYgj7eDNDLp7Wt9uTjog6"
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
