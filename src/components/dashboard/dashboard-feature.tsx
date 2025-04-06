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
    "3jfCAoLvQBf3o55iHzRdmGEeFVLejrJrueABUAEyVTXnquXS1iFKxA23eFVbRkDZ5xT4sNBXtskEnearoLwGhKmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzwfzbwW9gtiyBWWED3CeB8cr6eSLFBYGHXVKruogBC8UTFoEstSqdv8f45XDB8tatWqaMekLoDeEcjik4pqbFx",
  "key1": "7dJnuGfJGkRg76vi38wagt9WZ2LVA3j2MGoReiRSQUraXekT9MBNckRcndLMoXnQJwUrePT5VF8shRG4B9djoHb",
  "key2": "DpFFYJ8SwKcdjjKGzLjCB24BzGtZEuf6mkprzNjmVhHQo7jt58morEBSenLaejJZ7ZyoyJJVWnWhrMv1w9u4RDD",
  "key3": "TMvjtrSxAhkt5c7VWFTJCwFgAVeXUX2AURBTdHxuF5uZCCwCe7EXbLDnw2WWZjRdvTYx4V6H5sbkiqSguoQrxsQ",
  "key4": "3DPQjVTjbxfbjqsJEt8icjmsJejeYKR2MHfhBcWtNiZoGKQpH6zBsXXn3Zj9VEgtwgWptrLFeFG26btoxVe27fCN",
  "key5": "5KjxsqSde7shR23ksQ3sz2ub3VjQXptDMcTPZTkBiWqnr4jNcMb4Kc8PqoWaL2QqaVWRyHMyW4i8qnD66BmateuC",
  "key6": "2KenxBGoTYdCQK9JGdnYQeDfSBmAYDdXuqMF3J699fsB7i84nVYECdcp4H7eSSqv4CczfdKVcYcCpUqUHXSeqcVL",
  "key7": "awxDuHNiF64Zf9b8q58YypUYsksER6vRUSUypQCc9PNCg2udTSQ6SEQz63JZsTjivnx5s4nRAiBxmhg9ZNNJhiz",
  "key8": "5jqhkWkKeirKKhdbxdoXQLkkMZJYwe7A5vE7mhKMgZnx3CGoGw8NDavLBmtQaqFdoqVk4EfuuyC45urvdMtNvf51",
  "key9": "N5kPsgjyKNgehNTBZphQG5NEukZ7p7LHySadKrXG2D4LSuHeMWKs9SWGrvsKK6nKDPzjzm5puxwuTkqXFwGDABB",
  "key10": "3hu6d9LY3unyDHXuEHguBBPfudYi9ccFBRvT3qonJYBMQrnNYNRo2dfRY3KHpZGcSqzQEyhFrw5kfsqFaxUSKJrk",
  "key11": "2F4sbTJkm1EKZzrZNbPLnRFDnoEJMQvo1CUCfhQJcoegMfuB4iy4JqAQteeFRCSEw6BQEdKiJMCXFoE6HX2DVcqr",
  "key12": "4FfZaPDAxGywdpoTLXzPr37qg4fYBsytXULJPe8w8B8N2jmTYDxtzh2za49LzromwaxSfX8xydBdHZVdk8msBAUD",
  "key13": "5gs34Prn4ty4viUCihZWYTA93Ufud5zBooPP3kHW2EznvhdorLfUDi1d3L13AAZQxkRPZoA2im6LCSqfPYYiU7jF",
  "key14": "k4SL8XoPRQYz38opc5eA8o4RC9HLUG8FBs4m6EZwAFy7JP8wasnuJicv21ZBXZpjE7pqB4gxZyK7cGyd5Zbqtqz",
  "key15": "4vsntJyBXZqmugJ1QWdT2aQt9GAhaAtwfKKYy3EFYGjm6qUSEP1vyeKXn17VyZgXbVxpkADScvzyN5yH7QRKuWQm",
  "key16": "3JFhTcC1fwrsuedLaX3gQ7uXxXo1fYAcCuGbXtcgLe2s2hnYdsua3ySFknyoWZECjCMWN7tZ9jDG2Shgo9z38mKN",
  "key17": "39VkDAhTLA6kQE3QrZ8Sa3KHBKuuMeWB76GTtBG1BYH17eF3q41wUEEfZEH1TnSVNmq3WY4kggi5TuvzF1YdAZze",
  "key18": "67SwkrnHujB4mi8KUZhi8x5tgixrDgkoYmz9LvxifzUywK3RxseEtTLF6jWDF7M5PnhpWxswkq8jr9eevLNi4QUY",
  "key19": "5N9fykcDgJJ6uZYoo3FRXzb5CukcnGVqsECVbZKtg4ND6uEJdbWLJRXgrLuXBbH2ZbDJnqaMxmgntfT9Y8F9mdTU",
  "key20": "ZTJWix76PrYYBGZxTE3Zrd8VcFF3HzxnRHCQ9SjjpQE3GZThCKi2EJmj7rh1mjfN3nP8AvZvsiKFcTzeUptWPY5",
  "key21": "3AnHsBR33PbQErqvAJtacKjumFKPKLu8Z8A2K91tYuxzHMaEvC86vNUc7EgxHowk5qQdsG2roZtpMYwcUnoPfs5X",
  "key22": "3yWwuTvjy77ALoPLkgYP1hAqX6Nb4gan6ZBYLcPsVwJM7fRVncGQxmoCuWwUdwkkMZvcHagJd5acyjYQXALEM2SA",
  "key23": "2U5F3neX7KUPFsRY6mFkCgejsWYRuAHtVkbqiqgAzmTsVM9gU4D1ktt1o2PNoZjpN34uhWGbYzVppzuQE914AkZW",
  "key24": "4gfctdgxq4H1rKCStBbCXAeudvx1q84QfnogdZLYyYQYj1CEjmXUFzLf6tG5ZZ4ci8uD5WnoP58hwHc3GwYDYNqw",
  "key25": "34drkR2fJ3AfwaMFB4atmdkqV8cC8gjKdJiTxuzyCm1G7wBedazhCX46gZwWBdoaitokVUeMwLY6ZtHaVD6XzvU3",
  "key26": "281Wevk9SEkS8wpjoAJ96hvijr3K3KBwdQqg393VaAfRRTu546c434P4K3ZHScNX9DpHH4Xvfy4vVt78ZWzntZgi",
  "key27": "WCqBJvLHbiScciVd5EGZCe6r6T6BFEyAQHLSjxUsw2yuEKgdnyg33d11zc1GsHfypAMPrZynabV4oqJmRaManaY",
  "key28": "3YM1g6nfpQ3iUJwz3cotRTiFj5F4wfAbEaktuJmnhfEde2v2Xf13bMk27oDF8g62G821rqqQTdpjq2spFfchDUP1",
  "key29": "3E1ggG1jZNWuSEhzsPMKCUL6h1EuHnzoVb1cBu7QUSi6m81XpRG56rRWxXEWhFQnDjtu59ukmjguL1jxyYRMkUQb",
  "key30": "3PDoUWP2NHTf8Gq1GAJc8LhCyatUiALAca1HnoZBDHhqfCWnFAZ8fjpptkvvtVjRrt5yQQQBAbJEVijkJ7hNpGyh",
  "key31": "5NQ1QpDBwwzWxe4i4N4gXca2X8ccdyh4AkcU6CzomQjTxJUpGSQYDtZKi91WeL3z7wgmJhjbmqbqFdxd6k6xcb3m",
  "key32": "4a2NeM1zsGzU4EKyDa6DdMDG9bF3m5T4cKdqQmVBcB1suAZxMnugwE5cAQf2jJDnxurMsV8pprWY4yeS3ogRC9iv",
  "key33": "4S33ixN6MRBVLC7UdZjr1z2yAitW7M5quxws9foxWUXTbGDRG5ABVbPfe6YZeTNH44461ZPjtPWajNHtCDkbFAqJ",
  "key34": "1FLnZXj1GSfARBMPE4RELGGEChcfLC4S6NpKWgbPRrcstizsWRYGCTaqxFV9PFR6dR6TM2kx9j677KDFUZc6YcF",
  "key35": "2chk1sUtKmseziKnna9T7BQhwPEKBCiWZRiaamsfLKk4nGby9qtU32PegyijrrSx9UX5SZd6dDxkrBUqLsdbhtgu",
  "key36": "47eMRBjKT9YSneveTnbveBEgkBHF2wxcYeykjje6XkudXhX4WEE74apsaBuwMHaqVwMp4o8ziZZ8QWoyiNCenHpN",
  "key37": "5iFzAGmmm8FYt29MoKwESpSEyZLsDJEHaH6HD6db9ALCPaJhGaksinQxRhdQmpB7H4FeDeGqK2tFoz2fZn2JyYFu",
  "key38": "5xBkKXseja1Ebozgt9HK95Wx8nwQDrwpqtRxB3M7bvXLDJhg7fHLNKFjADvQcdpMCothLavcHUyxNtYm7UJwhtAg",
  "key39": "43UgTJkHxsmZMmGFC46P1efGYFeqBJqcU3RtiTntiMzSmz3va3BPv4eu53Nbp4wLKRyNmB7dZBkX4LSYTSaAtsyu",
  "key40": "3zeux8sw5hkXMVvJx7in5hhpowwfqq7iuPdNDRs5xpXUk6PNrfL7iNSjP7NVjAN4WWrNShZ62MwBnNrN1UpA4Fwm"
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
