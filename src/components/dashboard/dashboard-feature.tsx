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
    "DT96a7RmCfbeAJxLJXHYsUFSr2y1DNnzkvyD6PEVYAW74d11YjcQp2o1rcSBU9auEPFJ7ADY5DixWwLLKZQ132P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZsisUkC82JJMVDsK1T18f3qcS3wgTaYbrfp8xemdPufQmRHVRi42B3GXQTHUUKbgxW86UrQ2vmBBiS1xtEaYaFr",
  "key1": "3XLJoSoMXbSB3o4Ze4LnX9ihQptwQmp7Dxcv2cL3Jd435WzvSvpMBLqyA45iJyzS1G8YX6qdgEar4iY8Qan5ZcPE",
  "key2": "58t9Gp7TcsAfyAqqxehfF5YQwryUtj8ZvsPwd9dR83gumcaUd3Et5fcwHX9Xfa8RpvjvwrMHauKkgDPYkrf1aE9q",
  "key3": "5KmQ2tdgSv91bsHimh3Rt3mJNzaG7HunRGAke1vSFd3vF4qfTJSVbTAfh3iA2tqaWQk42Rui7CygPgbw2TpqJ8Hd",
  "key4": "3dBffcVaAqxFDAeTbtrLgXxLiWKrfStENGndvTShLLkuMECvio457gfyNPgVo6mEDpgsoZLxVVs4nqKJUbwE1s78",
  "key5": "3YwuMfb5FiAZVwVNGjnydgkfXaSgK9Fsp7ouPJzTAkhnaXwg3XywW8Ww2mepgkfJZk6af5ETMAAN3LTt6FC1GeaK",
  "key6": "3GkRs5rtMmT2rHkbXkiVy4eF82An7Ph5UGNB1wGnUMVwzu2PWciepVV9r5Qnit8fUrJnF9SCSbnptutwqsG95Q2m",
  "key7": "4Apn9dwJr3amH4ytPbczpE2FcsmitRG31eYScZUNeN5A7azAXNvQsv3xoNNWgt6AKL3iQnUYkbqKGFsbubvEe2Xy",
  "key8": "2wqWLkvYsqG2N3GFo9tA4jcxfvBSZW9hGLnjTnCthLbKwjgfaNNGW2jbsM3wiecahQcjSF3vjTAMmuo9WpuoDody",
  "key9": "rn13HW7KGLsB6AhUijCzMY3VddGvDm9oAkRHfCdky9f2Fz4hfSKkMtrCTG6Eb2jLK6LfLFtZMEpguMBfQgAL9jM",
  "key10": "5RpjW5ypRHtNFzr963DuvCWhVQXzizbPg5TSXi3rGj67kPRSKrMqMNFSucJEAWXpTC3M17hCSedvkJF3X9GBFMHY",
  "key11": "5RdZxJ4UPN22HVurYwMdxzXcMVprK25J2Xdv6e4CDua5RnnY95R3Y88HW3h1xLmvRRM7jpQPoH7kKEGgsv91ca7h",
  "key12": "5yzYBUox1NVVka732DujzvDVgNzerQ5hZaQW2yDhVkSnZdiuqpcrXAXfBLcnYPtDQ2cNrrgDv6snHmeZTFbKXhHm",
  "key13": "3kswEp7bXLJSuNQiSQjVfb54uqsDqbwLeLZ2qwFxawbuLjsSmX8LtTVGQFcdpAQZxPpVD9gL7GAfktxKyRr7jAeB",
  "key14": "4iT3itLxCyimJSWFotDqEvUaR99NmVg3cCNCkfFRLiW4zynmw5Xi8gXg8inb98YEx7TsvEzJWrHu5SQcSyN8AtLk",
  "key15": "3Garq37UTH4qNQMNZQdBaCrb6kPxxo5ZYva77Spyym1KKgT9vGbNuD4ahqgtNbHp933761uRUtD2zX7PZzqULNF7",
  "key16": "2osTLQczHcyCEg1jUmPezwWvk3WqUCcVEHqnXeaAfZX7CWfAHHqeDhqidyg97o95tMuCmABdDTRs6AWpAYkA7hju",
  "key17": "2cZcBAqx2hVgs6XNWWMqUR32Dr8Yjtk7ackAHaH6PyAVZsqhf74HGbh3miio86aF6m5FNDoFk7pdSV6RN7AJeDJg",
  "key18": "5rBN47bAVhy7xeqkczX4wsWWeJoBxZ2ZeKeMuYsMdovS1LWXQQirq8ieJwJ8GWrsxpVeMQtbhaJ4VdbELcg6YtLC",
  "key19": "2pkdjKWouVqh3jZpMJcKdRNQXaJNWH21pEtxJhBmxWo86nfBcbhkmJFbiXf5B95txbfjiKucGAhUUnnJvpP2yBdj",
  "key20": "3txnYpZ5zCmmwQ6z8ZerEuuGk3oYkhjjEruDDKNHKr13ubB9uY4hLyyg8dFPJZy8P1yufMs5QsNQPhP5WG5ZYY4a",
  "key21": "2WYQ4PVRqDMhR7SaDurMaxciVqk7AbMEAb6ELtxPfgLgTJN6BCS3DkHreUYpc3sTtHisqJW8YQYrxpwdBLAUv7Q4",
  "key22": "3HFxoPaQuSrQFDEyTNgmH6JfHEobUCzXwUykBh3CVaJemVkuy2bcidYaWhU8371BjQw249CxMzxMLGR3jy9SKzq4",
  "key23": "58FDE6mPHKNSYEZ32DW1eAjumiTH8D12VKRjHGq2JNhjJgafxT3h1JndDGrBsqW3piA4ojTwxKcZF6jdTXWxkssU",
  "key24": "2yRALtPVxTtEZLTSoaiGzCbuWBjUQ5tuRPWthQziHHvnmhCcEtPhLx7dR5Swx3QqDAzpw3Sqqtuz7ZDMFpkWSnG9",
  "key25": "2c9hBAEfDs7miSUqhyzZGSR9DT1VzwNhDcQksgyzKsiXX7w9irjfvFrZnCDs2Y2FjUQs7LPstYaAEZZLB2k2Uvhy",
  "key26": "28L31L8pco2DLJzjcxXKy99AF46WDr1q4zWNmTLvzQdxW1iiJuy1ZsUhzf1eyRsc4WgA6qJTHwpar8aDPNVAWPu8",
  "key27": "mCi1p1yBjkAdQTU9xQiXCjKdWpXS9wWtqDWV9MmG5fX37bJv4jVpAuhFy6qftUbo3jUahQnqCjLmwjNhvxkFFib",
  "key28": "4z3ZXK8bbq7KyCJkNWtuk7hT53SYPPd81S8Xwt155Eu4xBVB6MsS6mPXRmJdHWiWUsoYCzBefs3yC4ob6DczcfGd",
  "key29": "B6YfhrG3xbChe7KzehL4J1UwVLqkb3chP5XB7Zjdsp1DCoRkkGTmq9XsXhYqiWLsjwuKfM2q7oiLrSmbP21SsR8",
  "key30": "HWxxB5uAjfQhQ4avCnHJ6KJogD3UMUeUYSMd6GqVe8W1TURmtr71WKNJQFouKi44SaXxj9ik7NmGj96nwyMYq4A",
  "key31": "3HVjpypmWeEhy9o3yZGtxT5GfVWNWAEt7itCvk7R5TEhsfvatDdcEmJNdeYWXHFx3mi4KMxKcVdNPEyZMuRFEcHZ",
  "key32": "4aXYf9GpjnnAT8TkKG8TBptEoRM8Gp6t1xz3GeZa9TqpdpcVaGkhBdoSWd6NxCrYG95WTdj44jrier4srJzDQkaq",
  "key33": "4zAyaqVKwCaNgqad65AKbLh5dz1o6waPDXLrwqdGsq5dufhPCw4dRRmViUkXeWsAGmBmbXvc2qCHUcUD6in14SQP",
  "key34": "47LM5phA2YXaAmwumQo5HGKKMXkTmgrqHtiMkQAJzq8h3fxKiRnLKpuafG3XwipdZBGbeA97rUH5LZztNwLRSdZV",
  "key35": "3tVsNLnqrhSYU1GaLufgdBhCPR4iCoUyV6W2soSHhykh1UwHMXZeTw1FuYZ5skrfBgBCGBCA3h1mA3epGzw8vy1H",
  "key36": "5uX2PJNyBnf4Bo4TF443dbcdwyDCBoBxTAZ5ZkmDBM1uoxRLuAkeGSsSWpTtvSFgmucHD5fAmwEvA2t8RP7xF2qg",
  "key37": "47keAzTWDxXZJ6Mj9K3tPJciYX6dNKFYCxmrXduk4S4dy5KVuwFuGFgfpNxXYejMCsZRgCAYaAoEVgdsc48PtibE",
  "key38": "5xbZjYZZnL6j5Za5Q4VLK8mECRmVXMnvtmWAHHoHK1jcuRHprMXkQKaDeHM5YMHe7MVxQTRb7rZWHoKcZLTM7YWW",
  "key39": "3Nsb8PeHzDRWQjJEuycxDxiLcv5WbrPVZzQP7Stj9XcK114mXpHC6WgXQcJMEB3XdwsZqHevNgmmAcWZtox5kx5C",
  "key40": "3sX9s2FzyEFHDQanT9ET5ZW3MqySDZe9cPk7LrsiL7B76jwf9enoUWR8pdhUny3NH18NMNFqR6NVQkRNr5zTaCBX",
  "key41": "2KHHYwZrs4YCa2pkGTr7U6geBWX5w3M6ykc5KV9UXYdyrG7tcmMqZ6GN38jBvDCPwb5tbq1F4CpJ62jrXM9H7EYR"
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
