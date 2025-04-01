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
    "hNGGmB6JsUWxe3SnAjyVrXaKfrRjcYLL83NWUhN1BKj1PEm1fMsRgyocuTPuic3nfz15UjXoX4RWXD6VmMpxizr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pqvzBVRP9Nh859Ky58hVfERyaZoRd9YdFfGgpZnACLPmX8NsNbXRkwAFBKMzpA9mepUMJcTdXuVf9T1NNpPYVJB",
  "key1": "3x9LWJA33gMRPj52YKWGuocSaKnBgxbv7AUzxnxJmbrBeCXG6cq5yyymhyZZ4fQgEhyzZZkctyqhHWsRKq3dhXx6",
  "key2": "37yUdEcktwoYWBKXfd2UVpam7v5K8j3MVQeTh2zyZrsTp5rwHtBLrbKNvqTn2x5piUKmdqFqQbYD9RovZHLjMuQ3",
  "key3": "pndGAh6KXiWEzA2bfW5wsAAyeTYr2EK1j9cSTSXSnoEy8dxVcqj6ejy6JnUvx9x6SLkAWGvEALnghcn3RvWLoku",
  "key4": "G8Zw9NNPXTXJhYRgM3Xn9wFpwsPzDhPZw4vHp7FQy5EHM88TfBYRgN1AFYH8maTKjnrwvTYSQFiwi6J7PHtyUf9",
  "key5": "pbaqnCYp2RARTBWBXeo642264swnTqkL14J6qXmoL2hEiKsgQz3BHiHThWLwF4hrups2UyBrg9TcJ85x3nGRqcn",
  "key6": "fpHXDG9A241kaxX9CWnL9q1JXv1eBbiUxHcMfrcRzi4RqPXS89stvT3GKfags9MbcYUHrB2zxiDCsSa7knNN2GB",
  "key7": "3kRHRaMGWbYUQTCVD3iRLzyXjxe6mAJP78CmBktFk3PqS5BzK1LfgJQjNppdYDeFAz5b4fXiqdWZQsduFwxkMDoU",
  "key8": "4uNY55QFyqnaKVLABjDcK27MkR911MtqVSnRCiPfx3Q4qBKrnNt31D1xh7LZWcXQtdt18eYzmk4PYRoT5zL782YM",
  "key9": "x9RZAjvR7y9JZMAV1Acd71L779XBxB9xi7deNAaJLvXursDbF2FcQtj24DspC4SH73CKsqvz4qcLik5HoXZ4vU2",
  "key10": "2hRp5NdAYEP6FyrS53HJMqxNuKsUH76rwrAmjzMpvkVPsXE4uwaJh1NHyTA89yB3zh9mvmV5FAHTanF5kpey92vd",
  "key11": "3CRFFUPtCAh4NnVKaU4DnREd1PksYonzVAn4zKxxrFaRq5man6qUGq2oVTY7c1beboe9EsqaX4Ta6F5LQ6ed2naM",
  "key12": "38N86fkeZucjcP9WwM6suGZq6fpFigGf5ybu3vnie7DLb3phhdjKH7W1got4fZyWNqjk7ZnvYVH9vJYQhUG7KLmv",
  "key13": "2BSTgzAQcxs6pe1juRoCv4sZSbU1PPFZ6EN95uQdjGNZSvfJa58TieNH9FrzkCRvxr46UtQvdRd2Drh4nhdarGTR",
  "key14": "4Wf7obhEs8TyHgghNsNZrvztVJPrEooyEuxdPkSBYy5Ux1pRwzfgRFCkykci7CEsyQaKqVZu1yonjF4r6voUJmzQ",
  "key15": "4AQQ2TsuZ6rn5nnJGMqtaMsjcd7Gy5pL3WHPKYGVyGx569J2B8DpcjmUxeHMn1AyNqMTNjN9CWTPhNFm7iSdaFUe",
  "key16": "2FWww7DowkTWffKUxUngu51K3hjifJMWCmmuLtLA9YjHc6LUWsgFdCX6V5sVo5NXTE4ytMEpZjF9UeoB1AN5616W",
  "key17": "4EdfHQsAodTdUKtXAkxPPZzWmq2McqMPu4syw74AcuUermtH6RwY28yFjS3qMXwuubbf7nRgnidtXQx8Keb3icxV",
  "key18": "5QQx56y8XU2Tve7SpDEPyha6pnnfk1WGfAjRVCh6MaeyXpwJhKR4Ry5wdbmdNtJkQ57RHPDo3M1YpWacHy3dkazA",
  "key19": "2dyAo1F4MTGSigTSuAiyKWiaxeKTeLAkNuTjnWFHyu2vJg5tBNb1jk6vYnDCMyxQS6LVnBAXgm8FrNV3JmrKBKEW",
  "key20": "3wGAGza9uvASJwTT7EcbrH8CpDu95L3SAvbTyQvCiWBe9haPuQu9vdtSnUVGuW2XpUv4uyq2a2rg4HVRNUh7y4DM",
  "key21": "5LgEp3fb4JP36zaTECgdofhupc6h62aZeoJbCpAQNrHjaozDXxoiNdeqcL6siJqXpCBY5Q4JRXJQd8BaNWSA66iU",
  "key22": "4FcmT5wSUymQi6xRddU1frQ6U1rrZfxj9e2D3EzQGAotygTT1dcM6r7zgFBtXtSreNuEJKbMUrBPv9ynSjarfzBb",
  "key23": "SiGiU9GwHayx3NujChzVF69WE3KAjAYR7kz7MFCZatDQkhAMNYhoXJ1XwTuXW7xo6ywdMiN98CufmrkwaH8cWjs",
  "key24": "5rjL96SdFDXCDWCTWECgebnuoaX66jq8bZwL5wv7iCosrh9E42ZSTxXd3P8tDkNeRJdDkroHm7qaNNyuuuKvVakK",
  "key25": "ThF12hGhhuv3LCDjHQ2rYX7T2FVcs99t6PcJngnPqGCwizfkA43QtnDMA8ovJovfBoBbYXjCUFGFetEAPBGoAjZ",
  "key26": "4dQwoGzbEjciseMZoWqVDMfGLENDVRHaD2datC5F8N7cFaQdjjfXS6ajGjyDyD3tvWVyHogHNEiaEyF2jd4Q4eM4",
  "key27": "tsYdNG1aKF5LZY8WPUsAQufxFgktk95VSSYvWkux6Dpj7qoLoJFpGTFCoVyNqBWj1ZQHsp4HZQNaLsaTxGNqSo6",
  "key28": "2Yan7k6iZQDTLTjbEAVG7c9AnKvedDJugDdei3yWVEc6mJczuqv7rKqgY5DdYt5vwcJV2b2k2vwd1kxGiddSapwF",
  "key29": "mMs1BXcfBJ7BEwDX3m9LzA8YRYfENbJWcDNngoqk8b9qk7NcFppBoiNg59TwiBoHMukQKibnmeFaetg9VFR3vS2",
  "key30": "3aVpUioVNmecM2pEXnm3Vap2XXm5JtKyws6kHLeYr17xEhJpBoiTX9AYtaagwDnaoXXbRVKXXgn46XaPcD1DqueP",
  "key31": "59LHC13sypC6FwMGxbSiM1LdX5nmBzpWiwAqChSi7unttGYvwfdaNfAjKCGb8yJHraySFMvCZcVtQTbeRAdbRSwQ",
  "key32": "31A9NkUQnUYi7Tmy8UoiQkvAj5K1fM43CRhe9ndHcKUcZnPpU1RkdLyfaqNDpGNxjVQW9Mk6C1Ev8RmNsdcuJPNj",
  "key33": "Xeegsay5WrZpLnsg3ipCPh1NmmxeHTdN6YcXR9oT3aWjtEdq4y1Bd58po2wJva7R8tfPsyYTYdVJF7w5QSKwmAT",
  "key34": "2vaDiKoS2WdrqsQCqWB7NrNwDtLP3KmNoN6XPGPrfazNNbg6RK1FbhPTd7dbt15cd7dmdkkA7rrcmEH8pBZDydSy",
  "key35": "47V5VqsXGvhKTJGyFAzUFgZcBAtddzkBUGuaZ6a1M7TAWXJsDGxQjdUmp3ooT5n95sedJpayEYPS3WwbPMMiYn7E",
  "key36": "5vRqTGDzUrZYnxVugHzN8Ve54GVE79uaAyEMd6XTBF7LCTGdKFkizmnHifPNf2FFmocSmc4rXxcm1ziZCLo2j4KT",
  "key37": "3S7hMdTMyruE6YvhWg7CqYTRhjBJs1pLCBVbJM8MXbchnmepgwQxY2WKKDG2MdUgTeLQSgirSSLpoV6BeP2zN1Si",
  "key38": "3m2NU9vocyZsA3AXWwKdQ9QWE3fhovDqh9WgFiP2sRftsJYDoZyafuj6TiKhhf46vaw7RZrYrR9drSoRDf7qFbVz",
  "key39": "33KUfaFJbN49TXd4dnbRAmk82EDQDNrtRdCW1745robxN2Nif15akNaHPcdKNiSznQTBBSRXe5u5xvejSUmQtRqd",
  "key40": "5jRSZBrdo1LUZ8vnAv7Uzw6mydytD3CmxEjMyuFfnV3PRzf5d4a9WskcndMM5AndGdTBQ2q7PyvF6L5VmGakqUdp",
  "key41": "2iD65RRUFhVzrNHvbQ5wUbVMVbbcW4bnuvJB3ozmvKKy1sTG3pRqem7ieHLeFRTkpkPn2TpSoCU2tfiUhrkt8JDg",
  "key42": "5yVvqy3j22bxivgSdoqEgUEj3ZHu7hLYqr57HHHxUNT9oPNJZtd2tGhuuczp5Er7hoTbwwY9EYK56kui7UJWPzmK",
  "key43": "21gMZeT92sZKWYBhu5qS11pFFKjgq4nLfdeBPVYvPESi4uP7ydV7S58JS1AS3KZr5HzcC5HH9g7QCjodoyqY36u7",
  "key44": "42gGAAT1QU7UGu9NUNuqjuXAzA1FxQUmZUPfwDAV4t6Duf5mtabuU3xt3cphLSGYaAcf4kDSTiRySZNykzHzFSCZ"
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
