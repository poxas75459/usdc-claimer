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
    "yevHpJtmdYLyebUtGbE2opg6ziGfiNbsWp3bz52LvpKmhHgG5ns6mcUmqVg6TtZgjJ3ZG3vZzL68H1t7SroD1bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGQNz3hq1Lyt8kvkFLLHVW94oAPR4Z7vZDaUpxyQVcAhT2DoXHVgYRceeCFeLrqKhxEeX6nATkTNBiA9SgFtqii",
  "key1": "yFEdW75TBmwdqZVYPTTiUp4dnZhm8vQq7SCSUts6C4ttbNCgwHhdykqJ3WFTLD5ZSmqhjHqu8VZuvAeFDN9wNZh",
  "key2": "4iGVEUd3sCRmPvdccvpQMBBNyMFh4WDvERcvFjwAekc1EFUQjiGscTF5D9BSmXNzkgRwNZFKfXLLt138867poi3g",
  "key3": "u3hdQ2m5eBk3MWkGcT6Sh6q8SZpopP6MvmNnAo4TQGnCne2zoGWiPS7uRPWBVPkHE3ETv1Aax9tbQTqCckB8CoS",
  "key4": "3dnYmjBbv87UuXfESAVbA1T7BL5RQSG6Dwb1z7ASaRLqNe8PFSYvYwv3LZXiyjL3BL55AitmJ2LaRmSkp6sChPnF",
  "key5": "4UpTzE9pAENQigdE991QJknnWW3DY7tv4RH9SiDAxW4Z59F5C92X6bkbyCpxxwiMjQDz2ukWGm4m3xfbFh465oH",
  "key6": "44CN7N9TNZM7PqS6MSyMXkvdewa8fvAivnnZad7mxSqwELpqZ7kFsoEvtm99CtZfvogVBtBQwB6jRHvYh45wmpns",
  "key7": "4fnazk3i9oyUta5pVu96ri5YqexBdtK2DzmzXWkdZBf7rpg93VBNH2cYhijtBs97nF23jdxHLjVGCVi6NJUqD9U8",
  "key8": "5LqZc37kGaUR6SmftybGPFaCAwjGgw4BNHUrLdowBKe3BtzK5A9t523nPCotc1xQVpX6Vp6rjc4GqV8MUsiF6UAv",
  "key9": "5LsHxRHQKavjkPik1mriWo8QfeuzRfuzUTsmMxDX9CAZyY8WdVV6vuaf7FeByAxj2weaMJJfPcG3Vipb54zXNfWw",
  "key10": "3m7gdj6KjQ3n5Tb9J3SyvGRt3H5z2fFXeh7K5eRjgt9fiRUKDqc9hD5TW5VZfArdKpTMDFdKHm4Hn9QbWksjSz4x",
  "key11": "4bxD1xwPvnfrXh24qcfZaZALhogH2ZoNpo8FpKjxZ6SbgxUAcVwruF2rLDN4L38r2p9mD47tRGEth6xQuHBQCLF6",
  "key12": "4MNXasAaqZ7ypDZXmZLwXRHvmyyvb1iy9tidpJinHDVsZk6fhhcST9xU2U73HpQZTNoqBrefHdcKtrnZdNvEHFmF",
  "key13": "fvgDy4F5kGtm4XsZG3HHTtMzeoQ9ufpiiJKMN1MPjDZ5FE9Tko4k3ANaeXCkCbKzsJfXUuGdggKwts6gM84jGmD",
  "key14": "2Rb15H2LYgsJ3FNxSurmz7ngmB15KmBRHkc6UAaSFfSceVNFK5rgSVfTax7scthAvvec2a6XovVxL4dRzLCVVPAF",
  "key15": "3TY5mW9yRWGgyts4X8LhLo2ppJsE7sgZ9dxkmLzEhgW24cUm1GUAi764YvKqkqXZQENFxJEoAGWWMTkQQCgyXMSg",
  "key16": "cBYLCZ5X6un3yHRKfNiCGah3Vd74uho3UgC4yUZD5w9cQDq2djVNzsC4fzb2MqCGxL73apZeqyBBUh5VdewrqgV",
  "key17": "2iAZMfxDAopbH8ySuLr4husjo4msuPtzR63M5FX8ZPpFbPMGmT3zxQxQ2YABkVBPP5fjfanX4KUL5oMM2g2mabMX",
  "key18": "5f1aEXnNbWfkxmy4PPt1rEebdReGrDNNe5UMqGB91NUCQyLvP7pTzn4PmjZEm5z3YB7MVk89gW2Mp7bQG9YEj9w3",
  "key19": "4stuCvhwcPdoSvus7ofweY4Z8b6MEFA5FjBBqjhj75Qv8hgMSAgZEmNbcKhcfMRxENsavbktCnbrLV8CngNkTJaZ",
  "key20": "KUGx4chgPM1WzsVMSVeA62FfoLiM7a8qrvxoNvLV3Z3xZNmupPRD2fRwubZy3cju5Qq9HsqX4WvaKXMibG7VjsT",
  "key21": "FWeoTxkkt3ZaD1o7EdbQPor2MpzGskEVqdqKVZqScQmaW7XSysJVG8MEu2MUgeMz8Vws77jSkjKGcoLyHbXjV7N",
  "key22": "rTxpCSoashnK4PojiChvfFY3zcdPKUwKiH82e65H1KQYgDK5dfYjpU226KbXMNfnR7Ugb785vyzhxdSqpDQCVcX",
  "key23": "3UF4Eo9XSxRCELtkidqk2Q7zezKuzNq3njxDWLtP1g58q86zXehM5N5AyLeFo9wA7RWUqZQi62vKfMaoiJ1FXbsT",
  "key24": "47Lyv1iQHurqjDyABxB71TSi392TAP5wFzHfcaaqACxKBqJYhYe75RLerKszhmdwxEMTA3PKiABvfaYTcAyuZbvr",
  "key25": "2WUT2exSaW7c1xBXqUi2dE2F8BJWvmeCpapm2J4j3A3AwCYNKpYhhqZvf6WkJifDsChtDb2t3yXJcZbx3tpjDXWs",
  "key26": "3HTd1koZH4n9DJ8ZquvmDqfhsk7bY6E7JmGwene4SMGskjmfM6TWZfJfvwqKbX3mzwDuNLCG2BD4X3EBr4bwuq24",
  "key27": "2EBgWC3w4dTUk2DrL9tX91tEYEQ4beUvqa23i6CaCe3of7U9SzzfcoUPhvtWRud3nt9Ax1X6daFMeAuA9VBcjoUo",
  "key28": "3ZypFHbnSNFhTGmSGK1dDXD1zWrv5k45KDuDwAffzbD6J3Khz5vJkpe16MpUhEef9Y58hkzbidZ5LeddxaGkRjoH"
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
