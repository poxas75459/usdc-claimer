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
    "3znWmeFFtSFqpZd9EQ7b1F9bGX24R6wWqB1zgcicWSRBix1CWXstFQjMzkKDGXv9RPeEArnvRzRwhd1kr3CSPw66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FzhC6AKQDN74uHEqPEGjSmYhEiyULeTz1pRthda1PRvZS9fGayJWpfWmAQBEv5VaKBCfq1sTKnohWs7MHiWZ6Tx",
  "key1": "3t4rge7NgUAPdZAodKZJiEP3fdNNx5Z9AzGs7hLEQv8S44Nr6ZuZRVJG9aL5pdiHwJNbpx8mvvpzVh5AHHDEUZE",
  "key2": "DKWhUH38XEDHKqBpsvPDoDFR11x5kapuxPXAus329nbHbEyhKtbEWvVFMKNdMEXpyFq9iReNvsRtQeyVgHKpSgR",
  "key3": "5q5AHDLCvpWqz1k3pmUhx63QBAtnqozumqua15GH7HaeJcxSmNaBUrnySUpxooSi3DFV7Kw2NdE18SL96bexQf2X",
  "key4": "3RCXxcjkFhQFE48cLVJ8wrjaLcsVBKcwfCzJZUXiPYKqeKxgn4BtZpVaSfH8RKvdXXB8y6p1QrN6LUdvqu9kT8Dw",
  "key5": "5cUZTHgouguyUDi7Hcu1Hb5bqQYicWmiFNQeCJCgnUsyZwbBxY7WGjo1Hpyky6aVoWv7zh7sfH2j5ukvWAPEMVcT",
  "key6": "4HQq5wiT6MuMGQypEDErkB16RoFaqeErn2ZxBCaNwzApQWkVyxJDTWyD8ThunT1tvmNJ3DRtoSpJXcGTQ6Qz8ySB",
  "key7": "5rrCvskbf6eX6yLZdGRXNfEbSLZ2GuEwwsBu5sANMFkg6MRbLzNXcShMVjZGUuocZc5g3xbYvHWBRsboEvYQDpnP",
  "key8": "21jdYc1NBNkP37tp6YPoDr9JGV9nL79XAm95EKRpgnt5wqYpudE6feMQp88a22AStcsTPWZkxWcRsi6c1q2xs21B",
  "key9": "5h5K8ggpuGXAH7BDPqeBRiyxSa4uPJqzwwYMM4e1Nk2AkAbqr7Cg4XTKWrrGdwtxN822F8KvS72RxggFGZAgrmU6",
  "key10": "45FhZZUhdi27aqc6vt9pzafStCLCPhWAKP79uQBp7tsaqjDSVYeTGHBy1378ER2GvPj8wrVgGfqRfkEFAJnDhMYN",
  "key11": "4hUT6cMrHy2TfEJvqtXqSgHHoX1y8FqT34cBR3QyrWc1vamo2Ahpipy1DW4KEbYSwv651wdk5drpzwAWkUDBf4eQ",
  "key12": "2tSsnkmDvdcR6QDshEb8QgpBico5zU861cCHhAx6H9Q33YnVsta1uovp1AULg2mMoEZPZteHDH1vjhpnvRFpgJmX",
  "key13": "5kixzM7meyNts7fSG9tRSXWxZX8XKG4kmVrKRJq8qS7rLtRuCnFsi6A8UMvwKuGjYfL18Dxg9XLAoobnd5NnViFp",
  "key14": "3t7D6PVdsLk1PrwXiAkHKbSkBMHgqJ9iyFtDxBc43C4AciWNLMesiZKLzh2bruqPer1X8V7PQsdJyMEAVATuYrkU",
  "key15": "ZWDwB5fjQmoQJdX7ShVq8R4yj9diQLLJeWfPTaWDthvntaa6tsRBJ21J3rrZz3uwpu8CWQhSbXJiTAZnLSUGqTR",
  "key16": "42zt9wf19H1QusCD3YWLenVTa94vSDuwmCKfQok7uu18mNv8bik2DKgWRmc1gncKUXHaJgKnaZH7GoYRky1wabys",
  "key17": "27uw4BScQiXW2LRRk7ve3QYkg98h1qkArr1kE3Jie6By5tAEYcptQfzMh9L2iyjCVx8st9RLfu5Su2FbbL97JUFh",
  "key18": "4wvTCXzLY3LtvmLajiTiUsgBtc9nTjJjYYqj613S8WqGV451eWfW4Wt8bu4bPdk8zGbay4NFiorFRxYqtx7Y1o9P",
  "key19": "62V3BsbzGR7D5mFaDzJdcPwVvwCBiiMmXea5obXqKTFnCgvzv8QQjGyh6XmaXzE7PAZfxdjECBxQQYaaLzh9dWes",
  "key20": "zwGW3Y2M7e6P4X3b3n61BcUxQHaE6RBNmcxgE5DTr333c4Ls6q1eMzuabApmEaNjV6QJu86aDXyDhcxH99ZigWP",
  "key21": "573Gpb5t3rfJJHX26ogfjZ4XyPUhnHifUMFVmujTP4imHEE3STH8dVvUTjWQytFcMF2kajnv5b2RuBZo52eia2MA",
  "key22": "57f9vWAYJqqy8zcun5DwcJjYkhn7WgkeqQAMgh1ZJHAJziPChAr4dio9BaadGDjxtjEpd7ixEVNtw7ub3vP2Ks5m",
  "key23": "4Fi4Vtj6Q7Ccrx4FBhGhZEJVhRn3NsmVhcZeYB5DMkGGokg8MwENFnFABAJw885uEXSfrheixXho7Lt7rzTsYNUZ",
  "key24": "3X4y7i8Mxc67Vsfu19heo4zw3TntwvthnFqnmxMxB8t8GS2eeJyiLB3KKv47kkr4B2XVyadyNfZbANzLaPaqrKPG",
  "key25": "3f23JTjPkCGEqowVPE4UmCcqfVArXefngkqpaZoFLiNhS9eoNdwtGCRrx7GmsjQGQLzmvptzF4wRGobvnkoG5vrX",
  "key26": "TBQBy1ButrqzXoRqXXjes9FCmGibPuiVM3x9mkEa2AHq3yKMsmE7ZdnpuHfGQwEUuADDeaLj4GsWJVFnxUM9eiS",
  "key27": "2aysq1ZMjfYAdTmHBkPt3GjtBN9W4VxfzmxegpL7LJnF8ASHe6rNSCY9C99QEFUdbFzGoKmoNx98zYH6nxReBN1g",
  "key28": "5kD8dELa3XMWCwQ1tMs5hZDjGQ9FJugfJgsJdJ5YFD2KTQyutd9eVYK8XpSWWvMR3ynxSWNu3bbbs7JXjgLk2YWt",
  "key29": "2qTp5vdKXpquDyYzzi43hcu6rLwpqxAPh3FijDRkQ3NUAddTqV8dWvT2jCcgUHkviRDALoQYuxxRPKNgQB6svNTm",
  "key30": "5gEHCg8zBBGyqWy3yQgPxPSwFzsMSQDCwo16mwKAT7G2ufi8KtCQhoEsbT6N3dm8iLnxKthEuxA2VqTVS4ekyC2v",
  "key31": "fdTcdTCAw1q5HaFU6ExsEr5mhuiEWfJ9PxC6xEk5mmpstqdxRXdndwVFELRPynfLKNyoE13161vkTu9bVtxnaaZ",
  "key32": "4rHf9Rz3PCvUYwd9J9dMQuV3KfxYapa344gxM76hQbp9KbLGrdWnefmes1Co9EzWmYHSHZP5ar2zNoM1GmPW2T7X",
  "key33": "nSrUtxzcgyAARgDExeED5qTwV2H1AJci313CiKYogwW1kH2yP5GdYf5jEJdJ1NQyUCHg3Jr6i7ZpFvjWWpq3sgX",
  "key34": "3Nxjhtyk543831FriPQz33T7ZHzKWhZw1ujjPe3X1PzjDeQkQheaMqLTBoeN7AiShEsqyijCWi1cecKY85eKEH6A",
  "key35": "55eLPcvEuRdi3G96kj5DvJBmwYAU9dBV3z66x1GyxmhUXbEgxbPhqbR1mV5SiEhyY3cWG38dgqvmEgWLHPW3vK3d",
  "key36": "3E1KsNLk75ZWGpRGbbyjJyiWAKrAhXKA4jbfTm7EgbXECKTmCpsmPqwpvLsKYNymGNZHUEduK8h3Hb7LsfRqUKei",
  "key37": "4du44kfpjorYebvLqn3LwBg9XeeCYuae6NJrM8p5znqVrHkmQhgGFYnCZELjaQHZgoqH8iquH1gu1iBuZpeWKUah",
  "key38": "3p2vGXTq5eXKSQDQ1uBjfAcN8FUPCJva5rcW5WBczuySX7NvUnLww38txc1p9ug9KrgeVkZH3n1Ga5acfhQshMUy",
  "key39": "2ZVLC71XPwqSNWH6X6wkk1zeghCti5rrd3AYw4JC6HvY2rTxNJFaJFXrDS4tMHgjre8Q6pNmHAro7jhcQDTNtSiY",
  "key40": "343vdyXVQKvvQBVtZuoL6YkrRyyYSFBhFf79oLxR6yUVErBTqmyDbRixo3x2eYTeAg9jWfzpp8UEj5WKsgLFH41q",
  "key41": "4o3ZhfyEkbARN3gzdLJ76na9KXAWngvjXvwGvUJ7kN5cEuuTdf3mnWxZdQN6F45As7tqXcu5TcSbxopnuZNAZAZA",
  "key42": "3MvACK9NZkJbATMaFo2tPPrq3hfuKZ4nJRxyNjCd3o9QMJetuv6dH5a5GXaZcg2vM6FMzyNYW8BG3YaJLkEjy94c",
  "key43": "4sUizj5KZJYp1KdfaokMETqxcwQVU5RpqAfg5r1p55zigFrGgvKaNMuWSMmagso2KCeCcRjJzzVhXMoSgzDeT1vw",
  "key44": "5wvm1F5vYrbiznTEkv6vyhwAYCVkofrnx5b1E8e92vdg3hzcd8HiHVJECVhkDMPBX2q5XLpjuBR1Hr8xoQtVxxjC",
  "key45": "2rnNemC7NmWPCttiVCXZGhd35t8aH95zGxxH1WGWnvNHyfxw1L4MnTfQrfTdef6Q9ZHmoVGxXMtBcGvDibLEQUx9",
  "key46": "5YVMZBvfbNbdSYE9fKUw2rvQbq7nVruQmNJfQVVPrywVRc8rJa9rUgStnDSMK8pXUhXUzAAFucSmmvwJwd5zb8dF",
  "key47": "J3yjSZYxvtPDEMwYMpAtuNR8pJRj1NfBCJXdXAMwbcXqNdQzx4JDkCA4jsd8q9vj3BoYum18DYEP9WwnsjoJE4G"
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
