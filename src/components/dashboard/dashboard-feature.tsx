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
    "42pJBeeCqhHSiyAKKH3BTppVVDexXGhzFJbYXMyyBCxHTL5LHJdrhXeGJbftkCSGk5xaGBubeoGWraDjXEwoztHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVGZZVjL4vokwFyNapoQBP3B4q7k71bbrGFGRzCfVnPR5YRiJd7FWJi68u8ikUjBf1BDSeC2cwzAhX6Lw85fHig",
  "key1": "3MxYQs33FA9ZcAWkA9ML5ijVUy5Ju398bQbYD69YDr4isdtiFSX3BrsZReuk97X5aQWPDXD5Lp4Ts9K1enMtsGPi",
  "key2": "5bzsvuAV8MQjC4Zeq5yhLYapG5Vnos2bHPd93cnW53K7JGDRaN3FMTUkHwadXjWWK7BxtG6fkcNxEGSaEr9ivfMe",
  "key3": "4MY474xo5izdVC18xmU2pA1PHctLFHmaDbdppoAmFmQHFHf8ATkmDg31hGZSSr1hGJZzJ5t4pf4NDQS4THXA8Jrb",
  "key4": "qKB8jEnbwqbqC1hUAfk4SV1GFC1dbNPQ3HqdtDmxDo1cpypba6fezdRsuUkjgnZBn7PRRqmJSWTeKadzD4yiWJw",
  "key5": "3pXLVpJQ95zs1oFde3eUSnSB4yhbUr9ZpDWyRzkNK9J6XmDZBLCogJP8BrCrtXxysn9B9FGag9hg6AB75cKE6sLh",
  "key6": "3VY3hyefTaFaN74cnddSDW57Sz4XeX9wKigdVs2ZmPddsjV4TXRP5M1UPW4kT5ME8VYkuAF7vFMF9HzZz9YfhQt8",
  "key7": "38fwv9j1m8AQw7bVp8RVib3VuRWHTP6VyyTnucSnXU1rZPeXx7qKu61HpUeugKPmUrCPDBytQXdeyHaE7w3goRHe",
  "key8": "3PDoF8BLfazL85EfgNfn5QRRKFF2GXhnd7Yd7fTAgGwM2KxBnKzBjJv7kNeFEeUiJeztXaY113wkCwGwQRFNhD8V",
  "key9": "3NWLXUBAwctuvaDQsiCjxeoqwsdtB5oy6vjf8MPiTnLGkDuUWB2nqLz9epp1fGGbRmuiHFVopmrCia15FduAURU4",
  "key10": "25k3Uj3L5hjH3wrintisq5vwXwPhcFKZFAyR1XAdB1LmX4cbnvFoYsJnX4fB4H1tiaoNFwmHqzY2neCFnXK73Qzz",
  "key11": "55jWcMuEd4a8FzwvxpJCJ4axn7oaTQsPzLGqZriWTvhy6fgWp5h8LxrdpDEScmmrjshgpuycHdLHPuUZyns2nmMB",
  "key12": "5pgbDJqfbeeYrXvUDA3Lg2Vf75CTRUL1KbQxAkkjEriU2b9DemcBpeG8aGH13r4PeQDnKSUvVKkcy8qrhQZ6EYit",
  "key13": "5yzY9TQf9vb3SaJPBSFnBZQnYcAWQq6rjgpD4XBXhwMRax7tmj9C3PtyBxXaCkjihPHhAUzGoLQ9NeG25Ky54AS3",
  "key14": "oomg7DAznjY6T2MH8qb9qhHYR38MUVF5a5wg9rG6Qmauzct2PdmPZmtvRkWHinztKDei5ywDuBNG4rvjpVmZncM",
  "key15": "4cXznedybKE7zAYkJ6uzg4tGMjdTWyZnJKja3F1hVbRUX9y4V1d7mZRnt7TXXGdvFkN85E5cr2noo2x2zZ76z1nP",
  "key16": "4vb6WCuiVUuLHYxwWbBsMC3Q39b2U6yqrzo6UK28ZpkitEUqHmNdno6PKxFnGd7a3RwfKvZH1491oe3ihL3igCai",
  "key17": "3LCWd8ALrdzeWWVTtteDK9NrcEHTKEdyMc62fLYVn2r9MrY8jW2phm6YAQqo7i1n1RqHNi2QVgJ3eHUj2AKgocTY",
  "key18": "2gaAJLwi86sn1rrsGh9DJHtjjDoFbkVnnS5xtWs67iMCBQ9zucHAFnbSrfEKGYzzt1z1ATwfcCkKBtXkGuqZzYeQ",
  "key19": "46iPfFRyaJpFZZVcU8jKE16ajZer2iyVnkxM5nVK98WFkbmRpDQqKECbhDpKXteJtF1jbEKwNbTdY1LWr4ACHPbs",
  "key20": "3XSogNwmhjdDfcRW6UBjmfosQAc1wHDfrr1PRRq4WK1WQJ1MF5tpw58TTXCa6xqssuZzGdymX5NL8GQkFn9ZD5yy",
  "key21": "2UohuBxzqMbD1XhZ5TRWQyRiznCJZiNtTRQ2NoJJcB2gENgZL1i6Mi49UQdZF5ofoGdn3Qr5HuQbv1TTf8WM33fR",
  "key22": "5tgiFvEMs2BHaeqtbEa2gQDmKsEkhbS9LhHpGr644x2JViA1TCJ3vABFYhYHm2bcgSnKgPEk3hV17kstuKWtgBbD",
  "key23": "45DtJQZxQQ9oziraWS3sQ15GZ19Ps1LJUQNpLqpwyJnrAFMBBeBL8mUpMGyTkDtXY5qhvLMPnSFjbgAn8Y5dzCf6",
  "key24": "5YqXDNZZHBqPwiMjeDxp4suYHgaibQUX54K96SytcoyeQFzHk4foWubz7wvgbzuxisw8mo8ZZVejAWpCv61fj8rA",
  "key25": "5nwZwphstXFsufznvoMuFYYDq3e4eqUKSuacsCSYg3dkvdk8nS652vVxg4Mnyeu4dWAAKTC8WiHtTeZWQ7r4rCsF",
  "key26": "2vHKJ1jg6smYpMNPibqxeFF54HcWo7MUGLDUQg2EkWUcWoMayUsqQr1Sxv23GyqBpgcvMicMqF1PF2xCQRkqeHSU",
  "key27": "4NTNrx3JdJDHLgxoPduyN7LmxwjqMc8ncMVZ3DbULtk4APSbdLkG7Rzw196rca1zsxTNR4nFtHFwhqMxT3x6ukkt",
  "key28": "2TnGMGg71GJaJNJjrKUGA2PfjtCeQ6rGkhcU5bb84mSaEEu4kuSAzoVksSqosmUbi3asvcjNHnGNE3VsjQWs75T1",
  "key29": "q3XEVeGyLgkHbBZF3uy5NziNyNrWVzEVQNF5ZR6P1FKGkyjiDuAyKoMULS5wywwNqLNeeq9xHgGcgjqY3cnmoqL",
  "key30": "2UpkfNbuxQBts5BEW6WXnGKWC6ZCEfWkdBmg9H96fS66KwdCTUUHuteWjjr11mhWCynu7LL9K7dQsGk77ydwa4XN",
  "key31": "2ZnNESatqSZdAcxMCugxhSLHnTHaMEuqvt9fx9UixBHgeTZXcskdbB7g2VzLnBXxeFqhDvV8fqxUtbmf89KW3ehZ"
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
