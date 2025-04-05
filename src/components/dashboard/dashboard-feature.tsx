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
    "51ZySfwWFkSNZ81yAKCEEwo6BzcPZHsfHGJUcKYknMiVz2meRcmRZYoUgofs3u2emTVeAsVv63FbsCzhpVkw7KU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WGKvsiQxcCSr8R7MgZ46ugRumPBLn3qqdnDVv8iY9CDKXgRSuSBXWTK8fK7BF4F1MJB79HjtcoixiAZZo8afb8d",
  "key1": "2jFKmmgB8AJpgADwCNBbxwcGeLKw4GzBWJQBMELGAwHavVvigkLbSvmH9NtGLTSocyfX4QR6hJZQZswSJLa96BPV",
  "key2": "2c9fZ82Fs48qGMNhkgX3vKHJ7P7PE9qoaKoiz2soAhnJMEczJMdNbLFn7HPxi5UqKQnfdo7j2gvrkfWnrvAUn6m8",
  "key3": "Mea1nzsGfaSUNBrLffAsWohhTM6EvbMVczH8bM2AZA6d9FW2erZsCT2bLzmJkEubAyXvVwf3GoFfd6DYysYzXAr",
  "key4": "5eqpBwvomMtnJTMMZEpPDSxzErXNPsmbyv8YBHJ9K2anSzf34SCsM1HwEwitbGKPwi2jZvoKFZDYfwWFtTJGjAL8",
  "key5": "45j85G6LAyaPkHERLWAAmtyhA7vHdw9vW1rmCnGXTFc7RNrHUwpiGZbV3avf41tyBW6rmZkwS2sFMitdMrviAYiJ",
  "key6": "2JE8b7UaB7bBo7k2MhcDM59NbBMYyT8ZkhqYWF3yGe8njc4TPQkyiaQxBtySMhkCWLKu6BWoQfcjLUing81NKpQB",
  "key7": "35QjQXFLiMfg61faWvCxTnr5NtExa91vt8VbpCQHBYfE82TWxZ9trnyG34uF1eXyuzVfiWNubpjPyT94MCpJU5E5",
  "key8": "2r1Ze6QZ7Q6swzaN6VPAYCATJs3fa8ud1xJaQLzZrdfePcM2HAdZ8KfGY1VuyXkHXNSaoYAh2x5NzBKpCMEWsbJG",
  "key9": "2UfwsubHsKc6Wq3BJ5szDy7nMgcapia6uKE281GachbU1UnMC1xGaC9hL5r23jewtfTeUYV3FoNTM9rYB7ENeE64",
  "key10": "jyLnRoUBc4GtHG1WfUAiC1tQPGqsjMoZQz8YPTojwRdfn6wquPUyxjAqejLGC4nXnp5rsR6MxJ9KsJigt4Ac4mj",
  "key11": "4wBtgsfDkX2FLHGheVNXBMxcwq4PJM41bQEd1LDTLmjLDmvgKmgHmaLkKYe5jjwZxkGBnr1k1nd3MtbKfWFxLKVG",
  "key12": "5maoRvZTNF3zAyuvqLEaJcGexSTU7L9p47rVGRFgcgWjfQ2wixQV42Kc1QEvDpdjFoeYgLDeuYuPkyW5uaKxBanr",
  "key13": "5RdRANg4ZMSgMpQwM1J52LcUZu98V876PqQXv6Uaxzdo1F8bbZPdeStUbjinPyiPGihrwGPh5d1CqtvT7Rak15wL",
  "key14": "3HL2GEQDETJKijjhya86caLLM4jXDmztKpxhv19uGSPQhJnbUbcrdnddby2DnrsL2X2S4ZPAZhvg1MjrTD3JAm3a",
  "key15": "9DGXh21Drys4aad6DWm41CvPseAsYrVXsVeHD9KpgRM8bDGqmgAbxwgsBrjcmQ2VB13UmztarNqR1A1mk6SQuHC",
  "key16": "4W7jJ2e3SRHo2NZyBuR8Tk8dDYppphhAd5Gu2JSuX7AaBiBn4eWzbu6H4VMvnJ7ucbRfDmuLpQ1PyrAwXDAjM6GW",
  "key17": "5CJYTJySHrc16fL2nEjV1yzeCDQi5h3d2VzaY9TZbcPPsnpdRJmiDDWcQnrLUoKuvBKn9GWr8HBHuxcgqcEY7kn5",
  "key18": "57PQxfm36mzXiexQg574prpvHuVRotoGhg222Ehz2ANBLKncHr9eP55MUyRHBarCAUDTqey2Ticj7BQjkeFksvXi",
  "key19": "3Db6oPRhF6GKmPhdhMsB1djbtktyXjyqwNMvmacV2BNtNrDWpDW3yH2vhQME3segepjeBYipA9NKdUmgMo8YPvwY",
  "key20": "4woNqEpjKHAJHTHPbtUHJcjjEAE14dkjbutyGB6zCtcsxG47ZNhca9AzUNekn2Rg6rD3jyQCJvYtADTGgn7guiTs",
  "key21": "5JiKG9qq4wvDVsSJWdqLuJNXbBFrE9gKHQ3ETr85ecuBFa51FEURALjhFLkXUmvbNzKaza4Wu41J1VMvBJSXbtgc",
  "key22": "2QZr4ReUqt9jnsDSRZggWXjpK2AdPth5WYLaMGEyizw12qkDX9k6MuqFaZu3m5YM8idpL8FrAX679TU8YdVxwYJ9",
  "key23": "RWUKsPcL5XUv1zGJtPQjVaJqaBnRWPxePWkcutUs3zX8FM5UXf5n4H1eP68ms4YX7PywsDnD711VFa1GzH7Y5KT",
  "key24": "67VwRm87yGgur3RpoL2MQqGbFsQB57U9QL2o8KkcYL8nfeTAQeBp9co3WitQ74cGB7qfs2pq4Xu3vXmxjh3QLRqy",
  "key25": "2Rs3ChSowwgMfRvKqgYFAfD345Hsc7SXE48yu4y8NKsrxwtQQRnbaei35LLfBDKMvJgYZBjpe2MpzvcuQK9bMLi9",
  "key26": "3T1mYd3BVd7cxfeT9A6dURyGbMTPtF1EzrBANhiJ2tgcD9nxs6Mn2vsHZBYgtHEiRrhn9DReiMVQAgTq8sjb1jkn",
  "key27": "4qgeVvZMVkvyiL6C82PxiRyHq1DjJZZracJVhneboMfRx6Chh7GRF6A5FZtKVdyAkRa15cSW6obrJii5K2w6hKgQ",
  "key28": "2oHnVmchJCi5Gec7VcRkJrTs7CP8h6HuMtcWskmkVyemwm4Xob4Se4eiftvLuRLaoxuRdieSvXVxAXDoXbox1bq1",
  "key29": "zH3akq6WDAdqAuSPyZWx9miEGKcWRsC45uKakwBBJXNwCmzgEyBF5TW3Sc32g9ozCawdzDq2fAf5ieHMXuSoZnU",
  "key30": "4dPmqYLdjtbNZD4Xi2giXAfN92hrPSJ6RqjTFkvcs5HFzQpmvfsXr7hHcBh95Gz7fb9Wcy4AB2WCP1S7ycbhNMNF",
  "key31": "mqRw2mAxQPoR7shdzH3QrSRXnNYxPMpTTN2TrTeQYCdjfXdtBh7LVikwcMi2TMRbcWzaV7m3up4ZQmyLQweMPFk"
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
