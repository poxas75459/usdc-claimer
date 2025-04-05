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
    "5ucYD3vAmQvaDUFtsuL9zxLi4pJNrxsvyG7HaKvad3EiHwAeBFeHtpwBKovyruZyYKQwrw5iopYbsbU1C9MivJp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z9au3uVwzrQi8L8jEhsmS73mL2GRZnFtY6F9bWuww8qW7bodpXce1CtmGyFjFfTh5GGXXjhLPGx6NvyeXvyGhuZ",
  "key1": "3Sm7HC1ToKu4Ekerpjqg8AkozzSKJLHiDauhKcZxcRf5wHJWuJJNAiLJr35cbaUj5x1zvZ7s8C6pSVvj2wpWfUWT",
  "key2": "5qvrC3YaRdP2tNEjTeGFfVa4Xp47UrYbWr6TGEw7wkdg77Snhv4Ahfhe9jMxY5XrhZ24nYSdehJNW1fmYtm5g9F1",
  "key3": "Myg5aCmooNjPbyYhLpNXdtV7kdmog6W7N15N8LYCAvAqTNiue4Stw4tyr3wNUmejZM5sctMFpvvdf55KeZRipoq",
  "key4": "423xmRWV9gLyDKs5DbfxMaArzjNg7KBmCkczjK9QYc1Fv79CpykMcnJi3gnTdt1rEmvUvBuEXwyRaV4Y9A1SFHEH",
  "key5": "48z91SWsJLctFeAr46sysL6Cuy2mgY7QfiRJ3ibuAb1V3K4pQFfjzVhJtGQz7nTsZfQQiX86pd9ii1e3xkFisPDg",
  "key6": "5SDQKNRmwn6ydseL6xrX6gwf1a3ooX4ZXDES9acyGBBxo5wpSMDLGNjmoCTDvYG6g8E4dktUzHwciygxnWJaSiaT",
  "key7": "4bPLaMvJZZNF7K592nyU7b1cjkScQFRW1jPNdXCpDFNLygcaereKPZ3u2CYcFtvPhU1SaWfd36rm2LPYZneHhnVV",
  "key8": "4Am7SAuqSWnb2BRGPH6UMfaE1LNdFTD3ztBCwKJaUF2QT48RGSvs3jv5Dti5JpCh59iFVYqRJEEq9wypjLizANNt",
  "key9": "XqEMDdUfz4YJ8FcgV6Fjy8sN3nWrHHT3pRR7kHWK34bm7JYBaN7FJ94X21KMFrBgS5iKnuWqqXLRY7CQDdaBM85",
  "key10": "k4pL4GV3J5LPJ3LMgfutVh7Th9Vu5ydP7EWFvB4QCEUZAMMDWJnwjbqYSryrbYbjEzKMzo38VM6uyC3M7sqrqdu",
  "key11": "3KrEtQw6BffiwR6ZeWGTssB3roP2qgoJECvyiW5bf9ocrS5qDV3BMTTpk9XjKNfCrNVUJtw7w8UmFY9XFHqFfped",
  "key12": "4JrfG7SpPLwLDvmgyT7PGYo3b7EnkT9hnvomyArNDHuYUrq1ewr24J4ytXf7oKXEyNi53iVzYN7cHFeeUJEAjGza",
  "key13": "gmYrb7dYrcaKNsGDQQgx6TU34xk6xCv7yquKpCpjEpo7TW1uVvR5Cvfo8PNZjKwHdgp1QbJEF2cMyHuxKJFuRWN",
  "key14": "2RqbVAF45BDrRAiUvdFtaBYmeiP3C5TvZ1bvKCmZ8yn9D1intZbZB258d5vY6KPySVrxntEiaMMGwTPvtNfx2mB3",
  "key15": "56mdGZsx7cqi4mmycsVetL9So34yAYB98GofXywS7hcwRVvq2eY9cgGQVDY8w1iXhqf1UNeJZjkrRWmfXGYdag5x",
  "key16": "3QFckYrfKA1Yvd57jkdS83C3jPU9NdNVDCMr4ogXiYnQKx7L4nEnkSo7cD3MdteTRYmFVLHpmSjM8RLe5Zs87XxM",
  "key17": "48NKox2g7DDoNdCA1i9Hpkfs5dgzR3sTijjxEKfzJjZYBkLVUzcMAd3z3qQd9Lo2gzbrXoRUZweCsC4QD2Bxtm84",
  "key18": "2ZoVLFGgdeg5k9pUZtyAur28GBfrR3YJGCKX1bAGnhnwahnBBtcecoDCi7SK2xkjKqMepsdWNRF5rPTvyuEpaKGH",
  "key19": "3u2SCJdkdTVas5s2ipJjQr77UDLhMea1owWe2st8K6f8gka9Zo4RztjWsQRCKneguR1PtsHduTDZdBqoeDZyTQcE",
  "key20": "5jsryYgqxZmdSc5xHsZGiR6MrwsAWz81PKkvY1u1EG9yoDUuh4MkkPc2vDy1eQEstTUTQQCqxfWSLzziP68Aj4z9",
  "key21": "oL9CjgBydEKx8PK64csezXWWuuGx1uLUGsR57UBVfzoL5GCiaV8WmzCimzxQ93wLLK6P26Rar4XRVhvbti8fmPL",
  "key22": "ydmDrKaPdXaJnZnbKDVEk3jXpWV4vCscWJozm9gAGgAha5ifUizkDnXt2TC7emaNDCA8XzLGUC8dAKr77xGmc7d",
  "key23": "5XS2pkS2guBJAqart3qdYjzETf92LgkHsDWAVgKEkBGEixYLZb57rVqyDyCBqeV7Rw6V6yZze8MZpAXKscnJk6be",
  "key24": "4Uqr3WcVZoohPHskAqDMf4a1BGwe4qos54RERE9pjTx2ejEavBtC3AaFDUPJ9sGLveEFHNn9mbQ99iinEU4kJeXH",
  "key25": "5ucpMp56U8QVVNx5tD7guNx2K4XVQFPSvmBsdwH3qutZFRsahduWpvr9kKdjDuy7HD6gHBmFSf2HvEcdVVq7m6bZ",
  "key26": "5rQRASxmvmN87yiUeYShh9udt818V63mWEqAPeZjCmYAaJPVJJoQ8HRaDAaNeX8KFaxJWdETQYterdCJZgNSqFB4",
  "key27": "5UBZeACFHUNVNqwudFJEwgUg8oRXVJrSGdNfSBjB1LAVU3qWSyEfHH2R4JVeqBZx3iBtqyfiHBvTy1cbKJemWHdK",
  "key28": "3ND6HcA8fqwDd4e2Z4tFJxBVsYrUXNABnCaEinZVt6xHE3zQsXevvFwB8FauzqXjfZ3e9zvtZM8njJ6V7apnFexD",
  "key29": "2qVYEeV61YDB2Nfo5ruSTZRnoWA5kD7R5AsnhZgWSqBL8x5bNqYsN2bvgKjLth9NT3ULZpQPS9D5ouBhoivj3beW"
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
