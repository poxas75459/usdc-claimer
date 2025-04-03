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
    "2K2tmiHJHTcw6iBYHMQZdv2HCSVftNzy9NyXpWM3vJdSBaBd2jcN62HmzUboLNRWYySdgrYp4HuwamKfuE61tkZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lir5HtekgjRmDb6iHnGTykJF7m75kBz4UTiq9465wTBkEoNuqtjyDTtyAdZ8xm6YMpq2ddWodX7huHnASbRhtDP",
  "key1": "4bwrksWYu7EcJA3oYqjgWQ1ax1AeGdJ3AnDP9o7T5utppsF42a6MsZxQCjzKUrfFnDDFwPZuZJhaBb6BSQzq2oce",
  "key2": "5hecCP2b7W68TpYHh7Vw31JwxbHKFjdxA1odAQgdAXyTVnx7qmio8JWkRmR6XwxRvff4KAK7kvpuSXRAWybTtVnp",
  "key3": "26c45q5yGKsb6SaW2ojhZU2fTVvH25aGUuygWQYQ9ob2LzbgWahWMPU4jNead4VvMbW34JowTLr8CLnsLkrty5St",
  "key4": "5navhwPBJjXBLBaZBSGLDrBeDfkqyjp5QZoSPrvTLVeS6Ug36DSLRX14TRJKLrs4eFRWLFsC7cQPbHjevezSQF2b",
  "key5": "45NEPeBE9StxHFGG7bHBB8Z8Zwz1jDKV9MgzcDC7ox7MzVUFY5d4g2NzRjfb9bpAnRHMf5q4R8nws489fW2V84wL",
  "key6": "3hLvPkWnUTXuWFAmKVVUDKJazPqnZ8vRiqgVCLM6PTux8qSSs3Tt6Zp9XRwYeqbqjaidw3KhJe2h74PQDkoYX9rY",
  "key7": "5bfCBY87ggM4AygYKhfm32sNfy7eDxJWjj68fAth7jkVo9zCzV61L2YGiar9xbJbPqnBMTbzDMYHXY995NwPqukM",
  "key8": "5pc34yNMWYSXSudPjpak1YhtofT3BuZQJd2cD7e7umXESdELu2CU2d75hrj31HPE2CAFrUe6KeiwgTAEyXKU31bq",
  "key9": "euxpv3rNWdKR3hScUzF68Ed6DTBdbLXbXPZGARHEtYWuyJvma4dBsUnHLF32DpbFvy6hfyuJkn9n1Kc44D7L4j8",
  "key10": "4Kqpm9xNE91DMQvR8dCZA1oqkqjwwm5VfCbANPL5Z3qaeP3urnMSu9D3dhTNHYfvSXLyNqAjDtAMEU7kAt31fvot",
  "key11": "236f4HzZyNAVgcU681L6AVsVGBCJuvfYNNTyPU3HpAKSWQHtm2HfJNWAKrHGwqX67vv2ndgDggvyVpZF6wN1418y",
  "key12": "3WuxSFBugpbKH6TJj7XwB5HhAe61agJtzm8Tm25WkFKcaearqSfTBRShoHu3L59ZsnJA4WgKteg1yiEkcBDBJVS3",
  "key13": "4n9WQLzAnornPRcsp5unPnZrT5v6hv4m6rWQiN1LxCVX2zLjz6HMBtvZ4n9U8QRcTRzCEP8jxz6WETPCZe2rMYBm",
  "key14": "5GCfuvwZ6h1aQsnqnVeiVFWCNDrfhaPH7MHTBBx1krbjyqE27w8xVELnV3xmbPiG3jCh2UPsyaa9UpTyqTtvGm1M",
  "key15": "4mq8WhnBQEhNqZ3JhK92NxchgN9dPeJxUwaTC7bBB7mUSdPcgoECzSgS55NxMxhisEa2Svbb4B6Dc8xr843NiNPr",
  "key16": "4ZjxutFZJB69tjYmfrnbbGWZ8uBnmCNEAqv8BHGr5XLrwkvtAF9mSYKJr3t8nzhfL49E67kVv8XtcnLWdNMAgfdZ",
  "key17": "DudaWYWwxvNPmYU9tX5W74iktroYjPkmX6fm5koYhiGzYg1w8hUXsouG6DjMJNeCq63kFAdG2smEBCsbu4V8ffK",
  "key18": "5PrdtNQwkFeuBhXXnnEouv8WAu42tMnrhG5x3p8fYJ8TkaQv8X652LWGrDmxjks6birtv5NPL6hPJzAxSQQQzQWX",
  "key19": "2GtJBDmLixuoHFmfuNYbxxNfokwSCsSNSs1rDTKgydvfNXeEwx2Jyvk2XsTnCmtLh7N1U8uWvSWPVvLdu9QWrzKE",
  "key20": "3qyMRpm8Tfu7oKMFPR8X7HePzQHcJzWpAYXg7yKtSkaUwzKHLHasVKaDxk9trYSioqR8Pp2fJJnpAnY7BTufN8yq",
  "key21": "5CBisMiiKJdYsEbiRrkfsBCdSoDui3wev45rcgJvP8fRF93CwhZCTRQqpUTyz75uV7ucxdXytCvziHdvf71SpDYn",
  "key22": "2oPfUJFkPT4HuSWjoqSc5C6Aq2qoQyZjKmF9vPQpJCekCDfuDh3V345mrgMtrXHASvCNcun4mmU3o6rdNtadwu79",
  "key23": "587PZewpRwBqHZuGH4D7KPvaCLzeFt9QrY5iKhTr4iUtK3HucjuFkpqd2Fu35P3wh4TAZgHLUxrwBZccQYmmncST",
  "key24": "2T9xqqf67VoKgSAxjiNTr75TKUkVdDN6bnDeiavkfTqBKazTEgTg7VzruWZQP7beXGrovJ35znmQtGKpPCuVErMU"
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
