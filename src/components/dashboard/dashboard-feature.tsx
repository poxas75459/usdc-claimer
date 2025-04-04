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
    "3jMUsSSjN52CDRr3QikWi6szLrD4UzkkdvystaGnXstcQ8oLpBXYFVAawHmDzX3uen4sfis4jmzwKXwF1H9WV4iB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34FMg2rCEN652MQbSUUU8MiyKReRuQv3MQhMxtKtkiZ4xzd1G7sEaHK4y7g2qTi6dvxkwyK2QBa98Jmu7oB8zCeB",
  "key1": "54HnpzbLW2LP19MqjQ5LGyTW2xJicav1exZtZgj4n2vMCps2bEshoTrVaQcLD6jE2baHdd3frP34A2u28W3P1iC6",
  "key2": "4LEH2qu3UyZSEEaWMCo5rQv4UbPXNv8zRvMQjyQy9UEd1P9DkyBpsFF96Bto72xFUnpBbb9BqvuFKA1pXfXi3Yzb",
  "key3": "4x9e45sQAsLXy2YVLdteeS2qWiSLswidZzQd6zdcxnup1bMfP532ubcV3Wt5z8wHtoqm8vSUKX5fyLvzPksN7xfL",
  "key4": "2D98Nx9UbRBVUBbhVkaM8a5nRH55qAbW8YGBo98J2Pegcg8Pha1EYZ69NE6waW85Av9LeoJCQtviv4faTgnoAqAs",
  "key5": "UJgtr5iV5fyknsTrMGi4U1dWnjg4T8gYpkChqNHgkaiCjn3mmZ6W4rzuGs7uVjV2smdcRgGJrjyERWNUhaA4949",
  "key6": "5g3kU3vSSPkKV7SENXbNrPYXB3gDLjRfo8d8HNsDsdbrykzJf7tREBMctsJNCqS3cwKBJaxaYVJHoMGhZVvNJEcd",
  "key7": "5PiTTbNKuF91vKYs3cBbvZizoqZkB23EJhR9rTnAg7mjHHJgWSnKmu3MLDWhNHszN1qSMeLUf9Se4KE6DdzEj3Ne",
  "key8": "5VGCsNr8YWXq842ZWrW39KReYBfJHGtoJBAABenYRp3iNtfUBWWQWkLdkj8xUEcpfdKq5hrEed9DG4CN9BF3btxB",
  "key9": "4d9bfPsW5WDH15myxUWAiiCVNR4Adce1T1NTVdcqve7jcD1y149EgzQXKCWFPwsC8JwpBtFBSQvB14kSYVv4Tmzo",
  "key10": "3fE3Y14UniMmcaJj9c3wcFCeWFf2419pfXz26yEPP6WLd5Hoi5coFemFo1vHeM2Q3mr9QcPVYsQkpYzfyoj4Ht5F",
  "key11": "3UBG5EFLP4coa3haHkBGACN7uScJJ1HUmxFU6Fd2nsHDUtAHhihYs5xArQ94gnjUpDazW8YF3P2f8jyJDN8LePAW",
  "key12": "2vGhMakNEA7FD56PHVdEnFv9b2k2PH9sHgi1iKwaeAALh4THzShza8UeF9V6RhgagxrQByi8mDbma9Q5MHCVPTV",
  "key13": "51YiwrTpaov5wSzeh68DerbhKKuvFj4ouKN58sYmKKoLWwiaRXZM75aNLbpKQ1znSdEVrtAvyKKa4kX26wji85zs",
  "key14": "2WCBCdey3tAF1sPGojsrsuDzBn8eznLmT8a6Qb286A2aVCSF72v1hxK3douqQdLSXzs42QTEkCa97vin7Z7SYGAS",
  "key15": "wNXzcAtimaRGvnJdLjdS4hjPraXehZCtRdAEKnRZ75fYehWAm38PR1EMiWmUpHyqWVE5MX114MkA3Va2iDCbFKq",
  "key16": "3685nbfwfR5Qw8DcohPpHJrmL7XS4t3Vxw1fzUhWGdZmRtdgsjK5QpUjDWLGyd2yiUAt3eyJcnftDBjAezUKWezH",
  "key17": "5vYw6AHTatdGywoBS8tLA6zKTnNmCRWVJWiLhdSqGjRRQ71G55dLyrcWGh7m95JJGheG53aeYMzjPL4phU6s8843",
  "key18": "4ESp9nVaivKmYeE6SJeG8JgoKis7rQ8KxmKSZ8VrKUwyxoekfzLTzizBvJUvfwL24oXHcoEp4no1wdHFa4eVad4i",
  "key19": "4oRr3nkXmkLyQg4hhH68GLDoYRcikoEPM6XcFz9c5o7QWek6HXCDLS4mezRLgQkui9BnyeceQyhLnEvdSmQzo378",
  "key20": "2E1symgDv6vVAP8bZ5cyvpk6jxFPWSCJ2LrKk2i4HHYV8xqJfMeaDKDPBYfFjhqbeV31c2yWEzj3SCTFxJStpQPU",
  "key21": "A2FGz9ozP5iz78QPtkeL7z97UinSP8KCU8eRJXFnomVqmaepoonFsEnW2vF8k5svfkwrJEH4E33o9MNTHchLSxY",
  "key22": "33sQNTDwtR7DkwXfKTd4arvmjoFUeT9zATTHkH1t1ds1zkMCNt9Dc5Fq2fWyfZzei9WN9kwWU9Vdpy4qMYVyvjZS",
  "key23": "ctc9fPdiHgyQTrZb9FujTa2VBJpARo3kfexkCwDxgrCFvR5AzFR1E5oLds9vUu4KZ7SFoE6FLhHAH2pihV1L2JJ",
  "key24": "2yBpbBnwbxb7nPRgnvbcumTarsprWGENt4NqTzuYLTiduEj9vhLQ583FP6tJvy7p2FVpwaVRggfCLHPqqzsamUmC"
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
