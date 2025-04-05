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
    "44dFeSxQoFPYCFpZzgRPikW4n125E22ZWSnLXwqCyQPVNmVGDxGUKhFGqT6eQtxs96An72fQnz3YmQS1kL2N1vk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEMWVVRyLjEeuF6fSonTqThs1AGmmWfzUyNzJeHc7mARCADUkWAhhxKvo9s3vC4w6s6hrzpcm7j33skzTEiZWCj",
  "key1": "4rJhF76ytj7fWkcFM5WKcNqj8zYGzfAur7gJD2WbbNm2Zr5Bg1BYKHgRnisCa6iZPPXxvwhp1xpBfBuAY6mRMdQ4",
  "key2": "57YiXKtLCNeqh5qm2QVLYxHTqBKwWvppK4bYRScut5qVbMshz8DfqLyjWXWNunaEg4SDgbzV89iZoNNBY8DazCUE",
  "key3": "4MgN7jv95VMA96SB6ZJn9xmsHSbNZhFcNPSDKYhNeLYYmnsohgnaVNZXxdpSVyw1524HntJr3oz1Zf8BAfAXkB2U",
  "key4": "4iKA1pEc98eSpRzbSmcwBFP7dVGKg9p2pSdTsKH69zKniy9tyvUN5wBDuVKmtiXqwhSrSXWdRqiCsB6h4413utzf",
  "key5": "5XMjXWo1ZPLuB5nTqA1rKZLNzntmc5zS9F4AtZATsd7ErmoNgi8NzkBBw6QFpabKjioN9951kEsSucSyNTsmBEX6",
  "key6": "375EU3Ee897UypVoKcdHKQKqv9eCjxdyPGYzLzuqFhUrrb6Lk1dUVA7S1CdZet6EFjW4ZaKMR81BK31d4PwDqCpG",
  "key7": "3Y2LD8sr8s8z911qAt8S1rhJF3JgjvhiJsU5hG1FPSPEgYPN6vMvh41iu1drL9MNGS2Ecc5xjqPSYJYS9VPtcfXM",
  "key8": "5h88SQ5eJUCSj9YD4uN9CBgkboXBp36BrdLuacfQHwEgJhsXsCJ2hZJvAevHY8kAKfSv7UxQtuwvE9W2WdFCzBj5",
  "key9": "3UACJyucEcUKUWftoBJXEz7tydkEe8fhoaAFPh6FNDaiKkpsEehAFBDNEvuxtM7PC1vRgKFPFpLey45DP8BYse2f",
  "key10": "26u5yUcMCoJUMxzhP8tJECj8wDZLK6u1a8T8BpgWq2Xc7MTfWwoWE4h6ypuYGEHRbnSZrukmp21T34XQngXCXFCH",
  "key11": "2CcLaEkUaieRGuJWignFyCWXqeDm7ZXfU7M5jc6sKHsP2pRncbW5zV9S1K2XpC4K8CNicMMUhrYtDqHKPJwtANKv",
  "key12": "3JuyWzB5fo7sQBaHRrpNGzaChzcZeSGEaBSVE2ALUsaFkfMEcK6PxULWBRVeg5YNWT5TFzv2N44eJLCa2GRWqLE7",
  "key13": "3Eiw7Kf5gnMx9z7ToUdHsGWDMtBumpDBaxXwFjStbX53U7xjeifT42LXmvkqWivVE9D4MHDq6D1qUCQWii5ZZCjM",
  "key14": "SYwWboWE7CMoNVGgdQiHR1w9prEcUbrQoerf8EKDc1svusCHtf6hrd4rmacfstBUD6ufunjgwXjCpbA2R27M3Cs",
  "key15": "3PtTu9nUTZkNJvcFKyjXvtcdwMoAnJttngTYC2dF9C1wCtqikXtzd5MAdXEHX9K8YUjiakEsLHQ8Rbq4btDjCyG2",
  "key16": "55mRoTDT6NKaSpKWTYVzGnBB6i28dEurbbutBoRwmZFfnrPxQDqNYksgWXw5F2SKPi8G5x8RKyYUD7E92krfiVsM",
  "key17": "4q9HMfpCHUyA8pWRAQyypdvHDouBAo8oFsmAWiKzB83diUdcdKvxxjCkedF5aauCBC4Z3AsUybXTR6LDLesEkKda",
  "key18": "4cRyqZ9kZ8yRsLRKAJgS9onnrxX9ZRcqTJmLhpDPDGrLFhhg4pJgdNLQWcTkcR3PCFnWR4KNiJXx6sPzqPFj5bQf",
  "key19": "fPchJVYoFCreS3vUMWuFkaomoL5N77vShT5zEcdw2qErNptUKv7WKM1Jhtzt7JjBrMa1fLCtAfuKYBRSatMkWDY",
  "key20": "4VzYDbEqJHzaVdmBTUe9oiR93KWym7rapAHcdyYHnDARD3zKsS6FUxrrpzaWQQVvSLCqVd51k6rdKsyRAdsEnAKT",
  "key21": "4DLiXaREJsxrnRksoSrzWdSaDszahF9EDbazeoXaoAu4aqQ1DqLjgbKvgNBXDwcogwzRo7iq4srEbahYaYqQaGTe",
  "key22": "EdNhRKYGV4XrNgLse6Go6waVYhQrhsg8UDxZQgJJB5bCbbKobDS3SGpzxCs9F1EA1R2VEwKsU3R1uahdTteNneP",
  "key23": "37igxNfXsSXcpvDbe1zdcN9KxBmN4HTaWE9iPymqt3ixyhcjMU4yvp6EAFvq7n7qJucM7zPjQvbPMsnn8ugSmd7f",
  "key24": "3J4e65HQjBzYPXErL8Bqxq6U4V9uCFF2jv9n2HE7V1eWKs8ey5evMbgEWaeogx72KbKw7oQrpQatWxbPAZa792n2",
  "key25": "K78LYwmGQtS3qZoM59kdwmXn3fwSrsZvdfuNXRNTzG1DjD3sPWMTUXWSQMFc8YCduPwnfsr4sF2MtLkJ9SiUZ1t",
  "key26": "uC8AGshvsmydfP4SbKUcNGox3R7EJg6J6WP5rhEnbn6JYsrHqN9PVxLAg5HTdpPDqmNavfKSumiMRBeRvEm77pr",
  "key27": "3JFrdNYTnJHWDrCaRdxL398549UnqB23xfM63MuV61S9VGEfQDcMzY64sNVuTJD4kNxvxaYXEQUNx3UfLyTGVcWJ",
  "key28": "3ZTefs9Q51oRikfFDm5Ga9DjPBmyUEHxLWiefXa7C1fURpvpgukAuXLhGoGxmc3PC7aZTcoYNZwCrgfaYiUih6zE",
  "key29": "2qaFYzmgD9HSsgkUUGrZwXw8aunurJnaYUUPGt9rwyX9DqBNkuduqEUm1JH4YAMFxgfeGVhrWzdCmMkUpdxtbQpP",
  "key30": "52VXCyqqw2ZjdbLpQGXX57GKEN5EoERTcGN418bVEQ57ZWnUtf6eYdJNhWamgFtSpsgzt8ygrAiTJMGp5dTqao5x",
  "key31": "4WPAwc4FTGk2kamHorQfcS27uQL2jF7ngmXjTx2ibg7eC3FAYJaYuV17rFp9aJA113jbwNo3m7LZfDwGXS5YuswW",
  "key32": "3K9VSprsHjKuPJ9ohqNdziabnaGJnsD8b2mVKkMNzVXu1ZXKBsP1jrL6LSD9LG43QJYsXiMe4zCpLbMAkNS9GbxS",
  "key33": "nYDmXr6TAgZRDKvwWYqz735RL86MUsa7aByF5k5hjPgBPzAvGZJCMxgHkNRcGkEt6vdq9XvhUk4bhJMdsPwbbfZ",
  "key34": "9gD5vnS8na1FpAJCkMWoHNEqyDyh7m3Tv18i549gVDQLAb6vUxyUxVwZShmuguxNAM2MNiKzGBJPb9vkXcB4Wty",
  "key35": "L6i74ASfJfHJ6MeqVd87jByYCJRe4LMCTKLtrzqvcdHGjxLqEbH4FzKF4ntzPCj7HTp5fwPxWZQ531HjQGnnzgh",
  "key36": "3wJK9bTYHf1kVj4AHMKFUMuMp5NGz5ThchorZSi3tULH2W9PhEC2yHh9bnmbp5bQTwDMWjf1AmzAYHyqHScZwyVE",
  "key37": "5jZbrtmGu4HsppGLMZPQC6Doe81f7SEFCMjoT96xRKeSkhtyXhGFCV42spna9KtPPYgpemKF1BxgRYWiQfXJv7nC",
  "key38": "P5ywvRhk8r2B1kZidvR8NhFfPgr5atr71xqtuPNqAV9DK9RxRCyPLLx543rP2xFpiR6GDX3pii5mr7TGpSop3r6",
  "key39": "5Fprcd3f9xjtpxV2VBQG7Kmgh2jmjSFRtyrGksiGLFAp5Bd2mLKXVPm6ugeJY9D9ThsSJ6HfGcsQGZRQ8Tn7nRaz",
  "key40": "47FP8wd3Xs31tR3X9yFPiB6FAmNrLfQf1kwvtTBLkTJh5CZB43Qqom24TcRbStL3oLabGyRiU8AZVWmUzARVe72a",
  "key41": "5xKaq6GHf33L8dNsw7jv217QNjgNRxAzH6ocGS4BEVgpgHBkSsZaDaVctE5CXsMVa3Yu6WkocUkBXKNA9hgY8mnu"
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
