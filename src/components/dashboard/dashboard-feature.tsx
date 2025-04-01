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
    "2bsSmEUwXLowyZoYJmLExGmx8rmfVKfVcD1FWnJBPV4ZyaKJ535VVJkhhNN6ub9JoJfiB3g1rrt8cgDU5nxugj8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nV7Fxd26fLvGrTC1FnnevQJfTu83WG9WkyRDHvswxi3fB2S7SdWA7qtpg2eg8rAdPQ16MnufFmwwYCGsEcyx626",
  "key1": "5oPrNv1LbC6M7remZN43xr9tVpkjmTRGFwFqoE2tTjYUXoEuTpCTZNsvJeKdx1UWXaSvXQ4fpWYQxcEq1vGD3iFz",
  "key2": "33QowEncYUR1fDkNDrHyXwL53VxZwMskxEDyn2aoCkHJ5FNSYBdKeSVbSaMeGWZNcRHTfexMgz4MBmkm6avy7Yup",
  "key3": "2DMhGUTd6Yd8nauwucuhVT78tU17oQd4EtWrGFPGVpic2YfAjR2g8YmvgGz9cANhSWZNr1sfePgHNSNE9Qr3HK86",
  "key4": "GNBEce97NqpeDswDzA4yZb5pM2AL3n42zeixAT2UPZ4VRLLYD5etNu9NonK23MqmZjeocjSzgix5HT3oPnNXCBz",
  "key5": "3F695QzSfeDoTxdjar3cZqYfqkZJNpcwAVpbxLuLEVRy3dffGpGGRVCSVtFeip98prHGFEmUur2efHeJUF57KB1T",
  "key6": "2P9bkVHfLKp8EFh27bq1sTUfMgPVDfufv23FzbExeHWsWUJotRes3t66c5NpsUqGj8wQCmizyNqqnrqoCT8fkrfq",
  "key7": "5b39j8anLhE5BT1bhVzLmLT7pYum9mNVC597kABzEZ7aR1NF8YGCVf2H9eYgPxjRkbZhwtFAJdB345uKPZ4zEr2S",
  "key8": "3iLTH5kySTQfqsEidvYXD45A8WGXYMHnJGSYKYj9jntKxKgRsqNKC1yfec1u6jrvKZLphpfxrg5mGUfnrbBTey3E",
  "key9": "4Vnb6T8jTHeAAjftdfnVd1hgL5XeTPhDouwqeLCHG1pjMkwiNYNnnMtfLBfKcwiavYwQckkvBMWrDYNfE6X3k4rP",
  "key10": "4d6f7s9pm1LZaKjGCw2ZnQtDf2qX1hfz4QtEWPSGaktpPnt1Egidv4dAzi96pUy2G6zFXJdWFq8YxpJHnepqLh18",
  "key11": "4uNfBifE2QuKprHZYpXjTYmPeHhuubvZbWwT2GkZNq35iPKsUUeBu3vjv5DMsnPehUyEn9wMe8L6m3pzCiiadqLM",
  "key12": "43PstWDAVGpb4remfh45tb68PWDYW84gqmktgMvvX9Z4DFV9CYD3WNv7BNacsghXCULkkn8hXcCDixWEnatpNRGJ",
  "key13": "g3J1tvzTNiwAhip8XiG9aZ1ykfCY49WaEakeTE8frqgoyEmBjG4wcvTJGXZxt4RNsXGAirs2wcL9vq3QdCGpCfu",
  "key14": "3jVmLkmYRZYjtKo6h6cc4HJmGhpVzYDn2ErHN9w4iVE35rt1rUd2fhsHoG3oUjTGRoJQ3UQfvyACzqtUfwVzYq8X",
  "key15": "3Q8nDkkDi2ZB5zU6gXEswE28VCSCNFpnW6JVTL5HUd3QQrTsjz7MFbUpHSXQUnqRcgWxW2fCpGSvFghVPxWkgicy",
  "key16": "j9CZsG6zzaubrbYdjta8FdD4P8XY2z8iAh1aPBd7tqYFpS1fpyNUbfix9Be9gMixzEs7HuSrnHAhDJspJ1mmLNe",
  "key17": "xSXo2XXsRP8AucU6Vf65DqFfQdSyZoYbmw3h2VSc5nUPZKKPwYEiLco84SMdAgjryhwYBHFWjfvtXMCXj2T8JJF",
  "key18": "5nHYS17xnEbWKCWEgDGfERRcqXss7R34cGFVSZjhmcPGmc26iEhmNf4a9LpzbGxYZ28wR41HhsNgwZv1iZVN2wMk",
  "key19": "4cgZpY7mSgsyNJ7bUCkvgtfE4GLZvVZiQz4JAfa6DYqG1tf7CBtUydK6mMneEuEt8bctLA52z3sU9e3pd55DTEV7",
  "key20": "22ZuDxdD2n2yWodeP7aRUDeL3pxABfpQsHBRU6st7imwH6bYoYtGGYFNCE8qxPGMuDc8bacFv6GZLaRATrPMjYgJ",
  "key21": "2evm1WJF51RfaLjVLpMUZzGmZiaGHrbSktDdqD75hfRSeyARHpB2RVXZJzo8zVTo9t6enCHg1jtAAzA4Ytxpu1Ct",
  "key22": "66S71tFhqnku7UgJaCnG39acSd9fGeGv7Nf5Q3V4Z5ixgvSZf9eaDdNkzUCX1rzJWi5atsueEfrXquB73WThPXw4",
  "key23": "3G5wAf61ikCAQhYptNk98riy2JniGBeUqVPYn6XE7iJPM1fYfVTbjK68yh5obkV4edEbTLpsFP649j5vGkieUgKk",
  "key24": "zo6nbJH5EwRJSCkGDQwhqTDvi9xHL9tep7xEFMVh5QwGFxaBGVScLjKeBt279gYddyuuRBFX2F7U5B8AMiPNpVQ",
  "key25": "47Mortk7reBG5fWw6CLci6oeh2kZuJkeTx1uFdq9ij1VZ91uv1zp1WJyU8bhTBSdzRr3G9DSpgRVqSZAHyqTsqhS",
  "key26": "ityorRmNZXeY1xZADVFUogcsRQBvnne4sU8TnPbL2KjM9qg9n547T55B8Fnxb7T1qZ5Nv1iZXNBdYv6swPLR8MA",
  "key27": "4DkTUHRjbAF3TMJasxHMPDYFzTd6ngQSppgLhaqZJCMYMTRD7nAhn9pMbAh9xwo8a6daeeEUGLKx49KBLYGNyGjn",
  "key28": "5ZjvcCiw8KaZ4pX1UChcbA8AkTe3XhaDvtXYAqEeokE58fiCF1vkG4Nq4aAmgNs9KTrhDfPy5veGDwr3mvRTunbm",
  "key29": "kj5xdkneYhryph5f5EWrsV4CcRcpWHQ2FTawp1SjtpV347GGDLJo67SXqY5DdsKjQkxwvazcT6Tn12XtVQtLFNJ",
  "key30": "YWLcKFnkLrLA47ZPFM5e1RcWiHHXHLC1heGxYBVPcKSGDhH9aCTimDPiJzNrzN9qdj6HHDMHXU9JtMWU8DvcHW1",
  "key31": "5k4xtTiTFcHPxbU4mrnRfNPd5B1qTfH1C9A1kpV8Tk32QBGmwyfpRCQBZqoZBfiCr59kzf65CqDgyC8dPGG6yye5",
  "key32": "5r2RMKSYBWuHt1PKqjURatdcRn2aj7a1YEm5e5SQavNF9CfzrcQ61RU4JQZxfA6YvYNYohDFJpQfYSzuLxbpuF9d",
  "key33": "3Af89oUZRrDVTQ5PJrueaNNZPsHshkV3NaXLPUUL2sNGy3ND8Rec1f67uiJp1zDT8Yt9RSrtyEp9QjhTQmAW29bZ",
  "key34": "3YXQoYwuLUpzwhxxfgNrf4t29WBjH3Rof26EDK1qSS5XRsFwxwur9zpF2C8BBJhzZt9VPtvaHe4UmtJUeujdsUmY",
  "key35": "2DeDxhL5PvTUEMJojiVH2qDP46MckgHzUwe5cq9fDzhn3iJqdToxiyz8KSEXe5yAgARqVN595M9RTY4ecQjGzLS3",
  "key36": "4Y2FdZqKSr1PtQLcz91SrMUSLmVfjFDeXNTTGnS3NBCZb267aKfANRDDSwYfvgADYaxgEsnkD4QcvxrZSS9KHDXQ"
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
