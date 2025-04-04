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
    "58H57hrut5H9GKBUSVwLrfAiB4izvQ6PxgjnPZohu7nw7yxi2BFuabsZJsdmFyxWSZSHYJVucqbL58DotxHdvMeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usrPGb5FLTR4Ap5gPd4rQpv3n5G4JMtm7WeG2JVHvsQKSNjA11SpjC3yfhXNFYFwBG4uJFJcHv6vfc3t9BM9UxJ",
  "key1": "45pDvurf2q9dWjViAuJdFvJZF6XfX4gwCkJaVi9VbDbQdSJA5JspzXFBctN9vKXJhtviGSSpu47AEjJh9nnztWNr",
  "key2": "48GiJ73cD4AD5Hdr5gRS4cLAiNq5smxGxGpktLGWMtZTyouF1uiiPawbKrp9Qsdrn5cyec2pSwKN1ddXujNPCYFt",
  "key3": "4Cu1mgq7fPmPtzXxQzm53q4JEsN1HBXu7mKq645zcjC5nCoy87kmu9bDDQS1eiCe99eHfciLGzt99iBGwE42uG49",
  "key4": "PkSRRn5pxZdvDddyghYd87EEQQJLNN3ki5mKPSp5H2tVvna6UhHfkcUQ3gQX2nPaHrzFYkjvZs7VJZ7DSdm2reH",
  "key5": "3uCDdqLLqixZpLDGeGHQQar1MbUSEwQM9Gj5sXnHPm3PjerxFRfdrx8CiJssJ3oeNV5uLkKmPcqye3zEaz6xLmFA",
  "key6": "z1oibu2DRq6wk9VUtfUwby57wDTAwFn73sGTnPNF6ZFu5nZgdUUxyr11zfP6xFmZgdL5WNNXGPg5u1e4Hkbv2RZ",
  "key7": "4ditCRoSmxx86CaJZguRiGB6zobG4iTMfGPCLx8wjHnXxsgx8bc67aiT7y4EgUsUThb33Y214XKtK78oUjkuFkHy",
  "key8": "VUny5wjovyLFvHZJpwbn3rGaMhpgRfKHDcEreWyBh5PFx3shrSvuRcGqkvvkjigKwZjt2PFPFUkJkLoNSZBQ3YN",
  "key9": "2dPaXWu8r2tNpuHAidd8VjbJHbTtA41y4yQgFRZfRwJ3oefrsbowZ768nYDbX6LWNgmpLZoYgFpc4uLZCQDb5VZR",
  "key10": "5J63DNpn1tLr4qrsqxippPnS76ScLkcVLQo3zEgKXqhSmC6G4BUST9FHrbN1ncEyRuxMNexeC26CcbgRRf5ftDMj",
  "key11": "4dALBfAHFN3hLbuPxCBsLRTE3wdgcCicrAB83sJzvAR4hopB8bWi654x6uXatQq9n9cZ4RWt2MfJbG9mmLzywVoe",
  "key12": "4trU5cUTLuW3TM641GiKLfDj5J3bayFUKfSgtpou2P818K7TmJe3Yvg54VivrLuDwDV9ryMPRRptDFsXQVv3MUhE",
  "key13": "2xa1i4qb5yQw1wnBzDCH7nVNMQqAAMQDYcjK6gGhVHUpt4unPY8156T4fzDmtiMHYQ6QYtVX3SvoCM549znxyfUz",
  "key14": "4bncRbkZnb6joDsB2vLPVBjtSWNsooLfs9V4hZCViAwr3ijEKAqCAruvCQsM8LyXzL97MyqkUDtWsDCQ8cAa5rk8",
  "key15": "2mn8LBMB4yHQBTWbkZBvcdSaeqYFen15fsbB9t2RnhiDzrTkDmRbF5nPQhNUSm1mr7PrTAEGT8Pxw9yS1HVEMXbx",
  "key16": "5SBVAHKJ4GF7wdsPU9MaeCuv5zsfm9UeoS5DoYivKBw7ATgRKhwJZicwWjUGnAcXz6jQvQKFK7ksptvjNV1g5Kk9",
  "key17": "3M8xutGgSB6oXRpc9aRA7Dod9xrttwzo1RGmvPaghoXv3P44MDiFcxNvKn12zgHJH4qemAbR4rPGfZxStet8Yxo4",
  "key18": "2B2eMpPaDgHZEXbk9XEAPnLWg4bBgUW1DYmN5dF6KXfDTAnvP4QwNMYDUBCf5HJCQsw2vA4vbMn8j4NUbeXLkpZ3",
  "key19": "5dAfcTt9UnvQEL5N443TALDMj1WQubZSi4T6q1WKpeJLH6222NBKA2UxZGNc2JRykFo4fGSxwENNKQozMXMhMTTH",
  "key20": "XmYd2KX6f8xWvS8Ajcg7pXcVykQkymVV2vazkX5HKUL54EDmCaYbSiTVzTSFjML6WSCkr1wXYZDWsrpmhuc61CQ",
  "key21": "2Xtuc2AW6c2Ttm1C5LWNrbQuVRW7EPuLMMkFYVrjq1ZZCEAB9AaSvxyKDCM6xLmd4raVrDX1M92PkyUB97CrQmzh",
  "key22": "VXKDFxH5ZdiLvm6BVmnmqgP1a56w47ozmSafV7mLrjuNXT37UUzvmN9eP827XFeLYhstUGt51Nb6CGdUYFqRAUm",
  "key23": "4Vsk5uzSoE4nJZcrZN8hZLF83BBbLrRPGAD4w1E2Nvxuufuvr8ZatxxJhShydDns6NQYaowHdjjnMHsy6A8DfGP9",
  "key24": "3UQ63mW66SDeHPu8M1pF3Qq6RbGswGtkhhnzh8Z1AHoScqswcSKXEJXSdZVjtzMDQpReTbZTjw2zuJEPcofTpq4A",
  "key25": "5iYWgxzeaWoASTuxX9N7uwZjX6pWhtzGcXofP941t1ae6yU4yQpMCNTtmWFjXkzTVrHYYHGLoBZzNXohMWscT3k3",
  "key26": "2pXcq3MpKs8YzRUYrvJ3xeJX764uJyAuGjJuvoBe1Jt9YSzsTe5fAQMYguXkuzWJrCPM5WURyUafZX8DaFV596au",
  "key27": "5gNqcC3apCN3hRTiRaX3RMR8SVEUPdPESRgdyUj6s6d9G3cE1serRSaNshLUoBysPHDCD3nmNcFkEMQc6HbWSZ4k",
  "key28": "2FG7Rh1T7mwqUeeVkvfTpE31tmrWCp6GfFZTY9gCMnErZJY1xoW5ojR4scHBq9DbamHLcwDxyMAEMz4eemVMxrNY",
  "key29": "2rULsP93jGAmcjefG3bZjFNPDx45TV1nLzPY6iyYPbSXvqPBkRYgDdYe2tBHp75Azb9nu4xo1XbXBgBwj2cPQx1z",
  "key30": "3AH3jfqt92NTo1ZGZLvBX6wLMGqiNkK6ZCEYcKEDXPzK6PeCVVyYoX3rg88QbxRGDZjPugu65mtRrve5dNRz7j3D",
  "key31": "3vog6Px2waAJZaQ4AwMuyXaQALBiindBgdu7ttQh5Fcw5uEdSXHwWxShqXmRMYS8GCCiuFH3VCAQFNLvUJZM5rSf",
  "key32": "31XxWQNMLfcT3bt7ZCU7juY7T878d81FgA8KohSvmdBtnKrfxS59iun6MMdTMNTwYDnyUw3T9RrAPP3ecTW1Ffvj",
  "key33": "96pMncA9vT6TSU5uLTJrszrZC5ERrd92L1sWBtSTrweACPKEErcWBiesKBRPYkrxddaJZW8Sq8PDs64uG7nsC27",
  "key34": "4Arek6721MVjNZg7m7EDDUbtaWo6TiztMNWdqcbwifX7y2wFGz2Spca5Xys9WS1a5gZ1oUZUqP84gNStg9wTDf5J",
  "key35": "JFRndr7m61pja37ZTQHJqqRqTLQVVwx4yDkfyjENmXUv8UJFVk7Lumxms7KrpkT8k9mQCaUNmtZJcEqJHJHpNPT",
  "key36": "5XfjWpx4xEK1Lb25xZzVovHjJC2dwqMF5fdpSfUpUEfRFYL8Kya3CmDPKENBB2gNEgAvK94qJk6HQtjuBAHMa7Rh",
  "key37": "4WHYKLXfaymKgzHPW58T4CRYgkqdDExdUtUQD4KGSHzjzGPJchQMkx1Y86MP7V7w1BpVQdkoZmxRh7kmASZdgjhd",
  "key38": "2HF2dvtyXJmKixQ2HhrwFfM2DfrRGb6ZX8kLfQX5oWqjTJYgY8Wq5zCrxWcSQjvHKDFVTmjcgFJ6WnTXoVyHUENg",
  "key39": "YXHRgAj3VeETKgKHV1ZVsy57p85yYNtkjzjTXySEMtHFkFGvjKRX4qnGXpUHyVseEikgTjeGNNK8Q5EnMya8DqM",
  "key40": "3MZFPNF1xB2SU1VLxm3TdiWn6p76kCCRUknMaBnvyeMZ7oQVPedtgSFaQ8o1wRFxZhX8wrLW9KX62GcquriBYyBH",
  "key41": "5hbNuKEWVRjmtK2rVoyW3nSqZ5ESGMxrVb1n1X7YTQBtzVmwXsFXq6sPSVpTzWg2t3DGmsUk17bUUZvCvmn9SiKX",
  "key42": "33ofUxUbvwH1tmdrB6XZG6LjMH5kBBgs9Tq5naZecF5E4aJYpHUJ8yA7kvJRUtJuGGJiPWbrfuK4Qg6a7YXNd2Rz",
  "key43": "5Nz1Lno5ba9XbhPepHtXGsh8zz6xQtngg49DQGv7Bcct4LyoLoMg5BMJDNzieRavcip6F4TtR8kBDp3vQSpZCZs1",
  "key44": "Dum8QF7g4H9KmjfuqsePgRWfHNx88LseJ1mMAZQNGsUNTaPv3yJrWUkLPay4Z2yPVavBUADbtfkFe3XywPwH6Mm"
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
