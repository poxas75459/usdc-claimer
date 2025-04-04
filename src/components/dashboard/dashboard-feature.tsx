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
    "4hbAZy53FR7neE3CGFEtVRLaLzoNhb183MFuWaxAUPBcLJ9edvYtwx4ZHYC3KzJTx7rP4bkcHZbXZbdyYaiFAFyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRjhc4oNjYeXJsD47XiHEh7hbCjN64nxp9Qi9Pw5zk1HSSvEkGttKz7cvfZ2ash51U2jVY8i6Tc5pxayHq6K3v8",
  "key1": "5Jv6UV6mwN54EpJFwETR3gZFkG371sF134fk1UXgQnq6RvEa7AcXEmChYLjU7qCyGHxnVRFSBgFb6avtSxTtAiWt",
  "key2": "5JGNLBDH6JiMy17d6hrPAHRQU8pBef9sC12VZorT6tuPRgdnb9PpsS858MZJVDSmQSneLA52aNzZCwyaTz3DeVhA",
  "key3": "31wZKTY1rYdxxhtwRxFYG1f7aA2Y3Ri3U5jfGXX6aSQSj8ZrVfT3HZptrVsmyHz4z4CEzwFDVCEqEnKg2bAvYKYe",
  "key4": "3tH9QP2sHkVr3SrSPS5JaFxECb9Y3Y4GuMUNMY4v5sk1TrBoWZGVBzywKBj5d6k6ttUXPJxwpw2YKBpBEkX4qptD",
  "key5": "5vbGFQhBWZYnA2hmpru8yDs4NtQobBXrT6542pZPrUBhong3aerFuBFr6JLQT8A6D16RHVe9D2SvS1p4otm325x7",
  "key6": "Z2A41BP6265tjvGQZg4HDwP4GR45BpPFcJgrvVSYphCQYYKBNTmbXNEJ1Ywb1cdZqq5yfnPbPHr4iJYG2eTYt9Z",
  "key7": "4yMCgnxHkJgJnxgiM29Vizv42agAeHNNAympYtFJ6nboJsadWAGrb1UdWn2hz7uEU3MTsjgmdLXRKMATEuxw6kGu",
  "key8": "367TkvMbSTVJALkca24iJgmSwTunJwTWcsgaxhMEdiJAXXv8HWTC4cZHx1SRzAszk1bSmism8odtyfCz7Qs7SQSP",
  "key9": "37H3Zg9pNYXiDrENmcetpqtoU2Qib7jbg9SpP9G8nm25VDW5ak5hi5Ae2myVWXCRnMLP1msNgYrrq6A244HUe7io",
  "key10": "2xTPV6i3c4PQ6hY6w3zhucWxHLCh59nqCgTdhU7KRNoCiRypYuNQYUroy1m6LgXNBbSxa4qVK9P5CuBFW9Z2aSre",
  "key11": "drMr8ku1sah9Typ8ujUDE9AU76Gj4gicnGF6f1MvTdoBVGPzqK1JwWHpdJo2sJ87VNtEim98to8AwCDEGypqH3m",
  "key12": "5nWEaZj113GZ3vXqckthjz7TLxkVha3HaHK3JPgpux7sxNkLu7vi4iaCY8NgBWbUF4EHEzsVfsoPqMStE1uCqNvm",
  "key13": "2FecnEyHVouuvbQAw6NuqgnJZbWN28c8YbQvUnQXgj7B2b1ceibXrdZwu9crgY9PiaFJyEYmLVLJdSV3MNS45kKg",
  "key14": "5KqgvW9fSZWadDSEr8Bv9warDPx1ML71pvZtnvKh3mHDzk93J7BEPZ31ckKUQbN4QA61uozCitdVKAEasUdmwouY",
  "key15": "52CyVmQZrYn8BPP1KZ5VYTkcGe1Heo2EUeJ7w6nJ3VHNep6u7qLHTFeEwhLMEbe93dToX2YGJfWFeimshCGjLFUK",
  "key16": "4Nbncdy7XFkH51bN6QJkqKeNbWLD4gTTZT8RrefzQnbuPEFGrQW7EfEh4RRQ7qfWVZd9p4ZEJzTrk31PFuvueT5Q",
  "key17": "4mvGusdn64AffZitLhCinTgvKYgGZMNUNBoQwLBTQDzc1bFDwWCAHmCgnKW4Vtr8PJi558e1QuuZ9ZWp1SzjiwKZ",
  "key18": "2hw8UsM3dGyaaGE5HX65Mt5SsBxmvcjxKDVPMt2JKNo5pmkkU6WnTwuzWjpREqjaPE8LCZqB6wWS5sjNk1MoGVv",
  "key19": "3WfAjhWNpTG7rJrQQ16qECgH3xVkq8CKy61cm22STtF2Y1WaRUoosCiBppmLeTj4DDnwQksESFh1ZEPosipTWFpK",
  "key20": "QEaZTMQEyvF8H1GUUuEvUcw9dH6T4siSP9iRS1pYvLmtcYmyoYLzvtWqPqQPcUjZSLhwP2bD4FSPCKonfidcxQX",
  "key21": "2gEDHaw6gVbm84zqb9pPbMP1tHbuC1YsM4vNxnc3sgTic8C41a91bGYSJNwha9uKBa4FiTqX4LFpb64LH1a45KWK",
  "key22": "2ZmupjqKSoeSfLq9F2KozcC2xbsje6YNBj4pb4RkrwxpKpCNiS8pHuE1QGRG27ZaUfuErjjwTLp2BE3F9Wbo7teY",
  "key23": "2MGnYAWVqkTQ1jY7Bzi7ZroRaeo92EE6qx9EJLn1qseZqXSLoWotvpThK6nu7iXQeDa85FBVr7EXieiNQavjyam5",
  "key24": "3DtcHbZB89zd9ZPzpckgxAyvjGnADEazytyA5afVakAwx6Hg5Zh7HsuSG4fD5vQeC55RDV2tq3i3up1YLwx9uUwM",
  "key25": "5Dt4RJmogYBcVzYVUZhHC82JcwYLepyEwNzUqC4YW1yWhpTcujpTkUWEKow31xwnCXFQ5REYEBdQB848mZTLQeTa",
  "key26": "3A7XXfPksxDdR41UkRBLood5RystSG4LLEje97EuZTr67TmYqZtGi2uMNjbdHQzCvBNT3ajvHbbhmD4LbZfegZAj",
  "key27": "P1enSePCAiXGdPeVBYNWUeM91sAnXHDa77q1ehUqVotw8wvKxyjnLApwaSAQhYiydur5UzV6VgqsKHUW1nCKLoR",
  "key28": "EQL8YFucPcFRF75s555gCD7wK2JZYrfXbAnEcsCa3XekcvSh6vNnwuu1r1hFBE421cBfpp6c4xwRvLfJPGocsxB",
  "key29": "yV6oAJxPLr7kFcqQY3rwJ5fyHSqKWsfJY3WWJDpGjDzquknNi1LZdo4rKat8aw6v2jgQvaVQBZJ6NGHfx7sqN8h",
  "key30": "2NhDZxzm4CXEsw1bc3xpnbHdE89mAaWHtpaPQJZzyjpdEYj8gur7zAwYALLFYSZ7MJ331uhUSVQt31MPxFN98GXu",
  "key31": "BGcHksJ5WDkWQm1DMTgY5qXV7yoyhfYBbXMy4Vjh8TsZYMwLTV8KhH8TFqmht9hmJdvbtcwLkPzRWZQ29jkmPYQ",
  "key32": "5YDDmbFNbdEFcyeQ4TcNaN4fHBZ28afBGbtfJjAyxNZ712XcsUcJyFefjsK6kK5WXtNAmNW5TgrhckxC7AsAevev",
  "key33": "5qZC5od3UknqCSoAtdWEAdDWTddhdpmRG3cbkiWpxJrFUsdHEkFBZ7PdLc4VqUrQBzRxd2pimxvRoAcMemSeZ6ms",
  "key34": "4q2uuFesro19xNekEh45wWKjRnYD6Ed41YNFmFoi2J9FNv3q5RypBjTbnnJ98sfLegLS8qhMKeUqA4oYykCztpEm",
  "key35": "HLm4XEdM7QqjxqJyAKRyP23rPSZL9eLeg1A2Z1xWA7w3YbuL7o7rwSjcAB66uLJzjEN7q1PnxLCNXQRRkKc6LWb",
  "key36": "3ddPPZuow63URj4wwu4NTHkcmrBjJoisKVKJj2CD5QRdGkuS6Ydgc3rwzQ3ZCKezpvv4qtJPAysxAWpRhhN7rn2Y",
  "key37": "5atF3EDXN7zpaTxiCEACxNmu9FAUByrQHjaN1FMNieBxwRQ1Mo1UEqEFadMMbphcfycYzq4Kqija1wCUYWby1KcQ"
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
