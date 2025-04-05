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
    "5QKgABYvLyMv7YPxLpfSX7Cm4goRbhETGZK1z3U1c9VZXm9VtqATxkpjDS2H6xUfgNsGSWtkNsYzQy2p2yNrj4WC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ty7oguNWRWRQRskhjTRsRepFC5ft319Xuk2tFyT4Y5Q5DHJ9C8Ccd9n7gENdZ6uSCyFAZqEywvNnSK8DYdHEr6W",
  "key1": "4PnwxfGPLiyE1VT1kVdiNRE71zXFkLwNDoFpYw1KgUaKeRZSimBTt6JbfBwVaMHDbmiLJmdAw2iwz78qt9wLmVrG",
  "key2": "5Sk9CBnTYvBxEh6w4n1exgLbhBJc2VCHm4ees1XQW2gzHquoPRrGAbciS4capF8W37bugNP6tRJnEbukszDcvs3J",
  "key3": "4WvNAxdeiXoKw6H7UCUUF5yFEMoaoqMAbrkPQ7pApAJe5wgaRCSJR9nxtDKVGP7qzGdDCpj6mx3DG7DNccrcnPhY",
  "key4": "4noKKd6B9ByeNeYV4S134LzcaS6yi79gMpbXqpo1UMbFH3Z8MbGoZFbbXKjD6mdkeLRdDBhSKeGWtWBwtmZ9Xcz7",
  "key5": "5zAMabwno7HnCcbwEVfnbabmVVgbvnHJ8cBsKoYz8Ywy88t5tiPtBrwP1yYNd7NbTuyPTpDfLu96A77HTrUnpVrc",
  "key6": "4WLsjsjDhNsvBD7kVWBFno3DvXkVfijx2pQ1GqpPjLPubotsGqfcheRzs9hWiWNdz7TNN28X6uvgpMntnRDed1Kb",
  "key7": "3bKmqm9z7ZBAfWB9o9rpi5pHFwDN7nyZ6qJ1QT7Vjg747QBwpzXp3FqTD86AwPcqLK2aGXDLenhicJBLa3d81K8R",
  "key8": "2tXBJjAuzi3UBKri7uzPHi83xEhyrRthpyGfm6MQnX87Ac9JPS2Z3S8A7ZoVLiieqr86Pw3nVSn4TjG2ht9bLgir",
  "key9": "3qYB7UZXzi1vQp5yMMsV6yCYDHf1oLRKn5t37zUaK9yyfUWwZaauq5oE6gKfMQUbaKJqEWaSAZ1ynWBgxjGSyCtz",
  "key10": "3NywxaQ92rgvqRSRY7WPPkDyPrcQ3eV4VX5LVyBWEjnhgZ3g9s7PyfCVugppxUC6vpuQvgiqLtD9zDfAaYa1ANSa",
  "key11": "5wZPpvwrEdro5sdXYybBi17CDMQeyxNdHnyCauu7Z1puGiDBQY8hqk3hG5iNH7aaUYxcZKADSnHCupsqbLL7bDxg",
  "key12": "4ZEMZPTZ8TPJ17aD5NfBBhPB5yUVGMcjrErpp1MrD5k1535tP2d5JrgEgLhidyJtzE1oJwDmEZfVWzzW4XSFSeoU",
  "key13": "4jjwNEpMibz2i7NmgB6Hxgp5DFvoAbsEtSP4EXx3DivLxiaNzUAijPkkv5uKa5Lug4Xs2GQirtQ73GD7eqYAHqXn",
  "key14": "4GAXkN9ZzsELfCFJRBxhj8vUNcW9rfrNYNaAj3i7XggMArBroa8XZXsewQjQ5k1QTpvcXg5RSxQZac9ffn2nbzUM",
  "key15": "2t5ZBewJASyFipXZ87LG313B6WkvPSNsrSYGHYXaXLhHCFpkXALuM21PW6Yd77YpCsJsDbVeg7WoVt9c49SjYviT",
  "key16": "4radGNC92rQ9RsNGpJNxxCBnkEF3cGRFeiBf3ZwjqeNG5KiJJ2SjqifFs6UhXHVKKreTfqzP4CmRnC7uSrFovbnd",
  "key17": "kTzESSQtze8U67yi8xWFFt2pZwkzDAvm7gTB4Hwgw6W2hUpg5qv5MBfmiNDREKsovS3v58WuS23hLDmamkHFKj9",
  "key18": "9cCAttAS9fRaYRHymVYWK1sWYLQUajHDPkSgqZzKeV7LozkvQfZ4v7Do5ggTVfbXkKdt1Cx2KFZyarrdbJEoejo",
  "key19": "U77qCkarkKXoTBxbQpfDXDagjMcXhmjRDYXpgNxFun23wPVAvwFqBUjKb6mg9uvZu8eHxDshtHXFtYbS9B6N5Dh",
  "key20": "3EJrhtdBqVJyXZR99MHL8rxdBMzNdbdJd7ErDCxc1FHCUhvqg6ik9pZzcFpLcm75oRw2U2msGFwQY3sJWPesWp8j",
  "key21": "3pAMkR9feWMyBkz98RyfkNXLBsp1PNPxSaTK46wxe4C4DgfdiNPhvTnQyCXrmKq5pQiFLr33tKDcxhiGPXwFQdbP",
  "key22": "44o3zo42wqEVQNYdsEq19duW4yX9mBgVjiLLeacKK9ZM7EJUfbAiqjTUSCpxBGBDKvvLr7FsrdZTPEnxzSUNePDJ",
  "key23": "3JG2KYpPtQpMe126NnNZV5CF8sv8sskig9mM41uTv69uJkQ5X9Q7eqsTDxsyzdKu4Wt5hnh92QUen1XVDfswNzDT",
  "key24": "4AquMtJXd3YmmtM71tDeJai1x69uagL3GLcMv1foKdBjFidtsi3CXFZq7QZSBaqeLy8hgoXxtBeQ6n1cpkuTbaAo",
  "key25": "481rYmChkzNxRwPDVAUWqC29ikjYea67SX12Mja8UbiimskUV5Av11RnUVH9Q7jgBQK2P6ahuBjhSwGd3myXLXbz",
  "key26": "5RMshLAWX7BbjYw954XoDncbyDif4b6aFh5rrL5vVa7XMg1KPUqe9JceFrzsD4QFjvbN872WeQfii5xZ1VSDijTH",
  "key27": "kJF43jz8kmT2zZq5dkG2Smy3ef6gz8ye1KTnuRRsfheyw4TfjcHURkiYWMC6sxk22xxsShq9bRHEDpybEsoLYyn",
  "key28": "3WWcaZXfBMznPRJF7jmM5fmHSsj6yX6qc84gE9jhvscfN1FuxvLab4Msg1zgXSFi3ZdMWf7C24haeUHtbCNHNeKv",
  "key29": "2kCDMW7BTDYM7TH1BxkSRNnd342zNb39NTpKpLbmgKLQK65zTBTrQd5p7Z6wMLxU7f4X1GBLmqkfw7WDbhymDxEK",
  "key30": "22TnQD6yJuyMVGZ6C5ZarVb3Ds6cj9k7WxArcvvBWk6EzWJ6Gn5CcgRmMeM6hY8Ar293DUp8hcc9T278uuQfXrAC",
  "key31": "3dxqoxo65P3zL5pEo3A5cLjnkB7EEc9VvKmq9fPDkko2EfMLEvYrUfc8bC8WpNqTXqh1vgMyjdDugaPJYmk2SQhz",
  "key32": "EpKzLSPMoEL2AVv1CZAELgYfPUesTMHrjKVXptxkcxo1tvyZJY3qpMQcWvMZLDE9GFPh37FjHSCAS6typQDJLWs",
  "key33": "2Ger3ajnPQhfB56TkmaZwm7h4NBL12dJQaHNy319A3eKJLAu8VQ7kzMrTfAHhXMnYjhmEABtXZQjJzw2bU6k2Rkt",
  "key34": "37kDDr3mJpgXQkz787KE7u2jFY279k58Hy38QQcodyA2aFATwe8FtnE4Ezd6s9Eqpo43z7EJH2TqD49S2iukHgC1",
  "key35": "5ZVZysM7NDZtqeY9wJqCFMisZXAn2vSvhdzKbPZ7EgMBJvZWzzZRcz13ZioV3SBUPzDiCKtsgAJvCuVMcy5a9Xnp",
  "key36": "2EXidFotqAmYdxgnJ7RMHopt3626PU2cjdbfAjj5Gq4q3JaCvQBRtPLESH1fSwdw93Bf6p7LWL6fB4bcMHQ9NSzM",
  "key37": "5wWzGbRM9oqcUDQ6FsFdU34S62Gk13Kfn3rszPPqd3rThu7nfC36Q4Qyr6kPkdNbp4nXkuY2QWwU6ykU7tqV3XJF",
  "key38": "5WNnHTS9RZoBjzy9WKxhoHbC4NSHVRV1Xz4sTcLXEbz3eqwe4Wj2FpAZxWUSxmuQvuxgWN5UnLnKoZrA7EjcaouT",
  "key39": "3A2vPLo9TspmjpjA2Kemmk753jBxG3Dg8sxpBQ8tZZPyZxdHwwD1fG3kA7rkbzjaQ8Uut4UChkQYS8r7Fs52qqzu",
  "key40": "5WuA1NShMxPg4wePhsFFSBimjGZGes5q7StQ2icZvYFsX61XZjAwzofoymPEnkh2rCFvzxaugMGwYepK8izEcsGr",
  "key41": "q6mHcYZHYQiQPe6cix1mZkVWtLwweH7s8AV4Uot3KkR5s2etrUazHU2n7K98BB2jgZMzAdFHEGHKRRG53oSKGm8",
  "key42": "2WoLmcvCGor1pQNAJKSZVX525dhBdvS2xM7QQ9YrSzuTwAfD4W9zkwBEUD9rdNdEa7ku7ABybUEaz8vbKPcACaYx",
  "key43": "42Ki4FKuveNcYPfBgrPBrT2knER8Xn26RoXAojYcfrJ6z1zShRCozzVnwquCxweocearJwVe1rQvX8A4pmUxoQPJ"
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
