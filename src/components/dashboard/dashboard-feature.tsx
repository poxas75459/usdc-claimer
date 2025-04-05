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
    "3L315ZBWJHRxz3qmzddNQEmJ1ANybHvM7rz2EANGqVbGLyYXZU5UHPbYagYYvMvBzDseUYMUwoawnEc8HamvBbzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tj8EarinGG36LPozi4Efc2jt5Wo6skWEkGdUymDP9MarCuGkxsbr2uLVLuXQ1kHL3baAjQdrtHFVFMKsBJD3dzF",
  "key1": "EuchQwfaJjSj2SfwSvqPJ9o4D6iM4pfpVTL4SBo9UsvsrQpncHqVTgyvQnecAbuDm7aeeGEur2GgyapYShDUfu3",
  "key2": "3cs15ioq9fFndNeNhWr6oWA7Jec62V8AnrVfZRSwRiZS1ViE98NZdJ49FKHn6QTGqyrgTxkLH7o9zUpCDxj5DaDp",
  "key3": "T6EjmpuBCFVx5HNjo5ZrixHZ1MoWqN95hdU7Fu21CMsZsWf1PTYg8AkbsabjkVuytz3qpMb5y8y3zRGoDSVvX14",
  "key4": "5SMdqgMPZN64FHGiidXLm2bywpjWBrYV2bGUB8KCgmmct5ira5my7CqK96KxJV569kwcqvoMPaKysPrAj7DZx8pL",
  "key5": "2dECmZehT27stkhMrthaRBqQZPRqBRgVXGWwckM2GGW69mYzFh5YZ6YiMKj14gBRMKzczfSugJGTZumShajt1Sz2",
  "key6": "2Gumcbfx3ZF5syPoGU1mZ49qwGCoTbwc4GxVqNUEXf61AXfqigKXnxEVH4iFC5Dj2rRSeCzV9hpYu7yWNQbeGm4t",
  "key7": "3NL69KD1LtB7jEJJn1BkQyB3oC8iDpDKiVaYDyVip9dc9nNSbYVW1m3H1G2njSLvC5VsUm3zojCFygSinbqYMy7B",
  "key8": "2sHw2PCzQpMKtvfjFCBNcz8x4W8S34jeHK3poPxtLPVZc5Pe72w4KrE6y5D5RiUbzpAb1UwPVvsDttFFKMzQuZvk",
  "key9": "wAcoXFELs2FbybfRW9yBBwZR1aa3FCRvWBDYFMoWBbiXeduQQ1cPkzWVHKqyZkmZLyj2XmSNqPxWLaktzk1c2or",
  "key10": "5L6YKqbbBW1gCmm7BBmAK93PQivQeR24QKDtB4YhpssoSq64jL8QZSoYV3gKA99u4GXWS1kmf26SaducbbnE4HAP",
  "key11": "Q5g9WVWF6qNSmg5u6pDezoPNcAxQUPPf3gDj9XDL6JedjGp3H3HCLZgBLStjDjpZCczzaDBEtmcdiTwDCBKi2yJ",
  "key12": "4851ZJ7Zmm1zhoF2jmrgQrL3RcLAZqTW8ytjtwabBJUFYPdxHWePhQUJyyaSBd8EUtnh2oPxAw37VT3CTjpAEvJV",
  "key13": "5g7Ds7ojYkcGpHDAM3WExQpRrvcWKg84ZcsTs9xMNoiUurMpjEGV9c53GkMBf5UQbt7KGKVe77XeanPnTpqAMDDU",
  "key14": "DgyCxeSTz8i5vK5wkbBTT59j4uARegaRyPxgVY7wkqeWPX6ZNoC1JHQQn1LikZChub5R567Yu127Y3SfdNiCZX8",
  "key15": "4ioGbkZiWUSS5numZM4tbZtM1Fj8zc1ma3xDGyHTbxNmXtqtT51fVLccMQL339aSddp9mK1k759MzZZaWt3H3Fo",
  "key16": "3Ui24RmjsFMRRpB8UAX2Py6c7aiJGaFvYTjYqKcoVtYCuV56e6Cm7LvSdzpHq7mAiueWJKGHb5LWBUQAPVu5n1ae",
  "key17": "pxA1R2MSxHCoAb5tnwYhvdr4MhyWr8ru5qKaQvxYktFxdbsyVhPm5cFtpThfQ1EU3eGK3J8D8q2fEt56Lk9HRNm",
  "key18": "3Pf1fcvqPUwUtTwZzBn4D4kyzjwkVM9n1ETjiNyhcF4L2HNHVyEDzQv8Hkf97hqJrqt6KFkijYwQqByTYS2vM29F",
  "key19": "QHz4gS6tNyLzN1ZcLRAH3VEDLji6axhAnj1vZpoh1oLqRuoQGqNiTmSsqQF7MSC5kZKD8XwFJaF1kRJu4b66591",
  "key20": "FebxtMytG3bPiZvdXM4KJe39DPaj5K3JnxF4yZ766NuwdbTjTCn5Vp4G6wPszZ9pdYi3DFYJTZ4Jj96SxaT3UT5",
  "key21": "5f5TJB4TAYYuttJNGV7jRXP8k3YKA5CaDkeHFLHtSrHZsqHX2Mpmvbo3Y4VetYDcZ38GUqDWCr7NkCbi4rhPgQfo",
  "key22": "4akTLPC2syKWfUJKEPnwJ4iBi9KgVCGAsce6SSUgCLYyFUWpWVtbSSrxXTJ9no6UPyf92TgcdWJrMmh8eBXiYWDk",
  "key23": "5fdC8ih84kQJ6McsQg381zZvZzbTyS1cwBfArc6h7Gbu4H9cjTsr8VLrwLkXNupqW9TJndyRKep8rLbRRMhF21Lw",
  "key24": "2oDL9YZAxjTchW4UZF9wEHGKdMAtNZAMtEcPpvzbiFKQLUwft6eerfxxEZb1WtCHQ8mcSbtELBsuy9oXjh3UtsM1",
  "key25": "se9wGH8Drx7SG8CAzw4uRE3d4MsdvxrVgh8C5KXneNqichDLzRSJUQgA7MMwYQ5HDN8SU2wLrJvtykyEVKM8tXn",
  "key26": "4GFWUBeDTYtCCWMqxzw3ktDJW1nUQYSZBvgftiNMLXuTp2pZLbwiSk1MYnP332d3UNYFgwhJ1ZL2EFtef84A71H6",
  "key27": "QXFw4sC1DVgrFF8ktSGhNAkRKhipj3FvkXuz79CDUzhLsDyvSYdxkXswyUfUypxAKYHL6yrKsGYgnsmhXFu1MJV",
  "key28": "5eEA9WAAdNdo6vfAoXYDbhkwb2KbCyWgBAn5NJ9rWfdTcN5CpyyNt3i3QUd7wX3UHw2HmtHW3NjyWcUhGi3o3DiA",
  "key29": "31Vn9pg24atiNDaTnuEdTbCboznwMmqdmwHe9kvEnQMtvYFKddwwwahmx2EFY73hVPgZDnS3pMgvRFwDY2qDd4H6",
  "key30": "2S4CT95if6CM1cKSNfij7SSKp3Lrj8pEiXn7RTTiS9NH9SXa3ta8rWaJMb8AgvsE7heVs86kzPmw85UNKmGwD3kf",
  "key31": "5zAVtX3Yxqgwai9m7AbpBtD1gyuBkozmedeKD3DP4DxwYrTQnFc1ZVdvJFBGEMZu61x1aVC16D3idph5sFfy6yZn",
  "key32": "2mrpgADssZ1JLrLaS8xELpjjU5xHVagVRqWbYgGthiE7rhAqqZYYHHP1QySfQg6GfC5SGCiEpTpi2hXqQiCcy8PW",
  "key33": "5XK3R3cpooCC9TeSYBcUYQXEBNVGW9fc8GpshvjBBRMdxa2bKeFqKrCiNASWDzznhuvRXj3H7LAqc2sYDpdSLHEv",
  "key34": "3fVsabUcEVVH32A5kGecJzj3JyznDFZLAD5B61CesFPCpj81j77HEcRRdpKsnMjH2cAsSppnFo9748cAmuBBuu3m",
  "key35": "4XFt4oKzLyLbyafEENRVQrx6aj8MF7na7XVHCiKMZqKgt8sx1tDrBG1AdMatyWuMbKHgGCrvGEuixY29JXLazCC",
  "key36": "4jVsFdc5chUAkBsUhTmmWUDKF6HqpxBcVKzcVd9eCwnraySgqDE7UsZAtyPWcGBgytnSkGqbWhtp5DUSnb54vkdF",
  "key37": "3xjZxZrdtHKsw2jhF6Apyomzevnpozhk49pKpUQFAYnym2eqwpcDxPgZwQHwxetN2UJF21jRcEwYsyHcFdVMD1zs",
  "key38": "3hacpJbMsW9aC5xJMaiNZq4FFRb7W9SgbGuphtFtonquEc4ep76d7gSaLUdnVP2TtzARiyoCvcSPtqax5XWLSVKJ",
  "key39": "4TukHLsP9Zz3xVWSZDp1aPDDfSeHwrm9nUa1Cr7qduN29YSwxhxAk8svYnY1AzcnphfkadpZfGt2toLkmRo1TkNk",
  "key40": "3U6DAKPjXX5zyC3BVfx4m89yKA6WoJrXLByrzk2ZL3wwHi7LcNFt2PQzjUDZD5BPjYPHfAy4gRpWbXENpEzZLUp2",
  "key41": "nxjqahM9dEEP7BPE4n78DgdSjXQkF3XS4TpTN3BS7rN1k7AqDEJ4fKq2jZBgf4rXsrDHZzy3trVP2MX5nDrE7ni",
  "key42": "5JQgJtZwLCBXzo2Pzyyy9y83aS2akwte7vWaVpKFgJxovfPV91QH1a7AzpX1WFwqxJ3oUWoza8BGpLxVRSZhYK8u",
  "key43": "2fqaxa2ZLirGUvhwtwMPWSeEMavsxrEvMs5AccieqfDEp2969XSUnLYUWgUJzknoTP7T1C6krThjBQa9qefZ2dm5",
  "key44": "2UBEVRB7cDdRerUFFZ4ntQcLnBGKerfs2jYVHaJ7pZCZBSLr9XVJZ7wF6zP2roeTTL4LpQDu4jZCuZcKkXLzP2yv",
  "key45": "5fYRpA5eNYBjjmkeioWjXMSFtT2u7PcJgxieUxwiLg1gnsZwTkgjRSV48UAMGjYKhDikvH49c4dCer6W3hefYL6k",
  "key46": "2jKs7WW8PAGCtp1gMxttXXnw6sUULutXrcPFAZ55ijUAhT3PZNr6zDZeiEAnEWnF19Ca9tN61x89VNdfPaTRu5zV",
  "key47": "2T1a28G7piJ4qtiHXESHiihCzBhd4F4URCuAds3PgLbT7aKLnHCe7ATsBC7XRJkkMfWJyvvzKBCsRBh78meahYAQ",
  "key48": "4zHPvCCWeY6LQWRZj5MAY4gZNAw38rVJm5qhLkKEoKDU6qHmRVhRPzc4EWhxxxdoyCnPm7pbCng1FmvXAq5PwNHT"
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
