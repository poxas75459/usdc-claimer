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
    "3jL8tHgXP5RpTspdyyBAaSatLV7TFAWYLxYg6xLNKUn5rBCRVk2T3ApYLbWGF1tp8PEKvLJ9oY4i2rNu9d2PnKrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzBwS5afmkSc1YnDVPfyrJN7wbBrf9v1z2Z7sBbuzXd54BoaTBhsKASEm2yGZvA3xjEckbRJunGBnZLTfRZd7rp",
  "key1": "2HEDuMN1W7Arva8Crf5dZDgJYLgceNrh46Q8yjC93yisUs9HWDW1VWq2QSHbs3VLJ3JRfuEeqB9VhoqcwKEzszu7",
  "key2": "41itAsVbDAERAVaEfLJ5AFWYB6sM1vNgz5UMgzqU6asuXKhWPrWhJ2snVUW6ShMp2XueoZmUTtub8KZrEzfgvZ69",
  "key3": "5WBT3rjxSm6qborDbSTxYkN1mJm96ZUXCYPjsx3Dx6vpAXrb3bSPUpAwbpyi2CJvsd9kc24NcVf9KrEBepRG11w6",
  "key4": "2AqSy13Yr4B6DT8nocrwp7fki8BuRHQqriZTsG9HQoj7QM9g2XUpePoiqze2tKWZ6Scxdc6gEHXvCVGM8wKQbLEX",
  "key5": "2bgeRfb1KGvA4CbEHnWNPVxNfkscbKGGJj5MRiYoE1Amr7nisfCYc4MUXikQV4UxxUJoy82S9PtNzRE7uNHEB4wg",
  "key6": "3RuPq7KRd8HrmxnKQjtNzbDDbR1av4Ks1RSVzp4WN3PHNPFQWSytUcedLivRLLZuXzqTLi5NoKcA3kf2jC3gPDRh",
  "key7": "42NQD2TRN8tcdmy163y618mhFqFX9xuk3ifkh7urC9vhHVUTKWkwmHov14xuTVpnNwsv8bkdd7eXmQdS5k6ckgwg",
  "key8": "5QN92s7dGqTFA712c9K7cvaxaLg1cULwMy1Yiem1HthwqVykSc8e3R13WSEPGXFZF9o883JZ9PQd7ZupJqbbHCr8",
  "key9": "2U6u5eT5iHDnGL9yUkqdk7kKQib33iuYnnsaJ7uFUKr9PfWGVrRP51RnuTQ91fjJ9dzt34zogCuWuzi2TT4uhNv1",
  "key10": "3Ws2kRcnhrfDpGLzi516rdBYN8b83qzEwY4WF8JUTvFnuuEviohA283b86nPfZVD8FTVDX4LMkjByE81Ss5jShG9",
  "key11": "3gmWL16J5yDWPWqDDedqLz6VVojwh78NYd2C9s2XahP7VR7uYCqzMBZHRKRjHYD2xncs9A62Rt9BPDCfuGPh7oD4",
  "key12": "6WnoCJGsXSDNkPq8xnRXxVYERhDM7fcaCxct9aWzanBCtuhVQe75PiCWZdjQ97RVtWSwDtERyzGo5Sw3ovRyESc",
  "key13": "5cXkF7B7G924VXJvRS6hGJDU739VFmpjHZa65Lv9dCHBh76KSquGUJTKo5PE8yWusVE2Ckt1Ci2DPMdyS7H1x7NN",
  "key14": "5BQxKVPCHuPBbyE2MBvmw33KW3h26YrxdFWMhnLQu3Q1sHWL3fkxQqBC1PvRgXEBdkFPtpb3pidSHLqkWJFRmjU3",
  "key15": "4gbBtQ5i2WSfAK23g7pjbLMLdDes5X1VG6XsU65NWREwCCRHNxpUGyA7GGmum6oiSFPWZLTr1wse8oDrXiWgcV2L",
  "key16": "27sxa5Y8KrH5CwSsL2W9gdPTN1mF4Kjn9Fz6928QXJNPGspZWfhmNA3Zzb4skZL6s3C9qBjbCqfMpma965TyMs6R",
  "key17": "5S6J2RnmeGsEkA5iLE57Z35z371cauwA3rLhMcn2KRv8cTp1mMxgbcGSHHm2cV21Lv2yansV34ZdHeTeyddo7vtf",
  "key18": "uf63vRZxNnddTAWAa8WNgBzsacKppJg3BNLDJq2kuyyrDNaVN9gnB1LLaXVGnPjBVLV8Ti7WGbLpTxakzQJty6D",
  "key19": "3VzmtoUQJZBFXCNer9Uny12p5bjSH9b6UpuK21FXV2dXqnch3NKxAT5wnqgYkGbG5dnG62gKtok5TY2CKfLDCS4h",
  "key20": "3QspLJQEc3vJuEaMwYK2fy5CV4ZofAen4LGQRofTQcBRpo16ZAC59E3nnHCAhKi6Jxu3EguuopKpTt1s2Q8Qxr1b",
  "key21": "25txoMKYxQGdcZhQ4dXRboDLiVd7cRsjCYuYz3bmpAorSEuUkNe8AHRYLErACLNauYSJEzLp5MzujtjXKNxH8Uoy",
  "key22": "4NPkfgmffS6XGevTvz5yeJZ2rVPspGu4dc8DHfTW56ZfUHk8rgzU45QJLHDFaG5gVRA5WTLABHGUKjARGAyTshqS",
  "key23": "2aRrZVvRC1BA9485vcpjK54ZUoDinwWFzB3RQMBMDSCPFDwY87M4iQx8P97nvFXERMMGUJ8FXErjK3ei8qEgXBuy",
  "key24": "3GXwj42PWM9SwWAu746KjUE1Xb1ky6BB7ARUCbzNHyAuzgJyBDTJXb298i7uNtWGYUSwV4R7xEWiz3kXtygVqAQZ",
  "key25": "4tSQbjzuUxLRcYGzCWJM9XuQRBg61Lyf75WG3dhWsBAieD44UxMMbiLb91XxB5s5JHeh8E5mqYHrjivm7DnWC8st",
  "key26": "3sYZ68tRbGf7jrktBuee94boo7ax6jmq84zMCJD8PyDYoxp31Z75Vx4xuJ7d1gLcwhcY8MWWLoqozH3wmpL5mYSx",
  "key27": "4ajeogU71XREuCc57E5CW3xDq36morYuxXmHgKHMrXGdudT4nreW4bqD1WvQ6NiBKSwLiFGsiiqRwSqKAyL7sNat",
  "key28": "5fomvtCuM2EV9XKuXaKeogPmtrqppDkbrmyqtbJVUtsgNDvX6GNXSwyLygGa9vPjWTQtQUH7TFtjroRBp1pn62tb",
  "key29": "4orT7iZgEGJwuE3r5hk49wtGZ3kia8mYWGH24pKVybwYW3ckHLi7SZM4HziS7kw7dK4QoNg6VYFRzSA5kJrSGeAW",
  "key30": "458f5Yds2SfQDwTVRp14TiddwKZAkJ18iqaM45Yhh8vYZEDRCq1DjvME7BKwZ8bK97g7mcuQRAtxZ8ZKnNYyHALS",
  "key31": "58mRuaxjciS5EqDKoho8rV6Gv2C78mwKpkng7bHwWQ7WortkQamP7FCv9TmP3aMEpFhx3TLgS4XDAv32xdd1k1cx",
  "key32": "3xbLoPizBse2pHfbAfWjb2C15B5hkEGekE93CDqxHJexJbukCdXXSHepj86vvn4wyR5EuGeuJ7Bfm59q72JscDkC",
  "key33": "3XeLwvffdrjxLoqEzGd9V32bC8jWfkSwe6LiiwGuEygkGXju46q599RZxyg5D4XAdtjRcNPzNsuM7dx9EVnL9ky1",
  "key34": "2tQCDH85NLmHfuvRDLcBrNHi7tF7X2bqvWtaZDFSQxUma155ZrKqCzyTjpZA2QawXfDwC23VYGFuE4HMuYKwWMy9"
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
