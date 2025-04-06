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
    "3Wwm9iuEJMtjNRX4tsz4XN8EP4L75P8cyG9jazxXUQD648ty1kbPEqY2KhiV6FXnv21ex29rjzyBMiUdLWmmQxn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iMdsM4BvYb16UncBmG2NQtihYfjZCsCdaNBAYqpnejr7g1bAj993MbVuyjA5RdHibiTScD2iArApM99Pqy4hSos",
  "key1": "5Pvi1ohmWVNVXA7a58jZWLb2MaF9VhWoKwKCD343FSu8ceDZXC8A687714WUyK3thjf8VL9aWj73WfEZJK3hCGE2",
  "key2": "14ABmvWxS3sK4ZDz9kfuLQU3rXMzRTVngxiZ4Sxvn1Dyt6kH6FF9jxDaBR2PCBVneXCXB5WLdEkm8G2D8EqVKb8",
  "key3": "tdBjDK8QowmU2Wf3MUfwTgZp872D9wSe87YL5qSzCxEDmTAaJxfpE3gmALD4CuqGKJAcyGdZC1wX3dNEpPPCt3G",
  "key4": "2pxvYa3jgcdRaHoABKruyhtHPx7aactmhs6DEUogTULWygkj4HvFF6sBn8JMx7LFMWAfyikU6BcZKBf1T4v7Jddu",
  "key5": "5j1gD7re63esoe3jkiXLGD7EQZVNYGadGM6ZsK5DErjqQ7oycogVHGHHfGUHuPjwD9pNB6yS9y9qCqeBXQrgCGhj",
  "key6": "5i8NYpUa37AXz2EpbfiSQ8usKMFrLccUUdzF6bBkaBAAD1RrYjsDJKJRa2avZfJyLqJPGcUCzXsdirijCEUHyQju",
  "key7": "pvmBfb7ibEtqh4YFeFKA7iHcdW5UEz3go6vqh7mEzjX5omFzcYninmL2ZyZrH8HPmiZtZZA1n3VPABwGQtJ3n5x",
  "key8": "npS9nrmWcirdvweRvqYb5UeDPQqBR5545Zvcixo394oyvMoWsbBHqPXggpwEDk6yAPE6TBKYTZLPfdpR9tesZ39",
  "key9": "214db5BUJf2yb2323knm2FvANE1DpKm2kMHaBX6ZvePZpw3qwRA5vojwE53gRYpPCyWyx7vyvxMH2JobPQPbWNwe",
  "key10": "Gj1aEh9KR14Pwvqr8ESgnxyDev1LrTZTyhPPWSMtJvJtn5tCxLAkJ1TmTfgvXyyU5nRvdZ28GV4kDps51zAhBLh",
  "key11": "2wkEoA8kkmdAd59MJvRbD2faZ2bVyK46rdv5v4JwpCEWiVeqxyKpLrAkE1bujT6Cj3GX6NBhSu5VJhTQFSftSyqF",
  "key12": "5Rr3tH2hFniJHJLPYuSFDpAPL3GdUkg39LrSPFVWapnnGoMejjnN9zapDZEueMZvzNzNANSz1UqP2rhjusrkETDm",
  "key13": "Wq5Q9XSrWCm4zaBJJ6WisX8th3Pp1TC556uJ5vdyre2oZQKkaVnqz2JxK32ocF2L94b55b59nVyD4zTTBisuBXD",
  "key14": "2ZmVPJGyapamN8YMCbPdQg9saBskq4RyEQ7s6vcW6GNhixs1iztDXtkzZmqhboiDfUd93WsXSpX4F1LW8HiMJ2ur",
  "key15": "5w4miH4oJnRZ1HjXEQSi74ptXz43QVttei1Z5z7VyWF2CYzYmq1D9oB5AnoAXE6t6i8MpRzHaX9P1aD95EER8QYt",
  "key16": "rM5oBB1zpugjxwqSWeUCasCoKestZVHEcL7mPYtm8fuGKyzLtx1GdWBbodDq1DXWh8jUFn8MAZAs884q6pWuJKZ",
  "key17": "2vUha3LzsTjX3DmcG9spyCF8uW3x6VGLiAECzRAxYDVDUbwEzat6yWfT5US4VHfoPGvfqfvkLdmqHmYoPFUxCQMq",
  "key18": "2Rh5Mf6RG1XrEpJQ1ZJFno76ZjKRJFRsprrhmz42XtDe7s6Su2tdvP6f6ntrMomba88xo3hkyhBFC2awBh4AGT6P",
  "key19": "42VGsnfgwvXUTvzR27ps5PunEG3pgVhsUnj6mKUAoRPQYuVAH56kTeX4AK3umyPkUa3WxbtcogbMmMSmTsum9k1y",
  "key20": "5LvSetyEvfrAV5zxgS98f8LN2gWJJe6UzEUm2uzqEyLKSRYVxQfZ6VyEYG5jCi6SjJa6anvxVHPdgCkoPi65DD5a",
  "key21": "2cQ2J6ecDZCVCYZaxNgEqBgDK9stGTJpi9rxnoXQZbwVQTjpuSz3a6VtfCYdaiAps3Q94pvm6jzZGYVFwVXMa5o6",
  "key22": "5Jij8h8TeiRRS1eierzhpbzqWRrnstA8djKGMdHT8rVPNNrRku9uaFNkQLMUdJ42dJkFPtwSchXym9z4QhosDUWx",
  "key23": "3dwXceH3t1iPa9ozeeT4duvdwgnhwYUcrVVfnhdZ7wKate5TA22UFRykr4guTNBwFRMHHwQSNC27j3JXx4iSoWdE",
  "key24": "5nahRqqHTsJFuKCnLSB8gaDcwZf4vKi6oWgRkoYCkqUVRbgL93ot4v28cqwKefqdWkstbDMR3wA86245m4npzvmg",
  "key25": "53D63JdLsNYzPmJ5xEnP2cocd8ELeMeptgGmi8H2iT2mo4am7pKLqsb2hnG1SsPYSLKijYenaVnRkd93oeKRYFRa",
  "key26": "4bxhfoipSNuRocQxnJwHLrAWruQ6MYdzZEcca1Sdmsg9Y3TjaEgyAq747FwpuwfxGdDErw5vjCptAQdExgtjdJNw",
  "key27": "3YbyWacCCf1UjrYzCS1uQchHQgPMqeDEVSCv5yqfersnJCqmCEUxsksW3Z9L8Di96yxn1qeBa9xSgSUR8YQN5gC4",
  "key28": "AgkoV5ewivsnbpAz2jmfhrqTdBPSTnUqGC7qMDtF7mXKqUApqRvne4gJtnb2oRScZ5ejMETw7EJ41pBotcxRNEJ",
  "key29": "3tcc3QxNHhK8aUt4wWqLmoj4mM7mdeSnHMvh5MZvW3kbNejSJgWT2Gq6uQvwtv3pPpQz55jJXMCTNtCjhfR7uXJP",
  "key30": "fqcJmCD3ighAtwfcnUZddgDnzWrrMpVNtZyLW9n3y3Dx4eTQWbdH4bKAo8QGnq1HCikuG4QF368yuQt5hs3haB4",
  "key31": "4k1hocFxERuDc3Qw6Lgn2CL6eB6CuQyWstfH48mMsojyXx27BngGaFsZPFp3CiQF9xAKLhQfnCYyLaBso3sY9KBB",
  "key32": "4fpwgykGLR5LizU9uboJMpWRsa1EimMDVsKTVPwv6vAy85cmJ6jPYm4fAYQRWW5xZowgQZfHFm9pXn7Pz2RccoJF",
  "key33": "FFhCweQLysZ1CHCxooWz5DBx3YPzuuB5oaEg9fejKubfufysZUoV1GCeuYMMcqBvjjtqkkVJ8oLTKJ8sYHfhT8U",
  "key34": "96wGqmaeaPyNvhDRewQzshiPs89YJKk9MQVziKoxCA4U6dBNPpEySS3fkro2MmT1zw3pcRhSAqftuqHDFyVBKL5",
  "key35": "5ioFmBjiAa15pNi7CHhdvHtzbcVV93csQeyWmESDkDoRtjsw6r2NgpLV2uGchJ9fnbXDo39vBGpMUwHpe43VP6WH",
  "key36": "4pQeZFVMnMXZUeCN3VEwj73MwU62R1S5uYkNMUzsBKqkk57iskzrAX94bNc7GztBpMD2ozAXAxrCi2nY6HDEgfSh"
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
