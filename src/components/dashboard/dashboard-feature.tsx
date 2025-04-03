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
    "34mpTE8hVLuoCyf83YXYmGUmSjEdevEJV7d36r9oUhFR8JzPbXAP9QbysiVso1fpyEE3LpwaQcNJpAkvx9FcDM8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKQFXB9ec9n95KRcfNX4fVGxKduAp2FwMAfT9Dp2mTZUoqmQL8VqMNrkVuDpByQ3UHuwa9ViPSC23kZxvZE6Mat",
  "key1": "2vphFdVgbW943nXNKDA4HTDrJcXNUYmvj9vNpyPP5w72magTRvLXVD7cFQzSP7Wodciixngw2B8VRyyoEgiCapqA",
  "key2": "4YHbx2WiuRq5oZ3UsvEvKF2bU1VzT3kRY9afKjpF7b9c73ZXSkoW4kcdFHBWwXXem8PCju9rttAoT3vVJuj3ojXT",
  "key3": "5yo2GBbHMF9ZvqbuokPTsncJGC1dpb3QSqNHkgnNH63jP9XvpMw2HFnp7V8LBFgPFcztQJsb2S4YKfte26T34Qiq",
  "key4": "2oUisNvbpavAALe96d9BoQCJvrJs9H56JFTE5xSurWHnGcqVM6WXF9UrP4HB3nrTSQxNtgfpBNY34DUnKaVeb7th",
  "key5": "qomPNSe3nVCyjWwQqVAS29gzmKLc294wsV3kMNNB6rZQuEYjDZdr9RrybCx5DS23htMRRiqgJTaYu3LZRSgsLDa",
  "key6": "2bHv5RgjNoX95L2baaSe5SqaBswrcaea92QyV3cV73YeAuj5Y9CDTWutbw4sYYfYSXGsNkviYzakXogCaYmKAA7z",
  "key7": "g3niNbDprmu6Q574kivL9Q34dzKNG3QoZmAA4iYMRQN8PQpgexgpykcTg53FWLMTSoxkuVfKHZZJfKXQvHnfmFV",
  "key8": "3VEtNqX5GgqUakkHbpB4vM7YmnNnGhYkNKeKDWhY8NBtF3aPBgH4dVqKvESTVeqJsFUt33Rjsdws2XBxe4NHnupE",
  "key9": "5dmmtaVQSQ1GRhxXbPx2cRJq6SvVWgNAUy1DwyLYcwNoF3Jm7iXkXfRm8KU92WJdHcFk8FoJceTcSGGwzrrPnXdb",
  "key10": "2mC7GH48J3ghXbEqJ6QfTe3r2GcPc6aJYUL8GkBMdqFDqQWccDcBjxhMiQQt461wuhaUEwBRGENEGHNMoKUnUEhN",
  "key11": "4cgDKT2qy78xqLMbnCCMVPvzPejvN1NfJtgDiqdNZmowb7eLtjU9116fK5DU6UcQcFCuFrYZoesDnKgrdwus7RWR",
  "key12": "5tv6dQEvBuFXHfLdXVLqns5pRLX9BfoNiEPptzvtmFqeEv7byX1iX3qSG6K5YP6ExEqWKnATK8XL89ANA5y9oGmF",
  "key13": "2GCg2JEzoaxMYjbtvqxePQQsb6tbyMn7R3F8pwEaV2YZ1NMcRoEyBzfRJ6yFAjSYUzSXHxH1T3CpPf6qcd7u8dEM",
  "key14": "34oadMHTcv3338XfvkEoSXoLDChEk8RnMCP2i7wGZya9Qfd5TZ3SpCZhh3g99rbFrR787bG5XcxK2GZ9EHa338pM",
  "key15": "5SxMJF2hCX1EGNqXCpeLsyAkZ6V9CZGGY4etzBsf98RnzySXm119DykfNUnL5UfxQqaRoM4ku4Eiq8CJrMZp9Teo",
  "key16": "3uXR7YoFkvi49bASNLqeWASdq9ZWuAgUwsBbuUAFUqm9uNziDrjUynMcFptYiJgmceUXQfNn4UBVuxSLRpMMJo3t",
  "key17": "3xUJxr7qUZEWKXRAPxzBo9eejf7h4X6yd3d5SH3AzpA2yJ5iLevGx8L69qbdqPHFrCKY4UsUnw2wuvudrFE2wdfL",
  "key18": "2ci9xqZa9LYoqrKygRJR5KaDfiyFJ1pP2mek4fygBPKg19VufVaXeA8KkVdjSRUvWLQPxawqKxLBh1JbSvCsbXHB",
  "key19": "gTHpzEHCFwRQ2idG16vUXkgAX8erJtdDU5ab2s7tEw51yrhKBWPpVDHVQE4XX8kCsjVqP8d9hURHBeC26zL2mk7",
  "key20": "XtZWLXjFpNT3iRC9xBxRyVRMttDraDByuaesWHjKcu4onkFkCGAy32Cpg5qKBQXggoRMneemZEDk4cX34QoP3Dd",
  "key21": "21siMbQC5jwoEpdWBau2MmpFaZjS7vFog3P1yjQUpiuhaVgicBB2dMhZHEdwmGna8dNNKJJg6szGoXjCoJcmPm87",
  "key22": "VjAA3gdtCpx7CZK9VFegtvMrpHeLpgQDwYLbVqbMKGhNi1ooCCQYefNo1viStRYF2pg4r2SoFJqcAnT5jsV4hAL",
  "key23": "5BGSmbhWtSRQq2PN7kgfzToeccrVt1DU58xnNUsVvZk54RzwPBPDQ3KU5xBWaNd93TAPH7SLkMXaFeQuJSyEt5TA",
  "key24": "3urrABTL5JLNAdpE3VSmEgbMcUCQjZnVPYNNrciLutUzovS8AfU5USMwZkrwmd1vn4pnfornESpsA9SQaFQu92UM",
  "key25": "4pR7TYif1PwFp9F2G3dTsBpeRBS3jqdmuMAyw3fNN2bCrGWGoooZkFRYBzxj2nLaprpQ7T9JWxURcGrwfFKLiAbL",
  "key26": "5UgxLv2YUc6FmUBsvfaMxvNES5EJy6ZQ9cN5EsinXLkdhkaBcv9WyEw63jcDp1wWaaSXhVZYgdSqhENASfT24fej",
  "key27": "2skmaiYkbFqWHB7zopMvgbzs9ywTLx4gx2Chj6QGFWMLXMoxLUDjFMzq4Hu6AmzpQu3uw1qoJGpbwcMadTAXLj5t",
  "key28": "4ERV9ASf2i8gCgwZ2QAR2iZRKvnSLTLruuRrbuhw8SjV4cuNF3ZJaENhEfwmCN1r1MP8KRYKzhsQ9k4satmpscbh",
  "key29": "2yvpExr1VCD3sWFxtsNFEGhD1ixuoKVbVC9HsjrfPU3Dx4dKR1MC5QzST6utQcaoTevZRnQVpSKJGu6ocQZD4k9S",
  "key30": "5iahxr5kkyimjcdKS9L99x5HNjAap1bPr7EGY8q49wCYU2TfibKCJi4Xtfdocmk2wkb3hxaL4X22MWZTGCDi3gay"
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
