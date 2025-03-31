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
    "2eYDD2gFCHNTMFVTcXBhuTiCsPnZGhCgz1tPdkHhgLbYbbPCcYJQhXh7ZQTUT6syQuNPRTdRzbRZRXcknhwECbus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nfW4zjtjW8jgvUJEwq8QyBr6B7MNdTUVfffNCGhaZnAVPEQLCEzoyeFpPUbpQAkZzevHj2uVPUfGx52LsrVw8kX",
  "key1": "ZLy7BvksE63mCbVeGNkWRJiu6cfiD5V2g2VsVtcnAFnmUYYSG65EUMikU8RjuJen5DJEDoyttfUXFgjZKt1XsbU",
  "key2": "4BRL8Dt9KMs77c4vVfmzQJoHVKsrwACPAAjFXTNRexzz9Ah82F846pkRbvfUFVvWMPEHCV6wf2K8aAzA39uYhS47",
  "key3": "55CR8TimfSqRG9x33bM7cN5J8BVgnAzoyTnMqyqjKpmnv9sdMPGZvb5ybhfhbNCDn3XVYFFTLiHhRfHXs7YDZ7CB",
  "key4": "5UMA8CxW1iFFreaS9kzqg5KACeiB12Xv3hzYS36kE8F31mS7x4QHfLsfbs7DRBvvW9eWKC24oAScpwTB1waDMMMz",
  "key5": "5oNqGrBoSqC4znbPAswVgFTo49Nv1aTydxPgnvMJihURjQC8yV8zwgpASdH7uA7zvxBeKhFE7jCwUaJGVJ5UeeFX",
  "key6": "598CDBnXRTrW2C9WCKpdkmtDJzyRBuuR1azjhqnbuVXRp9s5Fb5fr9ncM3EgaU1HmxpkA5rJ8mZmAE4i8BFU7fgK",
  "key7": "3UZ2EuVy3uQizCgG44JJWnM1jaHi7Gsdr7w6T8hqnLJXpybaosFGk9rTgA4WY5Ky7dfg3FrKpYeeQkE9NYh55yLm",
  "key8": "4hcQtJtV99shxrY87mKgSa8YpKqiRJRYMxRGPbkbnzqeqkGzHjbjapkSanYGMLMRYtwhhiQNrpVWYoEJp7edRvHC",
  "key9": "386ob94pDMY83q9Lga29fPR8kFrTGMCEQe1qKH1rmoHnZSXn5MgHShd4EadFen4fArCskEZGv1Pb3kSUXSMM1aqa",
  "key10": "2yzUNEvkWR3tEUbeo6iGUukV46ZAuhkeUttwSxRWse9T9rYJkbezDEKwAb3hUExe8yAiPvEdpfZbcmbHhy9mjzh1",
  "key11": "3MsGuyRfC6pyTtEtDg7FsVrMp3ir8qwSFWsbs6eUrmgpYUfiihW1rJiSDrJu6JYcrd9RZoPmFEBHFGABbksZq1Vw",
  "key12": "4CsvyMoMLcUn6nTK16nMGXhMTESyybE1DZF51pRiVpsbnBvSUFCC8aVvfZmQcsfpwabrzfjVHh6dPiQzLDfZcfWo",
  "key13": "w4NoV6nbavok86asoePF652CrNZty5rQz94mLhWKmXSfGyx5RS8PsSNCEJDoYX6yFezQhSTE1KGpDGTs4W4g86R",
  "key14": "4DrZj8thbB7oCiAkRHNCLfjRnwTLUPS4dP7fBzm18LR67i32MGz5ac4PvPscksYkdkCuWTwoQKZEwCfjFBDwbv9D",
  "key15": "3g3p1bVH1Vx5hbUBS9FQLMYmhZYQM4nYgUbhNgJBAHSrtq1dDjz8bhpWywdgyHmgufTmrZNE3J1VHcjKtbbsAo9A",
  "key16": "48FTVdUpd5Yty23e4Msaa7FufhKx9SzJSzVpEaqUdaj6rDDJ8r1PE6hb4S1XpJboX9nkYiTkAhUmJzbN5EoLko9f",
  "key17": "4AmZCoj1kKiimEviRZvjDo9uUT9iwLXTLwPLJjAg4VpwEt77VBnQvczD2R9FYdTqqX5jZQbtmwsc7R9Cty1oWukA",
  "key18": "4FUhm5rBmX83hUf5XPCdDTtr4toLPM7cyyhAGEq34omn6HaSFyjAw2PbuspiqByQe3aDCBMVgC2eyE5kdPp45hdZ",
  "key19": "3BeKPXycY5LL8PYT6QGRJMzfTuHkH5vjzEuRzUfNdgr1BZMque8jV7QabcJ9322fiYxJo8Y8dnfziYTr1TFCCRsY",
  "key20": "3fFkm6zwKU3FWUw2E4eqC98DLJVKMJn6nUhpguvuTaEg6Qhs1NB2Kf1QtnocbGQPv8Mf1eePwTPRW6C9aMnAPTGt",
  "key21": "3s23jhYHHKT13p3jttAYKT6vEpvNp7ttyTs2Z9HnBZwAPfJK1Chedf78zQUR6SXJAq6KsAboJb3vCR1E49w2UwmE",
  "key22": "4Dw1bW4wXEG9sYtYiGoFQj3PngFxUQg6vZM6u9PCumxb5Ue4h5tKshKLUBPSL3CWnM8N98cUNRf87DZYirVSWudK",
  "key23": "2PBLY1Fvv8GxqSEpj65m7FDutbi9Aw7Fj5XjHWCZbNMNRs6MWFJ96TNAnSQnnvXBN9ESzQqzUj42xNabZiGS8Tt",
  "key24": "282qor1UVQMyo7dGJa2ZTuReCGELvzKssEGuWbhyteEuY9FFBbSoXqgeN1ZAgYkmiuXgzbKqw6ukBxZjzE21ub42",
  "key25": "TJLK6XSjjB4Zgc9t5Zo4TPfdGUEGs6UuWGSdPUUYVxVap2srGykBsMBciAA85vwCht4TK7ea8ybUL9u21xwxEwm",
  "key26": "3dz3zaYoWnwT1FqXafR7TLCmgHw6vaxonMukBGVX8q4Y2Wr6FEkmZa5UDWwegjRMYboamVePdgzE1ywpLpgLE6Gn",
  "key27": "3Fypkm43drxbptmqMnrmcX5uPNzjSGhYZkkF9XmnYXZCgoj1EiQGv2Q1jCKrWJ9UrKH6f4JuxNFU22SeVi6a9rAc",
  "key28": "42J9L7a4KaHgDRqtRLV44UduD31e5ZdwoED1h7cDuri6BYvDQkPLQ72gDjr4uD4NXxxfAgC1YFiQr7A6T1oThEjR",
  "key29": "4VXGJTRdi2evEYJ86PLWscVZmq6EJ6FY6bJf9wVDzcpfw7jLxTfg6uLBxPXHRYMUg7CEAboW9zKx3Qv7pr1kH1eh",
  "key30": "2DARVGMwGgVSupgtroMFyx8JNxuspXhjR9q7FUFpp6Rvf9kamE8TLNqPNbJ6ACAsJJP2r6pHQAoWdgv3TEXsuNB4",
  "key31": "3cQKvmyjAGaGnNZ8KYp4W3YzgPCnwmsNQMjbcRYVfmJG6Mu7C5TivKea6KajXStdWKqPDkYPCZ2rBEAx5Jo3Ffhb",
  "key32": "4GdN5xtzyBEhKv2eeQMnwGNQYQzePeMHrTUu9DEiT8gQf9zVKFDtRur6przHUUX397ddFB21GjxKbSKxwU1TC486",
  "key33": "3MEMxwp4sB3ZDgvjjYC9KwdWW4KE26i7vuxZbEHAsDQZ1NGdtMkNxrhiXeQuyQUGAvDUQs24BMfMiFLqEgb4JgMY",
  "key34": "w8p9wkJkEx5sdG5xGQEcdgHdhhdLegDvpSp2kUsszvN9cNzzmTq9rrXbvWFph2UtHaYDhqcvE9TuiJEJCcgNKw2",
  "key35": "42Z93s47qooKS2LbwSuvoMB8JXNyepGkkFHXm4CU47DVcXbnx1yBg1jCSfYDGvxqdfaVfSBB1NmzV1s5XqpvKikC",
  "key36": "57RpUgJnk4b8bp6q61V9gkfnxvZHHNctoh6qp1eVksJae6aSLyDSCedXEtBEjn4JARup1tFgPuKKvQbbAnm6uuBm",
  "key37": "5UkLs3HomCEUHoa1BExVjTZxmEdBpSVdcQCEM6egV3FnPmDxDvjPKizYxRMgtzyFnWhU1eitd1Vt3dbAWsnEuq5V",
  "key38": "4weMbNBCgUrdh5Gxw3UMU2DErotsR1uRpZqjH2ktBcKpAP54ejf7A48TMvn6hcRdsyCjBfMpeUYBJBcsHHU3yn6q",
  "key39": "2opG2NJEZXZU1j5No12CBGDa2Trw7r9dzdPi2DhpXWjKCb92VjNyZyJLAdURdNzLfV3UXfygkyb5BjuhtZSV3Fbu"
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
