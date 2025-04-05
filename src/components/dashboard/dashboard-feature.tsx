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
    "3Mg9d31Vg82HA96vKPsJTvSMVYvJfLo17T7drhottx48i9Ad2tCuxJixXoXcrVVpv7MyUvcsxAw72JJkEGMfoXk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3pqMhx4Jfuvp1KY7fAzwHbcACYokQpvb7mxNDJRA9xb78no4gKpFUxzMb1JdLyiGSeipt9D8qdV6ujYU8afMoR",
  "key1": "NxFu6qzsKfB77xgUi2BmHrPoB1zvt2UbvMcx1TuSd8Tjwp3YsgFC5agBayDZCGGENeNZTsCzwp8b186mqefY6TM",
  "key2": "7pbFMa7sJHgizvvBJgiR7o7e7gvw7jLep3w9miTXckKz4Ha3XmyJcRJFtxCJNxsYkTZ8ABPSdL82c92pzpUNm53",
  "key3": "5fdaGaBtVNXh3EBSZ2EDLLf5U8nev6qXaBAxUGTmWqgTYT55cAFeyWm2zxjJYCSUofDhVwyBqjtQTJB6yAkgGhPm",
  "key4": "246FvZgPHgUvSgDvwtXEAW3sG3YhCXsZZvCHgts5NC6ZHATHSwNvrUp2MWJ4s94jtRvGhzFxhECUQaayC5GpRBWA",
  "key5": "pudrbmSkNej7gmQHJtDAGwbLiMxgodaktvG87G3RbSP1zCV33RKoEnbaWfvv7ru9deNQgnEAGC1a29byv2uVf8h",
  "key6": "5RV8zrZRNfx2pwm2cL6So5PpjJcc4VCsyYYoMDpj226UG9CA79GgjKruLjDFsVB8tBfkagDWYaSZypTGjBrbsjKW",
  "key7": "3ZQKRPk3SQriPmFSAVv86dUBxgsip8z4qegWDTgNNrAvH5bJa5VVZaJwQr1z5GD1aZuwZwsJhTzKvWJy9zjY5Ldq",
  "key8": "Ymahv5CRNYtJ9ZZkhbuSNs9haAg1BePKWSRokrkK7b71ta98EMcqv1NuwJc6U2p1vcgDENvB4vgsY4Xhxrxk6Bg",
  "key9": "53LeZGUQ34dB1vZEdTgobiUtBiPVMCj1P29QoxMHEXfy3GAZidtUYkgm6djyEFPmkKaHneSnKkXDDhNppUHLdR2e",
  "key10": "49t6wMCK4VR7sbNirixKgh3ajBrUawnrGmYwMe6j7GBMDvwYE2n6qg4fweaVyw99VHWerVEjveCoU9TJDkH4BBqz",
  "key11": "2ALkvfDA57Pb6DRhzuUiWRd4PBkF8XBEimKpaJ9fYM6w2XnxhGhKxP359PayeA9iMJJT2xK1E6RfSidkcLDGZmyQ",
  "key12": "QTCmdRGLMYKYsZUufkj5GGuJPzijas3SCGvA4fXZwYDRTHM8W3fKk8k4rc97ieMpGwpY4tT8yS6daXaWm9f7KHE",
  "key13": "2MbyPYbEf81Fz1vQUodaA4rdBZUQjpg3yHbEwje7V2B6Qj2ELVDU92BtsLxvaip3dJggt7F7JBqWBSZQ2X4GsPCD",
  "key14": "5pQcH2hkRKsFJFKq4TmW7UKSyQQwz52sZtauLsjdaup3UPK1Tx76kut5JzqTjk31X7u2FWExcbnRqkNw2FQmVA8x",
  "key15": "2PGRf1zmsQV8nY4rKDA1nmD3HL8LFfQK7hCAnjFqGucPzAUTRaHtyjuntaLgmE9pWixJAGmErghDvNdXEvZc6wiC",
  "key16": "3Kz39J1o6bMLTPobuNCCG8tjUs8gbw8uPQ2Gt76PtQUyYbMt9BtqyoNiRNvfmiC9ZzSEeM2JfxxorYpmyc48k2dz",
  "key17": "3HpVf1iP9NhxwMP9tddFPJFoD3yTwzKHgcEQ74FDGE2aVc1FcwH4cSuCB216sFAg1nRAA54d48nnGXV5XqsXtZB6",
  "key18": "39iXAE1pjb5xnb95V8AEd5tZk6rEtKprTAVQzPQ8vjMKcofvtRxGYcwsbHLkW1Zhqgz1MkkxivgCdzmBPom2EbFj",
  "key19": "2mQiKUqJGoCUsbHgd5CQCrPbKz6twd5wUbBkaqGTzQjzQWCUbkgk2Kc1ie5wP72y2UwrgADG1AhwrxkJkUkT7EYH",
  "key20": "522ZfJiGJAbzuaycq3b3KkYohLv5aJ4d2uYbEmwhg8o1y7pdQiBYVyYvYeg4yHEkb82kzjzYCe7bY49axQ3AWBWu",
  "key21": "nB4f5ha32Zo9Mhvq42StQ9chgibM7UmxoDFdpJZZg1GZ1g7CRgNRDsBY6DKEhEpbX5gSHsotJtjyYcKhysAjpvA",
  "key22": "2LV9CjxXqvXbqw1679RhX2vzHA6BFknRwEHXzx7kVE7GeSpchFuYQrcyXozSLPysQSuPC4G9rYQvbbk3GqV6SR4K",
  "key23": "2whiLRaZbHLRnVg1ExTibqYBKbm86eV4uZhsvGxKARkmBETqVMmL7JB94vp8bBW9D2oUJ1obuYABGhskRJaa5r2c",
  "key24": "wfibBPqaxBd8JhjhQCutovnfW6eu5G9bqxZBPus5M1pVCBUWgrbpYxrTwy57rMPiPEvCWhpg53DMHhq7h8sBjPn",
  "key25": "fqCwX6fq6WUDKTufdkQnXDsEqSDw1SsER9hf97hXxz9ujBcCfWZnkPoCKSgpAAa2TX44VfwQb8ufb6cdsPMugLi",
  "key26": "4a2BUcKMvGhcTMru5cUsDe3TTAhSWxfUYqmM3asPgHX3PuwvHmwjufgKZUg2pRZzSoizcr6GVYdJ7Qgojv2xJ7r3",
  "key27": "5XeJxTMj2b5ZuVHY1icnp9NyosirGyEhFHnMR8Lqe7EbKi6v3m1eq7E6fRByRRLfVkuvqQhkyKpJU3b71f92n6gn",
  "key28": "5uSXBKJvfHTXMvPsWRoChvzfSoenBef9GzwGqGap7ii2GuRiCL6edRfHmbbVPMsLusiV3gAtkRWjH1noX1Kko2mT",
  "key29": "645d3XDbMuMkndb9N2gq4hgV1ZuTMpgK9Gig3mVwhUyTKRjwMP6Zf6CXzmymbBMg6UmvBPUh3KiiwYY58RCRqEDL",
  "key30": "2Mbh74c4xHhMXN2Lo36hTsBY26WyC7KqsADHb9FUh2XuqFxXfgDGJfdG9huaksoRt212jsa53gEqNWC6MQdpwPft",
  "key31": "4UZvQhqCvZq51LFMMDWxxDLU6cQCPcb7oDaUZhDq2iVmZHu8vAftVxEw9wRPKDmTBPjLMA32QJb2AwqbtdVjFetM",
  "key32": "48DXsNFEf71ScamgyRbmJBLDcoNi4m3wW16DGbHBxjXJeDxVESpPS5bU5ggLc2QWrnU9Xe8g7mKQA5eT7UmY1Lt7",
  "key33": "5Dcp3xiKgfPpnKkgE6yWodsfHvLq1VxWPTF7ggDe8JmrQcotubhs1KCGoausDG6k4er2f1Uau3XQXTQTdZk1ddL4",
  "key34": "2htsbegJsUfmqQvXE34GSxkxH1Ccwnyv3m8Pt4astyPyTvW9L1Z7mLPcQRvP4eWBs1VTc2EpvGKiWrhDi8jwLeZJ",
  "key35": "31BXw9FPjZL1GZEjGDsV2LbAVVdNxp6kwWsemB9ttWtdgUmTyqTjwBpqcQdP2259TekhEFfSy87EtTjBGaCM9Low",
  "key36": "3QKeJmKacEAmcjrUKxx2nd6zGjquAAW9XG6qrKAqAfQxmBYqBN8JFyqxJAzr92AkBGGR2udtyKeBRPgekR51QjiH",
  "key37": "5KoPdHkvroJrBzMdSoT6vJM6vbn9fp9gX6tHoNp1mwbhHm8Bxsq8DNQvc9iLjP7B6ArVHPD9fqbwHxyF4tkPDpa2",
  "key38": "52Ckj7SyrMZN5c1VcMFZLR6VGimcWyShZVfh6Nu2ybfeQADmZoMyK1wL9KheueePFTi21LP3xWrcfhKr1VY9N6Sf",
  "key39": "48c6f4AJgwJ44zqbm3g2mv3XdJBD3MU96GPSdvtJ4RBXeYt4KVFsSdTocezmanUe5Xdyn41hLPLzb2BjT8ogH385",
  "key40": "5DFymhCdiB54de5TNQab2287ceYhiPKoHqFpfsMn19jzyaHX5xRNRYQrUUhXaY6rMqCDzhqWkvXy6RE4yiVedRQ8",
  "key41": "fBEBSaawk2z5HrjQ9AZuQnRxH3LHPZvZgkND4t95u1NzQiRkhDBUVFB86K1RoEJgRKcVUgFQ3MSkxLzaBrBU61x",
  "key42": "VLWgQ1CgWZ9FZLAc8Tw57v6PZFPBCPmddmTsKU8Ab5gMAs3cnsm6NBvckA78sZZB6MjapEZUjkS7hqo4Qf5DCpb",
  "key43": "x1fsuyMm1VQBoHvpHhEtz4xivDoiLdE8j6tcdoaoucMjqszW1EQJZZjQKrkTfgHcshTiFLsRA1jRXFKuY5dWHxf"
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
