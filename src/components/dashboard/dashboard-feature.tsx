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
    "KrFUXVBbxwiCftP35nXQYtESsPNxFdgMdSuEZzdBi1kkyY8KwrEbMpgWBreuqaeFN3vBkZ1w7FMj85YxQDsQHM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x3L3uqFjNJR1UhaPHaJdt4gvJdC3i7u6reU62LbYfSXt4CcRZZ9LnCTgzvTdJQawFov7Vvg6DttTkvVPusV2Xar",
  "key1": "r1y84NzBpPZ3zW7uMPrtBHcuWXoAwY2UpYFKb4ZHf1vvX7aZKVNCpJkE1XFLEnQa33V7kDYrHRwLoZLbe3BD8mG",
  "key2": "5UauERYXPPFp19owPkDoxMMgL4kqyGQgcZkirWbjrnrYzFLDY3VcCra2v1Roq1N57JmyuXDpro3imr7UZxpk3Gtc",
  "key3": "3Mv7rt1UWXsBtCFT3qfCegZAMmSxRyKDwxQv2gWLBaMJG6uDmFg9z7Z9sxBDgrAdRZyVq5gPLf7Kkr4JK9nuNKfo",
  "key4": "4cK4YxeXH9EMABUnLeBgNWb7kodSdMbfkBYgg8TSvtFx1KTg6PnpdWnFN1Lx8Y1AxAnXs2YXyKRMuJA8MuKMoq42",
  "key5": "XCVCyXhozVRSo4Hp8SwD4YrAfiQC89eLLoZ4vgsXzt21nxtApBh9zjkaPfR6B2QZziuy5GxLxNaGKCDcApoP77W",
  "key6": "2zpWmehJur8CiSi7mqz1KGVf39PUX3DuEaVPNGXwv6RUJFGq3kpPDWCLNB2ZbX2rWUSugWRzwZxeqdM7p7wCurP5",
  "key7": "2vVAqDVKdMhdEv3mTxyLkmDGnXSADWUrpNYcDHEusWmH6KnJtRiqZC3rpzwHsveU9SF6dhACwXJuoKRCtSu1rQJK",
  "key8": "52QTkoqYRiVjgiUV3q1z6yVXvZoowTQVdBv6BL84VoJKVd1Ps7qpv8kRGn1D3V1sqCv82QSBPuUeFregECuYBow5",
  "key9": "3FFmNBhYiabLzkmLsCuG4D1KRfPzrQnoWzKZSq7Cy6nyvpaxmBKH4XsJcJvAn8nQppdXTsKfEi6ykEMF9ADfkc3D",
  "key10": "yRP6DQHJ3ZJAxeAjhVyvhu5Ju5ZKqm9JWhMu5zyBf4smkxg9fjnHmhoe4ody9QNExL5Ds1Qj9aidqmdj93K4hnN",
  "key11": "BaW6dAaFbyF8XE7QwZaQGTA1nMmM3bSGSotf9SByHRaXfAgbybFWou9GdsAyJnpLZBNmSYwe4Z6kwfy4cjXwMFi",
  "key12": "4hGAqkqP3pjbUwqB3exwhG4TZYh37VsTCoffZ8HspVE9YY9EWLeF4wZNFrspZgFAVk8KKwuKALqigSLZDKvm3goe",
  "key13": "279AE2xouvpeBMrNFbKGzfgS5EBEGcS9ksPMJkWJJAC9YbAKXayKpjG78rbikk1b82g8H1pMQ2c5TmLbeX9ucqu7",
  "key14": "2miHWQ9iaQwUMLdx3EyeT1UkW1ghzAb2wc5v9bSoS6eevgP2AMbPNG4EyYYmbbfJ8YiYwLxHFJuC5ye5ymKx3zSf",
  "key15": "8kKXMS322fmiNyHSpuTSC6VHmFbCjPZK6j8pW6ntPaARbDbvEDz2xbLy8Sa5JcP5fCq1BZ26U4LDnRs5hRrDqE1",
  "key16": "3whnyG6ACUbSK7UFpnadfo9VQuBTSMTrakDGJrTBCZMkxkec3JyMkq8UP55sKAcBQ25Eo5L4cRwsRjEh4hHwTKE6",
  "key17": "4UDudn5u7eSxMdwrSZ6MVZz1p6SrTSabT3GZ24uZtLEzdxRY757GYTqmedmPeuLkTbcUf4kveCDcZXwy3QunoWJP",
  "key18": "4pJpM6iqo6AUaccayhNHxytftFFARcWN2ddfFDT8rpS3BgSrVXVDkE5XkaMsX1ZY14oSqLKFSrB8jG9pb5scMPMm",
  "key19": "5BKaxgZyp1Wx7m3DbmGotNgvwCndxjn89biU6LheguPEEVMFQ9Yt9JS96rNrhAdvEX6LbUy4x9ji4KP3Ejuz76j8",
  "key20": "ZVvSi3XdxqGwFVbJpQCNgX9wXGNpcFPHsyhp7s4LptZkfKAuUzWujqF2FNjtjSSwPqwv535njnKm9tdSjUvHaJW",
  "key21": "2rbHxSR12DPBfw8mcESRgoThJVkr17FB116UPvji4uQSY8iaJURwgYfozk8NPhx6QJgYJrWQzDxF3FbxqYD6HF4k",
  "key22": "5rcn6wNJd6UdnxhY9pUEzsomUMkhUBqdut4WQk8yW36fzQo7cytNdeTkN7Q4Dr6qYASQVu6ECb73y3RbiVLCJnqM",
  "key23": "LekR1Z4MmAo3cSgKiZdbQCRBxV7JB7k6qZL3UrCxzneuH9tLdTKxJMjkqmwPyP4rNqH5uKX58NhXjXGWc2n3Y12",
  "key24": "5oTP3tFKubjpSUzif4dVkKsWZZHWjVwG5boyr1Cz6i3mBDbEWZnZnUK38DZR1ttVeLZY5USEHe5CJcRjcf7nyxG3",
  "key25": "58MTyW75YvXd95sYaa67rQHQebiiv25gGr3JjcL5iHWHc3gXrujqvfYsicpW1U7r8fSfr4Ea7KD9FCiqiHnfFBkz",
  "key26": "4vdSmp7JB7yjLKR12Ni6Cvn4iMirXCN6B2gJpbUUyhH7Lf9RmVaxZtCscZLkemsKW9C223hEHSbiXbhtpRSAxDnQ",
  "key27": "5pt9S3YXxi5wPySUUoQBHxauKh9yaAVH7ffmDZo1kiBputqmpdCwdukG2y2482H45sgGsUwFxx7TU8dZk2m6krU1",
  "key28": "4yU32UBbGSEeRDdk4awqUm6Ash2mBaDnNL7ABwYLRFcUwjdnu87aYd457HHBq1gDcrTyqWZyHj18aRzQ1XW4sSiC",
  "key29": "TxgeyW2cxSJWVGY67AAyrwK9piPMoGrHQyq86zxHSYzMVPEXk4FgBGZEP5EVryxhhX5Pf1vHtCAz4BDRv5GNw9L",
  "key30": "2XC9XQh626RuS5XR4dokdXDvJsgGBeBtCkfcwuqxNSLdi3wBn4rYcRakqqyC9F7ufYekM6Fy5nXuiZbUoDUt2QVv",
  "key31": "2ABtNLhbE1wiz5CsPAigiX7bx9U1aEinZA84sVbVsARzXE21y4yjJKT59WpCJVEJvJ9F8vUsygZmCSUaZy7qDu8s",
  "key32": "5YFizzecu4WVBME1rSVocngNxWszgu4adKj4mNgnGn4gcAYZbKTHs1CxvhxfBjkFXc5CauSCpr38XPYEh5znExk2",
  "key33": "DPWAe5srHPndF2zKjEGhSxMGAdZC1VcoLaTwQteN9AEw3wxGDx7zft7XUHfWXWH9D97kx7LUV9fnTtbtEjo9qXW",
  "key34": "2WL9P7xyfRJkhshEUPw8hAJ24AMknU43GxWMKMT2iYS5w8Xgb4NoCU55uoL7HDgShZ1Sssq897gKaE27mWXm5sjE",
  "key35": "1pHJRnn8bjteZMbjFFnHqTjBrNSS7etTmdGUu7WiGL9rk4X2LY2HD5gHbgzzi3ZVis1Q2XhVaWdG4HH2CPvvYHj",
  "key36": "4g5T26ayKWge2TvjVUDeKEsvBCccsFMeiXRNhCUdTT6qvpthc24yJ7r59R2tLMBdCZAmfe9DJsSQxYnfT2mnGCVq",
  "key37": "2espZJHyZyh9jtctDV6jDX4wg9KJ532Lgp1nAiU8e3CUkDXpccFXFu6rPBEXqqHo8WVLyD9jVwGiXMB4oefHjDQE",
  "key38": "2gX4ApmEMKz3p61ESFpJ5WJTYNrY5NC346d2WtjB2htCwAqYAg3H9A87agqLmXodA972rd9M2QAjJq6VuqZ7eoG5",
  "key39": "5C1fgRbHFAsKhq4nkJ88nCmT3iLb7S5TuNPargyJWdhUjAckYVrQCdcMxtUcgrpWEFj5kNAcQWdhdfMJuVEAGELB",
  "key40": "NvhowXfh2xz7xv4QSgpE2whKmeJWAhDWmegWE4HimmBt9AAv2GETCBSbYp6TsKXd1AAqANAxkyYRvAsxwv8FQ5n",
  "key41": "5xJBJ16zwoa5VcCcL3kwiPEhjK7YwdNwZHRL1TXoxrUfrFEKT5bog6Le3uE33fThy5hutJkhTBFnmHcRkAfAUge1",
  "key42": "3KcZdm8g19dgguN2yvCtMwPtGvGhXDqsXhgywu9BoteHCxHBj5Ttsz3a4UvqcDiBghnCtACZLjVYRdQAFzkZDmAi",
  "key43": "5rHS4V6X1Aw5Zx2nHKMpVwG5DZnaqbVkM5FHBbsXBqezDmU5qPGPS4ZWykTnZqvYPm1qwNT6DRq13ECrVTPxZEWt",
  "key44": "32ek1DamChb3icKwxVoxDL2JLbwTf7oFZnLVnGJpa5g8EnTmFfbKZmPbVEy5qgUJPBXWscF98gduudfGZiUVq7yw",
  "key45": "2EvnE5Qpd8a6hD8U7jBHoCU67XWB1qZiVtsJPoDbmXpmX7v8onNkewo5wLYPQwwaDHjBcxYvt9PX2WKPuwA268A1",
  "key46": "3LFe1rEDTb49XtDUNPsXVz6GauzE5a57qXktQD27LWrXztuK97iSBNxsCjK5QhAagtLeEjARFrRtDyvv3oPNfAYK",
  "key47": "4jAGXoXQPuvXYmDV2poyjpqP8uQAcQZ8Fqo4ttRZCuJXKcrZJQMiax8c1bZd4f3W3acJZUfquvp6HXTKdLGZBFc2"
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
