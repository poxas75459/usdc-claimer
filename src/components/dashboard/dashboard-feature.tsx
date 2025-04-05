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
    "sKUmd7EzYKx4q3257XgFvWUHe2eSZCjNzpwQAUC59ZyCbjNheeRJNhpAnPASLM15VYZJHEXMBGY5hKN2x75kr57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v65GREnYxJmES7gURWXEoJhUZMoXcmLxyYiPRvohEkBCczSVsKznduuSAxiWCRsY2QoMK6B9szfTjyoNSNgmpM1",
  "key1": "5WS4XUaiqBBt8B84LaHdYHtfmSuGhsj8s8BVh2uw59i5QMkWC5zfXNkcRHBkNN87QobReehxqL3fmWTdm4nWJNko",
  "key2": "5YaPfLbJ9tedwxXytjdVSAtLK5pnTM9NcqCGAfWdb9dTWpNkAoT1XU48BgTLNyFHxPn6whSUiwsaNHuqrUSw3zJr",
  "key3": "2NLhgsy1g5Qmu3C3vtPTZRGcGbKZ1VHsY1e7JCRgWNaKV4NSaUPjSSfRCW2qFYdf6ta1GuWH4ZL8C6Wza75sdMr9",
  "key4": "4GpFxHdS6eiAUyTaeF9QJf1mLf68j74VcNmSMicToBJdGop2r1iGPY9rFdC1iHg9hsLcSQV1RmxDpw5Nf7kUuHBx",
  "key5": "X7QPT3wbPBhqdEWNFMXSNkuMuvELSBNKhNx6jpRGfg5XX9PR3GBXhe7tXyjVXkyEcevR1uNLrmf43Sh484QCAjH",
  "key6": "5PQRub1qHmXRjBiLsWUe87qYE2Moj385MQCvqEMdnTevp7Wf1mLURszyAND3mPRR63SMdDS9tmZkmHG4dsuFhq7a",
  "key7": "2Muqv9d2mSag9PE2ihebBbe9jMCbJQaeY9ShXteYtdRiZ1c1oW5QPkZsibf3gV7TM6iSEyXHE11hgRJnR39MQcRY",
  "key8": "3yE22yoDfadvpwscMtBKscjcta3TGw4YqnEdKjTnLuSH7ZSL5JrsXX2kaoyVLcTyBB25MimSmb9ExbwTwvyTvAqK",
  "key9": "cGcRvHwDzL132U4eZoHfrPFi57X1VA91yYHNapgmb2e4ryMnBFQq1UHjwVhQASubAYPfcM9hWdYZuN7HCYHDjcC",
  "key10": "GHttk5CNdhPfQ7mxQJZJ7wZcSSeE4FvtTGPiSTLHc4bQ2XBZDLvzYNCrxDouNK4ERfc1fryT9ZZ6kJNXYYNzMKC",
  "key11": "5SxuXCNtZJvEqKbUUPvu3fMHHyt4Yoh2qZWiCPq2eigUEB5ts6cLBo2J7E9HkXMZc6PP698UuqJ48jKMgfVfiTMs",
  "key12": "434vW2YDZNLxYeSVPb9itUbXEs8bpMBZgFDYN7scY7dasP3jRmKvDZ6NUT9JQcy5118seELNvGnZ3GMYvMCdhnqU",
  "key13": "2bnFnuj6DT4sFcNsGXQcLDG8WLd8tBpYkeawxq2oK7hRMZKudwad2cuhxGHgFFXyLV3Ppfanjc465455qewuCetN",
  "key14": "5Bk8fH9ienApMXEw5KQdBffLigL4tnDZ54vtk2akJrDP5XYJ28vqvronrZ996BffoaNeZ4pF45PZPL7bZXBS1mu1",
  "key15": "41VNY6dDETDspim44ukZtTsUAhYGCqwMQLjo4hWb41b5jqQi65YTTyWj9hiKkQzgLFfU2L9FMv7Bip9a2LzMUQX",
  "key16": "2ivisDWKkSCuV4WhNxdpNfwqiNkimF7iMCya8ntbqE8mkXtycPnkqk1zCyZwgfgsaT9Lvds8zkveaQXqfAgLHmCW",
  "key17": "qamNtYwYu6jHVJtv4RwUbcwSMEx4wfaj9EeUwqMcyjLLABo7zqp4PYkR3LiexWaUSe58H2FC48iDYdHpek2sn2q",
  "key18": "4veuYZrMisXYoKq5NXi5kmUPHomNccvMt8A3DcejmAUfvchKGEQJevDGXgBCXShf9RUfVqBw2SyfWAcpGd7xCsnb",
  "key19": "5jdHZHF51ZZg4xHh9xHuGcknZtF1jjxRZ4EgnecF5rZj1jYcyvvKyahN7UbGdCprNQsCX4VM2JEqisb9aGaXFvUD",
  "key20": "b7pjSbX8ty2YLXnbJY3mZwBtrFJKypCnoQSmiJA8Vrn4Y4iyvbjyUVcwFu78XHAj5Lu3zkVgBzLZ3LtNc6RJ2Sv",
  "key21": "3mqcJWiT7Vza5HrkK9AwRXoFqPdHhRw2v8MAqqyGnZcGU2DKknMHfXo3pFViDyk3cJa3unf94SsFQYDGTg1qZkaq",
  "key22": "2d4UjJGQsmDLUgYjjTmgprzHerKzF3gEdU15c2B8VUKgq5oX1n7iUDcW8rYC6QdZ2Lr5gobjNEB9ztRZPsPJaesW",
  "key23": "2MQ46SJXRQm9rKxqwpCE8eaaeLRTiJKXQBLmD8f6DbbfJ9GP2kiYQqMAsopuDJaj3gY5rj1Aaw6BwAToBrwCn9pP",
  "key24": "5EAAoHBJ42cZKfGApbj17hMW16o5348U2Cz3GGiMYnn5N9YFk1VnadbYSPEPfRPTpqkPQux8NhpugDDf4SHdhHK2",
  "key25": "2V6R8229rBcfrVoSMka3spbUiSfQcW6KCAbVGKgyGPo4zK1L9hNcokgJbcchZqgKgd9MoBK3t19B5nBvSMcVebWR",
  "key26": "53uiAgyJMEe34ojir4EYvuKRomSHPcMXWkN99CiKoyGyxYPEUFviztNBGfFPNT2gppqFba171erAEvNwmx1cwdx7"
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
