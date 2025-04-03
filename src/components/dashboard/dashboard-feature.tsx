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
    "56Hs5dPwFGp2f2qDww5S3RcVE5G5vmvd3xPPQ9f8SAhuxJsKKSxKggUArU81yznU3YDf3FLysX6nUzSpEunVS9c9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21uDxU1ohYG56ALSVJjzJSjqiVbi8mrfwVUwVvA3BD8bbpwxuTDF26Aq8jRDjVhbeuNAQdmUe4nvifsScggk3jJF",
  "key1": "4abCnfR2eX2WUjzEPnJXYQCKEj6VWgyd79wuDEVXKARALmkE9vWEn7juak4MBM3fKYXaAXGd7ZhhUzwa2D5MuWVP",
  "key2": "bQiStVpQ6i5WB1TXuYzSJ6nH7viyQYg9yu9YLx2knvcWtf7JSevYkzbK9UiX9dzHABLzvvxongvZeovJpjtukwZ",
  "key3": "4G6Y9qxCxVqPTWtAmE9QLc2QZKa9RhLPn6efXBFaefnrTnEF6uXso9pHqKaHxQ6FYwB5qSnsEode46XHBmqKGCTE",
  "key4": "2ND5xgPeuZQbVMikBhhMkY2BvGQLngnBLaeaNjQh2r7jEFq57MckXW4gSNa1yjaTa5LkDvF6vDL9RDXn7rvD1SAX",
  "key5": "2HAx2LWRddo28NPqZTnUm7cFD463UYRUqWzMXdewBc1sMEvsVwRdxREfNgWrDuesvPyRBTDZ4p3QKFze21UQK42z",
  "key6": "5seP3DtP2PcK4nHT8kpP3Lw8DVpxvPPSNtUKpujo4NhmWGrCifRkB4RrB4PRULR1S9Ed3CFXMQcqF6H8YqQKCy5Q",
  "key7": "3b4tXEoNxdEP8mmFBPVSjYuAH2tsXjCsBtR3b2BT3w5ow3H2kWvLciXNcjdztsyjMV4v2E4Qcn3QxUh6XHQxxkw7",
  "key8": "4So9ZUqLrBx1KXkrs7XG8K1gQNYcuTfajcx3mFXpryVukZTTZehWDyHuUGKbqfoKHgv3FxWkEbcjZVdsibzrErzJ",
  "key9": "34sDWDrUbHLsQUgq2p7g91REfQrsSSHW5XARkceYjvfPTBnn5YjrLTbR6irFtkfM9wzuY1PeXtqgtKX7m9zJc6aR",
  "key10": "25bQ35EK76X1xNNe6nUYwzz8CBD1hLxE87oPkcpBe87UtHfdoj2txTi6XfSDtxftooXLcS5c2iDrysdJ4Bfe6zgU",
  "key11": "5YhvAE18joLyaJuLX6Q3QKhpTwTTggcTW875fmCPQeLYSJqjzya3Rs6xpYoZFiQmWFWfqnTSyjcFk96sCaC1ozDD",
  "key12": "3QdngEa5YCdjZPWPkMgZwKacEed62GN7QrgYBkih9dxsxnKA2UdAndvYCuxNU55vFcKnZJNh2ieLidf74RLzordm",
  "key13": "2RqBh3y5HJq2bDRHneArEbuPALEqasoCQM2iPAxyECFhK9xVGebCNm6Cha2ZSQFrWA78zDdpoxFTVx1FPexwezgg",
  "key14": "5H6Z2Sh7ZPpQKd69Rk3ziHU72S8xQTZ51NWEHd7h4FnaHMcZ5zZoWjT1vWYaU6idHtQLNesvX89yG17XWW96Jm2B",
  "key15": "2uGqoXd2oLrcx9RDU49eqLvrMZA96jGD39sndn4ZhgdUVro54NTYNEwCQaX8ZqpbhAhGVBkc3T2bF8Cp4LHiWhaq",
  "key16": "5oV6Cm6316u8SASa1jm7kaCinLqxBpzAhrDvTxmSooMr4fg1anM6UsbxY5LDNVteyXRPVuoKezducCQWzbbgQQbN",
  "key17": "4gv1Y9YL1HvG6fJJa4m5DMxnH9r9BtU2HDAzg1zpaa8d2n15mmW47bLFrcYLX9hBaHxpebaD2hQanBSAsBqvdBAk",
  "key18": "4BuyNoDUgocprDAQZ8hPWu3JqyQffx1CDtzZSn8C74fdT7YStLF463VhZWhJB8P2Wqb5Y8rGDRPgr9LfSFhAMaRg",
  "key19": "2jYScoYJb4iigj11me7yETEijwYhtFKzV1nQGi1NmnL45dG9rb8mRT1y6rAi7aBw2qPn3Lzbb8btjvpaXEBKujZE",
  "key20": "4bVVuhGANb1bYGUQZciDLNEKPoeR552wm1tZkvCytq94cSfwUgLFq7q9iATHJv4R1s5CEgZyN2X171fd9RoBDroJ",
  "key21": "yP5sDSQ8Q78dgMhNLuvxQFvTymszLUQ7CBMhjkgK5M9Zg5TpJVwbLGp9tAh3TtyvL3SoC1werXRqHvoWv81EQAG",
  "key22": "ceXQiPGDysfE4pqpnuuKCv75Phg7gs3ZqH5Zt6TCXnRHKDA3gHEJ5X8TT1mfJNG67UCX4QR9LnB4YuDzFiT7S1T",
  "key23": "3qSfcqu6nT8RErKd157ZAt8HfrfyNDN4mQ3w967dv4S3qTFZYW5Y3CVoDxMkyXDoLCDuWBauibx42bvAnHugGgE1",
  "key24": "MsVPxRgN5SCGNmUezA55btQomt4gQFrsBhjMWKUyunYpFpV1UTzuAfvK6swMDkYRuw3CKd9R79dMYdQd6Pbv256",
  "key25": "26Jx5kmcuaHVR1e8Aq4iY6UHeRKu7VyQh2pxHHFw1XP59qK3oSgm7nbLHzjb8TCrWjZbLKDDUyfinsgmeRTjSq3Z",
  "key26": "pkQ8oszAXSyiiY6oGhZTcabdNzbtEXMZFuQDmrweSnTtYQxjhit2Vh5tKvBLPvxLhLHJJs7DBMK4mixyXsgR3SR",
  "key27": "9Xrcgxe1RfxycHA8Dr7V7MN1WEpev2RkMiSvqnetdeKqnisKwtVW9yBhhaE1NC4e7LAb99fuXyHXd1tWJYvuiVe",
  "key28": "Tq8PYeMDwyufpvcewj1k6BsiyE3TrzbPA2e3CVxAHAJgCrNP4z13pGasHgHqF57o4quL34EFAVCcExhqzJ22sxa",
  "key29": "yFmhKucF2VLmsatcgtAhs8MrHoAT3FjrehKrX1BGUqQ3L48EPE8H6pSpEva9cUhKJfaJ84jqLpNW82waovQRxqb",
  "key30": "SJ46oCX7LzAeAMrP3fwXCacktspWJDkuAWcUubCWLvHY8gByDzcvNHCh3UsTMSHmwmopuCfMreYqfUsHSLnyuDz",
  "key31": "2mm3WZPjehbMreZKMkwxwDSKSznLadNJEwmsukvPxr4vWupx7TdChVL1Ws5kH3vEXcJy7hpjDUY4GbbWm7DajUbG",
  "key32": "2B3gjBGmbxpxe1bWkdn1ird5XGy39ynVDCcsdre3PQMJthnDAmf7HrVeMEKkuP2MySgCcaMeQFcYNrfPnQtmQBdc",
  "key33": "waSekfE5V3Zrfg7s2Hskpc1yRBje2Rbd4ZDH4WEh6v7w2h85M5z7F92fpa59aQ2EVnS68hFjGHjgceLY4tZFh2v",
  "key34": "hAfPD4E9mFTisP7EnJd5jdfifmkG4vcXTnQS6ouhD8TpyfAB78j6vPSWMHVRK2UpJ4ZpD1iE1RZxUWky7N27JhQ",
  "key35": "27d3wRkfyTFiMmGkYMhgRY9JWV1PUmiTAf2jz9hk4zWqtMFUZpyVC7DsTyMoSCmoFEovyQQdeNvGJfD38i8vJnaU",
  "key36": "3pZ2qvRoo6DzyMfPNGB6LSGQdBaHAjBjCpPK7FAg948i6X7eKQEct3Qdmmp3exWx6Y6PY5QudTGbENxN7p72geJ3",
  "key37": "3xG8RuNBujjnaHhvuFS6J1hS6MvBod8EFMGV4cA9kr4MEU7E1wD8DwAXRDxwGhG84zFZ7RZnSsHeFEFZqsfVRofG",
  "key38": "2TBwonaSqErvNmnbdXq6ZR33Gc2gvMsdFPk7sYb1WwavYrnp7DU2gVYcRHR5b2Hc3dR427K2ZvHJ98RdXWMxPrjc",
  "key39": "62q2W25U9z7NV7M5tgrwzAZ6vP9nxkGBzGEBPSMeGbPbKHaWfGEshFX4ziBXFsUyCTwDdKwxiVwgNtFCBUHxtNGH",
  "key40": "3q8pFQAXLTvkqXdPm64dVr6XUQrC5X7aZWPRLqMurTn9nob6vbf1ZtRsrHYVdj5hMZyPh2AEdpmY5FfLiQeRQU7x",
  "key41": "2DFGFVphDeVCm2vnan2pWb1hQiGEVen7SxrbNSXpS8qSmP2SfXZLDwBbyo1bD3KYRTrjLUc1nYbwFXJ8ssXBTxwa"
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
