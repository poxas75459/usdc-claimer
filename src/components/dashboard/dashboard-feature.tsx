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
    "yrMjqWqDetwstBxNt1YsvfuHZuPWDoAtWpiJcVYrqfotD3Ge3vkgPJcnZkstiTz3NzNWgcVta8TSWSAhfxPBto9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sF2X7egAAmRWejFRdarC67xvHLaiHmoY82UDwzc9Wr516mjahR8HabfJMiyf9sU8M4bo1NcrsZs1LT1Pf9ET1qF",
  "key1": "42Vojza8fAWTZh9C9DnpqvzC8fcRoRpgBYygLCR6YwNpXxaCQw66sWbxcgxQVfPALCtzYH3iDnpnRJVhPCmx23D9",
  "key2": "23n6eHmHifZ6c9NH5fjMW1KSCPh2veYyz9e1wSA3w7RbdwZjaadFhR3PTBTuNZ37D1ixPx5brtPDQYAxT1ddjmTV",
  "key3": "4wJ1xtqqPZhe1A6PuXLf5yAp5dQS8tZBzh8Wi1zX7aa1UVjU1vc6eVhhjKHgUvBhd1Mz4p8KcMdm5UmCwYBbPgPC",
  "key4": "4z1Jx7gFsajZNNv1NMJyt866K7mqMwR8wWQXER625MydgbSXRpKh68imWGhvgtpm4rekcKP86i8hcPJWhwuadFnF",
  "key5": "59DjG1SZYF8v1reuiz9TF5uKjyjpdwgJWrumSL1Z7qVRqdnRkfQLDNq1rdXWqihueM7VK6nLYxjJEk8SKA43VoxM",
  "key6": "3keoHRto6RDKr9Ay2rkGxJZrayCQUNVdj1pr9HiCSSzP3dPZrH5ZwFrQy9aoZqmSrk5xjgnyLrj5xr28Sr1dotWa",
  "key7": "4SRAC6CJF9ubFZ5YzbYYEKKp9j9zNRfsQFYQEYEh6TexGvzJzsVgAjtUTugc8EC8xXCAa9acbqjJTLancTP6n433",
  "key8": "34mmm6B4WsJ1tkSYnbz54Hzq9dJSoSWvSwyuzsbA9UsC5PErttk7fdiPDft3W8fjZcD2tY8JmZtn4ggRqvjV9hDr",
  "key9": "4EzBdSMdohQUwH6WMZh79a7Jd3dRexCCBnymksqeAmJhYH5gFat66aUaEuKCAtSySC4vjaeMjnXxPmypM1rhiNGF",
  "key10": "4huipQfxpS1MeudEadCkUwanwecJEP5q9TPhduN6g6j9DdjQi4qa4ACBDmucC8LuLtZsACT1CUcRUFrXobL3jzKu",
  "key11": "5H53EXhL652YACHn5nSJAqsYQwFMThMY3kymr1f2iCkQcUnBgocfcxE6bZjAD2iA36v73QX1FRSRMmgvwEkaPpy5",
  "key12": "5CV122bSS4Ys8MSKSj1XnnX841kYop8Wh1EAJab3Gv6FMGXQXhP6rkD3ZdvbRsGgG2ohsZSziPdG5Z2LTK6bsJu7",
  "key13": "XdDJzkjHnyndFU2FT7TQvqr3qPo97bCiSMZjhMVo3xVyeMRDXh6Byu7Ar7f3MPnmKGrx1TGdFgSLxQ52uBho8BP",
  "key14": "2JXyfLVr1yz8mMfLcKkfcAmAPTsP1YwZSnNu9DHzKC6YtqZpT7Z1gAipfWufZMU1YqzRot7H26t7MgBKzerKsUT1",
  "key15": "4iYEBNEyAGEfAyw2VfuANvcgVzUCMSaskoMocCMWXrZrYWbyPCyjdMr1LM7Wjab941JLKs2G97rmE74fSFUtpLqf",
  "key16": "5VesXtKYCvhwxV8zHaZgTsJNhgBxvBHKhVBooWhARsWmPG9NdJ4ZUTtraCKyq14ZGcdv9jSdieGyDkkokmRws31T",
  "key17": "3RTAMkPDHwVzifsgGjN9nUpBKYu6QzLPoZMJ3vJFXPeB9VoHtBBS9mxAns7aoMj8k9TLo1NDcAVV4icmpq26PChr",
  "key18": "o6Yr6CucjFkLLJSbuQzfNjXhLBETWxpf8zU8Z2heiU44pRUq45S8effS9RFpMUryQCXTdRe8bsHDa1AGsd73tkG",
  "key19": "5SUdgBRoY3gnKWFX2MkQPCVEB1NkiqKEjVnBW1ns3aMjPRDbY3wWuokSMgsKTyUCRCGkmv46CqxVaWP5uhn2UW1s",
  "key20": "5HKhQxxzsF7hr5Jor76xVcZVgSixmQiHg8W3DzDWgAtuAhPnbAaYCgLCFgqBav7BSK3b3oXgRrPKviBQfJacA8Zd",
  "key21": "ERXZi6JURSnEmsfRwJaxRUVHU1j2niw9d76BUcAax5dpXbkWqutAH7CycZHVMDvMVp6XxYLzJXyPncFNUvkk8tV",
  "key22": "2wC3PpmnNWtDqf2xaWohvCn1wn3ms6yBFZajFM9PrEw8SeZqJK2tqrLqS351ZnAfeSvsKn9BfGpebZxYHCQLjfTk",
  "key23": "2g26ojBBQTyuen2ARPNBHbUcjQbfVhuCgFPWWaK4PDbgrace94uHKTSJaqhSo6DQ3kEDVbB2xsQGqzJ2usbobe8r",
  "key24": "4BP2s6SnizY9voSuyTHF2zMjHYHBtdSrReWz58DznDEokwoRf58NijayRaH9GSTs8NdadZ5mh9eRUg2KFf5JA3zK",
  "key25": "KuUbU8V3QFgzS2hgX1s6D7TixnVMX8MrThzz2VjSPDNYhJVz8XsgQBLKvkZ1Uo8Y4i2aWA2EZZbHvDjQ9o73JdH",
  "key26": "4QTHJ5zybhximWRQujdKcBuNzDE9fy22GFoTECGgfremSBMGqRixktSzQiszkPHW3a9REeM6sUhqmYJwBUWn5KJC",
  "key27": "5z7Zkno2mDe6pHzDRsVvnNchG9TAQLjkkAy9T1JkFtHi5AZyyCV7475zdbvjJCustT3xrbQd3oFYWJcjjZsCrTxa",
  "key28": "65bqZrs7RFstWvHBtwF51aq7ESt8tKEJP4CG4z3avZDjEsrjJuL9pnzPACepfqP7j8eaxT8D4HedgVwzdrAEu8Dh",
  "key29": "3b5nBtP3iPoTCtDgUTHARAWDB7Csya6VJ96yg7g8GBASonA2BfLezknuSgTqMvFACwdW9Q27krAGHTDXu44aN3qt",
  "key30": "2wQoBkTrcagsYWEow7mAumfd7ZJYtuxyWi8d6hosJtsX7fACpdbve5y78qoatHgqhxkZwk2if5rPr6naoUVrntnS",
  "key31": "646ukyFLcLjdiNCsCdjRCReBZMSrSJ43B6Srrhv1E7kUXbANafhE5Dy94FNN1z6dBXRiwdDjyDvMbUtUWh5rsevD",
  "key32": "2nfqQsSuNBb4YzVL41PN38zRq6FzeRSaro9My4TRzq1fwqTYK3zZDfPTp7NmbiNEqNusZ2JbWzCJJQx5UhqHme1v",
  "key33": "24v98ve5Sc4LAtTXapRAkjfZ3LheBhg8L4g6DsRotoDTryzuxQw6EUado3tJtMjVsZFESwMoUP4wfWWX4QEnARAW",
  "key34": "YAobZAPYe2d6CrYDu7Ab8p3y9gqfo4FJx4WYWMF5dRdvgJTUeZsvpRPF2fsw2yfYaqKLTDUsvarXFWJijyQ2FmU",
  "key35": "4WEGMG88bsrsBroDDWLYfLD9ntHEfC12RngcUJLAyWiWAzPzsAeGqkEokjLiDm2yEc3wbVyEivkSqaqmbciukZPZ",
  "key36": "4a4BGRwWe8k2P8rxJxT6PHX3mB1zvqaqe4X9SSzTTnhxAz1hgXZzutDa2KAzjdshgzEGDmZiMeHUH7L7i2ek27QN",
  "key37": "6634oUPg5qjEZaGZQQauJfi1Ap128RuL28WjbPfy5brPphqZQ6rjUApbnZw98YoLe3qoaTJNVykiyEAwqs5DFbpc",
  "key38": "3ZqMUNM98zVm6sNZCRGa3TcjNz7CHq3jjRmoWaJEoMwWTnxtESCRcp7t9fvMbdtd5kMH27URsUw3QsKby457RRuL",
  "key39": "GCEwGQRqKvUDQzWV1jnWCqPeDt91FLa3bSXWs6aYxKMCCcoNT1npojmh24ZjLsqBHwNqSLNDkFFtNYLMnbfJj1h",
  "key40": "5ZQ4dxCTaCzLaX6iuUSagg754zPNZ2vvKc7GDpUidaZcodu9m9NS3cpprzBAUJ43TaUfWH2PAr52vAYCUqRoLdmZ",
  "key41": "BPFmfjQQQXQ6u6G3DSTkQiDZHJN3x31Eav7aUD1pipzCc1PNCbdBTEXkZkMALMCiCwbNVivhsSN5u6nv4bQy8UT",
  "key42": "4qcYU45i1fbCWKDmyHWvCEsbBZEHKAstNKWLdDj5jEznAYMt6BzNk4ygVHN7mZv1LkYhejtQysUuXhu9oxGYuXPu",
  "key43": "tcnH6svfsgA7Jin9i6KcANaraqKEmpvEE4Cw3aeh9pEZtX5zUgxryENSWW3fTeySiN9rpgdiULbwRCtAun9FPTA",
  "key44": "4MZbLdcn9tzurcgNu6kzUAkiH128mBqkygbLkCzEsYG2A98GmnyHLYs3WPnamJbbuESMiFycW18heLeFaG3PrSAE",
  "key45": "uMJ6yLV76PqnMgjV4pqwVShBxiLqFgHG3JbB3QEhqQLJW83DwRc8bNVdLdaZV4nts8jF16w6pAT6eKWoJNPGu9H"
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
