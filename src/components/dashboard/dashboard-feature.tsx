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
    "4ijmH84Jh5NX2RDMCoMGprSrXg3rutR4pGMUF6SyPDS79wo74361WZ1x8oxdx4yAFWGwQ8nbCRHCSEj6rvDWbmT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwUzookXzNqWJEKRqWN5fgUVCiSJsnz6HnrL3aDUPjW5bQx3eSaSCieYFb4K175b9bBrWSrKdgVV76Y55j4AZ7a",
  "key1": "35QKDwt64Tx7vSnKTUPY1T1iD6MB1VTFk5n81ZA96w7ZXwt6dRPdfCiR8BWdzhLzAsYKeu3dGmPkgCzeJLvfXS9m",
  "key2": "56r4njPSWgGbSpzpqgf96gffyYEVhQGLXcuZqZGpXbT9ttQEdaXzvxKSLwbrRJQ3Hz6NUXAbAoTbwqgoo3H9RUNk",
  "key3": "5ERRYkSq7ECtDzhtpse8X9sovjBgQz5JEzdZAEoEKHXxhUaT8RzumpzqzaNHZqRKPgutLAuqNKrCVm9odQ1E76Jp",
  "key4": "2fuHHeqHncbDHBNQywDv9qmBjBq7k6p6U5AmbuQa17KZaWHUjj7Ai5Q9bH7kRLmBLVG4c9Zzj5yD4usqBSfR9Wht",
  "key5": "3Sfq3bNt9atpp5Nk31Xugzi2M7ajKc4YodCsetkwo3wRCEMqae81ppTPzUuduuZ2qLWreu7ZkpqjxRKZeMjpiXta",
  "key6": "3oiW5n6mDAqwjVhewmyPAVm3mCgKbSgkKcNYwwqPeidzGa6pmwPG2ykW9KWwJYZy3eqMC8tA2Hqz7QkcYyy7EvXV",
  "key7": "42YU2EsmMogaQWtNsrQohVKsxTgdqTx3Ut7JfH55RGYjpXPRJreNHmAVyKiXSo9MNFmTtmaexz6Ro3rVcUURntDF",
  "key8": "21NGNCXopqYMq19tZUfCW84dfE8iVo6KBQ68umsNRjk9yuVtP7KKXsSxUtjeyFg2PZjE2WBK6Gto4e92P6ThXVDQ",
  "key9": "5FbfnKBrTpofu9NZev1os3egKi7amyGJovuvteBEq3niQvuaoJwA839jAku6scuHd2JDpVnaEH5Lr5q5ArDpbTm4",
  "key10": "3BdRBkCkXRQEDoHsacnm7ZVtPdvoyQt7FkzLVBTCkZPDtdTcZ7XExZh62tvZ8HBNQ9SyEC9igcf8SpbWtiRpD5uL",
  "key11": "3v3XXWZEY4x1GPBMSAcpXkh5i2nq4H5Dy92RE7Y7evxbdUF729qL1d26FP1y1znqXcNpwDrna6aFKAGKbjBgPVBt",
  "key12": "46KJ5HFoToAWyNG7N4GPmikCof1W7JKHoaN7ZUPUkSJQxPZLR3emwnYS8reyHBbgg2tYp65X4UoCLscSWZGCGBDt",
  "key13": "5wQMeXeJgqBaz5Ezs8cP7BkLzDv84cirEEPzsCKYiBRP9VMcwXDBgPD16Wugxvdvyeooibt8WCmpoyW8kEeUQe3W",
  "key14": "3Y68T1PGHmFPQtrTWUXz1iq1fCZBt7zGeiMgGcJmkNPcKurWZRnAMgMhLVp16JeJvMhH9oL1fJr2oiyMrmZzNVKG",
  "key15": "5DWgbX9GTamcvWZZvzv19zWedZgRyExvu6YFptK6wxwJSdpkbGXvVWTxvvAmo3WHM2aXYLxEw2Bs2tgwM8ChMfzL",
  "key16": "2SPvf8fijst3G9dYo4pbn7dkHFqN76vUKLeaMinYdDn438oCDWt7YUn9AxXoXT3oxBUjFW8sqEaJhc5scd2He46o",
  "key17": "55rj42mK3msW4UC5neVEX2HSAdFjkfn2HFR3TG2W7hgqFmgUSfh1BFDvYc59jiEHJpohovY1yVRkWf7HyLaegsjW",
  "key18": "2xpXThvcei6LHNJfmTRzbQjMw8A2TtzLbGoitr5usjfCSjSKgctNUGyXrJVrjyC7Zu5D8bMNLFxFmu7TP8RyJHME",
  "key19": "5KVTHaZfoqgPYekN6eEeqSF139qYga6ebWijAXRKceEjLBbdKDGewAvqeDuhim45SPW9EeZiXBkRPe84wS8r8vp1",
  "key20": "RRXYeBSJJEmBJuwn4t9JmsRWpKQh4UKg4uAfJBp2VhamAzfKjDX3rdogxaUzLoEkXkXmxTWdVLrBV4PsobpgvbP",
  "key21": "42APwDQRsG2jo6J12vFt6T5vWLhydygsUCP5C62ePkhcuSW5XEufB4vhHKAubMUB6wjzWmcH7bp3L6ZgmPiv9yQR",
  "key22": "4HPxMzS3UUcF5mMbyJ7gkBg8NZzqwRGXiZhT8p4chXNRuRrAoJME5nrGpXG43m2u1tsU42rGyr2KABrLbuJXbMTy",
  "key23": "32Hh3nhDpe8gkWQRuEX2kCrVZoHwPuButnxsSCwmwkDosjs35iudszwVTwZSzUdNyxtqHQagriMiKv1fqWT5fvJA",
  "key24": "52hC7CLU52o6hDcmeQsEsuY7WYyg1BxmM16n9KLL25fyepbbxY8B6zP39nzPGuK8Y6YXwh56hf9ijUSphL9QAN2i",
  "key25": "3RtXUXNLN8U4qt6t1Z3uACXwdrMEHFjXqNuZtbSqQJsYrRpx4LkVfkuVyBYpYtzJKguwwsGp5jpop523bjQHHZZo",
  "key26": "4MrkcMerT5NT2vWw585NRHsFX4Kubc3fqA3xh2dw8P6ieQfFgw62VbZCWc1LC62nSMnmQ5Nz7Y6CGZ9pnrBXusbY",
  "key27": "rG5cdtLWi3nRUt9jsbGkV1T1YALKH7cH3bWBG8get6ssptyuCdvYoVaCphr9kY3cstKXnnfLqeiDzhw1HkTTkpe",
  "key28": "5BM5ZPUJeuF8ezUittyacxaWZZwDGuJeQEL7uFEebwaURpmx6xcwE2AhbQokG3YnrNDEzw3VJP37hc67wk4VGJu9",
  "key29": "2TUZHWdzpJq2Jxr5bWRJUYVwpo7yCkWYGxuufhWCgGB3hEouqLZDPykEgzipDCgFu4apqS6jTvcxeMMZ9GX2vPft",
  "key30": "grbzPn4Xv1JhozBrMY8W88tQqU9UmaLF7pRT8JXnVpgNZw7Kik44WP7rYMFM2B6ccSLW2mmPFpv53z5R7benQov",
  "key31": "5QJU779rUv1AGEkW7xyo9QHJqSB7KHbecgmr4cLN4gAJsA4q9bErfZZuWfEUZqmREJN7wAbYYk1NcXUgtmuB6wdF",
  "key32": "2yGFsZmg2WMaXngEgmCRNuqxRhmo35uMW95fK5XCPbvTk4ZKuZXbPaHPXj2nvY6bgJLr7CWXzkTC7mq4mmmFb8L6",
  "key33": "KdrsPeMcTroD9WNuvxenFVX2x2rfR2PVYGEE4PbdkvQMUkSXk1ZLeVAGggDhDgEHFaMTTYdYxiDA69Kx5vniirz",
  "key34": "3WptDxdko3X6sHmtxDe775xedBtRDnbE9XhdWtyVxd32D3bTdGLpSrzgLi8Rdk2vM3Nv94P1CsmpTcUxwyhWyF8N",
  "key35": "52jomxxYMJN6ji9o8WqSkxSkborWLhPq2RuWwBKH8Fo2j16ADdGsVG8GybPGjcEnj3Ke1pKBpdHfZchmSeYEENSD",
  "key36": "5QLoVjQYsLnUQoTUXAyhfFqfy5ZYSMSzrihU55KcGSuzejoyevqKMwzB5yhw5xkkzqPokjLT4eY1ihFwhsrKAGTx",
  "key37": "2JjiYHweRvtkuRswws2z1nXPynmTzBGnou8WAv82ZfiNCPC5mMPxpZiijxUqzqJM6GVhovaPG3fB36hmLFXHnz1e",
  "key38": "5nHmgE3fPtAbU3qEhNRoczotNpqHTjCrEGSHDacT3fq7X8wHNcCzLXwMXCcpXayCrtNTRmAZLpSk8BT7usw6JWEq",
  "key39": "vGppkAAigEvUCBP9zLzfAXd3tGbHB8Sh2tJHrUBk8eDLuzqzoX9ogFLYsBnXax547NqTmia1hXoncsyPt2tRobo",
  "key40": "46nvF62jcYwSB6mR6bkURmwAJzE59ErFYygfYecNZVD6LQUScz3CUsEPjTYZMdFvZzw7K28jytchVz3SXd3b9vCj",
  "key41": "Hbi6doKDqKHy5MsTBqNRo2LtUg7eUrgE1wL1ZMyPRHbpecHQ9WxjSGsjxUBKuaDSnC93NfYoEbSvFSaSvTe5Mfm",
  "key42": "zNZxXonkNrNCotDUqzYggi6T7wugt4JuP6m2db6DN5GTFYGB6BUNbRXywp7rrS2fnc5VggwR54csbooNFcpj6Xp",
  "key43": "3CsejBsskDdwgR9XzLFxkvYajuMxKFvz3xGCRdhkgPYicNX26w3ugNaJRpvv8KU41yS1BxKX3Qvwgv9M76mX7z1s",
  "key44": "2PkxKqvSEQoWnf69FPdajFK8UWcdBL8os2SrvhQNs2Gx3TxgE8NkHRyzzNiL85uTZ8qkAVmY8DZn4jCQuu1aauCL",
  "key45": "3KnXKKHUwGdyDM7ZqbGTWjhgWi7Hp69SwSo7Ar6mYh5PAfNeWtS3KSATyfXu4AYq6UP64tFzKEP8PXj8vUu3qKfj",
  "key46": "4K8eTQoixipoQBSHuFzi4MMsWpfv4VRrSMdaYX2NPVC7QkpNden6cFN98rcfmnpvwn1RabGM4yH8M38aTpJPX2mn",
  "key47": "CvkZJbD8NpWWv5365M9ETv3rvmmwZK5Vk3iEDv4GML1u7vxJEwrsY8C9VR4bYnb3dBZfpiu5nvB51mKxrr6oa93",
  "key48": "5mrWBgWDH54LbasW3w5XXBVyFv2K9ykzsDkpYJ2YmhNTtKvjdWjd2QtYDscFv8RvpWj46kjzwvDqYc3caui6cdJh"
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
