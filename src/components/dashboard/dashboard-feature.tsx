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
    "23tmMGWQ2wAMd56UoozyQbMYXW9Pi8T28gTvmPKfXgpVeL17sHw6SSPeEYXHnA6vWAaVT2crjFL85NweokzGrE12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHoy68tcBhm3SZ8YXtpT5p6ftKtT9UbuDrF7x1GLdJmT8351kdcYNy9wKW8rjqWKVB7bH1s6Lat1CtD8VcANU77",
  "key1": "5Mg7DUy5ZEcKonch5B2BFdtVYJTezZr56SRPMTrQFEWSRUkxrGhN3NLkP6ANYsttV1rDNAKMVQzqoknjKp1vSZdG",
  "key2": "3f7jHaRD8NM3k781EmRjdMd1TkmwMkno3oXArZHHR2jQomMJwvn7deRwMP9fBc1CA8uuit2E4HDtLD4D2S4zYoZE",
  "key3": "479hRuLDUdGVBSvTPQzF49Y8iEKddJp9TWPjrdNceoiV3eabwieMTpN2B7hzuK3oX2WmYSm1sRia7KAT6t5QJr59",
  "key4": "4sQUW1QD9FmHDc25RX1LYphwZS2g378W6jMV8SNxov8akDGTTmu7KN6qm4P5evX1oWETr4rizHRdL4BsoZd7Qb8q",
  "key5": "4hsae6MJ6HEe2nerTMFRsWYfxZ3g7AeRJDgZqtscfq5dxv3hHMxt9z5uebF9V7yRUudUcXXrSD3gy362AtMtYovo",
  "key6": "4UazZ4fHZT7QU9tc2h3xLGhV7vZ8xJwFBMYEBm3p7zMLjktozEF8XgrdYU5N3yModrV6uerjfKrmFRXnhDEFJeL7",
  "key7": "5k1MMxk9UmvzbMzvdfifhpuinsmFjf1XeiC33VU1VRHnLR95PPauopmbPM7pcfVKsxvoFvyyyH1nmc5uFwdETwd8",
  "key8": "G5xt5pJVdYunNbtPfB5kHZkvt7dqEXw3n4kZjVa8FLgMeU6nYeEEzZvY45JuqoXYH9DTM9TVddM65GMXcYDxgK5",
  "key9": "Q55R2bRrcwvuEv7QXMNFLSrgrkjNo4cM7BJEmz6ssqqxwvYEDSEvwsYi1VXoBPcwSYugc7H43niZWESRT7A6TUA",
  "key10": "4N7RY7WrPnePEZ6fYeyyUoLvk92iExXRptbysChpdfVKhQyB737TYWnTqy31vGBvhGxRtDMDxxcSZGFb9rMrMbhe",
  "key11": "4oYx4xN6aR1LVB18tC4s1gAZFbf7muQpaQTUWn8YAE4TMpnsfqDLYCiKMHUYzW7qcsuuBSPsaRjionw3X1vCdiys",
  "key12": "38TfVLhoLRBQ4gDNZDWnBbs7w8Pe1HUKziPuyVeLT4puCLi4Au6ahHEJZsXFBR652Gnp1AQLZEELBdLbdDJuJcet",
  "key13": "36vK49N32HGDgKS6jwfNCeuEzwjVLjkMDbAAXk3DbRKeoMK6td4ZHtDDhG6LzUKxzmKrdD9B5A9VER6CT5F61A1v",
  "key14": "Lq8FBTEpm49bBGm7dSRYzgnMojHVq8kLrf3dmxmgSEGzt3YEG8ofj55qH78pqqCfkNan8NPEn7DHVpsWwci1Ed6",
  "key15": "5R4JHjUme6Nhe7jyvvQgx8BNaHEqhJRAaVpW98GR19gHdCAtczU3JAQjML3Wk4ktXdM4P1snESVKnZntkiGyzJNg",
  "key16": "5yXaSGRkEAuipaK73MqXK6xpqLDhCioFv9gVShKwwT2vn1M2YJ2TLtVHLegcAzx8jXrcpNhQ4JtEK2ULB5Te381i",
  "key17": "23WHBYqfLYH4serabVP2gQ22wRvFcsa9srWbamqGbNddzRLCBvt15r8gfCVwEbFMUwgoa3jpbQ6fNoW14Si3VnnQ",
  "key18": "2Ja8HFQmV23VxhVqC9hkhRUjNuBxNJrqSVR6L24avbYFfpb5qHymMaG6qXvtpnDupnDGBVJjPJAfT2Knjrogy4wR",
  "key19": "3JiAnscyQYBs6JXCfBvGF6E1qYiwvAfFm9nb76vnPAUyYdyyVMW9y4NheM7q7oQkj4EaVan1nPKwUtDp6FgEMKxM",
  "key20": "25zw2m6LGAXCZPhYezCViukg2wPdK2GnyEtH5jDutR9aoofrMR6DkLazh7JQFBziyxhPK4Rof4cmhUuNv5i81eoG",
  "key21": "NUcWR1ti5rvb6QTti3GuEENMtr98c1mfeDF9NJ5ooyrFLXFP7g1Vkjetv2sCM82ib6bHJY7y4u12tRdjGHP45Ke",
  "key22": "322tkc54S6WrRnKaRvJJVfY1ZxCyGn2UK6HR2Z9GHigxQP4DfJgVpEgyFzceC3pU6uMfgUVBdE42U24UxzX1DXsN",
  "key23": "5B7drLYATAUg82MXmPGEpNtwJ8wzcP7hVBUZv93ByjwAQLLFVZdS65GWBX88FrFjDvSNo3fwR6rbhhScwEvWycvH",
  "key24": "2qGn5z5afvX1mmb4dVQiQcSZLrFL3tG1eYPwtQhufXHoSoUqHrafXMSjwFfsdkPuGGdmxNH3uXPAhRbSrQ7kt3zv",
  "key25": "K7D3QcsDF1KRhnni5GbNtZ5kKMYWtrAEdBCZVv1P2hPAeMg2xnyL9FCMm6JMeRqpwZKLYYNkLHW1S63ZUvwXU76",
  "key26": "21TgyTguaaNU9B69ie4EzCffdgb2Dj1godv1jTyXcog2CNsWPRCfvWdFr81Nnv1stGRh61EgsSXS9bLzTDzAjiMy",
  "key27": "3EydXkLyzUo9JRGJJKvVMirW2zPYB7PJTTkiMUs32KjrYnd33XDxrsp9dVfypttbzGDf3pU73CLjkycehwvzDwva",
  "key28": "4LHzn16WbcnoZ2kXE76oFGYAk2AhwuPdAaeyKnyS4AgjyHpQug4q8QYaDAD76Qm3e4v5dBnPxggpHKQjDQ28uApe",
  "key29": "4ENjoVq3vmERtUATEtdiMGcAMQ9nyUs2CVVgC9GcfdghsFAozgSQ5zVNkJRnH18sn9k4ic7zZiCevUH3Kcpsj465",
  "key30": "3nQThndCqvd3TEUPuDo36L76qVWgrGeYkjBwTU1d1PdA2VRgUJ81vN1bvXJBnyNSMRi2KYrduCDgM1xnxok6biJ5",
  "key31": "35TAxGzveUrEPzoALA8wBMUAh2gBGaqkNA2aBnxZBPRWMTLeS5R8Q4kRQJuX2hS7ZrivPBnAfXtnizmYftunzaTz",
  "key32": "QgdvrvDvoRPmTreYRN3pEyfweTDVSsvyz5bybnEEe4pnUXQg4CMGUJsUUeB5si5U3uskXd2shhfo9QvvG5QGkvv"
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
