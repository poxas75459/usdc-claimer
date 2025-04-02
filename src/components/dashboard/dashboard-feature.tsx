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
    "ChripyQ7teA1cpdqZ7P6zDbbQtV6qUBWYgP6nNYjF9ghWH1691akmBLYpALjsh9LeAETFD5eAEDBsfar3fHMNpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QeKStMkPWsY16sXPwCKmqErzMNFPKeyJXCbavUhiiDuAAPMukhy1kWj53pfR7phkz2jGGsU9fqTj1Kzna5T7etG",
  "key1": "2ninshCXeZoSCxTjtcHcPmZJcVGwLizGSqm1L58ZpwdZZj57RchVxyK9xVLJSCZVQxTKknQrsd9sxAZzZnakidFT",
  "key2": "5tzfm1ob3XobAs3LLWAhGPeGvEuxBMGWV9BR8YvdZcdRhqRkYcyHGF66duBuz8qkkUTUmMmtRF5i6AcQnRosBWHm",
  "key3": "hxDDadE2HtDcaqKY5ZNcwjM2dtxuNP4VM5WoX1hD1X3wGyY9ziYArbCqh5wmMG15G5D81QcGYt2rv7ndamL94fk",
  "key4": "4sRYLw5UZ4iPz9aBuqaNcqDjmeqwyZa1ypTHdrUZasqGmX7diHNJ1cPQLpfBDLAnU7wm1a6CoJ2DVkTY6vvnRWzJ",
  "key5": "3UAGHYtQsK7w7ZqdyspuS6Yr5TSXXnsFpxtjK6wx4ZqfXDvHEqLxDTXJ25C4P8yCuhs8CvLLaMrQvk4MQJQMAC9C",
  "key6": "2Ef2VajDyv2F6kHb2didMu9wRwMkdkj7amPFMwqSBF5prgQiYEwpHmK74zMiTgAKUDQaoi8UXQ8eNuHmi22Hzrk4",
  "key7": "5DkbunyjSEqSA2k1KwmQacMMSFs6xXcVAw5rm4iGDGyRccCYiWkthox6YLAz9J2B52i9ruu193x6csCB7TBak4Ko",
  "key8": "4d3UhHYMnCXjU4T9NUFQZNzeg6xHS6WHoPJtHmYwyXpmBxyh7D4Lg6NLCtWveTYtLUckU715UcundMdRA8sGDUn",
  "key9": "5FTaNqFqodVPxcEM1L9ErLQQVRo76Hk134rZzTp9niDTr3C6iMM1fhTEW3UjRuLZcDogE5XSLHaJ5ntV3gPndSs2",
  "key10": "3QneWMJauGSMrsVYYvBLSXsnrcr6PD1fPCNLk2TinRjqRxuRph84xC4Pb4Zf6GteWG1QXGNwyHZiiMEnT6yDvxD8",
  "key11": "3a5FCNVdWe8JoNQ3iDr7hNAaLB611ZjWXwz8cvnbgwV7hfAP5sQCLXMwU1hFPAojerazSMzSVKXe8dXpytt24MTe",
  "key12": "2ceq8ys3oM3nN9CEcFUiXF6Cpk7uTVWFRJQEMpb5boNwX8tc6pS5sFoV8eTpdvGFEQvsiuaBmrZMRRKaZGgA6SoK",
  "key13": "XX4xEJKfnbcDU2GqNzB8rAxwQTHNUjcwhPsXSM8C9nECesMdApuyM31Y12v8qMBQdEBjvVoNH3wMfVpwi122tZf",
  "key14": "5cSP5w6yfFmm4ReF8YKu6VKNpt9siYPMzVzQpbXyoB7HjU4vnCsX7MiShiCMqYSPGrcLPu9Q8CfQtVzAsBxe2h1P",
  "key15": "4R1KrNMfphkuUdy5wCEJ42QQGKop555zdEinT5pxLLAve6EQQWSWtfxu7VFuRiacrZSdiaLjbF81g7VhQxAXg648",
  "key16": "4A9fsqr5xhMh3MNdzHCDqK8P5tKTDS8JZXmKPJcNN6fboSmUnjrAQfPHRJVpZS2CXSj3uyiZKkVmCwkeRiZKx72k",
  "key17": "5ncj3V1PUmsnx5CzD2eWZw2fvGeQ4WgvseapwXhZCV8J5w6f7i6Znrbzjw2dXPXvjBUwxPpSaSsSShTyQVV3LBUz",
  "key18": "4SVhnKvtef671GQasvgrX485chKTDD9NbzJfBqgEpjyDDPebNVxUBuQZKdV9FCV68c5CdEfY8KhNtjnUvowpKsHm",
  "key19": "5wdw7VM2GfiBBo8AtQaq17BXeKkeRL7Dj8HYf1TiiApN5NEKtaVoUx8PLL9yPWjKzoveSpHqYxhf59UuXHetWw8",
  "key20": "iMcmQQdFDkUFrYxjLtKX5dd6tczEZzMVbHyz9S4bYcumj46vwyDFZstpiFVeANJMwxktzdZpmLJsCMptTnjg29U",
  "key21": "3USJPNE9Ssc8RK5AXGFQyYGwxMMSrLZdzWiKcCmC99C52Fr7qvBeDKSSaFTVPZqasPMxy8TzdMM6ZrKJW1TBZKUj",
  "key22": "5e4ov8F3Rj7xsXY5xGADzZo48ymgs4cPN1jWXgsazw17paGcErH9wafp7YQ7BXPUiNK3rDVtGaJP9kXf6WhBJtQS",
  "key23": "47TevncFyHPTzbZtyLUDbCsuqXn3Lc5eVfFS9GuwQ4RYwYwEE4DnYMpQYDgVHn5wLnbFZoASqWP2KLmctNzMvq4Y",
  "key24": "28z8sGR8LoV288xPaL2XvozqVJpEnFAq2gC2HhcpzZ587HmroYkgh6oPxQKGug4rbw3AskUHekJxZTR9ec1CCmEe",
  "key25": "3Ygvnum6HbdfLWTFYKGdR25sAsuPcZxGCiis1Ccx9qiS4pszgczvu3KEt4j9ghTQmotpjtCfn16Fj1ccsipkjGeB",
  "key26": "4AU4JpXYXbTsmWhM1WxvUp2fZN1kLkcLJtwgXNkxDeCEvxRHn7TqHzZtKtHM3vKFPnJ2ytkELxURpjWo7TUHqDQt",
  "key27": "4To1CzmpRWR6skDNFCPU2EA3HmLvf5QeaukHqJGVHoMwzGZA3he47rGUNq7eMA6WnfsSEKaGxX6FeBrriTLRFVG5",
  "key28": "3hbcm55bEfzKGc6D5DWBcmuabQe7dwhFmsJoz66xKsapStktqn7brvCeMettUcGt83rtGZeFJDFmYnokk7wzZBdX",
  "key29": "2sYdusoQ9ojMknhotTFUFxmzMGyQRVyVnZhZof7YAgmVQmQ3PhW3Nk62geHMBayMi869sKXTs7vB2HbqiKpZJ3xL",
  "key30": "395uyTf79ricthepseogSWybL1QQv8LMRKhEqqo2ecUB1kmXf9fA32ELEb3sMxeTjgSSPZYmfie51o9aNDsUXCGF",
  "key31": "31NufABvgoAEfNTAsLZv1pc533QXqEEJ7RtwxTm8KRf6FekzZEwtegUu7MZzwCmBpGGp1ftM1nXg2hAh7cV4sHxK",
  "key32": "yXL35pTTqPsKF9iRnSGFf8ZGaSV7mYqsChuB8eS9xCMpF17yihiAFRaqWc6uhc8CXJ5DREqMjS389foDFoajit8",
  "key33": "3tBxrjZENTjXhwGeAKjyiUZMMqSTuavAx5u1ZP7d5oGZGhpPcjkVLEogE61UGHGKgRK839VHnUA3AVp6nfZPTcFe",
  "key34": "3xSZ87nn1xKBryH8unpEnJrdtGBpgFeCa6p7tibmLJi234nNU2QJA5v6yuai6ERsBupmBc896vC1Js7X4BPaF4Ua",
  "key35": "5NPVati2oSb2S65KuNDjdRG7zyC7STM8kzDs1FRYjcsZjFgUyBPZryqDjTJQQLaK6UBV9qK4KQHPywyoogWeJWSf",
  "key36": "5JMiFuMej3dqGKg2CLpYT5AwnyZdDemNVfHgAatknW9nTy82SH7pW2Wt7FjmE66a5ssDLBje9zQnq2z5gvMtWZWi"
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
