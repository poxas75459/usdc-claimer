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
    "2rSQ184eriSzsYFeffPobiLJLxAxXdCrMty7ihq9XiR2JcCqN5zuJAh1dqa1LmLEbhLf5eMi87NDDk675qqu2WYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xyrTGamgfYj6mnbnjtJrciRez7ZtreFrKGViM7qZmW5qGxpKKFrUSo9czK4EXY5w8TAkXKDxq1KyUwD4hHnkMJd",
  "key1": "gZiUXaz5bBLMzAdnGiZgbaqvg1Ggn31hR1uEtN2ubp2YokZDvUeHeTFAahQUJvgRFQQp85TSBngYwBQmH3SHEJA",
  "key2": "47fspT8KUqiT6GrKUBxppRSKZX6LbvhNhrQGu2XuB2pSZSjhv4uaZbP1eBgz7M7XaV7xFyAL9zZBP4Apa7NWMTvN",
  "key3": "32Mihqpj4m49VfpmRsBpmpnn6NsJZnH2d42B8eAKudUTp8vdfGkQxwPzQAmzXenyspKuY8AG7p3BPTxd46ruVdrV",
  "key4": "4vKZN4Nsmc3mq6uAuScQrMTEsGrHMcsRoVBtTHbt95wk5Q3PJ9qziP7nQ3iCMRCSmM4UdgHhfgMNA5XK8MevxsND",
  "key5": "3auG77tReJoweZ8vUgcTtSwe7Qtii5KfUtg8frgS77eNrxq2dFT6J2KMSBgq8tzmvNpGxfQY5Fp18Ti2U8vSmGKM",
  "key6": "3LNtfS7zr6MjdbhPumhbdhU64eRCxc4EdeXR7WX3hKfNVucGZj1D1Dpux7xswLAyicLERJFPiJmyakPEN1PBG7ys",
  "key7": "o29Xp2j77yWhcitPdJu1XMVdQSU6kATGK7Km34EhUxn1JWWjW1qA4YcdamkzxbZBLCSUm9jJb4LDCRNdqciVuum",
  "key8": "4QvVWAjLEW9ArXRaSFXjJX7AcYfBDAoa4C9xLzkLQfXGaN84riTpADym7UnBakbDiUjXGpo2Frei2j6MSVshnw97",
  "key9": "M3LgqfuhhGhDwaw4nDND2hVkALS3iCLU9LSCjfvTyJ8wxCNyQ33LJ7o1FqmqW2xcWUfELYCUBP4HUryaAc6YeEe",
  "key10": "5etVUE4ryh9a9pjyKoNXcuhAHZbUhe4Dy1YoiHx3J7hMDEtEGSiUD4mDp4veT5EUPbEdBHvzffpKKKSxnezAJbhL",
  "key11": "2PZLYAQFdqSMchsqMfgVKJbvfLsau46PnQtg792ikwn7ukejtBJnx8yS91QNv71dArynzhtx6aYFHqGfvRsMVYbr",
  "key12": "3m9dgoYGdMse2NXDGXvXkJFKs6nf1SMnVEye5fvAhHNuq4Wak2FhYiYfYeP2vVPTKfv7CKeWFJUeEcwHogVh55Hb",
  "key13": "n46BQMuydzUjXnyGTQRmzS5UAJGfdtzpYNKHx6ZCxnnA8DYmnmyHQannY3AoKajCng9VnLDjPgmiwospPzuTARx",
  "key14": "5ihAXRvWJtFEwG9BUhnnHMNaD7CVB91HPcaSphbv9Btm9E4dsKucUjLCJbmdV6uFiLTFo5wW2N4JJP13fUKeLhWb",
  "key15": "erGwBcDEC1NEbu9tY934wbSjjyWfMsZUsQ1czTA4aSwf98dYYZTrWDj6HF34h4C74J2F7TxyXtBuiW8gz7A32LY",
  "key16": "32EV39Nn4Sv63qBXrxBfyeQCbB94o5qd5Zm11hJEjuC8twr8d1WnLGHmscor7JiugByy86HwG6UK5vXrkMX8gsKK",
  "key17": "RKh479yvfFjuGK5LiWJiM8J15WrCxbkP45DaHfbBht3cG1pkEomDtuy7vXnBCXX2bjea7pxjBRcmJUAHN2TXRLF",
  "key18": "44Rt94sQz6aVJS2ryCGb4x1BEg4jyYDJJq7gCr2e3GNvtu6vM82XLpxHavxCCL3Vimmud3U2JfPRMe7BC7kCRfp4",
  "key19": "4hcnkgX9JF1icrPx1AHKw6vYwioyLMvWvMoqYCF2uuaSgLWXbK2kgzVQXPo642T5Xc2a4rPg8HZimBbstLH1TwdP",
  "key20": "54beQ7xGGNrKSK1Co3oDCbjEaSNxc9URyzLRMD27jFoDtuiDFLh5S4vycUtgUPMuNdM173qpifHcYfZFTm6aK88P",
  "key21": "21JVHKnyuE5XfNfrfnrDB7KhvQYTCUsYcEg537Lq94RKCX59wG7TVDwaBPSoZ9MwzJHFqLhx5vR5yUEhgaTxJTvR",
  "key22": "3cx2NpoXMCbY9dNN9xYLT4w3Lzsm75pkbNA3DcNf5HZaDFqafE3f5rw7iAYs63utQSY2M9VwaHphDVAFjbjDAatF",
  "key23": "35PsfW5HjdNaJ2FaDrVCi5kQBvKafwaSHZkAJVBUBGC5Z91gV5PdzkgRcfjNuooK1jPpjJzkhfLYgrXyDQFgDo8Y",
  "key24": "2Gv2mvvyaNvXeGMHSAb2KfroUdwtCCa35QAq9nw1f8d16kejsjPwVy415ciLku5JAnjPo9PhUTEYoZcNrwSxHxKo",
  "key25": "5umheWz8nGbh4aqw4RkazUtcYttoZDRSp5dbwu2951M27SLXWyrZKFBHCprZFGb6nxCbWNihT3zZ5VZ7QPVqnzeW",
  "key26": "3RpZzu2krkyYxcLixa1kWrjXXSmxEvnycRt6779hs5YyH5kFsmz5VqMdykYGfCasdi92EuA8nsp7yDRdtTTS9X8V",
  "key27": "21RtZSnBo7Kj6Z1gpDUSC94Quz1RdQ7zLZ2vRywgx5sg5ZmWSjTvxJdMbnkrut6eaJChPHEJV9qophybNch4vo9R",
  "key28": "29HhqGpjinipoDvsGzcGQgW6gXfhhmLuipnBDwyCGDsb1FAaHgTsr9tMz81bbgwhETn2Uk9jKvWckSNTTymUSkGB",
  "key29": "4fcbMUigKkS9pYjk6N2TnF8gwoHMtGBLRBk3SR5Uw1hcMnGExqDfPtrZX9ygwqJZ5KpSSrpELKqtAEQtLqZSwTwY",
  "key30": "3tHbV5p4FGmDgrAipFTXbihU8mNyNgR64hhsoQkbaKBt8SJ1yBZqppe76SoiKnCjbWvxK7v8d71VMYbJAmxU5HD8",
  "key31": "5oBMGFeZq1eTQSqz3KQYvR6SK4qs1Zzf1TgzqoWibT5cWvCY6Hjhwprp2A3LhNpoQR25KYcUXG7BivC5e2pZFbJ8"
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
