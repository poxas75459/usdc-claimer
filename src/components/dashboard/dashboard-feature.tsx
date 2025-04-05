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
    "nViNoJwPzaFJ8i4vjfw7s4qTq1cBfcMR4cinTKGVP3DeVaMUtRmz6iRwzmheGRrw3AHpvmYBG2zj1fLhT7GX8u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hPbJZspXHu6sLqofNU3ZcW1wyTySjFcjviske1A3dar6JDU6hYsZT74ZukmWcPgnjmbBEhhcrNGGp1C1YUkHij",
  "key1": "2CE3kcnNCoNR8qWoULBD11N6Dckz8a6mfMyCnB1C8XxbMcwyJeLrgZ8eV1w8dtHWvse6AE1YnweTD8QgGr3snaQm",
  "key2": "3HniGh1Jh4ytWHXeykMCLT3qar67LfmMhJPYEg2HTrrHYzypwKFpQFQceAEHPPgK6JwQzvjPTtcT8wyNd8eVJbaN",
  "key3": "4MCAY1UA4jzPJkcrf5qSiG2ii5K88T6yFC8cz59A6tpVkcEekXYuF5oVjZtmNsVtkxfidWHmkAyfywPNisNH9kQe",
  "key4": "2zwTmtsZJ5fJ8cfEaytrUEWfBTujv1UT4kRmRUivK4n2CxxcSQYMgZGBfq9oYwNzCj1LzkRbBNEkzoivH5QANw9N",
  "key5": "4YxCcMhkZaS4SqLhpLBzKJTbfsmkfKNL9QVTNZ7XurMUiEdTMfEV7oGom8hodSVZFLMRdZzs2UMyTwLka6JRsm58",
  "key6": "2cyUjxRGRk7Sj1QvAvBjDkrnD8hXM2fczvYRs8sWpHMS7r8z44kJ7BKDBbeAmeLtYiYox412KENRPvPapLMB5F3T",
  "key7": "5P3r5hrwBdVzccLhB7eejSi499SsN3jKhR75jKSpLnQBdPkci5d5LqgGkx6F8b55sa4G48Jr4s5WQCwd8kKXLY9L",
  "key8": "4p3jTMc3kcDQrxvxGq1JnezCsgjyH3iiAs25at25mfKXRTRTdx9ikNxDRkrSVUhXzmzPj1j9ThMcZxdbwqhBDbhh",
  "key9": "rdsN9tVsN7o3WX1j3D8NkyfFfZzRTUHB8oe92huqq71Lc2ghQtL6Hx7WLskK1uSLPtVp3AU9LsVdiVzGNP8yrs9",
  "key10": "2AXgTHnvpZbkzQVjzv6sc4HRPUiba56yRLY8aGbKsfhgnThXWUKwBeai3fiDYs7r9GviCxgn7nXULh31o5zLiirz",
  "key11": "4LWzEGM4yDN1vL3f9Gtjoeofxr1D55jnko9vo5vAUEQv4irkkrvVynXAvPTHkWFKrWPXmbKDuUkkNbsSXxa3NNEL",
  "key12": "4Fm3L2V4FsQunA5j3RwvRRo1vAC9d9a9Gzhp19RXfBKwQJ27YBRNu3APzFnXGZiJXRESyALkLeRvKJx9Gov2aQcN",
  "key13": "y9ZH7n4E4D6gfSqCTmdE4Wkgf5fiuX252nmuGWzQUgicfhAh9esdJq48r11qAMus8QDnupfM7TpBv8Rjzyudsxo",
  "key14": "2H4kQZYek4LRXpszx3UHmxW77deH1w3zNgY328P29BGEJ5Eh3z13YtvMxLdjty8tgszD3nUoT8qiaFaStxPFjw2C",
  "key15": "32f9ADjZjtUysGtvqQNCEijfKA4UGRE5rAGjKSFBM677sPFJwSp6hMK9xp6Lmx4K6Q33e5N3EbJzAh6c4aH2cy23",
  "key16": "22P33TMsnacibrjX7LhfryepGvsmXFAy9PLyuWSUpviKMvSVHF6AdEcwt9sFLvsmqp7t3vYpKTTxyG6qiCoXCRi4",
  "key17": "MR93LzPFGe6vzS1q4dwgEZwa5gXGfSqNZes6ppndvDHE4qVfH2btV3yMipBLKUG8y24zWMtPZU35PJVegdnXbAn",
  "key18": "2BXb3i6p1w2xrwVtXwLXtb1GDXcGJHiP5RheuQ4Hw2cQRfTRrbf6SSqSfU7r6wBrJgEJrYBbdiVZKfmPFeiNvU2V",
  "key19": "Fd3F7nHDKiSVAQM4v6eLHrMfHrpVizJgp4x6FBL5F7i6jmpTycXZWvjcvUFBGiVNZ9cbPSNvHDM1dSyhd3knVba",
  "key20": "398vNcgFLnLji6jToHqhLQappKxJ559bdHEBWRMWirEJLBrZFa1YVShYFDu3ZFoRUwhvAX3aBndNBFYkaewBLGBu",
  "key21": "w8PWDQQ1b2Ws8P7NS1U4KtjUwgyaghrBHth6geecJFPaEVLABSUC2zGa4nrBv1tQaaypVYBJmmWNVity7yxJjYy",
  "key22": "3WNYZ6uQawRdNDrMaxboSbSeLfZ8Dzr76wPB4QZySDbdZbdS1MUXpEm5dfZT39gNEwWa74Cs2hRHeVNMfMfjumMJ",
  "key23": "3SbvK4vcTQb9yuqpVZBqbMt7JxgB9mBs48VUNqsQRdQEHv2xv3L4N6FST43nPxw4fnfvge1eidpkCmv13pEqHD1i",
  "key24": "4dPq1DrihgAFKahVNVFP4iFXMrEgfwZHXMXx3oYZ28KZkvEtWAerPHn9m8PHNopx6r4Yp5XsPA1YG4v2Mmcc6LFs",
  "key25": "2TEhd95Cj1S2upLGpViG2DodaGTZGxrL4ZUrmhQs5yGomX2dss9r1FD1vqMdHvYL3tp1s5rUYeSh7YLgLYFVo73j",
  "key26": "5xNg7YjmCKEPjaueQm2Cav5TghvNqvvSS3JUM7WSurwyh4frnLZATojY1frkR1dFdDrf3Qx3TZh2gbo3rWjYhgVq",
  "key27": "55LneNRKeR1tcwyWnQ4q644gUSdZ6p8RfEgdPKW27ZDMxTTMnvjbZtASTPsASBBpLDjSDYs1ucxAnJp3SGxSqy97",
  "key28": "4UCjdPtKJwY9c1QsbyWmqi84QA8t6vzMGovPGoYvgTZm1QW9DaQU8PDrxV3DSbeTsEBvhUE4PpVtCbZrPC4GqbLT",
  "key29": "Zdr2bVkWwLcGBP7oE6nABR1YFG944MuWXdjV5NGTUN7TMQx5VuWz2GsWUTKZvRybuMFQff5P1i9DRrot5hoHRFA"
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
