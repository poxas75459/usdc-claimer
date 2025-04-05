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
    "vqmcU1BPx8SFutG49my91crCSBmqYfxW85XEu4pmowNDu2E422S3ZBA8metoR6qZdotNsqnSZaGTscGj4P25k2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfkAB7TdJCGCD7CwwRoztHiVwmyY7MVXRqH8HBUbAXjk9bykpXif6Qrkjh6wm2AJ2CGN6NsxAgEHTTijdgoMwgb",
  "key1": "42xonJ23evtTHtfeFLiJBBBYcheBuv6KBF6tCp6EbqM3SQ8iWAW1FHcdKkaU3rEtYchReAyXrthiQEaJ8i3XujZP",
  "key2": "5C8ikg1yL6fiDZn9cqwvtrkcm3DzzzquytikqUUcsUXa3m7L48stonVAWPoVtoe91rEj3j232zZtGxWXDq3HiY5J",
  "key3": "2R3A52mWuk8CwgTWvBVhHqWD1j5xM8BuftxFtvSDux2ryKMUCRTNRmBiGksKaTVz4oC1XQ1S1JQMPXPLbJoLG2YT",
  "key4": "4z9ARSRfWrbTyjB4LYWZ6yVuzjbjzoBdkqHi5KbfDKwsVxEpEpxnpWVZommxFaLUZzxk7kpCmSp5CCWj1cqFPauX",
  "key5": "4Ps5eaEov39K2FjFieT72FAv49voUfUgh3vwCcdvwAg4uSz4sAGPCtdwwkuskHw9NNDAttkqjxbkb1ewin6E9vaZ",
  "key6": "2HUUn538akUdFbtH142RaH9DmtCpWjvDciT71KnVkMBpkCnQQhQ7vYTUtWoaAXfCKtnRkEC8RqaK4cAZTAaceS2x",
  "key7": "5ETLRVMDJxmTCdpiBHhGsiVfUzyWFqdrccvNdLY7mHanpb67oXbVX6PEYX4h6cDUmrvmiFcLfHeWQNJaPyyWZ1fR",
  "key8": "645qTZVpGeTciWmsc9XAWCAQ6GXBe5cud8JpjpNQ7PuiwE2aMcQmQNybX888jMxVhep599cdzrVibVB7uXWSMf8w",
  "key9": "5q8uMwwuhqqZfLgZVQzM23swWdU43M6CRHRN2mrGsoA2ugzuDRBcDXdN8WzKgncTVBEBDzBuL3Uu2pT76xeRJUiA",
  "key10": "43Ye1E1fwKG43GpaE81XJaXVgdie9ecdYAc2HA72oCWEYiVHTUeQvZekEokE6bpy1or5bYCQ7Tn8v1xUyMWVcmr6",
  "key11": "EKHnTnsqTpQW4V2qHDNpdBkVKzYYFF9H2QFdt1vdz2gpU7R5vD4QNPN31aAZdqQtPbeQP4E8mA2bRR5gYgQ2WWh",
  "key12": "57NRK3tUaN9wNYocM2rUAT5DVLuGeSHB6sQPED36K7bAysziU6nxY6DMdxHxht39eYPptAqXAfHuSbAg7nnV6VZf",
  "key13": "3vM6FGx7jWk5HaP914oevJ4Z5J78bTNnnSYwrevqELjCi9dGXE4RmsunpevMGWxN1ndHJK11pyCXFJ9UsxM1ZeZG",
  "key14": "4cp8EFgp5MKypBv87YgG75U5H8RHy24KCgJaWqTty6z4yPidjSAJj3E89zA6N6nFHvq3uuzLWLrezCRHnrtxHjyJ",
  "key15": "3cKNShHwFsVjHSCNZqop5e6Mc4V9fvGdSxZCvDNfs9mJ4dxP2twnfomhsxvwhkXFdAzWgcZZ6RzZJCGeWjHKLYS2",
  "key16": "2UDYYyY7snrAVz85iaJitXeTw5wmoDoAGLeNuK6277cr2tAWTSf17kCCwVkX5WpGVF9KCmEiQc5tf7KvTkiZxAWe",
  "key17": "ZuCniFZR7U2X8wVEPVZM4HJgcZAkMR3eqcmGKdj75g713ExmWYyWPkkQiwHtB3jp1vPCgVuKcMhSfPgfVx4HGzv",
  "key18": "3J65H2svmJ7i116WrKHGv52LTM9i1xzMUqbKRPm8qfYRsum2ZSwHxCt4V6RU9q4QhjVb3q7K2FnEe2aicN4ot8jZ",
  "key19": "4h6X8AAbJ4KwUKPhTiCyu6F9WiDebu8fjzxhNzgkZDBSiHBAeGisiKmL5SLYTvNLQAvT2v1YzxJVJCutXQfpG4Kv",
  "key20": "4dHrLf9hw9TvaujZLGoLLCaeyhHA9Zw7NAz8DR5szrEccQuXEoTaHiEqgSCsQXxSndzGMQprowbiToi4puN4TaqW",
  "key21": "512xDGwMBUjPnxNeGQRhvL14iMXMedycoYznaEAeTEv3ptpwW1iAV1kXWwd6j4YqWvjhfs7WXhks2iBN1c6NfcmX",
  "key22": "SyExpBFXBcmS64yaDTg7oLJjJEcUJLi7vMdpiYNFvTJESy9VWL3Xp5wPBobu3U7CEaZcnvkPAkdCFJgCx6fRQVs",
  "key23": "2DBfHwbk1wkLYgzLpLkqtvR8tnbEH8vWHFnRfxokbjR8RUoFaXNFATLJcBxZwDciy8SyRRBwudroB3xRJfpXdMMw",
  "key24": "V3APgwTHk9wGibPjbwqNoRo6WUzuj1wPQr3EythK3M3vrzQhFidjBhFXxvDKZ3mnELvrvujXHbo1U2xzech4ADF",
  "key25": "qvE5erASH2KnoxBXpFnTYEBC7pZpbXfP1g9MWy84eGbcs7agJEpEukRYZ2arbJ42fQnMcDWZGAN98ojgNw96dUS",
  "key26": "2vT93ETb7dCYC9ThJCiiy5i5txSRUvZ9KUCTvCYDvZg6a3TgQnvk9cmsQYJmDZwq1fEVF8jENEpcjobrpt2NRWpF",
  "key27": "32rPkNkGYaXtZJpagqYqSd7m4Ufe4EghDBWVx5DnR5GGjJke7qLAFgbQBmCbcabMrPEmTFWnPnNwfkWaaCyVxVf6",
  "key28": "5zop87DHNHYF5SU86WVD5fNuFAq6KCPTgRuhxRjQwcFCjkLPsjCkHKr9CUo2ppfacykTtAvTuKEges8UgtiwoMfX",
  "key29": "3cn1iCbPuBw3TtsyY4mfnvEKguesx8iGX187pJzt6prvphVn6JHUNCnLU4YLXk4aCmzNAeATjVEbodDhTsFGbLJB",
  "key30": "3aDCxDWtSweBRPFTHCyJx6EdYgqMGaC8VpqMbp1Sio7DPeAxiWDNy5ZvPueuT6SNSLqobgMYcojiaeimWmXVjgyb",
  "key31": "5Ldd55qYBH8BGu3FF6nHuWdmoAxHmvCUcToRVJ1rS8rULUKZYXVaSQnStQxuPekKuUSuvtXosCdped3ydK3wDZs6",
  "key32": "4Rq8RgH7no1tvjYD9up4AH4XmjZfBwKw1aukxiKnLzqsSSZ77ewbh2Hktjbo75QXL2ayBfG36sJTux8rtiH8Xqa1",
  "key33": "3UNMAEH6J6Tv5FVGuermNEmKm6UAR84YuTmt3arKoYh5S5K69GTwN7sTHqzGb2kAz61QivCXNgK4eKp36nzhG4Rb",
  "key34": "5sn5rz5f79Chey5owg53o916X4EQw6RxR4H6AGGADnmtcMijxaoD6cLkbUfc1jaHnTCsCxm6cAxWrtNzohmcDLyT",
  "key35": "3i2m3b2VeRzArWZavAqFcUiZ2bwSUEFbrvPbnmReahBQQdvyLQyUUhe1wqskkxHx6cy65cLKe6RNSB6F1CaqPoQt",
  "key36": "pAYb5dNuRetqtQfpd8GT5dHxeT64ngGcDApAnH36MdbCMisarpNsQBSQ2hRfFX8bR1NZsLYuHHw5PQTuY9YCbf7",
  "key37": "5XKkYEUCiQWi1UxhHdsvo9FUzNRG1NTtub3hSa5kTdfSMomA9DEogs954uxhFk4vwi5RMdmwGRGxnEsH2M9i8wWm",
  "key38": "XYEnbFUzSUSUsYqbhE8B2N5oWcodv4VZ11ZrMAHborkVLdfVRxiDqeHfhLmsQNiencJxjagjXds2jyfwdsmdBwj",
  "key39": "F5xH5dzCuhrCNnvN9K6pWgTLfJtajtbLM9CnXeQuYYLRMRYmq5Me8ryRKAeRj7Eit76mGdBMeuE3LVfVqyH9okK",
  "key40": "48WX2NLzpPZ9AfKobVBbkNfJQLNWNLJ4tbGsVEwjKAN4ranC3fxHnrkndJVr3ZnMkEz6eksMuYvwCgsTRoHAHvES",
  "key41": "5sFyvRAwtSpyz6ArbEyu9bCniBhXFJDy768UpAi9oXHLcjujWsB9VFHaFe31JQXS4WgtdSgPQw1D4YeZdWjjdtCJ",
  "key42": "2H8dBaDSXYQJSRTftXc1ZCpfhoX9kLwbzMV3jkMW6Ldw4j7aT3WwcmQnDE4qEC1FvdTNazBh3Ger44wV9Hrn7YA3",
  "key43": "rxBD9ewjhwtRVQwdtRAj6GXoKHYZQyTR5JfAKWaj7pFuM8nNA5UWoJ1V9WQWXFbBV6ELut8xLnvzy4N8x1yRT3o"
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
