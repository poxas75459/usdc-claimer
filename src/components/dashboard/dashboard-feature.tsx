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
    "PZD6swwKGysfxmSUBskXzc9Ce7rCje8xvfpwACq1sR2LDZnX2vwphmZZ2qsoXzh9SvYfbSX8Vfg27c7omrYScri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4nKnX6Rwy4WPWqdCi3433Mqzrk15dv8wWTZGYMDJAorKSa89GxazQ2HSbreSrH5xjdQwpxUwsUTmNn72P7BdzK",
  "key1": "5uST8Cm4dhznRVMaGAuxU1J14UC89Cj5gcjR8M4YomB9W4s4cuTXW6CeTKidi2sv4QPYCizMDLbVA1Gj6GfcoZ5k",
  "key2": "S4SRhTtcVoEwY8nWU1QdZGTjUmskSwzk6YF9pdtVo9xcpfvy9cXKuRmMDuMLGCBfZ1Yj8Vqdebowk5zNoGWRNMC",
  "key3": "iFpzR7BwmZWo8w7akT8AZeXMfDnVk2iNqH6NtPAQf6cMmZCU76gf9wCDPHP259bj1JjTt4vgPtjHoT8iKyup3ZB",
  "key4": "2ZVJz4UMapF7h5hacdrkd9DiZ5kr2Lz3VLBpgDNP51FarGyvfq4gBRLAXp9KxBmxmD27MtwArTpBzZAV3evuoLYF",
  "key5": "2wwDCD4JN5gmQMnZP8nYpJePMoiAH9y89wz78umJrzgB5GUGkxWsdQzoH14HgdZtABJd5nrHmazjreW9vKG6GkjZ",
  "key6": "2eZfeKUBT8Tmm3umGzNG8gMZi35aibKKqERt21Uz4e4ycaGcWwL2m4EtEkxoKdHtjv8q7d9s3Li5m47BdoziC9bC",
  "key7": "zKTR2zgzR43j426aADLLMhUzYq5GZWJ9TPAh3hKsosvnJwJuYh73SXTErcEzh2GCSXXwsHzNqRJh4RmMGw3qriX",
  "key8": "2Zf7FKhnzG5QBDGyrkuDpB36K3iwiN1HxjKKeLahRVCJ4exsreHNMejkorJrpteUum7yjwwB9BEexkT3E9HjrExM",
  "key9": "3Pr6cTHsdz27TYdqphvZ1XkQFTYyU1rSgAT2hJuWR8yZLqUGcHHWGq1geuNxszmad3m8xXMhqMU7djtLVzTsu7JP",
  "key10": "5GXEFApfBYhAu2wZEf8KMDFBWk25F9RqKY38Bu2e1uBRMaiYVEknUtrDr29R1imuuQkrQQVths5FBY429QcropCR",
  "key11": "JYbgEhNx3P6tha2rfrquBTTmbKyJrmWNzu9cXqucrytHMsfEqGz8nmG2QEgB6qq8zPRz9NnEm8WT7SoEApecAmV",
  "key12": "5osYoa6GxuvGsEPSfKCdSQjUkyWQ5RmUDCVmMtZLBdap1PNJhEy2wXRAQgkrwpo7dX3PGXrVCrVXeBSj3by9MDG",
  "key13": "5fn528ubDzbd1jJQCJFQCPa42Z1GpV3GQRPh3qh1wzLzYTeXFDtNPak3dVnKVGxZepdPnH6fFDjAMeojEFLWL3m8",
  "key14": "kZ62LnPdYNJj9zZE1nn8xFHH9tymi8GU4MtJqiXHpBBybFBW8fghyrMo9HJ6M4SmsDSJ2TpLs7Gtgo5Na3QsNgq",
  "key15": "33XWL4WEsA6BToXKTarkjiA8rSiAVQ6djMfkNGzFRoers7nAcTpKPSPtepRFtmUiMdyF8ve17bWhamBMgbdwCUr1",
  "key16": "2Mfa9cYjnzwZyrSBw1cyYTikp4nbTMCPaCJMPDfBHTCxEz9yZRY67bDNYd3XLpieyFUTrSamU8Ffgr4M98wKjbRr",
  "key17": "2ViZ3KkXHoa3Mc3yahdzK2K4tokLBQcomsTZh92u8VszmpUMY8GYfsCh9CJ58iM2ziD33iK6TwrYdtasWFfQXftF",
  "key18": "2RQb4RQUfTXhsNMGNopGHy71rnMcWQPHnUynUqMpVnHFnDPDdZHPEaXN7xZzeGqnwTdDWevCNoaX4B6LTDrsWoBh",
  "key19": "4rAtZgizWhFCYDGVsSK2Lvt8yU62Kf1a9zZbcogrqNeb5VayGCMAPHd1mYFVwwQNgUDyU5gUBJsvbkgXwHB7kwaj",
  "key20": "3DLqRqTKPkmbsUDXvTfuXvPWer1eoHBVMP3QYT2TV6EEN35Zx77jBVJfBELmWng4p7Ro8aKwiLgytVZpnZyU2vsG",
  "key21": "UhuUrQYE9K7vtSttjxc7rjnNgvHMLZUhgwHRiBjUmFbLWWqB78qpWR3DRNVHXDFAFdnodCzTNfsfER3oEqtubpo",
  "key22": "2Y2tzSpA6y1kqGXxaEDnN8fJxeDXiKBEzc8k8jShAM3S9Cie5JdUodohFKHrWQ2JKfoSj9XUa6gAEnnhe7c96vH9",
  "key23": "5C5Y32mRgDURtWMWuCUBddZfWr6e37hwzAesmNtibxoH4d6iCo8ibEToUPJCdNuVpsdro4EMsVffgUpXVNc9ke6b",
  "key24": "29dNpA8mcEa8LauXoGFEsaJWbkDBkQPvFoxJwAhmZqHRkUuh8pMT3qAkjLiECYFySRFf82bk1VP2rPjw3rCgzmze",
  "key25": "3Yj9ckCB1EHLpyLLzTPFhbPy14cFgQ6Viz7KnEeMerMXPsAMMfEx6iTSDyueEj42sct6VUQ737KzU4tVuWe3KypU",
  "key26": "4HUAf8avgKvEwrY4ZVeh937vJ66a3kwKCGW7SQGUKDB8WXPeFmm49oH2xxaMK1x7Ke67X72bLEhDFPDT4PYWFJd",
  "key27": "FMYZMLixWTkKcWRNa8zzmTUM7sgN65vuQuonyFBT7Qwh5eLsxujYPEjj3AaCBgVdn7MPyDnoaouBLcAWodCYiSB",
  "key28": "3nZuVrp2bBVTDf6FfL5guydrtWNTAJ3eB5fq6tjf2S2sX8JwWo6WF3QDx6HYAQeMnT9JA1RVvUpo79X9EcNKvZsK",
  "key29": "5oMkm3ULdzP3XiUjhbK8TsHXUBmM9J9R5saR8oYtzL96jerrY61btJ2xT9P9CAgj3B5ZcgAD34Wj13fTqatEz7Av",
  "key30": "4r1eR1uatGTcd9SKQbfSpwTb2LfGStnDpMH5gdTNyCkyhU9BRaAKFjFWt1aYhpnfuCTnKji5iftn5gBeLMXCs62t",
  "key31": "3zteL8Affaa4Ga5fcs9NASU9drsBxqhgVeGrojUKZXyxT93ijBc3iqpTMWrnWhFy3MkYqbhfqvHCwRobXEfYZ7CG",
  "key32": "4jjeA154GYnCsryQMJakc2faTvkK9KGzBqHMYXDDeEihRwfhfJXKh7AGv2zWuVow6JVTMaZWNXPMF3sXswMapLHP",
  "key33": "2WTQNdZstNDBUtEVTdbDe4vfFozCvnffGK56pikxWwwcb46ZAnpPwsMTzQBLGqa5eaoMcEaj6LW9pGQ5DYtRMWKH",
  "key34": "5kHFLKUMH9F1CeHHqZBjiSbQjFu2GSCacRx1BAJUhFHHWp51h19Qq7QB5pcsJkNoXCMeLcpDBgDqE1nXk1G7jmug",
  "key35": "3oeACNkfp9b1JwYDXF95cLzXaSY2iqWiAEYLV1axw8nLZAgeg3c4oDrARyPNi21goXU27qNA7DEa96hsi6s8yfBE",
  "key36": "437TGd7YtfyNsX1AHMqttAjA299vH3KFZcxZ8FexfoPfcrgMNyxjhPyyNki2S4HZr8MJMzYsYWtLX1Q5vg4Fvjc3",
  "key37": "5FE2aKpawqZEeBZTDzsE7KPsfMjThoJrTiXAYPnEtLfckQpqFRXu3NByN49TH53hD4C2ykcdvn42mWXhQmpmZKWG",
  "key38": "5C6g4pjurEQpR5D7hJDFEaaM2YXb6tNmoS6zypktyYXaa7Z9X9bQjEbmSe2S2SYGNihCCt5TVcXo5ogd8LFEMtW5",
  "key39": "4AG5jR6VruL7fzr5EhERijnMw751RTXqwCdBLJ8LTmA4BiAe43cAax55E8vhBQwr7yh8UWND2e4ksCLkRWRgxQtu",
  "key40": "5aQc1NRJfeZq6wSZjmPJLXEqNpADcupFd3pfunBb5NKNyRNHb7g6Jb1uiAbG4qqhaECVG9mcBPKnGQj29ornRdj1",
  "key41": "3KzzZAPZMJN75FJApKXes275rrDThJz7GRfvLm48zgv6haro4SutYohga2T5zrCWfck4kvj8gX87kcW48A8zFY8b",
  "key42": "2dGWh95uRHv2hqmy7YYNHQ3tDwBqCCom7F3gQDNELLjxz7s5GW18QmnXeTuvxyhKU7JogNhsu5A4Zjs9xDL8M6JV",
  "key43": "5S3yqke3jfB4YyPcLdPVyCzF7XteHJLoSE7EUnTqXjYcNuNWG1Nj9Zy37LsPUcESfRunmpJnX5hSWMC9FU5syn66",
  "key44": "xpWCqLY3v9F7REEiiwjzPp8CckRC6RqKXta83xgo3MNV96W25xRDJhH1jcriHTQvcKoZCronyyee68KmQt3UBuy",
  "key45": "5ng8JBosS3bahCikCqqu9QmGTJUNTndeJVCmLGaUNcMonh9F55iCQGRNHtynUSueYh3FPgYbhCqxfS2CkEVeUs9o"
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
