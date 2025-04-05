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
    "4QVzLQVFivc4y8DJSxHWtT1xZfrfNh1i7g4Pwg6uTbbYePM8pQRwViX4sZSdePM7RUMxSHYU7ND1CX34qhH6FSkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37tdYeiW5mrvtgz2sRn8Ld3d82E8KSFmD6HdgpQT9YJdK6bHbPT5iLic7HSVe3CxQz8kaiaJPSCsPV1Z2y2vE8Hc",
  "key1": "3sgU3Fux1aet2iJmwmXYgm2viDNVncPYaAfoCr6WNxxtiNgceedN5xyugX6chWUUdWjEmjK9WTJeVsAm8thpiVtD",
  "key2": "66AksdChhiZAKZ7ZMmsJJwLt5uYSH8Q25dNvXXxUB7db5BiJWHb4Mo1mwYmkMATSs6h8ETN22ccnKGwTg75E39Qj",
  "key3": "63r8uWcsP6fc3y9tbbCN1TZjMkwh3bq9g7scDeLsDk22Vc4x6ch2sTNfPnZ6JYemcedSK8ezH27NPzpwmG2Ae2ox",
  "key4": "3K1DENcD2z1SyfJi4g2DusJneahU1Wk57CJexMuis9KtLYyP4srWFzKacjah6mT12xcGTsTtkfMhVBJxVcwZnnhs",
  "key5": "3hp4s2w4wR3B29Dgrke1bUJdnghHRUpugi8Gsu6ktrnHhib355msWTZqSCXr5sS85D6gbnZD4cp6N6GuWSYdUjXY",
  "key6": "FtmvL5KbWedwsTsgDyF8KBTZ65AktmRFMCwpEj42kpf1ZdY1RCCJZMsSKA7TVVRdAZcfXJGuDXxXnsSdYYR3wZq",
  "key7": "35rzcAkMiTyfvS7EpEMfxEQLZ1DfL4ALsZPQQ2K24tsMpqMu92HZQpPKdVYUPG61cwkeG3sLBPhbpPDqzQmXK7cX",
  "key8": "2qUBmJUS9rPSM4Ye78m5q9FLstPhVRcYGgEAsdcUAXYbWNfqoHbLYD66kiNqbXCLV2NcGeeXa9ZAiRBhAMG5Gvsu",
  "key9": "MKG4qP3oMK27jiFebA2nMs91ckF4yrZBoHbUqmhxxbEpQMrghenYjtLw5DC2bH5b3qu4JgmHTWVBHa4a6knjPYV",
  "key10": "2m5ZJcT9aVkTvKvt5XUgnqQr9DnFn4MozG5Q73PjNVTUFtsHKffy3oEojrBijUQKEDPW67eXwVYNtGqd126LCMa4",
  "key11": "49QxcFtZszAbUknDYmPAMdTZyD7MyeazFSpChZpiaUH2msUhnZo6aqcVwALKc3SfVNeo7A5FjX7JGJegGatyZTgA",
  "key12": "bE1fDuPJ8gsqPKUKx8Frb9KDzFPDMiDyphMVCc9LH8gZZqK59dLkK4TxUg2NaJS1Y4UELT7cZfZsTUER6psq4vf",
  "key13": "2Q4smPtzwtZkB7b8eU6EtMh5fCbmfEnVM1KupYPVEbES8zScTWoYPjd6NjT1Na1grx2Fiy1maV57esug4VaWU8t5",
  "key14": "54jnxyiHQp4TKbSBAaVWbnbNPJ97oYgph9GkDqV77PErAnM3pBwKangN68Hh2gbiFjDGwTjFNkEhVUCKxZ91RYVc",
  "key15": "5DfD4HhLGZuwSTSyrn8c9sM86H3xUL6jGGy81uowCHBE1AYJP28vJKrivRg29kM5A26Cus433xC6nRgm5xgB7GBQ",
  "key16": "59TAF2ymYuWjqKca2uyWieB43t8EuYdbVfpgycM6GT59kByAgZYyqpGXguw8EAnrKFVhkJpveMLbggSRZX52d1KZ",
  "key17": "3hTw4DNLhGsytL31P3S1DkZKiCuxLN3NRikfynjPBJw6oKLPVyKyVQ2JjY1f8Ehg9rX8mvGZCrzKmKNebFyvoBaN",
  "key18": "4W6SxFZBwAJXz7n3qZ7d28LbueTCguQVRX5j4YqmoakmS5vikk3TT1coYbboMPZqrQZL3E1ELYjXX2vukhoDzCS8",
  "key19": "38zvyrNBQZTwJRJkipsjW9zqQMjwQBrUWGDNtU4m8uikQoSymyfRNj73vyvnJRPu6K64NTB1WnoYeX66SBgVguce",
  "key20": "5PKony6wvURaPGMgJdPVSZFSvL94b3GXHKQ25twot9k4Voj9AhrHdu9VZpokvyYsN8LKDmfTynXPGWL2LqBXvaMW",
  "key21": "2C1nBvyMJ6oxMDa1KvQKjGBjnqdbbLGwpTU2c9Zmy8cGGpnvpfTERzXL2jzZMst87jTToz7dGDWrxJyUi9DYnm81",
  "key22": "4Xbin1JvjRZwWLjddbQPRCtSWS3PrprsGg4TYvZ3CrgsBcjx3RiV1bQig11wNfr2wNMQDQnaSYNC43XoHBaLgWA",
  "key23": "5qFPpBVdCFq9QVYxtS9yZvZdLQnE79GPBjwe5FRkbdT26EBsGP7pxrf6HJZosXgRtvKtppo1h4aTE7kPVMt9Duji",
  "key24": "21y54b6QMUdDsaXoZcNprULaFhDuxb1AdZc2r5j5KBDze8TVHqs95twvm5jsiicT1bscKJJ19TSE6AmzkL6Zjys9",
  "key25": "4okiqHWPxqB3XY67cH9Km6xVv3ggUEFi9c8fLXGyfTp3KySkvvpQAQBkoAWEF4HWwr6m5jgBccMFu2RpygdZXMi4",
  "key26": "2Av8n7enDzbJieHbb6fSp9PGdZTRATRoe9wXM9ormpDt6ufsDth8cf2rwVbhautQEqHC3gMajutC2erzzVA6X75T",
  "key27": "CFkV4DWgaFnovBSER3wPAkbe93HkUUmq6VigBEQMywK8ybP3mwRSpj1XRagUvDGueZLoaocBjU9R4P4hEDAq1ZP",
  "key28": "YNLdgEWznLPEJ5nQBA4ZVeaxecqyGsN9jfHsrrr4cQPMwMENmjWHVrMyTTdZm4xQChHsaeHAg591nj3c6oh1CAq",
  "key29": "4AKVrPmZHNjTF7uYLNANiHmL1FLxtZFWyeWt1gJ7VGZRxFdt7tWnk7LW1cBSFAmDUnCW3GHVUV2CEZeNjtTPQXcZ",
  "key30": "22HbCtqAXP1QTCrJfTNu5JbHderWgPVYd5vUtPJrqzjz1NxpCZN3eZBzXNJ5bQtRgxLypn2Gdm2isshRfaXBV59D",
  "key31": "4aXU9n11otFKMPPsTS45yhEWzx4TT7ZedpH2mndTBFpho31EX5D22ain4ViSA2JdYXNvDmyfFKtP1xcx7SangJtR",
  "key32": "HL1jehqv6DwyMv5U3CwY1XBgkFUtdLWmRXXF2123Qn646PcafDuysQfxiL9kfCQmzoKPjCimxe6PBxW1SQC2Lag"
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
