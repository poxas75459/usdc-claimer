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
    "41AQEHpv8DqFEg4uEyEHmh4Ai7D5rHSyVKwFvYTAvA6bNYWW1goS8b4uW8PbedyWz44b8VcFrUgBeMcpNA97zSVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rxnWx5UMhBftU2u3TGSfBZSwpPxezLtEytTRjf6wjBcSwEp85fjHEZhzGYaFKpRLUkERif6W4LLN7YN8EkUconJ",
  "key1": "3kib8HQTbcrmYcHuoNTEczdogLpMXev8q9euHNSqLcvR56nwvMJMsu3PtJQTsAwK8Lfyjsve7HTN5LszcXHXDK1e",
  "key2": "3XmupGd3P7AzWZu678MMoE8FXRxsjQHS4J88vuYtASySZarSwiX2T3EctTia7tFFmMz7kejew1zGSXQqTsKjBVbQ",
  "key3": "4f59ExrBZsGbYywHHS9qMsaUfmJCyke3SyeZSMLeU2nY5LtxBe4Zo65senLCE8c3XvT2SAPPkZAPoLUWN9AzcMT1",
  "key4": "37uuHT1VghtHdSchDdggxuiTT37tLTgnEm5TJFx97eLcMMmFGrGAxxYSUKbhF2yF19mFDUqbmt9p1DuV2Fv8m64z",
  "key5": "4E6B1ht76NpuEWLvk6bu2vaXZNcRuthUxanbXiNCWU4rNVWS6rvnu7yA34maF2EAHsjWbxEEgPAVkw4AqjVHSYgq",
  "key6": "4eYCmRtgXFHbU4YyFfs6k8BUvC9Cw91iRfGxL4TtTofKWsM7uQqMCnAaNToBXJHQSwC7SaM4wpfk8KdVVnXc1vT4",
  "key7": "3wyhQHzpHPGekL36ThJsXPL9ge7L9hJsae33zsusGnh1eE37ZTyeJQr5Zi7YaQ3bY1ny1nA45L76qpfqNfgHUgCm",
  "key8": "41Z8WxtxXK2VGaVLwehT5sGMF3gcVmun1sYEiCvvT4vrSzCrLiPHH8eMhsSRCnbHuuAprEBQasKSnUowd83Vd2aa",
  "key9": "5NXUPkkfxSUhzVEY2vhTJEV3LcS8b6MzMnkwLsDV8qL9ErtCvUWZpqHk15Y6zXibdKEpibMoBKsWk5uqcRnxSYci",
  "key10": "5vY8oVyCQ7rrvyHXBZYqksjd2kPqWVspM8QznjHjuLvF4tYvaZbCT7L9rwZyUQMUh5Aamm4tLmYL3Wnyheyo4ETc",
  "key11": "52AozJywxuvx8ZHKiCEMSiG25pFF7f2TtQ4ywJVtSj7c4hxqP5V24go65cQD7ssR4cDomwSpPmcvTYD5xLVj66TG",
  "key12": "4dhG4DZZYQ4UCyyGisMbCGAFYCmNH4pn2MtTrPe3tAf7GnAmtg9h5pMKPGJ9cJ7W36dNgWmsBeJMbFjcWHZfMG8M",
  "key13": "33nFc9Fz9SgZ37vsoCfsfddEap5s1uyU7CdFBQJgqM5iwxBC1g7MWvoJH7sjNUmDiYKXApzDRkKciCeVCP4hdowp",
  "key14": "3BABeG57XivvbK7rYSsuG1nWcqiH8YJXxXN7j3BU5iK1M9KNEMPFGrsdjnGEDW54syX6PGsbB3QuTzw7a9ruixfs",
  "key15": "5gFmyu8XHMpHkLdzn1M8rdyWwphEa25jKreY2oCCxAyMGyJfTpUCVJT4kwkXigXXy92VoRzFV6EStwdhhbLqNUoT",
  "key16": "38jUqLPvafyieNHXRP1A3RSJDHgdUqJ41bWYJ9DBYaZtom3RNRBL728SZhjkBjaz1J41vgewNK1FQhe3r6Yh4vD5",
  "key17": "65ns8XV6CDmRVinSfwUcQ3WpJvKwEa9hkrHPkN5JDPTEDHnECYMK9tn2ps2kaqT2eY51FzrViPpthq2YB7qr4h3z",
  "key18": "4jNBd4r8cPwVWhRcYQ3CPab96p3jyFVTK9sj1KLrc6z6jMmYhndbgEiYtzFGHNtzjohGvPVoU5XGCUMHxDjELUKL",
  "key19": "4afShyLHED7auMXgrqthZM9gR922comEmNMPnbqtixgMUJp3QToYzBFFMPKkmBYtePpvUb7H9PKqCq6gYd9wAWLG",
  "key20": "ZaqEQ8AAxECmNDwCVcu7Hmz4oT3Y7ynsYLf2fCEGTT6XacY6K1NJ29MoCDjzdWYFHqeSobyisjWidtMXQX32SWr",
  "key21": "2qpEzDKGuhHHtUMaYqTAHEsRiwQfS27jPXRVJPkNyxA8DKwaji8qxkuNrUkXiUz6GdvnUsFbb8gifadK7aYJFYuX",
  "key22": "3ybo9N4QakCLLXx8WntbC8FbYS3gPdBEAjswqPWBAx7VNLm8b7HXTyEe8Qbap5jmswZHQ8YSY1BDNDPFYAW3Z8vV",
  "key23": "66BKyMyzrF6kZv3VCKPF8D6YSSixW7ujTi49nsL8evrEbc3Fju6GcRbZvgo9fSN1yrDTkkKrdbJSCEZthVso6pfL",
  "key24": "3GJ8eer6V9WJTX72QGWGFePkbwAnXncnFy6UrAyMxt4azuLCdM82cND4qV5wYaXSsjbMFQguRUeq9SkNV5DTbMmp",
  "key25": "57y2YrNwzchQG34GHoKqh67rkDGaEB8NWkrs3973ojJDcB3WWJnUggbGESCc5eroDV4anNetama5AWufozktYjM2",
  "key26": "5vJ8AQwpq9h5KLCAjjNLxDUDKPSwQQogDWHphK62WiA1r8Gykunhd5bSQiy3WjgteaDq7eaWsemrjywGD8z5m8sJ"
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
