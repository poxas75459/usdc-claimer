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
    "wbL9Cvmr9umNKGNnsPLxEBkwQpeTBuLKKT4aDmuGgFWSyhMLEh8WTath7rPmgdTCNGLVG7CvFxnuoiXMrSm6jU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gyTaPa15h3Lpp37uGDhgYYeqmDLh7kCeHBrYtptqUUAbKSarafuAuAYu1TKqvZQ13MZrxfZrUP4bn1QJyUTaZGd",
  "key1": "2BUT2w1N1u1rGXfnCremyDkgbXayjd3Hmdg59u2MrdjBvVwvzxpm8Cs4AoVGsZUCouBANYuoobw7Cy7TZRCXmEoJ",
  "key2": "3tqEfbUHqdZV7j29JxNjGJJkVKB7zsH9i9haezjypMXL5JPssozJ3Z7ymXW6Hn9KVz8XqFo57rppyNufBbde3xJC",
  "key3": "E8szB1DVq8BN6tA7Jqt7wM1AJiJjLNYVm4D2UUXYQgsW4B2AdTsec6vhomQoWsB2nWChCY9dytZVH973ibBVUEh",
  "key4": "4MafcoHLkM6CKDEBuUCHD5WNe1xNq7p7ovuxo7LuNTjApbKo49Sk6SWesgCWVXVbC295V4jvUga68PWWVqWFppBX",
  "key5": "31vi7QDyUHCF5ELh3n1zQZ35VsNuhYztD69rCrTh7UEPuar2fULSWuRWnntVqBi5D49QgfEb5dT7JRdv7Z5uWViG",
  "key6": "2uZezKJH3KvA3pGcPShNfAWANnJcx17RQve1iQWH3f9EyPv1SLXqyYqX9Ypz9NivM1z4EKhP3MjfkdHMgLiefHZk",
  "key7": "CdzyQjMByC7QRK55FLDL9AcDDUDfrbbQHDg7YwnkWboWLPPtXEfozNVe3rz86uyNLj1EfyqGhKqZdAMTxirNs86",
  "key8": "2s1xxy6kY3kLS2emnmrtYWVoSBN7nqo3mtvoHS7ziiUcTtUrYn6ZxXmvQ44osfhT6iE76a6G1PLSF6hSyBCvkpFM",
  "key9": "2yvU9MxfEpArL8JdnbfBMgYkmbyWqyr8QdDHfvJE8YJAt6GpfQsNetHqQuFgjsi6Ri16XFKAGRsiDFVygFb8syeK",
  "key10": "4UgqzyGG2sarXFJxyTuPpEn9qnjMKwCyTXDxdKMbda3wqcdnNf1A2jUgXoXVYY4ZNsgSAsjvVMHHoRf4X78oAxiR",
  "key11": "5cPhL6knQGrocWs9Bbf6Tq391USvxkU1XzjWasD7JsyPcWw8xaGKSy3X4RU2sc33Zz9MsfpcDBvGF37SZwhsocSD",
  "key12": "KdZ3HJ2AzHKc4WuSx6iPwzyQgUCgxqYwZNGRUsy9SmUYdLYUFzNXmuc6kjJXERHPRAfBC7K46heo3cGKVz6EFXn",
  "key13": "2U7XKocp3XVUMjoAAMu7KUUzyY1b4KvuArfCRtDD57iv7U1mTV1cJdBkqUzBRCmBN5ZEpVKNybVXcKNXwxH4R9rx",
  "key14": "2HtXr98xBEbu54HoTcFkFK4k4KhrnyCfmexRtRVrY11GTzcui3H9nTjpMxZrw8H3yYmSx91PBsn7foHc3YAtYMro",
  "key15": "3RtLyTgdKXynvRsEnYZwT4SvE8ishzmn4BEBKRpDCSksMPguMSsFGuKtLNuJbE3ipRwhPcBbSizWBfNFKUkKNay",
  "key16": "44HpitSEK4H3ys6EYeCh6X8dt2u2oPYV7fb255wLW6SZ3ZYHujjMbxie84UdB53vCRENMVf9bDNqJXMqkeU6CkoZ",
  "key17": "4pe22vzhwi5RELgwDtXr6q5AgE1W2R81vQXNwBPBEDrGtc8uVjiNQNdxeRPLpKHHxf1TKsJtksqCHsvjtee9Fm2U",
  "key18": "2kewZVKzxjX5zo2rKL3pf3WVrBuVNAfqFamUBSLZM71VTC7q5UZN6JuSAgMT7XC83GJ74f24wPg7o9a2aGTKC67R",
  "key19": "3kMGJ7msfxMMBZh5KzNo214DBT4ZtgvDd46cziRmaoJLkF5aehbAJg9aXAC27AN4fnN9LuLZ4VYU4XdAhC8BD582",
  "key20": "z3dyCgDv9jcko6kW62aXDFDEXpWkHgeXwR78RokLUJZ4Ee436vPEt6YqvErmEzxTZNpVjzuereErZJ8RdYb7Tk2",
  "key21": "4EyQx87u27vtkKsbFDPSRPxgdUD2PpP7ayXGNfMmhmivB7sGn2468B45ooMfjRjMjTGBjdmdTrtH8E87B4DFRWKr",
  "key22": "2hyWnPQL5TCZPLbAza1G1vGNFPDQsyJWZwCKfcWzoxTzrFsRtT1rsK8TZGLptVESMxzXkGtPpYBaQQZuc7pA4qae",
  "key23": "3Vmsuqv2s9uj3M3xfFXqiBwwp1oLYkjc3wYygpPYJjFEEPL7gXDrftsdn2Wtb82aFBePx9yqZAZQngkiQXAMGhHs",
  "key24": "38a4acQbiBWw7zJ9fBySvrPcxHUrZgFi1ih7aKbsu5MwS2Qdo1bo5Ztz2Gw7ihhM7rBaQpvDqH6Fb1GWmJB153mL"
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
