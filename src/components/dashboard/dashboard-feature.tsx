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
    "YaVrmSHior8tq6wGG6t1jVnKYRLmYkJwPVpp9gRYEAnMCNRsSPxWtFGNNCz53pHFYT3aKiCwAGSd6oTLvyk2E7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bFo6TYuy8UtuVu2RsJ8jwooeVsuvUmmX7CqRQBxDsnucxLahNZNKGrsumXJCRwHqSorJughuPGPuQo1KN2ixcnM",
  "key1": "5inSUQexxGvhpvmf13rNPksfFsVgrxBm7Jw8QVxW651FavNaWEwAcnL2u6QPZVDgaw1av6wW5L54J6uM3vcSrdsF",
  "key2": "qWSnuTMXWhDbvxwdq5PN1QNkchMBKHXPRB8H2MfSsgbS7xqMTfJmhR78YSpCrj3WwqvkhNSHTcSh8UnkheNjWE8",
  "key3": "gwPrTWdKgzUTBtEFcJL4h8DdZULFWKhJoMdrTikyxebXnPvv898XY3k1K6pDbL8rbjyGGHtXG1sM2Qj4jadCnF8",
  "key4": "ZPkvgAEPP7Sm1ytjLtzYVG9eEwmFfDXZREcPLaCcLgPU6xy9YxDxVCyyneCyfCW6Zkk2LgSZB1HJHNZGgtXEpkv",
  "key5": "4ZTkTP97J9xdUJZFUgoR6i5uVQnvLVh1ncNPyJZMBoWBdWxd6K2ZHhHUtNWFmTBC9GhD8g1iA8kJKd8eBeKfXhRn",
  "key6": "52v4ejCFAxhJzmHWTceKrGBZUt43BfFHrx2H74VrvsRNwisZmfw3Ji7YzF329tSPfssLD8K4RnfYQHTWHQ8c5Ncy",
  "key7": "2yJBvRH2sJLffMcbrYfXK5gRXRX7WyAQ1FAodBK7goCYTZrQT3NQL2QTxQb4g5BC6fqyuvJL24UYskrr9JRyEZcj",
  "key8": "29SzPMYQtgC1fDFPS5MoPGVywaV9WKNMqimkk7tAqbT1Cri7dhPKm6wywKab93raGRKMFX3KnynbijjG5cFX3UCj",
  "key9": "4cFB5y7hkEbmiWDtSJZsJcRGH8bxJcjWAHbKProssoJXAExpEYBaMjrv3cvNMDW8J453eraV4Uc7FUf9sHPWLG6o",
  "key10": "2GK8NQWtYJ6Cs188XrCHfCiSYGxKbhdXb5XutRG9m3skShLuYoFqqWmqhKWWkqaJgFQCHp3u94aav3YD45XZZuQP",
  "key11": "423C9QKo9Cr5ggm7vuCnKNg78fxBo9hjW3iAEw8kLK83rmVzPYDi3LFDAvphFX3j6vypDE9DUUvZo3f4TJcrUVv1",
  "key12": "5qWU8EVFe9XqLTNnDRSJztCaG5X8vUBJPZm2AQYqbKp6qd3LWUdGSLxfQoWwnMeaHDU3sEtgZpqMGSozSAsRYpDS",
  "key13": "3P62uh4L1bMTpCqvw3pPDFUKwP1TjuNxGQ2dY37VyUb1x9qKfsUXWgNVYq5JF5eQeb9RZZ4JiyK2ZH77GkQ1Wg4v",
  "key14": "363Y5icCK4mRLKgW1hYx2CenSuxK3hBhm1pjQprcYuihoqLMENu25pSQbAf4mPgWtuvEUnZSvo2uZzuyHuX49aGu",
  "key15": "3RaUzzNXuSxwVnLXjwpdi4TF3Y8LXSymMAFcrDGHdyy2fc6vejgWQQZtTqZs8YVTSrhx9hVgKpiv6o3Mmnyqj8tX",
  "key16": "2izgnTXBQsagybkTsEyvZW9btwhyUcAeiUan3oA4FMhQmsPsMx3t117kddJFpgrstXeUbkDsQNLnSrsNFauLfcY1",
  "key17": "KDQQYiWqNuGgpASe7mP2QEdnZttLZ1Wgodc9WtEFWSBj14ucspkKYLGmY2vVMv4JJnMQ89zoC9YAABwJFVW5rvu",
  "key18": "576SHu6yb33pmReBdWZKzybiajSPgUbcYyA99DbamhjkhMa31jR2nAp5pw1PZrc4jGvTvQMtgTwprmaTcRnSgoRj",
  "key19": "3scFLYVKBHx1ZcUNCvgTQDAJdYfdvacgdXNywbN1h8W4ASYJ2jJX7qc2mZAFeyrUVU2EcXdfSv6gm2WNGXchKMNV",
  "key20": "219ESr83prH2QaaSEQa4SyuiPxTg3fKfj7r3o8z1CpnEPqZNvwx4G3Qqv9MiznxdgnhwSdn5Y2xbRFmoVcLgjMTF",
  "key21": "2g4A1pe5RTrYUUwTdMJs4CHzzBbgumRNJPL5U3n8CE9YyE1Q3EjPhqsfMG1aQXFQQAvqGm77WiC7eSTPZ9xGLD6v",
  "key22": "2cKM8QN1K5UtNJ9jm8k9nMsi5HAh7LvkAdoJn8Azx11YrFPRTnGCeKoRRhyZY6CWmZZc5bsbywV2cxne7A6dSPyY",
  "key23": "5CN52TkggA8ZyGu8Q1fXn4cW5SZkq2mxgczF5Ksk6bFZr3g8mA1ZcSs6cNcUTJkaSFTFAWE1hApnkF4Vm9iLWeEx",
  "key24": "22nXsMxRU4mrwnRuBQH9DXR4jMHgwHdsKhxa78mFx5A5Z3CSoBUmc5mG7E7HNJSG2mfcQy3VvAT4K5NTZHESg4mu",
  "key25": "21dqMd8Gz6F989TbgXhBPAFcSGKhaNKS8gcw71Kfrn4aG21JHt8utQvFZNXJH4w9kQnwApHR4UK4TkFRrVop54aH",
  "key26": "5jULGdMy7vmDoyPiusDTanjpm3rx5Wy5e7SuU2HhEr4pu6Gbkki4ZW2qoPmFdqjiQQ8sCqRzJYSWgh84Uxk6rjw",
  "key27": "4BfLCVzgrfo22Q14CKC37beYqANxUt8DRRWDpCkF6vkxhSaAmfSW9K6rmkGq2CDFKVeW4hdPcbwijYof3wMsFjGW",
  "key28": "4h6ozAHgwCrVDc8LepC4GRD7co3nLpoUsYiJxfNHvb4Wu59zFE1qZtoEajo32ACVaZfU2WZAHrvi5bpGpqjpHvsM",
  "key29": "PLKN3Bq1Hf5gntRxPzN9oE7tYiZmPBbE2iAoeTbhNDmAXgqcB1D4KoMufcCMhDooAgYLbVgf7Qkt7SBZaLQ5Z1G",
  "key30": "58TKiQdWsVzZUzpwCtXbTeotUMGfBYHuvh18xz6efFt4womvRrwoqGpEJvR4dUPCoLS4XnREfYMkG7BfHbHJxdWo",
  "key31": "YjNbtCV8wtZM73Piuc1jTWfZR5EBPACJEEZ46rGiBaDbToa1doZUwM2gZp3sfX76ShVEt5m4fPJxMr2LMEEtDmb",
  "key32": "qvfYDdSYguCs67UqiyjLqy7c283h1vQN5UYDExiHdLuJiLbXqC9VFoK3JaHvjHVHSRxLVn9t6PVWsqVk2zDUw8J",
  "key33": "4iNu9t3eEzgUWZPwtLC6CoUu7je7NMrLhtZULedBS9xMFuQeb1gvMETEA7pCXaYjy4ejZEJDoCzT6M5KHPvtvebx",
  "key34": "4iBVEymb5AdRVGSWkFozmqE4NdecUn1C3a5XMi3z95X4NaQsG5ymrHFM9i62u6aJSEepE1qj5pERWjXYXSUpMroa",
  "key35": "4YZC8hsQefojeBgKbh3v7ZJu22C9saSptSA4NFidQGu2Y4tN2VLphYbURfNcxMMakKjFmcpgckGpPafpYvmM71so",
  "key36": "5KFdexu7ySimNuwEeoWBoJRPLwwLAYtE5RdgDAUCYeBCoEkkEPxV5oAzrkbsX1cHCDPortLGadLvwhT1JjWqoLWt",
  "key37": "iEg7xzwmoBc3VnkX5fwQJYmcDsSueZ266CJK8Ftrvha3zz7m3WzJLCEyHFdtQpyFZ6zwsxZNLgfXcN3ZtLjyTTR",
  "key38": "2tXGdbfNgNibghM4J2yg16Gkk2MnDTLrH6d9mTLD6ho2XqNkm7FS8CKd6pyCXmMu3uaHMB85so5nLY932vX9LrWa",
  "key39": "5o9rHFEtfkf3JaPQCQEo9SM2KsHGG5JLVRmmUuLNtEspb8AJFEuMbQ8T1UktyE7PokRyADTJcpNDMvquWv11yeQU",
  "key40": "3iNLnHA2aShQQjpxpPDE7xodRQUDUkYFh7bDfkpmcT8N3uJTx1YYypkyPn84MseMZBdTzKscXUQfKWtdB5YB8ErY",
  "key41": "3cdabj1pZgwhB9zn7jYf2AEXPkG2Dc6ewQ5yM4xrSqWFLjy6Nd2iAJjuCSiyB92zE6VZo7KNjr5JBsPQ2rpeeJZx",
  "key42": "4K249nzoYsNJUpjCNUxQ2xa9mqn3sWdH37Kc4ryWr76MKuqBikmcUnq7CdmH9KhpVtZVZETQWbUH8Gt6nmpHCoyp",
  "key43": "5kni1M2xX8zx1y7UAwA4sZujnbKLrAo7eRasLuJNeb3c6VynmNaJSFWNNQhEfQTMZUvsZber32fRDPqvL9vfcuCM",
  "key44": "3Le2pGjobRopu9n9Xdd78iC4rqB63RBeHitg9UssmcKpAZFmtHq6exjUaimSSUYYyXF1MFGK71K8SDgpY4NKzeUw",
  "key45": "41un4z32VbdEFpbXPZaGf794dV5aYvPBEwXWMySRu6Lmb3CH1wLiXgfwtNzAvgadeZbvBzTj43DNcasAeLbj7XDU",
  "key46": "36syJBdQTfjsnDds3M8cqDoC95RK7pGPs9FSpEs1XCN91TGUtYDYZeNbCvVtgmcnkd3iWQ1RbupwEitiMDsxLk8r",
  "key47": "5CD1Gi7ciPbzTQ2rfEh429b6hFP8jn2jjf77XfayfMbuLMpLSHaBvvD7A9A8JBRjWFgVaiSrTi8QXuRLneYV66sW",
  "key48": "3AwjaVsZhB14578du1UFjuPZ6RDEtzWk7MpaHCokD6r85GYjPcdxmLzCMRGY21fMAJxzDwJBqyvNBHzi1w93woD4",
  "key49": "5vQ41AMzs14CUpoBq1PJq9PX9zCvqzVhFSxXDooUivpMMTfnxADGhGCfC49nUZMpFSMim5kfNrEmjDPhxPVY1gAL"
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
