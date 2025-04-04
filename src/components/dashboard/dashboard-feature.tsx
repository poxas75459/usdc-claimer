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
    "3ZaRbhRtxRBcY5gMihtJ1GPT63YBHcb2xjUeUEHTfiMuAgENZBJGww4W4E3kPZnh5LhK3PMECfpd5vyfL7DEmjcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgmkdGbT2K2SEVpXmopmpdM5kYCTB5rcGCsNCjVPnrDQ9N3rjZVGWr3bYRrNwc4AHwXCFu34vfzcJUcBeJo7bqs",
  "key1": "7saMoiTnXwXRhSpCkh2PgjYGTVGDVZvfrJbpnu1hoNNA5PdK47NHrKuedBrTuKL1U4wMVRYmHzrCjySmx8RyCNh",
  "key2": "2NZGPybGuo2roYyKnk5JiwjmNAteCnroZNRCFjGQLM3nqA76d4k1EsFuUW3jwkJW8C92kCxiiBG2NST8ykk4hKx2",
  "key3": "5koAe424zU7jHkRwt1Y1iFn2ff4qo71XozYWcLvFvayiMqNeirNyKUrmZWdr7gGfyuw1G93CzigzapzSaLfBKXbo",
  "key4": "4cNm2rD7YmQFbFK9LAVBtHbqUy9MSCbqpMzY3EARqtuN7gEDBboBmHaGuWryzvBiNX2HV9v2puGs45MuGUQkZpDZ",
  "key5": "4UVw1hqUgRF54bt7HcN2PaGPUCccwpC5TXy7ymUDACqehwUGag2XY6LmGdRUTmboPMSrrSpjpgaAnxFx9SPc8WCp",
  "key6": "4c1YEkkpnurKSnSwVNJrJG2SdoYkgygstGE4PcWXcYxREBVZAM91XgfxGP6KZVx5kkrTpf2a9rrZLpbuT2UuZi1i",
  "key7": "2P55AWNdZgkprHu8U3PLTZeEHMczgiQ9HxiSX7fku4xBtgRg8HtAn1hFNsmhRhDWnrYxoa75DP3HiJuYUu5Gjre8",
  "key8": "4hqL1FzGwu96GtkrW3SewEdFpbe8SrGgHssvwyt3SgnN7Qw8Ug3g2d9rVhXyMb3X9oueLwUWiGi93gygjr5fGQ7v",
  "key9": "XD2YEL6CEfNcHsjJrpa7XMbAfZDsSbLe49A9Epo7yAomLtPMmPs5y3j6jss1cpHq9FRQ37hGmWTtUAm6HbPcUFH",
  "key10": "5E8H3DTG9bGvrGFSi8svocvB417jQycK6Ry1HsUF4VukKaY2oUJjqV99W4Gw7ZmtUJdFrUkqtY4cBWYRxfP58bco",
  "key11": "2JY8Tgmvt9XBjp4As91cNxQi2kbTuJfxQaDKqhMtnqVBi3yutvxSGFeku7SKtFVXSYCgLUtVDy9AZPowqf6poMQj",
  "key12": "4VxCtsQ8xGyyg3V6LecZ3pxygkimf1AVLANBYMxyZEApP9yrx7XDBBPj4WW6PBGJREMGYv5LoZGSfRUDodZRdTnN",
  "key13": "N3ZC4KQMMhRGTXGo8L3aJvyNfnTioUweM1CyPr8LeA5V8PwAjH9tZE17oeVY5bUhhSZ8gHUBkC3WFVXPc95hYyR",
  "key14": "3ZAixoQtLJd8SwPBLiY4gNAKkEzqUwMA8Wt7BU7gHreEMbHB4eGh2DNf2hVFuy1fYvv8GnZLX3NyAizwoRGCvXqK",
  "key15": "3raay6oxAqFyhFsoebEffg9BhiTxdtGm2Kx8dW21jEDGBpgJdntzt5FSXwDMq7DC8ygt7NJa9sYiiKEvdToJZ6ek",
  "key16": "4gB2Yyr4ExosLcPrPUw2VMvXPzJ5ngQjdeXxw1hxCyk4jgGQooj8ho7m6q4gnVhKPHHaZp6jnchq7EMMTgCw3c6a",
  "key17": "4sZYdo3F3SndCtDLoasLnPmC8kWY2akNt9RLJD1vJDyY5zpLJ9MPeH1y1xkxGDAFtaGj2JC6PTuqoRA2s3LkLnJP",
  "key18": "pY4iDPLJLcV7BibGd2DDPhGfM7fqYetpoRFqRhXu1AGYYRA2Vg6foKNYthHUo3iV72wfaPMYYzJrZyicjFVfiNF",
  "key19": "VHWJneqaa6hfvHezsiTatt5JXaUtTdpzfPwgvzrKhnnf2mVxnk7jVRh1pJsrLgxsF8HetZMZT1zhjXR7TuGDM3i",
  "key20": "27qPe29Lt8WbtsGwrERmWXVMf4faUCRB5RRfBnB6bnqAUGMf3SkbjsHso1wKK9kDK8Qa9CgWGpH7PD8jHAaEavYz",
  "key21": "2WM9hXed7TcULhdqpVUtErZmEdLrcsbHXMF3s5gBtzJ6439551jcpEMGsJhKicGpbfnxYhhXjBxxNcvviHQ7ZzF3",
  "key22": "3WvZMGzbM2LQpMwqcPL8Lt3NPofmL7Qz3e874pjAs4DdiTaSFxs61GFnpeEtF4MZ2xR9P9ancUropuXFaLY9tsaY",
  "key23": "5eeQZCXpPLoKuatHQxZvF3HkKSR2QKA98E8D7cT68CsqYTHLQTQFe7Gq2f6NCZmp5MwoF12UGXh8hTvkbC2N7gsm",
  "key24": "4viSoyFAw5Lp4bNeGxR7sHd7dJ7YFzp4Vp6y1CCPGCzFkzBWPeejj6UesVYWinXo7eo7jXSFY5jT6pnMxsz8pswx",
  "key25": "4EkruargQrRKJvYNsFD97XDEeTpsKvN7HY1HJXLprZdS2uAMjShpvF4KsuZ9DdEK32gjebx8nZJMwKJSxSfq62uq",
  "key26": "5vjxSjXoygyhEsArnTXWVnAWu7oKkYeWXoXQjErAvGfy3aaJHs3HVw9fdAPXBp6DDf1MLPEt8SpWSdWTFnXK88RZ",
  "key27": "4qGAgCy2eikMeRUSKqofnuvdPeME8LWJNyMnVnDp7msiHHQv2tXZ2B5SVLgndq6p2yAQxNYT2CEmKVKQS3i4cfPr",
  "key28": "4ZD75wvCsBkfEogXiBBS539q4gZdaYLJGQqH8BkkiXipoDuasG7oRkYmsrx2AmnWPY7aVCdT3mHjzpnxFqmqwKNZ"
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
