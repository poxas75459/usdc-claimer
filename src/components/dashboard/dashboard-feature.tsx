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
    "4D3DNtXC2YqhbnJWGicoWsbeL8ePW4KAFk6apvig7vdiTqBMCoJ4mTGKmi5WxvkkrMfJis7PmAXGszE2gGXL1fEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9NT3sQTpiwqnyJadeytCqFe4LsAN8nRoKhqhzKBZ9B6tJh2zBnvyrgSEoeoSniMs3F4613AMtFmjLc81HjZqix",
  "key1": "3bzFz5Qj9obZPnFb2CwAd7dWzJoLArimi7vYppqQsoEQnJJiNF2oeXmC8NUMBmJmbksRMSCyquddyUcbtD867PwK",
  "key2": "58Sr9kvWH12uCtXQQkWbDHmn4yfgDEok4rawFaeykh7yLLSgAwTbzPsgoMqF8bEJTz4EAv7LNEzdG46vf999CdA1",
  "key3": "55GyQv7AT8odiZDhLa9ZKu3gxDanSGD8mpXkThY5DitjTvyo4KHe5vA8h1C5LgEp6tW6To6V1GKXDDXVHMKx1tBL",
  "key4": "2VjUxiSakepe6xe1JVr3RFh2B6mQNC1kNTDvaw8jEMBbdjeSfnRgtssJQZDUtjvCXfMzyLfyM9qdmQRiVorj4uZn",
  "key5": "2kZtPeKVf1vV8hQcWFHGMbHdfSWpibaNJ6fuYa5mLVRTpYiW5jPqZchXSTnz4k9ZpmQ3gkZmZttWWXtzEBmUdXc4",
  "key6": "5ub5obyFYSPt2V2mQ5qFkvj9cFBGBjsbWLGBALfXLS9FzS94uaFaCJN7YBHrUKwSFr9UZhNCDDHL6y3JpHBz8pYr",
  "key7": "5sRCK6MysU2TLB9YADYyf6V1aw8arZEHfeiLLTHx82rti3KR2BEubPyBQSe59hn49sLiPgSKeyAtW86gHNmzh31X",
  "key8": "5A2RdXW5nxXfqFSDuV86q4CbbXgXS5g6uMY6pmh1CAR9xZnsSpzuPChqSprKCC1Aya4YP2aQGf5KVvD87TzQBXdG",
  "key9": "3uxw8ZKPxPG8d1eLYXRxYMWUwBTVPjxrSPvfXqygH5VDREHEp9jtmDRvT68rrbBpYx8C7vc8pvoDH9XVxYCsYDs8",
  "key10": "Xv6iuSGK3JGd6Go7AzCvJhk8v6F1jq1SBuU3VfQ8F9c1VjpPUxD96B7D7mAtvjD9PKR8ed65FRtKeT3FWRwj5vF",
  "key11": "2EhpAxmo5so2GECDPNpu2d8vsC4wo3yMpF9331jtg4tVAPcPwN4VctMiajMmMkXDbxkLS7ffBfxjARX97CFcDyFR",
  "key12": "Z7JPVijJFz5JPYP54T45Ni9jojoR2UZ82CZxQPVzbkJE2TFrkMoDahnCfYJRhUdq9Sh6YxPMJcAiK4Y2o5kZecz",
  "key13": "5ujsSCspARc3eosvrb2Xz13RjGaXfduXB5DEDFXJPzxtUVmM3H8exbEWCZ8Zs2UbTYSQZiGwDjCX2rPyfJHu4m5o",
  "key14": "hUr5cEtCLrVPuaFDmgdsEr5acJv2Q2QEtsfnSzivXTRpA3CSxA92ExidHmJGsijMo7GXsbDTbSL8F2cbcXLNt2r",
  "key15": "3CpBWLr7MrmFsCaynyWmnBECkpy8j1sVSUGSKmBEhycsR4bKQHSPiqXZEdzm62NMkJcxX3Noun1AagibGZ6C9wSJ",
  "key16": "3XfbivQSvZZm4bdQFTYAMRoSxxWc4F6A3T1QJz9QJL1friFv7oznZvprsmUuy57SBGTthbMpVuxv6zMtFoggWTKC",
  "key17": "2rY4EXT2JzDYvBZteAG2HDbnJ4qcXu9fyhe7ZjBwQXwhwbCYbgKiiPRfesCPzg9K3zK6PGJU28CpyWAMk7ziExax",
  "key18": "5YGMnvrAMnkrTMrUJWespjm43UeHT6DqLRHvDk8cv7LRyHADPHSHdFfR87zGLGJML9bs3nDhRxkTidSjkDBkX1Yq",
  "key19": "2oRg5cziLvwECASmacjRoAHi8HB87LLYeKa3HbrLSbp28J4XMxTN499p1rAKKuzKYJyt29kWMk4GkGucmsqnoeHv",
  "key20": "4pLG2XP8xs2buLxMRPbfikGdBtRb3hGq8C7RroBHCg9CCQ6gRhLiqteNDNnGdiWaTQTppHsBK4DX11D13XmrxFvs",
  "key21": "5PETLEH1iFmZx4RHChRWfpY2Gypwgsxo7hCWkAjY1fHd1UFCCGuQvoPZbFyZXmf8vfEDCCVTTsJQMRHAVtaJ43ua",
  "key22": "2dnSW1ghbL8Zw7t4skPAA8CVdbywy45Cp1DXQABjhVBm5TDSUby5QgJtphTeHbHvckPeNiqptbFCaxco6MVRWgph",
  "key23": "2yEHjqsAxDb6PmKcxRcSwa7d7rYhWtEVLHsxmcybtVvCHksqkLHpRBnAcJN4tedHg1pYmZwf2GSewMEpvtSB2GpS",
  "key24": "5FVmyQhzdTg9yaFbwoHFdYWVB8KxTP7br6gcSZbz6aUJYPS6io51xW74nRdNpJbLfHBBpueEAq59Z2iaa68stFBu",
  "key25": "3PfKV855FkSsM3QTP5vmy9x8RcnvR1kXF8QoK6gxLciqe59mWSyREXPB6s7oKyKze7bTP6wbr8joLaxcz6MrwFWW",
  "key26": "3SndNbsa1snyVCor2Vvj5LJBPxVjVV4d3HVJcDoEJNkzUYkpdh8HSueZuEbmxDrTg6ryFzNGJd5D5EPdkSUuBbdi",
  "key27": "5NeBQ1kC4u6WZytVytdwNrXmXM2pLAGPSsBZueYktjxeufHynbthLBxJ5ajTU4B1PDV1aSXtBBPpQms9K7heQacL",
  "key28": "3A9rHt9FD5FZjeRtAh4JVpeQvKSLZi9RU93cZLNqyPb8BdXhdWemTLiTGEpJsSVAaGhiEs4a43auMskrLvCPtm1j",
  "key29": "3HH1BV7NKW4NYa4BFwMVdc2gCJgEKp2eRUYdTYDN5DjtZ5P13uAEpKB7Cuh8xitpSHhXVKJDT6TNmcnL5QGKFLkW",
  "key30": "bX14hXfbVQG37S6DgSQEkjGKCnBn52dbbZe4CCsWr6yFPCmnhoPWpfZfdjZ48wUEZFcxwSiTatDPPkPbVcVc4r5",
  "key31": "4DJ285mj79kZCuAK8jFExczzUmAqtiQDRsMzVpAdyhdnMhRAumQ9hH6pwi6SrSLfDiu5DdryHQmyk8oLUxCnkH9w",
  "key32": "2Cu3gF24auttuDrtXSP52K9C2AXJECczU35NUh3ZBkcd2uvvYNZaB4EUuMNnNPzgLth4w5u5CiJSrDxY1bY7CNi2",
  "key33": "2g7TTKDdbiQeYZyaXHGGpKewsuZSPHuywYbz8wmPCTkhmjs1N8NeXHGHdr1e79TbNfwniz6J15XRYqq8YzCH2zos"
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
