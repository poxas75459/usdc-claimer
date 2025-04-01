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
    "2dPKmKx55NsJqKiaSnC9mQXqzrcDhh9yRaA3F3vrYexh5PS8s3rGXLdkU6hxx2Q5uqtxuMXCuVNTvaaDFDFp1djZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sofw2GqKK9pZJW91Hq6p19GtSoDQnkTDuNFU6GB94hUg8YAAbBy9gdz3etKFwsFfPXoqtEvpyCK7GjRJwET7tMN",
  "key1": "57rapA8KghYB3KvN7a3f7ghHPut7H891cL4RTyW4s1MbEf59QFvmAfcJS2yH61MKSMbYom4FKGBoGQXyjWNUoupJ",
  "key2": "5GBHuoeXiTfM7Rek6d7wngNt4hbswYHBUw239FsxCLjBMs9xKiwVe7hdVxj6XCc7ZEijhy8k8gSKH9D33FzkhwaT",
  "key3": "ycQ74EHxQX7NVEkj3LRg8AhtGvE49Eke1oypwXx9qNc5XF472zuU5VZdFv2UqNk4HyFyaWNrtBznDq8CNEEcWeA",
  "key4": "5zzU8ppsoFKt5ozsEu3nQQ6ivP9Dp6LbsyYtTMqghA6BT8x5FmYfJpbSQn2YqKfJ5gFjWWCYzxCjHKGvGsvVTXkg",
  "key5": "CXoJGDkAt7P8igaTyi1cm9hDUCX9aTXnozSLqCqoKWeszM56Qk9Apv88J2YoZPHMNdGkPFoPLNdt9zvKj7KuZyr",
  "key6": "62F2Q6Q4hCcGj29VwDVqhFugwHT1nPhxBddP3H5X2D8Z3FzDtRHf6XMw8cHE61Hxx7E7CG2rKi3yyJePx4k6uzoi",
  "key7": "2tMagBC74F7X7GgobbaZtCsCJvWNjSWncMozsQzWiQ9N1HCKs3xc4enmrNw1rv4V8SvomaEbSmRBsc6kHobuq9HJ",
  "key8": "uxzMcnfoShFvbcnWdGTpYir78UxxkAXWpYed3MXKRjUZrgp9e4Nny1jtoY1Z8mX7mxGDM5XvgE9WifMLwpB4oYG",
  "key9": "3QUkPvF12uZNdZ79SkThYf2DWhGkD7f9XkAGQrCpZ25xLZDsQ9kZJgYYMBafZQjRM6WSFsM7qsxqgadELPKmFvfA",
  "key10": "5WEiETH9YripetQZef6XGafgGhkusDznv9U7X2yZcBhKjh1BFqqfYFMvFALJqd9ywGM7XjNbEUF847AzdLWbrJkD",
  "key11": "36TnDJRF8aeThdSQcp4N7GTnbXejbsTRxUNNyzCyfmZcTnGzdMR7DosPbEwQpoBnN3QhogomgPFGYWYpcc18P4JS",
  "key12": "52k5kPXVTzgTUE41fBx1p54orH9KVX2SQJfJbXWoi6Embqzz6HFLAtZjL526CmaCHVNPrZVy2By7sybijD4iJKMY",
  "key13": "J2mo95o9MbRKQgTX9KmWYXaVuiAhGz9homJ3xc7H7UBfXjpKvKJJBmBQVgMnbqh34iXdmrbzFi7Xiota5xZk7h9",
  "key14": "2YTWwcGrek9zEtq45mUsXNhpnzkJvoQJfHNZ5tDqtc1fbAk12AjqUqqomYxhzPsLYaVnwgtAorFZ7GoEXKuHPbzw",
  "key15": "431E34EWS4rHMMmyixTk1Ghx1fXt3bLDPyQLuVwMu8JPPTLUim2DCYwy8GKxTG3Yd6ByNuobSjbDBgUYCs3rn65g",
  "key16": "55CTo9nexwkARARR1JRspNDpHbVNGjGk4Ksyhewm5nX8ZcHfftVDWtLPGezK6AgDWvnucKffH8hmsyXjjc3QqnPr",
  "key17": "5YHcLQwZmVFFXiLfv1xVqNRLU5Q6YkpC7VNUb38Yo5znBo3GccgJj4d2nwWQeZnteP3tQzTA1P2uVqSKBz6RoiuC",
  "key18": "5ScXzgANjdhQQXn1BdT6rEETp6URxQQeuL7BmAftRPr8TkVqrne8UaiWkeQbNvJLkghPkD74g99CTno3JMp92SxV",
  "key19": "33EqJmbt6GeYZ5qUrknGGeNqXZ4GFAdEM72kW4zBrXn6GGUkF5teEHVLVQ1ogtXPhhbZbtLbV6GrGPcUfczKDryp",
  "key20": "3L7ubbgNSzJDdNfJmiddfDtWdhsDUqz1nkqK2wA5ozZA4NR1jiuEVkHi8h7QqGTzXZDi47gTWpzosTHYmPe7hUFo",
  "key21": "4RE1P6vDRCTiFnyoatT71MzN8Za7T3AwvX6zeVpS4PdLTQ9hdi6FNwzyPtu1H8nrpeeb2vqaFSYdeqeazR2xT2Ta",
  "key22": "L2JVeMSRP1UAxxMSuMYYgAcHstoFWDah6HZNZytCfyXsGK2JvLv7BqNw5ujZnntWrBUY46W6iSCiyUwtzV6J1W7",
  "key23": "59nu3EfVYD2xUAt3LyWnMyWDG1sfsx2QFCipq9yVgAN4ys4vTxuz1QEwVCdzW2bcAZviSf2CAbWPi68ki7ffqHJz",
  "key24": "5ZoFreLZhB87FWbNmaWvkPfVsG7h5qjhgZmQZ5iY75k9f6MLE96QnxcTPCr2NoNdNxyWr1MPVQASqNFSNvaC88MD",
  "key25": "7EpvqLcX4tCVtHp5AZgJH4p4H5k6Az8pePtd3iiHGuXYDLXpw2eXRhfXqSW84HsF3hTd8Z8bRKF23vUHYT6AcJb",
  "key26": "3QHqEC7ibAHgWJZkrCnefqRHz7QhqVLy3y8nUA59qkgGXTa7vNx8zhwDXVRwfMS4RGqenPBmgwGHwsgzx2P6sRnx",
  "key27": "Xyh27jnTvh1FFFaEU2EAYYTxDFRxJTGLvinKMN2VtWYZJMcmck5Tsqj16sZncKb6qDLSTWBhoZmQA12ah6fK6ie",
  "key28": "GxTBqPnU6VhvWvUejvqjujrrUGSeGCDAbNUR9Cj6K2P7Fypq94Ci1v8Us3QEqC8Nojswu93S7vqMaS9HZGbuVJB",
  "key29": "2m3sKTYZ8y59X7GRGNRHEK5JZwMNjiEi3TFvXb2WtrXigxC4TLctPuALznfPk9hur2fz9huLDerH6Gi4bvKbBDMV",
  "key30": "27ZFG7map5uTm1rXVD4Zba8xsBxfThvaUwyjwrTgEC84fy3AY6GLqPz4W5JiBLnNMvsMLsqD7f4td6AJuuZbW6W6",
  "key31": "349RdTSWyXJEDGy9rmqzdg6EvprzANXeTuN3ZqGjmyRS812iXZFL23CQX2THJUYVSBsnoN31PfsodRrxqN7u2wYP"
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
