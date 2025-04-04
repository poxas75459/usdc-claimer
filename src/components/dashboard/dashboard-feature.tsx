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
    "5d9qDfeRBhw8W6UkZJNFBQDnkFzKjZrmBJPLCFX6C4v5wEc2njcwfvrG9gxu1AXPwwapje4DJBjRcaYGxzxq13oj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Kk4KFHLEUf5Ttyvjw23r5NV8pSrPqE1Pr2CJK1RLuzQZfcXYHujr5QuEuG6StLXR9ZKi66KyXbysVmRqW64eWb",
  "key1": "4Ja4gmRLWc9bPAAjDn1Sa8DNUxP5qcqPu9jfDv6TXx4HvR4z3LEX6t5vfUoWsrRJ7ZwUojzfKBJMGkVocKtmbwAm",
  "key2": "HPSdRfpkpeQzpwzzuKzvAeb7jGT2L22Lf9isZXeUerQN4FXimmzp9sFjc5BXQjTbH5FYe5W8JPQKdUvzB5prXyS",
  "key3": "3u8GjacgBprStUWMgj7ZZqpBkddUtBcrjgrZ87EtLkVabi9LQQHFUpTTcgAiiLYnqaAVvjvgwRySLbS2LKyPFjJP",
  "key4": "3eYU5vZtFMRSMdUKP5yyeaMMdQuHoKnDCsHFQjQcuMuTXi4WQvKNWm6ufc3xwgxo8h2FTHDqskeFJioaNUfYd9V6",
  "key5": "4Rzpf9dyimVndZnXfF2s5fPfVS2MdQbUChWc1wdxUZYsXatxqrRCaPMPqyTvEfTVryo4ekZtLW1vyc1c8KtdzbvK",
  "key6": "4EXQzb94GyMdH3aEeSLZnn3w4UgB962AkqCsLa9MoB6ux2zar6W8JdR35nUfg3cpn7nQaxioT64Y4ux9etAYsd9E",
  "key7": "2MdP8q2nVBB78gaFgHznRWFKukjbLqvgnbJxGusbf1dzhF8KHHXGkKGVoMsWuGNZgu8drZ4acPRWYpCYM6duWzUX",
  "key8": "5zcBW4DUTVtxVj3hyf7EHNECF3Lev8kV91o1XPYqAKYRzcsR7gbXxvwcpKQ7Ykpufcwq9x5d8zrLkm7a2WV9rjZM",
  "key9": "4ouZvjGKh9kAikunLLvjC99mwerg4igGZeo99rgQffmMqxV2A6j2vedYjQ6w7vainvVXLKhJjuKM9hgfEy1AN6ym",
  "key10": "62tZa1sW9CUvUTrkpH6Q5v7GHiW5VpYA6qyyGfoJgww5A7VuFmJq2QYEZwBVgGMCDxMgrNdoXvhiQH4pDJg3vWYZ",
  "key11": "5qMpRzSu2GwS5Bd6dtD69KqRDhHZc7EJf8LqEo4zbfTxjc45hjxSXFSFTXu6qmhui5QKmQ2LGHXrsXsa4FYzJMkk",
  "key12": "VbFo3xpsWrmj8rmHqaz3ia3aLGPomE9sP49PNjDyE2yXATHJDdNYt4aEnxnzEJ2VuCiL6PAwsci4cp1VXbu3QXa",
  "key13": "5jRFPkXJXNnYJ7VBEb8XNkw2tevPBEPDZHWe6HDZRhCZzdY8mC6wd1hFFiujVB7nvBX2JDGRBU3mxXJohZSbzPGj",
  "key14": "2DijLY5A3PM2JMgJvv28zJuK1eD8vovgkhZtTMrLCAfmmZk72vmScSdRd25RsUHL5YXv4Z9tgTASz8N6DLUfaYfV",
  "key15": "fbHrf91vYJwGZvtRotpSbAnL6QJFnw576pAtj56JvagERnNBzkGHS3dyvqBqAk7og1nVcTPjn8YzT3TgYUdztad",
  "key16": "7PmsbBJmZ3aTp8tHMnMLGTwmRRHXkvGyWYgo3CkhZTXzXWL8Yd7YYy3H9rd3DALTb9yb18Gpja8akteuZBQ6uw4",
  "key17": "4L5nFPo1SM5gZxD4NEeDotFyHscT3C2NfrvVGFp9jCGUjZS9xdbvgM9Q7YbvJjiTyCPyG2wZywNQf6MkMm7Sazz5",
  "key18": "2xMzjXr7ZVgnJwV8SA9ksmgUqcvyt9kHe1nHc2CYPTBwK1t3uZo5vrYxdmxKkX4UmNgwiRZT3ew6QBaG75GsZhU1",
  "key19": "mnGJt8RB2zs6Mf8hV4GZDCg1pmvEGQr1BMWeNYptbkeCk8R2SokPwFqMCEkzjPPHxXGnbEfFABEn8EVCaR6PMGG",
  "key20": "4d525u3NH9Nr58XuMxj4SzA6eBdjeZs2MjTvM7LwvnsPaRiS5QnUfPJgVMVKstDCsHJWxn4kLkqk4dwmbVtGW8EV",
  "key21": "WfQBQFDQ52aZkiUqMNaHNSxDwrSdYHjQsdksdjE5ethDVynL7nWCcCjVT4AvvPHCXQZWgApijMr2PNbu6QWTstb",
  "key22": "5FbofbusgDh7Qb9SW8ywiL4J9vEkbtgc1LHN3vM8RvmnaZHCm1BMznq49MP7aCLcwqqedYKS7ZGL1Jub3YGGBcpt",
  "key23": "4rDCXB8CK8NpC77AZiQC7MzR63iB42G1LTSkEVd1VyGmxtUh4WFshWJshDqcDSDmehZFjviU8LMyAK5zgc4ypviB",
  "key24": "2cVFJsHvnyeDhpc3hezV3Uavc43Vpepi4s5RAnyZhjFuENEa39y4bXtyYDcJtR59J58P9y5qbXMyN72S3UndtKHn",
  "key25": "5Sn54axy991zqTcGueXu2w7dJqjuqheYQDrWQkVsj1oEs1eA3LCDhsLoYTKXvKmvZqXwcNrF2Eg7xfDjY344gHsL",
  "key26": "2Hgo2Zyv7ZYYEx99t5Y3vGyxjeW3gqt8BxsPmvURikpq8Sz3gT9Q3TSVdYDHAkKoSUbWyx7r2RnfL1Cp4sbT78JJ",
  "key27": "5jTq24z6AtLSZ46NRc8ncTygaAh2aPuzFsBwMGXvJgqgY9CrEYx1jLTmu5DX9MS2omaVxVSZUM6mwUjVjYcWFYD",
  "key28": "62inwrugk6yUFcddvrtxmUaVtzATAF4tT6Y1c2jc4hgtTAJn3DzsDPxT8c2tJ2V6HNxwiWUSiz14ZdcGrTm6wDXt",
  "key29": "2W4HALVTZU47YHxTyLgjcTNRAK6UWxya7SgytMf4UnyjnW8v38Tn5s5HdyXGr5NcLCbgjVMGrL8FpJGrYyYpd3Nw",
  "key30": "42vCxjgibSrn9Xr4kkJZJ4LhdBtjthw48Djz1MSHA7S5scoo7YNiLYBTgwvkHA438xcL7VshWXgVP8kPZedtfXBB",
  "key31": "42pEE2QWBiaA7J9vT6BU1BMRznTczoUNAFeHX2Jb2va9zJvLKnH7hQNcjY44AckxTa9SdcTqRiyd8cX4fZTkGfzM",
  "key32": "5Ez2PV8Byy3JkFzuUimou16gMoJyyCiKyXrANT2At6NWCi7ueQNN7Xs2ChkjHiGPhFFbVc3cwz7Whkukvoszvc34",
  "key33": "4Yxg2Q6B6aKwD2F5B6Rrn11UGRgPg1csLorxwfqNFWgcKDxUPqwDd1DWcxbwQZhxNR34bjbNBFNDz3Kbk8o7bZ2t",
  "key34": "2tRdryh5zKFEAoedomm9cEs5xjvzC3ogLm8DuXnpX22pUEBMTKCzcctzM9a1dnGy2pnGgcpFmeme5YXQyqX7fCLc",
  "key35": "2pCi3Dcqp87Xk1RpgxUnA8vAhivLjqa7jSspXNS5DSAB75P4nP33AvMChWk2UwaA989grWNKoMrXRNJ25HH3RjrC"
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
