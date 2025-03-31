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
    "2Gqr5wAimMyfmNJaT6ZY8XZT4bpUNnRyj89c1Gc5AsENWWBEJrA4ffRN9VeFeM418uS55qaCUBXws6BJdKWozLbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39FM6qA29iqTfEyDuPsLMPrxgZVT2qF8S13wQGN8WSnUWaXAzj36Z5Xrovydz887W24pWDyE6NpLphi5fbPwvd6M",
  "key1": "2SFhuqDewFjehJNQYwEX6FYWUjtrszTtbK5DBmVaNK8ao5pMuUMA3sf3FMecWaaSyLA9f86rbqMEJjbSdofantp5",
  "key2": "4eTnrZPxKHWoVgTCYHqrJ1rhbk5gnq9xpmiLphEaeMRkSRoDUnWBpQVkJq6mznHN9JCfnswNcdUpemgKSDfKnw9i",
  "key3": "3QNDG3X4SR9ptSPZRSorWTWEURvF8deAKaTfkGyARKxn93PbmZ5iBjCTGhTGfHqCtuEVsfvTWvkbkGpzNxw7vT5w",
  "key4": "ZiRQBpJRLfyqKxu1YGh9q47zdq4FTHE5pnxef3QgUaj3WwgNiRE25nuh6GAZoezJqo3C7FqAkn8fE6sn3a4VSo4",
  "key5": "fFXogGcFHkQx7EcT42Ftfut9ermhtHJr8QdJxTYJp2mhbaLGe7Sv6bQQS5FVtKr6cUVC3suAgFVC36hLw29CE2A",
  "key6": "4MuYkJUFuaqDC2e9dgGMtRwAK6nhYVHxqBVj6Hg5x9uzaLweA989gEawCqe6vPJwmPZSh3FfejocPtGbBKVpLg5X",
  "key7": "21uQdvWcStNNRxxWNTT2ZtRH4iRbLZ2CEpq1b67TeoqLmnMb7WqbEs5Y7feH4tRoBiXb2UmEhrcsP31FQaQWUfT9",
  "key8": "4wcVBx54nbeMGxxdSMRXDyTpZHizDHqsPPTksvHnnEqjAowKy2wSPwDiFDDUPF1r8L576AQcRNh4rzodPtGLDwDn",
  "key9": "3ACjPtCVuAmdUTEDeHjU7UpVKCp9fPXD5Hr7GRwtfmc5UuVGyCt3EgQPwRqaGNxTMhcCr3JD6X5gbGKggiG8dCcb",
  "key10": "3SCGeVgP9o4BpzqCutsEECnvJaP9cvsJ35ehYBvURPyxyQC18MBmjv2h8ttHq92h7Tsi9r2vWeAgkZTTKn5CZ2mi",
  "key11": "3NwP1mW3Cvo3rc7Y8iGxyqCPjfqtyepTZxqni7yLPtGUaFuCi5m5fxUDBqyHhs58gaxXwPWaMQjtw5S8k15jyS32",
  "key12": "ESE2W8t4HSPACqWXPv5JqXhM4d1nc26G1zPceXKQ2umhunJVLx28p8XBy8xNdqmcJN5nomhyBNXyCCKk2Cm5kcK",
  "key13": "2nzUy51XaCbuSMasdDQ6eyHKQZ5Gooi1xKN53WMTBtmMVczhxxbEXktgzqYwfj78JukZb3oeXa8HPtk79tKA18mE",
  "key14": "2zXS6kwogQm3BCy31ibyzuuzCDg1GF5H1t6ogCorDa2mwDwPebaQ6orj75vjatD6M9NnP8jKCAZvQKjUpKXSY95i",
  "key15": "5FvwEyz4sAVRWEnpntsoD2f4VyxTRkrscy5GDCfDnLkQXBrJK2QyrLqmknf5XGNhuKZGamESiDUMEJLHXECWP2Yo",
  "key16": "125QmGpPyxzNwp1rn9UT8JVwKVjocccSrA1H7Jj2sMxyqjwkkN1AcykgJM5MRY5au1TgPVJk5Xk8W9qahuXwcm3o",
  "key17": "eVQdDiCGYmu9wDHRfBiXPLvNqc81yZK3x1B147DxHMsLsS3LdCMsKPpNNPnbEauwHVZ9CwpKbBZms8Hs5Ejnumf",
  "key18": "2ffiW2dFpiYotkxGg4bmh6pSELZ8g2gaY8UtFzP7xozpYc4efo3j66rw8gR6QhzB7g6FKjBw6hKAzARJrV4WJ41H",
  "key19": "4kJv8cNzvo2reGJy4jvytPsF6GqY6mj5JELeuyLerP3vYj9gqqRAERquG9EmHXXC7t2ZqDrXZLyNc5M5MnWibQir",
  "key20": "2zU6iL2JN25tqUoTcefCWYUX58Rz48qtKwj2hhvCt3oEnCFiZG39HpAQaWbQJiMiaiJLzkC1D3R73dZzPfwMnacv",
  "key21": "4JNVMb6wZih9RvU5tBNLFkCxxyfc21XhbStUECeumkrmSn7VrEEg9UWBqhLXp3NvkNmW6aiy4H6WYGmuf5eRUY95",
  "key22": "iqynNpbQoWWnHceFrphVgEFgpvGrCYmVrTRJfkNMyDvRMo9Y3vRz9NvHH28gLtf16uRxPmAcrVAkJNGLw9amJo8",
  "key23": "3Y3YYyqBMrfD8Qf5sD5diwvJQuZ9imwA16Ezs7cMzeFeYSsXNYwm8gf1c4GJdCXEYmL4zviconKn66aNaRiEYbzm",
  "key24": "2j5nRQKgXWj2XNwarAkDxQnnPiC1MT6NLjLzM3CyxaHaiMVD4sCH8pu2g4vbRZx5nmcVKQXnL7qqUozVdUpkBpgu",
  "key25": "43PHxihjKgk7GNENPCLMoXoaJgZLDumDta4qURQNaJx1mXLkUmdzEmz76yc9aH3KecJj1svRdcpo7mVvUPq74W73"
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
