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
    "5tGkknZuSMdhSqbC2cMkdmLk31ckaoVERJTjUSUhTtuPxC2f332AAM52ouiHJhv5yNLgu8ZJXHRNFSLKXGHW27NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ySzvvjjw3S5ygs3xG5Y3RQBYt9bBEGP4FNTHVXCX1amH5UGmWsUtq8U71NHibYZGmKpGZEAfw8kcpDtvQQYTwFc",
  "key1": "5C8P2g8NHQmYH7QNtyzLf3iQRdjYS53dq1JeFebCkYL1AKqCKBEc299fvgkFaEfWkoDLNPb1CYV1oBvth3Zviz4i",
  "key2": "3FkJjCSFuTurmfyLy9NiBdsGTkFGBQskmaQBp8JayhxvKz1xB5QJMGHubx5gyTQ3Ad3iP3o2FhxsPLmC4V6D1uWd",
  "key3": "5mcujZhW4HThRMXabn2ZVCgoVjUmyAfmEuiHkzknHcnrYJybF8FQVZcERXa2CPrQTY2jbkCAnaZpPFjkwLcDoM2M",
  "key4": "5WKsRT9WgMiVVXVjcRnSWww6CXY9ak89h2bwvnhBFju7ViADp9k3STE82S85iNnMsC5UCkpFDb9thYkHzPUkY5XL",
  "key5": "36bVWT9uf5ZmmSom1gaw5Vct2yP3v2yFDPciVeE2vF7WQPpniHTu5Bkrb1AonUuXanHzfftP8qJW2iyAbPrDP6Yh",
  "key6": "5mpkhfa1Wm4g75vN8x9oxQTGWzXwHUFKd38QW2qWWjrp74LWHf1ss2VJ4HR8Q5BnZQfGg6x4bDmwWpeKV6usWx1c",
  "key7": "5rfMBBcs6d2KvBPrvhPijLUkMGiMitYrkjsGofcTL2txnMetbsohg8sENXV16gppWcaoakFgiSrYvy8VGM4z5awE",
  "key8": "4HjjzouWH9Ytmwrg7pqJiEt7aqcs3qwA9PoSJA26Unh2uT7bbB5RKFbrVouYYbeSR8mY775oioD7Hcv96ag4SJv1",
  "key9": "3ZuZc68f1NH3D9fAgYc4fgjqZ2XgbkfjTffwGAuyv83TxmkH7oUKUrFXMjuWGDd6RJYnkao4RdvgbJxC89qWgQRF",
  "key10": "4UAZs1Uruzx1PT7Zoy8qzv4U6NQsU8ArLfFA2j58pXv1RkeYffToWmwQCaggoG5YmWDTCT2Py5Y13kXDSaU7QvyY",
  "key11": "4uuAU36YdvQNDf2MgBKQwbbjGg6KJHPWCjxQbvtnah11HAvKj6YRi39K4brbHcbTvZACfGZhRbWNJwVT1T5iLK6b",
  "key12": "36h9kDoeizbPeZ5rcq8fmB8225NoDKAoe1BUw1vaPQ3kkHMctd6mcSPmHxPhAm8pArkaSLk91WPTAKuDmyjVMJvi",
  "key13": "3Npe2MWbXi5BnjwuMTBU3s9KRauT1i51WpMYKZhBSabRnnVgynu9GzqgbeKt3ajnGG8kpEAy9ru1zEPPR2Dpanam",
  "key14": "3JDocsFu3t3MB5wSMdcPsFfRESwht7Ru1oJFaM7v63w1Jr7UMwRXTRtZQqt3CZfS8C6qoFjEtu5N1F4sHxsUP6Wf",
  "key15": "w1CoxodHYtb5WHx8vU2b4twpJQtbfAp4Y7ug6G5nE7juEUHgs9G7zNWiZW7rMMdxWAXiMR5CftHfzhrjrtvaf2j",
  "key16": "3jtMTdgnzWDR72YzaNhrG8bfEcyykutxK2CUks6W4HDbDWkbx1Jnb3P4n98c6kgNUB8j5wHnWuLaejwJGfPBAUTU",
  "key17": "4PYsSPdR1vaYYc6dT3HURN8jSfdW13wGhb6iRAQ3wUu7DV5TLqu5ffqAQh2zefrYQnNTPKA2D1qeHGU8H8zVDGt7",
  "key18": "3yrAp2jmZiNaG19sBa5qGG7xfdmL3wd2zdhVQMzx3swUdA1puwLL6BkDeUap9mfnbdsMKKB93SL9GAszzcC7fCCE",
  "key19": "4Ve2kchGHdmpjuYbs4u69kXR9VwqWJvDWDqpXCiJH2WnHic5meE4VFpgqJbXM8zKNatq9GMsyQcv7RfRzLA4rpbL",
  "key20": "58or9jQs9VFe7JsaT3XTweUe3UBA9auX2ag3mHmBzmTfkDdj65bKAFqweJ6p5dpBj3Lvmbu43fYDKqcTjocjm7yb",
  "key21": "25WnqvJUPKDkGDba5EvsqXKi9g28iuEkBuqXGP6L1twJHVbd2r5FVhKgdJRhKejmar5WtGdkkd44CUzaqpNvtDkH",
  "key22": "2EwaZGR1ibQrQVmTnQ6f4RHouQStL1FKqhZQpjkCDAAmmccsQi41ohKgmqLcJH8pBaY2JJC8X32Spet7ggRbrqUN",
  "key23": "5fB48kLo4r15NiTtiUHnzu1GVtLWDhxiD3LaVk71WgHyGdExQgxACWXB6chKUo4DCUuwK96zbXMyLMPeM8nYuy3i",
  "key24": "3JHSqgjQEP9e92fBGe2fCrU2JCPL7gtKruwtWiPkxPNAHz79CwvsJ5xQEzeorbBwRZLHc2DK1z1tA3idavbTFyc8",
  "key25": "43prnfxzcN8tHn6rsSFvCS4aDLq4sBMpJG38KA81NKzfamEHZJqqWDiXJ99hiHnahPZWi6YF8tKaPGLEm9WbyhYd",
  "key26": "5RNRjcZ5HeURmmRQ2YDykFP9JCPvBBANb1Sf2UmoLUSb5tRkVbg8DJ3VgnFPLyH4kkY3RZYzchSVrE89hrL23eag",
  "key27": "45o2vcf3GeFcjE94oui2SHgxppUfvk1gpARN9VEcMa5YjA6Rg9E98rwoUe5214vDWLu5NXPNkmrNqVcfD8HBc4pL",
  "key28": "m87yvsk8Rv6nAk6DRtdQ65v2aCxaajTTouBKqDFyHvrzHvrtW574PWBeLX9QFYnWsZay7XJnfHzFp4UUH8rQUy1"
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
