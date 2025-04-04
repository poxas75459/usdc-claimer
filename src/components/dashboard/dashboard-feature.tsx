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
    "iNDzKhgqMm2zBofgaaG6e5HcerSTJZVGtz7CNcE7LDAtCKs7CYWuA1iqUcRsqVu6MXoguTFue5BnVcn5F6CKhkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYC11mRSFJfxQadygjCjcw97LEuf5jfsvT9yf2Wjx3zczR5tjshp7GHrPBweYiQiLTPj82DKuTbvsSPNpJn5dks",
  "key1": "BfKwUaEFyC9MVSiP7hecTQvQb1cHULp8bD1dbjVzWJ6TDdHEq1StgK8g1FmsU1XqFsMy9L8nvkz2Z7PHD8aLMgT",
  "key2": "3zYThE5SY6eUWNvbf8ZJWNhQLrPJtHDP4DUKmvce59bEeTRdMSSZkjMKLAwWigJ6RbvmmCb2gARsnk829Pt2DNF9",
  "key3": "5ZPk33Xs49XDGiqdzBY8HQihTPiH5isG8n3XLqPq8dwjMjchTAK78JVh1N9M3orYcrDREUgRbatBekS8WuCrFMQk",
  "key4": "5Dct6dYnxu22TDHmgBXQRBeEu9pFfUCShXFe3tBFuXRvZSwuBCtACKaqAPHDNLMBowiPGSBSwvQi2SBfmgCr2wa4",
  "key5": "2kG6vkUfLBQaooQVCNVPoUejoVSZxpWC3ZpEomwCKAFG6cKB1pTjNokF7D9Muk6fLda7GTQL9YoqCm8j9pnozKyt",
  "key6": "gtvRrHGnsWmXYRj5DUu6Smdnuvthpa7R7MNzBxNco1way4zGvXFoLBiBGLbrxPJXTdc7htCEGZV13MsUCARNoeR",
  "key7": "4aWvx8ikyd4DPSGVucJQYLMRJQjPCMUCqtwUhNHcbyib1axvkNfoQ5HLDfM3Gbr1ZRdPMLxMYbcggcasf6xcKpmw",
  "key8": "HZjyTCtjS9rgbc848RbzR8ZyZahfkSG7Qr68DuJxaqLmyiEd6pJgRW7atSgeKKD54TwLvtqTLkFgYoMCTiHjkjJ",
  "key9": "5tBynvx7A7mKoVBdmJPnNdgPx9zXBA9A8snVZg5LJ4nHxcr2nbqVbDFcGtvdRpoyiaFLR3hq6Yfe75booJ7UAhMF",
  "key10": "5AjmNG2kTVNnSpw1owuZqKQcusDXK7KetkhAgEjhmbdCSXbAeeaTGYixJX5PGr2rdbnX3qYteo5m2fZoMdk3ajJk",
  "key11": "MKQxq6XHvdyLbCsAGUN5Tuf7MBoFuKCjFigQw5xahua2TmK5r7Af6NTQJm6vfozm5KqdJ5qUFtmXdinuiF3qyWN",
  "key12": "VXjtTueeJeVBkigncDk4kqXvJZUx1JtemebN8TRJEsiZ6HqLSgP1p1mwM7THZJubssuEDDaNWXDGaV8nN3vwujg",
  "key13": "aft7oyMkWDGxQL95WmBBDQnxASS2jNneMq9Nw6cbhNi4WqFjtpW1XPC6CJMXZ2JD5nyNMbJJ54qfdKZ7gTSgdtM",
  "key14": "48G6HrWd53fLUMiHis2RaNuatqvX7reBmt9SpntN9aMAyr1WU13sy82Qgc2KTmoGzmpx5fAtqRxy3Pm2GEE4dVdx",
  "key15": "2LacLkLyGwpkh5ycS6kWyEo6eKmefdJqdWebAsQQh5UqZub9TB6Fpvk6NXkgw86s2Pndr3czj8sb2t4tSeqYWaWq",
  "key16": "53nKcRVMexYPzYVRFBv35FzjPe1Zc2sLuKnNnqSPXJsgDzLZVePLZ83nqrMWBweJvkhpDrDshCLo2P3DusqHNRNE",
  "key17": "4aCut3T5PpML5JaE559urQ3tneNAPSSUnEShzaf7irBxrpFxWFhuKYq7P6pPmQfU551qkKUXcUMrcYMZMRFYK7Pu",
  "key18": "4RqmHPgvCqo5Le3cADjsQvRmqZovdWNCnAY4D8aDpmuRioaZJDqTNVomDVkCPxEPNKk1pu6S1nYJ9cRf2iRxsyFq",
  "key19": "2J58QoU5w3oXP4QYgohDZdxfDNtyfzJmvB2VbTwgPEArJbcKo5GcS1kkzyvkr42NXxcnHLA2pPpMTmS37R4ZHtoK",
  "key20": "5EBND6ziGEqo6Xu2TDj4zdUpP3aASKMhaynmvswv5EhyHWrW6CuMHNAgfGTUPhZ5hDyxdPjuh1tN9JjiXSrwkNbU",
  "key21": "hHoKkdDSYnB7vkye2v1nVQEoCQYN56VnUDbtx3i2FnKbURSL6nYCMmeteNm3bCdBHzU7BqUgokSN7G55CrEuxy7",
  "key22": "5m7iEZEd86huyjAiGtLiyjR7HtcrPxVmEm8wzujZMp7QR7wZ2ueqBmeiyYVFzBQrUtRHLVL2YJvz8UQCVbhnGd8W",
  "key23": "4VTtLw6xUNk1EDFGwnUpYdrjDR4tmrrVBk2xZpwqMAVNiss3hPJBNXXaEEWwMCMtJQ6YkGA4Q5BhAA6YC6o2C8dX",
  "key24": "47CEuAfR55hr21X1MaatmyjYXT4hZWLDtBcPWq9oZzzM1smidd44tZLmcyMMhw2jpeEAoC8pj5TXarxMx76rd4dc",
  "key25": "2gbid65yDiapZ8B4Z6LjDWk8F4Rw94LP2iU9hbRmFkfjAxTgJzaSuD4WzzbKi82qTc2mSAmAvvghbEPBmGjFsadt",
  "key26": "3VagSbHXsiqaKfSheZN9TGJewaZuPq1Jj5Q1XjRohtBHtJab2kJjA3THc8HtZ4jozLBe3Xs2VPypQ9WNuWYhcQyD",
  "key27": "5HrJcNP64ggRJWWDKzifU6oYN9TgXM8mk9DQXgudUxqLap3xaGtQMzzR3nTRpjKhufJVtkxepFzX3VyXKARg3GG8",
  "key28": "5gCdUppQgUUhxt1DcxBCRGyv7M4cCM3YYBAsjvaq3NPosKBwUmUvxfwiGU12D5cXgdGsiU8umNgu8jVSRVEYMBT5"
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
