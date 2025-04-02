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
    "AWEmBrSNtvMYoKzJriewyGYqxwqt5t999eYBpoLRddh1ou1NwR9j42EDE5epWSPcGqFCGnbxHjtscRKpameU4rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zr12wJXEJAwctpNtcMy5JoHcv2YCLuj1n3nrtGn1f9oKbyyuCT7AUCfihMt6R6MN9eTyQtvmE6Bc8E5VgEtN4Hh",
  "key1": "3uMJstpm4pKvUt1LNYGatNZAC4EoW2asJp7mizCdzEThStQpXevoC5YEHUYGdeQDPGWJrGqYj9dAtnediNQa4Qd3",
  "key2": "4S2378Rqin4wAKpDTaYncehtv2em65nT1rdoPUFHpTV8oNgAfwJgHyd1oxmQEQ3SB1iJ2FN9DwCBaiSyywrZN96P",
  "key3": "T6A2NKaEQqYKQk2PWdvvN3MAbwwGBK2NTrNKPT6EeJyKfP9G1MnwE1C3fpvijW6pPAKu7kUgPFPxDUdKMG43xh6",
  "key4": "2yVNVxWi8r9vRTkm8nmdChTNwqQg5k2uR31WYYXaAuyDrjxtiMdn1zBYJp5Y2WWQfpitZNxdHMcmirWRdvdrnXS5",
  "key5": "KLbmoxvdG4ePGp7h5jWJMfuag53cCzA5EpPREFpCzoy3qsFFSBezprofcGjDZCHZRhPWw3FLhPZSnxdCFUA1bcS",
  "key6": "4dUog2Zie91rs2EaMWChAdjn7oiopfAxvV6f97vorExxVGgZbYXjAnFVyq3rMv4XDFJXDZ4BFFKwymMm5ceCXHcT",
  "key7": "K62K5vFrV3KCbj7zHRqt3M2ryM53gYridKENWs7N8AK5qCQRUnGoLSMB4qSpcXuYfybFCCxiPUo2f8sYqFvtFwa",
  "key8": "5N2Takm2gcnNZMCTyBan8npcJpJxNQffCEggup3WT3XPMuqGtgohYJEgLkSUncPAjSS2LSkuesgKNXPXVTKSVp5b",
  "key9": "2FHU4bYRTow147DV6Ajce5ZA37gAnFVuk7t4LSPpyD1rNDSmFB8L8Eudb9pS7qDCh15nrQEp95H7UsTb5faMC24z",
  "key10": "5vTpqSN8SqC2eDd1JERWXNd8sG61pzDz4UY3Co3tgH3dnk4cyXSKcufcJfQ7LmnMHdrjt8zvyTSgAAUeicQx5K4v",
  "key11": "5o792dWW3RNUPWaY2HNy9Xp4wLMmp56r5qFYHyDGifbr7xBL1xdYAk5ebfJtMERomw9AZN9YwmmjvPXhWK2CNtoQ",
  "key12": "nZsEdxgaH2bXUfpeFbsgesxmxZ95Y2cxe7PiSK8NvX2chZu4VuHd3hT1K6KvZnvXvsbkFzAx5NBzWYoLy5RURyx",
  "key13": "cHVWtFQDX3SUnteX3B21GDVdyLBPeGUiHp82U9jmSpem9zzm1kN9mUi9uJ2sfYM9fbnpWpN6pH4YoakWk2u186d",
  "key14": "2cxukjkLpWSxBZvnUGFFf9hXzF4QuomW2yofg2XaVMh26gauo9DJDeewb8J7frXdEiAbH5wbcrm3F2UbjQfMsJB8",
  "key15": "ttnBjyX4w8o2YeZeM19WqVR2r5yUDgnsxFJiGSk1i31dJbBn789YusNdsJHFnMgbrHPd1CquqeR38gDPGHUUG4n",
  "key16": "5T5U9Aaw5SbHZhFQe1MA9VQ9r1qGvs6ZHDN5eYti1LYTw9MWLHjxWBsRpa68SyS8L7Y5zn81qS7KdbQo9QJnaFaC",
  "key17": "2uxKzFP3Cviw1UNryLskN7idKw2SzT11gaX7CnsEFFc9zi28AqCs9WffrTib6p1voruc8Bnj4AbHA55DemkRmKVY",
  "key18": "5KiECSn6eZk9777Y3CWmR3xrzd8eRDcbP1Gd88LsSp72tUEdMwLfh9gEEQPnkvnfYQhXEpUP1wYR6PQhrAAdweGi",
  "key19": "2sy3gbBj8Fg6AHa8mWidfCYmHhcLoCtSEUTAjAVdyxPT12Ut6CupqV4tx8rPM8PmZ8nZy4fpxFqzZnSFvdEN5akx",
  "key20": "3iVJyAMhk1DqbrMDAPSg3FyMaMZUPQhWnB6AVrbFdnwkTdEGe2ZPazPP29Se4pniacxG99VS2Bdy5zoy9EMaebg8",
  "key21": "szkoqJoRV3Fp4bb1L3WMPmQKSYaZaXdowqf4Tb7A1NTWPqhSxaWMzabNc7EUnZ49aLhe8QyT8vsDreYy22W2bK9",
  "key22": "61VW6fd36FiPmWMcUSaEEWCiaXhAMZgycCbLu3HbSGer13SDcp2kU5AcrM1KEMaJKxHHjS1jLpx4tC73xoUtvwM",
  "key23": "3oUS3HwfXQXvgwrFwXJ3H2azuc5XRs6RpNakCJvtFReojiJLKzSbwUzyBVdKQBrNHYv1FMiqVTMQy2Q6Rpz85vX2",
  "key24": "5SyB4j1jXJyDgfSzCiVqEgzfGKRJ1qAP46fEm4uFS6rVakdPVu3b92whCq1PQU7DPVZSiZSLYeKtzDup7h1P2vnd",
  "key25": "1ASXpa36Swjx8ghv65UQvHCJ1S4GZdu192uWj4YECemBMLq2JE5Y8896LRCWqTKQJvL54GCketdFjEPd9uA3s61",
  "key26": "2RCyqANqgxLJnybuhUvdeDTEZiDyg766EZfr12KebZCys7NWPS9MXE3KH8NiHfKuvne2fczTTrMM616FH9piCekG",
  "key27": "4pDkqnouUSwZTS4qJHej9eEwFE2sFRB2pKRmEyBgqdWkX5H58xXQfF7CnQaDwbCejTXP4889bGwtnCP5zwTDFpKG",
  "key28": "42oombrCqaCA3Chzb1TJwQCRdK5MicU9fFzmMtyCry59KaUStesQ1hoFQ82HXhAiNn2xhwJ4t4BN9L25CbVPzXHE",
  "key29": "4s4zFM7G4CuVT4SaJiFXANomYE4R2YcaT4BJRDLLUxQqtsyZjamjTcWFabKRL23tqfo3o7KD6KMAUe1T9NuZoUEu",
  "key30": "5aKu8XAqrmnSzuiGnL6ZYAu9mroHnuaNQWzFmAcNPzke7LYedagEkhb9Nygpe3NRSgvhDwGFrqSY8EiXVcgLKP9m",
  "key31": "3Rpxt8YzvezQEQnYH6WuokJ4fxmab8SWorCv2QG6X9NEgdiucUq85VdmAhKsJuia4qUAECxDGkVeH4ueXHLsJEDB",
  "key32": "2cxHVguVvKeGLbMLC78n2PVYFjsRnZJiCrnjGCPTgoS1qMPJWezCLECt3oay12eQErBqZRUaPNQ1QK4fw62sXufK",
  "key33": "3GeshyYZetchVPeBe1H9Y8K1YHYc1dXtcGq1hJvv1RrP3gDEeDEVWZpE6kgNTQf3tK2drS7ci7xiET6WBhKhcoBZ",
  "key34": "4CoLdd7CWo8eiBEhqvArM93XNjPUr75YffUV6U5XBQkpad1dQJJwR5ZEYtBMemggUhDJ7CDysK8u7Hsd9F9Zf2Xg",
  "key35": "3ZfSHAvPkazn19X4XCB2BfUVufvnQVy519ouRmCrGfH1upkQzvjQwNHAFonu3qx4b1g6TRfK7ahLEoUVAHyz2sP3",
  "key36": "55yWE1Qq7WuQaZB6w4RnaVfgk65ZxXEq5wMVe97WB9uQBQ1AHYXx22jHKwbEhkif23f5vKsgrc4UUp2HJft25k6b",
  "key37": "r2YwUwLd8Kdpct8cdTiM68j4BSL3tgUpfDEi4Fxvh5y2Stx5HeBtEu3KjG9qurRKUDjXDf7s35qaTRAJjusJj9M",
  "key38": "3SQudTDJrZUq6XAzL6DSxHDBdcWJZHrvQGuPRkEbTxmDRzC7msyFsAaXd9oZvou72X4cowme43AySi9KSivDdTB6",
  "key39": "ZeWtUbS9LK4K1yBwomME6PrHC94WpkwX4r3ubQiRJoEPhf8XjXa3h5GzPdaq6a3mhXUkibLuZU2DTGLBBzPS94u",
  "key40": "h43uwywoRTDB1xnpMCZgDR9dwFyjLUV3T8d3ZkMSb55Ea9c1xY2RYLucLG6bmsjSxDK1eifNx8URmCwDh9WdDX1",
  "key41": "MBK5yADYex6NfPkBDdMcp4hoaSMLhCCv2BQqrFtBAv9rUyVL9jx3U1gjmab3oTuZXMhF11q4Qdp2xafstG5En3a",
  "key42": "27cravos3eo6FdfYz3KpH81NvGc7j746x7UT8iD6JAxVJweLzVy4FSHiLyE9QfTCmn5kF6e93YYgiQr94NWY4inj",
  "key43": "2VR2rtA4PcU8vudwRWLBhYWw6Jd2mfH81RSyspzXjohYNYiJW1rg1NnfuhdJ4X2Vt8MDroxp5yN3hc4LWRbeRERJ",
  "key44": "67pg5mtVKyZjVyY8Pn38KS638o8qra2gFjhzVpJniLeXjPyZSpyBXw8puGGcCdK6Ky9gy9VdxuaA8pbzGM4Byd68",
  "key45": "zDNVMnmEAdfiFTGRae6oypQ9XRJDBA5zSh7ozjPdSc1qf7VV24Sue4Nr8YiyXTzfKJrPU8jvTXpF9KdGT3ghTZo",
  "key46": "2d1Qz98jMymndnFYWzeQcg8nBNwAoB5pEzyKd8TjFzdJc7BujNLvb2TJrWyHtMdYTCuM6dVeWXcmPscuBFWUTvp6",
  "key47": "w8tyhMpUByaKZShq1DjnRJJDbro615o3tUbxtWPyhjsuMfY5MN7H84pgcEUKk9QZyLpKWpbfyGwxaCPNCZyHwCc",
  "key48": "3pQFuMYxe6MDkvgQtZVTNRJhWCmGJiYFk1Vu5qwePGyZHgHBszdBq7fSynRxZbVprnNJ1kwL18LmYNyVFMHbS5mr"
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
