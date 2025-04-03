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
    "FxcnCW3WjpKV5q5b233p5svewMzZLTNE8ga1nYk4qpBNVbKvb9UJEwyipFBY7jLAQe5hERL66MCwDkreTW1iSdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HaSQByrjWUdcmvY1FThTBtXEerZn3mhtESrVS8RVQa44HmTLA2REdXWZwL8NUAjesy1GWvFFqytkdTwySKXFyLY",
  "key1": "63oEpjHxu9bCHS94wkj1nRGaBfPksgJTRgohy4QkcAd53qAUB5LUXYANz2GTX2KcZuWhJjnDVujuYNZCc27Yh67u",
  "key2": "2AA7DY2fnPdSzcF5tv38rCJfzufJxWPmNCQEAjH55JksWeNSyULBTaNnuWvMCMC3Qe78WtxV1d5azwK8trH4TLk2",
  "key3": "2GzjpTs6HuH9s641Jjk25iNMAThGE9yxoXpBn6J3WX3gtDFkyyJv2w2cbjxXWK6Kq2PvtKxiCjD7HMrXPvX4jHdF",
  "key4": "5PSerApfpi89V8AJSXubAi78VWMHSSAgDQbFDti3NspVadeD7ZN7m87EeiFYpdNfoKk6jPZw5gzA3vi1MNRXpH4a",
  "key5": "wBayr1j2nWeAqjitANcxHvSoNzvmmYSqXgXZrLHHPDAkJF2tMKuovefPqqAzmHHcaVbgvv7diyPSe9v4vnGLD6n",
  "key6": "3ebKd5Beo1ACHkAsqM2Ne9Nk1Z3ehD7AY5k3Fia4xh3gpGtQUAWERwSF71V8aBPF9ECH4VPpYdNR45duTTaQ2hA7",
  "key7": "4qm2TZdtnmVt16RjxvR6vR2U4vPMA6uFUbYXHkpZwgXqPBUid5u29FHbLAntRwJjRd7K5ZRwNYUvro7oXTfZNUr",
  "key8": "3WxiE5K2UtZPFKVqsWtKEccgsSkusPa7drRWxHdN5rwHFTceosF4ZByjSMSWTRsPTd6zpQk1M7yRsWfiGrJaDGP2",
  "key9": "5sYBTUPHVBsuiHhM43De29rr9CXmKXv9UCg1KwFEeHDFUevbctbjNNtj9EemBBitnEmtfPqq6N4eiUW6oTPnV7JF",
  "key10": "3e2G5wwcpbMbtR6GbU3LJ4J4BXzjt9WvK6UVZzmLgG8RPSw7B41iKE3qTu9z4BXZHRSjrHbzcb89Tnnpj1nHfnqc",
  "key11": "Xjswv8q7fjTT3Sjpv4LFDSzaYPqptjCJQbEgwsxinC15APiBGaiZWr1n5LQtV5G21UWGVnJ5yWR87aSQSLs98GC",
  "key12": "kcbxoAGPY2sSsxf3AgjY7umAppkwEAgm8phSfgXG8wymzRBgd82dPMBNB4zLX9mZFEQXxR3eLTRGPGgWFN7EEW8",
  "key13": "34Sq6NygKc3QHhG3hf5awvzhWnzF52Yootd7zZLJqVmo7bSj7N3LN8G3YnCx529WvGM7RqxETi1XQxz5umRvvwgu",
  "key14": "4PToi3gJyVASYu4ZZEL11Aor3LSrYFaAaC4p9gyEzPBWyQxCesnn21NK6x8zr5fj4RR2aHYhuFqqFd5t7TP4rytU",
  "key15": "2SppvVfqJrYkTRYDy5DJLDjbY5iw2Z31uYvJcuUdPAJ8KTW1jTQPKc4NGgbew93Y47tXZCcmDH8kcGmzsNebwKfq",
  "key16": "3dqYjoFmSVbWjxeXqbCxGXRmyJUhr9amjZHGfxL6SshAvrqeUjaQi3AqHGJ3Rqkyz9Yro9XiTzSwNrvewjgkKvSS",
  "key17": "6EtmmRisjXNb8mY7BXqJVbbvKwQjW2b4VkDjpytz2gjnVwoLLAfyp4FXMkKwUCkua3R5hU9yz4fpDF5kjQidZzu",
  "key18": "3acKZSKTP5GNzsABfrvU1g2wDiAd1eEMhSN92e6cBuXou3jubLxBjDJdbjDUxCh8VTEmdf1SXSr3QkqcveqNE8fM",
  "key19": "5qLipJXT8as3qVYCPXvnGkBiEkjY4qy8QcVWnHKBb7yXng6kddwG32g29Phz9CUJiM3UVE2VvZJWrvkWGCh1sYYU",
  "key20": "2iqWKcvUNJMvBcqb7bd4Jrku7ug2JWM5UPxVe9NcmGnYK7jeg5cUzzhfYpTWtxENvTXA7twHkGmm3yb8zepFJtiv",
  "key21": "2D4ZMcWxqCtUbBbuRrXYmbcMKF55hX268BWFqY6rRTA2XXEaJWsn8omKrznzqwhnQmyLzyxBUz9CBACkxYy3v2HS",
  "key22": "2uuHGZCgXWAzY6aHgMgorKpjRbC3MbXSaiZHGvpmCYyWRgMHPpRYktt2HaxgZiRxkfuUSBGjef5qFZPAZwS3g1N4",
  "key23": "3WCYExU85yneKrfmXTpGnKaebPeXiuABxkQeHkM5ib3cuGgsrFWsD124d3TfqsojgHHbg7cN8xbBWypAbV4DFpXi",
  "key24": "3zh5eCsf2jdBXGTWpior6t3e1WMgjeaktJ3CJZ23kQ2RjU2K8UwpfJotLVauYp4wGitMv9RJw5C3LYbAiw2FZ2Au",
  "key25": "5APskEqwdyoE78yAcWPMLzhxR2ZbUaZ3HkJTHTrcYYCf4hXeoeDKWK59c2syBNuCgKQtRBzp3vdJJwES1jmTitBd",
  "key26": "ou8UY9RRsDiDVYDhFEtmcPGqHozynk3kkgJHvR6bFh1xCEPraa967LQZGJziJ6y3PjGASKgaA2WZR3AmKnjWyYZ",
  "key27": "3EfJvG91acjpFeijUApgLgAgzADSgf6ciVC5ReHMqhPmFnSpdr2rLirjUfzdnSc2XCsxHukhsKmS1tCV3M9uSNM7",
  "key28": "4hSfG5VxhnCQ82bBzcEoq9QHDYfPHvojfaBCVNmvuKkj4YVgukVLqnFVJrxDLSqyJ3k4mt8D6o6JwVyvTcXXquVf",
  "key29": "4ihRPCuKfD9LRvtxMFQguLHQLCJNc67tCzWTwdgfwcLkNDeYpqV2rspUuefyat6Dx4BiEkLTdTswALMzxf1CyDNP",
  "key30": "5sEz4BFsuafYVt4B1GM69RAAErpQo4emLnDX1z9JXBAGcr5Lab4pU3dVm6XxNLa4CrvVUArdXYqMSETkQcZSJ4DP",
  "key31": "213brFNWDVB8pTqFngREiAqXAVpag5bCoiPDp1y2CsPxZvdihEYNURbWZbBqxxaWSGxsVnyaTCTjCcWFdctg5H9Y",
  "key32": "2KFhKFHZ5sYw6MhWVbXsJvqdy7VgH1NXGMdxhdboS9ikVTkFd74LkFAUp17Mv1MNHpaHC7Mo9LgMYWSynokS5KAZ",
  "key33": "3tSjgEPU7yxYDWNDDnSChiAevCbzUPAh2CBMWbxdSG1uJkFZZTSM3PyhFGJdWZmYhWeQTsXS8t7rfzw6ejNQZEY8",
  "key34": "tZdv7rqUQKRsgr6o4Mc2Md1AstW5p42N8QbBJhBQF6HQwoLaWMPa5qQViTrrUqtpFcRJsmfAQkBfd7rPqDmxY1o",
  "key35": "55UDTznMreSurHg4fGJ5ZPhXVg7h995qHGyXUhx5dFtP3zY84Zd6NL5L7SQupheViFXDmHZ5iFBK6XgUGt7XfNhu",
  "key36": "641eZNB8RR2quCHnrTYg7eTsujJTtiSdKYK1WxW11zMz1TcES9tg6wE9gJt81EJ5Bg7ZkV4M9pegdGPL4ucccxc1",
  "key37": "4pgjyzuntTJHbzxiXAD9ecZ5G65Rrf5ykfUdv2KNfUJbJgTuvHTikWb6oNgMtpCLGEVZEQRNcR7Bm2GwLMcty7c4",
  "key38": "4abne4N9ATQ9yG8burxHCoZGRQsH9Peiv1tNL2ksLCvQMZ9MXVFL7xfi5jSyvqm4aHvZN2PMshFQSw1iZNpiGu39",
  "key39": "43HUSZav5dSF9L41KsPfSUr8Fq6xKW6iAk9G2Kg8XKKrFcea3CWc25sDHGiHnXc6BYR1jeANz76m3Byt1inCQv6k",
  "key40": "5QPo5L45jC7yAMpVoQ4gSdQQeCMe4L53kjXfpsNHincR65bnMuxf8d1QbWjLQ4Kdf8DyvsWBkN5UENnpb6NCTW7Y",
  "key41": "5RdHx9hUmYEBLy15RbCyx68VX3TYPW4Er4vnf6pdMy9DhPYo6tGEhb552QrZMDYTpz8eTyhN6xfbUxqRLSWsSB6B"
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
