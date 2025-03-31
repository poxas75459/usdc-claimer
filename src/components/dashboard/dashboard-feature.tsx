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
    "51jhAkLBJGPpAnMSKnGNL8eEQWjJwwvRkPRVrU8xr77neK3FQ8JtTh1HAXZ2Ay7zxb4py1tKEZR4HHNFQjD82cJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvPYm9o7AfU9iFT3VAM4pAiFG8S3gkvwkdpg9ZgaBfNvmecyXiKGSYacguHCXfZTkw2ruKTbe1rtARb7XfoGuL3",
  "key1": "3QkeMZ26R3AcybkcuLJX4M3UrDTgAeS2cdVpkUrFs9dETUy6qNvvsDmBEEb6DjfEtjgcf89vT82pwWSqwkwjZwHY",
  "key2": "57PkXRYKy81AYDWSFNzkqvKyrgrz3mztt15NTbu7DbA8uFoouGtKuTfNXUsdPWANvhrwREi7pUxwva5Tv9YQSzxj",
  "key3": "kkveFnJfgGhtFurVipzDCQ4nfK6WYEpTZhYBWmFkU8Q1zhiMv1kiP2M7mcdGnA1jR152HXAUDJTuuzf9VTbCEdv",
  "key4": "5vZcjwsPP5xCaD4cADwjQtNm1SUz3JYadmESugVmdw2SdhD4dDPjCCNGg9Mdd9C4yCosnUoEGE1F5EMurSB1xikt",
  "key5": "E8YfmUurvf1DyVcipGhdD5SwHY1aP1YrwAG2LVKD6XC5k35ErvqPcipZwhGyFreniCn7XAsrZLWAEUzuMWbNwyF",
  "key6": "33hrWBBkmxjq3s9JRuFvoA8yG92xrWEJXfHA5GKpmAPdTkN2wb9q5X9FMfcRJUAaLVEzrMCoCYmSbxAm45NeoeQs",
  "key7": "GDHAYW5Vhp4m3BSWGMpGPjCh1NGo6GTeQajJU2qtJtvVbjAm6K9wddA7MykWTBqj9Eo9vmTHQVsyZ3txXq8ftdP",
  "key8": "5whKUEHYo6Xr73HC81HoFxg3xGARSr38CmKzMTq6pPkLg5dBR11xzHq9hCx8Tdfyyrx8wnaE81YoEL7ZvFh2c66C",
  "key9": "48T1pWSYjRwDBivJSL42B9P9EwKMYVLxvrXfLH4m58i9hFLZTaWkZcTV9zVHtiPLFsRMS9Z3XyF5E2qS9h2kFcgR",
  "key10": "39SmpQTGcMBdbpvngA3VxnzEkYiDCNH3uavb7uToUyVWoDrxziTuCa26gAt4aZhPXhexwX37JXJAd5CAHuw3DdUQ",
  "key11": "FjeFAVXKf4G1MEiEWAvGkMyHSFcnPSCYcURrk3Fte4YWwvSTp3KnX2osSwR4Pq2f4Lib7YtExuKEMc9uYqcegai",
  "key12": "394ssjxj7DbSD2weFWzcA3Q8WY7Hw5yf1doL7N643nJ3Hsf1UDXg2sfM2ND7q6M1sbqNHCgduvTqv3yfgc3Pa9BY",
  "key13": "2EBAL5dJ4vNVAkT2kdbj7ivpqsiyLqV8vxJ6XhXZ3x8YgF2X7A9Z4fxaR5x4vh9nT8X8CAk1XVTXd8jTM8MLrLqh",
  "key14": "wxNGSsD2JJV5FRJEKqJWfgr6ruuShVm5S3B6jBirqvpZdAL1J7HCNw4SAkWWZGw3W78EHosKuWdVP1nzYoRvGag",
  "key15": "CSCakc4GWqbTK6mB7HyKPFdX1TXuvCv5eUgFfm5AKsz92JLcLtAqVKUYovsBFZxbXZS4DBijFqjLjM2XdsMvb3W",
  "key16": "H2vV9f51e2oP8SJtCZQNim6vjbSRLocVHSjgWY9zSVpoxTxFZzfdLHjFX5Fkan1D3haUiQgSxz4AwxpJANs5ndH",
  "key17": "X3TFWtTKdPGgPHofKgzfhZX8nkR8CFdp2kFt92SbnYzhfsKT73Lst1fmUd4RWqYBMUtmvydRdaHvdhirNRxuaUQ",
  "key18": "2QFT5JZiaLwU8EkaCf2jX5GYauJwNJge6x1WxGbY7EgS7rW2DzEg9BUySdM628A33AjWTAoPbP54mfrevpYCmCX6",
  "key19": "21wEGoKnZ8uCZtHRwpQqQNpqDpNpekiCfd8MxZBtuSUrZyuHhTG7QN8yvkuKWD8ZXyurdf1T4smQTYGeBPQLjAHQ",
  "key20": "59uMK3kjtyWqVuriXB6Lrwp8dj21DpgywSYg2aPdXkHxKLwvtaz3W85g5hD5ZRCgAU6z4iJEUG6jvTNVJu2wTwrZ",
  "key21": "5kCAHCQuMabsrqgei8BjjsNhWhX5haMfSCoA6zTYtXnbeceyURNcmMHf7q71WA2FuqoFp3LP9juboEPJizSJ3EDH",
  "key22": "6YpoFU9NNtVuAmmvuNxsMGqr4agXk6tdCLxgwTF3He6CzEyneZ2hcGbGkzA2T3AUkDkJXuYELwrSMBL53ryZPTb",
  "key23": "22gD8n9ngETPzbHuX6b27sobNgacE7X1Pr1pnpYDNywGuA5QExKEa35ED3cLhMgAUADpt1qvwP4kEZBpz3pdVBaG",
  "key24": "vhWQfaxENjGTiLeQHKK9gP4HE95taSk7L439N4578covk3L9vTwU7261wciXJpn4S1XsXeQfvGL6diLYSi7UsxV",
  "key25": "38M8EhgoytrGyh1uc16mtSsnbrEEFC73goU2yvK4epCT5cmNaoR1bNnJvqsZG6sEezSH8wxCNXbjxNgf4XBjuBSf",
  "key26": "xGuNFZmTgG15GNHxDsWdJKXt9Fh6ABu2UPBsCoZ3duqzffjmWdsnq3ikm5QtwBv1zzTts1iD3ka7XLyaJSora8i",
  "key27": "Kippmg28NEBB7iSBFxShiTLdbwCgJP3eJ14V9VYZcerV9WTzXDfHM4g33N4zxYceivnpjbHzmoz8r36E2CLf1N1",
  "key28": "4MG7dWx8UtMHVbRsjUBjHornepWhdVi6aSeQPtiQivrqjeijzaoCJLyxGiK2Ar5zebfBvXrWaQf6CwhpvbCkAbZ6",
  "key29": "3QcmXzABSP1eHvHCapwrCoUs6MTQbXL4gYvuau5jNKphgTKyR21fUaqBHv5z3pP8BuaV5hPio6QpiGKZqDTrQSJJ",
  "key30": "5waN3Q8UJuczdq2Akw71wQQWTX95UKbrcdsG86Ywh64CnEvx1yPGEiR2bTnnBtsYn8ZAnrw4gNbsssu3j1wZsptq",
  "key31": "5TqqMJJk6TiUXQC9XHACWmK8rLP1j8Ui7HNomcLzw4VRPm6qFs5gN1Qf33fZ4Tgg5Lin3NSpdByBYQkkbceUfWMD",
  "key32": "2MgWhEFJgUbdGR2xSSAVGuW9YbXnpSvqwNXzTF5phKekuXkcJjaqDfYwHdu7hrWQg28izthgoyBhtDQctQX8hBaR",
  "key33": "3vhGSJifa4xrBjFgY3ooC8N1UMmne3Nbmnx7woPwc1PQQpncA8UZEJgdu9eSTkuVDPopXrCsVrEnQmzhqxQyBNbV",
  "key34": "5UJMAuH4AsXJtoniUaRBK47vyT1rSkF9Ewcz7xJwFnTZv3cfBYBvDHDk4x2ncZquT7C6MB73A1hHob6yZ6VQQone",
  "key35": "3pNMytMaJBuNuTmCKw4VHZNrczEH7KrmBed76p48Hs17G4QuckDBeJ9C1DqPJAbBeQbbecceDysojXcuJH8a64cd",
  "key36": "55HFcdwxFJLMNM37HmzM1cdM49QeZTjqrup1Cp4f5CFDRyDKs1PRSjZQcy79GEoeK48Sn5yiZCFzaaqqaTEj5Q9S",
  "key37": "3QBTfxUSuSNWNRDQot7QBHcFcruS7s4WGXtSe1vHkyLssT74L7VGUDw1vWNF6xvHmaGToYm2FYnkTVUSUa27QJoW",
  "key38": "5YvnbRRNxj8ENpEzV77zbZRrLdRFNF1Gpio96ukcDXk9iCNPLiZ1DM1BeeyzaxxPmVTtmEZv3fDhyFxHcLsyTCqX"
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
