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
    "3WPDA4fHeQcRpwSEaXwXGMBXSgJC9UXT87B88MFcJMsGhAqYVYWDoddnJSuYYs1F5oM8ZAWdAHWpWGkaf4JWL5b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aiMYJLiUAjvHi2oqoR8CqnysynyteaFBMpQDdjbG3Ubd1EBzsGnmKp8Gfdwu9Gg4q63oNGERsXdrEkVF9LdZWFo",
  "key1": "2neysjGNTSGvqdKyUXryQZ3mN4wWajGCYyxLTp2xztydNSFt5abZTGxoURPv96sgAtEjTP3abqDqFvSPYZmfhG6r",
  "key2": "4tMyp5QFfSK3W4xt7XuAndcguM7pCrmgGrABP1VSpWumorhSafdiV9ndLVkU882X2iQac66dBEBRDJhrcm865MiH",
  "key3": "52MgC7sHRAqbjEjxq2SMfcMgHGBweuQbgMKdtowy6rntDqdsfhSvRTMvpRmjTcc799LrMp6DAqbXwTr9yyfCEzhV",
  "key4": "oTS19P8YG9LM61mQmXHNH3JZCk7zBtUzCRPvV6bg1E3Wik5nEwkQTqjzHX6Crx3LJAi6nmmQatdd5fTfG7RRhTw",
  "key5": "4q8cqR3cyWs9axbQ4SLvDLhYPxujCbV9Y7yPXnh4iR4FxxH3foeaivBtAiBN3mhtgV21GLsaT8ifiE4ucbWym8ME",
  "key6": "MjXTarPHvAhub2GF36yuwC1rxvVstuXNUtYCU19dqb7cPoz1ZdBkkXy5VxCtaBK28YNovVwgKoZhQe6Fkmsamj1",
  "key7": "5YHoi5i4HZjbTPbApw7nKpjNxu6bVVNeAp5fL8uxxLJVGsb8Ub8XwfrbovBceKgR46zr3qZhp3romKWpFn78vNWA",
  "key8": "3zujGB3y27XQuo6ZcJuY6o54QacMtScsegK5KfPgKpv1zgteDzw8z6SouHxY4atTaQ1CTfnvgRkVMtrPfAqufHCD",
  "key9": "49QrccLJdnSVv3hWXTejRdBgfZwiZkPtvctTbyCiWAt5WV1KDvz1HGd1q3turz6YFaVhXVqm1jsPwvfjBLU1b3dz",
  "key10": "4UYEqQA98gryVSyJfNeSfUYiVtByTicGZJo6R1r8TtzUJUXKCSK4pf7o1GEd7u5iCHdfwhUXCHzr68XSATVbM4tF",
  "key11": "4nabZBTH582sqdLJ6JdDTPoyVt5sJeiJtakwfHTzRZ55p8EYAYGvv4LZY9AASW3fT2UYbzeu4SyV7EfdUjUu8qdk",
  "key12": "3S2Gpi1SGBqchrvwjAP8DcVu6ACyCHYCx8ThMnCdgPkYhVXU3EgPqLiRPiDav9UcHLKKytcB5HCDDuGRYVb2KRAf",
  "key13": "2kVaGrSD2tKicLK3PKowDiV2Z6ngAhjsABZCottfHShKuVsfroh8zr1XV4rtXUFPWLFG52irNzohFgLdz2LYJqnm",
  "key14": "2Y4LNGR1fqTc4tyXXStBD767bPbPG3mf5g2NLuJ5AQvcYG6tCyxaA6D83TD8P9ziXKioJdJ3DVdTd2mz8b1Uan1Z",
  "key15": "7SpUm6F6pCL4cBwqxssB2zzHgSRdJCZCATL5GPoveW3sRUxTdnfKWuPuUa9KSKxvqT549Pv82xRJ6L95JYAjKqw",
  "key16": "5zPCjSqxqTbNQRipzNH8DW6LXgcaeD3z2Lzh6oZw9LmSiM56GmusUJWBXkAd3vZEug8xXwLDjkjxaaiCzgpjxSEo",
  "key17": "2zZ5oH2umfNS3PxTb1g7dc9p2wVm2X2A4jmLJQykhdWTj5tmiNpBUBFkFiBuHU59smUVsGiX777MFbDptpTNKQin",
  "key18": "XxR25jxSpv2puVJWpxh9KGPbtuki6HdcLe7jdTr1ScRGRJDRFSnpcxxqCkghcZzigkbvBnUQ3f7FCjn3oL8Vmta",
  "key19": "3KBeBtfQ2CKWpAm6UGhpSwJ7agTETakrXUzcdqLAEQTTxXndZiYeed3Bk2WXk8z5nmLmUHCWTFYernvmwstFRnGj",
  "key20": "3bCPYJGTwTK69F92pogFKxHz3NePh1mmf9xfkrWqzMM1gL9SgBX2cW6pjJ1SNpBujGetpo5mWfMNK1iuSUngUYKy",
  "key21": "4M6NaAjV6FxFAhheKub8DbijtcyUMxAUYVE7PJcUyL7y1hGV6Kvhp2v4br6DVnf9PkDqSNDsMSzNirSPnR6wmM6J",
  "key22": "3b85Ek51E2M86XJ52wUbYyYLNvtz5WELV9YzwhqCesusANjneEBnQT9ESMqHKqdeuyfXpxckMkYuBfAMFj8Dw9ea",
  "key23": "64WxL4d1aiB5t6ruaFYQVawEmJi2UmyGUEM8dZvcMwBwRsbXt9e79TYs4en22eT4R5norBy5Qjm7Jz1JFgVUNKLS",
  "key24": "4KitkBY4iB58vzENHnfrCEM5e8ayiBESD6SKED92T51ZAa6YCssnxXeCRS1r31SAJ9TAdT3s3qjha7QH2CRUGHsh",
  "key25": "2nWYuQo19X6UuWkdP1NTV7zPfV8bbQifraxLnhhnzDVKbkehgGvuQZ5tUhmw6djuYHBgyHFLXq3MhS3R23yeExvL",
  "key26": "3ud6McXZMHYha97nhtJVrQhQ3qikVoCde2vwJ79H9WyW6N46ykTi9FQSbmPEQ954Yeh5LAMv6aHjhv4RyUvSmbKY",
  "key27": "zY8xEqCwhEYuYjjHyiiBp1b9pJjU8qJ6KpD6GHSP3ryGxbm63kdeH8EB9LHaRbawyHWG6HspKLt9eLYzsvAATQt",
  "key28": "2FNXdMSmeUZ62EciZ59QXqbfRiGh66uWw8c2m4PWRSAi4MMg8x524i3X91Xncea4HaAh1ZBooq5pYcaJupT6vdzB",
  "key29": "rat1dfVfqymV4dZjqhYooAo36dnszBp9NJp97XG77XYZF9qgYiHs9EifLL9RSwjQTX2PRQHejXPEE29KWXGmi1h",
  "key30": "Av889pjYS6Hv2kn28RUGpY36FQaVPdcyqrZAp2HYRe2kwN9p6JdwFVcWYWmX1vRoPpwQBrKxv3aD2AtbhnrnPJ7",
  "key31": "5pJx4vBMgR7jD8sdKLUXkKNy6cYDmNLUiA7TK1YUx2nzNYwV9YotQhLiSS1GKqX1gq8rJfmubgHpYY6oetkARHmx",
  "key32": "5JxknzCT5AsoDgFYxsnU3VMcttYPTW8KZKff8Sz9UGj2mQsVMGqqf1HAhvjvmAufy6z1FoBDotSdctvf4JiZj3bq",
  "key33": "5rTs82dnsQpJk15RsY972nCwA3FryK9V2qDB21WpfQrn4EkoHWr6xNpZXD63DCEQDg6S3wvUwu52fLaKiup5WWoz",
  "key34": "G6QJWfSrekfP9Axjbau2t7S7XbqEnW2y4TJMMNXJZ765Whk6ACazd5vKL6BK964zHN9q22bS1eoSSAkC9mJj539",
  "key35": "37EDwbm2SMWxSRE57F9A6Xpkotbtr8yTLpijCinMvfu6Z4ymegXnZPNfNYtS3UoQk4P1X9jYRnj6nMjTLJ4395Sc",
  "key36": "4Tta4b2X4Nh8sU5CDqreeDQgywz6AhAGWpERPuneTrU7MJ3ys18DYvNfF59mE77eRr5gk7iFgkcwzPpMDxuxbFm6",
  "key37": "2HE7jFgC3cav1dEGjarni7GPzN4wWNRUTsP2qpdepLoxfQovraeU4zYF3yujsaCY9u98nYaGfJxzXk9sip4GYW5Z",
  "key38": "5b8o7bqiZZ57rFrViq2RGZiGyxKJNPqNKxNfMDr6aW5y9N71UczggWoU5CPAdTdGqVD1oGyfSKN5yxvCs1ykcJxJ",
  "key39": "2pJPULXq8o2vy7BRV3sioNxeQFXGhoZrzVScv9atn83NrK9ctbsqv6be6E3BMdDygEPsFtvAzCWaYZehkCqyPHsp",
  "key40": "4GCBRafx6LhFERvhaFyw2tChKYPceefqht995vP3xXc4tKSwaVn4URWiWa74fHC1j1mVztVUYSQcP5gJNFa2bgaZ"
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
