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
    "2raEKJVbtGFNMdksyoLKZSPCTFipBQbxBdiEJt3cMgzFjf1zkUWTeb2Xw1vLgvX4UmmBBzhiDbE2HfLK8LHTkUBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcmZMAQR5fXdREzGnrRGbRVTrGPruvETN3SDzuLKvUkR1gDusjo7HxdhFAyQFPsEqqz89TjDz1rtETng1x32Hty",
  "key1": "54gA9c534btwY4TqEuXU2ZKLqL2fXKDw99k432nAgKsd63QKmi5skm73ZgutbJPRjmhf4iXa6AeecgqAb96YqC2M",
  "key2": "35jRvExATayo37mRoRgYzfpC7phx1xKmN4R96XRVzXyDNSpVjJH71G1M3fw5UU4W9XpzyehdbiVMJidq4esFWhmg",
  "key3": "eRMXkHxUrDLQSnYr8ouUxbpQVFnrM7aRnWWuuhy1SQ8wa8m5N5G3W2LmUxEG3FCZLsfYgdCvWDA8fYAoagmrDjx",
  "key4": "2E8e63J9wYFpPYSPX6uU8XwqamRgQ8eAXzhFjPDJMf1JLqABSpwdDRCQKMpquRn31eRwFnCxGVB9zFX4N7QCJ4Ec",
  "key5": "57tkJCjTBX5r1F9rpiGtYurMwzVRQ45D8PnkRXSDvqdUN8cCM8pWA4H2au1ApkYigQnUd3MTk3kDntLafYZR1cSa",
  "key6": "4cEdrKghoMYe2mop35cDz11n2e94EjDEBrdde9mrEGLD5QDpCduGqdV1BVxon8XoQnV2JSB5irNS1NkxDEu8XDZr",
  "key7": "4et5DywqcU654sN8Px4r6FwL5offJR1oEkrVySzcFEgoarERfHvLyzpwGdVyCwvbnLvLdQDrZNzdd5Tu7wNQTqHR",
  "key8": "3GWShc7JoytwC9Tzd6VeReqpADGBshoH7GoStUrohZxycFEYV7AoeTv61VHa5ZeYwgT7Jtw5ATBH5QNntu7oGF3e",
  "key9": "2F4qZtPbTQSCg1dttwagrSkcN2N3zDwSMKoGH24hSd1pUUZHjvyJYvXgE8P72hxmR7Xi8yUF4BBuDeRX7J7oRtnd",
  "key10": "3EryReP93NeE1h9tpR5s8W9qKk8BdhJomxzbiNMPPPbkmfFWG4hekUWe3e3bt9RMJVpnPEABKn2KYn4pha7YrgUc",
  "key11": "3BaWqkSKg94Y98hFpqq1eH6qoAEtLxzJU5T57DUvoftoKsFm2taF1m8PtSNETBZ4YD2wvFX9KifC7TTCEoD4KqGS",
  "key12": "2FsZhVxM6WBowvnXC9kPc4NPBES1XDT3pRdeKQpgZAsnics1BH9bcYpAikGSXu8Qhu5eu33prjBpMWs9DY78VEWP",
  "key13": "4h1XGUi4m1DfQ7ksJyqv9DuCr9Wi4CMhbCqL2R9VFvXd1kdqpUj4UYjiT9oG7wEExLxoC4RMsAwNkwNu9HTQYjCB",
  "key14": "2fz9RE8DPiGCVP3i1L3Ni4UZ8RprfwdBNqDEfJ37ejpNX9qCDyQR3RvF8kH5KEszstCt6Nye2VdGdcgBKJrT62q1",
  "key15": "BfUporE6QTFD3A1vkA6shj82pDQZN6uFsPA55aLgugYZMXzA6E1jVpu7krY4YzDuN2fKUBThi5zbrWS62B2x1bF",
  "key16": "5kcgqdLVY4dxeKJwyAcuwxjkg5N5SMVtekoJLoZGoM9xAe4f9SHbetSzxqt9hrBx9jfHbNUFDStaNSycroG62wfn",
  "key17": "9k29qod76WRAuDWFXDySwSxU4dd7dUdgNbkefK9iCEaY3tyeuaxWy1goNKpqxbPJ2391hK5bTRgR2cdXDdGccoi",
  "key18": "vtVoQ3cAMgYwxoKBWdUUGMd1e6ng28GDSPkuiw3FJ8yj28xQ5Ca3mzYrkhyukVYDFamAAPCEejuPR3CiJFRPWBk",
  "key19": "3hw1YL2Z2oKQsg2vMdCLETpaaBZoDCDETwhyVaUv7FrwnXGpXsrYXviFgFNcb2PNC1rj75B6oAkYCjsoSJMiFTyz",
  "key20": "3MbZ9jJ7htRrZcfWR9hm8bdBgEcPJsYiae7fkwgQLfppCBwkTER1BnE3Z7bNrb2rs8kn6YKr2xzdqXiQFcS1LgFU",
  "key21": "3KhCD7BhYr4aig1rnVFZCASWWRLS7W557SkVMw9yMEg3czLVYqdYgvMdaFvSK7aFyUYFnYVgN4sowgDZcxiCskmd",
  "key22": "3ZqbeMXEpPV7KkWxJL1Ux9kofLohcANu7eRaWdHuY25JhoDUJzE1ym8aDA6AfGgYFJShsGagmUzhm64i3tGGMUae",
  "key23": "2YUFPXzQMWSkgabcFGfMxSGCuy4n6iTMaYH1UMxKQ3Rz5H821soZKc8N2cAe41RRqjVtLQK3VAoRrBwMCFAug6nb",
  "key24": "4n3KWKG3d1inTTuacCphNnRRWSnSVbwk3w4C1kMXiURkEhC69SiLudDPLsM8zYQyy253wdNFykBer3FgiDtTBZ41",
  "key25": "25459BUZTnkz13P887AvTJcbj5YAWzANFGQBo1T4wynmC4QqaJ7N7osMoqVRuwmb7uyUokwAHKgvcgfCsoAs2LYj",
  "key26": "2pQjE9NUCdvzhdENrUgN7mtVknimDscSj9EJ4LjGL8WnDx94o2biedi83hx728CXHZLQqcEuZre1gcn7X7SPQ1kx",
  "key27": "4GfYLMzF756QWR2FHA4AWsMydLN73Cz4LJzUatgH9bmyHzgnJqW5fvkXZmhDFK2u86EkxsqM1fSYsBwFtub5by5A",
  "key28": "4PYRAYDqXKGNfJHqq2dpm8nRU6kuHjz2gYFScNwPiQpPmfiJTHZAqQRED6w5aGBELBohYiUqurjgbZR8HqmfivNN",
  "key29": "2PoTJBSccquavMjkbGBETgwSxJehQPBa99rDdcBGK1197Ksd9RUARuCNfGmYrHsJ7aNsChiXpoEqFqSuWeiQzDdM",
  "key30": "Gt6ru7FfMikeotjdy5SguWi5STnK1dUuEYC4DiTVKeHx8Db96rvgm3eRo4dcDNePfusbi8KtQCprxbzDVftKEcb",
  "key31": "4Kes2cSnyWETZAznZdCCyVG1D5ndcWxT5fwzbwWtdkYirpHUCNEAcSaih5d61LSsoKCTN2XWBqVmX6yieiFWc9dp",
  "key32": "2VPBM7a377PLFYB9nXNV9PrEaua3MNGnEst6iKe5pyUFsrp8tNK9QXwHG7JZaFKXi5E1QUXiHVgH1stve4trk9wn",
  "key33": "62ofb5V7rkbq4KsheVAmgPztnsm5DQQRvwUTvwXPfZ52iXvAfPGdncPeDUSvBucR916LAwDzSNdcpMyyFnxur24y",
  "key34": "5jrTCfPE7HE7xmJZoZeNe75eyevr9mjGT3v41fxHxoJPJfGySKHJG62dv6G3v4TQF64XZyDkDThbpxRzPCDAb7s",
  "key35": "63b1vWekvn88HNsTJwwL7gPPTmPuD8cxkzs4Dgz6kaAvsHa6876BCfqYzNMThpC8C3W8eBm63gBbCzRs281Z4bpp",
  "key36": "26Pq8cxkdKUfgBDMUdsMrc3TLgTa2SkyM853zVkRZdN1s69Wz2u5J9J1i56NH8fPZudME2fUGGmjxYTQenfXsZUb",
  "key37": "dVW3K3kxjUEf7yesJsDnK83roUHVVpVBaEFexfcxe2UsmM3g3irPFjQEGDknrgUHBTN53JdUT2GymDjKdSzvLtm",
  "key38": "ojZ5w3HfFHQEieRt5fC6MjCxgQQ9ZtmjCDqi6mCEAEx5WsX8rgJoDCAiWCEaxZDgC1oyDg8HRtPL5ckfgUJ3dSE",
  "key39": "4cAm5NZLbBHjoohnJdErXuWoxJ3mujU7WfkpNV7hNKjts6n26mc9pNryWdy3bJXeAtZzeSLQYKBSFPEcTJdV35T5",
  "key40": "3thtVkSXseSnjakaH94tqZ7NgNk7W3YxJBXMcB2spPWJJvpSsLV6Zvcoh73d6FMspXcwRCMbgcuucZK5QKPW315Z",
  "key41": "3AdgC9gZKUMsVXVqCVZYgewwVrJLhLHfXrxG7wcr5xFXPiUiwX9r9z7hDQNvdis5aBn8889XV5GzTPx3jYxCBP6T",
  "key42": "5nP47ZReP7jbHXPuixjH1bnCTERKfzD9rRvpqNy9FQDAsWeYwHCKrktUZYp546Nvv86RKDEm7kKQarA6ndDCbar",
  "key43": "wBZU6XCe5ToCBAbzYKcgvCdTLXm5SYc3R2NbnBSPniza5ZbZpYrGG4qBR45Pa9wdcgZJbN2FxSPLUx61sRwCsiF",
  "key44": "61keCAs8hqgeeUR2E6hjcq2v92rVhByRemCfJKZpsaG222G5zV8FF63USJYWoyVrdRiqYX9T9WFMRn4iaDiFoTb5",
  "key45": "4FHw3b12CDPKPikk1wmUkyqxnBMe4xmogixxb2C1AmLueJpda8Xs6zLA76UaQiJHhKjPioKCNwWt17eLkz6FJF5d",
  "key46": "HTWNydu6fdm7kAivuxHEivMyJfjdgzE5Ngyy6UfqU8iMmLabTmqECGot2AyjXYFn2JWy2stXyb1inNB6B9F9ia9",
  "key47": "4wVE6LzaK9mFf9MbYGEmYasQmtRpW1vzyvTXVbCeMBSzVHCLuz93ZqQXN1iGw6VNh7qrzUn5cSNhDojCqRSsAtXw",
  "key48": "4zY65yYyG9FTQ9hRxt2biUmKcc4fEJeagMQMLpXmkWECiQnFRDcMr9g4axH4zbXfa9xw7u1JiXdJkMXjGxyxbkoJ",
  "key49": "41HMkN285m1zB4sNdLHV4zxe4kUCj3EP8oGQznqBHfv34Uf8PEngWzsPMm615K7Y69YCHshYqXEnb5KSwQE2hNY2"
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
