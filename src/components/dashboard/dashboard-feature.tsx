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
    "3t7jezqbctBySRbBXC5fjHPQzpRdQiAdUe9zRuLygKQVRMxAn18Dd8dFwVdGkiy2ED982sx7r1EEuFQzR28Uefhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U5MSRPTpvK2YtWJ5uDu8knt4GJkeEgeuXvYqWhZUExVYDyaxyaoqwnyLaQwK1dmYbvzYBWT3ghpG2waJM2xiwCK",
  "key1": "DdcNse4cMGzZKNucacRbvXc1kuRKVh46C75ozDfWESLn48BZnhBsqyYX448w29L7Ay4PV9AtcQ3V7LvNuwMm197",
  "key2": "4LBFYwiQRzfVqziJBH6JBLyenjaoLjNrgRHLe3iauKgZyjEB4RPhE5iBu1tzrZ8SBDkmQQh7fpHk5x3dTGZ8rj1U",
  "key3": "2KkCDvvaXzbGvFF5nMiiDZ2Sf8VxnY8TU8mK2ZfmC7fu2zZtfvnWAN5idd6oTvBw368mxMEEsn6xPMSNDuZkg9c1",
  "key4": "5p4eFL5y3KdYvEAuhofMA8ph12vuXDKYhF857jcDHbGfPYQVWR5jrr76HQpvK491v27HU2jekrp8fRS3yJmBTUc3",
  "key5": "3dCUuEndrCj3cvoxg856RuB2bQ1zcj6CYjNMPjeU3V65c2zNZor9FnjbPnJRRaGvqPrF1ShjJk4WcknovDdcDPuP",
  "key6": "58FprjMrh6uYz4jRujMEuSP8kp64tjCcLjQgeJcZtJz8YTpLqq3U8xzm5DYvKf9iE13AyLGPsBdEHgYJPqr89Q9a",
  "key7": "2J7Tc5TX1GsWy2giwKnjFv1nkjenXDD55ge6hjMCmY8p3eFki4CQfMf4orfVpCzCgMrD33r84NmFD9Jg57M2qLsx",
  "key8": "38DZNCQP6mHhHHQnT4MxPkUnQ656zbChipPzij4TqgTYbrb4TfT5jVSjLLWg4HW7pYRnJgNHd3orpvCyjsazywRh",
  "key9": "42Tbu3ZyDgBLpqvT5ceYU9Cm5239jzB6ywj46pzADJVAW5Ft8wM78yqoQ56n7Wj9rsBCmRp6MfMbVb91z66CZJR7",
  "key10": "3mvekqHKrZNhwDrUTdd9pMdxkCJj3t4LvbrbWJxiwThoBp27EzTLrmpaC2f1dsPmLuGMFDXBf7fFg9zqeGDutgko",
  "key11": "2qwLWWvGWyUEfkAoHPnAmLbd87rasjhE3jbxpBNehbXNxu4yH3J4QMwTK3RY1WSEnFN9zjLCcBc93wg3wz4g1xmz",
  "key12": "4gBJwUKJmgtmhm7J1MRaLk78S47HmzaH56nwexm75sWrqJXzSwheKT9SAPK5D4uMG1oXEsEZR9zVKHQQmNkkjBxX",
  "key13": "4pwXkJvn4F9XWZQT4BqWyR6aztGeBQRwAD2AfUgX8Jpc5cTCANJEKF4wSTtizsHHKzHwDkG7RoVTEWfCMrdpppbR",
  "key14": "HM7r9T7ozcDbGpx8p62AcKRTRDmVdtvNXQxM6xaW9tKiS5eaT4K5fTiSZY1oSxfRdxJ7GsPU7CwSeA4j3nVhBz7",
  "key15": "2w1s16idJUqpZMR8FNxBHPXwDb8oNppYKVZCGVsiFGC94ZLkEbf16QU9ZoDR375nCXh8e4gLxBXUvhMJeLg2SiaZ",
  "key16": "yfjEXPfuVGgUMsatcddb2abo3MDBBZKnLDBfvtPc8HLLx65v4iL15sS4zHUhMBNnDYchMmfEadvSyRP8YsGpQR7",
  "key17": "ugcsnb77wQ3o6dWcy8uzoF9zJgx7CjWZJ4ZEU37KSwa2wd6dDgwQ8ny6sjDgSAtnvUMhDZ1Dja7EjSoGSwdnuVq",
  "key18": "5xNfxbQx3PpoQ1QCda4RHBcPR5sEow1TriwYZqFZTV8jDKqaAfGrRTVoMj9RTuCconpFSmLacfyU9pM4A9Koi9xe",
  "key19": "3qshH8aZJbeRpwxrTqspMLkAh32Df9jbQG9HCXWZ1thH4RVqq5or2muFKLrdTBQtJt7MZaXdSps2pzaA496aqG18",
  "key20": "4qZKxCgTt3PokJgNiVFFFhRC9F29cn6Yaf7RKgeaQyRw9UnC7KGYxse3eo5KmCoppm7EJ7NPrcitGcY7EDzb2jYe",
  "key21": "d2eUtvFmDw89cEomK3LjCYCLdNB8M5FvBRf27VbntYtyHD25vZ5d64DPrijx8CppNvokm9LcpouWReDDj5fKPW5",
  "key22": "3JdyJM843rhbVEYMvwLERn6qHyLP7aCvo71sh4n9qwZ66N9AU1iviQumSnqn6apR9mphdTT9Rk2uaECbwxsn5vKf",
  "key23": "2EsGdNRPPSeUjBmMF9uZ2GNPr3xYWb7gdkNtENe1NZUGeKtVdK15oegZzqSG4yvqA9Dg6zipHeYTARFAaZkXZ9Km",
  "key24": "2kfjBBg6pgB2sfgZPW2LTDYLDU7gwJS5goreZzznpDQnyAyPjXdKAYwpbkTayrBwmd4u4f8tAhTKJfG21qfegkDN",
  "key25": "3bkCw9b28Jy7cNQMx35tWReFvHNpLQRxgyDgWTUvJXYCnRLoFPo7dNWKTCM7LpZ24rXZDnnjHK2NdVZwZgVD22NK",
  "key26": "zX7NEFWVGdyhjqYoEDNt4tsuuJn1Hf4svmMdn1tLAqFPos6KsN5VpHwD83yikVboMCGBLpiKth7pwtzsMiuN6Ew",
  "key27": "3FJVtwvf6q74BWtqQohhUzznY3DX3LbAaibwcXxzE7UqPHVLzGh7CDoERQb1dVCnovRRk6ZguKCZFKnDjCKtWbnt",
  "key28": "4nHvYTvgMMF7YtEpb4vs8cgV5EzrFKPddPDUoEnC2VeSkJMjWF2ZJNPrW75WATdSWZth2yVwHYgmcnv2xxC7SfR6",
  "key29": "5mADn5chDTmCkjvWAVU7HgDgemU82sXFqbUA4MLDXEerYBbWBB1kzpsPrmNsuCo7mBycCqLPMSVApXf7y2AZCFYP",
  "key30": "3bRuCDpUckW4Mf5hXaeXwbovsPcocVqfwX1ZZQMAsiZAKaHk8VjkxEuQmRtMpHwQs1ukYAhYrMfkjg6NiM1w912y",
  "key31": "2N5YXk51AMfp7xsEYCRag8TcdxCER5ufGeGcnaEhGsMniXe6sdGrwSNAJDrkeGDAco7z7ZBhxDJ3eMKRbCHVuRft",
  "key32": "2Bbiqyd5k1k7igjMfhbX46gRA9KULgUpSkwgxhjXREzbtpVLgixJvqmoASKMuLuH92vFAkswxHvVBMRoJvdYaqsB",
  "key33": "5uH5BQsEZmLsqWE1b5piorPhqJHeTmbTu2STUavFtZuGhFfuhLZYQAXWEPukxweauSp8Qw2n3NmXgj4RfQpdTJap",
  "key34": "trbyYkVz8McPtHsHLAEu7HzURy7Fg23CZKFGaPy9wLTbZok9wJusVhUjXBreDd4VCDTSQKiVxx5EQqY6xoMQ11J",
  "key35": "5fJPXq7MTMj76LybzGAuAPGeYcJD98VfT4N1H4pdh7PXYpzXSSfcvZSsznCtmgcDUSeoP5WXRjN63iez6AxS47J5",
  "key36": "4aT7Jefz96NFDbBpGmEomWZshKjHuenLDaTT2VYGhXTMboi3ECgCB9k6inpUj1nJFxsmJVjdfPGUHYDtskktzBA5",
  "key37": "4cvU8hvrAmCRk9xva8HACENAkLdV9fkvTc8xhYrgzmt1oxP9AKRMM4iHNdM4CgAWM3koGkpeCixDRwaC2vVMxxs4",
  "key38": "26k5cufKRxWPQxhYbu5BDpHhtCPnKez6a79de56VLccT45eoyBLZAq3vtqmdPfknu3k8NBaAKx47QAJpbRLSQTH5",
  "key39": "24w42jmU3nkxgpeaMLwmt3aHgXRfQNJs22AeN4ww8dCSoWFKRcYu7BWGep5ThKoNBcTfyPAVdJe4Am9NnRRsVueR",
  "key40": "kZYVxMHS2TooSQJneNYpdXY2G1eXwRaM94hcprp3saenNRrKoeNirsnqhG9idHrQSfSC7x9wR7A6W9SZ6bDTvPi",
  "key41": "4yyWhB3WAjpLYzGtVdv3ud6UfJ24VooTFJax4cHkGDbBy257z3dNcj1zNSCd4tu4cfk9wjeaY3NpwUk3LSYSK1wa",
  "key42": "2nrJGMWdn1qGhtVTs9217J6dCbEuCATkE3ebWtt2Q417JszmakGG8x3vov9Kfko8rXrr1GxickKmTpt9D1mVs9cr",
  "key43": "4e18FdPFzBTbbKeGhSEfTLhDoycRELYW9P8NpM93yMurKzmAvFsp3mncso6RBhaLTvWFzpGrD88mJ4FfnzStFN3a",
  "key44": "vQ5a6vMS94nCTdPXYYVMrSywpU3HCXF3WpUTdtEWP9KbqmbrezxpUkNUowgyLGDPiUE46nFEMEew8Et55GV5RHa"
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
