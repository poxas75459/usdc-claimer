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
    "2df3HXJgRnnF3D6MWm8rHGsiRPCDczws1wfHwgGf8BmrumUBDVCh7UEoQGxkh7Y8bWzst2ynpDGNmcs1ES8UMcDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSQHXZXUrZ6gozonTAZDCvdG8uoQoBTXrFea7xjBu2d8sfumK844oAKRgsAC4vTqTWpkcZgT5AtpinARocAUk6E",
  "key1": "5erBbNBDbRbjaVSBmr5x4orEBH3SDPpShxT99jEmwkhF95geT3SfW3gPpHP4Ni5BkettCQQLCE5E9sujH73gpPkc",
  "key2": "5obDY2TYi9R9tD3QNK12YbfLP9SFChJ7irUSyZPTrUhRJKCkVHSJvXz48rwqycetXg641vwhv8CHPnSabZrmfQ8U",
  "key3": "4FyWfyu3naM5zQGMLF9nQqdgjsJEPdR4FsmhNRKx2VLaehRDEPpE2tZzW6LUWZQ32eBTUuUR81agvxzHJo35nJAv",
  "key4": "2uQ8KshNZxDddpPR5rWxjMy8hVHe4u2yH7djP1eKPRM6KtFXivuVFEjP6rELUsizNgAS3qoG8ezbLM3sX63GiRQq",
  "key5": "3934MQwi89s4aHQwzp6QotKDMssQ7SfwjHfjdycewUcVqUsjztox3QbjLitSW15bXLcNwPhG9nzSuwRAq21BAj51",
  "key6": "5AwL5tiiWQ8cTUgwbw3sFTKiacRJ72EP6uCLUa5LnW9xiSMy57ArcAZcSw7bQvBthS4ENEUCS2eE1BGHfx7qXcua",
  "key7": "2woDsrQARm4NyQkGL8433pvib3PqwQfpLZZo7A3xjyUpa4z46i5e5DPKrTcWVZVnsx9U8Z3Lf522QKbZi91eeBmn",
  "key8": "4ZgWHUoMvLYb2to812gpNm6QdmBZMbxNdz9cCXHjN2rxoLKKZmXs1kGjtB5k52RpDCNqK5xy5oMu3o13t2cgbsRc",
  "key9": "4XiqKoer2GXcW1uUv4eNNqcFoH4Fers7JjRh11PnNd4mav75WAG9P8uaxasookt9qMneQVhdgtooJv8L3Wzfat1B",
  "key10": "d5SX4FMehKjKxn7scL2eTiptjss7Qz2hAXuGC4zcwXKySLXEkug1CPmn7Y14ZBsaWiUZKbdjrpZiHifF3HFRwGQ",
  "key11": "511G5xSrJignHcV1btPntFBZEb1CGjujk1iFMDd3cfWJZd6xPiGokTZKRT2HYpKqBB7pqFDGd7G3tRyeMCe94Wxs",
  "key12": "9wbfvDQhacRo3Q8NNtK6orr4MHfMTKvyhFnrF3PWdRW6WFQ4g4uSdfYt2PDqbh9kM3y5MEkqzw2SgbiCReUe5JJ",
  "key13": "4QWNZLAQr7HKDpZ3Br5EePp9t936nNqwX4gpXvBJCC2Pn8FcZLL3o78yMAsUHSz6EBD3pfCaUriYFriGxfLEwXAi",
  "key14": "2JiMyYNJJhPGWsjY5WT29H5vnXUkUpT9zz7gHgvhswCrSZ6pjnmLVvFwtwv8Mm7eoqRBxsMrkzshRP1C8DPjBBQ7",
  "key15": "2qz6CkfJMtGeK3JRANo9bVmdZwwTt5psc3Ejf42L22K5KVMMG6hmHgunfRM9fWquAYLwX3VMLJMhaaEG9zavmhKQ",
  "key16": "4ZHYh8UmWuk9XBac6NF7N1NvLAqw5pUYUz1UNfvwj7Srg5VwFYfsbCs2kgQH9Q9mC4mKHDD8LcUa485s5GhXNaNB",
  "key17": "2tDX9iXKabdq7AqNd4DU5asZYfwWdwf8Zn2z5B8jvLMWdNzw9E7APMWT5br89WBzqnGFv4ArrTdfdgBYn2sXxfvo",
  "key18": "5bM8CzdTtAZ5yD9Ex881DfK1E721FC1xg9WvikiHudT4Emmjohrf8mdvKSppSPkzP5kXHcxw1R8kPmTJSt9dJsUk",
  "key19": "4nZavxuRQZY62t9nona6qQaEZsjf8Mn2MbsxZQdhTcjd9dUGeQh2KaFPy4LEuYWzcp4DbNKk25FsZ7iKKSkDLjky",
  "key20": "2Qky34U2niZJTeaumHQDt4h3hLHozMCiXy2SpaAJiqYKT9HuyBj5aiwQt64zvLiBzbkfuo8s8PHnsTxafnFMFh7z",
  "key21": "2LS6X28JG6qyKRhtn2Bd7ENfQ3Cpps34Xe1M69pduiL2XBwtQEzXfT1rFabs5QPzyHfGcTcVmb5KD2KYfHjdnJLJ",
  "key22": "734jPnc9NCwn99aXhw6R4FZKX1g4y6hpCPMvN6ss2f4U4AWUwxLgN4Fx1xU4j7yRtFjcuuqquTRV8NBp7rPtSSo",
  "key23": "3c4RgJRXwXLXFhfubeHmd8PmhshbYhiJyP7wa8NGmbZg7zwJbLnSLoXovAJwhK1FEc9dmhRojjjND3KpZ1WByAru",
  "key24": "YsECte462CBs9tdtAnKqH883SmdxNFCP3QJ4TR9jzDrE337ZzXWVx5HzezqSVJaRywpt2EFHPegdd9PN5Jf5FiE",
  "key25": "32ys2LsPAZp5iqXK9f2BMCZ95Myxg9SG7gAsvHoXLKDF2vER48Rke73yzqrK7Kb75bBd8ywHAdwYYxJuJANRGyjA",
  "key26": "nAMVYxRvjicrjoSJrVcWAbRskztm225SQE8kPZ7vmbczaJm8t23oMWrpuyJd4tJGeWhn57jXNQPpPewE1HpMN1B",
  "key27": "5pLpA7YTNFoH32GFmKprNFVd6xX7BKK1yyL8BjjZbEWzbGj1zu1SdNt5RR8xr285c1SD13tY6dgpSahKFAWcCzBe",
  "key28": "5Rmv7FuuRwUt2T4qExUapEwv7dw2HGRhKVMWZugbfuhw4GKxx7jQVKZfXgQRuz9T7dJnv4ptAkcizd5Wbhbfsi3R",
  "key29": "3pR4inZacWioVzqaMRRR3dH3eVkNCSg8CfnJj55JwiL32QZCkjsmdjwhtFxD7zphF1TczqTDnFNvjVri4Mxqvv5b",
  "key30": "i9vXMFozndbmfVes46TGv8aMECJJWP4QYWTmJVb9sSUoJfyrkuvrszjNX373LMzfVt5dVeYwRpk9v2RiGK4CJsS",
  "key31": "53aiErA4Ae2euccKzqs2YFksViExV7nUdmLjdfkiNrB9ovxTa2nFWixVVzT2WaVvbJN4gjvA7UzDSJDfMoz1dJqf",
  "key32": "kcuXh7dBvUM6GJCkyF3qnM7Ke25MjtHWHNxFrXQWGJQHYnPwZnL3xoq5hAgGcLxZPpvNHkjY19TJFDgsnjB1Nst",
  "key33": "2iVN1vvcBdb9XUMDXk48n2NefXNBa6u6NW369rGYQHi6NaKLzhMFAgShNmdAMp3ryHaWrWxCW6bPMyijb8ECfS8W",
  "key34": "3mXgzj7hQZBxNT4cwBNhtC1PH12Tzm3P6dcPtt6H4i6crJDidiX7HaenVJc42xDmB9aD7f4ZWQhuFjzzvnCDrBiM",
  "key35": "2VEJ8rBCrCUMrEis5btNrtsQ9iqFnt1ZrAzKawRhVgYKGZSchoxj4tbEKPMWwpcUfJmWP253YEKRsKjiKKAnXzh2",
  "key36": "2X27oTvbnhSDZYnT2tZU93LQ6WkxXk2Dx1z3bsKuo57J8MhULVDZ1Vh6pNWwwRSnbzyFmSPsmHstiHg7ZoHyJ5wM",
  "key37": "3hjULsfaLfmFryRjLEHetxkmrS38gKmM9wsZPEkAeKyFHcBrkAjmV53TtVkXTesnHFQh94EBLiT4bQnMmEf38zfF",
  "key38": "2kNUPGJze8jZ7Qibq3dLMEPej7fea5mRDBcRFHdccjeocxpctjM2PQNvNPsA9ukWX6p6ELgFKTwE3bwG74yvKZcm",
  "key39": "ZCuBaDwrHNBQzGixSWktUfnD6uwut36uTP9JCEupCDRTmktX3Wmi1xbuhC4sr9GWhrMkrMWQaPe7RY6eT4DwQzc",
  "key40": "33GJXLBy93Urp2hSpw2yuJAMiHrSHZad61k9EpDWmHYw9cmw8srteAnhkcYB3Qq6TzbWHjX2c6pnN71mh7U53Kpg"
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
