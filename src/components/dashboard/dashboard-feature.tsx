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
    "5yHBzjR6Q5PmCs4qkcm9N7VQn82KhcmYwaNiq1LnXh48mdhehCsFaCETo6dWnL4sf4pGCaGERUUYfo9qGzjEy9q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yRzQam9bakiwjQLTeuLS69RPrpiFsog6QTWArt9doZzEERNZtbdCa92AM2aFEASXXjjbiML6WiemankaQZ3wNQ1",
  "key1": "58seq3wSgACR1PmESNAp4nYKqnhR47kY8Ri15TFmggPGcsKdRvCPWdsphbN1uctVtFNNaKKxUuKCVZf64T35QSSn",
  "key2": "5cubdcFrzit25GNXdBnGQTCPtwPsea9rSSoYm92wZA1s7vxKR2PPnUjz1J7vD2KGi5RQa7FgvhuzaZHjBK2z23s8",
  "key3": "5ybxANUewqeagkbXgPKHHjGc22djzHRitu1LCQzRwjnnsxzxPATmSQx82a351xmaGjAeCgau5LgWnCbwjnLEVXLP",
  "key4": "3i6dsAXKoWoaKn5CbdVJ6PjnBXNs9hkyv29YQChBJuybpnAwakW3KULxSTav9Qpezc7gLz8h3XHmaptKi1aDMoQQ",
  "key5": "4hhytR9ku9Rv3db1Kcv4SPEFDYDDavNAZXohE6sSiKEPjYDP8S4xmMfQH5RJHVxmYgX1ig7WoJCrnkNvK57iVyah",
  "key6": "2FPVy33jJWh9WYox753L5C3LqK2RSRHUbaDFCVW9i6kSNDASUNQsc7MeGT4wbkNpGGgrMP84L5ZHbhjvwYsX9bnx",
  "key7": "4dn8nwbn7zCzefmSGFFnC7cAQyPjpnvyMmfqk5H1SfLsWuCoXBUsz2gXdPSkn2XEaKKTfgpoeBkSaGf3UemMjrPb",
  "key8": "PLSFoBPDNgxztYm8odThxv1jWJy2H4VSfH1qriS4TaKnTckVHuXXiSojbP74M1gwwzxM2abN9MjjC95XY7nyKV1",
  "key9": "2Uyghnsb86LNm8KkPWkCdjo18ixANbKAPNeFNiY2VM3S1K2msXdXHHzGzdkxGR5vYCtQvwaWofAb17X38cTd5FdG",
  "key10": "4rPMr5xFBiZtP1uDLKZL7Zcy4knv74nXnN2gV6u6ByJe7T4LjSSHKoheWsUFSQsysnmbz78VRGoxVo63S5Jfa3w4",
  "key11": "XQEGwUYEhHHXJFy7uD6HjSjaGyPjCkAiRxTAfgxPu5smByZG6Re8egn5X25ymn3N3uKPh5hHMc4QEzN5xMRL1PR",
  "key12": "69tcW9UfLgr4vpnLL3or9JSd6LygYD6Q1epA5BWeNbuxivqGbXBKE2TcwpQPKcT9zQCQTkMr6exx3nPcmc6AXLi",
  "key13": "45xsV47VvejeQARNejYJ4GZqdwtQZzpj7qokPBvMHbbJnKzwKREYzBySGAZ8D3Bfdu7zZRugnpPnBQDGuKAYo8nr",
  "key14": "3Jaojhep3HqZ8ZyGcpt98v5yzs51JjUcRp2dbfmSyiQvDHBFxALMACZJVzrfYaAhbvoWrrYbDjrmpz4HuZxQrwuW",
  "key15": "3bTJ34aQTHuKPPH8mskErXxKS39eHyjbD4bZnKMoqQUPJgow1yC2xfRHdFz8CAY6ofLnvxU7MkTvJqiXtPbGVKHZ",
  "key16": "5NpCyD8ArUU7keowndZXuYDSEkXuXMSSYUbiCntJSSLG43cbjVsUNkQqEVRRo2rJDyqWoATmd3h5BeJDKiotsokB",
  "key17": "3HjnMrUgt723Xj9K9zMHW3o1aLt6mkRrSm57uAd5ist1gqQr7N13mrtvGDuBsv24EahRwxQWcD8CL1gHHWEjixJr",
  "key18": "32Lj5jtycYRxZpGdqPuuoSbVSGothsxAvDUXatFkGxuvUFoThRTW6cCZywSj8YCZtZYYXdBNcEUad6UP3VfvYY9b",
  "key19": "4LtM4nUKemPhjPj4xzrxTjPFb823zXxk4Ki8Nm8aC1bkuK8wAzYF3enPSfUxwdxE89tWVTzuzzude6sE7XDtkZkC",
  "key20": "RZ1v2A39uRpbpxX1zULeUpoVcrGwtM1yhbePwFDkm7tHnHHokM7jaQ3BTb8XNYqAxXfpKzZDsUg2Y1FARxohDyw",
  "key21": "2pBW1Tcgu45N24NnGmM9wo3FVArmc5fXFcukVFF5Vy8kNL31Lx8CArXURYoa7zJ8GZzg8EXGeuSXBMhmxbmLP5Ei",
  "key22": "3jaVgRZq3rvGHYmAvc1H2gnsbG4tqodgRGmGNGuqSvzf6c6bxccjdSF4CgyijUbWG2RMr57LgRSHW3rxDqEphUQV",
  "key23": "5c2SLZSHybRUjE5YQvN2vthhBDXkJ5KUiLVXxnDg1sjPHx7VtqjaCWUPVuMVdeQoj3bN6kNB7V8BRe5JSiKTBFSD",
  "key24": "24vYbTwznZd97ffcKjaUkKE9wZxkDzhvNU3DVeHRsvfT9u9KwFKaUaeiideeV2trLhMFcqosWQk5dKcNwMxhcfXU"
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
