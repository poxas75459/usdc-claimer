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
    "61tVTEq8GNhA8KGNee2eEWB6LRe5TXHcHRvfFSzPD4ZRnn9trcokyozFXUBAanzxVCqdz4bEueGuyStAaxWPsY9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FBZUxKsfM8vWxaD7Gq61CpQxPJLdvAV6TuD4CaqHQ25byBTVJdeeFwfUuK5ieE89vw3SYi6WHoSEAkNxc8NNuU",
  "key1": "4FasKbce1eR7rfv3c5dbaLjKKdyQniaRvZUTCJRV76HWih8woR2rGmGi6RgVMwEBjBMuJNKYpCWweiZjcz6c5wUo",
  "key2": "2BzcrAjYkrDDXLuekHHVMiA6MRjip66Do3umiWKw4tjmANyXFV4B3P4hmfCzbwJojBvPRbMrjVyXJ8fnR1PHLFbd",
  "key3": "3xUdEMjjhFbRXF9wpXDZBi9x8Bjv5ATePD98fYNhD7TxRSDF3xoqxHvauu2vcp8NLEPUtuyQcWvFmnQLJgocgdFX",
  "key4": "nEcrREmo1YvtkPFLWRAefDioZoduRvNS6oDkYddUy36LZXezgNt2A486JL2esYmMV1pw85w7tzn66TnNyZ7JxAY",
  "key5": "3VBDiNqaNRiNffkgyj7H1bxegFFSgeJ3nA66jE6crPdkFifvrX2FdJ47bJciubfc8uVLW8Ay2RBpDZZZeJAAg67g",
  "key6": "4vfGbmNbbmmb6awh4uZfV7jTVnnGz62pQLsNm7M3GBJZkaXbXhPchGc2RpPdocLHN2AYwFXBgCDW3ZeyDENcdjc7",
  "key7": "ZmFJxeiTM7yVniBCAtjNLEfuxp7ADAh9zFrqsWdeTLQwUDvVYcAXkPSCZf59vVUmB5QCtTN3kB7EuUvK4hdSbzz",
  "key8": "3P91auhe68tm9mezKArjnotANxs6W5HTaPiu43J6Pi5VtpM6xM24SbvADd48tJ5ACCsFPz7bRpsrtZ5NTqXQZwRu",
  "key9": "5wpEdf5kMb6AzdhrBoZfoQeV2Z7JvMEj2Rtq5UAom8s1k7JWt5SX9D4pUV7h8yfXJai7Xv7ShA9gwyC32UyLMN2P",
  "key10": "4QCjBtg5QGyFCajWnoLej4VDPotxPs4PJz37AcgCAA47R6rN56G6sZ5wjCPwiUNtnjT1Qoi7WX3petDvtqd6Q5d5",
  "key11": "UgDjRrDkb7jzhp3F5m3ngR57LaacutvSNQfrh7Mui7rgSHqGyW2wBjEywrGRCdLuyccXgyhRxkmYirpQxGLrBMP",
  "key12": "41YaUSaakznG9ihUCE7CTbZsvsbUA3TS8Y5XTRsdwBRYpA6RBCVEwgMeF9sVttRbyR6eDQdHc5SUFvTxy9WJQhUP",
  "key13": "647ENNnSFfobTmSty2GgB387XkWp9tmEYq9rMH6pzNNnN9HbVtXBDcabcQgAk26gDMK6f7CFDwrVmXwyN1og4cBy",
  "key14": "35TnPkYXa8kWnCYDUrVyRmTxGN6VRZZXw24wKhjjPRoajC56pns9JoAPwpvRDHWRFQ1hWr9v9jUFbkp4ZKyxScd4",
  "key15": "559V7yFPUUtZt1DFUUr9vJqPzZbtZ8QY9RvywDGWR9FevFGsLSvdsgvvYwv86FsPwcehLtQKSDy5dAiPvodgqVu9",
  "key16": "SZCXuwhXxr9Q5XQDYNZvyQJuWDwFJhe6HzDYxBbyq6iX3SbYcZ1PinJj8bCD5ZgUYXLwKW3s9ZTdBA1W1BPCBD5",
  "key17": "2FNKxLMJxFzmTRwrojjEArpFBuuEjs3LENTb3Jm66NpKKWsbJjn812UFWkLbDGxTdBQdkZXp5ec4nb8vSoUrq7EK",
  "key18": "4MiFH1yNo1RA49314FnG4FQwvudYc9dmKA3koCBGEq3zTjU7qzvyzEdgVkaftVmAAuAwPXLQM3igVaV5SkDU99JW",
  "key19": "59ykHNv6Z8epxFiJMdVb8fJcJX3HTqp1XxDvNyvT5z4h7d6CfScKC2shwhStvpyvKRC35AjomZZEqYSgDibFXvmL",
  "key20": "61qsGCahUFLsKpiJa9gt1FUfZYhDKWeXUpJeLUyHM44VyaFxx8NQd2fS1YNwnxn72sNpLiGumoDYqWyQdcByRa1h",
  "key21": "2d9mE8KmqsvAb17yfZNCPpQU7KZdXBVZvWp8qiqj7U12hj1v5VsWaohCa7d92U1BKGs14p4F3qFPBfuzYED1hr6p",
  "key22": "4q6iMNSBr5zvFnfopoP4Ko9dmepXRtqYdxY6HWKXZayNxqGSXL3Wha4HojsnrDRD1Dpz7p8fA1x7deUwNCbTvhkX",
  "key23": "3dXFqfbd2ucnUgMidH5G4YW4EUZ839HdRN9NE1UoawSGjYDf8RK3Bewv4Uwnk7LmMQtwMuPLHnCjAw3jVYYSxiFn",
  "key24": "59bMNFJQPm9hogud9mFwSn4UJvih8nrt9dZQGr4BaTDmW77u9Pz3x6zhKtFsSprNtQM6uWa2hHKoyNsWaq5mwfvZ",
  "key25": "3srcSJurssTihKYTJmoUipcBcahncyFrqUgYgmLaVzhyrB3AfWNyvLJXbwcLaZb51TbaDdJcaZ2rmCPuJLFZS8wE",
  "key26": "5VKotaphcoc9tDdBVWtZk73FZL6fzCWfg661kNPDHzYatnfQHdYEsNMWkMnW3squ5NKwf5iHhWTR5Tjnp9fz1oMA",
  "key27": "3NkTJxtPW2KvocoRutRwEJKs5mSStMuUjDQYnjsFSDHFrZ5gAXeNrsPoAMYdY3Rghgkqjs6n5nJAbrW9WZKPGqFg",
  "key28": "24ExFueGQKNwx1oQdTbUT3yTksQjguXdyVqyGRERWFy1pJ5UgYPKehFQW4G1h1huYVtkMtmWkMWvbBxLK5FKJ3Hk",
  "key29": "2dTDxGNnkoygumeyAaj1rjTCS9rzjmFroeR8JZSfXYPXWs8V2zPEpywtg9TbJBfZeeud9ZqQiaTRVyPwtrzWZc4R",
  "key30": "3NmuVdLV3Fd2DEif9uPrLKfkyv6s4wFZWCdEo4rGaG8ufNMMDUMMkUzGBiQVn9J8EE1boZ4D9heHXvDHcKmpYoun",
  "key31": "q6NpywwcCjEeSMP8H2tPYtyPZQcAjHg8rYLcUAbb1YijKGZsnirJCsjaW5C2t1Y9qAtkch8vMV7E3efJXmYMKLi",
  "key32": "4x3eMu2VGXYMYEMZuTxTZV8EvUQwGHN99QcT6nmG19AJ3bBN8JorYiKBWS3uTJbZXPa3KZJ2PNRcNHYeG9rsPh9z",
  "key33": "4uqr9Ms7JD3dvCbqznssVuRR7NBU9vVEwuwGKsTjqvALYgE4SwX69YrtxWQYCSjgCcTaEpajXA91yQYpWU9Y5Fyr",
  "key34": "4iPaJ4MPD8a6qXdJGs3rGfHCiGKs2Q2X9xsr4bf9agSpnDE9use4LkLdxqG81YaU1ukjDvpXeg8MxA3KRjithdAY",
  "key35": "2Y3u6xd7KWWtquQR5Yh4Le2gD4vnqXaYDY4j5RuK13c9ED8GV5ULeHekaGMgT3zVocgxDyX5FPNqQUxZHYuL9kHi",
  "key36": "3VvhUGCnNV7BAMt17RXfjvEw4azK85YFvpb4nXphkawjqsq3hkm3jq8TjhZaTdaVUzxp3GbLKgK8VBcnqbcRgJ7X",
  "key37": "4PZhKT4ofHDbXvTTpRrmH3fobyZJLk22X14km8BfchETTRqJCvwvNFB6sW1HkDEH5o1SxaJx2DVJrJNaxZbrGqos",
  "key38": "5oc4aisJdv5XxVPjtzj47kXHv2GyXkeMuzUHMSdLAof3QKemhKfbSw5DNz4WCw5gJwKsSPVMgjqeR6EZ6Jc9TctJ",
  "key39": "3ed7gFuiCM7cDEXRZc6kmRFRehPvHcT8XdWBWXsqCs62QtYvBF37ErVsuGk9EMLtVvNPH9RJQeWTPSW4XGrYD5sW",
  "key40": "2JqDTgTXFYpk5Cjo6qLSpdH23hWdM97CZdSc1H3xcdkHMJ6W8rerM8S1bN8w1C778L5RqpFc53jrNzfWw3h53WTw"
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
