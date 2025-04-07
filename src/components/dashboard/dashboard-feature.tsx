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
    "2KXY8zZGCChs8tptSwhS85sTkYx2tLfxXDksuHA1pWcb2FKWESuHZExmwPnQV3LMdydaT5cBNqtUxmDuNbutSvjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BC9b7e9cfqh9VgcSmGjG9vcMWFFBenHvn87r4hzK74pGvAUtPEj3TVEa51teKWjCBFzSkzaqXp5gh3wTqxujziU",
  "key1": "2oUynNVdszmvj2ViwEK7zjG5bzbdJiHiF3WQHB62aHjKJsszKxs9yVyY87vqnS2f1uf2t9TsaJTjX3F9oXzrVWGX",
  "key2": "2JsNxT8AqxrRK7KRFKrffvTSK8awVk1M1bkodgdzTamhsB6jEzKEaBH1N3Tb3m1yoX34kUJnzzcCypH5DYuduyHw",
  "key3": "5mLNJtr3w9jUCrqb4JF62HYWDziHt6w4qYEoyF44ToPf4yETdgaPbxmas7vRyZSu1Z47jCPjS7fVGYKqkBhhfUEy",
  "key4": "5KgxKdoTxrja8iMqcLVc2ekbSTuAxc1ASBgXmVqvDrj5S4J496DuSQVtMZeXhacF3qtwRL9pYm9s3Jwha6sXZHPc",
  "key5": "4tbXac8hPCsUYu8Yt2RM7MWPY2kGREa9dGW9zrJBcwhGKBPVPgoDTNH33MiY7hmh2UAzP6yCD4wbuJDWBuoe2gwn",
  "key6": "35JaV8pDUBRB4BNjVeUHZM1QngeZHt7N1BdBNfPkJbNkic6Hhxk4vZFdmn3g4nVD27mLN4mffNWj4yMmt7WnCirR",
  "key7": "44UfbosMwQDbtLt12hQ1iLf9H5GKuht8fAnkWMJjPkxRL6HhyEMu1G2a86y2gQmes15KjtED65DFQdUe8qnaCfT1",
  "key8": "LYa9PPhCefm1E4gLMg63LGdqem665JmVkkMNYLY88xgnd4oef4sjxzNekUnBGSJLmtMkTNFTR7G9HVYkweWaSCc",
  "key9": "23NVoxZEBKcX9ZSKD6qZRvHqdGNzTud7H1LFkMvo7bgGKm68zjaE4f6kf6pANTxmtdy5Dma5cg7Euk5YkfrfVj6C",
  "key10": "2j33JyvhqBGws2boaUr2soYouQCANk1SHoxFfZpcvUkSUncvX5khEBGCmdSi1vXr3KXvKimJ3WpTpGxcByusBqNz",
  "key11": "4F8r2sKajMraHCb5G5EPkVoj8d8p4sbKgZHFZaCvLyL9y8o9vRYjbze872xtnvjTLMjUPdwZw2uMZ4DZnAz3PfkD",
  "key12": "2w9wK7s6iVpBw4TCSXnKLf79gmYRysjSkqADf6uqJjMbwxWGafbnodyiDTG9kitByPxes6bVX87uqpMoDdPPc7uW",
  "key13": "47WL6p7samAKFuMVmKiA4snVAwriutS3zKPxZJLrUdmYim9z6PTdCkiP3BgtUar5LAKWd5QaMefLFJTHonEcBQ7X",
  "key14": "2XHLFyY77WV14HiHfrkkVnnZ4fWPFQRyZsaxPcUkSqdmp5CaPowr9abRBgAr29QFyxiXGT796jm9AKkACmabUQAo",
  "key15": "3Jsg9MpUwqWgRg1QgSYryHfwfRd8XZWLwuvRmNzk1yUsafZMe27gY3BrEtba27Ggjiw5Bme2waXMtuS3RvYcFduH",
  "key16": "5Jsaa4GhmmShPAFfaEX7qrYwJenF7jPNz74atMGRbfvRuHD7JkNGzusktECg61dyzCiU5o3FD6hWcUeR7Jc1Vr1A",
  "key17": "4WrQ8i7buqpJXFy2XicSwYKK9v6buN7hQ3wdH6dubKUaPUrnb6nF79FbfWM7a1foAxHV86337Gpv9xfYXcRNkbs4",
  "key18": "T3HPZas2PAWi86qiTrsA6A3JMGgpzMH84fCjsxHKvqmNdjgfVSdPtM7FK1FkpSggoxAf61mS2712D9WgDXEvRps",
  "key19": "qX3XKHEmYDS57qsedAtYPYpHc5Tohbh6z4XvPh3iMC1xUob2dyrUuGKJysJyCu7p24q6rMy1nnW81Zdp4W1KE6q",
  "key20": "4mVpDx7LMQkRFyZSXftKogsgy6fq6YwoFDnfeLyfT1vbo1cr6acP6xNnS3o1gPDGJNiGWrfeQ5ybhV1EUCXeh3eb",
  "key21": "xkAuKm6icKxDVJXWQarj5QXkMKXQpJuzxEPKivguiebqGWUocnTcgEz3sRLHGwuCAbQVdwHQZzC2ExrcTRzWoFy",
  "key22": "2b9cBNiEF1LDRFXDnsWQETnF17E8jeKuzpsk6fUubA2sE45EmrQjhVMz9JAWfEaAD52PmE4BQqr3mTCAPzK3BcR8",
  "key23": "3Z5Suo8bzvpJJ2bZYXwDcYpyHwk21d2sXzKaJ9DmRiz8iUd6UgnEcB27ZwfNHRjMJEebgSVJKdxy7oTmbkd8PXLh",
  "key24": "2YR3GkSATbXXikHKS2SYtSQBU9P8YWgdKc39hV883P6PtDVKBnakGonYjAtEQrxsmoZ5K41BhrSh3FiiKFGzeo2Y",
  "key25": "ronRDwVe7ZqwyUWUpdzaX9xPAAQNejgoENurfaX8dpFX7eVz4E77j41SEVNJEG186DZXEmHoZqGVmtx5DW17ud9",
  "key26": "5NsLoeqsmhMcNtwHnjDw1nFBBCU4akp6WkUUKuS3WpB6qHTR1g3m8WUq1Z95YrhXdBs9e7W69pHF89QLeHMZ19tJ",
  "key27": "FKAbp2MMvCDxnkaUDwaZfmiYPemYhzbAmbAqKFyNs41hbP4i9EKnd4xJedg6ofiRMAEWW5qEBz1DmvVRME3wSKx",
  "key28": "4r6vuCrTP9Vtn13N6HPEzERSDRESfr2fCgAjENYZvA1ihpXFwCgmLaTHY2exUzUpEK8zXXBL6fbiy9J2g8C8Yh2s",
  "key29": "2AohzfCCN7XfgDmfiKBy2cHXU3Qf1zqttrkuop1BrFb3qFoVripQANZiUWUQncLQUquTjGjkz7pkBkowxBJ79qAb",
  "key30": "3wVjmeuHYjYVPLb4dXzgYbKGMvXgkpMbLd891UmJLZ1irCSgY8NFowu9HVgSKWWF8ic594CQJoMFr9SMuZiUAuY4",
  "key31": "fFH1e59XkdoALHdu8gkY8yjpGNmh5EvqsKiWpwiQbixNYPeRKviXh9nTHGqPSsZYKgEDKHNZmgsfVgJKiR3F8Ej",
  "key32": "5ybXSgJPXfUG3QyV6z6wcEUxU9iH9kTSBK5eE2xEhijEmUkxhrzVEX1hkXV2vAcqvP6kirZDchYK8X143LY7Sg25"
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
