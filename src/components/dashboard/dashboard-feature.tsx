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
    "5iggWK59iNmQFjK6g6xaMkmVLQN5mhZpwTUM9GnuLhvJmhGE9UzcXce9e7ePipc2cravD3xotnW94pymveJwtAMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rD4tZmCTyjMF4ajCtA45FKukfJyTwU3j851MEV3mWuYuAmrwAAi1GhHmX5y59rYo44KDXhyzj63rW4Gsoc1QZY8",
  "key1": "48pJwCg1PQzhCrbz62EPhYUD7To1sbPV4X79RjzgRTDJ2V3434zJKHQRL7Yf7H2tJgyR6cSxRpnosgkYVDxN8K8S",
  "key2": "4M5Yxe1GJ5GSrCXxsiezozQ1JEHyePU9M3uoSSWSuFNjWMnQ8fANFNYJT5sFiXU7188bkHhdomLmN4UEfVF2StGk",
  "key3": "664WW4FvqASKWiAN52nXBFXb8C2pxPqyhyVeeXxKb156x9zcr1PJAHtQh95swAqLyRmZNU267CDf5rSKrPFockJ1",
  "key4": "AtXCKQdzVt8JtB5Ym81QZFYkKhR6ooW2reb4Y941iM5FC13TefHS5hKRXkW9PEdNv3TNcQ1JwQDitRqNc6CUPL8",
  "key5": "3rdzJ5bn6BmycPVmxA73WtqjP4vanuh4eJzKnu6NuFCXfEK1gCMefvnFxigyKCoDUu1eqWx45MeyFg3VvWytx5hg",
  "key6": "5PFddtvoWfmaT4BXcgSJ36hHZpiD6cDWXo18xZdLRb71dgf2nXTdGhBnu5WL381mtFJNahNHfYj8ptw5xErLy7A2",
  "key7": "4HJnkaBU4XwrcZT2D2yfMsPKTWUaeZ8J99RP9kJ6QUkWgxK8CcZknVzefTAP4AAp1CYNYjBRfXk1PRv54PuoBkBa",
  "key8": "2QTEXzm1kLqAo92ZCNr59D81CdJB5YFaMPAd8f2RpRMr7jsZedNactvWTgExqV257wy1khZBgnk5dy2M8T4zqEvg",
  "key9": "HqokEkXumxwte79zSF9wsUJvUcDfu3tbz5V3Zr4dpdZeCRs3dP1JxG1GskWk83Y8FZUqwb6k4XSb9BVFiJ9bf3D",
  "key10": "3qyKhPfEgofrXxZ9jYaN4pCV4ZYVZZvyokNVJih9qHTsFAxdrJBThohi88y8y6yLymeXwkFZwRu4uoVpB91Hkr7j",
  "key11": "2J6PfGSswsjKhrQ4NWJboUedKeWpPJgKQFoKCa5vmbiyMoZvV55UUyBo7Tj8qfRAgKUqH3Kk1K1A4p1AeQXeXRms",
  "key12": "5JkPC2QnSYS5QAsUBuDQWBW569erwFYLaQLz6Z3RqWQ49L2pi6MotTguYgaLdErBLTntMcNLLBkXF5nVNHZmcDXZ",
  "key13": "3QLqMWWZHnPtainVj2VAoGxYTVXHe34tCfvNbe1CNRCwLqcf8FKo7rRR6K9dnfw6jBBV5Cu2MdXpmbbd5kJA4hrK",
  "key14": "5up4j8YAjiHQCVxU4Bno7A3vSCUryptHFWcn9cDQpvqA4EzhEEAyoc75nuobHPkyn9Ehuz9aHhn8CDZzReoQLnCo",
  "key15": "4VzARau9jzsQVKuqkLk7Gz2VuNj2zYSShUCZuJnpVLWf1xH8YxBwxLoTdBdAtR15X4dMLnsqJfKXXdkuJxSwVuHf",
  "key16": "318dWUr4KEaCmg9BVuXaYDQVj1Gi3Xgk8A5aeHdwH75ayEd4Fg3iEmCmb2frTLGJcr7xwvSqZsSQHDEvLhrbiWvV",
  "key17": "5y6WW6vFS5em18spE3pLbbdcBen1YoRfW94621ap2Ah6VenXURvi3NG1DzUUQonUXXWFDV3y5qpCz2Z1kHnAHSok",
  "key18": "2TWXUKCFsxa8YXfmGbrMK1vAoppcYbW76dsvbf6REBFCTaxE8FThsYYB6sPrV2TS5rUuaiidubFEXqoajAgc5bE9",
  "key19": "5BA1pgd4Pk3SfbFAQAvuQHj1LiPKSqGmHF3gL7U9ee1HdnDExB7iUe1FA8LvU9Jyc8e3nGNeRG14Gnu4tdkgpXQz",
  "key20": "3GdUzkDWj1n5K1hvuyDRKimKymrn637fogFL3JzaKCrx9VrxGuDLxbLc6ygAz5opnxzBNnuN6Y1dC2Fb7ZWkY8cd",
  "key21": "Loi3H9RFNDkoBd2zxhBVkcbJPTjFboitxHe5dEjEFmPz2pm2HsSdwPsZyQbe9Sx4nEo8KHSFHqWed2bYqvDrmYJ",
  "key22": "4RkyoC2v2uyj6qgGnNQKrq4ds9RpK1HErDYfcD92rVaSwXpnbiAaJk1pPtVLHWe77HkPJYbqf67dAzfXKZpFK8pM",
  "key23": "4cZkNEUU8vTpP1F1fTZSWtQCxU4fpdW74t5ZzZNaeXBWWjcdjG65Xx2d5xPdcx5xuqAKCALsKv9tPt6LfC3WJz9z",
  "key24": "3pUidRgAdWUrGQsRSj7SkNiLLQUMdbEdtNF8uXFnBHWKxtnKVc1UpVVnopa4Pnvzhbu39CST5hwmShXpNupPJuVD",
  "key25": "5JYBE8mzabrAzgJDyen46QYQvMgEJQzw1KDajJnrQwUGT4fbL6VXBRA4Rt96khqLvAD9LzLdz8jeuGoFDCv2JKw6",
  "key26": "bRBSamtMdqnF91jMTbWft2zKcuLs3ABkRuygpuGmqAh1UBnvhdvAjuXzVmmAyBKy3SSkavhdcAEpPd864uai1zg",
  "key27": "XHA7y5rM9CqdPPPb9TpJxR28Y2YP5dgE89pEYEHuAQQJXtDfbu5m7BfMNSEZ7GnWJ3pq5xRyfVDgcFUkRPfovAv",
  "key28": "3rWCVt5A7HsVKz6CEV7zKyYU4G6y5U7MeeSYQDrUriPbgSw7U8symZ5NXCcPX7VFpGgS721icdN2JyTYhfnYeLnV",
  "key29": "4y4dQBKoHVRb2A88Ko14JALa69gSRicyWBsYxxLkWv5mNnaufLPjWJx59nWhnWwngNuskEWyDTi8NN4qXMbNHqyA",
  "key30": "5iAQiAurznyhfQQT8WLcwm6mRYu7Q8DRfDi4EdUwrG11ug9iMRdXrps27Wzi8i73UnzGtCnoQFfaqKLPjgYGPww6",
  "key31": "QnAUJrrRNXDNyyPrRB6wwCKPcdJ6Z8tYjzMSSTvrTkqJn1bmQzxFK8K9J7REv6PCoqPLe1kDJVAzLBtTPPdrAJk",
  "key32": "2bZiJhA6w2vsEcsrEXfG2y3LbC57doyA1eX35svm7n87qaqxhRme7QiQMMyS1QW4d1XBYKgA2s5W7ZVg8tbtKX7Q",
  "key33": "5LvNZdThBj7xiQokDAksv7csoUNWP5mFdk4FuXmjJTNPPXKFyYC6dHDbK652eeQ2uRCh2YVgck5tYSb9RW1ZKXa2"
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
