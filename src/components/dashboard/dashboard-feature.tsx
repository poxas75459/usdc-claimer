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
    "2D6fnwCDSzLsB5Ci5rwVp1waACGxjmZ1v5oarkv7QFxvGqsdaUFe8CVceKoxLjEuRfdzmraqP8wqDU8ro2VnZZbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LrAokPzt4WGQKwYyuqikk8vfBdDucqUGKQXGATL2Sh47cx6rEAduEoZeDCEDw73yPzguE3W1pZR87zpBMRQznxM",
  "key1": "5B4JxkFHMfdfmKF3MvUEUr8CpB32TE7abUAmrt7TbX4qcFksV2ZpPqudxK1KG9oxEHr61Xc2y3Z4G78uZ5mU3Qed",
  "key2": "2FKraGRRHgNm4bWPS2cZBSS8QCCKCsPWK5zXdo7ui86bJYN6cwe5aupzddsLPxsaqkKD5tAheofGbWk8UtMJnaZ8",
  "key3": "3XVPDBXRPonJYBJ5TKhQW28aziRxkmRQrtM4TcNGpwdjfWck5HPZ4GjKaGBvzR63YbLLqSxmnwxFmPMqUUJCZMEJ",
  "key4": "2Le6GipFYe7CxmGK3VRrkvR5RVkh6Ug8wzDqjTf8F37SuThTJEHd5JCMd5ndZU9511YUBHfQJV5WsMugar9Qvwh9",
  "key5": "5pLiCGViEMNM3i4bwiMJxecdY3RDqBVUTz9d7fER21EHqfbo6hmT31sHRraWZDiTDoRbv2kCA4SFiRRoHpRp6JZM",
  "key6": "5zX8DjVBTWPft3L3Aivsz7aC5vctYPojsps86cGysMkNCbexWtg6iBxGdz7hHzTCcuFyGY5LRCm7GbJX9UsBuSy",
  "key7": "4eVmScENPMtxT8YcprrJvyH7yT4dF9tnVYxjfCwUy1H2xAhHe1AszV2wpn8VLRfLppVpAvbKZB6iB4HaiqJCXXFi",
  "key8": "3He8ztxAb4L5hEYGNhb6GYGTrSouKm1GvVF1rikKBb5aqovJpnU42vy43M69AgZ7iNKmGqsHsKrG1qgpz9sn5MqM",
  "key9": "66W7LWAn7aG9PC7qtzWf217KL5yojYk5cba4uPpoXApZ7QfqZFCxwiFtt8Hf3vgMp2HmrQY3ioSEcAbKEagHiWLk",
  "key10": "5euRXGZevs5uH9S28oHCeXHmv8XNEqG7PMDZHW2rsBPAQdXHTyBiHBMmJ2X7zehgtzw7sEnvwF2shx5aGbiTT61W",
  "key11": "5hKbi1eor7GtCNP1SmKJKZJgXhNGvzcm22toG7vAzRWmeV86wjqW1skv8yqs4uEtzUrK6EussheqbaePQN4c94Su",
  "key12": "3bm7dy8JFqhYRPvp2QhtbL2bUHz95oo2DqP7YTYccFKoHb6hbD1UrjXNgESnkkY7tvcEYEwHRhrsqgzgtt1JXu2x",
  "key13": "49DFoKPajib9f2c1qiLRbf9eSh44c8BnaAoeSFRZv3vWkhAYthFtHQ7L22423rzBZXshQmDZrvQvVnzVgX864ANz",
  "key14": "3ZPja2SK9r93kmMtq33zLZFK8mFTXiGbJNugwS7LAfdKFPzUKS5ZBXwYuDP2oKexTfTCvFA1MYumWLcr48Lxze9R",
  "key15": "3ahH4fGDd8DWraeuQgsstWqXKbAA7VUY22FJVFEqwWubaErxjNmrRQRBX1Uq6ai8EbSCDU2oXZHbbQF2Fyr4QaBU",
  "key16": "8zfy6YfNaZBks2NrLhdFmKRSjSPJtu7pki5kVDW6jT4SX61NgrrAqHXVsTWCbWaK4aVbsodkvpnPF41t6iZ8ARa",
  "key17": "4eg3jRifGKmsBmZmBiXXHB2KqyFmxzhqhzpeMqjstNsm6ucPykB3HiN9TYpwZgt67Q9kuvfLMs1vS1sFa3zwe8C1",
  "key18": "4hV1hRdxFMJp1Q1NaxpXCZMd4BEbkJgK2whXxVhQBZKbnABXsvvx7Rp9MmHF6XR19gPbzwYFUj96jXMpUitRabXJ",
  "key19": "3HX4LVPgbt3XQj9aaZNWSMCUxHzk5eUexMB9L1vXh3yNXvAcJgJFG3snKqyScgrqjG6C2UgXXjFK3jp2mJpj5GNV",
  "key20": "hC6ywzjGqPE2itYokojY5UiiEGTGq1PiSJLeu4Gmh7rHB58QkMfqU7KtKGcMUAuugNesRxr58TRVxKkZvxcAgv6",
  "key21": "5sGGg1j4rWRnkPLU6sNsKQzCTNdQ1xU5D6JrbdCUgKGF9jZ3HTsoQwmNApitmDVBt4VG6FKrkcmhXitecPuNPejj",
  "key22": "2koppGUAiAkaWXxewX5iHzNjVYGWrC7GRuGb7ktd8L7uJh8c8PKFBweUwVpqbdRmB8megVz95emMh7HRgZynj2AT",
  "key23": "2eJ5tHqfK5RbSrEmmdgnAijBhbHsDtyAxtq2oKJWN1dHeVRhqiLQgCiqP2JcwW4KcGWZAu2PUCatY6q5ehBkh7uc",
  "key24": "3bJx8CyTvkXuHMUxoGsqmnDC5dkUZWBvB4m2xqrBMoRbYNK6SEKiLveiZf3Xny1J75edTMUf8WusTyCrCXpLZcyd",
  "key25": "3FcANbibEGEBSaHiNyib3KARaKxKuNKAqKq4FjN4HiWk5GVh1kAUqgYX5kPM8PvEkgnoRrFEzfR7jv3LyS8Q3T9w",
  "key26": "24UKxH4eeGGnpqprk9JezDGotxampFyVGfuQueWr8ocusE1cWjgCzqzkzVUhwuASD1BPi66jboEHKtPx6kmZbHX8"
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
