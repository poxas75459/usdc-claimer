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
    "5PX57WYs2X5rcNn9cUAiXPcePefADRG6BkES8ecpCwsWx5yCxPeHsTQW4uS6tdzCm8h5xhAZL7VtbBtjCrZvsjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsjuLckgbEQmdDwspuYRuKdLNbGK4Whzmjpis8Qp12z2yDctecK3Rr96vruxGfiAEEwQBkcAbdByjdHV9TsPQ4T",
  "key1": "2vwfH26S5MqQBvikpHuHfRbskc2Na6XMmannR4FG4TpEydFV9wjL3zodehZps2c6fmGnowKSNHPaJjdHuEZDK6Dd",
  "key2": "4vbuJt45dMsQ12Ec52xr3udjQyvzpUweKdEFsSRJ4Sr2nGYdxtezpKs1aqFHaFfCFvPLaP7eAiUAYLupfG52Q2WZ",
  "key3": "PHzFFeYUzbmuYRUr9mV4fTVHt7m7bkgWMKiihz35bg15UaBc93iy2jYeqQ3NBLccjqSy396e2edRUCh1v8o2wLj",
  "key4": "51K4duECat9kNXicMvkvsXnPa1SmxcZiCxKU7y8KHGyeCK7R2NZpvNAeuRiLNdp6ELBvXCUrUeEcYQD1FJ4ak2Cj",
  "key5": "6448QcnSkpw8hV42ijzYh6ZEv85keQjKakH6o4vYdfq93PJH76U77cBZyQBmpwWrygTbRqPujVmJu3YkST8meV3y",
  "key6": "3s2YSksw8vmVPNWx3yHDtY9qe1zUd47ZJHJYwMz7ix6dTgV1pYa2d1fPLmHJh4nQrHvMcoBoCUTEbRUdHQrskooU",
  "key7": "24JqQyLL3KazWhi4iKUHfmnNMNx6qg7bbe2Qq39JD3sC6ZKmenemJRt4F72WQKWKcnYUQ3F7Hm4A5UqkF5gUoYVE",
  "key8": "2MJKgnC5qpb7FAsyEMpknC3ZfqRTY6agegXf3341ga4tg3ydwtQQQdBdtKvMBBQz84gPaGMLbPBhbT8srztPyH2u",
  "key9": "pF9fmCwTf21TzdZpJ2HQsTa1Pfw28eR5vRQAsqqjZ4y6jc38YP9KouZ9eCjgy3kFRJPRQAvA5t1XQtZ9fx6BB3q",
  "key10": "ZnF9k3kb1Zd6Ax4ThH1BxgB2UJPyAiqNbdZnPzxg5y6DpJBDWA8dYAmCxa8r3omyGD2pdC68mN4DCaEX9DRJwUF",
  "key11": "yNsFS5mPPHgsfAGKkBtfWojwBqBmwkE5r9Nu9SUHX1FFHQS84NAukztiQociXGP7a4caraa8ieukhw2vawwWKQq",
  "key12": "5Azrw6QXkSChrCQL2CWkgaTvSVEzxRcJByzFNYWeyHTPy2iGnFTMy4cerBM679RY9Uv8anLqLCpmkiuqmLWhCiyX",
  "key13": "jvoXJ9nLhuk8sLJBU87nDH9nxGquhxdzR1EiHBdemeVta2pXydiCUjXcM24gtw6tnCKiietHXX7w3LP4bzinME5",
  "key14": "495ocu2H1d1YHwVbh5YMvvd3pfuncQuYvKoiw8HHrx3QBTwAG7RCogrFX3YEV8b25uM8VMytqQGx7og5PK2okdsu",
  "key15": "63k2vJBjaPJ4svjZxLouEuhhDSyVvDomBgewjUUxzFGyeTWtwcy9Pj5Z8nY398PNg1pYejJPYb1kSU5A4coh7675",
  "key16": "27btSet869vSZhKTRm4gtMW6wFmvgArhFSdmvfnTU5ZmeSK6XYsGBxiD6LW4FM1LADyFMdRXZo51uwkGF7QSKL2p",
  "key17": "5E3GBGeSvNQpB92TGaKJ6NHkwMSoRjfYCDSynEQ3D8WQADC8zi1QhziFiMSTc3AWQosZswCsZMaNJb9ZT3KmqUi",
  "key18": "rTuafxm3MdrhZqeTor5ZmoSmQ14VyhMr293D53W7zHWRWygNaaVLqMh5GWaRkEAmXwq1vjGcUrVQd1rwsgXGrA7",
  "key19": "5mqNGw2kPT4QvqWELrKSPbsorMEkftHHVZUjiRyXrm6rmUX36reUoN8eFkCyqjP2uPiHUF6HCsSYja5LhzRPaNLW",
  "key20": "3AjYPTjzBCzQ7Y8z1LWjEGLZnJPFaAGe9DHwABGyCP7YugDaFmbf9zqwaCqKqSohSpUysBaNh9TH8XG5ChgD5871",
  "key21": "22QGF2cJ8Xyxn7sr6RDYCpgTjhF7GhUMkZW93GbcyRRvYVN4GjhTQHXSnxNUHtvB3imP7K8kkAKQxtEVNTYD9W4Q",
  "key22": "41TsKtQEoRecN6BrmkVEiWKFZxZXLmYurAMukaeZVv2ERc6gFuSzYwh4dLZG2FfL9KpZ8LDUPandbG7TNwCGp6VB",
  "key23": "3eWxatXk4ybsAfsT1q42LnYnrXZDkt9NczG65J8xMswcYVs5z6rtnivK8q5XUnn4MxXy2RgjHag2VNskBBfx7PQw",
  "key24": "2sj9uCQUSkUMb928BTzra8A2LxGUicVxFmhAGTuZWHeo8jFGFBBVLFkP54ZS4YSxJfEHCsguAjTpBEMiRfnNNAG4",
  "key25": "22FQ6KFSM2ButiuyX4XcpUaKWGLxkdK1hga1eHvQuF1omwSAqdpdgFzcvN6ZdDS1NFPrezQSFoEm6ZGUFGnuTU83",
  "key26": "4FFaVao9nqw6jHP3hbCyVqeApLSXvguTAtZGLzUsghrfCpdYDebbsegSixZyF5B3vxCjosjVvHKUsGkuqT3njkc6",
  "key27": "3KGVY5dL2nJmg3jEG5sBRyPyWPamtLR8ybScVrWMPbtvG2axU7Ewcv53rP3W6yQQgx9hWKWRpWnsS13Xyd6a7Kvh",
  "key28": "5C91b7LcCFJNhAc6e3HyTE27Ja8C49NjAZqPMXQ7byGvQ1NqsrnaGmbT23hBmDEv6y5ksaK9g7ypMu9Et6MAtTRm",
  "key29": "4o3BDFg8PHjNPzvYFokUks28CbRL5TDGEKnkLdg7zEMbkcUwc3hvKxNw7aq6GaVcYCZkkaTMKbsHe7uyptn43rUD"
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
