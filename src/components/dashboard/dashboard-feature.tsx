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
    "53FxjgeFJqCS94966PJ9dLmhJD3Ah8F8p5Fpykq3yb4eg6HzxcXuhWdkPXjdFC8LGNmaZZinbA9JNFwrGp1WTEmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMAZoUCQqotakLcP7L6sPmkQdNkQhCXQnzVW9JR1dzTgZT6Sy9GxHoAfw46USDxa24Z59hvdWKhWVf4AZ7a1Ukr",
  "key1": "3B1PUBkfAyDhoy7HRK442YHEki74DnEyGSp1VfSAPqjP3Eu52r58MCnd6kpnoPPT2ukbrHTPnrxnhuynGxciXMKw",
  "key2": "5HXcdFEKyAeTDu96WW9wWXfdK85uzbUdJh63kvuuPQxNPJNJ8boY4Ken6RyZs9cgjd9QcQB6GJH4mHfxbU66Ryny",
  "key3": "2pmwCPBZZEyP3hXjQb5XYsnKjCrefp8xsf7vKaLRuQx835mnr8SFYQ6kNtpLNPBbfbm31kbVvt4smcvv7m13Exvx",
  "key4": "2bEeEYR979qRhU77eCJkx26244BxLtuPZ5Ec2hy2h5PvD7VS1bZzTAGGVHt2JxAL1ELZVpkYdTdpdBLaKYq4UuNt",
  "key5": "4uitDWKPkWJ4Lq5HeMk54D877ThFRbAutqV5KVbrXfEQ3Bi62mJeA2QkcndV8WS1zRoqu9whQUicaLNGTwsBRGgb",
  "key6": "5Bji8M76HmSMqVXNSUSXzBHx2qib2HxajNdDQffBNxRTM6WHzkSbsUYJ8ZZqFP9hzJKJHiJ3wr8USacDpDJUDgwe",
  "key7": "SPVvaEvv8CMFxQLLFc4HXznb6Cjd5NzzdQN2eZiMzb9CFCD9AzLSP2Z5hzwN4NAG34XghQ9De7Up6rcJnQztDKy",
  "key8": "53NXG1ze4MTxpTAVHSzeMFzcehFu9p6SitNTzaJkiWwyqz1EU7SnSimo9TwmuHGHR2XG62F6iGdr9suJBAvBnA4R",
  "key9": "43qCqdMXBjAo6iVRirQVc6W51Nz5NsYNufDGJAz8wzESDjt9S5PgyjFNiRL4czkQk257ceW5ACZhadKboQMRG2Nv",
  "key10": "4Yr2fvoMNsVwFeTH8SJ3Bu4qmgVcXAZesorM8QRZNmb2Fp7gg5VRPJfgSuSbrvfdEa8f5Xg9TMCpTHnHJQPXLjND",
  "key11": "3s3V1xrnepmLUcH8y1NKyvHHiVEduD6uPEQFiKD9gfna5CTPWNKz3M6zVr2ez7ykJffYwaPcS1VfEGpBzYsyfe4n",
  "key12": "4KocAed4Ac3b3fgLN1T5XV3wE2fZff4xVb3XBq119W2zZriJMEJDHQhRChqUEiTkvSvoioDffvVqgsyDj94ymjwi",
  "key13": "5sE4s9j6MKXzCQpgMXGqGQCuB4qs1i3iDghLdTfa5S3kEv5Yr4QqjPniXafeF5fzzzHD36D31nHt8MHUGrRgnYan",
  "key14": "2jTYeZBaejafxzSTJXvzxrTLQ6HhAkDnZT3YEsg2fHLwCRWifadHmKbtVtTTtxWecCVUWK8FPipi5oHFMybygy1W",
  "key15": "65QqKGQgt6LQ3v65wzdwrzQAGahp3bK7bTtrUYzWBoexFw4XNtrA6yNMxU5TJe85ZsfGUPm4fHGXmcCXjvTRBYk5",
  "key16": "5KWZBtDXLXPHESWwZdajwh6CYYiW87BVReVY5ZtT57qcp9xXYn31QS4Wym5DUZYrUsMGWJ5ZMdtgvRrVfWc8YLM8",
  "key17": "59CU8HPojekwSz9mi22uGCgohw9kpHqQC7v56K81qp21TSAAJTG1s91KQ9utwrQtMvZYt79iTWCymdJ2fvfwZm3B",
  "key18": "3EqBJgbSQFqXEmSqofxGRbrro4U6ZepP4inTee7E78F7onoHp422zsQaD1KVdQWUgjouJQDYVh2UFMCEuZy5tE4D",
  "key19": "5McEz1QNKqukp78FAcAiGhnGuHQpoEjpBahAD91ZpJVQ6CN2E6DafcGTEyPycerGW3jZBKeLN2iX1xeWMXTNRWPS",
  "key20": "4kwEETE7Xu1qTtRWE4q28NCeD6se9KfPxkz6MXAAcBXs9pLNLYYcdegcRk4BtCBg1m8mJYN5nkRCxbRweSDMP15X",
  "key21": "2QNwskYBGGxFniE359ysnchaFsvk7W5fQc46Ud6pVF3QydmXEGXh5eLB6wdMDyw6Vr5C1FV921ZmZ4pK6NWuhse4",
  "key22": "3KJLdUyLQ2EphTd2Mv7dMS1js1y8YMPX7dmNEjybCgonqNDK63qpeBxD2T8RXvnbVYQU6x7foqzLKjqrqfTwxQPA",
  "key23": "4PvvER8cRubMTGBPLo2Fkbtu96isYxe2qgmz5WunFV161GhQpF5G8ymLo8RYxV5JWtibo1BPy8hcSuH9yJwPdtpz",
  "key24": "nGu1CNj6j6XB65LetQv3aAshHSzpu7u3KksrkgFsaiuogygadBdyLs7di8Fp1goSYdymA4bSU6tKEVX5MyARk81",
  "key25": "3L2SaycWx5FtzdYt4haXH1G5Za2XxPFnXFKzfvpaDMdzMXoipAHhL4agtt6qZotvL2xcd1mERiW1eoCGgP39zx1H",
  "key26": "4TTKn4iDzs9SBimHma67e1JngUXF63JhDN9ga43ViJqp6ztNwKcE52vtoJs7v2cjwwr9FXGTHu3TiBWdG4xQdtZz",
  "key27": "45AHLoYrY5WCu9DLZMK32XcQkL7PtKmcAEbezozmp3amJeifxmy8u3UpLo2we4TCBwkqJi2LpsQ1Gm1re7yZ6pHj",
  "key28": "3J2roK5jsWcCLRZ2UJVPjLnp3MgMkpQyjDXRwaGXcU5X5D5JA9PV6fhwpcrkR9TEW5s3b1tBSNnrHYtC4pFkiREw",
  "key29": "4cWoCriFgJR2sireMDEkSGg35PhSj9iShvwaKMZAkyU57aEbS9A81enm9T7GBa8r2pp2YcZTtHaP3Zg2QxUL5Z2F",
  "key30": "MDKU8GYdCufByA5AybURScNxAJgp3uho6Tdnfqs2tV3sM8qg4Na74FjXmYWyFeSkZreSWT1qPYcTW8fGdsm8Mdo",
  "key31": "221CUizETA6yqxhqbDAHX9bvivVBXE2DSAVWaUz3FV5c9k1aeZtWivigujFga559EZMaS5rqyQ1xhuD3aEQ5gvLj",
  "key32": "2yNhgyZrv2p7sNABdVrRzYTY1VbAvWbzyaMjNiQXxiXiRLQq4T7q2HBZc9kw41tfbbjaAUVfJ7jBDkQm9PHmfqY2",
  "key33": "r4V5Qdcd8p3LRB4hS2NSj8GmJsb8kqnE6KF5BBZugAUHwqD1f5572jdKfKG2CYgeyzfSMEDXL2uFaZymrmeYTjU",
  "key34": "2W5pNPVFzQtg3iuKXYmrW84tLDd2S9umZszZ2qgoCJCBDsBrS2HTX5xUJbauTLdaZboh6jD5a53HXXnxo7Vc81Cu",
  "key35": "2F1LPsXpX6G7PDtjLDMrCpXh9GrD9XWtchds9jcoKgmSjbsTe6wFi9iF3JFcNFsmBSbTQ76oedU46nwWzWm2U81n"
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
