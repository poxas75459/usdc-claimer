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
    "2zWCnDqkkKJiWFbvhyehX3pgtET4fAcirP2eStb4xYojfdfkmxKhjkFSWaR8ZZHG1JvmE57mpUHGtwXFmPZnda2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzJb4w6btTZzXeeMtznL6fpjWDHzQVoDN3sfGUykrBb7mjyKUEx8F2K8ojsCWmxiRe5pWSooYsskSHz8eaA19HL",
  "key1": "SvudoT2oWVTv39XSBRumLKovB9FgCfEc1dsMW2LAki19d2JWvUTXh9EzDwtBD9DEpt5QS9Z7NWnZpntB3hVvTCp",
  "key2": "3LbLcaM3Pcu39sKDYt6dUEDc7YSccBitsGHspRmspgYpYSENuXa367VAvWVB5SUEMW8Z1k13bb65SVXyQCwX4sRo",
  "key3": "4Tm9Z71fgynA3E3Vr9PZHnXB1eqefV4b2BJ5VkgC8o37i8NoJKActQTLgsdPG5Thy5AnLsY91xod8cKZ6AoqPnXP",
  "key4": "5PfyZqFPzx1NA1pnKN5JYoQXRuFhBjKaVM5e3ysMardJpnacbHokqnQN9nqgKa7NjdtnZp1C1pKVwYBceb3NWS7H",
  "key5": "4SrzmtVXGmYfyqnN3LVFbM9dQs1brBUoUiWc9PGsmuWVbYj8Q815R7LYaZEHGZjYTWf4cGxyWJkArjaxmV2bh5N3",
  "key6": "4z2gqjZYgUc3S61sFHVYmSn1GJ9PwuDvqaCuvYhynGNTdWLCcKHeXE2mzUXTjXRJ2ErvMwAjJiai1rVqoiSJ8fYJ",
  "key7": "2a6dzEMitNUNHE2iu8i92b6s2eL2JA8G424YQrST9h2kcL4bKxnbk3avN3NM9zQqtoS8A74QvCnGefxPsP9eoNcL",
  "key8": "5MEG1Sy8hrkNNYiQyqJVF8PxciP2bAJ7MFR344zp3p9MtfqRTZUKK4WKPg3UAMCNtGF28Y6JE7yhHRZkQySrTswR",
  "key9": "5vjC7r8aYZ31Ne4dhpiWbXFL5G5LKmd3VrHLoCJutCsAAW24ueVam9Gc5TQvFacSdwbEQ4dFE2m84TbtGepFAnoM",
  "key10": "Tig2DPiQBPaWu7uQwd9VVT6s5rRYQY497upeb9gsdLAHRHRud7At1cKbuKwhh5QiLUs6RCfLoXT3eWdxVroSGsu",
  "key11": "5XeHHtYXnWgs3wbTTG9CEKAod24nL4TqDwJ9qRMvuHWgkuUEJGokMmxGKPyPCfCFhFghRJg3fjQa1GsTeYQJ2LGM",
  "key12": "65Lwk6TnG2uSaLcsqNkajiJgsdkU2U8Mh6AvZPitR32JKZFNnR85nTWL7MoXSmdwp8AjZxJLvpaQws1Gd3b8TreX",
  "key13": "2DngQ7n1Hcv46UwGrywcDyjo2BLE7aDcDFn6TyDJ8mE77ybJtr9MZwQ9U3Y5tgkxFrr4sFLfBLy4XpzZ1Sx9DWkW",
  "key14": "TvpxW5JErLCseeLDUPrPMy4vCEAeHYXp1J5URC76pUG3bsFaJX8r1K5L8ZW3rDLi9ZQPYcn8RFm8sQPKp9bNBJE",
  "key15": "4XW8oXrc3pDDJW4WWFfiFWHY8ddcPKZxyfvGhMjfQLkHvKLNkWi6nQUDJj4jgsAsymeYwgrpQX21cNZho4fnTsaL",
  "key16": "2P1p1zX8TozxY8ugo1UwHqrjDYiEbPfpP2gBP8jmysSt6WZUTP8yvGPUVCM14bxysE2bBnhXCv4Q5D6BKF935MXA",
  "key17": "43AhH3VJU7Vsxe1moRacQUifgtHLVGKsbdexB7GeRKWjiMCQeVa9LVMQzXhHCYBPV2Jg2XrszopKaf2cNZUGmzEF",
  "key18": "2dUmJ7SSincrC1EyeAn35c2MygPMf58ZWgDcV9FzF5sSS8Te28tTiT4UR2g4jM1a2rwzRkaGHUkCCozJVVwEJe8a",
  "key19": "2HZSZEviDxZNfBuA4f2kk9Gr1LLCSTp5c6C3W2oGocLQXLjnrVSRv9ekYTwFHpXnjUqbsRnevVmspMyNj5pTWQkx",
  "key20": "2jXdKdCh6tUvzi9u7Fq4gVgzs3QPVkufb7m4A99uH6WRdbu3MMm8rZgtF7hAhFmYSMTvVC7HFYfTUGx276nF87LU",
  "key21": "3xxQgrUm5SuZngE9otpp5Jw4QzgsbtUuYWaGLrwbZ2gv74nethfACpxMxNB4sB1VcfXEcfE9MYygfcKoSGCkcgbH",
  "key22": "3RxafcfKAuwyZV6MPNjhjJGo4YquapTQ2Exz7hDZH897YWTZuC3r6Ck7HFz8gUHwjuuKBjMBv9G1Fvoa45H8oZ2i",
  "key23": "2WyFrmZsSXYzsDXfiXpUAXaYY7TWQsXqb7pW5k1NwgUUMzUH8XkPQehUsipWWic4hYHJbYZ1WV9Pxfa4rKGQEN62",
  "key24": "44s4k8WfcA2fWAvv9yUvSwsEgNWpJ2ek7zEesezsQqodwnEApsycBWXQcFRhMyCuCfsorBL582F1eheHPqZyTFcv",
  "key25": "5XCarhUKoEBMec1Gkz9ECMGTwT5v4wMkqMriMAtnurdhVgwUq9yEZ1tffgY5JpJVmmGGpZQfRCCVG4xvcnd67p6b"
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
