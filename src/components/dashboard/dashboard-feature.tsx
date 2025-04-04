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
    "5mRB12RBm5UuwD4hhA6YvGhWsr5WAC5LgdwHKzPx7TG3tUPBkvrQA3CMcu9JQE2wAiCULT33avUHy4EzGrgKdQun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nsdiy7Lj3qptp91mtRLrR1fbwZkbbUtQXFu1Ajxp1qt75AXFMovnZLoB3XSCaGr4GEe4p6NSkzCzMTC12FvZNf",
  "key1": "5YV6Uu5iXVpxkkj7pMykKdQhMRZc754MCZmStaFcuFSJ5gYmxd5PYXR3FaC4TfoqL2LvTnT6fiNiXTw2HHvwtidx",
  "key2": "4XeMaJhmBMecpDUe7krfuPoRVTrQtX9H9HMibpnGvRVx26VUcDeoY9V8m9piseBaKxYWJCGbPLoKjsrLNhBZLV8S",
  "key3": "2gfwsbDyB56JnEd9TuU2NB45fymMhMRELEgRWSaaMg3JZXW48oqyCNPo6VzwSnkswqSmAvcm5jTszSfotJdn7Ahk",
  "key4": "4RQfk1au88uDekapw4VhvAgmf2fJDUurWAwKhAfp8yaRX8zTi42koAzs2yLVYJ9tbomnMd2agnYXzPvDgjQXXEJ7",
  "key5": "5tiX34JeAzWv7TP8hVJrpvQX5h4Azsc1mYdVoPnngLhDfHrkcZwsSpsJKRhwNJkjuFegGVG16c4XbaFcc696v68a",
  "key6": "2TePaL5jAskR39T3mj5mz1pMs3JAANZrf3bGC47huXZ6x4N9NuB9Q55qFrWbBZqxZ5ZwhGMRr39VZEZpK38D44TV",
  "key7": "5uHjETvASqosHJBzZkyDEMLyWQrkSemEcbhmRhyYvsnFW8ULwaEXXJMXbZFbpmDEmYH1DBQpr19N8xZMYtCH4WwJ",
  "key8": "4fPdgJ5HeECF83C2CNrNUUcjJWmyz58bcU14twABPFSQ2iUdGaFs35L4PyoRSryWb4cyDy1cHwQn6i33cB3P6d5A",
  "key9": "4CLY58G9e8eFrYWuXfVguKBzGFMN8AQ4nkwcXGEZesdb5Zc8eKjPTSdvWWJunsaJV4LanQVdRA39z5VaEKTQYcLH",
  "key10": "sqDpYydSQJcK4Dw7yGN54CHwTQtF3ighjVA3sNf1KHk2GFNgHc9DokeCP5s7vuEA4wpqYLrSzTLBJTRdMEPERvf",
  "key11": "2f5fD9nvfFfBwd7vkiLiNhLveWTQcxm64tzcDko1MpAq5N7Ed7AA5FAbDosnQRo4r4pLu11T98MKWQJKzNDaCpMd",
  "key12": "215VcdA8mVYE6TuShQPHXZWAFKJ6HF9XBVwqfydPcQX2SUwGdz3kXVebpZ4uQ2sgbwcs7NUj8fVUGMBxSSnHiazX",
  "key13": "4qZRAaNkSTQSao5d7FWDqeUZvAsMQzqtYf8wHRwJgZm8NPFU3xYsr9Mm4ejaGzfJ64SPStt9deX7q9MMooLAa8yu",
  "key14": "WLMDEBL9kCbBTQAxQcUpntoQYPLJtdzax1AHRe2qbVDefzBrtsA5d4vNLFXwdp6dWkE5jvNmYyyciAVxjycM5TY",
  "key15": "g8fjKjjegwht7BC3vVQbcVNvrGghRbdNyWExJEuphX8dn7e5LuFXxzYSRicxkFjWCZQUj9wGrURraCHtERbxppF",
  "key16": "4P1wPko4yzaQbb6v8kWSxuDtHxw3bkfLr8yzwLsQRXB2excpKH3BPbQpG3ypZoHxTF7tP3Cc9XN1FTuXbMfjy83S",
  "key17": "47QR7u9Lz6RxbjZnhaGt5UVoSqKBfbF1rwTDgGR5e5EKb61LM3JGTtwA4PqsLmEhGdhAt2aEUoi7crHfFaKNhtLc",
  "key18": "ADG725n1DFhf6xLpsWqvbaXdGdZ17aHJJYiDmSm5z5w9BrJze2VchNn8S5eF95b5kaWhRv1RKaa7S3qxv7v9zvo",
  "key19": "3jNyWSAGaYcxbFgzUBRi4ydmRvpSz8XKi4GSFjsQiRhb6RZNc3MtHRnwsLQrEqXHjNmQhAGuQ8y2nXRCf4M2Xi3j",
  "key20": "3G83yxnCVbKgwNBHWQKYERzjUtsTYC56n7CuHhzETHF46acwnBUhcAas9UpoTVxUFHcuNbEwwRXKDWapVr5f7jtq",
  "key21": "2ntHt8DgUepX14RRzL1JkeRCEJPoZtQn2tBC7aY82datAqMdfGprxUnuNCBGsEuNQEtMtorgUqLtAgvZvscvLwrb",
  "key22": "2ZpuY3CfeyZQyqgYbeEXHZwkwnpRJT51wWRkJ6T5sXarfsnXupeXJ7bVNDDEA59KT759VsWa49kVBKi2mXNXFast",
  "key23": "3HmYoS6K1jUfvLQaJq5pz3vDTg38o3zJtNFtkkNSycA1pmkwsssfMKfEPGGjz4dZRCnzEcTSMX7FG6rxsWnsvHQX",
  "key24": "J5f7CTAGgVZJYZq7QHM4M4JvhxpCgo3zxtRgAcSpc1aW8Ybx7xjhyu4332umkc3YRyubo2jaSU6NL8atyRGRBm5",
  "key25": "t3bPpipFckjwJERBoyDRrD6yXiKrgVJMFWpUg7L9hhstTPWuRZi9GwcDUSyuTN2joMZyoYyfG13nY8N9T5YdMCf",
  "key26": "46E3oLucfMGEXiT7furaqjnnoxyxtMnDB8p8Gteh9E9fvYatWCs7LsZSj3HJmB1FVaxYwTV1J6qoZqngfNmmFNqW",
  "key27": "WxRfajjfMEQtpfKjUP9erqTbTJxsSUXUcGFzQ7nkzP2ZGunNj3uZ8WVySXmJAmN7dJxEBK47M455XDqWziRkva6",
  "key28": "3qVpW3HBTxJgFAy4brxXjiQTjbNMbAYkB8DCMv9vV82pPKpvzvfNYL3FoYxnc6MA3neVSVDYJcmX4MAHLzrpudHJ",
  "key29": "3AnpQy6RTaGs7m9mDSiDL5cvVYHGjsXnEAioT4csanSesomeatLxu45w8g5eKE7Y8znkWckTwWndZBM9hjDC7kzT",
  "key30": "3mRBfLmyzmZHgHKHHpupPiVdbP4Be5v43iKhCKeRumw9X7RdteLmnQHRWmed67V4psxep5gW4qyi551GV6y5pjG3",
  "key31": "4bR2UNFh97gUG8myMfh35HTUKqM9gbm8psJhn4jua11n3C4gYR34f1yiMDisYaLa5mtVTX3aF6c5MUYogLnTeWXN",
  "key32": "21WJrN87HK6bfvCF9pTBb62XuQJksBK57mQWRpuShEkT8oJD7xvMYxr8jg15LXCLfkZMjeL6WhTujS6xCaozEsWY",
  "key33": "63ar9aWX9VfVHLonXDpHFAZzgV54vqdutKyBBLcSiGTx3HDTLV27yAsH1vjG5k2u6bzXLvUN3uTQYSNL68Q22iH4",
  "key34": "3VjYVB1D1HogKZZLE3Le7u6cpAkUVp2gvgwZqu6aYRx8JTkr3sNeetCaet1jMdRYNkvD84MjsdsBpZhfR53emWFx",
  "key35": "4qw7dMKcpTD5kisz9hYXFte8JRh6qTNctFyUPDba2PgQyaK8a4NNk6xfdSGbSZuRoKtxjZusXDgXEgV6RmagEp8r",
  "key36": "S2CVZCLotqFqCNnmsKce5pHW9er5zvN1VJTaGhycaUkr6WmkeASgkN2nTPtBF5fSrSXqPwoLvsViEPcVyUvZ9ye"
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
