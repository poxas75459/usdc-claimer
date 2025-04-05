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
    "4CFNiuQoERR3t4AVzGYc4tMExfVxsyYkBRtbK2pazzUhh1K6pFkL8jQTsrBzeWr9XqBHL9jpiERErd9AcQUQJQw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "72pZr5Gfw1P41LnM8y7PJ7LGqUK2XisY57H94byDYZbVAju4oLneeYcDs7YbUEPWRShGSy93ia5UjwkLCnYWrWg",
  "key1": "4SQvj2WbFd4bdNogBUxkTAawqT735RE1CPjH9aEQTBFrYyDkp4CG7LtBH43TpRhE66rp8DNhfHr3tJDL1JUddqjP",
  "key2": "56ehd2nLDdrgJuPmSXrXhbD91ud4mG3gaHLE7no5AAqbv8YL5asWAPygdhTUE5YQioQbt4fw11TwxQmqtQvpziJb",
  "key3": "4B4vuuqVkfxrk4SVMQiNyhcWW6No7Myru5oEwL6ANyojBAt7mP8tz4hg9y6UhK9L96baUTMWmaws6c1ELRChcfpJ",
  "key4": "4UGSMKay6HBbPqwFZWMianTGzSc8Dnpt37rdoHx6y8PpzG4XdHef3FwFeYP6YnW4hVfxd26hveFvYq5Hzv7whrpa",
  "key5": "27UgSTiFShrTwh7e6LQgs1gTxktuYk13hEJV1WXJupA5CY2zsFM5XmtYEru4zMD7NemLLWLqyNjSivE9AqX8FeEc",
  "key6": "2szCA4iHAmB6VM16buXVeEJTFf9RWy62iUNe59vcgwCa3bR5JbtMfr7tSKdaAV445xGbkUpGiKwVbuTVtT7vaZes",
  "key7": "2d3HX33FqGzHmtS6B9bpDhKQL4WrtKVGxGTE7TX7EiAjGcjNkicFNLHg6eTwV2uy8yLDwJKw87Kz4R1kcpVruEZq",
  "key8": "3iRxUGEFdCkdcswmTmNWpHoMDbdYZuNykVv97T1sDmVnEKE4JoaGysNmS1JD51sdXeuZfzmuDcsjAHwk7Jwjy6PQ",
  "key9": "BHgueHS6wiXGB27XNZG2cQYf4bkH2uSdVwA4ERSWCu8ms4npNj5ooXkMnL5sbH6R4C2Ca3KszvKErHutpdHEJZa",
  "key10": "22yZTPKm2TUjg3pKFEuXREKbsVACp5gCuKju6Mzq7Xzf1HL4rHSDxFWD4SoLFjtg41XhCYLKjVwoMQEbnKhZeVjR",
  "key11": "2D9YawtM57ZtW4ZY4DPU86NoPmtZbnScbgi5n3tMp91qZ97yg5K7fbPiS3eCii1KBwmw8y42ci8nS7W5AYic8mXU",
  "key12": "5rZoCw52SKiehqJZEYi7w16HUispFPEH1GJg8eugqv76aEMURqKN819AogkmnZHN9uja5Nyx6cLcJEcDmZtYTbpN",
  "key13": "66CmXDB56UbLTQ8hknWP1c3QXw7kznBuzGeLt1V6R3oXYJQdgFiwMa3uHAXtxjX5JeiNzWGiszXa9KgWYn1Hx8QP",
  "key14": "C5mmCz4o22daxyFtAhfKtF5iw5K312hsQQQE5TiMgLTnvwYBpwoaP6x2eBBxZe24gs1hxsdAEuw7aT7tZGeDNXi",
  "key15": "4AsvWHTo6yfgbwbSmirn8wJGAf6QgrYyqDmAXVZtei6cPou8PPsGMC6RHi3KoJYDuQUeqkDs2EoYgrNWptuTr7Y2",
  "key16": "NL5mGPSLEBVaiGhmAQym3h3A9XozhguazZz346bcXPQ5bEYG8jSwT1mUo9XsRogxMf8hHfVKdhG7z2Ur1yGgcMs",
  "key17": "5ZCyekg8g2JnrngWMKCCzvdk83jbHPmbUkrxZJDytqzJesEvJuqBpZUszML97dJwmk6DL8BUHcAgsDoC1Ncs8Ypu",
  "key18": "4r4QZ5DU5ETG8yxPD55v6xnKk73RgEL4nZLL3Xmi665omwCuo3jprRzGQ3yVzm4Wmcz478dxHEPFjXStAUGMXqE5",
  "key19": "2R69Eb1pWC6r97odQf8emWpEEpGVEhAXAtAF9p4L5WHDqF3CigiQjKSX41JxRjgiVpuA5Ro6rniZHDLHDiwPCcbb",
  "key20": "24JGMT29ixK2PLB6G6kyPMia7TedA5jKH9T5xPwRggp6nqvEkM2EopfT9xKKM2rFJh6tiNBXSBATBidc9k7D2ATh",
  "key21": "2AbZxgFNDcYRdwj2uwZ2Z9huoh9j5Rp3GP1a5ok3vKvQboY3aDdmHqXB3R5dn5j1r4FEZeAHiUWZZrhmgBHaQz1V",
  "key22": "26GrZSFmSNjYpobkrLuqshLi2bNt42zXRrCCE4FXLJMFWZT6JLi5GjFxUKXqSVDCSqLwTa4saLR7RHC6RjCaWLdP",
  "key23": "2RagKbnnGzb7zNC4NQV1EETKLUrETYkL1pCgrbAxhpTPxZZEUg9Faqtq9K8DtQepH1Zgb6LohaxPcra3GdxfmApd",
  "key24": "5ciyKMLVKvPztmMPHW8V3D7iSahQLhiEVANQMSy4a9dDCENR7AQ6B3PyF2WeX2mZbm1SFXTiqox98CRJr47nAY4",
  "key25": "PkTcrtksSznBjTVjF4tGKZhUb2Tn2KUdvqvazE5oKgrHTgMDCQot8nndb6ywSgZ1Fqjfcz4bzNAer7yBw1GGrZ7",
  "key26": "3rWvSHNrKSNFtCpYZgvd6UgvG9XZ7kHwinP3XyrJgUyjRpjwp1YiueTDamZQ6xD1RVLftTXaHv59T1r5vkd1briM",
  "key27": "2KDCTNyr8eb7UA23YSCQVud3yud9g9WPyiJkytbFpftE4Lh2Pba6vVi7Q9vgBscbKQjH2JKezcJfioFnwbmjQGvP",
  "key28": "xxDNi75ZvdusE2yFeeRYxdu1nMDLnzkoYVcgYSWadz63nrSbYusoVNf4S9L6FHpoN1wJXRiUawZfnNCLNsAF92p",
  "key29": "2N16CiFWWLtZt1DZCh4QvB4XhuTKEwN7gYT8PKyHmaaow7zEGSMsgiDT5Uso7ESiwp6NyuncqH5C7fXrv81WxoHi",
  "key30": "2KrNheGkdzTPj6pBARotSwJWi9UC88UF9EiiCZzxaiRu7hHVtEbQmNr3SmeShzCbm1vuVVbDb8CaNWxQGEaQ1JJd",
  "key31": "3Y47UG13PjAyDwWvhcQzhLN8YhdUQEMbMu2bpNaWJQHBUb7p8JZrLeMm2Q6Yk3VtPcSSbmcugiXjkEUnAyXHAZNs",
  "key32": "sjCBwnTYXDeb1FYLzWwudWCbknUZ7bd4qNMtFTRRbeWnKgxyeYnGf7889rUmMZFLHWzK9uwPVTGwRvBouMVffwf",
  "key33": "3hHgL3JhMwaEdALHnHyoMBgt3E7rays978kkpTCR6PHhuXQnd823h5kLW3MVNVoP3zsHsweuetM916m6FqJctiW7",
  "key34": "4esJhTUv2KDmh9C49qYD9yF5KY5uXgi5fHMGARoXGKDa9e9VFAoutarqekN8rQuikheYH278JMmmTmAPokBUePHk",
  "key35": "5sRe7yY2EF3ZaB7zBm7tQdhYC39GTro3BRJ4gaCrtu6DiWkG8FTHyH8nhMR6Gpm2METd7Djf8dfENBcQnqK7JjS",
  "key36": "F6pUJJZQrpbhvk8nfXycVyy2VNYWiXmA7HUJdh5Hf3HVWyodtM5bPTF46ZbmxKTVjjEgxTTNafBss8YZcMaGBm5",
  "key37": "4ufgGCwriZrUhMxMCBdifYVg4U3jWSBJnV3dZZttWGy2gAraBpSruv237dnmCnaPBYr5hc6ioadaCbXBqDg3Cvqa",
  "key38": "4RcbVUc2cSVYTwYK9vj9sLc6EYCCqUCbuNk33K7hwSp4bf2ZXWCLp9kmm3vYenJS4HcKZL72B6Rr3gYbf78z2bsK",
  "key39": "3B1VmL4jPnr3kxdcpZrc14GBieqh9kW4H9QbDugC4b6bWPFfHoraxv7MTMdtsCYkBYgjBKe6NEPqcsg9NqQE8Rrs",
  "key40": "NKDfcop35u7oYfG3iWAu5HXQfGKBf8FifUYJXvNV8yJoLc6LjP46dwYS1mtVTSzDv66D7vqTxgz5mVXdJJFAkiK",
  "key41": "2GKNH6DBomFo1TKTBGPJz6wdKP4RxjNGFK7C75nUy8KYioEA6BWpTyr4U5vjzChDhq34x8srvSUBgrsAwea1ztf3",
  "key42": "5XmwHSEDDxWNRGFy6Xwc5CEyW4cvYGEXoVWh83JHqtiuGCBfQSW4uq9GAMp5Wtwx4t3xcGYoDdHeNs36qW9A7VpG",
  "key43": "1XUggH3TDdQdLJTovUHX33Ux1VhQBPxzKSCtsgJdG5JKpipDzW5cvaguSRhCAy6rzQuHTnHhXsTBL8AkVkFLDBj",
  "key44": "4XrcdPoPvQjUYgNT1yamjDN5dhzSBG1qxjqbw3cuBQt4oAr5oSFWzkizRosKTQHbWspGxcy8f9DSZfBgQ5SrR3ZM",
  "key45": "4P8A9TTPvxQJnui8D2r7vvzPiKmZ6PAN2LEizJdnUt98sGFJQNVVXmgZ74xCn1pY6TCSyGJxvqyt99SMBFtv8tw4",
  "key46": "U3tAmYVm8kZhCQkiKuYL3yvexUzv2WD7jt9k7s9dzgKvKh51XK6YaUo4bvNPg3recppzsGqzQudLTtB1jvMEnM4",
  "key47": "6onDD2SnzMXSee87UB61rj3uqJBzrPCWu2LK3vRKqzrPGoD4knpWnw1XXnjeeykYQPyxs7sXsNqeeZTFBYNYiof"
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
