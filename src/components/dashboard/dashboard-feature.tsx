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
    "2iRUW7ywQLmCEZyKBePm5px3idWQXxkTipcnp6veLiwk3XJdCDzamAngRYNTzSVGR9YF2mhgceTUJhiLi3oBbGMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aoD94N3BNRNH4FmbBzsvDaqwbcx1Mmzrt918zxAT3XZFo4hD6bM4MRn4j1SQ4FTt9mBeMk28jqiNA9zZFMDrVH4",
  "key1": "5w7sij9Kq54pA7YKkKiR4zzZkPnf5Bw4Zr1PuArs4gniRRScJdZfhzcXokfFTDaBppxvmwjZ2HZzZtkk4ghd8XkJ",
  "key2": "3wXBruUqi4RRKzcVgYKjaUMc6zkEVbuF55gAuDBbLvg39ZVLrcRMF3DmugpYcQ1iPFaru4iDGts7sevX96ZayxEf",
  "key3": "hJ198UKTpUz44QYDayN3H4SgXsRv7fCB8A7vNYpH9bif6W5FcxP9sMAPw8UAmhT3JEb4brZRBa4btJAtU9EvVGm",
  "key4": "5EjhVusosiZXy88LvXafQuA3sPQidwdCyNUzfpynt1Ds6hvmeUWMKvG7YdPH7gaiBruKyWPYehn3WcE3tvkvbvDD",
  "key5": "5ZAQQq5yDKzLquCCsA83KtroxRr4oA4JcXoz3BA6kr6cMwoFhf7D3wD7xBF19soZFcadiwMwB5DgeoJEUYThWsy2",
  "key6": "2Hargjjb5ZEBvK4QbiEVxeJHdrg6y7mzsG7TVR1uXBtGSMGUDfvasmZifjFNCP9JE1nqq76B432TSxSiM817TXFA",
  "key7": "XrmtVLNysE5XgamzACQBF48wuKMU7zV2yo88wNkvkrH5nW9VZAMjfx67vrRvARbicC3JYC87rif4wXKoZfcKVEo",
  "key8": "32xVdyEVPbaTmdnHFKyFo5xXzQqDzvkWTmYjr86bge375bY4an4FXfBqvBub6PE983ZdcgyUVSUH5QAMFbnKfJnJ",
  "key9": "Bj7syvy3V92GLvexJM7VuBD9JRXFJD3d4rJVY2mhJsysiQRPT4w2xopX4HD4jTLVFhzhbPZpRJX8mFGkaDUEZBu",
  "key10": "5RgGNiDDyW3tqad5brUpvVxTUiioLJWPAS194kkSfvPhYUmccQT8PRDw7ZiDhzFGfMzyZ7dfi8CBxSVugtXzSbwu",
  "key11": "N1z1mp1usT7pV8avcq3VyJeBkHYD3eMVuqXsGmmbugmAygTQxBC5qJ8HmHh82mjaZCk9qGP7ynZQpaNXv9fjd8n",
  "key12": "3cubEcrpnn1cB5CN7v2KE1we5w3BQo4YamEJhHe6ZqbmSN8hmT8hyW8eWhA6JPHidwojM9PJPzTeRYhULjeG7Tfd",
  "key13": "5bsHLLBFcw5N2FiPVU5z3QD8CiQjAuByVTxZrCcvdoXQKBAjPegTPMaWRkzNLHopWxTWvHXbBTbN9e8SQmfHjVsk",
  "key14": "2HHhEXmAQLSPLoA1fnZwp1dtf4ZJg9GhtApvrud17Di9AhHX8MXnCvfvVJ8nFkYmomQDKFBq3xvC1Rn5zMKtG94e",
  "key15": "2ZAcErH6FpegFruGzd7EH7q6s2BNfAQ8BxaYb14RFMbz2vtzhqXYua3udnHAnTpDFd54V1tCZ96NEEgor4tApn7s",
  "key16": "5WTPoNQ8PJ9XSyabawvgyYYDVbh1uuLuQhe3Ab9ku6rYFGgHjb5UUALCAHB1P47L5pZm7zE4shr3QhKS2pevxvnU",
  "key17": "3FJEDDLQWZknK4i6gq2RBYzwfULpCVaBmf48cAerKuJYDN8zkTXzZPTVeW4hADEXq9eBZrdZiJwPjsKpWrzChbsx",
  "key18": "4PWA6nEzV7MbZsiu46qXmWU1uQYwUdR66cKrS7dkfs1QxANiCnSvQqAASjGqP7TFVnXnchdo2sCtRNRHgAbt7jCc",
  "key19": "dnc3z2CifqonrhsumUUA9YgsTuo8eRcPsY5PUthgBREE8X21dEtJeV5U74nU1eoiEkYArvDHPetjiUZG8ub9G4o",
  "key20": "57nVKGAMTCCnJG4EUwj6q45yn8TgRwfFmswdDdDZofJ3Ae7JgSo5ApNrMKH1TTQJei3TJYHwsRVWtqf1AanamjAP",
  "key21": "57QhYt1DFqFrUZ23JcT1qxbUgwJAZsSBTQNc7DUJWEwcq1PLEdtvzUELJ7C13ZfQgzx9qznXeukuAQ5nVKBd6JW9",
  "key22": "4css6TgwgpTguWoqXPfnnm5FjCAEqx4bYuDqk2u74g66tm2qyuVDcLkregZBdBddqsik93BtsD9u6JMNaYJDX9Bs",
  "key23": "4q6PFH6X1X4uZ4TYN16yYUqhq1TkwpzA2zstPWXY5yBX2FvUUowQ7z5PzSRAnNWTuaDMpzhW1WeQyPjvJut4kW8N",
  "key24": "2foqGwuF2nPaFySqzF78wgHbvatZY8gf33jhZpCRx3SgeZE9JRtSdRk1R3BZEEry8LoBZYtL3xKCB7vhDuZ1Ge81",
  "key25": "3QhG4vKwFaj7s28FEPjMXoU8YV6d5sGvazfWjAN4ppUoP2bHyd4kYJQVkBAmzHGGsMuyLMGAyKRDvcUuZkLLmB7U",
  "key26": "9H9roZT5t4eVRFdRY5cvwjbHz5kxyBAASqhz47bRWtbt22GStkRC1wV5je1E5nZNfszqvpRxPcckqDWNh6sqMip",
  "key27": "Lf6q6cXexFU5BWxNjAizyL42fttyWNc2PYk1oU18eZ4tFEEvUeBQbyQBYEBpfM72uk6iDFY5hUEUbVaQ9tyniXf",
  "key28": "uQELizdSTm7p6JUWjL6pA8psHBmrXLUqfaX1fiANStejd2E9StXrmqcrmmGhRag3dYDMpWgHnZYvfoWBAvTtMm9",
  "key29": "3dj4YwsBvcosNhpX3HMLTMpXSrmQfgEnNqxn23j1Pjw2jgeQ3fuJusTc4Df1xLM1V1HWH1WnqyyAhQRed3x9ytBm",
  "key30": "2RB8fpPoWUHfuU5VHrJrUcmWW9SLR4vPJ8HS3y7TruJXa66HLryN6tWEBJTUVncxg6uV8omCBBWYbxgEhLk4XYum",
  "key31": "4ycT7FHN7L2TGbrxivYodFQKsEH12N9UMAGZX4AnJVmM2NZ4CTZkJWUk6Gjwvag7wYxyFKNouMntRdtqZRWm9hHr",
  "key32": "5nR7grztC41GpAFLjp3f32mKWNC7g2eoqhi9JU8yT9f4aw5YfbMAywxbrE7MkLBSgWULWTQDc4mocfWQSDujnXyp",
  "key33": "48Jv6iF8NWED6ziWwqYatY1PSmsXdui3obk6AkQZ4EYRGGgG1BHNSa3kfAEoJax4aDUvHhJrn2huiZxC8y2xeQxD",
  "key34": "5hwPcf5vPNNZKmfHKD848CQPeTsihtLXynmphZXjmwqq2otX2GNXEKXqDXknyhVaK9mgh1LFgrhkdXouQeESUmms"
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
