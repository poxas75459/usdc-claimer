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
    "5KB2B9ZUobXwHGTpCpuM2EZyC8jScmHV3fpHrBtF5wQCLCCBZfbyLnUpnyDmHibxt94J4x4BqdQKkgiaTcMnUrbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7MvojevkcRbsNQPp9ce9QvMunbtUL8vuCc9Y6nwnRHgayN6gP1HNPHg92aDBeGYP8nYWbycYk1QUnQGqZHuxXZ",
  "key1": "3t6pMxqED1KS5ycLVEYAYhq9T7DaW842gjhBiq5inDGLhcbaAGCKV1yEG19LVQAMdphywousgtkKNQ4Yzyrpr9WN",
  "key2": "4eqZkuekTgAeekjSYQWEoYfrewem3Brr3cZWNh89fPgPM5W5t4TiBtmHEyPhS2deCpmTy6jRLyCzoit61Z7YDRxL",
  "key3": "32Ffa1VAwaG32vHbz8BCf7fmCP3AbNFGh1PLKmd1dTNCWVvjmNiVtjarFHntFv6GAHoCSBUhno5oemdQML268WYA",
  "key4": "5HKa69sKDdqbcboVUgNndkxAPbA3GLCUHRzCVkuuJePcg2JYDCSjUFBEZUW4ZNcZ14e2X2r8NS2YRfMDNedYVeCW",
  "key5": "HcMKJqGgNpqWbEaKDs9692X25KdxQiSbwqFaC8CQaJbWbJ5YpA3apK93BxyW1ez4ng7FeCTxsZ6WpZUWfh4vZiS",
  "key6": "5tfmgi1i1PD3K2N3o6xqjpcWmPgpjK5xgCJN8CpAiQAmnSUuezkv9y5W2jC1eG1xRo4KwDeercSiiiep4sJk7zQ9",
  "key7": "45ECP7ZKa24byLtMRw1mtip6fDkNKmaQLWhAdKxmFUcF5ZasQJ95aBvfg51myTXuko6sWhpgjH1giSR1CmSvmEUz",
  "key8": "2bRg44FVE65NiKqZM3aQvQgpcPdhvRLMyCpVSjh8DajC3CYQaf3fW19S38mBnjdVQYFcYfddP5XzgNcbhMcf65xR",
  "key9": "2qYtbNU4jxY6JDMQU2sd89X9NA7xstBoArNfDmquZgLBgnkiBrTcWskcZPMX9wpyxVxZVtAEUDHu2X1nD6a7UTRj",
  "key10": "3d7SnYzBBbu26J8WE91fwBBgbXDaCVxdePyQ3yfVFDMrbr6GBEbQBs8pmZ9SqrEGxroSXM1AkMfBpfLvCQ6qDQdc",
  "key11": "4p68BoieAoCmjUvSj9eeP3zaNoc4TujYpyWvvEahjkDp6S9UYWwF3kAEiC7NAJs7VeLsHhwwtTtUzyymCMCnk8na",
  "key12": "5iPjjLY97RfQH88reAXZCMxgwqHQAAzVeBhm3jpm7EBRN85S93MFTAXaWnz2y7HcWtvcphRTze1u3sTpR6159thd",
  "key13": "47C3jij1PXq1EBYiydewhixFX1kk6spEKXoe48sDjFjZABz2m2DfSBxen3nak8387FP2gu3A3eqdxGU9FoMvsTZN",
  "key14": "qoxbSeVox3ECL7cH3G4x9EL5RKzBENphG2QYfbaSguFj5HPuwAwcfucGt29vSviq8k1bWWCaNRue7Xqimtg9vRh",
  "key15": "4MZh8qc9dGmece71TYGhwczvuZE8Dz76YbZRTnHfL96StE3Ue1gKEVghFoxXMbrN4WMxdnSX671to2EHzD5kVimi",
  "key16": "4Qe9DZoioE8Mk6SogF9JZPSbBMUnG4h1iUEgstRSfyiLdnkgPV1zFfKFy57BWgvWnaKfXnqAb57rwA2MeJZkAXXo",
  "key17": "5a4FdwoifuyCGhtfj89xKQBg99Hh2btZG3FffVbL7TeSFbn8X1pE6yqHJrTBAJqJvhojPUQXfuLyM199qNbv86h3",
  "key18": "4d4irzX8D2yVZFr1RmUDJyRsNoBGYdCJgG8k8QujsFeV6VGEkCWJmPQwTtG7bg8zogKCGWpL97eJrwLH9KZDFCe2",
  "key19": "4Qb7eN8EsQCLec9i478TFT3C73eNuCWzt7isneUqQGDKpdB7v64Czuahf3CWNQh4Awjm6gArgRzbn2NwvBh4VWWK",
  "key20": "3eJf169JYGUaLGqV8b1XGsZm6Az4f9m6xvMxTjMecbfAMk1G2UG77zqFCfz7pcj7toLyfHE9JftLkXkcriipU98d",
  "key21": "3UzVdvRiR4KibaeMTfV7gCotKUpoetVCmHZNW84KaCQiUxyXcPcgUdniPwkXGTQmvTd1JXH1v9XfayzwNn1ca5Lf",
  "key22": "4jbDcmLFvKDqPchtCyZkMjQuSBmuF4Vu9HJZhQRyiaRdFDwkY7fU12ZTM3Yu7KihWkfZjZLxwg2nQu65LDKMw8z7",
  "key23": "VAe5UiVvNXuUidD5rqbkmThUMYicXAtWXQHcB24mKCV2mSvibkqqsMmkSnYfiVkpdvuP9UyRkwD7nYd2Lz5hTtK",
  "key24": "3Y9EDXFBcsHeLeJEdpdFfgr2qNvdxMcYQUgu5QnqADXNV9Mi5yWTBGZuCiGSEcnE5GyMhpochk4QVf1UoGRBDrur",
  "key25": "5QFtJkhGSezzRNmzDwSRAVaLScog7PV3wAPtiMkpW9v5knTYvKDvkYvUZ5EkCehZ81kxbQKHRgE7otw2r2sdSrT3",
  "key26": "5qYU3uzRaeKf2gDSbg2HJD3L44D4yNPZJjzQVJ7GKJeqbYpdoJXcQ7wZxVGwmWN5xfEtzZr2Tp8vD9hmZz2fgjYz",
  "key27": "5U1Njd54gM82ZcxJbpjhfCr6W24qZws7C9MisayF3cCevH269y391EwDXriWDcgNUGZHrwR9U9WHiDyLCfRpHoNn",
  "key28": "2oCJib9DFZQKZEp8S5QPwjAwsWzAPoANqsE9B1g3btruPUKCQ6sSYkRyC2b6znzCMyjRWKeWaiGMhA6XxKa65QuV",
  "key29": "2Va25uQ5ALTxD1fSk4Wb38PqsBriumPq2S9gzgcLrNBFg6khcZNhayeKnCoJNU3H6fNXdAm4TnJxk6kJD5uZLsaa",
  "key30": "2uiwkNB6mmUsimB6HdWBz855iH44pQz2nyCrNsVYaA1E5cqF4Eqqmu2E13kjba8PrBqtWuFH75fCBrEP6k8aUB7y"
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
