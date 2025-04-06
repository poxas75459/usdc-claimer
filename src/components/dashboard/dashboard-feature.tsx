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
    "4TUXBywrPahNRGCTyj7G29KHKimYKYfJ65SX3pwqLi3emwuj9aHxpK7QVmWN5BTH7KdmeKoibWpsXcbERRacHfMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4rqqFGFrEZ5fqqnkvS8mLw7WoLdUYUWuqRs9JnY2FyjrvRbVyaiaHRNf6Utcey5JQ4RUuywf4kT2tMrHkwKDLn",
  "key1": "4TEq1JnUHSkqfCrU2XqUHakz3yux2p3dYEEjs17vACGXt8SaMtkfEVKJHMLQXj2coPfjrbYWUu1R33kK1hRio4Ys",
  "key2": "Czm84bvZArYytRVEQAodqAK1eSwGCiHpwkPrHtkJ4vPGXYVF7v7dJocGFZR5gh3ZYniStnyCFGxCXiVs6qkkKZN",
  "key3": "4e5nqxepwLjdzoKXfdvuEFhNtA8fDPahyMErdiqTfDLtv6CQG44DnKKZNSEZ2tuEtbBg2SzHHvEKMnbJsFUHTqeL",
  "key4": "3eDj8RnaByk5cJdXmka4zJ1UAhzGPdcKVrvCay2zka9kK691CndtYMA3CXxUY47WPc7Qqf9shgvqbR2EDvvYbVTo",
  "key5": "4Lpw2vDjAhmZ6Jo1mj8gwLDoKJBiLn7Xm7eogLw4gnEtHtPdtwAyawQwHvYon4DpTRA3DG3EuJ9FdpQRi5tyZYdD",
  "key6": "VmktHqSX7X3wYydu2JmfkgwCvceABGC5kqjY6APi22SvKDjGJiD7qWMbdcmikpaqNkZVf9GW8kGAYJsGejJvTGz",
  "key7": "4H6bragbmKdZrX2XHMjEEY6Y75PKRoWuasgMaE6t1T8YksDce6A5fxxPoSUU7L6XEUrA53M9ivEVpMGXRv3VgWn9",
  "key8": "5AnTcJRGAzVwwuuzVjw4HLMNbVorSgedmdHGRux1p3VuCj26RWu4qr92Tf1ByDgnmHuXVAwmptujdqcGd7tLoAW5",
  "key9": "KNf3e1G9wnEwQhn4Qi2CjFDGMdHkRjCGdPgZTZgnteaQ6bZV8XTQxd282nyTWte3pv5P3QzWFHRFGFekRBoGz71",
  "key10": "3tvMPBNLpVENLiTV8DLYVUR72oUKMeAeNueZvyHBXZET5ERpmtbwE8B2ZxJCQyuTnUfFCiai6TJgNxeBsUWV6zFL",
  "key11": "hq7W7h7ttrdywG1LkR92abRWgQ7H7TZbGUdXXxnf521Gr9VgGU8NqAkcVFEZwrUztkewVZjV6knuzRGgwLYJAn4",
  "key12": "5suQZiEUKaEsaYGhW4VnhaE8bp1ibPEK6JG42YYWUVUMFKYfExshTZVQdghth8pTUqfnCQn2haNg6DkNhHQPUWqv",
  "key13": "3cSqMknBLpDjpZRJikFhh5BDmvFMPCR3CkqANoRuSXTLzSSNoXFZSiwVs6Qd9pmNKfKDVPbwt5ah66yUchRm2cAe",
  "key14": "54Utd2Wupbn9c8ArUo9NsD8FJssQDGNLWar8NZbqRswq86hZ4whR4mi8eURAS9uLyqGek2aHjqmjovDtmLCT3eLF",
  "key15": "4hb8n9uCuDyyW59MTMnsgQBb5TzEJEEjT6nSmy9FX6dZe4GxfZeeTvt37FS3WHkGVYX6iUfZ5WtYK8GUUaPobwzK",
  "key16": "3kYC9pnFsFo9Tj55knSUiqucgRvQJJW4KqcUXaMFJBuc41aWZdMoihyxL1ZiXYY6W9YXfpTU4XQBKyZAADksxXKE",
  "key17": "2yPYrjCx5e776D1VKvHMiTVGRZvf5B2qyGKPy3rEgc3fZXgkx5fKGyNsM7RnXBH4puy2v8FwF9wcbxuSgnzCFLyo",
  "key18": "354qdTYMt8vVnRja5KQs5JqgYrupRMDN46mDooQbkqGPNxXeYeUFkV141gy3s1eChobsZQSWNNnxSoQX9yr2Lt9s",
  "key19": "4caAzB3GATX1mCQDx22RPFncDwMoP58b6gzfjqx3eJ4k7Lj94ZJC5occ4jz7vuJ3cSJPrC7c2wQsry8X1FfMp3tF",
  "key20": "gHLcTc1FkHkUXEru9zv8N4BGpWbSrCWXKVFH1PdHUCaMNcr6ikct8VUUPxXWdhvtTFMdaYUoPkDfgU7iKpkvh3i",
  "key21": "5DehHAgiMp1YRjPu2262iq3deTTGt3pCfjRHKcGc1H4cgp2ymVYh8iVhoiYAVT6jGUWJBQ6j1gtW1K49X3B5p5cC",
  "key22": "5DS6HuC4o5GauZXX1GJ3xsbid8Jas1FxmgsXBXs6N1rbzxqM68mJozoNZ45nWapGbgnFmQeZdE8VoBLf2ug1fX54",
  "key23": "3TarUzJ83qUvj4cDtfWUdFFSrHuAkygsuUXsJqjSMqtoSYNtD1gVbMej5VrguqdQfYqiRpNvbT2Fd1bsvZguFH3B",
  "key24": "YP7EVX3bfsgEEbHbUxnR5jukVcmoqFNxFSiHrzpTsXv5Nhy93eEf8jaJpzFSc9UyE4S8A89Q4MRjZhRVXmEMq7h",
  "key25": "2zf2vcp48FJpEv3HeC2xBLvAPzHpaTnXEvdD7EEzV3SfVPRj6dViPHE86pVTpKJKy1icBycd3Q3nmtJf7eHXgbmY",
  "key26": "zUwECqt87jN7qDZNryZxSDNviXgLzCQciDLFtByweBo6EgKLahCWxQj54FL1cCE2yHwvjPaRzwAqexgiRiV2FoM",
  "key27": "2Sc6xUnDT7fXnt19dyxvrbdaN7LJ6AfLYNR469x8knr5UJRpbDsPjs1YphTPLcbBLZbAKQdpJMAffjad4WVXXvVn",
  "key28": "5zfuLXFQyNzidXvdyseQ8kjnNfvhwN6AyJn3oUVVUJKixjDNx3L6pnkWc8dCxcVf3t5U7WERz2nQK77ZTWZcinDk",
  "key29": "3BQYfmMesATDF9PetWQxcPb9vDnEUehxCTDfE2XTzGtPAahLeFeDTjfeaxWSBjwvDgZAy75bSChXsj4cJ5HzSxBE"
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
