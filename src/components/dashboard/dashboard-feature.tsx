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
    "3xskRZ6z2G4sTCNUqvvhp6kny1cerkVG51qjSCAcPLVPwvMCm4tco54Cazswc9Gxzm7weVLiFvPNwx2Wi311KsxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFqr4itBq6PEuGFjbq7K1Bec8RYwpuvwbtsCVvsF19cmzv313XMxvbMN1xutvHWVp2kBkC6CVKVsxUkCRq5ppTX",
  "key1": "qhR22ZGRXiTLVZcJP13dhThMQzQwqSnMAEMWRKscGwnbTw1iqKTtLPcXP1ZciESAkkG2SuSghhpNbL1kzViwEex",
  "key2": "2JJTjscWwpjYw2Fm2rBiapCwmgP4Pu6KNKXneNUkNE1VgogK9eQjPgCiPeBaqLGdMsPNgjnqR62xGq3TBXDjyRtF",
  "key3": "57GCXNxfS5ph9S3PEDwPNjm89ETNyXxnWuZh5SckVRRk3kqBUB1NVuPc9Lc4UxBz22QHgzda2LaTNsbkh5NZTgoc",
  "key4": "5e4e1MCc5Tu62nzN8wsVstj7yKSjqcf6BKHeqwLXn2PxFXjiS7ZstojmeEMyLtc3Mo96Vfzo8gWhVooD1zfM4GZe",
  "key5": "2RyrSH4YgfuNuaUs4HDD8ejttAUxcevm1vXACwdPJAnmsteKq456Cf9rgczKSNrRb6LsygAGABUFTQRLj9Gfz52t",
  "key6": "2ABk3LDrp7iK3cTbKHbvRhijH5d5WiidGS2oBh2ijLaxQSn3dfFLxGvi5sbGBWqLZCFGFhdsZhEYLzeBP7iuNaV5",
  "key7": "24LghMW7c3uz5789imurQKW4ypQxSbpmnXnNmFTGtMEEv5SvMj2J2GgrevGj5jo2CXZrXNx4WTFqLzQb2ARe66Fg",
  "key8": "2cFF26ZwTqNEsnkwsuxxokKNi26xbX778DWUQW8XfMe7f2gEyC3Kon6qcxKDQeWcmC8ACr2kn5C6Q7FH8UECCRcU",
  "key9": "2DyAH3x3sPR9AvEK2Zqij4ndhrPFjfnk1CxkH9UmG3zuyzT4kMxTZTu7sr6zSCurrbChXm8M7DHtjQu5zSk7KxeF",
  "key10": "2KKeqJ7k7uXX4qw4T4B4okv4gEKeioY5sxHPdDwLM8XnPoEqg9jQgDp1X1DZVpbbF61w9WLBbQYaWMy9qvboNsJ2",
  "key11": "2E2Q5AMXBUaPn3yHR1FpRsoUzswWgc281peLFNasNwZ6AZR4nfUBVH3AT4H2wrDdjhCCHbSi4JnjhywZrdT4dPSB",
  "key12": "4HMXMppbdvMS6ijpuVnDkg48JgBhm7AfvT8Dt8SgtdbMC7qhJzquCvFwJmy6PEFtHkHdCTaTkpTaKJQ81GDYipMr",
  "key13": "3zUKRcFLFirXLoDYHM72qZTc5w2xyn7Yx6MsFgK4jKcnYTVG94q9wHGTmEoRWfbjNH6Tn4sDnv9LPrnHYFnCgUvH",
  "key14": "3k7A1ZtMBbJ3HHTJKfsBcTRsR17sLxX16RapQiibupDYM97rRQps7R5TVTz9r6kFptkfEriWK3qYvmuFLf4DiEvU",
  "key15": "2LurHpJrLvZo5Y2UJjbBkrAJQhYA9Y5AjLqpWxFxD4GhRVkn5nvLrxcAYMuaWdsqAwiE1nczYmuSik2HMJpLVXqm",
  "key16": "23nAcxxhkxMCEukQKoBkyaUwF8sRHSJyQaSgqPvB7KPLkgMFJX6W783zPEQHVvUY4izkSJ69kguA1Vc8EKs9Z8Hh",
  "key17": "5r4AFPpYQLU2jAn3eEwwkAW7TJ4orEn4iW4mNNFPA6HWWDNTUW7BeGLbL1iWe4ABLDkPYHsbmvBCJhXrQmBQ7fNA",
  "key18": "C3mMSm7nW11ohiebcdEjEo9VrrXLqTRHAim1iXe1jaPRrXibSiDnp37nmSN6zseURG6zYhxnMuxFAJHKpHt5TYv",
  "key19": "UBWRi8comyzrE4VAJte19bNJNyv2EeyX5mZMoT4YGTD1m2NVEAREkWRt1XaZDobhsSJ4bwPadEFKDzCPTv5wCSD",
  "key20": "4HXSQdxavdFeTfqYfjMMgsGwjaQpwJTixFJ4wPTBMR379PMqmDm4sbBJzGnhHwRRinhd14yyrNxNSyXzNoaDj3hB",
  "key21": "xUo61pWYoHLqiowZQcSLHZpFaFrbWUu18N1LLLEFjL1pMpQ5topudSC2UhkafziqX3X5mDTqsLbbucFrR7e8oDQ",
  "key22": "4Vrr5LU2Gm37oHUtga4qhsWewxBqrcR6g8KJ5hBSjjdKQXm82jpEtqjFYtgtnRaa6Wc6fHQprZJTkrxwi2J33JMq",
  "key23": "WJXazX2UqkgEmypVQNwDksErLFdEVyaLVyYSWif1gnqPDqv5VrzSs3xfWPBrSjGpNndmhXEB7yq3TPGy8rtQuNg",
  "key24": "4QD8syu3DVaDqM4YZDP6vF6Sa3yz1w7Wy8mTzkDd6kjvw6o8weUi9vy3Ebz9k2WHba71MyXfUNAngsVizrjSQELU",
  "key25": "4yNW1fTve3XStDTHPH3SNkLQSq9JJiHEkxUqtTCFgQmKkeEegDRJewnfvHnPbZhqEp3eYatNAG5ghism4qRJ8Kb3",
  "key26": "3H8iDVBx3xdYn2DQZYDCM5qmYQwqU5eeKUPNvJEE3f5dXK8jYCzTeS7BQxxQ7TYAW1kNFVpVy2qytjGcrhiTFEdm",
  "key27": "49gS5WMa5Ff83p91Ad31UHkmJcoXvPM5vND3mJaRbwrGnUuqxnj95xNnMDw31nCsDyjjdK4rtPcVGPLZtxPsFqaK",
  "key28": "4EcTK7eRpcf52B2uKziGUyi4JoPiGca7baXFgQuxEsMWLCirtkmJKHT5nBd5nRnFSEp5E8K48ZJJQLHm1jw4tULg",
  "key29": "9LURtNvrCj3BZHGh4XtViDYoWLYaSDzzR2JJBdetfQUyizMfzfQ3kg5x5cew3tq3ruDavu4dBhXJMCAJdckkhJL",
  "key30": "3V3LjSPUtxyLGMRbkBxWYztSVDKzSTD1rQvLNPTJrN7NDuVLTqHpSCcYknMxgsW3yzz1CZxBM6x55dZ6zvx5gCSk",
  "key31": "2y3Gy56tZ2yYspKsW59YXLjM4NCUtFZ1yZdnVDZ8HNMQ2yPgxV8jQU2Rbm9P9ZE7rgny4whFmD32Uf6ktgyjvpjB",
  "key32": "5CiMUevF849JZJMk4yZtoRuHs75MFubxuBCzr54Q1g9LUy5YuhkQ8VZpTT3zoUZoP1pGDkUVFbLBmXyPUJW4SiQX",
  "key33": "2TPjjr6SxUM5b32BZp68Jo3aP6iu9mCs5dnwfhVqwstSegXj5kCsC3xHJE1gwGvn6EfQCezwdbQ1bcWNzVgVQm5f",
  "key34": "2JDFoZiLZKoj3TnGYvn8ah7anhopbnbCdR61ptNXsrttaNRkgaSHqGmC3jksrsxjSLbTaEZpwd55mNm9BXfqPijV",
  "key35": "5dxXBdf6idN8mTvBFe9SeWR7fu1KGmPj5mpXiEFuj581FSmw3D1jnSFazW5h6utvwhdV6jpPc7cAFLYZx55ebGrM",
  "key36": "3JUDpskA2GuuGCcBRnZoFz85nGDB6nRc9YgkW5F2GvAX2xVe7UBin7g4M8XHazqrBV83TGCkZFLuCXGDrEsFWdMc",
  "key37": "3N6QEA2MnZzesoqJQHQb6zH88hQ1MSaSTLCeYnBT3kWDvtus7dWm4X4c2e3wTeYMVvsWnzE5DNsnhshDft2C9xbi",
  "key38": "5iHRUWac6QU36wJJTkhZx29ijon4CWZ4JzWDhHdbTrRGLz9HmvWMGX7YX5RBd6anCVLAQkcKu7A112AP5v1H3zwB",
  "key39": "3saDzEbxcbZabxGe5tLsfbACGvvcDaUCpRiDudMR459QbEEQYoMwFU6XWHakCuHRRY5oY7VWTMCVGkgz8EvDxCz3",
  "key40": "41PyJo3xjJofD9K7BxfuCjWoxLvCqZ7u36rt1VETYYhwhyJ8hk3AcFQRHMjz3fvS63AxwMxcDApPUq6KoeyAj6Gw",
  "key41": "58n1WsSHPZdsb2qgGRMkmKN5D9r68AAvv7R6RXsqHPThqrB2LsMgbSUj19ZBcu2YWPrkj5M87qJrkgB4M5n5gBwf",
  "key42": "3T4jyg1cLn3VexdVn84QWtGYCuTK15Pz7U666ZN82tnaq5mgrMAxCLvxUArGsG86mDHLVB9HuP3jGUgWDm9AxK7u"
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
