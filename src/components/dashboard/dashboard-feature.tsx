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
    "3CDf8Lq3h8GzAhVQE2HE2a5PTRCyMinTnrBCPQu8KJ1B1uqzwFUkWKT25KjTvQgS78YVKo7ypPAC7MuNXg2q1twA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxWZjr6oKzG1iCCgfyvoLZLWcBE73zMQUMenKmmfmWgR2yx2LtYmepXPYfyjMtbXwbsq2cNdkeNy3kyLQCz4Gej",
  "key1": "2FXNQWQkAjCgcWLzfNgsAdRtZWQbqymp7hyN78d4AmAzT3KsZuxBpYGf4LGCXuWHkCbjT5suUiZEVThsDAdRnqbh",
  "key2": "5EYBYDH75xdMdCfDyxyZsQ3ycgMGyytMTDJNURU6S6ccbpL5fK4WXVKDHLniqu4sLuUFmohnYhkZGuLXDyavbhRo",
  "key3": "63nYzurYfAGmHV7XZaSb6WHHd9d4QWsrP7xU23Qwg7rXu7XyuQQyEnrAtmxJmT42QtnGat9myErvDXNvfQb72Ass",
  "key4": "5UwGdGJmfhuaW7mMf36vbnhfVmY5fm3SnWXem93a4RdLZc7XJeegEoxcBBj2VVF6Q4h7wsZKLxs5aM7kE171giNx",
  "key5": "f1VKMnar7yKbYkwQe1TFNuJCAd28VDBv1DVa9hpZojdXSnAu3qFgq46nq51QyztYx5RDmWUZ8nNXurXUt7iQWks",
  "key6": "48gonLkTVAFsXKZxJBHghhKGmRKsZcmixmR66mV7RfAtyxp7NdymffTbxvtVxsV68j9LorAc3sr3s5cBydnbjUqb",
  "key7": "3ytLwgbCwPrvEgoZ8ipoRAYFXaxPvc17v5kGQtNXG3unaNxDgh6t87PdP89FaQuV8HttsiiE3rCEbyDydAgY2gH1",
  "key8": "3Wq6g6e44kgSMvXCjn1Vs5Fzi2RRdo9gG9vEpSKpPEy24yit4h2wQfZwCohy1agbnkkht6L5sr8N2f8fVkTs5iJb",
  "key9": "4xa23rru2n39wU4oGwW7rxxEDHCPRna5bEYt7eTcStpHdkn1UDcyEKUABWntcyczwNzHFwdpgv3JnKCj4TxvH1Yt",
  "key10": "34ScXD3pPZ7K3tm1PMdrQFk1NKFGZGQHTrpEUXRRRFuvnpC7NfZuSFkeq7f8dLzxmpkwcRtVJNCt8WoT6owfWZhW",
  "key11": "5hFhL237zirSAt6QDUacSYgg4UKaPVnwcMZ6wypg8zUANMhJ1cdSVNWMn4R7K57Pw3Qai9Ygm8Apqyzf8ynLWjVu",
  "key12": "4sXvEhcpTMZE8qR6d7aFwUrXmh5nZFVQo5nREWVkieniapyxnKpakBL8dW1Li3XXrZRuaT6671khrofXyuJF5TxN",
  "key13": "4xP8w2nkmixTckikqvCZagsxv5JdbWcPgJjNSVuecGVjvPuCJHXg2g4JnbCxyUFvahu1vURFTt4xPJfKKVeqwm57",
  "key14": "5h5z7Jtnz1sv3rdfjUNzKaB2PEgbmDvzoXiZR4vCR71ihRuDs1GXLLtaiSYZr7So6ND3rA6cxAwoKABCtqVigmZV",
  "key15": "QmexyHhSh3WnAtENkrgbftP7EWmavCmHLqFXjVKrkBFoQUJd7V8jDVfMrgfmRHVgRUC1XDk9DDyQJRp2RjmrCu2",
  "key16": "2e7DYjpvpqMm6DBequgh5PisSS7FcPyts7P48QXzqmmCAgjDbAiTKVNyUPPe6jbQg31J2NKCjZFxMcFZEoHeYAaG",
  "key17": "3GvM1qP3vX5X3jkJGVD257ptUZw6uZfLcMD3NVFWbnG7Rqpx4r2B6Hd7ANXUWRgsQxcky9PYHRRFrk2D3EmY3Wk1",
  "key18": "2VsLJCYEKSmjSXjwn64Gbi7FQWHvndbEZE6hwve3z3XwVHRkyAKuG9MA7sm3mx5s9faaV78uBHj8EpbqsCiVqk24",
  "key19": "678K86kWKNbBVh6sHeYSJRvAXAF763FMnHYo238frHbVwiLetUAdQmVkpg66B8Vn7mpCzboa215pYZvC86N2Cqqy",
  "key20": "2G7zS8x1Ffv27Unv2HJaBom4rjp98TnSGSFUvYctGxEQNQki1fxttboQqFUtTqcAiivJc9u6Bq3SH2JDPbN3u6v5",
  "key21": "MuPeeEmZAjSYVZFrBVBkaR6ofE29QCy8AWYHHDVkFdzWtZsDMnxrWgpB2dFESY9a8eJzFqkrw1iHc6JQVi8dXRG",
  "key22": "51Z557YgwWhD5pjFE89t9iBS6dXKv9Xg6zdU1YFwsKXQAKfGGP7LzkG4qjeJ4Jsz94kURjJHN2k29k7oXubh3ZiV",
  "key23": "8eM3cgskzDMmL3D5p6KpjpupsH7RfL4nTWH7mVKeu4Fk8DZDykt8arWoW43RfL2gAqNW2nvvyobacDDUD4Sg7Wx",
  "key24": "361QmK5KPmhinjKANWU1QZhb3A8FGupeUHmDeAKPxBCL7rnMNZjTfGnNZLrrkvZmEs4Zowz31wcLp5FF9L4AM2oN",
  "key25": "6qvc6eH8hjm78FDW6SshMStJwr2SHEDLKjGX8UsFVS3bAqQLCGW7MGrFGuoP6CpYmzLyThscLsGLVkWc6ybcRvg",
  "key26": "3t8x5Q8UudJ879QZKpEdJMcrPBGN7PtN9zkptCQq6W9qZjPXcCtj6Z8ns1amekamQXtvUjBiGfn315HTgL9JwEit",
  "key27": "3tBToN5bwPQpg7oJ923mwMVc35DHonp1WW4cF2G2KtynPwvofU1b9cWPHajQUc48tojmycrr2j56P2LqoHbBT39U",
  "key28": "MWs7DAc44TJyPV4nFfv5exDgpTBxkepBQkuSWqPyzXz1Q171AaeFnkxhJ5tAzGaAKJGR54LTVRsJXQX9Gr9VFWp",
  "key29": "5sxXfC4KwTaZVnGkK3okZusFsv4t3mGeXv7fMXL39Xf7XLERHzs27Xih4JqeG3gfgpAm4QV8m5RNJvdAbhVozphW",
  "key30": "2znxdx1A2FaExpERhJVzr9oNVJ9uRtgHUHm6kcaX8XnhA9P4XnRNJrfMLr1YTKUSqPKZhrsqNWZZUpvTo46vQP8x",
  "key31": "3DpHRYowLYCkd2AGcncinZQHcR29T3Cqi9roLFBZyRZfQJP1K74PrAgvGkdisWMYskox9CUWfKdk76tKMfDE95Fu",
  "key32": "31atD2dNMvBTzEmyD6ZsKMq9659fmdn86zxBRrJw7UUmvE9SaJgQALkn3kvRu71pFHHp33Ant6Z5Cy8r33h7aNN8",
  "key33": "31vE2YDPtVQEPd6e9R1vY3AHdWVbfEADmmWFNqLeKC5QyM8oE5jQDoSrDz8M9ZPNcAtesnQSfeCXhUvpa2hFQC5W",
  "key34": "3h2dabe2XYYaRC2TSh5Q8tnLuTA55WHct7HajVgBWeXjxp8p4tbKdUJqnYvBGDY1thYX6dL4VfnGVM7UVYEQsSMD",
  "key35": "5L5qpo85j39BdYZjPH58mA9ujPwSCJJTt7Ywa2cvEXPtbhUyfmW38nmFAKhyHo9QSt3jg9gqBz5wkoYDyMa61LKo",
  "key36": "bpnou88pDJHGhD7CtbZ9kkqq7PxPRjDgKTi6fLxdmWggsdqUpX94PVUdpJ2NmxZDsyRBH3Q1jPjiPdPRwq19BQG"
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
