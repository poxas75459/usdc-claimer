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
    "3M5u7Cr265qJ2ehmnGXPGc9bay5XEcAs1VcZhFjw26mbzVW61qyR4BMKduCH6fMTSkedYkh8RcgDPzDmogdudQtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNLTKeXwH8wJu1ffuKCfa4Hhgq5PZfN4VbBjN4igsJxRWNuYhF8aJcpg3T7Fpuro75mrtjJmmBYFNvw7VMZYtmo",
  "key1": "5Fn4iuqm7rB5AQEKQfvXAqCqqVxZzS6zf6Xq4ArR6z4Hn7nYatmzQhN9cbqjoENQ5dgSodnyu8bNY2ef4A4F4Bxb",
  "key2": "2qcybR1gD21e4HzrDa11A31UGpdfLT2LpNh7jafbLkSWyWZsej5xSV942pZPeffK9zSxmiswQZgBNN7EEp4QwAPZ",
  "key3": "432naSw7RdgrrN9p6fpxf6fV7YZpbwdZMmvRYAF9xqoeiJhRpZJ6omGWoJ7EAp38zax6Ep267SvmY6v7MfvP3RTB",
  "key4": "3oHghC9xK5ijzBUdn3vWLqxiStncTPTdx2MxwisGjF83TVYgJeVFwaniZ1Z1sKd9GQHv7dum6kKxJd62arDQWfyi",
  "key5": "5nxoQWjN4AKXGzf6Y6o6Guq76y32JCvdeakqkK1XudrsrGEEee8KZcr8VBzgP6ATn6M8uU5UWS842n8n9GeKjsWV",
  "key6": "H2SEfrraSaHrPeMYq5fydA1FdSmppqgNMR2xvpfGortFJUCD2UQQjMY1UBApn5FcHNN2R8F5gC7UG2oNffuGXeP",
  "key7": "2sU8Aq6AwgZPTLTP3dEAtAgVS2KQdyd5APiDpRYp4fGxfFDjhHpftqAmLfxDvefpg5D77ChgC9aLWzLvkaRhhhbG",
  "key8": "X5Vpef2BHp85SQcA1UQ5ew2jvogw7UjfGqBxBbrKQj8crKzRrZ2eDhP4ghuEfhjzr1dstrgit7pwBAZzHbFutLf",
  "key9": "EudekBw4f8ikL9trb4yBq31VDVMfaezqKTwTMGNPihxFuoFr2MvhWR839z7Hq8WpR2DZnHSouDVReaTE5SsVSim",
  "key10": "aUWD4YcZGqt6WcGtBVNBDAzLoDAhFuCZ1i83dnCUqnTci83LrbssYQFzM9ddkNeEbnj8rPwyRc9xruGkEcDt6cm",
  "key11": "5nAL7jzmLov8fjm7xWLhzP24QdUQpW3N1MYTDPtEDtVeZfKUYcRyHpJY2FzAyyWRBbRGSU7tFX2YEYp5Ntzs37Y1",
  "key12": "6262UjmAWSJvzyRHMmGq6x9Lh7Gz5UH2bntedhQcfMxZ169sQgyfyQ97wJvFtNFX1NHH4WGYZdoeX9Pg8hepmC1D",
  "key13": "3fvcjw6EB6Qu6EGGr5geKMqyrE9kM6rMq4CaDimadzjcKPLLrWLLWSC6UkLVFbTLeDe1DpABZ6BuPjGmBkxN4T8y",
  "key14": "9HX9c5gnWVoUqBdoLhSUFXihs6VxT2LejsLCB8kMePvGqQVdzwDs59vD81qn7Qv8eVZ8679Jvmf9GJgtVaNc8FK",
  "key15": "5UCmHUF5VVBNmPRfSSancHX8cYuYYGA46zqddjDRL5aoHe1Kgc42kJKxSsNzJoyCcS37JxvLo2WVZE1H9woZ98J7",
  "key16": "2rHkb51QTKRKG9noT1egitGJXTywFRu7nvjvQiNraTBXXbyM6K6WD7Yn4SqSBxRMok4yKbZvdLGrtjcwxBEKXkEs",
  "key17": "2QsRaPMQMKnjzfq2pVCPnq11Qdpk2AFxCeGLJgUdcrSPiiBaGN7WjhGHUpXEgC3Tb7uWPjY8oe2xNrvYP1oGUVh9",
  "key18": "VFvg4B3QdovaRgWozryDr2j2HmieTZAdkgcTQTaJKXhWXMtVEKZ7Gv1ciXzAKukSiQsztdB2WFjDfoEcYY5c1i5",
  "key19": "4hf6d1LmfbkC8A3sbHw2ne1CDYXQ6WDqg3eZUxtbNHrgnK5uQhfXbkNkmU6i1L2usqPtYuLoPUAn2BgQZtPxRXnR",
  "key20": "3qLeKniRMmoKCc9qzMwgKUni7V78qxymTy7hyb2eoqR8Ga72zAuo2Lsdo74Z2unyJTibpLg4fa1HwZRjiSZegCx1",
  "key21": "3bgBG9MUPNw99cYNojgFZ9X657gT7ZuQkHdSs1rNhSRu4XJbPA7Uki8FMYVmUXArsFBGjfeZBZcnocuMRK8F2pZn",
  "key22": "28eQygDtTR9Y4jwFvsu5CzyNkjSoLpoQoqZnuqv71H7LfQRzkYcQ8FVVjAHJwGneBDDEgMEuw2mL8xWNtK9K8z8f",
  "key23": "2SzMCNRYEwHXMvAnGKUevkhtePNWuQkgFyxss3LtH8cesxRZybNK8kQwM8qdbww8nB3cEqJKuLsK2NPeLz8jGSqJ",
  "key24": "58hSeYQGgapi33St3FszWpoUzuS5BXRQCnsKDTainDwYAASa8esttcp3aeMNLh6jqNA3m9kEzgeYa2at2KeZwpa7",
  "key25": "ntfeiMLDwxqSWSvCum6GwhnVk9ueYrzXhCmCdDAjbvj4HSnQZdpzaWdVLRWh3pZmRNjJ3Ji38TN8oM1iu1ocr6X",
  "key26": "5WUeB56jys6hTpnD7v8jzVttjGC9nKBxAZ85U6YhfjNnBJoK9HPFJDpVeBeVYpKWS1dzPYCUmamefGu1wMuedzoi",
  "key27": "5B2iaPqCndPDZ8L2zzy1crzwBUBekKA2ZkG3Hds4C8Rp3J5VjdHrR2haEUdw8pfg6Qz3vo91AxXVeYVNGogTBCmB",
  "key28": "48KQRA9s2NcrHrfdu8URCzRf6Zxzup4rbCJ3nxA1ZVP7WdL8BWYFhk4RG1FQV2LgP8MzcEX6N73xLVMcPApKZWue",
  "key29": "5CxDPtfvKP9S4fkXEzzTUYAX2RdU5toUuKzAxYna43D5UVfqCNwwhopxuy7NthrWKkQtmn6eGMfc1Yg7P4hczWRr",
  "key30": "4WV4i8uhj6KVAgPneY44yjsZRhQcnzvu8Tz1PRhFh14XuiNW1hPKkubZfnHdZZok3cCe9ZVGeWK4uHw8AmDx2s8v",
  "key31": "5L8a2Y5FoXyiovxu3zH2kbpAeJCeD7bcJKZ6oCMgpBxzMtjpEJUjn2NC4VfeKEGTkm1jKFUsJQvqhooznapzABt4",
  "key32": "4K79gWJGgxsutWdh4h4uRuW7x37WU1dQB6dnNHX6Ru9Wvtuz5USBb442d2x6H2dWd5R99XSppmSHUvXtE4AEqijr",
  "key33": "nrYEUHPxypiF3zVxyxmGBY33PyrFN2VCmeDkCdPcB7McCAj9TqMFn72HD8fooLdomiJzbaduFR4dYbS6o5kfnse",
  "key34": "5QFFHJyYeFQ1tVTSSQ9Xb8yhb1Vc2UCKDSjTA4qu8eCg26bZdaVdKtyfwKZRPDibDPFuFRvU3u6VxUkNuUmmcb2U",
  "key35": "4poDBhonfhqkHfvjyqYfupyUeDyjdM3TW2jNcJrHz3YhNZfufe2BRzib45BNwFfzSBqwFjekwbR7JaYiCGSzQeVy",
  "key36": "34NnrF3cYtb6AAnT9tpsRZ84WyJwrntLBsrLnd9dhweE4UePnKdwdYfzDm1NpTkACjzq867ZaRxDhW4KfbWvJsmW",
  "key37": "3qr5U95vw7yNF3ScZUW8Bo5vF3FJRRZdxPfXxsNqpCcrrxygC8GnY44Gj8vFYMGKafRsRKUf3v2yk8Yod3D4dJN3",
  "key38": "a8SMbNo9JADUedaQ5qj4VuCm2wd549BjFhRmz29fp5zzng3w5qkoKENyDaUEK665cnVBes6cTaBTSSmCHDJmdQc",
  "key39": "4Dd221DoaFgkNw96Ln8kXuB4qYoDxJUHFFfknDW5jYoL2TRAwGWg59vLfN358ShzaQwH99yhngifLavMEDvfZeEU",
  "key40": "5hkSXcfTBppzv47D3KCtrFm17X4mapeHCdPLpoMAQU2VpjLKA6CTn1yEfZshW1DGDGhwc8FcLB6c8Qdxh6Vr7awb",
  "key41": "5kwKy6b1p7oiYTu8coGRFpSZ4RNMBTiYR63sXkqSudzn7LMuPf6LadxiPV7n6cCstYCXWXZ5Dab25ui9yr66rKqX",
  "key42": "2cFR9iefHqdbaBr9VTAE56s6MPt5DZcihZgqqWhsrSMMpsNdRKXXyQjHeGm3XdPyv7UpBtzZvTMu5N9XzEMosd6P",
  "key43": "2eCkhykKrBbyGg9vER2aW65RqVfTPEuR1GmfPWgzYLG5KKQmqLV8Qjoa91arFisKpsYMoUw9ZkgjiG5XD6NNVFPc"
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
