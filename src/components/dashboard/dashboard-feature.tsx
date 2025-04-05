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
    "4G42q2YPK4YP5gbwpnHXJDmwYeFC7KeuXcWDPcGhXk2wW9nL1VMEztLja6w3QkuUtjZcdKLVUobe15Xedb6ALgyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erbcEVYbEf38FPuo6zB5dQLjmhr8xXZjyjzEwPoUhhRvQjw3jznGM42qNWKGj1XdNZbCUoJsgowMaSfPaoMRC1w",
  "key1": "4xFgQsnLeyVwjuvQh9FhbMGMKaW9RhQqVBXwzkbav6Wyn3acLpWQiBWgPMZGrznqZAd4EWR2uWLY3qDpeSiSqGEj",
  "key2": "2A2Z29avSbg4N2MjjTSFPoPMgv4vp1ozBwjunS5nijxfMThfXV3uTNC1HZJeFZkdetp36NYcfnnVYzLCjv3LvxH8",
  "key3": "5yzsan6e1uZEG7gavxPgzkwaboPuJLQ2tsXu5VHVacnEsMwPyM4xBUif7b3B1eW9nNyQ4euDNR4uAa1fquRhynx2",
  "key4": "5CsPVwyMiniWZoig2on4XnCSXk5gJrPbJprhUdevdpV87fpvi9v3UtErP8TnsBoJrUEfFEve86QMz5wMtx2ygsDa",
  "key5": "47JN7t6apitrm3mnYsco9kF9wVfaVWbh1mGbQ2S1CFkv17AYszp12MUYgT7j7W3aGEMs1XZLvFLaZQ8rurDYLt4U",
  "key6": "pj4Y6PuZti1w5bMcTXi4PuTKRunGaaFbYz5wGCS4BKJcsPsZuS1M2T1pTAmM7oDydECpQ2KnmFdqEHyqeKLcB22",
  "key7": "2RhegXoq5pXnuMCfjLCp13vUuTA5c9z55nhEWRFTYhbjx6FFVKweUPdqUyGkLGwonxtKTAPFuGEvtv5N2uxKxAoJ",
  "key8": "3qMRWeaFn4rCjN6X6Cj8Wpb7XLPBd9eYqNTDaVmYhCmuYqoLoEfWrbYaMo7TRLWKs6X5jW6ToPzFsFLbWgSUfoeN",
  "key9": "2j1xqGCfgiEgT7Y2PeW76HYEYGgwdB2PLMnpnifXc9aRKKRCNd1bsDWtodF9G18JsrhjV3NPjKF3cjHX382VQVWk",
  "key10": "AtBQwc2navAfsUuNEhnuxFkuF5TgG5HVhLZoipjk9XgQLKE6VK3p3y5TjZYZaxQe1wPeFSqKT7FsaJCRYsWdWfy",
  "key11": "4Cn3RLtAJ8TN9GzEXGrVrApCQL2dV95sTgKyMyTGeg8ETJyyoM9cj7poevDwRoCEsLJ7b1cLPHdqRTQq1EhEU5zR",
  "key12": "3wkGYnz3AfRZgSRdSAepkNHYhPVjvEpiSVcicmQSf6HCQLwngoJHvMsNyXK6JRgKcN18Q7dicB4wDJmjKmKmeDdA",
  "key13": "2ig3sEUKECJycxPhWfSiC8pG7FSS9ndwxkaPzA26RDCTDivPbuua8swi7Pa51RVyF1KfX84QB2qvE6rcKz858A1",
  "key14": "Cmvv3C2WxBpAWV2W2jEjALDayX5SwpTbEAeC4mq6aRbWMAR3PQAQkEBfKQEtA5P8Ws8fQdpJT926dQo4Kfq7EQn",
  "key15": "4NeEuuGgZ3yBrM3VBMSw6U8EpZ7h3PV8emsL3RgckB5esELvDwR1sSyzLTQoyCNBpYYb9gbL5NJiHQiddTKjQfwH",
  "key16": "2PBYqZM9aMKBWq13QL1dLP8rFCpvxi9VnvN8GKWgaoJD8KNob1Tesa1JSMpdL9QmZH4pQH9a9cTXrHrGRnhj1nJs",
  "key17": "bp7Duk33GBSX3d5NxbTrjTcwfuoMg3jroqpCd7DRS5yriMJrHMHUuxrrCcR2uYkPYCyFUjMUzvuxFCPXLLdRGpm",
  "key18": "5UNbEFetPMngcX2jTrftADEbYFSpafbp5gDpGp4cWamhqXQgXfw1PEi2Ahbf64onFy4chqw1tPBQSBrMpWQGQckV",
  "key19": "3zX4TZYqB3XmD6afdZmyJBTf5fTxjELcUchrKzQb7k5STiV563FbtxPZdQLQLqvPNrnKVPz8HYH3cvuXTUVCXUWT",
  "key20": "5Hhh3MPBMWWEfKLZ8dm3Lax3ppoXvP3HxJhq9LjA6T7yogcm1L5amspv1jQhxdU9JJU2CTvapz6tRYkuh52jDCbx",
  "key21": "2QdxA6tF1DbMHNeoAhcbzkUJ1ppB5MeY7tAiHCkaoMjX6fP8aE6R2pcbRABEU7iTopfrmwWLxuKRNWZzxNPzfkBU",
  "key22": "5ShVdCQxeUHK7jDML8ViiaE77N2c9LJS1hDarwhUeQ6G8wzZpF4dUtG5rn6WYckYqFn56cVtb3n37KArijhBEbgN",
  "key23": "5Qr22tqhFQaUzBb4yw6Q4PvmFp4GGgFFXkGA7GPdA2hcpzfqsgRbHnxjHBqRmnJ17UFAXCocnN6J6ZVAD7v3PViT",
  "key24": "4EVHKmJ4wrNw3gAvHRSh3Fh25ViaebsYnNajjqjipK2GnQEER8Cwnc2AQtqZityT6txqNmkfBc1XWqdvxxDGBj3z",
  "key25": "2qiERXFh8XxJLae8eUTh5q6XLekQ5JERZhjCntS5WvxbbHEdoyoKUuejGk5KzFjpwe61b76W7tfEQ9HY18vibc31",
  "key26": "3tzVKrzSJFbzja9zBrqfiDhTUwXNj13jygNKjnvPXbWG52MK6yzrWMgvmstMAgredeN3ZbvvVGQg7fjjgPfhCMCz",
  "key27": "237QEQV4tM2XFQ2ptwPtyWbq9ysNXwC71hSc4yKsxqzEYU2gTJfWBC8qpXLF4KWUEdNtiatT5hsMwzDmHdvkxyqX",
  "key28": "61mPa3MDZPQr9GnYPTZer1coJwsVEeUCbz4TiykYGPSm6whiCY47UDStVEp4LrdvExnNrhAJRoT33m7urVPGp3Sg",
  "key29": "pVH7qsqAkfwG3wXnSaLEen23ZWjq4ihBwkeBUQxDJNwPFJ2ZRcq9LAFiXZtHf7G7HbPa67TCC6D7cfAiuSkoFoV",
  "key30": "5Quz7ZW43qx2pUZ8Fkqm7yPiSYsQXpe7C3Q65KNEyDuUKezFJ82QRDNtV2tGP1ECkxEBGzSzAM9cP5xa3fECWzvM",
  "key31": "4tjGwQ5MV5DBGHuoNCUF6dsjeHWj2o9D2XFLTiG6hWUBX3g3mjidnDfGoxQ7jQCsv6F54vQRMisyrndQWdhDAuHe",
  "key32": "35fKLQfwGh2ATTB5YorvSN78dm3aH6CNwKygqjMCJcySm4Y4KzmNbjKKzTs1Q86ZC5bekGCed9zKMeGBZ1XDHRj2",
  "key33": "35c1RU2pWUL5ZR8GQW8avat2Buuh1wRAW5SdSwwFvLNdSN7yzosp8k2WvsuSKRS898XcpdwZZvHvTToimCsPDBYn",
  "key34": "5kSvb1LuvUHJKrnGi9zTddWHvyxgQnY9HNR4h424jGrA6dHtuPpsrc6677Ah76mdg3HPCueQydPKBWVFSnrVMdps",
  "key35": "66HinwHFt2brVe9Ufz8McqvmpzR2ULPi3Ktz5vSuFMoQBPVncKP5wwDbeeuasiU4zYBzHQrxrWTZZz72VFHUL2db",
  "key36": "kEK9PRq7VWYFhYsdmokgHqjMrrU6qFBedjt1d6egTTBBADvZoxHhtUzTAqL4CsyTaeBaHJXGN2JMMUPcY9yiESU",
  "key37": "ojJuE3xfW99pFWKiTmpUtdXEYp553wJBMVMispCw9uoDyhaY2VitQEf2o2VCqYmJy6YTpBXRKmwNhxD9Ksj9cT6",
  "key38": "4x3NyPHeywCNPviDSpUaKyj34ernfpzvPKuC3Boe3mwk5G6AuzWPBjMDCXsQAk8G3Kdi3wcs7CZktTJ3Eqi7SD8c",
  "key39": "4m72KTLV6B3DaVQwpvQJTDqkadMWD9TJTnA4DiFWwyhsSQtqS9CDuDCLmUCWRD6PexD17zFoRNCowL5jomLDM4az",
  "key40": "2okS3VPu2RxyQvaW98SaPjLtmQctgZaSgj2pRpNFvUKUCXWrKW86JF5bWr3gYw5hE2sQ7i3k6uSEiBWFeM24UZPn",
  "key41": "m9Roji99h8zWBVPc7CKWiMr4nWh4MFDseMWKDaKvykm4td5SysKaUB2eC8Y2bpM2a7eFbDYjNbAjevEW9fZGXcz",
  "key42": "hvdxwbX644uafJjGHPv27pnuY942UqbrkRfy49dTiREF4t6BvbbHDBwEniBva8AtRFvVT7cgKEhsJZi1HirzoFc",
  "key43": "aUBAV72hgw3cF6bwvvKtRnCWrU5P72ywmCj3ZJG8Su21qbeXp2nyyddqbYgqWRAW94icGzoBfJVZFthcz5vgTwS",
  "key44": "3RmEAvs8jeFib7PxQGJQrNrpFFCCA4DRzpZCbdEJAK6nE7SM5TLjaGsF7eBmibzHpVzZfjGRrsxNzSFZAqTAsrio",
  "key45": "4bqcDMW2QhsVmFNJ1NxppHNfYe9FPpDMASZAUzZVwLMeukN2mKcntr1ECxzJHDokQyo9PtK3MAkGYHHdXfmWQcAG"
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
