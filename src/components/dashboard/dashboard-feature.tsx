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
    "2BDcFoFkyW4Xrfoe68ib2ERJDhegVuRh3CzMgRS3fx14b5FtEdVfkQ7xH4T84QaJzfPP9A6aFcWTTMFMKMu9Gubn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QbCDXZzBhQcwtvz7LT7cjsQ48HzYhPu3quH7yCZJcmuEAMC6J9trHSfVFgJxnADfwgWFkgx6y7HdEYyMqwSXtBL",
  "key1": "QK6cNnhoAZAVTp9Ke9JUdyGmq3vX2SGV8zuQwpmMwRn6vjJPZPFASvxTTfTWyLqeyGEt89qNRdvzBnDNhVLR3hX",
  "key2": "3MTTQ4sUJiqrV4cEwtfM1xAJ8Pxzizv3Ca7HjJgria96omZG87VbM5QdNoiMo4quvrZgLuBTQAZAfXbqYhqVNd95",
  "key3": "e1x4zA4jRfv1Hg8nc3Z6hCcvD9vHneu9Vq1CermxbSb1uF1JYyVU7jrU7Koyw1vwRG9VWtP7SPvv1EQQCU8BYky",
  "key4": "2P2dVULxc7xSQWRCpK99PSdxPUX1drrU1fGdKGWD2TWuj7jP27nzt4F4A5b7QFG5hnQY6a1SqYHQKR1oz1JNYEyF",
  "key5": "2gcaiZq82yPFpf96VEoKhBoCHSDXcu5Zb3iJg2HjS1Vge6uk9S6rWutNe9A7bzJ5W6z5EbubWFvJ2vGPBhvby2db",
  "key6": "2i2waU4QcouD8zE3ETdHfPUu9BGiRyKpjjJ8VHnjCEbFtHnsy3m3qpMT2XSfQM9yeqgV7Xv6The3xUWQqXAbgf5F",
  "key7": "5YCQrcAuBxrTxDu8kYSvZCCbjLXFUoHBeCXsrCXByGT6A7p8qfpjf9uxEomiYqQ11h7pTh2Q2bavMdB2iQvSnhnf",
  "key8": "ZDxLWAMqk1A77tCv2sCiMyN61eYVcVBSnTLxrT6Uz9umwip1P36Ee3Bq8L2oqDHqXHVEH5JAqLGkdxJoayUwQJF",
  "key9": "qowi3QU9mdN3GwWcXW6n4g6u4KFS8HpVmfBVu2GEejC951cBYo21H5jywhxXEhASR3TVBNywEy5AmU55umy2jej",
  "key10": "5cv5QcnTD6cVNEzmyX4MNxZQpnyZpMm4MivEizaHuUjCkodG5B5xPJmDXKUrZ9v7qELGi29ghiPW83YAmB5W5NTC",
  "key11": "2mCRiStY2SfW9m5CgxSmiCDh2sMRtNEabdoT8aZ8n55ekZQYzHihCmm8DtpzhKo8u7wxrqNruge6yin8xonZxZUo",
  "key12": "28SdUExsNNbK897PRLBVHioDAxNyAAsKY4vdgxhke9n22Ba2j2wxW6ioAzAzAEcDcGMrZLDE9iSUyBYJ7NXWwjKb",
  "key13": "2gJNBoQEER8pYVkFUPQxAGkPc3dNWQCqBXuvW6MnAEVpPmDBEhCpgTLZkRWWxBkBc2nf2B1iqFzzqvsw2NPFK11n",
  "key14": "4zhg87BFRNdin14XPb3xB7oaTb9G9CHaJuDe9PAPNkDjfvtHeFJiFzb5NDi2r3R3CM3WajmoukJ4tHMEDsZqcygT",
  "key15": "8Yb6RtVcsGgDFXVRpNvXXqSF8ph6CsHCG8MPniQDvmhq6ZQmKPHXBQV1pSvcfYCgBmd4xUYCQpBCNFTR9RmVZ3N",
  "key16": "2mgTeSWTaZThPXapCWzSNt82tM8QJWRuV4PJxXse7AUS8NZZ2j6FrBa3WAzLXy3tQyy6dZgo6Uanv79CQz12g2yz",
  "key17": "VgdPAGhGC2QUgiA7BKN7LbQsxRKoAxhr25wjxEGN2rKWiPq71sCo7gcpHoQ6Fa8NBq7HmQwnbQew62cjmNRZt3b",
  "key18": "4xUSN4yrF7V9TctL65knFrWmpbCijQ34SJfJktFLjCFoRox6oJgC4XX5UHFUyn4n3wcCF8dBBBVUsriZc6Cyu4QF",
  "key19": "4HCDhSPFkyZREEFPzWrtdrv2o4LbSsPgxB3eoE6rKWUvp1D1h5GQYekJFSdKLx1vTefiSzMBFjgBVonnWDMXaMRv",
  "key20": "nwAwqfJY5HrJzEqjsGdcTQNzJNzTh9G94cVnWWnwXPVXNFsvesCnUQLVi2PgQRqDNaro7Jvf38qgJ1caTaTjbJE",
  "key21": "ywiA4oNvjgZWwTgXhwNKoQXGEiY1hc5mLBbrW574tbeVe4XFFz1AvB1sGi2U52pfPtL2q1Ft3cWTmEkYcvutoHp",
  "key22": "5r19Gh7HSw4oR9o3NSM4awXew4SvaCf4aJM9dKovwpH5tWSrgEhiod2yjFibG5oVYBjMmtoMvKtN6D8DMT3Phyu3",
  "key23": "32XUbo48MsrrWweLcpybPADChvBJpt41Pq3RUSGKNUMntMbg8NbBNoEkwJAMqowtgxYFN4RP645PxqeAk3YPnvZ1",
  "key24": "3vzaKqezeXG6GZmA7ovNnj5wZYXvL576jYnW5FfTnEkaCPtkcypBAyqARFANm1wiX6aBeJayd8szRZCyPxdea4D9",
  "key25": "3Q6W8J1bz5gCFaUQAhqN1zDEHZK5dyWxPiSxtrA2adpHaFVdUmq6AjwaAgAuXz4wdEAnv7VbQz1uJG4J7LFK1rQf",
  "key26": "2BRZ74dY9M7oUbwosfkjD1pjAmbcyjgxWe7KSwCKtfUwk387KS5FLp2JrLuBMnGhE8ZmsvhgUjqXyMSLyXugdkVp",
  "key27": "2Mr3fLfVNm47sn73UannA3shq3hQaebVyGuNkDcS2bsj9jt9vh1GoZc8SA7SK154cwCjGhumADodSc8NhrDmSXcA",
  "key28": "3V1TU6FuonMfNWJGuXse5xW4SFbRHNjifCJtmMBgJeYJCgWqbRjAAyiMETfcpgd2ot3zXNKK6GJPSiUHujHVLtpG"
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
