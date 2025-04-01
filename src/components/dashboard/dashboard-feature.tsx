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
    "5XyCKc8uahWC4RWVpCGPBzQgzv7xGWcHRYBQP2YPbuvcvmwftnykD7J3msvLEYn6DjGgMxKvLEPpHhg7REW1wL6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNW44tb4GUgUhGRk5xr8aQzzpfYBZ1VY54bytvC2PsAE6yq62krs9UkzihszjjQURDYrWFoHy3AfV4VXZvGZ2a9",
  "key1": "53rk7JTNZGPGHbsGH1H7DPigMQz2RuYN3hBFt48qAUh693A46kqgphmr4BZTuFuEHyNCswWCRYoNMoDtTkbLiTqa",
  "key2": "4Mt6SApJdADsuJ11ieEstPiCLTSpFo98Wnn56JP5ody1FvCxeFjXuX1gtKSaoKumuFkFGtFPDtuCJLN1u87tMuzx",
  "key3": "2zwwZnpPXXfCY5s5FgMHTBvpY594Z9XuZqSw2EvRuCMpDkryXZfxSWR2PfCETFf5wXChgVVWcQEUQHs8KtDGvqrs",
  "key4": "3ByK9rM5Swae5Y9fTr5iQfmKwy9d14RyfHPquFpq7MbVkqgQG42Kd1frbNtnHNAqfaZd3NqKkXRtwzWjUmHPDvHP",
  "key5": "5hjUjvv95eqYNybdqoER9x51gEuhfXTsaoa9GZkxPmzSTWKwuyKo65kh2i6ZA5tbyLg3zo6Y4Bbp5nNgLDgXdbzU",
  "key6": "fZCTewqjNkYncg6SthuCfJPrki552AkcJViVdmvrqvM5Ttfd3sMaMHq84dj5nGsRoJu9CXXLcmJFM9cXTTLBtAo",
  "key7": "3FZKXk3HeJFhrjfSEPNBMxV8N7eCDanqVpHGKCkXkxqTHKAfqRaVL6ogypXndfdhxGpYSSWNHKB7aGYZf8A8UeSw",
  "key8": "3XEBGNgFT3pFyti3bXsyufYxFkG4DrvwAZsHPgn8ieJR9hZtcQVU6fVtg4Mg8rJTo9BYiC4mtk8j6w3TDQDb1Lt7",
  "key9": "3dSS1RomAEqyawmvimspYZLLm8Hhdngak5wou2ALAtqL59CZ95QFNWmdajpP4Qyb2NXJp8wgMDUfs5DsuWfGDHR5",
  "key10": "5a3ByXTwd2eFot23KzQjmh6oCApMARovaCsmFg7ghfEKSAZVK5z8CFxkSq3A8xibCqWoxEpqzjj2Gy71WrSHTSSn",
  "key11": "2Z91quj6rvTsxD1gBzaDq8oHoik9mFU9WEecUXrQgxR3H67CZwEA7A1MhKQdjCN3XMpXHTLtydDwmMUZ92CSRKaU",
  "key12": "3YrYqw6yzYeh29WD9sJ5AFbtRiHEKa2J36oyY5vQAqBAkuqzBx8L5NYLJAuhDS62MLKkLKLoMU7rL1t2RwZDdk5j",
  "key13": "38Pva74aatamwWFmJqiPaJB4ckbsy5s9YhBfMjNLr7D5hcAutFef7VfsBZLkWcvHKKkpiWNPrHoXroFce14ycBq5",
  "key14": "2jeS4cGWRjw3DeoUCqeFqBMZkHYTUUDqunaiz5YWYy2Nu8j8NowSTmGbQTZiDaKtTUaiEKQ5bru7kQSdkjEPsoVy",
  "key15": "3YTi8e1SutJx3FUAYzgDsyJap3Exxfok4fT8gcoZd8crYHysxTwyW8ERDGD4aHT9x8iv1JMmgbvxu5V9bu9Jr7U2",
  "key16": "3hdtRnzvu46jAaqamSyrSt5M94fwCq7c95pBP325E74v2eYhWKE2MhgMhdsDecQx72naNCV62pF9ACpdkR97tzKX",
  "key17": "522HVCQrE4eidjFj2niB6DtiRnRz4gqd97xVg6pUdPBhTaRyS15xg2X3EtfBr3oyH63qKneu16BKGWiq3PYxKnVb",
  "key18": "3yTsqgPvvgJb9XbAds53aQLzqNz4Xv5xGAnvWMQPJ7fT5o9jTP9VEWbDkN1E67AEiN1mLSzAn4hBoid6zoaC6MM7",
  "key19": "5G39wrTfikdiQ46gARoSJSNZ8zg5SoLJdVbd4so4WC8Tta78u8HfMX3MjFYAkgdz9mDzS1FF2Dn6nHjhn7tDnhm8",
  "key20": "5cB7CgV8NynYoVZ47VY9JdAt1vPEKZKbAVpieQJScXrARW6NFNYnrqdoJAaAxSoxtJPmcCjbxoFyVjEEyt5WDE8q",
  "key21": "5LYEQb68bWTgHEuk5Vaq5dgSe3x9EBXhsqjz118UDDRroNLWUx5vx8fAcqy15tNVi7kmsASZiYnpFenzp2QZ1BbX",
  "key22": "4LcJTLMBwHLQVm4VZmxQmDteyKeSEKypwCj1zuKep1fyB6KEMtpaYUG7jtKkbQyJwhJ9hUqbMYQKAcigmdB8CGQh",
  "key23": "2cgmRR3rzqPg3N2VMsEA3DxVQjyc2pQH6xqBoTdSNQkpDM6ioncNwJ2NSppf72nWZTQrA7xdCRMhnrsZHiDL2yXr",
  "key24": "4m6za1HKFzUxNuC2bKazTyyCAPXEbLFQvNpEakuZUfK52ahgNGnskTzxHGQ2Svckd8DGKoT5YZumeaqFN3dQhvbo",
  "key25": "5qSZR5C7J4Y3gqvZkEH7E5mKeLTEfmeYdbchpLcY6vzeQSa5NBeRugQkKV7HAw1xC4s297XCcvkpynBMqo2WqtNP",
  "key26": "5Has7zgDHA6gRh8xpuximdRbofdFNE8m4XLPadwroKcEcHxwzocYesR8ejmQx6QvXbahQZeTjsgaRVR4Kd3SnRMS",
  "key27": "3tSvsQm2fr6MrcaygTPEmpyrsvw9odpgan6YDmMAWG2LEzCAtvsz8nRsATU1qETuhBjhyBf9Z38gjLGczTPrM1nU",
  "key28": "3M1t3LixvUKjzQovn5taGTMPJu7r3RxTv1xeXsV63KpULwB5FsdwHrUD6LZHU9TXuFfbcgCibqeRfrZBccqHvZ3X",
  "key29": "5iwEqDohMEqVpHeRik26GPrMuU7t4z34G23rf6K4sgaRJokxJbdnou6A6ZirhRAzqDTWoBuwS2ZeQDxCtLkd5R1",
  "key30": "2DWDYLst3Rc4NAPkUeLoThxUKpWy3xmfNMJu9tBSQLepRCWfaXYYjBP217kofxY8Zp3XkC25DxHjes9n5oSjdJo9",
  "key31": "3QH6LXCTd98rjpprwpRPYLjKPSG7VGgBpyK91Ug5btjfUiEcd8zpm7DGQpkbD8Ug5xNjBRA21JMnYwNaWMuFQE4x",
  "key32": "2MR6YVS5dY5u4McyhJSXs5hLBxUuZC3DUA5Ghpm5n3mSE3135NESS1U1RBi3QVLcJAtTh8Ro35PPZs3tzsMbQcYH",
  "key33": "4K64L2up1nt1MfdjxBirpc9BXRVGwLrB9dMwXPyiCQLgyYBSS5QUGdsKYPrG7tmNWVXhqYAoTHmeY4UgzW12XjAW",
  "key34": "3C6DdA4TX8Q4ATwtj3ovRAUuEEqLPokjzACbLzuMqtUDPa4pp2mDAuNJ25bNKcCfrkujaHEcxycjqV5aP7BMR3SX",
  "key35": "hqf2Pik1SQMaMnyVkgsg6rXrBJRRmrSPCFDhB78QW3vGDLAihyjaDQmmuAg1DzL21RqPz7N71PgsxN1dK9eEpPq",
  "key36": "2g89TEZatiYD426ktVRkJDLrzqtaVFzZq2h6c6dzfxaCMXYUgsxBW9GC9GegMzZft8PKA8UzDAQFrgA4ds8z6bBG",
  "key37": "29H5yf8pGEp1zBgzG1mJ1Haywx3bzVR4oRXcWFRmyo4jJA47GCM5FWuUEEjinzfgw87Lwyagpo7Poax8Uyzdqh3B",
  "key38": "2Rw9bMrw5KRkZVUjtAMyjZ72jXUMaxmSB1xU5QCCTSkjueRMkgHYEoVC2ikP8w6iUuc17zHwbQJKoZGTQgdcw61H",
  "key39": "5gfMf5Mwf9MCfoCvVDqUkAA8d6AeEYfv6NGNprgJMYYNkE5pvsujXsVLJ2kmngB92S3jPgxsFcubhTwAJX9kYkMs",
  "key40": "5q2VEE9t7jB9E9TV4sbVRcsTXYYNma1KLYfh8NGULUxhrHn9LDHyRLKjpMjFzEEM34HMjoPMvj8efxu5yroyyWMb",
  "key41": "xkLuATWjRRWw6VkcwnwwyZguTNi7odjBQbJ3VpQVEaRNKpAfPuVXsVbxp6fafpzFNdNKCKLcEUWwkAUH37tmWFE",
  "key42": "4ZUuHFuRFNYtnL4NLkhEsJmSb2oYMWBrkwYsKN1hC1jSAfTfeM1WrF3sdLSuX5uszZtN5UtrB9hsmTHwoFuxHqXd",
  "key43": "2tAjsX9yoAPqPDc3kkYnJPizuLCbK8UTiMoqbkvYoXtR2bX5N1NaPnjYBx5jri9b6TnBq4aoCbEFNgcZqrbCdSjJ",
  "key44": "2c7LCpM3BBQRZtMKzEAeExStq3AT3QpAyb4R3trMaaVUCHt4ZmjVnSrMYMwRoDTCPH8axeuqkoZfcs4Kw2CU9MeN"
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
