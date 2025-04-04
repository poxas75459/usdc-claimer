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
    "4ztzaRhTkHjRGgAC9y1kk5cB7GR69QBWJ29ynqbFP5sh38KH7QvB7Q5TdRYyTQ79oaWeos12HSjEKLEKi5supX19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kptev53J1ymykU5hTbusPrtFQq5ecmVt6GYZB2w2hzvKAWrhsxkEY8tRtpGPCKREmAnrTcyBRVqsZTDzF7q42CJ",
  "key1": "3NGqNd8c98gPLaj33MYTd3Tj8iDheLF8RyrUFstMGJ8yVTcGYWqW5rpy8Ln3yE7EZ9LkbuJM7vemGey4wrWav1pF",
  "key2": "3LeugU7ESJ6cMKXkVH2F7Dc3TBzomZEMfxkNd3GxnJy8NTRX77wCeU8wWy7Ed6GaT5tvGbDtUYtuLmMWYHCHgNjQ",
  "key3": "gnK2rBs4CUmWRz5Z1dvVfmBhVJpBouTKuvRUfQsYtarJr3Y8RP1Cpifm64erF4KK3n5vQ2mFbd4gBi9XbLt41T5",
  "key4": "4Qb1aC9MZKZZo2eBbiAkQygyaFCCHNZUzApP9aRiXamsFaGxo7DPFEfW3xhpFbgER7S7Mrn1WuvsnfE2LMektTkR",
  "key5": "4GsweAHPK6ncJJwwzCU9KMDAi8NVv5AvbSq51cErFYTSSZvkKhCyzw4fg5uvhmsaef49ZHpJ7BBWvEZDGQ9NN7Ur",
  "key6": "4NBsqE4BBC5dpoaeitiBoB5AkhPbbh5kDZVuVJVFexpXbrjKnCWYSaLHz9MqsMSvgdBrQbopmyRSf5WphkxEFwL8",
  "key7": "5J1veG5LaZdAquX96D7RypzP4bBr8zwNtGdguCwGw6g7iz17FwfpLCMs2Rdej4h4QwWsMpRgNZ94Y1324MteGuB9",
  "key8": "33WbhJmPiTPF6o5udoavxyTnmrqzazvbPvZYCTWNrYnDZCRoXsJMXhz38wzXdyBZhk7Lc2AtgD4PhchxDVxjTbEs",
  "key9": "TANahBHz6FM7stY82TuofuzrXXXJW31XzS5w1zNZAqpU88TXohuQpXtC3rKJHL3iruSUhGE4PHXxjUFJ95hQzDY",
  "key10": "4RV5QfBu1qCZbCXrqJtywq1BsY6TR9LcKfb67kpfGUFjFkqh74qsjKMjVv7ukbrWWxf86Hu6wNcX3vUQnc2SLsJK",
  "key11": "35HHNtgQ3mEWHzw79aMGSV1AM2nE5Jf9yMCkUF8HdMqJGBHvYLzskyG6ripWzGncKiYuZdk4Fx7cM6hqq3ACU7ww",
  "key12": "2pA3SriZ3tBJu3mgZDUboATwtCQG3pEaZr1yFmrRxEZXzsTr3Gwzvxaqzu2M4E67sEzxwUBHBFuJhF4hcvQfiAAj",
  "key13": "3EmGugxmCDm4UhR4rBdLo7SXk38ZBtBFDcXq8YyWWRvV6X8XB4UxvYH3zyjLiPCde1giH5jiiftxh2KVbK7wCuRG",
  "key14": "623GE99bkyhYBUr6aKizkZogGz3QK8EkcuK7oiBKY1uzU96DzhsasjxFPHf12Rtp1izYCFZePQPsZ1vkyfBtmqJj",
  "key15": "293V42da9ZGGJKsM5fH2PsN9fRz4Pbb8pDhZCZiFNJJAYuCZTuwCNeGWH2ACFVUh81SmdoWeDZPFD2zCRYpEhcRg",
  "key16": "5x9SVqpWpwHWJMAqGDbGmGb7xWxomTV4JJiopTes84QsWmpfizaRvrD2JJdARj87DorcHuFAT5ekkVAXNJRagytQ",
  "key17": "UU1Kk2Lucs1WTy6cEvJ9Zc7ieScQuwvwBT71BZHZWBmZ6JLmDzE9rJkvo3zAiTZKnWWiyg89GfGsUddXXqxL2Jn",
  "key18": "4m9h6fnxrhTiyhTWZTCfqowcacaM9KtZCd5r9pNiJgJJH9hXerTZQAFXBX7FDvV3xUav6RXYwhZki5bbfoaq2AmY",
  "key19": "5Z4rXvv1HB7p67nosP9pwrbvDjYhcKwm5XhXDYAR6dURwU2ZFRAEoqhjuJZd8ah18XJ99Bn4h1qUYNZZzm4vYeAL",
  "key20": "2GcAQ9cwAvHXZzLpMVHFpewqK42FMkWt62rT5Te4dCTAQ8ArxQd6gN3GgiNpgt8WZDQMW51gpm39oJPG1TJc6Lv2",
  "key21": "2BR3HA88h7t9keUhCzTiBvrzBq2SnJMYZnuYeyU35rh6oTVoDhEJQMacFPiiNnoE9pFzQ5AiAjtvTYqJ15pnpPex",
  "key22": "2jgSysd2p7rKZb44UuEnmcRDzMbidUYiuwsgq9otd2vN6xekptwhedQbYoPawN8coH1RhEYAgYqRzqa1rWTsK1ft",
  "key23": "5AEq25TxgcGE5RxrChNfWw7HZAPvc7R4pBTy9gUFWXnoweF9aR5kXqKqkkaTSP4p4LkCtbyAYitB9sj38oY7QJR",
  "key24": "ckbcSAB4qpTE8G3aE9g5bLdT8CPqkabVTKxioWSgYdhDUEVBNYWqvvzedWKQb8TRbQTNoqz19JpatdYf9nXL7p4",
  "key25": "5wS4epjNXvVsL6k97g1KiCdnmQTfx5pvyoQFsX1jPbu2qTFQSzWAu3jYEwC8k2hUM3bLcjNnEtfEj3GLDdYsVvzA",
  "key26": "ovBGtQG5iqXW6hNVsUdTPqbkRA5y5XGXNH4E9Sk5HC5RUjnSLhr2RKNrhCh18pdGjdnE88NWd6kshNj1UkBsNQA",
  "key27": "pGWztesWYZMmszFrd8zq6qaPtognmBow7bSoKhE8MS4ezbp71Wdhx4mVfUt3Ta9wJ4y73GpwevbBcbkfE2mu5qd",
  "key28": "5eXiiQsTZBksKauZ2LeeWfixeoBmKhTQfoBVaSQ7vHQvcwYzxskgukssjJcFVB3yuYGHQwSo8E4CX3h97uZEiYdo",
  "key29": "3fPUwBmvFedyamAnXJtfo4k1Z4fb9qGHyYv7uLfGcgHUYvcs4a7oSdGndhYwQTU8562kGBXefSxJAbR6not617Sz",
  "key30": "kQYVTucf1mV9dDMuWkyzbmMshgAnD9uhQP62NP6a4qFofh52PBWU71jzBoD9uHc72mcX7zX6wKwbg5bdZYVopo6",
  "key31": "43sx6cn3t3fv5G2RAiw5b9LwJu1PCHZknRZozfNCJ82NCNPgupGbqxmVgnmyUv5oaQwabT3SUuRgKFKUzqwvo2eF",
  "key32": "5UaaDaYbmW4LZqCzLUfVwH9BpYcqvkTttUeBjrXpu5tk2gTVCauWrTBpctDEfyEszoQ7UMTXBwTsm6J4Y9jUkx9q",
  "key33": "5Utz2H9ajUoVEgchck9GVk3rZCMFoF4EjjG9TNJmBu5aGi9pZRah8RRZwNLyvCx2CqsFUBiM7D927AcqtbMb1RAk",
  "key34": "5qWXvGfcFpyV76EVVyNgLWa5rqvnfHCzVEXkVSCMY4ge5ij82cYLyyCnr7nSz2axpjvtspwHYfHHxtNMNk6zJA95",
  "key35": "2DF41NDoszvJdfaYKXVPWRuYFNwx4E1EWggPsC8mgoTSFfpvTifcnnp98V6SiDYRdotzG7hKABXBEpTuD5F344bP",
  "key36": "2kwcAcGzkq2H6hRPEy5r9j9MrEUNsmFNyoCsEirens78MYguMhicNMj1mjw2d2m1udirhM4N1kVPjnmQK6WPJrxr",
  "key37": "4qktrsJBzXhBHXp8eDUJV3RJDBDLtA3aogUg7tokxgnXvnpgMFu3ewE5TcqGyn37ELk9kMwqSHW1CXKn6cPN24pE",
  "key38": "5SHv9A9aPt4KzVacBadgHBngsUEzy2nyPap3ugcfPWwqVZjFee2syY9RHKK5T7tsp5vsJNt3rVvJS3CyG9vtMCoU",
  "key39": "329jCkNAee45G7FUdy1YWbuEEUDKcUqwYS8FowB5sV1PdCihH59mYyN5db2tLVhmcCnisrUTC47aA2yKoiWKdeJu",
  "key40": "2qLr48xgqkKE88Htiza7ionG1ohjcV6sZf4UMcrqdsQu9QSnBahJakZpanGMFoTmv2LSUjRX9BTrGRCFPwm62EQ9",
  "key41": "4Q1r8FzAmAo9Rct8XXBh7kzh7XPVKY3F65AQfvdeHNgUcBa2Nq9FEMAPqsgpxqkJzFSVkX5DuTTQjoGxgKfbAqLn",
  "key42": "2E5Gnqjx3HwrLhc9eKyTAhybnXmt1oMKyvEJY3g7aMYRaN1iR6nZKJU7xDv2ytC2MYB3Ysqzn15ap6MouNKSFHXT",
  "key43": "3RVqN7zkmESUy6XCU7P59Js8DimVghd9kuRLGRTBFfrsuk9ZMj64hEkuXKoRBymFFqjC6GkuYZmRfoyt4XpQckHf"
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
