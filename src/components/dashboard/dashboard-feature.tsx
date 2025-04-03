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
    "2cT54TwodKMzvEFAfUyNGAtb2mJhkM9y5S3UTYhBGuAHjRYEGAcXF12BkfzVpKgn8B4CzSumzZ7auYuj9MgscY52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPmhVyYsakayRv9HLARNhbuxeyMn224X4xneZFA7G527pupC2QqWQekmTbp9knupprLx43kGYjzDfBN6FWAbTjj",
  "key1": "4onENmu4vUy2wbg7qAsmzQbz91UDYXJWUEcR8N8fMCMikz3cFzDAJE8jVEd5igBKBBqn5UJNgQuKMMfNNavQBZ5L",
  "key2": "4fPwyBdVBMhoUxsiwdx5vvuU68FniMyoYN9GNFB71qciraDZSUanwVyEWApWAoUzSussrdSty5A3xo68uZkiXUNg",
  "key3": "5sD6jJb1HBXAFHSugWgcGMF5kK2BKZukt2Swko25F4LqnmAhMj2nx8zfP4Dh66F3FygRNXvcjSjDzzddZNZQTEzp",
  "key4": "c98P1w2zQMaoC7Wju4VrbUEVvbbJu9iD5FbqNXj5iQHfYPY1J5BbBAGAcGGDTrNuiqSiuxw4uUVWRs2GzK52xTE",
  "key5": "gSHodgrWsk4i9b8mibqivkRCxjSWMA1fencWMB5PqRZsuW7yfZPjq1NWbTey3kKese3P7Ld2HAmNhwE3xcKAter",
  "key6": "3agmY4rpsbvKX97A97pspWd4vD1MxyYgjkJsvJ3KfXaBASGyckBkiTqYx3XPLD3afNwjEpXYnHt5rRED7XyaFF3Q",
  "key7": "57LV7Maq1NBoMSnrB1Khz5ZuWKd1Xie8AjrFKDUwK2pwGamWTFavw81emGnPgAwtxZCpLB1qFnm11PU9DBArLZhs",
  "key8": "59SkTCb3vJgprYjfcvvbnToikaf5CzsKuozc4gXZryEvBubCmJnQ6JpYCzqwbdEJMCejH33fX1JgZczjNjafvAZq",
  "key9": "2rt8HEW2rK6xXfWA9AG91zGNF5fyRpTCTSN81wKvQpPrJan58Fn9tTQFdK7X3r7rWnL4WV8nAv1VCzKdbn38B1wc",
  "key10": "FEywMbweCUbG6ed3H94tromwXrerx3HopETit3x2gRmiYNMQzyRVvWwdnQegvvPDE2ns4mhAmPkFa2TwKboHHKw",
  "key11": "5jnRGe7CmsMjiRaLx6T8oTv4KWdwHurL9XpGUdVdwbu4CuXYuFyMAwvAvnDC8XmMaNJeufA1yJYGm8BwCDEoFsvB",
  "key12": "3VZqJRTGQkj6ZXvR6qGuxWgdKUTGeHThJxtSoUNDxe7P1eX54kXUQA5UeWE74mKY3H3wsx5hygYLN4ehvHeFv7HU",
  "key13": "5nNFcCqGAQCNHTwgPFi5unoV29xjHx5DaPtPFMLapUWYdppdYWej98jaLhqpfazj4HqRRyWykFwbKXoaEG4hKAH",
  "key14": "3VM84wttdAuXdFrGFBJTQw55mP3Sy5QQhFio34kCE9LeLMouBiEg5x8WgJisrJCYNUoiS4v9Hgi3Y68ATTbMccvk",
  "key15": "nZ41fsALtftonL328r4VGoGQMsqcDke7fcLFVYRjeXzfevnw5NHcp6TfmgrqdokAbYKiN23ehgTnH1GqgKWQKZA",
  "key16": "36ptGHAVhfrim6T7X9SLa8ZyvVv8wXySxZjUQb1wJ4EKBz9bZUuaLesLBdWQbnY6x7rjLiMTsz3dyS3SK5zXaioh",
  "key17": "XJXEKRMtFE291CJyJpD37TpyNXe5PhYKuwiSzcKAVzybPtv7WhACjnGvgFFZxUTSoCjATSwcYrypwfG3S1axCay",
  "key18": "2fzcJC2ibcaGmrC1KGMtveA4f2bukCgTuK6rGEwMTLXcyk3BuLFvFXo8UpSaWzFP71CzCo527Cc8UMQvQJy1T5Yk",
  "key19": "4Za2vc6e1JUgcuQc1TG4G8kSYqQVGpSgebwXEMs9dE8DsufHS6f7g2ssMPmWrNiTnDQL3BGBx8bANy8fkenRY3AG",
  "key20": "2MX7pGYFZeaCNjQ6DYKoLsK8CnMGoGKU7wBJYrfcJJD4HUg8M62aPoxUEoV4A3noXs9f3MeVwfAMBPpCZa8dEHnc",
  "key21": "4aURSeVUghpNrtkJxffY7pQ6ghAFcPBwc9XLVsBboTEjQRhT51QE6wbnZG23oC6tfD9aprZ5xVgsDwt2J7Ssenay",
  "key22": "4cm2Enw1DXav33yGL2cq3kadkkvebtyjkpUQJpbAtbCFRaoJ1bw8U3D1Q9jcs3MUyAhHLmeAUiVmij4jMNAhdiqc",
  "key23": "aVnbKxpBxaAj2EXrfQLDXoWkXUi3a4TDXBNWK9krA2c7XNTWvaC149LMkLrsKokLfHweh1FnFxEaSVa78z7KDEM",
  "key24": "QuKvmDowaMtPf8fqWxMAN1VJgkXXH33MzsxuY79ZUwJ3M2WSjyaRzoUYD41nkfbMuioHGKRdHzriTFJjaL2o1P8",
  "key25": "3FeLsjqrazhHhhu6MRUfuT1Up2BAajWitrr3i6RffeuEPppzrZ8iMvjw9At9uDceeYNbvpKyuk1ApPcL4dkPfZmA",
  "key26": "3gW4WEtmb7swNgKHYpB5eKTDB6xC525H6Jid8BnGVAiSzhspJEPAbUHhLXmq4o5hayw2L3zUoPZiZo1CRmSPZFoC",
  "key27": "g1Am1wuY8goUKcWm9A545MFpLd2EtjWNsjCksNsU316eQSttMidRHLPfkbZViGqZ7DEuTynJ7FCTGc7RP5rpWbk",
  "key28": "5WFHadsJJt1SF7foSfBuVsjFL6pEf7J3Qk8dHL2y19xkSKRAh5Wy5Cx3KXV8iAyyySYZ6XLqmVbysH9Zpwv5Yqtq",
  "key29": "3BptqpBpoMTgqumPnNB8AxbDoADr3hwYc4nc4Fsvcaivqvn4woB6u2uzyb4WoaEufRPAfWbas71ui6RiUn7G6GkV",
  "key30": "2pqptapVzHNaqFAccqxkjDKaTU2i6arpSvx6K8W17abTQAYuv81QqZd59aekmu6PdLcMQpRGCKgnUupWZ7afLqjU",
  "key31": "3iBX5GAwsiPkvkqWqUCypSP9jqsfesgLL1Mf8DR1HBoAye57m4RWYhTbLk3e7DCqqCjyihJhneBYpQmwEf3aVkAe",
  "key32": "4fxxrd4rDsqSgp8d1rHk68KeJouSg2KrKwVVhdtnFaEtjfMFKXK41jjsubqwewar23FFphb8ZzhDuBRcPYsZtvFV",
  "key33": "JfwRoQszMoJyTEUuTjsD2pB3QAZLLHJwFbRjJnnSGFYHMYCbvaBzAGoCMEPgoFQUcmBTqS59HCubBWzzZ2K3B51",
  "key34": "ziaiSLBNnrYZk2gqJSeM7yMGLU9x8YNSiAhePx4ceg5CZLHz1G8utga4vuW5eDjKePXwaq1qJNiqXWwv1Hs7RnH",
  "key35": "3zE5Xt84427zD4d4QH6rCwGQhw2sgBmoDQRw68gdAcmS7h9pBEFNzBcYXrVysMfxWh2wNNqZK3eh5zGbqGJ6jFW2",
  "key36": "2FGJo2K55Xa3kCdJFFJgkYa94LSzPSfgMndzQbbd6Rc4UQbMuQ9pEX6129odu9dvdChZ2yJSWVwkooLiWSgqmte6"
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
