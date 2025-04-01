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
    "3KJ1pJHTdnhyFehWiJMFiin9jeZpU1SvRpbeb3UBe6CduWEoBwCaFj6wvvr7m1wDw67pdkx8BT29rAfVJ9cnHR1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34dQGx87FVHSLmaJSC6GVeEDQyVdETnhyf9wJxotPAbA7aF4X6e4bpju84ZFoFiYXUWNcrsqvroGA4h8hUxzmzyi",
  "key1": "E8gQrg9uRg6fyXnn4YjupLyXe3QzCS6DdqcJosAiKLLAcSfhkbPXtZyTMdJoc4FKTavQyXwLYJetvkHiWNkikfa",
  "key2": "u7Fhp4ECXjXm2BhpzqLGGAHhLz4uhEMQrUaiT2f7mokA4AMX8qcSQ2dhBGb1oLo9rDGUojQMSisTAPRs52BSrev",
  "key3": "37fHntjPqyFLGKz7fxVonKU17d3vAZzJfPYTVYtQYJs1YrJ8UGF7sfPaD2r9YbaPJZtRej8oy7Bbacye5LbWv4r9",
  "key4": "4jA4m9dSd3R8L8Ptkmvr2fj35UyXNYsGzJs457fqa5w9Zw7bvvF8RZ54f7ArcX99otLjzij8N3J4o5G8CizuNYS4",
  "key5": "24eE11ygYaarkNJ9CWfZhdCzeRCePM1N6wBuiozjZrS8doW6v5hUe3Js6j219SxrPf1hgVvdAt8o9eVUs7Dfu5ni",
  "key6": "2wfV6PxnM6EHjzR98UfnnVvrcYLngtq3YfK6U3q6hj7KmiCadcfAGx3dDXzjWte3nGc4CFoMhXcx4SyyQDRovdai",
  "key7": "4RUf6rZKoXzLzkH22MwmLbz3dPK34fXXruJy35rPn9N86cMNzgTtCQmbFdA7yeHBz4ujf2NwoqJ3j6S7NgKixYbB",
  "key8": "3vBd5BeCHPs5GyCD69i3EXGX2G3nSejiadyGDmkKdTusWTF8kv3FHKp6A7DcAwoi4LpkKJ9FCMMBafCzpN7e16zy",
  "key9": "4aNKeiB9K15EPrYE1hruE85tTVD43pt2HWvoK9rND5JQeJZnTa8tvazykE8ARKjki7PrK56MmFpXkMqsN89bW4Sc",
  "key10": "4m8ci7rs2vdiYr58wxvCWziGFqMWY8rtcRH8HHX6pYETN3fv8bgWr9W74Avijbt4PEC5q6GGocDjGHiGCk6pQJe4",
  "key11": "2WHhG1ftMyMjnLYXFCjBW2SUEFKeHBqBPDuHRVakaND33tDicDt5SKGESNppGT3aHS54BTb5cVCpjWKffSVpMWRv",
  "key12": "7ofRPfJodUGfK8knLN6V3ZcGAW6NfeDytDSXhY75oTuidPfuvq7zySG6bYsgujgcUng9ykDriG9Ku4Bf4MoaZ23",
  "key13": "2VZUBxYn7chCgUUrSHahrHNmYDnwct7mG2KpEpjx5xLj63nWHeT9GW5dfDVuL1Cwp4gkUABcSK861dFYJK8Z7Np4",
  "key14": "4DyQQpBUnMu1cRqRNEPMgDWz9NVqbwvjoj93kHnRPS1dg4ZHV9AKtnDAz3bQN935atHtwbhrXizjDriouuZRAqmh",
  "key15": "3fFDx6N2QWhRrdXwJahwN1HtRuCcLRtJLsWpZypKXpDbZfyUupJ774Ei2zPUDpBrpMLf2RPAGFnXGEEsWuxvE8vA",
  "key16": "FEQtkdmEKkru4Bah3heRSmJRmXBLY29Rz26K3aocH81XV9eBv3z2MuJH8z69geDP9p4cMxaCo1wjDXcUZhh4fa2",
  "key17": "5VqTuo8trJdn6A28z51hgEqqk9hwzyaBzyVTxTAVjy4TU4pd1BfeaeceL1NkwFmE1JP3VTiHSg4yoiVpKSNzibtC",
  "key18": "34RDYbjU22azey2PAwZ4okoCMZWxPR8WP4V68Dn5jzUpVVUzWa1rwquHZh3YEbnVqLXwcsXTXYDjDhvSLsi6JEFz",
  "key19": "4FbwtozGcaSGB5izG7XZLLTnyutBp4T2WvVnUZ7YXeVcDJCHunJiEKuoktV3ERB1unzoK2HnwJuXjup6Xubxap5",
  "key20": "myo8VBh3Pdz3UYDrUUguoCLKDWquJovAcKwTQ4712wWM1yRjZUkjN2Z978CMsrWf4AibUkm38xpETpnMvYc74Ba",
  "key21": "3NrxXXeKkJBiui1Jwq5KM1RQcai9iubLob9f9BjnXDmZQFiMyvYfvP33cdRutSp8QxpHG2g8fEuECNreVzpqkKBT",
  "key22": "47iKq6e9ZvsNFiK3DC2kysj59kpF2U9edRVDZGsvpVqCh56PKgnk2umps7w3mMLW7JpU7vZyftBC3myhcZ65vX9K",
  "key23": "KzJoszAnpvsUrULNThAJgPMKsYwd8PhS4i6Rv5y2eSJDNR1CxYV47aRcyuQ54WsUiZRsRSAxPaUo2RT3TAoq6y1",
  "key24": "6685LUkkhB6tLA6qSu6QYfZKANovfGjY1SajvftEbJvStEHzcNW5nhb53xqTGNCzMWoAa4dhkktMVWY8WnGAPiFz",
  "key25": "4oNpLwu7meYDmtAaFSkxdmXJevoCVWaLzFxNpCqeAw3LUxhDQjUs1ZBggELsyddpC1DmSjUDHzsgAbwn24trKR3d",
  "key26": "3Qkat2BEAgjuSfzr5yyDUHbJfaoubiJCyPaSJmMuvvraadtYNhW12o36Mn3iMJx9eEn7JojfqNAiZnxkMwC2uZRn",
  "key27": "5k7k7whKTLq7ZVZCmxBmanB4HBvHXSDG5qAY2Af5ECwHYr6jWXYfvwzK5XThah33MTjjT5eREUoMLhFUnWT4hwxj",
  "key28": "5quxQTVD3upv252g42YTef3JScxpJ64GPjxLgkHbFurbUa7bD9hjLudquLd1HYsHRsQLCEwF1KQ5viCF8jXGwjuk",
  "key29": "2hTdZrracpLUL941nZzee2EN21QhAgwgnbM4UmrHZx6yzAod2AsgsMJeQf2zoD5QDhQHeLDqBgiubFWn55aTia1i",
  "key30": "4LBWcuEgDmmvaUbxqw3hwNq9jDhx9zY7Gg6A9uc3Ne82nwg5dQNCXx1WaWQm51AD7Y11H1JwjP1DBeK73sjFVNA7",
  "key31": "LFp4tYryiUL7phP9WD1T9k6RyKatzstkpFgsAcQ4jutM2vUSdm2HM1wTBYtUbN7JqrviAviAsnzLvktpyfgVqma"
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
