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
    "5tFMLoE9F8Yv6AvWztZiEBUmPJtBGR5g123dogGGkTXqexpNAHuN3PpsGzHL3rmChAcDV8MAX1b3n77WD3GifWbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ok8rdfpaS3VnyaSLWCQ8tWDVj5ZutV5wPpEk6qbPT67McSmmcigfvQvmTTB8kNUHDGuwvFU3JbdzSBCzwPMDEP2",
  "key1": "2m97uzZjmsFx5AUbHKMT7vtv8TAGmVL4GebYp5fyckQyogDMjQrcavNS74tKsd7fsoN3LCd8B5VmpRaoWGorbuSt",
  "key2": "4UZkCVXRMSYSPMmBx6ZqNCFkTWCMoVAxvU5rnWpqPn6Z7P9rZpjphut5t1X7k5Ru9oxnJJg4dtdJYdz3GxrfR4wT",
  "key3": "3d8kSsWoeqAHGFFzJqtxV8ecZfusXwqhbNYhPc8VT3uFGrYAMpi2foaR4aeUpHxBFGhnMstkTiGGfFWUfGVCxVYc",
  "key4": "F1Am3gs4kBcTHCF4LG59Q4NC2Tb7j4VEs24kCchZmiKjVNK771DUjF4h3nFbHsvxnbbHquPmk1SoCkw15q3netn",
  "key5": "2vcgJUt5ZoUapL3pAKSZRYtsArCJjxM3zGYmWE2Ee5xvrXmwjYVmKKKDw1JZVkgj5JvtmqwAvTTEU3mRSuvhii37",
  "key6": "5PyQH3AcW7xsquRP71fiHmQNGxEVhqKstYgnrBgK15v1pgxysdo8ZiAx6MX2EKcfLVDNb8vtpxCLkTRD33aHbNL1",
  "key7": "2ku5a4vdwbtH7j4Cw61iJSxpC63FnzmbY9cE3PiFxeMgQC4WKUKGFdPi864QExRe2PrreZGkA51CYVfebAdao68o",
  "key8": "2cC5aPvksbLUVy7tNYgJxoRdpLK4GABoPJ8zM6HB26gx9SB7TkMd1Gp68ZQQhLZ6UGd5nz1nrgFyj9ZfLnCerEZ1",
  "key9": "2ZYDMhKD5HvociBAv98LavaDhxpYHb8THt5iTjYARHjFeqgXxWtrpQTJ82LhHvP5fn1F53ZeNXPUHr3xKxBQxCcM",
  "key10": "4AVbGecGE4imaCePCsc4Zr1e7KY4G1swXL7XPa6VnceYwRsyEGSaQ5UDqWJ7HDEW5SaFniDDWoBAQWEa5NzVZa1a",
  "key11": "2YXYby6hkXWfxDrSKkVQrf22sU6qLzjpzhetYHma2CSVu5Ne6vgSbX7KqZcvdectXA8Wq5uSz6yehm3gC7G7p2Fq",
  "key12": "5QHwSH8jREWg69NanWoFAoZaC2e6ETQkRXK3kDz56R6Kfs3RFJ3Kqc4CmnujfGDCvqPzbXrcnWs7wD3YTKYUA8M9",
  "key13": "43d7bG8XPmDXBe6AaDHWcErHyNmSvj31m3AUDcMryRv6CUscWsoqzpz9kDCDVGYU6YsSinoj8XgrgpMYcEwnEQB",
  "key14": "34viVK53Ek3qGPtoc5KU4BtYohDJQyVsijTF1FEBvG2DCp4AgRNZD4i9BrG3Fjs2E55b5Df9EdRa1sZiht65Foq2",
  "key15": "4QQwCTgZGNkPCchu6aWCETf9fvwwQ1tPgvkHiN45usyLCKu7DFQUSVcXu6o5CqieWtcvJq1yDvv7Rix5f8rDSajX",
  "key16": "4n7BG2d6Jrg78P2tA3wWyEZaeeT7hfpLSxnRfhykSxN8Jzmgfzk9j4pEeAaVqMNxLHrDFtLzYCygk3GGerHdnkVt",
  "key17": "2ccxniVnmCM4yQs1KC3apszteBiKpH2yKFhcJ2oyQgbEyrFJ3m7cs89ZDupnakrNCt1H1pX5RGhP645W7wfg9TJw",
  "key18": "5JXvNWqstdfERFAW8moMPxcFfzSfvrgDjHnihb5DwTsftj84GbZPYrGq1YUr8RDtSyFoQR9riWDvQFDFQjMDR8Gk",
  "key19": "4CDKCztVh7NWiFoPg2Ey56isWC4njwDHsUo1LSFEE1Riamz1mNiQLS37koRtt2VhdBaeEDx6rE4b1UbEEogiVpnw",
  "key20": "3rfxSQgPksyDiS7ZTvKSmoegDPy3isMsieZNNWGN8EEZVFhZoTwRi5JS5vXupB692cqSo68ytDGu7gPHVLEsHmgR",
  "key21": "ozjYzA9LvYPm6Fus3tSnZ8A8931rLW1w1SwLrHY2H1APMUp3nykALm4FifPg7aw6rCNPfAjEcsj769h1MLncmgx",
  "key22": "4SxJfbRiXjWPTMcHs99fLXvc1R79ruXUy3nnLu39EB1eDz7sR1jyB2iEWGHU3gRDoEK1BBXCd2LDGZscJASfGYxS",
  "key23": "5TYhG9aSAr33ZgjPK3UGfDBGubL1FXuUJHo3uUR1XrgXknHW7VKXsvGvanzaZmW4KFpf5qikPUoio3D1YTREBmau",
  "key24": "4iicfujf9qLS9x8CNmnwCaZ2ywSzTZwrFE393esxH9Ee6EjdnD8YeZNEsGEnNTucEZbKhJW1tY8kpFViCQhUoWNX",
  "key25": "5LSho22NCGxY6uoH3KFTvu2AB6jQoeg639p6f1negTLUTm9KwqaXALjSWVm4d93utq2e88b8GHVaKWegCs6puP6Y",
  "key26": "3DTXHp75daiSoSvnfAHQKt8NrpnipuNc7xGHoVMz5RhcpkuR7XYP63CxYZvbXXUQipJRQ4GbKe1U8wsDLNkVGSRK",
  "key27": "HzHfraU39RweKHzJZWUi14JPLgkS7NHfysGwd9cexfVrZaNMkXjNEqPRMqvzGPT41CtxB33EPvzHmYJUVJhsvih",
  "key28": "hY4K8GWBmt8NyT5zsfjMuttf57GFGtGuoSBnjsSngy7tecDSewzzAhq8QQVe8ribDPv5qQJyiZGeBHhXa2n92N6",
  "key29": "h3kepmYQM87pJu8ejB4sEe1szc1szHAyQjSDDsfNPPc8UFLmpfjwcoBFj1JEPKkTw5UfTZYYARMLRDyzVVP3NWv",
  "key30": "4u5Xs882VMcFW944HEaXw32H5AB3VhbS8SgYnVeogYeDNF2QtkF1FaSHWZvTo2s7KxqraeXbcWfRUGoRdi946yu2",
  "key31": "3HbeYtuSaGo7mfg24jXyDN7bxNFAXQ7pxYaxkt1TcZkPt4Zm5nuPEHiNe5WUSw14YepnfhNuE9bJF2MVW8ZmJjQY",
  "key32": "5FJWm4uHDjHmUZfV4uNACW8LhX1Z3DCmjzTyw9k6QRFtXL8xKtVrpRTvRGT3WRGyxA5gxTdBm8gDF5czsWmETnVS",
  "key33": "4G4TPWciVnTosuXeKV1HhYQdufi8VEBjaNfRGFQf1KJKhZThkbB7VAoQwQrs8hTBQRLFiTPBi1uUqZwWDxZ7wqYX",
  "key34": "3NuLSdfWwx62k5k8uyjMZ3TffQ3X5nRMoLFKJCb6PauL9ALYAjR6xWjRuLEHkBMmBnqaKcNtscfmJ3NNFrqDUwyg",
  "key35": "3X158DwMZwpTMowyJY1kwTukBNXT6LUEo5PZspsmu2zc3y4h1SUdHC7CyXkq8VwAiUtEU2NrJac2yCApV9oX7HGy",
  "key36": "4ruQCsRJ31SetacdSPEb9NgRX69TA7z44bZQqPpBeDAJdDAXGrikHMWum2DnM9dVtYaXDDiLgXfTR5TYJn3oQaHh",
  "key37": "2wyEurRYY8NtamkdkgRSBExyP132hUMXf5TKZDXwtzndntEr1VNXzCBcLVb5GPYjBaYKMkV4ZWfh79gWQQXfw2WZ",
  "key38": "4aLuaL741HMDusXru743RrEE7trAwPjiyw7P2NWQyJyVCfRYqDkbJEjrshX1R4uYbYPsVkRoydvLJH3fLZXTU2mt",
  "key39": "2c3PLfRzqQZTx5eLG3cRL2gg12cgU5XNfDmcTu12p9tg6WS8b2hkahiEAnUYXAMPtuxb95NYbT3qeLN7YxN68i1v",
  "key40": "3WurdQhXcmjziU3nTZngJevmswVLjLu6twZ92JCoyBfHMJjZ9uMy7TPo1cLxc2qpQ5vFYb43W81Vf6jcF6icKbJo",
  "key41": "5MMZjbnCRQsEnBknAF4DCpBvtuj3reEY8UzuGpniKgdvpzPfDcQiyo1qsdmBumxH6ryLXgefiLLPyNwnrNCBYt1k",
  "key42": "oEKAVDYgWhqcSU2ntacjdkfdRQB8Dnve4jGEiRHKKsVrBX8aHsd9ic2jd2EqWfbeX7vfkqoSZVJ37Ljr8mvZzPX",
  "key43": "ok5BsLHzs7UCymCnfpDrABxoeb924Vhk4bBiSnEko2RoXXDPtkaXtYD23ZK9hG7AxU5T3pyGD6qxjN18CyRbncD",
  "key44": "4WqdoSVeG3Z7Q9WVxnhXQ4BZR6obaJAMjZTWDVGED6HMsDVDAJSjkhMN492PSrL9DGPtxQXymVDNAoT6TzDWww8q",
  "key45": "5ncRGVwhQBgiJGbAuvpDB7Vrxm72S6difqUTJbnj8xfoFXnn79W5kfqR32E9bwDppWSAwd2Rwvp6DZiC9KgfySrZ",
  "key46": "2xXe4QxyuE5i7i1u9QeM4fdwUr1sV9TnNT4qohTExvRD2e1TB9JHszW57gZ6StDhvCkSmunL9eB3qx39YfPAt7cJ"
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
