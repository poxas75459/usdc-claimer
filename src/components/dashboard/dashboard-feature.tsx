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
    "ShYsMJGUhXTidgjnSNUWUbsa97uXjVZVebBgxVZd2nYPXjoxpDf3XqVteUCcuyi1kE4S444UW1AdE1PPnL1DxBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZ8Vh1nXL7GQuaeQEBjiCFs7oc3kvfTAMYNsvZ2YNsi6yzZaVEQxV5mPCeSMyzhjPmabuTimLJEx7QeonZCQ87Q",
  "key1": "3FGmLuLowiVfB5YZ1KBuQ9XW4GXtZibRawycubFRigQ5c9i7m9JbuEH3gRsMY7nfBvtLnG99UUSh2GUZCzCXVxj9",
  "key2": "2txgQATbgdvCJhfQqc85NyDTVisByFY64JRc1U7VCzA7qMN4ETmaAqh1ajWRfBx2tXKKrqimUEuyLhw4FHkWvR1k",
  "key3": "J6zzsAvrsWiQ1iwxpYh4sW9dRWM6VQTYRYgJqTFYLY33ks954mXdGpXq3UjvYog3p1MsXyuh9c7QKagYZ33o4yx",
  "key4": "4TDK9zQ7EnHuYH3nACtzEBCuZaXN4GtGVXeZFLorVs2Hhgt1f25bfNH6c963C7ZAWtTNRC1MBCreM4CzWTVPrhY",
  "key5": "TwqVDjJrvEHF7Q7qqQYCXea9DkZrTeExozdRedHSFgtjEFTRe49iuWBovy7nViJxZYgJu3GX52M5vhv4yKoSeG4",
  "key6": "4th8ufL2z7i8rn5qkBc3m6YgxGVdar1YPiEzCjkc4ezFwMhqcmBxZB51hMTpbG33v2sk2nHWWKefHsYjsMyeDYjc",
  "key7": "49qywBBQAA12GYZQUSRe2yWrKpvATTaiFH5iDgvq8PdtB9KWqRvKdupgxGX4gyStq99TbQsuytZkFG8WAKizRwvN",
  "key8": "2RHeMAZc39YEkbkqZrr8hvWZ5sK7dfawKAguzgS2Tbj624ZwaZE42BrA6jB9ksyJqT8ADF5BQdCjLf5aHoN5J2pR",
  "key9": "3SPYYTVgCmsfMux7oV5FRnBCMponVkxbUjGSM1woCB6xJvFUudSPQtKWmZQHJxfsDmWQV9iqAia7dFh4MTNi85Yb",
  "key10": "5Ld9zyRkyqMx6B4SEH9Fk3Voy7P9sC9EzXAXqZDg6t9VLDQP79wDoUtuurTE93ykSwE9enqiZ3EHpw9njPuBhxbw",
  "key11": "2J6FniQ1WyE9mPNaW8kpquSACWU4tRNq1dc1puYSWi4NjcGMPXTGBG58KJEDsVduuFG955Unidcn64wWRjCoLAZC",
  "key12": "2s4kEbfyhwCUo8vyCwqD8fSJX35Spzm1d73tDF8FqqGEPCxYUjf51NKmAYu8DeD9y6f4fHrTZZwqAoLnVoJEFRb8",
  "key13": "M1jMMhsmQZtLhMGaqBcx5Kt6ssWeA4U8M4c8PPsd9f2aPg4SGitpQjaCR5G4stwiAxVNbNLQC6WhYKYy3Jy2NBA",
  "key14": "rJr2B8Feo8vsxYq7vU72oVVNJG6qHZcEMsAUfi4CoFy976WZEnpkFrAn3ueUvPwyAEf7p8m5y7vgqe6MgorDq8L",
  "key15": "2xG6J6W4pojhatqkUQF62XuDzJuQkNwyuuNEVdRSqsZpyKGh1iufub6zXcrmu4JGSBWfWd27aLTXNT9pkuuJzrz7",
  "key16": "4VFQFwFthh4sW9WqLmLa9xMKnz1esr3V1RyY8nb81pdqVvTmDx99212KfYaSsZJHZ8pSWZbyXdAeWBavYodh8cmX",
  "key17": "4SdFoqjeQW2Gs3rW4KNnM2ktviPqiLJRHYx9hAQEckb46fpzFXesiD7EgT6jyzFJQ23FzbmBZLSdsaVt2QCYPxc4",
  "key18": "3KUEqNs4wLLfXuuHMwMAdsNMgmCKRi5ECDFJ6V8LUcuR361aY3wtuEcEScJnv2kQahMjHETNSW15GrHBf1y2xkDY",
  "key19": "3SNGtQHCzwys6CbDJ74MtEVMsKjQddygnmTyLY6kzoizaW1PZVKsvHSqi9yU9FXmrzQbPtjUY461FgxboKYQ2uMc",
  "key20": "4SRvziVgEbs1MzWc5Rxi3brhAUK91L45pDWi3JUuRJL8iN31iS8m63QZdAvHmyYY1yjjZNVpnnMxgdYpVqgv19qj",
  "key21": "2oJxZfY2vGM9Axrkem5phzGo8afD8eQ5iaWgztFvuXgRkAzvyTUi94nVTXBqYh7a4omUaQxsW33GrnEijRw9tEok",
  "key22": "3g6kkXhGadUz3U4MDvKDs7dayMNhZeDmgyhYJPkKhiecBQbZz7GJY8SxPUbqWWGH3S2oAyvqa4Jz8175eADGwXZa",
  "key23": "2wZHAHx5c7YCRL2gjj1aMAbXQm9V4Ey36psRXLfdUr6tvrNtFTsCy3PB7Fj6LYKqbXfpNVnC22ny4KrPVPrRx2hh",
  "key24": "2Pu3AxXZqUiFGVHBuxKftbeUEnTB5sW3BN9K2R1ro2sLHQefCjJ6QmqKNV4g3i2aGoakj73FwZK67VNbiGnFudC1",
  "key25": "54PcQaw5nNmy24tL3QQRDi4L5KckebSF61uCtQLiY7iW9DNiFA6TDXotyoGoChaWebBzR4AkpLHMHpRG1eYJjJ6i",
  "key26": "4doDVckshjCQj9QvNXNzECAKDreTsot769R7a4mBAD9z5u9LxeLPyjF8STtfyZmFDE8YXxHkJRTBmhf3qH9jG9mu",
  "key27": "4zaBKH7K7CykjphEXYqUXMDcUHimNv3LZpDYevnMiB5LVhNPLQgkVFFcophD6Fy2nHc8iCNGPMVwJQwg51FxRgtA",
  "key28": "4Jwt9i4HmV5URVzdjtp7zLW13qX1eYjezSbiZSZBWWCZPJWswVprJzCkvKYDD4ZLX2cXzzufE7ywGRHj3RHeXoPv",
  "key29": "3bEi5dKE6gX931gkWXMNx1j8ZMcrudnC3tKv99dEXu73s3JoL2JvvjQK9C7efcZGnAWJbzqQwVkMwLBcpWPApguc",
  "key30": "Pde4HdM3aAboihw6c5sgd2rGeFW12JuSHjWin7WTSkUTGqHhp7wXA8ApX44JYxp7QBZEKC2az7qfcexjiS8C1cf",
  "key31": "659cxig6nWHwSbyTxx27ArvLM7JzJ84rMcCyn6hPGCdSeGuqckE3AwjVStc1vpK5oFW9gnoJHdBX5zVeytcAqoo2",
  "key32": "5bJ83LinHx41p6YhqvjXAig4vT5zmooHxqwryHbZ9HpHTVS5VCDgLqsfZitqX5K7uZbfU8tzVeDk7NVNBYaxRhQJ",
  "key33": "5wLJr27LUzJH7VEuuwrjac78YF5TsCwt5ccZvjYoNVoAbs3TbFLpfRA8mmkVCLU1g6Nw3UPUhCXavsNFC661YPiA",
  "key34": "5N2eN6xp3C4QXmF3yBXUjToHptDT3AiknF16mHDpcbMLSDJa8TKEcTq8AjvDbiTC9cqEUu1hE3ujvu9VcGPeGhQG",
  "key35": "4u7zeaKR4Jum9hZdGTMAw1h4U1ct4sSKDTg5pdfz5iagZ2xiWvUFp16gkUSYWEDcf11bzNZDXjrRJSkXc4ySk5oV",
  "key36": "tbpbA9sAVgMCfgDfrVKe1GV7G3R6epW5Kgxk1ZM1dWDMGkmy1gij8fYQUQ7vMErbHLE5qahTL4nLgJK12oKSdJY",
  "key37": "3orHehd9JQrsfXQ6jMGCaVUsQdN1rPdZH5pXABQrSpwGbYydB1zKv2nmR3csRMR4XyzwGGzHcr5Gy1vwM64624wV",
  "key38": "4abdeLwf55poECznbwsX17q81acDThF52nAi5DLneS8HqWnWSnqYZ3YDymPrGRRuxXkNRzJGvvo7ysT5P6YU2Bbi",
  "key39": "dRmjsyAN9TFiqmMZM9KXfKueCDftb5nEpyS5aEqzyuQNDmy1wvogY7UnZd98vw5TYZboM5wXpyN4curx8ge7VuJ",
  "key40": "3tkQ3TG8xoH58L5rWMPS5Hv33FkoscCQ1Jn6urtXQCzTkyqn2acCfCnhnV73w5wiWLJ6twmT3UKCD4o3RHFQSP89",
  "key41": "2pSukDU3MZoAAryNvtBGPf47a2eZBhkwqZ1ajQrnQrfomNLDqyN3cE7HUDpKNhNkkRVbG4CxRewZ7RguWpUoqiy7",
  "key42": "2NYN7u1sSYy3x1SJf4q6cDmwfofhVtGMz9x3svc7XGpaP2f2k7tDRuLRZBriWJnR4RpMeAfpdbvhs6z1cMS98SsR",
  "key43": "4xMDLPHNZxasdk3LdRR1n3xmxK6RaC6CJBQ5CoadxCFWLjUamuo6uD6TER8HgFZp8woUMgw5325viPqnZKckyuSU",
  "key44": "NHF1gSNVPGPHC6gJd41Unyd3MdgVVHQYrX5X8hJ8ZywpxiibQJJruiXp26XZGLmJYmA3fCusdNC6HZeHe7kj9L8",
  "key45": "5EksWccvqesWBD3B2JrFCaBGMGKQFXckxKZTkTvaeEGheia2V97qbSysM7aYMKxSDRqrbwK5Xi2rPdihqqHaC7xz",
  "key46": "3h6nFGNstrhj3xvJtQ5thpiyudmBLFdA3YDua2CKbnCkvdrbGas9zq3oK4FXfZoqa1uCGGUyKy961J2qURbnktHb",
  "key47": "5JojvL5bZvsCg3eN2CBc286LZ8pAP6c5XMDsdP4upyCh4aVPWfAoDRT1qcuQKjvEDdjd9EuyDJay9pvTwoHfTHpd",
  "key48": "2bgHosFGatqUuRSdEHb2FAVhRuzyhxNLr2jAVhLsJDFKQzAK3BnSRrtoTnDrRivzsmJ9FhkHLHFgEKzZPxX46W8a"
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
