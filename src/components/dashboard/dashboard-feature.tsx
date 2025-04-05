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
    "3DM4VnnHP4JnJgp98GkyGWv7ZiHrVrhLKyi3HcSDbgQ5nPAHHRrtHPXwPXzvuy1RrwqMYBhpfpAxHNUotHSDvdEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gajCkXzsVqqTAgpRZZengbaNaJYTzmYDYxw32XkgntyRd6yQVDsj4XG55DXXJ8sNo5cCcrAVjVYbBgksDy6wBeX",
  "key1": "33emfR1dER6JPPwSsvM3nUSCVgPrLVKbbQmoYPWnLfKRZvwN5DwczSSNNdpZvjGTq47rjpKCPuVKiDF9AHp6kaEW",
  "key2": "wafPwPLzhAvZ5dB79aw4sELdWejdJUhemAGtSUL4q2sKALz2wwz6AiXY3N7eNZiKd4bacpPnc6RtrNYEX2p7Feb",
  "key3": "43LdUqq6TuXdRjixp8nFxfe6MsAy5kgrXVWwaNrqouUsyehsVHta1gnbcghGAmUy8adoYsq1iLhMG8tmSYGXsrnw",
  "key4": "4PbV9DYsf972JHrarYANQQKXc1KjduHaRXPmgX3wmN5eRxapSLh6vXYtcXS5vqzfeQhYztpf4DgmJcdcmtG4HPTY",
  "key5": "3NxUnpHxaX2WHnisiNTGY79As5CuiLH7dzw1WrdTwTjCHoWStRxg47wMkzmgPgKjff2q9cWhZKaZDBrpGMDHv9AF",
  "key6": "AT2MaDxuyznAqiMsuDGWAoJnBSdXDFNBdhNqxsdwryDA4hrpc3Q8ZH9qUuJLrGDY2men3gM7SwCut7pHNLxQmGm",
  "key7": "4snvos4VjSo8uVkyWGVadzSBsFbpvYoAKtAEpvFaLJoHyhKpqTxp9dsBcHwurGmjcMY9anLGbaQL4BzZwRonuiML",
  "key8": "sVFBeGCxNH3mPKmXW97W37do2VQ1xYNzsKUN1keThrmrwUXUCoNSCtUYCf4sNqijhE8skxYhGQHR9JFiuymSVFn",
  "key9": "2qK5NaSJ94apYoQTF56MGD1hbzBZmbbaDzbQJQUzVAX4RdNLavCj8s3c33UeN86bHtZR3bhHkKsSEdRFH2JUR8ak",
  "key10": "9ovYRbfxAYHqobRPjqdQEGtX2rxnVEZx7n6U7C8jC5RuiwDYQKxgtakVsCxDMwN8DpmDxfBLHhd73NqL54niZjH",
  "key11": "5W2P9eLMnmkuvhuPtFE1f2mKorrcrDYGSXwJjKZsxJ5giF4JYqX1pV3EerEpdUCx3gMC2j35Ajt6sGe1smthmr38",
  "key12": "5ocxtZztg3jJ1wWrns6erfgry5XB2zJ1MPvhP7GbJpgDvgsDzBTCY4c1FpHaNadd8wrARGPnEp57b936Rr5UMmzh",
  "key13": "w6EuDiuzY2wmJouezFvxDsEdfwRi3ZbrCV7xpEebauKJixXMqvHxRc6P2EE9PQVtdkuMsYXaJN5gtgMsuX2jSh4",
  "key14": "64vRwmL3z3wXjHRy69yZUgow4jXuAHfTQyNCNji3THTXbLk2dNz2vLAFuSK6eQ9i9DRj3oX9uuVeKFQXwgpy1xaz",
  "key15": "5KKpZDq9E5Ac5Au2nNDs24bn7GkMF1mnSfVx3D8KGJrrx6SGQKKeSYTxotaCj6iRDfi6oMvgPPg8SyuCxziabrjJ",
  "key16": "4ukno1n97ko5sx6RGuYpxhL1PynyKk3BxSq8WEAg5d9SVCqzfycmcTUYJp2GGk5jRuxATuzeWjNWj998oHFLuij2",
  "key17": "5LJjCXum9qto2HukHEbnZtjotW5nmbZUuhw5S12phAYipSiweL2HLWepzkektytJ3heLBgr5Pjsyow7UEJhzTL8d",
  "key18": "RSH8CyoD97wbLRn6BccohebZNb4JKXxtAQLCT2b1taSba89HTEgehTXzYhpdK9RDXjEEZ3Q9jv5zXCKvUiLdrUi",
  "key19": "2LZRu5NXBdQ1QUcUgw97TWHt16sk557PbZGDTZgJ9xyun9VQzdfgVBEFhfbFtFc9ygBmD9abmckgAovcVaBbfD4N",
  "key20": "8bkkH643BSF24uqvHjF5j6Y5LpZeaywmX7RE6mmJywCzUk1PfgaaaU2pgUyiKPqV9kvDVXnbf6rk45YW1aFgMYT",
  "key21": "2ovmWyLrTQKTWdWLFhJyD4HXf7nnoaWaGHenhsLQqC4P636eS9Air8BLgi336xNuH3N9mHp4zmak5weX23SibFE8",
  "key22": "YKrJdzjoUo4rWmNtZLNpRoJX49RaPdM8QPcXb7DyCBNXq6WKpkC4hWuDV1bamm1WpkXguwqYufLa2JqYWqEk8GC",
  "key23": "QiD9HvFYm81z4ZZL7HgpaPLc7ucidpfy3gpFAqWBg5XF8PwimunajirFtWjf8XFhw822vi5U3ko5Tdg1s65BpZ1",
  "key24": "GU6aBKRgxgbe78ukgGnUU8FsdR7XKRbkb144se8r2ZGAyUPf7bHnHcyM1jeTCp6dNiyPbFfA6Vc9ue7U7sJnaDM",
  "key25": "2uvWdsvfdVavYNCc3JLBJ6ENicVcREtyticdH1wTtG7wDKCatB1MuyReGfZr3miZ1eGL4CqTDA8nveAme1rjQcu4",
  "key26": "5zCfd1xbWEJBpRsJ9U2VRBLU39qJXzVQbTR4cZSjLH5Un3HiwbvUAs9fpeGMLMTRQbbWdoCLZnMtXCksA5tw5Vng",
  "key27": "4engVgwNkvLEFXsZWKfFgoF3QW5wp9GsN2nXuGgooVkmo2ghVdS7LoXXm7ZJBUjJte2K86euh58F2zVwx3PHL5Ar",
  "key28": "5GcR2z9Yutuw7Jm1Q4v2Pq5eho3GxxjSLKAZ1XUDcXKDfo5ztyBqcad5crBHCSsgoQrk2YKbn2FYrMZbixfXm6qX",
  "key29": "3VTXr8kEJyz5rpC66Kd71DrRb5rKTApPci295Q17DWThWBRs85M9npdNQCWyt7tJw54RGaenSxWLMhECcdJY6ny2",
  "key30": "2ot2BLrzN9mZ1rT9giZRBrHqu5jHoH7Sm4da65ktmnRtCGJCiURjWo7r6mN2aKArHDNPYPosdFLvo4oPUDD33vn8",
  "key31": "2q1uMn4ds3T8UqfFKUDhmT95oiRabYmTdLikHzR63ALDPDuYVDmS58fkjgFmGqvjufnM11LRQSbW9iCbmkzJ7JwA",
  "key32": "3bXGMEqF51mgoyXNvQbdN4BG9h7ucNDecPNQcFVaYAd2wjnijWkAPkrx3w22S2nrcv5wRrZM5Vm6DR8Pr5cc5qmc",
  "key33": "v1aa3HAFvd36zNMxgKRh1qPDRamM4JwBCp3m44id72CCPGyeR7QZVR55dfGLbfFNoEFB7Rx444KJz23sKw1NECm",
  "key34": "4bGkafCWWxacZ5NsLqNXgMC7uQWgX8fQ8LWWTuirjRR6NzEiTGSEDeHP18BkWxnoNk35de8naycdTqoV8waSrt8",
  "key35": "3fU8ySKxctvzHe7zrhZrSyzxeR8P1X7htwwzDRH1B96uP8sfa2v78TmCfcZ43YFjG31J6QHvLnimn4T7GxAjQYKM",
  "key36": "4Po6Lj5tWsUGw2emnqdk7GW3CbDSmTLBb4TmsR7DPh3CUxBUtgCpUE3UngLDsQV8uN7Bcinykg3cjwbvqAhiz7pK",
  "key37": "5otTB8dyZtH3D4TjrCWofxEu7FFf2S2iacKq1bcr61ibARJrr85xp6VkhyeLczs741jTFk7TxkgANx7mWvFjgGJh",
  "key38": "4RtJH2JDSH1PRfHikf1to2S56MRXSguRxgQK9gqsZxTTeRnTi822jkv9neAmk3WsFVbddv8tCXSKNG1rVmRkeNUR",
  "key39": "5N2h9MSnzdBTjTZR14gzfYTWiUNxmAF5mfwBccX4T3SJvCfd7JZFhZ9qNY31AkuQVs6ytLjPE9Dw2UmdQ5YBykS9"
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
