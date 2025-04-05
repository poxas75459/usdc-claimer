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
    "3PmWknC4w64b321vqP7izdcnjLYMEEktcZx35iiWeBhPnLQfYdFETZEKDWCqgPdxANeKtQkbUdbUqECX2GWVvRWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PM1BbQ6Vh51BTVhi6Q88Yq974QxqmQNAfPMQYP2oUVqcGB6bxYpANaVUVfQhiGuAUvEdwMmG3gHUFgTxeVeQf7F",
  "key1": "2H5Ffoapz6UG3tKddJwqjZupV2tPHGGbfcx4G9CC7LAVjYzC9ngiqPPDuGBMtZZoJKgdoGMzqFXmD1ur5Mxd6uQr",
  "key2": "4zER1Eq8z1GLhJmeyEpiwaWRzQshqt4FiNWtFtHRpdPFQjTWyCh2LnWfV95MnZCyyYpducQaig8t8rBvYGrp2cW7",
  "key3": "3DyAuuDJ9xqQSoteXFKBSENbgnmc95vEozwLvaCUzwSnMaCrURvvMWcMv9rmGGpbsyQNi1NdCxbGwPX3HAbu8sLq",
  "key4": "4Mvb4YHGCAMy4A9Sy2dYpUuEX7g9znyqttb2a4frdxmKZesfY53s4AzNvVWteyu3ijD8SFEgbChaPx8mU6GRg3mH",
  "key5": "3LmKH6LJ1X84yPqZEWqHrpDqvXL6pWASXNJNiGwZ4JogsdxxpT8faK4E7XjEAWW85TYb4snHyRaCz53sibb9gHi5",
  "key6": "89QWvrB1UDz8TjMDFwTK2bxmymjvW8ZcQ2y6HshXfYvyfmnRZVnrUfcuMupkrnQ1TZq7ThQeBsivP1p1Gecy35t",
  "key7": "bw3kGn7cZQE82UG1tbATPzHk6rUWPitQ4gQaip9WfbjwSEnDhbCzdqZS3LSnmGE1dGXmpJn9TBjTNoqTLmiwSpc",
  "key8": "5TFjR4bvr4KzNCrnctaRD9ZDYmYVUpdw9xG3dvvfFrjF6MNUFbxo9Qz9kHsuBahejduEdosKYk6CFqY8SdR3ysPM",
  "key9": "2dgsNtUkkDTAT9V2YePLukeTB7C9zWaaZMbZBfszq3eg9H5ypVVoAPZYoLVmjLg9HZGnfopX4eDvc1DtMpRoXWio",
  "key10": "4zuHDAE3Am5VWFsEmabVUhChoKmWQhCQ7CmPqcfmgrLBYXAboSZkoDWTMQFBzro6fq61u1F4oef16cwU6hWcdbtt",
  "key11": "2y2XGfmFPgfkqbQg6iyVRhEBn3DL15yz1A8AaQ2eFMaSH99v5wodrSMrcgUcjb4YMgukfPdAGsxDTPXStNtbYp2i",
  "key12": "2eeRJimNjpWC6dGwBKYBygsDLxir4ZhhrX5KcDahZhcFXWojJewZJVu4eaSrm77MeMu1JFKmZXY4Vahozesqh3bs",
  "key13": "54D1xet2vPaUein4pfzbsBWHxpJ9cNWzxEamLJ6sV4UgZpLawufTF85rpgUttyqp95LPPQ69wQEv3Pf1S43hQxwd",
  "key14": "3dt2HvrJTV8d38KeLL2sQh7L3kaMWrvnBC86EhNu8SaUHSaonwzEy45qSAxwQjGmQcyta8qp9WNXTqDG4mRXfXSA",
  "key15": "2kEPsbhKRGooaYggBM2xsZpTyRcv7HTdHmi2PBL11kXDgcBx7XEB9TqxPWVuB8TFLFpgrFPgLgtaVUyS4GffjaqP",
  "key16": "2d8PgZbwmNwSf8g5ZtAPHYcddpHwfaGdmxjoB4kHxbbnEhstkZurKv9p8BH64uGvGRB3XALTgnCTGEujYixTHAYN",
  "key17": "3ufnyyG5Fn1V1zyQPF81yfTqq2JcUcbebAPNwUbmLdgYVXbjNJPitcwya1VfTgEqYSCuUDLQjWehboMATre2yeKX",
  "key18": "35x5GiprDWasb3wvJQCSouN1VNcwTAJrpyUFMpY3Jf8F548HKR2YEdLGM1K6iRZakzVwpzi7wqtQUZ82iKTh2dFa",
  "key19": "5wJa1wtYsAmuDWQ195HdsDfaKjG3mypfwzGZWiZ4tEv8NvHpt9FMvYKYXiTUNB8SUuBjSCg3x6YwTQiypgXSEqet",
  "key20": "4iF9aVJ9jsuYCAo78W8EMpXNqQrcxRbicF4JG4s7AvcSDKgSc5VZtqzymPteHbQ4JH5yks3xmhz4bXNbRKayxexe",
  "key21": "1SqDmM5TXK3SMHAudjVkiK7BRS7xSqhY9b54qRkjZQy3hmr4WScvM5QuPvJTDkrGFsrDbaSDCUD7ykCWnfZRN1",
  "key22": "ks84YCiNhfBbfx9e25a2DM8vwHp5Se7TKsjiLy7dtRREGq5fWrye18gTfVKqxYA5NVPbEFFARBQSm8PULfwQuE3",
  "key23": "5TBgXBesNgu3J28rYkaZ7cHsZFmoc3y9pfbnHxomfUBm5czSqTtjmugii4NAvFsH8u48Xt4RwVpRQMD46vKmNsWo",
  "key24": "3gwkLjwkwPf9QpRDyZY7G28r3PTwhpob5tUCUD9jMgoRTVWRVdyh97zEgBJSifyfSUiJJRGJnbrGPJq45fqB2gum",
  "key25": "4xpwED1crmgMcpBmsthDQvGGiWMnFRhfzPcLUQXuY56xbQ8kXDtmdScFFUSDR72GVTyPANbu7cSXAy8N7aZJjvMd",
  "key26": "3wrofCgBfjJjfVrk8oEDoAJRr87aZMMyjkRPnGhWCQRwSFjJja1prd7fYksXbygcFDcL4Sa4kinNGHqE85awSU9J",
  "key27": "7UCotE5GMHzkcdk8jC8biRnaNW4oV4XQRaQxgHD1PpaWmMdnbdDjePNqWL6ozpPUkFR5RTF5qj7YrQJuUjto6vv",
  "key28": "3NgyDAXNqkJxGRgsHpc5ciutTxysXbs5gjgCfLe2TJR3E7YjMcK4X3538UNjqhRia6TCZWMnRNXsSUrTSbGceCsG",
  "key29": "2ApKfNnoXVB8jrPGvN7SuQUPqiu9sNNq9dmxqncrJtpxpwfxrSojiNYF8KCm4PpAkS1wAsMq2rp7Eg2eMWDjTB5n",
  "key30": "AFuY5dyKRuQ1H5dvV5Jvws5hcK1xWzDTnWJ6Lz7oTAEPBvFJk5DxDUwiWk4gEMpEdPmsoP1NWzsogJUqWSRkX95",
  "key31": "4n6fwMqFuszVcRct8H6WWp2TJmjgzbKPnABakRCnV8gQjntLxdppgZmKEhyDyiagefxyHrcEoHzKqa6oT4dnYXbG",
  "key32": "hPWdqnCaE1HBrRSuZBf96vWaUctftmjbkwRwC8edsqwgcZ8xYRXwaCWfBZCegYBC6XaVU2FejrkYKuPLcX3zAvd",
  "key33": "2FsNsf51or7CtB5yf8FeHPTD48bREwyJu8JVEzY56M2AdYv1mWYhD7jiwF9GC9jTxCRGem6RA1zf6pGRdDCtArPm",
  "key34": "21B58rv6qi3QRdZwU9bEDsGxivDf9tZyse4FLuM8WQdxtuzUYcPiUJWALsQFpWtHHpp2nNbg3FnrGnj1iSgukSrF"
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
