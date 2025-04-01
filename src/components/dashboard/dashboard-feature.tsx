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
    "3YZe2198tTFG8wETBSrsbxtbrnzXQB21X4Y4aEAnuPihc4vUm2cZVn4cz3HiJY7v2fvyzoDrWWrvmg5xEbESdF3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSHGg6JSSSTfgGPu37qK22ddjWSDX1t5PdzfbthXutx7Su6GQ6wfRPu1acB3XzELxunBGxUhL4uDD5ppRdJUE6d",
  "key1": "25Xr1bv8BETnw7Kx8KdsRCusLKNZiBsQqrGfWnegyVdxsigmQe8ymTy5CA1UL6aPgGojcGBJTMAMqnynFSwpQLCY",
  "key2": "5VKh4kzjpCt39S38AbWXW3iBbJnQKUkRuJWnBYagr924dWJVXMbnpiDkdCL7h42sgz4k72wGLuheepLwmpa1nV19",
  "key3": "3u8oZaN9XSK3MdhJhcEkzXJpV491sJRHxwaqmexvZXH2fk7b9Hg8SqBSyUueb2L6ovKK8kVZaG7HfnZiuEZokg6V",
  "key4": "26d1EDt2c9DtDdNkjK3RvvfLVjLQ2nJMaUeXSnNQKADBuWtA7PFFfPiJqe1ipdwJHtCPdQ7YJL5wbfyrAeag5yAp",
  "key5": "2X2RncSqn6vbd3rqaYjQCK4RSUiKuqUpFz5FmgaBMGeNMZVyWV8crtdBU9kNsWDiQmLcfv79XoA6rQ54tpHCRUWZ",
  "key6": "55SCmZB2jPQ9YgrnY1nUssTYjE5kuiKzowzv14LyBqm86m8DnNp2ASaexTYeiCef4FfduDi91dnbaesNPkA2Mr5d",
  "key7": "4BF4ypsEVuNT84Uw7vykpoWoBcn1AwxtB2Vdu6KpSbiNupFmiJZTE4wbiktpwt8qYLAriPj4ukA7i7MhGXcNAibv",
  "key8": "25rUcr4EtmthEwVsrU2hex1sDQNXChJxpzrL2NNrCf3yUKnx2FKbdiFGisBRbHEqVeNByefF5kNUFb7L268JTANF",
  "key9": "38x5xZxrxo41YDLh4Z6qtZsUhBftos3pgrJe3TDy1jetgzS4dM9ujCbf9q2fmtjceGRKogSknTsbcxdM8cNEJm7A",
  "key10": "55XViZpxHLt4YvogL4jc65VcDybbYfK3J68oUR1nTrfNTHw74ZomqEHqbSqEVjeoNGxVrDzzEBFQWbsuV5RGSjG3",
  "key11": "2W9RxQYSu5KceyRhNDWBuvxm983pPNpxG6T258urx4USZaFi1R3EZpBuMMM1e1fRD2knaqXMsmg2dbMsn8cL6aFH",
  "key12": "4irsBCvhVFtgRLaik3oLfnQwF9mZBxZGjStqyLquLMB3S66UhLYcLT2HqFfxpdmouYWTCHXkyiLkuqG86dioCLbm",
  "key13": "vrFvc61Ked78iV9kKaX31Qws2mKDarYV41fN1ZkFwCKRbRGa4EFcC7Uyrxf43dGqLkkbu57eDazLbY4fF5EcZQd",
  "key14": "5DGrnZrJud3KZZ2mgdP1NM6TNDPwmBPUdiSQktRUTXoo4YsU96XC1o53Qxa6m4Kj6kRrHjWJkBmioEYjPT8XppLE",
  "key15": "4Y9YjsLAWDNuHnaiyBq8nTGzEsEz1dTx4MtohzYx6s1uyovSeBTYTFsWTjiAv6QGdtk8Y2xmCM5Mu8w4DuP4kC6X",
  "key16": "2VsR6ELjH3ZEGjyn4xa5cbSoK9BEGaPueiqzeG7CjoXCytimsKjdP94Y36jb68zdT9daiHrJDVE7XA8VTXYWhs5Q",
  "key17": "2hbV9QEoQ3iGJCg95z3nejnyf7QKoSSUjXYPbQUWFFCXX64tqYFJKCaJr9Syfsrih6itXe94uB5b8TyRrd6qj1pr",
  "key18": "44DMfBYp97RbWnBSU6dANZn4HCdQ3zVCa1JgmtzogJxxUyVP6zf6LYPQhRNoUEgsMfgDwbPN2D4mX87xCavjX5nU",
  "key19": "2Yc11YtAzMXyP32JbtC3fcGoorL9C8983hCXsUZ3PtKZumi5jAREaHrXvDgfiEwBZfvP5J9GWk8YzPQosuBB5C5N",
  "key20": "2oZAv82wxRQhRp6bmghKwkEZrHEAYmMGwxKarnpPoFhzUe9X1iJCLE4skKjKECvi14vzGWu1YANs4YpCJKDFroYH",
  "key21": "4928xFVna9SzAHMtnQ4q9NhJNgryeMYQHD85fhRN3a7LZR3KCmS2xfNg5PeiCbm7vg3zh5BqCCzVN3NHgKZS98Ye",
  "key22": "2z2dGZhMt4WZqksxfgasBBxiPFvsaoj4XLwcA12ybQeinDq3cxWjYBcRVjixinHFL3QhrgYbWpTepRdwD4PCR5hR",
  "key23": "45hB7tufgQ76EXAxUQJLA1DjAvScW1wd1VdaRr5PuADPYKfoxNJDjgWxu72cgBZSgQFEyoKrn9H3XimdyeP8ir6y",
  "key24": "29DYeuyGpunCEJDRjEiyz5WBp3VLiTuFpet79PWrRSBnyt8RGTPyuh7ZvnaDAvvbe9BMJEHCuohhsWsTohdCUTfD",
  "key25": "26y463gZVCGnF5WVWS13VXTrz6GE5R62toQmptqD2BZqo1j6KHt2wZo8Rt3LSRGPUFJbgwTbX4Uy5UWKVwRuyeUm",
  "key26": "WTQ39BMsta1esa7fzARnZoGSEow3k8an1QjiAQtVWoPHEx6iSRSqf5etMDVfHKNHzVxGuEgQ3nq51jXrpSTF7yj",
  "key27": "3fz6bQefAscCauYWqaqqMPhD6de3bVNvzL4LTKFbkDdCnEq2udL3GeLXQYzgEVsKQc5qWv3PtFENNk8mxX83ueJo",
  "key28": "JaWNoUJriZfjF1HJW9BG8aUe7rDbvfaMxvEGUtPhqDt1LwZky696rB7RBJm9UKwnwinB4bSnEZ4ZzWX3uzyqYPJ",
  "key29": "5EJQKfW2qXRuhcghDpjAsQiTP3SuxvCKEyjJwqpxHuNT3adGyq4S3GKcB4MmXWVYZk3hV8XpR51GmD71VQFFhGRp",
  "key30": "24QzBNB23VggxzhEJGnFdAbEhZsj99DZS24WYkAaxDJjZQkMZYQqjxyaSDjR7nfhzs6invAyePcEA7t8HxSRRHg4",
  "key31": "5WfjKdTDEBzQKR2nySspZY53hEHY5PMv4K8QpUZMV836C6FibDdAaVEMthxfrakgHH2WzoTQWyfhFpjqzLkBEjZo",
  "key32": "4asmMxHUza3EbzJBRGJcEUJCS6abHSoTh44eJYWSvBrJMUbBivtNemVZV2KFKXCNrosEovbgPCjFwsTRjYa6Dogr",
  "key33": "24P5Z1QRdckkeMXt3ZAdMm1VaQ191pXQZ4TxvRHtfRH7bp3U5FpiCeuCF2N7GZsR12gke8sCriB7E4pDPMyo9BVj",
  "key34": "pjgS9vRxvTz11LLPKqNBPJVofkKWqqcaeHj3p9hApDWkj8B3dYy6G2LHDzoitmqgqrmu85bWe33p9RbSVPJrYch",
  "key35": "52ypfojAKuqv6mJGaAtsqMrKD119xnHunnNYTcHsxgGjj6iNtu4VCMgxgAiintFU3ZbV4K5yQhHP4GTJ9D9r1LV7",
  "key36": "31fqNAkekwK72ZEYWn6iiePYoEqq2sGJf3ogAMvPnPhEFgo3GoGCmAX8bkyQ7Uze9BphWxuodeHmxmZNi1ezqJ8s",
  "key37": "583JwjkTirKRcouZCUgi5eMx6PUBGxPLLE9smqH7GJZqoPBGoC4uN741hsqWL9tsBDjnmZxKFMDqKKjNdjfvPwcA"
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
