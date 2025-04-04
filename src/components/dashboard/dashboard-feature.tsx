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
    "43EFPzHizvfW2GQJo8mpEggwcskvVAFtfW6ta6YCUbb8HLXszKxou3Dkc7hijS38tpHP8pLbd66EApbuwk7fDt9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sX5hCPBcvR598krqDxiHcE9fZyYPj4NYve8L18vwsK5ZkGtpPfPTmEZ6GcTKmyv2JosvXeYz6FnYiFYXUvn8v7",
  "key1": "2UQtmkcirvgUk8C82G1iWjQwb4oRftsKzrJRcTg7Mbpt86BxjdiQaAcSMz62viAL6BeYBM3aMUVp19gLyuMGqh8A",
  "key2": "5G7xfvFj7xsZ5pZdLn5Y2HSqMqKmEuCAtiXRxgbtYdwYHWsWVDQ8LpqKWsveYJfbGeRR9n2pMonWmHk1udqrazep",
  "key3": "226NHJWeztDG2AmwpfooWj23hzhknftCpzdv4ZxFeESg3oQmoVFVqq5RqbtynQv3xTpBf2nsGjmYKYRfZjNKRt8J",
  "key4": "23TVS1XRvTWd7iXLiyHib7RmkSGLaMPjVqUBr9UsGSpjrEPo4T2hMVqQE9DE1aHFqchhNuzyKxWXDTboCyUvm8Mn",
  "key5": "4Xix2JQqGyVeWJhdUaN5YyjvVXA8UUfmCBZ3a8KDxcFihjS6Ncivg1Bs67FQbb3PTff3PTT5H4a5LC5G6mwfAAKT",
  "key6": "48ifr8xADVeSe2uWKjqPMdbP1hF4PC4azvBMipH3MBAPd8Hs6TK2CNFcVkR9AW3NdnmNbucSRjE8rNZRKYMVsWmh",
  "key7": "5a5gQxCwtxQ8vvuf4Qx3PsGzKWUUSchM76w67Dw1Fhyw1PLLn41VBgtgqEwu21bdxcXVbMSbWJ9yBm8nim1Pf2iJ",
  "key8": "4fG66RMfwiu43UWhkZ5FevGkosUsBEjJx3WSr6ZRqEsEKrkFuVUCMvJZ6PX4xXE3cwdQg7XSP6LLkx37CvkgfvVK",
  "key9": "4v39RRb9Ke4tb7WAvg9a5wMHYCFcsHo8gwoGGbxmAv4LavM7tShj98ZtELzzumQhP9P4qJatiYQw7kjoFg9Jejt7",
  "key10": "4YGxGrmbBBNGi3finPNoV2XDfrxx68cN71k3nuVazVoiFUEmZZun5x8pPLbtovwfrHmVb8vAN3HiMk5JiFFE4x9s",
  "key11": "2s76vhLgs689swTswwFLf3TffFg4qHUvLjbM3Z6Sqz1ARPcHkJJjpT1iWbB85of4HUi6S6avMGMmm9JrB2VoRCcf",
  "key12": "2AnavXhqiLCYLGicugTGzHW2qqbbamY4x1Tg3JKXt1mUK1ydznUjEFxUkUYo2dNoKUmV63HR5kWwE2JZA5Pcdfir",
  "key13": "tkJtvyNQmzDEBRWXhYtWJvrn35TFXmyJhxo7ucMxBTjt1j6caa5eqVeD7k7CXpm7V6U9J9mJVNDZqwZC3JbC5uk",
  "key14": "4TU5UQwxoi84KMePLYHQwKMxMQpisxfcs6jnqSGT28cQo9hL2G2YxGoKd6UMfvYF5CFWZbCP3vBAGvTaUuyUMr8W",
  "key15": "2t5bPoZ4iHFb9NTa2CcMYTUbLu5enxchxWbH5BMe7c9HU1Vx3UegxyBe3TtgSNefHv7L5inz9vxzVXdXAyCm23t5",
  "key16": "5X3aiwLHRGqiYrspd5gdp9g46SXRq4aqdKgYKAhiHSrs7HhoRSxDF4GbQUsTzYwkHS3viQHjj1CfezSjASHNfVCV",
  "key17": "2hQkdB6H5cmVeoigxFGrWf8z6Bvad8u3udNA3WBwzsnnpo833oqrBKKKuNWp6foKhMhMHCoUhvRVkghVSbKB7kZv",
  "key18": "3oHFoJK2vUdkMwYoo6tVnKStE13CM5jNWo1QHbEc9JKzmrRCLJDVbS82DxsQvhXBD6bKQnNcQTecnUzFMkhpof4Q",
  "key19": "3i4epWMC916k2B9VfPjrauRaSFc24AsUgDFdPttBYCxWw73m867bdtiYs7ZJ5wDtp3TwkHM54EubhfKpEmo3tDAf",
  "key20": "38h3YdQpPgq6GzKAoZcf5qpU8j9mtDEV6P5PBxcRL4HbwyWtLSQWgdHpQmhoJvaveqjna8jHbZoTxJDTb2SiPmVh",
  "key21": "4px7t6as5tBdxue8p7jMAU1mvWkNxvAajixCSZ5Wh7bbGvfqCAvDgzzkJjwZUA1sq8XfQhrVwVwL3H4ZZ2WL5XgR",
  "key22": "52RS8QYeRA6aPUFPwNKJ1M4Mc4M9v9FvHx8QWDH3bn9uAwXkJxaEXSzGF2uZ6RoZX5kD6tm7A3Ag5xH6Fb4U8h2M",
  "key23": "5QXxu1uQnm3xwpu1sb6kMziUee28PyQ9HSCjguRxFaDiaa37Lq3Pmj7C6dPvkVdjKmu1c1sPfhNnZp6c1dibnj9f",
  "key24": "5ZJoKFo3fzKREiiNDYhYBN1QdTSxtDvyTACAnbzj297K2u9mh2DmAWuzQYERCobMdTUqPwLkh4GeKbQsvSGsNr5D",
  "key25": "2a1ihFy2kiNm2Cq4SWWfDhvXSsprSUVLhX7SARMBSU3ziKTmWcYbVAAdk7f4icvY16dAxRqF6UJqDYmtApNZ3BGQ",
  "key26": "4iTsvkzo2cUhT4EeTz6ZEpSaMvgX4pteKA5iYesG4KV5e8uJmg4H9RPKm9XQKKb7KrrGUD83yQZS5yJU1PaVzuhm",
  "key27": "67JQzbMAtDdH6DZMDSP1rUdCo9Lx3gonH15g6h5BD711XAi4YdWiRvnJA8N7nFJRBi3CLfudCjrFr71DrV9MNuZa",
  "key28": "wWnZebaNMUxytpQj5uoZQNUmGsRzzd85fZiux1zz1pfTfAFF5M8MSQZuLcHGLSvxrnBxfXx3P5dfvpKmnDuweSm"
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
