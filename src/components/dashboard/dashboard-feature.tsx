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
    "4q14KHmjGbzL48KWAKwZKYiVC8ZUuocwGD7dzrpxeGeSy6s3vxjG4h9i5nBSVwhrHqYpYaBPBDUf4Fvh7AMGwsif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvaiwuCo3ZS9ZJcZ1qarw1ZyT65huKC2rnBoYYaE1qmWPjJFFr5wMen92KhtBump57AUzaedRdzpjaC9uyAW3xY",
  "key1": "2gak9dXVgVitd792d8i2srnvkf5VHYBdUNj34qbD7Xsjhgg4WNgNgUv8BphBmVmZYWo59T7kbaiD8LMhyTWcDLaa",
  "key2": "5eZdmqWuaMKB55MhFhimp86djHG2GEJSnksxF72UHr2StC815oUN6Ea7WGc5qzLadbYoNUjcc7EtEVo61WBfKTKe",
  "key3": "6AqBuGqZqKAkFVmxWvNR2nXhhSW9SSFhX6nTbhrKBPMisGVqKEfKKHGschMUcYpvp4GcV6U4pELSC7Gx6MHGRH7",
  "key4": "5fPqv2UbXaC3BJ5HcYWbxidimzwcn5hdLKTBBYKLSD36CvvmzxPACKqwkfsNeWfLARFXCzgwYUsoiM5u7JuspVuS",
  "key5": "4kUB1mdFJztemeB6bANwLkyLtMShQxuobn3Ai9N7HiJTtZLeTanDnRTHCc4CyHrinT4ztET9tcwbBcHy3vNTvuMZ",
  "key6": "APJE7iQ44xgRfbNG3mGzy4g83AssZBpBDr34haEmdQPma2V8mDmjYyoTeT2miiJm8K21uERmZDa2GxX85B1wD8T",
  "key7": "hUAt4ELUM72LgBwRGQnbhH8zSWdFauZbRc2j7tYvwVFUC9FQjom9LsHkZcqg8sajQKMrjgNKm3dZ3CkQiPXGWVK",
  "key8": "5cWUBXM8C9VxwwisCTAhTxDhTQiGicnF4FihLrmowNGEchuumv1W4a5APK6fXY72KbbxrGsh81qyPgGnCb8HuXae",
  "key9": "36pSeu5WbWtjje7yy2fyvCXxUnnJJAnMrwqQ26EN31Pfc8wFji6f38C9CbL9ZGvUF6D1haBLE1JGyUaZr5g76iFN",
  "key10": "4KCcPiDAyn8wUMbGNmfJ5vUBRoTCqCCM8QPd5yacZjYHGHzVcusD7cbfEqkYFCmfqhd9pWisz9kdENGtY6GgRxMh",
  "key11": "3gVQMSHpTnuYwaLtCX9ZgYs3WdbziEYb1agyuE4PqNdE22VPe6TgJizJmjBtZLbcmMxCZDL6NM4oxj8Ma3E1693o",
  "key12": "3k3GDqZufdAh1EicrCn2jdY5k84P2Vmx2y5C9aVREg7o2xtSKREzUEyCr6cyoQs5TUcifNy7aAQX6FhsMnCTHXtt",
  "key13": "47poUF5vx86aacRRaQwWZFoXf5YDJekC9SqrY7rrhfXyKYfv9x17ZjsP9L9RCG7Z1LHvmhGZUgFWa4h6x3yzhZy4",
  "key14": "3ihokZ9f4yBFiVXndGbDGYNveRfYAjKdzWsVzHay81YTLnMVqxCQkpXssxEYYN2imE6i5qSu6NQKa7myq88i2Hip",
  "key15": "3TQAeQhd6N2poPUx8dzqgZ98JJAy5BKab4kku3y2yZ7osnvchL1Hia4nb9FGNKeoToJJUABt1HutgcfZVSjPxXzh",
  "key16": "2TycCCjMn2V9erjsmtmgAks61PBdnWC4Q8FnNLxW7gNwQvRPS1fjux7m2opHmp63k9PSsw6C2tfm4sKz7q21jv6J",
  "key17": "3osvtZdkeSfiuSKMggHFtQKhxg9Hx8uUqrrVb7FqKuoyCNFoCMeM99SswmNbvLk39dTqbYaV2MgJvV3rKwQMrs9s",
  "key18": "3ScgXaVqRx8JgnWoDru26wusJPPNV1Ep2Mq8eZ1bePzNNrvjgQJnw5TfQ6dpTZxSxfcjJCsKM9mQ422ZwrkLBT1",
  "key19": "23QtS1BFwvzia8rxGoGdKwBN3YgSqm7NGJic5NCsBTiREPCasHckirhqALVGXEDMkddNUWfdQPJZhDmLKHC4krAW",
  "key20": "223ur1uTbLpV95jnar9Zw2ici8hqAGExxFRMauraMQD748RvBfT1udS9AUPrFFM5bDZDGAKj2ExiW9kNiT93hEbj",
  "key21": "2vEKdL4vcXEacktnoNjPG2RiH9ReNmpZPbB7fkNEqVtkc5yaVExqVXWfTesq4YoLuJcMtLdQ7FDsYV7HGnU8YvXk",
  "key22": "5PZ2nBzJXafxBGc5gyhdGskvGfQLtGC78EejSE1WrsNK5QRcv36JeX6utDDJwkouNHzWM9uJ3xtHix9d5zBUnMTz",
  "key23": "3xMKMd1wYhrTr6Dcox4FhUfQCzGistb8vSg5eSu6ZkxAS8jGjnnfqYmCXHjULHZdnM1Y9Q21YqcgKqxUmE3t5GR9",
  "key24": "65uG6fRup492y7BVKrVGkELmTW3F9TXdkGctpUddRPgC4WPGF92pe7WsCAMweJxD945EAUuA3EBky6VWNxsQqSpF",
  "key25": "5Zt9cRt79P13wx2irxjwk1n9i4BXN6E3VSaofna5TSHmwnuMjt6f3Pj4byaHRREabDAQNcBpqZxBZGRLcNvcfCvi",
  "key26": "5h6PSL13rc4RWFfSaCNwDUFREvearaoWLCskF4mRxXYdR1Cz9BWrRbpeLwvVjvapy26bzttyPahxJZeCyYUsxcUK",
  "key27": "3ruasw3TjhBqx9dwziw8gger1JBg2ggoRySt4z5DEGg7XYZdWVj8s3x89GVcvgDLrQF6qdcnw3RR3HjR7XajfqTM",
  "key28": "4f9NfWLKxscgSHy6vDoSF9twEjjBmua6nPVd8ASc38fgWJ6g6zDqY7P7qGmrnJKHRzhAQZzHf3y4iia69BuQmGQD",
  "key29": "xxJpW1eUK7TAmPGHguu5HPP443ShEvPvAZw2NFpuSp1Ta9XBodcWBtPDtNufJP3EEVVC4gEwzkQqvQprxVjjkKe"
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
