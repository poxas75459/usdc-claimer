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
    "2Sw3WB2nnrkwyetZgk84soqNK7tjqWYHWnF8Qpk6bsM7UFeZ4JCR2uJcjMhZCFXifsGyAtTQYsnbRLm2rjMRYGYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjDVohoZrVsi6JksrsMCpkeAL4BaDyxgteZC2HBHJM2a26wbfThpY3KfiQsQUSr3tgkBu9koiqHAZFjZ6E1yvjH",
  "key1": "3jr3V1i761f8U5d561mbdR41dqVVqBeb4Pg9vxpLxig36v6McH2ifnYqfPkbW1nfwKmhrdcQwrditv8MaqP4jTb8",
  "key2": "5QJAoLPJAeiQpPGikATxe6no3GwW1wAhqgz3Het4pJLkWNfnnqXr7W5PquHUfqFMdAU3Aep3kZMPX4UcfDcdvs5r",
  "key3": "5BP1tRQhBeyu6ocoea1khjEHAY8RZTtJRxmqXMNUALPh6QsX2U8cYfYDLUHpi7c1RaUjJETHGAMEduueqqEneFBA",
  "key4": "5HQaEUJgV5qLAsFMYBUemjLJzhmwW97PRJsMTaFxaJP4SqDc4YYGxSPB7Z7YBZ2VJMqMnK7HJtP1wzayNGzAtEW8",
  "key5": "2rWfju6A7tjsno5jtS9hf3m8B4BsyjzmgcgGxX8DLbkQ9gDdYUMQgQ9skhpzwnTddcg4oFoEAQfM3CWLfNvno1w5",
  "key6": "49kc3kqkNFyD5MLqKQWmFUYaToLN8cPZ2orCaotUavvofVaDm78hiTXzQqEWSqbwWigZ4wS3hcz86LQjSEG7yeWQ",
  "key7": "2se3LtBVTHPtFytESdfypuD9ZHXiXdacCcZ63WFNVESegw8Y4W78SAN3QNKx1YgfNsXCqRdaNqi5rEhvBff3f8Ao",
  "key8": "2f2sCoTx16AcrhXkw6bRLsEcYTVYy2jj1Q9UgNujss56DM5gFcypdYRgYMD3Z2j9vNK21kgigWhApcVyjzjxHZm5",
  "key9": "3qS4h3Yovg2t531rtAgSGxWBgKvCRgreBAqMFL3brkEbSgMrmEzUcimNA9LSX2DUXbiXBLWEAsHpajBYYoE4xBwA",
  "key10": "3ezXz8NepoowxESLWA3TiEKd6wCWoAiT1THawaPhaKJjF79JyHt2GVwTraQ4DEuBzi9vzFgA7XWJA5kGh7pBRM9a",
  "key11": "3JQ3ptP5ERq2QsFhyy3YjUuaKxKRPpGGoi2R59WPvoG5b7qkZXCqy4Ry8uVCVBfwdqby1opCSkTEehHx5zBfKxe8",
  "key12": "3NscyJ2wn682GeWfHZgg6Stu7BhBqghDLdiQUL4pCikPhQ4bT5qnuxCgbsqKya6cKhacJKgp4KPuFExG9UMQDXNJ",
  "key13": "55Mz4fbUtioiTjMD6e7Hos2dApVhybGNWw9LqAXZ7diV9uSLCWQYZf49gwG5uuRtzZLuQUbRxEKkFHeC4ba3X28z",
  "key14": "4BQmQc4oJMWGWMiNJd1pmjS4hrKbLUWGo3NHgJWeaZnVZAAavp3SLvNVRDYgSMH6W33HNM3EptU8byHy3XMY7GEf",
  "key15": "461ArsUWskbokMbGWJ4VGfuiTe1SrHEPayUD5oa8UUqfpkH6dLAAjykpchqwmeffqpSbppC5QqiP1gVmAert2xnN",
  "key16": "24q1obgyDCxStMzEXvq6QBmzoSkCxDartwvKtxMmstATkMxkmqAkx3QFXehHVvSwEdrHB6SEUYZpShfv2hqJh3wi",
  "key17": "zzCgFgWqaMhsmj3hsCmxiZzq12wJcT8PnHVp8axXhQtrirfbwxFUGs4wW94jd6G3NpGwUdLys6PQoknqH32xx3i",
  "key18": "4bagoz6TKKsdHJWCRFMU5Yqu9U3MXEUrPfikjWWF3BSFJabXm6V3TNA6sV5NXPCUyiPBi4mEt8Nn4KTDvAJ3m3AN",
  "key19": "3VzvVBAEsDomJ5CQcHBRmiNV84GWjxHeVNBq1x4DZ7UL4ar6vtz4QX91tc16cLmqVAmSQTd9uG2ZkHwFTf6f9ht3",
  "key20": "2HUFvgJ3h9NxEFJ9xRCXawC7Y8pkBHM6T5zsLi5gnFRGe4oXnnwV35fhkE8UAC8xU38i1eWMkeo8RhMfTRf2ETVt",
  "key21": "VaXGVKhhDxvjnKb48PrKMvx4WcurXQGMsTmWPniPUUDmb7f45ZVYWQCQ9HbqDx7A1BS3R7nUvRjYCqGtpnTUB6m",
  "key22": "5EjPBoo8Z2wEKfLnjW9jHXUjSv3u248d28ZZ8QvGBxAxKshs3sL7Y1V4JvmVKrppBPeX1f9ubp4HeCHpbPqmFeH1",
  "key23": "3jytcUjCFhZHzMphWoSvD1NBRbiKTE4U8zGyJWYt3BCT3WdnbPVGJDQ7WsJzySDUbL63d1JBMhD1omqCnsjRhksy",
  "key24": "4vbKt6CAvsRPjpX9G6nBKntNdV3Qv1qPcGotiZZEfpn5B4mMCSiN8ErZHhh6bTwsMQRJHZAJSgiS1eW3D8FVdseA",
  "key25": "WiCWQ6EjaubDSmeit7BBjhD2nQaFGVugNzP1UDjZMDHaK5ZXfaF1Tqjq8wScNxxu8csPpC8uG2vXszpqKcDBgYp",
  "key26": "4hSgsfncngHKYBNtggtUqvcCCLy7LXpW68BtZ7xPZw67tJcQzgGHFNHVN3KLUSfTGHNXzxkrBSA5LyKbZz4yFeWQ",
  "key27": "45U9QbZ573dGiQSovsgumH64hYhUBzqk32HHk2CxXTiMv93BCXTpy3Gh2HdkWxTUWdodsF2gGb4sQC33GxvLtixP",
  "key28": "4BK8SRd48aGm99b6M1K7UQcEJBwRRdtUhLWcgGBHdC1HiDCTw9r32HUtth4js6qvUtjB8ZHMKpsTbUsaW3j3QDDd",
  "key29": "61BDmh6L1cU1FGQfE9acEfGA24Rho1vb6VQYkC9y3udMfCDAXYM5xTtXjTZ5hQ4KNVckqTjgcUTiB8SxZRETZ4aD",
  "key30": "GQ9yV9JPitpie1DepmThnULpNjuo5GBAx5sMh5qHrZDzfTJo4jA2re2EF2Fy47pjQ7e1p5s6MC3Z3u8iiTyD8HJ",
  "key31": "4tTKnFYomTP5vNcaNoaq5J8K5SnapmD3Ex3GB4GqmpZwZeck97Ymk8yHizSWipLfzHznjUR2Pvov5jP4itP66GvB",
  "key32": "4nUymhNsrxn5Dx6Zr4JRv4oDZri6ZZYwqV9J1C25iRhMifeCA8JDFEqGmQoHq4giFLC9WPJ4ZvXVkP7HvGstbrTx",
  "key33": "55o5aZk9pKiDu7BpiAsJDAoYct1r66QE74bunejr7isGPVVLmWakAfDh36vUQq3hiNHC851m3gbHaxtWUULqAsDN"
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
