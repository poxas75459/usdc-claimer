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
    "3RhZKGvisSHsu5po4gRMuAhJW5eBXz1WMrFriog916QmSj5KHxypPfsvvFH6XkHbHSxt86nThAECdTLWdLk95Ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYt1cDLikPaKjNNbMY3D1tx5z5mkVa5Ka9Lx97SVKkyk96ksHRjTVKsgD9bGhUFQbJqoChHkeFLtjsyJPWdSMgD",
  "key1": "3BQXUH5jQCyQdtC6qnQdD8Uvgpcaw8bfGpCG4q1z9kTPfkXBa9ro9xv1fMXZSZ2PUr3WSkuBptr5J3Ei6Qx6Y4Gj",
  "key2": "GgEBBETCkATVHdh2PuKc5CiFbqvxtwLBu6v64xNJivNVT8383FKB5Z88RRJG2LDqncDaeprY6zWGGu46YFezSMn",
  "key3": "3Na3dniP88MUELVR1UxHNib6Zd4YYydt4EbnVay8hi5XD3H1A98rCUjGjKz6s83cbJoYBC1Qzy7L8KA7jsj1wwwn",
  "key4": "2HcPFyHSH6z2q8iFv5JGyNkmd3G5picdwD8Qiqhud21a48ZsXrohbwkuCrQ59HD6VJHKNnqrYVv9QH2PjhCXiMmb",
  "key5": "45xVcfCTrrTZsQgtNtn4XbKxhmWYXDn8TwVFRxAfnGB8TJW7Srv9BVEQyb1jB232ZqyyDEy19HcDnsvuCYuQn44g",
  "key6": "5hdaGYCVfY23PoFpgXDruDBEAGMknTMWXMqjYfzCLnwwpszemjdJedbGbagUL7VQyM8zfWU8batu3tRaw6fQjWyM",
  "key7": "4oCtN5f2dzv79YpkgyB6T55rDNE6jCGARJS8M3744EfwWu82YzMFyXgYJzV6eWJ1theW7w1PqyRZHi5jNcdKDg37",
  "key8": "5BPLBjBqooC7q3FPXLUPCKcT9s1x9f9vZtFRNd5kdfx1rcz19HdrYay13Gz11SSHgLoyB6NWJk3QAn68cSj79EBR",
  "key9": "3KSRBqPDMTcpDJzHC1gcqD64orjw4J3aJySsKXj9W3nTfKg7T45P2ErWKTvAkdXCtJht4UhRwBPpgxPrKcHy3Rdm",
  "key10": "5iF4kPNugeujMmfyjxYcEBo7cmRhRaAzX3hhb4cVC6hnhqjoAo239mTZPh2jQn9RLZ8MPW6USqF5oUrveLyyKJTB",
  "key11": "3bGikvdvwAZk5geraHCyN1zbxak4NFCQLEYKom3dRjVCH2hAq6nvvppTcthp1wbJ8G2r3ojT8tYAixF5YiA7aRxB",
  "key12": "4ZjxpkD8wR5pRY9beKKTQT2LK5u6hCojgCWqpUrJxwko5dbJTvyvdEgG3Buz2kqR2g4a7GuxJBzSszMCfxe9NTUy",
  "key13": "4ht52DVLi2pvn9HPjfcjGDe5KnDvUJpQ374k1k6S52achkJasRphDUz8AL7kGSD82u4468HggiAv9bqPJTwAkkBE",
  "key14": "26afawJozG3JNKBEwLjcxUJsBYZRMAsqFcRVGEyLuXAK3PRUiV9yk1EG2mJTRbzTEpQHoC3MeYMCA1aZKY6mmAFk",
  "key15": "5SYbBGVVM1yrC2v38rWuERPDRe91YTo9URKS3GS4KXBGrnicr2UsSDYrGSZtQNKXwiWbwueJt2SBqreTeEvEGAhE",
  "key16": "N4d4kYD1HbBshNui88yDnr623PBEWTXaqpPXz7fB68oFSg3oaAD7hjQhmS5TRNRm2LQwLPegw4BJx9DpVbU1t6j",
  "key17": "2iiESEcshW59fFUhyntj51CaUaZboRFBKDn84uiCECkWLJozxK3vZKNhZVNQVwE8TGzGxVvoSbHqmrkyCKATDYUg",
  "key18": "42x81DddmjmSWZzsTp9nLSHfGfWQqn293kEhtXm5EYcJqUf7kwxyhcSFsFeHSdyJ8X7MDNxqw5xt8879fFpWSf9d",
  "key19": "5JwYDJBT5qhVQAwjsDJaZQVkQy7zmoou8h1myJuA6eCfUKEtkGCwLZy6m65vPtsWnfGWLiUs72jcKKqK1CsP5Zii",
  "key20": "3koEpropFmJexPQHK7iq6m7otjWVLNUAHohnTF25YfemiCn2SRso4JFbthRDRgkU3cVufBhV2Jmx7NRpwX9SnRit",
  "key21": "5VVf6mw19CHe4vhe1mwXFkrzcnEFqBWQwrfnhP6EK5aC4aZvaYy2twsoHUHSSwvYKeYoHuPweziP2FJdgvwN9Y2M",
  "key22": "2idnndoUN9X6H9dE9KKX53fa9toNZNMSAk7NtDSRRjATsi8Zkdc8XCh8EyNhb6b46iNaKNVDS8H7i5R3tiBtY2Xr",
  "key23": "BciHvSWWzsRuTTvvPbauzruNwHgJpGoZz5i3Z7xhdan2rfr3sqhF8pzPAz89xX5WRkVtU5oatCcQV42Ec9iH9h4",
  "key24": "4Mrz2j11HpQik6jVhQpdDTbBpxV6g2VK9U5CjnuZ2rQNVj8zPpv5vgkjJdLrTZYEXGiEoVjMA7S3j4EwXXEc8Ha4",
  "key25": "nFGnqxV2thpKeRhp9CpPm2MM8PkG9BaG3JrihgKq1AZnr6RVB357egFcUepzxzamNb3Nhwy7qStNGQFL2g54mzZ",
  "key26": "hfcFVvczKm2YuDdHTafQBBVnsDTDLYZEeToZwjtMwM7jzitV2N5465fg7UtPBwZqaFDfFiThX1mw57MTqma1e2a",
  "key27": "2PgsjoCUMH81PU3HPYm93q4CEzUB8tSuErXxPpsgbnrwfuGKRyCDH5gTDCUrc8drcT3GShkje39zLHvNCFSRsWDg",
  "key28": "37gd7d2w42924HMxr4RPFFtwyKeFibkybCnv2oqpr25rTHUQLT33oDZSqVjvScZ1dvjyS5f68YPCKwqxZQgMVcwL",
  "key29": "5MJtXJudjrkdsdp2RTXgYmecPDMsSStiscAo8eR1aShHU8QhDKALvTW5i8hbgtYkQZhU4oD183jj6fv8adzAvJFp",
  "key30": "odBQwRfwV3VJP6CzUnsp1Lo7dr6dwQa6DB777iGq7rnwricQETrtqNwhh9FyTvzwj7mmPomUFhP54qzVa6jibXW",
  "key31": "44TxZe9EAafUSbcBTdb7qihpJrybjpdQ8Zht2vtop5uuGm756au1qxVtaifi8HZowVb6YT9zT9LcWdiCBrSfCDuN",
  "key32": "2bbjkNDon5K2DEmXmoQUHMdzSw6K2M5aPXBzm4zHTFJCbefn1NrRV3b7KHLhLbeUVCMR87rG71hd4njE6zfDsavK",
  "key33": "5b4rwHabkLuWeQ6ShM9QAZ3jNLZAeZyVpBDzkShuMjjGmLg6QKQUGvqDjiKF61RCTtNRsi9PQJqgjNPattKJGxAi",
  "key34": "m6XEGKm17Yu6jCepRYRuXHb1LKHkJUHaSf7y96fTuAW99svxVmPK8JUxAryUiDm41rLmVUYBKSGZg6gZvCpfu7z",
  "key35": "5vqjsyHDbfwHosRK8XfiN29RpATuE5Q2hGjtPM5HQBELRUPSQczsLXs3JSPqeAvRW5mZwYZEo8wVSNJfJz6BS1mh",
  "key36": "3wwgJ7uE6UqBDTFxjTpoQm5vd9Jr6Z9NLqpNSNvkuKcR5gHtwCWT5bAKCEjjdFqFDNKZn6SZa18w4jiU7We3n3w7",
  "key37": "2nC7uyX1zG3HdXyrhekKge9JJmALNHNSvTAA7kKkSXSkZ3vX4oFvYZ4Fyw69Fgm98tkf7EYKYVAkc5hua3ygNA9B",
  "key38": "4KpqiUjpMD2t1kRuj4tmYLRp1PvdgNHmhTzxDcjS7o2bba7L1UiDEvfYMERuG5gxaiNHXn6ddLcXKmPZcAZj57aR",
  "key39": "39P98rfTJ26JTQEHeHmpsXfwzMLB4j6or3fLfs3cbybLmnK6LhZ3yaonsJ6WuAB5fMPpH6muA56xzzctxqffKdVQ",
  "key40": "2CtkVyeZHfRekcWZJ7sJ6dPM6BM3DJhWKqNHeyJuGoQzL4EhtUdQs4cUE3xJiUSt5XSfumAaZrpDaexBeXteimSp"
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
