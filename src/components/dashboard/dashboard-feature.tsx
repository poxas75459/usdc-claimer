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
    "5YU8Ewwdse3YiXk29Zuv35dUeZaeiraySX3t7n71yCxjMuMHomNAyqjyszfYuyq1X5ET4sQhcGgQNpZxM25SPmK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ddy6LDybAd3N31zYZBpkkSQx9Ryb6Qy41iAMZM5iCov4uYum8TKaw8SdbivhsNvvaVm7jevztv3kGyJvqRzCT2H",
  "key1": "37G6psWvk4SMWEBcNqWcYhgN5of3enctvMtzAVGHtJupY2XQTnP19qAtN8NpgHXdBWGwE5ziyM1oJV8XWPWe1C3r",
  "key2": "4VcmXZEXDjfkZExg1Nabq3ucAeRoWNPhVmYfVu5FGN435QmEymfN5ftYsknEXyLbYd9A3FAh7gpHpmEJ6CKE1h6z",
  "key3": "5gWcWg4oAGJK758SUG6wVaCWM8u1a9SrVjHqy4jVaEDEejHCXERMwyBxqgmY7JHwEvAhrtzyyrkcgGYPDDYNGpsq",
  "key4": "2P28Qc3ydh27YCuUfpaLVTeb9qgsEUb6touxVFBiG39hqjSNknXboty5pE4uecjLrBq68xdHa84gEtC3gw8Sdps6",
  "key5": "58p8f6N98QKANtEDg3ByWK2RmFFbPwYcDW8hM42u2fMMpNViANs9kQPQB6ncxYo6jjox7jehKXTF9a75uJCLGuJe",
  "key6": "5VrxBX5DXFecbj3XrDkNeJjesiiXotujMoHz8NfdsioewSU8K7KT5M3Sknck16D8E3NPnM5dVbxAp54wyXnCTrgd",
  "key7": "35VSdXgqCdzL71dPfBcUBUy5XLFAbcbpXpURE63ArtTaY5jhUsp8F6WwsaekTcrsrVpt8YCX9BD19g2uAHkFKC6C",
  "key8": "5HQfnR2aoFWnezYUYv8yTW5caUx6rCw1sdqxBAN8sJmgz6USpK7w6cywFjegzeKdG8eYnQ33Wa11vZLiuvNNKdJp",
  "key9": "49mosa9cqvH7Rh3yeNa1wD7jaXwWtgGTKyAzssEUFPFgkb86Sh6tfo1R59UWCZYLJZA2te2KSFiXYThDwnbfTafT",
  "key10": "35AkBUhEbk8vu8txsYeGxvxXY1xdxaKEyGrsMk75Hkk76Qgo9J9HKGejDAQbXgpCjcTNrkWQysQZRS2nByVNWPqY",
  "key11": "3f4D6FYLvFc5JztrXSuTsNsrPWWQwRScqKQQaPhLoqfM7wrkSSGZxEEAjVDVp7nLog82BUwwsgfiLzNbnZmq24fo",
  "key12": "2X4mmVxsGkjNEqM9niT16yVG8DCGHh3fGxnp2nmUwdPqBQy77YRd2etyN9zHuGtfkhFL8fF453yefKSUacDAFcUt",
  "key13": "5rFQkBwLfEejHe2YPyrgJUaaoey8DxJAmJ6YeSkmZC8JFqN3j4QtfPK26fV43Ugj4YcZ15oeFEmozzAT16MgGc22",
  "key14": "xcjWe8Mdo2d6Jgh1FgdbHqy8xo2VDaUfXGMDGg8PEVY8hraqMtzxk3qT3tKxwPSAtUReUcr4g8krRroVgFW15pN",
  "key15": "5pphioTSuF1a7Fo36tZfwcRZqSEd8i2YtTsCFaqQRR9AD3YTbtHzRtkCKrSN9NhGh9M7vRWAxchPYyNJh5Xa1CT9",
  "key16": "531gDYaFsDzFsF4KLJFzPpPHpQWot4z1dr9CSbZQqh5UCyQeT9Eip2rxnFjFSxFYw23FngsRaNp5yfTAsXq3rjPZ",
  "key17": "63qWNDLF3eK9mTsPtQGusGkrNcEcwYURMbBThK7izWMdQ1PMhh8xyjiTeyvcf4EYetLSiN2ye9CPxn3CALhCRhJe",
  "key18": "KU1mEHr71oE37FNCWk9ULSpuRxkYmyXfhisMys79DDpvX971FGLNheH6g1Z4x7cUTyHpGAo8za9bTSq882EjiWh",
  "key19": "X5egQ5cTmNXcNrrRfvTw3rpcUULBMaUBYkMwGEi4k1SiKCSs9afBdLJpasS212MRNsca7F2eyDRh3pkdeFRa8mR",
  "key20": "3njFKfLVk5cvFj6DjXPqY3dAkRAC2EBij7FhvuHSTh5xtYB1RWrvp92eU2P18tn4c2RYbnHGba7gBrWXSmpYzTxX",
  "key21": "3KEwVmTyHbzfTdYc4EYd1iCWhtjiYAwZ57BGfCsBmz2Kc8UEUSS1AqnhW7zFpAmk66jdDSNqFoUGvLKWqDNoAcEs",
  "key22": "2x27s9tMyt7KYzLHapeJLAotH7F9hz4peayJcJxEnmdDQFSgTFtk2AMHYTk3PMymKB9pww3TRm5Sa9iCY727bzhS",
  "key23": "3vx9QDGq2HsfqpsBwF6NrTGmKvTtd71TdeZfyagpQ4TtnPToNKWpMbqpNJsZcRNGzxpckcjGJuiwySmZVyo9UBtQ",
  "key24": "4tZc4sqMN1TnLbkdWGwr6MWNrbjyUcDPXYaidkTsAJHh4BV7w1gdsfa7pMB2GoN8PqMaEKozxs6HFB4d3U36vTmU",
  "key25": "3NhRr2qJgkrj7yf37c92H1DrkowigMz23BgUTyybMuqMU6y3iUUkUARjRqCMFegxdXHETyLzJuCGGGzEQXuko1A8",
  "key26": "3LxH8RSxoNRzp2qAgAT6Wy5SQxyNnjoDAbgWjeVcJY1H9RttNuYivEJnRyvEeQbouZ49dEcDL237sbqYYgTmoRPC",
  "key27": "4BGbLmXLAK3d7EV222VEsZwyab1rjjuSk1BNCwrA1R6LUdpB6L8pbjj5p4oPJtAziPcU9r1MSYXNRLmvRozUiUp6",
  "key28": "5Y4hg2pL157JPwRZniQZoFucCucSS2iKcF7A4mkVuEPiGUtz4Mw4ms7vG6xm5B4ST3UF5Yr9kV1bbZpSveeaEJgf",
  "key29": "5awBubYtmncsBSXSnFKiFVZP4ujacarFUxJdwVdzkcZXPh91MknZX99SSFttf5ZSCepX7zxN1iHdzN1HkjGEKpp9",
  "key30": "63VtPTbqEyT1HWNyrNs6SKAmAyYLAwaR2AmWzW9MKcf88inyMRm4Byp26qoT1gxrm4Kz5wVB9QMywbeuY84Fzmfo",
  "key31": "PnETMC3tuSryNjA151xkSxyvw6deXczpqGjCHTu5A6dkGXhhQMCcPpj7hreWmbvfiSg6k3EkJXRvsjR85HRySYC",
  "key32": "W1VgkZDvT1oUjrqfrbP2HN6HRSPRKBuC81U7NK6MFXAn7VGKtEkWg3xjK6iWqoadE1Qa68YZM75bbCpTGCkqdTG",
  "key33": "3qqZzPYhNhmigVr5cFacDuzPP9sJ2JfW99WgiWLd5A25vYXusm2wUHy3Qb3qUR9bxSMmAguQaF9v3QBfnUVN4eLn",
  "key34": "24iLBRVWmr2H9U6zNERy9A8yaB4Z5vybjd6Zrb78fmc6ZNMx47MRbKUDhgMpmgtyvptcUDgwF8zETkVap1fmE3ks",
  "key35": "4F87rPvbg8ax3wpHrU1LgnKfAZAGo5muBeB2KY9v5S7xNua1DQZQsnnLE7VNwUMVsH1snsiKy23wB4Mgp7odiWEq",
  "key36": "2SgBHqH5QPvCCHmgK2ffQza46fhKY5mnExmoDeG9JvE9NFJE1rpQhBJ7yGxJ6UWYHtSuzgKELdEqKWNLEvCrv4gy",
  "key37": "5DmgFv9xZHvs1e6u1bLUDezTVZV1kTi2r77ggPecjKsQg8NcvxectERAjuVPkxVtTVp2UVFmq888BVUWXpQJQEL3",
  "key38": "4hk4JpmctNtCwaqqem9TUoVYrJkSoYCWcmruqHJG234eDJdj6BwCx25QCSFHG4cgE5z2o5pbewoiU5aQeEM52bHb",
  "key39": "KSikoBerqjTjFaSNnfYjccN63iDie9VWGUPQ6ZGtMxpBKBSqbiAVTpSE84DS3tDfVTnAb6nFZQZwxQp8jMJ8QuK",
  "key40": "zkJWgt95M6MYwnhYVjb23YxMPruQnMraB491ptgQHfQw5kj8z7C9Q8S9ngQCVN7kHF5BCkABKGkJADppct3TdX8",
  "key41": "MDeaSWnc2jrhwGLbuNdBiPeoekgUSMbB3L3pzACAmx2QBLXcmWgVR5erKV5ArL5MZZ3P5ygqY9VuBzqJkjTDyvC",
  "key42": "frG3fUnJEM9BsfcnMAVKXfPgsJaufiBNy6km8rNtb8YoMMth82rhvrB8nHhjBqQdHqPu7xqq2FwDMCJW5ghWTfq"
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
