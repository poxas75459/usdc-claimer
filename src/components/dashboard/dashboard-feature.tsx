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
    "2uDhTbDZW9dBYMYbxE5gVMdfCyj2ZWauAhMGE7828TZDSatLeXgmxogAJefDMUHhTTSFhYdrU6PGhLNosimFRue7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZfvvHLfjM3wua4vz9m22vAvygQqBKau4Rsi7ddVKLeXihC89TKGDFRHfcJXfoo73hFtGjaUZiEieRvgjZsgApMv",
  "key1": "2pb7KJQ1KqP2P3Nkefe5q4Y5ZKh7n8QUTmxgHgcsaUKP85VhL7QeoAuM4ZPNAGpkLKHREfiiiyZ2AERt1pT7yXeN",
  "key2": "WkD2GPyU47HxXpLw8i6zpm4LrGxJNFr2qjTyZLppdA5KtwsgbphqLL8w2Jqr6nVSSa8FQnD43RJwqCwruA5FMGz",
  "key3": "58dn3iodHKLMUaoUGvDJoinswAeQy6z71LNRVBnqCA1muqFN1pWxV87eRdRhtFYRQLLqwFbNcWjNSVJQRD2ADoJ3",
  "key4": "5YCX7sZVq3NnkeYh69CQNhsuzqk1pa1SYYppkdbCXvQTTNhirjTo6TJBtTYzuNX4QrYJhjbio592mNcc2DG61uxZ",
  "key5": "3gWWEmMFxJdBvxrzYtxygoU7Q33BrqmikJ1pCG2FyCEQ1sSMpmTsoPXUWYwTS7PRzSS9cSGzKjsoXSJ3kFdY51Hu",
  "key6": "zPSe3gXipQTL9kSPfn7YYDcK7ixSPRsRcDJWGgm4k9DQ6wc2JRDTh3S6Z64Rdic6XTBwU9ecarx6gvuKj42yCDv",
  "key7": "3bfCq1HzskKhdZDESfbQv12k6Qkjxa3z37Si8W6N1mGiCxe2gMZ2SfyS8fy5zCANi7ZpbFMiuNsvLqnNa74rp8zz",
  "key8": "WhRKjkPQ1TMhNorTKpNdWcvqqYm61WHHUibFTuXn8e3BVbijwaPJSsWEW7dpWHUWr3zqBEfY5w7ENPMoF1VyLLn",
  "key9": "36PVX8DRK2Qzj8W83Za2xiod2oWSTZDPdr68mWgZyeqL8PCKWj4wmvezC6KwsS5ZXWWnoaWs7nHzgXgytz67anaS",
  "key10": "3diVN8AJujK7y1WDLdL6JyjW8rDDKsCABLu7EKDTwQm5iUB95kaG44DiDGMBbYbNvti1hZp2ENQSERAxdAPzohJv",
  "key11": "7ujDcGRkFNkwEPtBcbwa7vRWAxCaSPPLbVDAtuRL2De3Y4SpF4EnruSam67YSb97byidkQyrn1uPd5w6Jbzd28b",
  "key12": "G4tvARRJ9AF3xECET3WdxzSgMMbhty4YeGuJWKYJqzVExyybqu9iWPw3cpmwgWidvnE3F5QxjQQiSGRXeqdnGLw",
  "key13": "35vXJ2pt3ihYuskpcH1VUP14CS7xibfZioW4cVKCXRC5gFoE5WA7kWVHTivMGkmcRUsnpJxWbFaRi4yaZDRoNpys",
  "key14": "4b86vFFpLdFptHUGkWGjPuPwDAo6bKHtBErgboqUPkPLkCHCbwvqCTpWn1stH3XwvuPk729Py159FtJtcjmXu9qm",
  "key15": "58VzdftppGhFHLXKgzdVb694F5Jz3eZ4kFhr8MPHt3pjyi4P1fLmV3yQgjp7TdLbS7ghYe9Cd2rDyaUi67iLhdR6",
  "key16": "24Mi3zDjCDt7khZJiEaq4gNTKr2UkkC2rZSkF7GFjBhY8yaQrpt3qUg9d4jcd4jrjPdW7XgTfdJWmn1wutxk5SVA",
  "key17": "3MVLeVrLUgDqKM5HUxnCRSo1uDgkug3tXoEMhXqA7P529rLvb7zyGEHwZKAXPYGe2DVpBbN9nbaH2MKAGssgvfam",
  "key18": "3MeZj4CzDXHFRptW9k64SGZJcMUwpkSRWwCYZftAYL12Dwxtaz8sMNkK8RoE33ZHGjRMBzeuCuSjBUQASSVGBwRF",
  "key19": "3a6CxcJuN25rYK8K1rMCYPGm8xYY6qJehYCPzYM6Y8ns3QMudQdC5JBUJgZdtxu8UbJ6cyi9j5PGp9CaiJEcEGYG",
  "key20": "2JVB3XXicaKwv3xhUYvomKY3hu3FFb1BRR2Fp5wFWFSE2W3AFYQcAszaBLM56LiknQEynX1VtwcC9aAc4SUSFznm",
  "key21": "2bQ11p9XqtNE2DvBLvgsi4dB1ycqyu5fg8ZHiyEPAQnmNk5YaJ2KpWPYMJpp2MHYpXtfqHxTTYRN7kiBEk2S9YqT",
  "key22": "2srLRNNVC5DxUcdgqtj4rN4ZftcLpockrR2rXw121ijb7QXndvLNyAcyJycFuwykjtdzSxJbSqxpLAXvYRpL7EAj",
  "key23": "2S6yj3ScSL3jXQm5999VkZstnU7DCDfWFrACPwcd3yfi1Ua3h9nA96jkU9SeVsxtsbxwKuK8r2j9qoHJfaHKHgDk",
  "key24": "SkRhH1a4tqfYXvdxj9A1CLoamk7DQuhAJRpaBWVRHXm4AgVeM1mqqgg8SvUjiQ5nAjVP5HLv86rEeSK5mxYhwjx",
  "key25": "5vQkvNLMWqFZihM4Wf2majtM9mLfpvirXehhRo1uZH8ETCKD1gtMasi46SxaiHDf8HweN8s7wccmStirZSmWen3t",
  "key26": "5ExNyip9SrSwd88gaHNy4EGuauCk3YHBQaW7ZEcwbiLb4EUxD9g2M4eUyAgLxR5wW1et8spT7Yeu6GiqPPrsxSc3",
  "key27": "2B1cJjTxdWntHa3ruckZd4ZVKYzkWgHJrb8NYR2YRc4p8aqK47NeYHvE2fgoAXoTgAH3Ur8xsanH82XBMAJepuko",
  "key28": "4p6rf1LDTkGYqpUWfHYui4jvWfJpFdVKSPDo18GwdUaXMvAJC8BEjUW1fRmKWBfhND4z1KESRZ2actAX3SXnoiH2",
  "key29": "4zwdPSskWof9FKRJYTaTRYkna1WpmBjXu2HPh1XKd9cjNGRGPtMSv2K6Lgrq3R4vyW9K4st3QPZY6tcPLFLkVuWc",
  "key30": "3n9WaMC9U2L3NKeurPHijMNjbGu5Y38ZUsYTV2ToeRaj1wPpaPQR5G6YsupX7SdwjQxaC1zxdapA5oxocxQ83nTi",
  "key31": "2JtosjcCqVLFyc6iPpadeWVhm7Xwkm4nnX4jGte7bwSPsUofmvKfsgkyfV4YvvC6tgsQ4EPXhhwod1hGkdbqA5wg",
  "key32": "5xQwy9TZS6gxEmYVaohZDZFWCx5SjfL51NdMUuPSifsEoczZHaCre7vq1m5rru2jeWu8whXotJFZCV6Wrhx9ngvv",
  "key33": "5RcFY44XCFRVFZnmhj7gPfk4dnocgDMjRxVsdU19baRxv3tTY5BUWTNsdTrxnydpgVvNLoYq8dWPRViGJpJifoUm",
  "key34": "41K8rj3UjCYXT7DUEPv7fc3VUSYcQHcrc5qZhUMK2KoRdVzNTVJjop5Fh5iyMtcrpVkvuFn9ibQYGizrWxA7Y6KJ",
  "key35": "5CF7iCDHaWcnF39SuNGUMDgongWtJgto43a7impKoqCx9TB4yPjnpUyS87yNUfXnMZ2xTD2zw6TCzskd7fgoReCU",
  "key36": "bRuq5vtsEPeNL74T65p6LtSWpHYk6se4CdAQ2Uq3ESHhaviW9CDQZtBT4Umt3rkFHTV8w6NbiuCFpFbVB3wiBcJ",
  "key37": "3K4kqmALjYJuZ5b2hbFNFgtFCRZUFq2WthddGBPETH3WWKvTMJ8aPQ99yhqapENRwFjpLaLx5qsUcXvehjoVqJzZ",
  "key38": "5q3RLz3QFqJju5yL5i8EQiASd7xp2Tcs1DhJ49JBFGyV3LmVCpNR8UZ73cqquATHUApFqMg6VGm2MFitzHNDcjoT",
  "key39": "5DWBM7QCtLDrpNWirxw54x8qS32WSUbfhaQ1kgCtFy7upUeYbFux4ky13ZHPRhsR9oECADydRQoi1jqm2tHUyA6v",
  "key40": "4Doxj4CjHLDnekAyv9CZodgrQbSQDAchVEbjUanYNGQDVvjuMBqT5p9ps41oWUzsbUL3NsewrGPmibifx5ZZkn4o",
  "key41": "XiqZcNooMgHF8timMeLwUrUGvooUbrV2bAvyDXkUbwpeZZD8K7gCw3R1X6jF6WjX82YBUnmDnHCm8ieHYo9r2fr",
  "key42": "2FLFia2RddiLpTPggsCYbwamRarcbyXUVrm4Utioc6po4ZZNovpqYpaehpPh685DZxm3oEAuBfMBeXVjyPKwyMpw",
  "key43": "WdvY1CoFfFUAzrG2HtD8iTnp64xnUyo6q9Pihun2XDzwG8cqh9Md5XAgKpgpN4tsF9u46yCSxVhuqJ8g1fYLUbd",
  "key44": "3hFBSAvigdWDTEvcWYA6AcmFTZDXn94Ea7fWZTQ9hrQBKShtdwwADVgtSCaTnB4UuDnWjJbGefXTcYZiSFrEbgZA",
  "key45": "4tEJB1zrfK2rbygznGXo58jwg2vyh7wKMdbfEttvyB1Surs7gJz7tZiN3DPdA1wc7Z3o4c4Vm1DLzwtc4aUftG13",
  "key46": "3RNcLKDGfqUvF1Kr3yxcnj9bG7F8x2ELXj5wyUT9gUYMU29Mj4TmvEFB9pszLoepnNyZLnLbQvAGKi5DgxDs65zP",
  "key47": "KkaUhRii4PMUBoMnvgknAVRZK61EQzdUFjk2Q98XFdcHGiL5jSmYf3GfFYUERNsxjij84eaXhxbSy9g5bH7wCgw"
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
