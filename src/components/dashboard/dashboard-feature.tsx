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
    "AcvN8RDkDbnyHgUwQzLAewEH8gtKGYf8BMatUbhpzCKfqyH14P68DiN2uiWsjo6zotBAAEq6sGC61MNbv3cRYtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24TnzHBQsXc4haUn8nkpfdK2iJAsG4cKSfaXm1kwMMbkwdpSLQQ93LSwt7Chacc1Bd2j92eKEpZUr3FEJvY5FTrR",
  "key1": "2XPVacir8HcuKp38vndJW6ufcFhggGX328WNbsh4ZKi6VXMYMQ2q63SR5ZBuyVQDjGUEKCNHvx9FR86U2P6NkX3s",
  "key2": "5jcA6pnj3rxDaEXN9TgDRtmEULP89VinozZbirc4q1enLoHHcbHhNLgCWPrnLzJ9GGG4Jwb88cY3JKTqaj5aNtfP",
  "key3": "3Nq8pF9irfRRrZu6ACbEHZZT2qR5PJRNJHmjRfBSUZFuTL41BQBZ9W6iQ4x3Jjk3cGBARFRdxAoHzUxgcp5P8Y5C",
  "key4": "yKpe9N2uPf7WebH2d7haADRq5S2uxCAq7cDfK5zanDrUJEsQC6aNdosgSMaUNSzSpcmdoMrvsLg8HP1AoBPNKZH",
  "key5": "5f9ngDJyKhSKibmpSWEEZaaH49ytt2uPXsJqE5spTS4321Vi5sje2TjW5Ewpm7HYP4jzP5Je64WmupyMYkaB6o39",
  "key6": "2Mf9wMVFETEeG3soNB7D8x3s1222UgyZAagkiJ4F7Xs48ub9XWzJGGQ4zy4W6FsD4rvLrDgcSPJghEM1GnAFxsDH",
  "key7": "xBu5heURR6KMScfHEvrBnSdK9wHvJKkASf8KzvRiw3J7Mz4ss78uiTQdZkGRCtzZphpYTQAKVw948GUaYVWLMPQ",
  "key8": "3XXQtV7YiFWheka7U36FdMWkmup4DFhTsSF7hNxVdUZfhFtnT77geKZVtanvuLWPvcDieS7tgEGtXpPFjL97ozJ6",
  "key9": "4x7WG5Ds5AtNQejpNLq7gKFYggErZ1nVFDAntNqzmWVYdrZ2CX9LswRrdgbevyZdrukpKxp9HcecvWbCiBgte3B3",
  "key10": "5BYWKkW3sS1YXGESpgo4HcW3ZVBDnvK4xsr4sjiHMvdrZNDQ9x2xSsxQ43cgsVnWEYn6dZQKDQzh1JCsbgsLyLyb",
  "key11": "2SvSfCvFtJToEskfgvtu6p449mR2KjBWWdBmvVdES64C8bDpqYLPihN9nyp5vQ6kfE5AKeLvHaNG5nspA9YC1kTS",
  "key12": "47gwtyYSMi5cBGRTsRiDSmX1RhuyL9wy3GegiacbQCGeYd5jaqLWcaBcZGoiFT4s37skAAUnYNnKTkDzox9BTBF3",
  "key13": "rdRuaHUDGx8hAAcfV9vr4SvaLe3xCC8Ux9GTGjAot9kJvUA6LmigSNY1aDuqQD3vWpvvXNgvkSjDYL4uGYMrFes",
  "key14": "4FYCLKH5tX8vBWMH4f6C4eKDmyxMnCMYLBhCDBt2XiYjaqsVog4hKgrJbtQWNdtv8hxGcbfMcEE1XZLAQEB5XByU",
  "key15": "5ThKnxhjnLhyQz4T8AEhEkmm3fQAFtkHcm8jaD2BP8T5StAwV6cPgcCupg4yQPTTKn5mEiDErtkiUkFSpBYRyusV",
  "key16": "4Tyj6bgrGwtFTaVWV9ie5i93EECrnbaaJwRv9nEromZaxure8v76uJkVTaAti1ovayywUUndREbiPAxP7Dvxmckx",
  "key17": "ZzBv7c5Etv1GgLZBD5EHJvRyHkzkThZDHiGpbkk2SPiGS5KftzWZnexprzCmu6ueGkJyt4PmruU5FNZJC6p9eWv",
  "key18": "4BMuT5qdW4N1a6Nnd6o24tRSv2BNBqNRmNsi4zkoUVs6BTrCDDkJzd6tdRuKLhhnQ7QnSSFyXxVz63aKdSuYeUmk",
  "key19": "3WJa5YFCwhQz5f6xDpCeiVx3bTamGeM4Pxxd4Gd9t8YShXv81hMXrma4f7jxvCCWTNhoCHo9cVzm42vGfKvXpLqa",
  "key20": "MYkkSYxmfAH14idU54vSQ2RhoDL82qBfANC9335AhhHt7BTf9A4nBY8WtJpgapy3YQsuYhQViJ9iJoZiHZ1WpUM",
  "key21": "5oj2YUXPRddWBfb5qsBsP9g5hS44gxioRw8W51D1qqg6pYmBJiHrA8DpU9SCW7FYh8nC3fUzvMF8N5f9toKUWnA8",
  "key22": "35m5NRoLHHxgXdFoiaK9mq8fEGQkL8GAZYmnXuq51NMPr4i4JFcTE6DCCQuvFUpqQq5469FhbUZ2aEvCPbbCeEEQ",
  "key23": "3K9Z5ePj43tEd76YMpE1HGkf6fiBdqmDFoJnAfJijxjzFCAMKedHmunFMZo3rPkFzuhWDxErTweGCoJAH3mwg4s8",
  "key24": "2appxh9vZEptRWiB9dG7gjJVGwsYURRc8P7i32ALN6LaYLEPTJDnibUoSmMgGvKJig6aoJuxnFSvSQjMjSWUg8jV",
  "key25": "21z2yE6NYZ2YA4LBHo8rbJyh1u9a6tBhghUsYvngvosyC7wSm3cuoA2Q52wryqh6BhysfUpks26quFFJu7fa4uyB",
  "key26": "odcGrRLfb5JdYgBb79gdm4WLhXEhAAXi7PujfjAgMst6mZ5LaECt74fXzukNYmCRHTQzEH129fJSF6dEi1LDXRy",
  "key27": "3EWssr854hozGLSccVtdMix57BzhnAqKMrHpdDYJEBzUhN44g9cyGLQsELbBGXKeGzmdN1aYGwaWn3uirChXMQRs",
  "key28": "2yJ8uampyjAKe5NxuWHMyNZsRo5aMb8jhQHiB1iCv4fH4aqb7TNu28GiRwNH5xLgoQ55ZzQvs64iBuFkKLYSdvwA",
  "key29": "zEDje4vc7NKYUhxdhRj2YEwZXe8cnYfnNwnF46zozvq7x8zAXdwhTxTBadt1UjuEvNV3ms4CCyVsfqjyvV42MQy",
  "key30": "3qZhmCyPFUNyDtCRLjF5hPkTXoUZBKBX9csocN4HSGp5FhHHFeuResjkqGBPNDfpDybep6prppTDNR7xtYZaAsZU",
  "key31": "4uUQ1ppo9a7yUU9ERxJ2YWU5x3wX9rhfQ8P6L9FDZ1B4may9WWrGLZajakDC64uNFppHbht7XAUR8hmNXCsWjkXS",
  "key32": "4HVPt6Dy75t83muSi5kxDr3bCBbWV3JuzwEygWiZRiE2JYLZqrcUJQW4qRYzaSF6W3dLEmuzv7gpWzSJcQNwHZWV",
  "key33": "3K1vrDYK6DoagJHoNCcuPkvhPiMesfcHfTgP2fXbSJcxSZMFfxdbEZxHwJ3k4s7vQXvUqVrkNfrBUfFtR2JK3Q5D",
  "key34": "5rc721sp4cwfVhVEA4RfNpMBVVJqv9ouaHPKHeDJP44tSEdLg3DEaZ1Skq4xETqfseZockVwnEEojaHWAM8wnTxb",
  "key35": "7D4hKC1dXTddjNKj1DiL7ThS4mvQUnifDz5Jr8L81NKeg4Pm3upxJgLatJS85ixK5dvNDWWcre1trzowuGZVQgk",
  "key36": "5JbnTECJpv4GDt67KXkxHoKxhQh8kXQq25U7DDPqJ29rtpmbHLepWduqw6etdSCpRMHpXfbe9qXwEc4q2spYz1KR",
  "key37": "2MkJiBXTDrT3Ur2GRUatCpkA6bfskJC5aqj4n6adi7d82D4JXtUJBRiESnyfGLqsoDpv5F8hRCd8mWV1hxBDYj8z",
  "key38": "4dy7A7xZ3d4A37eWb6SGWwUWjmBBKCUY8JvDbDfBJXCc9dUBJu7TdAphKXEq4Yb7rGqWn6kHJL23rEPLMwBhbK73",
  "key39": "2c9EyXUfwv5fXgvvUh6EbwcADMQMRnsdspppo2ZVmYsRipCDJdyR1AWH8DUkQ5JBdbfyHSgB44RL2321FWrNRPrF",
  "key40": "2RktWF91TrZgqg8KK1jmwjLdVh7Lg7nkgsZ5kddVLmEfbSXSkwgEkxK6HHiTzDYcAQsoPTcMapF4FpWXkg4NkNT3",
  "key41": "5ywGCMKs43k9KCGVmd6Cb8CS8pJ57iGXdfwpjZM7th52G2QkWK66S7CsmBf3DCj7k34ZZrjRUfAwPJxd8aYW7mns",
  "key42": "4uKcw8riHEEFNcpx2ofURRin1mHpyhkUTcg471BvCFaUbPfJtPBzExHvZmTZb2fcJ9c54vy4PpKUxjrQBvVC1w99",
  "key43": "4T8zhesdsYqCj9DcwrWG4724eM5TYAUQ4v8HcRoW5WCVq2x76ZpVQt58d7eqUXbdB5KZCwTew5HtHhhi5tsqUntk",
  "key44": "4i5bYRfxzRQGTGTrYhfWbhqNqgbytnkzkiV13swbZMiDLJGrDqYDwiUsQRsPc7fKPoMWMRmUTejPtBefzj4gsuc",
  "key45": "e72SuykChCnzc98Dv9izojor2QnmTwmfGQZJvNqiRQwXbGUQZiufHeX1aNssVXRH6fpt9PDEWra7wbuKHMqe5MJ",
  "key46": "k5n1mjj24QaUzxhM1X9aAds6BfsgHRN9hwgtmm36YrbhefRmervhLVooLXVx1wdpLT3kuT48VviUGs3UFhWvJEG",
  "key47": "4XfoVccuL8iuZh2PjPVZWDTTu8KSGH9GnXHPjrHJ842CRKurWp1aqgVyig5pcEoWi61RK1JHnXEpvNL9J1DA7Jga",
  "key48": "Xg29NzEH446vez6ZkBhch6fJcPvhUb9ZLMSe3PHUkG5ikuA5h3cbgAxcmGhXrkeT5gRnXyfkQD9CgLrdGxV3hVW"
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
