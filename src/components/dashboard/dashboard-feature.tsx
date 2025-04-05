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
    "G1ybrCkHGAF9sP9k4xCbsR7GaspRphNyJtTjNFT6YTgfMedgkZ9D4oSTnSxQmMWUz4VHPACtGRMdgM54DBwRnUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8yDk3s4QzJn2WNNh6SDie1ucxYEeSB1H9MAZvcGtdcFdnTb22Kp1BvoGYSWpshJ8CqWRHZRVqsr27zky8vhK9Z",
  "key1": "4WcMyt8qh3cjgvwz4FGzMn841vaEy2SrGH3HruwofasbFekFFBpUoVK1vduNBfwuPmSUufaU5NMdfe9vMoUEqVEQ",
  "key2": "3w3VhXNPWqaS8kcKfspepADhBWhQuimYDHyo3N6U4ivDvBhks8NZn5uLE6ogNd465SEKBWJK4bR3wUnG2AWbg7Jq",
  "key3": "2Dp8jgyFagFuVzdztEei7dVoL6YpYgYkD1ofnQuBoxYKNrERDebJQFsPQCvg1nMSTiFMjThvUZJPp9ZxzfHNVvrv",
  "key4": "65CMM9X87SYBdfVHVCC2pzEZqziQ5XiWB2pERii7CiQNhP5NCgAF6q1tDxPvfjXQ6kKQVE1deubwMMcvMeH6Vh3s",
  "key5": "37Lpdvc55bVWjj119dQVipazLfhABL5xHR5UorNMbipNWJsB6pMcrs7bfSNpxWTBAykuVEgzaBpWUZXBoacBeNq7",
  "key6": "2CBfWHD7zDhJZbUKk1hFRZmrz8CuUgzEZHcSAPsgXhEseq5MrpihopwHr4Fe6VPqfhWJnj89GbbzhQCVXL7rPDbM",
  "key7": "2YwTGuU4owmYLAtJ2eQypsUKyX4RNKKoEMJSHB5qMKgKtZ3NoxHrMDyzBh2b8wuqiJ7opj9vNCX7aMN83doPmTFP",
  "key8": "2PfCgRhXoSWX9LGtzf5aUjUyxT7k2uyEaAdo1sgu9P3WN64FdFF14tVcKtc1dwuNXLesSq1gg8hyfhp9VyrzzQqx",
  "key9": "2xPn7gimpbDgujEHMgm8stTYnQb4FKGnTGRh55cmY2LicmcpQwVA4k1TsMvKzB5XexVGzgg968v9Eiux4kdgBUHo",
  "key10": "3BcTrFDMuUSshngDBSwemsgBwW6cPuXu3muBZtq5TBBvnqi4q1AzRMuuivPASc1ixvbXr7zyKcYyxqu1NrivFTYp",
  "key11": "2U1ne2eNUBvyPRVFyXaF6c2unLsX46VFHkCZAijbxLnJZRDN2X3RsZCANHXzq9Gb4vsERzWxTyBube2x1x7rBhhC",
  "key12": "5jGjSLR6kAYhTBiWEFSSnardqQWGJLPuaqc7nBgTaQMb2ktqTSBk12chARyoRo7LCy2nRzCBfZqoymULhh5BM5VJ",
  "key13": "4kaDJTFk1T7PLhkarxo7UqLHKgUXnpkGFworBbqutSFyDCRrw3EwfnL3A556VKj4hxT6RFCsyM1dWvQBm3KnMFgt",
  "key14": "5ixGdLZm6ZigKEt1v7A3wwyYQwWp36CQX93m1942D2yeo7Au9SK5S7ke78jYhVJsv4j5No9C5PuZ7k8xK9ToGJWf",
  "key15": "5qQxwm26iqr3ejb9sTi9mkHTAvdYoAX52KGhPKrR8Fq3cbdSB3xyEJHSngTgibumfUvW9YG68Y6JjJScUrzeuzJr",
  "key16": "5BunQ57k6Xh97MA9z6XwoVHB8ZCRU9jFtPZ8rQutRtJvMJKoZoHsqNRkBLCR8qa6fVo3j66Yi9g8fLMrJfDh4URT",
  "key17": "2L2PmcSZ1rJ8N7GXkBSG1zjtUVcGt5J7nehdkxuwVngxjeFVGrWrrzAa9bFJDzEPVg7VepaP1qZYFA7Fq6G2zNLW",
  "key18": "nAxdHJF3pLwcQFf9V7BpKzSgCyy3JAGqkeSnbfRkGWwozFmicaDXRNgDWwkR8Kh4U4eRb2LDd3TVu6KZW31GSkN",
  "key19": "3ZTXGJipEb4jsdRa3gxJ6Xpc5Aws7xRAYYzPvsfQzwtmUtJmHD9Vt9WjC8YpKKQ1KN3VDN3aJ8AD8D7AcUNrTL5j",
  "key20": "3B2JxDY6sT1FZu13EUZ6W5MyNpUN8vH4TGXsg2Y2amYscdLqnFR5ajYCUKRbLEQrvKJ7azMzNL4HKmTLDyi7zshB",
  "key21": "4qrnDfmVmHn2F9ndwg9X8Uczze6uMgz77P5vy4LvC8RHJqPr1CSin6567ycHfWJvorc8CAhKJg8bAsdCLCqJ2bgv",
  "key22": "4qYpUaMCmjUmEPP2hrvV9n9Em1kP58YFyX4xCAhDJ3Jd74NdwXivmWMscJ6h1BRvRoP9G8m5v1D8oaU5PhZ8nvPV",
  "key23": "36hE18JiYqm4Lxjfkmtd4sehQkfLyBhNHrbp5FX1AHTbh5JCc6KEiGgxmtFq8LUoduVdqctNrMFgwiWtfmX7hVVW",
  "key24": "3Gq2qYnRnr4Zq8dYFz13tyDNmLzzG8mJh5fmGV3R5WDasr3hknbUrLZ9mrsJ4BuVdEXeLtgus5FdqRatdCyyo9eU",
  "key25": "LuCU1RZvGkWqto8FdwK83RZMtZkE4GhTM4QTFeS6Rb1xpuoCxiqTsoeUE5mEJKKr6S9qqzAAX3kymBuYS8Tnd9m",
  "key26": "2Dmg7h3bkRejjcF8jut7GkSJGYuY33ApudAMFMuLpFkMQjvDbuR9DUkPK7PpA6oVEumW6sfnq3Tm4VCE54nUh5bU",
  "key27": "58TmdM632gCdH5xNANtmjE4RWGY7czgPxuo1rDDZS4zeCPEGCjix1egGPEruimLy82UsK5HosHNNVX5i7dkfZ9KN",
  "key28": "2Mgtye5pVP6xJeAFiBnufAcE2aeD8Adp66o84hEfT8fcHcqDPmQbB3hC3MaigYxXzqDLeSshE2rNhGAewa7nWJmh",
  "key29": "4xyTy2vCSGDZJwNSuB59ozs3uzgQshhYfoGXiu7btw2qhBZMtxoZsgTZweyVB2FERL3sKbke6PfPmw6VrwVy4VRK",
  "key30": "4P7De3H3jnWv3LYRaGLN39n5ZHqVLc6Qhe1VAuk3boom1BismA5XYUtNoUGR4AVav2gG7qUBRCLsNNWvfvn3fsiv",
  "key31": "3ExxoYMJhvi7TiNeKTeoFGtNsxcWCvVCVGYQevXHvpmx1xJa2f2EHJA6NXHPpqok4yKma1PXTxPVSzJgwD9D3zf1",
  "key32": "4M39nPLkAyVrWpeimErJbzFriNfQsFcTBwpcujCqgmha8BB2LUs3SraSS7ErwdNTqEyA2RbQ51HN5VzWnff9aLcq",
  "key33": "3UU9D6gZw8EXEzuqCEGbT7YYYq3sk4c6khVoc9TWoaNGVVbibT8amSgizSHvitH8fmrBUqMpCPzGvYu3vV4cissC",
  "key34": "38MyeLYVegMBUUUYgSpjGcGvtfpVG1K8Ur8s4Kff63jqZxRXx1EXN2a9NnvL8hb3r1TFR8y79aH5SMXVEKmSpiS5",
  "key35": "4xXvuRrdadXaUhwyBcu5AtUXSVZ6KrsUcWxeGuwSiiE2zAVezEyqXw2vZLZhXDzM6q6BcWvG2UEXXGSSgfnPxYyk",
  "key36": "65LDd168ZEAvxTCSwtz5dgun1taW4AeVhZJXmuJuCwiCgJd3cpaP7CPFQoQgDFotqyPL3UkHWAtv3kw9CtppWF3o",
  "key37": "NF7uhr41nHsbHfnJYZ5eFaQGjZwMkC1KsexfGpfL7ScyjADeX9FoqNfB61WofVQWHCKAXsY9u8WjqbacqhLkfVg",
  "key38": "48NWsiGdN5EgJPyhsWLffshq1bFoEMKnXnxptkuvyLt1eBNyNm82bZe24BXk6Vrb8jVsubNPHMuDKSyPipqdwDwM",
  "key39": "58Xd96TMdpeDMLoNp23ohHWK9jWyTSTJuqY51TGqRJZBX5dhEFtFeHfn1thwS5XPQoXvo6DdfMW6z1338oK9WRvs",
  "key40": "FA258FyHNnW2bUbrsC39yfbswhqN73jrVEVn3AJDrvRnkjHLkxSrmPoug6ETRBFtNDmhDEC4mcdKrdBSu3i38Fk",
  "key41": "yUJNUzTr9Lsoo1YTEGWBQS7YQaSfjuJVe2aKpDoFLBHwbxQHxBDKMzTCJv6Lnp6GGSXKVy64JHx9Ci3VTr4z1VX",
  "key42": "2m9rTCFJfKZFN8g3grbCyLXegcAsE2KnNnjbdcj5znat9JdgNztdvFfT47ndFBWTqaKYd2cMzKfadXtQd7quPW4y",
  "key43": "62J2HJWceQG4JbYHMBRZu3so5rTWEi8mPP5faYd1KG2z2VYAj3LEtEbs6uUwdJPtNh2grQrVwmht6v8Z5nNduHti",
  "key44": "2xnzxqboCzFSQ4NhDKT6sKd1CqewTTvavK2tZSqE1kC3R2mu7ZS8ED5fn5xSoDiTd6c8vFTkDNKLbfP5UbQqWLLD",
  "key45": "2MHi5SA21pmgFaDqNuAmubbNwuRh84msyzrEhMrZUKjihsR6FLY4VCfpp1ntb5yVoC9uR7jRv4KkE9fJaDZXBCVy"
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
