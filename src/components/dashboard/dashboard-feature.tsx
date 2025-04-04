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
    "HoaxQTdh16wSERadoJQb3GB3vaUeuFFZDkoaXXp16XFx4s2eyBqzQ9bpsFh7i43wAPEbkrsHoXoFJ4PHg4SMHKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N5iea8J3WfoKUph4PUFVwH9WqpYTzSRedu5DEKJhZFrjxHgu1CXqexa9agbCCw8m92JnKTdkknGNwZsmJ2DNwWd",
  "key1": "4XbAMxJa72mfgmTP6ShmZFizG92ypWr1p66evbfxJmXKf9CmJzQzYthgNUosYsWjKGfrbgxzqHAXUSHcc36Q29gx",
  "key2": "4snFepethj5ByVmaFbfqqgdZXVN3ay3EcpZYwCxYb3jiQtG5P1xHc9FVmycZnj6f6fewinuCUwT1riGwRncfEFEo",
  "key3": "3d5p9qxJjSwTfrAVFosdUVxdiUajofYGZ3d9zER8UMhTbBNJ14EbSCjKSok7zRuEcFQvtwhTAFzk5ARmYou1HgDk",
  "key4": "4ni5pCX47BV2FqDVFFFJoD5AJTWQBqxLMrAfmDvmyfSq2DvQQgAhEnRNnmgiaV35ncGe1PoHCfX2fvxtgex9tWPx",
  "key5": "4KYtj9vxV4W3BNTGfvjMmHD1n4CbnKJVJZPY6yrQoqH6nRPBWyVdwswqCt87mrkroYUxCB9XteUWA9qmzpPgu71Z",
  "key6": "51BHrTHGFqnMLgouWy7MNrvfGUY53krK2tCqesYpsT222hGgUqAdJ6TSbiQizxiPTsZbxXG6sykXMP2tCDNAnipa",
  "key7": "gDorK19FKWKs9FR7ueLHnhWKD3D5jea6qVeXHsyzsLFjBHW3oq6YksddxwPqUTmV1C3YENmP9XYWgX5SDXL4DeR",
  "key8": "UtUjgh4u24EapyADemB4finQYqby3EDJqth43TbqdJgbCpv1TGUveEB6YBdA4oySpT2wBBs48td6N7BoaK2zKdb",
  "key9": "2pgKZTUt9VqYakkVQqTS5kPz6YJ9kefh328RQAmwc42MT8JoBcRkm3eWAzqn6HcSWyYz2rHk1qvHJ6a23VtWZNyw",
  "key10": "4vyRZoVMvghNaJ59SyTd8BgYiMCveFXCXuNBDbpKnD3TNuLxT3mkTftXMhJiS18XmULWag38bSwWGisU36u384ry",
  "key11": "SaQYFkCKfwfke1kLgsL8jmbKhbzSnmB9QJ6NHQsobbKXCQbVseXj5bmEXboewDJdgqUVYRA2vCYppXoAtQbvE6B",
  "key12": "3aipn9v15NKcxf65pjqUyYXjEC3qNnavWigL1T9VoARt5pgJ6uw9qP7YkM2H1f8DZAMpBXTnVCrr9VhMhx7kShky",
  "key13": "2gFwHbtoWHL6Qak44qw4m5Qti2UB5iEmPLsxiUGRYVNEnR4dwSMBS98UWGq3tHoAdSw7ptxmxgb7okd66KZfgrix",
  "key14": "2LdQuyg2ynXvLEjZ9H1MBW58tem7hVNDsDea9SDYbeqDt6Le2ECDazxQpwhrWc5JqJeVj7GhCWFNuRT3bDcRhMpp",
  "key15": "gxPYZYqbejqcQ7eJesB6SpMCAWeeQGCeTWUVoM2RxaneRPLqxAHsKgiuHyqAQVPd7HEBjXBsJSGErTRAr9we4Vx",
  "key16": "5c6TbuC7LqXEVSrymizxgBYWKsoxk57c2mKyRFQ9DbZNFETkfbKawiCBwsmD49kSFee3oTmYN1UZCeZ3P5hf2UKj",
  "key17": "54rRikrLshbaQKC7dUPDap5dTJ2rKAjSKjE3mbgaTAtwRaUVfzfR3pQPPdFwf4Nxd8oBaBuUcM1NerDxErTHTYBu",
  "key18": "2vsFiRx7ZU1Ff4xDKPVdLANVHd8Fctm3j74fANTk7gyy8RyRQ1C8FSUPhEATDEqNzh3ohveYKyTLbEdPVnw8xkXD",
  "key19": "2iyYigcDixFy9FaEBSiTbjEPxhwJi5keMWMUsxz6v9sbifMpkFUg4A5dioNKzMM3disL1jKn945HBXqZMNejdTcq",
  "key20": "TZT7rXkoAkcfRBWHXMB7G2WPHyKLwTwD8u9USmSVQE3xUtzMFFoJ71b5sGyruJp54zhRL3KtkvkEMUHDvtSYB3q",
  "key21": "4T4HjEgvEwrWdinfJT9sSEhcxThwfEJuLEZkwQw4afNd2UUsrZ2c5FuRBvvrmsgsh9QK7cSAU2cEJn51gETMtcbr",
  "key22": "4yY3xpvs5dr22MNJh4fqM6SNjgmiDgy5oXAH1ebbnLMVHriY9ygSbYJ9hf6gta4tcq82ajGGicp4PMXkGvkjVNNm",
  "key23": "5z8Hpxm3D5RrfTc7fgfYCKXcEYqyZqBzEUE53vfUMK4cc2wFnH6CN1tLKZp4c6UvAZE79SFuDrev1q49DBTjFAcG",
  "key24": "5rDQ7RTDs9W7N1c9MnYV2kW91NVmB7LVg5R1qVFSxUr9PDaA9MjCnysqYSonkWRegaajSSUcTvNUBvk2cwKjjmft",
  "key25": "3ZCU12KwBgmAN7mfLrJZZzjxd2bLvUbMtDdtqbrSjo3VmGXM81YSeg3NDBZreWeFfp9fkKxFPGikZqLhdt4fLT3A",
  "key26": "4scBgW5yhZUEYNw3QyRyij3o16LvrL26ULJQGVMd5f3DJYfqAdX1Y1pQf3vbv2JpF3VXAKMuzqvXZxq93eMZy1XW",
  "key27": "2reBRr85xRDThCbXVgW9LD9hpZFUp4c9m1XaSQnfwXNnd7rd2ZoYR4DVaDmY7VVBWDp9LsvqKxG94CoCQTsBkUuj",
  "key28": "3BbqG7w5fVaDUs6Eu7vJNH3Dv9VHcydFKkZBpEYCpEEW4b2kLNjocZrMf7F3Xt3cX86uFRiT7GBJVzLRJtqnkYpj",
  "key29": "26m4puUCVphDNnNHLFVMaF2SbwEYtWmxJWuwUprRyBhpfdnkb9r56P8exsMyWzbfRaWeDzF3hJEJeKBeb71jS8Cs",
  "key30": "35aEm3wcQpwQ4Vk9cEHo8UJQc9cxThcQ7QNd71gtKb1SasoK6qnb41gMBTRXDNXPruYa3yNgdHxZoiZpXTXHRLEg",
  "key31": "3HewoDm1iMzUmvvQFzUYJhUGeonPapyXKEa3VPW9Jrku7wiPG71KvStQ9siga5oGoipuuWRo23x22qWRpwTtwPWf",
  "key32": "3UAEdMJV25e4AS4wcmFq2B7ddo97sgamRaMJPoFBmmcGhwK1Gd1tdZPjEQvbSGYWrjSoAsCLkrNRLDNbx7hapVo1",
  "key33": "n7yK7goCqeqg5h357CZ34PePABR3FL1yeKthAf7FJta1vVr1cQRmbaHeWUHeT993sbic5UvJB7gTCsCSxGC379A",
  "key34": "4pbsVZJjMerBipr6SSAdc9kc2GiSFmJSYn9QH5diLNpp6C6UTiTD6gVkUFv7DXeaMi92K1xRLYxiBzUWfztLteCw",
  "key35": "4FhieRWLazLNKdhEq7T135iMHnME9T39tmxxpwZeUyq18vbEsXoT93XrpBq6aoikToWh9pfpdkc4BEjbAkrF1GNM",
  "key36": "WFhJs7cx6Eu9jVZxVP5q4aU7BbEuCw5piLJKRHJGAL81uSBMqjXrXQM8xZVQH9AZF9hmpkoDi1QDx3M2ibEtgCM",
  "key37": "Unbzad9mZabrhJkVUjxRFh2aA4LJ5nJsCJuczahC5yQzyaejzK89maSiFpNkf3EzfTBTooKXAg758xa8BH8E3XB",
  "key38": "2z3q3HQbktyxRaYkaANsfsDsigaaVHwM2jkH7vTNbWBgYwevHW1RkUHrh9CbzMAPvA2eEcf5eVMhhzCbwRK6yfzc",
  "key39": "3vu95Z8N599JuqgsMYxvjDQg6FejVfdPc7mx6VDCbCeFGH69NQhsUR8nYBX9VTXAm3TWBYPrQt4oQfof2ZrEYRbX",
  "key40": "4Dx8rYiCPRv9hhLVq3VKppKyuTyCqhE4aMqczXjJypqpF4a1gzigZesmwzuof9zGn1fdPvx3CD4Qe6bj7iP4PSdN",
  "key41": "2JjyyKVs7NYL2GjJjS8gGtxidPwRFS9SixodYJ7bVujLAsvhV6FMmwR2GmYnXYmR9o6Z88MXBNEJp7D9mxYyGQkE",
  "key42": "muHobAqUVhw3pHVEKA75mVcWeC5bJH2QBwqCSQXpxaVp5sJj15kuamJKFt5buDfaTT11LvmMT6YUanMAwdFxDBC"
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
