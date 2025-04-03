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
    "5JxLjVRDFkanFnV7teb28zK1iBFbr3Y1VwE6bzp6XbBLRmhfLzrLnbvXUfqoJ5v1Sd7arNHh39kTUPUvqabHN8CQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXZe9PiT29Y2NRBQiDDjf2TEA38x4kNYp78phCLUqdWEuier9PH6BcqyhJKziMBis37sCwYw71QhNEiJhhT7EfL",
  "key1": "57GfvCVviidQzcisyAodkK5Vm9DD4zhnwdRuSJCZ1fGuwBeDqEdPqdK39suUnUE6bxpc7pkVT7ec7TanhEN6PqtU",
  "key2": "495jA7PmNcpBargDcUoa6mjKH4PmvU5KMEuiaybX99WuZbap1CLqZKt8t5boz1r3kfuNmizDFWyn2atJze8LTkkq",
  "key3": "5YfhmTyPWMBjyjxGJG2C5qaJB8aHuQYuG4Ri89wqHfR7RwWETAaFusCNqPiY5uKjLutX51C3pXfUTqSgMamrv86c",
  "key4": "2N2inq2cHYxwakabDJZbprKsVzSGSEbAMYDzcRtjSJRF2BvMPT6qQ784ZiZzE3WJ5ymna2wSt8SLZ2MEuiFcm82u",
  "key5": "3W8utZr9mNDcESKiEqrYriTVqGHQkrK5LvwBztmZ3kchtGC86iUGRJMvAkMk3k74FxPqMwbAPf6wNqgDYLodR3KV",
  "key6": "2igz6QMDJHkiWLKicrE49FswG8HCJ7PivEWBmRwWkfytrksMDALyA37RK3g6skAwfKxNvsN7wnvBDpW9YkX743jy",
  "key7": "3oJShiiXsJHTcHuDTf7Aqq5AemFmS7pSpjAB63uVGXuUftsFuYRwLki6DU3zhq414PnVFsev3A8W1RvmD5Kk14Ku",
  "key8": "wMkxcMGchzuWKoyQ9RTZXr1XgNFExGMSNPw4Yh4vfNhB3EdbWqLLQc4zbSD2UTfj3ZroRS7uza2bYviXv7kLPiC",
  "key9": "59JS7WRUBywfxZjwjMHiSo4KETDY4BoXQXbo4sLyBTXnRrjD9qQ81yBqStXUu7UK5rEQwubLuFqAwXa8jsAAMs9S",
  "key10": "4bkLej9zdTrrQ4PiTDKUoWbY9iYqZdH1WPvwjxkTEb8oSv19nV3uxqm19rissL6WYUGLvAZG7TDNmew9QmZ7pagq",
  "key11": "4oGhQMrwJ9pQPGDNT1NQJwjjFY1TShzNMv8FEqinztbyZTCU4bRLtCD6hmwpaUdhzNH7D7htoM6G6uMCnkPrpEv4",
  "key12": "2AC2mERdjBhnLJ3kBZbNg4G4SvteDGVQHYRhvUTXojwCaMrNVk56V4aUbgabGUFqSa4ArHw9SZfjjPDPXjU3jVT9",
  "key13": "4YAgEZNbXJ26cgqNfMNuH7AKGXKJkSTZ2HYmStKS9gpTSLXDyZGQbLEyMuGE9EgswDYxyZbk1ze6S5Jxdi45zLtn",
  "key14": "3xXCc4UjjqdLVxEYMyYA41oCZnrokLZEWqeWpHNpgZGpNHHcUmDU1Ky8T7jwVpCaFTJ4jQ9hTCEh1dTsCqucVvoK",
  "key15": "56yXBNuGwQcQ57qTMBzvCyXjgXpjd3VwsxnYNb3T8EsbDCgLXFHv5jVGiBKEx8caSpwGh7VuboBGbNeLdRbzUozu",
  "key16": "3MMyFo3NtKv45xzZkXj6Ai5wvVeWbi6VrgBJxp2eKf8bccKHAd1Jk3SXL8h5rvTfDZbdtMt9GWqGhqaB6QbETq28",
  "key17": "5JbeRzgC17QFEvcjYXvDqfudMwhBCmjfiY6CtNvQjTw155rhbCJCCS4GZQ7mQvYtfQq8niJwn4q7AWF7XVRRvS8h",
  "key18": "4TsMMPkMVnoMMgUVfCErmHTSkyMDL5F8DA8f8JHcpfTMCjBZZj3ftdzPRUJrLppbnktAw4Aze6XMSaaVdMrnPEak",
  "key19": "3hkLJttW1hfaDW6jDt2Bf22H6m7YxduUNdqVH3BJo3XdtrLYMiJEz7hHiQdh7PAX7hLvpUsswbGnLDbyoZAcvXPm",
  "key20": "Rboz3sN9B5grz9CgehkSkVswr2XprJ1fvU9MKbGuSRVM4gxrwobzoJdCV2BZRrDQXb1Ypr6DgwMxEhLp1s92Xg2",
  "key21": "5dvnaVkuF9E1PAo3zJmqA8qDmXErs7drrzh4C1rQT9mwD8573HFibrTkcBSGab2sdV7B9VsfBWbuNgKkFGYWfZH",
  "key22": "28KvHYS1mNjA8neoUiyzi9EWxCx5PKegdumgYHUuoHoUim3V3rK7sysStkkLMH4NbydLE9xsUgSs2BLt5DRRGepx",
  "key23": "5vHdRVt66p6b8aVHX4mN3hY3maA6U1ef85iB3eYUDHUYnvnLT7CGSsWVKCKPBfxsytzJPS4keFheUX7s8VAapmPG",
  "key24": "3ZpKjMPmSx1E4H6q5t4g61qwjizqWoyVyqnwAg4Ayypv8VJrnJDxNfLfEEmoJ6UfRMFTvPiTQsbAdHZRkpGXqhLc",
  "key25": "2goDmKe3RKygqZbhza86GwaNMRphW6Sjm3NGTmHhHsw7BnY9hb6iuHf4A6ZhnCnm43Q5Fj3RuyJadZmidYGJsbf9",
  "key26": "CdPYKLz9ZYyxmY5fwXRcnqPfphuh2j5Z4uo5X6uLFdLcNb6Zfe6YQSQcyojCwfMGEfrzyHFwGZo9VMqFdotVcGd",
  "key27": "2aZQhZ6GoHqHPhzXDERBrvK9LBAsUMKS9rpPJrVAmMKGB8HgzB9iNfxfsJbCfFavXiaL7GE7Cr6efp6pXxoaD355",
  "key28": "4MSh5xmnFnD6ocoMpSioL5YAaEusA3zG8KGXFs2VdwGybMD5EfbsJbhYveazxqeWHgd97ca4ZKbcBzgYe8S7QeBw",
  "key29": "3ujbAK7pxFhgKBZwtoPWmsFFA77bv8rsmerKRJPzdDApffiHKykT7xL9dPGZGhjmSaFMDaQ6mV9gDqDoJB2PbEpq",
  "key30": "4DEHk4z5sUEpcDn2neV5dWHMUFE81pp83Qxux8L64mv8cpcJ8QdGqKARDEfsLFxqENYNNuLmkdvgPJf3tjXTtigg",
  "key31": "5RCEpfNDVdxxQuA3pwpspfdVZnu5GAycjirrLoVjdeyQxcfUpcJYZp473DYA4fu4ch6pvJiwXmJhXAxupRF2DzFU",
  "key32": "5c8VUpR9Q5D3ahpdJ6zpiReobECQUnimb7xfhxJ6ZisqBgsGXw3BknpcN11GhD2LtxjC5jCzQWJdNdVybCuTfd26",
  "key33": "5P7hiJCw3QT9ykkuSQjG85jwywqHETxBUDCSxdboukBNkCWSex67V3vJbxW79G29n9roMq2vrdPsxjuVFgtdDKSu",
  "key34": "3nviykJhxWi9sRW25sPom68waVQkfbMKFtLWkPzLyePNPUtXsy4wR6dUtf6vvFx9Lzx1EBGFbLzjQXuJKpNxYUsY",
  "key35": "23NoKh8bVVG5UN8jHRoBJyop1gN7tm2nz46iJBmSp3x1w8V9LxjcZ68DLptZdXnMwm3JYFvmW1G5UM26QVr9tZGs",
  "key36": "5yJm7ETNUa9vjVvkFZjFE79qgTLA2dDLebyd6w9MLrRtQPid7qXAFuprC6Yh1CAzKfhirMYQisA47Dsce1QAtmr2",
  "key37": "4CzmgQsvttf91jhXFJiJJCrdZWH1Y9dJLzkaDAhungKTMPeNyRw6ivMXmBM7Q1ipUVdaMgisNKEUeXNhDJuGvrzZ",
  "key38": "2ZMaLGvAY5naioAeqNjBmpfJQsTyarQcpNL5pjMEJDD2J25Sduab5zCKHX3sbus558HKz4hEXrfkVWetuYveSaaF"
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
