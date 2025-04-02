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
    "5iVLqepotSDz21yLSZeRKi5CCKJoA29cURgdjjAqFGqki3vBtNxcQ76cERhAVbBoU2SLtvK7TdMBPxRgHNrMkpMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKjAs6z8P2pBrH6nw3cey5vVUa1idx4U3WxhuwiNXSd71PYhBqwUjMYzJHU9hpZXzpbDLhAcXVPDgavQgfPF4GB",
  "key1": "4G5LXR82CknMbciyiRCNTcXASViKvTjZEmbDHZc81gLUDpFoU2i6QsLmhuf3jkApzH7ggabdW8EHXxHtmpmm1EFB",
  "key2": "yTwtiYm9VEbb9DKdY1exggSpQe2AuoL4NUCWn6sBomXqzpuYbMUBN6EwdPM7uQ1Hs9WBE4FTN71155AzWRAtvwS",
  "key3": "jVThfg3rKcsSsQhx79SyuoZUVtJ5z1ojNKYvuhnPeytdYZhWsqXvS3FCGHLfQPvek2jMJYzkvx3hj5ZxA14raEE",
  "key4": "5oWhrv7KiQ96hHiHbZ7zZ8VskKjbyiJKzEADg9mvuyaAr4BigncUs4M2Vv1qRBb11iQYoZFuUsqb8ezGUT55bWDd",
  "key5": "2Vd1v4ZCtVfYRFYJkfYLQmatfbwpJXyXtHrqwYyw87ou9XHDEUpwD7EncqKSBzEfvZZUiD64Rqf3PoobEKq7pbvy",
  "key6": "3HrUheJmyzfJ5RWRi1xLSMkUbELnxwS1Mz6vvZLkeap3fXHodiQqR197jEy4A8aoKZcV5u3kRb31Y4qkipL9EeXS",
  "key7": "5YnGDYWxfrZzzDnKXS5iAcewQnabUKemtzKzdR3rjjrZ2gz1xHsYdAEiqju5gazgxaeAFqZPTe3oiuEkt9sVmeWt",
  "key8": "3KRSdbqDaYaKYqKEkiHetQQnpPvyQ823WPbpHAaF3qGpTvnXBBVwqcds1eueV6YZGycRT4jVtar9d9ExQNBEKnra",
  "key9": "5DZMij4f8abMEJbSPs1ovTdgcpQCNnvB8QFoasfjxaER1vq9jDSd2zQGN4PsyNN924CnmNcfkyzSJjs16EWpjZn2",
  "key10": "XoU4fEh4Qg6jGZVRCKLvoENPWumyudRA9AZZ6fb8oJtE4rmj6B8ip6rdF6DCyEqx52coKopf2vtguk9Gi9caLVf",
  "key11": "8hzJBsj5LfcUuA8wyS1f5ZunQwRC7cM6uYtvfH1opE9h7tM6RdMsBcRC6UkB4dtPuCbBGxpBmyxiRM6ja5T2Nup",
  "key12": "4KBXnp9uF18pPJLhaesVtfPzuoJzK6qDCrBC9fRBzKmz2X5wVwB8Xbd2HhPaqp15j5rFmGZHdVE1MCrDm6FHKPK9",
  "key13": "3PtZqXQo9ViyJpiPSwgzqsnwftzhiLdNYXL66WTbAcDovJ3gtFzgGScS4QUxqykyZAbERQrBAgvdR15QWVqdeqiw",
  "key14": "eFhsKbvcjCDXPxyAHAjUXdTnJwuijiRWNMvUtmXpkzMCWAi7ccd466izs2Vn4HGyteqxPhZZrUuuF5m9PgWRdiG",
  "key15": "5cF1WfypJvzRihxuJF9F7qaL8HUQpsn8HdHwYrUBiDnk7EBtgcfZwHbupBMXepBfdBxewKGDKi3fAmNGJ4UpDmfF",
  "key16": "4H5XtFiioigef8Li2Lp4qZGZLBsvxezD6hRhE9UZ6k8BYRz5Jsdwra2zuZ1ReQuzMQ9meLoP1238fRM2npmoyqGW",
  "key17": "3YWcNGqcPuF4TQJmX3wnZjpdJzFBeGAJzW43JNnpRnTyzesAsDVr8xxBuMT6PbGufrvyR7KYp2GLRG1VPhzNz4Kb",
  "key18": "2UmFWskvxADM3FgFe7rhK7NFdBjMBZmgD6ca1mR6x9H8nNG3zfBMyWoS8ncJHijcezbtfMhMSPTFC6SR7KFohsQP",
  "key19": "4LxMzCWT15nwHYV2ExBMWVY3MEoTX13N2JAkxMt1uu1d4qQNvgBj76kzxcwNLXw8WmqGsg1MvVzQv854BKDdQLb7",
  "key20": "5TBgmGWGJeVXGKpW3fvzFY6YfaKD1zHtTYczEgfw6vKLND9By2UtRzehhamnwHctz1qviiVGVGqghv6mmemUFLVd",
  "key21": "5cMxRSKn6vff1RDb3sePTMoXRP422iht6AoGyj7wBFGw8PSadu6zmGz9fBA2gShrSnmWfozGghLCgtjGqfQRwtGf",
  "key22": "61dBrJvXFde2AjQ7aRL41qsEhUrhFhKBy5ym8tm16mYY6HpXQbxi9myonP4fPQvtuv49ByZhB2LUbrDe6djN6ajW",
  "key23": "o5umj9nqcVncUQhNf6gdhZuBvi1UQDS2iqkoonEhQcrG19Qz3ecqNtH7BzGpdZUHi9L46GP3GK7cRkxDhjerSf4",
  "key24": "njYuYuvCnLhbJskBQzQKn1ZLtfDz6BoF3uRGcbFbCEWx8c6MhQX8nM1Nzuxha9AWXgkjgw7TCaramfQcjZ7GhLN",
  "key25": "4QTM8ke5owoYGSwTHHKxhH5vgbknRZ8vkSAP9Dj7KDCiCxbj6x3cEVSKq6jSKSQQVKMndKpn2BDRopBqtSN4U8Kz",
  "key26": "4bakH5bCvwn6H58TYqpizaRTKHXUmvmrGa5J8biT958bcSfrz1drDZodtJ9GBYk5YFmrDkSyTtZgzczwF12YqZPJ",
  "key27": "4ABCYdxEBcbXUvdU5Nhx1HkcUKWb9iKzhcLeRDwr98Ai9ivUbbdYtujWStNb36sbLCNLPUK7skHdiy6wMNj5XWDF",
  "key28": "5Ncmvz3E35oun1pZwHXGdtP92hSWNeABt14Dr2ZqL1PPQjX7G5Ly14vnbe7vVCQVsowJVUUCm2fd1qyv9EHEPjRT",
  "key29": "2pkf1TLQcgmhnALn9VLeLvK6qqTDGuSKBxGNraAWFeBth88pHtvVudwBGe7BF86schzSEfKN66JKAQ4G5JeNBGC1",
  "key30": "dhTso2MoX9vaEenU1biJgABYPsEck2zpcNGmCxjrQt7Yt9bZKznZ5aKEpGsCGNaqERzYLqQQKwdLXrtgjR9nXgt",
  "key31": "2iCTvv6pZk7BE1pJVBnTRW2B8WBWpdgnLXbewWU9gnyxvWRty78vSMtZ8sbysYe9WTw1iAd56NCwrRaTX3YbTpQ5",
  "key32": "63VZWCvgEMPtD2GgzmhrmFyPU7wHtWZh38fYJ81qZoBD8kV4duxB8ZJyLnaLm6aRQpAEHoy3ovVSZhJZnqtrKMxq",
  "key33": "5Xx4mQVBo1GJV2tFjLZcGk2fBQimDmpcZEF3uafRRPkN3azB2rn9WYfuicx8LYZzKS33WsPyBmA7DVp5aqv3xX31",
  "key34": "2shA2fEkUh9byz4jA3MGf2oKAu2uQr7MUCnbkk7JcKsVDLfSqQthLwCkasybgM4Q4svFtNpmTJW21jTSra7AFsRC",
  "key35": "47dLN6p7gwBYe1Jz2mjVqgE7qqUes8uh3H8aZzXdQtAL3zEULbn7zmW3jAS4ftuT1PsbVXseNLXeqim9fMhrpMP2",
  "key36": "2xN3qQrdACk1XivnUukqYvopJtnLx1i3ZpbfvVexXZ9XQannHU37i3UPJT1NgEaSv9HgYYjPyvjUiXXZzj78T1cc",
  "key37": "5QTaVep81Mun43r4ST1nvjPUzmHEe3KmxtnZ81NkTk6eiBFsXLj9PT33uutrCUiU3We3wGAub2F6n3BsaU1LcfPT",
  "key38": "3vfrg45oFrzoN1vKMc2u2inFK4oApnyk3CJjeVnPSy9tNK5jSTfVfpxhJguHPSCQCzXU9ovCgBVLVABRn8fb6xJd",
  "key39": "2croAx2QmhxYnTF6UzVVCpzFCF5cJ1eTen9hTxz8cdPPR1t1kNrz234diYkmbjJTTQTEvaufpdhHxaKm7YywqKBD",
  "key40": "5tXfRwsk4tbvsm4wXqaPBqhbgRSiffEv91FytvrrnkKnWPCivNyzYiZMwkHqridBcqg1drDazP9sA2nfnYVVjgyh",
  "key41": "443ns96umbR8fEqaNk9UcVnVMhzuQkZu8QV4TX9eqYLSpXmgeb6F3KynkE1JULBc3V6ghoqh7XL5x4677gbf4Air",
  "key42": "2rk5JUm1ugYkvGRn5JkaA7GSv3YxXjMvqYAiF9cMB7SBH1JyxeG2yRVCifk9XZB6ehgPhMMFeZuDdrNjJ7PUfiQh",
  "key43": "2koHnkpg53DBd9gfop77wBAKLNW9u8RTPu29cbBV2aHUmnYywT6STZaH6Uuo5qJEJam9tuUAVarEP9BtEu7phG6Y",
  "key44": "3PwdCJQZegARPdktfGhYPosP6eyaYtdwrswzaJcYW3j5geBrMdWjCWprfGwLWemQimED1TYy2w5yCx4Gojb7N7cG",
  "key45": "4HpYaUg4Nx8qEZTC3UaQNcjrfVGopH1BiJrFJ74X7FjViqqCFebnV34SfhiMVQGNULbWSX4y71eTw7Y8iCjZFyi7",
  "key46": "3X7r2XuFyXb1b7cgc9Zao7ReJ6PKH47hDrbB1EduSdXDsPWtmmdXVQBf6WNe3ifd5qCkTG7De7y5s8bApjFDPyZF",
  "key47": "jiQXhQE2RXvm5AyC99GjmAbXWb8Amuht4gtu2urKEohnuge9aCuz6DvTQ1SeiiysZAKujqncvHMXbTfDhae7LzG"
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
