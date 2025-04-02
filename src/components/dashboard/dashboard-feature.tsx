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
    "MrMjK3PTHwg5NkuKjiAZ76jtjrWVGih6ddaU35oqS7hBwgGhiEwyTitpZkoeRSqzyzE6WrGf4Zz6H1NiKAxKzip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqrngRGx6etEJuPxJHoQCAZYvsux4PDQrR8EfW9pvav78qkoYP44odZoi7EMkRFECCeyWdqjBGUundbaHZNmbAp",
  "key1": "4KA1woRGBF6pgKopMhmfJfkHx4cKgA6wcoECUthWwqKYcBv8CC1V5gui2QWksPmWfvQVne3ZmSPD18WNbBA7Crb3",
  "key2": "4yzBPYdNwzeDbu8MoZnTqvxyGeRiVMNgxKpnpA1hm3z83A84BSYo6z7VMMm8ttGin5U4Lt6Bfg2Nv4T4BFNoLoXh",
  "key3": "4KmvEjNbxDDd198KqEdea4Aiyo8kchgS3ydtwH4rn3Z8kZDgXmdXWpvfwD51XWLdoSKKniYafcugP3YBbDame2UM",
  "key4": "K5eyXnHPTdVBKchQMGC5SHaPoXsvJJ8pEf9Ay4rwpej16BfYNdM8StceB25mqDU5agAPprVGwZhX7jyCp82YXXH",
  "key5": "RCzfExyyccczdBs5ycfDi93C5b4eEWs5AtLMXzumHEnZThxwL2TkqV8xAtKESsPytSmpztF5HJSgjvt7kdgHG4t",
  "key6": "4CbWGyiRF1k6m1PDDyFoDTFkjc5LwppEvBkYuNeF6AxYQwTPijY5WkZkHKQPjUSKniL7apsBFa9QYafPzMgrxvqL",
  "key7": "TxQNzZh3cfcT5SvDeZTY3dmJtD8qX9NDhE1edoc76fAvbo56tagj7tYPLA4mGLZCPpAbNxyi6CRTaE6hSajpvDT",
  "key8": "4Sk1qrVQFR93R7iG8ZWQVwUfKebss7kWXZUhRHEG4cx6HXSfitUuRSNWspqEu6b1atvz6d9q5wUQg6sXDJpbqWL9",
  "key9": "3x5vSHSb4XNWbZeT6i2zkDuVcsARG53PGuNvxXhkWkAYi51qYs1K7342gFemjWAWam4yoK5Uq81GM2ZZRpsKzRmx",
  "key10": "2aREiNMcmkaesYNFFRYBZ3TXv2KXazFoGh4DowgyEsWjRDF95t4yATx5HyoizAVdfPDNXFbqQE3ySiq94eWvwALA",
  "key11": "4puVGRJdwGUKmMSyBFzNWKXELfYijHyEiBDvRvJaAgZbaMNVpJXVdCgH92QE7o7Ap4AEX1v5nN6s1bqxWN3C7TXD",
  "key12": "5DaPYMFCfEYHxsYyaLjoh7gNUGoXNerPgHetb2FF3XEG7Hm2DxFFjAZ6GDTkpb34bVXtvupmCMgaGPJgUdsefphG",
  "key13": "64WoLeYH4dwhCMWLL4DnGFFdksHave6jfJ6R9qm9XCxLS3QfGrZsiWMB96z6msCffYAnSmHZdzfj6T87gALqgH8s",
  "key14": "4JD9hHxW5kq2cxN9DNdU4ee8LQer4J7LzibmUJ7bo5biFbmzQNMGBhfJqWsafXT4R4ST4F4Yfksmk5aumZi1PhG7",
  "key15": "4gP82Teny1CYRma8TCjRcY7a4omdAk4HDYHGZCQpoyMuea5e3KwPSeme4Sh9NXMJNKBKejJs7GYsDaH5soJ2K7qT",
  "key16": "67J5vD6fb2s16rXD2c4Hp6tGqoa65BETvxjoaiQSKBMoiJA2XoUVqzbzWncMQoCTY1LyCMZ6DMfQ3iKr9s32b87T",
  "key17": "3ZtUV8bm3372pVLx8ENARS8kt6zteUSTscEyGJbkPhAjYmPbLcqzX75mVFE5uDEMT8TsvmRsZgHMKRXhZ3CC9mnY",
  "key18": "45u1nL7AVL743puqvg1KBSgN5GNmLkvUqGt2EkWTQMSt8dtXF8w4MghuFZ3mgVeWshFMHhFPhcu5ecNHPwr1iUN6",
  "key19": "3YFRuW5HCeNYw9cu6wp2QLiZDLdavKuqUgGSH24YU9HFLD3hsFD4NnHMYo7PcdKMC6P1bffZmQzqghevRYCbo6jS",
  "key20": "3oEgKaDG3ut6vucKHm3i21i1VRzthEFyqGkNgQdDU6UgLkGE1S9QhXE31VUvWMH1AwwTXJD8yHivbnKoxPyQ9dCU",
  "key21": "tGZZKHvn65pcxP8yznWKpfmoVP66Xub2Znpwed6ZgwaoBjBawH2oUsnvehU2Ae3RrGM4PhMNxrz83NnrKRUQdp5",
  "key22": "2u1cxR4MnAEoVJ4S1j8uZ36UeDkouErTXSooPKmxhW8R1JZqYuQF8DUUpdVVwAnRxc2rnP5B6nGb2skenFMHZ5eW",
  "key23": "3ZGGjviDdTwwf7o53GBabRHh3ZyDDykPPi3cDtpceXghhpvfvvoZcXrGFU89xomA6opUw4ru7tGFZpHmxUrgz6sE",
  "key24": "2PDnk2UUfgaszaAvDqV5kq41q7zZ2dYmXfPfiNThbGQLy9uqx9dXLWTUFcJiftyYGfTG485dmvDTnDNBZ12G7jUd",
  "key25": "AyMb9GNWjS8FYtqMd48AtSL5qhe4ikg6KtECpov1VRa7ZcfD6pryL2GrLMzBsMdNLdp5xthVQ3sYQkMf1rHXtNx",
  "key26": "eKWCDNqdZ9g6MuuNfJxM1hkzCtMBf6YMh98BHSbZP2CPyiSq7cgPVcp1NhxuGhAFDsfupE8W5P7pRnJ9qbpmLrW",
  "key27": "DwLWiC84pb3AessgncXHY6z8v6ea8iEcF7dXtNJ6nzkhaqp8gfSMLR8t1nJraCZn5wAa3hqSXAoCByNBNyoz45T",
  "key28": "5u5FpkPpv4d6JxVe5N6ctLPjd9bU1sgFvSGarWHTN1BEjK448AVYjTK8j9QS3iZDoJEB9NnomsXHP3vyGGRbMXJX",
  "key29": "4SUdvFtf1G7wfpMw2T8KqJ1ejEaV7EEi74MsL7cGStRUX1hVqgCVWbdYtUa5vEjKnpsEXVrm9KXqHJZUPzdwQJUa",
  "key30": "4qQWb8wy5XSMTeJqSFUcodWszeyYWfRfKp5hzfA28UWQsRzufJDd88YTY34UD73oX8eFrQgDx5Q2bVr92M7QZjLH",
  "key31": "24kQzpAJYxA1nwPsoX3bw8NQMrxZQcV7HqNejei8oQi6YBMGXpYwLRbDeuUtmVYHn3EBrNkywuweq4zrAUBFbm3H",
  "key32": "6aZV7xBrUQSm37B3o8jUbjapRFKUW8bbf2sXBuduWq2XBjA1Ci5oYfKEA9buhMvc74KorNSHuuAP85dULf4aoeC",
  "key33": "2VgQeSvyGdbA2W6b3UvqQCytwJqQdyhDzVjpdZbdgxWH25995dFc7dQiwduEZkHtwmD5bEQyGbyJWs4T1XV74saC",
  "key34": "81UMC4J4Ns8HmLnqEzqYC92ZHetz8CweSxKZPoTESEcSwnFbX7G2tHM6A55XdwDz6rjtS3EWf8jDdEqm27tpzL2",
  "key35": "4sgKBufyZfMCPjQUb1oJQLBKwHPKF6uvMBmzDmnmhNvPzJrFPUL7gsdMjvpHVmtSQHT7WP5f8MHF3iGtMFTfVZpj",
  "key36": "4x6SH9d34t2o5XtH7Hw3bYdafi6FkGefrqmSxfA8Ku17xAhsckHz7u6u5irNhzwP85DRjmCE8xxjq8mPkxoXtWyh",
  "key37": "4ZJox3wQmqeZF8AbiWbRaZEM2xKBRTu8gYfe7hUNpSs5ytzzSq65XqRcBPBaCTNTo2PBbkHuaZujgYCZdn6qNVhK",
  "key38": "5Up2djFTnk6iKip5nSNeuMjxM1P9nXAT3py1V3kVSAFcmcqMVu6mDWNXAePULxNpZawmPkK3yXpEsq9ovA8tVnAr",
  "key39": "4XhFqyKFzc3teyo469U7gF78c2r4eTgdxZxkWSXcfKFsgA2bQH2eAG53qngyH9vD3qvVd5wk9y2HXgSJU9RBpYQa",
  "key40": "2zV3XNYTS6V2pGdksR7RiJynGJNd6SgrG4JSZketfeAygAe5YXC8aVnzi5s3bjFpnHQDYfk86eDevW6RCnxHn2Sa",
  "key41": "3mXCRwsZCiRhdLNWH4z1giqCGXGVxwaV38dThgQV33fyPkVAngiVs9qsFP9tRvQQqosMrF21intuvF5d51VAuaoo",
  "key42": "44d8oCJDr73xsszhZscUoZRY2Z2tRKQhyrRy3RjMrzbzqHT91tFcfwtwVGMW17Sy1GoTwni4c1rDw8Wg5UGasMzd",
  "key43": "ui1pv5SrsrY6qCK9dADYPNLpfj8rpgkTvBzxUrV2K6LwNfj2oZERZUvAsPWnq5JxsgmA6jUVLufJ7Wtq9feoJw1"
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
