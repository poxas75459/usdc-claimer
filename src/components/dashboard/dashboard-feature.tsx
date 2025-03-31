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
    "678RbUH36Vq1yCAoqNTTPpG2PGCfPvPyXyMHD5g3GZz4jLcKG5XWCQLqgDQcVKDuDNhgBtBaN8qV3JgnaNSkJ4de"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5imcQbnWyjnPiLXnhL3bP3tR6Jka9pfUDmHpJVnJvPxajpNAMxNCGtu8VvspB8jrSEfHjRDxG5yRJ39jAb6iYtde",
  "key1": "B2BWnnytjvNHWSZ7iKVCVSQWwSpfxx6MvF7jRpCjfGy7TSQvtPvRpriPMe76ZMCAZaHDhVvUkznc5qEk3FADjDT",
  "key2": "5W6ae4AQpMMwLgiCPgAk64zQ3rKaLsu5ZafboarL6qEC5BnnMJPkM92s5KLW8LF5rWrNV3xK3HNPjN8XdwEcUoPD",
  "key3": "2nVSJ8v6KwV4shxiY7BpRPPMNVXofUKUXUnEZC5U4uY1aXgjuFYEPZckVfPUcRCRAC81saJrU8nBCB3byLA26yaG",
  "key4": "4rXZJxV4TSWvijgFDFC943NXCkDHrjJioATRufm2ZJchBqAH2vERd1iE3YBwjoRrppgSUN5bZM6Tm3df7bARs4wv",
  "key5": "5hiHz2ySBWvqG7616xuBmaLUBGihR9DYS2A3NXiEvHxL2Dr3XaAmJ13N7HchnGSWL4uUjnsiwLBBLNbiKFgeUKyT",
  "key6": "mo8vXbdDobmfxuNR86ZiXSbkNjer45nAr4fCZgKADPPed7inRek5Z9xAdEyMD1VGyxBTeSJi221LtNg2LGCrHo2",
  "key7": "4NaEw7xkHEpYiLWj4QN5AYhxDmhdsLzL462J7nAQ9goz3TUiof2eQUAEKhj5sVgh6KaRrZjASiHTGqW6SBUKcQAn",
  "key8": "3ZAzh27Rj3rurpmPmeWPxhYxJDSToWGimZY9QL1ovGBVsse91dECXAembsEoxZ2oDVchKFodYWG65Hs2ohcsveBe",
  "key9": "fA1qEAq4ziRagmjb1trZ6P31bibLRE1ft4L3yp8oFqor7XWjj3gJ4DncKWYyVF5JyUHr6bTQ5fgY15mdS4KAQCe",
  "key10": "2JjpXD4AAVciWizyjU5jmRhNh2v1xc3EDfMCAiqrALQBivUWJFLJShea6Fm9B2JBvc9vea45nzmCs4zd8Vt3eqEB",
  "key11": "4JW7euznEShjDRVds2rAKPMLciFm13zYNXJC8Z8Qx9ZEE5jdEy2evWieC4N93ZW6V78XGp4ZkLKoDUY1Psmzjruf",
  "key12": "iQ7LzSGpHaAnNp3PvMX69LWiGgwaDwH6WFaYBGxHyJeoWApkmKdA5GxZCJFF9fxjMo29joYexN2fVPfhpFqBNrd",
  "key13": "PQf4oAiJK2rW24Rgumjfr1GfxPcTDHFnwrh5LsKAjpdJxFd67W4agCfbQZtokQYfrfRpVxu8qJ8NCZ4XGXsnZdz",
  "key14": "531Dr4C2ij2nTibTHbkd7kHD7geN7wvfEHRr9EbgE8Mz5eqFZ5nBBkxE9hofgYBapmFn8aLPWobQNsMYSMG22j85",
  "key15": "VsxMQBQq4m6PiMNip8fTM1oa1yCc5SDTdKPUZeaSV2N6miKQrmx5B6ADd9zY8etWkMTRcbeG3vJCjrjyh7niwVT",
  "key16": "3bKCuiYd9e8v7JxcSHgsyZFwDXWHDWLTq7o9V5jpgLyBvpnUh7eymzRHUTb1AhpHrAB5YoHgjhCUVCr5XvCE7J2n",
  "key17": "5Dfr8VKf7Ah7pUj2i7H2WUsG6VwtVgq7gaDUB1vxpo419LzXJDCYQGKynsmfLyVVVJNxQRoXfHVXfN9R9G4yyYXK",
  "key18": "5HWCMKmhSMZyj427xbZPa6phJJXnrMivNYujo3dzLQuBxVraY13ndyzMndWRMRBRzrd42oTEwt7djLWsAtggstN7",
  "key19": "6367nDbKYzzQsPfNgUedTcJ62JbHMbQCy1mYcb1PNpWXXDhsyGbANdzuHTerrLqng3NTnBWRZUXJrD8QG9ihaTQJ",
  "key20": "3fYXkU7PWEkQrskjv9ZUXXaoYzzTyNNGhCsyMQWbDTxcJiYWXVC4CrzqcTaBPFf1bhs9Mf7CV4iZPp5n5TjvZQ2E",
  "key21": "3JQFF1aVC4cvbeAkZBeBzgNPDF851LAfogU1QzmgmCVBr9iELFsyfsVMaUFei6YJyA85F4hJ3ykZEhDbYU1yCX5F",
  "key22": "5i7xm3biMBpesjj8Nqnb8pnCZHo3ca6kcRUnpCjxrkYZy3mYBk56ST6dyPSa3s76Q58gS8V1ofy8amJe4PWPucvP",
  "key23": "5dpAJR1buHHN2uLLcmH3gNdo3RNREU1GLKEP8v5dxxBY312BzCKCjd3w3GMayL97ZpLsrQezAdguD6rypS9CRJYK",
  "key24": "4MPLb5T98LMhWfs3dS2yQNeNtiy4E4h7QWfmxANffGszLSAFyAYFs8w4cQTS2gJY592LXq5GXFJj7gtV1TafGovz",
  "key25": "2bNTifcKhWV7JQuNRe17xhVCYX3SCzLh26qmHQnEodYKoorwYqMhrC66bZCjrfG439877aU6z6DQ7UXcm9JDiTLB",
  "key26": "3LM8KmY8F6Hh5RMCtMEcFTxYtR2fhX7bFtEayrD7JmtyAqYBQLFPQkvEbv4NRm1opFavmSkH3N39oTtLTHJzTBDg",
  "key27": "3zdtpSPNgcwfw5aLLKcEA49SJJvob7QtZYdjDnGNntjNg7Mw6EcgMW8aBDcs7ntjBeFxpYr3BHXYb1FxEEv5WG1N",
  "key28": "44yDycUnZsPsX4FChSmzUgNujW4B2V9jEHNVHEhB7nv3AgsQNp7xz8Qf8oVeWCckjadtCkBGsahdahA8PxhzVTTZ",
  "key29": "38BvDL47X9yGSVYwdK9DLHN678qVhoUf19wCHtoipyDPpCtmSgs2JK3rDQm2YT5LcXRM6JMMqQyUHSPn7Ub44KBk",
  "key30": "4Q82VReVEg7MdioGAeG56mgbjhTX9HzR44P25etVxS3NvGT5datfPq78VhQkaJdiCdye28moaWFoa1KK8EA2wBDg",
  "key31": "4H56ZcHPjD2APgo17PBTXLmPZTcHfePiRcfdy9vQX2NWncQ1ngD96Tb27ffy7TAAS8LfonfuuMTr3gdae51LArR",
  "key32": "2EUEbGTG7SMNMDWZ2rZCgv66AuVRY1uMKRBZJ8RXVDgrmGH6yP9myrFeXgUJBpS9whnqY6yMxuk49v3tiKWwnNHh",
  "key33": "48hXbSB4xya1rd45LobtG86zixwakvF6cGYd6KeHjSYQbDVuxmMxGyRMqPRuZxeu1m8k8CYe67Pmis4sMrEFoNPE",
  "key34": "3jNSjS4XmMiCyeoHDdyn7zADFmHymArNBs8xj57toJgxztyna6tVMeTmuavmzGyGupQpDupqqp4iazgS7FZXSpii",
  "key35": "t7RsLUZzs5yJR4voVETaox7CzLmU2QSP7SLheR8GuMvBaxk9Jm1eomiaNVx67BH7yqeXr9scW4mKc79yrSRPHLq",
  "key36": "4n2SNMB5spcEoetGbbCHyKr61AhEdjxMEYMehM3MgdswCmFA2AgJnbKrh2Vfza2o7kTHsAujxEhQGpHjo4H9NnF",
  "key37": "2wQYzwktjY55ahy9hKU45zEeEKECfVhQBkW26t8Cx7q1UWXfZA4NuRphRnwXiQnuqeZkT3ScTG734RMoaZReP1ZM",
  "key38": "2TEk9Fi5mShSZPPC9kX9LMX3PEHsatJwC3HqppTdruvDZgCqUkSp4HKGns5YtW7KcmFB9Q29qxuxoCA2cgp59Vps",
  "key39": "3W3VBW7XaHNCLLFJy7wuYGrquCJ6F7DzFeKfowfFtKfJ9dXQyijYBETBNjCYTHLrc7tZWT9zQeVz2BxuTNPt9SV9",
  "key40": "6UdjdCVUhpzVCENvLDHZmukcSuSBrL7wgED8ygsRUUeH3zbkU56Hr4FV7vZiwN8Swmwau3Jux7px2ZLsPEFucox",
  "key41": "4JDrna7ym8iee3oXt3SWo3dbDWZ8JmUP2Ld23WH9mhSb1qxtpsfaeUk8953NmrzroGVSoHsNCj9aSBne9zieF2Rd",
  "key42": "3FTecH2MvBhhcLUhiMAbqoPufHh1TFCnZ5WdTGUxE2n1HsmFVLaW7B4U8sjmSZbs6GVcC6JQZEQEyRKxgJBWozsr",
  "key43": "mRc7nQS2MrF3ihTgjNFJJqeaEQ3C1iq4DJv5tYavf9Gp8YVZRRYgPVjmVhqiQzopKcgHz6jebbFdidrTVuBB2ir",
  "key44": "4NZaXbySvCHXF2Kt7Tq8VeMEjAXuQhNwvTu4brptGWWBoC1QUnqmcic3oKv8acieEt9bUhBxnFBFD1bQpLXSixjv",
  "key45": "4dfXbCK7dRPE6THbcUntd9tqvLgZ8s9aa3SsMzhGStLuE7repNimUqqdjmwD3oPx2HfMs9VKDkmigNdcc1J1igyT",
  "key46": "7o6LEachQJ4wNsDewHXh9GgLEhJrvzTS3MXXQiTMSKkpcCBg2HcwQ8ShCSkHC135uNa786oa2PgxxceXdtEt1Jj",
  "key47": "3GXEgXKMgo4PnLKHDerjbU4H64ATsWkJ6WSfx67Y3VT4Rs2GoCNzyEB3P8Pv2DLdj5V1X7PvdV5qEG3X1RRB9Skc"
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
