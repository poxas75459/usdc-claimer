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
    "3TGLV4hh1qetCp9QPR1XNHUkXBv9KRfiGGQJnvXEDv2XaVUqEZmi5gGRB17TXBVLMnEvAP2KQPk1x1wyeY6k81x5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrhDdam2KyXG9sv7AKFBmv22d1AV7iYipwmweF9V3g8e64R82CDdq9NjziaPyRrFvZvWJCPzaNqCh74yube5cmX",
  "key1": "2RrSFz95H3rzP8ToEUPniFsrdRBjrg5rhQ8xU4R8vk73d2xZ3Ky8JghF595GZwua9b44sxraPvqjtSu89oxEqCHt",
  "key2": "5yFDK1rVG77nutkMFv6KWjdhizKwqWkrgdy1xqhZwd34RDiaxHbQnFWGhGh6tHwgWCZygQHWHfM9NZsnR2fWb4WQ",
  "key3": "4wsERkk1GoNnKcLAVYNo4DDuKJX8ZHdDM7UxAGv9zgFSkttYtUj7q7nqbztrvSBPcE5LnWHACWprQtXNVe3fMzaz",
  "key4": "2u1iqhWRCCqxoB567CVmAQ3wz1a33Fhu5Kae8Uwh1aaTxp4tvVvUQtkCfaA8vxXBKrLGn8GzoaiArEmwZYaBpyXc",
  "key5": "2zGGEAMcwESyoM7vAsfRubSgbdkAgKGHXeBiwyRCicat2HwArMcfEvAcCjkx7P1nRqZbp378nMj8kAw6r68hQFtx",
  "key6": "2PYMXxkDUA4nKncT8QeGYZ8nC14Lf8nLnWwp3uokpJGiKyBtT4repP2SLUaC6DLPSXiDWSq4j3HpZgLehjcS9Paw",
  "key7": "5hJdxHEPG9XQ992csrFvD3dN9aAEVWKGhNdJFrA6spsEtAUeNo4oWXThk1L6dZr78rve3pmdxijA9DRgPokZnxho",
  "key8": "rM9n2uigrMCtmvbHryZUkCXCTLc936HKvsqsTjZS5LwvL48D9p3aooGFQBAw86eTLyqy3o2mZfT3Y9N3kAnXmjk",
  "key9": "3wxoXvG7uciRiHd4eM6gfcmKE6wZsnAKr8zXRCWFoxwrRA3sT74SmcAq6AcRTiv1BzR1AGacP2UUtDhLPSdMhrJA",
  "key10": "27SMNrcD2AN6YqWKP3GrY7mUY2dcpCq8qyiTLoNaY1CnoiwRbJnvqfVwH2S3pyDQ35ggq2pSboQwy3f4jXQcca21",
  "key11": "4vsvwBDRdRztzZwfg9PFeMs5AU3732QFeFwgjRh5HcDghxZQGAiAwftdCxMvAFhAvGyTPLdTg1jzLT13TyX9WESj",
  "key12": "5nwKUmf2bG7f5mnnkLGS1gB7BME6c8VFJXgJAyyiYPw68phHcx16KZAdRYgz3EC2N4cQZ7c5LhxyVFQ1C2hY32XY",
  "key13": "4rc8ZYaaJ1BZaLB8L7VviAR8rW7e5uZ7FYSZLBJwcySsUkh1HivYKABkLEckaot8M1Ko8ww3xPynQENv2GA6gyKU",
  "key14": "5Nykekq4BB3G5rcM8w8Whc1xnYzbg93U4bwPALJ8WV7JhmUsQ82ffnKgATse5nhtXSdjqrWcSLBVvQwPSdFW5cAr",
  "key15": "V9Vb9e5kmQaT6H2mBWHUDtJMxXqekRsqHx6vegKVvxGrbitTrSXCASeMG61DLpGnkXwFtW2Uyo3BqVQw9uwvjfw",
  "key16": "2RNAV1cFahmhMoABp1nPfMd6ynn4bnMqxY6L1s2Nt9bZ4GDiT3Sds6Y8VYj58k2uJPoKxcw5a7eXRKbpPJBepgXY",
  "key17": "BTmyTKn4sYtHnVwdY55BioL66Z3SXxgWWa4zYNF61QgwtKXLxjNMxFWLF1L9oa2r94e7GFDCc9GJMrLp3dBoypF",
  "key18": "5ut1emPWMHFjnPJXpFn5opacHHWHqXJTBVoC6JRJsRD8GBvzSBfY5VwcKX55UBkLM2wD3LpGvy4sSJfs9GD8FaRr",
  "key19": "5Chn9NGBt75sRuM5DUFWWokvhZhdxmJiuT8N7YBBigzEZhJ9od6MdVbViferrTmQ1aLtbBVLL6qtrhPJK1dwmiXB",
  "key20": "53Phf4MwKS6TuHAJ6yqN3cKjEvi8XFYHmqqWHRYyJDe7rnDmWTGZHxLGYqejUNP3uqfntMzjRTmWmzPxGfWnmQEq",
  "key21": "4UqtvhicfSWRh2NF2E7M9BuU9HbnXyhnhv6D4F4n4y3YZGrWLuZ7Qd2nwZegGUc2REWCtDatpjc6WhPgeyx54iJU",
  "key22": "naCv4yxWA42BebTumEyw7E1qCi8fLw9cne7Sy1jT4sdD5yMXMM3fPDPQDHRMoKnBhHNph5i847b5DbGkajeht7E",
  "key23": "5u5mpGdM3Xy5zn9oxxohuuUeki5CbscGLN3Pj33L41Eu18SFWcz9R8EzmFMBj2owMyssKzEMgUpuB8sxDtAEg21p",
  "key24": "59ou8RU766jLaptaMmaycwcfHLZu5xTKvXvrZCZ93RMPSKs6exfLnpm8Xi8jGPYoYYWuw8gKszyQGAXkgeptX3Tz",
  "key25": "tftZMqVLUKJrwaDYgfWk8P9peuu5gPbGwCtZAT9n3rj3gMLDeyWowkt2BPUpFPcoktaFrqF29Jo8PQgzeyq7FzU",
  "key26": "3JqcqNJ7vHQei2ZJH4UiZYfWP8HXqp5sLuYPUNowxLvRkfx7jpr3wAnXtrkq9GWMgDAVK9wEeytUMzK9qDhMBznS",
  "key27": "2wXMsmWbxwNoMPKWbET7brYWrYtwaAZ7PhJ54XpoqnDd2bZ2UmTtXSzJdeV3Pqyxz9v5WXb6pBAWH3NuGCcwNax4",
  "key28": "5e4x7dY15AvRNecf4oGPQGBrfPbKN9e2KnoEKviodCnzzFVzuV7WxMLjVmK9Z1PDVwM3gHqNWe8gFNKPjWdPJqqi",
  "key29": "4QmP7Dp9j9wisZ2BGTixT6LXu2SQA2LRnPv9npcP1i5Fi21262izUXNFr3heUNkrDBPJmdoLigcQpvsLSVjou4gL",
  "key30": "4n123yv5Ktr1XWf67TviVVsykwYgdYKfXxkcN4gUf5PArRG3f3FK1SaerFKFGimW9ZP1ejsrmfQkR8XHnABRFhYm",
  "key31": "2TrEGF5GVzp5QcKUq8tqC47E3J3rL3KFC32xrm1g2aV4PB1tbjcoXuzGUGQHNce7fWpATQsoyZg4rMBYHvFkw4jc",
  "key32": "65yHP2FizJjQc9TBbWvY9XMooqM5RwUGihSByUvbcCMFsJbp47QuKxJBBQyg5DwQvSLfW1FQSZjQ2ovT1NKDT2hr",
  "key33": "63BMMz95qeRjtNgQThyt2N3ppMBJpywrGJT9LLKGdYjpnhnczsmsRu2eL4Y5DZ9MATZMqBdr6KqrJsEWVYR9sPT7",
  "key34": "5KGa7KkL9ygXYNaRBoHKoVA9fZKNfSMXNJGN8zVppmGwEdUmZ1w736btkJXr4UkGW7qxbf4W5fRikmPnzTSNCDmf",
  "key35": "2AfbJYirFmkenotn13279r94nNdysCJpyJX6Q6p23mSRZ9AfoudSUWx9MuEAD8PgDPKud19AANJBz99gpLNzFHZr",
  "key36": "jA8htcYrbeCtn3JzPR8vT4MuoWxWqso7wJ1tt5i8czthAM4JHipAR3v5NK7c7Yav2dJBXs59EEqwsgB8h8acs5K",
  "key37": "2wMwjSZtL9cGVTitg1CdkFkK8s9oy4V851Pm3bHzbF7KuupTSuRu6XsYC3RnnxQMZxKtteHaqYCZm2JHNnvnPQUu",
  "key38": "328V2EwjmzqAe7Xhv1uS27gHD9tyWoXM89sx7g3bbbd7UpdFxBdjwJMvrDAjsR7Emn2GsDkCoEJEAEX5uippEmUL",
  "key39": "ouT4jJRASduWkLAL7k7zkEzyFpGMhXGuYCyDe272feRgCWntFwoVxdesSEAczKTJoXVTmVBJ86XjzeBABAFswis",
  "key40": "4puRbuEJKvwQYZY65EsLB7mbA5QyifcZ8BS1qVNo6FVLDyjvTvCX3BGyQt6t3xfxV2NgdwtsDLny9q9EYqdbJhmG",
  "key41": "3XNcWq4F1fK51f6SjRvbwT5B5NVEQcgFTuWS7bLvqCJFusqR5FCZFYBCK24DfvFiN3Sy4ABJ1GWzbpWCyN9kWZou",
  "key42": "2uiMopfqn9sQAHvawRTqrk4bQSvtNxGAeGw2oKv83fEYPjzdedb2aaT84BZ4Ambq7udEA4Kh2qsuLRmG1YZbPdg6",
  "key43": "4MN6ajX4oy92pf8jS3xqmYDwD95LLeKE8adUy2iFpXxmqqzc6b4GPr6PBadW55omQAkLZjrDE4iXhkeNhVpzDq7y",
  "key44": "3ewCTZ84Usmgwv2MFcg2f69S3jcVNa2kaH1DPADTdZXwv9fBhYPaqXzbKszvNE2y8ht5eMBJ34tnt4odd65yiva2",
  "key45": "2xCVMKR8kaaHBVNeWfSNdHCFXbX7GoLxmscF13rYRKp8fTZcnSLjg1n3LcqwsYwHhrN4Xw32PjMEhJd34rXAB45U",
  "key46": "5UHgng8tghZcteNNTaHoDQxkZKyPqc3PPsDQvwcXEx6wqsUDh8imSo2RMxY11iQposDgracmc9Tpf9Um1of6WyA8",
  "key47": "36kP1pBzpCeDW2QeZ7FbPUK6hGAh3CtSFpnGsTwCrkDEDci3U1jQgxxPnPEfsY43T92AaU61niLtZGu9jjnnFA23",
  "key48": "GQdXorVKLVFZhQZXcaL2Ag3AWhzAv1ifhXaNSX18nbiNFCVFjr5RiFS2iNVS89ctPnV6sZDTxMhQNmE5cwJXoXJ",
  "key49": "4mAYPQXQiNHNZR2LFupSMkDGon5mpAc4VJaifcTijE1w8CX9yfCvLJs8xBnCmqqfiSJFCugX5vKQ5tEPddiXQJeG"
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
