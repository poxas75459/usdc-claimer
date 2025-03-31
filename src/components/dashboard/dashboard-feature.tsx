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
    "3spiezoVKbQrVD85PK3LBJGHk3SRS3dFrzpXzRY5XEoGpd28hzaHkgZCkEGWcJRuDu4w34V8wKZLvXVqdKBFR4mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HzUMnA2K2GoLr7ASQmwPk8JcxV95Fs5XeRnXRX4CEx3fYzpKFbptbSmgv5iFXYGVVdFmN5yqs2Cbwm3pM3ss6W6",
  "key1": "57zbq3FEBBEsMVpWagegSs4Dps2V4gQQrPct7xF33s9tqYabwTEcLNkRwvAjCu6XHPD4DEZ6Kd3mqTKCpBL7CXW5",
  "key2": "bTzsHkMeBwL64psgLoWiRX7bLQD2grtnKn96HkTfyDccsm7qAFkns9tF67B2vpo4cMuissVGywbfVpUQMjVJE5Y",
  "key3": "2VeTQojLhPorHQYKGDSsP23bmxMBLvj4vKxZg1JsGup2bYKKvsTCFHnYQ3Xj2kwxjWXfUmUn5wuFfxewY9Y7ezbu",
  "key4": "5D8AAS9qzqLgVutZbr6VmXz5daazjNaziHv75pyYKExoMhb87jZgooHH59Rwmyg2o7XZC79fhtjmKhR8HoDzuJuM",
  "key5": "2rSs5LzZU2EasTdgaDY9AxdgepvtPkKV7Uo2VvQA8rXrQM1vUqYn3Q3KX5PtB42CXBXe5vVczVB3qWV69YxyhYYz",
  "key6": "5tSMiQUKv16b47bf6ACPHWGvqzsu3DGj9Pj4V8DmyZiVWjjnof8VzENRwsEMrYE1ZzJdrxsRjyuyWQTetQXo4vRf",
  "key7": "2G9s9nZUsqYUQXzUvuuiqfsEdWmEZZzMBZbFTjitbAuzWWEuLxyQYyW7f67C8EEP1PosU8BdUKfXRvg1iN47MLtG",
  "key8": "3R9kZr5GdQRjKXW4oFkUQGt1fTjEwxmyF2f5MsEoixLoqc5bxdqSZSYT7kJvrP1SLUVKVRVn4gfcbSmUYFzEwYxs",
  "key9": "4F5EuoMy8UzyRSzouBr4K3Yk3kjwsmYi9ni3sbraSTUxwHPXCR2LdZhAYBmRJonDQxSmqxxhKieh7ADZUBEPhNpN",
  "key10": "posMKeCioiexNfqDo2wuswyRak5NmxHcx1MPKuDF1PJ7Qnba6UkBhmtfCpStaH58wdte6ST3NA5qZjs9UxXU1av",
  "key11": "61YcbdscVrKiH9VsDc7mUVcXZbraQAHGiZSSCsN1q3yaRpmbgA3fWvLUEbb1DNsLFM5pM7DXzvDr8xg1k7s5hGZ6",
  "key12": "2nCe5GEdegNjM58sBE5HQeEKBgp2858ZhfQALwHGYMkK15v22PL2Ta97pHZVrRfP8Dvk1Chv4e2Gkz5A35dHnsxq",
  "key13": "4v84UmoTDSuV9giYErPkPpaGPoR4vZd59RkxCr5ujUn6swJSaajjhZQEdrQ7fUiEmd6be63b6XxGSYmYLawcYDxv",
  "key14": "36x3xVXH79tYt39MqRpxSbbCj9S3uY7MfvA5YGqzs7ZAxeKWeinhNdRU35KjmTHFX2W7a868LkeGypNZJLP2tJAY",
  "key15": "GtCNG3A14GbpjSUUsV8g7wUpYYRkSuJRHwpmRqyppQsQhe1Am7BKcrbeGJPgZDHiSYZbiwkkNSkmZRFj8JiorEf",
  "key16": "GfW6s7WejfJDYv33Gqh7roigy7jf9RaTv3ZJQQqvH458aR51MZVpMcACL5EvDM4QByf7LyvCq3aBps8hmELAV8G",
  "key17": "4SubqKXdVPxgHPKasYuttDWqoede7ovhAM9LyHm5KmjoKaTsudftjdMGSiBrKtiyv6KXoSGkB3DwT4ovNfaDXZn2",
  "key18": "6XKNxbohEBorSdLBbjKgcXgnFK3DBz4vT9VRV6CoFFAjqRg8WVPKQ1wF1wAc5Hrhw3pp2r7cHz9mKK93HALLV8Q",
  "key19": "43YL69HNmNvRKGcEJhiquaH9dPoypqTrGxVgvThV2jku95TPtggASNdLhzYZ86GjL1SS34W8zqTtKgHgwq96g3Cq",
  "key20": "2Kom2UxZbtXo2fR8Gf3ofXgHzJ1LY6fyrdRCAzHbjfXCgHfGTuqsDk4w9rNfLX63oVY37Gd1iXaDrhQLapSXUuWj",
  "key21": "3gku35oYTov3xeyfWt67YDGJNbnEAgKjadEjvnW4JatVMxC8bzV88xucm9oSmhKXXoiHTMYrnaqCGsSoLSi4bPdj",
  "key22": "2JLGYxyjxkanbd5nj5JAWj8KgsifHrm9RFc1b6ouYuvEPuKuW56rwSFLhorivBBoWJaiYb5NthajaHksJ1JEmrjX",
  "key23": "5GpQS1bHCgxXztmXnf9CuTFeNq39e8WeayNosxjh5jhPSycz7zzTwpP3eF4rTDVSq3DXMgNZr8N1iewmDunX2Ykf",
  "key24": "3dR8ih9jirKysZTP2cCXJ9kknvSG1QVjRzWidT4D1MSXm6qS86RH4PhuFe6t7D2AfeDyXL1xpvGSXRQUvbFJrnJb",
  "key25": "PmtCLoKoEvH2R5ETtXpjHjCKV7qhW5Mtt4nJNezXkbLZo82RMJo8BNbJGZw1EZXymPjx8mnMQQej2R2E35Tm1su",
  "key26": "3Reya8TRAokheCh9koi765eLgDaxi9WiMp5vqftbEpx6k6jv2gFTUmj2j4TvX4EHRUwscduJgs5FeMS61rPfbTgv",
  "key27": "2jPwNKdLg6ePKCh5aQbn1uTPr7BDEmpFn5C6FGN2jwnDyahGJaUcvrinVEuZ9dDnHFV6x3sf2uzjgDihSGG5PPTz",
  "key28": "4tU49fjH3wZUGghAJbihxukFc6skMCNF9WAn9FfPgWeMoCc7rVqcKZQ8FBTcPE61LMMv7975AJG3rz4ond5CPWSP",
  "key29": "2faQM8madFCCiVJTPP1QAfk8zi36WhTL793ZyQJVKKDfXQ6drZMLo8h4aSBC2XkCbEWiifYkTVfYrqDeafc9zqo3",
  "key30": "5c33xuWPagDix617fhSTUackqzA3we74v3vpen4xNNBkNRTu96WPSa3wGR1TL8CV2QQ8PoM383V33kBK38vs3sPw",
  "key31": "49UwTJhgPRKXBTkrSwRPCvkxMV3WHZJxtscSxncCeT7ron26xAzV8iQqaySBg6qVEVgWHP4mz2B6nY8duFogZ6jd",
  "key32": "4AEhPi9hG6xALvHF8YB2WZTWqneERCpN66AXFxEotQe6WN5SyMpJLJmrMveH86H58HzFW9uC8YXP8YWREtoHQGwn",
  "key33": "4E2LiFaiycpzPEZPXEq24nMDgayb1BswwiQ27yeurVnu7DBpryxUZSPxDvsL3a4JWY1kxF5xvzSYrvPQDuv7DmYt",
  "key34": "2iAUj5FKZSaQ1oy8joDn6kjTsw2mDcJNmMHRto8ERvyE61UJTmifw3NgLv9WREjE5M7mZfeuUkkXpbAQbS4nGxF1"
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
