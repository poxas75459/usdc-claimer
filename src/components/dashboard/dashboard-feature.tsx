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
    "2D6tCyDVTrdgiXXdt472GezBmroWLwqBqJuDKDYeaYeFSqmgq9F1ChdbUmV6r5AmYWfDiqBUzcT1mE4Suw764ELp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HB2t7EdtrL36gZQ8GoYT5h3a7PrmztDC7PsFh6WsXL7BtAZzJ1mqEce7JTBkgYKh8b2FoBSc3UvkGpvrzcBgiai",
  "key1": "3QnW4ZxyNSqz3GCoFGZD2UtbK8pFjk1TpaDxQwK2tARmVetULABwfpC1EuYJmxaobQcF394stAyjsV7W196t1Z1q",
  "key2": "5aJ2S4bThZmJMyAJtp4XTkscGeyVh8jz2fwu1KBFqsXpzRD8js6bo9LZvZzSRHReTBtKgGajFz55ZhV78akecviV",
  "key3": "42XTZ2LNqfrpSpf3fCRpwTFcoSVXixkMUbwJgn4jqWo99wdzztso4LyxNDXLekfNRXBJtSryUnCCtd8R4Spw4vDo",
  "key4": "LdLv1Y7wmge2DNGVZL5vmFnBpReokks86XrNjPoLfudSS1sRypubLD6avPFXo9ghRoj4Skq396tn1dnL6yMM3KV",
  "key5": "5fFEoLiwFiEgM3BmTik7UiXS54SYaAxSPaef1CpeZCErayifYm5KxGJb7jzpBMS8VkKq16hMp3v4oqoXrXawhAsP",
  "key6": "5sSP5ZMtLSDXNryaCN8F2qmzuEvA1CeAgkT87i4J3j9cTAD3CsM1nPtj5MEAsSQtkdhbzBhG43svtSZsg73dJYj2",
  "key7": "5wCDVw2t4Sn3uB5A9iFMQuNGM6tPj4aESUhCRWNvNbg8TwWuf6XPhN53BfQBFNrYbaCmN7tx5XkBR7xecSSJttdr",
  "key8": "LfHYKWHomM28ctiB7BaiUfWuHvjmVLa6AapRUX2e61ZSVmpCbNjJJA5kLjc6T99m4LtUob5RHkV22KHPChBKPU3",
  "key9": "56irJpKLFCssqcFYXU3VdiwkA4JLZptw5xRe3ijYnSsS6poYTo3oMr6q3zuqLNAKrAakmAXRL36SNqS3JdGph438",
  "key10": "3cWCn32PmgGz3Be92czcki45VBSLSEbaVbTv4wfkUzpkRpNC82SpoYPkPjCuMdkSTWnw9KwkwBWr94S8ga6uNeBv",
  "key11": "2SznqoMurusk7oGTZG3x5oGoRuPmVPi7YxqgFVTDQJLMDcTMhbok2YGFwoHpgKH6JSEyCezwhkDiXwQJn8D4nj8y",
  "key12": "4gR1wbtHyY9ts8gfLkz9W2FsVxV9ddP3FQMQRAosCFmgomPPDZ5DccBtj2W8PxbHh4nzXC5kjSZo5P3Uwi7nTLod",
  "key13": "2oEA8TdqyX9vRUudMH1W7EW5mzBCxxyLbuKjPzgxkrseRyjJUWCjGCwsvR5NkmRV2RnRMkSvZJKY3d45Tiaksmqf",
  "key14": "3MB7QbMRPRbVhouLP4NYBU2fhRhX5qbmoxQN3keKS8SSZvcSgfetnoyztDTaRk8pLhwkzgptT6eDD4V6DXau2ZWK",
  "key15": "2jBWQEppugeE3RYEXdQjoHNj5H82He1h87tc4Ga3e7JThS9CMPDvXiZqG47Rw2SrrMtmaBPyPU4uMTAfBzzC8Vxa",
  "key16": "3onrUMsuXyKLkz9HUmuV2H8prcps9yqpStc5WxTbixkzmhGNA5ieuiyzy9cLJRbRzdpQdZWmEWWSxZYvAHJtB6ik",
  "key17": "yNjfah7JEGZEWHVc2xUAB7aj2cNbKpCteKF5z2EEKEP9DcKhiAE61FCn7zi1Bbwg4SSp35aCtzMWkyEqS84AGsk",
  "key18": "53CzJsbYRyr1HDZ8FQDqPmUJnwpnZn5RiFTW1sBLGW3LUXegqQiu6AbbDypfM7KYknacwcv8Rs54nEqDD2W8sBZs",
  "key19": "fMyiroZEBkVRQsBxPwkBtKsNFkbuj2w3VwTM4YowPbrKB2Hx2AYyCvR9kfufmEFoqhFo86DD5XwEeKhcquTrGL2",
  "key20": "3o7zkhMR6KBNK2WU55oDRwGkgermmtJHdcFpiNt9wfvaaMVVbrdYCAgQLjedpvATCnjMQafUDgFBSrPieHxvDzrN",
  "key21": "37bn5cGyaaQSdNmKxkRtUs9jFRWqhriZLhLXSLmBCkqwjChCwY6XrayFM5XEF352m3b7Q2KAeGv86KJoB89DTBYy",
  "key22": "5o4BA7ZgFFvqKmt1DYAMN2gt1Bv1oafyLD5frvPyk9EcrPT7XevgzzYLw4iJDtB9wSFBTNkEBr3PD4zab9zf9mfL",
  "key23": "5XCMmNhBQV1bChvu5MMHUz5pKdvj6o4TRMExqwAqi9eL5g2sCF1mVDfgK8dKjhW8d6kHHyDtjcrxpMhUZuFvx5KX",
  "key24": "3mgg7q9ddjpU8BCDGawdwkh3EYzf7iYtgXpiZdNc7irWSLyDUK53hRmbaH3aGPJoSCHteyU7d8YZaZy8DyejQPi",
  "key25": "54ZnhNBK6HapkXReageb8hTFkrwhoaanm5w41BF1nbCWXEViThxf635RRjw1KnirGbo9MkQjRsieRZDt7sAH99We",
  "key26": "5k7Amp7qhzYAnJwkBzhZWLML9hF1eAA8vTHLaQ1pcF5Nz4Bzufd5AUvVCRMvnHt98U2CfSnbtHrYg4Vcbdm971CW",
  "key27": "5ggp6Rfvyy2YS7USQN2gVTsBkLYiFrgJ4jzRbvAcfxmBizHDgAyhfjHKxrvxiaUrR2VPsyvyJUGdfVqE2nyC66M9",
  "key28": "3eNnmrLSESkdf7G9ggqANxRspGvGdaVZPxxZuDhndnnmS45Eja8zQ1mJ5avQuBuCTmMZ3L74NzamuXSDbUZSf4A",
  "key29": "21MCbCVbMFrytV3VzdckUgX1tRTcB2Xi2YB5ErKUL6DrXnzx7U1MCbdkPGFvGkCvFfUDYMkNkvTAh371c6FwoyF7",
  "key30": "CS8Rkhn3BSYyfJYo87P7TXgbXXxpbbvSjTiQqR7Z4SAeLK9vZeSzjLA9DQgPWxekvawY3E44sswZi5jrdTweyTW",
  "key31": "4kEUNg28tdibbPnjcACZVSSttSCwnM2BjDo9sLVtPJ3QbDojvdP8A65kJftJbxQLAovRZotvUduLU71yr6JFz5RK",
  "key32": "4BT3somLkLYdcheeQYsHP6KRbLAAH1dY5bzMaRr776GUdqFneJ7sinKBoNtmQfHHcJaEQ2DH44SWS7KyRaNZvApW",
  "key33": "2k5Eh2Gw6JAFdTkbcY2sybym2XRTognRriHs6UQXEV32ofFDYZC1EivuB79UCqZhZ1rRiQj6W84AiuwHDmq8cbzB",
  "key34": "2iuQhUnwrYFPZ2ij8LRXvEnNoGkDj64wM97q87Go2egGieBvXWsg5qjsoUGJ53TrDCX64hNgJYcxzejsE7USvrEV",
  "key35": "3Kbb618rz7xHyVr9S1WzKk8fq3xb1XWLi7YnLcq3SW5fiwVpra9SNGZecgUgAC54BRAQcUgUEu162Rj7AvotVMVz"
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
