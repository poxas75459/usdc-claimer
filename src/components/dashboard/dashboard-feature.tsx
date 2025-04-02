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
    "qYmmAmX7Fm8bEQMYEctaz6TJiXng8TXxqDz1BkK8hEBQJxDfZb4mxsSAFpE1dTyNogPpvYLKfVbhdztMNatUaWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCCwnckVtYYec7yptTzAV7qVY71BnA44Q3UGZ6D9eZd21iXJroh3rwXqTRCYa6k96fpsxBoBmBDmWiMv5dNAB3L",
  "key1": "2B9XYaCP9BeiqNxx22dKT3RsJC5sJNyZ8YyTRQ36eM96P2NBwiKuJ2UAaPxzSYvRn4J8NzXpvdZGUu2ZuTv3eZqU",
  "key2": "2AGdPmAbgYPyutKVXpAh5LnxHfu9cG9iPSQeWuTYRtYfoPSUWpCK4e8wegLLQLGPeXeBdxdAKRCtnNFuxgmGuMPA",
  "key3": "35gr4rBkirLTFJfvsLVA4TvsUq6toW6aSozS3ciz3wE9b8HH7zE92VCkRMdZktYXw2G46VdjnpVfBcdoZm6tv6fk",
  "key4": "3sNfnedTNdb3x2D8UinUivXH418fsR1e7vs1x4XmUYbaUdTPSxSAt6295xy8HmmsnnaxPfVg2K35WcPuc8N1T9gc",
  "key5": "865dFMVvs5aFU4WbqQekPRHvDeQSWbZsovwkjsEqRmSqCpZcyTmNxwsYeaQFQ8kDsyAxCyh2Lt12q3TMCDT93jt",
  "key6": "4GZDE4NatUPeF8hxNV8QGhK5abrdzaEdFvNzevRkcQoYpVwAsk6fTL4eXjL8TYv3pLfVhy8pE9vKcqa7ZBJSEK2f",
  "key7": "2b6PTN7GeMAvW1ytQT9kZAzd2bdMprEUkQuHhJF3oNV4mDG7iT3n8drLja2dWyxUXrE1YhV6YGV8KPRJQH7Tc2J8",
  "key8": "2cbGiHY6LEFDyR273F2G4xZNNixQZVFeCv95JUrvy46fp9zWo91JEJa2n2ehFAUHeUrfNpTRFyHB4YtusPRKqmeW",
  "key9": "3xskYddjvGSYHFr2DVPcoNMi7KVtjYejt3eZTCWQ6emM4D62bv7ZADjjf11BQ1ZPF1dbwHR1ifnd9jftiQVdM31r",
  "key10": "2DypHCW1vUTNG8og85misnyzJqG3QXza8CswB6YiZmJR1JcRsxcApbXV38qknc7YAZrhVaWek1VeHffsfvRg99zo",
  "key11": "38iMo5wv7AoKdkrvWJGnHbjn3wpkabsz2y3zLF552QGCedD7wCLszZuhNdnoD47aQdDQZFn71Krh7WMcE4FMVQJi",
  "key12": "YFxi5o8uKHmiAAaa6k2dYG8PpjzvyKKP9o8bSRp1j6apQBDhv9ruvPaL5KdktSyMbXuVKrnUGBhEf31STAqHnWM",
  "key13": "4CH5vR4nTPjFB21peZKzTadCkfo7vBeaY3FFMwmLG1QUgvbda11SYmtN29NhQAY86sM39LM9pPdr6Xi6n1Z9fetZ",
  "key14": "28yiqaxAXEcKJL8uRBA95HXQTSiXzLayhNvgGhx7A5aQr96D7uY2WQMgef277WMyesTsrN2y3D9UoanAiAQFjNTi",
  "key15": "5wAVdwgicVMQau6m8fgCtx7oKMkRT7coqs48q2J91kRtMQVfKqbtzbKrbSWTLRt18A32b91UmA9uxqiseqLoqnZM",
  "key16": "2rxdVTXPuLTTqG3UVNQDa84BGHdUTNL3vdAaDvWe9MCwEB33GpoATFFkPRShEskG7evBgLQUhmfsBeqyCsyUbRZ7",
  "key17": "31L7HxqgFRcnPqyRgNXrdeGkQsdAcBZysD86KQGdLLiA8SzKMHP1ZkN9HoCZu38Ei4rrsHQZAavuNMi1FjFF7RBT",
  "key18": "41E2ws8uj9ncmVrHikge6F4QD6BVLcRpvshd8n9dbbbbmfDgwSrf5E7E1Xh8vfJ9XNVnjWWcrj7igjyHj2BgLwNK",
  "key19": "4gYafVGxRKfdvENewf5zBEHPd2xcmLEXgXTq2GfUZ9hzhszof2QERRaFsZ99VQZUY8L8s3Rvrmwud28Esu8dvnBX",
  "key20": "1a5XLNMkwCDKc86DoMeLUnizKabXNFNVesuJBsu8ofxsz8KmRQHJMHKsBLGWqdb9iocgEu3iJu5W66z4232urDn",
  "key21": "DssUCLJdb8MdtGn8fMWbjmqpFfxqgpE5hmeB61hYmt9LsfjoiH4zEQYuixjXZSk3Raoz4MbcbT4623DGvF1Kbn7",
  "key22": "2pzhdi8kKD9nB5NaJpzpB94KzBsbJPqMXXxaKrpzbgq2VuUmiiCiYNx3qcFLqFWapERgUpyXBonLVEwBtDBhJfLz",
  "key23": "2PARUmSTYxgVZHxYFsDBY8qakAwJDCS6P66pdu9jgVXSNzgZjdbm97FqkN4Kk6RRUM28LPZuPn5KBXQV9xi5Ntpq",
  "key24": "U1gbSRZvFRuC4PXzQRuzVYXbvZh3wubLGLuRnJtZnve5hdGid9M3viVFVsHovjRGcjFyy1RibbxyxWPeqibDJQz",
  "key25": "FgTJL13sBA2yo1gi14gaSGMycueqS9b148wRtdfixMSrJBjS5dhubLf91m2zaQs664pC1qWWMuTr5of3SKw88Rz",
  "key26": "4fG5rdx1R6mMNi3c4BwmGsF9GmmpYCH94DnhxAuQuaujaxDXgPaQwmiHWcdZ1Pbk79Lcdj2B2d55w3uaoEmCMisH"
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
