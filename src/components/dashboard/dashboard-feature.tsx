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
    "w6eNVe9zXp1rGzYoSTHFmH8gMjbhcBCuDYVUhNvtVSepZnB2o8rZtudiNbiEUcEpXebA3fXYYwSjkrtz1qsEfYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtXrZuGe341nmRvqe2HdSQkaTXFihDEmFbvbThJf7E2uaxHzSpAVXuWrKyPpgHRcoy8SuNNNQKN4WFyE4sYZZ3r",
  "key1": "2NCqbNaFR1p4huM9MBZ9YTuLRdKNZ3KdpDP6JMj5c1dZaTS1wSsKuVCKqvrN8zjwCTQMGkufNTx4DZAZvCPks5Li",
  "key2": "2Tgtjrh3jnr9z7t5FxGFeZoZpKUbwKPes9tXNXg9js1R89ReP1rPfjatakenuzLDmdtVZKDPPgDnfyJGbc351fnR",
  "key3": "4Mbdtv9e261E6pfSZ6Cw7VREr8Nz6SK4nqJjJhKiYwrtKP2PSyGxxAPDcG4NThZVc85vkPEx4c7FwS47M2WRoyLd",
  "key4": "4tpFbVWB57XDuZJjXuQ6rE9UNg17GZvK8GEhgwzqqrxSeMEB8E56rRVnmMKj3i71vQS4SfzbKXKpiVtJRiYZn8zY",
  "key5": "4aCwHTV3Axg3uBXbiwG4rwY3YfpfMsWmKnZDehZH9Y5fyTSxgjAYEQaso6VFBqvhrM8b1LNV243mAnGhz1SjjKZX",
  "key6": "43mc29gqgxNQKGP7Pe54Nyenw6Hd8Fj8rhXQWf7jEcZ5DjQB9XXMmPTVenbPm9kFkR9DHLpCvmAA2VBHfGyJUndS",
  "key7": "3F3162q7ufMMqr94T2P3Lw3PvksZDLyYFS4hHUe43wFcHWMDzGk9JbCvKUjQjWrCA2S21QxiMcHPVo4tza5Usp1p",
  "key8": "TvuMU731bvLMdtU4MSfnYKhDfCYhhoBjfkv8Yfmx2YCbgeBciqtSATeCvVjqEw4anWVPTYt5MZdxRD1PbFXxcii",
  "key9": "5QijG2rPLRnxxMTxMpMRkkD6rgnzTeVqybzD1jKgxvQemJDuHfr9FsVtKSZkY5rSjyiPnvrBFVSYEh1FuRR6Kmuf",
  "key10": "2SuVW9ZzfkGXiVVzvChyoFrQELwHppsn1kVLcmpLqupW1kbT4DM4Rtomy8Rxou6zek1JCZatZTGxKQVoSd4ZFJS5",
  "key11": "5qfaXNfdGgfhL6RShW7UoGDw33Qu775M3zAzJXQuiRYSU5YsyyLNpRzpXACDSTVTYny2jFKzPpLF3u38kd9u1mG6",
  "key12": "2SaMSFqaexj9jC1BRYcxqdLjmL7n9jSE7D9FsanxJpGTi54TTEnc9haGsayUmPUa5r5ixdWkboD4yPqwkzBhzZSZ",
  "key13": "5Fiwdtu7bzx8jVTL4ZnvJXC1Do6rfBi1c7t6QJexEZ8xxNR1idxF6yrtbNVNNyetdWghP1rYcVjVMD7Xke8R6dcw",
  "key14": "uGbgBTck6AyvLC1z2g1MSr4sn7Cx4g5xcJtR2zENjuAqdx1HQmrrBN5fJjFmUfA2ZSN61haJ3bzSRgAcDpG5kUb",
  "key15": "4kq4K4fAZ6fuBcEwgkL2JnT4MbvtWEvcrTYnEsPqXGMPukz1LERqSWRh1zXVbfAiCJe2TdS7tr2gF8rdTTCH2nS8",
  "key16": "62hZGXLvqanZQssHZXr4Zxgxzvv8iwhjJc89mUqYNdDRUCggeWNtgMsxjG32XuPSpzQhbSDvQvrbKrbz4iiThRqU",
  "key17": "md6p5xr29MiYphCGe8kEwRjPcphoZB3RmMuch3o97r9t7f3Fad3Qmv9JYBwMngpFMY4Q3MYVpyuDLfsWFDM5eAK",
  "key18": "3gUQS4i5sz8eaLxhLe1DDa6C1RJhgTpVZxKAASZocYLM32KDme13SMLVVmvZm76jHRY478qn6dFW1p1LfYC4aLjo",
  "key19": "Bb3yZ4ZRSFo66cseePFXG68WHSstbNTPcyRbwess2PH3VX62kLTDze7pwmEqCFzqiDMrcHBXg89Zfy8qp1TSt6u",
  "key20": "7VZ35jpesYYbp2cRb1Vbtwes2CHUMacPYEyFG8Uy2XY4YckMnFKduc8JqPaaFAf2sbgDcSGzqEMNXLL5wA15GNi",
  "key21": "3pvQVZ7DftH8xe52dUfMQzRPiEuDVQ3sG5vQC1uwsVroThcFZVfxPhSCyR7RaQixQiE4bHWRxDt9PGuymFLoWiVs",
  "key22": "67RfGTZ2FzboukkBeJ36ss1bKrGZH2LD3k1p11DQcvydtt9ish9F1HuDrPSZUSF7tbrX6T6pHF1WcMKwPXsmJznG",
  "key23": "2x1nUVJ97TRm5kezFPZQygVgitRANc2CmcXFjMF9EJUwCKCissoKTw3hnhgRaD7qb4ubigMrGjF3MsQLyy76yGy9",
  "key24": "47dwga3uXPxUqvDxcNZwfvvZjRwPyvXGViBtKgQk2KU12BwJCNJnLcSyHLHSP8j4ykufhdEbxfoY9wDhaca24jhe",
  "key25": "3tH5u9TYNgtdydxnX16wYAjXvs1FH5ukCD4hpqj4e5iB6JLAeTwqTofdi9GCpsoLCvHarWos5CUk2XyJcPGEEBkB",
  "key26": "oMzfvbuUYGTgLaQnCbp1Cv2Y2GgkmRTAev5gUzbqhcrVMBEkYwoUVu2FLE8TtSnNZgPv7P3uHBxjshGNhUQcAcc",
  "key27": "f9Y4FrpYuW7nNzm2NXLGnTrVZNEx5Pc5jYRVqDPcGPVCW3sQQJkurMBwC9rshHtjRVYiQSaDqcw2EorRhKCP2j4",
  "key28": "3M9NFCYfpeVN76oaGRZMcgQzypKXpmnh8bypauTWPtarTdJVicjuC1M3YPSMxmku4777Jz7aFfsJCR2c3kynL7G9",
  "key29": "4SDTAy13mSaspKjjfbiVKrih8Q7wU8KnPJ3zD3WQZmxyc8rzzgAMNfybvBR57NGeve7yRnsu37YqNSXTy9w6CMX3",
  "key30": "37X8H2bxMmTaKL6csCdUxuBnZBveTVGpUTnLuXk51HHpv9tH3m4ufdKVMMJKXyLVGoHLmDnjGKDg73ytxkAwsMVs",
  "key31": "5PVoTwnTckxwRCyP5nxUvKWZoppKfTSNdAd5e5WEfjS85faYNQk7pQQ3GAB5eUb9kghr4VKBeB1ttRUfFQs1pr2p",
  "key32": "3yiDsXEhA2VMfxmAfw368faTBG8UMqx6skncgbTpNzn6pTHQtc5w3aC4ES7u3zw567dLt1EP1wEm1wC5pxNrgGSz",
  "key33": "KyHdkeWtjWcWJY3euNbjFsbVfiTvbn6UBMdGCSGFoqqKcGKsjsWwC5josWWXBA2fN3drzWai9BbMTMA7ANDQHny",
  "key34": "4RZm6GQuTFydjUUKw59zeSAyZwtX8c25v9H54P8T21PwyossiBYK7LXnmeJbpkYNQNa4mtZvEXkiycdA9VsChPtz",
  "key35": "4KJ5nhkqzsgq3pZv4HGZDUsLuR5Z5YMGoDTHm8tF3RZ7kXHKgVL62HvZxC7Wf75AWpFhiuNtM3j9gwmzy8fTm73t",
  "key36": "idJej2zPSTFiHvenw1XtY1d9xJSN8j3zcjCdoCF2jNTK5W6JU3kLnsRTpHLmXyZA9ANzycFjyS8KpPYnigwNrA5",
  "key37": "S3APohfNC4zw4RVPVReTULM4ytPTx3dnuu9MFA9DCL8EQmKtzi9earGktGW4po9E1w8oD9fv3QuZdWNszeSDGEC",
  "key38": "5V4DBNzaG2gUkrYBmufPnTgSbUFRiVz98zXvncGusLJX7XUm9rx7ESMM5faKL4Vk2cNho1AUrP2iKSNiVSenck86",
  "key39": "5nzoCxDNLpz8Rh6yEWw8Vr4DhtdkxtzfiDqZTMF3QtNmj5px1ND9A568Zduo2Xub8V7yBxfEaVfocXDXQUmwqRcx",
  "key40": "2rPhpqPYWEUuceHkP2W83yhiHvJwhA5knsGxKkEfcg5C2wQFxdBQUtezbJE8sU3FxZmXdPSs9o2Fwn9dAPef89yP",
  "key41": "mn6ESp3Fbaku9zRRvHcVKMz6U7uYZQTsVdJTF2J7mcNUe9pCY8okkus3nhh7Sufr6QTzzANfqd8dx98Hc6J4GVp",
  "key42": "62W5utNV1jfk4dPd5L75S2hDMSymPJ8Gqz959jtTcJeaLrtzheqjAtNq7XPjUrWoy1YRdkye7t47D9gGS99mpSdL",
  "key43": "3jsNuFT8srwjm5JbSSku6Zd7RyAoZ956uWPd6xrcAKzsKp8Msb4PjW94KhoVuV6GB6xaiJW6AsfEFG7LB1JYevbu",
  "key44": "5hxhfJpLNvbzMsPJ6nAjmj8j9PvFxpmLoUMSEbwCd1oyKCZ5vj1iyhBgyyaJpfGcELN7shCb72XH6XrNxZDrUh3e",
  "key45": "2bYesb2gXs6dKxe7BmoLXJ8c5mZcCYubfYLn2QW5XSB78TzY2QhHzAm34yEw5Vb3N5AFyeTo3Mw93V6RZ9tndimw",
  "key46": "MGbo3CqWyLjroFq4kVtjrQ6aSZdJ86JoM6bZWcFKVBJ5SxxjwsW3UrqkiA61fwM8HFFGHMWCBQVsr7rKZrsydyM",
  "key47": "5EEB6VKNxYFf3CAHAKCfD52v1AcAnrwBg48JncNLLXjAkcxJK6d68omWWB9UfcmRY81foKX3tQTz6k8GkQUir6DP",
  "key48": "3Ww58gfnNQp9vWRTjwfkq2jbFiia682oB6brCuikwr9MZUDzDxKxnh631KHtnZsHvQGY17LjfikwRtLY9eTGLUGe",
  "key49": "Py9v5uNAdpgr82WD6fbg6vNFRY2WoMqeroYg3vsQ6tVntrBfR5miFtdM9HqbaUgQdHHtcSAsYztcPEwP55wW3fi"
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
