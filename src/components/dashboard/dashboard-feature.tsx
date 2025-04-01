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
    "5BQYurWucKRk1DAA9VoTbL3YuvmkQyWffyHVcFVbWwEBqr2CwWyz66F8E1DHbun8eGDt7TnQi61Gg6cDqfio9n7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xhvuj6WpHqzpdKq6Vb8awHh4Hw92id5Ezs9zg4f6kPFcUdC9KDfuri7TWdtJuPhznHcsMML8fXbuwbBDSe5yVFp",
  "key1": "2gW77De66Ap6pztCfvkQjDHQ7NWHvcK18VEhETAgcRzANCvqh4AiSth9pRvRmHzshNckHjdxnsPgUaDK3wntTU3X",
  "key2": "4MbzQDzp2qLuAoir4zWRrGnNxbfoPijgEY1TawjU5KnzfjyWXKiUKoW27pPgFobLxJjxPrsX93mGPCqBhtrjaCaA",
  "key3": "64wmK1kgJP9X3EqLJbZ67QADCLrqZnpMXmLAnFyhL5PS17XtoYUngTM9FLLL4jJd8PCFCTtpcXuASnFXgC5fCAW5",
  "key4": "4FdNFy3Q2HmLXV5ujkre4tr6BpX8X9W8NLWK2hVSdCEzHjKyBkgzhEn5zyh9517YNdm1M8qJEHUVGnEqXs7uknNH",
  "key5": "5e8mxjHbotGMaB8Bq74WB8nVerSkJY1TMNT91dQsXRLF67C31A4vWV5TpTBdHohEZ85PvjmmB4oEwRjrpYkw55dD",
  "key6": "5mrLzLtpkCN8EgrPkK1zdB7r3zZN5eJ9ENrdBUjc5SBVZsVp5XgnrEFnv4SSjb1ZV2pxDo6tVpkL7NdZu2mHv3kj",
  "key7": "2jwZUyKnpkL3CcNsTD81JYvpzmzZWrykJFHJb7s1pinWjHGw7FWgTjZFPL3L6sksVb99AR9rWZ1MAmiZG5rGoRkg",
  "key8": "4i1pNmw28f437E1MELFekhsT1wStwSbbKwdRCwzJoKMFBFwg635KySKMQgrJcRykCKGzRXQZJMG85k3izv54sp9L",
  "key9": "5XYFUjJoSkbYhrnhyVQ33roKquNb9dWG4C65fJNcdTYe44yxkicBMEqWmiKimtu4kop2we8Ubq3zHkxCu9V31oXk",
  "key10": "57K6Yny44h5XPbCUuUHNR6EjKu3uefQK2dkBFMGrfTohJfoSAqnx5XCUNSbAZPh19ZJyHTjCVEGY98wkedSWpufA",
  "key11": "5os4UQfWevVDB58JChXnFizs5Yk4yBeoHRBeey3SUHdCVraAKQjP6ututcxjAUBna9PFmFaAeg1upKghe1BDUUrL",
  "key12": "5F7FV4fxgs8McWuQNtV5NvWf93q9S2gjjnJo75ETRGCJL86x6R9mS1nnpygUjMZ7rL2Dvq48DD9nufRoKF21Mbsp",
  "key13": "2Bvvn5LyjE6EHvdBgxC7k2G3d7Y2kC3ygiN6tLwBG4zR3HCppBZSg2CUTMMQAcgKCiPK71jJsXfqiiPLVdvGcdPW",
  "key14": "5EuZMvo9ZMYCqcCLoJ5kup7yYhJ4w2PZFst8S8Eis18veQA5KiaKQoxYFBkTofDahNVbrwvarQ54iVxoDvq2ZpFJ",
  "key15": "2M7Pg9kVKHSoVMkLxCY7wruXJw7wAho8xQak4maFsFFq4CN2eHr3m5BfDbXTiArTsZkNcJ2ysFkc9VoAVoAg1a9B",
  "key16": "4MkvH6r1aNhU8HXa1g8Mc8T2akSPgWjSrsWWosRMebdPqWk8t1uyxGZjhDRhTYfH4cdnqh8qtEhQNQpPcU7R6FWy",
  "key17": "4aJZSuLHYGKbFvDXgLLYC7i448YXMBwbxCv2yBV9f4PP4mRvt2B7PJgWftKAXf8veNkCu8wbWATf2PqmciFV4Fgc",
  "key18": "2iBRk3LQeUFvj4mETTVU6rwY6WsGDPjMf9eUY5rbuMKJ9djRGPYRkzp1G18eM7xRkhZs1GHqJSjE8NWYtaov6wsi",
  "key19": "388Mo3SHxf579VQairemtLmPULMu6FDWWB18bBiKVCQSy759vobSzxxjDKvNvhtvtjBFwDptu1qZ18DjZDMK8Tob",
  "key20": "5H7euKeg5zZyYH8Nchq4pA3utMYsFBBfxaNxjp58Ps2RTAbnMtfXw1yXoR68gBX76ySxYEfsz7izuicxbQUsbLwG",
  "key21": "oadvP32ScKwJM1ECRr32DVDAAbtJB8NcizubTWMrn5JePCsT8bPJHiWgvpmRiUGGDgqFJa7tWDYTVdWcJeqohdu",
  "key22": "5F4zoHYz1knoQtUUmv7a2k7cmPScxcjsGtm6H7qHQpdoY5CZcARAiWzwXuyQHdJx1KmZSRD86beoTdh42cQYxaKx",
  "key23": "3DPpdy8xHZMdHrpxTYYT1EfK9wwcEaZLYJ47iq93NAUxHKHPJD3x23K6qpw9jxyoXiNECidHwBzoeEV5gy2ad5d8",
  "key24": "4nEfkP9L3RRqq9F9K9kyoask7ATYxD4poLZRwbTGteNevm1H5XLuejnParu6ahhYgJo51YDEUDNRWEL5VkgXTZCS",
  "key25": "Zuk4PfnXu7Tywc2JCzSzCqgRgemo9GvqetjJssuevwej3N5Dx5EpwLBaFrny6SDqqdPLbGLqFCpyTDuJFYkhFZH",
  "key26": "3tpT3QxKwTVbcE5wxWz3HUCQPft1Vidp6KX667pL45PCaqtywrrhCWBPh9tZKDTB8PvapkEQ3Y1kEzzCH9mmvz63",
  "key27": "KHB4irkSwK1HpwS9AyJQT71nGtHsTddD9xrRQS2zd3pjysVDEZyU1RQrWn2zBBtd3kaQvitppUACBx6gBqJvR8p",
  "key28": "22TPkAoKiyNFZaAHzwcXLFutSAeMuNM7uGwWfy5seDfAmbPoAitksnpDWAuR1dMti8NKcN3hnLCQJnY9MYBfA2LN",
  "key29": "47CsYh4pYFN6J2TCYyAhuSFjY5N9TTuVFEP5fnFSnF4nRckiGzdZhkBuj9Lg7rs2RJu86yC35cVyhRGtTUi4BG7n",
  "key30": "5fd4NKXoUbuYUta1wPat4Uj1eP6FfNLoU7AGYsHGot3zrSkroDkF4AXjmRD7TizmE351Pru5HTRrdYe4Z7MpZEvQ",
  "key31": "3kjSCTfDGoDzbVaRiyt5vVS8jwDp7JVX41yD2DxskhDrbsmzpG12wasREsGACDJrgAWnByK7QGnXZysDSjBN587H",
  "key32": "4eZN6cquqnZ9Qmt9Bce9AXrRHjhksgAX6UgCBuEnSZ9hexfJFyxoAvYyzUZWfvokxhKGyxpr34P1xEQ3MixnNHJ3",
  "key33": "5o3g9sz86m9qtwqyhegWfQ2hvUBJ18C2amWDSDTDdF6AGjQt5W3S1wyUFZb6t2utzK3PLKgj7FFmHqGtP1azjogB",
  "key34": "2Y55ujVwXcKX6tJKzeBAcQUSG33AFoGvUdoywEVDxWZ9xcmLDzJu7dtfxy6VXncyEWrC1UWqCi9ArcMKisMKDp5i",
  "key35": "2qFYS8UMA3kJS295UfGrJYLGscEfySifyr4nDhVwRnf9rFsoozAqMURsfHYbDLvudpVtkNdbQ8vNepQ3Jp5s1pZv",
  "key36": "2HGZAct5E8PhQqwSXHd2153A7rL46mxzixB91RJuNVCppT3KqUrx8uWmUzZpWCXfpveDMxiAHBvyXfB2T4KF2By6",
  "key37": "3gvDXX9yJoLdgkvFKHXd8Fo4UxGPmoyvJmNtvYFu8KZVJwSc1jpPFgsj5wf49v3hMxEbDv2MXuiDgipfaBRrbcV3",
  "key38": "3kaycAFJYBPcoHsZqZksJ6arBivqHvd5N8pRKnDxdPC8TBSHPzdwymYicBZWWpa1ZANpJXekXYsyVkUZejJk7daz",
  "key39": "dKAP5dy4WsfL7LrWthZB4GN9mmsc9si5MYdNoykNHRFAVfGBtQg5pWLDnRLES4KBv4dEcpkAGwesSjLsXhrPFY6",
  "key40": "3VYV9b8TLjUzewMiiXnPff6z8jZtKsK2jqsD4nqn2bjzWmViZbG2bMVJnZmgrX3F75LtrXo5QeGPf7cB4f3XYenb"
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
