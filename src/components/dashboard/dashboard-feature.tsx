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
    "DiMLmi8d215nBVZRapPWHhPjyqYrC65QYKfx6tkQrBA7A5jnSQGB8o5vYL2rnPGLZDR59X2VabTJ3M74B3FQV1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46cMmujDCapecPhXyuXnSMhskp4NTRweGLBrMtytQsUDSrgedyypLYoYgfjsLWhq6Yv6qsxjRcuMf9vmrtSy8GUx",
  "key1": "4oKAQKDzxkH5pcYWqj4SVWjt7L3LX2DqnTyHeueo9MjBdAuJ9FzMvhtAFGkRhGMok1Z6pw2rtJLmKC8Yke5jd6ps",
  "key2": "MsFJFVbfueF8cSWBPeXvK3WQfjLm2z7emncDpfxoaxFePrb6pFKLmMToyzSwHVm2GwDzfnrwHr1EgRtucVaZoB4",
  "key3": "1f95Ek2qrv5LKc1DPPW3VYJe84ayyuJdx8KjfhmXmvuh3J8NFgDjz13Q3agtH7sigLrWhxSMDcgaxNowro3G4Ao",
  "key4": "5nEdUW8C491v4V3dhRbeFGoGVLXwBALj32tuEG6EibyT6HWBvzwazDmbuYXR7CTMDQxL4nvj1Ak9b9ibiCNnEdVh",
  "key5": "56GkU1A673s68DQCTZkgoFV9gtuLYPoKHRt18MkWDz4PVgCn7hztLGxVz6AXQDcvkK94ZzxU8H79mRv3Deuik7nV",
  "key6": "mYRBftgDhdCLMafkEp5VjmFQo6eoft7rtHhvPaMrGzpu1efzqmRKwXtLtVHCSzMPySSPhTuJsQu2oaNrjSCvDFL",
  "key7": "2YtbSJy4YpDCWyoLWAmniWtNMgwhVCQc6VNa8CvkXowpBYamiCJQxPx61f5EB2nMkkX4cCi2gWnumo5BowH8sYfM",
  "key8": "5HLmrJogXSpaQwPyyE9avTLiMjbq5CNn4gRLBCAFjjLLu8vvhBk73cLJED4LVNhzSZ6SuM2AV9RvEgSVFXMT3c9o",
  "key9": "gKmoewDJsyRogJZeHeafMsguioQxKRHTzuNv1bQP6gGcKbFhXBURrBRQpAmGj4cazB78PVYfpbRgnabsCxDDAFw",
  "key10": "2G9o4DADWQ6oPZQ9NByciwVoLRC6KXp3ArkeXVtrVtcMnf86jMqgbheE5TKBcNzehn6zf3tipTcZiuDqpDGCEL7K",
  "key11": "4vjcrDZjmRPtmxBzx5wraHWNvUenPf19NSc2Pgu6nb2xXPPj2CeBUnifDGsZy4eMGc2hLbppjeyrZQZnFgYwzKMg",
  "key12": "21kMBSBkCYtQc6VTzSEiQ5GKKHXUvHk8oWWxcxyjUP5qXFawUPVtFcigCKJXVeYc6BBpRc7RbCJNttrmHi6viy2R",
  "key13": "5M1ULh3y3tJCRTkgPwPLDTEoj7ve9EjW5BYehTfiQw9mCPCQJbrYuaRRf2kCFwUxu5sAse8XP1YeMo8yoaH1TzoF",
  "key14": "FAZst6t3BszU4AmPvuXsap3V9d1u84YfkkEtEQyThWGEWtzEgbZtDE3JYJ33jh9LmGowSQLuk16qRaLKHtN3CXe",
  "key15": "3w5ywVaPyrFLdEUkvqc8f43boPoFGohY8xS9Kar6EyDjxuH2whp6wxhBUyxASumL2BNz4mac9rL6EbgQK8wtPfHe",
  "key16": "5wvfrjJaYG84gD96KEe4sFuK5jCpbM9BPGdskZyE8z3ApVEEjGMG8VzrWbp8zQ7394ndNCu7Spd9fbVSBAEUv8C4",
  "key17": "41fXTr957WteHUsgyw1ZXH3TvaTBhzBvzPFbxSfsXHNC6M4Lj6U8Ejz5nRCdhJPXUghTkbB2ZxXXG15zAXQe7Wpg",
  "key18": "5xWjQk5khM5LstHAUEh2kTs391wsmTqTbGxSdhjWFtKSrhtCZs5ATNjCjjc8ZnxKsUS78NH13XxJ5BFPdzQEUUYM",
  "key19": "3HDVu56AUqQkcGCwcBreN6p7Z6wA9wpdyGeCrYDGtQgovnV7f6aq2zrS98fMs71KwYQMsRngENF9HGTgE61s4PnD",
  "key20": "nxYEkagVC5fKa6YPF5XbiHQTrEjZHY4ku3b9QjPDq1XgaaRshn1BJ8pjCV9zgDmeYBJY5hpNnJkq3vVKaFUr8e2",
  "key21": "5i2LCqrCE3Q9CEyi2ZXS3fRUops5vvUhAoQbif6u2ZkRfbBjB5Zuyze8BGiiRMBeH9Xq9rqiFbZfBaeajwjvjZQj",
  "key22": "57tWDByA7onFrwc2dzQcbqYtbwRfJ4uqF6YtE8U2X1UwYTyznLoz9kEGeYiy6APuhSd4qzMNX8cM3eWRLXhw6FVF",
  "key23": "3tiiiogNJ9xa3sbNGNKtYSVufkLHfzHBwMmoBBTzZSrr8kqbVG3nFxpoaAiqtAHHm6qcQdZxNN7j9B5MLujf8Tyo",
  "key24": "Jgvgu8ZCDvVxuhF7T8isGvr1zuuu7Q43QW8S5gF9dQLu5Go4H6orr96jVKhMKVcrP8Vt9dnjVzTLtCa1TW5U4Zc",
  "key25": "2FbxrjvCk17CQWp1Spp6UJs4m7iNQisDv1edPRfT8CW8HreMm1j6tqTTV8fMCUqcmhwz34jagDWWdGWCpLngC2M6",
  "key26": "3JPDL1ocWCiNKikZTMUGEvbnEYGrDtPSMfgZaNt4Mh7kbQg7r8816iyngTXtKpSMXNo9w9aGiNZDb7wjikeSMByi",
  "key27": "32hutWLH2ggJQePwY9mCZJGtSoYuPFj41mZDo1Ze1aLfCmxBAXRhceQNdmtCnM89SZHHSeZJqAn4Tk19RnNxegz",
  "key28": "41t7whasiMzS5Xc5FamYtLR3VYr6FYnQRdV44hBZ3LgafNL6GLba2h621y7AwrwcZWXnPJ9dtUJNiaUvZJe5LqLJ",
  "key29": "5dFymroRnmN1JSmidSSHNTR7KcVtvWPa4sfR9oyfGoqppvoy9LZNRzMLjvHEguWJNfRY5qrhHEst3EAtYvHedLAs",
  "key30": "5RiEHWgJGS5DUJzmBqACNfZQdfS2tBbfHdxq88JhHEyRUUZBVmVEUVDtt89JweNFCnjdRFRu8T5pMGvGgM2N81jZ",
  "key31": "5dH6vs13bVGCnbkpAVJX1AUFAE3zRhvG4osdBa9UAtrLMJYQYa9vzKpVwfNLM5vRqpjSd7mYgDSFFrKX1SFoEosV",
  "key32": "5C5bjVkYfLtaEPrUqwxxm98adBD57rRzV7jDWGvfp8wUaP9zhvxuJSnUPwoGPofEmVEUjrD8WXCu3VXHAyMSWHq2",
  "key33": "39u9s2qo3C8W4YdJvcwHEN4g8UE6XnyGpdHqTXbmcJK2RyBMUCvXTGDUcvzKeWxo5DAvByk9grvKBTquAwt3soi4",
  "key34": "5SfqjTdE2EgUoafkNSrjV1tGuh2c9NdNi4LdDkrnuJQBN8LWhuSrxXwBLNXCL4PfPqjhj33SqTkAZ5Vfj24GmZ7i"
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
