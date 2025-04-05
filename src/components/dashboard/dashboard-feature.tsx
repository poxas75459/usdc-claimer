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
    "2FbXx6k6FBygxmt6qHmaxz8AqNEFmmZfhrLKQxFoxx92yXxo8c97UqbEgd95wsgCX41cn2wfRAfBvJyZEp1VTJcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J32N2nixTTPY5UqPhKvZGEj6fw1EYLrm39vWpV5RH8brxGSyKcnYrDeJufhNBFYrniuYJp5QHPEAkZFVywJZNPL",
  "key1": "5S7Uffc5z9vtjB4pJ7qUVo1dKuS3NJho4wkWyXvgeaaLxUiN2KyLYYJTBRnY29otKMbaMMfK3XRqjTEyb3Jvv6jx",
  "key2": "2Uwmr9NhSGLoQnMtJahQ6ni9MB8HvJSCAYpXQbZNBh6cTNKWdHS1MFHKeFtXY2GzsJsR15Uf9NyJdHvdQ6mZCJvZ",
  "key3": "2S8yHFvcqwYxGHRiGU1Sn88GRyCmEkKTXxC8H8tqBpz4aFnnJ4R1LdwXwZiVAtMCau5SyZy76QEYwXRBEcy1A8cq",
  "key4": "M6qvSUvBWqN2oCJEdbQpgcQspTvHmMaRzf9tDUcXSbedzzz5dxAHmvaLN9sS7WaDBLryBvs4DkuxEmcrBJgb3BJ",
  "key5": "5Dnd6R82GLtS9xTcsZ5UnXd8ZWX3rb9kqEdi57EHBg2RDF1rusrpsgt37eMPoRU5UcQsJveAFAqTb94Di7YZm2k7",
  "key6": "bT8GsT3fdK3B5yuyunLiZLMxL2gRjzc8Ru4nLNKcwkQujtHsRsedLzFENCSgiJ829ApLUfn3FvsJB8p2DSL7ho3",
  "key7": "5ppa3RTfvnrGDKpfQn6jVt58TZKgyxUhP7KRXVd3EcDVUGSau4GGQCdq1HzazDWVHdrsT94zXggUgL5BJeXFEYyq",
  "key8": "2sLNWPbP9ZnXVeo7UbxKzsGmm8GzQBMLj8cuhfGtvqzNAsxrPdPbKHsfq6n8qgGhxkVR9Hn7amvzALXR3mmA6qNY",
  "key9": "4mZYN7aokGq2uGAjqCuw2ou3Su6JHiExweWLWmpz3vF9sbW5fopwSet8ryA9tdE7ioqD1T3DHdHxmJ8qsJzg1xR3",
  "key10": "46coBCRxiybqBTovafGhToMPpwzFBVTveTi9MGixYFdQP9u2TG6vR1VaspYBQd6tfRvGwRax8V6q3KKFLf9q9TuE",
  "key11": "4S5L2UkbAzFwbTubyREagLTKMeE1ZmC6Mi7SUJGe5XxtJaX7d6ZV9oy57zqjJQmAMN13fdU35xHJ6fxK2eh8rcva",
  "key12": "2vq8DC5TB6h8dt43yKh2tDFdYE8zNrEcwAJSySFqt1pva2L79ouhrHqxRvbd693wufahPED4FVyvQSx12U1GE15X",
  "key13": "4GSqJQEZPdYcN32zucU3HXGFHtos4y6VKgGGbUxnCUyQ4mNfsV68dKpKvcsZULXFnGFrPMKw8YtUytmvRkwVQAXJ",
  "key14": "4iAE2kUrdmXo13MBN9pzLLMYryqYQP7GoMptvEAaqPQapjGjVyBvRzLDt81dipF9wxUycFQyEDYBx1JX6jsnrGju",
  "key15": "4wwRM5jfdDv6zDGPtgkZbADR9n8GK8SQZjexLxcS6VfhJSxcYUa2dViuQVCkZFyyhmFozpngzgTs9z7HynFuXXEA",
  "key16": "4WMFGqRQyjWS4jK3UPQugrLjBTDRHExUfarYGms3BPjeF5DYgVzAcDQPn6g1yJWgFazCepTkRagETcBvUMNrPa4m",
  "key17": "sFMBT8RdrRkxGEVy834TV4EpS3F7ejpe8v9NPmSSaCRrWpVtQm6bQHYRjufuBEXJurq7mMhoixfTVLCghdX5BUv",
  "key18": "24zRCDu6gKtis5m7mWQKWpeyujk82nnuTt8HcyLB5yXWRX71nrLfeRKK1UaFyW143trudAfpfUr5BFhVf1ERtigg",
  "key19": "238XtpYAcwbC1AyyR4huRAK4Z64kANY6Xcer4G5pf5w31Z5XouGV9TbwCv2DrhpBv7ruCavhEiuFM2xfggb58ViQ",
  "key20": "39TrfxypP6Fb9VuAM68pNCXnsBPFWPyK1Kgn3KLwjYBdk1DDTqg1GhbBU1s2dzHqCgA4TkRGhxunrKn3aMqdzbQJ",
  "key21": "zgyu4eBkhBkVKRRyzRiNB3g967uWRfDyw2Tdm819S6fsci3Bs8QaSkYXH2u8J36sqTWEBaTtGRUnuKgZGctaShh",
  "key22": "2dNHhyHZP8VaJXyDjNscWbZ1ypXmrPe8EqA9NZAyHP6VutnXjsF6FRGzH8HKe69WxS9dqWediEga2xqtAFA3mqM5",
  "key23": "4FuvTHXHxdHBjA5qsHb46CghJ6G5Ya3GPFBaB13iJBpHcc6cDXLRNwi9FFCWVc1NfqRun7RMjy7pzWQEg1iDiRpy",
  "key24": "2gwtvLZzhHXkmD7DHfDpMbTrKcfiYcmVcuVyaeJiP3V223GusJRMDcWvoYWCYQjPHAUqvrdtbymDzzGseXn3D4Cw",
  "key25": "5xFiZS4ctNCQCNsHKomAAZG82NbDoPGSjNiVAz3t2W69nTZBonp1hcxxU6kVrRXrDChA1Gc5omAGUz5nDViEsxdJ",
  "key26": "5gLZSu2zBYZ18vFngUospJjJGQvrzSsp2vqFBRVARDKmWMoEqQBnR4xM3oTC6G3H8xkq6TBSfeTsfBnUj4eEVwL9",
  "key27": "4t3rimscRfirafNLkk7tR18RNgS7NmUDcWnGY4N6WSnrqVFkFpYj2bMqpyiCG6rNJYAvRiURYBQPxFErY3KocH5J",
  "key28": "5MxKfWGvSYh5rqqtxiifdEhCw5ts54GkMwAVDm6RNatxwSpnfmkiNNNdYdW4ZqBo968V3sVD4B5xy1pwwkrYFTpT",
  "key29": "5F2ctMrrd51LDPBj745P1LDMLZbQth1HidYDeKFipcHVKMhC7LkpGTXpZswre5S57MMipSMZDNpbuubaa83zF2PL",
  "key30": "4rZCc8qoBKt39DiEdFWfrypPyqW2oi4ESYAzGaP7wRqmo2PWsSYJ3Xr8D35dxTyexoJYNK5toYShb7aWXr2g726n",
  "key31": "5GT3kao3g8V8ALwabyHv5frbRTte5Mw2v9WMJHLEf636EKK4JqWYwdDFkpEV3oYFddmZoqh488SuQu7jrFeS2xz1",
  "key32": "5m8PJHGeDsXHhvt2y1SXMxAfmTAHA6gUK1aJfnnVaEUUqov6iheShqvfKZPvDoFkq7UJ2NbGfHVrBHKLQxqSF7Yk",
  "key33": "2vsYcCBGNU87nxkshgAb9iZ7152eH4szunyqBgurouwujEC5XCS1ZsGMa7HRKXnkYwVmZXxbSL9ottTDLhiW1iV4"
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
