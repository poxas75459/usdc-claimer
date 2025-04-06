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
    "4ELVGU8vn1v53RpS8XVMpY5dNG6yqsK1SFaGaZwzqtC7FvxdSYSJpL9XLJBrFBVJKhjYTDnvc91aqWidRA6MEN4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHc1UT8bXR5u2BzYNWTq6EZ2D6iaqZkAMgRc4bCv7EdrYEqdhrjzsNBjUZunWPbR1voQFshDeqxEpwiBFf5HRGe",
  "key1": "2Dj1LCxsrd5fGtcYaE9yic8b1K57HUeDMxWjQs6nnEmV95xmi7niNa41miEcHmDiytsjSrJxWx3FkRSQkbjsLoXf",
  "key2": "1voCbrY46UxrB1itwrAcVqCEaZYDs4uaCiWGwuGB9WnFYAjabHU28x5fBSDgEoi1rLtnEP6PyXapH2p4s2RGj2V",
  "key3": "2RDydKBEspLfwJkXEeiDmA3WH2sRLJw1hn2Vwowi71qxZ1hHrUyxWvp2NbCUpiXUFRS5BN5TE1h9LaKVBxAYZ7MH",
  "key4": "62uYt2YRAV7CDnbSNhURLGVowg9HRNBQ6ytfBz4Tt2XTDz8C3XBhdndVnfetqMGrci3SsmwCapCrHA6ggcSLkA9U",
  "key5": "E5hwkBHcdn5gjwnE5ZptJLaA2FUEdKjyaLH7HHEcXuK1JVPkjJPsUjETCf3apJVir3wzuJW8QsFDv5qcPjzHMU9",
  "key6": "67prwCx8o22eELW8sLkWpUhJrZoqQuH8MNfvcGrnTgQ8NS9M7BF2AJDeFum1cC2ZK6LUKKsyLpREyZMYTQBrXCmQ",
  "key7": "5PVxZr3LhM8pQ8SRWi9e89iyKfTBxBrNLSQcprzigGorFCJJtTTBAFRVQwNgCPJEckMEHxwrtxKbmHcCFQz4jjU9",
  "key8": "5tZrQkWsBLxEmpjYHYxdRspxQbJYDRLkLa7Nqy929yU2AzaoCVjsTJmgELmxPF58rE37o2XejnDeYqdqNQRLFBzQ",
  "key9": "j2eqHHuebmg1JH1CRi3KeFzQKntVWsFeuREsbvppSdDE8ieDoBioVfZHjD4sRK3miJkV6aaVAnCtsUxAzH39EWE",
  "key10": "2KVonWwQW1vv3pq1xt9qLKX6qg4skyevQNzHdQTVg19YXDuhkYGcmCn1rGVYqCb8E5kYxjSRuSkG8nFEpUNzvh6",
  "key11": "4tLYJ6Bdp25haXRnmkHskrHkwbgvrBUUxuH3rsZjC5saWvApL9huiFmYnZvqUUB2DtJkeCr15u6Z3y2MhWtYihiA",
  "key12": "aVt6RH1cj5wzxpshthwKGh7sQM3y1oneqsBCRBZ48dCDQRMsT2sofLNX3p35wcUizZuFULTE9t8tEaFmeoSypaw",
  "key13": "3i1tyxhCAUCs8eP8sgaSmyywp9VzDWmTRAkdzn6Hp7UcFukN3F6AQm3oVZJUYBpHc5yTJ2ym3SskTNr2DMJHGsCk",
  "key14": "5B2KJ4L7jBGxRkC2cUKRfxnD1ysEh2ZWgDxiS33nE69P24EAmC6qKyyeGdss8aMUxxGHYqnnhq4h3VNdWBeJZqve",
  "key15": "2YBchgRMLgicKeqayArHmfHTdWhGLbDrTJEfow3dRtRW3aBTui8N2X9q5xiivG4iHf35g9TE44nejTtFrN2ZKbDA",
  "key16": "2svoCDu7g9FnUECUVULXb7Ck6hfoVAx6XAvSBtDPTYZtnismzjBmCYzHTpRT2oLAA6RytgwdDmNufdhWfUXQHe1J",
  "key17": "42TNJFLDQodstnTAzykiLz5SMKCh9dDHhEYP63d7cg8YQfjBWpDzFBPBKTBLZ6uehX28GdeKP2KZc44Y7W2VBJZX",
  "key18": "5kkXmKrS274Hyw3AVKaSAa3Yt8MmcXwRPdGR4Jvow6ZQEzT61MQgCRskXzmrRMUN5dCAJRnxNYW6w35raNu6XSgt",
  "key19": "2hfkKLHATmnaf3jtMKVDa3e7iEsVeJN3Uct8JVCkRKX5EMvGdhrEa2VftLEWhBy576AxWrE74QyF2kcf24BRcBQp",
  "key20": "3mHZVbtFsFTsiqTScvwPHsc6cmPhgew9cgUtFHjZhopFDyqUfM8WgEbRxDD2t6uQfsM4u9sgY3T6wBD3bDujfPuX",
  "key21": "5Ts4MdDadqrFNENNnMaDfiuEeEze7Nq1ePeNUpeD6aMue2n4uaUoB1mukg1ixyUPNGBk5zbKQunWsiudGZK26oq2",
  "key22": "cdP5UYXhzJ4JBAJ1zSZtfFqzcgrBMJ1eu8Jr1gXEudmotWmdRvfeKHVvFSCCvDsyXwm927jJGmNfPF4S6ydZQ1H",
  "key23": "48TqahwPLai3DtdASXhCkejeigkUECaW4RTzeQ7MDU4k7L5ev9Hgum68ckGXaXbsSLmAWZVo2MwwD28hT5cpx2zQ",
  "key24": "3VfsNXuhym8hnKru7fQojbLd13PhozVPspTFoHFLaQnUMRxmiKeguoPreGuwQQrtH9dQ1W7ad3B1PvHJqVcwXgd7",
  "key25": "jqV3LWitkRrsjxJj6g9AsL2Ep4EH3yq7GLCey4MgoacZoDQ7q78zUEaggRGMjnPLegRCcRzmHQeqzT4pyRwfFbD",
  "key26": "4DqQ7g8v1eH8MDrX7WLZKLVPVLvRNkv6ztQwBULDJJw5iRr5jDTrNNBr3KUYXBDDqEPYtzoEkroqieFQo4XzaQf6",
  "key27": "4XwemLk75srZtK3zeHzzWMXCHUgnFpoJmx9JNmCemrimyUs7xhRRTSCjCuwiZwKcfSrNRbjV2DA5ZkHskbWy9GWK",
  "key28": "3yJEHu7m1z2jqCAPj366FaA5uMCQFyQE6gbwYJVCRcjZrJ83A2ZyMU2i7ESJjNxE7LmznREi2rjvBReP7gM78T77",
  "key29": "5oHZ6NdtY8BUUziAToJA3NfCA7L2i2LPE7d2s8RwPV46UAjcqzYrbk4n1p4KKyr6mKC8cVkZhLyQBQTer6Nuo45Z",
  "key30": "2tMNSxwdf4v6opEjNAgPnot8kk5B9sti1AthMY6377JykmPdVnpaJVdmcYzbb9bL6BXe6tbJKAqN6J8RN4ZFwmYC",
  "key31": "2RzGrQLSZdzPGoLmJYYBDXjG8ng7tLEHPt4eQJY7xgPRnAR74JamQJSTRtxWujBYZz1PvMSVCLkv8nTfpjPuRUp8",
  "key32": "36Sd4iVWahDJF7yF2NRCNkbxsqB9CKnJ98wk1tkgkaZpRwcRf3ben187jm9PCPA6QAbsuyeJ8im12LoDug4PdT4a"
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
