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
    "451QfkEY8UzEdVPGQCN3cUYyTCpGQab9vibq32z2QyUaPfndRToCh4Lt5cjtKihXvzetkRJ6U7kv4iwfKHVKk1BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9ZWeESZR4eF1YffTQzZZjYyLefhLC2bSWZP1WpLQ6xUkFiuLTzBx9ebvY6uQiQ3XQ1rYhus49upBwYN6hd6Qm2",
  "key1": "9iVk8umKMzkbygbq7AwoUrc7H3smLvZU1JiZvVHSifzFDGnGdQ1recmvF3dWnaCLTvSfV4CHRVUiKHASWBgSSgL",
  "key2": "5TPfinJiZ1ZScSEh9XjV1YNkmmw4ASZSekmmDaZBCeYh2oNL6JrxPDnbvyLfCdEaYmqkXudEijSUA4qgqk6w4fFr",
  "key3": "4PDL9SLW5F16ku8J3FiZgGB2wznp1GjPJPCy4TQCxMB4LVx6BUDr5xSqXw8kXo3aiRep3qHiydWgDvcY5zEUXL78",
  "key4": "RFApTy7u2PhCFzELC7Tqbv6XBgeL96CW7MCYBwUyVS28ERDiRiM11Czdw9gsimQNx8PZfqjfG3fJfSqkEn2NZ1H",
  "key5": "4xzUoFUmRb3oRXnQG6vqwrehjynAsnXsWECfea9QTxSY6vZBmr5Yu93P2PsJJRnDMdcwkoA66yekzh5YHEJ7f2ye",
  "key6": "8ZfAE3vXabecA7PC9H8zZPinUDvH5Po1kyH9HWW7dApmMxZf4uBzU1FQg617Ae2m5QtBZzz5gPL4rn1RaBRc8fQ",
  "key7": "5bSBTZhhEWJeDdW4tmK2JssHUTA7ge4sX3qxEMiG5FqwGtwEoErtpRdhFsjNdFRmnxdv5JKMXy73CoFmcxB9SN9K",
  "key8": "b62NVn4x2EEWW6XvahNjhQ1gnnPYyGrYoWUXaMoQdS8ZrfZRsYzK9uUJA3ZCa9A5djkNmMEewxpatAvs7aJ36M6",
  "key9": "29imG1Nmt6MB5XDfBoervANsFt5bAArvuPriDaQsfJr2UvCCmkeCUikfhciAriPEmS5FS6f1VS7Z1Mkky2egvWJK",
  "key10": "5dsZnvB99BiMeXqAKU1rNzgG2buQTCTP3GQEHwCkPUM3unmEYDRHVtD8jj39pEwzNouxd38gyT7ntp4YJ51pFUpj",
  "key11": "3FHxMooqapP9HzudqbpMmBCQefoVkYU3McTSfv161FCetes4hwr16d2BCvoYknyaATTevXCuGpcjSsUJ7g6Lbxni",
  "key12": "4JvsNX5a7rjt93t56YR7UtQfbFgJXAa9bkrBgejdN97fv1CZo7L5qi2o1cDsDE5veGkXW14FWrn6BxNM2yNMtUxs",
  "key13": "hMSxd1fRypH8VkK9eLjZn2VhjfsPL2Hs1RL5ZQKENHTB2kWhvHui5H8WUgECGC8sNuCGR27nxLfzNwv17zoLBwN",
  "key14": "sUxNnz8C18wJrDDz3AYtdcm8aDpseVC8MqoTEj5CtPt54rkaRKbHs4RsHGFQq62HGB2kbcu2FE5hu15kqLvowoo",
  "key15": "3Wm2Bs7Vma9SnAA23hfZjM6kQwMboeedy8jySLHVz8XkBZBKqfBdo49EPkRtqR4of47MWsJRVmmF6cmNsFKZA1gs",
  "key16": "2q1uEUQe4jhm3cbyPMEeYWwZWs5hmB3bQSf3stoejaKxxqUTqMpPsQbsMUkeh5RZw7XaLAWMN7VPeRbA7VV9hSV9",
  "key17": "BqZvjRemqaPPzHV5M9tn8KLRAXdiyadbBi6mMe3ZDiYGbjRohiRU7vrR1rXMNPRJ7JoLyvey23BuVkyT1neopWd",
  "key18": "29P4rJc8Hdq4k3whaQrWWHND8UMtcwNpCbNkZVE6v41WFGLAWDAZdn7busrD49KZdTQQNxaBxbWqvLwxRRr7pihm",
  "key19": "4Wu83HuskTEy2npKZCQqEW9DJg7KimekiSh9XPxNCNhFjWUZjx6qKL9zUDaTkjzdAvPqrbWnB2uGpR2AjT42Z16",
  "key20": "2mK3akEfvkNWWdeYZuxFJ8u1F55bT9bFFtXWnjo4w2NvVEsLwRfwziLuCc28zsiqNjCCxfjuJFpcLcoe1VDWFFyb",
  "key21": "36wM8ojpxmFGNMvZhzU5iSwbatQFWAvPhJ5rP725vBLV4MwJhrrZSieJFEavKgivtys4E5mjfu7fhda7gwTBH1s6",
  "key22": "5SKWLN9PQuGDdCB6SKErQkRKEHnQxBu9KiZsyF3BYpfo4DYDTwppex595bmaYrCFEvHTCvqQKfxxVj8ubaXvsXkK",
  "key23": "3wfLSYbjWKusVSkQjCaF5RJphoCbmu1uWxtHPsznwQ32e2JSyp1WRTkocXqVYqxFhzHe6FgvJraHoNQHQkxhrhxf",
  "key24": "4y2dx1ito1wuj7Zn8UHhmRs2w8sZeF13Qqx3fVjrX1EKTBXWHro2BDj3UsDxYtEZTg5YVvGJfAauoA7WPFDW9ed3",
  "key25": "2RoBGFCuGYGX97Y3hCWEskDTJTKr2wKqqVDa7iVZZ95jsamcECEXD1GXxKD9aAgjWnzD3nGVyTM4myCytJyo4NTh",
  "key26": "2gK2w3F2yknwvsXW3tK3XUKwwePBvvo1PDbh6NpWiNd71Q1StB3FTLtFQhzvE7cuMsAovgzaAzqECwMnkwACqyfu",
  "key27": "4ZJ5ES2He6BfCpmTN8y3j4rRVFzUM1rbbdSzvia8fWbeejUeUuybXzYZ2hhesLwBKZXPRC6vth1iYJfojL1pRzH6",
  "key28": "34kqwbjYh2yQDH7m1Fkyeeri9wqwexd9ammHRoagc92BFfRmmrpKDxLKXh9uoRbeMmuVcsmBrPNTaxCEt2uKoDCF",
  "key29": "58LhHNb1e5SoLnH2ECRcG2DJuqAjBkQmUBYZPa1ASMyp2W5q8Uw4V2WC7GTTLVMQYsKRLAgMTnMZPscqcqR6DrEP"
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
