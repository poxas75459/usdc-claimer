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
    "3CgLmMJsVVM7nNAjQdaEPe936CQxRaUePbngNyjpbykMVQydtY76SSP51WBCUcRBuoweSRZ7XDUgbsU2GG6YYh39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EyTxAdQ4mhdCxQJLv8wZ2ZAbPWWpJYsEXDKQuEH2sUs73uhFs545V4Sker6i2eSk4YCwUNpydenhw1npWts1CMW",
  "key1": "iRtxcJGktxmApY8wpnA89DdXWJGVUrXnvMnJALkbjw68fhw5SKA8sHkUNtsmxxkBkHeJR7WmxbkvW5WHsgZqd39",
  "key2": "5N5n8TRRRbbRbcBPihtbXebPV3UAqhA74sMCQhMeUrrL7Z6qzEJB9b1U4Uc37ddL6TcedxNEWtcFpEyBvuCWpGEw",
  "key3": "2nG6emyT35ocyhQPyzQKDEFNnELsMrB68G4rBfCJCtMnEwCN9ixshpKQsoaqsVSRGqgFeh5P6h16SUdQk1qQVu2h",
  "key4": "49zMuByFwqvCT7tj9xya85Tt8eWJLffdn556Bj9hqjizfqj5brfxCeqJ422nSGNV2V8BMK66ZJ3crVbHvqkKq9fQ",
  "key5": "3CgVnBdXhHesRBTBX4JYvd9NgXmxa7vJ6zvc1gRD5Q5McriLNDX9qPyRLP53iLmPDsYU4wKLF6kFacws4tQquhZA",
  "key6": "4UMA5ahUFCc8JaaSdZtFWpcZdEEGxSoCWecswRCGXcwjJHq2D67BUaF97TEo3BNRa6TrPRjrPz5jKLo2MhBC4Sfk",
  "key7": "5D44dM1Mr2a5iyJbGbCr4kjwDEsS75s6uqTzLrca4UHPDwpnhxPxtbcGsnRV8b2s9fUSr6jTGWKpV5QaZW7nk5xV",
  "key8": "3ADPcPyKsU44DP7h9ZXdBkPsSB64v81dBAswskPvz144bEfFSAp65LUvqWJBqHHE8a8MEkJY6SxzHDnabWQ2wLg9",
  "key9": "4pNjicaVZZkZuc7q2qse4nPzFin8auyJiiaKhkq93Z1vNzCgtLm9fhcDWssFKXAMVPPiYtjUp2BmzmcMYVJbYAGv",
  "key10": "22MJ6i3YexaUtFNLEjT1XnGmJ1Yxj3zVZomtJNLpeviVphuvBSEvTxpREyX7psXvfETjKFURmZR9CrUpAeGhMK8f",
  "key11": "zBPkYqK8iti4NvaxYmTheLkV2zm5UzpswBnjDEaistBTVsDAgM4pqPgu94gKpvpc3tdZWCd9bLyZ6PvAcTxZFKD",
  "key12": "3y16gv3Snf3AXiEowWZcjLZtF7aQkxnWRQKPZfNviyPDhyRx91gXp9BQ9QHoCdtJFeLEiFKX96d4nCKeHbmeSVFX",
  "key13": "2H6ubCXXc8KMwmdAe8uuVRqmQ9sqzdBLkWYqAQpC7u3my59imYTBypbF2cDQMKz7narexevD3Mr5jmoU3KpCFqo2",
  "key14": "5U4jCiTevu5Mku8J2tz4dUyLMtgfAvW5yKudK8SDj2ihYRjmUzMqzWKNWNNEhbNagfZjASuu3HFbsZBM2bJxK57p",
  "key15": "5ygJrZh2DCa16mzHn4K8s4HApdGNz52La8VW2esYPp3ghr5dxHNqQRv9LHGeoJm3p8JuB8ALT77WXWTymf3SrSQA",
  "key16": "5mhHeixSiKsppjfVvCZdCZyqGv8MLH5qQus8hyFZk1YkhJ74tC673gcw4EQBrCKUjtKMDCtqwXvMn1XTL17b9Tix",
  "key17": "Uff6HY8gtgYdCr1c7Q1CxELxWygqevHG4p5znzozVR86E3JXH8LKn6DqAKrY8L2MW6cDZSkJVN2MWT4xKbfPXq6",
  "key18": "2JpbK9nNz3EL7btR2fgNyrL2qLAKtF6QWxhwQF7ivmADJrqtvj6L63QuAZAdkp2qdjyu12WAtHvT2JaHjpjrV7cD",
  "key19": "sMJ1yviAaX4kQJN9BChASV8d4dmbSjEHE3KvJz2AVhDvKnDVqTbuRpTtKJNTEKy2yWZN1v9LmXtysW4jofYp3np",
  "key20": "3tDxbX3xvAhyREz5wu9JdPjQNBFJYGcqWRSVNw8D12T6mb2SnMi4NppHxaXHyp5CyGbhq61MyX3KdvwFDoBBnneG",
  "key21": "2VtLBxJ6dTAfooV5v4Sni2TNFV5dDRTUvqyyACJEHemRezcL8imFfKae79SQABJb7Sqmq8D6tJA4Mwnj6cFYs59E",
  "key22": "2pNAVJXoL7RMV9TgEnHATMCRkiPeUWAUirExbkdbQLN3fYJxgTpHvvLnSzUXksounctDC7nZqK2nNNhkARXXPFcB",
  "key23": "5YTZxW6gKhTuaYMy4Ts15JAeFjJnANBoQnqUFkdx18Qo59ZguDaGajJh4ZkzmSHhFWNeGFiDrf2Rn9m7nVtxhRVU",
  "key24": "3TA3bmfbN1yd3vDLZ9TduADJhpK7H22yMEovfxvv55PGrukKGv8t3yUqPCZroGK47nVMEXmiw6GbTFUsVv82mDXd",
  "key25": "3ZGvN3jVrtBRGaJjptn66SLjJsGevBffyXiSmiohg8dmEJDqwdchEvHMaStN3e9mYTQfAqdDpRXNL2ocep47ZBFt",
  "key26": "Lgr1Sw8hro96KVxYWmZeuNzfJUN5iVyf6R1ViGbRxod8BkFBKoUFD2ujPdtu6vwmnb5ga628cBfWPYHTDozin6H",
  "key27": "3xzkZj4bpAbmk6tzQze9uR45YiQWBTByTnVqMoR9z9Z6iko1rPrNEAN8P1ExnTio35WCjNTYfPsWFjnpKkWvksBn",
  "key28": "4vxTbgbLoFBJbnMBFRB85XsaHNAu3ts6qbij9MUjL2xRy3DYRSaBfLrhyado5BDMXH5fNZwZo1fbrpn4wbrBq1pK",
  "key29": "4owvwbZWnwTyaCkrm6HZ5RLCADZ9gCcWrwN6dNenfor2MEkC2iy7MSXrZBi6qnwJXEyHnyYdWZPaeB5sizX5xFbT",
  "key30": "4QdVJD7nf5V9LuPuexZF8vZ6Ke7B45rKgpwxhye1cUtNuxFQje8BuUz7CsYR2DaEkNopgyzj4iU3uDvSgB4ra9F8",
  "key31": "65qmANtCt7EFGMcaU6xxEYeK1dvcQZyQUhCdk4uaZhHBMe7ubJiXuFcGTfn48sSMhxJXX9nzhSkfZjZFwdbAN2Ct",
  "key32": "3ezaUZUBajLQmJ36bkHPWpRUy9o3JKoGkhfKUcxBJ4FvqUwVmW68wbxpkBddYouiirKansHTVjt5CBMwEAtqUTuh",
  "key33": "zg9qWffyQeS74nszrbLcXuRtxzBpSTjSeapJoKpMUD3ELX8Avif9Aaagrn3BwmrkojUWr5MhhnWn7o1x9JVQYgk",
  "key34": "yL5HSvUgDzdGkH52KqVfyCLfR2K29YuxDwqk494RkufB5DovyMASCVJYsp6933ZnULe7B5vF5xCsdhqcpRYzUec",
  "key35": "5FCMak6TbHi2QnzTB4DDpecMhEMgot11gWn7hHtXTQ5dkT7rTZx4LK8hanNGMLtCrKwaiyMZHnf46djDuLPytarM",
  "key36": "yx1ULGDX8TSff9obDuowYkoajnJxn7J1EhCeLs37rJ4rLTT9LQNMEYjz9f4PVBQKSK7C5zAKvEvDVd6Ln1YkYNZ",
  "key37": "2fPivoBnEcD6MZi7KSH87RAc3xLjrRX1sHs9UjyNX6ZDEaV3UeNJaaajMSxq2LXBE2uuSQNo3G1q1i7REhK8MY14",
  "key38": "4hUtfbMu6PRgqUL4E64abZz5RtrAk1LuFip8dh8hWk3dNA59pXtzG5nSAykVdqvPYijDhJarahZLnUB3JCEeykoV",
  "key39": "4mtprA9JXNzsQ7vUEVXXFbLGWYJ7mPkVacNHnQjPyZ5M83jT7gPUaBifCZ4yYBz1GdwfLW83jsNUadyYc2jauPv7",
  "key40": "egXFw9AVBaHNzZbK9tdbDTqRDpu19zdBbNs5Hmx4PXfkcYfZTMnaWRTVLPzCVR5o4b81taeE9Hnf94vVtAffqcL",
  "key41": "32rJUKXS9Zbxau9oU8RVFPkqL17m6eYbPP7yWcwwp13hENZa69VCiurwo4dD9UP7Gwz1KLRxs91y7f7ofK9fDDJ5",
  "key42": "4bSYewAVFMmj1R4TDY5fS2gMDZYDb5d95wmtcN1ZJe2mwEdqaoU7q51R3i4SWBgS3ZuyuN6249esjqimZcBdsBsC",
  "key43": "21WY63YvUmc6oZMdQYEkLhmocpJJtxJhKt4Yw2bP3WcpGjxbsPcLhnFSZzu28ySHPw46tVpwXUPngepCFpPboyKY"
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
