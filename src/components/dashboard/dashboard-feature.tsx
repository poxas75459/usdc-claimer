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
    "4zzkaDQqvNkSdPP7Nhfx5NkZLG7rZJF4KbGcJGtef9neAPeKe2YWvbE9nZzxFvV7UaWtn52tvquNQRREXrpG8Wv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ByYpWhH4Uqouuh6N6T7SY8Mhsfhhe9HJGE9yEvE43DuByZtbm1Mfi7ASCQ2y2AF2fj1Aw39fEXKGzHRxWTMyVQ",
  "key1": "bPZ7pHMPurNeXcqqXDpHo9q4rXa5RDPoLktJmVMqtKqVx9uQWB1et7BRpto1zEEW6c6S2TUyndhMNVCLRv5im1V",
  "key2": "4LAkGuR8cxYQTehJBWKAwTzfVQFUYgjCsFLSAo1Gv4TfDmcTBgN1kiUqyqh7UKsWBS43TNpnKTMc17W3NjBtGCbM",
  "key3": "sfFjdA4GAzdJqo3nnnBMB8BngTeQYow4DPM1cVAKkMwNM7fpPwEw959F4cbLm1ayM2x3AkoCsmXLfNaMPKYWH4M",
  "key4": "3CyhMZZBTUDZzDyDZaiGr1xWQ4XSwwvvtpoxGS2Fynaca2yUr7hrfJaxxhXw9HMqW99oHZdAPisvWMUDzGsXTbws",
  "key5": "3mtBFBoUW7o8uEQon8uyBNThYGDNaEdfPAQaH5bua2gaAFNebYPDGUyAthJguA1pFAKSUsb2tJaAXrn7dJdgarqj",
  "key6": "3ymA4jFWACMYGwDBnwCUA6DZDhuDy561Cc94JkT8jgSLH1qZ9ZwosW8Lhot48YJhGwjfSR2Gcx4uvJiubi4Zexyj",
  "key7": "ePa8XXA2HMKHGpKBfyK1sAxRfBN8s6Z9BUpdw8tdbjMnMS31KCpMzfoX62XVLaf34KuyhF4E2AfPbc35uQvdGoq",
  "key8": "33sVCxTBFWQhmgntFgPURMxtPUT2NoXyi9cVuhLRDGqWiwwUajo84JWnebeD3pP129Z2yGd4jxVbU4wSexF28Mvp",
  "key9": "4oCLrEZsKEmeTELARbokdTCTQXQLmumEv9nSuoM476gZjCsDN1ANFzxA5PBTa4TwMPYzuWd7p1zadgJMW7DPPuvC",
  "key10": "4Lb558c5octQNd4AjQqwirnxdPk4d58arQ484SrNtUAh9izpAmJyZEpmDVKzCaKH42MY6LwpiGmSpn5Zbq3nGu8F",
  "key11": "CNWExCGHuNKcNMcb56GkgtK9oxWerq1LS6KU96nmnnN81omfrm58i1J1dRoUteVTZgiAs16SgvAJePACxDf8xFC",
  "key12": "5hH6jsXvfpo6GhqUhVD8ViZXS2VCvHKpZHZYb9ELhhgNCso8zFBqCYDmf3imAtTsZt6csZPM8joaa1QPnCQG5aG9",
  "key13": "49qTRAeNgYTywJNdKGUScbaiCqsc58FFKMyXPzMvaW9rmVKituWoWEJ6VHMaHb1mDCQxN5CDkxwHF3LaPDrsQDzc",
  "key14": "TsnHq1vSx3LDVHfoKxoPyp1csdU4eG872WfkZnUMkjqjgZAtchRYK3zaQUCZq8foGHK8onRJbFqYPkMsEU2v7GQ",
  "key15": "DgUjUEVyHrTXoMu7JRLhQTFyiPoK93HyGjKp1nJ5HCUi9E6Xk6c16eUeZ83J4WbeCqLAAfE7g4NKXiTb7eqtKFR",
  "key16": "2eyWcjbnbwNbTNx679B1o364TxggDi7GGiNZVkEcMdecN2pD7VhULsfPh8PBLEwRJQrGeC1cUrywN68GjFESaPhe",
  "key17": "Q6PR8jxWAcCqvJXZFuHd4GeQTpD1FpNWGKpTjryR1RC8hXxZpWJt5yTHUYLyGTXiHjb7RAhZDk7RHqGRbd7Xnd4",
  "key18": "2xVR75NMDSXAzXvaxWcFdrfp9hrLnyGjThM9JAW3qjNMDCgyjiRNihTkJ6DPx59wSxXqkmQEr3kFTvrAfZendBYz",
  "key19": "2VGRXG8bCrgmafawNXNLFiZHVELLnwd9gXJ7ttRK6fmCcj7LaRL8FGk5jEgQ1gLydJQ8ThHATQgdQuXWJCvTmPhX",
  "key20": "5vFiXFvr7igKjoqcuPKp2WgoHsoaWuWNffU6aF9ihaZnRb2hkQq3YzwiZUs2wSukMeMBX9A7cMtCE5uownwc1pKh",
  "key21": "4C4nmEn4fSJiwvfpfSmhA8DsHfW6kxYn3rEiCPBc1tLGvnSZU7T9cf5TSCqiZhGUEdfpre7bnyFa5GQUY4vnigqh",
  "key22": "53RHJZN9jvTdDeKR55cmQSoagwWpPapCBZ1hTQRsDYS7m7AETVMeLFVx11dzZqVs9JMVmHSDsAy9bQSo1ViwPUGV",
  "key23": "3cwEttqqSyJ8KCroB5Thu2xjKKgTCeHxtkbHUmEzbvNS7zhk8hPvenpfwBoRt3d2wmzntMkdqvcmFsXYKVEw56Xs",
  "key24": "3kbCw93TthhiG9RRvw7VTaQh1GNYBa7JoJC31LXwpDFqTXxa4r5coy3DYEJppFqwXyHd7DKUQ3WP7KcxWP3vF6YD",
  "key25": "3TG1MR5NwtijXBAyZjJctVE9CmXUBHErPfg9XtsjmQ2wtmAobtXLTWhEPXf6zw1NeFjy1CkCvwL7LPQgj9ePKKMc",
  "key26": "5NTnWoejLnW2bs7iPuAdi1QEaX5GwCFrBiknirNFMabtP91ysCQYaDM7wVce5U881YfViuKHDhabYmxekRa7up6L",
  "key27": "4J3oGJHoFgMPEbMKkXzmRwrnmoYFMgUpN6sKgMMFGMepDvtcGT6hEVpVKeiiT2auGn4UR1RPqWU7ru7SfLqU2JXs",
  "key28": "5XVPR3Tr2Tj33vzpUVk1RSYfbT48UWDNnFY4weQyXM6muKT2FZubvLiueATJwyPXtzWEpVm1ZpbtDxkw8kXgvChc",
  "key29": "49B6q1i6RwHeJmV2ieNBiE2A7mm6bssNpviSMNxi1hBoDXvJ8Wz15v2WPV8TaP7Dv2vnpgw79rV2QMGpoMSizBuy",
  "key30": "56Gm2VM52LWHijTiLFCduu1M39SRGqpTops2J41mWnnjpRRNXEAHuWfx4mEvg6uW1rgFYhYnKBEqfrj8f67LJYP9",
  "key31": "SX87yTLBFfXhRbkZHbKoHq7KrfCZmkZvgYQHyewiWDnZ75z2k9g4PwHfZjdFnfqwgpaTqVYij3GQ9jpZ7d7s25n",
  "key32": "2BH2WLfGNMx69dGEECZWUn6JfPaxCZfNW6DEhvGcqFPjPgTTNxgcozVDA1igeQVoTARA2z1SgSfifsgskhL1mA37",
  "key33": "5JNL1U8Ds6rkLMc5rVgbaquovqxsRHMT6J9dzUSsBGaBQoPQmBsttm5jHmfjB9Q8FVXxfkN3SnmAzWbYGWvgAvqc"
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
