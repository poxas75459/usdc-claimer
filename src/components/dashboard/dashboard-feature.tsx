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
    "5zT3AqfyzdbcXTJwZQ5heKdA5HhJaRvdL4gRXQfAEyaQ6LGCofXwSrXfeMuXFwwQjSNinhbBwmfKttTmA524Q3Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3gVhfVt8tUC91k8MV8fH4m5x5jQTPr9vNF3yMtiKtF5UjsBK3ZWN1JYxF5CLbVRmNqcGTSLTkbKC8QmNg7mGyz",
  "key1": "2sMpUSJMmVR5mPAASYPx4kncrCYcmbb7gHM7YX5e5jMuMhLSLo6w3phFxjRkBRX6hx7DzSRPzYfhwLFuiNYfUCe3",
  "key2": "63K5uYKQxeHSnm5YLVdQTkQ3wMkt2Ynzkgsrbv6YxHnPknwjniQiktKTrvQKCVpkNGqxdmpQXHnrPNAAAYEewkLC",
  "key3": "3KGt49Ze8Sd1zW7B4D26DurCLYk2vQvv9XWSABaVAUpfjrEZS9cdMTuGiF5VczewNLkvA9ovscMLBXGupeemApS2",
  "key4": "4pKR8NPynPmp2UUAANtBZhNVwazoUQmNXThFXceT9CpLw6x78hgt43Zdxn8s2SrWShX3jDoHPxqCqu3vshhA19Mh",
  "key5": "X5aiP1rpwUK35s3AivfdYDCj8HLKDPHJgYwMDcXjrjo9WYokGH1CdT9mXHNAiMJvMnfr3ETiV3afmvLWx3kifiF",
  "key6": "4RggwkZEMmetxvmwkhZ5xwjeiTrhesyR2FhQJjfMpWdqQZFg7wwDJTBbRogbZEp9vdMSMugYVCobqXbwPoi7Mttx",
  "key7": "2QEKmi42HCynis5qW9YzoVE5fYwHEsWk1mBpzusmFPEnyJLBhAHA84uKt7ZN2m283tAaydjNoJtMBxuuUsy15C8U",
  "key8": "3X8GiKwpaCZUiUcG8SycNuHXDbXdo6pdCsersjAV4zz7a2iJxkYHZTC7KU1BDSRz5citkPCPdNSsvHS2MAGQX56P",
  "key9": "42X8K877cLXWwLSrdgTwc1KETBbGW7cJbvotVuZEAGDc9WcEaxKYNhrCssT71FL4o3Yj4dFb5q3W9vzu1u7oqhD5",
  "key10": "32kP81G8zbLX3nRXLYNcdNTBM7YzFWZud1P734SKVnwapMCt5JeBpohYnw2htTTCPnwfipk5tdvSftDT89M1xaxv",
  "key11": "2yJP7fauf5nQHgb1giywRmyKMRAPMactC86NkveTAUAmhqCv4TNibMxdrczegphKQad3feTkxbpa71YR3yD3BafD",
  "key12": "3Bpowy24ier63BTqAkLhdmpWtL6mfW4LFZYHoFXfVA3qUZaAAwFM3QA6KDzCFCr4N1SwS9HcEaWbwxzaeYqHnCCd",
  "key13": "5vY8QjfBa2iUpapJWKs9kRtfUaxxC76RBxntwtvTybzmzvHqHwZSSMVVU21G5mSKFmNbiPvtUd46FStXMzK2432e",
  "key14": "Usn3kGbopF6Uc2QsCp5BiEQNEdwWAZb8HPJS9uFjRnZmcm31RUdaMMVctQmUmBtcawVah6g9Vuygch2k6GNctWd",
  "key15": "3YLyx6tozho7ryTU8vE1Hd3A1LuUyZZoLffSj9WjwfP2RwDmQQ8y1dmBj8iyMCBSyjftJdpLi695HpeWDZKv2CtC",
  "key16": "61hG646FSRvBZBVuQS1X6sZVFnypHtXavZaGk1aB3A1BvG3KRKoFWTkEKdFSzsmViHEfdXRTENf6son5NBGrXFx2",
  "key17": "3QUgjYkgN1hrBBo47Xd7mKnSWK945vAL1xCuPeCRhx9JLAHHgy6vnfjypHTmfZmpbLPPzEfJ18HsbNCW9zKMhzDy",
  "key18": "5TLK5mXFEC14AKpBdbb35mGZsWU2M4A3pmvR7Fx5FCVLLjCsYypscZBVo75PMzXggBp8DuDQqk38NAXnQkyEkY5z",
  "key19": "5EE7BECz58yVME39k4Rrh5dx4orgeG9jy3prr1W6A9pgiZTuiuKaHwubs6k2tLPqGNij1S8rJbjFuSWMFkMfTaJF",
  "key20": "2JZEaHmaqR5Dv8u9gzPksTphA1H4zX1RLc8DeH3PJyYFBhDHJwBEdspdZ7sp4ozx6DfaGRGFUGiMp1fqhyAQZvme",
  "key21": "56CLRzsAKKTVLT2dwVZMThy37EkiraZR3WrQ8TmpoGM9MD4dW6bHA7BDJkYRwb6jjDkwyJW5BdcRWLxR9B5onpF5",
  "key22": "4tQmLf6LPvAGtryveCFM5Qm6toeRSEvWWE8ST4EKjjZRLtppgYf5PuUwA9cjd1r1FvuXZwz7HjVqkCWxqTb2JtFc",
  "key23": "4fKa3SvvDXZJqMLaqN3nRnr4GHa92k7hShpcUsRBE927P9Z28AetSHoC5yYuPCjXhj7XTtdAwHroCiyABzezmxLT",
  "key24": "128UFudJP45iNNwVFXu1L4eZUuTXrCeiN6PJVvJm5UUHW8Yh9RnJsgMkqjZNDmbyqSwkrceH6ErEmPL6DKByqqcD"
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
