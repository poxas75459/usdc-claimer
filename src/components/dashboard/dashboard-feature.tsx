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
    "5teWD3AGkcYgJL5MMnVETq1tJzCNdJNcfUs3Raz4N4EqJtahtcszDeJZf3KGRFBmnAq224i9LqxZQzAaHYpRTqGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xd7oVYDq7qbNK326nKdJohAaXVsNU3DkNxwjz19tP9xnfCsQJFwFxWWAMfidJM8GUTPjwyNqiwJY2x5jo4qEihp",
  "key1": "RP49v4YnKhLXatGrNUCDUzTGPw2omMbXBcVEjbEwwpCWuaVA6BTsy7E3vqNkxohtxn4HTxddFRwTmDboa4LEhNB",
  "key2": "3y89Ct4hiCDv9nV5mBkCoLqUv74twyTGAvVXFeuwn9ytwSFfV8QWVNzdgnXWT4cWicaszUNt3TfSsGfjpGR1Kjry",
  "key3": "2ej77QTbMRFVNnCk79ZYjhdrGbnarH4LhMxU4dmbMMeRhhwQe3w4iniTLwY43GJDSH8XkDFqbemiJYUEju7yoqdg",
  "key4": "5WDrKrpjdoMJsB5R4hVye9y4LjZkYffeuHyfkBy4HE5Nfh85SdGuQBqMVbmMr1SYFMY9vsuDSXojH7LswP8zyJic",
  "key5": "ummW1yDywxgkFnmBEmBotmrdJdMahSFMqiF7WvXiRbUTg9Gzv3SbnzYVHNxDD5sf21pPbTFm489Mhk1AthPPMKE",
  "key6": "GwsWdahijeNga5erPcQvsSQQRggwa7meeeBax83BoX3Mkb1A7JqyuKPWstcitHu8u4wEwXfcp5BQhNhd2zqWuTK",
  "key7": "3ubz1ayhC8uzUoRhDNHQergHmTXuwDPvVXG2kwwyPr5g3qqainZygJM5jzmQM5n4hn7jm4w4yPaFkGSKSNkVXev8",
  "key8": "r3PVpE3iQWvJtcXETjFDTMUR7JAjdLxcVzaAfhYvABeTZR5w4HB8DBiS4RdMV8JQJvJ7h4FogoVG8TnA5KrA6na",
  "key9": "LVyeXSjDUcsNzYN3K7bZucmNVhd9AYmfDgsMZBCsWPhtEgdyDJeUUDc5pTX9f9ffbLDtwS188uHhPijFoAyHQT3",
  "key10": "2bdwvSsdq7m23zJwBpUdu5f1RmwCVnxofPuqRGfm5vQYs1xGtGTKSjcP9yUFacs3U9hoXGKeakDiKgZ9QndobctH",
  "key11": "5Fax6awR3w8ner5fjYzz5uU9X7LPET6cWfMstTGh6BZGQ9CTUdJmMG2GbiHTTvCxmcmmgAv31zAq4SCDahgA4MJv",
  "key12": "51BM8JN1cpftxACC7W5pNPMa1YeNNpakB2N7j9wwhSWiUzsqbcgxcDgBtpa66DGbXqnSUtMX7DbNtprKzsMDwwcP",
  "key13": "4d7kJUyiwdevgf4cNM5wWGaG84CFHoegukXtnmvoK2uY9ChatTtoJssQdCQQAkQaDA2VdGxQB1w4Hufjqq5GW8DP",
  "key14": "4VFpVmFJC4NcaxuRXXprFkAygWDqRBoS2n3yS7DiBM4p6KzAN8m23tp7KJwDEdJtyXy9hMeRENi9bT49YuDz9FQY",
  "key15": "3FD7e2JPeafgzW6KDCCenQ9q4TqkR93PFyZRXumeKaUzDLvv9pqyqoAGWPTutJv18jbgyVuzPxQmBSrZWtegWk2R",
  "key16": "2uV1fe9SV7vxAYDS9y57RJwDoaj92VgnNGvAEXWK14opAkyhLFBCF8Q2ojEU2qkamDeNvGyGwUnQZ7y2PWpTneTX",
  "key17": "5AS1EYGv7FzkQ72TrweasGj6cjB596kneVbKKHb9PxFRioGoqDXacuxE3mqgHhn2g87BduVLjk8eup38TpDniW3X",
  "key18": "5ATeEbTwQvrwLHR4TKE1Wqjc8SMarPqBGyzEUsd3wdvvo2NKJKZfh4WPZYwQskFM2Bg7s41yp9hxb4p1V19hG3oj",
  "key19": "3fMcz6WDH7dRmbTn5siuQQntfC7MkefZFjNPa4kQgNxj4CumWQ4KUjSaj737WM7HETMefijueSDaCwtMFrcLDHC4",
  "key20": "5L9Me6nNVX6ZSbbm1hJkEX6WH7rzeKL9WEUapzRVCsAjXxCoHc52v4rSByQ7ydepMKjoBE9CyMRqPEi4byHppC5Q",
  "key21": "5sTdt9SyzM4zqgypQVf5UUqF4TpRrFSRMUGpQAEr7dMuFmLArEtuV9eSPagtBadPgXe2XTM1DBY9oAp8GEMAe3mQ",
  "key22": "wTmhYEpPNKyQs2Q89ijymAtgRGEoZBmsuKNvJzgcmkeNLC4MXXrkt2oePzKFKJ9NE69GoAXbc3EoN1nVJWawGiT",
  "key23": "36wXXoQMvZM6Pi1Mis6HDsjjcMaAEkW4juLDVXekaMcB2HNhThMA8tVsQ5kHTCht1oLwk6vcBCkoPFxY3j4ZHv2i",
  "key24": "2cwfBdJauAMfgknryQDCFx9biyozxoJ2dNzh5uVjVNtAKDbiVpTVwsTUCBH2aCz5fNjhVgqkPQGtGisUtRStWvSQ",
  "key25": "4cpKhEheAK5ZHSjmpbkbJZWr1YDJ66WrVhXCEU3fN2SAw2XeXNbR975jLVJQit7sueouTyks8M1t3EgAsxnwpxUc",
  "key26": "76uKFQp6xZTGVR3ALVVMCEJgR3gVcsNcbzWvMqRsjdkXVk1gSKsCQmmaVzo4pZP8YU8M15Bg4G7hy2QBEopajrT",
  "key27": "2gbuvvdGjEFP9EYBKLnbdhKzCnvNuHT75xutLbM2U5d9nc6wZ5rt882xWYh1vJFSdKCrmniEH7JKmfQ5Tg2f6U15",
  "key28": "3kLYTEnN5ZV8MGqzPWz4i2kFXNrkUmsBGPyaQAw26xqumryYHLLppbSevk1eD87jwxFfyniAu4TGr8JD2q1tCtDK",
  "key29": "57xLzSzHnCzjvew2TMXx5dZKnfzEX4xcUBnoQGNAutySrjuUXKyH1wvuGP4B4ihiZnWdg4qB1c5wuP3anUXXR6hG",
  "key30": "4FzdC8mJri6XD3vk5vvcncg1CUXcnvZMj2aU8sTUduok6hXsKVAWfyciFackLCtj4t5EbLd83U3TVey68hQwsXdT",
  "key31": "47WxbM1emE1chjXgTvGFN1Dw1wARTmtAu9RcW6yFVP2M6Sto3fHKW5AZTtMPMe5CASyTmscLC8ZJ7y5Dyw6rE1Yh",
  "key32": "4pGatSfvHeWeBf1MkkpUNiFKUX2SWzm6ht7uxhdA3LKMNVZmBWt6yHmFoueT7u3ANEpVqpDXcnyN7QJxacEGJBfp",
  "key33": "2Ur5E6bZUVf2MqqQRuAEsyDjfJhCNNnWrB3HHHZXiyw6hSCcuiGf7Z9U64fDFxVtHN3516cVr5rbqXpciCcmrmEk",
  "key34": "BBArGXiKsEHNmo1Xy5oHpRvuKtNVVPsCRyPTKBxs5RJ4Pun6p18b8w1st3fjNYjFwzhi9TS6Y18CbTTJEESpAwY",
  "key35": "3S65YawJLDHnRkRJ9bdyfTkxE5rKez16pAee9T71APNUdAKHgHnVAEX3V3XdnvEeb81hq6JeA74STCBubdwdoLDV",
  "key36": "4ZrkWFqwm7g2WHdhDZxaGcVFm25nqs3nwhPdFVhDJZjmVzrkEat3rMZtc1viaq4SXT4iTCRN6xVqbgQ6fjhUeQVb",
  "key37": "3qv3AC4Ea3y8NuBbmB7BWCDv1nhXcnEEEd2tsE4HDuXmuVLSxe7h4GmBSWwAj5JQDMM4iP62ZnJvWgX1RNMYeYoj",
  "key38": "2T3wpcDCLpFTCS6QYRvGCPQLt9rTp7kric7sBZnNmtkG3RFDAscf7qdy1TgPCzwZbjXzcCYB5VcSemxjyvdMLYS1",
  "key39": "3HF7zsmCUqCo7a5M7BTeiyFfxqcZbymb7EFGGRKisWE6LvHREVgEeoLLwcWZJKPuMttdgGi9GYLaEab13qKW9Ryx",
  "key40": "5t8C3NU18azheVj1yXpmERiGzKhptQLUMs7LzvMhKGFeBiFbFVSAvUWoQHnUvyFrjbx912J6yyZ6SEd1WWpw4Hmz",
  "key41": "gsVTsqbPEetdEudkKKCz6iZ6Nj7u4fvBD5wSw1DYCGHEjEFGpt5QsokhLmUfUePnxSkKo7Rgrqivh3eDcD6io9j",
  "key42": "3RAxAKBEHayoVbT9JXMe2QQkGhbZCWC1Gv9BcjnsgGSayo2at2CxgaTCY41igbynZ6KQr8SNVy183UEWAu5nnGD9",
  "key43": "4J4jkk5eVBpyfPDJyLV3nAFLiGjifR5AtYi2stBdt7UKfmKZVLXXegYrshLFm35r593unYpmUNsq3vfKaLaxBhbn",
  "key44": "32So3ULCYZCPQgWhLr2s5PaEFdv41KF86NhAvjSEoxwviA6DP54sQK9iL3C3oaXhDcDF9NNeHL1uFGJmHSQnuwiW",
  "key45": "28yLfXpc5HwG6xKKUDA8vhmdTWhUXXXLZSzUYrQKTxeKX1giuwWReXJVf8mMT5nXgW1PrcPwQPnjDNerVR8DZWSn"
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
