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
    "5F54Qcfv2FY2fvP3the6TacA9yLhhXKneqPDsDCB8FWgmusrtP1AjBNFEb6pkNWhnw2F8CbxFbJjPD9y5vihyN4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZdY4W3fD7g1RbqaAULp4pK3dhPHUfBFzhSZQJK7q2LawW86ZGRXfK45pgZQyKaM6NiWUxi1Wf2sY5qyxrxNhH1",
  "key1": "5G7Nu3fJwEDCbx8QtqFyWbSmDibxufEQ46uC87MCsYQGuKhGfjFh786Lr4FkrPBMaUWLDA5WHXbfqgWPjECm2pN6",
  "key2": "3ZUPLDt91jYVWz3892q1NzMGqfcr9A7yiLnMKnPtesUcTHaCwXxtyvXT2bpVMo5HXKp23rrqtKgg2XYrNDAFdBk6",
  "key3": "22m5onRLH3iE7AGKe6omV5gwNYnVbzWZFnCMg3BBqeGmD1t1xW3q2v9dy8aDubQtGcs6SD9FZApb1ipSQmWigY4P",
  "key4": "3oh658TbXrBy2t7LkNM3XUAq73w3oRVq6qAS4BZLf4hsCFN1LgzLY6ziBEzv3CQk1oszEag19pncN2F85sKyYyoh",
  "key5": "35ei9ktYoigtoMfih2guXkVHQvWgtHgF8vhRbjt497goPgtBcUxkHhSb3zNGAcbVNbZtFwVctqfp1M9nXSygpScY",
  "key6": "4vA3PhiYW6voiL5vqgkTJsV6HdnLUfLnVKwmBrvGSBf4jYMhmDwbijLbDdCXiuWEeKyE5u9PJ871U5Mpw5LwPGJJ",
  "key7": "2EhndDqnk37rAozMP3Swqk1eXiA2vAmJ3j1bAyFVAnyL5c3YgG49uigpvAN7vLPgL5fsUkBEvRmZ9nuRephG9w5t",
  "key8": "5JHPbXompcj8NcqKBUvuVmgjf9mw3Y4XCVExcEF89esq2ptjhmssB546giMWGpCSWPVLWJv8cvKZVFmBb151xcNX",
  "key9": "jiYfcbr2E6uCf48QageDNLX5oa4w3D5qVfL1BxetZF2CZ7P9UwTR5pSvez1CD4ZCJWgPJ369CezhTMZwbWVqTSR",
  "key10": "3nofYR4YarBNGsPNP9ZHNgvP8uw2mHnXo3VxWAPmiBDh7KxazZMSDcHLa8thMRcGJhR4wvAq4u2cVKLT5hyRci2u",
  "key11": "59fveux5QSVMep6AaKybcf1Rhoz8XmhTc3TfyKgn1bJ9F8AB9tnQSgdn3HSAp8ZYuau31GT8BviDSsqg1h5DrWz9",
  "key12": "2dkjKD8XkYATGnXRj61SU9JjQ5FHC48Uz9NFwx3oy8hfFo9WLeb8bu7488K7M6A6Gh4Ssue11RTJZrshJxNaG7wD",
  "key13": "22VfTDyH1ViEWoC8UHHpduCJBoncF3oBBmpKnsvyx7sn8qaQezDVfrTovyE5o2f1sdJM5TqgvzZ61SciJnMth7nT",
  "key14": "2AGaQgmuKB7SSzVT5rGgmQDWMzuX8HDQja3JtLCYXVbhDHYtS1YyKYc7QpvQpcni4KgtQ1ycCdu9Y4md63dxQJ2H",
  "key15": "4veTWbip8FWf277ytspPbGGjD4LzkyRtqpaJPtuisH6Ldda1fBJcf1SxWYV8EgmWRwnuoSHSiokiGVFHvLYeBkJn",
  "key16": "2Q89AQ1WpqPEv5LhuAUWzjktxVrGMC8YCu4A5xyt9dLAh8wouiNkyR3X1JnUb8rF1NZz7wx6347qEMBiR5gEQv1n",
  "key17": "4yqDsbfpKj6anh3fNTCJWozQ4M9p99kZHNXn5VETPLfTTHDpbLi6W9vRgDs89hL3ffkCctevG1GbZ8envJYzSbmE",
  "key18": "4TPAsysAp8EaAFSNirAt1C4Wa7cGo2XhMu1VoJSCofytSFfNm7evidvDLDt6LyFqqeisGhJRe1wtTCL3p6iozbt",
  "key19": "5T9CgtwTo3SjGbCzK4jQEMMR2AGWR4wDnaCRQHa8nhnjDPyTWLvYgHTrQEcBL7o6pTFQTqXMycdaiQbKZJwMxTsh",
  "key20": "2uydxAeToRYHRCtZXZLn3QeTdyCz7NjQTUVqKAKbXnNtmZmAsFDyoTTwRmmpPqModm46hBBwJF1PpDFtjFvtZ8cT",
  "key21": "2jdAJmgrU7CgsFbd7rbF6DoyMcTSMgRggmMu8KSykvRBPnsZwXScUHjW2p4qp6T1DebxtznGnQGZAkw8G65kEWrq",
  "key22": "2yuBzBEEQbEs2PeezsGxfgfanXHUg9Cq54CiEJA26V3ak3wumwCdHGAA4FtjYrLHRDt63nyxh78u2Pxo7pFFYhg7",
  "key23": "3zCKgssSyyRSBJyjhB74naeCScRvjm1DtS36vHhpNdP5nNrB4qDMiXZSYrNxPzhfKiHdUwAgR5bXBc4GRtbNr6c1",
  "key24": "3LEASLWwh8QDS3UFwu4HXNXdPXxZUsRNZBegekMR5kkw7V9mpvrF2KYfQ9S6HJpUSj72N6FEZ8Ux62VLrT7cUhjv",
  "key25": "qfc8U2P3sGfd7q8JBSoX1Ac9DzUi2M7vueTdeQnKHzRx3LzJrjpjxRRhjJYiWoMPR7BwMpxdA5LWACqKudG9GaR",
  "key26": "5NSpYTT1ZUMPWwx7nS21pdkiypz3hpjhVh5jvFexaYrHtS7YtNEjcPmkouDy36BXjtMNGU27rAU78owbHg66s6E8",
  "key27": "64veZauK5BUpTVkRUeAE7iqhBCRD4PoPvimQtKKxMFk4jtciZw8k4jzy755VRLuJQ5rsAfk5Ft2pbZsHA2aKKPxo",
  "key28": "5SRkrUQ6ppzHW5LmMUM65NUQMUs7HABSHAeKu3unzY56tqVrsT7EiP1WEen7h58zc8MJBATo1QNz8aivHjxoFwR2",
  "key29": "3JR749jLt2QqJj3sTyFRE7UnFswF8ivEf1CRe1pcP3xnsabUF2h5g1irwmCpQ1P73NzAZjmiL56MC8beAhJ7fjHq",
  "key30": "3vgHmTF1HpHHBJi6tXvPXkDPE1EoeiG6JmBai9eAef9bSWYET9RvWLy9RdoVVgqigAQB7Q1cWuFjcvFjnEuUU2x",
  "key31": "4SFoQLhUeVDgGBZoam3CnEZLr68hJj6oAanRbSpFyA7AfqbpGZQ9uL9YEo9vGgZ8NuXY2xr1dok2xpFrf73vrCEQ",
  "key32": "5QrhdWC4GpqaZMBPX6QcAJy6a3PBR5Kwr5BLR5U1AmKMkpCfyhPny77JJ6v6jHCDAxnuR93P242DPMCQcwdx1j65",
  "key33": "QcRomTarkqHicwT3BTVEvNbtiP5PNUhTY4BXst44orZNwEAjDRuNBwzfuKYNcKUhhdfZzxY4FcSXr59a9z83TmT",
  "key34": "4iddwzot8LsMV9kGaaYTdpVSBXne4JSpmraxzVbCdybXHqWnTEJdPrMJvbvNnTZAxYGupGYCiv4KEnnGk7UxD1LE",
  "key35": "3C7kt5fVRiy7F2HAG9zhRRR8Vwz3FvuchMWfxzFvUdHUvTAGp4BwxVKinw2vhoGDyywoMogA8H1pksZsRqvDiPXL",
  "key36": "5nuTAVvoNa5U7hpZG3NQCKKkWkqLxcP9zevXKCsxXCFLRRWK5ZRx3W9W6buu8rGvgVindGTHZ4oNTHjS94iis73n"
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
