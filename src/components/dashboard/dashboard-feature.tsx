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
    "J8V71YZsaVEVbX82pSViDKT3GjA9CVd9JigCbE4DBGqBK629njrTNaRUCPT7nW2UwugRwPJgR3kqnGYpuycrX7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61pcb5UjRtvw3HKbvdxv9qHkG1uYDywDfSnnywQRKihMbLywfnC2bGBRsTQ9WAgFwGtEC2DFs1s4R5ZmZzq6914c",
  "key1": "9bMgVcsEp9HfWgggYYJHUrmWctywPbFB4yE7GxWYHqLytH2oJNx8NwPV9pf5JshQTMESWUJM6SKotaBsyd8Y7h6",
  "key2": "59v9o28TWPkdhRZsE8fos4jik4wDzg3rmyHanL3RJqGZDKoGUBg6TvTE1kfn1FZkukrYEqLST4bNUqvoqJjHvAR9",
  "key3": "NZe7kpdEoFZjxPKbGvRvwPWVaNPvX17pBuGqeUWH3gYcdaN7aKk2LwupVe3pMbhF8WWn6rkWSNHcCaypMnXeo2Y",
  "key4": "4BSYq2tQKyfTVBda669K3Un2b2pg2C1DG6qXzvUbc4qKiJNYufnYk9B37yuXrM5XtrTuXeyBpFB8DaLpHLmLTYkz",
  "key5": "MnG9Zng2ujy7TRQPzvxun93yadMaSejJZsuVX5xFZxZmT7Lc7wwLv7Rhkr9nUv1HYGEzzJ1189RrYB9oumemVLT",
  "key6": "4KuebCvWQcmi8XUFoNWRTVkx7up9UkfxJ2MUCzBNWtFhmPGPHWgLr8bWWCP5Qj9BPEebqtTnw59eL9Vtn9Uhxjrm",
  "key7": "2WkandPrpELGd8TL5Lhjng4Edy9X1SneiBKLXf3fRQUpVN3zA1Mz387Na4Nx6GyykrpopWXMqfxTrYnA8wJ41FH6",
  "key8": "3eioXjW3Ngx2pk6JLenDWKB8FJg1f2W4FM3zmpxuvqQtyCbyT7VUR4KCfhAR5ChoqJCt71KvoFBuoQZehPJyiEbc",
  "key9": "2G9Y1qMaMVLDQaMsnaeXrv43H6LQ4ki8PoqAAMAinusTLYCxxp2kzjQWDzkL7SKyfe7ZFjPjfNHcHEHs65aKfsWY",
  "key10": "2v5xMqRtTRcH2ruXe1NXoVbvJGZ3NUkuwzHEmkPgnUByG7ciGLzH5MU5UGWbUxKVcVb7brf7T4Q5G2TGvc2bt59Y",
  "key11": "4Xa3mDqCtgTMBkyF59MAFu75Gf3BH1G23BAMAmqfvBFyV4v3JnLiKRQUXPKM99Z3roWnAovrbCNvEoqT9Pw8eep6",
  "key12": "3snSuJiFtMPmERtd2rHg27ZQRcYg8ePEWCJCRV86FifAsXeQXBXsBZPhoCoToMwWr3ZhPFu4JcZCGx8i9YV7uAcA",
  "key13": "3ymVoR4NB57zyyuor4soC9HMghKqVcis5yXi8Bco4Zw8MqLJjUa7WjFyqtBwpM58BZztuEicWK48TzJQTJcAQR2D",
  "key14": "5ctnTMCGSjcAQX7RsUq8jAgFoFHLHXPcGQ9wBeQKQwUvq6gBrWnQSepdazsfNe7JAU4uEfTBiYQeUQBtqxZominQ",
  "key15": "5ZCp7L3cYwqJ172rcsKPUfF2HG61cW1ZjFKoHhVvEwBdrLnNytKesxYsy4ajeA8MDSSdXdDZhCuH2vKa77E6HizN",
  "key16": "2boi2L27SXwurydakhq1pFVbRcTVin95i74BchJUG6RMgEv2dPcPctRtn27hfhFiCSzuwHvR2dKDmdz8gUHZhe2s",
  "key17": "5pYhcWXuj9dhoEzEoWB2z4KLgM2JAzGecpXQNtQcTS2fpDMcLAsFGRTcm6pATy3ctBVGwECXRNm5LbcreRA4JU9R",
  "key18": "323K5PZ9DSkWwbLm21ZyzzQqiwxSiyHB35HAauVUuGDMrajje423qNEJui5V7GqsuJgbnQfd9m96JrB7qao3trJv",
  "key19": "5TbWSHh8T7YzZ84EdhTMPVrg5ar7bAvBqWMjbH2TuQBYhHGdxVL8ihBX2iMJVVePvtHxRt7wE78iCcNAcvPhRRES",
  "key20": "5d6kK8Vpu5BfiwWwsiVuJj1ikNabT4kgTbsUBwGbpVoBzRCHLD5p9BnSPkqy52KumLhJmt5dzBQXuPVgCFtXmp8c",
  "key21": "3zwFnE4Uq4uH9GaMP6sz3TXJPN1Xxsy4HUcHNotKhzgovrjr9aJR6zm1WVnrbYBBamNfvX748pyMDcLdauaw93Vx",
  "key22": "2E7WdZ6jYLCGKGnDUisybt39r8DsmXxvpLeBsHUo1TM4r1kQYfAh6jQGUnwjSFMxJWoTf53kYc89249ZpGotuGMv",
  "key23": "4yUUCJ8Z82sBXZrKWVqqJSkSngkQKUKAKMQbJrAS1P8gNPp4yoq9NidZoFyuTnYLDZ5wFdEAwW9KEhWxkcSCBokw",
  "key24": "5PrQRWz3qYG6FEsnktLw3Tj13wPy8VbanQPt2zsYzRt51hXWTTV9W2Ybt5WrfFyfBpPtHixGYvik4ggpm55qTeag",
  "key25": "FV7T6HcyeZnFyNkKkRftPj2uCBvUfg386zAer1QRQGFzwdan8XvUpLuqbcPE9h8mWHMAj3FDXZfzVVF25caqHJF",
  "key26": "4ZQrCXCJLPFcbo9VQhfLdoK6bRAJVVJ3WYJbbVnc5mobUAPkHhmNbABuYCKzE9GsKjPoKsvDv75NxHBymgTkKqxA",
  "key27": "WNDW1PmHpxKmzRGoU67BbZvqqU9mnRjrMufZ4QQ72kMDCGggGQF5ZrKojF8M4sY2PLutWe6FrhHjGSdesVvAJSi",
  "key28": "2Y4fuKpvwxcGcEMjUEv5VZg56LqergvbF5SLbzEXBYNWrAcZEZxoZoBimb6QFruXHc9UUkfH7irSAp16Q6SZf2Qf",
  "key29": "48Fjws6our4kmEuoeqwaVXYCYytw4Jvso2zHS6QUxEDYxzNWjSNk2MMwVCxBvztQcaYENU6ShQ4c7aT8X3xgPWb7",
  "key30": "xac6WgTxRS7qPUZCKE4gtKfi7x1yt2RbU6ZCnebbGbG9kpRUeLBt11VaRQ444tN542MJKGtHiJXLxpeCScC1JV4",
  "key31": "2m2ooMHkRWnwdoo7dvY3emXCFTd4Ak5f2PfvbtjAuhdNLW8MHo4x1e1jXgoANRqLLoLgv28XJj5xsHyDhz2rv3iK"
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
