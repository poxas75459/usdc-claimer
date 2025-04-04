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
    "37dFLwfLepezjFiG3GiAFoDHvj9t1s2t5dLPzHdWSWndYVeBAskEYZhRQRrkPK1wRYb5g8Ypw7CBJvjraWibFgWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahvPWaskNCZpiPRQPjDGp2FTjbmnftAfsDwnW88eE7cSWaLWUf2NU5MoHj7otjvqH45gBoqPVhD5VvRwHLHJCdw",
  "key1": "2pMNVhWQvgvEk6ZthB6hJUzL1gatQdZJDeZK8iB68y7C29htFMwMMQfE2KGUQvCUPFkyWqp5wSMxKicxruv3Wo66",
  "key2": "4M5aL2uLgrjCGJQ4m21gur2uYM4v3mZpcn1tqYPBBiDxTmzNhs8H51vU2H5fzUxccYnBf2EFKifaiiYxAL3fiqCv",
  "key3": "2JsByc2hApvvPQvSAHPnGuR9vw1PVhtonbJ9BgAgeGuDhaphobJ9gqrj1cdn6W4hdioX8DLiHR11W7mBDK4pUPv3",
  "key4": "2PwC7ZBnFUhgwe7PBshyTp4sEhHi8QvWatpSUAZZ41dPCncmeoM6m6ThFjPJTArAxkwnJ1EeqUmSedCzaQ59SnoV",
  "key5": "31qs3Gau77EeDCfi2wkHaLRL5xZP3ckrcMj3AeSGhddYv1S7pbtKxGLrneFbwRCqhsLoLa8GL1Rf7MimtV4QnSei",
  "key6": "3ZziyZSoTxfoHkZmFjcB2PTJShrXKbHquvhtUZJtfGhzPwMQwdt7MwQN7DdWzfBoLuYvZsLthdUgf1SGiYfDuUCF",
  "key7": "3bGZd7zQng99LKKS55SRRVeK9pkJGan3DgAtnHP5oo73wGsUMqu81gHY9NPECo3wBVRbL3bK37LJYGZDmE8cm3kC",
  "key8": "5q9RZ3EnrPpEHhzEeffrufbgaLAXuTWej3acsGpcE5X4NrmjuWih5Jer9p6UZYGjYWQAqiWPbnACpNugyG3k35QJ",
  "key9": "5yX4UXTsxJQYmq1QchzsPQBN6GRo8JL8Jh8zDrkXEF2usLnsKFXDXgHQuF96j13AiwKvKTJzo5LrFDc67YZPAEeH",
  "key10": "4mVNf6Nvscr2kBXzeGCaHNpNCXwgZ2JmYNxkU1QixZYx1gULqZHN8VZNKuTBdk6n7irRtAwi2hwP7uT3BNANU6sh",
  "key11": "2reyEjERwW9yFkTj1XWYncqQ8u4T67SLwkK4XCdoXszJde3DPP4xAeNoPmAqJDc8ESvaS4hmzpGbPn2GtCTZiDz",
  "key12": "25CdWSqQhVMA4p5BaUC9XN1gNgu8c5XLkj698C6uTD4m53vZzNUh5nB6L17rTrAnnpowPMi2fJCvGsnWmtuhiUuq",
  "key13": "56HX4tn7pAu6MKhzQSooVoxN2k3R18xYbedjV9QpuyY814EYqbjdXDLX4fKJ6nnHeQAJ8JJaNfRDJ3d8287GLAwJ",
  "key14": "33KK4gk4U7BtUqNeQdCBvQWpCyUZv56Fdab66CPMe6qizuU2PFtvWiNXYLfaMZxPrFBvzj4PX6QhCJJp146uKrCp",
  "key15": "22yGF2dhL2u4qeBFyeetudxXHrfFWGVGgdJtQabchT1RZWZXTsHLmTkM3DAEBJtEtrkmQbTYA37QQfRnjvvpUjes",
  "key16": "N6HLpBNq68juHgKyNPHzE4ppgj3PaFDbdRbgnodDzyMqvdpDWBmSSDJ1qKsT26nPF2XSg11FM28QVN1YDDq2xT7",
  "key17": "3mjmYgEBVvm3nDWpkKrUniCkYtaGpNauRg2xuyggJNjucGKsSVBv1F4P59MjRFfQoQ6a8pVLEJ6bQ5yNMnCsG6Bc",
  "key18": "39UUMUMqQR5jVPtwbEej31DuZfLjpPW1WA6tbXyjbnkVRbp8Lx9cznKWGEX1AgJxWAxFVWNFmXDgWheBhHJYKzkm",
  "key19": "3L74eJN2WsDbtQkyHEU7YrqedDo5F7gNJuKSRYq28U1yuwuXqdWsYKepUe7WDj27bxVT3VGKduN9mKwGqvKitW6T",
  "key20": "5YiRQ2Jc9mfTB5NJXsWG9hRCSjMbfeCM6uouxapL2mMK7UWHrfHzfCQCmiHNGok3etpPhfxKpwDMhtD3ff2BGZtf",
  "key21": "3kKyzRk7EYCvuBvy9EvDHVUXPLBye24VNdUDpiR4eWAVi7E7r8Vc6hu9Z5R8WBnPcXGJXfAwwmTJNwoRNmxqpRzk",
  "key22": "5rdUsq5a77mQ6csXzCFKSsScAT7gvcBpGTLBfxMtHfqdmRa6jrJYDemczWHDqND6atLt8iN7KjMn7p86aq8y1QDa",
  "key23": "hJcVVWGH2aVfxbGQCzJHAUtzpKAUrmGZoa5KtKoQzP5hCF8LaSQJGi6PayQhsL87AKx6UK6CvnYDyB7rY7z2KvY",
  "key24": "4MLtcLrvQF8SZF5DC3JxiKyx3FaQTH6sdNCoqVscNnEDAiNgaXc1SDzafGc2PYmKM18HDPGyPPVw3sHNBWfrYQw9",
  "key25": "55Xcig8xXLRsjSncezkJtXo1oBBLmgdZi7wfiP9Fg6rpHxeeooqgQejMdw9rdwWkDhHYnYnVku1XDJ5WmQdreZPF",
  "key26": "23b6SHvdPgrE88vp2Ugp9i5DCB4yN1EFdtW8vpBWvhK8oPgbZUKzm9KYeFrWdvCQrc78JHZfF2WhNwFcfUy2SFqb",
  "key27": "2HmMzGNzZNyhWcs2wpN9nuoPRJrrwz6Gw2vHvTE9fm5imsjPwymFJVqiD6YM73XuhfdngASi25T3TryTKW5Tp82K",
  "key28": "Wa3tsr1D54MFLf8SqAfbPUZDWaaT7AqdG5bJn7pLtZEvaywNnQAFUhgre3GLSYr5DdWB8swhcg3M2Go6uctyaHy",
  "key29": "jfVKCCHA6iaNZfrYzrbRyi6kiBXvRfbw9pN4cJm9pWphmKKLnzNrRtxFfXqgb75oSmuAS6SRm3YviK8zxeZpLSL",
  "key30": "Sjt7tktnnSxxANDepp9bnKkHM5oofpNTktqJ6giYxSGTNTLDJsDPuRfmVqXLmetJQwKrJGafQycDTJtcz1WJjy7",
  "key31": "2PDmgqm18eVjcvn8oRVLSg771c8e57CqZrRU7SruiBHC72P8tP1ijEGGQzXJyytXAF2UHxMv8XiiPb8bnfKxHkKQ",
  "key32": "4HSLfGApUA74RweT9L5Cxpaxag3aiwFx5tH1yy1Qgf8MJ7LnkGP8ku49hjwJTNmqSXRTTpgSXYjuUA4xLN3PAeFE",
  "key33": "2xEWDdPzMc1NfG4yZrWASduaakyk3hjrAQ1dWKWz4y6hAsenXyJEvtzAHHaRnkkEM59PUdaoHaocTiqxYffB6Cjv",
  "key34": "AkfxnpWf1yPKU14jBx4DGcfk5sjpataupi663xpQrkd2V9xuxQ8FmonTDdRemND3U7WxCACxTEdMgCueqiE7q1d",
  "key35": "5GKEwjpN4ghXzRVKYSWCmGQrhWd24wS8rnuBywRHAEz1A8XTSFPsSyiLhRx4XwoCwG2M6R1CnMPUmCPBk27Ss2Kh"
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
