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
    "VJoFYQYi97wfsNuNnBeRS7PMCNZ5R1i4kDNoYKyejsNsvkvhBowbLSyCSSmhV4cZrUw71TUhvmGNZvAW4Eq2e9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upSy1g7xsFfaMoPKgPLBjkG4MJnG1s9zCE3xxCyFTWGFxVvPQHdN5pNfLBcCC4ckzDHfbUa4tYzywGAvj3tG9xW",
  "key1": "32SqYLbXyD3VCUPySeYG1cUSF3mQpYGcjbrP6wakezPPY3xmUVupJajvEwgc4h9KJ5ZTsTW58xSARkkfa7JLDW44",
  "key2": "5jpoGZjhnNEnBpVa7ZH9jvSqoGJYoPkZFooS4MVVHH1irzWnSfcwUPEAdVioQD5UUK3yycArXJTtNd1GUgib7MoD",
  "key3": "8SpsthD4ewQpkp9xHysmp371NVofoi9vPvmH1D4E3xAHVMv1mfsRj1dUhi63oWfYiH3TYCQa8XDwZPYh72bCuK8",
  "key4": "2aTqh8L11vFKxYrWVpj7ExaGMoLLX9Gw34ZSS81NJ1oLa6Tf1jETGj8D6npspEAZH5XPMJRwkL64nbc4CJCsyLtx",
  "key5": "kXkBnTg3uFiqVB3JTUPviNhjGurRFi7ySm2RdWEop4x2q6ZGrAE1tuUnBQ9fAxx8b9M4wzt6e1cCqiFAszqtYAK",
  "key6": "2ydqcbibPMh5kcKnDpknvTqUMZCYXabchrXkrAtkUtirtGCcAA43KBF23dcnKyd97H4ghzrKAVBSC1kW8i3jAwpu",
  "key7": "4a9PrhNKSVWkaLjtF6CNuouJXofmQwck3Wfh9ZwNhhjwYgzGNPjccAP5z7zcrf5kqD6hMZVYpt46FUSzeZ2gJ5yq",
  "key8": "55VN4WG6zwkR5rP6597hcZ9cvEX8r69dya6rZNsLVHvjfxxFc2RdeuH6XyKAp924j2J6rBLzxrVpCdSzLS4iYifH",
  "key9": "27LwDBmezvFSfMzU8aRL98RzEmhc8XnMTNecDE5HUPCBbGWZZfLgtUCbkhxFKNGuK7GJgS8bhqJAEMoRiPQoby65",
  "key10": "3oBv5oAm6yc6uFcLieU2WuiKozjZDnn9bVLN5ay2y76mXdHFfv9qwNvvLHE7nc1F6dJSGcpRJxwBxvR4fNKKqJiy",
  "key11": "5oJaY2b2eEuUtuLXJWSN4cp4qX3FanCyebneYmWwUHXjNeDzwT8rbnsmuk7A9jiXxcmJTf9Mw9xJ6htToz5JFMNj",
  "key12": "4KDzAN8HkdHkfzFqbB94kzWjoYwvYxF8Len95s7fnRaERsgG3h5X7SCL6x6T8Rvq2hTqJi5NA3ejWimGnByL11QP",
  "key13": "1RJno463Sbo4CWWNxiruG9mevWTACBRh7jMLzc1QJQtFzPBgzXWu9snLQkvrAZMThkuSWTSiWV2mGJ4LEJgwbs4",
  "key14": "3r5cYCDaoyN1ZkWKu7LTBePY9XwaxUb7ueD8k8VJ8i5t66sxofgz8f4x7ShYmKsYb72w2kzgejN1EsJkLH86kUMU",
  "key15": "2VbFPs4ePwWGnURULwmYotdfvNJfjAC22SbQ6CDYe99SSo2CPhEyieFqGeZqHhKNCcUa5exCfzurktC87UM3MzPT",
  "key16": "4gN8cpr1HgtddzbkuocitN2jgEvRXFYKnMVwBuezUkV8BsmB4YGFC9G2AkFJCUU6SfwLRnDmAWo5QodPV6P3TCdH",
  "key17": "2Au8FxCqLfi6dDXZuke7Xv7bTTJbjUoaDmt7cHT3nUA85rvwQPoFtWTwkbSgiCWLTYhonNoQ9WbKK3XhyGgHcLph",
  "key18": "5Mv8N4WVcBNa5J3nMbuuyGpuw8ih85eX2ww8oCTWawikvFCaRbaQKa5fmnhPVaBbxkZPACoGAy7zgPMwZZoCxvWT",
  "key19": "5XayQkqR5vBFki4hmPbnqCenXgYQ13Byf54cBdsdUnT2VmNER4Rh2MXtEaD29EvZy2WJtcpuCPx2jv9j5HjKxFBA",
  "key20": "2wv8vQ38sN8EF2oaGNc1TBov4VHW59tbCvg8T7TC1pCm62vntnTfUJCEKkCdVfxVpDqJU6PjP7GvFrpCEyruvsgM",
  "key21": "2QmvvVTUSrhfkH2WQWSMuTBJvwpodeumNY4sMY5e8GUFSUv7CznLMFXRtmQrf5wVVrgZ7VHAqSzGcFWfn2HLx3iq",
  "key22": "5u5QLfX2n49B5y82hGGJ2GrjaUQCASSdMFSuGprUDJtmtvjYdd7G4nXAjMm9k31xKp6qjFUJV8hYqtbBnX11Vvn4",
  "key23": "NKiGN2szJf2rxDCn8bjuHXA8BU2Rw3ASCZd8i6B79x3AtQoDLTDXQnKadPAqQHuKJtTvW5Fohrr4jj4LXvgTkz2",
  "key24": "2jEV9LbEwvCvmWtaR1wv563FQB5xAKLk1pdGRzT7KgTQvSvHwxnMKfebnhUGj6Zm9WgRrhTxtC1oauymfowhypwW",
  "key25": "5pEDpHFARdkARMxW8Ro8KW7jR673TwLs2HcqNdjBddDyhrWgEs4mQeTkcz64dZksW4xGnCNTuF3bGQxme3w78M2Z",
  "key26": "3E2ckDFLqByW3PyFLdVXtnVJMSNMpJv9kq9L428uE5LYBApuCm4j88rgEpkACFJFVpDbmqidUSJ9dkq9gWX7mwBy",
  "key27": "6T4uvybKsynbBvpHQ9BEr3EVhk5exsxGjQvzqReCEQESuv1JWqUq1WgpNbr6v8pNCcyx1tjxdxvfy9AERojafYU",
  "key28": "2ZzcGhGK914hbwz7FnmQBvVWoMpe7PWHXUFp1kaX4T7rogyFo7pE3yk2oWvsnQ8DLTf61Lzf9CeUvAMSSxYyAZ19",
  "key29": "3E3BZJyDxPNMJfdtK7yWMSU8pxP5eTXLyV77PQgC4GffzyC9sxdxJF5hLCQUtv9FuqXc6HGDzM61vW1rTEGShwid",
  "key30": "2oxwicgqDhHtZe513TfChcuH9qg7uLFr3ZWhv2WRzRYxemcsGGzPFmfpZDksxnXAMponpGxA449tCDjhnt1Kac7z",
  "key31": "3RsvhyZ5MjEytZ8fwU55xGGznjxaPyTHM9icqG8eZwDaf2qYoHpQoZR7Nskov4FM8GMm85VieHDNPdHRA4N61pGD",
  "key32": "5jGnnRSfVffNjWycUcty2aNJMupXuE3BHZbwrv4q75W6q69oTHPzPo5qdsigU9SZFbCd9Rp9DvDLiv23nrZKPPz7",
  "key33": "58q62rQSxBfCMgNcp27n6qAFqUdYr39ayW1F8pfMnniDY83TGNsvDSBiKZRBbiEi67UaSn3sHGfydfJDgbcA1YaV",
  "key34": "4xY1dxTuAc7YepRuxBtwb4aFkWfcGiDez9ybkGaQ1v5rsh6qcZhPu3BBi4jdTZ8SDDDVKxMBCXBzPHLJqGbPDkEc"
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
