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
    "62QprHXeudQmazH7wHE4Nd1EZx8PMiMhUhmzskq61ACvpd4mN96TJ36VrofNTuT3oJm3sPNBkZ4rAJFHbntrL8gZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWfAt2LqW8YXzX8uNQ38hirvMNbt6VGxcKN7JTCkamsija34oshzovehXzxCXxzzUEQgfsh5bcUFr8wLfAXGckr",
  "key1": "4Aj6Nr9Qw89NnPKaLxHbMK9UitceWt6AiJhPF9Hvne3pYupNEAQpnodiNfY98HRJ33jpumnYeQAGvZ1hWKM42EEQ",
  "key2": "eD2XLjwQfKmpActrKWPdXXFvZpk7mjGQEkrBrh4DjBerHuX5xY8Tnno2B8vWBV8um24ia6k7BKA4hntTPXywVJZ",
  "key3": "27fhFS45g1E8xoz3caKc8MszEp9bj5PXEWcvim1aWsd3WrM5PbrAzVTFpU9sbtPyPhAXfaK72ZhPJv1kogSqSoeT",
  "key4": "ztakTdVeKyfy5WjVtGTmAfmh9tNMWavGnMfxwMBLPJNX8VYrYdZYWhC8tE98bGjx16XA6D3naGZosUcdBQL5nWi",
  "key5": "2wnHRFdQj79d7qRJuAQrk6xvcJ7BV47LWj2oRZSXWhx9FpSVGPsBsrE5ZXVN3ATkdrTf78yfZetGfjNEiEVXiM1a",
  "key6": "53iWKUZhWhk4Hh8dtQhtmbeDkWfvXxzc61ptumQBVSRofg6S74Y62XPJdaqo9rushAg84A2GDNNzh4E51LH2mjRf",
  "key7": "5CcPsoh9cePKQjN7yiJisv1bQ1c2kcNpzJmZxyFv8qs8i9Pa9i8syySVETQ1Lu9n2bS21ff8d9ZYzABGnH1jPsHt",
  "key8": "2VfvZWDfwZV52zdCHF4LDTcsGsNuZNo9bQEbPdroA74gjVjCNoAJrK6tWwm8JrRymfQbFYPojPbbDXuHdJTZBLHz",
  "key9": "5H48we1yn8SjQGXz5KAz9fHk9TjHzWUG5TpXDCkcMdcoe3AWsNcbtLsx1yXjsyXza24sBmyuFSez4HgCi638Xi8y",
  "key10": "3T1rUtiZb9YSao1NrrnoQkc8fGoE9BSaoaRqNicbbzL92RDjhfhAkK4BacPo5sSPwBw2EhiREqhSvW65tZJzVzY9",
  "key11": "5XZvWDNcVPr6jFFkEe3fCPeYqVwYQxdafgoGaArDHztgSaR8hswLQ97ckmekgC9Nd2A1WDzVdAMkUAPjLdpx75gJ",
  "key12": "56MWUepiz1eJxsKkMN2eCjhZq4N56YnJ15T8xA7kbPZ4STZuzTGr9rBEybTi3NpEpZM2JTAaPmNA5wvcwGjzH8VL",
  "key13": "3b6xfkx3CDVFSe2vYTokqCdNEtfCxev8d2Yg1bd56Q8XKFFSmkVh7Bp71mo6vSbSnsBgkHrRdKF6ghsTzeT3Cwr2",
  "key14": "3Sx9Qpbkg3GP76dMzhCaZxu52qmpNmNWGogUE925Lnk1iwEKvkogPPBB8vseQZhfYC2sDS5Bz4ed4Z3Tards7c3h",
  "key15": "65nrsJHmCXMc39pZXFpNHo58qds17E7hpH7ZCoLTZai35FKhJkbnZ1Qc4FjsE2wYXsgV3cuvMtn2AjeNNNtdtyQM",
  "key16": "2QE2GyEQ5wH52um56LYcCgWjU1BT2d7nJ9w7sjEv4uba6a7nZydS34KAYEcUWL9fiuPPt4spkGGd65Ce1yvbfx5E",
  "key17": "4my7mRWh9jPvDMErFBgpjPCP2vSfS3idDwVaVkw839SZm3AHimdvQS8ULysnbirXn6thA9hufTF8YMdphGBWc81d",
  "key18": "5e3s1G9Lc98f2JUe7LrUue7Yd55Cx85UbBWx52w56wuXwutLh5iCbYz8B8WstLqpoPXWgtCQ6fkkxxTjtppT9EQ9",
  "key19": "X7zdtE3Y39Jxi3KYuFs1WoYDSVdGBCrubCAkdPgVMnyp2JwjieQoWFobxnbWRVm72h16iW8AziY1SBdeydhx2yq",
  "key20": "XcgoN7VpGudP3aJaWudxbdJZUf5rwENHaXNjbUbsaBHF4ssqJ7AJ9BJLiMrmaXZe3hAVPNfPVut8MUE4wxrKHwZ",
  "key21": "4Bb9U1HTcD48wMSNHJiKGcdvv1acQqSjvUYhao4KPHDf5wAqT185Z1TrhhY4cV1E9DNytMz7qNUzwUwZ5ADuxe9E",
  "key22": "5uKcuDsLY57qoyhD3baejEL4NEV29yiqGMXeMYpyUdrEfTovnzg2XQzYr6gdwh4GBv4gr4K2CZe3cEyeCa6ZZWEr",
  "key23": "4Xw2HgtcNYkGyHFP4Zt4DXP7J4h6xehvsSZDhUaVeqioB8JvjFexExHXKZd7Nb3GFCyyxUqFegD8pPNdJnMNzdM4",
  "key24": "afd5mhexsDr5t4JSHV36NqPj6uVMwxuPanpGxzkCKrDGWhU7GPsVjizLfERx9jn9mKvHmFwd4motm9gopBB3S8p",
  "key25": "3i5K5DU4Dkd1TpHhGmBr1KWL5hZ59MpGK3estKomoWxoCMNZwEPrjVxc6LtweEg6ZHqMcsrmVXv1tyYJSUpCFczQ",
  "key26": "55FeN9pHYVuDWBDQDRmTDDbheKG6t4ULtJsS5UmSBYeftc5X3YZLQRdoG1kisYVaSoK3T2rNVCvajCXP6WNV7Uvt",
  "key27": "31Xi9J33g5Sq3g5JSoJcC2je6SWrA7ZrXFDT5K6PzSpCWignGhtBgKzWL5TpdFRNWvd8RjRBquLoepP75h64dFTw",
  "key28": "2jcdKU9AKB7FkLsex6JiuAxJXsTcTwEcmegUaiKwAkxXvCfyYMpWxz8nieYAAmvw5ZhS2Me2pbawzWo1QQ1LhjaR",
  "key29": "3s5NkNsgJKj3d1GC6A9kdy276Q83WzD2Lr9H5sEsgY1cUt6AkFVPLvqHoA98ZsV7m9oCZPwTLsWCHUoiGkuCwLVM",
  "key30": "5hji8w5j9D3mVH74sqDCQZUGC5xcXniDiSK8oZzYjgQcqsvEfrZQrth3S1FYrkYDg71pMfrXwD4sirpUEVhedkKg",
  "key31": "4ntSVRxQzvvSH6bLaAf6vCyYn5EHVCgo895oM9QgYtnF9k9WF8U7k37EV4LGMDU1M5K93sZWhn9Frks4DDM13Hbn",
  "key32": "2QeFGXS7os6Av4c22nVRnWR4kztP2AVVSMTSJqUqjuGPGKM4jANEET89aS65UX9gfThbAJnbXefjKupfTAUTUqNJ",
  "key33": "3yzDud5gFd9o16j13ikUcyeqdHJ3gDjUvyW1YpK14yaY6R71dJwSrueTW7S5Y429EWp2A3gKVTXpUMnQwK6giHXx",
  "key34": "3LQZd3X3RynKwaP5QxK6JW2AkiTgQpXR5w7yXHtB81hdgVrQMrzgxKVjoRKwyiNuk24dtaJatyvct9rXUMrpSTJt",
  "key35": "2dxGQUktmfBgKskFk5aZULMNR4nz2fEe783rYBvrkyEgVkvooEp4KGggCeygJQNXaRBVV1FeAyTdc2D7x6jA7Hez",
  "key36": "5Wf7NrGyfd8ExCEbKrNzbFgqgpS1BZ1YECYuW5KWPkYxayx94TsNi3ZikjMbHraQAzDnNyfVjmVNyxYkSKzFBcEF",
  "key37": "2VL9jJH25dBapHvN2tiPXC9c858eQh15txkC9rRvum4hwtctanKvDNXqLpEL1ihx6eiQBzehsgcMKwcrTXGArR9h",
  "key38": "66qmUNvji8vNFwiwYwsxhJUpGtrdYbE6p5Jr6FGeqRheju4x5HPv7Xcx2pHXM5bkL62d3oYaKyYaWm5hbeh4HFx6",
  "key39": "5sMetJm3o5qUAib6nctjSUpaBteKeJBsKKogqS5JvFQisrT1Gg5mRZ2M7svLKZKDh356jKcMe8LtKEwkjbWZyfaD",
  "key40": "3CHf4kfDShJ4kdrC2LFmzPBQtpMoRMYPjK1fqp37TbjG4XnnSqtHjNceFoJdbSJR2bXyeSuZDSLYGed9P6w2j2gw",
  "key41": "5kmQCAt57jeh4mKjWUnXg8GXvEZnu3MCXjNU1Nt27iuqbJjfSd32FxB6hEUPmU48Kv6rwD4PNp7ksSpBAgxuhfn3",
  "key42": "2MbwiADCsBfqUd5szUgB832ZSsnxPgcJCS2jKB3TSqaQ8HJqyWTXoZfc35a3FXQnVhKh7rCSjf3czJucbcJaat1d",
  "key43": "5npdKVH1Ddac2zeGTmkpGQFgwnXN8csJMxKiYJwHGEZizPo4hMqJ6UYzH9SDiwMxafk1rVxuBuujBJzpoSUzJNXS",
  "key44": "2Mq2aZAkDsytt9yu1f6Texypcf6NE1MoMj3jR5w45BbkP5KzZwQjwJ47AaZ9vj7ou3hbG6C5fNPXwZtGvn7hCXdu",
  "key45": "RjsFeq6RJm6FcK6rsVGXXaQyNF1nNXeJL1j96MoPKPBg5SNng6UbGdZuzJv5RDcwSKyjqKUka2SmaAEoQtPrqxW"
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
