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
    "2w4F71Euayu2vSKSWtvHpE1hK5ggZF1765Co86d6x5b7QKczFW4wRJaYXQGVnBFE13DfdnjiP6imh54VdRGQKq5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bgzm5bxwK4WqWCHd6udeqwmJBEEjMRaYeh4H1ta1bccaiptqEWh97Mauhrodxvm3Rz5BxHyG98ywXwbS36cEd3x",
  "key1": "3MRNqZMjNqqavUitZeBv9jAA35eZn1KLjf5VuktgJesh8EjeqxBSsP7VX8RaXRgAs32QLvnkRKVGpE1vqFN7vP6n",
  "key2": "5ETo8sHWWP8mTsKP3SAKe2bd9ZES3SdAi7wySNaNbvBEf3UgpxhXSaXYrRPraSWDLgTWCTgswa8z2U1SAbViswTj",
  "key3": "14bHq4uVW98isUkYHATQWStBWihcCRv4VXm9m4ZFR8ZQN5vKHWTtuJjRCmoRKjrC25gcj4VhHNhVCry2BX4c9yy",
  "key4": "5doZsvaS25mz3ejGXURkuYTgQUt6QHzeHJc3yTRAfzAk8gteKPmjZYTFB8kwehJm2VfFns6PoGxgTX3ZB4aCcdjE",
  "key5": "3FzrU2Gjmc1NVHkAiuJTzdgCR9p7usoo8PQd8x2dxhLfSjSEpxfX1gcey3KQoHCQq7CVtKjmG1MHZMqpfezaNrfU",
  "key6": "639kvKHJ6wfasaPGDZiUWwRJew5LPMEkMqJf1Uuktp32NFzTL6QhugYD9yn3S92oFkDAjEuoekBdkqc19hujHy5J",
  "key7": "3ZFwhTKe1ZWW1ns2Bx4x5iviEFYVahqE5VSzyXaWxNS3KQ1TAtrDHgE56xTcRMMvNJZVcwAtZuhXiHNYsyUQuLnq",
  "key8": "3g2S3HNx2XEb1bALVNwKc6dMHTta326nbQfm2owu8BeqLMoe6c9PPVBMR2FfJAj8MoSkXYmEj5nEwDRhCWrLVJjn",
  "key9": "5xATvkwoX6WhhnHvr5x8mufhekUJUXxbwNFM8APX2j1KuRNGTC6TaWyELtHXZ7XwPtwk8FWf4kkBh1CmXUUhhmow",
  "key10": "2kTk9mBxShTwHShfoQXg1JCAfnrzPkPXPok6mE4iPJj2e6y5KquiKs7SnfzsKkmc4TkuPNX5XSyuC21SiWX5jskv",
  "key11": "3EVHGKAgDLis1nqPNK4Czy52ES5CwXRZ2c3p643TL1QLCdRj2B5sjhaZx99mHXbYB49pdyppsoBBbshyTXeaoSj3",
  "key12": "4CgUdg5PZUJFVnZPE4MzfojXXkQPyJe1kmXde1BGEmHLTFpeQVuFCeqadfAx6KtwnQDmKZWSKFjGWYQusmaDT7P9",
  "key13": "2wKW4Gcr2aXPw1dfhQQ2vQtvMEMEHmuC5zdNSXtv3K9YkgAJp6xyJDFXiDewMS7nN7uCm2mApFLadp4jq37ZmhfK",
  "key14": "3wTcpSEhz9LvtUbvjBy946Db2djieYmZr6Ya3S3fLEFDxyLJkgxELx1Vb8phyHujnGDtn7ZwUW9ZbYEJdjd3L98u",
  "key15": "24ZPRd9RpnZYN9w4Ewr6DgNX7F6nHS86KGHd2kAjez5wR8gz2ytNDUYqcTeKZsBWQJEkECrDxZPRR6pP4n3epT6k",
  "key16": "3kEAjqp7wY4EnLLXjkpEnkUDdKS35tCSJSnsKSF4io2owdMuDCPmbTk3gsDKRWGmu6uvjpT4EUaFXMGgNZ9U76zx",
  "key17": "NqM7NUH97NwEwKSsmamp8Gjmxk4Z9yMjtWZ13PA51LWqZoqMrdmqksXwQYwqTLjeKRDU2dYmNaCf34H6ueCGgJA",
  "key18": "2Bdpf2bNT2sqEwSsNDvLTCjd53vmm3gPJuq8hCuwFK2BmfK8Tgwzahv6uPj3yVEXk4qTfo4TZtc55KeFRaoPAoeA",
  "key19": "3ZFRzJsZEg9kUBKkKpCY1APyRGeE3a8eSTgywPa2SQPdDeZugUqpduyvVMGkQTrKq6cFs6NnaENPqi3nr27TVTe1",
  "key20": "2nL7wafev814kZfit2DPpvgRKnB7e3QJBn6FEn74ru9R7TawxAXLHY2bW8mgF6MaZeezMJmJHCpq9NGa2Yvzk2wg",
  "key21": "4MAMdCh9n6BCPueDv8Snn9P1qUfXmczGouF3GXD8uUs4K7EDQGX8URCqYsscvU3KUbCNVhENAG5Ri555v2zJiqyA",
  "key22": "5iUBVVtsnJMBLiTP94dyV6vYCxzzGRwpa31wnLdcFXiD5TAw1HQkJFyXwuKr16Nt6FN9oPvcC1anLzodw7xSCVfT",
  "key23": "52pAyDzXy73tm3JG9c46nY8FeiLd8xCg53DgUSwHeF1im8iup893BmrAuSFhLDbBzTrpJ4oyFQtknRKXhsfmWbAY",
  "key24": "FwGAudPHRY8iZKbCp1RA7EWA7Zmy7HUM5XS3mCxFEgZ5z6pKDpiixk1SQz7wENSLjk5D8PdKHW2sST9ZHDH9TBB",
  "key25": "4DruaZWyDhvZQipKsQihjJCW4ofxx3wnxkrLxSrt3P2cz9eejJoFJpJVdvDkMYj1Re7StLnLghxoyE9H4gFoTG29",
  "key26": "Pxruj772rDQ9jRZDrmaK1vKkL3s32Qjpj5F8aiXmGNRnA12HFYUyqTDaWg6b9h4WCpvCPuuC1JME6YifpD69nFG",
  "key27": "3YjDBMgJU7Q6uaKVWTWHk5fyDwwFnJ8oqBsBDEQyYWRMLp6fgGLPDVRYagTchSNa1JPbJJjCKMgMEogcJM8UoLZD",
  "key28": "2jmRs4HqMUYKvfJXkAtnNsgGPLXN3dBHuiBmKLc8w6TpG7naSAMaeW2G39uSiFCjrRLgXq5R4awnZkphtCaeZyMx"
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
