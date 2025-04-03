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
    "2ExoaRy2KjinzazSAZcUFVjXCVexUJo2pXFmnt5TwJJoZXeG2dJHdZGjuyRj7grMp2tXKWPcoQDchXv2ydfvmx9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGRtaTUgoAW62B9UK11JxqdBG3mZxzRjpzWafS8eZfQ75gVqckD8Hf5XW7z1rgbgCDyXPsGVDz75bKJUmdUxU24",
  "key1": "5mboXpxDShP9aPUG2cf7R38vvoL11yddggSGnAbsuE7mRn8oFPUkCUNcBRdW2oZFAiraB9PmavfbUA1UDxEFktpZ",
  "key2": "4fDsb49eUnVNWtvzdVFcB14n5U2c6AJ9GW3PoqEYNdbGC7s8EBu71ZzGjaBMaQihZeWm6iMyo2StLoNiCPfGGVuo",
  "key3": "2A1dMj9MQaDxixvfeESUkqznC9gzn4he8TZK86Y9UcEZ5X5bojDNjefyzvN89CPTKLAXvUcD9Ttz55nNd1RbWhk2",
  "key4": "2YuQq2eCdNWT2jEBj2VpHwrQ3941ZcMZCw1eMMKSmyGhPTzJ9mRUayPMdKnS5TXGEoyoVLxXwqx1JMnrTkcLhacp",
  "key5": "eQXjiosFGk6yEyShBHsyxb53aH14aCtGr9hBv3UNGCNm3QK8QwESNRGZ7NqyyvV23nmxeZ59Lnf8UddNPNZZPcY",
  "key6": "5NCYrn5VQj5v8YZb3VWn3Ecu3PfVvEuihmT1JYF4KWsNa9eyFCskUDqZgMg11SGLmtUhmtuP5hBbeoEHcfN68ykB",
  "key7": "JPV75vdMA5YHD7y4bvVM1kPAfEB4kGprHxdFh3oomeiWjiTTzEoaCYR7AVX3koG4M9SmszRYNgtNzs6CiWkbPJm",
  "key8": "3x5v3kCxChqtnX8uLdgVLBbbDcwGgakUT9iqjPyhvorjfehStjzZCY3YR9cRhzkHR6kPeZatce1miw359HJoM4K9",
  "key9": "3TRZ3d1sXwrjXdDFrGbHb3JaauHLLdK7npDhRxhEsahk9Ni9qFUbhxwcYgufSL65jA1YscqpTW9G71GYusaBeDK8",
  "key10": "32NBkZfmUaMVTaoY1DVhLzCQuJEBP3mjWJyerUpQ7zXj7nHycFRHhB2BfbGYX2m1oEiAs1bMQA9LonFzxLaUgUQM",
  "key11": "3EExibE2QZfKMzYUNkxTZpWgMmQDw1qzdqBz5hzin7mTkx3DYShnDR1dK6qcMdgAJtui2gQtbfayA94Zm4rNHicB",
  "key12": "9xUaunWY1rUGkWv1cSBgzfHp2Ahv9u5QfCc3gWephevsYkvWV5gz8EEbhTaw4JwvT3xGxBZnxq4ZUPewu7ST3Wq",
  "key13": "5kacxfY15heBNBSgq1hn7s2n7RDuGobSszwyztZkz94j5fFqQV6x8Ejub9BAdX6KKuA5ubSeyXMS4T3sxC35i7oC",
  "key14": "M7AYLveMuKKzWWuD6eo8eh2Yvi81mKJfo4deoDAZ2DWdgFcDxvs8CcfJ8vs7516HP5ZVCFf61Xs8g5QtdgD5FtY",
  "key15": "1QK24HJZZ4AnoQ7WRLbZ7Ju7u54MkLNqHzKx4Cq3wAwyHTZeVtLWEWgpogjrmWZJcYofK7uvE5UPP3KwBtx2oQC",
  "key16": "GyGGoQQpwM1nYFtGkNk92R5sBQBDRn7TiJcZtnbsZ81BqYGti7McayT65t8eFmLWBeaqA3Z29KFCQk3s7JzktMy",
  "key17": "3y3ptxy8SGkVhHxUjN6Xs9MRsFaKbtb6izi8Y7WTFZ7GUaUrTPLkEDnsMwCTcuRPHhmsSHZ2wxtY6zSThaqunvaU",
  "key18": "342Mchjz7xbAZeb7J8dNz1jdbma4mFauxCJWZkf2uLhQG42b93wzofuSym4wtKT1Y6ZoCc83BFFnavY5HMUSEHG6",
  "key19": "2Qinta1aZrdUmezGu7QiC5hMdmpq9FBn4xDukwESsMX27AVEuK98YvVB5mX1iM8EqAPw6Tx3m87z2csnuW5VgCuo",
  "key20": "3vgHeR4tCUM3qApK1xF5cAgdU6wYFLapJbqsVZA9mApu21srGe2VGjEW633g6gT1b2rp2zZZ4WvZAQxnfPxaE5RM",
  "key21": "5Lpyi3ccGoupjyiJYunjYUWwb4RKABYKF9rQsX7DEHHaaGMjpbHPq2AopvXPBNoHjtEyXKu1G6z6BoQDg4c2oY9D",
  "key22": "5FvYECKWGVJDP9CTQ5vMw1rLARsSEYQM1edzw7DaJXyL2RAzSftsx695hoSUHeQMgQgNVvgrNtcfwadmPNkER48W",
  "key23": "2FqFzYgRKfwZTM4a7A8Vb7UYkmjHDaaJGi41Y96Yd2CjjatgDkC23k4JpawMvUuwmPrgw6VKhFN6enNJkNbk1zfn",
  "key24": "5mipELxLxhQzGy9wd5EWsKfvk6oaaZD6PG4dpPUAco2pXWF7678N613fz4ar6UtsgAkiWzAwDQ2AoRPNRyY31cix",
  "key25": "5j7TojZPNLukuVscx2e5y5552HvbaBALNhVJqK2EEKh67EJ1uh2cDTruD3nFPkxwwPsEBXogxLh9RUmPCn6EZLoC",
  "key26": "2V9TG4p7EwaNG7PnMNU5j79pWRbbtH1rmtYgUembygTJfW7cGtvQ71uk3mSkE8cSW2bFaV7cbRB4XbXyVenR8fHU",
  "key27": "3UdAUWgruHFGxx1aSbdZ9Bf8WkbwU1ZDU9pgnqaAUFYqDJV9PmogaKgovfeFNCQDYboaaMRvdYRh9PCfcCgNobBo",
  "key28": "4VSF7xsw7LvedR6dRvS2wMeSyV312ihjZQ115jNJUMDutNsrgcCZeTBCrtfECJy4ghkY9HeMJe87voQGDtLxdadQ",
  "key29": "47tjtofHGdMV3CnZSz3ZQ2hmpR4JQgddqfbbsuFVvXLtMfk9YNXbkVqDCXrkbBopegiWvLBCbmxMmFE8Yv7syyJi"
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
