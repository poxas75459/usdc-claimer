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
    "4b1x3FtRzvhytNpLRtfsAsXpFgdtshJg4zY6jJSi87pnTr567abqUWB8C1zG3J6zB6R3GHJQKukuVn2L4NdoQ2oq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mi1Vkufb3XnW4FhLy2Ggmmu13KWkYHLiVuQrfB5f88iEjWyV9xoEjCj1x5ELFHNVThMWvRfQ5SURKshJbqsf6hg",
  "key1": "4pWavrioNjzin5X9ni3LaaRhmc36aPfQRkLosMj7NzoFbd8uKMjys7LN6fiqVA87h75NDQCgcCCCKzzAcfvXEusH",
  "key2": "298YwcP9paNjVNbvTHd8U9mFbUtWcgbNHTEGbN6GibCanCyGWsueUgiJcotLHeeReza1fqyfuLgo1YJW1qhNFtSN",
  "key3": "2UcPNMFEymBbMk8fA25R2BapGE4Qx3gThJDJC318u8WjbigfmBfhoaGExzxoJYhdEWZ1gimNtN3UydCZbKhbhTZx",
  "key4": "37aTeKDjDxwoV47nLidXRtNKdecfoLymBggFEptzAmuY3r4VP2r93mX3QMDLEC3Wt81bBJWETFAPWDi6vSc2kwtu",
  "key5": "4knrP2EKtmaWnv3uaxnPqgpTCo98gkeeKcG7uBkfz4onn9qJbp4A49oprAStqbySbriXn1z6vqzV8xdMSNnLpufY",
  "key6": "61h2Css5zXHeoeF4Vcxn3HpZcZRv8QuHfbQ4AmnHUXTPkKQ4oenCSso89nvD9uURpqN5zXStPmm71qPJ7tCeG3DN",
  "key7": "28mXKGte97S25RQHrMgya7cAkq6axJ7BpAL27HkuuneGXzzzj4cWPVVZvGhgyk3rqsbYLh22jKajxYn3gdfSSRbE",
  "key8": "4tXU7ri6ahe8bjtubXcVAbJhhQC1sytcSt7uNJ9sM6HVyybzAb3Pnj1nyxpmkL5vpfwtBDFwD81YxwjHBkJ21Sv1",
  "key9": "4o6Ux2P5t1gk9uBizgukbP5yzJfW4uJgQgEfW3E8jr5tvPeV8U96NudQADejJ58VMrMRBto2CVnCMAHXZAho3xT5",
  "key10": "537NJXTkUY3WxCRSvaGv3ndChUs9nso9AA1QSVVrqexqBNCcRuSJ96KUz3NsSy7TSsPzA2VH1beAkxmo7mHRBkNn",
  "key11": "2s4g89BwYBet2dZCwM9BPz6zFAwTtAnUUJyqer4hKutTVswLbw7hksut3P1Vi8pMM9PvykaSEYRPd11bj1qrADMY",
  "key12": "4WgVzjhm5D7huH1cVPx6gmJKzKtgrUous1vAmoxaETbxrah9vi83XoX7vTkQaYzoJVwxbrXXB4oyWjgJQJ5ex85A",
  "key13": "3X327phR7ecKHDUhwATvCzuiRWStx3tSjciW2icfs4d8txxzzFHP2VfsMJc6vCF5e7Qvzp2d69AMoe4usP6TFV9K",
  "key14": "4xiCYk6xJ7wCJYHFWAMD3aHUkKcYsKem1m6L8NjHzEtvp8UreRubEgbchG8GRrSakgvst5qJkVREK3kTuYkZesKo",
  "key15": "525fPMFn4nzLk36mhFVxk3bTGrGLXbRrVimDdckDYxnccvGH4NLTn817v9YiHw5XUAHHpkRbE79r2hh6mBcsG2hb",
  "key16": "2op47ToUX3bLSezRT4MSbZScZCYEHu1mNWka7v7zSxzKUitjvJFKCHhH9mCrkc3m64vc83iHkc2zoSRh1KRp9Fdp",
  "key17": "HzwFanwXATPT5unMpZ2N1qYp6hUvHETsioYEQKL9snYrQKXwxwY9bX4QGWQZZgVRHthNAMCyWUWMACmfLbYk5wH",
  "key18": "YpznnpiLfhDMCCyZhL3VT4fmP38zeexVvhopiqJtxRmnWPbKHieLpcNyJDvtgpBsB2FLWNhwoBME3e35rzuJMdd",
  "key19": "2KLnM9AtsuYHkR2voZbWUCAG346kzzxaVp6g45mGJFHoXEwSQxwYNSAbPskP8sZis4qM58skGipFoWbtRa8WKT2",
  "key20": "4cA7CYs9kfnmfGX2p8UJkVtEZjHx4AWQJkibBrzSKiZrUw4vfT883q4iRRKJqPZWWx7DK146S5A4uprAZzPQCe64",
  "key21": "2h97VD9VReP98rLBnhMSFwnWWFvDtXCi9MT4XyR1iJU6bts22PZFsgXz8Mxxuk3Yq1M6CnVajHtvZYTkmrAwSixt",
  "key22": "5WRmJU7qXvRUrQrd2svfdGV5q1Kop26GkTigJvnb3MMTwqh8kJ9fTARnwcv4AHyCiyKe4ayNznLuWn2zWLPmhCg6",
  "key23": "2MNboz3EP61rNi2Pjow4besbPtKRFqpQo7aH4bd8UGcvHL8ek6SacbQ9W7kx7SQ9MkJnXVgqUJyzvWxL6cNe7mTM",
  "key24": "5Ss4zcWL4ELz5DLMVrzXzgM87PMxTuU8LfT2CaXDPxQmew18PCVkjTSinjPV7y66DNAMAPtfB3ibcREz5CQKwYjo",
  "key25": "2FMGRsrdkx3Ue1U4cZDLzfPqZpaVJXmz79hn3jCoZYmHoCKtFdeMgi46BPJqMjvJdvVWkB7iiFLnEX8jnANEmLMQ",
  "key26": "5RcV6SrKGMaUjaKvvYZBTJaaywW38aJYuSpZrGcSdjSnjCkP6rW7zfDKNnrFUUJTFwLTncGEeUqFkoGsfk1HYtLU",
  "key27": "2vd9AiwAiPKhTn1MEb5xFVkGxgms3i2mrXAhVuXfw53snK82BfRt2R3Rkfqb2TiRzW8Xc5MrJLgzZAr9zm5cfkj8",
  "key28": "5pRtsVGUqHd5uEVHypJnKLqi2x2UFmnmKRPuaxRexNbdx1MQDptcr8FHx1NGv4GgST4KzYArQ5C4AwREgNGWbE2x",
  "key29": "4ST4XVGafgKSmfrhM3C49A6RgQCEsqsxzFp77SiogZ9Nn8cqouVBSPcGfWztAZLNxhoRmMqkiuNJsuHgs3f1qdbf",
  "key30": "gQcAdoi63Y2MYWSb8zepaQGYNc8H8dwkjhCFmsYqdtFqw9D9brCXnNVy5SHXU5K3FJ3x2DaAxu1C3MPCsPd31KN"
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
