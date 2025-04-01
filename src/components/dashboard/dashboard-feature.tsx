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
    "NfFPDHffAzMdP8Kxy8zR542Po9JekNknjidDxAjoMYQmfuturqjY5BCNDZCrVLG3jNFUtHZ2nTTCfBiFEQ72dDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPgTRgmsLTKFk1RfkPpykeAhQtyu3PK6Lrx1Prp37g3hjLzdorCsxTPEoSRGNXwRjTVtaBEU5gfyQbRRue2bstY",
  "key1": "63Tibk63fd9uQU4gRavPaYADaQ79w1XWDrnS57793EmPz14ox1VepMM6RTFXJsih6JKaQP9ojWWZAtsWg4cDvCYi",
  "key2": "2RzcJ6Fd3tagukS66dY6ULNs8TYEbB4tvjMbqWjyACc2y7CviMXbhA2CvrkaMQv7evMomSjWP9KrJF2dpdFX6n9c",
  "key3": "2CZcABpFYKRRBcJpazDrJxTmuSjos4wXitZyq636EPHjPkMCBHAizno7rFk8nF4DBzTpkoAS57BKTvHqcfmLtMRE",
  "key4": "2DpqYJP42SgH9c5mF8JsQcNzEXUvzJZveEFaJCvazGmeNZposoHPNLNxk6eXWaWFvybNBfgXTZzfS85o46cDYDw6",
  "key5": "4sN2Ew2K7Y3e8YPZB5Sa1wbkP7GmDxJDt7yFUx59vUV8ZR7qvdfUppGpDVxsDNDUkWKHzpiiT1yxD9EY8zRvFCM1",
  "key6": "39GFThj1muCrRk5DZSkKKH3zvECjjCiRapqSdJcjVQ73kkCmLJ22qLkPdLh5ooDVLBABY5FFqeTYC66Ck3RrARAp",
  "key7": "YTLdTn2bvLE8r8k1SyNmd9eNsDLe7foqNFWc2vintmuSX34VQxgF9Cph67H8FZdrigJF9dZFcZbHa2zYkuXACN8",
  "key8": "4xDFzvXTp8PaCyYkkdzHcbM3RS3tjiLSpDfYbYDVJuAX7gW83UfSG17LybiCCT2usJ4bpZkAMjqjnWHT5LoKXDi6",
  "key9": "2UE7QB9WvKaEQCgo7rQuK6fNRr9cFaDY4W6puxwGRZuvUNMaqrV7RP5eBswHJkLTgJZNnhLp63TG7KDTcMXeegHQ",
  "key10": "2LEojzzQbvrCpf28WR7PXRjqWvB4XVVsbVfFUHshUpaoaJRtUJB4yotjxwM8AQq8X63j9q72Y1VY246rF1dPNndJ",
  "key11": "9XXvmK75KVEdFhx698QQvdrFcJ1AVgaZkj9Pa7ZMZujUthxmSzFe5dnCan3je99vooYZgumCx1VpJo7iSbtbMQi",
  "key12": "38gboB5RbQYwioHENzEgLHnrjzhcWSLJwPH3E21K7a5TPFWkwftY9VuwyCkvQr7MRAboy2BJGKXEC8CHoRNXfMyp",
  "key13": "4Yedr4otQGf388hS5XCkqAmRao1j32p5qJkYGrH3NMP9rTRV5wirzRiqDhc8y1jBKGpQUk6b2X9WjwdB8Qj7XKpK",
  "key14": "4e1hfHFtrX7QrK6HhG1Xt9xWdBRb9vJwyAp4jCd642w4jhXdQDAYc7qLdhisdyJjL6iSGu7URNPgZGAAqtcdV9VU",
  "key15": "5xGt4RUGrUWRqLtiGWYoV3fvdok1AZVpjwiWth9wzML7xAeTk4AL3jNyDUyoAkFq9noJNVusCzzTLsLXFf5CNqas",
  "key16": "4Mf2AMUuMgPfzv971BdmJARfWJu9XNwYzCBwe2gww15Sy1sbbtfFtUMCWWdE7Ugv1YBc7XuZXgZPPV2dJ5vmgx72",
  "key17": "ESZ8Aw9uT1XnFsgarD6Dw1ThQoA4Aa91X2Bc88WyJKrBVfJAWvhmUDJxpnxuRxx6Qp1b4ZgEzy36jEAY2eZqoLi",
  "key18": "67hvL4ZUfHFvBDRfMHzamriVDNq6rMpN4DkEajbya8UJqA7cP3v2EAT38EeWg9PhYt8vs8jHzx9LRG2eSAHtYj1C",
  "key19": "5LnB4yLf3xgfUAbDsqYPipJ7PxWcPC23rju7KBak2bVgNXf8WCbu5sriyoEkMpFbsKv5ht7FZW9rgnJyivt7tJ6",
  "key20": "4CxnpSxGEscGbdhvPdumzqdea8K2bgNYvENKnyxDePbXhWcVGnH5oMLsgc8UqRLBdcQ9mm9Ai1vdn9QngZziXcsp",
  "key21": "muQ85RDo2QQkLo8iCRanrRim7E7YfWWt1YzMUkeJYSVwtDd1SSXYSpMQTpEhaCw3jM77CGB6vxrJ29CRaw2hdnf",
  "key22": "4bnCB4nBc1jdbNc9wyfi5P27cJZmuHJCD2pEAuYvN7BqRnFDZYprbhXwq2Nga1Zj8iH4PoFr7MjTWMQmNAzbjLk6",
  "key23": "Uyq2CAkirVaPiDbuuLRo7m1H49Y8MxehAC65ngX2jPEWRdPB1aoGdmAxtKUphbRiusnAASqz3eND8H566jr3Zbv",
  "key24": "3ZnH6aVPBEiPQTGLi9HAny4aZaJTx4vVmgTh4QAaQ14a9K2idBovpz9Bn311Ec39QDdEQBZfPKM5FU2LgHBKkH8m",
  "key25": "2JzdFEYQWBSdikRASzpjGpMTGyHpFQ3TqB5vBo3kcMTTU7ADMKe971Ma9DucJPSfiHaw1ms3iMB63RLj94RJaCyk"
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
