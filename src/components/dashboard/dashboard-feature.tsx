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
    "4r5cE1MCVjGtT3fzaRZCi3Uf8YuK2Cy4s9VfVGtMJQt2NxgGo2dxQLFyYvVmRXbvgFdT7H1kZ8v8U5bQyqohw3hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27B8zKCVhrzz4npR6j9bEWJQ2JX9vyQpNdLenvjoJm8kzEUp6FvjeVeeZYcmaEfEtAL5syDhJVRA8zXcrFia9zV5",
  "key1": "2CGX3EfZyYL6pkMsWQKtctPCBB44TzFPGDLQ1pdSyqokUqvTLzwtYpXdCovgWMA8bdvocwbDqPXMCqoSHQi1Qzy5",
  "key2": "5Y7P6MSPWAm2hTMQxGtPzgMBF8Z3T1tPH92ad8X4FBop4HmDL3LWuxuVAjZXTC4EHz1kN7GxMYwBNDXN3FzAE4FE",
  "key3": "2KjLLB8GpEk5TeHKrjZUags66XWB9eLZgH4LBb4ZpJ8S4zACC1jVZZVXnqkydY9fh99zvzReNVQ2Lu1ppA1sMSFV",
  "key4": "21UPNpb2PEnjk2Bp3Jbx75teCB56qxUKHwyRbeFcTCAeZiQQLgPHuTvaZT5fh6u7VrWqXH7gW69Afi5WkSofCojz",
  "key5": "28G3J8UiUmzyfrK1cHtP4F9o6Wb62xbuDaHiVQKkPw4BEiHPKqegd42VBMXouUpD1kdkMjoyU9xsVjYGrZk9h1WE",
  "key6": "tWBPv2KTH5AV2Mo47w7LgrtZowtHAMSCRrHJJ1MbJornwEJ5QgCJPYXmaJCgf1nbXc7MGwdkFMvF1FCMVh1LPiH",
  "key7": "5HMtf1FmFCnb7nKiup2eiFfeH4cDeDqfm1JcRj8ZwZN7A4pV99dVYjndeB1nt1eHBZ4YcNCdJEECd4ZaCW7cBTG4",
  "key8": "2LMDUkYitaz47VmqHp8ihiuTRrPfVKLdFKb4D6FLKJykQ13G5YbQmX5DoUA9BVKU4efLhLDVAfs3yeBF6hcnupKL",
  "key9": "3s9MECfVHXLkgW6gydgnx9DyxNnYbVt87RicrqmfZet9iLSVVkJQK6GvSXubZhXuXMpUn4JjbCBCX5fL3x3cwAxh",
  "key10": "4GM9U3sXcksmsf4UDiaBbjGsAQCifQgs4MSCakgvvzDpgFaa4MzhiJRJLpGtqcvWmjSFmUYkWSKq5b54nvtxJwQ7",
  "key11": "4oXp9y5yo9dKkKkxuzPPSyMLzzu6vXmUmz1QHFa9YtkzwiB1YBYQdvTj2FY1HJqtaPdFgLiZiPn14dshum4Tzs1g",
  "key12": "3GrSALHd92QvWxsu2f7D3Ted7nkM3WtyT9KFe2hVDjHjt1LxTov9Tfu2avX3pTA1hHZgqzMHB8mFz3JUnwwYRWom",
  "key13": "5iqV2Tu6HWupsyrcoP5Awz3Eu3vNLAczq8dFRTP3wLoz2XhU4quKSpNvJ859NAHcBSSS4MQsFHm9sSL9gj1cXX6Q",
  "key14": "63exh7BnDDQvzrjMh3UzCt1PRo3vhdJA5Dmk7NpCgXZUUo5Eeca4HEPpV6czDuKAcouZhyP53TQodUBV43DVaYXZ",
  "key15": "53CKDi2fZroAM4h6px5uZkfc5M8cGg3WGTSXiAXDskRFbYek5CDavCfANdbeToLFRENFD6hcv9jsnA2t1U4STPPW",
  "key16": "5eDQ4xy14Wbru2MTMTrpoLdrnKtSEhySrkv61U5jjaCa4VdMnWpDuzrRAE3qxUV453XhswQWo9harie7rPpZEzcr",
  "key17": "mYwg5KckmSrWuZGFc6FLYHMBahVAy3yL1dq3CCfXtx2rbqZZwgDoT21rwnJmPrKhhEGNmNFchgp6d2UeEsYLBGx",
  "key18": "4D3fsK96zzykkDxSioiFQZyZK1ihESCfK8VYsvLGSJdBAW2GnGyGmMdo1W8mjNh5z3Pro8dMqGmf6KzaP1GFsVRa",
  "key19": "3vJ1dmV6RNHueEVC6ZRAF9JuucHutUVCafEKstbqEhvcNr3tGBUjSj2BwG8yjVV9RD2qGqr9YXroEmm9dMKeCE3v",
  "key20": "5JxJdyqFZyyBKBzpUoaKV5mfzNjaJpQapqwfv4pHcz6YsJKvHbbCLRFEnqStNYPBhH1jxSyYcaEnBkhDb3izETrs",
  "key21": "QfikNyiqkzEbLXcP36hztxkC1LFXyiWU61BiArvfk4UGXpSS4wAMnToyNRpCpMz7KrBq7S58iSwB89qxidaAibC",
  "key22": "5p51C2SqWrCgHh7Tt2Luy5w2veAMcBKKrBddPx8uAFa9RrmAtnnwJNdGUbxPzuoKxXk6baP9KkKHidn8RM2ENVUB",
  "key23": "2uniaZAof549DcbMympULLkhindgz8ojLefJweBubkNWjtkjzpz5SyHqZBJ7QD5fqDKboiPjsu1g8qLVi8fuqAkQ",
  "key24": "5eqBUVf4JaSMBBQJWAMuMSAnEae9w6VQLrziss9GqSJZ6mvi5Cq7jnzRadkqMAdnn7v69ZFabcLBpoXHTRCvJNw",
  "key25": "MNY23W9wtSPwLLkiypk2TuKGfG2ErYekL8vzs7XeKqZvrDrTHfCLmc1bQkRy2Gc5zWVcyWzuK4LcaHnaxk7kQZ4",
  "key26": "4jhc8Z8dFESLGtAVjBeZWspTtFQsJ5DhZDBoJNVLKkTqFW5qa4NJzai6ShRUTgrQT6U9vN5Z7NZMM28kWAWZ4hFw",
  "key27": "339VVNA5RhD4j23fdyt2e7d2M9SHEkAywg2PnTdfAQJhZQPL3G2oQdffSuXfuAQwAke2XPj5YdqJfnTVKf2ACK3w",
  "key28": "4dKtfNWF1VXumcGr4iJaq8J8NaYMAbWmpTz7BuCn2d7UsSkTQM3j2q6ZduBARzqDyxCLFpJsttidqo4P4GjuwJXt",
  "key29": "3TjHU5i9h5eXXUhryMymTX2qJo2FsPZ2vSaohcrAFXSYNZqU25MVzcEpeLzXQRVzB8xs11yz4AHUqSEWQS2GTspc",
  "key30": "4eDp27Z3oEGGP3t6AHNk3Nx7U9fynpGTL1CSMzeatpcPMphbH5haEpvZ9ZtxagFw6sRXuJe3UgDAb67kCrpRyrE4",
  "key31": "5B5fPsf5hd8RovQJHZwGENmAWEDreyQopcUE3hpyymPtm7zCqrNaAgXqXUnDZJoUR8fauHKMiLTHmJcyak5mhHri",
  "key32": "5BTyEpMzeSe1mqBgbjeTQAo8Tcp9WTGCxupMXpGCv6zV8px36EJPfzRJkvtxfphavttGuxtvMvYrNN9WXHBTGXYP",
  "key33": "2UT5syvKg3C2wMB1VD6tWKjSF7fuff3r8EYeWsvLSyaKrt3mT1e4VL3o87Hhe7R8UzogfwR5aFVEuxMJR2gE8jgH",
  "key34": "4gxkkpdKqCucH35NMwm5YYan8Ca6bTUvqkPafej2wfnoDSqrzm7mnPL6wmHKFCAqCEUuqHuxX8tqnfYD93Dqhp6E",
  "key35": "2a5Kv4n3Z3K1TeLzjHXpL2Z5eTZrrEGJfvkU88YjqRM2ght9HdrdJY6RoBsitYbS7CvqGw5pu6NE1E2WNUF589R4",
  "key36": "2BQ6xxmLZgBtyUxns4NmFT6M4ETz999CV8eSxgHSdVhGubesAY5esZnQagXtKAVgXfB1vXwWnQRHpa5cWDPM58wi",
  "key37": "4FwGGy78KShPk8Zh2XL9hMrdsffSfyWnwQ9hjDN9MJxywgMhU7HxVNvQybwMjBh2TwAWE97rDMy6kzKDgQ6YcZKw",
  "key38": "Z1EFfsHcPbjf4BAXmKbwHwXBZSyEgJpLWmnjwKFEKxMoAmfnJSPbPgPpMGLNeTXETQM8fowB5wzrjN1N2VjzPux",
  "key39": "3u3hFX8EFFnmef4cXyBWuLno1NsQh8jXL79TqnVZ7R3QrSw7SUdeSv2E2wizWr8JsnjYFXVcdmTnEHpd7b8Z4Hs9",
  "key40": "5pvbS2jxdDTF1uC3TSwPLt5ZjGqpDhrK8jtabyEySk2PXxy18asnm5VyUnwHBBrvA8F8Md71Qd2w3Dj1qPtRzPYX",
  "key41": "4w8D1RJKbjcrM4J4fUhsh9cCW46Dm1MBuS9rrTd5QJpeMiYSZMFrFdpUCXRCUk6Q9XJLqGMuU7eCdPgisYsrhPn7",
  "key42": "2dLAFj2kenTcNhfhdwRsTbRjE3LLbV4FF4U2A6PsARSmQ2DDVjjFUL3oNRpreg7owBYMrx7HGffbv9pX6z411Em4",
  "key43": "2srT2bokyEXNdhyEU71mcBS9mxuVXQbytm3WzA95fqDRHiRWq8LsJW8DGAgMgoh2ouy4Lnz4PKdz9o6gw4Mwp2qu",
  "key44": "UFuyX1S7QaxgwogDTfR7SFEvAqEnTi7hLw7Mgt9UmdcUdsxcfRPPpWmkh8cicuXVzfLj7r67mWLSH1sjZHH3cLh",
  "key45": "4W6gFTFh79vKZAtQXVroUi5mKcRAWuZLFQCNCs4Nk7ck5iivbXGfwSzNXbV9tvvaAL2XEMogrXTsFUZbQd44hTLN",
  "key46": "4p4REQpSyWqFEgJNe9eFwa7DaSocpFa1FVBha6jK91uE6wtnsUEb4PACaZN7rYTYtp2VLc9KthZ7KMLQr2vpDqdv"
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
