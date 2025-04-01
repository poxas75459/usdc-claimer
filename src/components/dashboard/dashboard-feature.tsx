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
    "2Pg49tohQTGAEgNGkhQTZmaFsjCpYY73yRR91FJBA3saV5ESxXaQUTAmXR3XCtca77xisSo1EiXPHcrgcRowKvJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jbFwRxbEtS6ccuhL2ceKDx3uiomDvU4NphoDR3ffEZRpqhcSgKfbjChoGcQaZgojcqBH1YSgBq6tWLLHLLaRMH",
  "key1": "5GdcBP8tJvdPabvGB7u7LBhipTFCT274fu9zChya8ds5xYSiiGe5ttj4WJVcRfZwS5yJw8YJaNSsakUHbaaHDLNf",
  "key2": "57AgMy6qNpSf5iWsi1jTDbXiBHXw3Lno1pvShAEM1pcc9E7x3GonmtjVSGs8ThKqDF2xVzsgc7YG28zL3F9n8TDj",
  "key3": "VzZ4YPV6dcaDj3GaPsF9UoHDhXVvME9a7ijjjTMasAfjimBvjgG3PaMKDAo134NWviCZRCNuuYQ2TgpBv7zLgUe",
  "key4": "8oPabrg8YLHkM52AEC7LDw3ZyHJ2keiEgpJBKPBhvSoUXKLF98jHhfkxHh2S1LEb1vWn25wXn55546urriMWhsi",
  "key5": "Xm55nrJ6XebdAxUXtVnUMVARgPNpxReQixKccqAmbQSJ34Y1jKetGsbr9ghh8LKaCa5xqretg9s3HkVaVdzzEgD",
  "key6": "3K1CkUNmzUkuhUvCLS7EyVb21UthjvgXoseX17YrpxsvwjhsFfFk6pSrksxwPPx4yYhRFzGmpv8Hh8odR2FyKd6J",
  "key7": "3hbpGBtuLLp1QyzjivGq6D1GGFmwoffmp2dAu4ipch8vD7GXNqGSNBPJoZuiLiUTWDSBYZFzZJugSy7ASpqLBwpB",
  "key8": "LRHsNKcTKxLL2G5Axy5KmNQTYyp2czQsRxeuhWNGB9vf18mhdD153jqgZdN9cEUmuwTNpfruWmv9LKNLZkQ5tK2",
  "key9": "4iKpo5DJWMWcQThxScuMa45EQfdY7bi58KNuy218jus2QwYeigarCZmVXBBbTVrx5mX6E8rSq1KQWknxyejUghuV",
  "key10": "3Mv8qWUVrSQjqS7jhxqPfjrU9H26BeguAa5quEYWoZPWqLgTunzRsGQfHvFPsmKugZ9xasJsVHdGsHKtwhW7mzhX",
  "key11": "5P8e18fRgeS9Mf7ZM5Bs44mL5xpHjnZw9Zx79dgMZiYKbYLfKa5mRxohGnpe9kaDWi8sKRzt4VXFSL5kpVZE71a3",
  "key12": "3ZgeiE15wAJU5TvZFzp9PQP6zPajYvGuag53sebH1LczQfHJZvXxqTKW79wbRShGmPMP3WvpSE13Pi6Z5iaQE1GJ",
  "key13": "5n2HNGERNvDdndDwZqo1E5fmaC7sTqnYaWwxVtC8qi67WgxDj6F2vK443rz68j4Zr7Jd2tcKuey9KKk7PGGXy8jE",
  "key14": "3RC5ecbLyaiA1awGyNEY8HGztx8CnvXuZt2zpRrHKQaG7VQoANSSmCGb8bVMz7mWy1rDD2ess51RSmf7mJWnzV3y",
  "key15": "pwvLwb4BeUxiBnNnPG8LNan1PHUayGwn1k9GFJvWAaELAyexsK2mUhV8KsutYD8g2oRomsJKjzYo41gGeUN29wP",
  "key16": "3VeBrGTGSos2YhQzEVgdhx7bppUkE4RhynQnR32NS22Y7M1kULMEWxCxc66yq7s5daXpQKbAyiZnrY9pLb3ifie7",
  "key17": "4dyoT8rv1sSn86BPoFYfNii3ibFnkR3VFp8vZ8FimuaeoAtuiNQK6nGo9Xumk7AJgc86yX9jYwTm91DZyd2EZPVf",
  "key18": "2xdrXW5iTVCzyTCWsPqePee94sdpA4qzb1agp1MMUGSjmCf38iBCcZNqpnb26CFZBTuQnS812GjpabESkbyArYcF",
  "key19": "4bnbZ41sovmZJaMwykeZv4z1vSjW2mcVSeEoNUY12cnmKtTWWkF2GTtunGxpfKi2FrhwX8ggCs8ry6DXUMmRRCwK",
  "key20": "36GGRcHyMSpU2t8p7ELqHz1nkk8sduXsZYD6oJS4pi1vwkUiGEDeZWAuEXQfi9GuoRpPacyfzW1SHw1YLPd664zF",
  "key21": "4QLWrFxKS3KZnCQxSY9AEENA3ZM9Wo5xVjbAGXBoch6pfcxevd9Kw21ZCfhbWanEnF9gZLfMQTbCQN6bHvS3Mw8X",
  "key22": "54RF9te459X2F9H31Vo6VV5xk21Z6rsJRi75p3rmaPdgG2SfJ1T8zVu9q5zZ4p9LWeVeb5oJi1eUnq5bMJ87DMS1",
  "key23": "4CYng4dx496DWgQ63uWPmVp4UU5C6hY5bgQot253hgbiAwVXMxU9a6LcTFAovdmTNJdjD84XikKh2LsS97i4Hb5a",
  "key24": "5nj15beJn2AS67Vn1afseXBSxSFkRErhJCWkVfQjcZC6ugvqYX5dj7GcA9zXbywNLweMnsS7UgVBg41vMijRgubH",
  "key25": "5X6HsJ7kE72mb2GMoqdhH4eHUQjQ9nNwhgLfdCV3vQvaoWpBn1Stoz7Vet1FrQd5VC5vPHp6FBm456bjeroW8tdg",
  "key26": "2atsct4FDehqQRwni2mPDtBSuhMYh7Pog41LE7m2KU2CGYJVorQFPwoGWaPjXJN4frKsKAGP7rb9MNhzmkMoo1AV",
  "key27": "52i1TMd31rZU4Td8BwH65TUWfc2uM6sHnfHr89BG6X5cVgCJbBv2qwEcYfXEz5Q3JV8VuoJg7Qeo2f2AqxXVVGXC",
  "key28": "XLFGyj2KoE5nNLTevqEFy173kcZxkttQq7EQa7Gcg4psVUmrj278CyNTuxXY2t6LxX463ZNuNRoD8o4RoU793xU",
  "key29": "2FZarXoMoUneaaX6bBULpSuyhXnDGFL2MxuQDgb5TuMuXNFVMZpQuzdTBUV9Bpftu7ejLzxKJP5N8z6fGLfCCLEJ",
  "key30": "da1kE9Z5Jymc9DhNgrEiKfm8pbVgishPmgiVAcxHd8hHdvzFsoJ7kBiN25ojUe2JAxCS1wWXwKHipjh1LTLsiVA",
  "key31": "tCWovxpeqrdKinED2EWzNhMaEmBWmHHtPDepu3w8jqnEMZWi89fCQxbqM1C7M7VGh8U8UdYzV8gyEyDYtABFMgo",
  "key32": "49rPeA1Mm1bv17HySc46WcT6m3iF5AzYKgmjUdSunqEJoerQd3vpAn9sjZRhC77AYn7udy1asndHznrDGbDHbkTW",
  "key33": "Y7xDcRv9uobuZPeeAAxzPjSKYD2G4bUhANT7JHX7ub1UgRADweiDLwwaqc2nF8E7SzTLky3DCv1a6VjJUQiCmi5",
  "key34": "2Z13Duk5yjPxmpeucnRWHiZRd9ipSHLP6uQ37ixcTsFaaNd7oYff7Brd4Edy44GNtHBnWMDH53EgdG51QZ2m2K5v"
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
