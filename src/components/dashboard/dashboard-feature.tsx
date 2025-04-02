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
    "4sLk3yA6eeu9gVynetX5NMDJaxx812S4SMUJVnxTsJGYcuo4XYmkBjEC6fDcA6ppWnfNgrWSMq55XPMJrnJkBB8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LuwkBB4bwd5cq5JmhNy2E6iHeKfCYDVamk2uRYn257iX1TQFueeLYpTBEdA1j8JGdLZpTSTx9pcPFGsvQMQ9qJs",
  "key1": "4Uqp8u8DpYhP5kkoSr1fFk23oZyJqZiKZpte7LcrdJ867uowQyoJVDV7JNJL99RmEqKCQekLob5MSf7F7g9aNUMH",
  "key2": "4xPpGxhpGiWNRsPxwXvxek8JaY4vt1ro3TKkVWXre62pCGUW9mijtLaD1dFw4vdd26bo25BChcocjUcCgsGnfcL6",
  "key3": "2WjEb2y3uqsa4zwRQ4eTo2cJtduQpXpcy12ujY7YgUYBQpqtUnzvAWQQQeXnpZfjctwJQwcnvD1EUc63rhxaNhLY",
  "key4": "3HztATMSSDw2RVirCGN8KmyeS1gNfEXh34J1Ky3e71mtVai21nH7GgfUD3gJhTARQuYJB41JLxbQaVzt9Wobm3PK",
  "key5": "5NjE9wPiggPE3S6kPdatAQ6ECTWTdftJaD9guSsuKNFdowozzUvDB8zgQHyvPCgjLGNGFqG2WQff717FCmLk9MpG",
  "key6": "5FVEmbCRdVsAKX1WGK2yFreCk7ek5MoivJKaXAba6ijEn2mC1JzjtNAR4mgQuT77X58Po3faSm3ZBn7RdCEvUckW",
  "key7": "4bMGxhZt47khnSCthuYt171CVtw5rEvF5b5npEbcJrX2JLGKi4dMJoTnjVZpieHQVUEBNNKYwpDaQ7d7Ft74UF2p",
  "key8": "2pMPiPsfgtWM5DrjWL2RvGZxN7PiymstSXu7pM12TEnpCWZoTAAYzGE6J2pm3Yd3hsTL9qjhrJDnWycaNQvpTv7r",
  "key9": "27K9zX59mmymTgEaMNYnHK96kNVhQLvJLPZNdMbuh5Wv6Pthf2Y2zHZnAwcuxaRdZzSNf77hgf4g4bf2Vy7JfndM",
  "key10": "28spnQMPUA8GkVpeyZ28QmXDVXoeuNbGrm9LZo4ZcHChbdA3pFmqbhSRcwpCXbdBeUebHSvp74Ui4Zr2xphVag8g",
  "key11": "5pg2Ru55F5D9mncFpBz3BM53zkHDqiXGoZvLFGWP1MDvJRywMEqb3AYxrLaX9BmWoKTfFb4XWgYr8wmzivzN5Km1",
  "key12": "5G3gMdFP4AhG1mQxYVqkfeyouKL1XxV47tJqe4C1cYCYMhGMUDRMZoRR2S7GN8TmhoaQCpXXyxX1Jk8dq59CdMBS",
  "key13": "2rhmK2hxEkNbayciExFtiSgv5M6M9j7MC4SnSj43n2CCyGQviL6t63h4Tmy3AutdM2Vu2XsMgseL2Jci5DqHv1vA",
  "key14": "2WvXBzzDa5zQPCgi2ggruRmuFyEiku4QfbpBBC5rBUFRnGciEaPDSuxsfW5VEXYtFCwepzrZriXaELzAdqnMaCye",
  "key15": "3R7Jk9MMTcWpgRmnFQ8dUp71BRr1S5xsniuGicF421h9b1yHWQ78cdShc1RmcvZUY3uewst1iV9pxRWTVAmUCBsi",
  "key16": "2e7fb47to1pW2BuMSieu5dvkpaxH8rAjg4tSEAhL2HZFoBQNxXYyQfJZsXz1fhQnJE3JQ4gWymdPcsxjDX4147Nw",
  "key17": "474vYRUCwEYaed4DLTSmPTNe8P7JxJrc4ftFtypt6dN1o3Qr7QeY6dSjPg8TQ6jYxjFoPFTojXaFjJBzgPLeNNNY",
  "key18": "yMoa7KmPV9nzJ9qjZEJNTs9x93oZPbG8i7xAe74DitVciGAJCWUiywkyDpC63Kyt7SEjLAQCVHBCWCL7wuJJ2Z4",
  "key19": "4St773mKDSLAg6QQZn8PNYgvAUkRQKetqjdsfbcDnzThr17QaBuw3is6tVq7xYdw1cEoh12EFcQSiPwiAkHp7KgR",
  "key20": "R6sQYHf9uYYnQBYJHTMEPgB6pik3RU814wzbc2fzX22hK5T77CP5c3xdBroeE5aw67tJ54p3AvLP7GBBYskxsKp",
  "key21": "XkyGURPsp76JmKSZqL7nXVUYQ3cMkV4FgTHoYU3U5wfmJK5Y2ppN6UgQhUbUSckG6AuP4KYA98vTWypgHcnB3bp",
  "key22": "3EDxPeY74yuKvH5JNo8q6DQzyPT1vgtSSF1yZiHc6NN5NfW78DAcHMSocHr7Qunxrf3BND6fbxB4h5HAoqXpCDJz",
  "key23": "3PbFmb5gjt3fPqnLiyT1eyZnVygpjeKsfBVSm9LZh2pKdQsTJowQZ577X7VUwhjurqh9oF34cdFzVfvVyi49iSbo",
  "key24": "5dyEzARkhU3wJmp8tJB44tagGGMVcuKCezjV39qK9odNHDdRrPpZfmuBSgwVn8ceM5WEYRbfHR1pBXJpxbiJGWwG",
  "key25": "29pqzhsjscCszjK5RomLL3YevRcAVgz4mv6GjbX8zvZV4d576QRJGeyAHYdA2qntbqSb1jQsnxu6jFQpEHe87k2t",
  "key26": "3fDPPEBtagS6GgYuzgmkPywkbrDzj8vB46VCnU9s7ocYaNo4Gf6ULbmvvxfy459k4TZm7Z7taaUFtNh4F7BcEK9u",
  "key27": "3bDKPNfTY7qzS7VQJjYrxBaXoGV7YPeyhNd1D3v7WhQ7z2YygHJE9W3Lmw1n59B7ZupJHk3Nzd9VTkwwdAV4K2i4",
  "key28": "2GUmch5DpEioLYi952FCjr7PrQn9d5Nx7xHZZUVtpfpeihzT8Hpji6TpBisd6uX7Vx9RpC4dvYDz7vNrSHZE9nUz",
  "key29": "64HWFnnEqUtAg491rm9QZkNhqotAqUzT95s27rAusDeSdvijk2yp33R68VerRXwMeV5TS8oNNFoUDYMDuht75Fsy",
  "key30": "539moYeXxiBAEd5BhNMTPviirnhD1TRsdg5i35p2msPQ9KaQimYCEinTbuNi4sv5W1CwfrktkJJ6Yzpf3ZoYmuys",
  "key31": "22v1k9qwGgNN5bzAjoPnZLEcLLmP8JGiNwXsg2r2umnLorZ4bRb8YQXc6nmKa5wmSZendXbKTArsrRR3HsFA8diZ",
  "key32": "cr6G3jbQRbAVXUbkYgw4UCdf1Sw5zBeuHbtMts6K4XHbkwpbqw3mzeZaqpQ3hpXDtAvZcAN5nnoCNfdTEfGMFFm",
  "key33": "FUumde4UC1TVhuajsD9r7fz2BjZeEF84G3stPmBNXvexZCD1GQZmCepEJRd3iJ7JzS9HhaGFpxuCvs7Cc89Pu6G",
  "key34": "Xd63iq7qrmRnCkH3DFHWY44eWHTNDZJ2QgqFYjAZMJRkM3mzkfR47ognPaNfdBTsF35i8BvvZ6BTYSCizZc4CbY",
  "key35": "ff2Rw78eEn9NF5dUGFDXWTmnuGQHcMWHLTWPkLo7Ewt4zHnLnCezVXbybo5FBsmWchNr3j6H2nBGBEbPTBvUUW6",
  "key36": "LP6BEQaMYXHCKwp8YcjHC1UP1f7qKvqsNoKKwbF1zcjSxwVNMuqGoccTMDhfS6GKXqeR7YmQDdn1wjLqbpRQWwv",
  "key37": "4GWcpL27uGd1zzux5ebwCTD4HDigusBMcdSoUA1jKnbrFJy6B2RHXZV8GJaxPaNYxfximwTLELhwSwG25rQxrpX3",
  "key38": "4niA4RAaa9y9H6HmBuTRLk9qQVroBSA3phwn2vLZKdK5epWu9rRS2iieRAPDjxg9JUgUZeL18YJk4tSUkxL2xiWB",
  "key39": "MjwsFAr3YBEzfA5madweAnBVNUB1XBreaziM23anTsk9ETjP7ufyUqWj9SkSd1gnA6iKW2kj9d4fQP8166d2Mfr",
  "key40": "3v6LAGEH5xFdhf37QozbxyScjAHoTFZiVecAzW3deTey9WA21FbP1zVXLitg4GPhKkg2cpkThK6y1bDfxLdpRuVp",
  "key41": "4V8r9zb2CS86rK64K1EdPujaJTCR8QHAB2df2DGPXd12DuCx4mP5ZELbuuZd3WZ4EueBVJDs2i6qmpF9hA84QdLT",
  "key42": "2PhaBsEguE2u1zB7kDPa7xK66QwNR7bBCUx2cSCD2o7vbiePTaUzHKfgMBqu9KJn7Cuwi3oTfg2UgW3zDzRkAUK6",
  "key43": "41Y12NCaR3Ha7Hr53dvq6f2LoYSxvnBbXNX4bc58XRN6pibrEyAqfezJeyeZnrcT1Q2x6b1QVgYvEWaNoHsPQ9Nz",
  "key44": "oEWzjZS77oVQgxddLkwaYbF5Jk7wvvc3jcnbWER1k2AL1HrJHQNaAGvoprN1ARyZ6aM6TdYX8eWduPq1hq7Dr7W",
  "key45": "3qyTfN2pVfHepjB7dx2eZbnykbTwPgwk664H8RSNuDXHc2qjkZEHWZoJXLaMzsoMGaQzUye4GEGnzXrJ6CrPdtMo"
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
