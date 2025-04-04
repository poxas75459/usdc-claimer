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
    "LNiS1zN2JxMbQ5TxXptYiQFf1jT9krinyrA91tLgCTsomS4j26VzGtKLk2G3NF1CWcS4uqCuaV8GdJCup4Pjiwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhZwhJ3LoCCnceTDTyoafsKThiEz1qQJTctmqAsf1hHGHvBPviDvbSSCUfeDUhz1mERQFHyx5XmoEPLidt4Gp3N",
  "key1": "2cgtuhCpGevB4wuMKxwEBiXpFPUFTHoiWLHp6LTFdhdvQJ2uotrdov4MYhfqmJzP1JVEjZjfHcEmrZtxgzPPHY1F",
  "key2": "JUER8b24ny7rjV14PHvUUGKRUMrx8Re318Wq5VwpZuH9Ym6qT6VUxCmjDYtakKzq3NSN4RfnJ3EnmZSBv7PJaTL",
  "key3": "3A8XVJuNRC9dJvpvJruB6HqnrsDWSisP7Xqpa4VoAznqkdePPDrscKnRTL7fyuDSiBpJKvkZTEub2KWnbLWZ4JZo",
  "key4": "4sgp8TACvUA9guHAmfu5PHZHrrwYy7sayh6Z1ZQA91ocd4SP2p6b83y68pnhqJ4ELwkjFjDbNrucKVoRbzMFLdfn",
  "key5": "4YBjj2srVh5KWLRTfcL4icZqx25k7Cu1zf1x36BQsWVQLEgW71k5GQF4EvZLp4ysL3jNctdKY9Hv3vRhqsmVPN72",
  "key6": "t3RZHwk3q8wMrJ4QmcyYpQ3Jx7Q1GTgTKZXmmkrwZLDTvrux6y1yi5JjQ6zh6JfpCyVRPcZCYQnrnZbH6VAjXtN",
  "key7": "2uTcMhbFbBNagTHtu4sKwENJvsCatyWjM7MqBRy4acEjtSVHMd1aVL4r9zKsZNFej1PQzF4FKm1Pgb3Wksu1uRCN",
  "key8": "4vMRKe9DGXmUYJCHdemefze7b6vM4Xk61dMKfAgXK3iB1PekLtiL8iqNcpcrTjq4vzkrBWQZ1owv7R6k6L1sqrnr",
  "key9": "5uDb5b9MWn7EADMrYwsXmDtmBmjmGU6AfFBFxZajJGKeTSh8as3T7Jqv9f6GWBSPbZ5vmLA1hBPuphhHpLMCtDno",
  "key10": "2d9YH8ep4FvApaJ6o9A2XhhepaVjrgTWQuAAQijnYus4nN49ifwZmDKoDt5fiTbQL5wg7pH7Lse2n8o7a7E9amqM",
  "key11": "3LAmVfZw9E9KEqi61s35WQ4QhCKG6Ps89hRdR2Q9TAnMgWMChTyRFnegFrigxw4e2zT2sW5sUGyRjzZLwzMdK7A9",
  "key12": "4tdNrNUkW9vBrBs2WabkjEZFmKzR8axFYt17S7CR3TwxhaFkqjtSt3bxwoRph9YkKhKejLrqo9M36hwcK9gZdGdF",
  "key13": "MJHpHHhLzVKPsLDnJgySmrcSamnjQiXNXThBdBZM3cMfbYai5WQntJqDiuQAKTkEv8XVUwV5EjkgnTjBjyKVhzu",
  "key14": "3wiLcGaxuoFLotDosSNgyXpD6NeS2pdBZdTYBWUaYjQgcvLR6DEWHc6oBcrwetMwJDC6BhxG37hjGgEUDQjhy5g9",
  "key15": "2k8AAA4z8RjzPUCs74NEiExfF7yZ5sz84tGHkwFM49WcHSNsi6AsaX74xi2NvSSiGb37hZ8MEQxQHnzMgQmA1y3P",
  "key16": "4JWQdxoRpUxGuYE414ahrJrNm96o32Qwf7ehukVf81cxtQ2vM9Knz5562yC3PE8YAVxVZEBq2Zrq3fkf6MKfZxQo",
  "key17": "3y4efXuA8gmsMPGUTgsgBe8rfgVaVMjRVnDpaLkuGkatqK5YM6ZofmqpmN3afEJkfiuyLSobLY8pBC2wBZZPLRiD",
  "key18": "5si6MuCbEM6FntLavUzoaGLw4H2RnGTtjZLk9FGMRJXuMW5dya3NgCdrLtH3EQnrKuo8Hiy3i9vasuEZmdQpSF3Y",
  "key19": "5Fdum9QzTxRYBWSAVv88yddFL9RMmT5LPDgujdmLF8pbyqcQrBfCpYvpgcdhRuqjRst5xWPCFRThZ6ie2oAjSbQx",
  "key20": "55ggdRmBkCEjUfFu3BepZDJWoay6ua1pgdTP57YSAo9X2r5CtmRUqMiBjc5cT3mLwqmFYi2avkLz9Xq6zUAGdQR",
  "key21": "GyNVAPjmQBKF589DngafTx7TfY5f3eU1BiuGTo9tysVgfXsfn84odvszcZxWcgGNzBNMTQ5z8CPbSuaWa7XUGK1",
  "key22": "49maeKT16GLvkMBFd2sh6g7ryHw8GhTiEVX4X4auphrhMqH6kuzSCiaY8Yd2LEue4reHVtEgKUg7SLRPKC2uxxri",
  "key23": "2sXpKC1v23qsMxZ9qqyrovDV2M54yGE7DmSrTepUmTYGt4WYRYhC1CQ9txaao6qwx1xvHjkCf1ZF2g9Zgc97jdqA",
  "key24": "MdqgagsmBxQwgkwSjurUjLKqY2wCJ1JxtBkfzwsuyQUBeRUbik92VrS6Fdno5MfHMTKe6ZXjQtnj14Z47zD96ed",
  "key25": "2aG7C4NwTwkCXieFeqivB227o9f7eMMuyjgqxMiCuFQyaS4KncMBG8gsrfdLRJSxD8Fohg3Tg3LpBLKfnYCbU2Mt",
  "key26": "2q3iUDemDk68yuhggM57MxizBJMdqLo48vE1qwUyAXKdijisGw9ZjR9vsiP6virynD7NSwpnaJU2oKeWRMGHcpa4",
  "key27": "Tsxo6zMu2VZ4dpQo4HM3xj1n8QceygX2UNpmWLRA4GwXYygVkXnrq6Dp8wVqCBiGAiTQ8mHuBXJJ8fKTiVpJhD4",
  "key28": "3yYhnqPgs3JmN62htTuFr1CjrbS27po4gsZEzBYgczrXV1dVsgcMPptQSoXrqQDF5eQ8TMpuHRWemBMAPd5x2QK",
  "key29": "3ZxzAiQgNxqFfDGcNe6drqETnRwt1jxbVUVMDhJ1Z5Hri5QuKgXH2cjEsDm3GP2h79yL4uHDa6374jdN6Lr3LR36",
  "key30": "5WAStKM2McDbGSFKxXLgWdwRc768mWhH8ZfETQxbrpJ943tykj3zqfv1cXbqaBH1653cy2TomWXF1Sbg58BXB1mV",
  "key31": "4dyDyS6KqiWxbaTG9R2WWrr7aSxzxMJ8a6ZLfLgNogtWvd6L3XzPBhRu61PoN1pTEfGqPL3GRAy6UBUFYFcokQME",
  "key32": "3K2m3ADH8vxYvD5qNxewJCpjdgYqoEGLLhV5G4CMnAvRfLh1WZza2vN4d1ajVuRCek5FYthyv2EVLuKHjkfkdcLL",
  "key33": "3uYh4nFAWk3VR6GLDyJRmJgRNVq8QApTqNcbVUZacuPCMRJo226Rwmy25nwePXRofmT7VBxU4yA3JevVifUQ8x2w",
  "key34": "4dwJE39AFwc5opkwbNrnqXTD6BTf9Kv9BvFVNiZfL3aUTahWF4qyQvxGaeX42cuEctAtTjAFKN2eVoUfiyMu6kja",
  "key35": "35QDGj3ukxGfNwfdKD5SLtd7QrZJ15HDzXLYQoaX5fL1NpRNZc2GtD7pRUvXCvCa7GDzaeoXVACQr2jH4atg6Wu9",
  "key36": "2FSdVy6D4x2NZkownY2wTvi3tAAE43JRs7f8qenN2FcNQyi66R5oSH6FufhHz1vnRTkioWmyeH2zU6PjpQnzbydG",
  "key37": "fCstP7Sa9XjKyfRb5e9MRKMJ2LeVEhq5eWaSmfx8RrHHbrah2bdDjgSoor2fuZWubHcXhdt4vQitFWY3hfYABLP",
  "key38": "4wvSbX13DAqNkNSuTzgC71G2vmakyuMjQeMyi8ESoRqybzyu8Du3XzEi3QsAShZH65MYzfkdoPoxJwukGZTDhd73",
  "key39": "27c4AgQxWPrxu9ZgKbGDdsAZNXnPguYgmfWW2tTzWudKreXegYczdNuTEvRiiPLkTH1iNQCghh3phuHyPSyQeCvS",
  "key40": "1JYBAmTAe7NggR53GWu7BC7kwvbV1h2zjc2LF1WsCWQ3BkMCKqoGFG8eVFk8KomctyMtmK6Rz1sYdKGExDmSszu",
  "key41": "5M9HQRZwugiKVZKHtDUmr5hr7Gnct9wZMDRff4WnUpxoiJeHz5av6ypChPxiDkSFi6oKaw7WDXRnJc1iei76H7Tu",
  "key42": "etcWmAexgvWzsnMDpWNG96i8GvfxzF5ucJFKaav6rz9K7vmxN99p978Bin2F8dTuDw9fG4tL67aNsGSNSNwVmUH",
  "key43": "35c2wh4bRmgKT5LmByCZpC8JKRU9g3N8xiuVa9gLmn9FakYiMCf38oKU6v3XDDMy64XCNykKavC9vTpCjp8UMcjk",
  "key44": "5pVzXk9FXV9gUaVRsuGFpULLN3LVbs4hKVFdmjXGvb4wZdYFyPfDGPSUSCCgtiSTeq3VnPXcX9DeKjUz9cisnTtp",
  "key45": "5n3n91QQfZJeWVwKKHJYNsprj5tE9YMbrtsA9fLDcGYXtcauxeNvY7NPgRcUPPXaCAffJ5aHqCMn3XwkfjVb7kH1",
  "key46": "4azMzLVDuSCA1AbbQvyZVSdbbv4WHnMrJPZkSXhW85t9k473ermN6HKwFcBceXeLv9kAJqwq2sMArJB8RRBV8GWL",
  "key47": "52YP3AbTJoHkJR1TsPChUkiXTLSW3oNyuTXLGMBh72C6YNVr62yWWSgqZtGKGzpjgiwz1ACfxL4ZSKbWtsbR3uUY",
  "key48": "2Eg62ssw5huLMg7j2WbG6iMuydZq6f4ucAEJvDeDuMydo8Ns8wBMrdYCm11HPx6qN7ugL7DnwnUirVaPCWMH774t"
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
