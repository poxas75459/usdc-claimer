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
    "4MfGogP8k9tdf2yQWKE9G4pgXagLUtKs2iTZVLTCi3owG3cFj1NQEeZRJThqFDxTQW6kEECwxXRcKUQMhDTGP4m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B2PjRByE8zkWqSnfTKEPyr8zpHgdiJDThb1MAWjuAot4cs6XVgw4Ln8cde8w1nnTfQ261QipAKbkYP5VAa1oRnk",
  "key1": "3bxdacfoJe9q54Vh39wjCFMihompXmbSY4WK1B2UVm2Qr4oME579PENxTcEYV53HeKmQUrbiC6CQrfEkDhq83yWN",
  "key2": "4RJoBkdHFtt49hXhWtwiGGPugXBA5aANPYkS38hotySP9zEkAGE7X8ZT9iQu2n4V7SX7yQpwU33km8kuUt4xAVBe",
  "key3": "2GkkPK7co7dXFK9dUUkXJD5v7JyFKs2ZTGY4PdHWGdyP22Rhvq5914VBSqaanjAvtk5rjNG4B7coWgy9c3AjC5Po",
  "key4": "4t8GpN44ihwzQDRiV7haNx1c42NHUgHJStTb4f5orm3MNptHsDaiYz9JoNA2HYwMUdrjCxUUCaJ3VLx6RSs5GMLN",
  "key5": "BErvGL1s41z26nDRvaPE2JWJP2C7vwoC2R1XPrJBycXMpWrVpEnLXyr16KmXL8GzvtG9L4fuGfAbpByiJAHcRTm",
  "key6": "2rYQeWVfCWNWBKESw7aZMqhrb6p76frJ99GecQ48MV8VBD1kkSj1PxUpq8wsb3CaJUNex7yaq1cCqjRNB2GBs5cb",
  "key7": "39QEAEhfvRdh7nGUXNmjsAmSYBzoNnnmX9Z31PCaLCAJVkj3ZRQZBz56EYUhXzehopf3x2pMo776ZqyAYcZCugo7",
  "key8": "f9hQU9VmcfMcFTdkpxg6Vxe9g4kgnDYny72JRAKDyXynRHd9UdJ9LBLwnAfNpcwqtPSL599e9MYjP9j49j5ZWNd",
  "key9": "3kowCPeSkgqk8nZJXGKkFauy3iYQrRnX5Je4Di6UUisUKdAaNYuwgTZDBTJnnaFwNie2GzBoeCaHDS8g12JKGRUb",
  "key10": "3f3g5kVZLKSi7v9NiQqFQ6CPihTME8BZ1ZqtSqUPyRvQYg2xignTpyUafHZajN2Nt3gKnEiXoSxyin4s4Hb3eoJx",
  "key11": "3uHaHTCCAd3smt86eBbhAAbNMuwS8BVmbQeyzUTPzmKj49K9KSRzGTjWbqrgsSduhaCtxDzBqYTptiEhDQGMdHt5",
  "key12": "3jAaZesBzoeYibPy86sVP3u1Mro6vkLyKEax9qmGy1fJ9s9fFE66RRQYw5aQFHeT2u5FNFT6XnBryz6zRVuzXVPe",
  "key13": "4PqYTbTCh1zSrkHwrmHKikn1pSrVH2okexsQPsKqs5qQ9ervAxZMrLKiWtUwcwGGLnxu4yDdh6FQjQLZKFX9NyiY",
  "key14": "3sLEkXHtXcWiYtEsKzcmZ7k2xni6LpZZt5ytXzPfbZEuNpp3yYDHRqRJkuW8cNrNqxknyLCcrfaaNFpj4MLx9rg4",
  "key15": "8n79Zgx6bbLEqpg5JqvzGnMufVVpwnxrQbz2MqdxrLkJE1vYTarJjoTJPdhAyBfTtmJeCBuPM29kAZRnuLtRQvX",
  "key16": "2hGfWGqM3ihMxFiQVr1zaTj6MwLpadjMagfxnXc3UfuM62E2JK4SrZtv9rj11q3BjnGsqkysgJKbXuUHMWcwQuLS",
  "key17": "3PuoVY7vppenUKGh72FuBAg8X2df8JjjSq4E3UyT33K2abbUwXjUTiTyE4EUSy8Zjb66pjdg4xnmmbEMqwK1axwy",
  "key18": "3xEXEaN6q9dEwAj3M8HpLj4rEoBQ1PYoxa2BQda2KkacE7igEn8kdstiRxS9gxie1XvekH24ywHr4gNLA3BZZaYU",
  "key19": "2H37ZYMnDxGaReVAPVWfBpTg1vnvAxvp1UHyPAM793PMPxe6G7MkSizw9fknceq9TxZnhdBfMmHJ8nGEAxXyJAQU",
  "key20": "4t8nn9L17mhaM7ddGgCPYwLwksEbmSPqExaHhboAeK45dNut54XYjtt4FckRBT43w1sNSjVj1sRzut8mSgRTZeAG",
  "key21": "62mMmgSkMx9kqDRHpjHBPmbUzUqjep7uCDWai5owxyqGSSd2DG1rBa9S13Q5fTtNBYg3LDdn1Hd78aJepgEpYWt1",
  "key22": "449YcmYPpVPdyaZZbeKzh9MHqN3wr1VwTAaFox49jGQA7oQuwWdBn9mB7MVf8QhtJBZe5Frw1G7TZBujbPLPiEeE",
  "key23": "2WNHuFk1PaZ86KjLNhMezZi5USr4vDzpKcmQpPS3vxgVSHmAMKmMoX4nqQ6jkXWTBFhEmx7q1ZWGmRvKeL8k38mA",
  "key24": "wdZW5woZj3oKqvT7nqe5djT7L7BnrswV1mJChz2nvPJ5KMn6iA6HiUzEabQR46by61eC8Jy1g3HZaY9EGPrQhVe",
  "key25": "5nf6uBnZPGr8znFdtXNJpZ23cZv9BHErty891ogwYVXbnAiJiUBHU54Voy1FmJyhFuWDUFjYTtTUPxTzad9CSagN"
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
