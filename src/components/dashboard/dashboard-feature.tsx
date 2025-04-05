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
    "JnoRNq2tPmmV73KGWJEKwbp9pws1EzEMoqpL4quxxJfCoKpkyVvJv8dEqvJ2zkvmmRWAKSE7gc18Z6AnBqBPn51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Un6Cg2x6gUKKfs7oij8nRK8Uv6Fvv5DPmn8rpKtpv54CYe5tcUqgtJJNoZyH4dUfQpbua6z9SxQCbCnMC6qoGtT",
  "key1": "4kuQdurdMCE3NAjy2k383LJFui2K5ZQecE4BmwiRLxugFU663tV7KcV5aeaZEB16nZ7WGAy4teDmYpcThYk4Bt2G",
  "key2": "3pQCmdsse3HcYtdZ4rDSkUeez24jAj6P45tkxy64bTf6XdoaPiAEGdqJ28iCz5WHkSEJ49ugUXPpjiyQuRw1XfkR",
  "key3": "3pxTqxXPyW5Rmzxr8i6PBJNy78CvCVQ6KsXnapgEkov99dw3VwqSZQguSZEsPE16vzFeMChdyM77RemLiFfjjqXq",
  "key4": "bbJNEiuRpb3nEqSofEmU6n7SQ1aPczex3Tp5UFmscu7x2itWACQyj33pdxMfXmupaNagCybbcAi3SAdfEBSd9c1",
  "key5": "4aDezDUXwpRxzLavzmbevzB2YmAVpVY8hpFYHgHbc3FGWpow1nwMg9PSNVD2h74nFk3jQweCYf4VU1Mvzxc2VKte",
  "key6": "49zkh43htVMcVf4wmUzimvYvQVNq3CyFgVVEZeFi4AkmtTuFt5skiXQwrUmmoFsAR4V2jLb2EsHRKFns8AWBRnsT",
  "key7": "3qyALfzxbHpk6KwpAVaSTN4K2yDsFBiGu8tmZQUYrShvzwGabqDysfG9LFG79LiDc1ro9L1co2miVaZBHDHCKfZV",
  "key8": "2aTTABjmCmuMnGxe9T1YCxccwvrPitXTEH8CMhDb2zMPHcbPYRJPdeGqXD3RWn4UVKFJXKWmirEWbthXwpdvr3ZA",
  "key9": "Rw4NgZrwXmzj7F2yUjjxtGcMNdWgCwNZviRLmpHnw6rJztDnZA4n5Ug52YfzvbZWiD2qV61FwMeVpR3fPvZrjnV",
  "key10": "3uULZdTkNGpELpck31tcygGQwr8LzoCMZpz8LvFHefcs2zzdhGAo71s1o3cHLqfYRfT6kAFHwJPEiFuVE4BNkHag",
  "key11": "2tnowmTkTUPvCqrTbe2D2fZDAdNLiJHrmJ1SeHEpRSnvNGkx1Qojt8me6WsS6LwkuTws83fCaLc1DyCXjB5oqpaU",
  "key12": "3moUDmiVZSqdnkQkLowQisA37sXioMECdwoVBD7Qgbn1cLY8A2LpaYU7CxVz6tfUPDT5uM3R8YVnytBfs72XKq4X",
  "key13": "5WFMLttUKhBxQj5o1VcqrGmemHpzjD6yYE491ndch8kNLvhMJ8DzJXXLJwqRTNFoPz16nAazDX5d81U3iUEi7USf",
  "key14": "53mtkzDx9R3rPs7Puj7bqCcsN4xjoz3kpeZTx24kTTXCbxN1CKFBqkSgjETV4MG3UEB3uiU8PiXPpahvfWhxPVsa",
  "key15": "3ZXP6uqPc1JvZygSwAYaFeSM2E1rq6JEg8d7AVEcyPFMy1oWowa6SHzhsanCYJyfFk73quafSEKv85NWuUoPSPDN",
  "key16": "4xkNhUSs7MRYbQ3QfW9pg8pjE3D7V3eLZnPQnDsqjW1Hd9KnbC8s3JNKsgwuHxzSFaHGVw3KJXp4a2hrp1zyZ38G",
  "key17": "4SeSzftsStwsTnnDDjTXXVqEqqXXTjJPm5W7hExfFcURMPfVroqtogcTe9AJLRbvrABbMP6bmM5pvxogQVoWxNif",
  "key18": "5HdXHxjLaVnkrZMvHCFouVnuStJ3Mism7ZGgnB19SgRYH4im7vuokyFxqomn63DLuL5f4JsTZBePsQtUFeJexGU6",
  "key19": "5TDfkR12BxG54aaMF26ECJ6f75vE8ukoW8Us5cb3amhc6stJm6JWHJjJ5MHjYfSV8u45EVtuee7nwMGYqkK7zAJf",
  "key20": "4oEA9K3sHqPvuK9JJrzS177JmYyyXpmsiKCZVf1fau9eaKf85CRvap2ypH6fLpeH4gzy4sEiLsMDpnMHmJuPWxai",
  "key21": "4JTBcTPiXnE3MCCUsCbg5hCVjAEeqWhzjUwbMeQdRTi9iH5sFr8Bj8BxzwywTAKzXCwDuh5ofXEpP2RQa762YiRR",
  "key22": "3gSXQuSb9dBJXY6xniVzUDAMwaCVdsysBkC6JMBatVeLNohKNtyniTrBENUmzwQLrmB989ATMv4MHZ2P3XkiEecy",
  "key23": "5BCeraFEZGAyxNzALMh9VW3NR1GquS8X5mcKUomBG9QbmaT23W6r56PPAE9uqa6rY6YMLm2VxnZKNaDZ2T85dgjZ",
  "key24": "SduZKMH9xbuwxqcjn59a5Rp1JGPgzx1CgtzxyTKEwaj9T1EmvGDa9D2z6C7EvXhFwrnAH1WLNZexV9Qn3h1u9dP",
  "key25": "45nchFVXDM7meYGD7TGLjD1pb59JjWjcfqLUuLTU9WnjWDTzZsrStmbhKtKgYQv399TC7bbnT5kxSjpzQUF6gEk",
  "key26": "5bWFLVeWMGwbW4dQSkGraEH2Ly6ss1GGmcdKEHA65oapWCAfM312RCCXGsqCn5ZYYCq7HbtVF8pRJKhgQpQjeJAu",
  "key27": "5vtJYhdhbGB6gAaUvmS36c9JMALafmsAU74NkCg7kwj3RXLr44ceqUZWKnxdFXY6EQo9xbEcKLrwqyZnwpCYRfmB",
  "key28": "2TR2NA9Et7A1VSH5itySGtUisNcXG5RYKGDGj8j5czttBjv2aUesyZ73Jz3t2yMwDE3pW1jLSkZPPQdWCU7kGFr3",
  "key29": "4vSJEL2Ct3kRxjbp1Y22UWeuWoFdKzR7wToFey2BaVpast3vBYVzJN3SiegfhzHM9gTXjCYtJVHyMwFdg5eriF34",
  "key30": "obsgkr3h15AefsnDvs1br7auY4y9wRjUJxkp3bBBg8pdY4MLhmsTY5tekhojHFwJYa2HBuD2X27vjP6wiEJ1f5u",
  "key31": "5avaX7uVCGrqnvwTbndG9N7TDuPkncLQqfGD1g6AqhLi8Lo96eYeAcA6BUAcW9bNDtx6h6xer3iXfCS9sNZi1kfs",
  "key32": "38AzW69kG4Ts1b73y2EV9U6hVTgAfwGHLBByBDDwb23uTEC99PUmMXZdh58wjtDV2LNroSVfGaBJNmFPAKRbu8Kt",
  "key33": "2iWCyWMTLTYHLAg6WmhP1or9BYLaFvKTvpuicJ6YvLtK7bdaWYTEVWdhNCH5BLeWE3mKWqEn5mjbZkSsxC1tjLrG",
  "key34": "2KeKvPYu8R9dUSMvdXzmV75yRfr4Bp9LFqCJwcWypQMyyr5AFczNNyrUVuXDEpgvFv2MktVD47VddNL5YwHKgdeV",
  "key35": "3jP2P8iMQYmSYBDxZD473aS2Ag8YmWKgBQWDbq422CovhFJewmD1QXaB1AcprRT9aVVdy4pEXMCzWT2GeE84mBGg",
  "key36": "26jaUouP7bbrBVdZjLDSKnszcMEEVno8kjDhySKDKMmWxuXew2bLaGcqke7Ld7c1Wy6B3hPMe6NMDLWoCkYTtd5r",
  "key37": "3PCNcAM8M6RGes4n2fJcnZS1aphbwXb81UH5pMpmDxZURLeLhZ6VjATbtA4xVLDmJDhwCmomFDtKqtyqTikGUyz9",
  "key38": "PyQbx1ksyccDnY7mEPbfRbdjebZaECNCoZYdNVStM1bnvEENUdSuubd3bnMVb82M4ED6TgWgyYTr9gbsA5pY1SF",
  "key39": "uhmyJHfHvkh5Xj8vFDQQ9pYv98f6r374EsBoWwdMUiwWGw1MFu8Ki3Pozh2nT7HUZLCowVA1D9bF5eiCJbqCkGF",
  "key40": "3LTTyhKfDECD7eKEQKpJ9gG1GEaRahSQTLkGPXL7p2LkDZqo3QxtAzD1hv2ErS61ov8gnPbJEmBKahhdAQeQUDzW",
  "key41": "252c7yXGT1TfaBcQVTWE7Y3oEhDi9SH3uVpGB6pG5DwWdjUT47rxp7qzMQ3jqU2hZjpsX2yvooG8YoyuKVKzWCZa",
  "key42": "4VxPAue5YV36YT8V3NhAYZXUK5nq5SHoaSsdyRqPw6bp9AQpyKxedzzEAc57yzK6Cr52PFcZuGQJpEDNB5NJhAq5"
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
