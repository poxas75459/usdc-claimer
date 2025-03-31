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
    "3VaH7nT2fbvFwBDuDLJXrMcuqcyt6HLoGjuzP7msotFeyuz2VWYw2z8BBgehpimDFNNVkeefm55NgmBudMc8uVGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZ7mdLL6QoQLTCp3dMfCvyvWkvB2G7WQUScWSRwcHbYWC5dRCjeij4vzDqR7JjWboU2sKLLi46uG92Zy8HRJ3dH",
  "key1": "3Mz7YEgPKeY8crHmP7XkgsviTsoYCPRrj7MQBKGT5twEDZ77abZtTcVeZtabsfQpr8H4hC5xbVm9K4RrSnQJCitu",
  "key2": "2aXHMe9YFWiMZfw4hziKwQhzhwNoNdy4PFYjguP2gztot79xEEUVf7uH8CLeNXT2PfTDGwXkMX2vbjv4RawJGPAi",
  "key3": "27TPTnTo4k4BF9kPRv3YGHtHcWPPXtzRSXRGbyHrcwCjYi6TCcPoJCG2t2SSn1xfV4nSrVArQLCV6hwy1anRZwZq",
  "key4": "9RDozMB34CS7k7KsTkNLRFMntepo8NsLFfmxKyK6tQ9JwK4Pc6Kn2zU4gtNXSB7oVjNR1zmFEbdmvdbxZEQhjKZ",
  "key5": "4YvgHXnnZaJ4HVZERqiD3jU8Ani3MheZ61cGxvtfv38MmGaJ14BPemSytFV3mnzKUyfbz7JMv3HNXH5avR6PPC7M",
  "key6": "4g35SJHfkF1rCMQZRdgxBEcQik21z2d7xTTA9kK3fqF92p6eTY1BCfkij1NBX2TegddMD4w574DCEpyJ4sTgxF7A",
  "key7": "3wCq8Zq9fF9itKshQccszmT9H6r6kXRJnKbZUtPM6yY8MTTKQx1MJ6pEdZHmii8DxVxk3caQMqK8P7guHxKmAfBP",
  "key8": "UDJhDzEbxrLdGSY85Yns1bW1QY5pATe1GjQcQTsawA1t88xpnda6VoJzvv9aTWHzmTUmazvg387GsLjJtRfHopd",
  "key9": "5uuDZq7cKwsEpT5XdpCqzixnoNBFPWsi14A9VZHG3KkRS5NA9yqMudgBTXXpGEgcmCNxf5HryUbHFk7vtb7jBpYt",
  "key10": "32hTR1QGv8j3aPB45sRMQWs23XkM3Lgj1anUuATRNvYxD95qWHC9aRAJQmB19U8FxtXjrEuUij6RKqs72R9qe8kk",
  "key11": "3RCmenHthV561mHRdg2djnyE2queTRgu3oD8VVvYwDUitVUUu3TpBdXkCATtCpHRYhN9VYoeW9XVUtLMFk8DZSEd",
  "key12": "5bT18xK7RQLW8wG4juKCAwA3C4MHGVymZ1CmxwD92yfoRGGsuTRGj1Ew2fX8QqAUtvYYmVXjrFRifdMBdAXNrHwL",
  "key13": "nVh7wBReJb5B7DgxpYawwdHMYuWrvvmeNV9SYGnj1rvBvoe9pE4PbHtQsqUipAbGWmGqFTVdkxrqhxPJGhTV8wH",
  "key14": "5HihroRHujfVeNTHoBKd3CFGoGv3Rnx1dGNaoP2AKg5WXKCxNEbUV48Mq1PET8Fuv2zGMobKEBcJhXo9FkoAZJrZ",
  "key15": "37HXSen2VHySC8fEWCtFKKbyfjn7sBpXtWSvmKry2xcfoZxUgsGB8XjUCuRPTpJdSBgRVp23bxm6zSMYmwR6qEK2",
  "key16": "5GNYHyqi4T5MxgvjQ5WXD8RgTbAm6x7kBWzuuuKDMUW3AhxnivULwj6pms2fsPFRnHHMCj9BRBkTvrXM7y1fKdpj",
  "key17": "38WURZF55wAnezyq76pEkyppucycSrx1qfvqx6kmfeADsWq46jt2YtjSYxYX7Kz6pWpFMfkMNDwTSzyUyWtftmUD",
  "key18": "5jtCH2MqffRccYoZni11uvZhv6tfEXUVoPmH8YQK6B5B7UUUxNycdapkpZCvFC1KEGNFX68RTTd6j7eLbKDzJ8EA",
  "key19": "4RZFCCaBWMDcLdBMUyLB2bGGQFcziaBAiWuFRajBP2N3LbAoYcjFHHh4FEpUeJsEMKy1WbaBo4ZkSATSTCF2vzRA",
  "key20": "3Ur6M2i32691pS5MkssHEpATjEUwBaKxG7AMViTDLw28ZpeLDnLcj61gHxesGFFJns7r6Ro5w3jrmoZreFT8ZxJB",
  "key21": "5BiwFhNYLHVW9QHe7F1LyB4cHFvUvNWw398yQ64FvBUZeCmbFP9fKjVYKmTU3aza2LHosdVK7jNQUyE1n16FLBeG",
  "key22": "4K6rttzTs8TKY5i9AP4Lb71vabhp3CkU3Sidoc9jB2mN9Uit454S7AFqj3YLYorufr83hUcXp6fU8u9KuLE58KTN",
  "key23": "5XHHtrFz1Q51cGoFNBJ79HWdxL6cK1ucqk8L2KPZG9qmFAsKejXhJrQUTMuewwd97Le6PVcdm6Uw5cZcLANXEeSz",
  "key24": "2NMJrv7A1AbCayCoeTUbtJDWmqEFU8j5md7PtmJSQFgN1FomPFbjXHpfcKbGzJDyekG9yE5eCBnHEMLtuKKbpEMQ",
  "key25": "66j1djxjkwJA8hzoX7Gf5cjEoqbbWVToBdKgoVVo8f4xhmrf553Qt87VRaMuGzN4EQi6nyNAWrAQV1iTQGPAz37p",
  "key26": "Kkx6Hv3rem7vZtyffdbY1MxwZRmd7M6eCV7YiUF9g3heLetaW7fiaPEqb7qUdpZ5hFiLmevZse1vtgu4Q3hsMmU",
  "key27": "2U7cWt8ockXP9h4UEWksqxDqTiHyhbLoobAYrNrJYrdeRpadU7QkzCLqBLhHRofrjYiMsNX8mv2sHtFbyQALiek8",
  "key28": "24ofZZiLF8h9huNNRnirGTMALuek2vupvEMRDk2edHdtBmthaz9odeCCNFQdEo9ZU5FxaEEXcoAQDsbNfaCXtNQM",
  "key29": "4hk4NfftcM3pDqRMU9EN2RVr1NYyjvcfzsLj9LfHDeT3yvTcrkperE8qXjQ47bRB4LbazySNw7iqd3okSTjB17St",
  "key30": "5emUVzL6L1SG3YroqfwEBY2z3uX2hCVhTBbBSsvBpKgpnbxphnEV7JNvJ9qFd8WRDwsgcqsN5k1jyWTYwvJSSG82",
  "key31": "5d2SYih2xuW6FPnHGUVzBbZbWXvKrtQJQB3BBxQ1hfvzRptZBo93cX7PN4qPoRbp8Jbr99b9auwT73btPu8X7QaH",
  "key32": "5AT6ft6vKYYZyLQXGFoMfzoTfcYxdHA6rwdWRgWhxiEZkgCqQbmA8xe1ULqu4p1e9EcTzR3ME3i8kXzZvASQCF1G",
  "key33": "625386CtWXxdK7Bm3Q87YMoJ8VSye353FyBqagjDVfTjBEfv4vpy4r6L8RsND25xr3asFrgLRnVJroUSXSA8v644"
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
