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
    "2nHigixSPU5LTVmQZxCRp2AQNaPkDcwJPtsPk6ZgNuzU98LgsckvgkxJAd8zHfA7ddyH7Q4Hj9u1DDTuVkNVR5KX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MoVC7AEWUcdZ7ARJojqa6u4Gi5wMHVkF5yPRpyVTravbNrhZoCeHt8YbG26ptKmi7LFBn67TN4MS6g7GsaXE3an",
  "key1": "2cyKhJvpPL7nND7W6pSYmaewujKdYm9qxmoiMCxAKhCcN3Pso6fYRVWK1RyjZSSFncmvuV23FmfyXSvaW7Gvh7ba",
  "key2": "4fX6P5TYbSqNYLXtKWSWx1LPnVXWnGg8LMCi85uUgAXvk1rzCqCMdLDU2HJq8Ypr7QmHfitGCULu9PKRuLaoWSSw",
  "key3": "52eEEEoyRashUjENk3v1zjgzNcUkdxngTTtue7SSjX5j4qkmhb5N3pKAd1PJWb4ykrGb2nP9xSNpK3smHuPTDEY",
  "key4": "NgQyJR6F95hzCUfJPcYAezBMdjQJqPXCmcR2SXpK5PmfqfUbbCm9phxvoPrEZd4NX6RuEJUdaxqhNhHFzJn37j3",
  "key5": "4PXmsz7kHXj2gRAvAKbmDUTD62DxAdqN58GXeMh1JQ2fuXi4YrxEWG3g9arXfU3qTarSfvZ9bbWNn38Zpivmh2vd",
  "key6": "3st7GQrErEess8v97sfdDN52rrsRzkZjWVQhyYtKZFVHgryCwYkVVtpGuzdsSPgRVzGSaqRLq29VAbMtZKHQBXLK",
  "key7": "29Av8cfVxoDXajd8RArMFRfKUdbXgiVmJiuHdMRDUfVsHoNXPH27z15HFQSXbT9vmPpWwgKvFaoj7217Q5wfnjEG",
  "key8": "5YDgzDCx6Drk2ZVWNeJr6n1mFF5xevAcds2z3n3oSUBhRTbPP4AR3apzzQzaaYuDqEeDbfLV8vSSyXPbAorGE5Jw",
  "key9": "4VgFJqzV2N65C3HFP2o2sGheMmcbREVEUrfQKTtc3sJc8SaKApCqxshuNm9TeW51MecDFEMV3okHpHcNotsf3Uxi",
  "key10": "45T1jcHnqmuiVNPjqqiaqMWDSvuJMcTsWUJhwKhhqg5mEhDJrWJwjhzrgTdz5VA7c4BQY9hthGCeNnxb4bQmGod8",
  "key11": "5SMi6JqNu13Pybw7oAY1RnSpLVT8dwA9Az6x5Y5tzusUfdHzgi7qGU6t4GpHHz41T3btxntHTBjQgc16TCwQ8A6Z",
  "key12": "haSWFaAQ7RjqeCbDreAbDgozHen7FMJoFCe4ZDUwN5dfJB4yv3NhuWyhCfAGV4PVWxKAZFpLaugS4Z79BqogjpE",
  "key13": "3vqBNVzjP9Gw3dSpwZoDQmTpv3YDeun75AiW3BsM7dYrgkikwfmK6mK1QKphMXHCX5B5j2fZixaEZGJhBH76vmFY",
  "key14": "2zqHojEQo6tte1cSdusHUwtG9iVPZobG6KxouM4Agh5trM1sCk2yo75mbhETpMthhds7xEUcXokQ1NNeJWLHpgNm",
  "key15": "4enPKaT9QZk2jd8SMsX6SnBHsGQD1JamaGJdNfxiD17mvYSdTL8vjxyPtErvGXtmKfwCQUUEJdmHhFcHwjfZAcHL",
  "key16": "3aSF4e23PezXdERvMVoRtMtqxNL9UMJni6CCcfqps92YnKyVwYD3Pur1YZJzuFvjuiqGbfmVLTu6bNzUbR2bjHT3",
  "key17": "tX2YyrLvmYjnvtNGw3JX6CBdMcxrj7gXid3pivpNRfDEUJgxAARZrAK7dPGn48qbtYoXW2XrX2M4TetjUg5G9b7",
  "key18": "2QnjBf3we8Mx3LogYguZepqjBVHq1EPzoKfMB6Krn7ubobvpS2Ep8tx91kvq1FUNGcZbQ46kX57FdibQBpY2fTGu",
  "key19": "5kJL1F6fKxAfLXqK5toCk53uEvp34u6HH6zN4VEZJiiJbDDbGCQUTnwKP5uLypLAekgajsZv2PHP46LvoVa4yFK2",
  "key20": "vhrkADC8NiSZ5JHWHTFvEDgmN3VJz6bngqrvrXixVYYc7dbm64DwzZRK6XhzKSKtEwfeUCsUm6EVoQ5EH8ixvAF",
  "key21": "4KWViiyK62XpC7b7LRrqguTJEPWRqktKDKLAzYj3tBwkVbpNj5QLhfoLyzaU1F9SPUdUfXV3rkgMqb4ukqHqXBLQ",
  "key22": "3drUqDsqxqfKp5xVoZsY2GmP19VKJuyEoMMTtSiaTPmj3zfLeHHCjyiGRWvhuUwN696xpbi4vPXfDNqbJpuUPuxU",
  "key23": "AeXLghbb2LQZsMcDRe1G82SZ2sYZjgy2u6RDdALwC4dzzmKEx42JgYSgGjQRTxv3fdCFifUnW4fFUudTSbFZ1m9",
  "key24": "h5iNn8Z34QRLb5mY1Lw69wyqhj1Pm33qMZwXiUbxRFwRmfrg8FzH14GKogBqmmizPdCkGtBpkhP7bXM6siyTMxw",
  "key25": "4NQ6BRYgtek75ARQuCeXmp8q6HeELTdeJ4eFQnF3wMoVcuRKRrnNJ3QeCf1A8vGAodKB3kCb4vtnF2VoyQnRreL6",
  "key26": "33kcpe1uzpXRYhWqBP5ruvLJfex6Zkpoge4QDaotKZBHxPNrpHuB7jUQw9aW1q8dxxA2RTRyZrDT3Vc8q5WdEmD9",
  "key27": "243L5Vergo3GkSzGyztUha2k6ojk4y8pZQJTHFCXVaV2Gsp9WYqXtNrNYcF1H3W2eM8VeJAV5b2V9cifD2cxoTGm",
  "key28": "3LeXijx2f6Ts3FaHartW8iM9KhtuBBF1cg66SaCD7m8WdmYz3Sd2LWtQDkWrtYzpFbee6Sr34dBB5BvFrvC884DT",
  "key29": "2Q6zpue9WaxVjh7J3gRhkJtL98M48CQmTerzQ1HVTbKT7vPXJRDHDxZpphTTrX9qguahGHXgL83AYktgXegq2YrV",
  "key30": "2H5U5dYniTxf6kXRv6zVGTNZmVHhDenPr5bLcLnfWSZocFEZSATkL1zzf1Y1xcNQ6gvyQB7UBPnFTmWKyhEdqTxe",
  "key31": "2J7BaHHm4CJtM3iP5BJSBuajsNLkKeL8Czd5bRZUZXHz4inM9xbyZJfFXQJr4SxkpbtSj7vjmPH63P9sG2G8b2po",
  "key32": "vU2QjfQqJvBWdaY2fVY7pbrrD9Tvt9LbCLEhcdQdrZr54vxmDq7szYZxwzd445dTREPupCiXvTXYL6eR9ia2Fxr",
  "key33": "5fYw2yC5Gh3Cgb6rVC4hn8K5h1ettZDRPstGdvDKDVB16vLpqyrwZ4SmXuSgQquvLYVE9ZFH9hz2vpDHMseRwC61",
  "key34": "2zYDgLAMg77japDTLMK9dSMYx9fqAKLvXDgJhqMgzRqeSHfAZ92CiF94gwi7q8GGRKKnjieQ8KAY9YAcPobUnq7",
  "key35": "2FdBMiqnC268J2SGkSYpwiNpJJxATtiv83h4YsufmoViUYgsQWCqDmmGBGHoyKsM239ThuMxFfKuZTd45qLjfhTS",
  "key36": "42AP8HUGfnvxYumZ8t18E2sQDJThwtM67cRNGuPFQetAtwg3mktgDvMrQ985Q2V98YQJ43KqB967yf2sjVTppWhB",
  "key37": "24FTSdydiqFTYXnMXRArXZ5yn8PP4RdXB2X9SCnVWnLCktCzvejWYy1EmgmANgNgfoq55i45hs4WMon9ttVRQyVm",
  "key38": "5WxUN3cArzsFoTBUqB1sn7Xrfmk7K36GLjZGExcWd8X18eSVLwThBc3FRujfi5bYtyRDSGwAazEHABCTFf1Kk6vR"
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
