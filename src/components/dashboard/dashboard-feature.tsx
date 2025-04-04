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
    "5HQgL9S5vFUtZG8nBkaBGiRpRU2TjGuAcBp1bCqnZpMSKXVSeBQu8f6sYYFG9wbrQXTjuvuxZ54nKBjKu7X4Xdxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "325BmWSSUpt6q4Shu1Pybu57dpv9UzHQhCy8Qp4sSzGCXHmk3iQabX14t9j9mS8aTVzEUjU6JZk7GKjKKGdTVhRg",
  "key1": "56XsqJhrM5cQrxLePYb6MgV7XAydtxLEzRWF1g3tFHxjLZN69GTNv96uqtTDkk86AffsByfTuaPpVAjLKAEzC193",
  "key2": "2bPQutz4LurdYBTGSEYpQr7bo4Y3jFdvmD5JenBX1j5C4eHEu5KYCU2MWgd7eCffcXtoQDtCUiPBSpqV2DxLkNPm",
  "key3": "3u3xZRj5k9rCCGY6oDAgrynBrr6smNVe51ccsU219Q5A6X5K2KzpkWe1vLNC61UeRAMj7gwERJW6UbFUkMc4vXyi",
  "key4": "3WmGX6dGTAmokLq3BPkSVnPiAtscCTUTddyTgo1e9TLAuGhy2pVjuPwAkaBJtVvs2biNfvHH2zCruxEdn6rEzZ3v",
  "key5": "9EmEw23nKm4XeafU3DjrzMeJXfQ7d7RSCD83Y6gsYKDv9GFc2xFAw1ZzErYtTKTwixnQUCTFtStbxCBqK35AxgU",
  "key6": "3hNUQzvygZpLpoenjHb7VRdrTpGpHdP3Faqe8JkrCLqiViZ6fdSe1vnkZ2RfyrAC1LLuXg7WygbRF2bmN5CNZwSu",
  "key7": "3ZnEVB1dApDZK6Vhih3Pq468VEDumKa9XWZK4FXjih1b6x6RwVVJoL1tzBWThkGyzgH6AAqtShSNWimmL7KGT3sW",
  "key8": "Xz3qnp2NvckX9Hvq4Jyj4LyqmoJ8SZddACHgksJtJRchUVSsPM4GbJcZeXfTQughX6y6qnWyXid65def15QkCEh",
  "key9": "4eVwNDojiqYFhe8iLXTtgJfcrcGps4jB4UAqg7AfeGSapQH8BsG7jTnSy8dpo8DjWzRV7pagBiGc6YFrbWziBbtv",
  "key10": "3M4taak2gDgLR5fKKeudrrGyGRTceinC3tcrUGUy5GKGaGaQWis3wuxtXo3zW21DNwMoUx8mB76SnUR8hqJciGke",
  "key11": "3fTpLuPDFnRp9hgDrVgUPXNh3Au8dk1rxEXN8jChrD1Nm2FS6cYMRFVu5DcRLvZpxNgbLdnWnJQUVJTXEaGoHm72",
  "key12": "4ZFgfdrbhb8YKxSuwCwrPaWTb9dMUvVWEH8hnm8vhx1YtDHywyJ619bjMxWiPd1cEBoBPbh475YKudK6tZtLUdHu",
  "key13": "52gMQS3vGc16SXbyRMU2VUn9vYMsHvHDnZzgsVoNDBKTUqkwASPRpAkgXehJUvnob3N9ykceVHGdkr4qVMGPiT7q",
  "key14": "5TW1CVQm2UjkfmRZ8hXw8GoEoqtVYXnEQ3mfYy6fbiQTs7CrWfivLNyinoC8vymGaQa1XE1G4RyB5GLXEL4YQGX1",
  "key15": "Zi4drsAd46BUp9sog5Ztbd5QqGxYJH7LxzGJ7PW4ffmRdNZKtpNoLP9hmCVwvucVAmSvoo3tuzQzvVioz87wodM",
  "key16": "7y6kmMmhdLnsBm8fw4aQze65tCpKMagJTpoMoeZPkrNabNWiRm4XZpEwehut3oMEpjMmgjnBXEUGNxm4s42YniV",
  "key17": "sgRjKxLme8Qyn9zNJ9DZ2DAU7ER3V3i5LBQ95v1dX5VbyDiNq6KCVf2fNscfsUvc4C8giS7KBuc1nE98CTFT6pL",
  "key18": "9shuRqzJpM8pAbeUWktnFSdi3aGujjgYBXcmqyEaagSaAM45ranzeJgY1UsPLSaKScNkptoUivyDen52Axr11Gd",
  "key19": "5KNgg5w4Tk5CmamenB3UHoe5DFXZjVQuvH7vBoaoG9oTc54nLJStNtisuuzwvtwCBYNaLH3arA2kicCsZrzTYxjF",
  "key20": "5x1yhFvVz36rBSDetY8caLQxrPnmUuNXb4Fat724LChYxnZmZkWrNUwDKJEPuicbQkVBtLphN7sjBA4JtaLEnu6E",
  "key21": "4CyVi2wwK41mmqFNRWFbSmkUbG8bffHbc7TNvQSKpFnmFnWSkhuQEWGkqyPuRiVeY5S2MRZ6VVnSmkkdFKCTRMGR",
  "key22": "EVaYznWKoCDQMkv9FjLvJxMN3dk2U1Kr8sogjXHCv8mvKXjZeMKWBViSrJZ9SMu5Q2K3yNRbS6fcuuhoxNcqd54",
  "key23": "3GcULSAuw7qu472H7pbCfR7zbVfZvJKpsQ2yxL8rF4VzCknSC1gj8qN8DgM4QFmUUDmjdYz1z3BRbgv4Vnbq4EZa",
  "key24": "gi1e8i2sGXoJWQF9gjeXyrdf7S3PRShpxWNNSZgFMAM4qdVMU7NiJQYLUeDeFmLoYw7a8gtYsnscqGMNYMeK4WA",
  "key25": "4T4HxeV3PoRe2YUZ2JqGDBdtp64xc8n1STx1KKa8Z91oNFyvWUTz9SGKU8dvNdpDcHLoc1qtTMhuzyRsCcyVp3KM",
  "key26": "2rWEoWGZrFRzi75uUPpWq3zA2SSNw56GUBFvkLWaBWehzyYcAiHHBX2mQL3NLtKL2DQdNDKo3HRCx9C9z9u91x3z",
  "key27": "5fdVJxeDuoc6qs3uVmbvg8EGFNzmw36BvCrDTDWjdmin5tECiMMUeiYBf47Pe8V4HMeb4v8p4VeM8j5BLGyz216d",
  "key28": "2u747QinKBgxkhjKJD5NJM6awZRx97RnUVwXFzi65iG68cEqSPC68FR8acZUJmfPBSuP4PzMexkfoKtj8D3XLrCU",
  "key29": "42zHJUBo8tpB9299TEY6x3kWBBX1GdA3WQDqu3o1inuGnpi1kMZxspCUHZJWj95kMHGJ7en9giguH2guAnq4J8oC",
  "key30": "2AFQcVXocQLqEU3oMggKtUPtmJ1zywgDXBhzQSWdywVeNrwYCkbrBtWG27LUEghyEn3qjeYv2HYvYZRwJaBw5ATR",
  "key31": "Eq6qFksjarcBLgh64rgiaw2tMa6PfCgLnSzfApfZrLygn2a5tRA7DkPMmYDSzY2itNsyrDtpDJ4GHchdGyEEprt",
  "key32": "3J2HtpPJhZjztPW7EyFUAdps6CysAXEq2S9xaVEQTnM9K4Vhps4QHWHi9qmJ2ycFDd7eM5hwbhBrw7T7T9jp3Bho",
  "key33": "2bRpfJHszf4ow1aifUQjyqca4E9zHRXRFqkdNNgn9LrDWL9kFBwyA9LfrsQE8RjXiRjAcuqkTmabKvn4aHQnQHRz"
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
