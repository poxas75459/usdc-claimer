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
    "5uZyD3j3ru2Sivi58oj2DgfZ9Eex6VmMS3VQhPp6yoru5z6qe1B38fgXRAGyt8i5MXfuye1c2vSSpQHTcsbdf7jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnM5sgLG6Y945yjzqz1JT8nAs5tqKLUPxwAt1d2TpgbHfB9sCkgojopcAAxf5fjqm4EqjX1VXtWHsYjNZFbNfXJ",
  "key1": "3NgPtFm1dw7YikmZJh3TdKYfPBZ4DW24Tcx2WRPYtHmQuE1EH29B9GnKFf4dVVcTpLSFngLq1gCCoX5QXoS4PBAa",
  "key2": "3qdZLFbiUiJn7gcFwmFCuE8rZxQEnFkQwY7fwivezwvuEHkMMz7WuxpBEauS65rBPaS8RWSaX6vJr6TY7rrzqB8m",
  "key3": "bGKePASDpWvqP7i2hmTnCyce98yNjCV5gVv2XU49E3m9t1hZqiRUTTRGF29ocYkbcet5s1QhpbcQGG8sANkexTi",
  "key4": "3bVMXqAwSozmdBmYNFqMK1ywC6tVsCXsV7KaaETxAUrMgjRfFFD8QdzPht4GapE5e3EM1kyShrp8WdpJHGTVncN6",
  "key5": "515Sc6M5SDB1C46GCzKYLwmVZfNRWyhsEg1gaspKb2b5mmxcVrE5Kc82fzYJEx3ZwSmAnF9ScL3MMNhDe5uswft7",
  "key6": "5wB5bwakT39KNst21V92u8pncDXzvnSL58x5S7TRtGFmK6hcckdfQ1s6RBrgnK1vRHAuDGDEifYzHguESDwioT6C",
  "key7": "3t1dHpCxMHF7Uj9Cd3k2CMcgmW8phheo14hAv9VkLDdNWcDxT4rAKJXAdbswvMUe8cmeAQueifj8EBCeNsjms9aZ",
  "key8": "D75Spy6oxdUD8DP94VZyeuMKMXgioxDQXyuHtYPVjEifGPB5P3KGT1cqUKLpcpCoFuBibWpeSujomKo5hipEXs6",
  "key9": "cw3ag8Nv2j8ojS5ypYnFeG4N4jh5YETisHvEdZyJVt4J9doa3aehNtaD6XNaoXXGSus22GNxrjosRzDdWtgghyW",
  "key10": "2cB1UrkFYSNn9WGwLdcbxvzEELsAj5E7X7Wzpajf9HJ2F7bas3Jb4xyEK31bQn4Zz13YndGY81abo5JQn4B91yCx",
  "key11": "FxWHDUy7uSHieWGkiABg1csLKZd8oF262FpUZnGZEc61AtMgPos8ge3eG6P7h6UzNhppdUDG3hWuLwQkCm5zEQM",
  "key12": "2AssYdYwitPUq1BxVpYKbqk7bsP2JsPTobczu27gsFjawhkHhaBq23nYUZszWSiZWbWgx8FpdUf4FzMUDiYhHQQh",
  "key13": "619DGTxcvwisLi978CY44gFtdmx7wRfXVo7Hqxw6J4kdvQbsXnofGZH64s7MEywGDrvS4GsDMz4Anv4ZxeQ3pWy4",
  "key14": "4C4inqZGVK3B15iTBy6oznMR8QXJHQg4VQYzinm8He2gL5Ev6yS4C4UbXCTwnYAUSB2DUQeNWhVy48bEGevLPzqD",
  "key15": "iCchYy31GDRai2zVV3DUpN1GBbrQAcnz76svnKAFubZSXB8GNxTfgDUQxsbuKqcYZR15ypJPpgxvJMmwuNS7V6H",
  "key16": "5BNmQP3xktvoBCgsPHURQQRyx8dqghtK5GpqbpP1v19bXbbdrHQ2WKzLH21vB35vQ49Q8aNFPJB27kzDSAyioeiT",
  "key17": "i7m6w8xnQAFH1VWvjeFhvWogCE1RnquYztE7cYp2bgLyxezatRGWGgVgpYNzmb4yf1c44pdDKhDBoi5arDq6PDt",
  "key18": "2H99pJhtG71hqCKyiw5vyUhyhnjcHu5NMcMX2JNz9fJaALB1beWkw9zo2gijoaCxf5vyBC3qimiw5s7mYMov6KEr",
  "key19": "3NM73Mn2UStCPSYCXmMMt2kCSraFK2YhAc3bTYqKAHMMzLSYjJPSjP1NSrJtVXtTaDyAMk6dkqh12phoUsPgCEQ6",
  "key20": "4uzFESjmnwsxVNkjPGH6EsQAnHDUJRyzwVx8zHnMheozLRQFsaZAh2QzvhbC1v3TTaN2k8SeUR5vYFHgGKDJ892U",
  "key21": "54pi25rFhyfJuqkTFfRADZ2QvdcWTewdKMezHrAurivnBTp8RuoBazUnFK1iCREGcc3DhVSa3HWZUKwQfXztwZ24",
  "key22": "upMVUSD4JkdBN8RPk5tBeTAqVpK1h8twDpjGQZBJF4PJSikjS9RCuuMhcu6HpbvCHhnYgjK2tJAWSay8ww2uDyP",
  "key23": "2iBGd2oVMzpzw2hea3kiyVRLUtj6pyCEhruFrHzjh8QaZ2mrbpkxzLy6h15xXMEQPJjs4jo93k3GDFnDZVdxy2jJ",
  "key24": "58GqtbNBQzt1xcydmHSmjWUEmZXhu4MmPLWYg6qmKadsotaENVRjH6Yu8MX4L3AdTE4xKLdVp5EfbQSv5MEVJS4J",
  "key25": "3MWmcThdyNzYZUubDkX6txVfrz7qj8kKYZpFK2bNok1RjMdWJwGqWSjTxmMsvKACwvnRK9Z9GUhoak9kcVBJmcAD",
  "key26": "2A4EeP5RnttvuxWHvwDxPPqf9oZk9aPKkU4FzXvM8QiPqb9azAV8CAkGaKK9xQXoTHhjaBH4TfeuVKk6cipmqhfR",
  "key27": "3ka9EYTtDEhxcL7vpzpyY7PzWtgUpgHrunkGyLo6VDBuJ1VyhrENQnYFqsfZ3BkUryqs6KpeutHoWifnP9Nh9MuN",
  "key28": "3y7VqHiRAzLYxoa71HVasTwUb99Vi5YrnitoXsQp8e7yXc6pme88cTJkdAiKcwXTh6SBgpKL3RPd3BaJExV2hBHY",
  "key29": "mcvYPN5fkcc5EfxmGFioQDNQqs1cmMhJbne1CEBmAQ4Px6JVancKmLHPqzr92GPXYaDfhHFPUXBsjbThfoskvEa",
  "key30": "33zcggvPGii79xTFYfbdREkfqoeHZkPS7mH371qMCBqkcu2fJu3Z2gUyw677rrikqxQAQ8bmAQh96yBrudsaxKpk",
  "key31": "5i75ixJN2jvRfjpTTLNuXknaK3mWUjBYipHjRFfzQ8f5rRtuCFxJPUZvrEpzVkiYDQy472PhZn6P3tkcBhT6ZZYn",
  "key32": "3FUUuQFDCFM2QbuTvuAcMgXmMz9TxEJxr6RqPH6JfaBGBHJf91x45ULYkr38oTU2K1MH2JN3QzojoFmjkNK8bxMK",
  "key33": "2D6Km3M8y7vvAAcHErWEizNHiWavgHSzivKpH21FXK9GhVs6GvWb7N1ccqq9q2qtmYuB67FhMn4c2bLC3yKEQgYa",
  "key34": "4KYAtffSMpE8HsuYxDXLRWkACXZRgjgLoPeSkYzyJW4g4J7pJgyT1DCw2c8jyzqgPZ9NzsHY8jw6RaRtxXgWkLw5",
  "key35": "2spaBDoLpXH5KUDsmPyVxyV4c6hB7d6hjgJJLP7HPTUyqYDXwhcxMU3dpTMS1NLCq155yjkCAHHM9gbGckzKufBv",
  "key36": "2aaJww9oHaWeamVrfXa5q6oQZ5jdFLqyTdkG1eEGsCNrYsmhYpDVo9S2GLbhxk4qFnNuJJC6Yrsb5Ww9cKkzgEsE",
  "key37": "5zN9Ldap3LjtRyiUwmWbD9KbZhLUr6DaZibnbLd5sonac9TcZfHmse9CBH4MRuzUMjm1S1nq6yvNB9u9UG7Sdy9w",
  "key38": "3CTKPyowGgJDWogbsmS6LcYmLGeN8PZCPLTHYbxgyj1EYDp1o6TwcbjgXwEZMQX3LQAruCTerJR7uY3bCgzJCnrR",
  "key39": "5Fsb6Do9fhE96r5QvJkUJAncjVaLiSSwVF6RNKE2j36SjrnHvw1gjDLPxtMeaHQEfd1cW6ydDbtYkzQ7fyeWTGky",
  "key40": "45fnxWKvkwJUQPyBQBc7NRnuD1DSDmVJQ8Lcbsa2gQbPYDbMDopTcrd8mDwV3v1ndTghQ1mMW71ByxVK9gNYzu1o",
  "key41": "2gXFsrMkQruntUtv8cye47K6HKvdqNVtPX1cCLgcAcDHSSfhTuvxUbbTDnK7JEwq1AjoodZeY6cu4gfp2CtRvCaV",
  "key42": "2DR9MrzVyRjA38fVSBHjHCxagNGVWiyD4WnGnzWA6xzNzZnzP3nVxr1o7rAvRSUanxZstxG8bfPDysg92NVJMUeF",
  "key43": "2EKbieTtRqCszhJf2LsPbUGQV3RuRM2AeFGqnspFqxE5WE661RbERAexn4D1X8eRWt6ZGxWc8yqkcug3qLN63p75",
  "key44": "4TjSftfUvAkjNuUDWFbAsYz1TEhkMzTs7MRhQKuGKvC6CzWji3yMtUZGFaLfhTT1T3buTHFnjybnMmz7qCJXMShg",
  "key45": "2yURdEfQrkwi1dtWwfQtbNyDSyi8S2meTLT7VYuDdT25rkQkHdY9dpPjV36Qcxf3ZtsiJFppLwEFztYYEQ62XzZv",
  "key46": "2pRbm5pKTLtqHeNn6E4L3eAUdDMYXc4inZc4kTpLrSVybNMCkrXG4j3vuNjbeQfxmcaUfqsVqHgz1FM2ooE8WJSb",
  "key47": "2DXzZ1KK2jhQ9BHxU7LyCSR54pKHUFeCRe8DPiz4J5Py8w5Cr9kEvTs6vsdRoy2RgE9GWTGpkitVFa3x1wnXtmUd"
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
