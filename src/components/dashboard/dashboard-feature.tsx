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
    "2szK6EAoisxXmpZP5So9rLBQTe2juNrgEgduyWqdsJmaAE71UX7RjHYaGtL1dkMoZoothGmJJrsUFER3x6ccqmZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ekr6JUBJkNzrRCnRqAD7zaujkKCJ17YwbHCPWv9SEb72MfuXceQ3NyUpgHjJLPzyyTPwQPBDccx3gHRN4T7id8H",
  "key1": "5DnQDAp16aVC5o5LqWD87M7szDeNBcpRmwaNKsmCKPAV7p5aniY7s9xiefoR82AUu89aBq8ZmGExKRRKPFp95iZF",
  "key2": "22kQ6XMHdGxZrfTJbx9kf2SNjaoiuk8JW3T9x7FNHb2WdGqWNKtMorJYiBPJzK63bucytrJoikUcLcqtricPoRGH",
  "key3": "iv9DDTB3i9EVQGBZkjFNuuuhSuGyb8mpEegmmCLDtGNGqFX5qfzrze3WhSDkaiEAVsWatgFxyyRWU3M7nwvbh3W",
  "key4": "35eMzgi9JFYtTQmqVgcsxcGCJKjfLTzWdiYr4mUns4cX87jB5ofQ2u4Hdn8TyiRytSwzPMXxjGrjteNRMMT1kM11",
  "key5": "2ZSzLr1sXVRnurxzHWP5kTj2E5Pm5XGndavbRk5wJNRuwTY7F3fNpbkEdzkR4uxNAKm6xPrdXbZBoGmFQfoaCqwa",
  "key6": "3XpSCuRxisxWCknz5fpJuzoS7wSZXe77Wt4Dh29bgjLGi2aZcz3vRLEk7cFmizDrg1zu5XwMqa76xbezEL25McVp",
  "key7": "2MF7dWDoyDVKtjWpW81PVabBfGEADFKkGw59hBxJ1Ma4QiPjr22SLKdyiuUtDRGkgtgguLzf7DdM2GFw5juphQCj",
  "key8": "2xxwDXszfMe9oLeqcTdkEHnhSZEaR6n7gfs8EaRh4Ay5tXK438oNWTwpwZkL72TYvM5seWpcN3bUQrsbDyCGz5du",
  "key9": "3V3bfXx5dDwFFrMucFDo47yK2jc4dVMuBuqyc1f2PWvvHyN1pBTwrEnxmUYjZsm8AKL39TwJamKrXAZaDMJncvLo",
  "key10": "26oCq4iurCJYu3VBpCv1o57QitsZGeTJr2mHUBbddbSAuxo1i8KEq3MU8EW3aLY4ku9z2FqUpMbLBDJ4szhiEj3F",
  "key11": "jX4HfStiTM7DJyygmfE4i15zyS9bjSsxmoh1b8ZNpHLQqwuBfQUFHmxZ1mX8ECBsc2MdbUB3YC27gsCLsPGgQUG",
  "key12": "F4WAsSdqs9kygXb6MV7p4Uk75NYQEzF98kZF2jyiZcDXJoHJ9niQSq6yBnqbnVdEfNiLbXcnNrbBdHwvUXJx6Gc",
  "key13": "4xmGFAg7Cp7GkDYLr54j8caNZztG8PUkDhSvGnGMYxyZYkkXiLYQEppbKpDWLcL3pA9vHjczAyLXkZfrrMa1ub8Q",
  "key14": "4LYZvRuBKW78p9qc1QoKZ2hDQ2SaYKFq7oF3zbeRaxaXKmqubU3oZWNyjDMsiEkmhu4763FVAXGuVuMZzR6A6Cy7",
  "key15": "4oPR93MKBta9kVLYZPXsChgUzH7Fy7RBmPsaZbMY3cFndw6dC7AyXqiDbuFt7BFLEG1DL9jP3jiNCxewBKDEpRk7",
  "key16": "4htYogAAFW1D8eyiSEce8zBjYBvrKCykbnKNyiyM7XeU7gCt8h9ve57MamZWd6asoCEuapTrw7nZpGPPipaMTW6T",
  "key17": "2xykxVznyZVSJ2hpzaRUmAHa4NywinMLzYMab12Pu6t7DUhdJaqiCsC8Gv6oPXf3T22kJoXJ8wB2GbFeBto7HCt2",
  "key18": "4WeqdRqsA861CsjBgn54oYE396z7sjXwrdSRuFop3eL4pqLHSW91YrqwrRhnJSUPiR5PLWvS8bDeodY7a4FnNXSF",
  "key19": "KeRKx3ymEsvhxqt59CBBG76ywncV49tgNyyWy8G4vazLmGgi6BQKjSF8rUkE7BQpTqY9DQEAp3MxuG9miZRYqUT",
  "key20": "2dispGmFyJ96dqF4HvKYFjD1abSjXFE4iEst7gHcRUPxmGkdUkRMTbtLcViQTsCxxe1VqveZKV1MKQ8gXLGd8wkt",
  "key21": "3uVs6LTekdkyyMa6tfxpfxKpwrxoPZ7SRuHjxE3M4TwBTqNyKCWtd6ggGBufFZupqsCKG9ohjNaEdJDr7VWoFizg",
  "key22": "5bMFJwGmeSvuGF4iKvyxGy4RXxX9eFHR8V6grR9xoshLM2KA8ZewkrJrCCZNAHsYcfouT3jU2pmh3nyhG8LhTV9c",
  "key23": "4zCGk1z1AURFxDX4rnUKmqYSym4Lzv3W22RxBuaMmc68aeCmjKJFzob5AC9ujoYPFPxZ4s5b49Q7jvizxnF7Guf8",
  "key24": "5pFHJZdo5Lf8M4xVRRdoCgbP8vQ7XnCQX3YWydsXcNVmsaiETooLFUA348nhRhzChLqfLM3V7BBjcGcthApsGZPF",
  "key25": "4hgUK7g4Zw1Pj8Ws5QC8PMMqPcQLrmfGidZMNgGhFkrXxCiwUcoukJ5177b5Wtp56dFPWgmw9nZNTnKTiySZUchE",
  "key26": "5E942bZ8RPPPMutd5QyrgVbatom1GhUd8BqqvAAhZaKxyLWSi8rdJi9ELgAa82q1834nftGWJ1QQv3AjenW4RDzE",
  "key27": "MrmnaTzhvdLi5xXhRLdaSiENMJUiQB1h7UaqVhkW6WDW5sB9ANZBc3NrVzZZLueS3J2UPr7TfzdFPrF8FytCQEC",
  "key28": "4hHDiNNuTZqWGLT5CHCPzCS6PW3797YYNgwjn5w8Ji29Hmaf3HQBh7kzLy1Yc7fvcBaU56FGPgjPYHGFXJ9AmdHd",
  "key29": "3Ab4qa7824FuS99ZVHqDuCj1Ri2Wu6W2S8z7URFyDDteyJNsyXibUMfbrHsoRQwyDFStJEBhvADBEYQT7VqVPGeB",
  "key30": "4mX4SPwnXqnmCmQE4QRAc3BfmbJqhj1zNKe5zaLURSAWPTqZRbRwnU6cc4gmwzzongJLPUXWRrsVEw3o2zTSRbRn",
  "key31": "8JS1KeupY4KBmFof2wadVGBBsVojRYDCQYdgVgPMnRew9DGfCSYfW4o2P4ZGUC13Tidmr9Jo7FwHKjFtCw1ZNMH",
  "key32": "4znSovgyKTj3NaX5CWN7zeyaSX5e2D9pp8AyZAZtUVdodELotXGcAz1SWwqAGAvSvPD6jNgNr2HVe8s4Ks7yJVXs",
  "key33": "5iyNWDiHeMEX3jWaJzENgCvH76bMQ7nDjAXtFxT42fy8pFrQiND7fvh2fkSsbJYhK3qjFKo7SUjptzEhpcN4dd9U",
  "key34": "UvVh68UXFD739xB2EKe7jCV8cfEAk6cXNjN1KF9YHbKgjv9qmyqsJMwJzcFqcAjaF6HTBNoLtTCvCQWxfcMsBus",
  "key35": "3CjmV1CMHkCzHxAAXsm6v3s97qAQdENwtXymm5sL1umS67FoFN84W7vr87fYss5PekBRNSbfKNg8QcU9EYYy7Q56",
  "key36": "4xy1BoK27fGMFW1Rz8z7gPcuJnByuxMGASWTVkNncors3cMiyuGmwMs48viRj3DKwNRnNZZiEcDnqtqqgBJfeVu8",
  "key37": "5fPHL8dhULWkgs7xRPm8Yz2phiQ9ZGG2kPbNNQvJwwkGDiceniRx1eJo1Qkcre64xDPRJ8ffFpDoTikAZWefUfqD",
  "key38": "4ZWfMTUakrUhiZq7nsQmTGaKdSvFCgESf9esMZ7ULtoh4HHY2jNZDLe7dVLn2bS8GixEYVrGZ4rvHsCnRQWYXrvw",
  "key39": "42fxoVL1quZePxQfGGALqWakx2RecybkJyRKpJPpZixvtTQvsqw8TqMVNMBojAe6iJJemuApkGV2MzJNMBz7cWNj",
  "key40": "5JguoJ3PeokzF1ZeYnC94gu5ADMCgvry5xUoaTVQwk5EaHkpPFSDX4ZNdYJ84rZ8NMrYc6KK7wM2xrC5Sw3MHh4p",
  "key41": "2Ucftf5DC4bmREupTCBD22QKTQN2inTMeSpSR9NAUAjHSMBcFRZh9XFhU6newdkw4EHd2p56xxZd8G5u8pA6L74j",
  "key42": "5sZxrVx9RpHuNcMBMKmSTKr2gMiuHYoPpt5eGLzvESKngfKhh7Vevk4YVyvNPian3JyTvLQfeiNXorjUE7nt6zUV",
  "key43": "453Tf15xjzNdk93n8UMHPWovHXFQSt37AnhG4e4EDPbAn7auX8Q55GbvDh93qG6Ydmcr4614y4DerKBfRd3HbsGH",
  "key44": "2dBozLYHHyZ1BsZML9aPzuTmNUQytiEqEhbTwjcAf7bXdrLFxWvXUC5JkQwFHkCZqkBSe8j4sHTxdKfXsYLj8T5H"
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
