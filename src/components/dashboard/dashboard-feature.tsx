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
    "5RRY9RiehSuWVV4scQV7uX7mhhFYroG3EhowtQLrNgoCpe8a8EWY7vRzNA3384xTwcTo8vabvR4xJhfcLHot77sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUcQceDP38hiFeYhqj6pYARKr6j5Yb56GaYKxb4W5QypEQbTZiQpekGE1LRzY3PUNe1UsArmiaTEvnrX8F7HGJz",
  "key1": "3mufGi2GyDEESKDxMFBB3nGUAqCBsbdm4bSSudM4AXZNA9HWvx3jqKWddz1UCcNZFtEAcNGsNYgf7YNC6ovFs2vn",
  "key2": "3xsBguA5xcuPQrCd7ijypzrCRZXmp5SKfwEQGW8wLLf4DEfeVaqvaMj1PUcs4QnhSC8pTarALWNpXwY8nydQSGie",
  "key3": "gaiTaffgC2kGn42SV8MvF2zCR31aMssCDxahkKC9eKvvJvKSRx2zN9cQaJvAq3a2bAMQWGxysJwYHoruTiqcMDX",
  "key4": "3c3zrj2FHUmMBXLcHiygHJmtLmB54oxmJiFv8osBdhDZ2mdo8FGyvW5nwrz8qTPu3zdTzVSdPBkKdKXU2airA3yF",
  "key5": "5LpUEQjybTb7Mz1WUxusYftMnFtotV4nVptrRqaFk1AR5HWvcnRrChARXsUJDN4MuzbGPgVPXzZ76CmEcgXgXFoN",
  "key6": "2bAvEt5h6tEZbTmhqqBVrM4X6ArQyDQYYH5FHX6oMbnvxZwvqUCX62EnrkbKjM58gHcKe3yZrQq7dWb7S4FyqbJX",
  "key7": "2Jkuazm65LhrN9X1w3VQ1UQkftAGyAhjcZEgo9JC6ByEr7n2Lm2iPKaEyGVeEadZQu2ZWtHKfDMxwhgW7ZJTT4bY",
  "key8": "2NAGGk4jJT9UPrV9xntv7eEr4G5w1vaBBv8W4pedmbS61yMLyWiiDCsRDY9P1bn97em7PwgjEt33i1mMTkRqDuWi",
  "key9": "mUyhZRkJpDnz1rQQT1iFZbCxmr3aai9gnB5kj1b8pDJPaEMBnYYcnHjAmCh81JKPSXQUQG4WhQwDZbVjG4Bb8YQ",
  "key10": "3mY1PpQ1gjy3FBSQukr43pLcM9meZykpMuGcPKiJHSCGyHfFSEhX9fqyzZien7qB8N7ZQvq6BH6rycm4hw1a7M41",
  "key11": "3BXWvQ61U8WVwrw5EiMGbd7oBAnmamzEEGRdP9wFTSRFgf23Bg8dDHKbaHFsc6jqutwyEfiawjdM7ZZWhcoZ5ijP",
  "key12": "dwQNdRV3dC3KXUA6tFXcpnbjuE6Q5E68kASrcNCn5oZz7Wu2c3yA9b48UVKnSyr5T6GQAvg7iodmXzmXRim9hPr",
  "key13": "8fxeoPbfRDSNNCPTqs6W1Q94JVZNNUTwjhg1VvF5koqo9SCxdHmZH34At6C3oLv81yiJvQp12UJHa1Rz8NuzVqM",
  "key14": "3ANhNL3qnoJb4e2urSL7jtdx1963vkzD8CwCLrXHHpgbgfUp6UybKx8cYPuaywJA4eNxYjTWBjkQomVmu4wLgEra",
  "key15": "2aZKGmDvUq1oLTiAxrHDi69wdYpMTqtKjyK65QVJDGrxQMcGQNDQemeybWTgPQuoDNfHBjnrK78rzWcbcHswcdGx",
  "key16": "412ANwtXNKf1eeJUdwtd7yBgAaKjncroTCt1UVJf9FzZbcmvTVZL7ouTJsGB7ZxE1WPXQcnnQHZUS9xG3HvqrUQz",
  "key17": "Yyi9zbv7GgE3BnBvSbLv27khhgLoqeV8bWeKiJGvBpz3EEmRY1YusYDCU2qzCGjaYucD4PTguBfHvNdwQZyS3JD",
  "key18": "2inMjtzUYJNiuUGRKRRBehNtoLvqRPTEVkgNF19pMEeWnyddPiQgbjaAKV9qGgeMk6XoYUs7MZVLv5PndYceUBNn",
  "key19": "55oKZesxSpJcAhTqyQWhNKeFhdSYyHSdPCxU8pAEdWK18rKYg2WM6ACDGRRnJe5YgM559bb1DvUJMey9V81PEPfo",
  "key20": "29Mrk9nqQRkLfsoMujpTi5bi8iUEcvdc2cwzTo9WeowRVFFsYsv9F4fcoVKYSv6wj4Kyh75cvpgVJshXsBRomc1h",
  "key21": "249axCLnjkpoZEq7cQsGRFkeAy75SUjC1FCQvNtxDDCLpsNyz6jc1XKmvvkTBTnCbFX2NSgBxJSfr3JXKw3b5DwT",
  "key22": "5sJq8Uz3ivLf8rVJgF7NofNF8X5M7SSGUYqmJtXYSAdGjBWpVjdT4kvJ3B7KgnDhYR1bggQCJp1BePw7b1eB4QiH",
  "key23": "bCNpuTKTEM1bvBsttrGyKn2gYEVxS296TLYWjAs7kMw96QJXTLbob5Ey2wxFv9dNeK9FnvVsjdf8GC7bTNCuBJs",
  "key24": "5EehwgS4NLcRyHwJLV2Lgi6QxmUxqsowmPELCMACE8oU43YtvRs72kBSQQ1jinWuJWsthAXYZ2QemPGcD4iAbM7a",
  "key25": "127VWqTaEj4jHSv63fvDk291LPnhjrbmLJawq9Eaj11jeYZ5Qzi9NwDgeuwYSYqTasuYY1nKLCoQiDmREpveZ8nM",
  "key26": "55tNAi7T1TZ3LMCKBgVUQuKjrdjEkwR1mMGQzrohMGnHm5C6mKnwGjN5aox6aMUJK7WbMSP6KQCkqq7Jp6ixFGoa",
  "key27": "5ySav2Jr4pv187y6LuC2NghLm4Ngy1L42pbUSCBQMPHoDrFtWQLTcyh3TRVXUwHu7W5SPbXhLT6vN7DGYCYg6xgi",
  "key28": "f93cZtKYuaqwo67LyAfLtwy6xh2qxbB6avGK2V5kbavdTyinQds4VXn8JEhv1Shd2YYiFh3nQq4wTt2QKU8JDiU",
  "key29": "4iprj5VTAtkUcibSLVGBBJnud2cd8TsmQavXPSU1RybaRHJS4gvSwsJoRtCT4omqUYg1yWpvxCbGLmTa45mZmBLz",
  "key30": "36otBw8a1YySCb1duqUPqtD1RdRpNeX8HnJ4goYbZD5F9qFSQAmnF3GxfFeKfUKr2An53npjE465RuVxwAPmLzxe",
  "key31": "5A7KEJXqfgHyHZv1iHx8ERbXkKZ24cBKo3DcLDJipTu1FnFPPtzL21PHwp47xsQvodMJZKpczxM6uvezmnMR4vzj",
  "key32": "5PVyKoQDf9sikbNipeAFgmEw97bVbxbumdLpvhpFRrDP2PeEeVyrqTZE46QvHJkCQXgwWRRtAYeg4Lc8LKsq7zKa",
  "key33": "2YPHQ49dgKkrCdtPhhTA7k2pqgLsQUijD4KCeVAebmEdu6vtDEQto4baYNcKvYUgNteq28JMSC4gzkAdvXtpiJ1U",
  "key34": "4yRzq7dVdwNQYF7c2M1h52RejYieuu2CPJjJHSejpH1afTwCoczE6WyovLgk8fDQDAJkrGCpTKQnYGjyLadJKgzz",
  "key35": "PXz5FqkPGatkdZ2Ew7yj52Zpftz6AGbyxD4QFg2SNWGSAFwp5nBGw8MTeBhxK9RuunUW6s8WS6wnPUPXXcQiVAo",
  "key36": "4nboFDtPX3hFMoHjx9xGX43Bb635canKZgTCBzkKRm3Dt1Fz9YNV6nh6UcxKQmML8fjwhJVyEGJUyXSUFknYE3EV",
  "key37": "26JRL79mCmmDepAPkKfmD8ruc2K9UBVC1sV3uP433zMqKkRJ6MnFcizENgkJDsR3vQQ8J1emV6Rc4tMWWzZsvNf6",
  "key38": "5F6N78mQF2Lj4wH5rk8tcbqtyh6nzrs3DZSe3tWGQC4DVPZvYFcc8rNMfDWh3EwRqPx5SmsLNn7gHWcjBeQiZRnd",
  "key39": "286CfqmzAWuswCSTe4BukLPzhtxNPrvD6B8qTwBVaJ4N5sFzvHJ74xn8K6Q9UZ8CDiizsiEa6RUufnbVBmZJad8T",
  "key40": "J2K1PPjsTDonvsh2aztvLWrGEttF2uFxucJgHj7w419hGcomPdZtMDzwSxgo4aD8TZutfxyzv3WCxymfootkgas",
  "key41": "4f7agyWCA5TUwmxHPFbVWzTVeakvKj7QFTyV8P63MZxK7En6KmhMvfefEQAyR55z5AbxzwYJjJbdi79Pd8GtXGeJ",
  "key42": "6ywWASA6pgZRJd5N1LWD44b6Cw6HnVxq1wh9iiTyn3qQ7p38GAwCttzCUe8nD1JTujfsXF5ibqTA2aMN6EZqTfx",
  "key43": "2nuNY9SJwHfzKNDVtXKgpa6xiwhSXW3ybEHv9Ji5RniXTJdfUcZSPzmdsc1VvgSo8owMYxedgwTLArS9YqgJCS34",
  "key44": "5NFFCdUEMKbhXWxM7xKZhnTJZBgQhmYuY6947jgLEofEATrYAxm8cWqwNEAVP9x23SDGBow2Pp3wCKgtW12zs8Gz",
  "key45": "2YjG8JD5St45WqA2VYVyeSbJ6Bih4BKmJcogBstnKPFrFVEgDui7B3JmrXJoJis78Z4u3F9ZmVtuYVA4LYbqyoeU"
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
