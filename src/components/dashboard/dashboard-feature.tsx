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
    "65XJXgLubSWdiYaYTtz7JoNPZavANLP1tTnvAnccRRFkEFBu8deAPEhYz6DevZT32cj5tBszM1MLZMD4gtFrbQZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdQBJJ1osAwRgt4Whtv9PSQnYYq14VDs2KpYS5wX9zbVp8r9Wsr7z8XGmCDVfUf1oNFphLbyrREQTo2LxNCoQQo",
  "key1": "2e6x7dSSoS8L4LHDdTXAWKb7HuGVK3uSHNr53LnadECXFUuPchtQKrLYqR6kGsZeaL3tgMCBX7r8mKfhDkuJVN4C",
  "key2": "2JasExWdAiNnqy9GqXUk7RaTdciqLdFLQYYgWsW6KwLoRxxGwnV2Eb5L8GJdBKYM9czWzgknbHb9bUFxBE1kRWuA",
  "key3": "3A9r8V8REGpMyNtvq1XXfNBngFGuAUr26xQhTh1MULS3AjotX2Z3qfpaZhLP9mDGJnjHyyuszynuYpFWiKNEFTy4",
  "key4": "5ZvsFebS55dCcB2d9cmbjR69j8TNqYBt6iZKCVqmsrmUhgtiiDCYfcHJciAmUEPCvBmdzQJbYnMJui6nqJUUah2b",
  "key5": "4CTBVZDf7Nk1dV7XAz6raYcMpzEBDmCzei2J2fxB7ViaadwXohmFoxaoYkbs6sFtBw1QC5qE3jGd75ps6uwaimXK",
  "key6": "2wcCLc6phnxCP6uqo9pD6KxC19qUr7Up1L951X97WMX51rv8PyL4d55pfpaen2Md3ydstDpPvpNF41p4fQw5Up6V",
  "key7": "66BqLkHeWBVeQaq5hKEf21BKhQsPY8hHycB2D4C87HsQfW22dkS7Am2QA2qJVXW9ThZXwpmM7W54xndF44qE9T1M",
  "key8": "3hC2DG8wUvB2rKoksS5Gnd8riRMUMTm5cHfqnGaLQBk96QgeVsjhWyUsGoi3Zf5bQBsgDNXG3qBkhBzQV4RzA9U4",
  "key9": "3NrU6m99N7G3pnpdLV5DYX6TJfXcc7k6dgmJqkEJj7HdzkwgwVYzMYeXoaxGtTPauxM8TiBWfiJvaoJM6om9Pj2r",
  "key10": "2EEzpjZfWUmrZGwL4URzDe5LXMRgopfxujUCKm3CcpWitYDaRTx5WoZU31Csk2LHiZQNGM5QXsJe56dpcjjCiHww",
  "key11": "3YVGNycJfy2vcYJEnpf6oGTZWQYuseKURJEQYUQYB98VyrajTiGburXnqPbULmFTSu7ZNtiSjLMgjYCG26PqYhiM",
  "key12": "4rgyk6VmCje5wCXdT1RD3N9MgS3RAhkyoCXvVJRTUHaAdFVCNn2jT2B1hXEpyEqLrP55aSjJ68kWRC5MXdyCnEP4",
  "key13": "2DUG68MdAzBJbfSaoNDw5yAnVHiELPc7TQMEifhis6mxR7fge1yppAaT7eYpvHRQoCsosvJC2VT5qDgE4s1yk8qA",
  "key14": "8wfsXMEfKvXu5BJU7G29iRJtXynYkZqQfpoB18zNsDT3cfp75MceF4vpRtzxq9zTXgnWPKPXhowW2nfG8zkniTY",
  "key15": "36v2y3pTshCRazRYzwfmq5SiGiifqQ282s86jJEvrQSkMWA4kEBELZvcVYX3oVCHi1MVJF6Yom4HZrunzXzDBVFn",
  "key16": "2ZmVVmp9vaGseH1BCuBPN6tYxkaQyVzW9JK4vTaMGrRDzN7eKsogPYFL58VxmmjuSHsGaBadxAne24D2kUYS99XP",
  "key17": "291pHdtHKJj2wwaLRqc3u8daba8CDsYPC1dd7fWafTzeEN5mGZJewwTD4GdYsRfAGm58SCY3vbiBVHH7H7FLbEfC",
  "key18": "LFbU3sL2gohrQ8tpR6W7xLsjMFX27Rxzbe17cysWS4wVXNDVJZp4H5QbRxetBkSwqtbDv4LDf95TSfadKZFjfem",
  "key19": "3W67BWz2U2LpC3R2TYZD8byEquQGXsRHywMpqHDufaHZZynaAZ7iMqT7gJQUWrpdy647YTxaYaiN5JaJpttypvbH",
  "key20": "3LMFh9Z1ijHvXsH5JqxB8ijKRenfJsJjg6zivhovRHaWD11gyHSnuF4PxtwiYvVnXx8D5EwuTyNDZUnGbMrS1ZxG",
  "key21": "5RRsWYsxoggL6fU4R1Vqm5wVx3qQC6AbKEN4wgUoCnSnhaWen2mbbPooi9TFt4qz5QV2gCQWvy2XsoYsMr71rJhA",
  "key22": "43F1eLRF6rhR35Hgz7jDxF1DafZmDyoabFaiLjn1tWvrohGjknspMZVhLrwwtdTRTnVtuTiNftDREYnwpFKng78x",
  "key23": "EPpkK2uNaeAkqRzLH3t7D1hiSbHVVC8LJ42gK15ALsTbJsCtz9WTqXvq82RFdMcW4exi44oMtHCwMcjuWSXwkhN",
  "key24": "4NmuL88xt6YKuiDk7S5PoxtGsjGcaxegCsk777EoAdQLdyPhHyc7Kznt5EEBtBhxhVA6biLqL5g4p7U7YApPy8aj",
  "key25": "2pY4Hy6yQF1EP6bBp6iXhUHWSDFhLrt1uZehucmtSVgAmcq9xGHPKoPcv11eH857ucAQ5yHoEyx4sri7iGGaFa4m",
  "key26": "JkkQwPf1UiN8FxTh5UV5v67KgNEkdP9SsRQgeAR97Lytk1VErxppr6VGjUHbuQABhV9jZphE5ucHYHdGb17wsDD",
  "key27": "5foEKj3vjzKsgsmjvTrDzneG76ne3RvScRPfnAMtGBsdVSDSQfgb8RSbbo785RS2GntJ7u2gozxauh8u16RSy4NV",
  "key28": "2tDYHqXyfbfKzvGvpSFYmfhQL3beL7XKfbt9zJHTt1PECXH22tHiVVJZ5aMLDK4EEkgmf1c4e93zNsrhgSRh6wDD",
  "key29": "4TAKQhiU1dAUb4UPNX2Rvhw4K9eaq7ChyQCWwYVf5hX37EEirRh9t3BWu92LZ9BAZysXrufGn32pqGM6Zj6B1DCM",
  "key30": "4jwjevNTVSbY2V2oWVofrbsUwb5FVpqBXedE8WipjPrgUnXGncxdkaUy2Huwgy856xtCfwQUku3j4DLrSkLR7S76",
  "key31": "5YYwkdfcuY15769mi6DbEfcU7pvmUSxakGy4LL8E8opEEieXrZoZufgXiiQdaxfgNEGuRPvvYStF2Z6XPfiWmo7y"
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
