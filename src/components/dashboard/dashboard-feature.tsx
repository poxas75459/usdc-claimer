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
    "jvzjPsVWr3rfDk4bBDafop2Td8w2kSTdVve7pgZY5XMJtwGnfqHcPctHni2UrYi5okhUXjprTzZ5RXQCHSyH6Ts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZ4adgFsxNLYrxaDmDYAqQtApgmxWM9y27RK49kXXMyz5w6cCtUouaJNftBc6j7QN1cYaJSUphx2KRjPZ47YCyR",
  "key1": "vbsbjrJUUMgYtUSYvnSNtt8jEKPw68tBBAuTYky1RocSyBHMtq6k7biDa1UBDggb2cR5eizCv8E1yrpeZj44dsy",
  "key2": "3KYJuP2CkzYEfChXyXkeL1vPwKLATNWm779d5tF747Hp29CqBfVGjNnFpoc12SvcNtJaw8uFd3baWiiT1ZG7TgEB",
  "key3": "5eoxLnr9EyjSzdQX11Fk6UewUGCiykrsoYLwXvxDRjcB4BSx1Z4UYCSDvCw3Jmy3uPmBczfWYGxnLrFn5XfXB4Tt",
  "key4": "2tERStW1r38yheZ7q4taJoFhssMQwXyk8PbyUbZhZ4oqQv5Lyei3NvwxBSKNekqFap6ijvA4mGVZ71wk5YhNU47Q",
  "key5": "2hqYr8xGTGxPYpMyHo5LnzAztmoxahbMuUBAovX8ZHypsmXwRC5rKnJ2xHmcC83JVeF9s1Aghr73FkfZ8ph897e5",
  "key6": "4PiCna8SZVg5NB8noT2AKtz5muieKaGitUmrdppUxXEr6jrSPABA7oghpKHtw7rjWmhEMNQNTaCP8WpMJ7jdxw9H",
  "key7": "5aKwNFN4h7ffwMCUHhcLXWik5h4yzKPcpmCdXTjHV7tCdoKUTuaWmUepXPvDsSLNpbWFvs4uzSDNtFBusov2EE2c",
  "key8": "E2Rxuj5LjU3qCYNK8RGgGLE7pmghRd5oPhNQAgALfcQqqypaYE8kVXZCbJNFbLAkrGEe7nx1v1XxbaDJi2zsxC2",
  "key9": "5h1VYJH1nZ9ynRav3drLJyt413Tgyxf7SnR8TmZFJeZLaESXC1N9LEHJEAC1LCiiLoZ1NJGSwhW3dhEPsLBc4MEi",
  "key10": "3Mh7p7QjXfxBhMveqGevK1EZo1HPQuoz6U36dSbDhyYysQ6Xx6w9YQi8fiK5QkrkxcUs1nNQ3dniaZ8BS6gjXe5T",
  "key11": "xrmq1jMfeCmcoTUjRw3Vhh1MohF13RvEqwPCgdRtaKTcp17VgDYJ2zdxXzRHJfV37n5Bqgv6bXAmERabwD9vp2q",
  "key12": "2wieYcmHeHycoeRTLRxJj1y6DEjmPyMad7SUh8RhkSEiKJfgeGQkTPQjwdkTCN4oM3AHrcphB1b6eDxJSKcq6HMe",
  "key13": "PRT8Bb4r9jNrHXYzFWH6dP7g52QnUGwfBDR4DesKzrd2rSNu568Xh2awSJuGtN6B6QrkUBA41Cnoj4cgPSX1y7R",
  "key14": "2c9mArveB65ubZBsHhhSVEagJHzuTsDUXxuEvJjqcWdobSFCnGd9KkYkifxd9oNa3zP4ZLNHkL3WTBYSu5G2pZkF",
  "key15": "5pz6b9doeZTR5XL3mqN25UJpi3KYuPhjVweygwZUemX7AcpM2yxkT5R99PCii7njF57iBM2zYNtscDVVDhcRRtFo",
  "key16": "3D1BQG66GapHke45WjwwPY9WxacWtuSshSbooDXGqdN2nxvBbW4tHjjQMeUtYi7bYw11AtMdGK9rsH91mAGKF2C",
  "key17": "5qNw9Cp6FaxJ1Y949feJW8E31PTqYArJq45tdZM93G58o2pHpy8PhAr4CubPJY1Pa7JTZMV5gYKJt4tvy5ogR1QG",
  "key18": "5x6tu3FxD9qfhtRK2BviMd8guVv7JVEr8xoQxU5T6MD29jCxKHsfnAKQxVv2zmUC7exHqua2q7PM48eLjJiqr6Jk",
  "key19": "zPm5YVusjpDp1fWh9JijrvuaZzMzgVL6LYC9M8mmRTRQNdjVrhMvHmb3muX94bhn24xmcXf5SZeG4rV5fW1LDy1",
  "key20": "VmoFqY5A51nQfuf7gcWGMoWSAzqZB4msiaRPuyE6ZgMZPiB2M99Cn8Ckjj8oi8X4fsoDoDqkZCkCwQv47qtQxWw",
  "key21": "4oiSCJj9FtRn967x7EDj3i6nmJGJgFChd5MSf6dcxu3pL2uSSFoxEFC7WKDawRrVVYP68abcaKEN61GYTDtkyKjM",
  "key22": "4doJ8qeJ7RqsBLULAbxzSurRdfvxiEkfSggtTGeNC4jdpBxcdawSCHurAA3SwajrQYSBAp6xpghwKQJL776buig4",
  "key23": "3frsNXPZG6zbKcDvSZEfh83BnB2E8fKYR1CnNYyN8rk4wgtnuomBTFcoKSr3abSrRJFMFMnoTmUDQxUr6JVEry9t",
  "key24": "4yW86itFHz43oWZwSMw21xRb2drsye7EM2ac3frXGMXu1CHvKUmNu7DWKGx6aQxtgjkToWFQn1185qdVTrPKmfe9",
  "key25": "5mwEufdjXBRa3ryzYjKbK1SgpXQzprF2GsJaQ4MY5NMQQnW6vDKupfYhwfw9xLdATyYVyGAniBMggG4oPv1rGXQ5",
  "key26": "7Mnwp3rinSoVqkDQsc5rhZkYTu7epqXLGWfifpffo1oXQ4XukX5grUteMVeZt3JTaFVNYb5RyE4eT9DMEfQywFM",
  "key27": "5oxdUkbqo853wBALGUrooxEXLP7vqLNbo1tFfX2qf8G2Eb7ieLsgikMzpFWFkPCTBFg3jvhwYrh8kEEMt7rPQnGN",
  "key28": "3NR5ksReGNTq12Ln2SGg8Vpibv7D1xERhNx9edDmd8GCxFmthY1m8j1vwtzd4mFn6iGNUfCcXJkjKVNjS7i418JC"
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
