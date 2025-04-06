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
    "SZy6a4Qe53Z3s4CSmamVsqdWfsh6fnh8me2EJe4YgARh268QxcY4PUHx5qdFuabxLtt5qFe2TvNvw6EyUGBSPj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFaRaU3mQok2BiExXBPcU68FMfc4H9gDJ9aBqdiw5xRKcLfhTk4M6xRL7b5rBhz9dMRPi6RaAUD1iTEZDYBnQQq",
  "key1": "3sgai1YJ4bTr1KqSnQFSLJ5iRJygEACZGAVbFPnsDyL9gJSLzZDW4VL7NkebaWP47cfszv7zaNyTbFweYxrSV9f7",
  "key2": "2SLrW8grjhnLqyZz6CKbnGELogLxdRUrB1nzSsX2vXtrT6GGRHR5PaAWuyyMstKR3BUSMcwAZwcyLyTPwNhtcAQd",
  "key3": "3kiFpQjSEdiWA7SdkMKdkvQccdsfFY5NRbZSt5kRMRWQSEcN92nYjVeTpj6mHpmSM1Zq1xhhqNoq256Zxq7MextP",
  "key4": "5HkvT7u36EX2txAbJgjau6EguvYQANrtiQiN5cjgC2Nhk4PsfvA8PJSvbntCVqamvP7Km1PBCGGLY5xxRbRMauT3",
  "key5": "5vYxuCitrywYpvA3TqEh3fqWr64ZkNPYoPXmcBBhiDEdpzUXVN4oVQdpsgwCken6RSujdiSPz5JMsPZeqXAeFFYC",
  "key6": "3FVUJSRpTjZeMsJp2rtWr9gX7keQhb3h6vgsn1h3uz8Q7GfoxQHteAW1Vs8z2aa1tpVX9Q5j6u8nHfvVRaAZKDAy",
  "key7": "2CH9X9BcoFXQ1DejC2Gciq9NMR3C4oxLT3rx58eomMLufbe6Sq3kXNXtSfdAcSePg7M24GeXGD8u5jSgQJfwR6ee",
  "key8": "3FWBu2JeqnQzuPX78CfDjns9v5LdcXyhycXZC7uEr1F7CNxBx3c25Sr9VA16hbhGa3JABmakyMMEAkAxNsnkwiEf",
  "key9": "fAs6sS7QdnhUoEmDVYruoxWCw9mgry1CxEH7Wbq6Gp9xqyfmECax9UZ37StbX9BVxMQpiXAGWtyKJZQSzrXqqJD",
  "key10": "2NmKopnFQcpzjsqCtbkS5TghXdyTczbiGK1wcVVRNiHcNiBN4LTCX5hP9WqjcULd34uX8ke2GDvfdHLazqqCMjU4",
  "key11": "8yaCqvxeKLr9DUAGebKRSyXEmyLEsFized5QerWhVuvYA5e8iyuFuxQQV3jXsSfAn5nsFvsThtxcaAne2FPFjX2",
  "key12": "2a9r5UvdUvNexfJmWza758nQqXBCndep4apgaJ3AbiyigsKGS87A6aLcCkyMnGGRB8Rp3EqMZYZevWfVWLkE8hPf",
  "key13": "2UCJMFkmcs38oidMS5c8VEYxT2iR6w41wP7y7AGNjyP7Bo5A1HdjvxXdaLFU2rSProA6py3AKfYe1Ct5dYXRxprS",
  "key14": "528bRvu6Tyd1qVrwpx3tBBGdVN6LvFw84A6v51w4GrB6x3aJgKgu9EoFWYcoQgRQMqBi2H9vHFnsiN9s98KU9dkR",
  "key15": "4YaLx7HubuyyhuzrCF2dfMgNTWFMG73NggsU8LC2RCS2KngM83pBnWPNWXefw5RzxHd27UVR2UZvTnxKoGA6L8gS",
  "key16": "35tb23eLmzus7FxXi6fEGtCA6APi8gtyn9XzdipS55VK9QAgvPKkKsqnz6h8J7hFYDz3qyt1gA5PbJwch6hPZKB5",
  "key17": "2wSwu45EuUsrGGifo9ppUW4UxBfie8zVs3iCh7JoFYySPtiHBxXYojXHuhjWhaEJzR7dWfn9p7PsVCQn8cCcqr4H",
  "key18": "5nJjdANevH6n4WzScNXGaJ2BFHh6QgSBQff6W4rxGfJxvuHH6kKX1Niq6S9u5yMkG9bq2MJTzZAF17BYYC6S754o",
  "key19": "65JEQeDtqQ9vfXVusGnnouDkCHF7gXSN9pPCQbPTscWXEcguW8dMCAEavSKeLdSx4hVLPT3s94AgDpE98JX78BnJ",
  "key20": "5mTVfZEgwmL1BJAo8b8FpNDDVbtyFnAddcK4beF4xA5CDJUjgy44DPrRPWizT89H6mqarUHsjGKhyRVYPcQKZe6E",
  "key21": "3FSHx62hbg9mjcUUHNPedruYwysrc4Hb2Lk6ohk7hTmvFWYiQgA7C3ZqPX3KzZpjyZ9jGzvdxxVYUsRRiek65pJC",
  "key22": "2NnueivrAyujzcL9kAzr8aLtRQfSi1GYqc2ABZH9zYZBiYQpEvCPYKroZ6wwK4H1eHFVGh1TbJichGp4K8uA7kad",
  "key23": "5kRFazJGMuaMdTcP4RtakxjwtvhNh7Rth3kyAtzaNPYXtisqPdsJ9QRtvh9pZQLewsgD2kk6KiDkiSb6wKU4gfte",
  "key24": "5qnKZ2ZF1ToFWN73nzs7WKgxRjCL1FZbxnEnjbcr45GWMx3HfjKo2mFbVYtZyYqfkTLXpATAoM8TSy3rn5tMvcVL"
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
