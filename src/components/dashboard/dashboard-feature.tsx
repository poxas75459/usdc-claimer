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
    "t5pJjH6SBsJjzdp9oRQE91WxcZfC8AeaHepWpWBB78fXihYRdu243rztqsN136LLkTpfUiAi1zVL2kPAuApBV4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tizpZpf3zoeJHzK4pwKomd1cekY8gHBKjKRXEzvozwFJ7L1QwhuVTGeF6criKPfmRFwyefbu92TSCoiZf7rSvjC",
  "key1": "5bQC3Sxou98eMwAvcwbDr9h3CvGL6VDZGteyPrdC3BA8N9BAofhaRswWyfDtz5oxegR5ycgQ2YtGqQf9Zq4c17f1",
  "key2": "LSiSg4biCsThxFyKHRqrtBfviCCmAZKhg5EDX7Nd8imUjr3KaKtYMPDWT7i5zp1BCdGL3Ln6KjvoemmNvTVmjMp",
  "key3": "4W9FNyBFEegqw94HqMKTn5y43BotsRFL17itcV6tyu9WjANTKSGh2grQQsV3JPqgGorjvQQYT5cSXG9TYE96BQJu",
  "key4": "QmUB1kDoKjbpGnD8kM8j4y84eC7NCUuHm2vUbiiBzUsnKrjQsYu3siAWCBeag465uwve652SdHhw1SEN4tCGK1x",
  "key5": "VtEhftMD22qVgKipdri1WvYBG1FwHqDcLtPUzJS7xbSU4v31C7qcX2hz6nEx7g36VdRabcNbpC9B8f6gCkGe2ri",
  "key6": "yvFmHw5GT3Q1rSF9hevWKHDmvqhAhz6JN71f48ZSwEhgvtp3859vCjGVMGHoy8GbgfK3dVw4X7gFqXVcAogtL4t",
  "key7": "4VXbJuSszpSpM1QRCw8GmPzK9rVro2XTup49AwEryCR3bXCQqBZ3dCYnFUQoQg1erFCoWktA1v36FdffxXV4bSZX",
  "key8": "2SdnCYBHdvu1i1E7PiSjnJ6fFdUxiCW6i6B7w9ytRqgEaK4b626Y6PAnLGe86zwgYKwZzL74Q3amEBCYYy3qAq7d",
  "key9": "26BQrYQkQXwhHxw6Xs8oK2UaQzCe8ZgjbpF5RBLCc2aVoS4ysKx6nJZMChrnAvjYjNXMLM6JhB2T7DFGLgzvbeBK",
  "key10": "2THMgh5bLpw3uJMsV73z1BRgTeeh6X8iSyaCHxYdCmXzgituUWvAPtrBYgceXGTxtPciG3m4bcVvXApwLnizcEs3",
  "key11": "5Gvy1nAunod2y3sQ4T9BwvubkAtdGMthrRW8SrnmXuLpMnjZcdx1YhaWKeW7DLGXPt2hGqx1vKPmfG61vgx6hR6C",
  "key12": "hrT8RxsJUGXnt8wtEPJt7j121Qt22yxKp2Peb9t8xRNkEb5YYiJG25VCXifLvfxqDnHtLaDTeNa3n8pURCC7LFv",
  "key13": "2s3ezkacNUYBjqGFs3cSxzZxC1f5KUH1gvcDpdE6BcVP7yDcHqCyn4KGpRyJahAzv27KSPgHiBkom8ebdHrJ8Sti",
  "key14": "5RZqKZfjNzn5PQwwuU3i5dsPzHzeSrPqwDyDjymKtxy5cko9XBYEWxz4mmJF8zknqLq7p7NwyZDTCMz6F3uhBqLX",
  "key15": "3K2qt5tk4iaC3vQnRbQCViHPuf41mhszxcxMfGr4FWQXkR2ErQvjN8cS49uj83nynaeKBAfPpcamjUg6ahrdT7H8",
  "key16": "2YhoNEhJ1W6CQ656RgeE66EWnTVtQHoTkpq6JaUuFcMaihgcjPYVbUp8pj6aQHi8sD1oJqvoiR1Qxj1Ud5PQg4nx",
  "key17": "3JdhqbrpRFBL2sru45XB6rcmpWm6hXpkWZ2drmhhyDGG651sczsQEcNbjn7TmF3eu85vTXGmJFFR8wo9kja7mFJf",
  "key18": "LXrftes9W4eLoiMoFg5vjZnzbzRC6nr5DnjhYpNRqzERqKzfehafo41uHF9C5zA5ChcvRUTv1eiokJ4X9fqSREb",
  "key19": "a4AeX965Q6PDhsdQdqP9n4n3psoHy51tfHeFA832JpgyqsCbsW1VtSR6fPMrzTtb8uYoFN9Skw3VpQBhRYTQBTu",
  "key20": "5JbTgzjirnEUmn7q4Jpi866NP9bCXVVAzAEZwTepuUmwvvreQehpbFAPM9CmWhcWGKJv5xtX1LCRTgvjRCL6NSzv",
  "key21": "TkSsKdYJP3P1M9SRKQXLrT6uYTyUoPgS62z1dJDpEvpNFCrCsgnD7DJQfNSEFAyB942PDDLnhrsFGhZ6rAiJJB8",
  "key22": "2vDCSBsMCZ1bT51xWmnsz7AfGuybfCJhTGACpJaA6Rwe79bp7o4uLAwYSH3urTKDE5hodkHQnYFsevnyorL24GcV",
  "key23": "cHVyjWCvkApBfCQFEJhF4bDztZyNmLsTpJFhWNmu3BVjXrwjV1PegbJ7YU1pZLsG4BHguuwNhzGEcRdyYgkNn14",
  "key24": "AG6Fum3V3TGjSGj7Yy3mQ6uihSAe4rrXQZJBaAnVxMV5ZAFS5x4DE9tDKBvNWT5uhwKVzAvCWgFXGA8VVhULqLP",
  "key25": "5rSdHswLNLCrkD2YX1AWHbXjQrsQS5FdMnsiV8HS5XtE9Xxkq87hcCmAMKcT8AJVnUd9D3fTWCkzx1dVGzdTkPt7",
  "key26": "3PHnjRMki641rWJ7sFFrtKj32KwBr82L8epjACgmcr3wCcTksGGjG49ayrqHAie3WjKaYbXrED4mo6Vk8uTETbKc",
  "key27": "5SkvCXA8SZwuGTmsYyLG7AEDVApWoPdiMUXetrQsbgwF4Ya7EFJ3z2F7X57iisRNoFvbLt384ykPDckh7tXiN2jh",
  "key28": "2MYzaUrLx6uAvF97K6TrfRBBEKVSdUmEbqAHYnUYAh5R1NjpDqkyH2XHqBczFthfdHPd3GGsGhooZum2MpMJAHpD",
  "key29": "46v1wjLkAbcYesZrGn18MLrH4SDbHpec1N6K9Q5saoiCBr74teieuj6oyJj8w8JnCzGUmaeX42HmBhznMDu5e8QR",
  "key30": "28w54xqV6uJ4WRMMTc6XLvxLoaJcRsx7SPS6nMJFu7oHwkRdSd4ehsCCAGPNfHY2BsaBG7YXQg6dzQ85iQaJThPz",
  "key31": "3j1SXay4hrZmNCmdFEJ7TwPwkR9wiYwvCMmsN7kDPh4E6oZBLTbTbtaWshhtSrcmtwLDR4m3LMEZEwWfhEVuL98N",
  "key32": "3awzUh5RzQkmXC7Npuajn1MSrqB5NgU2Rf1ay8Y1MfaeaEGR3E9yjucW74DHCxrTTHeMvp9NoGgbjcQsB7caUwyf",
  "key33": "5eUMRQyUNc7W9R5f4XsRfhj4nkExCHhMYncujszMYnAEoMrwYyHRJQUqVy6xRMz3ADxTSoQf1WcxPLfvtE91aAd5"
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
