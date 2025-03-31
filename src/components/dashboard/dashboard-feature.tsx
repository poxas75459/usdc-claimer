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
    "5Ex6u1hv9izaD5PHYwaoiBo4C95KVBaYdrW4S2JrqVj6Z6KNzMmiRmapZdiFs5Q54WZ7wxPATnvAq78gp5Wuboyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dQKzWx7vmvnNvvr7EQDxf3oMiM7hQX7nRuX3FYUJ5uWGqUmZQuSUXco4F3WxCm9mUehC3D8C6XPu6aEc6KirmDG",
  "key1": "5g22gVQ9pH5uigvK9Uw4D2epTQy5YPd2u3FYpxrc5hrp4agHiLCxmA3Ta8H48rguJGPepLk6QRa4Bk8CK14F6z5o",
  "key2": "2dWwzquvagned1oZrUwyhCGMqL3rE2F44et4T5eEDBcSDL6VA4A3A64KYwUV3BS5Gns7XYR5ReWaaz98ksPPMEx1",
  "key3": "5SoZL4TvtGWtgK8t4bY8NDc5pzEznpQqQ5QwCbY6Eg42uGP5wvrN3UjFv9QXgVtjehBpdmZSh1JoQbjYGhg12WaS",
  "key4": "3Mi9hXMGwjXkRAqTSmvsmrGGEcoYbTmxCaAGrKL4QZMmMwxd5FdZST2i8exYkFkoFyCaXKhUHyvhLxc5qoCN9xp",
  "key5": "4fbEbWVzW2HvEXA843FWo98Ym5QtG8Re28223kLQaXEyi8iMtJU1YGnCKY6e8uADwhCkuoxXiitpn5ASh7v8x3Ef",
  "key6": "3adRTUJzZcV4vn346VU7rtPTjqiHY858xtaVerrSo2WKJn8MD7VdLWvXtVv1VFKk9TchueKfVDbtA5axF8qLZFay",
  "key7": "64H6Dr4HRRHwtuXav1QEgE43WtjTJhheAdZeTHwJyYYaBUrb8Wuz2VSxwFEtrNAwRpjhmUhFw4f4HwSFvpiEaXs7",
  "key8": "4qZFf8zyDknhvmNnkvoL8TeDYPf2eRY46oGmVTWJetreNCAAAJLjsSmib8frJuzk41MShsyrHujeeJ2Fquvh8Lf6",
  "key9": "aVfwWoUF3BJg5TkMfgEeqQHFnCqwjmKa2CXJ767uWkMFke3H6B4wiMGj5Ymwumbs4PExSXg5maaEniwtbeDyrKc",
  "key10": "WuWop4n4soCJHQHGYsRFLLXc3rz5e4QrUY2Yx9csDEhPP8uh6yKbdCtWWPne2dTw8cSJ66crdUFkuMLkReiGbG6",
  "key11": "3DTPybhBRjCdhSByY1mDuGDmvLUVxJ7uqrHWD5LgYSzyP3yPmRaRCu4Mu8zvuSU9D2fQbXy8WXxNTK69DFdvBZSx",
  "key12": "64ho1amLE49j3tE46YZ4D8aMmmTL2RfcN6yuFjwMpMNr6u1Z7F8zKLWKJXDEWiK6gfkoDV4raihXnbTkQeMsxrtZ",
  "key13": "25GZktRVSCvtqFKJ6yPZtFMxWhvDynx6T7NUgUnWdnYggapimUWJuHebaYbrpRVh8JKPMugqd6uXfC9GLM7DWKYz",
  "key14": "526GrN6aUhaF1Yx5VV1xRD6jYMP3kUbfWubEHngetVrns3D378Uzy7qynXpdohUzyRBbDL8Ch1A1VD5w5DBj7ijF",
  "key15": "31twMSkgzdhzGpNtw88XbRkTPf7aNVK5nrWyvnGjuLJEFzmEq7UiEa8N4nZwUzavSG2DJ3uAMFwu9fNTrV7L2BZk",
  "key16": "iJ1YgffpdxKd2Xnkm3EBxqV5mg2styy4Tztfx8SByezHC74TBdeEtPrBgKVKjpNeUzdk5MimtPYQU7e8ZKNUXLa",
  "key17": "55dyv81ZeyeKs9S5eSpJRCrgYszaqtd3h7XrptevsMjUgPwc4GjM79zayzR71ccdyXcWyu9MDf2JuqXsbmbdVPgY",
  "key18": "3BuUebVyPAQCAkKHnc8pqwfxrFbn552rn9xAvjok4JgS8X1yieHjL2AsDqk4rDBbKxFsSrVrH7CbRv9qcxFnxd6f",
  "key19": "2T4KCh9cfMjwQWGc8dNHZZCLoJd4hD9uzVu4voAXzzxHGEgjXXkRLheG6Z9VyqZTnZY2URD2uk5ckzDwPYSGVrNp",
  "key20": "2i1YC5vW8jKRKfWEbZmw5uYq6y2ogCgPScE299PB9gS9vUxYDXbGtugaW9VyhJAumNCyZSLRHNtuat1HrDgmrKHm",
  "key21": "3tCBfRsHp49sUCSic12bHfEwMMzGJNbCLqiJqzmqoQC3UDmhdjjnoCAQowtHdeEo8F59uz2nCTkkaj6U7ELLzJ3p",
  "key22": "7dNfvGYg25SDFcTPh28uJ8NH9nmLnYUsZpqZB8rD6kXVjuP82dzCm9ZAwpMFsqRCbsQLfLCiaEsdahxVGzMDog8",
  "key23": "4cmPnYyLyja1U3FGuWpRqrE8bSoNu66emL3vuMdf46sBbaJXSKvSiKrPL6Rzw6bTLFXTDwsKeaNZqZe8zji4WHN3",
  "key24": "24V43Ykgk9xcCJkBDFJDtsBKuymyjDLQbbTM21nTykd15BYXZcfQRnCs6nyTeV1xrovfmTFr9yJ6c1ejAucsUebw",
  "key25": "AHgFQ5fJBBARJgh8BGWbq3KKmggTa6RbAftdohNzvSfxbRoJMXjQ4WuuiChrkWVSK56CW6vXbDHESvcA7g8izzU",
  "key26": "2qHXzohzo4tdDbPL6aVJJSevGxS5YBMTNWtRhRpZodtocHRvH6j1GbwLe9MHjCYW4bWPRhpvpt2Y4DtLQ7KxRzfz",
  "key27": "iFdZo36ZERWYcxbHz2fdRpTq5nxtss2r3feUnsLdz4tqJbR8sb5Ub8kmqbLY5GnkdRhfaaeSVHizwehx9LyxBJB",
  "key28": "Fn93Sw6yX2LuLwJWwbdEh5mRKumWxfGyBLgEogtttNu93WAEVB1Zs5WECwK1yyJTzui7P4oCVn9LZUHJA7z3bnv",
  "key29": "2SfVR3N6o3sAtEFGekWR9FgWZowppHfYhFiM4nC5ib2Zt1zLgWj5gmszshxGZuu9xBGBSnHZ3gkowYkGvvvG3Tu",
  "key30": "4agbF67guRhzY4QLGJ9NXpUZdzVSfQYs7ztNid1nr1arvFZKZkDkDMmvkuDSq3cXbKFi7aruXrHJgU3g64U41sws",
  "key31": "hUCr7xeaRyQRPWkF86ubErKouUjwHTmznGQvxHyB2qD45izKiKAULybTRmUHTRB39EGKdddbHS2ExdyXdLjqgnY",
  "key32": "3UTSiUbteSxnUdGbo1njdEZrCY9VJsZEZAKh35Np9Q79JE1mFsS5n7hZLfyW9uc2Xi2v4oyat3aZnwUPfovJDfT3",
  "key33": "7wcKZwoBzJxpATLEoHaPLJTTvAPXU2Aa3zGhmMwc5zf9WYrqZ18cRbHtNbPHcKMrepm2puz9N7e6anJCJxnFqch",
  "key34": "3vy61ViooxapJf4w4X6gdyFNeaYr7JDq83MjxAKGJn6oHHJYfF4wVUWVeTgW7HeA3ASoEv1TXBr229arN8LoLvBw",
  "key35": "5ihTQBNsPqgTMBHoqcXFX9aY8qmnbPDPZJmAisyG6CQDbmaEGbzWMuiMkoosLHjikb3tovVoGRDSUcC52RuaCikP",
  "key36": "qomge2Ydzo1832YpiGPCqRkCQKv5pLzNwbpK94kfGv2pTK6K5S7bq1vxxQuNBw8EdbSVv24yaRNeofCwC7bKjrj",
  "key37": "5HRRQmhZ5NDqxJuQMvWy2aBsg5LvzDmL8QkELUpRQbj7q9cLgHeZ6C6NnXcF4XiLzH5eS1GT6KGpv8niZ5KVXTv5",
  "key38": "43ENz88Ma4eKjUNghrmFVYMDZdX4n9sTE2kFzdpTf3eN1sgmQokBv9Myuraeo6j4F8x9x7S8AqF2Fox4H2wkPMDB",
  "key39": "3gDMMTQPa7vhYxV4PKQkxndHM2353LqpQAEKFL5rGfo2XpgJUrMwj2BM4RVXGmYfhWi4MZqP4VD8khh9SatbWydC",
  "key40": "MuU7ZmTRtoChNTr7jo8e1cb2jTgbH8MLBC3uaeuEA6wo6AxkB5MUrjQTRPMu8cY8E5xeU1cNk8ugLRTpGgsiQiN",
  "key41": "46JRu1wgXojuAMy65FUpXzEf2FQa5Z1KjPPLFmmXA95LjDoB9moNjjFoSEekMNgzfYWzdFJYTFvGk7Lh23onGU1X",
  "key42": "2pEyR79x6oM1GoQyCxoa1CDD3w5bJoBu59PPuZnuRNBpcTWNd9nnfCSNy128JwSUQrQFkYULfpPWxmhubYL1BG9Y",
  "key43": "57xGZWdt3Rb6LGsHzj4waPcUbeLm2ViBK2D4X1KcWBY4sjLiKgQLKabLhbgyzdQ1FqRMdqAGcE9iBvY8D7ZZctpt",
  "key44": "67WstXq2Sc6CxZTyjFnn9ogzCUh48JKh9wYjzzzJNGW7FwU41VMaec3BR21DZzvhGcpVnS7UeHbnSVVTph3MCY7W",
  "key45": "4sDWghenrhD5ocVoM6BFMiGwrvbvmEhRaGgzQhU64ZA48jjoNjoskcqMvLYSJ4Aj5Db4Jk7GpjYXJS2DCdBMDwuY"
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
