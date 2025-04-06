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
    "2xzWCUytGdrPEr4kYGCdgSKAEhGsVwht6UHGm8o1QkpgYjvLPvpNWPHs2uhu7pF8Qt5CoKgRnJEn9YuVytu7eYpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEfxvyFpNtNEjGsxb1R2SAJiokkFQBeQJa6pjbAc4whjXgzyLUpPmrw7fdYTxZPCDnBd4SfNhivx4vmnJkK46Ug",
  "key1": "8hsgJeefaR8vevoXU5p1SETkjGJDCtdb8CLAQYF3kiXg2sfZ6Z8keeS9CD7AoBaLeSTCVNaiakJrh15vzdn9PG4",
  "key2": "5bh7tC5KvQhoLnGB4nKWmU5XbvtMHvtUHDVn5rhsworJnP9prkbYrMPHUZUz3xF9HuhCVfdiN3ctwDXBo873AJL9",
  "key3": "289FW3TjEpzcQBHpBDNUXgKDpT5uQfAojRvDrpYA81CGvMQrJDPyLVehqEofymupPHbnGJTg5oN34GhNi9M77W1h",
  "key4": "C7RyocmAo9CpXrszZQ2RJeUXRwRzDZsZ6njFFwceDo1mYX9kfBXn26Fyy5gfrQcuGHWUsVVXcfwVkSfFfYJAhiX",
  "key5": "4SZwKFRFVEWeDaVZpZqR3SxcqxH9BAEaVLQLxASZ6GpU923kYmnwrBx5msXRNQZ31wqonyPbVSDYUbKwdXGendQ6",
  "key6": "4uf5D23cwWATiYAjuCu8D1JrF6KXs8eEo32PGBNUr9DZsVYDsBEmapUd5FA5SWrjdmazVF7D8r9vRjJ1r7Yq24FD",
  "key7": "3P46ynHCyrr5gJSypHDP4BjiWGApmTETZksAFs8dAsUgJnScWaMb4Ys4SYKCQ3YobqKihUcx5VB4YCiqcfMwXhS6",
  "key8": "3DbJDsL3UT87kevqVtxb74W729YCcg3m2Uae3ixZ7PZAqNTT8wisik8JcqztwX5sWYHM3K8kTqyZoDthBaCt3BZt",
  "key9": "4GwxsxuM2tmKdbDLG5eZXGCtZLGLMjHGwedfSzLX8kHM1KTsNRQRknQsiS55Qz9JhknXieqfx3io1rxSmFbxyvNV",
  "key10": "342FWg8JWSyrLfAnkHsxhiMEzbyKpinfLyRFNkVLPAqhyTtFkB6Cr5bbCD37JpQinn68MwfrAddQJfGAb9cGS1Q5",
  "key11": "2ThMNNEQgkynWjp1p3qQ2U25LbqBu2peWVL64R3MhZX93WMFTeTK285AWxH8AfM54E8snwemUCiHq3G5FjAG7Vjx",
  "key12": "37qr81YeGdpMj56NMRHrqf4PPUM6TRsUy25iKoF7MopQSwyzYMEae6zuqSA5dU3rGro62o3yxM5tXUUwSUKfnXEw",
  "key13": "5Qhadqy1hudEvgqJZspgENxLRseCqx8CTrx5p3KW6dKQcLJfNxmbESyfZMMVuVVfJVGpYmnzPw2yK781t7NCg3d3",
  "key14": "3qryYLRnNSj2pUZXo2ifmrEhEqPNvuHcL47wS779bFAJVMZ6C4zHBK658Dqavse7XAjmEwdNudAWNE2LNMe6ooKm",
  "key15": "4TTHpA3WNd7SzHRwSQajqrQKgLaniGp81FGifbhKdegK3konUKhKcgPZGkyNAU3QNJeCa17zdUS5hi1wPzFNHJAQ",
  "key16": "63e2kVDdnM1iVufdZLdYgMHCoDk9x7pwj8tpVQ2ehAS9JUb1BFriZeVnphTURmHQbtqRWiKDNjQbdr49VhJFx14Z",
  "key17": "CohsKA7PtNmbQghWqjKVFJ2cdxWJVkQMntw3YFmCmAypjJbAyfKXYY2wYVDoFUuJE3D5VBfntresBhhkpsvUWja",
  "key18": "VX5U3vHwqXHyV7TVXp3u398g6wnsEzfYL5r4S69L4e7LGiKYK1SzNWtuHTy5WwbVbwCdA1jTV2fHxNAFo3Dry8H",
  "key19": "JeBuio1JekpKwJoYRQQni32RGBcj1a88CjKGMo1rA5X1cZcbHPUvgyYfCqimbaPCMFxKLrYNz75QGRTCkLX5sCN",
  "key20": "3JAguccdPiwvHqhYRjCxoLQkPtmstAfzUUVgTxVAYAV6wiKSnnSSqqZ5QDsKtbFhY5EuBZvrRPoZSZNSG4CwYNjA",
  "key21": "2L9vPPjdc69hFfNVcm7EhVAzsoqrpEGYKp3GipSmdnKkphaJyDCFoKbPCVBaXtfvJuMQPEtHNagMC85fGTJuRgzB",
  "key22": "45se7mmnr5FpVpBRjTQ2WzaUZwos5C4DvWVfAAxiJZ8embrSNTxKSiHTVwcd7EfqtqaED4aet95sepCE2PLj5Tp2",
  "key23": "5P3ySRWqiJZjSd7yBCvDftixrifTUWzR4gMYvJv5hxmkh4dE34B91j7byT8t6JwXfER3sFpGL78ntcSCMJeos9RG",
  "key24": "2V4Z1ES8q3KtAAFMdV5WEiuBQUxCRxt9jdwjEUzNZt1GCirttN49h3Ry9HCj8H9GM1Y9LU6mbFDjnAsD8TEuKeXu",
  "key25": "5p9zibR73pKCLF67FkJP7DdsYt1aTiGFnChMhBepLpRZjWWW8nt5Cf5qXjd4LJmaJvvZhyC8ydYVLDMRfaWqtVfZ",
  "key26": "5RkyXCBxbrqKdskxKdpZ5bQnhmGRXK95MFirHBe4F4iJqff6gcTmdcVJw3zPsLPseWNpSZDxRLUCM42cy6ynBmEv",
  "key27": "5Ps6MBSGpVERrGXubrTrBSF6kWQkk5NHXrHtE1duMszuduC2uGbZ55AJ3pc6qoS2QikMqBqUt4vS2XfprrDsUV1y",
  "key28": "4k6cqGGTCShqXBpwctPottP1hZqQnR1aGvb6VFfkjKLJSTjBZuWcg6YS54LWisxkrCe4Yf9ogLKVX3BS7ehn2Ltu",
  "key29": "5zTF18RWRpXwBrbo71at2BdFMjubhmkbiXQg24Nb6mevx8hwFyXR3qG5yUJ9xPVqbitLgvAzQcSmUqPFhAvHkxah",
  "key30": "5sS6nUv6g7B4DKg17hP7WzABpaUgR7iz8HrWe9E5rCkEm3kHsrUMYQFpCCLPWN8FEus4qHrMHRTaBwmfVnTok5G3",
  "key31": "42eXRYMsmQzfFVBXvjZeNE5DZCHBYoUrghJHfniMzZp8azZE6LMgkHeZTiH9As6kD36WhfVeEsm22uLQZbqsKij9",
  "key32": "2nY2ZjMfbBsNRQyEPw5xutrQjPKQz9VSyzKR6SGLgoMWKyPAs89AYZy7BZBZ6vhDv3YkJdJ3JXuF8JQP4Zbfnqcs",
  "key33": "tZvetKfx2bCzULtEF2k8x8pvArrZX4RWyXyQTQhoUpdVfML5tG5TZsosrjP8Ux8W2Niur4V2Gp9fd2JbVR3PYU3",
  "key34": "L3a5954buQWecFD57iL2MjRoUbwkcyZmcWR4oNBSkzsi9aMR3D3kjaX9TLCEaVxvyYQoyhhTWiKqV5jBihVYHET",
  "key35": "5ioVrDQ4Nbm6RQz3VTczDpjLHjfZHCRLWxNak3RuxPRZK4PKQtvjA7vTJr5KwdNm334p5UzLGhrUtYpVz1Y9XCod",
  "key36": "4Zueaf9FpWV5sN4qeboZiVttSEoKnRfHeMk1tFDJJqBT7q9i76GgWaJjgXbMP7C4EiMRHTHJTDNaV7Sy7VCbJuR5",
  "key37": "4BvqCwWMRKiDeVD9Y9n1AzztjQZ9G4rodqow5kgZLWMtav3L3QzCyzrsdTXHjaoRjFiPxCFjKTgqxVQs42WrfysC",
  "key38": "oKCs6nPzeNbHZdcWWp9ZRGMFywvnFRrR4zHB6dDP6QB8EDUFpuocHREJcSAsVynpatVjyhpo8W6FwnqXw8jKg8q",
  "key39": "5ZGtPjhaQjJpaGrYn1v4YDn3wubJa21ucy8bj9Yp48a6KxxBNLbQZTm8ZzNFJaQ8kX5wWXBy8Pap2jxaSrSUgUgA",
  "key40": "4KGJHYhQNz1zqygiCRXZzYNNogwXLWesUakFVmaK3WkMUCLbL8EY7RwtGSNE3E6Tvx3X4ZjtDa4bK4yXUZK6X9EJ",
  "key41": "PqZFf5YN7MgsvRaxc5EkRj7Vova49fEXpAjSDqs9eXjbzPkY3nm6iRrytN9CZXb5qNm7q9bu63v4JosdM3kyJU2",
  "key42": "5TksgaV657KvokGuCzDnFhgVdgK4vicVDbxvjJ1KFvHJtwopWN3okor2xeUMrK6HQg9pRymN1qbu1g5AaeUm4BX7",
  "key43": "3j2qhfHPE6dEJyjGi6wXD9s5oSEDJ51NRoPZL9xVYv1nrs5rokprDK22yANXeFkMa7pRGFiuD71ytduqfJ8SUk1h"
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
