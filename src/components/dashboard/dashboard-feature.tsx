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
    "T4KEjzRqMcXogPmvY2apX8GnoNanhjfsVFs5x167qdeKohgyDzemTMmGaBsjGD7JYAqwJtj1UTGH6i8i7b6wZZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvLLUWN3dn52vgvF4JYLGhKTDCHsArarVsNNVDesLD7fk9fMr9QLkdJxuiRr55h5XfB54s3qEFozTyQkm3kEm3U",
  "key1": "4bB8AFAQxKBtAhBh65i6CSJVP7T56RAeW23owcHszA1vWS5CJtkF4r9KXortrrsNDWU4asCSe1Szt3gzhwxzpaqk",
  "key2": "5gNCgb4krzRCrwGwQH322WRExJFWrrGjo9ofLX1xZgbkwLiabrQcfDXwgD3eZi7ED479XKrorjMemrEuZPD8ZBVL",
  "key3": "5mCneT2ChNkhK3QLcYrimjfQZEQkrFQT3ysEMF2wpWxfPFVnM9cicMthTy3JHpW7WsUdHUVsUYBXivS8AC8VP6wS",
  "key4": "3qdzqjbM3iuGzzfQLDExbV3p8ZPkgPJ6xhAPcLM6zCc2mK3je8HsjQrHWPwKfkFSyFVJmzc9Vn9Hangazmad4SAk",
  "key5": "3qJGysjU8K86Z8avTX1i64MuMevcWYpYJzmcfE2z13537PjFivN3ZFwca2d56crqXrXXeZtNkPXMDMajXPqCkkdM",
  "key6": "2AdxfJRSRWu6vN6PoFjw631Tdzsy8PmSQY3zXtfab7pNtm58GDVVDGht2Q7rMLRSSTu3qMjo8ypJHnWjEWscgcEP",
  "key7": "4ZkKx2LpcnQcni5cuy4LPC91wC9ctVygBG4tuFVzVvSD7EFfnTf7RFvcqppV7sMMDeymvTaWKoNC22nVFRBFnNHt",
  "key8": "5Rz2ygonDS2FSoRdfDgWeRuSgJTC6WXmy11sZ8mnV1uBLnSCNTvgTwq7uBtGBm5x9vvCC9Hkj7ZL4AcoZQM8qPLt",
  "key9": "C3bbS6hLZgSFxo5DNts6yt5ZRrWWnL2Hj5SeN5S656jiFtaDXJTZLebt6C5UxC5N4vXnGKEk2eceUVp8dWL4oSP",
  "key10": "4X1r9ZBjwxJMavafNGcgbi61Qs3sXp6ATuxo5yBTXuX1GHMHXj1dixYsvK4fziUXz7NbfMNyNRUxjK37ubzvpZ8s",
  "key11": "2x85C1k36csZr1dbnjC65FoDmBd5StW7YYRoU183STaEHYUwxyG5THnxGazFpBrtz2EWbG4dLwTz1d7spwzpRFjw",
  "key12": "Akq8cSfzT9u7seDWDwZu2sQmWt4NHXN1FVu6jUoRkPqGPg3VgnQVBdAfi2Jupvz1L9TVsrAL1dYP1hcLSa7jbwf",
  "key13": "224PZpK7GB6Qoag1gwxjSZx7JkQjdXRA1RW8D7d4nzFWsrhGEFT7xXPGesQ64ZwJu9YtENbL3FUQjgC9JazsCyV4",
  "key14": "3d9gsVYpc5EpceSLB1UN5j9oVW3Uza45mxH5CY4iWtUH9zR7xx6dgq7wAyqMfup1x1fPH4aRedpnBgXWAPam4QFE",
  "key15": "5W52wFbuTTDBzyy5CcbF8Hoc4cp9Sr5BNzngXmnqraCghbt7ZwteqE8zzkayvqu6CeDneGaknUjqwvJCBnRvRVdV",
  "key16": "5s5TVVH9cTWgfX5KyQUDNsaYc7DHSJcfEGBbQDtGafcMQHVFBsxpwuXjDNbET1eZCUh2zqDd77Ytg6CYdhum2BMZ",
  "key17": "2dGqvPmhhveU1uwgac7g1cBPDyHjLByKHwFXeeW5f5JVtX8pPSko8RDSJcaS39R5pr6MP6oTw7rpoNEwkq5BrZ2f",
  "key18": "CoHdS4KCBaHn2jLw9Mui7wz7ZUtaK943x9FYbspvmqezoJf3R6ayiC5Kr6Jk4KRv1vSLLa3zovgfTf8mC921iJ5",
  "key19": "5vzWWvQvMykgBtY1eckioBkzRvGorT2un1ij5oekuFq9tVmEV6WS8AZCVBdVx18L48Pim4EgDWYiz1yho2GLQKaE",
  "key20": "5dsXHLs93AKJCys1Lcbh2TwF6rMZv21x6gs3Kk9NXjraz4bvNH8JZ9UvwNvvL1nnTcYhWYqQLRSbA8aU89Ug1F4W",
  "key21": "Hu2Wd5ZsM8QHex6h6Yz8TxpSNWhhPePGy1pRfA97mvSmANjZ3P47EVWx8t88kLAGT2Dr1wS4vw1mbat4anenpFi",
  "key22": "3mQYKXD2ddnXHzLx7q1HcopHHxkmDtCvQ3LJm5gXNyhKwhnaJj24Dm8XoFuBczy1v1iaroV3uF6HJ2iKPqUwM6EV",
  "key23": "5xiXoxgfmYVb2j7bqpHT834CFsRDmV9EAee66LzcESUJu9gtJbEPwamijxwy5opNFjCuQ1MWa1JNrRDFpzeJoNCj",
  "key24": "2sHtph1XpDuVvyudtnBJSA49aB9xhQ5VV71kswGMwvb4UehCJr9PW9MowLHae3HQxTV9E53eitVE6etJrkPpuiuf",
  "key25": "2Z5Pz2BYF5RQMZscy17LikJoJzEFHZQu2gteH5wX7HmvCUypAkTxAuVwDRLUnKGn4dyF7rRCs1Xuedptp4bLrNGW",
  "key26": "38mH1ckUPtaUskSRHM47Pvjkye7CU4vRkw45pDG9H6YtaPDPShFZeUZAJCdxjw34cv5UKK6LrLu3BoHqzmVsoAb6",
  "key27": "5KEZSh14h1ecDjPJaAZRoz2MzPCiqkTaG5GTwmLLH1PshFD6gMtwebTvd4Y9RtG7ikMALJQ2tXHkwuivsTzoysv1",
  "key28": "62LArhRjTVt7pG5GrVvdjNSvQNUmUmGkPQZPAa4kg8cS5VeJveeho7JmWjPQnGd7vJvSQc9wNVod2NnuievYxtx",
  "key29": "3buGYn16SfxisqK2tbfJxDx2ioAjpJgW5vrHVtfY2YgkDGL6rY88Egzghc2JufHbYyka3c3aJ3d71rUzksSsKBgP",
  "key30": "3F9QFe8JMF5oXmRsaMqa9LfvT5LHj87cwEF9PL7vtKafqw1vYTKi5dnvG6TTT3tjqk46wQ6z5SfNz6b82EgJXsnp",
  "key31": "3r1QQBvV43Sb7b8pKkaKihBxaBSY7HgieDpZ5xzG87hu9MPVqMqvsPuj2ihyNPwdz9Wodx9Vasjen6CBY54X4U2N",
  "key32": "2RLrDmEqMNtq4xhLQYQsyErYMWPcKZGG79DJnUv3EtGwUzFqqWnAX5MGiEutdZrCSoSMSXUphGqiaGBnmCcgqojD",
  "key33": "6aHWXwsQf1LBoPLVVXhdmFCqA8atoosvNCPZ1H9j3D5K8k4kW4YgJxSut873MiMjNLzEcuFgbBaDwxYUtg43LJk"
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
