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
    "3U28mV78wPkNoaXy8CA6f4yD8i811xd4Q2wJnT8FHyfkpTsL6UPSawwnP2EBhhbanjEANEruU8KKkpHuy2BXMHjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48V2upQPfiKTPDyKDM3L1wqC1BJrLvSrHL8qGiSjC9Ux5vuj2JzeR7LnQpmT5sxLv9SGEe3tVRitNt8SmhhFdkVn",
  "key1": "4L51ewq66JbtKvaGzAYXWsyhCVSjQi6hWmeGUdGHuinyMekjL9SKwgzKYiwkZTk7ccTTrLvzuNEg2dyX5mqq5w8e",
  "key2": "2QxvZPTestBy6P27Lgm8mSkk7uSviRiWfz6vDLPNoi62iyMM4zejciKWKHs2bBs3M2EEN1qVJHd428WfT6TWPvBd",
  "key3": "EZidv1mZ37uy91S8sDyHr8beNxNmWAYKW53YBddzszSw987YMw5a33mENaHk3AhT2oQeoRnGy8iRV5sRHrqkQNA",
  "key4": "4GjsXCSnVHCF9nKqByHTQcSCwc6qQbXdEMXFmkccPK41EeUSwMsD9eVNTNN7HxvYQLqTAbe3BSLCHPx7FHx3ioSW",
  "key5": "2djQFsVq8LpiopBdEwEf4Aht36pSQF59ybVGkYk32WSm1QTkrieiXmvj9DCVcbxDXrEhGm7SBeNJLaYAH3BhJCwi",
  "key6": "3TTku9RUnC9Bs7sY5t6ALj2oa1evromKyVAxn49ae4den2w2fgtb9jQxYzD6Btwx4vDyZocTSQ68YG7h63Q78Uvq",
  "key7": "JkfrS8w1C3bw8P1e7tHueMk5TpegSMvAbNUiaWZnyTx8zFfpZaFuFHe8VZBaCgCcPt34EyXZ6X9VM51GoRyAYnk",
  "key8": "66z8psqUxx3WSJ5mmN9umLDNT68cuKd1BN5NZwa7ofVtvnKoGqstFwCiFSexW1Et2jP6mq8L9wAbmnoSMztado5B",
  "key9": "4CsrfTgVCYAuhKPteuPSUdCf2ng9iwSE4SCMhmDwt83UEBpQvJWrD6wE3473D8bBxtB8CEAnsHWXHpn84Za7Hz9M",
  "key10": "67HZjD6gsH4Yq57Ncwomj72dnkCPxVcDf6sdsJgjVEJZa4wLEFpkroE9aNy68K4WPXGyMw57axMYToXcN8bvcXRN",
  "key11": "27oYicezL9VPBBexs7WYyKvFMhbNBpgywDQinqbCkq2dbSyEsRD6PDksuiFSuPfCjSWuHDnyQNxjM6EaQ3aCUoyH",
  "key12": "KUeYrxLzMcL8NvzJZWMMzu4SerNEHCBbHxWw6tR4CcnvijGrtKQ2P241hVkrisxxiBpGDeJEqgTygrjLo2MvC1M",
  "key13": "4D4dJPYHX8ZsPTRvdegabmjwcaLGLK2jkeeYNJBF44s6q2ch2bHZXSsSQGCbVAtarQs5WyxDmWXybJoh2zkRLkpH",
  "key14": "5dbgJt3vYijSkaMH6gG3gLVNsDG2wo5aJLkUookZNRJtuhnyLNbe7Qs2BooV3JrJev32iAyoZWcVKsuFEybPTCF2",
  "key15": "3BdqPecvJZUtnFAGWbmPYJ2EKQEycgpQtJnnX7rHgPtjGsvXySXVuUW3gztRGzeUFerWe2pBoedF7JYP995a4EhF",
  "key16": "3Q7x8ZfTu7qMNSK6ohnsSnFC3q1qAFXehbrFqmD1EqMTZSqyjzuEKhgg3DAYwW8E9EJj1MzbRMkxduPLJqYUbjuS",
  "key17": "4BW5NrC9P5HctEqK4hRsrKzKdwR621Kykt8b2bhj3DwxjT71p4i5jygenPxgAXybVa64zQx4gqoePjjiX5yw3DuB",
  "key18": "4h5xWHxCWJqPdZdPTFsJwqbWjwoFPWwHUScN9Jt4edRruRTCHSxfwoFjrMyFcPk51FeB3DbeyWC5xpCFarzBBdrE",
  "key19": "5Yh96QsQFtWV2Du5XkpicyJzFi5Coemn3w68LzeSBzkc9B7REcK8SMH9xCN6Y58s1NqfLimR7oSnLbMP1KRCxLuh",
  "key20": "RMFUHx51uiAySASTpEvr4mL3mMrN84WY3cw9eu9ghYNwCa7ndTzK2CAvaD3KV9GH6PXeK7zfCMbPGN4jcd4PYdK",
  "key21": "4L1kLGFf7rDuSBWfVe93Np3boXAE5R6xrHJ3GuRQVfnxJafkFkPpuonyjyHBWDupFsQPK7iXi3QbEcgZyM4ydb2",
  "key22": "7zQWdCFw2vcP48SKpE53otcYCCdV5hQHarLSXduauE9bG69Kk44w3HhirwCBNDBuZ2c2QXTksvFKGmg8aoqkLHA",
  "key23": "5UgmwFPJzHz5YhThhrVFsPbvUmbR1jRimCTpxbUj8s9vcARin26XtuepYfqpaZtvBNoXmkXxW3xzjPdQoqFg8bPy",
  "key24": "5EmD9fD7X1U1ZKjxrEMccBv5iDF5QXaxyveaxpzVu2ueffVAyrdbvAWYMUm8a1J72N21EABPFuc3Hgq1azuqmP2j",
  "key25": "3RcC4PUMVnd5PB2u2iWDLEvJ9AbuMRAiP3AooaovDbra73coEDveh3Q7MbihGFEmSBmRWLGZbDmKe2aWmMbu2BSZ",
  "key26": "5KRRJYPrAArFE5bSofa69vpW6idiUEDmK1pSCTgNvEepJvxzriAkZsFb5G7yHja1MKkZYVoGLRJzmjh6DLc1u55L",
  "key27": "4SR7wzzooEn33eZVpaZqhwKMyirKUrjyuvXuwH49bPNacffcpUuP8fYLbkV5Fe1zyhA4PgycPdXrxVvqXfYuW4zS",
  "key28": "2n2FmvKEu3NSwmhBTtksJxA9p5cDggUxdy2FoFWS6752oRgFGschBYL3XQT1VPVHLWwttjMxL2MKRFDftrrfsqc7",
  "key29": "5cNSSLtkTKDhKR3GR3fJ54NTzrdNq9oNKTXXTZEc2hDeZTQbBEMAwm1NxV5X472sWMndoUJKjxJtKcccaLu4GHby",
  "key30": "4exuqxDmcQy9N3iftAkUuDPYsZvqcGWgdsbNo8exDmsasAy9caLdakHogREUbd5JNiXPrwg9hVDPAMmvmZerQqMk",
  "key31": "2WdGRA9VzGMEsB9rZ68P4sjJjpwCFvag1aaR9jkG7FCvj9fkjLT4fcYh2qjBeNrJAxyopZtg5nUdavpF15m6JyTQ",
  "key32": "5Yuk9KWKXMfEAmvioXiNa6RmD7cfp8LuiMPGKqzH3a3Upj1k7Dmwa3doVGs3UxdVvXa3oSUaa5cEwWXz9ofw61K",
  "key33": "3PBFy7fAsFN9PfcnNA35RgqtvKjefATei8WmmztZiVn57NLv65fkdHPmgPokX7GXUFjYDG31WcTBoGukQLzy9AqT",
  "key34": "C4svmeeFGBW5BfDRBQrbiWVBM9qhyckLfcwfchHJ3pm8wbi2qd7FVpCXxr8YGNDa1K7NKS1BTKmWPqCLZW2X6YP",
  "key35": "4AdzqDURMxDHCBoXK19FnU4hYNfZhnA6y2McSo862xXZfDfWs9utuJCFV7FvL7dWVKzummjUeJ5CdAURqPKdNVN6"
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
