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
    "rbDwd35CEq8EEnStoQEweu69uqCdxKfSy6YeArThNj1VGYt2eKpuRNAMeET6WXgFfwzEvd15YJ3rUPC2cPCPg7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QmpMdKmbfVPMQo6G1dKcWD6q3GwKhHid6AxryS3ATkwPeXXy72hZ8b8ENYZiSbn33KCMeETNEZGWCkyuD4qnRsu",
  "key1": "2gDp8p1864Y934GXQogeZyQrvaweTFtixtsQeqNBARm4KfuNWXStwJU5ME9JXt8oYe8dAKy21odEfQHkHJ5m19Qk",
  "key2": "3qiSpvakqct8vJb5vMtXfa4fNizDCouQg6vm87JdUsxsz8o3PmDK28xc6SD3YK6zkvBwPtCnz5FWTBcNb2Gqb77J",
  "key3": "33aJDJJhBGbrNXcYx6Rafhau5kqYbvaPswmTmWN55RDFG5GiK1L5w5wdaWsnnaSweyVZYzJYchwkbFFJiQtZUQSr",
  "key4": "5AQq3VK4a76TbyL7dqGvRmCvaj6pBjywMLwTHm9Z7ZfxNxCefreVdGc7AHLPQLRkWzEWWEn5meCYbyEM22q5oKQv",
  "key5": "2wAFB8zw8EVL3ihMNh2tVBWenXNkbJesCrbPBQfwcGppgiRrYK6oRVhvth1YXMU1tUM2hGLJ32cSg15xn8Mb26nt",
  "key6": "4zyYvh4KvEfZm4WUk6mGnkPzZAbfTAEhfEKCEKNa4g1gUSTqLHYb7XdrCvxEvKyDCcowcUA2YGagvZRuMi9iC7jd",
  "key7": "fYVYJ6DQz9KRHwyRDD3vLTXQDUSEZEorw8pABprCJYUctyuqCQ1N3oDyNGgnTsfhPXZQNXmZAbrno3qSFQMfbPX",
  "key8": "2MMVG3FNipLbS3ojFGtEngTTvkpkiN2re1sG7Scc2vZbNFUPB72ahTMYcffWSshPgDHewDzhSGCx4REBiKWsXZC6",
  "key9": "2Pf6L7DBn5hBRwbpQQuX7J1Jzj7oYodcCyhTrcHaguSmuoqpdWtKDBeQ6HkdV6BYfWFTZnpHdAUwcWE83JcHNs9s",
  "key10": "5bfQbo3tshpSHvTdV6LWgKfo8b5zssiBgCjyENRo1DM2MivodEAFEjbJJEkBuFyNtQp4ZYVaasuEWha83UW23uY",
  "key11": "2ivV3Y6n1b5pA1cCYqez3q4moF2Adf3FcrpjbeLLt9ddrCmGaRqidHbH5eMTvE543i44HCAwNpYe93fgQSWG2GGE",
  "key12": "5CsdPKp2V2H5vGAPLv4SFBjizaTYKJoETBDHKFXuWJJx7FUxpTGBfsi8SSPCgqDSVtLmLZCJhvNpeyiE9YhfRcsp",
  "key13": "33JACD8rnZJtC4SS6iGj2b1a1Q6ZgE7nt6vkbTxAiCD9TYXVBuFhEVEseierVqhsnoT7wbhdyim5P7ERMyExqMoz",
  "key14": "3ZW7Vw66X4Y9Hs1YMut1zriNdKhg7NGDSGDx8DoCNCYroGehvQ8hDJHz3GXjpBZ9Z2JoBkpXTQHC51qA89QH3sDy",
  "key15": "4aCKRHXQWvuBwTeKUHLGBGGumMrmktFNLyRTSc2XFbhMkbnTh5yaukYpDa24YbhuSG7WuwbBvUs9RRMKyBu5TUr9",
  "key16": "PoJc1U26pBdfrcmNfe89ocv3i5gTygsa11QsZYDb7WjJLRkmHwGwqbEHDFaZdijqJkokZQqy95DwZs5mgJBCSAo",
  "key17": "4c3hckGqZs9z4S9gnPXaxqd8K44qMhuGXe6xfo277oGyd7vo3kMzWyJVAZQMS8SPYWAFFb6YUQNMsAUaGpB96m8Q",
  "key18": "4G6os8Ye5pVA6PXQP7QcL1isRofmZXgCAernadbPDFU1BhnTq6XRufvyfGDa55HnFM6hCZ356orsh78LYDjfEow5",
  "key19": "2ASjsnQNKBaG4hLSkXERg75JLGjRCqVGevKMVa6Fk6pHLPeaXzwCVhFtsXyjxj1iWCxdie3W2XDKjNPCBJaabXGm",
  "key20": "DdgL6VzGvLpTKyYvymCvoFzz3QYov4GSzm7wpzw3CmAPUamay2buTu3CGnZvah4kqirNtEohGoREKkHbRYnVY1X",
  "key21": "3WzByd4oZGs9pRbaVdYLYejQdbWHTfkkY7D9mXxDt7SEfMP6dJMxSUK8oZH2LVDZD4YTN1koDhuSRGTA7uPRb8E1",
  "key22": "4c4NoBfy5dTon7xhBXnhx1LS8TmQz2aYbcXZB6BptcetdqejqzShaDQJBAMenzBJkAM4u9D4JzR244teMZKf9DC8",
  "key23": "3UBdjhxMJtm1Kq5Csvpr4Xy6uzBvLf8X2QnupXNRtcpbhXaKZDrySy4obFDQQTjnNkoLsR7TEwHYHM57GyJHtAJG",
  "key24": "3RN8PcoJedXSmYz5GnMCuZgfftdvvXAkXqwXukQuJ8Jmd8KkpyHniNubEceBWsAmbBwLeRHUaAE7RHkXufEWqWf3",
  "key25": "4ZFkEbBRHkbndQfrgisFgAUXtNjrQwsQTKm9oBJvT7Utw516SKAkURoSk7aZ6xhc3SbfCGfpintotBzk24st8iD5",
  "key26": "2o8xdkXegkWKiwYLEY1Q2UjSozoKLzN5dpkA7NtAoMaqDn2hsDChhokmWBvhUMpqnr5rVpN4kA7ys6r34dXy2jRi",
  "key27": "32fwqnT3ZnhJg2YcXDhh7Am6ixSEZRoRBQgZjQbtDx2YoWdBVsouJJZiELDYR3YnP7baZz2bRCBubiPo1FwVQLnT",
  "key28": "3BmT1SEtinLc5xpmns9CMEjknmR5EG2KiedaiTwdAVL1YXMxskYoJmjj2vNvweB4GkSpWTVPrr9YLzQ4n1QhemzP",
  "key29": "3uiPj6AHwMRg4Gt7aNrQs9kW6YBZ4YGVsEK53ttJC7PeUbr3dCZELXoGuu5dLJRHkKXFf7xhLXgUJa7CbRhpagj2"
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
