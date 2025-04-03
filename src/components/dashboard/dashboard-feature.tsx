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
    "EwBnYZS5EhMbJtxsPBrHhGxQRNQyikqqLWQkffBVMuvuGkovc75cVBCDryLqjdYgCDEMxChN8AV7yWv6v61VVmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVdQsq6dAhk32FoWsw9GtAuRpwv9V7pJ9AjVxLYAenvB49vNFxXChYJWPhjvE2WFcxSTK322iGZCkii75JCVCvX",
  "key1": "4v49GFm1Yhsr5MUXq5k1kw3b4CqCiA4Sa4GyCCxhp6TqzxdmUBuv9NEh4mZBwqDAZxFeX91QXZRu7pFKDyirSYN1",
  "key2": "4qAq6BvTDg1moWdeu2gP8vrim1kAUy1kBesFBry28Hq1MG3RdLUHr7QJ2kepweAdHpaU4ctgFnVrZ2msqaBwSq5k",
  "key3": "3vQtNsqSPHGt6uLbvmt52m5YsHW27nTmcJbiaWp5xo1wxE65rw6LJiSRn59EPKgsUXQK4i5esUpsZUuXGse11cfw",
  "key4": "5RGCvCo6KHoTXgazCUdo3TBTqYZJBTNjWmiWALdzxWojo3yDdWr5sZtmMtr3EwKnoa8baenbnKpRLtVSmt9kJRqu",
  "key5": "3vJptGWLqYGYp6j4DK7F5p1PucX8DL1iAVfwwEfAdAu5mAb23vd29HNwKn19CJcA3fdZdKyDY2zDvxtLatGxubEw",
  "key6": "5D6Fnu9gCvVdGfUUX7T9RPhTAH9mcXC1jTVZM4StfsCJrJxZnYsw89dMJzdh7mKWPriACXAakjXSSHKQ9AZ9rfDH",
  "key7": "54GfjtzqwEyf7LjEok3zkBzCjZRyvKNowH3rDNRN7KpP27EksLE9ewZNU6A7YEpZUNUf1XnrnwQ14xTP4efmRoBt",
  "key8": "g73muRmFRZrTRhPZgD3ZtVVF4zZ3YWDZH55hAuWA7bjaqi8Myd4Hvi9cJvaA35PPvE2g5nssEdPnLAWruugUp2k",
  "key9": "571jpU8MLKZfQk6FtLM8ATjGnmXYRRMe3wHYEz9KXwzVbwQrizvMmwGh2vomVPEWvWPAVbazZyXgTK4bSZSkFiGq",
  "key10": "eqFKddNsLg6J6cjDxKaUz2LDbN2XKe5JSKh8gx7mNfjNfZKi8XrmtFTFSQ12DcAVKrwoczUpYrU4s1MaooQmDEV",
  "key11": "64fu7J2zMa7G2hA1HxgbEb6b99tmjBeCGqdHQpAv4TiqhvbfCo47yhSN4bfZkyDpKcmos1V3D39yxHjQqnBnoRok",
  "key12": "4GHpYH6cZahfcF3nivN76dxr8GrqpimfjQqQfic9mB25givuvobYB1hUaXy2e8Bypom9nFdZvGsh5FzPbmBuKJgi",
  "key13": "3HaGSTYmP8Ec8kytKER8dh24oawKZm2yLTWeu4QGpto5iQTv4oruUP75bjjzNxxMypZrzMXc5Jxiryuc7v2NQy9R",
  "key14": "216qBX2XxFjon3Gzxpf6rz3GfBU1ZmVM98wegKtY7iyK9fYa6tV114SrauT9xQQJopCMBd48CAq3RMV5BWXE3spm",
  "key15": "63GfgdwjSqSPuqV5ZupJTLYPuYp257G8PiaZHvk2Eg9tHhiCbbwu4S4WK14HBN2HDa8TnA8v6Z5Xrs78iMc3gk23",
  "key16": "3tDyF2tbNe3c76KWnbGtbo3rHPAWYtkWfSKbqdsmYCgFsKSrYTofUrGu3qRHUmaYFfNz7UEjajCWfug3HeAZ71f6",
  "key17": "3D4bwCNyrrjvKmH4W78v79jCRBRqrjtvJC4Nxz8RgtBX2gEWHNAMRgKjriK7UB31oFddau6xgKy3YHDYsFmDwhBB",
  "key18": "2ehdvCQshJdJ8fJApTfyCRJKfqqKvTGKQvfrL7Cju9g8vhB9qEp7B6atDRSCFr7NomPZZR8nDov7fwxU9BdgREkQ",
  "key19": "3ppkvoukrd8qXWm9jDoP9HaCiBaQYiVsvtNbdSf5Jc6vZXrkk51jt9MVFD9zeB6CphdEJNR268EG2N2s4M8kQdxB",
  "key20": "5M4aibgm8wMn86C9NVvPKv2q95jLWJHyQ22wEvQJBSFTTouwVDASmvN6tfPZzyBSEcdBBwDA3Snffn9r7ZuJoniL",
  "key21": "5PFHi98a6uA74gaGfrR1pqD7qXMW4wrAqDoeMcDtQTwBohcwssqnVmQZ396sopAqZebYsx3r2mTADUUBKBPFc2rA",
  "key22": "2YZuU5B6PWvzuTinkHrs2HGmJvgwPUwor8g1nnBQVdubFb3FmVfM65FcFRJPdigXFKXX6wK9mBz4hfCoinZ7Q7Rn",
  "key23": "3QjPxZdYB1xPwsSPdPMowweLGyzJUWpWGSyPTXFbMLE2s9RnaRjCtN1GCqDx2YdFt3tBBPmCSzPEokMP3ET6uP2S",
  "key24": "pBUGEDLYWyyKxm45Xu1jehAhTUg1dBVJQSjCZFVu8JVpmuZTRUo6dT2fbfZV7SjQ19JeE4pbjgbe7i6wbnxbHEJ",
  "key25": "2DgFq8CLocRANeBCxXQjHTxmLukbD8sMyCBs4RwYUadQCYutPAQYEw3E9bxLaZgm5aRBoB8E2mLgzKxZM7vo9nCh",
  "key26": "58J2dsg7u514eeQBXdZfiWYn473cYNETrGWKfsoi2E1QCJ3ek82RiJgB6T4jSwQjjzis8qw9J5anzrq9UysG7dL2",
  "key27": "r3GFNHCrsdEx3bo4PbxDn5LvCAt4kAF92eSE85zfcmdcpefYfedBwyTqudmcstsSjkAY8axd2Gs8ELCeLfciDiw",
  "key28": "4N6BgoqaazZ8wbb2SwpHTvFi4CDVqpAVgwGwcWZdRdTM2NUaz7gLpTnqvMYfCztzMHBWWRVFeptCuteGj7vawDT7",
  "key29": "3UXkfNSJ3ZbFtUc69hZN5g7J6vNukF4aHDvG7yrvLReCyuzqhpXCicZt5BQ7pB4P8cejFXcYVLwYn6tvzzYqiA5t",
  "key30": "53RaHJDMnDqHhozH3BAu48fHjHLk6WjhZqcvs5EnVjCssG1wNRCeaKivNtU7LzdiX5ncUu7iWJQYUmgJhjMk5aRW",
  "key31": "37m2UUHw662wdms8zWfka7f1s9RXscwD59RBL5133Y74nMUFcTZgxkCSC4THaA9F3pVTh4RGTaozvKGFP4jZB5ni",
  "key32": "3qCSur5txoCP9AiAxrtHUvz1NH7AhcR81PASam4HNHLV7niFPwF8GEHnjhDYv9cvZuA3imHwVoc3aX82Rm872hp2",
  "key33": "GP5As1Um7yLMTKUY5DvxEkbWK2upQQVfY8kUSv17pRt1Hc8DdzcSV5YVi8h2Z7EKJfHcxDKgG39rAcoWoFhRBsj",
  "key34": "2i4nC2XMAx9XA8V6t4FHsrNAkSPzexvAB7sF8kzykha1yaFiRkU18Hy41jgTNiqkby8DKtWQ2u5XaVqC4VqdR8Fv",
  "key35": "3rGDda9oSLVB7ZrDotRrtPGMkQAYsXqw5Hu38ZEMmBzqvfFcsD2jKucKgRz1YK8UoAcPVFFCx446z9GmdaufrKEx",
  "key36": "38SRsjTi614LruQhGBbmGDhWZsZC5cFEDSFNoNsR7JbdcGezXrX7aRJBeunPqychnghuWxaRZ4AD6FfgrEPqYXxD",
  "key37": "54i4ZgG1gGSVh22Na2T5iiYkRUhQUPptP63BTQUiQf6SjMz3dXwWm6vijip7nhLunE2CK9PDhfq1XSkqcN2As9xt",
  "key38": "21suGHhqzb2Se3FGuWnA858V1uipPmGPhxcD5LqGmjySj1hS6MX4tR244ipHraJAeC2Qq79zigrQdwyHZe7R5vFh",
  "key39": "5eFeYy3c845ZdxWU7aH6ypDqsZ7E3SD77RgnBqQaBC2JAM6ywLwP1qEMVTZzLQRJKzULdzmHkpqzW3zBddzgAZbd",
  "key40": "4DDSbapSBdfG55VkvMLTZF9cdPZe3rmzixKcCDggydaFCBqkRjnopufPw1mmsj6483mo64Q4MBYNkYJmTsy7x24X",
  "key41": "2m21kpQjNZU4uPRg1WpEkFhxhWqfx9Yx5Nb6kYRLFa1crVxsfbRZ4tV9bPqh5GSozgSU5ZEVRoTpYgVP8CUEAV3F",
  "key42": "2jfqEAMKihXPYB49jS3TgEmBPXTyCcwRCCAdBEMESv5PLfZUmh3CU8dn7BEpJf292crngzb2A4nZE15hSs4eK7Vj",
  "key43": "2UUdMx13BiWhEQQ2izmxsSrGyPh5mpWzmTRZHj8Wz3PWkYLbh5FobnDU8MakKfpK34dKnsZhY6jVvFPFAebavco7",
  "key44": "4Egi6UiogRdtPZ9Hce3Vdu6BxYxs3B5ia2jbHQioAo3jzqs1g73Wi42QqTRaDJQHiaPWjKMyo2kboEA1foAd739j",
  "key45": "3oGv4FQsHTmpa48sp677JRoJvy8GS7GdsRa2M4YzVajZyZbBh1NkaaHqxepH7UAYaytqHScQxYgWJpdEzcjpSBu6",
  "key46": "4yzWJXbactnHY4Z281FfyKrN7xP96auNws9PjA6zkFodCYRi5pwfF8syF6hqV9E7kp2rzEbYP8JPYWJuddGvxMVm",
  "key47": "2WLSbPCWYtCyEv6gt1Ujhb7QG9tEttFteZJfmCbvjT36NZZagBxrcscxK9fFMLpJQVvQZJgnwVCSFF9bfM8E78Sz",
  "key48": "36eA37525nY81A47T3ZS1CbGoTumReT8U2axCy56FGvUCvomTPv5ncHyQLPm6EQ2eVnph6PyEz9GqoYTNa92fPZ3",
  "key49": "4aAuheES4kGzSyWKkf8YZroG22GJsQ8hrgBNSYWrHh8d4s3oN1NEVCjkypr7jAsXQ4AECkBm2iHYR1vggWceR1uc"
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
