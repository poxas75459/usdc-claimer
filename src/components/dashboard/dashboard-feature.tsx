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
    "2rJ8uJPiQsNNSbhATte88MeWPZBPQoJax2p6mA9KKErG5W75AxhcgCs9nheLzCpGqRL9xR6434nw9fDWxMEJPjEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VGvy3KUPEL5JJ2LKhvcHv2CtZHzcDiPmAXErYc9xsutz8FkZGPKBSedpusvbkCjq9c94aodJsQbNqQz4xVW66hN",
  "key1": "5rfqKC7oBMUk1C2G5frQBZdHXYPcC3VCT4DVzyt7bXvDRLNWpBkMLi9cySRRgmkfUmhbd28fsZpYsXaqs7xdxe9k",
  "key2": "37xRaqiwVDSTVs1G1jwbZcLgH9YXZjZZdtQWnXijDBrQUmqE4Whzq4CjDuuF13ri6bBhDskcVxUQmWvBXx6KHn3T",
  "key3": "5rNfeWftXZWSZAtGqhQddse2AecSZxuKhvLTVktQrN7DXbwgDmwjgJuWE1QTZVr6H4QpZt5PZV5jnoiy621Lw6uX",
  "key4": "34icoxcYurZSXtJVVLCHkSbBrkRftHRoYnJh3a4RbHJZHFmmpVe4huox17iuBiHu3eLumuRnzJAqX91yVQoua2LA",
  "key5": "4TdMPpmnyJeyVeTkrStQbBigMaJdRf6RoBgsNRAJGEnhqqfCo5RnrwacuaJEffuHAVaw7t1GzG62HnM2nQc4eNnn",
  "key6": "7XPCjgU6CeY6ndSQhHq4sWRnzHXMi3ohV2wKk26HDWVaqe1M85AmbF1LtR6XvRfm6vbZTUs3Y9kKQCtkzSJypNc",
  "key7": "ZWvSamQYjV5V17HzGp8UW3ki8wXJ37JNCVoTvwtaA7v2goBoLSsVvx6FdAxbJjvxMY5Pjc4WKyRRGNGCL4HNTRA",
  "key8": "2UZE31JjzUDs7XjcP3QAU2GVorE7a3nk1e3AFqDpBTM5DkNDnob4ADX4ph1oTcpGM1WBPxxYWEsfjD4MXtzBuqA9",
  "key9": "6JLY9wTFeNYLmy4KP4rA3LoAthAURh7kamzgvMfGSey6zCzje2WjmHea8g9GA7y19JtPtRPxhbZR39bvxPA3uZy",
  "key10": "5T9z2w3cqkFf16yYVmGmQRAHkQpMZdZcBMmL3gfsh6fyeTbSDjrB2EeUDbxcdBwNAA5cZLLph23qjocwBaTLNfLC",
  "key11": "5XtgYW4UFu8kz6frzWS7wECeLTmCmLqTsDSqqCFFDiKYvKkEQZpnfKvHwdC3mHx4fw5g9QVZz7zLQ9rN2GC6teMm",
  "key12": "y1eRZKwXVkPUwAfwtEfdzcCzQBppcQiPczbxtZzVy7U5zYXXsKDse4VNbQMdantbrZbvjYkPsm7GfJwcz6cnjxg",
  "key13": "QwfPjJZwEEifgeWNUNHfvXbUrRt1gEheDfUriY1EVraz6nYxMkRMwW9x3FfvyfE85TcVnheP2YPL5hDMLy37hSb",
  "key14": "3DmVTx4jG6p1LNMoBivGALGiUtsKZYSSfTzKWdfK5T3dvELrmz1AFh6PdLb15uAHF4saNG6x6kJMun7QDq2SjVgF",
  "key15": "66PLKX16UdpP4Ut8vtjcAL7YEeispe8z3SgqcejgEzQegWyTjbe5gSSnWj8ZY1guzFLStvK6n8VDEGbMMpj4WvTa",
  "key16": "5iQ8T1MwCG3eP41QK4tm3M2uAKXqaLFtbtwbcG4eD6XiJwkxTiJuJneonqQHTfCxLj233sARatjznjzbTTnqUPpH",
  "key17": "4ngGtrmE3jxU1ZTbVzyyvLS285uDCr5hhsAZBGn36gaS6yWeLUrFjq2sgTnDgQ4bRfrfEUNeb7mMy2DY2xgx5AsE",
  "key18": "3nqXjz8D5HcHbs3ekzbfgsFxh8kfZ1ne4RfF7zHz6MdtbFi7LTDnG3EGe1Xrs55Z4vD99wkJQRXqh9MQuwamBrLh",
  "key19": "2tu3DNUc7HGk9vmjBay1MknGLdfQ9wFFhAApmfWKS3VAmxE3PCNEKhjV7VKmxDCrUfYU71be66u19cDYSU8UdLJ7",
  "key20": "4zfGuufUKSsG1W2ow76PqbvYtdHEmiNFLJCqynrKpybDKQ1ixwm7a5CsEJH6PXtRd3hAUg7Z4PhkoDPR7waAAcdQ",
  "key21": "2PaBSbZNfkoVgvgib8C6eKVkaXTNgoWaSnPUnbyxVW1fGjgyxBqgGXnZFQXAK9GBS4KPu5TYSTLTxPcY6UEqEdLC",
  "key22": "SipN1U5KPdfY73AoJYx1qfJQ29eM5FTYgPfuUsrAUWkQLDAEBKXtTCkDTZ3GGs61AQZ7wXdKR6JS2bWgWqe5fsE",
  "key23": "2S2S8j6ahmuC78ezjHXMFjMduWSHS2abTB35cSvAKtoKv24JjT1D3N5AmTnuXbfdovYnN8kVZSdsX9jUWsFzYPCn",
  "key24": "5D12NRvT6DkHTRYzot9Z92uCtrapiZZ7TfWDWczkmkUz1CQfLQTdRR5JcKSCYd8X7dTLdzrMtd3wmYtgRo2GW6cQ",
  "key25": "2jS18uvgwu8jveRK1GK8riwVV6JmtKWVgGbbS6qi5YHDoPsXHeKeVcZoAWqCzx9Horka7GJaJp5DiRHCSzceC8sv",
  "key26": "5Ji5rAJ4e9kj84u4CHYLpTxeMCym4WVPTkbNf9EhZArrSKYfRKTuSwWtpsihXdt88Tmi27Mk6YSZmbTrtWx5Mhd6",
  "key27": "5ZCPf7VbESMXw4qWnw6dFLG63HUPgboopoztkpBP2oNujERJhoKaiQzpBonbm3pBiJzzRDSWJHth13mH9TQC5w5j",
  "key28": "3AF15qT7aeCT1HWEUiBV7V9SkofHeXX4pe756DTFeANdAxqxu5zSi8mQvSgs84472KZC3HAb8jo1GPnWcgZCaSVo",
  "key29": "4pLGv9YRNVDJcj9X5gp52LJhU1VaCkxfM5GRe4LYXQPkaX6AgjH1dbMtsaemEhdvXBZZbVHMMkB9f5y4HreCX7em",
  "key30": "Pqj3QRThEaqbd2Y5SDob9sXXVY3tahrS4LtJLq2jaQHhLWp225KbmTsXeN9PCL49gBcf55YrAZFLPvP3k11XHAy",
  "key31": "3AmxcPTNioHzGfkzqhYD3p2g54RFWYm9sigSKTAunAgXkmEdxD1GUmNJdNJqRn7eXSUXF1mkK3wKwreXTtQS8ntv",
  "key32": "JEoSbMbTQsBLcc41qgpoHHKhwXwHHUXQuPqgTHEBR6R6D8gDeRscUfhfJ49FANF1bjb7BhwNWWddeUpXQe6ASR4",
  "key33": "LDqV9DJD2TECXEfLSeGfGLNiixwvCVfBtpRtTN7K6DzYZpqVsRDtHwejAt1VExNeHKZnEokmFJxmHEe8Gc5eHQC",
  "key34": "5ftt6diTTZ9pkke85d3aLwVzHZyD81xueB1ggVZamEjFVkE1ydVNDoqiZMpvvZe658LJDD73E1kAJDGDrDYH684F",
  "key35": "4WpaJUmdceGBkpZJQgZic2iNbVDWrRkHhAwDLqAntofnj3QCvDpSjvzMeZEGADQs1tDBCWxxa9CJTuxrfJB8QbrK",
  "key36": "gSRG5qfMke1Y92FDqZ3Bg8tAMuXjg1vSDJaSECLauP2nfh2sxADZ6FLYFZLA1d5b7SwJr9mjs2Y9y2EQVS3WURF",
  "key37": "5yDGiWjzYNWjn1PkuLDev8fsafpS84TsSoWJ2cTjAP9Wn3Ai9FV1QWReFrpY9yoyrqh5yN3f7hUXp1vRQgBi7b3p",
  "key38": "4vS8T32t2P6oKEXoEsQfEhiycgPHWtUTSnysscLUZZyt8ncvrvVvuZxSRdgGJ35WQaDAcTctNR5m9jScdtYUZYy6",
  "key39": "5Kx6wnBv7CXrNPH6QQAmdgmi5XZPXqeisib7BcXGHT7JRYgkntoUk7JD6mAJsBDFf5EndHx2Axx78oeZkF6uDS3J",
  "key40": "4JbpuSKcoJwsGQ8LWYLuU4DgMrVjnJ1b3Bn4spw3jtyxPcG9s97pRfZ3EorzFteJCP8fx73pNungYjufQiddjSE7",
  "key41": "2DW1xXYDRcUwSJ2DfaiyrrSJvSZLQrsLNzhe1nUWstzE1dHWGwjbMiSy3ubYpRQ7TUr6eLVUhAUZPToVq7cYhKDx"
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
