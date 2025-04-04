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
    "2CwUgmJEgsTLrkRJ46A8zwhZmjFRTNdiQezgNfYGYCJKSKTDWvxyPZ2PPimGsLthrP9g7oBSyPEPiyev7LyGdiiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n46gEqntFw13LUjbTovrLW2j96eNUC5CVH5DYi1yjFqYWEnjpBrdrPaexrjzDvbtcFLTejKUdzNXsqRDFwTVHJJ",
  "key1": "5uHEYL7suRYBqfHg454WquThB6YzD9SbcJJNiKd1sX92cbUx5MJcHB8j19tn3mdW5KHE5kvUwcNqd74q9w8q9FXU",
  "key2": "3xb8CDZ5MBJvf6UBXb16iP6cPjLTviCJv8bYCij3BXS5k2wdvihchfs4ZYMgyxdPek6KAYbnZS8reBKQekun3PbB",
  "key3": "3sCszJ3zBE25j5ET2Wbns3j2LHq6gVCk5KfapRZ4obSBgt47PDsKCNHikzDGCbp376rUQGb1J1h6q8XKMiuEvAKi",
  "key4": "541W17i7mbyusJjPqvXqB9BRDX4b6TGk8C6f1hP5v5YyVyQFEHvrhoC6QGHoshzHkE5N4T61Xow37z7pXEwXEJBS",
  "key5": "4iF2YMVT4QCSsfQJ4o6toEPRMZcqM4YSmkJGBHZ424n4QsVs4DD7XzdwwynDPaTQAVU1Q5s9a92FgPTnRy4DY33Y",
  "key6": "3WKcaSLCSBRFHgEyNveU7TiZMcGPwejxBbkafUygaF1LS3i5p8Z9pgC2od8qGZWnRSPtFh3FeAsrNKE9fpi1TXcN",
  "key7": "kqTHH9SUbQaMYPLd3M5JhZat11r7BDLUtPyTj6EVro3hff9bcJ6DKmEUNTXCTTYczWphiMkSgCFZwj2WimGRtJ9",
  "key8": "3Sj7wqu6XKtTvJGL8WQH9Vwx1KzbB3f3LyBsifMeGRSJA4E72BWD773Mqgsrqy8FUPogjcY5rc9XYK2uvYPiUgYX",
  "key9": "4eyZjZxNy3agxeSwxX7AWSiMp3HBGX5LvSqP1t3y9aJoV7bwZLXhmtDrDhW2d1mpE5xi26zatV9ZXVYaks74yH9u",
  "key10": "5DAYpw7tMaRvEevZ4rzmzn6TkEi4B13avickdCEA2d6WHqwGpvY1MzmTGhj7ktnB6JfnyRHcD91ze5kSMSyYxmGr",
  "key11": "4F4qAjbmDM512dGTXjfRHkojGE6oVyQYYSGiXJxQrENJCrXo5UTvd5dJH5TmSWmpApjUDkKSHHYGwxrtBcGhF1Ff",
  "key12": "35sDCvKY8H75t9JAwMk6fAaoYWNKCGvdfpbrPTV1eLhHqRK5Di44SWawKQ9DAE1YQQRZky9cK14xe4sFhwrvvQ13",
  "key13": "4BJeXu5Upsuyii2CZ8fTFx5Es4uN6FBV2ZyMkqAkcWramMubLfxf28Yd7LBifnm2NJygZLL57TaQKnDQtRfMobPM",
  "key14": "5pbvQhGWA1ryZ6mhF6E27m6rJJU4mkSB7GrZ7woaPvzNz552iC5b1LTtN7S9iXXw2agZf6YPSRB5H9Cbfhzf2Dw5",
  "key15": "235ixTJA4fiXBRVPQtG2UtUQWXPc6WZiAyRUq2MGHx284MXXeUmHATLtwE5Lng24xQWz9EsJbhmxYF9pwmmoo2Me",
  "key16": "64s9TqCpcUgFBmneUBE28F5H4Lm3SRVbcKe14cboS4neiJpufNYzgSR2yDra5GbF98Ppv5Jemum2DRPkTgqJPhms",
  "key17": "27BtQrd6u8HLpbqmsJrCvtnFXuCLRoEJv1yCxDu7xh9qSBfKjm1cG9s9Rfn5ncsoYdsPeBGfMKYEizG49Cwf1Tin",
  "key18": "hZ7XxTXzc2kaLyNcpt8DFRUkWJ5Ao6eBGFJVGxi9WWwLKReCAD46oe5563XDTpsXDyMg8pGmahKWdJZiv7FYWaW",
  "key19": "eYka8NE9aLXkM3Be9ckayDAm521qtHj2yhbVhHzaCahhyPNatFnUvgQ8U5wvdpJyg6JdA4d8frXg688YKRmtFnF",
  "key20": "2ryrwAyqsnv87GDMBeGtXpijTmLykAkxXNS6aQ2YaXCZpXbMLUPEhHQzqDSxbbSJV5npv3ZQCE2QQByxFZM87RBS",
  "key21": "5eg4BsFtpZ93UTtPYXQZLGJ1oz37K12ZhKRfCVtiKE8FypsFpjoWb7M9HvLJ1BsW6zobo3S62CZt9e5oubvtsXjD",
  "key22": "3NQfyEsK4uoKH2fagLxs7GnGVkSeYJxQxTdNzoEEpsUf5MgKJoe4wZqTxAQfxM3VRpomhD2bwf7JMZtNuBpKGK6h",
  "key23": "3ik8FTeva9UujpFbWjzqYjBjRoFRTNZMrtmMADYYZg1LhfdRNQmT8z4J6wmETsi4keXT5BWxfaj9muacJzakCWtZ",
  "key24": "CpEtuxRRXAQXDYriqrNMLpDZFniJifAxfS8A2mfcdzj2hv9uyqP1v7LYyMC6bfnqVyjFZuxhTKagszwUGwZ2dYb",
  "key25": "5kh6EVtZpymrTo9EP2xWYEuaPjoUut9CZ2XDHgmPWH4ff7kkTGDJymGpiszkrBoktLfoZHUawd5FxSifVPyoQHp2",
  "key26": "4quSLTmN1TgLUfdLuFJGaT1KrrM76tXo2dJsWNAFbSP698ngrwd7CwDgRXbXfra4MhT8qyDV5dsBYBecKNipQyeb",
  "key27": "3giPPWJa8THzPdkg4vaSfajZCQicTkxKc2hw4vDDw4R1hNhXGqoT9bgPA2uYjGWbwkPmqwF3idUUTvqLDg5pGPXT",
  "key28": "4FxasJb3MzA527dTmuub71BYNcguJQfZ1Y4VeXf7mtVZ93RVEHo7D4YekTz12vu9PFcv4CFBdz1UFWSspfaJQ4sx",
  "key29": "VNnrYk6meuMcQC5m5jwdixQCMuKvkHFGXySXbfP3wBf6BpkKssR61QbGtCK8RbZAuorFBT2bBRzecSBofEx2shm",
  "key30": "BWgzqnXAojGcLr7ZG3heNciL8mokWvx4Q3aQZPHtQmSSQ5gR5aFto1ZmSjG8wpkf1sVj7QbAxa372fR7ua5FGgF",
  "key31": "26KrEaC4DXShumRGZ3XJFXAQod9xt9kdX5oY3DyCSeatTGP9FBD3Etk3GX5QDYpfADtb8nKPNkwPAc6vER5azecY",
  "key32": "2W3KA11DM2afwyTEzgmbhrpUy7ZAVXGXMJE9jnT7Hy5KrNpFKtdm8PMB9E9xGxiDiha7BkfnUsoWiACcpiLWaBGB",
  "key33": "3mC2PBnTk5KyVuGj1ZCRw4JfMFiMYPoU3TZcBis2tQtfBhkvBHxpnpAmw4fX9oy25xbWfnyW7nxmPGsVUt9yXHVT",
  "key34": "5NLnXH79JbBgGWTwJKqn1vcjgV2jaE6cfoTL2nen5Rnuz1jnVE2tUwX5BXfJvJyyHaNzbsKDufixK67bx8bM6hvK",
  "key35": "2XQhzj986WnsWYs9KHpexJbRm3KXNDhU97ba8PEUuGSHyhBub2cj2m6X5BWkyefZL18bc4gTPamRBg7MzeFf1HQV",
  "key36": "4ewEE4TnHQSfcw7xfmr5BF83qnXi3LmL1XSDE2d2dfxLvdXF6UtoxrP8zxt6YuXdSVSiAa4VkcM2JyFp3ir5BCZ3",
  "key37": "4DUGCWxjGxQHFgna1wXnxCvJW5MmQDTA9EiuFEfVez21L7h1QiPdix9AuBKRDKqWU8k3TtmSU4Jw6C94zYzpBH4c",
  "key38": "4dxjBSS9SLJ31E386PS1tsQSiw84K23mPuxptzfbTMYi1FStJjqZey8UmrE2nPyy93kL1MF89Na98acQvZwRHhsT",
  "key39": "5EZYeoqbU3M82xXA59h1x96ktBXWDK7xGufppc25uqnrSNKLNCrtcj4RckhzzjTVQCLWbPzRF1vFf2dT2aPQxbix",
  "key40": "76MEeAQ9isezjzJxUT1YnDyXgYtYotWKMKe9ecj1bEQgBg6F7Ct341WoUJb3vQs4dxr83oh4drcvxmtj5Qini9K",
  "key41": "4wimG5fDWzzA4QBb9h4SeSwV6qRMqAYoSG7a9kr9pAENbo8FhLYgKMjCYYhmZdpoA7GHskgZZNiDwG6LaY4owpey",
  "key42": "RCAopWxod2dw36L2PsyCs4diRrtd7bfQPrWkMWZhKs4Leukf4fW7dfHqZXyDtdkgtGRF62UN47TqFmH2dzYucyo"
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
