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
    "4CgfKFRowAbMuzaPKGQZSFfXRafZFdsUmKAqnRQxFEYQ1fotJLeVkNLCaiNFTUKsbLa2P5w53M6o95M9bzbKoN9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NiZQua7i7U4AiyKZPDssQ8T44jz4hLWW9A9CaCYNeFW6V4PQrExBsg8FXXdKsomsxBpKy1326XLdRmeHtd4hexe",
  "key1": "2b5smroEvhuM5JY9GZL4jG414MQ36ZDMJskLhxKTiiYFxPkzUVT2oTRHQUkTZRk8gC6vDxdvH3BVt53ps9QUqNZA",
  "key2": "3fXBdrEwzQ7d6enDeyWMbmCHsecMCfDKxLzBMGrNMAyA1enaKgfcRrJnszuVWzPtbshmDneZHuTxTZXBr8h8f4YN",
  "key3": "2ZNc8MY35wfKZeJynfd5nPzmrzUbkHwp4YKppnYHsuCUo9598wmCwAppdTzLWkfxPCoumE4RAxkNbdCUEvvHCeK4",
  "key4": "4qPLgLU3rTYwysUcs6M4Mw3gr6PYSW7NQCWcNKAEFyA6HMg141dDEEG29tE5mQ8XXgCmddN3kZ5TXxETDTJbigNY",
  "key5": "2D5wr3wZnEKkUrHG15viq5UYK9n3tSYNCXYc5v847SEPpsaiaHRZ1D79G2ZMFEi4Lq5q9iYTMFRgsdvwjJ4jQTiA",
  "key6": "53JUAb9T3391chhm6Mz5jibfWjKD8jF8oDb66FhjHe4iPWxM7qKRHoztM6xUzG2NJ4Qwhc7XEKQQtL3tCEf7fUBn",
  "key7": "4LebqznWf1hHwZVW24okkER96qiik2CAADE6f29QRRhrEA2dZdmyZ7pAm4pAsnHDd2xHYw6hKCgBLwgWVcmefhA9",
  "key8": "5euZWB1Zp5prDtuX6KFEH1rRvmeG4cPCa5AHo13kqPeZrGyQ1XAsgmubgmxrq6tzSFHLszb2hY2B4kABg3MHF85J",
  "key9": "38AwpPfkdDiYiiVaGULpm98gLHGABsxCZ4YivyDKiu1w3TGzEUrsLwTVVoPoTvfGSCcHCJSQLe4JCsfrgHHweqx7",
  "key10": "34uzVFHMnAapStDXxeY1K6gaJ4onDVdzLPsjRdtdbZpcVwpwpzEq8zcAWhmhxziMx5dPm45C8JYY6o4BSuk3tDhg",
  "key11": "dUs6K83BmHAiiZpqc1sPTu7Agh44t3KFFtGXkBrqorSQwMbyfx3h81vhYFebB453fS5zoRoeV3cDPwaMNeE7xbD",
  "key12": "3to5M81Dp8rmKAZUMtSnHk8kXhVuxjpUa1ZgVQAn6i8pyudE3ES6gcYNqghELbnfuK1NcnPdLLrz4LzpK2N6NBCf",
  "key13": "5W1VfWZjJWzsUECGUisouAeSowDaPL5LE9UcPDLzsXi5CwE93LCjLjGT2FyjJaEx5wKB1DQ8zYvAsnrxsAU1toUh",
  "key14": "5BapWntJqwQEVMaMpvzmMkTDTrgHfL6wpjX5tiigRRBxTeGAzbhABsEvqdx4WxmT158AfAiNktGsQDsBMp1LH7Ca",
  "key15": "4ytC7rwhRaq7M9xdXrKSSh2BpvTggfDsfSDfZQtta6g8ywq2FWU7G6SVNYY5v4TPZgYEJDifvnYgtCZhuCneJJy4",
  "key16": "NruaCf5ZLHZgotQbCrNFJWD7x1hJcmG71X1YV43i9DrNU1w9oedHtDg56Xu23432C7cLBwDiTBndZDobcHKtcJ9",
  "key17": "478L1wSkAdTtfbFB3VTgXNYGgBNGN2QCFdSwZHXwFHLmNutHswfPwLZ5GDJecKbMZWG3t53ArweMgZEcwoHanh4K",
  "key18": "2PG4Ymj99qUAXdb3y5iysfN87KuD9Y71Dq1BfVi7xoW9DyLJFaZhRLUiFQFWzpNXiKYELEeYfTS9zT9AgHrzYouK",
  "key19": "DTKMXPe1i4BTZAB3mYkgQVd4nzNtsZSPJNKet6rmT4e6oBZZXLwp8geMZKuQ9jYe265Qja4m96EbQCtVfkSy7fP",
  "key20": "2b15vx8DiFRasuoAq4AVSPGkQpm1WpyrYaEdqY4VARmRdfGjVERw4aB6UTmzZ8S2vDBZdjcGayndb5Gz7gVNWg8q",
  "key21": "3iArhUGDmTZvkfRvfyQEVCHEucEAvWEk2E1iXeqkbnuP92SCpzhvkJhPFu3oHKGg2gA3NuXZK6Kj65hMWLpnc2uH",
  "key22": "63FGJ2UVhewfzcCpFTWgxGc5gdTSBVRNhEZFrse6SEGd5XJKg1voz7kzRQYPRg1sdDiYbeww8hxjafLXw4XF3mP9",
  "key23": "3Fv1svugdtxLHzw1sDrzxTXn2KrSPs9fsxSM91PGxRR2Y7YGqX7uggJDuDLRkN9AvD6EVu744zXkgituTDiS9HPn",
  "key24": "2Tm5VSMjn8wqkw86FfkxL2BcxUaXNsHqPeWuEppPHCa2gi47hm7CQwhJV3sLkZvqSyQijCGisg8A45FLFUSyMLY",
  "key25": "5QneNoa328LQHFe8uQTriHs2Ha4kbj7HP1ahcjr6x8LpCWnHoRzh5CvMg6kaxdxQ6QCGbVdLaV62SfBz56V3BAiX",
  "key26": "22TjKPC8968Twvb1nfUJHyCAecd2Kg14v2KFLUmJRpsc7wdf539JtXqMqZTPg7USeiQgXd5v3HLuaStQp7yUieKj",
  "key27": "df4mhKvHycRUGoqJMTrnitbcrY9aBUks1DCaaHhcR6gW94qE3tGz7bMpk9YvAebWwdjLsaZZn2fRea183QZqxD1",
  "key28": "wm1MWK9EHM1FT2TKPts6LHAAzhKE95R5hFJpHWPTsm494RcVJ5ziohmem4HTSc8XbfXgUXNnzxvEXE93fpd1M3V",
  "key29": "3yt8ia2imsoXRpNPRgi3wQEgjukA1bnU9To28uTsfp1P7HbH9KHzkfycjsg3dq9s4DENf69GR44VH2NqMJqwvtdb",
  "key30": "5LksWBPEiFeYjEHosmm5zgLExbQfE36R3xFWqbXxPmde8fpwzGXMLZWguUyyqqo8hjYxSAFKBakxnTa9M5Bv1RTY",
  "key31": "236mgkmj5Mc74i2J3YsfsSQW6dvvefNHWVXtdW8Jpe2koqi24nxMvZZxsnQzRGdesEun8wruFbj8UEWkex2niZ6z",
  "key32": "2pZN8HfUWr5MaqPpBuWhXganup81M1KhnihfB7TjxhEm118LyQLCRVwJKfLucRKdbmntQ3SDUE83FMkEk9hzdory",
  "key33": "3mvJon4cNC2vLqu4rRgXrF9FCVpTq6G7J8YRWdJPtv2NjYMS9uNDe76zSV17e1k7bqdgeSs2K1pmy3obPszhZUPf"
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
