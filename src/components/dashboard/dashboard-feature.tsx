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
    "3MeuztXtxae5gNJEaKKczgzHY7orAUHZ8NfJGNJKZp9gKndmtNF3K1jz5oWuE9Qqybi3cFUBZKVYzBySAzjTU82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEcQK1kxLAmZsrNo6cPAs67Z7iDfBHJRw3gvXrYa52RHTV4jMU43ZLB8pzEA9YJyYdyLB72Xo5KNgFrwbCFFEMS",
  "key1": "n49Za52ViMFzagVZdWJjZGG4YHoJx822ufqF6PyTYC1Nhx3cc8krKFiQBt7ywntRQa4bxdVfHW74Wy3Q7aSN9KC",
  "key2": "5nB7JD7KzmaggVABa7aow8LBPoiAhHn22QVCNmvC3tZD3SB1NhXXGQGLgeK7xV6nmJPjm3iAgXRtxUA3tQ9dGhmx",
  "key3": "Atfid9WPtfccTBSiwyRv3ShEnpA4wTawHyY93cRW7tRzQk1DfucQh6Fcq4Ns956N8Ut6mVYrrNsHSa3szWTcW7s",
  "key4": "2LCDLf3pDt6G6dpJ4e3XDZQYfxCRqiZeLWZknMskUSfJ3thSuwQ1HDb2WqCGXJVjvc5iSwJ5ixawupMVghUJCJ55",
  "key5": "32Tnrm32PtX9zwi3qUvC1NYY7XLQWksq9kp8bXajgPQcgfaTk497pP5ce5DvzrRd5KaYcinKZ7qg32SJkegu1sEk",
  "key6": "Ma51L9D8zVu6rzeNxEirR943wNxdfb19D1okADbgQbc2G5nxan68tsyWgJ6mpusP1mdn1CSw4u8t7uAzH2Jbs38",
  "key7": "37PVocSpvF5JKM7JdpNKEAqxgZ9WPfvGxwemurzy5Cyq4ff3BycAE8XwBSaGXdSzJ6CsGsNwF1Q9Qg9Pc8Rii5JJ",
  "key8": "5f1EEBjHv4ThZxiq4wbo4Ucf3nSiFQzoyuLVCYN9WT4atTkuoaMWAEWw3vKZDTVrWCKyBQZHLR1zhq9R5E2tmYXa",
  "key9": "3km3Z8przQZAEtySnW8GGEVg95kPNr9wG3cuDPUrMR3M9QGUrTacKKyuMPUJL9aAgmCGLKT5fYnSxQ51qEcopuTg",
  "key10": "2tHsCd2VA21fZA9CPVDbuE3WR2bfT37b5gzGsKeNrKXBsNsDZFK3Buui8gvrXruM1SKANZTARuRMn7KbWHR2LP1W",
  "key11": "2PpKwgbC2vmcJqU4cmrjLeD4pqtbWNtpUsor5oCe8mvV6M84ZoS7Yx63QPVhk1k7veMZ4iCDPUmVe4NcpJccJYwv",
  "key12": "3NoMiepo8q9tFMnQpS4iXPW6UVrW368i3pYPUyNLPR3N2sJmrPpjz3TfPhFxZtW4YGrA1BdE8C14fvhDe92Ef6V6",
  "key13": "4wMPP6syWHYhpefeCVJCVuU5y2rNee96sk3LPriC3cMq7LLda5GidAHKWAFjU6LkPSTxjqsqbUctxRbWSuS1CwMW",
  "key14": "2CkpoRSeEkj2ZENmbaE9YYA4AFnxWiuHkJhX9X2hDe4uCYwpUx7mP4uh8A7cQu44wi9mHTwLBQnBvZgiCpBcCZge",
  "key15": "4ivNajAQT8TbowSNxDZD2FZi6SNpXLdADnFyfPjAVtvrPJaz6EPYZsRQ9WicA28ZJnWj14GcSyJuvFKkQHbEmVMf",
  "key16": "4hQVPvt1unNYcRvZmtJRZJpC9qJux5YNwZRBkdgfP6npfGzh9y6oEMp5S3aXJkkzxdJLfXAhuH8sCY5JSU6fcvMn",
  "key17": "5v9DyQtJQsv73DvgzpZJiHa3w34nJKcyAQq48CspBkQNNqPqMC8UxitQv2jw8cThCsRTw6m8eWCnK7hjGjfZzmt6",
  "key18": "2u6LWAuV6Ucyqk4ppfdBHBJG4M8gcgZgRGQjkEDveWq7ayUrhGcS3Q3Ufg4y9nmGLo9sWFbSk7KJ41wpm2LP7od1",
  "key19": "61rVnBJBoVuh2m3mKfzZExqFFVnQFpypbhohFKeDuBR5ZES22tjLbNC9Nb2gXY26dnDxMmpWZw56ZTsEKDatutTj",
  "key20": "5AjDEgmTCKti71qH3YdZBgRGhjZ4PiWZ8BEQoSsSnJs2dcpMKTm4U4yfVu44v2G2MvZANyKD7AJhabD6FiP14RQA",
  "key21": "5JuVmyT3hehmkKP9dqRs4u4foAuvaKWKzpK39XwSomJyQ8pNwwz9LP9CcHE4V9L54weDFt14pfVRi2WYW9HQnZQh",
  "key22": "2B9kpmnFnUzcS43YwDxTYqBt7vLt5Mh5JPWbSJJ1FEQ1KovWxTWgqq13w3N3XQteL1UKEDx1JkmKAzT8HHAJS2bv",
  "key23": "2oRAxixQyWRHET4qRK9hc4Byfmofc9BkU2AFbpya1NEaH5ZgM9GfXMaatf5qs3jDmqi4TnYL74cLiDoWUfFPcK3m",
  "key24": "66eV6P1ex2h6GDgEn5P2yzH1Qh6tepTLxevQN3hudg3Dweqhxor4qXDcigCPxENNuLimA2AxRPPCbLcApxGoNhwE",
  "key25": "5AZpfS8mAknGWftRCYHRpxAnrWFCwG98X4JrhvVfv2acEGoWHTr9Vo4vfWNSHwkXYZ65HHL8kUkahaMqkcZx2smn",
  "key26": "RKfMmxd7S1qTNX1baiuVmYJevffFphLwrXNQmyPBiQftgHXAquAjnqVBsZw6dz6kTAPw4Z6T5GBmDGqgHfcs9GE",
  "key27": "512HiWLSNfqiz4RorGvZkwhd7gCm3ercN6zj9VaG2fXJMYt8rWnFmYRKHmMPqry98tYjvRRgtSCK61ZUrsrPMxtd",
  "key28": "voEB86cw7iBagN7oq6n2iVLddJXAyTfLDyXraZ9LCiMHdjWmZmpJPjDMAcnmTwNwDzqrU9xxAjVQszNxcethBzs",
  "key29": "3FuHJiD4bxEhEUvZBtzZqLhHUAUjmJBcbdQyjYvuh8aALCpBFtBQysXb9kn61bzjQEVHvXqvUVaFnf486ajNs1Ls",
  "key30": "63Yqer84G9U6dk9rpF1qvz8raASFA3PWcjGvPwVCkGbwTZhdu1rBF12Bg2cxbQA4Rnf2fxqWBY6pZmkQ4Ec3iE5Y",
  "key31": "3rdtePx5kWAiDvQTWhtcEHSRHosx2p6G49w7skzphohmsW3Npvv45rxAadudFiEVE2sttFtpSfHsDXb4MwtF8Y4q",
  "key32": "gh9VZp9QEd1hpy2bscTXSWvw5KMPenjLVUZYDYqAxiMduwxWfArdzcqP7YdUgbP5VyE45aaPnxtAaT3C2wS53LF",
  "key33": "4M3dMtD5RBvDJxopya4BvDFZtngS89eVzcDgT9waiTM27u2n1dMCJLHVjKRZBcN4xQRBkdzaccTGuVmCF4842Wm2",
  "key34": "5X3gdYXG5kdcBMpS5VCZMZ3DJutrATKknFenQoG2ikU8XXkth4UABxGU5rzZHUwjfrioozswstakTqCxjtMw1qVC",
  "key35": "5vsnmUXM3bA4ynPVhWkpfbJfWbB6B84BG9xESa8qUrgX56V3MhvA8vRCks56iDgVehTK3Me3siHG232dYG2yP3gy",
  "key36": "2z2sdJq6Epf6ZiddcPANcUVAn8CE5wPxTYUKJQajNCS6fynjw3MsWbiDfr4unzQcy4bwsGTZ2yCsjDJYG6P4eGmn",
  "key37": "2CB3hgaR4REHjnJwp5Hb2D7trkRMTU96M3uCQdbvwBrhv7jHE6LRMdWvaZ27ocWQXbpZxmXobnz4agxgNp9B3aes",
  "key38": "7fRoX6vScVZLeayTvB1fJVr3rE9uVdiHYyfbz6s1PL1tcG7Utsb5AN4gABF7CC8i7947VfbZiEd7mqJ7hvad7Yp",
  "key39": "2hg33n6VNMsUhWun16ra8yj3fc1H6L1y9qN1btqX9BoismZHRbMvU1kSRYYW5VTNa14AexZa1JsoCkQPtnuqU4hs",
  "key40": "2aVwVji4nSvmjX4sZ9FtWwZo2dWkVF5QFxUzTbX98EeJUhTmPxvyUm2Dwuai2ReTnrc4Qtap5kEbuKFjGS2JSb3X",
  "key41": "31H3c8afmaXmJPhRPCh3GS6DQxenbmXAU73NYcugMwBPg7WfRLnWTu1uPcaDoNNoXuPLZjKzQkbJuT2EuRCdvfVE",
  "key42": "3PPgi3ESV5Wu2jLcwCu18W4aVChTnFXhxp5k7TThGsdkTcbgG71jZPcsafzDVmmMnPfCSp9Am3kaWMuWcA1gFgv6"
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
