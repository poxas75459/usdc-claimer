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
    "2vxVQ35hqdUYW2rMpCUQbxY5J8NegTDt42RRgUbFY8xd5WyWHnhResdbZmpRSG6CMVKbhyboUDRVgwPE4beKURgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHHdjo5hJaYHmqxunbzwcNipU3d6r2H9oubxz6kK3i8YffdiqRx5zN7GJPohaVdZppaF6WHKaFw4J3QKyX1jGsy",
  "key1": "5DbyoTdq9qMrhg9bUkGxycJJ3wbKwyczMUaeuNzpXWreuSkeA6KCpvxNBrprXRDi8dbg5bGVskyrhL1Ps3CofNXX",
  "key2": "241EtypNrTGq3CRLDQB87hECsBML1WS2wZZsDi1JWd7zCCMrrkvEmMuqxm7F9BCADmxVV3E4T9VB4yEeFGeHYkAp",
  "key3": "5EjUCWFuKF2faBp2PZTMfAaVfPEubh8cqMiLPAAvLPBdsLvtPYmBonkydJ24eDVSdz86xV4a8VmrGtTnda9mo4oG",
  "key4": "62XqUD5ZptS4sAYz6TfvaD6CP8qWs3NFwKKAe39JVhtVXKeDVWLh8GMJKrgPyXwFXxQxM94DTEAZUEp9rnq2dcQ5",
  "key5": "4n1FFXbeQzDhhfQBKvyNFpB6JT9BumRrnpDwf47v5JkJHRJnWC3QwuvgQwqDpsM1ncCEPRUSBmWstqeQoBfH1wCb",
  "key6": "4N27WdfezcocrCLMFegbqvM63WHNnkw3x3DfVhwWzQdZeJKhNZpmrEPpR4dX7MHMMHGZnmhj4WUV5QXgHYsmRKR5",
  "key7": "5vhcaq9kkSAdZMSDNNnWWED4eAQ3v6oqZmHUVLPpAQ4CEv6SJ1L7c2WPrFjfDBa6Lb1NBHdXQg7r1jQS24XxePab",
  "key8": "4bfmeMjxbhYLvhgVFvSA7dg5BSKPYEZoz33bvxkZQPBtBBBHPxtLK9wT3KcHxdsFBRyPFunZBZEB6tyYq4xcbK3t",
  "key9": "63hyiZmxTCZ9RGLVXRVNgZA4mB4eGZ23hyQraNxtnbEZptQDoNPc71wMD5uHXboY9raN7uvvuTDn5F3cWssccXrE",
  "key10": "512XRkQhckhjYFGQ9R9kcf9GBP7aL3K7W2xYbcmuW3YzcNjLUdrzhS8tcSSEfAUV218NKyAvrDGATkwDtqB4JYHL",
  "key11": "32ycPWjvWsU9CvwALrAzGHwn4aBxAJoCCqHJ3Lnh4DCcawe9YYEapmrQ92w99eaMs9PNYR47fvkrscA1QbGvCrXz",
  "key12": "33R2q2U8whv5TaYCj2t3TuMCCYL5pVke9hbfqPhTJ5nRc2kCyXSdgcTSiDUDBtEAfCcngn5exodSTKUJNtP2iNvy",
  "key13": "F3chrpFq4pAaN7aexzTTWnAs25nGAzXkmNeE5JrP8cHMHFdw7oNz1fkbmccwtfnwSZdQ2p5QsrnePWJpkYaa88e",
  "key14": "5t99sGhP336HhL6KDNmkm7EVaboJky6MHve6eoyrjhKWNjpSF3gQvEnLpaeVE4Aj7gnmaKfpKDyKNgZ7jsejhbL2",
  "key15": "4DwTqTCNEnGKugT2W16uXJgNTMd15nALHuuEVkMVfWHazqVwTJnAYRUQv4ocABxaSkLE4zafnA8YmZXUNZkMtute",
  "key16": "3LTudGN1w32zncRuJLrLhtX62XXJvAXjNvHG2mpDBo4HREzSoMN4V9qpqp912JxcS5QjxcXiPrVWB9jngJB15psd",
  "key17": "3W9UYsUEbbnGEMzbcHP9e4bWz5RiPD8bhvfT4xHTcJyYSU3gmb2o1xkq1ADMhjzVrEDa5SLtNbX2UZpnjPZTFqR6",
  "key18": "hkKVhTvSMU4hzYbrGaNmRqTTAM6J8C6n1TfZ5eBt5LMYBMGnU7AwjgDxyscL1JiZgu2zeLeAWHuSF29cuooj9wK",
  "key19": "33sNbDL9AA3NBDU3k3AxL7eRDnSTnoy95qNYYz3Avj99d2tw65u1pT5iLst1r6YY6MCx3aZmthcy9Xq9MjArk46a",
  "key20": "4jfZ1uLzDKKpG3JEsChdZ84q7zUZhWKLA2USe64hNMXpYCrg21gfQzETwchVkHouvUsjmN18KgWaT7zEmuKXfEiG",
  "key21": "ezoeDr2qpVrUKChEGG9cZ1tqoiKdce5G7egBKfcXFSWwLRrcaMDfaNHPZChUaCMmoMZkfep639HRGjRyzeYTgvt",
  "key22": "62N8wM985k8TB5JFp8ACFPhLtqQ7SFi21UkdA2taSj4yjwyUadVA9hUSkVBotyZHzuTZSFSoURedwzrdujBiuddm",
  "key23": "4SYJZ3bnNH2Fuisy27XwCNmCaS9ZSsaeU64Nbj12xqVzxiDG3z5T3dmqijRh1dKkd1BYJSepYr2pJozZr7vEEUGC",
  "key24": "62XNXe7xfov3N1GEsnSt6SDg13Uh3vic4HrhjaP2CbZ1tQ8t6PFC4oKMzxQq7mrd15iSfyvvghsRWL9fUAdmjV6Q",
  "key25": "51mQSbZqkSakfG6sQq9nn2yM16AGFydp5PwLpNnM45o9THysMW1kc7Ly5SPEjm1n1squL9FuBPv44ygpgjFsZsUx",
  "key26": "M4Dnk29tDYMRg37dPL8B2Zp4iwhhNEGoxdmeX2ABmahRhj9yeGErjaboeWNbMSur9YdZEKZM7tpT7UtpAJv7TQg",
  "key27": "2PvBtExN4hpR5kcok3m3QfT55cKknWB9UA4oaBS63fmeaKtf2FEa9jM3FT2fFyG1WPCtt5bqCUfj3oCX9tkAAvE4",
  "key28": "4NmiQgn6yDmnTuNE8UWuXP74RRtncZWSPMtfNGDjY5YNbUZDkGypbvYmjd7jWswNf274FTZVcxwbVHSyDUe1yTDV",
  "key29": "42kPy6tEsGpxsmYuabVRFEo4qLhpeG2F65NG6QnAB6Cs3ppAH2DAqRkqofgrmcQa11gGgvvYJprxANRbHTkvq6tr",
  "key30": "52dBbDbDN8X9zyxHtGDixr6yd9gvNJqejh44izjaZwCSm64zApkCJtuBjAe9GFrVWhaDvdoEp9xtfcxH1c9ruGkm",
  "key31": "2UDPQPnYGCm627ZVGDDwFZdheWtrzj5cnFpDxXizb4XaWN2D5QDxmdhQLHHYJZ1N1n1CWuzf2ZRMGiJnkgnkCp3b",
  "key32": "4aKNBYvHtSc1DVC3PvrswJTu9MXe4Ut5C4osYH7U1wefLQ3zexkE7pBamLfGWLdFksxZdfasyhaxzdXdzauwDXJ4",
  "key33": "s2i6wDJDkQEDx7W7A1HqLPbL1zH1DgpryQMC1p5Mdw6RAtC61dhYeKw9ERLwA4nCqFfs8vBMaFuakwcM9cdGZZL",
  "key34": "5SBezzJ8k4ANUBq5zoLaoDjKqGtGrc9kyVR9ZBxo3SPKv4DG3xBEH8wZWf3ggrEA87bBCxrwomYhAadgf6bA1QCf"
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
