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
    "2SrXv3kXZdKTTuvtz4AThUcoW3VEtxYiWg6hgaqZpZSijtkPZ9NT5bJSBjeQiyzcf4kHk67Hyg58mZmCPXK9c7jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSbhih1eVipNM9ByTctAEDHJdog8t4JHGLDJzcqGwDPD3UmxXoqgBoKowLrQr7BfyL6LsWozeo4PHgHkyuRD4mW",
  "key1": "JvmMyTQUa1ept6ozRrzDEKGKXBQxWxEe8QS2TZ484w8RtNqh36rzD2MtgatQcgyDr3HykLvAdiZUXiC1R195R1A",
  "key2": "JfYDQtBmBn5BMSBzVE537fvDVQ8nJjK1dKeZt8UdJUmWmV3rTQ1rgEfojiM4CA3EkpBVSYQQyUvD28CGURRvHPb",
  "key3": "3G1cABwfHA63frqS3yh3Ue6WnXuyY236UMWH6VZ8mmJGrUrefsA5S1vgR3HTe9pWGKcL4wAMwVg2LiKifRX93jZZ",
  "key4": "5PejPs6bLCBVUMHQVnWP6zgeMKadbeFMqLK6eqQM33WWxhGgciiXivQ9ckDiZBprEA5UXdF55rkAwyTniahewPE9",
  "key5": "4H2hPgxMh1DW7RgiUMSnwb4k8qHa9JcLHyLQDkZ3tXCqiTXbqvSKoe78ynKxgDuFuvqUwtFnJtjt7UsX58teFzne",
  "key6": "noKv7NzpefVfkoFQKAd5qdW8xaig1WJrzY4HqFaUHhmoSejN8Kty5wd75JD4ULzB9XFKKywGVju9DhJvvQvda92",
  "key7": "3rQ75WgKcmTfmu9Vv1JTLrm7WEtuLmV4DbS4bkmic2FHebbnNNztsq7GLC2hKco8qvttamZAXhypjdDNX9sQoDdB",
  "key8": "4u9RrMkLYTuMmVJ7R8DDqJ26vuq4cUSNYQFAkThESYN1JvE2iqoaY2qtLvcXcqtUS2d3VBiVamN9NjTexTH2MY4Q",
  "key9": "4Y1DYrK2sq8UAuQ63ab3T9pF8MQW1q7e4EAL1vrWidZLQTzfa11tAQeVEqeFibNJQDvXrPdTGTdTE1L8xDQSLzG4",
  "key10": "5HHPfcFFCcbD3fJMXdBgFatmXm1hqeog2N4UKkgBfwes1LMw13mu87k6jZujiYicwEstDRtearJnZaWEBGH1c6r1",
  "key11": "4Uh4ATkZTaHcYoXGTNq798yS1ua9jdGDYGJUFp8xJmpNr62QQcYJidV9Mf5SMqAnthchHWNhcNaqGT1cpzX6XqfS",
  "key12": "64zCDWMU9yS5CaoWuVRW8FUhPeVEL1GD7SLjJYGWwYPTry7YCppprVM7sC2mKL1PoZNQbUfuuHCzfhQvtRQib613",
  "key13": "3qQqs5AhWnK5w1a9egNZFWnPt6i5teCS86UHXcZmfiVcoysm1ZqtfjQDwkoBfmNyCpfhuPFXqnyVKyNrnWUEbCxb",
  "key14": "5NKcuw2z17QsSrB5JPnjBMkk7ayvx1EsD9nC5KgAzj9LVFFgpwiamDDLHSXb48QN9tiZ977s1tE8aajQxgeF2zWC",
  "key15": "3jVdF4yE53kZs8e1qBU5N8KczmzG8ShZB5R1j2kyx4kZqnLSi2PcsTn3mvy9Fij5V9Y1CFhj6ESDdU5YetsvR2cz",
  "key16": "5JPU2dXVcFwJcXgH9zFUdjB31EKxy4wxxNMqqwEPL9PtkgFK1DabLJozvxRj9TyR1eNCsHZtr4rBg7FVVg6Wkr2u",
  "key17": "5U2cRDazMs4th1aXmzu3uQaWSLkfXmpSjMqH15Fi1E1hEF6pjY3JzMxRkzX4cHyhpCLDAhcSkiA6wL89m3UcJQzz",
  "key18": "5MuijnoZcaM2Hzt6mBd2tCsZLoVKyCfffG2fQ5Z5zV19jNesUAcNkdrUqVd57UJV5ipazYLZ91QPufjAQkfsAmom",
  "key19": "5NmjL7HDuvgfnp7UxzSPtWkdMrvq6c2ANfDe9GVPvupV7LjoMwLUg8QeFXbmMgZNmpLns1BipupeVuXRP6VJsGym",
  "key20": "2mcCTPWbuhM8iqGUoN7kKgQ8qtMUDeB4JMdbok7Nk2RPhQvMfhnjT8jJAwwm3YYy9yy6FAcn3Cgv6xk49VVkFSCU",
  "key21": "53QSvfxUwSGWP2LgE4bJ7SLz717nsCC5aZ9nMW1TN4yFY2vMKzXgKT1X38js1bm3LQ2W36CkYCsYR2A2zpGrRz5R",
  "key22": "35mW8CdcMyG2UTs9aHQVPEZjsux7c1NuVnM6RZ8fJ3baCY3WwuHG9zQ68R1gkjYmkEwKPmgX26HQWYrDxRtufAMW",
  "key23": "3sBCk43hT8Hgkpz2PmydJekNDLzNAcpPCnwRUcDAW2CsTCTQfWzaLzoAMjWggMUuiaxkcQLRJqpeo4jxf8iXYpMQ",
  "key24": "z3yXutq16PwyqFgz9ERbwSgmzvmoAgAKM92UVotb5EVH7Dtuk72MM8FSJxVoR6aBHgBM4XuQkGzi6Hh6p6avRKP",
  "key25": "2qrDuKPwPRWhXmRRKRBPwbeZf5z2dTHVMY53PLVFjLAFTShgLnhFCgRgPLeFAsUrwtQ7hLtZ1sn93fg74xu35yvz",
  "key26": "4eraXJGDZS5Q5RBVXvUbLzGKChXVSSbeJV65CGexigBxyoVS3QrD7bJ6kC5uAJoGkFN8kbFmmTRD2jbvZxQisLur",
  "key27": "2bkZCWP4r68E66Kki4jKLYHoqQzomQWnVUrUrhw1rBjeWvAqWXB3vZV1MCYQZTSLsRU2bjH9P4GjqL1n4ZYjLVWq",
  "key28": "2QLjvSTCKjNWuaV4oCcN2JZatjqJbnyXeuxnFGweM1dJ5rbJwH9wGH1w7QSvP3mWq4bGXWyQMjzuZwi5coBqYQ9j",
  "key29": "56rSUAsWefVrcQeJTHctc1fCoNPf9BY89js9rwAqrsdEYYxh47nxm6TDMykFzeW9RMmvM2kRCitAKdbfJjgQcHtG"
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
