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
    "wqQcJMYo3N6zPyuosCvN9QRmdTR37wGYoy44tuUoej9q1ZxkgQfzbAvCcSGFUcgt9yuExkjquZckd36mwpdsNzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3naFWnKs2JDf93QLrDbX2UCAJV2785fjPQiXn2NHdErc74r4eUMU5yz2XKaKdJnB7nzRiatUUn8EdQmJA6Rfq6bC",
  "key1": "4BhhwZgVCBq2G3Yvhw53b3iwReCH5dZJrwjURZthtgTWvD7sqohNx7JYFTsU7qd7NxqdHN3hWHtWGkPt9qKm2g8a",
  "key2": "2itvmrCKm9fyup2JAgTNy6FUxGurenB8oSrqX39gRLR2ZYu75v6jo7VNA32Jic21ZamCwMATTjywJrSPk6E4TAB7",
  "key3": "L1SztzZB1ErotrSQRGZjspxJeSsT55rF8KL68eZUi3t6tPTxWTeqLoDfjCiz19cZAmxbxxBLWG1cysH6btzsiwF",
  "key4": "4WV4RePtBS8NakEJ9DXV44qBaTqyZSHtaLnewjiznYRRXRm4emYRFHVXHLTAVVhXu9kmY9YBdgWTghzkFvy9kbxH",
  "key5": "3eo2EnVVaQobJGvwCQc1cZXiCWK8gtcqfKJ5wD9GvGmNdMwbmthnhtn3kmYZhcD54iV949YBWDDPB8UCmoT9EP7D",
  "key6": "4qzqnmV4g3k5LufKV8Ufa7joQH248oZNuVDuP9nMneBj4VGiQ5zvbNMBD77sDuHscGnnMfcXoUyTKvuR8rRe7sUt",
  "key7": "2ax4sQz2vSVCs5THDbcFArHEoPQpF5YLsJz9ke7T1NHxc2BeNLuEjSiijNsLWzLeWBX74ChSxSG8JZf71gSRsQTU",
  "key8": "3HogYTYUhL3wvfBTMnmt2SUVQes2VYzC42AbX6GY8VAvef7PizsFvxEHVfsGgoPv9tzjSuCH72R4sQaZF419hM3p",
  "key9": "RU8SftA4nfFbjjtfjqiVX8rxpqD5FUtMbfCh2mhUMnyEmPX5d75SWUq56FZUJmww2ovoGCu7bRMS5zBq4heCm4G",
  "key10": "5Es2N5QnTDcAqPaCb6uQwe6MYJNXTNJuqfGvJzc4sVriqgf4wfUp66xghPM2dHNdhibKDAn2wQCWdm2Kn8YUQjAT",
  "key11": "HVAsD6Nq7cX9HscUEG1MHgL3KnzXatp9BFKPQXc4Fmzt7GYCBjWL8EVSgWCmdtC6rbEggkMaDAy4DdiEtxRXHsU",
  "key12": "4tovk4us12Re2jKWopoR9JXcYgiutGjfuLSvsaJNYbD7Xi1qFeGMeqoqgJqban5quZgMFA2P6ee4UkcoJAu2uuL",
  "key13": "4qKbvUeMDDEEMn3E5FoNtpoxxkrFHadsnpZpRTLbpptLByGjb4oP9FM3BpeS59saeoowFd4fmpPB13LWgEUyYhQF",
  "key14": "EQbADhTEjnTYPpkhTwLtc8Bdk1ZQQmXU8w8DtmoucSDx936tyTsbPS2ve3R1iCA7Q9wiypJr7LeFFvaX31QP3Wm",
  "key15": "4ZQLnfBsGmnZ14PmEpBEavvTP96hPfXrygKNSty4FAsSAjVotjK4X9D4r6idpXWMcG4GSN3wGZ8MR6NV5bb3xNVS",
  "key16": "2dfF9W99x88riZJLUTfdpi7tHrGrkVwSjxjZeSN3ecU3yamzDktSxPyu9jbaH6Vg1NzyqWtca78YjJRvSeGQz2Bb",
  "key17": "5eZNc1ytb8LJ12Eq7aofkZNGhWLV1NPu17JPxBz4qC2FMcbRmrNwZHQcU8tCpQJyCC9KyU5RD1S6SRwd8FeHnRZG",
  "key18": "5QeFvXkqE33MymH8g1kSLoLEGWhwpvhxmhx1Dn6bhEg8MTSvXNUFdbUPhsb8vUmgg4KwqkCnSQkmMmsnF14VXYRF",
  "key19": "drWrdwRhFykburyfioJeTLJs78kfDz3DHJ8avhheKSW6hv4Puefaxr5vJDm3r8GXCMQ5iqq5wposkkNMamMsA9V",
  "key20": "5sRuxLKK8S7dmineX8zXbcgWGGcHjG7R1cJu9cA8SjRkbZAUhJ7MQV1eyVCYMZN4UnudCSwUQhDEXRdF3zcvDppW",
  "key21": "3ddTvQsEv8pgA8G59GC9e9KKfmUxzofK6PgMCQiAi55qEXAAeUaRMHFNjqyQo6WrvnY9LeGeojfiuEJKwLHrJ3UQ",
  "key22": "wo7Sm8xMAzkb89Xx8voPUcrnW9nFvD7h8cQxjuxqBpVuPRfT4wMbv2tw82pPjE2aneCkw4ZW2FSwfHR9mF9kJEy",
  "key23": "2vudeSSpmczXCSQvCbUsksSByXeh62LK2tUppgcYi6KiwVEeXGkLwJVFhkgHfHYj2bRxYupZJADUGr97GpX4NsKK",
  "key24": "vmRfCFSqNGwWwu81Z2PbS8b23MRpragHPzPj24HQm6o6Vu7cWBwd6wDNef4qSn3MAV6MMkzvV1BP8o5nBe1C5f2",
  "key25": "46EV6vg41xUKEExEwJSCBfBDryqiUJHt8Zqing3VZVCR2Qxf518kHQGJLxaaeavTCZ16BW2RWYKL3z3KgFve4xQa",
  "key26": "4rnyiL92ndu9qvxmv76xwtSdLodh7RL3cP4BADjpJifj5a3MPBZRhKVfQSczNDwU8BkckNUgXwtvYDdbrnFnmBPo",
  "key27": "3P2nGdWu9FbGW3muJtqNbwSiKnswLQHXG7TrzSqsJPe7BkTuXhUnPH5dDbjTdgHQMh5P7tawY2Sa6Y5oSsAoXVaY",
  "key28": "3fCbeak1N7tjYXpQiMWbohszgMav1bkyBxjuBjLm7STBZ5AQRAtqyaKQQEZtmgZDzSrwLVWNukg5JvEAXnFSuXXb",
  "key29": "29jqnMYsGMGbE6jmn3t5feoqAELqsjHiMkueADhLNSKv4x9ijoKpTmVSh8XNsW6GkGY33YnxAEEJRCU4349B51hD",
  "key30": "2XdzX9KxDjoDvAEctz1DNBnNeyiicgKXSktchRACAwzDFjWYWHGGJQzethNgrA5vEvLDZQSsfv3JrAPz2efi5pin"
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
