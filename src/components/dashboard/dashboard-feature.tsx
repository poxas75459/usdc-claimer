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
    "49kRUY9qz9BfBWeeaHhPnR213WPQ3LUXmoasQDuprVVbPJJv596fSiAjPxVGEUL8YQTbZ1V1PfURBTTMqB8vZiCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BU5DDAmVAjC58rz5R2PV3b1WPx2hUpjTDEcSgUF7vwedbadJG6iciGNfGuq2wcSJ34Usx1mmYdg2tZgmL9fGKkz",
  "key1": "2711kTHaDwXUsF6wNRA2mdPPgAgZ3hk12s5fVphvMqVzrPTkTqFKXJjJ2Sqqt4waZELA5hGByaVbou6oX54vUp4d",
  "key2": "41iTviv3Mg8yDS3zMj9KUVnDW4nVYGMpoSfWh3PHW68TKaW5dHR8XcXmiSZRniDkH23KZFCrxdjqbu373fgqXxfu",
  "key3": "5nxFP2ujBGeykrpPhWSbUz15rCiLv83BWcRqdcVCxX9gLRqSHcts6iaRiVFA1AKRDdPBJpXeS6Lr2sywVX3ASKsS",
  "key4": "4wUUgieNLNAPfYgubeeh2pgMKJgnho4NrEZU459a5xeFVDShAGhYKD4tKMuxTWw4UBUrqTAQ6BZeCTisnCmuudaS",
  "key5": "2WUga6d7zTK9qK31445eD7y156V8G4XQS8zEtGhsSmScDPn5PPEoUgYddxvU4JtDXfS68rFrGzHvz2dc8RsUXF8n",
  "key6": "5DfcDndp3Q7Dzt9tDS9aNQpktMzvyaNs2Neh592ZaQF2itgeyQSoZbfV81JNBZ81gQ22uaWG5jHZV8XbXFyJ8FBr",
  "key7": "33M1weN3Cn5ueN5Zeinuis3HTiyAcy5P9LdxraADp36Uvzj4YWub1Zh1jyGsKdpCbGLQx3364hGezhoaMyEr4SaX",
  "key8": "4W1JuPm4bwsYFsYNnmsBsqkFZDCYoNc4MzVBkQNmxvNA8SKXTL3JhfupqihXtue6aXQo4XxDu2dEhRRavVvmnkRF",
  "key9": "31MggiD2tj8YsHVASoU9TdSpWBBh6SVW3ntbuJPvMnq4XzvseuArV3jxwAuU5Efz7L8oey1NNgv9YgzdhqhuN75X",
  "key10": "3s2qJNbLPwWmfQ1pP9JLfAqt2nKze8WLNXC9jA1NFfLdrRiKhqKwoVnvDwcjKes98ir71DLryUzxmny4xcGzbcPZ",
  "key11": "eBizuySPV9ZVHSdHNwxNhHBibHPCoM4egwAvjnmUdPqTghvM4mdQtuDhQu7w1JDESK29XsfHUK5f9887nYxHLeN",
  "key12": "3W8dBV3c1UcJko7EMkgfMhBdnwHhizyqU7XUj9NBCTUpH3gs6C8cj3hJ7odKQaEFAvpnJAiwgEdDp6hwtXAq9FZ5",
  "key13": "4Y99iUCug2G7CcoW4xnrCbMjwTfxEAKKxr5rg1nZb88NqZFMw23SoUiN467PEx5ivixF3kFnUM5T7D287tdeVtdf",
  "key14": "351aV7NWZUeks9QHiCig59HMNb3iy7ob7XAtaCSzHudvKtk2PSbf5Jcy6t84hnoCsu7rrPJGsucqJxT4R3XrUkFz",
  "key15": "5Yu9w9kni1BTcVAackVSavZLkRyv9J7jZMJ2vydzLux1zzgQb2zSECLYACfivLbnbkXgSLYceueSsj8GzvRdx2xW",
  "key16": "6yiQwiXc75pTHeYEstHpdXU6U3ePtAcWaBJJHwiNKU3DAEZTdpRxPjenGpAeTDgAFgZbsdr32UPfDW3nMkqS7Ln",
  "key17": "2WWMzYhHfsR9h88V1Qra841n9kMpubxavTFvkZJipkeivZ7DhwrCH2PWe6Z4UK7GYRhZQH1XzzLTAR3iHDQ7Eucp",
  "key18": "5aHYYYCm4kvyrfGgB8a1QMFJjozTavtaGo9tLAAwRJvxEDGQ53MtNAo7CFaDSAJygn2JHcdyEYs7BLX94K9h3FKH",
  "key19": "XzfzNdAbhGGWgdVQoecxyJCihTg3urLQoLsgdvA3ggwR4HUfvajvLvv9ti4k18Bwcx4vxmnVqAibpcAx7JRAF33",
  "key20": "57jxmYn2h999u1rzy68Pr5vQoxJHENHNUP2XQ5N4gGtTHRSmCizoCWDWrJ5LVkPhNhnNm6KvJuQomxosZNCdKbCm",
  "key21": "kb22BJ1uqXX1GHFuXdB3pMwDJgaTDgBsEkHn4GrugxjE8nujZ9HJTbqMnfbqJPx9AJwjupSmHpWC4eVZfUhe8vZ",
  "key22": "576gzm48QfWooF5aL1hjamiJBXtEWYk4n4UuqcjDc2t6tFkDoppHBCBq7BgLisvgJZRdEyrYH5JEsKFX6znbjB2t",
  "key23": "46cyYRFAD4Aqw8GcnAJLfmFqm8pBeEyXEkh112gRVpXz6sjhSEKsvpbmwqB6xNzs9o8GoGPwFqGKQDC92Ym4yPDz",
  "key24": "3tcEgcM2mWNik7iBkaDj35MTUyazQkQZxDYGtZ3YSdZ23GSb5oEYPY8NsJRk1bjrMzxerzohUFtCnfoj76KsDPCa",
  "key25": "4MoR1kjBZ2mqgDzdAEcuwHkbrXa5ChDY6zkwd6YLFFQgYHVDPDJW9ygCzmwtcpFZGQjLkTsAGcH2ZvFrxjKzwvu6",
  "key26": "4y476BeRtrud5XsxZd1Fiyg4py54P8uMeGkcsJANZfMvYZ7c9WyDrVGttF7DLBeL3aiupsSDw3HRiu36X14KjRHy",
  "key27": "5VnVXgSqbwi4tAXgk4FrWW3dFGrN8drVLXVgn3Lb4CooUnfZAmyJVkv1rFC5VcT4HebWfE7AM1W3E6hLxLGBTRAy",
  "key28": "5sTtQbEQwU2yFRx1wTqLPANXAK2DY29bJ3XAfYax8nWXM7vh23aPvtrQPbkg94jeSwBbPBpYhwjcraxTbmbdp3Wv",
  "key29": "5dtDenrDLHE2Eb4zeBRoqAC4QHB6LLi1fK3U1dBqt5SgPW6gNvpryGrEBkrr77chRQ6Fw7c1aKY43ndskZmYKYVE",
  "key30": "48xrgPnr9HjjSvHT1hvoXs1oN4STd2uQmMz5zPMufnd1sExk4CzYfeRK8Qhbq543hHFAtKstuDUp1dJgbwnZGwwo",
  "key31": "2Nr44eABf9Gx1btiEbVsasosKAjMD2VUZ8YffAKZi97DYkWfCvRvfsQ9627ZfNZDyMGYoLiDYBDdYdGyrMiBcgX4",
  "key32": "2fQEhtdcxupcePBvs86QcY9fqn7yszN1byp5BXpazr6qG8roaaY6ckG3iyk6TEXzc3M9Zra46vj16xSXvT4JZQDD",
  "key33": "5hZZRqvUK2sxQ35crdNe7chFQ7hmi4tzUthLtdMY1gL9gyCyiXuMj6u6kHhXUyrdgypLmTf2WPzt4GkRQTRBtbLi",
  "key34": "5JraDKUbE2NXaouqVC75KPHJHebhU9nCTTAjVyUxaZ8qS3FAUTXkVtWoLMvTYtik8LDV5pPob1aTcAD3H4GrStfm",
  "key35": "57P8AMGrkJCNjoLC3FUUDduNR7dqGhfSQ7Gs9HCV3qatc6Fw3AZdubgU2QMjso8XzyCViDLy6nBwm5fbKmJeku7a",
  "key36": "55zn5wGv7xp9LHTG399gKr4qHy5HN8VSo8DNpa35hApRABU5NeuNkvvXTimHvKKaUijezpSg5axsAGuvvwZhRQQu",
  "key37": "1YYcekZFjNA94G28yZojdKGvAUiF4b3h3ZiFk93fqrKaLsLURi7BxmBHgutCdyx5SwV8RvRDtM2hVzsHrkzxHvP",
  "key38": "2AUpGyrvLbaykDeiyEMFa4QQAU3BgRsasLRja4EeYiXNGM1ohzgNLrm2tEJEqynfK5ci43vth7yuwusbj8qxKQDm",
  "key39": "3jCPPGFhkdz5hM3yeQhN91qkGfsF3cysU6qJuQJaTF3q8MfcMB1jj3Bpp16ccKKELMfojD6n87V1trh3QzvgS1px",
  "key40": "3rDCnX2XrHaKJMTm71jyLfiUsUAAo2YPCG63JD2x9WDPrtCeuawEGHoJMjHi7XkGaaxKqdtgaG7WJe4mh6rGKRLv"
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
