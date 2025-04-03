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
    "2fWnTncazGhrJwfTE3ptgactBJnjUpSi8zSoqQcXuPi5dmMUd2U2KeUAW3pxow1VASjiUcBjUUrpXedVENwn9XTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGbV3CdDFLPHnHUionaHxj9CUVPSqrEYHGWcR5sy7jLLhcTZnYuEQEDea9tzaXvxoCvnHwdph4MCKdF4Kmfur2m",
  "key1": "TcXgXKp76fShxpEAeJgz8fkTonnPkDNWHy4VyLy9A25cbPNXbVzaZQmy64jRHKMbRYNrRJDxnV3yT6m3uPkRL63",
  "key2": "4EMWSGo7rAGhyr497NVDYmJ3gG2iLGMn3QdYwF9RRepHD6aRiux9tLhgime3aX3gUDNJUBQaKdExiTBbyKWUBSue",
  "key3": "5YAyfpHQAyLkw9k9o8hCVmPepd8YppXmN59vsQjd4zsuBij1Rr6yRDb6r3u9q1hMAeQgNSN9W2P9NZeuyZSDgFCX",
  "key4": "5PYJt7m2XMhsnYjkvgdkmuB6Uz2sS64GosZ6GEsDvLtG3RauQGrCKzGeU9CXYSGLksH2KcUA7bEoavFJhQzYZuq4",
  "key5": "2zWHHHrmJ1YH7p3JTB8bTjN6MgKodusYcAp79TVYrtmncTzNM547rty5GHV7LvdZSUu4bKDVzUNKwrSty7viCuEb",
  "key6": "5ZmFny5KAK4ENC1MXp97nFzDfFs7KE43LE9yhzDyFXgF9KVjvtew1irh6htJYsJ1x4YVuxr8BNF62GVo79j49GBW",
  "key7": "5i9wd6AyExygR9XyuMt62dXAwcz8LTctKb9ZyfATPKxHuAMhLdFwbXf4kh6Lb8gVoYN5tjJk75GDTzwJY1mze3Rq",
  "key8": "wEDdv9dB5xF2dc7xHSYHwzeXVJsHNjEqYXjNU5qv6ncqDTioUttngkAeLfecN4Xu7RgXCGKkqCKsWk3CjutzTr5",
  "key9": "3zNAgaiucWMYgVvegBeJ9anw18r1DCpxcwVzAvK6tJ2SfXJ5bqGKrjLv9xrdD1gmQeuTpVwxgpQ2WtabZAYvCweJ",
  "key10": "4PSt9VxCp2Ke3QufYoKfCVtGz9EGBrALeoVPdJPTWVxTUAntgNbKgSq587qydxk4s4Xub9ehCwfmuikdZEeKAFZ3",
  "key11": "E32QKaqZzquxxUbq7iDRVPuCRVpdYyM4hv4BtnxW9uGwwCssdRnGs4yS5FDG4mhyhyS7Z9WBn2xX8f1t9uY4SLd",
  "key12": "2C3VzuTZUkwXbQCDPciZ9qhqeVjJ81rcto8kEZmPGSo1TSBGqAuEMPusVQncMGcGyueAXkCJmdgLUFm1NkLu7L2c",
  "key13": "3jt8J1FY7B2HFCq6knK4kkhF4bgUvxcMcvAZ5afhMghnGHsUcfnykv3TciyfDHsuCPP9biua1Dg92Q9pCGoLv5pA",
  "key14": "5BLPvGQ52oc83WVFCbsh8BGvAgkvqGHLF1mWPyrah1RSEC9XrgBenUWV8LGTgiyvc4Qo9o3414bCLGLThHwqiP69",
  "key15": "5bYx4SjEreiGxw7JfhzKYyH5GUUjsN3HBgx4UTwyrUiRHGM3nfcD4nH9A39SDM5rXmKdVfadgsRWgZkiUSKimpXu",
  "key16": "32C9LE2ktusbToVER3rpUt8HavmGuhWqkyjfRzKJ2Pq3o1aR7hsgrWYDEw7Ub82N5DNHNLGswgtdYGw1D6DNjegZ",
  "key17": "2WcThwMQScnoF1b55ykZqLXuAd2wt2CAVFiQeUb9vxbxWhfNjMBW8tRbeLx3AoCXfpr4aRiSW2mga9mJmth2A5iw",
  "key18": "5co46GYNAaiEvPYBnNfJi1pbanpjyNUgWgerfiZoMYCHScL9Tos9ZubyCXgu2BjFhEpx3qLqoqqdP7iis5rFdWQP",
  "key19": "4jtVzMQRKNk7f9MiR22Co37Bt6Je3xAfNrg6EoSdWZANBkKqAzcuRyLEy2qPW6VrQDjRGp23Ph36ubdRFPbiJdL9",
  "key20": "38Sgj1Re7Aym1DhttFe41TKte9k1i1atEPGFYWriWSif9f1KTP97TsgwVTRd1vTN8js97ZjNne6zMDwbsm6qYviQ",
  "key21": "27yNDRsyyaPRaYKYQtska8qVmqQDWpm6AQGpCYMJqZnSkz26ij8pvAC63DF27DX1v8ZUd48w1TyqDg6inUhDyCDJ",
  "key22": "67DMNhcsSaVddUiskgVDpCZ4mrBDVBdRJiHSHoMq21ydMYbKSkh1vas4h2dH9CZki5Kr5tnvZd5JWHVDaazfsoib",
  "key23": "3nZVDCa8hEVCm2eoJpEu6vES3HMZSxWyXNc2kTn5SK1AxPMi5EAZNRab3AdFpiR1GKRBzNKnKTHSPTb8WRNq859q",
  "key24": "3YWzZ1hy9V13HN8pdYzdGvSZazeZettqHNpHTjFn3nEp8ytnw5tC1xoW7GbFaW4PCEQvbuJqdyYdBdAVo2XfyGCa"
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
