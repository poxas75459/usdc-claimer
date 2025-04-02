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
    "5ShkHuzaQHuiKGvvoXmGEe38u1Ms23sKTmkqqiprvfrSLT1G21sjMXHKMHTHMG4W7AUnBKYzVbQajkFc7WwWCbjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u9mDXQbeVcJhoeocG8Tw6WC1oAv5hWmt73UiNahKtFsmiVhbFUkcXYgeixt1gziPJasNJ6gcUKstQchdHpsbT4y",
  "key1": "1Z6LqJdk31xvHsdU6TGSyooxd8WL5kimfVEhiGrxbrzFW2V8iq6GnWWD8AEwA1MU8vrKrek6Mk2q4LEGY31b6hi",
  "key2": "3QhnVyLAeMajwFEpZ2e8AshadqE3XcAiRYpG2NAhxRu7J16A3FzGjKh25439TUNJitNa249WgSQCpVxyATVqmdcP",
  "key3": "43nH3pYNQ76kUDBWckj1cwCyJSumHhkgiiTQyF9fcvcWD77yMQzNH6EVCh4n1VtXGSxQ74LTxrWjnVKzDb8mQthd",
  "key4": "3AjJgfjanZXtoJEcpBmr24SUnyuzBWDavML1qc9xvXpLBF4aCXSktCJ3wLWpJj5koZnbce2NkZfmbVb8cqEsQFxy",
  "key5": "3J2xKB1TBxvW1gh27CcVWTiqQc854wGYNThU8XKcXJgeWZrzQnzsvhUExVzijq1JhyWy8RLyvwko6Z9upBGLU1dk",
  "key6": "zSzsT3aPx1vQVTRG32MgVjkN3YCdQgoUVPBLGFcFjvUakBeZBR6674Whq2XXSK5kaeaToe7x9msqyiJtecMMWMw",
  "key7": "2GUz5zHdnkcwYrwUXbiss7TyuNBBha2U7riTUqD69HLsAK6RdzcJscko9Kd5fWLu8Nsud3mgCAT8vf2sEkZNVzV4",
  "key8": "4EfptMJgtB9LiaMR3AszCZd9uSKccD8ebZETtyPyizGp8w9c5CCrZRWNwmLMvJtD5McD1cnyuHNg9iHoUdm6Umho",
  "key9": "4wqjBJ1eDPpzde3xb2RpBYUVkqbukhAJnjHJcvRTEs4buStaG9umWAfchvSAVqdhVdA6hRUfp6APyxHNNLEacKNL",
  "key10": "4qfja5UAbMZCLjF1ewZji4qKFihLNBneUVRZNmLKbBwtNfQubFhC9tAi6miUXxoMzEjXrh3gv8dZzyFJ5XNBGtYv",
  "key11": "36JNtFNip9JNRins5XUtKsPaXmoxVj7tC8YikuiFNdLrk5tTczbbfB8CWnmZCgXqa7e7GS7Wa4qotxiezNHnBDAn",
  "key12": "4FtMAziQSEvX9jorvicJ3tTa9YnGjRsivRt62Gd67hjVhMPTXwxeKcLvjqRB8ASaLeZGzBf7S35LmnWnu6FEqicH",
  "key13": "4kQ33RHWci7LdRggFo5eiWJag2aEKWhDAoCaoh7iRZ4z5Pf5d9uhPxDPNivBV8Xwuu8WPGkNnn9bBmrGaPyQaSrJ",
  "key14": "66mkX65bAabP1avGeuwt5z43cQqfxEHb4nMGwAV1UsawcWn2xjJBnovJSMHtGDALuJxEFtWcfderaeSwhDEpieD2",
  "key15": "48NxmN71q57Xe9GmXZ3rPMjcv11a7ndPmiUerErnVpyy87keciRbWS2paY3buzhTvRTz2zYd5UCDfpWkN2oippLZ",
  "key16": "5T45gkgkrAs5AJ9cUAatg8De5x6xxPpevVBcn5QSCDmkP9j3cffivqbXK6zBijjytEgWF8doB9Y1LS3sYWGXhVb9",
  "key17": "K9PHMq6GiPkJm4xpCANCAzV2wSyzjPVGCfxALfpup65ifsMtdvsKgvazhPDoMan8J7Rqh47jWRSSnViU7WjfSXK",
  "key18": "5b6tpfNFxdgd636LXkBMXviTkPc3ZX5FGUb618N9juASzKaAF2rKFzDo4kdsp76iC3gYhLNE4NzDS37kmDBiKec8",
  "key19": "ovcmiiDx93g1En21zx6V81pVW2b8m6KWr25PwFkzsCLFi1iS5731PqCcmfTZuEF69aNtQcCcZ3dFpXRWTGD6Z6g",
  "key20": "61W2HwXa7Zr2B1AtzpfyiXwhoMy4XSTN44CoeFqQ1QXMg92U5dd3QexrEvgpJKBpMycfpb1gbiC2NcbFqHX4sueR",
  "key21": "5M4urKd1vXHWkMvAjW2gpK5EiF7S8FfWkQvkiZzdeX7pGp54xTiS5yHETJVTdtFxwirjKr5G54iLmehqymg7yebm",
  "key22": "2rtoQxxGeERJKXJD5rUvG2h9RCuLvxXtiyoqo54CLRuykq9G5BHfJaRcQpGCYMHUVH3NUrnEEm7HkS9G3JGjkZ35",
  "key23": "4hY9esSVukCTZTodECbwbrPtBGZrkwACyQr6KTswWk4UXzameVXfmHKfuMvxCBKWaLvq8oLvtTVdCfT29PJpbaoC",
  "key24": "4zM6veJ1xCkaUkdnqWzfRHF64dDUFvrH3433iL3A3DrheXWND1H8H3xDM6Gjzxrxu48U35jdQhf6eigSBY1meg89",
  "key25": "4ZDorJM3JSsXm5EJZLaHebPbmQSna7ZDJgpQ1G1MyJ41piG1AK2P4g6mwx2vMtbgFHu1NML2Jmos8Pf1ZuXS5GyZ",
  "key26": "22MkFmWoYiioHsXbPkZSXfxnEj7yN3qtyjuxLqt8dfDPq5CEnLccGEqqDB5kd2NRbL6bHMw88A9c97tGqpYsuCuj",
  "key27": "4D9b1CVo3px6hE8eH18aNqJPADKq2geSWS8ZPLiSfxjxQZHL5fPoFTqrjs1NPoG5Gz9WvdQ5yBYGy9FVFvoSbFT1",
  "key28": "5C1MZCCyjT3GH1MEFEQ3DxXD1wiUNxf772vVhPjSwprkijYMBnVYPns88DMBy6T3dCcJtqfpUy3TNNmPBmLMktPj",
  "key29": "3xdmC8UETqfJuEYZvJquKAMb8kjxvzmPgQsTL4urLXxxRkyxhN9vHiJ9jdsQzCU5LaEBjwHywMi2ktdESfaePcQa",
  "key30": "5mebRLUn8znXcmvV82c2swgvTVfiKnHQzT4LWZyruY2rfV7UW4sq2vgrUieqjPsPsC5UojqBiZ6muNe8dYP52pNu",
  "key31": "2kX5DaM1NmhBoiwanWuWSbJQtLyyXbDE88QAr8Fe5vGjY8kN4x4skUGGN5DWgzuuPqTCMsstDWgKqzWb9reaSttW",
  "key32": "4mQd3WbbazeQPmz5FWnPnW4XjD4AArDTZrQ8LLzkHxGgGretXap4omRw77K4iVzywSZGqMwsdLobLbbTVyV5kA4c",
  "key33": "5gqXctfQQwAK9cbY9vYoEHNReVGtsxziTkiMrYdqf78JLMHPQU5okJZcAAHaGZeKqGbPqZubHPWH41k39WouW3Bu",
  "key34": "5NLnLfRNB5exp5dbkF8KvxieEz3hPyJxfSZHdvqvX9cDLmwHDRnNty89wHtiupBV4Cxw5LNBDz1eZGt5wAWAU8CZ",
  "key35": "4ZrUBVDLDHhKD9BLXspp4XodenZ5XEYnrp351MQQ1sLphi5PjThHYWN9AxeALposAyNkWUFHfrQ3KmpbARxbwHyU",
  "key36": "MfGPCDdkN2bHK4M9Lkbm6Dvv1MdDbR8fPBK68mws4bEDQdQ1ds9RsJGzfa5U4M3EoxzxMNDTcgCoh89fHJ5zjsi",
  "key37": "Ao4uiEZTpj2eYW76gF42VLWwS5rBfA3Hbrt3FDx5n1p33499wFRQskLnH53xvXsjVbcKMCK6y3nbcAFGYMrZp7a",
  "key38": "4rDJUa7Mn5GNtvepJgAWHYsRpGQg68jULz1VBRJqEGeETASRxzZBtbw7XxJLQuzxXv4xCuKzDhoimwowvgYYgHtH",
  "key39": "32XtzzQAhgpvVtqqPaEz9tNEqKbMp4U4C89tBSMT4Fu6a44SuJ7Y44VwfXGCmggYDHqVgCDVXkmxTxSb4KEkgmJ6",
  "key40": "2hQaW77rbhdT5AX4oCSWdbyej4oKZRfzp2hnZC64vY79xxc71U9EJF2f6PydmxcEiBnJRWotHTZ9CCtxcBoFxwUx",
  "key41": "2zFjHQz7wZoBhMU4UJL8RyuwCTvUtWEVLhLkmqHT26wAGb3wA5RuULJZx6Q35oxz5eLkNHu3TyhdMZ5dDKVDKBuk"
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
