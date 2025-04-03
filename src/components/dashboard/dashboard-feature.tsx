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
    "afwG9MBsFBndgdphkuUTJW3JSHPkZpeYNBMAXVinLhfjhWA95zQWSi6r4TMaVwi24KbLBKboD4bKpA4tgjTXo9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tssFpSYuhGYFHhHp2HVemKCbJmbWHRq3y2efLCENmmypLNp28FZcS1UYArpxFdhdihjEyTv3qgM5vTnHkmdqZmY",
  "key1": "62fre6vBKRUhpo5ybL4T7FJfMvh7dLs3dAghhLNgFSY8tbXWRW8WPKEsmXiTTHSbdRYAsKZ4soUYCpTQCX5s6QUM",
  "key2": "4mTY5GwifMR9Rn1hJtURSjMrAFBjeitFz3URD1wiN6hLTZ2snNW7JGvMxn9vhB5imG2v794rYwmiWGY7s6Z3UPgV",
  "key3": "23RS7SaEArT4x277GbR9Qm4W8NC5WfDVtnnxXmbc8pC441D66LVYv6JFDJFbTR9XeqQmspqcPSCK8hSADG74VKsC",
  "key4": "3EJYvbJjZ9eRSL1xuN3NpfQ2bW31pshZZ6ZyjLVo4eYHpWLXybw1Z2K86SWAAqWZE9348JpRTMbCw9P7vE5QRs2i",
  "key5": "4DKHwMGpK1VEaJpEkwPG9kUXiqscfWtY36fKd16RKPLeqdShaC3KeSqfM7zwtP2b4gzqxWY83C6VEEewQBS5DeuZ",
  "key6": "3X2192ThzZT4vnKMyhNNjqVeqiJNB2aa1yoAJmVWGUqT7e5wEfnWdDH8N6XDzJz72gPQbFpTephMUy34TGp5A5G9",
  "key7": "XiZzQ3qurXMdSGGzXiJ5CFfzoCxBEBTPXTTUTqonmhFhdRMQM5Ff5nxU91Mzc9jo2qqorGaTZXq4aG29aoGNJeJ",
  "key8": "3zBkjQWKsqYk5hmYytLdi39vF7CZvYaVJjhX66aKL9S7GwsV4f386vQ9HVeyFeS4VoLjDehkuZCTy1zQj9UYDhbz",
  "key9": "3TaLUajnxLM2vTCNYKiEo1hKmbUeepPDsnVyiCKGELAUaPBXuzJxJ7etnUmiaeCUFtz3eBGMv7GEFvEde5aGtarh",
  "key10": "2wt8bhGwpyaKQoL544JTCiQBzhs1nFc18yRtc6xhDyy1EcX4vL6Qcyy48BAcjaRCsTW15kU3wffTuTPGM1zB8w73",
  "key11": "3pHxkTyKsaHEtHBfWL5sddjN5qqV7Kq4B3TH98Wb2rVLSF7xBtidpkyj6b3iybiu6pevr1b9gFmrWvKZ16tLHisw",
  "key12": "4hR9fYRQkqjVaFyFjoDNYC8jwShEdX2eb5yYvHwMEv2BTTjWCiQnxQCaxuGa7pUTpdQYUh8KNRhqKR8bCmvY2SdH",
  "key13": "3Ki7kWfrqKxNC1mQFAG2JvPhJEANwVwvbC6676XEmnBPS6mLULnf7nWYB1ZbuhZL6Z2QMieTmWtAyTD4MCyCiPEw",
  "key14": "4xUq761jZNn9bay2MXPZz1Puh8wj9dZ6ny5eg3bRQNua9w2woGTmEtTEzb7Phfc9SuEEpYBveAv8ht8oFu7NiznN",
  "key15": "NqLa29HRyWfEqwjGdDsf1X3PnzyjUwsVuXR19cq32zdahJjaTeECHkNLfncohGV6Cr9vhSNhGZi36P3rj3uNe7f",
  "key16": "33LpiCcKS261rXznUNMz33u9bB9zf7YzxhxjRvwechAybvCBCf7A6zXKrQyXLKL6Y6LNXrUGYw7TuNajsbJB1MfG",
  "key17": "ayrAQzZNPWCHibLaULRd25K6SgTZRRsBCFgcFzUZojX2YFWr6WYRLfEG1R7BDS3uL3nESwMmQ3Anrr6gj5f7ZBM",
  "key18": "AQWwHGZyDAtf8QpQZC1ysAWbtSSy9rNkeArApjVercK3XoVHBDzLzrux2QRoL7AyXmHDTSeEXhmJkiRwaiNzK6n",
  "key19": "3xNSihsMkDe1darXZ7YEyev3w2EDYaurJ6kEJwicccDKzsHHZ8bixbqm2Mkz1E6iWm2U6ASuX2uNM8mVHvcmzXqY",
  "key20": "Vq4UhYAMzjEYCrpbe5R5tJvb5TQk87ig9jrsW4meKgu7h15cYvPpv1gET4QqdK2Te3mx3HBdNiMG5EyAtSavBT8",
  "key21": "4hKGTnpdxwYvhcgsccEtYVkPSZQtzGgu2CriWKUc2iokwEGYtDpZN2uekFrezjwZfDpK1RJ3EMiK1L6m4UgmzarT",
  "key22": "3AjcVG94A7ihHPf4eF95MaQ8Zec6c9wnEFsiHf9wZiBfA3Br4t4rBLe2DL1ECB57PDzTxQiWKtmM4NangP9SEzHH",
  "key23": "3gHbz7ctiuPHuLVUH9JMtVvwtDwCL8k4FdXrNQ3TdJMtyS9EMFwT2FRtehGbCDWyZnKUTH219ErzQZ59p1Zx5PQ9",
  "key24": "5z8BwjZ4drqYVTD1HTTPnBwuDFEwQGPWeErz7xywyNCFyFpQwRZyLrBzqGmkqfRaRUSKNF5GXzqSWFzdTwtyAtjK",
  "key25": "4VSaTpWJMSC9NPRg7Bf9mYxn1VBuLZT4Ejcf9qL1ike3JTRD4o1CS6aMwTSzj6tevcdbFRjb3fRZCDAbz7T5kxnM",
  "key26": "2M75KoCpzHZv1kHLush6Rn8Tzbq8v5dehzcmvy7UGYvEFh9RKVBrayVgFKfTgDK5uLhBVrX1CUyLyw7Lx85bWRkF"
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
