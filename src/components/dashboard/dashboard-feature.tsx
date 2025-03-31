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
    "2SQavyCCBUQwwy7A7m11Xy9kQHWnfNm2HCrAEpci48NU3mAHApUqWwrDRWfLuZEFoJs9yE99asqB5W1oaZGPwZ8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9QpBa6o8565tyNwnGjWKgj6PUb42aSaNGRsKepjhsc2dPQgRXXziGxwV86Twn6yT5rsTTiMx2bN71M2Mw6Pwrg",
  "key1": "3oFLGNc5oSkfC27XdsPFVUzz7r23V4S1wYPjdUxGuLtWKLn5aUunaLHmja4eND1Aj4oWptyRerVBFHs66PmZeQmR",
  "key2": "4PA4ia2Aa7FfH9qLG37x7s2Ciu13jRtLUKCmWMkt7zDzpZWtDDTz499zJdBCCz8ZYe3hADwem9XnBcQ6mocW4etc",
  "key3": "5mw4ssAX5akbGNpE1o2ZycteGkvWGKtJajqLDojQ6YR9ugyUV3fLzSBeHiVKmwFqcZ5dejYyjxAZezG2DqgwxfMu",
  "key4": "3yKChyZUvwUkgntWXUu5AhJzbDV7nJp24ovxke7pdA9DGqrwD6UAV1kpjdDSZEvbPC6B4GcuFBfHZcKVZYCEDE7p",
  "key5": "2JtZ5oJWgcDD3YmkiwwYzTapgVq75V7c15coGhFR6vi4LkcCUU4xswgP7WsZ6sDLAwb6w5svMu8fYFeqxgj4ucWt",
  "key6": "2CaNZUthxJbcL7S7A6CNrqfTYvWr3psrFX9SQ27QWLJhLEWLtfmtmc2v6YqBwkhtyhXoqfjL2VcWmDzcYC6KAMPh",
  "key7": "3C58MHAen5crudahYCWbRSmbTeohET151MgMtMh2TUhVXCQK9eebwdQoWdHmxctdyV3y9DmVwMdTtxgxrSvjdWaP",
  "key8": "5jd7NDrnUvnLjcG4BYWByGCSTVQohkdNJKqHzVFYkyKBP6m1ncnciMddwnqjggEUMDr5scHMz8KKdkeeLhGhQoUx",
  "key9": "36ZbjYgrE58JBtaYuuUA82zvF9MvBwtad3Vtq4ZqbgdGVmuDwx9jwteeWyULcoXK2rvSEvd7qXpH3HH9NaPUMWqN",
  "key10": "7VhLvf7a71TxM2dWBhjQhfSpBtpgSXrtfkFftbAJbK9pbq52KCTuW1h5B2fZanA9Eyv9o7jEx9FBavhZfUeJkvD",
  "key11": "3v2YnBeoj6jMoV6dCanQnzQ71zmSdisKEAjrGih39DZZJQ4P3ZjBxJJKgPWo2rEsPD8U8tz3wvhmTVG5JUZBN1na",
  "key12": "2x4kNJPKBbAiGE7iTvuGvJJ2UBm9rFEzq883VhNP4xCzfcuFtTSi2EWqbCBGwtFduNPbjnjXzXMCWQ8uTx39QYHh",
  "key13": "61DMM7MDvLPeF8QgVVxnAHRRsAyypQSQy8JNbuC4VfVUyumqJBTsQZodVXLkpP1SLX1yWmnC3KZBPnfyfffmz5PC",
  "key14": "4JXWH2ZMCMCHEmuyQqC8tDzmYGHS5ftSMT2Bc3rVW7FTBfNPYeJKJMMvi4SN353GnDj5giBgAdzFtR919bjxJcp6",
  "key15": "boqqVoyZHRCKiqV64kB9xT1BpDSCx3sjLi3cp5FBGgzP2sNE1eAwNyEnhiR38NDtfTLthEDhA4hr15nL4jU5br9",
  "key16": "5SDdSc5N94YuJoFX4PgNNQsR7h2XwhKkEJ6beyUNddfeGJ5XagCVH4TVGjtQGNs3J3CJC3eTvwvMbqnSCSkGCEkG",
  "key17": "dcYUrw88vFAdR2WQvtP23b53JpLD7rYezJ8zkJDksYfbxYBwM6kBq7Bx7XPpdTVkopHavqGs22KiEtN4oYBsxZe",
  "key18": "4ymUERAHcKrxmP3ANKCTJpAyvRNZTamR8XkCfpG7ttFZStrK4FFkLR6BykHJYihkmzj3SrJ92Bh6qMmQZE6KuBUg",
  "key19": "3kJ3bbsvyAuFufbvufW8tmMkHR9aiYTXSp7RDF1CnciN7G4YMUcxZWxDpnECsTv6WBHUXM36ZasmiRMBWv8jz3M7",
  "key20": "3L3b4Atecbg5VCgYNiyE5JcMpXEkmRAmzdXMFBiWNrz1Btcr8sMqjtdhQucEsPbG8BeEoKC9DvdbpZ1qn25ZELRm",
  "key21": "2rGaTpv92FHMeBrn12mWTC7t7z47p9TdUi5HrX5diCQLr7Ko1wEYhdy6Z5PoewfvYFHDvQg2dBC9ydL8nHQwLQtk",
  "key22": "5q3N6VobhM5Qt8APMsc2QckVt18tQ3hyrRjGdGKJYTqDwZmque6WZ9QqqSgGHikfpXY1263GhXKysNmQLhMg7iWt",
  "key23": "MqpMkwen2s6jSz2jTWjutfkH52uu14nt5xJ2pACsKBuq9JsdwZ8huAMc9mpALtbNrdUjC3GE94KnunAU3V2Cysk",
  "key24": "36FRgLPSFjTJ9ihEpbsCSA1qwpb87jtXRVScsqjM5tY1x1t5wRBF5MiLfFanRVw3UxTUgWzz5VvwGjMiLzk7issR",
  "key25": "3f8VvDv5V1pYDhVaG2kdLGccN9PfShoPuGCHVMkzBir7rei2P8egQRij7M1jv1Qc9HkGHSAfUUjuu7YPg3HvGgFa",
  "key26": "Cqv4vVGGoDA8ceUSQTJwAACc4A8SiThY5FLzvMoQY88kS8Nf51Wn3JzoHfJUgUGnQssHiVCECAPJ95y953CbXms",
  "key27": "3BdqkcMhvLX3D4hfgGL5vb9fYqk4duAD1HTN7PPZ1Ub191Bams1QKveaeTQp5XJz3Fkn4uLw3UceqCbmahZmrNuT",
  "key28": "3bDBaybszaGFpZooKUgpgy1fxg1yaVrK6hhfup3Aor6Zx4xvzstcRtT91oqWheRntRG93Dhb14KmDDD15YrN5Wqk",
  "key29": "YEA3i7xzV5Ss6pob9Jm9Pn9vFfbmqns6pB77csfy7WHT7mLuFwBBi7Vn2eZyF96d9sid5UcT1BDmPX37PWSKhKZ",
  "key30": "4BrzttvmYGWGLHVjdhRsDefXmPAzmGFFKAnkqWJVkFA4mqd7oou4AJA4BzBSg5oMXzDcrGCup3VTYyxEXqJ8eK5X",
  "key31": "5bME4vCGeBQYyqrMh5fNQzjEcaTTtbp6tGpRapC2CZwKL14D5gEQMRgrSUt68tRbhnyoDVPxUaJCLKdoVy5YBjFs",
  "key32": "3JebjkwMuYnENJ1jsFBZS9ceUE4RW3FkQC41zqRYi6GVhuHGHe3Y29Fp8CeoRqb7wtykwr8Pfhsvf2y4mhJZchK8",
  "key33": "4jXGQutKFSM3qy8pc2z7tnGWT9EoLKmDpBJnjkK7j78SD8FLL3zHcWaHf1hmuRNWnurhMipF71kPGTeqQzazZWYY",
  "key34": "41Q6YjAqppPvxZHYa72Ci5cNRW6VFf15XdrGEnXmqLomBarSg28Zt4oYAVYEhDKxuhci96F6vU3miRY3HvEgGrUP",
  "key35": "2hsSamCtNq3cvGcEr1Frp8XfGCfoFoxMi6Bf2pQcFZuRf1TnzbrraYHgW68Mnd4i9kKVm4MSEstsi1k7vs5ZRCHZ",
  "key36": "5toobVRfiQjTrxrHiJAhmoKAer5J4zTiE4sTMJsZubtxXEVpnCKw8xv3B5VjVdrNknyr2MRBWgXatqKep2htFMxV",
  "key37": "2jmkuFyHuQkY6t4pRTLNV3cULw64DnRErkuLaRpms3zmJeEmoDNxnuqUC2JjPCyk1qC1t6AivqsQMEAshEXsCmvg",
  "key38": "ftvq8s4sg1q5tMRX4WmkXvsnMYEkvaWaE4k6GoKBL3J8TWfpMSYQ9vckW3VaM18tEkZNwhz1iRRZe79GhZNgoyN",
  "key39": "5CaEZsExkkWj7JT7cZeCtyJmPCsYWe8EPqBEKGgGafiSiJv1L2eQcCdGg2zXPino6cmJYHG6NRqwsYD5vszHn99F",
  "key40": "G3T6DQhYAgyCLZ4kdSmC3m8HyWz29Ci4zBrxhDaCFwEFT1JiCXjciPD6T1ViC2DeZNdx246NC8Jtn1HTLR81qHD",
  "key41": "5L34wqMb2rKbHv62d9zNUrS52vpWV14TH7hXf9B1WTyMaaZitcEHxHDY9xx9cv1FSPSFc2HSqA4KMXUg7zYXww6e"
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
