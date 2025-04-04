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
    "VEkGE2gbKS7hq7iGk5nrYuPja3pXmfX1ETwNGLeAKvMuAPEHt6wQ8KDLddDaC6PL6FyuW98GPA41ZGb3EsY9mYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ks9goUC8L8aQMqD8mGcM9VB24oeiv2ez3e6A61VvGQgTXgfxyS1UqPpxNsP9zrJdTFyis6r37ka1oWttHdMPMTz",
  "key1": "Ait3DAeWsxitm6nDnURrVs5RzpqfHL4mTdhZF1TSrerpEE97YxEHQP3K6DPohMEVjx8XzwVyDxpkan9cbEu7fFm",
  "key2": "4hX6Ba1GyU3KT3xpjX6ipoSz6A49cdXN7ctFLGWhoRJdsbTijMvrizcYLr8AyxRYgxewRjbThkgN6fP2H3PBvP4s",
  "key3": "4hgkP2T8crLSXiwN16RhrsVMMMa66T5gvrUVGXQbvPF1rHCfmTDhTzb2MLLWbjtqNe8CGoza2kGKPWFsepxRUXyc",
  "key4": "5rC3ZCLAn7g4RpHtCiZEQ1HKkkzBADC5hPjak3FHQwm2HA3CvrUZFTSZMtu8XFw392GueP93SXHVuaTCn4swMzXF",
  "key5": "5AvaC49nGjEHkjERYysEUtbMeyHXrALuaYEALBYoDKDedGq6hMrMbSb5AbVL9zPrqz73y1t8ZzvYtkS1RkCAUTTi",
  "key6": "5Eh4jQzFmo5kXyxNMx3sMckTYkejFTF4JP4uSMGPhQWagXRLoJmh3Q4Hj2xC5uH5g14DJj8w7MfjBBJk1FM544vL",
  "key7": "Wt3FgtKqYHTGuRXVRvgnDBrtkNk7mFTGB2kbqYcFJ8rjAFFMmFWQFakKowdevsjf5o5gW1cQFT21Sg1K87aK8wF",
  "key8": "Waprp43nATHMYK2bq638douqQQzoxWBkxCh3g1eLyqGEHb683AD3R3HGzKDKcUm5AM1R8Dz4bNeVQTihQjs9cnX",
  "key9": "2VDEvYR9Aw6ccSYUoLm12RoVVNwgmX7b8Dsy5nAabPrrSbai1yDy7yDUYefnLcHUMB5Gn5KapMufUj3xJSX3CL7i",
  "key10": "5MzV5R84EFzwiCM6UmHJ7PG8N1HRjSAaEuM9JegpgFqy3uqTjTa6nC3Dh5xLXjajhFc6nJozkePfnL8PF1r77zyd",
  "key11": "4MW1gAh7d5mREttwapV8GWonGQu1WsCsY77Ce6pJS7Vx3cVin7fhCBsgWymT7AjL8SZaidLAdfoZCPqTqpzAF1mD",
  "key12": "4FYRmo2NJ1trHTUzFH4HaV3hNvpH8ZW4oH5TCHegJnZgKFJY41xyJALfFFC46qzxQtamUZ6q5PLQHagYnihvSuBB",
  "key13": "2LusaDvBwPMnzjPsgeikNFQeLmy8myjiJ1cqh2aZ2idj72pVhjrToZbq9aBREc9FFRNMJGEhot7sq1Rb7bKJ2ge8",
  "key14": "5DxPuxPfVnH6yURVRxhBZ9wiCg43qH7Vza6Gr7Q6SN8KzsEswWER5CTEX7G72Y99Lbshhp6Zx8qoi4G5eGdY3xHE",
  "key15": "2vMPDg3QjU2y98xjiK9qCAfAY3vwtCpnwz9xXK12W3GNRUwQvC8veDMeLhga7giqFLjMEV1ymwgnbvZpewm12HCA",
  "key16": "5sUbUrtTVjd95pkikD1CbBQvMY8ABR7Tza1q2B8dt1pUUj68Ek5mWnqPKkXwoi93P5GKiwBfo8Foq5SBWEKnX7Fg",
  "key17": "5JkKsJGFBcoHEvBL5vgcxxne4gr6ogU2umAE2KD5P2emwEA67kwoV8Mbe24TXjXtCVfjRyUgDYmBG4rzQ9GL69j5",
  "key18": "YmzxD7V2JrH691Zgfj1iCk5yVbriomYLQyqTjRfnKEWyoWgyUKew9iq75sVKnz3Sqmi7qToJuBLUVdD5goNZjEW",
  "key19": "5MF4JvbSrLJoeWiMSJiu7GtiJuxkAmJAkMt6gmA8TDqxGYfib6khjLbeY4mT3xtmQ3DFdzxe4GJppW2DJb467jxd",
  "key20": "2MpAKRrVtwnBZwVhP9G4xL6SB4GsANf5nqPjojx5gjiHPbQfyfx2E5tVTFxa4cheRA8cPoqWWgfR3fnGtSUFQuPa",
  "key21": "4G6XjDjSdWDjMQeCRWkjC3n31kPEXRxjVrErtxcgviRVkmtgdh2D4dPxNtfFvddkdgjKyVPaCMDQRJkn3NZaYQ3",
  "key22": "66LkQyyFU9MvZ7M6HCzNVB8XtVWd9UADWbVrDRNDJayd3pZPVKvjJP3ezXnA7FNGWMTMHRhLruFeeuZQ8G2Lt8UN",
  "key23": "4mMngsBJ9Cz5Bxnd4WdW9Zp4kFbVFRHFHmrvoCzTEKQAUsVDHp6rRM6JQoYEEeu97qDRyjrie5hEVG2j4vh4qnNZ",
  "key24": "zN1Ej1WgdqQkm3RTTmeJQGbWvAbLM7jv1eGMyqfC8dhHh2M5zMNtyoURggJV8BwAPHqfsBmkF6UBFV11jHQaNgg",
  "key25": "4zEJd3hcNJej7kvERq4AHVCzdsrh96bD2PuSZogx6JYytb4xgwRH8Xzviof3ZtvPsfFkWb85xmA3D4DB96ZNV1VH",
  "key26": "2ACznHUKFnxENjLkceL4BxWybHwDke7k7GffTJrEsvXfmpm4BEAvADVLJV2VPqfd1NrEUhK6XFDBsjmBqgrQzZgK",
  "key27": "2xwrHt2fFR8QDts2VQTPbFnZziGaTEUmNRnBMZWe127diFv34CDPX1TR4Ff4TPkQpM1r9Wgg8vv59X7AvvcHozoT",
  "key28": "31uhBtr1LnMctuKUurtCKV9ZQjLSFmTVFYTvoee84NN2SDdf327Cdbge9PfN8P6FwcSxevf54sS5qvjzBRyrDoss",
  "key29": "KR8HAWuL6jgyZqvru2n4wuTQN9v7ktZiRjd2HHr416taAkjyWt6EsvsfKoBPK59Md5KsBrGRVgZf4fheNBfRCue",
  "key30": "YJJ7jVuiaRimRj5rEYfADahEtsjm4dvpZDbdA2YaP1hSp3rQ4JWnCovtGnUzY2dusmcHYtRAvuhAd9yxkKhiQRt",
  "key31": "vfVcd3Jc68tMGHJAnJ9uurTrYVGELxQPiCR5n3oTja4mayXBtGKMnisv8jep8DVVKNttQVCzLwvJW4fAw3tJVjC",
  "key32": "sKyi25bexmASGXSUDma1Jv3GM2sDTi4wLnNLJn5CG1of7u4f8DKmi8BZXntrSaoBAnY17azYQoV9iepWts8XNrX",
  "key33": "2xQPQb9F7FW1TVbcJTfwrZMMiGHDrEE92VjkjQatrDaWWmvefYX19JvXsB6juDnJhYFHm1wnahBoKTix3Acsxjhh",
  "key34": "5J6MgzM9MA6mLbEgw1XBf131sUD6eisPTGkg3SWfdDcC2iKLBS1W2JdyqT1ZnbqEuZXS21352roMtrrNxVtbPkLw",
  "key35": "67FUWLUh7jxu25GFi9gyQRJu3DwQHoCPkvcFD8rVgnmbQS5s53TfDFoyke82RQAC5HjmMZiEvGT37HnqKEnrMfQN",
  "key36": "4wqJqM6rK65baquAQv95btj6jGqAHMhgevhGBjxUvNDFKdBiTq6NnLmbsBxEBRHGfqXymxVsuHkfsffCFy5g4CNe",
  "key37": "3LY6acF4L2fSAFcP7KomwwJwi6zczbifftA5NAZnooMmkimCNaWTMLEVfXc8gXpafTQMNPYJsBERzVFkKfsHxaVu",
  "key38": "2Cf8ySVQ4vA6hembEmnptkeZEhNQarthXtnm4Gyz2tgeAn4DrodgDQZ2LEygdozX43ggy4LKRTekAhS5H37sJkGA"
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
