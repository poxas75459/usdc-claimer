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
    "49wqTEzP4eA96vQEYzKqQmQ6YSqABG1nABfCGfTSPiUEXRNQqXdbjFZjJnL9AkpvJWBNDqPvatv9PH72EiAmuuhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XT7QxTLCNeNrfk2bZDkzHY327uJV45h9uqHpGhVMJZt5u3DPpSBPLtyjXVHpdCNDRYPV9AsvCkiDrzEymcABMku",
  "key1": "3Bg8uamT9S9hga7KWS1Vk7MUULR6RLyY72B3yStquT8Yi1RP9pHWznLMPvHtwdjBsbCkcQmMeAZksfkKsWEqbBUB",
  "key2": "2euhxNCkYeCVkafX67irDRTPEgaVPMAbdwACDvsZMhxffivT7KBhcbWYottVYc6itnt4RonYj9Fqqxryg9DZSfds",
  "key3": "39rbZLKhPuuAbPPq2ZDjPYHYFesJ83p7NhESoYQuxAh2LCPPn4H5kGbH4BtzLLByNYz8HHjnuCQikiQZHWhkWZsR",
  "key4": "4egq5GBdXA5P9Hi1zRdnMD46DgSBDPZcoZpD6wjskXQ6gQ7zxefHUuPLnxpwmWAmQMesx1zZPmczx5bV5dfV396P",
  "key5": "5hwF9iJhYhEyb5HjYYJJEJz3N197LGvpSt99bwGH5ksWnsnHxoQUiFZX3nmxFmbUTLoa9tCjEYZUJzHHaEo1KY9C",
  "key6": "2iJJ1ZMzkuWW1gAdhGD2hfmx9ZQYdV3hgfknB2bwAWu8b2Tdzu9u4FLP9MF9QYkHGM5Q5jgoH8jWZeiL1anAP4Do",
  "key7": "54GEpXFhjhi4iimeoQxhhtDjyJUKCkgPQNJqugGU71RCpY2FiRCuKfiVdU8HrviK48Pq21iPAL51rvjnYxhZDqAq",
  "key8": "wY4XL9SX1ZJMU65shq2UuMK8nB7WMpaL2nMRbNVxTovRb7qtsEiQgji5ftPKY9wTPdqCa9LZtzbBUxrnsPgXZW3",
  "key9": "5AKk4LUnSof6gF3zPqFhi3tr3rHQGBHoZpngM4YFpMUEzRVzDNJzSePgo9mk3Hfu1ypry2SsxbFufNxXkjxT76yY",
  "key10": "2MbuJuc7YLBk4bQbrMDzACtX914Dks1L9Z8gugJzXrGL5d2KUJcb8ad2PkmNKCitYfaBwTr3d1EYcgcyJX9BA6y7",
  "key11": "37ENt1B6AdEkXrqS5U5wnV7mvDvAd8oLkw3vj9n6MAmsu6htX98MyP4EbK4dgFasQiUBtgCNAKDQTBk3wDSsx3Vd",
  "key12": "3mDXkKTrp1rysiAZ5b6cJbX58Vfjodr7ip1rM5wqxuJeC76hfXPp75haUifRCDmmk27Wx7S6Pj3Gu9WfddAqTw7A",
  "key13": "3EFLmWDHHqjNcGN8612E5WFtPe6caK56bkCmLTzvwpPPTrtd3rDNYtJeX6setsSYiKU4yYh8RqntLrEVi8w5oHST",
  "key14": "3CU8vZtxmhPgMjusd8BmWYf5LDEEutVpufLX3EURTwdjzU7NffR3YrYwLD9V8F42hVF2gkgW3amtLAkV2br1V3iX",
  "key15": "38a2vMTPrdSGN62m4dnxSM7LUrRur5W1uTouNdkebDePBa8enjEg8Tj7uJVVkbXQgJdFnQvj3PGUPdRp1Zyp3pHh",
  "key16": "gA6gfM5BicX43thf2wWnkbhvQnH9x5gsQ4d1cnjCfBuSdBZbAN5ooxcm7eowXWyrTkUr5F4NR3UEw6PgMJt3igm",
  "key17": "2aq7qnokyc9VVNs52jgoyU8FYEFTeDHTzRJar5X8iXEKeGuT1nykQMw6zoJhUB1SqkxG9J5fufdyX8kZmxgMgyxc",
  "key18": "4NZ3pZrDar5QcD8Bi1nK5aCVp5seMWbHAjv1MyCuc6eY4cV9H15RrUNdybmMf9dhC2154etzCfArgFjAuHV6WJrd",
  "key19": "4EpRgmLkkN1SpQb1HM53hiRmectmKHoDUDnxFXEqXbbiHrncEqTgobyTsn4vrF8LgVqAVMcz1RUAVrHocB2AxzpC",
  "key20": "cEfsm5ktBUy5MFHJhdjJK5Zg6utxDGqxydp3U4AfKBEoxXHcNqZTsjXRKKASxTf2DwDuxf3HoB7jN3psmYA5E3K",
  "key21": "3CSmXYgULtWBAkf5GzmoFXiFfwGXRWn8Any7QLhG7VVuk4Mo3L8T1d5xsKcY4s2tkrwj6mE6fYxoVHB8aE8isNE2",
  "key22": "3szM5d7JSPFboeiBvJBEBiejSp1wZELmNuRdw64ouXx9DSbdLopdk6kpBUXrZsJBTHcgYcAKSzkftnuzJBaHSMLh",
  "key23": "5yfg9oowmELnnqWdB9ePxZMndoUCH8hWRr7Psov8g7mfwpXY8i62yxeAykRMbQXygUeFgHb5GxRzq1iAJR2n3fet",
  "key24": "jShAKW3SjB2PfwpHbFwPq1pDN65DiJ8Rjbd1GvJKTS45SxEAqYyiLomnHvXNsvyQbuyNG61B627BGWHFwuad34v",
  "key25": "38ErNxqoaYoz7XGDNfKiCrkYRdUgdq3G8kuDeyHBNMG16JWSmeG53hFsy93f9qDVxeDmZASD9H1itF27xHUFsFkJ",
  "key26": "4E39ssVZctirsCPGFyNXxVL32q6387Ui2rXkB6tX9cojHv6soo55uDa8nUbD1FEq5H6aWw8Wf3uQoikrnNAuMjxW",
  "key27": "2fxiwr8RLYjdgDYnwgsNtHGkWVqqaryBLSEBgMLsJZM5YS3yADYHRCbwCwtx6HhaEWwPZPrcFV3rFmpHhGjRadqS",
  "key28": "48nJ2x15Gj5TwMgWdZ2CkbNYwTPFz5EY7zrfMNQaEZzbLV8twNjUfAdSqY3evRSAQDBzVY4SPKPr43CfqKUx1wex",
  "key29": "3Qhoq1uQCzoviXgKnda2FUyWpyiPrrGJdWtYX4hdBhQjJqykn2xjEdKeycAqt6nPh4QuQWGtSKNmsoWaJd5jQWjP",
  "key30": "4V6uEG5VRbzivBJJrw3pgJB4Eh4JHJV873KrmyK1nfkrYwhmsDM3uifHvUPzDn3iQuNueVCiuovDaj5yGGLEmnUv",
  "key31": "53MLt68ECwzDvhyCoFQBCNxh1LM8M7w9M7LUPCKJvyYAE4CLEmBNfx4TwQoUW7poUD9TXDHTsUqyyEwztoL9qtno",
  "key32": "F4dXzRsYJsjgeAjMctQbN6G8PF9AdfqtL35KocHSRA8xZhg4tL8N3kd4QfnTJ2nHy9e739ULsEvRR5Dx8o1cHSH",
  "key33": "3KrtWrXpq51CphdJvgwg8i9wvkRSw5jJpipAFRtgpm4hyUSRANHFRC9s47fpLYUMkkkHr1c3DmDhMcBgo5qYLGkT",
  "key34": "4E8ViBgLAL4TbMb5swwv2xyQyBjQH23zMJNqh1tPecBM1aKFgGTj3f5LkowjBjR5mRRVDc3raEmXPqNPfuNfVbLA",
  "key35": "3x85zJdHgFDDX3NeEyQYddfALbNjyNJRseQVUfVmCj1hc2YsPRvW4uMqggTMM5Yi7tg5jBj7JWNrYmZabb7Soskx",
  "key36": "4EnqUhfUd1agZURuzBfHtNFyhnJST2jCMTDhyfRmG22dyuvmXoKf9hZG1zYj3CJ75YwT2Wk6MR77ULT2C3zpRrbC",
  "key37": "Z92YKZh6doHCywAqPxpkSMedEvpmBBtFkZsKSDth9DivqbX1oa8YvTYTutDD74rYJXhukYTnppVm5vUVxXwoybr",
  "key38": "5f5Bwa3myWuHk4LjP43fdD6pbwMwoBpvQnEmzbUBVqAhT77j2KiMTBemAqhc4w6oKcWdkYtvWTpkrH97bkWDMYdk",
  "key39": "5t3azBwgLqrxTMhcFrvPuocjRsSSveTLt3rgJ2c5t83taXDjPnVGmuDht7JLziyi6p39HZzQXRez67KPdwdB7ekt",
  "key40": "3TFLrREdmgCL3Jkd4djuv1SbDv9Ttd3LhK1KpyPPkFZkjwtLWrBCJw58MZDUtNfaGgRGWNcv9SEkE1zXvZFB9EN5",
  "key41": "2vUCskjwaDhKqxesGACqkoTQBozSpf7N3dsp8N8yHCAW73mYoFXnS9zFVTPFPwaAwTtsArWZfLfR6Wyox894k6dE",
  "key42": "DQUpXnKMXBVeYuJnoDe3W6KbmTBzgU786WucWQJ3g865UqpHAFFh7zS9wJHyQ4im5nsFAJJNo6Qj2UV7a1sAhbX",
  "key43": "3TDUgLouitHVNoWgCeLAQzQodvXAtKh7iAaKzYo2GqJr82PQ1SrRjgEYQQVBNKU83ndAm7JRntHBN9wTo4UWk9QT",
  "key44": "3v9oaNDpy3nm6dmcp4aGiykEULNUMy3qE4dgb7a4sA4aZ1zSaN6W6zohu1sEzv1TP83kaGgrHSKUrsMD7EFPfGW5",
  "key45": "4dnNASKLwN2Z4heL3c5PhTp5ZFgzA8WY2Um1r4eMFYFaFp3zuqwLsTQAZ27dNwxjJewJWeFN7mvsTuBqG2PvAUJY"
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
