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
    "4iZSgDyCDtGmKULGtBm3kVdpktftSg3JdQFf4oPKqTgzUL5Rudy1u8gxeFcqhrSKqcJZVsF5fxzLKSaFfAhyQisY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oz7MyzaEsvAUhVijwQz16KoZ1raQUdw5VAyGQSjEaW1bmR6tUVP3RpM7txXZbVmHc5647VcHeotmFn3aTaNdHeR",
  "key1": "4sJNwpC5R4Ts99xLiYn9QDbaXhRtuoPhTne6ZCJxnqczRbsCPHReRunJSK3tfjzBJzT4JNGgUXthBppCi6434644",
  "key2": "2nNf4XpCrjgZNGzPG52XTmAo6Va5Tjqo4c13svaCaSVNv7475GpX2CTJeKH4a9B68y9hUxDVVuuzsdBNsHbne1kT",
  "key3": "m63fZT5z2AkxENNVpxLdjZtWTS4EQiHNuSQHNd5FPQSstxmHnMMnygg3pbabskSBXUE7MQJBM5bNQEpspjRk3q5",
  "key4": "4fm5oLMfj4BrgsbAPvL5iCaECWVbxLgWkWGEgV6QzUnvi7QH29c62WaxFxRugZvqdDMisXagmbzXYiGZZUkoxD3r",
  "key5": "3FJCuRgYsDXP2BeNbdzJi8rVQV67TZBq6PUzhLda9RdRD8gwkKSvTafmsTgWsiD9WJYse8qer7X5mCfa2KHB8FRB",
  "key6": "3Atoc2hrU2L5rpzjdRkvBdGp2mbqx8TYDV6BEj6jo9qxUG7pz6NefVJG2o2SxMHp3SEPtRxHKFQUbBPBZSTFMQJt",
  "key7": "CwXvjQp7zzEgJqjH32CiFh8exXbdyGfU6EmxohpsthWRko8amFimLtyX8DwuZFjSwQraoibrnFpqpGGK9yczJgc",
  "key8": "2t5jPDn71K3NMSe7A813DxDWMfcay9SUNxJFZCZMagTnaGNGMiQoai47YDq5DoLA1WmGobzGbURZBnwdGVZFPe5X",
  "key9": "29QcK473uQze3A411hZxXwDR3V2mDySS8rGpxkn2D5TBZgowNPUQhZZR8AN9SEVw3bRf8AGzzsxbpzne8ApyQeqo",
  "key10": "5osGZs3JeeqDRjraQ2idwrW65U2SxV5Ue8Y7DLwmjpw4WSjd2QgDJKEJAZZpqNfHpv4CPumWQC8WPUzw61Hy9dSN",
  "key11": "4C3HbEnLJYQdZ43wkVR6fjCTHLYqH8G5R5FHtLBXyZWBDKYgwESW9sX3JsHJMuyyGDdvcWYAJixGxJmi35RyXEYS",
  "key12": "4x6f5H5vkekVUpbtHHRAaTgdJx7coQo72vN7z3V2XWTZdDEcSkzZ1yNr1zJc7qxKTHLB8Wn9tPPv3xhNt82kv1i7",
  "key13": "29xt7EB8A7GmNDXuTWLSRGduvrAkTYPSHGKZ8z2NKWXuPtXLzjw51RpQNwqFqxTaenSVLZFkYkjxdidgxjoRBZmz",
  "key14": "vgY1Zbw8mtt5F3oFBtWviGgAP62pHD3TFvoD4Ap4FRnWuTuH54mqwaBm6Veuj9KNSt6f4oYSFuoweXjmtSLVQac",
  "key15": "pahMwWUp8fKy1RmMJiDhY6WLVaDUfzNBFWZP9sW8V414muNnTnZGaWKZDSyK1LnfWPA1wmTAQnigQpdvsHptKZP",
  "key16": "2EqcYdqDhL6SMLjoMK93381h18VFa9et8gX3oFsg7EoV379cjCqMaqnK7ykHMVBvEiwsAMZbEaGLM7ZZVu6r9i7X",
  "key17": "4KSkPAamE67ZFujKLXWLS19aeAo8tC8dUfRUdLMqVQmGqJMaHH7jdkaVnPp8F5mWFuwnptwbCHvQfWQ7N6jjf6aY",
  "key18": "2GTbNvSZHJMhLymJDR4mC4KymjLtFU2dineXTNSc3K7h2cM5RgPKvX1h9Uw6V1MxSy4E7YAyKq4ZSj8EBVBCeSVQ",
  "key19": "3jCSmD4ktyfy5TL1KCeD8mHac4N92AKF4ttTqUeeGF7EAhBGfha9P4wr4EjQvxHz37ShaXNfy63vz7WtgnrMXrkP",
  "key20": "YaCmtf83Y55Ub4CRwbJafskCPHhhpSVyQpcHJaFfTmiPECL64qYuocRoXbuxTNf2isB7T6fPB6TygBbqDURqgzW",
  "key21": "3QrxtnfXPmaiyLNsWLgyby4RaG4zThXUh95HmSm2vKpEXb9T6NSyjQf7dGGNgYM8aAiSkRHwX9SGDRLpZYZf8DZ3",
  "key22": "2JD7j9QtDLZvHBGevwcY3LrAmFPEaEK4Wq3aZvzWZpMcPomeUYAU1BX3mQ3awRjv9MLfobwhJvnwYuKL2J71SJEJ",
  "key23": "2etW3dNMVVLnJkxJGmEnb72uo4DrxQNCAWUBA88DN1MGhh6S3ZT5hL9yrcLsW3tWLQW9y97bNPyJyUK9PQiNjVmy",
  "key24": "4cpcfqURiNRWT8WGK4WKz96nvRE8zR16KVYhaGmJvP5kyBa5MsJBhPLm4s3iRuRqXHsqBKqjkBcVhr8HnHU96d6M",
  "key25": "4Ehcv4onLXP3Z7kTfCmVyNf3cpe6JS91gcwSdhSwtHaJUPYg1xEZwhe2WBNW34Xv8Gj9Jm2VmKhGQ9Q5m1DJE52A",
  "key26": "5iLSu2W8VNeB4eXXP3nsTs3EPsxEDH5ETbMoqkBf6TgFxzLr62xPWtasbxcWesrNkrmHLkDmWvADkiWiSg7Z1jPX",
  "key27": "2z7oJkqzHEy1mrUzPxtrg4DAz9ADbEkcoW2DDEHZ2zstv1po3Xw38MeXzDSkN7uGYZiAqq1hz6F5ZTVXYJXKM2R6",
  "key28": "56hNpNTC89EViQBFvELpSAHNV1qxcHTS42g4YYdhLZP862HWeWPDkbcxH4s9wtomD8LEK6PBSmSC1P19CYuzX6ij",
  "key29": "47mWEtRmuwW87KrGxZNBCo7Z2R3SuJdb5AZH9FQwtmL1xST4AE57i1gZ1L7bKw6hEjXvZKunjQd3Pc26ZMkUjaVW"
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
