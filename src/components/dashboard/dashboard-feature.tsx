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
    "Mf5SGxqttnS8ZiQTVNSK6Q5Y4gVcY33ozbafP6MensbQfpUSFXziTaEtLZLxmUVsuE8kBPbgEHMRx6htoThCreV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61kyxw9Q4NPAkjLMNqobGmJQwbv9tDqU9CiCejaGV6wXREV8NySvvKGVNTz4MdqEzziVVUhPoZNMaHBeWNKm9csR",
  "key1": "4ZhJabaUzgRWgT3gqRq5yc3zkSmqQtpuqYF4TVu4eLjyARKrVRYmrd8RjxrqZ9zUH2sfCHUY9fuAMqiVMuLLsYqB",
  "key2": "2rMsFAQzp582vcF6PoL83idBnPjJm6Ro2imBzX13A5NnMm8v9AbzwpJuXxGXMsPYJikx8jXrqUrf3wVyBfa4dW3k",
  "key3": "3b3wxJJ4FGxBpaD4MwVhtL7HX7y5dZEfF22gu1JtoucAk3bxD2SarMW17pY1GpjrJEapQRbA6wBMQwxyyZGXtaN2",
  "key4": "2sHYhFpCr6qV11mnZqVG2uqB1qwGzdjibMBBdF9a1FLywdKpUgUiHSAQR11142L3mD8Cz9SjyhZSuXUNv7Bh1qj7",
  "key5": "3RTj8mBiarAhqinYB8ThXYfurrrMoSBYeWm5qkfUuSRqCJBGSu4rVSnw7gBzrDj6rQTNbEcAHjnKB1Peeid3FV2D",
  "key6": "Jf1mU1kvRu1qXPDpt4hQYmnrmFsBnHja4W7MMXaZJKg2jYjLzgeMFZqCVaxMP8CnVzJxenmHMyLSPZEZ2Sa6CEH",
  "key7": "2tfoefhVzoCE2had7cisHW1V3CwAWe2eFJrMHcE6vf6jSwgUCynXSFDTgvxfhBXVUHaxRrvHkd6cnYdQzAYnFVDs",
  "key8": "5r6Rb8Tb2prcCG8RGvkVYQJEBiYMKdmaVpdvs8sJ4PBpRXcGBgguQs9Yntm8Stm6mrZ1PZQkbTQVxaELZz6s2nf1",
  "key9": "2ttJqKt98hwfLtAXGZoGsPN17KBUS1eW1oRPiZeDrDDTMNnj2QdQqK6VMdq6Rm8qQFCiyiQJVT1h2SFCV7Eitn9S",
  "key10": "h3quqL9tx9hTCbzkShrX94yNGZPeHVTBRMjUDkv8xba2zs7wt3wBuSeZQwX7YjetWBkQ6THgzYLfJUCqVqAFg3t",
  "key11": "2EJHQRWiuRJveCy7cZSmJChA6vpdpE6G7YPuX1jt32gKWgX8CMYauLuUi7aZtyLU1inweShQwNZi1Tm73jbqW5LH",
  "key12": "2oeKVtRkERPMkHSax7NyPVBB29QiP94awNPrUKneqMk2pqDEYbzzbumMH33UugL9Ui7DPKGDsAKbg3wWHPGkgRhU",
  "key13": "4WiSA8xQcpnv8KBZiU4CM9CQvoLF7J3M4W3szWFALuatWJchsavnTs2Qs7oPpaaLf8NkkdmL4MeFQwWniGupkQwa",
  "key14": "2RLJmJDEyDT9N9Njg6HhtXpY1zrczCuSTYKM5xKENe4MBi85SS653bcW8cgESRPRxj73p5DKMvFgizJB6BcecHsT",
  "key15": "4jQw8CfRJPcSUGnh2ABGcPBMqrM618qk6Eg7nsHT151Uigp3pzS9VTAxvuJq4vB59JGsLnN2FhE5h1S8g5hqRxjB",
  "key16": "25V3RmGaAVmcPGd8j27V4PubbwxnHC9SyTLfZxPcDSkwKK8Z8oAMQn3Ji7sqBQpS1Yaz5dZ33TpeFeoHNT8jUJ8b",
  "key17": "5cCDcEqbie1aT4vVahYxFjA2KyeVcehdZf5A8w5xPiZjSdGxyWmMvcCjPRaxYdLjXRKERzrxLTwaV35oNqbQbPfn",
  "key18": "4zoY5dQ18DUCmfGuvZtL4LAkhoJvFEX9KhX7U4dco99e2qipVnJnFhvHorkSaTrz8xMrYVpzazhNCcAN5euTgiLM",
  "key19": "38cjknR5yqxqmVnDbrohFEdnbF8F78EyDAzt297ekjmHXnV9niKL4EdLVBLaoL6u6hew7CFq4Cj9pxSGYHWg8PoP",
  "key20": "64LMX8v6gQvFkjibJgbysK6JrLTDV85Eqx7nK68tkX51pyBKYmvPju3jxHUwJY7KMR6ddwKc6wjThEa1qGykPssS",
  "key21": "2gZ8UZe92Z38CxfoSSynTDarGBwLLL9pGd9tt4dcVFUkzqobPJJG7rbJvPMokaxwMtoATcgcDapu2xN4y7SeXEbc",
  "key22": "65q71ZHwhMdS6f7WsXxWzY6Wa23BMM5Rpz2wmPa1qWvbGKXD2TLsMhdVrgRJwFmpoE2LqHGHKNbG2BCkjeEg8pb7",
  "key23": "4mdpZy214c78Y2YZfKyrMMCLKbSwziE7C9moNgY9AyUhJMBXizCB1PHGrZ8a9oePU7B4BtQmkUegWtATMeH1opBp",
  "key24": "31n7EH9zsf7XaShLh1BzhgvvWaU7ta4CEZwrAMf75GRntemyUhBK8KW5vq1wWPkiYyA1C2EsxVpLHHRdTBJURqzj",
  "key25": "4dC7SysyyHE4Twr6FcMgRtJrkT1b4gZwkYf2HRi2LJBhw2CtEwXRqYvswsJy51D6CA21mvfm5H3VHZH1K6Cp3uzb",
  "key26": "64FQTE8hXCqQHBzAqMTbhsYmTw2D2XXhGcFwwS7gEfUjCz4yrgSWsk4C4fXr6S49tg1XY7KBfxUvrCiohsk46oc9",
  "key27": "38PkhqPNwyvBpyRPK6haFQWkiV8DKUzXtpkeHAnLBFnBqLFStmzc1yZuNVP3vmei96h2X2sQZiBUJgt7WZ5oBKdY",
  "key28": "jbgZWxMNxJJ3JvyPp2VaH8vp8xku3a7aVyn8NdvMYcb1wHvi1P2RqAUdZwNZCw55Aj3mjQV6dskt486QK2mSAtU",
  "key29": "4AE4qYfKKVR5RAJEa1pudy14oLVkdVuMxSjxe2qXT7vyCBmF6J3ZLJ49ViA4qLw6k6QNkRDBfaagomu1sKLJX4AB",
  "key30": "67ZELfVLwsr3VKywWRtwZmvppzE9fwSZbvjJf6P1XfurMQSamNmKkCpadBBk935o7AUFdtJbSu1vLPLAefyFHJfB",
  "key31": "3UQHJi4EkgndFeC3Yz1YSmDp9ksJiqa6hwcN4E4pLbbV7a53ezuq7RtWZ53yWHapMw898thzj2arEEwwMJYPcQZK"
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
