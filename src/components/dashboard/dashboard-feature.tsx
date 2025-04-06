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
    "4FeuSUEJb2gySTqLM7QsUvAqQKnRX43aYiE3yWw75A3kXDpBmB13ZY6JL4Fomx8mn8Sy8QhoA32e2LEFn34jnRKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3moG496Xx8QJFVjj37SUDABhiri6VPtK2Q6WueeATZ9K9AH2SYBCanMqdSK1rcW9ENjcaaeyEeJ5HZtKJ2u8DYw3",
  "key1": "2xiNWv17pwVtchw7EeeUmJxvtJfJMY3BbTfkRkwmpXeUtuYif35MfDhHE4ZdruRGaAmfoq1LPuz7zHZX9wh2G2qN",
  "key2": "3PzYneniiupB2R9zhu5BooeSJRPZmZGrLXA5d4gwCU4KVK2Md3YHFNko36ajUM7odneYawL1PFojEBjnXnsv6gfp",
  "key3": "4Af6LUUrQ5qzDe4oYb2ZdX5sZaRUmf7phhSronWwQeeKvPKzdk1sw75mXRJVpNp48BBQUgcHZEZyPnzffhxVi3aD",
  "key4": "2JCHx5PVhktkmbzGBSBWrVN7rCAn9rpkaovP6VPCa8CTWHPFT8oYuAYJJwuPgz7s6XuyspQrRrY7AMBY1gVGwcRx",
  "key5": "3LL2bpge9nkJ1xmnnS11e9ouCqHxUApEJQQyCxrv5LHX3nRMfMamTxZbgMYjPhDSn2joKgKdPS3W5ScsPrRqYarV",
  "key6": "3PBMCxhHqAQvvEMPqEhCQsxyRxL2VxqREQRevxPWPYTVwSW3Y9aScE4VnqD9z3uwAEEzBcWy2pR8MaQAQrPq6tZN",
  "key7": "3PwJw3w8JXehmQLpNxtNoGkbhXJ84f9wH5zABkWcSiDg81eER87suBbQjZhGQ2mw5sTjnwdvZgPovjR3GnY6E2ub",
  "key8": "wRSULonmmUCfxaUaMbGZH2ABePc4Z7a6Xj9P42ajry7i9DmhSb2ZfVRAK3btJswqKBDdtZbW5hpv7UfwE8qdEH7",
  "key9": "VLhpqHRcageTrihBXSQptRgVXUcSuzonKnWQPRbvc1VbDUuTNFiLB8KhSAv67bfrTcHF19SAZW2LiVyMDxrPH4z",
  "key10": "UB46BUfCmVqD1iyQUVDL73tXS58YEBahjdUM2Lb86yMTHN6A3fVD9MChoWtzVcUrFqwRNhpizV5UmKJFGVc5v3r",
  "key11": "4zKvBTMepp34HUAGVRMErdFqVpua2eQwQsKjzFz1pD18cMKXHrvmXC5DEDuY7p1UXxZcaW8PWtV76v2erqBUyrgH",
  "key12": "5qGxtNNk1e92qJBhMcXmWSzy1EwSyxrDScwugSNo2RrMem9dEsZMgKXYSmcPTKB1h8HedGUsC53HV8nXyGBcr4mY",
  "key13": "2rpATukHsMFRxCyWFxfAavPaQQXSdnsnnu6gWKLJAr6jmD9fdTz6HLbMLv8gDFtp2N9Swio9ZtCgzNZWi7NJo6n3",
  "key14": "2jzapHeYSPDHpPPShaW9EquSVu5uz2iY6kZrATjNPKCnMCY2t5FNvPa7jSR9QmfBPy7Y8i1N3vLzkgbhJT5F6eXj",
  "key15": "2Yz251agAkiG3RDtNEsARew463cHqa9DCfst8g5FDxZGiE2BG7VEQBvCxZVMVHmwWyRLE2SH71Je7hdkjtecVftt",
  "key16": "D4WT2FmDtUmSiPqLd3jS2RGDFuad8Pesga5MSK3vH4QPe6AvAuuSMGA9C3Q1NXGPcGUAkdWFHtYEsAHE3vXLHUH",
  "key17": "4bDLp6rdBVMvWSXs2i8E4bVCg7VRrtyRdWaQ1AtkkMetsrhvjE1hiF32ojFLJYzbWAETWJY75KQmG7fMnWaRhVwG",
  "key18": "j4XtmzsCdg6h2pWzsmPQNXJdBQyZihFgB15GqqbXramQJQZvNAH9UCwfnoRkX333FD4vNFtdqjV4uHDge2kvxBE",
  "key19": "3XikXEikqATfBj4K1rfJbnzSQ1SL5bhbCQcmDeAGB4BLt8vB8fbAptAFrQxkWARjqiTtkDGwU1qLbeGsr8mrWDmE",
  "key20": "mWUNdY3idAFmETPc2PYy2ATrxCm8mJ7ZPLitVMM5e7yXjQUwXr3ismKUYkwcHyZ7fZDFsKy9dAX8LgjFW8uKkeD",
  "key21": "34ycNQJq9NiXMgzyp4DdkSYpkzVpdGwsj7wZwura1vo1hmjAWK63HrrhjaJB1esZdUkLSyAjmfXrcdHJAsnaGaXV",
  "key22": "275bhMj6gnqEFphLo9wVXg1GkantDoEzU5TR7V3cka5WksYv1io1EeBuC5cjpXbA6ekP1d3UQeaMdHa55vYsM141",
  "key23": "3geU3cfmR6viSK6nR7nN9mWJrM2DhYxa3LG3EjC3WzD5JpLkWcG86FyB8EmgdH4NFHPJtQTKg9h23xm3hm6w29PR",
  "key24": "5u1EDXY7h9hJGn49iQ2XAXm4BcGY17nx1uEHBHwhZNzrbzK2BkNZFQMgB2ce5YBwcVpQqRsxauHWHKYzFJBSZCUF",
  "key25": "4ETQCbwz3URitSUyLn7gAdeCQgkckC2DWkN7ASNG6crzPwdUBDvX9WwHLYovU3euFK4iWi1ZJKD5KWLzYod1Nf5o",
  "key26": "2MTH2NQZmTTwFFzdu3bwjypadDgkhCpgr7M4GCo4VfSGhnXZ35kskVzo2Ph9vQKxhnsKcYVHYdcvnMiCKFbBD2tT",
  "key27": "SPQmxVJegsFE2YMwquJqxmxEkqKFf2E7DX1tuky16Z1Nadce4a2HWwCPMjEndrbPHPVaeRdSRnUq35UNLsaEo8V",
  "key28": "Uyij9r3eXyqodG5U6hqfifBjaDNQTyb2aNE28ZQsh41oGoHmnf5kjTnt9wKsuwVRqUQJCCcNApnLzPds7M3UwkR",
  "key29": "5o8NmJcUmQKTYxpwbRrxZmYRx198WUNqBKogFNua72Fzk4VphbM3Hay1eEpR9bSdiofZaffgYAZGoiEnMdkyVywN",
  "key30": "UnypMMtopKfi1NgzQARTCVSUVLhR9uEcsQqHgGVa4etZjeXrrWxyKR9eVC4wVvWjASKoAytQeRw6RzKutcXa2wc",
  "key31": "4wKhimma3rKTgixa621BZTYnqB5XzaKNm1rSayeEDzQxqnm4wQk335PEQnMKnQLrYUBBGvkx55YB9nVADjjikdvF",
  "key32": "NhgNREygeficWNdCjdgUKSMzDHAaSmF6iwSC3EQ9pdvUciuRtKMT5H5U9GVRwDj1zVYGo1RB1MMeYGdwVeg5mZn",
  "key33": "3JzeqaAx3Wew1i74PJVgZ1zMsqiycuSF5DhrUAC1wgPJfXVpjKsJGUVC9L3SWLsfCALfE6qdWtSDy6EKfnu3N7y6",
  "key34": "5c6vcjZ1jXZBF77oUJQEphvixMwSamAmhDC2WewhewT6dqwqbsqcMhH3aK8jajXGvoKYLC568frfNwAFGyCNzTXG",
  "key35": "41VZT5me5Eb6pZbqRePa87XyafwtkcVcY3pS3k2mvYVgQT3vwFV6Yp7ovZc4eWQZyS3AS2KQz4LZdZURDPeypSxo",
  "key36": "4vakxfBiC4HkqKpes2Fb4nX24CckeMf7DfX66gvhB18bEHRQqtSxfbmNKuonqTnuHRHvJH9P7W4ZLFmXd9UHYDd6",
  "key37": "9vsU6fiA9D7kswYndqcQGkf7C4fnhiHtS2ygaVxvEKCKqPHzDWKGK3htAmfmY169RPfNjdf8E7Zwm4aTVZUMGNg",
  "key38": "4mUZBcmkjiWk2GzZPFfYKZBFSWjvPmVdTN2wSw4FZKqJ8eXWHMTZzm5RR6ypZyU2ND3GGskjMueMC2wDMdSaFvud",
  "key39": "4CFukeYM76mGZNghePMN8aQkFNBCZFfAuxqzhhpdzwiU8qTJvudtnR51pY9wkhDmPdyiU27AHHiC2Wkusn2b6cMt",
  "key40": "2ryekfpxeT6A4VbAsStFvqasHg5NsPiGmwT2hX8E7mzcZ7DoCNarLQLYfp9328sjdrozeHpdHHwEmiad1zaPQEvB",
  "key41": "2A1g8r9gmFGiVUkkveKEimatnLzs6Rb614tdjSE7nVVpMKSStfigTpyEZzXLEDjVvsj41a3iAgcki2BASRxf1bTL",
  "key42": "3MUx2qz8287Yphztwaxci7bLZAFhos1t21TwBF4Jf63Z7DAtYiDTNocgFDQGxo6mSPJmcaDjYFBU3Hv7NHHQDYUn",
  "key43": "5AJeb4bfA8e58b1ES6G7y2DzuvkToEaG7PGkiqaMVtuAWm9ThHfbJ4R4XcUsRLQoBVRcVRdUP4bHhsaQN2WZz1kn",
  "key44": "3f5MyrQcGvpyJWkfYYPg4cp4UtWjgJ2tDTue6CUJeR5Fwd2LmRMvks2PxnpK9Eka4RqengcekSuipzxMTeLnxc84",
  "key45": "3sDnM8mppNctEPrFy5zg1j89Hp8dsodxtYNh9L6g2HZdmwt6LQnyCQVEJ7y7L1pHu4Qae7i8o8ZKsdnb8EVH2ost",
  "key46": "27fo95mGmLQA5MJeSqB2SmjUgZ6Wb9hWezUJtjdvquXJEenftn96fPjoGMwQcZ67Y9qia7VoNZoKA2dY1x5fUYBe",
  "key47": "2xAEtdsKTs6MxA6YWzkmpxyD6XCN8eQt9BMo7CAJhEEmiQR8SHhDSSpXucbkbrZXnLi3vYxXZGMXbS8nkoLK4GEY"
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
