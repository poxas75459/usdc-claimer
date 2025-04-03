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
    "5bJPJKXEB64qHZn2TzzAHweXwijC4yoq1erxDyfT24pJQ72ndfBsNTFMoWFw1Uj64BSrQTp13hgs5qFb7dZZgcwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLY4up5G1s5nfXMecKQ4Bhcb3X7zUgeuPMf2hNE8eHhtXr8xfurgKS4voYrw8p4zv8v2wJyzmUNpc3t1biSQwoM",
  "key1": "2jVXbcdALK5mY4RGiHEEazikSFBMtnqbzdAtXPSuS7KrPydLLFDbg8NW5MD8GZb5Bh1XiWVBVuxLodu3y4BQYC6g",
  "key2": "4bBGfGf65ihyD3jsRqEj5cciUF1dwarkZ2Q8SbioXvbgY6wMqW6RQ7dG5Nt334j5txiBru3ZYS99HkU7a3PKK1Va",
  "key3": "5ERAgsBeyfDJEsW6GKSfxaRtN1KNjAyMG37hVDFE9xBqf25nt8nPDbAGDV5mkZdHayuUQ2djW96BdfW9LhXtM1Mc",
  "key4": "2q8MDtUaJ1gKP2dT9nAb5imFrn1Qd6FwujVh2ky8qeVFqAdbHqjbRsiJELL6Si646k2WoJac2nXMKWZSgcvDWTG3",
  "key5": "5S4kSBNRcDTP3wnyMkASWteo1xd762cyGYFSSoQRi4oYnP3mKuYMVs5UZjQS9xTtNUWTtwX5r8Eh4XW6dTeWWjVu",
  "key6": "5uHYbc83sLiBvBrJCHSuC3tVkEWh2Rkf4d3mzz7skY9KMvWPe4Kq8GMXTFKehFDmYTBdrTdZLpxqDEaYrf35mvHL",
  "key7": "2XxVWSZJdkmDHJ4HUPDLoAywmuhQkov1WkVKJG6TYDQDf4yvmDzKEvbHUNKXcxjHGhBDrBjmUVFUZYSyVcNrir1x",
  "key8": "2DnyTouPZfLXotWnqByAwf4C3kZpxpz6kwpAP6km8nrrhQa3YrDNYEKfmm6W3HfNKaPVjPzqBPsFUydRkU6A13G7",
  "key9": "2XgqkPghMkkxoPo77qvgn6WCw6jrwPKCZASJgp6X9qKippQNdZdMy56vBHHXQgMzVUCssFRZzit4T42fterrXPV4",
  "key10": "4wLHNU7rvYC8HuvDidfmc5giZVHN4KMaUZZE92v2dYNGVqPmhCCgAHgNzUNC1Pc8MaLBqViXxCwMdYixmU3RQMGa",
  "key11": "3QSzsgQqAYN4MfAPtpi4pRajcaPsxfybtAWqmiLsfgm6CiHT1g9MWgJ9eFUgv2G3wFnCjjJgbC3o7PAqteknSA7g",
  "key12": "2JShVSHp1T1p4vkisGGNoWWsCwB8emx7BCxch4iY9N3c3sQFWcXuuq61MgNXU5UHaBgY8MiZGH7noMSJekYNydLw",
  "key13": "5yLLPrjQ6rB94UabuMti1qwh9dK1jQALG2yaiq4bHePUvdLUPZmDx8R2HnqQyFBTxnyfSu54iiJKZvivQn3ioVSF",
  "key14": "32LL4fygv28FqyQadACoQo6qjzZkVFKNd4mUaJZYSVFmcxAwGHSABYYRmyDEGFtMJLKSZvU65Hvzqirxkq1231yV",
  "key15": "5we7gSG9QQWZZFL5mC7pGVJsZoDu5hxv2CEPiCYAh2xY7KubnYNMsPBQ9rKZrwR8yNhu17YuEfqDqbfBSw6QCcDz",
  "key16": "4vWy6YnBJkXu56kEU528cZXbHTWMjhhAnGBSPE62oPifQYVTP4HLkGHL4jifiBX2LrQUpiLdNQ6Xyfh6nfmKuQgf",
  "key17": "5Jk1SU7CsKeaekryWgWwKTZZoreL3fTcw4MUspbDW65h8VWMZXywnMeFU1bxJV6AHrEiMtbSsNoE3SnrNhvcEtj9",
  "key18": "jzGMXPKQvxRsbtkhuCMknc1W4QfLLaeHvYVfpLrQnaXTCMwthCMC6zyfsVttP2Bk4ebUTigg2KS3F94E5pdc8Hv",
  "key19": "2QxFCqLyQywkh7GjAVZiLTQ7tQT6BTeZt71aMJoRwy2Y1ZK2okx5b1m39n9QBf8CnW1qE6DfyFpwovG7pSqWTNkH",
  "key20": "3Nr63QVdccYwakN4dK8phQaXF4iZhqkURwNSD5s6kiF6dEDa1BqqfRnD7hGPvPiWbjmdMTeKbSfvCgpYb5tE8d1c",
  "key21": "5PBjScXUbY14xvhu5mXKhUkv7ZdGTtb3zszQUizXBiv8Ez38MMSnG6PFieJptFAMPHcCxkebqe5V3m2vMqRDi9pF",
  "key22": "498pwihbMTko9oawfZ4KUGgpdMZbLpo1wZRSZcVi7Li6T3gBy5kSAMCYJXsLmKng8beTrsXCpjdq7NntTu8R8Jkk",
  "key23": "65mW4YzRtiANc4h2mUJ7mCpw5BpNya1qwZSwCvFf311zTtiztcEsMEB4trhNUzQT2cvbQWCCRJHNgRoMteTbmePh",
  "key24": "32XPPaQtkE3KTL5mCWPG45Aap17pe6rjVteL1mtfN3e367E4NyTYTNcDMze9AbSVtm6tdKtmez76NmN9Bmu4qx65",
  "key25": "3qc76F5mz14dPkSUiqhL8VEtv7tixxFEMnGu2qP6qdNLSB6jMU1BksdNG8dXd2tQb3BYC5rbGz2bCGJWTNfArhFe",
  "key26": "4daNbMNMQu9WkonXBB7vjbE8EYj2JM2f5PfxPF1kj3tWFTWcd5qbr75Y6xrCFSRjfABuzAdjvmzPwtfvdiyrXj3A",
  "key27": "4S5Wh6V2UffY1UqGQkWr4QcmosKfqtyzm9qHh9AikiasxjdSFmZqfnPKcgUeCREP4z3XmiUotoUrmaS6JA6QtFti",
  "key28": "5UjpcTzjEnb9anUnbU78DV3GXrMbdCGjpsVVR3k9m17gzxzkQVT8uKJE8ZR7A3h711q6SVj8wEQ8FKxffWjwpqok",
  "key29": "2F2kyrPLxJQ77MLedHcWLPn8NXkBjRoxuZNhq6Jg2M7c3pqCPLyyCVnwXsNham81c6KHpwakL4krHpG2acQLkzxr",
  "key30": "BgvjsmX2CHDWs2TJSU7nrHoRKFh1q8PuPjBF32yJpFd9RozARkHnUK6UdXQPYnKPttc87NRe3YksJeW191t3xj8"
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
