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
    "3nJn92MTQy8B55nKT43Fi9ercLjGuKSDqwNtzybbPS89JUwkZHuzb4iEHF6ojQZTqQd4m6gP8GDEhhAvPMDDEyrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AckLzAVDYmXQ38of399WAKrURY5qJvhP7kpMQhQGPxzSLC6TpKKHPVUi8UPbzGAKuWtTDbLpsJvncTtG1gYHWAA",
  "key1": "3SFnhQes32uMb4YpSikbr22a5GwuyhP4gtyaCgty8tMLDj4oFiS7LbT7Cg2xKp5Sryu2b4Gh6JQxhCXyzPDMdcjt",
  "key2": "2LKCGN22XuTnm17QChMbk2NrGVEccPMsrh9awuFZ8HgwrYJh6osKKBUPzssq2KEtnfpVNao74Qrczi4uc99Q4XZu",
  "key3": "5YyNHWseZGngMcU66uP7ihRpnP6P95Hh4SRQoANbZ72y4XnQAs8hoHbtxfFH12ZuAZALjoNFRUtJ34JXuTaHHoci",
  "key4": "2x29cWW5rv2KUJFgT9jBJBiRKF4daCEz7yVmAgqeiUfYzcWgZNwwLnnaRP7qd2qHNNePHB569bJcYUF3BCFGKB2m",
  "key5": "4ZCZjfV7iaWBtWcUEDhqrgg2a4NtBoDa2knyLgLfxjnJNVNGxXNhRn1P7Qsoooj8CmwxfbibMoYXyyJjLAj7tZqQ",
  "key6": "x5zMoQ56VpC8d6VAkYQswHpL23hpEP9bgHXkaapssPzbwzu4QbhAY4umijLQ21RZa6JcuM9Zg37HVJkxNLRVBvJ",
  "key7": "5uwcpSd3i6CeSk8Gdgr6W6wWNQt6K9YpPkwWZJhMgcfhRxKGGcGcwPTdLvHj9Vh2dcyN2bLRGJBiCqKx6fzqLYj6",
  "key8": "49CN16rXCrv3YGEEqFheM9w7eS2pC67o4VdkDesYJwrxeu2kv9eiqM6CFwd9MyDVNfW71syn4R1eSMRurzxryiCR",
  "key9": "52oXXbxQuDsvPirmKEUpvpKECLCe83tPAQCo3hzSBPPPqbMXTe7SSPBaF8CeZpxvHPPKBhJXQj5oK4UUivx5n8u5",
  "key10": "45mU8KyRenTdXqJj69JbcNpfXmyKqLyAoajqNZ6xn13rpwED3Ybh3oxcjRTBQfxsn1zDSHHF4WPmjJbiFSW8GWs9",
  "key11": "32rpyPWnwKBsogc3sTkSLaY6GJ3QWHUebSftfsmdneNdWimtAWfohRFnCYhqq42EKxmUUaike1qnnHYCFg4FgzGA",
  "key12": "4TRNrLTZPBXM7HxcCDGd1vG6MNgki22pbxHrcPem6qdK5azKCDVSNEdDo2YsrzGnc3HfrxUytNCKqo71qS1d7zt6",
  "key13": "4M37yvdpame6QGTGnx6iyB3tZLsdC53Ev59uuUgfkz8JiUHh1xexyeB9nh6jb9C333JGc2c7Vq7Lx7w5CeoRqcDU",
  "key14": "XpLXwL6zmkXr3bceBLfyHmzQXiZ5TMywjBsm1jGn7UC3HbXDQpHyriwsjie2bq7vVSXxoYGuJnHXGif4k66Hcyc",
  "key15": "5rrGafxP1HSqAXkcA9Vd6gX7B9Sz18qyHDq5qjEEcLx3sH3yGWjjbocSQc3RUDRQXmERBe2s2JQ1yjieKy4YEHPH",
  "key16": "3xGdkLPRo4XQZh9NcPKJfwBgyJCwpD3tVQC3utvk3FU2fogTeXDdNB79JXR67RUwjRwMNUSz6xU481j5wJDTaLy2",
  "key17": "tJwZffXDRotvagSr2rW9teaNskeHu8cRg2GpusVfQsip1aDfoKGtdyyXgSLs9RJQCbN43sMbyzK99AVTFDiKVos",
  "key18": "4BFoyXiVbmCzKKUdUnFs2RYfdQr9RQj5zoJuGbu8gvf9q2jqCtGPhBBNKJK4pgG3BXhXuSBMX4Fx16FDLj7qDHVW",
  "key19": "4Lq3LH5Km9LoJe2sYmT9VsVw4gRPQgNgwFuS3dqgp6dxDzjr6n4B96P8wGup9sjEj6n26oY97KhZquMuWhEiBp9F",
  "key20": "4enQFyq8XVminnJXtRkdxbk6i9JKLQshJWfQmyMpvHK68NPaA2gjhzgh3bwt1v7S9Q1n6fVrU7P935pVDkCQ2S2",
  "key21": "2sT1AXn78QJJV6jB2jr9Jr71y53YH3Uf8rqP5tFK8XRpeHEufnZj1AzSXKGe4gb7hjafYg4YTV5cFH6J5xhmMB8r",
  "key22": "3RjGTigJ9E9kymBMY12w3pcMGzfrAN6XTR1PUNU2Hqssw1oDfBTmVMkXHk17TjdYNQFtDXrR6SFzk3Rqb9suEcCz",
  "key23": "bvp59Mw8RCvKY2mrYWgAxfyiENMU3E4ddbXbEbgyWGqi8P9dAm7G4kJFp5N5eBoPkyicib3bkfVGzud3qVrszch",
  "key24": "4S7ubhBXKa6J87h7LohY6D3ri7yetzAi1Xvt2na1fmuRjZ6nahAPgKGYP5iTcryR6v5d6cPR45k7ZQnU45DMXP14",
  "key25": "4VXuffY3XKzm2ciQLNGSa2x6AqDC62EQYh1GQEiuDMmQbBgCYHMkyNGxatkWwJAnDYjtzVqtMs3Dy8tNGoMvpyeR",
  "key26": "21YrgxGQtbAyF4ACTQLJcAJb7NTkuhhKbUXP6eVmxSqBc3d1SgsGybb8H2GCoRbroxPwPSZuCyusLnuy9tuwBzXv",
  "key27": "Weg3So3cS3aH7gYqMFWbRQUhhxYxuhcVf6pfbMf2TvwTt6dveMaV4Pyt2ucTB74dtbaohy1pvKiYhcaMgmNehhb",
  "key28": "BQ3macLEroDn1JsEXQW23qqvZUMg4bBtBBPVzPkNfCYfxoy16Eh2Nd74ec4pPLuW96zy1esywbf7p2Gxfgnrouh",
  "key29": "29oh6sSvL3EMEHSLutHUBxMiyLKGLM6pWF17NDnngALs7XFFCYhcAJMa5eST89xdz5ttUnryEP1r55c4q2U8jdry",
  "key30": "3p4M5qV78gEdKB9mm5mq4bUyWaFSMyxEsAXkJvopRCHfTAzKLc8iytt6mEhkF4mGcEC792uaa2S8uMdzksrNqmUq",
  "key31": "4RCw81camUXCosycwo3hJSFdXRxPs6F4ujLTH7E9Dt9UqarrrP9WoAYDw1cHQj3dBB8rFNfHF4i7xd2vqw7DmHgg",
  "key32": "672bW2t64SgnCG5TxHyQH3vU2dyf361eDb5d5DBef4GaKUo54Q5tAtqxD5QfamMcg2JffGXVPyauSJAJMaXbPEDJ",
  "key33": "M9VdyJwuPT7aqXciSSmvf65yBeVLtacCBNCJLEj5UvU1kcFNfiXrYg5QDNfnCNK7ECbdw4Lw2NPyNv1TyoxN1gc",
  "key34": "j1b83BGzP572C6ma1XaXjpv8GAaP1n2bmoJBxq13hG7917XybnShwRw4PuBCRZPaHpFxSWFUwrQz3yMFKqTnqme",
  "key35": "oAJPNSQd7FPHwo5XAPyfJNdoisRDfUQzAtJQqXaKW1C6MdtXWSARDJqhaoiHud5zbYW7cEKhyD5nEG3EgmZcYoQ",
  "key36": "5xF48u3cJRU4Cu175UgUku43urxRhoKw2HKFbnUWbVSDMXK6CpJ92pWBoKMbYdnRUeFqENC7kfoBy4wv8NUJJT7X",
  "key37": "428RGkup2VCrbFY5rbg4czkHxSfCo8SzqTxcVMfXTaM3x8b6kofSmczQ9KJT51Pmf9FvYWZotSw9zXJBtY7XBwdh",
  "key38": "2WvjcktB8cTkA3tNdptr65dVt3txugqruFx933a3PC7meScpvBMP2tPMACuHGdUJdpgmk82FYfuMBEQMve21Ea1D",
  "key39": "3z6U6xkDqNXv8rhErxogKFjEHrkVtoJYrnmWEXVUKNdGx5EUSobGL1zA3JEMYdbsGJmjMeePDohNYSDvyxqAFpEd",
  "key40": "3aREjzJZyMDk5BfcmwRAza3hEMBqgvU3QmrJr8YEB8NtD7wCxGp5vuwEot86pT1QARXVHzzuqJtmgxZMQmAqZbM2",
  "key41": "3L57xZQCeSwLhuQH5ZXCaHQBc5RYxARAyzR8Gw3q11QA6NcP2GpNRBVHmyKv9xPQdyjA31NgHwxvLisnyQRjpEYX",
  "key42": "3Cfmjy6UKkSbuXCtAdTd4D3a1GTu8waMbeW8TA2yZhfFfJ35bSovpcg6QzfyrLAsqoihgu3FGQTCJeJrdZ2LJ4Xr",
  "key43": "4pjyW2adcwSHQRLLLGfrdgKCEbTh7sAD6A3dQ5dtpDTyhoHgX3N9XmpRPFPTK3TdCDGxGxrP26qMMZegWojf4yg4",
  "key44": "4zedvf8kEVYcgFLmfzXNG3iMWARuKHFxc1hCiUK6gTkKpdHwYjdgTZZZT7Zf4rmsEifFmWz4dPQAttsYCr3ScNtg",
  "key45": "5JeVLCdc9K71BvUvUDDCwawcZkn58nkpNb7VrVMDmJ8MyiQNTeDw93YVi8pTauDhXiYk65KwMiyFGDWPkZQSd4R9"
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
