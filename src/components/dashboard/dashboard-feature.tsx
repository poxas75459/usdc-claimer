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
    "8xhJvz1g9VyXb23LvYrjqYZbrWci8gbUwUBB5qxorkKRSv3xXJ9idTtKmZ3jmie8rFGVTpfkpcFFCHK9aCgNrM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aPjTxYiqGJqGXN2bxeNqjcDPA6HmBmfA7NGb3jn5fpNA96qS5r19xQ4es1og8MQj7UFeXPvUTNm9434rPtaxUDt",
  "key1": "5DaPgyFj7aXExV8mETbi4Pux8as8EUzAQEkj6QrV4f6ZbtP3CwzmSy9MupqH496PUrm5JXQKmu3MdMsvQcms8FSc",
  "key2": "3GudRW83U3QYksFdGjY3AkpEdYvqYEdM9mneQopHjiL5R9PaYHSUsrw9QeYkzQn1XYRE4VinVHoH7cwU4WH5snxB",
  "key3": "4T9Dskf5WGEtsmHwzDKcxT82RmgV1HFQWDvE3YAkF8Z1TA64xCUtiBobN7k2nM51Y1AyUYAdjmBDsisZndjQHxqz",
  "key4": "KxK2kfUcndVe57NbsNiGbXQsLgekCAzH3Y1Tj1MWCMhgeuwMKbPpjM5JYj44gZ33bnAPesxgYVp9e28Ge5X4VS4",
  "key5": "vRrUQTih1kiViwJjxqzZnrJ1ohdwaDb6jouDp1jBaSQE9VCxgchNB6SpgC6orbhuqskF3AEEfpCB3ZGcpibzuKV",
  "key6": "5uxo2h7KvLZH4DiXMPDBJKkzVBzkY6LMyxveNU4re1rQzh6mu4Kz7ZFUtgVGwwE9sEbQnKGJGiSgE58PV9ERyEu1",
  "key7": "5PH5MP1jTwFkVgDnkAWemPVgRswuJ9NHLKna98cqG7hVQ6Z9URFgxy5fgooAhtV9y3sEYdoEcGdRZya2SXLakJvx",
  "key8": "2HiXQrtaFeMEpTth2jvFAVEJnyfmwFyNpy41zWXNj2NDcF36bY3Abk3GznuykS8b2BBsinCEAorg3RtuYJdq1w6t",
  "key9": "3gogi9tYb7wBGF2qYq9qaLsLa5GA2xmDzbeAXRepLuVQ3e4AZU4Hub7PWTyJz6TqWW5Kqoh214d24uBUwxD5UXbH",
  "key10": "22UR6Q2LbiGGdzvicVTPjqZZrEdT37nNh2hiCVxEmSL41iXxqpxtcg3YcJx1VnbXpxYoe6r4eQTWV2mqHNCJZNW2",
  "key11": "ujfE5QMzTLxGGV7ZEXqKyzu7R8wnh3tGZ84b3y2k2hrhFKrQe9ZWBhie13mqVq2dcvJCS9cv4rMduCNBW6WFLzM",
  "key12": "3V9awXK9y6xqsK4hotKhqjwsrk64jc9GezMcvxGGt7xrpk8Geb1mBFvVK79VmbNcUpXqPxsEtqEyrxgEqygZeDG1",
  "key13": "2zaadcDFjERka4PiYhQ2bvMG3TiTBuXBYqdD4VBjYNMDiQEQRCJAxMDJkWuGkvRfShC3ZDzpiU2Wru6YBhtJWN8G",
  "key14": "64ypF9r8n6U6t3MbLj6Z2Z91DjupsPLSu8DzcQGsu7GA3hjp82BpdFeYLVHQjSPjyHjDHT9KDA9mgzVzjiM3kztg",
  "key15": "4fgkFoU2VPsrE9SGfn3jAejfUXXFM9mAEbVPjAZczr7XP2KNfETDXjCAduqu5hsRYdtPx1hSxg7chhvmVzLdK4vN",
  "key16": "3i6eDiGC4aRwkA6ecsWDBqcfQ3pG5kqBHFjiMX7jWaUy436DjKeAcbPPkLkds8yZpUFmFiviimFybAyszvTYJSmP",
  "key17": "3WkQZqf2coFGisUpCEHzNPgu4xKDmFpwoogvWpxbaQE5ZP8dN5EdjehT8c1nFPh9yxefZqN76zPMnj7FqPNhRSEY",
  "key18": "2smJRhstn1kRpxnzhQoa17iZa3F4XZqaW9GStcFoBqkBtBJVDPYVLim7ubvLcZa2g8mEiEQ9h1xMHzcRHjwn7zQT",
  "key19": "371TwfL9avMTdXfc6f5biVborvEuWFHFCBoimKmtvNMMuYHUYarx6S9NnphJoomqm2Ux4Zctfu9jWxJ8NnizbhyW",
  "key20": "4DRx2C7CiXV1ag8UVhGS7UV31JaBA2vWDNF3DDZh4ix8nvrAEQcSCpRvTLNnM4TFLPyaqT7ThZA3bfjwaq9acWkq",
  "key21": "51TbZYWfMGpPvHEJxy6TbBRuFypafky1zZDpkB8SqeZNbWTYHLFxnpGuAVw92L27Z81i1JjNq9k8gPEcPz5URJmw",
  "key22": "2muvLro2bDP3pNaX9wUm9n2xgsND1h2cWZLLWcaH62pJg7MoxFNQwmNmFBEjMvZ5f2KujUEG12eF2rVukaK5gZYu",
  "key23": "3JtbhuLnYGtX4DVi2Z9WsVoRrnZW3Z18ccUqvoAwJtzvUUBViiEzcGgqXEUnMRiy3U5mom835PnWjbuPx3dsi9Yd",
  "key24": "xqnbu63UQwhPRDQvPEpju7kbY1M1J81JHwPxFpY5HTqGMU753TCUosSrmmuhowYkikRCSE7GLW3Si5pGjTkmd52",
  "key25": "3rPQKLhz1fGaXdBd3s6fWMUpDGA9Db2F5WVof7QEpnzdtKnhFFGmKWgcSTeEVwoUiz5KpB2jh2Z875w6SrvZ15p9",
  "key26": "jdtDTD4J1gU35Bsd9s7z5RCiooKLNvv8y3EjBhTQsQUNxvKsr3MqJCXtAbMnKpsm79bs6E22bnSwiymcek7N4sc",
  "key27": "2ePRynRMHbPwTSAyB1J5uFtEsnkbaHaZuXW8ju828f9SE8Z1N9nnSHgoWDQMXvtauZWGe1RMmRK1xHj7cyFYkj7Z",
  "key28": "9QZhGM3XfNaZ1hFPN7zT26pu9Q4iFZWzFpG9q1MioxVULRV84AvhQvE2xb3jsfpUAHv9X6137VHDAJ1tecKwtyz",
  "key29": "4T1ZHMcohmFgkDJnWN9D7BF2J5igCFyj4ipcYXLrMRXnGyPHJZhrm5b23e65XaxEBnrosEEWXofQRQT6SKgdU5GM",
  "key30": "49BZF2tZSAg21kbxsyYV7gPej91Kh7wPVqnwXabJzVMGcisuY9qzyEzPH6ZrXWQwzoC9RXBiqwKqgtSjXbdiLgyH",
  "key31": "5uxvT7tC37uzAHzDSW3DCJ4W35JfVYkA4rKt6dSjA2CofEeq12XAqZJABrpUH6KADSZCqkzFMGDDg4bDeDy4hvkr",
  "key32": "2VcaJgMLmqrakNFxCJC3C51c7tYKnxnRWvYdZRzYYX2hZVedW7VkCu9djGKb3BsV1oJtXNt2KmFb4iDqCTQNyMpu",
  "key33": "UQ1djAafwic4pJCWU8uyEftRkzpaJYEkbjyCGKcPcgPxfGtMYiL315hWnugDpmjBFDBY9jGSmEQUKcfyYH3FS5Q",
  "key34": "GtU8R54L7vBMDK1o3b5tLQDswRR4ZEvXj82SAAdVPFYpgz7AsrL7MteZcjz5QaJmdsUWwZYKhvdqRLg38HMY7zM",
  "key35": "5vwr8cotgRJ64GVY3DtK2iRs1v24D9qaFj9ZRDZQyvygMHGyJenrvK3WKAvK9QRMj2jDhRe5j2iC828ARMESEBRa",
  "key36": "4mFFLVefJXqtPGKorrcJroXQg1waPBa3NDmX6REY6yuf4Jntxeoq4EvAxeN3NYQ9GzFtSZE2d7qotHmSrQeK4MCw",
  "key37": "Lx4ZbrXXXGRgeapddweYyuTHfqA5oGaYxiPuRzrv1hjpNFXzp6Et1AdfZ61evD8WKSYtAmwnAfN2wiCwVtCvYou",
  "key38": "5GayhpseS7Sw5VQcvndJswvvShZiHkiG6HkpWF4MDozBAsKmCZw8GGZUgvV4FPJp8sU5hD119VreMCoe6ncLqHhm",
  "key39": "554QE49nUwt9LPtQYheQsiZaDBo2nzEi9mHrc4dTT7HnQ7PZV26NcqvsPiYwpWSdpVjKJnhM5L8AZEVPiN6JrZdn",
  "key40": "3EZbzob2ZJoTrLjtPG7taFsnaCmwYWGPXZbt7YmweWajh1gigFwhxKwBca1am7NgcqWN47Bjxx9ygHkL7ZpZZRWk",
  "key41": "4oyjJtg97Q64vUQCmzVr5nGTpc9y8SqvWVAPyvNSutPDPHD34J3VhbiWcyoYJCJaBu9v5Fdp1uMFymt7MtQi6Cp2",
  "key42": "2W2EMWnentfb7UePzJ5dGKtpobnwqwFHWyw6PPrxUNLH5BUFqVN4JVHb5MgZVqNWZ41WW3PFeLWCJcyX36DkAfZJ",
  "key43": "44cZ8MzToDXA6HzWWhi3B3hMkkpxgD4rWMmGM44MBfgskxaff8zXECMWbVpmDQbuMJksrkiNCWB1a3FCVSmpEUHJ"
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
