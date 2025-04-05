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
    "3BN5KXjLa7Hzy7ijMmobFU7sJ9Kb6AJXZKe46342wVPmQnsqye3sh8mDSagQRamrDt6XczCz7XsdSAbiuRL9922P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBzFC1cDyeki5k7bX5ymRhpUNpcApxf4yjBt7uhbyqqiBdhmPRRZeyShNUPDVxq7Z6zfpzaqqs1xif5bAbnvUy2",
  "key1": "5X1H1BdH46aZV1HcRNvw7ayo3usDHoJXNrAaxGzofzzJV9LeQNUTfRfAasBx5XgLP67nLQAUki1wQRhBs39HEK6G",
  "key2": "4VFWfVp5Rte6mUJt1MChREuAQfSenRFfpJcKAS9jg9pz6bJFRBwZe7P3XHX7m49VPMmKnEWCYU6q1S9CkcTxXYx",
  "key3": "5WpuZszhmxv9TrSK88KvDp3pk8dcXfsLXuRKm8i9vX8yAJdqmtEekg75d5XY4hUuYzykC6MPJXvacsEDCTf6LgdA",
  "key4": "5sYbcMRd5ThWBuYs7zvJMYCh3USBEys9prPCNmPRs3oSZbA2zYukpa3iABQrGZBzfzSBhS7YwfgqcbjoQYk5iL99",
  "key5": "4uMK99MHT1jowTVDsoKTdSqcvt9HwvtLuo4Z4Pcp3NtyepFpRm9xK479QuQkdoGrxx89Fuo4D12sHGnvjUG7mbs3",
  "key6": "27ECrS7aj1Xr7E2iJMeMw4qsYTMvAy6jWfnd8Ljh9r8frgUvLCrSt4zaFtT8Tu2J66VVgvGEjC9p8L2JSAtX7fnV",
  "key7": "388bQABA9KuAsVAEHEKabBxfFR3MthZfPsG9Wy43KfQiE7cmU6yrxMKqoT5MFkRZRL49CgdGJb37ev2Y8XwywQXh",
  "key8": "2XMFWsT2x4AnkrqwYAq37xjgGNVeeNQy6HpNrEyWUXn6XCazANdguxsDe8xRmtfxmjAN6bNpHLWCxoyjV1NcNUj9",
  "key9": "2xP1pZJzy5PGo3WzaV1u5SJqHaLccesaGCCR1Ed2wg2GSPvJBWYoe1yjZNt86r9fukay2Pu1EW71nobP6VdZr6WD",
  "key10": "3iH9SertjHcL2VpDFpRpvBRi2nEzUbRthQT5aYXebEKjsKiaJtN2aSDD7Q7Kjp4yw6QCgNBpan1hjhr4r6pfwBNt",
  "key11": "TLdbZzBiConYiFoMCbP6Lkwfs33KCwcj2wqxMXLowDmgkQstniSruoyeQ5YhaYQugRtvUieBys9NnnEMnAck1WC",
  "key12": "22QRL5kRTmu2N3ihXCrnh254Cy9YnHs7EPPtdfBDJxDYimCFuZH3VZ57drMv1KVgkg5jXsBUMSgfCD9uHgxD3vw5",
  "key13": "5Hn1C4ncStU4qAuzvouHthGqkvPnCqERwhvaJ5zVpeETvLVpwSRqTD5NSd5qMVFTxVgKNoG8SFiFJSTu6dp7PHja",
  "key14": "27YtbPBBKhuwgDwchmj3p7vNchbF9cdUjTmE5F7zwc6LzLHyozR42oWWr2dcfxke6PiTmfM1UJrAshPCpCCS4eGR",
  "key15": "jhUsQ3f56FwdBzuYVf7foHtWVUtKbzz9g68kAUAWckJ9peWUvCYty1djkfsAM3xBVT2kZZT6RKSMcr1NWJoCLqF",
  "key16": "AVXSFNxVVoH7bb8XLCkpsfwzqtgxGvAJQUcmLwN2aKuuAi8ytwzbz5Bvy6WfU7tTWhe4LXtrr9m5naQ4E4nzE3H",
  "key17": "23C3kS59NqKvxZnjSMfxZeqYeTP5dboPA2m48TfiK12xMPfqLBa21ox3oHNim4MTQX6buL8Pb19snySKwZbCBkuG",
  "key18": "NE14rZq868n17RoydC7Q3oEnqbA1LKk6NVtPqrPmccTry9nWHJ7bCBoioWzqjZPaUnBmFa5MhvmbBUvYxTs9YHc",
  "key19": "35CtqGYxsQSS6KUepNe3vRAqSq82yvAHs1BBiJEtcNhHtzoG8viUR2RUdGdPEF8VeoSfiQw8gQA5vMfA5Mibm4wH",
  "key20": "2e5vdbUFLhmPMsCYJ2ENXxweHEp2KensiwDCY3Tpvousobp2yJpHK7zftbEv3QHwgqaJsKvUK2A2PnTGNgAUBSqY",
  "key21": "2cBZS6icTaZciR9SWLR1rq2VvmLRXcm3vtTto4rS3gmHkkoGL4DyRYnysuVKgc9KBtGn66SW9NWTTNwVUyNWWhWD",
  "key22": "5cLzEoxFYrSFa2faQ6YLhtoDCQMAWyZ1rFVC434QEssZFEZpr9NgjVNZ5Zn6pYq6jhHyEfhQH8cMgfM7ZiH43gme",
  "key23": "31kgMPWsyNE941f6rtjVCzYsKkfUvR9P7UaVwmAG8Jk8CDxLN3DLryonebiuRj9umLFUDUqSfJ7w7tGU6jznSPyJ",
  "key24": "5q1d3zpZVSfXVih2Xqj6m1TvEi1YCFkqZjhaKjw6v8jxZkghPHG24SeJj9LacxisMWFMGvA4MhXujB8VnvioWiD9",
  "key25": "3GDRnzacpvfspyHxu23ydmxCGA9hcpYnMXJGLd9hEJJ56K7UTiFejeatoc7C2kjAtaiGnngAdAhu7ubva9FqAp4S",
  "key26": "1r8QT2mUJ1676k2SAMcJVkXfwKuCDiJD58WkFFeoVTpLUMzzumvGob2Fc6dyWdfeCoorz3SkB9VJBhEgJGoaH7g",
  "key27": "2qmS5WNHk9SbiGZ9bwFWXqFJiK1YsYuohK64nCuJJL3TYjqgrT5aJtX57kUT1ycxXMC5Lv7FZBTBGnBdBGrM8a31",
  "key28": "3wT1nFMH6REYvGHhmXWzsMERufechFnVr1F14DQc7w7VPr3arKL37GYiDMKtZ2aiy3wSjJ1KgVWAsvX9U4YDzdDC",
  "key29": "5tAKsyvgLY12T6X5aD8fkSo2Ct3BGoQ8LQ5XfhGuPGRxwgEG2wyb6bNCNxFH9qhm1bkEhUu1khRhd9jP6r4L4AEv",
  "key30": "4VMTCSfx5WfJjv8BKggpRQuQcd5appp849KsdAP9NHRLiT8NJwoqWZSPLJf1drN7kaBYQgcL5AwLiV4AkS8GMy1c",
  "key31": "2ZY3jWbEXuDz8bqhdAXAFg97hfnysxEFZWkMJJWQN3hy6AvjaGLYt18mzzjRkX3uDMV937TRMJpUvvPCQ5D6874z",
  "key32": "3wdAgdgafrS1tgGGjU2aptHsGU7suoTwtYn4ZnCAjxWj3r2iQhExStzBXsF6pKqQQ7x95Cckkhc5versbT3ybmJS",
  "key33": "2F3GUGJtg8ndjCK4az9aYjLeCDbhbCeqcXiizDeSMmUKJxk5M3dZ5N6jQyt41J1dCUB1ErtgUnN5fcdH17hzw4fu",
  "key34": "3fALGs67e8ZGFkEXsXFwNK87PtDganyCQaAMkgGgmjBJEeR9QqKbTJgA3tv9sdLdpigjZRGJPg7S888imWc3HmR8"
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
