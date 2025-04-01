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
    "2tniENsb3bSFvRzKXXU6gkgMgDpYpzRiCs9JKdZKxarWKDAkLYSdT9cj74fZMFGKZ8umX9TVjgzzvSA3xBFzwhzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otXjUFZ1VPGayqFj6EvUDwUMqxr6wT6S7TcqRuvKdCaoNCMAhXYBrgQ3oFtjYXk4RomQN5udPmPpHSeyRUfJQUQ",
  "key1": "4Upr8tQ9prvQRcaibk5tzVrGrf3mM6GhewkJLEKnJJe9qFWJRPsJYNoPMxH9xE9JAa7b4fA5FFFVB66XQZ5QkYXv",
  "key2": "5YywRYHRcPfQkBkhJHjGzFDmrQoQLic5xngDXyy7ZgmzacjqRDw8aF364jDRiMd7qdrZ8AhFQWbiTtddCr6DKM9S",
  "key3": "2m3TvEkkFGfEU6xB9HsJ3SXt8HZvSLUw3xy3QrTJ5SN7wErBcUc7SjLcszqnJVENjW2ULWV5nnGqvKcXBzmcyhp2",
  "key4": "2JSHfBUwBT4rywNipmv4cF6esHNdo94vfbzWbE1uUUJgvcTHPf2ourvqxgDdqCynHoaJR6Hi6SWary5dbBftdRhN",
  "key5": "4TneNnfn9qhkLoXuZMB1rzMpnk3YRxXuTz8VKuBJFNyMxLSUQTtfUpJjAvcigD2ZZ2Q68WQx2VQkpPUTuYbwLvz9",
  "key6": "47M4BFjA7cugLyaPtqg2A7VcdkLpUuR3StZCGcURqLLRLi3txwzdwEPJo2jB887DYTGop61Rem3jV8oyfXp8nEz7",
  "key7": "baSW1GQLDGivB73HqSn2hP32eMcDxNeiuK8GcsXaaTKKkWM7LCjPNhZrJSTvnLUC77xnu45qGCNnWm5pneuh7z9",
  "key8": "4bczkxCA4QQMD2thCw2aerXwEBuGe7P2UVTaHYHfvqdFEWuuitktT4Sxz8eCq19ErFt3vjUv5EpE8gvPjaq1ToCd",
  "key9": "5aQdRGNc2NCvPYNMiSrN63cQcWDbGMJqmJprv2JTsGTDtAuZsWPrMAcpKeSm9gFAZjoALDkZMAEtEVjx4Hay5Mi2",
  "key10": "4jJDUpYc4f3u9KcFbR6DvYqbsaxdRk6Laj6r3Ero1YgfGfdFdmw6hJED4tj7NxsybrDjcibDLfXzjkKmqwMxDGtr",
  "key11": "5RbC8e9pMsfbdkn4mWiasdM6PhXGp1Hs62ejBgN5jr8MtYsPVjoJAYeUTBorjuHMwKFeDjoZEYycnP49U5L5vUHY",
  "key12": "4GWW6EpnUjoehdzh3FW3EvhZCuQmQXNVjDJJCE2jDj6pXpkyJJun4A5VkWp6TuiNKTHWMaSMyyktGpioskRogWMG",
  "key13": "imJgKiYqGDjUMGHtaVFjWiUJHofMDTXbJw1S7ZHvGRHJqU2npzMj9TvoYQXsq57yvYTR4xX7tGM4JXnkcymy4Jn",
  "key14": "4tMLQc3G2vo2EGA8VRELPYirwvP68ipm7nJSBeLDg4dnm7bkrdmVVL2N3PJhdYk1Z1rpGJHfyrC8yjygqPTxsPXK",
  "key15": "3eXzn3NMcR2zy29qvmj3MAHPVfzDZCs1RkbTu4z1Ph9aKQMyzy7pNGXDTVTYB7C1nPjuhTJ1KLYurXd1vJpaNczW",
  "key16": "2MrnFP3tZ55nPiBKvq86ZgYPEzMsACp1Sbgfxia1Jf1h3YzcJt3DGUpm2wG2c7Ubbmv9eAtZ7jMSgU2Ybv7AqM3d",
  "key17": "2e8SAxjxBEvL4xu84NqJhVM81c8EFMJsouJftmVnKmQjW3cJRva7LGfqNFhGjSDAJ3GdUzpvdhMQMVtYrLWD9m7y",
  "key18": "4BP8KHLmvggSZp9LJ7iqH2ijd3YztSAv68P5EURSiuwgkkGzzW9qebZXegXVa4ssSpzU7nab7UDQgdLpPogiXfoW",
  "key19": "2GJoPakGue1LoXvnPPpPsyvd9PDsSPiwtN6CLppku4DnEbqCdGrj1ZKdtbcsbNEh5yMGLqmHbsbr2J94yr9VPB7E",
  "key20": "W77bHTaNabrBCWk7YWoqnb7GWa9st9yPbG1ng3qHDstByLoQhC3996ehELWWx7iU4Sc4e1Y3sX5Jy65jB2JUusH",
  "key21": "2U4B5KCAR3Wa5RpjL4ZAoo95XHTv19jAzFgFxY3nfF3tMfFZYbWZt7KCobPgvKqvfM6R8eS4mDr5p4eMwvQuBS9i",
  "key22": "4Yc9UCVyiKHaaHEDFE3LqsKKq9UtUUftPKz3X1VD6qWDK73oxirfW1UsDxiKB4eRcnUBYwZe24mju9r8ZkpqQfkL",
  "key23": "3uWjGEbVwpeNkRidWe8CNbwfuo7v12wx6B4AKnkvKjNgc446WUdBwQv2AiT9CjW4pzYGC4DL7woGPHcMbQfRmfG1",
  "key24": "57Puj48bNoeVdG6rWgziodcBWCiZTMRhZJnn3NqLxPiyS2xkSJoX5NyfAhbQtrKeXcnAbevW8KqtHN6QbpY5fHVK",
  "key25": "3sMjuCtkKYCXeQo2Loe9iPmxp3Uzb4hQGTE65yrsJxvU5uZWWSMgGLtzaeqKcXNXPoQymczNKpqWHa2TD9KxPHEk",
  "key26": "48Lw2aGNPgYDqNSJrsj1w2U2mQtsGxmWhVjVXESn61nx4Extqa5mdfM1sNMgAcWE1AFuK75dtYex8nHyxZcGgEB7",
  "key27": "YRYVWyYjdRDfegGRh44NWWxq6Guj4MnRjBaVAS2VNR8ZStsAboDVqLY8bZ9H2fALuMbVaXhPaLKT2kjGHVKMaUy",
  "key28": "2A1DU8FR114553VvSz5ABScBHHEh4BaZ8hyPLopeU1R21Lp1AtQoWCCbMRQ8VyH3J7pfRQWc9VwiQ1dxJgNLzrHP",
  "key29": "2i7QhrLUfL7i5kpzeBMhuPMKo19oZDcv7Hk6G7SZehQxzvkXFvfypbjkVcmgUkkHSzhc5guaHS4sGek3AMMQktg9",
  "key30": "485Ui2MJwVcTu3k5ePCUHDkXwrSMCpeGPAunNhxJwwEiR8ypeaHdKqwgN4GHsLTg4Bzm24RMEsLT1HB94NcMyKtn",
  "key31": "4SS53codvAi3dLNpsyKSJxHg8nx4FasH84cDNKwrSe1Ruo12AHnzBRSKgTXzMA4tbqb5Sb6DPq7XAdXfuTKQP2t8",
  "key32": "4GyNhG1WvqNQ7wWB8ssVjE6zR8RYFKqTUhYJs4sP8TA4LHekkCoWuRsZE3kkdHN8GQoyfs14wBFQhFkaw1CgLspC",
  "key33": "3R18cwDmnT81cnUAKFj1H5DFFQqFDnSKAbNJGYs7r29azUb1xMiy9zC29g71tBrznMsX6xg3qE3BFndc7wvSsK2U",
  "key34": "4h8BwZDKgbGo6YQdwREx3QQf25o6JvoNgmXY8R9snG3RGweLyopJ4CwLU1CDZeYtDmkhTpvDzVvT7xdy1unD9ztq",
  "key35": "4JH5Jtx1pM8LLRGzAUbW9MmY5rfYVkkaTSauNEH86pyWthZyvLYQHgY6BUqtNJ9oyqKWf6WDpFHLr3JamJKXZkWt",
  "key36": "3VZxSmeoBPMmJH4tFkzjddfsHmkJ3taCetN4eoA2dBPmMiFwDBHhT6nnrfsX8Pr7NyKh1dkBnwV6JcGUyEB4rS1n",
  "key37": "5bE3dCvH6hsVX3KXbDYvJJ4UGFgtTcrfxTS6qzeNGj5gJoqE5WHMuPeWeZd2uVELoiEkALweYamFxmC8Vnnu369K",
  "key38": "3nvzdcNbVQJSuFwbijck5fCLfFYRrfteBn384LNpqFyLx6WB8U4g32ZqhC59CfQKLWZb2H9EQr86iv8asbapwtqu",
  "key39": "2cag2UzcMWU1oSuwPjC9n1Mw5gWZC73GXniDL55VqPB6ew2MWxt3LPNrtrmG29oFdH9S3V4vTj8FFZJKQPpB4aB3",
  "key40": "4tWCNjLAosXV5aWYKKxyogHFAFyt9jAoDFA5hgBp23DeiEp28JxQk175Fi9e5marCHpWyAAfTDiTu8RZNYyQUs5D",
  "key41": "2Ut6VwKpd7bkn2WPuANxeE6mZcF4LmQXMdauLXMZDehNPKhfJsXBdBhsVBQyhY7EhTedqhZFoPPFEzbXsCSFJZ5v",
  "key42": "2p4ahMvyAWJzD8YCNXutrW9upZPe93yu5Nn1jkrTbq8xqvZFgerBeK7f2gQ4Kab8hWWTxPe9t2uFvXvH8ifTpFQj",
  "key43": "354ktZq7HiuZnqYAuYU8hsZPCu3ByAhGFXqY5S6x2NvcE9Ju7nxjKPoR8cBRr6y5D3g6sTtJEQaTho3CRrSfBC8N",
  "key44": "hoExzwLSbFFXYM7cspPNgZaHBGUivaBo7g1jAp15VttjeVTEEaCQMsfE4qrKQWQyvNQGc34Tg2W4kiuanGMPJg7",
  "key45": "vbhwVfHgbadGS8c59SCKRFMetjek1cGCKX6jMW5JWXNm6YzcJurLiGFBZMz9mpsaZqKgrG6jYzRTCdAJ2vMDe2p",
  "key46": "53K2jRkpqd5QRMUbDhxqBgTr4XexJEpM5hT5hKRzF7te2eNPjeikXuFfjbdCD2cYfKCaPWq6228dkghbH8CbhCme"
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
