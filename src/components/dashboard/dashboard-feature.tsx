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
    "44JGTxj3TG9i6XSJ1yAShbcJeDMd15umBXhXjnGW31dzxPJy67TZmjoxnDNSwLWQjEyZrsMWc1aMs1jNi1m4rSvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67JQj8cXWnK5U3wFtej7L7LqHatHU4TH5X6DKu4WitNmDtgdkABeABfAa2TU5RXQRQrej1xvqj3YcP3j8gwVpDmS",
  "key1": "2uMB1Af2XKsfJUwgFNVK9MLaYzcKk1Pu32BBdcUcTsyh9yc17NwxsxidnR85MzeoZzJgQzgn1YkJaKnHjTMbenQC",
  "key2": "5ie88Rh5q7pPamiWoe6SMp735mJZZqswJnNgrrh2WazApqsBabyCaLuiYLFPtjHWkXaATsPfhUkfb89zHJGSHU7x",
  "key3": "61cKk4oayhfd6XhUs74QaRpYLkW7nnzqKbgv1f4qgaP1GKXJgU2PD7Mr6jjhFSTGLwb94Kgt8Bvyq88yCfsmPubK",
  "key4": "2KTCfKgWJbCnzd6yFCQB9rmveuuQR1JSc94z7vrQN9jwLAimtYjr6x1qG8uQ7AiR1FptMY3XnB9TMuondEFkeScr",
  "key5": "iEL6wCAbjaPSyizy3Bj98pq4BhiswkAz5aRR26387qBhUcjJRhzFc56JUvur6bCw7x1GtFsVv5Rmzki9uaT7p2n",
  "key6": "2b8m1JuiphcrydHW2V7SYJAs1jsZxBCx7U3WUP6xznDkCVRMB47pt1VKGwF76XCzU7UgDmjGcfGqAKyieQCKS8M7",
  "key7": "2mpMCN8m98fEahAPVqpJVuthdWeod4VkGCDCwhFPfoSQig6TAaxbgCxGumfWYQn61sfvzW4E3kB55UMejavJHgdB",
  "key8": "5F6TorpekkG9QS4GcgGDNQ1dScMwaxQr19RtYbzTudV6fbtxZVGs76YxbDb1tsxkkGFWByPZSk5ED8N3FjZx431B",
  "key9": "4qUN13siiVZEtQ8RunjnwJekfGYiGBaVJyvQNTvQ16tfzNfxMvGAud2NLFVoKnX4V2sxmvuLDC4veJAKb75YT2c1",
  "key10": "ckzZqCivG2cJajkbh56khADbtYwjwMa5Yf2VD5iqGJcahK5GZbuf9EPWNvKc9gf3EaJjPkmgsf2z1JkKoPW1NtK",
  "key11": "j5ixizD9XRUfcWnb4fGGN1Upf7NgKou7oxiM6UMZjRtpusUkDiShMN2DYDj5NiPfXtCaKhZz6TBAPgBnry8pimr",
  "key12": "2Hw7eBvRHytijoLDmcadfAip9zxcGmfYx6QffgEkaMe48KpCKLNZEmfLeo1WyYfLcDEa4B3ukeKFiCkZ6pC9tfaa",
  "key13": "5Dp7c6S25aanTwoXEXX9wdL43HH5czYr1kCNDd2Z9iy29cvG2NH7q71JvTNhkE4cbmhQ6SdsfLVNVNTgq3vVxiga",
  "key14": "26k7MvBiC9eoSSWuAr5fXpJi6DYwSt5L3ZXykgERWkUQi3RkjfxXkzqCzAsY13RVhBRAzxxMsKRdZDtGQmbMrxS6",
  "key15": "4Tqxor7aZTQ556CyZwv4y2QScQQFUNxTNXgQf3tvZP2DrqgBoCs8Gn19FuKN3X7LV2cVNKNjqWMmYvMsETXAVNND",
  "key16": "RVu35DvztPwmcAfpbYv6e3GewfhRDwXd2jHTrF1vGGDWBg2WqJWpwBV5sz9hzFfMenEdGeWmMazjXJWFy4c352k",
  "key17": "58eEMRGv4euDX5mAdnijPgRM5NWGo7ctRxpJsy2ysyvcxJReHgbcwiPcQWkjuNkJFF2d7niaD8ET4K42YmGDyBS4",
  "key18": "4k1v8RF2qWZXSbD73gWtVg82MFqzq45zU7DsWjEsbmx3zHtUcdPYm7Qzkmp9mHnVtpRaCoVYe4gv48p5fu5Xd2P7",
  "key19": "3n9V5kJ1VajYZEH5eYnvsRbjxatfTxgzwGSmmdMm2UH55Ax236HGfk45R8rYGTew6ohLQH9WwZRxkCHqv7YRhtbR",
  "key20": "248UZTE59HDXT4sab7U9YgCEDCHEPuegjbVJCw2ZK8o7GfiQVM9SafPgdf5SzkM3xYAa16Ya3KzXWjrYxXApUjDY",
  "key21": "3cQhQDnQiPLBugqmCDdjCammEpWqjDMLhH6DgKpXatRCNVz3kHosd2NCrQVb45XYehNKVmXEythG7xs4rBxSb8F1",
  "key22": "2L7WxFK4W9zoAsvM3kY8GTwkMsyzQAh4LdJpyyeLxYP6TjbQSjBAusaLrhNbziUBYcQevP7ntw6ikCiP28tLT5n5",
  "key23": "4j91XnCigxvfPGGbDwkAVSFwbLABtihF8wEC8rjWKd7ZZiTifBu3cNTVK3sLKLxU57hvtpqwjUoCsNrkuCftqc2b",
  "key24": "5LsYpVJUitV1vofkgchJWobiEege7MBY4YBt8SFxqizVHeUXteUBaYGFCWakq1MJs7NycNZV6WuKdRnEMMk3dn8D",
  "key25": "3PdjSAt5g6Y1FL5DRHq7pqQJBEi1zUxvdk352bAWPKEK1kvuDZG4dBppYzX33i7hWkCGcBBPo3mh5P4EtfUagSdw",
  "key26": "5tqHRMSkLBmckqM98qh6ExAvmbAsmFMdysJUiaVBKEmNMaP9FKuQtyjLUSpwt26pFqN26iT89AshNhtwg6tdGirg",
  "key27": "5mnQVLkqY3tUTrUhDcfpHiaBMjMMgxchTvgwov191zu3NzbY5eHap8YARAzXCW6UCjqF3B9mLqsfRSJSGfPFBQwm",
  "key28": "4VDGrSUtskNkA7GrStfbKTSoxEVMYqjXnm3FnqcoSxRHWE8pYUkWnH24RZYNv6A1d9dRbu8eZjDz9NAFPJ5Q1Ngu",
  "key29": "3tp1m5r4zW6BfwwQLRJQGvig4wDvzy7nCa6YGdnBb7Fj4aeYyzcB2cS7vEyWzpjSMYjfnjQz4bd1NeFnGeL2Eqfg"
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
