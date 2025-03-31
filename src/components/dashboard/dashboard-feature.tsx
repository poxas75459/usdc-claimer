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
    "3EjRNh7nmAPGBJ1dXcFp936TYQRqLecjiHGuCC1ExkcQ1tU6rTJ6j4WRZRDx6PX9oxzKYRr2YB8a7bKpDZevZnHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WPCWaMUKwKu5TXigdqH8nrcrVmUy4nVUif7Ub7joL1yYB5sZLLVVh5thi9Ndkz64otXb7htEZJYrJ2bMsbQKjv",
  "key1": "2Rn46PFETpCxD5UyZq91giZd64aoLXCcatDTZQkdm5ue7HTZ52xaTjcPzCSZHqbBJTKHwZZXRrjNkMBwsnzn9Pws",
  "key2": "5hVFU1jz1zzdpXN81p6F46a7o9dTEEGbiJiqjKpVFsDgWjLgLh8FcaJbTinZynQNTd3eqTRFbwk1F4BiTzxnM5ii",
  "key3": "3GhsDv9it4xHfTACyxNJMtpG8Ph3eR36jyXvp2oFAbkDCoawRD8jX9svNvZXq7MDQQTCaWZv3UaC3KR9KN3YYcSS",
  "key4": "3ZknLzjLLAi8teaDUbmyJWXuBmi4uCVKJgnNoFaUwQPiw36oZFBp9LcKtaeg1KFQDqyGASW8moojFWsRyPn2gRwe",
  "key5": "5q8PdhY5biN8Kh7Krxc7UXH2u1fbuQY5DYCueLdUM9nz5QVZrX1BK7bYMs37AGhBtfkSe9ZsDTqjTCA7hggAXyZx",
  "key6": "2TUvPxr3rjmfeVTFJSgNDuNhSxGXunDLtMGpePneDw972AS8J6g3w1rzYA1pe931p5zT6RjfSiRkNHPbSiQCPffZ",
  "key7": "4ddjsTq4L6XmzbZZYBvsqiwJjz1s6zgudvJhc1dZ26oWPDkk4cyrFeiu6fmgpyn46dRxgqBsE9bnnNqcR4MmZwec",
  "key8": "3NaPzgzVanWqnygCzAa3Uy4Bsauc8oyqY9uCaAx6BQ4ZVHxTj2U2egzhUS98cqCXzeqqUtnGM9ZQ5jTF6jv5cL37",
  "key9": "adWvGAnntr2BYxvAdDELVxGvZjbWMiJHLXkKFkrQL2Gt1W36HcQqtym8pfrBYtWCdPb1eRHmzGVBd6VodBYRfnZ",
  "key10": "65ZCXFQre3T59xTt9NwiLTqB7bdFamhr3EHA4P3q77Uu5sNkJ5ubLeNDUCk6kkqfWkXxBkr4z2aoviacstrCQTZ8",
  "key11": "3VKXuviLcwnoRXHdhMFAPQioq7xaM5QxDC3EZymKVcwYTE1F31FqJPZLBiNt7LdqTqxARM3ePuaDh6uP27HHsfdf",
  "key12": "652EEztmd5C3m9z5J4N1cdjtEV61kaPJBAHdUSZkuh3Jctz8FDZXEHrWDDrVsB2JnatTCJSbsmZGgTDLYbvvYNKi",
  "key13": "27fBG9TQGvjgLs3mjYW1BRASnWvzB7RP5J2RXLv9xA32kB1dQa8uvBtvC9kcgH81kfX2HpVLYuM9LFMDey7M1UfA",
  "key14": "o8Hf4FY45uEst9UGP7n2fcfkWrmwKqSWtY6T6DPorbKBCdBhYhFVGJ4JBAX3VNYZe3adKVMmLX2gd35urmQijin",
  "key15": "5uMpbqBMFo9qVFEAPc4eyqs1xcZnVKhzfcapxCYkTim2MZxXRCikrLdrkkAb3oZdHUEPevDcQaDvWw3MJGpgNkky",
  "key16": "3boJzNZyKD315GCtJwQHBNtjapRr6MPHejbifkXemYdFAZgHVdUw9R5mVeVipDJaHryEcJH9KqSKPWrDQcts5tsH",
  "key17": "63SnHJEHWDtbm9tv2aAMavmKst3Lerny8EWmcL6r15pcTP5GWSYXZEE38JCYmDBzhQt7AorHYNkheVtFx9pyHDbG",
  "key18": "3YgLNNCQ8MTnQJeUzUXjkVLXvKkhCfjy5Ufp3prso2gEgZ4PqewAWMP75onUkJeuRBandMmjjNC9AzntR4TchEKV",
  "key19": "34MQYDwcf6TxjMK7ChrFmw5HfKyrxBrnewXwJDXxEZ3MvUTDrZvVpMHjXLqe8BGy35JaP6kSGPa6usX3cuV6oH8e",
  "key20": "35cJRfvhAqUpoQQANfvNxteCRdoAapRY76mJtrjYoBRS7PS68ED1ME9FcehzexKtZRrxHPeSBdvNE2ygZSA5QVoo",
  "key21": "8VzsqY1kh75HzWmWKppA2h46u7QHcfZ9pctEL1Zqkv35oe3jzjKmay8ZQrcvUvTdF5ANxVbau5m96CJ7i57zxEU",
  "key22": "2L6WymsX6MNNGg6wqKNwsZoLqk1JJfn97UiKC4QUcgBTWeX7SjfZutGGqoaVSb7CvQ7UZX8NWZcsAKUiW4eG6mBA",
  "key23": "2WYmxRSPvvH1UwyXGN2coMrHZ64cjGYbGYA5UrS97PokERunzdCSGmDPaNXLhmLoPViM1YFNjjkTo57f8hD9sjwf",
  "key24": "5vTFvTX2FyUGCNJBTL5AUYogK3Z2Yqkg6Ld1bQbVw9Tvo4L6sdu8XbGXA63bd4AHPaY8FkUUGpnSe4PsFRpiqkgd",
  "key25": "3tKgupzYqbcLqoK5fdNHSJwyHUBMN9DiAUMN93TiVpLn1syq5rGjmcWNzY4uZd88YxeXqkGaLuQSXGKj5XTYunjH",
  "key26": "331Ztfg4XQ62jLKS47UJCLRGdYz7odiwQkocLxLE7Zj4T1FgE1nQgVkMyovwiAH21mZs2DCuUeNbtWv5hRmUENfA",
  "key27": "4GtjgqzgCiuDVQfdmtPhtTdcva9mugbd3r98sbSH6a7cEQLRzP7ZrjzAaNL3DHJ99sNKcDfcQzJJXGMESYugNEwj",
  "key28": "kB7kRQQtyZmsjyogEe56rpQQpNQUAaaNL86fNduEf2aqbqWR5R2mAfGHpnWtch4iE15r6dZmdcg8brwxg6MSvJz",
  "key29": "2YErTaefyd8peVuWtmoK5CYE9XDteGX9e4WM79E1vpfym64BSU8Xvx7g4S9bc4MGXvvKBro2gt87CrfPwZbQGLEK",
  "key30": "3o3c5Q8CiE9zKqFybqcVEz1gYSUqBLtpzRRYrpZGLK58Uc6MZXhaKkJTcrMx8Dg7ubn4jNk1oKgSxBNCN2fS9Pxc",
  "key31": "29hPWJLQaM2j1B3kjgNCux1jEgY5N7Wm5xC522tHYHdcJWTpK2m94C8Kn9KheT4a21HkyMfzYwPEQeQJeKEmzRqp",
  "key32": "5muYafqUdiR85Eb7HPFbt7wXGBTy484uYPjHMmvDzkQ6RVkq7iL6cnkhp8oU47wQXnHKxfzFrfucas9DeWKojgcG",
  "key33": "2Vjd2ry66KfZnYZoBtiWVcDFbzhW3NQ1uoRWWSRtKoT7EVmGjzq4qznRHyii7q7WuHxKMV1Z5VCBatRaDaESsHBu",
  "key34": "2UNzdFi6Lxo47QoiaWVWQnAL1Vqxp2FRKHfdoDSewEq8W2od3nf6fKe6suAVgdpeg29EGjyQrEm2UV7Y3EnRQFEF",
  "key35": "ucYxQXVo859RyaSF33UnTB3bwinjZLPfcLgERo6kQnV93TiRo1qz1vfQJtjs4QTkdBM5S4BAVYLuXhaniuq7NHx",
  "key36": "4XH4nMhLvcebTPPYPDuzy6Exq9RENU9hcE3BErUqdd6aKY3TCsSDTSYHxvCt2R7LCR6y66k6Kf4LJ5YHsrTPtgjA",
  "key37": "GYJFNQwCMNQEDedNiAbtY76rodKQf9KKYdmp17yC5to8qpDR5Thn2DDaPi1QWtEGR7QmX8RsxTQxPQiJSgSkUfg",
  "key38": "2ZJC92yLKBpWKGKmXC84VsR84NRcon8vpWXHGwHi8H7C6g69tGuR2jiZjv1eo9VRxHzi47qmnRuswHJ5UeqqRgmn",
  "key39": "5HkqQBLAofVhgyVWtAxYpzURoMQUjFz4akPTG3kJY4qjnUNeagGefxv4McpnPA5RQdxZmbFsPjsYP5CfanbvmJBD",
  "key40": "4kL7oBimNq1pdKRgoSqRUNNH285fRhhm294E75kFHjMekSRSRCFjGx7ngcrHBiJuJ62k4Ds4c3znh1pC3sLoJTAv",
  "key41": "2Nkdjh83qhYCoNet4oWbovNUNXAKJb9qQHqfje8MSZVPmtPpFDPmnWHJNvYjDHhMLaV9UyqwNVFmoyLZWeDNBT5p",
  "key42": "2pVdh3CCq8gBymHhB4mnWqVPzho2iP6g52R49tJxfkmWahAfxmNbrCpKF2KWfiEv51D5C18evbg9ZuithxK5aYTh",
  "key43": "4HzPryVkUxU8BpwnqyQhZ7p9fPPxTEAx6htZsqeZXHqp4FFTQqmQCDKV6Q5YhLZCanR3saU9TnCKMjpKvWUkMibB"
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
