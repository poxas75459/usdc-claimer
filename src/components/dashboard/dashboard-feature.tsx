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
    "5Y1fNBXXkn5JWJkPDTyxPQFXqKeqTYqsSkNb3MNSDM2Qt3iSgCWEDr1h4HXoHt5Wagfq2wrSM6NxBN38rHUBPMEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTx6KDoSXKRszR7VNpg1mbhhRoit2nyg63yZB2B8MnynkNZwo4fywssZ3eeZW88uSHMtgh9Y4j49sA5u7hU3KLS",
  "key1": "36EoFstwuFpbiMQMkopRHSjRejoyosQzcyT8dZ7XHUSL4soNRaboLdTjak45WF5AzXcYocSW25J8XTHCQ8UtHiAi",
  "key2": "61YbhdcXEfh8JHniu47qQy5Y3ES9wad15NALu8dAe4pEgREJ2CiE9pNMTxEwdPugiJr3BBpnqYnXSnq6dFw9jpzs",
  "key3": "4KBcu4N7KeAMRvjtgkVCKhQPjeYG3727jizgSGoz2ay4WXip8YzNM6sZiGEvmnDPHsPCjh3sdybFDS9MWL6LbZXM",
  "key4": "4EJBJT8BUeZ2u6yzJsWuYMBrFe8nfR9mkteasSEkTm5rDnvygX756WjuTUzkLKhSkwT6jLSxS3qRDtPM1AfJ8F6B",
  "key5": "63UFDcWgF4MtWrkemVVRptcRTonczbAyLKbVYu9RkHve5UU7gtRHRS12VF2snuf7LXaPxcayBvAXe2fJNWfdPLUZ",
  "key6": "3HkJGRSQBpt5Mm5sNTWYFNg3uHmKo5dMXxbJuLh5Co85ErXfHjRDgf1jzFjtbvb8ngLZix5djbUmrzHJuDNBAc67",
  "key7": "5ovbXZXdTD774T3JRDDbToV5CAhtA112hvo4YFNvSWjeLDUECvr8wzzeuUSMkfvu9Red17BGTQMSGUMuaFenoVoK",
  "key8": "2cnH2vbt3bA69AXeMs2cVHM4Taq4V7nPaNLQBPusYdki3BMqnKLQXdqeQL6t5aYcBTkG9h3S3ZFhHETEAm7cXu5o",
  "key9": "5hLhrXSEad45ounmc5TTSJSZWmMwp8nkJufqDQ4eq4HpvVRrbgBaGii3ZeM23PSc9HkoKtwEcwhxq5edmgStwPo",
  "key10": "31nQ2aJiRj3ESLJKrGThZcsa2CpuN9211yMEq8a4KMFq4avHRSsQZocmXbWgDCRmu8uiNopWvrdo7vcsMDP2J5LJ",
  "key11": "4S9EH58JmfpCxU1gGMPDXmsVWCvZoRpanRzjb1xYXaoxYYcB5rUWF1AE13TBaPdCU6JfpZA5ERsBZsvdE7JE3yxQ",
  "key12": "436tfiTqzP14jNtaCMVLfo79HK4qbKMFzsuS8vr9RBEXd59GaznvNStBgYGQ3RdQ4zr1qCLFqcw1ud1g3Dg2AzwS",
  "key13": "5crBjfh3QTzupCpcBF8JXgJgWTsBKngWpAT32boMqfAQEru9Fq4jhiQYEh2rU1Mf6BS4aAQhTo2YoBtcCNhsibCt",
  "key14": "VTVRfm7S5xdJ1X4jU6brqtFh3GNG2ccmj5YzaTWqPa3sgymMvCYsBLvrimuoCCTQgaWyrxDqWTb1fSJzvaDXriG",
  "key15": "3hb7cyGDc7mTtm8pEh4yF9YHvzqHdD1zSzypy35FKm8EVPadkcJCwk9JGPWUsUZ7AV9xMyH3yTNAHusRvUwp3Pfi",
  "key16": "3t6Si8GwAFthk25GV8AK7b4jjhGCjVAFBpkTQfYiNcu7Vby1AgRVB3T152wBDrt5jWiR9frKPBRbiMJRAu5L5Lpc",
  "key17": "NrxBXMFHXDSp1P1ff33eCWHHpHn6CXxKbXPnzsu7J82cVmJPeiG8Da6odrdBYf1TQ6cLBBW7G6wiQZXskA5G8P7",
  "key18": "2Ah4hnUSGg2j8DLM6dcKWU5u7jEC4NkrWHpqJWoGCZoLJHL1ioQwpn2og1Vxc1kKLaFMV1N3LraAk6bUqPcT7s5a",
  "key19": "44C7DosdMtK3KhMuUnstgV4hnRA9eJScB6LfCBPFPTgjWjMWbamtGWzfyNkM8n5cV7ZWKSHaRi9QqCTFUpCAXzxR",
  "key20": "Q7cLgimZseAk7jDcW7f2GHF9gt63Sq6X2je3aQ9qcr2ZNqdE2aYi1sxTWYbDDVDwgnRSf1hVyMDEtgqox268cAB",
  "key21": "5Adjs1o2PnQvufZJJ3LtyLJqJQzZKuEAGFQtku6zPnVq7NefoLFUrcsBYZs2vjGxXKbPZPq17aoFmcmDwta1evy1",
  "key22": "3Hty23kQQMHV5VofejTZFzzdkSipKiNEBdUAZdt8itciRN7d44Dy6j6Rq5Bhd8N7u3aS4jGcEgUrzG4sZsModPbL",
  "key23": "5HQ8nhMXXgfX1xSoEK1S7Wv5owChztyirodMDvwq3Vkcq1tpfLPURnk8F9VtHqSenD6H6fZQQCBQ2CZ1p9HQyy66",
  "key24": "2FGLxBo1HSEt1BEmxwvQUmU427evbDrzsCzZfJsqSSiy72v9fyu86gQeUQWmbQHbVXt4qzqFtWBL1GMvfvFSjARk",
  "key25": "2PqGoY4GesMt9Pu2uuxUvaiRvfJALMmo3r6WvuD9q4rYG1Y3BKAp6kD1qGgAv5hJwAYBWa15DFVa5DU19Smn85Su",
  "key26": "3dCM8BXNyKjBVZRcXkJVgKwZkm9TEDUDQJcnhHAzpHjoCgBg8Qqz5Z8Ngp4dftg7koYaDEZQEsgvTkrYRL4EQRnT",
  "key27": "5Zq7kgc8uWVMSKVQ1W1jzcX3D7HeEFXVaS7GVsiQ5ZgWKzEhVDgdKzEtC34Fmg1F3wTsRypf8c93eZw6LNCNJvmt",
  "key28": "yXAJzJb9fcKg6izShCo9bKDdWtWZzgfdbjDS7io4jaUXhNEnEPo5jWYH1wzJBwj8uaAYE1fsUa9XEKq5E5dW2EV",
  "key29": "4TkzstAk1eM9fJMjsumitKsJ3aov1xo5CfwNQYL4wVdS7DxDTYsaL5LmgWMhA4HfMqEBNi7bgZbSNRTdaK5tQATa",
  "key30": "51dx8YKJEoze4pFyYUdQhNCCnnEzL5gtHUk1QyWY6PSpyb2DKoGNnfb3qfHmTgSHWiQ7BaAEqXXo9qT5L68NiqAE",
  "key31": "8ycZp8GUv1GaQkUS8StEYzDQhHkeJW47o8ZjwFTVAjDRiEGkJSiLVi7zY1xdDkWoHjzHPxgvCWSmP2bm3RoVj49",
  "key32": "2hYfSmCpbpjh1qM3cGvZWr5pYX5iyNo4aoBWDHuZAh6J97TVpLQp8ffDAU2iWkK1HdTTLcGNN1zJcqAjqCpVE2SA",
  "key33": "4u5gvWCw1nHoDQ2A17Eh7Xa1TsVH25WLRfJtobEyBNs5QsXSoKGHWfRqNSKdy89RscsLxe6eWThFjFGAoR8ps4Pf",
  "key34": "N1LrVmC284nYYv2PS4e7RoyyFzQHtaFLdjzqNypiQJNwgq4aS8eJixWvgMwKGMo4VjFCogPG6geNLZNBjpduW9R",
  "key35": "3ERhQ2mLc2nUJHJF6NWYJYjzFXPpbGtwjLFg5p2Nv7grRtKC2aaThTuLwubNbPb8SYjXvwEgyMzTQwzaZuHDgRCs",
  "key36": "3RXhhP7WRGXGXam3cTteg92yejeSB2nrxhvLfSUT7bsKZBXuTBeEGLsz38tJweif5A2H3jJBqCBjDpNfG6691iay",
  "key37": "3iivDBtMsudxjba338A3JeWsPUiap3YzyEQXC53VosswiLeoJzPTZpxq3rgwqFNF9rePL8EWRi2Ei7Vi9xdxu4Fd"
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
