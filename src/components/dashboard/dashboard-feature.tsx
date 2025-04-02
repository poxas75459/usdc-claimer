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
    "2LpnDjgaGrJqQSDBqNrJZ88Jf9ec2trBeQuR4n94sjjw3kS5DZY68dqkgQ5sreqjXs66mpAreiUKRNx5XEbq6YLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgcwAv5YL5LD5iyUw1RzgTTxo3DoMjSbEsuPMQ6ZK18SRRCdqA9VPyHZRjsFfRcMEg17VMq9nMzitfz39oBJnWd",
  "key1": "22FNoGjzVtUENYR2gWcJpWmReZ5tTPn2K1i9ojcYK6VnzukxLoKaYNNxn2zmbiG7SY1bzNG58aLNmzBdHNyZ1Ntq",
  "key2": "4EwUFVttYkTGfy2Lom3B8MGG7HCwKMnbg23uP8A2pAqrzESzutHvmHvgDbpoT9RnqqyJREqL344dnkc1w6pohjPP",
  "key3": "4z9bzPePtvYptE5xLkh3G8JJXebpLemtytWughHGSyeR4Tc4yf4LYCCQ9xTFvzaHmD2k5So4UQnK1xprJGs8XXS8",
  "key4": "42CTedohi34v5PeiL57TW5Bfq4EMvr3XCptG5w2yhKSnyjNKcFtampcShUfQ7FvdFm9UszKV98MWyJj2SKMiy63i",
  "key5": "2wNXVr8ZDrDrAtNpJmZdGDT2ukbV8TA4mVSYvk9Fu99vaQLfZFEV6UnNyPfFDSzoAcMV5ULBfbb5SpQCVkeJmGdc",
  "key6": "59tr6NL3d1EewYuYYdCzBFqdGq2JA3P16E8fJG7iHUSGNS2jsjb48fG7rzv1Tvuz4aLEUsoFFrKsbL9fAtfHoppj",
  "key7": "2Rc9mWDsdxB6Hocp2TfqYKy7Z53CpPszV7D4szNPWcfyVrQt5zuwRQDDzsHSKrfzNoTLb6SesjaFmRY1Wdr6UNAT",
  "key8": "Xhus8uxyynjnE7XeFQ9QSkPziT6vw6TJkoWcnmEQtPFPLyv2S23LQ28AMkYvwDZdNtyR9dToboX3QYrh5de1UiE",
  "key9": "r3jUPb5bggdwrFeY4QgwbGbF9s1yQAPh92frhLvBZvMEFYof8iUqxGqjH1ZAUQ4iTAvQZupRVcKtvjXhTVZreMY",
  "key10": "35GX8DW7WN8AB2TvbhfX2maCeHUmaJ9Xf4dJ9D6N5PzvZ6KGZLPGS9x2Z2wVHLyxvqzYkhsU8o91i4nxGikMf92Q",
  "key11": "45FKwrpv72BQgqN4VsyVipv2mfrdm9gepJtzdufJynJE2SZ3LNxfeSRYfzTuFCJ9Tn4NAQGHjf6MPEDJJVnMcVkQ",
  "key12": "4D4xph9Ab8M1ArywaTyrABkxRRWZJSH6pm8szFxUkY4DWYYK62SqsyPRySQsWJTPeyVfDg3DGz99dYnDY85BJXJg",
  "key13": "EQnivGnpgTReLf2FUMxcDsEYrqmQcYKFZp1skbri3CPp6YiGsbBx6822JaEvqvc5M2N6MFpgLVXRbmCVfKsLUoj",
  "key14": "qvYnHVEStvZ67BpJnp4GKpmY3CgEofGW1rHZ8NPASFTqt5FJbB5KPRz1bGaTh6VrYyq2GWozkEZa9AeQzE856UN",
  "key15": "3Nnz6LyX22FqSQGww65coHxjttXhUWvwYUjV8MzjcdDAsNHLQm7aRJfw7BenNvmFRoBqVbfvYMHuWsuc5u6MXXrS",
  "key16": "5D1zv9cMsVs56vm7ifDj4h2iajJVrUJnthPvPskf5mn4kYUG7bG3BLx6kGjqg2ajY5qXabbF5FbmohzMPMvrrLrg",
  "key17": "mhqUHetR5gmHjMwYMTE5NQ11BTRx6ub8yz42jcoHnJmfWzgCGB3hgaA18pGNHNWqs5mqMqYcLS8Y21zQ1TuPtHe",
  "key18": "5LKFB9s8RcXzZ6zCXGmjN4LpaVRDsmucT8kNUXCXxwARkoEC2p2ivBDPtXaXfBRYboYAt4vwjnZye8Gcm4Y3c2Ce",
  "key19": "2C3UK9SCFhvzyqXMPZyLSU23H9AdEofZyXUAskV3sekeE122UuuxJHV8LYF5VxtvtL9R76xNcvHMTuVvhHo8D76B",
  "key20": "aLDtD5m9ZB785imPyQBUWVQSC3e2z7mR17DwRvYnyfBJnTE54jEvzCdsSvpUiEtyqp7uiA6jQf1gxFa6cgHuf8Z",
  "key21": "2RQo6QuPk19uN3AyuGYiZE91mpTuTDgeayPXQay8GxRhSz3kkd9sYee61FKj8oZYbKhwMMLJsTFbasRBmWwhJfDa",
  "key22": "57jBzDRGnMebVtTdHzzEQbsqSahiAn7cG7jPz4iBMfjB8F1nvdRQg1kL2S2hgPHbCS3peC7aCMG8vJRvy1ptcC2H",
  "key23": "4dvTWdUqggaYU9WHrCzxjt3fcdLF41R25riVVeCpSkY9vBeMVpDyJgonf7n5AGgra13scWMDKhcESjPRWoQBs6bM",
  "key24": "4YQYn5Z74vGG9auykGRDpnsg2wq8ywrX2W3YDowcGDkdazPhSUUu1X5codTwWzdAADyuHP62nE7Pgn8V11SAeE2G",
  "key25": "3nr7JgQAGz3AsmQ5hp1rCesNhCZCa6acW2uzYdATU7zL78DWpe7B22jHEP97L33i5dxGehuyqsaBtxXK6mQuPWPr",
  "key26": "41rR95gmpY7GoRxssfhuyUTUjfXAzwMkqtzdaCeN1nYzhzJLkkW6DAB5C8rHAEcxTWwnNRFWTwfaKDRsQByLa8mf",
  "key27": "Pf2pQ6gSzrB8ZyNv6k2fGSVuquiazswF99khg4vBJKuAhavyQ183fpFfwhEvZvhQTAmrWccWxYg3bGeTtAzbkgq",
  "key28": "3hcivprfFPpJaaTaBmDi75bkpqwYFZ57CsWj49YdfCLV4dLe6pdKXBMXgMrdfwaznmBr7h4kGgudF1FE8vHGZmmf",
  "key29": "4A3KAKAYs3YHesuGEaEJuRj1Kjegpjg6p5qpabXnDoDiuZ2chy87ReCRkUph8mPMpSHSDREAVEthT2c1tbR7Nds6",
  "key30": "Sh7J24haraeWaEyFQdcbSEP4nvhhkd4Mq7Lepw13j9p6ZAPM2LVjvQEPqpS1HNG5u71XjW6odZMufGVj7uaFVdf",
  "key31": "5RkfmLpixvjbebA7zTYUWSkhpCkwuaTbGpjMTUXayrusZBXg7P2VEUxvikKtFfEh1QkA6BAVUZjqerXnZtFaXqWn",
  "key32": "3GC5jgeStaity6PA589hq7WfksrBHE6F2eopYuwNdNPBWFzQoUiemzMuzcqmy62EwDHPM3YNtee8ZKDHKb2F8RBM",
  "key33": "3EehyDWmDqw9zn4Rdp1o1HCHZzkX51bBfdjRny8jBNcghhd1yZui4bfe2JPeVqDoGb7gsE1AtPydYgMUs1k2Hjgx",
  "key34": "61FH3WpD1h3rnV2P63T2CLqnJLio89zbQcL67dd3KFQNSDMyBvJN3s2zYUJNPEneSJhAdHNffneXoS9p5tXYPgH6",
  "key35": "65Zv8iLfittoEVrfAvJBgyMYhzchssHYhkuNVYEKkYKHNBWCtf9ugtRJThFGsgdP6xtBG2t4ZNCrMyPqQ8eQuAR",
  "key36": "315biFkiLxsyDtkB6KiXMEMTWYAhZGBogbbiEgcNRfK9bjp1o1uTi99q66G9mFYZs4cGUzU75ew5kZzKDTMKPMMe",
  "key37": "5BiSwwjM8hKFfhaACuzWbf93piMZAc2h2Yc53AtpS8rY1KhdhVzjfm4Kq3bRbvSA47LVLVeVtJVJGSZ92pxfb1gu",
  "key38": "MfeQ9jRPoFpF3qESgfKkQvDABQYE5pqTnkD2pniEm2GH9sNszuZkvfZWpPFYkiN33PgHK32yymd5NPeqbBdwCE6",
  "key39": "2iEhqBdTQZ2xHUjesKu72Cd1AJ9brodXPDHAfCNSUxRif7erc45ZQw5EPq1qZDNj35SZcy6Bm6Cm6oP4KTEZa9N6",
  "key40": "5nV4KoAfrL1pfJdYH8HUpfhgu2SsKTRRn5oa6h6WcuVsDFNuQgBzeWw76vH21s8jofZb4kPUEegzmqTSuCKjpyLX",
  "key41": "4sMBkVsbo4KpmNDF2LMboA16BDjKBjwrgdp3G59Ar8TMPEeG842e3ezrAh1Z3YfRrCiKF8KvmySrTJVzSGHn9p2d",
  "key42": "3JiCkBsVJxG5TMYpD2v9bZvyfLoP4ht6qC5ppJ17emhi4fVqHsjZWxbNgmSNPzAFzAC6G2uN9i6dzx93goqeMFoX",
  "key43": "VyvpU9dTTdQMp3v1T5PcxGHhU4fANZCtxXJxJ81ZYKcF1Ak9xSvhgzQyT8w9FN9Q5t5dHLBrp3gr9CeUYsZweot",
  "key44": "2XhWbwDpyvdup6Hk6EomvoF9CdN84jkAAK53589ue6Wke2emAcKczLw3usPpUTS9THcmMXpzvv1CXTVQVbd8m8tD",
  "key45": "5fAf37zdWw9cymMzMN9zfucVhT9XDEhDiiF2rRpdbLcmqx4EieKp161c3JbQvHNYUZBNeTF1YVXCAN6wm7iq4EyN",
  "key46": "5QzjNMXM7TEamkvkzihp3sCPZ8tXApuxAypbQnVp6pNfXUHgwf8eypSKUd5tTC4bWXKG5sTAENUPfWyALvULiqtm",
  "key47": "UuokmZKX3CYszZjmaNU5McKrbkbNhKuEavFfkvXsHXZ6YcGbpHCpek7DxCTwNAK1runXjc7wQYe6D8XrhaouAr9",
  "key48": "sR77mE3ndqtmYd8mAbsbYN1zA3mJfKQTFQ812vTEQWqvaKJLrKQWcQWX6daKKAChBrBPDZ7wVwVVJaaTxyCTsvk"
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
