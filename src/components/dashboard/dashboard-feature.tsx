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
    "ntpvkRDrB2GrDtaENKZs9J8pfhjKT8Vcfx7qW6tn9pzy7aEkFSBToTg3TXkhP9bmZNRZxqGnZYyzJaMQmMCEX3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxgocuRzbzLuBYjwWC7TxLJAotTjH3T8Wkgdzozk12AioARjZTTsbRJHgfP6BwqdzPZxVLsk27RiYtCZinQsKrK",
  "key1": "3Xnj8uYmVibF66X4oCaJ3DJrQa7BsmdKqFFN4h2XdkVqS7EHJvmAqMxbntDPmoiGdrJCmQqEzcJag75fPzFKwhj3",
  "key2": "5yVdu6z5rPBM5UbWyGp8TJ9SbuMfFhL5YGbcMvNi5181bgu2kvVQtWhD8Aqu2FHCMsho15cSV2gFDp5cak8GYsyG",
  "key3": "J73oGpTbQ445VpVLfnc1zuL44WLQC3uZND2CBAFgtH49UmzBjekt6y2RpysbB3Kwqh6Rss26wacNKFiPqotX5cU",
  "key4": "4beebThw8qc3R1yt85uWE26KYcPhrpFsRbvKxDTfVs56C1cg1i4h1ioSvxtQvTvnNW9UjH1Mw59xC9Ujk2tuGocR",
  "key5": "4x6JxMM8zcFrqvqmw18XhrcFYHKtt2NSfpPCkv9HzDnUfippWeZvqQsSzD9XKgCAmxkzdFTFd1vyjtmuX3zP4v2U",
  "key6": "fwrowtYn8rPyHwtr5PxXPtHX9PdwcAkFrauscYwQQnEmTr5GmuSpSA9L7jbDrMHwyfEtD27arin9JnpTf2oTx89",
  "key7": "2vVY6WnP7rvLGto1XDAt3e9ApHjNxZsfea49tSCeECtTxUaXUtWBFwF3RUwKJNqNxq7DNutyp8uiZ4rEAC3jZ6nn",
  "key8": "4unAA9YPuXxkPSv2J2Nj1ZH1rqpMRNjnjvBrqEDfGXWQVQRXUodfqAD2qeNKfgiQddfS7zebo6DGS2assqCwZT2W",
  "key9": "5uqCR3fwjXQnL756RyF4LPntLkJunag8dHGXEQ7yTrVeNCzs9YGEo2AH34Wi4sgVQXz7AaVZTUr5AHh6z4jXmSmD",
  "key10": "3VLGeqTJpgfNuJBNRthpoyYsf7pux1R7kL47ivprmTJutmxetg75DZ9E3rfQWSL4GFmA3tKuPGKVsTgq3qkraW8g",
  "key11": "5yPy1Y9gPJ8SHQ38DoBGz5qLY9aANbRU1b9vvxA95QF4RY2M4Cx4HwvuRSHtKhfkfLYhHCWyEcriJgkQG1gKENLS",
  "key12": "TgSvEwrFFxj2BUPFQpRccrQpBmyWaE3t9bZjDQStFHNry652nkA9p8Y87gbs6a6E1bAmQpmRmkFcFs2Un6fwhUQ",
  "key13": "5FnNXcGjCrPFCfq2VKbr19oNNe8MzkUJPpp8Xux9aRHZ1YoMrS2hH5qACHz3dgBQWd1xGiBjRkemTgCYxY8eaijn",
  "key14": "4H1BWpi62RagTbn9Dw2tzQFXWHYNKXrnx9zLfxcL1sW3KcSGPiXquiHoehi7WUzW3woBeH7J4B48Z1bHm4aBe7Ge",
  "key15": "6ThTPKJi3DUHr6zZ1zTfnr1MLAfwkHAHbhKa8YNwY34cJp1kpaknU39ai28GchCqWu3nk1C6LjzUQXy7ZMteZ9q",
  "key16": "46ftEbTBqEBMK445kaZFpFVCZCjDCfdE2WmsCnoTVXTthMVazpVgJgd3rtB5x7kDL9sPY3JjyxsPKZJ15TSjZAH6",
  "key17": "3RcZrh8J3z4Rg6bPHeEwRTQyKH7bvubTNsvjZGB6uQ4jK7tUNzVWrVF3GxTJ8E1R7gtGiL5Cz5W9Lgdi574SqYsA",
  "key18": "254cSfCcut9Kzbk7bwGfFSw3a9LJav7bW9e1LXDSyvUDQQjwtbDRsGkQauFnDSYPE9X6KU7vJb3FXuDzYdkq1bab",
  "key19": "5sgvfnG6NAbSDUhW8wgG3EAaQfEJrwDkNY9snmrG6ck27PiMqmmxgjCZo3wxz4yZen1vuHiKnZ9qeXYKgU84QiwQ",
  "key20": "4Ay9wEgfmbo12tmNXPUB7syAb1ZetqCQHCCaZVQNEZxPxCsvP2kW65PeFqUK59jZx1HUw6562KJ8M39kbiDSY6BA",
  "key21": "5JTregcAWVwiGLEnPjsXrrGxh5vABL97htFQ3zGsgzJ8QqxgdZdGS7FdoxDcHzJVB7bvP9gE2dXE8i3LVCuxdJjb",
  "key22": "2xVBFW3F3HgqGC6F1hwgrVSwjaoq2KswW447nQTH9WyFWKuLYkJoMf13xW3rKYniUSyEQKTtq2aMEuVeEri4UziD",
  "key23": "52G2zQaWLE89rJDUCsZwtB7jg43CdPgCmBCycHYpKGb752AfAtNRc6LoBbWUG4zdkcwb2QtQopxkDiL9Y8rb3CS8",
  "key24": "5amK9UVVZxf7LSwvLMJ1KZQ22vSgu5fXVLjya8nXevD85osR7rKcm93rWW5mAiqUdoMTrFJvtmkJrJK8KLztsuAe",
  "key25": "yTDqLtkEWh7AoSDe5YWkovraRijmAgDHvsPfddAJx4VZTseBEfpSb8eFKfcHKsoqko49NS3DHaTy5hrSgk3HfHN",
  "key26": "5gEMLQ4nf9G5vFuATnTKTmi7qwrjKJd8QSPtf3g4tx9kVDDxAB1A8XpS4WfM6WgEfiVaQ8a1RbgQDfrbDh2iwbSx",
  "key27": "3SFvh1UpFuX58KLfDhnJuFV3NfW9xVUZqrvxZQFU9P5nan7ATHxPbVGvr8vYMduCdbTwV1GY41yC4Gz5d1pGDix1",
  "key28": "topQtFrBorp4uLy49sxj3ApJMrhM5LD6vwSBDMwgLQ66JWYHAgXoYiGuBLjWkL6dzRDHmL5XDN2WWmwokhEjvcZ",
  "key29": "3DpRH2LRbXQ25H8wv8unQw5XUGGXVvYo22rABHEajTEYiQMtZCcUZoWpHumnn4NAA4XsNeUpTejeVYumCf8sa9W1",
  "key30": "5dFE7iTYuFLFZe6wr8cZPNXeW8bSqfV6Y8qwxhUQDf1TSS64KQ5wuQ2sSGHxprJV8ZJJBraujnb2e9hGE8Urup7r",
  "key31": "3V6DT6ntcxzCsu7MC2FGhhJ4NsPeFWGveF8LBBQJF5d1REd24n9Xv4LgodYZDCEusU8qcHroTVKZiJ8iQdse7NZo",
  "key32": "5bVZvx1rkNyD14Hib3cmJwJxJygYCvea2yVZcAtBQfSLEE1w9kgY5J8b1FKWjFS7htUZqWSo7yVAT2Sef7XzUSas",
  "key33": "5Qy794i7qSzeGjQZqUENbSkxmDhPuAFvVttcbVb2CrUMz6CqBqRagcSLBpBJ6BfRxtrtE34Z8wWYkXypawet6eno",
  "key34": "J9U1KXXtoaJv1EemdfSR8u4EdDeJr5fgAUWBkLixSkE7c8zNS6zFBD3fnLp7ZMS6a1pAVAd4CkK2wdiytWqmava",
  "key35": "4nDE1cERAXUQyLnAe9kv3qVizMpjD2eZWjiUYd3HmpARbHHWQzfayAtTCjTY2oxGVAyqYu6aH8iPcbi9pugY7iNF",
  "key36": "BdSdSa68ffAddeXLERVG7XXosD8wMqpf7wZasA1gTgyrpBkZKjR4fLxavLppaH1MX16Dj7t2uiu8UvDsLrffbP6",
  "key37": "4pYNFUEU4MKtR2LysUdLJkbhTQi33GNNWxweofyYtxo6TxottC6Hr8Acy12yBJgjinGbuahCLgLdCSi9iNiqKXkr",
  "key38": "3B3YtBDpepXUwLiDv6EB8iYCZyAcm4xidaAss1t3CsG9EcGy8L6N6tZBiubJCfgiNjLrV1QMytp5wUWpReDzJmzJ",
  "key39": "4NNke3ARCkmtFt3Wnfdir1MJJPzf73pZh5KKJQgfFWz2H8k5h3VtTCGako5BEnjazqoSicphsU9T5kfRaavUzF6H",
  "key40": "56gFA6KA9iUaBaPuwjaVCFyV1csk2ubJhhtV487dWQwjAnbM9dBRPKJLYXfMvJANpAkGLckkKd5pcvFZ5YBd3zCg",
  "key41": "53EY79TwRvxyqv7LakdCxEydCAwGuK98M1UPUtH4n4nGJrSxz7k9RbnGHtzLUV2UF8G411jQKipsX9b5hwiFsJqD",
  "key42": "2NPavN7jyx8PVmLrTc8Wgp171zCbVf6adZqsTBBEAAPRYHTfthjaUKywd38G91nCPa8M5biqBmsmbApY22Xfe28C",
  "key43": "3i1GKJ9jq7GAEK2VcK8zGM9rzCfBPNUKpQKddjfgwcqgtLnuwprU393Kkn12Ay7VKKA72CjtpZ9Qvbmw3JJRNF1e"
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
