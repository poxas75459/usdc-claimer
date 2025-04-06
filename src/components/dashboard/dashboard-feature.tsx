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
    "5JRmDm5wtp5ttXeXNHjNk6kxs6r1qKQhjuzy9yqKyHZamAUQ458RQrob2qQ6WPUU8TGfXL3AsktVi5Fxj4jKBms2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkDkGeY41yGUYKRq4QWBsStW2isUZXYT5S1j6AshyJeCoZwVe2xMh1PP7E6YKiTxCkd8vqbLkKWiurz1hDK5bnH",
  "key1": "34E8WRRWS6Q7bkZxqp8eqRMP2Yccwmfb2cBX7jaaGLdaLC9Nn1eFVmh9ka7w8tuf4DDZKA9pDBQ6jRm3euBopkMF",
  "key2": "2LYRZqVkp7utUpgaprT81qq9HBUFewz2MA14bHcusgEcn3phJ2m9mnEzAdEMcZKeYygLmyxKctL1QYVG19vUssCT",
  "key3": "5wmHMv6qd9m3Fsm18VbmbVVeM2RjuDi3diH3oTBSSz4xXZxtNNMKCpWw4tGGUg9snu2AJKd9H8fjZrVrPB2mcNVc",
  "key4": "46QkG8aoKg6svrrZNPNdoG9CkzbfmEf7gMetbaQtyo5AyLDQCLMTWicoDm2LKxvPeNw73nw5rajeUftfth16xm66",
  "key5": "4SYkHPxMvgS16ztZy3eNPtAcSrDErANccrYCPMyG7dPVi3VBcx7DdJrdsUhtvHSLyQGVrpX1e475enpvKRd3nzC4",
  "key6": "9YovESYdKBRDx6gbj1cytrAUkbjDq2Wou3TnXsykCjBGM6gGYBn21nDXNPvLgzz3VYoqJEjEHQxZYKJa9XgnRaq",
  "key7": "4NgqjELvYAJHXjvk48dWkTW3rwyxJk3RXWH6LpC2iCeMyJ2upk59fCytscRWhn9qJKjVQrcSBY7c11Kz39XeqY3A",
  "key8": "4fK3EPq7NUXatueKw15pNFFKctAftTNJ9CVAi4ti6c72xEXbqPEAPiCVc1WaANyBsF85XFXrkbhkWmmqdJRQDFK1",
  "key9": "2Y1eso6F1MTADQwacw2LXhFaph76utjNC9sRrkdhcoJfQafxikQc9SeMgioEEm1ksJwvUmssw8WzaWDXuhFanMM1",
  "key10": "2dnUGNgsbAJsfkt3RwSpEgsdvhfWycbheJJFTrktfQjsUv3gGEbm8GRoraGgWZUxPowyFWsPQsAPiTsSRpE2M5SX",
  "key11": "mQfRW23QVZKvPgAxW3EZwEcByJy2QPAdq7Qz4dj9hbHNhaYzMMHUw64cAkmw18YdT1Tx9Xdqi2c4UZ9GrajFqjC",
  "key12": "5rmTLZWDovv6fUspsVvLT26EeKxBfeHUBj5nDPUJE7Ph5PLkitLPCaXe7V5jWM4iUZ82DxUUaqgXVKZCYJDteQDK",
  "key13": "49DExGi4h7DUSyrnrCQpvR67k7xEej6Xjc1Zbfh4KweVfXXPt4MkCdoWQrTTvapNS8APp1FCtxvH5X1zdvTdozyt",
  "key14": "5DGpgRahLJmcFJ6XpUGbvwgPPWz5afUUNRnfzKBGMEkRpHb7GVP8XvgRGAtg6HczPJqJ3yot6hk52e3ND49pAPQc",
  "key15": "54PhaYgBDyyNd31mxSu4F276Ce3PPsfw7HdUYtzhBagRuCQ42L5P43gHzKF3ZdACb47fbRanwCxADBXDRw4f8ZTM",
  "key16": "5YCRaGqrL8jJAPsCWTCxFLyX3kb2LkcLTGES45pwqbRjov4T8ggs5fd2AbDtFDxMfEBnrHUQc2CtCVtPNEVCTJiU",
  "key17": "a8ufNA2VqhwXV2ikSCaVTLr7T3UwSo4XreGjdq7r8DTqJLHgzT7u6g6hhRuRPebF6h8bx3RXfPJmpznPB2PoQ9W",
  "key18": "3ydfLbWDRGquGhDBetNvHMtsvP12HX5ibR5hRS59vZFsrvYWKJyRoaidNrwUR9ujvefVNcbqh3wAE8pCSPfcwnzE",
  "key19": "2KmWJ3HFjcEmqcLGKPvi8UJ1ezSudxhNHfeBwXRCpr1XqvMBxGUkgsfQ5UcvhCq1kCExaeppPkejAsyTKGNGuayH",
  "key20": "bi8wRQ8G3oiA9VThFWcrEeJrxHMQE3zMtNje9wxezMqkVtnwwqHrpfn9xGGraWBK4L2sBkbotzv1MfaC1McHxyM",
  "key21": "4DLUhUUZXd6Q6LcfMkT3o32jed9j9upsT1bZp3kc4tMz39XBc1DSKcnradHE5sj6X7HBJJC1hinmTuXsH7sns8jM",
  "key22": "5iy3w4w7jLFfNYkYjTj3UXVhG8uiupcJ97A2QPGs4LSv1h8rebBhNAHuHECGDudSLdSJxJmywRpHXRs3sJ5FnEuW",
  "key23": "5oPgErE87mGtzX1zyrmEfDcUQtmZtaxkkHEsvtmYWWiK5xDnr4EX3kPydTr1d3asFtuZNzG1ChEMFadamt7UPm1u",
  "key24": "3hwqBe7hE5d9hAQYHJ2HVLFwsUrKJyXB67fzXxk81yNb7asx8Qov2uH16BfYZbubAHxCdhdM9u3uNqdWKmjK4hCc",
  "key25": "62qubzPEg92nYz1Qz6q628V82yayw874uZh4mSnYHLSjgcxBTZUwpRUNg2xJ7WJdYFW1kho4zezHw4iR1JXHKJtb",
  "key26": "2yYTcJtME1SDNoxLQSUVf1MR1PnfTeKwskPhB4ECBhAjRgCV4ZRFNBTAMUsh6sxG3TY9jHyfJEBJoSMGoizsN9Nv",
  "key27": "xnMEYawGoTSCGUKHR6uEB3rUd9CcyV53mMsD5kXvPPcdPvMtBf3NMCBYtRCDGgnLW1Quxkzob2wu7QT5RhXPPEf",
  "key28": "3xZYKcv5aj2HN2qpTnzaBej17J1NahDdJXFZa5UiP9SMunTk3heXLyBrBcDhwrppYY45iN59mpibCFzrNKoJVqQB",
  "key29": "5XpQomzkde4m8U7ozjAT1dj9gTBh7MhVJQ1vLjhKghVua83c3SUpYGMbQdPAg6Dj8PMBUtZLfymdHFQDtZ1q8Q1f",
  "key30": "3wDTpZx8x8aeDgQeQRTrxBnnq1PTZgJ78aULMVR23NThMXfcKBcszU1nSwuRNtSmLQbHtVrWWr3uXPWoQvoe9c2A"
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
