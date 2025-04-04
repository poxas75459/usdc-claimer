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
    "4sauETr87fjXrv8CHYp4ga4ydYTbC8iAb8XDzxTh1Kiy3HUU7juBXjePsrY2ssfy2p4bRgpvBYSCQSg5RANPqYtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgvJzY3ZxBksiYyCJ36hCiLAtsWnSWbmmddjgoBWDYeEph7aq2tjFiHqxhhrg7BCpBCSrgEdortNkCkPSi56xK6",
  "key1": "4cmrEHTDcwYcUs3Sqa1i3nMjv6idxSPqcHvQddw9vWdNoZBxXyzntixKYxJnSY1ecJswssU2dJBxYAboFJp8r3aN",
  "key2": "3VtRsu2q11rfzLqKurjnMUQBWALAvo7fywLssFMSEFaMTd9QvkUDD9gyoTZHXtSyM4opiwGhEtQe1MpJgtkWNzJH",
  "key3": "2ZNThzgz937ZtHnrPvYLiDpBKEXWrsDN3wL3A7pTv8hhQh96d6HGbRjH7vvbg4Qp5At7Ry2fnjYs5WjYfFN8Ui6b",
  "key4": "2SYER6yETV32EaHY6yDR4S1m78aWsJjceiw2AZuFeZGNjtq9xuaQW1KcjYreJCE9SHc2t2j2KZQK3HuUFfox2wqZ",
  "key5": "41KkwpEaqUafZjJxvBLxrQ3Lb9krwcqf7ed1VA7C99UHzK9g15JF9Zaxy9umBPKSerCYdXB6pkPrAK46XfupePgG",
  "key6": "6294V6V75gP3oEMMeGc4opRWYbpDFEUnoTgvZeF2VGQzHCVBXcwHLN4its5ZrPJ4JDkTECjeW4K3Nr5Ey8tJk3Te",
  "key7": "4P5uJCNha2aV1Cu9iupXhkYzW7CJ4Vu9N6yrrJb8xULaWV1KujFTTMhqHBD25xwMUUc5yLpfgooWBbkEskcGHjLf",
  "key8": "3H67BbPoTEtHC2QsKpBuqzH5rUyn65NVsg14WRBq6UXpe74fz8bDscxrvNn5TmVvo2PaRaToCQxyi8e5EHtAURiL",
  "key9": "gfxK5iqFmAzS7Far96Wim91XiRbcvGX6Gm9t7nz4nMUFPRPKm8xWHLwFDLgyD8GTvd1nQADkCsidZAaSxFSyEWa",
  "key10": "mPvEoWFev3zA9wYjqbfn3FzuAZKcqeUAxwmBC85v3tgJr4pnz4PzzMajuTaBDAXQRjbmJ9WzJrLmRa7Rdv2geTL",
  "key11": "21Uy8HyFgWaHWFdyf8tw68XR61jMHkcVmoVCY7V7jNqiaoGBXgZzHRj2DsXPqcSxQFez2VBHkVRevFWQRVtLFsWa",
  "key12": "2g8qH4tLfcbgo9NJ47W3AuMbX6z9YcMQzVwh18tBA78asgjkkKZAhSzVTCdWivJ2ipQZKyBsTmDZqAphVAJ2wFUc",
  "key13": "38rjUHfeeEUjrenZnvZBahdoHHLCBQayTRPmrxuqKF8sRLTa1QTXycafxNFUsUuRojWaxoJPngR3DhKBSHez5ySx",
  "key14": "5B8vDb6dxmhgVSEXbDENEdvG611MKUr7kxPuoQDPLuBSBMd4JwS7r8VSJUFnoE7NNtwuGVrp8nQkCzXEFZMuVCYL",
  "key15": "5875eR3wqj8VdcJr6vF9mxyEkPpCcp6EWzwVMABv2R7cbEJ9uLSeUZfETkdHfVrtPeHBr1tYJqJX6JEK4h5ubgep",
  "key16": "4go46X2VrzhDMd8kAcjXn9NmdFHA5pp6gRm3W8XBwcCgXRdd2c9fNHftCJiK5RMP2Ku6FzvdzX8p5hA3Eu6yGi1H",
  "key17": "X9wx3iNLTEjxqxW1fh9WmbFvJYsAvB5pmNprg7K4xUwG8WpBpXzCPf8U7LT3Ywmm3TvEEV5rePkHgugjoTmapjr",
  "key18": "4nnwMsU9MEhfsvN6o9Lz5jF3RpwBnSxJWusoBP4YJXo7v8v66o1JyeLw716rbGjXHE1ENY1SfAq1AH9u5xWkD7c9",
  "key19": "49aQtuFpY3u32ymc3SctUgygjpdV3etpnpakjwFHFgdr77uzbBq22ncavPNvogkm4sR4diDpvkU84ZCCWk5iAWJ8",
  "key20": "xpuThKJ1hHcbPKsbbYTCPoBqw6CbDssZCuoeFDKTcBXo7jdBRhF5iBYUUnFeAJAU2ayw4AmKgaydSmXDmGgXAQE",
  "key21": "31zLE58oH9VX5gWMYHdmneqCKA3CWgpFCJRaddQa7Fpk8GkYyauvAXunSfy5KGH5Y8PniDksmW97Hi2ejbpN6AH3",
  "key22": "23YZ7SAUxDaJU3tFHVUVhjejWxo6kDauXRYCoHXpPXPk8FX2cM3ntUDFQ94gS9jkv7o4fD6doHkpzXSYH4WzFiAQ",
  "key23": "59EmmV6Sf2UjKeRurTMqS1jQdasyLdouXLxmm3stS6zEHowvQis2YRuSpnME8xmYL3SgAtb8kytd5sR1Nw1G4bmu",
  "key24": "4eCD1NVWF1oBUd7q23PBURRWfjGrAvPhqou8zh7YmVRNcprvUBNQwhGM1Rajq4qrr589jubxQAA2A7NcHcbnFsMD",
  "key25": "BYEBoFx4VXyp44DSBTxPcvuf84L8BNmx8Pjq5E1gezbZ1mAqP9jEHibcTfzFhzouhYQzbANhTuwFd7TmiPJ5eNy",
  "key26": "4Rsc4BoRKNssYqKTChxxDTReaG58jJ14cUw9pwqr7T9DXP1sKRR51boyoRBNv3DUwHYmkhvxSVipbhKLifpD3xoy",
  "key27": "2cJSjcrL29N7b1H38krQDMXgQFHUBZdviZywxAkmkyVQWSPMPy1iwbA4KenHBEHTzoY3ckRCRaMS27gqAf3r6ATD",
  "key28": "518Qr2Wr4U2WMKsA9AQ8XL2cLopwNSatJTKG9MJhEiBkKtXuuVLgbvTnh3vMgDW7EF4B3i5Bgu4yo3YbbxKHDhHa",
  "key29": "5PDwYcNBfMYVydsKm9VUR6hSi4SXvTXTVQDUGvmVmotarQDzkJcE2ucgQfoC5Uai8odQpVx3uR61cL6Zyn1Pv56w"
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
