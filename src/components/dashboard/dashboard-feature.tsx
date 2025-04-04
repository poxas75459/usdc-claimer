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
    "5xFnraWDpzNLV1Xj8Rqsi4btiDU1vsBvTqbZQURRfUi3VAjhZoqFPEKqacb6jdPVELJy5hwTT6Qi7bjQ9E8Ngg6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNN2xD81YGbu5MtKfkffZdz1Znm47hr95UZSMBLhtdG19AsqfFBZTaPnVUn1vYCKwQQagX4DsKr5HZTaBjptcwb",
  "key1": "2q6rkfMLv5tgEKLawjP46ZqZ9t7Grsx4TUkgZCMJX9ApC9NYDUAZ9BFhGDSY1NKJJF6RtRshVvvQQsrqmDKvyh7m",
  "key2": "2kfeRuvuoXHyQ1cZKCDU1s2j745y21V5x77RGeFLNKEPMAS7gXcrVHRK41rFfec24NCGY8AgqzHs7DLxMorPRB5m",
  "key3": "5Sp1d7zE6SHDpNXU7WZTXrnXrscrSniP64s5rycNRAjXLf4LWYPwHw7vD7wT79TBn1yjUMM9sF3dbWm1279fpx59",
  "key4": "4kQ37pZLYxJjmBB8E9aVrWbkf7dcgfhSv6NprJ6AC3S9C7aPVBcy5Zt2hSecs5KXULgqUTpsuxLH31ND58JeXLYY",
  "key5": "2zywjDGK4eAjj9ATwRuUy5YktS1eqbfkLff1DgPnz4CQRJif2unMFMoTf9pG2mu6TBpLcXSwqtp3fbdA6kVaTW4E",
  "key6": "5RsXSnDtibbLYw85TUrjLQZEwoicG1v1g9ArbKykC8NkfcUrFFWPLeWrLWeHpYdAtoVgG22vGEJ6HieCWtLTNSbJ",
  "key7": "2ShfZVHoJRFa15kNAp6dk6wUEWZibHS5sSLKdnKcLfscqACkVyS97rzPVutcPoRmbNksZDYdtEUy9ePscHfnAYrV",
  "key8": "2CxrpWxcSNSge6RdeKniMxLS6soi5rkb9928jMw35cPpqPr5C3HQcTR1yujb1xhprBqp4ZDfnWg2TZ1EjqufrjPD",
  "key9": "jE4UiUnitqFHv8vmoeLvw1V48LRZupwn1mrFhRCVSeA5FQ7b4gwyJNPRYNbsrQFQv8RSWmiZ3NzT3eEDGHfZSzM",
  "key10": "5SY2scHH6fAiTLJiGfUH1AEhMiBNcouZfrW29VaxrSZRDu7mMRNEweTvw73TmBzGeyN9ZAKSjHYVsaihovma1EXH",
  "key11": "4tQfjFQBMLTH61wFwt2baSm2CUoWHMkNHQD4Kam4QjSuTMrByLELVn1fXaZQ1PDTsYnA4S9T5iWugQqpb5zcJugc",
  "key12": "NxYFFgq132wg55PYaNMoNSZCJFutNHPd6e4rm5hnREpmEu7LNynBDPRr1yBKoXYaCzi2sjz1AgAKvsPX7drdbLY",
  "key13": "5rJhNSVi5DjSJ9FNZAdGgGztTRmHfK4Yjkpub7zFvcKBGUYndgASy2sV7Pcp3ss8DK4pUy54nP7Zg6mjeHZHM7ao",
  "key14": "5mmFRJsFKCrcXCLiqc5iubzVHefvbHBTzaA3WrrG9fTNUqKRHr6W2DqFELE9htEPV1zzmvgESfeS2ed8U7jxqFJ8",
  "key15": "36557V6HQRzVFzb6DFHT9Y9q7bp4jjWbS6o26LxF4TH9JCJru1PBCdAx9jhqoBmcgNW6WWrinK6GPPQF9AnetDn5",
  "key16": "3pEoGKkSAvib2SKKPaLoA9sWDqLw9qt4FEvysCM47NC4oCxqCadDMzsDePv2saD1QXh3dPR6RTv3wMnfD6iVqqjK",
  "key17": "4ZMBKAxnqYLYSW3dvQ9RrzzKdb3Ua5tTFBj97k8Hx3fJWpnmTmKcmTE8yCEzEV34X6aCDjJYXx2DCuRzE2PymWMF",
  "key18": "4ZjxTCEsFXvpYqcTAVQiS25YFoYknfcDHpjdgshxfHSnTRUKmM8fymzxas4YzvZ23DqmibzR6DcTTLeksW3nbLM2",
  "key19": "mkBWsBUFhK4qf9YAtzVL6G7YmvVmU793fHTriWTANJ1sXiU6Krh11Jf1vRMHLaurmme7BTGmVf4dijBPpCzPPzV",
  "key20": "2UjxBxCez9VCPJaeoK7TbD2UoGLH1yp2WWmqLzXBzSWQroRKmxTsbq17piUjh2AGWHi3T8B8yGfYpfyqaZmFkYTS",
  "key21": "a8iHwM4sYxwFBLX12g6VZ7cc4mEwnosbpgyecSXFmKLoK7gDtYP5todsebLYsGfCq27t43rtichdBDg2WjUiR3G",
  "key22": "3wZWaSYCvp5tR2geeWvGR4C9dxUwTfoCzd4eBE45Up41Fs3NGYdgv8xa32zb8vSny8CNxX5GjjNv4JQ7pQQ2PvZd",
  "key23": "4kVkTZf8hEkBXrb3hm91V2FtgtqBvFjNfMtte2v4ZKfYGXDwE187XopFoVHtWoe82FENCGB8Vt7U395uptSA2A8S",
  "key24": "3kv66B57ym5a4b4pthjaF2XWT4mcv7iJ8uqZxAseofRzHbEwAf2kZ4rZpU2Kp5Tjk5gGvu8XeqTPB86XQ33oqazR",
  "key25": "2gUDiZcdQzrvdqnfZxkbSbJ5xb1y72kwg46swnxC5417mpqJiJFGM3WW9GNZYtzp5qshshYjm9Mh32eexZQevxFd",
  "key26": "2qzwaaFj1uGgnxfCMwMwgLky6SjNbbA3zjmeQJHwEdKRhociYKXG2WfKKsguznSLGFx7948VWCYoj7FRQzFAfBjW",
  "key27": "3ipBPDUPBkdKKkLuPWrQvBiscu64nyPFxFzEsKxRPssVzEGDZdkbXH9d96heiW7dvBadeYfwL9qSv6Er48HMnkws",
  "key28": "44YeDKwSK6LpbUd4vsbrWV2NHuYGgh1QN8DwA7CeCnaEzzSE4uppcXa8iEtEod6qcyxM5tfPsiKGYgamSHEDqu5V",
  "key29": "23CDVLXh7ezCtSGeM9KBzobrYyTd9xJyWpz3XnPJUZPxgDVdfCuJ1CvrwkTALUEdGSjmR17eVmXzT8sn4tHtx4As",
  "key30": "246NvVHT1Kba2rPVMztPtYA1YHv1mV6B54ippxxaF6v6NMj7VzWJXu63bSwKPbUDwbUVPj163SELoTCpsJMzz9VG",
  "key31": "4ca4M2NSyzugyE57xCZuqWCGGWhDG5MwDuzWfjo7JbBHuwZYG2ZnLm8fn8uHxGJRm2hSQQ1fFpPF4sADi9sv5Czk",
  "key32": "3QHAgsRAJsP7jTrPqjiaj3v7aDxk7XRa6V56Yn3BVj6NgP8paK2Nrn1KgjjJun3Tz3MesQUirrJf2eB861gemfK3",
  "key33": "TB1YQzAspJa14yvNde5mNCyFf3ywnTT8h2K38B3if5PUVijNiHtZeq9uvBUdZpLvDRrUF371zkj4YRED5CzNink",
  "key34": "UGEi4zAnqhtGuYtqGaFqe1tW5MJLfVZVHS2yjU17HyTenLWDC9j4FgXeGKvUDdK9oCtgfKpMDYKdgPS8zy8kdmx",
  "key35": "udGUyZLibC6zPpL3ePPdww2hcdpjmwt8kRXqfWS6SuxaNZV5sr2L3niPcMrZQfAMfWGQ8MFfLtCAhBzHRrhce4U",
  "key36": "2frLjm7KDKqRY9RaG6vynurwNBHiyAv8R7hjoKCsssSmXVXR8BkWB4T63znmNGsCTrqWSsTEsrEqbvJHRa1rza3P"
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
