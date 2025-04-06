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
    "23XnUz7iGt637uDP65CHQtMFsMzSmGQzP6oaeCWdrHSKETWvqNgr2u2udFBLX4jeKGDjuW9Tfo3YWiXMF4sF9NQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQrw46Rnv7rekKmprW2ddn72cJHtzyf2c4nASdg9BugwG66TPXdmoH8qHA9woUa6nkTGsWpps77oJkGi9Z4R9cF",
  "key1": "3RhHv89VNR32vRxYKgSoVyeapXijYRYs1YEGbLM6ZZRr8smDNuW2fpwwy5XT8TBSf5HqTyEGsahNzfbrRiJ9vweK",
  "key2": "4swBnfiASkQYE95crgHdjGo8WWqpw3Av4RspgAH88mcxU1G3g7DRQ7qWtAbXaScC9E7aSx646b4XdRt7vAoatLaL",
  "key3": "3FmigY8FePQHtcoT5FESqAjg9SgTwUQnxGbVN319ys7ReAvVHt7xgyARMXa8MuPMTyZpzThyMSFswiHkmTv7oZz8",
  "key4": "32FR9pJiqqK7wDUNxLzsd5UC4RDLkyBQmgAwbjmbFeH6pdgxoNrXPau1SEGiMeLFxRhXtgRasXtQPz2yKVhvVBCQ",
  "key5": "5SnJ8sWbjU1kvYFzXbPhEtxRqNsSzV9Ga1Ld337ippPeWZWuYaL8YSpVhRwyq1SAGuJPCbsF4ZfAtvyXFibwZVPt",
  "key6": "3GsKxNdat4CpFeMDwcLqo3GrsKFHLM4SGcjHbqpntgkHsfkchRgcMpwQygKiamtu3L4XYPgUJ3AVsTpK3VBS9qVe",
  "key7": "5xMqoULU1MN3cFtPXzBXbH5LfRnoMU6VrGsqiqwFnStbY53wSjfMtybaQToaV7RJGzrAvMXJT4YF25RcPwt4xBr1",
  "key8": "3X6Q1VsYhjebHbbAkS57m2j14uzzHMrNrHeFeHnuYz2FrvtDirMCb131z5FuYhy3do649CR7FNu28v66mYdxzpam",
  "key9": "sYbXLmKTH5cs1oHspeuJeNCg8A8FEzjhNswT74xCjL9NkPbWoyBbno74B2WeMR7NBz8h5ButujYBnJrrwazdZTf",
  "key10": "5LUGhCVwQePUywboYJsKEScSKnfmg2uDau15rkfqMy8qqLaA6yUZ94M3fCCchzSb6ZDacsZZCAzGP7MqswntyKEp",
  "key11": "4ddawVdxtWdPdefxsViHQRmhmdULRrcxH9NkXAhYjKQtAPi9i919FuSgLGkcYph6g5fqkTR8CB9dF1riD9vymruV",
  "key12": "5BXa8qUuha2ZxvFnpfNkcJyFP7sfVAFnEXwohswHArcpE88z7bNvAhDA3m96VH9NLX7m3xUD2RkogAez4AGXLzfo",
  "key13": "3czm6f1NiabeA7ChfMyUtN4VAa4w8BBRN8gLbUvNLrK3VhPKc7qmPHywjREQc3Aad26nq7KT4ftBCh9ot5LxDMHL",
  "key14": "64z7FVy97TBzZAPqxwK9QoZxnVBq4hB4DvSNJzMrbFWjhFifBuWgGxgmmqQrvfaTjw1GmpcSMfs9dFVRZXv28ciK",
  "key15": "3FbSibqtMMenYvFLfq6JNkwVsCeYQpgFsjHfY3y2aB68ZFFrRcRcu1qHWr56ygRYw6HYgDm8P3mwyDY6uwmGRYeW",
  "key16": "4AR82rKqJiPVoEe5pNRiBDTRio2geJE1VpRaLKqTBDED8aSceYUqDFpoCCDPcGBbYLVNy8c8DHNjBTfNs7QTtW6a",
  "key17": "4tEyxzSHPEAKQZjqse4mZ3MW7pACfSAU6xDVHL2fBRULipqZuHXZzdhh6tZqMeUkQvER7kjHXUj6sm4DzwXLBuYK",
  "key18": "52D5RZhDxmpTJkVhNECTTK7MSfyFUJaMLDtKmpPYCEgFm2vfckL3MEazU6aSaK6wQvM9yZgHk9RNTyu4mQa9wLe4",
  "key19": "KrR97Wg7cvVwFhboNETBAzmq7zcg1DFk1jvq7qhh3GeqAQU41qBSo1XY4xqgDG4VzVS5pqPWuHGWC74RdcNUqQZ",
  "key20": "5jCFeksFfcZsUM1m88bFyFQDVNcwYdX8yhnNbyp4kZfASumLgwZEGjfdGpRLyB1j9QBMPGbx4ZhgreCVWRxWaHkN",
  "key21": "maFaPjSSdqDZeBnMmEPkdgT8NDKNPGzXXqL3xdpxfzfFdckzPuHGKA95Zj89ogq1S5oufSrKKwudU5mxiwBWGnE",
  "key22": "4b48t6ndEsDkoAKLxMEhW9xwXe8tgBbBCUx6XFePDiaowVKGAwWgF3djMYQCDDQb8Y3xATuQN58TS4nGoYqd15pF",
  "key23": "3ELHLPByCrtHipRx2vwYTzoTYsqXwiWku7zUP8Rw4vAz16Dua7pwccmWBEMtRwahufqnus8NhUw6U2Wh8wwGoFv3",
  "key24": "4fNMbiAatLpoRNssFs21mByMugDcGRFB87LTvQt6g3qZYMqa6RNmXMKhCQWz5NAPCxAqUyiXb9TrpxGE2iEnihSR",
  "key25": "4tQBtjiqPxNwXbKeauT4K7X8E7DrC4wV9GN9mXZudHPC1eR47jt8s6jASb9vcNArEbGhfUWYGAwwtPFJ4bDiHTZ2",
  "key26": "2Lo1SiakeW94v3H8n7ifda2VKz1QVwQS1ZSqwZkXGHwCJRGr7sWcpTVERd5XZDvvJ1e2iUArPCLiJFGoyeXUk65X",
  "key27": "2KFK7rdZSWpnog9xbLvB5hJ62FGRdBuYDGCRo6bwepQbsWAGKkwFLgcqVYE5GDm7yQw6Wa45m6imCLtEmejESVqB",
  "key28": "5n1V6WXT39m12te9xqYvV3HjHf6KpUqZ3VxRmXQLXdmRFakXPXe3VGPMP1J6pYkuWoD6FEFya98LKwZnUMyChad2",
  "key29": "4bERz9GJDv9gsDXZdqZcUo2SFUgG3SGL5fC5RDoZgC4ru4zYfJnsNDBCKFQ34NCQkBDgfag96p3vAirsgDASG3Aj",
  "key30": "vazFTH2oVo9bYBoQqV5jtzwzuMpaL8QjFZ61JCNvj9YVcoYwR4ZauvoZYcwEZXDGZUxAp9CFNuh5pTK88f6nNfp",
  "key31": "5XNBsTZZP7zzZ1q7CV1JtkJdaPW3nsXQAu14a3oHQEEw1zVBxV6F8KgvArpSxFHrZ14H7Vc49FXqKLw5444ai1Zs",
  "key32": "2HjZUBtJt3P6zafkyT4hKgBv6P9JyC27ZSZx8EFqbu2aFVxQJEa2FD9HVYh6ks7ppjbUtNsk2wd4tmXdsNwkZQaY",
  "key33": "4pEHuwtfBNSNqRZBMXHXqFqjMiikQYMAzxhgwDHQpK4wmwbXbxcLnVDpcL15tSTSg5SFyvTrnyrNmH5z2McP8Cvt",
  "key34": "eNk3ZRUqpjfELUHp4xJELSoEMwPcxgGnCccuG3C1RjJCKSbUZCXkBC6TsB37KxpMdKJCkFzcbrd3QTSocSCSvRh",
  "key35": "2WRCo2FonViLVkc2GxuKrMBX3LD39xJBymzDNQukQbCrbcYEHCDQKrVFvRiNG2ZdPtYeNK6TrirhLMXViEemi3uN",
  "key36": "3TvuMW6Yw6QV71zXcPosGZUe6t1LaPxmzzVM5FWqmjhKhd8uzx3K4bkACw5Stz2A3sGJYx5DrGVK7Cm6ouL5ABFM",
  "key37": "2ab6My9N9aEbzNUoTpNGJ7WfaGsa8NSDaZNpmL2LzMroBu59zpN69KwtVP4JYq4mn3xuBHp7kXgHpgnsviibxQ8e",
  "key38": "3k5WZQ2H7ZwA2bvq24h8GE9EuNdgChbrgfDDG8fmUYu3rYqqsaDWdBS4RSCC9YfUzp1beuw3Btz7R78HhBFX1TAd",
  "key39": "5WjwBmSkMPndQrnRf1q1Pv1zuHwBL8cE5yZvH89kYDV83CDTUzUpEavNyxJ7xPxGmRJAgUfSzKuWB6qZKwSUpqfC",
  "key40": "293HAfRCiT9k4g9WJWP2gk74zKon8emennaK5uRBCm9X4dqTjZm1iMsvJPmS1CXyW8sJD6kHRNt469fejbpPuxMa"
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
