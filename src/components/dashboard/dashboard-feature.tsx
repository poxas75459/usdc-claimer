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
    "fxZaxKVQxt6dEgyH9WER8LsxZ8xcqHuAdT8husgeSJuZe7LPmmbDXma1yjqZTAXQdbmpSaGbHJMB7ZodJxHbuk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Tw5znN1e9Tw97SdPwNdPbHRCDWoV5w9tMrDQP24qVPqY2KHV6rtxoUz4qv6kR5NMzh7MkUEiwC9xDZVZr2MvEG",
  "key1": "EaNEuarWbjQNKCNFt8hq4DrfXmRz6ccLewfjz1xuJnmEe1m5fCKwLXLzeDs74BHibKKEmzPFpbJ7DNCK1K2N5C2",
  "key2": "3gWAcdbMQwcx9YREZH3b3cZug6puKAn5YYvqyojDdfnep7pJcMUdRMdHrYyY4DUg1zcGuX3qpe8cH29ygaAsezRS",
  "key3": "4RgrCVNHqmjEi3E4ywKy8S87Wo8ABZFVhfdNJ1Mc1gGcMcFBZmnBtRZN6TEjebJE4jznWuzrxz9LUaWErMADtSh1",
  "key4": "4D6icPTNaDy7aXLxAAyo9q57uefZ6QRWkrNvLsYqgq9MPGJk86SzzdSMp7nqxMnnnbRWVtBRFmE37FgfCstNbzXo",
  "key5": "591vqiTAymSQomoVBXw2EUBFHWttxkbc1EbPGf2eJQamNs3BbP6CAifN22FFGwXmUZpNCT7feWpc9C3ZM1eagPjH",
  "key6": "sXEByrsG3oMH4Pcde5YfzDjQEyVvP2FFVLn1WC58wv9HPZJ96uiiwV6YHgpMDQgt9jDxz7BYUk9hKTUG7XRb6Rz",
  "key7": "4Pfd9k3iwuP2BzKa1kTyLbiMejwSQt5BQq8JNxRhMgaY9LQkhJRKSBW7NCCPfaiY6FZewkyh9tV1vu2b8P3JFt6v",
  "key8": "5sh3MugyjxVTRt8Ya28NeS9hEk62iqvQzipBCZNTpcFfYfkovrhXt4PSjRoPF99FvkruBq7fTMgBPz9XPs3qxoCf",
  "key9": "3H5RnB8v4pUGsoha3Ad6hWvfkrVR44CJ2Dewiy2T5cs8T1XbaoNwHQwixAK81YPfijTDB25kjJE2YpPJ5KtfsWpc",
  "key10": "4WoM4Cd69q4qyy2hWPMdRDjkg9EZ8kHWUePyH4g52et3ajQrnkHjfCb2QERTjAhXnmrMswsotHLm1YifTGByBQFD",
  "key11": "46GQFcD92DxBtwxVHMYVRwwoJ7Na8Frrx3d1X1y8LM1CQDsnzUq7zvK2MujskjYk9HyoGp3m3HL8q76HktQCKHTE",
  "key12": "5Gf7Quz2P5HKn8q9sADwYACHUjL3TJUqsFR5dsbvRnM2TkbiuFRU7MY2sJ1xjRui52wXeoZwdEFdps6iML3RfDZ4",
  "key13": "52uDwGFndUaq64it99RtyU2huBE9j4d1gWD4aNDHxrrKwDN9ugDEuiE3BmXqqsXyWKh4A7GvELPMk7V2TyXkLRCS",
  "key14": "4G5gnv9EGq4ph8PymzqCLaxMgAvhWBtMZ3rE7EJfCVJEqFMcSavvv7yfFTVbmc9ebFzXVXpFo5w8JQgU7fNkwFdS",
  "key15": "2cuAHmWiZVQtximQyKXQi2F2Av6AKUq1RCB5Ya4MM3hwiCxvZBQ4iWbn7vKjuLLWeS8zkWNAUjhyirNakw4LVRMo",
  "key16": "kTuWB3zTVEdJUY62KswAkFCnJeVkeNZ1iNPSHmyjwcqYcPXhXp2gxnYRY1yWomWoxgcVMGGKjTiTMENtyRourUh",
  "key17": "RWRQBSxLpkqZHdmvhCvhkB7H8mzkijRncCfrFtFuoPCNoxL2kNzSQrAwkmm1AwEJfKrJizrqmdoBW2LbiAyMCAL",
  "key18": "Yw5AZbVdWZFYigboAMLuhRUj8G7nhnRAQzcGe9pNJB7fpoYzkq1RRs3qkkJYLM1spThGBe5oR8f4LLbkZdz9bbC",
  "key19": "2nrM1UoWFxMjqgkVbHpkLDLHKN1dCY3cZED1er1ZsnZqbnLXi4dWFUrExq1yhtb4Ga27C2rhxQxMNK9bzgES1t2K",
  "key20": "5z9yDi6H5WK9XmeBQPzCR41BwPoA5XvC8zNugYdDAvf3mwVg3jvdHGYKyNmGxUnfg8fGswT1tbaENmzgShXQXDwp",
  "key21": "42Kq4XkVqeBxkd2tTbpLS2hiqoPBnN5pFu6H92fgLp6Bb9z7dt7BiZfqQmkYREZYrXNMQ5aL7hMK5BcXuGLh6bAd",
  "key22": "5k9hMXi4MEsvmWYymKN2eJztpQLfD7woN6VpiPqM33b7s3Zwd7vVgFW9riwPYzBZZQWcymPiVff4cuGd5xtq3Uih",
  "key23": "3pjX58iB4VmzTJbB8trz1ERHbpYQvv4GrQAHtsrLfsJX19pydMvub7AKXoUunpvtX5ihBhLAxmiNVVpR2Dn9BRj6",
  "key24": "3tu3V6Ar2UCTR2LV52SuT76qFBusmwBC4VhjtTxyDSaFottpxyi188ob2CcDd2CecYQjTsHxJKGAGEPdRKs7qVyi",
  "key25": "24MPE9QEmTkcy4M9nRjco4pp6ZUenesBXZYhjb7G9ZbebHKSscFfmuVG62XYF1UW9njVF3wvq9myw83pdRhGJrWz",
  "key26": "4KBTwGytrJqCUVkdAT2tteLkS3gZDBWA9GLNGmCbiz9iGyuKoUye6MR4UYssviXk3ePb36UFm1WcGrD2BDMMaw1R",
  "key27": "cVzieFURVA4jTZWBNsPjmxVP4xDaJHhfYMB5Jve5QZnaxok9NZL2M8pLcweHUAQ2Y9vimw9PCDzd8CSszrdgaMG",
  "key28": "6uiGWqCJZVn8BoRzSCfwDMT6oa1zWcrSpuXmqFzLjnZtzN9abRaf1KpTSPxzGCf2EpoX8H8jGGykkfVe67YxBzL",
  "key29": "3oZ698m8TvyXrEcFRFXofNdLiQSGsGQ8dZ1UeKsXb6ppwfW8SPRkTB6JwKmojJq1uhChRynoEuhVsJK2VTQxHznE",
  "key30": "5utPTf16fCUryCEu8G5bV1Mvi68GCPvX3anDqaLzWe6tamxZRxmAdRoyS1y2fRYmuF92tqsnNXWCT7Znqy5p29RB",
  "key31": "2d4AW8jzdD3aPoMSajmB4ozG3CiYJMvP7JEYraHycksuKYwXjnfuCgt3597f9RtbWB3RepH6DKZMzfJ7BQXUnXtv",
  "key32": "66X2hziwwrk8qB6a7L8ygSSaJa6Bzo2v6msbyb56jbT8KCD1muRXeyiZHFxrp2dFc3Hw7GD8wkJXbK1S12LTfKqE",
  "key33": "4vgjdCD53YYwwjoGgBCfiTEXH1r88267oBzyunUXY1peGw1ij1PoEfXGj7UXXYiUvHmBp533YCF9eDbETFkLzjpb"
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
