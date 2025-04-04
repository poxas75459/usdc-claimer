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
    "5VD4m5jFz7Utamfhb4ngzLa8iK9TRBFPEm2uibGq7yBYZBQygAwEUy84HWvnTthk6viQZTj5MBD5UeZywuCWvuPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4TjegsNCuoqz1WUsnxDxVSg6xuYJS578jyZU2AG8b7nM2dJgqTPv6wuatc6qeEEQUdXr3f9xzE1NGJUFuuBpJr",
  "key1": "4g31YGj7TefinFCCJgks8XerEAD1wqvurcziBqtLRJJ7HqqdjAcDrz6JpPUdHTd42ue59RR1s2va4XqyAVZ9RH5J",
  "key2": "2j6WYWPwzTR3z7zJdWmp3JkejbmrYcKwtqsc8Ch3Ya98jodk7G8nXLJuZpkeWypBr8NqUiw8HVy5wzdr5viRftWz",
  "key3": "2wAERAxfdSppHsWmB46pqBeJz6tuUHchBDHoF4Nt9DcF6kgmPxd94bmFF1iA1APgvVKQikgDy8MFKwJQHZksu1VS",
  "key4": "2Adzbo1SiHayN6H6aStZC3GdWL3QTZx2mQATAPfMUGuKLTm5mTudb83ScoNGpx9984oJFvWJWiUTsh6Lwb4EebYU",
  "key5": "2w3zDKjW5JyeAAGsYY6XusgqCWgBAF6RXnnTiY9FvTKh1h3MzKyd3vkEq7mqG52jf6GrJNMKYUQPvQY44YQSx43x",
  "key6": "3hqj3XMDS6VYQns4ThAxdyu8Btke9vf7H29RvmnDPmsA7z8cWUWYqvAnfe6hg6hansPbiFyWENKJjbL7B1tiJbUj",
  "key7": "4i7hLGQ7HPywodVRF6s4V968hZ33hAymEnyUgmRSVwKp3qiX5H22dXQTWkPg5Eeqa8rKyhPsKoiEQsX1semB31Lj",
  "key8": "2bWC1AdCoUuDB6t2nbesUaH1AiB3KaCzWBER3NAhN35NktQMyg1aeCYJZmhJQsLYh9EcK1PcGwqubGJChTLL6VWg",
  "key9": "3v2ErBHxZMLVu5E8r6K2jJV96wvqPcPxtEA4RqGRoo3a5EnJ2Vhh14yBfftsgZdnrnisH6nMDfJ87g1Rk2A14Tvj",
  "key10": "JyqE3aFJbGB1fm3DDHjKdPdSe6WpKusGKQAFSkhFXR1s4JizQh4srXUZmDraS9iefGm3QP2mCCCKesgBP7DZgSf",
  "key11": "2RFRAYB5974ons5C68kobLjJty5ffND5HBoVT2DFZ7XYVbhHG56PFntsnxiH75HwTrt7h3pyjy9mLfLADTYbcD2p",
  "key12": "15xq7CBcitKuwJw78QwVakMYRn5hFtHAX2QJVUyMuq5oZBiLr9aPqGmzdw9kP6jeDBXW69VPDbqAxKkgPf2ADKG",
  "key13": "2KLLh6WompoJ6ZpXaNWtCBj7QnLAf5A9svUEvmvMALUHEtmSxZaxH5RVaFooWP4EDizanxQwhL3YEpiiSnHex5er",
  "key14": "2ak341aRUYwXLpUfkm4QxNrHZe6EJzqXj9DTiYrPwXg8uD71xUTpPw9LehUe5fUC1jkPRvbXEogaxoQdzwk8wz2",
  "key15": "2Wr6jo6TVqf9AUpLd29iY2KL92A5RHdHytKD9dZivtaDQfzEHGfZy4gRiXFAyCZQuPCbQv2Kz6w52rudSUyuxdhf",
  "key16": "5XVsEF5o7Bn6QDrUNUkUK1L4UxDbSKHtQdy3YBZymZgXomBCLF46LTKhftWz17tVN3U2ZSUx1uGik3McurzHyb4E",
  "key17": "368ZkiDNEX1H9zvWxYGZxjrYTXAjhrExTRKSDVav12jduAQPqyAqYzCjKMDcz5qWWHbfMKbQUQjgfC8C9Saq3vFb",
  "key18": "4D27YnSXQgaR1QWMgyFDf4SpFwYvDPubjtQLFhha3x5jfZEnu6A33pxZ2CbEpbhYLRoen9YFUE8a3L7EnbxQg6Zm",
  "key19": "36yXyVkpKMRr4BeqfjRbsKsFs5TjeVstEVVVKDuwHMf8GDPNSLWwS9M3Nom7CV6YTWkWEjtpzT2UZU8vzaFJ67oM",
  "key20": "g8h4E9YDyxz8yYiMCQNKvvGeEdEpbYAGP1oCwaA8GARi2nct2EpKknjExZV199C5Q2sr9xwdicBuoRWZbEV9yi3",
  "key21": "2FxYq6FnMQXXK4443yPyAjWkqv8UBhdVyGR61njrGWKuTgiQwmy3Ri9aYgvZowarGjiEdBW1EL2cuEFYTBXrXwsC",
  "key22": "5o988zBToEzvbAGZL1tiRBpnM2YYGoKALmT8vd3Vfbnmkxes1Jjx6WMZozqzD4UMxqKgPmDnYvcGLKXCMEDjXw4S",
  "key23": "4iAcw8sbXhSHSTpLXr9hnCQJjbCUWsXgwUkwB5ELYzoM3oqvJJGf7Xc4paeKHXU8ky11UVdyYFFdaQTCM7gSvtNT",
  "key24": "FRN898QWPgJhnBuFhHNZAAEpmsvaW62jcpmSX7zhhrfBm9BgKUKZfzQBVr5UuNKANHpexkFUiSd3HVJqpikLuVB"
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
