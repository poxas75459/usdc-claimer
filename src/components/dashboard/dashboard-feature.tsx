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
    "3axgmVc46MmqAgEAoMAksDdqqtVvfigvBKWpEhvPKhckTvSVSieS4kAvCXtXD3Gh5f3hA6xpw3dzJ9qBpWz48N6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kF5aRH8NJN4KmYW8UMP8q4oM2YDvegXhUQjQSsJoLqwVoKKbq9bkFcgrbRHK7KvSuDjmH3BKeZH5Gq88WDLdv2h",
  "key1": "2SARg5J26aW8zvAu7B3pLfKQar9eQ9rH1ipCg7weukayNCqyqU4tbbuVLFBiJrPQSrHK2uT1XU2S5Dvfo1MeAP9h",
  "key2": "3Bpke1s4ydiZcbqXkKqhQak7DXSkX6kAoYQJR8h2c4ZW5HPKg5B6jvtRNJC9RfemEhuTwy1qkp25hxBSTpDqgDFR",
  "key3": "4DYgtpBdpGBkszripVHaFP5C66nf7F45qDbayMca4VBgeBWAJuC5QiK9z7THNJwKqbsUvkcysTeQxqDP5UmK36aU",
  "key4": "2MRzPsAS4HaA8BZov4rwZkS542ktTnAy6BhJ2mes4yTZDKhBRrF7EHi6eNje5wcZNEAiE4MrMGDu4E5YdHLE4LXQ",
  "key5": "qGFAyNDn6fAzKnJ1UXzesC82Efmv1KTHRuxJGNhaNNZSDVA2ogbhyDirUeLFQBMZDQrc1n7Nyo6mTQMtVS4pss6",
  "key6": "4F3TcGjtj3ba7X4FgATgHTAgywLvp14FZCY3GUYJ8Qm9H5x7UqsxcQyTc6Wcr2tFaW1dxDp8g8keYn85vwiwG9Vs",
  "key7": "49EH597mYmTCmJX57qZvXt6AwLMGFh4i8QhUWK2L2sGyESFtKnQ9PdC4wyuwp1oeoXrXiKkLmWbikYLzjt9658DY",
  "key8": "3KHgHnbvPgddFSGF7XSNrcst3GuQx9jPKNzFxMVe6d8krrW8K2w3cra2bTATNyg9N2zNgZ2dxRjjTw38zCegiiab",
  "key9": "51dujEGXEpEjHpKvZ7i2bGXWZZHf2nmyTWGrXk9NJRAzUkF19GGUbHTU1uSaMCrr4mJt7YWiFzB3Gu3djnijunVK",
  "key10": "4i6xDtZmH4LbsJt7LbVt7Y3VdcGKyzUV6cRHzmk6FGh1ENeH9gmHS8Lh81sFi9dcgw7upznhh7rv8DPysC85utSk",
  "key11": "3vp1DZyBC1Tu5CcRQTR99G1dVuM5RQ8vmTVzJMfL3AM8iyS4BSVhBtR28ujnWGwHxBpTf8fkgpdGam5zPLMmapsW",
  "key12": "3VeB2YzPS57Mwrnzqh5PixwfUiFNaHMJYP7pPDXYqeY96AyD2CM2GwL7S6fZ899S12r2ob9vSoJFTN3navNbRqin",
  "key13": "5MoXYTFaBAhsYZtL7iWcFqp5NDm8R8gG4R9pX8MjLZjNsuS2mYCGyQTGGR73e8EV8zvPb252ruJm6DNhk7ne1vYX",
  "key14": "4Hpmj4ni3FK41H71T3JbxCEJCHoBhXV2xxqCx5RFJnagskcR7MK9ojxsQEizJqte1Ha15kMkqMCo9Mdgmhopbxf1",
  "key15": "iD2GcbXw1meHdTMCN1WLfww6HXqkpuADZ7c8T3aWWYfp3dGxTExymdAd98pUhvLgeEpGmQ5u8gmNJ4TmoPXtUaB",
  "key16": "51zK2sEZ7W7byaPDbLhbADWUPuptHKmvsvndT1fgk45vfhvNxg2u4Vr9Xcj4KWv8vmLSNvyxEdy9VqigpGWZExmZ",
  "key17": "5WQ1W8wtcALPPV7yNTFt4yRHjfRBPZkhGkkc8aFUpox2g14g7cEuSMFcgD9StWfoW9fVnR37wiw5dgxgwSxDJG5A",
  "key18": "4V7UVALokjUWWDNziq3ur1khSiQPaoTmWEqEJPqQAmG2jszSKrsjjAradRgvq1GbkV9NYTdiNrczHQfSULTtWWxQ",
  "key19": "5xFVU7SCnWkhBDJuvfAQur4Fk6K2Z6yee3DwVsZT2dHdtLR4QUxLnZS1H8VGrFDWvMzuM1CqVohyN5u4J5csXPaJ",
  "key20": "jFhPvP1PP18HmSKxb6xfJUMWxbSFySGgqURVnrQhRnabu5Ehee689GAnHKGfmwio8ttZc6X7P1NshyqV8DMxWBu",
  "key21": "619DzdLHu79wEtaKZxYSSML4rpxpJvg3tDczW18bcb5zrmzF7sy3EC3VL13bWuKAr7zsULwW8G4w9XyVXVf3JE1r",
  "key22": "52nPtoCUutBgYbBh5KTDw91JEgkh3pcM7fkxxT6FDK53xGQKjHox7LXUvtx5oDiYagBYJMKmM4pVYM3NrVvdTnmf",
  "key23": "2HEMPRnpbUrnKvL9f9AXpVWffmDDp6ZF1YQPwJ3wa1ugaC49agaJXujuHK9YtYNRm8XANoZK5Pv49AeTCVyzuFzz",
  "key24": "48q53HdYdsWcoTCLc3PxutPCGkLQSFPSoBejmY4zLMo6ATiScgcJg8KCc5KetAm6FBTwLA1gpGDSyx8FhVA6TQdS",
  "key25": "5ZhG591718VsSyagRhMaLdPt2z4QpfRwbKitnYwstVxx4HL6h56uouaKC1BVquMrVYX1T7e37jR5P33BQqSumm4i",
  "key26": "ARne6kdUA4YQmUo5DWm55r5BHtnsTfGYjf75ZxNca71ekvsRY6CzxTVa1JjTjSWCNfo4Vz6KYynQe5HAdjNCcRN",
  "key27": "2rCWDgWk3MHKKw3TNuAoPpXBss7iTTdJ5p1rPsXfHnw8jcQ3meD59id5oHrTRHJVhafyoXTR1VnkFgyrsxhBtNwu",
  "key28": "3N13RZXp4f5Dvsqmb569d3aZt3VPnrU6rTxpefomeuAp64rQ8uf6bnzNbdZA1F7DdzvaRtEvAAt4kvGEWtd2yt2K",
  "key29": "2rbUfGtE77wpe188J2uxA7igvJogDFDdzCe3sEj4xZMm5CJ5b6iMK47DKWucby3tNVyo25GUZrRhp3z1cKYk6gV3",
  "key30": "4svgTwFcRpEQ6WruRcmDbCDau35BFe428bmVEa9mpbQKPzukLZR8mNLHTxsFchkGHGCfjvNR2P3Pihq5FwvSVnJH",
  "key31": "H3CtHbjxY7fNpJVp6PeAC8wZKqSQthYEzSR5m566DXvc9qUf9xpJo8E9JHAWoyMwRviBMcHhNRAXiGbL83Qi1dj",
  "key32": "2nmWqnajvi3bkLvp8rVRjWPpfwxB6VyBiNmeWEYsxNmpG7kiiNUc8Ts98yevRPHszBbqY8NyPzVHyKHjbz3yvzXN",
  "key33": "537JRPMhH4msQ2sMr2Efah37nFiLvDSKFea1NWYiZcppPyJAaLPSc1xhBFYeXnqGHxNKksEN2pQQ4cC2hwBdqcJf",
  "key34": "5nEQpAeB7fitrrjbnpXysKtrC3kbsTdVaKZH9MbCuPZQskZ5VKCF1hkAKWdy47pGZYiHXQhA2GbaAyxjSkU4HbHs",
  "key35": "4jBempgjqRaByDVGH6EdbAvpmaY9cxTe5L1zfq4fWvNAqGeSY8g6kff9a7hQ2W8MYmBAARG3QVCRnjd5UqF3PhCB"
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
