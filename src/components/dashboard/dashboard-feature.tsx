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
    "4fJXVLDF1m4AaU5mSwexRAJTgGAiwijdVdeyjJFZTcT4ReQAwneEoHJA41RV7j5bWvnvczX7u3ZJSMjGDubg9WfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADdGxLtm2W5HsBx8jxUVX6RxWBphbVbqxU26Ezv652Dpn3PA7mT7oYfS28bBwAa83ktGszKM4sMtzVmBXcEy7Ms",
  "key1": "2xuTAb6aND4kJDjpfnjtnVbjSSVioQM7TwxBjz56xAonXtFTcmbD2xjUNZnfd2jPmWSQTbX2drRZnPikWU4b6Zub",
  "key2": "5WPn17JAwBKcZ3kLtjUr9V9YV9nDQ8PikxRsjgNVMHzLc8LeGVr8jyRVvsqGTbpZiuLUnenQ7jez9PzQTJS6xbjd",
  "key3": "2w9attzfVwr8xC1o7j9dLLHisrR6NsvCtFauMfypEL7E6BHKpf8EqRrZHpvyqx93tzKLBkycg3gHeqVea1WmuUHx",
  "key4": "3Pf5EmQ9z4twzLXriUiBd2S2VG7MXzsKePCu9JAKTK6yQQ9EYVG8dTrcfv4JYQifA8Lx4eoHJYTkrHo9ZnQDpckZ",
  "key5": "5biXnvJQRAmQGFyFoQYUJApq4aa1yW473SHRBmgo1Q6BxDFPRML5Ma1HSj5Smz9A2pR9u2q5JnEvtg3nGCXaWJD3",
  "key6": "PLbLy46FXP3vXPwHLTw4k7ehUapUAT2Cmv9bzYjagAKkWxJ4eVCPWpsPKteZnYU48SZDRbQFdmSSCsSt6Dct1oG",
  "key7": "2PskjaM3DVPe1DABhok8fgddbApTV4dMKQhs2PCWFb5gCCviiZhvv5oiEB1UdTdRo9q7hg92c5TsmLJs21sM7TDB",
  "key8": "2sXzisoN6vUzSF4iBxKopHRPPNYMJ9ZXawniupxJZEeG7hPcjJTTN7YVTopRPLN1EJFKfxr4ao4NMtTP1ox4WMMQ",
  "key9": "QmuCgEvtN6ThLuW9NjryCZrRo7HQfJBMu6Rg9P4LWqA4qq1kfa7S2axFFm3cFY8YJts8rNAauzQUw5qVG5tobXk",
  "key10": "2sRRZmtBwWgW6g5YwipmF5fHJerfM1H4pJnwe1Z6fNCwUGU97itcQby96bhFGZuP8tJ7eHNrKf6jNTM5JiLroske",
  "key11": "5AgYxS3DqSLmGKnNniekzjk4oCnJvfjhFM2bmgBncaLkEDBZWRAUkGEtftVzKbC9SYRQtriWMvy4bQLAAQ29oXmR",
  "key12": "5EGCh3RW7Q7KWda4aCMfoB8DaV9BT4LePm9hgs1oxhuetvuVF46ZHmSh1tbYNbArtE4oQXwEuy7tCXdWDFZYENht",
  "key13": "4iasJygDtp5S12F4UdeYcnJ2wc6kxKY5wmdkQYBbbSpqxCcdEph9KK7NZTuRGytaMnC88aBGTK84jZkCMst6wAxd",
  "key14": "4zMdUex9puYHP7CcjEnSusPp5JYqqCp1yDybkf5W3vWFptiN9cFgaDUR6fVio83skAVW1P1qhyYxEphjfaYiDEHf",
  "key15": "4y9g7Be66exoM4AH9hFTPfDRgbGo5x9HrHsksNp4if7Tr4bmuY9X6ixX17BYhzAmcBwyxj5cPw5d5vU73iNH8zv9",
  "key16": "3qCTCVzsFkf22WPB8oQ3HqFaKb6Vhp7K3oLAiZpVMenyNP2xWnfQ3khghs5QNth3FvdUz2JrQMPHGFojQ8G4BQnx",
  "key17": "3uCQRxgt5pLhtcDDLtG9S5C8U8K3kzscznPEwno2QhtovEDGJ2WesaYotkimrYQtzFQk5wBJEjGUHH8gcuUV23Xb",
  "key18": "4v5kfjmZ6PoVyC1Rf9ZonpqhyWxEw3e6E44csk214SguS5oEfQxchGgcSDZGg3wvT1Tadf4tB1zbb4mZyQ5T7RvQ",
  "key19": "25SyUMdNVYVYekappfePnnxrfiaBkt56jsMkeAcZvcd6ykWPehnbNu8HejRG6uKKCyAYMiuXU13JWt6b6utXzwzK",
  "key20": "2WRPG2a3rV2VoK6vixd9hzSpdYuA5KhXD4ip1qGNXHNNLktFzwRmeev4wvL2hx4uTuomcxWVtQxHfKiwmx1DAVVs",
  "key21": "2jGiGQcGjgFCHy4AzWZiv5614TFS44uSC1tUHmkdB8e8vpjbBPzvw2w3qQfFP6wn8qsrzuqHcmRzzgVfW46ffJkz",
  "key22": "2HPkUCBBDKd2Babodv2kdQ7W4yAj7SegWzoP9pMX5xRZSQ7sRpchsfFGYTjbNw97mf5UcgxZrmU8WZYbvBAcjHCb",
  "key23": "4jJuMhQvuCS8P72fdYuu8QYv9d6jwcstxRHFqaWh4YHzieDY3CWvxm7nHVFEhgFqDBs3V56GHEiYn3pvCJWU91bA",
  "key24": "KtovhS68x3qtdWFHihfrVqazFGv4fuHyQznyTtLDhdnG4miM2kXqucUsrF48evqHzDrWbs7in4Lw5vvfhFtGdAc",
  "key25": "cYKg1ttTLCMAeUnvP5fc5mnHWbQtcQsQ63GhnbWXs2F1ioYH9pG3HUDXpRtNyG9SLhVT5wpchzvFWc6xT47mBGK",
  "key26": "2YapXqmGCf9YBvnKfQyxDbeRLqYP5uzMgUF5dkX2KJjHnPH49Z1yRE22XLYbDvg1HojteRnxw4Xfhw5N7hmUBuG3",
  "key27": "4sQ2cARFGtfQQoows1aAFKxjc8ELveW137PxHVVzr3qb8mH4VBPFxCNF6PhHad6kxwdUp9uPmxE2rNkjwhrgz2em",
  "key28": "2ZRZsHjEDfSoCJXiyUEiE8qcjCZV6iJeS1X3ZQjJ9Y3irEQppZN6u17S51K4yikZu6soU1xPb9DzGfyn14ETNhnz",
  "key29": "4rxJTXHGU3q92D7647poJVkNWKVYnripGQRwtNPcaRjKyxb7QdSp9uYi1749uAgMc8gwNu9cEkfRkyWqpQtzCW9P"
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
