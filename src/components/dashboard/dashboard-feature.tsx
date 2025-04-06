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
    "3a7bakuKLwWZnfJxUaNzRXXN2TL7B9SpFxK5Gc9pVL9TLb698KmYQ1aeXSPXwQuP1LRzcxSvpeZgeSmaCTbf17Xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZ1red9PUqCAP7trhGegqtGbAiKbpBKdiDZ4E7E8htCE1DmAWbm7F39Q63gVJ4sm7QziNjxjRoVNV2SQ6pX619b",
  "key1": "4XsCnqiZAaLWeX19dmYyRCpsviGo16GgrnXjUEcmvKZo7E3zxK9wnHc4H9WJ2pr8QDQMrWHpLd4oVW9nYJB2qbti",
  "key2": "kjK2ig3vsZgAA657YqRg7LqVUtKFeNbxq8oNAggYpYkAWBwtrwbJm4SqZgmdbzg8hKLFJsfXkwdPw9UNehoMi2V",
  "key3": "5ZZ1XoJyFA7LBmWMX1MuoeZ73fhWcSf4XfXaiKTsZgRtqL2w2z8zJEtMK6441oVd1pVm2bb2vgkfjMLxRmsCw87k",
  "key4": "3Wq6kRihBzXgZTv46o9RzyCbhezEbrWWCnh9cLB5Auda2eGm9g9JBQka99jr12fT8MMwHAFc5riCrX5JvFLYGLrD",
  "key5": "2YU4QQKAGfQzkY6fcNVGvZrcDjUaMegVgbqB76xK2HdbjCzZyKHHTnzxMyamAvXfd5AoZGg64wfShrV12wrjWzWU",
  "key6": "sExZVLoTMosH55mmUHCexVk8UjD7D6Unr6BJZkRaEoRU6dRbcNPhP13VZ7x7ZpSfjwqsqftsbeVHg411XQfjhJQ",
  "key7": "4Yu8AxRuLHo6yTN66wgvfdommo9f57YRWmHcFLD8Urr8PAQTRTxhRC8mveSLoo7Vurnkyq8pojcwqLCCjCmyR8t6",
  "key8": "2fCkC1StrU8JebGX592UxD5kDLUnWSKkeNuWbZVq6kvd3bNXK19M2rgQUgLnk4cx5ij74gALH8jLYRZfreyujL62",
  "key9": "2P52zesydMDPV7LqntmnKuJfqE2c2Asj7Vdxp4BZmcrXHkqHbcaTU7MmZqrRgo4bVLUDXJ8P7SLj9AcVYRLZ5r3x",
  "key10": "Bp1Bqbji1afpe6evVsyZPHrGNBqVaTNSMix1Rw4nkB4BifJrmfYCdCG3kjgrAWmcqQsMKRubDr6FG73vmAWr1Y7",
  "key11": "4SoPANZx33WvwADKiuJwheMRLwuuQR7vwqrxGPwU8NPTY17ut7Bos2BkJQfUewFErbh1hewVJTXbEm3HJxo71z9u",
  "key12": "2RP3GaGsY51dAZae8H4uj9m7pDXLfQU5EnSeLMrnmeW5dtNzyQDBFVJNRkeSJhzzVkdFT142iX38t5LvGeX162z4",
  "key13": "5E3szdJqxWc86QrAuWkbzPfkeWhpHf5c9HC8mBoUHoGrdLvLPukNNxHqq1YYzmmZponVyWMaaNKx12xdFVUSboYN",
  "key14": "2YUXGvcQsia1MDkhW21wEScfLmcqNPttosuQ3t4FfA7nM9K9PBCvqCqepgSrUc4CXCKuqqKYSP3nz5xjrB1s2vvd",
  "key15": "2BN8iRTNMaDxXvJ3Edv6aJeWVPZWBwFKL5Qe4XdchQH1uoYRA5VAHFWQGfVUn5qbvVnCvL8K1yrfTTR316jR6PZZ",
  "key16": "5LsCa3Lpm9zRkKWZUWC3MqUv6QJ62UNyxtekr2wwKY2vRbM751KJrBR63oK4k8tove89nouRa22oyfzNFEZt1Trb",
  "key17": "zdsTRvZHTf9FTHKXRWPD2B45P1CK5giDgxTqUaSB8iQSKknnUt3ZnBsNhtdEJ1bd6fUtaeKvis3fnvwW8ZuRapj",
  "key18": "5H1oq6VKRxFh2GEP9PWaKazWGmnvjHtBWWr5de14WJFPrdtVUhfiFuTxhTNLmEku668iwvni1QLRcH9u15abzCuy",
  "key19": "34MHBkskMJyARYehyDVatvFu1oYDJfCN8n4KW2tFBLnhvrv9Uhr2FssWnRxmFMWhFYvqNL3vURvdXfgPoiNq7oKy",
  "key20": "4cpetzpPvGxMwfQR2rToBFbhL83cNTjWszHu49kyuCwSCBwEndrpk8oibCSzpfFoo9WCnHa9LfK1ndYqrTxPDVak",
  "key21": "4WiyhuqTbH8puzw9XRGg3H4jThpdQmGoMWbcCktGiFdgc1YwtBEbP9TuhaDFyMyrefMoBpMUUqbWA58H8AuEpCB2",
  "key22": "2oaSV375eTHuCzZnFWFb9LitCzg5UMQ3hsTaT96atAGraeMKj5MyYWenLqPp5WUBEdpfGYSTES13ca9SNrf1mDwN",
  "key23": "3nM9Fd69APq3hmayiaTd1t78xN72rUcxRp22qZCgA3VmdbHZnQ1YhL2ZAa8HfgEZ5zeKBAbaVTz9gK8xXxx3bt31",
  "key24": "3NX5WY8qdXv5GvcaBpds8xkhQLyaPR1NLc5E9rscw7dRDPWy97EhHsztXnN2ctY9b6NgUrJYiawa4ufggVQ18Xa6",
  "key25": "2rhKMothb5akgLfZhV3rXkrF4EYCQcgSN77uwqWYMoru9yJSKAy7NG8dz2BwPQNkFPcTVeDnc2kA7hj4HChXuRKf",
  "key26": "4RPULDZkgHquNVxZHJYwsHGzWZ82paPye57P8FRB8dbvPP3auv1NB9uEUdjJFDvq4gMshdPjY5FbnyrZDasGPYPA",
  "key27": "626mMBFizsNEVPo6fB5nhs4JLRVdTEqEpi64o7mRpkXoXYNhMWyzXsUUcFFSNTZQYoUQnuQywq4PaRW9XeXhJhwb",
  "key28": "3az7sPB7y68yaE9oMNXZcpUYSp14czPuWdwwd7PM96yisvF5ffVwFYepzBa2z1gwKLF4jshFZJZXs6bVdVXRZVfr",
  "key29": "2HrFQpGoMXietXK7vkae6hZYf1Qr7fFtaqzHcucKCiQ3eMDT9R859Nr56VEZcdYr42dsBZsKE9aaa4wTxCtdjWf8",
  "key30": "5qk6kezM47bn1ABfTrdKncvuHE82PiA9S8GZFHWfBL7tdXrfaGQy199X6hz2KH8tLruBBK67DytwLHLRtpv9UsuX",
  "key31": "YcgFyhuDBNE7tnyUu9AxbvZs1KL5Yd2tYXEH3pZEbBCir39A2voibaSmVWKiSNnRPmnL9WgQTGhKegiCro2MWgK",
  "key32": "3ExGa4NpgBuLbCaMvDCJ9Qg2T3JBF1WBayqbb3wVZT3SvUuDmCaiW8SXQKi6xQqGUmAXftxNM4UYeddCRVpuL5Ju"
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
