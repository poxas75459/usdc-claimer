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
    "4ZzbxPHM6cmUKHGSWT34rFoALFCSSPdoFmoi33eDAPKhKNn5wHFdKM6LmHVGP7DUvum54PqWvGY9Rzm4X8D7qHrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KbVPHyg22ce53WYAYnPevYnP12hBt2AhLHPmkxi5GdQgzza7oKhdCPAoVXfLh4D1DZir4ZRuon295gYfGR7vSkH",
  "key1": "3AQR96kSmg8f5NSXbYr2CNUFt8u6hf76xhQxckjoX4wXB5acjj88bQ9keveUFsrwCuoXRHcHSQb9yegR6kanx4GR",
  "key2": "2v8qdu1fPMBUSBj5PfvRTgzGg2J27Z1NDbBeQqWpDk5JfnXw38NKJiQTiGYauug1FGfSSoV8Qq4XBiZXxJNopahk",
  "key3": "3A3Y3RgGVoZrgJZHQQAjM87aFmR5kTVjyPkxiejsDDs9KEjhUEcwSab1zE3rCaheLrUrgnMbpdcvaK24r8VQH1Rc",
  "key4": "5pX9r1eu8JLZVBc31rrrtKvaG9tnYnaVMzPreBn8aN8vu6S9N8Yp4X9cE4T8SxZ1yNdtwgU6oUdEudSxWw3DA37M",
  "key5": "4vf3zpF71hVqvtmGsDzKHUTDsBaXYbM2CooXYdQh4BKXZohHWMyHQUmtgqVzDEFRFS6YZLXHJGATQpmbSvrKtMJH",
  "key6": "5sLVsEocsC6TaMBBEVNphF6KHPe6waZuA1J1osMLgGgezrJh6HUTQe8U5BPGQ7fWajAfftmY4qLPUS8ad7zDbRTf",
  "key7": "3DXpoJxprcc9vbcM3JrpvJhvVnJHp23VV3k2SsKnTjAqj5BH9oDRS1TZTpLozU1qYSUTXQxQGgqH56aE3DpWrTNr",
  "key8": "2aap6Jc54kXvZ73oihWx168eJhwUHwtLCoJfhN7yHGSWvGxzzorUo7MHjK7VwjPNBZ2bcaQknbt9PkLfywLCfb4X",
  "key9": "HXzGCWKBVdDdiuysgVKV8LeF8EAdTyapamjYgPk2yFyb6Sq98a9wo5h3hx5KMki6iQyYoLK8RrnZu8CfwicnuV8",
  "key10": "xDgqs4kA6koJgQ6UbBUA63PWHpuiPzDEWz6uWvrBykQ6k8y5hbf4nQ21fdktr3uC3n6n8qcvgkdzWTygjuHKDJZ",
  "key11": "bNKau11A73oN2ZVAKVp2NCKH785ta9vrVNJt7iu8r7UBP1pssrnuTco591o59s652aF9a561pGgH7JqZxi1zGCB",
  "key12": "5YSQPaeUQgEaorYCKw1C6S38P7eMb5E9swB9TPqwiTuWz1N5SSMSto7KM7xs6A6MYY46NcvhWWaDzSdyvx11MzA",
  "key13": "3c4BzfMkrQNSXnc5FGyAELX1g6rEGZyoSUvWEsouqK4ZtYiLwRFqPk8v8Eqm9NxGfkWD64Hsjs6i5YsVWAkmj2id",
  "key14": "6233qQy2uPhcnsaD95uH7kqTZwWDJaiB3wtAdSLxwHSqpkqLoadNG97MURzn3GuRgThhKpVssHMe4M4Lydkc5bdt",
  "key15": "4QBPkQkbCbT1tQLrfKhiC85uc8ruJPHwKysyW7Co8Q4EKGD2yajWV9r7UdNXeXr7GHyChqC3evciXsESuTGhtmtU",
  "key16": "3A2cHreX1akJYDDH6NyvZtYmf7ULxwXW3YNGpKXMGGSWV5q9ezCBMJ4gUJ1QTjcVdvyPJfa5G5wS2aLjJcyE7CaE",
  "key17": "MJWN2UB1QFoyrpwscCVaL4WccnZ49tbuvmBFaGWPBYmiDKQcSXhxcREf66iabkuTHER26a7sCEcgJdVU7EavoJP",
  "key18": "2ehM9hwzhJt2CMF1U1toEcnBLUzNRdkGAYUi1KHeKV8Goosjy7hX5jbJ7M57pes41RvqPdmPcQ6CzUsiWtgyLukM",
  "key19": "4H591Ag8jd6kGG5xYNFeaSRaTfnoRtZQP57NYcrgwGKG7LDa9Qogv72NPrG3t7Gfnq2ebS9xfqdiv1cgM9vsnero",
  "key20": "4a7xXUyatPRek5pQGt4MGuzzCTE5PKBrY7vLNYjgWzDwGJSGk8ii7QjvWJLHudEyfp9Ba9XpWd8tPAEiwi3KQEYa",
  "key21": "5SmZ6cbXKgjMVYuMWjyq9Gaa6LMJdFHUk9FmhXeLko2oUNxnTAwyHPAzWRRpNFGwyG6o7wPiE5ppePrpUgYXMkac",
  "key22": "2cBeMuzLagzzVbm7X7kjosuuJaHBdM9ebc7Hc7G51YR5w2BrAt17XSs5nNg9AXyEYxZHBXwuXwcShteRk7YDsy7k",
  "key23": "4qT3UqSVkH4UXXHeTAYdSRcNV9K5izWsnrP55gtAAVzFWZPmMVcwAFukgUWc72kLyUsz2fKAd718LNqrHBt4Un4D",
  "key24": "yTQ2dfwkFNCMXo14LYv7QgJhFsYB97EbzDdv5GvC4LiCghTV8xZYSLYE4A8nCbq4LcKwofv14Ywq9M8DwTzUVMt",
  "key25": "4iFPy7vpXiT3zNGTMHnq78iNKHbqK8cCVCXaf4KcCGXVEE96TeNdE8NXMN3BweuL3V1Zifturar5GagicCsQfgpN",
  "key26": "5qvDAKCxpWVEvky2PDRShGSBFsRsZ7k9L67ZiYmQLqKUHZ4zp4FyLHMzuhouqR5jBFAQ5C8BDwVGiuP7Rr9EuBKP",
  "key27": "2otSknhSsyNeAJAuF9BuAhN1ijnKo92VHwM8hhe9pcFgEHSnhMJ65S22GG8SGiEaPsR6QU2uCrtkkRUKoEaWSR5s",
  "key28": "3gFFi5VHNTTd7Sa5puBaow4qckvLtYUd9Anf4ZbaLQtVYwafTLFf7fQMQQ7qvQQVWLPQSCo3XR725T6od8DKEbjs",
  "key29": "4vGTkq7c55QMEC7jhigvPKkRBFtNUWFiMNQ3DmKsWysB7GzU8yypzFv9CGUoiyyc3Ya7niKNhCMHeJEb2YhNAx35",
  "key30": "5fmQpB7FLJMyj6Fd1JovfK7YxSeVHEtguyKkTys21bPEkvdF1bihaJMHTdJPZtdmpnc2APdkEGbRMqCWEiv1StBb",
  "key31": "3diT5tn7e818wsrmoyM9cAPRReuigRta5qmR8zKFSTxxbSdfnxtPfTH99D3MUFny95odruFns3HgsMyV6Boxcv2b",
  "key32": "2YMC5rKRtZAEPoYuPqyfF4epMLSoD36EAa8z7kUx2iGRXYNJL951z1qcKLNxnPkkChk7XVLy5xqntew53anM9rKo",
  "key33": "JRAdKgHoSazTE2RSmzvinv6xriyV7RU32McPDdqkTokY6oBFpE352DVMtmdQGn1PBfmPifbN461DoNvFSSJcyiF",
  "key34": "652Vy1Q3eMVsr6HM6kK97nudW1KuaZ83koeh2Ehqde34LF7jVKMFFm43hQL95rcWVJqPLwUgZdAnxKQ66XhoFjFg",
  "key35": "29pH5YJngiC9BncQ7fv6UxL2G4QTCmSCcxmujsjk1cmoSL2FxC4GgcQ37h6KmbV5UF1ZY4FBjYJ5x7ZwfDS1dpaD",
  "key36": "5sE1bWKKzJcTDEaWGPJ512gmVcnDmaPcMavb8UuEDtG2d8yUNzbRSMMRe2LWjiYyFy65Lu5mDDDV8QVSSRSzf5b3",
  "key37": "3TJ98pWWLzWkMDoTpgxdUfm7md6USDgZgob7PyxAdk1Yt7UFXRn4CaekWHseJ1pvcyaYhfhuRsFUm8oMm2Ufh66X",
  "key38": "Aa4sKbDWGvZdtGkBZP7LGE9qvszxLLmQDaxft851Gja2Lnbyy451nb47BXhyBLbPrh9kDFqeKaNMAQbgrE3b4qi",
  "key39": "xtzPSw1HSraj2YuQsgArYxzTL2aR6Qryk4WrsHMPy81FAFcWskM5SjabXr2dAoYsU7k4XBZJySGFPWV8Ysft4A4",
  "key40": "4jdSoig59KQxFZNbSLMAmkAorSnp79uNmTjB5g67WEbPAi5w27k5XbvRZmXbQNipWWTVFSWLsvt54M2q8K5SBtRH",
  "key41": "54XyH1a3yVsoruZHFYAdz7Pz4pLXBxGk8oK897HW6D5LJToi7fkeUiCK3SHnMt6yceSrk5iXCMrazjGe4TnW8w3N",
  "key42": "2RTzCPNfYu8jyJzBYaGRLJRqiMy2wk4tLXm8q2EfpdFyxuhAcMzk8YBs7yKeBCm1WCaRePvGeeETDXQjRJ9rm1Uz",
  "key43": "4jYCx6CPcy1FyAsj2YAPaCR7dai4PuDcrq5PBsv6FincBtQZrRQ1nZQS1AZ7ehefd4LtfWFppWm5bsYe45WBvmHW",
  "key44": "4NRc6mL6bkNejXwJTBh5pJ4qFfgQQWCEiD4NdX8Kt7VaiUWBYBug6VmGJDob4PeDr7GakeAoVQ5RRQaantCE3MP2"
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
