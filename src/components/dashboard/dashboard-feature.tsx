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
    "2epGM4jnmYDZRosZpsZrGG6CM2bojxHVYS9ACHJdf2xHyyjhCSyv1UnZKqE5wvV9bm6kb2fy8hWyohwPCpaRnA12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gjq6sJjo48fuRMgVQAH4Mw4CviudUCZHUV5H9PjuJKE4UAtyWaixFnqtSsFipgXEHJ2vFJuT7Y4BaFpJWcWQdgm",
  "key1": "5Uw4yYhWcpZvdz4tfBntgaGJoW9Xygh9V7Qh1Pw1JiHwprV3Z42BD3vwDgKMFe9mkkX6uGEbgKfsxqGyLUx7Ws3V",
  "key2": "5pipTwrqtDYEDi9FH2gkWsXXdzWc6WDwA76JLLtasoUpQzLhVbCenJseedbZ4Znk2dtFUtSAFsTaLmAACmneUriu",
  "key3": "5yJ1YSPhz2SVGm7jqcCTVV7DoprdTKNAqWNPvbgoeaJgCx2FFFdij8kYFyAsycEzNbSq7a6c5LQFU3r6usqTcbhu",
  "key4": "2YixAYGSGQZA9nwduczZUH9HMfBczC47Xr7P2o1ffKrh4djik2KSMS1orooDDCf5YHWgCARtYu8CqkdSx8wnp3hy",
  "key5": "66wn3S5HZeDdQdbnPiVgHNcWiKAgG6YSW8jU26JZ5nVZKrkm8Nj7iGqtWx8nQEqLSg2hohDkMg5LTZ9rAnAUARoQ",
  "key6": "4Hfq83HnfVFCvGqa6W1Y9bTSRej3XhAabqUtVAoHYfFbtkwEiukoYtPDt1wpTB2XtipqpFtKmsnxbPG43hvFfPec",
  "key7": "4RwAcRZZJH2KSWsRT4C3RUfG9ELKdT2ooLCpM8ob85kKzGEZCczoc5CW1kCHvpK2doFF35qcQebbxsuCXfDxpenz",
  "key8": "CoRMhmGqewqq8EXTvP9dvUG5PFzEvfEhUQPBp79GLvGWQn3CCXDSH7u2WdqEi1tqMfkP4Z9LCSM2RwEKyxoCLm2",
  "key9": "57aYFWjZz7hWBAk7tuWtbVnX9mhpc3LECPKAc4hgVqTbZiNqfwp8HkgMP3JhwtNCe5BbGKnmR49kUpNfwf4iAcQt",
  "key10": "78d5GyrTUG2jK9UboQBjYs1pbLCixJAs3WPL1eRMm1cCVvyxkqHPq7t7baE5c6xSkqba36pedLKo99oTqFGoSeA",
  "key11": "47Tt7TkEuubyWMGT3r7T76BU378grG2hUtJjDb2nvejNqJsmiwcvviGdAxGMBPfWi1ZLfwcy7viw4DZASRQwoNem",
  "key12": "5Ms9KJiDGnRhWmh8NwtthLJWQETv6e7bZRp7togFvAh17ngbxThs9fDdHLmqGTaGStPrhzcXCLBDip3LuK2idhUj",
  "key13": "2QLEYHLn99HfxLM96zwju3gTarZkJH4c8ww9SgnqTBh2LoAjnDaYjRCL9bbNDZuCnCKCKcYyYrib4zYrzoi2se1Z",
  "key14": "29cP32wSxfV6rYTR1ReQG68nufSAhnDA5Gw6addnjRUiWtCKJR3RgYehX8TzV5ob2t1uwzQjW2xwxMz1zXMsG1vo",
  "key15": "3UKpLfioM9aDUTVgp7F5fBhwXYsASZGJdzH5UyhesZJsANSinCfUBQhUrSb3QNRUzfB8aSVvXUDjZKaimFMHjYhM",
  "key16": "29iQHus49mqppBtEYMs9awHsqRFcwDXnbVYSoubAzLWagB5fbgv1zQxZv8817mvtWnVmZiyxKeCWNvhixr3Cm1g1",
  "key17": "5NfHBRs8NCTCv5F8u6nUjN4fv759egXvm7gPo4FccVYvoGq4NngG93JdcjG9iWHFcpDFFYtrGNH1m7ENRwvpMqbz",
  "key18": "5ivJW6vm5P8kGmafTbQ9NaztuMzq9FvHtMs3r5rybNjrxwC8LQuKF6r9u5GurvNuoWGLWv2FXJSskuzPDDHJ88pJ",
  "key19": "Q3TQhrXaZfdvVKuDutPvj6f5BTNX2oCuNGjw9qhG3Y9Ykv2L9FJ2EagDJBqCZSMLD9RAhCLVoBfVGtSpCkwsE5C",
  "key20": "4pkuRCYUemyi9TgsQLnNGvSmR3W2zjym6yjxZb5rUhKdzyBVXKNPvtDfKL6qchwV6Ymm4NYssJUoGnBinZcKaVc5",
  "key21": "4d7NViSUL5P5H4R4hS3sAugzzXwnyEdzkHJsxqetFucARRMmeYoTGP56CUxxdfxbjJboA1Ga1LSF3AAKEAtRhh5",
  "key22": "54roY24gbUn4WfK2bsJiCtVfFPYukuFT78oHeW5mm1qTsrqD3rEHGvUUsaWAKSiSDA5Zg6JjVyfejWewpw5jGgjX",
  "key23": "3HRkkyy47BSjaYR6cnVbWMhGXaEbV8mNdGwC7FbKFYQiSFuvHwXbHwdwYY5F4EbPx6u4sx69WYNBGxBQxyjitYzK",
  "key24": "5ZoquK4Kk3MTsZYkY9FUPtNjq3uCs8vnWRAQ8efc2P1dbdjmNFqFXBvJzcCpS6hZcTfi8P7giM1bvGUngt2VXH3D",
  "key25": "4vD6YgQFu4iQkHvcWTbPgv3sMRT3RMpqFmWY1zKuD2G7GtDv4kyFJSkqJ5KgRhCaeZSrACPwhJeT9HSnBgE5h61Y",
  "key26": "5J4yyn7VrHASxtnSDiYs69pbW2qJ5pDZZhvQgYuUwNSZ4AhuRfh6BHbaJ911P2BJa9evVXubtGMtzf4PiodDYrnh",
  "key27": "3k9UJc2tzhHnhTgHgo6mjZpWiLrXLGkQYDbwopj3RxFU9Ak5rx96tGAve44f2CAXc8g2qPxeJYXuR5YZs78SNYMY",
  "key28": "3qELK6ivrsbZr3pPaTJKyVB9sPiLq7ktop9C4z4EiZYGwkW1AD2kzne2JhHGzrcW2o3RYEbVCnUwj2rfVZjfQVsU",
  "key29": "4aiGTUoHtnhMDZRKma55YJ8sVEdDz6pc3TtMafC64A4sgdy3kQywcM2omZKcUspSH9cCag3f651VyUp7qWbJRnRS",
  "key30": "3swMWn4RCBgayhnzTaneu4f9Q4cDkA2ghR2hQDEHvH8ABeMsBP4hZvXpDEMHnnAjKdULvsQnWjqyJmUnpe1oJEzz",
  "key31": "2cdojsP6z9KUTpmaRoPea3GUaLAT1pz9kuYaUUfiSWrcteLZaT38SEco1SSHiToaacncyc3z9gFaYV8LeLguzfGU"
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
