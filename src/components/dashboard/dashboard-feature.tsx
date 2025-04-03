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
    "39sJV51KV6FQaGdMEiMoY51BMv7135Ff57h5UtXnz46G6KHph8eRewHCyiebqf13fQ8mSL9aN7QuUb7d13FYzPae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjfoH1N35hqV2sN3UYAXr6WTXSN5s6JB6oE84qPkeKwTeSPJpMnf4meoTbFamkBgvey1GL2svEqAAvXgutYMxXj",
  "key1": "4Z3batgKx2vvWnALgcMCupgfaUvXyAaUsVhxC8MKZhFdTQxUKD6eNQjPuFFqTeWdTVKWQ83QrD8J4FnNgoogDzX3",
  "key2": "29HFzAF3vrzzDEkCRwesnQ3SdRmCcuP2Z15CUcSsSrBJS3TU4ajqav8bPPnQkREKRMZzPqrtThK5NfUoRh6F12gv",
  "key3": "4xmrdPt6caNXHbzNJGNhA5E6BywQsE5D4ktDYEWe4Wken3kLKhum6kgeJstJHhzLYKD9aqNcZdTqzX36JnNskhGy",
  "key4": "WVkbEbTZWrCMvJrReUTptaZw3D37quL86Rh6dUNPyND7TKBDEkKveDp7vf2kFKMNaiyKpajmUfWYQ893xqNYTgQ",
  "key5": "4kuoBJ7yTtKbzouPaNxHCqphrvW6VLZejkL9gDkvGRhUorcZaCC9DtJSuHRCW1rn3Pe6AhVb4Hk3ATJQoy6SRbZ5",
  "key6": "4nk9iri4UdCkXWP7MHzzht9R68UcJCP4CCbYuW5fxUAaN2p32V5oaAR6yPSPJUWYSj2iAW7e3V5conX5XF1rVUgf",
  "key7": "4zDkr9fBeLCpWUELrfdsQn4e2vcrnawq9C44gct9QF891HMLmDg3vtYgsvxEZkZUuBkkVA3W5km5zDZ86eSuRuon",
  "key8": "2gpi31hoeE8hgptiDYkvDNJLsGhyP7syopBh1weKXH4soNE2FA8Qu8rQCfHTQpzs1uA1v8ZNfxXedwMVHj2No3Cy",
  "key9": "5ubnbuAT5gwJKiv63JHLMwqaNQzwsTL6YJiRsxteewvV1WbBApjE66jbaPoBQ2n2yvNGjoxedKuKhuyeFFijXpGa",
  "key10": "2qLvk1DrDtKDVWqpG1T5LDYDJ9JLiTeeAQKTRhmoDCw3eT5CeEcN7ThFRc4R6XPfpiMxQ5sM7BDVxfqSMWVoSKZ3",
  "key11": "3we7xvvUZkEt3EZm7Y2RUdDThMV63MMw5fjp2iNqVcnp2ngHZUF18pskBa9KnvK1NmqW6ws9MhLS7fEEmiHYbN9H",
  "key12": "3Zhm6pvgwfjTyidkL2fUdnNojmjV7hzVzvdNcvaF9aUi3jPCYhRivZ7BYbtzLHE8Hoc4qSfELRr6RrMqQLv9magV",
  "key13": "666zmPYG3J61UVLnjY1sndrD8G7dEjwV7gGkBb3ZbxprTWRYGiarHCXwXebuFZwxekHAdM1ShDtiAs6MVWZUAcs4",
  "key14": "3f99foNsG8r2Luan5Jpb9gX8cy22cohR2Ac4yyUQpi71jU4qJkG7SxpqNSgFTxsqEVNM7BbLB8uUA72wkoN5wBtJ",
  "key15": "5LHFWtViSxdbeUaVwYhSSGQgm52gmLYkz3zxPTVqF4X7QU1rbhH4h5hix14LcRHQTj3aQWCMTTTyLUv4mXnq2Bh",
  "key16": "3Q8SiZ5KF1ybAfcyh8n6cVaZKnCi5inB2GmuZoPEWytghEd4YbbK7CBW4SBcnUcFkDBsUcjfH3oxk4AzDqA4cr9k",
  "key17": "n4ux6yX7HwpPUCF4GumPwESkj5st6RCi69uXJDb6Ms1sCuLvBtCpEX2j7x8ZgH4vfQC5ioRcho2ECx6UTh9Bo5q",
  "key18": "59oxwfcvjnrKsjjNDXqodA1NqquVZd9fsgtxA7PGCt3VfZ3TrHRt3AH4CuWjAzYnV8VCVxgV3ge1HXRHPmezKrGc",
  "key19": "tZaAgbQ7GWJKjmLM2ijgQP5yepmwikm58F3nRmH6WYu7ywxxxsRga3Vd8QWJMaXFDhLdzsHV9B6DRp1YXFpDe2b",
  "key20": "p8GrLss3vbpNg2EqDE6HSi2Hy65VAmN3ezNoz6xWTKPLrPcsRWyaPQBKvSvPSn3De8vveizWiTFkgKeycrnc5pr",
  "key21": "5CcQxNGgFrcXvYjvdknaofoRgpwNxXYtmhncP9xBUnSa7w34hovVQxWfyuC9MFEShbuXrNkHro1GngNXw8zR7wsb",
  "key22": "67a6Hy7nAPfuHfznmvs5og749kGunwLxZ5vhH6oJkKivutsRmD2RruXJveoHJTCuePe7TEHo6dd7pLdDsmap5mrt",
  "key23": "4iBxYxKDGM8JAPxNe7QFxomFcfD9Jq7zbaosaXeRhZXkmB926ovApFvnmRMY2TYtRANx9HUVfSaxLmVaNCaHoAaV",
  "key24": "42qgVhpQsY2S19bBWQwbK6knETPAeALvjPVPStpFV6RCMem7HTHztFzkmWEe25pCERb3vFK3BMnfUyHnK7yC32cz",
  "key25": "4bR3tFvtpz2Kwgg8qv6qh8ChGDgHrbgVuBWVtwcyJqddd17WKoYLrYtY9sJpHnKN4M6RUyQTj5fYcv1YgATRjsrd",
  "key26": "CbCFtRWXGGQWaDW8hJmKxJQxNC9LBMPVHzirdcX31pvCVWY8V88G62psKXpd7sUeFZNsP4hT2jVUHsrAFXoguBe",
  "key27": "1yLAuTq3vyzosNNoeRhsCoknAi4UPjg2gHFkdLFNtQW14tMxNazjGoCFCu4qAVVBXgAK7UrDQ8q58zsB4xbZNsN",
  "key28": "SpVg836u9ySFaEthGFatjskDqTKPrR5mWoKw2im1wpPHNHRGBAgkZwnMhxKchSHyGwJQEJFASGGB2TY5tR1NgVx",
  "key29": "25y3ZfT5qtmieXwcmsRgpj7KUbRZzgF99UTJD9vtbrTQgxzSCyTip4JRezKrcFqTVLVMoLLk3NGe1QVFrSQp8mz3",
  "key30": "5r2YFwmvArmavqYsncrAshepHXxYsL6uF2LSRsTrjpxC9BhrABgSFBznkxRP16HZ7nh1uqBjuKys311hNkZN7E1P",
  "key31": "54vaczYEwd1y4k7x6EPw3MSV88DHjcvUqmJLnxHghPFPz8a3YFftE329CkPkZr3WGSCYZySPonWGT1P41kSvaYtK",
  "key32": "2vnhmA4CVNfLWSNRxvbfKtwL8ckV71ZxM7ncNtM8FraF6U3fuNZHfhRDZdFihfk4uz2SrocriAdmHbPAjx53ziMV",
  "key33": "3exHMxTUDZViZS9Tz9YKrppnyWhk7tJkcp84KBvYSGg2PuK78NPc8mpZ7uiMcPqyaEbeVxA2KETbsT6nC1UHkd9A",
  "key34": "3itfPYHVfjENUs9FskLeQHcLXS6hQvErzrTFezZ27LPvjXewiDnMDhQ7ynyYLvAML5BAYiQWG7sLV3Ho5KbBWFij",
  "key35": "G3QFgtp1BCebsjGDjCGwNUspmwFcfPbmpV4ZKQgz7GTjczY3S6C1s3JodnsUi9V4i57ZLaWKxieGvWiTrLrcxht",
  "key36": "4QfFuAWeeBj3MpLQGuJXYJAtxofMedek4ejcWMZsQS4Fx53PpMmxXViRb6ERw7S7zQqH2bjZ49A5vBgjd4Qe3XU6",
  "key37": "xNnFK7mnheVyifjRPVnovWq5oxu4BDTcaPtXEUQwW3tFzH2zvW3PbBwhRnctBzBsYpMP2aayXmEoMkPFi8SB1he",
  "key38": "2WFCMJ2NMX6nSeUrA8NtW7MXX54Ez9XkNSczrKJoXRF8bWgHDsxbk3zbUpnWUQ5FWJadqhWEUjipczmTK2dkxndv",
  "key39": "4Rf1Qf8XftvTBiHiarCUrWoSj4GYAvkNsrSELztuk7CcWB9AK9zGfQBJezCNtPVkGP5t6TLQEsY8x9693muXDeDQ",
  "key40": "3pbFpDN1tpdnnYxeoreHNcp1y6gFZ8tYJQZ8ELJXgEeKau7VvRU4P7FjHv2X2hSmiDSwA3SFfPiCPTRRHVDXFzGK",
  "key41": "3B7yAsjriN2DszFkEWiPW7RaJr265Kd9ERm5aWbzJRdCCbnDTG6Qx3jNXQ1A5RVMbknQJw3GioWF8DtLogS9Exnw",
  "key42": "2KEAVBUpDGvQMtHBv2woFNfJ4Z7LZvzt3NuzgFrW2L4NxWh3Lowx5JtvBHCe8wZnAVXyjS5oXNXpd3N4Ld9pWBU9"
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
