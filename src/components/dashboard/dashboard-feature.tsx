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
    "3dm5vFSHnR2Nw32jcWJ7doJEkTgC9rtDzp9qyWg8vBXP8xwrU2jUzbpUvT4vnV6UQ5RkNPHo2AKjs8MMEgmPnMri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QCwmYZJ4PLzd7HWV6RkCwGA4zR58AzfyHTPsBEfu2Zo35N83sGDN4FxbH9jLFbLEd14hsT26qWEHSaY7CX55KaZ",
  "key1": "2o85xKKgXEAxDdthdhtCJzwgeM3GG9k3AUMNh9USXqXCEdouzNuPGxfjFfZYVpSiNa4SCFzYprNyagXY5k1PJAee",
  "key2": "63kiRK9tsrxtvcSsPtmr59QiftF1zP4YeXcRxbsprLo2hCZwEs7YFP6kxnJ6rkF2qSW1g42tXXPz5dz1prXRfkXK",
  "key3": "fzK3aH77AwdWpP1SB81whLgXaQXWpcGioDLPDjukGzxQWWq5eaedsnLxayzzVgG2AMCDSiDGM63Ltuoaix7o36N",
  "key4": "5FERGtjAo5KBLj1rVF1qxEuwSi9BVLP3ytt9rc3KH75JJMsZzzarjr59pFCmwVF9tdGNxTiCBn1F4SfbrrgQ1Yi9",
  "key5": "kfNcp94r3XmfiqBjecHJXkeydrDNgSkf9BXsZAEp4bGCwPLMkieuk7b4HPRURDcEzWC7yVzvkNwiC5GACxjBGyV",
  "key6": "3Ae6rcPi6S3BxGbX1YpZHbhTij42Zx63rxtb4yZtP8NZtnQSj25K1JFHGJofgyCybVod7P3DgXFhRxemUQATHhuP",
  "key7": "3tQ46WBi9K3V4XaipEtqrdinMZVp5xvs32TPKMFS9JB2rx9422GVsHbMovy6K1jWEA794b8qQHmxQYo4PQrv38Zu",
  "key8": "27GcjVwxNBCw2VDrogkoqhmoY4VdHBxuxzaZ8qCNq2PA9gudK79tmEAaFEin9BTQasn24ghoPTreLdKcbn1om93c",
  "key9": "4dLxnbArHhLvS2Bts4J17qQTeGho5hrcwcphrPqkS1zsKHB5NWXiZFkZZf9SEmNt8FRVFLZbwfU1Xv4FKy4aSSdq",
  "key10": "549uTB4eoeVCvgt7XCgvPkvkbWRcMspVikm3h1TQ9znnGhxysgc6oQg7ipt5jwSqnXTEcdEsp2iTZCWfduk1DgVf",
  "key11": "3wt8BPLXX1ffWT5KMdFW4sHNQ5ArhLwG3hXC92GzL2AUY8B51hgSq3Rq2euKZ3KWivLaHvVdmkpzwizvVQRb4Yjy",
  "key12": "26DTiMLX8f3jxfK8C52Vzaco5AJ5a39DPkY4iyJcEs1CQboyhS2CUDkVoGptBCgQcrVYQ5MSFkz8WiRDF3Bvz65s",
  "key13": "4SWSV7DFqeMuLBXPWrMWnSynFedDa9EDPLxzgV1962MAkXACBgYbfDqZpVtdHvje293gPQbAtANfpc89pMhiZcHC",
  "key14": "3F8DimSn2Zhkrj2UQM2b5vfWBE97vvUawUoJXrRdQHsBTjmxnuhdkA1uw3CT3dHq6PubqkkrzyJ73mVAmbJ26WZV",
  "key15": "33Y8ED58pg1x4vWxEQvAgVutxgD6BisNdFTUvU4wTAmA2M3eKZJK9xCSVt4Cx1PyyLbaghsBC5PqRWRDCj8dQP1t",
  "key16": "t73hYLbZ5qQmKtJC7i5VFXZifLWoSNv2KYMRf3bx5NBVrjTpJmhTH39e9Dgff6tUcz12rodA2p6wEvSkmjnTTzf",
  "key17": "mi2tVjtneRnRabEdyKgkC6EAvj3VxRwGu7Mk1o4SNfyUNbrELK7Fy3shUnHv37rZ4whfuVoZHCCdfEaYZTmP1uw",
  "key18": "5utL1GFB4VENh8mRNQmeHcTSrP6xwdMkhRSgLt6Nzpoj7Hg38QYYRk6bL1DsqXwLJ2eU892YVXSyjGcPZjE4GZAx",
  "key19": "3VWYGzt6CuzLeEDDYeU4EdgYAmtjuDJs1XzkTDiEdxup68D3RS7GNE5nLfJcQpfdHwf4hdcWpCC6ZfFWyzjt1m7Q",
  "key20": "4bKkFLwu3MyMTdmB9vSJkbPf15JpqVtiKztJr5HNcPBBMCjZ4BtKyNjaQGoG5LmPa1waHTvmjC3H8amcvAFomp66",
  "key21": "yGhWv2JAtjDiQsDM1717pG3RmixcmwDHx1C93iXNoibxKozJZgMMmqp3Qm85KaFWsZEXwrLxmpR1AYHKabSxusT",
  "key22": "5VScayY1nhNENmSKYoCyGLwBVnYomrNz3bDCcxd11pvxLKDJbXDbZ32SA5a7irceKpkN1RyMkxrsQw47TVDWDiyw",
  "key23": "2DvtpJa29PQUFnfmPYB25FCt4KFk41zYf33XW6sHzG5s1P43r16tDQMBNudiU5LRBXdMAddcP3BPnE6ozt9AtuRL",
  "key24": "4PeWbJQJYLc8Mjt9wZAqgwnbPcUM4FUE7iQDX47tPBxvw2iQgSB2Zv9McC2BNJDUZtCQsurBTjMQB5qBWKftxaic",
  "key25": "3Arr7kqPeFit8YmeRf8GWxiL7cZXgjaidxHBk1w3H7GFP6AZ8u3Bj8hSfEhQKHDxHtunoigG7p8u7YVrey6sAth1",
  "key26": "5KMaEfGFuYrFzj3U2DEEZkxsTbmiLmvCbDY7cWyPYpL2jh44UNj1J6cJa328hXdgoh5r8PrfU6ZfHXSDEBtZMG21",
  "key27": "5eyX7zBvF5LEb9saksiWJFYiH3ZoT8Dv8Lr3mMrLuStUNTSJFLN6JceKAe9Vaq6LXHM5BizYhsqYR5MzrsFZ7AQc",
  "key28": "3K3n8jDCfbSQQQnPdTJnuKXuRshWZoXGD6aWnLBGJA9dXALNp1zUti2UsW6jBxsPdUa2Zmvt2UPLSRBaohZaznsp",
  "key29": "5JGEWqhQHnDUog9DNxm5g9LdkThtEp9x2dyUQD41BLcxsyikegZXxov67TrZcvbLyH1e7jnZL6c5tgQ5w5cp421n",
  "key30": "3MBJX7xWYtaWkspDPevoxihwAsn3a1US78gS136tdMP9AF4Cp8htLMqhnoHjvpgsYgkLzqR5Pa6qNZZWC5HBqikR"
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
