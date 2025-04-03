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
    "4JcqsEuCMdhwwVH4TMpHoHYabKpUDN45xAdiapnhzRE8CVU7MQTpHqkSpWUYfoBW8UrfaHXZ1EG5e3mLHRPtZ84p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M28SBwTu2emkpJXNXf32tudhCSPQqsHfUaXDRC4oafT5eHRAwsWnXXDT7hLfJ4diV9j9vSidJ2eCN28A5g4sUUX",
  "key1": "47AHvb7r29yyPHdYGiqp1DYeZnZZBV8J5ek3cbXXuBc5AZF926Yh12bNXvMuZN9fEqBHWBko8E5nTj6WN8sHXdo8",
  "key2": "5TnLiXMJjbvvuF34Wo5nABsG2YL1auC894M9mZc2F8SQzJfxZHvzaQy77uSqvjUBFuP2enhSoYamnsHBUDdoxnaD",
  "key3": "21qgtqUkhmqWQbd6tGU4WnZa2DBtqMjFfDnYiq2wCBwZwbWs6GA7KtiR4WN1CTmdqvof7XP6hU8aDqT9UTnufGoe",
  "key4": "2bTy7p5DHq7Xz5Kf6B83bEWPuZMv4hLXjSoJJbpi7U9e1QXppwm4AAcfjnifyXkgMHMsyQKUrBPezNrrgV4vJy3L",
  "key5": "4WiVw6GqGn2ipMBSQpDheVkSyPLugxSsNfbUXFETbkpG7zcruwgm6x3KBeCff1FSb3hbzGPAUjKetTvq3Ueof6oN",
  "key6": "gyk7eMDdq3RwuzAvkNNG5o7nYhsRm24srumYBpWPycBr8YudCXmwfVUE5rX8AqyLyBdL5UwHwWNkSN1VcpFYhTB",
  "key7": "5Qtifbibiv6jDGLnFKTYd4vHaf5TmrWchFQm72ffZRDutcaJDHwSanSDY9T9AcvCHG66uLz6719HN15xw3ZNsc7U",
  "key8": "4cgPXBFDDdwxouTNxVKjb4huaGAJn1VZMWfjrUs5nAbNCMPyeSArV7J8oAPjo5HeDASFEEfwRGjZYffDnxPDLWZ7",
  "key9": "2xxMrnPApw5oP7bu315sEmo8zWWJyoqyT7x2fT6U719yQiWqKFb23QnWNVgt3vVvguFCc3z1EY69jtCn1xnR7pGG",
  "key10": "5P93Mz4VkSS9Kg7Cmy5ZFkkSkXpD5e1B4vFU6Z7XQS3TKcDDbkupnKczQBRr9oTgEvSfKnVEgrX96hXsUZpizLVD",
  "key11": "3F8khj6b9G4bupeKwdzGWE3Lc83ACDRTVrnetGiW2d2rjRjSwuKKX97dyg13kB9D7U1xc2JQi7GGbbuAgvzaxKzj",
  "key12": "2ceKyy2H5UMBht2SBFgveyba9GpJerLQUh1Uwd12K5NEQ3TGWd87fZRRHyNVhkf6W8WZ5NXSMFEthBX272vLGoiH",
  "key13": "44NgkQUcVFspNZuMFmcJD83HC3qt5kxDcCCgqXgDEFgoRjp43aQUws2oadrDgscLVrNoWci4uhmq6MA5e27WAvnY",
  "key14": "3c33UtV2mgtQfHpG62tHhWtMxacy26ebqttnE3es66zXqLrajEsGbsV1nfUCCKnBwvbD24WVSXibkYHYhDxhzMi1",
  "key15": "Q2fiNThXNkm2AZqreAMFWVdZAKN1sdAkqds9VyhfGEutcLXaU3aUmsYVwxk9mbnU6SJAYe3NRnrVn2VRR25n34B",
  "key16": "4SRLuvuR5QY83EPSdR8rRs7tWPqZrs9LVQdsnNpeoX1qitQuHuwCp1WeEcjtepEa8dz7qkQ3KdzBXyqEc97MuWkN",
  "key17": "2Nk8oXyaUe2C2RXBkCqvYH75okT5zKpc8a79riTcWL4uULU4fZCGzMFSui95gE6oEJAim1vmdvAjKFaghMPRbniN",
  "key18": "Abz7WdomWkvZs3bwEP2uj4g8oxvQY4w8Bv9YHBFCZieT7xJYTYaVqtEemx8atSWFW7M8JJEYMiAYxBGTRej8rAZ",
  "key19": "4uSZwR2KPthgPsgLhybAbbYLMKY3kiJxe23mKecn8rEVSeZ1t9jmFdbVBD39BVprjUUcoz1D8oja6Um1gzRB8Mvg",
  "key20": "4m14w96vBZzec13mzZUVV48BXcmyNKpy3s6rxwExUStgTfR6aSqXBwyuo4ojN9C96ySxhjaDsXRNfwvwQAzv5axR",
  "key21": "4BmZdqwoUZk5HKLkZ2tzhBEe9AVk6eZbBnPAjWgVRmiB4EsmruF2UsL1cRzT6bjbMf12kYdrLiMtwNt2iZuMeDjZ",
  "key22": "5DnYuPFDrg2wtUcFSyR72q6fYpzTMgpvnTtoahkn226Mz5nYHuyQhgYHwLfHmRpjBoGYATxLndFzFVsiHg7L58Ei",
  "key23": "mYhTEyioJEdxivoxQjDGf1NR1pTUsgqWjKP9NBcizwnVvdhmP74RnNbYaenk3EemLZ86d9wzTrtVPffSYSfmbb1",
  "key24": "5zuikNcTD1Bvt5JMHi1nCsGFKMmQN27xihoM3sqgkWKQpPfLxL93CWjmtxUDfmXzxsC93CBYEysTmdY6Y5cWNvbG",
  "key25": "VCuQJLY7Dzua6mWJ1aKS3tiyTYecSWx5ufWw2rVm3QbzTCH3x3s3uioipHaaEoSwjuxBNaU9EUZqc7peMyo6wio",
  "key26": "3wScPa6GDMeQfUSva59HqkFkb62t8XXmRQ3y8JRMUfVfiphapmfZz52bLmhm7fCxbbX5HUdbAR62skjWqTMR1mgG",
  "key27": "2vvW9xuPPYHDACmWYpWH28AzubJDyDb737yAJnYKQbU98n62YHoAiExjR924NKAkmKD1LY42n93Qj9fGtNjvXVsZ",
  "key28": "43pAvRNPC1zYELv9w1ZkKDBqNWfgadmyJDP6A9Rjv6wQFX4ALFyvqoUwP5UfFwxZEyhtzpRZaVUvV6uuc5x8Bj29",
  "key29": "2XdTU5uG5k8L7B5HYpinHdf3mPQouFHkBF6Y1NGWEiywUzuZKHiCdZ5NZxbA3NM3h15DzVq2fdjDEKtz77rvaTrD",
  "key30": "28v2GHXCU8qaFYdRWyDmGs251x6GHkokrPxRqScADGB3PQh323rB3BJXZveX3qUeWp3KqWtJSy7Po5DPdv6vxChE",
  "key31": "4jXTvSy847VpmwaudnTRUB1atT2UupaqHbbGsz6xK4m8Gz39pMkrocPHqfQ4uGiv6jg2kK9ggruwvTQJwxBVi41L",
  "key32": "58Ztg73p4LZ84xd2hEnzE4dfp9mZVKjtGhDwGo1SUm1uPNk9WwcquBjcbLyuqdC8hcgQ2tQ15KjcwP2H2uV7U1LX",
  "key33": "2RL9Q2PDe9vAkx2aaeyquZ793eKvQm8er7u8amMdC5S2N4qZhnQdXZuNA38GEPvkz8a2k4e1e7xKXYeGGHgvq2Ms",
  "key34": "67DrFKyC9HghfRhuacRJWNbjgU5mxJkSCrY4NSKtJY23HsDmUj9VnMd8EaqyYkTJ1B6vf6v51MH2Snnpe4nFc3PM",
  "key35": "3e76iK9YorMyjPo3WSPvQDYTBmhAAPqo3NSL76tVp1qvDy3HYKmExinxhtuYQYVEe5vx4kTXfdC2AidySHfQzfH3",
  "key36": "5j2vDHn4F5U2zFdDTZo7hQKq4txD7XMB2pNgwHooEYMrZ7Ya7J7CgNdQrDQ1AtxzVD3DFWtJmPqPSyjbhBqqSKnh",
  "key37": "4KYxbuuLvYsAN9gaCnTGuw3p9j3dTehWjUkxz5ATJi6GyLoTggiU7d2G6smRkdxMyC3Vwfkm65t2L5SPQvjEkv6t",
  "key38": "3B4vBm8RffLSfApF3kJzreE6wXiycNHBoDgcGPzPJ148sntZ4esvdWuTKG5Qfkh5DQmn6u1B2w9NchTmUgfqNabL",
  "key39": "65Sq3uhQA5PxCFYeb31RdTZdqJ73YkbmmcgW4EKVCyCtghfzgeRFm3Fmy3gurRYQddeQfbhiHZbVf31Yjy1ErcgZ",
  "key40": "2rJnvYxw2SzNkUnu3t1V5e8wN64ZkAPG1Xz4s7KMHG5ZYeo7zBJbiCK5Xnznybj4EvvGersL7Kt4QmhzNpUNWsym"
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
