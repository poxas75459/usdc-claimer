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
    "9Hu85Ntggo3LRARE5qk7TpQcZVCixv3S8jpkFcQrkERFunNYBk925eA9Ro5MRXu9LgfBJjdFH7fjjFaUpUPx9A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJJB4sEuprThHQicA4cEhYatfaZEpEPx2JsPuEvRFnfA5MUzqYJvf2hegSdocMu7xKg7waTBsidW6KYAWtpZEgH",
  "key1": "4odnkuFdsi68H2BxbA7sQ3cQJPPexcWQH21eJxUpXukv6o5R7LQsCHPVevHfSEtK5DwfYaqhnEHH9gX1NrnYXTom",
  "key2": "2e3MMhwcEtBYRG5LQ8syHfEov6hacSyGsWssPyW1HaU55uQExSKSTRz79oMWWJBLkpqSWSC18mz5Z5fz28TZQrtp",
  "key3": "4MRHBFYcNpeo8XSp6qYn9P2S8joB2vrN9EWQR5FSkqtUCqgVZEzRc5CWgEN6BvDDAckBxk34QYbRnxtoQA71kA3t",
  "key4": "D5eStidFJ7f6rHvWs1ej1BcF1YqzZLf83tyu1FeWyGVEV6DAzxm3oGBK5PYhX17MKG4XUKy8XST6g1jnxYyu5Pg",
  "key5": "3xEDRWjEmjCnfcwUVmVqdumedUy9qPQf7Dvna272KmeuPhJsDeaH3CGHWUC974bpDWpSQL7Kg5t6zATZJV5WT3dj",
  "key6": "5aaQB6AfbJAKuA387YkxQZPTDa3pBWcb67UmD4UN3YDHS2VNwnovT3DnQvzALFvRYysney8oAqNSqp1UovBcV799",
  "key7": "4vA39joH5L5QeeYRbGusE3pAW6v1BQga8zKn2qRqpDmugwTPYovJwro1ythgZEhCNyrV6x4YQazjLgn1Chvzk48Y",
  "key8": "651a8t4RAmz6cEHdWZRXegeTJUrL1yEJnWnnbrWNosAQWDtGEtpWcVZjbDxGqfBbjqVehRXrgdXX9LHfJzPjp3YR",
  "key9": "2qCxB873rXDDBmFJtgqNfmeFY9M6RGNhFHdp7Bh7W2SAwbW6nTEs5NMnssVk1fKqky9iwBd2E17jkAMPrufPU5Mh",
  "key10": "4bxYVVXEi1gpFrfSRJQDu7kkcHK5fcoNiRisNFGLdf74T7W63hm3Cku7MLVDW9MQPGHewUrZEMZLbgzX1hQQ6Sqn",
  "key11": "3eEJnvqdpZH7NT4Zswvbtj7rW8kYdT4WanoNLSt4R1RnBLqRVH7XAegyvwP2hQLmFTuui4HKJCKpqB4hVZffaYdG",
  "key12": "2Fy5MjHhiD3AW98D1mMFsrL43CEZnVm1rPpZDFineEqENAT6BtcWkwmgZMNZ6nqnairQwrVS2XmSbZdu8CvMgPHc",
  "key13": "2xLB7nojEdXpPaWc46dMC7P3HjE3Bw1xkmfG74tq1BxEKQNyFtpKoRAyVv3RJKSyCtrqFy5KJfx7cTqLkMtRJW7E",
  "key14": "3VuuccsseZgyHCy3GZvi8ovxFmfUGj7UbdHiGS85BdSPEk6gst6HzHmA1Sqac4b9TrYt9aJtsCVCzi49FaZxz1WJ",
  "key15": "34MCpXs5R2gVKDjeSaKVgM3MY4wfwHgw3wzjuWiMkYKgxK81swGHktSP3e6uwjsR3krGCAaXqBjqMRhJMKGTDLD6",
  "key16": "23irLsenFLcLzLCjs66vfkUFk1tmUaF4mnqp6eZuHqmGxC3mDou6uxJbtpLy35p1n1DCnYcSPz4LkWytvRiLZ3c7",
  "key17": "eEsHJPxC4iSmRTfkhiequKDB8RSSoRkt7pyB2FpPsMZcPHC4z3mmbMxG7wNZgAVxtHaHvoQQnPs9KBHUvpssKZ9",
  "key18": "A2BEvt7XjzKK4tyrxhh9vdzymiQNcXGdGbd4Sqa3wV4EynzapzJZb4bakSJCZ12XVvck2Tb5jXRrifMtJjcAcxp",
  "key19": "3araLAwb6jbdZFJ6tzwv2xicASojjL5XMuJXEAniqsNMTc7UxvBJxv4m4aArvDZXg3EYspKbsMbLjX1acbrS6FSt",
  "key20": "5WgLrwFv9ZwKCJUnf8E42P1BHXvLTPawd4NoYKkbqFJU6Kxap22DR9zZ9GM7whCcH36FR8UiD7TmnL1rnRMcMesb",
  "key21": "2szUV93mXgApjWvPfYTCFCWBDszH7F1SEtpGj6H94zPzcbCHnKQnuGgNvFJbKcmRnsotuiXBskrrx4UdLqXyFDQ2",
  "key22": "4tmPdZFx58vi4WQUBQiBxik5c4PkqL885ASBTonZQyLKmT9KG3x2eKLaMKSgMA5jMeTjcNXSvE7ExCfWVCvhnVE6",
  "key23": "4ahbahGtRN9FodD8BFL5rQgoCNeEqyZ6f3z2njvYGuzjd9TYWmTeaKCGN6amfeYuJAimTSunS26KZQUmEhzQ3vvd",
  "key24": "2htowYqgtZ87RST6CZcCcHYM4rZfhXPPXL1X2PytmojWj4osNrb5DH1x3wuzqhTai5gZH7SK5hefWrShecJ5JHL5",
  "key25": "2476RK18wE9WdCEw8fwvrejGDcwP2fAb7ZWbv4mWnSnqn9jZj9FsGqafVjXejux6dbHSUr3D7J4rKSfbqMQ8DGvD",
  "key26": "WiNdwr5z8qdQEF42RCJXST4cDXZbyFLm1chTkZrsLzHTudhrivNMBmtThC1PYvgdgFcHHoV3VWrELN2myT4zonE",
  "key27": "2jfq68tYJLfV7AKZ2Zo1yfr8F3BAAKwxvhC9yL7DCLKEB9zMxLVDAmzvoqYnPR4o1qUQ8y3aVyz68URrjSSEc3rG",
  "key28": "g4ftAnywG2vz2xWvvLw8ui6egwzmoLCb91XM8L4y9XA1B5TE5rAvfQr5oPvyqz3P9AuxPdYUcEVFfD9PTP7EQQn",
  "key29": "BTdL5mAoFZQBtNzxfk91CgdpViXycJ38q3TS99gFijfnTsXwyB7LR1ErkZRhTXfUM4W25iqkTfewqp5nVD34WbP",
  "key30": "3P7JC7YSY5qJgSXFMH5qkjmyTGTJq3GfbjMrBeM7v4a7sAoPiG8oHbFcDYwi43RzKTfVMKFuntRGebFrkis9QrUn",
  "key31": "4m67Db66jVGaWPUDM3bBHjB7m9eieNhUNB9jMWkRwVCZGRRskyUFBfCQzsKHiEjQt7f4UZu26gQkscnXzoiNNjvk",
  "key32": "3CP2CmUNBjciuqxdbe1okRefkFURSDtDEP7mWNt526xeMhddkLsUHQLxDQ91E3bxNugT7eGdHfuiyE2BYCpieJVp",
  "key33": "KC4fcW98DgJeiWR2DzLfPqc8QvEcx79PEPDT61QvdrFb1pF6fGhqUNBztm3EZZCN6b19GfPLy4VVYSUh3FXDaub",
  "key34": "36X62zJ7ravqiNmuuJ5zJh37Ncwr7vyR4jTkFJof2f3a7fTpAywMFmkturuUGZQ3YA1jiSL1qn252QxJUm8gJWSQ",
  "key35": "3Xy5DqmSma4itsbQYrVMLPYNJYoGdwcrJbvDk7UGV7LKpBbXkqwdoR1jMRH4icqtkc2AYoVSSUz1ycTCvan6xn3w",
  "key36": "wFxR9xbtYinxSPPFfQZa8Evo2CY5q8GBZYcqztduacKkykvun875Aoo9mZNJAX7FD4dVzhWnWDvfoRGu5qR5ase",
  "key37": "uesTMXfzsBmZDoB9KMk46i52PAJyj6P86VXbPQPUpMkHRaQrDcqhgWBGnoshgFf56LBQVi7Y7fsgogNpmamPHcP",
  "key38": "3hzG6gJ1JNbPHriWxPujD3zB4GW7HsCA5Apx1hcrxWDnF5Ci7DkFXobPDuq5azApEqfUmSncQ8vEMM7PGfxHEAg3",
  "key39": "4oNvhUuvzEGxAFUvivEV9az7UQcpyFagdZH7cNQg9tw42WHL4AbEF3q6qs6Xd91gr8h4ezxjmUyUmgUtdZ7nxZfw",
  "key40": "4qp4Z4ZCmKbkmScahPyy6hiANBjqhBfND2akFAqAdmo9uU5vh79j5MJNCaFSaExYjA1cvzMiDshNHPNGJ8Jr9bnb",
  "key41": "4Nr912i66aZq2VyaXGXZYDA2Qy3q6AbznsrfZyfy5zjC4jc9vUBx8tdAAAP2A4jLkLjdfgZ6EwFfbzfTMAWqbjfU",
  "key42": "3e6o78Pa9bEWsLvJ3WNPKJHCZ2gCi5ZVRmRkqVZrWAkhGMTyxoK2F6LZsL5r5bBTVP1SbMXXXqXuhAQnhLMUy6wy",
  "key43": "SH9xHDeE9VhUBwtBq5B3kPJhqpmp2cJayvCV6RdfPFYY1yHjvbDMCsoyoMQbGKrddfBEfTANwV25Y4W5Wxa64uE",
  "key44": "42SioM3gyWHdijyGaN3ouYro8Yvm22yUoJLuFedxDQ6kBK2pHwxpYNsvDdtuDhBiHhtYXYRTz6mieKeDkwShw34V",
  "key45": "61x2dzsM6r48j86y8LNgAapS6NwwPfPHiBJy3njKaBRNUd7qtd6aKpKANGrEmAkuMDvnpwLWewBMhhMGWDMZTBwG",
  "key46": "5PfZLi4Czwmu8CRZEnLd8RByCVB4Nw5XZfde9hjFdQGqXxVVKA8UtEb2UMM2Mf3sbNXeaXDqEbkhgiDDHpRGrYP2",
  "key47": "bvfr2YXkC3ZffGreRFhDJ4efBfB4BtiRqCJWkDGxVaT4dubKFKdKiJWuoUwDPzm9C7zaobwAVEtVevHc3HzLZYX"
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
