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
    "4gKHuCNEQ7S8NN3ie61JkRRupmdEsoSU9tTTQ8cuW1AsmTzPsndhn9aqNvqwL9L4qGiR3NtNs1ka9H7gXt3o7NH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYtP6GCrbUCacwqFXUnBw4PRxnh1WvXCDrRzGEFF2RHVdqKhpbBfzavDmzgL9ZE9XW4Xmn64PDewaEAsn8zrSfc",
  "key1": "2h82bayFh9eTrgbSgGmERQGn97h6C9gdkxioEpTaCCGfDhyVxNbpb3Y5m4nqGLiYkGpNw8Y6kjuwWuNrREXsM61s",
  "key2": "3As1iZ7XmoXbuuX5EMB4qSmXqR8wpyu5nLH4sEdZnQhuq9HRAp4yPzTKLbqEFVuWMbMf2v6uFT7C898SkxipguGS",
  "key3": "5n7c3knKJNHE64K7ASseyuqW1A6MutQE3ZX9Dgpkfootnrc6Un1onHLjFvQNaHBtdDe5ooVcFQdoS9sjqrn9dNDE",
  "key4": "2QFf6yGL2dhEYRW5Z3rhXS3kbXt6NCQeyRWER6pudEMdmqb1nhbeP65bgMx2n9vWz9JLXangwn6JmpNJRmomP6w9",
  "key5": "24WUnszfFKEq4eXVQY8MP9LDQ79499z7rRrwCdX4KT7TrPPWAaTeUgAWSdjSpw8Uo9KXLfTh6qDumEUMGhKocxpq",
  "key6": "5MskvFmJDtsD6Hey3Gz4ittoeWWBe6ZDu1ufCmxMo9ssvx9Dmh5z3Y8xuAmepKuY52p9dr9ifGeTpHAH2MRs7i9V",
  "key7": "5aetBvukesTkHDVH9eqZTNCkxY8sVfGE1xaAMiGwrbmVkHhwx3522FggURodi34iuk4c5o4PnguM1NqSFGGVkBqT",
  "key8": "4r4PjT8CZPfarBVQzVDLJgCyrUKa8zoHnKDPzjCxaXumTWJqy7vK1EXEsAce9k6bBmSFoAokKS6NGhkQWatgWr5r",
  "key9": "2kS9Z7cEnfeLCWgY9MGTjwGuhoxXskZUBELzNqRqrLeusaVGCnYe1VciJm6RUUng2x4UM82u7YaQbU514dUraPY3",
  "key10": "4byRoi42sRU77Do12KcChTZf9s415XYLVR9Vx6mvpVuBmExz39MrMTNg5kVjvXRqqESuCBQgCEmqAcbYsvZHp8Pz",
  "key11": "4tG4Y4gj32RUAccCLwCWmhgzvaoq7rVwYzGteduEn5dmF1NvnreU5AE72jzW1V55YnVKHf1M1g2Bv1TYNi9ahwhH",
  "key12": "45na2EU2ZbLd42o8NCRphzeKVa8jBHd1jio6uf334kMPjrGx4u7C6tXMgeJisdrGDzN9FcwSP3i1owK3iBC7ym5q",
  "key13": "SU6s5bZ4qkmqvGHWjM48nJPtEXP4CeUBNnykgU1bUd38dPKEQ2TWJzYwmbQe28huszEEMsrvoxNJBd5Nwh7m9AU",
  "key14": "2ATU4LapXHUzQYPm3citSGLkUv7LbJAjvEy8wvpJhK38BbpLT8UuqUXvVaC8FhhUrkVYBstzBGHspqXg1tS4bybj",
  "key15": "4sS2qJhnmsiVyP3YxNvYk87n674hA6PVSta9Ls95zU6rg35jVpowAzaueDZb7Gb9g7MP2ZdCKMRidyY9RVrCGxPF",
  "key16": "5vj1isAFFU7WLdEQ7Bhq6bcXBiU9tEMKQp4GLaaDcK8ThySX8HDDq5pc6bkHHEBt8zBnLTFRptzRAa2tpDmWV3yQ",
  "key17": "47Zhdt2TV7U3kjh7VNda4KxVajBUgLEFXpRdmYUbmBXrMw7zhY1s8ZXzgBVFuBy3BfP4XxQxbpnkekt8Qof9Npgo",
  "key18": "3TGt62S3XazdbPHF5E67KMdzDzr8vf18pqMgJieFtcm8qTXqfnQYnGr1PKeWqQTemM5hacZbMxEoNwUpomvyWhMT",
  "key19": "3JthLW35pT6rX4SVM8bspMFYiFzUTr4oPh6qHmJ9c6MaR1MoMCmDi9xNNK3WvpH8W5NAMqK2dScWSmFSC7AqMxTH",
  "key20": "5BWqPGYMmAkRe3ZWZWNMsj2CPivJahT51RHvRtA2KSUKNUd46ayN4izwyR1qCbLRL3tre885MaJ7aqjfKaDc8svx",
  "key21": "5PoijW3U3f6S32vdWESkYWq6KbM2t3Wc2hkHQyEK4dvLVQrtZezB9a4AvPsba9Tr23YDBHmEgvUsSma4K3uwA8t3",
  "key22": "526oKr4rNLQWywaJrHbBeFbDPvq8VSf74KX7FQPt48hJWoxE4VeoyGrVsXpksZ2CySS2iycQ2pLUWt5dp7Jcv6eT",
  "key23": "4NNVp5fGRfx5pWtM5y25xHp1RNf6dUkzHSRHixCLBrotRTgegc5cWfQUm54aQEmST3HBcRCLt67GQDvAxo8yFChV",
  "key24": "3cLDs9yYhWcogUGDQTA4jEAf1Y87bbdrM9uVcqt8aqiEqR6SAgXRqxHghrwoy3ZBGehoVrF8cW7QWoCvAw1uEkfF",
  "key25": "2fe41S2mgVEVkY2xFbp3Z7kBpo11jQoN5MCp4UgyWtDeQ1zQ5spZZ8hojSAvnQ61GTi4mDcYfLPBdw1M45LSdsTM",
  "key26": "9TYzcgMTRLrunJLinkYSxVTWWW4bFH4hHQHrvd97iR9k4veWqmLzrRNt2h3HtsBoHfeZM54dtrW5iZbXWFZ9DVh",
  "key27": "3f9e7gXqjAPuspML4A1L8PThGL1HjCpGnEXLXbj9TTaSA1EfT8WdSH1zrA8nMNqK2hPWX8AqDubXcwQQ3qTD8Jxa",
  "key28": "PgopAFZjBAqA7TCiaPwxw3sZYnC1acKs3Mo34WR37dZtd8471ebxEfMv5B7rXo1LKSxqG6YitaFsaxFU3Dcfc74",
  "key29": "3BstN5JZpwRxtaDCyD2KeJdKBxqx1dgMjCdUGhufjFVbDcthYV3kZrxX9Y4QfieQ58rYQLEpFFwLFW8Dam1kBCqy",
  "key30": "4D9EPvoxnmZGrF3xCpt58s3DPBiLD3ZtDWTMHhe5d5ULT2aNLhfHMPek5sZrBaNRnSkjLtSxnBLdy6vRMSoT1PwS",
  "key31": "cirJG9yb6AG52hVaAdMRSDCfbwsJwZp74v7G4Fdtsn1tnid9q7dY1ZH3NYPkpVe3iFcdw6gHaxVK8LDZ2LYnH5A",
  "key32": "65CfTZJFKiW7CL9Sf3givYaYauFW3kafsoK8abYJGYpuJ8NKqbGZtrdkLcN4R3b5ysWsqVsxJevsUdSfypLVK8CT",
  "key33": "2nQoPQtoVePYuNNa126ueoKQS25ojGK4kmqGCiBRqY53sExQxSHdD9vydxjYiQCAVkJe9WBb1mSTwxraKoK6HzPJ",
  "key34": "3gq4kXxMCsfjsKykJJUpCji61tZNeij8KBuf6oGWwg4ZqerqtooQCyqFk91THs9xoCEReSySGLC8JdPkWhiLu1KZ",
  "key35": "2B2fv8Gde9eyrd5SvTPEKTyMFjvXqrwC7RNXV3USht4Zw1fgTubx4dw5Dn1UDrx4tMPzestQWA8TMadvjymderVM",
  "key36": "hEjsWpXxYDd7cqqRFXEVmKYPLgXzDNJJjMmE89pVWqti1NNanEVmiNPvqRFjWbPdFnQJnrPhx9Ac4nmd6NuUn8E",
  "key37": "EVYa5a6UHuGtpNxVsMzuhhCmKKWs9Fk1t2wbrkRpSzXppAs3Qs7UroQCX5NJyonLb5kicqo2D7FPvxiqoMZYip4",
  "key38": "35detL9fsAkYH9mVERcwZp7v5m5bAvRNopXLKpQBazt9xe71ULLELkPxRtmkCUA2u13KtWEHFpEkrmVUWLwQHPkL",
  "key39": "5Ez9meW5ZuJdq4dkhku3aJysmM8toZYfasMM4ZLeFNUayh2RB7TSwbSMwBxVgGfnei5w8UpUEmwY3TtnA1SEz1kp",
  "key40": "CD35CdhJKRhhTkRKtWm55YCKqDFyPhwQXzPnheG2nC5WAAqrpbKprGccRdKiAxx4Qx6JY9RqrA5RytWP1ASHhF7",
  "key41": "sE8j3bFJ4zf8prWsGLhuurh6QjgMTsmGarFBT1zUWF4PQKFLWTWpqU8RMv1HWEVUgyfLwsJUkaei7GE1vR8dnfu",
  "key42": "57zZK7HqRY1Jqkmc1zZPsjaxAguMfT2dbG6jL5pWd55Kwu451pZi8GHoK34b5kayyJ4Q1xkospZNttqNUz5n239v",
  "key43": "3tj4yHMmbGgTP72XTPt6vfcsp3GWmoWLZK8X9YJdniezQst1qpt6BsVfZnKp4PfZi3K6Aavk2L9e9GahjLEmnroc",
  "key44": "4Ghs4RqoTn7C5ULvcqxA5cJaBr1xSQ7gzdvAD6BBMCj1QMR1s7oG5PEwGXcXXC6mdFsqumwGP1fTktAXfTpdsYRf",
  "key45": "wn22x2fLGuywAZkY7SwB654TbvhmkS51eBZYijLSkz9o2ancq6w8QEVzcbnF3EQaD7jJtnk6PEBLZByUAENAh8C",
  "key46": "GZYfhuxztu41FpPDgEgDY6qEN55kPDqnofyZc2R2F4yDE2V7AN5DJy83kFzi6FqXpbDTUYSfNpYSHHHbgXJKVhg",
  "key47": "Cc2DSYMuAyBjZZ4xd7yVwQ18MwqNmKti5hx1yegSTDvxgLzuqQe4iEaH6sWWN2t3hx8FWqdumo6pAHmibdiEugo",
  "key48": "5V7cvuvG12zMuQ6wtra2jp82epENTdiwySuCPdNjYkt3dHnbWtbAsJTYZWSDLzctpXianQgiPySCWAmPfkMrQTmP",
  "key49": "3oZ62fEbMRkgJj6K3DNW634CVbGCLYBWVJG4veZ5QuqNecvQwnihfLnszFr5WXUEn4Bj5ZteW4jG1yVSnpCLWf97"
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
