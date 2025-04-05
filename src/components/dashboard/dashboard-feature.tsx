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
    "5J5piPDsgFW8xBXMhJ3DBJ1FyQ3AeNLQK8UnucBR6ZDHabsCPjQLCZAbJytw72udBN71r8sm1TikdEQDtC7PwUAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HZMi8P5JMK4hvpRZHoB6GM6xvYjaZRXTg24X9KEE9dGkVifqgqp2yWFigDqttrjQCcP5Use374JsXTgrCJ1RxRV",
  "key1": "zPKAd9pvPjBcfK6qcU7MWgxTHTwDTwWyn9bxDFDtzsj1ma8Revdpdzuh4NHJqZdswABbCAFAP1H3475CEH5oJ6r",
  "key2": "2qzXt5irQ6qGqPcxfikzgpifd2gfmchXaFMUBk6jWjnzxHArBdcirBU62XXaPGS3uo999uiqsRqj3qpQCPVmZzAY",
  "key3": "2HgeULbC7VBqiKMYNc2dSUDGWDZ1o7KKRwpin5xMde5mkC8MsHPsbZugjewQiaovhsnfZUmkdFaYKo7x5QTr9tt3",
  "key4": "66bAYqMWW3xz2n9bVtErG9JDHnFhikvzqGveehtB3bu3n2pPSEwQJqEcpqWMNv8GXd97Ma3ZhdkjkWd9oL9EDfua",
  "key5": "4KmnSLAaNRQbx9RdTD9mJoGHsnvAL8b1XRnMEA64nHDVftwV5648hgMU7EdWpSt3qqh2XtDoNh3rZqe6tuuC955D",
  "key6": "52VHiPX6v78vDZTxnXcmrvAs9ZC81ZPpaah8fepsAkzps6QFq6PsEU7ZmjdZvtMHCJh2pBUtBEPsDwKsXBteaBXj",
  "key7": "58af7kToTNX9rY6iZH3TRKfym8XkStMEYQx9MZJwPzfmFdKMLWtdyqUzMv6yzhH7pr9DucvaXLMFLtuMnyFXYz8s",
  "key8": "2xYJwsrF7KEDsNuz9pP2FGLKX85uUHJsmiDQQDzUg3NCrL92XnQRnL8UgHVey86BnUEqiPQNaL9eUmKHdGjTCA23",
  "key9": "2ms28YC9aSf5V7CNzmQAo2zMBfies9xgsbGasRZQYg8WAPbLhjxWv8BuV99vc7LkEdirgBUrZgjYGKKktnWGiVsU",
  "key10": "4Pp768AYwXYXBUGoSeQuLcmaqfRuQELVY7Q2Z5FxH3bQTVdqESaXR51zvB6RdKFzqFh4rwKe1L8633AGp5w1r1og",
  "key11": "4TGDVCKN9SRmHSC5EMYwQr5m7QKzofNnJ3RP6L497QnCGC7JYECVRYqeaaJUft2pDY54KvBLBjpy7m2kguTttu6a",
  "key12": "61fvS49AFmXeCbBXZknSNoHq6jZx7iNNdv5qtakyzJ7qxXuu3VLCKngchwPhbmWgjjioxJJNMggZtm9QgXwJHKoM",
  "key13": "5oVafJJiP7cqrdh6Z9NquZ5Y44qfEes4MtdW7y5t2ZjpwNDGzcgR2NrrvxM8e1QCKDYMNGmX5g8DLyzYVT1XmPjg",
  "key14": "3T8T7LVSzfD7QdaakFFx7mDXu79SC2UiiojABhfKJNzQFkbRCaFKDS1szJUJr9jAuxHjVJS8E8ShXTeASSUhWjFm",
  "key15": "zzjBBSCtjmNDgMsJU74C62sfcpPLnjigUhX62QGPYY4mGL5wd9aa6Fb81J1FVP7NnLw4DWeU21ALNWihXmL9ckE",
  "key16": "4mk6r4NouYEk7yQtX8L6mpjiydjCJYoDtUSNL6q9vYYKgVXLvKJsvmG3HjufunoC7X9pRnBFu44tKEZx7NfhqUMC",
  "key17": "2H2tNcc8FoaQJuMPmovdx4LMmQhAWL3nttRXEZQ6LE7CA9bLb7QA1v3u5vRENEojVuGHT8JWbYGxzPiokmtehbbz",
  "key18": "5p5gzX5545nVemHYfQgMfGN2PCx2BmPio13Qm9JVDtkgZWGYqxCAWHvjRs1KVexhJq7zEj1rFccLXX8hpHBGwMXN",
  "key19": "5oamBVYKtQm4FeFvrUqTekxvTcnKc38YW993vxXjCL1L1kbYzVauEjLs9ArWuiHMoWsGJtD6TyjKGzRLAPdFcGky",
  "key20": "3XEMt8Ui8DLKe2vYaFDwEdCY7pEuqDArQ5yzoMUvhUbRikdh6AheEMMdsE1c8inCfzundPy9WpmLZnNN4kETJ3Jq",
  "key21": "4ZRuATT1eM9LsbEvSnqXN3JXrpbk3qoSKVjGrzLNHp59VpQtkDzW1H4ZHZwNgrVterVNNBNbiwGNoY1nQgtiCyNf",
  "key22": "2mrYXr9rqQErFTQbT66zgn1QXJkUzFQLGXY1SMAUdszCFeYWusmTvSDfQDNQjvqVVREjneK4NKqWShG9UWUo9ioN",
  "key23": "aPBNA9M2ZnTGUHRdbD3PLjNzFTswq5mYMZS2STJoPtyi926a5fYowYKVszB5diuQmQRETD5cwBafsARn21SqZkx",
  "key24": "JyHPCMLf5YiSL1swkMaguuwfswYxeFKRqiMhiw3kDhMG91JFvjGijaMoVHiTj46jarDd2kkzL7rpRHTYY7LSXFZ",
  "key25": "vbHaLu3D2KcWPNtZR8959YBHzdTPBv2DNt6ccb6xPfsAyq4A1BrAWJmfFvVesbKeWYAFSFfaQ2ae8YTLwfhETfk"
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
