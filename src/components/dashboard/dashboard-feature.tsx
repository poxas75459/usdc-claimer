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
    "2LP1Gqns8ALo5d5XsS9W8yZfLnEKVUJZVdL4ZcNmhWM2Wi5dfyq7B3Xxd3EZPjYy2CpYWgpBRs9BB2Df9no64n9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9oqcqfc3EzVoPj3h5xNs43yozNgvwAee1DBAS9c5zTWXi2KGQHGnb1tETS898DB2NNeKgeZem3jwZniWf2wS5N",
  "key1": "4tRkLER3ybttUR9NL9sdrGwDC2EaTXCf2w1K6E2QwjrX9ftwycmshNe8xFHhsuEZpSjovYRX7exAZnqnn1jG6UTJ",
  "key2": "2ULuU627ehMdUr7ZfvRHWAfD2xSJwjbAz9DhwEH1GhuNfujyu86v4vy3E4KS7Gd3VpoCr2LcZQC6eDHDgUd1jiBk",
  "key3": "2yRaXfB1YxcZUtNEtjrzHu3GB3Yq9Gqxx9WuzLpSp9pqAvbzrbg2nmaaGFpGVpMz7ujGcnPzUfJnVR83iGru7nXu",
  "key4": "3traggTJFcvWEe9J1nKcYcrC815agk1WyZaH9gSVbRRUy9e7kddcXcXpuBHbTCJiUNaBGt7qpGhZNiZCynunmi6u",
  "key5": "3hdwB6CV2WMqDBAWUkw5SWfBvEpveyq2kvetfcenaeNGv7avxW2R14LS9xnqk9BLCSsq6WHz9wfsYGDXZpXPBLR7",
  "key6": "5vmX9PXe6tpnsr75vHxGBNAMiiy5WP1dKTdkhGrGRSW15HaSXay4g5HMPSgJVYzwd4DQQsYKFu8E27ENw9c98Ned",
  "key7": "wD9wun1ds4nVzZYYEDs7EjgJzZh9MwcHMBbFEX119SNKHbRkkC76AYcW2CCHN8Awax6sH4DQddbmBU7iotCxhgf",
  "key8": "2vZubTEo75qAxrgSB7vjsGjC3LAd92B7EgsYg8vdAbeB8oPHfD2px85kF8XiDgD1oZeoqhdjpLvoUAtW93q68piU",
  "key9": "4xAPrC6tdJU76N8tTu6SCtX8VS2CSzBDmsUfSpG3vBKPmUechiyassabdFrmsEoTRo7GNUVZyEYvfxvs3GXmWxwZ",
  "key10": "2uxn7BuaJQbQoX8RrEsRrcCbZradGG6oA2kqfFmwFt1UpEXPnHLJsCNHWxJ7dcTH4KjwgepD9nnc3jpStJqfXiAu",
  "key11": "3T3uk99zXbkFZ3fYgTvKja8DSgkyjwoAuLxxsuHkDBZptToqCx2m22U5bqnoeDxjnX9MvadQpXNFwRAm2zrzGpm5",
  "key12": "5K8n5hT7fYee1h7XC5oYcTBKspP84vYS3Ddb7tzfpNu8ePM6mbMDyz5fypaJAYZrmbUfBxQqZUkGge1bsUyk1rwg",
  "key13": "3Eu6rpRfAieyVggiL3ucKiiWeRXVUAnQUufiZJevL4bumCMiRNQzD6iNp8LzMX9pwwKm1iPXREiWMNWvmYoAqUzT",
  "key14": "NnMBGE9D5w4H4J5czmN1BgzjKf6ypNPNVa631yHnCJ6eQ2FsiY84CjPMBStn59s63Q7QBdx5AmRBDqpwuy4RW17",
  "key15": "3WiBFC3GhwoNjRnfeFQdhuVxSpWyCTEziLemq4HVETmnQAZykvXVu7E8G1dxvBUqhseUHM2bD3i3x9QvZfRK4RHZ",
  "key16": "27q74BMhggxaMCs2k1PiZKpRc93CjFdP7JgmnLRvjf9nEux5ShQvYQRea8X1FqgMS6LWBr9z4dx5zmiXiJT1wcme",
  "key17": "2wqx7wQjdEHjjzpZYPjW3eUQvgwXU9Gnz6rkE9P9Qd33fbSUgmydJzT6h9aM9C2d1ZzUXKT1TmZZeoqCFhaPU7xD",
  "key18": "awewK2BeeBhqvNPmccNZbGtNgBajqJyLCcdzrL3a3KAtjvzLuWbHp1JNwXU357uS7mQXARcfAH2M5Z1pHQMUbCn",
  "key19": "dXrojqhygjk1XsWfvUpnY6qjJCc6p4wf8cJodcUkK6jeMj24S6827cNuvUh2yTKwt8RJr43SAGbu3NafGxYqvez",
  "key20": "2TomonxCwX58aY1E6kx9659gUwcHyszpTrZYaxXp1n9b8gFvqNGNALTZrnTtQB6ZFBvvHkiuM8eYC3M2rJJSAVrx",
  "key21": "5EdfwMnSbRJS1WfVv5kkV3eq6vXDuVFnpWFXCWLaFFnPvvmveThwDEM7JsbSYVpACFbqa55G7GSgSdvFgYLT7URJ",
  "key22": "35ep9dr9ytdyD36teYsiuKYFBAthPTatf6RaUDF4EExXHk2RzJTpR58uXhdVDJfiehw2URTsM4GwQ79kVE9F3Z6r",
  "key23": "4VAEFxmfEMu56AcuhMFMQdJ9QTJ8ttWRkYL9fZFdvomUzkgvSaqXTfctp6CcFjELhtZ5HP3eqcU7qbvzDv1dZgfq",
  "key24": "4U4mF8YJCouC1qfCY8EAN8tPpzpU6pZYAJB2HgyH71xNLt61koZRmVVe7mp6tfP89LuopVDM7ur35Fhtf1hVeBhv",
  "key25": "3wRXg7j9FWkjXSqKfUBY9BRVs7EXEh5tRCUKkL6kDEZiyAxAj7RNdd4JeVf7GVaomAt9JFnrbK1y2XP5khj6seTw",
  "key26": "5zfAR8N2LMygvUWGE66YMEPXLxJ1RhC4eou3ZJPDAsXAgp995NwwambCExyw3kDfBCAWxBpmBD2gvF7BFpyoNRx9",
  "key27": "5hSHsDLPryySMDYAjr2smDe5o66u9AiqbueEGRrW41MSPumY6WuLhVdKsw2x525PQdWraoYQRHpiAJ8oiva2N9MC",
  "key28": "3vr124n1k6HStn7ZdeDt8XC98ymaXkEt23yRcZgDKm3EVyRiFQUtZfbvTMr8RkvLyBgDkfgvcwy4JWfW6LaSqjC9",
  "key29": "4FR3nNbKH7kSNpnrNy3JE581Czmz3pMRLPRNYb3bxQAhqw9fAroswqvDLFLZFzwqocRjDWS7Vc6149rYW3CH1iLS",
  "key30": "3jvgXFz9Xc33xT5gmgv67ZHjC91szsMdR9if3WLkZGgFy4vsiBN93SDQNUWPVukjkvJdpwibZ9Afiaqt7n216GVC",
  "key31": "8uqdQnsGD4TH9HDKF36TGUaBU74VFTLMd48ezTamE5kn4T8JnoDf8itvMHQ8Msphe2cGKJRYKoyPCLqAo8sc1ag",
  "key32": "59nt6XkwZZgyDeFBjfLqPYsGoWwaamW6cyhXUreWWFNbRXoSeu68in39t6g4N9uDYkP99i8MRWXWM6GuMxtTefdD",
  "key33": "23McGzD334uj7DgjRhxdudghyH8xGGC8dW7G4XUnfdvcmn1uQFm3cASJ2A3QyEMdxLs4zrLL2Yg2FRgRkCS3f3cs",
  "key34": "5QE8kJ5YWWW6MpYYim2ZC6wMGwrAeRCizchPiEe1q57obYFD3UnmvVRvLg7Xq1aUGuVESWhGPGEsBpmpZ6cxf9RA",
  "key35": "577cUrAM98y66dXxiFhy8MtebkTL3dFWXLFfUN5u6TyhCa17pDC27DRZ8bU7sMJXBbsNzguSWrxHLDYBmGvxFPij",
  "key36": "4BZFSAN9cygP9ZyUFYCAXnWmVo2H1iRmnLpeFcpK5RtGgyLvyKqm66KzYgncfRR4zDsUniqEXUH8DbfKyvJkmWQn",
  "key37": "3Y1NzMsabBsHUV5DGHCiRcJLeiCwsL2QNShCEF5isyixgr1JoHrfnuKUkqgcxmgApMk3hDG6gssr9tdF3M43ekRW",
  "key38": "4rJvfaDUQQzdCvMEsdAp7fXu9hmw5GBHGjtdX4xsykZcgPiMLqYM8PpojmwvvzwjMTuPgjXBwoM7ELLRJZGvrnUL",
  "key39": "XoStczQe1hsYi49Un2ShRxnTTuEvZ34JnNcELxkhuGEQrmBWyYefGyfZXi7WB2ubBrcsRA45WNUmydZDBiJpwms",
  "key40": "5EFJ5MVxngLkFsq1a95jNYEUmBgoJeoxNvMvK2S1yAJdxyAVARLRVzVswuJGt9dC6P4npjY19v2eGQKTRZ6kdSZ2",
  "key41": "3tCfwxVhjh5cQ8GcaP51vdhtYQ54F4Hb8x81zoVfjvKjpdyvCwEM2mFLitdUfgiBDGwYhf1rACSE5ma9jPThpUpn",
  "key42": "21JdmbatdywkvwHsoPSmeqV6YMNcd5AHupfjUV9bwXCUnqPUQyGEwz79rSRwjwop32qfGGu1d3MxtYSgh23rJNqh",
  "key43": "26Jtq67vKBT3MaNczEv3XdkLo3pXi6pHRZvHwsz28woLKqr6rjxQsvnwj3v7cSkY2n83VRhfNwUeCRVVvwnfFKaQ",
  "key44": "3r2wtesEWtqBJjnhjPJqFasmdEUeF2s6QyTYHzV9darC5kP5tyhYxJUG7TawYGXfGGsjXKZ41ibYX6dnATxGg1by",
  "key45": "4LkEdCriobNBnGkLaRyg3sjA4GCRQ9iE9HJ7BLwdbUjZt3vjWg6qc1M3b1aLMpKCAXM7U6PHTsQ7xTXzbAgoVPwV"
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
