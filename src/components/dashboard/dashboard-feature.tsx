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
    "5KgDc6y2Huj7bQJJiaibeXAE3EEGvfBiGn9uCHXrbe7gxVSfbUPGAqf6bzBmWAQ2GznryFjGdsjgtBH22RSB4QgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibG52uQUGxBgiJpzZnWJULnY1i9bTtKWQ38E1zWTpLqEZQF2im6gab3dpAqV1JSkNEGuSY1Xnzw2tSRn7y1wprL",
  "key1": "4Jg46DH3ogJ5KUkBEMv7VHCsmZMWqDu1K2grVALmmAV2s9ZoonBos2rVm8L4bqKeZvUJrkZYJTdhB4FmQdfgRZwg",
  "key2": "2xeKkLYcJ86nmQuLbeGGfJexYUELkog5HMRrJUxz361F6XjA8AkfX1oGyH4MwnYFZSJcF4AeQz5qtWBeUzmJ6uBX",
  "key3": "345PMJVMDGRE74G5ZNbWrQtkYYSNms5WCSsdNaQawbUUicrG5vR6ySQPFLHQhmKAUwmJeMAbUwR4SPXquZCDSDAv",
  "key4": "ENd1fFWcEsuibQN59oChyoB9LWh3mr8SWmfco4PKraeHt3ghLdaC4r8bXNmb2Uu9mCugJo5NyomvuELTWzn2hjS",
  "key5": "sej6V8UcSEzWMZTPJSX7ycpYukZsEahx4D3hEQ9GSeTFSMvhWFCtyGwMBqXnWv82KnAAxws4BAS3wknb2n7hY97",
  "key6": "5XPhdTyQtRTbcb3QVz2tGDo337XS9GL6TQiAuKu7oLV3A34x5jBEMDWGsaxBSDgVKFbj1338FDFp5cnCSvihevtt",
  "key7": "2mvgwUBDanoyfZfVjZHXbEP5L3DGAEMXfReAcTitLfHKwQ3dUdN36d3E9ThJEGLWWh98w6L6hZzdgxTi5rvJuNKM",
  "key8": "2fTUenzAWcHLXiwGHDDK4t9fioTBr8cUry7S4dzM3x63c2sNMo97STKz2UtB99rjnTsCowQBvvfikifzw1se49vd",
  "key9": "4CwyfnMLJtFLf7PNg9fuoJ4BND39vujFJc3VvyfXavszvTNkVKRLcJ4pFZEqmFPYY1VKQdHYsVezNVe2P4LfR9VS",
  "key10": "4RACZD1Xxjwm9vFBWwyKPvq1u175XMTS5otUPhRaRNvmN91xV7hYFK3dku1zyEtcHbymid8Ub94kPAJFAn7xdr9K",
  "key11": "34zKTNF8XoyRpG8beY4f1S1QiWEjJSj8mksWWXpyjYUt3c1NopFESN55GRRo7nEgSkyCsubmwWxEYDCjYFzaxmgW",
  "key12": "2BUXNuNNihkGv1HD5ByFrYH5sZmNf14FNM9CbZKHRjgHsEHgdYaT2rhWMLXuGAGsjwB9ZJUQWh7idSATXkVLcodG",
  "key13": "peTh1vFcJsS2K7Bru5BjBCnbCkGkaFTZzgn851wZgCw7fUBDQVbktXhRga6zkQmVzDHBASbSZafzc5LdyXgbjnD",
  "key14": "4qgUBx1ovmUvRw36pWUL5jzyQVWa4CEQWaHN7PyrcBQHHMhvZBcEz4njYojyw8AuhkZffMjg4LSoTX2WzQw8s4Tg",
  "key15": "3e891uSF9YUkHr4naAzgZc7ri3wHsoR23UffMkU8oJ31iwZ34mJdiaUxjJccQj5mQ6FHkvBxgDy5MJiUm2Bu3kZu",
  "key16": "5hsqQYXekV9Zo7gaFQh6sQzrVBk4wd6Zry8zvFwy5dzWrCfKcsBjhG99H1ZS8txpkHydD9F1r7hDZGFLAcpDkdz3",
  "key17": "3Z862pj4t9uXCiNVGC5PaT3JhCxb45CHj551ki3gK6Zr8vCzvNhmSPbMPAWBAdYkQEfk4ZLxPwreGFxzpXwqfouz",
  "key18": "3EArJtDNm3DFXdr64om3ZWh87oGfNfFuaP66HAL9VumsPpdX2VE5fGY5k2S1FyhPKFtSpLLeGnohqt1REVQAqLKu",
  "key19": "2NfuVwZEbw1xVSkxsLJiuSUZExYd1FD6NRCGUNHiB8UxzJsvY3ExsmuAtRsxTa1RLQy4hnDtPzsD6HpPVXDH7vDG",
  "key20": "P5tVfyjgdkcjL8dH2TH2YjEBFDSeSDyRgUkHqj3BJaSMyYSDiseSEV85vXQGiVM8pMorW3CAxtzdKCZSRq7AT1T",
  "key21": "4Ld7JfMVk68waAwXFhnSnGBHytH1sxvKwgpRkU9w9A8kwSUYqrJrfixaVyDqBZgbXaWLNiEaZGma2czbTXdQp7h9",
  "key22": "57davwzsYsiah6JFuCCV32CsuvAfxkhYwXDosz5e8i9Qd2DVKNmsy5TaMNkZwVd7Qr38J7J4KKMPiFKfXZedhz6x",
  "key23": "45cv5jjegqg35RRUcZsaTxiMfXmdjQ9cnLHwVkLmQGkQxCJvRJZBX9aCnn4siwv5eMBdD99h3tLAeaoQhUtycexW",
  "key24": "HdszArBaBDYEJsHEMhoRKCeUssvEJwzZQEXFo9nSeCAvszo4mqnsvkw7UbhgSHvt1mWvEzGSb41pTWy7LHwAXkP",
  "key25": "43awtfHqNGAAi39cxCQabQZhQa56CC7XWS5EC6DsnBxy9y6BoG8n376mpJhRtVNqaPNsFs9xe69qn14HdgbaWRb8",
  "key26": "4qw2bnWgfm6xQiQ3GTzTABC2tgvzQXRhbXbKXFAGYE85g12kZM3yCfcgwqqCDKqBcWwbiwBmM5EW9tKUyiKsNvuN",
  "key27": "2dxoq3jSBHSMNdDruhYRTHJF8b6Wy7kaZpNzQKGVFMYjoWCc39Ra9nBCQ8jGGHDGV8jqRYX2ui7f3P9Fara9wTRU",
  "key28": "2WZW7x1aWuQJtFiVxS6EMvEVUStygML8o4YZyiJx8X9rEj5U68FGqGNP946Ay2wijMFMSpSJcTGZV7zpw9AP4qR5",
  "key29": "N7ahdVNRFyGwREUBzCSsfkAGTqk8KdndcHt58SS46BVyUtR4KhF1BRpHiy3mFmAWoqAcBmZbijahLTMui9ARWSf",
  "key30": "23n1sbFU3uVHF1u9f9D48677jZ1uEzsQFDBnCYW79ureDs19Zmkyoc7hm5yTmVZSFUnjrjMdcjzV9sqDS5Xk5DLA",
  "key31": "5RdBY8HduxXj9Wqzx3utSzKh6j24TF3rvn63KNXskfZ1rEXKjtC5YurvENU9FDsk3pFUhTS4t482x3vc9QbyKhEq",
  "key32": "5Jj7jEiN3B97yUugWSUCM8e4TL6BDSMwfCYLfVJyfnDPtztVFALHPQsqWz9PEXkT387bFyPkwtvBWXwSz2VWbQbg",
  "key33": "2shmfiM7AC6ANsVwRyoVthR3PYmviiLwCKpf3hCgBaQKoWZRJ7CMw74DSChKa2zJPg8aNSzm2xEnkasdv77FXZ1H",
  "key34": "3A4X8oti2rWEVupuvRXnp4gEH8dMcaLF4xutfLmmG5qqtf68qUq6Sxjrmt59Esqng9Z7jEdBVNY3EMGMnVL5SMJj",
  "key35": "2r6YnPCMc8tsXBn5oSPq6RrGAHyNWSaEDQVcgaNA5gZkzDoW7An5jAcfknsB2YzTXidgeibnp1aLkp6Muqjpw2EE",
  "key36": "tTidAdWYa64CH2k9M86wkW2KipPHqfkpn1Y54cvy5FeB5rPEHLfZMw2LfcnnLRTfRqmjtRwE9JNFPehtXkL6Z82",
  "key37": "Uy2gfxEPYtDZZAuWiFLHM7NsQoSxbwc2442TL6AhJnotNWmXB6oLT7ZvwEcuKeUhx9ugK7BrdBZaJLCw4QxxU3q",
  "key38": "3U3ZFuJ8HEky4gYDbMPWiU2hv7wGZrFz7krtsG29GvgYnHCowU4LXrXPz1T76F26mTJuCTNHiWeAzHgWXKCFY9P2",
  "key39": "4LWsEitVvcS63EBHJdf4NRbpahmgSELw3YkE7Uvsg5TKHbjsqBmA8PzSyK44Mhb1H9TXPukNb3NbRuDYsFjABRwu",
  "key40": "658g6zK9w72DhZsYmEYbMr8eUhZaWddu92kEppzaPJLXbMamyPhddVa2qFZR1LBnX1yyVUdXVfgLZkdgo9h5kXfu",
  "key41": "4rJzt5wHGiXYAkkqjx6K7K3K3JtfeLTF9WdnEwR4DrBpKwSE3XDDNGL1EXS4duDyzJsaTb2L2o7dG8otp9mQiHwE",
  "key42": "4VBcbtDixKBK6mu23zy5Nj7BhLr9Fd5uGQhtsPg3kk2PYMVWEtZeUsCdciqMNk9gmnPKcBWCemHJtwcwvpmi4cKc",
  "key43": "4hSwa6PHQGmwo31TBqmR1tzgrvGMrAgK6uS8ceHKrdttGL1Bq7nS3AjsoEC6HLKAmwWVVdFkmcUac4CPPna3Ptxx",
  "key44": "4NsSY4h6T6W12x224aWwgStiGXNMdYRmUEjfBshXKshddjVh1tk5fVVP7Je3wK62f3mmagzqWv5qkBntFtzmET4Y"
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
