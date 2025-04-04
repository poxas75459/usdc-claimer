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
    "5jr4aaMNTLLUuqyv4kZEQWfuD9sUkTS7nUHvamMxu8ptd8UpfVADbFh5H2S5w74dwc9e6FQhSwimKaXoJz3E6ut1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtAhUDrqBKQoafUP3FbMiKwpd3maooy5whCngxDKsW3uVQgV5sJUjQ3apWPQ96wvXxnF6Jdro9rmFRs2ZE4PAh3",
  "key1": "2oFcyCHEgPUobAiE3SoMbttev7AMdgB2gpDDsPU6v1Twt3bmL7R4yKUurs8WV92Ax9zMZQSgXL8QyaSqdviK1BmU",
  "key2": "2M5Wc4xdXyvLpdKh3nYD2asUyhgxEKUcfZmUnwQ65WKqitjyaFGQmdcbFiYHeYZqoPbP7nUpXeWfRLWZ2RqQSsCe",
  "key3": "23f1VVj337FVNLTmi7YQftYwxEKL4dRxPw11VL6XNZg63gnpwTzJjL35735vK7UYxC74VxvYnddDYJXNc3P6MSRG",
  "key4": "2Y6rut1g1AMTCUnmqzGQunKXkLea5htxuXju8i8Fn3fmmraUHnvuw4P2bDjGGcYGqYeCKdv4PewFuXHVyGwGArHp",
  "key5": "3kCmUC82nN2VozyraKRXRDqVvxeEokL7mJcH85XSLws94nECJBeh1xje3SwTCCEPmZUMWEvq78w9kw7661XSx6cb",
  "key6": "4fMYqSuvQJrZ9PVZXuwNRv5YZ8gACQFK4NBKEC5GVT8sXfkSUBXEANdMkFFiDW6VpNFrJuh8xc1hPUcmsgfdijAs",
  "key7": "3rSo3jMK1xjvrvV6foZXcpz9JiJsykWUq5ExBPryKfhGvju5oEmmpSyEkB11Xx6dUJho4PcDSg1RzLLyq2Bqn3uc",
  "key8": "SiDobNGBV36tEtafcWb62AqvtpAkQkbghqmHwMnfxNf7UXQ5R6RqCNHxVZboi2YGmK1ahxqrsC7tg7EfbxcVf8D",
  "key9": "QWh6gzj6rCXpQzd59TF7YB89SfdYigmqb8VAxkpx6f1PUfCJVFgEiYJgsqX8KEjAStu9xzbwtW3kotoVQoBrm14",
  "key10": "en3pAzTfF4FGm9oq2hTfGXC1zBTNC58hQc3WKGmmMndNL9pAEmeTV3SnXMfEkVgXA8mRanPCXFxeJjjo38HFq3J",
  "key11": "3E2uSkV7wifePnVRpis1qjSS1mjsfwyVKuWCvBxtMiG9Yt1pPqz5bFcjadrojdqoA8ZiTrAhoLmhxMk1hxmpgudi",
  "key12": "3h6MgsyvM4uTPna561nW9eqPSPXWfGXdWx5wHgyLwdqWNUdqWTRVSGQDuQcKKmnKAWA5roVzUytZ9MBdF5Prr686",
  "key13": "2fgiUwNkqj8zgHrrXN2a8nN5bSDAa1CGUwyoq6tDCzUbtzm6RweToDsX86hqFrKyc6hXhCJgLQGcydbbcpByfKCM",
  "key14": "56c1AhuSby1gBSduUBSmv8rHHAWb773H6jK71RtxhoH2yx37CjBTqphQ7N8mKM9Q2nsYFemM8DkpPHgPkKjgajxA",
  "key15": "23ARRBcAGwgcCs4Y7uVoAdQvDEoW13cfUWuoEEvp75WHbKLbyrYSLYP2WjXW7oDT2ZhEaomq1g9kEU77FDPbGfbw",
  "key16": "2xJRmvEF8Ew7LX6eKc2EAPe8Q2auX1874jf4dSamSCPesRfAZHnDoC8ZWmCMnzqnUDZaR9kVMhcrKq453cXhdLNT",
  "key17": "5gEU1DKp8Yb8LK9khSwCjew5Mcga9WrQDsCBxsdGxGnZep9ZCYpymNmPjTfPnGV1Dm3fG6wHS35jS45s9L4siJfp",
  "key18": "v7PdBVhrCjQkmw11RTrreZ2Yrw1pL92TtUQ9Vr2aLdwdmwhSdHBLenKh5GuZRPoKE9jpLJ3SqSS7HK5eB54cxNL",
  "key19": "2P1UNFKvNpdpRqt7HorJsigoVMD4XZTa6yseABfpg7oLWL7KpbuiGhSmjfYss3ec6hrMCzrvBqok9KKpAaGFTJ6v",
  "key20": "2DQDxgKgnYth3dxP63XWCW8CsLc1Bz9TzL6D3yiuKe3rNKAgCg69WYHa4i7pwVNSqgF2ET9iSUxvPdLkTMAbRGc9",
  "key21": "2EZJBeehBRYRbSkY8gpMAA5hE5FJz9eGVxqAXb1PBdybjSvtABwC2UaYvv7pHJ2Nv7MwUicNVjfUMuFqXQLzfcZb",
  "key22": "25stiCwvuT3YGT1v7PuBq66qW9MsCn2SWyZdiHr1rCkKr4ysy1tpNy3BH1ZnHyrEcYFJNZvLz4dbxpTLeUghTsrQ",
  "key23": "3qnGmMdRdXNMVqF92H9fnB9FUrkaTzsUcsAPCwL2tyLakm5wM2vpqp9QwfBMENurGjsgkSJq2bqFRRrLVJVgDYJE",
  "key24": "3vxQQbMg4oxVgoPtRuzeMLZwMN2NWeoerxtDHmCQ1eGFfzVstwUbrmUkRBVMRy66ESWRPiKDHSnVgCKcD1ZnLJhN",
  "key25": "63AggjcHzX5es177sbmDhDaNdD5XQyGUjs67yLLTSF5qVC4ecdB8prUkQw4ojz3vnn9bocchBGn3eujCj8APGMio",
  "key26": "2TXFVydnBu1tHWNZoTpkGYJtrnopDSdTzSrcnHaaJTPEW8KVE4f2RiZeGgacyBwbnXeBqSeWhdc38v6mN7SR51QE",
  "key27": "1FMQn7LaWFttdtTqMUCpCFz5jwSZ2JP97yfFrznezECVVMPvLYBPEEcG9PU4MH8f7r9AyETdLzNsy51TtLZ741s",
  "key28": "66M1KYiWiWHfSVrPJhRwX8aNPQxuFXLg1SvfS9JqDudXio3LbAJPohwCYFSn64ryqdqr4qWB6fNSLCmxMVPb5EZ7",
  "key29": "33WsVwz1um5PSMQsfEWv5VUjZHvfmfqfwB2axu7Dpt4428QrWHaFHgEt4utUg67m1jsQMZr3oadEwMUvVAjdkdx9",
  "key30": "5XtWevcHrRTw42JjqeNftphApQ4ECco4beWEtyAJ97wkJVDRjcVBn1Ly9otPDjn8n9GwtcMd8KbJ9DvSFnJwpipH",
  "key31": "4DzpBNH2Q7QvCTzoAhiHyzA6jHQpYdfMbaJxbaDPDb1PgA4vA2G3XGkPhdmrMi3kszGoTPaUEAjbJAtbL6Hewipz",
  "key32": "4TWjx9PXtj2Ea7TfQLRafFzXNatMSVC7AszvSjQh7HL55TowKLQ7Ljxy2rxaj4Tu8gxNx7My3YoXV6esjoMetMVF",
  "key33": "QcaWEqK9TTe14doDzt6fVgavYcuKrazuW1da2ED4AvU2XEWcqd41G1iRuRr5iowuvuZWGCUECpS9UfzB95AGUy5",
  "key34": "2SzFdXuEM2uN1fbYP9hxbbEsfTLErvoPnJ1zLkJBNfDDKufyHdLt4rpNCzqGcDUTxVYjmdDVYBdoGqhNLg6LZAtG"
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
