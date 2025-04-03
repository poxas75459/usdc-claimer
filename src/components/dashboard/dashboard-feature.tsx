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
    "5qeYVM7YMW5px9V28YRMSuECPEaoPseu52xhJXFutvm9A7aJAEJCtCdFpW8gMP6AdyDD6SKsKPgXn54eiPWFf94F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQSRVZFZ5dmyJsK9tacEWs5zRktVbK6U5xUpjyZj33TUcW6KYq1N6WRxdDc1HMSdL8i477qMRgxqdtkHWxcfyXx",
  "key1": "ufQkpePEpKBQiUfQAU69xfsPieHrtrnbfpnG2c1sco9UJ7N9qroyA88eTPYanqRErx35gaWMFfE2yWmrpif7k17",
  "key2": "51CFx9gYH3KD3u6ompFWmXhUGYihWXDNSAPW7fq3HmV2zfw62DnU4UBfYY1dw1Ygo64iTJgjQj1HiBBqxnz8yvxD",
  "key3": "2TdzBh9hNoVRywBNxTtFw6WCahsJ67tBh1XRkbfz68JRv3gcCFH4TTY4AH9BzYd8CXjcQMvBx6CwjDm2VRL7L9ti",
  "key4": "KumXMdTHxSSG5MWiRxPAx6fbtFRmzVULhrqChvjAUdCdjMB5Ssf6M4dVCdctJrNTj7vo6rBZYEdopoGGTntKoYZ",
  "key5": "4YxvAnXa88keLi5eyAysBY2sbEH93UdN4pWVoSSH55QrRx28sGHbPEuxZB5wZ6hSPNjRmk24CqFFJkP9YFJiQCFN",
  "key6": "2wggm35KeZbKHT7tXkfeoAFMDdw4pB68sX58j8FAkXimEbmcxPhyGu7Ssa2KTV12bE8uPyom4jb9bHgW9nVCwabs",
  "key7": "29Jb547TjAEHwqxFzSSaSNFG5ZJKGFBHPiL9tHxu3KWDX9sPQMcoVQ49XJ7T8GDuha8rV7pTWsaZ1jz1fQUrAtuL",
  "key8": "5DhfmgBFjNCGLntqAjk3m6jNtoRBzuipvbrLPh4G6oJKAePVYQNZH8wST4CgaXZr5NUu4wdVPbCeWrkkGD8KNR5",
  "key9": "2E2uWRpSXJq7erFFi2FZdWr2h9mgcX5puoFQvAdTUZZJnomVq9buenvsuDXa73Sq3FCZN9xpECPM7w4jR3KU1LE2",
  "key10": "KBTD7XmKKXsFs8iuJQFDaASnceMRgDCyggFQ8zwpeGu47t7vhdRfVTAz3gmMXwSgzyeC9rv9boYyyMPgJL59nmS",
  "key11": "2g3rZqfFdGgNpQgGjLXRePpAPs5Qfa4wpjLh9am3vusWvND1PtsjjwNPs2dLCbBg7pzyZjZKnZsv9ZRoHa43Y3Gp",
  "key12": "Az24GyAQuJgzry3ydRiaTY9NfzpDsqJgoKZpy4b3k7Wx4CNCt5mzEygu8MvKVUKY7nbPbeqHuMmgqKd2vDafJSf",
  "key13": "2x3woQRKg9a4AGZoshAH3fjaP9CRvnkk7SrZB2Pa24bTcbcoB9766iBvg7VSGAeuKEpm6n1LYrBw6ekfcC6e4QcE",
  "key14": "2isvvMXGvE8u1vYcfr4zmEekeXyhDfjHxgK4hQEhDYsJWcdm2DWwNtfuQVhr68Rv7xTFBRMUKTmvELbjug4c7bhi",
  "key15": "3qGAqDEb9s8GAJhct8dxurAXVZj2oMugq72PWkhGgQSi17irsTQGCunNPqV5wT2X7mMentzQevfeR1XXXdBriBHf",
  "key16": "3nNCxMHDetwyJrbHag8uXYUPvgNdBLZDpMNmEdXWfufwhSz6EeoaAgoSh2DndnMNdvmjyjqXt2x7BCoxgRgo389T",
  "key17": "4XVsU1NfXHgxB7oAFQf26PHKJWnFPjTkNtBzisjR4mxaUwRrVFR7Mct9gBwbM5aF188YuVzZ1wNQtNiaFDh1Z5G2",
  "key18": "5Tj1Mi7nveHEzAq8hqFEjd1MmfEVQLVjc9PrjVXmtS6pmw1yVWMRsMgqjevPT39zxFcpaRS7cUiXGgZj6dcbD3Y6",
  "key19": "4RGjGpd7qy8cU9bQnZkofGQmL3rmB1g2A3u3tR634BwyWXbQ5Frvfu9PeNUx9UfuYUPKq3zxpkXCFmvQaEuwPtqM",
  "key20": "2teifs6EmZ72dw6ctR384xPhdGStQVHvetyY7WfgXbsPARV7Gm1w9VDFpkQsrkHtCTGieFBTEYLvmntfw3WbKjr8",
  "key21": "3z5GCZsz8HQsc9nN9DJRnAMThwXVDXCojoPmgkkK9ZpPUFtyS7it7eE9g9KE8nYZ8xhXWvmubKYwERV1N56QBUHp",
  "key22": "2c2NsUZj6ftwpfn5e71n7HFwEdm1kQzzTLE4vD8defvWvC7hAep1jpAp32UJzSWXAJS1jCKgnMwrjZtNXAziYpXc",
  "key23": "2w1DyjptLwmEcUjzS1kyZQaFSNQUjF8rLNpKRwbx4tEiG6NSMS552eCVcSgkkqBeGzqKQgdGGBgg9WUQgtqDF1Su",
  "key24": "3AMtwVYDqMHYopAdCAxUaHKfChw4oPnFahBuXz22Ji8jRiRPLuaK1NgN9eJTVPZh2DxhfpbgCGyfZEgKjUDWonUP",
  "key25": "3GF6j7EhyjpTjKR8PyS56LT6HVezvi3EyZYg4PuQ3kYUs1yHu4HN4fz8QVNjqvVsnLVuP4TnJzZ3cvnLkCNsNCGA",
  "key26": "5oQaahMtSzH1sepsdBoQ2c7PgoaRraLwNRgBmRe6JKMWUwtREXVp5S885XdLwvXPcYwHJdUCZjVrvZ226WnpipcJ",
  "key27": "3h2soiYxTSQ51Sfe36QVLVT7XviRHiakT4Jn8awjRREv3DabhowFAGGBaVyZFoVz28JfhAjQKr6cETUULZMdurHx",
  "key28": "5SSQRqJrUXN5x4iSVBYnYeQfR7MNnBbSP3SsGqEMqkVcytXqd1G7582s54KUFj2C3GN2NbJiaLecwnu96832k8Hf",
  "key29": "5MDdy5PACLwqbqBeAS4mokV3Hc8SU4qwSwjkCEWuapfKpgG1FF7e5wWZqLbSX17A4F8PXYdCz7SSy47CryCJSzry",
  "key30": "5wYkw1uQ6kNVBkyaRSjDG7mq4CYEEdztCa6wnN6ELnQHq1D9hW98UFNiGsjGDMQkk52UajzjQZCxYHGEWLg6cGjZ",
  "key31": "648CVY3kicKqAKb2wzCWAgXJP2WYSyK4HepbmJFRSpaXyxvWywzbYFinwyjMQsUtuR2n1rLXbkUZwbGmZ26ueeV8",
  "key32": "2RKZuLDwR5goqESr7KyiUurdBZPfa9hdq79BJFYAYHU9UAC5CgADnYZ3efd4RJzypo362hjWKpdjHxKBQ8RcKjFy",
  "key33": "2YZN8iTtpPzmKGHi8HKmfEo2jQCXyhSompWjsDfMFMCKj4aThm8u5z7eByrmqkKAAmaN5G9u8qpwEHcL4jfG8jDi",
  "key34": "3S9UK4CUnJjENK5gwo8SfLdprE9LSBdDQQFhMoh7kJy3fbNq2UQauoDmGETXLHUqnUHPoyHvwv4oYXnWyEyyZP6d"
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
