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
    "5G55Sczof2aD84HoJ2hwNxDzDpaEjZjkk93eNAJdBvtvPZXAnzRBPNycQboQ8bYiNPpajbrhdD9bMLcAReWqTQAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7gRW9BeGjbCbSmh2dfRdvYkM1u9xFuuw3EAUBsAX6Ti9be4kRW7AoMpBuStgbqDNchPLijptFmvibG2CzEvtbm",
  "key1": "61jX9amXt6aV2N6nNqDbdDjEZBqFFTJPD9sj6CKxwZALuA9zHejSwr7SAWPhXMjAaFw7X8sDh12NqKhuXDZDnNpt",
  "key2": "46uv52Cx7668gQpygrgJeghXhtNA87iuP3xkqqG4wCkrsh8c98vzvj2NhdUrFr2ZCDuJYBv59UMMkhYyroVRY8p9",
  "key3": "5X23x7mFxxo4FAPc7R9CQC9QWSfGdtcC3rwVDkJHDmVFHPLe1txSM3nncji4vuTEDST2CJL6KaW9DRbLgHdkGLdu",
  "key4": "2C3DdNuqSRpGTvUv9qCmX8PdGr7o5wVyAevQH1AJGuPPpHfQfjYRQmuG54pzxXvKed8dwtF3YbZs6n3wt75jTXmG",
  "key5": "4NhwuaNLGF97R3VzSFd8BgQj2kwBMwD4ioQSyR7naCuBRs3tyurFzqPN7zreEePh7LyojTT6HDntvyDZa4pfscjV",
  "key6": "3BwePNg1PHu3GFuHXTaqVbuHbD2fEo7TKiwpEWBTQPmMxCuL32qnJD4iJncMt7cMgz3hsa5jKiYvibJ47Mg6D49k",
  "key7": "4G7HcbzMhqQ19WQ2osC21F4qyGjNvnUa3UjyxdTGqVbaeZaZb4yow2htyzHV8bXjsWWQ9n5t2tvRAKozuydrsytQ",
  "key8": "64HLadkWfDfEebMtucj7bzfWZPSGRpPBUWUNBbXGBKemmPTVCrpU1iaiM41Hq7KMaGdkgS6sSyggV3MuTB2iQewo",
  "key9": "3Ej2aMbHCZJHYZK3hMWCqJKw6emUqx7TZ7XNWgK1XGZUmMVoLjxMmb2gapk9Jfq4648jdv7huzXdh43Wruo22oDu",
  "key10": "57KqzPTaGoG6igqRotLAo8obHnr7x5mAs4rdzV1g262HthGukT4YTm32ExEvdWtndRWoH1yhDZos3ceLC7cSJFod",
  "key11": "4Xy6g1FNBToEZy2QF4pFJwfgGP5xxQ94GuapV1GbgDCMxxs57anW5hfCviT9hUSWKM8qGre1VZJcdGZxT3Rkm93f",
  "key12": "23i91UC1Zaecb4tUXADmPNgUWdyBKuPLfXwWd69D3AE57zWVASEXaZGqEVsnKPH7hvjdzcXVyZ4KKszbfjC4zcLY",
  "key13": "hRuWJzERbZZp8QzFPsocWJRH5L7CFHaSkDJoVdZ4R2AUPqRQc1mbr2sxfLHBJ3hQMgLKrV79HVnky6pqgDjSXKx",
  "key14": "aHfJc9nbAUbbiYeRQeg8bWXRPW1XyAoWWtAYcEwf3UED5ETNJhLBPg66TEnAGKYgykv42fuSHGYduTuGzAmNEvx",
  "key15": "41t4FfeW3d96H3b1gVGBHFnnAoAfxKmXv9Q1csK59htUfUVC6KtH5GDqHSkix1riMcAn9iDCJR6gEdRHaXoFbUGC",
  "key16": "4TfTj6ZVaqAXuvbAPrPdjGGn9BcjtFRZownycpmbZN4yReZBL54qJmSDJkies2Fgvjc8YLhPLRV6K6AkP8WuWtgM",
  "key17": "67kGemavr8FaJwsDhL6uoefK74zC1cAkz1ZN1cE4KVAFP79dPuwjrkAf3rTPTbUBNHMuMdTNkGB8rzgv1tt8bbBZ",
  "key18": "2XurnsSs6mbJuz6TKmEEXyQ71vfzkxDz84mJxHQuN8VRtXczxZWfKDfcNVhMNdtu1h7Y8HPQeatDAAjcAeNPVDwy",
  "key19": "2BFkqAxEWjTtqRExoWZnmX1cCgSQGFitqNa4d9PqDcoeTXooXDoY3mqSLnMEQyrCGafx4DPZMCz1p5n7JvEstaaP",
  "key20": "GtgVVt1nmGBcpHHLMZBuQgYUxfD6c6Q5Uf2Do1ioeRMWDu5rUhL7tRftsNxap4BToNgTyjvHfiDFcp5UxKLhqUM",
  "key21": "bcsZjVTkJAVSBXpR6Y9VUdqBxNjHxTJjqNHW5bgFF5WkM1adKsFUL4ivqzJJDsZYW6iwtwAw3fsEYUfX1rVvjFY",
  "key22": "3yZiCrA17Mrqcyg4SnqFba5QBddgujC6wfMnpXerDMoRGd8T1VNC3t4n77KfPu3h4RnWaJtqwiCcfpZKZutMz8Z5",
  "key23": "2tb52ZXbCwDkcP5jC3HDGL99oSjRQMCQaGS77bn8hs3qexQUvDemVb5j7jvy18ZWEGnzRBmTwdPaZkHxR7xXNKZ1",
  "key24": "4daEYKTrmWv3W6jdCu3G7NUUWsdK3v2kDMYeYEPafdzrLVn2c6518rfEUTH3H22jBw7nSGCwTJnGF4uwXsTn6pWL",
  "key25": "3E1f9441EyUmyuwBM6yTqqF8AwDFwcnMffJP3jqHF3uz5uDbJQnnYdr4KebBDX72QxjnbRkcqXXi4R7dGrwjbkck",
  "key26": "4HUDZxxKmdFSH6tbKLLzmevmBXTgnJG5Tq6zRNpzcq4wqg6rJzBuB6bQi1eA6TgWNt8qCXYbgRwSC3PyRAPNvmbJ",
  "key27": "53hYNBADitqEcxEnmtaxGHcx8dCFkRpAorE6gZyuHq6UK82a5M6tQWWFA1RWmsaJ4CGzjtWjyfwjFxNZBSViSpxW",
  "key28": "gnVr2g6K8K2gn6g46sh9NSWSeuFuqBa6ZrLErfz8EhAzEWXHksbvGhKSWTecT9tBmAxfhuFs7Rz7rKFpCWGXeos",
  "key29": "3SaXjVVy2qBPBVDSTU2BwPqwDAUP5LhWYfbsY8FVtASfh5VtVXa4kapVzdyWUHjACbYmRYJtzmKjgnqcvZ1E3iFw",
  "key30": "j9VZ9zSR1Y519K6HGxK4qGanCdrN3kHrP5ijqN3RuhgYsFmFNAYEuBKyZs9jYuKH63UQC7KvzLeHTh93QVtXjNL",
  "key31": "41f3CTTUiNgTbjMseEXC6FJGX98n7wuUoC6XRWQgBv4iDmWjoAPNhBXAA4vK1gSvmXYb95AWAemVhSPejdSaK8tf",
  "key32": "56tGTGUi1gBrd7dZjgp5Mp9uAc4EZbooqkQC7V5SSYeRPpWqjweoDZwN3dUXkympoKp3BDueyhV78mfC8xGcaRKF",
  "key33": "4Tczzei9MnkmCaPnzGJ8Jup2RFr2PbrTEN54cLgon2X2w9c89fNaPmZrcd9sEFX4DEr4dtvTZ5dhJGU6SUDWWPj6",
  "key34": "5hiS2LSfJRandaS459JbiJA6Z9Mig42v1WWFJP7epvd3HkjT9VrZDRyk678bC8CpJqxiWHVyMcm4ZXXtBfkjrCpu",
  "key35": "CrY8kVxMNJGgLBbkpxuaM1uzmH3eTABqkAhnyZm8vsoLSbgkB6w2RR4mTyAxweqafe2JjsmiFi6vB6RaA2Cs8Sn",
  "key36": "4kEDtajy31EmdNZaewcdUT21X6yyMZg1YnfcdtAVm8AY1jpYSf1N8ZWYzmo7XfvQF1d4DNbMp8MHP4EPKqZyBEZF",
  "key37": "5yj9JHri82Vfrst4rRMUo7gYMUYMHBE5zpsBvTYKbseGkAr92bdhRphuxsTK4Ss9QYLG9r3wk4FYr2sc3999dsoN",
  "key38": "41gCMDU6EavLxm8Li5x9srHU5jF8FsTrjreh6dPj8Ri9M9LmkQfPNrAjjCzU1YSoXF8ApN9n8yYGYWdQk873sZSu",
  "key39": "64dMy5rYScZDrreruipLEdg9Xn7HiRuxY7tQV47RrM8kgAEmyiqvfz3eGcj9iavHTd23WA7pj3sUJeeWAhn4NNuo",
  "key40": "4MhaDzis3FNsJsb6ygexpEWeb1Tpv4LEt7dq27fjc87Bjei6HotUTszozcUEoce73s1Wd9HbPcc4qi8THis7BmUn",
  "key41": "3DoXKDsgH4uJUgiaQ8t1Ny4YN65eshBaYa1hSNx8a7ucgFRj28smnGC8fGQmtiJDfDefJZKKweAdoQPmFnQH1DwA",
  "key42": "2pneb2avaigUtb1D4zRFc4g47eCPakUirD5V3Q4QmTPAihrnGoi8UauZL8xoNZQJVMx74AWCuZuZskw3gZxAJ6Ft",
  "key43": "56bKRkNx3EucqN4CginBTSdwuqbroruYBRF36BwdLZJDiF94iUp37Pm3t6UdQpBiMa1iWZRPb82Bu6NtuxjGshUZ",
  "key44": "55JE2cbHAaiu9zCdDmZnkvZPBxz8HHspXQSAP3D7d3HSotSLE7cP7dKyD4S4917WChwR5V6EThyPNDR7MmnLNPeo"
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
