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
    "2dsgiwtAB2RyewrDBHypVbkoS76Gj1UCCq9vfhwTNV9GVM4U2FmVdvE3g9tFhxELXqeuhkuYGg1RD2knaBAY3Gsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9j6R1EdrQPHJKf6nvSpm4UojnRgqicfQF7sLes83zzDiWrJS25NRVC5G6fqagDo6hdNDJikFVPEHjyjT35sRrf",
  "key1": "52NwTtXuykEZ8iVC8ggLWRsDkh4TG2Ue7eFVZdK1rUJ5WrsMigwdDNr4cWCPFtqinFBej6y2BKui9Ep2pwR4UBrE",
  "key2": "2iGW4d7PruVqaQ2KsPxBumgQ3kC6SMUNP6mDfSPGBC2E9Nwa8LU35mbnYtKj3X5ncamgnkzbVKuLcErn8q9BAeDm",
  "key3": "2WvCQdNmyc59ZtgCmtQ2HG5v7br5DdNDF9LY5AARfsozF2TPRrCJrvg4vmZudK7CGGj1uT2EfYdUUrYqpsPThY5j",
  "key4": "2NmBVgoYVqQGJtiNmSLTpuCHwT3q7XLW6uSTXfmhYLces7vCCPZ3UoCzSsp1Tkh7Zq6MfF4uRev84JMwYdGWXTa2",
  "key5": "2omXtJE4KUSbxzNMcChCdKbmn1CqDb92vZQndUfg78GL3JhP6Uj36Uneum5hHcGupPkVUJKWbCS3FKUuV1kWfve",
  "key6": "2npfAwj2Xdgqt4gWHDnhyAVB8TQh6z74ru2vzkgUeyKLc1wVUEGHgUy4G7fMpMZrDGrB5KKiByEhWkmch2mxsEaP",
  "key7": "4LyVZaKiyPRsuticexTL1U7U8Sy6YAbAMkEZm3FT3niuzEVEeFZDW5eeRVtVvTeEyYt1SioQDSraY5TN2dah3B1q",
  "key8": "58UMzyj6sRcs5gdWFDZtY6TuFqmMkN4FcKxV4KWvYRN4pktBEYcLMzhKDEB7jQq7uyCd1QTBeYJgcM7TSaMhbQXx",
  "key9": "3Qto4tfMr5ztCB8AjBF51H2hnY6VFACA2mjebjD2eEng5tjdrHZYjfJsGNAohPMp8aL83oqBbbY5M44tkaoY88yM",
  "key10": "4HsdKxSyg9zTGhqCWt5MQxHmbHPukHZBWfiXSynSHpymm12uwhCkbNMtM12yfemvAFJyy8kq1yrLsgzSHGuk7J2D",
  "key11": "5g98FnoWctLrzHfGXSTXUx2Sm21ZsVuRP53CyVP5KogCZAxGzGJrpCoe3Dhen2aR1SuW6ThaMSEbapPzsN42HN4n",
  "key12": "4SFPCgZoPjPqrUJTtAQ864gyuN4FD4hLCaVutZxhtADya5ep3jYopfBx2wKsqStQ8wdouG9eeP8QFTZGb2p5wgD7",
  "key13": "UchpAit3LDUW83CWd7B9jNEDDsopWFDFmgTaSCVZzHi33HEDwxzjwoeWiuZNNBpG26zsVv9ANSB4FeWDmDXePiN",
  "key14": "3sVNVL4DWunHWDooxCZBYgnqKADGSki4K5cB2pPZJ9U5DsBDEeu3NqZt8LBHNTrcbFHmJVJwnjAoiMiKuQ4EhfAb",
  "key15": "3knuryXPPijom2xPM3HByda5Kpc6khae66mGHbp26T1iTvXp2T2EZuBkNRsUvuMAeu8x97yU2adoUJrwmjnDPRas",
  "key16": "2FrqJsV11hNGrdDAVgy5HgYhiJBuPYAETPzTUWa6cUrLwqEGXEDUojX9rCxJgpEpte5Pph7MfEGcaKcKvVySpwiW",
  "key17": "37ApQjVZAdWKUmU5XKo3Fn8QV1BfMaQk1xeBFmoDbZQ9vuiPVWLoEEep3rhxJWVRVkKNnYNk9CEJogbfMaLaJCfy",
  "key18": "2vucVLY1B7vygsPMkKY6N4G4EFYLLP1bSyM72JX4weef6tmiLLxJEoZfPSuHYi3jnhBh6hEiUdR6CCMZV5yGPvKu",
  "key19": "5ncP7iBwec76ycaDoBuLU7qGp6AC7tSehRe7zzKqaJgKLpV2mvRyhsTUNVuHndEuEWpZ2bNeVyzGhK7wM1fqUuZx",
  "key20": "2MSQetPGc36MvssM2SnbsmgAa9YMPJSYxKPLY58z8xSEGsr9fxBWwa27bbfkmckwDddDsZEKpMdrqmuWMd5ZpboK",
  "key21": "33HUWoXvteHkUUCqVVoPLj8QgDcYAQ8zJZdncg37o5sEiAk8xTnFahrFwXWJdhsDst7LAD563JzQ6A6YxQKbPMaZ",
  "key22": "27EWq3LcfGKtfPTSJmLngmnaDSHv24FixNUx4rkEjYdzLvybUrdshrnqCXmgYc4B1bETsVN9u1xn3TMXL1FktnYU",
  "key23": "3CAUDNf9yYv6ZVzKhQ6EdSRnTBjiZ8RLm2BPDkq2X2BWw8au5r7nZtzKfMFg3ajcD6yBRC1qVWTTquMebBygJ7Jr",
  "key24": "5KcjT9RcEXGuV8CY2y78k9w86WmxnHDBi7oXFw7bgsDBtEGcC8DQ3XshZxQXFerd7QrkbVv2DgY8ZK3KpjUtRWeQ",
  "key25": "jQG7urptULHNGS4drHEGx8J7wvPaUSJhGT1a9yJqVtirHB93Xp6T4sie44nvKwAgvdSzBNTkzuZBnUu5j3HLWdN",
  "key26": "fV6m9o4ERkLssrYBEVjvgu2TMELb3ZAjBSffJW2psmMx7HWSNFUpTsAjsDLrTCdkTa5Vtf3ckLkNspzYhZRaYqT",
  "key27": "4u7mdvg1fbL84DwHL7Uqcj7zzQYomXdrKiiRd4ZHnJ9SH2UifWb8i9ry9Xq3H1d8j7HpZZnsNHrk7fgvaujiDp6n",
  "key28": "3TAbbQi82maH11EBqG5aCjLtmUJwEAu9ykocKsDw9Jdm4W5vmHWUggLBKyiaid4xyWGdHu1pz8SGZQ5vm9BFSrnA",
  "key29": "4p9xLEWbQZG9SPJegr3HWxxNh8u1sQiQGojHYCN2kg17YyUkddbu3SgPfoByGcYXuL8r47tXCDmxZJw44kZd4F6k",
  "key30": "24Ga4MxusvQQh3xSzUNNHZuPHhw2Vth8ptpBMXZxqr3Ke8XHwMM4C6brmoVirBTseh9xcJJNKQdoTXX486qZjyM4",
  "key31": "2AXC2pg8Zc93f7Gog6gw72vqofmi6K4tchEjEAha1aaTu8srxKok5cCFhS4HzP73PiHrskvK1VWTyEM6x4oteSKt"
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
