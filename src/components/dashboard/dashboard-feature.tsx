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
    "2bftcMYFf9JQb54AzTLfmhaD6DDHSUZBsDQuPGsQioVSx3sVxu1XfDnePhk4WEnfjc1sgTU6MP9WGKHxCvVPmPw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CaiD79ZseB4C4HWjtUVFkU1eiCMizv9URgnLJsQ2tqESwcroUdcKXpFTx2GVu7ReuKbFPQkfwdai27HBMxFKps5",
  "key1": "5o65gQZiw3b5WFGWMMDy9Yr5qL4ATQGD3y29EmrYi9xXP7z2Jd5KH3YzfXbGyY8QXkkd13V3LYKM2UqFWa3LaLNB",
  "key2": "3UqdPt2j5smJrCQPMvjrQGgbWwyTRLJMFdU3ZPcofj58Jc5LpTyiaPYwdJciCKNi3qfevh64ZiqhMqr1eQq7NzCC",
  "key3": "4kq6nmLDv9hQ4ydUaryg2gG7EB2Xo36ghfhCism94ABq1ed6Z829t5Qk22rzGq2f16JsDrwqiemagCVvEjQzrKbx",
  "key4": "5iXq7EULoxn2Zw6FWZdSKJJNDVrattGeH14QoyrnpLzMZeaD2dUYkodGRFvfbrJkfqq4gCRDy2ATTRmmxdpq5r2a",
  "key5": "3uUe3GSzq6HGg548xi4bnkQcJJfMmPrKE6XAfibP9HDHXv3fSXqKzSztfqkKFG1FbRamXmEUHCvtpnNsaCigoo2E",
  "key6": "61tB236785mkvKgcFFweEvAHsKcWzzTzuMBwBzfvwuEuE6iR3LwsqrrG5DmRcey2gK7vvQZthBzMHSf9DagdULxV",
  "key7": "2QDi7bUSNtK5vBz4aEBPf2bwqSDKFopbhLv2NcDTgmrjeQeumaDuR3AjD4T24mdgCGq1rZvcYuSkfQJZxd3JVa5m",
  "key8": "PLgzfKHxza1cdHbmNhByEZBir1eiJubH7Bq5CY1v4MoKzMFyHZrUUBBeDCywn5Q6TNRT6Jw9dk1taQf8g9CRE7Z",
  "key9": "bsjgGk3jQVzU4xtKjF44Wt1MuHhBCvJ7jPTiqQdeQhWXec4qY397GoFwGGskDkMUqKCXk5cabh1ES98gdJNeQcd",
  "key10": "23Dt2QTTGCBdwPMc8eSKqpUeT7KP2wjQzAZQDMu91WeFchREb36NMA3U3gmpTjzPrXXzGYwVaVvReVRHRPc9c6E7",
  "key11": "2eNgpow74K8EmNrmg6SuAkSeSYUQ1N6F1sRtn1uoYd9QFj7igWqcf2JTWrEck7eRrUobRjhkiwPY2F7bcyvA2VxL",
  "key12": "jpydmefzSa5wFKVsEPtQtW7zt5P5Dq6S5pUWKMM7XR3Y2GxtmNDQnN6yvYPWEUrpmBeW2KxXWT4sUQzY8NJCx1A",
  "key13": "3wTFeNucuWx2tDtmnmN7w5AFU2wH81wxxQUTsPQJimduUeiTL2qwQt4hhaDDhJqorhFSHCPbcCtidKP7Cs7fZKuA",
  "key14": "5DcUogfx2UujjcLEaMPguoV3bHTdbd8SjYbJ5knmic47QLMDtWyNQ2BVZVkgm7bu4mcETkkyvmhQ43URk5WVnVzi",
  "key15": "33M9wEohKM9uvk96bhvWnS46yTaVePiaupwPswTwX5mtCnsZmfEPrgtxH8CzE89xeKdF6FFQ9xhQNNktaiKSgETz",
  "key16": "2pUzifUGMH66P6JvdE7skqygS9aE8SHaBxXKgZxkFGD93LJYXxSmUcZ6rXYy6tDpzDp6UZHCyKccqpkJfyyCt83L",
  "key17": "5QjbY7ZDFTBmzjZ3gi1q9sycxJyHHRoQLrDciDWCzcrmWnhWMxWUuRpWCSUrUfSHvaLL2s9ZuWm1KSykiTo7wvBK",
  "key18": "4pqGXA7fJwbn6hE9aAPhmUyiX1HV1k6bxSiai8TuSXtg6zAbvc54GoF59HxX5zRL3AuiwG1GHkKJLJLYqviRDrer",
  "key19": "614GVKnabMuRX4YE9uZ9Ngh27Sp65aRosV77NHLm82h8wZUZEbVhZXggkBpPR3UFxhUg2Bo8dnrS8RAVTJEtdBaC",
  "key20": "aSsqUH3YVQr7JgGCWFDKo1vVEnsK3Rk6mcso1VCHuwQQfpsyJYf8jXesaaRHdgjR7WbdGenaqJua6V7NCcMsdv3",
  "key21": "57GqZgyenLeoWANmWJ5fnC9JgFJieBNUnHSU8im8cn4cFNeUAVYKw1UuoXQ2v9h2SxJLBB7GGVQ6kT2edmSbMZEo",
  "key22": "z1zBWsbDxnkL4q8RjREHHM9ny15HN64u6PwrkxACcMXJAackWsfqGKFdu1Q11g2EufZqV8b5ipf32Fzm6THd4Xs",
  "key23": "5G3G2bH8DgZJmuXYAwokFBE8FdiN45BTeRjwCWBy1m9pUteQW8MfdcaJbpDAe8JSinA5TKEPrpcZpQMzMYyCHkmf",
  "key24": "3hjy5hb2XoLs84FjyCPeGeHujASA9uDjwPsQwKTG5i4PNbaFQrZ8WRLq3cWPcNA3SBEYmQS2cKwC4fpNmw99pq9T",
  "key25": "43vLJovRVjJL4Rd32fVDoKmzHZGx24YqbQdL1KZgP5qqfQBHAYiXZZZnBuX8qCESy2Lfwq8Hun3qSxWEZFLMVgsF",
  "key26": "4WB4nqUhrqiC7oPdNBRTvqDbsDUSnTR58VMecQgG6byfbHepEeuDsTCMm83bvkxMVs5fXr71CmVhn9mzGQvenDz2",
  "key27": "4T48d4RgbNzPZ5dU6jJRfbECLzcYQRdov69TkZLadc8KFXSskbticji3S76RAtwdazCL3e2odg958RjjFKVpbEic"
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
