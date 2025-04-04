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
    "4Gtpw4jGjrjyN8FWELutxG2FztPyoiUhaFhf7G1pDwtcSxf3bTZtCdKJu7tfP8ijRH6qG8z76E8T5oV5Axkvqjfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263NLJg15Z68zvxtpSajebqo8vZgK1BViHBPDw7DvQcAMbxBX9aBdCCyrwr1Fwn5srD1nMJeMq9Xq2pRpYN78Lom",
  "key1": "2fdC7Pkgc1AAMtVJiS2qV7rjZwKECboXWzx7prf8CXQt9yAcZzSzXCxEZt6CmamWUNB4Ntt9VULg97ddaxS7GoFr",
  "key2": "3RdMDGW3Qza3brpFcDHmRJTQ58HKcLHnrZvKcTUZ2vrEwfNTybDuXtn6S94Mjfs1cGY7m1mKPAoanrhuJuZzPJgT",
  "key3": "2SVEWBNRBMySTDfEMc5xkCQ1MRL8x4M3GZeptHq8wkxacW5jSYUmytEUvWGKEnAtEZFcH1Y5nkPCvnfCLTzgY9D7",
  "key4": "5PystbSW9t9Mhje6rbgBPzkoEqXj11iA4vkbymgwnjc38Anh6B157zbnfjZGFVruuAqSXx8LLsTszXDPu9XJg9s1",
  "key5": "2nT5fV5V6coe3ESWHdJ3qUixwX7NHCZBgtDCPuk6cDheBAXmb4WmZVJK2T1PqJ1ELqwtXXZQr35Su254jxxcVaPk",
  "key6": "4QBBre5362yzTCdRKWBYJwzAw9QYJENHgBjGvwVQsV3AXHd4EUKobf1idC4gv5H3rZAxzoohupzF7YRbgK8z237U",
  "key7": "4WBCKymumAfcqbYvkyMkcwX9LXP2NRjTfjVmv2xwtcZbbXXjbTGEuw86rpKRN4kMPpBZpHsxCBmiMTRA1iDgPp7",
  "key8": "3tp5bYaG2pvzQVXpsCBFqHXeuQ4Qbbpsyc8y629TkPACXdYH9GhM95P9RQyTNy2FURB2RFNK1wiAHoLKz6SXAm2P",
  "key9": "8DVgzqQbE74zbojsG5Y5HPRNdWHCAVYBeY1Ew91UUw9UTHCgbbrosopMRisNmPFB5Ft1KwSPxDv7PEYbLMQftnV",
  "key10": "2Cxhgf39iwsD4H5ecEbm4ne4ggYL8UEKaaLfQcPPcwfby4j4cEzFBLzfr6sv2GFx1NWJvYod5upXVide8kbPBhfa",
  "key11": "56mzJmpfegJz2URqzGNziVywkK58bFXYv5dcxbikWKNKJ1jpxSuXxqzghut7eacyeE13DYptGVTCqk2DoCxAtMK2",
  "key12": "ujoYD1L5hWpXU3hDVZhmCmkMq4HaPpButKZ4ma8DUmTXgtgiV1riVmTXnoFZBYVEnpZFVvDHhScAG8MJkgLa9Bq",
  "key13": "3WhN2NRSwyiZBTerNDGWiNaMqAYt9aqRCWaTdDvZWUrLySwVeHmUzm9oU8zrRNRYuLiiSeLrXR7qqRXefbRUBq3j",
  "key14": "2n6sZLSxXvgZY97gk6RZa9Spun4cXzQ9sYi2TVFC86U3MCF9q5CKzETCcNiWcSXzhyJREUYy8onjA5aB4X6qw3vu",
  "key15": "UwNXfEwRSxp43H2LDS3Ax3cJbhWBcHLRRkkU7wYiiZq8JxFEfebJ1WWctXwXBJDdZbMPwD4jsJDi4e98VahMS5B",
  "key16": "5iAxdDHBHG27Tk6bNpb5oJoJQCVgaweB6VCWSgVDZWKk3RmCT2qTCCnoCUhJswA4kdh7QiezexQJQdiDGH31RSwG",
  "key17": "7qGkmJ3Qs3j9UE1CcrsGYvUNoYagQhRgdwYAeHPbvJdHQJCYvBRgKSEJLCHShnREME6pADjsNiP4gZ4PWBrStaD",
  "key18": "41MMpT8PYNiAr6YRnxJqEw3KKrD4VU5d6futazVsSBki72Bcw7VjuDRpqQd3z4boZ9XxxXQPv7ejQhBrYvBt6GD9",
  "key19": "5gUSpDuFY6nac4A4c27gJP8NgUadGGbPBacKZXiz8DXm3ZR7DzvcF48bfcmZrBbKUmz1A8P35wJ1nLWe4AjkqzW3",
  "key20": "2r9uP8zH82f7DB7jK9NN6pM7ceXBaBjVhVGpsYKTsYrQvmLR8QsrnSBjbZqRo7unXZVaxHEyhUL5Ca4MqiDjKvPc",
  "key21": "3uQFjcRQi3GZxMG13d1hh3UUGe1vF5DaLDKbGGgaCb3M746JXeEFQYvaq8GxKmBeoRytUWYSGHiRAWAn2vBaHpKz",
  "key22": "5HwBWASYrF5QSGAxLdhEiWKeFhYC157Rt5WnJxtAHr2UKmLHhxhwRWdKgQ4dNzLwYDKQLAJSMUwzCXsCSYMmrbFk",
  "key23": "2KkNRj9odpaNcwyGTyhcxUr2YigwZinVBQuzpWZGkw3xNxPd5Awwm5WGMAN7VwSyX9ZwYRAJhCcAeAPpAxYbPTts",
  "key24": "4dJRHdLm6DN6t45t1PnWf7WKNy5BbsLMLEoQdwnGLXa37XfJw7gbqsagTx7navMrjgtn1vV3bRYLEGUBFgmstBU5",
  "key25": "2v3FNHhvHdpCd6k8DaFbrTwepLy2ogVLcAfxUNN1W7eW1VjZ7K2napRdQxcXRuuFCKZPHtpCPnnnynyp4BH62j1A",
  "key26": "LEs8jhAtNh76BLhU5NqK9YzzKtSVyoGN2bbyJFHZMg8babk5Snksg8BFDRGT9LVNSSGWDGcuS5T19mPi8wySfoc",
  "key27": "LoW4VewCAR8CwyriZvru3WqcdTaCjuvFvchjqCRbaMhrS1DPVynDuzTwLhZ5e9ehgaN1bttkLptmEgninwGQvHE",
  "key28": "3NfG2f6TBBHmmgS3cpwqwRq9Grs6CQvcs8Da8aCnpsuarZgSZ6vmHE8a4xckMG6XAyHr7cZUSdMLH5gWKdZSdhE8",
  "key29": "ozeSdKszmxuSWrYeq5FEWuACWW49a9waPhmcUL9NF92DnpXE2kbByjeR8vbuCkBH4UJ6rzfzRwE5kVSj2LTuUsq",
  "key30": "mgb9PacETB2WhyTQsRxXG89wfbZGpLErpqAJkXFwitJVHLmqjSZAskwq4qBMCcN4yn3r6CZ1gYFAah11EEBExXU",
  "key31": "1qMszw2FJWriSWw8CnwKLWCwtUqNLsAuf1ZR8JWhTdfGkywCQ3YmkAEWhxzrYM6p1bqmKTiUNn3Ha4fmGMWZvpR"
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
