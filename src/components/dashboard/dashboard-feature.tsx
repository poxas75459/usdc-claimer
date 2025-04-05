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
    "2FrNi1N8J31iYxvksVqhYjro1DMTjrUxVFwoxNzMaxMQYFoprmy3vSJbQumxU4QXxbPqcwitqzt6apykKuKwrvA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDopMmpQ2Zjbk7hmWxN1VoFAhfnpt5Ki2xrE6veTd8WEX3vr4bxLuGA857zTKGjKpv3fdWiJhAcfo2NyDwjeAD6",
  "key1": "2ZaP8VUCrH1ZqWbkA5eqt6emCsRmxGdrHujqFfoA2m3aqVgCa4MU6tEjFDukrhWfkuKkr17pANnHjpE1izzvpFNt",
  "key2": "H2m9W4WvXH1veczKKZ449hbBYCengbjgYwCAyqaUCxvGnzfgkqoVPjFD4GfwXZtGjJFrrW622cr73bcBJzafY7D",
  "key3": "3caxZ8o2iQ3pY9ZVh8N3GibyZeGkPt9hYuxysV7myy5DSDKED8QyoB5Xzpqc6H9YhmmDyZGx9kYVmKzW4WwbWqG9",
  "key4": "5djqRwmoxPj2ndTrRwfoRcbAfsc2229dnbVLEZc69J41e5QwavWwH6zVHndna6mr5b8uuWescMDJiTpm4thYQeDm",
  "key5": "5tfwLzzTbbr94EZU79QgW7HQArXAtuV1hEyYuBjz9CY77dLzXFYDyw4DiYotWNF44HXJVEnpFcBaJrhwS7Gu74Su",
  "key6": "5HCBAG7XZH7GkgAd9B96UaA92Du4kc1fcimqcgXqihnZhWLW1Lm9UDRgngARVaJv13zyeAvYNw3epbMZhaEKD1Lg",
  "key7": "3rQUMrrrguRsaSX8gsdeHFx8vhqpp3cjEMVuviDa3gGFsUtrZebzngH15KMeAbFsGpZwhDWwWzx8fqg4V33Zvzoq",
  "key8": "4z8vvYbgbFwanUYKatyLqEeA8zqdcDxfk9FNwCDwwo9aQdRonQtdAqNftP9D85d4sD6KBkdPUkVhtKFv8YCT8Ub",
  "key9": "4H8eTDaNfKnLUL1UXx7ZckYn1xHkUNyk3fhqk7u49aF17M9Jp8YGWj5aznGVSsFwt1cCvgHmm1RbVY3iRm2tTvrq",
  "key10": "4bVkd7bFYnPk4zRKGSBy6sBndZYHtG1Dsb2TYj6vwojKJWdrgD7UXJvo5rcc6yDDYZQFPD8HG5DQnqRQzXv8XWbH",
  "key11": "2Ffns7CyVy3ijJejRNCajQFQC7hu1ioyoWde9Mrm78JatVDhEiE7pV7JQbgW7wqdqoThGJ7sPrAvLoiALNYs6jrF",
  "key12": "63CTjRUciU8Xkt6oGY6THCduFkCrLs4rgCovN981i4dkju5HwjGtuSZZTPN5SS6Kem44Gp6BzCEun8Fgp4X5KJYD",
  "key13": "wfMq4mECSXcaXyAn6HkFZ7gj88m89RiQykdbeLErhFhN3KaKpJoHTAMvgfxVCUUNGskzZvTwWcruquuHHzokjKK",
  "key14": "1tsRpnbmjWX1H8aENM3ExcabzdrD7AFLPSt9E7ZPBgvVUejjUDoyVrjU2Hz3GokqZiQxQ7qXNDwE4DwYQeQHksG",
  "key15": "43aKPfGjvDTESkiv7LNCSBso1CaqJDDXS3yZrPYmiGcpUivmbNfr3Ew1GwPXaixWqob7aBgXTpTfegSXGT5v3AzJ",
  "key16": "3cYLWQHZoSrh5o1Q1h9zDSmymRkseRSWNr4FhYEC5SDy43RstCd5jVXUFQaiW1FHGNzYA1319verNDk2b8GwMoNc",
  "key17": "fMdR9iRiWni4ctBZd41rhBN1DLMHjXbqaYUctp5cjdG34J3yTLcq3joM1xp1dhqHMgx2KyvKwgyq5mujSiphnzm",
  "key18": "619FdoZDTyhaTrowpFDJz8Jj1dNY7Cd8cFdGJkU51EDWezuwjQ7hRSaZJkTtFQUzydEaYmYufBXEBod6NXeP4tMa",
  "key19": "3WhF3XCboKZmMVoyUnD5Thk5xSaRTui7qCkN4WBVy1m1LUjoZJTRYQs7DmGbf2vN7rAbfaaZZ1Gd1yRQ24dU1NkS",
  "key20": "4tKdZ9CTWuvGgFKs3yPSdf2guMuxuQMY3S4ggcsqx4xoeMqAMiJufqe9Kw8CwnSzNRQMdDzfwRDRfaRBfgNdyJaK",
  "key21": "sEzq8BFNkrgZYAnabe7i2ZozVfyUj2kn7E2DjbYGVok7fG2djq8G2u4unmh9t5vzBEurXQRg8J52ZMxGWXfJetz",
  "key22": "3HEm1CTHvUxFdb3FxnysVkcLftwNdoeZcTSPYdPqggz58KordhST4Wpj8Q1mFMKaMhtoNsMdcpyAmmXiq8hnTbXz",
  "key23": "3QZJMtMwS6fEWRKdZ4zdtdc18WkoKR7VJSERvrTSc8j59Fhng7xMCY2hz2qetrmFupyepkvnoC8GHd25j258ZGxM",
  "key24": "xaoXFLfv2gTXA8SF9vCRg9h4SKkiiK1uiSKuHhop1UaRjkg3jeEbQdzYJeytJEkzDvMFou8j2N93FiTkm4Cbbdx",
  "key25": "46Zq7YcBmuCYZaACSQNQ6FuBTdDFM91A22L2JBBYD2cJg4EyY4xv74uMNypzdZzNTyRjxHSQjVGdPZsuW8MUi16Y",
  "key26": "3B8uEbx9xiRSzXLLg5PFgBNBVNcmujRdFs8ZHQAMotPnE5D4nin12GobW4wXiXdf37Dt43Zf6RXD5HZ276oVUaah",
  "key27": "4QsxCHD8tDLBK2BkvArT28gCwqXMt7Xx99fAy6vLnPddADb6Mt9K5ch7kkbmUuy3gFdRqudojzA1yMgqFSAR8k6W",
  "key28": "5UQxpFdsuPYd7uWR6GQAztBCaSMbP7pfAf37tTJ9RqBXgeLveB7AnhEn8fxNvByYVXzcUxeenfsqBDo73vmiYsbD",
  "key29": "Zm3DcJLLSHfYi2gGEsUYpGnVRXpxczhWqb45xydcpzZM24BkHcY9FieTokb9xX94RGavLySEM6aJUeh3oFJQrWK",
  "key30": "2SuaQwEoDmWTC1iZSrTKsbKnwXgPifjX6cXCtMziq4HAKGgZcgayd6boAmq5XpgAqvoy3agb8U6H5272Cw9yPgLS",
  "key31": "38EUergakfANz4hQzN8D7vXzViM11arhoHHBXK68RHXmZGfxCd8UyFomYHdQ6u9jbYf2Ads3Z2BfETaBvrXRtfKq",
  "key32": "2SAjAtfJd7YUrytudrYw79tvafVqdVKy1FLik22GCgKjNYb4ixgohWxcdRS5vMhZxu5wTAxnfn5DoQd2Uy85GtG5",
  "key33": "5YAUugf71e9YKkmNTHFHw9UZNdGbrS7VVPS35DZvJxGYDbMBA4NN7D4ttL7BeL8f9LwYd1R61QngKmiZeBcHd2C",
  "key34": "62ijYeMVVW4bwwAv6hVdjR1r2g7Z6g4s9GrZC3PVrV2DMriYJQmCRKJshgBqYK3NE7DviUsMYzMeEJ9QXMVA7jQi",
  "key35": "4qggEFbZjJBhFsUucc2HKZnxHbkxSX99g4mttv2Q67ZPcz8KNjeiBQbj3XbBiSrJHc2yCpjscUcfXCuM8NgnTmtT",
  "key36": "AcwbeCkhaDLpX4DvRK8hdLg1zBxgJwdyKn77utaYzHamb3FHcdvy8EXXKPbC2YTiUUQdsesDjsszBfpwAY4mtxH",
  "key37": "3cdfqE2ysGoD3zxiPa9E2yTs2Qigzz6GWE39r2VZ1Xsuboap4TuY3URAkGMKF4UStSNatCZbguthA9kQjLtyDkYm",
  "key38": "5yB5a1Aenfa4XuZezxqXURFNU9bRgh1Gs1YEv4p49cFZx69KwrRcPtYtKHH1ADYk9askwYbKzcUDEaJ1BLNB8Ahp",
  "key39": "4e8XoKEjbDNgKSP8oo8zTxzJTibWfZbdJezVw2oqhUdvQGfeVfwMvETUrRUAXv697AuoGdYjUcv4cYSiFbbRADfz",
  "key40": "3FD5Yzr7Br3rcoNsdTp2sugzwU17mPgHdTqE9Fz7WJ4HoRPnV4aZCMprVgvtipjrBKwjR9jVScxFqU86CC5Q1REh",
  "key41": "4Rv2yznK5qJUvZQcm9AYZugmM3FWRxpVZcmQ2w8RwvDzSmLELoAxoi6NDbF9xJ1Z6eumTiMFPueb3wqDvp4U8SEw",
  "key42": "fPn8x4fVRYhBzkSphxirfMkktpjKpKwAi7HjUbdKi3y9nakis1EmmSis9k1mvuftvFkCTva1zoeRGdDE4va4VDX",
  "key43": "3XPNnPigtAmgxtAWJoeQ3Ddq5onaPEHoTpcHcyR8MQaSpRutXHKuq2nMB3pcdc3hAgrsRFtsvkLef9wjvYxy9uwB",
  "key44": "j4DXW6MCbQ7nTX3oM9VaZqwiDiXvPYmJJ5kXWLCBn44qg8CNKcD7sF4EbDVUzHejd35n9jjFYaUVo48V1Z2GrZP"
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
