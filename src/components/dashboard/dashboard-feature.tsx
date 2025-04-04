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
    "4wzKf5QVyfbAxzHNHVwEaCvqona8zvSwpWJhWqhczcYdH7BH1yqqqvJDWn9E84ZuYN6pSA7Nxau9Uhygmme9SPfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrJJWA5hRHQp3GSqjsxJ1uQzX1M6VFqP1YBAXvo4UAYSdTQAjLKUDQESK8K1xHoxXPtcFHedVdxxJBD9WfLhBY4",
  "key1": "3WbkpuxvfKdJyFVbhB2aDnAxKnVX1NQ8GPLP927Pr6Kn8DPNLyaoWbc1BiiQHkwoikW8w2GgnqyVEmYCG9WmV9cU",
  "key2": "nCFQtNJs17agMNKxWXu7JyqgDyt8gVt9sG4ygZhhmrLVhfgzmufGo7gGqyaYRtEc4B8gnEwEPNbWjb11Wm394gp",
  "key3": "2zRBG1y3o6FvwN64p4cbDjPxb2Rxr4j6uwxqiZEGmZESVXkiuEiwgpmF5MS1HJyvnSC1AynxxXHknGhfbiHfeNWW",
  "key4": "3S17gyU9PfNAk82AEmHkwpnCeJjCLJEJRBCPt8675y9Wq1ptuUriSToMcmNNezMBTCDqxR2xquymyMhQeb1YRk57",
  "key5": "3hgS3Rc4fdPcwVYfR4fkttFqqUyMPtyadTbqi8BTSXgsSzsCVsDEKaMMXveCJ4p8zZoYd2gSF8BNhkEDpzewKVsE",
  "key6": "3p36yYVkv7r5hjuALDgY9ptoQhhq4hyVAZXdUmitWdUphsAsGsv3DpTMr4kxucxsYsrhNu37iBkyVRTmexnB5era",
  "key7": "5MLXP4mhZfEhHeNNasYGsypmpdbQoKrS4ig4Da2HsmBq1HEwMRTaxLA3jqsGknpgDp9yQGtSgEVffVat7qUTDB3W",
  "key8": "3W54GwcrKyVohK4gy2Mv9fcp1NecKT4CBxRAMCEFuk385evUKN7zB69513ibfjUtKmCCTmgLjUoQy8NQ1s39pq7d",
  "key9": "5f75s15qNhWidP1C4jGC64q3zSYmDQgUFzWxYw1yhtyj2NNiymXAidNNRoyTv5qU2iPMYcHGkeanNXjdsKvRKV1y",
  "key10": "64H6JfYVfX8GG8gQEzNGxBN2puLqfYRLaogFwUbRAJKD9D2LNgBgKZsxPuzrHvDDut8QKahHRePe2TTdu8rFgDJK",
  "key11": "54cTucz263NpgqL39nFdExW6MyEYCEgQJWkLPsjAEy1hFbeD6nVwKfAGDmQLR5fHHW7RBzCgfHa2ucPEZFBQXjCM",
  "key12": "3FrDUb4rJxJGEg88dBcxsDYSghatdnsE1KD67haJV5RXSuBX5DJLwfwGvCvhuBfSD9mjJbVeTvRjGD1ieyT1w8zc",
  "key13": "42JYZihRTBDuGsH1SL5tjA4VhSWRBMRVbPBreLAZz9nm92MXPEV2JoyBJWYnGgEsJXop6MuLfhGnk8syC6fnvNBU",
  "key14": "3G4iW4wpYs61T2bYbXm8Kqs7XZnxPsyVLgipkaGmaf51jPnz4ts9oFDTR95iq7nkknybAu3GahTgUVEQcNpa37d5",
  "key15": "3k7E6gyw24AeGyVB7jkRsKZHkQCD4X6khWaReovhtLC9hqQLJPei1egqPvxxJDNaHJMSoAhBHxFhYu1AtmTN3edP",
  "key16": "25RaSmj25fu8TdYrWNgphxBRPgWPnHoAXRnPs5ewmNv5FCKSpt3GUEhQFnVZn7UBno2jVZ4GU681dDZEEmrtmwK2",
  "key17": "5QvUnfc6L8kVXrJeEfYLcQSUrQWSi4uanMXCvnyn1kR5TFvwwkZ8S1tv7VD9Vm9A3UgzYmpP46ibX8H2RmRMVvYW",
  "key18": "2MYgHkXP1qrpyrwmU3MvVQt8w5wKyRLmhybcTB8dhoRsT7mHmoTsJqqY2a31nptQ8e7ens1JXPpEft9NHCG8Jp3G",
  "key19": "3cXLyY61ooW7wHWBngWAZVyd7wSAaArZ1wenCV4RgZCcmvvfRo1uMyxh5zPopwYGp78KWoZ4s7FzAqNPoePKgXEp",
  "key20": "2XrEwxJajFXQztoWduF6BaB9khqNQ6psVNdJnbS4ex1cynG2LW6xMRWr2w9Nu6ed6zmzHbEKmSBtnd8gBw41ga2D",
  "key21": "4JThcRPBZ49r1V9FkdBtgQwYqbPrXn8r2zo7Qg128J9CBee6gE7RUXfWzBg12Lg1e6Qf5Usnq422KbMXF4vxgCCT",
  "key22": "61Avc4G1xoymK7PRDRptCTWwWuQ2s9NBaQR198CEjRarp9cQgJ9WqEb5sscqvQThyYLoisTzxMpdk2xVRj8wutgL",
  "key23": "iGAkYmfasT5ckjtTmzeo7ccybtgQ8FzE3dZBcmqqp58KMq52vxRqZThJzko983pV87vtc6ZhVDPuZ7ZcRYPykjn",
  "key24": "AqHQVrVaGXrYywnXhxv1qQ7rxXbFF49kFBkcv9Gtzuae5eYqEDdYp46P2M5SYi7etKg9ZXLDUvfVDcRSccfLeT5",
  "key25": "4WSqKreQeHguRGBnFtNB3UMHu8HXLkkhLcNgEw6GopmqRxaRs5eythxdqPikqoiM2NzPM24Uj3WgjVPQFoUCFzUr",
  "key26": "3WcERRLVVE9543dEcpteMHuyseQSBv2UTFkCep9yCrGxadZ6K7DFwx1vE7ARdQwivfPrCLuvmBLkhaPyJxkckCJ4",
  "key27": "5TBLnyModSbN6sEcpLAwz2iWCzQsScgq9jx2VxHcD8PkQHKiPCZHfyjogWb4Ygn4U7g2WfiTAzt7jwkpRJ7eaExf",
  "key28": "1tyUExtwZG9D5JHQ6HQbbKTews6NXUZkoL2TnDUWpZovxqg5Cxc52yticExCv8E8enck42GKraymKBNu23Jt9PF",
  "key29": "5joh26B8jApPhgqgnjLMkbXNSWC8hj4XpBysaccxLNuje9UyoMrA1szw4Ro1y43XWiLfVHLZSsi2RdH5nssPXQdT",
  "key30": "5t5c2Z9HiLjox5wLrXPjvwB2W6CuSzsZjaA7Cc77NCSFcbrvKyyoFZBg1GKQbfKX92hg8TMbEBz1owzffDtYeD7L",
  "key31": "3aYQnCTUJR3mG64XecyXKnNLxDtfxEYWEmFLKLTgBEDjqH4xiayid7mbyr8jgBLV3gxKpSyWKuYnfSqcq2dT9bHm",
  "key32": "3vGhMYaHAMpgJ7vNbVARHKxf3gRLg42yk9DFyTZeeYtAPgtzFeNFhPRvN8UrFzB7EjsZv9eJ1Fn4ckP2YLna7w5p",
  "key33": "2hC56UBUY3qnW7pnzQPqBbwYTvboJk8WGSs2STS5DaTdGPx9tnPKvjx9pmDrMwS7mcKYyP8QNo3MdcZcp4MG1zWn",
  "key34": "3UtEvgbAu6wnBwY3PEoZkDDT8DeueRau9wLUo9NwBBYQSZwe5dgnVTdrwnoSGqPpfKReaqf6K8VngBKJb8hPNUUJ",
  "key35": "5TDFDYHXMznyghoQBwBdjd6sed5fmtwCYB1ZMQHtSyxXLJpTgkUkAnjyb7xVEvPLELGU2rz2EsiGSwFNRCquuPKV",
  "key36": "4DFgtdEdsyQ4PVSWtsWFRyDmkHVXru9bXibgRe25gspFvaQh8UWKUjpsmGVT3hCD8WDgPdrUv1mTEsQ1MaZ6CDEe",
  "key37": "3pnCW5RB3fdWnSRNSH3XSNUXjQGYvu2YdNmy2pZkbzsUT1Qff4Aggitsa6UXzXAT8ECp82tBMX9grMctce2VusjU",
  "key38": "4yzmYhYRQBMukkAm2DNF3hM6bBaffyYFKBCiRdTpZ2o3TpjVTFzYeYazS3PX1tYm1ToBbfNaEPyi6txARZz9gZRT"
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
