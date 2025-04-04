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
    "4TW6Hy6UeEocjZ8Y3xCVX2WYmNLRVsPUiCVoRuPrvxWRxuteA5TiD4RUjeHE2CUaJa56m5mczXiFTzMoYoMofYV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CqoRcTUB9TjXLaVqKxjqUPw4fPir6CPWTCfCh4sRvZ4PzGMAZuwgy8nvBF8rz64pdb9Ey68ony7jUDH1wC9NjLJ",
  "key1": "5Acmaftn5N6M7CjTKJPQk3ZuTs5Kb3xjQ4D2oinmA9oWFgWXkgTpFGoz5jJh4tGWGUgzN9nnsHhncfTQPCRDVdsq",
  "key2": "5GVkmwqJMD9xmHepJH5GYn9JfEJyADHWSWPHXuv23dYyGpfGrGnKqdBiMKNmk3fYz6sYgGMj8tSPVapXeDp4rJsJ",
  "key3": "29io7fhs17AfHhWYTm151C4PaX2GoPJKKQ3FHL15XFsPti7j19y5ucbbLspTyDKaxkjhALJGGUWR2MxK98RVTf2c",
  "key4": "4iqfP2KYE6Q5JeBvySTG72cry7E2Tz1wc2RQebYA9Z8hegpEtYkfTspDFeDddnKTK43xsqrY7Yepv3apBTTsSERM",
  "key5": "5HdosrXaBVDAvP84ohYpzdsPaWiZ9TbogCQEe11DybdJJ1HZqJKs881knMvgUjFddixcp34uErYYRLyRmNtGsA6n",
  "key6": "59TR9hqQATSaAJcAYqzYHt2Cct2Ky2uYJSDj8WczyrWC6UDmyiMVYbuPhkQQmSoFQk43Q2VXuDxakSAHC3enZup6",
  "key7": "4HRxcTQaQBhWcrdRzZ6WzXQwowSKfU5y88d6ZFfV5cGvtjyCNPPrXkCFZTCcJns3E4oGq8FCTSu5PVCXS96Fauu1",
  "key8": "5m3cyBrEYHufbTfc6L6gnbN6VDkyVeahPqPYJmAiDdfAGMDujG11QB5eSDgwwF6PixLvAuGzvo7PyHVNx6haEyxR",
  "key9": "439z6CdFXQKzNSSPeNpFtt3p8X1DAShnMXg8DVniaMH4F16gtfurqyB9spfwC4Ux3MepABgzYbGRowiX2gVYGinH",
  "key10": "2bQSEuJcaN9KYughLerQW6XZvfmgisiakaQ3M8Wi5SpswKcz72dDKwziivqAZQw8nwSUTVVKNHd971nUXBNqisaY",
  "key11": "3W3jshuLT21bBzf3A71MmvL6oM5Jfhy4BVByinszJ3LJ1mnENaEBBpgXvq4LTWNxWqEK68nBA9aCDSR5N6nUZkFW",
  "key12": "2RYauahLJwF5SWppg5JeiZ43qCeSuZiTNvSyUM9qzKMrkkKqn9VLue7j1M2pYeTBGQ1qm9WbmmJybHDKqQhayuaD",
  "key13": "3XYgS2jR27MpPJ2gziX5gGk4FvH1ABhX3Ru6qHVkhuXkxdjwmgXZky9eU4ZtyiejZFDwPpPhZSq1ScxLapXbnhZN",
  "key14": "57xsFBCJWgUjfjxLiGYDzMQJ7tyi91TvSeQAsZPHY14LsXsVueUkNV64udjLz9QhGnDpzKpmGC7aLymUcSa36umG",
  "key15": "63Yt6KcX8eZ91CFrMkMtqRnSaMtWBGBkBdneLJ3RVMDh4p1MUfFzJQHo5uPit1eQgFQAdKPZ5bzU8smjehLvuCsg",
  "key16": "3erefym1VzcE5ZriKTjHec1FRuxJRkuPwSyxxLobqhhk2kEk5PkXQYWJtUwezrfzptaqybCDTzzyiyHGTbUKCPoZ",
  "key17": "2vwL5ge1VQ1LHCv13cHecTECqWMYWUJSSvVjotYGh8kc2gYadvzPKfWashrb9DgKW9EHgFULEq3jJNW5qM6yjhhE",
  "key18": "ntXcxxXFheJ2vc22uXaQYL8Nc2SyiDPo7uircDNqXowQ4YsEKmtfbW5nvRd9b1J8LyPKog5b42oJqJhTC3if7R5",
  "key19": "32HS1kXMx7DNzu7CrJx65Kb3fEgzcqYwKJyfkBbCqJBrLHsF91Lsjoghm6J4fdgyYH8cjSJBYNXjzqc7svyUankZ",
  "key20": "5pzaDstdpKHP6LYR5yf4ZCPxzrCq6kZsRTYivFi1R3EwgMshMyy8GaRz7RsE3pAdhLQ6NUza9YvAoXhVfXjBxWv3",
  "key21": "5tfi68CJxpdiABhsbtFvQM1Wb7XSRvoVfm4hBo3kQ74mg4nbdS54CNuBF9vyuLJyfpcjau4adVoPfJZPt8642t7A",
  "key22": "36KbQ7P5pwFkT7M2oYVaALVRatdp1gfGP42aN61g7tLmf9zdLSQueaKMmPFYq5XwU6SQX19SvWyNtCtwNwiWaKEc",
  "key23": "5qMXsK1SF3yZxUXTRYskSNc8mTzroCCTaWrNzcx8wq6sFSxhLvZodtuSMEop86nAV5QegeckM5c8zB1rJjf9r4AB",
  "key24": "5gKLBvQKWXUsF2Cv3QHFd3Yad4qQoGBpjtGMmbXtgVRGUCMpE4x5Z75TDBmMVRzXnmtarsFHckj7usy6hpqLHtm3",
  "key25": "554koCm9qaEVnYsdM5CCi11D7eVwJsmi5kz2DSRL2wFHJTpuND1fRim7xcAR7BYxyxkY8vrYSXszqQpEKDLuA84k",
  "key26": "2hcqBjpYiKsWr54iJnE5dk4E7wqEzsa1z4eFUHLPzHCoCSYdWRVqsgpD8YGfT7DfWLGpF4Mb6myp2B561vbQQCY7",
  "key27": "FnVESHWDnJDo29pR1vYXcYehMsKEFnBrZJVNnfASx7t2a39vvTaD8zh2em58yR8EPQrfq9icjMSopi9zBr6x8Hi",
  "key28": "xPk9vCjs4VuibXz9QwzHuvZgj5UYZtvap3VosvvkLY2qCZuow8rp9QcSmT7DdqAqrpaLgpLS9xdBQo7qwJtVDPT",
  "key29": "2VEquQb8d8NeKj65QyuGiTwoWNPPsVibzVt1yzahKEPG1FLvD8CFoHVnwq2BPfKYSziRbpT41FiteYapBsrKWL6m",
  "key30": "33tbbqEi5WMVxx55zdQpw8AysbLXrnSM9w911XcHn62TUqPgsdeG7m6iarNrgwM2bLFQFeGqgaSZ6fbtyXhg5BJf",
  "key31": "339y5Ga9QGmqx26ALBzPjkVPaRy3VuJ8BKkoJg8exD5hgXhpVoQ681scsQYsASSsR96TkrETzYPmgLqGCQkwt1KD",
  "key32": "3AfFcwwWDrpEXdntyUCwip1fXY8CrJWdYZW1zyG3nTZTUga2c7MBzTD3wfA8ZnunTY6jh13ZJe1B6QA3p8pZAaZx",
  "key33": "5xNSyMXUtNUrX7KmKFoeEJNU4kQjxv6KkzXqcT4w75C9qnTZkiRS74fqfR4hihZRkyzBjd3Na9R9uSyzEuoe53mB",
  "key34": "5GYgScjgPQKjoLCd4TQQ5KaLxycWJtkFdJ24oNKEjSnUKgd2RLQKAk9rH1wBTZcC64ZFT2MprwjNphUDy2cKSeEY",
  "key35": "5dn3PSmiKsbWHxy8vikNkaKkBh9DnHdPuVLBW3yvfVoBYCFG7cEPrxakLoHWVtwJtDQvdwFUSASaiEaFpoAKh3EW",
  "key36": "4pEMeDMdH13PFGHNVro6gZf3QXx9HKZ3QZ6Hyw68skBNBXt3vKWw2KYXvQaLYLSojnnZMHccw7RS5hDTcLfrG4N7",
  "key37": "2Ny3RVnYfgqTCkYoFDCbPfm5aQV27vSmdvWHautgjF2w8EcrAKgYSALbvJt63tqYRZGRUbXrxsKSJxbxwsvx2BZv",
  "key38": "65HH9qd2wruCxb9ZduDLZfhgoe9HHGqedPzYX219xxcYdWaAwniZ3Dpj3VLi34noQFAoYmTe7C3R2CRrw43uiTrU",
  "key39": "u3uSABBKxidysUywFgJPThKppaCPbMFSY2YFmDiwxgwkA8ReggzA8FyfornRmnuX34y3eqDbZUk6imSmEfDx3Aa",
  "key40": "4otaARBJVR1K2W84PCEgjCrPNha5Fu6gSD1TMDZDu2pzCbxSTxfAFAGo8aKgEDAZ8yDuaiKEbSeciEvwFrfRNbem",
  "key41": "5TAopfKztC4GYsiTcN9c22Y3GWCRKy9L5gsZ7ohHofxYV9jyug355W9uEcFoXJB6Rmx2siTngYBYxtkkjPXo85Xf"
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
