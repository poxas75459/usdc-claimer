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
    "4ACc5C9UMGvNUvquyzNA5D6qbLVfZEtTFn3ZpMDfgJ93Qa777WpowmKgNxRu3BcejcenLmenVmRic1oe8QGPsCQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TB1hzZsgmkuxQqAW6piaduu41mrgRJKm8wvpPnHFVN4zVEkC1LvCzoZUaXFa2mEanrSJY5bGA7DR3qANfxahT3K",
  "key1": "5JMSKPkRgWYn1KVe2uMLShUd4fRUmgVFzHp8k4eAfMKmsJmFb6z7k1jbm9gauih5Dy35ua5YFypbJ29XndYrhhaZ",
  "key2": "4GHfZxJ87hT5JXDZNPJstcbGaHbi4HdNbYA7XjW3x2xW9qHtmprBeBMhT7T3JX2EQ5YNZRmB8Je6KVmNNfka16tV",
  "key3": "57Hh9Hix3xzgpLu27EfGf19c3dKCM4aK8ftaavSyx2bDrUM82wnecZUXPueXrc3ACpcottAKWEQERy2GVPJvJtBw",
  "key4": "2WsiwNFDbfWc9DR82hrUdqmhcDQgaUZ1YDcvzaVXywQJscfRerTz2QM2HJ9tu7TN3C9R47oPZQPQW9pZwv3X4Db5",
  "key5": "578Mp4ar9DTh8gWBwAPDWhbwFrVkcAJsGrvUpejDciSiSHQ2jMmpyvmWqDM4CWfBmWXRTtbn8WUwn834Fcia8Ekx",
  "key6": "4BBAQN93mXfa9Bx5nqqKgWddKhjtJhjHBM1knWVf5kmeGBr4SUe8HJeXsJkyQTmpqF6YaokCm5KEZyjTwKj21AZg",
  "key7": "hMWWQKyiSgPH2ZLUKKkWycdEASwQhzZLV6Ev7qxf95cfnvWLExRY6hmaLszxvyvRUTDPvBw3qLVpWzBts43UbwE",
  "key8": "33h2e4J4FPtZSWvVhXnVcvzfDzZF1HfY9R7E7vWrWzk9SfXuxxMQDGNjCEsqaCHxEFELh4QSLDDgW6XG49ZEsima",
  "key9": "27NzbveD38YbpTSHVVwWmM6T8x8HyWKzFJXzVWwfxTTjj9LtBrTEEiW7jcDmBz4ijpJnRjX4R4EsUFV6UbP4Vjrs",
  "key10": "Rws5zVVKGuTa268rnuSHizP1gFf468P87hLxfZk2iBeirhPz4P2jDS3PfABC23QCJWNbziYHvF5HTya95yw1sxx",
  "key11": "SpuKbmSSssMDZdbVskcRVcUho2XL6r2PUNyavPvTwv5bu7hwBusR9eD4VhoNuPyzymtD1YCCfewpEcmDgqNyueK",
  "key12": "8LP8j42cSvEUn7EQFRJVtpkAeMGAAr57QGgf13yVpCKPyNtmBgP1Wp1bro4xTvgPLCT144qsPmNur5cp6oygm2Z",
  "key13": "2VDSP2hZqA1owGeKiR7tviCU8CmGjRW28mnNHicVFboEjcSHukAbA7Nj6gdq7aoV3Pzh5fV6jbwfSTYzfWpoqjZ8",
  "key14": "27ngBT55V6yt9jBVBqjX9cySG7kxuiDahEAw7mW1YQphxFZuQViBEC3ufigK81rMWW2wavyHKGoGxL3u8qTHEeeD",
  "key15": "55LtqnLjjQ6WZj9v7RSNxYxgfgKUykLLY6KGAnYaAMcecozZrxQuH7NjzrnDdRGoz2sGWemXmP3y3arKKtoLtNrK",
  "key16": "467ZEv8suiKrzxW8KZbuhA8GanVyaZVQhmAqsqrLehdg9KfoxzAr77rvDzodUY1wugew7ffnokuzbqxxVXHvgudT",
  "key17": "55cWbrsthgB5TDwE2966bn1uEaoJzNTis8vi83hbTCtzM2wzWKGFu1KEXwV8NquKoziaG6TFCPW5NsAwWRfqeWzv",
  "key18": "44d3N4XwQFzjdvo6t7gX9bLavmf9D5sZsSLCh1K1t7n6VYnvq6ADmhz7BVfx4DeUP5p8EawsHm6SZFX2FqT7GH7g",
  "key19": "2FgjqW9FPnx1u5L2hw8aX6e4cFix25hGdQ3ecnw44PuAUGC1xxfFM61dvVHGHa8TdKuqgvts3yMHCNnswAczCZQN",
  "key20": "2PqkqVYgAj3HKqHoG5fUFzakmk4hYr2YHd1YWhvHyxBidFinVcwBPcR1jM2XTT4qRzEkXagX1M4JrU6wBA3X5Ct1",
  "key21": "5sHwcrGM9atcmAwBySX9Cb4dyQcEpbvFN72uCsAVNLWxcrGS8sTxSuhV5ntUNcKu4R1qXJMHKCdB2xn3mr9kWsqf",
  "key22": "2Y4PCBZ3dVco9pFzrjTbEbwUxHApBBoFpoBkBnESwZdP5cSzLJsg4HQLisTDPMg2ko1pbzGRHFSULjQdvzwnRKYJ",
  "key23": "xPZtAdLbsaAFRrUSEhPnzUnNB1Bv82FKpnVXB1kfiGNPJWo9uyLh5WrghXz8pK5f1h64YfoJsVtbxaNwMPafDwM",
  "key24": "4qjx63Tp2eBGt1ArVCyNqc4Sjden2PUH21MWtbwhoEsJfmQez9H3e7tC6SJA5SWbkwaLR8LBmoW8maQHF4US7pTX",
  "key25": "2Z2Ybnk2QyG6AEwdFXZjK58oeKhAERgYAoR6aVhdbgMjHGqk1AccHCnrtBKdaWqs8cKtj4dfjP3efDFskPhMHYAa",
  "key26": "4af61g3ftVw36nprydvVRsFoSPV5FhDCBN2zngvXwRDfjEVDULBzYHu35TV4Cm1nS6GLsQnE3YSj1QD1wk7med2S",
  "key27": "4k2L3b6SjNzk5PGtK9JNsSQtRDG5edYh1eo6CQ9pTBSMpv5Gb6YbJiUQBoqwma4GDenZdNQuiu737vZ8ZmY11J53",
  "key28": "2d9tEi3w7JNhRhK2MgwVkCyLH2RJANYmzzS5HJBvZ1PV54WZt2dpryjL8ZP9eK5ffvYxo95onhHGxsMh5HjTr5jR",
  "key29": "43m94X2ZzpjW2UbQNM9eaNncFrbeP6n5xC9Qe5eqRuLwRqbSwVSsPvYLTXnxGZiKqszwu3XE4diB1U4FhbExFh9n",
  "key30": "dfV9iKmwaE1uzdced31yLu4EdmfxKWLLw1PMfn2tkpxM3oV935jMHggzTNEEa7uRyCpenL7jtsfwqZ7VTeHbRjm",
  "key31": "4ztcobkpaaqghJNvh7J8ps1j4cvsfm6ffF6mLTpJhJKKNtX31N6fYwMHrbhTpB57HJa3SqDY33QnmgskE2W5daWM",
  "key32": "rJpbVpasHwNPtzaBKLPCreTdh94DtsHbMwYDbeYjMs9SojxocYxDyykS5LNtmeKVrAaVvf3Z27BXu6bPRiLRnmN",
  "key33": "5W3RAC1p9ZfKCFFAQUo3WBpuTp9ZjLxyVG2VnidPky7Q16THoqwLopDPzL8toHd6KZKJ9Ui1dXFv8Rp5ZK3N7D1a",
  "key34": "5BCpeWiCAwgNMAMpMDJTWUwPEV52XBRTW6KQA6kmziLf9CcTLr6f7S4UpAeGoTUfamPju62SMRkqLi6FostQReDn"
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
