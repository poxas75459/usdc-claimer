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
    "4V8JUMd9Zj7eE1R8mvUMAaJ8ULty86K8PTjx5bp1DXaBYj8h96CAWxj3jMy25gdAAZd6HbDLk5trkoQfqZWApSmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTfTV6suaxARxEenDxG1LDhhz87adgcWPizAhgMZwexfSZFAvkcPrQGWwLo1H5zdfgxA6nVdMdYoovTDeGCoeNT",
  "key1": "4gmb3UY52hLgz1YrawcWVU31NcbqpxejGPRwyS3oiEaiSRKWbqLS5wfX2NVWhWsJrexMKntNdsb6Ug2fexwJMg2v",
  "key2": "4kixYKFJgEASySEwAPXMbzHRUxeKntonRL2X7muXeieZLPm8CFx9YpZGmJSeQ9fADqiccqG1RXmcUtaMJPUQ7gKb",
  "key3": "g2xeuRs97GkWvPF2JeJvcLEg4smZwz2DSsQqwFYUuikgdLxvV6sAFppLhYxXTUKgXdtNyT77pRpdjiCLLmMaRrc",
  "key4": "2X3ricSPF2zrhmvK9FZwWUiu7tJDcy8CeTAAGY5LdRGPfLpZ44kQEgzmTcMKducjFtVbfjWd3K5tga3CpZ6W3wry",
  "key5": "5NSPmLszEXTyv71vBYHn9qm1jknAZpQjR5DxdqYUrESGeC7sQMP2hKkhQsfkavy76bpPeN1QUCUvibAsNobEvPww",
  "key6": "2TNkrjrXBv6irjJd298PAMQJCYEBpXTkPbEce9mcVE6e8AyaoNgomjfumgVbqKdCC9D6E9wiQd36wGtyGXUJR7mu",
  "key7": "2riSuhxBnMXRbNuTtN1AqU68f5YtckLYkx4hceHnJR7qV1f874JVGL63h7Xw13evha6HRVSMVSV2EY6KpawiXABU",
  "key8": "5XLANjv7FQMtUP66hLhN3b4VtHZm5MiJWdSMkrtDyTJa2nGebkJDpTDeKN9TXotJShZDuP7vanbd4ZMPv8YAGj1u",
  "key9": "3jywSKKE3paNUgGqYx6My9j7HwkZ6gEZ1hCrfWYLUqJT4fQUMXd1UWeCiBfu8x4miuXAhDKo9VPpQeQ6KSfmHeGo",
  "key10": "4KAsdLkVFWFZ7mCG65gCg9zjkfKPvWwotLJcxVzv9RddVzz4WvRzkeWTXqNmfK4Drnz2hBn6guZSbk3LK7NknGxv",
  "key11": "48BXZwRB1bwh7Cd2kTZHPPto8B8YUus2RiAKMLRCfAWqHfQDzgYbywFJwn65DrQwXHqA4aYVNSqT1GW2EY3bBur5",
  "key12": "3rSDEtj1wTsuXgSV9Y8gDtfD3rz6avMkQdCyid8L9epsyqX26qmkqWPRXeoEjkcKaAjaXfk2hGsxXgncGK42UCgM",
  "key13": "yStSSFZA7mhNjw4Z6i9QqusP4arsTqe35HmFTsdjiyYQFGcwZ1UNB1JLrsECFccnPvfmgch5U6v3Ey43FTCWk33",
  "key14": "5JFe49xQ91644Qs7J6FBAJtGpaqgr9kTX2Sx2uNaBQXwzQYqviye52G31C28W3FcZwMomcqVsmpQjHiZSj5X2P4M",
  "key15": "5ou9BHtjx6cZdUsRH2qzTupeqjSMhXAZZYPytR42ZqQt7MX4RUEit3AUP8NBD3DrDSXXDg7SHtAj2jY3V83JqZv",
  "key16": "4K3uLfztxVb2HRrZ8iMJTHDSSL4nnvQwDanW21kkDLyk4wXhtPakvYcpNSW8GZGYQaz5hdRdip6x2rM1bD94i2QQ",
  "key17": "pyb9PsoAZpsZ8q6aYVRf2ouyerpdexV3VHitzH2iWRM3fYLMtUL39EUWGP1Rp91XnmApSzRWb3eWxUdZjikDXbH",
  "key18": "aFAELswB3kHoKDrGWh8BDCZ4QujVoGtvXUDEgNk9fTecok8DSzCJNEUE9UnZ66mV7x1z63MqWuPk3jzXfa5vRzU",
  "key19": "3cDGfouD9aaBJrgmQWpq7veTn8ZHbKkcwvBt7EtxqFTLL45mreS3yX3rR6AFg787kMhpntPp1zzWPeZB81S8yv1W",
  "key20": "4cWBdcVMZu2cH6fV2zKXYvwea8azLzxk35Ja6vmXnwRG6dWwvyBpiWFgAugEn4waL1QDdSYURcNktk5v1WUWkSu2",
  "key21": "2c9JiBwTtoZH3UZJBSn4CnUq6iEiqd7due9tRgLSYGjs252hd7nZaSUebxF1r1pPjBr5xC3xpV2QihTUFvxQycNC",
  "key22": "3MGbUhwrMyp6qbMpttUfk1tajPAiMG4BwY9EVbZvob6noLVyAsnA1rvs1Uc64saiBBgFLkKEign9yEjmp2q6AAem",
  "key23": "vEXrSxEaCGqDyLzZXokKH85DyR8Tht8DjCNQhaRn8qysoMPYpjdy2ZeRNV4NdbrGS8pETdcKwJ9M9deS3teLH6G",
  "key24": "LxBRdMTzygeiF2eDNKr2s8P819dY8nTxHeNHjeChQopaoMNTS81CX6hu2HoxFvCav4GuHHcQpk2d8DqqUo8AnUr",
  "key25": "zhNJ1TJT2XSYbz2kfgnSaAdx6zxAzYSKGPqsfMhJ9TGrbMpW7hde1ez14azZHg76FVmccQYaRdPDswVeMKpk5qs",
  "key26": "23dFUHhh99UaRAWd8xY4TGibasypCnUf1J71SnbANm6vdGxLeoP5UizbpViRFieKXacRztPDvD9JgfN58rayFhXZ",
  "key27": "3chqhv3mNFzLgyBNc5qG17zAMSSKRnDifWhnatEdMj88bcqCpYyTiS3wL6yh3puKYpXDpMtxm7ZoevJMdUN2XMPM",
  "key28": "3JsTqJWu7MXvvacu6nXMJJVjJ1C8H12ukwqXALWENKVZ4THAABeGLvBh8Xeuu8iTE6Lt4zCMovfEPym3NGrmfdB4",
  "key29": "46Pt53xe2oDsLbCC5szbHERENS4s8Jup6ksQt4RHpkjzHJeHUej3Y1USvw5hM5gsV1JcAm9NGtzJyvjMQHpwqywz",
  "key30": "2T9aDNVvGtpwxjtRhVe5G9QVD13gY9YAcXbgmH72JJd4JDKwi8VeBrysyNyCWdhFrFrLdGgd2TMj82FaiyjF2t9y",
  "key31": "3TuL8XY4FDkjHHw2txGZYwfKVtnDGbn9ujgi32a4oFSjrEkG9xd3xC9JDmXLbJvnim5KEsSkNUdoQm6JfkxWzE2m",
  "key32": "5VmasfcRceTdsPHB2vnH7XD7bKUnJSQ6YWckPPR3GodEFMTRHyQXtcVvWZY53bFTKs7wewgqfAxmUbxMWtDLz6Bb",
  "key33": "vsMb5AAaHvsvJyT5UzHuobvQYB15gvtKh6tSK4gMNmaF4bco5CzQp2MLKSrG6ti4SMDAZQsj23wsnMT42hzeKFy",
  "key34": "2AaAYm6DZT51zWBrQa4PJaZumcf2fbXyYE6JJNj1qQgfxpU6vQhpDvVhLMqMHLJ4gduYW5Z9aX5SeJd3WjdxhFk2",
  "key35": "GNcYLnFuAtQc55C7TbqLyhvw2j3xz6gArQR6oURqduxXLU3mcMVF9Bw51ToN3QNUXtXFxq1ASyGxN6fWXPGVQDG",
  "key36": "5dmYV9fE89B8CsgF28ZMYWBe3y9xdM7gRs4YykxuoF9yV9kUxtGgjx66z6nrXstCyVRaYHnmW1gwKAANpizBt2UZ",
  "key37": "3ASgWnBSjtkALGeATcLJBFLHwuVeMYvr7NVtX5xpguNCTZ4r2AAsoycfJceECdyzyXXET531KCuJC6cCvGJ64A2p",
  "key38": "5W8wbyRYmkcRhCyp5abtYL7pyCYnj8JGfrCRaAg3Js8Z5W9vZm3x7E987Nd6p3G6Sw6M2rMboVoxgPQhvJyxW45L",
  "key39": "5FhL2f1sQaHSqyT5zb9tCcX3VEjyCewq2Nj6GQ22DotjjNdSsxXD7aVMEJC6SkKuS4Wk1qYRFC3gyhF4cn7j2KbB",
  "key40": "49zqT3KDdRGVVbGJj4ChtCWDiwZtMDoGatSvymTvYLrFLD8h5fpBDUaCD4kpta3fK1qkgPC9CRGZsyjJmovK9aAs",
  "key41": "3zwfyS6oT5knLeugv1FiFHCf3jkzosF9SoGTrfFZuGZ4FRmVT1vF3bFYnpxtnASvEzeFswFnWpLisadoBTGarWwC",
  "key42": "24KGhZL6mD76F2aqAWq61gV6iKACWqGjS5s4Ane2tGAW2LPZm6CaKVRN91UTC9iahA7k3nnhnfh2zWbpUiJssjeZ",
  "key43": "3DLr2YTBozRWMJk5UuLYudngUUyJ6FNmt17Rb6DxFp8Unb3LWjdQ8vtsQmsMdgrPmbVqyihEVrcuQ8pywrUzokQK",
  "key44": "46EqV1RSLincQi5rnmrb357zkF4PddjzLVtFGvAknvWWqzY5U79dLTxvNQBkSdLuSZ1KrAdAtj46YJJcCJMgVmxA"
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
