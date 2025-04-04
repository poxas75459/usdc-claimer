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
    "3gpZjYVWvZNzW3hjFSEHcS2q9nHMpgq74VTTZM8tfjHvz7dBqBHbUvDAdKMFFDqQmz5EzUCtEiPgfBs92XF8EBdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jq82onLqhCs2dE8rKi8ZojVPVsKcEAtMMUuesmycbwBiVYSYMM35WRCUFciMRxs1j9Z5NrYHprP164xn9m8mBhZ",
  "key1": "3LfGoGdVNiq8AmbCLSRSU2rQEUa2rgmL8MadPqpEtyuqr1fhKNK852jKMrQN6R7E1qKXdjRDKMFRPDk8j9R3SkbA",
  "key2": "3AbAKV58sC9KpwKLffqSK65a9sSfJgMcW86MLcWv5jVWDvVuAsVQdjGDKrd6n2J3ugtLfRVR9skd8JVhtyBe4nVw",
  "key3": "4dbe5NVADPCApgc9cim8CnYdCSjHUxhoMeJKpRM7teeSBpYHwCZyquT3quYZtVY7qmATzZbUa8aoxAwKaJy7gULc",
  "key4": "21J9hSUAm8gAmtinsrRbFEFx1AbMTaQWdmUBHkPAoEPPhZ94eePjufVjmxiTDB4TxwNGk7YojXmRydh6THhXzQTq",
  "key5": "2UbFk4Q6G8PTLojLQHQg4nYZd36bMsgZvYvhBybTF2jgMYEAPE4uAmgXiMa5HeYvkeNSsjNSgFqbLxBjLd3TduAw",
  "key6": "coF4LFe5rGnbGEj7LNBbVQw4gq3zs5F72iF8FD9kZ1NEt1rJwe9EV3afcxBzdVktnV57Kok4NZtM1T6ajjGdWWo",
  "key7": "3hU7gJqXFJ31kEbtogECBdoKBSncCVqvUUTXYZa7EmFezVey5Y9pdfbBmsjrSibtbTUFTBLVno5fTMDa1xvJqcfS",
  "key8": "2HiHarfExQQWjVYbEosRqCwsXz3knVtYJ6a5BDLo3xtR6JcTw6aU5VY5ZNssky1UP8t71rWbVG16QaNkigxwuzTE",
  "key9": "56xSHfadnWJpDi7k1e1Te3CpuuGzBGbu7eAq7Q8Ucosj4ipfEWGHjtUWEX97yv4xjam3B4VYm98BEXxRgthoVYWL",
  "key10": "3mb9pZPh1DGZZiVFnRLiLFtFMRRsguT3CL7msLB4ZDPa68tcH99qMeFx8Ai9CTtpLRgthJeGfSmp7VMVjy36MSc",
  "key11": "aGQrKvj8GyUv79BGF32tLwhkxVCEBTaYtEwX4zz8V55mpVmhbpJQEFvaiBBb32ZtT2fw3dfnNsYQtYRirjgJhZZ",
  "key12": "4R3WfGTyqQ4vBZ2PwSxWrNyuD2tHgmW8Dcx7GLPXTM8CDoPK8bwesXZLqePMQBNPxDSc2MZjTACmxvWnSqrvqR4M",
  "key13": "zK1eXC9RnQJ9ZvQXaE8H662N5auSPEvW8kD9kFfy1erJTuRNgqa4Jm3k4UG6734kf6BjqNmwWcXrHGchfBJwe6a",
  "key14": "3DjuaJHC5mWzgRgDhQM832apkVoVGSrVMdsvPCTbpKSaok9FZDoDHAm3f3smvGHdQxmc5m4fm9xeXE26HmH2abyX",
  "key15": "28kLRGiYBL15XrJz4sr9UAtCpqCugeYTvYGWzHMBR9upEPryZdu9Q8A1NUtM5Ngvf4iTHQsYC1CaSXVLnTSy43Ak",
  "key16": "4iEAAFpSBSVRdWsBXh5ijtmCT8NZSFonLy7aKCEUzkPrNt41UAePxGMLqGeZNhzgFSj74RHg2MMud22szXbdz6vp",
  "key17": "RY2gAqpqbsA4Ny33kcXXoqsLAYY2BaCFK2VfAQ9j5LJxTePBxWbk3kKMcmAhitZjL3GMwD49UxvbbvUZRznTUeu",
  "key18": "2JkPkWsbrzppuDJqFbKK78xcVq1Y26pcyBhRCacjJ6AGceFxQSTLZfPiahJzV9V5uc4JJDFBkPXTuaLTuSHumRWG",
  "key19": "46nrMnNVUcY17WF6fSyr2feazZFNzQ5aspWFfw7y1msr6X5cMDEw3zV5canDiTgoEazh7D2a9K8kpi7JB22FLxq6",
  "key20": "z3s1dGE9g48bTwmAmQwkTonQuWi9JjA19TBGBuihrMXhWB9Uh3wqm1MiujU8kAgU9dVyQqnSDCon8BuwyQAPRAh",
  "key21": "2PwvaS6Xp6NweqUNWa6exfrYiwkSs4L9cwaK7N3SKREYUSA9hyuFkHyKwcbSMCyUaKcurDnrFDYSxLmeDz3b2dAH",
  "key22": "3TxJbABRN2Nom9x1zofRahHzmwBZtpD5Sz7nwohoP6rY25Z6gKqDTqCFLsrXcRTMi2vNogyDUq8dTvB2JG6mDm9L",
  "key23": "3b4hW6xpcDEpxxbTv29WaRe4AdZcJZmgbMyEAc83V9K1Douh1kmeB9yJ7XYkrGLFLNZhFKozU7vSVxSEGoeAEq5m",
  "key24": "tQmrSRMgZEaatxd9GXuQQXBu4rW2VZPpmS7wY2n1ZkDzjDr1EBo82zGDca6f5zuZhMsT3XxFRUq184FoYcAxXmu",
  "key25": "4J65DqRwrwmbuaAkR5NFPz8nXLvdxZ2oGzz37zrX6QTvooQbzHqstU4au4rCY7m6jEm75BWNDFsA4YhfdSJwW9tx",
  "key26": "52JqwvWBJBpdkLyQzV1v6NJo8ofZ1PT9u1jCcmabWyPUNUzBymQR8x5Looqy6cx5bgwZ6CLSrV1cqDAjnugEWCz",
  "key27": "65LFGZBcuqziDEdPRb1GPA4dc8R9BmkMpd4gAxcBLozeefadSQ3t9tRm1Cqv6vZFF7haEJuU9rPNWtMXZhB1Wa4U",
  "key28": "2L7R78V1gk7gNLoxqZutgqpqAUXaA8BFtjEV1cpRaShvtj7thyBB618nASsYWVbrmvRyzqsdX5uaNWLgkFRYkTLE"
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
