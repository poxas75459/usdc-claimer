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
    "2SXoKFdue3XGmEWZLgMTDz4ybm4eN5aSmwk8TrrEUGyKkwycZ56bTK2uZWhwAKNz8xuPneodgdtT9BT2LZ1Tr3BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PdVytphUXmCMgnUYkpeBzDaJW9e6hkPxrPSmwyMugmkJYw5ixxgmYULGjZzMFugZuWKCQd6ZMighFic9JiAsX49",
  "key1": "5KUG3DSKUN3vZcBcRvYNDwkGFSuVoucN7pq1Xvac7aTEcuufgCThQ9BZ9JTUumqKzSWJ6kTqaYgPnGrTtMYKcNNn",
  "key2": "4dXoAnRqqHyjzLZDZ9fK1oF35TBbV7WqcmaqHz4mvShZxGcg9SPdvNa4fYwJgV7pGKCVaRme9CUWJ2V6pSXoeirQ",
  "key3": "4BSLgeap2nP787UyaKv1aunyjr9x2NDvbQ7CPbAaW6uEL8U29HhGLBFu8TnMUpcMRMcMnYJmMDs5o3jpLewJSPx5",
  "key4": "2PRNKpNnQ3dzVASEbsiZf7himWBiq53EbfkaNSB1o8kc8q4GxBr5XXRvqHh1i39uwnsrJdtn49KoEaGgHhXvewtH",
  "key5": "4LhonvrYcNzqQFhWcg3jqGz9TvEJPeJMCganHe8BDgC1qa79Mcmvcu2vM331PXhGiAgjZytgYxunCcWYoHXucaPt",
  "key6": "4i1f9peXfjK9oWv8QxE92Y37WtADwnPrEAz69933B6TuG7Fgf6EwBD2AMUxoQ1RJ3RWuTrfYa9A4FnNyuWf6sEmn",
  "key7": "5Qy1ghZAXUveepba9oGK9afbpWfmVAQ44DBheXefcQs3fscnRD5WJdVKUfa3PU9743UZ8xg9FZUfcv77VFeucHCd",
  "key8": "Nv91ZDvpenjdbWXg5pvoSRwHepesTo6B16MWpRfhuzPBVBxLepfamwdKA1C4vmS9dzVYpFX5gWptmy45sSW75F9",
  "key9": "4pzu4TWLrez7h8DNDBgVMasHkZRoG4CzSGVsyf28fGYpS7W4J4jnb9xzMbophm3QDdFmTSPoEyE6z1DhvrSAnjaH",
  "key10": "5BqN8JRfsknij7rmNYsBHTCKk5kD81AxG5wvPj1tToDWUBZ1ZsH5DQvTnUyVGKsrZ4hqF9G2YPVK7XuctPjV1ngC",
  "key11": "5JF9KK6aWHUWAP7FBwXMqW7whDezy3egm3tze3SQiGYhwyAAfB3iWrtFCCF5kxvuzRncZxeAoNhReBdCaHCwDRD5",
  "key12": "4ZorvFNe1zBqACmwTWs73VdZEKChRMa5bqNg2CSdtaf1b3r1MLoto18YprNNDL5btKm9CYK9p6VVdFVVPPUBrALu",
  "key13": "brEPMDBBzQiWckj1Kfi4i323rUSfbNuvyjQtKw79ChEMHMUa4wjAoAm5YA2mMa5NDBG8GpDKdSUEdfFrot2Qcnk",
  "key14": "4zvijwJojipYFTFAFu5Z7g7DNQLvpbv7ML4P8LzeoZ1uzUdenn4rv42aUAqNmaW92j8g3JYqFw3aNy9LiczJaP4F",
  "key15": "64ow1ySLdYCrQtKBfbokkR2PWENvayAVA7TwNXrWSSDRJFa1xbo82XZKwM5BfuKuKnAvkVeBNdXgFY6p4TWC6hQ6",
  "key16": "yyY32npidTuPYWk7icntThNXd6QQCVJo3eHvqSD6Z5quWJoR1Q9CYhx7Kf4vhRvtgXy5uhAsJyjN3DtECX7LiPP",
  "key17": "2FuDxEtrz9UEQ6x1osd5ENEUqnwH7HTnByWak2AZ97r6Dr2DxheRfZn9Jmm1cD6dGDMavFBxi4uco3E3XUG8ea3g",
  "key18": "4F44Hr4JR8qyP6WDjMWKkSvV5d1UTjLX2kw68qiWJhNs59iFTR1CizdCEZdDtVoSiDkVMnB6KHjqr8xnrMVkbNrm",
  "key19": "4TfYQrjWqJzaxuxVwKVocDtbEJTW9RteKm5LK7jBfaCHr84rns6hKZbihmmtK32TM9jC5vMtSdoDcwwwEcqsCtXD",
  "key20": "53hLtQaWnPFGTfZ1rwGKDsymFwpB4EY8rma5V24NXZcUeJ2sWgoBr6vReukNgXuauv3VkEgNKkgqULph9QAGALv8",
  "key21": "4jbg1jgkovfiw59GGZ17U4EuKuZn6Gr5xMzafT6ZEpYzUfhzeZJC9GsMdRYgBH1W7xkzKJ5cdu8zq1arFBLfP9wR",
  "key22": "R1zoaJQMMkYC18xQMAVyNkn5CmLPmxVr6deUGM8YFPMedPQ9j74SBqzAXMaYES1NtddBuFCZ1ZWCXEUEnqwn3st",
  "key23": "34oKYF6627LvUfaMKnk6FGUxKyTn9wbQcz5YkZHTe1jprcZWEJcAptMCREDxez2md93kLAkd6NADZpH54TbZB7iw",
  "key24": "yWy5wAinhrtr1JcETq4vnHAjVwLfaHAcJ1GGC4byRv4ndjb4yfCzzkAiAiQCNsd5awFFXyE2TudBY26dy4mqXTY",
  "key25": "y64b4obiJnbZdjn6yCcxHCrTndBkVkFtVfsMJbUHAFEnJ3aUNo64niHmNADiSTNPgRpAubb5qYp5QNBqm84F6mP",
  "key26": "3KdicZfLuFDsSiuqAoX2QNYYRiLV6N3Cht5gTvxWid8ZFCkviBMRSqScsE9WFVZz16aN1MdD8RzHQyicXFa6N7zW",
  "key27": "4USLqzU7eyFfdyW7jdK3bCYfc6yiKsv5tEh8S9NPwvXvV9UdzhUv4MMLE9EGkBi89614s24bZRgvByR8CWyuG1YA",
  "key28": "4spJmUYZhcETNGRJPTmoNDv5jjFP7r8t8vSkS8TktVMq6CFGWF2MPBaA3aKCdzFJCvNGW4Cz5X71SbJaJtrfg87C",
  "key29": "35Q5B67JvCQ4ZZcPj3Uvmcbv83CweB3bCyWwn9GUSqSQzquc9jTbpb36ekCL14kFpAezuJtDXJAeUoQWRHHSrn48",
  "key30": "5fdVqVmyvZP2aBvSfmiDt6MCUaYUQucpC21PMH7Nci1ZUJcq2d9CPPCQgAPJvqiDeyZv5h7YzBCkmQttBUEHoSMa",
  "key31": "3ZCYhpNMgcFzp65cQud2HVfKNj9AKq2yJvA2RV9Xi5KbZoKbgoXEqV9ttGRbW57YaCE2zmumx4AujezB1doqaFct",
  "key32": "bxAu7G61GbTvhix6SbeZp3MVNk7yMJ54QWpWh4VP6acjM8VzsQxc1tj5vTzKvv5R5RrjZ45oJ4qavBRSah6wbrk",
  "key33": "3xy383Hq4kN6TR9NoS8AUgNDCbAKPTmmuDeRxZLpFdJ6fdBEfU2nk16duqCpdNdjH9vLX86GkxqxkGHhP6YHjcig",
  "key34": "zUWXQwSrTekY1w9N3DXe14qeUHkGHrND2UZ9BcjyjpNZ5iiDH6KkdyPzZeqS7oHD2iaN2B9AXQouoEBJRfmgHPQ",
  "key35": "5Pp1jBLKRngDg4i8nT5fMxRNRaFodNhVVCADV5NNYpFQ4rQbD1yYgGJkFG4himTd3SGf2TJPxEak7SxQoJdX1jQM",
  "key36": "3RhuXTASaGxAvxDsQTETHEhnbTUXQ4wyWzw27pd1VCG55ktKkVf5c9MwxqNiiBavCVBhLRL5bjZBUbdgNjaujqma",
  "key37": "3155sMZSoLF3Cie8x3LCM4FLMxZnFZjRkj7ursTFuRTtnPrAoRVueQzCM9cDTZV4VpinebiGofMDuFy2tV2nWgj2",
  "key38": "4w3HMvAPkRTFJpn2ypZvZ2ogn8bY9QwMX8xMnXBiTHaX9NUX2GPWf56ATMe8unMHWMEVDcJHGJdRiEyb2DAgwBcY",
  "key39": "Zr3k6yyF2FWu8nvNwvD9sLZBL4np7DtmYjhuQawUAvC6b2F5YiVgrAXXUMnce1CBbVhQSey4MdL3x8W4E9uD1WG",
  "key40": "fk1dFhxh4TyMtYHrQBSx9HA6yJhZcjca9WC1orRCRAD1BdNwVY5JXAnPZX8YMvd8gCx7hAyiFQpgphPEW2mYGec",
  "key41": "Y52MUPCHBATQU8XorRjzj9iCnpQTBhUB25j9Sne8ufBH3WYLubim3TXJsSSsvhaJJrx1Cscw8mnnFGMbcgHDaGG",
  "key42": "5LeYKhcV9fzbVVvYc1Txj3o6YQ1BzL7CKV2uBAzKYzA1E7V7hxfb7d8xkq5pED12Nt6BKWaAgWR4o9xQoJQ2uXAB",
  "key43": "37zioZg79TT5HBYELuyHZ5tG12oR9fxqkAGoqNYQ6YVwtraRcHMBtfK6zK9Uv1VPYxnmepiMetLAHkgZ8eawfyg6",
  "key44": "2KrSiPJ1YrubbfCCDiYGNkJyz8eCK9wTQ2UNDS28svUmRibfHard8yWeWJLxKT5GcapuFUFTt6DsiTT8m9kuPgyf",
  "key45": "4TK6oKi7ZZoq7KoGsyQe2taGz7LonYijsfY6sByir8NPzf9i3cmt8nr8RyxtfJaZr1FLnXUCH8PzQKEGiGeyP7nq",
  "key46": "2Jj9yffr1cgi1pVDKZkSZydbg4DSMHmxnpsn6vYCK5mJCS1MaJ9Pf35DGhKRwhwraiyxw4vYxi4CNm8FQAsKwed",
  "key47": "eKF7qcSyDkrEgFa131o6P9JjYk5AxJJoQhZT2zscSmF8VFmygwZrpCjo1HGkSWbpZpLfcqwGt1KLaTs2WQe6sMw",
  "key48": "3W3RcHwRQ9yoYu9Vff8j9PT1xnUFBH3GfekDrAngo9LLVudVVrPSZWsHRNnUY8uW17VgruKSmw5qzvsHCqqqzTxi",
  "key49": "4ftkpVqKRUvRf6Jn1xk7nFWvPDL2R5vbkEcoV6AviCnCFLhhADbht3zdvY7ZAR1qahMHBSHfdaUZac46Kvcjfuz5"
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
