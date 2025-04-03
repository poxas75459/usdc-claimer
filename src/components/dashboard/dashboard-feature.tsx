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
    "4TDQciXZeH4aGCy3Cew5RwphxkvoD7AXiw42unxWzJL5eYXcF8rHbU7jM3bwbJNXD9UmbqGeNCdKHd23tnwDpMK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WqHZje75zcomDHwm7v4GsrD8BCBfunZiKnzXCbVtNAF22JgeBs4NHSJ4SJkfe4SYt79TRd5ntTCg7MNSpVqbXfm",
  "key1": "3cWHn368KseejHmxuVriJZwG9gDkGiCP2ZA7fc9DjmjXfyzPMVRu6CNVGGAXXeAvtZnZkwrLFaNjsQY8KjCJUzxC",
  "key2": "2yJstb3q4jELo1d9JJZoz2s7QU7jhQXNW2274NXJWq3tDp6Ue8oy7PHs6gpFdrTNaDpADfrbzKneZRv42iDxrNbc",
  "key3": "2qPefZXk64tGNhFpnbGZFxUYeUgCbsRR8rvApHzP93PJ4TrkQtfaGKux7ZbJCmpkaRbtJTdug14uuMVC8rfvhZdT",
  "key4": "2fXoC9pbim7uHinWVXTBhcRf8TBhVpjZqUpMmfcnM7cM9eSyVPxom1J7qK1FrvbffjZhFpdJaRCGbKaEX3EkBaEK",
  "key5": "MdwXtFV6NJ4NdWyEYocaSjNtxPuYdiMTUB3dqbWLsfvpJQVrKp8nzY53Sp6qdH1tcHbASeUS7Y5rGohUNVrdRdz",
  "key6": "CF2LcS8CwisdABjh784xFUe4zLBVmMg4SXdhTdckUHqum1xbpGWTUXTYMqREGfDjyriAJVy6ipCFvjVqdzbuN8b",
  "key7": "2cCELWmDdufFXkqeaWzJ5FyczXJURYKReSBCVNLJerFur9o5tLwhmpXpNMjjs7XiKKBNijoMqXgY8eweawqXfB8W",
  "key8": "3TjVNdTcau3Z5t3X5DrHVxBhmSvQCANMNgL3eyFydLVqB1XVa3mMPgde87d8iLB69wXBskNxSUW633su5oWra4Un",
  "key9": "4nm4Fh3KRKWnYscbP3C5R277uLNYVbPk4q96vbPPnAfbAjoiJQASukjX7wfYp35V7xPXFk5s98W8niCW3K9fkc1t",
  "key10": "54fDXY86qdFXCYqbeWr2ukMjs1f6mdmyRC1BECYtx4qh7LHH3Krs1YZD3rq5jGCULBwqPn1NSWTDFzaGX7eW9qJZ",
  "key11": "2iUHBA39bV56XyZ7M4QzAjgQaKXqNpTeUtiwF8ZJ8VJkBWdiGgCUJaZYP9mP6FUZZSvsXRoVpj5bgDMuYjkPGceZ",
  "key12": "5hhpCesk2XLcA9XWqWPunY38pBP82CboiwZZhFnjWrAqWmCcjjk5eNA6qJxFd2v9REAu84bCGrKeNv9w5wK7FCsf",
  "key13": "371F8omsQDproidYP4JCNnFXftqn6ZC7hF5XMqXrEpFForkvPsqemr3txRiAiuu7fWLjnc3xTgNJTCMnmmFuYXJW",
  "key14": "3bpgbccLdmQdcEBi9LLfT42Umg577JAsZESZbiWWiehLcCdeku12DSv4CU3Gze7kRj6CoHbBgFYnGobkhUm1D5xR",
  "key15": "4XS3YStCvPr3Jc86Mb8DKvwnyeVveAd8gWe1uzrCt6qpULftWAQESF6xcsmWfgHs9aCBrzTNi4LnALwd739AJsxH",
  "key16": "27aPhngL5BpgYkjZYiCwceTFuF6Pabi3BvTVTehaDwtNV37gjvwTnEkPoTGcQHw1dXZVTHbTn7eTPkpgswMpyf4W",
  "key17": "WHeQMCq9CRWnREzcAgZG3oeyVAiZPP8CfmSsVmBvMBjDgT5PbqktHJTStzeV2weoZmiRoYi1Nxh5rbQGoe3gW4t",
  "key18": "5SqME1qiXYbsweotTY76QPtMnfjtnfv17fLMFtL8NBqvXc9eZVeYCpAhioPbzA6Xg3r9VYNwBoASMaBcd1SEX3kg",
  "key19": "2CK1M4mT4Hi55vKsSRGJVFV5dKv5BEyuouFQrNMRx61XLQPC7LBniqM1CTMhtebvZ4ewJBJBEf3nCKjaTsd8pmBD",
  "key20": "67aNt5Ybqh4A5hMVXXeMnsMwEKpEvniNxJ4FVs5rK2GedV1xcFt8y6ASKjtvCMmnJMWig1YvdzkjEDQ34uKsmQwm",
  "key21": "3WkWTZ3pxodXz4UTfXsg3jVcBa1UjeT5nch3QP751aYwoLgk4hUi7jqaqiyPjcaEhYSKUGAwGJLNVekJ8Fxf5Ckd",
  "key22": "5ARzLeYZZNHpKyYn2xszJg2Wodz1SLms31CArNp8SXAUisy8QXCcxuEaRpmW1quSaSf74MixT5vTVd9B1xscQJTt",
  "key23": "5VrXkLEC63LePciqqnLbt6ZnGsxVFxwbQrhXb2nLmMGuegabCLvc3wEASG33nnkzoVh685TX2Vj3Q8869pfcJeiP",
  "key24": "5qZsofzD63MPURUUwLkSVhrvgt9YLbtjePtfAJKnG3QB3RUSrBtdKvhFFSDJ9tgdzqQN2TeybSoCq51ss4qydka5",
  "key25": "KjsrGiRv1gEtamR6BWn7opMcwGaqT41pgMK2JJeubFuSmFCq1JPaHeTo9mLMmzrWiGn7QgvFj7QzEiGvu8n4Qek",
  "key26": "uajqorKMvLv35NYrQNqsMshcC7NiyxXFeuRkvX9i6HCMzfz1S2XKwE9ig4TZ6i9t43BTLpQYn4J8u9eLWxSgEuR",
  "key27": "2eYXiTMnsp5Ygk3kqM3LuunZJh2c1nFwBnUrraGTkrRxPXDwWEPFBeLVRfyGUnPwPhXfRUMawZGESQXnMfe2BpW4",
  "key28": "2f4cWhYVRHhhsnBTs7G7LmC6ARfoJR2mCuEGoE96G7Grj51qotK6nYzRT9msVBP1t4sfFkKzrZP51zdaVfuhwwfe",
  "key29": "kCfb4J9iSwpFXRG85dezjs6ugoRwrYjxABfacmLGBD9dvY28yKnspgUomJLyDcZUTKPhcF6DrUw2NbuYYu7BSTv",
  "key30": "4drWdbBwgniP9zAoZZaTNaVnWgtEcbK82HEuH69KBQe97YAWuhXjGEmgSdR7F2sVmARrjizQwKt1qikSZjJhufzY",
  "key31": "Eudv3F6HuRdLDaF6227GyrFP2h4WNEfxmxsWxYg8pacA9VRw9mCni2Nt6tE1CMVFYTHePUq63YfCBy9PyX8RYy6",
  "key32": "2hbD2BqL3gRhXeLQYT4zkjnGMqCkALwanCtwsuaaBrS7MW3XQcdCn9qxqt7MJ9Pj48Kx8qc3UQ7c1woyeVqR4Ahd",
  "key33": "oahqB7fsKDXehakWqyQbQNFmYMZ8B1b51Gzj9be3gThhVmCTFgBZQsuoezTKv26HXorRh9R1uDii5mvR8N1J21L",
  "key34": "H3s97vRtkd6VURUXL3sjceDwjRx21NwrQvZqYFLLKxeR2UDZ3ebiyhxvVPDa7Lh3ddxbWpYWexniMsa4RuXbmDM",
  "key35": "wBB8SFBgZmnhVSiSqWEUz4THRdvNULZQ81BevM9cKpVbskc6LaQzu37T1w7yhW5r36P54isvK4qrCBRcLqR7CC4"
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
