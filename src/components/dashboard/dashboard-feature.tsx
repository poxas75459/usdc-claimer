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
    "51pstG5fsWSZdsQbokEa1Ez4mJ3etpYUi1h76Ce9nTuXW4jXHK2cyCNEZSqmRP9o1PM9T5jLLxWZPUsu182tbsNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqFpb6QxD5s7TsWnZ6aXodxLA4QUxhatrhHHNBfP4Sb2mXcz3zAZaPfGJKhEFX53PYDPsMHCxiy6TFiCMcgSW5x",
  "key1": "4dKmR1ipqcbEtKEpvj8QzrdZoXU8tkrwTqU5xcpGjjkbFQA9CB1qxKUyuDnvYipRUeUq4KECrEcCNz26NzNaeZTA",
  "key2": "D912NoTU7myAbZ4KxZnFXHHBWXFUD1PQ87MnTBNjUSF9oo1n7e5GYQoQcabM1t76jVBcMeCXbCCxDc9U6y3eBfW",
  "key3": "CbzmDW31WxrxpfeQNeJ46WtPFiHunyWsTHEVEnYfZkRktMrCaZsmjWyfHHoLcf4cznfWS4fgMgqPsK8VK9HKXKo",
  "key4": "2N2RGWLPzXmeTaCiiwBMdLKzdt8Bi1h1PdvSGEvi33oJoHMiRk8p8cYdYLQf3X2VQoNmP9hTcXCWA3sJLHfuFBGK",
  "key5": "5QzBTq5beVTa5gKhQYBSFRZjA5R1VAc7t2tMDHqzEevyA7zXtgUotzFKcUxBdMZHibJYdp5aYBB1fpF94Ym82XKC",
  "key6": "4fknrMYv9mZToXCnHjeqzdrBPkkRoyRwvNM1f7TghL2s9SmEbiCsFAxvqNP8rP5p3CMz1MAQEMTgy3nuQUAVjBvZ",
  "key7": "4D8H74jqWHKwr3C3soMmtZbcN28wVBP7ny6HrQbMsasyfxkzndxi8BtJAiAYcUpTtBoF65etDdE3Psn1ZZz1qZf8",
  "key8": "3SA92qn38xV3aLnWZaZ8xzVzUqU9L2E38MkWs7yVaQUnb5RswATm2ywaGGpsW5cyBGPoCBouXNL4MHXUkrL3HoPJ",
  "key9": "3QDhN4fqet8s4kMDWjvqTrrJjcjJANtjf4r1FqYkKRDT5z37zPSMs6PBfehsjR1NNc3iWsuutXaWDhtQAWWJStQT",
  "key10": "xNwPHAc59yaNhZNejSrcySovHPLLH5H3ZcVZ2ioaRfijWY7wqiN4p2DnWsAg33RyvZWPRRvvgqgab4Y64hVdWtP",
  "key11": "67TqXFcGTg3bPjqGkbT31xn3SXJ8B4UjFNEiKyLFCBmoHarTjCJxuBG9bd6LVkEfpiPozVQYxhUd77WMLdXbRvXS",
  "key12": "3Khkm6x1YzEdNCGQ66kZLMNT9RqBb2TJ9eCxDDsqHqTUpXxYgXiYrnpdZhw4ciPXWxcu7VxCcty5XboCPFANePp5",
  "key13": "2tz5WWQ7JMEHn3u9p4XZqXkfVfyvciqb2vn7yXy9e2FbVTvwLR9EtuXv7rChKu8GDjcB2S8GTYMhGtaFy6ZuXNzm",
  "key14": "2azcESojdSLVbd7hqaoCufCkffP9qNcx9pwo96xvVSD4aLr6YnN6PTEDgY15eM2Qdrcbw6FKsdVUCZTYKNTTGvc4",
  "key15": "CF5CG5xeQKVcMU441XUe8GGiTFt79yN88C15QYe95yTPEPdk25NyZ4zAkhTvwYmSnWdWFoiCfqstk38FaCpDuT6",
  "key16": "2Hd17PLyfna6572qy8SSjV1wB1oRSaAWzC94zhhtYnQxdx4upPo8DAPzZBGLzZTWBu5zZU95uom9X93XJMHyupn8",
  "key17": "fi2LbdV6mGZ4QazjqC6fcyfnSiv1op537v9V4Yw2RYP2EykcvSoGjGmgMrY8iT8P57KnJVNzDhRhaCeAPqrFc4i",
  "key18": "4RbK7JvHYLhsVvakJTzwcuT2cqarcP95KT3KEMzdVuDwGUvMJfkcvUW6WDq7wrLAYBpdxvyyXxej8o9vW5eukMYa",
  "key19": "3FKur2ey4SWneUZREmexb28ZjoRqZEJ8TLFzsNvAupAME6vaKbS2hUMnetXeZvbutFN6uc5Hz1BYBVo2EUWh5uXE",
  "key20": "2aUpZtmcTe8KtgCGwf4taZEVM2sVm7pZqTqcQaiJiSLvGgVcBeMbpn3N7qFjtFVxBp2Atiqda1nXafG6LGKo3WRU",
  "key21": "2YsZqVKotLNFTMd3MpoxwV6HgBE7tskCN459JtNeLuBKu2pdVvvNQUK4qT464v7mTAUvac56dmLWDGz239iV5gca",
  "key22": "54PSWgNxpx8CEaWW6Km7BY8dvGkdFmTAhAt9WFHMzPiL3J2rp7n2payzYg6E3ZPXUNozjVLMdXEJzdKkvkWcYJ2j",
  "key23": "4vKmUdqojizDa3xZ2wC53aLoRtcGKoRGp45o5Ffhs83Vv5H4ZPm4Mqs75pHB41DQQLBvojvTdoVMivv3dg614yhg",
  "key24": "xug6dBNfFeVB5FRBmRLu61pzLugrLjZXoTNFqAGb7kS9gqwjbHLsE8Ktg1J8ei6MA3xkfvNzSHDnmWcgkECuKae",
  "key25": "28wDg2zT7kA4b9rDeKDKJtNb79KRrWkys3eE3zTYYaJDkmcBemiUPtUgJiHrqccpygaMXUBKB3xBfQmqFkSseBQ8",
  "key26": "RCLtGv7eBaTowpBDBd6LmDK7ST3yaTZsNaaw7WsL5HfMzyz4URqfHMy3j1JX5D8cX6a2xkCpZbQyLaKAZf8nGob",
  "key27": "37wSDwP9x12YEscaQ4wtZYPcKjcvUb5gdzKRzgugduAhmLLdRcuf2hU3DhWTfc5XHwKwNSgrzWb2n4nxsi7gnxng",
  "key28": "CDp3jwi568ErYVw58T8JU7e2oJWuwKtG2SYPqSupPF9obpA2CLfMJsdgtYmyKGQREKmfSzqDibRtMLPwuCDiGdF",
  "key29": "3irsa4GqQWKWSdgEzKa9vy46gHBC2embcqRAM4kymBcBNwAVutFC7XqXp8hJVMuLfhiXUa1M6Pt4pEDcJGW7e3rF",
  "key30": "2KtaoeqBnKS4UDMdVxMEMo43DVYW6e2nmCxpGFnqCGMDRRvGpHacq3JrpvTDC9z9uT9ArbdGm8mJhEAt67KAoynE",
  "key31": "6693w2s9rtg7C58DXcedfgnyBxLDqyR6rjMSVsSoRoyxfobm8Sx2frRVLCNbYNrBHXbURxkhXCxZS9GqGgg8R9La",
  "key32": "QzVy2vdaf89oDXYUBrtPmLf4EVCKXPNSaT3yqFqx7xAgGRnCf5QzKXs3W42uHxE5N7afAiWDh16THHA4y8PTGJW",
  "key33": "2CP6izPtzNa332kDy2bXc7gpkNFWnaufnuRbPXyuDvM58KQN8Vno4bJJYa42sMhceAcoAV8BxjuCH9VAPUosk7Uz",
  "key34": "ZGDa9emkeD7D6Hbyq7w2BEj6epGYQhhPuQevLgrfh2izjy4pGZAA5Zi6tTVr6dfmypdXU1HTy8x5SCzXvWYR1t8",
  "key35": "47GLwNDGatW3xZ31NLhJp6vaMW72yCjWhePKW986HzbEN6gqZ3vz4Lu6p5NirDhg1LsdKTsvyRo78YbfeR5MmnmR",
  "key36": "4PEvWLNq3qcdXtBB1fHPCb6wen629Msv8dE6JcwrVNoNPAGW2wiZvhw4ZJrMWHkYzkM33tqWx5igNnMJB5zwiuH2",
  "key37": "5E5FTytpm6skboP6ZqhGq3uwMuKGiWbSyp5atUqNba8iQPJrCiXnm7xs6HyKxXTej2Upkwj9NS89ovHu34VSUDMm",
  "key38": "UmvwQ9g3Ehatx6SCHXKkSh8yhw4gHXMwYgQZVqHnW7mfEKgMyxhiqpSjSi64szVgGkn2iCVUxQY4gGzq91VBXAG",
  "key39": "2JGoQqWGFuZ956UoJxdRwBQj9uKRMPVUmFe7aHaWg7oh5KHxao9gNgsXx6ayQNCJzqecWBxbW5dGoJK5eRUNJSX8",
  "key40": "5tpbdyXhFt73VKe7PhBZMcAkJe9mwJGadAQGdGeky9rvviVYgiQtbCKQAVLUtGR6q38mpph4WrFJjo2BfGVy1W1N",
  "key41": "62TxhydmYLkY3BrnvXvC1rqV44yF7sZTEzSHV7SvoGCFQzp4whX7WGsj2eUgFa1pG1VZ8eVYZWNBdH9Go5ZSLbyn",
  "key42": "bnaLp9AGbHpNBerCmRkFLq9VYdTk6fopFcSmMK8ke4xGRorZXRJYSNJHRUwqVsZUrBBGU6RkzaFk9XMYpKuCZLr",
  "key43": "3FyysXnh6U14k4DLShhz6pmQKfSaTt9e2hPjLHsBop7RaG1unieugEY9JDUkkSzeS9AghcMZGW4BmnjQSmWiHpZ7",
  "key44": "5E29YRt955hLvg3vdoEafs8rHavhRwyFXdS2orABEbkWFc1XVNshGtvyZe5JmbJ18R7JfvT5a5g6jWRi1WYNX3cm"
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
