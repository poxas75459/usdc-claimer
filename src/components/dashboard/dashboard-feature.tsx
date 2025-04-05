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
    "2AabS9moPR2C9QHPeEt6qB5UnzqivkDNPwBwPoYgUFc6KsCrEJRxSM6qtvmuBHY2vKWy8R1TBccHq5kUmeVVgoHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVaZwZkHoKm6w8f6qYJ6PntD2Uz2kkkmMEHMKmphptZv7WevK528SAKcJnmcca8Gd5xJ4PrUTTFYxSWKVR1MKLy",
  "key1": "2fvM2oYCNhgdHtzfX6aasP8HwV6ceiiBctJTEJjfhvC4gX5PJzBAxvSuDsnNdCUWDoxquP265zuarkxSZ4YaAuBy",
  "key2": "x7c4VW5MeS6uhbye2rskKAmKvmgT4aDkDkpgBTccBK7DhuQjVCnTEP5YdRo4k9ZNyk4rQdEUDkw4rYih8xxG7gd",
  "key3": "5EB4GJHFqLGGyRhnoi2ToswSq2Z8gCxTom2caLou8dTkFYamNDZyqmsV5Mrvajah6oYV1bCzm7jfUVSS92ZqM9m8",
  "key4": "CdvYML3yMYMQeb8hhr8ypks5L3BbJTMAfoqgrcNdQV6Nd8wYbTCznjFVWNkiFXypHSGDdnpa8AcYpjc1ZjyTzuC",
  "key5": "5wacCEMeBbWJT2tFoSEcVzGwbzxtMiNj3fPQzfSH81qCupCwT8sEzuPoRTXRzzBkLJX9qqVhGCVGFVBxDuahXgiz",
  "key6": "3DJa9dhYzhx5RhBEX6symjXXN2QMNzXx3NH5MbiSu31dhVom92gfvY5t3637zhjBfsF87wRgjAidsUi8XJwokGC8",
  "key7": "4rdPhJh3iNgJhWDbjDp5MD7hqTxmzUmmNbzTDQ2sbP3vm3AC4BgAaBbTF6CENoJxw33CgErDKWUJaGEAbi4QCmHV",
  "key8": "4i31XC8KpeMuDvnHTxqPcn2ouDepLF2sUHEAPL8ZUg5Ynway6Li8tzxpFFVmi6vCsRXRHUrsYoCrDeB5KYyX1cjy",
  "key9": "85bv7HDp899pUCC6ubCkZK7wtr1pQXfj1mLw6Q5sB46w1U4jf6uSS6Kdu7xNPSGSvNtrie5rCPqjdTaVcJRB7po",
  "key10": "2CPuDBSVAZbJsKLJVZrYgi3k7uxMcedgmhTqY7ZGRGTt63XZcr3oQmEBY8B8DHwhnxrW3rhCqcTrRGM6e3QGv6zR",
  "key11": "4ThXpTaENJ51Mjiv3GEMxMQEFHingeHJKx1Y8qJSghxBvqSU7TAmJ67YhdeXMDXUW6VVj79G7bzsNboGSB3dcBqV",
  "key12": "3yw5vP6piad9PgEoYCqUKRg4Cbaw46XK2rP3hiV1Tpgf1mTbHbPREdmWn1rLttRq2nhtUiNBaCMrkCqfpCQwZonZ",
  "key13": "bhzUNXxUA6j1CXRyXT5AXwpfQZfDWn7bowym8qKr8cnmxtHJReNsVqDNG7n3dgQMLd7SvrpbYHdvp8NKui7aYjQ",
  "key14": "t6ciBJTDgym5C2DoDP5tb7n6bSwJehoS6Me9HaUWYK2xX7VCrZ6UyhE58fsAyRoDbzRy6e8naCBbfdZ4K9Z52di",
  "key15": "tFTSK8sgbD3gKAKKsa1UhSDLQWdoHvmhghyxgjCre4hPqXhREaW4HQz1yarfwoJEfEW3SMsbfhjveLYFiPt7YXu",
  "key16": "5T2ywG3faHn2uvJHWFma3Af5TBDr551aaQDfzJCCtWqa43Vgqvk7PJRm3EGfuLRXz7SPMr9TiFmkafn82r7xbP3a",
  "key17": "4DqSzcA216R9X4HtFAfKdpFThsQidUFBtjNqVDYNSTBrX9VvRU7okjuVivXiGf2ZDRqp6vm5eyH7yCX6WiL389x7",
  "key18": "47t7TpgXMSzjorKcgrMLZmSR6GPFd83CRVBa447a3rqng5vhN8Qk4fPhS5NAYrRaCjXWqzWWk13XyGn5gwprVywE",
  "key19": "4jpjtjg4he8JNrg63NSEfEoVEFFNr6cM4BMGMwJmnvHjrZ1CMCkFX1PcBbafn1ZHHw2Bs8xkzSsUNrNiDDF5bJGj",
  "key20": "DBrez2iVqyp8f2zS2df4quCU3TFd8vbkR971wcX4LvLqFGP3ztKmKzM5J1RVjnS9nWkSySMnUrxfc12mnpr6caq",
  "key21": "aaRd4rdHG5y8uP5HMAC98fhuUzwcaucuR4a1vYdYHXDfRuhYQLvMJV4QJkpnw2LkFCE5Z9cNgNSHRdvWEoWoFi2",
  "key22": "3gBqLnavjf7xGDCnpAPg5E9shBUmtnAXCBhHPjasXaKASe9ZqTvNSgn6rcNGMA1jw9aNJjR8fQzWwPgzA91vQ7hJ",
  "key23": "S8FbUL1jjq8GeR6ezwSKKZBXGrQPbDi8VxUQfuR9h993XmPHV6AQA3w4Tgvm7mPDLxGqTKGcj4HyPsipp7vuC9o",
  "key24": "4CWZLsyhwjpMSB59JHvrMtjAvu35ysmaDf8ezeomQ6cHPXViKfexvvWJ9WNKsn6CKWVzqAxNPocwybm2cLdZELC2",
  "key25": "64c4dpDyF7PvkrG9zhniNyw7bBB4uR5jvFkMcqMurGp9h4RqBzeLhDr67Lp5DVT8Ner3d46i3z1n47Aczf6dP3KB",
  "key26": "4AYTV5VD3QQqEDcfi3rQQfcnvTDz3ZqxWLvFSNh93hTTEM9htUxPvooJS7DckAQUrNzURryT1kFcrKs6sDdzBig2",
  "key27": "3eFpiuJAo9ahfFHmtCAJiAQCGPKRwpBJ5yJND4GcDeNHE7SX6yD3ECtyi6NXXQDN9scitqY6xNNHyFWfuzW1xuwc",
  "key28": "2joUiW8ziS8HvL92Y9CsAnrfGNH3sa3hg8CkbmPyPv5xMQUJpZcCtf2Qfk2QPHJZAG8EYs3qFWZ3gFXTwNrDNqgc"
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
