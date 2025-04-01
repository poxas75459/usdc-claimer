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
    "48y44ECmiDabyjfmSfMi1g5DB3s4V6U3aDepeBG2QFADq48NwJ6fgnFWN5SwCvMhtHxEikPAhrTs4mUHhxupt736"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBrE1uZRvNXHV4a6hgV4fjwfABdMpeHJvFePXZgna6QTuDdY2CrETZPkwtYGEbMrnppcG2xXDABptFEbGmQWsYN",
  "key1": "2fwV4fvwjYLnHChNkZyiTJnFbLjftxGyvKahbCGrX3RRhcD3WMp6NjqLhEGZX2JN71wYtfiVCb6w2u9C9T29hgUW",
  "key2": "58qfs7FepiHjXYDwWJvTsw2sppVkxDgSeEt6K3qaL2hKAoEAdfB6V9izaHdGp64knP4gGp4ZFm1zsKD5yWfXPxBe",
  "key3": "5NzUWSJqqRoJ2kok1rptsciWSniJYcJ7X9jmeFnWr2WEH5cc19URp2fqqRaP1MWi9Nj2Xkw4hmxNkRAtzA4nuvb2",
  "key4": "57HypP9nhggsz8FxZnbWgUeE6fVBmHis2TZsGXN2qrZpLbtAi65aggpEu22pG1RckDe1VrfA9Pa99XhmkWhNqWSf",
  "key5": "35hE8vY4MoRABZ5LxNTVmkde883gpK6fo1qrY4A2vMKjodjqFfvcrXFKtqmbP63AcveMviGzyNCERrcKQdKRh1MN",
  "key6": "4HMahBqbqhcrHAb9ruLcxfF4e8PuRbQLsVa17a4cU9hopHKq98iBArRHcqa4zLhJJp1qpwgKiYu2AZ1CGEMyr3WQ",
  "key7": "4E9eaa1TjAGE9mdSUj9KnpFQJ6BTCRLnhwqztYKLWYAyp1uqjiHRM4UU8ZfUM2mNPxYnHGsXQMRa9h5AgGC1W4QZ",
  "key8": "5MCVYjGwCETktKbdvWC1Ms6cYdz4BTnhCrZfkGQxtN15yEerdm27hBouhR2yUatop1rG8sST3H7B1zwPuY29vKaE",
  "key9": "4Xorg58LrSjkHxSTsYaKDygdyo6vTTJbquTNMntZbcy9EkVJU17vpeRAGaWGD2HEiFMjjH9TXHn4ihWyiSphWcVe",
  "key10": "5aCDkFcU6XfBLoqxbYCvg8mLD9Fv6HfMhLT2KFEYTWsEHwPkqv3tQJwsHf7gQHoaUZCHR9nsewjJ42szfzmGwes7",
  "key11": "aQKAJRat42S4csSSutHS59wj3PZGYGCwUG35yg4R4Dgh5mRAJeh9prpMSbf33tm9bzcuvhuuzB1obKr5JLh4zxP",
  "key12": "5tqSqdQSRGt69H3YVib8Mk4Z7EwYYqtdMxDZCmasHs4dEMU36oMX9KwVpHPXDksSXyVZDTm8ea3oSd6LtYcs28EC",
  "key13": "3LQpRuMB8EujfzUQmE9cWuGoBsgaTo5fxHmhJxjoZK3BCosSdLxVnYggB5emA75DDrUqTT8j64WBgY6doHVFX1b8",
  "key14": "2gMfTFeHzM7iBY398RmsAwnjsQrRE39iNFWSsXWBgK7cCUfYt1Ww85CMg6d4zoMx4BnYVggUNQBcCMgH76VgWSCR",
  "key15": "526nzDiLM6k1ekX5mqq3B3GNFUWRRXBKeEcekLXJbQV1LC6GdxjnrwsYVk9douD1t6vELgjHbyLwbpbyWDkRkHdW",
  "key16": "3RE3Cq759kNwvxqKvth8Tuob7vEs5gefeLVxZEMLWWrHp3tWJ8uNegWjk1mLnZ6L9bYKzkHx8SEWQEjm9zGPnvRF",
  "key17": "2ZXbrqxddkr8MNXMJt2FgqKs39N6CDQZknKvivX5EvFX3rnwh8hZBwmK7Cx8icU7Zh6Y2XPvqhph8UkGvfrXVEoZ",
  "key18": "4vmhQ6y2nXDbr8caRHLAstGfQcro6zuy1RYx6TmxrcaAmyEAmgirXfsczqKSKCENCJaQbMSZ7h5tpK9Xwj1MGZUe",
  "key19": "RaiTUJ1ViGVsfHEsaXxKbJnMFftGLdDXDwiCK9hjES9JFb5W5pEqM8Tx7HTr6T2mxEC8f942hTgmbvT969Ria4o",
  "key20": "3y43DqbG8xT3gcpyyVioF6D1KbedkQB8pF2ASMqUxUrmYVoSU9PebFzfcicZpmTUeiuxkJ2FEGp2snWGexa9WMAX",
  "key21": "4PKiSPCnKnhpGigckAUfn2vG5PUELkgoHDvC6N34G5SebLe1fKXFN6GS3EAiMxjYL2y8TmTpyrE5STyZtrYZerSK",
  "key22": "66ZVG588MW1PvdPaNsuXc5zpkR6qTf2nzCqTqyL1k72rJnrC9H2UoTFpyxBr1s6eEJ4SMaxNNJMr86mS76xWQ1w",
  "key23": "3qy4JaDtn6W91dyypxwGQQB1z7NrhRkQ25iBu3X5m7hSN54ddSse6zVByKfCqJpFA2fAH5WB47YdS5zYeSK9RxsP",
  "key24": "3gX7fNNQg69c1TbUqRW1xd8c1uRFMkRLQ9DsCuxkUw2kLBvkVvbwULjpXeSUr9PejPhf6Eeotnr1HXVPxsfbo2SK",
  "key25": "24H8iRAKPaUqJV7WoXouvHcWfmyvN6e7QKVBe9VzjSwUgzPQ26UFXEJN3TueT4qugvqkASgPihpCXz8VGcwRjvw6"
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
