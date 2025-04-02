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
    "A8mNTFgxUoyENcEhSLHdH1rVJyT62rCnRVJfiWW17E7gx3k5e1gWyMTMf7msAj1t4X7cMeteSUBDSFosayBc9FS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XUtg6rTiJB6ydCJrwQKBtcgspyzdk4nKXPtwWemaQmsjE6bqk1upUMDMGw2yhKsXyuzkJmaGiFo46wjkzaCA5i",
  "key1": "4DCbqoQibBUuzZ8fvZ1m5mNKd77F4YPNJWJUiU2Y6jxooU52NY6MJ4zHzW8CpfmcSDrG695XH63U5pKUfJ1VpqcU",
  "key2": "3PkH6vVejcieLiCvt6gxmG47i2QKawgifL9T49tSBwNEDqmy3DDxi4LKSrxr3dyyssqrca2rUwCW4Psa6gEe9Fig",
  "key3": "4YnA3g8HT19Qb9QamG2sQ9kEqPnatRbTcsVBhKbZCM9B79vXwiAHxRRQnA5oxMybdNbHRDAYKzTM71gSbLKeZHnH",
  "key4": "2bZM8vPxYDmyZkqDx4ruypkTqZgC6mazfFxeiXXeKYgL1ns5bE7Hr86mS9pzhcjysC2bMenUFdJc2p2Qc4dhxusD",
  "key5": "4nVo5sp6L9iMxGf8E3J7mGRzRcRqKkWwzVeyV247JXASWDsMQD33aKfmouEz874mLUsrqqyrmTkQqfvEcTB49aCn",
  "key6": "3optsPGQKeyqDG36WhH3sPTfCJNuTMn4Qke9CB4nMk7fNxBiwEZVwPiTmMrzwZmH6v3fngSnzvJveotXRGERWHYN",
  "key7": "4wazsyLht3bphwvcTswauZ1CQ1YR5VzLbznH2VsfKFwUFbcdpsBsLd5vaNcNUdwhkzqEmnWgfNXJxAEKyK35Mxgt",
  "key8": "5mBzVRLafoKnoySFzR9TVg1DFLjXPP2FyYQ95KfhUGYTHoNN4pjuPtHsJtKium31z3Vh8LHctxaSRKTpkE936JEj",
  "key9": "4LtaubbX6kcgE8YkHUwdkLHGMfkV6gUcukuZrXotppsgAfGkQLNLMW3PSaDLo8CurMidUpdntxSynjBysViUSUB9",
  "key10": "cH2vE2f7DL6XVJ6gQ2Y6bVwovwWBVn2UqtBoKynPf9qrFt8HCryYMXTYU5fGvH5ju9tKmsUwfPLetfWFB7gWVRu",
  "key11": "4F13sdHJLkRmCdKMg7DvVJ36MY5LRaoNJi6U3UMFRgmeYT5LMHJP9XWAM57Lp3aHaNQ3iwW9ncSKAA1G7QvRhJ49",
  "key12": "48eV5jwx3PzAmfTPwGChyysEDqMsZMsHL9DqNEYxJTepq2cLJ5jQY8Kt4wD6sgUmD551qTAZAvw3Kcek67YCcRuT",
  "key13": "5NWnijUEhQYNjg7NBUZRuMqT4ipEefrpz5ZojdEijPzSMgLY2zEMSB9aGKp2HSDnNc1r29Vdq7gxvgKrETYiQYNX",
  "key14": "32CAPGqM1Cp29Aev51VdkPWJAHti8evXsrJJ9MEVhwMfTkDzxeFXGkj5SZS9qxEccBVLDhV342fT2LQfVvqNUtYj",
  "key15": "3C2N3ibakw3maTAMi7jpbYRRR2di8w75o3zeybiFBH9dxaS6U3KxpBrQC1uoJAueCQ3saReSLMypDqM4RWt4WWn7",
  "key16": "33X4bk3WqZNSWy3ikKdpRuVQ4j8xmfYvecGwdS5YbjD44eKrDc9rWH7SbofhcZzatoJsi9o9CmgSt7HQyWuyqtGB",
  "key17": "5TRyh6gKdVa6kVsgh7U8EJYW3xf7JpoEMwP2F7PL8z171Pi92xj2u7atyYbp64dwbdr3vDeNDXVfuEnaZXCTgx2j",
  "key18": "3WA6i6nVPFZBmC8k4J6jYZwVdaFnyrDvADVmJWWuUdxNCE3JRSqqHYRPQkmoqWg4NUqMd69p8AzE7LF7uNvAfxAG",
  "key19": "2LEETPvmLUpDGWQ2iHBDDozwmkaBWVPscT6EGFNw1Zm8uwXZnnpTQD5nnzvj3u7nSWinebhzMTsXG1uX6ju4yvKQ",
  "key20": "525SBq3Rt6uFiTgXETAgYjhaREKfNeCBaMLa4AR7rkZ4utugbDXzrFvCXMLJZvs3qqFxgiaSsLgkbpYBUTjvAYkt",
  "key21": "XvjPwYguGhtm1hwjQvAdENziTbRx5si7xkJPetMDpAQgJg78s25jMxVAG32eFQsCveHfUCD95UrmbNpgXmYCPrp",
  "key22": "54cNJAfBswK5dJrGwGyv3Gn1psRZnT4nsYFFhU5YYTsxCdxobpp4eVhb5PGsseNynaUnSMb7t3izQwqWjSirzmk6",
  "key23": "5A7LFA4KHknQURD7j5NUaug1LXtok2DbVfbJN7Z6VPpEqfjCadzQJXrck99626vZCMzab3PYFuKSVVSvVYABPX1b",
  "key24": "2qmXpcJ7efbb4pg22pmDhKszhSUGik1AQhn2QhyjbbT3jZa95GHqcUpxdUNnph9MhmHTjzjZzGTwMVDLpa65eCRg",
  "key25": "5JGqsuX7RSowmK3x8vs9CYSBuZ4N9bB3wSfctJu7vgXNBfzanicQGTCxqUUmjTjrAZ6mNpwZrkdPXvWYCCaUMXiU",
  "key26": "3Yptms9K3k9fN4uRLM9osjVeLZikJnufmtLR4RNwyykbNiRLMZVoH7mY5U2yaCx3WCqZ2B9YgpEPN8po1i9SkwBj",
  "key27": "2kYLvgqitM91pf15sqzFYj4q6LwfMERgnnFrV8fNZCv5AsxCLn97unWp5WJ2h5xySWxNtoTjVongygb5BbC6QWUw",
  "key28": "2MrcnCYooQQctvbBRFSLy8GUfdqb7s6yhyZkUgDd4sVVv2BDdJoyXCrmvfiXXuHruyq9QfUgCv3P6iE6WMHzMJpi",
  "key29": "5YeErgwuaLpw4uVdmiZDnYzvfGpGFAnpSXB2jL44qJ6tdkJY5U47eQ6B2wwBRc2C6wRMjLG9NqCgshFv6Sb67hvu"
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
