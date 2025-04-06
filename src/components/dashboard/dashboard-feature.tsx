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
    "di2mEQEuJVRkdXSURicv89R1mdMg89Ej1e8PRfSQtfy2K8w8EdgK1sTSNLfxoR5q1mezcwynRToMh5Ahf2gUvym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1JxYPwjYY27byYJpEdsR68A3SSME6Mph5DjvRSVGdM6XpKNzbHKhsaxxP7H9131iE2ZLHNFXJpDd6Yrok3MWiL",
  "key1": "5bHZ9verPPUPeHB1JfRi5JwZkPVSFV36ZKGmQiL38K82nxZddRwvjEob4jqRaDVj4cXXrgu9BKDTGUTSUC5JJa6K",
  "key2": "3jQy2uEkPjJpUJjbQGWvLFUNZu5gfRJsw2ktP2YGebXky5D9GesPs3tyinVCvn6E1jda66w99qKw2b344fqmkMGs",
  "key3": "4hgPDKUvXTLV26adaWDNRNTVVS6AgANCk8rXbFeLkALW3MPjbdh5G8cUqsL8KtwASw4johMzcRqbZiiSzsSGb1M8",
  "key4": "41vnjeCiZTKTMc3FvZ3gyU1p8Bx3zrRkP8f6Sazjwh1batGjDnXiBMQ1NctzLNJnSrA6ohRXQWZrtWRqkrUX8dTB",
  "key5": "4rNdXUf3jQWsnmT14zjg5EGqr7oYzT7tD7ehevb7B7rC3vS7dfowRPu3sA9KDw6DP3zMo13wfmrTD6K7Dsq2PS5E",
  "key6": "3hBja2Jd9PHcX7RXbrE4yeJhBcJxPwA95REECfbUTmK23eNkajibcYiRvrBn4Cg7ieHAcR1tHfFYifzerCBADv6v",
  "key7": "2nrpxqwp2rNCZtP6ndgFQxJQRUgjr88j2k9rEu4r233bn5VDzbc4xzydkQEUCWEhzafrQ6mVJ1sy8fRc8BPRfp53",
  "key8": "5EXpNzADBJ6AGeKBMMsphHTqNdnBkEj5ePwKzkzrfhiAo7njdYFbrc59WQWFyjxVvki2sNCPKfDjAXkB8ns8qQjM",
  "key9": "2XzWjrKsZaysAhfCnZ2Mb2CRfTGUzERTqTVSqqPiTCMjkn4hMCmb5Ta2eU5TU6kw2Gv94mfWJdEtMtBrPG51a8UF",
  "key10": "2MMBxSgVDENj9ssogBoLPnBcLx6FWUFiEu6yUTX3evJoTDu5hf4LGTwx5K6evpgKeNvP9g9bomnWoTNwFG6HDDj4",
  "key11": "61GCz1tSiEyEvGTV3RVPxTmHEfw5ueT7krLUgKHpRvMWfynzMNJnL3mdJxp9iwMZAdfwtJaYosLQG4xZmydonjXQ",
  "key12": "62PhR5WQUbezWU8piQGbS4HApygTjdASL9N91qd29PwgbzdDyfg7Ep4Eb6pvTHZSMm755gB3WDe9Bup5vSnqQiXh",
  "key13": "5BJKhQuCT3aL6BkQuE1M9v3vmSkhVJx225HuW2dUS86FyA9EgeaZnMXC8V2othLRY3mafsGC2eiQthkygs3cTHo5",
  "key14": "45MfnbnRdrwqzA3nWGE5ZDevV7u6ympFs2WcxbBf79gBwmVoLhZbtNrscNoJVRSodWQr9yp6cD52gL4r5YjvWX3p",
  "key15": "5PTVbvM3EXfECmnz6mgEupwiXgbZkNc52YVFkFxpDwAADCF1DA8YvmSXstGTB8uJF8pNtqboVgUD1meTav9AS8jp",
  "key16": "5JoPLARRZ4TPAHDKSmM5yiTUGe1hMgVrG2xxmG5NQuJBGFLUHnwMg4w6tdopnPLYAy2PoTqhaYgFk5VhbzNagfKG",
  "key17": "4Uck8iGWP2KKBup1Z6NNxReU1F1sFwCnpv7KHKzEVcU1oa4BUUjXvU9za4Dbej4rnuqJGv4Y8srcrjKvCyUYBryM",
  "key18": "KZzgGsJe2Rugwuv9HaJeVmbzLjaHhiG74nNakNcdnoHfWT3CTqPJWgCoBTE49X5CehQSgqRzCzhS3QnbjrtDiTg",
  "key19": "5mGtp1tXGQ41gWeJ5RbNHkdr7Cm6is9pXuDQm4pekE7joeiJFVKTxt67EanX8VGLa3mFATj9F5smTbEchv8ZbLWC",
  "key20": "33YQuoKTC6gWqnH84soe5X3FmMGXDCqb9YWtCY4CVfAnwkEGRzsCFPJeoVQ6rcwGqA3svoBDt6hvX7npkB1x7RKx",
  "key21": "2cmhEt42Ljibii2g1GWASEmiWr389bNVCcsKZR8bCzivDxVuhrkyWYNHSX2BzYTuVc8ZUX7sNspYiCvzwBmqKDMh",
  "key22": "3AVoQxbBNqSZTP5i7KrR9hxeszb9cpsnusUQtJGtrMz8V7GBFrEX6kTfw9QYgM9iEKm2A6AADJZH7SG6ZUjQBC7q",
  "key23": "2tqkt7WaRuNUHf1bt9yTNbp43b7eAJGhA2PSTB7z8usLyLGt5xkRh73Rk5x3RjSWeLR3JC8Ggn2v3JGyKxqJWhPk",
  "key24": "2sycTBf6tYajYUJkEoLK7tufA7LmCsNx1xQLGmxtyY9FzFhEA9rmVygXT14GK2GWTJKJoh4bbw54BStJa5h2texG",
  "key25": "2k3w77efJaVjNGmfkPyUK3PdMunR2AauStmDghyBtUzLmnvhd8qHuQBcsb4bCNpfcrF25tPPixuXSYG3BP2TdML1",
  "key26": "X3iryPHR2oZoajMpHZtHEmmAoMDEhpQEpietUfbg42YnxJAbRSo91EDF87VTRMQgRj1U2BK2uanp6Hs1movCLHP",
  "key27": "5hY6sGsdULsxhpERYzVY1iGnUDfJXgJFZWkQVpcfGUcHhkKrUnhZ9dG5H4SzYGJykyVTLnQa4PT8uB78dtUq9FqX",
  "key28": "3Hhz9acBrxgTdMF64MvSgu44mDkS52FPLU5VXf25S4T1f3qPcY8oyPqU2fC3wp6akNBQd8Kw9JM8S6XRKFRfjSie",
  "key29": "Dv6xwKbeJinuapNa5s5VBJXYiohtDsKz8MpqgvQf5miXsvWTYi16evRm6fGtQwdBf5Ms5pfvNcQ7sygj9Uh6WrP",
  "key30": "2wzL7fde8iMymhz4btbZ3HfhZkiebUWm4vrgV97MVTGi74QpzUPRHYPKmYj5bLDNzPs1yz5hgbAU55BKorj8kqQV",
  "key31": "5H31xRDkxLsQ4PHBBTNaQ3zoyYTUURKq27MwNFDxwNSjcTLfrjGQ1rE4PYq9PZ67TcKdinu7vzk1i6xaNrEDHNCE",
  "key32": "2sa4Haxtn4hBK1QfqGsKe4y8uEK11eqrYJpgiNPnrsSLVP6X4fVKsnTCpnMbrqDnchZgLCgPmkpnSXofXcuepFoC",
  "key33": "3vj5CtD5qerkFWgQ8zwT153i4ZWodWjXtpi7ZhNBNJPuEzzqfgT5knFmuy1NxP6hy7BURLvPqBfN4ZSy33Jzz59b",
  "key34": "5eR51JbbEbC6aDdTERkCdm4ggXgBqSDyJsqv4EmPnuYhZXkKbDUiFXAQfinW9jG384M4FwC15R7BPgMuGywKhhk4",
  "key35": "Cw7qVqkS2PM7jpbDeQc5k8jSpecr8kBc7HitHxyDWTDTq9CukzQGda942N5vhfuZ12s7WcHyw1ymoZAxdLRqy5M",
  "key36": "53aFWsQY89gE141nJQzUGaJJMxgykzPdh8vKUf9QNhK6wEABLudYNR6LV6L7ZHoYHL9dQakYY2NXd4rkVSQ3fmKM",
  "key37": "5oK6p6g2SpccUArpEChTqPhaVqsoPqvFFrRmL1j1myxohqDiVG83kZNwLekkZLYPcWe7bcPRAJgGeLGYGYwBEWLk",
  "key38": "2qeh2F6RrBQKwRrieFCjo2enRd2L4o94SALY9z2C3nFx7Gc2pDYbBhrTh8FrjczQFBxQaeGNszB1y5SZjcSBPbRK",
  "key39": "66mFwY6d4WT6cRH5A78DBMRo8146DD2uhJvMyK9TyK3Guf33W6zPuKNGjYBYFAM4phNFgaifdwXyDHnMuNTCVCxZ",
  "key40": "VBpP4aZZ1HGqxsmiJ6eBmZRvA97mAAcofC92w4jgahiPuvx1XJtbMn5VLSK54JFgaNzFZrh2vBmTUxYwbXtbdBr",
  "key41": "3RhMrrhXUVYM94Q6EkKHdkLsm5ucnxyqdvv2BCx78YNEkpixPhedgkg6jFE7N3yRRJALcgbVpCLppzmCcScGbQSW",
  "key42": "5amYiYTXEVZUxYa4m9nrFrAXxKvfzi4VgrxjhmB1FhWypVmsFPbNsApgy1fZ9Q4e6rPTCZfxoeq49BudDz8CbKW5",
  "key43": "66oRAe83kBDfnt4s2XDvEngkuWA72K3QnWtKZYs6BvuLEC2rzXFCXrhUZGtd5K7TV3T3hQ457r1SELHx3ArPWyTM",
  "key44": "4AsDbNYjuv38KoT9NAsxaEFybxENmhhKL3f6zNEtVRLCEzFahomdZZjfYCp8hHtm4AjLV9z1CNG2nYs4gcBk9bAX",
  "key45": "4F4zwc8pCPc3sSe9LT6FS5wGhodQbiqTxhb8X8BUUD54B4Ewmrvn1KPTBi1oxho2quPm2NssTQCPgQCCEs5qdNzg"
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
