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
    "2f6PTpRWTqcLNEShyHNnEeqk8YiknxGmPUF3fAwRwgmMUeV7WqAZUxBb1oLYeZTZYfETdkwRtysch6ex8LNj6qiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MpefofFsc7J1uZ28Dvv4iie17D1bp72MQ9K6d5BoHjS3Mqvu2NodctKRkQjPk62BiBYk5ZhGCgAdDg6askw8dp",
  "key1": "3mWeUXpxSeifBWQEqejKXcUHeVKwM6Hi4JomMkLNbPecbX6mwqDLRjHFa6mSDS5Ms4Zt6sp6V4rFxFG1gmT1oqrU",
  "key2": "5Ek9gtCKthVztGakwo6EPW4tSkqkgXe96pJjUDWeoyFVNdAoqCAWiA6xZFzGPBMrWN8Eo3se7oRD1RErGH5anjsD",
  "key3": "2hCodHxVgRBA3VdzMx34TEqWthT8mpjShyAxTj5DY873XSRZu1kLB7kFWVefWGWzGqHE2YsvW8rQYXjMfCRBFUgA",
  "key4": "3dvD3UXXW27sKm5obJo8KpWFTGukjgkRMHnSrPcKpWpET77j9agdMoXQeV3TXKojDtz7BgpPXhfEZ1NBPhUPx5pv",
  "key5": "5Cp5UiLG939cyQKL2vHXPdwVwxv4h1cFjiYSzWiS9TrjS4r56KxwsrTdm8GfNzS5ccTPoutjaXG4PMqxUczT5NWx",
  "key6": "4tbmVse2nCjziqQDoBkr1cAwWhGU54r9wsZcg43m9QQbHPP8cePrpKAMZ4HDBXNRERnSgRvP81ks9VfZ9idCS16d",
  "key7": "5rphu7EmmVzfoAorvwJ8f3oFX9VdnejnXaXfNDwjrTXVaRZ8ABhREqUVJyJ1d6uMioS9rnf7bs4Hedmp3DbGaK9t",
  "key8": "5FX2AmSh5emFyJu1FzSdmX2eDXzr57xekb7eQEh5JZLQ1U45AoHUhabvr9BRn3sTHo1QtsjebA9ws6hgEXNbZpPk",
  "key9": "2t97CdnStWyHVGWrMrDWsHf1Rhggt3pcvbFieP25nKftacDpVskB3yi27wPs195NFUcqYG53F6QeNGBBS2iPnpWb",
  "key10": "4qNqUgp6FHk7QVDrZZxxyGBcqtrYuaT6TZDAPSjt8Msnko85JoExbBXZvem3hbBRubhnBesVjAFpJvp62yupuTgE",
  "key11": "3eKfmEbQvMYL988sUNQ7kZTrnShRZtNQYKUZA4miAKwVBPK2VUALnA9xHK71o2uazuJV6T8RJS94fJdGRWMidrAw",
  "key12": "2XNE7Hq3yV2J6vWeqF8aLJu6Tb1dNiyer548Qcr9kHG3prCVh4kVf6sMxQofVrYXvVDHkwgtLNJVS31DBoydnahe",
  "key13": "2fy2GHYtXtpsfB5CgEELcGwF7WyQEsevv821tPVC3HMxKtUwXTvCMv22p6JUzsKTKvYoqeu3t5Kp2zL7GjngTe9S",
  "key14": "2sjKtuoAcu34ySXNU85YACwxeNz1ukFmUuueuHn2M9aCkeumNqtzG3anKyDBNo4y9eYKdFKKUQ3WzJs1P214hGT6",
  "key15": "2MDs9B8sm4t5MXcYh4QH5mkfsFwBN63ybxDrRpNE2zT5sHSWjRqN8cDyMDc8CxZppHoSXebThX6aZSz6GGUNydL6",
  "key16": "3Zj3dbrgFxQduCvK8yQUs7RsmAxnmotaQP4tu4XmxopPKwBT7KVHjtgRCjyXw9euGtLirQ9kx7ZiaHZJRpj7J6b9",
  "key17": "3FxVdjCpijn7PL17JBDCScRCpDAaUZSX8jSoXojByMwzb66NHaLnE6ztVQbnJdcJu3RTNYwNcfmydHVoswa6kCDT",
  "key18": "3kyJxxoA8XHwttKDxw2UbkfaaQ74hoJBaYJcAugo5AjtSLhVf1AToKoqngqki741FoUnnzBwkEATcfSxqdx6CBq7",
  "key19": "2bxK2oCR42h7NJaozRXzQtN5roGXNyc81KsrfmhN3FJoS3J5eFqzn6zgZrd3Q43YeaWjBpxeaRTNnJ9XYsqxQwRg",
  "key20": "3VwVvj4GMEXn2JfL27GcHnLSW1bQBwd1mDLcRnUQRmw422SrKtUahXR9Q9ztnhzQcpjYpPi7mDDsVbAa2J6oBtnn",
  "key21": "3NnmmoqLJqdop2Q1KM128XaWZySweFbaTjvr8ihJVuwTTdXGTQUisWeXU8EkdZzTvH1F254DWcZc3ZnuazmTYkGn",
  "key22": "5GrruubX9iQQgzeodD6TQ1Xm9NkoQewrETM7eUmjUcXJaCaPDe78d9qCaCvJXMadnUEP226QaX2NghCguSPDnKnd",
  "key23": "337EwCWdgtuDDFfcpFwXBhtFgXCSTF6rYnkNvsU1SooDAcBmsJ1PGAeviTMcS7aeYEypyC7zM2xMrGjPQdMDT8yc",
  "key24": "Nihe7xq6ACxFJGMUWjVD5owvvtHWoDLXjZhU7GptGCqdRp9YH4eyyYPcrRF2oKafmiSurPEws42Ppn6EfFiTbeh",
  "key25": "r91uzTPm3j7pkftTDHqszaX5VDW11jFupzPv6vsxVmYEeAk4zrHA9LxEgD5hgLRwYVcZCcYE68vAo6Vavx5ydPy",
  "key26": "PEFgzUtK8Zwo5ShrPfk2x4v9qo52V62vrxMUE6iY5jjw18UAJP9ucL2dskNELLsaE3h8AMQnSnZrYFtP8scsF4T",
  "key27": "3fo8rczVAHcbvkUggadUM5CG5gTXTAsJWkS1doYWo6LKsgqQK5GAESrzA9BSsbJvoMimixhHf1gNFR8h5doZkYJH",
  "key28": "2xYHhHz4bSA5NRFXsqUZK5Nt99tVTZZKZBFBhBsFMBqGg3RWf3W4NV8FVQy2YNYjXWw5ftq4QecfhRNFPCwCjT9P",
  "key29": "4EYGYt8WwFigz17cKTJZbSmeSLd1V9QL8K8f1oRR6kQdNy4XQCaPoAKGYE7qMqbbnzhxio3aVzShUFGmzNrYHL7T",
  "key30": "3x7NsgTC6y7WegRaN5gTgKFc4KXSAdLj8yMsbhfbpXUFaaiK2HLan8XtSAPGxZxUZtVdkVJ8VZ9vq91mQgToMj96",
  "key31": "5BeYsMKYWL4jwLxpZJug27eETjTY9x2DrYrJfdm1MMnKWBbfc7RDmWqRQV2wdj2uxb1YJAsRp9FyT6KUQHFHHUqJ",
  "key32": "4AHUoKm2VADXtfpEBUmuL1pJu2A7wU9w2rcQrpTeMp9fUQCNzeoLUbZ86ERhN2kdPsgBohXprNeuNsWpQ1XFuxbg",
  "key33": "5pBCYnh7oM2U6oz6TfuCMz95GdeXBw9rE8Ymziw25VZc3q4pvGsKUUcmzWLMCTBCL2ctJwecnuJAoZ1xBFknnpCn"
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
