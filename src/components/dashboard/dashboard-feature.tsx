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
    "5GfNk1XivcTB8UoAKQbkVBU3KFBQAi1mgboi6Rj6NsZnDecWuGhcC5nWyfym4u2T796XJLeAwhqNVE3Z9GyDjjGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TskMKD3rJHy2KoSHejwjTxujv9t2oQchhTNwhQNJPrcdhCy5V5gKU1jbvkU4uc6VFdwPiJvx8NeeJjyjcE1XSjX",
  "key1": "3m5AKHM4RwqZCNNLoJ1STLPS1j2aG9cnEA1mxq2iMUbooGW7ncVrjAyPqBmDaTU4asK1SjoT7AuGyjxrH4dWLQsX",
  "key2": "3UtaivS2pAJmHq9PVkETAjAfkQtRXUggcSr37SySYzHCG35Rx7sp3Xe3r3PP9iSyVzXcamMLHM8KyzNbAA9MrcMx",
  "key3": "2nw4FLS6qSyrA6nGSR3tBcLcLyCizexzYbVyFFTRJUHD8yXgg6rDi1jPaZHz9mJzt6z424qYCTYMUiGBrsg3qPwv",
  "key4": "VBKY3SCazkxBPT6JdBTXGY8NX19Mx5KmbP5sW7Xbq2M8TAkqxXwTsfP6dFmDstTLpGyep98uGsKvq4ksYDSQtiw",
  "key5": "3risZNV4GWmWANy8FQmWxBikA5zYNXhfDbrpqX8XKf7xnFajx9XmT6eF4AqzYwdQVjoKvwsSxU15Bx3Q17rGy1KJ",
  "key6": "2NNt1jxYJcZZzUvYappLh8ysPzUoLxqsTaCpAjuBLU4pdZYVVKLgEDtJmEyxFZA9sUxcChucavab8i8QC8jQz3VH",
  "key7": "4kodfS6eunF4PYbrbwXcosDY7JxrT1zFLdAm88eGP8xezmxJ4iXMTSaJMUntczJ2pa2xZreQqGGCMDsEd4xs1EXw",
  "key8": "2fDKgpmrfPyb89R5E4wpcEVVc6K9GThe2hKspDwPxvXVCKfLDDxCS4WKwfQWb3sKF7432Xbn3Rqy1Gmodey4tHP6",
  "key9": "5Y3u2S1pjjdQACsEfury5iM1LsfyG2m3PoyzPzJ8ob2Bd3N4bNKvzxQjh91euv8X6NQDZ52GAwPDW922kEeoNAVU",
  "key10": "4UDUPpAQqhRBeN5a4pSiiYPcZDKewnyqwCAqWBnC4XL7R4hC1XtapuhLPDUna7drKbm3tPPfp1nCXW3qW5V3Djz",
  "key11": "4CQdEuob1DCBzcR2cMEUvy2AZmX8V7diV3vwEB9M39F9ayQMR9MaFFyW5sDBTYMyDX8ye1VEPJVoHb6rx8dJkMpa",
  "key12": "5kzUWoNwJKNyWNW36SfHvQkzBhWVFXaWsenHAZNdddBAZVSESrKgSCUN11VuoUpKtEr7MU5FRt4v1ddGTr5m7bwu",
  "key13": "3xghz64RxNoucimt6MYJrkTcLxPGZPtBwmcKriaSn8uxa5nDsdroPM2sriTWzWD7JQXBpeNNeNSce893T8ucvMJh",
  "key14": "jC4zNjzdVfaGUfTrTyg4kNiZT2v5a5WjNY6PMATYcvDvBPBVMgURsSMmvg5JDF9Y57nJURvjFwr6YUPWyDXzZ1C",
  "key15": "5QxYVNLNuvquJrZJo21kRwyy3naSudSnoKUr8tK9yaoD2szexWM47n6bMycaBxr15SvyzxpUCcyHy75xyJt7Ud2e",
  "key16": "5WZ2Q7RP7RaNTp3mNeJVh2PTwAP4Kg7MwkGbKihjkkCHFCQJPJjFfuFKzagMdyYZByfaQE7vJGtVGhPsqLhbY4Ru",
  "key17": "5LbiUWCB3XDBqBErzmkXxzJQ7NJGmU3VB1hxrdzXHktZDTtqC4MsyqrG95grqS8sXRG7jjBfzXBdpEiPVhZYktg3",
  "key18": "4hajQPRkdsS75CwKVrhGeettHN1XTNZaFDVErsVzXs72ovFHNtfUk6GxDaQFHpsJ3cBSyJeWFkjd6YhBcJp5tpRy",
  "key19": "p73mpmkj5JHfgeN2L5VVUfbWFZyQrQy46FbZeEG9teEcxgK8CbhDSQ1NdyVwNFCjHnie9X7L6CTSYZ9Nf5gA66q",
  "key20": "2d6cejdZnQ7ZZaVBFznywuRztjANpLNxgKkbTdpYkwCQFmELvAksbx5ch3HUaGHrU18HeoxfMa8UiLkUgmNkZgaM",
  "key21": "2fopyAYpfyrJ4gprmiumeQG3vmFxVqd51HUZrKqqoiQAp6k2rsYgadymQQWX2kA5r9j4VyaExBSfXLuAS3kGQWtD",
  "key22": "5y94Xke2s9Ngg3Pi1Q3Zun3PJGaXoVNKYGJAde2a5ctDwZ9RjkMDMaoRsrYCEsLbzjXLtkapRzfPq1kKiVX2s9Be",
  "key23": "5DjeUmobr1SXyxZFePrnGjXBzs1PAkJm2ydxkNMoNkcJ1prEQo2wnisxNSgS5KW1aWe2kuabXZw6htmHdsNu57VX",
  "key24": "5o2XbEchfBBgkF1Z8KuTvM2yUrQp9eYYf956zZXQLBGVpQVjGSrdpjVtRafHZrRZrgGKxXYaEFZqTsE4AoUeeyEV",
  "key25": "5V1PTgt28mZf4Ts4wYxBnP6uQtAo7mcPbLeMz1sKxtJeKvwc1CRzHkPmv5P4av49uAsaimiKJK4Fem93nLBUzQ9K",
  "key26": "3ogcGnxVHh4vaZ9tC6H2rvb2wgW4iv3mwaSHZLCMEKnTLVYas2r6PnxFP9juPQExJnEJQo5BYyD3gnWPDWkmfvSM",
  "key27": "57o3K53qNw3om4mBuNttiNwYrNjz7fiDrMa2PZApUk9ai7crWukf9cLHZrmdtjFSbHvpJ8jw54LDf27j3G8RTBR1",
  "key28": "49KfFLFvZtNoLFrNPnpv4U3haHRaCCwdK56aRYDDwfuF5NJvYBvjWS6MGasFtszjScUiFC8oqExjFsoR7HAFXHkf",
  "key29": "4VCNfZVn1L9pbJvkejSBsttqFuqxWsT1h8odoGWJHjGayRv9GgRC6bLX6rdoDzNqZqYV3g9ZM2HLG1Cx4WtN62H7",
  "key30": "WGipZnaCxrg2X6tcJHGq1CMGrbqVCvBvpepwFh1fr8uXBgNu8BPfe5jwpnWSqozGKgdczxNbJPDL2fsCb3sRG1p",
  "key31": "4SLCAK8Rmf5vbY1nuzp7jkVhP83WeaPnfGyLbapAttzJdMfrUY8XL43faiEH27ztsXEyPuhNTBMhFzAeE8NrqtfR",
  "key32": "38CioVAmo6BNpVBVESrQEFrBPKwvHuPn6BQvygh4tmMvBDn66LwhCq6dCRVUZZwVZNzYsZChtgb9tbxuKBBDzsqC",
  "key33": "mLSRNTKEkWgnKbLR64aMosmjsbfmWUD2tG2HyncYHanCD929ouST4YkNHCQkRtFtjvUTxQUfYKqY9hipkMewefe",
  "key34": "tfB9q3r36scQjufKgkKvxh9phGMwPqAnFAXBZPbDgGwUeyP5mMzGLEDPUxuccr31BEqECdK4N98v4u4ZS3HqqNb",
  "key35": "5FLafHwPdCCHLdmEzbkdVQgDMNwgMUfPpV4AyMhWdfaRCUbyvUVrJA2syBZMRJPnk1RP3ReSBv1siCKoDfPgYcPK",
  "key36": "29g7bnCLrcQ7nER8a2wNabq7gLZ8V33GkVcrUKmCayjXvX4a4zuMSgHAggaeBPhp2ym39NSPq2gKbgroVGSts2Bf",
  "key37": "4o6K5C4VXvrJrA9LbSEhKCFnHfaNewQvjpzrvvkpmfytx38qBZbgEmuNmFiRtSqoGGN7m9fqWK6pdVZhkAnw4Au6",
  "key38": "4sYKzeijiDGN5s1B19zEuVDn5GjgwTDWx2BPuCAyrLvrF9zoUu1x1E62F9uiLTrGYnSbG9MMDcfDNM6nyhutHDYu",
  "key39": "5GU5hcGxPYQnrtwF2fxurm2Z2ddkcXkwhDDY7d8r7NKTYWa7Ks9xY3a4VLxidFyX6z7wQpv8VuFPRToqxQj4Ykgz",
  "key40": "WMaZfXKooxK8HFCYCwea6UHg1d6qQNh74c7gR5cS3jxUR56Rbmav6AB93ta7P7WwGxgV3Pwkme5GdtnsR6Jri4D",
  "key41": "2iSuEKp1nFEijjtnNxoRKtWd8MEMJm8fNtARtTYh5ckSugPTfSd7M2jLKaEBkXchsxTqrXZoHjFTUWJdoVP6WSwV"
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
