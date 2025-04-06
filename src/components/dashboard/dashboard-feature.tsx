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
    "5pCkVc8TeZUS5g8mdphZM38SX7BsZ1uQSArn36ajf4UQDuP8sFMQTbbWFYBa8iHLCTdQ9psaQxMHF7MUW1CPScWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGAZqi38QesFMrX8bt6HWw6eeS36btqoW6xyivpUaSu3V3w6Mknw8xZ8eB4ndcgND1BYFRiViZxZqHyfZUsxqJr",
  "key1": "2yztdemQes3je9rvVrA2BspT16XwfHQVUXcwKKC13VVnvq3b1y22cgAutx5poLbtiu6Lwwq3s6joFgCWxmyCG4D7",
  "key2": "2F9M9wf8VDg9wcFYuATdovYM3oVKMyxadofZ63ruuEG9nbCBa2Zvqq5hbu5VdCPbQbaefvyALktaKgZ8aqjzk9Nn",
  "key3": "4KcfZkE3NAW85pSahexWsTzDR1eDe9uRERR8JDneJuxP4oTKLhXwb7Hua6RErcj1c2rGsNM5QHkfZdRNVgCeDDbR",
  "key4": "45XbRjkkMEstaMNmEZ9114zBtfDCvRbQRNGTBB2c23bB4G9n6x3UG9krew2qaAzhQ7qUg5yKoa1d9EJRB4rrYGdo",
  "key5": "2mKRSCWphLufqR9Ryovgv88ngfjXVXxMreXN1kuTsHtH9fBvZySMjPgyWGa6mWwCThRKcP4uiAxyq4ddNPvj2ibF",
  "key6": "53qeDjsPENtnmk8CkKDb7xwMNNM7Qcw25byAT5D4xoVZ66ReW3E5WY4UZQEbLMF5AYiDo7hut9yXUZ6Yfri4ZgUK",
  "key7": "4X83E4arxhv9Mv5Sp4hHKZV7Zi597Yr9sLx5iE34em5MczunkACboDuaJRzSK5ErySnuDdsuqYFsJHec2R1a6naZ",
  "key8": "3tsgJSKvhmuG6ckwrBCiYvoPTjgyaE3K6nzxheKGwBU4ZwcYJtJ6ti5DkfMLJacNZWZXznSU9vxaZaENT8yTYnUW",
  "key9": "5N89xDBe4NNp1xgA9LxZrMVa9yqEBChz2CbBU8sT1Qo5V2GGGkvxbz6rqmCTe6EHEF4MYAUwLXdFaR546jzy84y9",
  "key10": "4vRHQkxVin58Yg7WEebKbQFcGwDLBEo9859gZ2SExsy4wK6zbciCvboJnaf8VVvS1qSEXRE3nnkYQxe6YrmffN5R",
  "key11": "2MGTxGeDCeK6nkaeBpwZPb7bTCjAoLyhFt4FfEDypes7Hf5D4ZcZV9vYfYeW8QrkU1gpQ6SoyKAnkKpRfK2cdeKH",
  "key12": "UvXxbxT6ih5BJnpjkD48sx3gVmmNyYFtoMLrGVL3yKonmajvXx5rA8qBuJJK3EFFr9apQAv4PPVidj26fkP3Umu",
  "key13": "hnZ9SVGx4DyNTQFauVoATzg2ayHo9vG6T54qGnrMKveVUoePynd3ynidyurxfAiizjX2khuZNJ2od4LfHYkrsEz",
  "key14": "2v6Jb2a2gXSA2AurwFL8mSz3WyjTxK962DPdvuANR9RuXoQhzMyBFDD8K46ciG7vYHcYz3RXT3NiR4V1uHeVYQB6",
  "key15": "4mDJHa3dvbeKy2HxtMuDXdEkCYkPpAWkCGDo8rTH3ntXv3zhx9u9EGMhij9bYT84TeEm5dFDtT1zYABw2LKzPrkK",
  "key16": "5jPJESaKufkiWFJVbdonfEXuXA4aXehgY74QNHw4dKZCenWbZTtUMgYApV2g3dwfXh7rdWgrRLMNZ9pViiMQJvHD",
  "key17": "315DdSkXMqf6ozX3DjovRGDuT3MGFE2qch5Qjuz2qNsoV19M8LjNSnhyjDjbGUqNSAKQbuUP8L7xTkEDYuEP5StV",
  "key18": "4JztTYUUGc8xEDFwRGQdMSB1z1A6k29Nzy37Jqf3eW9b4ed3r5f1pPDgFHMQPU7g4HGnbGvEqHuuofX8cmYpUQCf",
  "key19": "3gqKoidLduFGL22G171Fqf5xCksD5YMS4kSDh4bzozsEo84qpcN23DN8Zn3MaKpnV3HsfXVZU7Un9Ydhr24zU7Cz",
  "key20": "55tvKUZsXmUwWWk1uRwjdwWQioSJ3ZkNdoFjdZ1v2Zoytk1xForJNCAd4BxSV72fhRaU6E5RoYCp6MEbjBLBbaWh",
  "key21": "3NgNZEsCpoaZp7vkFpW7Nfwwk2C24SPJXfg2gfs8E2FcqGg5evs9DZU9pcD9kT2zxTEr2r91xPDb3WDbQzcDbEcz",
  "key22": "3SjPFbFEhc8j1qgKKFxDjoZqSTTCywktzTxH6GXU99zFaMK23FTD3ESNVEAwjqG7zrjbf72RCVDisFmdkLcMFXrB",
  "key23": "3cYPW37rZdkR3HsNZWF1WDb2GApMwtdG5Pywo19zRfjxsxEdJoARHKWnip6ZkJAdhgiW2HhZDxA4qhKXR5xQA6Am",
  "key24": "ZVrEQPK9dnQXCwraLcjdaAoMTP8Joa9vgLTbD1vkwyuv8EURESrYFebc28qGfMEkESX14EAEADFNF84YgqK3SJr",
  "key25": "2Zb3oVny9Fq3S6tBxGkF3WYsS7mFs5a2XYokQHBTYV7NKg56roRKNy9PFBpzx8PQa3VtYJMVxK2bPhXZgWgjXMvW",
  "key26": "3tLk6T48N4iEPG4Zf4nNtK1gAe2bob7Li8FjSSho9mgWm32rZZEwBaoMx48QcZXTMFZJYJHr8WJjsbb2LNCcMtWk",
  "key27": "AsF44zyRfSVzdbaPgPExs4UWwszNueg87G6w3CUJuJ3mBFxkoSs41x7qS69BVR8uAuhVZu46D1Gp1ukfA1z7jvm",
  "key28": "pBdLeLzBaajj5kvSgNv7SoieeB78vYLvjVE6sCahhrJoTypjWUtXmvW2T2Qn6Pu35GPso47EA9gynxqzXZMpR4U",
  "key29": "3vCbVJ4HDnxtSw6N1yYzFEVrTNetMNeTs9cmce73C72Zj5aFUvYrfwiQvJMNNXZvkhhvkvJ8WppWXycd6ynT83yA",
  "key30": "aeucwFC9LP288VkGDC6g7onoqi3DusksU8Q86Cx7t62UrAPRxJM48JoBaxcQhiEzPhjj6jaiNdRA8dWAetL5QUB",
  "key31": "Qke89K4tfE12kdPYYdgPpRbbF99paureMjtAh4y7QuqdSyJ7AVMQAPaAj54zJwYfPfv4nXTaUyRNwgq9ArPS5AV",
  "key32": "4W8BSCCB7QhRwFLpuXSqMB4Ym9z4R8C9KvMWy15F3wchaYibVoCdbEA3nDW7Rc3d3pgASDzUbaA6if5cMZEH5KuT",
  "key33": "3fPsNWoJQcseJY1qkYbWQfkMyC3cqn2DRxQpsspaCDvUmdJo9kUw4X1rhp8X4iWhLmzPGeXc7rgvbCfsNfX56syT",
  "key34": "57C5aoJNYr67amzhghVgHhEVPt99a7kViTtF6H3HSzUMuxbR5o5hhZUEnsMe4BEhiW3yR6sgqoV3BFxDqQvjLz8i"
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
