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
    "d185qcpU5Y1eJRsWVvwHjutpBmYgVANcHvrj54GVDmLtPzgSsjdmWSyCcmhX6GGcZ83HMHu2f2YKQLr4N4xjxaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GctfD6MuEZ2Qoqier4wba6FWZYhg1rLmVaTADCa7jxuja4ybwhKZFRn43coEANSnuKjPHzrXo9jNknaCVYvCnJb",
  "key1": "3X1d87Yp7a5b3XqgGhZL9fVQGVmgvYmbec8QmCSHDmm8TCkRbXE2D2KSudeAn5RxtBVoqGyELkwk3yJXCM4YWJc3",
  "key2": "3UCwcn26jwfnEkJEDmyiejDzQEHkK8uhrya5HPtnTHQGmRT2zsn1MaNpdQujEbgjRDysLqgLDny21e1EZBRvpPe3",
  "key3": "LdgtsXWTiWC2r95Ktkkhw4dMZAJU2r3b7RZMEoYiNvQQLP1VDrABMFUgsQHYZtBsraqJ5wTW2g89K5FMwfQEgNM",
  "key4": "FMgtYn3n785whhv3TYewiXsf8c7CgVFVimzFTfgFD6CSrjQfSjRt1xLH3a8y5dic9fa3xpx251bAvqDXzvasgLv",
  "key5": "3eL3orNcLwDrMeQLhu8KzhtVgttXffWsgUi5iQirg7m8jKyhkGycm18sWQpUeZWis6Gd4LD7ZTNM4hB3GFzMM4mm",
  "key6": "2wpvM2ABxJ2XtWvxemaZzLQAFF4NAPHnq6MyiFv2vJKmsfvQwjt4Ev6gvwvgg2GmKA6B2A4CY8BRnuP4RkgcKL5j",
  "key7": "3FjoAFp5GaXTwwaKA5s6EHGv7AJqCmVHPTPfUT7W5vP18EuF3Pmwf2HFX4htLAfJAhj9zhRaex8BFiymyu1uu3p2",
  "key8": "7jSsZ9UitCopWYHaexxrf46R3YAWauEjUZeFXBN5Cmqnjon3HBiXGCEaWmazmSTzY9izavoaxZUzYM35NrrFp8C",
  "key9": "3qrq9WZLTSMwV2xsKXrNr1J84oy8Dv5rH6YhCvLuLsNbsi26Y5VrwRMKFVWrcuNzkBJUUqEsVJfWv1v3fTRnH2Xh",
  "key10": "4V4mVJnHmkdoaF1CY8Y6DtCby7Pg1FuNQ5VsRYaWVDcZbuRSJxJUfPDTCWPuvWks53LFDK1sV8LdUfWeehMk4Gsv",
  "key11": "2EopTVkUqdtxf4Hcv8RuhQJrj9D5kMv6GWDz8kwtV6789sfwABmSQvhQJ2zPVGfUrPHXsuY8myLTu72dc2Uffw9W",
  "key12": "3KXFdVGPASb3uutDu3iAgrPp8WH7HP26diYjPsaEpo2zgVsd9kg674d9p41SbC7zf3Wi4mxreJHcDqDQyoMu7Lrm",
  "key13": "5jxPz8hk5cY5uhcgfvN67RUzm9XyW4PzBuVhLjdZg5hA3SimcDJPFgj1rsfd7FfxiNef9oF4D7PmHsVaZnHm7bGh",
  "key14": "4nYoCwohxeZV1emrHZER8XpSc4RHLUMRdsCjazXDSnzSyPC6C7kvs5DKjG3Ez4kEGWoowFXJXq3wFRK8VtTcdZbF",
  "key15": "QqVDxGeJSs7oC1V8ZwzcFNgYZ1eEy7Mkmozj6nhuFfrmbDzhjZCayya8TYHidUxKd8PiM1zS3ZXcc7uy3e989qx",
  "key16": "4X5JHRi5SExaTsKq2ZZFAXZvG92m2bGU7VTxW4qamURth4rUtKKUfZYoQDNdWPmE4R3JwZEpsjfxAmvaPPcdbn3L",
  "key17": "5Xkq4XrUGwo7gYRJpA8VKFj2QLX9ggDGwLswzhfmU9JXFeohKtD6Ynh3PVpXsnQ8C4mcJWW3H1CngnVuQJCLuE5N",
  "key18": "3RNEW2ZdWWXjJ5j7hprpfwua6hCVw53gmJwjfMv31N6mPMQCroUUurhQzy6cpNsK3NCZ1KhcUEsxHKZZE29Rzi2M",
  "key19": "4Wcydr2cgfYNw3FGTcBNVo8bHUfSGXYuLtJTGPeMM9oj8cpb16jQ2VqACwvEq75SfThVRNoGMUikgXWAzkntAMNK",
  "key20": "2D6ZRjAgzHjrUzeNW5P9VeMk4pQY8ij1M7iQmzdB34UKgT93FhuG7h1uQHSG5MzKsMspMCHYVSgdWA1TNe9PaXed",
  "key21": "5mxPSDhPZ4iNidx52uqoeAf3ALMBuVDJWoNX1gKBZCkba19Ui3omtXa8g8QmY8zbzWZTYvdd5yRRm4j853jQ5n8H",
  "key22": "4gq1ZDYiD6ZiEMg468MNH5gm9SmRx3GsibYF89i4hSbBf2FzxXz3HWRjpEb6chEP5CZiFXortJJ1PruWAjSbnbFe",
  "key23": "2hgYiWQK5zy4tNBcUB62dVxc6iAkgrDXz1EautuwUUqYCUubx4UU3aN3S8aeZKSoqRLyCwiutEKH7NAjYL82N32i",
  "key24": "2KkWGVcukQ3pLAWSKbg9YGzPCVQ9EeKamFhGXcDMQhjiKyJsB18gb3uuSRcPJNXAGnNedjxMNcYxCNrwBcNmLUnZ",
  "key25": "oKTVojnrzWDHnpi65qPPSE1irETRtaMiMvEwwMTjN9BKcP4bdgq8emwPLmoRG1tWyv4Er5ZWgmUHF4tP8StmDd9",
  "key26": "4fqRrGEx61k6vYBnKVomGRbpU913uw4CyEFGhY7tFtncZgRuj4UkzrSDPbvVgmdzgmXwX5nZVJ7PSL6AdSKNdCT8",
  "key27": "47BNqNEnjycTRcBnMywkZhNGdCVgiWhgc2dSbrWWRMqZqcTyeyQgiNSMoU3nY1Ek8vN5BkLVjv359EXzHH5YMUdV",
  "key28": "5aC4ckT7HqtMdfJXgFjVhHvc39Htg4KUGFhxowpszusvZec3GPTpqGLzM8YvaPjbq5VmnUg9UK3qQnu4kGRyFtw7",
  "key29": "5GS3qoZmvGoVgRcYptKXSyLPWykLFb315VyUmNHN63kbdFRhzRBdeHiJjndQkmNmvJEHMpMC3g2zikx9j9KXnD9W",
  "key30": "4Quu4Hf2Eu5mkSjHoQwqFHAmUarfqe3qw2CMzvbd6c7jwm9ip2kdCbNigzDi72nxUJyaPDczVw6xysfQvCmcLypv",
  "key31": "5j6VmiQ4TdwdmQtUbVwWSTnUMkkehE6Er16Mx8YtnbPM7dNMEmZsPWMYgAF3YCZNHF33vdQQ5TA4EdaVLJA86HTQ",
  "key32": "4MSnMdmf51WA1kSCoYfAzQAsxPmgNz1BuY9BtwCi8M5sJUpZyDF2h4PupgiynKse7CugHzcvqbNWKXJwdfKXW7pM",
  "key33": "4PY3kWo5wsNk1cG1MsHRJYgsSz5HSJAaMQ75GCDSnV32MiWK7VraTtGoGCwS2m5MwVWdbufkCJYfF9wNCa4t4995",
  "key34": "2L3YsVYfkeZMM4oPLG1VQ2pznk7NyAGQMNAn9z7AtPeVzGW4NSPYKcAAZApCLdsoCCi9BrnD9ycvsXFTec9BgJEW",
  "key35": "29Gb6iJzL2jynKUmhtC4HDjk5uvMPfJauzQvnQ416TuRCUp1qeBQEkZyHLn2ZDaMcmQQP2Zm5rxZC29MCACPQcHx",
  "key36": "3TXZUqT7riSTNoHseFhH6YxmmdxzrGWF3G89v35BSSdsvCWbmnEpTKe2uitxp93wD2nmMYu9v8PqzQju4oppeWf3",
  "key37": "4nk92LhTkzBQ7XraQEcRkwJhnGKZcVY5qdm3nZKoBCUSx1acqvg6iBmgTS3enGdfNiZHXyGdfKyxMmNEUe6m6gNG",
  "key38": "2c7ecYzxmU1vjJVTebTpHf3dAfQbLjxrrxgwL5FjdXUX7Rmap72tmkQq3oB6n2iVmi7hfLLa1YngLdw7Tb5R2Bn2",
  "key39": "Fgi4Udfx83ZNmpVWP4XdM56hybMfgP35QA8ah1MPMtL1xbdLRu9MNWMxmE5aGxjJSD9K97tc2NcWbaZcdqepnGw",
  "key40": "27TiKGe2f8tTPGnGgjGYFHH9QyiS9unUjg5a4ck4KLpRw9NJ1pUKGT4sgBTsa6u3YDRk99R859L6nseb6KwcJnRz",
  "key41": "4ywY8rSEkuoHoZYaQaMovUHFLgLkpbpni9RSwgfxKvc6YEqJRFpYjo37mV2P9wrw6TggarnnkM62bUeoa35rvVpC",
  "key42": "2j6kUsnzE65osmnJFk88SU1WHzqcPmeo1Vxg9nmY6a1VZyyc7tps5cpkVVaJCtboXwhz7YugveYwFuKvkP3tkhLX",
  "key43": "2ynX9MnA9QBA647qVTKu8UdzDaDME8J5k2CzbgCNSg9pihHnLrmjUUKrMenDagqsomXnrDcYiAi2AdF1xfegYYzT",
  "key44": "2vNkKUFuq2k39KCFkdquXLUWzwggWxxck6norYbfgC5rWZSrYioCMFG8qGi8SAx8yiZQssdTnmeBtT6wnFVkBfaP",
  "key45": "He97LokAZ7xsBzpC8gNuS3uGgg7WGSVNgyQvpc5RY7yU9HV4xKhjCxRQacvyU7DCHJgcqfwGpbwzZkuhDjgA8jA",
  "key46": "4E66gbvYC2nJXYoAW3iKondQFdkhY4KsfvzW7bpg1iLzDwJmELLhwFkmD47QW8xBfrtxDP5JF3G9aFY7zyzmBMnt",
  "key47": "4hNahdhvKsf3tKDEZ68o9rBwrVESAeqyKxz3abw1DmiFb5NBS7HnFDrw8Jatin6o9h5Xc1KfWgLk1KSLhyLn6mcP",
  "key48": "3SZNK2ogG9yELqaAwrYhUdRwWvhWAkSiHEUNHnnrQybhy4EmWXD9K11oBZm6sJGz6z7oDQyH87Rv3xeXzDiCzbF8",
  "key49": "4zUHedRsZ84bBuo3SHtgtgpYAybrqhHyKjuR9MtLQhc3ikcskkngmdG5wHPFWqt1UW4K3DcxiotEv79k6qjNJJpv"
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
