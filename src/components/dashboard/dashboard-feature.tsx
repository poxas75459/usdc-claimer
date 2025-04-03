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
    "2aD33mNo4dja2GAxy9u3Ts9sbarLUvLdWjeXR6eU5b4ijMEFJteLLWiebsgJWhLsj7ntdnAuuLrXiNvqQ77xi8AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fPiH3JBfrhgHFLNij5jrMRB3xkCxxyheL2LDyqGntPiNhLun8HJjHZmY4wvDaUpNWWXYjC1352UXtyRMoaLgGmU",
  "key1": "27ZXHisPq1g5GZKUZfNu6RMver7xJdUZUjhAR8p73CS9e2Rpb83SCKLBDEdknVbKBDpFPfDJe1WeJPCP6qH7WKaZ",
  "key2": "4Cgx3cmTYU2BeRZ6Qqj7AvW6pZuDHxWGKLYNTVrRiGHbpHdRkEg6SvmoDZe1Qq8fEiCrfbHjULCvffaXcH47SAnT",
  "key3": "4scXwog5Eeh3BahLP4GVDLsSyhVQzWuKoYSwDNjvKhbwHVXwkKo5KyjVpmf9wdKdKyWPKMTj1ESmkoYpGTK4f6fi",
  "key4": "3Kz5zbzbGTA3kKKArDBgxGbV6JUasDT18NUuQ95Kbs5d8Nwn6PmdswUQeASbV2Mygdz82BH7WWdMSe29E5VgtRdZ",
  "key5": "3JqY4pqy78xwS9bmSukFGMmyPHU6CEzQUikciS1UUoVCBe6Wb6M2LWTiLtrYnbvNrBdst1C4pfFNXis2jgBrR4yU",
  "key6": "64KBpzX1Zh6SPpnALU5eY48sdHAUUP33cokKxKMSM4XGJ32o45azh7P3j6z2nPhLazpfaX8KFeVoBHZAMzWSWFLC",
  "key7": "2C5FuqPCzdwv2xkr3zEgznavEoucYhvcg21BNMagoozeunRb2WE27H3DKrcuurZ2pFosrkBk9dyqEPBVXoNG6HQk",
  "key8": "21cduQTWvJNUbBViA64PPiq66yQDRaJWc2Rb9MLCw7vjoR2d1wjmSszyPSBJDMZBtSNi4z5XdobeqZ1zJkMRrheS",
  "key9": "3x88RJaEPoX96C6ZZtC4DFnVnpFKXPY6JVNQbmooPPuxkYcDPG9QtBfVfnrSbSK4atYrn1fTALwzhjcWZ4GLfKYK",
  "key10": "2k67kLy3DURheyiAWAEhkWmjjfFVN7oWougfDzJ3tUD3vd7Wqg4VxUZE8TnwXYMijm4pxtpAzPs9DtqiHdBvBZ1H",
  "key11": "4kNWVBk65fxyQsbzAzv6TmxDVA84nTLqy8wsiMXGJ3gpdPhuVWLSsL3fk8MzyvpsZ8s1urSuuDzfD9dD77ujpUjm",
  "key12": "4cRchfwmqMaMceQWt9KhDexwTJkuHi5bMRSph44qWpg2czVJEe5Z4sZHDwzZCfFbtfv7wJW68SNq3q3twaWGvdSX",
  "key13": "2bmXLoDxsx54Y6SZPNSro2P3mFn6CcYUboS8PqNUBbwDXw7WDbLbV1PkR5iyf3rzv4simMZ4rsGrZ2Lw8TkkkjtM",
  "key14": "5H59fUUUdhhiQEGgisoAv7fPtpfFmbJozq5V3bBkARvjoeTTSoskTPm85anr3zXGrBC6W3fH2PZdBMGdPaUpyNW7",
  "key15": "3eY4Z97XsfDNoZV3axSFDjGstYafuXoXKRw4VjdoNDSAdVLoiu5FBx8NFPDAiJKcTJMjRCJt6UC6i3iLDf6hgWKY",
  "key16": "3ZQ9VsY9UnDWqyhsEUUpHjxLCFUqato72FPrEkpUMyGkrM29qGGUN8SVaBVwoL9V9ZfZPKrU81kn9GJHnwFRf49w",
  "key17": "2uKAp8oBYhGy49eCidpptxceJPsbzUu9LVvz9gSv6piCzvHQA5smk65nn6yGzN9u2L5AiYYubUgNTGAcxb2GL6nc",
  "key18": "2rmpSLaspH1RhaYLC17YwtZfNWfiXT47GaJfkaxYCnqKLKUVhb1Ty26xudQcSdv6YotGatvihfaDdJAFWZYspD2L",
  "key19": "2ENar4medB9ZHKBsiPJ8dJU2w8dCvNKjtacXZveMia4DXVETB1fDTVYYdA9HaNpWhxLjxk9FgZN5shBGUCmcvaL6",
  "key20": "4vswP1zQ2czjcmc7ZK2jxctwpfy3SNzua9oYtMaCLKPwcd3f25nRPnjMkdWMBajiCH68iMyY2AhHb8YLMZfxFKiB",
  "key21": "4aDesx7cA3g1qKjtekChpYVRTMk5FFYpvtyZipJrQG8uqEoE64kjR7g8EzwegBWpK6k4w1FUjGqeHmfiBXdAcko8",
  "key22": "5Qi3q4eGEyVhEy2Cd9cp1tf19QYNr4Gc6Mdcv5dpYDwGKGYtz7wjAyhkEoak1TqfApnD32nK1JKJnSiSCQUeHTPD",
  "key23": "22rBFJohPx17Tf6Arsr8yYEZvpk9uQUtsFuB9yeaVCgjDzLMzuk8NfNfyL8iXG9snVoTt6s7QrrGVj29Yb1SawZw",
  "key24": "45kyBVVEo2XNrbXWecBtGy4SzoiRcfRRHb8t13CLE7he4i1kTeYyAajymbggT2UeLQ9ZMZBFce2PfC5GZW3PzLwM",
  "key25": "482KFsJyVfnqZLE9FLwAkNdpGaBV78rHUYbjXpJNbFGwg1UDnd2fSfLaXVQCVEiCi2N5RWTMkSWgTtiYC4YFWjYS",
  "key26": "3gCKb3QuVPJhL2GX8rjHr16L7kodMcWuNxgRrgHajcRvxcUder9Tx2CZLrDtrxVScA5FkTrVZnfuTyf7SW7iWwrv",
  "key27": "4BgXct3iYSJLNFonpH5Fko983prNSKcEnF8Ms6qkn91VABMHeqFB9rvvHTWU4Nk5hQ3uTUWFepc2iFPxREhgo5wJ"
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
