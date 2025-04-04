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
    "vp2FWQmsuHd6VnTSMhHKKKQiRGeS2EwAhf7s6RytDRHFdkoaEECf18w7zh16J9FFVw2KbJubGh9ekDmTd2ezF9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kb2MLTBefAmmEmubkmEQiNedE5UMyP1EiG88NimsQ62XmTapS4XywBxjoa8fEJpckPePKwPNS6yJZC1uWNb65FL",
  "key1": "56fc4WXda9aMVNQUTkfUkw74NFvsqfoSptjXqykas3qYmXop6b3E7Sa3xjuRAHdLzbSNMt43TnZbntqRYdUBpWCw",
  "key2": "2Hb4fkaianQk9PmyV4VZNKrNPApXPMuouxQdz8EpBfaZESDJN8Y7wk4PBhu8peKmQMdJqr2GkJw1AR8jM2MWY5Hf",
  "key3": "5deSLM4tHhGfnNVGEFV415pcdrJXuEGzn1FJrpDyQapFEBiGdLjdbnPpmoiwVg8BwusVCY23onnbJeozrA5diMAU",
  "key4": "2anKGqota6ZDvuG37jj1GuCqHR9F7yjdUNQT8cgQpGVbMGhBGNMq5zm6mMUNYs8mYNMtrmpK957ezBfdtfD4DgRZ",
  "key5": "318fF7vhySSDrZpEt1CgbmKwTHMMhRu5BrNVD192kGyTsj3Bnm4sQWCJQo2gvM3KpMzCDiTogaEFE47psmZx6s6B",
  "key6": "2z8M2FnF4K6Caxk9mRXDh1b9v1mzKvwguiykBMWeHhLKXENedADNTrpbsquAtrVehqEA41hHmGuQpqyR1Zf4MQab",
  "key7": "5MXFhg2hGKWGvPZLiEomj96AtMVojhHcZa1AyTQsTEcv2Adzz4gFCATmyCbo6UZCv38tzAgpu5ebDB5MJxC6Qor4",
  "key8": "4mVpJMpfJhgeW3hnJWx7FamFuNbTB9bGK1hUzGeHtwTFTWPbyuQ7XoiHU43E1Y4wYR9QAYxpF1EsgkwTTMpo8AGg",
  "key9": "2RrWXXPaYX1pd6oZeSaW2y572xUdH2PAuaSHpiywcJmsdX3i97BQ3jaVB4d1iYqMqYrenFVeBXTLvSZ5GdL7Hhp",
  "key10": "2Yq2945jdbVd5cC4PESEDAaXguPyweJ78Yy2pf1641y329RQPPhFM7KxhqCKZ3GFJpMimUUkGNxSfFH1YccCF6ny",
  "key11": "66krTXRGs17H9NeKJkwsgf6wxGjLYYchgueYdD7RnyBQnn3WYMBoJEKDBvHRVNKwrzWunpgqmn6G1sTNH9aJgVHq",
  "key12": "5snDeX2heqe6Ns6t1HBJbm5gB3QdBy2EGtmaYfQbrNuVDDSmUU8BrfjA59xEHQSozAMnDjcfyw9aU9V1BQDWaN3U",
  "key13": "4aV1c4myS9SoStoTpEnz2M2CkM2Dsk32TJRJVtNSeAzNBiLw5FCNrTdSpnzSaZcgww59TGWYE78nENoR1ft8vRvj",
  "key14": "5XdTHiM2FKkgEL1yvddn4c5U5iDUHbUX4QZAtfEymBbtpJxfnbRsKzY2LwkzfSwGfu5D66tqztFbB39d7xHqerYA",
  "key15": "59tZWAT6q9HR7K6EjrnnVXMSsDV7YsycfvyEtf53jVvMbDRX8JT54Jv6fVnhRA5muqvJLatR43BJSAvccTqAfr3m",
  "key16": "56Qgza6jpSRVHxk3RGfmFenJKTPwFtCEwNsDgqTJ787f4RUdkz3uAe7JuLRcVbfpCj6xmiDtmG8zVgzLu7CJErnM",
  "key17": "qcbDigxwAMbiCZJsNBUHHeaTrsYej5edzNcKmHxRvuo5PB3bGARApk7NJnEw61wuGNyFUGiM5dBcDRKe1NLhxhf",
  "key18": "pEA8pXTp7BTTD8X4vhE5AxnJkbUoyGrvS534jaTPLJ6eV1U91UNa2UvXZexaomBveWRRGz6d9wzJLCSbXApnMsB",
  "key19": "3hSq9AKkfKYkMC7Tju6mVxkJjXXNma429VMXZkypwcJ4ffcUoFzjbcPAkrUAjXAHqXC9hy65vVhjxpVdDD4WFmbY",
  "key20": "RkmbbRUZvatL62wNZp95VganEfBqBSwCkJYtVUgDo36krNEdXxiy1bkxDqfyKikmQLStwByaNQb8dwM44k4ghyA",
  "key21": "35N6UbXAdJ2YSEYM4nt1LPL17hVRkNucseNkiZSpyzpCit4FxPeGMn6jSCMZdozgdKwLWRC69yiUAkBtz8xkdCPB",
  "key22": "3hTp6VavkcaojFfp5bCCYGCJzrgd8YENaqyo5PdypVd6ZVpUE4Ep4H8tKE6YiZEFUbeDq7bnRj4hSE4S2JQboUX4",
  "key23": "2n5cRre4w2sPCGJPvz5UN6Xh1dSUFPRDEnGjQXp5zXMYpdasx8rpDyEF6kYbgKgcRoQj732iEpuXW1r8YMDb2w3n",
  "key24": "z3mEvyiDTzXxPaUHn6X3yvRKmnLUk1D5HzfpZfmEUc92xvZj4Wg4n4aoZ5PWpKYVoUDsK7EpTdHEsm72J3YPARh",
  "key25": "5dbi8XUTxTFR6kgDruzPqXX4hEbpjFAfhwzjPce4Po6nBtvscAcUgWdtPDv5Eph6q23hbPugsFYGEK7SbgA2opEF",
  "key26": "2MNMNZVqXmMUyN4wrG7ebNJsSEHYdHp5DwN7Gzc5SL7DguXZ7f9Nki71QcQkRNrkpW1axY2rocTCjYahxSJUWjyy",
  "key27": "4kbkVWSf27E1k7FBjcPd1QPmEPVPXReSNzHUjt5GRiQdVBhPE7xk8GVgU2bBENPKHuN7fnKxHT9WQV4VxFHx9MGr",
  "key28": "63osgn54DcF4w5f2sd4h5zJySgZpDvtiEUw7qqaSjEnwNwqLB49TZSyEZbpKii7TwFhgQPVV784RqDA8iPnYdWjt",
  "key29": "2n5ShZsxoakLte7AqrD53tsVq2VKaMwDLvmCaVGjggJJnPAmaFhrnsPxGMGgotYCRkShh3KhReSEsLcd4WBzw6Fa"
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
