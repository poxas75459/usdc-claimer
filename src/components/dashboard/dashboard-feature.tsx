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
    "2ibHonxm6CTpV2eE1Bmy4x14u4co5VATB8XRSt9hWJHNzP3apTQSBaPVonx98Ukq8Fc4jB3dpV8WZboZZph52WzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSN5CD2C9Zimfca3qe8ahu1Jgi5ozDW3kFChP4otrVkf9LF6zYjjKmB2AuxiKYPXoLgci8c5dUEZYohfi721mXY",
  "key1": "5MSfsZDdqm9mRxVhmGrVAuSYUZbyTf6h4WNYNLo9BNXwkwumFxpGa4ZWnrMWdQxe7TmfyVms9wjBvc3d2wV18UA1",
  "key2": "61fbcwSKw9NRNumpHAywmHcaBEbLtJEhoAiotqBtwgso963ckSi9oK1qDMoXCsBJWqpYbbGoTUE5dGtxWKdpcLxT",
  "key3": "6isUyXUbCBcgfZiSDpdnjcfndnGEjGE2Rasw1Wf259Y5yhCiEic4gtv1HVE9PnLAhJone4Tg6m1Chw7s34frgJN",
  "key4": "iyKRdFazSwnwN6SPb48rwLL5yDHuLkw3vgketmxT3Gy5V18hVPkVVYbm7jNiFP3EUER2D5MqgsLRLzUzLmLTGF3",
  "key5": "5y4jrCEdr8jod6gCpp2bGgPyrPHZ7ytTJJZYdLCjgi3vksEksY291KAggirpVucVC3ysNmBmPHuVi7wtz1yXdruq",
  "key6": "2NH96aJqsSSSEMhzG2xYw5TzQ2wg2medm8wpREZU3uqK94i78E2McFRJSbrba11e8TZ1zvZZAkxrUnF8qy6zdqDs",
  "key7": "2KppkHRHuXwV9siCLfxeGiS62wDjJabVrspDZD38MpRRwaCrgY3UekvquHQXxU9YcmBiFTeh4gXKHiWFUaPjLNAn",
  "key8": "VTvtGTbEZA92EgshwBpzTnuyneFHpkSrHYHhReB1zMZJ3jEwXBqKLZrbecLHYxWJKnrv5FJj8rQgQ94E2jSduCC",
  "key9": "2KFf8kKhogUrLPPuKex1BnAVYMxZ3LoJ44cDnbgiXuTyKE7sfPPRmAEgQBdbv7A3dXbEZKRQxv7e5qDazwT1T1QH",
  "key10": "3V75fdznXgrMPVLijE3EgGu6JV5qL6XB8Dc54YsGxzpkv4p5XkPx5CZY9zaZbWbNsejDsDiq4HQH77Tg2QPNXZ9B",
  "key11": "4vrVzzTieHa4D5bv6MBY7eDCYT4y2umJi4sKQf5n8hFchSGWDnTHypF89cwHDz9BFMaoUeRuh8bccVMn2zjEKHRf",
  "key12": "2Cwtj9dNLQuzQmuiXc8aMHmiBQjAq7FoizotKT1xZDiTtKMVHV2SYFvN26Rnd2i2o7yFdHKebqW2XejFzdJtGEHD",
  "key13": "4gzBNwTrAotZcgwVGcSvMW1wThJpvP9cA6PgGtp2eZAniTLNKtgdNeAhMaroZyP8fxpbiuQJ9ZdUdFrcDiXmor26",
  "key14": "4L6Jstjx5Zm71kgsodPQuZkMYgb4yKWmZxUFMdkyPqfh8amdw76w8ZD7WEbZ8CpWaTLbRwyoZeaMVizv5rarkQ4s",
  "key15": "5vrPdiYpGhc8akuxYWP6GvgjorQidzVubMiVeavrwMaVN6TY95Uj324w7a9ZF84Mdb4npHtXu2aEW5pggJgd2PHj",
  "key16": "3TXp7xyVVGtt22fezYEExctdMePpo4tnv3HutZTfQQGKBFYxJJ4RnbYMKVqYP24ErWdQtbwS5dBnyshjGquLWi9b",
  "key17": "b6CKq74gyUneU7on1qbzJKHiiWmgirdVGcP9k8bf7FGavKrPSuEivMna424kQudnXt5Z6eaVMKRxNQbB3c6RbMS",
  "key18": "XPds79deJCPQqMD5EUvLLveNCBpJvDPWGM2xwFCUBRqR39PfVG347Ni4VrcNEQ2xZhG417jrwKSVxMofoyZ92M2",
  "key19": "2ZmFWW57e9Rasf5ToX4UdJa9JgJAe3QnsrepAW7BF6mxJ5Rj45HBHi1q2D41RVwracYe9fDicGNfw49snPhkVLBk",
  "key20": "5NDZDSoEvUXkEku7nB9D39pRWiYTjvCCi56x4Ha3j3Xaz5nmp9M9LpwannCS1mUvFUTUmpWrw962in2oGaUwNY7r",
  "key21": "25SEL2AGXboL2gGzSdRHB6VHbm4B3NsfWSWrn7KbAV5qDHbGtZdymQBBifhMM25PwNfKCKJ85ZV3cdaLvgdxbd1z",
  "key22": "5CZcCvj1V8YRX9DReF9Dvw7R1XSpbtQS9Lb7hJjU3fbWNTHngJ3ALL9w59yXJNETUhm2FFG2EGzn86TAmgL2Zr8u",
  "key23": "2U5sWkrLSvQvCWFsBJVLLziK1V818Ls79tgvA2PdNrbByrcwyq4E7B1D6fDA8W9JS2JBqDKQYoba8E7mnQJcKnC7",
  "key24": "zccJk7sFqnakvZcRtoxGJ3eCYgACmZwP9j7T1WgcCK6FiTwbCWTdU6QebBXcZA8PXWaCkagJuZ8uvYtEoaBoK1X",
  "key25": "5Lt9iAGLqRBM8yNXHHU1ooULACEoBuYoBZR9m17uH9CU52eG4yS2pnuLjLpBAocyH9ZuiBZouusbKGwaW6LdZYzM",
  "key26": "7a6uEv6hRUFxa4GWRMx5KjZfqY1mFEEbszdDoAVd6ao1NhU1RxpyJmDwWWTRRcHskzstPMzYz3dXvcrEau9X1ad",
  "key27": "5v15vZiUATegWjRdhsrVuTVTH1qKyoK7FE2ae3TDcMAPLwWMGHk3EEWYLWVeLStWXFGHkr97ZvYQP4D7AfscdYYa",
  "key28": "tkLtiRo6fyBVSp4Cm35EGzxwFeVEijKxJubgr9LpENibmDnFoUeQeYwG8ndR6J3zcrVNSk6yN3tZKEojDPWYD33",
  "key29": "WUQXEzUhwgDbH2kPb1hAKa4cM321ZNVpTubBMJB9wVD2MPyder8J3cUeNSHacFMtvxczDigWJ8r8owJFaAkMeSe",
  "key30": "4oTCaegnacF1DvL2Nhku3BTisXKNZJWJBVbnM5gxf47nZS1WydK9eHuEjJxxVtagEiAtJ4CqsAtfrRSEUaP288k8"
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
