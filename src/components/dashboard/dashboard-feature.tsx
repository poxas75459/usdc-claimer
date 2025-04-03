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
    "283bY4EAfrqy3ZeR3xD158v6NSdtZ3Xex7rL4iN8n6x1fu6rLw8WuUKSmBzGipKnSuwgoBjpCB5YM437ZWidkdpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ghTMFtKd4RdKZkCeWGzKMBGPvAJn58xCepv8H9DXeVfuSNxPPiRwLS9kfAsbxrz17vU47vspyUVZKJU5PVDJiW",
  "key1": "4gj81s4QxnrHkSuPhjSAdbA74tuLqB9thbD54ihidLJgnqCn3dHjnLkUnSxnpYkMVyixFxJbib4FN8peSADXE5uL",
  "key2": "2DZvsqWBuGkuXe8JZvuCqfh8SRzfyKCeWcspUZnhs4moBARBMJsrwDVzaJ5cX9CyRgPPtj21ggrfAW3Fr7FtDbQD",
  "key3": "7gqqLZBQbAswH5KLskHEJnveUykz1Pa3Db4F2482qQqTaM4MMdbgMnmZ7tkkpxxtbQFL7xj29rmX1XfaSMKugj5",
  "key4": "YfJo4NdAbhvy5CptKNg8iYMS3EfrKEYhach2cV35v5HHqhvVveQsfupFWnsvUoL1Z8tQKWLwLpPwB9JYhxLNeQE",
  "key5": "5bjqrTwYaDmwV9eP5uqCQovrH5QaCk4ZPSeypcUuf717BcQLrZSZzcpjsLrs9DpDJXX7TdaqH1sQLBQhi7XfKW1H",
  "key6": "9kqTZPwDhhSew5TPjDnj1YpY5wVmdBqC8i435iRZT1GFMRvxaDZv3Gi4k1cKSB2UvWHuw5m2PDm7iLZaU85Go6q",
  "key7": "CCpHdpx3GWcrqXKvZid2Vrj61E8UFm5i6AhECkmYDCrENvFdrnyxEGKBzzKZsjsELW1DRg4r3KyfjUC3DweS4pg",
  "key8": "63U3rC3imEw3QRr16mCWgEc8S25Ws9mHEvEM8Goi9dg672n5Ks3mRR6XMtvKvQko6K67E4iGcTzMDHen2aubip6j",
  "key9": "PDJozvyuXSr4dV73dTvNn13YqjAmYjJSZPYXSsn5SnmDHGL3L9m5onu7czR56XXbahqf5tes54FZK5WuuNswokf",
  "key10": "3rmjy1qBVUXfKdeXcrjx2G8k2pStYGBiDik7hhEVu1q9r3ddktXPq3zAe5NySXAV13KNiVNzfV5HF3WCBXz5jSgx",
  "key11": "3SfYQBj8Gu7cPAiA8irFETH9bJpMdc7Xz1nkpohpbUz6ee1Twb7KvJYsK6VPSQDBikYN6eq8eLrxocGyjKXej5f9",
  "key12": "Kds7v9R5vZT116o65Dx2Eixyz1GKo7eAEvGv2e4FcWZzx6YtURKMM3KacV7MfeT4cDzNgAiMUzCxQcQj4nyqacK",
  "key13": "HpC2pUKxaPJdcjYbbKtu9Sa8x3SzJdXQSPXVxiZyqCFdXwnVdjeyiR9fAZ4muMEzJKciVTJVAtUK9tdELeLmQTv",
  "key14": "AsHuMAuggezmu89WGVQZLDchWCY34qudqUvoegy6mFtWgcffmeB6qKfrq7yrdHEtHAoxEEnyfLqpUx6SmfxdKeb",
  "key15": "4op5fRekj51cWHpgxUhNnkg6HaR4HVY7rrmoSw4DVXoMS8rqZNayNrmpfNLFRN8Q7chgmJVje6Yr95YLn9g6ke9b",
  "key16": "23QXTGF1zjtzYZVaSkGFohFVYnr2RSrbcoUJg5sr6VbGWTgQRXXkA2Xk5Evp28yd6VcdckShpL9w7XjJPKS87cPm",
  "key17": "5djkhDV4wkbLZAxfWmNmUzxxFpuQLMKotmCe1isBQJRgj5aehAeP3t8dcY4EbV5Pz7Fq86fZbz4PA6EMf7Gb24nS",
  "key18": "4vFtrgmrxTknLH7USVzqZRqeJtyKjSLtzs3aFt3vJ7ScvKA2akazEpqfWTFE1DmB2enGgQf5TDCMNeU9SZ54snvR",
  "key19": "4nDSx3cXLpyUmq195WeBV1DAf8GYqvAVDQzTXDcMwWF9qEvpf8MnD4WkT3h2puBPKSvWUo8ZBrannqW7dU74ymwG",
  "key20": "4x2sg71BLgMC3Jqsix6z1uFKyKFYZ5RBn5ASRhX2tgd6KCsywJRmMqketFFXGYWq5Gfw6pg5Ma8JvcdUDDFWMHEB",
  "key21": "5w5ivspMVvatAGqmugiMabhigbH6TTLtK7daxycxT5CR3q1LgwWUisWdKfUWpYGBpodNreSdkk1zGWubfk84cLSF",
  "key22": "4mLjV4qX9i2uRXjTHHbUGyVvTad2or28ecbXFqh5t3uBUCxq3WwdFEx1MFhHW6vFQjJr4txNPx8wSSpVt5RrGZVM",
  "key23": "kV21E7Uz5um6wfdmJcvTqaSDjSEdgciTWLHzAFhiH37nmAxiRVDJQckToGzWkUbLUbGdXHeme4xZa9BP9uG9xcA",
  "key24": "5ox6zFs87JQMc81kwaLnkCkaeSjzWRy8ebHC7LqDAWt5jAY7dUAUQW5ZVayxfo2iFZPy9MCL7kNfkEejsgvrgrfq",
  "key25": "54HQf8vNpqB8tsqKjEf8tiJk9AD9R9q2FqX8mjZirGU9Uu7GE6yqwCas3V2d91zcn86wzCzvnzVyvUjEpuJifGwJ",
  "key26": "g12am8qvmvNviunxdLL2ckZ4akJPB8wyGeE4xTzqjwA3jWxGq6uUK1UDQZyqAv4zwf9eFfXoRLbcb7jtzWLjctL",
  "key27": "aazeW3XiLfpMr9aKr3esg9ySZepmvE1VFbbhzWBRBZ3VAQRFpmfoFqJynMywDyjMfFe61K5NBQ65YV9HxL12ypo",
  "key28": "ce54AtSs4y4LwkxwfU7VZqs6CLrgd4NXzNXk7HJZydWTYksWvPD9eJXKaYJUn12xpJD1u7NDjthJKFmhUwFhTy9",
  "key29": "2CU94k66NnmQxy3e7uLDUcJuDMWP385vj3zAQxwWcPuhFs58jiFTRoaiEQxfkmHjWUWu2nnDVJhrh73oRtqBUA2u",
  "key30": "2wHUk4GhqF9vErGG8Mq752EKC1rxSZLrABg4ZjPfqReSVeCMwi3pcSCftVfpnYxzWPV4BrzsD8UmUPeobsqTtG9e",
  "key31": "NFs2WWPhCZK1EwsQ83gXdCY7gqohi2FzhLQSELzSpw7XVZKn4hAxQfbtHz4B1TqpiyuamCZtvdeAHp4ZQ2oMShk",
  "key32": "3NTonEp3KK8qTuW1mc99MHMjBYaHLus7umJPzrBexS8rVaoNZ2ZNiY5TwxQeUsreRRckfhmyiXhNYuJmqKgPmd4f",
  "key33": "2e2Nd3bdF564gAVatFfYDD1gRCTwwnQ1NFdmc5KPTkSuCFTVF2ZscK4Yq1rSxVKbaP98MuZZJ2QpToQivSPcgEQB",
  "key34": "3KVisr7epPXDjvgzFsNnQgaxS1df2SnQPawigkUAawYGErQiiU4VSANvGTLXytcoJVPSED7SbcDhurYatijem9VQ",
  "key35": "2YQ5HEyn5sc8Tbo4SYnNo8mP249UnKnEwNrgwiNnNygtGAbgSB3d8A67fsrejdogoTLWnMEcmJfnVYEDcuhoHKhv",
  "key36": "2Hfwyi5Zcz3rf84BE1Q1EDd6XkFYc9gvrrHe2Tu7A1KrMD8Xf7j8txkyb3bi8p8ygLorX3r2L4wu4bt1uJVjECDY",
  "key37": "57y5W4cTXdfjjSfG1puRYkP4CVme9gczS7ZFDqAirNQyocvCqQ3y5eJT8ibWWSXcgVG1ZUkEykBgJH2AZYudVgTw"
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
