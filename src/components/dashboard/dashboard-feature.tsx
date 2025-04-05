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
    "4pA8UwJqNEYmv38noJofVpVGb4hSACrbJUQpL9VMW7cWd1qPTRij3UHKFM3Kmadnp8s5Ef5YL9aysivhn7qee2As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JLfYA8rQTSVTt7gRLTh4asW35DVUjj1qv4puV5URqKRYpa3cwzDieDQFDcg9JN5DPpx8kPYshwmZrVCREfenueN",
  "key1": "3KD7gTTsAMUsENZm8nEULsvVprRrR9QRXpoZMAMVnw41ceCyHhcSnpr7v3ky9bNg1yT8xfsPYsgjW3zeeNwQw9ts",
  "key2": "5eNLKv5cHUSsTmvkYS1FCw1bNxH9K23Qh4t5PBP5b1gshvhJ3pTJe6sQP1gnEgRB7hW1jjzccj16wWndbshyXWaW",
  "key3": "5ngALieNXTzRFo7prNAnnkAuG5BjoPWFeHL7GSMPns9dHvwboQoDYvH8ATCR44LgymySvP1xkxPSzw5i22ysngLk",
  "key4": "ixwNnUSgpfhdMPMkdAdgXd87cb4yNq8LxnUKQ84MHmxfUhySJryewJPEN5k6YZ9cMQNiB4ZemHV5AGbznnDKcSm",
  "key5": "3ipwesTXyZJ9oQSSWMzmHtwQ2FUNuAHVbPZ6AJspLWr9DDJX7jGimy3QXAMKyuLbRTbQS4VdxfQN9cy1s6w5HpkC",
  "key6": "oLpcq9wJommGYRitkP6Bn7AFvkwxHDQRnRfnsrN5jSECAZSK5AsUTkhn3p8JbmY3GHuqbH8ezNGccaaCdMpSw4T",
  "key7": "YDD2qyDYYut9RTc6jDyKPQqpdQUdoY6eP55sv5gwapfgG4jXareVbzQZWcSQpHCLnjsAm5gYRmxWcLXudVefsX6",
  "key8": "4J1Pi6ySTKoFWEXVWK77W36m8CK4qQqQ5TiGqr7EzWubRnnJvwEKpbYskMQQ4zZxc3KAcnX511ydGWBEf5QLjttz",
  "key9": "61cvRbkwPYy57PhtTyM7HCfs9EX6WRHLdmftLm2cq4hAjUm1pT8GZPu29xMQBbD48B6KYKimVrGicZQYtiFHXdhr",
  "key10": "3Z8mV6Q9eD7LEvwYjWqSM8QbxbujX61QjANazsKhAPgktUd1UoEAkYwLWCCNsSzjNMgs6bHDs4HYmurXtB1pbFCn",
  "key11": "3EvNhrV7gEZYpXm4fFxNormCAQAaPvuacvx6RXhzuJAdURXTGnidZhMd4LFQdJ9WzmpUwy7qruKSpPYq579744cn",
  "key12": "2WTx1qZ3tXGr3Yimftfp7ryjHLhDZffYMtNrNhwG7bpBiwEHZNC33x1RwsyNCFPyor2ghbraPLWK4Re19fnd2DDj",
  "key13": "3TK8wgXFU1j8x9baSKW9A99AfgVsupj9qqBgCjX9QZ5LozWX5pWpkBFpwScbkbFAaVEeVSCQ7yoSYvef6dzbXxBq",
  "key14": "2DF61NCjc2Dn91TkrwFN7S95PqmerSPwKDh3TMdczQiCpDLSPktkYFzbeYCNR4jHpwQ2tuA5Qes6VQbjSFvpxN8a",
  "key15": "nDtVYvRf3mt8rGD3sLRiCDKaVZ17kLiJ8secvCCg8a7ze1GMx5jKajhHXCcQ1nVURvBoAvQApEyNRzQMEUDYDtC",
  "key16": "2PmJLyef3cgMRXzPTAgf3sJAAy42ew8ZVCxhuMma4rNB9eaYz3HN8CYd8tsTZu8ovBsCRqZAGaYymZcnJMPdzyqM",
  "key17": "2Hvqt4EYVwC9rJaD4uRv8Vmw4uTuiHx3tsR4z3XvorPYRj3Qzoxcy5Gt1YAo6pxvALb3Zf2n7frrUsYS5aQXhA3v",
  "key18": "36FYDUkp35bEkfedcXsWDhtPzPxg7QSMurQA4esaYMmsCT7vgx6t2kbNMA9hX3smgtL8UdGWFMqPNh45U32Bpnzz",
  "key19": "3pQ43oz47vpzrDdLLwJ8P4BJkoAb7g9bnx72nDN5AjHG1mnpJEKxHuJNJfd41HknmWcU1owDFoHa9KPxzAMMoeo7",
  "key20": "4te8vK8GDB3YZwyreKF9TGBkEhDT9nKAD3gxoSDDptSLFMYLDxvK3fEpk8WyvRPErxAap8jWJSJd8kGT4QkgRDiv",
  "key21": "2fNRVjBxRXX2Z8zxrk3ZwfTL4AtyhcMdktCRjceG33rryigU7nFTKESabDexicrVo8CmS8JcNNTk514ZSd5519ks",
  "key22": "9TepTu6AzqgNBJyFTysYdUmNKo8uXRgA3TLhwwg1Qte5VD2uatfypTyYGZcb9atuhuJgaPTVMtJD6oS6Z3biY9E",
  "key23": "4ipKNnUa8GM64HZs6wtxbBqjHNKAhq6V1UKTyhDUZSQGYogrpi6aTv2TxseYKBMDWo3NnUNv7hANkzEZZd7NpuZd",
  "key24": "3tLWtx93ZSZRHTdLcS78QBjXs87SKXNkPbTdXWE6JYiJMQaj5nv5THLdvJ7tdBzMyXhb8RBmykMugS1Uw1JSDvVX",
  "key25": "2J9WRQLVHoKE89RFrXi8SDoZsgkStTXcnPpjFK6u3meBKG4qLqMZg28McYGyoRgEz9M3y6NUVme9tryh5CCpHZ8s",
  "key26": "rBj1ZcrUxLJLLWVuYTwqB25TnJtDHH8L695K3HrG8DgLpwL1n1uK9cwzN7zvPFrJpkgjDHd8cnrEDvEqbWmp9Eb",
  "key27": "3BbYxs78CD3vFSECm1rXuLYjoPHz8bJJox8MZMqw3aducXt82gGrMehmvdysG9k8TFjFvGM7sgvZCBURRanSVcWj",
  "key28": "5cqAC9Z89hJovbuuzGng6jysgAjWX1V8pRgkrWyJ9BwX8eXRDFqRjCAB2qzQbkmM1m3YxbEq3ce1rQGz6vDc921F"
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
