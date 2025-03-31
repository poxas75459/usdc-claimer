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
    "5mhTrJR9Gtc9NnrC6yJYUst9NHn18cxF2B8uBXFxYiniFhicNe4dbXDNeQw4v7sCaTpwpPVe4i7yYBftSLJ3uxHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NRiZidastbUrb1ekSsKPQ8eFnWRA2JsQViZDbdqNC165ugnVs4Vx9PSUdDCXCLW7HQbigXuE9jaJPRKRn52qjZ",
  "key1": "eNVrHv9YU9YQhdPb8KAzRiyELhWEHW4k7MJ6nijhZfVD1uAi7hCrc4DrgV93gv4WskDMsuTtxGRsqYV38RRnaKm",
  "key2": "4hfBNacRobEywv4BfkGcvAnC97j4mTEJtnhJWZ1B62iNqPT7oFLwpeSGhsnwrJWWp6YFWzbbsQS4Qgpqn84MWBy2",
  "key3": "2LhzyatcEzgXqNkqJTH1MyckVQjAAA8jAD7kuKv22oBeyCDUBW2EcyZvyjYoC7pffWukUzuUcit3RbeK3YVVUjE4",
  "key4": "e9oKhUcknQFKaSigjR7tjJKY9JGb8RuxYfShJsRRci1qKqqtbwrcucey3CaHD1tqwXNMQ77dop5f7HwadUaka23",
  "key5": "5NNrvdSd9xAaQLibv14weqPxRymEa6jx8z89paVp9sgMmj8vdZKT7u6NpT5oR3cqHL9cqrHmAL7WHCiESqw9Jw9U",
  "key6": "3hAL2eh64c4WStZHXU5oduj9J2AzZuZDAaFY3JkBFK1y1NmUboEZGUep3TrEdTzvD3uHpjyrDRQ5z3uhDij4TtBz",
  "key7": "48YzUMJHQKVuTaiXpA1iavq7fM2HUiXpcf1H2m23msDaGj2KrYHt3oicKAQXEbPXgbTPhdDssvH6DWumdY9nyqKb",
  "key8": "WKbChtUiP9mURfntXh2q5AKYCHLuaoYYJjD3MK9k7E6YkKUVKFcoAPmfSbv9BHqr82uJUf56xFNXZVDuJv8C5M9",
  "key9": "5Qg1xGbPRbnB1Qk5vb6Nrz6xguxbWHnnveq8eVYiVwF1X7tdKMGbuzgaseud5FYGRqPq9Gzpgctn7LdWdJQdDmjZ",
  "key10": "3oUYFMS8hgwsNmbdiip3Zqhr2hLK3CqcyZ8pMpcjMpSwhtPbuhVzHwQdJ9NBtcnyUxwH8bJTNS55LG2BZUxixFdR",
  "key11": "4Nh7rVJFzTvQS5SAP9xax3rK83wzmx6FUxK8FQ7ZgfnEf2FQAknXuBSt9hbVCvTPMAD2ZuKkMs8WwUh676qtcTyb",
  "key12": "563dX9FTsC9j2ZNU1vvgxYGshFH43N8DAayter9B3wjvvSN2Sz4qi7s6XfJyiBTerJ1SDVpMyzTwj8WUjY7WwQsq",
  "key13": "Ptwa2eN7Lo82oitQqzRvxYMvocc5xm2Sxk37vQsSAuXq3DTbe9c8vbYXn8aVdu9nvUke2dX1vPZHnq43LRuk6yA",
  "key14": "2YGfnQUEdHpMsoPtTgnNhPpYVxV6sQ9ZPXRTpZhWCWx76WdjGR4xfrXgET8auaadDb25RqGRRkDfuXQPhKeVkAVs",
  "key15": "3RcCoRZ2NX45uwfhpXh5KfshLngdmGyYsbj2N8YjSwQVtFVR3pMfyyHtyLN8JaLJfvpSeaC1N62NMuc5SPrckCH",
  "key16": "4gJ8jM8pTRwtodY6F5aqV4NBhq2W6XWwhn6vtvGBuwS9sQCgyyvAuYfzg2Y16bbqHT2jr3KPinBo9RFypZGm1APn",
  "key17": "5jbL26w9kbzoiqVfgUTc8Ty9WcEa3jsxwtH3t2T1t2TcqQRtC6WLPGN27bmBmNTGM6V25CLbeAYYgyYPBTGRcPiU",
  "key18": "mACaebAKnvsNS25RkpvPFSE3Dsi4ANVb6rxCBaRx1BMEyYJroJGWceF3heziTeECXbmw4vxGex2qmhA5MNjh3TG",
  "key19": "2y5PeW1utwWLDF4DGp7ZygXyhLX9An9Ejn59psN2TVAK3MhAv4uyBkmG7VA2rXPmmJBZpwcZv3DSu59pCMhSCv7Y",
  "key20": "2v9PePZ3mAve4ZdqeiqPtuq9WBsnhAw6PkysJcte2Vqxd1qukAdVAmmKufP6EwcN1PTbXjQLXWfjgVhkNcMjY45A",
  "key21": "4JP4i5dJPpLAhNTVbXsRmBhZ375Ac8pt2N7iPbBBRMNycTF3uwHvY9QunZq7DoczTeAqE9aEJNt9Nutn9WhpYK9L",
  "key22": "GkcbE4baWv8jefu7GjDkGwMDNMA2LdamCoxVQHxEGpW6h1pmQ59cjQoATVBE8GsoEkXwj9GUkxLDMaywNRSAB3k",
  "key23": "4S3XnHCMA5TQumVbnBNoBKYC1DStCFrVTehi4H2DjnuP59n5XRqe4kwNxRjgdRyCVRPcHk9o2XpeVF8V3XAoBbC7",
  "key24": "36CimHZHNBZyBzZjDKBRh232gZm1QWJjKyqrSxcXpsxcaGpWF4u2NRgPVfYPYk7Uhg3aZYVCnpeLwXZaxuFeGzbN"
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
