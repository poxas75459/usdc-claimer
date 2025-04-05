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
    "64bjZN48UC22u8W2TyFBdGM5gN3xjgJdafbeuTWzQ9xH5ynaGtxeLC4khZM3DbRnAGh5RUTHR9s8WQcvD5fUbCyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXmvVYXTZaD6ctc7nsMHrtQDvQuFhgbP4EVwjALmvCvmvSgxnnXWVJMAN42BLgVWwbNkm42JXA7Hk3rtctVHafD",
  "key1": "uinCuybAkP6Jzaum7kXQjjZcV2CTiehSXdURGGAaWXbvcmz73Ctqqdwp28E7fFZYKRzWDzkx1PodR5fbh1xCFU4",
  "key2": "3pAHVHXwikjZLBLzfGE7mmWEKPQWT2WZPzTC6mxvJhcGt5WgFEAx3TpzcXEeqXdQeyi2jt88GXdYRVtpPErigHGv",
  "key3": "xBe5fV5fM81oBHpCLuMTBDxdAGgHwDuty5qM3w2TBEcdnz82RrKzGZXrbzCrQimvrNa3qwWwSH7CdgGRTEWLRTZ",
  "key4": "u5dLvq6mLD7hKyEyLLHvqSxt7Fu7MmLJRW9JDhLoTRQTuypKMyhxu2FC8SkeQBmKV2Gk57u9mQns5u1MsctKNFH",
  "key5": "5tJGKoya97uaMHBmiiNkWTJSTdeG5h1Gb3zTE2S5i8xPwYJTEuXnMu76aVKQuibiwg19kf61CTxPJ1F1ZB4xUpiN",
  "key6": "4i9BkijnAmRYVtxyTs7iswpm7VWiJtm9rfKHvnmKyU9xvpmv2ZYJUGL9MVoQiWji7cE6HEkw2rZ1abg43kSTBWup",
  "key7": "4bivG3KKBj59rztLLjSe9ZKuzxXr2Fux6dAWU2MmXphGcgVehfPZBrDDCzfAYgoAT6u6SeLcrya3vdmHEFJEr2Sq",
  "key8": "35sxWeUTq6sWyxkXBPEMRzsEBso2xe7kHyADW1k77fZioRA9xvsoqQf9V4vcn4GfmVVx9d8HXeeg9AT9L7e5PBfn",
  "key9": "4xiKgPLXCgUkLtBq95Z4G6Hu5bFBt53Er5fz9domVrsNU7kmLX7RZd4TfbBquktbHZ7oZ79CYsjbwvcACqm2gazJ",
  "key10": "64TMBqVwRFm6nmyRtYYVFJoR8yfHn5z1nZBjBS2sNvSt7Q93eUMUwoMFZkxeY5Cd5F35HNachdjo4pPH6Nz9siYq",
  "key11": "5aVQE1suhYB8NxvKYMgd96Y33u4Eare4QXEqNWn2qYizx9Lphm9WzY6wdJ9G3Aws5oDq8Zka79AB7dk67CiXLyST",
  "key12": "38245Nt4qMEdrkN1efJmjMtgGWT2Quh5dEcKGzQizfQDqxqFN9Jkx7nxHcXH3SPH8tLJdwM6gGyFU6WDmTZTAr9T",
  "key13": "5xoM9Jcgt6X9rgHy7QUf8QWe89VpGVzsSfsmK6AcabuhE8C4QniGojAV3vn8zRyQnkCimkNXfW53Ucxq1DnTrT3E",
  "key14": "419Ejya3pEspEfCn6YSct3GnBLn8hc6i69Y9xCPg2KV3cdJLXjVvQbMUQqrM9NS11yQR8bLTnrYnhJ5jrDH2VAhj",
  "key15": "618TmMwLGRgtdixaWaqvhksPh7zu2BNM2aQYpUei8Rzs1Uf92pwU5eGF4M9LDaM316QiNeWQP7JiFSmZ494g3wUf",
  "key16": "53pzcoovdoV7k9ijEuHdCNg42dyTix1yYC1N9CktWNE3wTVxWBPgFTHkfoJLtTpJJJj2CyTCCM1BgrD4N3MiR4Yp",
  "key17": "3gGTUM57j13LchJ7fPr6kxu7GKho69wkfuMSkntDs1SRF9jRmDPqrG6qzL6nomyLHHFXXzAJamGgj7sN2tB1NCRD",
  "key18": "22R5AqfV67tKpyMRQQD44NLZWNWZBLSmCavD2hjcatgYfiRRaLxUeGuEbZzLaWFLTU3C5DUsYtHth5XMyWyaCKJ2",
  "key19": "41bhbnHUYMmnqDEabz51TtjcWKTfQpi7RiTe9RR1n8yrT6vXS8y9zgQsBPH8RNGfGmgXLD1HAhENmHuc4mcjGP3X",
  "key20": "4C7RfgqMp1UieSQrbzL4JVVyZECJ9eqhcYPnWriiMnbynkU53DBjN2KVs6HJPrzhAWwDqy17nyH6cyK33akBt1Cw",
  "key21": "3uHyVWM9CbKRriZf9ew6TJYQ5xX55KAppPeR68yJ6S51kbjXwdwzm64n6RfkKhHeGCGta8pkeuFoPx88W5ya4Sqk",
  "key22": "5puX1UX82vyMDtQvfAL1pSqaUFSY57ufrpdW8ECcAWNKNUkbwuzR1YHe7g2TRdxwC9nxBRrbsArYbvUPQtSv5Fx4",
  "key23": "2SPkgTqpKFUNejuae1gfj7zFZMJbPePhPY2fntyG2nyGV3Ckcm82MQb2ESHkp32XQAZUCRQurBMbTMnMZArbUU9G",
  "key24": "5AjGavAKvLUoKLv3Pi3fvkpTTzTAQfsx4hK1rMntsV6NEQME5J3XsLQhAmNVYkPxKmoop8ww9LJfEWF2yeMS3153",
  "key25": "5TvjLN6LZmNifmhuuAooLwGYNdH9Rum7UgDWZ1E6tWHAsrX9XsxeoEYMv15RmCgQELXea2QWwMpnMekM8BVBT3wq",
  "key26": "58VLRsxBQhU7tYSYYdEVxzrfPMcLqR2LhBZ8Rb6MvUCuCKztWPeUBnLcUYPnNBdr5Ety5ipoX32AsgvrU4V1PU6q",
  "key27": "2KL1MUBEDs8cDVD5FUvPc3Co24rTqq4z6eSbhEvsa76wTTya8t5WthXskFf6tGro9iRqCVJnMT2t5zMLaHbcc7rk",
  "key28": "57DBX2cqFssPzvDMxxK5JztMp5WzAQbeS7BQTwgVb3tYhzjcatEz6ieKURK5H7P7FNurtw2Tbpc1hqUXtYxUiTZb",
  "key29": "3L1v96bncAVRVhEYCD32Y1EqxeGig5TTsjUJ8EhVsHTocB5dJiKCPcpUsqkWVYHw1ZFMt8KisrvhPJ966hvBkrkP",
  "key30": "3zKC9h4yqqJGyiKwkLvdxS9Ev7HRPGreboW2rwWXsYizHVeQkKqHQ7tJw4snNppjPXczeUnxBMBzxZcK8nS8vytq",
  "key31": "2jdMMnyCXt8BgExxy3VZkvUWFkuDFaUBWoaw8AytFQFSzU4sUFU1WHWArhFCKRQH7vknkkvRTUkQo7GDwmVhwnDm",
  "key32": "2YjKHeymdMkznjTjPhrCMJHL2L8rfXW93EPSzPXTuhkyb5PNPEvVAh8xGgUmKytGjTwkS6RdKmufyCWntZxQHHUK",
  "key33": "5G8r8F5EqvkqXxXBAF1rddxa42YmHk9EnQDHjW6bX4zFu2UptqjeKgocNX4N4GFqFpScuxqViniJvKtT4SEHdNNt",
  "key34": "3kGmfGq1rF2d3Dq7UWi43Vb7sZ9MfYBaDr13J152Q13bYLWWEK8CzhbiZ9ZY9qcRdrU1HD8bR2PQiFqNTXVqfttb",
  "key35": "2CJ4DTjdSQhBTwEHJvsmMQwxRAafcJ6sm2Br2Y9NMRVoLXgSDrjubBoDYFb2NbaTWG1VFKnhdQqTLpj6PeycQNEv",
  "key36": "2ErfzC4C625zEjvCFsV3Nrx5kGSFSRa5mByW5WcorF3KZ6B7SMxa14Ps6WLqDVXziDDAPiybw3rNNoFRDJyY1U8S"
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
