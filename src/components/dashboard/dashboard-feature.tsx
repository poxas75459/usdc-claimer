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
    "5twoCkvX97wz4BrBavTrTTFygeaBL3FyqFRpgwVNigGJYjeZd3pqCZSfBAhaRNZeCfSQkX3E22JGAtGXALCpUePo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KY5FLiinvp6Q58ctZEH2kNr3G51edXRDT3aVkzZ9gWyzr67qFghWHTqrue1NC2HCoF2kJDymbUGzM47outfaHxr",
  "key1": "Lu39W7myHhiJVp2ot6BYQvy9qk3JpPaKNpZXMDKfzfLASbg112fZJXXXdW57WfKpU5mZVzsMfpVgwWY1Y7C7Eyj",
  "key2": "cbsUdGgmeoFytLChpV67tEc1MGjQejuHdpe2N3eS5m35WxfGVuP88cQP9shw1VGcGVFfm83nyhGXtLDM5wzbuSk",
  "key3": "WwUtT5bpScsVFPsmWH7UVGjD9H1hURk4dRGnUvGCC3UMuMoTiY7smWuURKYHqRZsGkGVbnFkPsrihttbA1cEzry",
  "key4": "3QyjSkofd3Xcxeprp8EcYamd4TXokmimpEfdtzTF3EoX9HUQegFF9vTkNu32xMdsDDurZejqEqfAdBRmmPCFzFDR",
  "key5": "5AyhqJtwhaQZhVBdpRB7rf5Xp37WAZSwi47bMC4zx3ruCTxVykPQTWtWTZ6R42pTY4tMh6nvEWmaLFANmSR5eDnq",
  "key6": "4FJxtTEaT5B2BwTwkFzdE76hesHZkLN8DgQ4wWpL4LdFF2UKb6uaLCFoL7rV2EXcxhGHvLnNdVxq5ycBvt8zhus6",
  "key7": "63xr3Rc5d3RfFDJ8Cdtw4rMM24KA1dfGnig6MphrhTnmZkTRpCiUFrPUBDw2ZuXyhguj9zWXAyJ36FbSTrqR5Xfz",
  "key8": "vDpGLdfCS4bo9ui2f1coRYMnT5JoojycwLP2GbD9RKCS7V5YS3wTtdrNhYBpPiZWw1cVwmJEn7aoqWUZH49cWKF",
  "key9": "268HiE621SRrthjau8D5z4DJ5jkPU5wK7A97irJSiAJnCpwwXXeGbS1dZvAPGHPVt4r8UdRXY88gGhE1FXQvLVff",
  "key10": "4T4iHcqn5o2e9jnrjxdWQ4Ata8Uwsjo8LRhhtUoHnX2uTYu7Fv9wo2UnyW47oBHqbnWGmU56juQSj7YRUtqTKppY",
  "key11": "4tDxMe3TTfaqPaWXH3ziTP75m1PekeParuE8fuAC4zNLCdtY6UkC4Jc6TfsnJvHkbpuvkFCTibiQXVN7GEVoyxTN",
  "key12": "2P9m9htFo5sXds5P6jC3PjRHcbTFvTLxYFGxXjo5tbQxm6gqvKLCdvSb3o4Mur3ktFR19YD4MEZnCbSht9nxsKit",
  "key13": "3h6PhEu3ZpnPyjKmdRNBdR4Psw1McTuGNap1XHUpWFaVW25jPssfKC8j8URGfAo1psv84g5wZSGvbg75B8nS58b3",
  "key14": "3HALP37NLMecsgXmGKCfHand9PrWhgvxqjF32NFdrsQavv5CkMMdKB7wmw23MgZ72iUvtgtQWB33P6y6P4zC6Z7E",
  "key15": "3QaAsLZBmd3EoA2v8HHU35KdCufjqhpEP3c84C5aorkgqsdrVwtrQEdk8XRktwZDZnMVRw5HP1447DjBbvj5FW4Z",
  "key16": "3oN1AAhxbEJ5FhnKsgM3so2eQXX3cjLC57WHgQKCjGQngYqYhmSsHimu13WRCy3dsGFYtZgecabVweQ3gV5fr61V",
  "key17": "D3CCn8NXX7fkYsb5tjAscesNruVwsYCR9d6jJ7NnzZeXRUEsZM2qJGiEp8b2tyTH97K7A2F7NMzCeW8BDqDhcdF",
  "key18": "3bs3MC9y29McrcthMGAuEUD8FS9RHPwxZPdUVwrb7BxPzm4X7rFHN4TD6iVPAJ6riwAFg7yGdqPpZkizZw4FBknE",
  "key19": "3j2cAzYAaekQrZE4X5iiHFvuxKPSa4PvjijSpyZzrmLgAmSU5SdsUcmUiVYo77BpWch6genbFKXGar7xLsorGrcD",
  "key20": "nWRwWwQwxme4vE7ThxNTjSNMRu6DM5gtjvCtAsRaqQQRar9nRRyARjxQv6kET7nrTdvowZUMvUnhg1a19ZHiyKa",
  "key21": "yAk9smCDmhV6dFwNMwR8cAT3B3iovCWfJgBBPtCgqKEbeno8sivnJA94z564EW3BmrrsnzTZFLzWZ3aV7jDycqb",
  "key22": "66m6SxNe5zLVyA9DaKJ1eK24rChKA3Swkexcd37Q7y5moSA1nXVCxW57H4FZGUyrZTRz8hMEeRBTs6oz275yKMR7",
  "key23": "121ZJctE658t69pWdYq619aMqGanqS3F3YnNrUX2sJ2rqNTNe8RwQpMqD4nUJ3782g5KuPuc5Jw8MTR4EYYmq55h",
  "key24": "2gmQdrnWuKeWf4en6aKSG5aE6BHn9eVMerrA5iCpu7fmk5Qj69VNq9bVjazd1sXSxSmwQ7kqJD6F24uJqpAmfxTu",
  "key25": "2WG2ffpBja9S4TDCBoCbCMWmrQBGFpgom3J8qee7TyoZUqVBDpS6vK3VQbZTEC4kH6ZRnyX9WQZjufc91C4UNdcU",
  "key26": "4iEyqT4t4oa5aXiKcKhkuYTt1pqoFZhxxWuEvyi92ebWj6ZfhpgFD3ARpu2NSDTpXzjs2CMuz5ay2ShDrHKPqRed",
  "key27": "yJZVtTS5Ewk9UsYtr6FkEVLKDV8WPPRyvUGCMckbr62CFoqrfqe2hrvbxEu8T2urpJqW8m9kTjrfqWWmCqLHz53",
  "key28": "2WneAGjKKCdZdtDsKfe1wV2TYDDs7sb7LKTX8owHFB1gRX54pGQqW92SF1PvJLPpD8KcwKU7HcgXbKY5B3RKohQ8",
  "key29": "2fyngS8WDCYvDQqV1dBG185mmRvVgzEFPzmAXWUSQry7ujkarzdZw76ntch6xHm6GCxzaKUQiih33GcUwsZixC4S",
  "key30": "2ZJonicdGvLkHm2sX6rcdATEGPetLp2Lz3tDtUbqi7bkALd9677KNSV1QAr6e6EjfxM9mgCNbuat6Jq5Dx6VKW51",
  "key31": "4CGCWJQepAZsdj1rEUkfMZfM1Su7H48BBgwCVQ842L8HThU9AuboQEx74wMr2CRej6BBN3UgimcENZ1RTPcym2fF",
  "key32": "iV3DHcRcgeTP7pYdymQrQtjCnymiE8zJnD9unZMmc9TadohiCkKRo2ZZaoaEX7E2zAmzgbZG6DG36eZ3jzD2G16",
  "key33": "4G4WiCSN3rVg5yh2HBF6jG2hU2D38Np7Zy8zRhLHrUvMBbx5sWA6n1EQFDz3EVQyn6mEjzbWwMZcAi76uHxgtozm",
  "key34": "2WMcaP7ySaFahNtDGkmqBcKRdSiYbeATVe1yoSfxJL6ebqizV6y5TYM1v6pffJTvfFa8CWrHMiKD9twZFYFQMxpQ",
  "key35": "uZ9sYMaz1p7MLbufk29Z7RzjtGrbHZrUHTi1THs7whYrkHNdMRPfE8j2Exfda9Zbb3amFETtnGef3wCX1wKcGjV",
  "key36": "2iMkLe5FGqAy1B9QB1zmpziiMKb7wJvN1Dr6fnzHedrbChUQ8c6JiWAFASoxv9BjZP3bTMVKnUC5p1Kfdar1GM21",
  "key37": "3EW34jDmr25aqxwYkHHJLLX8ASkE7E72fu9hcJ3R2xGM5sxsHYuqLFCqBeq1L9j4PViFt9FyQY6MZxBPsmtMJrhH",
  "key38": "5TxiE9hFBEwX5Mh8RDU8nbEKLcaXBFxoTUo2o16QjHhU7u72XuCYg8PAGGZUTFM52gEPRYbReZ3PgrpHyuHj4QAu"
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
