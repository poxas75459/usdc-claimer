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
    "3hohKuGZaQZiwGxfqp6xUiS4jZLtYujqnKEWiwTWmFqrdd1brgNQw9qd4Kiaave9jwiwxTF4s6NRt2AtAjGj9TxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywzL7tVMDg6R272jtD4oJCBZJuFKgtWk3yEx5dRfB32vsF3YihcpKjBeJfm9TnKvsj1HKfoqMDMUa67zzmh46Jy",
  "key1": "KASXux7NyuNkJGuo4uNLWXNjv9B1Te9WN8Kn4HEzj6JNiUVFq3jXtGUeXEaaj8BDVjGebxkLXPTBMXHSxidWv1p",
  "key2": "2aM4jkW2LMvJ4FygKv7w4rxu7Vz689KLonRyHuGDppcocTYoe7dJRNwueb7DobmSRYfZ45mVqRmGgQ32k5dEDkW8",
  "key3": "4ne651oqq61aWR3caGUdPuoeyBSmm3QT7VTFe9d1rYEe2Sn4pZjTFRDbVebi13CHGbdNiS6s6eCDoxJv1FLURuf7",
  "key4": "rYG9wWgVYmDUHsSQppZtZdg9R8E7ZpST2exCiNbmELH11F9joVFaRVQugqfsTJdVzG8ieg9ozKRMz6k1A41eXjN",
  "key5": "3hv8jNyiAAHskZ6npseXgajSmM72yCmEDqHmwW6fw68tf7coTiVjCYmCEFnDT9QQcXeZ9DEgKdLmo81jS7cmjCkj",
  "key6": "3tuAMqCDYHR42CuAEUvQ58M4Gw5MyB8yKiXQf9zeAx9dJKD9yBD3MfvmWEffKqXyxxgacoNjFfLAs1SNYZuciSs8",
  "key7": "4N4KR22JnyB91DmCNDaJKvvQjDaK2jreiC6RTXq4fkS7i8P2FWeGLdTNKdGc5tSCUXhryN8A5JzSJh1KyKgdzomp",
  "key8": "4AcKTaQQceggm6GzwH2QoaXz7j5LRhm69KqKyAAP2ymVeN5gLazZzc3qX3Z7mfWEd9YizKzTfmy7kNtNQbDL5v4i",
  "key9": "4dLbbiPipYcNX8JwCNBJnqwaUjCUpuQxdexgLgoWPJKns73bu9SdKGPDsoZvH4xjD9T9rW4RLeiyYp3mdrYszYg1",
  "key10": "57sHosJYpTmjFaHRaew9Z3vZC4XzQ399UR18u7nJVm2EWei7ygWFuXCnuPvq4Fp6zzUG1xeM1CFWHTWvagLNjMxj",
  "key11": "3gst6qg1A4XnET51F5f3YkknqatNdyfsSNgqRDZw12ZKoZFcXxCrz5viGdtFmvdXLjUGBjCQyN2tDSXyVtvdsL3S",
  "key12": "TpK7CXd8f3x1sAhEgBjjsWKmibuGJz8nS7pknJPeYziXb7XMH54L9NJmPu6RhpVeALAiPv8vMBqyyZ6GdUv64v3",
  "key13": "3qLE32oJUcSi3cYtdv3ZBg8XXfprrLNaunAvcm6kVMPouWCKB8fubKPQCzR5gMBWof87X2vAGUakYiNDBbLqe6He",
  "key14": "33GHnf2eTpwrNGzy6XGFjyGsJcBFE9dB9khYPw4Ex8khLKXJ94CJT6vhus7stzETZsze42kfvMZ9LTLTUqMCKDYu",
  "key15": "2vrAWo8BdXBQiRGSBC7EfCvPCG7ASDuv4bGx2kTGTiQUpk5kvZaFPgS2SU21vycDWS5QTaoqirGVS7wtuuSXMeuM",
  "key16": "h8QLKvpbUPkWxos3jmxKm4dWPJr8rxDd8u8zWJ7648GzTazvLv4m7q17bJjk3tg4edXWtEXp821CETfeV5E7wu9",
  "key17": "2cKVmr5EwbVm4x18zDuQShJEqseXfWC4jyHRQHAADvgsJWNxeFDr8jQBSzg59TqG9rypEP2PA2yXs52Jh7gJSCWz",
  "key18": "5dorcug5JyRdMomgC1kp46Cu6oyb9iwAVZZHvym4tjhMdNGHwiLtxg8r4twqCCkyhsQCqDaoBZcE65BuhsNVG4Hi",
  "key19": "3MipvGjzLCYB6tcoj37BpSYwLX3FweJnsDvDEkxLNBaKTQegNDnZEPj2Y3pPZGFjQC2UNhniNFA6URAjqGZWtBPR",
  "key20": "Tr3kpsG6pdK5ySsSmCivxkrU2DFiHyAMf6qw7NHzBaoEyvJUpvecBuGtRt98Kvq9vQeV1LatjG3tEYBtkntr7bz",
  "key21": "6RddeK72Do67om4YwjEbm6sKBfPvFxfPvpF3MaWP5d6fF1bcNU3mP4S7KXrTxhUoeyBkxVNJwjdRE6qcKiQdAW6",
  "key22": "2pD7js8sJtJk7mwB6oUBNU6nBViNmycybLyHUMGqcjgSt7QzjoVkNR4pNVXwrqGPLQZQ9wr69tApCzN3Gp7FYm4W",
  "key23": "56tGCb4BCsM1Fq95L6YqueKkLsdWbti1YpaTVuuZJQFteS1KDSDGoWb6s5HUe4H6AWK5nFEo5rM3CdJjDLivyVeA",
  "key24": "GqDSm1uF2iAzWhPz5vr6TgbrvNyh8Sa6qBKht9botwU86sv1zWnA3fwbP7NCYxWCL2QSy7wFqg1CLedxQDfb7DZ",
  "key25": "9ph4Q5Rar3awTfT2Y8S3EtrqHDkBAG17JeM8QDbvnpktdRWpqvYzPJWSi5Mf1HGCQBaRJ21Utmv3Km59Giv21vx",
  "key26": "532JknLFBTqJgpbugDX6BZrxMkdTqcUj5C8wmYZUxWaxwZMpPvacE4Gy7i4znuvVMiUDAPQvYaWw6x8nUBnDrRvA",
  "key27": "4EThHvZpSjYegVqE7DgeWMVCDkVvmsKFjj3MEtPxZYEAVgR159tDZUvFsXtv4Tf3bNEfDQwHijkY4vsWJXuQzfEZ",
  "key28": "2GUQtoV4Lsr8QUiUuU4AENPNdW3GVBxECzxfoV63kfv39RRsfEzEN3vAzSz64B4JTA33P8Bp9WJ3DEmRQFhRYjm",
  "key29": "ZEnxJBpfMBSRYpoQqCuGRUH5xU1iT8r3xkXMm7XPRLYYHUxbrS3jyewExD6HRKKAVWLqKys47mucqanLHU9mioj",
  "key30": "5JwcQy6bGaeP7hYKU3FhdiQMPcQuEqHW2rXE4bafU9hTqA9RueypwUkNSaNjRmFAmc4T6fMssmbNDkEThzfJkRQE",
  "key31": "y82dpHkVhB65UAvzmzkA416sAX6oeVzoanFejrtGGNQMd4T7PgsfhGgbndDT25Xknqnyrny8P3dxJm6V1L2tkYi",
  "key32": "48kdBN7SYxDHduH7HQ9bMbvbs8jg4Qs9yuvQARLRz8i4Wuv1q8XqvKgdMfJRsBiP3KYAqbXR1Br9q4raACRfN3dH",
  "key33": "4hS19QpwTqXojibDHC1iywTRNVmhXSDa1nKMixkYFVq5cL2x2kb7uBSuVfHkNwVZwqqyhSodZNeYVnTioUPieN33",
  "key34": "2YiQ17jSKzuZXjyhrfriWYa48LGkrA5ZpUN97KTL9gjuScahBcW1ZN1LyEW1n79vgw2qnD5rJcQhJet7EwwrPcuC"
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
