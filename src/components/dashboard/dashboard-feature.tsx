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
    "3ZXz2DuiXz8Rrj3Yd9Kqq4wEX1CuavQbaj9q8m3xD4y5CvCT9AsTTY6VXUjjd8XMehv5ewP2DPud869P9hfY9Jws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fk3xZB9QvNNq8DWmfX7YUiEBBYSBaXvT1xwSeNZU9FiCoAUbWWgSL3kbSZHVo4JAve7WfwQyuZRUFfPW4Ky8M8K",
  "key1": "3duyHaZAkTdzrDdBcy63HRAom1CFdtmqJVSXLgsaz2VCuFFbyxTFadWcBU1t376YGvw4MT46RdEfBUfbwWaWrHQY",
  "key2": "4Gnu2coCP9zxRkWVukKP83ubPjZVC3yPD2MCAszpuFX6Mi9insE1GqXchhPXPPH4p7HHtsVcKqutbsDjgtghh8uf",
  "key3": "2776BJRtAMohsxVxNtSBvumVPXcR4oTAeLYTdFKQEwhgnLQyteLsHrWJY5DGg3KCx3Qi1dCCCczUADY6wrTqjXAF",
  "key4": "4zfuUzZ8RWo28RUALYmPwPEAsWQWzu7GSfdTo6PwzXBe3VJ4k9gdA2aWgLrVStdKkwKaFL4jb6eMekP4yBsdNwZF",
  "key5": "3NZnqwZgspJjNvonPWaBLB8q6pCSzozk2SUD6oq1V6x4Msabdds22kFRqHkUq1Bn9jySMexzuNH3tN28ud3rfK3s",
  "key6": "4gz8rjn1J4eDCECJ7zJubedZ7ipAacRNBEFv17DpjCx3rkLfruUTp1fXiyXSGsnfNTxSnUBEHkJjFGYmsPBV6Z42",
  "key7": "5H5QCJr9s6ZZX2zYoq8DdwuZHb6NFEfVsa9B8Z1ceLa5RDiEfhxqmzgAyjRqL7qtca13hayF3YhwBQGMgynsL1Bw",
  "key8": "5vi1yUmTs7vE5zR714mivaooFGprexTzV5LLfois3qsFhRzGVNYhLnqfFvn4ENbo7a2TSzx2PQ6QRSGDXx6dMEAW",
  "key9": "26aUuwZgQGe9ucsbKozn3UGAqNFVfg9dPEb9cGm5otrufRySuBHU7wNNicme8CdwWHqHkje2XpekH2e1po7qpg3c",
  "key10": "4A1oqqxSfba7xkC5cTRL8C88sgLAcSS9NQZxQtekLmb95JVZhpYn1rs3dmSZrHpNJSb3yhqLpHUxdmnHBGs1rQTV",
  "key11": "2a8gQJ4c5SJGHPmiizqRFyFeqZLeBPQGSFsk3ddmKp2Q11xnn719z7n6aJKv5EDQ3juTEZkj2A3V9C6bMtLQwKvC",
  "key12": "3vA8M7Z6Fa65WCSoF5f3nXaGXggTfrqqfBiZZAvCtrckk3HzUQTXekWNzaZSbDg5gj9bjuus7xteGXQAZzSaCF3N",
  "key13": "2U52ezFyEEWJre3UZsoJ6a9QVS55vNx9M4oL3ETY5WMKBVx9JXEx7zSvab8wK6NoTHxjRpTrEyTd1swnCj4owbLd",
  "key14": "3F2A35wELcVPTdMUcoaV256Dhix3xD98ur7UT4szV3rJYQFB7Kt3m1LVi1UsET9Zpa5s4G2Qt9SQ6QPNA7ur18no",
  "key15": "2b2979NMKyTBzRHQrpyqLiwatz4be3NvAbQNEP83WnQWrfmKRmhRCkYNBEbfg6JdHXpRbRRcoSjs9ntbuZqkmgAL",
  "key16": "4wXi55iLxJPG8kDe2oyWLxCwRx7uu81DNsg987PuddT46kcHvAiGmDBuc1k68b7jbg2q5kG3aVTazDjnraj26Yrc",
  "key17": "3RJ7wvGk7ExMKLU3vrTcJhRqJ9Pc2AsLozKE6H1Vcwk9HCc6Q4mbaCHLjz99z8dSGnn7wyKmqXN37wNQrQQXcbqR",
  "key18": "47EQmF6jHyCG4greoctQFjGNWGNJDKTgTmKiWooSTqSL6G1KX2xPP2A6NfRySw39zt412wb8s7VBdMae2Z22rMNF",
  "key19": "3krBQWyDH6YyBpcDsg2MBSshfigz39n6mts6Cfzxmo4m65tBN24Q1pUWnSfVKcfb4cJk3sd3uokGMcc2nNdNdaVH",
  "key20": "4hxLWdApZNMVXngw7jjaRXDY3hNYSs9mavv4mSeMSQnowMCcoA8URN9PBufaFDVd2KPH3gE8FoJjg7t6KigkVbmw",
  "key21": "2yjESkLiH2AGbHXYAAXh9bkmxxZ7M6urs4TbDgPEYjkVahYvMqYYTr99JEVG5wGiCD2LpygToDDGFv1A6z2HDERQ",
  "key22": "ZwgRB3kKZ416k6vYZ1eYihAUZgSR5d9dZq8fpqkFBh4RMvDNpGXCWzSUCfYhWeVxEM43BREzHnfPU54ZfdAi5DC",
  "key23": "5FFgAYpxtK4cRy2KJiTpRDxSKFTHi9FuRmkSXShY1nvWRPCFuJSUTDvZrHYD9RDZ8i2vrjCrSyp88ahGz8PzzUJd",
  "key24": "B6jN2eJLxxis5oWRYKaXgWtSgrQ7nD8iuFNLHx21Ur1qgdJSajTUTQpCJoibaKqQYHBcWeXUPr5Px8qixRzWUFX",
  "key25": "SCERridk8XRGeS8TKLJKRSYfxEEhT7KkQ28zLVSBxe9SmVDEZkhGD4jeuxgxJYwEdUkhqT5ByywZfAj9dzH97Zx",
  "key26": "5YZ3B4M6fqy7RernAz686cgNkh1hsEEnVNV3czMACyUr1TnpqrKgorpHkVw7r46me4MAMxjLttQ3qEMUDMHCztMB",
  "key27": "4x9MPmeBsztq4iu27FY1uqQ3y3pRBsnqb6HCVQvcvd6KcKTLDf1oFnC85E4hZikos1C5iXqfzxAoGbtrdX2zG34u",
  "key28": "54pbDPKYdHyHpwhjAV7v1rBQEmDeUYvN3DHbPKAJ992HRVcvEhTmiDfSnUZEsirhiTYYWqUUoA7YpdVdHUHwRqP7",
  "key29": "5Ywg7hAbMJAfSSYVifmQ8kDC31oExGdYwfuWc3F173XY5DFsvGQHUcgikbyVf2EfD9mf8A7FLqE6w2vQeDXnTEaL",
  "key30": "5zh9zWAU4XeoT7GvStRMcNcHg6zrgi4MDzFmaP89QiWFVGW22nXTV5PgdD7zzqq5JcdaqBQTBYD9skaG69a75cZq",
  "key31": "2aP95wk7gid4QM8LKsypL1bb8pqmMvogPH1jXtMk21mUDbiHfEfogMK4q88jN3RB2aZrDj36nfUEA1Wnjyc6utBm",
  "key32": "4V9Ykin1c9vdJGJq4PdUf1omFj7vtGckhhN8cbJuSqD3p33anecXcJAAknMnyGVESbpZYt4BQ7FUKKb64AQ21Lup",
  "key33": "4ia1SkurMPYGxC3V9FQwFMn4oNi5fu6SpqpMK3aRT1xDfQsakxb78cQTnS8t8xuqjcSXVJxEGMyM7VaBCVadAj9M",
  "key34": "3gSNFKt4GhgpGxj8Y498SavqsCzyq64EaKNSLTzgR1Cynr6hrgDEzzWp67FyNwGf9QUcVjt6d3Kt1ZJcy5cscZLs",
  "key35": "2LWbhdxJLUmnUquHuaXcd4H4yevRMfKo1KBTqJnmL5we2PVBJqVnUdZwKmQpfVe4JTLVdf8EL3gF7k19ASQj7SZu",
  "key36": "2NhMa2Pk8DjGn3mRwuotAN5RjDTrwWcGBpGEKmwQKeD4QHPPtuaTxjjPqQzHVSZut8a9yCKFqReWWVgb9DGcHXww",
  "key37": "45eD1cACyfSRJvAKjTBni2EzSnwfxRT4TtUnnsygXezRNqrTaWocG4FML8UKFYqfoc9zWAPhzLGvcbH4D5Cv5sCA",
  "key38": "3eSCS1DtTSxhjiq7hbLsE41rYbVodi5MYjGsNVawVGsjGXRFodYxa7D7AVLsp4XLMMK4cnhy8T5eznVVKjjdwpcL",
  "key39": "EVidNyvtUodgeQhqSGpq3CvMYoGyyLJxcCAjhpZwre5yPZ4RaQjujqMiSkYTpr1g3VBm9d7Xsuy2t8wGnEhcMMY",
  "key40": "3zJMifQj7cQkNd2pHgNaj7fsDLGHeDLcnRn4ixT7XQ82n4ppqbU9T95eXLeAJ6nFNpGHnXRuCQZ8rPdCZJ2884Rt",
  "key41": "MvEf36rTB9B8YntbVgUJttcHmhK7mTquYXADgwjgyN7Mf8oeTEsqiteWNPf3XJgU4AErNQUouNNS5cis6qttcEK",
  "key42": "4J8g1DMLCXhTuPN9tT8TeTH1PGRAnMJWeJBBaL6C8znKauwFAJCfkp98ky1613oP8V2QLA5z1GwKAHBytCAwQxGC",
  "key43": "5d7jSvgqQWv82sb9GMGpggqkGA71Mm2yMQrkhHEddhBhQYM9AteUMU5vhq1eoeyCVZFtPfubXjksh7jGVofNcURW",
  "key44": "5zNwn1JRkA78SeGYDpAiqXvcSiEbx9YwJFZrSGBeyPMAkuEx46FZvcJeXjpDtCvNnek9xeZtqHy6Yahwv7qS93PB",
  "key45": "4VspcozpmSjSYMsrWd2Tq5w1zbZHUAcxWFr4KEHTU1caQy13tKRz5xwfUGFjDuA2idVEEBSTZq1k2cFCnJFEyweH",
  "key46": "9Gw9VfJB9Keq3mh8wUjdvJ8Gu4oCu9vD15m5NC4gzqnzdgLybd3UnnF3CSH9shj8vSfWgSDVabN7TtG5R36VA8a",
  "key47": "5ziamLxRPzAuEYwuQsSkSRsdogMnpfrFFkPwesi1PLLz4FtsnMv2LcgajgSB7F9shTPebtschuCLVHcBSezwfuKZ",
  "key48": "58k37UTJ3BLyJ1FP6942ZvJpxAd2QhnrebuvPd24SZixSUEUZRb1yZTeDxTzLozwJcgmh1iCt2exMPWVytJRQrz",
  "key49": "DmAaYpZG77xduG9ok9Yc1SfgPGt89DKXcrrMrneZ8tUGBeWFQrCF9mVgoYGqYn5Nm8rNbViwqd3KeFk2GftRrWE"
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
