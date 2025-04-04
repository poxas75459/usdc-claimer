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
    "2XDNQFqKvL9vvr1CF3zxWohndEHsrBp38wQTgb917wDtCyTBoc5KMWw8TQaW1y7zMFYdRAVLc85UUSa9WvVYGoBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfSWVtuULoTPnoM6gsci3CNgfnZpaFhxC1z2foLX7DTqZZw1op4Z5FTJN3icj3ZRi8xw5852HWkw1MdHe5pzfrU",
  "key1": "4uY4g2wwQDYHMVHd5Py27YKhAaQQQTf7xrfeKQccTHsqVkNFqR94JyYQHnfYv9e9VqKGac96suRpD7j9JW2HEYWY",
  "key2": "4ye2bRD5QyRB6tbfZmXdwp27rK6yc1GBG2qj1DGksCCanSzhs8kz4fUJenz59RGmj5QHg8nUdJiiAYAeW39fgo2u",
  "key3": "2jL2LKik3crdXCZ2XWeYQTap2xq9P8JSrF1DEBskNBgHKBU7deDxXAB6bDott4KQLsCctqrd5sfyP46eefRhg4qT",
  "key4": "AZvcwrQJnTip8N17Sun6iWvqrfdqW2zkEmZ5DQs28xVTRB9QYtT4Gr3UaGKqw847UGiA6qDJtaHWtp5Q88mWw82",
  "key5": "2cHjWWtbJLyLPEQEHnYc6eEfB49EEPTkKencTo4ssLpBRwk1a6zT6j7hmchzWrRQvVttmHU94atv4rc3c4fFxNGm",
  "key6": "5hhvbCLt6fiqyddfdeN3sVfwn4DktDLEoCERnWqUR9nt2PVp9WzwgQz1f2jN7rpEagtuz7syyuZ7rxZYuRRArXoU",
  "key7": "37w3UF9mC3uitQMRycxKVr9xyKPQeDVwjW262Bk78FagRmWCLZPxP4CF91NquR3fcr2GEXzZj5KEKSnsaiUkDtt2",
  "key8": "3gz2ny7Lf9khy5bLKijNvGZ6yYGfHA8kwz6hNmcvUtoPRe8afbB6vVyaDQgGmwK69rUYeeNXesPUexRYbLVBFKXd",
  "key9": "61HbqKWHtg8y6D17gpzbqBZ6fTg7GqeUjVLAaSF5Z8bkW1T7CEhrkrJrDvyRsLcb8MT8MQXWDYQ1mJL8FrCopEVk",
  "key10": "2bAYJi3DUsHo1VjjuCwyDv7ssaauZ8zUsATu3vAH87mdSyvXbHSnMo2n9yrY4hN3ydo13SonwcGvfXHC6h8tzxK4",
  "key11": "2xyMZRSwDk4mGHv5ygYfW7bDBWqVGYb1USNVVWimeVizJebsfjYWX857oVthusRXBAnexzMApav1qUGScTDrNMQC",
  "key12": "2exdidCH8jfQFCfeg3gC2Dz39Y5VejWwsU6TwXEAXcAQ8q6bKPPoUNAchpVoKwwx1oSRNrYWwU8pruKwRUw9i8m7",
  "key13": "4jiUdGwPZNJAfTYuqNHXEdvxRAjERUkHiGuMZfpSVByS5wGaw3VxLEXF41Ms6bRukNf2ZTfAw7zhcmVfJ9X4adFK",
  "key14": "6769mnkzjP4Z28PrD2wsgcvRibdnpJ5Z2kpXQWErdV5r7etwTN5XueVxqRmEGTg24BAKXwnY4bstp7vgpb8m8pNs",
  "key15": "4CRK7jtMN6Q3jaU4b8LQf1RnGw6cqjypaGjvWKjjCkVEJ35jp9jJeZW7MK476rfnB1Xi1uwJAsRMQ8eZsTMFJ1Sx",
  "key16": "3N8iMvAr26QAUDuprZSHHvihLxphkXXY3dGM9RMoJAtWq8NVSnw1ZcBJTZznhLWXHR8FuWJMyN4S8wZkp5KXVNFx",
  "key17": "2AC335uUhZbkuaVjfTtKpnUedzk2pqDaZ6j2aXUCT8KEd3kAL3DNmeh4jamAawFSwGEyygGzbGjSSgDSyWX4NnRS",
  "key18": "55LyYKvAZ3RqthSZJnwoQJdk1kSR6kiBFxXCQvinP4T5mt5g5kGEPnB37aX3cvSWycPMwQkMs91hdEBT776U34r5",
  "key19": "JK5m7QPtkUsfNzNBnQ2Uq3zGhDbAs1Gt2BNBBBDU8aoBcChLkWd2BV92MMoL7yzuZdjkpESzLZkom9NugnsXYoG",
  "key20": "Sb8p9GWiSqyuMSiCohF2BtJQQewTbod3apMzRtyGY4XwZY3foMCHNpwPHE9fSfECj7pkgLN7E3PqRiYQKkozEjb",
  "key21": "41rCUnPAAmo8AaSF1DXgLCooxQQA5GgWiqSDj6D3ksMV5FSK8GB2ei8ccRVi5hGro8XUArk5tPZ26ascFtmA1TbH",
  "key22": "67mtgnwWQp7mbKXfbcW1YKRHjmijrtT2ERTdw6gWC1224CrkARrn5cU7g4JmofBBfeJ1pbnfNFZFeesA9EXAvwQA",
  "key23": "4tg5wF4Hq5BbdC8AResoZ5Zwy9YyPkRk96TAZtDJNRHk6VqQLY9Wgw2HLdoZNwBEdJjQmfwRk85CqHP6EuKJcgcD",
  "key24": "5UyqjL14CrXWkYcpxvZz4smcKbduRKbGnWaCiLKjwRYP8LMzAPP3fpqhP6ibgxjFoaoVRN4uvvvZetYyVJgiZic6",
  "key25": "52hCCwQJToPw7T4LdHyhqREyvcXxKWqZ7zhzTMT42852nXC8Fzs9maX7y6acD38TEzFmk1Jk7nrnTeuE1EYmZs8o",
  "key26": "5odpfC8XARf5s2Xnf6mVAep8eHzYVbssuHxJT5VL6ZwkWceBEsikY6n1mghJbHZNBMWuYdsEr8TaitUUzkr7T51X",
  "key27": "542HPMDJzxcv1x9NudcPF3ZBx5fT8zxHRG2kK1Q47FzMpFqG1FzWtAcQWW91qt1XdrvpFVXzKUse9LdfgBqGEFbv",
  "key28": "JGbna6KUtorXGEsRNqJDJPrF2HP8AFwBVGjCcegu45ApzU8NKj89eC4A9xrF42rFH5CsA6rzvxuo6wLkavXk9Zt",
  "key29": "2yLTCThuxzT7LD69MaFdu7ABhNvFcAezbnPsvkxAVaxZPqCbU4mvmbnrN6NHnLcZZqpDUgsiUJihTaMB1uEp9Wr2",
  "key30": "LKLTUtWZdHGEDJz4oaQ2tMpQ1UgtZZti65ZjMm4Cr35z3B3A6xrhRzRhHZx72PhTTU7iWuMCKE2hsLhdut3XMwo",
  "key31": "4R7UDYz5KAVWRqc9UqEG5hiMSjvDvTcHfmdQMc4wJpTaCii1FRzvGGiexTHivHejWJ2okpeXY7xH4my76iksMUne",
  "key32": "2tiQ2ZBEKeAdACS3JCcBGUCT3PYQLjWiT16oQVKi2Mr1SG6XJN5sLUWKWCrCpKYFCtYUYXWQdMiqbiB4Nb1zYAUL",
  "key33": "4Mxnajd2QqSWbBBaZ61zhHrKCSFPMDYvWAm31P2dB9UurRkpWCeWp3uaKnaVECpUGbPsRHGXyV7gi7AphgGxp4Wz",
  "key34": "39irGVGwH3cWkB1TEo9Zv2LUBjnN8hWJ38QgrnF4Xu5Wge7daAgcXvR7BJkFeBqVs4Z5ZAEcSZgbxNeGJVXymcRX",
  "key35": "FGj8aFC5QSuZS8q4msjVwK47Kh7u4B8DGtRytJrWBsPJdRcfeGzJ2BdUpg7TiGbvCeetEwFtM6B8WGR1zQ2xGmT",
  "key36": "2Suk8BfY6uixYd5g7bcvtJ98SSCHzoKRfm5ACP9mX6U34exRVHtH4cf4g3YnzTSMJLvYRagV1sXDEhGKBWeAFdPc",
  "key37": "Nnyhz9yBpAdi4p7C3mATuBvdQ8NNnou3fTGwAfacFudwzAq85d7sXGTsmRK59bXbPHSLqwAq5mvztDhG8YLQmpN",
  "key38": "Nbq7B8U1pjer6BLtXavP3AHSHipptLN5RMB7GuwucW167itJKLXfQmr7ZuDAtF56uVZXMGhWggew6ZfTvJEDpSK",
  "key39": "3LnMkYFn3spS65vj582H1ZBzAS19REL9f6EF54Dm38AGNozdYjdN6t5wQqT3uRsstPNbBT1JerUZZne9w4Rq9pR",
  "key40": "4RyZCKAEVhbRVSWHR1Yp9vYkgCL6bGJB8wDXPzx3Mue3cconqcEWyiBZ1Y7txvEszUbmfGZqPtoZnuK59DU5EGg9"
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
