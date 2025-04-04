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
    "2Vai6YgwsxgRYMyVpDQWJsSNRP9N6TSXNRcnA274JzdpGuZSpPKPQ9VAmDKrJV1DzzkydZ6Hw9BEhp5SXDi8Bi7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFN6fRnasths3p3CMy6mgvEqZs7SqNwav2kF4y2Q8Y1BgTmp2c8cozayEzrPmefBjTf9XyzNpJ3iDtvAR6poupq",
  "key1": "5E3zLujYcffriYbsHLySQES2QRR7g4SLua3Ktz9JHgKSGt6stdBJz11yfiTFd4LGUji1uyTiT8Tuoog8a7rZAiVH",
  "key2": "5tqBTaf2zp6y7us58PDHaPqPdsc2M1DmbQFFoyJ8MZ2k5eVgsECLbxWz8bhFhCh85PT2CsPAyMH9jyy1CL4Uue32",
  "key3": "4YNUFQBsssN2UYyobwgsGEENbZRbY9q1pyGfP6jmy1KRkViHWUEN1KU6oC7ebM3yGbTqajT1uyNzzmL1E9DBaXKS",
  "key4": "3TYuLk5FNZfHhpW3AXaeHhGCQwJBKoWZ73CHipTBFvXYztaGLJgnqijnSkphZXEmVTGfYhoWfGq7Txjzv8LuvGAN",
  "key5": "2MTJnmGEkdG2WzvMVmHF5ab6AxUbYpCySSnNBpUwVAcCDahufB4mkeZxSXzMi4kbmh8itzb1h11yw7jGbL8scbeT",
  "key6": "2KuWgAjXPsJxXhki9Th6vxvuJY8PhB3y42RTPLKGXZ1YHJ8Bi1MsNUU6oq7BxV4pw8SuZ1Db2qGUe9ZqMfSR2KJG",
  "key7": "44KqBw5fEACk8iBKnPDPz7Jfxj471GieCBNbMU7w3V91QvKQ9KhYsLzHwMCfCVrQiZwnhCEbgyKeJ9EAM8rDeyh9",
  "key8": "25VKdL5rYDYdnu5rYFAAexELyD7Z9g3Wc9GMECpz9GynMdStorAoL24LSayTP3qaZTsV7pmyYiumvh9VaxP7c9zW",
  "key9": "4rVvms9ZQc1Lpeg7HFPAiDEKjF9gDdtcTfzhm2yozSvfxx7hu9ah6bF3RtRVaHrfcHoQzXp3dALnHfy2zfTv5gek",
  "key10": "5HZ5z1CYXgJ1F5SVPXoo5U7nGW95aZurp3wVhhoZeiJMKKEpoPwkMpVtjKtGcTafznx3M49DcxVoHhQSGYhR1ima",
  "key11": "2NVQvehSkGN71sUCqQDD9YEw8BVDGjYoaPfo26gHUTEKyBRJscWSEtUJGqyCrYAZ6U2UYZhd4fTVMVykgoDS8E7x",
  "key12": "4bJZGXCFToukoMwwnJBhWGzyUQXJx1s9dbsx2fbTP2nA4WiuT3rhnLg2Z2syP3GL4V3MeNjZKDSpZsdfPvRW46im",
  "key13": "4trUdq4wJJaz3DfRCkVqASGmryHcZviCtPdXWQKLR1GDky9in1EjUKA3VmSwbe3K1QZNR9sSWvfeHpmWkeHGQF2S",
  "key14": "5otKfWSdBe7ZtzzYr63u592Fr9z96EkQkCsUZ9A3bTpfnTjVqh3oQCHXhMLjMzk9e5WKqMPd9MJJEMgWywGvMxi9",
  "key15": "vwYnf42b3aR3w15PEzRnq2QudTjYEu7axyQV52mumLuUDcTgCou52xCdXVhkiBnHgy698ZsmxptPt9fr7HJz784",
  "key16": "pty8MEFuWiN46oJNnJRzwLjrWoyKghtgUzSFGfXPrGv5cPh5ZbteJH6fvmUaDNsMXMmZa29JPoVq5id4Q8EMxKU",
  "key17": "1As7ndrwkGQsFBRFHUCfbCrtuiNaoBxaPcLMdzTtBbAaD9jZc9yxkbgMTNMZFT2ihgBobhYx4h2KgEdVmJqDcKj",
  "key18": "5inyamFHNMqN4Sep9CSgDbVJ9VHvEfvpMt5RfJW8Zqa7zp2LDjB9rPfZoQBCKTNRA1ohpoekNkCPzRtV8nHNFdBd",
  "key19": "3K5yJ2otpXmLgZSxQUQVj5LgL8Wg4v1JoCKme3MYNq8AVSRSpYnRBXbDPA6TiUi5CVYSuLgkes8n9nm6aEC3qjcZ",
  "key20": "46spuqvEbGqezxn8iAD5AZ48pPZnj9DNLR2APmu8UWX6RHai1trqJDxNJvsN1P6eQmQJauKzypGfEz4GQwiQ2nVv",
  "key21": "3wBuZtnCN2gQNpgecogT4j634M1exPoHkSY5wrzKZwu2eaN89DT5iWhg9DDXuuzQJQnbmK1tZrsTWGFifhcQpirf",
  "key22": "4hpy9VEY7jwJV8o6D6wXVhUnXstorYabPw6h1kF4JLAmWaPnfzVN5LqWyZA2jxN81q6JTayYixYxJkPpwsp6VgDo",
  "key23": "5iyQMULKRuhVrLUiHDPLaAKkVpHAHqwWqtdWiy5EwNKPo4H6YaBm4GS2bgAYune88hwsLNvrzu6ryncH9KBK4fNB",
  "key24": "2pajC6y8yyMe7BhgsUi4bfjy1bdTzeygMG5kmEFeneUVjdExwxa8idpSxbeuDRhztjfvYvT7UoV8j5Rhz7zh669v",
  "key25": "2CtDXLw16FFySHLaBbXypozQK8hCgMTCvjLrmq3QzepfEQVqEZwr2H964gXbEXTXn7ggLAPHJ9XL8GVQ928Ybi4e",
  "key26": "3TNjuqL67fTjNUgR4fA6rqSAgHT3mWapEYRfjV6ud6qbACuVDTSD5NBDUje883MzXKFJsJsCnzbHgxWaFQ3gCWCx",
  "key27": "4fJ75W6qRu5uwBc7zPGqxGs6sJWFWCx8avXzQai6FaJUEt81VjMGGRAG5D6EuPKL3B74ELmU9GYJbcgxsb1FZKL5",
  "key28": "cLspMeguqUi3zwA1d1fXvVreAxUvKc4Aq9ApM5kSnWGrope16Us8fThnP5CsBSfVdg2TNSzye1z2uc3XsCaCQ8c",
  "key29": "3o6fDzg3ZRJYqwcJXxW1EJ6DL27re3xxRYzKxfFnyv1Cg5Bg8Bfx7BAV8JESa37o6sQQ67vBhTRwqPtQLKzFKT1a",
  "key30": "2hhj6yK4RbZr5ajQ3ew8VXiW7NnnT9B8ZyGBjEVvF1xW45zXyapyNRNsCa7oTUTEab9vhiT5gLZEMvDJA3V88XZr",
  "key31": "ZcKUcyPeu3Pc8BZVUTno5waVKxVgAySPpVE6S7ToH9GVVsCLYkUWRdCz1rxx78ipn294gCtSryNTDSzf3Sb8itX",
  "key32": "2XdMpyTLcuzDR152pHuavAnmPomNT5fVazpouAi5znaDmsHwA8qPn1RqSXBy5iN99BdsEuWvifPhh24BvqmGh3iL",
  "key33": "5T33dJXsDE12rcrEcMrGs599tWyMrmjXhJvWKm674KgphDwTXzdsEsSP3pJa333924oi4uHxGXPtda1biZgLgagx",
  "key34": "f3f8HMPysTyL36J9R982CVG7ejKidsSW9wcSp1wYdJNQyVydrfbtCDVqh8UPuLuXvGKXUx8gwAQApQjVZ9QxE9r",
  "key35": "4iBZg2swwTeKM7fDchrMvjZn9aHnadChP2ZMuH9UFn6GzYPacbytjurLoWxefAeST8NRGkJT1M9rSxiegF7hBqoM",
  "key36": "2uYoSZZc3ztjPAYmX3WJsbe8jWCSeRZmhMKuBEanMgV45GiRBXmkiafe5LriVgSrVNfdvMnuBoJsiM617DWxPAvM",
  "key37": "JZgVzGiGCzRBdjthrhhq6Uqd3i2HmH33WEKtKvbuGMYNH6CBhd9jqfHfLBcNhWEbNC4SgbD5yqyyE8Uk9ryuScz",
  "key38": "3PGc6Mw2nigZhewJVhUn6MqKrv3SqWhtxwjSyv1yrB13u1TucVzF68NgEtYobf3hpf9ZRdPwmFdnDtUgyqpKtNuh",
  "key39": "4EHdBiY4KD6aCecUBy3PUV3urAubx17AyLXj9Aq6yag113xFBWg7JSCMdjmB293577651trWpMehvTRMpG5veP5u",
  "key40": "24eirkDPnnR1eqpFbNksc11rW1Y1y4w2mUuWzXbHZzd5MEphEKokponJk2oLXMLviv9jheBvguZSD7UT2HVTEUYg"
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
