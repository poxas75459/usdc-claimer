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
    "Yb1mrW9FaToC4YraVFScbhw5TagVX3LEaSZHaHLnQKqVbw4bj4zqw3Pdp2JVzWADQiW7xCdcUA4iK4bipZMPpuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBKMHhxjzYBfr68jPnkqZ99jTeXcEaGkj6dscbBS3WLt4G6mPMeBYoZuushDaJfCrLEZxFvkgMhgXe93LTc7Qze",
  "key1": "2BWQyQ6hnGpRLyJMt7hik6yh89nTvpDCSV2LZBqecBriENXAG77zyd3wDLJnheqktCr5W9oaNMp5UAiaLbQtkkV7",
  "key2": "2ua8sxmTZ116BeCsULGAsH6CJ2YzSnyDw4KgGEb9xDmyHqiyEg31gTVsYFEhA5JuEWTgt4ddztmBwgT9kmErwGnR",
  "key3": "3yp5iuUBepgM98HVRVWZHYFhdFzfhGnKvBE4pnQJnZA31L5PXsQPPdeHy73BA9tYTe26XyvjWA4cYKNVJUQn5De3",
  "key4": "tx7StHrV2NU6J4fTtaYumD7QmxctpSjTkfJKwTwqBzoQbgQHKPqZZhPkX4Petyi5DgW88QXgXsyFxbXFHQUT7T9",
  "key5": "3a3DgffAhTNMN29E1nxhNTcygLtCWU6sKqdmfdzATv3nZmr3EXB4sqc9HeXuxY5j9WHaMiZt4nSXmVAs3zUP3GZH",
  "key6": "eRMF5SEV8zixBfkXH3LcPi1WAdc4jDdzUS2YGC2x6xMxUvguQrCj192r9WeaG8Pf6ykM12GQMKzQSrVRwGqa5af",
  "key7": "4GeY28waJxoADo8McotwpwLWPCjNmFaTPbBJ5N9XZAE558jZTU3isSzSoRmYomXaKNjd5Jtmf4rAcHeGtFrHGNfT",
  "key8": "5UYrQ83WHLdeqeqkXVTHLibnCErmeiZSWzTbrV482AjH7d6iDdyHhSw3Na2JsdtqBCiezCVdsKMzS8EnDYNgcdMU",
  "key9": "3uCDbm9VC47S8NiyYvUNNwLG2dbL9iWmzEXe9w9pYKn7mqTK71GtXmcdddr4Ks7FBsrA7RSArQU5BNPMxZB1pKCW",
  "key10": "52mB5HBYdsk4TqstbZDLdQwAz1wXCXekWF73s5FdcXLMG4vxYmqi6kUboSyVGAvLJoVKCs5bKLv93epvH2QPmdXF",
  "key11": "4mZXMSm4ZLTVrXM4Y3QKnxUtjDKwEFSskeqnZYohg8v3UKoABLAyHoLBgNrowGCkfTA386CuN8XyxD43qyS2Ajj1",
  "key12": "2xbUfhuEGxVtvD13gzrquEJnaup5UY5LL6n9iNbkYnCA2EMn6tEGF7RKJAHbFH3pMFnFyBs3EyeA3oyEJeEqv5Sv",
  "key13": "fAPbRcBEMT2Yx4bnEJvCfapFdvy9qWdRQJBAj9hqYdQkWwT8CkhDB3yNC8Jr3S8M6RnkZBjr8Xbd6xfUY9QZvzK",
  "key14": "4rJttqWkyWofPtz1VPeukudxwoY23pq65NqBBWX67DjXj8ZdNVd3UX53oMmJw5Aftvhn23nVHn1uY7rf4pe5qqY6",
  "key15": "52TBDa7H2hgaoPQ1rbviDZjhYdq2eeQKuxcFK2y994J2uMUfHTaR738M6b3HWmJ41HnSwSuDgx1qWa1bWsXQPTTR",
  "key16": "3mWMspX28a3xQdUTyb3x3nsW9JTmMhgzqE3hGQP9QiPyDs5DyhAVXM1qiEoouKmitPY14WuE1kieypEXTp6CwHaG",
  "key17": "kKYZ2HAPLm1EvbgVokQrZ9tdwhPiKd8yKzvUxhZBTii49NfUGWjhVjtH6dpy1Bsw7U5aUVHVQrLzrxJHRptjp1C",
  "key18": "3PzkVYFqmu3UJEgMgGWFVZNgdyGnkkex7LvPtm3unhSszMZtVdVQTwj7RTbRAPW9ikpBnq9qEemJS6N672fjvNiD",
  "key19": "STKVBkFqKE8zt7DGM7eUhp3LmMU1dCqMPzYsSXEHVnHqaKsjAz7bXYcoD7KhxxnJQBF4RbnBMK7Kyd3AKk5Mpmn",
  "key20": "22mkUi25pNaHSiXseGwp72vT5zayDaEPd5zASdsGq8FS8XApfZHFECrn4EGBjhryEvwiQzaUNiRSnfR5txhWS8M4",
  "key21": "4TQJ2DF64yUPD6dgyj6XWCA72hG6FYTjaf6JdCHA5vDhBp2AcDmu5xA9PcedT1i1Apo2QjChRAseHhRo9kke2yL6",
  "key22": "4Avivy6JxRn54rzyCEBH5hBTZP8fSePmEaHiu89G43vvBGRzzRkJSBeFua4dy36eJx9mnCuw7fcvSAgHye2hxj4b",
  "key23": "4ZeYryC4f4yXL4wCuCm6RepRVwGs9JKr7ZCCd64BXxgb6NfW88d2m87FdUm6vgojD4pHo2LqLoji8R2a6Eow8A6F",
  "key24": "prfiLCqX3Da98rt5En12GSfGYTdiHyEGef61n3cJQfsGTVznF2t2XLTetiuxZ1WGSzc4ZAgGWWXuBW6Yn9TQUyV",
  "key25": "31KemeeSbM2YzLZhouwhAWzy7cRt38wLEaqhYdeaaREu1XaBwkBKSXU4mrUsxDgD7ezysgf6eBLES2eMeTUDD9eU",
  "key26": "2kaonFJWCTMD2CiaDU4tw3QsQCTK1A6Abnw2tFFH1iN6yuSqxLW3oSYZYNdLYiip8fDiPXySMsWXxjVThFa1Bk1V",
  "key27": "2mf42bopu9shtPmEUVooSy1nMnDr4HgscyMrJyyRCMBjGtPLKWYmjH4NxmatYis3NVGMWAkw6c1QMyfGt9R5w3fw",
  "key28": "aHqG7GK2oEjcWCuGQBC14W8mfYwy45dFv2oKBmAyvUZXrmXMcmJ3F5z5QbLfGn2QY2Zsj29tThoFa2DJXCQ6RmX"
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
