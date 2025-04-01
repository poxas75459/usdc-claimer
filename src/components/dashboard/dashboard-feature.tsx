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
    "3zwohQ9eruoLxuwMMiNCEYUGwDhCCMrStEQmMSejnk5rRVtmpQXJzDRNRWb96N57yfxd786TDVZT42aBC3QcnuZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQpQT8e1YTtcbWgViVPU1iV3bPyyzsyiz3Evbzt7BYQiWkzP9fvU862QSr1okJJR8YfdqoBFRr7MoRKSDaFwdui",
  "key1": "4kRGaRaYU2H6u3JfZeWiEjz6Sbd6zbdiwePwdHuKcTmvC8KALBrZThmgWy9pnntRFgKtakJXhTU3QXiNV9reJZU9",
  "key2": "43RYJjWfcDNADc87Em9YHMijZLdLkLLaCdPomPP95HX55sZJvMZQNvYRozLq9QdYfMyWNpr5WKfdGKn5eXNYudoW",
  "key3": "4eTzZCKMvspWSJb5JVwmguYXBgKe6ZNPohWDAJedh33YeCwCxkip6NoLWqGTWobgCYL5BWDmM1yuKSfyWWr9Vgxi",
  "key4": "5xACGwHDYg2tg715XDGHKmvgCuu3BKvbeSSE7U428chmYxVD5ivfLqtEPxqHzARKZSzjyjAF9RWn646Eh9v5gTum",
  "key5": "1UEYFJfuSMCW8En52bPp7HzxDh2rbtrCk8TVZ3MB9jbNP6M9PSUCUrPNSC58vdUL8BaqNCJBs9fcqrEK2rrWKpK",
  "key6": "6192Fyr4RaQ2afMoTrD1AX7K7vBXWT2ffwM69Eeda5tfuPnCf3p2BR3ACHBU72GPgNHfcQJZokiDr5mAPGqm6qKj",
  "key7": "5679Quh2YxAqyaoorSLNGnAngtZq3TiLJvntp3j4WcWseG7BiNce83GWyLpSKLBXk5RdERZ9E8H2C9inFGmjzXmt",
  "key8": "63GvZ3hmo4v9c8DW12uJMAnGyh2cvUpFWoJXyTH7Tkzeq9aWQJR2nbjJf55wgmKP7pdTdMqWCeW3YGVZYAs1HDW8",
  "key9": "4fwjeScrFbwQZfM2QGKqehpycAycArpXbfD928oKVdWvoSeMYwnVaBUHhzfGrtt13C2SEtP2PeCpUY6WKDuMyZmX",
  "key10": "4WSe9gFMDEf3tWWiNnFsXgb7gYZSvro8NGAAxHFmsxYdi5oRGE2VRahE3nwEQwuftwRYbwUU4nhB6cqYH9GpfZrN",
  "key11": "4dtGSksWhaWu5TCnavJ5mvAujiWTBMuNbVtf7mfE9CHaSRTYEsf25dnLinZxbYDTdPpCqPNBsaFqVVQfWsKuJkFL",
  "key12": "TVtgvh6XREPgvmFpMRfTJjFQiwtAxD5XbGaphANxt8RKf9jPxmuh6CrHWv7CeQGgu3xS8iePCdruhg32N1DUGKs",
  "key13": "2j7YAVEuH1gJpFKpukJeF84sZHWT3YLD8LYkVRoUHEFWGW2Uf4KgjVjST8GAwSihjfuvDHZZdnjCgU7qZKoqrR3F",
  "key14": "5qq4MPri8VhDZPC4D7Cx1ZnUCBXgeWWh4F85hqDqHt8M4RkyKsdu3YPsCUXZQsTw1NMBVxNMN63cZyndCA4aaqw7",
  "key15": "6sNU4vvsv31EUyDYudDJythaGPTqHwUBuoU7SSE8MqmEBhmLERm65uCannYvUhBdPuHq2SAT3cboFzA48UL6YoZ",
  "key16": "4VfHzQkxucg83697KcvPAFaX3SSez8MFLe4BQqFRBcYbaJ2p71ortFRDzs5YTytZdcc1hUYkcWaJavykf1oQe8jB",
  "key17": "EaKEXyLsPackeC3yiVWhbYsNfgyaL9gAsEsjwNZUMFUeLFY6f8NfgWgePwv2TCUB2BTdu8ypBFtmKX1wpjqmQSe",
  "key18": "26eCDyh61zVbfYwRikyXERw1zvKfxuyzzCuGJwxGmZmoWBr44KubHoNEgxVTgahxbVigQ18VYisKyLb6XTRq9Fdg",
  "key19": "284z8cKE5jENhsdHEsukoVzsducXf99V2zEzc6TdRFJguC9DDzFmJb7NaP1uxBg6jQtgMqfwh7o9RR94DXTCmdx5",
  "key20": "3QH5UHHZ1kb65X8TpAoDTrWWrNDFi95tWGnps2ENNQEBWxhUsuHJbRnjg4DecNwL6o3WQrC7W5MiQgkw21PwhkEk",
  "key21": "2zZi7xJwyxCQgFksC15Yi95P2ediRuyTMrrppoKJBQVsgL7zwJHKxZLvPMGSXAWKejtREaEHDms5Q46gKKZzzkdy",
  "key22": "3Pqt7YM92oVrxtaHS9T3d3sDAgZLZJkZUcgTAxnsanEW5iyeRdYSbVvuTFNqL2pLfjeNkVbznqh3EjVXYAfkBZ8e",
  "key23": "4jXyukRJrDR2251tJ3NrkeHCjQF8T6oib9EuVYGMeWwkGt8MUCYPPXZRnMw7RcU5FrUocGEvydT7UdeEMCCQtgU",
  "key24": "2VuNdb7GcdEUS3XJ2R9A6FyhNyqn7PVbFvAHjRDo7CuYQSKNckPz1pKSgWm7KTT2VNkHwTRbsFwZmbZRALFjb8Sj",
  "key25": "5aVhcybnXryyJLEN3s2cUK8c6FfE2gEajY2dwwqkQaykH6MMr4o5ugGDuTBHLnF9ELVFJsBQmDnaWVwifMeJ8L6Z",
  "key26": "5RHR9hRP8TS1ZELPHeH9mfUC3TnVA8kLgM7z9Q67kLpJnWCTWfHGpxD6b25dw4aT1T4jXeDNf8wkzBWRzwozJ5ig",
  "key27": "8RLHGqMZfss4ww6vGH3BEjj2bHMTxjmvSyrSLMrvibabE3rSMw4DCDQ3bQ97YnVjvkvQxr2dGqueWKtDPxSocS7",
  "key28": "5m52rQpUFqx6mXKizpdBQ17yqp7ko9XYdT4DwWKu8x96Dp9HHddTLHxj2rF1F6vwjeuUS3jba9iJgS1nZDTp7BQy",
  "key29": "5AqPtvHSwSBLkPbBTLdbz2K3zanQnuwZrb3AcXtR7mPdtWCa25gx2mRsmdWjf7jmEG5ykBTRwtjyb5DopRRJXXb3",
  "key30": "5JgUgimsthTUK3KEredw9AtAmdtaQifZUc145MBRScaHzPrw7ivFqiC2FukyoxTkt9fM1RoZa7zQLvfLNHVPWqhz",
  "key31": "bcQMTXwRQ7mrKrbT8CpD2QNbuH7oYHz9b9qVRWyYhFJpyRH9p2habuy7WChkkMkaQNsp1q6TgmKDXLuGYqNdCFi",
  "key32": "55XSxtYhgVpYmsTAHy4dm78iVdubNarPc5mioEKspQJVY9FUneQaWkmAsL3rReMFuaVM1i9zhvtDmKqysaiuyZ8P"
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
