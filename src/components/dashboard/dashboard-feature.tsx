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
    "4zUEz7XKjc8zLNihFxSPHk6eGu3gxRUS3inAYKXKCE7bPwrYeWLuDVvqUtgCcB4UpAYpoptuWXio8z8B5FjD9tg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eksTAZcFHjPnMZMxBasE3kzmQqQq7E3AQjNpt5gbVN1CjjLjp7Sdq4F6mdYnyuW9tLAf8pEiKhgRESAUcf46C1w",
  "key1": "uEMo44SGJrmkDXj1PqMnZBsGHcNRf2MfFx6rDXusTkaFb4MADoQj642fy7SS8YE3UCExCBRf5e9BbwdhmbYLKVH",
  "key2": "2TJiKxroM2wnF31DQztMEtaoJQ4K8Fu5amHMaKWTrHkn2RcE4FNUaAU5Y68UEA8UM7rs4avbxxiHoYJic2kNvpwh",
  "key3": "Fc4YK4AupXX1voVkdmCafcjG7GyHMdDGqxn9agg8Ffhzf7nA1VCkjLcYWRTxLePwCJfM6YfJn5F1ZiSEZfG97Mv",
  "key4": "3QMMTisSg393u3Wjq7XLk6waTCx7pmQf8U66A1JvvfbeXEj4GRhRTceiEerucSCYNiJ4KPnd93FehNmYQUKAJwwq",
  "key5": "uwm5w8ggJtFx4UTFeuP5ZgmrJVpGYZykfeWCYuLQTrDikmkCV5K2DacHtDjAkmE39ZtxgyvxA1r5hQ6Zz2hnEp1",
  "key6": "2nVVMj17vroScvffRP1wbmgyVSZK4gLxHm48hzpmYdvNrhv7yfTDjpon9kBP2F9D53nuCkXtjfes6wgfVmsr2zDs",
  "key7": "2xLpdPWJLPrtkdWLqQGdi61b9EzW3wpNaDu4MpFy84QXBLX3oGmv5bfSyqd228FEg7quoVYveHcFCQu1KhwzLLt",
  "key8": "27qik1se8ah1SCkZEFNS3pKnigwsfPimPPCxgDQVyyv6VopPyxFFPrQ67RVMXtk7XFfdF4LYD6Ejt6geMgE5ySjy",
  "key9": "3x5w3CDvSgqquhHCLGCqzX8jUaKEHuK4HUSMmHfvFjVayjRxWgbYE4aW9G7KKn1BKHzdhbpatxJNKgfstDSswX6Y",
  "key10": "3PyAHt3yUJ85JWHDFicAHgWbWtuLfdtQL46SGmGtsS3NnocH2cGDZj8eQUFYZDbhsVbnWkRqCxk8NDwFj9qv9PfJ",
  "key11": "66k4jE2cEXiRuk2My114g1Hccig6uzBEaqbDyX2ZivB1goUunVtVNjNnUYhZn2LPSMT3GMHvo2piCc8qEpBkyoAL",
  "key12": "ff5WYM6yF973f4AAx3ZxDQ93DNm85NRrgUzcVnK3QFcC9gYtRH4fTweEcX7XYSDNsu6LykSbitdCTj2Yg8hASNy",
  "key13": "162WDVcB9yNwXGXeJ1Fw4PfxAtyiUUdtbMu3KETCkaeMGZDW6VwTv3C2j7qUoRHxeS4By4zZPWeKtqGBnuoj5Ag",
  "key14": "2Doc5bangHp4eiFPariF49USWBUgQs1vHZ1LJZLfyyTVQaeeSfFWhB8tbTnk6Zc6w3CpvxP9vAJH3n6iChHg3rmr",
  "key15": "3fAbiN3HkeUNb5U7cAtbgu6DbgbMBaNAmr385A7bgF8j62qLbUZ3Vfwd5Y5bdG1mwHmJWRp7cU4NPKsfmKuYbHYd",
  "key16": "CCgMij4CEi2FxaMTWzKtxDg6bMRZ2EYkJtvzLhy14aLPx9CKhcm89kAkyuN5UqVfCiZbQEG1QXo2MYWRmpdJ8uV",
  "key17": "4h5ovoCAS1gGgnGK7xbUoySqP2xgCmm4AxaW3xDRSsXSAQXfnJ7B86sDZc4JpMejKMqaVgzD4Z8GT5U4hs1jyw1a",
  "key18": "2hG9DrrWBcjMDn1KRPoGyGGUKL7478JrGXwmWSGQzJ8tY4zPdEoHEGDP44htAL3oWNwcfCzy3HrqNdTVXqHTFqoj",
  "key19": "5tnDWrAtagDS7FcRKcaPAd5RfYYnB6fL7y1J13iQX3AdJBbZ2R4TZZu7QmuyUqMz9cH2x1QG53dsLyn3qNmoEtRw",
  "key20": "5QLnAz9gEp2akzTpmRYE3sXWJSo13FwQHhG6FpMpZYz98doz1bZSnzmmom5Wr2wyotBBtWESmbYxfAVhoqKLhU6h",
  "key21": "4UrXe8zNVSDvzvNTQgEscmJRnqid2oRVfuP5LA54jbcarhQnKSecRc6g5A6cbrd7GkeToq5zhpApYfNStzuAo9NZ",
  "key22": "4E7oDgDNejTxuwdPD2ZpbJpx1nvp464UquYJCs14itWxik4egPhjXaPbdi586bkCYFEpJooEYSMnjJpnzdSUhHZ9",
  "key23": "4xX7efgR54L34WGymau4CAzc2KL13GPUZWGwcpEKZXvkn93huxHkJba4hgnN7CbbXCxY7Djya1oLLgjaqKDsUsHJ",
  "key24": "a5sUPMsxAYUqZXrteyZE7tFLMtmekJBvHsaRMfUjprbHLtZTN4rATiuyasxb5k1JMrkDU9ToLqvVveZobWVVnH5",
  "key25": "3BBGCHfss4G3Xp1XoEqXL58cTdT47mYtaTLf7HgqQ8FgemLZEQPfDn38EnJmoofiX1mv27RcVJ9Yb2nsN3T6PEdu",
  "key26": "55WeEYKWEdRps7CJNzKzPwakpAaGDNSoKUC354vRyymPFKrhUqjcJzfP7eyWCgmmqEPRNByb76xfBN84Xg9ofwB2",
  "key27": "33qtFU91xKbHSR27HbiYK2sHjrWw3WEasssn1fLH93mhkKD8ewZ8gEMZxtx6WRgNMajo1ks9ZPjyMR1zQPzj7uQr",
  "key28": "3zXCVrvtmym5j2TgrY5RcouqJoqC96QKS138R732uvdzr37qJMuA9TLLzMyCXMb3d6aJ6GWFgCicFrysmpYHYceU"
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
