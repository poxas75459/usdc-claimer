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
    "XHmPKfy4SiSL1B9dPR2bJR11RRc5TbEP6mRX3xke5gGEKwQEXEgcHbqED2QvDoiaFwrRBWsvkwErwrE2GE64tiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmmuPXSEHjbHrWjkTsRrq5nsJX5rTa6J2sQwHLBaVpip6EghdA1R9YTVVFWBvwd9RBMLHYQYuVCd6HVg6isSiAt",
  "key1": "HaEkJ7JWmBNXYubbVrQWgnT3jFnh23SHWVpLsv9UjQrbRLqFcAdyGaBvV35Qa95LvHuhqjztkyF1SgCTn6Es3Bk",
  "key2": "3hNMeUHyE8na9kuuCiLjgs2vRi7ZnxBZQjoLUMsL7iHoMjD3S7S6aJLqwx67rQ8mn4Uh9mLVsQ8MNEkX1cPN9aeS",
  "key3": "4DqnL8qzCsK9TdC93WmwqPRvTfrKoXM74df2asCFdwA9vnut7xaZFDAHxUjMe9dDaat5oGfzinskYHrvWBDFqTeX",
  "key4": "3GwRudknNQoE2tzT8GGmRngFZ9PPTGvNXzdgWJzmgGwDAHchcztmghUwSgRvAGRdX1sJRxxFPMfCNbHkf7SAvP9k",
  "key5": "2tBcDx1umsx8G53hmBLSKXZ12xj5f1GCVieVxDnKBLYWbwmUrH3iHnH7jmL5fBWXMMycEF6EkbopoUCMBejjufKM",
  "key6": "21aPHwweUq73pajAd2tGoN7FjUuSWNL7tUo1MEQQqUbHNXhdqpELMjN9N8rAoK83W2KkBXW6uhzrcQdh8jnHSwfA",
  "key7": "gzuzVWH67xors7or12vNNiv6G8dsG7mdpUzNpE14xzvbW1mKW5fvtLXouWD91PwsXWjsa93t1AcVXRk6yKdD39M",
  "key8": "5FMpH681dJBeW9dfDAdzChu9PP9SwetpgKszwtE6X4m9JvkgpkqF1KK79QtGBMbVf4TXhSnwpsQysEUvDy5Cd8jf",
  "key9": "3vHq2HoTpRCJJXhJPNUYX7XoxSVyi3NiZRNzXYN2e7U5CRrcPhwHfxG1xGu7KsbtDbgKQgqSh1AsSHtGWdmjCoe7",
  "key10": "5N1iNiQhyBfdhu3G461XYUJUVGxX79eCBFgTvLutP4szNvvFDvkRvPdpMJ93dDmHY6VitwU3U4BM41NEDV8F3NB4",
  "key11": "5mX1icuLT1rGm78UbWTJjVzZs8mdv7wtqAMYvYW6eWs85TLG42haRMhCqfyDY4JcdJQBfmvvSTqgpCnq5TaWsynY",
  "key12": "3N61NZD4C2ccFASDEYMAaMgXKU591eUkSH61XT69L31sAHiEnV3zCmW7jKBgCXdPrBLJodjEPrTTdF3ZfMN5NXyi",
  "key13": "HrNZJe32nVZgzwSFdmfEkgQzkWjDLfkJr4UPsxKBfQ5asi6jDo6KG1nWVYq19865buKHov1oNK4YxgZZ41dYWyb",
  "key14": "31ZbsHYcZPUNwQ4LD5ue7LXvmo5hn6D6wSZMdRKFrAmjaDogeGGz7ZbEnv5XsLvZcBVRUCn2X7HdiF78B7Ygwjxz",
  "key15": "3LKKmYjVNXyir9ux2jYuebyb6AmFCSNc2P4bDJShYbDepVfsN16bTYR4Z746EE2t7MSrhTa9BBz8ZHwxsSxFwcZF",
  "key16": "5yt1Z9JtSoNNURJzdxLoxeeSx5LzBsLRsx1oaCzaF7DVmnqkzUxb5QMnC6x1pDckEepWuKfnRf9BWKLPhgp9b15s",
  "key17": "4TLoRau8iyh53jb184s66jUeYn14ygSB7DDhYasmvGKHRWEvKELyrDGVpt8SBpLEsJAHqbQMe6CydPLGgDHuQv2s",
  "key18": "4yiSU5rLNKRuJ9fWBpSdZHGXAd7faUq6WKiMSkhJoszGv5BD1BGB8ndRLAqGmJdZntqqP5woZrKb4DVBvw2HxSQz",
  "key19": "3qaVsn8B8HQkytU6i82KnJSsXvgxNcEfL8vuokKMFZjRdCZeFmzLQV428ucdsrJAJAbUjbBMGy2XsH36qDyTY7AE",
  "key20": "2JJXVCCN8zzUy3sDvKKoyEhQkYzo9gyiASLhaRivedRe6qoMzUZxkmcLbAUTmpWzXLpipQGd4HjvmdV25wQd4icF",
  "key21": "5VuAA9JQV4aVSCHkTrD74xCSmYD8QX9F9xRapQtUb2RaaTEfjSe6PPDQdKaqNy19pdWZJ5FMLZ68Zg3gDwCX5yJq",
  "key22": "5RaiWzp2RYJD3eLA27fmSRU9HrNNgyPEnRMtqTDyaVSayTLDK9CKUW2jaBxSJE5XsLuwsu6AA7PYHzDFLSmmxz7z",
  "key23": "4hJc9BfzcWL42LpbEXSZFnzWSc1Hj7KE2mJQ5BNdGJ4pD52EYRUMECzyR46u8tbMmba1fXNtiWM9MZdi14VYTKBh",
  "key24": "3MkyEqzJeGm5wpUoPAfG1cUFFAphqTDBS7y9CCPx3xJX7KbKadhpqjDHHAiBbdyerLqn58fABcAsWuu413hKgXw9",
  "key25": "37zwABcsE9E2kxuhH9Zuk8Viz66URJTKnPSQLQUJRmCD6LZkPj2kP2BmSJJkWbmajt2zZY9pLLcs9Gt5EoHgcVEe",
  "key26": "855GUW92U8v4YjGCgAEzEQC8X2GuxRTdvUg1MF188yKEMd43Du96xcwJdozfK38Zt8n7XRiYDyGfzKBuGT1a1aV",
  "key27": "3gmjRLpsa91Kuba4GPg1fzDMrNuxKjKibbMhzY4kBVdCANHpbzRsoem8LD95cvYK5GTpVbFgDu1TTkWkTTkCNsN8",
  "key28": "5o9ocxQsXMdkC76Ah6MwUmwpMjtzbREkNSmc9tSVNWgCkyBsNLros3mZAcbhiLMiQmfoiuJ1sQ4GLwzdmj7eVQUT",
  "key29": "2wBhKvJxvs98kVoadQR5ezfLkGMszws3KQ6YA7gGHgC1yrFpLKhb35tfzRrGCW7JDwTpUkZknHofFpKCHck7xDuX",
  "key30": "oq4NnSnJtAJqiVmDdUZdSwkm1Mhq8cCJS6H8sEC4APwJP7UDnUM8D6D5UKQitWGDXscV7beExXt7QC9tESo7RmR",
  "key31": "45PdNE7v1FaxUc3gQBNrAwEiuHgChMhcTNcT2je7CBKHeGm3NFzh9ADSiMtr2MoMDVPcH8XcDsd8qaN45eeTM7eP",
  "key32": "sQ13BESjWPShwhFYgSx6mMWbCE2Aq62f3Rn89KMqM7LvMHmRW5VGHrEWquehxueNmM3aXiqDPmJWcb9BmJUhTiU",
  "key33": "3wYueGXBvy1eYskDp7RtwdfCiJuKUwQMwzPba5E8Lp43nwhsNKyecfeMAKWdwDbHRdsewvH5B7A7XrbQPLcXSRDD",
  "key34": "2Q6Kt6ofJjVB92orrxfVHm6K66m6yHLBCHDJaPTuE6RESAFyufyb21wQz1rd1YS4eoqwVT5n54BHHrhvwiYCAoiH",
  "key35": "7ZEUsP4sr7NQxUBRXuA1T5nDF7n8nzorcBQbEiK6xqQUqJvqXg3ed8aihZrwxMkXnPdwbyjb9rP9KZK25Qdum1P",
  "key36": "3zppwCC7JMJeBAiBT7RS8taZzMAgWUPePytffkpeyweM1gc2uvpJJEjEbCSGS3epygxkuGCcMkyTt1uwzd1wes1z",
  "key37": "qD4kfhNbLn2cSnmJmZRBdbTdXffEao4rmCyEUqXXbmhVej39aFSzLfSpYTDKbe3Yex9toHP3q4FXn812r9XL4s1",
  "key38": "32xspnZPYRcd1fwayLF3F8F12DmFpKwMFayJLBBKo94G1CpDTHYYULK9KSeRu37quDf8t1RmnHJdQEWBFKqvPBf5",
  "key39": "4UeB181fwnHyRX1Sm9o5u2io9gL36ghZgNWcGsG2v9vULsPCv26d9SqDmrmjNCrLeaJH2UfrTbaeKfV9dojyWWar",
  "key40": "3uL3zxtdnuFWoniBGXR2d8q5WxV4mTrjEQjBRWDRT8FQXcjuFrZoR7thvSLq8Qc3qNkkkSXfEc23T1rRoziQ74xb",
  "key41": "S77Ywd8vd57o334wfUBeiBJkH8sPFsBhU9i8XFaPgb2cpb2AonoB28RkLcUPnTKrNFfHUVHajFQ1Cx53LbDbQ2T",
  "key42": "4KhiXJdcv7DndVAdgzB984zGBQ8WXTPs8ZjEXRWuyne1ZYc8w7x6N3UsUXoBcW2ziz2pjLYYJWrQLMkM95v7iA2F"
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
