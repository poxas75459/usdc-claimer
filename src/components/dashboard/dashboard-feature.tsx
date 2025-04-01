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
    "4hwyNyQzysuwVzBt25QKbPybNLUPFcVY5dyLZaqDaC6KdT3QsepDSwvTACsTq2MiKbEem6tprdvgKLQBwDEjRDss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tP7VuDco8c9S8rLN9c4tPjGMYkTnY3VF7oMtEQ5jba6hZniKHD42e8AAi67xj5WRH4wxmmqKU79G5hGs16Wif2j",
  "key1": "4fDafJw6A86xKDhfLofUbc2vd47csRqCz4w63cgRtVY6VFBmiSQnzYmwfUc4CMmW5W9BaMdgPJaqbkrG52BdEsNu",
  "key2": "jMsf4fNJetC4TzfghXwmJtTUSt9VfbqkKrm3aDfnWyLXtyWMTn9XnmRbuGKDLeHF8i8m3LbZaS738DC59oD7R91",
  "key3": "5bbTjUXyL9RUrsK5PWpHgT6JXvhqmkpLfiCwCoWkW9iGJpU5Ei69YCQi7h3c77AYoTWgYe2D8vG5p9GMXFRMwUwc",
  "key4": "4T4m9ysQ1tYM8wSnqcdqfRbmfu5rc5KkDsr9K2ahmwb1CHm2smvuhitNFH3TRJMUqj3mvY3U2bXUdtCv5D1ZsLqW",
  "key5": "77sGwhKiQpygVT3vX83JJaYxKuVGgY7boMGmAF39iRMjRqqVbhKAqAo1krgGrBN712J8QgeAx57eBjePhWAakhu",
  "key6": "526b4pR2Z1KWFLW7tiDn3uscBTS2o6VqgzUrRmVEuZVtxuMfjz7gfEMDAKo5wLVw4j4QaGG3yo6K4qbmTZUaNNY4",
  "key7": "2RBPh5V88cYGhwds6ShYVbtK9SmobapkHLbT7XXshGQpFhMi3SegWDCNgbmAUN3L1jxEhtQD1mvn1TkNEAGHeDJ",
  "key8": "vNva8UaNN1xMzX8vzTMDEsEZP3MqhDvrjL93qPkHbV8dpr8um9fUJ1Mu7y4ZWocisWMukUXMUSJ7p5ecsyQ7ovz",
  "key9": "HjCP4d4GEsX1jnYt9aZtLddgNE64cTtgDgxE2aePmaxtTN2jDwep9CZg69xeigvGNdmMem6Ko4BFuiMhvwpSKvu",
  "key10": "4uiEwbGbPocngUs67xsXYXiJUJ32gqCbW79yj2auaGY2mBcWw7puD4zXJHgviMfBSTxTDQAFJM8GqejjG8TYJo1q",
  "key11": "5QWESC5XWYa6EeroDqDhadiFGMEScc7jpGKWLaqQfVaJdTqpU7GUSmazZEh2HdfmMa2uHyDx2TYAsn787H7DEtZJ",
  "key12": "k4emAEBdC8vq1iW2f1tDjBqS698tiE5cPpxpSexnugsMmrgKexB2r6fbAz1NQrPrwVDzjPXAhSSkjE2S7np2h8h",
  "key13": "4Vb3LYeUPqbNeg1K1sKDBeFm9AbigsFcodP4AbFBw5M2vKPLYbKZwfiAEgNyCSc5VwBf5tXMwPS2NjLcXgXKigce",
  "key14": "3ouWEZ9nXmyDcgUeWAUf47rybMZDYdJq5V1AhuTBtgSGsvUab2crtY5Gbck2RYbzT59bzsVYoJF4xwaxgKTE3nMb",
  "key15": "3GuiqVtKBMeiaavcB4wf2YcX3mhwWJfKhuKzy6Q5J9Hy69o82kJ1pmULLGycdnVEodk5esf3wXoSX393xoK2EUVR",
  "key16": "4HgxhCYQ9kkRUE48Rz5VYR9TY3A57JBoH2em43ddmJEVGX5uVwPuvVQfB6kXPRsN4W42NYxno27VGF23uUDnPZhb",
  "key17": "2q1mz9rLSCZZgmCr98RhWJ9ywwVHc8noMghNpYTCtg81h8vUiMvMGTAP4UYbppHqLnMtj7iUQxD9wyznpYteMsKd",
  "key18": "4ribXLmrce6SLaY6SyjbLfiSU7SCNoKwAdM8P2Hw5RRozdxUUHysY1skRGZRzrcfKCZtzoKPw6cFD9WQqeHdTxb1",
  "key19": "4vaLw8wLCidHAKbQxvGMk2JA1A1C5BwArQgy671ortD82j1Xkf92df8F6FdfZ3ooMkEcDSHRfxVcQMLLV8PLeoj8",
  "key20": "5tpbkNhhTy9J2xL5vjTAiAfG4p62s2nQsfy3RbReWkkUd5GqBBVWBmyz3LkkeyvBGQSptaUU4ucQE3CYx4kARhHV",
  "key21": "2tqWHKqhzGS3cMzSTQ2mXjPgL6fJ2hNHNhYdbG9EkkEKPbqH1JXTaqViPEBiPSXZoiFUZECpwtqMhU2WrXLKFxZz",
  "key22": "2VzQy9mwdjcWAKVJ9cSApiLjhUAbG2zEcU21cqxfLNU18VRBhS4uGGhVYhxjhLezKoZ1TJ3MPPVaBdstN6wSGTvo",
  "key23": "8ybFNdou8vMD85Wm78N6ao4M4JLnZhPu1oLT8miyEwPKZ4B2LZ3FWgwVVQLeUwYv1PNsGi7UUeAMVvNbuMBDohz",
  "key24": "qsTPgt9Rg8GT4yPSxJwLZxppvi79hErmavkurAg9QjPFU3GhxfJYy6LFnKYDvscjx7v2mSkjPn3C7mG8TwdiF51",
  "key25": "2SmJ8uEtySPnftsCXvYMZMBU2M9HQboZaaqfktUDw1K2ice9hhPFRXpgGjXGUjaBaPXNF8yZhNYMQB6ipmTVi78X",
  "key26": "o5g1pUcM1nSvqEQjZjF4vp6GQho5tKCaRQLHG2h3g44Co8yTNx5rvRUWQC51eTtBTEbYwRA1w1pqgQDbCVSG7o1",
  "key27": "3V5axbWk3QyGWSpBHutu8tMW4jdaLGgMz3Ng8PbeziKUzY87nZiuoofNwoJjP4AnoGRtd377nsPVazuaLV4BK5q5",
  "key28": "ZTjGHwdWgYSZbgy8xbhRiM32Exn5H3LzqPHAM3w7z8FGeCFBPXvHfsSYmNS62qXXZX7zPXyJ7HwAYhAZT6hGLYV",
  "key29": "B2euiBPp5LnQrcoaeyC859q4Prv6P18kyc45Sj1jqTW4TLFamo6CjbB4Z4HoywgMRabLVKJzLmS4fqxYksMLRCB",
  "key30": "37bHopbZ4bJR6B4y3s8zyTeJBQhAKfF68FPaA3sX8drHeTHq3n7iesH1kfw5nL3nkTnXkuPUfa8ceqHBJFRRRL8z",
  "key31": "4scZKB3PBRVgM8ggmmdg44F5g9DECJfU3qy1s8PKNS5qFPSAbzFxr8rwTC33soJgVrpY1ahDtFDm3cowGD11UNTT",
  "key32": "51MUkJN2qPkz1B7LBwUKYpdLr4BNUwKWFrJMvGBL7AZPYrD5n8FmNZKWVVSLXALgdekkxQLVh3uKz96yT7xVPtDQ",
  "key33": "ZiVRKPxVFRwzpVm6uvcUSpZJNwHNpzpxVtpw6e5cG8cfEAuGrx4SnFfXiHkHAMzfPG1cJNgZ6DGJcw1D3gCFUNT",
  "key34": "DhRM9Nyy5uZkk7HZTugtPxeL7HiUtgeKYmuVE5VgC6RWdyJyDybKZoLtVoKUpxPBCepk4VcmkM8eDi4i7gpjQpf",
  "key35": "EXhNTtEZQiQd1LLGK977K27732sAQE7KW4zRZGGrb6wjztdib1eUxWvQ7kQLx1kseXcAHV1nVG6PrDgwR1Y7VaY",
  "key36": "4aLgK28uPUpUYJJ8HE9qPRfyf6QZZJARkfXP9fdr5EvuV5vik1uhN4XYxKnGP54b79DUF9eLjVRz3PVXu1XZP61i",
  "key37": "3XcN9vqSibNRTyJTxNd3S6rw9AJa8xuF8cjG7JUWyn1pVwnEgVhvf3G5CRrEzBgK91h2p5mNdhyyUYc2s75xstYH",
  "key38": "37GoGmp938CgEiDjFG9SewyCbGJz99Eczx77F1RFPBkqF3RhaFnezPWFukJYSLPGzRsgmiHUUDQZuxrmxViUD1SL",
  "key39": "24YHYMKYPiUkeN9bVaiXkhkDXFqDxt34DiXQsi9ofWfLnTuPK2javqKJkKeuQspmwS5qGeoQ8KgCxBqPTApDFFTs",
  "key40": "39SuzDJAK81n4eiviefEoemvWTguuHzfjCQ9iY9K4fDM3oYARMSyKR3QMNrQyJ61zi2vibrmbmQfVNe7nseq4kGP",
  "key41": "5XHCjViXC2cUhPxC9suPVZyFP4P7MumKLnfRveewYny68KYQqpZgTukp9eovy268KbBkNmdvKHSHjDd3LfKxU4xg",
  "key42": "cfBRxZDoFLvWJAxrWH63WvtkTnPh3w9XpsWsuNXFiuhq8X2mw584LBHVgsPePYTZ4S52J3CYQZfTgLepduJVPGc",
  "key43": "4eRdf4x4kmUPVafvpTupxx6dV2DwFVUDRN84LHTHjsVtcDuTuw8Wuecc2D3W4kYtwzEW34v1VGs44nUAZjeJr3Xb",
  "key44": "56sRVbYEKuGkGuTojng4NKh89yrdRbNSVnVq2BtKGYSxziuFCFiFDFerBZUuud7iTBsKUvWuzdzGUHhqhyMG3Sb8"
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
