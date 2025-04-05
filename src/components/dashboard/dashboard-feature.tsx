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
    "5wUHAT1M5cLujspwR7eVyksfM8tQX4EqRmRtnvuWzbtw4y33UCckfBGP84BhA3BuT4pjUrz5HTXNz8sQUkk3VXq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFvpwMhWf1XvMYsaHFgmnAisvr9fSg99D9hQxqjEjoqik2zF4cxFPkRE57KGbNntWJDWPixufDG9zJ9b6xVjHS6",
  "key1": "eU4xuXWRZyR26ULtGfsZSGcs5oqPuVazg19CuEkGbd7iH49Qzi1nPbsHL7vrjzF5z7bUhGdu2hgxTPuLMmh5SrS",
  "key2": "9RXqUeTqsYSWK4EXdpvBs3sZnDg1XH3s2W4gRke6GQMBqgvSgsN2n6yXfy6NccHiyX3g6qPkiFE3pZWMkLg78WG",
  "key3": "67Ja4QDztFjCxLJ4gZ26SMJ3QvTmvXE8Y5SvBArAoaGPs3aQ8oHTMfv9mpkSTJdiyXTfsLroCodzK93YBZmYjVZg",
  "key4": "TgFrvT4uYRgdhV1vsibd4yQncHN5vPX9QTUNhfpbiTU2yNQMxw6yfjyP7ND5AuQK2vN2CC1Ccn3un62UcbGbYMX",
  "key5": "4ubJB7YqZc2i222Gaiw4z5Z1HrMyBqMMvULLDUtNzknbRGaPrVL9CAC9HdhVzXT41cB2nj8eNePqX7pHSreqbpiZ",
  "key6": "2A9AVaxxXyqGXjD1Dx7zCWJ8xyWT7iLV38bprQF7PUpnvoTSSdra1pvgzEnXAGEujSEWbVsYSiiSKWS4iFYK7VJE",
  "key7": "2AJsxuPvLLkwukYxUPMdG7vYJvLRrZTM9sGecNtSBqvUPv3NJzKnRMeHTKriJzSHvMyvkyp6F6ZFRenENWjWoAGB",
  "key8": "43xgQfKjusKTDw6RMwJbKbRP5cJQryHtpUmpyku2DYvoV2UwzfVFrt8YaMX4mQkmtHyJ8W8xo9WVCZpsrfA4bZtQ",
  "key9": "3vrDB2beUXY3wcJemn7eUpGHJRnWDY2LzmDtYjEc9fKSLZ8jE7r8jdARxPqFU8d99BXMgUkhKrTuXyre9xFaLHDP",
  "key10": "4TCUGJc2EAoU5zBjQbLW61ijNBeu7VDKqq25FMXqWNfEPVgKPBTmiLgxzGvG8cYZdw6PPCVqJme473jmwTYt1jvC",
  "key11": "3jZS4noYeHibQnM4b3tmK1v8MLoViKTnGZtUgBEuxmoVGqh4bxAP8VZA6Ly7Jcn9yBth8t3mzKKpqmJiMBMASN4y",
  "key12": "5Up2x9dQE4URR6Rvsi1JzrsW8v1rFemHnQr5q33KoiGCDNGy5LNY5zbKGhGsQwUfifF989N8q2ZczP8R9B4ebcvz",
  "key13": "59fkWBBgzbkMbpWZ39QbNyJERFJLx4kkLJHRhT8Ne1WEVbhn7HotrNZSgPBm3f9utaGWQBD6mpNBx8EWb9q54oJL",
  "key14": "4dV1qAtXY4cmBRaEAhfquXiaMg9ZpABRfytDsiM7SFAVU6aYuLefc9NTLWsNKhdbEC6ws2Kz778XV8gFrv26ymJt",
  "key15": "y6qzjF3cAJhgwbKC4qXNGKDfrcGUYvXsoKHGLQLxKNz2aFq9d4xzk3Et2dN8YPphosAhHdzetybQJYbVbAEKHY5",
  "key16": "5wSCZNU6AP2BQkRze5xrC8zyMtfq6Sye11awgz9yCtjCh2iMo7qYozKVU7vNrS7L6XxbDkbdo96mZjY2FALw4xve",
  "key17": "4q44MVsoaiBbJSjLTvMU7rTFVrnYdhbE85A4A4wJ9rZgb4ERCdfpd9MYyibbwkAoqkioKbiKQh2V5fvGnhmL79hk",
  "key18": "5j1BMEhATqQ35dmGe3pxkGmyREF111rUEUGQpdDKQRDE5af3Voo2rZftk6RGXchzzBYifuxyDH8oW9baEEsR3qr8",
  "key19": "j3AqPxDXHeNxXpUjyaWu2tp2JGrmmRBBnjqUV3EGaRrTdyDVdkyT1JhSsxnCyxQxt8wzzAmREuLQPoWGD5mxkdd",
  "key20": "3xhvx9Hrsh7Tyk1LhTMgchnqtfwMu8k7tqdF5tYznARLzDnJSPL6rxFnrDf7oRZCYtLhKtN3CprJwr5zw5esDx5W",
  "key21": "5EEV3YZgweP7MxRq2h2hxTZKKhGR1kS6uTYHYDAsCV5GNdVGK9uX3eqVZYdyPoL4ivs9LFWVrsMhfjJE73mYPYUy",
  "key22": "5GUG8sW7g8aYkFfKiDWNeFbSoSx2Q2rsijfRBPFDxPHgyTdT7q9fTHfN2s7CgEozP7zWVFGrbXcdYENBXcvbJMan",
  "key23": "2p6Ey9zpsREbBfHhtqRdrfGkmyjmu2JeK7BvSUgNrLSEcXHrQJuuarVHNWzUWfCtPRyzfMzsPhNfH5e1yvLFP69w",
  "key24": "59i2xwzVpbfVchmstcoVxB2FdQTwKXwsHGjn2MenswJMJxCmbBnbfkF1ZJLyBmrWcURgLD6ACkxytFUeqHrtuFFP",
  "key25": "bJD1xmZ7HEVD9ANqNbFmBoAs7G4mpj7oamapjDYYXtKbxcVMGFgVbpnzQ8n9MjHjuYSJRuFB7Y1ngcfQjEi7dZ2",
  "key26": "2cXqTuTetUrMV3YjeF1nJmVmyU3hquhjE111Kug31DXtvPxUaKf1vENKM4y8xVaPg1od43eAg1pAfa3jG2edHuA6",
  "key27": "5T9TszgcYEXGpsLwHCg2s7wLB6Bu7CnGZAke6G8bgUPbsv9CpwyUxpX7WY7Zcj8j5BTA6x7Cp8Nf8yBvu4hBRXrz",
  "key28": "5NszKGm1kLmm5DxpkDP3EUrEJnyYLxQqSuDhdR37uX7EUeQe3qcZkBBrA9R3RSagfsTg2PMoKr4HVY1TyFp8oYGs",
  "key29": "3CZk6h8pirBHRNjdKLyLwtqiBrvS7CvQENvFB1JMJhiY5QWz74FCZooEZBv4gjCGzJcFpVQeFnh38NwcjSzafyd8",
  "key30": "2ZFMLA2vDhpumRstPt21H8SqCpPkEApSgu6ZEMERpR3G3Jht52BUrygvmNrfttFAvLMpSpk3ca4iz4MJRPM8euX1",
  "key31": "Hw8jQqG6A7fGfKUrYmbpwUNSVYpasFbgmwFFcHaH4AmSFihcdaBj9tPp43byRriWHPm9YM4rYPmmJstMbKa2faw",
  "key32": "5Wx5oUushFsw7PeDmvESPE3Z3Ekn48dQoBPvc5fqFGGudBND1xgw4as1EdChEuBVry5vrhXyeniBYXxsCqEXVGju",
  "key33": "2RyLpunHomUjWJ2mzsM6EQ9ACh9PB7v2DHCSHtcGN6hvaANa7ujj45ooMbtqLcXGzkM8DYGWsTiu1fiQmPvYiKdd",
  "key34": "f4NcgdJ5EbXDDVwWzJ7A3Q7Zc8jz9MSscxjVY2jXDyyMkgP4AHGS9ZmNgx1F5edVijnTEFs43yp9EpELhuEcnbT",
  "key35": "4oAYph1uTTjsRfHbkwTyL55xuEyYyzgHSVv7eAVSNjZTLHwgdokZPQpprFEVpDChkJKhzQww2AhAYBmCvYqb6ZLv",
  "key36": "ZUiBBaQrM2y2vfWgvwh97SpNDv9KCZmiBbtwTwja78DiY6VwgSaGK2u7sNS1anfV3XmoAiTBxpWkrdjvk9bJ8z6",
  "key37": "BUUmCWNJaW875TG6sqDsEFB114uc7bMTmLvqMtmQ6D7poVkfaEW6hcvdEjuYmU1x3P6M5kncSHchVcfmkB4xvyY",
  "key38": "4JdXCuSEPMozDN5NXAnDTReqoWV3K52jUa4iatXs86eitdzmNQtXaW16BsJYijk8DmSLZYQPEaoZTTfCNmiomjNA",
  "key39": "sX7Nw5NfxVMnoPSbucWS2sXG19KsWU8jmRpYzbwK2oZBPc2yMni62sRgSESCWFwaUvjCreuBoyHPG8Gvtg8ZmeQ",
  "key40": "3aMqrDAtEAmBiWdKixq9aqrRegtQNrU55rKUBaYkYftynzdBmcKw7hJZgiMzajdyBhb6YzuCit3Lt85axZRe7ZnU",
  "key41": "4AvcYvJX8Ng2oCvhkhEuNA53JU8EWRvunrWniHmSq3txAtsSr9rTaQrUpPc94MPqQm8zqtUX9bdK179sHkeZRnCe",
  "key42": "AmWegaLeGjwxTnb7pfiEKqiUK8j3rZyAWKQJkH4UAkUDXoUvknrn48ZjjkqTMeyZhVi4X1oR7pcMZwdixqa2Ffj",
  "key43": "5LpSxgTVhDvWSTqknoT6bCvnA6KR76h4dCfKNaQDX4o9s2WmJ4u8UGTp3kHVNAfC7kkh1hBYJbXKxWcnf885WUdv",
  "key44": "4Tkq2jmnJLh5chXW7ux8H8X4KWBRfJQNbJdPJi5W7MsbsitxmhFSYSBWR9ZKmX7P8jbghEfy9rscrZeDVfF68yZV",
  "key45": "rZsFHiUReptbZKp1wF7Zdm8APXAmJbAQZie1PGCnexw4h9udXmt8WaotCR9C4LERaXTFLU5idGsVvgHcgeks3GX",
  "key46": "372dmMjvZstkC96nMbUCziagEHzAm81XFmWPA91aEGodKkCgxSkxtpQdLbS1NJVcsZqHWdeta5DTPM1RiixPBHFK"
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
