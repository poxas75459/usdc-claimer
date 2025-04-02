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
    "4h9qbe9YQAbYT5W9GfaHLHDrPd3jC8RwcQFpGKJJqrbbug87CZfc82cuc81HWPmt1daCATfbGz2jPSvZy23e7sdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYgWqerY7Jx88AUeJtnti6r2YmazSPcEnLtDuuZtCLNmzNShdP8yu9uJTrhEhWKEfY8bdLxAqRBwQ4mFdndVtQD",
  "key1": "22noMAJXRdvyfMc3ApZC6kR3qrMcXvVSyw4oxn5wwLMPsXT1pTvVDejF3r3V97LrA2Bn3YKJzBsQEySDh3Qmx27A",
  "key2": "29Qtc6ot2wongy523bGRQy1wHro7CAKgdXbPz62rSv8NyEqy4ZnavocEjrQtRV15xKgr6qjnYCenbtgQ976b4naJ",
  "key3": "2GxibeJEHmRfkk73JxrWUbsWsqH2jTXmkYQPEdysdGv6Z9uyxeXbqdKy1QXeEHQqhinViwVh2MzuyQQpU9VFVbCu",
  "key4": "3wwXk6i9g3UYpSM1uySMDi4tdwqjZxwq41VJmd9UXAD81aZXpGiWiAHpS6LBHgAqGNrXcQfrcJdjYyNvo1yXVHQQ",
  "key5": "3J9K3mBHpx3Zp5ueqX55QTczUfDo9XVC5rnyEEPyxqWVkFfuayUHt3THo3NgymKcUTazwjRZEkWjrPVRAJGNNcAS",
  "key6": "5P2sHYMiAsefwGULnjvJifUXz1zbRm3R7wZghjjTRRdu3Bb8Xn8DgoqC7xC8mJL466dSdo42VGeYQVxCMRMLfUPd",
  "key7": "5NhE6W2hT6zhSg1ttzhWuNv7efSCp5zzDP1qRPoGmVv3uvUnu1TsgiP4qfvzX15zMeySFtM55EjKbRScjf7TyYyg",
  "key8": "4ziJQaBcRd4rftixEuz1cnG9eEJLkEFNfAf6efExXfc3emHHmoR85ugDFo89dJqsPnCBbgjadWC9XjKKZDCymFp2",
  "key9": "5g6ZW5qauDNVwFK9t8YBQ1ERjnfY9fM8VQTXjebp29xZNvJQiwXdyVyVVVi3oyTULarkxtMKAu2YxSR3HXBbkYQ2",
  "key10": "gVoW2NXPBvkm36fzKsZbgvsGE49oMhTqsxKnuRRJ66PDCX96ponzpPcB7PSUxaqAexX2G7hhoni7xK5JdeVN2Do",
  "key11": "EEnKJdE5cntEqX8QeqbWwR7UENAaLbPFDNyh625Z9kFBozV2h9px1QJaXyH2k54h2Gw9H8wtvqYLp5VkijiksNj",
  "key12": "4JnBDTWVoXE2db319tZb8m5shEK7qmG8Qe5Q3cwbctLp9GMi3KSLrw6shLVG17HinhBPua7K5L7Kd9wrUSGvZtoy",
  "key13": "2c7Axt6VHVmbgJ11v89t36mJ22tcsbTZWyVTmWMM4Vd26Tmgn4KChFdndCM7Zp11tNtL7EQDBFtqSBhrczXBTG9N",
  "key14": "45bmMzJkkigVonNwwccZ647uKgoTUT6E1afUdBwYvQXegeaMwm8L1mdsDqHnLjZdkMjWc6SvSYfZ6ZZLS4V3uQLB",
  "key15": "5V7X7V2q2Zkvcxz9CuHeLKuH2PZcAuC3DyuXSSyQjjSbP9a4APtty6RGjGUqR9b9nLSuQkwiDbQze5Gc2r8yhgyD",
  "key16": "5QQiy9wnsn7Dc6z3cBbUut8wm6AaTGVo4dv9LeFDcPkdbJyZEggQqvmmZ9ZgfaDJ6JZipc2czjtFfm1gTj4Y6GjW",
  "key17": "rH3LbXdrc5DH4L2KSNigTbv2k9FdmsZfGwZoMxe57ZkZZymCsp6CnrGNRvGzp6V5N47vgwZJCyCXCmSCdRJL49U",
  "key18": "5AmEhPkCaqZ8ZRvSqwfKoXpuTdJrZNDBr5FLPW8JHKm6gKEpDZgsBhbbf6H5ktWQdUWtUagWfeWfDbB4dNfWafb6",
  "key19": "4FsZ4tMtLqXuFumnorVqdkL1RhYPzj5w4duYfFGn8NajYBr6F54VQEx28Zf7vJsJUviau44UTaN41LLazGGHMzz",
  "key20": "4kTrzPzGGP4svY1Ay7a19JwTDjwn4YBjZEjeVLQfthNGtF2pjiTCUDHQjyeDArdA6ujU72ENNxve34zvcpaLyiQ",
  "key21": "2B9YzxWdpM7VgtWibEtKkeFWEz72vdFpAqTkaij2n6s5BGyrJJfQY35bJBgY8xWHFiF1Kr8XoyGywMw2C3zUw51R",
  "key22": "2etKUNamgoxZhEskiLwm5dM1dtikRKckfZ84AVZEV77UjdYkPmjz3Zo6BPZ8Ktxv39fCuaWKJ48U9Q3SX7N9BPhM",
  "key23": "4NpigieTzyUm71GXYCzwHJ6ucM4JvYDWFjNV9oU2PqnCxEU2oWT8XGdB11p4u7qj7qcuxM3wcaSgVx3E8eGwiWsv",
  "key24": "5cupWC6MyQsXjEugB4U4iYuAsRAWGMKB3dakGGDJGiEnRkG59vqPcBjkVRaNn3izBkmHZ5wfLV1RThnt7khzRzN",
  "key25": "3Kt2ampD7w1r2cWQR9eudZyu8gb21AQz7cGSr81Bkh8S8uyfhkeMPTHhGq7mUcbaTttof47T7iioeNoGEvzn74yQ",
  "key26": "3DaFF7FfkmUjYDiMq2gLoUKCc1Jr3LvPrGtZ4jAsjv7SqB8tVt3aADyGz7YZMDtPXz2V7ya4KzCUEi52BwEfNLxU",
  "key27": "5cVG4Sxs2BH7KJagSSuviHas1bGERNcm1QLNpAW9GvzpHV8EYcVKfuRvbaHGoJzJNpxqpWxh2vcnLiNRPv8xxPan",
  "key28": "5H6qQf4moPg6zFXXqr9LhcwwUbViGyeaAiYY7oe7ue3eUgcKSdGfJDNiQ2GtxkzTP2fSoHdAiJCBqoMETrWgPiPX",
  "key29": "3osuZGnuEv3SBGToutTPedNrabqJe9v12bG2HzcRNLmm9WXZFPqeodBUukE8TDUXsPiLZdPDGwXBXXNVwRhA2Ta8",
  "key30": "vGjthsMpk2aWYJRGK2gnYRYHFWxTg4VXABhPArgHVxvEvEMnVrF8UwroAPiWFNRBDai6wmcY2QdrazCKXWqFQgL",
  "key31": "5A4UM9xDjrSzL1ujhQrF3HfdK12WvQwuQP5NBxqVyeb5N7p29BRsgThPcGgUmXM4ttyypNqB9Wbuxd1JC9qWhYfr",
  "key32": "MqEXJs2nw58V5Nn6DsWHBsANirueGJH6PeiMkcCPdrnAYKcGHLYDkkYu4w6sZjzd2XoLsNyRy6KtfpehAbkV32P",
  "key33": "39VW6mFepGsmpkfi8UPQBJ2okMe2dXcimh1ELPcnFuxB8fuLAwNykAKdUazRds6mDAYPFgZ832SogngrwCXBfejs",
  "key34": "4SYFhPbaUwBVer1i8qzeHpx9ihkzEu7bwnstmQ3b8D4NXddmAYswsvN1Ajk8JBxb85PCH6xJXRomc9kUVH1Ti5uM",
  "key35": "4JMPHRGH9tMTw85YQh3LNY57NNtLW1HNA1ipPSK2QSmj8kYUVRMJX7i23FFVL62hayHSZFWa9aGCHZMAvaRXx1qE",
  "key36": "3UHZ22MUPy3dkxWgPA7uubS9ExQjN9Zzmf9pP3Ny6jddaiWdhEu91FEViH3fzg8PxbBDMUKnMTK8L8o5WUa9bcvp",
  "key37": "QAE8BGHu3oGFrMnNuswLd5qhNoAPH9eafFw91G4ffeExMS4YgnYvL5ZZTz9L61VGiZUFiYDeV1CZModECQ1GSGw",
  "key38": "4MxUGo1ByCzW2BFH1nZ5y1D7YmF6iVjv6eTRFh7AMGXYSXPmKHip1EEBg2Esiz9MpuQVBAxCLnT1FQithYQH4kqB",
  "key39": "56axxgjCASKkgrNcFC97XGB4LEW3XVmH7h8QHQKEdJUAgnSDdbTFYPpgQL5N3RyvqTS3HL8iNQuqSVKS46H5EqQF",
  "key40": "4uzfk5jqaRfoKpoVSdA8CaK2MePFxeXrk1im49CVFvtDvjkE5D6c9LPX5TV9XF4xnRWRDowGzqCLpL956UrFMEYL",
  "key41": "26WNzziXpnApLgdUySh6UD3dfhkfeAmiinHHNJ6sWLD3Wk7fdBaj58xUbNK6gmbeKJFWNetW2huuro44VZEy7Gnf",
  "key42": "2hepfLLgF6Ehtbfgjt54kMNoE9YpBbf3RHRRj2D8s59dp1x1LYzBxSv3wWUeyg1JFbamJcM7eW2oWJ1LW1qk6j6c",
  "key43": "2mKoQyHPgaWwDbaGktxgXKgkCxPz8Q37FyaUcVGQCC4EjXZb8GFpqFqkmFyBD86aPQSR83JAtBhgucFYWu9kChpu",
  "key44": "3zvt14sxAWkQdyxHi3x8rNTHuDdPmmJhtkhXq453Qo6obNPU6odsy2JgTYeXzuxLkdyZHhAhbjJPkYAUeDbA23u3",
  "key45": "dRtaTZmgh29ZDn3CBLbQdhiNzByFajH7zgMYML98d7kH9KRJWyaBvzw3aDy4mfGeGKo7WaZA3hY4aeQ13cmarqJ",
  "key46": "5zGhSF5cSeYgoPRKLdu3UgGJAfZ1C9cmYWTF1p4JUSjNAXsT76kAq78HWfUbvA15smKhsDwKCPqsNLKf2yoQG83r",
  "key47": "o2VbHtnfQXwbd6XNAq6boGCokeHMQnptiBAEGpU6LYrvusfCm6ozA2vY8GQTzBchYocBiNESgzWGJP5mwLZRu5n",
  "key48": "5H1NgwjJQ8hwJ6VZkUotV4kfDSsz9stZQbmyNio691ziMfE2DeChDUgmXDDGKrHmEMJ667AqpPRxX4qL65JsrpVs",
  "key49": "5d4aEiwmH4x7De1ya4HrG4cD5yCsX5e4NktvUExmbqFp9HSXgmRXs1rRuavwi965QRvYy8351CsL3Ywxyu5ajS8L"
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
