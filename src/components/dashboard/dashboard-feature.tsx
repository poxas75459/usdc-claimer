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
    "kqMA224Q62kwoJVRpgbiCuZZ3Hpsmb5iEoXZqKhf8X4obwCVJCNWjBaqbxkL2SCqnXBi1BmET9oyxw5Wv9DNYmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37K5pBMdMVFWHyFf1jhnMMozDsJveUJQiteuihur4xd9avg4rfcLoBPXjyUmMQ7Szipr9PnGKBdGATe6G4CjKnWN",
  "key1": "SX7WuWo8BJv1tMoSWmbSDuVbirYiaZwdwBMno31B3ttNHiGQtPe2bRTuFZo9nYSSSZwwRfx1Heipjs6hSVtUzn9",
  "key2": "611p6CVuZziWh92fBDK55bcrjME2K8mZzxtjk8ki1PBNsyTrEQtgFzwMgHkvLM4gfdiLLW457zvobQrfSTRitxoq",
  "key3": "4bu32uALwZk8JPof9gPddiw3iprBokLkR8sQKDXLCte77TCUVAiq9XXmPqVrdrQryWn9tByevUTrR8FVvp4VeKkd",
  "key4": "3VyQ7fHFTsaqynBJm9pA8mHTgy2EBY5q1CJQ7N746e6mXxdhXTcE3TV5CQ64ZXLwPgNrsBGvLWaPHygLRgMfDNpm",
  "key5": "2ctFjLpboF1fhvV1AgUetNg6VmjMNc2GZ8j9bmbxcJ4dTsxoC5zY6WFe7bdmagjFU2XPjoJdiVtamkYMjXfe6rum",
  "key6": "5x1HTDkdJz5djQNueGW7Q1jTnWx7dwohUoLAq3J7bLv7e9kPf34Uvgj9oko2YfuVdMuTi12QR82uGP52syo21ZgJ",
  "key7": "3v3aK2JJmj3SsB93vd6dd8xRmYJzQZzuHX3WMKXV5MVYNucfPgUrb3VmLRLH2KV3DqEiwBmwUry8g5b8bcVkTL2m",
  "key8": "5BTzS9C4cmyQRjwyo1dkx8yaWL1R1CbQcQzSPWhLdtjDd99U73CrZZDDVSAY3diEjB7z251nuxqNkbHzxJrMQtM1",
  "key9": "3PosU2DSU6bYknzxySyUmBdo5s7RFTTuvxvspgEUyAQHTxD8fvnxDnY8BeQxbDrk2UXRWXdYC7RdAoBN3Sc1bmUQ",
  "key10": "2hQ3oRfB9BiSWMLnpCSFbhx7WXJ4Q2vS7nMzdsnHaoMBhG5mdzGhEJBLHFcivJnJgDV6sqdtsqWEFGSsRPv3Acbo",
  "key11": "uGME1KvjiLuRFawchdpUgJ9y9jcPPAXN9v1sfeJLN7CJnu92ZqgwaPwDH3grfEZ4TMK6CHouk6SmqkrCbRQF4Bp",
  "key12": "5KDyuQtowojgqXTSZr1xpjhquwtafzMev5vHW88EkbrunreWTCdTDyp8eJGjFxn1Te1Au9DXbPdEHB5V7tv4Kn2Q",
  "key13": "4JT7sjrY4Dpd51A4BBpCaQi77kjoQbMEfxj2XLbeAN3nUyzcRvRZPQwG6ch4MxBJGjiXpzL3bi832cD2DwtfzQJj",
  "key14": "5z6xiJN1iva8kXez55UjwuD3sN4gLhbaHLsMjxxsGjLLNFFHQWbdkHpRwGLczVff4Jv5nNAvjT8dWHZPdPXE9BxB",
  "key15": "5FC2G7tGdYTuRzXxGwJSAXFN9hshNoygWiLVjiomPBooXDxLUK8j583XJs6wAVPMEhMZW8hTGNFDnSE8Hw3qnZs6",
  "key16": "5WSiZghmmRym8JJvDXYNfvxdacYUcZp74GBszapiU688HRTJbjpYBJXADbTJ1dqajaHo4xtJztN4DHM74cEM377i",
  "key17": "16aR4hD6R41oCr94usYYmKi1ooB74zFrJdyrpHwEFota7arGLNyAbuB32qTCrQ7PeKdvQcCqafK7kNn1ViCfxwM",
  "key18": "4iU2mufNfcnr8RkN9a7pANHsTLWWMSU5oNV1uUoWfo3gszuMXX7U5UYboKLTsQ8V2t379NBdVm6iERqMaJbsSA1i",
  "key19": "36sTB2vuT2XRpvXKXSL89XQ2Qys47PyRfU8uubA3XyN6oFfE1bTHapQP7VLbtYNJSsch5NFnjo3Hev6jWdSRGW3w",
  "key20": "497Wiy3ATX4mnNCX2B28aV2Ar5be7kpvYK1ghzd5qBTK2m52tvGb52kcT3v3g4HkKnankU3oJSpr5VyKGTa2Yy7q",
  "key21": "2nETDtcgsCX4UGkaF949AsfuJELpu7GjeHCJg1qUEP9cugKbzwtJvjo3JwWzGTDM7msZiomQa45jbThbYZW5zscn",
  "key22": "37irzwFoy99M6J6kAc7verMjNeyV5EBjHJzqx7NGDgExeaBsYcoGVeBwntpsomMhQqo5xuPaw2mBHELiNPSqz7Xm",
  "key23": "5pq5bJaBZMdLL2XdMfqdrfveZPj8kNRwE8fFLMbDrBSyKfeqoLnXjMLe4cXyRGeJBkiTxYv9s35at3rvteKA7URE",
  "key24": "58Xk2KZh3DXr2XdEw4eVSsqxJMmnQE6Cot7V8Ti6ZRcNkC9hDbPgeFGe6SuaPePMjczECpdxmWpJGnZjw7EvFQDA",
  "key25": "5HGd6nn5iEoh6W1kKz19MjVotHttexSrwUHpQTCotK1PpRXfvPYLvt3v7xrRCha1C6fuSny96muY3qM15yw1h5QG",
  "key26": "2wTF393suSsgUmE1LWnKxvNsnC2HL1W7JfmVRX33rNTEPhZeCicem4z7oRpwbfvRiFxMDj4joY67FNNcWef7QW2N",
  "key27": "5LUisGATHWtdGinFj7e7MZMWZBSrhpHJKULTgrS43FEqtQLBna4NDnkgcEuRccBy91KMLhV9qh127m1VnMkaVNRM",
  "key28": "2PKpw5jcHUQ3nDjqTF4KVPKqms57nF7rmhFmtEvS1nFzMXof8fNhhzHUJnfYZciEWwSmj4VAqbAT9EvCPHssqSDB",
  "key29": "DL5quUnUvSgET783qws4LtQQRsFnw8yAejiybLFbcSmVJW8zi8M5mUBLi1AyNDbXZnH1qXX7cndt9nssJienWb4",
  "key30": "2TNGdA76YyRMjH847bL74wfuvP9HEbQRrosWKVe146J3mXbmfTmxKp8azVoP7u823DwcTivueJ13ufezsnKgc5QZ",
  "key31": "5w3P5VncQh9eqNJgBM4ZW5vhd1BTC1o93xiWCNxcbHspP1ehbfT9BV7zkxb5rcAMFqgL6W7M5KAVosAwhyLSyA64"
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
