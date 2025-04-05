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
    "5DbfBX2V1qNgg1TCDuvmWxyfxXUJdxUSDUgLyudHfr6GrdU5V48JN6Hu4YVw6ud29WgND2taL9aTGDaeAJnrJGYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imS3u7amCpJPQ9XPogdEPXPRGp7tX4QJVYdWtFRy4RKgnbq5CSQowbALYZsfsoNtTGwmfM279vauwgbrf1qkKfA",
  "key1": "22yv9kT2PkheCVCwbdmoWw87T2EigKi9nxj1aoiakbUAigifNJnRXWGHejQeNcWoLmPW8qDpoBufoXz4ffvApRRE",
  "key2": "5byQvrT1tam1mtZt6X9Rp6B5NUdJ5yY2zFi4edDYaJStEmT9YK9hrEF3kaZ6go1dFY2LwY6brK3ciXY5kkLFdADt",
  "key3": "3SKgg13s1Tajyr5bMESJVArrVvPUhZa9fCAkm7d1UCCPY78JnEKWrjvDcixjEwJdvVqXTgvHm7WL5EUGfcKFmhgX",
  "key4": "4N3DD16QkfEfNBjDTAahASsCVrRrAnNQk1X129iCCTPKpW3cxs4nJGBD8FhwfMX6FpSm9aDAdscfjEdArgRy1SfF",
  "key5": "2ZCgtoa5AjMctwR9UKF6PUcAmURm2ibgpPkrv3H5kfTTsJ8kjN8hjpLYoTQQKR8a5SE4UHuSCdX4bMvpqbf8sAiS",
  "key6": "sMh2FCB1cscpWVeJ1XsyBTGfnVntyTeVaghbznRAEGz1rLuwtLQXQnQ3SUfVeHer9tcSM3nctHt5Brjxa7gzVjX",
  "key7": "5sqKijMX216roumnLR6W1R1DhhqogVt2BAknMBxeHvwzJxdFaPo5o9CKicCU4rPorYwjxmkRdUuoQsD8k6rx9FoD",
  "key8": "Wf3oG4Qh7XGL91RU33zm4u1jDyDo1aLSntB7fHioieqnAwhrDWSztWRYNmP5ofKuEMN79cesmZqWtEy62BSV7bN",
  "key9": "LSdykWUPCKtDA2Qs5fEuLfaxgVxJynevPXEiV7tYScAPjwF8k2HsLRsfax7UuCG9o5coSjHYp6m3Siah2XcWXtv",
  "key10": "2qs5bufuVz8t6aN3EB8rfQcwV9NJvFHEK3pQZfLCEX4gaVanJe9op5Phy3AcaXp3LZ98ZBqWKa6j4DeLdfL3XSR4",
  "key11": "4WgyZZ8SoFzqCzmVCydEM14kPjKyfjPfSMV8R8Zu5vdXZYWhdduiqCucHQ8ec9LHxyrSWutm9v2iarR8LvJEMiwo",
  "key12": "3sAJ3GhefyXspvhNJt67p6ReoV4UfApoNnwqZCEXu2siGyCBhkFUh75JWpZf84m9u1Lx3tmpCwn9rm7q3hX4EnNS",
  "key13": "48XHjaYhbV65ffY1qUHCq57eq9zspibhFpggZXcCBYnafykTMcZXGySayfrXzXNn62vMKPmsFzNDQchLQS6UzgWP",
  "key14": "2MEeiptfCSktpoD9YnAZMeu4g24knFiEVbwMMPq9odRmTHz8eBVmVyedmHLGX4N2EJgfrxyyiQvN8zUb3ES4HKG1",
  "key15": "49BaQgu9RWharvAH33oR438AkPmLG1yqx35iafYvfuzSPzzQ8p6LvJkdhSq7KsS66PpuaCYQAmvnep4ADdu5FQxR",
  "key16": "2tDmb9YWei5yvU85CqEYNondzNUHHyCPwVCZjq3LQyySnGWRGcuuPXcLJmWhLY1a2XHGeWfJMB5aZcVH1zvMyeAh",
  "key17": "2uJqU494LV8H7PkkuukeawcWHf2oNEtvrrQ43gTVNPFEAUrxArqsnyUQ7RJaFqvoEK6raZri93o7QYahL2DezYT2",
  "key18": "pLBqGKc94Ke8Xz7tmY6ESxJ5fkUJXDVsfWT6Pg1kf8UhmSEcn1N81CEAEYWFAsFfZCSGMZkgsuNDiH6xrrz56MK",
  "key19": "RDHSuMPHyZjHLg2ir7EY1BUsMKmQyQ3PXePdp72E7cAT2H3ayorZM2fhkoCJTY4S7vTFyQxePyANZujab195cVF",
  "key20": "5Qqsar98MjMwvs4Jk7NAopG1d5cb1FhWHooc27U325SF1i3yFFhhHEmqDkUYn9ixYyBhdLo7kKHWqd9NPQRRN3QH",
  "key21": "475noZ9XNNCatFzzgzbaDaBQLPkDJLx4x8UPvZTepsYcdZJquSHKGm72nq6RVdy7Z1gjDx1vKMARq2eeZRUkRf5Q",
  "key22": "42YGgosexrwXPmoHMncEEyrwTG3sTedYAFXtHafdGNgW9tC677Fhr8oUvw5F4BxiwN8hp1U6iPZr4izF6VQrpgLe",
  "key23": "3zm6dPZNKgGhiwSp3Cq2Y7Gp6A1RToJzuAmV7W5zsZvsbDK6WxFvLZb2FaovWdAsTZAakQWQPYXnVuFF4eNChETH",
  "key24": "3yLRQtzr9uaq9cBo6Q4rwBt6bsdUT7qieZVcgkWqTRbK69YGiFFd36rJ3cxnKQ1bzynYunJH6ocqCAkBD9J8jtRQ",
  "key25": "2G2VVCY2GtjNf5kAFgjFuoQ64e5FqXTwAufuq733yp64aWAnvHEQfSDfKEZPsbX6SUHhSuFqJbmkDcBRa9jXtik6",
  "key26": "2WZZBGqHkrnA2TiLhYMMpYAJrxNXdoYSpfkZ9JgwVebASEM5SXuxAyScCgzP59CjN2XGhSpZPboPtnCiWM2pjD3P",
  "key27": "6296V982BFSe1UzvGeiZfKp9MHwg8PgeDMbUeXcHn2igjGzVYRByeM1fC4A8Bn5zqDJc5qMwq36RBgKAbeVwnWQg",
  "key28": "5LsLMiCJyNHWxVzUAn3vyZ1HVJ4ykUp8NAsT5SmcadwSFh2nqGykMbTk7DxfnwX9oKWvWLSniRZMwWpYd8d4SYXo",
  "key29": "43Lu9Dw19YvYYz47E9FpkTuyFCm2prsHUDGYJN64PVn9tBAbPyhG21jnrMBkG22CTW8Yw5s4sHVCXamaDZttmTZV",
  "key30": "4YRfdqUpEQ2Uj9Vk7HhGD5RhezekvdvHDupEsYXaKJ95giewcSkopRCgDJEwzqKcHb8fZbXUmfBwccvoMWKPxwcM",
  "key31": "2w4xrLG5eCBYa1hbVGpg6Ew5bCioT9VZtmk1fGAvRt8jpRj53RbyFVwumQKCA9JcYPsvuSnNSkrnkhJskZZYdxfp",
  "key32": "3n2L5wASqP7QwPfwEGk1ENyNKq2TGqvUKvMe5iBSk8kLPhv3SjJzDNJ11ZVZKdK3DWph3X3JgPiQrcnJArMx79Ym",
  "key33": "4pnmRLJxKNzyKWCSezijgSYSLJjsjm37KsoHrq2a1CqVZCndzQDHHoVJ1SNBKqKYJDt76mYE6cz68D2eDFiMbFco",
  "key34": "25A4vyUFzw2erNtfuThppCvigpXEnzJocq3EvPZ9R4nnr3Zq9PXHbP3Y4hBgQpG29NDuhPaKvRmDCQxHUgJ9xKvc",
  "key35": "5NoXh59trELcgTTGQZ8LEhP8fcHR5cJ4AWVHYhmngv5zWCKytZrcNZTQccLJtkjoeBRYZsXKA1HbAFbhwEsFMRu9",
  "key36": "2KqkKuQgqX9bdM5NiCDFFJs7nk2xTuQJuteK9GbHrtcp9jSdRWUugdBUDPXUH8wJaUMhWL9m1BBkg4HgYQm19eER",
  "key37": "4CV5yU4wUevzajGoHmiMswrnS4pWkG8k4JDm14J2G1WYT76D483P9UcYtgw8r3yyvnr6R6pHYQgJpdMD2TCn4gTh",
  "key38": "2zhiQV4ahH2ckh2gMAweZfQmZcEhfTTRWx4pL9pVidje4SkbTUpXGzgDU6rudSubuy39ag9JotRHoSKvD36u7Gsx",
  "key39": "4f69mVek8oUW38osikQC5WnQuGnY8YnNr4yJcRWjGXxAdDLGvn193j6oajo8WBwGtPz5gfEUyXXbevu2PmJaTzbZ",
  "key40": "32D5qb64Z6xYgcFrDE9VJDgSzpkAMCArDWuezfWp73mrJmm8y8R5KNQdB4n2Bo1WEFDw7eUcP2dritsJ6TspzmN1",
  "key41": "44tCSF5gA7WzrPaCe1DQV4mw2yBYmU48jsvvyD8JVdAYmS4FuWfYxpHy4UZyjryYKuhzFoKaRZNXfQNmsEg4t4Za",
  "key42": "UEZaramxu4UVByLb42zqjibTfzW77ffxgRFbHumLGeAWzJZ3WNPJr7b6f9nyuNt8ArC3PeWdyo9hFAT74yjVTqX",
  "key43": "63bccHPNSUZEH87CgW9ueDzLCjQ9v9hhCpqz87vBSjkT6Kq1yZDiLn6z3exVVA6eEtn32regzb54G8bzKKTFKDLP",
  "key44": "4PMFk4yiBEDqY2pEXenKFHF8mCzNoT8XKxJu4WCaE7He7ySvnewpDhxMcfGZne5cuVzQbaVg8svKgvNww94avJTs",
  "key45": "4rJBM5oQhrzE9gUiAc3Fzc6z4a2D2tSeYcx7uL5KEU4TyLiVnu1ghBfEoMLFNdvbeUpqL7JPmBGNkAeYhfHA2AXY",
  "key46": "2wkoeqiGGYcP1mB6zDuFuxrJYBH1d9J41faMFjEGRwWfw9FPXjabZ1D6EUDpn3Qa1F3a38aGVHEanhriReguNcE8",
  "key47": "4rqtPSbfvnU4DSfG7WoyXYzdXiq1816xpALqZkAeHAC8iiyhmYkydwxbBkdHHQ9MDN3sNLpWE1S7WbG5YwvxYZTz",
  "key48": "4widHY6wNtojZQXtwLffSiXe9WAEPHrz5beP5fvLqchDcAoBRsRM9VxT5dBAVGonQfuvvkdwY1wXgfMuXenwbsXX",
  "key49": "5RbcT1Hz1RnaqKaXHCrwuo1AKxJGFs9cwBiWsCNWAcuT1pJSYEE6zyB6k8fPKoWdzcq1VgwCcJZLpP8CndYCDE5t"
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
