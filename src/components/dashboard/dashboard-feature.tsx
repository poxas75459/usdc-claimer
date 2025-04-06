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
    "3sb5dK24WuDqTvyeUWZTV19XrodFqX3BvYE3vBQNRGoxrSkT46BerPPaziPK9hebGRg6vY7fnXcDQFCNpXTcvHWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbPZ1d1VzNGHQw2LecHT63vqMatpjkbbX3i9PitJ41foDbbrX9qjgjkhY5gDbvCe4nLFCTVqbAdYmNscLq8nANM",
  "key1": "Cg9JymDyMmnw39YUggYSPq9JLKFYzSNas8pBu2Jrk6vnGP35XhHYiLcCCV5kLQJCK12YJiNtJd1cJp6mdTaVgqU",
  "key2": "5SitXdipCWbmR4RC4Zx3jSaF6MCd7otLWhQLfykTH9SY43ZCGT2owtYo7kaRBn5WUdfwSwC2QJqJUJHvsAyz2jND",
  "key3": "BuFA1o1UP5vWpyt2Qg6kW3ucEEhjdeC1ahwgB7pFD5GUYDCVGdEDhB8pgCgyQonE3YfpaZHKnNXSzcFhAbmT1gY",
  "key4": "31n7cuJsPscv8ynrpyNestRPEPAZiazvTCgFwnQVw3evixGsM5fr2agdyv1AWGwJv3MoNSyxycjk9meAGoBSHzG3",
  "key5": "3uzDhsa34emzTaz5h2MzSw6p9mVQPaP4mUJEcfG1LKUnxJLrY6p7EpGZ38qjzvV2d12RrbhBA4uaCNa7BEKF6PwT",
  "key6": "4St1CoLTKc9UTcwbvK6c95fDwuyFwUPaywvc2wtTYxwpiSqXo3mseuxCWmNBXdUiK3STJpsNCLWZ7mYt5iKetxsm",
  "key7": "b5bDRmKwxBhJZMWdYH8QM4JRhPm2rMHwVbYAyiUwhoCYwgRoNsa6ZKXPXsEqwdvb4mdWmL3umQ5Q3xREYaJpC6R",
  "key8": "5cVrBhC28ybF4fWBMfrgZN5Py7YRo3oacrH5K6EBET8YRK2vh83fz7oTLLDLC7WxGzXwbNaN5Sez6pVUX3dqxhrG",
  "key9": "37NMmJNt9YV4yJRJuckKWoTJxddcf6ubrV4uBqpyi6MKS3TMZQmKeAuqFbipRw5DntA9ny1XmJehj7Nd6a9wmK6P",
  "key10": "2U9LYtKZw5VFGSkcdrQw9tAAqAHKowRQtFe5NcUTuceybj95F3zc4u8Q1EPiPkX4jSq5wEV4jSz4k1MsCQK3tAk3",
  "key11": "2ByBJ2EX1g9nsotqvhPnp5o67xGxaLeHb1Biyd3h6pqBRwmHKCZdcdARfAdnY3mQ2Z5yBBfkJoYxRiT9HcKe2PFh",
  "key12": "4XVpmzpPqwU2x1yB3Rk2SoJdbZEaXoDxTMgVb6abuTSSnRJp5cx4ksvWAdYGYTHr9otQN17uhKhV25jrQrXEfuad",
  "key13": "2RC9Rv6AQWDLkL9M9wYca1hD4XVuZLKkdYcP92R3MTLZsecW5XqpqoKLjNq61UfkPtTdUD7Fknw3uGz35p5V2mCC",
  "key14": "3c1oB3ZDbxH8GgjozX3vkKh2WWJnPY5SF6rpc15xpoBwysiJaKbBapHfCtAVQ7RpGVL5Thj5rzqWqArAsuYQrrSD",
  "key15": "4mRik9MFfew54mvVmj4hjcsj3MTexrTxxeabfc34DaiJ9rcYL2YwQ882eW5Fm2vpgPq2CxtJU7RtgbDVTXHfzBGD",
  "key16": "4kiSPeKtLVkP8Qic1JpZuQuK9bYPHTWQsHSVRnEJiWSVbTYQ8VxP9TMRTLPF2aFDcGq7x2a7nBUuaw4566B4TRmo",
  "key17": "2RYPFPHo9AZ3nZ3HPVL4XtoZLvsxDUcgSMLViivC3YVzmkmT2tKg28ByoT3cR8KytaZQbfkUS2qqZbwm5J8oMNG6",
  "key18": "3byQo8esm5p3RH1xetrHMcNLyWctrFrfs9gspogSoyDB2CTzQiPCH2rocm8YQyex8xtri4jf4t5fqRK4yUoSSnzj",
  "key19": "53b92g8UqzgQFZh11cxEUB6NUfoeTDCJnsmAE98au9NAe21B17c9isPZxNiN8V7EFV4uBVWjc3XBPbLRHj6RWWdT",
  "key20": "2TLhLvVvBb7peQzVaKeN7tvtSPnYs1u9ozxziJNPJczxFPLsoCYoJas2H2S5daTezBrV1qDGPE52iaPY1bxmoXCv",
  "key21": "2BRQFJMFNMSQnP3Z465jhwJcfVenkWkpGq2AtZFv7CDEDxprLf1LC8DJRzu2eXr9LB52KYGN4G9exCo5DDHDrhLp",
  "key22": "5XKyUX8KrQRBkBGMfLqmmzFLdPsjpXdNBC2Bdo7BaY9FRuEbMXgvVWZpwLf57cHvYD9dSAxChaiZrErhvM4YkFxR",
  "key23": "YFu9xyxDAUnL9JuinKV8dshB7cHKDrNbjSMDPSiVyE1xVGkkENh5UCvg7NK1WKaoqte3GNVJuqiNtA2TUPRRy47",
  "key24": "5pGACZpiYEMf9ddBtAxuFSumoFNJDsuhuevRFrCbcKAS2no2TntcUHoHuqsLbwaner3sCYV17kJCb8B54tS494E1",
  "key25": "4cX26YFsivKi4vLUdcdjNZy8YDtA2J8UCbzcoJSrPwZpvFL9E8LdJW33x6xCkgMSxQivorcv73fwFGXYB6GAfBSk",
  "key26": "2XFqV6vKU2JFNYWDp6CxRkKuNui8GXwKpfzHig8DJHEKUsqVPRfAMLP1JYiDhZVQd1sghUJQawfMY8K4GFAWr5wv",
  "key27": "3koiRk56bDimWNRQeXj7CYMzG1d3GnNw3yybrj19SiyyYeMBP7nhhhCMYUXPi65odCVZTFtB9hnoYUKZLjj6Q9Um",
  "key28": "4c6M89TwpmYAswxSKa8CZRdfGaL1z4fhgXYGCScKASWCEC7vcmsEAWkg3fypaSiDKccktaYXUQxRNSm9xdmtYv5P",
  "key29": "5o7UAj6ohgg2ivfWNPWiiMbsej1rC82TWkNKsjy79tXPUWz8epdbKnu6XjtMCJ3rGYfMBWKv5jff88Lh3T2pRWW1",
  "key30": "X7HRGubeuem1uNUwWae8oUGJsZ6uah97ocyiXGzDdcskC2X3UxP4dicsKVN24eJXQBSoZw3Kew17ekPc2cUhKxr",
  "key31": "e1W8A8VvfA7TShJpXZBNAoBvAxPfr7TSxDXSUY7JjSDVbXbzKntcmFe9nBqQwR1D8mvjhXXVoX5kdcc1hG5H6Ce",
  "key32": "5EffmesCwC1yAf3C3zC2ZCTkVd3qaVGd58aFPzXjG9LexfE2dS5xSQKtLduuBtKgJEQBtuqF8mVK6fFMUv77HirC",
  "key33": "2D5GTKVapEAxserSuTq43RctEBV9jwEKdMe4tHGduA1p8SyWAac8EPcDRcG5Cr3AWnf2PVECQYH5rDbhxNhARiS5",
  "key34": "4dyCHHJzPngUbtfnGYsjfSB7MMq4jp8kdEFkREfaiM8GNdEfuxBPMzw9xmjLfawWLxjJbH1xnBPRjzyfLEPFe3K4",
  "key35": "5EoqAFs5jp3DWzzgd7isXtden4d5jS83be9xbnYX2ShoJi6Dao1iZMRBLjYGb4BA2wfYUzwojiJJoMsLRoi7BJWo",
  "key36": "4LaZXegtHW3dR7CmbPmpmy3ZmyoffMGyQPyanrYazGxGprnYCjKMYk5BvoAg3qkxaztVBJgR2z8SmJimGWZGYK1J",
  "key37": "2vZfsVxTNraswq5LGpDzPZkbYnWkbFyQsG8cj4G1pfyvgAUWYD6UkomGYN3SGh3aq8ZuhS6kHc1kaWy1tWmdEPNF",
  "key38": "2xpUqEDfCf1YagjonT7r9DZhbymwy9Sr2Hft1Py9oay6SBQUyaBbAWDFPuGwYftR1qRC9AAGuVAbWtiMixoUT2ui",
  "key39": "2iN2fPBqFxqNq2j2AArd23FXyBxMA5FcNPu6gNg8mPcqRiu2E5RvYiwptrcBPpG2FdrKpSwJDaC16s3fNPSPXG33",
  "key40": "YEuiyooZDdxEjkCzZy7bLTA7hocH4LL7aagfdu4o4N2mphV1Gh7sFaQMRdoQjNm8xqmB4vB84djEUfd3Js4otnE",
  "key41": "2qxSqPwCmBciLwJqWDVFJUMJ8wbG99v22gubawoemNiSuCA3pA97NLQBLk1pLgfPZeqjcQibs6fbx9B5tJkLMYQF",
  "key42": "2c8EZwCfCyhhSkNycBBHK1R6fzASXgZqvVJRv9H22T4RFhn3VCyjfktJMNicpbjUrWa9ssXJM5i4Dmr4YrNoj5Bf",
  "key43": "3PxvK96Em7vCjhusGQ1Ycywf7EYrU7GzZoE82SbZBknfhW4TRxDxVLEjR6kVTrKvCdjB5ZkCHrGGAMetntAujm51",
  "key44": "5bJX2DdEqo3aVnTLcdSvY9piNZQQW2khfuxRg9rkrQ4fWpMdtts7EXcDm7woMMfpsa1LJReeaPfprroMdRSpydbR"
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
