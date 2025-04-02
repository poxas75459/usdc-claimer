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
    "2hJRy2k9FSx4D8aLg83u9AmYQ1QfsR4YuBd4QTCbjUESepx9KJYTMxd6FoZ6PrjP9wwv9yGk7NW6HvskUu9JDC2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8pBG1n15aj97LqVxUCahzuYfJXTPj9BvYWhFBECvcTJZDbNnL6shdmEajkAok4Pv27ogSSwSCPxLmY7jdyidih",
  "key1": "55zRAe2EtNP6C1g284PzdxEnnYgucm4L7PEvDiCcfGJM7zof6gXuhvrKzfTQbMkcdkbqmohxdXHAQVwuNdkkX5oT",
  "key2": "3jB9ksx3RcEST1EMZCss7QCMdMaMDuxpgxSnn1jwQfcDaajzDpPNPVzMkXQid9Wt8VCi6gtRvgf3qn3NdqV4xPJ3",
  "key3": "4R1xn6xTvZ6Rc1EsJzYM4SnHZYQz4URksirRXNzzj2qYSLNVK8VPtgJf9Y1XyUqV49mmM4dNJVj1q6i75MYfDWAc",
  "key4": "2MAu7f7mWmn4eZKwhQnQCCA1ouXDLQtKpzYQuYgfuNyeEsXcwfZN9MEtpepQcQmrPsM71Pa5tnZ9dQ2oYXehgFDK",
  "key5": "4wCNSKiYQBFcBzSTJSwhdma2M8nnuAbcpWdqpe5Dvsqmyu57LvfZjK5YCzxtCfqApjYc3oMCpTkyoSDHeFphQuzE",
  "key6": "5k9UZw2deQy4NkBwYpKxsESo8FgYSTpm7N2B5Mv3BJCMR8ZUS1G2MaJQmNVrL3hSqoEWmB7VZGQ4j6yp9qkiespS",
  "key7": "BEH6qsPoNM3Jch5Zpfctt2KtrZFFkssujUXVF4KLudzpyCuzNT46rqbF4AdBgeDVohsFzmSk78cGSmutnnmraCu",
  "key8": "3TRha8WvSx3UNgTbkcMTKpQGefKeXDrYFmiik16tJvP1SF9QM2S7Peb7EmzYu62BimSXbnckh5asCqPQn3JL4Vpq",
  "key9": "2UqwXT8sDpErETubmeAsmmhqskeeVXWy45wdfWMhnCpUmusJd6yDkHaGqGaoV5TvdPFDcWFuhcKV69YPSGyHLcSx",
  "key10": "36EpYsSEGj5VZi9K4NtcxtpcXnCApVw2wo6k4Yepds6m4Zx9imkcxWg2FPzyMizcMNDA14waJ65ZeTgmFTSHX1ma",
  "key11": "4WwK5c89eXbyH6Dna1bzgRDGDRpBjSE8FyA75Tc3MtVHx4qfZHhVMqgvKNFLXanHQ45XrB75Bmf8Zs9Kh6LH6h2b",
  "key12": "36a3oqVHAUW3D3exvQat5YyzD1k6MuPvQKbYz4Rwa6UnvaqzREExctGLQv78nZbaUqKbUD6c15DEpnzCRYhYwwVK",
  "key13": "2apj7gRRr5va8Mboe5GpiVuoewW86t9y8GMtJScCk7ySfY7Qje7iUEVnSxCKtu86GrhfgkRuAaXwrhHHu5qY2sKu",
  "key14": "3q2ekVXq2mx8L5fWgq6DXACViwfr7JhaJgsPfjRii4xAYKYVpptNqwoueZrCpU6bkLzquaVCohi2mduyFLqM2qJt",
  "key15": "sDKSSXVtS1HxzFfrCe5dNbCitdh77LPY2bJPJ4DyNVvLkNyBppjo1TuBVD9bNPia5aqJbWiUgEniZBqQ18P6HJC",
  "key16": "8M9knEXqNysFjyrKkouW4mNeG3cVXJ966UgahTadtuawCS3Mq6N8T3mUvq9goT8uUHCqmG7GJpm4YMTAquzrdF2",
  "key17": "4PZpGxBLdEjEhY52GLvYRYzp67CfthanPvZ2p6ZKo9hRUBWc4YhZvzYy2TS8WQ3c2meFvTsjPMt3rADvCAHAJGQc",
  "key18": "2nMeTtcKvSuMgLo6ftX8wDVLH7kZ934CfKdkaUgT2bAbF7Nb7mBgbMdujQQPQ1f5PZLCwoWrWSbjKGNJsMaqCjen",
  "key19": "4A35whFJMiYnNUtW1J4F7ZJwqJEuqd7b6QsnX33XkkvyrS2SmpkrVibvDDNKN1mMnq41z2yCBaZ2zS1efB9aH7HK",
  "key20": "4GZLtpTdZ2oHp9ezu8d7c5LJaD2eKcQawsUhCnnt5EywN2WPVmWCtsAy6cXPZJRMQusTTt91TpJixp3H1TdHN49M",
  "key21": "2wE78K42aag8MdMM4S7tRbB3bkm8KVQ4gbmWZD4r9VdMEA1HAQ5k1cGgjhAY8NyjT34APLkoDh8h3xd17HU3HC8x",
  "key22": "31xuyoac4wVR6TyhpecCh72jshnL6JauiE1aFuKDBBqaxDSuKwLSXHkjtiSosNSvV2BR6aTzLo8dSAsKZ38nH759",
  "key23": "2WHXZ7D1tNnSggGSdrkuQxdnCQVousvGGwWUxT4yJZnwtHbagdc2ZoNogBNzJ3sLUAmyYY5BiZow7ZMDoPJFPih2",
  "key24": "5z7siMQ3d6axSSdMG7WhqPJ7dCzQmp4SaWW2ZiA6Ud3b6ZyGeSfzJw6rciK1tFFxS7m36GpJxdTLYSvzUaECECTb",
  "key25": "4nVWB6o7ebKuNpkvSWwWAYPWd5KhCMfrdJh9M15gH6A5bvwbVmKauMaUGjgSQaL65gqVgtHZnhwXZhC1XMWuTMv4",
  "key26": "3bcv3JZ1hUmf5krG2fJVux4TWgn1cT4HFHmdFNNfr2qhUnWF79ZzDTctS37cKtKu2a5CpPhQJp8BasNgZeK8ysFp",
  "key27": "55dSiMHgB67w2MBjbr6axXL1ETrscXYBUQtC4DUzsUoUusfE4rTgcc3v2fUvemre75r5pVYdTMhSbYCHL8YBKPsQ"
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
