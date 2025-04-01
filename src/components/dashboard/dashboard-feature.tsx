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
    "4VogDakrmEFLgbJaoANGqJhe82HZzPUToeirLdxWFBYaA1YuK4gv5NPusmRv7djsG4QsJTUtss8oQzQK55ScSPbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8g2PYGkgcNdkctKWQ5FVyKdMeRCwCKDtQPZYte7x2ev1wSnzcWoSttVXVdqbrfCmC8DZtTqbTXsEd24XxJQr6q",
  "key1": "2getFt3GGACoSwWpPsSRP5ut74rjrP4xLr5CWTvUAWTGXg4h9fK6DyrauoAHFNKjUHYycENNGat7jSY2kdNQ6XG6",
  "key2": "2gSudmZ5uAUdGseAeogrftkmUeYQHHPYB2WrSn39oRYPV6SYV5cvXCkNmPa2PvqWs4T243s89eVYbnH8Py1J3MuN",
  "key3": "944ZiCAQGxP15hxqgE42xACo32LrNvsTKwP1dQPiV5D43bGHW7RDnA6Co817DRzKByfuJC5Xkxvs1C63bYaBDNK",
  "key4": "4xDYxY1FU1EKD2qGYaVrBYvi2pTGA4kjYSr5CXyqsdQvkTi6eoj1soYnZLVpbEuzjX58b5bujcoqiYctSmJCX3XR",
  "key5": "3ywWAJuNWN2v8L8spcnTE7pt5HD4eXaUmU7ehfLLnNztmyWVe6w1imdH9fzdu3LNMbzG6GsXvdub9f4MwUiETibL",
  "key6": "3AVqC8knv6EBMW97ttsqPWeAvQiUuKqQEFaHWk3BXANYpzFHPNBAyFUWVpN1CJ2yU6iMnRYvW5aSFfHtBYJ4yGh6",
  "key7": "3pfb5tWZM1FowuwgQyAaH4ydoDjbvegDUgBTbPbQpsc13ZSjdFfoTJnipTpQNDuppPPXTX8Q9cc2V4Y2LdEqfZGq",
  "key8": "2WRcgi2uF8eVZJ3UivJz9nBqG6Ru96dXa5ocBpUxM1My1zhiLJrkpBan6hDnXVxEAY9PNXdt3iCkPhBSTk1FTHFn",
  "key9": "4fuSQ4FtX3SawCXPfFftgAQeb9dqmz3xqnr21D99QwBq6WcSy1vdipmBAZqpoEGHjS6xVtgvHkavvHg27j9hUt1s",
  "key10": "2ufbV9QRPDirBm44pWb4xRCJDUJitdfiP6Bb4NNRBJgUQVAFDezUtcbBDSmWPLx3DCVPsLd364AnApGgKrvYFJrk",
  "key11": "3QjhhD58zKHsJroDr7PZT8uw7N2C2tMzHX7jnKkrGEKBK7rvNH5B2GaCvYRgm4dmKnehXxH8wdkaHzNT3yxGgeuf",
  "key12": "2NyomnwKpnw3HvawSesivcVZTE8SvhGfEzfhNEjc9rFa6fqevMP64q7WMAnYkWHi5UcTZ1yCdX9zceVQViRhguVd",
  "key13": "66wH856iq3QHyziPmPomT5fAtAegFFEKvHdyNWLuMXAdvxwtzgKW4EqkFUayUfkChwW2cChwsmGGjEU8q2YQjqid",
  "key14": "YNk2mfKT8Ccdb8gY9Dgt8VNUam97uJf3pKx7NGxbTFia6twEKTDLtUcp9yZRvhwhgjrjxJ82KTuYoSJ4KHuPzgf",
  "key15": "25oS9nPR63hogUTw5KgKFgAhAhr7VQ2rMz2XCHANr5kZqQNiHQPsZsGQB2JLmY6mG14L9gKkAcBQukFR52rUYzQE",
  "key16": "c3BhXrqWf8x3AQiFzQAh9ThVfnNbGfetuMAxQwYCxhqpkezDEj2vHLHNoB4UaX9E1XVENv5y2wafEbcxXBWSJMX",
  "key17": "26tSXd4R1EZ5Q6wBFY8FgkGGJVSN11Kusd3Y5ED4HCuabVCumBRdT1zhpbiHWzjEUjn279M6i8CGeSpdUWNqXSkx",
  "key18": "4G3kPtZfLerYH9486VxAe9YrZtAHxQrHrtdp5RNtgxHFaZUdWpsRkrkHrGKsUD2FuJaHBHZECuveijrdUqWHHNPW",
  "key19": "3RXyrHa88vihaX9F2mHUaBoTq1aiP7Ziw8TBFbFJn8i4XhvJYJ1WTywDPfNuv9gTX4p893vv1dcaD6wkQnMMSJB3",
  "key20": "4cwMv9vR9zz5MeRmXAwg7FiJhyYZBkJk6GY98hLrrvc8WsbTWPReUfo76pnyjnrB7wHPih44qUaKgV7pQ5w1Ardp",
  "key21": "W2TiMCNn1E9fsexKCjE983cUntt3uwxhErPXhfLvhEKgS91fiREHtJ8Qg2HDPVVYU8SpyDBafr88o1BSjs2pB2T",
  "key22": "4w8e9WieHiDnyV2nYQYf6SbFxNtgxrG7oAtHruYdvYA3aRS2R5Cvfy9smzc9SSi5XKL1EUWz8BnZQkcc3fEyWEoY",
  "key23": "QW2igzhLJG1CouerouZEMZzz211A8Zy6s7N1Nrm1qupBJL2a9t9gZmwq43veBtLChcDjz1H2ifaf9RQr435rikL",
  "key24": "4pm6bB6VirenTEESzLZjCWbUtdErkKRtCm67KWt1H3uDGcJKQtyvgVft6cV8pERKPwv5i7iHnYgGKyuXhZyKTXkT",
  "key25": "5rBJXqurRuBoEnfZ9NqowAq8moqjzafbviSMZzpxvbgttH3ULKQoHCLLNMDceQXthr58LHAn9Mxr2vniu9iXbD7J",
  "key26": "3E76T1asnwAU87fVU8YqKgvYDxMzr2GKG7pejy59xcwy9a1GA1AMCujQskJe2kdbsXFy92BXeYDtNADu4AGRyCy6",
  "key27": "4qHkGZY7eGZPhUuJtkinehZfaQT1AB2YQZAV85YFb1zKH5EJKCKCMh2UUyLoRE8HRY7dEwqS6HYMjPQPjAuYN1bT",
  "key28": "5qCCcgYanu3ko7Wcm76M26zkb1PUmiJzrihTXxoHZdwomNe6yDqLNnAkFcPtd8T8F4BDwCjccoBDm5Ttnq469yM7",
  "key29": "4WmgtnTSaByhKcTm2SNHe6d4dkvgGhW6P8WhQeCNuLPkczP5c8knWneYBPzHsyB8Lrdyg2tECqTNuggqcEYLE7jQ",
  "key30": "5bf3ihjmWyhJJnzKkiGo6whYc6Qd1wEweLtifKiJCQPsZrfVZ8sm2wuc2XyUuNZPvF3RWMXX9sM9hNPzxpvbspmQ",
  "key31": "2bJAgpLTwp1oXiFLe82aLK37RmmpvuKE8Ebxn7gugNgEXRAXxVLZbaZNXnkNHbryEUL9Jey1WQLVjwTXF8eG3KWS",
  "key32": "4WHvW9NniLeUtzNvja4Awa4Tik7NNC3WJZakLAYy6yugHPTrWcy1ntTGV5YRJuenaa9Wav9YXZmg7gbvQgPpARrZ",
  "key33": "2DNTvkrq6rCqRMXQC2w7UsKrNfn5AzomnDaBWECWFXxXiFQp8nZ86Dydux67WBxXi6BhGkM3yhE2FY2mbcnpnBTW",
  "key34": "5FGSuPT4wgGXnd1TaJ5mpm2D2hjvBtZWjqXy7E9YasMkYAspY64zLY49bqRc4deE2nLmq3BTmXkc2v6gUtE26yzT",
  "key35": "4CZ2ysxdtFFr1LvtMtxv3a8PVeGevwNBRYN4pCE7XGrs9NL3PFdheWHmt16HoBUDftL7W72Hcoofg8QgzePGu1to",
  "key36": "66gxv21TTkhY1HJczHznGSKxyRM98VPgKrSCRdmViqarRSCprtK1CmQdGjwcxLLXXepMn2fFXotkGRChcYBrjhXZ",
  "key37": "25kFBn9qp6MKVSeHqE1wSne6GRQH77qBRakJjU1NwyS3ab6wo5zzmqfrnHkFDuEnyZPfLHhXLGa1WZCqMXq32xm4",
  "key38": "37NfpKhDUGGigL2DpewpXjbYzHA12LavW4Ek41iykLStf7vWDKzu4TPxik3bgDNPMjk9H6jnJoKctRHLowTddWVD",
  "key39": "27LFoZNX7xQcPNyGufnHE9kqxrYCPPNoJDer2eJ7BP6BrAE4PVFpmDhE7seuCXSLwTZCnCSPDq3CGTzbeVy79x2o",
  "key40": "56DGKJMsUrHhVikiQg2jbRRHerXasq9pb4Mk8jbHWwEKeBtAdXjVzu3cjZXBHbtkr3fzfM7119KdrvKz5m2u4q4o",
  "key41": "5FcojEtQkbtv6roS55L3AQXZibss44Cj6Y8jMV6C2mS1X8E9YAG1ujXc2o5Uq7D5ahQPad3sw3Pev2v6G2RaqChf",
  "key42": "KpXkxQ3brGFHZwvcwiHTt82bmU19MXWEQ7q6tvs6PxxUPpXn2JcexBMkohoErW2UEvEJs5JLFXsYwEKrH2akhhx",
  "key43": "4r4G5tbwqhAkC9wJmiGuKh8Bv6KUTSfmfkK8RMdsjKKmjUkWKiRGz5Nix8h2MEFVzfo7AfMHZHxEsJPLxqL5B5aE",
  "key44": "61dAM1TBiULvWjwLGNGDmMvSep3MQXT8Pu4xc9SxpFUVRm4HUjyZ3QYzdhbvvJd1HNSrUofdoixbEKkNwo82asRj"
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
