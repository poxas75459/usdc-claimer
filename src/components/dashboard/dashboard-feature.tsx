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
    "65chKpCv2VoWNAtBRftj2RQkovgkeTbLg7PvKKyYp4NqUJhpBcmW7S5Dz8ZdnqdUAZh8MqNKmsmvYjUxBisbLmXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djvoUp4qLhkVuo6u6w4oNRoPotmsRLtXpQUaBLs7jp1QrsTo1FRdLnifFhRnZ2PvKavBveHvwT6QaxLtyD5jnB2",
  "key1": "4d98GrhqnBbE68bcTfcfLXdok5QjG1YCTShAPfBaFMkU9ZUekZWsaaLBn19TwzVzNd6mGhNJG2guaXUzvbxHm64f",
  "key2": "2R5LVfvRXR1URmTAitcwhmCh2BWmK5dDtLZHzPd3SmUMxEwEYvvWUNAX5vs2FFZP1RH2pAwvAC2yo5ug93PFr9gb",
  "key3": "5UViBGMFcZ7sAfipRBqKD2TkBMoQLXf3LTKx1n8C7uwQTUSXNz325TLaFcZx63G2jubXbfPexrNJX6EEH7FYaWjT",
  "key4": "5PRin2dUGzvJzqN45BTH8TQdBU6WH41wrJsfeGywihzXRjKdfoNwgNpP4v8tyfWPBzMJAPfHXJT78afM5jXTsEW",
  "key5": "2FLohmbicXK2CRa81hWws9Q1dm5jf7thpGxPzkBde8rtCE4d99qTPcJJ6rr7dyQjx4kqHhijwgB4vsQoVXjByHd8",
  "key6": "2kKbbjDtJ1xHRP2diHjekGEoqJP4bQdW2K2Hz5TfnRFXTLXezTJXrkCj5Wr4MwnyYyEhaWerP2Qwb6NbUtTZMyYk",
  "key7": "61NVVLUDKnAYhP3RiwmDSRuxc4Vua2SNFhmigourSF8ktjvbtu8Ztfr9mbpV6qYu72pJ2eMZzcmDWnFGti2P8Edq",
  "key8": "54QdzPBdCfoPDRVFAt7Lu9isi71fUouqSPEBRb38Hgf1NEyuJ9zCirAaDG6849q4P9rUgnrrkVWfPzqnncQd25QL",
  "key9": "5wUnPVKA3VwPSLpcXzKJC6DYFjYBUFrpXZry7BLes81nS4tSsZNUxrrV6QNiuKRsHRXcAukAKAuZ8Hn2aVMqdoC7",
  "key10": "66M18BBquA9HXHcNqPWZFZMAcjwbzBT2bzETraoFxP8ZCnT2bFm4VGkYAyzTMxAQHsNzQJgjD7bxzDiYdzBdPunU",
  "key11": "5FPJGx56CDAqDKtHjJoUsxB1bibAHeuaJhzU2aHP6hwH6cSGV5E9WXNRZ8nk2r4vvWiPhBQaVipXwK4SwBryQB9j",
  "key12": "2kFrvuDh6datbdaecXGSCc4CEhbgotFch98QywBGEVr5oqEMFH1pGKtedTkh7G4ZsA2xW18C3kB7XqpgnxLqyUQZ",
  "key13": "3jVxfg4b58hHWfVtPgqvFAzT8CxS113y23UmfCRbJy78wyPRohgen6qX88nxb9GzMWZjVfmJBUiJkyv7k2rMB6hb",
  "key14": "5FGAcjQHCiRJP5sJEtjADc7bTKkAEcVosT5sFCqq73KdBf4SWmHVhMEohyJYnq9tH7zuJiv8QomeFzHkGUBzoowB",
  "key15": "34BChVHDV994Vj5QKb3cWuJjdToS3WjyDvRHZoxxyLjsMRnF377H9e1WTgAAarZepKuRcPjxcifexy7RYZJXpnVU",
  "key16": "2bEfttjPZ35jCMKiihLNjjownuJUYcVZbnZbxttMp74aVWt58opcWEpfWwaq8fDuEJp9tJoDa48meDcyzAnevHLF",
  "key17": "4Sn7hGtU5woLr4FzVY868yQZcbMwedGYzBKS9bygS84zKG7GqqDnMgsrThxiaDtbJtr7i5KUPXYrBF7usDH3NojP",
  "key18": "5U4K13mRRYiFCbxPDE7M6bFfGdw5AzihnRu2mh6RtNh3BgvUSCBrMbgCP4jevjweAS6ziwB4nX3Lghvbefg3g6XJ",
  "key19": "vsKYA7weLAUzL8XvpXtkKoSU9afrfi7AsfUpjEkHYByVjdHzKkmcETfzyfekjz9HY9ciHv4inKfc66efkGJgDUm",
  "key20": "5jV8HNP8ajk4rBPMm6ZaJ1gUuoZLMPrifNNCuYZTtuduhfsRCjWsCqmSwpt2phMCKw6cb9y8zuYS1hMPtn4zHQfh",
  "key21": "46SACqdwn73KwP74YEXEagwuKKuDF9NbN2F8MW1D7F5q1uXQcHrQrEZHc2f7PLxNJBzUvAGttMSxRDmSkrYX9Jrh",
  "key22": "MuzNL4mbzqHJcUs2YWFWQfZa2PACiwTA15NbsMTmdEHWUZyCvEbZqKou3aoMNC6qEKtWbUVh9Ah178bVXheEmvu",
  "key23": "3HCg3iQGMhWdfjfxy546NS6s16XtWbGLEoVAeBLPkyT9VhDGEB2opiXC1Y1fY8xbjVs3FyuQyboiARSpHP9iycDf",
  "key24": "5uDh8CVCVMfCztQSqfvqLwRfR4Y9V1rmmZxMQVEEgM6uiXSBk5cEzEchzL2bhMP43EpRHtZ1f1MnGAkNQED6gamD",
  "key25": "91X9ZhW3CvabNGkESysguWskg9zfdjgF6JtwhjWvTqAbe6etu7KTQZzvEYVpihyRWvpqwhZDPwPgtAJA9gsMmJk",
  "key26": "2skFxnQ7SnVkXdXxMt6RFeCVz7DyQr5w1cqRbgwBaqLxyrsYBw65Q2CysdEBBgWincySUY9kuGwd1BABbmptuWCM",
  "key27": "4HBwaxZD3HZKQjiEgi9Y7cuLSfz99WAit71Je261HADb6V2KQyc9AkRxb9JGsYpUY8XC9yYWHz3An6Z8Xgjg31K3",
  "key28": "3eRxnqzpNDqVFwMgu6kVPGhFFPTStBbDLNb3UzZg4fuukoEAQLWbGf4bCiWpJbQs3quJWSM5Y6zzK5LBM6G3goQ1",
  "key29": "4YvojdYaSxDGFK8xzS1Z7Awzc656PeUfRNihTR1m1KqvX8wpUpxRXuS57MMU4W6gufVZTJgAfZWEmoo1faawihNa",
  "key30": "3GVhwEe7y6pF353MfCv9ETFojacb7W7KeTrzWQqwEewxBtKjrmC3gqweAuQXeM1vFjzNeF3oB13VnEgGfRwxNreL",
  "key31": "446u4yLxjU6dr9QxSF6nDamc51H7aNb9PRqjedfovCbLmb7v4dzzo5kdXESNMekgCtTL6jaEBYxYMdVeq58AXd65",
  "key32": "4L8449MjibTjBRZ82zzndHsZKV8F41mQ772L9dHM6T7yXHzpNqGNeqcSwpTUFZPnCQBE9dfJdoEBUCe9Bi3Gb6cg",
  "key33": "4AicPT3zAb8vQ1yYjsEUgX7Qu3BRdSLkSpJBBsuf1mAo3iuU8rQsi4RpupaGaxBrJ1irSyrQUp1SFSVMF1NZ9bHF",
  "key34": "3JfmuJBUZSuHJ2RVPsBYvzaiWqVCsBKNZapUzytQBFfVF2fxxKrG2ANVBnYyeVZZ9PstSiYZvEaibcLKhdEC239o",
  "key35": "52RUS75p6Ji1KfEEdUDx834yXtcGz68XfbG3nvqGmgMFp8r9eCBGDSrci1DELj6mGR6dVkAeUA53zUCMwD9R6fH8",
  "key36": "3rxfCBuJf26pAPP6ghsn7HJ6c65V3gKxJNdrP8KVrMoRaa5cTmwVuWcre9Htezn5UXz982qkTPCAq3hK5LpXhPFn",
  "key37": "2rUiFqb4duEcaRLU7mDW2BmHmygGbLuizhKnZTrWTe4KL32zHUB81TK8LPunVLmmbRVZ2j1TvX21f6A42KFDXzAg",
  "key38": "3Fo9vBJb7g1FDKdUNuG7zibDVp2ecUNNGa16TCtYUAN6nDgyCvKzDrXnnc3de6PervWrL2b35fqiZ3xFD5UkBsgk",
  "key39": "5qqSZbG4n4MaoF4bmHSXWo1htSzKRM5zQtknDUrQYbmpr37m8KVNYrDy7hq1CPVVnnZTF5hJUGikUZFtgXEcb47w",
  "key40": "5T71qnYh8a3ug1ERzc4RCSEvb21nU3ptzVympaSDcSh8XsNNBtSnqbwRdNGoAbKxdKjckYQeAe1UvC5mg3js21H6",
  "key41": "27DDTMj9cXMtg683Q2b6pTgtvtXjRtkuezNnNRrgkiczRCm8BkniS3D6x996U6R28zmS97oGQnHkyJ28b6hZHoLs"
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
