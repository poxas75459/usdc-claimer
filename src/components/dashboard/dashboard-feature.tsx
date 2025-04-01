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
    "2QatZ53grRwu8gfNhHm1yiTiXUp9UmEoeAFyoo2z7FY24Zd2tGaa6FjoUWaVb5sizBLzZxgtu6NicUNbgQoLtoCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvPqWgMkXfbCPUnNyneULzCmXhwdxCaRCHZtu7Ks3MDZYnBNUy3D1q25oUGWakmiU6tSdLwN8zbiiQBw7zZAUXq",
  "key1": "24ekbT2b6qxPMz4bx8w71q3DN1ZAP9YSwq9Jr3RGfzrm352xxJrG3o2n5jLxuuffbLnZjTbc5K8Q4pxTqMYMDHHb",
  "key2": "2v2c9564yvTKA6puoiug8FUk49ehtH7rFFPyc2yJMPk4PFyBqNrE5pc9tPeauz4CH19EM3RQ8AP7JypbCxCx2DQJ",
  "key3": "3stjrGhcNZMgGGM4zSkFAwuSU2que7XMW2n78YaDGdiACy4QAX2zF2SyaW5xV5EBCxvhCbt7BArTiL5mrKjw4L1L",
  "key4": "3dXhZcUFPsvmJdxNHEqZzKxCaFeaNzcJXUGk9xwqeheZBDbRoXLDtSv9cwppLpmHKjxuxsM7KGKVbyovAGuLUVWf",
  "key5": "2s2DgpZk7HqUoCWfQvcb1r9hqDPf3yWfLAsKkf2dtHEPkTSb2rDkm2KqMfRJmB5DXtntqyXjAJKTSsWQsHmD53VH",
  "key6": "251JCHHr5eKU53VLjpVkQNMzCWdiz9A6q813sDp9V84MXbydiDjM55ytDgyyzv8eS3tGSoNahAem1XP9ScAsVwws",
  "key7": "3F7yr7qL9gqxfTcypayKRY63p1ZqCmzSRXFDxNZVRremCSvzCsdCzUW51Q9uNkqEV6BGTBdE5pSsyjqKFtF6Yn7M",
  "key8": "Rfp2HFpgcN5fuEvnLVRHvh9YCpGRMWUxQRiP4VVtmodnAnQCyyfRE57nMqVpGMZWcpZ9J94nv6UWgYjNAFyDpQx",
  "key9": "N2XLvWrYwfodiA6knQUVTYrBi8PEYKZ4DSc81M36j9WMKvbdj59mDtyjyTMF6xTBqvEdY77FdtKn2rHdr753LwU",
  "key10": "5k63iQr7A6Cu1Hx1u7nr6jZgsEP9giFEt7VUe1iNM4vc5H4fzGGU8MckW96a4JN18dP8V766Rz3BSqLPUB4nzrA1",
  "key11": "3C53UCYPyvUZSWkzcS8PZAkAxRHCdTqTMUrTz1PqbD7DpreJxVqjuBqzxivv6Us3PLtCuCNmiZF3DFMjxppAuvdw",
  "key12": "3sgZ2NMvSaMLpx3FNm8ob3ZosK5c8DEvWCN7ViGoXuf6hYduUtYwHVGh7U2aUW2wXJVVM2BWgjMUpf4iTBUJ2vww",
  "key13": "4eZuhL22ZGkPpsmNoU9kd27z6p3JPA384HZVsEXmcn7o6op16V5zCLT9QvmayDjVpF8aNsYmP6EEWqA3eCrUxrhB",
  "key14": "94Nb4wSwTAU3naThsgAgSiQThgxe9A2K7LZRfAvyRb17scDxA3oeuza3RbSTtTm4HLJKvcUcJc3iBEnPhB5EYhn",
  "key15": "zmEbposKxLHSEZWsmHn1UgLeYx59LG3JgRoBnYaihppwDyCDrvgW7YNxwD3rsWw75SFfPJAS7Ccv5szuzNRJXoz",
  "key16": "2shZPMtBsNQYGWcgvcJzRx59um594yVeXBi16kn9z4rMrgxj7Eqe6gzBEUojTWmJZuTAkMRN9nZjkhszQeXSNN2x",
  "key17": "4S7WbwLjCKd43aTzYFrhC5N5NebxP283QbmusmWXzs5ZQX3vdYTXkQBEvRBAdswPi2mZ7ss1sJBy7DmSMTc3E4bb",
  "key18": "3Fn5fHEB5eWMdVXxHWWDPpbgr5sbFFTztg26UNGJBTVpHSYQqJQizrvpgtmPw2NjxkeV5oWQ76KUUJWA3jiwW2LF",
  "key19": "Ct1jCjBBVwQKNBbvT1Gkh9jWErMDU5tznsB92QgjGD866D6TvGNStxHQTSZG5FXhE7v3JuEcYmX7No11wuEWfvZ",
  "key20": "4x7RgD6BnazGGtGUCYmUNDcMobPb2tjGpwF1XNhhDKFmwUc5vdQrZ2nS3Bet7VF9mLEBqjx5yPZoVZKnaFWzDaQQ",
  "key21": "qFBuf9e8RsGpVwbtt3hvkKfJLLG6SbxS1VJKwXJ66qwH3EtU8V7df7cWEug2YxTtdX514ud9LMiRc5K1WdTwMsK",
  "key22": "47zXY849UivarFwuWxwG3sMqdu9JbwTXusLX2Cvgumux9sxtkMsr9wsdw1T1U2N9D4uwd7gAgnsULw9bnNzbkrVg",
  "key23": "GUU7cZ7garXFWWr9ZHtEKv23A1jLExqRp9z2thai56bHxEr8TBo3w9vdNRaNhnTNaDeZw36qE4XYqNhwGKGTceo",
  "key24": "5PReo41kA8bXLi5RFMxYzA7eJtoEkb1F4GGoecGLWbHGBp6S45hoebWwUAKwLGQPtXfdrNdJsgVvbAZ3UjQr3Tx4",
  "key25": "29PqJ8TuakBJf24Z2smfrd8Taxs63TheH9yVchf9p3b8ktJCfwC7Zra1bpwpTBveTrxSPuLf9AyBZLbUEybx25Fs",
  "key26": "4apZVSLQn1RjWwTKx4PjR1x8PukpMde7EtGCHabdxMNEdTS3WaXd9VPXCWQiokhGtwoJ2yhEpTHrbmvCYvKciWiJ",
  "key27": "3ok2B5nhoLD3MbyAcuMm9gtwDq9nGwX95898TxmRoMLRjcZm7V8ffkCN4cxsqeKL5FUueYKSHk89QKBw9KZ9MDsR",
  "key28": "65cRZnK77k41FL5MEA2PNmv6LW5qRAgj36bS3FVT1vFFKfu2HTHexv4HZMcCNcLZmapDVV5rj6XzXXCRgRnumdPd"
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
