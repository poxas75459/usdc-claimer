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
    "2ZeDik7VAHTjK5kn8EMkJFDH7JpFnoxwbcP5kkNi9C21EWeJNfepW616A4uNsPbZML4Gayt9cuFNWPNx9C3NXFs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67nHCEVt9BXVbGLCSZn8mciFwkdHZLMJf8YnLXXpkmHkxazCFmPzdtHwTFFsKG9ffNEDz4StNa5pXfMwrPURbfcg",
  "key1": "3YmnVuz7fTkYWgcbMtUnPu3L4nD7p24Y3WWwVVNW67dN3HzoAgbrgwbHP9TjvV6c6QtVNPDNeaCR9RkRg7uhtqzE",
  "key2": "3w3hdqpuv3R3q685acrPXPsi16ud4EYr3doVy4ipWXamoJm7sSPpsNPR9yLNYVdK1p4hQfp522ahoNsbXD6BZePQ",
  "key3": "5Au1PNQxPC6J6uXtVysCYepbvm18jUyp4GuoREMQQ5ZdyKFJD2XrEk1ZRnP2qB7e4XnPaQu2UpiqvJ3q2qnyFEeA",
  "key4": "3rv1TVFv35kV1mejbBnuxJSZSV5iWMDHXXYvPwAJeD9zaRmsMnxLfJZ9Uda3AEVME6yJAa6qDWEGwzGMpdLLUb6K",
  "key5": "5iSskSk6Pac1kmE8tf7EkQuhqjHXgpFccxNmuwp9qFFdakPRtF6VNKCN6M42PtwRa8kxWbwLCRtMLQDZ27dwzBVj",
  "key6": "UzDZipuA4tsAMxN4nT4cg9yhTqhagqt623J63vk6PnPnPCS1dorE85Zg6SwS6vWfszhzQXr9ftCKRvP3QkmCbxU",
  "key7": "4t9A86LPqxBesghP2CsSjhdBG4jgT9trxayKMhNFnyQ1EdAkmid5d9gkSTA4yKm7d3p4vJeDQX3nLjMumXFtJRVz",
  "key8": "5bKXv8P6xAvEur4g8CA32PqtgyRBYmwifmSdkCRZyKUY466mMv47fwpPbQ5hfky4J82Rjk4fWR1o9z8iQCpVKLt9",
  "key9": "bkycrUEyAaU5uqd8D5WzKmn4oG8WGCTLCPxwYAyTRvYv14Bf6qbMX22pTXEyWyuxu2KuKQozNaHVsgvwf1WqDFx",
  "key10": "4EaPgstkHJbSULLdUDkzm2yXYCkTQ9rC6CH3ddZAatQf3YLUFQdSkNRFmTXsjJNtimJCme22dVpKWqDsnEw4ZJiC",
  "key11": "5V9XFwAgeYSRomM8Xj9pj7eT89hgrBFiQF6AESkUgGNpYuPxVm1SFaKH6Ui6n2RitYxjJnv6w8uzKzEcEQYGdAJ8",
  "key12": "3sdbotFhXFSPvQszrfAXbGqPmzNemu92Emc8XXN5BDXCVJXx2wwdAa9ePuTKFGZvmgmU3iLoWXQZNSLH1DRzJJ2b",
  "key13": "F1JvSrMdnv8MEA28EdKkm45vK1N6EHkEd5sU5k8cgmFazTysJCm4oLzUXVqGfc7u9xbXCrzVk9nrvzaMGe39w4i",
  "key14": "33AeZp1Tr5KkiyeLcddbLBeuGUtmToBE31VgKntckprniQZt5TxjeBiYqbZ3KoeKcYZU4qS2F5FKXT7Qgc5Xkoku",
  "key15": "2NgDFyeVvdP1dgiQcyqkZBurJQAGgrAhqJ8fVLtJrCXndSREm5nhBX6gv1YD1dr7BfKZ3dEik77H5exyiYgJofNN",
  "key16": "4EePaCs69ipEPJBanmhjrAuceTRtMFbpdFtPqjENaxQ7AZ7DMnckwUN4uXo859WDkTDUXAaQA56sLe8kAHCZWdFL",
  "key17": "2EUHjxTwUKiLyX5XgM7asXMCcmsJAVabe7baEbXiFkt8eY9zjVx4GHz8KtUuPHwQX8woeUcefZpuo8WWKznaoZam",
  "key18": "5wqJHofeL2PMR5gxQy1gp8PaKDeeAaZbJQgznvtmwcxV78N6RTYR2khJrFgk2Kk4n2WLP9ZNdTn3w4hALqAriiLF",
  "key19": "sMnPztk1fnpnCXzVqCPvn25btT8X6DkrVQEHv7VAPxLVVYgb75W62Yfsbj44jxvaF9RUDrPcDLbgaUXu6gwvz7a",
  "key20": "2DtBP8HU4AHRbXERkKVQGmGnms4vHp8Bhab9FbJ7Rk5CLCCHK5L47bhBTYeZ6zMnYtdP5dLc3GqVCrNHKCY3VxkG",
  "key21": "5b7R6mKyLRHC3tP95R4Qc49K2N4HyLQ1BZ1CcChgvmC5FacBArboAmuBevEMdpgkCtRXCF3RabyfBkBfUEEcHnk2",
  "key22": "ZqRJssUgU4ra2vsngNYQjpft7hB1N1rakzjaww2MzTWUXaQPHu1WWPpVeDcaHbFE2rX23QfQcHh3gN61wSeB6Ag",
  "key23": "9cohzYNrgpdsq2zNY89D1yTNGgWqqewGJeVeRaC6jEQ9c3WrXLcqSJ8xoXbEA2qRxSYUivEmCKCjYLAQSXW9CeT",
  "key24": "4wziF3qS6Un3Z4Atc8rDWPWepqTt2dAFtWH1d3An4HYgU3u7QFRipe79UM27Td8gvjH71x4ucTPCzpZnCrhsc13E"
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
