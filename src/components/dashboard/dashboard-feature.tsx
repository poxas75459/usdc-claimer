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
    "5tzgr2asDnUvy7qeBKPi9fsLXmDnE65cMjGVY4qfz7VogMfhn9bkCVjgiCSYj9MGHr1aVfpR4F5bDyRtFGPWkH8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUhQb6y1AgbzEy2SiCQfLdmprKYKSWyNeugvYuwzHH1rafD7HrRAJegci78wEzUDiGdxNJTDmiHeLmpt62Vn2ix",
  "key1": "4YksgvpxKcSBRAidmcaCmYbAiYSebQXq8q9xHJTkRAEcCFaZT6PsbaWhgjK6juitYoSruRxUaEEwD4pNmYXnvAB4",
  "key2": "4sq86AcRQQrT1Cf4ugsF3bKWo6MuEoSd9knc5u2pRjzqxJ7GEatinVehySw9Ja62nHUDpgAdYfKH55pmVh9qxwgU",
  "key3": "4VT3QHuGENGSqWGWrPBwKhReGZnQyJX2pGg5YRr2sd5puw85KCTMCX3bwwuTcPnLCjBmyVMZQxT4HYDQAF4W8wvW",
  "key4": "3GhQYp17SdY8vu12yd9PkNokwF9xLdBsrcj5jR7eE15YE6rZdFA7peCEV7wap4zqAf5TwtWGZtwrpYHtqNwFRCSy",
  "key5": "5YuxmJqp4Q58B1FPbNKnw8CbCtoLE2mC6MV9ikqy5QwfWzGbEx1gW27KmBwTGAnqtHMB346o1V9knGY1mpyCfgCz",
  "key6": "2wFeQ9Bcdta8Ty7fQJrxtjc9mg6ys4B39EsXmsLiwtWHzHsYSMUVnjxguNqXjteTMhFhJfsNnnxQryhXNV92996N",
  "key7": "47ijXKV7jYW6HaEe65xDscQGmNL9Hu9hRhR6nmCbjzBMcYfP5bEXvg1t8tASU3Y7RarTV8sB4iydD2eh45buH7wv",
  "key8": "5X1oA7DKyxLYNMLYTwbuCo1Vh4UyBSgBJyVmVdZGG4xGX8pv7GhWhfUT6HZzWRLmaH51sN8QsShJcVuK3azwZ5SF",
  "key9": "2zhH8RmRw1maP3hJYqvMEJnoKnUVKdWm8iZxuwCyYdzSCtBCK2Ny7jxrNfFx2Xi4tFWYuWPTT8H2xKKFdDehm7qU",
  "key10": "52YwRHmYx3jeG5GirE3B8bpffzSRAw4hxzo2MRSxca6MuSoTMyNRehNRU2gz3bBRKGmaPUB7gbgE2xr7rX4sbSNc",
  "key11": "2D6Fk9qjXRAqCnPKo4GUjg8mrR16X3GhkSDz3wHs16Ldj1THKd1C153dKMFULQ6VHqrXQ6FhPhCx4pyZ5Wk6ttJL",
  "key12": "5Bn6jBDUDsT1UNfA7CH5owxvPDpQhoyMdHYL2UinxaihAPgSQnjB3F63Lwqb3D5YX6M63myq9eeNPXt41bBVUJ9j",
  "key13": "3oNk52WXSGTvpcGLvsqEj1eNJGwnLt5P2f2KKV1A29GwYex4rzQ5mHvKmS7Netx4sHmkBANcTV5PqmsdDgsAzRvt",
  "key14": "2PYbVEF2R6V81aAFuiYHD5KrRc7pu4WifF3r7m7QBBA29MpdfwFqVtpsNXGyMNAxovYEstd3Wx54rCxuizVPvazT",
  "key15": "4fj2s52Uw3gaFrietjYHnfpujmiyJQUxBHqD79iKDCPQ5zxNjdXwJCYuVudCsMxjbPhXh6wFBpEoW8Fk5Mzi7Q4Q",
  "key16": "ihLKwYuCty1rWsAM3tFQXQqnKQefACxWj91SYhbGNxEqYirCs1GzeEEi31kYsCfwZPAc91aopmZGVyYCVz166nT",
  "key17": "2Xq4tUGWCAWfWGTXAF6LYPpcfeBkAodrmQCXyjX3Hgjcu5MpSwjfACdoTUs9qBFC8oXH9vVNXv2RE3rnPNqUDkpa",
  "key18": "5CeHbhNqCm6PiYAVpufbaYeEiQX7BraYB73TduZvH6KaysZvNC1kDK3bn6XaXC5Mmhmd4mNfPdmJCvQw73mahkrF",
  "key19": "3oxBHv13cL4gqVNiGe7kj67TkLb5UgCCTwcsZVFpxLUAmBbzQADkVGmBbd98GyjReMdW2qB7bnFC13msQtWi51HU",
  "key20": "5T1wb6Xa98zFvAH5dCtDgCfEqPh3GyvZEyMPA73syguMUJ8d4Dtm1kUiT18o7MjyrWvfgVxTeUq59Rtmi2yDN2g5",
  "key21": "2wwFCwniY6KsY7w88fXEiGg9WHXMkwzb3cNMrMi4U4Azy65skunwhZFkh86rYhFqtujyXN1SHRYHgPifD8aMRBUi",
  "key22": "5hv2bBAL6w5KxvPcu89fmSz4CoPV9dW1qDFJ4aT5o3YNbiKkesB9PGBeqUhuBYBuM5DG7KQEqqbBeJzLXdF9ViyS",
  "key23": "63z8BZWMvkRspCAguTAdnFag73K52bRauxvwksKXR8VJdAn26y19RJYFUY1DxQW9R6PpNqTZT7jmAJXPPeQnCcds",
  "key24": "eRTMVZnNifBw8LfzCE9EbjD3NRiE8sSGuysK5LsTHKdnvKegG2DUovgQgopARYtSEtSjZq6Jin1hMV27C1acncH",
  "key25": "35T2f31Lk8QCLZV6NKQqB4wSUeCqmFhb973bDEuKJkrN1TgpahKP88RBLSTfyrHxCq2REEEDF6di6PBpjb47ADw1",
  "key26": "5nG1GX9RcGGw5oMn7JiENPbX6oPM3Eb48pNDKdcVDxNMUaVwapWEs7DssMsXn7op5LKcYPkWETorJmeU7bWSsq9P",
  "key27": "5AV3fmbR1cAfDVWgnA5KCXPuAWA9WpTWCvKjdvZJAbb9qFqdfbM2bMJ6ex9M1JjGjQBXWycFEavNahFoCDR77um7",
  "key28": "4abQxe7QrUWzzGdrYG3g6F3mbErPi4d6peiNQZcSEMoZhnDaTrc34ebj7iiAVegfxiAFo8tNA8rsfoS1sgkYLnJv",
  "key29": "3CXVnDhrZHq5sXUutEcBU8qjiL7eveFKrxVSu1LjsEtAyoxf6enGpC4aAEdDvEjM8vG9z1Fw8Zr6rzLm6Rf1zrns",
  "key30": "659UMNbLViBQnRVFBsvma3FLh9HnpfUJLUGRjzKjromngFdDPzPw8bcZCG33iXf95aqQj6Yj1w9DTgFWk6D1MCPD",
  "key31": "62g4fnjbmcg6T6aknskAHjqvS6xK4HorZhAwi9LrkkgtZZReowb8aYeRt9JikhPSaLKA5QekpRh2GizR3jjHKnCF",
  "key32": "3CXxfLBaDrjDJP5kipr73PaiABnyTdHXKWpwZBZy58uXsEWqVGrfAujz1WAyxmNGG7pt4s7jiAEeBbVuEVmh7JR2",
  "key33": "573AaW8sr17kcVTpVtR2Qcv4aeNefHFhgkVjhsgSuu7zK99LesU7FaPw7QM8NQCa6e6g9sijaJ4g9wMSrQ2zXCsq",
  "key34": "3TzUPJrHKZFmazLWhbmMw3mu9B3djryu5aMmWVaP6w4FzKRkCucxzSeqVWpFSwC7g1eLfiKPrdguvVLDsJPxYWpV",
  "key35": "36JVy4LCpPtdDvZ2FJQcLmSzoxzw4w19LGhxpHVk41HjzmZwuDsRNb5WvVYs6JwXUGyziAqdCJhwM9AHcrUQxKDC",
  "key36": "5XPxsSiBWCYuvdinwrGe44oLK4vvBQBBAwv3tSmiWbDtoh5NPpkrp8EwPTG9dSM75XRPZPGFvLXqhEiZRLbhkV4K",
  "key37": "5WpB9ZioB2dW8cC19PiFT6fh7PWPT2izRX68n5STfCwaBf88ay5fmjQKqCzy4oLk4WqruXpSnz4aqZsp9Nfvg9Z4",
  "key38": "urCKvCkJvw9dmaEdtiBb8JeGKotf6MsvMD4b6gvgSWMjKBh6xufzy1cLm8oad7m1bRf4NxcgyehK545j8eddJ8S",
  "key39": "4n1pqktqZnpobsVLfV7FRwppyyGn1Ny9pxgTJspFeTEAtaspijUgnALcWVvcZgLsAuSUGtReChAqwsosqSmjHjJ9",
  "key40": "5JWNb6Atj7172ebLvVktKCBgAB4vA5FvhbeZt41wXAcpgGvyPuuWVrAWDU1pmLian6KvVE7qvL5S9VSVhvwh3ew7",
  "key41": "4bmv27q5cedsbFpvoZSofkWpAxz3Zpoj4wNqBKRhWmjmUUsvTaKrYApetFGeffCQk5M3YG93U45mgJ2bngbGPkuq"
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
