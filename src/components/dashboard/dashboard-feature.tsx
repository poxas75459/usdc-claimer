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
    "3pvX1JGs4aHLBD9TfpD1YzY7EVGvkduwN57Ti4hhDiWG7Z6MKz3L8f1paKqJub3tujPqVvFnv1HCvEz7F3uTUnb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Dk8M2AuRQg8fBMVpnZDuor5yXu7Vb8w94k3WFznNMZgV6eiBbc2Ts5LHRRMPBZac5yG4F31ifBS3ZwKdGzjjsR",
  "key1": "3wKr8otCguc1UnJ9asncmN7myenEKCvPzYzToxCpkTkZ15gSrFRZiiL3SZ4dYKJUCuSoSiAZJk9vutwT8Av7wzZA",
  "key2": "52KHqyKv6JZH14T1AY76EYP88bC2FawwTTLdWhPG1Th3xf8RXmjy2hx5H9uy2rVxqZhUNwT6Fg7thJJ98WkNe2r9",
  "key3": "ywK2hZ5hZKnmHHFFTdZxeLLLACPnEE7AwjwZrrark4m8gcewm4gjeP3wCAeR29iUUpgcqbKwwXGqxNyPEEKDbuH",
  "key4": "3gk3umjNQZxLY6ZVinG1CQfDpRb998CDcSG3NuSCW3WcmQ84uTgVAFRnvDtxTEwbdRatoimSowpN7F31Ckvq7mFw",
  "key5": "3doKJiYga3EhmLD7fSrj2dTVXYSGFWZtqV7P3NBFGqxmAXspBDLyqoG1BwZYFYGMqKzedwi3Px7r4NvLGbCVrBWM",
  "key6": "5aymSseeEeNXoVMTgeqdUJztyhETJrcmf81GNAMgwWkdo51gmySUdjmpp1JCeRuGsDxTrSFWLVL2UFpT8J4oXCmJ",
  "key7": "65mgec1BPt3nYFDBibKtoZoNuw7XVFR3Visb8ymCNWeeLfyY8HwHx36YAuasTBCGJwe1vZo6Kg9HFhDnyTxtZDsc",
  "key8": "2JhgJYTd17zWdmtdvZkr77UobWwBvLxmjiqdaw1FCFNhnpFCpTFH8DH58spkcVCy6LVtXvNTadkzougZguTXFneN",
  "key9": "32HFfXUvg3g4P6Tgv4DR6vjVo12oc9vb6ShwFjwBfPxvy6fpbHeVQEd91bFwfZrLUzJkEsyPUrHzuntMpp269cmj",
  "key10": "2JjnagDweBvBvaz2tpb9QhUZZAZYqwL64i5eAtCwv1bVL2j5KqHYAKdre6otJtEpLM9qtDL6VmfugE59xb654Jpr",
  "key11": "5U3xvGBShcVVQ8Xm865tHowD3mG7YT6fC1U5JZSxg5U4JCM1G2BzYQ5KmB3BgHjrx3tTvHtan53dUi9enUzYTrgw",
  "key12": "4kkxXtRUCyfkq8roYdoxnyVQ6bJyGe2MB5e2zboxTmBcemN1Eqgpj4gf7DtSsRgK483keq7VdpyzsSbLJy5tpEjg",
  "key13": "25E7QTZ2B24rtpkciXF9wgJ636m6YW8cGivqcKoTnmKRSkykNpVyJFaszt9WmVWHAbzFDRypNDzELoaFDYLDg3F1",
  "key14": "5aR52YcdSqcKqJa2Qg7YZUY3XCjuGNXz1RU98JoKqN9rsf2G4v5Qpaw6toCTs6R81jAvLA25ajwyKdVappkXyV9b",
  "key15": "5UzgwdPzbtnbSKAqpo4MuucsMkWS8gS5tF83mxPjBx8ZZEwroWoUr1rgscdiErBiPjcvVLkHopmF6uPtRFABQ95J",
  "key16": "5Zsaom694D1RMvsdA4rgAqrg828MjPxpXQvtqAwYwKeJ4vsmok9SLVPdzxHRUtio5NY6rb4TKpB5tRruUzW3ZHfc",
  "key17": "487NHa4z1S3XXoXfxrfotSwnrNHCxKVdqD82yEaPVLS27GwJnrQ1EXvhFex7Zwzjyqx4tkeQTbNqqY7rYYeirzNv",
  "key18": "5GnA1d6DkKtV28NoXRHme4ZsMJVRi6ZDwfKoUTvRMVx81xgZG3NnSnNEBVPzVNGsULr27BgrzBx1vmSvYtCk1ov2",
  "key19": "3DYr43tpWSfS8wvyMXot8hKSFLi8icGTkebvq7rqtRfWM8NLDUcbgVNnkbK2PDGfGv9HwVRboBQ75TczHPCbMfxN",
  "key20": "3xbSUFChtmWHUAHTumQ7yNpFnLAVm12XK5vci3sSZ4D8NCjrr1Tf649kb99DmQZFH1yYTSia6hDNC6ssVpfXuWxk",
  "key21": "WToZgGtYyezrG3NpUJGakwHzHfCZN9nW5zb7x1kHwz4s12PvJXfqpTr1kcxdc4Pj2322YcRPcvaot8qyQy5s918",
  "key22": "VqMew8238iqsvNBfPSCYH93twg67UgkxXwyPd5oyppjxeHQZNrwgbbCrczpHVrrforQPWHKnQtFxtGVFgtPx9Lj",
  "key23": "2KcY4w3cdgfm5z77jmDrnJQEjuaNquetC52RPddjsd3u8oqGovQZ4XPpS3XRS4Wtz5a87KyXATk8ApBFDxLBkgBS",
  "key24": "54Fny8MtHaKgrLzAnxqrq5etJxs7CxJWuZuH76BUAEG7HdLb2AB2zYQrZwfa4XrUeoasxoemc976Rri2WyFs6PXL",
  "key25": "NtcWcLz5PDXsfdUSTvdT9YikmeV2cirSHjYMBVhsNY8NX6ttH5EWRQ1A2zfAy27tWi5vYPo5PxaYmZASGCXAww7",
  "key26": "4gQfrgM74MeZXXpZRC7MFoZWAApDUj91XQ2DBhs9UvngDhbc6BCutGzkswwHrUcBBd2bxvQhb1yYTJedavQPXd8M",
  "key27": "32LunjRyJErYLQw544ZNjJZvDNF8dG8no3PogAAk75wfrqbv1FAsHX63L87Md2PuBhp371WZGQ55kjcmcPe4Y3Wi",
  "key28": "5s627v9fgK9neqv2yggKC7WB1Hu2j75LEeHtq4JyLw3qVmZKaT8TpYR7GYnKUaFg44UpUjtyDhyosh3S7af5nh4J",
  "key29": "2twomhwhzrLC6BX1m4JKvkknAXuHyKb6BMx7cR76pQYJWNArmsxkuhBkTryYuL8gHnn5SAvJxmixyMHzxfojSfTD",
  "key30": "2Rmg7ZJfTFpfeihYn8XrgDR1ovrv8g5nRBnxx2UrDmnAytz6wRrzicTmoG49obn7sFZc3m95kFXhSAzrh89YQVSM",
  "key31": "5vMEY1fxqC69H6VA2VnnCaq5PLi8yu5Hjzaex5rgwiCqWoGiuK1fJ2x4kduEhUzDaBDp3fpKRvhuxqPtrfwFAvAD",
  "key32": "23bRNNW8y2Y3ibSvQHrruh7J4zCBX22sZ6c17sYUpb5CPDyvuK2f8BVEvioRpJ8JHR11qyxUHdckW3uzAcreNRKU",
  "key33": "2wgZrniGzuoWnig8xeUwEpnaAebaMF2WZNM36Mct8zahJoNacbJRpz1QJpLKCD1QvE6DBznKkynQvrnNfN6pUoF9",
  "key34": "4U9yxeovtSjpX8GYWecXQPNDzcyt8Qu6Qwh5Wx3NPB5ZwrqvhGzps1t8hGARM8NUTQE6fz5Ykp2hDxjGwR92oGde",
  "key35": "4ARfn5vMHoXzqB3woA3oc4VSKQ6BfU9gzDjRaeAFmLg7XQxuDdM4EEz7NmbwX2fkCUDuDc1Fnd48aT5NFX6REE72",
  "key36": "2QXRCWjFyBvZREaBQZC4N82SwB7JiLoSip31cUFnthhPndfCe8q5ZuRXDX1LhmK9x6Ew8u9GkmQWS5KB5GRHMBYo",
  "key37": "3m87eUMLf5kmWoGStsQWzAkH9ezpGA5Dn9X299tCSu8DbJA5x8MX6DK7zPFhb2YHzg1pchATHr9DmvGE7XwQpn9u",
  "key38": "TYpg6szMKEbvQaV9ipwtYR82Qt6VYqbEKGZB9NazdFeosND7dndC97QFuYn6wSD6i4HBmLcPKxBU6BG4yv85dxE",
  "key39": "xRDEhyGuToBKXGpWmCwZavtRAHfc2ycquUoxzkSt2A1utKM86ebt3MVF8KSKEAPJz7HdPDbDfJvkaa2HLjjoFSp",
  "key40": "4byAP6HQJff4DtomQ2o9w6nxYAjoNg4n9gw9xkiAUsGiLL62MMUJRJyetQ3Dx1aHbVMKhoVQYKM1ikYqgVmrpsMh",
  "key41": "5LPfas7388kn6nAub2LCf4YjgS3R228GqNaRNWEwZhZDtMzop1t9q4H6R9CYTpFUCiUBRjJ8VRZmRutcc4uHsVkG"
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
