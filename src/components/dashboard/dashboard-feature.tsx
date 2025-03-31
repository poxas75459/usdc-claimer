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
    "4qz2MTs87CQzP1m36eAx67i7X9cJCVstixcS3KdmmL2G7QJkRE6kgXBP35joJqLBDtUExVFPubfeXFQVD9ZfZRsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8GufEMN9Qt6caHQuhZaG79B14p9M4sBqq9mp5L2WsvvcZqMF5Cg56mAi8vRNzHHtYNevcqZ6XZfWdqkMtQzAt9",
  "key1": "4zZADh84NEcosbjEj4p4xKgCc1BgCAcJMXRmHrbeWMFgjQ2x5uaVvx69dvxcGgeCQwRWw7ZzRJ77SFnLAQCbQWRc",
  "key2": "3fPFxtVnUQeBF6veehKyccRCHu2SB2CKczTPygmcTBQB2xVWN7c4uEeraGJWu3BRuWkrwe8QUGVNPKbFVXCsSptB",
  "key3": "3dPLZQ5xmxxbHJL6jYsQzFokeQU1njthaXQY271DUTdrvNhriUr3N3rbZvHQ37KtAtg99nrHJUiKDMA9SBbB1jdN",
  "key4": "2V9q4BS5eUswuWni4TvJuBgptSK2wummxwpvnCT23Mg14kzcYYdFHG2hyb4yQdBtC581whEYiHkSayKpk3qSGhR2",
  "key5": "27rFMk3k8dfWF58ipQc3xNKQtaU15NSzJ86u1UB3dB76rgjoN9efrjuvDEKo3fwaUQzknWo3FVGLYFQ7iz5baBTK",
  "key6": "418RTWtMQktrRxyHzcoXteyRwVVP6fSqWczzN4yPFFZtiFX7cBJSBVt8TbAnjeH9xX4kVXZx5FQPQTXPENaJMK9",
  "key7": "2eQ9Awwvs3eLbymjzHQvacbjYKfDyFRyCeGVPYzBqjUTnPMGydPCAh7u5UJcgW8a7GtebDcCz58aqwb3jXZjbiAE",
  "key8": "3RQ8ksvJD18LWX5RBXBHPQRaZgfdFoSFy9siMEp6VANwteXxSvbEFAKjZNesFXGJApfWF3fdGxeE7tPbfEbj27fQ",
  "key9": "3jrpQNVQNVTWaBBeEwsXQgrVScAA3accw9i5hf14dWTSUpuTV56QvEUq2h7LaC3XfoVpWnackfocSzHfBhXtXyLj",
  "key10": "GUvDWmgWZv7MnofGjPizpkFhhWSoxreLSobNbjtwQukF8LczDpDDRVqyyGC37KXbCQhC4x9heQZPNcMGbCLRZwx",
  "key11": "3sLoHCQmkE85cP5WS1cWR5mW64jBXspY98AHr86s8iMzqAdbDGBYH4wDkdiWrp4AT4pD5xH7q23Uc7LtfUreHamX",
  "key12": "4h6w6tDe8hhevy2s66NMBCrYmWhz1q6YMr7GAtRKEVrAiUkL3bbfn92gfNPP4QKYn9sMuhNAKQu8qPN9anARAXat",
  "key13": "5rmC1KagFudtFGUM7hQkV8qBkm5xn3CdVFDuwwYcRJyxyHyzKMRJjdhhSpWyANpk7dEdSPk2hcYQMYJhJt4qFXuk",
  "key14": "2S4qTEXqF6gTo1o1rAhpgQsgF31XUfnR2dRN14LvQMPv3Sggk3a3Nnpi25mAkoxgE28UWWBA6JwpohWWEvtLLAP6",
  "key15": "2jXxwsYZgnRWvQahS8VAN14uCySM85mWtVArDt7buDHRuAvmgRQFViP3CnWkGVk4iT3eqi5zuooNiwJQkUuMZTsP",
  "key16": "44QEzedfjBVdGvqNd5UHPq9xF6gQZ3Z9Tch7f9ssd4F2RKE8HidQaVS82MN423efdKF815HYt4ZFY7SAaLH2XFSw",
  "key17": "fjbWJMN5NGgn8ZeFxB8nE3sfBBsrk7J3FS3cLYB5nJpc2qDnrwkiLYHeugBcwdFb1g9EaEnVXF7RRHEKVfHtgbf",
  "key18": "44RrycSGssjiDY1XGpnEA49opG4Xcfs2BYDGRSppVq9xWdmXYCueRbuvEu24PSNrP3FU3nMwDCpjJRB6BAH5GPhR",
  "key19": "65FJ1N5VM1RWVxmuMEoBJGnCcCVV56Zg4cuv48zZBr9uVLWUfsfmurncGsTpbZD1xyoQGGCGToxcXWr3pPTamAs9",
  "key20": "2LFri4iJdvVnpfS3ZbtYEUdPkNvtZQh9SuAdqhyFUY4kDc4ET9Lpez99axVnjqP2Ui4RPzWfGhBVTazUibq3dyzq",
  "key21": "5mF9fLNwQ3whEr5FMNJFrNAmaHqEKESQYAfWXojECZp3taYW2tJ7Q675WGbNBS24jTnnqeU5mQmu2fB7HNUYU4Ax",
  "key22": "3tjuMkR4XrCJpFdFdfr4vhH1xrGmi5qmTsGMPSbwPh1Me1hAFpYcVoswNR4ZunWbaEh5ZBQjK1T63YRpBkSDiUs",
  "key23": "49ujamdsfdjFsvejoxybRPg26qZt2L2uR9C1WpozgwpTVn5sWEQ8PvonJM3ngLJUoBSwQ9Pp2GogNHf8hAxc4QpW",
  "key24": "5NfuoEGwBaaRXxeetqpo1TuoVc9pDDvk1qbYosSWPpuRr5HbC36G9NGSrNUAm8TUGGymyRuWFvQSU4RfP4eVE5uX"
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
