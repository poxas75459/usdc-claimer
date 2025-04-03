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
    "4whZMXv1p36h8abdWSEBxicGU7h77R61KNt9vVNhHBrxT7emxAaRPhxkGZGrD29h71jiK5vH1M8WUPc7jAEUHEtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5huob2vA6FnRH35nPTmL4eR2mALaA6VxoZo3vtjUYJU6enDcnefq2StZhH1QeNdRnMCkpdbqzt76f3DVpSgGxFXj",
  "key1": "4cibd1bV2fgXqCFwekgawUPs1UuFDHQMbTyGHVWBCjc78Ftvxk5Zi8BuAcojB3R1cUS6VVncJR58ZxbgZ3YJVmMf",
  "key2": "jcaaw88eW7Refkjtk5ZQk1mQbYQN8HZ3kmJGKw4mQEsziQc894X8dwptky4b8fm4CxeNcNrXT4AW7QcNhroEKWn",
  "key3": "53dMv6tqeMego1TkBoVxuTPD6ZWhs5zqvsCxyy7JLoCWEfBkQb6ZstkaMZPETG3JfbzqxM7BKvUhww7QepNBPPcJ",
  "key4": "3VBaxvEDvQy7oCrDNZ4MRYgHCiNtnyubQx8jzJQ4NkFstVmL7JQ3WoYnE12NjwHtiqnc1i5h4qUinqD9DCUegTuU",
  "key5": "4uMgcfWEs4sqGdv1rYNcVFPe8bv5N7gAAnawhYgxzhKYYF91GcXmqp6rhzzcbMifLGpqz3yX15dRXpnidbUw8cFT",
  "key6": "2V6MFUbCUuVYa8twwqvNL1bUVaxeEWHm98xUyzF5BQt7EHhwxBdpuzydHbeGNy83KXW73KijJzDFjKDuHhuXrGa3",
  "key7": "4H1Z7RWpn1f2L2YkqQU2XY4526WPFFvx5Udp6EAMjbCxajUVktnfph42F41NrsLsEKSYp3Lghxudk7MmbMcAQPrk",
  "key8": "4MqV8729JkFbhhscc6cU6wzV4PBxrxMTVqxkBNhCvgswJ7XnWrqTpJd4rtNazojbYArKD2o7z3Jgdk7eb7vFfaUv",
  "key9": "435DBqeq2QSheT32KEw9F7dV2BK2L7dMTurMCqeVgdY6RenCtrKHJvGBcqAYyC1i6n56SX5yr99qh3bVsCbHRN6",
  "key10": "dcSjo3p7864e5T8N6w6kvHSMU3xZx4z9m3JhKREYPhFahvxQyKGXG1Svmqk2ZvY62mffDYNuzqcJFD2vTSHmhuX",
  "key11": "2cmwY7ok7eYMM1EXHcX8HB4V6tjMHwyToS5JXxw4JVUqrn4AVbd8xThoUTYB1bBpbUBbdHLqVGMAuYBRkB1JpUy4",
  "key12": "4uZhdPZckAtPF8N5srpoatepWT2nmzE3tMzV7yGKjxbzZuEiTQYTU8xXaQKBk2JV7eeCpTRmHAft2SQPUXGJVSx4",
  "key13": "4qvtXetcF9se2xWfnr2UXGJog5tj8L71sEgwMHVszrVetSo6sgHfWmKP6pgK9zzHbphGj24C3D45MUVyKqFjcT5e",
  "key14": "CJL6YRKSNzrHS5ZTsEa8GCLDvwsFshqpEDhTnWAMzPxrQmcBGUCoCu6NkuV7VMpZBpC1Bhp5bARBKCz7jMopygZ",
  "key15": "5kYBt3fQtawpXQF5WJ4mboQ8NzMcZRj67pBERpgJoKS7DRivMbivi93s24djpyZrjUfyozoszpNZrKsx28qeYn9f",
  "key16": "3LwehJmzDzUb1TgQo1AbGvxMR6F6GcWZbcRRs6DP3SjapofEiMUEH8e2p6hXoA7tuT257R7JEAfW2xF9TqqW3JHU",
  "key17": "3MUQKctK9cnTsW6oQNSEBk7iq7cgd8AvkCRtfKvzJv4t8n7WzLjTQABue59bBN1rw5qUymCSrpsW7tZ8drcoS9HM",
  "key18": "fZgvrFpv7UajMqkv9cjNxQBa9GbwjUaoMPu5HqKiYAmVNvUujTYqFxHQw66rup27WGSMEdj7C1HpTWCn62t4Eas",
  "key19": "3D2Gw1hoLRTntzRKfU44khdQdhz6Cu3qUmhXGPsGc1utWxtbQSSXZQiMbW2tNjn5xruqBpyrD3Z4XSotQACb2N5Q",
  "key20": "53QT9UtUFSAqvtuijDg4jYrAogW4HwbsjMPWxH1KzskamsiBMcqEH2i47ViFExFJnpiHZTeu6EP9eDqkMHQAae3V",
  "key21": "61T8FMX1TzEwgN7YNDxwZRPWBFrcUcYsHbTVa5tNwGykKbUjFSWWLJLEjB2L4DMhp5QhMkvEHc2rWt8QyoAGJw2a",
  "key22": "4Fo9yAoJK2UTkHFZZ9kVweSoFXAhvTecMcs1n4qs4jxitQjtuarBUa3ExiciH7yosCx2skpESek4CjSPfgvygnaE",
  "key23": "5jD3cEUfn5aFprDJ9FczydvZ9fHM8PEapMGWGne2rs4MQSx92s3zR74J8Ajk67UzxpHMoQQmKnGSGhPSnJ7VpRZW",
  "key24": "5pCHdrFeZ8U3ykdLX2PqXZUw5UeRHibt3jmWrCEtvP6VSbDp3V9pEU5Gz6Wq4cGNSGpA2cAyX2kqMSZQEgo5umtA",
  "key25": "59NeGQQeN9MLapRXUaEFacaSxZvoAFU4WPpFkVFoN23whTTDAAJnBPGvLRr5JxSUeszpWAw1u4BZsqEz2u7i1S1E",
  "key26": "5ATXGRSsPwwUqxHPMJuxh9eqfVF6Sw27gRdMpnhrnSG2ZkrxTE76yy7vsiU82eursgSu1jYQVbAHD7VS1yNsB2Y7",
  "key27": "YKSAwbyG5G3CmP8kCTfLAjwQw3MD8Y7k7DQL5JhYjzBiXPQEHpPQcdkk7JqaqbfD1MWhrJEnZAanV2JzUBztUtd",
  "key28": "5HxMQAbPSpUHW8ii8HfJcSmEfWjZUTofKh6PejRHyHS5dXwFv5cvFfZ8YccB6w8zucX5joCvnPobfQUYujTUzVBa",
  "key29": "3FUk6HdFKHQSmkqsuZv7RzPTaM1QAypmgo3irPdmjSAkv81MSU2CxyKy6MwV5GLxPgvXDmoN8mi5vrGcvaCnDcww",
  "key30": "2UoU72YzoV1w8rdAWa5R3rPq8iK8Vb2vjhVTTU8XT6VU5hDY8p92GP1FHjJLkTAHySTJRUtuzxYujMhyNwg6Rg9t",
  "key31": "4yzPKcrSk8ChW5SYdGjVT5TtjtMgJd4fwj2GfyiNEFSS7SwufN2ohAykPF8aDxLa7BFpFiZgktMT2v559n8b8GGS",
  "key32": "6mVmy7SdbEU4Udfis5u7GcZDXTSunvsYLvaJKKF1PzJrnVUbm3ACuDmby78W2Trpr4vMK5r5aviaSfRVyfj6NXW",
  "key33": "3HAgx5koycSPbVasKqpdYw7txjxCPyoduZXL1MMtNUAFNHXxNENAHr7hUZdVtdrinG1ZfneSZX8LrkpL5cZJv9QP",
  "key34": "57N1EfFRPNqVg3Q5UuBfeALvD4zSvLoHahVzsFbND1LywwwapmL3HB4arKhdVLwmBrJCvRvGjtWCkwWD5rs13eN2",
  "key35": "Wnm7sxcJuA8zGYzxXAuF8Ya8GZiJPCpL8WyD6ZznZXdwukrkTB13P7nPUWVQWtrgrDmyiiLiUr34mi4FmbpMhJo",
  "key36": "oumjF4hbfnjy6C9hSaBAx8WK7HKW6W4Jr6xg2j69Y8xPtz69ourQmbryWfAiAHj1WgojN6225CS9r8WPPnyMeW8",
  "key37": "2ekEy6PbVcBNyg9eD8LBB7iR1FBsr8Z8VnKk2pNUUaoSgcpsfrTfQfuGW5qATttCps9v6f6fKhn4UqgWPGFuhDKW",
  "key38": "2HAPj9bDCS6xkxz4nKChGSprCyLRfTCgHgmY612sPKL9bhxrVGkvWzXdathU7Qae1eYN5spPz9aEA1y88qchTCnX",
  "key39": "45DsdwSgpqJBfCK5Gm1vvKv1kxkAkWjagFdAaE1irX7SNG6qjkNYWwkcbQVadavc9LfDTqh5TVzGpDPkvkgVbeVg",
  "key40": "5Bjqwtp3XBTshFQG8Emt6TrRN532DefyAWrhcLJLDp1u1u2JG3MrhqSgfBtGEhXFV8ZStCSki7p7LLuYgRKxq9Zc",
  "key41": "JxH7knCiMADqRGiBorCtRJDiLeJy7ors69ohLqDPqH8Wwo6uK1NC7SV9oXDwrwVV7HtUZREHAAboBj9dT5JdpFm",
  "key42": "3ivXbsTZnpdVFgyfDtu5ZExGhhLELcA59dLcMdJbDBTwEdSSJPAiCYuvA4hajg3oBCRKxXztcGGC46eidAFCKyZo"
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
