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
    "5bgA4PA7fX5T9VtcGbLy7Lvmt8mtSnb5XUUsNM8A8FugDjwqqnLiXzkPNvx4ErhEDZuXycHy9u1hn6wHe2vcwj8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGRfqFdTZLWXS52x9QtnScfjQkepS7h6uNydAnnFRui1WfB6eMBBT3RF7UNRUwRChEn5VLcYQv5sas2KJpFyo49",
  "key1": "2ajc7TixhViYJdG7P9Z78bbD9hij6cYCFKp6S3GStTRiL8CC8jWU9w7pgRG2d6nNy9KpLv3P7a54B6yEUuPP5Ncz",
  "key2": "4jEZrBTMrTysCeXiXKTC1WN3jDGc8ZyKMZ6AtHKXC2AP8krhPaRk423cxiYgBq6gGNqRLeb9Lry6aZSXY9sYmKnq",
  "key3": "3N8QE3Vzm8LFMS17ein8cTQx8EYTif2wHtyp712ea1sYFMcrKfpn1XGrWUYsX2gWc5AVtW4pSz3jbt3VmJVrGp5H",
  "key4": "4APVcnDsLLjwP2ymtdjGpFTNV6UVyjBdyqeDbjeFFjeD3npP4NYDWwR8cfGyje7pvUkn6X5nz8T6QZzsB7oCoZGy",
  "key5": "24HdF7VKXkyFpRiEHM2yE3CTNXQWL8N9CkHn2qMjAHsSeYgW83fhZ3XEewaXqHRXQrpPcbGbi4k9DfUp3XNoNbKR",
  "key6": "2qocRcJjeWdRkKPiqGAtSc1G763F9CqkpdkrGernwoTdbJHZQHCzC9JwLNHhQJWN76d4xRVurKiMj7b4ZUvM78Pu",
  "key7": "XvZMudfTpmRGWXUDx7QiFHY2kNfUvdsXQcxEpjCoN6xNXsPL5yKuMxXt1HLUpsiDWF4c6ntNs5Zp8EDEJyLGrQF",
  "key8": "4oSpgsPXhnemBty7Ux2Ltxy1hSRHracTm6p3T5socKR5MBA8Mv9x9fZU7rQrzP4J7Upj2JQu7iYpimk535mhk8So",
  "key9": "3ghGZAoVnYqqdnx3JkeV9bReED3MDNgG9r3SMG73VEdSbS2yXtEsTidPLyjvSrftnj6BBi8tRcWUeNJ4iCz9gNkF",
  "key10": "j9oUfg2yjCHAPpxfA4zFkpie7CZNUNZzrQ1VFinpuhEJX2VqyvZDkKAw5WPEHYKZhPzV2oNhJYzK61kCYFf4cLo",
  "key11": "sjcMe2NAEN2m3WNZpY8zCGNg5aVbuaLJRjc6igpLBG5fMkfEQywXfX49Ynx1r58gUxR2nfR2bXM6LPVRrutPQWH",
  "key12": "5idpifSGhPZ2yocmWHX3gxinYPyrrtcsAbRd2LC9RJcWPBGq9gNWKqpuK45vf4cjvn9oAJAz7V9RsFNSPbXCmQvA",
  "key13": "3gZMjYUWkMApAVwpLJ4Yq731fPSeyp1QjRthusYGuEyoPaPZcXkntWfFFt5jnT64sfVeuPNzCRTbv4QdVSA17VAH",
  "key14": "39eiWruzGRhjy3w65T1DxCCQ3GBvVZF1jQ1XuprLfd7wzQ2CfDrD1ie1MPSmU2NA3rsc2xfinS7gKhRsTV2iZGFY",
  "key15": "2d13z5A1qHSb25wcJss8Bgpr55utijrD6oTPELYnK18WkbHt2Y4W1tENpPLvV5AGXT2psmskuGvarxjdBKd6UuAY",
  "key16": "2xYTbFuSoVBuvn15GFiCPb8Z5di9a8ug26bS6p1oxJvgZve2eBc7M2XohjQajFCpXssdmqJA5dMPU3SHDJsQiMwL",
  "key17": "45XJ1ibfH32SB6s5zKHkb23JGhRXtDiTF7McuzADFKVuKAoP6ztg1SUPhJaut67XknwYTjoWB85BejnxHjcyeqbF",
  "key18": "UFkMrPBfUiCGw2pfMEPEiGgsbdjb9wX98deWjNEqqQVid5CjBFX1f65DdrAJRLExhJMathn6Z6HGejjsYejt5um",
  "key19": "4NeKLWSCZ4HRkyoT49uM7EpK7BaVSwxtEFfDdRpnXjac7ftbmVLdtBT5fSMJcJEeHT67BXoceBYZUabwTEAfS9jA",
  "key20": "5FqkG8JLUseDCohRtSMsquqGPGWtByvb9XSReBvc83WAwBucxQSCVumqX5e4A5aXWdGwxucJKfWviSZaNYFHFcRc",
  "key21": "4ps6vU6r8bkdQwpyq3ymzadyfRzuUUErE2Nz5mBYP1kqaXYR9xV6JPaejiQM4AM1syjAy21F9KncKXGmj1wsJSJP",
  "key22": "3kvJ16tCw9CabCPDahpTCfXxfUTM755nB3Ym5rR9SrRbmWyTtqPvVDsHn8zShqeaZHEQu2Z2mmG6YbZ5SB6Dgeqn",
  "key23": "5AVKVUesJSNMKHxBmtoiGbmA3zdfBkgCDvQBwy1S5zH1etuVVcE4a1PzaYp6tV71XRyrgpP7HWYEbbiemBu4Qsb7",
  "key24": "GKE4R3aBuDNqWGXWMwcxzh5kUrSSha1WF2FnT1qsqmsLNiFshtMzjRsZ44PUgVp8QtxHwfn99VR7L5PBfBA6xCA",
  "key25": "3Kip2bqGUSSgwi578FN2aNwpDsFGPrJ1LvSzu6mv7uCZa56uUkk294QxPP3H768wbbE4dHUvvw1LUdYivaKKkSRz",
  "key26": "3zMDnXfmqzoJYhQd98gpBG5ir7eGkouS1QJaFTASVSTUJm4J7ayUUh44TPmhiTqTTSPEo3S5VqVvznvLabSU9DSd",
  "key27": "Pk5JefDQeYfT6kYee6PvzHwJdcqQtqqqeNX7KjVaAs2vt18hoed3Aa12gK67QVxQ1dkhz8syaDKSZyR3GWpWvUy",
  "key28": "ttjSmJAsKG7xfkw1MzL6ijngMZxBYL7xSgaUUQ4fSnR19GBSKx7G1xMkQCxJJ9bmmCfEMYhobf85SvyrnosYrio",
  "key29": "fGLzuDEWDtSRnRktnsAJbuhEDdxaqt6vso42MYBp31oB9HUpVHnei4MJ3VwGotMg9qYWo23nj8tsBbYGHu7ae9T",
  "key30": "5inERgDoUqdFC3SfEUvPjF95kQfiZiKCtt2uCMtL3j8B3yQbdfhmW3avcUMdCGGcvdNm1UbZT1o5dW23Kpk86TXo",
  "key31": "5n1t5rjhHisZzR9QiJKXB92gwvKHSWPonZDVttrqPBBSJYFsrDZRZfnAHeJGdFAcNU32KhQuDoprVRSNvdc1HDN6",
  "key32": "24i4WaYrBeMDBE6C1xZSTtM38g9GzTng8vQZAbKreKbmVmw8xe3CqqCNe5nGmvudQYfjCSwyAKYWQfLTP4u34FqT",
  "key33": "ZgXzas29UM5vssUVsaCjjqmQ9HCnhZJRDCLmPhYig28qVLXdQpakkap8tihwFkuLjwfeRihydX47TdnbQofMYEe",
  "key34": "3ZfZBxxPYnQpZHiiWfHvpjrxotABMsTZeAwogLe8ZD1vkTgbVN1j2Y21BZCEzctq7GGXjKPSJbTpf4fd33rjjAsd",
  "key35": "23Gr3nGVa9GAGcoKKgUTzmDTjgkPKDrkhZPoLJUSJqLhbzi7jdp4EqZMSPynJA2ooyNdJGHM17qUn35r2bNXkMHA",
  "key36": "3xqjqeL19MpRLgSXpZhGKibga8tAHY1C3u2w65KfijKyq8oXSBN7TuFeZLdLkk2Wy6iWD95cvLNtjYYXLUCCn2Uk",
  "key37": "2mHJSQL4u64JGfFc7EYEHvHgAzNQrNfqepKvZ6e3edMgjPuzN2ajKtxRK2WzBwGzpfQim19gqDWEZ9HAxtKQhw7C",
  "key38": "NQH2rKFoDcxhPbVJCC42HAMqDJBHq5PnEBfX4N6VUWCVtuE8pioywMbUt5Czjy9ikuqbqNJvrKosKRuQqufmoYJ",
  "key39": "5W4uyJet96b1ZSFTrLVc56R22XVjTyjqcMv5x1AjcRk1Q3ei3ANuWoWkYZPWZncsJ51FDBbG1HqZjKGywnygvsDB",
  "key40": "5qrt5GMjMVyWvA6ejG3epoZy5ZRx8RcEjGbnPfbyAfVdTedW4jWF3YaAQGwpK3yEyQo9kG5aiAJmWmt1iGF3m8ZN",
  "key41": "3s2UEPvxYr2xLLfmTn4UHPGn278N1cW8i7HYt4NAKAW7dVxqsjx9a7rCYshhio5t3kQoxnwa2T8eKjkrwVR7PFEP",
  "key42": "4Vqf82hZeMVWzm6MMB3aKs6BwZzrEjYKsVEQfRJfMgsNsqeVQA3TJwKMPndL6VtBHqPDrUSf2CHQjYpHwpoX9rNH",
  "key43": "44XFVykFqsD5hSQpXJm6pEpa4hbhoxZc9ocK8Ju2reK8mCGnWBmpFLS5HgVv2Ny2iSqxAwiYpwBN3vA3CdcCa2NP",
  "key44": "FHcU21Js2jB7q1yXoGPhauUg6jmennjPLQNaXVwHZMqcHKM1wWHJgsk5N39WUAxaqMuEgoSkgbJRAw7DUqcbaSj",
  "key45": "25z91XSKJSXPXAFuRKg9wPobXowjckSb4mTP4HQvzRPw5iZvPMwrdYPKn6RNdghQb4mCEkVEwJxEeKRuUEVoqEEM",
  "key46": "4Xeh3YoPNCc71JZ7fiJ7BFaXcq7cHaMLf6DuFz3F5yrEitsU7MJUHcqR8dTYtwBYwWJn9wjbK1BCRZ8vYJhaD4yN"
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
