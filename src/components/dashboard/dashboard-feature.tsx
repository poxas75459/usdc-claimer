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
    "5MFXcDnwErnkUoziqLKrvNx1iFraWcbdZuLreSe8YMR2c2YAnwgsPT1JcJfzmYFDMYL1vGeQQqv3LtdYtD3bSZTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFZx9XXknDn9Fsuy37ax8NTJKHBw2ZGauYFtqwJLsUSypkUqzu6hYTbKEE7aCwKMR22Tnt8Tbm6knEukV22NMuj",
  "key1": "5bVNeJ6nfvJbcqvFzZShniTFtdW4i52axAkTVq6zr8GgGv4fS4JKJJ5JJfgTqmrja32A44hrrwtYTF33LxXLTYKc",
  "key2": "4mMrnfEGtbKLbUZdWJoWeGYoZjchiGTDYJaWZupxD8wYLkZHwKrhzK8wFPjEKJb63ooLYSgew48gMzcHuKPhmRQK",
  "key3": "249bP6sXjxSDBG6CD3z9i6f9oaFJLYMxmcQ9cwrXeeZoVFj14BwMXdmzW8CLCzZxkVdjfdNgh4R5ToqzFo5D8R2s",
  "key4": "2ub5PYhbaRDEmGkptGESkCPz2LPYSFhLt5K3KdZEEe2f3wqskLZrvdaFnf7RRWRD1kprQLirRjTFh5aPN5DtajRu",
  "key5": "394wpPYQjVT56dSZem4pgY2Jhpm21RRPNcSnrLXCTk2DELqXfi16D8wtjrma7RSnib2x2umnZn4P2QKj8Z7KuX2a",
  "key6": "26zWprRRvbauwW3fmK3pmfJFZNFxYrtokhtU5YrYW1DTBGw82Md8cmbuER1cPABfvSFu9sePB5n5DRodRXJbTxiz",
  "key7": "32NLnD6yvkyz8gnZYkBCvDwgrTnwSMGA5sR4nKJnbgoiY3kgpVkte1LgjJMDfJXiWbi9oTrEbiT2wVf9N8KmcXUY",
  "key8": "4TqBGa4QB1eFoBEEbG3BUAD3aDftVURx3fdnJHUfU1Ec2Fx3vnexxso9GZFq3Ayb7p4z6MVfUFwxDWewzKDTjYop",
  "key9": "2USVzqVrKC7V5E9hzYaUkFN8KTepmvyyU79NL7a8jnFC16qSarV17dykHcPKS8dqrHjgQkEisX5kwdySqg1Hf96c",
  "key10": "3q5mnzefeQYUNHDPesuNg172dkh2vDt3GdkcozrigncuqMBYyixApu1394KAcBAoc6zBn6NbAFLVeziQXpmQFVHe",
  "key11": "3vpRoC52XcKq1N6oWrFMysNc7DtpCusiTmyNRzXS4qZScjPrqEDXFFWjL2Zbbhu1ixS9uz3fWwfgVfdsqmDBpYp4",
  "key12": "5xjYg2dkjua1oFLxA8P6n3Kb7cSEombHzheRS93JydUb5WaVG1a7dUwLg8MnfgfNjzS9oukgDGzf9UXRTJdPGqFA",
  "key13": "43HttAjT8fL9NFVL3EYmvRBGByd2PfmxqyihifxC7tb7xUTWEtjiSkxePP5FywrPmGzXP75qtfkTx11wzmRgtxGn",
  "key14": "48DNvbgHAGK4UYju7ueUu8xo5QXSYeyRv18WMxEyVQtvi2HyQMeNTVnU6yTiQDM1xXtckegGZ7ZW86mxZ3XwFpnb",
  "key15": "5cRwxrz46hfX2faLSPvBMBacDs6pmr8VMWNB6UyNM2yTDd2ZvoUioNteQrx31EuPeh7ruoTASaDYc7vEKxCvyvrv",
  "key16": "65m6nVwHY3UJTsHVyg5Uqz8yGrTqVyFgh3fyDpsqg2F5wZePpPoNwNfkwJv8psid8eVViNiv3i9GGY9zCs8xhK7a",
  "key17": "4iMW5XDFxbw9MMo1qfijvCBN3XTVCqN99vgCmxgvQf7NNu3sigp3DgQFadRpdFhoW1uPHN99UUZfAnQKbcbo42E7",
  "key18": "3cvGfuzZjQQbvWDwM1iL5AyR2wxp9haiHW4odJ9gLYrWaFaCdsLMuAwSFPF15BoDqigtwWkgkh5Mj3TwxDQGJ9Ej",
  "key19": "4SrQxCyvS48Wc91rhX3ko5nARt6ZxoEWnMc6NTJZB9BRZxu9p1UPXL5frJPsg37y3tCy3XtXVEdoEtevSETHhree",
  "key20": "25XMSGSxU15eGkgcBe7RnGxJfJ8WbMvNiBjrNF9zZJRXhyKsFwEmNdqLWBC6tErZsZqTk4K9od3HEmhBeBBGLkHw",
  "key21": "49BUHuUaSN6uNJ79rYqf6R7Ta9vU6F3CQgRr2mmtr4yA3EL5Juhs2Takcg9BnFaL8fhRukbGp3sTr9gF9N96nLD7",
  "key22": "5F6fQvpabHNoV562HEZPczuMxM387ET4qwRhghkQNYwX17o9Xx9TbJAKVgYTHZHyQuoG6TDPbXoS9PfpahLGe4NV",
  "key23": "2VEF3ELJpGybzTo8ocsa9UxsjAo9eiCMcSZCbAzbmti5yGcWicryg3hc19saqsXtktm7Nt9jHXW7SsScLoDujKEd",
  "key24": "5gMKJHHK1U345P6NCunFtwC4bCzDY3TgkCRYUiVmSpn44KUrKBmgkF37t9i4uGhXQeFuTqBmq8R18BkQ5Gjys2Cz",
  "key25": "Ctiqn7XZ1DgrG1xDKpYiaozcsTYKvai1wqmEFx3V6QtbLqPUk31BGt6UvTyrxfWCjt5r83fMv6q4JRv3GPQ68SE",
  "key26": "541iR3HhFWZWh1xZbtb2LDDXKW7zRbHb8Mn8ea5o3vccSryJwNpLVB9UVfTM2FL5PRhkB1WS6mDVnjTkUk3Sqtgt",
  "key27": "5QuZBimRSyL8GGfpJxUJmuKsrMpMQmqYvqzvHg94mCgwEtGn9pgk9MceHvgaoM26UufLRxcgSJuGfZPtL1YRWUXE",
  "key28": "3QWqfjGXEvrQzHrdDLA1xSBoJt6jFkvs7Jd6uB4k11KbEBMFD9JhmuoNP1mK78BsSguoZRwSqJCfLVcLUhD7DYyN",
  "key29": "26uHsdPc6uzE21TgYxZpxo3n8odjazT9h8Y5t4zEcGySuv6i5tEtKGwFkRak2bmT5oSLmwPCQSoKh7EcF6i7tq19",
  "key30": "4pxnxH58E6gRRYMiRv6aSTx8znpuy7GLwmFMrC9aJWrrLZgYijkGTgiA5srduFvyUtacZ7TgiEGcQWcVBKKtjE9u",
  "key31": "3UYYTbRbwuMKkbVcbAMJ65NDT4XEGhaTiNoMmSXeQKEbYDpghRJbAfdd2gcDFx56BV7WXvrSwnbHFV2cBiYRFzbk",
  "key32": "4daCQsTM7ghHVyKAeZyFrCzwjDxRSh6PtLCsmnjHp5phx5JMeFLq9DUY8gZn3FCpMrGhFjiWuG8H2WFKpdA5zLhN",
  "key33": "PXvcjtzEVazPWNJHAojXPa36cdSW8Egop7w8R6vGq3p77ffM3UmMPh1rSWFiTp3RtanVgH7sTqc1mAdrS8Ws4ac",
  "key34": "49khNfoyYLFXYr1MpSse9q1sNgCYTknY4pubC3KStE1HFwHB8hYai67zC1AVWJeDaYJ5h5mEarKASkMs5LWPxtcY",
  "key35": "5Dv1h9GTFdPfpAbXGiDRu79CsgQwAYqR6K5FL27pr9NhAZaiWPRvGf5LudaHCrZqxUV6Lmp2MjJXfu6bwXcvRoHw",
  "key36": "324ZtYLy5weq83NmB6c8yYKVjo1Vq7FFXsBdSGGgw9Tev65RsnNJfKZZVh6HiojggrcYTZJqzycsN9hfGcEnKdZM",
  "key37": "5mpJTM5PJzqVKorpdxKpmw92zsgWgmCAbMKTqeRHp73svE4VogvPxVhoA5fVEYjEeZtNU2xp8BEH6uEQMr7SRFm1",
  "key38": "3Z6VxgYww9UYbHZr9JMYsDrcTrwPKvJDK78URQZMLrZgUbHzTqJ3M5jnXq9piy5yXxMTH4WFiEsQPZRc5fr9589H",
  "key39": "3opgXuWTm9VTkeeyJepgY3wTeSiTgyoZzXj7cnogt1d2NCZCq5SYV2tSm2eHKZ9XLa3SEGnFWhqqGq8KEB1UmP3s",
  "key40": "64GaYdzoH5uJ52ier3sRENDVcWjdVW4ZstFJnFhvoy14XsUTvvfqkhkJKbnEkqzcQZ95tHiKVaZxm2CkVuGdEzms",
  "key41": "3QchKxdP3vfPBNU9FayBjjQuxLa1QsUNGZvdcpXHXcfLesoejBU732jQaWxMNjnFGUNf7VFF9yVd8P18zK3M2jLZ"
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
