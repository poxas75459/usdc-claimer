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
    "yKZ14cJrNf2UwDq6Mva8bTB8Hrba99eMujFJvxSLyxekkVi3cLJsz9LGipo7fWjKae1Xmgqr2vS3ciYaQL67BAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9QfnEikUZhAkERGMJ8Fuws6fMuJ4Y4hkyXmXTrJpqZUKKdfufg1Fwhm9bRDCnBqiaKB4ErsdVpw4pHfhvYjeQA",
  "key1": "5brbS8YiQxz8sYmzY9v3nkhnunsv5E4sNRUn7t1c6X4YayWHAZCWkBkSFej2WvYCvPGxKk7QhH86Cuh3ZNcp8jNp",
  "key2": "2xEAjXyXZ58NnFdE3zf6a1e16i86wnhVTvwXJ5jMRvde1xShV9DcHaLkjep32yVSqbYqXjrzekcz3caeneEfjsqJ",
  "key3": "JbZRUDuoTPtqCX6THkXcLhhe2n8c1fg6A9YAeUzwyUkpeNW8H7Q91eAj1cG76K51Y1VAVtAhFt8jMypzebPGUmD",
  "key4": "29BExx4b2NH1AcyTTK67axTBkqqZBhrCPbJ5wDCXdWHzH6vnrVUqBoRecfeG2iUQqAYPZUqU6bemQ5VK5MRBxrA8",
  "key5": "59kvNUgYBPrEfEigvxG6bdGQaBxAVwT4jex4aakmzyeqhRa5NkUuf2XmABbm46dPC4optgMGe98ARVHHjpmseuHa",
  "key6": "3BeYwPcZg1xGe1w534Y8igVYneb5Go2UpnVrXLtBAcGRSQ8XuqK5Fxv7LZtKEnYkLXpgKU6jfHPPjZ9M3QGKzUUw",
  "key7": "31Xw71WUjBC2TjKqSiS9GCK5xYSLjukT9ex5BXZ3ndouPwxgyzPeokqqsnMsZL6g4SFb2KRZ47o4VAuV3qHAwoL2",
  "key8": "3783BEBZyGwPbwB6zZqijPzwd9LahzDeZRQ6CLVX72cPuis5TLiz1NC72Uj6HDt5FVWGSdc9sjKtta25Afp1CP6E",
  "key9": "2Fs1xJdthYg53Cd3ZNU3DdME8knASkAwEuTdJjaS6m7MGhySTZxN5zTAvPp21BLNTYPydqJPB3Qh4AUSjJk7RZGu",
  "key10": "5zH7vSc7nXHTtsH8rWHzPNEbfXS6yrnESL3aRgb7WbDkuWRden7DapCV4FcRLdhCXcCSifiUz1L4JYUqGxDtFf1n",
  "key11": "4VpWso8AgKi7qXr3Bafqn27XdBEWoyQgVC4Dowct8g1d3Bqa17jtMUt5nwYUaVwPifZL8kFqoaohA2otjrnbwTx8",
  "key12": "4sBqz6B8vch1LPSqXendmdPimR2eiFLwNyyHaubjnYa8oiS2VV2LS2W88nqkgEa2tHFfXqPk3xtqxefr4LETaZck",
  "key13": "EUBouLuVg87KFrrsUnihZKKaxiEJMM8N5RYLxou1Hu9UtZvvqmqpvaYexXLoK98Cx8PSKfuL463fEfXSFHTwmgY",
  "key14": "44kuEmpXPJRwSNizyPCHo9nXBMWE5Sgrrjjjn2VCdJ2t14KiuG3Y9hzUVwBxqsYRbQM7uZvU7rJxXShfFnXRqfnW",
  "key15": "3npF69X2RP2NwUdDcQoqZaPvtJzzSLP4624gcVvn2YQh6dkDoJ7s85GXxaNSKRfmTbU7hGPbzrDRg6SarGNyTRCm",
  "key16": "4Rfxeq5G5A8R4BE7JiWQwWCCMAc6f47mzMySEcECRWwvvdsEqrTaeJpVspb2N8vsmeryznhbntzmUMRLRB4umGKc",
  "key17": "5rkFDtUt8nWUB3JCKR38FLEh5aMduPfTjaCUhiino49XCXgdsDxjMQAsQcztpXwQyDaRawaHoFJfKmybyjdyiLpo",
  "key18": "fgnaaBWwFHs3ULrSK8idQ1skHQpRMeCn1dZpCs9NJ8JceKRhMkCLnwh6SqHsJWbkpMo8rwMAKYn4uxmjrWRAjen",
  "key19": "5xBdvyJ78KB8uBPP1gkp9QuvZ7VdCGmN3DrJweCPz5dE8LKjhH8RnSawdXBAEdPqDr1N3gHx3zKJometBjPV8Kvh",
  "key20": "38TH4P4LazSrjiohkT9Q7Eehs9yXhUMHZxhHg8VCcQiLUsGo4yTJQknSErUs5S1Ui9ppmozTnyv5TfjbzKbzPyyw",
  "key21": "2sHTEA6Xguu65aMBVMMDDKF5Mo8RjEJQ78dK3JX9KguTRDzuzhKGmGWh1zRVMhynrv49k41VmCsMnUEYNtBKaHhi",
  "key22": "2t8NojqDwFw8BgUd6FmUta8dnYGjX9GXfN8YtpD2VaMHJ65N6Pr7czFz2eFFymmU3aN1hDM2UnWhYThMP5Bhj9qp",
  "key23": "4pFvMMRK3gEDYR48QSLzrgnjrXDTZhsJwpudmR77uYvJ2hfFaAWssYavuTEPyHCnszVLszqYNGGSrN5XHqrz5frz",
  "key24": "DqwKwyW5if6QtKmBHT8pDref75P9K8RveBsyQHEPdENw3bbuRsXMHRTDTZ6TtSzcyE1QyLp9cHhPMr9eEofSNUY",
  "key25": "5cijLSMVkGmikENT7JTtbvF6NXr6cEHrprfeBbkin1VtvavGy9kyUAPHuy1RaRF6ttmbUNK2Dcxi9idm1UoFaoZC",
  "key26": "33Ww6H2tWLYqptZhzpwZshCj57sjFRPLC6ypXus62Mh6XSNwiALpFwj1ZuYgboz3L1exZFLFN1fmTj656HMGe5DX",
  "key27": "3XLWYvXrywSUW8uL3Us7jGR4wiXeUxaQeQou8RgkGWm1vuAnNRhwigep95rco4VTwNtq7rpiAciuNwFxhfUp2M1i",
  "key28": "3KC1zWVeJSKGDzXX9v1BYcpJHFH9LJsB4QhNTmqJagBvMzwE563esJkdgNuWFi7qTqb8FCzNYsJBXtv4ar2H2Vc",
  "key29": "4tJceKDNcba9qHvjmtprVPdmTvpJDDrQ7ErkhfYKY1qXwae36G4pujUoQhfN8cdopLxiytwuvFhBBFRzofzJrkFm",
  "key30": "3k744WGnUBe5kC7rKun16aQZytQBQGrF7j4E1DMvYjAJfNrtTEdhEzN5xGKH2E6PXczBqMz2goNF4UqWv61sTr35",
  "key31": "nUZv979KcTnJmUJhWM5CETbJdHbSfYGTCKisLD9FPPaCRiVhaDscwsgSDNsEb8oLuM8nj3txGiNNRSd1wN2ZSFg",
  "key32": "DbMW97k61Ri1Hnt9dSjaj7FpFC48QcUqsK49EgtDkQVAkcqsk8SwHYb6CdNnZZihQXUwh3NBXtgqHj8UV7DFJhG",
  "key33": "4VSQTfonkxG9DXSNX4sXZuaEMXo9nf2s65KhJ6yC68FyUc7Jw31gmfS3Xfh92WRSMwKz1GJgEv7vmv87xHm5dZCS",
  "key34": "3TvLFLbhHuoou2eTTLkCBCcuxgkExPaoQeqTs3nzUYAQKvzwkUmHp3dVjAnfa7TCFs1WrsAcGGBSa5N4ybXvUc7J",
  "key35": "2XQ2j1huf3q3GN4nTt3ayTP82D6u7CoWQSAqz691jzFbPY3jszMG89FrWKBfkTt2irKUuJkmgDu89vmVfoQDNxGs",
  "key36": "2Df17kfmvLodWA6rNGSPt97pKQ22AHrubz1KT4kmjpfknAQGWwgXNNuB2ZwcLUmYSxcxzPB1ySoTbZTYxM8uqc9k",
  "key37": "61Ja5nR9yLkwkQVdmwuERGBzza5ctcKhZZ4nZ7Szjj3S32FmMXKD6hpX2mDaT1jnTpFsJrrGkfkekWczRn71M3Z9",
  "key38": "3rMtRVEgJ2GejtifHrSaRiw4qq2XaFSCbTgP2brQY2aLRxzqtxrSaPWN6NAeQ3ocbDNqQCigx3YY5a4JwQkiw5Bc",
  "key39": "2nNceZiRRNLhgjCHEDoLGkcarxiQkujBdEvP2ypEPuVWetyVQ143H6fJBxqM55dxATMipRf4VyVEJqfS1Wr5o471",
  "key40": "2eig8rPheGVKPXfHgThtXAijwZm62xL3SgSibuzBAipiKSpBD74gaPwKpbKSY8UNxLgx61WfThT1k2aJ7QJ6418T",
  "key41": "5VXyetyAR4PKSzpW4aFVSL3ToAdxLQJNP7SL6YwDvd1LUznJkTF1oUQaaZdRjLXEq3LGsMKkQsBse8MCDdoc9b7b",
  "key42": "GJwpifbBB1acuwq6M2Ji9MtHFaEXzWGEFK7aq5gBkm9tpL928aL2XVJRvPLePLUZLKWp1vLAj2SyRjFmtKeNqPR",
  "key43": "5bRmu64ARfWzZPSmUQ1Ppy4ZkPFEMdVS78AGGDyNfadG7Gi2PmFU9nGqUcGJ4PpQoF8YAm2pAJvrMb8sGEgJQSLq",
  "key44": "4Lxz4Y7nzn6TJMnzoKX6dxLzwXdd3NqYBo2mkTmtp5jZABgLTrBNZko6NxWQGVqm7pGvGd6S1Xqnr1Vn5x8LARst"
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
