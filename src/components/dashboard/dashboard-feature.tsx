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
    "313WjF5pankWrhCVXWwS5iajZupLdpLHo8yzYnDVHtFdPAy1Gz3MwpvAKc8h3QLGwJHF2hkhSad8DPMxYD32TtbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D58Gczi8TDBevTEYgFfSkWdj2FuGzKjKEUpUPZuEJbVBiQSRiKoLxgiEkrffkbPHmzb7mDCygrotnjEd75yFDQf",
  "key1": "2Q9ZPnpgDsbwobc1i5fEs1TrJFJ2Rvrz3aCyEdACPN1mVX7FFrxQjptcx3ed2CUmJWMQDPBvFqvgLRmPf9HbRHK",
  "key2": "4bXxrLFRgFjnhUkt7y4mBSmR4z4PcZjg3rzTzoMuZkJxEexqGbsH7baBp6cmVm6jTG2wQiZFXeau7fNSSPmF63pX",
  "key3": "3GJWQDkcAJnGC9x9p3y4psgpSabPkFwKyQawT54vktKg3o8thiT6AnMjC2oxsggjeXLsj2ijPMLcXdh4W9ThDJNA",
  "key4": "2J1dhNMVgpt2mC5ixLugKag4rbHccL5Gw9UkX1eyR3vZT1h2hk5a8X4C71JdhEdNLBb7QKMumKPUbpp1sPEktQQG",
  "key5": "666puFKGhg46JZhBD4PdXMq1BF9Vh19dYLywMDZbf1JVPPP2aA1N9ZSDk2h3mDREPewNcZYJBTj9PgMqjd19wBdn",
  "key6": "jKcUFiDRBbsjWpoEh82tXisiwv9kAQxiTpx6dXBofT2YNLf1YawkDjL3z8Hq121XA4mYpDsi5hk2nBQufJrShDw",
  "key7": "4vA3prNwAr6SKkucjZXu2q77mbia5kRFTPNVUjTEnLQSvwHWfLFrYGeapDqP6wvkqq3qdEkfHNYFA1EW1Td4FDzL",
  "key8": "4qXoAtPKPi2BMu7bYPdrHsWmLwCkPJsetvEvKApQcotmZspRRJjUikasw2f1Ezxwcgfxn1MghzSBoe6UV8SfpKke",
  "key9": "5r2dY7tDPFbMGkN1gBFDUTBFnogUJoXiLWYLW224V6SfW1idfKHLyBZnGhqsoujHzcsi8JfXkgnFzSUznzcB41JC",
  "key10": "4r7sB7cJZdLzFenXrEVumppxvNGUtqtpMJw6rM5Lj2Z3Dm6zAmAdapqutdw3N8sGULHin3t7ic7A4Tpa3LRsbT6Z",
  "key11": "64QmJ6teDBEW3Qjtne3R4UGBrdK6Xez9n4u41u1rd85xkKphMc5uFbD1b8XgQjhNA2muDmSCvByDht52CnoYuCmH",
  "key12": "4hPmWbSPEnn8bxhGJg9AUgSUnyP6aTPsa86QZhLN7C7vswK6Ky8UageMEGSfhAbT1xiB1LeiUWHb1ta9SE83QW9H",
  "key13": "57Uh23zX9K7wwAVD7X3XQTVNvrk2yVbxsZb6WcvuHABFgqbHN34CxXaFA6ZbnZ6KNrgMnT9AFnsmYzLqDsVTmdRN",
  "key14": "4Qe43Hq7WNwmRaTQUB3ND3DkrmQfkPGXBXb7ZLTLuamjbE8XNiRyqdGq5L9JLgpMVS4xfbZXwptbFhAy3pafCq5P",
  "key15": "4busKtyK8edi4nEn27ngPSS5mkEsA3sHAU5nS2LyhkxEj7zZA9tSMeMP9w8TLunSVnu53fPLiBzsRqP1jesCVFom",
  "key16": "3N4H2deka5aXPVJbGTGvrAXWBitzSpM2Y7j1SPnr1vc5RHHauvsvUbtQyCiAiDgRtFyMUgaRdikPp3ShjNmRRnxG",
  "key17": "5WQW8Rg995RaGo67xjFtuyhPbiCFunnMJBgSTTN6uk2YTmvoo8s2QPtQyM2MuLJRKbXN2EKA7QDBF63QX4gwPnGL",
  "key18": "2ENLGg4Srpo7uBPxiFpWxJcWNkQKm1z3FoyzTkLExyLaYdizap4BPfGiKLgBTS4FtAETPXj8Ng8s95TGNLRQyEUx",
  "key19": "CEjBDFrQMGPtL5KkjGyx7BX3qweKQt87CKkDYLNteorncLxtn4cEqubJ2gq8TfuYimLJeMqC6pJDQ2Q42fyLr5C",
  "key20": "2VuuVRGBbFscdCSuSMw28TfESF9wSxViAVW55sGtj2JsL3uiJA7CjNLr5LjpaopMVCZTzy5nNNYUyJ22nC6Rz2d8",
  "key21": "3yT1jZzqDfGWZVFp9mo46MVCLdzVD26tUrXmVj94jhXoP7xjm1jfKj1BmgYv9s6F4QrisL4fXtYKL4euRUv3Ewqc",
  "key22": "57QvJZYncHn36S4bDsycGq1DcxoCE8uezmujotV2rh9A4rVoHxx1WhE1gyLmWjVrBtbXE4eNuRGEUXNXerSDJq8T",
  "key23": "66iMFwRKfgqRbhhhPHsEeNg4gnRS9NGZdfearRVi3FRxxnzj5jh7yAUdHggsRT7z9EytLC8BiT8Sz6WMKCiufsBq",
  "key24": "2exXrSZHb8FFoTUfpTyBKwDYeP7HVqubbc2AzDiKSCyfWBDFfkoiDC3LrfmbTYAMZqYpYcomT1TmrKRgMKDxwuJd",
  "key25": "TLyLLFcvwmaPwoRNwxHM1g9665EFPbyH8npMPho2MKkhh9nb5hk21Z2mEHHB2JRmqkUxfLv74GqJKygzpDirf2K",
  "key26": "4TzV5no1CMjQcPgMyZAckwZe7SYuYYVGbjwgPuJRRCRMFZMefwneqkf11LLm3jyHoWrKpYnQmFGGFyRdrg95hPuA"
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
