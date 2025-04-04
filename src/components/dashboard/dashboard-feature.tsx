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
    "24ag5A3CpukTufK2ppTbd1KF3b2nharNzA1cRyHW3TiGT2bidhKdtZx9i5Dn2BaNAxphRXyse7xbZb6wyTD446T6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32QQG728PJWmTmHti5hohH6RHnVSyRM6FJbVQucpeRP2o5PkQghYizU5VoRbRQmGqByhQs41NJRtkFdGYSSDbGK5",
  "key1": "7oHximNHJ228TAtUgtV21MLU31A5zjtEwPYNGZ9xFcAeudMhsfxtDGYKHFTZbpz2G4MJCfk9PSRTAvZNN3RNCvj",
  "key2": "3LciBZz9XfTji1PtJ3nsuokYDHtWqwDSPHGcXsEqHrnjWU6223khphMThzdqhii31kcFQcAoGW2wBCnwrZAJ76Bv",
  "key3": "5NJG3zGQ7RFpb8CR6A8rvJmnRpLXgHmSsWNswPprogqDGAAkCSwSbAF7LKb82ooSxkKNgxx1K3eC3Pgk37bjgKft",
  "key4": "3nSHfiiSFBoFvYFGzSnosTJMBpBQ7BXrqmtD8XHcnQ7spDPy9wetmD4cQVWmcv79VpxKnN5jAmXVVogHQgWEu99x",
  "key5": "2FuGCm4U3zR7ndMmgACaQ5KZd4ddpQv215JFeYbJ3cqaHx215X7VfgGJWTmi1CyNJcgMDPSuBrpS1fESX6MGdRcv",
  "key6": "3QVwfyxucgP1V37DEQ9Q3DFrnQJVUvQDNRkZJvmzErRWNbwfLjDr4VaaTPaPWxBRi53QoRfBXMLrzo1HcZzBSnKm",
  "key7": "2afeaVPZHWENEtQYSirQiPqoDkDzpk9u9nVL2atAmyfFiRGqUaPpGix3fUtTWYz42Qt7WwAZxGjkc4bPeKFSB4UB",
  "key8": "5CF69UPxEBomydaUJtwrAmdqZViaKbtdcULcEvzikXa8jCQ8VVGHs1E4ZFX7z4LGk5BcjZF75myvAyYm4wX2171A",
  "key9": "5P7KGRmv5baFPK1tJowh7gaLE9JJjRLZozBTKxaaurXcu7iSpxTuJk2tTuPX36TA9FYitQkUfgaXVaxUXwEN5Spz",
  "key10": "2Di2oBnJN2oze4b8vLbbVcjVaUv5DxZR8uh6GTc1gphNSEjccWibwFZBJJ54ZMTKZq5DXB5YdrdFgZzccKmrdskc",
  "key11": "3FSpk3Cg2vYXwaHnheTfqq2UaTjPGgh9XQw1QJ6gQTsxjzTdNHRboeQWwBuqiQnMJdCjuzPMWdApq2qcxZmc7MBj",
  "key12": "4kpsuQF4EnruYAEk1XsjoYcbDPjxhabqikJq68syZ5CLfNBPnWpTgKETmpdRhZKuRSHjYQiM4hSWzZfWvpEZ1YWZ",
  "key13": "4539wZxVXfzuXr5jNFB3QejThHdKAFpr1R3B6vcQL91iTxRPCo8ykdNitzAFzahP5uuxwqgstD5sF9E6vdWycFPF",
  "key14": "5zog9rqw64dE29REvJcQaf6v7BvnQJnsdocdfBWmk1HKHL4JNNZjzvdG7irq2DfgRuy3swNNVyfSsS6gKEiLgHeg",
  "key15": "5nU3pBqwreU6ZcTtmNiDDcTSi87F1LMhBAE6oSvLXtpBTae2nVUS98gnUzek6yfX9pEHm7sBXwLytaNdMPEqdmFm",
  "key16": "BpdrrH1p6kSvTS56d3sfFz8PWV1SRkw3q54GZTkP8Am988HhM8upCJqW5f5chMtyYjNe4pqnJA8Vb1g8oUCDj9T",
  "key17": "z5wKVaVjc3ShYjUMm8dDp2AoM4hhaF6AKwovZE4cJ6FXx3nsuaCFXMjwUU5iUGbioTpYSwBgXEPKNPXvGwsooaN",
  "key18": "9hKhgKAiTXithEDwjLBPqWyETjzLuoKS8RouMg4Jt6JxRpLbiYMBwh8AmfWnoJ3sVpzWip5yhpZvVsA1dVnz6uY",
  "key19": "4hUu7EAa4Ky6mgZkJdVdRsJENMKrkutwb1BD29ifBU3FZpgzcd7yzgedpVMoKGnEzFdgo9xUn611uEAKoGv66qzb",
  "key20": "3YnVfTQwZipEA6gYbD9UBP1x7GA6keZQhNULBMUFdnUmSxn8qKrTqT56qgRevGnMU6aMQzRz9NejxeKdZEUVkFcD",
  "key21": "4ZFS7kPyjCyTWvtWzbZjmztu3aJfGrQuBiyfhTi7CYE8GJTWNAr25uyCPHDzpd7yaHnyatQUzwFfzPBUhFAcuDfp",
  "key22": "xBGVTj27NN8L3uaeVxPc4TZ32jRVYs3bHsy3UvCkv7n4LBjCu1YgDaVnPQ5Vzk2upSXKHaBqUPov1NsfekxJQyR",
  "key23": "3vab74Bp2JmB32CCjQLqXZU3r5at7YCHgZGCHxVUzx3ssQX1qZHWdaHvEw2wxvA5vJpe9aS5wGZP1VbdE8Schhp3",
  "key24": "2KZZxhbpe7ryinmkoFdNFTUrAQvtZG2VheFRM3i6DBSvgjccwZCycSYehWggfvFkkC8kGYa4cgvGE8psT3vBfd8Y",
  "key25": "2AfMqhonQPZwudyWG9tWsNWxmnaGAndLx2zRsCRxZemXZJjiTT6csrDJLMEgrxZ59A5hrcvMzciUCChCwsifpabx",
  "key26": "2GFGRzRaztHhQxeQiUD9hsWQzQZ1u3KexUBgN8W7VKG6A9Gf7wXkWvAwmd7MNcHCf9V7My43ymyB6mkiP5FpdPiy",
  "key27": "71nLm5pdGonN7Xp3Cjp3cm1JsCJEbuHEMZbeHtS1DkXiwHfJqvW91AFpzyNB1scJUjyZ4kNBSgwB8dgrrNMst4R",
  "key28": "5ogbXw2C8ezTU9nAoL6ARPDJN4JUXuMMQzbg26xAVz7G8E9V7VVMYgJKg28MA1pwBqFQHwWBY7Ef9kAWrcbm34rc",
  "key29": "5RcugPprWpCAmz4NLntgiwvQxkr8Fsk6mBSaBT4w1zwnA5iWsV1AgaJ7kckpgq9usQm9AeDa5Duhz28wE6HjSZAJ",
  "key30": "3kzdPWW25zArTQjPVGBFgiLBX3ZXvXmKMxumG2XJeNVgRy2qyy1irDwwMZwQCcjqgnmmBGgot5Z7r9dDuzdCts5W"
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
