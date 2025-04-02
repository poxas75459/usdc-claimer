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
    "4DZFZU8WLscZ9TYuJuG8yY96JgcAG7yAsP5xssnt8NUNSBur4dYMHjr7aJLYxKXxJWNgu4TryGKK76rGfw7jD4Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hM5rtKhTX9CCiFatkP5PypK1tC68FUkLReoNKLRscyEErG7X5b3GqvYeShez3wk22stmSf1sDawKRK3wVu9ANRy",
  "key1": "5nxYrwpB1k4TLBWFrWeHCywBNrKKaqyR5abzA8i8yebtqawGgT2ReTZoMzhj94CaQjw7rsR7VW4cw3n2CgEGs3tJ",
  "key2": "3vBMjHA5Dzu1kjduTtNrwer1EMk3pJoqQjyvNQNcExkSLps1K2XpieSu3HNtzdmAEg9oGNfkjorgukD5PBfVgWxW",
  "key3": "t63yQrn2vHYLpXHhYMmCfU4AUpZomGCPhWZtuaAkwHFE3kD4NF9emWSMBmcFEDQ7Ynqk4Jk9172JPDFAidPgTRp",
  "key4": "3tMKb9ssKrdn5K4k4LSU9w95cXjSk7CwPFBcfoDZdyzy1MxZLziJvQTq7WqgXPDuzcNGYL9h7yUfDvzAW6zfCznV",
  "key5": "4SwvkoQ14cY9t2TXe8gxZw8xnSTHoMbrMgTGDf8Gyzv4HtD1ktP4HrKUeu7GCiXu7Yau5DpNnK1KjtLHqoqe9rW3",
  "key6": "2ugpa7eHDfmgprsTVb11rrhkTLVPMPw8yBGU1rptZNoYtoBLsmgmbsANqJA1u9jGeZWoz1BQF1GEHCtwYuzWroPd",
  "key7": "3pru8waPMMhbVUyy88pdPbfrPYNzzf4BuBLDwY3jxqbmDuHMfV8Ldkff8MBzg2WChR99xChH7pAU8xGzvRcCuHvk",
  "key8": "4cbCWJpPngNFcRbG27DNJA6ERzWKbZmcfajTDYbhHirJ6WRSAgM3mP2noF7CAtDfaSD94RrV9GZ6hv2BapkVXiL8",
  "key9": "1ZPn7cz3C2qREMrbv8DhRJSvzi9xdCM9B4AkvSdXXyfEMJeaRtT5cVYuynLG56xYY1wc9sgfu9Vvd1kiMyyYa6q",
  "key10": "2Wt2PGNTaGaAi1eoNQJx84ihHvL7B7xxE635QSwX9jZf1dpZJasStt3N9bqnL6RCSXaNHXhqWpNie7YwUSmm7aue",
  "key11": "5gU8nrvvqpgkmHGfwW1BMkMVdF3kHhztnd3o8jcQhrcVDEHnhgJztS5zx2Jd5WARuEBDXbMZhcmAsYc8pThxm63W",
  "key12": "3RLUxRKMx5gqW4jkvakatW5zU5yu9rEbFVKhrALoEnDgUXPjRPFkySowPgCtqRitEK5ZpDosZyuQFgR2sffCodyQ",
  "key13": "3ff2wpdTCFXHvHicqDPKgkcwVPq6hQw92ddMwXjSyZcPzrEQxnC52hc2vUX4bhgxNvyS4jn7MUJTKRZk254Zo7g5",
  "key14": "3SbwcQQzAUWkd56twkE52YNgowMtQ8h4P7wiowzEn61mBkuMBix3yBvvNyDGVL4k46jvAbG6CTz2gnjhkz4E5YSf",
  "key15": "W2vjnRnQY4Aesfom4tnxYvJQz4pom9rZBqs2r8E3kBS3MGKNxPkTMyh8d3oChqt1nd9HoDNDr1QkfQeaVtMDYwy",
  "key16": "3EwNqAWBvQ9tidsUy8BTQwT62h3KBZykxW7k6Fv2B6MXNFUHiMD3SnEi5WwHnQn3Fn6PYe6pKdCCvCaHAkdYEADx",
  "key17": "64SX3ZnABoCZALYuFZkrZNFttM6LCpiMkvY4RwPbC4LWZJKVms6uWubcEwoogaYYwma1DSQ6wt9A9rzfVkBAnNYb",
  "key18": "MzChi7eHhrKwC6H884vsw57Qrsn2AorUGdQbi3ZcBA1bmYNFC2HwJwpyTG6Gh3JKmL4T88EWstdKQAdW4LxkxLn",
  "key19": "BRiixueLaiJKcYgitYSqhfHiHad59mcpJL6tJUDiPGmkt9ytnoLAEXABQw4FMRWkp1XVyPrdMknWAQBzBNTr7hY",
  "key20": "3QN7f4hPHmkmn9GBQKhmXY57KoqwbWWNoNHLq7xEehtHcv4MdJnwLirnqDe8pDT1oSVT371HWjMgPV2ybXVbXLGT",
  "key21": "5spZPWM9ZX5YRaYvSn5kxbANAdsJe438JfwJ9iMirUGhdUoCTQ7iC4v8udpKPJJTn3pwkojPoLH5dhAivQmog19a",
  "key22": "5onAuv6m7tARi2JRrHFvPYrGYFWVayyo2ATme7NKtHpBHemci5UKA3bWHCZ4grE9MZjbxNNENz6S5anxVWAQ9bT9",
  "key23": "Jok7NVTxqCeLJyzEWDaYnChVByPwoEV7uBFHM1dkxgPu7cVj2tQZVwma7kGSwUiu5VUzKE5zjwXTBi5z1Vuq7ND",
  "key24": "4ueNi4V2eqCYQye6HhdzGCFU5Rt55gFPBVy1b2BtMiRZUTwBd7PfaeKLLj2PWTBVHSFbAMoC4KXZn2dn6dnL1Vtp",
  "key25": "RZ6PJtubaukHHcF4ZizdUZQ5QsNKisBM7CZYrVbC1oBorn85nMtfKzekh728yjDZzNbdf1sWi57EA1qULnCjvZH",
  "key26": "2orV9Lbgeho2sQg8d2XUZWDhcCE5fkx2XWhZNZYYgjrPxVueqaoKFvW2ZyezyhGXnzZZ8b212ekK4ujDFUq3M4GB",
  "key27": "3vCE93LP4RXRUZLfehxtKvxA1WxVsfH7Px5hVmpV4hcucq8HWP2gVSsmbrERsTpt7Ki5uuXKnwB7SvmoBkSWjbpo",
  "key28": "2ANVZbjemcSu378Peu2WUeb9re7BALxGi6GPcd1woierQL3PtpygUG3ZQhQV3dSQ8TTtsqXSKa5Fts1KkKKQhmpo",
  "key29": "65LfoQdS8evQvLZ9mHyT2f7JydfbaD85kh5HPEcqMoF3DZ6V1MZK8T9mD3r1rrKut8qpFUo6aQUF4RhPS6rFBebJ",
  "key30": "5NYcH6hT9FRDcaRBCQSDqZ7Fw4Kk8hmshKHuHctLNSeeEiBr76hQdXA7HjkoXsaYYDYPibo2BH65roV3mmbeUFhW",
  "key31": "2sZux8e3duvk9w3dBy4hc7f5TrnxYkhzVG1mbrQYW99UzqNgisfjNMzaNjR48vSvZurciy5QfzrXYNJh19X26kTV",
  "key32": "4dS914Nmh5edYr7KDdZhN3Q6GuRvNaLXXzK1UEFRrW4cw8bg4ZLvUB7FNPA6NQ2kMEr6JjEGcRWoYNCCEpYDfJiQ",
  "key33": "2oD7qJcJu9Jjbu4Y2EA5g4GnRRctAXtWBS6NYgKbGuRMzgtD7pjTUKvTm8msTQM8xSSbcT7GVFCXCDYQSG1DTSmT",
  "key34": "A41tiDiaDVBHNhYtk6Q5HDgL3PbJBMg1RDrvMcX3r8gTnNRVi1ipsCVLFzACoPFzBtfzfEWCu29WURcRLAcTRVs",
  "key35": "5BoX2ySpAmnL3kPfkKKtH5JqQLq3tfhzYqifbDWe1dq6iNSn9ecQe2YCaShRUrGqtnqXTVkWLU42g3wzxwoLyTCA",
  "key36": "4urWqzkBgJ38QhUk5BoVfh8PKfccR4N5oTBBpBaK92H1kcvFaFBwo7CMAGA4UQ5Fz2wQ1wq6gg2GdfSofddnrCx9",
  "key37": "3wik49FnM9oaSX6TYk7ZgPdT8EbJXVPa1QJS9i7j4Z9mkXuQpcngGhWWhv6AnrEf8qHYojphhCm8U1cTm5uEEasC",
  "key38": "4GcLLpzLQCJkKXSqihcy7EW69uLVyxY9xRwpq6MkmuenXNW9AtWnMj9iG65D8ppSCuGPRnKrwWpRyB3ojHYfzHnV"
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
