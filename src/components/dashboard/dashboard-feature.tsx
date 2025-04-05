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
    "4W95A2g6i2rbtBebUhWeoqcbvzZVyRCeHKi6o3HJpx6HthGweGapURHdXrNgSEqUyKPB1io3MzyppzaseUSXdKAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aoc1iFJeQpQf6rGcZfDBChbS5sk6KRrWN6SFmTfp2kXVGmeU2D7shtnRKGYTJLNTBm333H99JxFbYGDw9aLbFAX",
  "key1": "yXdXVzbHGow3BJBHPVMTET8snYGScpp22qYjX7aM7LRqt1ZDqJy2oFWXqFxU9uQ3MjDoWcD5zXe864PSgMQYfGN",
  "key2": "ejVQ5tkMopoFDtvP29DeER7EsHAhEUPRb4raGHefwXfSmYzjGZNLCiyJyJGrSmo8WQfv5p24nVo3Ad8R569UcWt",
  "key3": "5VBkmj5hhNMzURXNcS4iFucd3Y9ZHAoK16Sn4hWygyKynBVBr5c5qPe6nq5W8vAdWXXrMAv4mDtb1pidqhC473b2",
  "key4": "5bw3r3ej6VYMcEyoc2aYXUQfn5nqLwrrP7xyMjixvhBH9tejkhRwugoJ41B7ZKgYks2fxXDTSTna24FKSphWpD3h",
  "key5": "2rE2TRLACwWgCij9b7tDduARwg5pywJBxYYhFDG92p6dHTiEthcm1VKAUW3K783TPEFnYffpE2wrwVQhGZMN2EdM",
  "key6": "MG3bNH9k3ohBirkM2tDY8tEw8Bt2EP5rcpmnVxDgujpq7xNkHyaRPfs5W6TNWj9d9zUgh4MsnvR5x868d2gqpc2",
  "key7": "MA74HFPA7Zfnh3J6YPVjEwiXygQ95Do9Fack2zxXeDnLBD5Wy12z5dMtcLaXanxr3X1YcdgvKHSmwAJVa4VHJ8K",
  "key8": "4qtQfJPPdYV29MHLQrmQrySQy6uqV4W91veECxQcD9Hh8kMdMLJges1G1UVNMWtG1k39Pb3WrqV6JaFrNq7JstN2",
  "key9": "4inWJ9rMdoNV2SU7gMBFhasH5SKSdU7ktpZ94Mcum5E9kLFG9sPeA5C8ihwXujvACUaur43KrNSYqqhDarv3QhxG",
  "key10": "z8batgeQKSbmuCTtATapuTGFj6d9o7DBLSDvS9BjWhSQ8N7jGTXLmDNoVxmhz9yBmYLA34wPBRzM1nK5vBMQKiS",
  "key11": "2a3fkTnqGNM7GbAczZBwB9bmJwLGcKbw96WfXLPxKUkHu3eBVqwLTkvbgsMCvLWXdvtxUx7eJeAaSnRCm6zwWFiG",
  "key12": "4BzQ7patJ9hnsM4RmgFmPuNCAbzAM5RkSNvyCRZN3sPcFWSjVrTQ36jCsr6SpZZMY6bWhCgoZbXnZhhZkwQrcRZ1",
  "key13": "33mXPKvtGakBBNbrqPTM8CfGHY8kUPA5So2dQz9egomooQm8SgyM6E5jeNP2aWZnDx55fvkqp8vGo2QRY4g7bvXU",
  "key14": "5sRrgh8A4cHbhTdpMUnEf5yoeKxnBBc4y7qdWN4mobqaBqiTBT5VaX2gfJHY8qD591wn1Q5vmyBa8gXKQ3f6PKd3",
  "key15": "3w5mQJotS7CLrrcwd6papoV1ovDHgrKFLHjgQAeGvwUAw67xnnbWPt9t9bogLkHqBJVKK3mX76ZaGyYqG2dMBbze",
  "key16": "4S3KNzhkBrW6kE4QHTQ5y7E56WV7DNRy19zuykPckWQ9NNaQD8T6zohEtusrczeaM4JFKJro3yfc1QZzyjbCiSgD",
  "key17": "AZouPzhNiJXs6s6FBnEnJuoM77AzdfSkmfU6gaem7bLHpdqv3ubDzmAr1fZJooKk1JDqCrUep9rFd8FQL2vok95",
  "key18": "3aBstTj6j9fb6NkJWtsMm8fdfqL2g5mGm43eJEJruJR5EWSpzucFSTdPSbaCQZQQmqpHDNuoqzdTZjYhc8GHzBNr",
  "key19": "m9AveJTYNmA8h8ofzLK2Pjak22v2uchMr7zFtNx1qMbQSVrHBjw4YoSPpff7iDuU1SWfGZi146A1Fh6QvUKqK6P",
  "key20": "35u44ut7abAUKvhVEk3eGkdX7WYxmxhkt3mQpf8YrbJBWWTgK6HMVbkQwfUF11dEEqhK1yKaS3MghtvCDMiEZziM",
  "key21": "5tRMEEKAG3VpBmZXxnw2WwH37EN831BZqKPUsH77exdkNQWSGQALGiGjj5QP6AVbEahDyynMUBa7u42oWuUqoQke",
  "key22": "2XAms5Yd4DzBH5acgtZ6LgUYjyHeyv1c2aEeNRvQKhPsMKjTJ1y51uquUNMkEaDJVuV5Gw4JPwv6eDFJWDkdTqYp",
  "key23": "5D4NzJsXze4SPv1iAcJHTkCdza7VJwNS7NPVVkKqKq1V22jFmZyVwXY6i3vKp8qA6aasgTgw8jvfmxAk4bQCAfjb",
  "key24": "3aUjnHbny149snFRem5vSZRXYxYoU8uvSGFCRkNWEZ1pm7FFs5ZQcSM4Aa4WoEpf22oE4t1joDUixiBkt1EvUnkf",
  "key25": "2TUUmLTV8oBYZ5u45X2cRB7bqt7VU5zb4BnUF7H6Pd8vuXC2smYMpEnaCxZfFgtPUR2fSywuCUbGjVXGP7EeDYZZ"
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
