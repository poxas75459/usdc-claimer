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
    "2EwDb426jww7wJBeh7aKrXT3EP6UrfsFymAt3RRaBsCZzQ2TZTNQXv8oa4TnnqQgFm5ofSR3xqyNQF1VhFtPpcj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSJbkvsdeEhvV9hoC348Tz1WPWYMB6jnYdi9uZtp4HoTsNQAueBfczdmgYEDEeBfm25xATYH7T8chjuWMpTvWdw",
  "key1": "QdPFABm5CRyVBB2Ct5fJ4rredAmSdfgG4u3b1WuP3wwA9QkuNkcjcmiBuKV8Qjt4sY12Qwcf2g4txQQ2pVT4JdX",
  "key2": "4gvqQzDjEC1WY8ELvhkqAZKkrHWJSALfo9vfeQrgeFrmt7pJN5b1UDY3Ej4GBQAKMLQt75Lvvt6YKEVB766FQ9jK",
  "key3": "t6TrkCgFVTsY7Uja8gtHqbNfRYPAdxUAvN7Me1fch7pHBSsmRPN9rUrWjS1E8qWMeWJW3ZDYdJ9Yuh45pdSgMB2",
  "key4": "2kxaYDFnKs8LJJZ9SRFoPC3aDp3xh44XWKZxeKSkAaEYPL3pL8hVCqgEpJgnN5QmVwy3ZYp19BAxmXXdDiYT31RY",
  "key5": "XABrT6REXhWq3X4H7WqMS7UTzddec6zqA4436tHGJkUGovwFj4xLdm7qCJ9ssyhde2ksXheS8uer8HQMExoJd4W",
  "key6": "5khNxRt3ZShfLEppqqFD7FajrSno54gF19SGUatzyR8zDkuuBhwP2AknhBvRHDwu1HQbvAU7f6YuDrRTYLmnujyh",
  "key7": "38oAj6Y1KAhgZp41i4WR7BZFFHfWgdTPLicPnsk2hZdbTFBJ6fETNenupnh7tbcFUJUfw7epSXbVnTgggbLjVDPG",
  "key8": "38EPkod4iCposKvQHfFx8rf3HP9LZetB38NPVQYauGeiNwcxwLjFppqoyF78mSGp1cAGzSvWDTeKCQECiMxAWKKv",
  "key9": "LJkWuyipG9tp9ksHjYw7JhoEHYjYibyzPQu2x6QEHKYTzvutpyfoH5iy3CAFGnShWcTa6hTMWY8V1X6tBSW1JBc",
  "key10": "4RcSb6XPaLFxGnfNVvJMVfn5oBAPPD4FNQbyG9PE2GrWQV9rjxtYwenJzFhPHRcCpxnhDWNKQf3tUfDL3UYJLbBk",
  "key11": "Dqz3m1oVpsYYbME659QTEZ8x7pfRpWkk3whi8VuTM8AKWW7iL1k54a2DiW8PsiHydhAQWeFJExhujVVyJvrSipc",
  "key12": "4QNPChm8A4ACBaD7GBqzBVYfgRqpGeLfvqWLCLrDQgJuPy2krU3HSqiU5UeDt36mCuVHB3jTJLu2nF3b8Us3GZxF",
  "key13": "4co25kMk9qWnf25H5Cb1PbCgFvExs5pVHEuiiZ6m9JBXPD63ZsAsi2Z2YJnWt4D8Jnja6y1P6KN68y4FzDm2w52w",
  "key14": "5LJ6UPWGGsW28p4mpJEK2jFYbBw826sXMTgKcQqTyhHZq8dUsoxYfVC9rwy3TWW5niCZR7xQgMkkKSYVTrzrGRmV",
  "key15": "VsCFxMwfptCxp6hFrz3MrcCtrn5WL4DHc8gayhAs8Lj6Tyh6tSynhAgw6w7e6rT3MoECfGciq7TZD31NRr8QgTF",
  "key16": "4qvGNCVTcQH8GWpEKBifyydM5kXPa2AnuK5u3CCJbxEzBbUX8PyVphuVGGrRfJwsWENd9goNda2PhKFHDv6GFySg",
  "key17": "32zdd8asmbY64VwKhxxo6DB7yu9ensHdYEqrHEPcFF32ysC93EWX7vAugd1ksq3PppHmmw8EAhRudHRoBVZ9FVmA",
  "key18": "5GHHVuwYmtqQfbVuvjqKofqCAtu7AsBFFNJPF7CHBzB4ndyLFu5kXrkCevhTKSVaa6K3fbLcGeVcfro9hA8trHUS",
  "key19": "3tVRCN4gCdSbfeNnQLJv6wiBy4jweLQ2nzucVorHiitqhkWL3sSYNatYyk8ydQ17q5m5MiedPfLVN38UfwvXaruU",
  "key20": "65Zg2tgodnb8mkpdNRj1dcyZZjgA5Jg96rFXPxsmuQ1QpACPzEn2EEdjPcAZDQK81WzkdkALpuPA4nN2VXg9eqA7",
  "key21": "2rQGiXvw5PAWPutcBjX1mFc5AvdoSfPV24pak3mqrZsYi1D3A1RjropqwYqeg54cH7qZLBfJ4uWMHTKB5JxMBeEi",
  "key22": "5rhRgb5MF2Jh3TGyehhhTwMRdz6Q49tsxm3txfod9XvFCZWRF6Uhn7NYKiEPwwhMY4BW7PMgqvGSgRM5VuUaUKWJ",
  "key23": "2hVnUatdFvqbmuEifGf4cUn8BH8CzNUZtPKGaKPYF7NNwfcGJuSGxqqeGbTsPEk4eMcMhEKJntixQ2BGRmo6RnXd",
  "key24": "2GYT9BBEYHk7f3KjAwkLVPrN1xrzPcmb5zQZhEkDJRn3GsHpUpdKvYFK4r6Ht999r9W8heigTd6bo5DYvRwz9rkA",
  "key25": "3keRZvf1AjECgCGGQuy2RV7JwhAPXJ8vMo7CyrQmgBRxaU6YgUuofchhRWEPASSWz2X562RVB4nibQrig4uS9TcT",
  "key26": "3hGuWRsTEXV72Z5LGth4yFVpNTWkMXYJmu4JoxADBmtYjhC5Fuw64gsAt3gd8S48Nc58jGZtZhd81irwswCDobpZ",
  "key27": "KiJasuVoFWGAcVJkTkga2imxJafCAZXND5S8wj9Yy1DspP8E1Zwuagxj147uPtoayvAwUwB2Mbyzry2nGVveXYd",
  "key28": "GqUM4Y8MTLGAX8X6MeZ8XPFntqHftdTyXsomA8eua2khntCVC2KBDSMpKfB6VP2Cb61KTo6qT3MZNgJ2K47YNXA",
  "key29": "2A3KAcZA1GAhhfuWUyRHZD92FBoSic9BjcTiSdkx7fmchSmBDfHMMWTu8GsTQiPkcXWbPubB2ahXz5vezRRXraGh",
  "key30": "5K9kWMkDqqwxUmhJRDcHwRrAGTbxF2Unu5ZvizxT2LhC4MXUkTQEH5qjiL6F96jGgV1p4Qr5H5Lykvi7bYLpiirM",
  "key31": "4wM6BPWkfU8pjs6ypZDdewAiskjRXAQCRefQsXX429KT6HeFwKH3PuEZFf7EJTAb42ynKkmft8rmvttspTB8iPXN",
  "key32": "43KdpDeinhCHBsUaZ8TZN4CMxMbdfPbApbRbHFHYZJtofxgo7s1jMKtaa1cz9UHvyEKzHBVA5iV5BHi9hhoTH2mz",
  "key33": "35dtW6FxisRwgz2wYYcmmLEM11dhsK4abmvBU9gEVRyz22vRMiHjygwdWtRrRyedhR6GRRWGuF31SqYFQDSEkVi",
  "key34": "4VCpDcPxKwCBmUaH5uqdTF7awPzT7XTfHCCu5sjx7p3RdybmfGso6EdtuS2sVFDGCd83EWAeJA6wgRgknF4LxhSu",
  "key35": "2C28jqFf8FwbWZKTLPocvnyiuuz7aNfH6WLR45Euqzgxn1UX5j1JeiMKuKVTbR22xATj29otpjrpjBZoYysi6Fa5"
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
