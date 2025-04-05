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
    "34HjmeAj18tuHvnAdUV8Hpt9aXgrshVZjKE9ePvvhn37ZE5QPMySXba9CGMRumrXEaFrf3PxTtQk7wPBtgFizX5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHtUbTMNmryq8BabXXziAzrfRjJASx5th4ex1us15Fz11VPTTTaC8yheXq5R7zzMDWR1kVPnJRkHCwibAFfo3XS",
  "key1": "4N9tSpXWpN8FEKfNStgHUZ4wv1tpHoKZzvePDanGj8M14hB9GNezqHxLvu6ZHLYSwMHUeRVtjo7m58Qg1GYcUCCu",
  "key2": "567to4fAsWbnDwmWFs56Pu4FewmTZYKNfiWjpBKqZzQLhkQRWtq4F4UA4CVcHVfVf7YRMYvMxSw1tpv22s3qJn3V",
  "key3": "1zP64XhqNAhrzdhJibnuHfbc9fHt4bTBdAR326nCLuW5DhBanvsgM6aTV2zUccbiBfHygWCE2Kw4QbsghmyFgaq",
  "key4": "3armzhvFEvJZxMimAjPYuY311EVn8AMtFJF9M9Ayb8uvk9bVzdC13eWD5jGKxhiv9WsKAV69GJLBo9dLneKcBh7g",
  "key5": "2joj1n4igEbiVLnK5DtjfA9HgmpUYvZU1GXgNsgYcCbNJ42U6zd7DuBiRux9hBWbth2RZNYfmma2cBydtrNxYHwU",
  "key6": "4pvU7EshtmWfW7yUrFKibUui4LsCbPRYV6GnxRJsn7pWnQHNa8gpyPVqqStzCrZabdszKxnRmbz9q4bmPLs3KH6R",
  "key7": "4K5j96zpRAST3yUkC5Yr6WhKNVafSYWvYRUSvcAjurGpPiDctFFwtF757a1TJY6uB2KGRAk3JdHtZXNC8EPiDwfH",
  "key8": "2KZtoryLQjEmGmZBY76D6V5tYBwSSYoZusPjkKvfafhqkwrVKtyTMifZy2QYDxx2Au7ncxNcLiXLPAcP4Gz8uLq4",
  "key9": "2kaqCmjKwQjceGVnGnfdpNotoSkkjfNsYYZsuheKcL6w6v8Q5HfiBAZ6wCHXZ8JFVnvfsFkg76LCxopB8ibHUf3f",
  "key10": "3Bmk91CvsX2qjJDrbTbpr7xDWU57QY6iaMFFgdwkBjidSghC97d3dFpbXpPd93mDHhYrgc5xtC2RvTPoheZhoVbt",
  "key11": "3aDY6fhvZqab26VLfjnr1XSVQvpcFAyMVQrzLYCvmy21DoCwixiyNrmxF535TgNgB25h1yYoirorn9pWBnCzKWXq",
  "key12": "3yQnzXjZFUnbpLA7dbjKTx43g3joQ7wJ4wRKNTHkED2P23TsoR3T3q3oFKg2ksditTSsRuyT7yyd3pRPxbGb6Mci",
  "key13": "2RCBbfuXtrTRXtkb3crPXkcM6y1zGm4utwsomqY6zti6whow5QhNa2qEedD4wGbSzaZeJb51t5ApDm1jWRTHmG3o",
  "key14": "2jHySv7J7TSRFMcezcUWYw22Mc9iqxymWzdDPeKqBZwXg3eN1oYRd4C4p8qhDQVhGV9pPrbYUyzuvM2DyAH17w3m",
  "key15": "4i1zU8fVJLHeK2as6t3rvBtvSpysg4QaezC3YaRJaunnnUtSe2hhiRh53ZSr396gGE5ddD9w1muSLKrN8aX6x5FK",
  "key16": "3eWSkxUjAYdqdpR276RksPMwYPULkxqja9jro1Aob3Zygyfv2qBgshEXYaARaJwtRoewDu2YRttieSTxGsSuTNW",
  "key17": "5v4K3Xfx6nTrtXzz5thdFotomz6pK1fJ5623MFPfUx6cqGbxpivvNizW6QwWdj2vXm8X4WKLTBstB5ziD7D4Jfgb",
  "key18": "53VFqfNu6vsGP6JpNk1S1zJTvwL7h9P14VEwJeSfj3T9rfvMcE4w3pqqH684wPgbk3cUQpqQUmkVo3R5tDV9KVCJ",
  "key19": "4b23zVit1FRzayZYmv6BFAUY4v16bziDUvPRToDdAdAxw3xsTy24mtpyAqCXPavg3RamJ3MHbnt4FaR2uoWj714X",
  "key20": "64Ppg7MjaWD1gzsospdYo53Wa8UmkbZkemVoWVtzqDGqtVjKD55pixtwxFaeU5nHywim4sK7GnmhQPn8BCz9tZKy",
  "key21": "3Q8gxyzaVoDpqCC2zkgGb9gyXsB4U38se9YhQLMd8YJe476GEzzaqSGmTGY73j3avvgNDnLJbDLr4q8DSXvykYTw",
  "key22": "32X5bBXTYVdHeg2vwCizBjzpCmgb45xMNEZDvWq5dasGCwpPum1nuKXCkUt4cTMQx39GkY5GkeD4HtANLKeaACDQ",
  "key23": "YThV8Biiaizui6RCUUcNqvQPYXRQhRGcqu6DQrqbuvgkLqc1diaiPpkHatbziaT1RhEwq4bFh7jEoJDNPUDvwDj",
  "key24": "5NNvaGFSzQnvqJWEyVHMTy1W9kZUXLH8aYB1EdhvPZYA2o4MARxdapMShVFGetKrcPgfUfxFDmz8n794iAieo3ZR",
  "key25": "5aG8NExkvCv7Z1mA71hEag54oF9ATrMPP2nbTJYM6Xjea2hcGqNNLJnbssJkc2vtB12qFVahCWqWE8HroLgTh1xn",
  "key26": "3kP1dQwm6NCLe9eTAC7Te5s9ntfgimAx4Dgqts5Ryqh6DzuoHPkHxfJA4jHEqCo3v8o6sThhfqoiK36CmTiN8TDw",
  "key27": "4iNLSGMH9oLvaTWVm5TGQWF5izpXMzkJ5XTEAGDGL9pgCxycb4BLEBQvW62a7Fh6Mkg1KMuvtnUEZrDd7cuPwnE9"
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
