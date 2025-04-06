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
    "3SRrtj5HXmzWy8UKVgN4C1MXmRuJ8LJ3eDc6dGg7zWviQRZnDSLXoHUYSCMqx9Z1WcNonDyxDMNaYh5dqFXWLBEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56tCnZH6UYXdPiy3y8ZZ1ieeVMYie6WJuTqiR4c1RF68zygkKVFTYQZJTgvnyU8LQmz9d4n4P5dPbrzg3ULndPLS",
  "key1": "4HCpsrKLrABqFmJKXCbyLASqwH7CsuZ2Z4EKVSNBFmtbU2iewgShZihE2SydCRYk1jYYhys6X4qtwYt2Y4H65kVt",
  "key2": "233xjUM2SDKm7RUYruJT6Tijok6WS4PS71rgxqNpgUHnc2eT4EvYKLqSFUJs75tHt4zU5oMA9gSphwLssq2nSgfV",
  "key3": "2qVV4CJeHXX3H8iyUEa2FCa16Jaf3h1fyscRaSNFeNfNo3vqkmd6gJFxP88HJDsKpLxr4jKX8H8WqAhCrTFSR14S",
  "key4": "4JdhzhBTYti9WsFqHBTLT877m1bjL9hzzsDAkamn74ksyz1g2qaWbfrQuXsWT8Tqx1gU8TT4RqAcuJkjtijNqWaU",
  "key5": "sNEfpr6okxBZaXyk2wdbg5sgwj7ByFhtdejm6FPGoCkXaRXiNcxfLsRpuQVmJM4iScwKcK6H8epX2KZGpwoyfKb",
  "key6": "USkPwyQPt6frJvFcfmuLt2ZKWJZnYLwXL4Bf27oNiTCPVhUqS3orNa57bCo7T6bxGYT2EtZAq2BCsCNBnc6mpFa",
  "key7": "boSDU1Vb1aun6QQHpXQgVQKmC1Q9ip6g9RrDq3xEny9VHTmudxzsn2mqKsKgYU4Z7g3Mj5iBoEzL4GmandRXHB1",
  "key8": "5puiiEFTKBrkm5cdpDEZu6ueoeMqWsz1unUqpvZWiMyiQv1F1m2qpAfKzb7hmbYmYM25KGAHQ7sAPQ8MJbkiMQMc",
  "key9": "5cVNzWQsnesukJz1C7kJ3aECxG8CR8dp6ESHYmfawx4X5BcUMR9QFfgpZ9RAo8RwqBtFppLjzgzkgPfLNjPH7hiJ",
  "key10": "2ns5YyFW834X3PfCUb6BzFxQkNWyPu3h7a8225Kf2jzX9UeDiuiEg31QyuvzYibE1iTmX9Tebrt6u26WDZAgpTMe",
  "key11": "287pyokPh1eNUDHG4Yq1S91o2VE2KCusKB4FeJoMChj9uR5injfQXM55sSHRgNoT7iyd3CeuHodpkGk4MX2VxrwF",
  "key12": "2uvHaEN3fEbFuv71iZ4rwFjiWPrpkQ7MpkaCZgZL5tH9jXk16Tce17jv7YgHWDLXPPzBQRcvaKrRpQpfPnnZdbpJ",
  "key13": "u3T7UfvQ8ZtLJkC4ZRUuhNCNBQDqWsV3vhEozAQ3pHoYTz1cbnVF56TctwS67xs4yzQegJ8MemAwfk7jx5JVHH1",
  "key14": "4zUa9HwyhswoMsNY2KDGe31exJG9YCxLdq2whujRzxh79V8Xbdqbw8Xq7WtCvkrGcbRVqc16Y2krxXTzEiPQFuoG",
  "key15": "5zpWxJ1gk4SnHqpM7geHD7Yrt9zMrtLEkejez9gP9ehdLUBvxcipqnaLtqvKanegcueox8nNhszfZAesGPgMvLWd",
  "key16": "5idsg3GKdcKTYFo8Ti5xLJEdKEMtvY2DU8Hfo1YCStCKx8uzyKP87JeQZoDucQnjKYnTioNkCFB85ocVu8kUgEHZ",
  "key17": "3oHWxXB755HH1oCzpRvKZkUXw6RWWrzhzRFQmeyE48mwJuS3yWDDLPTq8WQkbu5vFfpFx5xaAi8VcHZeLfEonsrQ",
  "key18": "42QdtTEogWUeMqFsq8nZbYdpAc89wt1zr4tuGgZfD7Dosvdf9xHd2RL6ZTZSL2LEXqwTYUBmHfDPihhQZRkNeuLs",
  "key19": "4vxiEqEQSLYpfaWjKvrxGw5wd8xH9oCxjdthpqPUik644Zu61sQ7DMoz8ttYiTC5aUctmUTj6KnRHiB9WvpP6oTi",
  "key20": "5pW9VncKqC4KEQXpVmi7ZUZ8ah7ZbXGdmPqKdiBNi6qpierrL1HiRGsUFdCgGgGw2mgkhMcGNScfnAShZWkCJtx4",
  "key21": "n69Pcu6gsycFJpbcmCF5eWPAMpPrbj4WcwzFUs26RoF3XN8jrJQabF6seMY61qeDopzBojkw5BxES5VestH16fF",
  "key22": "2DscZfamhcihGvYPPv34xEgQfoZ5bza82dBw1SAAuydP8doyvUdHhFLonmVHdsK4MmDb3AZi4uX37EKywU16mwxb",
  "key23": "2W3P4ijtS5FQWngRqhesqimRRP9gV8AcCY1V9v1BfY58cJMWscdw589cSUuhdKCi6suNYFm6MrKiAeEu9pvXtCpi",
  "key24": "5TiQemGncKzeGAdavsbz96hstBWy9otVJszQDdSLZxDc7TKcgGCL69GU62RpczpEscG2vNygL9NkJ4zzpBpRcvBw",
  "key25": "46SCDs6oEFVLpNaQwF4wyzBCbnR4anrrjoFLp41rRPbGv49NXo4D9Mc1xdkT4a9e68RCjbGXHfPfWUDupXrtKAtH",
  "key26": "5QZ9wFDYKNC1y84uMPMLqZcq2WvyTwRJVUu9yd78gnY6361w3rRqySoii819iaq2N5AadvcKF6Pj8LwXMvMujr4p",
  "key27": "61ZsvccTTwVCup8YLTkyzUQMQERurLejAnXxtpenTGRNqWAv5L3GCG7tqYmH1tmFRw7Mqf788o3o1pJWgXuFj6v6",
  "key28": "61RK1EvkjCAqvFLQSVApGPASWcgd8jyEmtbmG3PbaU1oEC1S3V5PtpHNaRHj8QkBA9Q2bZwkUuFMPj4z2nRYNPX1",
  "key29": "2yRvLSmQi1sFHpUmUfXfGDgsKLXRvPnegJfjSaMqKNVL4qCp62vwtEHF68fvWK9uLHcz8ijeKRhwdq5x7uunu52R",
  "key30": "5hFq5e7ZUqtKmP5zhtRgvSUjDDPNXmiKYyYGMHisdtxMC8TNtycDd7B2w9peeLqh8gGwz7gZyKXGy5RmAAg2y6gB",
  "key31": "3hN5u4AxGw21N23DJu4S7h3nt4mKyhCuiM88D7oikp1vJn6s47MTgcrNQfisjJzbFBtDZv8nK2iSWEYDp2orESAu",
  "key32": "4h7Gti4QGMraVqcXJVRMwn6hkK5iB4PB5BZeLT5eNMqqVmiAtboFmowyDRnhFYvwSHRfDEKewLUdr9MpHzffSYgV",
  "key33": "41PMcBKCAGq5JSH2cdepJauELmYLe7qFeerrDRDP1QH9wyrZqg5BRw3wiESfE4di1czDTBNku4RbJv89KQpZA9r5"
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
