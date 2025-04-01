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
    "2CbiKxEiuxPbBZViUV7bj6SbmDb3p3bk3xuvbBc5Tg4gj3zjxXVnamU1tMDWTjmhDb7L66TfBmLTPXHwcSGNp6HP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfu3oMvySRGrR3gaTmhrHFKD87dZq61t4hXmrzVLnurpDrcJ6No2WUoWGMxrZy2e9wP1XhbTQULLvCfB7GkmHYn",
  "key1": "4Asyj3qw3Zdjs7AFEUisGRypVkrUHaTn3gRWPQLVcHKA4UroxgpM1DvsAX76QV1crT397KGAgSda7tm9uPtNKYUj",
  "key2": "34WdmGGWwDN99PVgp5RfwFCPSgtkFNi7ePRN4dsm7MUcv3VJ3uh3Y41mX62RanePwhhYyxkDdnDLCKMuxB4wZBom",
  "key3": "4kzH4dXuB2JeD6siCkWvhuMzbx7UAQ1i2Mv6o4hqyAhNx2xQ6Zt296j2wCoNRr2NhKFsDthdoPEQ7W7eUm42MMfh",
  "key4": "4bpZp9964fdz2B4V3Tq27qNrPyzhUC4tjCrE687Ycst85qjCTCEDY64WA6byTE1PXEYo8iRN4L8vFEj7JsJfe21A",
  "key5": "4YGEqLfdijqcmoo6yGCxbKbCQxDCn2uyz7t5n6tdFcmhbqjPw5cd4SP9wv5RurpnvNoQv39HoqAdrU4e5MHNBgBq",
  "key6": "5j3TAaRXkepo5QdNboXsjZJLJiDgtXYNTYWkkqZ3SBTNUD4EePDnmGrfWCnwAu7C26j2FxWntzhm7xTosoXJb5m1",
  "key7": "4J7t5851eyhYfD9tLdd9mVGSsW6x8D3KRSVAgbdqT827MpWQ9HuRN57vXFEAKFHr6ZncDUPi6mAWc1Gk6fr8znNQ",
  "key8": "TNTABv3X7N6cdbYkfR6MtijnMrq9D5iD2G6Nt9PTaxF7DbRqgvppWB72mY9eYPSoWSHH7PTA41e5GH64yixBBEs",
  "key9": "289W7rufZjabdhezTsA4W8PPzWYQXw1VNYJQmk4u9bFzGACgXW7XkQLcZBAMqS7X7nCTAAC9rpgfYzdg8MsH3XkZ",
  "key10": "35WtBrfvHtKFPv3X4RaTS5Wk873Zsk2Ehn5BUDdRTFPBbPn9NEzkDVg9z53qsAFAWMUVa1kkvDXQD4iMio7gP7f",
  "key11": "5KrAJb21r9dc9WHK7xSU11fA5i2ZjbxdbQySv6FBPhiqqqi3AtXfTNs2Fqvfz4szhhLN9wGsfmSBbmL1iVN3N8XM",
  "key12": "5KxYAjhtY6UFwZJABMmXbrV9E1ka46DZEY2jim1TnQp7eTWRq9MN2XLGZXY8mpVJqovyYogzWWpT8uFXTFnayevJ",
  "key13": "4VXCX35rc7DUTbFNTKmg3A7eLh9moMqiajeGeHGvAQ1gW4w6CaSCSsxUQPzdAY3dmMNR28437EdEj4VzbT96esBe",
  "key14": "2qCurVyVMEGHTkUjLYibbbMfqnCgUfheDcTp6odNJfwcVbi9JL67Ko7tnmJuf6tdqkn3AQ1xV6dxBN9Hq9EcXZF3",
  "key15": "5jkYLE2yZYSrR1HZ1kD8DNDzx9ZS8anUEAWnLLvNedccPP8ZrTKLnu3xSSNhC8Bz3gMvC185cf3i4hfUfKvjC3PM",
  "key16": "3cEHJzVWmWCc45Z1f61v7cpGM23gQugM2X5Nqqw9PUizFHj5w1CzwdsfVhJMWMNDhSK6FQnNjCmX4FZmxeuVhbBo",
  "key17": "63aRmyw8N4LfnLN8YDipdApacDn1pW3SgGA9vK68QyADHC839a7DsNzKYyJHQerh8mXZknRpwfDRfNkk7oNX15i7",
  "key18": "2UX1GyZCEtKE7StkgyxDm7tgzWScxq8Tb6oftLpC4oa8Fhr7eHciCC32PVp3xv4tMX7cDF1XvuUxvU3eEUanakLq",
  "key19": "N3G1n3cSD9EuzXqqDfV65safij9uEXZpfdsxKq47n21HarHchBtPttSNKg3cQRg6YHhmN9aVRQXjyDTKhNQs2qD",
  "key20": "55WW67yM9wUKP2eAakrcNGme2fGJRUYuTyYcAxoQXuRGvVRK8TESZi5UzyPMsqGBuYXdqdmt1UiPRVXxCRKaaUEd",
  "key21": "5bb4pWBqq3ZRanRQm8oH7ZEcjYAwDYTehbQRs7GwUrYsWDi4jMd5xtNwHrLD7bpj8znDDALhjjJLyrgXPAdmQZCa",
  "key22": "4R6eWS9wADyvXiMFQ7Mf7GzdqTndakstCTedXNkoVghrKo6mT4G1PTaJyFwuanGqrJdfHUocdGL6UL1NfdRZgtsF",
  "key23": "2vxUQ16AKGsiXmJef1DdWACyWirEmBDbWYfCpnb18axNT6mBa5dya2ErdShb9WcgfpccyP68bYMSJbYZvHLoUx6Y",
  "key24": "HpzCb8SRaoYa8gKUUik7tjEQzUS9SYiMppdwXjr92sKGzLRXRfAFz2bhPKJse5MCXCXnw8FrmpLSNCKUi4MwWcM",
  "key25": "5yuBMtQ8H4p2iiArwVyWX3Y9GfQnQjwf7zmo4w5qjtLSFBaCQDHEoYBnS41dVhLFmVf4sq4k4vbC6b2AB96RG3oY",
  "key26": "MieooyRQumHimioLrqjR1VAb8x7wiTzMahNYgWHYoJLKyhWnt8dbabKvB6vdPXrLvb3Wwnn2cJfvfvUsVQD5sbg",
  "key27": "4KdRJyKg2zdt68PbhotjFd14bF32qBc7juaUAJMN7VXb9QEmJQqZiL1LYLGta7CmyDQUnCL6PhEhFXvS2Ct9rX3C",
  "key28": "3iM6x38zoT4rUd5nLsZnbSi2zFiDkRWRA9TtnY8wk73hJtEVXqduJVqUvUZCb1SWH5DxaosrHUrppjdUmh3F7T4w",
  "key29": "2QvGMf9woD79RpJKPBtyT3eHAKqtqk58VBqbsiddR8R45YviCGuE5cWbspE3vfBG8d69KsFHd6mb9p3s47mbVXxR",
  "key30": "5dNcGQtK9Wj2HDbco1oEMim4aTZq1CzPwe97Gh28pYUyvYV8QK6hXdrfqLZUMUWDyLHNo7ZuuUgo2D5TXU5FyzvV",
  "key31": "2wsA583bthp2yB8ZDoSaZ4qB8YWRVk6Wt8pjDB7BzaHXrJ1R7rKsfUuWgytDMDzQ7xVKWPShhqVUyvpQhUAVzwB1",
  "key32": "5zn2ntwCbVznLJJMYrRjVT4XC8BAK3CKiKpy7tJ9VZCBJFEkFFAtmpajLLmstGXSnxggJ94Dp5bjGZbffgcE1Rni",
  "key33": "4rHHrh1sWKMXciYyN18tKZJZJZ5WR7GsUKqtrYQVf2Pz8GcFWK1jSNnudRLD1T8QEGEvT7R6pTCcFgZCQZBJEQvr",
  "key34": "5RGJXhCu4eUZZeRKJDarVBZnAVYCrgbkEkzx9JCf9WeyLkTwJwfKtC5TWi6xWynJoAc2tZrVdssr7M1nR3gQbXTK"
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
