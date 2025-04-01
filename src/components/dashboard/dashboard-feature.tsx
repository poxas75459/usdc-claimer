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
    "4J516aVgFEmUutvBDrkFk3Ud5Jfv6Sm4DSh4uStTZBRPRn3y3mQSdKCMYaCQyKN2rRbYZZQmM5BotTdqr2MduRiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2in97xwmASTboAhUNBCJZW9EkGTuw9n3vNSZWVHVf1xc545jm3JeYjsyYwDh1T9BmENk2GXUt5sKbV1PxshqzVGs",
  "key1": "21ic3iLLjpgWwopBKzwDsDkk1xzNRHERrEtxDcLtXmLPbrqVEvoM4vJa2U8L57sqzh8Di3geoSWnAGnLEVh2X58i",
  "key2": "5oK4SGuzevsKJ5aJoFQqcFEfP9cbhdqinMpa675yZcVAwvrgNVnYNbYQW1Nkka4TnXicFii9EzzrBeWfCzRiARUB",
  "key3": "5SgMYVTmZEV2Rv6EyQUEwYD86yHHbYBe91XmqQU83VjVVUknLfMPB24qTfbLDbWzF6vKm8wmVtscVGQEfZtFMW4b",
  "key4": "3PcMGCLaRRf8goRTD8kKsWqZDUZFpCv6MWZXuDebPESNTajuGYC8shKB5iSeriBv8MMDZyfRmwPZirA8zDfckHDq",
  "key5": "3wTCCzyMEGARrDDNAuDEKLRU8jWd6VQn8NudVhGxZNuvu8gaTL6YkBWNLdGwP9qcbptxAZnzoK2UAbQNr9mSJiqD",
  "key6": "wYDL4wpq68uicxT7eaCWAdX46dPjhkbhRHvQv9RCLSZoe3Pwj4Pjjgsb68PmwqAvdwXC8zszAoahkpHYDoHgxFf",
  "key7": "29ZQhqjqu2hzR15cbnS23GvJufXEUjxjroKsL1gQDKSw1s7Ks6q23LhJFd82NXoLU9fWTZkC8W3742AG2bcnG3yh",
  "key8": "4CPNV9UbNAA1gJQDKLtCmn9DGwLEMys6mRSktwySFFhYGDmvuAm8Lf3LLKvCsDJrfjQAH23e1AgSM1PKBoKfsRfN",
  "key9": "s9GifqBNLXiPC5aux9asv5fK7vnPkXVTPZMLvFjwbbdcTuy4GwdDPnXgP764a6akWpXphg1GAMNGPMuVPNBZXkF",
  "key10": "2ZmFfBDufCcRob1CrixzQJkW47GRxjamZmonAzsahFMSCATZM8hDKT6UYbUMntUrNyKNysBZ8jVip9ktVSBkNaFG",
  "key11": "5AMFJpfH59bR2Dt2CUJbk2N5Jn7PPCzjsGbx5KJ6eJNEX6V35QKjdpJ8R2TuTDH3jiLLG7cX9YpiedWSQDRQZ5r9",
  "key12": "5zgi9MiqFK85H4uARyE3mm4Cd3zssSfunH6ueuM2PzDpseUP9pG336tVKDnbUD8mKpEg3VGF6gmRbuuSfoURTKqj",
  "key13": "2ezm37PsduFDeZ8eXreQtDwar5NXznrmggf9oNh3S1hdjqa9UtXm1WbLv81d8G8criV2GdbDq6MWZirn56Y8mF5a",
  "key14": "5A5W26PwoAPSJ7V65KnNm6BQnJhiK35jbJVxNuJfJB58F6b62JJaMHEDFyBQQzvctNgeeEDKU47tzpozs9CYbc4v",
  "key15": "nACfdez5WUiD6p1K6LsY65NwUjv9rFVmP4T8YDPvceWdrP9AVZ9Vd2gkYFN6Gw5arsw49v8ZgiYf91ebJhkSVhY",
  "key16": "2g4Tre9nAvBUQ6rKfSczKjWVPu6EGARGMC2SRB2SUbAMjgBxw5wob96htondv2zqqEEhkhfeSGnwAVa4UpSEt1ZN",
  "key17": "39D9qUvsDmm5QcwoLjS5k5KgNri2hawjRaDGabwFXmk7Gf8ja3qiEUxBmxMQwoAbxiiumceHM5txLsPXVP4uQhgm",
  "key18": "4RbQ6FNP9uR9K1NVU1Yk1Rpe4yWQRohaYbZRrJDDGG2Q27hJ5wMXQ9Uet3hobHQQ2S4jMqwcMAb4DZRy3mVoHfpL",
  "key19": "4hnuNwg5gT98dZwLC5H6pRTf6AzJdtGGz6nEyvxuswCieRLKayhtxW7dfHxf6AG64vn81cAMX6wLNWrWNnk1A8g3",
  "key20": "3GqmqTxaQz37bzSjRyN2jty1jQ1ByGsadn8nJFkDgpvbJ29uVj6UdYF3vB3ecGW48MJJVY2dpfjk7gbZHQQqsRPz",
  "key21": "62L9DBBQuHwB1b87mhqpfYDX8vqQzKD1mH8MxKS81vikGhuUwJGErF2q7R7Y27a8TkQNzbbRW1jNLeV5rbRb9LSg",
  "key22": "2rtJeKeexio8LfqLz1rXbvTyYmYA81ng7VytKKqUyzFTVXBoQJHM7BwXJR9BAHCu2QBxJHRDi9FqzNHULAqct5MW",
  "key23": "4De7JBr7LFTW4cRHiPE7HLbj4xfez8P7udzdWKQ8Vb63aWBVnCxstLDt42py4wP9H14w6VnUadMuZAVbogjAptdd",
  "key24": "4Mak92k4vhRbSRv1F9fAPdZEBcksGP9gBpHFMarXb86j85KiwYy8vSSpuTm9WF6kp1QEzjorWJutuhi9LLjJNvzp",
  "key25": "5eH3PwCB4onsDQT2bUTNYVxNobL8gUKzdB4XY4viSAM5PfHbuV5oi1GAsEmUYjq7jbQ5AYePJd2JwkrvGnJJNNz8",
  "key26": "rqrXbPN77HpsJMLTz1RoLRbbeeHHT1J2FpjxgmQ1sdVXdcGXNnvenoBJDLmHN7jsCZtYYeDPxCiAA3S5gMrky4o",
  "key27": "jhmjfS6wUsZoJcRXmG38aGriaFEqTuDrahYotgD8JcUKUXLUQ1ZPGBqy1KwpFa4n3BJKrD7MHXaaQnWC96VduDi",
  "key28": "2DSXtqGfgaaLCTBjvDjdSK38xD7cNTfBnyzswS79jX9nd9jGMXkN3fuja3zvRQ3NnP7DYTBkQVPCSyZXjrPkDQhg",
  "key29": "4R3eogdWiZXWXq9jsz9MGpZHkNH9xPygMBcWznSeEzK5oXMCMHxxMdxrTX1gpjsVzV2f3xu5oLSrr5wEjnV6BM43",
  "key30": "BDaVpwrp8EvjGECQJ5VTxCXaKv6GwkbKPfxt5TRhCJXjyxjcRHpXsFSKtmHTkBiVhktVXTxrmhdq156znLPrnYF",
  "key31": "32fHeLRynLYmVNq7Qco3q17QyBQEL3HYSjb32MNvaJcj6EMNoAx8dNses7kJ7wBTHe94eQTj5GRXyKnsA5TepTpP",
  "key32": "2pEBEyN95sgScaYRFzrhF3Sgc2jXA4nMrsqzPzPtXwgSWsBBSfmMwyj5p3nzgnZTGTc5Fiy62E6TNZXb4jHRLqYx",
  "key33": "5pJAm3QwY6WREsP47U2JyrBLeFZLNNyF9SQpVUoWKGfAkxSANBm4oHap5dx5CZHGA3FtdyA2U2VfVa7sZZ2KU1yR",
  "key34": "5mTPs9p2EbCsPVq21A31Q1ZmphM2LjPkeqtjU5TV14tSfWLVRhZSni9ShDpEpamJGwd38Y9XvN1uyUhfiLUWLkUV",
  "key35": "53ygDFGo6gGTiSnBBRN7rpUQNbqpVBoGdrbtRn9ZZwRvxQxSzoWLY7v1hfn3fwqwfRY8RSbAsns5TE7QT7jCcX4Z",
  "key36": "2f89PFf9v12bhWsstvKV4jnGrK1snjHpf1wFuSxpJUCrzfVn1eyLZWtdgr3LjoU9K5E3yYU92USFeVwkmsAaKA9G",
  "key37": "4RSr1H9Vfshj8zB8DTsb2cJPqKGbFM2PZkmREgnVJzEH1PLRTeg3CYeG4kQ7HgLpjg64FzZdGy3iXg1gAzifzbRW",
  "key38": "3ToZTnHTPccs2dzPfcFwbL6TYiHbJJvaM9wJuH92caPbwmdzdTxuD6dGb65dhU23rE8LidMUA9fQWka87dJ8u5E2",
  "key39": "5L5oxcUXMoi7HrMLhb9Yp6nhfmAoJX9LZ5EXtGyxSgxTSrf6D2G91F5GEn9n2GrW2SknitSWzC1ciGtoKnEbaDnv",
  "key40": "3nXrJFCviZjbxbvRjLSDqDEX2BLvV6a5JPyit8AtTR79vggQHoG9WwWjwCrR1yaMkZFnesEFQ6gxHQGghNCfk5Gf",
  "key41": "5hwWx8AFBWr9GJVhJiuu24o3YWUrtJQNikE4jQWJJEsdEUf3YtQsgy6MRyS7Nb11u1313tsiw1jAsVzoZbAZWbGS",
  "key42": "3GL14gKGDAgMW9L7CrqUZgDE1mP1mhECJpXHeyb3AfW3hNEMcd5zWG3xzwxF86XhBsQvSA5bjE7cTdu8GjYk625p",
  "key43": "3uu7zaSRK2bJHEBaJCrSBmNVor3GvxcuPrgJQL8EMBVtgWLawREjBF3B4Y8aJ45h5ELCW6rDCLDdChwjMpfiuEg",
  "key44": "125wBQwv6xKrKRx1gK989mCrDb8aZ3fk9hY3qe4sopB7kAPwCTzYm71vT9YPcb3LuPJYJU9gVLaeSiwJDYwcXGWA",
  "key45": "3FgkBiaJDvfwt1wHDq4eT4wJ5BAJ795XyjWsLkiafukTSpq4tQEBGunrG4baECHR7xTeNdR9VFg8uPzwcSp9dN9G",
  "key46": "1214ymqDLHtvgr1MnXeQR5JdZHS1xMAQ8StGSqpmM8C46zcXGnyE7n2Xdtwn4PRESTo3WpPVdpK7GHim6vBYBXuT",
  "key47": "4csm2QdTEofqD3oKUUppF5J4D9hwFoVGSeMtimXvDMEJzVcqbBHsz9BAEFSkoYVQ2DJhsc2iuqzLLn4QW1nM3ptj"
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
