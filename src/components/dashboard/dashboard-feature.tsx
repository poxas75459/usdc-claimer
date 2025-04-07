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
    "5SZN5tY4JtdZPech8TqeHYAPrEw4YWiHoDLwu1qJYMYfR9PJ9jY4CDxd2q8hQ2CLAtXmxea25D21RmUoBD9UAwpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UUkPvGyqP6izYqSDeaUg5T96w3kkAtXEppX3uZMPbE9rVKHugpyaHJA8nhkTihN7ToDsTAjC1jm5kuNd5zswvrm",
  "key1": "5rWextpR3oELcyDyw3nY3JxfrypCjWqNztyBwCkNGV6qy1Z1PgQLsBHYSRewegsi4jqzUPy7sYvqWpBvDbKdssRw",
  "key2": "45JBGqxjHRUKCcdqBU3RQG3guQVPsVX9PwzTHsk2QVgVTuTisry7kkG2aKjcUtDiAKFwwC2j8SkhfbRrMfEpbhwk",
  "key3": "ceWCrj4Nmk5L72LDKVCLUDdzAoij83617A5G4n8y9rX8dFE5bwjjtuHCrwzhiFTagq2N7ATb6r3XSxyzoaJTtiZ",
  "key4": "2hGePQcbiQNzBgmv5kkwru8YHzxybrT3KzHF812k6oV8bdn2pNABy6B4cFuPhgbfraaHgpMBTvq6FrQrWJyMRgt3",
  "key5": "4QQpBNQDsAH4z2wHXpAXwHNCFSW8QPHAT7SN1Hmwb3PtxtziWvt8V7z6RohwLZPY56dgAvCa9okpxBCZqoVVBqBA",
  "key6": "25bNtQycwJKvKfj8d5iB45CFF4u7JcqZfoanZg82F2poGWYySNrPF5wqH7PU3pU7Q5QWFxcYm7bgNp5y5zGd35s1",
  "key7": "vj7jzHzacrrLBE2d6HHhCaKjMzfk7pJcmrSjaGmsBabhDGw7CQxhmzUVFLmBvFYQoSHkvnLgiHQyEhm7Sx74SNv",
  "key8": "2MgPcb8h1LFdXrNbPxtpWzGvfZuuSpg7nhbee8LbZNJQa6DakkaenyeXfdMG1S3FNAUhXUo4DgUzsdY8bwVbUDfx",
  "key9": "eViTCQbaA99XV9RRg4JVpCG2gosfTEFP8GZjJmV3FjY6w976VMAWJ8drPxJCUxuzTDpViGJhDeM5EegQEVr6tiG",
  "key10": "2nZ6PFCcKD9RvRjdnU44VjcwuufvBCsxYt6TEHjSn9tfwsmMidpuTMKwB4VZ88NkqiX1H9oq6ioBBPAuvVQGPuKL",
  "key11": "LwSgN7zbKF9oe27Sd4paogtXTjGPLpHkcT9LGQCsVYxcQ4ozQG6FpwzGsaFKKdpWX3EerHa2wnmPZKrmnAA4Hjt",
  "key12": "5iXe3hPUJbT13hArUTRbD8GAMTwdxtrXwt1YSuUAfEVWPY9XFx2jtp1cvsJYPm8b9aXZfmCkQZF1e7PeVoFS8G7M",
  "key13": "38fdZoLGU79m2SYwbokiG941VJgopFHvbxzcXbC3kRJYVW3morCbKHaDx9RbqZyZBDE2BoqxzZXGGwJQrJfaKwk7",
  "key14": "3uMPtAzy9ojTrKm6hFcAYHzSdXvNqv32Yu1umV71b1GKvV1qqLdcauxPqrNS9ZoBvKeEjaDwBM8HyE2c9DQ7QsDW",
  "key15": "4YuEkQuN6WabsgANZax2TAdW4HyFP8KEjgLECqWDevQk6jXE39s8kSQhz36L5gMiodrWtey3GytfPRp31GcqozqS",
  "key16": "2PxgxNqC1o2ydDYjneLr1yBwA4ZetphMrLydWuwvBb61btAeVCX8nFeGqjX8PHtnuCC382UW6LcCzRvfkYatWG5L",
  "key17": "3FYeS5paZ3RsKv3QnWJ3EsMo5Q157EXJCWhujEAyXWP6WGAJDRCw2ZdJcvHruuh6sX31zcsVcCchcxA8WMS9guMd",
  "key18": "27WSuvXnztfRYeToEzs2sEYFVVhNaYddsYZkzgMSmnF57wZwwu2ZC1T4Z7tkeUHQdGdUkYtwfgL8fiR657inc6Vx",
  "key19": "5SqSWTCvQezQMDT2TP76FH8FS6XpRk4eyPZna1MLnnx9YJVKzZEg2kBumdvamdeaWsJwLmsaAL8ZjfhKid4zVemZ",
  "key20": "2vSoZvJwxdeF3GyC9oZTjCJYej1sJhzLUEDB3rDGw2q8SanLycujjDHPZQmRgRHX6CfAk7cKq43bMtNdmsjDzY5k",
  "key21": "1288Xku5y1oRR8hhrq6aWWDcKu4bs3E7pa4Mh66SbnEn2KVP8sJpwo9JzLSBPaQimboDMq5fqhUbWVSBb8niGw6r",
  "key22": "4WetL2pRBrq5xnid7Naw46EoEzkSDwkUBjS9CJ9tVCeoEchRcJsmcHY7vBr1uHT7JdtJfs2ESsbrKnLcVJzt2NwF",
  "key23": "66gtKQfEeqiKo7xkFCgrTaW3UuEwBjd5BQoeyctzUGwXLttHEsckmybDhReXAMdDGhKoJoKb7pSbwDGADwKVesYE",
  "key24": "geuk6sUpiERkJPyM4PWNxbz8amrxNKAsisYmZhquPq6ohSEzW8C55iYKgDTprrcQbz6gWKqQy9d99VtwijD3A8i",
  "key25": "K4qfWd5BW9uXmVfc2LoSS85qwwE2eXGh84WzTtCNKDVC5UeBeRBiBRJ4jPFzdrs9d3PaL8dtW6CSVZoud5CZ3FR"
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
