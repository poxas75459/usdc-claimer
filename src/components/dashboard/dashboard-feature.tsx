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
    "MEjh6U1PApvBoZR22ki5U4nH3CiMkKd87aEy9TZ4zc57sSJGrQGLFJ5r4RAutt3MGXUBsfvPYPV4f2P7z9rYyY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FB88GTr1vTvfZuKJ79sppoGy4o9M9V4bXWfR8FwumKKNcPs3jLbSH2oDof5APqAqhvS4KcusGA3TMjaXfRfLuZX",
  "key1": "4taraMhQWjVjJySGohaMHn4vHKnJWzcSS8HtdvZvK5qyjbnAVGuEBSe2vDBgaUAk6ZWxf5jW4wPfURBVp3CGSQ25",
  "key2": "3Qa9E1qszaLHJ8RKKVHkAvgLjqJPycN1MbP5hLcc3acXzkFhLSyiu9DSNcpHe4XEhtzqKWwuqBNcdZz4cDG5phFb",
  "key3": "3kYK2Y2cNFKAutNp5pDN1qabJsSLwvoSn9ZnZKUQ77SsBSRPkjdLnJF7Xhgs6QHwN9JfijbyFxGatYomhtpXsm8C",
  "key4": "3s9N698iinFKY4aMSKuLapXEGKK4GHGhs8u9MQkEwEKSjeeYmEgd5pb5kCUWEZ177yshgqKKWW6wLEB3B19Jy8nd",
  "key5": "2rhYfXeBYgpm6hvMGgbhjDVzxxKQLL6UCMHWTc7XpZbvLQYMvQeo4oib2PqmfLFktxHzMbcnnHaLmLboSSRPL5NT",
  "key6": "21BNnP1R8fknYbHy2gARpo9wusjKzXEKLgjvY8LYvzUsRiRm5fTXASbpKHWBtL5Dsgw1oRBCWRmwZXuDhqp9gT3m",
  "key7": "4hgDdZzVx67JhC3fPqsCnpxrpiwMYeSXqxUz3Efe5j27JDiu1MCj6SyJdjE2nsJoyyQgjosWRMH5HE6Y7q3h7yfX",
  "key8": "3a483ao9rdjb3tuU9vMdPd9LPV5xHetMwVhMKiL8gUMrwaL22u2rQiD2fxnUfxDtRk8DBFsH5gAxEFiy5zAoKMys",
  "key9": "4jDHEvXaLx4Bg7tZtQida3YNF6Dgp1Fu4VEu3sugHEYCtURC2QqXqYNyCCfU7z4DvUQv7mFL9epH7wDuEL2xgfaz",
  "key10": "2e8HfQjtAZW8uUL3y4puqfH3YpRXpkZUMWEn4u9EJ1niVFKbZcXsJwJ3R34MgTez1T61NDajRYtEb52mGRmCWwuG",
  "key11": "KhH3WiLP1LnQSzhB1dkgtfyMz4YyG7t3DfKNjywjFJJHGvQQ8fMFkwD9uuQPKmwtiJSHFgdU9R7z2s8kEbRUbVQ",
  "key12": "3BoD7hQ6RQ31pHN72BkbeBiWWGM1ii8hn9HQ5F6iQTGajGNW7hEz63wYb9Zaf4Fuxc4kaEkFxstQ1isknYxVe1hk",
  "key13": "2S1Z6xs8wZTW2dVXSL1HAXDngQNR3aGkBuDvvKEGUSHjkyT2XBsXnd8dtbtSk5sHF6B55eNUUS2CQvhBJxbQ9aLM",
  "key14": "gdc71Aqx95iswFt3v7HzANbr2EpUzBecG3pm33reqZ2DeqJpJcWS83XPGqkL9cMSuYPuf53z4q9QmLdHTfNARbV",
  "key15": "247H2MJkkUskrQrwq2UH219bhMrLNM3nesSwt8uqePocQGUAJoyutXJJzsxsaFPgZH9Y6UUtMUGcGF1pBNSgRnYw",
  "key16": "21jft7kxqcyKgi36VUNpNpx39ZE7r9DNzChh8qqR6tvUDJuuBQuzhUF9NQPDX4ckpd4SKACeSp8Udy1NAeY8L3tM",
  "key17": "61XLz6hAVq3mNDjYLrVbezVfDTsTPfz4ZLQQ8XaYQd6wfYrog7kFv4aJ5QpfZcXcKj812RwAG7cj6x3Men5g68wY",
  "key18": "tmKmyWrXXeRjULguJjWGftzLrj4C8VE6kmCNvPs2Vm6iuMVLiPKmTcjxKeqH3nSHsoPkfuWhJqLXVY5mw416wAt",
  "key19": "z3dESSZeES6Kx9SVAECbFWkLRNtV5ZjJQqmebtWdek5YbsvwBxm9N9mdL7UZWEThMGXKjUQuaCRvBFyYATWzbYZ",
  "key20": "59L7W7QG87wbX3ptomtSyi66hY294U3ZipJjDjUHKknj9euDRc42RCxVJVcVnwA2FXkWjUdA3YXphNiFAxf8V8xn",
  "key21": "5fX8yg6qmQirYdZDW66Ncbqd3Q1H9rf8byoqzrzmETaE6siUJriJHEJ4CA67ACuwfLs3yXmXVNYhz6YYhwvgiwZA",
  "key22": "5xBixxukxMAbeqrjSc4BPKuq2K22GwiH1yYYYjYKsnttonCL2Yy883ugtHH7kfVnSepTwSKwMXEtENa9e9RyGw2D",
  "key23": "3q74gaPp4tRG52ZWqp27Vh5ZH4gkkon7ahMK5x5STumbWgYCHsmvyDv4y53Avy7iwjKnd66Wb4Hv55KBJfu7H79R",
  "key24": "3LsfpTsa9Ab3mhctf4Hhqr7B5FEbPELYyvbq7VKwHW8qLify8XpdHdx2YeFnXK6Pjaqdot4ZnTGKf5RXFBDmJJjy",
  "key25": "3UpkYYNYYq7NSX9uqU2LwGGQtd1cCsG6g2RxxJSBFAWu6dzCW9gppTxZ2Fmxssi2bhuRqh7CQmFZfgrHQinSpvFW",
  "key26": "4pw4qNdkET9MAAo1GfkXceBPKo5VRTdC2KsgNLg19UqZ76RYQxbyck1uKkJikD6VPZLtayAnFsUdZ2F72X1usEQu",
  "key27": "4Ja7igw4sk27jd7Jhhvh4SjUQueGsvzDiAnnyAhhBg1iMdrGSR7vDRaVpxwGLXpZjp4CoKeEmKCDeofrpUwbdNcP",
  "key28": "2RkLrpmjGZXx45LWzPrc7HmJULYweH3DPmR6mUrZgPL4riZBq7AyCiwwzSmt1eL4coxGQBhyc4idyZsKK4mb4u3F",
  "key29": "4syJZeMHdzAzVaSAB617KGKGavNUhEHWn2oYzc2Hd24VQMdCcwXAaa3Pp8czUqm6xxAzyJtnXWw6iC5X7pqLbGkc",
  "key30": "5fRUxFwApJ3RbFtCX1RoHeYtB3Gb2PqpMMobWFLv2n3jfbsv3DhR8WxjGzMvtpJKViHzNrpG84QUmbrXaNDhmXf9",
  "key31": "6569rDwQF5aLHu4gbYJDSvfqJrQ8jQBxP9c2bLvEmTSfgm2K4q4jnCiZmYStx1iwRKVVmHCjxU3hjqg2dEdqfhoR",
  "key32": "TNLixgxG3W8B7dkzScUgYWZZTQWgbX8XSKFDhAa388VUs9QQWmXqJ6kNQnY5XBS52nWZqvi5AngUhVSRyLAdBsv",
  "key33": "5rm4Tbc92m12JUbZJpuGyKYRFMggiN5iSfBDqHb57KuC8PbYnErxU6gMdpapDNxRgm6r6Yywfk56XcGLbjvaHm1D",
  "key34": "2rLjBLUJVRLy46qiszKeQ8JvCrfqj5Eukw9dxWV4RhtjpvhvzCugzaur8doFezBfN8Jyv5EyZ78ARy7HqAGcm1gs",
  "key35": "347F8eGenoiJTT8MxrAphkbAU8JpBzfNTHVqyEYvxcQntS6bT5zQ33ZW4Ab3rZRMZDjeAFzbcb1iuXSnpdRynKyx",
  "key36": "2C5HtvUsfeuct1AqrErkEDVCXEvmLNefuYRgphwjJWSZQpLsDPqskucgtEg7RvjJy6zpJSRcqajmoz6jBMDUQaEd",
  "key37": "4iroUV9k8Ty8mrzx5aWvaDZzPnGvqvYNwrYn5ao99AurKUPzvLw2RMJ4UqEJ65Y8aoLBwX99SK4yDmLPW1eYsGpx",
  "key38": "2EFit2A4gSQ9UDoJVgVxLj4uMNGWyvnwF1dMjJdSzDxpGHptiykAUJnGAwv8JsmBiQg2Ahf9pkfBstdpqsteXNcL",
  "key39": "2bhG2C1PjxCkt14bJ7fcA4vo6BD9RfGjTL6j7ZEG6jXpEr47QmnH5qX3biXnojoDw7QWBbt7o3K4z69Yc7rc7Rg9",
  "key40": "5e5LRFrNessiJ2bbRRfTbbdP3tVMp6p5MofgYxeeohnF81cvQzM4miRLN6Sm32d73pveFVPFfk1FdrYaQfsNn3ng",
  "key41": "2x2PKGek29k2acQkVzz711pt6DH3XP5NK5zZryAhSND7N6SAEfefjRjDvWd9bRa4Dz5SbNf8rtCDy3wSAdijg6rg",
  "key42": "3UYumJpTgom6xCBVH3VGPpViJ2z3RAL6CXBGv4EqjxknioZYqvgs6JuUJDe8MrJKYHmZE76VgyVGQ2zDAUwFTpQM",
  "key43": "4h5dJyXsQgTg2dUWXWp39zWEuxaxDzHYVxh2Pf6S6hSfTf3LAKtJGN1HJMibuDHW8913HGhVj6MdccUY75KHxMmi",
  "key44": "oRDErKcpV7QwJybLcV3JM3bBVBBUi1JG6ZpWHbWnHgdq8Ppn9bv2sdcNFBWUmiaJyFLEYkTxcyYVAXFaRueHxcF"
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
