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
    "dxgdshXayJA2gGUSXqSWoeJAmtJgVQYgiUYFvGh2ph6yoMtqTTkSnmpGGRouuLt9hHMBzgLdmZJoZBR5yhNkKw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mtcJLEDDFXCM11mKZd5peqCVrT4FFJttW1ApJBWf82WRFzrzZTUUShi48WaQZNQgSTqqQNBUW7HqDu4JHgP255",
  "key1": "2j1Qe9pYRA4hwMHEH5KdsRiqwQJoVY92P29XMnkq82z2SdweoZm4hoVhczyVsFqTrUxu7iXdyJuzhaBXALP4mmEL",
  "key2": "63d6StGFEmXhpBdvdYGTSSvAvfatuzfYqDm5DchewQS9SkfrV5rMZkw8SMadSsyMwkZ57SFei9FRnDGpZPxJMaGu",
  "key3": "xU5W1oFjSR7Z2VpzzMDuGWK5n5uHd88ETDzWL6RZ2R7dZmf4SdAWe6EcsyfwJq9rdBqvMdpFRNSvUFucHe4FxZC",
  "key4": "3S27hojaNVouDoXne98u3Zmpa2Hdr3fagyvHT8pmggrfMGXRydnSAvQ7mMUbuNBUnQ5wwbC1aTxi6EwfQGdtQsfQ",
  "key5": "3zD13jpzKxNvcNtUnb53ffNyHjFsrqTqzBd63owVN2JAabd2aYfEF4EC8YtHXrq2oPVJbyxZKDxrSWeZzBjMRbDq",
  "key6": "tBHwhmEJBAtJF3dLLD1yca6CBuH2enmVorViThktbHfhRNJbF6TR7igjj5KBHLo4Gmx22aDc4FpiPDLWGnVVV6Z",
  "key7": "dWq68zFgmfEjtCmCLrKTbvwEvtnGHi5iFCj9GxX1pGaZL5oXpwqqDzz6LnPnuFfHCgk6nQLnoNWnk1ogkowxnhE",
  "key8": "QRCY6aBgE28RXhuU4Dt21h2yUqzFSkJZ8Rqoif9CVmK39mF1Lgm2LBD6MpjizYTcTcuHbFUcXRBjRqcqSzow5Fy",
  "key9": "4xa8xvPYVnScsFr3g3s11krjFpyYrqRPcziBFhE261GVH7WbGKJrfz6wh4NGR34mXLzu4K5EjFsJrUWhy12BsJM4",
  "key10": "WtXY2BnTnDrbQZ2jqmq9kSRPne1PMEjN9zygyieuJNokkHQJkn4isKxHC7H9KUunBqxf47ooHrzYmjBFwGJpuUk",
  "key11": "5Q6RzHNEeZgCcJ1AB4J6rY6eXZuFiqV4o4j63NiFQxtoFjDtu4xi6h9pW1GjYHSNFsC1XDKhXuxi4fLLNjR5K3t9",
  "key12": "TRxdoZMSM7TrSi5MwiX9DA2xffPL5nVqgec6zWSoKef5x94UhvxCaSbo2tQey7Q9xNacmBp8jE3xmv4PrhqXttU",
  "key13": "U8UARCYuXBr3hMpAYdDYGs4jcLwFy6c3Y7BP2QtG3VFHhF6Q3qpTodqPTsGR3aRFf3wknDkXZ9DWyW3mcxLDUJz",
  "key14": "4qcQEg5Z4HsiyqVkP754DyEiDqjLJBP5Ltu17fZQjJPNpqutQJzGpzSRDsXF3ipAtqJwS26vDtN86Nu2QjdPFdPw",
  "key15": "2wQ4KiJnofPYXP7P1CYb6BWF9ikzwg9ku2upKRV18QNQ22zdAk8zz1FoD9bDz5EvbRmuFQRt7ei618Q4qxvp1DU",
  "key16": "uZxWRuiShFwJw7X7KieqXr8ugKXqBwbbqZaj5Sm7Wn1kvRkSuL51jyUdVjXevhaUuwDY9LgJ99uZsPjoAT341Qb",
  "key17": "ArCrH2v139rHiLKctm6SEuXRYHX6dfM494CoKrQLXZp4VNptHAHZ8tHybUYLcuJqBhRK8nKbG3tEQc3He1RbrpE",
  "key18": "3WMoNnbh7NWVcFEi5ckZ9utToYwuthnREHXzF8ZNkJbMtbURNLdAZ4axQhTP8Xtz3iwVWbjRH3KqJGfhza6M1tMM",
  "key19": "429FxXE7BenDJ6sr9b9gtfKMoR11TGUGvou48YF72nvT6NexFEmKP1cdCezth7KdDC3qVwn1xLWPhrSLMznJ86uk",
  "key20": "4ffFKAZyHZ9oEmqANABBuY4j48NbuW9DkdpSSDmGbivnva66M7cBgmJmwQQHFWryzjmeioiKFCj5HVEjJQ7NnPQU",
  "key21": "5HMv6dQbXBdeF4tMfVLMJYfYyDDcsxQc3HogDEiWLbXp84p9kZ86eNeGGjd7xXHZy5JF9N6gftN4TDBs5aPa6B6s",
  "key22": "2PL5MUjN1NicYxDzR6xjY658p4RvwLFY8QV4JfZ6w5e4zWxvJCSNCPFrT37Y2t4j9kKL6VzLnSxwQuZaK45X1pQ3",
  "key23": "2GsUqdpzL5NZ9jft7Xf6wPoqcGmp4u7iUCPTXN6f8ahLnyZJzJaKrhVMog1X3hR1GCeyAoCLam6CsPXSgeSbyimn",
  "key24": "3j9XnudxxieKCPfpEt6VhREqjKzA2SW67pNbXKHPNKNKFHZowP5Wy25Appw1B3zprQRUoMGCrFUYAfcks3Qi2zBB",
  "key25": "5ZmgutHCPo6wYLcUyT55zdQxxDiabNkk2RoWLtMocYHhMihPryN1t75YV9rZNzH7EHA9jqbFzpMe6vakmcUqpzJ6",
  "key26": "3ThFEobzTo3uCHG1ne71T7VygAPHAg859F6fheA5ppSJqnDjXTXBXRBTUPWitmjKrdJytHKnGePymtS3Q3cGbJXV"
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
