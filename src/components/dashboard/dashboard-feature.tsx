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
    "2Wjt96dak9kEx2sirGWwKtwHK336bUxheQJQ4PH1X2AuZobsbsKWDUjPKNWHFLGz2yFNaDK5ZTVKRMY55b9oSESZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DnfshyiGThFRsoAS3b83UXLQFCEpHYMre9c7MMtLZisiJPrNpfhyPu9q2ta6qtFspPk6ygrgpKLqDx4Ao5b9xud",
  "key1": "2syeNKjkrwF33dDoM7xRiRHGQJAJAKEGSV4gstQFtNJHVMUpHyu5z4UCfaWkPgxrLjGvMUi2hJBCTmQyBivm8fMp",
  "key2": "2Fzmbovavj4hCvCuYduz5H12had4RppH4gizZWKUxUyuPYgabrUL5HUgsH1mv6zu3pbahzxoGFN9zmDjLz3y3e9F",
  "key3": "5fPUzYzPfxFRFXWAK4R9TwZaCjLes9FK5Apq6JhN8LnHRSECDmTRwJhLsqF1RqgKYGmmBKtZranAaeuVQcLdDHFV",
  "key4": "4C8VTENSMdrPBHpetAQSGNnn1Vuyg2unAWmdP6V9h5mqGjSHzoKZV7Aa6Pyvrh29akXVhigoZUrwBVhhGFY9Vtf3",
  "key5": "mgBX2qjvA53ZGsNLEdVBhTpGK3tGHwyVNicATvM6Ssa6HSVswUk7S29kFXxEMceqyo3H6ZjAg4R7BCzpv2DFCAj",
  "key6": "r8avmuoUzj5Yegt9peBGd1bNXBakj9Zf8trpvWbH2mc1K9rzD3fPUgzZU83Gi47WRqLNnGdzkDSfN5PRrx8mNHf",
  "key7": "4zDdELxiTQBBisEHuRwZGUfyB5Awm5wXN6FMdShizVV85NzUihk7ABz3hkLH9tBC5PK4UPQepa9PAvKxRCaZX5Wv",
  "key8": "5BYC6gbqqSeoN849cr7393qNrwno5xRzWJNaFz7VZXS8qSFPPLmiARB2LeZ7cKLgJVv5C99WXgRtQg9EF6ACeJCa",
  "key9": "4sMEXockA83dNxFJTM1xW2vR22RL9KGU71NGVknrE8mkGMLimbH874VcMFinNsWcq8ZqMinjx8jHNSesJt7RcSMM",
  "key10": "4xoCjrMoxqrABa39FWDuXcuPn6eMFC9VqAWqTYtamR9dyNnHwTm4bQhDex9rKXQUpm6SKALkyMfL86iEvP26Taqd",
  "key11": "27p1VyGFKKXQMN9FN4dZvnDUagzdT3bGaS9KbTuS5a4NXdGejkbbfCxuxAgrgPBByJvDDCDZRmifE5nNkHRNcZ42",
  "key12": "RmqDLPC4kqizg4X7c9ifZx2GyQkYFTaK8tRsvAHCVA7z3cso8p26Q2MVEqUrweRKUgmEBfEVMsB3jqtEEpALNx5",
  "key13": "3dDP5bKKjvMev9zSgBqNhEu42uK8bUEGvYmcvXG2uwVSPdo8UEpkuT4zQ5A8pxcyoNPSFux1oCEVuhGAUmadmhj3",
  "key14": "5zKS73h7714BABDrbFsT26U2sm5GQKy9BgSsGeNh39WcDqixyi6cANyuNsPg7PksKmu1nHyPf8SyxQtpJwopLF9F",
  "key15": "58hjqSRFryz6uAuK23JsoJ8GTfBdtZBjK3T8a6zT1kHe9MSdrbRSA9K8NJVp6N52nYhvdZrXx9cuizURfu6VW4pF",
  "key16": "CzBXFT1yXaaX5icJrYsVmzcMwDyVchcciPo84HBVEPKHme7rURhqq7BtceUiHHgJsxYzQpAirwNNELE4TKVZshg",
  "key17": "4pLgPfeduj5jdD3TNSJXJBYea5THWz2bSTvAHi7EQEDKeSgjduFq1V756jrWb5Jxh3dWMzg6tHtwQRYVH6WyeRCD",
  "key18": "5GQwq4wNBgF1UHqkZJUmdUcQua9DktCeeTd25nGPaegVUT3oUWGmd8FEaxhrHtWs6msbDKiSDWJ5f3akxpJ7erM",
  "key19": "62Etseg6FFDg2SmEkAvRvuuHFU4eMHLmFVN5FoT5N5i3qB1isQcqPRst7HbsHRXDx11NE4m1E32ZgcRxoZfirfoK",
  "key20": "55rCnuALtTWYx96fEpKPbwBUQN5y1SXWFhcCip4cDmhDZxHnmS9FFcZyNpsbWVpi8qPE2NFHg3WZBAg8CoZ44LLx",
  "key21": "2VhsXfzZ9QVrENRLWjnGkaEvmMDuchFHv3RiETs2NuL9BRKgHDVEDhqe5gfVritPwvbZC4MGFNwZMMH6NHK6QvYn",
  "key22": "49yMFEGaemekYUPSsYq1n5q5qDETFy6MAn3iPEihMpoYojRKHjeUjLX5oSrNKCsBpAq2fmD3uag8PvEiCdg7N8zG",
  "key23": "dJpTR3AoEBZjgYLxBfS5YnFdfjLTnSC8DA2ygUH3uGCybWN45gx7mPtp637L6hUKFFRwuYRtafv9EUZ7jKtDws2",
  "key24": "W44oDumjuTnpu86LJUDdf7nRniMN771WNUhjijZtN5JBAegmGMUtpBY1Arnwq9txr123MmomQoApaHqNG2oSJSm",
  "key25": "2QdocZf3TWyBu4nX3okCzvH9Nd83ZqV9isDMGJWcmcZMBQoK8EYUoUL1EdWpUq5jmEd1ufguzakThxUwiPCDE26F",
  "key26": "5eWWypvt6mhW7gKVBeHfeBbbhTdDKSsvHvvqnZXQarhx1h7ch5b3RD3H6K7nrkSZVmQYGuBPzhmWHCL8Uv9Fvoua",
  "key27": "23yb3Q5BqpfwMvH76yUq1FC7jC2EPkXVoPSS91CWzY3MkUDndYFTPTHY4YLKBBGiVsXUL2PYUxNi4VXKWkEjf2zx",
  "key28": "3KPXXWewyfo97mvHCQeMwz92UMYqEW2oEMuMFGJgddS9NRTpQ95oreND1XrX77uzbjRCBi8jcavkUA7SZoju4RJq",
  "key29": "4XEYkMM3Fim3oUT11dwaZDhpsCMZKAMj5zZRNXSPCJBiAh1A7ByuFZZWGrpZTcW9hUnr3nB8ZucNKRQyVxv5f1xY",
  "key30": "2FrKo2H1q422tbvAg734maiQHKbLo2GzWSjFe2R3nhgqVx8cf226gG9dNdC5bV7EkqbcFrRnC3VNfbKAh89tvqyH"
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
