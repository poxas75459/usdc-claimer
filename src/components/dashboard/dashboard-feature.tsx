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
    "3KsggvTD869o3ckW3jxMxDv8B7qqgpRQgtpFj4jQc3McLooSQSCPMRvJKT6sG5zDCcNWWcXRkeXVJAkvL1N7T81W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihd3yFXR8Kbpz91XveYEQHez2nvKaXwrKEQrw16sTyGLXQptrT7LGJTthVZiCEomw3GAeAYpcEmWV3trVT1Ltug",
  "key1": "2pxvyqCfb633SBUrstXQEDovXRi5gAktwkBC9jGVmqbhszFctcAB4CFo6Cb8Lqb5Ru2JhKyfQ9zVhZuDWuac1B5Z",
  "key2": "5Hu6rBzc8HTPCBhC2dFk9yr6X68T9qpjTSqzAnrauutCkNRhS8vPUfjBbLtrQqXFtsa86rZynjg5UFm2KgbXkbKy",
  "key3": "3aXHRaLQsJrL4hEr9LRrAGJpUgy4tDoVViFn1jYcvWmjstABh6Mma5a7pt16q3Vp8g2YRSzCw7Jv2BSccSpL82k7",
  "key4": "59ttABSDLEwg1UEf8XuBDtnPmJaY6W5tfBCFt1vLBVwcRkgbdABnheF7D2HnCgg6RRrnwz76mfTaSHwSW6Pk23VM",
  "key5": "653kDb7f1LZoo16sehGsTX6t1DU1jdY8vyYcAw8Zh4Y7KfAVewLESoV1nog313jrqDFoXQp1ffWUFjvk1ndiwf8r",
  "key6": "5FeT5ziXEwXZmpxpU2E5692BgJyFXydM4jsJiPUfVf3Ct97FjbCWpFF2DEeUcp4r64196uvboXffomM6vJU8q2s1",
  "key7": "39m8f8ySywVJRkaVznGDoC6zLyeqyjorLzDGuw6kjNoUQM6TB2nGmRRxbDWgkvT3KN63twuK9VKJbXcXHzfbnJod",
  "key8": "3k2WuiVf5jou7rZnTydWAkQgoCDVzXEtZryLUBRVjyzeAFaba6pFS2KxrH5Tmh5JUU1ZNTPYpjEM45wG6smbsa5S",
  "key9": "2kWTupYVZboQ5nh1zE5bSW85DLQ8shvsy22Zw7Jaze8RnuwdJbLTYWRNiPLCUa1KY9yJsFHMeYvXHTj2ekakSTfZ",
  "key10": "4X1q34S2iqAP4vGaJpdD54Qoy8xwsF5ASYZb323teGijUf4ciYdNFYaVRUKEm7A5j5jksmcahvdhtVg6eL8xvExS",
  "key11": "JzmZsCBFqSgJ9fspDTFqMT16VSvehonPRioTXNNPt4iM7Mz67NbdfeJPPS8VvgDDA26UMNaU6S9VUHURRMYEC6o",
  "key12": "rTEvFSwUjErjaNzkPbQySvedkYE1tz7XFmQBcWMxAUs3Yz5GpjSgut2Q6wdcbGNzwo6VbvCSKvHZwbq71AFqh3L",
  "key13": "4tWaCHqrD2VkLRETaVxhfDoJf1P6i37N2uCDhANsuyZcynWoHqg4xqqxtNoq2VELbrLANpHGgCZrzViv1499Px5K",
  "key14": "5pi7rVToRoqkt5UUXQEvhKDZfHsB8rkE3jN9mhy9CrbBXZBrgq2R5cJyP3HNV3TgfyYeRfmSm9LwxVaXz2BBmqew",
  "key15": "3fjs2Mjy86BJUxkrQ4deehsex42Wi81fDh2agHWYkY18j4pStyPjYd1N65MRM3YNsFN16nyCWRMYXh2zngdn9rvK",
  "key16": "2pbJagfwLchRWbvXAJLvzytoxhRagJpdb8ioThe3fKs1hRjyYBgzNbBVmMJvV8KhPg7a6oECckB1HMe5kNebavd6",
  "key17": "2ngSg2fLXYAxtwmJBk25JXLQvLzynKFXyPiCdvW37NuWLkuTzhUHNbrWwK7dJUH5MwrdAXMSbnSMnvJP4LL73gp9",
  "key18": "2FH3GYZq3kwuRHZFkfoM5cpcLQhpRRnaCvHFz8JEvs6c7drrh42GaCu8tyR1irzRQRCpA2xYqs1jp4oaPJJPvVGD",
  "key19": "yNyR3hA6VULEAg9VMUcBwvkkDZ6yJZS3ywS5cr8vwyJhHonAqkJCeBk2n35HGyp4jmRq84shJ8YS9V5V1MWwM6Q",
  "key20": "3MBP8FZKgRD8ijLMjWuuqahjsTSTgE5heapWwM7GyeUWw2aABqppgEq38zE3VkSpTm3svhV8tGK8uxizSjCy9RYK",
  "key21": "EiBgXnk6cbseXPKebfh7LTVQBKha6RGuvYHcmyW1UJ8FYRSyMxNK6MYzXbPBWBkfrKpEcvREegcZKyHX222FXyU",
  "key22": "4z8YeqxHr6WkKVS91bdM6r2fBvhLnFxSrv3CTchZSVcE6sEg9a7dBU7JpdecdLjnKu6W5geZfLYoNiVjRvkfThqX",
  "key23": "5K9gA3mewrxSPAAsBL1Kg9SCAXHcakMPe58NK7PvQNxc39HvnwnuRFtd5133vxF9Hho5vgLwK8oftqNiVtC8KA9g",
  "key24": "4iTLXa6vkSHRrMEmqdhuKkBm1txDjYRCJQQoFcPmPjdVxyZaeA6V94cCSRjZZwksVxFAZrS9BXPcx49t9ycGyuY8",
  "key25": "5d9A3Z4tSXBWsjQF46y9vRRQsux8ypBPoyne5WZ6ZQNSVqz4hujigUDyqs3ne3vLSXK1vnzCNQZTHwMdBSN6y4zx"
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
