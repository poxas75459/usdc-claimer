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
    "4WaXZoeEjg5iTpow4ThtZfYdBDySCqM6k4nXQxAFZhiMVFithLUMRa3mzyovaqKw61F1nZayKtCnD3C4ozDTqzDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mi397CAFcpZL7T5sD87HEXWJf9YCrpTPeFHzcJx8qpPKWLeqa2HnYrGvhfq84QyWCtsS7YxPUJhG6bpVENU1jgA",
  "key1": "2bS3cRaViLAsAmNou6u5ieJqLpj6NxTgeeADjxAB7LM9y3xcaimoXkMgqYsbQBoKo3aRoCP8ZMn6NsZ9Ng8XtCsk",
  "key2": "5a2YEGpRbLVoeqz6fqqwun19exKwCV4qvqBWdPa1RS2jLHzxRpfcaMKLPXMmW8NUnRqEyT2knHG1o8ecY23A4rLu",
  "key3": "3sSBCxZ1xhHRjRTsaRrB87YUwavfh67mMtFdxCR5fqsjjcsVf8uFap9dAjVFsVntAyiG51VtdYtbYhVThi4j98eA",
  "key4": "nK374S5t9qBS8NHeDjPWnKMtbtcw329W41VB1MfShazzatZvuGkbLZ67KzQUJPvQ59Qvs7pS5QFcNLjmtLL7fTB",
  "key5": "LrXREgYZgnJUexQzNApWKHNjHLcwk9CAD5yRvAmxgKMBhBDXnhRqquZ7yebs7DYQqizFWgXJRtLbmBfWdxuPHPD",
  "key6": "UEgGQBVzmUQkHioHsq6jeJ5up4Azwd98s9m8UvNMgzGtE7DbrMzrCwoi3k2Bf7h2pVppiUEZTRMaKySLb9j1kwo",
  "key7": "4Py4ivtKgEvkMJhgiNNkNhGuskyLbKbi5WNm3BGM2q2R9EaQdA7qmJt9Jq52GH1F4nq1UfSSqK3dJSaNmW7MfKtZ",
  "key8": "5Em44FZ3xeJQ6PgRsM5W1GJHjhvfFsRgoAVdBPbWpiythwiuKFJMvtxLn4d8PKPyDMNmjX9fb1p5BA4QKNjShYYS",
  "key9": "22WWoZDFqzeP2AJvUYLJsUZt92YMXPeRUjMkTCRvnNsfc2R5g8NMbyAjoZHnnx74nDzyyWn2iYmB4Lp3YcaHdHFJ",
  "key10": "99FK1iBwYpii8UqDvaLDzCfgzB4dMTTTy7oP1zNXCgwjtpHnw8aGhk8oPnaxxj3js3Ma1xBLs1knnfG49wrJD1n",
  "key11": "3PGPGpATGDSdJDMPxUZN9efdV5RHCFTQdVZvwZkF9yPH5bMZw1z26KwCKa25zeUvt1mNrBqQDxxcDS2YPuicfqAv",
  "key12": "2WSuGKSAMF99E19rTyhJCXEBNikwVjUYCYnWwQ4DNdQNaC5EezZxxHYn1Rqt2mwasJV1UzGpXhAdAYdbFqHqfEkm",
  "key13": "5mzNuimG21jFgJUZ7QtBxoy3uDm41EaRtmmaaAETDahyfT9ELbpeGXf9TwLXtbxX493a2sATNjiCRH34d1bsjw6s",
  "key14": "3NmRcAX88BQVdNYvqSgJtWM9Qo5gLfPxrwAugmRN2f3a4HhuUnp5QjoCsaA1RLYpACxWNauiTDvtPuzU7QFsVU8n",
  "key15": "3qXEYFP3gS6qXvEJJCy5r4o9e2bdvKPMyDSY9eChGDBVfu31QZkFjUJPwUp4ZBHzEP4nLZf1sMMLvhZn6Ap7sh2L",
  "key16": "hy71RXmDWb4SX24tykE38V1xrmyeQRzevL14xdSmCFJhuTPf3VukKimWxZBoBCSXGgRSRXdReSkigctGCAUFCJG",
  "key17": "5zccVJbZR4meRxFW8wAafKiehzBUBcePMMjjQ2UNmm6sASNsMbpvowp9wwqNNahE8z5dStAufiuXgUMANit7ck8u",
  "key18": "5AZaeBYUZfrRHMqaqCHWF2TKLS5YTopCiUiRP7Fqq8HgkVPqtf3QAFMb8ZVDq53rheigTSQFiWmoQWRrXXAxxFur",
  "key19": "2CKBfwrVQeHaLB5RmJ48nD1JERWphPJh8Ai2oZqBsqFigBdzLxYYVydMB8H2S3xHLCjJ3ZGtLBz2cvkhWQzXtJAL",
  "key20": "4Da3Z3tX1Y24acb9jajemg7fiTZZc2dFJacCpN2aDpL3d77uVaJTbSFs9rjgj7HJHs9chSa9q8BUsgsHAotRSbKZ",
  "key21": "2NeoNAizvvhTHiQ6sCkHPtVtoYv748JupUT4RA4G7suozrrtZ8CAVvWsoodsjuy12RdCKGk3H7quCx7u6gB2RLHr",
  "key22": "5j6ows7gAatWrwdxpsUCkfGdj94FQELeH32UjA3YVX7gqBQq14j4wb3GD4pUMnZP23gP4w7CVNcLyhgf2vZDwfdp",
  "key23": "nyB4igcNDtnyMp2gpfvwKptiYZKPysd9gB1Q2bMgYtdhgowtdHXVNAsuEcEjgh3NjFE7p5RGY1oD1kgU98aD9Um",
  "key24": "5pTLeebje2RqLLN3g9T6y7CqfyRABsTP7JkYjSqvASptffurfWC6YHjjQLQxCQBnBuG3yxfcses5M6AxCxRFtvCX",
  "key25": "5Nrw4Us4q7DjqLKhJn3WEdERYg6sKWpW7LWRF8jvsZTseuG2iQxAwdyyW4DqnzPaXgKDFnmLuEbyZimtmQPjbPDT",
  "key26": "53U3uwwtZXRsTPySqnnf4b9dUgRaHQn1Zh8GuLNnWFenfhyDJX9yPnKjq21hGp1C6MLzwV9bTNti6QheBTYt3LsU",
  "key27": "2K91tbNGjt78oFsZoTq9PdXyzHVDVGJrK8u9mESz2BxbmaPPCehiDTTihdXjs8muVC8WxNRkmLUFLUb7zG5ZfQkh",
  "key28": "64S36eHRXX3QeoM6pamhmFM1hiGVwNvTjiMoNR2kbPRdTTNEVFQZJmLUURX9bTpPinQ4DbiTCU6CZRgwX5KyW5Mj",
  "key29": "5YJtYFtT9ab1vc5kzwYYAufsXyeMtU3THK5giioR8aF1cKWA8c1TcHxiAkTEJZpvXDoteHsBru245d1SQ9cXu7Y",
  "key30": "3Y537andpoe8iXeQSvcxyYGsybfk9ymcmg78fugFZJeVyDJVx7bMyE9gxDKA2XtfxasZ9iX1j8n6VsgSAqEnM182",
  "key31": "3H4Scd7fbZQuK5StFRGGfMdqmdF64dhu66R62XZ4Ld8AtzzFrNZvdRFtJrgfhZpgcBgYbqXeE7CQ3fFbtQu1SoBJ",
  "key32": "4Gd1PVW4EAY7b1UsH1KXPMPFfnnnq7Cq3dohC385GgQSwYvtECeGXa9RXFq9YCzFAN7biZHwy1YTLjw42X3U2Dve",
  "key33": "yYz2U3HD7VdCg5LWVDy2paj7RAkrmjtXb6DA9KMaA6knnfeEMtdBsMFCZUPsXnN7QKbizkT4qUFonueVvfM7GvH",
  "key34": "26dBw3QEx2igfhmSpXbmeff8rt4CJujvoxrcVYTUKq2qtsGgXwr2Yq9ZGhUEeakvfMNEGSpWNfCfQULENvr8WKAM",
  "key35": "2xuynRaGv3LgmjsatzF4zNwWEqkoxtsWJB7gzBs7Bd1GcdmNW6iBEWq9NgAkXkWeDTACCwrVsEMWVbXfJ13dzTVZ",
  "key36": "zBV7Y6xJ8LLcZAY9Lrj5NVhviEEFXN5YPLnGChtN5A718WuHGxzU22VsQ7nW1EHM7fR4AoHeL3ujKGVjwkjHc3r"
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
