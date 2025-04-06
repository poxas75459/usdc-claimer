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
    "3A86g6PSu1ptq8wKYphk3jP211UqHsKAd7jnYPmPmwF4AZWatHBzse83T98b8GFvzoAwQMvD4Yiw5RWMHJes73Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NrAkhMviu73yKkEBSjnW53wTqDJkcpL4Rd22kc14NRDyojpGWHzYNy7MbJtLgwjYWvDpKXejGNd1xS85sgMYPd",
  "key1": "2pAKc3nXzoJWS3WMH3kbWTftTw5rjW236j5UkHzoijPnqfzw1XhcscC6eckwVA6FMVB629mNBMgGRQNh11Yx5oQE",
  "key2": "4HKrZgP1n2sq7VK4Zwkeue1STBKa2oHnfLpgWgVudgHUUeqVCbBJTEyvTCdcF1137Ltf4g3MKrsUCv3XcV1VycBJ",
  "key3": "ARRK1jdEvAcNbvurFimZ3HteYWFsoZu9V7oDjNZgBHUfABPNknQ16afXKTAXt7tDXSd1zr4QhK11Sg6cSWjHFyP",
  "key4": "z8Vvp35bUnKGcKCkGfSA26LArhZouBYRQG1UomMimwQFq9BAWFTtNfKWp9UCCHQu4YXUs1cRobNdnyj8H4sEChc",
  "key5": "2aayidEHoZcfsRonCsjGbwpy4CD5W923b8Dou2TN2qeT2zxf6eGSL1DUXhNcztfCDja6WcpfuEMypbCHEgRvPWm6",
  "key6": "5PZbxMFurvaGS64zFUkKEsgiLkCSqyVYEgegB6vRdXN9kVPQqngtVAgrKdkrw1CoXn1HyoNbTGYA8RRTS94BZzgM",
  "key7": "gPbU6ZhgXY76bTxet4UvcXbpCe9C9grS7ScokCPiD8qZKVbWScdAMjUyNbZzazxUHBDMWCRM2bNf1madVCVmx4y",
  "key8": "4HGcgZ4hSi2fL2845HjJJRemcLXZwLyHFQzvQDybRpKVpK7gMX5TXynuWF6yfHnMX5VcvystmCfjGLH54vdi1nk4",
  "key9": "5c9oZsMLKoQp5uveDNsnfTUEu5nYXJtmZKrKXy9fx9mU34o6waBxJTsTHbe85ZqqEd3tYZsjCcx9vwojMDYjBiGg",
  "key10": "4UaCv9dT8uSPzBrEDetehZMC4jLor3Jaj6xBLAFmuwjkRe4aqRxs2P2L2KAjivEZmyCKgTcDpbqqJ3yYDkSPMVPt",
  "key11": "2irqb16oRzrSnE5ir1vmbxJA1AosALKQ4JUegfuT3TzvsdMDmrMLGvMcB8K7es4R8eczZexp2DeYnfuEfMk4y4SM",
  "key12": "3Nys92oNhrUQ7LRWtxB9AsSeu41gL7qYyoJUzorW7SwtGc78LTL2CqaLXCeN6SvKBjezViGFLonUGgYr1m244eug",
  "key13": "33pJYckz3muVBYftZNXMzz6sGetpazCsKMfzgDK7xdCTHg8H7xtHz3eKnZAR1aejsanJ1bKBnbf6gwmqqs6fWQmF",
  "key14": "3Byn2zxX6mtqc7NXPHwCCyt7Ge1xQtSSgaHK3SjfeYx8j94fDbDPufMVgafFoDJLmFtHvhwHNWy9bW3a37mKPvuF",
  "key15": "2qEeoQvULizdmEjuHQBpQLzPSoP3ytu43C8Z1uMTufJ9NipmJg9Vtci44QYd9e3vGMdcqSyWSZ8qpLiJ4mr9z9BG",
  "key16": "VbC3qejDdbUz66BYxJrGrGAN3bwUxxxLmoqTujAUgsBgVXzkGiBzaGG7KT2hFTjRzS7h7P6xZyjBzzCSSicGXn8",
  "key17": "3Z2vxxjjfxuodRDayA6amwmaffxPBKTRzyn3RzXYZjy3wJF45LFK2moXzgvyGxyzz76BhjZLUwhmypsZFpmY8VDg",
  "key18": "3gvXBKxowXwqx6rivP1Gqcg64dV4Uafhn2acwkciP3UNzwoEfc8xhr9RA5kbAHbT688Qtv6bjikmXSiXqGY41VFo",
  "key19": "3e3vjPd8Q5TsA16TzhTFDWnncbLYmGciv53ejVDkLucA4LZAFPohTGCeaq7EhRCkWZM8SdNSzgNZkArSDZfTXYFQ",
  "key20": "4K1VUUKrpfPt9tXtUSSYLhkRVyeuxne3tPVpCzztiKjSRw9Lj1SKVeFBh7g1dTABjHpheqUs2USTThEqoh4Pz97z",
  "key21": "3Xqoa1ZFCMypGY4ehiVTk6TTKCfoYDP9ejdhZxBkFPxiNriKhoqMPgFn1pGDiiuwGK7fp4Dh1vWXhfwHJUpW1uRU",
  "key22": "5giVmB8gnwxewCvPjfj77nfJcqWaahKM2fa8MpnRbmwUsGSZgwgCMw7tbp71wVxyXSjga6fuRmXjfcfHzU3hVpf4",
  "key23": "FQui9YqSr11QYR4zuGJgEYcaq4JGzD7T3ENc1n2jb83bWVMFJ7tk7H8DwkPppukbjdZUqHiytSytMrr6yZnjduc",
  "key24": "2N6etEURCJmoSiZYG2Sk9SjvG5CCWDZdVQWMPihQRhagRTxKJvs7CsKWopLMmN54vnrJhN3Zw3LmTB5QSuJk1D2v",
  "key25": "tkcQXyxgiVYAATZrVqdzWo1yENc1ABJZCNkcyCvmYAdYXNxzg8TZc9w5WoR9m6p4YugiFVW3iyPY5vFnuMDrokB",
  "key26": "GnaFaHDavtxPgXu7atFKypUmD78nee8YYjSXwjANFun3UPPoeUBLAx6WnTeQDYkZwmTLffuV9uErxJpxSMpHK1N",
  "key27": "5ERmr4kEm8SGffXCebT9h8giDqRpSzcGrtK9bFdzzysDo5tSzC92JJVdAqaXLxmFAryAgutxbLYc5uHzkbZVEWVM",
  "key28": "28pBgUTtNyHCU94LrMErAsNBmhB5q9Ys2he7AyyMctv8TeQ1qufxhzYkZLwR97sPr6nTNUNxwdUifwAR7MRKVMNc"
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
