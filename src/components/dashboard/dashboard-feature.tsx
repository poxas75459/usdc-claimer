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
    "2UFjbiytw6hGqan9p4mjgp22TWDZEfEvRZLxU7G4mewNhmce8xR2C18suhoyC79QV9tu4kvB7zCZCCF15uzuf4av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UAuoZbZTf64AXjKfdJDgSS95tF1YXGMJbv6g2yvjBm13mkxy4ej6FZhJEagMn295JggQm2m2CeQdpBduRU5SABC",
  "key1": "4PQJqmKrko4X8qQzjUKXgqejBCXKJ7EyB8tmGoUUT4E1Dufgm1HTmm7mrzCJYVmgYRPMCuVcovY2u1G9efDnV31f",
  "key2": "41ZSw2Aup7Yc4LNyc39sKPxAVhfa8JeofrDCadqw53Xm73CFmadiFX6wB9ff3eQF6Pkqr7ckm4tncHuZVkYGLCUf",
  "key3": "3agup7W5xMrmAMws2du4QYDpBNYDCnWTTkp4edzKxN5JhxNxbSB4FFbAi9LLaD8ECHFkpZ64tRn4nLEoAE4z73J8",
  "key4": "3HWzFCC5gh32nAgkU6rNvf4YA45G41GEbvFC7xF4y12mVyZDcuxbGWDREFu2nFpUUPEZCvP59WZEC4i4vszyLgyv",
  "key5": "3LAQtNuJZ8HXLLqpRpZXjGqwiMoVSorLFpgYGou9p86rTfrHtr24EAkUvykdRsuQsBr3oWjisvGwKDewD1xZ3eZz",
  "key6": "4PfFUdJVJwP8BrAPwWbkx8AjZQXKBcwpb6qKCjaxnu2xY1zaciMi7pHnSHRAg5PtzDYwc8PugQctGEhPq2xe5fPP",
  "key7": "4xicmKLzhomEAy5HNaq9ceRJRycPJEzv7HzgcvYvBJWVccDR5Fnj5C3x2XBM1WLy3CZGovQ14n9XUCWnbsPcrdx",
  "key8": "3M2LZ8ejTPTz5QErQxkdc4EgCHEtNjYfCe2a2zEdTrAZXjYnh43EiH9F2BTiQnekY2qXwPGCwgwVN9q7jWyEmotZ",
  "key9": "5HvTAirE1Gc5YAnxd3fiN6hMgqmdHEwonL9tUgS9K4MqTbHaRB7kawQmH6LUg56fijqcpzJbdKQWuE3tPjBqL4YZ",
  "key10": "5FvGd2isCbZgQ6ooSCCQ4VeAsCRby3XUKsk5PKqmYLF3qbN7DK6nj8PEeWHE5zBjqc42LWzCC5hA5PgHnzFJmw42",
  "key11": "2NkwMXAQzKA1QVNyLjCYedbUffFVHw2DSk2Hgau4qR8EfAvevRFaFGcRU5GfiKDNoXNBQA34tngPFK3CD8B5H26W",
  "key12": "2Nv238g3Ao4he5hfPHf3cSR8St3NRFdPbE8WYzRtcMUYC5trD5DPhwX4KEvNCTXVV1eoxbcAEjyjefa7kwDA7H6P",
  "key13": "5N8VbDKS4tdaJgpuWWKogmaXy8wtQj9AVFPVjWiJGaeCPaNFYwzRhJVe958yfZRTD5RHk6wCZFU2QUNpPqBtTVsC",
  "key14": "22tFGEHkHL6V859HNGdzk8pgHAkcnknjgNqxEtaSEQMXPcwfy6zVeUvLWxD7VFKRLJxFuT6EiAvNrbk7L6vC8Wfg",
  "key15": "3UnzdxgcrMtLTKRT72boztyik72fei5uPasYZ4wgwQ9JGH9aqNmg39DUrEJ4rD7cbeUiPKQMsrZvfDnEX8cLjW51",
  "key16": "2iqQfnsmSLZ8Bs6XkMzH8eyPAdBkEWoUrjx6CBebFuTLNJoQp3WzQjeKtoiMNB77hL9iJrz9sNEpomumz2CgBMBA",
  "key17": "5getP2UxZ7fg8UKfePwer5czq79DC2mNQum95WLKoWs4YDeXktNkCrJszBV1s9JUvWCCfvEE92mqXBTsTNqjTPJM",
  "key18": "916LpDPdTrvUAdes6EV1Ax7nucBEK9MuLVyT4Rhs4KGbMCAr3gPdJbLKK1YbdHnZQjtuZCD212dk8XNnUxCrKFq",
  "key19": "2FcxwrMhH3Zy1FXzpuWiJkBTyhibK3cacqgVzsGucd9RLpVx4puPe4Mtzu7LcEw8UPFbjVFZEun2vBTu6uKMi2aM",
  "key20": "3ZJW6EfCQUxG21JdygpW1DVr55YuudLE1qztPGkkAnDmFWXjmDv6CDwihPDY3zAAwmqQom3jt1r34SBKriFHHBvh",
  "key21": "RMPWi9qe6Moe4eneZWu4J7HMXotEC1v4urE1ZkY23ap65QPSC1RcH1tqhQ6hG94fPGBtagw2kpWhv7AZQKTV6BV",
  "key22": "2e4bmc78q8MYtJoFwK716gXVipuUGah9J2cHN18KexPkSva65ZvahKmVAbyY4c8VJBM1PjfWNEYoEbWShooHKDKx",
  "key23": "2JEa8XqhgHGHoiosEicueL6judi8mrLUPQkM6WnkYhXb8UA5PXaWpQzfD4q96fSCsyhdkQiBTHUoWmhmLh1WjnMp",
  "key24": "b6s8dJnvYDUCmnURttjCapKnoLuJVHTApYoi2rWcsfdh4R3v1zwSeurJpawrQF5tYoC2WReHHphJsyv89wXg4xx",
  "key25": "Wn1vNeTv9P4u2wijuU1NHQY6ojF1enQrY3PzoFtTd5u7HLehEUAiqKDijmUn97reDhbmLMm2SsXC81ccBXZwZ4D",
  "key26": "2nEckut48ja1MZQpsy9gfFF8diwNXP37XG6tG7aWmTchTn3XDPMcEBVp5Z8kz8sHz4EqpzVzJsYTZvetLFgt1fb6",
  "key27": "3gN5zswpcdqnMAdGjguvmK6v2qAfBRzQsVaYJMwLXkGT8N6BnYTbFEuiRPjTJcvt1yMKu37t8TRnBnd8r47eeAZq",
  "key28": "ufwTXfojqC4GRnFxQ5PdokdiFBWYcGJ36xJJv7x5iRpUvegxvAF9wvmiSzBfcgNnLA3YyQFrmENp9KvxwA8Mtcg",
  "key29": "37bZSC8oQsqYo96Cn2CSjYsYiRoEsPf1oDcnFFebBvQZwuwN7t4tGsiu61s9sHcFhgKxyn6rmsHAnoNuji9XT4jH",
  "key30": "66ygviK7jWD1BFVo8mUjrJ8x4VhJS9D9UiRoiv7zUDPgdBDXUAEKtF3sw2iwgAngmwtKAcTGQX6NotyH8XUNj3KY",
  "key31": "3tX1fknerJmHSLnxQSK73MP3hVf8UbcFjh2fVwC3iTwkHiqAEdhDpshmpgecCJcWLzagqX4Npk3WZPnTLSZJxHy1",
  "key32": "22GEWqJsT5XEmnBzdxqFB2HZaf5XMYM5EPEho1AFLdX9szztoaRGYHVW5mzFEAV1qrPEBJDaqeC7y2oMprbb18p1",
  "key33": "52vPVvSL75BtdhQMHr8RF7GvvnkLU3nXj8K1Fv8SbU5pM2R6mTzVj3Yj9reBZC3kpKLXW6tECYCbzXh4FxEEcaMd",
  "key34": "3UhyMubx9CbBuVCh5iqMEqobhto5F1pJK84coTFXLBhpsvTGGrouFvx7fByU6G4WvgZhtaBYcDTmcLvwKktKAdJ5",
  "key35": "5DHMmub1rm7byBdKPeDRMdnvzLhMcF4H943c6iZEJpCJ7uQSyy5HgUiPRdzz2f7oACGdUVsxhX2WRm5JwFQJxk6i"
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
