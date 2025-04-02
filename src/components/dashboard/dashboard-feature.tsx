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
    "5Sazsw6CeKSjvpzwSz5txFK5dJP3yNwnMEfv8ahNfp7yKRSoeYzy8CuMQxxWgH9KZW6738i8GXXL8V8krpjuDRTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBdAFi1RUe2aSuyyuSAq31tskTXSW7sqWwyY1qF4M74s9CNpcm82ksH5wSvL38rkJ4GLjdmrcKnREXJvQxnrstS",
  "key1": "4Cbgeh9EPLSM3MhvGcKF4t2Tv75ZaRCqzpMg9FHKhMuBs32Lro2DX4J3znzvo9CHRxwKoCq6NvLxcAgRhK18GTds",
  "key2": "2aKb7HcQrdSnQehHbiPufviK8HEM28jQZQBq161gGo9X89Vyy2265TLn8BfHre8HCV5JM6N5g9o7WbFGoa8dyryr",
  "key3": "5SQMf1gGAVwXXdgBpc7bUmSDZwT4XB2nneamPoiAKgRzzC2ggbMw3SCHpceLAnYsgQr4ACfJ5ti6BNgqj57xMs4p",
  "key4": "4894b9mn3n8Nmen8gMdFcZ4Y13YofpMqxwsaXsjTCF7CgCm1hwdfoi2grBP9XEyxe8aM1rePSS9Tj8gPwYSCNK6J",
  "key5": "3vigDVooDo25uQYaAuTzAzh77dTRxu9YN4xoQjvXU5xXTCpyxpRGHr6VSHLx75oLmiLDr6hXA71Zgf7M8ZXGEpRa",
  "key6": "3R18shrxLCcBXNwHTBvqM6vko8DC2KaLUhrFZa3s5fXj3GzMotbbAAnqSfmbhrBbtjY6pFHy7ZEzy2ciXcknpnzv",
  "key7": "4t92YN541BnnTvvx2EHCesD58G9yvvbahNiff77mLvgVj9MBzQC5JprLbc2pDj48SRLk5XeGgAMfn5hNj2MBWR2Z",
  "key8": "583JaEhrF3NZiaXe1PSY9ysin4qLCr8u3Nh6e3J6kt7ySEmaAzePWsgNG6oMDCAjQjX6vf9TRCWrq7FY5pSxLpak",
  "key9": "5CWcH5b4NQLWCH8i7UL1E2AtzSWc7fexDycZe6MKtgS8YEaJgEb2Z8mLLaowPaqXkspFhotjKcsTHyvT2nqpvSQ8",
  "key10": "2ggdJFXxCqj9rhGn6r6ryCsduFSjWG5K8WzMSCrj4evqisZ2ycshdk2LeQd9gp7iPpQXvapwtF8iNf1wiv1gMJRw",
  "key11": "3BHsmF1QTTr7zCsnPuonBC3xpgbb59a3cyNT2jVc6rX35Jzk12x5UsSurqLgCvtUDakT2GVtnxa2w5oi2bUGEQ5v",
  "key12": "2t16fWZQtrGNjkQgcLno3Tr5ASpqBphcYqm2zdhG7w262128Z3nkUA8aqtPRZrN2Qcb2kYYWXHbWcrecbm1LyTRs",
  "key13": "KUAN5hA322QE3PBj539suxUkngg4Ebu3wGLGKkzciVJejzUden7cUyJGrUBAufHDvaB1Ct81zBSb5hy9WqTRRgt",
  "key14": "nyxpL6VeEQ9rXZ4XFHUQKSTRqskKBXrRpNzKPsph1uXjZqn7eBJKrD9fKXH15Q4AC2PPTFpCXCowwNWYxJZfmNE",
  "key15": "3UdzerqGDmgoRv29fN5DZ6vXVHVtBcX7stSXsUhQbrdrzracDcdUPaMFfBT64eeM8FdzccKeTwWV9UEHfyGmC98m",
  "key16": "2FryH6VNk96qB7LRVp4CJSX9dv8keEdF67WRnA9s1D7Pka7jhSiRk2gmHLzGFh7ofy84Nb9LEminDL5gKiYDVck6",
  "key17": "3LwwvqisFSJWBNNBCQmBaLLibx1TueeREygAjfQwqWVSSD45VbzZ4ZNNUxxMug5z4zG8EhgfgXQ4WJgqkuoYiujs",
  "key18": "38WmJMNHeN64tqYiYpbTMTKXKCTT5AMcJueMx3s9wVECHngYaEXd5KPYFk6BT1YnJyX3J13PN4ZHadpBQ8EcVeXe",
  "key19": "5X87i7Kw4W6CzGeqbEkvCgEZyJVCHXuV5VapBEG4aUMisQJAKsVb49EY52LBzgwDo42tEDvVCmFR9SKzdJ7wTYkn",
  "key20": "2MUT8dWxtZsh9ueeKPEDDqQzUnxJXsVkQEK8m4urKsWYBuxvN3huyEV4RskdR3SqNK7T7k5ApLz9zTaBcJ678jG7",
  "key21": "237xVaPfqzYDjcHa3m8QZqsbq3KvwQ1eYeqQn339s7ZqhGJsUHCb3c8cqJCrJvFhsZf739uy7tpE9rA7Q6Yn23aA",
  "key22": "oyjjqHyQAbU2AnQUqRRRkguAzs7uKDCD8WH8A4JA7WqcHCXYMByYCL4UPwfE7QNSub54zx7KNeeVkKVZKCYc1Qw",
  "key23": "3SVviXvQ23V32UyZPfgqnCmra5GqmRfiLw4BeXix46utyDZWbNNtVvTMmVtvDXZdDhT4JSZZ3NRzLBj4LNWkBds4",
  "key24": "vvZdky7vwo7UPEBzA5JCCwANMvZesYU69EMV9qUdwzUMpvZ7pz1PKccSpsJTnQJ4YLp4awXYMTy7N3k59cTJi3v",
  "key25": "3B7L41Bresp4UiVSWsQvKL4qjDPECx2Ju8nK7YGAVCqC8j2LvALBDNyAhCyeBK9TddtGmt9zpR1vwdBEi3D95SKv",
  "key26": "debeyDAt7G1FehmjAiC2dDsUMBt4EuqumSFypRX5xBb7Xrh2yotwAwcBm4EejFgSQWJagXXp7ywRWK31CiKZgnk",
  "key27": "pz6dHPRxa43A6mh5BHExhvENZL1xhxYaZ3zWZnwDN4eGUPgPVjJhwRWC1UZHhqxsMgvU1TQhuXynK6w8yqonFGp",
  "key28": "2Vkt1DwAGrW67Ti491vsoHFW1nLpbjNA4vCpUpwx5H7T6YR92ceuBC1LpbgHMeHJXBDXH2RttuLCVQoK7CHDtmz1",
  "key29": "2tk9r4BCQHA2JCDhzcmKsAqE6awDqPtZ6X59buBjJ1waMqPUst2PQgWvxfuAbo7VqnbgJYoxkB8gyTcB9y6s2jVE",
  "key30": "3XfqGETB4HpuAiCGif7Mi4Zm3Qp1NKcfJ1Jmgna4k8SQRQj9LFzBcESLGj4efMeAXvrqUWMAVLK7CPzwubWqw5Ly",
  "key31": "3XEcBdqaMW1ZkRHZKozxTe4eXxmJQcd8hxeN2irmuGSV3YWwDX1vRZ1WkncmjMgGS6SEYgwdxV4zZjyzeMUQHF4o",
  "key32": "3cpdH1uHCezngTr3hfHtUDPxeTvMBqvDQBFbkYpuVEzC9212RVaKAFp8MgRpMnuop9mgJBu2TfaEGKnyP9nTwVWW",
  "key33": "5rNGSjAkcRgCu2WoEL3A99hHysNiTrmab4ZnxrdPTdXjqCNfyqpT2RuVZ1PpPz3EJ4rnDHqZWw4Edz2BwDWgXHYi",
  "key34": "4ykbiGXYj6kHtBPkzhwZviUHyZLAXBEJBCGPg7DEh2CQrzQ1tF1BN7L5Q7cojwzX6jEo42wGGTiYs7ibR1gxYDoj",
  "key35": "kM2hC1MgQUSUV9c5fqL5m1o74nfAmiqWWgYzXXkAfviW8sgrDWjdVsHVMLMmqV1FSGTTquLxhW79cvPHGM5EoFY",
  "key36": "4wf2PmiNvdRGqdsspnSNWu8URHPq4q4jwNAiwMQuDky9F5DggFQoR2yj9gX2qWEDA4srfYugJumrLVYn6zx8Uguq",
  "key37": "ZopsFQVL6H51Cj6Q8g7g3sKHWUS3UVSBpbFSydoLJxs6ZPMP8nmN3TB7JjCghqevcZTvWhUoyh7EtbCQ9pevR3b",
  "key38": "51ny1jQebNkA4Vn8PyXpzijxxsdZU8sUZhNYJYKyhfRKXz33urWjWWKpkw5hV9UqRDgtGrA9z7gQYYp6k1WFPbuj",
  "key39": "55P9jF2SBroASFyM1QgP6CNbToPeQozbG1DxVgXBEYxVXCPgQBjeD6gvUzJd6MNzdFm8DkwmBL14ELk6FPzeX4pD",
  "key40": "5d1G7xBD8AXqdogapP7exeyZ9p1sVeJMXbmkS6zS79h8gEmvuDzmgsvhzGU1RGRt5b3CgejDAitFfDvFFagk3Evg",
  "key41": "45FWz9dPCsqjhxLFTieFwWeTfoTR3fa37ukRUdPmtWxUZ41HswcUhXDKPZaK5cuLE4rTUvGn1S41UdTgAuaAUDsW",
  "key42": "6448qBsnaFWePKKui7rDBTUbqtcMaBEf7DC7HpsvcUniv9ZPLDrNGaR4WaNMbMhqm8E8xa7qY1ACQWXNJCyrpFjn",
  "key43": "55VuVELh9Gvr6twxegN7jDujn3pkriyab86qVsbg7q32dqev39L9WF9eYrQqtMfn3MGFE9E1DkHZLZJFFurAvikG",
  "key44": "5bdt6717LG4bgUXX4KQxfFNZq7pnojonk1j1X2HRyHXqcRxcBdx15mPYWSzV5hgdXuJqHQPWeXvPPWBahErsXD2A"
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
