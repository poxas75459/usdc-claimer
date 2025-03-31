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
    "5RhMeg1zeaLLffdSgd6DkaX6wx9Yvw6s62KgMMEkvL8bDmw7Yp6hWsrypY33soRnwm5YJWribRhXTojWiiehemQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568A87eopc5XvtXZNmaGgKKvrzmkAkj2xdvbLQN6MqeHJPB8z4kdVYUYWT9wuQSJWAVt59jBuqihZg45LoeKA5yY",
  "key1": "5NPrZsNptvWAkKyhqTaRkBK7ub4MLRodDizwuookHLFWGzJ2cFQFct6cZUdC7J5y9sF8VHrrX7mjEzHfvMCTTV56",
  "key2": "4xJpWE6USdcn5kXNgEFNypq6JTEeXyf9EfhfsoWQwCUXkE3qyvjSTDS49czvjHDbafMRWKbaStzWjthnsGPEBV7",
  "key3": "4A6A8bk8wjJ7ZY8WaVvUEPsZNZNpTb8s63QdCAtFBoCX7E2fdfpGR5bxBEfuViGWu7mhm2pH52UruQZ12ntxM3Lp",
  "key4": "KNaFZaFz2DVKT8V6ao3uajgWxLNyTkzD2V9ZzB1bCfJwnF374XgRWhckKMXrXZj5F3kREi5qVmnV2jPKA4uTiqC",
  "key5": "2HDB7SBynABznDfZgTB1Qk4Mk1FycLr6m4gTvUSY7u9GBUfR6XRdbN8JEnXDmKbFMkoEdCVk4LKjErboqmoSLqgA",
  "key6": "5nfoWjzst4PurDgYEziV8TsdK44ZyXBYxG63CDdRapamKMBFz9HHs3rbsu123tUjEYkrpYD8F9vssdH18cERLJpx",
  "key7": "3xNswiT3JKKk2anfntDBtkUy6BjFLT1mJhBYC93LPQLM21axBinXYDwYaKgm2zUnEwGvhnaBstv6o5XbL3LweM3d",
  "key8": "4kVJzppf39QGLcsW3SdeQmqnauJi551JABUt1uAv54b7wSmZB5ZV3Qgd7hRntkuCQhnHv14RRWEHwYoE3h5HML77",
  "key9": "5sRfkhuhEeCNeTWnHzPmrEt4D5g4ex7Xe9E5Y61udhCmqvzMsQZKSLL7J3o4tFtEUJgowbKos4YD3y8Ka8rAzbab",
  "key10": "2fAkeQRouhUh2haDvgV2L8cxU9AfzE6jMuLo35aUXY4B9vMWpDxmcb1ZsKD3Dj3YxLDQFdQPQR9TFY211dPX6HRP",
  "key11": "5f4oy5YTbo53dzGNi4SHgjjzXMkHKftiDmR8rN1kEfcfY1FFTtY3XEVwmjYfaC6YXyrx8VzG8Y1TksDK5zu8pmNY",
  "key12": "3W7VNKTpzXaFUmssc1U8mHfUmBcrc5FHnu2adFxUzqvkm5iYB9hYZ11XdTQFUA3HQbCNXAGZQ24UFxjyTPxgQGRw",
  "key13": "4p9FFs4AP1GjxQdEtnNf1o2cYXomgkcHYnpW8wckNX6TX8BcrVU1zi7uUaeJqTTD9fDi42DTnByxfHAMvbtp42f5",
  "key14": "2xR4fon5vGL3URoVhi1bgGvWftG73wCdupez7SryvR8et7vwfvTJXA1tH5kZ7wRkPyJG6ccYg7ZzstTpKH4e5UNS",
  "key15": "5kLxefn2CjybyJ82JXUo2GaENKuZSXDBBj6mauqcCnercFP8GYoEsUZ13ix1aC8YofgmpJ79maQozZkSGz6hwz1x",
  "key16": "nJiRZCgfDRNkrXkWSCCPbb2JWm81QG5eVVMSnhMjfWvyTAsMuULgPs4R6WkfxsZ2fFyHo56GncVwRUQH7AVgHyw",
  "key17": "4GgTLjMR5ncp7L7wygpLs5zhnr5yESWVxbYe2dZmJQpBhdg66yeHGq2teGm5AufzWkc1p1gTD9KuBJvQMYicVTkm",
  "key18": "2e5hYSsn168LKUjKKd6ntwxyeMvxBfYVotrpoPBnCaUm59QaqWm5PQXdZdiE2jsMc8hzhbii1j2bVux1GvLriGoA",
  "key19": "9RgBKJCfu2sh3oSfLdBRD1VN7WF9WT164ffW3bwsvwbWEgvncE6eXcuXZxjAWDWNBowmCo1SEBBFfAccR51pYqg",
  "key20": "3CBNnv1e2UJc9AwhSxSzrfx61bABbSJTDWBffiypjV5fc7kQmGv7fLf4SMfkfinVqigMy3B6PvW1p4HRvwQj5xbz",
  "key21": "2WuVznKLQEhvLauDoeanC3Wk5hResfgqfqp3Ck1javY268ouXX2pjB3Cd3rCTPAMdqn1a7nmuM3RVz7td8tAjSAM",
  "key22": "5B3h8We9jnr7Wo8icmSDrt4UZqY46x4RCfBLyFNPJVSh8sYXubLSFWsWiP8HFvntMvKFLgaRLTECzQgf89EUcc6K",
  "key23": "46zTZCZBZyK2npyxvYNMJvzpucxyDiope75KCrn1Trx65Gd7PQ86kyhKRV4DHcyNABUE2pBGZjZ21YZmctTRRbFf",
  "key24": "QS8wzPbUCraETfekMxgG5nvD12EJVrxCfjgCidZmUnUJbhZ7LitSn18YX4p7zm9yUL3kPnsC5jK8oa2jke4b5pC",
  "key25": "VKjqzJa9zbwmaYFwFz2DtqsS2PTuXwedropVPDzs9frg8agZwBG3zyYwZWvmimvDXYysQ9Txzaetq6oGkKij67Y",
  "key26": "2N86pzzT41qhGsGDqjBgKyufQefCFKPDR4NVLPx2ftLBWkTUKQ39Ujes4TV1PCVempGGz6LyhTSDKNXPsAx7j7qy",
  "key27": "2kUkJTAqANgcn2UHPUkNUvk1EDiftn2HJdS3NgVoj7DnPY9XTV7wdc3KhYfapwYqjRYVaxC5CEAyHcs9wLgPHGn1",
  "key28": "5W43u6ZjSLi9rjxkV8UZqb6YsiejVaHCqXr9c2nbUE5AKymnvYHBFuvAZhUQEcbvDSYL5Yz5zKca53A43EsVZ959",
  "key29": "2AHdxpxCxuMxwAKDfdbhrPfRBbJgp4avaYPEDhNMCwuiATzurdrezBGTm12yA6LjZ6mdVAJ6aWUaGPw8873sGa51",
  "key30": "3k4iL9QSCyVUbM8F9UHgN7vvL2F3dfED3BVWCL98PYx5soxPFAaAgS3Q81nxb68h22qtT9e3rqfffyRtwchysicQ",
  "key31": "5J5xguRh8tHz5ekdTtctuwGNy34GXwBsRmFPcprFScdxNEH9n6PbqqQCetNaGwiuQNk7BgTMNLFiWbkzg1SJMoTR",
  "key32": "2H2r7M8J4yWGJeJfGAZ4sYhYCkJawoZ7VDjmQ1KM8c45Ts1FdJs2tUfccn1rwWL1wZ3vNiuo7sPVX6FVeDKNFwqG",
  "key33": "LZVfRoWsKrLhGborXjjJDWGKBB2BsX7Y95Qha8WkN73dp3EYXbAVvMkVafKwWkfT2HePZ6yfh2KEK8rQrvX252H",
  "key34": "4xddrXQhkeTD2v5tp4mUMJRgwksFogMLGXpnTMN6JhSXNW6XQNiJ3aevEDejWcUZT5rNkvcf3rxHQqY7mnHxTiNf"
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
