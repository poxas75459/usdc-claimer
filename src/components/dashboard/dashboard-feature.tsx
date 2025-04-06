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
    "3mLZyLmeBAxXMjEGVbA39s2KospAeTPdsTwkEqNvAST97vJEnuohSKX5qKULYqQFqEZEU95QVG3Anf4JAWGT22fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQZoztRarUL1gtLeAACoCFH444RoGzqQp4ZpCJ5HRu2sNSnimD6dccZjXEzQ83p41kKhG374LdaCc3DT6S2mnNL",
  "key1": "4oqBtuUWX1dmKXrNjEpjTLEUhvzADXUv7gvgJsHzXGBBQKyHXugJHextZCvD6TDTuBiw6ATvCHfRC53JVYKqVyhQ",
  "key2": "5b6Tnkp9aCMtsEnQTYES36754E2xuGa3HeQmUrHdqGY8NoVd1u1SGDCMrEUKK7jwPXizFBzuTnJBR2SPxfNhpgPr",
  "key3": "RJZEzx8LRR8rWEqEchFYD1Jb2JRoftpSVy6EiFLNQ9vbB4DsgCTVWEywkrCQ3ypFXe2weSdajqJdtu9WkyFLdin",
  "key4": "3wdsvxCXoHwFjFsMjXeMgHXCcZzRSDkGz1rEFgHKy8msP34KHx816Ms2owfHzRks5xRfDJsJLCJzDH7Zz18k4LaW",
  "key5": "3TG2pPeuksHw3uNAT6bm1DzDoic22yvCzNZhdW2jZ3gyAkdMQLVyYKUswVatsdWeiY1DNNUFGJKV3tfisikkiKtv",
  "key6": "2D9FoKNCy2jJabNA1YGcmid1f2QUgw4ZN2txQJzzkXc7oZ4PqkJxuixSZuR7rJceG4YzccDhkddH858HZSqpt666",
  "key7": "64j76pHt3gxpRri4EbLKFBVsEhMzpMhDESbWaiPmJSekD4Lp3jWh8h5rL1uQvuAgxYLgfdpA6fuL3NMrSS9w4ssK",
  "key8": "2Qeuxa8ur9Yw5M92HPE2rVvhaGe19Nt6GoiGkhKqkuZj2ByAo8NMAuoS9ZSEKeiTJJaeUWjafiar33bogNqHDu3m",
  "key9": "yE7K5VfrveK5sHC4shwfaRWmwbFEQte2inBCdA5qcvVxLiHHBjkb9ZtR5dAsK4y2cQ4RKMGcpbq3YNbSSeeMiuz",
  "key10": "4s3xmBwzTVLKkJQUEJQCatdC8yLw7F3DBrnWA5wyGFG5mEXkwnWjtuLZ1aZN61NfT81dMZziWDwsAwLixZWsFon9",
  "key11": "VdXXR1H47dXVQAV7cseisaeWretwZMr3nsbLYT1PgkEZkDrVM4gpkUppa6fPupG7vHbnj52MguD9Q679Dgpqj5g",
  "key12": "3ow7BFxP6DHdDXB3RYrBSSwDAtnPe15gkvHM4S3WHw3y7xYYhVVSSBn9mXiN7rRsquPu6C4tji2mLGJzTDJB32Vk",
  "key13": "4dKBCkjrozR5M5jhh1w5vYNmrFnUR4FcJ13ayv5gcwSYPJJY1BCivSJj7Ub1yQp1UBUDkTUeMWCcepVHixgpze5V",
  "key14": "26DZ2KGvNekH8963tRxRAZn8ujVQLJQU355JSzhHXEqbbkon8vgrhBRkrNYhuBSzSd5TSKDFib8umf2Js8QZrCaY",
  "key15": "cPMSE6QmKex8aL2Y8NVrFH7p9AJXsq5zxhcbXZX1bW4LUzN9oxf4eg9viXFxdE98QEBZbtJHskQ77PouhExBQ2M",
  "key16": "5PZK4oNEwcVPMTJMsVL5G4r52UBD91vFRNdKn54m94Qk2BxKPCiBeyoGy8voU7XeA15VZQK1hoAH7BNqfeHBz2o3",
  "key17": "AbFEcV7SbPWbPjQGhMNG4imNFZT7LU76K5MhtZG5hx787TfZEvoMS4CRRqAdLaSbmnuyRpozFZUkKCiVQPNRQ31",
  "key18": "5AP5fnjdoGwSSreUzpE27Ymxjt3pie9PrBTsi1h3Vij3kgPdNSSkN747NGSgMY7xVE5AZ298ALJcxgooPQQ8rerZ",
  "key19": "3Gi8WSc8pYUaS2eyvD1BfUxw1oEgoGJhVPrVEwPqpqLMTdcAe1zaXXCPdALhucx5j1zWAYwFMt8SiSw6VKuMuZUB",
  "key20": "U5pkoGfiJLa3BiQPgmx4xxFBq2QKxKKecPpwVCCJdZnoKt1212Z7SENQYQk6ZtASt5NmpRPsZz1Xg4KzQdkUmLq",
  "key21": "BmTBjXC6tcH3kMGw7mLa9tmy7kP6SiFiB1Zx7d2ma3n1ruhWpuXS5SAPUgMKBqGfmAaEmBTU54JVVYbaq5Q1RBK",
  "key22": "5sgfUBvdYG3p99BLYfLoSERJKkRrU8s2wc3PGHkv3jxCE2YwqtbGRwpS66e7tYUw9KYpvTZexeThejqfptX6w7by",
  "key23": "63SKcctmfBiv1d5gGv6sYSj9TjQgczo8mHSqmaGstZQu2p15dEAggS6pm8AJsFYEYLct6DTdppixnjtFTymsnWLL",
  "key24": "4emDZB39GAZkK6XH9LaZrirb8uC5fuNsPGv22idg6cFg8qQQKfmrAcCYTf1wiwYLaC7iT1P6EKRHNruEqdTEvbvC",
  "key25": "4uPot2rovn9teyZTiPxzC59Ep7uHuymghZeiKBpkY5JWdhWnSYFexVX7HGtA4oFyXpC8ChAgwjNRV5CbPC8TYoNN",
  "key26": "2ynN6bVF3hUrwLajTek7zJoAmhANZPcHnerzNqhC6NfzpvxRqCkz4YVYdGRJUhLRJjTu193znnF9kQvWERUtB4NB",
  "key27": "vR7zomniXgHUWCbnuh1pUTcCoFTv3Yn7LxQyU6zWyTBRLeHgb9LmfkWAvtZNwkjha6RofNkiW15npGSL3PUJYFi",
  "key28": "2yRiUz55KdYgu1YXRCEc6Q6pbBZ1PxWZ97rsVeSqgH9z7J4vdy9XWxDwHtd9AH4JWu85iTusnjvc7tEMccTXpzQv",
  "key29": "2UeNEXuhmbYvuZZTLhFike6DcTQjnA7gtL8gAUvMbxJ9j9NhYpwiE3Nco5Wy4vsYsmSDJmDSoStivSkEXysNxk6C",
  "key30": "PXG3b6qpbpkW9fYnbuxwN4KJLL5e4iAJ2NS4UFQEvRBGoaqVxXVkTMuP7RibHkRcCr8cCZyi3zTRZhVnVKsNo2S"
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
