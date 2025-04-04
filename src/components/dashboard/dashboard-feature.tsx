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
    "mTuEgn6KjhgWwXK3fbXESYNR8S3H7QcgSZFDtUZjNPJ1pUNiDtLhJxHGYELenk1mXTTVUVwBmSn7PZJqbtKNVhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2BiNoBJTCuNw8Q25pxSdSpNex2utNTDGWdwnMPafVyTJyfkRNTefViAv9pz6TBPTeT46YAkfjsJxiAhLyT7SqC",
  "key1": "2kBkvHZxCvbRKvXAb7rCMZQGVqQM5TmMD5QhgeQHEr95aRQL7LNFxHfoX1zZzsf9hVBr792ihcLkJxrnmJvPA5u8",
  "key2": "2aeLCGPZVNFxbFkEJirMrj8PVjxYvGkzq9XKig9EJh8zQnEXUiPLNyzajM4C4rFXdf57Fs32vmZBuQRsEhMjz7bd",
  "key3": "37Vbih3YkYgkfx9VMkEugEeebSyqe5DoTLoXg7nn1W4CK9keV2CkTEVJSKdC1kRsxwoMkK4jMTmywk4r1bZ5xbyk",
  "key4": "61XJcBFMi8RRHVr3NfzjDLfHZQUErRCVVkwTKy1fAKHLku9uBW3Enwztr18bmwjzoMdJFYjGeULJExRNmKTFhwiM",
  "key5": "47Cm4isWDUU7nworXrS1pMtAXWQcEKbeyQd6EhTTnU4MuCpenj1x7LtqtgijAL3FWntXTjtTQEJqyzMeDhWDGjGd",
  "key6": "1sXUeLRTC3LxFPfmwnU68vtTtsBX9x7Cw7vPh18LuQJmUojjozGr7PWBCGuaadEAfzeBktGyKGXYwLbfVvNChTZ",
  "key7": "5gqJg4AGfSrZt3BDZeB4oQpdaJ3eNpXDEWswa3Ch41uRa88bfR1baqWknh78TAUVeL5inMNbzoMCq3pmk8kVC2B6",
  "key8": "4vm6kXz8pTJniEsPuNxRNSpykyJu36PRwthqhLWTmpeJ2hMXteNX1mqw75aH8WLAogE34ekym81F6JUJ2vCP6LcF",
  "key9": "hwB3gBM9L8Kd586mLnYDcBDXH6a7mLUqnh82bYQJ878fMedPc6ywVSwVAzd8atsaZ71d22bn4xEWfbbpFtDZZqR",
  "key10": "5SKorwLN6hHQAmjNaqMSXq5EJS8LXrN8xDWtsCgU4oFY8iJiV9651BEDpKXTtkpgP5u1N6rtNuhr7WT8mJiA63PB",
  "key11": "5HF4CE9VuGXUcWLpUdCTd7J1gMktT7qCq7vk9YaPJmWQXn1E7utALn54FrkpaDhzxLMg8KELDgqir1pfChn3YkLE",
  "key12": "3rhTMG6cyU81nUeLpPomHUx67eDJQuuFAxfnhVD11eif4WwLEDLm4V4FGdzEELo6CXGJq1x3s3MyAQraUNhshFCE",
  "key13": "3E41FsABXqQ12Q57t6r94vi6zdUXh1trcnukLfFGnchGhNVLptz4QJTPibQPQub2jKQmbd8QwsEkTFwRYwuGsmGb",
  "key14": "3UYtDPLFKrbAn4V9dk3MRhcgFPrzfbkdUyPEA7KdvfD4Mvf1gDhsdo42QSRyaoTNBWHH4RsSPa3ZmK5PG11beUC9",
  "key15": "3XSRJHcQowEnBkJmeg1UCShsMXsHQCVkdThLmnJimxKLkzhuUxX5rPuRisEppeNK65LQB3TtKB3tzarDvHhnecYo",
  "key16": "3WWtnba3xGhTwyJNsAQNLudvbR2TJcnna3N81jHqnM4ijuy1fp5kCVdXaUYJFyKeo1QPLoqMMAtUkpfAbywMgvgY",
  "key17": "4iuDPdYqMbb4pe6d7bJtuANdm24owsg88kEcwGc2seQ9mnQr21obXzwdjw5zJW2o9zdRfyYy1BoezC8HJs2qNvmd",
  "key18": "2JqobKYjWBGcLYie5zV1Eoej816s4QNtBd3hPceAKvqACWVdjY2HwkCwdLUi5xutwEAac3P2ZtNuApb1W1fzSpjQ",
  "key19": "5KfyvZ1Hd2FuvaoDeedLLcrtBsfyqJcpVvX922X9NJTBU7JedATt9RbfLA6ypuo28f2dPC2b4mGtKbBLAqnYh1sT",
  "key20": "2BprhfYhr9mhhY7Qhsh4q87ybUUxdojBZVb4TxNCsSZXpsGCLftybLpDfNtBvB25AhvN2gsuuGVSuzwMDsu4V7BW",
  "key21": "5AuCvHRSAQzxQURAejhz2r4cRB6TzijDGPuw9KvezCc1sdWjwy4APU5ZMuqpeVAMEf2PW49WLJbP6X38wBWjouA4",
  "key22": "4joHD798S57WRryuCXCmMNUPyxykvFsgRMDvaPRB7LdkC4RY7MC4qkexvKe4xrBZYsXK6gHe6oMF9aveJZvJAbtE",
  "key23": "wun4qciqX4mjWPUfB1Fn2YSMAqhhJy5pFpXzKSSmhUygt1k5WiCkMgX8q9UYZuMRKkJyuY9KpQqhDWQfuw8HnYo",
  "key24": "EDLTeeQXt7zRa3nLwfF9mXRU6MrwV5ykPRgP1qJbEnRCxrtViqZdBPwR4HWZAWjVCcYknoMU72QBgjDvTWqPnFC",
  "key25": "5ef6s53PzayVnMrZby98dTR4ZyvTdTgciaUxisCMxzzCWdgLWKWTt8ii6vnBHjgBioYPhuXC5YWb66qw5mTjJxNb",
  "key26": "2q7rjVEf57yjjnXS4FxoxLXYidTy3dHK3iMSNKvKbK7XXskxwo3jS8gh3QVcGgknaJFSZbcZ63EyQUHVmv8E4Fds",
  "key27": "5KRSBCqkqBLwzoRcr5hg1bGfTRmPaRgzFKnzfgvn58KXstjCeDCR9juv8w3WTZ538Lkq6ZdLZTmFxkQ9RAsNDdzo",
  "key28": "2udUfEianr4DPQJDkTka68D2habe6BWWZWHYFjyfSgp6fLvx5fhxQFP4Qy3RmsyRd8SssZNGuBXWMVnYZmSczpuE",
  "key29": "3dMmu6NBjYBkFcYKytRF9mHwBwjvRHqH9KM6ACvxhzvyCYAgswmCDynH9YGtquQfvoBLvUTQ8WqTYjrwTbt4UV7E",
  "key30": "DELA3mRSJNea9CwpxEvMD3X91Ev7ZSQLRKLDMoLUxqZK2LyFqVWTTWSNBEy6XoektXjtou5VxYhLnGLSFq8gs4x",
  "key31": "m8eRtE3WDpvkb5A4LA3a5fWVSDmvFSXias4y9JcpBgTBF9Dwkv3wAHHZW9WesZGTuWarqWrQFfWQmE75c1itpDH",
  "key32": "xTN76hZzmmsgCw6shVVPacUkb6ffbFgZ1MMtbE7TAhNGrLzKn1Lp1r6ceuHWU7AxGHGZJcJyPhcJTzGQnSbaba1",
  "key33": "4xtHny5SAC7aB5HQp9pHe4kRa4bFvqcHxtDm3SgmMJhrisWu56RXTGobvsgxXJ5XpibhYHcD2q8Sh5rEFov1y27a",
  "key34": "X3KuxKyyjBmPWmaBqP3spgWPPdVrzdFwCpbUYBzQV5TbemfuCaozM7b7qLKcqozQjYokSBDFZ9S8196r6v158yT",
  "key35": "48FnstAX54AJgZHmvMN8o73SSJmfRvWpm5TZ6hEQwqX1Pex4PJ7kmUPdAQQYepn1kDRYXve2vNHPEEaHttHhbiAu",
  "key36": "4LeRZHnQwTrw6oVcnzoVQDu5stdt99e3qEeywgmFXNFTYiA9ZVsX5WiHHsAz9nsunYsocgGNSFLYmkm6c16NdGtu",
  "key37": "2A4nFrJMktuCWQrENnMmBfujzcXeiSzHA2onvXfW1t6NT3j2ETeRoyiqYDCahDxTU7rjRiaawAVxLPDJLTkmaPgo",
  "key38": "2foxFtx4AhW9D4njqyCcH6g4DkCpx1zgVQs12ScgUEBiVDb3GB3DE6thwv7d54xMzbP8VDNFmNLtUsE1ANXjgWeN",
  "key39": "5YNPUS6pk1yVHC2uVvLmiYtPyTPKcioq2g3b75hdbVxd4DwWgNt3QioipB2Y6vpfLmzrqXSJEgTVFC5nLczDrv72",
  "key40": "5VoA7CmBHHsJ44zFrKurmHkbCaNCJkty3KV6eRTbWkWoxxknPBYZ3UwRcupcKWA4v4g9vNadDDVQyUztEkGdyRGj",
  "key41": "zDywx3GDKNLWE8vYopiZUcwcQ4QVtJWZXtQQHtBGK2hT6v6uQq7293QHef97CgKHkcrikfrqF7mBeqkDLJWLrLx",
  "key42": "476KSbYjzXnrRy9yKeB5ajeNoc4DKgfFnfVRLuKa6yTyAvksxxYZdo4dqHXWZFbynoEJs2J22FHgtf6VxLuHKrQs",
  "key43": "4ZW3LksnHeBPALpUA7b2vZdo4bKNdc2cvyDtPNygVtBZQNQCyJfpAa89J7kGtnZw4sftoCZbu5DTssiVFXi3D1FL",
  "key44": "2W6eWDGS1KY8Dw4wGETKYuQLkz5g3cPDbDjeXSvXHrw4UtxigsSn8eeJt3Y28X5BGZVuvf2pRLnvxfuxf7TQ4Pr6",
  "key45": "2Hc5kphnNQCCBvepkEto29p13YLuH5nWzQG4YhZS9bNTWsnYpeMdprkAuA7kiCyQ4ceebGyjLreV8b1hppT1Ehdf"
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
