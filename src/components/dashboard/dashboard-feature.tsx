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
    "3tcP6H5Z2SJ3Z3x6rmr6mfPUvE7cXa4E8gXRsPjwaHXp2coiJGQvyV4DGp6dPFPfWayzQATRuVUk8vsb2gUpFqYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DtyCJa4wc8fVrFDDyARmj2nEWM14m8dNSrg1AhCbsrsttvh7W8j3Dm2zxAcf7Nf6ancLr1Cuno7jmsZuAUGLDr",
  "key1": "5XmxMTTBgrxLgNhra2FgpFGsD9AkGiB5nDAnvbScQ9aV9S8PmX3wozut1Dw5gdDKy9U5hnM2J2SSCgrhLVoaQ4DQ",
  "key2": "eTxKkeavwvUQQTiG1vUA5U3BPNWtijGATxdte32Bu5TpYRMbSDoZThQe84poXsnRxFDS6M6KeYDPp9QG5V8vmDg",
  "key3": "5wWy1q9sLjRxgtb1LDsEqWzZULCAannpgGiiYhhThnpXiRtKGxDzRYytxfkMaTVShHzNgDWVUyBWNKr2Muy6sjm7",
  "key4": "3Vrv2wJY3LDhzSh2cL3tgK55hxVoFdCiySm6nFvFmT3xy6qtZfGxHTSJv9P2aT1roGb3x6nTYxeKGnaM18XH5CoX",
  "key5": "B9WVeEPWQZpUm9TxxiMHtia7QGLU89MvgSWvTWPPy1fQsXbtUZWz9PT2j1D8gftjSrmfJp8dCNGJHQ2GsNBv2Ef",
  "key6": "4qjNAA3Pivm8FLBtvTL1b5H9FAVhDPKLuKyMWnkn5cShnYGDtD1LqmSJnTncPzQRHLTHc7zY4KRJDieYq5buSnbw",
  "key7": "2DEgdF2yhXmoMus6zCoyxuWSr5ZhpeCTbRcu8LzkN6b3YdjM1J8vaadaoNxUjnJgphNEzsYTNcnKTigVEBgFEu1J",
  "key8": "qVyqPznP4sEBirCWv9Tj2vrfF3pQReBWMSTo2R9aqrFvppfKLtbik83pqfDMeh5p6DbRBivAz4PW4WQTurxSk2d",
  "key9": "4WawpTfGnRhu7VsHnjFi1uEF1h3Y1Lw8Pq8pHbcUFcVybV9WBTZ4t95xKjKptvs2ybAxmLPLgugdJqP1jBmAFwmW",
  "key10": "3sXoj7hdjVkL5aZSgKL9KnG3kF3ceyNx5WW9BPwJVZjUYUM25FEmeVQj9TrSE58T63t4Dsx9tHKX98NTSM3Ga6jT",
  "key11": "tUMNH6k6icms2p4MXSiYNrZ3AaVzkbwrSHQLXQ3PfQQimUjoua1PPG95NsxrGyBQmKTJSTfLwqWKh45rN97i9aJ",
  "key12": "2B6fC7zc6GYCpiGbR1mCbGqQYEFBxAbQ4qkXdnjDiudaFijfX4owpxEAJxvXpwwoenjccDyysKtAoQdcC5P6Ti5N",
  "key13": "JBm4EVuM48gGsvKoETSpxKoJfDv4HaoHckqf7c8eWX8Mfa9cR1JFTwBm1NzWZJTxjZDxDdp5rEPDQEbmVGsYXSa",
  "key14": "22KuuYGt7FD54mJG5E3MhktZd8omWcN4ZssVYeHXMJmvNqRCnBSuH12MSGNezFp3zW8ucHL2t1ULm2CW6tiAr97j",
  "key15": "3iBk98ggvpm8HG8feaQXKtk3AJgCPnvG5Z8TgiMvJP4K2mh2FZLyZ5CmPZu5tA9ak7qRJjNVUhnNuP3rd8ToR4sv",
  "key16": "diUZJbh4KsdCScs5ftactvKiqCPwLyfxH2oLcUG7PzhN57KaNhVsusZTFiQWvcnxGy1ivG1PEYV5PMrE3f1hUov",
  "key17": "3op8yN7SwmSiRyVLXg8Lcv8HFhTxRgqFDoEiZnFTYWQMZ3kwXQkFdXMxAPsn1QMqZwqF6EkKY2emrsk5kGLRpQKb",
  "key18": "M7s96rJp3goZ1wUSLBKz9WJB9Pc1bafkbXBmdmvhkk8uBneMsPLRZUvSQd381ikimL9hS8sGh2p2fxVf9Gr8WAZ",
  "key19": "3hDK7XrFLqAhHKHSWtwM65gDM9mPc45nzd838n7Vk7WmiPwedHGFVnnSz1dpCBJMkREFkqDvEW9UREmfG2PRM1vz",
  "key20": "2ALyfoqUhiYJ3QNPFnkSrYnMaYdXbBmZC6s6XNkTT9jDpqhsi6NsvXqFZNecZSYo1wuoHFVDt43a1ozmEYnvD2Z3",
  "key21": "BsnXtTiGvaLFj8CJWC4QFeorcwHKfVmrq2CMbU4gCSb7J7mviqcVpePysVfy7yCjNeQoYTMHqrvQwBZaUwchyez",
  "key22": "31Wej7GaBKfuYoNu9D4BJyy2Pkd526qTcYi9UrRDdRsz5amAv17VweBGtz8K7uz26k7FGRzDKd61NZe3PDLP67e1",
  "key23": "CLHh2Rfo1XAfc3DQnSbhKAazEzLbWcZ26rMaB43q4GiBredZKF2Qs4jWeC6vE2FsRAnZncDSnAoHy16HaHHTBq5",
  "key24": "4EUTxbzBWFtGaXUTtVHRQuvbBhhPFbg4rH3KN9wKTMfd1x29sFyHZjnJLsgHMrBQy4ByC6o2s814xay1Dh9yjUBo",
  "key25": "5f3zYVBF5HTvt7SqkXpykxZB5zFYxZu2sdUo1c2GcnfvC11nrKsxYGQ41CywHFQUyRknP48bxeW45V89XLsGbCqZ",
  "key26": "4SL3Y7C5jeUt3gQ8pmq3HfcAN2KGS8kyRdhkqCVChsj3qxokKAjtkz2KKUGTRcJVQKRUEcp69QQ3uLmeMvEJfhS6",
  "key27": "2yb2JhiJiMScHwYVGPPS5DWtWVo9HRDNqJYPWV8MC11UUYDGzwsSmRJqCcZuN6GzsHgmfivfZimm4AWtDgiE5361"
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
