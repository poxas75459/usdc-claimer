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
    "3mreBzzJpAqQY2aKzcfoDhmRApmhocfqeJd5GaWArw3YVKcbtjRZB4zAYeatCeJ2GCMtmKTZoLvRsDu9i6Q8JFQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGygV8wrrSAqQhhDFjRui7wSnQSAJ1dctTgHvQH3zboqP6mmrMhx9jG9MBv6UFXbue5eKNqZBE8ZJVN7xYYgktt",
  "key1": "2DKhe2YbmGh5sSTv1CpFSDz42EVupZtt5yfDVQHx8CQCsiwxHEAf9qsvBDAUnxMEZ2ta1jJsb6ZWekaxat9iVDD8",
  "key2": "e9KdhKsffUDkq1u6gQVPgBaPJ2bpLdTtP6cJWhbTbtg6WHCqqyqQuJwoMUtNVNjN1L56QMvDeafdsJtGRWhxbxT",
  "key3": "yR42DeWkBpb7vP3Pig8eVa65tPc1xNDsWVQ4o2cXtiJeuSvgLj8zAhs7wFF2kheEHo3v7S2EXoDSFWKgN3voqa2",
  "key4": "Kt3phqVMFhBkcZ4XKkNQeQeN3bpyYjeyyXxSjECW5PJQ59FzfUiMs8AcnfyQJq3jYWXZkXBubtDHhKbK35UsK1J",
  "key5": "uS8HN3WzFehiKQD1gnEcKJkSNHJDnwR1xhTzG5KYT1H1JkgbyfdZP1Cj9Fx2KpGW5zs1nKoPWjvbEs4da17bKXT",
  "key6": "5d2cLJEfzJtDVoAgDXjbpgKkrJRKD5t3cHYQwScq8v4kexhtTYd8M1uPfxk3CcwRmxgSpjFMwwyW7aT8BqAXSTg2",
  "key7": "4dUMPND4rZiTfALpBW7wjDfCPtEwUqv45WZmARUxjdy37zxBexvtWRNscuyFgiTbAhzUJ4qMW37ivac3z82cAoaY",
  "key8": "95P2x1D8oTBSFYZddmKm5qt2TXs8NbnmmBcbkFnwq2HvZeKwoZG91DPZJkh4UFUPXT8hxZc1x8arBBdM1JdZfGy",
  "key9": "2P1hX4ZjRTP9oQzU3X7ZsT3aK4chGxuEgyAJMEbtsFSz7aEkER8GacX3r7SRAnm4QKUepybdDQHyYD9zNNRyn7mi",
  "key10": "3V7xwkSkmwMXWKcGeqj9M2MnALrQd7Ah8hGbkahWuaAehLfvmVjCUEMQeigbc9tu2WP2fd8g1GqsXjMzNeUiFgKC",
  "key11": "4ewGTjyqYErscSMasvJ2BJpKEPajv2bKsfcUEtfTNqaqxyd7MNcbbppX9H81nd2WWXX1MUsENrjmRuE7eS68NFYm",
  "key12": "ajg5BWGTaxW8zhUQ2SS4tH2b9J88xnV4pSVeDyaY1np7BDpt3zpX26eLrqD3Y1r7FCXmeRtEFtUYtEgqqZuQU6X",
  "key13": "2omKmU67tcnmqVyb2MVErmLHhGPEe81ezWs7NQWLcqkevkE3qstmDeKa7W1WvYBzg4rE3cznnDnDyz4pfYgb16SS",
  "key14": "3Aeqgu5dzSBtc62oNCtU4zVwEcAJJAiEUdMDykSS2PhMmvzCwJ1aJ86rbQZPEkrPf2b6R6LmJa5puz3vhGU461JH",
  "key15": "4kKhbD7aydnZocJ4EmZHj7oU6Uuzt7o3XT8nHSHexRTLnosehtwUR6FCzUVFKXe7ZMiuRP8GrFzFiTdwvK4eRqBq",
  "key16": "63USvcpqkdV3BgFUbq3TAsYHLX1JYYyiFYqt4wFceUFPN2VjejAMaviEyYiMGZXg9VkaMKatz3RGAUjmd9jb3s1a",
  "key17": "5pMhsKUqjbTGRiCnpCETvqWdUY5VHN1tX9i8Cw3siUwEigYmUYLJCy9ZNZeRXzs3b43APtNym1K7hZKr1cY2kwKw",
  "key18": "5TS3HtqmxHw1bDxciKBCpg3QBFHd6k9ALAqHYH9MbEStAfqcScZiBUvqrgUxCz4bihkVXCBQAhq5irfiTNFDKyLG",
  "key19": "52PLdETdCVnLZ8MjADbfaEqfNPUnxKZM2VD3qQ5dz7k5MmybaMSGBYcW3mpwEBfx34LxUFhWDbmi4nGwHbRgdmkN",
  "key20": "445Rpz87m1QzrER9nmWAVyAyVsWQ2pPCrrEFSg1vAjoG5qx6yoPXcNGTFJppefdAYDHV99VwHjZahuQ1DZYzPxHo",
  "key21": "2wHvVYqfN1RPHexMRCuU7NDQHBe5RizNyiNXEjNf3nqJdRhm8ZRMNhZ6Joz3JWXbzdGHMz2NYNbzVhrjQ5pUG2ZV",
  "key22": "3YJREWc4G4Cm1CXhBwR4fTgzxm8WinXbYf8jGgV4MTkWHCKFugPNYCcXdVDL8AcM5S4guVpriD4MhDGociXPjrXH",
  "key23": "gVZtHM3QXiP461cqVBSAknYGBk4EHU8TQC7twG8uRf5RTzEnfCxt3Ay9eC9YUyukfpKs93Xc4QR5rKM7srpUho8",
  "key24": "48ozgpTjYoQp1amFgZLVb1BNoY9MdHxAcDjNqPzvx7GvKNRZNvvjLGETGtZAWQSRdPab6zuyZVVQF86b3Z7oBVwa",
  "key25": "pmFwuzQkuzn4GKEpM587Hc7G9SZNW9gK4UMg9tevp9Hg4ndzTYiEmgRGx6t97STr6MKwBgdmYH24KrDmBR473zn",
  "key26": "GrHKTsrCy7Guh44i2zoc61WqfWcmiytzHajBFfYrjTeyyqUHkFWJ73bF4M167ysagZSTFVfx9d5kG2uVCVzCXkb",
  "key27": "B2PyfKwCNfQ2BzfvjXwKEwMzcicVTvT9qNXgmSYSNqhQQs3b8NkcuE5ni7pctTVQ6f2mwmJghANgmZeJgrSsU8K",
  "key28": "4UBSP6twGz3gju3mtjqrwFg9nFgFnLAFYvEmC73nEBjzD9gtKnWKrQC5StPrjo7b98kU9EHkxrxviqfGRxsucwbx",
  "key29": "4ezYyRP7p5XNVezTajp5XiWTWJ4tg5Yi1cocMxMoA4EfbkoUg8egCwCmiVn3MRrMG8vPycNHsn29ESGysWy2XZFK",
  "key30": "4J5u53ijXGbUavexcFfqhb1uGbhZDqrPC7aRx8af8A68VLBP1Ph7v8D2aVq1JFXUZH4N6AL3gRjbpGQjrq6hxYU9",
  "key31": "5DJR62baCPoJwjGcNPfYNhQeBu2Z87LVbMiFXXjMEhWjmS37MWkA3jo9L28pYmPjvxHcizWz5tQiYNSWoUzqo6rQ",
  "key32": "5iqAH8NoDq66mjQYBwBgsdWJnVB99d7y9rApNs2njF87PAbcBiJB7g1K992v3CYZaqALGDuXkamAYaKtjwVJocfo",
  "key33": "2ARY7mnVbu3CpKwvDUZPb8PSATtMfLcwxJ8jLynM6U8bzNFpCohN8PvXn66fLQTZ3vwQNwZjm9Vov6PjV1b6Qie3",
  "key34": "1i9g5uWnGuKLJo47EcpuWym3rq6xCrjNwsX5v5p38SNZCxPDX5AVCieTJcB2jb9RXMqAhR6S4QWE2PQRnFECUtX",
  "key35": "67pVGfHYF8N1cxA55Lu9gQi9dKs7JNoiwZjrGxpnkKy6gvB1YZbjf6ve8KBtvdGRaNxzEbpCuW3uLY1ZQLVBqJfd",
  "key36": "2ndD8AN5opXaatQgCgBHdgavW67RtmHYuQyLEbsusnCX4GdVptGc2FgCxCfxzwqwNwb9Vh7zChYjiyPfCmhNPtJC",
  "key37": "3SJu1PZJvpK4hsi3ZvM6MPyVCMbS6Nqh2Uec6Ycr8BvUZab1FGKJb2Rc8fp99Z2BDgTNsNQwieBP8idWi7uqmfx7",
  "key38": "3T5yM4ZUDMqA2tqJVpXbesG9cL6GRf4zNE8QwyqteZx2jHRFD8zBjpHhwcuMtBWeLi7Y6bi5ggnwD6XJ1AJVdXC6"
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
