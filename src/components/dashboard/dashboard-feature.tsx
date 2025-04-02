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
    "2LuS1bJiWKztwTLkMnJVsystMXkWcpwP4Zv4UM8pqwZtK4H4d4XfL8iBwUQ94ttkDcDR8RJmpJCS78zzhwkU6LDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVZyi4FEhPnbuRg97m3K1a2DYNC8HXXYgzmYv2dNzN2rE9fDSm6mLC2jhFippD3eWUpazFd5z9ykCcZ1Em4SQVq",
  "key1": "MDK1Tytkho1cyggdgCmNSqSNnLXoDez74VUGRdfKZYLxeeL2Cr9UXVrr4yLwF4moKpcKVCP8rKzLRKLTsWbkA2b",
  "key2": "5WD2hCBWkG4GrKhmx9M81q21RSow7mPjcg3io34BAdVg3YppFZNM82HigmCFB3MwsRw2zTTMbonnehVrKrXoonTK",
  "key3": "c5K4NQZFnLZzw8XKPbhbuUc1F1KdunfLQuhyjh8K41D57n6KRdfyWJvCuyYHdwiHTF369Ec1BPw5ig7kHFvidxm",
  "key4": "2ufhsntvD2hpRjDRESdcPvsn92LVVVU4B1Pyoj6PPYFLMJ16tYDLXYFaKWjs9ya62JncfVBaei482aYevPewjFAJ",
  "key5": "3KtG8eX5m5AxbMxrzhZTSLLnTyVAXmEnTVVS99cCjkvfNSVrMRYgZkG1D6ybKkEH4gvDi5nBSYA8xK1hdu1iJoC1",
  "key6": "4dh4tS1PWSeDFsgQnRj8d2gkwx6r6ByqrY3xDM3LnjDo1XLpcdTB2b5LPTk4kjSNFs1ZU43W2n6XGGmKtSSddfW2",
  "key7": "4SwGCoMt2kNbEJQn31y3CrUCjDwqqTcs6QLNxvnkVFr9QF2hKq9HyG5foUgQrJYjbrks5jcDU7nQ15P7u8PzzcXY",
  "key8": "2NGoE6pk4fLCVKpvXnmtJ5sypDddCXF7oD4K7gSuTUthgDHshfbd1H4BsZsV5oBLFAQCM2hKVjFC7vRVz3gACHkz",
  "key9": "4fdCchxb4kDpdYp8oWMtimrX5fkKxTya2Efmdz9Ntz797N3nyfMvUX3EccVQTRDxuV5DUT1uwmJFmScN5vc6Kgnd",
  "key10": "535Jop1XzhhJgrj7DgS8LRDs3LWXRhLmyj9KjPcMpTFspTRzkZpRGKnA7Ph73rSYdeZUDSvTGuuVCVwbFLBhEyCx",
  "key11": "2qop7xWcKYc6ENV35YzX69GipdTrdLT7kL7T16x8Do3HA2Xu89ivJ1ZXDBA2FWK6Jj4qESvyF7kcPFDLirtkTTXT",
  "key12": "4DvKekQFxkMkYYYbngCNMoQqp4sRYsqp5zc3cdS1CrxqZDFMnzFAewenmrGFxnfWJFygXFtfGunjyNBYWvYiao4S",
  "key13": "5dqDDXJXBWZkvenA91LE2Ci1WupuR2bJNZuVbkajt29QDkmJ6h4gx8VeAGHS27zkyR67hovKCbNYDejB6WJS7xzx",
  "key14": "RxYf2bBxGBbpMrdqnJrR3kxsY96Z5fmMuYSscwY7gV1uzzeRkzz1u42DzU4mD4sASXvNuC4AEewb6xCrxGTYmP7",
  "key15": "4U7Serwt1ebLnVJW8oS6stgZzdMNy9pAMJDXbhaSrNK2Qq7vTdz64XYMP3pUA5Q5F426JobPiEvwzQnTTDmaBu3t",
  "key16": "4pJienNuivyVHiXLQkimL3Y4wGS6HYpnfCyUmNv1uN5vHVKUeFQK5KdyftsQEX349DkvHfpi7oVqEDKGYVojor3B",
  "key17": "3moMXqD2bHCKRXJGfMYBoNYeqU5pvT3vmc3c6nLMMjtLG6AoTgVShFNRfctZESGWzBjRBQGpDQ78aCofmunxddts",
  "key18": "22vjQnKyod16N5UXVa6XnsG1o86CH8wdowtwKU2UVjfBGZMR17ZPXr3yPgNFYmqDG46PVCnSSqtSzTTqdJ5yJqiz",
  "key19": "4tXaTh67vMWAjsNeSy4n4yUk4uUjkTBuEdgkPGGZwVBsxoQNZMKJ9hehtyeivWYncwfGU6gwpE5hca1cJnZHMYvz",
  "key20": "3VetHfkZXN5gbdz1gwEQXsmiJ5DoCPv4NjFRLCi5PDjkz7CHiW3UGJvrdfpVsswTAKHiGkLfg3XgMMEobQn2wDfp",
  "key21": "jMUqBm5bpShFioTsvbRT186Y1zFPxsC1mYekXMS5PHdHfcAmbD1Dxh1P2UtgfP1bBQGn3ma7JBxu5kTXAoLCuDW",
  "key22": "nXsBybacrj47SKME4Khq46mFEAzbnMKfsKW9NrnXnCQzDoXVQEi14wWkej5A47fcPtXk3J35cPdGUTnNMwFM8ho",
  "key23": "2Tfm1TBYtqKk1fAfsBxPUyrCLr7QeotuTr6QfuNMcHHSmNM3iC6WaY297jkwRgHCuWg3MXPQaX2pu3iMkxbCjYcr",
  "key24": "59Z4rExQtUZEmvGk8cx1zq2spSZ2Lbm3B44NSb546bSeo9egBuXRKFNJr5K9khNpCmcn6DKciqGifHit7LkBpkev",
  "key25": "unr35sTuRooCeWLENuSabjyuoTUSXcJhWQeR8No6hE97aMzZ9oGg2kMR1sTMvNQVLV21LzNuutUU7KzzddHMMD6",
  "key26": "4epGMf1DWKyeRdUu3hqQuGNDwiagmyAk9AWUHfNa3E1DJQDQGy4jw1xPvgJrdogYb7iFyYbzNF3VyNdVczJQjcR8",
  "key27": "5rhJoBHkMmC8MN2ifUUTHeFtcU7UN3nW5kKBi7AnSB6Q1MaQfAQCXRueyq7yRs4BxR4wsq4fYX3qkQ88ASiUMuhe",
  "key28": "3SfAHZA8p24a35Mm3FUtakShMAQRzzqMi6kSMVvVDL4opwKBaC1BMhDMrsHQbQpVzNUkqoNjgA1B6BVKQxR73QLp",
  "key29": "5JSzM9EKqGu4fdjAWR7VRBpWvhDBNMQXrMcnx5qZYn2YzjKRPxAWgKKyKEnDv65bLJxWhy8V92vucXQ7ksztzf54",
  "key30": "fTAQz4E1BC4KhYNzBWM8XDJ927rjWX1D6vZY8JFSSFM2R29aqYMQKjypRtBejnwyL5txpNyscEiv5FZPvnknRij",
  "key31": "2AKRmcpNTodZure1GGXjsxKiypPT83BmapkiYwfGZDRv15SGswP2ZwfWCakDnGLg1bu1jL5N2s7QBfErwAF41AR8",
  "key32": "3gcBCe1Tp1w1uNFofYRyaHsoj9VYRXvuU6MSLJ36sdQh5N82XYtVDLXESTg6zQD97DsT4BDq5d5xc6Ax6pr3HWGK",
  "key33": "3VPo3XNoYdxRb3Y3KbnN1oucN4HuEydTG8sdV4zDVeQCQhCBCR9g9hfqdW1GezgVCPPMAtu3XvdfZY3FL6zv9WPo",
  "key34": "3o94gtq76uGf45mndvPUauymXvT6FXFmzn5zULxci4WY8QukAbdGFXcNPmWcXUncKTmX51BeEhAfXvimpmYbAK3g",
  "key35": "2mZFRYPxZxfwXSBLmz65bstDgoCYFMotjodtwprZLxHPLK81B4Vdb4XvdSSwhRCGzzeNLBCapQKWkuE1gh1Sfroc",
  "key36": "41hpf7fht61yeThf1izJWTe1LX6X4pzqZvuJGVmj4X7zdmc8cEbgKYuagFiuSgvKVfgXEUth7rgiaJp31ZhiKLjs",
  "key37": "R6Jw5SjXngpSYr96cx2vNBYunC5FY8yrQFYLtC4eEg4szVu7fSjE6rEBP6hHfbHEBWHWBAgCSyzJnS5b5qgECqH",
  "key38": "3kDwqJHpCJJMRspc31HaWyqAVKBpf9F26KKDNjE7ha1BM92dFqD5TZoi3M7orUhfyx5ahY5kQJtPSPP4guFzL8Ub",
  "key39": "2rsTjVMTXHi1mRn3pYvueoXXWApArtJpg7gwyvrwPYijnXTHC7MhSSERZCmztJ69sLqa4vFWk2SqRtgHGXFFa2eo",
  "key40": "3e8oqRJ2q4cTWamWQWFQvKftvSfSqn5KuCMCHZVT82Xm9rM1GhZEqaN4Egs6bkRHxPaxw8FVgSeDx3TE1FMkC3Ew",
  "key41": "2zoa9kTWL7gtY6HwdJpwU9smzv3TZeZif1mpX4sFaqv1WPbMXUaqHMdTe2ZDxiK8N7Z2rwzsWkJT95zcnvsVDNXk",
  "key42": "22SBm8aVa9qdDRmAT58S3buNtafXKTWAP8tkpXZbSV6DkZ23ScJCKonBxiCSiRvSpLnired97uzDFn4kMj78iQjF",
  "key43": "2icrQHsuhFUmm2Vms8XBXYVid5EfMeYSbZRP1UeCzXx4o6DEANhsShkYbYqf7VMsQH7TBrHy3hNPbinemtcYnVKR",
  "key44": "3zZgymaFig6W692fWQHnUHQiuaNq8SpywN5jccXvi63MuCuZb7CkdtzdqqGoU1Jhwtr86NWtiFfYekkAzQd5eLMF",
  "key45": "V9nkDZFtPTS7TdwogHFpQTL3b5MA7Hm5dBvXNX9jLwG6pZMqucsR4Eq2RaENyoacaj3qGuDttVS4gf2QPQinbho",
  "key46": "5sN6CVLMiRNmvgcZjMWComawPqt5KgXNhrJZ8g2hjqG7DZ759TiQqqaamN8qLL8F3j9frSTXw2yGzbQXUNKxD13P",
  "key47": "63m3NqepEUXJ2nVH2asx73CZoYJJCz9x4NzTPUqVvv1nzhb4pV3kEP9saDYN4aV37f7LDRSP6Yr4FYKmTNxiGt6T",
  "key48": "4Fyfa2fvTZfVjwwxjj83Z7gY2vBu8ifoxiFc77WShd2kCGkSVjXANZqthxcGrpqfjbzwMRg728gWBKUesH86KqbV"
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
