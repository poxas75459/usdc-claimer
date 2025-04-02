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
    "2ZqNbdYGTE9JuHpG3dWAvxXYCQgSUadT2MBgzmsCDYrq1KRhJVKBPWs2u7TW1993RbRsibfEemWAax4AngXHrNG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERrZiFMy4LBsF88sA2ihcPF78sudmjsFuSs4nzpSHUukMEkeH3eSV7aJepHoN6m4c2qFfNoD4TCVMkVmbgZPawq",
  "key1": "61vtm1ZNsApanf5283LoaSP9mSHVcG63v6m6a9cZd8td2TnZMKECMSqEdDewZQwQHZYTWgwSgyLjWKz4UvtUMyLD",
  "key2": "uy9gqnNWmHabymFmv9k5Ceza82QMatKMgVDJDpFWYepfarsgdWBVwJbkhGDhkb7XBePF28gKd8DeWRBEyNaQCdg",
  "key3": "4YtdCdv5pXXC9aY6aYYomViTvCSJBoQuF1Pp1ZJUK8BpWv25244Xi6VkoYS1w8rF5B4r6dYeWs8kXsQC52A2PZY9",
  "key4": "5CpBKjuDLfLe7eB6HvLQLBiEy7kVg3NVUbj95bphQMkACe9bjzmMuopdKYjEd1FYquE1gfbuvAwb4n7Zu3i8DoEf",
  "key5": "3yLbvj9V7B9FvAYviuVGWsDb1vh5EUvwe35pBAJxYJArpCx1hBktC5nDSwGX8pGV1zcwvLEBU4nhqepQpFkggPzJ",
  "key6": "5ZNfCAzW9C4nprZt8ZfZ7mgUbEnT5U3RBRq7KXA7b7n7jR9cCEpyf43XMHwJkGi9t8u3eDT1XuSRHkBEhWyvisTP",
  "key7": "pBbjmKUaGrV3Dktnd3jm3azmKSmSiintaF43cse9HeTBkUHVrEdianVbv7c9QZLfEavYSFnBWsyNX8QzJ6EvB1x",
  "key8": "3JKwi7cwKeJUKdf1erB2PtHhcEFLftowx6o9Y7HFTrkS1Gwot7RbofzFTurp8fmL33QnttSjvJHj3YGpxTnNBELL",
  "key9": "DQKpPac4eNdYAW8MHhPkgZGVgZtbCFBVxcpzwLh2MgrL3S64V3U3CWTaeB2uoLPDQcaViEuqijKwN6NML15nysu",
  "key10": "2utgDmcwiqBjUzn7rk468W9UDkVKk1CbEMgrq22PAVupKPiY6mA9D4U5PbXbuuxtw84R726ADex7zr7oMiPDWjXw",
  "key11": "4T2EqE8AberMTqcvgphSvYj1bj3W67U8DkZRf9feJYybswiXxNG3ZLqDNusus6KvBMBzyEujNUsgkakJ9m9DiYtK",
  "key12": "5V7nkguANuSciLHfnw4FqbAUjiawEte6gxusW6iwuXWtfwrpyNoP5UfYN3zVo7y8NAeEeXEiuE2RVajyW1xCyVnK",
  "key13": "64uXxVejFJfQDG6Aa56K5hmsSVQT5xp8weXa5NfKrnD1hpJHiMHNsmgSq4aBgJzuan8RpN2ah7yRntskBhg21SE9",
  "key14": "5Ykt4Bkk3vpcW9vn1fQAmNpdGCgEyfhhKEw5XfjwnKQs6wW4aRs9REWNNhN95zXhfv16WzzuCrDnH8gxMhFT6GFb",
  "key15": "4UbhrRXybxPSqJoQPH7RKUbrw8AkMbWvXE6EhrfQXomsyby4xjSUVqpJuL9y2cBkKN2FJTgBmAbpGUjruxt8i3EL",
  "key16": "3bFqGXWQff3LUT6pwmcqFeDQcYfG833QoPa4h3Q6UPwSfJDjtpobPyN1raeqxrz4vDpcxhNFZyKd1dJsK1mAdpY7",
  "key17": "5NKVwqpeso3JzMa25j9TnbDFA71z8cSJ99vk9MpFYn2ngMMrXYEX2QvQT81VWokzKYRm9wwi5JZLs758xfg7dYgj",
  "key18": "WhMZu9qX46t44Ji6LB9rgcXF8VnibNcrUPpy8mdU5GniLYpdXppv1ewdxjH3hj6jvdoTMeRjpojfnPyFEcGoNPU",
  "key19": "3Eq6vLwuG5z9vpV5PKCg8CVp2AGZRBYM1eimMYJDaK2NLrwPVzRYcX6aBLXiuia7B9vq3dBHComFS3LV3RVAwTbk",
  "key20": "QcLkKZV732fxwwkMsczKiMD5JJb1SkhJBo3uhx43AcdUe2NJ3J1yvGPNyN5WvQJSjfinkJEVoCgLWL9shC9E6ds",
  "key21": "2YRZW6UrqPL8tL2NdX6gzgLQfAET2k3VbYhsKZKxXmtaFMa7mGV6ek2o2uVdndeyjPxDV2WwocWoeLs44WApz4tz",
  "key22": "526EBgtC5Woc4Vw7NAPRzzkSaqV1BCRpMepjywS4VQnF8h43TcfdUExsmGp8nkNC4AP4xyCQ24z7pQ4KcXUXsohu",
  "key23": "2vmRdFk3fvpdSYqEdTwQYZTtTmJ55c7EfpXtb614VAVswPfL2fpJFzrJP28X9S7SM1A23SfKvk2c968XgVGzocyC",
  "key24": "44a8kBQ3Pjkt7K5LK3x1VAevBUoXYxEHaqFhEsJbwdv4R7MiqeHrXmtVBdfTPJaFzNyGd2kFhSLtCTQxi6drzyZ4",
  "key25": "Ga5c3pPdrWbv5D5WJk5JWN7hhXCz32eCuxDDpRPp1b9y5fgE2rZrZTHxCpCf1PtaNeZZnGNp62LB9M2jp1tnJu1",
  "key26": "2PCJRrN5E6fF3qydERK1gUsKaHky6trVvqxgpm8SPhCuvk8fj4tF19KnTZRBLbBPxf3gSdsmLGjWQjTJELubQeSh",
  "key27": "23gmQ9eqgXBXGrEBUE4bznkXPPpeBu54mVDk24i9FZXPHJa3CWJDuJskQLFfZtuZ3DBpB37gwu1BB1GGb3CaoTZH",
  "key28": "44UoAF1GCaUQnnooGru2K4TdqxNKeCQMZ1UBLhrmLaUUQcLuRF4UxZZQLEfon6tLTFSCwxFTo9Sr62QNDuWbWRug",
  "key29": "4kR6yiCZNCzMLtWfFJF1ZR7CU8zqApRwToMWAR3BbsToiuDFwfzdFCxMRG5omwoFknRReTzPKaXzkAFB1QdVZAwa",
  "key30": "9rB6aGnAAbVD2oQ8jDsuN61WmJFBCHcaxXmn6GTNf5ptMeZ8LATUc9XgMP6baHeyFSm1TLmg3TXXEEaNemH9393",
  "key31": "2JPfoDs5Mj8Yw8DSunm9mmReMo2h3DVPXmwg42oXYSuuPFECvxDAAJPYUKrRwY78GqZfSUWQopWBbATN82qBCkYx",
  "key32": "MpDhxUYb6fgXEAZ1LhvqpGtYk62hShj4u49YkGeBX1CRyzCzkvdEpNfDDDYpkFidUoB4XboGEFBJ2FYTSZTh4S5",
  "key33": "3bSoHsFowDNN7KYn18QhDZTSNFHg4CjaB9X1L5HR9HqNHAmJhnBb557eKPbgaj6ZvrKgF6Wj8bbW7tkg5nGVYEXA",
  "key34": "5uVDmN1XZhuxi9XG85h3JcMwQ29HDBNJvwRMSwRpYkMh5E51zRnygBSR6DHjJU1d4t5suBbBV3xQRag5MJmngrLD",
  "key35": "56YpWU2zojmoqJBXCxTXEGiSKLAJJqigJVP3MiF4EWynyRMkY2JUYPM7bPTrQ9QgPfHRsnTLS8eHyBvmjaiSF4vX",
  "key36": "4wy8TnDvqgsbhej2uMigDSzmyqvFKV47XBdUcJJ4Y1BncWNNKXbsuHamjnndcExCuiGaV7qkmx54Mxy8L1gaUqhe",
  "key37": "2RqtWy3u9kAhACFbrSrBY9e5SpoyggFrVxeKRvTvUn6pZQfBVxjr6AgZDZ4Nffzu35AFthDrj5gumUwSWYDYwnUt",
  "key38": "7YRJRBzdKbRLwbfQ4NjVJmNe5uwGdgjX1d1YKMJnqsHf4LNLxSLsMsx45HFdZPcnfZpWX2UH91SWtT9YQo3r3FG",
  "key39": "5LKBYT92ahVuXgLHHKBPPry6WBJqxGa3AjtWuAk9mu83Wff3JpmiRqx5g9QD799dVjvstb8dcskTnFmvtcE65Q4x",
  "key40": "5Lm1oAWbtnkyrsNZtFidpxPWMrdmLFkeWwMNmWPTRE38nbAuLQm83R3cmZGBJZUAcdjuose5yo752k5aAmpD9vit",
  "key41": "s7QSq6Js8TkPvnxF7tCWu3CTuTPhWw1gqaoQHsPSFuTKG9EkBBTJFBMgA98b3R1Vcut9Nwm8uAPCshufvb21y6J",
  "key42": "6EcAPprTjAR5wFz7VEbubxKwWy2BjZkKgZb7SVmc7c3aesXz1qBqJstQgc91VMCRGskG3f3atULLipxHUkfnp9q",
  "key43": "3tYjVkrMqwmJmQ36chdqgQhmP5S383CMtqqLZ9FyNJCuiSc7YU3CP8qRvR2i3kVtBg8FDgtUyRMsfya4QBxk5sb3",
  "key44": "4Mui5ThsVmGAUSZdybctrPVZSqWifVqST5h35FsEftgKijG1Uv4vNzXr1puRnDXcgcL65gghGK31nNnZBRZX67Zf",
  "key45": "4VzRfG1VZpo4puAVMoPS8CYkeVZWtuqwTKUx9C4NwtrpGUKCfLxhaWpX3Vy5aCMVARA6zuTmQGspN4NSGMktjF3E",
  "key46": "67CxUhuhGHKFFLHJgXmQXjBR6x9WFnLz1kQx9VHoZmeQrsMgF7XEQgPByF6ARFc1qMVvBUG15ZahpetA94Lg8khm",
  "key47": "TvaXBPikWXp5sxiVpGASNDjYAuaYLKMqUoSRRBJCSQwn4vk2usrw5HL1ntrDyxEBEVdcwJad2wZSohoAUPVMwVN"
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
