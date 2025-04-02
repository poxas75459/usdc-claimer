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
    "4PYTSb3vV8ToYxLWDNBaGVGSdD3B3VTNVqrgWxwf9JkQbQzeUcRBDXqdYCgJqTmg4b2ncJB1Xf2z4DPASDVBCtWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YBCnQodMHmZf3vkbDssn2P1myxWE9a9BY7vqrNkgvTWXYhFUUbfoy4x4h7iy2sPQcHKwnYXFBPAHwEZa1mfMhHm",
  "key1": "3cFmtEWb317LSiLLhtLxu2Qr28wt7z1UAG5MnXk3iotErFL4oanh6ghyqczJ19o2gSanFYMJYVj69UqCS3j4Z8gY",
  "key2": "2fj4nRyy8WF1TdJNgPxHfTPbbgHVo2ywm8Gc7LBQULUQ32KKxnKpLPrdvx7BE9kffhVcLu2Zh2HfYSXtrYRoGmcE",
  "key3": "2zY8VPzqxDXY6VMrsidtnfp27NJ27GAEA27WctwFVsbvzN7GG64jRMGMqpRNMw61ZUidHxCX5UHcg68LB7sMqjfq",
  "key4": "3TT7rt1yp2zftVvPjyo4MuXBChJHrXRbXuTox9UV13DpZPSpQrbkVSggSoe3KB9SAPC6xSRK9xYQPYsS5YkcZ8gq",
  "key5": "3Xp4V4WkcNuQBqPyFfcda5UeCYcWnzb84A4pzQV1Gywt7RnmWgVQnuFm4DxPmDuJfxRFvBSYsHDoG7acUHNxiCFZ",
  "key6": "3o1hNdB2Gp7irZeDGGbAphqCYKxkuEsEgvd38t9Ju8BCMT6MKqRGo94dYbdTo2vLwAWVeegXYLhS3t9Cq56P42U5",
  "key7": "48etW2PzVavVTMHKCdtjM7bajdnWiNBMPpwYaPgETaxavR9y58RbEyVAkCfqCbUAWqkbUkHJ42fdTXPJz1AzydiZ",
  "key8": "5NFhrfoGBTVQyPsmd6P8ENKSco2k1jV8KKi3brPcAwNyWnLmnKvaPN7drCCPGRRjtYP3D3HkNJwrhG9XZ8PBaqu",
  "key9": "5ukc75bTgAFFtSsfZwRAA41V4a1E7t8rE7yD5wNKmwo69VwwjiHgJwSxxNRKGTdrTdrHvAmja46m5odDpAQPo912",
  "key10": "4vhsjDAwnmJyHWceiufmQ8GbV8dhvPe2jXV1hPgcfADSphjA4x84e2EJ7CS82oBWfzosyyesS5YG4y1K7hAxDJfs",
  "key11": "2GPkb5XBdst2odgHhWhYSQronxzGjJmEJ5qRLDVQE4XD5mq8Jmb3MMyXW2Rmj8o9GkbFxcn9vUUJXtjbPKPj2vAs",
  "key12": "2tMUX1bDhq31HNH4gFTYer3htcNPkGpgyDxbyjwoUHhALcTYn4ZhnXUaBqajq8ACLHtYTN6H3Q4sSHNY9nBxGdRY",
  "key13": "2x4UR4XHG7GXPqkjHreGL24u6k8qyXbzqceEBKZG54TdkDww6tb4WtMZcSqKoCYUwBfwdZY6dPpBcvNShVburrTk",
  "key14": "3ZgBbWbjX6mcWH2njTZzU8ot2qg4LuVvbB1iAPaXn1b58NHurubBuAqsKf54Hj9teWXrdaxD6zN4BWJ31puyDmnk",
  "key15": "3tNYNupbfn7L8gvEWNEn7xAhUpSAfyyz2oXiZHap8Smb82sXbCt7U4WHXZkeCxy2Z5HqBqCVDYMocMHynpZAy3mT",
  "key16": "vVv6Yd9hfLAdkP8xGy1jHZ4x6FsgvLxBJ63AFG8UifaZw9LNmMynFNnK8oq4uLnXinuaje6XmWQCHPwdN1zbioL",
  "key17": "3tEz85swi8yZ31rdJfAyB9Wx8yqwY9GGjUx2hyzrdffpYVYgYcuCpxVmZbsEGUSYb9BGQhUEg4LPadwLHzARvnb8",
  "key18": "5KTheY9kD314yBWfSEgcmxKm57tsaNjMsSZdEotnMB8ToRhk8vobwvwaZvkC1ajkBiPzJpPpEraHwgq26ncM2AnS",
  "key19": "2cLJrkhGSK1of8vvaPMKeRicBzkeNYRqij1b7AmN4CzViJbusudnQ28TJ9jdypunJSoqRoDLQAyEcnuBqX3MV2vV",
  "key20": "5xtWWj8P857jzAcLRWEFRjEn2zLhHA2DyrPSZjc52RbLihQCsa12MHxNWj92TaRsrCdh5zjHBTGhWCUofys9r5bW",
  "key21": "pL1gNXGwCb4gLvFQx5kaXWPHwm1GGCAnsuucbRQ15AKYXF5yLDgjxAmKbxYKbtB6mEuwU5zGtdL8qPxpwbEYUZY",
  "key22": "4fM383yqqyhpvq7W1bTFPZUSBiaP3RRczpaoDGNFXTUmQ2jtteZGB9k62x6VvWfQQk86SzBriX1X118d8iU7V6Ce",
  "key23": "2siLNCwZaWhGPRQR8W2tck2LvmnBF4yC8f46Gp4u5TFh4kWq1GyfxnJUhQV1pj75uuAAue3QvCoCFJwxcX6RPafN",
  "key24": "2FUjfnp9kBr8PappenVoBSHe3NYakdTo7Kzqf7AtyoYF868fM2aeKRU1VKXd4vurjAph9c2ZthfpSPA3AvpC7abM",
  "key25": "5vkrcvfVdnAX3ojWBFM4wzWdqkWKN9Kew2THBR3U1L8QVZ82zt328CiM4ZxkJaKgrhG8uGfQwA6WJHatv65LfvRz",
  "key26": "Q69XJEN8mWHwCAtuPpBtQqds7RquAQfFTDKFs4FtFRaYhcgniBKvjJA3FhR75XFVNUZFL8Fp46yyNohB6z3eC5c",
  "key27": "2TyAV8zML6KG4FN9FKapTUMyCL4k6LbKhMb3LHiTPwQ1pz5pk9X5DgFgtyLqi23qQJj6HWUSkk39ym6na9CWFwKB",
  "key28": "t4iHux4846wYGUjzAsZFCoFfWjuUkAe5bSheh7izZ6RNwviLWSTZf1TVVSN9gCqQgDpM8toyFfC86YRgTsP8c4L",
  "key29": "2Q7FuWNayPX3X1jfeuserNaNMn9xxt72xvVfeijeniHor8BrMaSacTUZaQpZe1B9kFnp3Zc2YmTJq8AQpwKAKBTk",
  "key30": "GX6K8XMD2kjVRuZUPG8LiYmKCDY4sNNYAeWiZLuLaJn3Yds2ibBm87mJ9HrHCRiZduJMvJggzRQzoMith9w2erC",
  "key31": "25TZ2BB6eqWQPTsyf8GBRZB525UD3Ws626Hmmrsk8fYfWCHTCa9H2TbPeB5wst393P6cexRTBTe31r5oTVTeEkfc",
  "key32": "f2XA41P4QAGUdp6hjFC943M9Pr8WyMqv6RtQDNr9ymcpnbqZipfpk8ZptyqLaiEH7g1rTHjtnCXiQcGGG5YFdhJ",
  "key33": "2kV1Jpvo8b4sDmH7Gz2YuyAuePYyjKHxxTFCq2twz7Uwk7rxqFyono2hL6jkhxkeseyFqySh5YCgA9rKMxqRc59V"
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
