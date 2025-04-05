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
    "4FwFrh5mjaqGLu247co8f1dxsA9W3NJEPssZWZbUcyAxZr3CNLpx2A6DVwTQPcn4TysaAGAK2zhtTrfB8xfWkK6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HYd2RFAxWzkt73QqCGSqE8k9rXHCQuXqLMPd2Kab3oixLXYk7X11E9UkA8utzsHu19zKtoNftpdNawseKf7eh5t",
  "key1": "2wsxn3XZsP7vxdNu3kw1YQuLYdMKC33UxvQXDaBnR96ciEcQSy3RYenJUCyLihFAg9gZ9UxpeGGMdphf9MyFRP16",
  "key2": "5uyVq9zoHCkBhi5uCa15vJVPw69ws47B12KkZpRYZKu7NkWvv1iXKum6WdBsszJXFYXdwSyBRJkYPaTbPcLDDwi6",
  "key3": "2CFLwwUyUyFqtps9y1G8wf3SSRoXf3eoq3Sm3UDtLfPWKe4QBpL6ENGcwmznasACxeEH2XXuzieEEkDheEwMyPZb",
  "key4": "4Y3ZN1wCikT5N3sLHAjUWgEygMYRSAQ4ixfQM6bxNFwzcBmHvCX8yMNzfc68hLnxrrj8D9YzJQj8sxvgUEjyiNmu",
  "key5": "sVWkC3iWKybhVgYFaQzTXnD7nxfRbxSHY9sTA1WY1mS51AfnnaFop5rczjr2w8xqT5qqb8DeGK3jS39GEeS7wdc",
  "key6": "64wfJhjQhv31ZQCDZEohmZVeMZdeVcKXbxCZ54da7qyvwRW2EEKm79bCDXkgYwj5EcikQDafoid7HaEHbprBem8",
  "key7": "5pTa3LrRUQn25AJdCqcvR3H4nHwYSR27ZYE4sf3KPTXr9RKWvhfpvcEe7tqNLGEBEwAaEdHPwJCAh9tCPHxT77bg",
  "key8": "5nEzRfVq33KMzyBAvEUVz3Ug6iFbxrKuThhaD7iJ7pMPJ9ePfTBasicgq76p4EJzDGropk3FWRkZmcghEqUAFBX8",
  "key9": "5Wg6F9F2DyYqFgofEZsF6TooZmerdQunnraWtqxGjH9vPA7BNHzoQTBiR4PhSy4Zo9S21qKA1vMBKfzC2P3vELg1",
  "key10": "2vzww6WvzYS1apEqeJt8NaxhrFPqMd1shiEz7ovRqGewdrpkKXTi6Wq45RBFkodFPD3NVJCBjtakg2RbB5Qavb5G",
  "key11": "5wAXNjhpCa71GurYCbSoFMLNsVjXBJFkwDxhZhVcBrovApydisNZHpLtV4b5Uj6fxX4tfSCmuKQjpQx82Grxuw6H",
  "key12": "5gTysJ9erbwsAMQs9JrWvaeaGSrf1Sc2QvEZciuHtqiENH35QsaLJJMB9BArJpQVcXadVoNsnfm92kMHf2oiHHHy",
  "key13": "ynaRUpBawxwkmmXKf22iZffGG9WBnNLamBFPV71U3nz3PZQRJBBn7EdhpEwtbQoxHCKiLyMd8LwyHwVCtJTnKQe",
  "key14": "5CLvPG8qx2zwrEBigUAFspNbMn9g1XjfhGS2U2NAtP8ifoyq7XPPARrQwWbEtTuwmKDUoc342Fm7rGSkFayfx7Ts",
  "key15": "5gVkbQza3SZdf6msZEyoLZ95DgteCs4A7trok9hKYJvYMB6MMM3nCHDG5v77r7oUT9jhCeV9HPZYAxJDywKJfzge",
  "key16": "5LF9Yqrw7bXfGtQsWM5EferE6ZoNge3QuDVnoGXhEx3SbgCFSCCeAYpMSEPnxyVLqNbcZtZ3FgAyaWXfnSKgiE8B",
  "key17": "4pVZk5rm4XnApmpoKiF8mnrEECN6hm68ewrv4Xn6q1eQDjRzURKNCkLXpwDfzeY6avZpWn2yTwjNjq8Dd1Qf3Sdm",
  "key18": "2DmdUT7Lzk2m3kTXNr7HHPRYLw3DXYzhvDk2xJBHPfG2PB3jzmYhc3nHzwK9eG3M7yECJzvV4GExY7YATotF7Yvi",
  "key19": "2184K7oQ6Ds24rDFwA5PGPA8QCkt9L2fv2JdDhdVn1g2eDEh1wGsstGevjndWvptVFq46dQm2qGhZj1dSsHG5gVh",
  "key20": "jCJU1NNQtMo78VKjGyPvyXLREpxnBfRwzTYobh7ojbJFngsSGRW7KGypQbUxFYBjAeLWUPKXrLJMcxjasv512j7",
  "key21": "3yK6RmDtPFtfDFGD1D1aVATS28nGqZQk3bd773FsvgLygHUj6daW7CTJbRdf1TAp9JDGNBT9Bkv3fnCmRRAL95pR",
  "key22": "4DFZh9dUAhPbumpxYCbJog7zr9vSHbvk2ikb3G2vfKkeBxUMQVC2p5DJZZ9bmajVTmSx23nMVHLUiFqb2TpLqets",
  "key23": "2vnvHJJ2XeSvS6S7JBiidFZzkQZ7S2xzH9Y1Ua6ngNQZ5vFDHooNurNWFcSoHYCj7aVuygUqpqTMfmARGNbxnA5r",
  "key24": "348NviEbTEYDTLkedpMB7FUBHMnqnbDSKfdqMAXHmuBazTyMrPi9Rf3ijcr4DvrCvX8N87mFoFdUBMwvABGvpUBc",
  "key25": "4jnuAPXCDFu61XHiRiJUQBS4tBUcGja7JJRSm6K48JURDsiTbA72KekJYX9cYNBHLidbGrhgpFaRAtM2xLb31jmy",
  "key26": "3bzTCdtq5us2yeXPrATpbeNf1w4i6vu9e1k7TfaD6RyyCMoBSMPYFNTdspeecWKCxE9PujtbKBFQHucLkoCBmHsx",
  "key27": "3XJf4qTLapUXzTxinicb6U8piWxnRGKQZAVcuiryXhu9fxCNDqGRd1Ljzvvs45YMNQ2BTp1f9WWjihbcKoasGxsX",
  "key28": "2UsG3jVcTdbZuHZfAjWzNdECVLRT18uW4nS6Av9yVCgPwzT7siE67JqSYbecrdY9zEJpjQ2iaTxAD28ygmpSrLEd",
  "key29": "ZcnQeM4dcBkdnsiZj85XxqzVuZi6fyuj5df9pnRicgkFdkk73hzfYx3emLspHmErb19EG8EZCWau91HHfygTPQC",
  "key30": "3DFoKQvUJDK3TEzcZAA59XZ6xprPcZXUQoix25EWgBzgQaJxFy18WUhWSZzd27bFzuN4RY2ES3QnCrZk2ENiPfFi",
  "key31": "ApChfQNdKiFd8pAiJYU4EiqG5wP8hrmr6bdntuv2nYbmdj8eo6kuzC2vw3A8G7N3AgkBShKQAWsam6KmfavvvDi",
  "key32": "4DF5gUTxZp7CW63H2xGssTCfmNQUupUNeDSBriwBRC29vZzJkNbm2PHcWJt77gr279kNxdp6bTRvPkqet4RVVf6X"
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
