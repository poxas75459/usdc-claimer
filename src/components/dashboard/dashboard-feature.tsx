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
    "4TU1fz6S3hjr9ny99tY41eXN7G1Lnj6PjJgHF8fUwwaGyD4ayVCT3AmPWEXLw1mKPUamcRKEaX5zXUo3rMEhcCvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgZwWMp4JqdJnfnjMx51yKVcLC1ssE3sb6hiSuxSzgobtMxybXBYroSVuKqzAf5EzSudBLNiXjszjHvu8VPXH3K",
  "key1": "5cF5LSNvcyd98wWhPTGhyyuV6TEikuGduchgiiWNG3gXcLdVaBoAjzKRy5yVCpaP4Ryrijpxj5T11aNj4M21n6J9",
  "key2": "2k7XUJ2eGQ3SWiBoDozMhxWZ5smXycP6Dav1JfcPXCCoF45adQewBRpcqpYPVmDr8rTzRTvAjfsTQrBNGj4YFcBN",
  "key3": "62yNffVgVeUvQnpmCt2kcxctuG5HLedrfYLBf8wLFtHno4DEsH95J87t1F3YhyTMZm1GJCvek64SQnC9fSa7S2A9",
  "key4": "5bE7DUydCr2QACUCSPwMqYGDVYMvr6xaoNa1WgJyK9vACGULRD7nEQcYm4tFEwbG9EMzwvKSPTqdHSpk6SRvXJon",
  "key5": "3mHWKdeT4R1GXPEnFycaMGRijxt8TFXvMxuXkMnkcdffve1jCudUZvy5wWAoZfB5jzKzX1Udoj8Bxm6a56fwu9qN",
  "key6": "bzv7xPoEhkRMSG7HWjXEP6Z8zmczwKvxdMnxouYaRVMJqhCf7WNK5iFHaMGoVQQhsRpAhdmHxrL4d1BxFtZRqyy",
  "key7": "4E9GpfagNF2TAq5YHc5xLegch8B1RjXU7jrajYwtr8RySvrVwqq72cz6ZY5eNmdLsv8RYNNy9btu6YvvMourJDH8",
  "key8": "3G1GvqrGdVZ9kt8XuiBT1kH3qq1WKfwY8aejkhu5QAkMYdG68yJj8y7N8LEP4BFTu35qxW6axwLGPyYq8tVodN1W",
  "key9": "3dVGKQ7dEKV8xdRJZC3qKLC4WuKMeJVwRTxmZPVXFzgachnwjHnCSvpV8SePtDzdz82gbBH8WcsCGjTUs2adZhJg",
  "key10": "3KDzBwk6XiDeFvFbo8B6ES5BPN6hbCYaHRQNa8rFfdTh7F8jz5ArJGPgbqoDntaCRzYsByDURPGeaiVJ3K2CKYC7",
  "key11": "u3JkcxNJTkoAzWUcDaNu6Cep7pgFZWi3WQyPnrWX3NS3XKfFPxedZfEnyYsP6tbDNY6E7yvjbMP3iUNtvfA8WCx",
  "key12": "31rSbvZZrnBjLDbiW8RG7oA15Vd6sudiXwBgVdHWXQG8JuDuGy5tWKShXFe12djU9AE9SjPqBTYH4k3HMVSxBFR6",
  "key13": "4Cj4ArszhkJXULVgA8HAiPgqBSX3zAoGZkaWTWrCH7SjRRJApsW2ozvAULvBrNpagXC5YQVuevjS8Lnw9K5GXJJ9",
  "key14": "4UWkZ4imAosVn2TmGdRkqQvTovLjT1N9MwnSUohKViqjfnHLbGJ8u5DRhM7tiXr5ksRw94rtwQ8SyFwYP9yQE1mA",
  "key15": "65LCfc7uyytuBq7baYRLutKAjdyMBBjgFvtR5Tur9bSLmtxYi5MGTgzaSCE2LuQuxZZyhHRzbB8Ag3wMKM7MQxsx",
  "key16": "27EgALT4fgu4DvNCBPV5NCwvGrQdnGwuaUGueKWYYsZNDUKb8wgMnGaPKefDkeTTw3NrLB1eooUTuxNrfkiwWq2x",
  "key17": "4fD1UiT2RBT6mikU1vf9fzYJVE9q1Gfr7RmFMLWWti3Ryr3V57dWG9Qd2A4SzyHb8bf2d25GrTgykY7fGUv8GNKj",
  "key18": "3UVqMJgVHB67m9Ma8akcWtKJiJhuezFf7eXn3zJhGi14AeKRfwYzawsScYVJoLsmVRK1KoJYguU5FuTJEWWW88xi",
  "key19": "51ZoTP53oXRNQz4wRzWsoeYuCiBiAfzPGCYXiAfM8yY1TY7v9tE97eRnPJbrwxmftcbwoeuodx9jvvvsUNQuNkM8",
  "key20": "4C42EjsSm2BE6McKvfbvFE2ZbffCwn9NASh1Cr6ShiJZ34yxNFnsi1VpmWZc9HvCeof6SoMECEt2T57RSq2P5Agd",
  "key21": "5QaP5EciNkicJAuFqDifZXSArnrwE4DoafuSJbX7WfzFehWsyGDBT9F3DKrNUg6oy8AGFYcKj9tVwuaaaRWW6QsH",
  "key22": "4bWBv3md2asgiXXB4EFRuiPxQqyABpxwWUGR8PbL8okW62BULJETBqXxp4NFCyEzPUJPhY9FednBnMncwdRty7Fy",
  "key23": "4bPRoWkBcgdvpNCLasTviDRtozegothDPuL248ZfsXkoj8Dw6JEeBCQY9oKETXATZnixd8kbuCsM5iea2Kr5prT",
  "key24": "4HQdy6YfNF5V4MotJvCpTJBH1LPF6vAuHHu8cPoYA6gc459pTPvZc73gtkuWvNzpUMGWFFbe6zbVXk6mN57aVUJx"
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
