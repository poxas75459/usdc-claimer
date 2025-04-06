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
    "624mdjYp9ehZYgekNRRu6peNb823WrmtmdvEqgNyE8UEMiC9xC24rE335zDUFuKxVaYeVQ7TS3F92AYVBJGW4uQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x7VfNib6YH55u9D2JJc1ucq7UTQrA1Mdx9FPxFogakGCJ9oN9XypcL7Nz6omg3UzHsrnpdsFMS2Wjcnj4YkQ8Lt",
  "key1": "5T393g1YUwsuF1avoKhTUrdVgocdCimUCD5xCRYE8yuNnCgb2pV4oiQkWoBhmo9BRh6KFEhq7A6Q38bPVuSjxoN",
  "key2": "ygw42gj7YeNiQybm9MtMjonSKiZbp2MrH2iujEwz6Z9KbnXdsftEdzKv8TnfTTdreoBqUPaDY6Vw2MMCRh9EiSu",
  "key3": "2n2bSCeLMCdXYJFbEDZzC1KExhLFtgoetSZteutWuHt4yQtSRcmDiMDV2sLdfvahBwbL4D2ytb1rojhpHmyrVAaM",
  "key4": "4Qv8rnPrRQoWh9V6ujx1dXAictd7J3nu66NcMVbPurLYi2YWwZ7zJNZEYNaD69r5VH1AR8m6GYcesEwo1SATjdSZ",
  "key5": "pWLjyYzK7Fu3PD1diPn7c5RpawoxjmcDUDD15FGNZNT7HGniKvi8XW14JLsBQiozw6vqmAfNr1S7YLzV4hVj1wK",
  "key6": "3R61EFZFnmrzCKfzxFmJSvN2kghRNC4CSzuQ1CFxjdos63PSHRQRgGf5qpHaSK8WKwp5gwYErWqhT4cM6YqbEuBZ",
  "key7": "5gF7gjbwUjy2KCM8jfVyVMSSabi98x2TF3ow5ar5G2peDwiv4RTFxngABnKQ5QQUu2136fgKcV3ADFpJvmwYN1pu",
  "key8": "E81FjxhwjmX1FKeZVAT9kqamofgCHhSSywKC4mJk7TJLMBRD5KmRnmgx1JuTET631UJHL1heiV6DXNdFGBWWCy4",
  "key9": "4Ym7YswJzPLhFmuaXGeMq6MMb6XpcqwVMjSj4gfJctuZnbYqyCkz6vwLndwR6Ny59zTvH4HgA8WjhoF3xrWsG4UL",
  "key10": "nE8zPcfJ4PcacmwP4YrvkPrhTU3MPnZfXCfLn9hR5wt7t5N4Psuqj9HTHRXqTankism3Y6YruqAjEsbBouL5rKn",
  "key11": "4gWdxzicLrNrmCxZkE3rCBBjSPHwRGVUKAH4LynFhHiPr76s791R9Bvfw7HREon3VcNNqh5MfccrV8x1Y5G93pb",
  "key12": "2kpvjxPgEZkzQpmYw9TXgcFQyAcoUGqBn6k8hqQYZugGmhc2pxBkN7LAq6tg1whRh76GBpgBC6HnAoYuH95tGZte",
  "key13": "4dnFhio6CuG6ubB2DYH4VtgNJziamBmacaofbXc9L4V9R8E7oXjZaZEQbNSyvXmvg752TANwFhp3RUYUTpQgxKQz",
  "key14": "2JU7b3CvDykX3qdupjjLePPC5fqHRU69bENvcWjMBVbhfxPVqcEEHARHFnEkc6tXwuJmbnVxMhWUGA9Ncgphkxoq",
  "key15": "5uGXwUu9DJ1U8Tmq2PE6vTLRJfxzhUbhuGEV5hRNyE49rVGXkcsuRxAfGx4NJgesH5wEAc9874AidS58Br5B58Wo",
  "key16": "5TiUHHUZ6714FffS7PhTcGYPwuecv3WkY51DfLWTifJ9Rg3pUAHjA1UJ1ofPLdwxsW2CAYwZwATVCeBg1cBwahCx",
  "key17": "3Rk8X9EA6DLy4J9gMm1R9agV4E5r1YVCpZSEDNAGqJtqyKHRkr25XHTpW82nX3SVimRbJhdjbjPV6rVwou14fAmQ",
  "key18": "4p5oaG1A1Gtk3QrTr9LUAMGctBtBqjiBZT3MHLCgfy9Lm79kuH9P8VkM8ENcDkfVgKvZ45eKYnvWYLHc5giQBRtX",
  "key19": "4uuuAZRTw5YH1yecKnNukxVpaJ1KLZi3ucmHq4TBayxs3VbhuSuxSEgjqGgdAqdL1EiDBJBxBRSzxViN5yYaH2wu",
  "key20": "4t4T4TLyPCMvLzij9E9FCrBz9DZLUozi6RvdayavyMb2brB3ZeeYeLQn7XBenLVD4qfvt9EdduQDcjBfWja7iLmB",
  "key21": "2gdgbUhUbWxo5QQZCAZtrTWRK1NHKXNJGdu2TcaBTAckNQ9bRxax4cVt1DA9Rnb6TbabqhwuerD8GMferGtyLT51",
  "key22": "4GqPNkDpimMMcp3brJNqAPtFCoa5B7Z6JYXXfaTPupqrrSbMG9tdhjAgPe16DnSG7ob2XaBTTxZkd2RrTmEdbLFq",
  "key23": "2iLBjefBEcCHqsMd3zX6g7vN46YuMMMgqrxhgZWTBH88vUYLaJ3dxzMfQUNPSkaRd1SuTPyE5FomrZW2sT9AWsbx",
  "key24": "32uqMmdsAaSKb9denU44dBNkwoy1AHGaotDQjJEURrFybGK2f6pgKwkAU3N87KqR4hJjDZEYkEMoaYK1PUSHZUNP",
  "key25": "aEcKDN7ubvoLJ6g31ydYEYrhrGmpdEqTrJN2rJrTix5fsgQ5EiNPQL16NirhJRzJj8Huo98ai4FXRTbovE5oMqn",
  "key26": "3YjQVNVSzXB6VSzf6hAkDRAHeazSBUoaYkLsNtK6uXSAU8WTkQjvvXBY3nWY6trJjekxWzwDwJEFjPhZwz6y9tE7",
  "key27": "571uoyhmEiHD3H4U6h97vNd5vq29oVfSWurb9R35rfDEMWFhs1jrKKzFYaBamZborev2GeNGDVZi7qF8bLrZY2KT",
  "key28": "3USAKHp9BV6t7kvtnnHnS4QdExBk2nVJ1NN7xr2SUaWhkqnt2gLfkEjfLRQn9PTuGazMQYm5stPLZTCVTFip5hoz",
  "key29": "3VntGGaCoN3pF7vvuBthtn44hHHXSWQEuJrqu35oegW5Wr9vpofPtqjNS5Lfq9P8LrQi4XF4cVbVCZUi4vQnPW4C",
  "key30": "5emu9v5KG4GRKdVnPXXftZ3D6yzyccPNA8pgi5jzhV1RxzMVVBCZa8D32UAQk3urvBfU3XLeEpLSfr12vDshQuJ2",
  "key31": "4fRsDWKHYKLz3ZRWvjk7YcXhVMAmfDKSgH6XHRw3RTkr7WVoe5zeLy6oSMmyraYGbrjb9JHJ8q8nX6KdDXnc9Mir",
  "key32": "3i7576dQLuzUkWH9pXGFWpfiqT81b75BLr63NeqMNbfP358FKYgynu7Z9p5wUtZTwgrtvj5rhsM5Va4C7AxfP5K7",
  "key33": "4X39R13PZGYHRfgK7SzKyKEU3udLodFmqm9gNW7qonpAsqnbzVRoy9XjCtjUqAXmQxkpwwjZwFVnwfEbjDH6SdnJ",
  "key34": "3d6aGUD7CNF7bKZZBk498bnzoMoYbh5r799F1SPFrcyrnzFUTPsMX4BNnEMZKAsn62avr8rsvb3tkjdNEaDPBXY7",
  "key35": "4dTaeSc8h9gytes1Cgo9Zr5c6zPpjbP5DPhVeCKPTpCX4n5BArmjPHvx6kuAEQm6obisWeXinMnT4rqXimKM57oX",
  "key36": "2a2oik5PTJArBFV2nDRFqhUc5dLg9uSFtNnaRpzPpc25bwCucturLWfAXCDVzhCDjzcK3jj5ssZWcVF8DaaSHNwq",
  "key37": "5Lv23ngpwe2TZehBZxcJDnr7VZXxVjibzYxGNMQ2uLiW3dJ6VmfbtRLrkWCGaszkxc4sJNQBZkEx9cvJibH2wPXk",
  "key38": "3DZ3LU6i11XbYccbq8gXdaekLBdZgHRmKACzTw2FpmEGTgF5xip5ayqSAe81UoSRoaWLzXwFNvyrzGNPJup7Lng3",
  "key39": "E5cTijGcq2dD73omcsgBtjwS7a7ovHu2u7VitrMQmmuhwpoeXR5AEqCWdebZpxLeJh54AJiujryfoFZBWxHpXAo",
  "key40": "5Lx7NCizGLmGNVgrCmsJFpx3Sqoj15EBarAaEm2N4Qa7EEy6imDgcgeK31nfTgAwzg9MtdVcBMDGNRZfDMhXjhba",
  "key41": "5UChpd6KPprk6Yp25xNSUseiXXKyeQQYEuJHrZJmqTT9QB9iHCKR1VHV1pWwMzKxKhAJnVfkMwJTwkYo6bw5infd",
  "key42": "h21gfuEajBHF7jaoV5JZRwfohLCM3mFqLAjsbTWW9Ab9VbVNi5BH1Y1rSLqzzQNYmcVkGpPZaraffnoB4m8fSZ7",
  "key43": "2714RKCW9ZdgX2WqwkVo1vMc6ktDEwDDRUSCzEVtno1P9Jke9BCQrBpayehD8X2Trkn4AQVJqDMFHueiGZjY8iWd",
  "key44": "4sXE4cP7Jux59zZi2UK4oXfGwph1diWtw6yzMaxFnhAyLr6j3tXEkT5LBHDvMnys5WpFRFL2nSyp7VSuPqJ6uc5P",
  "key45": "6xUsgye9WYj6ZZv5mRDfk5KwsjiYrMimFCNp8PRyQrrUxWnMeKqe4KckH8z4numU6ec2UrXESEcKyvhkCe3mGZZ",
  "key46": "4HZsaPmcX79ppaHypno3nQZL3jrkcRvoeiYvw2aKDsqryW6auTbDsqQiBA84cNZmKduE4pwWkzqisxn6f1zJf5qb",
  "key47": "42EqY7R5FptqyW2v8LXAgoSEB1wQcoZ4YH6rLk5HDoxL8AXBB5QhKx5uB9JxMPMFQ89cf3QLH9aw68ytewmoGDXE"
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
