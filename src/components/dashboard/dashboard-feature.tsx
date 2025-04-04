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
    "5Fs5ifVe4SVKa4D4Fd6Pnf5jbHeVPiZNudxATq35noWndTdY7sy4QtPQdprd4R9bVcAipPoFYxsoMKcjXmYY3RJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v96irs945cRg3HV3hDHeC9uFyycZqS7kfh5sBor4EgpsJBNMdg9GdGZRhw1xTUdkTDJbejvcKNGTpaQPYtyJbe6",
  "key1": "gmqZWGGhuCdHoCygAzxJpdmuMCon1K1XLKh5d8qcQbtqZ5eiuDdxMRkC2AsWbojeCtzFSxeQjDLr7Tmx4e3Hv3B",
  "key2": "4zaqUgUTWPtXjhsamoNGkVnK798LHPU9ioTdqCj4j2Rr6p8WcBBwv753GxndwFU91WaCyu6i8uDVikXEbVbd4NVF",
  "key3": "ZcULqfKNVq9VoeyEkduUY3erMxaQhnvpAG1qeyGDCkZDbSNkbGLehxqx9Xg2D2hYLWuWVDjsCnZ4EVtPiqF6GZT",
  "key4": "4Qyc48iiBSX9Pe4vKHVa6v8JCD9L44yQworbogYRnTzf4UrB9giyf7q8gKp1VqpQZfq6CmFuohUEYfx7aoKrfHNP",
  "key5": "c1ao1mvdAXXRJUx3vhWd6Kv375pyhFG1yao68zuo4kNB6r46UXSrTp6rzCyG848LujAwKv5FU3N5L5gkbR7Hs93",
  "key6": "3N392m9K4x8pxk1nEWLSSqiiLffqKdjaPWyawoGWGtXCSjBz9hkP65b6iHhvwuirVUzVULgKyzzyoz6HMvvsT7M5",
  "key7": "33pQbn67UUDzMJVgzhqWN9kZnBfXecw7t12DQ3N9uNHAPxoGuoG9apdtS2VjDFMM5dVXFDMtjaDbks1Qp2eJTzU6",
  "key8": "312nabgDi1GuE2ZxSyt7DpEqnWShWCaxAhdWLMWF4awfzGoUh7MY6WUfhc22trFTr32vCewtNrT1S39Bs1sraZth",
  "key9": "4w7crdJaz5rTGP7mcn8Ymry6yF41mKocajpfwaL32itV5XisevyuV7K2JSAhXuPG6oB4GPdJkhYDBBSNCDZjgPYJ",
  "key10": "4ZQdAVeHiU96hSBZS5aaqvE94oCme3swzAoEx6hRBCoxfbYaipZY6oMBKYZ2FyHb1fsxYKT4AcMzoDN6rUJJVvBA",
  "key11": "3PSMEeMrGArERSBGfbrfKXivVVhkarMyKTrRpiXp41ZRN3RfTpmqMX2UZNEvFeT4uZGfRnZHDn8ggmGF5z8CyyAK",
  "key12": "251xfoLADp6jABjRfks4fyPotvABrrQ8NnnbsWnDFph7nmtAWTnDkjXjWp188Gpyvbs95f1AMD85aZAqzPzj8xhs",
  "key13": "2Zpd4mMDY55yDJXqeaTEiakeyk68VBQaW7XdYs7VDnu3FC8MztxRBEG4hgqyny9xQfDpP5zFdGp4ebzSnMFbhPMr",
  "key14": "3C6qRgWF5o6K5LeoNFNKrSLDD1u5bzAYLQbKrSCWZFhYKk2PfG8LXyErnKRiDsdw2PnMaDH3vhEHopNeGxadUmL4",
  "key15": "DwfLMjT5sPk988BfZjWRecE2gtGurzJEx31kmia9ZHQz9DcZfj1Aocmk6gBt5kEjZEA37uASHVYwfE7vgxmC8D6",
  "key16": "5ZK6QReh8YwTVVELSALGEDh77H1Cb5c73iJEAHog73UriFQmQqdqBAxWwbDmGaKocVgpMEhngMu7U6z6yaBXdTd2",
  "key17": "BnNRgvGyZqAhhFfRWdrUjGXhL21Lot5MGRWPL1pWn1H6Sx3qaJ95ZHeLgrt527Epmmt366cSFoeLjQ7b4c94svB",
  "key18": "43ssGNHxyZ8f6fts6vxzHnvKo57ujucr9KHPvk5Umqq1tbFvR9PsnAp51ockgLstqvJAyJLjuLvu817ynb6prHZ2",
  "key19": "4ifJHr7mNUrctunoRd27ZTPR7FAeMmevXK76xH6t9stVpBJxCKKFYip2dHaiRQ6zd1BNLSAqFX24mJPEbm9L4Cxe",
  "key20": "2rqBvucduJV7dBnFYvstwow3HigcHejtVMd5zWv7wF4JjMTV7ZvHvnaBBaAubErUu9mv1KFZjrbzNLztYDojnf77",
  "key21": "3BJZzjwHh2aTn4NRhLAvHhX61cQba8BxVCBXb5sAma2JNNgGTdtnzvo746qYAs6GuSyoDUx99nn5vHcbMNHu95z",
  "key22": "2oVKPLF9s5ZDKjZwVg1bKDJABUfTwxQXsQHkcBcYCC8yTHZNZ5Am8Fzkyy2TLh3qGajeaS8M6cQLvdGcRJSegmph",
  "key23": "4rEstWZp6rP8VZNoFQ7gSujq8xPMZyvVPFe71H7kJp2NK5BiMSJJpNCWWZYZwnivgC871JPJRdo1SySSxeUgktTU",
  "key24": "BzvxuqVvhW9jjXF5Z9jNkQ6a9ZKv7NzyVPyrAQteE2j3KuXHG2RNKCYKfLfNcRjSraT23xzMwo8hnHL3VccsxLE",
  "key25": "2RzBypSvhk17uiUrVTk1tdCXpSGKhWewuXywy9AyQ69C8TU7vc6ZRUuhmijava3hSLQifuoQKGxfLXKQqfmMntkz",
  "key26": "5wkXmz8VgbLmkB8NWf1FiooipkBbu61aMXbz2p5Bc2LHMX1hhw5ZTMT8GicxLs5gURGHVSWi2D3geHHQjjanvN7w",
  "key27": "3rRrvkVLGnj4RiD3gZRG2FBkMN6Po79idAzbY6yCp1UMrmT2yVK3KBnb564at3DkAa7ny1y4hVurWNGf8pRcTrt4",
  "key28": "4sKsmZxxDBix4aw6iJtVNDixzpYoftGt2bhmFTn6jMVsRyk2byhRL2ZytFe88YELoqc7tgqyXFjZfbmKgzoc4YGx",
  "key29": "4VKDa6T9v7RyFXdfVzw8dZHDCiXcGQNpTu4dUtWPFYfBVvJxVMvrWwpKgN3mmbRqBj44AnThPbdb4B2LDnU3AEvn",
  "key30": "3AaRdpBHfkiR3TxQjthbiqDeZb7A93J4e2HM8fJwBbG6sqcTg4FFDjDVhdRQbujh7JCBCC1o9Phek1dfTCb6hB4e",
  "key31": "3TAMyGAcAgbqQqzhNZryXTGbjGg7eU9TNCyEpVq2PBokP1qr16VT4kL7CZhnTUjhAW1eLKfVYBGtEZBg1CUc8kYt"
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
