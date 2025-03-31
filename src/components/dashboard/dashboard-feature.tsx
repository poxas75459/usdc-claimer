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
    "APsXY4eRHvFWTys9afnEnf9vLjAV1ui9X3x7QAHm3uG3RWFY5VNbc5uvNTkqnjspNHkTzZZ1FrPMALqJpBNJccq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkzEwEauFH7oYz6vc15nrejZShaavEub4siZZbYXXarMkTGH9gCXrdg7cbndrGUicKfS3QV9zubDh3Po6RQS6ws",
  "key1": "4LEB6nqsHUu9686oLRrBk7AR9TQVo6Eyg3q2oWoDHyoxVUwHbEAGQ1xvJ75mAdxYaeWSeUCpEoCk8twd16E1ehnp",
  "key2": "4Xsg7ZQkBwx7i4CsWDnbLK8ZmcvPMKsCGwtfnvS1idEVXZLQiRyQjUYQXvuBg1CvcwC17ujkXzAf6GL4cZ4NEBsi",
  "key3": "KNCTHsGP6dABHQHNYsVaYHog2mqvbNxEKqJwKjYbWYPcJPTDV2kvCXDjijyVEY44tduGbBs1TnWZxYNiTErgQGT",
  "key4": "RgASaAn1ChhDbG4bUBEwYrXLvSHefHm5KFhtQM3R9jnAj82bmzzyUatZkpZfUaUG8Rncmqqi5Vf9awb4m8NFjSs",
  "key5": "4x2EBffB5NBMWFuPqMUBGBLdujTheQxEg8UyqWocdyCs7GsfnvNwhXD7XEdBTzyWk1xh5cpM5BVUxESbLMQWZFSH",
  "key6": "2W7Ri2K1C5gws753qvBtFSDBfbTYM52QGEU8yX6EhoXjtrjA9EMYwNNnBhawam5S3RaaVTezou62D37UXHytawjA",
  "key7": "5Ba6MwTxkWyaQDGiT9pT97AZnZsTCm74CLgyWQ5FbmoJ5vLWGyrCMhQiwhEv96nP2pXXjrDaGG8yDSShUFpynSAD",
  "key8": "54t132tnhY9eoD3QxvzjAaTEHguntH6LPPKNHu7PTDohixkbpQN3W46fVeh31ZTmpc7P5dcC3K9oMQkk7dpPjPik",
  "key9": "3APqJAhpJy3du2x5SJRJ99MAyw9ozhd2Xg8MLaVH6rFQw8GkY6Qteo5zzfTEVPnTnbvTd3XSJ3YWV7ahpm9ChhtF",
  "key10": "3XAkuRFBZt1z1msyN6HqVLdk9wah99kjfwTqLP9hyXaxDrmfTibJLvC5yjddYJEUWgRfkHkPH5KqxZdq1re9TzFL",
  "key11": "5H9bFxfNhHq7fSWpZWKhW2AAP3V2PAmjni52bxNFqpvETRg5TGzYJgw9uCAruvJqTwWLxBVYveQ9rbKVLXN2N8hY",
  "key12": "2TmK82jLjimqCwR18Vtx49dNVs3eCJ9ztiLAq9uqFRNMhazDyfmbMr65TEVtsKNkCRHdDFV7VQypK2vi1AWWoyAA",
  "key13": "61eYVgiV6CNzpnTZTkFAXtVWdm3D5jk2HW9gpdpbWmxfBXgj8HcrmcknduUfUe1UMovvb753L2xEhK8qXF8FMo9S",
  "key14": "28sXP36sfHsRSNsd7Jc7SEhRGkc95LMXVkHLdinQk4wPdZ32gtST9BZSFY1V6AnRrsRSHYk7X4Nd2zkbpwYXh2PL",
  "key15": "5KAoopKq2crkn6cJgEbF5b2VDWEWo9topRQL8XSNGjPzCtwJT8pS13f4KsU3jkEi8JbtC8HfeE3VLBPPGfPVHMET",
  "key16": "2fA42XqBkVFvw5nQJn8F46PPKyzuCzNMdC7cH1NDCDezXi4zfZBMdXqqzWFHMySVegDuULZJBYdkkFxQ35bReyWT",
  "key17": "ck14UAUwrvw6M8EEedarHvBhrmXtMsbpoYeEDyqoFuUw8X5hsg2s7AHDbpQ2ZF7K9YdDkAhbCKUAgVrB74JgrUG",
  "key18": "3JNfdu9E693efSgWMrWrh6XdPPMxAYEeExpG2Lob1SzM69njhQmiJ1miFLA2nocrA48SwtX51usuvHhpzimQgNmJ",
  "key19": "3DBWqQaHfveJpuphm7YMMk8gddqBdGhg3DegKP25GvzKw5unD5DVgkKCiptMV9yfXK83ss8fvofquLpSyCGRQ56T",
  "key20": "3HkUwfXPKYmoKQxXTFTFE5DVTEXDx1k7KJXE4PftKYm1o2Hvqe4aijPQP9KPgW8ppmHjrP91v14M1bVtFxMhcHzR",
  "key21": "5RJDY46vayusi1amJtjUD82jZLk2CLbWD6ReCMdpjAz6w6xT8rYTepHd2LH38SyeiThQxct5nCEfkR8x6pRA66op",
  "key22": "Kerxid9PeHb2HSvMz5kaSvy86DhforAGRm7vDV8ddkqmgtrjeqE8pZdiHweg4dmCJ7kfiTDVT9Vwp1etavMP1t4",
  "key23": "37d7Z3MbeDEtbDUUnVDP9YTuzjeBYznfiZSfKmvJBs7QmvWPuuAbEMYWZvFUpCdYgWmxjUrEiRk39TYKEcnoeUo5",
  "key24": "5zZXpHq4Mj461sm6swYNarbmVqhdK4jCHuveBpdYcesnVeXJErvFSMezTjdtMedfTq9a69r6e9ELvALcJ7mFu1Sy",
  "key25": "2Uevndu4qKujU7U61kqt6tEZ1wMTDgWBhJ95SrzKY9uYBfTyoYTty1XHVNQdtPi29A5NrEdhFdMcUvCdW8yHoxQM",
  "key26": "3aCVjbvZ7qi7Z3e6s6Kk7tBHQWP4KQW2P4ANbtvu7oz1pPSqc5mvViS1xRkgCuR1CmiUKXwqEQjaWDkjirYLRtM6",
  "key27": "5f7ZBMhcDSt8S9raAwqCNpiuYHgerzEMdBeQAQJjEfobQtxfjxNUZB6XUZq8Cm9AbC3ydAydLm2eHLSA1xb9mgkM",
  "key28": "3Nu8h8zbhoa43ii9SgioReuqXAUkLtZ7MzXbJNH3fkqFQDeZwpTc7r7C9yxDKaYtg6FcRcVF1qH2E98uLBDTE24G",
  "key29": "4ZpsumQAYYsXmsznWQ7jyTomfXZuFcVNihfxAMU41dnoFPFwxkod7Lhha8gTx2QSNxuZxqKokzA8JajAmbeG8L15",
  "key30": "5XwUkV1LkbX9zhNozyAq4kRC5mhkH6cCsYtfxaCmcpwckMJ9Go4dWhEznFJboMb1wfiBjMNEmGEz46d9zAL85KdD",
  "key31": "4W9SXLFZDPHDva58RNSJxjHcd1nTULPNCajuoRkP5zaexVEMcWkcEGzWEE6j4FSJZuHp4Dnk6zZy4zwMYE1obDNM",
  "key32": "5JDjZXqpfCSXwpuVzE5Nt1NDVL45sSzFjQqF6dBGgAvouRW9hTZsFCfLZ9Sc5FVo36sCyivHeWeGZnKHHMZcnS1K",
  "key33": "VYfyqVMpxMJ3MXn3uPtBvfLD2oF86WgSVBVMt9HKm8y3RKNKPsowi5NdVj5xXEyicU1W3S13Gp8tTjeu6ibbUWG",
  "key34": "5Yy7QWk3trZdcX95TERVXrQNwtehL522UYLQZYrKH7ZCBh9N4sMvVs3odHJ8tkSgDVqCXXii5gcBRgWYNHW7XfyD",
  "key35": "4t3UpCqiC8SoyA8i42U3aSTEEPNzQDcgeYULv3eaKeTAckGRmrutPkDBjRAchiM1xbfdKvHvZELRTaguBNRfqU2Y",
  "key36": "56mEBiurZWSQxD7KyEJQ1EH1hxNxee1S4XPHSJAxZ7cpxqgTJAaFJe3VQSzUqyKVsdxqZdWJmfPeuHaLKJz3EQvy",
  "key37": "4XVrV9WnjkQsQCUWMh3LNSwnJnjwA7bRboeotZ66dQgqTXaGPpSHt7KAYL1kAjUxYGBGjH4B7Fmucj7Wvzy8M4u7",
  "key38": "uJke3UFLfZ1TfXT6DAR8tKbdaGqMx2vPMooFVepyLz245QsXQL71bey1rTD2PWCKnuzUoNZeeDXnssMq4osyzyN",
  "key39": "25dk4xpEnFoi8cR5P7eAm3WSgNKnVW7WGAeyUbXQEmHz3SHahgoqmRcBGdefz1k5jhERGQBqp9ggR1MMf2QGxpez",
  "key40": "2RwbxLsx8jEaMJ1Q8Xq85Hc5NydHdLXfmdhuJ5dQtDwZb3DeppGLptfFHohQUr9BqE9FW7WP7WK7rNVHh1Vt55J1",
  "key41": "4gnbjYF67h5SMreiBaSRnppqLzE8rpYiQANJVxVPeyuoLxEBa3Dwyf5hDCQYx5bzmbHV1mRKLqFSDEsbQwRYyjjw",
  "key42": "msgqecxTJySDWdcahYqqnGihNbU2Sw9HykU77dy5duSBGUoDne1gFQoqjF7oSupiS9ZbLMAZhn76fSjYmxwUM3e",
  "key43": "2K1ftPrbK4P9yyT9tc6pBh5XA3tpZvzxGJGB2Ma1UhqLDwgPhuk81YssSqtDMHgnWPTdWR6xx8Rfs2WrpMopLjgs",
  "key44": "5wZMy3HqRdH9guUhGK85hDKJ8AZ4mvG9w5oxfgHGQhrb5p21eoBCVHNwwitW7aRUFwZSM66SgvNdwY3tXpvYsZH2",
  "key45": "LMiQ1atdcStZ8f5rdErqP9hz64Ts8uScamppQMDdeTZTVo6qth5xPfukAeYRSz2SgcSmJBxvrRhtWohc6mKHWsx",
  "key46": "FRPBtgPDxPCKrgeV1LkwrLnWcU1hKj2T9B2asf2uhcw34EE88ko4VdDJHq4NwQ9GwzmJfPQ3Ddwqe74EZLYcMTQ",
  "key47": "4A3MJbJFYY8R148DLJxQK5nsLPmsTyVjfNmkuMKYGHTnkGB8YS6DjfmrkW8ohgdcdbL6akyDKXKy5KmLyvASqUnZ"
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
