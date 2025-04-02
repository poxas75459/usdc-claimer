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
    "4VheDHFeewehLchFdw5dKJ1eAu1FHNL1GyVoK4PxgW6pARoPu6wr41p43GMRXkTsaXoaUvm84FQedHd6dDGoctRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgWTzdNDsLxwrHWSzZM32tJJ5LykaWiqPTtgzM9efpBY6HpMmHTymSXYzdvQaJpHXXYGpdjD4zky7qRru3eBxjj",
  "key1": "4SHkERHz46iwRC77oGtVuRZMpnoTi5MBbswDis8oETgU9Hcawh4zRUe18bd2rS2oCNTRbUPRfpACRucos6TGMLs5",
  "key2": "jMtBtm8xCYv7Z91MmNcXHTzQaZnr5QbjpD6n8M2AEnQBx8n55iy51c925nuzC2TNv8prwJ6B89gF9rnGvif9FJx",
  "key3": "2wAqsprnYxBX2HYZUJWWNzDVSQNURhkK9f1FpvPQrFi6rh2PzNP56EdCoDKTPYCQBXEAQFHu4VuWCY3kTTzFKrnq",
  "key4": "3VdvtmgLRLQvfUvp8L1ydbsQnMT7b1HnNgzcFoWe9fJmERHM3UNizQNxZMDyX8ZevpA4iRtNHedGG4LpQAs4oTyq",
  "key5": "5cp95nH7bcUewUXpxcSZqToAV6AhEMyVHtUKhvPXwLowcrpVBdsZKBMiVhNGytwkBj8TozjNxuKcdsGgSFqpKgin",
  "key6": "Kzpr4Xfrg7rKTiuYLeUMRBocuAuZDwA4Y1z9MWNJq7scg2aoWyUgsQc9VLciG7cWRAKWzNyE2Fs1ybygGacNRzj",
  "key7": "5BKQiz5QpZ9vH6odfRGUocFpft585vhkBfqBV1VqmLqCSeMZAG2LaVpFDTPbnJcMXgTLtq8rrCLPxZXiYa6GB8na",
  "key8": "5vZBpo2dguBed4NrCdsDUBiBexT583CUqtVzMm9HBzzJJddB9T6uhnWnziQGHaURNVp6awQE851ouJXytxhzFy2r",
  "key9": "3wab9zQJTsxZbWs1SwXhsND41nH5BTdQXGpaStSWkBVzNvn1iJtcAawVoRamigUFEJhZRkrAjBXqhGHzSFWCHAyF",
  "key10": "S3iwGk3iKgHWAsvG2ykQwmAM35LrXDvS24HP6ERwUy7MgHt3duFhVMkysEVq4M6iNfkZvBecZB9TEnEMNeGaJhG",
  "key11": "wjzQYX8M4EigmRsCKv8QL2aCnvKLRSceRvXLd418iCqfaLp9yZsAPSx9YLznN6bphrr3w4q1hkAdzqz9GYYwSTP",
  "key12": "4r3qq4mUhXLPzxpeNceiL4eEzqCRqq1pvj9kgW4eVssdvVvWVY1PWSBL4fh39VHwVLJSVHGR5UTAh3Qwv3zB77N7",
  "key13": "5iPURo2Erq5VhKfqCrte4WDWyy3axWXkQyuvyr26i5BaRr6ABHtACQaRtXMDJNM3B223g3UXP1UUtWDPEdtVLZQk",
  "key14": "3TGfaWXXCkf92DZL1gXru3ehL3LNwAcmb7L1bqtyybYoDnxYXQK6GqRyKR4uLLoKrwVXe1rDRwD2LLC8Lwt3EWoh",
  "key15": "2Giv1enVbx682njGGBtCA5z5oMoQGxMj7MDT4foEeVx4jior3nHG5QrQCf5erSZ31w4haj67enLdEDRxv8bJVieZ",
  "key16": "3GYpzwYycBFpJzASCQDxaVYijMQNLsuPFGLpTkfoDeCXPoiN34UVbw6zjVQzj16haztcnTtAD1Xbi1A3mYVAwV16",
  "key17": "2k3SqqCEcNeMhXnym3CBtjYs9NVU5zTiDnc2RPAi3uDAQaFa9n7SmbEadhZVB6RFkvwMcDbiFRw8FPhCZZ48gDsd",
  "key18": "5CQwRuabdWUib9EVbfw4h3vgofn9UA1hvXgKyr3kV9ncX2CgxCwCh7pVGUstRryNGmmoyQAxxECkG91uMmxKcqdX",
  "key19": "4ZT8qbZNGbmhJkK9nscnkmEKiDSTq7TZeNKTeiXNbbkQQtQRZepNQk7ieeTomDn83AFhAy6dnaCcWRdkNGWFs7ZY",
  "key20": "2F1Q9dY5SaiFEb8dfJFB72L9GscjSmQG7uKp9A5H8rfVxycqcRvfbmL8iBQ6mSH4pGg9C4aMYWdGuAHc6dicXgp5",
  "key21": "4Eg9vrz8g7p7eP2FDeeT2fPfv4kJWKjUwpdn9upRNWS1JDiDQYcaGnipKLENRuhgcvV972VDmMANcEuqgKEwewzx",
  "key22": "46gJyfQ7BQbN6efReb3rtSKC1awBaedNPHAfaNZfxfQididLWxd6HzgNAsscQAf2trpkSnbreLTVeqNE45Eses7w",
  "key23": "3gNiQzCetjJCYzpjNA5gnycVBGgg8fdiExwATYo3aLwHYQYtryaUUQZpRS7xcKiETiDhuKfVACmLK5tLwiPKntyU",
  "key24": "2Tauh6FCxQkSQG5ExVxBKvhSy21uLwfttPCry9VNsGxVhespu7nEq7oUp152kg2fYGaUVjD69PcmCJJZf21eaGUE",
  "key25": "43kJkrCvHsn5u1u7WWdDfHNKto4EEZ3okuUdcDP354Hs2wybh7ZQMsVerFaTkT3nYMJFZQWAoyGVZuTekXsNEbtK",
  "key26": "3zV2X1LLPrgxr1Ub65EWM8VxRZTAiDdqMpMdzUzfH3itr3CZN7d1Z2zKHPBmxbcquLvV8Ja2s8JAfsVupJsuttFE",
  "key27": "54ikkCqf1DEs17oS4fbpw2hHZJ4VwxXcmPN73CzFYUDj8AryfzWhUDgsQhoB2wXX2yXa8hmUEVhASsAnWmiLmG9r"
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
