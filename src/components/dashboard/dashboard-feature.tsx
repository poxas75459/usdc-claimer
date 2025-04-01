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
    "61ECr8x3L7sZBCRN5iAdnTwbvW1azTS4C2AESzAphvZsBsS745PoZN6i9Cko6oZq767X64eKqfneNdejRc9FJZNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVrUYXo1K3H33yJpMJ6qm5SAyJMq8uStLEBjbT8eFF2Cfs4aNk5YdskupDdN6n15rvPM5oEjaiRmqF6ez1QAfAe",
  "key1": "2G9XC7Zm7oB89rBMPirfSNqkwdWEvmK5Joc1c91xswfynCVsiu9mVYhxDzteRMvq4MW2WHWciSWF7fHndFnmRgRw",
  "key2": "2LoYiupDVH2msZjueX9GXuLujeooGbp1iwJH4ayzkidmMCXXHXcabag6XBG1hmNKAZXdSVcyQh7pUGxzq6UC6Cmv",
  "key3": "29HvYE1eURGFAz1Mg6yBJEzobNZyoNjXwZhMeKEf39oMuU5VisQSWLb7E7xi9hRu5zDNriTxNC6xaC4swYpUXyTi",
  "key4": "4cwCb6MT1uwtsB8rPCmFrVQkaxRbakXJaCbe9HBdy3b3tmCtGSitTihVnLRF7RT6iUhVmkFoAeovJdCaia6k4gw5",
  "key5": "3Gsyh4jd3Z6KTvyXed1rqzj6psvg4agrHEdXnX6XEE6d67hKCow2J1jXiJAKXKR9oxJkzo8FSZyT6Ps3SHpQ9MNS",
  "key6": "4Qd5oSRtAYghQ5TDeCmF8Trkzy4HvRARSYtzcGzSBaUdimsVM2QUocdMHQmFcVtfwupBWjpD7NTF2eos2wuHigae",
  "key7": "5Uqc7jvT595PPh8f4pC19t8JEek8KTqY1o9zkwLXLGsFCBPnUiF6hg4J8WKUGhzu9oGBDFNmi1V5u9pEM8Ys2Nsn",
  "key8": "5iAYUADihZ9N857vEsAbCp3Fe7jynQT2SXgXRcfpHYxPAusSRDknB7A6MkYzawMiL4hWmk5pg4EnzmkQ8Ukqob6R",
  "key9": "5AqQtG3DhNPvuURT9NjwES5Q9NBuqgq2Yzavj3fxtXFUYDZ618JuEXpJR6nSxHTe2Jcvosb4pEQfoCr8DB82qLVA",
  "key10": "3oS8C2dUeSBjvsFgm1kmxiyB8iyMdeXDhfeyYzJorGkvxgADiaW7AwjicoeaGE77otcinTZo3AeBkC5Wn7cf1YD2",
  "key11": "C4WfEjZYoJ25rfXAntQUtpvXXYm5WBfKdqTaPBJ6zBCD4MeooKzxuvR5WgG8XjdjBz3haRNhJMmyvvTFJf7dgyU",
  "key12": "4nzqy8xywsfrPxinuTxUhLoqDsn61WXPYNiuEzpwp62M48iWFZCBLegkRTwjqEc2XesRTppRbP7ihjxKARAx6bDh",
  "key13": "EuV6sUY6oYunepmMZrE3ZFQJowJ9STg8MfU95ge8frms14PoytF5UZbRBLcJS9hWCqhnFTcw7jioNp9v1u1Z9BG",
  "key14": "5ENEbsBUx1zXHUyNUnYw4hzoC94emSscaQDcwZEMuivkGxZEYfZHzDgjTRqskM7DV3Vtpt5L1hBbVDEWMYALc7y6",
  "key15": "BV8LtBzyft8fDe3HHAZz5TME2PKMeDwJzchLVHg6BWpAUMkU2kA7YL8S6GzxbUtt3SBLtf51uczWjKvqReG1WYM",
  "key16": "2T2gMArXJ1DPbdyDNQ2dQLCAT9Diz48trBYUckGXqVZah1AxE9XfQgiGrr9zHBfJmhYxZ2UvN7JvmQPL1d2UotEx",
  "key17": "2WHZ4TcHbh13ck8MBHZR7x5h6ngnnKkxj46xXw4kyBEFrEZP7NvpHiEDM8SnH9REHhbWo8rQEyQfcuumo5pmVxa3",
  "key18": "rybp4LEE4tWkf4PNxvzJRAbeiG3sHwWnsjJvZwWZ8QsW1L55A63N3o7QuvkT62e6fAvVBpztLsxuXhki42ki96m",
  "key19": "2gs2w7RptKpyLnWMRSq1SPWEvszjDpNbDuZEXtc9KTqwwGNkCaim1wFwyzwCE7zsjceFiApHkcRuHJB6LTZ17A4X",
  "key20": "3jUKEtHb33iaDcSYsEatYS8tLkjsjpVUxhNVC4Gv3uREMoYwmWm94YfYcykngiGpJrEVvs1pga5SN7RdQV85oLqZ",
  "key21": "3iAEsHGnkCCkU94xr4tbNRiJkGpmXNmsGMjtBNFu5ALoQm7LK4WNSurpRJuPMXhgYEuD7K3JLAEUML4QsLZQh1AZ",
  "key22": "2ZSbxkiqagDbhjVZfnSZuEXerVy8UGb6pfV7ZTGjxmVzcPQqUVpibmkhzdLLfGwfs7Rdy5c2i6dZyARWjNT6LwSE",
  "key23": "47rXnD6YuzTx5TogCNC71Yz6KaeiVUeRahMq6qEiN8qxRSkDmTAPPMiV1Cfs98MmXstUdT4qjbxFDYhrKh2TVdy1",
  "key24": "4wGDTSwmXP4eMLNhBCfeqvrNJteYUdN6JtA4noAxuuLVHxwuaFjvqcrenECFRoMJzzs4UufTwUA8AUBnpn2ZfmhW",
  "key25": "2658beTpcE2vWzMYKYtxNG29gmJ5z4So3pqG8MAwaPp2QCu7KkUZZ8nArrWCdNHyVBRDvXsiGDgmd87UAUYYxonC",
  "key26": "476jQCbpmMjWdi32Babt82YYs4KoiGmMFn5ooWQYe2ejapVztihe5qqWc8M9TYs17XFMpceg7WUqCu6dcZpJZVvR",
  "key27": "6eeAKnDCX2aJN3fgvrDRUhrpMTyx8osibkFUdZFtBTxNdVoTK2FfYqbp5ZdQnF3jjm97kdXukWF24dMNLz6dnf5",
  "key28": "2nx1p8pVErHgDzuuEwCDsGrtR1jp1s7ay9UaKCKsSd73aWgbVrijNaLMZNuBJTmfjtvh1qSH42aBZsz8rrzysNK6",
  "key29": "5FGJ5e4J87jHj91g7hSx1sTaXkJHaiBiW9352ToBFFkBvwPtoE6YeaEcG7L7WGVRaBn31sSSG3pUgyCNZwTkoT9Q",
  "key30": "478HMiKUPEBA3FMKpAAgaVYib8vJjQEMX97ANwnGUUDbQGRAjumBTEBbyGvkCcYJw64NpQRtcjDiFNyBsVqR2pWY",
  "key31": "58WbHst5S1ghWJ4bBSkhNfFFnoKn9qbmKRaTJfcuLLGL6dsBQecDcCHkenEsmpd7czWWHSRqBJQJV3vjdgrQeAyy",
  "key32": "4f3fgC1aAPScVhP85GfqVWXetk51R8JeZxryZwovFMN6xVhhLh2FPtAurkAST3sXvBJMoY35XY5hwDnG5TKPn3GZ",
  "key33": "39u5DPG8iGBXwEPGrdZH9mtcaFRSzYgKAUGY3R15XD8B9FM5d6bHTn9E8Vpk6kZz5swVet6AqRsLYG36qYXizCrS",
  "key34": "2LUvf4NY6Bd9abExh3P1uHnsNi9mkxYymvEwydDXcG8CnQZCSeQM8VZ5YYdRL3No1oQSLo66gQnFxYesFoykRz9n",
  "key35": "5aAShadx5V9K9bugHym8UT1MNiLwZSJXp9buTBDrq2T4YVqSoChKj91EaDJfe73HHm8xwbAbSNJYYr3Y8zJqb968",
  "key36": "3C7qYuZKsZr5Z4X72tdveL76czfQcSdxFQSTNTbCYJUhau1312URTCxxJcMW6by96nd2oktYQpg3bwwFE35ghWYu",
  "key37": "49VfueVMCECvfFt7EwemKiv1QQSDE8UPABti7r8zXzi9anC5qvXP9y9NJeun4WLnBE6znZuhpVAgBmYuMnZt3wST",
  "key38": "25YAE43m3ot3URE1dzz4FZzAz9kk89KXoNECtLZaG6Uba6uy4hQBwQkPgmQQiBeZHgQfr8P8qyE8uFsc8fe2Fv31",
  "key39": "4NCnX6Ni7sMZxQv2EQz3sreuK7jpYTW8nwTmxhCUNApP114qDdVaCDXstc9BCJxmAspoQcahWULt1CMKVnuKYUyN",
  "key40": "47qSY3Dg8Zfy4B1Mpau5oN7cerXrh4SevVtSyA84bUYikdN5vgve6Y9AgUbEufbWUU4hFZEziQr2qy9y3VS1pUA8",
  "key41": "ZXRwwZqAgBUpccMhvyNaaW1oYgNSVHuYri5fgVeahawVc8eAX3nbmmfB3ckL4y6tkK8x7QC5J6f1cNQSjaLHaL1",
  "key42": "4cUfBbFmbtPUfrL3AFPNq2f2dbMvVtoV4UBC6M9GVQwkFw8vmPAmbarHW2RwUbE1Q5D8cMgfQkcGUgPw7b4wWYRY",
  "key43": "5idZMSC4hB1GC4B83A1NBuFBzy49rzVavroJDuQsCWX3oayKrsrQu8qZv8xLBoR1VXpFbQfXnFtMfgk75yFfS6co",
  "key44": "64UWNSXmd6y2BMdEP6LgKYn6B64vn3rDYvMQfHjn473pqU7GaMAkEqPXA1AH8kgxUhjmJ5Y3wugGkFDNFte52xxV",
  "key45": "2Dxwy1ywHVWz5gNupWgR31qoweJWyqLnsHsSGi3qe5yi2Ztia2zc9Udny75nFWko3x7TqEQD3Xxe2rU8FK7AoLtd",
  "key46": "5Th4h32S8xLemjDhEobAPhWxRVDjCxzjPcMjbFu5PTD4BuSUiD9qm54NU2upSLRe5fCZ2MYhwkmBxwVYpJC5mE9P",
  "key47": "5KxYN9sAoSWHnc1JcQvLhapCECzFZwbyJynt4Uq9e8fd87J9rLhw2yzHbrJF3t7GPMcTQAgWAJXj2qz5D4guvNjF",
  "key48": "35XEZTFUngkUyiP47NBE8rkXD7LMtXxbeBh7KY4rwAK65oYs6ENMD4DXRcbmhJu18YRWgWtDxJH2xDjtBDJrHSQc"
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
