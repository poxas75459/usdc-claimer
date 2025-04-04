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
    "29yjsqJdKQoUrQNSybZsR8wQoaBfeAtLVdmxs85fdh3R6miXViTP7kEvqaa1HhXREcSfd4zMUCUmUJSC1hq9LbuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKgDkejCi2KqfZtQCMvTJor88MY9DjKnMTTY9xZm9VDgVXAR6vTu8VM9MjqiY6ENUdTLgw8zF9vdcZNAS1qnuGn",
  "key1": "3yS8zxAjQKdmJheEA1ecHDmptMb9BA3YQmLHNvxmrQ8PnnqoMpzwUX7cMgT8RGi7JLWUFee7Z2EAvpDUiPxZriQe",
  "key2": "5UPnrhpLz5jopp5jfQJofwzHEyPpGuLWY4e28xPW7HqrrCmfWRhmhPWGWxuo4V76YzeJfY4KxFGS4GHk5Z6QF9JN",
  "key3": "DyaTr1s2bzvmLxZfeCmsT79Ri6ucEYr3nq1fyiBYLeBYdSV4mYnJGzrYtiJJyE1zqyrb2sc5zazqwhjWa3nHbUT",
  "key4": "2C76176Bow3e2rszvKMZNvwdzL4zsa1o14csx1s2EPTawhW1QLaKaae27EUvGxUbRyv8evHCYUsUeqi89buNXGAa",
  "key5": "4CBsCDseN13zrb2JunqaFViGjJfasKi8AJgp5kMpdUgsbfEC5wEaVwioDRXathmtSCRfJLEc2YisjkZpQX1HeiLR",
  "key6": "HoXn3S7ZAjkNv7MaY69KWdRySPPevYJPoWRWYsktxdDgPD5PFXBPfPDQvYTaszxJuos4VM74uFiwDrGQnRc7bmU",
  "key7": "2CEjEBJYpJ6ads1SUVfG6R2rk1pZ9BZ3drNuRaxJ2Hst87jML6uiVqjH8MSS4mHmud3aoa2irvGLQGFFUM6e9W5m",
  "key8": "5BWhcumnVUv86zDTdAF5gt8BaK3AjQ1rPh9Ha2Dpix989bHwBPaXCRNdeYnn9fcwyQc6cRLyH7AFeDowuFcomX4r",
  "key9": "4iaQgKWVf8fbCP8wPMHL7qXhvRanmsUrjThwfZxVmnVbmkoUp12GrtRuGySqK5fFHB2bzPvCZEtAokTBnDsQ6T7e",
  "key10": "3i8LaUt4buLr1LTDkkNKxDhm3P9wFDnCxPZebaDh91Vp5oCKEWRddkavg1QZuu2o2zvoWv5wuFhfHmazDcsrqTeW",
  "key11": "kEGnZ48BYbyC2zMjn9vFkRYBEF5oSGLfypRxour6gCQVcC3DsrEAyBRn6z9nbhv9Q43VmXQUTnGrXNfwg31N5FF",
  "key12": "2NM9yP65VhGNsLRMGQhqDdWh5qLt76iyqR7BrLVuCmqEr2pC1nYSWk6FNqPHHJVgX8dS1pyrN894TbP5NaDdV3No",
  "key13": "45NKEWPVbrRZFhBrfdKeBHcwUtxtpHedCYLsVEaZZMaJQrT6oy5DS5tgX8aqEC4zzkXSY2rrJNFvivh7dpiypgE9",
  "key14": "3KCCTENgYL4UEt7gehnXFmzHej59Vs43n8HSBsxvurZ2tdifhLBGZS8uXgoqDP75dHoYaeC4QyrFpGmzfHw5VZ63",
  "key15": "3zwuZhg8qdCuKiu4ZUwtFAZBDYotyyJ4BXx28mBvLpAGgqMMVcnMDrTu7gG1nq3F1ae8J4wiGLnW7481XguVRKDp",
  "key16": "mFbtRvWHi3L5sCmpgkGN5vHQMXzeV1AdKQ66SsBmk8GLX77HozLWH6SyWefN8Ehkh9WW8ceR2AEPziXXoiMZdoS",
  "key17": "2PKqgMp5PzFtGArhsvREBRPF5jFEgnHpQSwHUq8VCLYvnrDk5KeuMLDd1pGdFmBPNbABBxhZSu54wtpEHLYpo7VJ",
  "key18": "5j6uYaBTYEyTe7aTYwxhXib6PeAi8aMHmqtM7amGhC6tsN7oGvvSw5XFQsHwzEx6Fs31NnfeEPxpZiiuvDK3YbWK",
  "key19": "5EMAHa2bwYHHL5fgbcg9ZY3KVATH1bisXrBFFy8mR9t765C9vdm3MXkQiS6ZGkTiTwRukPpPTH96A3N2aurtsdA1",
  "key20": "4PnqxcQAUThiev6PmQNuqHfqSFYzZtuBHrDcgTNhkfQLErLWgd4SANEHe4eeeM3GTuo3DRVV3VRDudDqRCai59BW",
  "key21": "48X3g7mwTp8Y4Wvxg628ngX7f9qjXHbbNNARcxP5K1YUhzP2Q6MkqXwwPAn37qKxXaa9YavCfdtk1oNAFNuFJKJb",
  "key22": "4FPJewTUndMrweMYsVqdDE83Hk5nhBgyWxZdt7PQVq7bAVbCTrAgAW1ZYhgBqJQHuwtsHe1tTXAdAtUWAgv2Pnuq",
  "key23": "5wRtMgPZgBUeFAkdgMyTgz9WubVFPtU8wm78VHXxQbnbgAFbJ52dhzw1Njz1HzwVnm4duSAAqVkR2hWgKX7jqf3Z",
  "key24": "5xazdK9qsHGV3jLDzmoJrLKC3W6xvd6dA6rEqyMfUii6iVjx151Kuyz43zayEE35YChUxiFeUBS6aiWYzsZQzvb5"
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
