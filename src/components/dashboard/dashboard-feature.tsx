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
    "aaRsHWiHBcAMXbSsPESxre21Tb7aKkHd3tiVg2GzpbQ9YLWahoGSibdqhsheQvTCGERDeE9zTyrkKTciqmFPa35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxBZzhmm7Fr6tewoadgN51gVjGnKYs8QLfeHZFKq6gtY4ZSeMjewsxFGEpZK8YTuDkRFtuXtsQJ7KaZsqLxr2Lr",
  "key1": "35yJZXy2LimotzymzfmadUeSRkpbxaWf1MRtVLEkvRAezpGQxwT5o1XoMTu1cjJ6rgURFdNYYMZejNzQ7SLwK9QZ",
  "key2": "38ZcvbaE1nyUmKyEkZJoiypWQ7wcYo7MUfDfeKE4HBF4oJdeFW5BDJtbmC1asRCdqT7FSxTHFNHKHt8oB6FtxPAY",
  "key3": "ZKbyBsRB3e7akjjcaP9pfwn8soSBAuPuo9Ca3vUCrnGZD2DVB6z9DCD9k6LFcBfM3s3vSm4KHjmEAHmBeGbG7SN",
  "key4": "4UQ1uNf9qfhqydoEzGpLQtrNEXo4FQtRsJuGLms5Hw1ZXetTPDn3uE6sZhqfD3ioshxagUQJD352cjwCJwXmpRej",
  "key5": "5fMVSp7fVqByPUw2qAofJ9HinVogeE4QqH9zxdCgbaBqe7BXNyCDhQhAVWocdsH9ygZmQ9bCSRK9JRBqm6UkaE3x",
  "key6": "4e6zFo4hrAN6LDZ3vann4fjEtB2TwsnE3CPf56ePXPiw2CNxvtVCWDkdPVvG1CvL1F4AaGubPha2UZNhv1j26U9e",
  "key7": "2AxnVRzNe1ZXv6EQjp5fXK2t6GTKY3hQSiMghU6MK3HyTfXspkTbXfZvuRpddfraqqCJgdDuU4aG2ZbUzZxh1K5B",
  "key8": "5XhkwhFVZ47NicdjtrpVwjSnMT81qqr2hrNZknkzbmMWrGksK5u4h5sauPeoQSsvCuonCbQfsRaH2Nzr5hspGRTQ",
  "key9": "3Y3rfLMYbH4mWZeUp9urTk5GaeBC5mtYBjpLkstZpnfZRCB7BGggFtD3oGc12N7fujfE2C2AdVQ3Ey61KVZyfYs3",
  "key10": "62ocQ5R28gK9C81QALt9E2oK1Meahm5E2Rn6APsvJwREkuzoemyt6CtsHYYhdSXmrpe8nuJNCKs627rgZxsEjmRe",
  "key11": "3JuJAB1xoSQDk9KaE79RFwmps9zeNLrj227yGmmt9PJMYgJPV3u3p3DAzJHtpFJzU6nXfRpAnHKKWk1VB2Uqu1gA",
  "key12": "46PsE4v7tpTyAUhMgVRahTGSFhR2N4afDMEopS9GsPtqXvafGERSR1LHEFDVDF5uYZ5DWEy8pBsCn4XhAYekyt7w",
  "key13": "64CdiCbPJakyFaLnpZjdHhpQs2jY8oiKTYHsfQGb1FwnnVCVg27brbK7gik58rX1tjE8VVE9QHrSEqMpwXxeWWfu",
  "key14": "UhZ6SZujJEnXbe4pD4FsV46Neti7B9PWhWid4Rv1hKBWAtBYjS5Uf6ASKuHsbe5FWKpDiXbJc1pQnDvzELBms7r",
  "key15": "ABQ1qkuLUxZ7U5GnVQ8KW4kv1P21tPj1Gzz3dwotixQPin57meGCtDYEtdSaQyghUU7P4GosCy2PaReEHsyA926",
  "key16": "2Xjp8bt8RL9HKuR9gZJR6nJRaKbpPt5STfaLf7hfkcDgqoLiCA38ZsSufmzjmRLPkJNvfNBAo2hQcY7FMUnckhZR",
  "key17": "4jxepAthXFvfMo2cXRrY3ZfhUU4AEKiDGiaGcLcujfgKt3WC2SUkTVEaeg3gmnGmxjqgxsKQe6gmwajDgnQyL2Sg",
  "key18": "31QpL9Wgd99LBnB82571z34CoyawFTUK4F9azpPSKsdLxam2KQA8tXdQ86yo7JFusLaN35FYv3nFaXJjJkiHpFjN",
  "key19": "3AbDbNFBYnFU7CUd4VM9USNhqrcMRfh1vRqCxFkiqPqeynD3xL4EKwHPpH8wT1j5KRc24pLtr5ZJKin8d8wyrYxQ",
  "key20": "5WGTsDDqKfaX57NQ3DxcYVmcceejZUqaDo5jeSFDzKBLsyu4zCG2xZ7p7kBXLX4dHQeV7moSD5SVucrELUKKkTki",
  "key21": "3H3KxcEM4MEWXMvJ8HMurkw8tUPYAMYY4Pc54SsQWBkQ9FjF8NMoamS397qBFnh99VDMRLb8C1utfmVkYfttk2VC",
  "key22": "35bDDF8wupuuzADrMrRtxmfzvLcrTZmdT4BK4yC7vSbkFas8dZ6RztwLBVRDFWi1KCSDkfNwc8DifTi22ncZBtKo",
  "key23": "5vswyVd8zt2h3b4vxGZAPMieuWN1E1MTWC4zAxcWDAokx3dyfptgZ1VH339WXEwJ2ds64YTcN9qth3apCry3cX2d",
  "key24": "5fD4QCdz2DG3vpEXDjMBPFw6UuLQSG7zaRxrKfYMmXGCDfy8BUHYpqycZX8nHf6Zb4PHrxcMA9sFrdzyYjey7Rsr",
  "key25": "23XKHXHupncQi2qQSuJDo2V2s81nbc3GPJTaQ49gqvkSKV8oHj3WcBPFaAjvCZR5xfB6GT454iD5Cnfcn5CpshXR",
  "key26": "dCGpS9gJtwv9d237DJjiCsB6pQ1aGMrZH7wVxFQcNpbLmzNgyDwZsmZMPWCymFcC9943oUYc8rMAkkDuZCFQucf",
  "key27": "3m2HDDU3XDxCD6iqkNuzdhzx1auNcrCmYc5X5ScNP5Bnf9hFeJDFK3dhXBxWfFmcu2X8t3ACSHgKd8LF2MaHKtbd",
  "key28": "4aJmisZk73k7VP87vTbikb5sbevWkcjqp9cZNWqHk5HWb8Kb6e5ShVzaG3CV4y3wBBbGXJGq5drU21EQtzUanh4c",
  "key29": "7NXTb8DkZeohYBaMRGum1foLwvQJ6h8yKZQaqAiqRWDSzgY4uW1JJr6ui889mYoaogjD4gfyVwLA2MdV499Zo7x",
  "key30": "2Ehk5idKLnRbDPVaw3tqL4ZfJQ2L2i6cGQA7QVbdMeJxi7GfmWjJyX1be7tGzqC4sLnozwMciP6CgoyAQYXfH74P",
  "key31": "3sPvzoQzQsJwsSjyaHAD2H1Wg73kMMZLjdtgmEFitT8EzNkA1Qq7sgVg7Dbw36JCB7ZyUvkvdyrWPaWfpXwqAQip",
  "key32": "27hDxmGYMjV3bzCYa7Y6gb6VAWM77TKAgYpKFd1Pafn1CCkiCjUqeyXCEwwWsMRQDCcmxwowdjSqnfi9BNeicUG4",
  "key33": "56o1kJjqZcM9PASbMvMaWGirThuk3mwC9ZFGiFGUpwA14L4EfFiTRaVnKRr3EyEkgr8ZaTAEqkEmqK74q2EZMWWH",
  "key34": "rJKfTkpvjMenVejcwNWjW36GoetHwJTDYEPn8UVUHE2S5vLLuqrbJpotExU1AxykkUAm5v9wteqb417Qc1YhQko",
  "key35": "4yDunTYDwgzdsUfEer1MNkCDaRdrBADtUvtHZg27GhMRm5aZjjijfBTrHiWD35VQjSg2Aem4ehoue48aGh4PAjcx",
  "key36": "3LxydmtCFeRKs7g1xVYhuDr4Zppq619BAF4zWKLrtG8fCLAXUNe1u9qrkPXtCKcmn2uuBDAqetzmNk44LzXRBsye",
  "key37": "44NQhMfP6f18mqVBc7iwHv4NMFSKKMCUbzpMG6T7WQMdbpagCF7JdWi18CuveCbXtqHHXbCtN8QmroQHtfSVSiut"
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
