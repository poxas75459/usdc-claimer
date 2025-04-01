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
    "5A3xkbaWowKEXeQ49pKAcqThy1SC3WqvkqbG7jCaEP7WTswM9QPzAvbqGaWRgvdxoG861NfW1UGs5PipfoPmeenQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29wMgVMdkerMxcVmHwCM8oS9c1pevjfCRpWPbCn2mSkBzWwXLaRdP8AksHzqPGreGGCDQYPEkXQ1DxemGbbNjoeR",
  "key1": "7Q3jP4aWDpG1XBzpJDbqAJXNL8Mofq3YUjte47CJLNkeoK2peH2oFVY9yMR7Bnx4MTkQbEqxooHw5suGS4Srh75",
  "key2": "2TCxm5pPhteCTFzRT2no5rYuaToDQf894PfvGzQQFR3Hx8b9EYDS1RVvEn1FzjBm5vjSTQ6SpgGcqmXunQhNZ2vT",
  "key3": "4KLL2X2m3EdkY9qu6ap2Zg2zSNpVLhef3Pe95enTFcCSbwoz8xDpQa5tMZmWbyzhBCYu7uew3YfxYN2SdPXCXYdy",
  "key4": "3V8iD8xUfmicSSqj3aUwGm67pwaAkSi159jJnhoUBGhBdFhNWfZiqDhRRY1ZK5Wgo17Newfwu4EibT8xJB2orfJD",
  "key5": "4uuNEZ8CYvtMRRVF1brdMeGBTgQVp86t7z2c9TEkVfuz6DvU35pLTurv6TjNKZ3HQBQQ1UdoUFmSk1MpYHq67Wvh",
  "key6": "3f6zj5q75AdFPY14UBfaaNe3LvdVWjoZ9qWWrcvx4GxAvhchmSpfoVQVCZHWjtNQTUaHHTCQYEwtyMWzWK93z5WE",
  "key7": "2rZotpjqE3FwR4U52Xmuq1JR7etwEUrCx56utvDrrj6fj98Qhtjz22RcLLnxjNFXELVhiQg53xTd1xfjfUZbkppv",
  "key8": "2z7Bo6Mjr3poG2cFax573Yn7gby6LsJE9Ph9wEhEL76NZEu59SBbRxBsuALWFi8BbBbkq86fXVZpBcCmAC34jycF",
  "key9": "4Fh1SFPA7we8Xvxm7wZmLhA9HGUwRTdrWbHbfXRAXxTPK3ciwjNQTmYrHe5NkS4DTdSo4qiyW8s8fPPpdrEEB9jj",
  "key10": "3k3taZHTQ9mP5tXU7S6fsA3ZoSnkgFiL3CyXhnLKQnoDdxyfZFFq5QLnLvoPh1i241VwXLcLyhmX8BrFqKP976td",
  "key11": "5TtZg7rniRTzGwhzXvhMLe56hao8RbAL66smPdS93AgSSVe5LRk36H1nzizeWJJ3UE9ghyAy2KF7s19pyDfdWxWn",
  "key12": "3nfQWQKUhA1U8XovC6pzj23ZymWodfGvbgFKFSTfJbTECuUMZPGoostgEKEG4C3MSsasknBz8q4W14NopqV4kecp",
  "key13": "5Aw2o63o7xjvCYPPkE7F6vKgyJfixtSMJiexe2G83oEeDFpzwQfhNo56d3gShigvXuTjkkqiBic3ZnuWnVWwSPKq",
  "key14": "3sro91hYmDPkEaSuQagVBhTcLdbBvk1DY8iBYrgXBTvhgEs1kKHa9RgngXJY7jFAeHxx6gmtq14nGs12uEBZqRW1",
  "key15": "4zRUVE9UDYDDKaYcwJMVu4Q2V2iMpc1FjC8yQKA5wbYXMDsEZZscSbXqpS6FyjYgZGbWFbzR36dJtbnABhhtWQ1L",
  "key16": "EeVjVfUJBvJ4g3mRzzpiLNMw6wBgDeQKLi5xFgRNkD1D4CArnW62emsmSL2CJf9uUY7Uu642oFfUy7YSbMuujDF",
  "key17": "HoAWZCg6QUJqjQHNxBYciMDD58n7Q3mYRWioj7wPYmhy5tW43PiZHZ7iuLdkqqVQAaraYGhmBEHGAgSUbyi1Lm5",
  "key18": "29x6X4NZV8VQWj9YaSJLBrAjF1Q9SSV1b8eNrRaXNdNfeVfMePA2egWce7WEurBriRtLHSYSV8k8eQEWynSnsLPB",
  "key19": "2G3RJnsxJ7fttwp1X2wHfnFpKGcaWze76pz1WatmAYdbHNmUgAjFiHtXBdb5bqzDojXkmdbn2pFJenB1CpJVeCb6",
  "key20": "3fhaDBXwoqGbZkc56YvXxF4gD4Jm3uzQMHoDCMZkfqQZtbbAMpFkFYxHNsXSNMxv6WZAwTqKC7ZmBh3xaMoS3C66",
  "key21": "2KorzxVn4jvofo3Crqx2gAnQeMHxVJiJzBezKNHRTqJbX5eaUx93zocRwgzTMFjKVtj2cwApt1ngojuuAMCECumt",
  "key22": "4yvbXHJrZvs2oRfBvkHawb13xx8KcGjAUFxBqiLqqTQMQpuHRcHTfoP2ELabwQpPQvD8CE1YfBa8L3pxf8zWptjx",
  "key23": "4cwS8eHfJQE9euGwX687aKx2K14D52KeX2atx2uSddnGuE3jNmrDm3jmLUbWgfKmEropQq4UirkiBL77TegWfWQp",
  "key24": "5B8gzzTb59iKeks3qKQus59GqYYnmGyMbAhJLmtKpdZP1CPXCfcUPGxSZshgqmgCrpaVFUq58ydeDPTfo8jfW5BB",
  "key25": "2ZwwyvpTti9yMKLjJzpx7n1bKEhNxTsEXN2VEqazrnKF4cUnt5QcaHHu9KdqZeoJKVRXxSins2eeMANxw7P11dEa",
  "key26": "3hPxj41LtzRbD42hPBUWERJqy5R24YWQAC5CeWxyLQ6Zr7BwxLyw9vaVLN6jkmrFBeAyuSTMa2rjTGqyf8AVS9xw",
  "key27": "2KStJWFgnd8JoHuxFhj461cEmHh45sDzaXN3gaVDmA6HvjYWcZo2u9MmUNKtqRPh4ToptHXVfaQ2wrQwQ6ZXdQSx",
  "key28": "VrAqfFUxGeNghRHDYCbjmUKgzDHMF8Xc4jPyN2NroPKCAuNPKYrZZZ6DpwsTA8B1KLjeLJvpPNydih5TTLEgVJ5"
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
