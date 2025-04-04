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
    "2Vwc4gPv3oGyJYR5JNQEtKbKXDszqsgHUMHSEsqBdsEe25kVVfijMaTibhF9Y3na1AbNcpL3pVyaRgJfHGET9JZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPZ6akiq3adZ8vLb2rBwohzhTaWNx456Vz8KBMkv1t3MNCnkNQKWiS5CCWykmEmumhcbtXS1CQorJoNgdoET3zQ",
  "key1": "p5cjAL9U8PsToVTUe9aQeaMYUHS6QwtQeFswaKBSRfkSsq93Z2E97Z4eM4UsDRsukNzzkZ78f1pyTngWwaxURio",
  "key2": "5hwqHC19DSnaHxzwgzHLaS9CN21kyjUtt12W38HEDN6hUjpicLsWNdFpf7ciiyxdQRLwguUGeNuRfg3PWsFh46Qj",
  "key3": "5GHWwmUSTUpHss3e8d6ETA1Lujy98vWuA3PBwZknUSg55UmQgYK87pThvaRdngBfs6a1KVmZJaNJLSm5q6g9AUX5",
  "key4": "2auAGcJCGExb9Ybgnuy1nEpvw4ZceAR4EmNCFPiRHDJiHQo1ce2be9c8ypyzjkMsuDa1V1ae3BZ1HEF9WL5J3jMH",
  "key5": "66dcabFKuEUWmFFqbiGhwPTnhq5ho5aHj4DuavRov5SvNTVyXTaBc8BBu7Bzah631RJCKa2vAN3jpx6tqghd3JBb",
  "key6": "5uRgFK36S1219vi9FbAzBXPshwRFyZJjWcgBb3Gkhb1y6x4XLj3RMnxf29MkSFfoVAQ1w5bBDynwJopvzqeX84cp",
  "key7": "5BBMZj1joQR1uQUF7yAH93PAgumQo4btGBUM3yGA2oUKsPnPBTppKRfWJH7qaSMJ4na8ytpHnyku3HED4PcdPqiN",
  "key8": "55MDdCQfDMEeCSKvCzSYXKPcoosGAwZi2QPGMGpJ44GFHNKuuAzw6XrK1gNKX7JYpCVmPDEy63VsYhvUVhEn2aqq",
  "key9": "5dScaZ1JBctNoDypLTyXLNKBsYZAYW7qY1UtBfeVsVNhpBUapMsJLLJwz6w6Eari8p4UVhFUiaCxariesapn8dif",
  "key10": "5HydYVNXAChpvu2D48Wom1MiQTDoiYFQwo1gwKixcfdf6geZooPJVt42aLS5v7kTevHt32ymCp9bKzPTV4af4C6P",
  "key11": "67R3L1hHJmf4qicB8MTamYQZwW2oECihnFBHxKD4mWzW22oLR2pv7qMUe33jzNzzEdyA1amsRNUKf2giZ6NVbcpo",
  "key12": "5Zyi2zuBURHBu1VMqUzxB7hagDA9wFRdegVEZabQZio5DGV1FmafFix3M715vYyBjkEoGfPuBrE5kkDwknGiTX9C",
  "key13": "53nuRXRJtdfySxJdtYRvYvkdFJSpiNY92rmEypWQCzYWgkNCBNXUqMR2BqkCX51n6UTEemSvLnvh74G4u1KjiQfo",
  "key14": "5WhnENqr4npuUWq67ijP4b7tZvB6o1G5kQBau7bANu6a5r5qckZTqWLbMP3EB4xYJwsQ9Pzcv1D2QEahWuffXoyU",
  "key15": "2nzz3TWo3XEUhqURXXKmXkfbv5yPiRpTruxjDLBM2r83w3XwAMge238hBo4pJv7YD7CiFXPUMoKUosnQNG3yVwJC",
  "key16": "3J3weR6WA8QMreiB4G1J6LxvZXCCTBkuaN18WJRtPXVLVFzmfX3PDMHTd7nBYjv8SCJZBdYP9wmfdgCLNLc41VwX",
  "key17": "4bpFJzSFzQQ7sQdNAKEbx3LTm79vR5eqEcc8mnSCugYF57E9PFHQr77ce3ue6qMswy4yuEQpuMcAiHdLoVsJJkTV",
  "key18": "5urVEFG14mGAtgiW3AneDJibxvYMJJS5rAyRd1WemjikUqXBd1csy3DJxT8jCvgXAEHhMuY7T4wK1jmgXWc6CwiL",
  "key19": "2UkPkCv2P44ckLPhMhbESK2UXN9uNJRPusf9E2pAj41daE65ihuC8ydEasWt7888rsHpT3jZ19574ffHLWroChsS",
  "key20": "45XmE6r3wtWS9bmMicgBZVnWXdMziiLdxw8XjgRFEUjtvzs9c6fDtSott18pWM1nNfQ4e8TUXHqw7huwpj3vqkBW",
  "key21": "2yiTbZ4LnJfmVeAaBLUfmynJaMk92xDLvBBenNsq6RkunSiHphsUsKkidEnvxR7HRMc3P9rKcP5QxuRFJnWWRqLX",
  "key22": "RUATAwFsiF3KcX8p7UA8CYVmsRpCitsWKxHfCFYXZj9tFW3rNBxRR1Z63Nd6Ng9HYA3m7ZBmfgcgE8dirVFeguy",
  "key23": "5Y3vHjj8BierqDq3AeGhHCRzgqyLdxQGGmnEQLnHtG72Rg7nvMKVde4NLAe1Bvmmr3L7Pf6vZKe9NH8Kzv4J8PAY",
  "key24": "4B277ESHKnKjfL63KdcPrquvvrxY7tipgahxdJVJz47H1zxy3ZmcpqL5QKm2PrLWWkMf1KictDeByghexajvPi5h",
  "key25": "4c9e3BpDYx1foZqCgyPBLGUTt6hJQLBZniRHLuYPzNseCgoPoU9VwDe6TddK27G2rVNhFp6sVQ2Gzepmq4M4wKoZ",
  "key26": "4XyK5Ly3oACitbmJ9HbvhxTsBdJhyzkqjj5gFwan9ZqW8EUEFwsbstUz7YPNdB3KPupGPDqqeyoJbRgngnjHJoU1",
  "key27": "uHwnRKL3gioFmJQ1BfHWmjV7SgQvSqLjTnVpzUjnAgMjrbRsqccCst3NeTjMpRyc2ZLPHKCabMUjLaug8dwv7AK",
  "key28": "5yJ95KS1BrLK47sBNnh8jinEVQaDL7t2281ssuXkV3XZjBZHKvpcAMroZUMXJ3zqHdSs7UE3iKifJ582yZJpu96Q",
  "key29": "5HfaukyMCAnfzoo9MXqZFEeHc3GRmAXrHS47EgSHsnHgtJCMdyVPLkRtmWB1icfTkSRScbWwRUuu88zXSdipmsFs",
  "key30": "4w1CSgXPh1uNz8MwnTAgRy1S5L9DEmH5pm7VoiQaPES9CQ8MSPRaHS98zQ3qmr3smUTJYWQomYnx1KNEjj22QKkh"
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
