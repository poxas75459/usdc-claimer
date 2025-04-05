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
    "xGVM5dpP88Gi7TRkBRh1escXT7z9PMX9dRbtdANhQsVb8KupCQNHPkwVijat5hdT1oGMwAbYDbw11ui5RqnUsUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Djj2GY4v3w4W76qFh4tXXCvpTjTv5Y2f74yASUQ5DGoR8w5LJY1aE6U2iqeJBnx1yuGvbZ3EobBhW8WTHZhQDj",
  "key1": "2DwVzdoB9nfpmwNB1h3ddSYSB8A5hphQAzuvDThJtRvbucAnoBU3u5RzC4JDrTP8GwXQYBJZyM5AHrU7K1aE9J5G",
  "key2": "4kFMMabvoVRJhsrrjxtm4yUrrkkqgYekQkjJyAh3a4qdBMJgKGfQskeY2JkfRsGuwU2cfpbNyLHmkdmT8NgPG4Yr",
  "key3": "5b4xkfFNJDw86wveDnNNthb7wL82fjaqmu9dkN1682hREg7XnQCTP4rij4NpXypQ1xJptDifYfQBBf12vEpgGXpS",
  "key4": "kvserjNgJPguM7nTZeJvw2km4fcGnuQtFXVcr8y3vZDqfDoC6gGUaDWc3WaJeHzXB7d3iwSm9G9ekkPe6NVuLJz",
  "key5": "cAK4ioQfYg2MpQVwhAqi1uXXvJ2d7qTUs9CF7kdYf4rHFmtWGpTTyBhKZfJTEUezMNhkGxn4JufcdVFjadXdFAH",
  "key6": "pLeSHAiMy6oX4xWScMN4xwERVQUWQsP5M5ExLYWdrebQKK6MZEDLS7bmNkGPGJrjUZMU3meb2EHXDapksSvBHLp",
  "key7": "5C2Z7F2agHLgWCwz3FUhWQnSGGWXfchPyciBus6BZo52UJCXUpttrBBJSPrWwj7SSPotxay34ViWqgBuNu3PZq9A",
  "key8": "2Ln1CeXrvFNogsbcD4CSAghh8bXnYdGC18c2wckMC2R7b9mgU66pu6NuxEtYWB3apKjcZEnZdSUFA9ktfNDMmTqX",
  "key9": "8R2qCTCf74sK6WE2E8Skg479jYkX4yF34NQqR9xp6S5t4JBUwxuLj7vdtMoe8RCHEW8ksHFGHTM2uAS43cwcVfe",
  "key10": "3AcWsvdRgfDEJmpfvmAW514Zq7Fn5AVFsLSLZ7ix6ZjkqDNA9uERgGPZ9C9tk3mRjStst3FgfnXdvFCprkLFEZT2",
  "key11": "5wEw3MB4DVGLcBfdpdyLCdSvppETyCo7JQi8TQauaViTDMV19tzXigRcg8iEDWv76cwAfoBXJsDCyHHkdU7wZWEL",
  "key12": "4QJwYTcdmwcCTqPVU1uW4fvig5hzd1KjmmGzAwNrX6KNz9RXPKBCHTAidG2d6b4ydw3EMmnsDcZKqv3LB6qaJAi7",
  "key13": "31SbURr9o6v1sgXYQhuQC1UssrKB5H7RPGTtdKXEKb8XBYw8uGuozbs41sQc6SYE6oMYRhCxUCocdqN9Ggc7978b",
  "key14": "5UmKtADmzJ1bSeL3jxMwdFs8mWRBUgwLD69VwouManWfTWqpf6AXiUHMiMFv2JRC9Ug5uvWLG84zVfBFtCZAULDY",
  "key15": "5EWYYq48v71sEwgfc84CZLw7sswFphULEffy8WnfXhUQHcSxLZDZDtvQm7PTMJvuskrDZ1W2c2MwADC7Muhg6Zy4",
  "key16": "632fcpGvBmAUvcSi9VvCizMe1qjKhjN5oT5eE4VpbXu9Jhsu2WmNBjhpRN1kbGJBmNsfehXHjomuFYKHh9eBfCam",
  "key17": "4R4GQDqiaJfdZuUvkerZiuLrns3CdMoFdKdD6syW4Dai6pjS2d5skjv85dZV8thKYkgUB3SPKPQxZo9d71RdjHMi",
  "key18": "2EUHv1xMrzkB7Apf9uoxugPGW2VhF5ExY5UpqeXZwmZU168qDpgjdJWagWcxm4gn85GyQuzygMu77Ka4PjdpYKfx",
  "key19": "2tfTXvCrF5YKxSMN4Jb5buRFyEM7W8aHxiMjk4JF1HvQqPPbwwday5ZCGhBNfoQLzE5H4rMcXdNWBjVmMMFpajgk",
  "key20": "2bCdk1bftxmUwKRHVQhW2E63QkeCEnfyiEgPxCa3p3zitVyeuiMNfogNXafT6f3eytFxpYcb5opKBCSB1KSR5zQE",
  "key21": "2R5soPfwohuAL2UJ3QfKWGWaVBfsoXWnsEeGizE94WyMbHezA1EU2D8Rqgb8XbSjhpDcUsvC7FseKteXqRaAoDSc",
  "key22": "5u4ZESjQ4v67v5FJdDsReN4ScBmSFiRCH1AqPNEJ7VT7r6hWb8hpX7Ddw8hA2CtLZwBsheBDJi2ZcvsHktMgijMM",
  "key23": "Lz2tLjj4LVcjGvLmrXNjsozaNf4XUZmwj5kW28uTGPwisbs7ubZ98mJ87cRUbGCUp958oKk93fhNXXWmJhJxaSS",
  "key24": "2G8Gcv1Jk5ejg1px2B6p4vkEbq9jJBocWPhfgDcPyDqTBPjaEx5u4UMAJR4Tn2PBum3Q4VwcEyv6pyzdbcgDvbbV",
  "key25": "4m28ezgkBZisJGE76mA5Q3XxNRw1ZgeFxMVzTJzWeFD4g1GHFUmaKhdbHqi5fNkps5HxxVzDrXLdLMA95GRuqQ6d",
  "key26": "3Bj67zgNdRtwbeQzCDScyhQDLFAni8D2bWa2UY9c9APzoLBQuXsWZqMAcUBgYhDyTWPpE5msVh8TuG2S9fM1zgdw",
  "key27": "3L84ukQjqhPGnPAyHAD2UuqfKTvMCirbjXnYceybxTXaEe8QcL7Lb6xQ7SRVgGe7k5hmK3DgWp2Rcp9kBpZASfBZ",
  "key28": "LCS9c3RMDdeVxj5vAMo6pCSKLfy7uQkkN6CBu1Bdj8SbnMcna9n11znvBD9p7eVno1hoSBMwsiHMS4RWA2wGoRi",
  "key29": "5onzMReC2wB2EzKpY58yWVoWjqwRHH4pM5U3xUoLbb3kvaSH7h2Fsoot1XX1gDhPWaKMVYXhE5pnFWUAd72G8TFC",
  "key30": "uYoiUhiMvRU5Z8sXAmptmXP8qhHoUnFFMafYbuMiR2FSL7oWKTEq1i27tVtgC4tAU8TekmAiqLrAZGUG5bGwo4a",
  "key31": "3j8eoJQ5Ghq2Wa97H45ZNLrREtvRThMtygsMwUEUxVHc2Xd9xx9RfzngwsXdb6eK6FCq8zfGE2zytyAryoVfsyfq",
  "key32": "2RPHmuYYL69afQuq38ACd3oMV3ZUH9jPaLr4YdoruCxN3XHNkWTVVritxL8oR7xzyQnaFjAbaTG7e4ucEjijNUk9",
  "key33": "JexHreFnh2kK8gKncp3oAM2d8Dk4suwrNgpDRKVSQzBeWscXWNxSsE3DpBkBYrsZ4KpKAwmGQFhoz5QjFuP8PkW",
  "key34": "4GPiWjwi5qNo9RaDWFHo6qzB9BAew2gjt7XRdnqBffGos1eHhBbvhM5PRGx3eN9ZfdZZXSCnit8dUq7vKxxBKHqG",
  "key35": "4gfhpjLecRzQRZS4ckq7JzyDjFCXSB1PLGj1RnUE4pKbqvnDFcLiDvaTYUEFkeWS5iczJFYVXF2LUaUXMybs3Amb",
  "key36": "z4PSwyVJ1n2hJB76BsT6sEwfYs5gazdFLgZ2utkwEA2fGCsHi8HUGev4Fo9YpP66rsuXx8vtP7qoWmzSFVCrPob",
  "key37": "5n69ksz5mrGWDbhme3k19se4QRGmncmQRngy3sVLd4Y1mbzg6yZqP5PHkL6Yf5Ar5ZpfDj1gZzRSEPoAKD166Lp5",
  "key38": "3SAvJAX2bvakeqxKPNjBStfKBPbSTCVDAQTjQYarCWsKvEHaVGHMeCtoMdPrimiYoGxnUcSf4pTuqGDpTAaZAE4V",
  "key39": "3J8vrXDE1HpknsBViPG2nRz9CKfcBzif8E1gJWfP4Czb9CzhFdLCJju5otg3jJwwrY6t2P5FoZTsojiacooY5q2h",
  "key40": "61HKnjpr7BkbTgXDDfJo38yWfkrkSsZAZspG9tAs6Z5tuSR5jrDznfX5d6GNo12W3mLRJuXaH393Z8KkUkC5iwmF",
  "key41": "4D88oobR5K7qDixdBgNW78TgbCQVQTfnXbhCqkGGymktGcgSJWbLLnpoZu5iFxEmf1o9p9y74yGKE1qYsWxDMnBp",
  "key42": "4RX83G1xZ7D9mmQu1fuMniu8uV67ytLW16KjoWwTEd8U6QG1qECoY2PpK4r7DmF7Twxpm8DMZj6AhdawbjtBn5eC",
  "key43": "ePzxbsoUQtZxwz4AzurNkqN2uNWobNhjwAWtDus65HabkMLx3mv281Cuf4CXA1pXS8hmCJpZW8NtGz7J7L6i9Xd",
  "key44": "33hEGdTEx1FfSdsTU1kdX38ub5wtMFEHGxgpRapdJAH5kM67CtBk19mh3DXWU7sJGi4ZKcGAnVHoZ5F1vnxvNdqy",
  "key45": "5rNBathHyP4nwktNp7GJ8iGx4e6igk7njLQxstBqEE2BWBPSSFWo9LoBNVzuturwAGm3wWWWtcP5hSH6HW59EzYd"
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
