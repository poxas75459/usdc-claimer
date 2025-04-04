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
    "EFkjmtjsMnoV8rBCouxCCspP5uzT87BWkMpQMYYKokZ2FtCzt5RZjLN2YoxQUgwUKC1UaSi2qypmvxe51gqf4sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qmyt7nLgnro4m2aZd2bRWMKHAd9o7fD3bQvqz9uZcLLphctGndkvqj9T9fCX8PWpoBmbpwQqyxCktG2fJpAcJht",
  "key1": "2sDSV1sct2pfrLmvza9i1vtrQuEBQpqNgynNQ6xqjX6mk6sx6w9cDufL1njf8LhKtqxif3zudJTAonGfiNZpwoAg",
  "key2": "4QenwF3YMLwwDRrSvyrMQ2Y6Dn4KPW1P4UvddzakaKu1BtyW5Jq4ueYhGM3naam2BcU6Wf6eUYKfeEb6yBAUaEon",
  "key3": "C3pKohGjEAeNi6EjEo4B3BqzBgCUftJzHKzeZ9CdYSuaojS6Q3MCDkT6QZn2dEqqf28KnAN34uBsmVsb7X4XK3h",
  "key4": "2hphC8AZMfaQ2vC1YvUtdTysfjauNXg6eXMDx1S5nYHSYiVsm1Dz3UAxmtRtiE4vztZZenDdpdyktKMGSt95S18S",
  "key5": "4zDuf9GVuGf7x5HKq2nEQzqoaurxnfG8gNq4V714PhFYwq94m3wPwch4doJPUeeFUcHma7LC9WBb2jPnQapWfujz",
  "key6": "3CvYfTkTc8MqkJzjMjPQxMLLXPgi9RiiyTzaBRmsDCjZdRxK3ty66sQG4FcmXBeAogAVwiK1uoTVdU5iQ5uwfvJS",
  "key7": "5EAWiMfV8bUfzDhNhKZS2NVh7JXFV5HVEmYoLZ6LViaqPieb1LNdqfs6A3UvrN2Ln6NsrdpFzrFZUYBrEutVTq8D",
  "key8": "4h83gFb6yaL14HHoAcz7ghDPyqGknHJyF5bhALZhLDGyqh1XvaqCzdo2F1GGWNNcZm8skcNLatHySu5r13bvUEEB",
  "key9": "3fAea2KdyFzBBx7eKCdNKiPxciJCEDdqAC83W93CN7JKrDtESDYmanTQtaQxpsSyrYasGFZashKpP8rJuwQx8DQF",
  "key10": "4fJdMXThBTHsSkbMFwtXZWb16GhhDCpvwfCgEqotfwSCRz3sj5ixq7ZV7q6fQ2gTXiBqUUTcrtvRymC5wbYu2K6U",
  "key11": "3kVsVxkpCBmwypmXydbTAJE9gG241HJPDuu9yUaDj1V7io3dj7FiaMBCJCFhozWxkAkGgXNXPJwRcjGWAt1waDnV",
  "key12": "49Y9EN4ZkvA15StAXWNewUjncTHWNxAYqycc8hKJnVg3Fx4dspUxgc75Wf4byMTzHZmLdcGH11rUv92KrEgwtz3o",
  "key13": "3pSFVmBJHSCtaFkbPibVmbqL2WuTzEPfUaNGMttWRTRiYSiJBMKj8Dj94zHShQXViJVK6UvPruCKzwuaySWnMxhc",
  "key14": "4V6esTzZ5mebfqiKD4uMWvYGcbbY9W6JqaiMs4TeaGE4sxkLoSDMAwwpTRKpyLNUpdTSHMT2UrTFV6gTGnHfR8GS",
  "key15": "4PvH1DTxpsx2W3U9RZPQUKvz4PGFZYxLEaNyp3yQ5PVSbprRMDw7AY5RL1NGxyVhfZcMykG8tpXK3pW35HZz6p3z",
  "key16": "5vMKcJzcKVVWsckaY4rLPxYpAswQtzGcnRBTAkUk78F9YiecSv62Ugemym1UerAyvxrhfw8PB4Xf98o1HNwQpgRk",
  "key17": "4XEkzE6JEEySMA9YRJgMZqXU3w8iHwvi66G2i8oUb6wE6v4C3ZqNYZSwCQZUwecome7vpeWA5VyPxTRm4L2mHLFm",
  "key18": "ZhqvfY7X43Kw9jPaKw6GZDiBhgLBnAPFry4BhqFc3GjRQE6j23hZZvQomYm7cw9vyYg9CT2F34JD6hwscmkpxr9",
  "key19": "3MnQVvr1Rs25xKkrnWQWovc9ffLKB7CNCcXShSKMwhVuiNNGjy3F1BuaBewvgbHHMq53WKiDKRnaCCPNJVJVwfpj",
  "key20": "2bk5mHt7GsL1RwJUSumSfdjM2SGPNNBdtUi4i7Jv5pJic9tpt8FnrUKDQF1C71dUZZKDhCWvby5LAEY3Lrxz2bb6",
  "key21": "2cPQEDrVTJEHXQrmCnVXLCkC4jqXUKxzmGhsHXroSWRUWtgF9ucuHJJvXm4HSEJSwf2Nn6Af92FpAYfhGECyCL9G",
  "key22": "Mftf5GTD8T27JqfSPn19pQByYy7wPxNYDYnL9jjMfT6SwgurRVkwBkQXDnZeVBtqdHZgLQtp4d7wFM1GbAQ13i8",
  "key23": "4VQEa9ELrf6UjhYHPCiFCjH6vnbNMWxQUJmwYdFAXdretf3mPJHV42mJ9W3WGMc4pGUgFeomiZsUzp87M4NcroQn",
  "key24": "23yghKVCAF8GBt1Ctvhn8Jq8TCcLrkJBUuX7ev116CJtEPWzRQAmtGBfdziCEbjXntkU7BTh9E3o5cbgUg8Z4PXX",
  "key25": "3WvL6BKQAmBAg1k9cteFovydwQqoiTct9c6AhJzDG2tMhhua9yRXbwhvqry2At7C9mqHHWTrXfyv9X2bDHsjo3pz",
  "key26": "2NkCF2Dub2JsBR9Geyk5qc6p16C6g7Eiqd2TrUSrCbak3EwUaGHvtayhDDpvVQTG1ymjr8ML2oruR5b4K1kTfygT",
  "key27": "2Y2rPkG7tuaC9sbw9fVuMncFoJapGCvNyxaERwq7MCtc8QKZwzm6Dpd1edJMbacnZBYC97o3h6VZn4E9E8J1A8Qu",
  "key28": "42rVZn2wquEPLZjGR7ZCtPyDAFwAJUXXK86QHXJEyhSpa1YqXEADdbo8Y8AxY3mrpRaAyutJdZDivQrNLWJEj9pG",
  "key29": "3P4NiAADewNoD8jQvVxd8aqw5bHiLBooRHwD4ETPcehHzGS3R97o4TG695ApfB1cboeFy8fDyysRoEj9UPphWme3",
  "key30": "2Xue9edUTJpNjRXwfPdxypuT46f3LZaP9s7WsJgAu9tCKU7CwWsZ865CgxYeZPmpCLJHbKRLkPkn9p9mcnstUBJn",
  "key31": "5BS6RzRKNhnAVowW1n9AJs5GCfNLesXaNy5Z1Je3QJ4kv9fhe6TeF7yHm3m3tYvvigaD5juXbNVtxmMPvyzJ8WVi",
  "key32": "5K5w5YwmFGHdJkk7ixvd7oQSiSJSb1v68wezSJQ8WtR38Ti4cVDBJCkskCQZjGSmuQy3CYBuCjDCdesWFmQ7HgeM",
  "key33": "3fZs8LBG16mPwPxFMT17unJWiCw5yHvv8fPGoCNzFXv3xHosP5ybKbhrMQ48hd5F1x1ZDy7QF8AbdHK4QZPpRskQ",
  "key34": "WvFSBtGCsqZjPbEw4jJnYfdLU2Fxz61zigcQ9kJtZh3MfAmV32jSg9mh2DEE8kcX5QwwNhkHeMmHsJ814gq9JbD",
  "key35": "2zSm2rPgpa3Abad6gtRme6LFiiUhme8m86qJo51U2JXhZuVnpoADUwCsPzjPSX29n5bExQFYNNM4YGoc3NRmuQvQ",
  "key36": "54FP9ZdbBZpu8hQM8EvSXabQcPZhs3ejKj8qHMUJV7AiSnq12hAeGPNi7MiDnYJbqK7tC2BxnVNCC2GdC1eCQ6w2",
  "key37": "3ZcnBEjsoAFhF7SbUBEazjPdH51kDQGR9ZzQ3rxBkaS4tRDGemtFioaD9iuPyW6F6aUrrpmarUR6Ts2x2w464ydU",
  "key38": "WPXtUruET1syV39VBRSxAwndsqk6MnfUJz3GjrHdnZMProwJa7YT4rw7bVdKDK9f9yCDAcg2sbn9dAM1HtsWZ5U",
  "key39": "JnnW1Kc48752bz6Ei2GswBeMSkA9ThvwM5wzJeSSFSfWTA4m6GRjTzzN7NdboXNCKRL27q76Er2oc1nAMW3FygX",
  "key40": "wMKPfauw9x2RuaqsZuXfb8tnvFi7MKcqL43TpQfjSBUKUXUYfwDY7gcyS2AkgyLPFdvYCkPCX2ACvE6L6rS4bYk",
  "key41": "4wzAKQiMrh9SdCVptPhk6uGS3XpGJgqoC3DPQHyLgXxN32eqSqVJtDXAb9KJGAB4uxfdsMfGdpidXjSUb7U9UhYz",
  "key42": "4YNVuWraL6V81cmJ2eg7QfPGS2J2LqKnnKSsg1he5jMgmnTQHrJkStCLWoDN7Pbsn3UGQ3qe6vGYuTAVUb6RdXTb",
  "key43": "4hiUNSw5CUb4Fxyvvmx3CT7kMeFfQQQ2UjH7EpifZxaXaE2G6dL6qJwjeT7wCabQK6jKzBf1VytAKeBdCJSNkyNA"
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
