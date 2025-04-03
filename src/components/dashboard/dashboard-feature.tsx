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
    "2LnL1JhPFFvr3BoRHGQneuqjVPhBYyC7LDaDi6jpqxNHhLpv6iDw9VdsgSu6FioxiNP2B8kxYT7FTAVymbEzm86Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgEG6rUKU2154PxZXjmT2XFXjH37Q5uvokPeMriPQrb1GbUFNUCHd4z8je2JxwxzZAK5rxVrMQVwiZcrqKErJBc",
  "key1": "5Ut9Pud71pQsG7EDVTJVUkqNM55Eo6RKYMKVHxuzyVydXauE9A8UMR7yN9Uy3g6KSWitrHhM7HyCG7pdr7QbqjB5",
  "key2": "67PyGaYh8XaT7uyJAxDuP3qWLNKBtcxA4KDc9gKdCDWvkZVUGCqa7KkRsf9CUrtSgJAD42ePu5D7eJ5CZfkwArzt",
  "key3": "46JEu7qBWtidyp1rSYdhagUKxBLRmjvDsN4TQ3NKEoCdD9j9YSYXwoviCFNHNUi5Yt21xcKc7e9Cph59qXLY7Zd",
  "key4": "2UALakgafETXVHcnHyP9cFXkTSFHESNUvF3jbyydqfAKZ5YkMmqmvG4AFxc4k3tBzMYPvysGwTikCCxaRY2Rzfb1",
  "key5": "5v67PejmHeFqGW3LZAgvbpo5BmN18SbKCWahz37VDS91cNNWRrEQRCDoMam32JHNYDRvVcKwd4EtYe94rPCPmL3q",
  "key6": "5NCnNuvqzH12WvMGoi4DtgnUEByAiayhjEvLNX5axzeTa5PJys3rEtevJ4dg5Cx1cmU3Uz5MrNtofBpRaL3SXRCW",
  "key7": "4qRUXfDXnRETGYU6WS4RdkpwXp892uETcPtM1xhfBDYvEhpEQHp2Wsdk9DgnBwNc2LRY769KB5m4Hf8MwHJdbJr2",
  "key8": "4ULaV78yNFsKMqwAXa2RniCoPThTts9jYnvGzs1sbKQAtfcYuV9XSs5TWGG247MyWiviDZApPoLkeN3cNPikqRUU",
  "key9": "314pp6MLYW4xvdsWhKswjh4uepJqynxfpn9Q8kvUqNX7pY4GAnUF7bVs1bRTd95oExRLhTBU8PTywKYFR9deAUZW",
  "key10": "dX6oPcjgzhZGzcyYGq7jFbQxodfD3zV77Bm7MYDaKPq66gNJzioiPv7Gu5HUQ12iq3zZx9EuMV2CBMEsbgK3ZZw",
  "key11": "2MyARkhsAb86afuAGVNSY1qckUzWNEJ3MZD2aSESWQdj1KBjsWkXWS4vz2MK21jewmRDSEhN6AHSh9oKDJqSr6ZP",
  "key12": "32U1sMRvZvtVMnEgWun7Dur65Bq2cfL43nNhPQEeCBt1JKTVtCPBHsxrwQHajWGcwtgWMsSa64H29mo1Z2N9p9fu",
  "key13": "4Hd2wzjUCFYfmSfkYQVHaKpfmkx5ezAvRngcmpqYfN1v2eWYeno8JY2hh4j4VWFmAGQNyqCpARZkgijWZYggtbKz",
  "key14": "32Zabu8Km9LeJTtKkSg9qNejkcvfCtofPfqmUSKf8A464GT9P6g48S7xJqd9Ur2viZpzJjwkn5W3w61EUCNTNQ2h",
  "key15": "3GA7NqS2jhiKCkLAJ4fBxQn7b9cgrWoXrBwLgFGw1Us9wcNbpsk6HWGXG5M2GTBdavLXJZ4rR2Gkvko8AdH15TiB",
  "key16": "5oW15XtuXoLZfCXjB4GvCe81o9bNdrjMst3ddqKky5erjh81Ma3kxf4GqvXC1KzwYJkxZQSjrY22AtVGjE6jUA2k",
  "key17": "5QSSE4cj9Uno4TacFZEpaPxaTZVadt3hmKPQj2QzyNid3r7wFbvAmPGUqyQDj9F22aPWWVCGDHhv7yUg9CYR6xLa",
  "key18": "3EAqW2PdVSXF1yziaFstYK5KtJabbgdMuUib9KbEuLb15AwJYYaMgoZ72vMT3pPb6vhUvWgHopzc4oPAMn9q2nya",
  "key19": "3TuYiTXMCUvFPAdi7L6nbgnDr8RaYihHNSxHaXPDfBTLc3eoDVWvUT8aUpU4f8gwttgsaippMX971kWxg5EyzKQC",
  "key20": "2w48V4Z48Bago2hW39fYV3Ar6URFTgUbkx4iuqnHEBbBiTErkAfBNrnMHm2U2vHemFfoU3WXfPyL3HFttuRVTSU8",
  "key21": "3wxhtGNuauP27nJZdRPRm33DRChQ2988MqwB4pTMYNfoGve1HwCbf8V4t1diPnRMCQCN7GAqbn7X3beH63fMRkJZ",
  "key22": "5LBwu74xSfBnHxE5VfZvnHzz9xFR1cF6nX5ra8rn5o5tq4Bmq2sqVgwPsPNNhXUTBtKk6iDr8PxwGTpH2aRCVpVG",
  "key23": "4q6evp9r5TwpAUrrbbicJp74s2cnTPeb3cBmGLbEUz4xFojxQtsD1XpgU2zQ4fvmF8zUkjLiAoYV6skv8RcokY6A",
  "key24": "2eBayeVqgcHukXz2oc7NVxp99NMoxmBb5wwY7zhHHfYBxN6yXRbR2UBePgcAoj6jdaccwNA56svzg9VXGTsUZsCf",
  "key25": "2HwV3zWzWd3TApo1G1dSJRns4VVV5T25sHZpQqB1qteMVBqbSbSac9kEfWXBMjfDRMu4dXzkaFFr3By2197epvyR",
  "key26": "2EPhKBuaNYmHtKuFqHDZKABVwrFjg6632ZAS8drfTojTiTHg8FcAsRgM5yfv9Du79yvYcut7NrEnaDHmRjCsWiB6",
  "key27": "2o1aXxcC4o9Hj58kx9ee62SzQcwP4356B2n3myyDxWuiTtpQU19LjPVT6Muwns8vaifs8yLAWu2qKMWCFTwsWcJ7",
  "key28": "3RXE837SivguCQuRufhkqmRUh4YetJSoJvKuRsr6jh3Ru5Ea2HxiEuBDmD2j6D339PSGDsgpu79KAy9TLS97Mvak",
  "key29": "28HRCDqURyRgDPf3515YMQsvmbjXmd1y1RNKHbVX1L4mr8X7FXiM7ubNFZEgN3thrDEoMo9EX6x1fphSQdaKbn9s",
  "key30": "66cz8ma7jHviScMoo21ZQEKuGpbdF26iwuaLAJZwpkohhK9fBegbyJGuuoNAKjgPj8q7ymVfRp98caxnCiFSDgMX"
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
