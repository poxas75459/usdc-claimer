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
    "5SLim88gHSsnH4btYthirExGdGLD5TqMZepWQroL7TUVG3oN74wkL4zUVdxMtqZScRBs27fj9BEr9oUpL9sFqDen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgmnAmccs39NtJatoc2NyRjwHZGsoc7NNmTwtGY7zG6C6BnfWg5MQT7HF91kdoZCgEJG2AgHz2K8ULeTqQop2Es",
  "key1": "2AHwUhG9riwJPkaxVyC4s92GMZmYNdgTap9e2tk39yAE23q39EnmskwmxZSLVt1HgzdUMXaMxZLPBtfr377vqryt",
  "key2": "CtnEfKW9AnAqSXAx9KiMv2wqCVhqXMxe32UTs3EayGddwCi2qQ9L4iYZALRJ4LvnopvwVzRMDVi1SWSqt41FWMr",
  "key3": "C87ScbfSNdypVrPNbQLnMfGHofkt76inKfY3cQ3kY8QZjyogdiKmNJZL1Vf4Kz6VycXfsV6HBdQsqxDmbJZy33j",
  "key4": "3FDxVPXNXgNfvpQxznRuYuK5D6dCxUsa9H2WQaY7u8sx3vAwRcFTofXot1CTr8c8UucsWNbVpQVBvyaQPWd2vBFU",
  "key5": "34cv31JBTH27DshGuKkNQLRaTw1BfLKTbDSgGqqwA6RQS4y3DfmRGgi1E3hFFD3fxKWu2JTknfyrg3Q52LUiCTKf",
  "key6": "5jvSMZjQ3YCRCsJgZnSoWt8fCzBqLApAKWjLpLWApf2Nkk47StgXSnWiuySDHwq5xSU2NEn94cS73aQLiq2DheBV",
  "key7": "2fJ9mCvJbanzs4SACdkDkm3dVZ9rXfZSjbiYuV5q9XuSYX4qDMMkidHc1oDroCCUsMx92RpASAh8j9jBjEQRYxxJ",
  "key8": "5RWggNLEAXJDWGQ55f9M2GFSiTuRN6ZrFUe7HVBhRRz1zDrQBw6cD7MEyCTTQ1KqLG6JnMqn1F3Gi2sL8tCnuQug",
  "key9": "5AYgd6TK8eaJwb7Ji3siJVM1YyvF89vgwTnkHcNgYWi24v1iFmGhK4ARSWJXZVn34LNzbinPHgSUqZaCpbi3mpYP",
  "key10": "5zZR1EAzRemt5PfKAP51GVN6R5q15x7ea4sYJsRKsypGYQGYp9AKopp9X9Y2kXafyeWTeQq6k6gyGcExwuGMXp2",
  "key11": "oKABQWmWTp25tLvTxzjSoQd8BRd4zKsniigAS9E8MhbUEEd8DBCVPz8286QanxNmUBCSK5RZShmTAn9fjr7LXLt",
  "key12": "5w2RJPVj7MueN7vu8kdnzXS8N24aYvr5dWEwdkwBFKRXQJd9W5jhdG4A5WvBPaCksDJkGWZvNSXQJzdFcwKj27ZL",
  "key13": "2LnZAeL4aaG3MK4fYo7U4fu7AxEnZKA2LaBPLskuzFHS8rZoo3fYRyxXY5YccK3pTgmkFQgmgmuDbmwsGxRAV7Ry",
  "key14": "ph14SmxrzNX7QREg5PkrmxsL2mMhaNyFV7XDJ7DCzFNJ9VTd1mH3T6fSwjMZLxkz6z3oqEUhVFZPSxJkcHwB3wq",
  "key15": "3Uo6Shp88CkiM5sZUxH7BpqE5EE3Y5sCpmX8JqeTN2UCjBmcvBwcu5d6TBUEKLeTTMRmX8PAbWx2PABW3vXx6WTd",
  "key16": "2oHQ3PPgbYcf14hs3pYi8V8LtdFonnJvK8ERuCE5hRPDEzoEdQ4G3TRi2s9D5smm5XPSh9L2GaQKnvVsrtZB1jYH",
  "key17": "2f3tURbHL3ZHSQAD4QA2j9sJKshNFe67qeK3NZWoz4AY2JTqpEqdPQjUa8CzeQWmHntxVPz38sCG2BTmCQTKrCpu",
  "key18": "2PEY1Jkk3nb4A36Fnnnnwv47e2MaeiNY9Xxf4e5BkPnZLPBa3JzxxLMujNiQbRDzAzVNcmJdXxSvS7tPPReAfB9r",
  "key19": "2BaLNTLSL1Q1y3UNYUwK9iaVaFizuFUPR2XifZXzbYXwVncGgNf9AUmtF2sgWCAGZ4YtWcEBXwMH6ay3Me6N3XVY",
  "key20": "Wmo9jVf1e2TddTuJW3gQ4Luo3ybLjDJMuUqsQPPU5N1p47upJM1W6JdE32nrrTLyeRNHreVikWf65V82ay8ENkh",
  "key21": "53D9tviKRYcXCEN4kFVdc5bRK1j8uf7HhnvdVQWg6WCTTNxZGn2dcLuM691K7N6WC9yEkG64LuJKU2Nep8rYJgtr",
  "key22": "3R3wi32v8rNJekkiDr5WxSKJTnYZKLxDvALmSLdaBs4xzkx7EUrt7PVupgswqGPafGGabDjncS4cKURFQAUWZrjT",
  "key23": "L2DsXgjDckew4TGxguP4BJgaM6PvhG9atEzQSqD75qrLansMgaZ78JMTRY6NDLrscamvPHe32TTmxdzu2P1m16a",
  "key24": "2PwyyTp4GBoszXhPsPes2mu3JwwqNdBe4S1GkW4YbJpGtcNwuFtM6sXPBW4PZ32Fgxd6EjAtBWdBqZdj4r97NSjc",
  "key25": "65pc82Kk4Z4deGqYVNDsPmmgwTNW6Drw5KJaG6wCS4pLW3ZdUEnS33cEGFrBQzLuhTKxjk6F2P4AQG1yBxk9ZZ2Z",
  "key26": "jjQL5yog3nTiuMZ76gcSU82g7aVe5ef5bAuzvdw2WuPqC4QAtuitQMqEMV7XHRFqNgJVjBPTUWwLJxbqCdtGNQ7",
  "key27": "8voi8PznZAFRJceHyuyvj38rCyyGzXya58uV7hVHKF4JsKXh9CHj5Y2VbkapJP1SKWrQZxVpJRnq33p45U33ojj",
  "key28": "5xe2aDR36WNii4Vx8tYHpNyCoxdmJZscGDD8xUNYQfxywML92dNF7go2foUXFU3kVbsP8SqP1pbwvocLL28ywUDj",
  "key29": "75D5P296pTdYH4S5MA4k4S9a1TC2NuQ7GVtcGxbSiaW53J1E3QxmSySfVuwke9sejpGCvpFfXL1jcx7RPKFPekx",
  "key30": "5sS7i4WB62mRrBkVd28T9t5ufBx6ZYNDF1PJxnpFq4ZX9LkKtC77SNMneJr2sLxa1qDoYUDFG4S2NicqAYNVN2pD",
  "key31": "5XfVXe54HqzHdy32Nj2WK3pjfwZVTJeSZGcaaxLCxPgt7n1cjhkPYbrSGMvXzjgdZJSU7wvf99MHyJNpEjfbsF1n",
  "key32": "p8j9yTC9T5VbV5LBBgdKe2JCDGURj1brqufq5gygeYDy3rh4yc97in7CCGuYemPTaDPb77L2Jo5oaNDuAS8s5HW",
  "key33": "oRSXHKVqKf8vcrbR6t5bbfue9vv3HQhYQjtgysq5rC4qPCdHGs7QZdGViUXGYz6DJpw959TBbwtuRyZqbdLgDPe",
  "key34": "5WToo3BcNshY8DnvHn74UPRE2bPGMfPfdT3TqZZ4KEkYqHnUqDzY8mj4tE5TtN9sxe2V5VBja9ntK2yrxGnxc1NN",
  "key35": "4RJRnQMRvJ1kVTqSbfgdebNoosSzDejR6CVZ9TtXtuEQwff9nWfPsAAK1rZRfzWHnfLXQkVNdQ1yHXUifivTax27",
  "key36": "3mzoNm3BamPBaZXy6B8p5NrXcxwY3degofXiA7Zr6yWbtkm9JUmPsrg34r6hv1MeytUG59Y4MCjKEMfgncLdKZBT",
  "key37": "3xaN61fYWrjEjqyDmsYstT9WAmj52nEYFutHPhJ3EwUq7Gn1x3BSUT77Eqv8PCgXMJZs5cXry3am63ohtBfGeXVn",
  "key38": "52iTQDHkmPSPEgoAt42XsmQWTbfZiiu8TDAbgbTkoXLug3nBeAW55PYmSJhTDFVsWVNaPLcGuZcGF4EsGzWiakLb",
  "key39": "4Jota2sLe3WnumYJGQ3mHv7d6UfaADEAKDJp74PLsx9P7vzCXgcyvKdeoQ4tDqBcASbwFFyU75YT4d6YPtUajhdY",
  "key40": "sf9msMS1L5BR3nDCcYMTs2MtHnh2N2xXZA5YxryMWzcCkbPF6hxQ4z6FCafmnd21a79JiewAuRj9pYG3rUbvQZE"
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
