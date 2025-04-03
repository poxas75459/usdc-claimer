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
    "66TRp5FauUKTGEPfex4nDu1dnbUugp1Siw4jx1QFwzonMozmpf71dMMfn7CCUMRmXxTrrUmjrFMqBXCvtkSZt38q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vfiEWKeFeF9Ctc617LF5XLUaz57pdLzhhHHpLPAcMVE4rsxbynytL3iCjnZcyiecW73YPhAKv2EDYQx6Uotm3PQ",
  "key1": "UDjC4d6oseXViY2gDCiT37zDo5DKjzrQdX7qRRXpqmtXBJo7cLxynojk1buQYZWJeXAasXsemCTtTAb9nfvYAzN",
  "key2": "2KwQca7CCXSMc3R5TdUVVhMEjsWd8gtP7inYoL7ki8ximvotZDUXbkTtCfXUassuGZ9XegxXZ4go7wjuH9cwF1JY",
  "key3": "4aWFd4U78G5VhE4gvoxe5nBaiLizFVZQFj13wB2PBKuFQD9uR1ECZx6iy7mf5qxpKXmJYsiBtpkG9JeWioVv3b3M",
  "key4": "3VvxRZw3SrobTsxykZtfR7AWqPusNxV44mVyG1mF8TroBpk15HhKHzQxvXzJfXfCRpmPfUotPggyg2NaAmsz2rnK",
  "key5": "5AQyki6bsFSfQgf81L2MAC1UtvJKmSEiZhaVuE42go5BSJAKVniTHhZbjBermxd4ecBEsDp39mDbHpjGdixWqWng",
  "key6": "5kkZmcGAgwxGAzJxcRBX4Hic5HU5W91f9Rqqii2dbcj6uAFzbEGWNyEQtsiPPfrHBDLWg3Y5kEvqZEJwntS1Gx6A",
  "key7": "3Rv4qS6B58bySGH1KeywLnrP6yvsSc4ou3B5xjree2qAAeeyvsdYy6qEnjCbf6kFPz5AhWMZDeuHD3vQgUqFkmmx",
  "key8": "9tFAY8D6dqCacFtZL8atSeFqeBzBmk9AtKk5jGt2dDGEYPTpyss6a9sGb6q31ixPRPjMawA7tWaDpzG6yawTcc6",
  "key9": "4WwpHQ1VvUzJRrSCzUGUfA489MZ1BwwVVtsT7VU2H6rM9ZEuhaAvvvjFQtsdKfruqjqthAidUBwatAVJJL5dtaTx",
  "key10": "29bxoyBQDacRAhfshSix3QRCpgB91JDmF2YCDof7Xp9ewDo2EXzs2Ja9W7g4rMSXNtGhXKuwQgNV7XTaCezgUBq9",
  "key11": "5vFd7yyRTiMmo18AwCGCLEvZfwmYsuchgpYuXbEAcZYNyShmnvbMNdYHtCRbKtoqtddXrcvp28Kdux99s5rbHp3N",
  "key12": "3EzCXK1nhBEDBJUVMpDdGC9GYgYx85QuGLxHdBkZhbMgAf2X2N8yHeNkfSNV3Kzc6GHnMcPy1gbkfFxBwNKk6dBW",
  "key13": "3SvRBF8ZiwfPAVP5av5PyJN4Zjq1cLMaFtRozNydGCmJMcVq2cGpF58gFYBXbrq7bCr5dVEH8sZfkgJ7p4YXA1CR",
  "key14": "2e1e7cdAW6GUApJignVsnEDXP61XLE4vXV73GWXqbeU3VLt9pRteCA66H6B72hukLf79gRqiNTLbdm3Gy5aaqj6",
  "key15": "AUe1N9JCGdBNPbCCmUYAsbgTz8trhaNiUh7utgSnNVxF19wmdM6g5CdQcoEWWYoEzkwFBFUtPq8ELqpr3jnM9bu",
  "key16": "2Zw2zUdvHEgidEVtBQ6rhUHtoETZJXCDUx18aVW1oTK5kYpc2QcBhyZBqZ4vuEVgUVbCN4q5cd35wyyZ1kYgwoFQ",
  "key17": "4mt6LhQEndAd4nmUDuNUuYNY3WqyqzUvpk5a2nUiQmdQQ64YvNND8Cm54dhQJbqS5hLfLW2vqtCRD6g6upsdgJAo",
  "key18": "U9R83wJhFQbyst7NUGtxwLCSeZJjydB6bvbyPomk4FABGMpRTznNcrYP6eVitm7Wetrm9GZwYkxViLyEWr1GwDf",
  "key19": "2L1owEoLQ6fwiZ2xT2DzDso716cTSooWgXccHuCsfNjxBrcUMEP8ugRaQDTScNntk8nxBiQzXYBst4WtYkuoHPXo",
  "key20": "PjSe2N614EHYHjqThrxsx3FUrawrEojK6jkzzgfgy5cM7veemCtWFjgwidVmyZuAHFdTaL2vdwTTAPGx9mFDj4r",
  "key21": "3cRZiRNgjsg7NwYqfhQEk3rgwTWo3n9LbSLeefe8e69LJVGFU7pJVE6L7maEy71iRNZUjPBrPgAeRNDZZuLgL2cy",
  "key22": "2QsdzrZUhvHekGemtDLketPZYEmjrQs53SnDPMd4JkQ7XfpSUrmWNA3HgPALQSHAQJybvxUD7LqtArsFXLAnB1mx",
  "key23": "5bNAZHLpVXaBvmGUGrf3CJUkE8Qpcwnhj4YEJ2qHxwk3DeLEGkUFEag9B3i8iAEsZSmQs12icdVag7VBcJEj9f22",
  "key24": "4dC5KZ8cgfRAqVixtkzMejFaEXQwYygutDyexjZCTHf5hJJtCmoEnEjHEUshsXaBAFUbcefLd65xQTMGGcHRjeSu",
  "key25": "5uA4NnXVYsZ9qxNssVNVuuWKoA1QY6jHbDbNxXFbHqQCGhYFysgWELzrNty1iiuRg8ERDWjid3LoSzmBcbn2UWnK",
  "key26": "5WZCKW8kXfRARB24wVtLCtcydu7LPVaT6Vjd9YGUzm3bSxBBjbU69WGAFSKZVaJBSLXJvWQperKKuCzKppwdzUnM",
  "key27": "56vJaFjrXLCD2dmd4FdiKzigY5mvy2QaQAtxzzTzLGYocdq4ANeQZKnjPubw8Kayc85F3WumRH52Zkx3RdHeqvMx",
  "key28": "pbv4YEaJ5gAL7MN6VUBDPBcDAHQQW6DBVLM8gM8KPFKtLSs9u7w7ixhDhBjyrpcdeSeGahyPVKmGXBQLKu6SGC3",
  "key29": "2urMvyUQN2Zz5cYjyx8fMiPTZo7PQZqVuydFn1h7WpHaJjXN3u43VaeD3ZUN44bJQ5XF3MJo4gB9JQJQj95JKA1m",
  "key30": "3sQrR26WqvhDWcp2LFyhxfKeoD39dzauzJm1BchFFiWiQTZAndiy68kvZkit1DWm31W7ZmMMqMXiwAexA9CsDZob",
  "key31": "5WteojnEkrikY6DaruF7rywveEFeNuDSTGSo6BNEkFrFBFapmH8Tkw5HLKadh7yuvA5n7EvRjhoq6dXiziMN5ynz"
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
