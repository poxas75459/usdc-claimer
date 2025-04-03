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
    "hvBjfydecVLpZPGDH5dUWL5FoWQqdSizApKe95BTr7ouu3cyUhsF59ReRDw24tYm961JwSM6aRz1vQakwRTfY1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHsEe99CJhN8j3XuArxSABMvjAofBBNefug31iqDSrvTmKBmFATV5v6WfZVspu2sJdM5ULB1tEeWzsXSHT1dUY7",
  "key1": "4n63L98gPwMmrJ2Ftp4YkjNQ9wAGgE1KumVx1mT7FSq3x1UcgJvVhvRdw5n3ro8XWWWgLHFSSkYTtnwwkqjFqV9g",
  "key2": "3R1MNkWCkrP12Q6vKZMryMepBKdaL4DayWUAvMM3g2as72DQvdcx5FpvZXzdarzBua5AZ3wq9KAHdqbMmdGJ55y",
  "key3": "5ic7MAacgQxEWYHNgDufT4RxkdKaczTbbzYz2C1xPmSDhCnVJG6w928ioy1EURih3wNu8v1J4k7y2vZSFe3xTSUu",
  "key4": "4JBPHuS4CKHNW7SaFxqmnbD1Rg8yMfAC3vX5b8oCzmvNe7sooMTLGCMXx8Piji1zMd3NLs4V2Xqps4ZrGcZpkgvT",
  "key5": "4ScMDhkn1De9Yq6ME1RdK17J8T4cP8nsW9uVRcFMqNHNfRyWDXvRHxNvAaQ7QXej2qzEkMkmv3nvE3DMqApmndpb",
  "key6": "UwutKLDKyXVGdNuaPUjFxsb9jgi7ULMyNiuxVeXQP6oaUAJg9sjAveSnGB2MnkirN77pZmn6CqYgbK9PDNxEKNj",
  "key7": "2XnUoajD6RLCx4hCcfEWFDUnJk8esVH1kKZDCS2pXigimRkrKm1bM2Dc2omBJ6Ackk4C1Z3YENQkojomSYQqknUo",
  "key8": "54ZCwvwWbMiNLiohcmtd4qyDnHgXEwNhDM6e5TWcvQapekHLjUCqHzCANFNyVBCZ4ANUtHX485JsBMZ3quw361nZ",
  "key9": "4PGYcJoabRM7Jj3mDPTkrPRwAxx3EDGvfeeY92Cm3Ni2F9ovMgGoESLsBsBnijB7Fx5dDQmhhuSSDNiMgRuEtQti",
  "key10": "3bMxZ1Zc9zZByUE1zDCj3ViENxmWj6hEGC6x7ydDbamt4wVnbA3DsZvKtGBPPdPdBySQVhGxFzN496yc4v4vRX9",
  "key11": "5FC5fH1yhwjyRoGVqGz8Cf114uet1e9RKL9NfX4twVVF4Bxr3zw1z349jmn3r6fX7GopysYwVjZenujGRUVdGiDM",
  "key12": "5EmfQLB2g8wVYKdZUUwsJxcr6f4dkc8iwCUM6DGrsEUsJKgZjpGnyZAr7NiS6o3qtrkBJ1KoYjudgS29Wwkbny4u",
  "key13": "4wPBeC26TN52cVHQ6GN3SEh71UWrUCFYD1X4Xdv5DgMeGxVXhH8RR1LCYE4592RS7YYwk8eR32FQZmN8wPomVxpz",
  "key14": "2XFWJQ3wcSP5HQQzkiqS19zekGn5E8QpGzq31yyTWsGdJhAvRYtL98f8xTkZXPCyaudhdW4oMe8nRd5nbSms14cY",
  "key15": "NxLfN9t7kiyM4bD2bDkRxVqumdSxME4q4djhmEzhcuijrDTaW1ctdDrN7bbCPrzdGNWSn8KUMtff65gBeTYqDqg",
  "key16": "3T6meuWcWYjwfHd7Zdws522Zih8B2CanDfykbYoEXnRWmXwLF6Rx7UApSg7Hx4ExS6ipfDyMJYSDSeSh5NUK3wK8",
  "key17": "3H6r5QuP4bypWBCkUD67XmG8ertULQg3yGBYAbGXPqxqUqBpbqqr2w3FNjLvqnL9FJ5Njb7UgRqeT18pMW31QA9n",
  "key18": "UQCWnKQ1hHY9qstcirgHtMLjHSRejiEbqKVermHbYmYwFwcMSWq3XztZ57UfdtPZzZzaivPE9zyt3UkG5N4K8Md",
  "key19": "44AwbjzNnC8aabcgAL11T53LTc4PWHTWXXKYoN9ta96bEBLRQAENLEb1xqmunub18vhS8frvMPk3BaNQLV7oNmbQ",
  "key20": "4iY2kYdVLcRgMDJxmU5bMcTC1GxE2t9vDW893QBMECKoE7i2Bca7XWQxatVyAP1bmkfyVtdjbsFPzve8yiqmCa4i",
  "key21": "3BE2q6eXPEYVBWRtxcsKqiBqz4DVAPKGDSTtyerdgNn5cZnLe5Rg3z19GcoFjVa2HfDo6Jt24KehMmUBrQu1DLaa",
  "key22": "pbjDZWjdScSJh4wSg8PD4orgGFTg5tS14ETbJzsFxcNFaYd3XBFqb988e4gcXCBZ3dbohpHGewBZe4Gjq4Da6dn",
  "key23": "2xyw9by19cTmc6WRMVuSRfYXFY5FMpKJTfMiJYKGKH5jMi7sMRGNvyA1UeRt6hEH85nbLRwDvZEmYWyBUsMx1Z9W",
  "key24": "636RLC8WtTDndhT7pViQf1feeGpfCEFDHp3CTJ4Lop9bevzM8NzRUyTSaNu82pd2x1hXcmmtwfrzURenFCfNx6ZE",
  "key25": "4EK9XNqUzG5RZGaWczDzBLkPSZVXgVFFwpEfjXESbRwd21e8JMRkGmzzFhvCgCTWzA9QLHSEsGrH2Zjp2rRd8xqn",
  "key26": "3534BVe91RnSYTJHMmGL8t4wXcivExvu15WBNyR1dS6rqnuWNdF6FDemh6Gx9Xj4AHNZ2x82KJ3qtTZZzm9nbGaz",
  "key27": "scEkb3qn26uiao8BRgMuJiMLpMMJzdf991xaqcXRJh7bhXB87ocXuaD1vdnCdmQZPJ82VGsMmpzYiKc1sKY5Xwt",
  "key28": "2S58uq8ZnNVLg5dDWwfivGAHoKWND4oNjegNiCpimXEG79BVSQpgi7tQS4Mq9dwKUUZfKveF46aPfFB8vUVFLiuf",
  "key29": "5ppi2J3GiDhxDUYNYyTNySUmegiXwL8eSFPdWH7N5B27zg4fWUKVAhDZjcQs8uKtUvbB3jEViev1sxHxMoCWz8ua",
  "key30": "3BxhXuDtd44qUucNmUUXbPrq3eLfXqA8KcRzuWtipsabioBYxaK1KmbrX3nkzK2cSaqsYa1PMp2BPnzk97fZ1Meo",
  "key31": "3vgKK8xY6AseYhoEPkJjoWnnakefnekGoozmwXmk56AgSUXYFQthx5ppkXHi41eMXNBXpf8crpTTaPvQsyAzYVMC",
  "key32": "5kSan8WMAFruQzsXviB9LywESLvPH76JfSTQjj5mkipSo2uavHWrdwvVqEhX5Xx3sU38nKYh3fwJ5UHZNKEHXtj4",
  "key33": "4cmknNSMs1ZnLNJCjFohDRHcKqpuLcoCbgAeaDfjrxNgiFKvDcgFe75Xw8HfpXbtWLkgNDxD67RRAogQrKZpXxd1",
  "key34": "2Wk8r1aVWHk7kwTZzz8WXBJvc6ecdsn6rpV9pTu6Yaq7x6XgKAMvManL8FJunizorA35Sxvfi1tuwu7vM9mqrREW"
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
