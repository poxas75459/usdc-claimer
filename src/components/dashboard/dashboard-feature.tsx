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
    "5WAaJVmVGYWTfhVQe2wf5QkGxSBS6vy2v8bY7GLTV8ApPjeYuhDYAqaGgc7L6EHAWZdcQX8oUSry8Y9a77pySGbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dYnxHCY3XGci9GZrY97wKGT3DnPvJkEZ2vku497o1zMaVQb1mpXzCdqn8qsEqAvUptJBK9sfN6JT8ixHsy4wYpA",
  "key1": "62Ar96xyLUWB85AYPeXAQX7xkpc6THB81RfmYZHp97yRC4xXbREqrBGrm3x5daUADFbSrVAZhLuDNPp2xdoCokHF",
  "key2": "3AJttkShgAjwqhzUDf2LWBk39qBm7DLxVVba13nR4itRjGXj2wR5DfbM9zwSMJmT3tzGX164uWFRC1ZL6xGUJDNu",
  "key3": "4DHsRmAyzG3MfGP8Wfnh2H2KEyYgX51Ev29eMdxTdHT1jzY8Pwj9vVMmG7sjHvawYC2rL2wz28B7ffUH82kngDEm",
  "key4": "5UXzS5SNMCHWs2hWR2vUScsYfXaBywEFQUwdBhCdAicLVKx8iHWkWt5r1nuQXpFKjcwqVxS5KEYdDKLg5pwzBtJr",
  "key5": "3Cn5KnGR4FovFXbwrQgGfvQsVSkfDAN3ta6Vgh9CygCJ4t27aFG6CK8Z46wj3BW7rFU47y1bsunRbNfQs7KXL66y",
  "key6": "5XiiyCyeai1DQ6TJj8cE584h3v8wqvrCYqw3RtZXxwx59MnwkVAm8SkckjK7g3PoLkMJy2r5TroxDrru2FdqFu66",
  "key7": "3HebCY3B9HhmDnHhpEtHuLsZfrczHkuHnteAgSZ5xNbBxBgTzHDXZuDJHh2YfwCUm6CmMwjMXSdm3NwXeowWSMDB",
  "key8": "2xp6bcoY5A2QG6ZJmer81M5Bgtaa1uZtGqs3j8bMStBjbBix4GfD2u5ieQpkwnjjPvBvNTedFV886erR9kRdYSGG",
  "key9": "2TF9gUw24XyuPP8DUTw9MYrFgy5RHJg1HVTaZWHr7vMWxEAo1jVrpd9QPnm61Hf5ZDiycNEqHc78d3JSrG89iVmb",
  "key10": "4PL1SJAV5dU61XUpqnnFMGgsR2WKGbdJgzjowgp11qTJ9NnP9o9B85iRdXGy1ccag95Xjp6Fb8sL3wd692eZEGfk",
  "key11": "4S2fihotYHdQFJJBiSHn48asDSsFbNQaag2jC7K4NQE4QQG2n2wxMsDtMhcteUXcoC59CTRRAx8ywS813KepnYez",
  "key12": "4dBvU5K2zoDgFp8iVNzyaFY7XcLkoqLkQ3hk1kWLSBAANCiFyaUkWUgZEgRLT8wsNgZVPdo4Uw8H7dF6wLGGkJio",
  "key13": "3uYmiMjnHmqJsCb23eqeXV82ctyNzqh3SRyuGCMaQY6xv5PRN4VmUCjRC4R78uqrkhno3ZAtqmtdWbYJApbF2B9g",
  "key14": "1nqMfSbudhzfodD5ZtLozkzqD3Lo29knS65WZbVeDsj1n7M3r6ErWGn4oeKumhLGdrx9TK1sSaJNhM1C75C97yu",
  "key15": "kte8cR3ffBS5Fumeu2FcRgbvhWbCaag4nckDNhkvU9QBwGkptxx9PKv8X9RqpeZu6XRbvQxkctT2Lf8amRL8m1d",
  "key16": "q4Fh1LJwNJHbfwcSxA79qCRn7WnbpjtoL574bV2gYpQuDPSzVrBYZjRbPL8rKY5xq4G1SAC8PPguSsSm92Yp5qA",
  "key17": "64SEcmQWVKtokZYrL5TN7vTPTy2bwdssP7Lr7XRiJau4Ca6eh7LUGVjWTk5KGGh7JT2NAQutDsNtko7eSqxatCKY",
  "key18": "5muLias2PzobqQzFtWHwhM6zg62z3aErKVRDcmCUHFvmNALPaoLKaDKt7Yjj7kcm8RxWpBgRYm3oKvSZ2aa6uh3W",
  "key19": "4q3cXJUURRsZxKE9CryPreirbQWmAv9EuoqnSbCM7yF7Ps3Yy5jamiT6BAGLswxzxUq6KAVqUDmbTV1UP5reuV16",
  "key20": "2ek1bK1X2Po7vVJQ3Xg97R66CXf5aL45pfpXSfPZzhujb4HuNcPzuWYq6pKFjxhfSuni2YAM6teohTCpqHo8LrPU",
  "key21": "39YekpEfXUG6DL2g4tvuCrrDp1PCCtAi3xP11SSn6QrUYuPc3MjUMUvcPTdRfhH3iDZtJ6a5igTomGnUD1hnkAWm",
  "key22": "244kgduYVv4uNkPzEHDNCnb2iRbG3U6QBAyBNftEiTzGRU68GhjomNJdC6MyzaMCHSJzwzgQ74sofeWvHD9NzCkT",
  "key23": "5DzvuETmd9wCEuYjrMEhKPHCPNYbP1z86E2aDnfZoFLh3TCEppHUKQEvKiohMQsNNwb5HbT6hckDs3KnEbeb41U",
  "key24": "5PJTFMkbhDc4nBHAmFWXQeDihJBErFwX6TbrMnocsQ4eC525BqZ4UbzgEkXBdJ67ocr81XEpSVirKUZk72bJxWyW",
  "key25": "6CsAgoLrK2tUNhQhfXoqbXYdCSS8ap5nAarasyKvCkucPSKhUmFmQ8CojWvpYcKFNstRYkxpDviKcj9kksSeKPq",
  "key26": "64HceUwjsyecZU9X5S1epvmjZG8xvkQoeeWTPzHq2K8Kgh9Ap4K677L1yLoBmW36goMMEc71oB3yL3BC7TEcNVYX",
  "key27": "5shxwiLHMaUHodJzKpfgG5D86jHRTJJ6CvEv1qHHZ1hJrNnRDAJKSXVndtbPEEy1xEhK64y9cSJCToZY8YKEyLoc",
  "key28": "2bFEmgXDhsVkZ1Eajzw6sdDToraKPdTEVcWJucbscgKTiPZ4sjctujnKoWzc6x8bBtK5qfuBrghmfQpUeLUa92A3",
  "key29": "5TxDWTd5BgLY6wyfck1AiB6cgCyKHaAjfJXZX9BkjA8kKCKzJHUCEcLrvfHmGKP4nTnYRD1otwss9GrY93Xeeuy7",
  "key30": "3p3h2cPhhFHtHBnKQEf3iqtesET2VCbX5ZpDLoca38DM6PRSszXMyjfNLVj8QkVwcAgysxiqgtCVyixXRZ8rXmFR",
  "key31": "9MwYPDmXyGmEHLjVGZaSVNizTc3dwmBiVkHpRkqQZytFcuRQJybE9a1SPSpzF4vZfi5UnWvwLNMT6B6pCEHfYTV"
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
