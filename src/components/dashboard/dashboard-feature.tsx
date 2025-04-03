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
    "3LzGWtv9PdimaShC4hHUfDQqaXLf8uUwACw7hG6gzkpUp5hRCJUQwUrGo4SQBmiYNEUKZfCRCgTGu2rDPXnE4nmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXi737ikUq2betvr9bzfsFSvSKMD9SN13hczgcrW4NCd8NKcHxzAGfBzW5Eo76ywTQoh8qp3HBcy4CfDpDvPyXD",
  "key1": "2pSHNnLX6Q5ri33uYDmekWQHoGTW9sKT3vMfVtsaRHYqqrZayTcvKa6undXhL1Naj3mxvj399DVDikjt8o5uQKx8",
  "key2": "2n68WLAzt3xEedzMSku3nYDyi2SdpQ5xvex34pczuKrHLL5oAFoVvogZBMmJTfotrVZnPfs2JFu5BLV54GxvxXZp",
  "key3": "4pUHDVZLHoFYaB1EP3S8ZTQ9PToZW1RbjzvGAoafeSu4UURY69m5c6dBK9rgNu3RuodTogzQD2BFijjL9FvRzjFm",
  "key4": "2Fsz9UHUcesVvn5nz4GKpC8w5qqE6ih8RwTCp7h8eLMs5kjnLteHouxjpYEmoxQahHiW6HSSTxNeehnBGbd3Ud2T",
  "key5": "h5GgzujEHoakqf4HvcJjvzz35Gh2aQMBbMNZ5o9R3gvXUH52X8Jf5rdaU3RUCChnLuz4AspAjFrQLtWsBR3dGrh",
  "key6": "3A5eaiAV56nkBTqH6KtGJt1VBQX1mjJ3NdVcApxPApasANe6g7CUjBApeqD5b5bUpdvyVAfriMDjRtuuAzSkpVWW",
  "key7": "5mcZqMhCsqqAaEKsKWeFZpvo5U99qgV7i4s7RPUG6cwuSrdbeFLcPyJKeNsX5R6gfdL2GFDevXVAopuHqYjGVUPG",
  "key8": "4ebNBcXv6GWQkUHVQagVAFpURhFDnqRyT6izLN3iBBgR6yjC6cQszk3fQ2GG9pLCoiKTxQXq7rxxCKK6VBtXhZGJ",
  "key9": "3WszhWupzZM5gAR9F2ychQVHpSJ52fhTfehJoR4PeMXUoiUyJuBrW5Urq2yNZrH4hz7sdzzVUwLAsfnyGDFwNzbL",
  "key10": "3fENtGtVED57fTXTbJzyouK8Hb43jzAQud8oBS7KYJ7fhKk9cc4dPus67K4NnKdTU98aoxSboFUhwSWv3J46bFQs",
  "key11": "eGHhbjcWGQ9uJYJ29mcLztVWRWrAh8qKW4HzXe9tXa7f6VTw7TwZFJMwdytDc6kQzfgTY2E95UbWxPAKxZ75fbb",
  "key12": "4eVUaTjW1pWitHcdt2B11dwkFZpr1XzZM6rH8mSRMuyTguZRbbra1Bkg3EkLL4Lf1iEpAJMYTpxCRu2e2TD8qhK9",
  "key13": "3Upn38DC4nM3RJKGUsGcNBS8HiidemDBH9Ji66LKHa9rjE1pXpLoUE3KhFFkvj3EY9EzLnv9nspShByfmmFSb8VE",
  "key14": "48hSdbCGDMYWhh3NwH2F2CTVvJpvTssQV2X9JTofpb8F14G7u28Hx8rA8YJSLAPNW31DCfULTQUniWH1jPv66mmK",
  "key15": "3kNgcYfaS134vQZtfpwgRcAZ94eqRUZYJEdwSDNyNghJVh3FHuKYHV3gAPiN6popF2Jf1MnqEKwvUyAkt3mz4Pvg",
  "key16": "5TMVS3SUf2PyCWHbwphgUo1gYyMMjxEAtVSFER94D93EHdx5a6H38rPLEaGuoUU9A2UUvoWxTgn6aJ8Ccg1EoGhs",
  "key17": "41d5oG8Dg5ibtkoKBdZNZdjCWagemBRsdpMvbvHAexYyuqduBSp3v3u7jSMvxTWZtnUFY53W1qJEqTRZfPfMJhLe",
  "key18": "2SqgFu5tj5n4hPv8PkBV6V5CdVcXcWod774HjKU74akqdcdCVRwxRMrt15m8ynKUKVXrciQmuGy4bQ3Li7Tbk3kJ",
  "key19": "oe1QgHuAEo3sVNG7DU94WWXAWTqpuTFNXyvn6tY3Kxm3S84FnnKC5NLDek28fynnoggzRgKyPXMFfwUEd9H8a3K",
  "key20": "RSgLrBuTqqvok55NEm5wyHbNYuS1YcWpxVfLVfbrTRYjiuFvyek8bCCenoN821dvBEAHHCchJ9DSbZ3WPRq1Xjj",
  "key21": "4gd4t42U4friU4EE6MozTBr5rXdCrEYpV3EMYBsuUQq8KzPMqEBHBQjbvFbtZoTqnunh6Gsr1r4momWktNrTg4B",
  "key22": "mVDtFspxwNHrjwGLZU2T8K1dKLUnY3LFTN19RTduycjfn42AYaea8jWAUcqPXHffdRHnwRYJVGxBmdMHRARppjs",
  "key23": "5rTcoMJJBdAZvYrS6GVc55aUe7feu6uF2Jh2cK6QnyKp8xeHo78hEJ8ydceLQM18X8JE91n1sNu27JfRMZxMh87E",
  "key24": "3wwq83s55W4HhwoCYb7mH6Use41uB4h4VFKXCPvKt6DMU7EKqFiC3NgEn8A5VPGPuo6rsLtM7NNm7Rgq98vRyqom",
  "key25": "5KgVG6DMKX3hd8NrVfwBJNgoHdizz1EBQuUAUuAS8oQNhw13bFDE57efoowKnHHi6RUoiCjzGjnV9g61FYvNavvy",
  "key26": "4qh65yyEkfWgWRqaorKFc5KvcytHUUv19ZpGQDdmv2g3mRT89srsMgweDxqis8QRzunB92dCRgs2XjintyJ16Auu",
  "key27": "4jLHkQ2iPWpwM7uoRnvESsCDoZBg6fLKjhin548V4EPW2M1C7KMFEXycRQvatz3LoSs2ZHUGs6uG8q8iL3AWU52D",
  "key28": "3FpqkkruN7dPKZbsk6awaJxQYvjCPhsJa8mn7CR2XZCTMCQDgW4AGHgE1koQNMFKTaiFvwkmL1CYsk5nk7ywqcsr",
  "key29": "3y3qNZv443q5k3GEsq2iZoWJpK2TFSwpsLFRkt4g3MoM5UQzTM6yBfbTG4nkDqAouzy2Rvunt2DBd2NKHL9YBiWn",
  "key30": "HBxtLDtjZc2Z5sH7Kphc37kcfE6GTPNxJiUDqYGZJ47Wbbw38RfU8qw11kYHfSh4AwDpyUgdBuY3Yx14JZt8QVq",
  "key31": "5pSPC9RqQVFzcpYKB9J1X5XTuUvAQfGzVGWdTsiw1hXvT61PSY9GFsKQDTg7SfxDyx2BkVWueTGL4t6ptJKpQZ2G",
  "key32": "4hktXVeMim3Rff7Cj2fxCMiW1K1S4aazTF4j8qx2pLEFonFQ2dobjGtBLuAJsf5hjC3DW8mqPM5r8t5vY6NLSExV",
  "key33": "4qj6Jip4v6Tup5s9d2sAWGRJMRsEeF3E2rtmpcbs3q3UEdQKcFexsdQujVLn1QxuZ2V1EycgLv74HjDcxdzLqrYh",
  "key34": "2ntzqjmnmE75jJkTjcea7KwcR26cyGCnszVPjCrLcGJ7BBoihn5GdmxGHL2HFkjf3ro8TdfGrJpXncLe8TDKR94w"
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
