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
    "46YEZEwHXpjyfbe89MRDjVEB95SXTuzywxVXN9VWHMMEeRSPQ9KJeomp5agreAmt2oepRLJ6VD4LoqK6q7tydGGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mt4v5YEvLSXybnwxTuCwvEaKztzYaURBFrQEP3bBGLNsTr7rhoZpgpMQwiwJ9NAYA2svmvZHrei3CdvQKmDE2n",
  "key1": "bG7dPVL9evKGrh9qspSHNVdcuwn3Bf72NXskwka28rMLwWhnvpLrBmjZupoajFrybQv2LEMugy9DJBns8PYzmMb",
  "key2": "4t2Km4yjkkE9TsgMPRLRbQbhJHyZq9pZ3GPJ99kxopi4rTiTNoJhadburQFLMLgUjfHP5H76yLxtKTFeoA9i1UpM",
  "key3": "bhoWV2dq1GaKuLJqCbNiVLvyjgb79wQY6pTWS2NtahGSTvNvQ9wxDvmJ6rhMeys4adqhqM7Lsu7Bz6TZ78Sxw1Y",
  "key4": "5d3doa1r1cNJLa9vj4EQNoCRkihBd6y1TsehbqQPA4bexg4yHEtEJewpqUTrzgtCtBrxVb5qWX4mjzqdd8njRrC7",
  "key5": "2YJJXafJ22pSUXR4bt7RWzyTS9DfQYFcS1PzGXBrs3zzLjXaW5wUWNKTv1cWv1MjEM1dShRFpCDW6S8AF8bJLdcP",
  "key6": "5MVHRmQqHQgk97DT89tfXAkmgYoN7mod12NMCpXbCgYKgPgdx6raKACDL8fftjdDAkSSp22bM3RUABJWKWBraMcN",
  "key7": "4KtmSVLLVL44SNuMkpk6v26xeYJjDq4djFjoaBfmmbQeUTwtpgsnCQySAxZeKoStce9j3Kxoj9UmzaWh9eMMs2vz",
  "key8": "xuuT5i4ney9LexMhPrnorcgJxdHZHQPey2g7bVw6akyRnBYdXRr8bZApQxFzN2bz1cv7SPwDjP1g4EN5QDPKbta",
  "key9": "3VZQp5YFcCxeWYPF6be9JkMucn7VzgsTg9jpLEaLAaGNX9m7RknEfXz17oqoozB1jdbyVXnWY8ZWmtV77JPzh4M2",
  "key10": "6h6Jr2yMxXPsE6bt65HwXnVdAhaNa5zghorZxk1ae3od2P2aQ7sWJAkXVseZQZXzdDsdRkVWB33cW92wGEGVrdq",
  "key11": "2CKG8LaXi2urmxtR612PvUzLyTPAL1Tuao7jte3rUKYFxAiMBJhv5ycBzznNhTES9vRGqdzVducJgBBivWpT8bXX",
  "key12": "4EpRvohGSbXdx8e2mKRH5oEcEE9DCBv4SN8c8iqdBqSbhX6KL4PArthM7JT1kxdeJoPjY1bMRs8fbJvsaWpvXiZo",
  "key13": "kwdRaJ22R9HUqpi6oLmDr2Z7g16sfAqSvKcXiy1m1Xukw3TVMAKR7jKGpoBb3E3VbJYPdx8X9UJ6ujpRegdmssm",
  "key14": "4ednvCqoJwZQTbWYVT3A749bUid9nTMN8p4DCH6pSjyA9Ktbwqrpe9NMSEsdT3arXEsqV7MwtgipPghTJ2PXDpEu",
  "key15": "B66rAfvGJVp3G7Ch8HaCYiZ4x3ij7zCJWV2uMWFT5wu4cPfWAJFj8cSfcLsj52YM85rCvQ58sNsoKBLX53tbQYa",
  "key16": "63BkNMrDoQNCSUzz4ciQpFpVaDNdVoreEViRSGbeumaw2k5QTq6EmUD7VJhzP3Rd6CvDzoUo4v1YryiHEGQvnxPz",
  "key17": "2fe4SbcAJ46Jx4VM2PHJngXakRYWuDQZJx3DrhFMWefrJwKcZZ82qx1XRwrfcG1btks2Xi2VXwq49oEMR3zHFwz8",
  "key18": "zz8EZ1H7E4HnsLqNimcxgN2MtmGZhRcwFYHV8mNhQhEMXwnZVRdBeMrHThzr5wCQVXtq7wUJQJHa9BEmAFHv5dh",
  "key19": "tR42cvPWDrEa16QGbX3EzYs2Fur6MmoSFbnVbHApxD4oKbAL7k1cTDY34obY2BTfK2BevW895qdPtfRwgqUBMYY",
  "key20": "35W9wsMsjqNuzatMzsU767p2C7HLCA9jMfaysq7fukPuUp5pQjx6riNZ9TCc4BZBPhKfp4XEK2JzbTMzQYLceZg6",
  "key21": "2Yh89AaUcZzZuu3pj1CbSMHXZyyF6439xt9o4o1pYYeP5UJ2q2CZLJoxyTxLec3xir3DUPELbphMK2UkVmkfmFEd",
  "key22": "3FfAMWMvhtRpFH6f3JjhKPQaY8o7GgpnojAK5vi8E4dkaccVjkUCZzNDEDrNSHe8T8vhpbUQ88UjgnJK3Ha2fugR",
  "key23": "2ZMf2R5nGum5jCDeaPiXq4MJJRMskBYpUxT9exRTxkajL7eapF3WAhA14xpbAsSwLcqigUZkZBtyMjjyTRXoKiS4",
  "key24": "3WxzXD3S11fgoNeoCtxgpF3Gm46JVNjZdwaEAjpnJLHZHCsoj4EEpZfVHVvt7nZSEFVABmF5Rue3ZsyVRqNLq3UB",
  "key25": "h6QHfwLUPeAnxGCzGrp2q7PNLCEg5GLxFb7rWw27HA7pFpuydzu8YfnRSc2d1eoivsvmMGP2EEtmCbfNP98ZFcq",
  "key26": "5jY28Aubw3xRXgsiMS1f2ybG5vGc391yzwJFET5sP65K4TqAgHxuVKa8sB8jEhNvCCRMn4926vUgxXzojyk9Lc3A",
  "key27": "jsLpHjJ3mbfCLVthbpqhUXYSJD3TqEnMxA6T7KuigFiiXjGcpzWnZtR2fFq5PsaUGPP7bixbqH1kK5BbsR6p1TL",
  "key28": "32kYkdmHwZQcRrHQsUEsq56ZpPsAaZUHg5Rej6KwtfcKYJvwmTnwwEB3o6JmweyYswsn5eGEV16gbsEP7Z6irda6",
  "key29": "3fYbW3baunXigKH9B25nqhrDSKVLdfciFrSLfbBzrQpKWqL59MmwmGv1vNN4J7cPWZR7qWbCoWQRq2TfAMoBJFyH",
  "key30": "3E3dETcfKGvLdmbRQYMXdSWXRR9RZdU1Xbcuckqf99vHuES5qjSW8DHrrQS6yzFUaL9tQdwsWr3jjVyVaxXZJ5gT",
  "key31": "5kWfbU2XSVKWbVVvF2h3CuY5xH2kcLFrCnDXeVZhWikTr2RtmYv4C8fy18yZpHFisYrurXwKwxVXmKsutHYYZVDh",
  "key32": "wm8yvjFKdw42rhN1HFFFonKzVeu64hie9Vs84RuxnoKzVVG4mXnWyoBTeX4cJdUhYPfNCFEnRnnJfY5CGwBcADm",
  "key33": "2KxAgJQAjd3hRc2vCHULnE1goEEnABRHxbygKnbnLezYfmPqhanDAo7EbrKkZVRqcedrLUZ93sHUnqjcTabzwm7Y",
  "key34": "4sKuTb5WwdcMjqZG9ZS82o2byraLhonhtT1YqSf2wPKwEpfXNQ55ApV6Ngo4gyebcNs3o3m81tDb9eRFCCom9ZCe",
  "key35": "Q35zCSoHKwQ5f26J1LZqPVenK94DomfQAcKucyzhBf7iVLrsY1Vo2A4F5WRSi9Y5jL2HxJv7RfdBQKKK7f25d2K",
  "key36": "28h2myxe3PmjHHaYrDn8EnFqghKcBNMTDsPUAiVui2v5f4SQMy1kbD4CD2aL3ZShvAuQNFFsFKtWDUToKM3nLCUV",
  "key37": "5snuL4s6pbbYG9TwqLwswJGd6P2PKoGoq6WN3fQrhXTM7pdzJrof7y3o5UfQ2qUXTJatdY8RpQTcUWDmV2UEsuYp",
  "key38": "MKmUDohacaxL4XEzTzMjYwYK3NNmc3Np5rvKosUCpTLJmbeJXPQ6sFTUQYkgV4Kpxw5eHi5yFVm9DnCZnvoS12B",
  "key39": "4S1E2q7kLfrFxzkHe6yUUu35bqUEUur2YD7Z8F9UL2U7gqf1rZpKn2CrX5wQ532nx5Lek7Fo5ENL2p7yGcm42WCU",
  "key40": "SDF1a4tfKXL4oX6DZ3mcXSy77DgjN2uep6dwybs2cjwHcpMq6SQ13n67cqJ8ZniSKqoMCHTrdgPSRe8RsbFM2df",
  "key41": "4PUSCgwHTZjEZHebn84YPKxdk35UcqZMPMUei8FczJSQqEL29wRzUuFmeTLhnSJJjAXbDSssQkNB51WUCd291Xqs",
  "key42": "5ks4eZAVrQofkjNhg4ZRE3c4GzeiAT1himddEHM62hfrHzF94Tb92mWuLnuBpGFo1QKgpNPsSb7T9bSM2V5oAuhy",
  "key43": "w5uX58gCTGC5UsXoH9F65dugpJK96tNAqStg2XNAJ63uRk6d63bqpSB2aHGMD3NSn2YKs1WuBKmUd443geJE5Qc",
  "key44": "46wjrvyqu8KbXp5FVdQqDx9EnMgvcB7JohjtsN7RAxoj9frCwnC3sGpykmAGSeWddTddwvWyKDYuVjEcUAY3sx7u",
  "key45": "4K6xJ1rFgNNGRA9gAexUgs6PdEyzS1pr8KGeTr5aiwJENE3UpVKoCn58xh6ki22UomT2AXXeXaaACTZaUL5M7t1H"
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
