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
    "3wiqG2Ky2RXHsP15qU3CaBZW1WsasEfvHs1Bx7Hn5y44Qose9325qHYhUMpUaagm11Ptzm7uSX81hxkEqaqLBV9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611Rgqs8u4TsNCQzRmzb6ojLTYkiLvSm3UQznEdCceqgu86r2qoTCrmTT4eZB1BPf7aoUjND7Vpfod1zhFdK8cmS",
  "key1": "3JyY9DDWGXdr21L78rvrGctwzektCgoFPhJXFYmawcMTpfTCavmYRc6QHmPPHcs4gnw6vYWbFHqPZUGThHZV9Hef",
  "key2": "4Vht2rsX6RCPN5pthSkkcCyNBPztJKGLZdeS4YqPGR1Yr3PNMnQdtuGv1TLrvvM8gJJFpNKq59xfeGE7FTEV6VJb",
  "key3": "3rfM9pxMezMDJURsziHfC2ZCdRqemNJisaTMtqEiQTQQDDVYRdNiVUyQvwF82S22TRvWz9G1BtW6TQM9eMknPB6J",
  "key4": "3t6hipS6ouC6KpAaiiFX25HRoPh4nGD45xdKzoe9FRL8rcM5vs1uTLrDA8GTkHrkDFhkurtC95c5qk5P9pVutEyE",
  "key5": "4vWSD8DkuuWperAesMSBqLQsCXyUQE9KcczcmtGsS5YGRSbYjck3kundESRB1ZUY5mMx5raMwFGmDQwEQFZMEzdy",
  "key6": "5N3bGNLaj8wVQm6x8tfTh1z2oLC5ZhNFNX9KvVaMTbsCfabboG41JLgdtytQ51wb4FZUVvyhZsxLpR71mqsdbgGP",
  "key7": "3iv3hhiTpvg94tfdchBMH84t2uXe3y8LKWctVPGaLh3QkH9MtTENqn9iHRiq94mrnema2PCfuctpBhWoQ1fyWdfS",
  "key8": "igwsg1PQbJo7yJtq1MrxMyYQWTcaMDgsP58BNCh6b56ATf6EFeUjo2Rth1gFqdXwrCZXS7N3YAADrgHuxxNoJBz",
  "key9": "Aw7Q1Wgii1ndXZYDHKyT57H4AJNrGwJbuZKLuh37sPRRjPPFS3iZVZ42NpJepbGkJofvX1XX6anUnNHy78WVgqT",
  "key10": "5UGQdfYmKkw2Y5PwEPeUAPe7mfsiMF1jrLj3HkwrCSWTRuTSqiWJu5UKmeL5s4q6mnsnqfZT7dm4eptwGckiVttP",
  "key11": "58dWuWfsZk9JNRSPW2BDwYGaRubcB1iVeDUs22rZWN3MBwJJK9zaw8xMXXmzj8zpM5DNoLEJeQhYrvmAUFLFjFvn",
  "key12": "2g3GzsVbADJgoGGMW3YTfVXp5kMTjSJaQLArsGrx4DBM7tsUq2ukew512M4mBjEgcDwetLLtGPtiZ65d6C9t3H1A",
  "key13": "35VAx4L6VtBijcgsDiSqJ9nmPpwjv3oyTFgMD5hDNtwqtrERpXoNfyP18E42TyniYd9N5N2MKxA4BPzZBJ4JJmHx",
  "key14": "5apfijqs8xJD1Gk2trmAPAebezki8m7BkcjsYvAZbxW8mVQUNiswqssfQYdEStnhQsvgfkCe6bB2u3EkB18oDXAs",
  "key15": "4vkC1pNoHmdAxvboE2ozZ7oYYFSFZEHUz7e375T9gLHmrhy3o6TXPqv37rHQGurWdFMk4mTGwUnksntzWsWAkppS",
  "key16": "FfiRTRCKTktpJF4brhtbw1x8EJcf4krPAuyfjFRvEnATLJKUZWiRECtYbvAp3QFACRpxgYeGke5RPFCdby8BY5i",
  "key17": "7PfKcQWUpfLfrnXAkZVvpPAsstASo1dEtdD2M6ivGbx5HiyvQTQ7EK2Gykzu9dndS3dqEwymGGB97MVtunJkL4V",
  "key18": "65EQYRyQ8AqWHLFdPNBo76iSAidwxw9qMcMNMWqSUpudp9sQtTXFCgSpcGWD6eyAsRkLPZofPQz9iSjbGm37Gwnu",
  "key19": "48D8aWoLZcMEcjVceHHVbnTB1cLJr38e7tMbdYX5AtVNTJTdx2YPXYZBsn1BvTmo95tGy1jC1fCzwvg8JPhfACsQ",
  "key20": "2n8w3hpfPjXo9ayZPJ5CF5BotAivoiCAWXdERf64DQDBqyKWXP68wx9dd9zKsFm3xKX1wrAaeWoFobUvyLTLDcXt",
  "key21": "3BziL8FCwYtGsp5sbj5LEgduKCshb47h7BhxDkLCDzvwhBCmJQAQMYA3X3Tmbzjhr2CT3p6jFGrmbRBw6JtwxgMc",
  "key22": "42UxHdxaoGR1JGbRE6WuxWgUVGHTgYzmggsuifz9BX3fJajG2oY99rgeV2JcE816QES62gbEkRaNtKygxssV8WQy",
  "key23": "2dYm3srjau4xtVtbK5ZhVcRN3wcHi3LANE1srcppJniXLkhvicR8d5LmkjGbcdYeZoWpqh8AQprVWiaPYgq7HwGo",
  "key24": "XC7igCHW3kmJnDqC8YofLcwxaQHCzBpitehcgkrf8Vy23NJWw9GazroH19EA9da4vVG43w1vYKm9bUmDzGuKFUs",
  "key25": "5GYoey4WtRXYYyH58A2SjRAyuaKgQoNAghUcfVEMdxLibTrRtA5sbrFoCE1cMJKqEX1yCaftkCJRsuWxdkQoC1RJ",
  "key26": "fYGtkXX2YENFW4ZMnach5omirT5V2PaPX4UEeLaujRLKN8gj8BgxgLbzLazgRmZputMggUc3iXmHTza4Bv9wLLb",
  "key27": "26WN46jo8CyqVoLdDoZEZC6uaQoJKn14RsiJEBzN3i6dmDoghroZocrTK1TBhUSmZKg8K3g97arHqwKja4px3BGA",
  "key28": "5iHgYMZ5kdFdxRWFJStr69Cg74kFdVLf9EWKUoxQbaSVF3Shwevr7Em5mmV5jU9gstwAogpRL9T4guzFLA9DG4wg",
  "key29": "Weq8xHsxhCZDWwNLjGnauq1ykFcarF48LWoE9P6zpuok9q4bywzUp4hd2UbY7YHhUkDe7r1Y5p8a5o8bRNRbmvS",
  "key30": "3HKEoafGWXyUU8sB5vqTUXfMtuGQf4mjSm6N69AcA2S3ECKsCBfCX6Wif6gFHUueLTBMf3qAs39DSxB5tKvU95Ry",
  "key31": "5n9cigzLedK5GgneQjcXo83zhEiz3HKuvNaWuoHeiZB6f11vRUKQGdPUukaxjbzhrAXLnmLAMbzk9XsmmYtQfMK3",
  "key32": "3LCVFcaGc3eYojFHq3fFRid97roVt3UfUdWxfV2CZPnX8Mosya8bGUcLsY6ns3PouK1EwAUZLSzMQbTCtqmMEHgk",
  "key33": "2r6RQ6oGRYsHz3c8DivAZJunvRBusQRLNuiXJSAdV9hiK8ScJr1Dm28KC1MM7fwHDAWdgt7ysLKCHYHNgc85z3XB",
  "key34": "4B6QKx8cgaRb37pUfpedEUDLv6reezgkxPzNq5C3nB59Css1kLDjt1JNkBQGdc2fh3bAHTgBWNYo64GDompwEq8r",
  "key35": "5fpeeQggQd4eXDmab6zMaqUZ4X4WeN5Td77u4bPFCFcBMNmmMxEUQzghvVzeyHpavTA2APRBk3TpGbfy7LN6c4pd",
  "key36": "3fgzP7cL4WXQzDseYZ2LUFEG3wBNKac7YrVohRSjc4xazzv8cc8KSJQFnr7wKhX5tVAZuRymdszs4rLNd7cU5eL4",
  "key37": "26CZF4nxuPpVtPBUWfDR5chfhYar7EwMUTsiPYLUWTZE5t1hvBD9AYhVzeaHkEyYzY53RFf5wBTmfkCgzApbeZVd",
  "key38": "5veKXfSbHRg3J8V1DDhnBXND7CVWFU3qBCLF3eWTLgdownLZ4rtsQmSuCWCRZHYshBaN124A5r8xHwNWUSLTRp7q",
  "key39": "63Zge9hG7Ny6tx4fAauRhbDiGaewDhwNQi2k5pQuH1E4rSDrka9mJ6hQCmK7pVwgGzsNsFSRk93a37aNuY2St7Us",
  "key40": "2afCUqogicCRfrCFAGBmL374RbNH39xCM3bm5zxLLpTEwX66tCivgBLwZF5B9AvgGViqHycfk5sjDUod6cisFw7a",
  "key41": "ERqNpegBnQeyiBKU5JEyMcUQGFjMSfnqiQS3X54cWEfrmrAcbuHejparKgMkkd7brpMJrodJQkLS3hBa827PKkF",
  "key42": "5p35WeVEvQEpAsT5sBpnadd3SfAc1yht8zvJsU1m5tMPAUEvcLqPLPvrAwM5EHEngFNv2hKkWfAzyU5eBAnjG46o"
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
