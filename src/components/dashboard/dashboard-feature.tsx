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
    "NBd5ee1TSPtpg6cZcBsDsT7Ndy56QFcheKFBiex3LDQhqktKdSwUqtxzCX3cghSZRDK7VX7UyJAbt3fSfY5vZET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYdWtyd87uW1pVm9TbQQgHjdqYEYCfxgEhyHMXwDQvKz3QqNAeY9v4AkynZ2K96retzbm6jtbGnwcbBsNmcNpw9",
  "key1": "4sdXnEZYSe4zfzDuJkgJGYMLwTTgi8JzrpXZaVAvYyi8p9511RzQKqcjpJnUjrK41SEnHaCEapFfuW6VS8aUPx53",
  "key2": "3gqrdmFtyfgkCMJf7MZJn2vbhbH8L8m13mVoMHXY9nhEhkGiLF1y3ukuEyscMtN7zGGsbgHFPjsWynuAtnNWUthF",
  "key3": "5gacNccfqvJmhxaAM4KvSGEMCgJSDAmg29H2EgcufCcjh8pzaZBmCUTSkU93xDtm6sHW6T5rmPoZ2Hgf9rJpLD4D",
  "key4": "sZwxoxcXqYY6z7NinbMRabQV3EF3APHasHEcpKhKTXpDB6Upbr5ftjpCf4U5pbspaA5sPKP4ojdb952BDWGwCRz",
  "key5": "3soorJdaVVmg1nZzUx4U2VKCS387CtdCa2337UjPFtwmV8VTqq7qpuFojPgjkZNXwqeW22YbNT36CwgBNAaZWus8",
  "key6": "39W7qYCQHDiphb2XstTSTFGrLHEEnLGpwZ9uPsuHXZdqXHbVK5BLbkhC2nG1gCZqJM6RbqYEQDcQRTqdvZXkTAd1",
  "key7": "4jHg7QSBhiTSopDUQyebe7xdfpnFw4VfcZGLng1RRjRFL8qLJWzpCZRSB9HUytp4yQavEY4BF3p3Fksg4N2XrcKD",
  "key8": "5xY5LQ1wkFZYoS5KVKyZQ65kgzbuSQ8LoftkLeG6AU87mvDyWhuorcGwJZ4c1yB3BCmBNxMgYTundQCguj2aD9En",
  "key9": "3kRUQQagkuSwCDJYHNinxyi9xgzvQsXJmwMNkfvv7TcgnL6ZJZurYhrAmTf1ncT7woQtHZRgpfEQ366Y8oPrD7Nm",
  "key10": "4vNA2uFT3atCHTCtRtuFrYnvwYZHduNPvvsqkXpJVvv7DejA7AB8Yj3fRFQkhvRE44UodzFrv6gwGc5i1cDoUjwj",
  "key11": "64RSnagF2EBaG7HpteaEEuM7YWgMfTMCkVfyVJytsx9GHDPu6A8odyuJuNAfTX3cENUqSoDUcsBi5SFGckSZ5CsW",
  "key12": "A8kL2xXK8wkPazmrqBwgpVQemDymMNv8Y6qxEB7evU7dfCuPNeUFRdP49t2VSvLMQm9MmP5kwubA7AU9kp937zE",
  "key13": "3UN3FmJF5MTPXgCLeYywE3ZatcJWxFTzCFCyv9VmznSBT7CQ9QL8dcGJVB5jJBwdhosP78Y9VX5CWdXP2Kpwa9gK",
  "key14": "o5MhfVdh2pkmdcchcPKAyjzj9y5oNDA5SBfJkMTJDkQUdypqD94siKRZE32bFBuLxvu9mtFZeWifoj9gWFhucB8",
  "key15": "42RaiEXR6HRHZneWHC7MPyodoLpxpFSSVEkvHGJe73HYk575zBqgnNgLLaM7E39WeuECfrQ8D8CusET73NBScCPK",
  "key16": "nrN4FG95pTmLVxACnt7XVSCNacvcsAoyUrL4PNdBjabTbSBYXc2eB2txbiVeaXuNtxnQ5Bq1azbDBCJpVJrGDyQ",
  "key17": "5z8fwGHir8X3WRXUPgr3JF72MrWoA38a9PGd9VrJ8zu2pSkebHmapgbvicaKdktzt8FgZT5Bt2hssZkqfTwUhCHe",
  "key18": "5bEKZMDa5LEohBHHp8FTZgqjAZCkpFxwPEDD9mQq5s2rbgFX927JiR4qhfThTgEs25pXjEWitckS4skZtdS7kDTF",
  "key19": "5odeUf8DT4gbeqRZiqZh8HuHwchjRws28Vbrf6Pqe2WmT5wFjD4sZwpJ8i2Pd3Jg1GnqNTFg8Q3v7papddRtzW17",
  "key20": "3HEPGwofoV76dtmxw5ZHteNThUiaB7x2cknMqsm9W8fEfxTxntHp5o5H13F7jY23wAUexDSJR7EHJnWnh7SquhGu",
  "key21": "4JHJZjLUTdmKHT154eBWCRrW8EbqdVMCeXr5WQUbNkNaUEtydofURqNN6BzrMoUrsjcYheC6kEgeGeYvHQ7T2LzN",
  "key22": "F94ML8DXePxENsNqK5TPToYZciPa5XzFVjFhp4MG6pZ6vsVjJJZcPq4uAUg4kZMYRUju8jZWWBuEt2nBUx8zZ6i",
  "key23": "2WMN79j8JcLUs82X36fxqbabjJ1w13FP72AssDBXHvvWWkB5ZqmcdP3pEbHpMYuhL3WxeVrAwJ3hVejJMpTazqbY",
  "key24": "2oLgGugFSV8gjv8zSKb6281sqLhr7uCdn48XKVtjwT2zsZZjdEc7Nobm3qSpFQgtx6yAZy5DF6HkjQutuaVuXeFP",
  "key25": "4aYcDmvv9bVWGPjpLdg7YU4VQLjpMab45qFRd8GQGuZntz1unCk7nAfRgPCD3QfQwdPUqYGgMzzMYL3jyCVkNuQ7",
  "key26": "29d49skZ9AcoVkDYoXutqVb2AWihgFhWqV9gV7H5uXr5P72xm3HnuyqR76bU1E2vBPHamCppwgQjnjGRCrFZFN1q",
  "key27": "4nTMqZDFVSX6s5hnUbTSZ6xg7GhjkQotBTSxep53XjF994RdhF4jxkMcD5AK3mXZqpM7McNoYUK9b3BELFZXptcd",
  "key28": "5LLD1XgSyqD5xXshLzw1noNN7nC3U6HXkCFYegYh4npFcgPJ3oY9XqnQQdj7v73T35Ps1BuLiAhJDKbFtsr5bNUA",
  "key29": "5zPanaQf9pNtVv334iMg3xAC76dALn3Rg2QRCnRzWkFrzjYncySY3NbQEh9WwXprkcHS3AsqYNgpKsGFoXGcsj15",
  "key30": "4omRySxg3scYykkSvr3yvmzSAuVcFEM1TJ3rM7xyTCxmfLY4zcak9dJinYHxaqewGCfYLthwNDRKDjaXDiR5oG4L",
  "key31": "4QU8RVSG1oRCYCppVLys1aRtxHDdrZnXTJHruYWgQuP5H3MV3sL6bhJtyJtNYHteNiHRCW5pBS3ArugGbs4Z8qtS",
  "key32": "5ixW45ejU9ei86yZXp45AMV9fYLnSyHpEV1gGin7q1GfhS6sR36j4qmqqVCxugT8DijkSMnvG3vvz1aQL42ifggq",
  "key33": "62DT1nFA8JLdFV2fRS2DRTAASUCkQxp9zhcv59E15Fo2DTKJULCFQELHBNGGjYWdwDXWjLhY6fYMQtkrPhbYUfFt",
  "key34": "4Ms2S56QnoP6LdHYJgu1K11SS7xyB3ZervTqZD7tBfyhk2jUAgJ9wbSGQzjjUseztKwaBEXAM1JwExpkQ9i79xg7",
  "key35": "4XzuSRPvCzofk5z4KuF6azYxBNtCSgzkFY3Dn39hi4oRkLUZxLcdkoPViQxv1WDmMgrysvtBcVbv63aCU5243M5x",
  "key36": "4NHTfHNdtugWH8ejNwQwLonVxh5CfHh8NiosX9JPoX1tVgXVRpWU7BdkYoFk6f9QANTtQrj6vNwKdTTJ6Urifm2Q",
  "key37": "4J4B32K6w9u6B4GWx5pTjKCFsgkS9Tw6PxP342r8bGgEXX49EgZzqdJcnKan1y2AvTYi4tPWpQ9j9fPsNZfyEoT2",
  "key38": "4Fz2Bq8dyVveei6oajH6QK6X5gc1YYFQnUfbSUbaZ1ZAMGey1GTk28JnpDhBewQwMrgo8EThTaLEQr7Xq2KcUQy9",
  "key39": "62ZvyJeDU7m3gZVzazmRM32Es5V5qGdFeVfPBgaS5QhQUs99TjHheJ2x3SVhs32dkM8eS3gQyrNAwGUx7P1P88GE",
  "key40": "3ZRZFGrg4t8dUgbGx9gDf1AU8MSdHVQ1dZcCedTYayGHfbS9Q6nvbjq2aWXBuRXBMaxnjmnQciLEsMg4TfmhWKQW",
  "key41": "2zBeyBCeCqtUjySsMzBVag1b5tzyHK59Zj81fcfUWk1NyM4ARuD47FwcNxQyfvSrs95TYUNoqwuKPmkfhFmkQ5Uy",
  "key42": "518yVMctpbnJ1HsQN7xLQkYef8GoeceSudpGhgSsQRUNXc7nbMHwKXiYsvMKjR8kEujegn6QhqmjQFNVxJfZu9JA",
  "key43": "4jDg59avMH1uoyXEjbFRa9iYyEBwg8y5GuzQNFZhtcYbbeX1p8J5hBC9YuWuPZocR5C2syf79rx2RRecjq66YBXq"
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
