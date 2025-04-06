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
    "2VPxeXomhkHRRCwWTKmPM5dAab9ymtV6HW1vZRkPiaCVnfJN6Src6TTrpzUWRd9fmcYsvLNg41eP8PNrJoWvmoJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmXKtCfZBZkpeMfS4ZgwPmKspqoJt3jXxakF1Z8Y4SwVgWr2ntqRikhRMbiVh2ZmyResK9vd5Nz9MGYGroGdPp1",
  "key1": "23whjA2uSZcSEUSdaQCzodpw46KBEkh1vAa3skN7WnwS2GAsbPb7nXnfCkN512c3vi4ycNSLgXv78T89tdSHwJBV",
  "key2": "53nNWjsKba648yXLCXRxnhZatGFDT9vBMfTCwSx58yyMWqN8SvUbeKtnaX4PesVgoVH2WYA9TYJfvttdZns29qMM",
  "key3": "2iCmFAMk6jPk2gybeJ4nuysF9vm47aRNLVJYiJkeuxiVqB2fgorpMWpsMpRLyKT3dvfP9nBV8vHD9u7X4kPdBwzJ",
  "key4": "38voXHBrbvZd1xX8TJm5UJWPUSKNBC2xL2Q12VffHuLH7SWsy9cByoshPgeRS9UXRtWaWfRMyMWVB8WP2pHR5mZo",
  "key5": "3gnUJzL6A4kbSDRhEabgSHF7uQU9BnDBCByYMfCqTgNLGXScxJVD5bjLFKSBri7v1Mvu1w8LKWYdHywfyt6XTZij",
  "key6": "uZb9R1sHyLGLa5wNTtCzEwpfNDkvhVgG3WxxeCqGmJPMpcPvvhPbUtDWT2i3YQ8gLrZCA4javZyKsvrum3cuVbs",
  "key7": "2fCVdoV7HPh6XWLAbvpcFhRYrMerpuo3LAkigrox1Wyr4APmaemvfo4S5nXBeArnsBeS2m38gbkop59esy1x9jBP",
  "key8": "MxzQ4bUZqHNJt4kcw53dPYiRaarUpCc9wcf3jCduQpKa1377imP5QiexvwHpdhSZWc6PQQYMk4gUPc1kkJvxpV9",
  "key9": "vnc6ShbRFS9498GKw6cKYAe68uCAdaaN9oXk5QpJzRwQz8vPhTrRqz9RtugsD69hHu1F1vx5FRaxbLSVSipDNDB",
  "key10": "5GEbqaWSzrcbcUTJ3hud1FG2kSHM61GJ3PXmFGNssA8DM5UFSffnTCXZCwkmqtxg3EQtAH1YFyQNLmBAENdbLpyv",
  "key11": "4RSZcL1xkJjDjy7M3BV97uVgZnXmXGn8xZBwm1edzz3ikowrWp3dcdsw348yt4zDWhNFKzXRWeBTEvfnyCuKxJD1",
  "key12": "31EKiYukd8fymHWDwhj3vUcu14wFgxKYNDvvgKEjFr5Ph24WbkirT1JUc3A9hNPXQr7BJd3dRynSEnVTyYm17jiP",
  "key13": "47zLnRjZ43ZnUSSmtbD1PZWnwnWQ1KKrujWFXFgoShQyCCQ73nFFtHW1kqWWabUtVNU19zoqdyu78YBExXeuY8M",
  "key14": "21Tty2iaSF59ixKgHPAbq3BbwEVxUncRjWzC8S2c4cyLZY1iFWeQipZNbSuxYfbyJnz2jAos5tnc8HDPM1jpvf3P",
  "key15": "4RXqmhWqCiYxYgSCUx1Axa1RsgtBHNMgK9upHVFRhdDMua9aL8MEbyWaRFfvCbt1LccG3PL78vYpMvh3xAbZ4XTS",
  "key16": "4tCoQZWfb92pvq7eLaZpKScpASqtsxcaAJLdWQd54LxjiWW3aaPLzwxvxhpU1VS5z6N55FkJVQDu5MDQTytmZT6y",
  "key17": "RzmhZe4YJc4J9VF9Gp8Modu8N4vPiAtu1gzN86HNuRRYQswS4dRd1HBMwQwZA6myDLxnPZoDkKAte6dwP2ah4vU",
  "key18": "2HjJTSGv1Dmiymi6K1vUzaNTXG39yds3L3dkeEmB3MuZLR19DwVCf5MtUCooX2RcAHUke2XpeKryXeLKXd3fvLU9",
  "key19": "2UuBFpT5bcxeSfnJ7wiqWB4A9akqXsjYmnPBWjnoLsHNVvkdGBK1D2UCHzUMtpPoZmBABBTWMaFQtAtGyUcw4WYN",
  "key20": "4GVQ86rgTynPjcfjUAGYnmruXEzYSSCTPJSTEbLkrQYmHRjL3hk88Fu6HYTCyqrkSJBDGyVvUAzsR1J5e2aKcRRG",
  "key21": "5KT8MxVVDPpo6tMUAA7BANwC7cgz3erZDDob47b68urF3bNG7VM7GaTx4GPZrBFYuLCE4ZBSyebXpsLhLigTAgaw",
  "key22": "5K8NBzqqMt2XTUrySmijZkoZjT8VSC5JpTiFBpbMqM7oGQ1vTsTSdCbSVSs1wajPQVXhafzw5FfRhcU7hVYDWALD",
  "key23": "2m9uEvsmj95dHMsEBiYPUdKnaDUZkgivTcM8K6XHTQM4BWiSC9oUD84RnhrsLCjdbFaRpopS2Ye6iMJXrMHenxGZ",
  "key24": "3Qx9gdZmRkLmKf8Zdgm3tPET1FckLYmpfdBQaK9sqA44dSVfyZybm1E9zrXQc4VhTa4SyDi2vL5r9BzwkRCgb31W",
  "key25": "59qk4Kq4WbqJuqgNVpEM22SS6mnrdQDbZRxLhakfPjzrn3FSNwrMWLPt12GyBZDoF8KKBadgVhdfuuioyea1yTWF",
  "key26": "4DrRocRod7crpfSKkU77pMfczfhY4bHYheMBBez2o625hz2UKD2CMXUuHSE7bcFMPfSBWrJAp5rao5Xujks2s25Q",
  "key27": "2QejkcKCyLztziL43yKqxF1EWXp6NRsrMbRA3sUBoBwHvGr4Sfa1aGu3hbZWtLA1xm8e31UVfVYAVuyCbxL6vvMp",
  "key28": "i9uTjrrMs1QntQhetnJR5HTpGDQxFXDM2K6oQX7s3VNrJA5dk5GHvxjvDZNd8kBF29fzmDkJBfMtZgN75wKShJK",
  "key29": "jtys7fuAavyqhTqTz22HjBZqz6VgvFHaCcQZyV5SZAb417M6wm76CWRWmmjtMFRwfgCuGmELufxAwpvg2v5gYVu",
  "key30": "5MsesA4JDzLiPHe9QbHUSWrsyBHwpkCawi4N8URRr9UWcUJPNweduPiyVNzCYa1yN3y3767YgR75TCFdGz6PjChe",
  "key31": "4TFH8E5z9fe1ErWzWMoeUQgUHiV1QWCyj4rZ7aUdxZ353NLsMYmxJM9STGRdWok9FYJmh6372v6CjxRnmmdGiE4h",
  "key32": "63vw8wabXry1qoSseRr542ZU8UPCV2wfPhH9hMc2s6LGBRUyw5sEK9EP8y5DLmkH4fj8RLHtUDd5H4NLFnmhpCDK"
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
