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
    "2YcVazPvnDQVmC6LZhwccQjjCtPjQk8gK6ZFwtQinwDCbzHrPkm8bLEUYSRMbpnR8S59aqaVSFxDWWksTvcA19Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFDAW5pN9MPBJTTytnyW5FcmmxopsBD4NjiRt1QVXYdkGKn7TYCk9PupZgiPKqGgCUS8RNoZLFhjy9Uz6SavmiS",
  "key1": "5rxLEBsczqyej7yyqnq452KtRm1ArkCjkRf3HxSvvPygHdAdF2VBqyUQrUSvMZ3z6MRjX391wBhJWLRW5tmXwCYC",
  "key2": "62KfTmnDmP2hg6A1pR3MQG3xmRMDVyRj3D7t14bDhEn1wTvq8aYXXx9BNXifonTjt7EdkC6QbfK1o3UfeLB1dPyV",
  "key3": "5XLEuDWMt4ubmXfqmACpJXUSGRX3tAZW8o6RniLpFFPEAD3dFDS5MaLCnAKbtmNEkdiN1n3hibY5qpyu2ghPtgCL",
  "key4": "5JXWbR64V3GQkrWCdyZYUDP9wh23xqSoyeGx8s6eRoZ1onrdXqAStJbFMorALdHiLd6jFiURCfVKebURM4UQ5J11",
  "key5": "648xWSVjcC21HTnNsF7LjaEbAQ5nKCbezvwBroZrghxLz9XC916dSW52MZhTxkXW8GiKqsTBaZvbgUkQhSmWgbSR",
  "key6": "5BfZ93NQuso9HufBhBn9cZd4KMWzdp3hYAabB4GgVUpkQsgH6Zs2yTUoXGgae78Z37RxjNA7CeFT5uwXrszzy1mF",
  "key7": "3eHdPsMZrC99agmxbMfbPpLt7BySTfBTZ7DTkLEuE2FTqXJdygUbJyY4aNSKMh5CEHRpzNLbZPBkr3rMJ2Ud97LW",
  "key8": "5k8pg77WqwuqNAAD1j2wz9rspVqTixU3kGNmL2KvCbe7XJk4cfHMkGFDLe9fVApVZHgSAUHzppgUCh9hvndxDY3k",
  "key9": "2rE4CsKNHsf7tCai12bbTT4FCzC9ofPTQYG4eikHDa3kpsnRTYmobTE6PUKUMrGb4bH1XGSXkUruVqwc9bFAbzvb",
  "key10": "3bsjLvTLpgaHzhiG2vhYEti2cse7eLyN8hriLKQ1eZfniuVyecR9LmEvGubSFYH8gkEg5FYoq3HzFLtYiqx9eA8N",
  "key11": "4wtywNY1hj49iPDAujHAZHafKWfo5AQ2PjmaMWfSz52RzmTdnpPL21iLrxT97Cde6XBs6vnX84FCZvixugv1VkwB",
  "key12": "2Mh67GydJECDELvucbJRJCGRaahk3rUsJbNb6meyjXpeMGdeeg9Y34RNh3kB3zqSsSLQZUgfEg9cDDPAtZGxJqq8",
  "key13": "2JiYRaLs2TaT1qVzx1QX6yBD31jpmVnXWoRd5Msyhi5A3Y4zVoZTVPBDDv64TgqmuFsKbWsoaniHxrDcHQeRhTXt",
  "key14": "2HgG55d9sCvcnzCxYbRWyALASyGooh6uJMPBTJSwAZVxkgHs3yyGknAJJHfoUL6WXDGfnpzdrMifGsbqoGjjDotj",
  "key15": "zv5YKv1swKdw4yW67SKCsvGMQ8ojpjhpG7LcNtiKW4vWn2ryuRDWxjibWSFZptsKNB4WqT2i69hyEMfjGNWUrnd",
  "key16": "4yZapbz2Tqgqgb9htHU3746AzMWAxn7wiA6iFvX953yzM3RVPeSbnuZr8xuw2AZq2Hivz1ycgL8LABBeNDKDfngv",
  "key17": "42FXqfqatDhy9cYv8GSmUSCifVmgzDtGzNreM9xSM4RMwqZce5cLMYPKYQ4KXyC2C4ENryyURzpLTKzu7t2MHaxB",
  "key18": "JfHYCmn53HDSVPmT6BBbizpELwZauvTbP1KiUPaAGcV65eNeg7QBzUeoRrMwgsNwgE5FeTpv5Bw1HHRXECbxkE5",
  "key19": "gHB2kzET9c5FS55mSWbKy5Sri3XwRDyWTFLop2VZX7LgYVD66LfVwdDfdpn41WJTdm6XVnfMPMQQHyPGnvFqeN2",
  "key20": "qam3dJgpDgfg9HpdAaSWoDqUCAG1ULGvhoafiZ2Zc5hc9XGCWCACKStC6rdAc52zvLEi6QN838FML5tXFbu63Yo",
  "key21": "2JnNmYApshoQx3KgQUg4XKSvunnt1SwtLoRSkf5FVr1BbZEiEAYMV7us2a4GEJUVdQunkKAoKhxPW4rrmRrB4xeC",
  "key22": "R7c2F9bwWNErhPrUZTmS18x7md2t5NxNbLQbh1eXRUyWVZfQ6VRtY4gfZo3iYu8wPz738idvugvzZMYcrozig6V",
  "key23": "RDsAeJMhLvA9ReZLCLubydxKUCHSf8fy1JetCbx2SbDs9vsN8bQw39aoLM9KRpz5TQ1r75aofHjdYaPzei9ZKLG",
  "key24": "2gQ7sqRo2NdxcrXLk1FYMbdtw6nPjyy5CqTEeDPC9rVHjmEsf6338FhZ1JZhp9Y3iRqhA11u4J5a8ujzJYjGPVzN",
  "key25": "3jhWR5887kqYPAFvpiF1qvQ8BcXALsdqz9Ay8pkPQd6mQM8kSZjdpGygqc5Xxg2rpJdnEKbjopayqCg7bwApAw1d",
  "key26": "2bc6n4Q16R3jWWgcpztwmwBv7xiKoSpJwHYqKdr1JcTuFKjcLhBT6HFDsNyh2DtogaRSxMxdxsufoMApUoaxvhQd",
  "key27": "5g9gjtTMmeEvnFfZYMJzgTCBgeHquTDaT2aLrtyNAB56VojXysaqdDeott7GcymzGmxKuuKgwZG616HZ9nMfbvQt",
  "key28": "2Z6U9fWGeJZ1YGDGtJonAHrWuLXKssZVvJTHPW3926hDWoKpJbfjZrxyVbhy1DEfckB6t8yScFZ3tE6qNhpfCDS2",
  "key29": "34uGKrtoeK3yLkVZL4x4du5MiGSiqyztsuMdnmaapnFo15AqbKmdZ9xGEyTXiX5rXPZui4eh8cfsapN7Fvwn9Wkh",
  "key30": "Fb6Tauk6RBPDoskWeWmbz1oDv7SEjq2baYPw1PXFU8xp3kQTPJTALECG49qi3y6NMcmjmgcAgvFxujqGromee7W",
  "key31": "2hYuewNSMzwtRWtDZUYiTyMU6T7gWqay3C8Pj5H7pH2TKxFNVhaBP9pFHDtEmNs5h2ah8fgPLfk3HfZpqJtbtYjY",
  "key32": "nsX7cdLir258EjJq4uBG1CwQvRuLAP1MuJmACeoBgHzVr1z2mtya6NQkQ9dun68ufNEKwAQSBuau2uG1P6roZPf",
  "key33": "knbLZRU5ev2aBXiVxiqtL1svAnw6P9hZuCMGUA4FDTKJKvvSWK3dbRifs8fBUEv81QYczAQpuUiv9y5FtqWCppf",
  "key34": "552q3aXDcYJ1brQB2hyWunmmTrHPrjejCBMVsw4GxkrTShS14CtyxuPqBNQJA6m9HiJw7Eop9cEJ8pv6MyyRAEoQ",
  "key35": "3MejF4sYXK3s9xLzx3nDXRbyXhZqym2NRwF7JeBZMSqD6m7DZy3JyKoiy8c1EdxGSDrX4PGB9trmFbsbLu9xEi6X",
  "key36": "5AigkWi45B4PLPHfMK59CE35XZ5nR2phYQyYEGmxtiq2hxHgsLhReCzGYPktowuGWUTvSzevT6PVwWXoveF68WSk",
  "key37": "kghwQvByxyR1s39koYUgdJ2SXAFJSgZTpWDhcwe7t56utjhkKMpiagwb3D5j9rLJnUBkZrq9oZtMb7kUUmfvphu",
  "key38": "5qa4nZKtb9KyVbPkPiD1YqoiYfD4ZLRkwSg44am4DczUpYqDGv9cSpCZSpzoemXz7sQcKfZeGn3qcB3t6G5aAwy9",
  "key39": "4FBYcwtKMvS83EKGUfLrqyQ8LXsf3NMxHCNU9xtUB5mD8qUicSwhoaa2WbtDNw4Qi6qrUrrr41b4vCad7Bwx7tDr",
  "key40": "2Ci2pbEkcn3Gy2NGHVeDoeSPEnXSsLmXApnmAZTaqBGctvvSkXB4tcBKCuQPxn42AdpsEogAZ2JF65kbwWTAav5m",
  "key41": "4AkCw7dEoaSHaWN6YxPoVU1upaxcdnptZEd1YGVqFsHzxYMPwHGRUhTGESMzREY65SZS1yxi9CE8webpr9B9yDKi",
  "key42": "3ccPRxjvuA93GCjaw2n623KQijzmNLixmMP912oHoEVYLJif1UFksvvqwQE9fWbNTaBAsapvBRaZsMw6Bii4XP6a",
  "key43": "66FPK7kvUXGevqes2ZkUD1itJAjL2sNu3kGcCwqaBQ3t8jaUtoGXi75zYkKSoQh8J8xA9MeQzNfXMC6PMtyoQnjL",
  "key44": "3YMB5CuH7WgCC7z4ViqVyaBYqeHRQ9Nebbcas2wfrrQfQMBRj1gogSNSrN4xgjrzQfTkYgmNE3htA73uYgBVAsqC",
  "key45": "59pVh1cvwUmsSbiJD3s17fw5dBx3sCvrbp37B3h7vi1Tikq7NfdKQ8eFtWrRbHTp1PDyDLQxHd5VuDaeMK7XQ4EN",
  "key46": "5BXa5zAZ5dzu9bmTUcKoYHsw1CvCfLrM8oQKJw2fy614ovBCjvZ28A2T8HL5Fw6L1dh7969yGgx1cPBB2EDzrqTc",
  "key47": "5d4rSRKEeHBp1dNo5kFXBBXQJDXRgD1jumwprcwpWZXXgdtLxP61YeH7iSk7NV92LYndYrPGMj9sUZwEeA1EUdzS"
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
