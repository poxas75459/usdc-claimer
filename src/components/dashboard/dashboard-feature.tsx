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
    "2jbo4RtAzWuudQaaCSpkcD93msYFW8vJUTyBXYhjJKPgJxtrG8fhnnN4dR7tHc8oJwrZSBR5fG6krobdYxixeNus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSaTTbZKN33No95rcSpXXPTR8tRmyAKjkh88jwi7NRWWQFcKv7KXJCTBN7M1B44uKcwaV7AA32GAFh5fpxKrjup",
  "key1": "2MNH34nXDd1SfNpxnG4nSsU8L665UTnf2G7JRXydAAjUESxSgGQue2sDtGsxxCW5gMcdG4ZZZKLoBZFDya9wW5SH",
  "key2": "2Ba47dSz2Qr2FvgR6y1CR74uzDYhfvC1t9UjRufySTCjqmS6LwHgwd7V8BNFWHe7Wo1TA1TQtme1VdMJU52riyYB",
  "key3": "65VGvvmVhP93jPMMPhmz95rayH2Jjn6B2jkYrFE3xdW6TkWDYVx32C8efE2KM4fuHEVcFT8pKJfLcdapr6LHL76H",
  "key4": "2o1RvdHuQW2tKMzXevswnr8JiAt9ipJACzJ3TZWZXf6FT1kpEew16iYEHYaJxdCo2zhQAg1NBhiqjyo4eXeaw5kJ",
  "key5": "2JcmmDo3qG4R2CHyuwxB96mVwhbFVktJkKBLvVfYUJnCmicYRkTy2Dhc6aVM5NzkLTLWY9Y8VvX7krFCp7fHo9Fc",
  "key6": "5MVauakhjA7mszFcTTnhwxS9XShgZ5PZNYR6M6nB27MJfSnP9GjKtq5AN3nKTwHUHDe1jriLLbB2De83hocEKUVR",
  "key7": "yamfVtifnaUEUgjW5rNUZjbLEkuomrbMxWufEBRqKb6MR6zkVvHQjnn3K2i28zgficATeg4VjhLFptFHoXEcxzP",
  "key8": "45GXC99ju4gaNFXq5ko1UUy81M714JkZgrbPCXrNAjgcYt3FKAE3Htt6QftaJwaz7L7ETp2m8LjXXAK2CbgmQSLw",
  "key9": "4QKNAEtNvq4QMAftSCUwoX6ZcGXfbmHaLSuQZXLGH7eCmCt4JWNhPwKrvkykn6A9ARWnro2UKtnzruMXHfa1ZHpC",
  "key10": "3LruKDUd3nyqY47khr816D7uyHN14digT6VARYPNx2mp2xmrHJkGJQiLAchB4xiRZCfhuQReksYRxXuxqV4p7RXR",
  "key11": "5HppiHBdwV8wwYir4T5kHF8aJsZcq1e5tEPMDGV95Hfam1hfhoVnP5bcDjR9UABZMx71C8aZnwhUCkXqwj6Wq3Yu",
  "key12": "2zvdQTprbjno7gJCrPmzGqHAcRhYhXW9e7sWhJJwXTWoSVcwRTk1FZytPM47n7nH9zhQH6oBCnFzSiNRsgw5mSUn",
  "key13": "26YwfyxffLHwJ8qXjFa3HdPNWDmaBPKcozUx1bvkf4887nMnESnzseRL5DazdkjLtmPgyzGKTPzwRJzeyhPJZD9n",
  "key14": "4V3x4YXo4JYW2sNxyXNRkQ9cmsS98zUgnYs819TtHyXGtT4RDN6NGt3jmsZ8SP2SFMeGXrfnRt2MrJXSnsjSZpMZ",
  "key15": "3FmZNMNd2jNseus3RqPVkNSzA7DGG5D2Arwvx4bMytEn9nA6ZnxA9bGLbcQw13vDizW7hBPz7xA8qUz6JyVtyhpd",
  "key16": "5JTQD6Vo7VcRrGea4AqDEfYBa3S3j1ubnRZUfWeVrYYYc1ZGrCbruFjQZdoiEbjQG73nPzbtocfgccS1yBwXkzZ6",
  "key17": "66j5LVNVt7bQi5Loppi6GkP8BQa5QKHYtgDWKfvyCrSsi51xqgV6ucnhkS4M3xKfRNT9WN2UjvoYMFimKZ3Moqzx",
  "key18": "45gXHzLhjgDgnouPWENGdHPBcwXfPPMJcwWWWZpeEAE6uJFbgdSyMR3phopcNcnGRfxUuUvuK5Q2n5prwxhZHj5p",
  "key19": "38i9ciyiQqZT1gupaa3a8mYtJfaERdseUDaXuVMXsZv8dt17CHex7aqMw2ukPpju7Zi6L9wcT1s44ExUnjCVmDif",
  "key20": "4mv6zRk18i1ghbWjY8sYNwXiVsD33JJGtLbiA9C2egC4LjkNiQWqvonQoVeHB8RVUicENXkEVgXeLRLieskcLC6S",
  "key21": "65LJkuSgwqL6uPgovGFwYZ2BiioyLzUHyuoJBekGa1eUFoqpRFtKfjK4yGZTHNxKiSNRW8ndcyvaSr68oMryT2XL",
  "key22": "CqZmtpPBKzEdu59B7mcdsyN7WVUmiDp1LJZRUJNYAcdYDB5N8mG8TdjhftQPYqxafMiJtqP8jSRY3a9B1R4Tz2g",
  "key23": "4SoxLFCKvyXK5xQGCWUaZ9hE4dmo79AqTc5EARX5pg33LG27NxaVYkQdun674qPtJgRdTb1hSGJNuttg558Ypy91",
  "key24": "2RsMEr6jJvgxsmXQ2pEiUq6JqB8BtX2fgXsSiaWkTxAe43Etd8FrAZqNQ5EaHgP8NUwwefa15DbZsJZsmjnRkDbK",
  "key25": "5ktXZupXA4cDy5jGZPP13UayzWR3kigjRVj3ktWnrh89bCauNriGNRXcEfaaqJuKbQZ2J8ZoG11fLUFVJ2BhL8KB",
  "key26": "2tqZsxAYjcjb9JzcRtiFtNzhwMBmqsJze4VTPD25kHBUaAWxejYXzp7HMRCDfuAQpW5GqomLTCvJaEToyBKb7egA",
  "key27": "4VrRdmxEntKkEFVSUzt5TbUSvH7rq2yHuZvmdALhnywaj951fGWjokue3MwwxMiA8HsAQDAhAD7Rgk8ognPM1ojv",
  "key28": "4FMZyiQrvE134eAbSGB6f9Jtjxv9GbuxQn5nBArsCxd3DSU9DucHb5KNnQ1SXzEfwbavjKfC4Ww8VGvJTbu56mAb",
  "key29": "4LZ5cnB5trg5kQbFqzaVng1Cqi9euccyB8sqfS6DwuKmpAXL88XL1QPsVAKB6721hagnqDekr5FDWBrotSsxYe9P",
  "key30": "4juzMmN91b98NoGc7QHKGNaknoGHorAwqmGQUS1TtF1SzvviNnW7bepSNQW8RdwkC73WhKuEg26xdCyUAdaMNTFz",
  "key31": "2a6MnoFgTa8drS28x9iUMGE7vercaVC9VaHojudWzW3Ev6CMiQMPgGJqMnqHDAMBXgtRHkqYzLVdZhaN3iQYsypc",
  "key32": "5YGHGm5brdDmWsKnjbEKHfuMaMhPCUfJwinLnFyvFF7F3uWtB9sKw8w5zrXVWsLCvMz9xPdomNqk6q9r6x7rZptm",
  "key33": "5dxFcDLvo2jyfXUTrajfEbnRNCj7pqNr2ENEyyMdowNm3yvTaDyEj1tsJegQ7oH7DZ3ZSSjZpgk1h6YPBbBLTyCh",
  "key34": "5o5EgufJY22ezYuc1Vfvj9YM32kbxmRNdFAAAEB2h21VdLw23sUnaRSBumnkngvvF2WQ41f5YdaKVbtdBt7J61KL",
  "key35": "5u35UtUnEWUTQqGUQ4Gncm4n24FZC7CQmXSot5E54vHs7PzHkxa5hfeWnZ81Wcd5QUHokWpsoTgCu3sAQbPG1t52",
  "key36": "3G5828kgVSBxsbunGLo5knMzk3Ez5ZyhaH7mWqNG2cCZCNFbxFkYXWGLjkRQ3Pgkp6XDTMXxCpNaTPrUTGF5tMF4",
  "key37": "4GaAoLsCpzZfvYjDVp2iGMBVcLEWG2hacjvbJ3wtkN8Tr9joXUtXvjzVKCdswrjkUMFdoH42cWqi78wTZK7ThE4V",
  "key38": "3fgvw97KvcPxsQASc7vTTW9Zh2Esxm7jWDKyZYQAb4nKDYXXPsazF8NthgCT52CNCs9QiLNX4fqRmytJiNJF6wAD",
  "key39": "5vSryHKmyjVVXDWLFCPeXKHsNLG5N1FmCznpjqmY2LGFt85GMmgX3Gku3HNooPSCV8JxVBNUn5mfJEVLcyKELjkU",
  "key40": "bhrwmqEKezLzXi17KF6g33WWVAZJ4YniH7jRXedrD6fmmTyaoKYxczEcbnGfpyTtzy2keYJ4Y4KGPtb3LLWnCK6",
  "key41": "u6A4UCL7LooiqRHUSMqri8S9dkJ8tDKBoAr4zD3funV3Ef5oK9GMcMGPiFygxa71rEwnwJG5GCqr29wAQaZNhfK",
  "key42": "2f4b2vFRd5cCDqn7FRMXvXzna3XyQHi31dfh8ztvd9mJPfEkk8qm34tX4Z8e4NUYVacfJe5VQyaLhhqEgLnKcKNR",
  "key43": "2LGiCeLMdZGsd6SzEyqT99iecFgGTwD1nt8J4hZZqMeBrq65LrnFT5GrYjCThg3fWrcgJDt35CD1vH4yKbJmbKyB",
  "key44": "tocDuY6Ns7vevytaugZdfimiKAHgh7z2kcbozTbeBeroUTGUjzvP6pDSsuGVNr1YoGcDydou3HPw8Vkqd1iQUje",
  "key45": "3MsVG7Rak5VPzbFMfZSjEifnbk9HMsDZbnvvmT7XjPELq1Lw2KBfcUX7HEMMMzdpTTheZPkRugkP4tV8uYv6Tx8p",
  "key46": "5Lmck4MptRJv3kixEkRkfuTgRnEGuqXasAHoT3yqsKDgKmoabgHeK8fXas4PPzJHgTyQP1ARidQ8fnCP8BEJonsb"
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
