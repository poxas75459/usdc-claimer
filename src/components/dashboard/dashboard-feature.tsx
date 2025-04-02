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
    "3BW5LGFVCGCLDoUkLb8pnmzJpJcCNktHQn1sQy5PLfAXvWWNWcdNV3MpjCqPh5qnqeR1tcZsdP1gJeXG97gL6qUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Giue4QQy7MRr6fNoQkPhGfuEVdqi28PYxnyt7G2NT7jzMooJ9dMowiHUv8QTNhyiNoPb3qckSFQyiJtbPBx3D2",
  "key1": "4SFZNNwXdvWcd3myUoJnnUQDD3TXbCtDGW5ZvnoT3BXStqEeznG2ZMbDkQhmf715wVqQavcbYHzyPT5dzBxmjLeh",
  "key2": "2dKwAkMdazgQy17zeofUHqNnFYBKf5RvK4PfAQeiHeqJWR7N2GZS9GXkJ4zoyAxBtxKPKK3EQffrNaj8MkxfPGgJ",
  "key3": "3R18P1eoDfQyUTscmS1Kd2TyDghtnJcKuSxxpzNnZdDgkaRuNVEtHmgFh8LJz57TBw5GfJ9pDXTc3d67psWnDtyf",
  "key4": "5EUR3n1QQZA9JynMWyAbvqa93B12ovYAT3CusuCdJeukWyHHjjkn3s7qEQDD1wqfp8inAXfH7KTbq2Ry37Nak7ny",
  "key5": "2tgLsvKL7WmtUFwaLq9hRYzGxPUfHPnAgzHVW65GURzvJSfAmKDAFq6ofmEgBtdtkgKSGhNxqxzdBmoQmLBY9caW",
  "key6": "e4enqtpNHgJxFhLvuay6Kw9qhszG7Qy3iy6FNDgVCZRUQEo6CuKvhAkBdi1S8ugZNskw86fHeSZVjNJfwLVb3Wu",
  "key7": "ye2KeXHkhHA88yibg5Avg1YP1pDVsGHfDsp8bEsopXBtVbipMJHKYxtYUZS6TWgEbdEjsQFpkKbKmmGLG4X2XWf",
  "key8": "2Czp6uVXpXPHdHHsmFBS9Upp5nichZnLVuNeQtsnfcAK8QnuDHjLc76VYUDy1yzXxPWeNpEmZ7xfsSvLDs2HgSmK",
  "key9": "3F6wwLJq3oHRnZcKPbp4WXhGMf5fiJ1ePTznR4C67e6NJ4MmVXQKwzmeqHDGvvM76SAeY4So4ariSVpVUwJEqANa",
  "key10": "nuEutAVyUMGranaUFHGRWWRyBa71T87KrqVzWRjQADHPEop9TGPXMgiCdEqhmYxcr12KugVLk6hpT3xV2pUv2pD",
  "key11": "5q2vsjwXmcYfDEDRCaNqFAnVX7XjbakRABnQMxuGesJ8dELJqDxbzGmsksg9fEv39uPDeFXB6JXToJBAhKLC4BqA",
  "key12": "5QtkXGTrscpH5jsEuwvfTnX8BRmGdy9aU2NRA8osaLrnhSYv2cn2yv6JjwjVPkPkeid1dAgjvWR6wMp6DZ4VbQU1",
  "key13": "2BMsCNRwFUPYaUoM2rE8VWmQFz9hPYEPM1KLLaj3RR6uJQTTMhdYTf1EyaPbXjZKEQbCcpEoPu7TdM7afQhMCQN3",
  "key14": "2NwMRxvkniwT94qoGUX51bf6rq6FkLqPXwoVMfMEoMS1ZqAmZCwYYbcBEK4ePz8EiCKtr856aS5p3Aez294cLsNo",
  "key15": "2tFKaicW5AwPfrbBbGXuffkgMU8iKBWuxfW2oajVe3DXSWaR7VhFusA6vPe3K8rJCjBvdfdKyGi5F5gknH8QgaGB",
  "key16": "4YY7BizTKhuVx2kGTJUQETtCTBtsb1Wna9fNDvJMhSdDkiNUUsnv4GB7jYGKvGiAxQt6fpDgM8EXA3A1nctokMLZ",
  "key17": "33ZoBhfssgcJaNiVXbioVaDDtQxmDwoHfw787er5pEbfwYsMDJT5WQ47HFWSh6qRbLGiXMJeM9A8AegQzhZ1NnYa",
  "key18": "2hTpRGzfpg7mSYWMv4XKnCUFzT89bGUopZCcMdtwGkounpQ6usWW54DUpRx1VzwxCzv789F4HK27yjVFpFC4TVE4",
  "key19": "y6Xtzv8ycpCH7aByBYeP28GF5tGYANpttd8HFpsS5Mu4r9r8N8M7kxiExGEQa81SDBqnibXrJayELtq5qMHFi6U",
  "key20": "2FUfB4XekVseXjG36F5SMnPBDA7yT8L5Q1jFRbGDYWNo68M45BWMfxWBqLGCDUtWDtv6LvtRunBXn7k795XVhNmR",
  "key21": "zrS1GJbVAirn2xUR6nUD5nWt7U3r9j973en3E5fRwrVGq95Zie2xU1AMcBP3sp6j76ggDWdBecEKba95fFEUsrQ",
  "key22": "5MSadeg4GdVu3nZxPAXwCKkDiYVg9wANREvAmJ5LwnDjuMdpsRxKDEJXFYRAxzKCjrGTavsgQfB6bjV4YkWtQ9Ai",
  "key23": "4GDuuHp8E8BzkdE3ArK7rn2MDvmaZ8LvEJeSfW6Dn8Gd54vCQ78VCumwZsmfNmEMr8ypp7KH2uPUyB954tUd5mcp",
  "key24": "651AUvZb3hFLzbEnxzroDw3z32aco5qRhoboPsuumDc2W65z6nEcbWB8QMEB3wurqV9s4Bk2JSZS3twiDdCUxKom",
  "key25": "3Wf7rj7TFd86HhLKsxQUzTRWBhPjPAUUgy4xfGbtWbjrpAK5uH1RTfakV39wiaAmSmpuCBddf9Nu5muN9w9hcG8h",
  "key26": "3ruiyRrVgFptqMUn5GJFGv4WK8KTbJtMQkdPvMk1NxYuWjeubDZXwqB5XnNhAKqGUbLoL1mw3pVcaTppvGL7GdCs",
  "key27": "4YcpQVygQfn84oY4CPJJA9t4hsHhNEzet8rMAPVSag3MJkPL6vgaCUUx7MdJuiskLstaVhPD8bvr7NfMrhnVSDHM",
  "key28": "3EgkANBDo3quySDZ6ByxSZZveLSAtZYxByZKhJPaVfB25px9LJcv2axQ1tar9fx2EnDnQT1XEzennPhmRkcV8XwR",
  "key29": "5hN9Ckt5qifW3mhc8RiJ45idGLjQ4BsPZJ4HVbL32s4c7yv2fAueUbVJYF18nwJCxmiQ9hpY8CnKJuGahaTBqegD",
  "key30": "xEhVJjrfB7LDkcphJDGNY8SasjNFdWqxH6Cm4GqiuvMiwiDLzFUbHxCy8pYohNKFQfwkpQh8rYx7kTucFfC7gPe",
  "key31": "2vXvBV2xDUy5B7vS4jwt6usQaUy4LVC13YVQjjBEMjYWcPAVeHzs5fEWaELHpHBYupRzbhSnWuV8L4tgHZzmTqAq",
  "key32": "3LgXCeME4tpAYwpsnRDqokkZAqhUuQqyTheo51yCStVMJ2DckMTWR4pi3f278RGsR1pv1ECFBhivK2wf52PoP6b7",
  "key33": "531rcZ6FxVH9JywiSJXNcRZKngJrQMukZWTweyPDzyNZunp4UH35LesrVWFLqqn9vdG9uWU2rtLGX4STWppqqK5g",
  "key34": "2snbC4fH56X97qgP4nn8jMX5kRGyVooYgL8RYDWJwMz2mNpCBX3TnPPqd9FkQ6ziR7XqKLhVtGKeCK9AYsGvNKtV",
  "key35": "3rKnwMc7eT39whFxhngRtxSvpMCZWaMbp49BH9Xbr9XXKBnC1zLR1xH1m4eAiPb2kenh6j4rGZEvytAeT6VwKxnG",
  "key36": "5ucdx6c6qxhZAmsQPRarDGcgTvBzd5JzBNM3MtEbsmmzvJjycA6uiWQzVLNtkAMmctPbukUwGawn6rzP8viXM4Fv",
  "key37": "3G65WmNccruY6s6YXXx7LGTuR8rUJjZX3NoCHqX1DSGcFfXYdSmYG2m1CCHcfBm3Me9dzXjUhTy7sxNXHUfPhp1v",
  "key38": "2pbgmjosYLyMBdMMAAMLbqGzTHGVmcpbWHetkY1XeKM9EeuJqHBv76vZYwYtMHvhkFzub5LdP1td5XAP8hQEQRQ",
  "key39": "32EdqXTVJpBRvB3sY6JAKmDr2qF4iP2o7T3kLqxvBN5CXgL3uQ2HREWXkyxWmjSm2ir22dPP1uAzNK6dDAi4mn4V",
  "key40": "P3Y3qorCEhLY4KkiYBWmVYxNNd6F1WvcK7bwoAJba3UQ267Z6wJrgFFv5ye5tc87GbQNVdJv9hZFji54MTHABL8"
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
