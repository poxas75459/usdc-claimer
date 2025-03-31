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
    "2UAjQnuDhiAd7ZcwBXWeACexQXVDRzBZBVfhA2fNcR6QQ7acqn1Qo8aNw5XEbcPYkHzUi3pZwmgWiaGpNJkq9Rtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjrBTj1owxfD1Jfj38WSSai1dngSmoGCQAefy7rRzdKE9cUs5qHx8VDfbDZFpaThZt8uspKmrgr9QDtqDGb6Cpk",
  "key1": "414qGJWmwzPBjisuLyNVUBNzDaGjDSRm2hSMXzKieJWE3upwkzfAqBfGDa4rz7EpNHnW4HJ35RQnJWY7C3wh9umH",
  "key2": "2VpMT7nu4mxp67hhUfLzwFVBGWPYWVFSkyH743PfWFwbQucCT6rBwVi4DDvs5Gfc3qQBTBbYVK81eCeB9W47Z4AT",
  "key3": "4vgpoPK4qUCNiHFC3WdapJzGSvGLrLXkt1b3rT1DUpqD6FHjA1KehM7JyMnYeZB5Ji6Putr3KkT4BsSTJfTLeLHD",
  "key4": "5sPEdfBXLMGFUQenKXVCCABTgWD5ayeJCMTse6veSmooFnDepLWUzZomMRdutZuco9HunjXmeLzm2djMCDW9sLd1",
  "key5": "r81diYPfv4raTc2dMPdgawuaB4U458LBPCZRsrW1FTLyFwcH8i1BBFU8z8kJ9MRBr1y2CLeki5PWMrwSt6fmQg7",
  "key6": "5tFXAY9QWRe8K6X1JxoLxiAusX4Rodx3oQG8TYXfeAKTeFmKSUbfpphVBVezjHBeQ4WNiUw82kQKBqRaR34ouUG",
  "key7": "5ayWS69UxsxkBXcJZFhHQC22Vps61Q11bjV3hxDP1cVQi6gUoSh45b6MZA5Tx9fU86Vw7Td5r2SCLZiKWcqPdRy2",
  "key8": "4dRkSBMopF821MJNiDesk7hbeN6AVde3hiYTmzMXd1GKesfEZDpPoviic1tn5ZQpEuzANKz7SHaCdmocrpyvFLxc",
  "key9": "NyyuJ2FZcNYAoRkbZDkHdqHdfLh5R2jA79GsEE7L2M3jY9EwqhaHz6d1AFmKVWpt3fd1nm4XKK86Sykp5dCJAEV",
  "key10": "tyPkGQfHeZ7TNom35o6bHhczdhiTrf9LWNj7VMft8UzWxcC16QRnFZWsURq3aJxuWmGP1K34JD4kGaQb4w9ZMXG",
  "key11": "ua2KkSGGJD1PMjS4xkhQcbMCemd55PeY8AGFiJgQBefRyEbKW7mpU1A4c4YpB4p2T1buvHutsk7qv2ZgubwVT4g",
  "key12": "4jmx3cB8oJb2akZcWkD6SMMD7GKRZQXGGsm8qePVNZkFxAfvy8drPcUQkqqFgrgm78cW1xCiUZqEfb8UdKy7R2fW",
  "key13": "59CzauHav4BYtz1MxCCtnMp5c1fYdobNopd5BAgmeouLMmeyjYraWKo4psybrLFaJ5sXAKgwMjf2FHkraUexcGvY",
  "key14": "4BhweiahoskH6RX8z9YrdwMKPAp37SivQNJtFPstywVqYrA4XRhua77fMf8dafoj4rpzcPyTve3wFTidLP3cVZB",
  "key15": "7HK2fLSVJUpA8GEchu1UQv4ZQBx1GCn4khzC4Vw2VUapinutTFUFtjKV8NrxEZm75Ysw4Fd28Fngos9ZzFj93Av",
  "key16": "BjyqJj1GR7guUp5u8y1nzCkms77DSPxvGWiToAMqC3hKvZS4LsBFuiu7Gz9YB5xbb2RmkdBW2Te8NVHKN3T6PFT",
  "key17": "d3NcDws4L9A8DXgh9q5n7wzbKquLk7Gv5nUuZGriXVgLNS5pmXT9rQ9smrHXTHMGjmiWcLys8jBCLn2eQCndJWQ",
  "key18": "3QgygVJRCiHBDbhfEW2eXJJgZJfKM5hGBWNbLXZ9rEJNuFYG9bCxpgvt1TziPJzH3RbHGVg2CC12G2cKdLpFYrma",
  "key19": "3mibKE4YLWFWWWdNmCryKwCLoixaqAchvogLbGavUYt3Bd7n4Y4Vq6UMtT7zpSUMwa2ADY6LTbkKqttKgrSTjnEs",
  "key20": "3uA4DZQ4CD1HUNox3DxTGitheCxH9XrgdHidpeQRiBUwKXTUwpa2vU8QU4z4kPckFs3ZWMFrjNnRhPmzC36kw3C4",
  "key21": "8m85MXcC42Bxgb15sSWeJYWnuoGbykUPQTDLTsrGHNUxex2j2KJWYbBHdjvZrbvzecMjhsBV87W3FbvuoL3Pf6J",
  "key22": "2fqWP3YeMFTJnx9cubcxAfBLaD3WwQw4kSJ8dhitN11ayuFYVPa4MpPMEWRrED5DZmHSXBroHXcPcGoxvKFHiLM",
  "key23": "2UjPvZ5HR5tnGMtxec1fqYCFYURfZCbby7WGiujCrQeKe5wL1yZvbM6HyuZwvq4sW5AxUbmDPTxkV1AtduAji6Je",
  "key24": "15mHSpg7ZgraLkThtbPyn7JowiFKpRqoYL6jpQwtkBmv2rk3kH6ASqA7FKA5whSyKKVcMsWThJeUhuoSUo41JvM",
  "key25": "4TGWiWLnXV3QLHixj6WdPegcujfE4sMExgJvwEQMTxs5gFn6WrDg6836vk1Pm8UhpTrLjeJhVJ4zb4q8ho8Nx42h",
  "key26": "i3KTk8u7S931gaPm5sNtzg2CGZttwrm4T22L17SZijuUNPWyVtrXFMEToBHpkzzFZ29YTQJQJv3tvEuivaa8ppp",
  "key27": "3kwzNLtcdtysLrQmAomUwQ1WHURSuuoKHxGP5zog67k8URpVeRRLxvCExZu3WJb97bH6msEXg2HmLwApFYiZTV9m",
  "key28": "3e9a69sWkc3bnA7X2oRmdDuD7MsaJJrfgnEtVoZi8g2Xw7htRQKETQRHFVACL8SBCv1GDUPdwk83FgVeZYxLZi9n",
  "key29": "2hH2xezxowVdYG5YU32aShEnnzj3Bhu8GCmFrBaFe4Wt7JWBrj9jgzGZwZ42JEK4aKXRF3ULh9AvqMLTpib4mLDh"
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
