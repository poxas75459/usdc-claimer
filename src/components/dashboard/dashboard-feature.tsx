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
    "qzRWfY15rZR6LUB69SdKDF2aSvj7FxJyDUDcjxTAZfcYXuYCwNpBS18JPEWZGG6H5YEkTjW42CkNisCzZt7HQ9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7fQpDi7DqySK13PnD5A4apDPeuLYUQ7Yg16JaNaufr1JGkHe2o9bNifNg2s4CPrzmJ1bzWrqLLhu4Pz6UnRFSt",
  "key1": "2FAEG3H8frXGAms8kEsA1Xd3i9fca3gETpgiF5SKivaCGa9StUhZhxpPB6oe4kWZEP9NKiT36XTJ4nFhQu9gF4xW",
  "key2": "5thYvXivJb6untKjzgACtnVMYgYwGMPzRNr3ewmrsH5d2snogH9vxifj11dJiTiPAyHnGaquvmrLdPdE737poxYB",
  "key3": "XaqopeV8nGruC8YKSuWwGaQhnicQWNzpxMKFsWeuv7TicE8rf5ygKaTSTHLoEUoddYM4BK5LwWjHQ1GnTb3ebEa",
  "key4": "4SGzs4LNthfgWmtpPJZoHqC7kwD9XYBwKo5dQ8dDYrJT4Mb6d4UkFzDZHbB2WtDGWutufAKc3xc3m3NLSPHVtUFq",
  "key5": "5AEyq4aufZheGjWkMxNkfVo6nNXbHn2s2DonQjyBgoLPA5WaEryQD43jjvYok4QjJS9CmTwCxgpmDufH9tNbTddC",
  "key6": "4PCwQtZZfr4iAgkWGueXcvvSuXAKRyvpkdbJbP3PNqY4ge5UWUdAMU9nyuEFemnGpiDssnPhccXdjU2AQJ3gPc7i",
  "key7": "HG1heTXcS8NwPuB8pEC1XjZ943kMNJ1R7wNGvqcmjHaH8eCrZM5rBHjXDUpbDyEyGGBTe3ge8B5E9pS77ZCynAG",
  "key8": "5sTffyqomjYx9XZbh6t3YHkAHLf89cSydnkAGZ5Sq1yj29gHL9usChSBYHTyG9AbJq8yfP8K2R8njSjmBu9ADSYM",
  "key9": "8SaYzzN1wDauBVszrGH4rg2AQxQbVyEzshbQSvFfahu8JNhzva96kKseuq7i7bwo8VbYXpv4JmFWoS4fUwLf4iW",
  "key10": "46FBhKJYSC1mf6wUxonGnT5aEFBM1FF7LbvWt8RSBBbfNdR8yobiGp4LidTWv5weUcp9mafTZt6ypixyskL9y1Hb",
  "key11": "HLFaLSrUpsQq8ai29T18biTFYqHULhXGcEiAZhCnDk7jCT9UiachBsPapR7Ysve7heqP2ArEnBxwyu6MzRu92dG",
  "key12": "1XmY21vty1bwzpDFuRnKvT7Q5XGrRTFNFEFDFfWNeesaLwTQ62St7pG8puYU6mk6caNyAqUH9AFQx7rdNqEQ3C2",
  "key13": "4xST4e8vkxWALmQMfGqsUADBY19eKVyQz1TNJ5Mt7uC8TScZUAgxxAkfQzo1sN8cN2h5uZMhMopLLK9SKRcx3KE9",
  "key14": "4RiPEvfQoCHwRWxpVcFWZCFfgaVNVXy1Yvsv23ywRn3dD4khaGinpBNLa3imjoENbCrDnA8i72FMi6woASoAxA2x",
  "key15": "3odcP52SmbVQF2zPCAFXNrXCFsKQER4UtJQedjjCAwHZaGugqPChAwyiY2Go262XrEGxgGCFGm1GmspKFQBZurmu",
  "key16": "4aXPmGY8RScvXMhFpaqGUS6Ht6hat1giwsRCjHaXdsJ4eB8nBSujCpsYceRdJehGMdMujNEaXSw9Q1icsDPwWnLc",
  "key17": "4vhDU6RYJW4sdru498fteKqKzTtkExeXCAy5vahVxubnUCRup2U69PPKoG8Ee3h3MnMZhZ86aQ7tLzgcxGLWtoNe",
  "key18": "5ShDKcDTgR5nEMfR64Hd43zzgboyzsF9pcqyw3sfyxycBm3Ddfy2YDeC3n46mT7tFPJQ35rPeQLFgsxCFouNDw8g",
  "key19": "34AKthLuoXP9GaPADirFREXK4Ujn2ugkqrEidGoXfHwvoqK7igGxWfaA6zaPYvzgTbRiNSYWcsBJGweikfRYsnwc",
  "key20": "7z9bwRG4rfzETDe5JHueze2ibxUNr6zrqZh1Z4qjvUyVjZaVG36Xna5ngJzs3DkWGY7yEhJ7v4jKimNPDoKaG55",
  "key21": "5S8etDzaNLizMJXPud4sHBzeChEiybirCrikXHcazZhdoknkMX5bN1mCjt9BakBB3LdwzVkjhW6eByQRPSYrFge8",
  "key22": "cgCsV8aUgfrFdC6Br2AhPwsyC5bjdg56zpmL2YQNioWzYFkWQDtah5j8ei79WExrCvMCBChMy6WbwfhrGZZffnq",
  "key23": "2Sfgp48H5DECspUuW2Tro2jUR5ERUkKjAXFim82fTLGSgbhaboAzHQeSCkn1stFapwdHFJdNaSAgaA4sM6UcfkhA",
  "key24": "buBjS7gb8JoRP5TQkT5ET5k1EcD6qDL1cPBxuzT5pswffmygfAc64XvrKrJh6qieRtDyVQFN6nWJjkAjUz4b6yw",
  "key25": "4dUKoGg69x4jKdgYneCogmZFT8sXU48Yu4qz4FbKwKiZA4LwoJPjnaYxdAdTWoDkXHwF5oit1Z6Ez2tFDDxcSmTg",
  "key26": "4o1uFNpPNcV2kpHYWmVkRVVRxkY3W93VdU9HTV9DM7Xhx8w6xZhYHz5DLCiiDNvhduS6TXpRzRwSFc2366aYy9aC",
  "key27": "5jcC2Exw6fe7M1UViifacSMMDA4QvBH1Rn6sQ37K6artB3MULXTaGeUn2XodZ9pmwq74tymN79tgiARTSxDmk3oZ"
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
