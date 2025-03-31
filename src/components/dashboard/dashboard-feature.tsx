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
    "5EJMH65ftd7jBipwNW1Xejxc8aruPX5Z29soTucm56RUT2xu6PvT6NT6TwUEF7L7ratE2ECzKbD2t7S9XiYEfacZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgsQaxK2LXUPvcVtY4VQULLeeutwn9TkmhgNJXDTdoz3stq97zs6Rxnyiv2bD1TbQ3rcZySot2Jm345kBG59a4",
  "key1": "3mFUxybtEfH7nW8wPRqf93HoVrNKgpFUxCutwEoFfJw3L3EEMTvozRnaDPWYnsA5S8UT5qAE6GZc1cq2RUDzkQaV",
  "key2": "EcsvygHvtcAPAaHPHqXed9e2xNsXJQssGvJEZ9MkeD36q2MNaYq1LxMmb9foSULi6EVCgUr1GVtp94FM7s2E7TY",
  "key3": "4tpkgu2DPv5WAdjmCmaRJDdoX1BcRMsiap9XuuRjpFo8uxJQaWJwxPbXy7eDhSq11mQH4wMBKcUiXvUYKggyBdtB",
  "key4": "XSXphRF24TF3SV4NFMETjRVPXBHaPWJtDzJVFYuf2wSwwNY2QiZHPKcr36NG7VRJwSAy2A1AVcqemynPrNFZiE8",
  "key5": "5GBrnJyXmp5889jVykzGKsvaV3yzujBiDfTRVSE6jvtGMKdka5Gv5MokMec5u9XMjWP8JGuHcL3kskPkbG8fY95p",
  "key6": "5dJjEXyEtURETpCoZpp47794kJBgeSNkcQaDRiMZbyrkiG4JFGANiDHL25P4ofyYasMvxCmv61EjPtVMrTghtaK9",
  "key7": "4CRPsiJw2kGW6oDgKWW1LWmwcyyrCqpUKWJvuiR67jorsKDNG1YDA3GuJYBZzhJrZ6zC1guFR68ksi8NQyEtutRV",
  "key8": "2J5jtt16v65pE66q9EUgPUJ14f17UQ7Wp6DqqwGUqNT2oQARPdLicWszRcRj1mDS1KX9ZZCzDjFBv1c4fT7F1J2N",
  "key9": "2FYXrMdZWXMv7EaUa1h3y1sWMszb2YGVU1qGtTEoX6pktUTGN2XoNKQqirhkvqzYht4sgzTfuksvwB8giBsjMC8q",
  "key10": "1Er2SVSvnkfyT5wxnrxFfwedSg7TQKzakBGPhEW5ULPm14B1ee4sps8mAhabqkC8Xcjg5P5rZhvNqL993QSD4Dy",
  "key11": "2cDrVkeEihuqJjJ2SEWrvv8Pj36hwWy7DQuhmZf1mdZQn2jYB7iPrqvZN8VEFpohB76Zy8zA7TFgAWSPKnZrQHb",
  "key12": "2FF3pW6WvRNwAKq396JYRH6CqcbxPnZjQshrzSgxBgk6M4zHUVS7V7hSVccTJCsNbRNgMDXdjxGeVwdLKFkV2M6N",
  "key13": "egW5ABTv4vtRHXGSmzH4WwfBbv6SuAFHvmiN7YmEcCE2j2qpftqhbcc1As7zKoHXk6Pdq85WV1yVQoJPxtUXGx4",
  "key14": "4h15JhZQ2i7q8Hx91fcxin9dKs29ymWLMsfCHBX42mFnKWdmjA8u3Pmh8zWgLqBr6Usd7yYVeCudrnszpt2L671d",
  "key15": "3m6Hwmop63g3nXFp21V7QYkbS5VYnghm3oPhtwNUhRC9hnKT952CQXYSTXKqKoNxcMopkkvWu6aWFZpqy2BPv6Gx",
  "key16": "4yqwoX6spssNi79Kwrwmns5ADFuSntNhST3ncA6MGtHZDnMdf5M6ZbCVSwRwacBPUsS69JxW5ViAxJgQqYi6tDtQ",
  "key17": "3z7UpRxbazaWTcB3CRoSMMq3DxyUHkHgvtPgiLmLXx99ExuxfuupyXXxwxDgZcibi1UEQ93hj5CmhuRAPMUDRokh",
  "key18": "4nmYyaAFAKWi1ku7AtghnegVAwzAMCBmJxUaUAzxzS3px871aSL97bot3BJCas7ZcaxncQUDfEgAZXWShRfKYR53",
  "key19": "5atV92fF58AbqFavBFydTCFEnDTPgSdfAUcfeyii6zfjSugWyDehqzG6yxXEn9ezxuQrD69gELgMsmFkUZ9Vo3BE",
  "key20": "5sZnWgNcp89T6EmkBCz68wMSs6b2dPozm1LhyrgMtt2YhdVgQVUj9p8Z4EfAoBTwLVno578MHJgwEQh2B2GqYUns",
  "key21": "2rnyY898jcJuYt1iEMbrEzdnG66CN1ViebZ56jteNNPZKN2jj7UHqr5HzneSvvUtERwAvy35QNKkbNWda3MpgbuF",
  "key22": "28myYHzpeiTG6pouFfFDQxJNzSpGdVf9jRSm4DdNEaYfcsiN4d8Prp4DZPjvVC9KNMhR9PBeJfnpUGjFaspgwsb2",
  "key23": "5pKFvBXwwbvgSDv9RJc5mcp4Lx46CEN5wRPvPZ4EPyGVqU2iBM4y8BaCrRNFkhyjcyYuaJdJoydqWUbDF42RDjzE",
  "key24": "Z1Hn8DpSpYj3vrgMcQfHBtxt9YSY48qSN2oce36Q1H7zNhucEqZHmrA6gamBFmj1mSK5dkt9rCkTeadtwAfbTtH",
  "key25": "5SpyzYBCeUQNZN8bXXHeXxYqViGtHiPXXmgYke5tUpZHxY3kn8USogvaGBJgcA7ng34eFjBSZNcmTsB6bf5N4TiK",
  "key26": "5wPcUn7UCqzC4ZwQPAuPLg4EsBADPb2AqDwoYsisk1MpnnCb3Rjk9gAGRSZijrCBdJXnqteLHy5m2k55h9FjBV5X",
  "key27": "3L9ipLyfYHyJbhKAG17dY9Q74xNDFutm6QZwwyZUE9W2KNEaiT2UfwhaAg6VrJL4ACKrYomrbwRVuBmDzQ5UvD1t",
  "key28": "cr8QY1fndQh1omHmwAyad8Nb4ghzTpR11Fx6nMM4wCXKTKG1fNkFrEfsy6tY9pA2zwLzsVdk49s8D8kueD6B5Zp",
  "key29": "4SMqiViaynYD6t5W4DRUnYGBR55YYr7e8HeffX2aaPrmgCJZXLZtBVQXhN23TbT1BwGeQxzv9NfUgM7cT2KhrvzF",
  "key30": "2eit24TufYNbdH2zjAGfKweDCUPAFB6ZdfHyviXtMvFshKTwszVFBD5cLvrM4NvFRZAEroKk21vMUqVJKEhwu5Ku",
  "key31": "5WYaoqj6q2qxrT9XJzHPRQz9oX4fCaWT1BAwpNrYtUm2QU5qxCHeDn8mPF412XNf1WqfZmAVVVwyt7HJ9a1dn95Y",
  "key32": "4TsRWMbUc9y623pnDecdL8gGjdjtHnoNtxCF5JJesEr3F4eULzts618NTGbjSHRqrovzzCsQ6LVB5yVgBXzsmmgh",
  "key33": "3yKKvmmq12cPWw44mMogs3paUGQBjhfYjpKBdtGyMdUb5woEJuZb1arRBmppRXHfkjm2QctCzci4dieU8GChooP1",
  "key34": "2joF1hJnCZyAJUYg48rQ6osasXigQatB3wXi6jdtqWpd5A892uLfsKtuqfdKKmKuRqvuiViM6ZWeX3bLfDp7ouci",
  "key35": "4JdiLuS6r5PDd2YCEeJVw9r8NgrfAVRi8Cj1anRNe4b6jhrpqHFqhHhM7YrG4sfrfxTdg38N3jMXWsxJc6Kk38Qs",
  "key36": "2iGD3RyC1EYA6Qt9A12nuzqqpBYRygSWywGvEGjzdLXkUyjUiAhbrgjHhim191TdqdAgnvZeK8gVZ6WMeHkFDyzx",
  "key37": "4GChwcoUkaf3RWakuV25akG7mh6q6sPJWX29DQJEeoVsLZnbiqi1iyYECti2271MCxbvijUVoNdQTn4XuoGGBmYR",
  "key38": "2LtYxwrBXNvpwsLuYFUByLbwFdHGgt5qU32EBiCdwufgGEaewGj9tXQVP7NEssWVaaHCWymjJCr5d242mfegTd3o",
  "key39": "3TEzZwTSYgQnnboTehUkeqjNEu4NsrN5oTzTBoyXA5Dhco6E6N2DDy2tKk5NDXDnPpVvry2etQN7W3chfzFgiVv9",
  "key40": "3TtVoFfHd83fLYRJXJL8qZeARUNCoPLVyLVREyDjqcuFCjFwT7U4JuawurACerkhRhEWzV7JFHnk7KtE68HwCtho",
  "key41": "4q7yaWM4gbLTv7xmrPVGpERbwhNcUymphBebauC9b1usD56q1EJQpKjHckLDoz6gxULRYenR53dUaBCLoddnd9V6",
  "key42": "4V6ANa6AbNuPYUzWauwGmFkRa3JeXp3fXDME1io1LgAdvEwpJFWdB6WBs5PkeP1ScePwYAzTrSVHoAeHvvgkLVoC",
  "key43": "3GXPgSm3EexdW9DJfVp1KkLQmZuhdFDQYiMzfdQCDqtEVq1GBF3iZyWyBH3WVsG3hvFBEXjzqqu9HfWSQzBaReTV",
  "key44": "2VxkFSJWvhzJWYXQw8rzqhpBNp4uEVuq288iERULAeuLbKLLaN8NZKk8RoezwSQ5dygR5hcCL774VLDuMxUkzjUB",
  "key45": "4ASKs2mujoJXHbaZmui1zmX8RMeVuEErn5SGUJjuK7fFPBr2rGP1osYrdxe1gT53CC5BY8nBNxR5Vt4M4WUwBLUh",
  "key46": "wwhZHMV93dP6fNojQPzYe6ms2Emk3cM4SoxRTopYLv1W5w533uLjFws5TZnLfibJvLxeJbcp8ot4yzgMz5p29FC"
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
