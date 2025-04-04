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
    "GpYjbauWtsV3TTmrsGs9swMECWPYMXfj9RGP4xHa2xnX7Pq55uo4Jvec8vGn6vt92rMzSuuPpN6B5p4H7gnGV7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dxnQZss3vzuVfgqqYB8FxLZkNNkDX7PnzvLA2V2F1mkjkY46oe49g3EstfGSHpiDxLwLNAFGeX8u5S2fD5vYj7L",
  "key1": "ywtV9p1Y6MdHpRTwkoYUjpoeABJxmP3w28YE3kwYt9DyeYcvNX2cZgNySkqKe71gz7US633tRp7ZjhpKhVufd64",
  "key2": "HBmDHR3RoPZnphm3hC4KRg3kWgsBBB2NPh2wkPspHjYbUSiKY8uwhuam86QCnPQw8LPXrJ9z4KB4o11FVhz8bnM",
  "key3": "5GEezEKAgq6K52fvNE1QRHjfbe4YGb1nygTmTXQUsz1qgG3xcZmKtb5RiVm77HTF3MMLLzUTj7WjmKYYj22oSsrW",
  "key4": "5dTd437FPbxVATjhNWSURAwmZMKwWfHVBBXcgASj71ErTs6VsgcGkU8MXtexSPiZRx6GnB51a56YcLUwrXbXrTbH",
  "key5": "2TsnNn8FQsbLN6zytkztZJu27VksNnGdREtwxS8Yo4Q5PaSA43BnFG6FMAQr9fHxF1urCQVXbP16KPC6L9XWz8t9",
  "key6": "5fchJb2gbXm7JZSC5kuPn17Kt6ppvB9ZukDX8phLVwXBdUYswcrLgNkgeZgGhDK7BDUHSZQjeEEutwHGQH4Qerkc",
  "key7": "WAiAJm9oRGeXfUkJuiLH3uTfGJfRDwyikstU6JBCwhWovaPTdgyPYp68EC2zKeD9Y5WpnEYtSY4eXokuKhkeHJh",
  "key8": "nkK6hmSWbs6ATPg97Mrkcvrg1k5kZdCNjm8kGomDXAPDMv9KGBAjLJd79hvpNUY9EDrFPckfeh5NTw5Dt5WrDU9",
  "key9": "3PknZMKeecHRgH3tuzbf3ffMWEmfQ6MxAp5kXanH2NbxMBxpM3DrK7Gut9fuVzqM2DEDFQGWHaHAjjbu9gpEQVdQ",
  "key10": "hre2s74BXgCAAFJ5bFQF3NbuLWKG67KXSoKmcBjt4pPCpBkugaE5PYGKZjLn5Ut7eFzYMJa14frryZsczMcYjTg",
  "key11": "2vcPncMEWS9BjmV4hpFb48bYTNR6Ebx4om8mKhqtvCXzPjGfSsUtvcTp2cWWYQje1Fganj3bB7nExVXGUx7hdrfv",
  "key12": "4aYf5YD1Pp142Jiv8q4XoPRJAhB62u4Pv6LFkc2oxfMTLs32uTro9XyVRiLM2777G7KGeoJwWZpC9F79FKTrVKYg",
  "key13": "48s6WLke5LhXbydy12sggJds8PQs2urL4LieWtsGsoszxqV7R5xJnoHe3BrHXBsEzbnsaQMbrqj4kpwyviPRJdTt",
  "key14": "64455yBMmfWGt1KCp3PaHVoUd6zey71PEuLU8phX6b7iXLLauKWat13XP8orcWDHNiVxqCK4ReVR24TUYWDgSD7u",
  "key15": "566A339P6LBRnw5m3oewLHUcRodZFqroCcYR554oAT5vssnNBd8aSodqYpSsYtERm1kKZXpqjHx2ped2wPLMRNgk",
  "key16": "4HfTTrsoj3vsurDxJ9TSZ4eU4TxN7JYDGj7WxtA92TJXcAarY4JWbjaybvFQDwM5ijeiS6o9sxgdTywpVco82fA8",
  "key17": "3vXhakYfXU8TJKdaa9jNE1yx3P17KoPJTi2fA1vgb7jq35HQN2gZuBqJdmEjsJVfif2aNNMthDRdbYCrpDYLobx7",
  "key18": "3WxLsj5KiKDpW6AKV42ppeyDqeDAoer43cA6FvJe8Ryu5S49mjb4FDU76sBFpjyaLUdCjxCMT53iJpdHWo28eYbs",
  "key19": "4YXnZQxdXtmju1xyu9JNnjdJnKuZgRBg4q72NuLpxQ14sDH2Hkqv1dFdMLPc1dFSZUWXNG9MGYE9dJGWaQLsTh3H",
  "key20": "2r12Y8TM95fmG35ii9RnM9VK1aUDuDFTogVXA7SDdAZbxdXUYf7jcnnT3eRsCRbvxBDAtnkoxjvvAurKWjFavW6B",
  "key21": "3u9RXCm556HMnajE9s8Zx6Sd6d5iot87cuHVmxmraEi9rNLbwbCxBxx4DtURV2noyWJrTnkzRKytSfD9Gk1WESTU",
  "key22": "2CquJ4dRqmiSw4Q6GKep4wQYPH3nDWainbg41JmnqPeUzya23R5fDpSPF2LSw2b4dmAx4kVWKkHhd5C1fYx1EZuX",
  "key23": "3UPM5jSWqiBoHa1K6PABPjvbrqD9FbQzJDpg3agaaZbzqDe8GJE2wNPfCjgyU55CQHkxVuxggQU8icN1pPZorLFv",
  "key24": "3SDRiCG3U8wgxktZkURpqGA2H4NGrGJGWtxYWWLxhyMpz4YCis48rpusAF5gcRcQjNXRfaRsp8iav8L7F2sop7mj",
  "key25": "QWNiNjJwAN85MwjfJ1sV4W343dx6tmtUzrJPzGXqfpAMSwdgnMvHrURY2At6c5NpAvbafJtGVxDMH2CzL6jJbEi",
  "key26": "2ZTGaJW6fcCQojYdmcp7ZEWXFwqat88fB2RSuKZTdek9BdQ2p4W6xWbKd1F9RCWRuDNnwTARXwqdHvRBxNkJS3RF",
  "key27": "4Y7U3jVJTXSMhsMP8L2NgvRSW5LkwCvoVxY5VwLyfCWEZWzXyS9odwjo9ER2tVEvaDNQhWtriAuGdmTeHrrCTfoo",
  "key28": "4KxYnYFobtq7Ko5iECNLwWrLqud7QMjQh8CNHp2j5xJeD3b3dpKrU6BYziUGzFBqyQPSBhUvaRcui4ntbKCzghtX",
  "key29": "T7p1sGyNjoBypgCpVQU1KprdinVhPHM7r1JAnMSqJSudPtD6cK6qgNj8UZv9MzqxL39Vr6BURgveZ4jNXBoUQC4",
  "key30": "61cnMVFBRqav5PsReuctgJVHCaDpbz98crY77R4fBuySg2kk4fJKtN2TDZUnPwCEvGNHQMRqjKf1GpoXvMXZaMSx",
  "key31": "ztAqZcDKSK9Wt5NEyYaZj5nLpqUiiyEK91macnGEJrTFUqg1qLNj9Ct2bjMLY4QM8NL6GQnR6KVYX1u3HGJWZb9",
  "key32": "3w9iGgwiVkWK1mewa4xD3MySaiod8SAvnjKVRRqAhVk6HUR1hHeiKB3saaXevGp5VX9V1TCCETqs1JcTCE2qJf1L",
  "key33": "3s7FE3N41xdGcWxj9EHTWDih7rBCaPvb7tua3Y8GMQorHT7vxMZEtXWZyGYsCRJh1gF8LW9SKf6teRBnzhiY71a4",
  "key34": "54LqrNFrdexG4THkamDgBQnDiCas6YdYoqraETSjmWkLLC6ANU4wmS5Z2WU6ghL7hEHLDuzxUoXcp573ho7KAEh6"
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
