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
    "QHKzonjePv5aQR6WLFz4mh2LUuDvU8Zf3VQRtDsDGg4cckxxA2eKiKydvYiHoe6m9nL5r9hXmJLQHxH75qd6v2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2efuv8SbytmuQpDjGUZEY1z8wVdaV17VMV37wdqGgXVfq3yRGT1Ubqbbe4k61ax2b32BqjcHXG6XUreZs7u6evyo",
  "key1": "3mAxfgSq2ogq36LDNCH2utHoAxMd5r3BFwARSiJ991oMwMGUpTTLU76UNnJZYxjmCqCMB93ZESM9wje9kSYrsoKu",
  "key2": "49H4AyBdvTNwyAtwVQqEtBCBaa5bk7qNhDbctEnwF967inQqDREcV4KLiNnnagzSKRSRD7kh3ivsEqasZJLNp6dT",
  "key3": "5nxb3BWcRVtLouY89WRxS2p7PJuGqUjLQWFn4VJvg5kEUN5De14oq3TbVZRhSyjfWJkpJH3XfzAncVsDw993KLNe",
  "key4": "4cFGADkm2EtJGwj5s4E5qhtc7tVhYUG4s3Lscrm9eEYybzf9m6qjHmpdRdnu17KU1fPUMzdqF1axHW1mQGoqPGWb",
  "key5": "4D2izwQQrhEAbDd4wfMvgjgm5z4aQSeWj5W9Fjxp6pSxaKA2J8hL36zajwUyrFvwgUyp1rsjMc5ZhT4KC5DmRoeo",
  "key6": "5mqb6AWPscg221GHFBMyQm9gMFj8GhmFkXJ9DB7ASt9q54o4yof2fYaMTjFr6t1wtXB5apoRvp3e3gk3ckMGMVAd",
  "key7": "27GS7fZpQHMhLzWQUEwpU9CskrAuB49wMwpAAV3mi2ztazvEHHKPfsKjJiZY8Cet2zfHqAR7AMpwbziYniR48EMt",
  "key8": "33HkCq5CuHYfaX1EH4JiYtpu13GnDQF9ozZSb5fDeU5NrxtuBizvdFVMAcFd7fbNNrmWDe8kvaQ3LmHGwbqYyW1v",
  "key9": "4fYK4Xjg6RSZN1MED139xCWKfFiJGBCHX3sb8n6TC97qkK3yJBDs6xbfra68KKHWvWxhdK39dWtw3GoA8d1NRiKk",
  "key10": "4eQDYa2eNh4ViqahcKFJMD1HcPJhsThMAw28HhHp7rPK8ppDBotXqaiqrbW12DUqARgk2nRFkZsN2WZSTR1NpPGR",
  "key11": "4vsxG8PuiEbuqMUTTQZpAXnsQYLbEMsJRFzBX4pagPdrnw3Vg8eWAkPr9CGRwK6G9wUCBkUb8M1JzcV9AcZSUhns",
  "key12": "3ntiguJWMwyL7m22XWaxVjcFTPmeyXJT3CwQiebuEv3wULZHbsbMEvZDKHxoNYYbKoxuJ2YybhjN6j6uUUNJ8sSP",
  "key13": "4UBxQPHj5kcTre8M72tfZR8CdH6x39YH6iGyqV3wxgsrv4ZNcPA4MX7gKmEYAgyrhRWUDqQvGpHmvyJAGRh9zgK8",
  "key14": "5itjCNc8695AySdEDNMSusm81iGMK5yQZD6Lv8z6rCYZ71XV6bjX7PEasnh6KurYWwfnuBxh4WvJku1XCW8sK1Ux",
  "key15": "26f5dg5vxuH4xMNgo5k9ifc6ita2awdWFzAc5wGWKQrdtmfxi2gw3GhF3XWcryrvujgPtuJXb61hdhMBKwtNGKaP",
  "key16": "2ecymkuMd9UPAvqJ3AXEarhF9XF5gCi4SedD5B7ddVmvgjSK9BFYJhjQG1jwQEgHEXRJEGS6M25FeAissrRqP5rh",
  "key17": "5KsEqJVECQpBMC1b87nt2wvYB4LTdM8B6tJgvvqMsXP6iuMvM6iB8ayVhYagjLZSZajr1vNc75V2LYA6MoqF8Jft",
  "key18": "3xQRJmiT9zAZsJc7u9rhE2LeWpvFVZ3vrRUqYkUQeX6JqXm83z47Nj4hAyj95SUGjx4vEgsgJbwKuShixDgrXaPt",
  "key19": "cCuoPVhbQi74BhAFtGymo5urmuWUKbSyJTX3bSnpfm1NUAUEn21MFpwCUCXEKHQKiTAtCaVHFtxXBwo7dNdS8g3",
  "key20": "3sF4SBA6DqDpDkjQCbbgNpsCNwEaFqiJGxyxQTQWSWTFAvJMpuXDyMQTCFBJ1hfo6Fskd2hkjHzQGi8N4kHGDfyL",
  "key21": "5ADTxZ6tkdFpVLFNHD1JwXGxtNTJhYVdzgreLnExVWVH3tTtFDnTeS532eXh59njivrTakA4RQwnR2CG68djkj5R",
  "key22": "62JkHKbror52wqDhyMwnvDabMiC2btKBHKZwsrsA5nKx2UD71L8EEf399qaixSVLMZi37iYDhf64jHuCQ8decPWS",
  "key23": "2MsM3KDpqmTnoaV9B7x5ii4PJJYuPQCMnGobT6hSNpE376dHRvAopGGXfdrYkNnK5j4LKXQEbctBxojox7kFAMXd",
  "key24": "5KgneXQCnvRQxJVgSB7amZmAZntRjNqScgzMJtLCShgz2m8WbaDh3BEkffWE5WcXCSYjD4MZJmDWLU1FycsiV8sG",
  "key25": "3RzYd5vZakdycmRiYuDv1RvFWnKC8VY4p7KGcMrfeZ4QTREUFFTVKMTdcJs51YcaJE54q1ozeLhT7nzcYfyKApDJ",
  "key26": "43N6geCamxrP6H3uSW6MMpNYDG8DAX1PGJ8RVALT8YQ4dc1u4fu85ihvq2jSWtmi1cMixJepXAk3SbdhvFcv4h2s",
  "key27": "4PpM754ctfj3W6hFqdjenapniYzaXUAtXtuy1wgbJzzXswBhHnBNWUWa26NwbPk8Gn3f3627jWgEiGKWNQqm6QRD",
  "key28": "dAtUpG9XKwNCr5WftgLJ7fXDyKH7Q4vedTzyhQuapRj1QAybq3cUc8gMz3Uavaq48AUqNcWcuZWphdqozY2ZnJL",
  "key29": "mhazLrM3UQZNaZmjXZBewYhy3d6jP1Qiy7TRJPz2uLV8hzbuxNjB5K2mDxied3b9XTNETpAjt9ZAUuVsoZqFHuA",
  "key30": "4rAr798eZSPv5UCnoqB7wBh7Ghp9xye3n3k8EktY7PLMzDoqt7yUs81MF51ev4z1QNAbezyyBbEvvKsHTsRgUivw"
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
