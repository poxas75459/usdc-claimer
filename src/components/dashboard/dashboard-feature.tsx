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
    "3ybSJ4Kre7ymYUbwYfidXZJzSXpq6rKTZ6m4DoHwDqbQqqFt5K8wxEJUctPRRJjLgajB2epgp1Rd6aUuV9ALhw9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W1UjtrAg5RvgN528kyf9LnHVrWZDiVcAFBicCdXhkNFs4DDWyv77F3JpAieR5VicJSjxeBSRECXGnHPrRGUtVeo",
  "key1": "4hWsG3nqwM8nSL5Y8vPfLiktVDQvmAXzs9ZugK56UHCXkKZMvD5VGG51RL68C4i4XSaw5ijsWZRQ4cfNHfot6tWc",
  "key2": "3vbC7sUsXv4TCr5zMCeR5rLwvmVzrQTVsidTUfZoHhpFMHWDJ9LiVYPJXcbzaVoAVj2KSNEoibFCM4WaxfFMWFnj",
  "key3": "3KDDguSb1gn5PNXt99oUpWbLfQ3fbF91mmh9ncmMn2zpas8EX45jAZy6PZmznAvo1m2JLxZ1c8dUgnhG9XZ6vLo",
  "key4": "5pp3zmcT8GMhxjP7oCFGxEoM6dQ8BjJhnXfYaKxGzYPAezwGbLRNuiqpkFH8t2Gpp8rgvkxnFNvn9FmfLEcND7KH",
  "key5": "2tAWnAT5CkBvCU6SYCUtLedCJ1PvgpDXw1cpkHVA2YqP47yUJs8LMTgc2Nf6onQQe4qiWWZzJgQ7LJG6ZH36PBAd",
  "key6": "2N6K6eF7CcxbjpEbgPaXMnLaLF4fM24cV3iCjhfQNyA57GW8vLkZfCC8MeBLnK7TWe9ANDVE4QVK3qmn1b9CAqvQ",
  "key7": "2FocxJDkwPTafvJoPFoHRbaJTb24n1J8QZFqfVR8aFeyV8L5QHy9KgthCt13cGJqLgCeV8ymZ9cRbwyGRfZDyENS",
  "key8": "4CPj6cCKDJZd1d2LovoYs1KKyzDoN1KaFCR8gDsV4VydLSh1gkjpYC8sMvznCVF4EMt3GLHPakSCfNeybo1mxfPd",
  "key9": "2UMDxcqfeq237zYy81drpLwSqQEc7kSKXRuvy6cJrBqYkFXyhRedyE1NiuZe2UzF3nn9VJnZ4kLbzKbnAM6QM7kJ",
  "key10": "3oJY5MuCg28Srsu1rFDHsCQwJSdvv21gbFKVuLXDTzTmzp2YxYNe6BR8ptdURwETRTn45qrHkbLkbh5nzyhfY5AM",
  "key11": "41uQSyvFCzVLT7Zr1wrYw6MifdRB6Q1tFbAV7bJvHT9nCSdr2zJFQKF1m6BtSRzh1u4fjE8X7peWnPYJEeBbkgsi",
  "key12": "5aFKCKAEKtntYy2ccYnk6hcYcqGNQKbcbQzhevEpBZcunxzTBpKfdxZZ4BjMZr5HTmYd7vY3aV4sLwcUp7mfGtq6",
  "key13": "3SiLj7aJk1RTbgwuwUQSditCNGnKzrXacmgtP4sipESwFpS9PpHTmcmZnezi9jFBkXMVXgZskaBrognmBDjvBYEx",
  "key14": "3rXAHdNVTXf5y8PAAk3QB2TowEtu7Mm1K9qT66t6YsaSZ3N9hPiTn6mmscH6CmaN7T44Fi5Y6ZKX3391XNHZffv",
  "key15": "5zxwM6YBwakaVeoBLAH9dfoKHujjUtGNoTtVhKRgie4NgTCWPaXwivYYET5m794Zvsf6CGa65VzSfkbnhoEFZt86",
  "key16": "4quJJXDMdgzij2CMJMFC8tATMHU7YRsGGs2WDgZRpg48RCV9mjkdzpF2GcTiyJ7Mm8HyMTgj8pB5Z5uWPmbKUJRY",
  "key17": "4PdijSkvoE6Fukzwr1prjeTVh9zTtRv3sKcGT8sDX7J5d1LHrV8u98zEjADjGPANNmF8e14TPaAGjy4fUvCoz9vT",
  "key18": "4cVV1Nx6L44Zr6nEadpJZmnrg3URK23kraUc27mxywUHuzyum9K6Avvu1B9QZMYqkEQ9tgTMF1BjicH2ALa2nsCc",
  "key19": "5Zvgd17BMW5om1Sp4YGjZXVkNWFXpz4HJZ415uZJHczWadWuxGJnUdHw8FdyiorEqX4TnTZ6E1kXEVDeXGbht9hg",
  "key20": "3ATWeysrzx3DNg88NAgKB35JLAf9cveFvq1Pu1wKa8JWv7XXGMEkudKuoDRHgAkWj93A114XJa36sGS11iEVCkLx",
  "key21": "4dDTaRVUpU33ezQ5vyWaEJYuHV1VPvF8fY8FTVeNHTNmEsy8BFpqdD9SrJU6YFUtedYeJ1QjzUf3URLgkAVpMLmC",
  "key22": "54nxgFaT8r91fzwGUrZkRasYu9d7wx7ZpjZwhGi9BP4wTSRwDvHfHN9Cs2pyx6YQzTY2BuYW6mcFXQrvSwtH5S6c",
  "key23": "5X9wKSUQbHqasDxAjLWAeWuq1H3ji7mKSr1d9ED8c732sa3cKCznQRuyVYbkoG9ct5kKWcMSkkX1EkNkMiUrvEkg",
  "key24": "3LaUnYGY1wNoPqrvAs7JCQ5P9rbvGnNrJjyFcdEfFNX3E8p4P7bHgLJAHTnQXcMk2sHevdRBX71NQwkRNaxtAse9",
  "key25": "3FrMA69k8d3XEHidQQAdSeGnUFFdz7rQsDcDnsaYCCwzDC9iPkbgP7GQxyiCyCxq6Kp3EjFzMD8pEYw29sRzMx9B",
  "key26": "UuYv5Rdtssk9gcg6XJ9L32zmwTVSiTdag9SwkZMEskqZBN2KMY7ei65Rxekgd4Y49UfPyLTnEHsaZyKLyS8p7yC",
  "key27": "33J37JRXXp42AWoPS3ZEZwKMntsbLdyQx1XfBeDNM73LJDzKAE4WZVdhZJkBeD77N9Y5YifvrrgycL3o4XvV3qre",
  "key28": "dYRQoGdmm2MGTb8EW8jsYVCkWp8yXdWhzwLpFq8aZdPGyj6kDPPJKFoNkxYjUKQ6ycdK3mUpWhZcMUpguEWcNcc",
  "key29": "Tpxst13SuPrjbczMm1VnHSTbXRRFYd3NazhcdARJBrvLdTcZtXF7ijGzPRFUt5q45wEkHzqGVeeyYCdADFi12so",
  "key30": "373HyG7b8w5rk4KxT7Se27rsdQHyMAuhYVnS6g4P9Ff3qX65Axnjxf6gA1JREyABnucWKKYJajcuPEd7PosyDxKu",
  "key31": "3VajSJehiL2TaoF3o4MUUpw2yNzUaz3MRQycS7iNtpeY4pDfFiE7Zf8kcHi8ZiaDmyBP1pbAXrVPvgRDBZJdY2We",
  "key32": "4va43JnDrGvY5WBYnkogSU9AtsC16DtWECWEVGUQ354vuQCJ4W2S4nVK91zh1vQ8woZr1xrZxMaS7yLPis7SGiWA",
  "key33": "4ygcHGqjNmSRhohBfvGRevAcYXHH2ZKaEQHKs8DEmxgbrGvS6mqpyg4CeKLVkCTxq4LmiXbogbKeGigATD9EZG5c",
  "key34": "5wLeT3S8LpE5aUGYeuF99fquYhZ7WZiae51jQUNhuNFHPmW1yvH12kyQaoXWPUGTdMFesYUxgWn1a1edKpNcXDA1",
  "key35": "5rCwxRZCKyp55SPjccdXVvhAz9ZCrW1uBfetgWxhdDNDwxNeivQ8jh34iFm4cNTGpyYhL3xFke5RoRR4kKVcHMJj",
  "key36": "5DFCqoSbdSyvD2b7kNMK2owatDuKzqVMkarkwLaXGVXJJcq5hLrwLGEfg4TSUc27xmpBvdpUHHC9jZWSRrW4PxVQ",
  "key37": "5LatqdXqsUuw8Lb4ZB2xu1qGnwre1BNEtP37CeGDNpPtofSiWeLUF6Z84Zm25oSRWX6tFP8mqWQg94ikdBwxjfT5",
  "key38": "3W4tqpCbTW3ieJG2iAQPsVYxy2M3xsMXPFuL9YNE5oFF9acfSJ1EfspxrpUJib4hLyS8BxbRryTK4fqvNNAR4Pz4",
  "key39": "2eEhEG9exyjn8kqahGHM2r6kmf3vdFaoL2ExxqHK4W96ZeHksv6cPbVp641ezQvyS2ewdtTHFhbq7hA6Yspg65PG",
  "key40": "EivBzzzeyjYW3qUopAt369ri9ZJtyLPLC5k3L3nGzgDSDmNS6bYuHDcsnbNqhr5LWDgbVGhF8VpVkQHEmhLb8z6",
  "key41": "4bvNGTed4fjJ6ddKzQTuwGPiHw3Qf7cF9WFgbyiaYMF5A3cCQLwW8g74kjW4Sb4VMBCxGdNTXhZyKpkep5VzrLT6",
  "key42": "4RpSybBcKMuEXd5H4UQMkqcTjtNdUZJyqEbKUZaCfEppk2rw4hH2fHmPgNJUFn3PAEaapTKwyP9g3Kx8Te6CnBHN",
  "key43": "BfQ3irWn2EZWxsay3SQhH42VizHoZJjrsdywjxmwfGZKnsK2tdSnzh7o5yMHX82KvudZ8wivvBxCEEkRqM1UP84",
  "key44": "4UC3SXJeZSqHtbEF3WaxazsSnTGqZtSaFVUMZEZb76Vn4MqAFBATGnoFvkyp1VzPoYRhhzzQXT2Lf7niDDtDGLiZ",
  "key45": "2NkRaSFsNKAYi4qHeEuSgcHBeSXXoAVrVsbsvQq9f1jf8nuT3eXYum8Zokxxzzv6cLGgm43Z7BwVFmNZCeGUCuP1",
  "key46": "3QiuGVsACvbqwtxYc4CeDiXm13V38PUS9X9MtUMG4PZS8UVRoR3WLPaCCnVeaLVHLd3mCtDtxMZhP6QA1wKmrBrY",
  "key47": "5Vb6ZM9LfxsRBDn6icxHkwvxd25EoJ1WArC4WhR8nQT7jiZCh8iAATtig6sYPuDvNfu8cfSdXsSc7smnWtGVsfcL"
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
