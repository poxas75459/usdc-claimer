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
    "3YyFeLCPyyY2UY7HRusNs771kQZog9bDVAVzCML8vEbBwjBL4ZrPnbnaeGPdfvkNC3eHTC858GfmwPrXBu1XFoHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsoxFfD9Fp9Rwu9Je92XawTc5gKo5RwZdP7dQmNqvkyNbhGHoNuetVuPoyi2aQfwFDtaULJibGtXG5Lt4LdzhGF",
  "key1": "3Q674sFAmAU2nDsods3pZZMhP58MnWMNQNMSbP42EfG4ZsZYb6LsR3Lyr5Cmgiu1xUHzzAiC5VdWwmiJPyjG3m7v",
  "key2": "2TQQjizgnCgyR1nJ2tkT2UoXHUitNbCdfDyn7Zde8D38XjK5ScU8XeTUnm6tvs7o8htQ8ahNZFNdLZsvtuBsx7j9",
  "key3": "ZpkuodXi3KBftngkmiX7x2yt9nYfRwf2ZoNxzDTPPPXBZWyws4crpy5MvE8X6STbJbZnPjmZbz199YU2t3vPppq",
  "key4": "5tDKp3RnfDiQWycUueDP9tCAZjqLFfu4774VHezcpUxMGKKF8zcAFDMAKnZVH2B4u6s3FxUnFYttuP7QRAFi1qN4",
  "key5": "2KTPrgBxtoCTgspcev3oxf1CwXWhJ6BRvFupFz8ru6rPwYw1FNG9uwnE8dR91S5WR12ZV1wKPnf5YStLUwDJzy8v",
  "key6": "jz8bPofdaMNKB72QLiQxuycyv5NjAwJCMio2sHvGE96r4AtobF1fjhfsVRu23RzgfkKzJmQvZD6KxxcGVEh1JFV",
  "key7": "5kLodjUcBFYXUN9MuXFZhyvoiQd5YHVpdLmckkHmLTzsw5jBqzK1JijXftdbZM7spP2EB9tGN3vNBDezMZGqQL3Q",
  "key8": "37j5SmhwMYSRahZBPma1jbjnZ2xndBnxc44daaDZFYEHA5zjMMC97RsXw8cSWRuD1syU7BSF6n5xFaESbZDxPDwz",
  "key9": "5Fn2ji2fEUHNgFoB7SFEjGqVQzvcfkHnLewPKdHbYjZMq7wUF9hRUx6QTjJy18V4o8DPPjbqKnoiJUPdSK6Cjow5",
  "key10": "46oU9uFSinXjanGwHBc9vjyb2aYKFoWxV2GYJLzT5kskhMc29CdTjCqXmiWLYsXwugbPoSz93eBECkNQhNw4jKaz",
  "key11": "4JXDk6dej4aHzTbF8uC3rmzQMXAdh8YKEhJSAxxuxoSi35BiKhGZ79FzBxfBuC1MmWnRYFPV5Ec7SWU9NJoZdzH1",
  "key12": "3iZs16SwgybjzfmfZpgqsfArHZ5J7UptrZXWNqzKaU26uS8D2pAKMkd84qoAcNXXrrpegZDfiuuSkkDfg6xDPfA7",
  "key13": "4LbXtqDR3X72Fa5aJJWTeu91JVtFXWPDLdDT1akHbTczGDYKp4aNQjLgRDgaMnP1iwsWGEPCs869gFcWUbuB6kj8",
  "key14": "2u3fzjESWp5MiN1kzAvVg7aimrs4nGjxVJTJaCGjbiAqf34BVRPeYHVRj1j6oSNk48Sbrd3P4graDitAKpC8ZeTN",
  "key15": "287KqWzrt4io9DaYpFikKaKRtvhp9Jsg6rmJLjkhqq4zGrxtT4AmjBsg7piVWK6iSjCHvTEc3p6hvjPem7xaUYBC",
  "key16": "nrDz6EYVxCcHd7YRKQS5DKL9MgXhhhcDXpyatAdBYmvRp1Feut7aanHWuM3cwVhUpyo6WuQxXAqPmouJvKk5zBw",
  "key17": "XC6jM3sP1WsiWRr4gvvNEJ6oSY5N9Ab7nuL2svbzaHb7vLSqWbhgbVMcGitzB4v1ZGzre9jWkVcWgg2qUjbhb3q",
  "key18": "HumxYNS8sxqe3MmscdVuHvo8B4LVqexD7Tzz3DNYdMqWQDxmjBExmN5PUW23mrWT2Y78i7wMJiC7NCy33PnZRuL",
  "key19": "4Tsf3LLaGPZHYtLzSkayUL2ga8xfszSJ1MNQY2pKRBQJJ9Qr97Xf5Q4V7b5tXRxX4E7m7NULj7qJGuojJVd6VfdJ",
  "key20": "3MFpPhVQLFb5aPAt52usNsqH3EgV15atLNDvqVXrfkUpqi7BJN6tJw8tTm83C1tTsfRN7xn2G5VwoYcPt534Wkm",
  "key21": "32CmubH1GE6RFx5uk32vTvDkbQ6woNd1zsp6bNg97DK7RKdZSMHqoTBF9A5etuCSyXAVdHgqSLZVCfKYK9PeBQes",
  "key22": "2GEgu25eJweS3gFq3hYREKjYUGzYqns9EtiHY5Vq9nyMDwhWy34PLbfo5u6ymuBjWLEFhshk1r3McFeQ9TJUUFv",
  "key23": "5uYYC8kJ7T1cSfoJKPozm5FzXyY66hksgxMsuJZiPca4Jwo57Tt1ua4sHxvWytaUs6o6a9ApnJGHwjxVYdUArzjB",
  "key24": "35JZaMvDy8MG6RHH1yisqYZHT6JWhQb894uyGtSNPJQcSBAvMAmdqL7XhNYM72NCTVdwK5WtFpzaspRL7jhJ4A8u"
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
