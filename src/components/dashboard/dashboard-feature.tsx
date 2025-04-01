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
    "E7fd5QmzUV8mJFMToGC5cK8rYM9gFyvzcpvKsciV7dSdYdxmReUaFYPiEVBRMvoZFAyMn1CyMQipB2FU8AnYWgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hpWdQ3a9dmx9R31X1Xb4NJaNdqUxXjVhk6bXSYJoQ647EFb4mr2sAenhHcsQCdcsd5gYJyDh3SuPieKdpPwgUG",
  "key1": "2LmSyVAyCCafwVLFGYHKssecQdBinYU8cH1fss8gkVfJHRJ5mss5aYKGprkVeswRLtT8tzLQh2Cp2u6MHUtfvbFc",
  "key2": "b1gtQbrsFuXDydXRwinks2Thai96oxEX48VTXKwqrh88f1bz5VxUCidVLbgZFJkbWpF3uB2sHcSJk869KeW4buX",
  "key3": "2KyqysnQpHnV9qTeVYmDW6dYqNJXP24yRrcmL1mpY5hxJiM86azFJsyXMgxoCcw5go7UijmjJG3Z6QVbHERsFBLX",
  "key4": "5HfmNEb7anFy6P6SmvjyiRBeJWffKys8wTc8nJTm7ZewRdpTpcyoqDPAP8JP9vdVtpp7jHcT51myZJPED2e7SCvp",
  "key5": "ZbEXmybFEv97BTAsmLkCaGhkdtpr5nWGVUhqYXA2Ptzhp5dXUfH2djjRbo4j6PgRkmsG1bSoKGvHD5NtCKFSNRQ",
  "key6": "49ugtns8JMdxMsurAMGyBcaaLiV34NkatjqushqkAJrUNQR2xEAeLKAWDBENYqzqP4vTiKJUEbd2A28oKbhgogWx",
  "key7": "3r7pSFvfkLhhKGx6Pttecg27WpFvq9hG1k2tjZSqQYWmHzVzZ68HkxgAdvmTp1wKRVY3vq3o13zFChA5CAaipUAQ",
  "key8": "yPEjqiwifbPadfCV3jzXsznhw8AcfFizJK8haJHm12UcjzPJvwzmSoVqYcmVEtad4gkZEpL7ur75Efvqb4sLZw9",
  "key9": "2p7UwmWYV6zvRWH9jsFDx67LS2gtdzpRFEa8hpaeSP29Z2NX71NYmsJS5m7AcNx1fbWTC4YxVVK9mVdJkTWg7jkx",
  "key10": "25EqEEibvnYtngi83e7z3NXjwPSP5UaV9Jk9pJHpuS2xC91LoArAgKvYSu1ueWToJzpaP4JXAcNerkyPnJ4MnuRd",
  "key11": "jApGjRSxcgqttADcWaHSn4VzKE1dq2fSNEJSX4AWcHa2kmrjgyLYi4n5EbFzQ8mG3FqguV1Pay2pZxLzTu5LSVT",
  "key12": "2dSiEB3XLM21XiQ1DVvD7QEG9edixnSUrUauBcPPRLN9urHKz5wV9A5oMc5wEd34oRBuA1ZmkfiZ2secuJ8WRyPz",
  "key13": "3XZYnnGR88Jtw6CuoFTgqf4jiWiUNCnznCfM63HBwXZwJYs8Zdf5burM7U1KLdo6KAeCTidASgJPG2LDiYiACxCM",
  "key14": "3gXshfdFU3mXVWAYtJ6p2iK4LaLGx3r73xxJGAskHWghjgJUwY777nFXSMgSqaX6jk56c2h4quwUgg56hJooDXtA",
  "key15": "WRxg9AmLmcGXqSGYMcK9dpgkQ5autsKucjKRZD6AHDK4xEt9REY7cT9nMw6aLZnscVjJHVajGUQScXsZBhMQ3ja",
  "key16": "4BxF5VoCV2mCt89HdXpKUfCg3LKoFzZLbQFBrHzxs6pVoNqh7FCUknLWzAQSHSouPdJMA7mU6zwUCT8joGzfRh94",
  "key17": "oTHkNgsfK1HvN1BQ5GHymKCa7VXxG58T5Z72JGmjFG3FNJeuEpdKRt8x8pSxEEqHJWXHUjuPGPuqn6uWR6BYVm4",
  "key18": "4fsXTb6yrtFAvdrVGf4iDFiyNZAcmXg1ufqRFcmPV5AFym9gYKq9RDfa5Fg7RTtaeVuTzHbRfu1irhVCsFNuJWLR",
  "key19": "jCiZGimSbcYFuYpWjXMwsLuHGKnVq7ox8xLWeg8tFtsSnqLE228HhsDGjhpr6MuZZeedr6bZtX142MvGpBA5Yzb",
  "key20": "NWNk4V3MPPmw9HTjmS6FdbmJn1GfsQ3SrJSQ2Ka8oL34v6sfi21FTT87oTyvysn4g3TQpu1NvRmVfraptjbqpKa",
  "key21": "4xkWqnJXDFjHM54knghA3rBjvDb6CA1SvUojehxKYNneXzzhAkyhKUzUgnVu17qyA3SHPuBm9VJXNRoSLbTPKq9h",
  "key22": "3ozL7stKXzBd9cgVVgi6Mqi7mi2Nap7dRdLxrW1Q7Q817knSeCP8MS5Y48gQ91BbdqxqVrhkdhAEwaMWw8imee7d",
  "key23": "4LXfyB3kiGdE3FP5ysJYXoKhEhg2e422feB4xC3Ehy9pEkk5vfyVDDrYPf4isCogWi6n4nLVmkgoq9eNFKTo23m2",
  "key24": "49Dpzpz6EY9uQ6zbyvqrQTNBQPvpi7nEc8q1Wi2zydjFyos3XrHbrCjbjFDsSqs9fvcDZ8749Pq7HGDB9BRgNJAM",
  "key25": "4VX4V4fN9QM9eD2jrmCMGJG2mwheeJgjd9CLGdz42de29TiHoQAqNzecmt6VMx56uYzwVs85q4v4VYbqPKfaP8P9",
  "key26": "T3FEWhVxzPXXWAzR9R9NzzQzFtkEdrVuQ9oNWXSgZ2z4d94ghh52RtjtWQ3YAXJ1ZQ56VhQV9aUcQzEe2egb9yr",
  "key27": "3XVd1rf8ah56m8WFnVaPHPsJrTrbRgMXx7qwT9oiJz5yCdRVGry3iGnKqUqJiWRMZpU77tFevJEjUu9bKtoSVyAc",
  "key28": "3Jjzubjsogt6gwUK2uhd3EDbbmrkKXs6AoFKh1vT4wRqPFs7xtzzyEpLneRBDKDrA4gc1FTL1Lb9fRtA54xvwp3p",
  "key29": "X9Mjs8C5pkvYP4b3q1GUFD2ngXV8ZBvKmtMygy6ksj1m8msjiD9zq4gxaS3gZgbHQaKEzkojQ4K8UDMBgQxMThN",
  "key30": "4ARmE1MCjE4F4VexFtyeXtb69WJ6DV94MaFPvXTLxXMPeTknsbZ9HHUnA9VdkAR88aTuejhXxkerb5juA817JKxq",
  "key31": "58PBnRVZtYhR2QPG66w8GEWaiBbo4zm89SK47ch93581mLeFpqKY1RjUb6hZR1jhLUt56SVDvLbr6PR221nybdc8",
  "key32": "4pSU87sMGGxUYokF3npny1gMvLeydNFvjXTDtsTkxu4UpB6jJscjj2Ww9iMhEz8R3ShiJ2ahNW1eixJcU3XcapcP",
  "key33": "5DRo3vXy9Dh8L3pdY8fYgzJjyhcCEoR1t3bhZMLRqQJzhSVKg2jBvNCkFqAfH2VsrvAMaL8PnjtbcwLXpWGG3jJL",
  "key34": "46ZzZnAZ4yFtWvtMDXnsQkMTQbCCMKKjKVo9funhDZKcT3C96FhVhoQQq9DAwkMCsxc42ymRdVsya35qxzpEvXsa",
  "key35": "SxhQWoqWHZYuNq3R29yk2Czb9itCn4UQhoA7BCRdSBg4roGhwQqxURPctx23soFmMGG19CtivRkwpgoCRhXd75j",
  "key36": "5HCay6LE9pWZjgAxPZA1dNnNHtCATrQzdp4AkLMKBfLxgiaaBDbSUGatw16LqRT3FFeCA5vfhX41sJNQfMMwNvnU",
  "key37": "4gYXqhc25EZ7rqCTujPDkjNh4Nv6TEigrSSHbb5PGNXSG2H5HLXHL9j3563XZ3gH2YWzkSQ5TBa3mgTo6VN9uueh",
  "key38": "3EnsZf16ZkXsj9jgmY8demdn9Fjr8oxxvxWpniTBeczhZ8WqBWGeoPeU3Y5F4zj9E93vQ1tVAAWEa7rpH1HWqxjA",
  "key39": "3igpEUTs2pYw9fMrVAKedm1dky2gv73xbJA8RwuUGHJELMAodJpF5DcK13cr3TeuEurNt5DuZprZKT3AQMv6W9Nk",
  "key40": "49oKyeDmMyMWEifyaQe96zd2WcpkDwkKHPYm968YA2WBY4B5Vacw3LGBr3sMaGqzzgycq7codB4vkiWHkFSKuN2u",
  "key41": "2v5WpAkbCL1eUZ7pqPRmjGXcxmxLCRR9H1CnK3vGTuAxffGkBLNafHbz69nWPKPS9tWtuLtiKYvXvFEMQEDALmDf",
  "key42": "2yD5Am8pPm6Nuysah9rr125s5yGJgQYkbtgXc9mqnTHHjWjnSLHYpWfMdNXCnJzvEKPfg7ng8QQ1pCHoZ1K4mtz5",
  "key43": "ApsBvcvAjcywjQS24knxN3T4F2fLDetNaNDmk2BBuRyu2kcneV5JAEFoXW9oRswfLvxzKWVMaoEFBqPwdPAkKq2",
  "key44": "51zdd3NGMcSDv7Gey5JdWh8RRg5p3wMxXhQmX4vUZDpU9XUudaqe5BNGGegNuuPDnWFqWQnHdMCjxJbbNfbpYvjR",
  "key45": "3xAN8zD5dnwpPPDDZinthc5ppG4rcDM2fjUFsb426WmGpX43rbSWez5F6gKdq2fxe1LM1137tZ4cMA2U2uWF296t",
  "key46": "xsn4Kmg8qFGPjrD6FiidhDd6Pt3xJeBsotKHomyKXgEGjH5sKGfdNA5erKon1R8k8Uqjiaz3RKQG9qtkYvoor1G",
  "key47": "4V6iqLYAVGeu8qgn2PWpG1X2XHfa5YPqvyrE1Z6s9Pfsoe4snjxh2q7mBBF6ksiWdGrkm2FVUdvq2KHuPJVSedD3"
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
