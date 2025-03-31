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
    "495Fx1DnAmxCKRthdL6Dr1MXo4uhiVDD4s7XTntrbG6bmHE6tbmfoEPmZvmxd9GAqxJqSPeZbdQUmLepbV6GYkiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWBHHVwLjX66KjW2GS8hHwimofB4ixeCXUn28NHySCGw2ERmKbr23rNuBgCiPCVjuhYEVmmXXqradZuG23Ns8op",
  "key1": "4gs7EbjrUEuKp4xBCbvFpp5i4Rji4jVCo3Nsi1vyczfkgoDn3S7MEQkDx14Twe7QsxaM5m2XKCcfNvTG5HKtoAa8",
  "key2": "UNHENFyzfi5f6ppjChWSbuxyc7soFLcLfA8wrsmjyo2u3HXVwvVsgDAoSoi9YqBWrZnRcPw8rso2uviYVxQGBiu",
  "key3": "CCVurcsH3DitvmLAx7DeXuVmdDKX5ens62KJTz3RCmipGRs8yxHertnBV6QbhhgAyAvjNkAFEnMAZqCtyT5LA6Y",
  "key4": "3mUPw8ibAFSRwje345gGjQjV2QVcxC24JfMchm6D2Gs7pcvVYokRaGQJUM2EW3rPypbUCL29GNxEmQiBpwn5AKHV",
  "key5": "3tW86ZzuF1AaLhNcAmgoVG6QxCpA2bo8widf6ucKQqzqaj7REi8b2c1HSePe8kxzFYhKBjudPf2gM1ciE64MoyKs",
  "key6": "5Qz1MZD8ZZ93FhHQZMHxYuMiX6sd2xuSdras2s7WtiGdCQ7geAEgNSMJjcLVoSUf5H6omyqSM18PKKVGkgSH8PQL",
  "key7": "2RikeD3KL3wTGvhanqS19kxTS7zoufSf8sMEVQkxPJBW2TqSy7rbky4kL2RbFHiedscHLTKEbCvaCXd7J5ZjMu7r",
  "key8": "2Xxz7EH8SYs6PADsRaSrn8UZM6FHNFnTxcJWmkeq12837JAHt2KLe1VKe9sZrYtmLh35VekdYEdkxA3qrzFgLPkE",
  "key9": "2qKb1V9mHFQNDUwpSsdyz4zNYunfp8DTEju2koCLAprNPT2SxT6MQ3XHFTLVdMQjqH71WkmNq4B4GJuzn4bESEFN",
  "key10": "rEczE8SG6sjCWYtcRs2AVGcrVPUQfjLLbkf28r5RvShmVgae4evtJuUU7QnkhNjcyGg78g5i19iPbLjpqQDUvYv",
  "key11": "BjkmPBVb7J9uGQHw12EyJoF8ChTQrnsfrAATxWoJhSnqHCqXvZLPGHrSnbP23vu8oZHKEePKYFVdcW3iAvxaXoh",
  "key12": "63LqstuZjUebd5JaVzZGaKrpj5rjpJb9YR9sCT4ix4As8WGbnzqchFaF5KHrRPxr8x7Ntfcomuhuo4ka6S54nLqG",
  "key13": "4CLa8wct9qrqxMD4BWFd9dP4YZsG1jKN75v6K7NqKTKJtyMVsBHrfnXH4iGYUfq5KNVsXzWve6rDn5M2qALgDwQ4",
  "key14": "3ac9VJTqmDg7HcMmtgKFjbqs58xg2xa9JWd6mzGcnKi58u8gDd99tZuhWGrynTphj9QGE4XFkGMBUdm88NXrpYRL",
  "key15": "2YbuT6hP6Syk6Mk7YaWLvNabGeNWhen67Asus49JSFyadDxxMrJVsyh9htr3S2WtyGGzD3zLxk2uPShyao1yqUDR",
  "key16": "3XJydpkerMVHMeCf57CZhMyadnATcA2uY2mPoii43avSy5suF1aaCiqcfXTKQPH3Uho8wj8HC6upWWU2iEpXc1MC",
  "key17": "3tbwaxc55J7i4JK8A8HEzaz9xKrCBh2NAjbGvPR1DDWdMiBXWkrWLiWC9gpZ6vXJz1mQwUDB8wRP4LCmRajkzYm8",
  "key18": "24gnfThP4quRuW2v3jfNrxf3yuaQ1TnmhHYhj3YdRD7UgaGykWc6dE1YeFQAP5o1kxMexXB5RRbgeW5zSbKcJ1nW",
  "key19": "3EKugoVEQcXXaexREzD8ioreTLm26m4WkgH9zPFbU7vVSR9GtMFVHsHNKNf8o4LKYXXNPbwQFsiQEvG8nJyH8Yvw",
  "key20": "4nQb4Roh7nJUxjEiRNpQRA87fDNdjQhLN63fn5qVEyNkHgZPhTytK9nnfgUNRnjJGZzQPnqYNRbHQTFjnXVVFkLS",
  "key21": "fjKq7bmBBaZEo8dybJdzZvNqJBR8T8ZsTBNu8rXqNNu5ciJcerDXxmJE6p13tagm4Wc3mYRSbCV56QoKnSGyrZ6",
  "key22": "67WuuhzkeuDafQ3m6QerUm865JuN6zyWfyeqAdWSFUKX3BpLu1aesMd2KT7SZTAESsaCWcXCUfAJ48RopsbEfv1C",
  "key23": "22Fpq27iRLSmcUWXyvtSQQmQtWnJ1CUb2sqbPm2LKw7Nx7MxZAPZFrs5QiTzDs865hKH2yyf8wh3jf3V4sH19wYT",
  "key24": "3ADZPYbkyZ8A6CY1ymq2w565DSFs3qhS7BQNCpT7yyiUmcxAj1pee97gkyWA3J4adpUuEQ8nFpas6xUd35QyYxCN",
  "key25": "5rbFVqpAQQhCn7PUFpZWDEibPxREAxAvwoYNAcbzEAPmHNXUvStnooBqjLoxMC3NiWo7hBCUy3xWvaJTeBKG6pGA",
  "key26": "2U2YFQSRMu2egkMXhpKrrMLfAut4ytWWvC4o2EyYuo3Bmz8uN8mjYe4PaqV1kvcbwRw9sumtNz3piwrUYDjWrcCq"
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
