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
    "652JYgXSq7GZy1Rsrc4Q44cytTJy9GyQ9doAsQtszi4Z9uetu3dBkSdFSaDZjWovcPpUSAbY7zxCX626JPYrfQU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ui8j2uWEF1EvUgEdu2dkgsj8JxHsSXE2BQwKvUDoY6csiLXfJPeQ75WYqRuGzYE2WVue85LdtXHLMg33BDLXfUw",
  "key1": "5DkLDeqUfEiXcyFGGZmBx63KY4KXqfeQf6iitfGHQ9X5tsN9FJVr7JthYg1GAfQAsmHFc1a248nTAPEy4n914bhT",
  "key2": "2SWmUxtt6by8CFYRiL5NX8xmWJpfLLoCqJdiFPzKxtqxH4nvR1TWLacsyDZiKNYNwrSNNHTzCYkGkns46SMxJiyt",
  "key3": "5Tcv1XeQtgNoXMjJ99kYz1NswDTMkvFyEvZwj9rkKwQuiRit3Sk6YRKGPBqMFosJvKr6GnfkgJtvWoi5VVsYB5qM",
  "key4": "27LZQgSmxM6VSKwAhspRNpTk4ZKCZJnhxwbQPdGsc4e6R8SjScJ8BPrk7w3eg4K93XgTcM5gqQ2wZnRnVqDsCMzx",
  "key5": "ugVgWthSUAwTS7MQQkvnF3vHxRRK8vBSv17yay7UhWRsxvCWHvpR5GQqdTjE9Y9nzoLLcK2oFEGzKjMMmz5zbHg",
  "key6": "3FZXX7HjWioUtSm7uQtqtcZRqtYoK29sdiNiNBMAyHMoFLRHWvdcYwTfbD1XWghfo5KuoHuT9iZVYfAZVsUsXszW",
  "key7": "2oBYSurcZRkZKbphfnCBWfjerKnoM4RiPsFFrHjHNCgGNNHmEAvwdjJBi24ZSoFKUj9ftmjyqhXu4Qvu3L3HGouD",
  "key8": "oEgNDJtiMZUeFNAJPQNL6M3nGt7jscmYUpoY7vmYk9pPDv2BFiomZZJjoa7Wr52nyQLKcX7WAdutH414si1L9bv",
  "key9": "29qdtbyuFXYTopAsMmSMq4ZiiBrdYtGdhSLedFuWu9gv7x7zeBJHFQEwPSVe82xh7wQGUNTGrtFMXiGuuFTf38S5",
  "key10": "2AUvRhtB1G7muvyARQYMykEaK5ooURm5zDm8w8SY2oYGZFZph7xyn8oRwxowf8C9HXNQAFby1N21HKzVKPYgeZ25",
  "key11": "3xgJdbunPB1ALgkysnWcpBH3GQGY9hUrjiaREMk6DCszWbYpWTDceF8ogzje8WMUSkBHotK1ZGxCbfBTafB8axm9",
  "key12": "4N6t3LLgYhMVFqVFG4Pbd7fEbfVXw66Juepei7KUkvDwEPHdtG92QSddqXREv8neoBtr2fWgKL2MkDx2AwsQWFni",
  "key13": "43VskewMonUJbaaPmk33PxpvTZU92um5rsGCiSBawH9sHKjsXpPcrY4d3spG8WevEcfesjqpwrj5DL9nodoCQQyq",
  "key14": "3JSmwr2zjXwz6ex3BQ6JP2JWswfsKxFqZxgnr4ep4kS1XBkb4t3uT52tJGHaY57gtxahsJ89mJhNZeEw3kha6AWn",
  "key15": "4FPHPuhpN1gbxMFFeiUaWjN6qQt25L7F2iXq47G76Yuf2yESyuaFhN2JddbRt5LEgSYGoWq1YX13UWxaKvKb6x33",
  "key16": "56QDwRtDUy2nSuayj8bTjZqYxQisMq6p5cNfEBnETxY8Tvd1s3dwwb77c16DzAvYG8QBELrXmasLBzwJU9ptBezq",
  "key17": "4cKu56f2oWV5TG26ouSwG9xMz6BbNqPgyi1yKPjtbSAm91kgsNRkR3VRAwYMRCkrKNt7JWBWbh281VnAjr9LabYG",
  "key18": "3VzCqDrLxwaBQCbqeCFtW6bLp7a4BNjAKHeFbCMBqKm2sgFt8TmactgxZwS7mVNbnh4tLZSiUN6PWiXW3KFoGNFp",
  "key19": "xk9XAiAQKFuZEDpyTAiGFdQBkT9XXh4LHXXx7BXSAP9u5eDuTf2kaArf5qNNFvNJ3jKs1SfgR8nr9Re33KX75GU",
  "key20": "2RUZY3A72CUaffVohHvpfoatJYCCesJHhmoZHUCkYQmvqEyMNuuwzYKYcnpADjFPhzbLi2rF9UBGW59Fx3o3KooZ",
  "key21": "3FqcuWVxx86JQ3yuZVML7Rv7V23DApFVU38ZmLgtYaCyBa6HdXhyjdck2cwiX9FVSjUH2e5A7BzbYbXmh5U73DZe",
  "key22": "3egoqm9uhyEV1xZJPrUHGaM1KNMqxaGG4ivxSHpjJ6xzPa9poqdvrdQnK9FKmxSxp3HDA8fsFytCA5m3hfwVe1X9",
  "key23": "42CmA8Mgv5d6Rp9HjYhQceUQpuCmpB7F5fzko7FyNxp41rvwnnfNkyUpcwhUDeHkeJCpfuhxx5x1sfs2NstJ5B3g",
  "key24": "3bNpv8qsApM6GR7CJwRFDWUTbpNadxEH8XRbpELCRsviZDeW6N1CfbNsKMGnEjv7CmU71LZLNbZBEBB2qn1KEf7S",
  "key25": "41WhEsiRKLoHpHpBmxzT9yViVpjeC6TKSmhN8RuYtBLejBTgJcCVvJJhNZTqFF8cHfwesgKH9aHtfVrzGTkwiYHL"
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
