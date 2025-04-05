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
    "4kTCEHAWpt5BzA2Bs8HTWbXBiMkrb6kZDvcvyX1kBmhEMUiLHVmzizFdJmrjNy5C1hMV46tJ2kh2Ah9VusN5Rpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44dxGvFNJnbyXA9NLrLTLYNAf6weiULbvEubfr4cYxMKUmXygoUiuzNsH4msZmSwNdePAYr7dUi4S7uBPukJrsXo",
  "key1": "5eyG84rxim8BWGKpU48mtfiCJo3WSsdkSeReTMrYKvr2fBCBoL8LtbA9e2BuAVVAZaZqSgP5Uo8DmDVz1b4mzg66",
  "key2": "57hw6sogfhqLhdvMHePeFroDjbdWeprpQzgx47rtbSuarRTJ1HJPHz9EqRKVzdC9k5RN76ocXPwubheqAMmSEGUC",
  "key3": "4QxAUe1k9jYFDz8CmayQzpMqvCziuxUbpNU92Q7zsd7Gs9Eshnw8h2SMcEFmXEDMrAmvGR93QbWgWrJCtqmwyS5a",
  "key4": "5QerYLfkfDn7o7AYtQVbCgApJBEpHZeThZSh1BBz8F1MGgoJrJiCmNcQZYy4a6nR3YiHGBYs5ErM3w5dTTeBXCEi",
  "key5": "4roPg2Px1meiHuCiG8Fxvnh1WXb19WShKsVfswAJy59Gri67ohBethRx3QnEnN5vu6VuLQhkCskKJ2FfabmuNhpv",
  "key6": "rsPb7EHq91q2Yo6vpocucRoBEiFwpwtUbkemxpybU346VwFfEFE3XctwhwcrTd4LsDihXHyYCQbnnGTwKUjcGZw",
  "key7": "47aHvjEVNb26wN3agPz6q8BHxU4tBWVovF4BLMRF1QSSTdAYh1Cr2REkNt63qSCM51gcLPXUP7nF6552MQXPzaC9",
  "key8": "2AyZp7AAfvn4zvundUsrKq4yCfg3qxJVhttmmQCJNi5x15TowukHGZXQgyEBVjhTn9MnCPcPPbfk1vASSmMKMZhV",
  "key9": "2Xt5xeoWyy4pTuiiDnSbCVvFfxBM7hZZXNy8MZXBaHzEd1B7bQxHUWef9CFi9W9PzH3E7a2erXcbeibaA6Ghs16N",
  "key10": "2bNAGumdJq6PzArPpR34p3V7ZdUzJZqen64viYK5gLpanDcfmg6eBPMdtgYVrni9tm3Frw7UoVihMdNk2N8yoPH5",
  "key11": "ny1N9wJxSrhBaHCf27fsureArpofHxvVkVEAhk8tWwfY1py9Wg7R1qbspML4SVGz58G8N3ejAZBvMRDTPD2G5Fi",
  "key12": "473jVvkqVRedt2XMTddLtbbbb7sAv2xcmoud8N1QX5gejNQ6HcrMC11uxZxKLZi4VbudSkPFT5A5ZzGSJ1aULTKo",
  "key13": "4q64yZm7rkJZQXpdkaE91aWe5hs6FmLgeQZL9szopZ1sFHBLRCvTs9NG43N98TNKtGoXXHz1TcJNpUcYv8kQ6EiY",
  "key14": "3eoqPwuTJNNwE5oMU7kKVq1HPiRHYRjvywWzbmZAdnz62XugwwuXvhog8XkUKWSdAhV9y67bP6MtNoB3J4S7qQj8",
  "key15": "5yFjyF7aP7fWTqQoyiroVwgEitUty8bkxZyaYzAqu3QcmsKFcyhmCf3dLTtFf9WCc7hBBZAU1mUjj14DYQj4ReeC",
  "key16": "oCgwfskpxMcDK25z6kiaggCwhTTpRCvebuUnzzkwn9NFaW4PUDb6Bq7mduYWEPvwW2ZvESDaisWG6Afd8BkrkLk",
  "key17": "F9j4L1xi8s7rPXkscKYC2xz7BocZ62GMampj3A5QVYKJ2oU2LsdefvwJ78rk4jTzbdSdm6Xz6CetGCQRyPfzKSt",
  "key18": "58wxumtfYKoEVu3Dep9vUeSBkxw8eesAfd8E3Ra6Z1ebiqYAe6rsiM5E5gtHjyiBPBEYGBxeAQqhrcA2mdeK3Mw4",
  "key19": "5H4n4xyGYQ3DcbmmMJFYG1FrjwsE2vVXkdBZTMqJnfSTR7kkYPq4qGbLCU5Agi5Zbs4EdokW8PMvR6YZrEcyt5cX",
  "key20": "2DsR7P8HSLHrkCVtye3b9kVmkbhV1733z7ca4eKmBKuGbogCd6RVh25f2dBGpsY6ow8g9t1sJmooHKc27B9wsQbT",
  "key21": "5ruatTAUdftzYwMarekGDqxk8G9wTmr8NFtc3fG2uHhT6MLXx5w3BwmzFCANX8v2vWwcx2PhKP7WCQpH44HjjCmG",
  "key22": "wAtm4NxT3t95SKTNFqLQ4MkLypPB4amEa61EGDxLgtATXKfsvM8RYhuVtxvUQ3U7hdKEUHzcrh9y9kKKMxjNL16",
  "key23": "526znPrrDSoS2aT2PRXXesucFsmHesxM8EKVLiKmDHFVZYuc44DTLBSPxkkcDdBVv2YHhDcH5GdpcaGaAU5D8ce5",
  "key24": "63KYxFPrn2Tozvvrs3enEj33vQEq2yLQ9t3RNMS2g78cCUYFEQGDpZAf4DywzJKsGPeqZLQ5HiZ3ymh7hrMRuX5",
  "key25": "4A9HZdrFSYrx3XKs2V15K5oVmpE53qRLoTqzaMF8PhjjeBTjESN3bRwHEx1pwf3nKPywfDb7VGytAWX8Xq5J1boA",
  "key26": "5xbVduFTKXjTL6xeT4Lkpf8rsPWJyVB1ecnLEPLJPL24aQDz2qznbjpFPMyYCoPRKezjiSXHX8vXssK2N2vg7BwJ",
  "key27": "58DyRiyp7um9Qg268Xwtn46QRX96PnCuC7yKSgvC2m2h13dijM8W4fBiMavBsVCdnvzuXWT4aPJu5J2jU4ma5UES",
  "key28": "4DNTEdtQopk5bKG7EqPa5j4cVhwQ4FFQKoKfNMJYQbNUoMUC3681zXrFyHC9PkdbowdLktsf5EDrZBFpAkAhYGZv",
  "key29": "G1jCWpGTpXB4GBevWzZ4oJkGnJVmTZ2W8hdhxgxTvSdQKxjydHLNA5VbB2cFgDpx8wAfWWryQVg7REqaCrDjh9H",
  "key30": "4k2J8Py8psscXZARLdu2V11GjUjt9QZBfoprtUNFgHNndpWxMp1anaDZfGmLWDQpyKs3B2o1SpVpNj85YXeUU4z",
  "key31": "2navCGRWeq3x1eGHKCQJ8yUJsBbbgdCDDXnFVZJ9E4ugVhmNeakDCqPvF2hBhNPobQuxMrBD4DMZfFHWEZsdwJUD",
  "key32": "2EUrsYqQrpUqADiWufHKtJxbtgniz7JKYcmwUom2zaJbbwqdi92N4Gd8EsVo3wte6jeYja64iUDn1JWmoY8simsM",
  "key33": "2UN1E9B2Yy8VTh7JB59ksEdH5HCXbkjZ32t77fBrzEbpDryLGB1g7xeMKr3TpfiaG2CpwckEVmcvK9q9DFnNtTUa",
  "key34": "4bv83gFXPrP2YRa6k3u7m8TJX5VKWuNxiqnYr1YB785WsPC4uL3skyCkDcjyJ4zgp3zrZVhteS3Jp2zn5akbepnc",
  "key35": "5xtSHAbXedGzBLZmQzeKSdxWLGLk6R64XnmQxnTK4yWYKdVMhSrdQjKAGL6wGfs6CQkp8SbG47qAkxDeN9f2hpjf",
  "key36": "3qzhWjDAYKcUpcZVMLrcwnF396m8jfFQQTriY1VuescT1ynBvSiqrvS4ugKNmcoEK6UzYdSU2wiVvA3NU4RPFMAD",
  "key37": "57UwhZPTMJNuaAAxh4ATxyDCRFfCUzZGDni2FUwDia9msrSnsqc3XD9JrkVYcivqj4LFXB9YB5o4HaGCKvBknaXi",
  "key38": "NxSXFSk1c8cDZd4rCxxhFnrLxkqUZSMSYwFcusJjh9pBGFu29s7eZJ95Zj1111pkv9ucV7AbuU4SQyHgwhZqgNb",
  "key39": "5bQ543cwShyruWKoz2fjne7spGLtX8YnQ9J1YcJgKfJaMWe1Lku9CVRP4bKCjuS5eXuBLkUA2JBc8hogPQW3xxSc",
  "key40": "3ebtWrHnD1qvbCtRaYecaiPeQpkmrdDnpRRPp5U5Njz5WgdJRbtxou6JoUSxSVWAP4YAJf4xmgUEfayy2RLAfF9K",
  "key41": "2WbtSfr2MrUwQDepHbhdyZgSpkVQGF5Z7878vNPPPFSSKCb6mTJwTUqM3Bo27G18jnCCcBZMau1viMvneQh6H83w"
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
