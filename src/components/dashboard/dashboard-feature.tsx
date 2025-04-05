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
    "5b5ffe2uTqKuY74TBQPihVhx6c8QYJS9hhNXxX1fLeCJS5kJL6LovEf4LvnMq8prEzvxuwAx1hkaTvCwaDQAoicw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfCJSDZdnB2ox4YkQW5SZZDMmr8YYa6CPy2B46DxJLP73LELymbrPbEt8bsVJrfikKLSonMvsrFX52DLLPX3y4J",
  "key1": "3bHek2Ac7swBeKNQs2smcsVmiUyjFBCHTLpk8mDf7fUdfFx3fqua2dN5wXUoz5ruiBwcB9zHosFcZ7YE3cVbHZka",
  "key2": "4VGHmCwUrdnEaF87KTGjcd4nMXyNMmuvyD95FDPRjkxDRCJJLgoSLb3i7TvX1BFytiGo6MEWMCc9JvY2kL3GRX28",
  "key3": "4UetkEhqTbHEbXLccLUwfHjm6TptK2LUzpheZFhD1w7mub1knn3HhUGZ9uSZbjTNg9itqnZAkK16MJ3cMj27SaLF",
  "key4": "39XYtm8QLEaejuv5SNfSBJAkLXTUkhWy1kTtDp6DmYGCC2ZeUX7m8VF7fV8cFG4q7RpErSQDpy7GquryfBFQ9rXf",
  "key5": "5Z1NJ7NBjC4T9ZJd2smkuXwu8tNUpoWi7rEELXza46oJZFiFSPuNQmWrYht51T55XptY1Q44s5GaZNBV2V68YG4k",
  "key6": "3vTqe6MRUAQMMAPPmvapSbXfuGYGMEbpNQuQ6Z88DvYeeGgYLwvvJyV6aW8ivMxFKFuK8CBoaiBXXLuDnxYpzh7",
  "key7": "3DgmAbmjMzNze7ZLUsJUVtLSPkseht3qy5oscDJoVnU9iPhSAkT6M3q2NQ7tdEio7VKxyAEhLT2vrqxnJkdj5zSt",
  "key8": "5s9ZXrsJSLdqCAiWLSzZuXzuD61zBiUH3rQsUx6Wst47v8x8CFxq3ma6yEiFYZ32HmGxLQrMzpBYBy9MxeiBqGw6",
  "key9": "4vT2ZPpmmGRkeFhfhpfQEhv89LAb127TTVi3r222H4SQPHfosSPy4j8dFzTHUjipqbAmCgCKydgZAQfysTc6kvey",
  "key10": "51LF8nwqGuYr6EnsxYM1GASgoV92985AkAHrnstY6H4FBv1THE7RBgDVVTHueEHUrUUAjaV8BvbJtNYVNzQuNLTf",
  "key11": "39BM9F8YqFqYFLCHEMjR8uHZ7WrQ1ZpTSeDFDhwJQETLiLK2Lo3CLqSFbzBWT7rsmLhTscjsqAktU7LYC3EoSKdC",
  "key12": "5CHDvvzPFKdSXKux8r5nXPP6Rrga9JzADMHq5HNrkmzabsvDoADW4vME9r1vxA4WyEeDzF4n6z2ayuPkvtYyCJWm",
  "key13": "LKhmdVPCRfjsaoeZFSKHW6nxXHbzxYPW7oDYp87dQoVWp976sBkPJ8eAQZoNu7oQxGjS8QVEfhhj2TmvcK8exb5",
  "key14": "u67MWxhcQChKt45YQsmL1pq678yJgcCeAKrj8zA2c9bbmak85AQJrs8kELxmEsVnTnE5egnnMNejHnRPa7mzACd",
  "key15": "UxGhMJkWdY7ssjm4CNu993xvJyHE2YiZMPrgDDWyyskUTQdkDAQauGoiCCR6P385ubpTtjA8MoGnNDdw9xzDirj",
  "key16": "3LYbwQyWgzdTKHZBydcFkCNEqtdR7Ge59QzE5nSi9NkfyDNCErR67StNDXb17ucauJDnfGb4h1sEnmffbX8VUs8Y",
  "key17": "3vrDX4qrmrCUzPr61VLjQrrLcBm4vDGDkpW1ntoTFUX4kWAwaUdAryLYC1K5LdNt8oFR4SeDKU97Awj9UvXjJHu",
  "key18": "4gYvZ9KozoAJf3Fzfd3rGJrSJFwpVL8TPtgFRXrS19rVZrRoTKAneqf4BMAhxPTSPmbqnfk8uyAABzyFrrPU7kyr",
  "key19": "eiXSpdE99VSEAh2bk1KYf6rmQ4nAWUQcz8XShhxMKqEzT63p3MTbWCSDa3j4av94V9ygx32zf9xcBnBuxNZnGL7",
  "key20": "3HrbGbNHGr2Wo5GSuGk2FjP9tA7XBBPQALVQwUnxRhMMKdYZSyPxrdi1v5tiB8v9F2wBncBJvL4RYGZReCqrb1Hz",
  "key21": "4wDRCyVRGUuAaJMGGoWReu8ckrKwbA1Awh4ybysApBzf38zwv3E58D29cyBZYBAcTDCNmvftE37wP9ZCh2SpkCgP",
  "key22": "o2Yfn5S1Hh8TnrghmcT1YmPx7g1iPTdyVrB6VYab8fwGDNayyTrS89yPhEeU4NVzPzTzNrfk5ZhiHxZe62kSQ6i",
  "key23": "2HHbbuzDxrNWJ3u2iAKBJzCndZtriMixiAG9QzS4nn4NJYyvHxwP1w5TnbvfRG4Uv3XHUEVgMBQHB8ucgjbnRibe",
  "key24": "3sgCGLa3dzkqcCrBhaoyYf3s5MC6L3GH285XiNZFEHbPNYqFryEhJ3qLhbRzefXg79DkkhPob3bnRJVUVdWFC1MK",
  "key25": "2cZb1KToZuR5FgjiCaUtvkx5MRAkUbbKapaWjuoYLeoFrSLpihq5H5obzZRci3LVbKf5uzujSpETs9oj4aFNPEFB",
  "key26": "5w6vPacyHs7dPpZV3DJ3ztpoxm6zQ2qzwXt1HEYFxhaT9zry1dP82xhJX8C1JrjTCKppDJwMgscQSaYe4uLqvsh",
  "key27": "3YTMXJw4r1MHB9UDExmNBeoyxMpVEx9Cbm2UcxB7XrbQ96ri73hV7JeMSXVGN6Wng8ZTwBEqha7NtDsTsuPnDTEd",
  "key28": "35JXG9f8U5Pa3KVoBMSd9KixYy1Z7rPah9SNeMYXZKbYQVF9GVp3yXDu6SQz4MpCaVzhAe3xCFeDREX7YyY3bNbY",
  "key29": "3f2PrTpJT8ojdkbttevQYMQqspMVRWQJkekAZ5ewXMTE89fnuEQ8MNSUEP4YBXGUrAsVeKMoafrHw3aUQDCaZk9v",
  "key30": "G4SPZ9eSPRbT5YwfE6Zd7PtoQwU8k4PzNxpnf8rrk2U9SLPpSrhFz1irBB2FGsJAyzKM1b1FWJPA4To6fPHD9vU",
  "key31": "4Lp7jtHG4xo5LUbHC4gDQxSTrSV5UVQtPSMtqkqqtqYnE5ba7VBHUVYLANGr6gmAkEAdoE4nM453CqgcmtibFEyb",
  "key32": "3oVSp2RddWtxu9DHSS9myTEXG4CjYcEvMdGR1PVZ21SFwK7wFUjWp5Vde6sLMw8QZH3QMHYh62FLT4bz1skwzBui",
  "key33": "5mnsobg1mMRkQYSmSjHZZaFcF8MThPPRYGETV5WVGGE3SV5pD7ifahC2ZVgNmLJmtLscfp4oxvcUPd2CY1pvQfRi",
  "key34": "h9H3oBAMcGUxEehigewt3zm1zdmwmgpacNWFzqxbEmNW8RSqRvd73pAqRoKTMmetKLQFJE6q4JQrMgsCa64oAY2",
  "key35": "2WpMhM8d1bPkZDEfcvHrz4YGvpmWU2C1ZRzAXumtwBUNgazs7wJzDrefxXdDY7fdk2yif7Wb8fW8Au75gCyTABZr",
  "key36": "215Sj3PV258MhUnQ2fPH2m6iqpMYNFWcLzrEbwpgwJMQcaNxqvxKhdHm56S8wE6JjoVYBdyXvHreCkFbh8QKEppD",
  "key37": "3RJ14aFT7aFZXRYneVfA8UTUhxJzwmQ7wwi7oD8Q8iGmcr8px9UGPePceQxmtZxjzVk8HC9U4ywJPxkCxM4pyqxP",
  "key38": "5i89dcCwLsjC9JvaCiEqSAz4CbmRKzyKukWsByep68JLcjGKuiKqzEk1Mbm2BrTRrhJZtVVieaxNM7XXzHz8TpDH",
  "key39": "3BPHigeq2XBAKPkYj57ZQaoXb9qwKUWnWHxpSMCyoqWKNSdhpB4GsQjQbXZq8i39SJ99i8bfeMvVUJtDrgBGViqF",
  "key40": "3yyFuQqxXxe7n82BmosX7VUZvjB6WY498NnXmCdJJD843LcFS1yVXPkhwK8GEggMujtSqxsVTJwhGPXkS9rHRjwk",
  "key41": "5ot2jen3tT9VHLnCJYjZYJYDENLrJwomJ27VnTRxf884uRvuwcp2Sn3UV1DT83bNTNwt7stea4ZzcdpFdTbZ2X2r",
  "key42": "CC2arZaWeznDTP7NmzEWUzrrQWaE7JFHUtp6tKMfJk56nwirgZrKukXcz83xZh9Tck8o2C3dq1T3ujmPf2GfzeE",
  "key43": "4dATah8WEf7TSkXCTn65SnxSGrCfULsghjSzWcjV1tUELL7foQfepXEJs5gUvFrtN9P7mw5ZQJZnQL2R5eDADtrZ",
  "key44": "4qZ9Pzcr34Jqe1GzPULZbgtgEmFdNNZKrCywKEV98owzTXXJ7iGY7kK4exhfF42SVE6mnZA4RHHEVidahR6wHvEY",
  "key45": "4WzK289kYS9AUAHARGumdKCT6wfmE4xekDV24EFa5EjXeg2oAeR2XJdgz5XCuRMnbu7LL74b8G5rPsbTrUEXdRix",
  "key46": "22wYabnarnUR4BZ3y6eYNZVzYwBnT4uvnENjkwUb8uuxfKjFUrr2gaUb7uN2tPV1d7GcM4TCfSBoRyTNF3DCi3Ny",
  "key47": "46pY2Y1NEMWrWYwVnVvr5dszyNSrEHJwf78yz1ku3f6KkwbeiL9C6gN4KDMey7SdA8JtrzEWn4KKkwX5ac6eoucq",
  "key48": "3SsFaB9po4e7BfjtsWemhazuJqcPemiZDDaWA3mn8zKPxHaKqYH1UFWQAnmG9UcdKyDTVDTK6Mb64pgxSRZBbuKQ",
  "key49": "21nanV5HQCLNuQASu26khZP4Zf4WqCjLe91ZhfrhCXYBpRz36HKW9zZQqXw8siyN9p7k1s8vwUYmwWFeWvoyyHmV"
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
