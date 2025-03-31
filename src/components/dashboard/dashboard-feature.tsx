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
    "3z3iA9R9DwHvB3D2nkdxsiLWjBAWmdhGpfs2bPKKMRjXxEZTw6HEB5mkfzLYuVdNks34bRhpU1qi8aF4A57Hv3tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppbjPkjhqmns6676JoEf7JeTpgcASh91LKz7xmnshuZZXVvUZ4dkGtWFjoTpVopafznGg2doUCnWv2YNTZyVQg9",
  "key1": "aYBa1Bc5TNuAU8AoGTwxsoGpS6QU9FY5xuiuqUChiu5gubJLZELMimWKBhTsPnWaGY3TCPibfzE1Q2UhQVCTHJm",
  "key2": "4rpN8yDtoqGwMGSteigJjR1Z4RKo5yGDYueo4H2jqPn878yRCzauzM8PTUX1xf1vvYi2rQt7vYKHXaqxkwScyWWg",
  "key3": "4qtNKscFVzBmq1SkbwfVX7whxz65XedR3VZUQAmPZnT46J4WdwzUwer1xmYGKX4NC6GYVjXtYscy1cQg5pFXEWnN",
  "key4": "3HkFhSNZ7vCipr54FpZQsAEPi2m3h92wiKeMzBzoVj9PvABvfsPHoNSqFcwKT5MKBnp3zPLrMXjM2ALtveCD7gPC",
  "key5": "4HJuxzkbqoBd6qzLJRTQmcAur6z6TuT8W8qCr6P34BvjbR1k9TVwtmGBGVHJsrDdRVE9UPBBfiZSFDHB3e42TPyu",
  "key6": "673XMDvFBvfPusHV39FEsn95Ct1Q7y2V4aqu1fwGLrTb322C6XWR4vi6GzfCNPMPCv7WwM5A1BPqH1QEN6r9n6dp",
  "key7": "2Pt7WzQeFCaLGpfTnu4BFQKQFvPaYNVTwJtoq22mzFFAnzpoqNSATjrtmVyTSmEB1Hz7gABab6af7KcJXe434KHj",
  "key8": "48S9NGAYGRJf44eVxJderxj3Pxd3rEgYAxZpNzuFheKmoY53L2Edfqa6YfXMk6TQyJCCjb4NgeeRvYmiDsSGqh1C",
  "key9": "2xTvjgvsUyN2BV6eXF77PPuynDry3SQfSeW8JfK9ipvMkCuBrE4NfGYta1ja1EFpCMzc7st56ygcBkkwuuSwrCCa",
  "key10": "4DdyzAuc8Kyox85rhYHANmNSk8JqvguGgn1YL6ZW8vaNB7L1kEZGQTBKeJvaVp9qDa5oecqdjuDkuwDokNbMxb5B",
  "key11": "24Fts6VcagPaQcbZ1SZZQgMZLrUY2xV3cftMU8ZM3Z9ABEEFadFt5tZrptcRmTFHTntqApfvzA4op575BtLffNUc",
  "key12": "5iJ6UmejtqAz6XaSGSbDtMCwq11tAJ4ZhpbXbGQjne5V71MJukexcET1THAJuaHPtwBdHMtDtfX6JSRCVEKn6CEn",
  "key13": "8AKbgxYKNwoZbp14yEp5ZxdfGXwcWd5iWnHzC9yuXKrn2pCykmSphte1x2RErMb3XGrXm5TkD75yVFqyrVp7bYi",
  "key14": "26Moos3HYoVaWMTgHkAt9Fj6yFjD1FT59hzpYERQp7XTpBTFqEsyauiZFEWeLGyfTu5pK6Le25mc1UfV962bd4xD",
  "key15": "4FBtUrPj7ytdV4Vsq7K7JPEDqJkfFYzgU2k7LecPeTN4uYWqneE8wkcaoSD4jJzC62h9xWjrSE2DxqDdbMmJT3hG",
  "key16": "4cN1dP5b8546QXA5NSM6BrSvSyHiM4Hs1UvmGy8hWbJJgxDu6YrjKx2Pg3j1juTriDn9NMnZiiknBt9UVpEGeoHf",
  "key17": "3uyvuESpKH4HE2p36ZTwh4HzgseMeRmmuNKHbZQt64gWo8YLfT8eQWiC9RetUvVXcBmHyzyWLJBgdyM7HwGTNciR",
  "key18": "54s4P4ukrWpXPBzDDYGn9eRYHNkMXaqTqFuNQtRdZfNi43GvituqESR8c3sC8s1n4TMCWNTEP4gs5FBRqT8zitCA",
  "key19": "Kj3G6pPT6KnsYgpZZxvveqKC7j1Hgs6YcA9UpruyhhgmQsQz9AJqLpFeDHPFbDW1y7ZB9SCfXPhiSzV2uFwfREo",
  "key20": "3AsVfgRijw8AyrmRNbJ7SGiH3RzMwEdsigBYy7MZ9freNjdhgNT3r7gBGYrnAnX2D7hXButeWSYPXhQhDFewUmbR",
  "key21": "2M3EZGTjJ4GcbzHT7yenvQXSEDxMQH7ngYtmTPtfaKuXuyDyfyjRAMK3jZcoGQcp6Z24jbx5UHL9yuWUH5suqEnn",
  "key22": "65ew3PzQadCVpnDSXToifvbyojkfpmcdWt4aV5wtLJx4WVuB6yENLpp4SbDoDMLo4dnY51g3qCLCTRbR47yPDBQ9",
  "key23": "3t8FEaJmwxvJMtmcUR13HEHaMJaseDEdUofDUTjht1T3FTNofp1mK3ZpQ2GLTJ6iujuwzdYGFkRUuTXWr1XqHqJQ",
  "key24": "32jGbgoYPcEkvEvhrsfFBPee6XyzSSaEvCPQ96ySnfLh6erhwAdSyLkX4C3x7Y8aup5hfY9uYtPCLVRca967w3Ve",
  "key25": "3cmhjSd9THgHsR8zC9n1L7KJQLsbFWTvrCMtbz9g4h3K69qUKi5dKoki9L7S4FPGoVBJo9KopLraX4NsJzt1ifEW",
  "key26": "2o5FvDeHp1pNnTxP1HWQVduCSYWUztEwRCLQWMSbLn6to8uMdS1YdwhAGxgSCQShceeNbN1EBksYNHdCEBvzBYBz",
  "key27": "5JsT8DaFvNRBGnpuZksScpZrRgfMasfQHkEmA1YZBJcd4rpbB88nAyQahA48g1FV9jSdtwm92fVDqfzUy9XT9mso",
  "key28": "SE199s2boFjz9Y8GC3HTPPQM2gkRnAYvJQW8dVWQSUNdPEnTmBerhR5C6nnFuoM4VG5WGp6ApoV19ZmhLqfLNjG",
  "key29": "4UhTfM75AKoGHZwTm21EFwsRuM2jyD2BQEZuKfKJMG3m6zRmNuDoBXz5ewtdq3RuQKER38gt4CDiWbnHPNsiPsWJ",
  "key30": "3NKnE6qUts1WwsHqCSxet1k8VTfnQBJdutdVLjTYTM4ZmxEn7EArrPdexNsj4gEVCvgj92dCHkwadytkAoGqf9ok",
  "key31": "Xu3FWMU2cH3H5fdaPo5mVZMrPSstvEjTjXL8ANov6P6otKmkUTiCGipKxvUoVVQzc4k5BuyCwCRvEHZ7KkkQsja",
  "key32": "2vhxgNi52AoaPMBAvKJk9v9f1MZy9zvigLSgWiEhd7rVqMrDRKXRDgpmQ9FmYGhe3ocfV58X5aFPh9H4B2RvVwis",
  "key33": "3Ae67WQ62FSgrXBQwT9Ka8FL1AF38gK1P31d8r6YSwHXBJLtggHtRzxAWeeJGqb7jaURqxA26uGhwUKSdfKqmVSQ",
  "key34": "53ZP13sBJDpvLSNc87dpgAjEDiKBKWJTf6LgsUkkpsSSixibNEQr9ftdAkCzNLF1acZNPHTQETPS9PLmXMeUvUgN",
  "key35": "4j8j8PVCEGi33N6NDavNqFhhSpdCn8tussXTh6Km1YiUQndWq3A9hn82GMhNLw462SnCtiGk44oYEtoP4LD9XEx7",
  "key36": "2xz3NQGTz3L1E15h8BDsoBQ3knGgNVULSu655x5zA4jCHXjSdAbopG1RRpiVSkQwz3ygj3LpSajMRvs28dSB7hfB",
  "key37": "2mfb5DCQrmDDxzdSdfmjXdJh3o9sHp3Qz61LB2w2QCVNssxzdPEa4dCkojJnHZdwucepoeRgyZ4JCN1zGigbvXwC",
  "key38": "ZAUpTqQZwfvgrpCCBg6PDAJh86wC5zwpq2fYTPx1w21V44HjTAtJnsSPVkKuz4wCLtxBVCJPHpzcqLpCsZoFJec",
  "key39": "2poTpCpPpLrezMWhehyy1NoKpc4wY4gNTCbfvg229X4Rt3BBPbc2bFrxLAW51Zcjs6JRaHspgobttG2y7sXkEhGj",
  "key40": "38EKKoxUGzbUQDz6LZz21MkDbpn6f2TnGa5qRDMV4zo8W5hWDFXpc1iMg1n9pvDNhg3tTHLjcHQdGwwPEmbRPJ5U",
  "key41": "5RqauQP7PztZGhYxb3cWPTe5xUs3DXhtg36eidyHVSFajUJLJBYxNg9Xjx3jai2UF4Ht9j5FPVebJNj5ci7krdua",
  "key42": "5soqxfas1Qw4HXrM4JLXXqK4nczcLxAA1e9zSN2wj71UFedQ68ei6XfTRugWVVDwLGuPgWAy2obR7RnmZcWVZTLu",
  "key43": "5tuGV7yxQwpL5oVzgnrJotRQsejTscUi9eYcHe7bWLr8wdExWjaquH3uJX2qDuj2gdDvqSCPvyH6G6AcfJurNgrA",
  "key44": "KBUVwARNBaK9PsLDUx38c7G8MjRXVdZyR4uXLyDjbNUdrVbxVgb5WXWDUZDuAfXP34Pfm74R5tYytRj9X68uPW7",
  "key45": "cihxhriTcPLuWpiqD1knU2ZhE1C19gNazv1erBqDMVgud1fzV9SgT9EcPspaFHincxmqTk8FomMA3fVkHVVdC4t",
  "key46": "TzjZsehZVz7WwsUtZfucdHDasGrTCRLjhvEAHKL4HTjTTDHRjgjuiFk5WBET7gtztW9Dd2L2i2EGKCDvypxQ9y5",
  "key47": "ARL4aFWz8zhvMbmkVXmaQwufHXLnYCXvttPHuWppnhF4CHLSvj83Rggdo1rypbQddshuoPNBUBhByxA6uxcE7Ke",
  "key48": "37hoFSBf9TUfRKRqLMUyXzurebhjFqSrejCDjiyY5LPpEMjx3Kxt8THJJkqByqGGyg77iMKMhrPdpM6yPQyDGb1V",
  "key49": "2hZBQ4RJ2YpzGW7RkzYi8xv6jqGCs8QXRVizFU5QYvvLqME8g64zcpgjqvvs5uUfFcBEKGVPkR5M3gQN2rbULVVF"
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
