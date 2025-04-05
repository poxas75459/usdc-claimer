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
    "2xXeup4HHz6b6uBFNfqHgn4jKzUWhXBZkxhChkeHdR7Rw9wD6hjmN7KwcWntRQ5t1JXZdZkJYWE1yJKHWSTctrJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5k5iQbv2RDGCwmEHvC8js9rhiCwLyqMAhz9UhDDCVaxo9Dqfm4Y79LdmR8458JSYZJLsKBLF8mqZ7fJfGXiCgJ",
  "key1": "4NBpHmE7VW3AVSCLBwMhjReTyjd3VHaF6oL1xECJEQvEeXQqye6zN9mSoXXoeTcoq6w5tkrmjYXGkpStWfvsEAuk",
  "key2": "kQ8KkM3Y6cSq19ucMoRHpyi5qkReB3CMoC3vGkN951uqAgwDwwyaVQQfh4A38MdHpF48rQpLA1gBaCbRbMCGuAU",
  "key3": "3263CTbjy543nvxi9eHdeXxabfzkTvRR61K9oLjokEvHKBKGWxK7C8HgwunMNiBfkmJtR81fMKfP2aKsFjAuwZj3",
  "key4": "3oSAn6Vhz51GeYetzLRybM3FTBghgttwiuU29ara3NA17DbowrPyyRR8Yvp1YVzUaNbAXUqQPz4PZx9FVYAMcDcm",
  "key5": "ehVjeqc87xWX2g8TyQ4NUswpQFb3Zj1d95aH5c752h854k6hrWadjJvh2ixSifzcojmVMdTFkU5UUTqDuDCFMnK",
  "key6": "ZZSgavYqz9ZSDQfaNaQNv2rr8PPSUss6nKGWgZWeMq4oheyyxdyF9Mn7PqtRQfSiBaLTm6SJHnZtpx3xoVW4pZh",
  "key7": "3f4JG7ZHhgF5e4ZLuzGoEHxeyRa59Fb2T2JpY6SQ41iSLRVZ63NemuiiRxxPLVfgFiJ6ETPUpXhBm5t1wHRfQEUx",
  "key8": "M8K6gTozYMAjM93j31A1jsXeXbzxEbCHt7LubdTaLsS7jsH6DBgFrKy9D1BTDKwBrB9frk4qewjFK7nQHyb3BQy",
  "key9": "5Bt84Lk2b5m5De46NNMzRLPppqnKM3FXZEYAD3JVyHBzUTvNVnPDywE5wTS7h9Lu1ifPEknJ9YAehtcemnxcAMrm",
  "key10": "2udoxA26rsRYcydap9xq9HZmtMBBs9ZxyyXCBCPZrZP64xk5ZSR7KuJFFkqp1tKb5fR2uN91KYUSRxpdENyCyg2C",
  "key11": "3K4Xv1q5pQEuo8SCTyC47zhYTrVrU33Q1pvwEP21oXCHVbbq6Pow1znZk1atfDNdTwQj8PAqdUJohPcZWjtynFQ2",
  "key12": "5JLkEDhQbTFmC9JwUkATvesQKEM2E4m2uPsDnBcQohscCmyvEhiRewM7LbBbvL39ZjyVSVAyLG8CmUoogV7u2owz",
  "key13": "3WonEGKFHjazYeFs2GGFWwLPmrTxN4bDqJMmeUXF1V83UDxm54Fukgh4EgizsFVJBabA98zPiWehbmTgeoT2y1b2",
  "key14": "S9PsjsbAzfD4avJDMSDitKgHQmUEimK7UwPduW1sG3uUsEcyzX2ew3hLRMhuvRFEiXdRiAWAZYdwNprzQdNcvck",
  "key15": "5KPhirVcxUXtzJxydjSf5jDf97YjCqdNZG9U21gDWWWVVq6XxdW49r6jUgTvYeNkdTfJ4vWfha2CKH1KzxwSzcca",
  "key16": "5t1aCX23marPGq4XbhSuc6eSQxnRW7okekVfDxtxNKHCMrg6KYMGeBd6dv9prpKt2t4HgQu9zZFH2Vv2FoMp24G7",
  "key17": "4jvSPSxL14FAVpLJLanYnCPH3WBY28pKdwht28pNgv1vmb5FcBWzVu9YoFEzTLgJwhgtTzaJtq4DPTUDRhCX2ZAB",
  "key18": "32SAXYpNin61zSJbcjupmssqp38KRBYqcsj21ekbuVvHn1VnhZxCybCZLe7SjJFoxNfGBNZEtzskG6hBbeVtPMki",
  "key19": "47qSTUzwdXcCvSsubF1inohwZV2QiSmFz3xy7AFxKeaNWM1EYdhpJxo1tAGoyBocpB2wwmBx242oMaRdGrMhuwzL",
  "key20": "5gDSqsaDgMtcvKA5Qh46oPMmrF4rrBFfxuRFQT3vbEcUryPG1CBFQz6JagjFPBFvG5ozgHeYwit2HfM7vFtHtad5",
  "key21": "qquqR7Q1t2h1kfMofpaMv4G1FVisqPwancxQsDXZHSGCuUTzh5R9YgrNvbngFGZb4kK8pbxUcAYtFRkN2nYvF6k",
  "key22": "2dFdxnv5nKyrTj2aHYaCKPfenmYABgWy4WwaMoYyn1fxpQjgAsG9rqNkxu8Qrzzwja94fCeE9DMS4RGVf9vLuWgJ",
  "key23": "3sBnCfj4S26xFpVYGZDJQQhreR8fo9VvExdbmjAZa9pHXmKNrnAKTRS7N3DMbD8tyB2m3xVoud2EjLBVWsmERipf",
  "key24": "2Aw7kdpceN1xxq25L7yRS9YRcdkCi3SFWrPBjLg6ahhW4EKwVPPcv1qjcsxf86yajsN8ibaZZrubWMEzvyRfu8s5",
  "key25": "57qCVDYZXU9voPuuepg7EEJZWLkHcg2o4YgrZZzUPSPc3D4EF5vsw4pgpTYxYEwsyntKTBuL37n6C7dgHYUdxtL2",
  "key26": "4SkGwm183jRDZ9RqqTrdt2JU3dJP2spTgbbp3jWKkyvvMp4fcakoaHHjf6C19dfBCrLck2p9yxF8qkLQW1usbigt",
  "key27": "4wu6VHTZpiG3Rhu4hPNEh8gDZhLcePFDWjyVzCvV8uWfAvTZPQE8fZVCJfgkGb2RKHyYoRVqR2sebbpCy7SnzKeZ"
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
