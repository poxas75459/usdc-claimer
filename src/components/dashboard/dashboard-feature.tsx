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
    "46B2bPV6jmnJTuLV3VBN6oGSg9wTebziHgkBqCS6urpX9ZWU562cbS9LcGcNSGgwmqP7J6Xx5fHvTPTa61Rs6F1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ra25EX2XcGa3GZAeikMTPeFxi2PmXUPB6HSu5VjpaFrpNL2riXzv816wGu6sRbMemhr1h4yDPrQpzT24nJ6Nhre",
  "key1": "qyWrsGDydYwjjYtuR9Vck2XwiGtJfraPxqZAm17GzbpJwbpmScLwYXpwhyaQp4sHGs5cDftANbTHbs3SUv3GYvj",
  "key2": "5zyJkzgcfzGs8a63hUCA7qoNi9EvUTt6x3eind2iWme4Mgvjh2wQSEfRhCBdtUkbdoJhSvjxUx9wKAYjzHuKhY1w",
  "key3": "4Avoe5aEW5VsdjwLsEWtCs1ss19LgJuaiW2zhpMsarMVnhgwqi2GgLz3cj8M86M7UoamKi3RFiRirXwyQ6psv6B3",
  "key4": "527XsztkKTjDPPB8NCHVjnnk1PoMt1MCrDbBgdkpgRF7rhcjg8H2nvDLKT6wEhkrzGFgVQzRkZkUEFtTX1vsbANc",
  "key5": "47zHmCA7APzj2WbdiHEEv26fqiYkFZQbmjWYnq5361KVW33tmybM1RGxyR1nAUnJF3tGcFEeGpz9GTL1NwPQCNDX",
  "key6": "29wTR59xHpWNbTASr3rcVyNjooQ7duwS6s4zRvAcSrmNmTmSrkSxW8EzSV2ky5FUDSZ2p1rMkTc35T2os5ucKYL5",
  "key7": "27T7YEPUrJrojW775xmFFRXeD7doedaq5tT6orfT1Y4oDfXgbWaVMhDKSj7qK8PTuYQHWUtiX5iL4tBhNAPoJRmp",
  "key8": "WMouCgQQfqzSbUEk4w99iRyaWRM2YeGkJKEKnVr7S3ymZPppKjrWr3XBDwEW6BJno7CqtqUvtp6fd7Ah5QYFTRa",
  "key9": "24Uwi2E25RwR5y1t8AYKgXkB1x2pnPssJUFRKf2CbhqCEeo56db1L7gv1Aercp41Ga4b1BTd18ESdNVnKH4NZM5K",
  "key10": "61FZpNfAxfE5B5XiKDtnJ2vRvm8bJMr7iPAKsX9gSMUtGrLsFfFiy2v5iu3fswZwPBPcmFiXRASgmAf2pMKAhsVU",
  "key11": "2mwKUstgqB4KUbuUFGU2EuwvUM45PbEwUUUYdNtB9M7MEJxdYo7pPrwdMqwuCcTr6kernxT1xCrPSn9BaNWZtTar",
  "key12": "EhydRRtoJwNS2rTR8X143rKkC1ZKw2ZDWPQBYMdZ2fBffAJP3xagbh88Py8ZVyoH7fce8H8HTxn9wGuHDTkd4Br",
  "key13": "3vvBx4MFCDPtYPHvRBu8HHNt3nCn8S1mZzkGPwyPuPLzGFDkXhJw6iT34mDNvgwUeruwoNUcQdjVZXKGWFBytRJS",
  "key14": "4woJxZn8mWK6MXS8bwLEJBY5vgbbjkuHM2nAyvSw1D8F9LtG5KGftLMiunDYC3uYJVAdgSaXFcGxuooCgfhGJfYj",
  "key15": "4Wsyi1JBCxe4R57rw7FwnauKtuutUdCDx3L5pqV5EULgyicpaWp7PtRSfcUui6oPqc7xz1WbUdbUqDLXsJ9UhjDY",
  "key16": "5FBVZjbvaJP6ah1EbVzF2o8zinj4PHtgyKsQkCxnvxy1qkKEbR3e2dZcqHQmdDjWMvQpHiA6okFj6EjKBaWUZFsh",
  "key17": "3B9TWh8H8rFkrKvmZB6jWLYpUQ8YsuUjmMCQriRQJnuPyiRzjKAPk7mKJ9M1Ca8Z6YwG5JifeZEWNWvw92njkyKJ",
  "key18": "5xCBAKZFGQCAyVbwm59StZAoqkAPRHwWb2Qg9C3TQq5V4uG2Vyk6AqdCaEkrv2quFZq4pA4JNYBjkUYbuF8BBkPK",
  "key19": "2LMDGMmkg9xNVFFn8Suya3LJNqRw1eoumoXawWPUpfFevFkReiRvVyv8NpbNMRuk8H5WadbxyDLbDQRNZhwqA3bD",
  "key20": "FDfWNfxuNLW1VuT5Cmn9Yvvt8gRSynaRztCwEgLPNB8Nv7iKqWAcfUv7JdZE6oQwBM6nNxTy38Uq6VNyUaau7rJ",
  "key21": "2P9Mcs2JVcF2KmEMsv9EXXp3JhWKP6fv6iG3KQSZisrG7rrxeozSKZoCYiK495S79nAXPmkNdeqcwtzc3cuoKFQE",
  "key22": "4nqWYQWYJ4cHeVRGhyxwmTau6NEvvdy1Smthaji3bfgJJxyLZ55SUMXxHCBT45onnDrXBBN6cV8BEvqtzYhe1WZ",
  "key23": "2ZJUebwtnQC9eJyRdNbetep6aBx2rXj7jhMTxEW8o5GCnGRo8zcYZcNWZqghAS2ddbDNQvxYeQ2Sw7b6VBPuCNKa",
  "key24": "5ycLLJxfj4g1jbByw4HASNh9vZsENZ7XY7AjYi9F2hvxR4iSQthWBnn4bWgnX2HetNKESjSbM1zgZ5koumMg5PUD",
  "key25": "5R9Uv7ZhLN53pMcNnnP5VSW7YKL8ZSUW1p6AkyNKd7sVv3J6gYuSLnxACTvQW3bSmguHiaKjRaPLHS9RQGY2BAoT",
  "key26": "Z9yd26B5BbHRmN5RFv6CL2o1PtLpsHSuKRYG3oZKZcjeYLCUeXDsGrXf4Qtv3b9JdfbFSi3BLRRK6XvEborYke3",
  "key27": "5pexF3W4mnkesTEYiTdt31Vd3Vq6ZBLJL92v8WLLGCnCxgbSm5iLnTUWCxPcWhV5sBe8HExvUKtUDwpW3DYcZCor",
  "key28": "5ihnEULcMhrmtj1EJyaXhpgAmhsB5h1geRyxvytvwwueKr6aiFNj6hxazAac1z4Af7AxxTU4jRW9AwPCjrcyTUkb",
  "key29": "3dt7zrD7D2Bq3wsSRsXrMeDcBGYG6q8TBPAtdbEtt7oMDmekJYfhxTdxSwuPuEEEZmk9GrN9gAhU6Gku24bHBf2H",
  "key30": "31cwTwvHVBFBk8LYRVBSU66NuJ1zX91o451ZgDvxNEcqV8tngV8FqkZWnT3a6mMJVcvTWXshopgrAEm3vuUWZqK2",
  "key31": "2R6qSoRbiREy8QcMhXH9BehfWvp3vT7NMxDLgPpJYLyRyTi38pYssivRJBzgZCpx8KtocayGSuWoEyYrkzDFRnFU",
  "key32": "4ZPj1CPshTpUi1rcARPqixfDZ4Vaa2EyCTySYfKvSBLPhPSVoT5fgWtmVhx7KzSh8Zg9oJj27xdUjh3Cqe7e8DCz",
  "key33": "PTZXu8wdNxdEkGDNqJ8nwJdwSBTkoaRnJmWLsCRakzbSKLLtx3EpMncWfRuvAfQh7byZYVjNoMqnBKm2CkB1uds",
  "key34": "5gKpwXh7o8bZxVFU8LfYwyecknD3fWXqe2iRLf2Q4dafgGPemn7kxjrytRGRuJPazo8oSeuvyVsakfk9pSpcVH21",
  "key35": "28SQVDAfrLJy7ty7zYeSF7V1J215QAG9iBEvD7TgvC8V6vmHDeoCP27ym3tTu5LvMHBH5HsQz1zkmfepaz4GnMQQ",
  "key36": "555mJKwkPsgkk7M1ZG8fADbSq85jr9QAaWHVjgkYjPh5t88rjuYrCiCyJ887756Sz8wFWVJBPu1goBPEnHv54E66",
  "key37": "TYAKVfKzf9udDgCGcDEnXoZJTnZLCkFYH8z3BZzP6YEfaki1PmD7fAZ4PS1ni4xX1SHX3VbsgCwt4nHQA9tmkY9",
  "key38": "46Mq1CBTpp3MPK431Qrru3kVaBuZWcqqzgWKcwbxxTsTDfxvFGHaD7kV8UwHHsrhAiQciUTgF736aDaJChTJF4zQ",
  "key39": "324WK3Rv63tDnR3vRenUcem4jeb7Va5JLfesgCagJhrsJhwEHkPGNGipiUPvRvi7xMtf5Wto4dzKGgzvTQeGDvBf",
  "key40": "42TFoNR4b6gMyrY5aVA89hqBMppktJWJjNrSdngRfhVigYkVZmtjqhkojx46LZLCYnVLmWkgxBVm8KeRd9XT86Y6",
  "key41": "Fqak4cAg2RHLEnXQDyjZ95jfW1KgpCoKSDedV2pSdWu4f6XyBM2jrGUp3D9zHJJQz6qCYPPrKn7WbfYvyBMPDLw",
  "key42": "4RET6Arff1R1uZ9pKsUejPpR9NW27qhFDA22Po3Cf3J7WuQ9dPnui1wURok2HH8XzyMBrxxFAnL8eSszK4bdz1SP",
  "key43": "5R4KMbjzvhBRgrjiFtct8hSXKBboqMCkeUBGsV8iDxZ2tmY2NFQUxPEpJP4S4H6aGiP5yHgdDbpDjSuNNg2qoFcU",
  "key44": "3oVXY7ywA6T522Nv4AdcjtJKTP7pNEToZM5dsX5FA8GezfFyrBwqEmhUMdWV7qJ2TM88G56iCgqy1EwbosGEfkbt",
  "key45": "52d89f52h1gPCvi5kzUpxhKVMimXpjRz1VAmw3h8P376XPKfPTbhh2NJQkp9QVyutKT11mjZ9iKoujJLonpeYahx",
  "key46": "2UdJUqWV6JhdZQXaEKGjDaxGXJU8QGN3APjU6KqycE8XxQ83rHxqcbtMnyFWFEYhEZzFPXZnV6aMWNv9VGB7asCB",
  "key47": "57oYtXj4KB1Thvk4CQJZ9SfJFYGESFXiWCrW6xyFc4AYZBF2AcbQD6Y1KsqoatTGdFXMgYQc9fYydWD63iWoo8NN",
  "key48": "5hdKRZG6MKiTPbi7k4hRgLPhBGFZGcNmpkqDYGRWFT4914c5McuqJSu3Ya66AFYWzGgCSgYaMYU8uBheRpanVwRn",
  "key49": "41kGTxQ18ndy5kaaro3S4t4UTFCRkTDUMGk1B18cqoK5twYX9DGeg3W36fgw35MtAFdZmxm4mQwHcqJJjqCF6gJp"
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
