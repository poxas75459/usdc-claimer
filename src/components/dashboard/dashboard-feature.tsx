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
    "5VU43iajFEf6KPBaLnchmfEL6BfVsTNdMAuaWFtxwPT8sGt4AXzzpZc2F86QK6xnD13Uw7jLtPvgLmMZpVit8H9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwMFYKidR9aD2zLAdSgGzqfvuZFaixz7Ld5C7LLUFW1gPrihJ2N5sjCNSd3NU9gsb3aBzMnSszzurvKjEmeRMY1",
  "key1": "3QiEeBu3AYnxMrMmL3Txz9gMB2Sd1FNg22rvphZDNAVoMJCqjePJmx1dDrA3E5jQHxkrAq2Fs7EEZZWG4S2PnuM5",
  "key2": "3K8PugP2vww61EpCpqGFn4XjAczDV6aiTmVanZ5HtADKA2PpjDJSi6B4zSHDgMHN941knmLe5L67hGS22wfA5FJC",
  "key3": "PnL3spEyxsgCGNqjTdEW3SvFZEXVK5uK9ehKKxDDfozeW57XJVZL1CkPyqubioNUdT4BzARhLUmXBNFHqcUJVtK",
  "key4": "5xFputHgkCua5PpmavRwHzQk6LLCu2BFxrxHJg7rvy8khHDnSsad2QTbfnpZzPN56ZGagDsQUEtgZaJsTa5psdNH",
  "key5": "RUWHiLwJ2FQBF7uYAyzdYCxAciL6G91TjRAfcxWrbQ6xjQ7JgiaMC4yZUyv5TpEQgNNkKV8qtzy1TZsc2ttu3AX",
  "key6": "5hRmMwDHEeRvgX4HXu6ZpQvgRGi7SKYRHvGdrzv9zU3Z6DRyDMQj17a4DuEEZrFDAVdaDtHL61ZNXBNPgum6N3gN",
  "key7": "3NnTKsN7dtuJLLhVhqVjkdTnqsMxUPhfYamoNze6yQPTnPPnPPnzXF1hPtsotTFuaj3JrWhLXaYVfgUnLnAYnFig",
  "key8": "618KdpLy7r6bMYGDWNSLqGox4NL6711ybZgf19Bwjs6Kaoy8rRGSJXz9G8EXvmMMVKq1AJVKGg9519Z4rdjW1Wuc",
  "key9": "DhNo6mvLW83LNRPjtQ7qNggu6qErGJ8CYm9UzHqrBz8q9R6XrKVU5cLSf7ydjMjpSDELNokqeB9ib5FGmUNQMXb",
  "key10": "PzrodCLcctoCgsvNLP5FkRRiTPDjmG89LF1SVXQB2rnk1WF2du5FcXMhY8x2zXWkM9NmAnFm6hDyjSm2nVBffjD",
  "key11": "5PPPRkevweMK6BZrRc5HmAUuBHY7qQTyKSKoV1VdwaLFmfG6AmsePFKPMLtQCnUPaRuKvMfcL7jHqowdnV787rj1",
  "key12": "4d5j4QnqBQRoCCa1rT47sotYB7YJjnmyLZSqQNP7Lk6GeMmTagNHynTUG4f4M1VQ9wGJKMuBoQDCLwd1veFWdpL3",
  "key13": "45dN7DdzN8oZBwosrbef9XESnnx83NDQMgGconNM1B7rjKsUYFKsFkzvnR98mAynB1iZEsJYMCRVSH5eRYK5hfeg",
  "key14": "3ddS3RQU3tPJi8PE9yNdBXm9b6FhqiySm1R3WNsSX5MYyEG7sKVFbUvcsGfowyhrFUBVAE5AkJams4mTCbrtAPcS",
  "key15": "4o22J7xDX1ABvt5cyabvmoD9rJaKVYR8ZpuECwSj9aLjpEa8bLeWMuiprQUdqTDEzqQHYT7ouYSGeU6NLC6NugLc",
  "key16": "5oC9frphbiirn5syx2W8QqDymypvf3LLVjZCSLwt4HkjUYEbxtvFfihdbKbRqmgM2KZALKa96zBP3yHkpG2kHx7V",
  "key17": "4BGjPZ4oaZStA8dMgFvgMmJ9fvDV5XUyrzUgPbfma6az9Tmfo5UeTxAy4qtwHVPjTPTDcyfTizRC6T3qG7woXK1A",
  "key18": "tVEEVvbSgpdqci5xiTNhV4Lt3tCEnc4H8BfrBAuBJKCbh6TegeDUGapqD5HYWZqA9nQC1ypeLDY94vfSTSkDWPX",
  "key19": "BMFxvQpdmpjYSzf3gsRGciB42bk9PAWoBzV4fhpehBUpk4fDBAHkfZ4N36Tm7jihjfTNJe5NDXwEmHxmwLRUNkj",
  "key20": "5q5MiDjBqxwGTCKeog6mPKeHDDVT65AkSAVx7FT5XjR4zWb2uz7iXJXXrfPXHYyDn82np3yAzmiBkEXXB9RNcX6o",
  "key21": "4EtKBVSrn4FjPFfaVQdrZNME7u5SoHNzBFNEMvbFz3bZNVBwi4deSC5iCVNMYAUW921ZXbf9LbuYhuzdhrMaQZpg",
  "key22": "4bRtdq7vJR6ek7HsyAXcmdXEZkwNuK32fcc1QdrnMdvQaNCo85GGtWvMYWXNiUrfGLXZYpdC17zVbFhsMFXpgVzc",
  "key23": "4mKopGrR3EFmyUN3QQXp3RyT75bG6HQ333URpdywXM3MAszmnvT2ssHsXMtwYrfjXPLU2utTYkodpZTCUubuGaEh",
  "key24": "5VFMwSkytCnyQhHf2VH9JB5nWdS2vRhSaZdGjqsNHwwyCW1gWE2khbGrFvYAxUpRjjGevoSQC3FZfTQUrF8eKBQK",
  "key25": "4xkr8ZLv4TF9EuaUSMRf9peq4V7yu8mrPYVWhLvH9V6xU1JaMAowFSrtxST9g7B8L4txESC34nEEFzmyJtLgqHVQ",
  "key26": "5soqP8iVi3TkCUJssPWBBoyE8nmpHihFXJTeb8xafu3cHBFfxgMvAvc4w9jPGgjVuS9JYHMB1hG1tHjn2H1VqkLS",
  "key27": "5CuXKFEEkz8vYGCKXZMEanAo6gGL6XV25NCSHpNk9dSAv1yGQj3yV6htpG5GuiW6nXqLXDoxGb3QgeKbfmtqXApg",
  "key28": "5vj3ECRXgMBH8a928yGW2K9kB2S7amRVJ9UP7PYjFBZL4MEFgeQQHaHPhch7PKzh1VZEdggEjSkaDUzNw1WBymcA",
  "key29": "3fPccmUMwZVK6UYeN4MpfhQJJkLxt2y2upFhTSdPhDCqMMJ9dupHDpwpS3sbuUEkPVSv5hKsQTgqmwRiW1vyxAFk",
  "key30": "4fugh7xNQ15EyLRyKiY4ctQedRaDXYRFSy4yULonjKG6i8VV9vQNW3LZdoZYmW4saH5W8fP5FxfySi35nad5mvBo",
  "key31": "2dsEgAPaRz3TfX8MR5LATd8Sqxhv5fozpyq2Ww73kFVghtAoB5qYDX11pzZbbwUanBLGw8gftirFbXgTe9sa8eHG",
  "key32": "5uJgP92QH5Z2UTBfx9x3L4dJ9zSqjoNah9pmynaZfYxeR9GPb97ujCKT1yV4Wvb3f9AFKM4bNAoHTVb9NRMF2ja5",
  "key33": "5LuL3PaVBYZifZ4vKxfV6P2QRNMTnDNHERNzK2yAoemHTB7StzzESPM61ou8U3eX8aJvDfoGVNdJLN3woGsiSATi"
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
