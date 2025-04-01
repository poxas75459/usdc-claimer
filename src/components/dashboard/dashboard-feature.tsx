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
    "5QavLyt9DAkXpQnW2S4YDwPTdw3jVP42gSPt3vYYwPpb5PT8bxgHSCbTZNRvuxnNbcvkbztkbnkQwuSBTKunvtta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLppsqVimXPuPkURHHXQkz2hTL2HjiSPfzwTtDfE666Y2t52TBBH15BJRThjAJcsiK9DDH5gnFrfKjopSzeFj67",
  "key1": "ycXTbBtqCmgwbSfF3oi4CiZpRygKCzzb3cLqHuxM1u1v9bVibdMSFXJdJTni3VsZLof41iVvWpTce12RsQv5VVW",
  "key2": "2no78TUrgxvcG2DUNeByCjbFLNi2Ra1VHyjcSnTaVAZKwgFjtxQ4UWMd577ez7x6nZrP2fDPdrChzgB3Nbmx87SH",
  "key3": "26KM3yQYoTuTf33HRYHX386Gf1qGTAvFquG7zKGMvzXVLtuwzBErEqsskwUqY9WQ1Ux9jQ6za566jcaQAoi6ztGD",
  "key4": "2VFLSkxfpai5sJLiR9P7LS2a4z9wb9g1R17wZhV3QcPgGtb3vSm5zVC6dB8vPQUVQSZqtZkXM36a4ftL1DF1QwPP",
  "key5": "5EBo19eLuny2dxW2XZA75g8p3tRoCbqTeZzrge5H7FzZSxQrjFMFi19E884FXC4awA8mrSv73zk4YBi4HokdKMUu",
  "key6": "4DXQ6ZnYnKhz6xdVdPraCMsBrJF6PxqvwM3ThTY5wTjV1vRXYqpUm218zUvPDoDVCyyPQYBLgHd3NE4WvMTfPHJg",
  "key7": "939gfNDqnX7Ca5MMBwKNBAgR8E89pnty1vDtXZLfBxDEoupbDVQ9nSFDwHxExx7sZQidqW6ycUGrLzmTTSPTZmR",
  "key8": "4WthuTd1MxYcr32PBDn4YDxsfbEN6bWA6CQNvL2nH4PYEyvch41CDun3JjS72Hzz9t6Cg3XNt89PQRG58xFqxBGT",
  "key9": "5aEnZm9tGQ5EoqXXUt8tNAVhfFxUSEB29M1gMhW8DvzRxny2ZoXGVkqkXZ696JZ9a9x5bvh64q7QP6RFmSiAexC",
  "key10": "41kYKhCEtTmryjzgcU7ditqHBi6uFvnJiD9ZQJPt4kbLStxtf4iDJssWcSnaWxEkoyqdjZvy8hTTxdHq7tU2ABEe",
  "key11": "4sQC7n8kokXoqkHgQEFcpvqNCbB3gvNepfXX5Yu7bbPErJxv2oQuU8KHbumCLspEuHNVbKhEKh3Bq2nNJEQHGGtG",
  "key12": "3VFow2CgfFwoBPY5TKgGBEvgkv8NQ7afY7pKZLF4beeMFpXDERB68Z64sLSdVuKJVDBpFrsZHz8iELSNwZhkyv1E",
  "key13": "5c3zkDdzbUoW2Qhx1eQSvxENkSQYzis3Bvtbai8r7eNXWeQadwJm7Rq3KdniNcYYLc9z7LzPX5dUY2BZXwiML1x1",
  "key14": "baPezdYQ1HjYbi9Wb4pJRbYXNPQknDLJveoaSbX7zf2E5XsQuX4qwP5uPK3Ds7qsFdFyv7CrSjpJJLoHWrcPwtd",
  "key15": "3ePo1XDx1YoFqKJsnfQA9fczaNAJYi4UdVG26v8gCUSv89Nm2gweRFRYYUh34k3Sye6GD6LWELE5H2HGypmMZE9z",
  "key16": "3oTGhxk82z4bq3N4Wz5mVQFTFBwQaqcHNGYCzjkXV4c3Y9FUdtWSzsZthRKiUVnMzK9jgzuHGkNTguz9wxwkUAEB",
  "key17": "2ovVySb973JBGdSXySyZAZYHubGh71QgoicmoARxNeY3bqdEMkGQ7qBKoX62zRibQrXqGeSGS5Gnb9njs8snWLTH",
  "key18": "5a1Wv9x6fDtu187cLvmT3gxues1AKz3fLw9GAyfPn9rQX6neNG4KQfps9MqEXWXA9as9hBiRJyn9xfUbDN4M5kxy",
  "key19": "1eLwthKj1eMauroomVKqzq4zDh9HmvCWNA43AZ2a1WLGESAPMHL8QhEThiu2rgBM7yAJg45HxmNM4Yb98LdFMn",
  "key20": "2MiYd1ndt61nXwfDPmJ34WKVv4jANLeXw8KfUMqSEi4sWe77ArSV3Esc1G6dZbyQjQrT41JejFNJJrbgh1X719Dj",
  "key21": "5xYrcX1DRaoysUM5AFCvCpN4HwVYGVKCCe6DZaye4QfuYtczX3tgZeSXSZBi3hcj6L3hHA55P27KVyXA8431zXDB",
  "key22": "389WkBcERK9oDz1Zj9HeUeYSHuV8VCT3HcsXBtcZhRNUTshHyLnMrkio9XjLcAXrTBXQKTLTD43urWKCKKEnBQ9X",
  "key23": "Y9gozDjD6y44JfJzUGQu2V7E7ENX8BPXLtjrXfDGMR83KqQZmQBjnEGeUke1KnXeGCFp71xYU9YthxsjYNKDef2",
  "key24": "4vCtZueT8USMEXaUxADfJFvAYz1zT6SknPDxnLCEwg94gm4XAkeHFeeB2pLhXgcXHu27N24kTHchdnZGm7JXb2Fb",
  "key25": "29Vwi83q7UYQ4JPykshqsfmTnFP4aVrbvfdNtAybvxhcPA6Hthmcc9kqiyh4ehjxmVZNsChBRLsfAsCckSHwqjmE",
  "key26": "5ue9TfvZcAu9uVk6wion7oKtxAdxMjSWqcZqoxGR3pCafhkNYyw74RKa6U5eRrNjeb9BEQkx1B7iPWeBd3XaJ7M8",
  "key27": "5F5TnCincBTFkKRHKoejdnSWgPyxbYHueUAi2HAG97ugNjQczCsXBBC5D4KQMZTpEjRz97eYQDJZ9hDLSRzzZQ5s",
  "key28": "4DEsYmvJ8ecjrdei5EUMJVwMPDm3fBrou28d1bDjD27GTEVZDq4RivRRQkuALxBUJUwGQCZduQoPhmkhzm1jE62J",
  "key29": "5eE6FFi7KVbJHxL2PSihSJC66mrT1vJ8SxbkoFPpA86hfjoTVmfo9Ufbi3DzTZTqDsUkDqUbeBY82CfeRQYLTirE",
  "key30": "4zjdCc7f2B3aE8kkYtiYjocCVCP4ZBxoRbvzoc1nT1SbQA3hnkcpreHchsmWbDagMgaokkgn2KsWV69PrbLdCb16",
  "key31": "3GmSwwkc7uKHJpx24HmMq5M9YEkwn42fDo7DqYfExm6Ujimosd7hg7EAw6xw3LzkHyMexYwGPMQd43Mtb6mrepP4"
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
