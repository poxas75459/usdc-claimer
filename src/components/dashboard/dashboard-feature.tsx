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
    "5euK8ibtgk1jFDtqsvDq3oYpw6DY3unW2HtrnEArp3GW2QspSjggMpJpgoeUwSK92MzhWdH4dfra866WPwF9rYfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5hmejri5SZjDnVsnuv2hMWirm25Aq31bCjpHgkcFNrnPyZx8hw2d2i6cWdCLJLqJ6Z5gkiZyDKyGs2usC7K2DG",
  "key1": "5gishnbM9mrDKMtSeaDjWcjKeRMYSq93WRqugG5ZUdZKo26KiPhHWRBWerpQBui2jXCbb86LhCvY8dMwB521pPsL",
  "key2": "5upLCVPJofQnyrBPCRg8v29edUtjDu21atsVWhhGskUsTZRp948WredzCjSDtisGLTTxXCQe9quFpxSvgPE32ySd",
  "key3": "3w2F6WBaR9KHDNypTK5kV4SuDFRJuSKBV1KojzGYoLx7PjsWvKKXZB5xNJYUQ9et7akD2XbWmLK6ViQT3Kz2hi1i",
  "key4": "5RmmQPcDy5e3LP8yBgGHpWFujJrsz3bP9SLXZwE5y91ZRJx2Mef3YA8DxEeiFFeXRetig2X1dW71UAzVLqop4Cx4",
  "key5": "5UMfCMHM3iBmpaJd8WShZK5VnHnHbmKGXoFQ43XoFLdRyA3wP7pgwBhE7XPiiDR19fgrmhUFbD9R1BWQSKH66quY",
  "key6": "4JsUApuLLRXEzfUF3Zzhcdwh7HVLsdwdiMuTiydK5knjujWmgLvYwsU8UoKvU4UyPnbah5h1Gr6TsMa6tSxgTa9d",
  "key7": "4C2ydvsWCGc1KAaKSaKrwTywsXPaiGG4TjgickEtjtCMPSiEEoQUAdMAMrFe9ak5Uk7Qu63wozJHQRr7tXiLW873",
  "key8": "aRYWJeUxg4ZgPDdLvivXcWDQM9f2dZRncdjiAkGkZehE7XHzq8W1BgwHBQdBpaNvPeYB1NScCqu1joCePnGKcPq",
  "key9": "2JxuEmGrysbiJK5eqCCX74zB9SbZifnMv14euAeRZJTN1d7DG3Ec7btNx1PWjtmDxLhFysiKAG4TaGEsbVxV1D9R",
  "key10": "47Gvssu8KsMwc8zabeZssJDQBZg8i6wzzVVZCiDUGBtTaqJJiquM4FhwpJbFNgBDe49iaBSYMkn8Sz1qTKrFs3Mm",
  "key11": "Uu6VQXQ4ssjcTRRSUjZfgSi6uyVhoLksZAEKDWNnmTkPNn78XJHCyUJL7BYCJ8wX2N8o1VVhn2y1evzni1FLizF",
  "key12": "2dz3EpFrQShs5hFsfUGz8exhNMXsHUDhroZA5jWgKFipuhAiVkBg3ubbBhfBjgJgJT89D2Pjc6pHS11iBREJ81fL",
  "key13": "52MVLAWbJ1eeASR9Eyqp83FPha1tVXPGpMwjc51mJV2qTJk3V6a3mjFc63eSJ47fru7SsD3bGzmt4mNkMGN285M6",
  "key14": "2JWLuYk1iKPaJ28eb8e2zqJ9ouCUFNRr245iZXNjNRPVivjMNks7E6jMDDtiukqDzbbJfAeChso9wYUh9bPjfFBX",
  "key15": "3PvWKNtxrHHYNvPw4pECHioWsmqTRs5MbzczvksaBWgbauuXMnwkZ5P8ZN9LNGrrz2m1LprMV3tn8ucKxekucHHk",
  "key16": "56FCVpzCWBVVwJ1iW4jXohPz2bqujcszPFuqMBMn5xL3N5w9MFBKXg4ob4Aw2tPCKSCya6uv2JmfUFw1wojFgb8h",
  "key17": "4vrHC219gQWWoqCLyWJ957qpjcpJ6UVe4SMeccCJncNUBicGpJs9fJBHJUZDic8neiYxxAuk3ki93h7vNxhCHAko",
  "key18": "3cpyEDxzWZSKAsKLtsPWweRQW1VRJUQAXse2yUhu8CeC1XYL4DcopyBNEwkKHfs2syhHsPM1MwS6YyR7m1EP2S5c",
  "key19": "36HdJxoMEnQE6SFE5zGuQvbZ5RfamjVgEinBJAP1LkSDuyK9x1uuE7cn6um9nN31BZS1e65j4DEj7vXB1Sv5c9rT",
  "key20": "2HjnVeKTknX3Vk2dtQ6XPMtS4Ej5YYBbEXjBppXJtDwk83KEARm8pLEFek3euwySrQWuWJMbU8bSLkTJDZvrX1U",
  "key21": "5scoTAp3aDbnLcZe727jFvTdV7d7V7hpVSDFmJgSjJMViLNCuJcF7TK2G6yKxbN4SUoPafLYL5ktSBi3wa3YLT6v",
  "key22": "5gq92R6P85zib1MCQbAzXxigSUWWNh2jDbsGrDhW3Qca51h1eHeFhfLje1GY55vmjyh1iJAJfrB9DgoyoSR8DBMa",
  "key23": "2kqmUzwFPsgFFsNMv4q2jpNgS8j48oc7jMXJcr6iEMHysjLhwXs8afyJZhrmvuPk6CCot2ihgW7gmvr8TefEJ4oe",
  "key24": "abLPahbSCqxHATwRNcwoZ7YHXJaAheTfiqXMfGpoR6VtvyuNP4jxb38FHm1FX4rR3FsKqeGw7U7QoMr6iRNGH2V",
  "key25": "29nSSFDxMVRyprN4nmfp6AAjsj9Skv3385Mru8ccZN8mvpH8Zyg5ebySjWssU7FtFgxVxMwoJyt6kB9Lrf2hhQUe",
  "key26": "2GVMB2mLBATGRpBQJ8z3vH1eKUrv313BQ6GDkEjhfp49puYcQhfArfGDHQ89PwYYgV5MvCosnBw5PJf1QLK2dbLq",
  "key27": "3njNVEquTtPdS5fFhx4JEaSaSuzmD5QmFwgfLMtQjNrfG4NgxT5v3ZA2PpiFRE7vSfREYwYhc9FUGycBf2MwKngr",
  "key28": "4qaKKdxtoY1niF6Bo5tiCmfZZ9hFpk8BxMJUEbtiqwTNfJuV8gbciSazREy6Bb31RjZ6zwJX44Kmq4c21G5XEAtD"
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
