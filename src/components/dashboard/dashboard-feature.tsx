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
    "q4S6zr8aqhuWBCJE5cNYP63M2Kn7KnDrYkvtvhBq1PzebtoPh1JzTHE72KpttKYhs5XR3cRApcMPfpaZRE8z4Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgywJ9ocnjTCrW45yZmvS6o2VgryQ5jnBEcyXxfAZFiAMdRNEc6sb1MaZJzaskE3pFNErnSWPt3DWLzv62wtar9",
  "key1": "3REAHiYD9t6MS7wFhEqY1rV6swZjsbeYudBN3Hspn5TXscidUwEzGX3ZVTc5vp674Ti8HxFsEC4QYsS9aYiUrQnQ",
  "key2": "3iHY9JfukLRBnyYEtYoeT2REVcBAcSkzFEquZ1tW9WTAzyL57kAS5qfpiWeykPizKzJXdgTNjxdkRGtBVaS22Dt1",
  "key3": "5vUNqPSEBvwtGy1EyLQydbSzWSccgQNPn9EAk5d3zp2KiY3spyAHLuwwEGQ177RRQjBskp9SrxbbKuTsyN554dnz",
  "key4": "3dumvGwcYE9a7jehbFNpLF7yMhoB9MTvW38NcYeJH3XMC1Sb2KEGPgnrw6Livn6PsnF4ofhFFSto5JGwtHSgfP7Y",
  "key5": "3SMceVLCf8H9VxEpdPoKpfdZXgAamVJaJMY8kJZhVdzSQ1cehesWkbZsnPZ8UNumQhsE3q5jU85byBpNkYAF6Cyj",
  "key6": "5T7JghRfu8H2RaZwuxJDCpRLtFWkj3L4aWoHwhuMVPLmbAnUECfkheZPS17Mnn2QHjAsU9LRYKEKh5xK2vjzDSRx",
  "key7": "o7c2vKC1PVakhB1wk7Nxj7SHYBSyjTTb3HA9LS8kahfNHAGDZ6opY6PCRradmb9QtjTMYUcapQn4YM6NXJNUJ8D",
  "key8": "5Pnw5MbKv9ZZrJ2u4THjq7QDRAw5Fwbjnnxdb2RXmAhsD6psAWqWnxqVcLaJZ1yDByQ2NXPAd1J7SrTcf4gBKbEP",
  "key9": "5YayS7f6VLPb3yZmjeDPqoBMWx2TWYL2FwxA6F79xdJ3wzxwzBrzgzNEZboPqTCQgkyRJLJ2qDyxrmPdmrjGrcf3",
  "key10": "3HL1EBf66mTnqBmcYSia823wE3dK79LmcugWwrzBZuKbDQcbopF8UNRfkqqJKEBLF2JNdMkKG99Bs5Q1a5NzZtr9",
  "key11": "2juqR95wZ1WCPWeZnvhQ7XV2qtcTyTM35yR8Y1DQq2foxVndhpq88vfyWYyNZ5hBf8fiJMNQxs7kBQLztEEPiYbK",
  "key12": "2fUXyWAe9QP8TNuWoWBTKqBLqHjKTLMucg2TxJCsShRPpbrteZ9mhQuE4uLQQ1DJeSBMhEmoXr4KvLKK8r9btiX8",
  "key13": "2a4pmh1hwAJQKNZqbRzTg1ZmregsNuRNKw8PrVFSDGqAQ6GfiWvbPtV34VJnLCbY3BZMMBwJd7omrphudYT36uty",
  "key14": "4cyDwoHjsgKzZ6GGFYRXa7Ji1Ns8K4hDK2D3ehPXnrzSz6XoFkNgdkK5kxXxoAb5Ma5jDfzJH27SN9hVakafWDgg",
  "key15": "5MeAtaAbFuDuku86ke6VBA7LNCyWdU2NtKEoGutakWEZiuYuQfYe1KWL6SWzauwgC8cutGUsayhonNrkDchWxQVr",
  "key16": "4XqjRhdsPQDiyRttsbFiF8DiqbWars7jub5fx74GFzKbQRXNy4G4VgxoHpQtQmTXCyMf6qDByJ4T1fJHkxZxCwWq",
  "key17": "TAYDUtn3tX7aysNkzBQ5P3YKqiKk59ixsGXAQWNK4WRyBCpQ78gqPpPv6f8WoCfXgysgdc1fhJHs3wrsaC7dbmB",
  "key18": "2Gnd5P7HAH2cg4QvY9T2Vg1CFKJR2LUfRFsL1qAMgFbwdhDHcHQZpGjbvLzGiyEtqQqx5XU7PvT9z9w2fkq7uDfQ",
  "key19": "5W9GGST3L5X6EJTBTdn374BPfDF8JC7ie2N3YCVriw9ntTERpgTpr5LUHfDBkAnkwegYaeZDrDBwjtHpyMdPbn9C",
  "key20": "2PHPJX87J4pZotjTRCQfqR3viVt4VLmDge77x6P3ibCx4PrQHK3vJjMBVdVLAoxMrEUadQ174crX2kh1819aGsxA",
  "key21": "4b29RiJAR7CvbgGxgCiq6azDzyryyjAfFSmJhiKeJZKLPexzQ2UrCHUXvm4FsrxyGxnu2YshocXnjj5YZfFGXyfP",
  "key22": "5fpr21LL8Fyt2Rdht8UCH3LojBHtP1nEeBn2AHt9c6Bu99RLucyTbsjWwBpqJtkkCGgGivmAU6gD9GRTSC8eLf4Q",
  "key23": "4sRH5UNoTPvRxDzVyh9pxJB7o4rfakTf1MtZrjEAfMv3rsVcEHt5EwHsQYd6Y1XV1eczmsD8HtvUCxwoBu3uEsvt",
  "key24": "2bRpJknWLg9akjYag8R7Su4XrAoHRzqws9cXZFe6ML6NwiX8UwDBRmQeis7nZ1ukpPUe9btQGovH3GUdfkLoEpBb",
  "key25": "3BeUjoHyH8igSQNRh2wQAE4PGABPKvmHdJetxLCxpdbDURDNKQeuzqiBX9YJ1dwmNg6d6cDCcyS2T8Gn9HojLUAn",
  "key26": "4HztVYXNFVTYP9xPbxP4TZeJ3YAkyux4dHj6w61fEqnRguQZkzfxTfbAo6dpLHHQ22mu228EsNjenWJSiq71bvkU",
  "key27": "5khSAR7rcvBXNqKKZWuUcynaokdEZGbynkyBDvocCkygrXeA96ief9q1a2f2QQSPQGXqk8Jh9uRnfCjy79M8GBm",
  "key28": "6dX4ZFURBudtKshj6FtzN6LMqiWGbtixrVADr1G3BDvSyy6pG7W6GVVDAgRG8CDEMxmxZcqET89aPeBnYnS2GG6",
  "key29": "hMBinTk44dsuq2tLyKnLLMxbBYyxdzc58T934Ej7XZ2rnzAFZeWNQYWQTd7zTCvZfyboRuBcM84ZBwzYtbBhSwr",
  "key30": "5BZ3s4GkothAgnmMcQhhVozcQa4GE32FZyyz4y6E36Zfcr4udN711cokRbPa3UrBuim3tRNqWXQrKBUTaoR2gnjW",
  "key31": "2uLHs8GyRFkEo3NPEmnYYgzErnoCYhEZTFHVHDjosiEVhQAVoxEnKozXfwha1dszrqGNWmRktd4tLMUxXhKczK2V",
  "key32": "395LzV4MdthBaUXxJEFkzufs5BpZXcZcgmFfsJD4VJAgq9vFVBFt6vWJAZ4jVt5zM4J8VMWwetM9j2CjbgNiqDLh",
  "key33": "5u8VAMgqVMPAt5WkVtcyeSp3cZhQjymjcqudQ2fEzd1jsfhhPTG6aoPfBmMkWi54x3oHTi11edJZNHGuMKqYN698",
  "key34": "2raoSkhPd3gA3BBt3XCzc9t46YeWqVA6ezqRRaKnr4YmAS1zqWM8H95rkaN2DfH1Y74XHoHnMSugrBfvZcwEpBFz",
  "key35": "3QDHgC79vMNoUDogmgpCxA3xa9yknwZmA8auygt9wiqkqMEwWxKrkh2nbCxH58mTEssZ5VdxCcMoraFVKS5iRhoZ",
  "key36": "4brmq36uvDb5zoVzUyeTR9ExRcxGhtr6RyTnFB4EAmvShi8R7gVRgSkCBjEKHkVFVR8Zowdu3BY8VrPh5comoVv2"
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
