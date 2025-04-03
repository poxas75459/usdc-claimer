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
    "2etL1XWTmiDXmYdbk6fRTb8AQefxCauQ7E8LsyFbv3cEoZ7SskQDycvpWH3N6aNd7kJ5UhXC7uzAaLcYhnriFUDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TvK9n4JbAqXp5gFw7imyMKW7PEag6FsbLgevxfWyHRGKGCya1XdfCUG97c6BYJbdoiHWj7zdwhpxCXEGym51hdG",
  "key1": "ECDqbLLwLsXpNeSNQcU5aH97sM9AmjMWTEhW5kuyJpehmtrrkHKWkDyKUxh67mvHiruuHdHxDLL4AAPzS94wSDr",
  "key2": "4VHxWkGyGEp1f9Mswyh8jZegikuqC7qWAxPeR9hH2k2gLWGLnEFpSviJ8zjyed3ND6VfKB6SKSMLisXYBeYGZikJ",
  "key3": "7LvtyLGGaSWwct52FCanVpWaeRTBRQotrPsAWV6QvZNgVawgFGWU7CaMb77N7ev5waQwnkU3STMArGz96DZeQoy",
  "key4": "3yRZbcjNyKkeNs42Dq7U68nCDQw8wkRZqEmUkRPHZteHCWqAKFMx8f1GrPAUMnxjmpe6EUTjm4W3GeJ5yBPJ63sG",
  "key5": "3FqaezxMPhjGKHaNT2JcLCdnXK6aWJjynsBegFPs7C9MdU2iFcGBdfHLz4gaJdhQgGZj3o7YjsCYKSMTTgPbDy14",
  "key6": "4U6jbwzXazXPTESMsya7WemC3X2ACycnNKGYzDausGjAgYFzx6wD4wj1LbV8RJc4RMzNf5FvL196LiLNpQEqR4mc",
  "key7": "3N75rhb5MGrNo7mo9MZWAEYHdhzP3cyRTVzZrsJwxV8oBTVhNHveDURAcfrZobEaH8SYpg4w24tangv3btQZXWY2",
  "key8": "2LzxyGQfJx81EgUESe76YP95ib4ZNhUUB8nti3Kt6dN1XWrX7iH5bN6MEs87uXg3rSWcGnKd1BoHEVdbQtpELfZz",
  "key9": "2y6MF57nTdkK3rZabNmwtK7VnjeA5xWt5defpbDgeHsmcN4mAFEZgD1FwL3xcKmu49it1rWmHro4axCVZadR6kDD",
  "key10": "3k6efQAXSDDnYVcN38UMaaZMqXyB2GER9ShieiV8gVtkSVnfzoP6vwKDuwBe83j3WQuiczdvAPAjc5mUGiAsxZPa",
  "key11": "3vah5c9yNxz8MWkjuocknRNXSRYPpGsmTenjnDvQhGj9qAMvnEJLYfhUiUzXBGVpmVrxNG58ny3BuZHu3DTkK72j",
  "key12": "4TqSK8QfCqC8jaDXU4BLBGTaCjF7X8bJCgo1mrSE3rUXhkDbaauwMcUEm5PyuuKLjkbigdSWFtpscZApeRwXJcyG",
  "key13": "5qWTGiD31po3mzpNBvnaUBKAp5C9kYAghWwC6DzecUo2u3zfM9gYPWEQLTDAHeZmg79SFimy6pZjb1ir372joQB1",
  "key14": "5hzEvTJCLpvhfb4QYJ7eFTDZ4Xxj1dAEg3QtysF4SHcPHe4qG1Lgk2roPCY33ZRpAkDfS6ohUH3wNt6TKyQgpNZt",
  "key15": "456h1QjgJcD5V4EuFPECeLq9PRoFNPNZbiKzWSpHN1tzYw4hYmeXfm4DMjjHw6HYyZLGTDAGTcT55qFggdZHSzUq",
  "key16": "2Utx9sYSJGTGpBdrtk4uwJoz2XM4xPVYFgFgk8fU1pAGrpa47wZUNAWJxMAuL3rdYZmjibVEDz5CGwnsNQCojMYG",
  "key17": "5sw4xgUWoRxVsjL5iRZQ3G8wWs2odMfB3yawJxLXaAvGuapFYZQ82YXrZMEivPV4G83DrRfpoDC6HqnCZi9TYjaX",
  "key18": "5DLjx4ycFwnhkjVvgrCdJruynLroxZFjtu56L44UEExzXhWK4Zy8hY4ePopeN3YwLNkQHHQamqGvC8VRQRNY6whQ",
  "key19": "5JuJchmiuSRexe7px6iyRrbF94fyVek5roDUEeXQbvPQUHB8Vg79YktXuifRX36ueWfMkKHbvSn9yXm7D3t2ZN1x",
  "key20": "3ZUXpWUQTDU7arFDK2FM3ajEknWoaUvPRirswi5yjNfroGdqzr6ThtJkpGKuhRUGW1BVxqnTAgyWAkNVrd9zxbiQ",
  "key21": "2uw1Csjt2CMJWbRDtaWzxpvxmJZazDF5LsKaoCyYCNNVKSsEsEAqGFmjk7U9iPWR2Cu7cywWx11uYSgWYwGPoCCN",
  "key22": "947QRtiAnjHycbefEBHiKzpYjAdCA9Srj7U4Pz79chwAe5MzL9igRfCiPccpLWL4WADUwtRxwNSw9M4FqviZwa1",
  "key23": "5Jn4oJxZ8B4AT5AwLphvPmd9jJyzsDrRWSCLNDpM28gXkjc78jz75eHtk1u3Y8rSeuDP8PS3Tc4nXCxaktvZzuH1",
  "key24": "3vMvD2A7eJMpFC6CtWf5xMdLVYnTRMRdm1hoUxpv9rciHqdEGejFkm34SPWrda4ET9kPNiVxpdstKa2HqJbjosb3",
  "key25": "B6Bb1V6wPNKqACFM1RvVCgYKaHzgpsBjnEPD7n1tbLcaDJW8eYQ1VSkXkQJMdeM1mktzW4hgijVWtoCvXp4vVQF",
  "key26": "3q9FdSDjYHCofsySdiLzoz7dmc4KiPzr5gDE55sK8w8nxMok8NVW6NHo9PhnrNEwJopmE5BXqh3NNoQ4yVijxE5h",
  "key27": "dfyaaQH38Nx9S69EvK183hUETmcvW4RJuBMywMW24dSitSsQDY633AqxdLKEojfrn85LJZykJi3F1d1ZjKwVzbA",
  "key28": "2Abd1JWQLJcG5bTtXyZgHZS8QDfNHczcLseQyFVJdkfafB55UMgcXVXfHvdokbgTkr48xwhS6xYXvwMmgcwLdnTP",
  "key29": "YFKucCVK6AhazUGc13fvvFgKXKHowNniv5v4Az5cNEq3hnSmhmR2LgUqwKEbHUvJsEgVnLAAXUCuXWQgw1obcH7",
  "key30": "28QEmVnercFreuwUcbL2fs3qpmjHzzZfBzq6x4e9iFWn3kx1cwbjMAHeujrgkjKYLVuuXVERcBcfMKyvZ9RQcVCm",
  "key31": "2wf2KRpQX9G9PPYe9ntLw2EE6Six3Xc6kLoUtQpUuMbNpzqPYe3pTnYUtEDDLzNPusEWXe3hrVnPSQPDf4errdjx",
  "key32": "os4zxUbU2iaZY1nG9XQsbQnBAcrxPokvjdfxiG1w8XQ3VqecXfkDPtbNT7JF6ybY1wp1LUQqL4UfgURaz7aHxUn",
  "key33": "2PCU1YNWRegxBTUmSBd4CmEeQfhxt1AXhNBc27cXBksyMPjVhcbXmRScJfZGGFYAQ22NYBVLJ4bSnqr3PYhNxaJ2",
  "key34": "3XAzMsusfpsN7FpX9pJkPKzEVLvDSthrregy39unAsUN3XVSJLeZ1bUxvHQiZ4oW52PxGov3wN9BjEdLXLHna8JC",
  "key35": "52E3GrR97MShX9Xb1XzSNQ6G43DkvojFpdeXZ8qRFCMEw9PSMhJqVkfKRM8C2ZqpEzFpnvnLoP6KzVKkhZqG8rTW",
  "key36": "5u828NGUMsQzTpUe7PKQBumEZGiym5g1VYeoEx7cdS3hm7sSPDCQBAQXQncqzCYg6pqUizSSoPrtJdjW71NXjaRx",
  "key37": "3vZkZk8p2c11ftP5octjZL3353dYU1Q3JsFr3oDyDaJLHeTcD4g6eCmwa1dqtGzcH21M3G7kN2vB97yQ82NPtrs4",
  "key38": "2jKiLCEABuw1HWPer3qL35HeCwifqX5ZCbhm5GnsZ8YoBkw1YT14SjjvXgLVpiftaWG6sGEwkVGj4gYmHoQmDKy8",
  "key39": "3ueE82tym6BBAaajjKSTHutCMjAuuFpowbVnSayjBx8teartmoY6SJ1JSHVTEBoCzM9u6Da8548d8A16JaqAqLWi",
  "key40": "5MbzymZcvrWKA8p3DbjNS6JSmPRf2ojrMQvDXqf98bD8DUWmvhxWS543tLKyUHrHVRGfDuDtWEAfKw2YDmFb9QaM",
  "key41": "xBaR7HUmXapSckmkHd73DeUjkvTWLSchp5fszNATGZStsMYNpz2xDUVPiiqQjLrgAzjc8zbvY3jU5nLDesAwyEh",
  "key42": "2qceKCoCU3KBPAtGuj8PcuSrKYNCeg43wGPaQheTBRXwNR2TFFSSXZAqhsdgVtTR5F3U1A4NkapPfVeeNiaHt8Nj",
  "key43": "qBnRUtPw44Gp8tyEoWub6TJpPQDTZPWRHUmW9qYrEtrBJ5gtcqQmTBySgCnUjPYTz1g9xqzHmigytkAgbeM3n9j",
  "key44": "4DAbLNKxK94MZjKtSBbugtqBokpi7uz6idWcCSRFtJ9s8sjcU3ysZ4sidkcDK1aUobhA9CBPLFzUbKqwBfivfGBP",
  "key45": "5MVHufcbvnBJFq7FVtP8JK2TBwffLy2N53BFs5gzNxsSNYexxDadcunwtexkJ5LY33ek74uYm2hXubXatTKZysgf",
  "key46": "2nxoC9emEjNn1ZhBu2P4tDuxRaaX6VJ8TozgDJE1d63S525hQiQUrCZ5ekYxzyeZeZLZqRrMCPJJBmJUWzjwLs1e",
  "key47": "3hRLvYp1XXxwGwBXetGki92v1FHNt67xKxew4RSch8ejiLPSxiyfcrjRjn1NhgYcdLSmrzc7K6KytHWptgvzPgpV"
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
