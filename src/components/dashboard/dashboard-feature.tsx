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
    "5yRQNFehLmWD54jVpX1rpSr4vnTC8yRsJ5LqwBy2PsxSeDZvAYMJ1RgS1JCyjaJgeKHskRdHt9MbLG95ik9ahUcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbSz4HpYry1yP6YBs9yBxHnvoyWznhGAeGMQeob6hR6yYexCXyod8zUUu36zo1bASGbRRWPiX9znnendEBDDWMh",
  "key1": "65dP6xi99khfkPCwhAEXXnhmbLuMgzBYJiVBUw5chsCYg6pufVTBhHvTcmZXnUDSTZAK1Kdhd6F8UH7Tvxr7c3j",
  "key2": "3z8XuQi9RYP1zMymntTVPurxgWd26wB2ZKfwMHmW1a65esWvymHmDg3vTZHny1bSBBvbVwLCmVJUxLdECHtKyVX4",
  "key3": "26j8vLHdeQqHdAzHBYzpJT7PQjVHtyrQdrdko5BQmmiaXsUubfwZ79TNU6uecVwf4Q49H8Ji92QihHTb849psBZT",
  "key4": "SPYMUdQLWCgpukVoGG7Y3mKnCurfnraMAobkf9cyM7Zb1jVpTw6kiDcHh1BnEWtFhLgUtb1GRGxGbw2LAT4K1SK",
  "key5": "53vwEEgZwRLd8dC4kpM5TtGHfhwfoFo7KDZeU3fiy369p4dbzhwyrTBLfnkwp9umUe7Duz28qksJoSw5WMKbnErQ",
  "key6": "3U7CMLmpqPd1NLP7cPiMXRhWzxfPr4nQ6WgkMdyamWBd5YcGmRqNbVh4bVXLGkZQ9hxBJLFMopDfdkXfMHqJzVrJ",
  "key7": "4HNp3cxF6eZ4Gc2cPzoNGivPLvBvVKfupwBJdgwwv97N1mR8AbtDVsQSaF3Ro3SVXqPyUZRiGdCyUJrU4J81LbWi",
  "key8": "TP79qttBBnHdX5SM7ZqPbGrLmbapAvFkHspqNFosBSQNKHLbKNHyd4ikcPvc2MwstGxCYJBMhVF7TznqxAmAKFP",
  "key9": "3UAhkRNmMab6n8vvhoP9cSHHsNjkENpSNgeLdg4cy4kMtPh6f6SPtCEWnwmV5DtvUUpf1Ufs6i8bRGMw5FgJGPF4",
  "key10": "5Ph4qaXpY6wF7Ajt8EhNVgdUjfBERD8tWNBakqVv1ZuNKXiesAwL5HcjKdFkL5TuTfX5Wrz9RkojQsZyGtFSaW97",
  "key11": "3WgyfuGoBZM1cAiyb8J5AShBDorxDjCSMWd1Fhr3zMcbb2MU8WNNTG4QG1AFhPV1ny2B6SewEHg2uTkktAF5SVsj",
  "key12": "63UtGi74MHxgzpRPmoiKYz3inxuUWFk1WNCMF9wpfHmDU5UaAQmSLW9YoTUMu73YmZkhCDD4JQnQgcrc3PmrzZDY",
  "key13": "AVPCwn5Cu9q85fwdH6WBtxFFe33nvCVUTKe55YhXUu8cRKV71WsAjPtBkppeUSsNK6uG4sT48d9u5j4nWBJFTUQ",
  "key14": "bwf8fJW2TonEc7PRguxEcR16U8Ar18VN4fT6D1L1rP4w4tWTh8zTXoXhNMBmortqpyJ3FdHFHx1dWaVKG8do6P1",
  "key15": "RfpY72gYnN7t5gdbfMXuCyq1Wwu16gLDQrLJeQtH2Bq7BH3BQ5MEB4DxY2vDydjmiuYC9MhTXpFtSZbNxK355N3",
  "key16": "ERbJdgRetYziTdWFTUv6eEVzbf2LSyFG2q24jgNYpkYCBGfBLtUD8WPnku7xVX6pdAGkXMoF1jUZttPxqqSgKPC",
  "key17": "jquN4UitC6m9UpFzJw4pTe8Vx67rtrQLPctiNB2K4ygwLnpcWeYyhNPzTR6RmXzAVt9SHbg6UgafsWeRaydPHek",
  "key18": "f5iey37BvoActuUk2AmEvdoYm2iFr72AHDzstgAdzXjkDQ6YJVEfhB5NpWjhrN6XT8EP61hBQ423nyormY5yVJo",
  "key19": "3D6gashQtNZr6mDPE5M6YvU2g8fSS9vAzHmJjCsRdDcRCS3khj4aXiYtty4PhkcfUEZqZZFzCPyBEHUhxj1jHVME",
  "key20": "uEaQuMDBYsBeXhLFQ7mHzweuZFP3DobZ2JHWeGrMyNkweisKazocPXSVJxS7tvntf2G7nYkVVJnAEqbKQX1ovR9",
  "key21": "2TEd5TddLX2rKVmgwPhs2AT88BFohp3fqFcXCecNV39JSWgMbuDGg7R9ohuPAnkwoD6zrbss8dZPSxggAXngyjib",
  "key22": "2nZzxo31BbSNCKqpxq9zo1tmidksPhMNCTHaUkjWpRwhkfBrTC6Kdd5x4xU7LJSMuvB93Yjh3kkKspvf2jwziYNT",
  "key23": "4t8KwTmPyyKbmzMBZtysGeUfGtSKQGJLj3WcHoAD9MRYdrqx47E5JHfeEQdr6DXMW5aXFUCSjDaztjC9upe2JtNG",
  "key24": "47WviD5VLYHg87MCZ1JcWATsKXV7XujfYEsGJT2EC1LEsf8sYVUJNaAnViFx8PgmAcfxWVf9GyERiy3LUVZfYjcJ",
  "key25": "4cGya2ZQkxg3HFbXQbwYs7yHNdXhQPZXARrEyv56zR75f8gX3yjW6yeWBo2ThkawcBF3PP4PizkwZ3fySDGfKQmQ",
  "key26": "2NxkALM4JEBaMmypRyyTtvJDT3j1Lisk2ECQq488ziaS3ReLW8XhjUzqKEGNVj9zNEeYbmEUcPy19Yaa6Pb5qXog",
  "key27": "2S7PWKSYscRHYoNpVxQ2ys2oHr8DzVKG2e64z1gd7dtXKaGi1Pjxr2fnuTxhG7W6rNHJ1dh8Rmu54fY3VNAE7LC6",
  "key28": "DZYig9WZxQAWb4ditRwSivzcXZeZTV8VZzqAidhrD4GZJSkDt6PjxCBsDDNevC7iS5gi9MS68a1XubraYnpuQ6J",
  "key29": "3813iTY9MHiKb2XipkW4HnEfezSMVuNjACLiGanGAdTJyaRr5XwVAU4duqZVSkdgkpq1RcFdg4X2Sy1t4EHdXPd1",
  "key30": "5cBRdgKi7L7TZosgahsipdpmxShmZgUAYErkEeu8D5ej8Ha7Y3aF3EqHj5Wfd2ZY5AYsfwr5dGzuGMMhWdnUNYSX",
  "key31": "48KcpVQsxG952gf4Eed1Uiv6vHeHfsSnCpHYn2HywB4Lb9yh5KEkYjtzLK2NCjjhhY8DA1v8MC7efyozhoLV9itM",
  "key32": "2a29hC7o5NTqzQqVj6kwn2E66iaGTH95QzcZ6LZMja85mrYPdQ64kBFpwz5E3ctfeKW48iProsL6nDH3PKN7HJfL",
  "key33": "4TUeEpeidnP2zWBjd6E6JS9S4uqhnqDUQWKw7jsx3zanaQQKPbsKeqSiXpUQopnea1CmkUiDq7ciyGtri1HajpRL",
  "key34": "51HiqmAQUCQxPWNiGCvAKzGDq8xYPe7stkDKpin3qJemTJsyTw1hTBtgoo1qsNuUfLU5JJQ25jKLcwMaqVKFue9C",
  "key35": "2cgEbvQgeew4w6YeZoetp5wA3JJRxHoP4CbnUauHzUEhuSs2pKAfpt7o37e2PgJZSk3zsowkYtSXcgw5csM4HUbX",
  "key36": "Q17miavSHrRJ118k5rgmuJcJ3Sv5LkMts6XVhUHRhnBVLfgpAXNT3ev47Y2eGQ7WSoA7EiwXetAonVVa9Viwvq2",
  "key37": "a5j2tiBeMgfTS8wwtosNDPcKYLjCiqdnKp5BgEaxf4LE35JUYJwL3wCUwWPxXvjy9PueSXvjvksAX9zxb4w7TMB",
  "key38": "4P1EqdxBa2B12wht6nvA8BwKGa2XP6CDmigBa8cJYmbdYStS7vA7Rb7kZbDUPAQpDndPJGab9wby3jtqgFmVd898",
  "key39": "3aytrgT4h4vT2tTbHhC2ohEaBhiDBVNzhHM8ezHJntVx233sRLDnKYqnpjXYAhrqUzu3znM63u8tqLuAHZHvdLoW",
  "key40": "5Jt12AYAwHfxouJ8QDKZ54kKmka8ak2zt5sye7dQwQhL9cP4inLXKWHy7Lzvz7uNA6ntACWy7V79wTJjgBdtnewe",
  "key41": "3jEqZ67x1umRdjF6ujvt2JVhkPcQ4Uwsvy9ywPYfvgXYMYpdvLsY8ADCbW9cnYNHYxtg9Y663sd31zNudV1z3BjB",
  "key42": "5TCii4wT4xaq4xrk5cZmS7MSKvTbHGSWmgZVQJdPCZp451PXKVZKAJQS7wxwZRHYLZX4mtPYGKCT5Z7VKjzcgMbw",
  "key43": "2V7DE6Tyk7JoahgSGuvMeEn6iazPJLoUtuZL3f6tTzfcnF2oudxB5hSSnbgwUmYVjiE6RhRKBomhXuKD4eArR1GX",
  "key44": "TFBmAYRGFwUPrFSuWLupHUCGE3kHJY5S2Uw6bvLLPrfpmi2sx8U7tPTU8Bbw6r97q4E5dXtLaiEdjwjTw6xQz3q",
  "key45": "2QznBxRhYFhqvYjGpfknbMt6edEw4b3aak91LCYtm3cA92fV3K9pHXpfqcono57oWbjkDxfDfKEEgDWicG74fHWX"
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
