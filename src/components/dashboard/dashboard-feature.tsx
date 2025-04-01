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
    "2tRREptXpmXWKVVXBPuHiQPKJBYyMNMhd7mY7yG5easVa4Nr7L5Aij7qFrL7TCVZxsjhGgM5E7K8fLQL2Zf4Vubd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1GWjywUtq7RPiNDZLrtyqK48sjcpDLm7v6XwHAMeKRju27bz3K3YN7gofEEj3CRZPXr7vy11ernmrTEaZ5j3Cc",
  "key1": "2qf6AcLgRGZ9oVM2ti3P5xfXt3YyNSwQ9vDWzBo3Y4yBn1WtbgeuhPP6C21awKjocuwfiaBAyFvhdGxytWeKMp68",
  "key2": "5jCUR9qY3tKejJ4fQvRuTNL8uA2Hy8LvEmEJcsDWkmKbdrfcJHDTZdDkGHpQJNX6E9NYnDArE3afKz9KrPvpZxbk",
  "key3": "4cxLsWCBHiYRTPch3AcAyVqz3tqM3abb4EJAj6cFZMTNrm5JS33jkQuMqsQvEbfFv8nb8V9eJaSAhKbAytSNSzne",
  "key4": "3eahn8YDrSXHLFVEwMLKuMShawhuNyfcnLNZ1eYcwFus5Q7vkkGFWUYfVNNUtfBdd7y5T6graqy5AGz1Hy3TTVAj",
  "key5": "3smA4FghR4amssC3S4DL1ruFrrwHVMZM2NrajQ983PiGAkDZA9f2AWX8rg1dw747P2uoEd8WpSjTZdVMo8b7FE4F",
  "key6": "5e7Mrifi8jc4wWtQeZxp7Fcq2qjwvyM1B4ZtT1X6i3QDbN193oe6CY7dyjdpCpBhDbm9K8LaW27He8HxeLfVAvHQ",
  "key7": "3TXRRf9tu4iA3e4tZzAA1avzGkuoPi6sAuK9dMyPKpBe4u5MEoyGzD4zNVtSK1faXwKQVoYZfyTaFymEbvmhrb24",
  "key8": "4BGTVV4Sa4U8xXS6XLtJ9kY1PhYTPeS9Jpg2SL9xyLCU8rmLtjnr3jq5JwwgWZ61T4HE3idjhMki7kt4VdhGNpdo",
  "key9": "DZWi5cAhs5x6Wmoxfnc8xzhZZvdabYh2yywe5tiCACDVLUpVAvSJjETYF4L9TkLBFKXJGPoVqSXLtoizhEHcRvK",
  "key10": "32QcTPJ3SzDZnD8y86CP9q5DyZskinW88AsvmJS1vjuLHCKVVUKXC2UBh8pQNwhhNUUWdYdQWUgwznC96Yuktpnz",
  "key11": "3hJVZ5PT8f6wDPan5osrAPoz8BUejDeK366QciFpGDbbPDhhczpc6Gov69QNvfJ69nusLx9Mg69aa9iwFLKkBCws",
  "key12": "2fXamyictj1yyXwT78EH1VgnrYmbmxTWnpkkVRNKiGLZfhW5mivagGf6KCXwky2Sc9FjWGYnJxRg3WSYeeGRWv1o",
  "key13": "3C6ovUce3YmSWek3RXfJdVxZnSnnv8D5SYC3baME6JXFyRBiW7Kc18ewgaBzoN8dqJUANczXacikGmVxFUSZPMur",
  "key14": "3tSPBu5N9GfRYTxrVqC5juhE2ikZxXRrQKvCWroXvDLJVKMhbrW2u39kCc9rVGMq5PPy3o96eKDSmvP3vtDdBmwe",
  "key15": "5w3oDsPLJa2K9GRbyg7T1RHBQQfvJBXDJfmJfyvPWUbAzS5khhqtrtRcEncoTxRifF7EuyPrT4wKSkBQHH5dU3tc",
  "key16": "2ajQFFshBz1kfDNetJN1NkLKCDBPXhE478fW6k5wMheEoM7E1NiNFe54w5kWSb4d9MSWBhFo1WvmQaczTA2pf74w",
  "key17": "2jrUkH88pVaDYGQRnSa15JCQJvGtTNoj72ugiEs7S6TY53p8BqceYEMMPXxkyk1r81GfCCex2pE3cknwukWwMJAE",
  "key18": "5nzhbN9Z7Z49sgnyG7V2RaMC9Jc9dKiCJjQyLj9pkXLyx4Wdtm3jCNMTYN7Y4aQrn4Y2Lk4YfaXtshLr1en3gcds",
  "key19": "35CnyoSoC58y8TEbgZwK62MemDDJ2rdf8JcYMzMKLDMNtLsKLNMWjxeZVhkJ3C11e9Fw3DUnNrvuDRtLv62jHHzq",
  "key20": "5zv193k5NytcGo8ATZD1ABx8FY6bjPhqzQNy3B47tZtaJ91vzzb8fuzU3sRXeh4M79HqHU8W81UkdzBUcCmWrT2Q",
  "key21": "2LeK1goEseQQswDHVRY7fMqBCp7oe369vQWZ6Y1Batn5bhEmyu4D88aNhLkvA6g23qmSjKq45Mp2ZXjmj9nGumaf",
  "key22": "pS8fta6PVAmAUstQLXyMFFFrE2Dbb7Qdch91TfLooje2wjxpqHf85Um2D3Rn6SXPeyiBBvDWUPBrXoPUtZR3PSm",
  "key23": "4faEQghtnnpnGPJQ9KhHsyLDRqDPXxxgkYXmVTgV9SDpPuPCt81gcDWkJyQXnRd5x7ZVcyzRx7YoiryWTyPQ1chU",
  "key24": "4seEdr26frRxhBYeMrRcyGJ9nxp1EaqBR4XTUG8Fqjz69MxBqERhn6EAtnzSYVz32aZRNmojLqSxUYkSoELkvS1t",
  "key25": "4mhQE8cURdodoDohwQb7XgCg6euELgHw9fg1vkmvNmQ7zdoEZDB7U8wpQVJCLEGYiMTpKok89xCKQqBGVQRs6Jgr",
  "key26": "5qCSMg3tQdcBojEi6mvJewNhso3wSuGQ2MmorVFT8PDytuZFPvGR7r1sN97N5GbZWssrgc4XZofMEE8kVpTi3f4X",
  "key27": "5aK4ioxypsjLDtpmsCDFehdLL882mrkcwE9ZataoG27j7B8yEGewWhuMKv7YhSpiXq6ygzbuDTaGLoMJJEjjefhF",
  "key28": "3Y7McobDSmjT3DuzWwway5h7FupHeFh223YBW3jPHfKzQgSevu2tDiQdNGdB2xEB2FivgB1qkm683wezgCzC4Ui",
  "key29": "48bvmcpYL34HSxL5jKMBx9JdV5xxvqEYSCzbtRR2m3FuDJ4wvdzQe69zsv4bVnKq2RSf4A5rRptztKBrTbGNwmFC",
  "key30": "3Goz2tSRh7fgwY5cHdpBnQVJ2xxPLR79AjZuYXYDmTg3FZ51jfqfFCFgSm8SQXPQpmr5mtahWxQBSNLDzf1Mcqgi",
  "key31": "5czb5rmehNUavZnuHa71bKr4dEGdmxrgmENYfm1Ehgpg9uiWgnoticMWuDLe6yGXPzALWbwhLJqaYi1QRsNKH2GL",
  "key32": "3e8BowDrdYYGuYxwjC4HNVa3yDRS9wzm2ftyhLxNNCnbFNLetVoWSB2cK3FSYPZ6qKN5xhSMFgdxTTyKEBd5vvia",
  "key33": "HUn82CrY2eT75JvDVscZJhbhvi94AFhXT73ACPST3tTyLiyPMM4sJXURKEzmEbtFxsid8x1Qom9yRxcMYPVF7tx",
  "key34": "etDzQQuYzj4nnAynRNfgJfhZwg2htd6Ph71TNvNt7vaLKoH2r2cbjUPAUsZgJWRvFS3K2Mn8onFDPoXmAQ37URX",
  "key35": "4jHaYFGSFdx4CCJGdoAVvUFcFnXnRedqDpG1KfDUrNXXNU31AbGoXwecTkWS5pPQtizv2PC7RYWFpC6vUWQQzEQw",
  "key36": "3Mbcc8SBE9bv9C7DenaN45ouxHcQzYEcaPwmyQ8fUWpyci7sKRAV6RcGtmkU3RqeTHcgeLMMcFefMpg9GhtMjkKZ"
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
