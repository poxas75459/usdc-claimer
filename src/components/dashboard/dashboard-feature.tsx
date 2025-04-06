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
    "4Z2YrKyi8TYcN9JDxXmMKGwKMBDGkjkLQZ7kTY5r7Grub7BTLkiA3K4jWDs7jS4dUaYRhgfnwgvGL4k8JPTPNCeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jqyf2jgGLsvtTGYke3UEbfMsdc2Z43FngTy67D2FT8RR6ts1tCHUN76uS9ev3SH3WQdFyGdX2Bhs4rA23UeWgXo",
  "key1": "3kUqzoV7bKfyApiB3wgBc9HbCj4D4wr8DNEuaApJVp6JtuMww5HyYtWfoT7GK9HgbmxuDTfJcqCBcGnnkrwU4Hvk",
  "key2": "3kUTmQQdrJ3hqVXkh2TrWxo4JDC7RPjCX7PdLAxxWPwGd16ExysA2kNg7EAuufLQNHCie6p25LHjNQbF6fDGTP5f",
  "key3": "2JfEdgYWdoVKEoQP6ce8qtQMQNciZCirccFbFSGdRJxYvVLSzo2qJJ421bwsJrSyLfSdmwapLptDr3QctS7524Me",
  "key4": "3HJuco9xkHBYxHL5WSuomBEAasvkAeTkJHYPkCPw4nZzBAADR1vbX2Jf9iQsTWAXX74HT9Di8hzVeFZP2FcB3DsX",
  "key5": "2qzM1VhFDWHnZEhoiCjQWpgH5G1d7oD8gdLwX5r6iWoScwCFe1nsuVdR6c7S9TJyBL4331qfrDdTYKsk2gE6crF5",
  "key6": "32wxf7f69CLkZs4zo7f9exvu9KzaioBDbsEdX4z3i3ahpsMMab5c5o3WTr6EpGZrSPVxjUu3LLixTBURwRDDkevC",
  "key7": "4vTyLwfPGGuoCrW5J3M16YRUmfZAfzEoXDs8VsL68cauaT7f8ERsmyhQNiQVrfuBLMiBVLsSQxjcJ4m3aSrCsxT5",
  "key8": "GUkV5qqf9UhnH4RvbpdU6aBzmJyvSShNhDBFbSGWDDNsYx6p7QaE8bjYoLtPMQYMbBtLp3yJ3a3oF8vWbBzbHgh",
  "key9": "5DbQXFVDy2bAhdWvEnwGAmLHvW1mvhnPJ4WLNqPbveB1abSAQU1NU8RfNB2oz4d7PhQsvfoYpdGwzrGtLydwkKA2",
  "key10": "5BWKP34hXBpN2YrJtLeExdJVLhbsPhYbieMpTDCN5DTaXPJPgr6CegHgBiTc4HqnXo8qXeWmymhN2K9eTNSBVkS8",
  "key11": "HTDG67JQ4HukZnTXFrxN9Y7vfNJj1iYQaGwMyAp8bvVLZnPA7F2VrhhiLNZgFCsGdhx5je1My6XqABkqNG51ofa",
  "key12": "4EFJgCNGyzhQoEDd5EyefwZ1Wspqranj9NVdohDTfxDz9EqWCNjC7YSx8YoMmdckeyCXKkXP4uRdo9SAkz3tpknZ",
  "key13": "3zbhkYX1FTk8P9SHYNcG4aMJ3FFuXPdhY8LvQomUDRUH8ooEMXSiZyhqt5uusTBUe78wasVuiCjSbSBJXRAVpFNs",
  "key14": "cVNkKY9PMJDrxeAxn9haMs5vScCG1tFEmM4vaC91UcGK6Er5ji84kA5aDG6uJWcnLxBPdCEt6Wf8BWZLoLW8RJ1",
  "key15": "4acPtQhNCiFEQNj2Ap4HVyRFa9fkYair4KaeqHUB8rbLBoqM2Dbb8mjx7YmiSmX8n1zgQcCH8dqN9fSgTxdrmgLR",
  "key16": "45b7gR42G1tau5JtqGfUaqGDqcgZBbwKXSqq8AUnqhrWMxznBRu5qDzBFYafXFL5wbb8z91QeE3rkgwP5dyokHup",
  "key17": "5c2AQVDvYFtFHST39bkKueNj13vwPzBsNKgThKNoYNGFYadvc5q8Zwe4VMfkNR7MktbPbXf4t95YBHj8maiTWaSo",
  "key18": "5ErXNiAYeGcQJS5T3WcHgEzafLmtjkncKhfYdz47wygrePwpBUZEp4Jzph9nMWUoXq1xVFoiGQ5aJD8abEY7UZTq",
  "key19": "27UYiqecaw1tCTH9sedjKeqF3SHjVgqf1TSRQed72tDLaCnngp9N186dnrpk6FmQxnNN1Tuodw3uKY4VXfEAcJhh",
  "key20": "4L2LPBv7JAW2nARKfoFaY9s2voYoTLY73dwKHZDKr3WbaxALPn4tgM1o8d57TFa5LBqp28eaXerwuM3pwGEWrkVD",
  "key21": "4boF8bnXuwFLc2UC5sHtNH7eUm1rHm3SZsYHS5tNsXbY3eMBZtAaoy6n4eehJ1Xam8RLVXbrQYwD6cBToqJzfgdo",
  "key22": "M5hj6iE8fQrnivYmVASjzvL3RZ71ZgEmTmobntAQgRT57wxRzaja32qVRMN7SdXymKy2vawWtjrMTrEznj2wrSk",
  "key23": "qPoCBMy4jPH1C3LZhBqKsvChnRShrNxe8aT8njFx6wuzKi9y8NBxsqaNVvsMhYdANeuT7RhnmG89HMPZkrT1oUq",
  "key24": "5nL6xc6yb43MfjANU4Kc4mxyhy97Cx29d5kChge9AHfzE3PDynnpKEhgagVKzLkEvUjAtQsPJC9PZ6GF9dertBcW",
  "key25": "5k3jiLMJKA4MLGZni2Gwue5JDCM7kMPZTaUPk6fPstBzK4jEr4bnGNWMfUuzprULZtR18x3Au4EgCQwLzRf2jddf",
  "key26": "58Qo4AdgkZoxTEzdeqoXCtSbMbjkjZrLsxGCv8CUMSxwGQgxhHTQ7tKuHdcCUCXGd7sYmByxo89BdAwZWs6V7MC1",
  "key27": "4dKrbGPuNXDQdGXZZrgALqEG98YHdxUvtgtqRmnmk8tn5hco35QaQceGQZYrmeKBFsPTbGDPP98PPuJ5QdXcA1UP",
  "key28": "tTdoNdZvLKuXWpA2Fi3pFy3GqobQQqAddX837aV41Kp2AemYqBg3GzuzXLEh89ES16jVmJHDs4VmbH4JGro2bnt",
  "key29": "5GwopVGa454g8D82iMpSfpVDM71UGkm6u4ZHgoHTksTryUrPSAxThrXif82hTHErx855FAwtNV5dgeaiz31H357g",
  "key30": "V3Wg5ayh7CMpqGo2jjyQJFYw97yECnCRr3dNo6PD25KepNcwRs2RaDBf7vTx5whUx81oJLX7qYLQR6AbARJkCFP",
  "key31": "4FYC5oNtmUCoHVp8QyGBgcGinF3deCiZL5ttty4iCRw6z7skcV5q97XeNjaWALH4yv6BNkxzR3a1nu3w1pErEYcP",
  "key32": "52LMDsiu4nWbJXQQBdvn23f6JwRktu4FENY8ozXLYPG7yLCJjj9Dq17MZDgqLkP549anQUdSpmCr1vhBDNqkHnGS",
  "key33": "dHF38VGAcE1rbXN9mvQJoGUBfs3y4bEuJF8rqHXrMVN5QV6MP35dupUmR7wTx3CgvJFuRGhWhFec57zZjBUGti1",
  "key34": "6gMvgd6iRLJHjFQYBqzg8WtMCL28H4ez8wH2HKhSEkNLzHx6mK1vzXhsfgEHgRXEwLCLSXhDQX6GsAxA7rbteRx",
  "key35": "5tTfF8vp34Mr3EHsuQFbvi4H9bjrySjbvQyJTEqisDroZmqT8cvhnbWPuqLa9DjtiftEg4ea7zhD8tbxyrMRbBzz",
  "key36": "2rdFAe9jjx4r3o5GSxEtyDhikRKFsv4WHK6anmbRvqE34FpY4j82v6uy83WVag7gwg1hJiU98SS8jWqs3JeWsjMP",
  "key37": "5YnKRmSDUd7SdzCJxDqxGWNMm5vsqm1bbdB2cpApwVJqHHBD2JpfoFVThxS8X1nqXEV6sre4hAermUri65qMMoXk",
  "key38": "4ceqW8ytFe6Pbe2ZqbFR5f5Zn52rTxZe5RtV9pgrJ3SaWfQSRJnB15tT12j59r6fpFU6ftTHwuqxYnk7CVK3Btou",
  "key39": "2TEHifB5UDVfWFfuf2qhCEGq3GV9eXirKyUf1neotmE89iyiqEqLuTJWPHhWbytnAiHeuo7rnoD7SJphqfkD6KoK"
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
