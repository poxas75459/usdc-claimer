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
    "24MQxAgNh8fvaRiTMEET7XvaNjBHWE4ivgZAbW3JUbkziU43FikiH52S4HJVzJQ5QMyNV9BgZU2gwRYbwvEAnpoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgSwY8Pgz1RfT9QQiFq7YpyfVUYfPFwFTmUaa11uFScFTC2FSsAz6yYTiPittRn3Jgo7t18bKUbBWW7Fbsuj8Fb",
  "key1": "5p6tKMFrFBiadauSz8VPobw9BfXGrbus3nhSHRF7o4Q7aY1kvxjVj6rJGjkkup7UQCgj8WTdfMQsabZakzJCogUy",
  "key2": "3qnMq4dCrE6WMw8S5BtNUSucagfkKCRtGbj9EnWXMBL4QXCqPjytZv1o5Q9oHkuexN2Yu6Th6Ljsp2ysbNAXssSR",
  "key3": "56M6VyF9wyzQ5hhgVveT73eHa1VyWwJwjeyz5hg3yHgLLyEQrSfdqzJ4d7y4cTmN895TFidjQp9EsoQzcxDW1Uwq",
  "key4": "23NH8XbNqK2DRTBZiLJQoAS6jb81xpTJ7oLjXGjYgB1oGcLh2wVneqQzS7R7LaaPf9Hwuno4r7GvEnLa9s6wRUwZ",
  "key5": "53VXAM8YpAQAoRVAcj57TYZQqppBKSGUx6ZtSDzTXgEEX2MCVFJjGe67EkDe3gmuybLC5GkTvjWUrSKAMjnff2AN",
  "key6": "4RzmLBzT3taeJWaaa5qVx7o4oaWhZMgE6CnATVFnSJ9HJM5aNSXsXETYRNFVAght51sW1RvXhJnGYNbTUDXnRw5r",
  "key7": "3c2Ym5wwrSRZytp7NU7U7mUAXSbFq8mKJiJLqgjjSpLS1fdDjZCnr8f6btKa2PkSLMCf2ewNgYK93jQTCWCTtj3Y",
  "key8": "3xwunPcBTUKFbZR4C8FSW96SuDXTVbcPidm9y7rgGTpaoY33i3UkAs2W6EDPqiNZjiCK2J7tHxsJVkGppJJJiJ7U",
  "key9": "45wJHhDY3neetBJoHX9ufrBxHQ7ypdcaDu6g2mZufpvFceYZf7f1RWjzqbLEuHbot2E94xxckBLLtUWgxrFFSQkP",
  "key10": "5RFKSVR1uLcHYGssKbJWa5NA74y9nqbj8cH3oZLqWzs9mHam2k4tUrPKotVusvxyZZyqVRZDQdxoueR1456fEJhQ",
  "key11": "7SJVSA1QHVyZV1SaSp5nY9tVEgUDndvSMfEYuiAujAW64g61hgHa6VFiKaGfHo8ibgd11L5f2mCQUShMB3wgEC9",
  "key12": "4o2VkGV8188XZt3WAv9j5YdWuuVXxttqkUgzwjVfo4Je9cjjmCjNP3U85GnfsMCpMYVhDW4xHTEW1y8kfpTxmyrQ",
  "key13": "3fabdi3xVb89W9pkeH7HczoATkvtWUSkvgF3CyaRcomVJsRCmcGx5QgwqHgguCVhBF9JuVnX5tX53pEpky3wioVH",
  "key14": "4DEo5XrkCTyq2oZmb6zCHmUnYhWDjRvoeGLDmM6fVcw9KQNvrM9orw54DPtQWzGd8NhcQME6oVe4NG1uvi2vpsFr",
  "key15": "BweRmXd8ZaSoDxbUsrAM1JDZ6Sgh3YiH1gYoqhZxoMd2CE6R1VwkKTtH6z3cDbUU5TrE3rH89TaKpihVhEeCdCx",
  "key16": "5PSRrrYbnHmv8J2g1T9P9zmU6y1enb3iMZcAvEWmNthJTWkxggkWg36LFdHtjE4MSbbnLraM5S1oXwjJ4sfiTST",
  "key17": "3L5ehB2no3jRZL3ruh3UaP4Lg7vdvKzwzM2G9nKjXx6EX9qrQaYSD6pZyMEKhwYLG5dZtRcyz84sYWdvkm8vrcjM",
  "key18": "2ZBPjaKS5qjd6BkcVxt34Gn5yVKmLfS9PFMrpMUEMmszGsx832y9d4NELFx8RaRAgUR3NbXseWS3aB5cfgYQ2vTm",
  "key19": "4FTx3uKH5aDxxk45MDnh4cQuPRfkKn7UXzYceiWZeVJQ4RsS5o2qBqakSNPUiDHgj6JhgcYCMGWJScY8QzE4qUmc",
  "key20": "5viDMPZGaRBT2GcZgZ9KTAkvRv5HPfmkpany5aTrva36Cha9Ga1KnXB5CLaeikyjXfuYpdM9yU6BkYrjqKBM9udi",
  "key21": "4SpVsUDHmVuQJLwaTCcGtXhpJh2GXBnDTcJbvHWAKcFzgJrJtDBvfyL89iPucRRqDNJA1vXKMpxEFwdbPByCRddW",
  "key22": "2uaYXJc4ok6U1T52A83bRseh18nRvCxLrRokgtdPZU73CRBX3L8ASZrryJFuV8XAjFBhGAYvpxQNbW8ZvHc9GdJg",
  "key23": "2ppejCH7RoEUx8qf9He183mRP3ZJwk9sPzQHYTRuigtbunrK8yij5LR9queKEjYr2JvtvEUcSKfFXG4H581TTNaQ",
  "key24": "5u8NyJcoMj3cKa9JNKCrdij5LuaWPAXtfqdQomervBr5FHvmjeRF5UvphoLB5JnVGBYFVmCBYDeVpshqQxuCfJ7k",
  "key25": "5kgDtVc14vmpz68QynZWmm97yh6LA4nLhZcbFJadqfizK89qkKmMpXXX6uEBwDwvVg4PhaZipjyF3CtaGxtyWgAH",
  "key26": "3Gp6uRLySRybM9eRJsAC951y8675BASv8mQ3SniUxjNkgmUbAF2jcoN7bnqy11nsLUBjRYJcQiUeiWctffLkAaLB",
  "key27": "4dNKNwxFULJF3Uimh7tsHzYojYRN8rAruadg9RuDcP1dwrwyu2xxxQmdeuBmYs2XftsEYP88mG1SY3yxsJK2MHHq",
  "key28": "23crCM2UvvSvCpNXenCkFC3MHBVnN3h776uLXjte1ra37rL28KFfGzCkaLphs5js1ks8VzZGFkCVuWQybmHEikK9",
  "key29": "5rpiiAYRLp63ARCdjyTw4KSPCAXzWeSveEUrLDHLtm5ZbSyMYUsBFw1oFdpH5m9gVtRYvx6sEpamVGKY79MByEgP",
  "key30": "5J7hSfXcti8J91yauyreJFcQTnrdTmMpViChHGScmdydKLfczBxcs4xcKTRxVgvEi3bQzRyxjyvEjXVfHjX185xe",
  "key31": "2Yq2RxVGgtMMEZcTafSNESo7Q9Q6xVMSa8JLTkpcgkrje64KG8wFPzEELvzdhcdan6XWe5K64tmmUkSXZhvCAY1c",
  "key32": "5UvyUvCJHo89PNZDkDB2AHHyYv3JtzHcShPMchLfckgYhy5iLQEgBKiSDwZsrcSjsy6PMkNCoNdgUGzzNs84mn35",
  "key33": "5pvH5jp7WMXTELvMDSuoxnJFgxK5ngMXo5WHR9HQ33rN7qiqVwktf4dQutGYMLsdSeS5kRwezgUuQXk2cf35wXtr",
  "key34": "fcSa8mJRS4HDf2GWLkhyU11W6Ufy1vj5ndhQ2h6QyApgiBcCGT9QFdWj3YiY4uqT1z4JYLgc78Cc8j1aXgKpmZm",
  "key35": "4k7SVMqFBfwt11jj9Hcgx11xVx31A8oj8iGrxMGBG9omvQPWug2kc7wiHvbSdxiDWYJdV1oR6ZgkwAsoPHdKZ6mZ",
  "key36": "51vkjSUrbHFxvTqPjQJCHrMKnZVoQwe2wvCmw8YgkFEU87E6e7rtwMe735Wp2MFZ9cP3cXctQ5YLwpcdvtpgBgcC",
  "key37": "psrVJd5Krj7THMRn7LuaMUPCV9PXKt6JdzH4ZzdJWqZ6m5VfQPUsxBYdV8NZQ8RWG8FG1mPjYADQh3SA1pDVECj",
  "key38": "2MckbnkS6mNBe7xTNhY2LU9U5Sr8bnSeJpMktREE2KLe4CVcmxj9JdfQfjePKXoaprLkEsHraUCZ8wx3xniqvtAH",
  "key39": "3hXrierf827bh4oZQ8kNrz7engUHim7FwGdm3uSfxLbh7Q4DoQG4unqQ6AAqjLGxavAbiyT8VvewCfHfLXyUGixu",
  "key40": "44iiZRKGg7paAsSvpHBZNJubpPCMi8W6T5Hf9T71CvLsi6KrxRXeSCpoeFeQyRuQtsvYGZADXqS2KYFBQDpuMFEM",
  "key41": "2DJxFxXvqCVqvbYv4PH1vYtLpupDBtbe9QUoAoT7wZ3xcWeDfj2PxKzb5TpuPpiwKB4GuU6Hnh2A23usUwCrL6c2",
  "key42": "3KiJ7PqeAJ6L8BMS4DbLbcLw2qKnMZiMQzdho4zPMA5Cbf8oodmWzTAMshMGoYgZ9NfJJn3W2bMbmRPFiGmDHqGM",
  "key43": "5sGgLeJydiPy19oyGxwa6RckhBMEVF2stUcFr4Gx56zzs3zDd2vdtWGs2xwkCQomVQHya9qhhooqFv6PyjBD6SSB",
  "key44": "44is5PWSk2KQ4Wurio2HYEjEj7XWEFbxpo912G3KkAYTEVkhTSYd6WYjFA5vmVMWa5BiTYAjmXpL3RaEDRgPWME8"
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
