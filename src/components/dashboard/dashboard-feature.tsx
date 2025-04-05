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
    "5VcySR9qvkqsfh4pjH9pbYBLAbuefMKEAJFYPEHSCuyMeuZqCrcAVNz8H6gM1tQGVYrEuPyYDtxLQyjs6TBoC7Fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SQRY2mNWKqz1jzaZfYCPqvFJv8coQavkcXee68W1mVZ2AtDoFxfuKBkNRmn656aMeHA1oK3tmGuiT7reJmbptU",
  "key1": "5keUq9JTCoHCtSTRqKLpV1EpKhwqvqQ3AWjgNpnx2NzeFYhLexYjCuinsscJPeG3V75bCtebK79efg1gy4dk9Dia",
  "key2": "d6dJiQ9yqJ18T3KWmUzL8kBwTV63n3DXv5PFajyoEG8HUhwcHegSZ52q3JGPUH9t1wuUshM5iGvrEcBnLQTQoSY",
  "key3": "2Xkjc83uSbUbTJgwPYkH3QFFw6HhtUi1CDfnWTajnu77mUCHqD4cUtMkhxWr2thMJX1nRkJn9uq3N4yue6wjTLZw",
  "key4": "2UeiAYghxy8ACoPvnSmJmEj3QAV8Y6aYWU9U8FKxBZ5hnJoMZW5UVbJ9oUJ7Cg8qUSn8p5gfNpeAwAAM7cgpPoyQ",
  "key5": "2jXySH1CC3VrKPKVUsv3kSgqUrJaFvtRuk2LXzQJUvtcK7fQTEWFZwTL6E6sEsjtEPw1gohEwXxcYWYiagmgthCK",
  "key6": "2CUJMqMAy2yFvK7fJ8jK8CL31SvwzAMPHvxT48xk25J2mwcQqnzRjqfdUciwbWu1YVoCWwQAedFg7F9nkSXgk8j4",
  "key7": "2xGUuVr8ybHP3UDNpF7UAacEm3nAy87LxhKTMiotEpMoSNMacJNYXhcQxRdVCLPWJ6VnwhTXDLGwxtqijrNizF6P",
  "key8": "5EMTQWGZzdELaNZfcNE2TJTgEnrGhXfuS4BdsGW9h6WJYgcSS8tNYwsd4m1oNmsDPcwcQgKCPbZeXSiPkNEvzcbb",
  "key9": "5LKc36HfKojUJ8sDRx5D6X8Qd3iPkwHLu8zAsxaEz2TpJA7sry6tvGC19tyqa9kfvUUoXTRcM56nst9Jz8DPzbth",
  "key10": "4brtnKxgSYtd9KtPRjC88Vt1mW8Ajhw8pzJ4sK1YpDfeNwJf7WoABSQDHnnCiDRWp5Wqs5Bz7Pf11QwaNbCg1Sgr",
  "key11": "2wF4ChdCiduZmfqGb97CiNiwM7VodrzmfzWEZxkZy8GGjidDE2Sz9F9ZnyyvLYauP5VYZBPJ68uuzY24mGw3JUtW",
  "key12": "2ieNYhwGUY3uu3e8EBLh4m8WShNphi7tvh6y7Nk17tX7dhXtLDpUHCrdbwn8yuFdWTAxYTeRMmMQjddEF2KDnE1z",
  "key13": "3uVRFxVmyHuYm3C5RJtzk1Y5GD9vrVQUGQK8wdHy2djECDzcfDnL61Fn82YcMVhDN51EkQTEJhyzfPXrWU9Zgbp3",
  "key14": "4w5HHZEinB3RbUBbGMNs3HTvzLeddumoAiUSXUBhbrNwFo42PXgYoeu7MvY9uGJR9rXeC3jwC45cAx9EmF85ngDL",
  "key15": "3RoTp96AYqVMAZKReiJWUmEjAMjX1gtoJm3XPhUy3McUojUvMAWe6iDdwqr1SVZQMo1m1WA5tp2oC1ZBex1AFmQs",
  "key16": "4WYu9QyUT5NhzxptJNEtjunXUStAwLnXsehBeUuoiatQFXwYeUZ7sJdkA5psr2wSh9EJvN5zY33Jnwhg1keebkDa",
  "key17": "2yE2TsZJU7P4u8gBxpnuYfzSNuUFoeUgWRBEhtYBL92imR8pLNhMzGJzBJBhsQ9ZZ4xbcHPzZkf7EXKJzP72Wm9G",
  "key18": "5MovyAwob1mdY2aumHba41aMxKeVoZctjwwwho7gvuVXarEExoCVAaEmJWZs2y6wuCjozPkYM8XEo5FYG3K8mKaF",
  "key19": "321hMUZvyjc2gD2N8xTQ4Agb4k2roaoxrXxTGyNn3HUMSjvdSyM3GKRaYGAM462ocfE51FrS5jziawF9XqEzLjBh",
  "key20": "4MyYeFQMoirkKbrztH2UC7QsurGJszThd6heiEMkKHGiokBknkXwheXfTBTCM3gcJRzkadiv9iLHw4nox6sP1gRS",
  "key21": "4g31w6EwUQv59iRDd8sTtbUPLvGzTwiESdoaqmdLKYjFbKqRsxA62RTjGpYrphcfvgGiGcxech87CyaZguPeKszs",
  "key22": "3iLzDnNY3cP4zrSo3urwYk3J1oWvVddrLpFU1ELH73FoXjxzoZ46GjDg5DT2mAy8eF1VkeVCDvc3Vxhe9G6M47TP",
  "key23": "2Jbj9tSJyvjSMZf459f2q7h43NuL3GDhkvF3ZqN6vGMubnaNjvQABDYDkaAZijcbAaqS95fNsTXq7koh3kH8HDKb",
  "key24": "3nDfEdujR5JfGaQYRjsNRPF4HrVZ4hnKgsv55gUcyFqpRpAZmaxKmkwkcT4Rwko2ufByvMUpPjffYTgv8RZp4hp7",
  "key25": "4r2HXekaxAozWVnagMy3QAkhwPZQvPzUvifRSaitnw1uvmrQXDdMRMAMsNaZnCigZoWQD3hpWr2ZFtyfRpWgZWGv",
  "key26": "JiYavxsaSwnqN4L2siQAxbXYJgVwKFPr83PdRMgF6p22SLkA4tjfJoUhJZfzbRL1YaJkBvw775Svs8wsoyD1pP6",
  "key27": "3LARr6jhXko5sVLJzJXaqvsU4DPmgJwYGgAYExjYnUgVEpdmAhLtnSz5znxMXPeDTWk3Z5dNzVTjCpH2sxQGFwFq",
  "key28": "3bveDxzJwrYgFXw3jfKzBHS4mdmtaifLz2MFN5MVLefqyJeL1YYriUbZVxBpMb9zMbFuz24CUx4mBoinaNP6n9so",
  "key29": "4cPgJ2H9qemqeCVG6E3w9zrRbGMcUtwngkCz9bfZaTVfAENcVgL8soCTeBayMsvDazHUEdTUXT9UPCedrJzNuBk8",
  "key30": "4Qjq2zKGHA6zPhnhEicvHk975Skd2p17foWEEnqAG7KBGNzZZ2iFHxjs2nkL3RxxeoAy3Avkgnv6E7F5uSH2xDni"
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
