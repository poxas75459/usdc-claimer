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
    "4H9ALgik8k793c3pCPutkWMVPqZ8k8FssRbYxANjbFqvfV8LF3q6JnMqjKeJGSoNtfvEpZQw5eeqMi3Zsf8cTF41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51kD4WD2B8WDNtCYmvDTd1rgvFej8PfawcrXve4FAHHy2mWDrKjJrv15wweQedD3hPNoLZ1ZpRaj9hGN28333M43",
  "key1": "25uaiW17GpwK1rmNYAqoz9UqgFXU3wNNJtQqkbPi7vQvA634PUy8KA2zg9jFusSH8UvUHpoAicV9QNavzWxEnBQH",
  "key2": "5zZD5LVCn6zAvHfAEZ6V51h3YbRtN6ekZN7ySrKGmmYpPUNPfprH6CJwB1QdUzHG46EL2mEdaxengWhUWy9NnVXa",
  "key3": "XbmaAzpazzUFogkQv67BeE7zq471rjZZRm4twVCr6Hn1ax48dbz9ZLG4B2rtWgKnq9uw8GfztX6LdBSCsjYnyUx",
  "key4": "49YEHcCFHwkxB68aMtfc54EXBKbMfFGpuZ1nttbKnMj1an7oXo5fp2vBUmjSHYWodkgiUMVSy8kGnUN5jyTKuZ1M",
  "key5": "5ZbKPTQGWvdAmJuduqJf2pQwxkusYNZy2KjUwYZJyi5A9BM5GHUJxFjneoPvB3sVo4QtbiQdsKFCoMnHyzHo6B8p",
  "key6": "3pfUqxZiCVYecVr5jAMsCfzHpPjyPqbsWYPVGQFxKry521tw7ezh76jGjs4yUpUpqsPaAPbEW4MVoRWhRfRFLGb1",
  "key7": "2AxzGcXXkL9G3dxeWwL8dhJwv14YKZHUepBneugL88uoaWMk9ogFZ4B51tuiuRqDbeXeo8MtCxs8432BUTxvaNue",
  "key8": "56aqwfuSkKVTHVDrT3SKnNjrxiQ64Hp6bgLmRCqbh7S2Se1hFNTisVSggUfqjq8DYM7ZaCwanozgve2kyhvSSMba",
  "key9": "3BZgaCkivwjiX9vGFMYjnFkrT7pZe4P3whVW75nejP2LvzkHxAAPrKiCedkYtvPi1JCBj75nY3TiTgRiqoLSmw7x",
  "key10": "2EAZHUk8tyHZebjDt9uFVUxDp8V7ejRWnmB5naFNGnm5Ym17mG2yCW3w5kQui7NckE97E68A7jCz32cWSjVZxBrx",
  "key11": "3xLubCXEvxHnwwnaHpEyfPxcVv8VZud6ziy1oACdH2b8uSiptxx7sFQVrmpGBZJ16PrNChhdNm1h2hwtKy8fQcBu",
  "key12": "5QcRab6tCWimFdKvUY9VPQBHZNn6qBq4UrhhXnMADJSgzFijfbjAhvGYRiEmjRdB1wpFjZxYV8fFCEnFjjXEANk7",
  "key13": "4pJhRGtF1QEiTaTjhnv1UBQiGoVEvET6iNWgEeDdtouRN5GYnuXmfMYBQyv18DQaK9kevupYJRADEHa7am6g5d86",
  "key14": "2PAmdQfvBu6T43UqxwP9DDNET5mp4LDoN1Gs3vJSYQ3m527YKMKR5Az4TgDKEiw7bA4hRKcbimU6Wj8Kp9PBG2HH",
  "key15": "3zkJE7nYyT13re28JNimRYrfBNjcGSVyNL4GSDVr33hWo9mrqEysB6XB3p6Yz6xeNd3DoAfKaYs4WFesGe8LscJi",
  "key16": "31bJSxMzfZgmsruxwuNxktbPW9pNyXvSKBmfE5JbfhL3fBKdrVkRDq5PTqQh6WdaSDEvrKmJdb7XGEyS4HBRwpo3",
  "key17": "5D1z6AGRZU5rxEPSubumZdNP5gVQZpGaz4uKQ8rwVq2Fk4i8ZYPxK1EfLqLvXFJaMPeenJSTxJCRt76EsJRFY1kK",
  "key18": "4PMHmS4YKehoBTgZhKiamaDrSiceBVtVsLw9BCAW2ZAnYnUGxmovisoVBerXqM6ZjbSZEThbQEPdKvsFACygeGz4",
  "key19": "631cU1PfJufR2xuz4B1HHrGXU6ev4EPdvS7bk9ZSS5DoHo8DK3zdPJVtvcbpnqzoPBX1NmWtpJgSxtnRADR2Kt4b",
  "key20": "4sTvUBL1jFkP8kW2nSFwsbb9938nQBugbk8meKPHJTatebQcss6AYZ9fcQJ3VPgfV3FMAKL7ZVfiA4kw4VE8CC8Q",
  "key21": "4kV6L9euu6Um82QLFYQmwe4viUEwz7d2fzTsHscVbcKNe5BAtG1b4UgEgq1XywrbS7pAu5shn3MAYYC6up2m4Kkq",
  "key22": "5r6E1555N4xVp3H5vjjjHjPJXXquWF4U1f3HRP6QemWX7SC72GXmFVnhCmYoVxVNsw7qMrKCs8QmE75KvuCbsihY",
  "key23": "5k9ZcP5duKBeczWziuJD516MKVNtohjHJGd4qeVLDS1SFcKsxmEJKkVLVd3DA5tKNUFyCf8hiRY7qmvw259BWrzS",
  "key24": "47XwPpfE7kbbHBMaFX8hZfegFupstsGEiXz1hTsfNsUZfpMXTMSSgxU9cgbXN9cwF6qWHzVLDdeFT7kqpDjgg5Lb",
  "key25": "LFWhwXkbWA3omKa9m3A7ooLFDqRvYCcnHhmHL8havxCNs8gKoWSpJBcyxLKZqooj4hJQgYv4gMx1ZxsW3TP67Sx",
  "key26": "4DZZDXUkX1NcZecxaitdByRvTzcQYQqbiBxR3p8knMjuvVGL5GeyJPouk5vqSuxPJ8LqPt7Z3J5QNY282sVYzqQF",
  "key27": "2pyQhF8qduCJocoYApF317UG65nBqtfrJsBWQrYxm4x1RCUx8vuqqdLkh9dtrwxQ2tpPQBswFsS6RAcCER1CAa3s",
  "key28": "4KnpBfGsHdNebH7YBGMLdybn1aaXFcsMypbnQr5uibMgwA9QWgPFsB55QY563i8asvW9Up2u3eX4NT3Vj6Lihyxv",
  "key29": "SWytH9KanApdNTvGmgrkUBg7xWUyio8E5jmqZjHH7R3z2rVWLCzAAH9yex1X2VSbzzqtNiQD7qdh8HfKkGEgSRU",
  "key30": "52CQQi73ALJZ6EXZPHBRk5RKC6Z232untnRHNZB1a5176C9gYdKWatKgX38xCNCntu8iVyurUomkAFRuLkBskiES",
  "key31": "2LYapzEXo5hAfe8fsynHS5MAapeTk3fTfepTAasbn4dXG4AZtAamU4wj7ihD22cJGzza6aDnVkV2hYg1nhpqfAKD",
  "key32": "2vyTxKLZwUP5zYyFV2FsqqoMvC7CdXG3M4dos4cWkiZSZWHeRJU4gzejd4wB3JHaX9UAv5HNPvzy33jH2PpPFTCU",
  "key33": "2hn8kaf9i2su6iPfEw4rqtmz3rnBE7Znw4FVrnypfkaz5xup2MEHunLuNyZFUf5FBcbgRAGFXu8eRLkp9nDb4DhA",
  "key34": "2Vx894ETMtwkrKoJQBxX69th6iSqyb4DcW4WAWeBqc3Ep4qK7RsNNL6wgzHtpCMbWoJ8wyXtCBrDXXP9vWLSzRej",
  "key35": "2ePiFeY5GERruoiqQLczA8wffsZyjcREubBezFqXUzfeMncuJkJXea8VvdZr8zkxiSYL9zg4MfE4dVZdS29feuAf",
  "key36": "5bop3pyMdve1MJJdQcFPqzW1xSFHtB8PdpVB166fkKBi2Zgu3RSKQaa6w6s4aczrLteyi4m4wAk3hkVA1fE92Sta",
  "key37": "5tvUNtMp3kN2Wm2jRp1wRW5mxRGUZAqqbVFbr3PJDhnU5HKB4zFGKTX5FZPWzr1u9b8Y9gfKfBX2zeYzfr9rAmHx",
  "key38": "ghYcpymMDa9BFgs6VbjpFRpfpNX9kMYdebqmpHnybi8XV1bzWxK8kHTLefxMAT6aaK4pxCVnZwBeyBjmdAEpudY"
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
