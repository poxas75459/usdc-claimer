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
    "5Sy1ge99sXZVpA3kSRn7MVe95KLXkhaajeue1Rg3GEBp8hYTDPgbLb7WtRJWy5uFCkuRervWp6G39vLNgkCf9QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCLpPXMUUeFxbbiG3ccqG9sBvndJEboZSbiUPQCQ3sqJ3MjoBiaXzbg8fd8pCutBzam9c1zg77omWLubX5UiPs8",
  "key1": "4eLgbUE38Vyxr6hFTbQueWtXQWoUp2d4wQk1inEwyDkPeetvYQKUoCv4MJVyE78AYxJ1HZt83XhVF77rXUBCuKHN",
  "key2": "2pfYaxaiDspyTJoLdPwho7nujyUDJ7oUtTTt53AZSHdcZn9DiH6jtVm8gSNRx8STEMGEM7pqqoLB9ZrgCoD8KU8R",
  "key3": "2sEGRCcDMeB9YqVaajESTP5FQZEqWSoDpV25u5x5FaUSbTwSeNeAgcsK1uLBEi75ED7D1yJ7f5pnJ2CYWyF6jam7",
  "key4": "2nNbisf6JbpKNwk64J7o5T59finmWTw6qmo2Grvs1i3N3mNRNWs43TVfNeG4Jxdny2t2uiJDzripmfd3vqt9ZTNc",
  "key5": "5gzxbDZkGo6Ery2JE94YNDfrkfzUFEGQ2fhAfPmmjJfYabzyQXpCvrG85kuEFej7fZGG5vGyctLeFBmBWUAU4iaL",
  "key6": "4YGmPJm4a5QJifg2xDQcykAthhAr4YCT5WuoV93qNiXZZUNtfKpHczLrB6VXbmb2njVQFLj92b4mkZeiJXmVDfMF",
  "key7": "wckLNB9WWg9pupMVPW9XJjUSjaV5PNPPbHGRH4buM5G5LnCQTjEKrXYNdoZc3vdYzNcXgqadS3hWEPQkZ9PmM7q",
  "key8": "4uGuaTahSirHRK1QojpDPaApTq7JQGjNs8dAnoEBCpKAvhh195EjYUaQdnDqpLzDMGE3KQHaxB3cb7BsrbjJCYw7",
  "key9": "4cBnucBq6yjc9TcZCddACfVbumQpqMNMP1DF1wNXchG95vZ1vSN2gXTiLYvedzMvRtZ29z9tZQcoYTZgS8K4pWj4",
  "key10": "X5acrnPZ1onsZjXnme5jRTPX1Af5mdFrTQcFEtBSCKjJ5cP7cFopdLanG1RnTrw9iGVbBn8faTx8svCmx34wLcw",
  "key11": "67F8YjfBMUG1hSxLW6JDMyGZxoiom2oHiDP9dbr8shGcdUn9RP7TxxUWVgzZwit6pF1XZD1E9KCS28gQ4GAyBtZ9",
  "key12": "63MqcL9JG7o9FUqdhuPZ4E5LBBexg8wiPhT6ifGrC2ovycdptcaUkJeayQqySGkFQ8Q9HKwtejMeVQpEvzP2vw4m",
  "key13": "Gh4LKXGhyjYEC6wJ4VyYLKAebbqai4pnYJQjhYUHrCyPk1YGFihdYPbFocJcfMaDT1H4NFTLa1PBvvo5k7UoaH6",
  "key14": "2JphJDKQ73B6KVpKtAKTyDGCzqqY7mFwmBs98RhKGnQQKwo8VYgZHHF9KDU1wHVuaXcrjYY9zQ8QQYGjjyxzNVYD",
  "key15": "YFZACnKMDFUHCnJkYZazpY6ZMg8dYRu5ErU651wDBdPqnfcXpgiQS7hvNYs7AFoWa5JpCKDsEidd8afTwuY8s1P",
  "key16": "3oh3xhxUHexyajDKf528Ed5PZ4CwYvwNSZyPGe1QBXLdwr9ovnKnRP3YcWrzMRbgViVBLtuPBQXUwADXMdG9PLPD",
  "key17": "4nL5jEiCR1HATnL6t8voG5txRxBVKQWP5DCVdiJf1ozvBLCMvqnXDu6RgM4uuV3vfwLJiJBkDuUCjJ9LK6Wthxax",
  "key18": "2jxTZPDBbUvwC4TxiXzz9CyFDTyohd8bFFiZ1cRmpLksCwuUww1jZzqbmjJKkC8ze2u8yUD2qGvKDjBsiu7DcdAt",
  "key19": "kMPQLCgDVdwjB2rEQH85Yhd8Y3ULQgZiGa4wRWFpDy8XPpmUZUEzCgweenFpMFgatYvtHuKgron8iywSfzQ2eFo",
  "key20": "48tZM1uYGP4ZiJAZXcCKiy8NLuWqz9Ptsw6UiPcUyPhJDARcpsubkXCubs75EEdp5k2N5hQxnvdFdVHLAhjPDJit",
  "key21": "4evTL8nkAYfuoi1eJHCzPBQUeM4jvX5dQMxxP4cZsZpKdTBRf12F79bBmBHEKRk2pjpGChNgZeUdCH5bVdaAa8JX",
  "key22": "5rAonQe5r6hD5aABufTuwRLnuQHQziDeqetWhqT2AV9x5Vc5NPjps2Ykd9jomN49FtK6c1b5vV7Uz4C5zDxBTrmx",
  "key23": "4hRY5PzNWZmiBo856tcbefucAyRAvZaQf9Mhxqg74CFvMeY9u5HZhHMAfYQAnEdWQsmRiCNQeJaqtMDrYyWrenSo",
  "key24": "5c3GEe7CvQ2PbVA3tg9Kjw4RB8rarjJtzQHFeA2fGCG8FiqKxZ78nnFQ7AoVYewLZ8fY7yeYTtzcHLKRb3WPnTyQ",
  "key25": "4fAWZtJ7MChJsLAXVjRT4dvqQcHbySuNuxpqv9eoqMipRpfhH4vq8Qyjh2p6Lk8igUUTrf594jWVD6JtEKkTgNVe",
  "key26": "5QDtprX24mbdLKzAq62AVQ1wYmvQzM4RPc7UcBsjc4hpPG3Y81i2yiFsEy56fgKEspRsrrT59PSiGSAf2pgv7biX",
  "key27": "mzZaxJVPWYipMrvFucX4MGxqkaGx6af1nSwWPvyHcwGsUApZKy8Wzcheb1zSHXUCKzeSjLNxKxz2LvM3K7Y7nCM"
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
