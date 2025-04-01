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
    "2BZEAqqzniCmC6ogxUgGFUbu5KCg4vsMcqdmN48wrapZ8ANK8aU9DsP9heRY58DRED7CYNyQYwCWKctSzeTM473S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kH6EVTQmcjHWQiKfHQ9u1ZBmAbqmqZY1euGkjPwZZShbgK5pQTi4kHYyqg2NhTf1cBqLnuf3shewz5RDhmiTwqq",
  "key1": "5eWe8fDWdwMiJhHL7vTGQ1vzeVRDLUxW7npSs7KDhufvwdrR1QUkPv4DQBLUR2ZGtv3BP3aBoaTNKypmE1hwhnk7",
  "key2": "3drEeqF6Snw5yb67dfYdmeXBQnRqvPHt6HiHJqtr3M3bgVWtLJEeUUHPVt3HaJZb6JodxoUAXT6fZPxj3Gduz7Jf",
  "key3": "4vzSvLFXzpgMiBVLQDtfNZyVQGdXP3v6KM39f2q75Lq4GxyZ1urmBMDLVyJN1BsQQmiukCLWkVQjykzPHGDTFc7x",
  "key4": "4ZADGdeEXhiLXqJ34mnSqVL5VNRcRvzxxQd2CkEXZcfSuWFQp5ndtN1wZBzmgdemVHi2SfELVWASMWx3bKg65QmV",
  "key5": "5Bdz6spwTZo21zLjnYxyonFdUjy2fJpciy5VtQonBgQFppWoZMANYbz99XohrBJp6eDJpcEmTRySgPqtNQjfcv2k",
  "key6": "4aEj21FgDP7uzNVeEaofeCRaCJidxCNhK8pm5rTfxKQ53fueyofWqVDzkJA4VZMfQ4HLdfZxA3ZQDjYd88F9qMPD",
  "key7": "2bBV6Kv7BdvKW4CKgvVW68BuFGUcrvwUGiuMTWx8GNcgcgVi9aS1VD7Vd39CjWzVXGyqQngYhxzpmbzUJciirvm4",
  "key8": "5TyXUfhmGru2Ea2SGvEfnF8Vrem6k48GhDHQ6NnLTWE7eEV91swr951a2czSV4jik6TFLEqkegyc2AhDqJwge5gV",
  "key9": "dXLF7WXefiGpf47dHyEYESDiJ8z39sZQX42RgrcjCAxrPugjuSD3bfP9MX15xYz5igMPsctYJ1PoYejg1XyTbVK",
  "key10": "4vaQdzUKwb6HcATD87Doazg49i5pxyiQeuk5Q8Niqdd2oTLpWZs6xML592Xa9tWKijHF7SN6dkfbSX22M616tbVt",
  "key11": "56HbdH2ahDqre8fjs5uUzWaS6cDkUd69epyv9Qty4aDU6eW3EEfq7bVMCuJXnPMwLvxXkQB99EeZKQqen3jADXqL",
  "key12": "3eJ9hnrSUP2nrPcuFXBNAQ7g7boB7akzH7ts12NbKMoTtPPT8sa5TxDxnGCxQZqGS2XLuVdVgdV9ob53XDKnAGkg",
  "key13": "3QZTWJjxYMQT5hQuRKyntu1rgAqrKL56rd7YVzvbqba24PCGZEYGWn8u91UUYG64NSRq1WGpCtuPS2QP2pdGAFdh",
  "key14": "66yDEBWwE4ddFimEcpXL7or4sU3T6KUsqk3WgHTYzEU6p5vfcNmwMG5xiFzxMrgD3tAijWzy5VLkx52A2y5wD1Y3",
  "key15": "5pUKocyvj8waspHvmAa5QLcrJioP8PHu7ULMEHtcNBJbhorndtsJkVM2Q1QsygT3BMMWnZtSiYCqWarEdqA68NEy",
  "key16": "2NFzRBEs4BVF2sCsG41BTdeViYZFT49sbs9FpaGoc4Wfn45REMH3rprXMPNVM7RzKrrqhF4ASSShHbGdkuEVk8Bn",
  "key17": "3gEMhe3bnqNBffFqiAifLWLKjt3c9F9gumhUUQjqZnXJ6BadECnqVfHC7uTPEEhUta3dHWUUfuuBrrFfFcyKMxMJ",
  "key18": "4FrMWrqD999aj9KaQT1M9YoaN7XUcCenwXBX5FLdEwtoWJYt9rBdqeGeBwxL9NRqEtHhgAWybU4EieMxZECafj1o",
  "key19": "5aAJp3tvh2wNrQxowwCFmtEkRRHrAmwmTeGSrF95ADnmR3sqku5aYt1FfgGaRgxPDbXhw144nsEksTZq6PumPePv",
  "key20": "622vwuf3Q1TiLmyHjTg1YchgAaCo6hFEvRg95KUFUyw3u3AqXhPBboSMdFkUboLNfKXRHtyUSsRWJyE22YWt72od",
  "key21": "5Q3WuRUDqw2kLy8R8ov1YAzqhkx8do6BTm43g1cEcb7Aq9zr2srAWMPGcSxwVu29dHmELJdC46EVcjcDijc9ctMp",
  "key22": "4tU4ym4uRkDBpiLUFUKEJBXFPojxegop7QFFCEEsPDAerd75CDXGDmG2YrmPz8qTH5JsnMGFzRy26qFpGeKtjGav",
  "key23": "3DH6wqcEEgAEXDVTihxm3KkvCJ2pojMmkcqie7CQEigkothtwCfsApyZkukCemjghVndw9veh184kaAGAUvGQWc5",
  "key24": "4Ws1w5v6NkAHZqThGdrNA6hNQHEUB5tRZS8mrGFcGncB8jqr1FTjRQ6qsNL24sXiCN78chQe4dRR4sdP7PhMcwVB",
  "key25": "Q4b4MtaB5aNvfBDMZKD8twptkKE5q94srUfH6m9SnZfBQt4B8sDQ2jLHc4DpwXyA5b1HjcT2tXmhGvCqFgUHV3Y",
  "key26": "3jnCBDXmGbo2jNfJf8Ty2R9HxXfVFbNnEURaHebZQz7y9se5Zr2QAmwMS5c3jiycLp9Lto7eDhaWMk9VT9UC3dLr",
  "key27": "D4NakZErjZ5skPVA1zFQWSy3rcGhRKfgckzdZ6dNSVeXeFV2qnqiEDAqpEPaMevNZaLBZpnfZ8E86RLK6eGj7zA",
  "key28": "5tYsQeAATpsn4FZj4A1FiQ9Mp941iGARde96UH6cG5tGKywsU24ji4DLmuLUZ2YouNkdv6UJm25r8cz3efyKfpq3",
  "key29": "3xY9LAVLLPYyTLo4LGVA7H2D5WoMUw8HdkknEAhGbTiENgEUVKfQYu8qU44ExUQ2k8UjKUQK24jAKiamMrjSpLTh",
  "key30": "44K2g85yCCJBfuQdixvzR2qWqtokuGqsACUkk4PEzq3D2CbdhfqhbPzLeneoBKWQByWKWtEDtj5E7mQbau464Cf5",
  "key31": "37RWcsfcvzvmyCdcRqiq71xnTSFXbp6Z27LJGUFugtcTPTH21o7Sq5BXNiJdbYKHmzp89a8ckAhUVF6YKUGKpjN3",
  "key32": "5xL9fm97KpwgDxCXt8zb6w4fkfV49DtGQyTBXdWf5sc4hmWPoHUNkq8GPdoSxf3oPgzkZGRMUCPC5vnYbkfsNiN1",
  "key33": "2KNXdmboMeDsf8nCQYUSWGTzN3NiE5Lz3sCVhRpSGRTbcm3KKERSJ9Ee9H3rBVb67aiKNvvpBEpTT7M56NNA8ePW",
  "key34": "94rWSKR4RpadbqjRQwfNtdhW42oU5mnxFDxKmCbWmwUwvSMPhXLqNwXAuuescz6HRj66VGqFeg76P5p5TzLVpay",
  "key35": "2z1S5Lg1uSvPs1wZGwLyK5mSsSJuXZXa6nam6cPMyV6EgMBh69aGiyFnERcfjGgbcCQyqx6m49vkxaWJV3ewqpqc",
  "key36": "2Pjq2j5Pfxqhnhu2v1biqthna69gVvVCsghrpKm1PaXVhBcT2uBLEpXCfKWSqEmFjK5S8xRh1bgmmb9wc8omKjUG",
  "key37": "Uuc3n7iHbYgwG2TDacuAECKYoyTiueoDtRS5AvasmKz6SC3kTQrcRM6o6iyWzrPJCo1FMrqnnsfnzhihJV1BfQs",
  "key38": "4m8qz2mMYoZtqafLxkbfdodMajgYAGRT4DN1J7jLqGL3M4Sy14ZhDvFb7JhRh4XduPbrA2JnJBvxYdVfXFcBPpo3",
  "key39": "37kfrxzSs5qeJhPu61RQnzxw7vg71jA3o2oa6CiriqKWceHUxZVyBvNuZS8QLjMXKBjv1evfhtpoeHAjfKXYD5dT",
  "key40": "5ULbmHQQrHk6cFnsRD9LDiVQ1j93cZ7roydiKSozieJZNpAYLpKoZiMrwCMmRbT4t4rcNTXUCBN8vFr2jcSwtSDz"
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
