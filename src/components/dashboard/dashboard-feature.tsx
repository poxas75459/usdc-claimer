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
    "3aAGCnxP6PTVujYs5sURZBTS4zeQE5NrWuEHozvuZxttQAjZcfH8A5c59hPsXEvpF2w5FSgRJ4wYtnAeLGixD7xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQ5b1wCvvt2ipvoN9N5Bj6254K6HZ1LRkR3T43sm9N1ugVA39c71fLdykbPHu2n5KatrH9kgMfaeLUiict14s61",
  "key1": "2aPJfm1J4gyDndNYfKs6yRgJC7TFXbL2BrCVXQy2hs3FQDfmnnZjoaqm9CpdQc7QgUHs7bZzAAcThPnjSKz4yS1o",
  "key2": "5JrarrF6cRbD2GPAhRLScBkgQCMnZcWy7fHcLpQd4eBmHgc2Ch77jH89aSkwqLnVd2RE8HEUK2VxoHgawaecm7UF",
  "key3": "5hQvKbxTPJEToLUBvRVi6VQTNCygZ7sARSFLxATHipke8hrpKyTic6TbKYvDNAmpnHLovgaRaczm5mrY97uqaePE",
  "key4": "5LYn5B5vSX9VD4v4bYvx3yZzboAc6PGFcheK1f6D7moqPyeZb5A7NaSgJb9GZJd728rhj4FnqMWvUiNr3axLDcZA",
  "key5": "2ekWbKK1sQdY2HcyNts1Ng96cSNziWb8n4sjZC6S7Y1oGRrw4CJS8MhKQizk7dS4awUorbAwFkGj8NuTH56XaMTq",
  "key6": "wxsWDFWDptFnBgXaFAQBbcY8r7cixudo5ZFnpMdAwPfWB8sRfNAzLgWJSkyM5Ssv4NVwKof1b4wXAcQ42sxU5wj",
  "key7": "66b7QYh4jBdRYiLiL2i26YwW9RRkDrYht5dP1FE1K4uBqZwb2FmYvdWJVQvccjvKtdZwWeFFU74H9RihRCci26EE",
  "key8": "2hahw1GwdfMk3p6f3BNLPneSP1JA9RVKyw82PR7a6T6YVenDMWegqRLAQzVXJ8MLqgzsQSeBN4cNGXqoqYNmFBy",
  "key9": "4zMeKmeUridmVvfge3cBtZj81XWYc9zTyuDA7pfDLrDFfcu5nLfV3purrWpSNYTJ562w4REYsxAwFvoNEfgbtx4K",
  "key10": "2pewsneDgASE1etVqC6ynLAC8Da2QQkSFK2WH2odMY9LcuejFbFDgKD91Vk243Y76M8L7XCTNQ1G39YoCqKcyz5v",
  "key11": "2JUPeNSxR9bKCn6q546hu8WUGJvjoQELtWpqv31VeW2ows5oyNGKTjsXzVWKbnbzUWHa8JWbwap6p1aM86oP5NFs",
  "key12": "2T2pmToRNjd72v9SqVEL3gw6qpKMwZL5dWMDS7HRh9oeWhvLKj4wx7tPyDbCAFee5ymh7qAXUzCLYxvLqmPG4v4y",
  "key13": "tYfvkFSELYGY3gzZDLGeiKqVnKnevEzzrA1iDNcN9S17RudEiZxzNaYG7xgcZF4jucj3ABox1apm97TWo6YMMdB",
  "key14": "2KmtXS44HyE8etwNauBr8vYuajfKGseYVG3wkxrpCZzHCjEHFaLbsxcyKQRPRXRwG3rKyHofZ2ps2MdMvJub2n4x",
  "key15": "2vLXttCYrLApgyp3eY4775FNxvcL6YJXbgzAD2mcEuHt1fD15NUgAsPuHLPFFiG9RgjQBHXJp2vCTJUFrPB4sZ2u",
  "key16": "2yN7qsj3y35NEs93yAc2msQiSqFU8rGLvtbMqz8nkVhfMsvJFnLFx5gtQQyjo3Sd2uCmyX28JbLgWq2qaszGdkLy",
  "key17": "2phrSTUrZU9CHHQjh3HX1crz61L336yj1USadeGVSMEh4z8roeYTkQcPt6KjyRNJctNGUDwwESSugy63hm8botSb",
  "key18": "2yjgZ6KTaakvqFNZuraxS7gB67nEvh7Hp2EXHeNZp65dXzCYWYaYBced45ZcTqMs5gXnFihGjtJf6He46bNfGYay",
  "key19": "3yxq5975msrM5iLDZfFJXWg8zyecyT3dSNT5ykqczSSyc22KGZEBpnK8xw35AK9ACK627PPfyJvrtsN6VNNHNomd",
  "key20": "dudp3GSse3BGh3sSydEHizxkicWWRe1Scg64z4yM8cGPdc9LCnAZQdhJEs7AqNKGWCmbpJkqrtG2WrWQ6d5hjZa",
  "key21": "3ncANoi1k6Bz29S3vGwzn47YaZ7SCrFYEwS6upqCex6QL9jdzJzZXckudEcLFMYUoXxKaJLr89GctpPBFDXpyDfD",
  "key22": "bPTh1mjUv5Qrcb826d4RmdLhfKgviFU5a6nnRddGDRaUD2HBXjFex9LDogrJ7PvLWY5QhkBh9KAAjgA1YZpNF8Q",
  "key23": "2cM94vB4wudRjDNP2qD26qNPMhhgXwqnWw5QL6jK6zTUHqB9EkmABJKdyBR7zSR9gWM444Kxr4bYrV5dktfE5e95",
  "key24": "5cWcKza9b2P3mxVdoncdxrZHpRjqGLYHGW9sXPAqjpSMcxTRLkZN2DmFpREXoCQuuxZy2ZxWX1EiQWtHhhC3zB5Y",
  "key25": "5dFiUHGNFgMLtQZJhBMW7hva7AZRMkqXdew2eH6qodWeSMhz955Gr9uh93JJMdKoZFqqVBgGTFVSKcHzzJcin7uZ",
  "key26": "2EJAeYEwza5nh1Qy3AbvLzpWwzEB7wD4TSADcBCbqRMpt3t7JmUWVZogSXCBgw26R4HTGDFKgoYqHv9WB76WmaFa",
  "key27": "2TaZDPBtzK5MmvQamMVqpzbupoEdqekb615QhYSGfJnMZBaQtT1EzWdx2m2RrMKrQvXvpB8Sms1y5VTD2ZgVi6P7",
  "key28": "57puxETkWn9k1kzPQch8ThnHMVH8tp2X3mD383ZBoiLbJnkamAKM4i4rmE39Kiw43SSJf7JtJjvfzDBE6eZ4wcXk",
  "key29": "4Pcef73twEJNVb2SCwWqWyLXPLCGvEhLs5ojmttu4pwmoiQB2MSUHQaUT53XmYxPvufAazimQ4M5xdkP21Wwf9y7",
  "key30": "MUPPVtc56iHHmXL4tjemMvDjtu9m3KdrR2aP5fAi63wJmokkPksFbwPZzbUjdQmzgv2WsTY8vYUGt6ZmcbRxkco",
  "key31": "eTofCznCBQnsiPUCXdJ7RGeYEmWPaoJEHzbi29zdFEQ1VFUARTawmWojc3oCnVZci4WDgs2U9wDjgQ8cV5zEC1P",
  "key32": "5oQp1WM6AtkZAng8qfkCMHiwt62YN7ZwZJiiov9QM91fYSwKdTx5qUiwz6ZmEuveyQU1qWVirrAFca1zg8KsH8Zf",
  "key33": "voKc8PPa6ftEVrxc9N6ZK6MfiHnndjNSC46dbZNfPW5KrvrQd2zUr5TEkfGyb3v4pzxh9GroMyjLrzXpprD54RH",
  "key34": "4knxgF9XLgLXfrNzrwU48kGbkEiEbKM3EnhUsxJDZwzmaeAJwKV2uLZjPCCLRnVix35Bip8VT3ZLEcr1bK5zgecM",
  "key35": "3NXQ8xWQEMqLCJpYsVyyMrR421Y1BEyPHZ2hfQUxuwt2LWUh4mrQ5znNNPVWEr4nMqchu2af9aLU8BzSGttq19Dk",
  "key36": "4r5k1rMfzN9eDu6TFBzCh1SzCqkh1MuEYhBZDw6XA1mQS7ptXrLNmdt7PuQroqpzYLctgwJHMKTXhxZaq6dvSL85"
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
