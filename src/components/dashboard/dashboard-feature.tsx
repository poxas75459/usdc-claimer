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
    "NM7imBYrL7BUftgBcMNg6x9S3ZNvwJmnTv9ZdcVVFHBvUQkPJN4UrYmyQmd7agk4ua6tBNk7Aph5Q9xcWG8od58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGYxw1jf5CSUE5r2Qcu6bynqvSqpUobGsnrYWHiG3FEJptKCQrcxEJQhTAZjQ9zGgNCx6zdVBRgFXVgxBLTkvaf",
  "key1": "2Z5pbXGAAyrmvNVeQEmzDNsaztvXPHBjY8USBXSuetj9cqRN9iqYS9kmBRBpccDnpXEq9Fq14dHGQ9MLLnoh6Go3",
  "key2": "5q1X8Q3GFCyTTodLdAh2vqVeCiJ5LTyT6QZVf9wzBv366M6BDByRRQUy1sC4mwDBuzuqWVXyVgER4uSoA5yjL8PV",
  "key3": "5sjnN9hrA3Frmvro9a8pV56kTDsWNpnd4YPgFuZsj4XoTydFnx7hFTMyST1zWr5pLCLtgA1vDWSfAyqetntUXpB1",
  "key4": "3raNyqpj69jyDVh91LQcauPXL4GDjU7pMgbCCesPP7wdP364EiGpM3N4qyQ6VsrDQ8yhhhDPeGz43ifyqqHpQEcZ",
  "key5": "4KHsHK9UYdwDBgq4Xtkv9zZDzsFAZrDDLTiWuaY4uKw12eFBqAUwr4739HNvhbcxSF2PLPw4AUwTYHbiVNQhfz6U",
  "key6": "59iEtKDwczuDwRj3kZTgJLUMNo5HuKaqSr3YCPNm7vGAxURYEq2BFCnT8WC5WkKExysujqRK67P3TcbchcXVVHfB",
  "key7": "5idWAXUG1CLMz1bYoCF7wwZbBzpaTRqt58z48AhFxH9Y6oCmvwfgunx42XDf9Fa2HrBRbz1qVFFtHGPKL7dD4u4c",
  "key8": "4vYRvvg7pKjajk1r8kdtYh88jSqAKd1jrZNNBfE6wCydUH9YDAzjCS7kaaHhWMMpTmLuj9GccB3RbvBwNR9XxBXU",
  "key9": "3av7RU6DovNzexXeB5nyYRu9nn87wE84zwNZSVJS7Eu1oEaKhCS9VNoJWJgybiixcaFMSZdgfqWPQ2MMgbsPHcDF",
  "key10": "5jF4nHViM4EkdRQip1Zq9iwWMM981zx8aHQBkHu1ivhY2gtcbFWT93ZwmuSbGppRyUUmGP3fHwGb9TpCr1PVCTYK",
  "key11": "2hA87VNH2L7G22tnpC38fGnhViiraktDtSwNgYByAf3dvYCeii7QfFi954yvZtaeqprVvNtQCZGFVvhHN38SChEB",
  "key12": "c8vaXTS7URJqN51iSdbSAQ9jovRYc5DZAvNdL887pNiNmxNP9NNzMYTsd5yWZ4XJHvuM8t78cfKxF4vPXDLSy3R",
  "key13": "5W9Y1vVDvwSTvTWBVdB28HUp9kbjAQJBmvhcwEqxg4isG7zPAvjaouw1eo5yXZ7morRwiVBQLv95aj7ugfmQhwHn",
  "key14": "2qtQf2qUDrjGfAYjQ2UsZF6qnv8xdGby5i25eRMptetzbqTzaFAh973kKsZCCVBCuBhgRPVLHpst5HdeokafKfDD",
  "key15": "2ENJJK9Euy7MepNH828K3fG9QAJMNdBBpbWdfg5uDmp19wtXY6uvkrGU6AepRHscZmt3c3n6yAoxVUqhomkpYQ4M",
  "key16": "2xv6tSVqArcB9Vz1WBZivPxcGGR6J4oLQ3EESqvQuvuHbDGDhJBPZs9YyruKeVYdsFDg2u1dzZsw7uYpDaR71jdd",
  "key17": "59xVcrnRrqHSsiJ1EPwQT1EjHKfaTxEwh3TnF46mdR5WwvsggDZHFLZVydwQDYBsLFEW73rz9Usd7qqfLdwVe9Un",
  "key18": "4rhC142JDtUY5ZT31sD9EFB46t5UScePyQXDCkR2GERDQVR8fyc32fiNmMY8t83VMRuq4JCMb9JS8KZ3qC7ggDgw",
  "key19": "3sCEMnMHkHseqc6H2Q51qozD8a8px6QTeFWzTU3UyasS4uk7avWPyS9QUGQP9uF5gQR5t9Uune63Y8wYAdisGogN",
  "key20": "B8tqddvXTPATKrSp7JqHbgaj2WnfLYQzPqWJ2oGPNRHL4tyXWe73JSz8epsRjZnB6KWqtrQJuEpbNcDYGP8GX7B",
  "key21": "4BzFFvFpJpH2uWHPBYUvgif7k1ZxqEeE4fBwmnVCpkscfh4JA26qPwV16gLapKxZP76HEGw7VBxYWaLbtQGgATks",
  "key22": "4KTup8sq6NkNXvBCTT5z1BtDhArWyfaFU7wXLSd9mjy4zwPcZ5bM1s3hvDRokntpmN5FoAc6V2uJ6k64eNe2MSgn",
  "key23": "2Q5qFokLnyt2ZnjCrgnxhTzqJ27NFNehKiNSx6LM45BbZfq3NXCRESVkek9PnREcxeu1rKb4D1BekW6d7arGj1jQ",
  "key24": "mXgDu3tHGSx1Mn3Jkk6mt2aPpCQW2qkcjgxNb82rw3LoBLm9VxuPjpct6KLs4tUeZSUdf9jMAM4rqKyP21oy5yL",
  "key25": "63iJnaDsDRyvYubJH5w7m68KYp4bQ1u3Xi6zkX83udUHh2bED3h6bqa9m7VdAJBCVMouqqUzcNnf1gSZrodkpFV7",
  "key26": "2bMy69mwmscrMspsAVPMGd57osChoaZcHBRqcZWbHteYBYkG8NbeY9x5s37SC844vu1UT59a4hNiJambEaKjTorH",
  "key27": "3fuTvPChtvyU9C6ibSfS9RRjZbiJYy2o64KtUfyJAHCLjjwZ8fkw8jjkGCJiqsgdWb24kEsyQuN44XhPkiQq2L1Y",
  "key28": "37NCoDqk54JmWGN6h4VqY15x4r4ZJ61CCysbQDUqcDrvruyF7gyADCXSA4fDD7vPc3zhPfpfZE43JYn39YQVR8i4"
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
