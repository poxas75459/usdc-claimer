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
    "53p4Np8vKF3KDVs5HyMQWWx7eR6boksA6dAsAncb8GymmV78DahtG3BjWtpG3zq8LTygdtE9S6eL6VU99nARrMmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bi11Vr7HTJfFqpzxAchvrZ9yPJHA3zKPZc73qZyS9AJ3xFChv37Z7BNSrcDkJyQeBoeBbFZonywYkaMKgVNM5zp",
  "key1": "2otKg9MYs5MBW4pRz27xCWgp5qxMnYQpkL4LHG5MMzgHmWqbGQSMnhkjuT4iUfDamYdkJWmJYzwuG867tSHLQh4r",
  "key2": "4Y5EANrcjVMXx4psSa2Gd9RkvXehYVpDutRJrgHxcnGx9ThnethJoD9xADaiTjWE34YKMECxZviQSMNZqX491xnr",
  "key3": "4rFsPhjgyz32nV5mdkbJehwHfSerSeZ7znf16N1MLot49EYpffn99VqxeGxW35Y9JNP9U2ZZBZykDHaCjRypxzzi",
  "key4": "47GbUK1ohVkdWvyxqnvWpoxPbawts9jUd9G6hiPHZm1A2bNgBu2mMEzuthxotWmQT2KyfvnYBYZY3o9jEhy2HCqA",
  "key5": "3Ru3kS5VfJr9evoJygx4LCQkVWv9QYYbB9wfEV5kjDmACxjwajMeY2eqw9PAEfY6iUK8nSFqHGrRW1BZQ7K6UpA9",
  "key6": "2H9x5fZwLs54wHohNqgDCvBpNMJWQf8cLvf4hR7M6vd4cJAbpJQHgg5jedxkysLxL4XEUNewaVLUrVyEPCtsYSUf",
  "key7": "2MffGHDHsyCAuud2a8CCtEsLi2GfmufNucDukVr3xjAae7E8yruPbpzn6CsYzJBDTDFHKYaP979ZH3XYtF8KHHJq",
  "key8": "5TzrX4nFwgagZ9pjMQ71so44wZmaPeo57gYKcmrWfehGZttPg47V77K6TNpZ9U4rY7U3FaXyB762Fuqc9zemJ176",
  "key9": "3Z1zLZeubrydtn3WWKqVQi365NPHv3tm3NtjW4vkoaDbwSi1kPzsJPKLHeVcrY8p5Cgd3CcfqPyzQStaaJVBrS4Q",
  "key10": "3dDn9icB17VywRNnLoXRthD6q1vGVMUUvztfrTsuxUHxGnK6HVth3F3jdEAn3TEqzpVv1Tztk9hivboFFU2RLEoA",
  "key11": "57LjCFDWhym6F78g6Rjr9rUUhXVfg1XPZJEGdXFZEqQyUyBzMVdF6TnuJvgDKpwTsDGiSKxPEE5QyicQPndPN5t9",
  "key12": "3swFiB1Dx8koavVQJUSDi1AfbLfq1dZPbkmnNWthQnPYjqngXuPEgjQfLowT2nMcLj4mAmn7te1qkFk6Fekcb8aD",
  "key13": "4N7wWzsysJ6nQv9ZiAmgVAWX2Mw6FA7Srwc4kzRS63sY7HDfo66H79GVBsWmMGhDq3rPqMqE7bdkZDRxZDfBDbDR",
  "key14": "2p4aFFkECFHAkmXsDhQfVD7HEmPYcy9tHDPb5WeLAoF6ScUFjkLQufZtSj1kThYnLCgKSLhftRubSBp2hHbxC3QU",
  "key15": "33byccCsiatLQqP1PebTTi3TTHjwQK1DjY6j4c31cnCcrGFg6ycnwsJtvUGLNmYJ11KjyF1e1gXvicQnZpPjhU1x",
  "key16": "gDi1fEF6rgiq3wNkEDpFj4jrMhLCa33ypoa5hL9ox9ajLcxFQSySnk4XnKoo3GJ2ebhCFeAvHxjJHTsTBMg8cuE",
  "key17": "kdF1w2gDn8x9vcofpptPyHFbBj1rwZBMQVZHFLadDtaSFrQKznDuWymya2L5P93vCyobjZ2f8kgcR8CNRgFs6rd",
  "key18": "DWBrDaWtWx69SHdgf7rjsEmpw21iSgqrTKqQrhZgRn2f8rbw235ffrSznZVuygkAB83Fc7qzkEBreeet9ucX6mc",
  "key19": "39VKdA8ikADXXi25ndkpwdtAbnVPhzgAy9Rr4jV7tF5YUP2FztW3uTGpe7QhxziaAstzqqfNuhyP6tzS6R5K3Cbk",
  "key20": "5ynYDNLEd8ntaBxv4QW7N4bdiqhsrbMNgNoMoXh2LghtKwHgTKn3ED2rkZmkJNFYmRzeZReuxdSYJXHybnFZauep",
  "key21": "4LTyRYz4kzkN6bnZVDjAgTbs8actFuKjfSbeWsz5kB6UUC7fHnnB9Uus6F1vmgxGb3wYytDJYy3qaMxEHR7ewtgb",
  "key22": "482QhJ8jyJVG8LnMTQ9sNkKtyQnWBXGGLHMuK7Zqz4M3bzyRny1cCw9Q4SMkbaeKHKbh12nrb3S6z8YnxmCeyYoJ",
  "key23": "4XM4DcpJiGzSaznhuw78xW3PxECU2Ugdg5R5s5zZkuoXT14BZ5rgCHTnjpSERB7vaYh6UpQHcLkhovynQEYGr8H4",
  "key24": "49a1kTyhjYEhsA7ffF3uLr7iH2jJjWeCuthLF124zCKUATDVm4Wtk6jcVY3iygm4Apymjgp45uh3iE38sVJzwy74",
  "key25": "65DCpFhRx84BjuryMJt128hAGd7shfGaT5uXdxBNbDzX5xKPs56PUaFE2eZEhbYt1s8Nq79ihbGw8yJi6FSEu3nZ",
  "key26": "5fhAwA6n7TmaBdG9Df7ndRc2sZ9qfUr6JTLyuLkRPfYd55F9QPkPzWw7TXbHErnTu1ELkpHNL62pdWr1jx2aYnuY",
  "key27": "4LgTjJxa8jH7KtEkfVLkgz7kAsafGqZBnU6RtkfGt4Zdy4N21FKfXXtpZaxSdeBdv5NGr98LT6NVd6QzNJmLJY8k",
  "key28": "5s8h33GT31RNwJBmZDcTSfwFzBrV2xE4cAquKyhhbpJDx2tpVgDAiekcC9xohZi1xG4PLrFeF8a3uaesxvGBovE9",
  "key29": "4tLb7EcPNZAgVKhXnzmFHu8J8kv3PKBVCibsXuqdDH7Q7JrBxuT9RUUQ2j72max6bEJvhMhps6sJyhFCecB9vKUR",
  "key30": "61S5hu8jD9AvpzFCebTzh9dEyWsX7ULPiMvUUur6ZfDvrsUaerdVuhcHj2Kd71UCfdiSNsJnbuQG5H6JmZk9F8cR",
  "key31": "3UsUAkJN7zK8wk3q2aKTw9ksoefWmVVn82J3FaeZhikuk4WwK5hMirJsNEYigq7oo6Z3EULsd2bidg3S1FsSUUae",
  "key32": "JhFSzPesRMP6EwLFJ1q9xqwHTNCLuJwWzFnMTYueWu2oPR35LLhu6QnNZk2gq31Gh9JKKDJjuo6sAUwAiGFdfnF",
  "key33": "4YaRT3J6JoTGLdKRZqtZSTek9Wc7PcYsqAr3E2Yo1FVxhgFdEBKCGFkh4FbkSqYeqLWuw7nSeHG6D86tG3fg5qzt",
  "key34": "4B4gzua4o3gsLHJLbWP5BCGjFAJ5TBnE15TiSBmdGbm5prz98QozUnKHtLHFieEUXRXkhDJi7dejULj2uytapiTS",
  "key35": "5pjhMBgXTgS2zSK72K6zpeNshhCcaMeZovrGUQADRbqCkxZR1Q8Rgo1oPPg9eVbp9SiNM1s4ZP9ijakzCVA6TqqF",
  "key36": "FKRAFSHic3yqSkeUZ5b35WG84YrzrrzjinpLpwRc68FPkXNCcXgVuZnbMBH9UNV7dVCxbY9WrG4AoJrn8o2PUrM",
  "key37": "tHCnfxeK5Psgm2sphChaQBgwfPgDNj5jLsWYEnKf5zoG6Vqod57YGwtXL6tRpcjJK4Lyu7imT2gpqM7NxAaSX6h",
  "key38": "UQ3iBB2CuR7THK45e5GvhKePLVJ53gsQg3NJJ5Es9QpC2SFrXyvuDWpK5dmKoBK6W8jZVrZD7RFfiUWaQ8PpeGF",
  "key39": "3wkNPVrvigfVQCWgiAFTorpGuDYQtjdX2BP16xkYQZQABT8WhuAL2SPr7UoBfHr5MNgDXJKevME2UfMSJ7N24U6Q",
  "key40": "2mYYkSyhHtFv6bcwNZ6M2XUxgSYqK5Jw2VXLuSqgLttj7NmeWze3mTK11LmAGe1ZTgdVv1qppcdqANDPpQybrTE",
  "key41": "2XeXp5xA948sEWi8q6fj92p5kBeHSfqC2nHfjcXfFBmnb32EVmnmt4wL1UKUigskbekaH8xfrN4Pu586sAzTBJ3t",
  "key42": "65DxSjXxUEjHRjCYXRo1XCqA4MT9AzReGFmp7kFd3DwMFCWNUiSqq3SGsvuTiPCXmdZvPiZrEujynoGu6BKpQVUh",
  "key43": "5o8egSpgYWQj5imQrTZczqRPjKUmHpCJTKGbC2zoiBEHT8wQU3jTK1nsE2Qih6a8rnx8R27LLSp4JQFwaKU35rcA",
  "key44": "4fLxhLdP1NHiEMBexKjWyhFETX2BEaVCJxFuM1EHQFbiRpd2wcxP1W9ZhMAS9QBjFm62rok7pTWerE7zd96ajr8h",
  "key45": "c1KUipJGt7r4Z7nzNx4pTPWJWQHorf71LPXHiF8BffEZBfNZkt7FdNvQFHHLo4a6hFP6MxhCjRr2sx4K4sZxL4a",
  "key46": "63cnoeyR3UXVwrsYJbX7fj4ik45hYhGMNsaCsvFLGSksk2pXb1Ts1iKpcFdi8QFdm3JHEs4Ye29o3Dw7AE1DSHfu"
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
