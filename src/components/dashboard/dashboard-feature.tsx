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
    "3U2sjYgF9o2BaMqUxCwvu6uvFhnV9y7FuZeM9a12sMTW9gUb77wrZA3eZ6bQcEszRebxHoG5BpfwK7afKsyyHk7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48com4Ba7C7tcMCbv1EfNCXXAoCoXcGgkhcyqNPpoAc19vLBgpsRZM1qUBTPFP4mv8L2fDc8kAcVxX9HFkQRU9MP",
  "key1": "2QUWzEnLteCfDc6GwMrLj2UtFRbuzsfi2TWe9SLpHYSvnwSJvJ3bCmY3qYx9jq19ioZM7DWz6KLD4SMt2M3Qv22i",
  "key2": "5zvSPNxUmU7dJr8mL6RzUZwgsqdDguYdLdRWsWsyi5uuPRwCDsX8HacuoGBHjQSnkSeb8xAMPkgj2NyeQVgxPJJc",
  "key3": "p7mXpiFTFEs49rt83WByXGrsPZrkcA1G8fRKrf9MpuqqASy99ozUBu5NfJYgtQ6crVsVasPWy2kdUgVbw9hVs3C",
  "key4": "1GFxQPt3H3mt8uxnvpGQDgUPHbNacP6r7JRicLGGvEMd7SimTqsf2FHTxmpNwXKCT8XENpb38bp8Szm7YYKqUMi",
  "key5": "5Rp1Q64gbdwg8Sasq6eeTSZpuZGW8wccjk1tes2mq17C7LaVAFEH85tbjBGFTRi8g4fvJCZ8DVpsbwCJx4KTQ5KY",
  "key6": "2mUNqSBBqZ6A36F56T5VL19mNxE9Nwfz3T7gALLqfmQyF2DmVvLdq7g5X5WViVPTBkK78n1dA8xCRSMnHcyXsCcg",
  "key7": "3aBFPhHjtNRcmdaGroX7JkpEVCfUq5iZ8FrujgfMQy4pKsKe1tGfnmGQHQUfJSEKAUmX25qrZ63cTXrnPqEBGdiW",
  "key8": "3KWuCSBuCFBEvt6VnJeKKHFW4KLEifbG9Xi79keeJLUWcij7TFVsqHb7mPueBEpmWw6EU2A8cV2L3gqZhWLdyenD",
  "key9": "4cDLmtPmCmXay1F5kBvzhvBGTKunNhWews5gyABbZ5PwpfyCZLp5qi4esHzr18uwcCEP8fC7HbFnC6LAt1gtLaYv",
  "key10": "51ruJs2hywhS3ufCudvQWyw5bBmwY4Yyf3t8p6tyyhEkxyQMM5e3qevxsRJjiRUH8GBMBBbyAwug77crhkrx1ujF",
  "key11": "4TJHWCnF4Q7EejXWzwsVnP7RhBxAwSH8Uo1XTdQBa7aHfwPU3kqBPQeSPfTXbtc5daoj9wJLGXP9uuZxvgra7zSz",
  "key12": "2SdaXDVtyBFyjstwTWjwTdPTfACBiNGD6SDMHz5Y4fAxawbCu2Hr1jZe4tUdPTQ5u2pXgny5ToJwEYubLtNgBGc6",
  "key13": "vNeLdZyt137KFXHEyncg5HHMdNdTP8V2w6jn4EFDZudoWZevTuBTYfm3oXTgSPT5UpwYaxfQoLUnYBB7wW6f2kE",
  "key14": "2k1j6bFjpcVQ6sYcnu7JyG2YgQYzgSRctvcKzmJjtFGiGaqm5pQaNHjXZudbQb23yCnY3M8bjASkidyfYMUTXS1L",
  "key15": "3Au4jxCzngd43mkozYdoamnkXnsfRA2t2D7MTvoA6mGi5bZE7xk7dhzvxL1xp5PhxTeDeV6Q6cnmLnioXGCkkjDG",
  "key16": "36MpdGL3dLH8zBEYkYi5fWTtfxTQJaJHFPfPuwCGHusFULoGsSBxYpsQt2yCvKgGFYY9BvxybbGwty6vRhesQVyT",
  "key17": "4QNzL2ipzEbtrx6HpFAetrp3ctZ8ikLxMmaNzPLhn7BJ9mg5ffAyAAUkUHvveLu3NYGTBG87mP1i6azZMC2ZjjK",
  "key18": "44pLtUqDYgqMvhuZzPjc9yaJWkjWfMHEsEqtPBtFBLKaMGFqFHkEGiiqj42UyEFch578E7514ef4XS1oTvRSsaKK",
  "key19": "3hmRwNQHWG5HREPSrFYgH6HonvjxCuMs7Z9Dkv6iusENXoftRRJckiwdKKMZmcNKGXnfBN39reGHkrSzgBsAtH67",
  "key20": "4PiaDW4WQFxmAjELbnasxyoRhjGAuP5jAVe1jiMuLhTeCmxsgZWuXHTNVDtYw8AgJeDDLr53Fxs3h8HEPfhAWm1",
  "key21": "2Y9F66ZAvYtDiytzPRHNUeoYAaZxtSKyRvnALtAoyqF9rveJ7G9fpj2qGKDqUgjFmYkuQsn58EKmg83BD2wMuJ5T",
  "key22": "8h53LoqTfu1s6u2dWkmVeka33dBRTK8ThhyS6GPHUv4HNvku5virNWWxcfUfhweindM3eFy4ZfVxWqH2A45TAew",
  "key23": "4M2SboWZ5XQwunXkGjwTR9nsiArgXuEtakv6VMAMLbGYEDX2ugph6NzhMvqCHdEWnN1kQUUMUcUP2umsYphVP6wS",
  "key24": "394cMNo2t7PCiUPfsnhH3ydAUy5u47ZL3XXzMcQg2UzQZgGQKaLLBB32i6SsGDaoUKg9uTAEwq2xS6CJMrfTziow",
  "key25": "5Xj38HaY5y7q7j1xuHgdkZyfzZKLPGmwNRopTJ5mXqGMorXxUErdunFZ5X6VcHCZf3pTbRCYRXm9BZYWAEz8mK2L",
  "key26": "4e53pv7JjjLVSrzrNdsqrnX8xgVx64CmEj2SNe66HBYqCdQ9JKfCDy2pijpyNNrXRvLaTakXmxFwgeUsA7DVM88R"
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
