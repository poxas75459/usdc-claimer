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
    "4XCk5mGqLePkv5Cm3mDcXdU8qsz5CLQpoUprpVQ3MYndR4tHq2xNBZPHwxP99HQ2a3A5gH6E9UHMZmMXqJJs4j6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fTNYkMs7AojEm15rwVA378JEXurokA7QjxcSVbGB77XHDr1oMq2XkF1ewHQzvbAMJXCZ9MSy9wRUnf2MUqqCcX",
  "key1": "5ieR8VzB57PKKuxWoYfs2cSxvFAzjgBTdZtwdzcCqeo1NSV5XuRu8mzuhogw7gTzWJJYhV1H6KRws44iX5XzCexj",
  "key2": "4UEEkEVdESWwogGEBvWyhTjtG6L4YnU6x73DxDTvef4GiQMTNYXQAtQHwXowKifo4YLMdiXRQu4tTc94a9mXFS4R",
  "key3": "58LcpV9vkqf2X4gx9596mKzguViT4Q3fLRCuWkAWM8nfruB4dHk4p4L4K82JS6S6jvPLyZckhqi6SF8EfN7bpqPN",
  "key4": "3Gek3uuRPwaYh1e1Q7u2dsGiDCHQbYbKqhoeEenMkjAQU2hbCjtJsfMeyKSpNasd1rVW2Hya54wxuyxEuVyoPNoN",
  "key5": "294BFpmTXEqMtJCJ1A2wizLZ96AjvYqV8kScMxEzywrAhQoS5SskXJWutjARAAmRypi9PXauUtFzdWve3jXShQRq",
  "key6": "4NiReSJiBmLJ3JjtgcWAKS8zwZm7TwhpWusLMPL6j7axRtkQto9qwSS2afNkSxLtR8JcEWnhzVMnxiFKQx3aqVgm",
  "key7": "4DAUz45ByTnemdc39sJrnyRamrXorKNBAnrqR3YNjHyJJPRAxz7HWm7s9jT9JVooHAq7xr7BqbX9X4wcvG54UHaX",
  "key8": "5eKajViAQM37imorr5gRA2qRPNeqTtbgSEAcmAJoDfc8d8vRRnvEan2CqeSby5ArkL2nVVbRL7QZ1SAoRRrRsqig",
  "key9": "4mY5pemtiBhXcuy8prshzvYhGUDYiaMSvoGCWfhnpJJwjouqwzBTNf3Pi1DKRQuM8evvjDZTsfQ75LZg4P7zEF2E",
  "key10": "35fArZMCf24TnHMw1GXE91LvDQ7Cz7TuXQMmEoL2AEvXs7EaTpvm4NCq6ZR3bU3YumppdtjwE9hNsiwGHvirGcd4",
  "key11": "28xGdxoZChf8yAyRLzVL4DL6Njt8HjrWyz9qtY6BrpRmGcvNJ2gt4vzYiiy61xDsvFirKYSHNjcURRpFoGqWCcDq",
  "key12": "AdK6c6hBtdUTXq9JdEAedT14QuMG5FNQnoXqL2LGkvs9YunhcEEM45iRSch9kLWMLiycKbFgYhRmXCQ3YLjL9iY",
  "key13": "3qgeSQNoWYuLHxdpGJPpxTgjZQRHwrXgmCXmWtruLbFdF9SytnNkgMdGRHYnQZouPP2npR34Cv1nxt7XoTLAcd2y",
  "key14": "2u26kbveKSuGKcYPDeKq4dSgbPP4qD3xywnArND49gmShHdxgYNx6yUyk1tFiWVZkjwgVahaooy47kj1FBfDnfyJ",
  "key15": "9FrwVZQBDBKRGj3EAiLPVS8g9oB8rRsxLJuqwvoEHmng7cRS6CUxcTFKbsFsNSMFzJ12q7AWtVZyszDyANSQdGZ",
  "key16": "4frCtkkLnb76YQBtV4Abp7W9x9q1yPENVT1jcyvSVaKyj4QbnsvHY6cN9T2xFw3LZyyUKvEvnH24THULrRjM3Bfx",
  "key17": "3tq4m8EBNnqeSxuLmSy2hhyX2ZRJRo2T1MEonytxP8keDXVyTqiqVvAfm41NdbvPfvoz2Wr8L9hiENnoWuZR1BAJ",
  "key18": "2ni2EhztA18pGrsYA5cawMCvd6AnJx3sjKqHFPpvhbQsvfuqx9XZ5YMA2APAepMyjd4m2eMqsGG2SjmfdNPX3Byd",
  "key19": "2YiCE4ZYoCrpwsoHbrFXJA1TpVktQN5hvyFemZxt6aKHTyLpbeLcmcZjRQDqVc2t5BjG7uP8SBvZJfSsBfRd9vCY",
  "key20": "2xGzjFGyMySwaoyPwku1axdRqGqQDa9fc4UscT85TxPo3PCbidihixXND2KnDpHxkde1B8xKXhvSJuurii3mmJ9J",
  "key21": "4z7qfP8Y8pndLVm2BewdrUvSREBy7yhixa9DKsvEQPARADt9GVKe6c8tdksyh9tXVaaogDc5hB2DmqXMob51uNts",
  "key22": "4Ard3kUFDp5zrekxbn2ysQoMp8Dw3kakaVhqGjpR4JgaiBRFrY3RndCg9eZkBx86PwmRyAdNp6kTCvL3kg89LicQ",
  "key23": "3ubDLJNn4apDbnU3RB6BMqyoanHAtFanLNdJT3pmBVYTCUGqFNAUsRyhTsayQDRZYfv1fH7yhcS14te3dvBize6j",
  "key24": "5DFixMuV5SLAdc13SfHLfJSpT9hRnFJTsiC9WnVf6r5ES6YZvNv8X3hrVgsseor6hH6c1gYde1ipWevB7hWq6cFP",
  "key25": "5Wi8z3T6MZwdEs2bQrtcui4VgaQ4YhuJ4Dk1FPjKT2fpcQZjF66ovwAW6L68Yy7pqnjARQ154CwX3yn2EpDVWSXq",
  "key26": "21BNuTnUwCbvSXXnQ2hCrkx1yKykauyFg8gR64shyhCBjSRZ1CrZRdiq6f2drDGiAfPsFrLJsNfNtDSL8BvHubmK",
  "key27": "5sKUYeA64JiM6ZXzybA6edLL29t2Pw4fDs6QVW4EFXPUfdEgxGNjftBX9yJiu3gqkSurbLUfTaWrG86xgaKeQaxQ",
  "key28": "3SKxHD3RjjHQLPnyPgR6QiVsUKeeAmumEkfnjjmPr8CodJqL65uuue7ZHhKPiSRQSiWdGQAWNNpwXDSsHzUM6Emt",
  "key29": "2n3CoqtHAPPv3tvXffnT2bQrWexxdNadCVhqKerAxHARCZKR1iteUxKYdwBfcDq32qW21dxmejz8YxVjPC7Ndp7s",
  "key30": "teR3NsgELuWBy4cAVosDYK59jbknCHC7FnbzW1SKGfD6mef2bVoySpc9Qmeb1yF8Ysn73Kg4nbmw1LiK9KLG6b3",
  "key31": "23PNexF6LtW5ChGq4wHnxegx3YdC7pz1rRN72Tsp6Gbj3pRfkWnsW4HyZSDi3YPBHGrYMnq7CdLLc8Gs43GiVho7",
  "key32": "4Gzf7rRkoP6dj6dEQThVLpM196E9jknxR8iYG2EhRFvQE3dDHouqakxpt4GSo6fG4y2gQcqDnoatVapMpDPCsGyq",
  "key33": "5RrBuUFoSTqphCwXLEfmq2BAUkUHXgGfaeAgwP6tM37eVAgSXsSkXHqHJrEiMHpQRFqMix3CFnkgmVR9trqdWSkp",
  "key34": "59EsQR3YmSXfLFzLa8EsDw7tEWaeZqqxSZ2Bv6cH4ad8JkJZqcWVbW6vxpcN5SdmryT3nc5g6o865oSN3fA88Cwe",
  "key35": "35Ht2sUabqj5Zy9PYL3PdQid954tVRiUoAgJLKkFa4cW6uFMSqHaEXydXn5TZW8YcsZo5FcQz325ynKZmh1GfUPq",
  "key36": "3Jymwk2tuCZMHaSTNEqiZnGFtWPWFYeWkR4tHmqSYoUV7QeyvxnD1AmVwxRgVvL5Az9hhiADCEgd4jTxmkP35qJt",
  "key37": "52Su7cCPyYisVJnWXnqj2swm8zqWYa7P36T1ScpUGeTH5ocTLVDh9pik3fxPX7qTnFgBS58rkwUsLb6H8aacbKh8",
  "key38": "2gW5coaYSzTG6LFj7omRLdp9YrFmfReVNg54k6zt3uJyRGCPaDPomR4nPG3HQ1wX9CcwsK6FykXaSFGEoYnHgxuu"
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
