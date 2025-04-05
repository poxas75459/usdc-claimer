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
    "2mk5kQTsxrfWnnTXc8JAVpxZTxkXBGausUSyPTTdVttPWNhcdBuLzK3CsCkMCm6eUwY87JEGsLDL7pzTAQe2LEUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nECZhKLmbgPsw1B3aYU33xwHLzHxKQo2mJEXomaW6uYUE4Znkuv9tdPyWcG75vUdUMwNiighYsbqoy4ETAKVLG",
  "key1": "23e42E7Rthxo1anF5tRzxVm1gGNLSCpRktyonRihPv3sAospwxxyxsWSY6QnXD49PezGWQaQXkbMMCYN8daWAHPZ",
  "key2": "s8KLU2scHtX7vp6mgcP5yBqA9HABfKtQgk1xdyG5y9KKX3QiygXNf3xfeHVUFBEXc7Ma2ETyKr7fESvRqDbDLiL",
  "key3": "4PbgVM7oqKDSR12ChqQuD2QeLV6gNSdPpT3cNCnNELMquXps4QtBKtSRsUbs6Mx6UHRmJhnb5xo8RcidFM9rreRh",
  "key4": "TK5hhzTgZaT9r5gtoCsDzQh5WLBEK63TPpo7UQwbp9V16ANgWkPvj57LFizVxQpA4ET4Jpu8L91xPkNtzhmUcRd",
  "key5": "3qgyej3bvnSduBwDjqVtQUFQSvkDufeu2rmNMxwcVmAvot4GGFN1fG8kMzFL7EcWvawim444h7ruZm7faZKxEGa2",
  "key6": "bpDBXeDy7EyzDXLS9KHG55ntPNrmAUP1oQkzN33nmdM9PbikBpRpfyszcjQZwsajMcnaeXbBBWokpfRLTcjN36K",
  "key7": "32C9JA1zKqXRDb7VWfvre6SzpfZrE9cYNLEyWjXFuMX3sy12rSF2dKyDJzuUKyAxQyEf8stsGqQoTk2hpFqBQiUc",
  "key8": "5S7v3eRc5Z6zEBrDLGvySC5dkFwMCmPXsRBuTUiYTQQdxdZ1eRgeExGpDVUmsJ5VoPAPWrEqrzey9e2v49CSERiZ",
  "key9": "3nCiFZgxZW1N1kffsNUJUsPCc1HETqTJeHruc9ju5zCLM8vT4hXLjgZpBAGFgYRyFX2QzkApqBoamLPmvDPVHf4q",
  "key10": "5xEtL31HMGAgThTUCrJ8nAFiDx4UkmXvqoYPp3cs3MxKSTY4fEuZenvYDX5QJAfscEGu8ZYRsx3dKxYJoVvBR7sB",
  "key11": "54F8nDS6EGDmPch7RSG9AWZ86xouPSQJg6v1jBeyeM1BTpyh1KSJofR1Yzx2DQh6h3pbFuN7ZPAPeZU7UxuK3atZ",
  "key12": "ViDGQiMsdRnAb3KsLYgBFoeiPZxXjccapyk3TzPHckS7A1PnQLAYkui4yptf6XDfMhFU6daYF5qySeKejtamT7X",
  "key13": "62AUGYvoCHRxBMRtfzNSCHPSYLaDGKbByTyRG3UKBepnxnS9kqmXNvAaJ5JTHpbTDXdeb2iX7SqCKWJT3VU6U79w",
  "key14": "2mQdG8zbfxLeQXcmV8NqvqAzFw9snpFQDTwDbcdVJxg8nfFtg4Eb4wdFw3iTvRaCoaCDv8tKU7uEUdiDEdsS59Gz",
  "key15": "2ZY6B55fiVQ6pZhDeE5GmBFMvL56ro8WgVagm9eSGretAmCr29Mh1UmJTDit4xTAPsEKYiTnVEsxMm6ArgKjX4eD",
  "key16": "3yhQQXYMbvYEhZcWjQP6H94smqTxfnSuziiXZBcoxb6Wde9HYdnkcQX2LzUkQg5caJsDzbRCABvg6shyPqieh6eN",
  "key17": "5cBuKzdDq25NfBwSPbkEij7qZyXwqUQC78rA4eWmTtCRUWgzpnfBdvk4oBUuVgHSa1mU6CxBXgtGwhw8tpmakaX",
  "key18": "5i1moBUY51PwYhJRZ3JvXWnvceJ52nUNxooDidm4ZR88Johxic165JcYQvkSgkJMSe6KbqyHPPSa4hQxiCLDvyAm",
  "key19": "4NUk6ydEVungoxcuYDM8xFoq7zN75rXDdUoZswo9k63RE2w49WdGHCQ7VzLkzrV49MHYjMmXsTfq8agAqGAt9khN",
  "key20": "5eUyhNXadnksrtGECJgvEQiL1dYQbYzqVbiXU8Nh2TmkETzmRGg6h1wMdzSRGFNiuyYXec9CjRovBazRDmWKEAgH",
  "key21": "fsZdA3vfYgPPKwYD4FxkKmChie23EDQRA2ZaAKj3kVJhnC4feF83dLi64XXZ4ABSBGtJKX846Fe97hKXepdUr42",
  "key22": "5Zt9dpBUnwQJtgZTdW7EAPr55pULubEbC3LzwJ1yv4CsHzTd577LUjB7s19CRc1wPzg2mUAZGcbufBruKqDePnJL",
  "key23": "4fpeVGQRrgwR5W33TrwiF5odKnJo65Jh1EWzZTNFEHgyor7n8Ck1KCsGsCFE1Wtniug4tQaJMtSaB8RfSJeEDDky",
  "key24": "DchT9CHS12ChtsK4x4XKUvCGDpMvDK8rW4NCmzm65DmLKRxxJCw48tTADk3kAYsfusarezuo9g78oy8mQvHgBSh",
  "key25": "4AHR5nC9t521NQbXPJpMrzB1YXu896J4WZB5QHakmmn3hVAhcYB8GeAusSNLANcp5jsJp5BkCTUnnEhUmoF9bAA1",
  "key26": "3DV3qkjXCYzY1Lu5AdV2eTLwb2PugQwpwY1pgHE88RVbSWtNALLwydn4DVVHXMYnKLsLJoGkL8ep5cguo4MH98tw",
  "key27": "5UCnqDcutx5qjcgzb3qNCUSurTiLJqxQBVuDJpEd3gqMkJwacmNSirEyYAXcfwuqiAer7bXCnJpdQ6mvFMVm7f8t",
  "key28": "3SdhufJMXTXPLJrcNLndjYv5v54YdCSHJuFfYZRdHpBCdZSQuSa3tH5DLad6kVs7fvb4wibCcja6KaTTf4jD5QZF",
  "key29": "4TYGNf7NazuDiHTU4i3U1Vrvn8N6jJqfxfdLp98T2ryaBv6yktWkmi75K8QK6bK4SaxMdQLrTirMvxsYk3UhP7VD"
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
