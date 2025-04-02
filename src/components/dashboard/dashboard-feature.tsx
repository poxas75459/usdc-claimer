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
    "2Sth9opAw4aZC2bC7Q8kLXfyxXxNyPB4HgkdjYVUKYUhKWGUgvZ9VXvnfHkJeDydiryEqmJQPvFTMnVbbEvCPjji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqFji22rQWHaB22BT19Vcg4hHKDzJTwkYB7VpgAfMVru4hMR9LFdqVdPVhrVefouKL5wsHzumZsADY3REyP8Qaz",
  "key1": "41LEkL5Sb5ybRvYHKymNck1SjrFiQmyEQEmcNYXxT7p8GBKQ8Wgfux2oEtXWdnp5oxnJuQgbgkA85Ed7Esb5HoBJ",
  "key2": "6mmdJ8wqjvG5YLoFK2c3kYByQqK1XyMwcNrfeicjuZiNt6DxCcai4j2ddnG3rVhBhBQZD7wVZ3uq1UUSWbAmmH4",
  "key3": "2gVToeruF7UX9Ad1R4y79Tx8PFJA2nF9nYQTs6BMrpmBqZfU91DcZTy7sVPKbY73vTKJuEdLZz9FD5tdL3SmwpZx",
  "key4": "4TXni6Z2ueFdAg75RCKrtwGcQW64xbtFQWDgwSTuLR69YLiKrxUC4j8Za97nmHfXSRNdsofwzdnqitXKsX615o72",
  "key5": "4enJN1hX2RDePep2ZR3s1818L573SgQw3RJrnvCa3Mb8HcYcDyrPrBE3Lks29ytn4uBk6Yf4iNcS2rzbbkNW7sVN",
  "key6": "5VwQAtZ96vznhe77MSXARAJrsEDbA1s1TXqphJ9a6Pcz26frMzzqx3wMDKVQ4RoTA8mtnRY7xu8JGjMMb3Pfoze1",
  "key7": "MZugK5NVovWjt5xfXNhN4EWgdEoPSgZmAteE4DQok9QLZPpYEy3RFa6FWjkxxTWgwezrQDSwrvdPVVedrNZfVti",
  "key8": "X1WUT5YcR3Gz1bs5NhVJ7tEjjvE4dUsam5x6N4FSjwarzSpHkyrH22UKyEMhY6N1M8E9ktcHhaKxvk2HcRrGL59",
  "key9": "3jReUc7W6YvSEjcN3GtFzXEz9rPDTNmVvoqHBLdYvwzkGp187HGUsYEQDx7HnYcrSiPpiTToapccpoLXQ5VpSFdA",
  "key10": "2Mm1UEqvNcUUFPevSgwKeYYNVBrMm37adZoWxu9VUun39F8nYv3o5tbE6crYjiuKPX2HYXEmrUq7CdKyYpkCvjVk",
  "key11": "2qs9D16jXRPe9RQUSsPznnCVmo1F4Xjsed2Uqz1efYDdqRgA6VGDiU2pqfqNoZgBCMessUte7nnLB3UegsGjoDK7",
  "key12": "2cCTMFTQYQWm6p1fwGEEgzhBFokGxVdBa61ZPMjAkrnGuVqCpBVE5qGX6ngEh6fhmzCT61DSQ6rien8sTZ2A6L4g",
  "key13": "33AUKmtfBWxgaJfzt46f7zoJDxbb98Pr3XXEF5yAVJGNcsjqmH9ho77Hs7DYTBut1YimbNpxzBjQArFqX6wErurM",
  "key14": "5m2771YTrLwoKoC3cm7YTTg7HXo1CKBgJPKBDUZayWExnTnwZWpW1AkhimKPhsn9zeyZ4as7J9NoQ9EeFcKkeT2a",
  "key15": "3Gar8JV5x9qpGcDeVUVUhDnUzQh4uwx8sbzDTvGXueNZsZz7BpwqVYhF2VP5hB9CgrkEJXTzPwTU435XPtXQGiTX",
  "key16": "2Q5HhgqwPXthPLM4HnT87FDtqnfVQCCgwLmKqiFHTecNAYCxmXemzqvBSNh7mqvQfRNPgprFBBZSS5GvNACseunK",
  "key17": "52RVThNeJTMQN7nqDyzvjgG7wsWh5XrG4W2xj3PURLVq9yisgYD6b7PzY9NHey5QmLKLoSz4TREaSDFXB32jMUZ2",
  "key18": "s5oN7YVNKVLnXDbuxXsiFEHNK52jEX1SzAurAMrQAjfwU4HZLnZ7UnAPrfT4qNjSmiz8oj1DMsmAtN5bNA6M73b",
  "key19": "2hTfFVQLmST1N553XCp7iJDNrqVJDDGVoUR8sM1xKAof7qcLhvYdjKqSpn2MHFMqKj9dy92sJtkLtb9B8yWwbadF",
  "key20": "2xRCN548hASMUjvsfvM25AaALYdkmRyCUQfasc492KjN3sDggrUzyqsLyACLx3ypYyVuMNDF9d8jpAKZjCyrkmrM",
  "key21": "2A7kvRMCHLJpWm8Gmyf1StNWueCmN3zgELr6nnhJ8iQAFfXp7Cnh2Yhdaet7x3wN5RjpdgYCSuwPzriRc1uCx26h",
  "key22": "4qudSmTXzmwWC1n925gJik7Vn3af1nGT9z5Fv9Bh2HKwnbcRZ5BPC4t8iB1a3Jc8ZKmQ7UbvCyNMe8p98JdWENVi",
  "key23": "4ZYms5BnbdfUsNrwjzrADtg1sTN3UtPXMAS4sB28Jbd1CfUnb2AFYRDnpTUxZJvZ7cs3hCmTdKC8ULVDbJ9dAik4",
  "key24": "3uhsZxpBmRCy2Rv6yfrSANuc4Ev4YM8dEGzXQrMDoPpoDV7oBbV29rVKKQ9pmw9QvCVERyA1oWff1DUz2S9a2uXo",
  "key25": "3ke3ZuNUkmY6nnDrcTBZxkXfTJb6KHaW5H16smKaib8KzhbPdDciPZZTPiN31s5z9bDK1YLJ1AG6F6j1A3wWhyHi",
  "key26": "KdYFjy8X5VmLVmEsEZTLvwP2kKURXWyBnhhdVHggXUyf4hx8m4i8UuZjXhRyFfsedti5EE9bmt7oKXTgPxBBNzT",
  "key27": "2p1vzuW8BwnbLF7KvmTkZoJtzDgWCW15VHLttF51Xtxvp5HuGBkGTka9TrsPKQBERgvJ3Tkg41HuNbqcHXmPGGm7",
  "key28": "3b5yrfsdvRXoTmyZPfuUq8bLchfEpsww2SWPUJiZkANYFmyuxnyYrNiVEKGzTXFWABc288Y2an1Lw9UWApsv6QAb",
  "key29": "5DCpegN5KxwpGYZPQp5wEVdX7NCD14LQnGf7VFaqLg5XoJ3vFizpggwxNNvU8FcJgbAzECzt1bZw5DYsnnUjcXWX",
  "key30": "3h6cbc2o4tCnGmBDvMainXdGKXJjpFcXuNTV9jmeHDDYSYtSFBF1EJ67fMse1N5kkitMughgrkHjvYYewp5CiCXY",
  "key31": "jadZEmC6ipujjdzU8cWwusJsQvehroLhWSmqwEZvAHgfDUWzBWHEpyVh2Q3JuMx5HbPzdXMGDaGgh7rhQgmUYir",
  "key32": "4fAsZYiMxdF1368ZBE6wbFE11zh39s9JqX2J6n88p4qDjcMaJUGqXUuXZtV1NvUM8dUtqxLR2razpUddMFVv6xwi",
  "key33": "3yFXWHUrWSBB17nPVh83CuBjnrnXxQ5wjfL6CqMpUVMSfDkKKbZXjXYbfpNELYjbQvSfYSaDddBGPcLw3CBkFtSp",
  "key34": "45fAA3WjTcowN6cPjqP2JnfYdguj8bACjmnQuZbyYr91Jwef3h1PQ3Qidagb8fUCmUYMsZ87r8MZ3ipuYZuZQkj3",
  "key35": "5agPTj1p4ytjTBW9pTnbZo5SQTNtWRNyjoXcHsEzSsVDWgyBEvcdXP7mfHi5MFvo8Z1TJTG6E9GwVMEAAJnV3UZy",
  "key36": "4KUru2HC6fmJQiUmcjmRWyS3gq97r1dJTkAWb9EGNJuE1hn8Ht8AKZXeMoJtA3BnKpohxYfaZqfbq8jV29TBbX1c",
  "key37": "4Fk9jEepn6h5fzy97NoW8eQ2aPidgb4FifhTcsMiFUgjkRrfBqUAPsAscNipcEtNsz4U7gPvT36579Fm7DkTRRFE",
  "key38": "AdN1G36B7uCh5R6yCBfo3mE9WPS6ztsZTbwjg8QhvbVWvng9HfoWt2zLZ9RBFpP53QVuoWn9gXVjXCNK1yq8aS1",
  "key39": "4RnV6Lb25gHiaRvAiuk6mum7YyFNTZWNMdi4s2wsmBvgEFtMUVoK8orbnp15zSXcBtYyMKsjTiQpzjnNDR2d9ocq",
  "key40": "5Dtpa3wN3Db7dGagWvEkCMruMXGq1EtQRjnr5AKWkuGUvzpCT4eQ4wTH7YLT9vgGjZC3aKLDbVQeTrkey96gJHeh",
  "key41": "5GWDUndGTFuj1FzWc2mz9h2cEcymUC2QCuapzpExXZFhh1v2moDiHSjE9aABCMpeH6YvFhrdksJkRSZY2PTimdWp",
  "key42": "2xmmAFkgRRdQsgUdK4wJK9nPArzda4stqydJXHq1XucDmNEh7x151mkusKR7SzKfzPaLV216T7QR1dVhpNDAJnFp",
  "key43": "Bhia6PUxRLgCnpxrEieeztL6Ae63HAo5azYsy4GSRVWTAmMuSP1VyaBC3DEzGmnkGCCurfHvJyrhFfKy9TwTXhh",
  "key44": "4gKunAiiDUp5b3g9NVYfBadKbA6WC6mLR4jv1XuNhAQ2Augw7gRJwcC3MEakVBFap3UruzgTDbThf4TYbYprL92R",
  "key45": "ZZmZUBgeDZ4snFBnaRRQKd9NbzBGa7sf8T1XMu63ZyLypTn1ri8C2rpiFXukch6NBTtHcBiPEiJe2dhmV1HnKpv"
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
