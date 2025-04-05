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
    "3UTf8rqQsD2YXCfUu6k9nmbELupA26mKPiTXH6xjT5cPfDT8mX6m9H7zDbDEeyMuNVoTscCNN8fUWCcbiPR1tWmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VT1afxtPaneQPi1DNz7N51KkQomL5BCmyufX6CfKPXMLvxcGC7yKJaNc7orxSf5CEDoq4oePC8bUck7pXquEXDe",
  "key1": "49JvHmAUwtGWkX2Z4m5AjnSFvvMTVLMpPfvTBMzUse5ZNUSMNXa9vMeLka34dJvQTn42bYDQnwNDNRszzKwiB9sH",
  "key2": "3gwE623nTfiXJBjVXzNTRjc4sJUuMGZzjBaB3WVGHVXqNvtZju2EEsqtqMrcbgvkbhGq2bYmLwXTeJLMsxKvVf89",
  "key3": "2e2pKN1U8fZF8RmzFjS8xkrNCgvtRY69c5XTEgdCpzpmf61VuCEEvaLyrAT4WtkzqNiQbGFmmPwbXQTmNVGzbqSm",
  "key4": "5XAnKf4J5qV4Nc29d1WM7iPqdK9h9M81RpFwdM8jD9gT6QAeuUuWZPg6QATg8YK6BGzqE9zkanoKvF9C2TqPzHck",
  "key5": "5JLwAYB5Gm19oDu13UvJdzHg1ASc5ATFfWu2yUiM5eGWRN6nWDXaafUZHz8U16c5XtRiBjggMDXehRv7K7vjf55B",
  "key6": "4Ebq5zeo5QWAZAHeNCmsJtSRTLjWRD4rgySHtPdp9tK6CTgt1auH4rTBB4kPLDkCobN9V4Z1XpCagRazvBDkabBJ",
  "key7": "2Pk9KWYaW2fFrWdyfdbUSjqur5XujZa1yzWTHBY9ycbyp6U9TgGTxYJH23TnnKW6CMicnrDficJKn4fZuqYoj5pr",
  "key8": "126vDUgeyfhz1XnbnvnqEtaH5DjZZWE2WswPrWRGh35fApPM2JotpJhKc3jLc224i6kX6MFurfi17yv1ttHP1ZoQ",
  "key9": "3NKaMoAnsBjUnGm2YBPL95bm7bbHTE7otsb8QdYxheAcsTxgrQnQ6jdJLsEsHMyU5DE7z9xhBATNfxBbsKXyFwGA",
  "key10": "3XBZyo46Gsd7Up2Mo38j1u2YgvcT1AjtVrnFDwmfPjd6PLpxuzMJDnMv3Xj5y6KRcxRJ7fjdAumWsLTEF7VRe9t",
  "key11": "5Jen4EEZbaJTRy63fdLEakte6TEVEqHauPFq5n4KEwJ2Pnj5ZNHUo22CGJwfofmKCk22SgDHki1bVEHfjUQzWZXe",
  "key12": "4UXhH44FSh2fZMWf6w48TJTYWWBAefKifugoJrSvNgZUShm68gPGFAAgWmqqTUGsJTuSjL8Z6yvKVN4eMbcYAH8L",
  "key13": "6KrQRNhb1anEpkULRo52LS3YNvGE1MLBE4H3PYDdrAqdAcSty4pWD5JLoxHbNGRAh7qivZLru5jbWMbgNyUrmE9",
  "key14": "4BKgyhEFADLpVFQpcvAnEb5fqFQjbTHhwh2T5TaYXmRNMyrhnQLfYsJaQFnftzPYGa8KF13mC1Vy2uEaszu76FLp",
  "key15": "4ruFNq7FmRmhn1dFA4bkD6TGiSSSBZ3kgJLdGUvXQgKSYAfMXV27nNCCkqC5sKeX2icHWCuWhpaSHuJS52QGYEDa",
  "key16": "2Pw4vG55piA9SgxSZ1mdgPNXZhjzJKCRNbSaB7EGcGUkwEDr4MUafafAfT69D42enJtUZcxdf6x9yt2RtVhv1k1u",
  "key17": "5RVpZLWaRd5qnRTJUw8ykJDoCDEx47fRMZqFiLzjTWoiCvxGnsTNLq5mb5VciBTAqrTkCpnfnqJ5UX9ZxLqmbc5A",
  "key18": "3CQctQmTfPtQb3ZS4vhsXXSQEeyx4TH26drNFeyob6Xd36bWDtZyWqE88ausCSnF8KvvMas5QsbMRVEAhSTkTDMG",
  "key19": "2EEuFWYNCYRLaZa1W3poVaoWUfcmLYT2aYF8XHUv6EUpMzdExniZzp5MS7RspYYHezBMG2yWvhPGQvWz7so5pnFy",
  "key20": "65xZHyVtSwMek37cScmeQBdEdgCvbwv6gcr4YUjqCQvfWg35xF8dKEScyMt4spThaCL91nUZYDLkSkLEr72vhnX5",
  "key21": "5VAc1FQh3y1z7d7kzGVgtpUWkEnNePBdQ7K8eb2YDeKePdjnCcAffDVDjAGGQkkXnmAWSvrPXDiNpcTnEopwD2XR",
  "key22": "38Jc2FtFyXNyAHHjD4XwD4HAXqNa6PjkDPYsmsWXhBNRf5ZAbKe9oCQfi4p3DVpDSnpnqFfs78QTx4YYX2q9vcJD",
  "key23": "bEUisRwap9Ga7J1xuU98kRKRxBx6tvzgmws8ugT96yKpHxoyWQbKJsHnh3GT2xYLLfsaQKpWgp1Eumk8RMqQWAW",
  "key24": "2QFxuxhsRZWo3i7Zppm2EwmSpy3mmJnHU8291piTGXb7Ra2EN7rR2G26RDpCsx5qEXeELDbeaE4KWeXC5Ub2f81J",
  "key25": "3nfvAQwY2eGMwmeqKoFujZk2roRQynxBtsEZgbdVZSYgoVMiNKJpjrqiiLnQFGDzZB8D4qYVeJauE6y4E6Di7zRd",
  "key26": "46FQyyV4ezPDdeLkKxdCfyL4tcjmwzqPJRoba8oaGPJag7bjG2NB92ym6sQMcLX4RkLfvbJ6yS21f6bwZmkqm6gd",
  "key27": "4McKa6qrJ84HtgfCygdiiwqx4wboberAuWZ6nmowBKnZEz8onqhYpbHCewjRq7Q4Web3xCXnS9PJ8tgD9pNtCCwo",
  "key28": "5usYrB9BhtUZGubJT6Ph556CW3s1DT4ibCggxnGteHweNKXwzxNHoWXGuujMpLWUijgFcDusRCVTtf6P7agjqWBp",
  "key29": "4RWHwTD4c4ELeXNJhktgA6uT46LTeGN7sEKZEczUjWjkwYVvNggk7Gs2uCyv2wsDpUona7Rwf3zCjQsXV8ZmS7Nk",
  "key30": "4NcK5NfiQYff9AtmrsbVLtCUC4YhYQbdPmEYVgUokSe6ScuJnTGGfoar1bCAFNKY2qZy85NLXFqCNzLTziDxrwPH",
  "key31": "4zRzT1DQFWEJSCXSjma9FMxohfrHLCacSTz3jkYgmvyCrLBjdfptrkh5HL5BoZgdoNeM9wrXGkVf3toByTHopTYm",
  "key32": "4ZruUPZMP4mTuPtCt4j6CTnz4ZJNKUDLbvDdXmGf5JH2GDiEcCLhPhaCf6f5ZFp4yHVVK77aweo1FxdHUMVuvFkV",
  "key33": "3r6NLgh2ak2YHgWZqEEdMaCDzbtiqsCYgFTK5DiFfje5KFdi85GwUvhkNb6XwZByPVB6XbAQ4W1nbcXPvrLB1Xw1",
  "key34": "2AQtVPSytHq148yNQPJyLVFcqTYTbsUSj5dbyvJ8d3S3KGRL6fn6v8xydooXGMVKD5YTvLjTwsEee3fka8UmQEdt",
  "key35": "G9fXR4aFVdgormFzGpFe3wahLUQ8McHgb43k4Z34s6tJaL7FqHxL83wLpwpR1GuwV7i9QUoGjqmEYKtHKseCMGF"
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
