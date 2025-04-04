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
    "EbQMCWvrcaAJZPDJ7KqXJ64xfxukBYkbFR6GKKwHT46p9WjaJC1er1jynDX3RxZdXqBbBX8rvMVyKhMDatoAXP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R11zdHCsLpy6eXtWkvN4Ha8ScEbcPXTddBo16wJYG2iHbSizZDgkVF8baquKGtVH2ss5F5e3s2GxZpYbBuRkDJh",
  "key1": "4ak143SCNeDJWMWaFGjgToAEMYEWjVuhGBsvxmRkspsTqYrsooEkmsjmADUk8Rb4SjB8Fx6c6jqYtT7gdn5UJd6X",
  "key2": "4Xx3di7L7ToQewrwesHjRfX3xZzMxpU6EbUwYoDEwuJLWjJCAefUDPRVmtqLS9TXFRkc9AgPFMi2PR5RwCThNTRq",
  "key3": "3WFxgbqFvn1E8ADrstxBGBjzpFNyxf8B9QCTnsYxLaJWoEJ3tBmFDJgLF7Z29EkNQrMaSWWz4gcK979yza8ZdNR8",
  "key4": "5BvKtL1YDowomfFo8n1mdwGq3FDLCZQnswXo6YJUBnCyNuuuBhf98chz1z44FZZau8HXnBzbmAbFBg2dk4tLjES2",
  "key5": "2CymkPqTjxbgCQWnktR2a4q47DrY1yWmgwDcnrNkeLmBZwzYdXcz1iQ3eW4DAcveiW8eamCp268QwTSaGpKeHb1F",
  "key6": "44G4daw7u9J9uPzhthM8a5BnUoUTyaZWj9GGciQGBJq9V7ZrjaQTndez811bhHDcMRpTk5nb83NGCDpbitGnPfsT",
  "key7": "mb5gCTDAdo99fJyodViyDHBnhcJf5s6dbBqJMkprAiAw6MMUxj8qtyNVowoFbmwUUmtzKAsbd9BrqTuVe1W6YKq",
  "key8": "2ZY2QuRiYyZ38WqNHt5Lx9funBN34ncGwmqb1de835aDsJT4bCPtLCnVi1yczJduMmE2eBFbicum5cjx1GH6iPLc",
  "key9": "5iP51Ws1RnkaPrwKe2wL9voAiTRA6TvaEJgNo3ypjSLNiRFfZs22w27kjdrwVJixDYY9VB5Z2e5HE3uksbNaFa1G",
  "key10": "5WzgycAgGpzyf6xUsHrPmVSunncJ6HudqWhrPdYQuvDdZdCKv4zShk3dsHeqfgfBdbpqc9wKmeUBpkkGuNuERZEo",
  "key11": "3HrkCMYcDT6nf4jB34dVLL1kfwNmW6Bw2ANDiqaRVCJ5H2ZMG2kah7EmU1Yrmk2Ek8ufzXfRELnKBG9r2hZmr9uA",
  "key12": "2xSxjBAeTB7Ydsq6rCFm8tmmLzrhXuvChKLyAo7HQbRdcFo5VCmfPubUhf2L7Bo5Yq4rbcMExCYVTMPfYheCdHZg",
  "key13": "47wNfK3dJBRv9rvPu8UGZAgDrSsUhaRzRHcMqTV9pRXPjQ5Tpeej7nDRpt77oB5mshRJzgPhyZCkunjnn7wFNr89",
  "key14": "3yr2WqWYaQhuPCRdBusYWk88gJCR7Z1wBot4KN5eNzRh8VX1pxv5m633LZrVnRU5aq88d29aVfFW6GoRDiAYvex7",
  "key15": "4gSBgNp7dwgYuyfrqavZ9xJeuPGjs66dLXveWd9LaRRqdvLusyUSqjy4hFMUgTHbY46oeJpu9FX9kkmssnPjJMLb",
  "key16": "27z58Xqvbx8Yf6HcSqc1qr17ARgNLcxi5RVYcmdHMyBkRZtWtDAYZ1nLj6omJZgc6ARRUpBcE8gRc8U6F4H8bLuL",
  "key17": "5Ekq1uZNpboqNRbqrjDnaaBhhePaXSJriqfsw4PzBP1UrfpTtcCzk4zipEhemTy6mVtXbCjuhqhRgUFVfapnXzU5",
  "key18": "vTvnqRigDeufknCKD3Afn5CBJGzkZMZwx5Dder8BwoVbgMHhUCT8a87CHpRNP2VPWZYyuHtPjUbNSQXZRNarJxN",
  "key19": "5AdokH5gdNzyyH4f3tRHxVLwcmUbY4RihMrryWWzbyZ5j8V2KZ29nG73zk8xXs521BkmeUW3SMVrXmV8DaeFgjUK",
  "key20": "FcK2un31Ky3W39GsnV7k2b8TQArSkVGLuNYBtg8HooHYcbym8DDBwMKmaY3iN8qgr56yDw8QZDLZVaKKqRF7LUm",
  "key21": "5YNs2LzUvMW4XjSh8EWYTWyr6hsdqwxkMfRzPPudKVn3GGUyE7XMP7vuZB6c7jeRm7nH5fXQyzEqbgAJQwaKKgoJ",
  "key22": "5MhoWR1HXdqjLvBKAzbpB1fCikQJakh8iMmd1qBa96qgDGpQr9DGpyjL7simPCszwbkK1kWSeAnpyYazbVtSL9fL",
  "key23": "4nuFwidFbe1puf8rw6vHaq2Wnmj6kwpMJJ9tZRjpfT2DzDZRnT41KHjnbWmwvqXYikaS2AC8dVuSUWTDc7WQakTq",
  "key24": "2bERD2Q5YsP4CkvhR6V7HdJrVdyxsCbwKHsFdbydsXa1dPKtJmq719CCiTmcGn2r7ynVPd67gTQC4NwWrhjegi74",
  "key25": "7ox9YNCwqgVPAJR9iA2teY3xDAfD2Dmkr3rDWcnormC5yjUMm5xgqsefoFVCXaTWzEgfRNYrsvWnwuaC4QNrDed",
  "key26": "Ba8o3XLrzNtVnxuakR5cq2sfMw9UwFPdq8cotoYDD5C8asBvjwnP6P2n3Ja8YPY4fMNfai2VREaM7L5ovwbrRJx",
  "key27": "5Suu3RHWTBwkaznc78o7FuketGdRXbBNmNFaLgSapoc3siPFmGdAeMmQUCgj5ZXVknYSQEMS2BiMuy7GBniXe1Yv",
  "key28": "JJLcNN49fcNb2fcsL9PLLP7Wquy5bwkTck4SMNXLyNvNz3j58PQ643WE2LFCQWCxPds2PubEyoMfrTTZskdowT2",
  "key29": "5LYbU1cvVnw2QkjYsaLDa79Qmwz5FQo7pGqYgRGbH5YSUUqknPTb3t5hiBAgjpdvkdRXzt6HUGKAw5PZEcSnRwSr",
  "key30": "2QMUHqDazvqBWvrq4HXABTsQQx5M5QtFcS7oE1pLXpdPn2L2QnyNy3cR6CMtmW6rcMg7ZhGKB6t5BoTLXs8UH9aU",
  "key31": "D7odfrHbMNDYgZYRKk1EcpS58BdPm7QoRHeXcBjrnhQLiBLxRtYNBVmCcD735sMYxVxaSZbLLgEdcfykyuwHCR7",
  "key32": "3vkbbroaSkcXbLDfTxxyHYScBVN9wCuLU37X4Enm1jdCrAbX798usTwNa8sKBq4QqU9KRtFeLzd7eK3fqecNVtUi",
  "key33": "4VdoeZsVsDjSRV1sqema74YL1g7w1VXommn3KwjaxfkAA89e5Tjp6Uk29VjK4mVpcT9pPf6LWJu5ZsGvp8b4q8ez"
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
