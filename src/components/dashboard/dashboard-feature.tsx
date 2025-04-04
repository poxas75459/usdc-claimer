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
    "23ZRVePrdaEU8gdUSto9EGpNae1hho3MTBCPxjNEbubcbRwqVPr5oiWuMqZPpsgzHfYjydZgUhni5Rb9WogDZoiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JrksnR1vRRUjzCgKoQKqfwiR1ZhCE24KWuVXiRbjRgsXtioKpnNNvTLpgEWDqU3oPqQvUDURrDEhaKaFWWKJw7c",
  "key1": "5A4Qkhhmm5r3ejfYsUQhoDBiThY664z43zZFwtQe6STh46HgaCB5mnz1xHHxShnjTLQE5uAPSX47LVuCATQdvX6J",
  "key2": "2Pn1ydx1utdeeKksR9pwkcZpFygJip2FgvSfuj7eMHLJeLWwnBhtW9xGvfoEdCWytACbKudzMnToPVy4EkN2scBx",
  "key3": "4s8wumSdjp8PQhKTMY3uQcfbb4YoAHoEF7FMNc1oECGoQbrVivn9dQSxZzsfWLZHbbApC1V7YReVDikpws95y1dW",
  "key4": "5HxYedwrNLV8o7wGNR8xhKtYLvimfZzHfmVHjtfezohYJLF6J9vDd1kdN53jUaKeSv65nKe5M8SsTTk5723VszUF",
  "key5": "478Zk1FAa6d2TGLDLDPuhWiQmacbAxYtP67cTKYhUykzoLvpYrMa6jP8yyfCL1wWNUh42xsacrQXymg9SvhfCCPq",
  "key6": "3YMNGC4yyXwHXKCwEaFtmukFEREmLLGrbVzv1hwRxL8qvQs5Hkn1jeJF3QY6bBhrAJeeaf7WWPJoj8PCKD3NtDWh",
  "key7": "2HPMwicmePTb6HQcNV1UVHajkDs7kJxRX4MshV8pNoSqt63Q61RWdHbY3JoxpV5wyyGNXW1nzx2BJ7ocUvp9nL1t",
  "key8": "RJPYyHW2XNnic9BYiKipXwwkv9CubR3sWD8Vq81QaRHi5o5DRMXYdVmyUGaViGKZBAVPNBS2EsvunzsbtD8A4Ms",
  "key9": "46N12kM61UrDzfRgd9tthggWByC7hEnR3R67sHeyu3EKi7DCGJo5vuWemGisM2m8MtMhokGXHiq4Q9SmpBVo9moJ",
  "key10": "4dwKntPQLZqTfDGEGq9FGaKRuiTpFBikwfujc49qQGjGcbhMQPjvE3gEnALR3XR4Q2uLf2iuCkXihXEs8ErPRQfm",
  "key11": "3w8b2gEAEZrxLMbnVX37L7wQbbBqJCUVHsn7JRzNcZkEupPoy4pmLkZVYZuCHM9zK8CMcXpBMipKYW5BPsskNtU9",
  "key12": "4jT1Lwe5DGD2qMvMUs8skfMnDwENFRmmZ4cCRVbkHfgJfSntzQJfHdPPUz9jeRUdBGWtKL6huxuzZwBhwEMwthz",
  "key13": "UAumdR5RAuxW61P6XEABn6P7dPCUKwBWDT6BCb6GLdKTmi3PE2ih49T2r8nzmctEvYP9axDuWdi85kjprFUabEt",
  "key14": "2i45ab1Qf4iYKKPg25dYz9Hrd2uUoXe4mTznTcyJ7FYigrsMbsqRCey5w5CR629Cuh9F7asE2sLcSwnuZHFFH8yK",
  "key15": "3VrV3ihTbnLPCRVisWmWysQMKgBqnAkNkQPbcsqKC2u9XgrFZ11nNFKAExBV4wbtZpmTw3TeCQrpwHqswhMrzU4B",
  "key16": "CJUv7t58Dehqg94Q2grd7EK6mFTDy1PsJSxDQCRWwnrwWnYDZyN48VGTt4oK7gWN3WCCdYVcTMxroBPpzeMkdkG",
  "key17": "5PBw5iRWTTXzvGcMUx6dtka5h7p5e6EYTCDsmJ98XydyqmMhg6FNv6RjVgKPkaJfJapJH1QdNGNsqkZAZcvqmnCu",
  "key18": "4gYQ8qMB7ymuFLWcAabv4goGoRNZez3tZvZJZmMKza9V3h2mmXtwr65N3fat29b6cwJ7YAQVyGxaw55QvrEoQbrW",
  "key19": "2xKaZtSMukbsxWKRLxYvU6QaqaDZCUvGiAPTGfCbm2p52mx7fJSdu6Vkdr2Fm5bHqhotWFKtGujmvyfPbCyrrTSC",
  "key20": "4gKyZDsVEWnroxm7wxbJwj1CC3UgtRtzmj96JvNey1sxtpmerZQNkQ3ZBqfvDPEpoFZrycdvnjvwbPYvzjNgvuMG",
  "key21": "2CRb7EHsKSTWscYo4WVpfYmvBzuAa7SEJPGJmWiQWkicUiNxuSnec8YFEEkkZGcWu1RxdEwPepsfuT4dkZcgnnmt",
  "key22": "BSyqZJEYnPFyv2FZNRqkKVhxrDyvb3eaUaoWfvMuT7QH19iiGXspabHJmHBaNu1JpYF6mkEj8fnCrHhMR52CbiV",
  "key23": "4yK1GFuDV2pKzRrh3zW6RcAv2YdgsDbpmPiuL71p7neaSgzf5yJXApnFoDMCdH2sSZBU78HdFVzxuJkRvdFbuEgH",
  "key24": "5ZVTDzZZjksccJZZKcLqx4onrZKbFHMgpGNZiopqKi4UFSzHiaGDet1PZLiNbLYoskY8ytpTPyDYKxP34s2zAyww",
  "key25": "2phY5DNyQFu6GS5Pz7MJnTeCptEw1CVSMteXUQdEMDxwjJifzufMhmGivHS8f3r8qhA7y6STGiHCrxRifUGoRvHs",
  "key26": "A1akTHTvWDGSjZbA2UG7xVzU3CxLiuCARxWLZnErGGDo1VDpZrJiwHmwZZbFezvhpyZ5jFgnmgva8gVcgkeB4sX",
  "key27": "5LWyxFxWthBbEC4WkV5SbZdpuYK9y7ZjRZgiyc9ZFQhvHopyJ16G9ygwTW1pbDiq8PuoBzRBSXGxX7AAy1kvZ7su",
  "key28": "2cxjWCesBKdzovBuFkn49F2gpeBkj26ZYxqKscjeYxtqSKK6rGwYMceEFbVkT1Xg1fnW6MRZZrrG3y8nK68FneUV",
  "key29": "PReP5jPP6k1hRsNisfWZg651m6hRAdJPakcQ8Q33sycmZcre7JTgRbrLYHHFMTPy9VWDGReEvgfjr9BUKCCG3sp"
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
