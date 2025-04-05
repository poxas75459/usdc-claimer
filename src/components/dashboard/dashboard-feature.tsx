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
    "MbDpk3F8iX3jTzP1ti2tLwzc568MeodpvDpyR9TwUcaeFi4PRsffygp71wq3A7XPN3y2MeXPdVLJ95dK6a5T5wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KLhjgtG3BYfPAFn3qUMitkcunmQqw7UdqPjeW511T2kYk3WmQYmezWa4GBHeuCppHwwRSFutEjEHz4gdzpdbka3",
  "key1": "jCgbbprGYmZakzR8QRs4nUKDhNW3XhVq8sHYEYXnVhKmEjPjFwEogBbSVVCeMtKjLT8bqQuAkTZaL8VuyNisq3h",
  "key2": "4rHGeQULRFoCSstqt7Y2M7P5eVogFA5r1obHH4vf1XuceriqmtCGG26CrfJw1DoaScm1hzFyoxBPU9zzW8uatxQH",
  "key3": "2Fgi2GdaHaeTrJh2ASM6XKULVjRHEuXaN5nntg3dUVanGDzWrdV9co8Mc3FY6n7mzLdm6o8s3ce67VhdW8kXuMdS",
  "key4": "Lmw7fHM9SvwwjfLariEAfDuV8G8urWzSxTwD2DrunG3L8KbTzeVaptF12RMNnteTM2cB7w5rf5XJFsCgF6QXGU5",
  "key5": "672SF1KViD4B6GgPxyXNwwCn6o7zynwfHP1dh1ryi7FWg22ounmbAyvD5q2fofJprzXTrfeoFm1kLgUmzAAWZaz1",
  "key6": "3VkbRo9GUEVBx7Lfj5FLTarm3vDnvwnadzeNaFhFmzfLVmcqooxjtu3jqfvMp5X9K4AckgCFwNk4pdZ4RCfEFedg",
  "key7": "2rucjTwZxzjmadmtHjKZW4nTwer89BT4ner66nC3ZozT2G4WeR6LZ8YhYpZu3gMGFTLDJvVLZFKbGRfeFmVMipRj",
  "key8": "4XDrAWSeaDyvHeX3ErWiNVU2yNR71jN6zABYxQrrg1U1gPzdiFAPFpw3JDyUEtQp7yZ9GXw85ZcnKqSt6FXJZSaJ",
  "key9": "3GEV492AmnnZ44bdHZdEdVu3PNGHQRGYt7TuthKgoeFXLtVUmx9XJ7SB8cBJPAV8tqYKrmiA2NX83tXuG4x6hT3x",
  "key10": "4xT7mp3rnASKG29EWdPwoGYiniRvcTAW8cNHPCVMEaGetmyRgryjkFW5tnXYcZrSiiKVd31ejYq3NH3oCYkbw7Xs",
  "key11": "4sF6E9woX8XWimhnQX3d1h8hfYG52vfRPHmLLMcXENsxeL9W5hzq4w721ogszp4ePJKaiaL6HWmfxjthoBCwPLss",
  "key12": "2xh7k84uUyGWJhchixzqsPqz8yQzh6jnNnTQdQL5aiCjQg3AWGQAJYHrTqWicAfkDbQuAj1bPAh74jJ296tUmtrk",
  "key13": "McnfSnRzHn6qF4euKazUXhpuzRMRMVnuoXecuzftCF2vMG3jEkreieFGxLpGdJSt1Ri3L5jSVREbYMBn8LxbGAm",
  "key14": "2fHiPi81xYTWkbyLQS2CLyphzeiVHSqdHhz2PTpgH9vK4DiDAf1U6cZgmdGPrfrxN2PjMomFnbDhMvSqVAQqVyEj",
  "key15": "3w4fN576UBSA8d4WnkLLmDWt7xbjedceM7kccNd5v177X5b2WpSJk9P1iDMefMvDq9vznqzQyt4cDFbm61kUP7Qs",
  "key16": "4yejBtBgYW7yYgJtYa682naPgH5KzLg8jUSYGKDs4bzCTPz2oRreoHuDUqvWETGrp1uDeYuLvz84o9TMA2wUP4GS",
  "key17": "ouiV7vfGEe5CjqBZS2ixnsaJDZz7T57WFPDuSXfwPcT5NEqZ4dRF3kuU5U3omhChHRbvwBq4XNMQKpNYpaQpWYx",
  "key18": "4AYUTa4AJAHqCtEK5wn48kzQ9PeEabXwPwfGF7oxQC3aprTDSWj5jteMPtyrwcfXDBdPdoNCLt3CEAXfcCLGQEKh",
  "key19": "5DTyTjKHWTM6gTua7jDue6FCiEyvno5vfsBGDwKWoRMX9tD3U592cEGApz9nYM5bqW7D3S6o9muEFf64WVRxqhR9",
  "key20": "3QWuwVPYNsi2cejiWUzqeif95qgwyu8KSHRxbHH1dxBHvKwWtAsr7U5CHHi25CmgABACrabACoC5zk5wpyQBEXCW",
  "key21": "2AvCuuYDncw94HhUpTk5ZSekdQvAM67bvBHvDEEtPM827E5BWpvi9rxQsbh7nqd31hkWt1ug9toHytaVWXC1dd9D",
  "key22": "4XrdPimPFdJH6iUc53P8PNmVWzrwxQHvwKrqUrSCiW5U3XRhJRbBVxnwmbAk7Gu9wuiLhyUcbvuzoMp727dJy4mi",
  "key23": "XsAoJzx8NoBsYDtRfGCzDVTYozPpUzCnxjUz1gaQHcW2HJA5GHnM7Rtj41gZhETWNRs5Xta5JTRJVqKRSatQCgv",
  "key24": "5ErmFpgt3ULoq8SkCpNK69JUpFVj6KN2XfvTE9bsDXwz5Aroimv7HRWpjiFK4wUbLBdjh2Z79tcVbserPgn3A9za"
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
