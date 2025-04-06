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
    "3Gu5hmG3rWSbBkax7hZhoz8VwdiPXaUXQ1j8wfBXKEg2LZ23vhziZusgJXGQ7MncJQropk6i4WEYjx8jZLASCNyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KTrLNHyhEEZJkyu5tehV7hZ9tapLyj3mfitCPDVm7iEJSnuGiapunq3WEzq8xVsHApS1yCJnyKpdhsdyBTCx1Xp",
  "key1": "Ei2amcM5H46kdQ6BvGRRVPMSNPD26i1RVSQWEEe6TabtGpSSB8tZcRoQR67dn8hP4hrFCnUBp2WL8KDyDTLf8TX",
  "key2": "2tC3HqC4quaX3WmBL1NHL5VDErjHuZGcJuYHs4mrijPJhBzPCmkKkepErh7rr4rUykRm7mmTWikmgEbw5ViVhB4E",
  "key3": "2pAh1YM7ZAvLZiDzNMQvtVLVWfX35uS8Ef7hVDWrfK4goEdr7BxbrvViymArLZ5KraAnYGdw5S6K1qm3JZCm8W2r",
  "key4": "3sghPfF1xPCuCqvUJT4XzmLfp4urTTmZ5WN4LeU3WWboaS282SCiPsLBSQmxqUoeY6UXa9dy1cxJeH4omJtY5Wbk",
  "key5": "67jU94sDJzL52EgYxCygWYzkpWqw2DaKsY6ywRmawJn5iW9RX42zcC3mnSey1Z1VgcttGWPfh4MsSMSmxLoMHxLZ",
  "key6": "4BwvoZHe9mRewF5b51o9VAzDUu7grwRiyZ64RCeDA4jMcr37U2UdKsdnXvyJAqwK9YzFQWc6dB8a66EpYH7vVF6U",
  "key7": "4k1vcS1TEsf5CNVYqvhvGcP2TuV7PmfeNQf8wsZSvAZki4WTtMZKRK3HARzNsnZMgTGSJ8d462UHkajiAEpYi1sV",
  "key8": "4fS3rgLkvMxrPkEV453CgLqYDqWCpycHegAVAv5FL29J5o9fiESXBRqQ6Nz5aeQukKCY6CQRJMQS8AtCbGFQxPxG",
  "key9": "R8LurTqENMXdbnFx2nxy4VeXxJcyQGycirzs1u5fvST1PGvALWQ6djY3jpiGhPnkQuGpAFJbYFQTPhepzfVUgox",
  "key10": "4f4R3Dw6t5aSYBvhKtfK6bmudPudbLUShQFkCAJzcSB6NpLbwFeqkEd2R3qtMVuZYnqQ3aghVfoPfTUwDPyV1yJi",
  "key11": "5JhJ6k76diXJxARJGNr9vUqAXbEwmabsF938UV4AoPrBnErqgnM6GdFL41xHb5Poto2Z5wHqjrBuYa6D7YJVc53s",
  "key12": "4jMcqFtCLiXGb6gLrqhnqTRVN9cwyRDyY3ouD8Nix1EWDU4qEdV6bXi6LcdavffwDM7DfUSZidE1rw5rxZP5aRdc",
  "key13": "3wJ7eL27kAnhiBdiMCG1EzpdvHJwZEH2p55H9FkK8KQLrhbDtfJSTN2HhnhXwDEGnPCP2gN8Lgg8kHRGemcnF8Vq",
  "key14": "Ef3Y26JLH8njpT3AgQGxpFtimbpNQFyUTbfGPTU2SL4matnyhaWjUa5QXaDjpWznVzABoaAv7FWQ6KPsiLCFmsQ",
  "key15": "3MJGrYCGmWWgvJ5DyW5FNWU6QqtLdcAMvDyuTsvQ9WpSan89S1ESzmBbSCz31rTufFjRRM4Yndb2Nxrsc4jMHLrL",
  "key16": "5MYZDDER891NLb1Xk2mJw68KpC4y4xntCzCYkd8fDnGWAbqrFJvCHsErq4KDKwPGytMzdA1yWqYtnsSwFBoV9Yc2",
  "key17": "3uFWu7TGYbtNmu1uw8FpJBCbfC8VGjWS6YEQT5D1eABem4EkcQpAVxoxirMXVQwtMzGaFEwp7hbxz21W4wXGwMDK",
  "key18": "2AYMzxc22YCcFkJCNXpD97zc6ENhRdccv97wxaFF7Db7oUJ6YtPYCVRNu3LBtC3qoxoXNN2vAUjSQGZF4mwhZ1Ea",
  "key19": "3ZqHh3SwCTsLWsWqw7WmJZTMsomxjozEvu4owuyQR5qp6Qv14hJ7ZkJKkPE2oNqmko8oFsqmGweUrLrvDL15NjzU",
  "key20": "4oT6xmfcG6RUM82tkifcEDv8LdJoxcDGA2enWkjpxHuwZrs2kYDQLMHChbRrw6iMRhk6iFTbPCKMUAs6wfoP42oX",
  "key21": "2iQxYUYAGWjujzTwFFSAB75L68Zde3jiphPvidtQZVKPXCNMDYoM6E9BSrGo19PXwmRv4kA5rNosdzTAd8ttTS3S",
  "key22": "pTrguwr611VmSRXgYUVEn9TDwtbgw4t8ozfybNjvS22U1vwB9vZthdapQQmr6m6m6X3aHtwKoUEx4h3tE6sfJ5r",
  "key23": "5H3mvYxFXo7uU7bmHVSWX6KigCjcLoqhq9HQHQatP4wncJx5oT5meLjh7u3uQ6V2WLYyJYL1AoPjDewniD9st8tM",
  "key24": "4tfhkk7XhnAgAGnWCzFwwXkNE9YzzWHEm9UJTfdAcJAjbcfLPTyjjGsWCC2Fo9gjGBWGCSzqRwbrSBUfmJfKjve1",
  "key25": "5hN6k6aVAr162ryXu4BbPiuQ5pDRXJSvjHuw5K7mcemB3qc2hEheFnW8ssoT5ufJjAjEZRCXLXwUedzGbpiRMMPi",
  "key26": "5seEXWL9kTWmncgGVMXwGEBCKG5gtgmfiPB269JuG4WUVv5C2mFVZq4NVTfVHm3nK5NsA72o9ZoiCxWjrcEUf3Gf",
  "key27": "59Rj9DPPU2HdweXeY52q4bzrVYiNDWT8refVh2UYiQGETr2J6dPxHbH3kqchShRHrt8oAvSREYv6t7yRwTD5LpYL",
  "key28": "65ysf7cXjH1cbh1GJWeWw6JkzsaTXbC5nHF3P1H68heL6GEHmdLB8b7WtaPzLYzUJCiMXZA2kFmZmoqNd9L6BEJr"
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
