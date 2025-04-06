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
    "5vkFJT3HuFgpRvYFEGqHumEYakrRWLE3vryJu7aagJeWKXwLFnwYZATkzdAU8y2wTHqkvdds1SXK29brvaY6p35N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apSVKuBuVptWxYp3F3Hs6SFWEUAJFUganPkimKXdZ2UzKBSz9sgEbgcF4i1s4NUJfESivNnfS9qZm7jEmLG23hc",
  "key1": "329nb9WKFsc7LSx7epLG364MvfPnmM4FKnT3csc29oSiw5TbE5eahJKN6st57XVeGWptvrw69yT8oXnQcEonr7cc",
  "key2": "322Xw3xx6HLxewceRFTWnnwfN1rum1sTKkWf4GV5UUjVQf29bM4TcZVsyoKQ4WaiaJomFTub644tnCDaBm4Rt58i",
  "key3": "4eeqYoN7hq1YptfZUfND2YqcqUDRPPmY3PDzd3fcB5BTzkbjc9dvK7d3mDtHxLgBZ3fccE9RWkG4E9K4grXQ9Riz",
  "key4": "Nvnen1wcQ1NDawRJce9XszvyY7pCmkLQatHyRHdASjWAzadb28UeRL3t78fmPYqX7Qovaw68frmDcvt2hxp4aTj",
  "key5": "fPCPCUUu9Nt3ac7kptWuExYMpc54zKs8uZJu4hHmgBTShLTxvdYwGMJz2MfFJif7RgqmavSP3ssXC3DdvbCRqMY",
  "key6": "c6JhdW1Dk6tCMNTCJRbnZ8Zf52F9F41QRxKUyADQKrCC4BWWgu3q6EbE31S3SiQnMLhkmHGJ5jtHw4qaDg696bP",
  "key7": "2AyzPHt3SDGufGmZVBvqAHEvXEPibnZ3VvwXb3CRe4hiY4xpWSkhwCkvhJ2XgjijJhKvwyMQKN9XJV6KJj8z7dgu",
  "key8": "ZsDrfAzj1b7s8utMvUbgETv9Y1tHgNmnkv2Wp6biaJsEuJHj9nLsBNvoBYkRpEBfQrePX6DCfbqDXsPq6U1Ri3q",
  "key9": "57uA8ZCknhMP3avuBmQorEQd2YVfGJNcv61qgShX2Gev1masFVqB5BcFAQaZKBDNMvXMA1bb4fBmLZBBjrV6Xp7u",
  "key10": "5jRufeNi2qo1bisqcqGMA3JHbWTzf1chFQ4tDTD1CCWfiRXQZwTzC9tzjnpxuegF1YxM8L7HRSuuHwFu63NSbrc7",
  "key11": "Kfkih6tm7LHsBUNVDkRFjsKvJjFfm2Uf26CkrA7xG5N8JHK6mshAahP4thorFxw4HWBhDMre2pa7G8VYUqFHmfT",
  "key12": "3osx19ZKyB3MN4Lrj5zY1HHLHBMAmD6pqU21xVEiaGr7dRztVm9JaYpb3TzCpYdiNtfDXvkGqSj4xzkDcnVHJezL",
  "key13": "iq8t37JgMUGKSDxCPMm81n6vayJk1R7yG9nZbzxqzGN2MN9SJe1B21UnXFrn5kc8khfGNgSSCyckQKDjwTGsMPA",
  "key14": "2LpC7BVTxZYBM49jbwwCUL5aStyker59MrHLJ6dkBaxKabvQoyf6fmhMX22YZMgtiw4MVW1QUdQ5jLsn7AcNNjX6",
  "key15": "3eZj9ZhqgJzs2aao1kEhpKVZT565yzjwox2xzFKMs7rDtMLNSetrV3gb5GqYTqXN6nUjQ5vPm3W7H8V6BoyhT9BX",
  "key16": "2sJYNkY5Ss4HYnKktfU27ofA6qExHhcP4kPD85fUvRs9ktjbJGwxuU59115TrGDmkNFNBoCnMPyvEVZNjsjCLEnm",
  "key17": "5263Pa73wZjg8Gsm72XgPPBHLc94hSFr1zF2hFynPB5yqK8yC92YpCRpPc3FBtoA61qRhiV6poGGeJKG569q8K4e",
  "key18": "5kQg6XfFhu3mJ83CWhCT1KD26QTHUaWGXrppGcT8T9ukQsiKRY5hVZgenxjQNJukwMj51F8KXTxKYESxuVXcBoMH",
  "key19": "yX9Fi7VhjPtFQptbcp5rg5HYesTDj7LV9o9Pha5hXa116FbARMn43goMSU7hkmHk1xaYGpv8q7UY13q9y9SAVH8",
  "key20": "2wanscyVvEn1yGJnTnRJf2E5ETPTYDbTrnDATGc3hmHYjbtxAs8GmJgZXLuJYrVdkxgNzVDYhy6kSaG6ehSaLuP4",
  "key21": "5CwBzWLcPchbvatBLwMWVNjwfEzxobtYwqFkjNRVNJQfr9xP5NoVJKJkXYXcUAMBxvgqHn4ocDgDscdM8EveBKRo",
  "key22": "35RN9pMjdRozSS9ovtcSBKfFtnhXtbnAuBrdJyebkzGJ3ucsZtSVsUk6rGpHZJetcQWEtLN2gVf5pFpMGXvktfDg",
  "key23": "4j2d2JTbteC6qHtYgopKXAva1g9h8jKkdZHF4ajSPkVzKEAt5n5X73WT7RcisMrJkkCbfEm7UBNFknDABVrUJK2N",
  "key24": "5jhhVyKEUmFRNVawdHmffpoRfWVGsy6CsTEP9NhfyUUnpAcPM86p1ia1am3fDWPpRvAEbkFcSAxcrU9Wk4eqcK6R",
  "key25": "2PheWZLXV9GAPxNHwjgoAAGnNw9Uycmi2FFiwr2HQnkS3BwfjsTittemqDADgsTADQgDyG4DQW9PjHoKbBk4UBa7",
  "key26": "opd4AqPYxBGA8qAs42wknBs5qxgV8nquzHu15secvukJ1vuvWAg9SsARraCNymR4HHkz9YfRw4EXLW3mmo8F657",
  "key27": "3EHpuiQzmp92d8CEaxeRQy1685vGbLSsFJjb4vzStLB5Vv3wpMaCoVsLYk6WvdMZTjfWf2qqYn7Dass2MRcf3irN",
  "key28": "53sjFU4G3c4f9unGWERHnwBocHa7i3kqdvURYKopVKDy2eCwSoaXHt1mNwPMjup5ny3SNosG6fCLchBUU5TXUGuL",
  "key29": "2BFkgvQqvkBJrCz6PEpeT1ab3L9KnwPhuzWwu1dxhLmGUavrVKU5HZodRQRKF39mkeJC1TZD9k3rnDfgZ9kREzFy",
  "key30": "4LKsCozJ5eai3DXSmL3Wac51dNyhtu7KThytSUUdvMvYoijtVotqeGRKmQgXQDMmaTjibNug7YiT4NuSPZj9JZi4",
  "key31": "3hfY4m519hnZw4R6yYRqjhDF4cm9qnCymDkF3pQuoCWPbGtE2eUtbdh5Q82PGRBKP3K8BhaAWE4MYBXHzTUV7cbX",
  "key32": "FuvPoZ92MA8b1xNnE86jjiPKyojXemEDX72FYU38WPXTMCrc9sroZquGPucnYtgfsiTCA7rbSqhg7Wf7DawLf4j",
  "key33": "G8Z6PPd18DwyZeygQF4FSxXcMywTQR45oB57wVtPk9uLdZGRbPYHEG6Xbgz9pdP4AuxyLWJXqUa7nzZWyRV8kig",
  "key34": "2pEnnW2aGVhSVcJVBXZ46pPeqsRTBoYFY2huthdHx4jBYQPHHRktsoT6eZKWN9v2ozEvvcaWU3b7edNKFJQWAjx6",
  "key35": "X7LbRHoLFrNhgAqT1YYJhviHUZ9hp6zPHZmGbMnJB2XbF63GFRv81rB66QSp9BbZAxGwNZmMPKM646NKumHVXL1"
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
