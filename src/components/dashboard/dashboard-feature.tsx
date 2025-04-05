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
    "2vfpfis8ytZic3YNq7aN4ttWZbmVTTzjWSyCSfCS3d5aGWa2B5xBpJt4JuGDUiwrkHyc19BiTayYSpxd8QFgEwxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJVdsEuLkeEYjdgT836GYbnVobvdfP4FpQc4LKSR46wgzmuGVG8QhUyApjHKvq1dAoBTWJ5TPBHHAJ2kVTeZq4c",
  "key1": "2ZdEGziNbP3byhk4mHJnAcFL3F2eUkdpwHdhnUxZaGASbjjegG76sng6GYUqRcMM7dbnCpcod9D5WCWfqnFQaMRA",
  "key2": "5qZmE2KxZHaq66qxjiGSdHWQoDbuHDGGc3yCR5HDZcAfCvu56gfxR8uULvcNMgUkXvypeBPxHBTNfH2LdGoQjKFj",
  "key3": "opwPFJwZgTwavVxmdjkh6Pvw1TsW2WhmhpCUk67RKYEXhb8VuEFkboyCp3AHTSfTmdkwEr99hwnm7TgX1VEGka9",
  "key4": "3fFcsJb5DodgverLNJJUav9Z2VZDc969Nxn2wyUUr2qZSP3Cgnk2N4UHcB5nQ7MEAbnkELXPQhZqTbjuW6tYWDYu",
  "key5": "3TQ8MiUeH6JmNLFFXVqeY22kRMJdFEU1D7m63sUZpi5BsxgBJGxiW8cqMBUkLf8t7vpH7cpo2E1dR9BBukBCzjDB",
  "key6": "3WBnszC8DD39H43LpWWM1QD2kFojMSUALS4irJZqKYkSMg5HyvduWLs6vsaz3qF8hvBPEF3fR25JfeXnrHPokUAp",
  "key7": "yDYtPWpZA5zWki3d4YPwY2ssYP6YSY1mmbshBYfVBwDMXdsWC6deYKympTWT9GAEAgXiWyDqYpVY45vtdNVAx7k",
  "key8": "5wCwUn24fdAEXUvjUf28SqV4iDe5wawBq8TMcDFacmUNsxLcE61cs8aUs6FoQ2j2Nc434FoUnaMX6dWVdHhCdj2A",
  "key9": "A1zxhTyAMQTocZ4sMuCpRkAynteLT2Dqpq8VpNn7zTnrjt52xMLDLDeFyaVFjeuYjqB4v9KMkhiZ6yMqXNw9Aqm",
  "key10": "qQxfPRfVxe1Lp9LmBux4oFdkfpkqsbVW7zG71i3SctG12kfp9ntDp4QmmNqoKrhca2KEckaJycRDm5Uv71WKUQb",
  "key11": "4b3KLRbJearr2aRqJxhvmgZD1Fh365vir1qtip7AUtsPFH9s7X4nW2eL6dvjEj9bHarx8xALudtSDsei2JpSHwG9",
  "key12": "2oX4DvPVt4SM5q9XXDxej3wdnUaAewygMASuMg9WkRBDyaGCnFYrhdJTBDdp6zLEgE7TNBEkkGhJ2jWmgtHkBj42",
  "key13": "K5RvzNDBTX8BHZeV9Z4xtH5rCF7sdNUqhRjJmzTS7hhvREFjKVHgzpg6a1gW7zHSBZiKUZjDCwUKq3SRzAQz5bC",
  "key14": "4wRrnVLcCZdrCHFa1G7njuWMnbcR2bbhkdSLbLHHrjBnUT6VEcjBxGMso8H31PBj6kEvPsMm3Acu4wCpvbLDfUWH",
  "key15": "4VsYx4BksVYPhJLhjHNoTWffvMgjLjT5myMyDEmER9EXn5FLHjTz63EmZEnLoKnXSzjLD8Z3nuEeXHHGBDfYRD89",
  "key16": "4VC1F1dNrNCGNsQitZCSeLniF43AR4G5qKNfef4Y691yaKmpJBSifxmCC69K3abxHc1V2zrSVebjYiJktaD1dZmH",
  "key17": "4Pqsw7vW1ujao3VhWKd7Rmt1iHZVNTR93WwjL13UGW46FxomokGW9GrmiaDWECtUE6aC3coErMedDyAwdfG5FG9e",
  "key18": "4DnTajEkKeDMK5M1KeYdk4CuAn7SK7B9zePHHSqdHLTDAReAVKPm4paZmUDc3J19cw58NBhBsa9PCe3acdCC1WWg",
  "key19": "4W4XykPK3gkPxVFk4TxFFYXwNxrugAb5T9WEt8kMJsT5DEuCrYU2LPcakrarCS99P5bkyAYWyYXKjmWgdR1fDW9o",
  "key20": "3yTfdZMkbVrTQkk8HvM87pM19hTuo1cdNo8jWFfxNesk1VHSXJgENF7URGwGH5TijY769Qqigxc1BADZdx8n7Ljj",
  "key21": "2VU56AkFsa8ZhzMeJicmKHNfZYtsBMNnW6yb11SGNhqPrhQw8xKnsekmDEF1YVnFYWhfiNBsneZR1VzcSu1Ft2TB",
  "key22": "5CUZF52hVkQo3Qr87pMokZhF14yj6My4iQbMy6AGiNY3ehXfA7G811GcVqatB6q1vPJ8X5GZPTHHfqGXTycNL3ro",
  "key23": "65hLKySUc2paFfuyoBzPG3jtLgiHJYhqn8HZrK1ahZtPfuYNFq9Sv8uEmAXD31mLWo6jLuYAgHrmPuFFfz1XX5Ci",
  "key24": "4er9VLSNabDDhWNr5uH233GQiT649EdxGpbq1idL1bWiZAmmdpQZNTB5PUYdBSAK2VhTfXgptpczcB2kCWVQazgM",
  "key25": "GNTG2SFvtDBEeuMLTRxRq7vrAzrALkPm9ur8BUtG67s5Pbsx8oowmrAha5cQLPV6WtPghyusCHMypUvjVDdzcrB",
  "key26": "5A1dyj39HBuHwWtnnb5pQErgq3cDV3EkccNek37RjoB3CH9zeSYbLgRPF1MQWS4NFZXZcn5rkEvxjzp2eFZsSXKh",
  "key27": "GksewtqxXkVKavdqzVdr6B9KTCrsBKdtRDm9iXB5bdEQ6kSzamaLZFiyKYYQ8zrFPNV39RFnFVmw7Dkj8TRJpEr",
  "key28": "4EiijBGc7CKWeAYzxJXjVc8xVfrTtB5G8jWXW37mKZK5nMEd3nuCHwD83qqc7YVKYoTGr8UZhU2jgffaTxuZL2f",
  "key29": "4nfrecjjK4LMUaBh7nmmSaF8sDqjUmEo4QG6TY3EeBGgjjmCkztH2k8LqyWAwEyBa3ofoLyo7mJXNLKz3UVPj7Bg",
  "key30": "dSRCSNXzwk1MKawqULv7oVnwHsVNEXLpXzTBPv7mmwRJPLUryYzbByaNRhARByF72jGpxsMkqVih4EZFFn1FZ49",
  "key31": "28JyVoaiK5vARWJeEUvB6x8oxWE1zG682i7bpYN4gmWuqoaZtJf7J1UqyB1h265vZKZHNEBgw2mLGvedBYVjqrGX",
  "key32": "5PfVKxisetP1oMcXzbUg3ngr1Yi48C2b2F7vncepZRzM9w5YWK3XdnzEsGHuC1k6BekG3W4zPXriijtkS2kpxMhP",
  "key33": "5hhTdJKWbJMbrrvA1pLHDYtjiTNJmQb8n6q3YJ7dCFSQg3tsSX92fNdD2jyGwNmGt29EPxU3n6zu7jaVdBS2aAWH",
  "key34": "2LckR71SsZ4ymhZ1kq97CSQg5NVCg32PekvXkmVZ6f7v92JrCqNFCxjNetGgjwmVbjUnGJpUFA1cGkMmT2D4iE2e"
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
