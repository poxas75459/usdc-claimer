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
    "3FGDkxXkSdZhodp8jMcPYRVb7GVaRj4auwkvXNB9jXdZmFyMjz1UQ7xeb8GqfGxTR9rEF311EmRrQZKiqdZwjT82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K5z6krhiZHNhG9EwgUgpZLh73qTL3uzBW84pYcxWZ4oGbrqLUdAKo1Hb8qoiNVjw8XBbyUn1GCXRbrkYRxJpZyd",
  "key1": "zggboiNoMLsKs81zn6JuN5oV7eWkM5DyyHb2waQBDFkxnkUVyGfboxfyFokJ4MDabWiuceY4cDZFZmY2h4YZ3ka",
  "key2": "eBe3ZzkiJVm5TZ1vrQibSK6RS3i2AYtyPAGTMfCkQaD13pck3M5TNpFVWLnqqVJdYSF2zRSYThns8FoGsqJgkq6",
  "key3": "2nvXXKVZfahS23RkphNmrSW7ec2npnegqTVxqndtGprYZ2yLSzQyddbJgkjzbYoWxVNk6zWTopvhMVPHCef2eHRb",
  "key4": "476CP2gbpErwjDphENcmAjKwQ5paVwQaWTrnQy2ScZeTJ6LxddoeFCPViuZmi92itQufYG77mXg3HYcB35EEK2Wi",
  "key5": "5mD8QBAogSmjqWbVzehhoipfGtSGv2SqwbiiqtmnovBRtRf6vSYqXRCmZwbBZiJjPSKAN8yta9aW5x5nZRxyVsjn",
  "key6": "fQ7B4PejNHh8jLuobnrpc9VCpCReyv2RVv6UJYNEuZaVHp4fgZpgcBLHaFK1gsgVQcJK4hiGvfQgHuC1Eyc65uS",
  "key7": "2iDCf8GrSnWjWDqWicYFC4Yycyf2pp3n3B1HjmGRVHKLmCi83juUF3B1VNNCgWhMPBwkvmacJC1Z3cFJjS9h5PyM",
  "key8": "4wFC3r63VMRzQv85uWXuYPVJ2QsdJY1aHYEWFdzquHV7hZRJ6K3QJRB4ehPsUqBUGXdskwnphtozTozLmdCia4cX",
  "key9": "5YJ59tZW9DC1zV6bhD3ckqvW9w8yFfKh2geDFq9iYWt5uEeKJCeemRVnwottPMqtt8uzqpydxFngmaGswTCcGoy3",
  "key10": "4e6yy1YTLQ5bp8tFKoEDHntz358ihTnqi3yCrGqY6uHUwWv4v6EbhwL9UihdVjrVazWQGkpZBDeR2FhHXeQWYxEf",
  "key11": "51SrCxVa61fZ5WjQRUgc3NswbgohavNhQ11bnBXqjGMChmh8B9MxkJqvBxXfcq8Rb9mfKdo9a2BFyu9hQBxUpj9D",
  "key12": "4aodK2heyNEdbYYYAJWNZEzhpLAE9yijT7FFG6LER75MMZDa2HagrahksXj3TJh5SSzuEumiC4bMYHGL7PiqDAYn",
  "key13": "2asvGzhyTAYq7BTfuNVhPob1jTppEPMo3fwm1PoAuF6t7fEiad5CAhaSZFUPhmXB5UwunrCuhCxW9PiSdyQac9ro",
  "key14": "5RZEVi2bJ2Us3RMDfnk3J3hH1qpZ8Hd9jepZZKW5vwssiGfdCncPsm38dKNBLBqCKk1TDrFFNWnMsjrjoyAw56oY",
  "key15": "5hJ94PZx96U4oMuq83tTfXjDN4zDbnbjPucaMYEX8KzzCqgwTmnrR2N7uJUYENLqcCJXvbc5aTmQwbEHuqWfooHn",
  "key16": "2R2DruFf2QU4pPHKXHkFA4nRdtv4LSk58FasScg7Cd6hzGvRgxZhELEi3xjhq67We47t7GvttxvdVQ8MYm5aJ7RT",
  "key17": "2E8fcbsdyJYtiP9jGo77uWUVUQgMfuFRG7K1GSVjXNuUbZtQ4cjYf2R8sf7aadX3A3R3ZojapUetNV6qkKhGqYWc",
  "key18": "3TgWSivdXiiNSchMSVmpQEhVETtzcjdq8pPde4xjFtGE6Xuv49h1xXDuzxjWbadyWKDFRYwWXexyNH6HjwxfPaj",
  "key19": "4fsUNZzHeuZ8Xbaihy7fmhkf891ygZEGVCKbBHAtPb7Y88fcSJWamvUNXV5eYioNrn86iDrVGx8awp1F5keugm4c",
  "key20": "5s6SScKeEarp5423THUBk1im1JkUfAVsXwZhuFGUw3UzQBcJLtWKkJtGYDtqRFdwjdNEU8UTgMM4ofSZ4pQ8wWYD",
  "key21": "4J8KwsUXJh36uLCyMTjm1x8X8b4hQ8uusqKjQjDjsLbLfzjdNaMUV8TikaE4diza84mSctzMXS38Z48oAo92LUWH",
  "key22": "4N1jPEwkdQb78x9U2MxZNSMiCuSVk7PZA1oEh2Lpri4evyXFDnGcgD9VpWF1jcqPCwK1E4pupR6zqrYsU2MK8Hc5",
  "key23": "RXKu7GWX1UMZnkxHxh6243PnpL2njBPJaRk4iNGTc8t2LDjHAeJ514pEQB7Y38sqiGYQiZKcdUebTc7ALptYCWw",
  "key24": "fwnHp4XrYaFhWficStEHirtjjMTgqEfregm4R3oYmEHoTWgecTHxbHwEfiVsSNSmJyrKRoYjS4gAJNywuzHuGvM",
  "key25": "2LKQTwCXgbBNKuRjvmJgMQw6NQY3LYBdH8gG5L77Azg9TRuze5zUWZzRgorMwqa6zZZtBVDfhJ17g3DRQTAbNqSs",
  "key26": "2Tee4GRYMxVFCWSUPj51KkVXhJ3FZWT46tzBapKN37C9PKQjyXYDynvXrYUMWWFsWAgKyyD2yW2eSjKgNGcCP7jV",
  "key27": "4AVeEj2nFYLE8Maz1mWVnt5fj3yDgVoz5Xatnm93arwiQW89n67dtoXfY88GPLFfH6Sup3bsyciu6f2ecSRf1rEw",
  "key28": "Jd8o9utqCPSbfvcJxmVnnnRdpN4Pn9K6mLNfzwFfaq5xNLc98GyMWQSJncSG4fga79FHVivRyZP8NqSkJHHFVez",
  "key29": "pNGbUrs2XTuwp3eczLmsqHSJ5tYR5PSGvghMRJPYna4GirQ4RXQgopEETNCg1VpR7exobjZu6ihUCwcFadNU4cf",
  "key30": "2LsURqazoixcNcrEEKSh9mpfUGSiAVJrmvVENDZh2cxmTm9ua54aaAcSvAi7MYUp17Vd8QWF7kn6bbgZTaKukuTB",
  "key31": "4GsQ3wqtUKi2zrhiqaH7dGPAWJr77BypCeVzkfhHNRKd5wJcHK7et82o7gL71TJtDAdRQDG81FDXdNNjVDmF6mn2",
  "key32": "5YThYSMnMoWP4pAkGchh5ECfyRZMhBU9Mg1peKq3SDU2m56CP1SwqrTXSTud3DGqoVjMHBZHCRkuQ3s7yKN6oUzQ",
  "key33": "9Jwp87dt8S1gZkmdToyezKGErWeUYATBkjSnv7GZbHHjLs5SphtuE6qXrj26Vbe9CzpHS7dxf5M6jNmLqoLdNk2",
  "key34": "KetR98W5gh9quFNbTLdqcPz5PSVDUdABKcpGw2vzSbYWYa2BmESPYa8fZGMaQGifrj6NfAdKZNBhpSijShAGCNH"
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
