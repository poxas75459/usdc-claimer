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
    "2kmNWAZfHY4rYBLcjyx1rncPCBjTQjrULCYnuYQKJGbMT5jyKUFNBdSaZ2uh3zikncWHT6Kwq4AnBDodCsHTTyuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228TS64WneHk2qaVSbvZr1d6NdMnFPmyw6grXsGHdsQav5yYYjk4N3A2YeWCs1R1DmGSUEdXWa9d9nTg9ETBdirb",
  "key1": "Wc6KSjoM2Rgoxov67CpFRqZHyS7bH4amBksEgHhmtsBWfSKFWUPCinmgNQL99X2DGNS8pMsUzUBMgjT7aJEqbbW",
  "key2": "2gP2A36rArudtiMtQLHjcxktu6SGfjMQtzgQY1UX7V1dy18hKWTgT6EGAWnDnBNFgUvb29VnDhgA2aPySRJTE7Nz",
  "key3": "Ez3DpjRTQjgaQsfNdjWytMbJpkbLBL8b1RBNeiTijG8k4Xgw81qiYYihKmqYWkJozXNUms6fxJF1iReX3SpGXsH",
  "key4": "4LS6d2Hmo878cF3QoGWfehAR6HSb6nJFB3VEqcffE8X5aXsaHjGdcU2cPSyWTE5WyisRdYgNokQXJSeYtZPWvfo7",
  "key5": "4X6tfsLXnwEvbgAexTqhpsCSQDoTmsntyuZLz1Ghu6EoofoiZyttF7jWe5CZpVH3Lw6c4XYfqNibp9dzbZ3f8qz1",
  "key6": "bin65YvhFLDMgmic1YC7xAWrxcrDJuhajY2YqA72htR7enDZNAU9VC4urnFCL7q2Tb9jUWAsVBwaxaPADSRdX75",
  "key7": "dXFMNnvudLPicgQe9TYcbWg55ZD9RgnipAAWTgdJ6aTu2S7wCYxww7h3YRA7fAknegecBU4QaWdBEF3XKF98aSq",
  "key8": "3HspyJBq633SP8RjjjgJmQQAiudjSeSmCXWS3YmLwNPjkHf7Fhj6XsZtSRRNnnu2nAzEi9zxk52X7tCckC8ChRTC",
  "key9": "4VXwZckn2jEyNhPBpwFdnnUDeQHGBBxxyedRCK83M5Z5TEBcbfGcEVCKykVoVcCjcngfZQwduUve8Ataj92fBzoE",
  "key10": "62fs9F7BLBWYvkv37H7oG21dCUhJSaXB2R5U8G88svSL3GnXSUfUiAHU2w5obF36Ssxco6M1gg7ohaRtaAJjfQmm",
  "key11": "aGrGzn4LyWRzegKPierrQTVAbkR93s1fehCdXEFu3X1vHrvG9kjK6N2rtgBUKYSEWCFbmJd4GEr5ZhQK6ciJVv3",
  "key12": "5GUXMxkQcT7KDUbT2NtPdXUecLZe4VF3vKRTRuRMf12PXty5LhZFJmUhb9XhrkoosunF6deJgWpT84Y7HXixQBvA",
  "key13": "5Ug6rwcUJm8zWDtRitogUA2jUrkpR9pRK3Xf28iPGAqddCLuzDXw7NdssCmeHmYhcU8xzYssM49dtSjppEa76Arg",
  "key14": "2cs4VjT7fFmdLFnASaNB8tf2CaTwx4sxVXFnwM1MKUrnvd4hRa4Vt6VWKWtwbvfNeZRC4R2M1YW6cLfQtrAmEh5N",
  "key15": "3LzuCPE1jTz7gVPqAxU2BKzLeFvLq3cPsdPgZoNr4AhcfTPHogbiRHvLKLcd3Qv5haPKwnameqEpWU2WVFUt2Am2",
  "key16": "4TpiC5Sxcik7jXdBWB75VVHQVdP7EgTaVKeZBm9PmNGnHvxqEFhN45BPn6VNdh9MwZxGDTidz7De8EcsW7dYFsnT",
  "key17": "2R6feDXn386CUFaHuPz4iL3TkpgiDEZyChrLCKZt6L1iJMV2VdidXLwS6TqC8N59HtDoLgdFeJvYiAidWtMZRhSa",
  "key18": "3Hpt8rym4wX4NEtQGNhPhMPVJnUMfKb3RQQCn7YoBwZSrrig5VW3rw6rLSihphHf77DYy4rPvnPWJwyRANvgtrjm",
  "key19": "dnZqiBosQ5drWoCYWKPWvc3tWTBr6WpG4nav41qY1U7YMUkNnHKAKGyPwydpapdXx5dMZ1E3Vm8Svmmsa11r1fE",
  "key20": "pquUnt6WJhr3ZRoBp9KLyfBG9kds7E5dy6V29eiBz7JLmHncEg5BjoLVf212GhzwDY5iVkzt3pnrtSiX9r1CZzp",
  "key21": "47JC3WtkinVBvjMFfcXx1jZaYdXPxmVN4XFT6ajUCDJoEtcUPQue6SGFSwJu2xCp7wUWUVb2Rstfnfz7v29WxwAb",
  "key22": "21E5iQCLRhQy9LMR7pQHsPiLYdtoJ7Upyi8T5k5NYj4D9iBbJ4dm5EM8y6B5yFXRQhWAozmfMzu1iVpWybLxirXu",
  "key23": "54agMX9QtH2Vp8iY4LzxN6d9TJac9JVvMgdhdgF2eer9bnSYEYbTnqtcLWYQ9uCKuHN2s3YMcSz2eiUtbc3xph9b",
  "key24": "3hvFQsaWowKHC12MaecdqbUB5kemju6zCxAq9PikafkeRfo2MMTxqbhC3oLMpPTnNcPHt8AwbvNcujPJXgdqmfP4",
  "key25": "2sTnnkLaanKBH4yLJWVXJAGKRRZ8rYWffmei7bL984MNW3yGkb12SaqmcR1rEGXWzCmQtcdAFUrGN48d6K1Z5k2Q",
  "key26": "2jB5GZQnPh1u5jHqZW25EzoKkHrK6h6mQdwZAUjVGmVWkVWsve4BGXYdbSzBSPZtn86HHxDhqH63ZGGhXSSMwkax",
  "key27": "sNrsNc2hCo4QDFw7AGmhWZ2YoqdE2HGiiUSfY5FBcKhEPQsT1wzCwPWscBoFUKPiNKhuis2JeMBMZmdgs1DVbTJ",
  "key28": "4KrGmY84zpFNEHkKLpF7aP4XX37mP6Rebscqck4DLXhfM9V2L9pa7GcY3x6r17yqqCzfoqN25ht5FvVAa17oGd3q",
  "key29": "3ocU2uxpPZ1xpXu4U6gmdoCU7UaamgNdvKdm9ey1HuemEUcVwdUEzz1kevTxiX11AEkQuZ24cCaw12m7GTt4xgdc",
  "key30": "3mzhPYNjmZevpFf3Aim8GxeiAk1bERyW2nHRsdE5zoVizc3YTP26hsKQje64FKCesQVjoPNEdzbLMbpfTgFPxizZ",
  "key31": "32qSvjYLZGgxJmZwpHnKxhdZWJDNDMmWisuaRLauQTFCVxuCcgAHcAnstoJd7Xx3NsBk2hTouvDTzD1jki798JWz",
  "key32": "2yDwWTaSaH94ZT5p3zekqN98m3nvbngDX4WmKTFR3MLJFkRGqnp3ojXpUcYeyN5RrnskuS5AgN3VCnS1rP6TBicM",
  "key33": "2rGm2RoMKRad35nfuppN6DbhnszKE9ciHQWbANX57MpFRMChxeHfVZPAU5w4EYACepjF4RPtvZ4hxxyF2c2YGGfP"
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
