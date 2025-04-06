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
    "3SMcLoiy3K7miVA2s4J3WDGPF8CmyV6i86z6zwxwfosTYozBN9tPTV1tbmsyx3BRgYecqz9uo6RJFRP9D5dinCnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwNJu2Ld42Ed77LTBmwcsgdTZ58DCwGSMYeF3TNpenwkdLhz5FtbMw6sUd3iiUDC3gCNwswvqxdAUWupRqNVA7Q",
  "key1": "2twMFe1HSLGgnDvQoTXPbqxzVVMDT331nTGM5W3FjcZAS9nptdSpUSNxXrRZsFw5wEoNJDLePdp1ifFhBCdYDhvP",
  "key2": "5jrckskLSfxtPdi4jxmJWdskvfJgU6E2U35dDBLGa6L3MDaoQEmuoNuhN858aCJUpVHaZL2gv9vGnVG7W8Jgu2Nn",
  "key3": "3s2Q8hyfZKXJrP2PGS7bHiihwuUTV7qWDStzoqH5Mt7KZQM2opo1YvNPkhqK2VKq6dVnhX9UxWd2pHbo6xaR2GGi",
  "key4": "PPfrUb8KoFsWV1fPCmJfbZ8yLimvCyT3jrUaYJp813FfpoKsgCqTeVUneGrYceLtjNEMDjy4dxKAsCtTTTyxKuo",
  "key5": "3M4TXd5wJBm3rVeGjvEZwW9d5Zv5Z8saSd1HAUtZuJvDhfhAtgCWEctqLd2wQVgyq5NBgmhSH8fNuDsSG9NUzbwE",
  "key6": "2howP65TqpWJmS4q9x7bK4nQhVxJ15FPKaXRs51tw2T4pxWiXD8UPDFXu8icwxUuzq3kSELeP91pjeocFy8rjuoy",
  "key7": "5QfHALP7FB7QUvpUaghVc1ZwS1x1Zt5HCCNENGpztL8kcJuefGdvAQUWRckcRnr2ACCTiqdJtfYEoASkAPcYshjZ",
  "key8": "4gfGxnjfttfpLQ6gEZRkGAnt6pTiJF2KjizArSQejJRkKyw8CHhYAnvLJh6rn84ftswzmJ27haUfvTQgfdRJu6Ur",
  "key9": "5ahYx76vAA327Do6NosHTJyqeRhs9RgxeonVvdKJNL5aVztoJF6NmCfNzCXqeB9yfTnXrZjxfaqPtf1W7iCrGA8N",
  "key10": "3BiNtqBHCGmvJsumC1jbupEk1siwADzdQiQYf4c8ZPbZ5ahGCmEUxPKhHzDEw7zxVmX4vpSzX9pNQtFXkcCW6Z3N",
  "key11": "5xuD4vJ4tWfkugMuUbC41tbexFfKid36UrEiMkgaX8dkUQim9E912RjQvvqQLNPkQCUK9datgvEfdSHt9iyXaWeK",
  "key12": "2UoVEesjdRYK7rRtSc2mmC3ftyqnuJePGEnJ1uQPrp5KXyND5FSi7XmM4ckwkpZ64ishVckdZemgDWBzAHQt141b",
  "key13": "2a3XE9uTVS9gufCXHXymzQPmMNoVeExNMgKLeDZKu1Ttsfvatk4TPU65UAs8eiy5GU9ZryiFTvqe5M6QsEDDZ6pP",
  "key14": "54BNh1BcZpFWDf3EGpYK9wVeqotkjQSx4oux37twLs7xfJXSKuUVGCM1JRsVRzBU96zZMsrYX3GCToRPLhgWLyAa",
  "key15": "5sX2HPrHqAKzwmAYDcnV5Q4NXeLSHnNRr3hc5k9ndDDU8QK5ttku9NeKYD6kfkCP97Fpr9YT31FP3kAX2xj3wAff",
  "key16": "3ZNhhZbG6zG6mjm6enMfcxpWSquy1re1pkeGsnvH3X17CqmcKvooAyXSSZkUGAy2eWzX449JqrrK41Ktxmev6UnP",
  "key17": "Zux8k5raiVfdp1rcAacVqzFEWWwspU8dhEN1nUfebQxaxeR3C5BkPKC6twM6aPc4VTW3Z5oAVsP55bf2C7v9TWN",
  "key18": "5mac72dQteoDobTVmS6R2hYB6F6cPR9Hf7XhfbrLRNgo23QrctNDvk5LTk1c3uwzPA7u23Jrz44QYeNGQ6h2j1Gv",
  "key19": "xF8cexYKPjvFF2AJboW1tfJ2TdJP48TAgqEJyvapKQkHP4ePuvv27VFec6mQwiDLkPrkMpuWKB2ehqs681AL6P9",
  "key20": "2UgzUA7qCMUjssNAWQBXGLm6SoaTxM7n2GoCFbQHokpKe8fLYrocG1obo3ybvHGVswD7VzJbfixWoZG3N4afbWgT",
  "key21": "FGHdocbRsshHV6EGNAau3fj6jsHtzqHSJtzyhDGvKP2uZwoMRu815NJgVB5H4aUtBunvwY4h1qJoCcnP7q5hEbm",
  "key22": "89a5HL2iEuTatYmXRa5aJLnHRGxbJ4SQiqvQSM5Y8pYZxGYXjNiTUHEsYwsP8X3XUdxpXpc1UoTwdRoiKvsL6TQ",
  "key23": "CDAMDjWeeF8Vbc7jgLZgbyrcugwmsewvWTXr1X78QPoPqe1Z5V42gGrCuT9k5VPMTCiyunRts4uiuh5UdmfFfXR",
  "key24": "2amtcJnFgHvwchBV5A9EWLK7xyfhF1oacpXbE5zcMMAxAHo8ZbjTDARhc4AAiupx4nmQNb7PjJkFAKwJHdU6N25m",
  "key25": "1njPaFpAXXHQb4EYbANMU8rX9yhfkNQMm2jkWQFJTTNwCtgtEVMZAAjQocKw2yyuNNdCztL4kpNNXhXVLaThXQi",
  "key26": "4KH64CUiub2eM2er65dBH7qV493rNLL96cHEAR4ZLKZj2qByofqsvSmrmR9U7rUtr4ygJCzpJXS6N89PKPsL6VYE",
  "key27": "3VWZdWNvDzcfeTDpgkamDZAat4T4YW51hoSyY5ZrbBwbFxWMA6y82qrSdBFae3oeNTJd9nzb2WysiNdj4Va4yXb",
  "key28": "3nd4ymy6ka4HGft9C1tS2GE9CtqXeBWGhDPSb7QUXBesChGqmX8t8fy4HXD4Re4yposXm39r2RUkCENXBDGtgn31",
  "key29": "5xP61jUynKQtaZws8WQQwknqVVURDSW7DDZW8KTHR7JZVJs9nULzSh4HYaG5ZecqE3ynhPBQ9Y3dif2BLp1aMCA8",
  "key30": "3brftEDCimBMdXbFaR2tRRPz4YCmb6eBa8TKKUuV3QQhdZSCSsNTsLJoLCnGBU8v7rfnjog7QzSp34RsREc2VzF3",
  "key31": "2ZckzSV3Z1cEuBkr8uSKpFhRjt221V1ejvPm28CQT5FCKtKGtkAnhZqX8L4QfTUco34qKgu6EriJeGMr6dQXqoP4",
  "key32": "2foFgigKGAoiVtsUPoFKu2i7ca7eBnhZuzkz5HALT2RDCVfsCCBRS58LWweL2iFZ52Enj8eE3D8TZa1H3bQxQhCh",
  "key33": "Ta36S5nbZhAUjJ38dsr2GyMQdbxLZ2zAmWriRT3HnGFiZzBFeQDtZuvkmWSj4fARibFDEjHxHrPFptyysdte24L",
  "key34": "5VY5NhaYvxkvjtHJmdBpNHtMUZGoBJkSv7opsrwbpKjXwSYTCcg1Ymcp3PzDPQJYhEHBLPezTWB9wZbX8W6pVnua"
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
