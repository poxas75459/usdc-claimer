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
    "djksTfzmrFF1m7szG9B3iyGbxieTeFywjmQnjEAR8TNSJEhazf6nPSm742d2mAmfJPLifVE2bjgWNuX38U7pXET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNtqBFyFC6w7mKqryHoeueMNh9RaWL4xknFWc5sW94D6PgauyFZg8ztTmdte5o7jMW1si9Ks3pwJp9Yc8A6NiSV",
  "key1": "4TGLHrvwfobQQBh1kbcH9DVv4ZtUtFNuQFh831fsqiya9KETxcPw877VBDpDZKBjaRMrqsk9kQQKB7uX43DaAM3N",
  "key2": "6MjXKk8ZUrAibNNpoJ7XK1R37FGHtSeQCS36BcsnqAMjeGL6KPVot8CYU6Zcde2rPH8k7oKmcBDHHJKYuT7wCXJ",
  "key3": "3Xdjzro2v3tNRRZj6YpoGqP5pEQ9rMahHoWrV3USTBKL7UmJJVc7Nw9cMhp35RWorpCoCdMUiKhQWJ6XRPD7UJcs",
  "key4": "31iKV4hwsihfwoQeEXfn4PDn3yNQTbgpHnkcj9v8JqxARa1PcPRZ3zs8PA4KN4jKgHsDTM9Pt176fweoBRwopg93",
  "key5": "3Qj8gHF9QjnytuUuyfdo7LtcvYuVYdJMXA7tL9pVCbEfRd5dJpu46yx2f7JyetQBMFhABTbCj9i1JBrzdWhH5xAr",
  "key6": "2W199HBBXbhYsSyD6di7sHE4gH1zQDxguZNRwFoAPEuGCLwXbLhNZ6BzQX6jpY8VvCbPbSp3YmQiMsnHDuMdcqqj",
  "key7": "77p4ndCU8jxvVVrsnkqZ7B3D2QFEJkFgxyVM1Y7kPmoJ4omHgym9BNTKLvBYYMju6dhzKrdAHHQyK1j2XQWTwMh",
  "key8": "3ZpkbBWLtT2DY64gCLax5vmDc94CxgRTmni56f1fZcUqnsKQMop3CAxbxe8ecSmZsKGPvMUE4GBjgEQxT25Ys8iJ",
  "key9": "GhbX27K9XVznr6rQ2aao5WGCLQdJgDzjrMnDaGXACy9DJLdrTQnQufe7mSNbEqKzG1Jfc5ENrkPXuTRBRkvm9Nt",
  "key10": "3cYpC9Cu9hsumr47oKWrd1fd7RtbYoppk7odvyQDk4X7pyooUxgNzdKzdNSxhDxM21fe8JMFL6uotsk9CRzeYgMg",
  "key11": "2pLsa5dMQko98H2rGAo1eKwoKpxbNZzhq7NVuaf1wnpdSyZ4CGoVhtVdwP5dtyo1vD1sVwYx4cK7QH856dNKyF3S",
  "key12": "39aNVPbGmB7gVGaB4jX9LsCo7n8pGxNwUPX9b8eaqyMEFpUxnVcp9GuxnYfjQp1NKzagfzHY7BUVK4BHrHk38RDR",
  "key13": "4s6xcW9wvh488N6Z4oSycXfpqWqpZEJe8fWuFnfgFC6PUGzfTuPNKNVyPKiQEaWuaTEeyHwyzRiscXbsqYEXAZx3",
  "key14": "3t5m5ZQAchVJb94TuuerfAWNi1zN8rF73JqbdT5Dh2gRt6AppGn6mZLQxiUS5dnPhMAjcxfvtA2bYvycWcyAXxQg",
  "key15": "5bcUu7fmJ6Zrx14x6dmJNLaM5GKWecgJhxnWj84mMmoxKFasTjYddjxf6XZBSQ4MMH3Eg5Lg81GGfmdzM2VrH6QF",
  "key16": "2Yii1hag8GQxwa3pWY4ueTXoLnbBskBs7mUkc8FJWd7PVcwLFNcRykk6dtKcSRw1jsznVFducco4PKKfVCNiBqyT",
  "key17": "ceFgSioPYfsP3jgMYheqh9yHfe6qPP81HFQTpfcL4z7Gn9kedmWfGXjM5z9QVoET9fm5Gt6VtXgGNvaycXmmMsw",
  "key18": "3cFhgEs1MWzjP2xuEN2VGfXw7dESZ7LyVUVGo85BJhqiXLhbdFZ6fnfNoYy6qfoGN6hAbuNYck4rWYT5VFt7Ko2p",
  "key19": "yHLKhQNwKi1Np43h6eJsLJCbiJG8dxVcjzi1SC44X3Xv2tXsScrnuFS5Vm5eG3yi4fFf5A8DpCUJHxDNJomshna",
  "key20": "5jPAiGiLqeq3Lvuchf5iKGWneDeepna2Z6KFi8PpR9MXdfBpwCpVKT5ggUENiWArp2n9fsLUi2DQUxtP57G5qqrv",
  "key21": "2nGxaUqmWibtbC67ZYGQgDY4D18SSB2ep2abTbWhGRPFAQp4XFk1xy23J9zfkhHQf72HhkuvLhCF4xdECCG8nmCp",
  "key22": "3ppANHAPeqHZtw9mnJQAw8bmCmqghMsPHf34Sc4pmCAdCHcszWA4aU4uwC66Q7CciQN3BofmbLCmQYtqah3WYPrL",
  "key23": "mQc2Z3GacEbGQ3bs9o2QhqUgMdy29D9keW1LCUviGXFVakYAiEdNec3RrbjWWdgd313dfmjr593JKTs8gQTuwwb",
  "key24": "3QjzWdg8cPRBzmeNDrcNcu5VVAcZmwgNLytncWobjZuarvS1vtZu3VCtAzKiLvyvFMwu7GFY28KtwA7VMAKLcE8H",
  "key25": "2FmhNrhhmh1gdrdciPWgamNoZ5N5KRFLvuEtsjQcbCJ6MzxNFoMXyZy16aCrbyHaHBbuQicYcd8tAAcdebetjyLe",
  "key26": "5zHFGvSf4fjqsENfAsbA2eocvqQczt17SuPJmiAUSBaVFnAKczeUawuvu4p4Lxd6qWWnTqbf2TwA1sRshGeY3Jg6",
  "key27": "4WPhvkAbaXCKq956Gk1NGqBApEHxr95x5MjmCrQfs6MDeDGmYmVDj7AsUifGotGb9DGuB2ZxnQdw8NcuBXn74RNY"
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
