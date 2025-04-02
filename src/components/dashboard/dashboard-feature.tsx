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
    "vMBP2VsS7kuCsMBikRLfDcJYTYNET1DFtxXtxL41shhVdhKgVuLFyaGs5cjJ2y2ptD57aPzhsjdbfZ7sUN8Av4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43fPDwsGowufKhRYqh6whTtdFp5R8h2vrGnDbH4zay5E7xs4RQJ46S6iSKFbeZEznouaMXhBFrmZjtcjKjc3HvBB",
  "key1": "4bUzvHJkm2yKTxW35ZefKEhn1BWqTZkKGWpgiLbLBCoE8A4VM7nPu7NuuK7YdMwu1ozrpxep8EEPs42GPuyUSRy1",
  "key2": "Fqhd93pekPVgHtgMJLchEJZcT5CCSqQjnh4cuymGzN28nBhseCpXbiWe4TZ7e8mmxHrHznjSBehJwrdkScSrMDg",
  "key3": "pR4qzkNXDXmfJFqSnFLPBTMUSGGUQqPavqr2fsdktQwe9pmKCMWK3fhstKKGNx65w8dNf4eAZxrPZU68d9G6MJ6",
  "key4": "BawHcFwXK3ym6Wr3tUwfDx5iDbNnbimDaf4imjxrkmzaeF4wQ3E8kcjxzTuQC3ighUVTQtd3vioidCpMMgdgKHR",
  "key5": "51rFsumEMfE8SWN6rSVpthuEPXGKXusqJHyn4Z38bWio62sWEtmgbx1gyFAYgqPfY3pjYhoXnBD8jYgdzzFnGj5a",
  "key6": "iK1zc5e9TLTi3Pg2rzYFobxDLYbpK8vsAJvDqdkL1J1qWPqArvRmmnbbNpaqv4gakf7MK2GdLTvnzLGHuGxVKWk",
  "key7": "57m66YPXTvsFvHduWcWmM5wetEGVrkLUCXVuxExWP9XZtEXxkKz6jEysxDna36uwvmEei78JUwZyA4g7Ag8ZxE4w",
  "key8": "hJykypVTMupTbQdmg5idJrWVRwxjMgPLfMKeDPot7tWWjrhZQJxpH4R6xNozvVtXkSb8o2utQ7mNTL8anWgH2D2",
  "key9": "4FcGuRRwPSv4UaxqVo4ysg495G9E31nwGgaCqHGXfjCvFZugP7utDz7MFFPehKW68kuf1AesyHWQZB8uskL5ixTX",
  "key10": "nnk98eDRH9yc8tdrnaxS78KbvtBhXwdbGS5Vwe7uvsoNwyQfEdd8J4gUtYQVjzuri2mfkt7EEW2LAwpErDE1kPg",
  "key11": "5JnA6N8mEiwZj1mvnMYBzR84WbbR66jU6Q1d9AJM1dwFEFfG7FYo6rXkDrKG7svYqgFHzYgLgdvDGJHxDWzXdkoA",
  "key12": "5rXfQ1onVcu8UUXLuoTM711bFyGyUcADyU38okX3eFbjxZHoV1McLuuNZmXQG7nmZL6DSX9nPRZZ5p1caXeHw2K1",
  "key13": "4dBG1m61D4GSA2UxwyrhDj16Cy7hWkzhD9xxEqhM4GQidfvDUR58B5rtpXFmb26DQQY9iF6GzaV77W9GAaZRk3yR",
  "key14": "5FNgc5fAxSsEG8MLREHTgnzDVxjA7WMz9fdxH9zFL7qF87JFr3Cm8DQgaGnHSJUkWfidKMZWwmPNLZBZX6GbaA5b",
  "key15": "5AGpU2vRnmMYREZ7QPxWouj6BDp86xQVnCknNjgXA2ovRLtqmkCGhG1uhHpj1pekYAYu12ZbUSHrz7BU1WZVPL8m",
  "key16": "2PfeWZxb3yYbybgiX1AacHQcwqCytsFsomrTLVzV4soKbMJ15buVSBGv4DLTsQBV5TgpXhxGNUVFA35rLK5gjFra",
  "key17": "59YCij7RrCkP1Xrtmzo9AW7Ym53MA3g7ENgaeWMnSbrGBKV8WDGAzR646Fnz9wGSeZBzPkWhVF6qARMKSbjTCK25",
  "key18": "4ktCSfxmxpBP9Zeu3R6xukzxMVTD9GXhKWmzgW6VwmNkJmxZnSKM2czZ4jzhAC9jcBznDR3nRZNgkuMbdPp5Z1Gk",
  "key19": "64jJUD1E8E74YU8TbRMuR16JLCg8hUp2Q4K8vshRQPxVm4WaZrVdDdqwwPDvKU9ib8imWDRpCyEb5iX8dqVUsZPF",
  "key20": "5JzUc6kcyHFQJnZJbFzkym4gnHARf99UQX3Uh3BxZxpezEaDWPmVXjagCtx6yioNfdd53VBcAYgAg7qCtUQSna3a",
  "key21": "5rSfzpGpT6smVDJu8Fx5ncrJ15t2eMqxuuiURpW86LNLnMtp1HaeKYc74ecR4otSjzLY2YTPnFzkNKVQqhMXwi1g",
  "key22": "5Dpnx9UurUWhtove5ynqtCMZm2GfFMuicXb3nJw7zYZBnFQw8QLbsacsBjDRfAJdNHfYLbLUAEW4qACU4FRTDEPv",
  "key23": "2URfG7NFNFBKzqk7LQvnL714DgZ1xispK1KFzmf5xEx5NzfCMbgA74rcgjSChHB96c94oeToHpWJ9BTk7VeAnDKb",
  "key24": "5bf5J8op65YK3kzFDL8iV6t1cFEUUzWyCoKf9THGSBTewYXWULt1ovurTZj5PMmVm3bMgVXa1SEchFrJFP8gwb4x",
  "key25": "2hu25RFWJHLVQpgxd1FSPagmTJ33adjkAfDSj89g9QV3NdgHWhjdHzoYMdZnKPCqPvu7GpvpSBJaU5ZCtBdyQeNt",
  "key26": "2janPfpGifdDypnYD47wPGReksZ8SA8NQvpvB7vibPPfva4oWGRRTVLbnY3JXNSB9cUZcpAaRgcyDKv3zkYoZHGK",
  "key27": "62DE8s2vaXvqZnqAJ6qzTQm4qpPhFWbZymTn98sQX8QfaesMuYzQNiWKujRGBZiw1peieLaoJiWLyoawzhoqFJUo",
  "key28": "5pDemdHPu9rrswj3xomKBv7DCKeuRopBdNCCUm7vsBMdMSvLWTQawDrrrEJj1AGt53Lh7i38hPRQrjzTrz9DVrEk"
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
