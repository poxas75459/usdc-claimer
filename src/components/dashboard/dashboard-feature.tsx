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
    "5Rn8xssyacntzS2zcZXAWpT4VFJB7g9i9H6kwNc9zYQZHMEb2NE1ABqmBNPcaiWk9faq3RpG4WCmTczKtghQdRQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GurpJQ5yF73aNLirWZ7GGUCnDVEqN69DoXx7KYiYbBNqzNy4VjDMJvZqi14KBJrjt5zhRCbErk7syRJm1Wwp9Hd",
  "key1": "5My7VkhEb4JBVkuzMXBYx55X4g3ZV3mChQysmATqcoDpqnLiALsBTGf8prbyLprmbbAMhJHxCZjUvjzEQbRGfiTM",
  "key2": "3Lipc573CVYcyD12PLjomdhwyrqDaWj2B5qorCTbmF29HjwavLkFVxSGjotzWGMYrzXA4R8uwxgnEgFvKDqktuuu",
  "key3": "5fEHWhbzbq1NEEXSoy4GuYt1zcoDPhaG9rvreczrkdNMPjAUMTYHRVnjNFxFu2peoCYygM9tE6oowNqRtqFimWzR",
  "key4": "2hVMKsscUvtcEeMMVxT83mkEQ1wbQ5jHmKpTn3hHxCjS7qSwCYSDRtqgC6yVwSWPHti1NDfLuGSGKm1EfiwiLBPh",
  "key5": "3CXmGjZXe2jtMbqeN75tTmJ3SBsk4PYgr4CqUo1w1mQAMSxGmQ5k3hjQbpBLPFokvVbmV3yvkcE4sd7J6WDvkQYv",
  "key6": "2H6d1jEt7vLpGu5JMtHvYSzrPCkqsiZGWRaxTAMkKUymTaErud7yqdhphonRoXRq2jLzSgrHfq141NXWsuutpfkv",
  "key7": "38b2FFcczFG31WGZqcV3Q99kNG1NhGs31YgokBaNVokpxikzRjnPpRSjs3DjSKSxzQTcmjfbNhJnd73MmHVRyc2v",
  "key8": "5m3sNKgkUqdvTaDYahAJ3mUS8MNQV7FzEhFfUwqqbiCAQaKsBiMNuVCTyNcAxLnecFSiXD3SbcnCZMXepJKNQ7yu",
  "key9": "4DmZ2y9cNjBR7ersohpABD8Mk1E3zYFn7AuQZZVwVZaE6pswxwq341tLDsxdYNif16939wrfnMCEzSkLKT877pyj",
  "key10": "5hhNSu6Qv8YtqVi7JCLKkGxXawups6cWhxmjbtR95yPF7BdfNTuFXuUYEDPzxA4ENTSyhqnVC44MZwtkFPFLkNRc",
  "key11": "5wQxYXuFezgeMdohgfS9pvuAT7T8MkYCTTmEfaoCRMa3FMqyATsW7xhfrc5kWwV1DDLamLdeRCfKCHvLKrqFjPcU",
  "key12": "52cnZnnFL4xA9cG9AP8mAbF7zNHP4qmR4u3m7KxzsbD3eDzx36b7T3PMcrvh9mrzFgtELxt6sGvWGcVY3RWznpzB",
  "key13": "5qxi53sEcM3tw68EU5yGZdogQqB5d6oU2L1P6gNgSLKezm4RrEYojef116UJAwWMm54Re1K9jYdsvcKHW9mSUi9w",
  "key14": "2PK8YGCYYyH5vZHuXnTSHBmRnekbWob9mdC6MDbs5DNADrVPKANUqohwjaQ3bekrke7RpPe7MH1FKnLf8xviVKW5",
  "key15": "WZweRjLh45BDMWumQak1A7VJ3iXqFMsC3jhJHn4ZFoPzajyp6tAthgGnudkGJssMft2R51mdcnvCB9Ea1G3fmFh",
  "key16": "5VGCtxNrgZmLq2Yf4tQS4SrcAW9bHvDoUv82Nb4RfYXSPeuxrxhfjKGBdeMTPAwxX7GXa1V2a17jQt3gVAdQiajQ",
  "key17": "u5CKhcN8FVRKfHtVKKzujiwCZ92edebwk8Ya23UrQ7xWmy1dpS4CZdumoTFEjZWToCadgTJzA94YN7GjAck1o6h",
  "key18": "3NJMvNaBgp17oem1yA2RVFoLcYb1VhDwWyAG6rQvPzkiMoJquChqEvA848PA75aapcJ4VS39qVTjKH1upy9ZRyFy",
  "key19": "3FJEaxq8jmpLqZHpZLaWQsETFzuGNZRxWbc5pb24htTG4sSo4VSD98wQp71jqkwPBVcxBN9T3CKvnHWKG9dVAuiq",
  "key20": "4iDrhTME1S51mZixmiG7PzFVs1C65LbfZnKZhPUpoxqJC8D6nymdrXd8CVpnw1k3pEtpzzm7p8Uy2hBAL6tjFC4A",
  "key21": "3aiktNUrUrrWUK1yfgbqTxQEKR2uBJ8Yihv1mCFt8fFDZJy6awDNREi2Mk8YRzcp9L8w9bQugJVK2sVB81cUN4bu",
  "key22": "jhR6H2ihkkcBxyyG2CfFpBTFDtcDe1McPXpyR5pNivCdMs8Yb3VjA7iSTDMkV6YocVjhV5XSYctV2xrHv2TWSCP",
  "key23": "jGG8FHjbb76LGjwNVhDBBcYEKrjCTf6EZqfW2kY6QCZJ8HNYQM69gL4QB5NS4P6WaNt31vQJcaYKxX2AYUnwudn",
  "key24": "5f9HkLfLzQv1PTUc4amwYmzJNsJM7CxVgXbEbPj9UFzzmgD3CHtyUSpo9Aot9L5DjLCgF6crzCY1B8C2qrSVkMGh",
  "key25": "G8z2CmDa24f8A6KLVxBnbwqsX21DQYYnZ5mD2kuBgnpSPYSqC545sysfeV6irQfi74dWzxvuFX1WZXAdi6eaL6w",
  "key26": "Bm89tqFddsJ5EgDc1YrSrHCDQ2KgC8psouvnuxV3veNgRu6PzsjLbnkMoFJK2qbdgx5y1BzEaKn5zzBUsSptgQ1",
  "key27": "55pXcFbBF162Z641cV334HCbQZrHBGhAjEH3EVVq6VhordjbuiyVJJ3nWeLGuU5r9NLmg2m3FocxdnvuRNjGtY4z",
  "key28": "5g3pMLVoLGW6N4aqFWsB481Hav1WHaRmLgoYdLgGeCinHC2V25e3GVFN96ybnwYFAovpR1B1a4edeHMgaXWdGiX9",
  "key29": "g8qNN3cGd7XEsDrg5Pqk5jB47opgbA2w3t4whJRkxk3AS2Lg8iVSZY2ZkKn9T6LpP64sX78zXEKhhGGhStf6h2t",
  "key30": "2YgrDRpKRyPb5XuW6RyZCYSNWDCVesnsm8o39c4c6KW3V7EuQvMZ5bYjx8s5cSg53veC8i73QoH27yDvht5wSPwX",
  "key31": "4AF656Rpo7RQ2yUjdbVwvkBDEUoJB3weKSwqs6qWdk7cyL2TkhnjxVice28FmxZayzyYtMEG7QG9dDWPjdBxxU3q",
  "key32": "39d47SGXiHvhRMm2GAviiJ8DWZEd8mRVgJzpszNbhbPQRweGYzBcRQxKTZYDJr5UHRqy9KcttYNwBKKE6Anae9PS",
  "key33": "2nR3vUKxtxtCR7C5fbhBnArA45DD68j7PRqB2rVq5WNt5EiP3jLuytH1CrGSftvurhpdZuhnKcEipkPPVGYHKNEd",
  "key34": "4CEh1rJQQkcWWVddeB76CCnwfKRuhF6UvbECNjUkadz91nxCZvBsLx7kihMdzMDg96XU8ksa415VJmSXhLHpfo1z",
  "key35": "38YygGwEBrC9CNJ9Mcs8eq7x7W1fNgUF1J67hBKcsvEd7qCvEuL8qjzYDshDZLUyn1mgAdVC4QbbiWpWtd4ViEyz",
  "key36": "KLhysJTwu1eJKyqKpa6b23T3nkw7neJNWDe8YXyfyN7AdXBC4y4DTvyox2RAvPLLV37csGJQpY9GdY857b9pFi4",
  "key37": "4Rco4Qww8XpTEgGrfi2ffSPyMsLG2xHGvoYUe4hVBDqRLUwTmxEqfganvq8gs97kiHVEsv21EpQcs5m34p6GkF58",
  "key38": "2AuZpbTYhPgeVHJgs7yWCWAdXXj3tQ2UEJgEEDSxPY33j8CjFpyfswbmBkRhmcSfgkUe6Q3JNmS1bnNK15LU7hYw",
  "key39": "4Hd8tRj43E7cie7AjfwDuijJHQG7y2yu9YYYR1FA9QKFSiQSvaFfsrwoQhKnUj3tHLhEzxwc3KRxqmRgGm6YttSV",
  "key40": "3os3wUYuLX3rmjmv1WLBEntUa96sBibFPxy4JMvzSjHxeX3SJUxT5XbAh12Z7jnGeq6e8fSwrbKySWqj8ScWyT4J",
  "key41": "5QpaBwqbw4ipnxwEqC1xSUGm3DFsuG1xpyrjkc9P4PoVFcL6kVa8Jv9zteHpf7uK9D8dt7XNZteKSYBiaWstrUf",
  "key42": "4MRixZorfxEbGj3HSCtNP3Hv4k1hH3pbaMSG84KFcaat2LaiDbL9M9PAq9AtG6EEtmtadSxmwd7zECnRSPkrcgqG",
  "key43": "3V9MayQSPoDJJGy6uYHyMoKMU81yToZjfQEkKNaCahaCAgrabbgTnZmWo1tJUacu4P69Bj4UhyYYZafed549uJkE",
  "key44": "52vgfr4TYV4B2aAKQNdMe6xVEqfrGdjpRRv6MdAnspdsmNdSw6KhE5kaeu3G1uqKnFg7LgrLXgd5W1P9obw5eJqW",
  "key45": "4AF3fW48HCmMuFC8xoupCXdf2xQ7Z4BtBXJns8NREPqCRdr7fSorTpfusJ5oD2zPgqke2pCiDPLvqTna2fqpA9PZ",
  "key46": "24Ep5xHNUYVK4oxqfo1MrdHSABiSWncqhyZc4TunaSK8GFSw1VCjij9DNfMjr7o73FKvTWDBzwvo4CrHUk75DKrh",
  "key47": "2Q8QPRbYmudMvj8iVVsLQyj5XPKvvM8Lt22UW46qqQLPd9WHMsviEarRm737TPxa1ifbCYmP2PgvxGrNSYFrd2PX",
  "key48": "3g5SiaBzgB5ND4Po3WBCY57e1iU8aZzz8yWwUEjHDUvbbYYCK5xiMSKoRiEfqow1Re5fNxZcPHd8oW1QqqnsZxsL",
  "key49": "5Bk12mkGnrbH8sQ5tCiRZjMW79Vd39KT2xydNCZT7mfpSjZpwx7S5mWg6wURSrNktAsUoAAxVfGpxhqgBhh4ky31"
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
