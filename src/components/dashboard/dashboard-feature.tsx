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
    "4NmDyqDz1pjaYE371NfWPc1P2UpC6SB2pjDmjFSgArcZ9dKPpTvH97wtbHCWKMWVvqKJcjQiVkNZXEkGeEiVQ2Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k59b9v4StoQmiG6QHoEcGUNpFXvwoUgPf9QYxZLMMD25mGzVbYGLAANVnVt5JBHzPEuqLirDQWtjR5zu3UMMqZp",
  "key1": "4q9ptT2AjhM1B1fG4AcoojJPXZ4457812ziy61Uqj1AMxPS12XzR871j6rXcjniDgUTVQPDVonzcAJUrnK5Znwik",
  "key2": "2MswStwxsjc5PhyFtXTwpGH1X3oo6iehHxBi78opaviymgXXDUM25D7BbrmjyJYAEcEdTBEZjxDJdW82EYKZAS76",
  "key3": "tU9ywpjA4f7TvqNUY7DeHKDyEUwFyQav5FMdEkPjLMSV5dNpHucvgm6dAQpCQLxwUXYTd6N9di8xNLDpVGm9BDD",
  "key4": "yVHL99hXvbhqxeGbAtvLQsQJKYujaAnYYnFsYxRXX48dtNcC4ovL9escQxHGgkAiTPrKrbvza3us9baxfBh3jBQ",
  "key5": "5dJHuKnx8bkBCaBFMX4P9gQZdy2dB43qVQGJ4KJSpiXciqdkFqnDTrW9EuD7useJbkf9pauyJPhZja2zPARaz8Fj",
  "key6": "2MxFiSMNmKEhKNT2XHUGJ8xEXUJmEMgr9JTJQrbMGQYfmWcRvniFfLbbunX18G17ALM4eSBurj8jFT4QsYTiWDTn",
  "key7": "3UkukSVVyaEBLyzU43KkrfcYmid4Sk2zDLcYf7qDTwJVMbERVp7RbtBuGDifaTuVLgV6ULC86JCLXjD1hRCqq1o8",
  "key8": "5fsMJK7URaMjDN9NQeKQ5uDpEhtBMRfAZUJj22y53JjDjXpzxyA5CbVCJkXQ7UWNRWPLqqFHcb2ax4gGwum3g5mQ",
  "key9": "4hqNM6CQNQbt14EFuEgSrWQ7TMin2SaeEtBfTEgWo1YhanQuEKTGE7EKiYapUhbVET6rXjeCzrDUgrEaSyVhj9pd",
  "key10": "4FxmNiL2FgrY81QG6Coe8b2kdbvrpUpf4H7FwVWn5szvaYsdyJ8XcT1WKayWFfHL9aHEbed2twdxLDkJVk5GoSzz",
  "key11": "4DMaSj7htBKvEVJDprHkqg2EdRjxPU2iVXGPZ4DNMXfKCP7zJPFw7yn5fexrjwDKryUnLRSHNitTRaJPndR8MpwY",
  "key12": "33L1tvAFpTj8qKY6s5gAUc34XwWaNMnbGKrNjQmUZ3APeKPBJKQ1CbStrUvaR4XkP1xLmyg6dz574xjEEWrSDy4Y",
  "key13": "2R7MeJDedjfhctY5iVRriYoemUg1framQtf2yJ6G4Y3i42ySo82arX9iN7KJLKfig96kK2LLXa9efhQu7qTf9jp4",
  "key14": "2vNiQSAWB8AYBi4W6YXDdkqBiAAWgDUqDQjTgugSBe9j9Fhz56o4fq6SPD2DYrmWKJ1NqPscZV3V4htqgSyz9sam",
  "key15": "SAZ62rjdZHttMk5wRDkLq9AgGgmyGYYojYC3DNdTmL89LzR61rfRDdtjYVExJc3iji3kpmCrz74pnKMJWPdaxmk",
  "key16": "2eXwxY2vVa8gEYkZKfoSLG84nQrZYv8VvQCH9uf5wDhszP8jbxt8FdfzUgAHock2bdkmZCtH4iErzB1uKWZ4X4yP",
  "key17": "3qVQcTRPjeHs4D8byPmfynQTEBXhi7NiXX5nobF4B5BhsGiYxEmjU7WEXxs7yy2kFt9hWoD4CvTQxLN6A2mG3Jgk",
  "key18": "4Z37EjHgPDzQcrR2fR6GjHCkX8egFHBbhaVk54Lrq2sP1wgSgVdYoKWhHiU4aMXXPGocAC1VmMcRYYjXtEigmXNJ",
  "key19": "38nFqPNetgfqoBYdkNTXEDbQBDHBVpH2c4kd3u4foWfzFVmGht63GvJjvybTnnrEydJFRuso6MYMLovucTDpWTPp",
  "key20": "4fS5d71urRAMtHZRXjEqkmPdWuogFfnqBbXbdRnj4HHcALS5wcKM2EPRnmukuvjxJ2GZA3jt3RhtwvBENu3AWtB9",
  "key21": "2LNFARjftwfrHHriLXvHQcJJUDf2KH71Xc6KG7XzARLCQYFD9Cgt7NW4vSaB9BSLcWDnVQmNas46TtXo7G6GtzE6",
  "key22": "HkrQ5XwELg9cdaVa2nRQSL3YJFU9P9HcbuG6A6177G1WAVRtDQ49YKDZ2tn34vSnHc1iGoFCgTcJfvchVYzHiB2",
  "key23": "5HWtpgVXEc5Hk1hWSEn93hs1rGs53tb87VcvgMhBqvTriEqkpA7wyaPBUwSqXA2y1xvRjH9dcdLiJbgLn2B9CHZc",
  "key24": "5pcpb33BMLontxvndyKU169PGwA7nYWTfbaDx1K9NP1isLEqKwuTvYqab7jmyHCRrYW8X4CVKYspq3a9JBpfkRYR",
  "key25": "31efQvvTMBnvNTSyhy8ne4jDzGwHn74X5LyNqZboiqYrwrLUJ8ZFm1cAE93iC8aBy3H2pNotYjMXRm1VqSyifSEh",
  "key26": "2B4RprooM6UQ652XM14Dd3Sx3mkoMUJVcEEQ85iqjPxbnyMU55EzTB38orP9uSooLX9C12tmQYn1nhpfqVSXGc44",
  "key27": "4hVtJP1zF7wsPH7KV35aSWUsXKQJJB9VtnwxqMGEiuiCTLArRnxDVm8Wyqo2wXoERxMxBnecUDQNpgZCuk124CTK",
  "key28": "4xCzirAsUPRtAHAcV9oGLpJuK3JsyRLF5XyQAiRiPfmhzuztz6cnewhvJ5VhJ6vX3ggw4oNyKrMhhr37TeCRAuGf",
  "key29": "4NN6B7pbSGVRVQKobptvAtbKAWHgwrZ6sV2vuHBUTUuNDD2hchj5yaVavGuixL9jkjBqhaXem6L89kzEiRbEfgpm",
  "key30": "4KCzkjHBvDkoWDbcXa3Zatvdf3SYQp5ryP9g5kAuTVzraFqhn6Xx8NWFcQU93xzbHAWKGpiLwFM7QwdG7EoqJK4a",
  "key31": "3Jx8SUkSnZNZKrjFN3qd8oHR14WAVxYn7R9rNNgR4vq3UqugUbqpuk1J1Ajb6gfe4xtwXG7huLBLD6dsWPYMaLjy",
  "key32": "51tvkygpkYLEaMnnxHLWXbYJUnhk7ebMSRWbunFumtxtzBqXy7EHBht83RL75sTfA9xbUVSS8MkZAXPEZoDiZoeU",
  "key33": "2hpw7XFvHXKvocSsrjDv9Y1rCWf6UsfMyiHEDT1BDNziJxvEcNJvGbFSgcwLGtCEFKjVuiQz6HGD1HbehLGTdabK",
  "key34": "3u6Wjq9gPcUj1fMBpHVXwifJkt6uXtbTqFXYKBndpsV6GJa3LyUyH3JfAoEpsi1dKXhyvNrakVVbpqVJhgovzpBy",
  "key35": "5DKDWhDntXNmGqgjtG1tgTqRQ1w4sHcPsneUUVrXUsvirW6QfHDwqYYyxtdNmwQY81QGeimekDdJpoxnPAJxBaft",
  "key36": "2vPDvxJnxKfY6SLRuYMHW8P4AuMi3Z2KhBTPDU7FkiJNY89t2P7XnGcaKpFPtGLk5JwX7tuPTq8CoLe6mygTti6a",
  "key37": "5SPfYR9AycdHGMz4b9SK98RXfWexjDYF3gCUkcoDpPwXm8MFSodfJEmX1zB6Fy1niSRfwKgJEzEPStrc4AgGMFLc",
  "key38": "3pLrF4F37p5cY5fPQHSyFWeQ6nko2in8vBFm6FYmaLp6KT7NX2b7WYEWZsXeP41MeAQyX5TW5CPp2DgtuQQ7k1YA",
  "key39": "45LoHRS1mbUXRWbXPwsUMFHrjjXJhaC9p22eERUNNqMRLJmtcbMEanifhJcHuLfa12DuBB3wDqq2PTHzp66ftKCi",
  "key40": "2UKAmQdG6z8uNkfdX5S7Q8EAUKxXByh7g6NDHcQZrUH1h8jZw4Mvn2Dc4vRqucKK1p9Mfg2ckvn2NnEdjQbxcYWb",
  "key41": "24ZfiTNFsEAHNEnT5NnQkGH6j2WsD89m89B5pJ5eeik4tsLwWJzGAPRpwmnvczUVthu7qRmCp9JeLoQby38hEaCJ",
  "key42": "34cTBsQccykc1qia1rd6m8jMNtvyYgVxYNesPzcpvJbiuEgWc1JJ8vYt9w9zBxEwXHkLyiqjWjabfAQH7Beq7GkQ",
  "key43": "2sxMue8uBXHQDwBLiGuun6Zu1ypiTpwsgwFn2eyScQy8VvUBNRasadSMtVorX2UXpFh2LaqyPx2zq7um5QeycTtm",
  "key44": "34D8WopXee8W1myPmhNme6F3SC7Pcg2UR7MCNk2KqYxryQfhTnQEpg5wzFEZbBJq77G13w15SCzjbr2G3wH4Qpnc",
  "key45": "4JTNcdpT79AJr7eB5zWhoRGxKX1NfxC5m1kG9LwbTUsX37tbBDiRMkrnEYYEiqYAnN1wQXvgron5WdAJ5sj8y2n1",
  "key46": "5zEr44kir1zqUBng1jveQMPxoGUcw8qBpaoMu48V94ZTT6z9kJWUehY4Gqs2zJ5iRuzRfkCMu295eRyeFqiY7i4j"
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
