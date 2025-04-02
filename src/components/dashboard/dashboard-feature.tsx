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
    "3NC4KzVabvMNMGXdRxRvd9VqKHh6JF7VVUMLanw1DxRT2adScVFho2fPudMzTcm4EX2n66yiGvCXe6gUJdSJc9N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhtTg5YFeyQnepPAGSM6kjXCppT5CbobMPe5mhDV2hpD1ruRn2bYAgpCkEaSArELMJWKXsveB2y6hnbznb6GKy7",
  "key1": "3NP6EtjnEzFBcisRrAVJyeZvnRaB31Mii1beeo2CGrESYswYWnwWfiATPPEaPgfh2mHouBfD65heKtKsYiQW4ZSa",
  "key2": "5rmAJdqMNDwyf3i8ogj3yq7MRqpToEKjQgs9XQffEgZdLkBfmuF8ufis9fAPaAUQsmTgnd886F6VGxwYC33kUsC5",
  "key3": "5NafcWLfjTqiQEW4ubDK9SagHmnrE7Hkkf3z9KMjpMMV5Y4UHBD1W9ca6mdEhvJZgxACdi5hnDWQnx468qNkLEfC",
  "key4": "tYnsaULPGC3VRqDrwWW8FmfcDAyuDVrxFi2SwWoYoswTBzhw2yw9NSsBqX2MYaNUgyoFiZ1Txgv95TLTYa99wYz",
  "key5": "4eoF8Q2WvbGU5TbnxCqKb16EVK4QsQQ88Cgaz4mzALBVR6cUMgkBLN2T2QGQGNaZBYSxcZCsRXb7FtRgyWK611yi",
  "key6": "3WqH7rL58TbMqCd8rFFvEJUKw8uvt3Pz6srPkTYw2XQKsdyQiZ47q1KFLwk4YtCKP6JCuNEasPPKZw6886tkpVZN",
  "key7": "3psXS4EeST3kouyvWbn1PTb7iW9zE5U2ynCZUbyZNXviXJYsuMExk37HXxWB7uDT3fxbHwpM7kz4aq4F64Ug9pLB",
  "key8": "3mbBtZaSeFh3vR55V48pspf8XhQp47eweaYhoxSaXShDM7qHtutgANuz1ZsqSDNDc2RWnazuY6ZxB3xtr92g3SVh",
  "key9": "uGVZcmoKU3wUryLVVGQ7svBYSQz8YokmmUDuGxD7Gc7zgsNjhRmYSSfGsvMaySVchdcgaUzZV437zDcCGCBrSut",
  "key10": "3TjDUFXRPjUKmg6aDRbaVbPi2KMFvExh4pXQZ5Rxx2fUQFVAKavEbRQswNNMFVp3gmyKSqG6WB5YE1YX6uqVY2oD",
  "key11": "3iWZ2vRQfjTtFk8S7uTCS1AakdbgN6d1C2dRib1k4zn8LLnHgVh3nqHaajyHzbmN99YTtov8VQJkY1bz8n1irUxm",
  "key12": "3TivipYwGXzFTcNuhPFrPYgbacAgoSR8oVwBc5DA9N2S4FdxfgabF6vYuRu9suFigamrHAJyoowhUnP38LAptkBr",
  "key13": "3i9PQHobpszrYfmJt8LbeTU7GqqphYiPWCUZ62aHFXmoJ6848vAohRqLUpGWLiE76xEJarobXizgPdnxvwr1KPe5",
  "key14": "5ZASGuTawR8wPuSd1tCxmvFba73wGYznsiae85EYxvcUiFz19zsHuD9aDRfsup1u6ootH44SVS94KssPEkadxGdj",
  "key15": "9NRZjhFqigiJzHgM2hgm29QYVBDt2nymE5AMhQDCbDfNyjKKf65rxE4KdLP4qHnGksbetDawe3BPqJdWVqrtCfX",
  "key16": "3ebyTpMBedVgTkapwvMqy9d1jX61ARaKbUFANt5a84Ww7Fjcy4xdLZ93hbY6jAigxn9EV9EaZnKr5UQpFV8LcwXX",
  "key17": "yrAyXohV2B6CLtQf2qSLHQ3vXRMndDhcryon51vPo5NQ2RJ1rh3GNjCCoxubmFbeXUcTjfks4kVytKwsrq4Scmh",
  "key18": "5gLaRyXxDCT24rEMBgJVF2ziRyq5ZkwiHbSU8Vh5PMwvvPagQaRX9QwuifRrkGCtKCsHw5djY6wqJKtwmp5HG9qF",
  "key19": "PFBB2iH5MgfrTZGQCSSV1UKKv64SKDQtHnHTNGCau3hrSBkjYkkCHGpHgQRKEuFFA2QSRLDv88uJ5Q7ZS4NC5jV",
  "key20": "4CM17QiBBRDe4Y2GTeoDJTspZBFbhcUvHetprQSQQgS4e73ZRDWcMxTDHcdveCWqMiLvH9B73Mvj5hREBZcvJsFx",
  "key21": "5Sb5PSRMS5VPjALF83FbErquZ9mkuc2jtTZwyr4vvG1WLYZSohGZrnQ9HCY88WdbJAnEiHf7VmGCMKCnfyfTDRBc",
  "key22": "3soXZU64wgQeaVWY4gDAzYdUYQ73bAiuNcaGLtWxgiapkhAkqfpuRi2EDeK7Tp3nVmzumT22Xy5A2KU8jmApsFX",
  "key23": "2CEt1vqkkv2togKu5qpi2XhzYAv8yRvpD6zZiqL4YzzXQ9yi8qwkd1zPwvv3GKSuYDG74R7MrgMsoNFQJ3caHXZ8",
  "key24": "WAgv3c5EcSZPEDqEP2XS8T4sBXQKFQbukm1a2ik9Epa4KWpJj56WAW556yJD5HruQPMxPQKekZ1nBBCHG3WJHVy",
  "key25": "5JyGYbFH8K3vC9Euhcj3bcN7eLupviF6HuBzhfUSzB99a2GXRkokZzwJp5j3A7FhroUmjq2CqE9Dst5x7fJQAiKm",
  "key26": "YbKdJPVtKqo5618QRivMsXdjCfpkh6FJfSTyescrQejYg1TMh3uSJuV93pq44QcfqCe7wsdtVVo4henjKwKD4tr"
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
