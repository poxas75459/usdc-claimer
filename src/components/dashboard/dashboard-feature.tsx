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
    "CJaTwzY3TQAjTV2wGeu4griPhC9xZ6iDoULyv91RiN5LEeUPgEKfTwxhD8g3Dwu84gJbqmSnGBZxmhmb5LGiVUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TjSs3PNsTPNTZFWoa6AkusJPg5ibESC9LMxyCVZcDRVLLxnXfpm4CHbp18WyHcNM53ZsBcTAWjA5Y79bhXyE7vQ",
  "key1": "4SuWtENSXa4EV4ohKN16C6wQ3PeXcWkSkNboFzRkJBucrdQmzED9Z1LpYFadL5VX7MJRwDyawXKhKaDbxz87dcQ5",
  "key2": "676p9tcRUJ1JKHLvPA8615N2XEYXijwJBoFW4247FaoBeDLGFSzyibMz5LEciDWFMCuPB9wyvs136uPQhUuAZbPx",
  "key3": "4QpCUaZuEvdA35qkDtZyHrg2wRTuHVebgw6AAaqujqXratVhcnuovdxUqHQc2UaBZybRGYGXMwknMoSnx6f1rcZ5",
  "key4": "5VRSJ91QkT8Nrxz948KrRca8HV9L7pLqZ6QjFYzRLx3EtzQm1vHAuGJDfaLfeGeQRGfBDVbwvvu4Tz3rmz69MKqA",
  "key5": "5ofC8dTqPpWqAcfu7ZkEzV8fBXi7GZvmKYxj78pAn6vbCB8iuR4JgxznnFQkpWJXacGgevUgcbtzjfSdYjM4aThW",
  "key6": "urq3afo4Ui3si2GkXYB9FGLDJhjRFx2FC96eEeYfgXGTHWigw7Zk2imTM5FcgHrE2ttjw7tLwrGFjoWr1UoxZ6z",
  "key7": "4XiwMtp5stUqk9yrXSN4bRDZA4iXgnx6da6uYD8JMLbjT67FXfTJv36cfgFaPbBmQYVXLca1uzD8gZerswtZk6cJ",
  "key8": "UUWTroqgndCSerUgyR5sGui4TcMoHfFhE3dwTq8v5A3XfJv42tKUXg8HPxX8R7vkuL4fjut5F7zTksFm15CEhop",
  "key9": "eHaSVWo8y9v7TH9BKfZV1oErEv5n9sx9kiBBFkiv5KUeVcYZGzzUUqAtqonFWeRKqKm7ZX53ufZVJZukc7xUEjQ",
  "key10": "z7kqHEnzrXgBKjkBpBZWAH4i1Ua6s774rTftU4JDTSivyZv4cQzu4fJ9bveEEr2B9vXJjUZkV664F1WBtaF5jrQ",
  "key11": "2fK2PqvvJe3uENs1z39JcfgQeHQCYBu14RqDbk6g9UAahpKwWh6E4qZmfRgeByFrHtrtAFBiHPMCD7HoV2PcKScS",
  "key12": "5CGiEdFDRcz7YCu2ZR6F9SoNuYBQ6TGguuSf87Xedp7g191Xn7Ae3WBparqcMGS8S6PGt9ysudBU9w8JcfMuRUNC",
  "key13": "5BpJvCq6f6g1SggbPKeAKDcAUSKnRwBW8bGX9GZrym188DU8LSrikT3SNuNSsXz1tKYpXfTdkQmZscrqgWzj3FbH",
  "key14": "4Pjyb48yM7miNt2t4pZWtmwUY4xxBS2mZj7XNTstv326z11zZ5gka3ZnACRFPZHtSboiGwGZNasSJeTEMxn7TLqM",
  "key15": "5AhQjdcNvjronZPh8c7YQLzHPTTZ2dUfrYJGywDooh5os8mBDh7eCYKsmZH8NjvapMu82LfquhQte3hQJNJkRmD",
  "key16": "5v8A6jUgXsECkPJzSrvHmYSnmxBxSmuw2E8JerCJxsXAqePg93xyki4ZouWYpuzRnvcbJvjCffSKg6RUtRTpqaAe",
  "key17": "2RTJrkpQ42uR7fAyqvxLfG8TMsYVUYkG3UVFi3bxUfGxbX8g1xvkyjyT88aFAMRiprZZ1YtqyEa2feYWdTnoDHDV",
  "key18": "4rxMLGXychrbkF3pQcR8cSkCWnDMcJjg72a2jg96hjq3fQbLbUVYRuZvP3ZXpR2Hoy2k6FVqigf4w4yEM7cjeLvv",
  "key19": "uibudM1ohM9a8rRpiLSPh63wfJ5REo9h7ahQ4XTGePXrTTM3Ph9hQnyuNEY4fME3zKfK7NU45brQ2zpbhEK1Z7N",
  "key20": "vGMUELdet8AKauVUEPSCE2Xdsjx2RvCEfnu2quHDZkrTFNEHmX2EgBV8gXwb7ZRAHrM9niTCogNUtk8GhHtjPfD",
  "key21": "2cLxu8Bo6C8GE5SzUp74BVqTueXKGLzyEHDG6D4dXAAgC21s26WhQ145gFUQdeWzh6UJJCgBoHPFpUg5tRp9bFm3",
  "key22": "4wd71ScYMfHiXJ4kbRzsCP1wifvKxfqpHwKu7yU1TnAvgvKC2bki6F46YuifaqFpfqBGXjqaJeWhXvq1MGeERZdw",
  "key23": "3r74mkwsrRVq52Rttvnk544ErWvvJ4R8TiSCMibDejfrnGgEZfLXCN3wJJSCLxtiL6bjWJ4R6H3XK2g6BoMohCKW",
  "key24": "4mxTNett2oG5vV7cLiVsGsmkGLgzLvjYE7JK82dDsiaYfT1LK42pQE4Nf5DYwtYDifpprZ1KfwxLcxncSrsboEpc",
  "key25": "5YfakqpxeYfvHAPD9VXjEXxp5AYvSLMo8zgW4tqthFMHY6VoyX7hQfsFkvqH5QNwYUvXC1eax2TE3VFsGZyZazmp",
  "key26": "5moJqHhDVaUbfA7gtqWswRHWvMcLkfTWHvq6fA74Upd4F2EdEJbGRb8on4oWPrzfvoF3SZYtmeTC3JmFjhFoHmXv",
  "key27": "2hckpEvsfJ3VvU2Lx2tQ23jhzUfyMZgxwE7qgSSnEmWsJpYZZpv2aCEVtv3D2Hf5RgNUv1LymKXjLch286XLiGpT",
  "key28": "2xnTAPE4Q9gB6VPzwy9gd5BNmSv6GRqtTfcKoWbssoHYrtLrmFK7Bu6LE46JaMJh4dKqPo3J6iVRpFDyYuQW6Pz8",
  "key29": "22bRdBr2vd1Vzv8LiKmJSUP3sYKJMbrN3NBryqC3zgbVfLAQ3J2s89Ke4HxDDrEL2hMe7taoKvzJyenRd7RpRyZV",
  "key30": "2QPcxKTHXMn5qcrsga6UbQuMPNuZCNQGyf4u9qW7uX3gzk2fNnXeXrgVETrprV6Z7SU7ZJDxXbmwdpBLgzNcd7E",
  "key31": "5Lk4tAsMmWVyryVvjFm2iBxr2uqLh9GR4WPXdCLwx6pTw9J7y4utaS8ZuruDKiYhxiv8X8QeXnqmYByMMqwAt9Wt",
  "key32": "X3CFPDavDGmxyTz5NHXZoqGad4CeWTz7rAaVP16VAk79A8WGWwtsFN8p929ZFP8EdK59vBsD4WYvn77uvmngV1m",
  "key33": "SMdXwFQVFMeUFvQJD8WceUBhwwvPRVzyWsLQNhwmP2ef5WSJ3jifV95nmMJHzgAkHQY7SNfveKt4ikeUqbp2yoF",
  "key34": "2wrvJwzy9fUGQhiCNPYf1T5nzdsHRpJP9MvaBjf3G2hJi6W6gXPqGe6WkUuKRWVf4XPgxLKbzAaoRFKCWchVLgWr",
  "key35": "5EU6uVCQFqMJ2Q1W1kRvjwzKa3QQHmX1dUtZhRxV2zSF4tHBYBCf5YCW7hox2rK3q8sdZcHVYGjqJitYf4LUQBCb",
  "key36": "5zq1MPWn142S1ap7BJreN8EAnPXqcQJJdiuyPXtkYRCyzG8d4L1DA4iqPuxEsQX1Vc72doFA8FPaX3FDRAY4NvSs",
  "key37": "5XdwGZtRGG7Rbfk4d1AMV8kgPpc5hSwgri5L3dqdAPtK4xq1tYeFtcsRPMScZ6q55Xpy5qnvhMpZKQMNVYoscxLU",
  "key38": "3dHso88paLoZ4essPxwQefvvKWPBCds94CfaigsQHcX5SSgYZfiY5A4pZqgKuKvYjqXXPmm9EGxwDCcTaZUYGXoS",
  "key39": "KTFXPt6fRibf5trnyejrwZ4gNMKziNWw7Xx4hQ36zGnXVCQMm6avWkRMwR3Pt9Lpa1on52Nfh6wnRG29bnyPpeC",
  "key40": "4wNz7sbHoCwF4hCa4MQyrMnHUJoqRBB6rgcbkCUw6HJBaXnr6HBjnChfVuvej6o7rCDWtfcfVStkWJeAzhv1Y2BS",
  "key41": "3et7vghWf4U2gPsvcFyAJ57KNpMmbH4gUvqvAShaFPMorntn8LXtfjwAgjZ3DX2DRj7dEjpXQg8EVUxVnaL33Zcc",
  "key42": "g1sUncuTo3cNm6UYtE9ysQXjLFpp1JoHUZdgM4D87H6n9BLf7PNdXXxXcQEJiqGnhv2VtiTxh3MSeHd8SwF5Ru9",
  "key43": "4wBA2jFxzGa5D27KKdVDscD5wLQvs8iAKcBwEjArygvqaKruLyc1coaBz2c8RVhcUvarYXX7YQ1BahYrtUjJPyUq"
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
