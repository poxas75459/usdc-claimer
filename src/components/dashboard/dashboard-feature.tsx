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
    "3K1M7UFGRZUJL5fT4Z2Wab4HNZRXorduqSwaigFSZe5CMdQVGiDFNBa6N3Njg5gFbggDEQBzFB8g15c5HmEi5QvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599u86Fi3gi1raNfy4Uy3sXotxRicGfKwNTGhhC73KvE1MipYJQVV2ZqEf7yx9dcn1f89kQ2ox4xFAmWC7iXFffD",
  "key1": "2CUCsypgyPCDssNJHdvcMfmtruyVgP5vu7vdsPinvpc5jU71uek9K3xSbppzgSfrZv8rCqeecHX8QPmb771p5Jec",
  "key2": "GAVwxw5JePuKngDaMbZ2X24nWdR7xeKKKzH3CweTAb2FkhPnAJKy6XmmJ2WMTjFMV1cbqYb5ZAYZu7yadnNzKJa",
  "key3": "3ArAowiMecafbcp7mLV9K9PaiQTgbWV8B1gRZNzBjMkjJ7LgLxrk1NhogtA3U8ccGfZZWTMzFwpNMSoESkp2Snp2",
  "key4": "xUpo3x3Wq1JcASnbHx6J9bvNo64yuvjyYec3bJiFGFUTar8hQPuVKRRvfcHtnfA2ENKHwvvtNL9xtEahidLcZ1H",
  "key5": "3Tseh72wyUwFsqzYXqd4RCEMfTgd1VctnEFoU9gq2jCfsNM3ALbsbfcBMDrMC6aw961TboxqvacaBc4bFTgVpxUV",
  "key6": "4PJzEG3boYPu778jKbxPWxejPFVHwzjQX46xkPZEahfttFq599zDqSu6oSQkqAYf78L9b6FSX8tLQNsorQP19S4G",
  "key7": "4nndDb3b5qDQaAhLUYzCQ1Fbon6gpZDbAgwP3oLWZ5jbkQGnRDZtHoDspgq3GuGWtiwBLoeD1ak7xt2WtkSgvZW4",
  "key8": "2gGdkcwF12mQDGYBBWGyHP2cAbpEb5oB95RCGFMYZL53YJSuhYQ4p2HyoxhAMiSfX3xBLkWgEUsCGpKWdhPVNbrc",
  "key9": "4Ei7yJJTec7hPUxTWvkTFtrqVu7M1ztrqbtVkebCzjTghXttgUy8QzM75JXbwW1Suz7uSsWE5cxa6wRCe8RxxQe7",
  "key10": "YMW9GQvcDtyfwfVsYKUR2i5CuHd7rZXdrhDFSwqgWTRW2ASQnec7q5Qkzbt7e7HfWKkBNQnd8Yex9gNx6Hs38ju",
  "key11": "5GfYQre8UY5dVgGRKVkL2Tiw7Mz8LfcWacuUgKUs6cdqMDELyx1zvJonv7ETsCjBUnVML8Memsg8i2QCNrrP214V",
  "key12": "44f97mJyQfo3BS4Y4N7suEh4wYQV3rVzm9YD75654e4zpauZ4N7dtMkLTnkGYUVwAdxjn5BBNrq1bKFeWsMN5V4z",
  "key13": "4uFiwW2y4rdV7cotarWxDJcYQNFpkBsFm4UcbNoRBnoMySr3MtmQsLibZxJZLbqSxwHyWA5nf4hcPEy9iAduEi8B",
  "key14": "5aQ96g6mufp4CtTZY5jx2HLGCSL8rYCkUA6Zvz5vf8Anqqw6e2ztQo1QcKfBajfBhUsLD6DdXasJriFDRPWJsUL4",
  "key15": "5c2X1NBYR2sbNqhELHwFXVhxXZEx7cYHREm74PdikKUt5ouni7CPRoXQndz3gm7BfRoh6uvaTtvkSy41BdBLwG9D",
  "key16": "2zWQN6wevc3z57QiUZe42oBRCT9oZEX5qTtjUacBKmDn3UFWgD3cpXMCQgoEwNzey1yrAHxNEwzuPiXkM9kdvRqU",
  "key17": "Vuz5mu2hjcjxvGFZPbgiBBBrRez3MVuLEEcTMcT9Fd1b6WLnQFmejpPCa4tpFyyFPnUTeh7Hb7yqzBVcEVPRUUi",
  "key18": "5gx4XF26UhWxYcw6kuck1hqk5VSXnxNeqtUemAhstJVnEbMRZzamzQNRi6nLuXHqapS4HrqGcyvhCZDuWRVw3sXn",
  "key19": "4hQFef349JjXmaHAkMKKQgpFHMZCnpACgpDdvniBjuzuQeJo193k3cMW1TgxGQZcoVeMiqsVofm6fcwmY4GF9FiS",
  "key20": "3BeRoKiMHn2SBjZTEzXCw4VNc1i7VR7kYDYsGEBRnWMznBFc2u48NuMoarpdborAdS4eX6zKqHT9yjFNwFgyU6Rf",
  "key21": "3YJxQziNgDjZZgX3TpuXwvjWTe7zVEA7xzLCRnnhQn9SWza8o95FW6Zjp9QfuPCMMx1SVC6txHztGZKkF8keV2Go",
  "key22": "YkM9dEnQYbNDUL7zMH71mr3KaGRVKpRoCoa389g7E13JkEXs3Lhpw8tfNSEYLvR6RLDPto9DxC395xrNJ1JQEoJ",
  "key23": "5iX1zMYD3FiBxTBbmxEeg6FhMWHhD3Ham6D9TS1bAzKtmNB9o2QRRwsz3Udnyo1a7bSPrvT9ZvrASt2V2Tu1hRBw",
  "key24": "16s4jcsLyPy72GN6By31gssMsRYjj73q1e6W8Bc3cGSUTLHu5nFX5bSUoAtcmdPNTyps47DHML75x6YQFtfH9ke",
  "key25": "3VrFU3pzzCWj4WHqskS3hh9KpJ3bMVPsc3J93YdMoGymoTB9JYiH9BM7tJTA1CUyaPiEiL1BNmoaKrijoXdRJB8U",
  "key26": "5PDdWN8NiX9fX9FkcySogodW8n3NYEEqKbKGdhBPGdKaXyBQ5rHyJTmnrAM8fc2FNjucDN2BKkHj8m4XoVS6CzUn",
  "key27": "3BTnc9mLeaRxBeszC56SwX3iuUfgGz576iJVvawPEKm8QPcx7GHw1eN2AS8tbjUKqELGTkB2LmcZQKocLktk8Bsz",
  "key28": "4tNKeQJ5Q74KoStVQritvYgD1uX9JuAnh5mW3nGdu3CjwqXmKZWRC8Lw5fNVkx1Uqh8zpyKBcUjbDL1kAyZCS1Vu"
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
