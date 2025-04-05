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
    "4KpeoDjXaBYHSgNbX8krSUfAjb8Tyuwt1NGtcNdDewDJD3VitQ7ZvmjPZ9UqSbCiJJvz1B6c6mtik5S8PqCd3Rd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ExTSu16SpB4MkykopaL3EnTM6oSk3HGh34Koz23kia9jRanxPSjgwzd2PPmfRDuS13NtSw7ffivzB4eArBC57b",
  "key1": "e89qDRytD7ZEktfdMv6rWLnwy41aQey7nNCW11mzGvqDVD57XpgrM4f6Pd9dLLYbxt4NmNZ2rUT59wdjwJGg4GC",
  "key2": "AEgbWWWfydHLhnNRuvuxc8y66PeE49HHoxx5br5dgKrjXDgyv86CXi76j6AzR3CDYV5EmMdAzWdrwVgBFZV27Qy",
  "key3": "4vUV4kEhH5K7aQGUy3Fw1GsiocfNf8ptTvzUVU4gnzFPgykibwZYWWBqmhXpfDSUfwPAJXY8qQvSryZxFn9WCyEd",
  "key4": "51nMgPyEkF3Wp1QRTqmvZkjVKkgNY6ros5tUBHEQktYfsdR55Gnx96NrpzgRfz6LpKuxaS8mUSRUz1vJuf6sCq1W",
  "key5": "4vUcYezzAVY9dbkEi5ziAxJo6Qb3VnFWrMxxwEfh2PnFvo4H6sJAUVKNnnAtMv1YAJjR5rn4StT3cDo4oJvHtn4x",
  "key6": "3VjVpSbSxoN1p1ofVwXmhBZWrqFgzMQuezpBrGmSJHLivFG6Z91W3SuQv9v2oJ6QKAPf1z1qrUgnYQxYJJHg32RK",
  "key7": "354GrwsVSD8tFcFZbAVQiCRHS67Xj6aiaguqEDGWFdQRrfDjP6gdHDZ2ERDQATLGH4o7twvQtwhXTcECPggoyg1G",
  "key8": "PqttfVaPEyAtdrUXJqhymY5bpaQYi9VCNV3YMuf7qzbhC9tWBCueY1AnsRUXKeNsnGd9SXgrmKmc8t3hiC6wLRc",
  "key9": "47LbpkPQCKBLbB56bV49QhFCwutDuAPFHKXcXbYAxDKK1kRBY2F3wXyfHdC3qYQ1dbzeMbcZFoZ61F1UuL7YRbdT",
  "key10": "nBtfSsgGD7MWrWdwM45FdVLDopdJHxJTaxRGtwCcPL7YSg1XXnpNwLgkk5YUqF3XHWZ232XNHQNU6r8mFuxxY9y",
  "key11": "3J9j2CFEGYPNVoeyRXHpvjGFMuWUdE1vVAqUR3BGcp4YAtn8znLdoQ2toFDGx3AwaN9t31GD6jm2Rq6yfW3ueteF",
  "key12": "5EuBGCnqU42VqmaGVEwwC5b72nnLmhE4xSdVpSnzwnubhUVYRZL5ZfKx1srdwjkJFiLDmDE4qQxPVtSw1sbLQpQd",
  "key13": "5ieC1BPPUYDjYqbAD5z5BasoyDmGRQwxApipK4nLKRYE56rtiKX8vSQ1zKUa6kLjLCMn6tShESMgSEm1SMM4Bz1B",
  "key14": "QzZb7H1ajuM7TCPgcbnLndQBLoFRQ552BgC3KQjhfxYP6VXPNzZDLDSU1GWzxNSp8GpVGh11a3TbQmR2Dmvj3mw",
  "key15": "3R586PTSbcQVkXUe1PqGXiBzvan4icKXJa8aRgvKH1FF6do1xQz5H6d6Kemh1WA9BdjD52Ek9vEJqVBN5vbaRe5",
  "key16": "46c2uujYNdkwte8RknCKropPb3VKxsXJgL1UXm7XVupobYVRgNdphFANCz36JBdHweUkgk1AP4PshNepKyqRpPTW",
  "key17": "4STHV53otsPWYkxGoKqtuQtrGA9WgcrANTX74T3VqVAPfWUUHdpRoLvNwaW3pxesDHictDrXCig9tZt6bP3eZEmJ",
  "key18": "4YL1Ui5xYdQ8KHRPKNoG53jWQw8vbXCfUVJKWEjrGPGdiwou8yusQozQRxH9UD3YTA6MXYt1cF3zmEfk8hzuXdxn",
  "key19": "5B7PZeerHxrnArsv6ZBwH2FpTZsqYDVAXrbfpP1wKnqvYVJZcpye7DffJq6y4PdpRsq85TqzZvjVf9Gtog31FMzn",
  "key20": "NrBA9JDx8N1Umds37H17Zf4V5B7ttZyVE7vX9TtHJhYFScuGM7FcU2v3Hcu1XAPGgwdJtjVEtURsXNsiSd5nHUq",
  "key21": "2hfwwa9DL1PN1PnGfQoHtNL8Xfs3rdyBYZi6nSAGdjefQHT6LjLmLCvwm3w995Mq7tSZ7WXXxbnh5P49gHHxP4JS",
  "key22": "55iiviYdTPctaSg8qAxe7yJMFWf1bSV93cRGnK2UkXUVHKzTaKHHMadnpXodAUbbKv7kmcXLxffXQ72o3T6591RW",
  "key23": "567k3g7VSfEQLVSuA84Ashvb2ucw1Whzdox1g9PFoyNVgT6DvYb5RGG5yHkVUkFoXR4hJMr9fqxCiv7L7bV7tJdm",
  "key24": "3gZR1HZPLHxkYwUfqTLVH5F2Qoe9oT7u6sthdVirAfdughuFa66UUkK43C65ETBFQXBoZQpra3Lsn6LbFdaFQMUL",
  "key25": "3QYTF8s7TCBaP8AHRrDRLJLUP4Gk9EKat4vVk7ZpqB5M5pvsSeupnt61qkD8xkB1shPGf72X5Ga3gYDgCv7thHgF",
  "key26": "3DbkNRdSR1ndkYhjqPevhNXgAKQQ6CB4F3L2TBiFTg5fL6NAuiHoBbcY5FFCxepUr2D5LZPQX5XZghiLrvxrZXwC",
  "key27": "3uTy7Kcp49eYbP9ekcqjyrXMoGMn1dDh3D956c6ajXZawk1PgbYKTjoinBzmTQTuuMScwHCS8Er5hNxG9WRzrmCb"
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
