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
    "5TGaRW6oyeHaWU1Hw7sNx4KGBMMw2rJPvYEPA3TLod2BP7rjLAEqQSx7oskVFZ4ParQuK1yxqyx7bHwqQtQXB4TU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rB3rCcEaTq5HEbLEekAaxZs29KkoJDvuAQVYDQXM1ifFPZMidRzLDeifCAgvpqRuHp8nnZZCJMzazrD5JxsjH4x",
  "key1": "3231dUC7wPWFVxYHgPL7X3XUHcMf7M7KRm6BFFqMtARjvjDpd5fAopMTCWBmAcDWzzDg3JeR9REx5ukXgWK6gWXH",
  "key2": "3RqQCFkDF16vtSHWH44PgiztkgeuodHuUpMr8REWWzZisRimcPewQ9P8qDoNBrCT34y1E95854kgrUikMaMjHrfS",
  "key3": "3WbEm7N8WgYaamemPb7NSECP9BhaJM1TMf5osEG6RvkKUTfrnnyXJJ5NMFuAUqu3MjvMuZuAs7kwtuWXB1MA1F2P",
  "key4": "58tJoP3nUSKhrnbQ6v3twGJCgabshMDtYykbHD25CDBafZnptTXLWJhAc1598y16iitRNkEzxne27GdAvH6oheD5",
  "key5": "4mJBZsP49W6AA4MJRLV837m6NZ2C6hFz3Gou7prEvPA2ci95umTChUeCyf2ZzMp3M8FVNUwrGwKSMmGEAkCFJhbK",
  "key6": "4yg6xhi9xiw7bxSBW7uh52XQW2RuVwiNKcfjqCBBTPHnFRK9CsgL5F53c6y6CvbEHX1Tr4nTkxZgtU63EJRKEx6d",
  "key7": "3oXfV6hc5mjMs2J8v2fWyTAt2gqFmXwKJBAaNXd8o4kTctVyraDJxKVgdJKpejramj9kXDDYtrt6eMTDzFFHgR2q",
  "key8": "66R49aqsynwK5NT2MRwKnqz2K9AJjpVqyoJMMsTmshvZHkwVpcaDBgC59tv9Ue61ziNG9qAVZSxv8Z8ebvP3k2de",
  "key9": "4T728yDVzAWUMX7LrE44Axvk6iHQaWFJzRzCGaUeTrX4PLC3gaGXGR1BfUkM4LeKk6br86YxRdY7gyPWgH6RTMaE",
  "key10": "3B5UecnQvAXrbHBz53DCc5LnKXiXkvqjsQ3SEjkm7euiqb2ondVyixY3uGq36GcAaVcsCX8dvR4FvpHurRrzyg46",
  "key11": "4XH7rNRoivycMFHYm5iMfyoa9BA3APGNiARE7XYh1JNP9RQei7yRfVMnomQe7jZZAP93QzU7oDEa8vLc79tivhLJ",
  "key12": "3NiQeMGrDxYp1UKye3KTPbAiDAWLSZyWt7TafVUNjpuSX28PYYSJTuhgwje8frBRn94pNLE78j1LbAjuHdZsHHng",
  "key13": "4zUP5HNbVhKmzeKaBEDPvEPeWpacUbCrPyYranjyMjNrcVsAF3pXdJ6PpnNGuvKvbfEWQQ7JPSn1EnDSHhoyJLxr",
  "key14": "ep6adc9TKnsGJtuDmGD4dmUsjvDQSrKZ7paYSr6Kt9N4t6BnFvjK8KsiMgNef85Ay2gDX8Nx38v2R6h9oQfUAt1",
  "key15": "fg9dLoTuScS6Zq9p23QNRmm4ypuKaBnKGtmdfLwsAAotJfNZBeVYMgwUEZ8LpeJ9mmTCpFCFnc1NPxpu7pTbw6f",
  "key16": "59cCsn5HYzafrmuD4jNJ4Zvugoz38Gg4ha63EB9jkzg6RzbVT5bavFQKE378HUnSzfKp5rGooUB25kDHRAKnnG4q",
  "key17": "4hFnkG7az5y7dio9zG4nYpxRBgDrZfZzqrzmhbWWZbMBDyfm34C5GmgNvLQKN5D3GoTtSs2B9Dvz4zREaX25zT3a",
  "key18": "2KhgcwoCo5s2yHRWSynj6ZALVCs2zG4tG6BdW6XrKrmdQs2SA4m5DH6ntmaokAMCfUekFSk4cR5hJ5QmXjViAC4p",
  "key19": "5DtseHZouq5bSHQF17RHbfLCMFSLkz5Kv9tZKFcE66wt4iiP4VjDnVaKWnkK66PJJB64A5pw3G4yJBHJ6YYCT8i",
  "key20": "2JG1WDmyF3eWX9YWehN3P3pY6s5trQLWk7W6vkWCtmG93o1yNi53MNH8mBZWU8JwBB2EuvNZa1WWaJW9yEHnzcRT",
  "key21": "5D3qSqSFot6NXASvFVtSx228fyPdywgnH8mdzKYniAggM1YmfbUVzco6hdp7itMVHpXoPwBAStS8DizMt4CL6ZVp",
  "key22": "36wTfn8sPn1L4RcRkAAvPTCNGH3UMUYhzqJ44Gj4TVW2DuEZktjjJki9cKjxcepAUoj94e9Khq6ZVzkHpiCHorV4",
  "key23": "2awfrtJWJ8wvADeUqmdF9p2ASm7qcmgYDayGeiCDiM2XXEzEmzeMjVHbzQeLghVbvV2mBAQ9PemWCmVZVorxhL2K",
  "key24": "4gaAgGosuWc3AsNQ9rBrxQKnHzKtRbcFvchD5womsXRgTTaBWoTqK8VFnJKJ5pFvPJvGtB37P6jo9UJ4EAD7CcnD",
  "key25": "4SNpqsoKA4Q3UakZ6cJDUyfJ6GYp8H5DnUkX9BMJdhb33bihmmGm5btKRwHCio6a3x9gV6khaxaMHio1JBAhpz6m",
  "key26": "4UaQmeJuN54wwyFs4L68ZgvgHqBSFQahnw9pjadBsZc32JSQuXuKxyQQtA8bfH2ERPPzWxppNJNrha6HrcfA4q3k",
  "key27": "nCGhQ2D92qPS3pkrHYZ9WzKitaU5JcihBw4ayoxD64xbWMdQ4SX2MCHBQbsMwuL88SbnKUNydp6u1uJpgiYKGDm",
  "key28": "3LTEpn4Ff88ZzKPsgQ4QFXcmEF7FDG22fCYg14WuaEePMWZRiYmtuFaBFs2nFovokdjGKArygogJy8QEnybXdFkd",
  "key29": "4GPdmPZBXVGdjpQhrKWYJ5RR7NRMGZki7DHBZVfadE8QHUhfX46XLEQYqxvFuR1Ho5BhpTwL8ZFqAn1G7qnDKCTi",
  "key30": "poNG7D4EbhUZbkWD1tjXcHSaerCEo4ds2Mz67vcyaKtfkf4pbTJ5f3ZKJWPb8zCz9rWDjXS4PRRWgz2wQcL9DvL",
  "key31": "45i3tR5QEbGPGkeDiyhXWkmscSUfG4u4J4Wdy9gbvxD9PgRDp5X1yQ74UbedUNts1ej9BZmzXzJFhtuy18yA7Euh",
  "key32": "4XnG4rNb95TstcQ1dYmZrHdD2nFY4SbYfAXHzAJf26pkKU1nkFyC6K1BQDPVcVfE84tEieqGZoBydoLsabkH4b6E",
  "key33": "5FK78EtBxqPoDmpUuowpXZBym68ijoU99xHi5HBXqWSPwz2qmejVWbVFZGtUMWmSHnXcDbQU2SUrvyySp2npy9ka",
  "key34": "2pa8cp9jkrLJegCmz6deaAu9hVdcQgGhfA8ytbQ3LWHTKWZQVKiSW3xnvsR4GNkm6p4KcVJYcsvtbqbiHaEPKnT",
  "key35": "uzDwKC86bVZN6WhpXGGS7H5thTHrtcbS66aXVevjAwQ9WKF4wJ9x4uiF9byqSwAHqi7eP9pzUrMEY7f8HbL7uhf",
  "key36": "GGSRxtUSNPKAfP71bsdGpxmcqAuqkD96QHxTcUDHF98t53oCt98JVURqReWUQiiHKvsVR7W3J5izPXCm9FX9Yz8",
  "key37": "35R5G778c2vJD2RbVkn2qhndo545Scf8wFhhwtedLj66aD75e67Hg7eNudmdjhehnSiswz5FkbqgxhVXE32qHhRD",
  "key38": "6JWbte9eUz5k4S3xmiFBJ4cTnLSWq91VFrbrn4oQftjX5QAgvdb6M64H8onUVEfL5YBngsvervdWb9rGG34B1LG",
  "key39": "67dJ13UMUT9Tzek1DU1MgMGF3yHf4TPgS61TvQiup6jNNTXtKaFFqwtq36DDi3BeVALJJK8Xcp6PeTWEZu5hobcP",
  "key40": "3hLjHcGqYSWpsJ2rWK4J3XTDEY1wXLZvfrickFf1n8smnvCJGjcDPKqcNwSEYu91bVdh1n4jYsCzNbZbTadL9d4U",
  "key41": "1JRLumS9FbquG9EFUKJi7rjS1V5fzdToH5uJDKc26E7dcxgjh1sRNgtjwmRZ2PdWVjcfzJKzPrqHXhbPrT9TzP4"
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
