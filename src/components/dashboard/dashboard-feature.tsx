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
    "4vcWdGNjfyWnRHuauteiHnE6zbGb8KngKCQHqR9B9mmmag8zECGtebbiv7hgH6VYTxYAAEo64vesSdP9Va64bQpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vcVnpgGZPJM3BGvEaLg7NdjCaGDq1QVHQEVfhXzvJgzNMQ9XFTcGcJi9gtWP1Zx8aM1HiHyhpSHHq3fYNSeuvj",
  "key1": "5X6Uizi4RNU6H1sTmxMFLLuJi69h3PrCiEESeFdbdEdSsZNWSvGd6Eu9ghi7sVtuL7nhd6DvABL22MdhPrZFK4ps",
  "key2": "sFxX3RZ311TFDPBGTvaXkia8mQxLNzWvbFbqBFxdzZwWcAKp3E1jp34Ls6NauZPot3G7tAU3tui6XuxyFTaPrht",
  "key3": "rRzrCEFXLJ9WUyQyj39j9SgTjYVYGjNTz2SF4AVcbWPtGynu8CtPhFQUEwbS8svadUnwRgV6hsU9C9meP67GrSA",
  "key4": "4WKrmWauPGA6CyrTYoQ46Dd9zTZM372Mv3nT3xuVoXHvGLdgDgKCP9oe3QUgujrsghiwGotFyXhEHr1VZ5uGRvUy",
  "key5": "4nHiWcNgwDBdJ92tMZFE6ssgHz8pykJg1h6EU2GLm7fSQ8A2U1jjU8ikMNw8mfWemj59AzwTpnUieY8Pa1siQojn",
  "key6": "2yQ84aheiCwbKEiB7VqepU7XkUDqdHUaEtXkPiC4YM3RmyZzkd1ZQmrffUy1itQo5x1cb2cTTWSo5j7gF1mpgr24",
  "key7": "65hbbygiXNppovmREH73rsCarSMX7fxdbPzuH47oyJHXjA1ANvS5QuwgtB78FvLHNQwuohsjkSxGwBtycw936X1E",
  "key8": "5sHk9xiL7NLM1etxTh5qUXsYYErufP7x9cDePdL5fcZ8FU6D311TsnLvtKph1CLkFS5ewhxjq9J49fDVVxnm1AXa",
  "key9": "4SFKdm3oMfLtNAs3D6yEtNqgVSP7rX9p48d38e4r8naPBJ53SkgfwDUuDWgZVSDaNP4Tzx7Re6nrxUSumsow6vZ4",
  "key10": "2or4UTQiwpBhNPwp1uRjtcjwY2rJsRSpewHrLxF6HbqX7eu2AFR2sEJsZGisbiyiSVAVukR87KpTNQAx74HrCZYQ",
  "key11": "2QypZze591B3aZsFgqjpH2jWqNPuguofyntcQDUZeZdQtbA4BcjYWwYV5ZJeHyPNQGd4DxExzgeEPR226KeYmium",
  "key12": "54pSgK4PrA97EUvYnfgakd9zr1zV4WSecYTMbG4eMnHd6YVyrMwgmmGiCjnDqPi18Eowh1vQPuSxyYFtv4Bk9LJT",
  "key13": "2Z6puBfT4wKi52yBiVNgasskSrEvsCa8noLBqYLBY2SmX3f1Zt9AXLg3v5nUrutbNS9gFqARmZEJwFHCphf3Fxe6",
  "key14": "3dzsAifFchHsbEZQYtqhYLkwV9NeKiRXda2c4Wy4aYTYdQsLJzBun1phBf3nf1oQLErEctrFdRKiGGuGdNJA2cDN",
  "key15": "49nx2591dChv1PQHQp4nRiyL7WUUKD6NSskjX444bdP2JveEeNJ1HGA1T1T1Pz6nuZvmrocpqPLP9ySFPqJdStqB",
  "key16": "3HLhY4QEKGxNj9Ccu4rzftMss56h1L5SWz2c6sqjxLwwbUvQP3t9Bi8eaz61EEwxAvVFzSHgCNge7QD6AzK3NhoF",
  "key17": "2Lezx1jH3drJwQoV7psn5TvDsseHfkySFu4KnwoVsd6c34Rb99XWzAmzdJ9s1Tf4MQSwDVFx7R2F2pEdW7vAPKhV",
  "key18": "2FU7Qo78mmxZMvNJL3KYfdMQAr6F4yDWr62AGsggLeRdzMT1x9kVRthR66JJ57xv2uohBnxsrjz6H8F6kjvxGd5r",
  "key19": "5eyh1YbqTaUoHpCZDiCJf4ZkA5K7tCkcWWrtWDmxdEsFn6iSgDDnsqjKnsTfCFVVkcyuR4ft6SxSZYevJbP6L4nr",
  "key20": "7mGMGeMhw3KT3iKCTpGVUD9tYnV64StoxYQn9PXYb3sPTDJp54TbHWnJgHtPr8ymfo1hWZ7bsUPxr7EB8mXj3b4",
  "key21": "4N1AWW3NGvyXxxSudZZyb24sPMdT3dqWjr5wbk2xfBern9S9DSj2dcXHKU7uGTyMD7J6FCF3tyYjbSSDHpifBWxS",
  "key22": "22awe8P34QKKD1MXQdQticsDNM8J4VYNDFouepDoChtbpGfHZ2QDvjkP5YeW6MLyYc1j2dn2Q5eYmMirXHiw6AFL",
  "key23": "3Ds2WjAKyVNiC3ny2cxr8NjsEWYSNfgGYPrHpNGR14trms2XL578TF1j4kedyxfvSx67tGauLH2rXpvNswYVtzzR",
  "key24": "Lia5V6M7RQp6c2V9pJpfBKbKVMThxNeoJ9SKAWXjyFo6X9Xo9CdRRUMjTUAu5xznZDrbYhXG1g3azE1PdyaNiGA",
  "key25": "dpdgA8XP6qgWHmLDFt2kZJjZ8bTZ44hwLwAjLqg4r8kkJDCTW3KyWBdTky7M733aX24NNVHyAKrF89Uw2gkvyKe",
  "key26": "56RSeaUEdQaHLi5tWqpUpMqninh1Kymq5gA7SpzRy27cexBsSTpS5HxW1BqezeFA6qK6iX6khcqTHTF6zPdNT5fY",
  "key27": "2MGQvmJqFXr615J3ovwXNd7rZRyUTLqZPW1t3XGNQQEQzRNZnUx5Pk1WEXXSqMZkUh8q4UcGCPcN3E3we19cZqWQ",
  "key28": "5USear5DZdzMLQaKLLc73Q2CBsANJCkoMARrVXFazCgURTDE5czLcnLmoXihm7SfMhFJpPzmH63wTgXWCii8Xkuf",
  "key29": "3pb3muAasgHMj6GgSbmNQ6cG5HQedADaUBPYaAFsvVpBL3edDEv97CMktkAesQjFu5TA54Cipy5kVM2BVifmLLHA",
  "key30": "3cwJhnafprsEzPXxsw6kkRt8vfudmSxPMzhNBLpBV62Ba1WUJoiG1sFi22msYxxU4dWJVTixXUwwriq7SfLPuCyr",
  "key31": "5Dcsw21bV3Kpb7KcHZoe4uw3ZNApgf2oFoLEzkxfGuNhYc2BzNAyMPG6kkm4kRN2ZZRbsxSRo7w8HXWhRqKV8BzA",
  "key32": "45cU2uZWC749e2QqyucGkhRY7UPacTftskyDMvFARPjr8E3hRdUQCWv8xeLvoQSy3Hto3asHGdNRqufFFEQL8MBK"
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
