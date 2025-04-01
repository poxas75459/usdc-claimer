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
    "63JL3QhD9VmFs3QhFf1piW2okiBFQhWcYMteDf3kupwEJBa835i29gRrgsGY5Vks2yt7sUifMR525maAjJ15b7kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUo2z34pHi9fiKvfByh7mvc1Eh3UAJ714oaJUgU9owq49rpTG8mN4nMry7hRKmoEv39rwfMxN4VibBpJAQrwM5E",
  "key1": "ZM3yUkc3G77KizWhjoukrJKBqJQfQPe27sP2vqDAkPEpa42ttZ1SEbjigbf7Ey7BsLUPCdtazFqk5EmCbY2QP11",
  "key2": "4eGQYm4t4FBvwBEVXfPPGf1RyTmkBQnbAFqyuFYmmDrfhcCkydT3p71b3kcKL846aHGsQneo9r1TvjHfzFxbacNR",
  "key3": "CJEnQNeYdztmjft29ocQByQQE7x9fjBD4672jTRxHMiPCwasxgNiF23nPhfqxPwkBNjQ4Xz2nhgioqTbBSRL5vP",
  "key4": "5E4B2Z2Ls1pvB2jp7BTfA44G3kmHkkZ2A8svqLoZBQfc4pa7f8phNMYdq1LzBkUVarvrxCvsekZxTGQDpZkDcCUA",
  "key5": "XvxsaMhufZR84jpanMY7FtycHcb2yi2TeN7xVjdEH3kUzGBVwF4NxNJZ71CMSFxcQ21vRzyQZzcSMBgeKD2S9Vp",
  "key6": "5MxuyFUt2KCGezExHNDuSLdrhA5L2JG8CBeLozu9Vxhm3FDuL1isD76WW7weHbocCWiUmgeEWfNJVDjEq6MGCwx9",
  "key7": "5nnv8TZGNnyvm315APRcTMfsKL2JKgT9iFX9QyGaMYgTS8dVQYmHcGtZeagWMacfbEgEDx2nCVf98jRBtXdh8ucH",
  "key8": "4nVHtK6kmUUrKfZSfxsVv6xkwNRLxNeCDdxJrqJTJVcW7AeY8nt2J3ZvNkZsyh5JeDvM92vS6nXwztXYERfxYufG",
  "key9": "p5rKqvz178yMUWUKjBSZYwGtFasCPDKDrHjCn5Cvc43ezFPT8w8nzjmhoR4JtLYotqJeuDidDLs1CkK5pddTEu8",
  "key10": "3ivJkUAqLKxtwpin4B8jwRKFz6dr31p8Sk9rXpiZHKR9iNpkxNum8rHFHAUfCwgd2VbaJ2b7pmbwET2U1Bu3zGb5",
  "key11": "31JXJn86KSE8UGoZMU4UM79hkRi9kwyswAbPn6nAdvHNnBWu5hRyr1k3GEG7oKZgYQHW4PQNVWs2wcw2Zo8Np4rv",
  "key12": "21meCcBL86dhXnohfvcbPAuwDUtn83PQDX9CBbyj3UdQzvukJwzBTsUi796of4YQtcxbJtNB4q4c3x3QeFuRJ11j",
  "key13": "uBB5fPyJ1Ep5sMmzG4Wiz54KWzVdrFja66jXHTPurGth2hNSRkrzZWBhVpb2tUGnXnUMQBVjPYDH6etRkfi3qLW",
  "key14": "2KxCjXXhU9wmPfXUKRhWATdxk8uUS3i9VT6UNPpPLwiw5paJF765TQ7WdwhsGfZti1SrRpZXQKxsJUH6yz49EMk1",
  "key15": "3dQjPhHk7P52WWWvCLxFDWwZ1CfTPXf7EhuNBGE32w9s4A4WrkDJLFFac4vCqRHKMr21NncsbG9tnrEP6pSd3DAD",
  "key16": "32YegYaTSJDJHYKBwm39fevHjsaFbuN94VxPHrdATN7yoBRHMTSiNxM3W9BHfgChzUM72DrVxx36di3HtSUG1Ehc",
  "key17": "JsrCy5huicPqPRVsaMq3MFXpgY66js7aptM6q2cFgBtz9gGBwwGcvCKJbGx5YYYQcTtA9cXFF4Bc42QGfW1JH9c",
  "key18": "3ULHxDTWuyTdgVZjfNxmVbout3zR3TWuaDCmsDH9QCTP4Rd6NS44QakmNeCECBB8xso6PLUEGEaawhyRETWYZXmz",
  "key19": "khjAMAMWMPEaD5uqtbC8JTnmfKHr4jPWEusCuaVLx8DSiVfNQUPMiCmiaFRAnUBBjiX1rcmajhJ8oCDW6GKyE7t",
  "key20": "4DYZne2VXaRt17dzPkdNFKpSPUS7optnzLLvU6ZSXhXBUbeaY5yUkqRkEE1rcYR8xsd94FrxifER8HWjGW8qF7rF",
  "key21": "RS4jRMfFY9ALtSQTQA5NwbESAkSUb6BJzGphKNHAtbmrsiuqQ8iVhkg5DRLYmjpiV45Fahtg89xrpSP4ahBKfhm",
  "key22": "4Qakdvw1p57HFwYodPKAqBQnaxVRmuqjpUx4eJpZWEoMtB5hxjY2U4VjaV5Kv6DVLXtmD9yRsDCefY2yMCGvJjvR",
  "key23": "5oqnNQ8AwDxkG7k2yjENCyhUuhASM3hr39QXPad9no2kiyWoLtFjW2zJdSc19en1afUaRDYxbSxNjnRc5xSiv6ip",
  "key24": "2URgTpL8jsX65JrN8Ct9E4obUS6ogihkQ3soJsj7MQk3xSXpZpVje111qtzRMdXAm2Q4dLskJ3mZ6tTAHoeyZ2zv",
  "key25": "4r6J5t5anmfRrmdLGK9wN4R6vSLaz7chtfMu6TgP7mDK4hKVXoTVU4rJWVd6uHaGdzRiy8SeG2UE6K1wgBr6Prx9",
  "key26": "YDYyk221on4nFecUczTHGsYQtonWinuehJ94QpK6rhaoumqJyM6XL4i4B1X4AwMDsJVF28JuEaW4PyzLg2Tyxzg",
  "key27": "5NT9Pbgr8kr3CUwwugDAwRhVxfB8Je44KPmhDbUtNTBX4xgyj7xa5MAx5mumXHxi4HN9G3wcWHy1Tt6Q8kNToF3n",
  "key28": "4q21GvZTEqXrSYmGhrQk7tuNcZfAwbx63wDEMNpoNXE1q7TbPFwWfTiPaPtxAncNExhQ3CE9s63ccUHPX2R6Q2FU",
  "key29": "5aiB1GWHBgvCwbKZ36kk4ZEnoXS7eoaWh1DofFCKCX3XZxBfRkRsbmXs9fkeWvQydaLiefGQtkES1kKT4r2em3Lj",
  "key30": "4W4Ck2JUoqMB4ALUKdkjkD2TtFJR98rnFjTnADMMMT5BhkEzytdeTsWKHgEv6AWt9cctUebE2oJb15K2J8Nwwx7Z",
  "key31": "4Q6US2ofc37SE6QkEGBnvPmiPgU68M3mvc6XpccauihEmBpmsBXCvb3qz7JJ4r6VwSV9pGSCbSnL5RaMxgCxLNpf"
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
