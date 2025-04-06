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
    "5WaL8zasPK1JkmVVdEkubYWc8C8SsUuNHtwavB858tXFdMLRA5UqxmhUqTMhLDu4zdYt1M9Rx4ngShTPvaDMD5M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7ubiMWCQk2DSAMi374EZibP5gxNnYP9m5VEigfJofckdBjHwTUYyyF9kSPsJrEPPo6MeSqPYzCWD236n4gKQuY",
  "key1": "Vv8RfxQLeMrsxUx11GRpFdzWuuZePbPGGXfD72bV58tzRvJWDLhvyyMiWzK2yPuSZss9phx6twCQcG41TeJVDxU",
  "key2": "4XTNZobQ6L9ocyir8yTky6MvvqjmXKtFc1r7377wyJjurRpWVdqBE41xQvoT1KnjwcDCwM3b5o686XZvcovXvLgA",
  "key3": "2fVRjBPJ9GPB7JKMcH9VFTp7qUeLetWdQeKhYbr6v8dQNd2uAJGtdR6r8dQPS1wPnRiS2UKvntNNnUJEYGbcChsb",
  "key4": "2MAEZLDTx7HRfdMZLjTQu6AYVTPhj4NbB3ViAj1r33YbAGiL8jtvJk6uHcyPkwuSWAvCzxdz5fJj9yWibeKUDYSu",
  "key5": "2fdKEwSjdoezZSXENoRBmiM3Lp2o4fT6qUdUWvTEn5M4ViXa4T2xz8fV44qjKf3Fedb98uXU2y8btAcrPEUKNq3D",
  "key6": "5rz1imVDPjo2mDqf32P4moufdq7ueF4wb44hyQD7SKWshT34rYzhwTNV9WkSPQHE8RWhbR8QDfaUa4ajGub16RUR",
  "key7": "4mrMbiebTPVa3KuSRvCdabUnqmdmnhij2hM9UiCBhqk54ZqgH3r4zvCTLVv8NnYKhCvdWodXSXxwQH4maFywbbBf",
  "key8": "2vnSDtpG23gXwwQjxiBurt9QCeWrfFziCYksTcZD5irvKjWdfKRoYYxfyHuXh5pD9xQP7ie6qZXn92rUR7kuGeUR",
  "key9": "3T4RFLPd5uSqaZb2CGXKQXCXoEWrPd6r3LWLp1uVnJWtHJX1zZ3USEQngnk9xYhJKSfdmuacRjNqzvjwXQDmjmTr",
  "key10": "5KizkPDfeM3evagbUDHn91QfzttZhK6uGuBUUSE3S9q2yVrXe5Vgh2Yvv4bLEpP98qvbnk6VRVpMNAXURVEhUMj7",
  "key11": "58Cu8axofBVypmH3tue5KoCXFrCc4B4BJn9H8MMdh4tBqH9Gi81nBtbnEviqvNqtYU6oTbDM6WMGhRDwyXE9V3aC",
  "key12": "4tijsZRinde8n6KA7G7W9CNdW1ovc71hFMgThJV9LNv5XxRQr1rN8z8PJmwoZrTP4VXRXQuaqrFLJuXvkHDNdUq3",
  "key13": "5586RxCWQGBtVb9tg99wGiCTvtxTRPs5KLmZstDvHHUhEnpe7i66NKi7ahPzV84BvUdEM9rX7NKVrqEhnQSmt777",
  "key14": "vKuY8UHdd9Nfd2xbTq4qDfK3UPpMLe7X4Ttw4tpDbGd7EzLaBGQiDCKyenav4extsDUv125TJdw27cRcMsoc36F",
  "key15": "5yCtQx1B56o7uAGcC2wcZWxjzPjSvArqawgPmH97ggVNL78hpBbgetpgTmftyHDfQhG25HeDPHXLRF1H9nk7n1oq",
  "key16": "MFhLrrsWerfSitmqmAWUoZXfVGCoXimJtUqXx5Gfh1BW2fn6b8yTPZ1S8RF7kuoHfdrDMbLAdv8avZ21mdrUArG",
  "key17": "3NpNsWe6VrALo2kGwuCF3AXRTL3eWWmhWz7GSGP7848FX76FXuo2PdqCyTLHHUY5jRpYJezg2fFiNwhvCE8cKuy1",
  "key18": "5VktgisAFYALJwUWPYKrugS5syMYPPWQktAg1hxBVes85Tz81XD2kYcCnctLNfUKd8GUQKQDwBuzqUZcnSwQZB36",
  "key19": "2bxvREg99ck6yj5R2PqE7fkiXtNJAnapJ8oihxhyzCKCjqc4WYC8Hh116zzrEt3uzZYnXHq3C1p6yXnJpDJ7GYtG",
  "key20": "2JfMxdcqXEVR9rxmfoDLGdkd2aAaiyu225AVozrHLsHq5UHvQSuMENpzHWBsUK5RrXLpj9KNkdkn4pZRCthnsCct",
  "key21": "7VtSENihgVVLBmmdV1zM6pJvg4kF8JzpJTeWU4RSMqVTQumD16TnuHedds2RKpdKu9axwxo8JTGT6V1cuSt76Du",
  "key22": "3TemnUHbam3jV78kvctb8HRoCc5QE6oTsRgyZeJiHP6JMLEqmVbdB6KoSC7faEJEWPdgTnJm9JqKeQzH7k962PfJ",
  "key23": "1UdT1LDNV7wGXNdNp4po1J8YgFm3gHL8R1DNd5LcuAK9z581s36fnXaiprGLXZ3tPENNNs6T7yCvYmgmhGc1TUS",
  "key24": "26wXJK8cKdp65hnssGdppheb2Ti2KXSzDXcMUCeRJFDQoQw5rBWfLK8fNxdKjoRoF3KH3Mwky42uATY3RKezzg6d",
  "key25": "4TqTeKiNEU2Qt3qcgFstAk2uitaaDgjYcFFEPpSFFGv9tp5nH9Bjv2JessQuTyXXZvZmhx21Hm99WGw2t45vBJD8",
  "key26": "4kG23xkoQeuZQSYub8prnxXRKKsrZCQk2U7wDvh4Dcvy9A7riV2GSJrtFDGq9rW8U9fkuBMFugkRYxAs5cxBq8sa",
  "key27": "2xzLtDKWCFkrVY4kAAVtKve63NTa7hN4jvvJp8Jw5dVPH4wQssGNKb2ToUYXfvEqsPg6b8jprwWg475NZbUumkGM"
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
