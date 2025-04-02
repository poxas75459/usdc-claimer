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
    "4XHSpY56Rv1XMGZ6Ff14wDukwoVWB6kiVJU4vta5HA4HxnNLXXr91LnjCVftb7VJ9k3kXJgYmZEawmW8iXy5XXZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHTPL6bhtuPbj5FQtpURv6uSpFExnBJCjUmYouebS8GuKHnuJujDu6JwsAX9mfgCJ25NZYdjNnhWk1xMLCFCSbx",
  "key1": "3ZvEtPJA97BDpcpMFGBJ2k2N623wmGGn2apGzidhdDdXdqdtzt29GM473cqsJruEwXfkrqjG2cx2coAk2og7xSgw",
  "key2": "61PkTt6nwrHT8BYGaNEyYMZhwDntQGiyRCb2b4gQqfCrEUsYYLELXoLc2ZQARstB1idAaL8379ez1niddkpaSdmV",
  "key3": "3avmA3TgGS1GgdFpYbjNGB7kC77c6Rwcfz6HRHLZyCXeumS2dkXEkhPyd5j1Rk9n3dk5XeSnT5vkst91uFdnQ5WX",
  "key4": "pqqFNkTpAcENb8dvfhYYBeXAkWqo4xUDggrPHTCQLycczUNdY5dLEmymGpfEKiPFXkbSte22wH6TamySmcb6PsW",
  "key5": "51AJFh8guYYSBcvZj4Ldygfci1rjGoT3LBVFUyPaewMKRENkbEmeX99XW4Soem77KovXrcvMsc7tPHPZhG3LQXeX",
  "key6": "5kaxrfETUZpeAY6BeJDTcMz1UtyE4xSN8qb11JKYz3kQa3RodELkiXYoUotygLGthaWM7yExZ8qCzcirghNLpqMj",
  "key7": "34iqcXMAf2Hz85uKS3auKYzbHUZ3hYGsexkpyqLx5YGprMjo3odn7M7HcLmaVq18mMdTMD3bbywYePjBTXNXRysw",
  "key8": "3qwpqcgceMUX5V1NcgUgDDRBneY7yLjtUhTF4a9mtUvdhbVvdBKVVkdNvM9oHtJez8mRHhexB9LDfcyyKVhrLjMF",
  "key9": "yXqRgriFM2nmYsAsieBVcuyBweLeCkDNpZp8T2VA3AFkEwwa4miE8BUTwKztp1BTuhTAcqQeV7z1YHqPyQgwd3D",
  "key10": "2PKTG35LdY16mXvJiMLLkkBM3RMDg52JRnJKnWqxxQP7UnDRAMDUGhqg6PrUFoVeKCFpT9wvpUgahDDsz1cC7iVC",
  "key11": "5LzRZgLM5icEQB1bZ9M8zCnUc1iH2SP9wXNwnPSMnuUUHBqg3eCwL83PiHBKa7fRRE2KQe8fPBRtXiA7KcBn2i7K",
  "key12": "4yesm3kGxRgJawDHsSUqHtW8cobqaXmNNw9LBq4YVsoPAdeWMH7LHomw7iVSbDuu5sLUYTWUwFCQpQznx4oR8qty",
  "key13": "4ZsZq3rdX8CGiTqfpzTXcGwpJWJyFb7oFohHPtGyC8ib5W6paHhjxAkhSjQseXzb5MDQi4YPVHPgkjaU6CeEJe8q",
  "key14": "zRsPpHBpcNNDvhonpePMxtDg9BXLy1W2KLV32ZMWkrQXWWW8a5Lm1e3hZSBVyYgRTwTtDoKYip3WoBDQwPxfyBP",
  "key15": "5jwFsRJRNnKGbr8pfQ68fQVVbpjbVvXLvBn2DLGnXjUCAefnjRDa9Ngf25AvfPWLnncdPjiU27CMajnLuHvsenhV",
  "key16": "397dAXYDkJ2jxwy7owKVPD6x4EN1K6kA2mnk9gXKDH6Lv5GfCUjvMSTVz9rV8Mhuzv6zqtG7SoVPekYoMZjiguoF",
  "key17": "gN7vdN3p9XGQqJ6Skn6agyV7iRbKdnQizikobs11VqKsZcdvShTf4JbgJoa2V4RykKiXqW43jJKLT6v7B1JqiN6",
  "key18": "36fNoz9HmukiBn2ZWGtt4ieemeKL4sEMvH1v2MYZjeyzsChdK1wVxHRBx5vyedq6bsbs81eY5YQ8fGUu3pWWCRg3",
  "key19": "4EYA1K9DrufSN5nVRqGkE5cUbNCGo2Se9CrW5YqnXgK5KSbGgcwdQsVbQGm1RCm5s9yCrHqmBev7b9YCwK4RADk6",
  "key20": "4Z15m8N6p9aRwc2HBkLeiN6U9oZYbNCoHmcWKSMwrcnivSUhmwQKGFKFiQnZTsFzv1Q7hn8UkKVR7duA36V4LvRe",
  "key21": "2v3aPYLWjEVa3UNAqYRpJaxwpX8hSuxcczP58ZwHq4S94cqRaHcWxkgRPjwKGmDVpRhHBQnWRm3Sw19gQWEoo5eV",
  "key22": "55LpMU2kpu97v7WuKC94Dt4j5TDKfWJx1BcDFMy7fmDWw6PYRXmxQ8bfM55FW7bkwzcYSL4FHDkJCK3efy2p3Hrs",
  "key23": "5hfeu88oGiJHNeeARbPotzau2H66v8pGRP3JtiFhn6XGJL7EHUUXue9wpbY43WRG26K1n8SVrKf9FfirGu9xJhhg",
  "key24": "2Jk88K3iC5umFze1TQDDa5mKaMfEwEWEavheCakoSUjyTARRBC7z67p4R6Jk9n2eyECe6BH7qsvUWbWesam8B6a8",
  "key25": "MWqaN27rfpjNtJcYNVFivuBnAtr2SPoNVxEydZawkdi8EcYEzdScVN3FPLZ9ExEnwAtG4EgPEuLgtPgrcwtwqLT",
  "key26": "2HMNHvDE1AvWxYpDi8bzLvXoNAgANLUvjGuoUUuWdwHF22T5RAnZHN7YXn5NVWRnyUJ1JCZu9foKMp4NSPZVQAD7",
  "key27": "2c59fFuqFX2KgSrMHwhrNnKNSnFtbqu4LLei1pZszbMVHdGFXKeAEPrR5bxWzt7gAY3AT2WVGdH4Yf7wio4VeJeg",
  "key28": "4EY9T3XRbq28tLKKGTZyNf1LgsikqHaMgXmy2kJzdnS1XHDJV73zYtx8mLofE76urCFjMPy2LWA33VQraZc3Cv6F",
  "key29": "KARLyKbA7RURz92dtXHGs9uDSjSeyWNtxecVJirhA4nuNxeEpFN3k78W1195n3K61LwmLJQmXCXYY7aNugF6Sqo",
  "key30": "3AvnHw28yQHHkHUtf4oNva1VUhC7Y62R4P1Qe9UwKXSgaypbq6iH7KMkHZ1EMxo3tzPCtmLJ9RMPAyc6zuHiMBCU"
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
