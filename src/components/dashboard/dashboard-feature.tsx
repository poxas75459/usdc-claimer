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
    "3N2BYKLk4YvQvgmA9Uw2srWDVARw5k3XYZeVNsBEcZLx6QchVV9EUJBL3Qxxr5UFVkVYSF9UkSycpMjAqrxQFEyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EyUJSNTjfF3uSNiaTQsbtYns1jar4wufGMYj8XqwRsZZf3niCucqTs7hrGsQo3iimgKvXVY8ECX4SLJqpsB5k5g",
  "key1": "yN7UUn2uj494Gt7exGXUL76bhnMa7tpCH3daTKxkiE2sdd6DiNdswLeTV5gDZfeu4jrLNcFmju9sD7WfFP3Kh7h",
  "key2": "3hhnQDFeVco66AhQrcjHz7PPr34svLfLZZoFwuZSosxNZuhDW24VnruhjLCiCQ1a1SpyfZkyZ2UuE17DwQ42Z4Zn",
  "key3": "4XGEvCrwUonS214yyFVRryFJXR6YaoaHzwW71izDeaeT6x9xLhhDLspX2BMEfnvqcGaJp4qjPz8ihvcqRbP7FpyB",
  "key4": "32j56MgARZYqR2d3153Vh2JjeGHZNiFxdRT7HrAehY2YUfcLsx9HRnv5uquYse9qQNKZvv23ZbTwQN6mGmxRBy7z",
  "key5": "tj99LFxsDgsqJ7w49bvcXHZK7C48ZgPwGNmVY9VnAwGFBT518wP7oqMWtxq31bZYAFWiUTrD9AzvrWrHkehKfFB",
  "key6": "2DydSG15RTQiToJqdajKBmHNsbXpPQaVjSKKqAwRApRjpEYi5dCv4NjBHhwUi1ctrpm41QUgBuBorMqwYtouSZKq",
  "key7": "2AM7sZ97wJCSwtX5m1fyQUNEJFrYMmucWrzEFcAvaHT7WZujypoeRGip1FA9KsdjfSjg3eEC3ToWc2cSsdHhp8rp",
  "key8": "358VZKxAkxVwQszf7Z2v7J6htkTGzu7bCDQfSRQhZ7NEfoQ14tsQ8VFkUivRcg7m5XDKMXsGBndhiYvrQJQQSmXQ",
  "key9": "4q1D1oATLrP2DmTkYdoPvyQ4ms1wugqrppHPf8ayxgxhekfNRnTTpqzLBy4GyKrfv4te2Qyi7fgmujDpn5YkUdJP",
  "key10": "wvCb4YEZDPFtS2x4kKKw4NtsvWczSHGpca5hJyPPZGTke3PptQBSM2anY2DTBVjKoobs6Xcu1ApbfkUpJNZ6hZm",
  "key11": "38DNcdAjEjNokk97x8LDsUWc5FGVEQ1WGCF376dLtG9qGWytbCuqxekE14nPBDCcw9WfjE7KVyFadZscwUxi8YML",
  "key12": "21styvgiifcTZMonFtUU5B2uYVeiZ6rdP4wZaew5J2fiwdYZ9zqCMbeD4jAXt1GDSLxpkdFE8qRgqwjn4F5zcMK8",
  "key13": "3NrdXXiKPkDtN7rL2iReGCWS5is5yzSKM6NTVC54oV9XPZUazuMTDqTCN3Lm5k57ACPDudGEbfigPWA5pHjrWpMt",
  "key14": "2UjSzbffc5Tin4DPZzBDMkcER42RcXjf3cjEgW9DxAYaXry2DuEQjeZ3THbBNvvSPpMTLrhfMccrMuHZRfLGfjhn",
  "key15": "DBf6wzyha8iKQ9Zrt4oVgHGRhChrdrbbyaZDisTivSAzeXXzNWcznxNxa2astoCFoxMRfVtkQZQ4cQZFqmKnvCy",
  "key16": "3eYoC85qLpJN4Pj79VTj5LARnQXy9ZwiTwcBPW25Kh4oyaeRZ5vQtMGCTSZDLNAGtATdHGs5ddC48MCMYNXuSR6U",
  "key17": "5owSvjeUNjQfiQ7VEKQWmYVeg5XzjZpqSPLxaQePhCV7Pqty33PAss9U5cv43b9PttsEvNF5oWskXC8FrKzYQ5TA",
  "key18": "2TAWDWWwYZ8ahDHEpvR1188mgR9weo1SbkuzTUEntD8UA7vZVfwPynAven9PPseo1Q5ryXes6B7YZJ5gMoPx8HPv",
  "key19": "4BqaFy8UiRifcy6tiVVwkSjuPC8Qov8a2twnY1VWYAfsnQ2wwBfVKVfsVDMpxKVw67xrZdbrTriFsUi3tHK6gTcm",
  "key20": "2GDe43yL3Xf1YqFPBJkJpNyKAMxDF7dvJbywTitg4fBEaYVz6ZVxCh6Cr4xJ8cwFv7xMNgjhKpBkL1dNpeS7tak6",
  "key21": "2NaMu8RawHbnZFfeSuHtF1seeMK14MjCBN6qNUEfMYD3MwX4gCisbpj77iqM4zePNJZgZ5Njb935hsS4P2rViaLs",
  "key22": "2qsoRkNB2uMJbvZPfx2rYSLo5y8asFkxs61dWfeceLMpwgv5FQF5V7o4dbTx36TMVoHWYb2yDDyZeKXN9rGncgis",
  "key23": "5bh5DsYTdu2X4pwEb33Lz6LFm2xPapXDafRXtsTuFpDAJYr9dkczUkezPyDpMAcgGi6sUfLMASryJ3AimVji7U6J",
  "key24": "3FqFqNZj2EEijDD8q9oWW4KuudSqF7yniDzVsvjYqaj49FJYN5ZJAHY7FWrFnyquvqgyjKBX4X4Vf6GrXGKvfLHt",
  "key25": "2U7YTtMeFFufak1rpqpLhYq8TyWHcPRvZ15DC9Ru3udSQPkmpXHvKNmAFLW8ZW8e9iVmg4zCSMDaXHTyjrnz6zu",
  "key26": "5xdUfUKKQdfEh4YiZvt69zDuyJUwwGCZhdEokUxugnSyxdQGq17PrqM4JeAbY2mFgpjz6PoHZDAiZAQdbBCUVBJB",
  "key27": "eGvUvWJDt2E3kiSxJ7LbLt91BnMWHmBKMewMRTPcjgy9MfZzGBEMMJ8dbKgCKMg9wSGGUGYmvTUa8vx6gRcuuMT",
  "key28": "2kVNzWzva7oQvdEPetEmeakEWR2feCgET4KzvaoMdMLzRuHMeTLidnF3J3oATs5ox41SHw7bvsnuJDWuNLaH4PmP",
  "key29": "rdAGJyvM46w1ZygvQfyyuUv4VDDVCW636h8ydjKgPxp2xfWVY1uit7b6t7JTkHpbV5PFmW7XFavD1QYGX6rNncS",
  "key30": "rCNccx75QW1oMPC9gb6omSrLj1J6pf1zRf6g7U7fHcrbUNv8Yb3DhTMJRedSV5hedQhm2J65EPejwEw3yg7pzmn",
  "key31": "3Q8ZgY6VLwaWJ9uPiX5CyVnQxaEHE1wG3Nc8PyCmc5go3QyeFJZxDwKDje5scmkxXu7QapMHa7eK9WS6bTC1HNH6"
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
