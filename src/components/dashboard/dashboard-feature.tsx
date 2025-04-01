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
    "4bAF39bcrNRaZiEecHv3pEkivVdVz9V99Kpccp3a1WeNXHKagQfGC6MevhhUgWgNukXYbCbPQqoMyDvzAR9xsM73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jKnqrj5rk2cFMme6eJVQQqVMkkfdqhKBMGQeQuKBg7Jik3wrMjJk4Z1Zxh7xF3qatGgtnzp39UZxk3HAMgVcCNr",
  "key1": "2e4RaxaqryUd7jqGggzkNaitdJWuAC38hSHVX6A476L9Etv6z6zBX9VbgbQsdemDj8ChDiK5a4ZVg2DYPNem6cNd",
  "key2": "3tK5koxzavyvjNpsHCKSSSFaYHuJ5iFzPp7CdpH5CSkfzMm4bQUD6U6JTi4JeF1N33H3cFYdUaTrrwPDTQL98Qpr",
  "key3": "5WmH37YoxSs84S8HfRy39dhahBJDZQuDXiVcux8eQ6KQvLk37BsNPmXAXjV7ShDB8omyEevEGz3FQiuafCoHF5UL",
  "key4": "x2DVXogwGqzQe2G37ojNsr5eGxHBjpp5cVBDvABkTGUpwJhEYAjjxZ4rocNWbW6SvVzaDtH4CiQmU4ZvK1Y8C4x",
  "key5": "3X21m4McpgQhwif8PiC4TW9uLY4SU2YzSt8jX8UiChG6Ty13JjBb7YWRQ3EUo4JPBg4Aq1TzyVauhbEUJvHdosas",
  "key6": "3wsdJ4oXPnnN2yFuJ7hRo1e7d58TWfvtPWDCWvtpSaHVzSo9Px3ANeJsQsYCJHMfZgPKrAu2vfshTFiQAXmd24S4",
  "key7": "RB9M4NJZMPFiUNkpc89puQcG47tEH1KAocy9zyiuqXtAA9GNL1zoceWpX3DDGbXJjuZdaabUdhhDZ4CLFkdkbnE",
  "key8": "5RQCZ4RDjuj55uEvAXuWHAnm5ufdbb8ESt6axh1cdCkNB7Hz8jFM4Vuxt9DSsM4RqeoktXUJ2Qr9136tKkdNE7aE",
  "key9": "5ZsbJvfpp5ukbnzxGwu8DMKf2TFRMUicSVMU2wrkG8tUhWsbrhJZFaxpNuvhHoFQL4xmbcm5LNvhCSxj2jqPo81B",
  "key10": "4dmJyia9wLvpPzmPyPPZCiuG1RvkFejPEW14LTpoCuRLkzgrJhUeaR1rGgKDZoTus9pHu4ghzL7zADK3wmWFdvfA",
  "key11": "2BAC8MRY4Uv6diE3jbFYUkpSxoHBFWLqAmi8ihiMP8M1mDd8Dxsf1gh7Eds5V5UWACViD8Kikt8AsNfdybF43cVN",
  "key12": "421LVBBmsjVDCF73LgnbtbgBmnGdgcDYBw3Y6ZGAKycmNTrbkvgXwESZUWc5y8iXUd7P4SKoq2twD7UEjGCA5Mmf",
  "key13": "4aNgXCD56TtnSNVgu6TydLzrxKo8zKGNpDPn7Sn3oYXYDLHSg3KP2Merm8FSRmMj5HZW66oisNySaVb1YGrimYBw",
  "key14": "4xA4Pif5bznwV1su984B1taaQbkJj3qyJ21fuefijY9NHk18gvJEyfCtNnFXixhnqWTopH2bLSMNb4SMrWT3fz4u",
  "key15": "2VjdpmVvBQvtUevWumeFvkD6V6BHLm8vGyC5DQN2pW8qCeYoGELCpCbk7Kzm2Mnhnjgk15E2bKkCyeC5i7BqoGcT",
  "key16": "3jie7MxAu4HazsDURuCgg6nF4skVLoMUZdLsSvGML5n5FGGKQ3oUCvYSED8h1aFZVayi3VKZs9g1bJoeLdZmNocC",
  "key17": "2phH34p16tyHBdQ9mq65L85ZBwf92ueTWTKXo5WQcgLiNjok9GDDqCje6bxFe61r27GjPmTzQGrs7osY7LgvANvu",
  "key18": "eJxARmFAT97o1hKKK61HxqgKMuzamvpDYWnx3g4RuRs34Xq1e8i3gTigss8Xz9kRrPK9syno7gjQCLNaeAuRHQy",
  "key19": "3XiGZi2tkmneVtDNyRAdvvGhTBuHGdeLAWg3rviHpBxBW1e9YgE8zuBUHGtkDWD8CGF5LtsAMnNarFmn66K8mhwR",
  "key20": "3QyvKtorTjkjTBvpsShVCa2ouZwFpUWH3xFJacrJwijd5FFnHjkVkg3kuvqPAgW1qqwLdZaT38Vp2UmNBWuJzFB5",
  "key21": "4N7QPUYmM4vggAZPhERNzGQ2Qpf1aPiPiYV6EbF8aUhDAUyASbG7rbCrUUjkjhqfe4UfJiZ4EaQkgstHvaYDNR71",
  "key22": "2nVfnL4vY3oojn4cSUjtLnQqy5WqSm3ThJKyigZbyu6S2h1kqCgfd4QJ2tW75yPh5YtSz9ABoCDRwNjDcxyANMFx",
  "key23": "2LdfNM7mqKU2yhBqLXVh6GQpeUBvd61j7xektVCazUJu7KZCj12TjvtjuS7UpcMo4FS4tqczWmVb8RT3VMwxcQnM",
  "key24": "3KaXZoyNHqcWtHEFyzEE1qePGZpK165HR5fFfByqCNCCYqhaZXb1FiauFbnquzLJzygPqaLCk3FWC1Rske2QCaDT",
  "key25": "2DmEksYU36svKxinqSkSi14xMpQ3xTjqzrcsmBZMbt7iyzBgK8yHyStW1xSFoMVEHtbUuaj48WYUnSmFJf4DMp85",
  "key26": "67T8sM4SbjS2Nr8cPdiJb77h8jyiSQR6Z3yTmnLnbZrgMRQ5kq6FzefZihnZR9k3knQCQi9geRPz5GQe3uHmGGCV",
  "key27": "5fv62M8131YKtkF9SqqFsMnQ88dd4NrYPtmtWQj7Svyc41CAfB6wR4FAYs4McWXNysMJ5ESCKgyqN4ezVwgfPirr",
  "key28": "N6zXXLxa3wMZKkeUbhFGSkb226KENffQQcesL7xs3uV3qM29ZSK5fSkQVzxFdFdAgFZuavjp7dYNimhkb2dmEMs",
  "key29": "2EjA1M6BvnkrrRi9VA4qpQx1rfSHqoaiZchJGLbq2KyrE494ZWWzyGLmxrYn7DzgvBdg6ZNpLkukG7eEzpxhnn6i",
  "key30": "WHdXL7zRbqQ1gChLjWcB2N6U6vXPKntGxAehJS5pSaZSzsPazMDmH4saLDkZkXeaXH817QJzfcovzLD6VosfJzP",
  "key31": "4Bk5vpSMs5ozAofK1cXzSrpoPZXi7ZvwS563VJqXu4bDmmcUJ6HBkdQqDx7LPPqrV1VQ7RQ3m6CaM8h8o3iiUhvD",
  "key32": "riLNKvyBUyeuQ3oo9EbPHrK5Fzu6TktqTPNSiXz1xYpc7vjHfx24KhEbuELJxrUmNyYbRezQPKXAWHEepFzRcR6",
  "key33": "3sKZkGGSMdpVmTFzzYs6G3HFnbbobtx7fFXPd9mK3iBKX7Cdjz55mrFJp1LxR45JgQmpQ9JHN6LBHRmccMBBntYm",
  "key34": "3xNbEEwRBBw6K5FJLVigC9PtENe5bSmbwt3FMdctSyEVeRdMpv3Z7zTqckGj1nFT7o4ZDKvQUaB2MtPdfZKaKHC9",
  "key35": "3AQUJHNuZvsfGYFjm6n3rzCNx9Ak3WfPVqXu2RuC4H2fHw7ksTHZvbcgwGEA2PowyzmaQefuSBJU2o2Br4iRXEPc",
  "key36": "4YvgzssCzNP6TJZVaiyPjjt5DBtpbHznjGbfccUNRBXzPP2ohvURPne78KtxToQyNKxGZyYawTLYuonSEosdugka",
  "key37": "5YriAcNAswkQhNcxAxmrYSvF9wX54uKA3Z8kgzhexJY91uw9wwLqVeNeWhtL2N86Uqd3yZjaGVNbTBifr58tC38S",
  "key38": "M1h4ku7Kj2ApqmCqjH9TnhhzrmDzgLXpHKMc7PbWaa8Aa3Yk2N9MerQsDw5QqQz3k8ykgyWmKyBxbjfgaE7USEc",
  "key39": "2csUE4C8BDCT1pKiWK9ysFmzkV1FwWwUVvjqqdaoZhJWefJFwdx3Mvqi7y2vo2y8BP224y31DSBLumSiQvzFwLZa",
  "key40": "3NawrNrmDUhPWWmkw43D9PG5qMXrbdP3Z4sDS98EWzEy4hrnWWNMytp72tEtgDNuXjzeVcopdxFCbGrN5puVrpG7",
  "key41": "2kzY7fsGY1fbXK3diE4zp1ADUAvwtRz6P1fgnNdGbye15PnP3v9eUc2odY2p5YVgweuiGPfAB7hBug2LqfZJzd3V"
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
