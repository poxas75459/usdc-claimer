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
    "z2yGgCR7wdhnfNppW4SrqWF2wqmZ4fgaQrM9gHZLUPWp7hg9h8cdH6foZvbb93u6U8nNAPX4XMNbjGW4ayrwWP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j9c3X1nU78tgRgvzbcS79fEEU7vRQDFSETAVBa91KpaZjAabFutNx83F8MMQgJwK64AnZhh2rk6BHrvymAkSLvs",
  "key1": "49zw3tHUreyTQKLtYPYjd3stATWbsdMKsN382xJ9tyhWx7CxcQGtJpAwhVciPmtjvx8KBvSTTwQfbhSed3kRopLr",
  "key2": "1sYBGtDisATmtLdvPWiaUWbMc9qL47wfFyPQiZ9wK4WnqNC4R9nGK8zVWCJJYHfkCLFghexpXXddpQrEMfLPpV",
  "key3": "22BhckB1QDqx88Xcx3MpCsCFvvAbWtQbgHC1NH1AjUrqx4hqDFZYsgdFpxyectvmPWku3VtirM6K5tcBxtVaDosU",
  "key4": "3Ktf8j5ESzGb8WNddV2GhqsGV2rmRvykiKgskHvu7N7L6D2T1tjH6Faq3TSkCKEZZidVoXcq996V5w6eXNWetUMb",
  "key5": "dCr2J2FyJQhLx1mYGXBCjPEcKmHmNzECn3wdt2QKEfA3DvVMEEGDacSiX31kW8ZDpNs9BVZ8MWEYFgDGwsqbpF9",
  "key6": "3SY9ZdYdouPdLjqibGaqdUaK9kmbEP29WcKxzLxVzzWQzhMd4SZQScUwnrTtXJHC95PoXykKfXs8Vjhvpymk7b96",
  "key7": "47tqBMLTDq3Z8bLM7qmYfw8APr684LiuXLznEvvkt3rKwGYFCdfb8b8FfGEmjCy9HbbVSNmVjCUF8V7woYKjjzc5",
  "key8": "3m8wQr3UC8nmdiNEZykKw443AYRByvFBDmBZp3dDXCyBVVm8dRrBnUX4s6Ate2ByEGHgnxQ9WK8WHEnzbWqqgt3Q",
  "key9": "mpXhPyh1aR8XvptDbAgkvXa8BYKiU52U8nahKSFKJAhcmWVttqfi1RLzeVeyzZaUxF2KxYvXGoZA5JeFi9rF2Dq",
  "key10": "2tprxgvPMWUre9mSjRH9NVM4CnS44aQ82wNz5HZoVUJytUty6zfwwdjRFrKj2S4jWLZMsTFDXPsa6KG2aueULBTy",
  "key11": "2kFWdeB19Qod7165MZxSVQJ6FLXWWTY9BeDmHN9xG6tYojeCNXwfXpMAUVFDwDPmPikn1wy1zk7UUahTRseLVKss",
  "key12": "2GMmR4Q6tZZDVaxGi7EDQ5u2o66a3JDUkPi6R8QVYQDZLUUTygCR6WrKsdpoz6GM3ZZceGDjxwGsmF9QMWdTSScx",
  "key13": "ccQztETidFbB2jK51QGZcZdL1RHrRa7i6R7gqwsSVGPuuPZkb9LNgHqyq5q3AhWBA2b5Y2fVTGeAq5biEV6UzKN",
  "key14": "3gmijieUq5eSi1y3g92iSonH8sz8UHjNFm45qLZ5f9fcidEWbafbu5w5Sd5rzZuEsziYv7xBf8WdFiNv2fA9CTn7",
  "key15": "dUyD17jHPtmFU6DPV7iA1ZynL7DCXPo4nggxSngDay95WYDAG9nGeVrJ4y9hpxj18mpZ47XNeAMxiiKhwgcnmAz",
  "key16": "5YJZTznfL9cyp2wMqXmC9w7WAWaGMF6XNDX6vS93EVeH86sjSGKBAisvYUM7NDHHFK37Vd1zSX5k7WswibEQSUQn",
  "key17": "5UyFmUMfnaKNZoLt69TsxP5uLLgAHUpKTM5S3p9FWoKCjq5wH5LfBSqAQB3t3m1sEG9Bb37fGpJPTLgCQGm5aRdM",
  "key18": "23FGP8ei4qPHSthPYhpjpn3xKpw67uwjUw3pHEojaS6HCPzsemGSXm4zdBrR6YTsBf8Hc2axPj7PPTfLehSz7JXg",
  "key19": "2f7ue3w4J5bXEkxyoqUjo7kucgMHn53zKbNwznEHzVkCGXgAKGrXSZtoj83GHmbuYqQTDbqAuTBvhCz7ufskNStc",
  "key20": "bJFFgqzLHZXNV8aUidBxCS6MzyTFhMG6qYM8SCMwZhVQz7EZZ6nfNXQNMTVE7Aq3jBWvPH2VWphFarFLWoKt5Gm",
  "key21": "3M19rYQCRW8CQLkPqgV7TTmx81eEpcK2MaUYyFMfYUacTw3hZU4W7PGrKNP5n8SiL22JWUPCgqJLatjmjEHLdQhB",
  "key22": "2SZuTGW7KzKdCSD4PJ9WbdaHpKSGQPD2ZDP2jwSAbJMrxmzTHa3pyQrCKceFimT7Bi3WqYoj5LEy5QTaat2WuGV6",
  "key23": "3uQmyykJMuxLHE2A1kxM8JMUbJ3hPWv4sFLPS5cnBcXSqyGRWGQVqka6Fz68mKb45uT44f7hswEid4sJvjJonpE8",
  "key24": "dnth2PN8ESi6XNhXF5MkMZktWofLHLhdY3UhRXeDVGC7Azi4K27cgjv4uwoMgW1EvuUEEhJyPtVkwF2aiYZQMso",
  "key25": "4hXcqXkS8HKFjgazzNSEMukfAcYKfka4X1Ti5pYBsoGtVWnzu7k2qNnKybDiKpwgGsi7tUz5EhpGu9oXKkkBx1w9",
  "key26": "sn2xu6Tu1ZqwJf7m8Pxg2nv43bGp1vJt7z4cDFUEZaYD7Zxcy8HGB2pzm89ZLYa36A2KPGAK7Wicbi5jmfcZSay",
  "key27": "JU4oxA6wCVaSnRraMYpcSBtNkEE1FpDk1NLf6bDaW1ctPDLN3Ups19wkoVoo71Eq6AHe6vctxtwZV5oAMuhBJe7",
  "key28": "2ULmKjS6qjbr7FDeXDx5AiKhNMB2AECQQhwAxDs87VMLXiS2bvTUCs7cg8wB4yojFUzrqywi3DU3j1iAF1AgeFVW",
  "key29": "3QkDrf4a6Ld5pkfBWU6VrDVLHfEWy7MG9tWbkKeoPme2tww1EnQepHhGEsdbbYHbXKg446UWvAbuqNWzDKb1W8FW"
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
