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
    "3TDrU48KZVXzSMwcSGACeRG4vtrz5aG5vpMTtwRcyMLLXAyDneuQALqQ72xRugfv8swSXtSBmNYJ1MuyXjegmPdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ApZbMuMPegW2NvLm2o4ov5672AyS9XdjXcKWphApFaALsXkiQfygXYwQLkFCg6bTZ8P5rDRGEfpL5xMrQCiAsHL",
  "key1": "adhZeRhy3eMvPxVYxiCewcFsgcFBETibRtMNddxFmh4mWrBjcZhHWMEcqxxsNJQXzgXhM3aaRXGWFaJ7DuXSqwz",
  "key2": "3QNABAyM2J271M2hMTwErEJCMX6CGAwCcu61bByeHAH9yPyLpm3mCAp8PEpt34yKZQmuk8UXTVt24NjbLJ2dDiNp",
  "key3": "RQWzMBcAnVGAxf7S48WYNaeNKJcDUsqTmwu12pNyH8kaoxR8Q8rHg9PY8JD2BVyf3WutNtFZNib8McX6n2B4i1Z",
  "key4": "3b1XT6cuNMhk46dSXtZNjr6XjuZWK1tbSfPZ7NePGrPyQ9MXT2iexwT8vPHqNmDmyBjmm7JvBzD2FmzfhdszFaS1",
  "key5": "45AzoipXWc852vhntbe3QtSA3jy7ng9QxswyDuidctc5eJtc6wFkH6QaZaS9B1jgnoSUEa5NZWqSyKdnHF6uiSgH",
  "key6": "3RpqEProkESp5mZWRHQ8g6VbAjU7mMDsifZqkJRuz8nt7Vbwr2rykp5TiGBhAyZfyDLERmDo93n4jWGNHjzdyUiP",
  "key7": "5UGbHPmmLnJNB3cAPRPjsFXqo2UUVpo4Xftzqyj3JehBMJ6W9G26Py1RPctPfRVsPt6VQcJijPk8rMFDveBzEMzx",
  "key8": "5B1PtVotgziZRUsJEH3nFYLK2pS9wq7DLSyur5wfznzAjS6Uo8gQuGn1aaWJuCqeEDzcTUsfJauuST2Nd5CDxHZz",
  "key9": "44RcPiL2vRLjbiZ33hnh4RCWixq979AfuL8ZUisy9Nc3gYkcAG4jzMsdcjJhZSVJ2Pnmn8NZ76ctprrDMCKvx9jZ",
  "key10": "5X6TmGQFj7EuGpLw8b8duzyNPbDUunHqC83BnGRPPAuwYE8UT5mT7WuqeznwZmWnDkN5DqbhEjc8BukvbNtPZuuA",
  "key11": "WDNiumnvZxQiX1Dj4uYcnJR6rsd5SqQ6VGjmuL8Hbyy7jVsZrEgqgdCqj6y8JaE4eaS8JDoJsEG3XiwG615pMwq",
  "key12": "58HkGFcoDfGunwnUeBVGArqbptqxQH9K7CNwAET2czqrhLMrN48TpkmLswz9qEkgaMeq15P48Ay28JDQ2bFSQvo7",
  "key13": "4zoAMfVFH55nEHS9zREoXfRq2VB3GdA1oJzYmc4jSXY8ioeXKoV6S1jYaSiyZnMsnf7SHpfsSAhPyysBH1WG2Y5U",
  "key14": "3rY99q4VKADTo7MEh58JQf9rrrYBJuY1yj3AsoeEidymCeEZ5xdZv2n3eWsTQD96pmCDDX3CTFuPJtyokwRZb8tN",
  "key15": "4Mjryvp5AYigo4bNksCtizWZnxfoV5iXNZiFMRejCrTDbXwSvHF1obdcSAxNN2SKtqnSDH8iG9k4U4LuF2SVduwS",
  "key16": "5wS1mzeujja31k9cHs8HHs4jiwZUMacYKSKh85juR2DDn1gcFMds6mWxNihHRsJoQj64KNzHjCkipD25TGAsUJRT",
  "key17": "2W1uesMnthD7z2h5sHWPvFStrC1FizRnyGBmSjg5uZLroKy25mtZQDKtnUszKyCBTrSARubQhwemsLAp8ax5Kwr2",
  "key18": "5zwsPFTpXut2xbGpExBtBeaNZBY1o3rxLgLN1yprJitXXsFrg946iJGK7Gesf9KUaN1zqouSV54cQWhvp14FtQX7",
  "key19": "gkG77o856hokbJicHBFsLsoQVDGHNqAy82CVmKRLSad2K39NsT1eqjutP6F4supAkVV6KnVX9hpDvQN6WzG1YWq",
  "key20": "2Shi9qqSBydKuFnJ86DXEd7N6Eky84rJsgZdgJhQvAkzH3qf3W6bEdrsh6FDt3q7yUcGmbhdTqg2UQnoWwy9geLz",
  "key21": "3FrfEbYRH8dWuntfuiM6Fm8ThLuYVq35CTDqntcxbw33V7Uicdmace2pSiQNNpX5tJbkiCmRFC84hh9YVysrwgu5",
  "key22": "meiceKnPFvGtTGU95A3bZisqWwEr1B1RyNncDaZWjbmczT56BgX2Csi1okMef1ZfrVLgNpBFytaKQfr8HrhbgGe",
  "key23": "5MYAvThhcQqroRdBxnE2Adoqm1aWbaudH9PvMqNZFSGVE4YCvHnDgwP5LGhvu5cY4LN16SbBMvKU76WRmHtSn38V",
  "key24": "5vUhJoQUUs2GHRvrBHJyFG8n6p8oBbTaqdDBK3GhJES3K66Txq6wsJFmq8xJV1Cuty3xYzGGJ7NuQAogSVinC5EZ",
  "key25": "29e9YJrJLXwVhWgP81NRGC9hJ5DCqMinEPascj2xFEve3mLForv1ZGx4G4TLZ77Pbn2aifDU7Dmube5RsVqaP6sc",
  "key26": "HbFYaETV7MebbdJFoAAJxFjXefYXaMYJxxMgD1Xwzk2hcCJc14ToHZ6weeaub5ovPQBfPTxNZ3VMxhtL9CB6YVo",
  "key27": "48R8R58TYgbHodBLdMivVSSGFhaYJ5Zv6xQdgT4gPUk8KAmWpv8MYrQrziX5dhVaf8rWfuQuEydb5qgh7X7Mrve2",
  "key28": "2DH1n91RDP8yR4GL88b2Ya4xNFGvBJxTQ7jrcFM5P69rrScRzNYk3itPY481Fsj1C2qHGfBKyEKwWSdofnDYkKnt",
  "key29": "4AwBYeakAJTpEVtrBRX3xp24WxZdyCydcQDgx63FVKSvzzFZZFP3VfQ8tFm7T7KZB5LTJxRNtKn3Hy6B164v2Yz5",
  "key30": "T3EYZVt5KQG4zdUNbeMxcYYTSYAaxGbTCvNTcyihmAY3fynYHbLXwbyWKTTorU4SNsVaGwVZavXrS7Gxewk1To4",
  "key31": "jhBgiJsrrfpzyBqbCb3ksyZSRXpGtWHxod11htz4P8zQVRSwt5rXnjHrS6aF3kLra5742ZTa8fFm44R3xYHgnyo",
  "key32": "2nebfJrxSo7iHBiZPjePXBsezLEZDfFnFvoj1TZ7PaJmiHLAjNysiN6b7smVvNmHY2YVAJUSP1hbJFd87Xsja1i7",
  "key33": "4BZqAqsjgs41i5r59aGQFZcT9T1qnjdofq54Yfr29iw41YZCh7CLsi6fCbCWks3CPP2GWogBub6C8XaRc45jjA4A",
  "key34": "4w5M7Zsn88ErjsRt9jkARNJo7qUPQzKuaSmx4NQo6AsUV3f86LzUf9ULPUQc25U9Br1hn3i39XisSQhpHVxaNSoz",
  "key35": "2tN5WRCSBt4UoPVWYKXRwAawernup2bHYQR9rXAEPziVtm1ro1bHod8Q2XP1Nt1TXqhokXhCAjCPpnQDewtGMJzJ",
  "key36": "esLQPP51Jcagzp8xoK5x4K9Tj7EdqsrWh8Wx7NV8Z6VX1fgpQVGpwXUQd71QU81pVWP7WDyjLeJ9LNfDNTzKgw2",
  "key37": "2mU9FrQRmWrNM3XvSq715YaGS2y9aDQeAr3fJEEMn2ZAXEKJQyhYmw6ea5yUoLzYeNJAerLPMPTf2XRj3dpYy4GL",
  "key38": "3T7aKoGCGDn1jA9iPj95HaCKuqQLf7zwECQHxuBUcTJrPW3M8stMKr6UenxZZUHtuS5eZvFZY8NwqZmiawNh74Tw"
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
