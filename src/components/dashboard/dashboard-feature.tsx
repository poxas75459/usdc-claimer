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
    "5ZUP2Q7uyKgYtvHfX9xZAo6HVmBR8YKgsdrWcUKHRq3qDzRVamRrRVhycQuN6mr4ttFNE8WSXw3zQhr8Mh5N2dua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454F4orJN67GXLLKAzppKEKWtL1CaRPNiATNgMbKXysyX6TcXBdVACh5fiW4b5WLwfpBp5Z3DfsQGK7e75vorK9c",
  "key1": "26SHPQaAtZ1NurNfCkBbhFy2TWeb3PS5QZDDTxrgSXUBqq1kSUPFZvjjoV5qpTagxtZigP9HGerUGoA71Me6kVc2",
  "key2": "45uNYrmyWhY8bmHUuuRDGzSccSsK1QrbjyUngnjdhdZHfzZFoGXEYdVTckxoZKKvAw2oThY5pAM2nk8p89hrokWS",
  "key3": "57QYGCGiXyqpcGjGxswMyZrTYkawxYDXqGgu4jDbmM8DGXuJsWhGqK9dSCheaogXqv72UZjSKdWrLVQZo3H8RYRf",
  "key4": "52kKxsiLzae6VNncsE2nf31NsN6R7NLrNFXUmjYFUzxD8ci1fNBKSMd5KszVhB42Bh8Wvd7URTSmeuXJiAtfjxTS",
  "key5": "217EZzf6ZZSoNV2dGTYP3kg1gKRZv4SSr4WcrHCjfvDiQmfeSf3TVEZmbL5XUvnB8gy1ihkM3dVw7TehggegpV1q",
  "key6": "51kCaF1DyyADuVFxPNLUAkejdSvbuVF8Jr7Cuv6qcWzoSHooa688rKzFokYas7jdSmDpVbLBv8JJ8Du8cyqWDPkC",
  "key7": "TFcnviCZJLQt3c9EmKsq1tKWHKXcUHgeGFddBvpWBVL8EZ4fUdNFwwcpuAF9oofps3uxjzcfHZGGj9gacAGYe79",
  "key8": "ttFbNo1s1kcqSBf3zLaCw1n6S3ZPQSUNRu2zqF4uPwnwMars8j1WNBio1MFNK9ateg9ZxAvdytbCfy6SixW3Yjr",
  "key9": "9KBsjDLBctTpuxVdsyrMyYcogdWKVZAG9Cyo1gsXsCQPMtw93Asgz3o5uki7FFfmnHucbEt175kzrXNA1msiASL",
  "key10": "4VcoCDwSEkJCiC4fvpQWwPk4WZSjor3iGC17ZiLjEV5uhqGatq5hZm82nEzmT1aNSkuEHaiooJEfpiLpuLptMm8E",
  "key11": "2SMdMqMH7FcxScxS1sKDHez11L89KXVR9DC9wdrVYCWXKbtU8KxLbjQrtf1sGqx497Da7Dad4pVkq6of6fpsy9Fq",
  "key12": "2H1BSGnRxdmF9j2RQk6DpCxHwaNvdozBUx94jenruqvU3JX7hT73WcaVWmtGCAcgL4EuM86ypfgbD7dPxwc3Fwqr",
  "key13": "46xt3FTdEJd1N4nBfoUN6bUMg8AcmFAPf4D5tKmxzdz4Vwug1QuQcR5ZDANbnjrjW3H8ui8rrRSTbmk2bJhXac79",
  "key14": "hZGPRZ92XpHzeFVbxMwm3yjprmP93mE5bkhz1sNULk6T4Z3ykCY4KsW7rETL3KwAVX18d1v4dyAPMpAXJFzajjS",
  "key15": "UwhzdDywR2pReVsWuFQqZo9UiSg6hPAgn8gx8zeQKG3XgtabxwofjrQrmUrphHQWUCnQfg6Gmr54hXdWxNKTb6E",
  "key16": "2pvfoGVtGKatU7aFyyNXZMMjARsKrgTvy7q8FYghqi9tWbQDTxciagdavzk4bZ52eUcvKeMoYgLhMuTHpvE5BUw2",
  "key17": "4Sh2dGus6MGmgYbebYtcc6H8vEtJPcBCpE1ie169vxCk4GZMKZgAky3DWeRNKnT8bUurXqH9JXFYDDfUVvXJCuqP",
  "key18": "7kTt2Bh9TwK6yMeiDefg9wzK1E9DVAbFX7QhDPCyUhUAzo8NWSdv9Y6kzws4KtkJZtNVgoQ8uUugUi2tDGSz65S",
  "key19": "2xArwL9SfSqH7Ezp2Nk3NQQ4Z3Naz9r1UaGZ3NomhDEdT98SkesVWc8tyYWkK8RHNBrqmxGpv49AiAL1ZdotyzHQ",
  "key20": "3CXPJ96FB5JFtx8MLp6qh2NjbLNPL67JXGdN4gbQcBwpJRjeFFZPpPyfpWDJoHnexZj7DHafuKZvoAyjCCWEMMve",
  "key21": "4zLhTbCJNbcjuBja4WtS1jJ7qMWvCsQ3uWHZShj7hh8pXvXZyHCmAPqwHd8nzLkRiYfwWtcM5AUMjk7yxFZysm2v",
  "key22": "yLqD5WTVAikfzQzNkbtM6Y3HW4MocY45SyuG7gNb6wqiCeKoTbCoWPS3iwoHNaNqYjD3F2tgDmfmRbHBAQx8CWT",
  "key23": "4uxso5bPE2PoHSSABsXeNEukNan4MhTL7b1EcgmaS6Smye43SrBtxoS8HC1G5u3C9fB9JZyKEsQCeym4n9HLqo5X",
  "key24": "3gVbQayoU8you5fvoVWTtxqx3irXjRNWa8qJZozxTdvWLFCfUxnp7kMyUVteWcpDYHZzZ93rVX3PoqgqHE3t2PZz",
  "key25": "3PJ3K3HKvLaXwuJDj9Yw5RncFec8pFbaEh5XBodLomWDptgHaS7Hw8DzhmAupxgMHgcWMU6La2HoSYKVWzjUiDxT",
  "key26": "4KEXZC1p6pphihYggH56cNRaFWcFZSwWbLHebzqkASXLEDGiKeEwQgp1hbyfPDdJXbPUrYAjS6fqDGTqai1xqbTt",
  "key27": "5Q9d72aNk4TKhHXvRH8aSAuxLGdsYMSb8jMnAAeGLUz9EfU88Aq62ewytDtx2eUrXGn3zM1MmewGawvd3Ji9Cdpp",
  "key28": "5C6SCE9ahRLzbjTFfBbg1cMsMLq8Dh3JCgNHXYDAcpDRnnKs6Yy2QrnYwfqfgGqdEvbtU8UriPbrtomxBEn41Up7",
  "key29": "3UzyW8YWUTCvEkKecECrZMqvVFPNYq8UKA9nR1chDHmTAtMLVuDArioKY8A5gGHfHa543ZyzKkqDaUEgcZ8ads7C",
  "key30": "mRachR2ugD5mhbxHPPbTXHeRpLXqsmLGnChdp1zqMzAZcCLzzYrnRREvY2MP7safTsTxW947r8NkiKPnZYGdft5",
  "key31": "364ymYc6h6w6rQxvVmHRcWoa2Rq2a39QzDHUbqm38haY6qUNoSJcmYqhDTnebBh2WJWGXyGYGoDyiCaAFZd1ANms",
  "key32": "PqnhosXdUncPWQthx2uZcqzbGth35bgcutXbYq2v2rDzgzgsXeNQ8KYWcKdrufRbEPHv4nznNDJ6RbhFrPmPFwt",
  "key33": "5w6P1CcLkk9cKb6kndqYWX91r4WfSY9SfvJs762wWe1HTTwHumtVtwMHFin5kZjgiEC4uYcBhGi3DXBvnkXCd7tf",
  "key34": "31nmRHnhenrJygi1ntYRtcvEp5MqZbSfRrcdcCByPkvx723HhwjRbqauAYaKN8cKNaT3H3Q5CHqP3mwv7SsoXfSL",
  "key35": "ccGk1nBtCK7oSkA13CHv8zHr8EczyWJkLfCGxWMvpMBVby2VjDUvEQNizCroHMwLhAQZBVNqZC8pGAYTQb4RHFH"
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
