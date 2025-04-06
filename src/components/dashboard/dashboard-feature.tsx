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
    "4TiRC2NgQxBRZjciQyWTJkxzZXrcvkb5VdnAgB55A6WhRohSiqaJQXkKVuEHhrMSkkVKUQcNJiDqRrQk3dU7vYwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGfidSiC4w9hCqbJtQdVEMoXHkyMkBZXgyUTFs3WCDNGbmdXihbrwP9A4FNhfpxderXP6YqtJSWdeUYN6uNNmcu",
  "key1": "3esBA3QAuRV9YFvsY6gbgb2BK2gTEoh26vQwsu646CF3c13BpxZH7Db9j7Aesz1oj7SVp8SW5TJfJf6gPHa4B8jP",
  "key2": "4MnE6bjiaC8yyAgKCxbdVCfRX6o36f7dDnzfoPepmR8rCtDUYf8avvTfRg5WtmACvMi7XNsEVRzA8AUw5RW5ELDC",
  "key3": "2yUT7zux9KJ61YDmWW9Dxqny3h3eyEKvWBZB5tyuCbGsk55pUbhamypb186qhPTknWwbo6tJcBf8VpxiXhuH4HYv",
  "key4": "67Ny2dFmncgwn3wovAFZZiqgHzzcTs65UVCRMaGpJBRgFN2bse33f3j77uHEXPHfsLDiFU6tK93xna1o6whuCxe8",
  "key5": "5H9assLu1ULEsMBFqdomHg3McgKPQHsF7RtPaM2nMG3vBHBH4tS61CPTcYH62YHZNHAQytEtXRPR7wSQxS2yjyVF",
  "key6": "VieK1X4Bumi16oadgZ6Mf8EGhbekT6M7ura8CrgofgstsG9poHdrSLfijPmB8M6ayvpLnNCUKutRUZQxaute9yk",
  "key7": "5LUqbjWGrtWYAzg7PjrLfgubM95mjvSd13ypP9b5oFnhYoMgYy9VGcDejHFeFUutmuGAa5aBcnYDBNxqshkZvctD",
  "key8": "3zsRhC9hJsQVCS6PoWrEPY8pz8o3fn3B7a6NLu8h2PVa4YMnWKKftyYNyxoXqRgYv2SGVfTKuCra7Q8C8iFdCBHF",
  "key9": "2CBsi6eqVJt4VzQ9uzMddoWYYU6Nwyr28p8yf9Vnrs64yV6gpGpH1cwevhhCWbtD9H8Q5X5zJLdcigraUSPXEQoQ",
  "key10": "26C6ijobFkLBDCceEsdRWUw9VPBFCaU72iDCYqwYtevpjpMsZw6aPr1Cqxso7zV7kk4dA1cYebppY9fqaNypxH1U",
  "key11": "4hxUs6MjfhorMNLVX35v7Q5qBMdqsyS6SpM5VSaZVfLpdvmKvfM9j4vizrcJbb56Ce9Rjqrqv1V2XcLiVtB15Xb5",
  "key12": "2Kag7VdkSP73yC67MWKsp3RdFuLrfsysvngfa4rjxge5ZihfnAEiE4r8txVXoJkiovMEtq9mm7ahpaw4z61yoNUk",
  "key13": "4uvpB9CD6skgHEMAqVS7yySd8yoFR58dhXtM3FZeHjqUe2xUEuH4RsLpgGMvzL7KaMfbf5okrovw3VDdknX3AvLi",
  "key14": "5NDaZSLuL3Zk667utLSk7KKTUVuafBF2Fz15YKHybyKc5tpPuQRBFek5P8E4CsT2dKoJ4p4tEGmPXG2WLhhUVGJL",
  "key15": "5qx2eDcznJNBRNzfMxrgDB7zBaNxwSSdGV1meBnn5NnJtyeAwQdafXWPbmjyE7WvoMLyDXUfNCmBy97ys2s5Aua8",
  "key16": "UCDvB2ga2bUkMQUnuxh4dp8sdzvmUL4MrQUewGJhgKa25eNj9hPGXdgPwKSc166jp88Ct3KFf1Qf94gCfHgbqMv",
  "key17": "482tkJgcQxmSw9CWt12QXLsFqN2uoNq6ckWE6uUrjw7rkXtN8EsJ187Qiz9c9C6bQo95bHcGrzdj1GncMigjimvg",
  "key18": "478oSc6ZGnf9W69XZnzz4jJCrcY5UvfhRhphPphwGtkMyuxByFomtw6iPnzLn1SH9UmBDgb1pyezwv3i3t1Tim4C",
  "key19": "5SGHo8CRAPxRsWr6nZSD6RCwEBaafx1nsPTFLNV5XjMM7mMzqJPd3JWnmgY2wDLWjSD2ZDo75Jf8eS4AnKb5tqqn",
  "key20": "tLqJfUfAJPsHqpSwAY72jYDBY2cQkq7kVKSo9LBxzHaZcGfV7BrKhDaHfY7cENVTRWYEC6AJVFKiXt8Xjp6i6f7",
  "key21": "DSXc749te2PdPwXchEsqsEUtuDZurvpMUdUeTQXYW8EQE43qrpM1kDAt61xvyh4pmZZ6Rv1kCcNMP7qPcmhDj9P",
  "key22": "5vy2soa5QxWPy4SnNZC1URH4aDJ9qZVcDJPoVfnhBZjaXWwR9dxHAky3bHAZnNzDcdrabTRWJjj4qgMrXiANnEia",
  "key23": "2tj7KnsGGbyy7aJSnPv1q3sLdmjGVVCkvAkGQBTbSyYa89YRWrY2hyLtuBZfzzw8PrxaonB24THZTSuYL3a46Gdr",
  "key24": "3pQU8yfywFC7pAE6BnVPdMDRvQ4CYxSHgoMj2DNxsGVs5tKxwuDQ3DBGdePKAMCRkZgS6uFReyg2oajLiumsE9WH",
  "key25": "641699DsY26yVTVtjpgWK3Sd42ZVkGdz2whJauh42nQxwbuukXknqCXKJv9pD8xUjbg2uj7svz2mWmUBGnVnq4vN",
  "key26": "dK6rMkigbKMZqqKM8nRm9FapkAZJR5tceFrr3QkGdF2JoaW7URHmGZFa7xfjHKRVJsjNrJsw89k2vn9boU56AwK",
  "key27": "2YXPp4kMK1EwSMJ4SPtPWYi3EDzy1m2h5uJKV3z6LF2KMeSRvSQYj7ezCedZHASy4od1pmA3jwJSChmyCxivjtiq",
  "key28": "3LYQdqF641LUirLqUb1W6kkmHroCxMkSLbF1vipgNBZqbcqcaGuUV5Y9YJ9AvszFqTUCVFV4Rzw9RceNxjWchKM9",
  "key29": "4KCxExVwRmSC1bb241XJpoUXKc3517YUVFnj5cGChf3aHcroWCusNQv1j9UtYgEgt5h9eXXKYdFsLDt9pYJPKBU8",
  "key30": "21wRfKdrvfLGZ5mEw6hzDv2TzjEhQ6Xuw4GbFXxME11vZ1tccQV8ceh3uoo9Vzd322tqQspmPTmCpQNx6eUQyY1a",
  "key31": "2brfsPmzc3gMqQSYNNRFWm67zGq9pKq3HnfUC8o5aDay7Hbwadi1V933oJdY1xkbZZXjgue3LhqXURUGhRzzHUr1",
  "key32": "5RpDKjFuvPEA9WER2KRNQwUxeBrjdKFjcjHPTsVec8iTLpKQJ3FzQWezVeULdhNSKC7tkyDrV4D8K9nBJdFsmKt6",
  "key33": "4osDuXh3kgCvDjoFrpz9bhkV6JpqeC6i8prAgmMRiYGR7cM4knLekYAbmjSEJN6fU6ySnCVMNXx9PuyVmMg1e2X4",
  "key34": "3SfiPtVj6zVi1jBxCdLBpd9pyruzfj465WYdxbuUByCvSGLMhVeaJM1DGknsgxCueBBtcUHxdFj7JZ2HHvZ4HC4L",
  "key35": "5FxAX5aB78PYht7aAU9EcvZfNXzjRWbDrKgbx3EghtcZmhoSTLMNtWEfYWWN1fP8wek9S8tE243bK2zdxFLNikfL",
  "key36": "59kB4Uco6QxyTHjQXVLFNi4WfCFKvfgUnAvxwbyW9Tdh4RDmtPwt1SMsXefhKrx5fmD84Wgdos57bJZnMAkTEsvr"
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
