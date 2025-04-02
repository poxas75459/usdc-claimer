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
    "4ikvgCqLT6idzsxrXa13Q9DZwv1BosLSyM6mZFPYz6pBhT99dx4BbzfB4SgP5L3oWzqkTXvJnGHsSiW8m9L2U28r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHCGKRZ4SrnHUmKgJZ5rCvCgSwvv5tS1CrRiwLwD5Q6aYMopViNC3xxxcNXpLrzdWkhbKVmVpthE7L68JFpxbUH",
  "key1": "56JmKGCD1tbJ5EYAMkUNB6kzoCZTeGJy3n6FvfvPSibbQTY3DNCiuLqHaWS7b5UFpMcfwz6QDZuMTEY32HSutoy6",
  "key2": "5SphfgL2X9Nbrf3jWZarxTBCN5Z6DowafYkgnE5pPqAcQGi7jPbeSX71Y8vKmAnwD56TxLvyg2LqR7MbNk3vaWVw",
  "key3": "2VeHn6ruLYBiMbAjvHsFLzykXoCU6yq7DVGBu84KybFji1LCPfCJEg3m2mc7F1Y76W7KigEi9cSxU7wNiqvYdXQG",
  "key4": "4SsdYFqythBjUVrx1XKLX2asefivLa9JKfNQxcoriHopAZKC8bj4PKVeLGK1mBug8jSE3K8hVRgr52BDJDmAw7Af",
  "key5": "5Vt5q3fV4qM7jsR74rsTNq5Wqt4VLoyjTxdjjSEa1xzdGQkK5cb2CXxDyd5Evw8kdiitFkyJU2qXFmXYRRKLRoon",
  "key6": "4EnFzmLdeGLUYfWbDZ8G988HUE4qm2Q2QjxCQ8GD1QNiqgS7roJ9cFbMhAF6tXtjMvzYDzqq2hzMgUHnZU8Cw7zC",
  "key7": "47mWYXM8BVy7yu9PcW4jPsdJgVod27o7ud2fUtwALkWiZWcmoRFaJVsbK826vrftFo2poZy1JPy317oD7En4KEjt",
  "key8": "3aKS8oZbdoB8hGpkEHazi83MVZBcD9KWpyC9p5qVLhfX8Q3ZpaDBXuNhhxr2LMHJJemk2r1vsLEBQy1fHHvfA3Zw",
  "key9": "5EVEB2AVWRLGtbkJTmSViJA9tWGPmj9C3GqXpn8JbMVYGCVqqjZZP7gBimRKbLG64nygsNWc8BKQEaLiyfeww81v",
  "key10": "2ohX2ABHrysc7b6km9uTSg8Z1J7hWNykjKLhL2RNopwt19EKFrscQCj98MpETkXRPH1UZDhQu9cUEwCesGDATXLB",
  "key11": "Cqy1D3tAnTZv1hNGbGnczjmprCEpECnHz9pB8JUfbQtz8ej54oDv9oXh4L75EmymqXZYx6YMqU3LyGVAfBDKSbN",
  "key12": "3BH25wZJeQLBSbaWmUVGn7f14HHwZ7jJhyBuFLG1axQgJKpWp7YGnmh73rww8aWs8wgqQAu47ph1dKKXowcAeZbp",
  "key13": "beEGZBaqi1UQLYXw8BLwxpiAdhNxE4499MiyD8boC5N9kJpkGd38NArKhqGuDizX8NH7NTgohdJ13N4Pw4yf2v2",
  "key14": "2xFdzdGpkSYevHkPvn6w6cw7xuiPxWAY83FA8cTLCxyz6fZvLfHkHBHBavbMc3QVFzneJbH8oyfYfbqLSZGxzv43",
  "key15": "4K14aTzd3Hoxu4M7LGPN8h47KThJy7745SxZifenDRseqghsZhPCLGRXezZ14YBK87TBXEumbBekwvYQc6o9dESh",
  "key16": "3CjEb4B4rnAdT7ZLmgABks6Ci8zVAvKT31uuRDho5FG26E3SSaRkarF7dGpjY7KSUazWzcGyrUg4wQUYSXXDiZLK",
  "key17": "4ffvT3C5FSpoJT1QfWsGKTcd9EgVdcF3m717XLE6nMFufueM6975mQkzAWnikSrBbLACCmuRASU3dUS6fQeS4hfD",
  "key18": "4ZozQ9j8U738ALKHytqMqyYKdVG43BizC8Qnvd9AdNxjwiKXhADX1ftAm7v5mUDbdMR38QQ4opq9RhENwK8ysLeD",
  "key19": "Y6WYnbxGGdo1XY8GCFS1ggi4qXb1GRbcoSqsdqza2rwMVVaGoxaUnEFWqsrJXoU8ko4Ae4YinPuBeXRepY81z84",
  "key20": "3sBkGpwyqcXtrK2mzFQggu8Moq3a8z4GUqDVV3mGhSou1G6xSDZRtAh4iNW1H9F5DDmYsEjaT1fkRb9DKGWqqSgi",
  "key21": "3LzcyXcRTwM1WZyYRScEAsdAfZAGjFJYA7sGipsnA6YZT1sGwLfNsj33puWzQKjqW8JrmGtmGDBmnCq2Fgojp4SB",
  "key22": "22mrtgcuPZR8JGezS6Zn1fHxqK7yR4MwKsPE663zhxgyttg4vTm4y2NRVW4j9GsSZrnFsddr7edtBr8zoEy2ez9k",
  "key23": "3cQa342Qdk1A5ptNKdZwUVUdhPNVoo6NN6FvRk2Rei7DQvWDWnSyW2i65ta5fP43vgB2urw4v6cY51suA3Anaejt",
  "key24": "YRnD6Fj3gaevtp6AHf1WDfo2dpdh12sGo8ob4wbErtGZ4s7FrZN2MzF8MCQNgNegc73p4G4s3nmsR1RVgSEuhaS",
  "key25": "452aEZZqPmGTnyf1Dh59oYqosZs4SihaFGtd5DVaXyFe9mVQZg3ApSjmenQEoxzc7ztxQtxEyVx19456jEpkQ34Z",
  "key26": "22hBVQKSjgjA2s63SRSk3BGpbEpRUPVdv7on3nowZAtxrNPSBQ3nJhQ6MWc1ToQVNvphxvS3ZuJfQmB8F1x2yLV7",
  "key27": "52xUkFnprwBCmwk9uTMF7U5QEqXNHGUcYrAyqNnFKKwTE2G5Z6XNtHYf1JtNTnNYyJURykQEipjZKrT8iiA31tAA",
  "key28": "J6D9NG3pCvTB91GMv1BzAhK2CxdftSu8gx3oL861drpFLK62hFTt3fp1npb115cmEUU4a7r5KjEdGJ8u2dsUgxC",
  "key29": "3ijtC3niGZVsDJoHRUwwzFtkBd1zvkr9AyW9YjF5H1WkuJ21KaTj82aYnxNpShPeeor48DdbjTJy7rjvyJSbpbYs",
  "key30": "5Tqbn788LjkiftpHDeaDNeUk7gk466oyMdAsgKYDUK7dGjAk2YyuP676hFz9EzK3SWMh4x5mzKXK78EUCxW3yNaT",
  "key31": "4SUsorCVd8GtdNEEr1cwrSdRFsz8UaG69KVnxtwWJDquFdBHzq6PHWC6v629Yso4KwPYXKo4HBWsQTvvQukxegki",
  "key32": "5cm5SwqdQzz8Le11iWxW6h5kBXLHN53qhMVgNUa2V8Ux6GLfDLUWtyY16ckVeS3m2eaeLuGkKYbfNiQKMBFHNhzi",
  "key33": "5Kp9PFdAL9XasKk8g9CEWT8orRAEdeCvT53o9CebHsWNmxmg2HTPwmHNryuX85fRFrRP7W4XiKdVwMy7jziKFaaG",
  "key34": "4qTEEFwKSZJ8U2kAnHX53rKuta4jp2Ks7WoUNY573ETzktCyoUyHhyjwuhBgDTLb7FsxvWwUddBpc35LWfVfSxT",
  "key35": "5UQk9LXAV3zvnZU9XHcsK5f7Aa4xugJyuZ8eNhGHkVPLApD5eKBSDnhLr48oqkMK36xQSmDpoUzghELKQBLjBtCw",
  "key36": "2FvsKzDpfhiqpqZTbJbrwG3V4btQwCcGiMrwgyEiwa9JkNnQZvGNSiT7hVgUmWNz1pRVi4GjexjDHhJEGEEJ128f",
  "key37": "3qvecgj2N1PGMzVR4ZwqdLuuaFwLNcX5PVndwZkCNwsSxjaKX7nx6xipZ6983AHv3tbCysb3umHvUV62Fuovx1bE",
  "key38": "5UWhJoi9LZsDf4w7GUHxEbTi9L6DSsLgqH7pPPK25kXrvcicdrMzbVT8kizhLn4SpGimmqR5xaoj9n59XLdanhDr"
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
