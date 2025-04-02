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
    "2xNBDBYV9vTumHWKD8WoNLZsvh3AqhwEGTCHjUf53GsxUg2GUYqt3WR5aRmUCMTnM32WC8ybCJTGxPVn7F11K4AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668Jubiapd4ZQ7p9fS3tDV6C5bcMo6CZW9Xi7DkB5zKd2xJjzr2hAyPdtye5CqrZdd5fpps4H75khjmyuVi4e252",
  "key1": "2ooYaQ4SQ1McQ9i7bLKv6HXcrFfjjtmD3JFFrWPMLJaFFAQ33NeFFpackkZ6gW2znfLJzFRVPhjB67VHgBURvHpx",
  "key2": "5qzcwiHME3rTQu3XFtmTWfCaEeCeGwgvq5i1eUoVNck2MhSEH2fVvdwuQuD8JuUBVvR9yuqbfPbBT82SwmcRA3iu",
  "key3": "3NzsMfF4Kg25Zgc6NerXE2FNfC75xPbsK7sGSgAEhhxHjM3jvyYSUPVN2iXEFiHdpBX2dtHQ2HzqMgXH3o1WWfqZ",
  "key4": "4JTS8KbrEB68nwQEn8KZwwh5sfrmvCY2Ge7ZWjH2jNEnjWHRfadXniXy2EMAqRShuhqXy14PK48nRdAfwCtxhX4Y",
  "key5": "4QwRtHRHf7YcAfXFQBxAeErikcp2nGgdeKJd7Zp1uYUMBpB2NHLSqwNFWw2m876UWW3TMqzxUU8HXBNMHTEi9Ce3",
  "key6": "5ViQY6kNRXSC44RAuZbjKyhzdM7TArv2BewJvqR7xQUiQZwKEEfanzDHLcGx4NLwYgjaVkb83kEuth38zEqTtje5",
  "key7": "29ZDsmMKvJa14dA6EWUVbxMwY8EeGm2Ssoom23rgccXDDWm3Nt5oTQC3sXeEHUT9DsKQVv7dZSoLdhxokJLmiv1h",
  "key8": "352XgTFJoEDR8dsc48MbqVGjijBBTthXsNtDwMVjLaydA15YebDSojFETZewqS37sp3x5s2FeSZsTemJeLa8x8io",
  "key9": "3RR44RGmWKNcjVxF4itXtq9VzNqSvKETB8Y5ZJMRwgDfnbHRVpcUkueApSVhVdShxE9gMTVAgYyLNrnHZXitu5pk",
  "key10": "5YaP5Rv3CNNWeWSfMHxEKJACWYgPrstMVXeZK2wF9EDn3WEgdiLxT7AnvzckK6oH3DjJBPY2QqMnC4so1mtdmoxP",
  "key11": "2e8WnyvHvvNQZaXy8ByKtcjzKAWeG6UVnuHmg3wk4L1NZhbvxAyAE4zNLsemeqAHwPGHFA7YHdeftYHdexjHXdJH",
  "key12": "4aWu621bhrGqMiaaM3tRyv24fBFo9RnbKw8GPVSYBfKF7WjGaSfUnXyGcw2FY94PaVgbjdNpmd6qb6gWCUjMWFx2",
  "key13": "3KhoTJjVe1rBrqPNFCxYwGX6nkoaafcRMu6c9CBXgZC3yHC8wmTJdL951sX482YF6AKucbZSqRYzYsh7BALT944f",
  "key14": "63N3fS41JAKK2iWUmpe82CoZyu5myw8NmPNhrVtuBMd2wzCDawRmD4kYRMrsbN4hRkYPHWjvB9yioshm7vRCygDU",
  "key15": "45bK7qC6pijc1cSX4RgqivyrFCvU63hhW5AovEibkFES9tDoQRAXZKRXuj4SYHE6mxx9oyQQXFGT2A6vZqC98N4Z",
  "key16": "2CVvLgY7KknMjPfqYRp2CYGHqSCBj7XMyPuydEpxJJdG4dShvWU7CpeynwnwRFH6n6MKk7KzeMSHCP1LRssrNGHF",
  "key17": "5NtDNrzM5Z5KadUte8V94udBabg7hQVPZdB1TEPFpAvnKZHRoCHvCDPUtMyrs1VfNcwC5LbwWYPGJzEsGHPvxYng",
  "key18": "49qPFNYEpH25J6C44HjLrGKiyyrx9SmBvTwTh5dSCsAkecsa1FQqm5N9Uy2mDG278dFPs6iTVuGRCJXJ8ZZ3TqP1",
  "key19": "4jg6ZwAwkjYPbULCJYHHwMJrNUpydBQj38QKBke9P327opJt6K8a5dmjxEGvpr57bJLzNX1HHxgcDLMaaA8Rm7AG",
  "key20": "48FBx5sDebL8cBsfNafcYEVdcDUcJXpHfpRjnkuwjaMR5khRDYwpYMxS74oBB5dKQjwKmiesTEJGreHu1TKiRUCD",
  "key21": "gSfHEKUz6haudkF6jgKm8irGMBAX4dN7rPmAKzhyao96k9iqiB82YqnvhdTGYinRDnohhjQK5nUZcPJ9N9m9mMK",
  "key22": "2EM1npcoMwU6Q7sYYNLXeAjnnXpgKd8YXHhT3w8YtB62T7p7R6xjvw9qpqYL1DHTQayPMADMSCeWkbv5wFuynU7Q",
  "key23": "67pEz4hGEu5zcx9eq2QvG8vassqR2KoubpdAg7w3C3nZyTPCVdggjb6gwarARG9xgiGJD154H9yXwsqczgn4wdyY",
  "key24": "4wBUwUfk3bvCnehqtLGTYYaDVDCRVugpWQGj9YDZefYK2DdEE6bhh1uGjWwNSar9hVT24X63G8zBrvuTaMWfYujd",
  "key25": "2A4EHYFcqZGhe3w4vcxhqvwoDFS2HgekZG4AML88Em3pYX8uhqEHgurUiR6MSc67oSRS6qTBeQLYQMtuFsbxTG6o",
  "key26": "5vThMtPUimSzZZcxBsazHJDmYrZDSwUbGp3Ynukuv1Vu3E6L3nVS6tw7oT7SG7LhGxrEzn4zGrgNgfB95E7REJvM",
  "key27": "ZdfM4SxzaNhB8uEjpUMNRQ6Tta7tb3fvjrYf9oh6M7tjPf2RDMB72BthMwChwCRJdmga7o4RXAXj6PkxRuNkQrU",
  "key28": "Dwkcy3wjrd5hi75RngDE7pn71Rmrke85b6zX91Udq6C8Ht5HeMVFseXc1uFyvgm4M7PnW4kgqUH6cSyz3b1VbNv",
  "key29": "2C54xFay1dC6TPiRmkq6NgCZhVCLNPuGmzKX9Pmt2HDGk2RVmknCkde118acwUHgHeU4AdnStrpf1ogUdFiNzGFr",
  "key30": "XBZFvAfpQAnAMLa3JDiYZRWmvoDfXhynpD3Gp4KYtBHKLbiok8yHEodCyCHR6mPyLV5FbKjMufvZnrW3LwQr9kG",
  "key31": "3cJfoD8twapwu6WRkKneo3CcKGEgCm37QoTV5zVsJAwsfphKxsVnKt6dUPnt59QeGVn4uF9UEdmtCBxFSyQfEmMq",
  "key32": "44d1E5xUQQNgPjrYN44NxjesxQygpRSZZ8wCBvGXXqd8imXTtnfHGBbD449Znxm8eEN2Fv4E8gHW9rhvZbQ5EX7f",
  "key33": "615mWbVhmazoU8Lkjd1cNJe1n2tByhzNkXV6NUXZukmFCxATViLZttHgJfHx6Fx9j8rXtJiToPEJjyt4qHdrRArw",
  "key34": "4hevVoUcjTaCsTWXe4tjc4cGFXhA9btoHgWqXWUgjuDaUEf6P43VueBvZ7VvZoxRFEp4E4NdyzkJZAddHQgGNbH2",
  "key35": "GZMKmFVLaqds7BDroSPuMcwdRag97TUMxPfppaSW2r92YrKMskSy66aEmEKrf2W76UNNXB5o1dXWDtippomhnf8",
  "key36": "5zhyGubfV2BXNZvLAcBSHbveDu4gJhtmSfVwJ7dwHRdSouyPk3hiz2BiS22kq9eZZXScxi6tyf3WcrMmjumwWCcR",
  "key37": "3yi8q9xtwMyFSfrxGgeNpzYUr8Vr4WjrxYTwqcbC8XYjWbzE6av76Xj6LxfkYFvozR15sosoQe2x1kwdMttY7Miw",
  "key38": "kXuY3Ax3V38nxgjKeeZHweGw7Gkg4rNH8FBNHLzzvqJzsz9WFvgP8exo3bEdfaxpCB6SjY3fzJkSmg5t8akjS1K",
  "key39": "3QqQWpwCLPruMXTm6nzba13nWf62nSDSH4v6Lgo4eSL8Sibh1LgvUo8Uz4SSH5oi6FipkXZkqCaAmujUd6SonPQ7",
  "key40": "2sifRVid3v2FVuv3stxFPQQTLJxqXPd1pZM4UWCvJDZrydNYCoAXWmvoLovjy8U3AkFn6AFu8Aq4fFknmHNwgYd3",
  "key41": "3kjDuYCMvHAjcLFv1A7987yCPuAR8W6zRe5hiz7zFCrrpJGuJQXN7fLAwsLVM1ewaz4nUNnYCwGcUaJYZo1WEGWc",
  "key42": "oGxPF4QCebzTAohNxsGQwTqShFk9dMeDXqDqTEvi5jaB5szMR4RrhWdGxon8SH3jBMsyMcXTXch8yoq71Tx27Y1",
  "key43": "24hv7wMdwhrnn71oCzkxhaf3npep28WzisxRMZ5YkpuZrCeb948obLnNKn4Gd6TZTiP1JnWUxTW62ULRizZd7jGG",
  "key44": "3fCJXLKWUqf6ACVtV659ncezUWHSfWd8YsMajRTcEjFXp7qWp6ivY8MzVi19pp1VE3cqKv9J3iBnRJmSEsf7Ek9y",
  "key45": "2qtbY4xu8iXNu1P1rrzSWdj9RHkqV3WkvBeSDAeHLV2enHrprfS6MXgs9HTZsK8zvN5QS8keP8zgcUdZqM7sUHqd",
  "key46": "2JY1DexgEmaH73P1uDE9jithUtAvBFYKgMVoM13xJEQa1zLyr4pYvxJfukST2xV2L4fGFupLDxSkLqggC3mFAJGv",
  "key47": "518pRBEvwubVCdMmhdbPUr5S7vazBYmh9vRgfr38FgkBu5xjgo66cti7Ugvese9sg5G5hK7RXpEW5jhChNwdzhR",
  "key48": "TnpWRAH1EGVYa58VtPYEqzerhWjxeJDCRVpQhFnnyXiQXrKiWpW4KYnRBfo9Diq57wUkjicXqTznt3g1kKCN7oy"
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
