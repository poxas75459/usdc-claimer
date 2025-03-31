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
    "2qY8KKg5KSo4n1DxW26s2y4H78tVFNH4i97KZhMSqCUpcWYmsCiHmzdjx1AuBjE94FsL4pJaT1ag7MXZUebuSfZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tSxx7g9Cx3MBBitSHC132vuCdgAWb3ivr4rKr8dwTdqisyc9kmpRNtoTZAq8S39QDAoTHr2u3tWpWoXeBJand4t",
  "key1": "2f4y3YdTnC3Emy4Yf6veezKr8oVNSqSQakG4EzvEBu5wnsZ85RFRRusam8vVEmasvfeSgNnj8RkcLdDAU8bvDoJ5",
  "key2": "3ENGq9p2TW9DKgxnpTRPGHpULBAPYYm4XPzpmjRAKCEHZsoAuFZcFax6FfB6s2GXZT3aLrzfCckQp8kua5YpqAi",
  "key3": "iYwSU1mQdKeW1VpkFgnZDRXEvcnE7Gn32fCEf2TH1yTRtJNCxmRpawNtX9WAyRQgL6FgcTXVP2Sjwzbp4cH4mgD",
  "key4": "5GeTRrToFXEWZpzJmfgjtFJHL47zWLJ3tQVRPZx6MMTFGFNLJv9fqtv2vZHKRhG7jGudThRcc69tuRH1DrC5y1yP",
  "key5": "4R3DRQgim5rxTsucDCmJBH9rFzGUgtNiBcXLTPqJ6pj2bYwsHoYyvmA6JDXLAhFgpytp9RGd7cdDro7QaWKtwHr4",
  "key6": "3GZS8BSAGBGHUhfkUxWKoE77wksx8DRELZVr7Vyi3oZubxyMEysAS6bHApn5R9RAaD3UPYUEF2KUWi1XhtKNmtAd",
  "key7": "5QzPmv5r716voqiPtFksiijMDbBcbVZ4uTnkWVhetuJcZpQuaxykuFhcUD5nSvyp9hR2mfyXCoTNZcycUQNdB3We",
  "key8": "u9ko47jiM3qs768MqhjX3J2RPDc7i3K9R3TudvGKaGsm3s9YrgsoZg5geZ5BuwNPh7DNdbKofBBFN884htteJKW",
  "key9": "3kd9btkyxdTgb9GJ7qznrbG7RJAEGfXovSfJjkL1R6Db9c3325SrZ6cStEP9wAhBy5ethhNJgWi7Ctn9m6jnpQiW",
  "key10": "3Fmv11j7cFcUFAMo1EzJYHKQc85PEKbuUCRyYhXPbaUk8xTkS8jGzZV8rTUwHfx7n31U2gfKrgbB8QWabKKyS4gE",
  "key11": "3oheAe1WYUZT25wyWQXvUXzeSZxvrMRc9GSCuHhrc8G9LyeUQLSDtCVHu1iXpme4ia9tHa8gqNDRueHvyG3KQNM4",
  "key12": "DWAPXLH8cCxVZC4BkTmS3zNhV9qaWnww3ZMpuYHmGqWr6JYGK2SKUTXnbPnJvFp2vpaZPuX7L4SFPJyaLknev7S",
  "key13": "2X1pbsRNxFWSfxhmooPgiCVfUkygQoT3arUVcMkpEQJWhEh6L7sLK6W1qYWrEcNSV3TmWM1x1X6vzUm5ECMr9Xoc",
  "key14": "4kwZWTN57nF6hLAdT8emCJrJvXJF2Z4Xv7FZhwXeofcX15zrqzKgRBNE8MADDXeL6KkqJsBaKhYgmcyp6Jvd4nQu",
  "key15": "4qVo8UMXPaBCySNBftMbFGsU6T6MQ4YAR7gLTadeBzNakcAQ1pkpEAAjcuJBJe6vFMXMDGcvWEmZD1atZ1DbJF3h",
  "key16": "5BJZy9gvT7sc85Pu915w49ys2c4p59xDF8uHSM9dthEhCrgzDdqvmgLrYNK1RQvGDuWWxG56Hke9FvnU14xW5B8",
  "key17": "2Y4Ljx2tqRvx3gqw9CYgkcjtefecEU83hYvTbynRmJysNbVyCCcbusbheNBxDWzZ6jT2ySnZ5cbZeCK5sHDYUy8U",
  "key18": "28hi7EKhc2W1Q6iz9xe87i9ug7WsrrWK7Wv2mYdSkQfGSR2xg3U2AGf7b68JqnzZR8zdkLaZU2VtFx4HqMFspEoC",
  "key19": "2NYX8i35v3gZ15Y9Z5kKrp3wxTWqxSpEmxG3ejLTCfhctRf311eoNeapixWpi27xCD667rv1nqSKANGY39TAP2T3",
  "key20": "4DKn9QDgrcbf5wUryntq9yVZSxLojeHUKsYw5bj88fxDJhJd8SiukU6HTa58HSwYuZasg4AqVXt2rXC1jnxvqKsU",
  "key21": "UkBX4ZpzucRC1FHP7U1kivUjYVxjMChVrd4pXQ7C3T2pJDrNRuf6RXXLwMvjvPcgG7ipgQQD4xTb7M2JHVdAr9E",
  "key22": "5bTBUFvBWwxNqHDMdxuoant7vMY59TsvESboyTWjNBMrd3eeZ5rhRfnNrgnEexiQQvDEZhSNDQ8MJ2mNmF28MQ59",
  "key23": "2dVZicEDvaaSf59tDCCgASrEmJQ6q1jhyHf1WuWZo1VSsEgmhjcUxu6YVH4MAbFrB2abcBNVZsG6x18MdXdxv9tM",
  "key24": "3ni3Sp1mC92eCeDUq7rmvKyZgbmUyzj9vvRq4MGNTRCuKkav72KRHoGycWP5M8W1En8JXe5vbrUYTs8qbnKikxFt",
  "key25": "64R8ThX71hL7ECH9ff6sudvfhKK58JhU4T9FUB9LN78yG7XoHqPUGkXT5ecjWfpo612wct5XDZ3LiXNfyf6GWoNr",
  "key26": "ubCCEDU3fekgNLfhib4s9Lz85NVpVVjLch4CGMLysgVwaeBuPKkMcbxuL7jYjjEuBDsGi8ZahMq2BdzqXLAZnkE",
  "key27": "2a6iFkd7arBh9EFFbc3f3W88q2CKW12DyKvNF8pJPCc7Jqn3EDgwzJ787NUK4t1QkKmLQxavuB731BhdjUAK8ft4",
  "key28": "2rjLGN6UVVsKSncxzfVLa4VNw6J6FmPgNckn3knYNysUGyd8mGDZS6yWPTYQ11pmAwMakGhjwKo3kx5R2MdKhk6P",
  "key29": "4dj588XVouKjS57VLFewPRPDvj7Vf8KVHwpKnjvgcUDmEfZcHQ8UE7NNgt5HE74gik3PoLkbyCFvJLjRFWixB2FW",
  "key30": "8NnAxdLKNiw2nDHcAhz9ixLvN9Mn8BQx9KJeH9ittHnuFPUzDAC1rQeXECkSkJQsj72PQ7W7XvD3HoGYNujtw79",
  "key31": "3zy427vR3cizQDVcDW1xc72YLY4fCv2PjHJon3wEC1VkvW9XgC6XgKyDL34tYeP4kYkivogyM8DdQKzUNPcHkPhp",
  "key32": "3t4fZtpb6q7W51uus6hEYHCPZtDbUrcEJvsx3x38pf1L4Ms5XRUvnmpokzFhYn9hWtVpgc6xPS5ECccWa2aRksNV",
  "key33": "4Px3dMJwQFKWAK2Tk4yDG9xcY2EhwTf1uqSfuGjid8E1FNyFkoR29fcXZav6huXcdfusgNCgrmjVHumEsSqgDteH",
  "key34": "37ifZxFCSWUjv6qtMQebBK49cMoUdV6SfnvkS5GKjD7m39YGXndgBoueGPNv59jLwT8ghm9b6hP6tYXXsWQENErK",
  "key35": "32Dv7miwcSrwoexgC9WJEAogKFfNrBtRrpczWc5bjjKetbLtD6dyAWZKEDthjhZpUDTAt7xNS3qmKYxrsWN6fcKq",
  "key36": "3miMDjsTELZ5xUzKPjrJ1kgFAytBfKw8sdGk7bRw1VGo3kQVPVMFMecKiHAibxn83kELjr5wBFbHSC46c8RZ2zpo",
  "key37": "3XF9JpHtTiZEV8nMdowLbVDuo6jqS4SuET9jrjodFzRH5wNWiXWJmRF2pj75KL43SMSNrjyzmvxZZnvRQv7rRgyo",
  "key38": "YkR3JJZZmZPGWdR4wH5Nop9QtfGSLD8Q73K7EGze4bzGCNDeJEaqEmFJ4bsDnkMciTSwEJAxVDZS2LBb6Eue6mC",
  "key39": "31eNcHfgVRuTpRNuFb1qpd4NxVjmExsnCKbsUaW4En8qYJAHdcsg4GYwruMnDDh4EajELJt4uPgL7CaxgjCMYNjp",
  "key40": "5hRmJyvX4NjCFm11BtHB8bim5GeawLo8QqFvorKzPgxP1G8W6LykJZPaXLy4Pn5DBT1pkVgfRrSb2a2YfvSQK7Gi",
  "key41": "3R4jAwib8c4eWVzKyLZbAs6diVKupfNHLWagV8ypGYw3JiL7d8eRX7ZoNCSZHgHdDRCmMWxpi2VYfY3CDrcFWhqw",
  "key42": "5FhwhX7PUzw3t8imGfBUCGNxowR2UUZqVocqaNKxzvW1ChciAzDQCw7gE3UvrgUrznJNrkUmUnUPNhyfSC531duo",
  "key43": "5jJHdg89rgEWbrKsqAPnGJNwSaLZcgca35EHg8MEbmxgsZUaFqDbHhLECH1w6RaFEL8nuBUFjuH8tJc1UYxUFnka",
  "key44": "5YfuNTykmS4adKHSLbDayJ5SvjtHU2aT77dd4QoNnCuunr9RwKcMHLaASFFPsBbtEYnyneCDmwimcRiFUjZqFWdZ"
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
