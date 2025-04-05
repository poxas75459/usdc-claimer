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
    "2CpEtBsNqeQCTSnSD9MYVWJswLaHv3ZxzsdDtPk2xLkNbvvoSxtN8bomgt6iJqCdJbS1wK2yqhaAwUf14UTPbjFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9FZhVwxCWHcHys3E8AADqTYuyUKa2oTELnFQNCeqNm8wNAWPAxSzhy6yBArTiFwxQc5mgj6Wfjn3kNGwHsGxHT",
  "key1": "4XfMfo1P1RwMHGAi2UB4DboxbwmjiBSSvfSTyfESH7aivv3RWwgEXNx9P22wqkpG9Zeeu41AWzub5CtqoLkqquJN",
  "key2": "4hLCyfhWWX454ZtZhxcdBzsJaXK1LSKE2nC8eqBmh3jkkDwCmLBvkg9SRyZt2mGRpF2Y5f5RZjz95YZVbC57YexQ",
  "key3": "4jkVnPUnT4nkHj5BnTptToU6LH1eWBmAYNcXCzU3PsqjzQr6HV9YkXHpoNR5nVwfYhhFPfvnUim7kkxBDRKAXyhg",
  "key4": "5uLUgyBWrGJeao7rBKnJ1eENGFgWnkBZwXnD8C6RY2RSF3b7238PHawWhZGjQovX5EYsq6rba4fULs54D5vGcDcj",
  "key5": "4nw1xvKyPeLDBhqyzgo1KbFfpwmcfeWJXaVRLD4xFc6QuKicSgM27GHebuEDnMD6zJHd7JbSZE4ggr8kMJpnZ3LE",
  "key6": "4gY99SC2zYAR1jQBHcDNJPHc6r7yyjRQ6xok1qFa6dFc6n9PHyLEhwhHyEZMc7Z3K5SCeRMdXDjTSGUQnAJKErTg",
  "key7": "2M3EHPt6rK3QLXr5T2REzJMxgmZtWdJHwtJnDnrUBtzhkcwj4RjT2fq1XP5RWHp9jeXjYAe371HKPfmMZ1MU2c7K",
  "key8": "AomjUkCqYJ37zGhtSvzxxYp8d6zRPRhLdKLELmhp1kBiuhM4XTm447GN6BfAkHUkdBgcqrdfvedmw3vp8S2RVrT",
  "key9": "3RdMJdx6ckAdHQxhKDBFL3Kbd7KbH5NeymAupaG2dmuYpjf8FHA6KfvEESWdACQLmp4ueqzZk3qFAJEva5zh39WB",
  "key10": "2NMpzU7HRNoP5DnwQgBXDmKnyem46mqeeCrBPsK69SYgeGYfxRhaWGk7S1tHijmt1k7EUWWxcNMx9W1ZTnnAs4p8",
  "key11": "2gGyobueqaTBvuzAdwqiWYGev5PF79gzra6BNg8Y1XA8krvgKu2VTAWaLpgGtwb4zXcPwa4LEEGoUbhF6vGE7NwS",
  "key12": "5MkrUrbHc1EXobcwkq41XgnYPnvb225iTTaZeGKrV8AeNScd5KRVsjLY4SzyhBhFopZtv4zZBuWJRkbWPVsiQTx",
  "key13": "5JBB4jwuBMVLgft3R2UZG1gseFmJ2s1JECD1hVuzSavLKaqfJkJv9HT6pfrhGsofYtKBuLJ2RRav5cYMKxKc87kh",
  "key14": "655VMC5wssGjJxqHxzf3Fmo1c56geDUeBXRRHLnfgh33fNpDbNCFmY4cQA8pB2BvBUypJisrVPYpw8h36WE6DxJU",
  "key15": "2SPbLGn15B5Dsq49GDRpPnBNHhj6YtvXeUa9ezF6BDBQuFVQfekFKRkXkvSrEbaKVxuSPWBwNFsweESYoT1p3Pvi",
  "key16": "5v2qkMDuYFbym9CVBjFfzHoSbLcKgZgPDixx9ms14NPUww787NFHeqt8iYyrtGsJdrjf7XeMTZW9enHXuZRY6CDC",
  "key17": "JzWX7JAnt3jQVyK7HXLiqAXwcRC6iNxURcu1QAHSSSX1gdf33DqAiw7vE2epMkhXDKNtmWTBFoGKWqnN7Z5N8fm",
  "key18": "3z1q2pRHYDUCk7ngv7PTwvE3jGAF6XmA6DowzAtf54Mdd38YXGNT8xB9L8iwYdSeUWDUj9VC7oX5cp31X4vdia1L",
  "key19": "2wQcrxYbbBkg91xAekxJmS6xJCoi1eNywQ4meK4VTgA8Usbe1nMAes2WavYL9H9gokwFFJfAXNTWvXCpwv4htz4P",
  "key20": "7JMZWpj39FMqzbxQnfb7f1AZFk6aKuNEjBaWcMMdTe6SguK4sftxktDTEQ1EauAiPxLzB9bRfEtGukXdjYkANiM",
  "key21": "5hnEXP6MKvF9DJsPnE6soKgJ7URVGwoT3DSAzepFaqwhNWbFBu5L1tTwEZt8WWHeshVLuSV18Luyoibp9dWfWdQD",
  "key22": "5fxyveCBUxpRiMh7R9K6tKMVDaWWhHkHqSNNK9nDJuqaFNwhyo34fvGmEcWa7XNx1kmCi8DKK4oYR5tqPhQe2Jrm",
  "key23": "6JzPQiwpBFLTk51RPmx3XDtqW32pYmXi4hNG8iKfg42WY5SjrLrAhyjvF6z5nzeXBtfEXVaJLUPuRmnPUvmMCmS",
  "key24": "Zwz4GwUkB3i18WmNuBD7WsV2Ks3zSG6gSXQkaQoWEpegmaUjBy9SAGmNqxNAyq4UCx9ACjKEC35cfbRiDYmwDHN",
  "key25": "47XoTQoZHuibpJmMSXTQ5r32dZvx22go78Y264vVSRKacMW6oWjhyZiXaPvSiWrkTev9sY5E96R4sLHdGfsJdXkj",
  "key26": "22XcgeSpeiK57o6kZCRaLm8Me4C3r1Gva7Na9h2vUiRBcvbxAMrDU353uJzRf5Rkpm3Mnu5LLBECtqMp8U8aY7fo",
  "key27": "5sNFRLF2afaMDHurzMRMAdPwVBd3Kt69kJEGjarLokiYPwGmHxeSmhW59g5VNvUkiB8a5c7qx2Sii76C95ifSpWe",
  "key28": "4g5GjPKXHHuSGvLa4U1boQecEzN5y8hRPtYa7u1DRThomGsPGMQGKzwWwJ8JyUqXodP6peEBGqigDdBAYWdcXR2v",
  "key29": "3vy1f4miD2NeDLwgAGa72dfHEPi1n3qx7Kih4AwdUNecoYbqJrX9GVjWGStnbxM3GC6dsZPMsoLwpJ9wWqYwjLsb",
  "key30": "3t9AP4YwQwVA3BaDxddpCy1Js2VM8efaTthHrjzDpASPJe6KpbewQDqLToXnUgok3jdFzN9Gf9wJP5upCLADCDaz",
  "key31": "5JazxBUM1sFaWirXZk7iVrQnmMsepZyqWbo1c9KkdbgsioH6GBP4KHdurDT758PMN6UE4MRHv7NDhB5A9Fk8suy2",
  "key32": "2o6gF1126S46YqZJVFbhSVirh3mkq5wBCH86Zm62dw2115J3VMK9QqTYey6yTWUd6PWfsAjymagAFDDwHgHnhDiU",
  "key33": "2QDj4L58AbwTfbBfrXYH1bv3t1t1gadXnFMh4snCYAkQxXkNk4uXNcJ2pDVjt1FEt6pVY8JgLFw7oEqjwQtFJQGp",
  "key34": "2ihTdLhW2AGN6FpqAtNMYzkHMANPgjLbnzS3QVLWfageEyaEPRakSjNBYCu9qdPfVGekML4HQ5hvVL4dpfSFBaN",
  "key35": "3iBNdrTxp47hkx1gqSt2jJQb7PE5vMHEN57Xdi7BeMALqdq2Juq98mnKZAyXzuvSRxanphQuiQJxC5QrBupDV6D4",
  "key36": "Ab6vFYQhRyhnGM2KaiyYDFLyRy9FmzzYmboDSA4e6RtdKkr1azVAjtEogGWM4R7Z21NgSX5kBaoGeCZuMXFV1Wa",
  "key37": "3YraumTBrXbt2WXtUEf44Cgi1YidyQZkHU7Toq16fn2sCDuK7axfPzGYTFsJaepZEjjkNSommjvJK4PKNiYinLXf",
  "key38": "2p2Z1GpMZSXBTnpN7AVycG7HZgT6SJQZsqXUrNPaJdNFYmV4sKYvvJ92iCGKxYkAaCgBL5akaRoE4aSBztt2JrdZ",
  "key39": "66yv2bfrB5YnTXwcPYurCN83p9AcDieMNTvsCNg856WsTtixJ1PywdSh643WqVv6a3bdoWB4sxaMQQDDwXcce6jy",
  "key40": "4przCGnX5jQXxKtJoXsgnWSsGVxFSVwFZxnbzJrjjaLaq29EzYqaFHMcsPjTn7QraC71X17ZUnhcBC6ehUequeD7",
  "key41": "4uqWvNyGaTHbqxxRLioBb3Q5eLq5gJQxG5zxGdQ2eS2bLe5pdLmg5oeDotDBjesmFBhswnfxiGi8sSDJgqSrqvxB",
  "key42": "sEvMt8Jzmj95hQLcemeTXow2Rr6WLWMnyGihmfR8cHkx8KCN6aDBjzkKdX9yJQJuvKKsMseC1X9HiFn5NtHYfiJ",
  "key43": "2iWbNKFahZqr72ZsgYZ52mHMKCJ7Hb2GAepAzL7hJVLd1si65m7rZpZPPb1bcq2PpJKuRWGiMyNbh3VfGftw4ig6",
  "key44": "34U75iMhub7rZuyHS731gP6UZFFeMAknUZgHAvqx5fD4pT466kAFqd1EozfhKhsashsF2dDMvMMEA3xpzPjPkhVv",
  "key45": "2p3aV3ukGkCbLPnRC3VN2Q51vrTNvbDhhtrvEAMZTNjpTnQZZc2S9tedhNJy437v5rcQA3SefNkE2Y8hCoDDPFZj",
  "key46": "2mkqiSNWt9QrtVc3Mkn3WouSdEs24JySwdvGweXyjanaueaK1P1cS3LQ3hDozNXecU2JNyYLEyRDUTLdCcesZuDF",
  "key47": "BMyV9zp7NWRKWXRoGjHNdcmMzAecQ78xzUB7iM94tkZa1ibaxX4xmHDcG2vpW2Nj1q3yuqY92KHhjyjtrC9wcsf",
  "key48": "2a9vdhKg39FgbjoxFTfNFymvG9UDtYjB1RL9pLCy8YdfDSFDb5144ZRyvoZ6kGkXVgF1JV6PF6raMvm9sDAbPHpS",
  "key49": "5Xy1AUqNrx4WxaZnQmoVySWCNGjdyKvWKUdmyugqE3MnDcYSb1Ag1innaemzzHfdikEpvE6KqA63mcpA2SgKr5iv"
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
