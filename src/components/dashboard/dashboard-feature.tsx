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
    "w8ABxtXx6xnUyZUaXgMDyT349zD1kuts7mFdcLwhcjdS6t261Gy5ppqW2rZkBamQ9VJRFrGmBNZorpi3DeEuYno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7388uTHNE43CGLfPCnq2sXqXyKuN6N6WLwqnTgnmKAfCMXhrTXRu8t2CHhz5jQR8gL6L7hyHNxQ55JFucLzhLQ",
  "key1": "272YV7iwQBdt9vcpBxoNqvZhrK9DQEHPeMD3LMWzSmZ35WBgvrMYWM19NWzJgNUU8Ht9nZasA6AJdMybAPBEiBm5",
  "key2": "27Gu9AXmjghjgWtB6HTKM7wy43DwikFUGHai7kRcr3xkqx2GneMqkLutqZMPok7zPcPGW3pk2uvrHMEwKAKt2L7U",
  "key3": "PqYUmusBPmnCAYKpCnQWNP7d8sjox9izaSsv7LMBvgviEUbaLjtBH55WYzfRDrCTHH2YrtxWBUzbYgjFy2nbvjB",
  "key4": "2fm111UpcM6uFz8jbCX39gjQVsXWLXn7G9FwerJ2FcnfK7A5UX63BseJ5QqFyE2JbpB2vGhAF2HVCJMAr3WLCdqT",
  "key5": "5zpo2kHMnPxqxjzy62LbK6R6cPQ4WvGWQRFk43SywFApjKVVornRTgguUD1m9FkWMHqyv3VGxusBCjX1NW9oHpVh",
  "key6": "63KR1fHGtevVb9wjh4cHm4YqAzjhsyKr2CtecTKnY84y3wDibWjDkzKkukpdxcA425jpGFKDXR4gsB5ueiktBr7G",
  "key7": "2fr5CAvhWbRpu9zzjZNfFtLE6dfYyQSiR6aUsuGcyNLH6RmcTp17DPx2kCZb5H8UBmBeZTVSrpa7Hf61VTJWQH3f",
  "key8": "64Z4jKEWpFwB1tuRg7Xxw6LV9ro2gjgU3ieDCrNKjFdJuzFmML8deQNfEs4FEWU7rbeyq5KBkX2WMVLkiLhnUGCz",
  "key9": "25QbhJCkuqboejcEEUyRKrgGvfreNWqcy8Agy4woNDsbNqd7cnQKQchWC1BuYn32dzgNm4jFGRZ4aasw4rg4xk1e",
  "key10": "2TYyt4rwvN9uDygDDVpxbi2oPN6Vk9J4cw4xTpwnUYN9sMB3MtDQbwBvsjybyVDB37u32VYfxcAULqKPTVv9jktU",
  "key11": "4PK2JJyebRLSPdAHBP2rUnhu1sR74H4sQtkVXwv8w22SijAAQkfq6NSn57F7WvZrbXQ4HMqW9hR1K8TUkrXFVXDW",
  "key12": "djx8rcQhKfv2spb7LdpsWf9coXsNkthobPTXgrQzaTbXP6jxia6dzh9CLmAcLwLLjVjLxm6FE5RScq1LsszqB9w",
  "key13": "5fpYpqfCBnJCzz5LnXPs1K1Y8mqJWQowdomu2N32P7XS73vFnChDQM1Tp5mCyxHmEAFwLf7YHkYP1CLNwca3dHa1",
  "key14": "3eU48EH9TV8vmS6FBhjqprGnXRFbTcqByLkanaNM7Zyou7w742MYfNSV6ouUikKaq6oUVen8e9Hikk5mbWMpw54o",
  "key15": "wQYeJ6JMR4QDMaZHFXQMCapQesWBh7teuxBPSb2nXMWpsropXEAzAMyWq89NUtj1C52kHVaYtuSFjPAjBp94Chx",
  "key16": "63ig3Z3jLXyoRdEBfCotpkczCYCQbE31Q5Kq3bi1vHE4dHYex6cJFGmd1tYQp9TJNkmFtVHfTADCjuyYtoSx4Rg2",
  "key17": "3GnMfQVTb6CWGVUqRSjyeowwJCdRPmUgDDeVjgRG8gNERZeJHLLtJwbVFqydcBvXunb8T3ghxEtSBowjEqZmmk7g",
  "key18": "5FnyZUj5URGVi32YGkqEn1S54W4jEPWdNCZa7jjojGMiRjoxM8A4rp3arvJznmq7RUqkcKdYffvSZeHR12fAS2we",
  "key19": "2JqPrjm8uRLQWU9y26o1cm2HNcSriv1Er649Cq8wJtUb3GrqZEyNhA9GWz2DzodemzaywczFBKAyGVRZkkHdDsSa",
  "key20": "5tfp2SsWtrQMGu2QFfRYNWwo4KJ6c2nTSFG75vvJNKJrTn5JiyU4zTAgoe9Sr6Tk39yWzrSQrjdpA4W5f3MFkbGA",
  "key21": "4X8kqfkj3gb5T5eFBr8z2BDuzz1fENnBNXQKzGz937UivxwaTbifVU4HMuVyTY8Efj1EFeufGyAcyUR96kZ38My1",
  "key22": "64ER8szpP4SvTaDyswVEm6uxhgLjLwZYgEkuaXK7ndBkbSckUWQ8dnZDDrVXR1mMk56TkDwGieTgKCvvRxBpV2o8",
  "key23": "48RZowhf95wHPCXAE8FBdXaKK7pMcV2sHjSW5vPYmZjpguVysygkLP5di71qmgiSoGhcpUKPtraG6M3x4P7an8jw",
  "key24": "4ps1N2koqqHNDTLHr2qfHrz5FowRSh4jxNxMfTov8puKpZ25DkNmMGGGibr3dApnSCWmGULsPqzNTdR53KRJGBKV",
  "key25": "2Ei88k8aGvstHW4WVdrvrPb8tjHSiTzdsRbStpbfFxMRpc88A8jxXHdLCyZPfSP8M96df6RiS3AjzFF11wsqX6ny",
  "key26": "uCLmqJNjYQBtSjrs9yGxtojcQD9tuweRuNBwnG2R1SvunDxkUo34qJTcuVB7Ww5h88qR8JZpLjTp7eEdZFqpCsY",
  "key27": "2xPvBiynqkMs6of2SbHDc7FKF3bcqPkgNZX47yExwgR2ADLeerhf2cjpdND1XDqkdYtmeFwZxutosUFuCgRqS56D"
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
