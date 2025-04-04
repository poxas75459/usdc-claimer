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
    "5CMLvouKXM8TaGC7WeHLNiXyeKYMS22tptngZ3wVFJmK9yPMQrvTq8DDyiv3szYJRSidTLNwjLxVcfTXyeGggS5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edfy2wEGU3X6aNcEP28C7PXyab6aAkoYyxsA9m7CgDCV5STowYcLjTHzt2ZkDcFDstBMNWn2WkKqFD9RN89oQhT",
  "key1": "5JYR7A2DtyJypczNT9QUjYrBvTukPxrnWAuB8ZgQnzpeUiZdxjouPrV4TEFXYGCB76KAAFeBYMnGxERNQKc34Ta8",
  "key2": "48fNJtXEDdw4eqtHs6Px5eMsNhMp88vV2ZDHtSHLuTa7caHVddcm7ZJfgqoG963BUHkEQkbcTFAA64jsyjJUiPp6",
  "key3": "3qFYwxA1B7GEL2ftVe88hYduMG8caa3HG3EZRPLwZADvF5Tw7Z1SvCbzKGTyrk5JUQFgJ4aojJcdVdKEJkfVgpJk",
  "key4": "5mCndhQScTDVWb71ExTNSDioetRe8VDGymdEeYF5D2jLqy6Q4qVZRA2wtAG2VFAhR9EyHofeeKRrCgpnGMnBPEVo",
  "key5": "3gfsjtGm1fjFsd8PUirEbqd1GwxdPhCvRmfPbnmjy3u5K1Epn64oNbsZ9c93mcdWxuYMLNEnN4iVaMNN7WaXkb2H",
  "key6": "3umUk8X4dzwNSpC2hAXFgm2geec58RxJWzx3jeyYuB372TUJxzNWpLTcXMfkxU66dhx1GBpQTs83h5EvEf1XfHn3",
  "key7": "13Zev9vYXTichHhGWZvd8kpsRroP96eeEALTcWkX5KZmoDTGJFsueFyQiYmqMhdd4CPWMpFQvF8eyBk3Siuzfi7",
  "key8": "3fMNvToB4VirzUhgHeXSxNjxnZMuoMXRWMDaAzgPc1iVPNB8CMDg7LdkS1LPRTf5Ub1MgTee1vXUkCRS8zxQkt1G",
  "key9": "3rhBSJt7Qx77xQ5a7tjtCnd7N5xJ1z8jmyftsuSoi46FQwKYkEfrSYctqxHDV4PLwHviw2WdHFy5PD5E6iPVfdzY",
  "key10": "B6PY17KqJ3q6i1n8Tt5BF8P9Ugm9E9vzxUrAj3AhFHBbQi3yMKj4hPGiQm4iMJrKx4gEQPmsZMjDqdTyQsBsqAv",
  "key11": "48LUhpAznfH17VTfvAEBTnDbeaYF1rzi7cz5onGuQdcGUyAWGpMho7Mr7LKfXzFJJiFxftn8ew4jyj2ZegreZYiZ",
  "key12": "3PEkis928w9mGBin8L3szQdzXeWZ6sLubRyynAUmUXYMrBe1xLYrZBN7FMGGeTQU24UY98ZZotQoRWGumaGyzPvw",
  "key13": "3DK46rcTUFFjoDxD6PbQmR68EZCK1Hdm29UxvGUmHwmFmdrvmkTQ7bFk5oMN4PoZaq7ML2ckh5gP9Qp34HKjfX9h",
  "key14": "21UuddivNo48yhCBPukNCPFm61uVHM7nMxGB1RHU52Q5SipuiWxfkLW3Q6VKiBaxDYTUgM2rQffCMkye39XVxtd2",
  "key15": "2wDFPPRXGo7zJdTu8UsevoLJDUYPRCnmsjJHdRW4Rf5qu94bNdUMEpAtVYyf6Bsy8YgD3pHfYpoMJwdjUXihUrSZ",
  "key16": "28cK2qGK5UbpKoc8bpgzM6N7cJQRbWyoR4jmG8so5FFru9MaeRRLGk6ZQ7TePwG4yLqNonMEWYuRhb24DqPJFsUn",
  "key17": "5Cdgzna6yNoJCAXX2bvTAqBx2eV3p4gtUjCan2tUBCw2hXkoW4crQPw5ssUxCYmdBqQpAMqSJ1ugfxVMjZkxTd2w",
  "key18": "3CDXh1bJHPMVjTUuUPcMTixzmUPCz4DRHQ39MEppDQk4VssXd4hAE4v53DPUPiMLWXczS1rZaaqzyUryhMtq4Nzu",
  "key19": "5XeTh27BidUoCihzwGs6VBvGZb6PuPvH6PjC1VagmiiSqG4GLMPqN565se3FsJwgSMGYpr47qXN6CSvbQPuyE75K",
  "key20": "41CoTEWxrRzzNqA77L6JT3D7LEyS5XLieKTa5txoUnxUDkU3JvA4KDkGJtKQeCgx4zqi6HXmw2rVxTP9mRptWJXV",
  "key21": "2eBnZNog24YakQdqESzGF1VizAembQDfML56JEt6frjY3ZCJGGfLEH6pNmvyPUuXRAYThjpr2TWbUiugdfHVLaf3",
  "key22": "319DxTXn8DYq48Hig7Uv6YwSYxGzBSRnBpDARZAuGEe3q6nK2wcxxXC4RFhD2EUJKFryzr2u6hPZEAbJ6X87FP1b",
  "key23": "3veYZhrXtbqa9LkgLGFSdAmc3VeRSiErZV2Wg3CDJPeKUfZrbRPUXbUvGq5QvUetPnDnyqAZLQqqBh69n4K6iqFm",
  "key24": "4tRxLhHBa9trU4YYVyVXf6Pmu57ZmnHwZxXdeLTK69rwwjvutwkd52bn6XrVgh1gUB7sChusHhb6e84EpWZzSqAh",
  "key25": "2ezsBR5Hs5rbwuF9qqwwD83cghAuyrHighvSDS9jqMUvMzYytsuZ8EEi7orqCJD3rz5qqTLt2owNAq2uyQboSJKH",
  "key26": "45buPbSgrcfV995QEnKpjkqTLrPFgwJzQiC1irrnZFaBqwbu5U9D3N7u6UcF8m1STDEfMLsnA83jobZS3Jnwm6Ut",
  "key27": "6aAjEq6wRbUEj35Go8xccoepDrYr1vH82m6CvnwUs6utBvH5t2ySLAbpF5UgpCbh6h9QjCgFoEbTbKvKm1RgyEx",
  "key28": "9hCt3eXy7CJgzsWFBvRSqNCafjNiQgXxVdvZwCH7sBQkiPdDFhhhg38g1kvVEUctis6diEhF65mQDpBMc7jUBix",
  "key29": "41RiQSB2ZyfqLwDvR9C8i7ujX8pZEpEFZ17g23xzxc4JxYde6bezSohgxYW9NVRzQvF64S8BbYbUGfayZ7aZNw9P",
  "key30": "2cpZRLiPrBEmDyUwZihtWb3qZoSYf8pAp2csb3Q3mD93JmSUCJfhHhXsLiVTvn4bf7n1tPaNNVn8H1GGcCqBUfgY",
  "key31": "27KfDqivE95TBWM6bMAZrJq36i3dYNPs89xxsMFKQgZNKdAY1QSd3aK11wkP9eoFFwjmk9yuxtiRx2NzjbtvMbLD",
  "key32": "4qAz93ggK8Qax37APKd5XnjmoZxYJ6kSfoWhsp8LD8hKpLBJLVSTWKtqpm62bT5YYmPX8558o3BzrHCxgjMuBNN7",
  "key33": "3sEF2v7vpAyFxoxVdbMcuJGoPHYzaK1U994LCqQbxebGkqQe61rcex8d1WMMS7C5Si5kQsyKLgPq2SCMVpNePmZD",
  "key34": "GV2ewub54b22zSCDjZZW5XqtJvhkCqKH6DK5cyPAAvWe8ofUwL62z6Lpag2Py4m6EX4RuBv3mkBEZEVNzHb9tWL",
  "key35": "35yEjREEKnKdSzP4R3zs3LeNC1kLWYwPrqL8psHGP39iHJVvv6GLfBGWBpsxvyX2zgs21ebN7hHrW1YggSuezVgd",
  "key36": "4N6dW8tEPTcn2qGb56AJ1K9dgvVquZ3m9fv2y1c4k8jJs5w9tWB71ig98JNPN15XwEEbnGgmfdJgr2WV4VmHDYu",
  "key37": "4MG7jXTNdNWsiVEqYESpnpf1ozNkH4MXHEuQkKrF2q7VeJLtYTiAmKNZQDoJbCsA81VvwuzACrYXyJa9GwZFc8Xw",
  "key38": "5Wjfvw2p5KMqAodZ11hzds12WkmojUhedjBd4HFxvMxmqPJBWRJjvhbi1LyzAQ1T95RkeXq3jPL7ZaLggxV1hn81",
  "key39": "LHcyzCHqBzwNQtXEzD2qcaCBxSjk9Zc4JNtziERd7qejfj9sbHurMpmKFojR9tseiLZ2zzB2wwgg1MXMDwUDmnY",
  "key40": "5iLm4FWZ4nFfkZqV7hev23xt5XJEVfEvKvmpsUqko22pgA7iLCUuw9AfmzBLNnnR3Eo1mNjgaMSa6fTo7JHCXkDL",
  "key41": "37UwrQHQVT2CE6C4vkhDiVvFbaKPnCPKfKXufRVvA2zewGu6DCv2R3zDnbxmjaMFGKxXvKw9jufDq148c4fErMGd",
  "key42": "3Pg2sQVgQx5utFue5fa2A71w6giZaRmHtRWfFJToDZ1FPd99c3wanB144Sh7qsSweQDWiKaE1kRVCfPsUcr1u8mi",
  "key43": "4ZdmaurcMacLv2pWDHUFUotLeCbRQtinGdFYD2w8sg4a8HBci28P14tZKWxq72JiP9Pp2L8vL4sCoUnhLhVd7Qd2"
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
