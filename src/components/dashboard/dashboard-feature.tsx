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
    "5L4vaBPaGV1Rx1HNKUGFTnBV3g6dVYPoUS88VHBA2cGoGrU88eybdKYZjVd5u9nUdixixKYxME2DgEsbGDDiwuck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w9nXu56yrWVWt1XFmioLuQKfdt99YKi8xgvjJNwMkYU3QqgcUXzZQ91KzUb3rr4Tmi8XqvCVp5vCJuYtM7ffF8o",
  "key1": "3v5QBEHRERH4hemSJt6brZgJrSsLKB7whCLcgiFh5ngGttU63BHfUkbKyMAGLXFSBU2i2frhqcpWJAoH9N9RqZPz",
  "key2": "3ChscyBa4P8db3pxXcPGdwqm86BeV1uGpWpmHMvVfJhdudpibRFgGAzu1XMX7ocJQByqjtfUBbKSuxD3jdvMuBh2",
  "key3": "3MDMuV8mMgwGg1oUmMj8XpM4rJ6hWJGP7QWFXkYdArL1jZRoVhrDiHQ2LVrsNjyQ8udi6g3ake31JKKQXXMf4Fw7",
  "key4": "4GdXhoEzjUcMc82zeGPJ2jxiyMzg6cAYxHiA4ESiEZNw4Rs1mYxak393AEi83nuc4wn6N2NKNKcvT7BxLdw6WhxG",
  "key5": "vBKEkbr5b38HdReArTUKMA4ZsiQJw2sp8Toq7vHMeGDvEgLWLUrSZPL3JwY8pgxTUZq7Frjkx6gQor5QgRvP1jr",
  "key6": "4nXnJSwoEqcou1KiQqRpEdfwFkJUsiEUNgC3c77WuVobpf8Gx1pRTRZ1MPB1d6srhFpDSBUiLu1YmwepMznUJfAF",
  "key7": "5n6ktCRW6V2ZtbnozQD6hCx5a821bC3WMRyKhMyH1SAMRf7bQ4kH1rZbQB2QJWk3bCevDpM4kXu8eFT7Qi8jH3KV",
  "key8": "2pDFhhswHwb3PGPmcvEDP548aHFNATJaMiannoBFZJYZQkPfrReFR2S7t889jAcWhM7GadcdUQdeHiFhM7PLtCTD",
  "key9": "YZRqaHpGwxjEBBJa7Kw3CwTZVeSTsoRaSssjiL3ar7jztim8NqZfJVnwuHDAYpM8uSnf3m5qpVTwr4c9xuKGozY",
  "key10": "4FCJN917pNLxyU6LGENT3u2SBU8ZUoqZkKkPF3jhmAgecReTwTpW63ziCF3KVTjRTak5yLJ5idhVwGFJA3UTgLrB",
  "key11": "2tMQY4hREjfmJbs6p4EAh9k1pzHMEs4kXFNm6KDa2k1Qhr1Pg5MzkZYQY45tQSy46ctJqySEtZZduNHPz83jkCeA",
  "key12": "Gry5dGfhgLCrjxQN8TfNQnhsQFEv71iBzKNFkcvN7bD4TuxwL4arHFUiSgqawUYaueRmSKbLrfYQpMHSuSWBkH8",
  "key13": "5wbYK1UNwcuYsAXCrRMQbBsdGLonD3PARYmCjjqdHFsoSdUCCxc6NifydxBExnP8BNFtCdqZfpiuEv1HEmmMM4Uy",
  "key14": "4KjLsP1Q65QYi6YKnXHLRoQ7rLJqRAvSzfb2HrNtp1Qo1gPVKCAYv671ZxZuMYd2ERfhBYKqhc8MshacXFiyNyak",
  "key15": "33odB7aS8c9eJPiMKLxyWB62qCS3PrXT7cZhAbzvTUJGWjMj5XKynkzwHhL1fVRB9NsxsrVKkPkv6nxERJiZmtg2",
  "key16": "5cGKpJ9iN7oZBMpRdSDCZGX12mHCx7n55tEjYARg7fi8BgBTvZE1wgfRwmiPhGVbBH5rEAzMsthocYJurHNsLYrY",
  "key17": "4LEYMvxqY8nYWv2pmpzSRzPB96df31rRZ8AsMir2LsHd2qRmGAxi6NxWgKnbzzRTPLYtdUQ2rAPajMBbkqrurvNj",
  "key18": "5yB4pVaz5e1hm9MRyYNb89Td6BaLy1a5i4e1uYGNskcn4GwppEJqmdCRYiRw3t1YAsSvXrG3Rjj1Qo6u7jBxzCtc",
  "key19": "55ypQy5VDH7W4SYygmx4SQGPt764szB6z1DaYDepK6GKNwu6ngatuQGdQdqh2GQqW2gB2gug5FqqmTGL1YyXy8Rd",
  "key20": "41MudnQVYaaG5cw1mrSRdD8W3XN5KeN8yo3Bd273d9SXQdSQ3hqXpPSFryUao46Wg8XRAs4MxtGpziLM6cvE697h",
  "key21": "4HJKm8voNmE5nAWdbQJaK3zGET7Xaz7zWn3yvtAp1FN7YqCz12qLPujMUH8EyyRon7J7YTNpd1npkXEkFGGzqS3N",
  "key22": "4jLLfzYqMcMMbZVghd9RPGKzjLrU6Mad1UXvQuGJ6p9QJaQUTpanugaVcSc2YRNad4qyDW4yQaB2ySHgqRyqEkMw",
  "key23": "4hbye6V2q7nvwvvq4tBusDLbUUdePdtaqzQzFQHM5pEpxxP7yvFghtNFBCJoshagaAFChGYtxFnAM921ZdqTTnfP",
  "key24": "52qoYpmiysBYwbjBke7wLE5Ldea8EwGh4UDWbymt9N9N2mxi2E5dxJoG4XzZmeEK8tTSQ6ZsVW2PBT126TLxz5TE",
  "key25": "KooRnGfJTYWjjmUmEhxbvXe9oBkwwQSZedzNBB4o5voG8JuUsbSSr81LJa3paunjHRbikN54Zi1PdtCyom5zGnC",
  "key26": "5H1VSLv2rxoqrG1nWSAgyw61qT5p7oSPDgWhBnBNNbwx2B6UWyhzrfT5HUY4mQfwoP1DuRVRCtoLtsoxUPd1HXLU",
  "key27": "3D4PBypUpwHBTP9M1Qpn8n57rsxqgqrrAmN3MkvrVRw665TbefNitY9BPDpSFbmDqQ6DGmWNFi9yT1WeeUkqsw4h",
  "key28": "61ZzMWRZosYMxpsGn5EuLXxsRGJBXeDXC8T9U1ZrUaHZ2tavKrjndbaP3Z9ueYY9pveUMuGJ7e15EyNio8dXkc22",
  "key29": "3RNdho9BSKBi5qD7PpyWDkPULsvaWiubRwZPKHJD2tas8wKwXKj9Rs6U1aqXK7oS1XUBcoDZS7Bdxfh2YS7GN4tq",
  "key30": "5emKvnEayGaCcDBCApPjB4dvFrrwRECh9KDyiMz16hFAafhnrkP5n3TMAvM4qhy8ccXe4het5nktrAw8ntsxgfDr",
  "key31": "2w8stA2CB6r2aCmFeDfi98irNAf2g6CEgxQkQpRMmHUSi6iaifhRtgkVwje41bM3Fv285rPHXvuaPjrcS6mQ7GWD",
  "key32": "24SeFARaCFvBWc3UWjp3VhgcrGgfWjhHgAdzHNbTdeEahQ4xgKVmiNiT8qoaqtyfTAofnQNKKa6qgT2h5bgR6Eb4",
  "key33": "3spMqtDek7utXyF6ufPXE72bKfg3JfxYoYa5bFAMfAeKwqdDFHbxqJvKxj91sFwZ7DHZKHuqyF6ET1KNB7TgYF6P",
  "key34": "4gzaaATz7923PTZaZWGLti2fXnC7pvuuVW363dQX3RNya4VjmzLWvzkXpa3anam4sFnMC3oaUrfEXnRS28q8i5oE",
  "key35": "5oJL9rUgkG2EU8P8LLvNYezK61KZZREUHpHsWsdnhTa4LtrFk7aQfzKjmEjhYgCk7UN3nJ4Nm9Ui39opUYBUsUAp",
  "key36": "5ZSseg2EMXLaPXrto7uweCkbGv7qQJ4Bxv33HVAkAHDFskFuxnEofe3CzJwWMQL7zQ8PBo1m1h8m8BRmxjkY3d3Z",
  "key37": "4xe1qyqYw8aNbs79AmCu7Meogh2KQNfS92RXupu3zEuCAmCGxtpq8A8tjgwwLENZazUWb1hQRgfNnQZEBo24nZgt",
  "key38": "626m9ErbtJC4XBbzrbPymdkGtmyxuHL99CZKFZWSJL8erjemRdZsjq5wrkWT333qmqmhHeMWGVJVryTycTdndNED",
  "key39": "4vUC2ng13uJwcmhsNsh32FmK3QYiP5FZY1TbWsHNz9PknKbFd2RB4zrQJo2vMESLEVxTPUmpZB3pvaVBpT479kwF",
  "key40": "5JZGrAKJi6Gs6SG22bsQrwWMwPRGgnqzJSS7q8LJ5Qdk3qyrjDDprvZ2Hrb7B3z64sNnRaPNKtinFyBTCfqihdaJ",
  "key41": "5koriz1g3L8o4VZrLxNgnWHTNL4y5iT5FHC8rAhSVt8zxFb4vt8vLphHT5YYeU5aE9nenHzJjnCC5MXresbZk82h",
  "key42": "VLpUubyDGGxVYp9wpMVkWQRhygjeD36UgsaBjqRVxeE1HhwMratH7DFDSNduk8zDjsPru8TCLaSPeUBPyhMSi5S",
  "key43": "4EqC5DV6NAdMHhdV5HJJwiTGHK2DT5gHUgvyftjaKZAFhZzFjrkeYi2mLoDtLxkx5Rvswc53LYBRroHTv6fVCSYt",
  "key44": "4EwwzFf9CsqxQqDt8RQJmzX96td36iJMJappRm7eRf1AYjtk4oSuSLZvGi8ot48PhpBM2TGrdRXZRreXFJjWvPr4",
  "key45": "eKP3QBPo3K4dM1uPuT2iFv98aCPhd658KKhpBr8upUHvyKVyj2JBQJDmMpaWEUzhWVX5Hvn4TpkGJoRbaD7wyxa"
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
