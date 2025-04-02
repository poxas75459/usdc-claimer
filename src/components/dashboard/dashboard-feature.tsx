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
    "5c7VaJD2bHvpxznqffFXcWdy64RofRh9AKWs4YcAjD4iHCcRDHr8LTQ6veW7hXC3EkZC4QRuQPLA2EUUdX3m8ukc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U1aveLQ8a45VEHvYdX4Nix1S5dyq7TLb1GzM4mYMAt7XaKZFGixuQwyrmNhDrzwskc7mNjFPtU3zvU35kbRf6z6",
  "key1": "2TR48kg7cEY8q6a6hgaHMAdxswGxVP9buzQBiGAQna3fHGkMC2BQZ5wZt6SbYDoPhz23vziRz54282aiTw6gbPX6",
  "key2": "2aCsaBaV78CPGrW6hByqG5cbgBk2D7zAwaaopgNyNsMi5vaWQeGFo1wNWusKKdGna8Hegzo6mVQ4LW5qcBcworVL",
  "key3": "5deaJBvKERYxvHEqqd5jgKK9GTF36f58avep1fWWpBuhbCF1v4W3Awf3ppoFzEGLYVh67JPh7yG4i1cCnBo2oqXM",
  "key4": "5dnt1UqYbmuTdMHhfURHzvuUNkuVDadRd1X1nYn3pmZGZcxh93yR37gVUKgrL9QfSxjL1NC5ph2RgAXuNTr76qAu",
  "key5": "4MnZ7viyNwXoxZxSYcagfyGzrojo7hK3aBq6WH6T8wSXoDskn9XVVJw7aen6dV2wXV4DGmpKagrQAxnZd6f97LLT",
  "key6": "4rKrxt9RtqeBZFRB8E7HupesvXQ3rv82zDjtPgn8tHqxSgb5Cz4xvuc6EvZAbsKbYkduAVbv8q4gzfgBCybjeXiB",
  "key7": "2aXQsy2XXvHHKiWTVS6UpPknZVANvP2fAS7HVq6BtAanEUUzzFYwnu1jEPUzuwwS5AsAD7mrdsYzvXm1a1x9ALcL",
  "key8": "6aEVaShhq8t4gTUe8RUX9UVKo9SwD3urQ6wGNFaTKZcejYgzsMbWznKpwUFoeCeDoFMkUzbHdG1gBwvSTfxgS6B",
  "key9": "5LqdztPLLrEYKmh12eqfdwdPtpPqrAUJhv7Vsj81FeygTuq1oKj7zn6HvS2AQQggf1Vx9VxVjWFDTsh9wZ12vccC",
  "key10": "5ZoJ7rAJmM3iHmCLoRjZ1HrePfs7bDxDq5p4Kak4Arx6BNoJVNXAcTkWmfnmbH39r7pzhW5wqCrWoMw31dadu28H",
  "key11": "PUu9jFewW65kiRfYK9zUfuzAvrJnKsdaoVEz24dwKKGEntafqTE5aWPGWEEha3WYXY5HHJN8Ab5nL9GdCrgdADA",
  "key12": "5fzHvT11HpjJxnsBFFS3zwaG5GG392d1jXHqmmxU6MWjE3F8NGs3xdrWjKPWjQpK7SmTyfVR5gcooTGYjuY6dLez",
  "key13": "k6RQtqictqd4nhxNeRkTsh2BvLjg44sJn6jAjunTyUzz2cYY4Pi9T8nUHfsF4bs9k886ZmuKUzd7rjy38Ukj3uC",
  "key14": "3mfdWuaci5RRQvda8XgwN5qvrari2JTbpeKUAqA4wzeWoZfrA8NAZDXT9ycVeswRQNNmxtWktTxzEebZvExaebxf",
  "key15": "26TyntLGZoDxKjWTEZL1dQ6xZEDAgk7j21v4VdAhWYkJSekH34SHCHjrpaiJzSDZtnaVVC9Dxt3SpwFaSwamRJqQ",
  "key16": "4DvomKcz6p2eyyLhnWi2Gg1JsmQPHzqQnJyVt4ngfasoRTqVjBu7fbXHPcLZo9L6LbXs7DjPHBCn6LP1SQesznZo",
  "key17": "z2a2UKkUHBANaeRScszMGtxnVbsVxJkeyLULbSrCcFJRYDVrCWrhKq9bQc74RBct7xSSfdjYKovPG61Vi6PHggy",
  "key18": "Dbt67yx7HhZRh9L8EmDNw18zmB1GTDZrRFzL4oB1etGJxztNgAcEo1MHmoXqiXcfzYq7Zrmdjb5NQknLgssYLrN",
  "key19": "2AEkjFgjr6BftDMTzdhV3NaEYnCqxT5ykYTJtfqwZMuBxqryV2BYXEwffvGNX6t6epcWXALSBi2tECe77daUxKUM",
  "key20": "5utAfj5XSkAcBTK2VzMbmUFZm4fUno7BCADQmuNSCtvayQf8LYJ5gFGuo9MSpdqDJzFATapmSJmvPXMeG61sR5a6",
  "key21": "8uH16W5bpYknfNVvCkdf3CsbFaimnKc21hJbH6LoUkAtvhVBpqq3gqSZpfxdtYofXoDjkFyacc1DttFQpo9xhc4",
  "key22": "5jvjqwdhX6WBGRtzSAYmM83nELUXKgy5VkGQsXp1puUCR6z9sqHiNL59vvfKorszkh8a2tTQr7sSJnioCnNt64rp",
  "key23": "36ATFo7UaZEPzYj2xzMfwB4n54PeKnCFdCpkr1xJYXJr75gdycPHxJ6SHJF3MGsXmYhx7khbhPhPd4jyxJarqVek",
  "key24": "4FaChmPCNqNa6Cats8Z4oyNVCW6etqYnj859rJsZvUSP4niW8HefeXTLQo7uRmEUPHNkPsd8c6Vk2cdTMoAkJAPr",
  "key25": "ff1io34YX2SCStat2XDk2L7vpGog8zyTKf8fycHk52VtU8SxmEXbuXotcXDHEhCnJiU7636FhUcVp78AuvFaKdS",
  "key26": "5ovWt49JRrn8N6PiowQAocAxC9k53uBoemayAjs5syAMA6c2srWjxbLiNyqkAjJmQF2qE88VbcCQtHtyPiG4DNEm",
  "key27": "5Gto39Dp2rba345UhAYzBm25GjoZniroh2ycXy4JqiiikB8umw2TQdL37iHPdhcoayQVpQVkykBaEpAgjdiNJtgE",
  "key28": "vxNxBe24Qfw44DZ8gvRVdGkmxqbnDeW1snM9eRaiaP7TmnG2joxSsSqbmhsZWxo7zvqJKz8HC4m5K1XmJKrcVtH",
  "key29": "2jePqDHme97LTbSiNSS7XNCoApTERMYvxsd5apGYR3zG5oHX1pZDCn2dyzmqZYGWpx5q115YJKiGNYraDSomghmu",
  "key30": "3k52VE8hX9QiBBwW8fxioUJWQwnabnsVJpvqmhzcCid4Tx9tm5jGXPpyfHSMs3YbT246paHdDcL5HgxaRHtF54LX",
  "key31": "5BaZhWzqw1icEFTh1aKTFq32xxET8x3VAUJUTMEh7xipbuhp1N4ZueDCmf8Qd5wcNVAMubLd5i7rST2Pakp8Vmt3",
  "key32": "4Xm1dTCRfeZBNU7t4g4LYH4DHLrnsS3qyLSUwxzqjRan4oYNaWhnM3vxHasabyChs61zQgfacpq7Jwx3iforvnsj",
  "key33": "5jVGiZj4xvRL2ogZ8NN33QnA8otBEmdoZ3WwSeJ8hyYRY7t5hhTAz7m6ZJzUUhjx1AaMmLv9bn6LpFw8pFkGkcEq",
  "key34": "4hQQQNbfHfJD92rXTpQmaLdy9LE5tLMybdvU7eSyzoUUegBfsFyzaMbHApqBFJtLUU6eUUY7HvEXSdUnmTBDNmqc",
  "key35": "D4NcQSRAdLFh9JXfmSMX9ZeCJkH8uc7nWw8YP9KwbBm5qi4AsNQ3B2vqZTstmxvMcPRWnMNVduUFjdVTPkUMHmu",
  "key36": "4oK5m2Y3o8CcxD5NpRqesYkaVxWTSo8CB66dYofxyCbUuWkxNE4FnEM3jBXxxtAUwMW3o2juzNKPYELXRW6e8NW5",
  "key37": "4fxSDsa4c1VCEdqQzMrDEemwLAUHMLUUuFwquYjBGeQwJ84XWsJ1ZcD98eTPXdnNT4UBXdoFT5Pam1m6fsQ7vT2G",
  "key38": "3bQTgJd4GK5aAJXZ7qRJQsUsqhc86U6uk2P4wV9ep4gQZJGSiXT1wwitbZ5w9ZZAAWT1avBRbtoqF81nnebjvncP",
  "key39": "25WS9BA1sNkz5J7bkUFakghicsva5zzMXMLdLaMgq2zhCqhcKsZD1H3vZ1axiGf61X3RAFMw7E38TX2LsUgWE5WJ",
  "key40": "3hcsGRFSCkN2F1hsejmNt3zc1FBqaswZagFEP5HD6BpHiJ9q9wMRZ6DkwV72j1EJGF8bDnu9aGHLgqstZiq5kePd"
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
