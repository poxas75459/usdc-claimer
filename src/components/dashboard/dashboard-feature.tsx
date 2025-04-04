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
    "2et2iQJ3ssks8poyuwbdoFh6dKMJrF4F3rf9Wxht58AXugzniBB8g2BRqR5M2EX8b8qCtWcr3GFg2jKv9n9ncrQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZhJvVkjRyQ3ArjjhBuoFM4MAGvRTpugUmJD9qL686R8DUYWvFUtjZpn75w778e1wBe4FKDbYR2uJY7J3sPfsSX6",
  "key1": "5UovLRaYuDEQGkSmPPT7EeNGe2gUkYswrJfmqoYiF7M6k16MyDsSueLQkyTBmDyT6YaYXjtbWceRshbNt6VK3Fgd",
  "key2": "28zyRYyP4TLGbiF25YciWmnExac6F6oh415eg54MTRcbyGca5sm45jcYmG84vpbnRwF2VJ51xGZxHW9DxyBxCn9P",
  "key3": "3X2SsDTztXtpwh7wmZNyonrnhJpwvb8smjXeMEDLvHdunuUzETmS4bZEPow64gih6sVNYUmfx9shw7bhv3zLgNnU",
  "key4": "2xENVkCeyCAkkExPsXhCSRVTjabkZw9QozyjmhNm2LAijoBt9byR6BsAqvSujHXV9VWBnVPVJMRUVwuqZBMQB3L5",
  "key5": "JoQDzyprBxLrXYn8BaUVk9mDuyNsGyFP9LZM9NpbC8iFNWafuhYeVwUuFgJ986UdggWfLjU7igG53HUH4Caokuy",
  "key6": "4MdsCJzM83ezkg42Go8PnaTqJ5oZ3kYJdkKJXZoKFZUU4RgoXrLRQkFG8ZfUGe8K5uByCyTAcY3auke75BwNPFWB",
  "key7": "3189EVTLKMBca1U2k1X3tDo4JbGcrfyuz7zkWr64kg4w7e2QGPJkLC6STLRbjTueqpES8AdbQLdv6BKpawqK6kBX",
  "key8": "57tijP71arQDbSZh5UJwP49XdAfMy9kRMV3RwxfNLZxoyoUUPELuASCo59aTXRpwyk2UVGktiJ6xQfj93P2XJNEf",
  "key9": "LqN2K7yM1FdE6hGD75SoKoiTRgf5iUgcDghykA1RCDGo2pRZGA3CmHyKbmVPS2EXAQFH7T5Fz8Gu63toWmxDP3x",
  "key10": "VcKzL2dwH6uzjcbtNAy28GKvEn3azY8hZBk7tZDE5xjSk8fkcbx76fB3w7SP44HDgmiwckTuXAHJB3cnmomf3of",
  "key11": "2y5ybbeCZSBS1gzqZPCfhKrpLBMZYbk4RnExNgfwPKcqfwFXu1eMHgnMDyXQtX9vTCUFDSAqioz3okvyGPx2Mafm",
  "key12": "kHKXRYmiCyVQVqcy37ohbtVz1Vu1ErXaDA2yxBHn55LSpqdmsKY8WUJnoHZqceFh68PjmNPoLqYunQfV6U1gxLs",
  "key13": "2EeTG2xGWzqrTT5pSZe5S7Ak7dWaDvUiyy3Ym6XRsTp8AnMBj3rQuPzTh3nWHiGqRAGnWda4y22wVj7Sb8LiU34g",
  "key14": "4LRHav3JhSiZ2CaxCdnw5kFQCaAPn4tk1x8VceFGHuZPSad48JRC3QfZrSBDeiR7XGE3NJiFSEpXFAALA4nNUnPm",
  "key15": "4mKRSwhiPbaNTvRrAXncymiUMXm87BTSo6RC7HUbP3Ju5tqDkPw6V9cSQz5bBYK8yynSdBV2Z7wfMz4vpEvi6dLE",
  "key16": "45xW3P5NFWhFG5cSfeHXmsjoooNTHPqj4Z7v3H3tA6Gz9RRqLGAZo2EQawFWpCUqWhEYDMCU8BRGrmFprZTPLipx",
  "key17": "2XnzLMryMUQHVwvhaArUdXU8somdEf3oKXDcsZUc5WUPvHHgygdW7Mv4AgzoPvsQDFjw6ipxwp2TMEJNZ6zqVwVn",
  "key18": "YPEPPVbR3qNf5sFufggAWusEjAt1ry6N1rKpB6iQSYMxHCadQ8CrJmavdMo7xi47C7HPy2tN35qwCPhFSbf8QcM",
  "key19": "3T7rnKQe1pSdkDnkgXBqstrFkx52oU6945T2jjRd6vxWZRHwrJrB9YUJvStCVrmcahwUBm27WAJD4juGrq9yXwBZ",
  "key20": "2yAefxR9hftJ1pMne1qDUfyYJZGLh6fytGPPWr6v7dEt4ovW2SPLmMFUojSWiis9KWKK7qxratmge6DtiXBepts8",
  "key21": "2XZpxgSsuPGhAzja2kwi2Uzp8xGFu6mSAGm7dsZquar7Rypy3ARYis6Zi4H5d8gW5Q1FZFdWqmqEZJ5Huue7X3BF",
  "key22": "5drccrBwRAoZQ6R8T6tBfA9mu41YUsLM6VphQnmHqfwz6QBVV4oTCAs2yX6Q9zfhAi9qRqPFhsN4z9iVBT1wXJ9i",
  "key23": "3bi94t9Rv9Gn1ATQ6t6t18K8uVocDUcGRViuwRRasdKQ79LL1Cqih5xyTsJ4EsitMZwUgFJDzT2cmYxrZ3vwxx9A",
  "key24": "38jTBYhqsgfmRBmvoSyL2DBnQdQwv4G3vXHgd3hn53TLHGzmHGCDMQYY7LyQuVCn92smzmoduHPhZjQnzDYoLKfT",
  "key25": "3DaKA4mfoMUPogUGBcDE8VyHQ6JeZvXVmnkWLehxKpnLgCtRSPBtJrPBwj7K6DHyiXtY9fDrowcVMmPtHfWqKzfE",
  "key26": "4dosc4WGKLkudnCKnPpWLscUydfbtY2KggiHdddeHtyfaj83FodvrXNYKJjEM9dghps2jcJzcsTkb5SW34ncrax7",
  "key27": "Dz7rVq4EQinBkJaunpPWuR7GJ7ZTmDUozAoefp5Q5e5rueqZjcn8SDV2CRpkdsJpSHkMFG16cu2bAHrafFiXQSb",
  "key28": "3q7hfqeniEpRbC7GLskarNpLb6f3biaV3m1RFckchKvHVdPw4EN5fq5HR3DWw2Rvr5tF8DftoqwrJbc3crfZBVM4",
  "key29": "4nMGNFHY2qaYzVVgqvX6sBo282pxPoZkCTHVLVQvv9UsZv6mZVdXzJETxpBXFxas7Xd8WcdramVm5JNYmfCqmcRz",
  "key30": "2W7miiUgRaGXAucswpGiJkdjvqk2HKh5McKoCQRoHSWfpc6UXSs5C2wTJ1ameK2ZqorHjuFwKUMpSGJ5rGkU4jPi",
  "key31": "313cUEpvkDyfo8NVJfEk3MvQ8n77c46Hf9J9yT7dMNtdRgmbC65eSMLJb7vqVJnKG57WaHkzpZ6vtWJj6iP61Jbv",
  "key32": "5WM9KeNPeeaojvKWXSM7bENfhu1dtQAVn8tvXabv4Xz4kcHpVemRubkXWZP1VCk7mFfGgMEvgvwtZM2apDwxEn8h",
  "key33": "4LKctFxsAjN1DixzoWnNaJLibVLxFGcd9BQ7xR9aso4iC5pAT1zqfn2JDEaLxLyqxnHHeHpJ1BQW3iDNRhAy145g",
  "key34": "65P3afFbjRxWTsnJMCLjT9eDt8uDQHchpqmX8FABkq7FXrnBU7Kj9gmXYVU5AFLsVE3nbjKQozXheyzv9Vg6w21N",
  "key35": "mGWR7x7ea6AJV3y7EA1KjHwV6UrNMkaM6Lw4zb3UdaYgi85eTZxrhh95vHBjo1gih8Ywz3zk3j2zLdZpiG4EeC2",
  "key36": "665tXFZZaDu5dXBjV4RJcvmzHu8LaNTxYWdVoCHkfytbtmYdLRAdeptysyfo8yvqzebqt7uYHbFdwWzwTfgkp9RG",
  "key37": "4UGXW81LCfcHd1DuYtGinFJmCPK7RE6Yt6YNuFT6LdL8QGZVdeFiq9ysLgc19SEgtqSUdwQwTVF6AqdGLJ1XhiNv",
  "key38": "4kkUmmyvQvLT3WUbcp4yubB7yZnxLiobA1qJnpBYEjwUQoA6oZc44Jdx5e56GttuWtkdHso1UmYoJE1D5RoGzN8r",
  "key39": "4V8ARHeynwq14Jfvj2f5kbxe8BkC9unvg7y7axyZu3wBBb65E9dvn1NUvHR9djqYcSVp6nZBq7MftP4StSX5gVFA",
  "key40": "JTT799G4Da5K6sNnDGW3QVw4VNgNb6EUz3CtnRJ1fiPsKMmc2BpHNy3ojPwFZRVe1Fbm7XoHoKq2gnTbi7zYdt6",
  "key41": "2ugnwDhTBUM7SizJwkW71GFhXfADnEEF5a1cF7xu3XFtB83gKH7WH92Etm1qsjeUzr9Ze2YM4cu5uSuw28cYdWMd",
  "key42": "wi3mmbtGjwSjiBnzNHjR77V71y3TykypnB56NJkuMqew4vx9jTKsSKfqCeEToYZWiqoZAbv3vCjXm4Vm9cr4j1Y",
  "key43": "4L25XRFyS2M4pSs6tZvKQnGzaLRjunwGr6x8JSBkJ9vcLNsb97PPQ19R33q9TkDevbA1BbdhKHtqrxEBzn4dcN9H",
  "key44": "24LdiaYfk7NPMbDAP3Jx6Ztx69yBSkqNQ6NEcWHNbQ5pvQqU2C8jd2xvDQXCR2pyn6oDLgVYdTyqfmGHadvtpJjF",
  "key45": "3oS7M2FHEPqK7RkfQgdkSVfByVJde4hjVFxc5y5GPBs915Nzhw8oFSSq8ySv5pr4XJ2fES2wPiueD79EB17xEcM4",
  "key46": "22goVy8FQtXfG8aqu9nj9L2e2Dzk2CmJB7LhqZoHajLU1M1HtoX6hTQDhAYMepy1jb9rMxuiR6eL6YtjBhZkH3Wg",
  "key47": "4q3MLtkqw3eK9xGvfSMEmz7C5FSXt3seJk2fpRgFbWoWWyaRod4hqgEh1WLKK2D1oD9ncC6GwVszs165k2psD55f",
  "key48": "ApoWChcQZyF43dk1TrQ4JekmjGio22sHqNGg6edsv1AXhR5RHJdKvVmiUU2m2HCG2xvxoiFGT888bECrYVMvtHd"
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
