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
    "4T4vHy3KwBRryH5ufUKSJLN5uWbYJXVT9RJLkWJqMehp7MiQFdhD6py84sTQ6TgVtBcR3pcf7xQ7vnY4i2LH4aw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Di3WDYd7yLPUC5WcWrRQqn9jBf3FwTyid2PAS87uGDRXUTcE1apqK3RvnoGXv9CKThK3BSmwz6BfybhnCeutDkE",
  "key1": "n8PNfkxcjMRBPnhUxJtBQyKmiygFxESBj3Xn181XjBqh9akwM98jaQzhKBdu2bCxkPZuvFZod66sUrE8Mgr86hV",
  "key2": "5jS7oB1wCgHTkuq9HiZA9iw63zMV8F9sHpK5Atc1g8SCnTHRqvW8PJZiveKVktqnS1TuyK74G414zze2obc2wRVQ",
  "key3": "47GNLsRwkwa2nryKyUkNqp9dHC2rvoe6q85j191R22wm1jxw8zr11B9hCKD2Zz31BMDJjwMkNQGFb6AioN7DQHBf",
  "key4": "6fjj7t6ZqB5xTsG4JqDnBDeRyJ5HP7a7FGn4pvqoo8bXq5ScoqnabB4yRKJEFoDgofnNwBBXYW7YoV9N9knMktw",
  "key5": "Cw77BzPBTRBLy1eahg9tW6ZbHZpo9omxSc6psf6ogCCX3PLuq3cqqGcdoDq1KJKds5e1166GrHbD398LNNh6yY9",
  "key6": "4U4rSo2MnMuHYRYAP37HukXHPnJd6pgvKsWYhCJBuNR1WY5uj9443ruvFDysctZM2DrJNw8dUWptHJacpNZZ9qQX",
  "key7": "4maQd2yLCRMXf3XQkhRvjxwFUFofujJvZLqsuuHbA4iumxn2ZW59F5cYm3ZVsregjQ2CPggqJ8q2FSvkrj7hQqve",
  "key8": "DgPV9YHfErDD3rLmhe3ANUaoNksxARCbEvtZTzGAnbicxScdZiSG1jdbFiYHaJRcVq4GfzpVp2uZgLzTH5jtiw3",
  "key9": "2K76t7RFFXf4iXEsjeewJBzbr3dyp12hEuZHbz4mNWaxUavebtf7PPRKxDMquDeES3MdJxTLkRmnptyZ1GpLB7rU",
  "key10": "2tceWyrNTTLHwYFcZ3eNfgtUAqnJVbWWiVmm8M9vvQYLjwHg5z8eyBFVv5PXVdTosuXawXT78kyii4GGNzYBu6GV",
  "key11": "46QDi8PXGtHN2KLtstaqCXXeuZpvnnTti5smXVwdGhp8G5yfraN8QqBj4mLSnvSHhyYh8AYoK8jQGPdWBnwZWSyk",
  "key12": "2GHCCME8fecdEChRhauNBZauiFb6S5NYEPWz67aETvyAA3ek9dyfCCpDDPZD41Hdsp9VkUkErRAoKYqCrFd7WsBt",
  "key13": "3anfQvmqyqbyDqYuaUCXkiZZgnfzEgh4n67dYBa7eLpPgphHepxah9BEG85ZdEn3CGkUBr6ZGA6xBEHJPi1Sxwp",
  "key14": "4ZLyGwSzLSea6sNmsEt7sczo6e8Lzmj9hmXRNPivNrA4RHY4EhqbCynyaaSXZjq6fFsxgvH6MfBbKYixYZkiL7Hj",
  "key15": "3De72qHVUMhuPSNSPyww2gWMrR1muquoQmbaeehN7SgycY1aup4DESwKR8Ag6zGuLQJhTLr8n3UnYRNGt45HTia2",
  "key16": "3SxE9fWBUtTTmbJBh2o8xNb5GJyBKZssdaoyRa58Sxn7vyiePdT1USjidn3XDPoXyhuqz1pMKUEbkrWZngfYrKiU",
  "key17": "3yHHLaeXsEbcxmhdfkmrxTuoccZi1w3zmNwXHt1Ht16SSx6hUrZCvwUHBfxuCKFPJqXubFFhXXFNFBubfxbmRSZ5",
  "key18": "2g5C8SxH5N3AMLwXbGKTdWMrFWfnVGnVRzjQ3R4zpNihuz56edB74e1toTctSdKXxyKEk5HEtHMD2wLY4Yg6CL64",
  "key19": "5i2vpcqFymWqojMob6XCAiuSUbU7ULKKBhadqWfhnGvwsYk1GSi7cJGepwnc5SypHojNWFCzHgc8C2GCp9YXw97S",
  "key20": "5hyxiC6xTXcUJHwhwvKuDdMYBpw2sKKdnuTTd6Wz3YX4yW3Tc7CyMkoJeCoPTnFhhNKfvzH7v899KgHEgW8kGeoN",
  "key21": "3xxzGakXniQx1JDFBKDNkd3Mpo1ZygrksLFHK1hAZ7kNV4X9NVkdBvud7oFGRwred6Mc55439shhuCwGu2CQqesR",
  "key22": "257bKa4Zd19VYZtossmmGzk1qiyAvz8XexK7pufxRAwbkft2UopWrERWUggNNs94at3H7EtJr9vYKgo65JxvAQY1",
  "key23": "4AGtnF1gKNDxzcLzhfKHm73RJWJrC1CS2q7MEFT8ErPXU5NKQVXwiZaBALyWCvno346UE7YnHAaCSsQsGyMDyuXy",
  "key24": "5Gauf6D6Zn8NqMxwHZf9DVQGXn8XwD1K2UJ7rS1BHqXjS2PaeYde7eeXu2wgLxKDqtAZgdcGTTbiT1ZeW5GFVKCn",
  "key25": "DWQ4Pm1MHC3Tx7HZ8vKzumMJAosRisBkGRouUYeQpgDwB9A93V9m4tTHNpbhK9Mk81m4b2EpA9cs7LPA3ZNx2PX",
  "key26": "3FJjo38pbXWCvfY9EV2Y3wwFpUahqhW694sesSHYzuSWjJvARcDxNtjh4Pff4RwurxoyKqKobR6nFXmbMYj8Pwtg",
  "key27": "3dhNQy25s5FxP8yXx7u5NGA6Zhk9QmSGBQWdF4a8geeXjd4ANB926eGtwb1whos3RWLmeRWdK7JeVpCBr4YyeUre",
  "key28": "5BhXrDTXriDB8BPFn7EEPVD9ojGGevt89nq3wchU9QSUEdqx2YctiQXzZqoPh5GgwWbX6Ff3gN475F1Bqc3J5hna",
  "key29": "5SftKVpT8uUpvbLFAUf57YDpKsWaQcE8gqzJxHJ8PdaK6nyPumnbg5HD1bTQGTP5A938JHpUs5TQEZvv7raDd7zd",
  "key30": "4t6rznWniMQNbUogp2DVJXD2Jyy7ZMBaGYM5ZXT2p7j6kdxSsCYpYoCyc1s4LbyUi8zj3537Upp856qMAYCHnDaq",
  "key31": "2DuRmshJrhKfwPE6E22fNEzNM1a2RZkDU6Lt2asYgdqN9KzSPiXNmQajrC88qkEo4UXTP2mSct5cHDSm4xCEb9pC",
  "key32": "3Qob5nhJcLSFpDpdxAhbMSzxqGmPwCrUuapbEziy1rEMGSgq4wfZBPqUDoRfz9zeqCsrfciujC4W6f3SjWVnv1Gy",
  "key33": "3eJvnPJbQV5Nt2trdqNVXpvMahJy6K4fj2uSZatHDzN9DaHfvELDU4DLLT8udChkphi1GCWqZFSvy1bZdb44ySLL",
  "key34": "3sprHdsvshW4UwgQmd2gVk3BfcM79RcQZJs4KWLVeUM7gNTsuL4K9BRgVUCp4UxBJb9EKLprusE6yRzY7ADtSBKZ",
  "key35": "5EKEcrG4jKDCvkNHp6jNL7ABzytXi9gww3tz29Li7npckd97XuXCptMcTPocLYi6idGRkktYZETbp5qeLyqYX3A4"
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
