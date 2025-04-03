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
    "4cTX7xvuP2gxLcyV3TQmR4vT5da1pPMYSpDxbzLnZY9KUCuthvx1pvZsQQ69SV9Q4yYJWEGuvybdnksVeREzR8js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9uqy1H6sXLBzq5BD9ZnCh6QsuaFE75TqkdxV4si4QTNhxXXdi8FpdpdiNbPcjomcGoZMNghtgNvpG6GYSvZ5Cp",
  "key1": "4ZcRpKNXPXhusnS7ztxtAs2b1XQqs6h5TFd3jWL7SmaCSGsjEhdCmFBogvZRuRyK8ajT2zUmzoC6asqC555QVn7s",
  "key2": "32116Bx2dn353Gzfrja7UfXatz5jwgMAx1z1kjhx9EhEUdmiCTVvoinaQBTSsB4oo3tsa3w8w8kn45f3XC6HSsem",
  "key3": "5FMvMY2zyRc5ib4KcDwMh8wfKg7MUEzcossXsu5t9a7p9vJoYXxGrtonCu8S2ncuH7u39iYCxMw7zv8ZYG5o2KSE",
  "key4": "2QZvERyrbvMuVHumLFjZXGU9vi8jPMBsVJvDEKjqDCP51EjZ8yVNRt9MK713tDraPGS1YHaWKgVq2Wb1MQCxgwXM",
  "key5": "tHk4Mf65mizFkuVFGYFA3J1kibGCetRcYuaMisstdxPb1LKWXongKPjvXyJuuyQgGSSqWbnSF63Gu7dugVaWALA",
  "key6": "5u8y4izfhdnwYPVDbCw2etVRZYMo9FzRkddTnCdDRo43wTNJa67VdD55yPCHRQGfc62wDmKd1S78d5kPvC4onhPb",
  "key7": "9bCeMr5nNS1FUcLsW39BwAEdBab7cCmHP1TYWGU79B4nrtBC8EhKEUGVhXkAfJi32vE8Uej2jah37e2J1zeWKRq",
  "key8": "2hdWR3rL7QwRzsmdrZVTBri9499SzGtzuZHopXPngfAaM4EzjrZa5k2qMgAiajYNXDmRKDJp9uczM9Leyvb8Hw8i",
  "key9": "5gEKU9UGbT2sbqoypXAiwshQmWEd2WtUpVyg39okL5WavKTxEhAqQs2aZ29caTM1ko19dpByah4xzDszNGUhLU8W",
  "key10": "23T4S6o5CXpyrUxiFNitTPNSL3vavnsEbDAMHfMEYpSiRvkY1BhFBZkQP4wRN9e4Fk6SqVgfVcBNdvtKMhdEU9vR",
  "key11": "X7U9DCFZH6nPph6dMAtrWM9ZKrQ7BfnsEFHucwxQSd7jQdnjmR3b7TTyeJ9zRrTVas9DiZktE2JGU2Pd1N9XfMD",
  "key12": "2uV1HkR2SEzznpR6aMoLoBRf4DcbJAnQSRY3zEGZpTbKoSdfgEMSG9kt3BdVTwqMbBGLXWQuYJgbKMPQzYJYP3zX",
  "key13": "4XXNDpvchYxZrTgzH72bKsntUsd8yqr65xMK6mKPooWfWzS73QFxqXGtao6SNWY8SQ6sU6gUVaZ6rQAwtBCZuS8P",
  "key14": "2HRwrmAWh5jcEV7tcEFejVZ93hrUeQNZhJtSRWgSJTvcKPSj5cPVLkdJb7uJ5cATXJwn7uD6nLemh3o9kMiodF7H",
  "key15": "wavNSQs917WRtmAfK57wbi8oz48NipP5Wznbvot1pKbAyTLTy4QzTT4JL2hVq4GpjrchGQLoeuT2pjNsM1McLyz",
  "key16": "3dQcif7xVVdrv6LdfkQ34BunKVUD7tZP5PhB8Mir25h6Z7uaMjgkbTn3vFpTQx7HzvewKhK4yUfrC4g4ByAWMpQE",
  "key17": "3Ueq7CKbTzQjPR1L3C6vpiaoW4US3zvw24dF13eF4AmSFAjkRCaDAXUdT86zBDQorMa19yjqMYTSjhxyVfPTu3LW",
  "key18": "2kP9NhGETW3nc53KbzmrfauUBpRvqY1WCGiA4SQMB35sAEYAr5fmEUDxNvcrBDcqK1tapxZ3FL6wmcLFqM4cMA48",
  "key19": "4qL2rcz6x5RX6x56Wh6f4Gg4LQE69dsjZgBZUBGHtskgRCasDm4ea3ehkUBRtkXEs7DV1nEV2s18B1jha9TDuAkL",
  "key20": "4ygH3tSxmk9jAyH7aUzX4zzkt4gzfxVrMqsFwqm5S9fuFMKu8QtRd7UhdrJXYmYcdpSP19ijRoQEmZfTJXZsMinx",
  "key21": "3ZMjGFHQAE5JNiTk7jVrtN2DXPGKQdTkhc6d8jofzFdyqC8dWNWengwKKn9feLDmQEkU21rqKTsxX331LXJhHrxV",
  "key22": "3VMRWSdwY7j512AJudXsNuGyJzFrdqJUQcgKYFFe6Y38BAkDh5rH3ght6neMGeRgL1zxh9bNafKbXH4n9XMJksrt",
  "key23": "34xwtCLdzhKYuuwAVqhptsSZWC4juCHsyACbRP8Ktt53qtgRfjDKUYguTuUHevRdAacSgpwzRnjyn3MSeVnp6KYA",
  "key24": "51QiKFKm8psZpJ7rut1ZfAPGDbrM2vAEu21di1SfnVCvtDZwhbSZi8Y97mCgbrkdV4zxPCzonBGU8q8rdxtgiqi7",
  "key25": "25JLqbNDgkJwJqkGxPDCQGb4mdUw1ZGmyV5UuQJidHdCccmaVgUEe7e6rKqgMZsqbeVacid1UuyMcTZptWBjSiGe",
  "key26": "DGwYcTdzjDKAVdu6691Z23GeS9n63EUyuPoifpF5vwt49RwdD8cWUkRKVuLmUfHdP9jE9XwJDjB5qqQmnMXWDAR",
  "key27": "5o6nq7jG8gXWVGNyk3CewK8vsyKUaA6LoPg2wPC9Gqp6ZYjPVffCR6Ksn49RG94bJwie1kzzruzqm6NxjxJVQgFr",
  "key28": "3jDEcYuqCJ2yqVkkdapuRDAHhmtvmdKXYiRaNqfksgdpNf317z5UrDhSPpk1yxa22kdWYtsymXzECLKSWrwbms7H",
  "key29": "2XarMCCtY1wdCEWXjE52tiVzJjo8z3tTgZspPXtaooCh9P5p5AmSp8rcXi2jQJ9o3LikY9SqAeSY5yaRh5Hs2boV",
  "key30": "5aea9PPAmTTasULN6mQN1DUBmesGUC5H7VqFMU7xwsuNd4r7Sx9MGEpSKq7cxApuSSmA224kzfABxiCPqtujyDac",
  "key31": "2DSrAyPUpGcK5cUjDkDXo8RvgFR2VzcQeSBQkwLCNeEbw4T3R1hGFLCuJeRvtJVnmwhwjD2Q2dHNvfXzsYqY7kQC",
  "key32": "3hZEVyRw3xLf1UDJVbHpi3gpV9zex3QBaHU5NoFe9pXAvCRHT4rY7aD9REZYPDZhXKpoicUwUcvnsxx8A1UuWxX1",
  "key33": "2byWvMBhrrvCxvGzLTnEWsGerxG2xZot57tVFjTWxuskX8MCuGTGJyXbF79bMg1mUo7uV1j7Qj6uL9FtX3jjL2Yv",
  "key34": "4F7QCL9TKAmzBYCCo481hAgBzE3CLmTECpH37HQiMb9iE3TVnYLHQDEuGMT9oekk5hSGt8Y3KihnsVSKVKW9yvY9",
  "key35": "T9Wigdr1h7HgQRsvwhJzTCjrD7yq45ogYCCtDYm1FfDRUwvHYPHzC6BzMpbtfeLob5kJzuYEbrhwdtVuHzFDKf8"
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
