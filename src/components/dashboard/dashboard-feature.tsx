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
    "NQiNJSvTFt1hsGKa5QABxGXNfTThSjuyH1rNeFcWDDL5zCAApMnrdranJQei9LwMzBkoEQujHdmb7JF9X8oqhDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjJYghvNXeFRAdmtao3qFKZokWxranDa7CEVwSeKkf5wVaXPiz2SzZ7hZ2AZspGHRL8hyyE4SMTrBGYB2bfTQSY",
  "key1": "4m7f3EFdsxMsnjqarrbCD45PZ5tcFRUFMyZSbC9iLpXrvTUugchiKpKzT1Sg8Wqz7GrjHpchsfCv9Pi1TpoNntsC",
  "key2": "5SoriqfBq5nVfyZN3jiraDJK12UXobydXirTLD7cpPaLux1rt7L2fxLtq3YFbSLN48Xh7tfC6bFaL529sV1WATTx",
  "key3": "xFjJqSygDBXyFc5ESMmELLaXKdqsasHcH6EtCCmpYaBs1zHWaeW1Pe3vue4R5r7xshXhHRksy97jEb9qU1AsYXv",
  "key4": "5UFTnJSRg41srHwCLMBiyDtHpoxvA284PhJ7HgDBC4o3Gize1TEdTHDKAvo9ck2Bv7SJv2Hrt57BU1VU49LAfM7T",
  "key5": "5eFy5tS3bnqPaQozbq7pbPav6RJDL3W8Kx7RBs3A617cL7QM6B51dy6YR8F3dPY9cyD8YPeDBDd6o34dGnAirJnM",
  "key6": "45u4pCYhL87mZJDJWvxEASQjHAFw3FHXrx1uXxAYx8HTkJFVhda1cNFD86NcBXo8f29FrFRfBAhUY9DoXfAq36iL",
  "key7": "5ftbvmgEKdJkihXUpA7MxLjKjZsBa4XANdKPvjXSoUFymLKUeqvbJECVci8jaVuEtrLpx2EXRRj1KQgSWhjSpjrR",
  "key8": "4wadV5BGshhXRmUEHboKYeTWKVFu4RH9p2dSnQdDg4T45qVhUYBbgCHXV6SMtYTvgfumXuNbLr1wMos5wV5ykkhk",
  "key9": "469RfBvekiEEPWvaHgn3zaEHtJJ5k3uBhfh7UAwZU6vCC54ctvZbH68SnkRieg7pf36Ejoghx2eYtFGy3L5zDcm6",
  "key10": "3sSbd7tZeu97UKg1GusGoyxGXQkBJcS4QJUmS82W56NrdgWe7rkQRyrueaQC6w57991WMY2g6JaWkhXfzg95vW5D",
  "key11": "2wnq1Kn3ixxd1kh68emQb1U6rsHey6cbxJkSmzieharNj36YhsKVbQuFAKCU9Wdv9bNLbzGgsfSyHQFKtNg2XLEE",
  "key12": "4iZcA4Aa1piEgcbh7koh2trXaUqGS1TEXufKpcsoXLVsBgvT8LZSq2jHBNcHe6NgeaViHbSk99ocwfpwpUkLao6v",
  "key13": "42GpY2uCSj8ktS6qYfEMFift9H72JbUs8dPbtWvTixTDVXoqWD4ABD6qDdDpE66sQYFs75NwrCkWhzV97FEzUJxj",
  "key14": "3hnQCT6SUkjVbDzKACME2dCqSrn6TewjUgkxJhBpXQ7HNnrDoRPg4MBBD1JxLDwCYwCZxzhZhV5xrKJrUzVGSKb5",
  "key15": "4921NDNyP8Ra7auTkrq2f65WbxtJAyHKyA8k4D4XMwYYBJ6129CsnHc8h13DD7tts4L9EEtJj97Pw9ZsNh9Jrj8H",
  "key16": "3hGFT8khyQk5Jg1eJaXNgv91fGNCiGvWYaFPuZSbv86hUF9KYq1D4b89casnpnTHaUZw3BxMzyQGmoNZBSS9Eohe",
  "key17": "67GGgsbW4ZNAXiimqseR1caECmYE1jzgDdmAJSMKojMtn6s4uCGgmvpCEKd4jkMRBGVw1DRRuDGY9a3ZFo1zkco2",
  "key18": "2G3RXk5uVniz9UqYvZM6TUE23EfhtpFgRFj5ysCbp4xxqaEqZSHZ3BTi3XhCF3QenWAAyF5AYw3HnbiKSugUXVSX",
  "key19": "5dmpXgHuE1PSUjA1nKWAxfhTRNewhwvxPaGyf9xvLwy29kTDGiatNaqkd7mYfgWJbSqbPz9QG4dFfBeMx6cqc4bU",
  "key20": "5YRZLsMHurJqFRtpSMj1Njesa92LgrT6uprrVQM9ZVjqiJZa5oth2a55FfSBHeaQySWuXMQLMKfDrk33HQwxuACx",
  "key21": "YbfVzPaYGGjm81bK5aumPTTy4o62rLzYcHN771A89E6oFym37ALMfrHpKpAWdhJx9uRFmcEeEzJr8jGaY9TSoAf",
  "key22": "2mrnBke82JXK5y38nToLhWpuMvTkaRGLruS6UCgvC1MRziGek4ahfkYbMZnUQrJxCSCfnvr6xWyyKyuUppbKLsfr",
  "key23": "4We911SNvaco1o2uxnYPvFBxp4Fv3ahDJhYRYJc5tMsnHn3NnJdS3PBix6rPPrdvMYsL2KntLzmxavEzboEeuSBT",
  "key24": "3NNWMASgZ8i2EVd255PQEFtjn1JzKKYGkKcjAGxH8ufazk66qy9CR3HZ1Lswzmxm6uGbMjNbheYRCqo2gZFVqP11",
  "key25": "znAjurHuU6wZoz7CGg2qWvzBXTgRxSfCf5nsi1w5cknn9996t6G997WfsUsue3oCxYe8TsRGdh6Z1CSR5D2epmx",
  "key26": "2iKm1znfayGkTi6HdcLBzSxRGMYszt63XmHctfy6d6YsJgY5dbiv8f5CLuCahZfN5WXsPTrHUaDy2xRWbjmHK3uh",
  "key27": "2fRZhYhUua52cQ2aAMNixrzAcz9epBhr1ok4SQZkrsduHzBn7UmxuJD1QhdSqzYsLezz2rRNMNmkHhnk2wLPvpJj",
  "key28": "35dNvtWEZZjNq6HoHVqKUwVMtVjc3S8GHaQHHgqbEFTW7nWZrCh5CwntEWPgwTWEH9Uer5NWLZix8YPs5dAryj8Q"
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
