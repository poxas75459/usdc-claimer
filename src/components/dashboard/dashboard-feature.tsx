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
    "2mfpQzWjAUU7EF3kgD2VtGg7Ek4bNuf17JkJSaUonZmUGNNFkMVDPxFtip5D6JVnmAY9rMfAqXb33zNQWRLiLPmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VHAjLYjYhM8B8iYZSQY1tsWA3HThFv5BSCcHYyEYpbhe7i11Lwhz5ecUSZBD4zPiMcYzKR35CyaXCU5Vx4GNy1x",
  "key1": "S2jLpLWpKtBzFmYsq16DjrjthYQ5WUH1C27fLXCyDwcXmVGZQQ3xNJq94o3WV4wnh3uAPMTRtAi5mAfTTq5Rczr",
  "key2": "3tJawH1uUneye6on42vNxf86axDA41y3PpGfwg53nifcDtNmyyDfWbUHaTVyuBTZXUkNnnoyWSGPHtxtxkcmBano",
  "key3": "5fhNDsTUCC3XeCGXvrxSjrT3MRnywYuPnAPgARpTo1HZpUt6nQqQcFLEf4AzN4svQ9WdiATgTjUKUJY1XEeDMDim",
  "key4": "58EHdBpZA7kVvru2XhWsp5WCVDEmobAN5CkxCXsPnVBt5hWeyqLhcAXTNTyUWBv2DDHVKgZ54pCrZDeZYXRUYtLH",
  "key5": "RMfs7YgXshNR62jBSywrxw5B6XR7GphfkBpfrNZVdn2Spt3SYWJhJTuD9tFx8AoYE1WeGa6iUJjP4BpWjDtkz9X",
  "key6": "3C91KHsi9x8pRN4BLCYnJJ2MPx2iQT7E6mAr14kfr93S645wd73EeTuE4XvimRSL3bRRceqN9TxqN8pkkYJhmYxQ",
  "key7": "jzHxXT1Xsi67XYkKRqKgZpi87GnR6sHynQUxB1NMJLS8Fe1MxadSADuQJKgRoq77hbWv4zRKPJmkrfiso97cPiQ",
  "key8": "QEKgQRoVcYCM1q1gbbdeVGFS7YMekgK9nXX2mwrujyVTEAFyF8fXGBUKrMB5mNkL9hozd2UioEmhxCpULbmy3bh",
  "key9": "22DN9BFf299i15YJC1tXYtKZFz8dpVp1S4E6y5ry3bsDmTMNRVUy5CAbwRrMHXgbUFXC7GNHjgUm1kJpHZsLVHWw",
  "key10": "37jaeWw655y9tCieoSeX8HJe5zpXZCZCmjERNt1efxiHDneJC5vMw8nCYeNAZf6yritunTJWrLRKGX7b9J4LXwxp",
  "key11": "36fdA5hMXBfBR1Ra6uVo7c8gnER6SymMDD7wXYK4wwBfvTgJuGiPac7rerg7VSrHmdQEkjbUDMnpzcAjqoN4KEFd",
  "key12": "5YnHq9YqdfNKpCP3StNG3RdE96CgLrBeQwX1YAbziqtyhzRF5GBP7gcjZ3sfZtwv4CkKot3LobEYQf8EQpq3i5bS",
  "key13": "4njzQCiiLXrGCYuj52qAk3qEvxtbTUz2X7Wh3jXE7oZWA3UyGumNvwrQuLeDGa3Ga8H2NPKsdihZAnrtPoincpcq",
  "key14": "3GdGsyZ1N7oEnzcDJVrLP8yweKhvjFobBTbGr7qQ1Gv21MCdtLw1s8hMmrt32Mwem642B13YMpzvbGeDHTNchKn1",
  "key15": "MWr4yZLpYm9V2KmzDqdLgLgkm7BYGhaw1P87ye45NWpLWjmKyBQ2R1GAJGUq4BgWprSgwsX98pmyNSEJ5wfKAPZ",
  "key16": "212SvArwWgEPuGa1ekUbsQyC6QT5jAbgMcVVFhs5eedBL9Nb597VseVZTttGrUapoY5Ug1vpgm8PZ37urzoBuBky",
  "key17": "3crW4QqtdMZCKYZqiio16BkjHzCcTQrw5N4cgWf1TmAzbVm16KNWaDBFUVBKm7XJKtdMYumHEruD9eoQdTsHeXu2",
  "key18": "3fy8aqX2u5rEUxVLMYUG5Nsq4u1b3XJnPZorN2HmAk9BcfG1GDBAKnK5FLtHWezHyo8FgHvrXrQjJCohzkDrT8NA",
  "key19": "3kuLJMPHY8aTDZViQZFWBh5pgXmeQvnMYL45vLcWSCMdDbHri8PnuiqDgxGTeyc4fukLGYEQRB3wEJ7TfLKBzayL",
  "key20": "5gXHWiB8rYTvcxDBWsvpZahWtstSYj5qS3fqzqotDNQ1VPtZCd57Tf2WvgkNrTPymznhDsacfXt6PVgV9mbnmNyb",
  "key21": "uHuiFeiBBVdbw9yagC53mZ2ParpAAWKu1rWCvJFTWjhYpvdizJE72a8mBXyfcTBqAsJsYJ1Aq4LChxPC8JACJAn",
  "key22": "4suupJ4GAzBQmp3VY2XyQG8bbgmXm6ST3Q5YJM9nsGe5r5uyMG912Kwz5GWvHhGJs2MwAwkFDYC6KsDd4zgNDprT",
  "key23": "2cX6y1Qdb91Jhn385MBxUYWBLJwT2VTxT7WZm8FD8nyPW5u9an65EBan9MCw4EhefjGBTuZUidA2qEE4uqWEK6EA",
  "key24": "4B7p6rUBWj9xVMicwXbsSctcW24W2ZmpMJaLPPpqCea9yMDN7vhp5SnFfyVgrzP41aoBdrcXebUZotmCEpSqjgYo",
  "key25": "3rgxcaJ5wPdyutLjh4DvDxdLtwgphAXNxLSFSmjhTpJavkr3fE4KQHkZgmvVip2djvYUrCayavZBVW587uqE56mb",
  "key26": "3RL9qPKaFyPi1EANTuFgCCP3PcqmLws3NpyESzLppQYuq4XuAApqx47gC6oBU31Gv3Sz6D6rxDmHrTY1mG1Ycsi2",
  "key27": "466GrKzBA44aUeF7okNLT272rSZysedLwyu8ufoVwfJbpZiuLJDwXesi2T4Q68qMFCQTCgZuQPzKdMS6iu78hmvb",
  "key28": "4pKeLmY6nY7ZUGK9WocU7pa8iFH5f2krq2qvBfCdcCxxtEeYgKyoL7bymVRUDD4BHqoK2nasPowTHtqy8DQtpCTx",
  "key29": "Ti5dsFYXNdvgaXYCYzQZcNKib1J1AqnVzDb2TfK9MPNtynPSP3WThE6TmNVUrLo9K7dVQ78VMAT1NWZ9R4uA2po",
  "key30": "QSieB63JPgUkCJcdVWHF1XHUxGPPz1aMaN3HPtKV1fgMpiKJunmWEc7NmnDfcME3vocUTbHTBPEPVYaWh2QH2eN",
  "key31": "2xr4E8dpWPN2Gh642hoMxKHsgPmeJB58HYvenCQTZeFYU5mhiqKyrM1mrW9Da3LihbTjkLiMAeSHBuSNS44XzP7M"
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
