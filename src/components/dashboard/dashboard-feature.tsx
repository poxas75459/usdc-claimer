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
    "3zhnqwZNCLFRG8xMBVpVQUVKnUDL91Y3872VDKV9R9DxidtvJRoporuFDnt8SLDCQ7pVwh49bwGSzF4dHGjv45XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7p4DDGAw8Y88eA2D2of9VEdLRMbMKApr2c9DpQYERdLR7Qxwmipa7rh9kesvXLw45bLgMwDYpixZ3F836TKBpLT",
  "key1": "5MomzHpFhAAjc3JTCx6UcKqWStGsqB2H6EqopBiHfmnrChUsaUqoP2KZ5Sejb23xy9JMFQKB2VMvZj2jMUBtrWZt",
  "key2": "3ZepM1H89NJ7ro1tEbSTBFC6pT9cyFRhY12aBJhhCoM1JQnzXaPMe39RnKH5y1bcNAd9zQpS5AZKJS6mp5JKWfHz",
  "key3": "2CnR2pEB6iXmvAPLRcCUpzrUdCKpySgXq4sk2JXis2LtT3vCXN7K5WuDcCNUbU7hNhfah8yZcm3T5o5bkQyjH6fM",
  "key4": "2gXZEnNwTLskTvgSW2AVEvbaECsVF9u38nCahkxRGcJ3N9xmCvJtZh2cqvMPudA3uzrrKb7WSndrLpgafa3ZCBwA",
  "key5": "2a6Nq6empfJpjxcFv2Ctb1rvRKwCQbo3ALoPvth51eR3sFXrQyqy6Sp5Kx5vErNZ6R5VRzgN22X8iL2U2Dd5ESJS",
  "key6": "cmDVyHrsTtqz8W6wQnqNKfcgJnHXzXnP2S8pnC1fwynBVsT5KhoLdmtATHguvaKCGLhBqUyVV7cc2H8jK9oKJ5C",
  "key7": "42LvqewodSNfryBF8rSkcDTSHqLL8GJrePS8KPwN3dmZNVqNJSiCX5kki8xenYdpMjaB6ZDRXvbdRV6EKe5kbMzW",
  "key8": "4XhW9QprGRoGK6pbk2UVRpE3eFEGStMHF3YhAkJpPwrgbtXwiJK1TqAkSCRpUZtFNrzjEyewZsRGZsNQVRRXNfCP",
  "key9": "5PcwvDRcLHJvxzEH4FVhkKYeoYKYYE3xZ3HvoxGaQgNNKwo4qnod2ACF6zeAYCohiZKUfyCP8ezeLqGSeEszUbuW",
  "key10": "5o7Ujks3bviqZM5a57gsajGkdbQhwGpXegGLxiBM9949GdGMYF8crFkZZHVmdezqCqPjif8GkSnrNwQg1odeMxuZ",
  "key11": "sPMCTQmazBxFs23nfD98Z7g8eRFPbVRyaSLSuEBNUZ85a681NcCNaLZyUtEJLaWQ28D7GZPxHAGqjrrTMtu3atA",
  "key12": "3DRem9UkKzEBRk1jTbg3uxPCvBXcMfGJAs2TtrVS25BR6G87uAZdyy9HRxWf1JxYVtb1WEdQNC7dELDw6x2AW1VZ",
  "key13": "33NkfMvomMeHtrxzqiXnCg4sacKw54zfVEBcR5cg6MLZ39VDYTaZ7WnBwtP787PTEbofDAFyZN8dciSiUfHmAcdf",
  "key14": "5GbxRJzrUamNSjVrv8n6GngrypHwDawQmp71ZToG1s15frCawjgyBBFi2dncEPm1CVo7MvbPjfoDwUspMZ9RwjcY",
  "key15": "39ir2ZyE8KqSGz1wbR8KpEkHFN54JRqF2RuFRo6MrpKjs1uNMVrC3knrsPYC8pMS1ynUXEgnSoEow2d9ZdRZLBLb",
  "key16": "2EkpZ6KzQngoAuCutrAM522e7MupEG6ehgGHdZcarzdrA8TpccVcSTES8i1SjjvH78i7YGjfQVZTr8KLab5MbB9A",
  "key17": "2MkiRUeSqDsTsg5keDU4FkrHhybdaerHvyMxPCAgEH7LAp6twxixqbFysBFmgNc8trFThW4xZAp8uyxsUSXDNGbY",
  "key18": "BHrgj24kmBm5tAVqsfoLxAyZWHVC7Eru5qBZ6VmD5PNnHRSpkYYcZ2Ed7SsvXLzG1usnCEVXdLmKovHcydsrsHN",
  "key19": "3GkxrfW2gkECxEGuL7AZ95qvNC8ata5JXozagKebniBTKLkZyuKPYPhy1YtRiQpUEmzg5EA1gipPVK2XW6f6E3oL",
  "key20": "5uWJGCep6oVYGrwawrvvcpunjAe8ZudpAGBrpWC56TDUYg28Rw2GZ11QjmEgAx2PvCkjnz2EWzCMMFWRwMzYk19R",
  "key21": "4WmGC8RmzYqHV8SrQNZ3cQeftYq2RvK8b2dMdiYRj7Q1TPctFdy8wVWomSkaZuNGRd5eYERwN4VYGn98AXCnFWwD",
  "key22": "4SDU6z9rPBvPz9UzsoNMfDFHcECXqsSNXG2H7ZFhwn2SFbWtFPybtefzC3cpdys5fevDToA9v6RNRcBjf5QQiuyB",
  "key23": "5ZJdAL6dsZexHPM6ZomV8gAcdvrjBcRdQUMzQQKgdKqzt4BZGagsM29PLVf63dY5Ukk1aftc9MKMtWmJbcZ9gnp6",
  "key24": "AhGD8CR7RxirVWWGVjc4SWjhs3MgYyRRDLzX5hXYCzDXyUiVmRgMo2Fek4MiKcxApQisn2v5R4NvPzujckpo8kv",
  "key25": "5MNWW6fMUMz7fk3smb1MDZpHEtaCtqPJpwX8wEst9iTxx4o5tZSpegHVwXp51vBZfGKDNvbBVEf48pu4g2N7DBGY",
  "key26": "4nCXMEgKjRkdAELPfAGAPV8PzmGBSE7GUvoMfT4LVnt5P3S2AfaxtXFnUH1W6eZuFDH2CjGvAWJGCn23ERJRtAJJ",
  "key27": "27kX6ZcFXbE4vWdcF4sTbkNvZDupsvmyjnzVpwrXmvkW4SFwq8qXpFLkEBT2vAVNqNhsY44CLaj5DnA9cuESmwEG",
  "key28": "3prm87CmxNypq7iUby4ohdHMYD2XfmbHcC4hxLY3rWMgNGxWiu5TPgek9ihKEfR53BNw24JZvXVCTdTVUiXzkjDx",
  "key29": "3yc19UTP6WQG7bB4XYuPU5dRKJ1zSwHumFX2uTuemhAGZiG36XhBxHbNU8hMAWaZvhgtmGQnWBsJeyiHpbXAoP8z",
  "key30": "4EF5CZzx6nr7nAQrckyjqnbVvrkYNQiWGqXeZHYWip24hpBi9hPmsh5zMnUUPJLNnZX6UwmpbPpqs9iitKBdg4g4",
  "key31": "pYbizQRHHeXmKKFXpiRT8CWSTA7ZKsYtRcgX5GLzM6R3SaxFCTMjEnh64ufz65YeDYuvTvLRoy1k52y6zeCZqU7",
  "key32": "5yhEt78dZULdNAjB2Aj4wMaKSjDruSsfqoscZVVkCyh6YDqFEMqkSaKWR2jTQd7r99aXKtxjQJAxKdbkVdtcufgS",
  "key33": "5r7Rigy7VrbWPwMjbv7RqoGSnoeiEGwWuKTFdhx52aHvgdbJKnnp2yXYatAEx2tdncf73o6Je66RK2mCrw2MmyFx",
  "key34": "4UoKFPuRfUWEfueoyM57zzgFMnbrUwQXkjyp8389hGRBxLPNAXAfPTyeYxpLTnwZuZCRe6DGJkdv2DXTLjb8rH2k",
  "key35": "3QTcbwjfFTY7dfvgPxpdDtnx5kQkFNaJWgowUzGLWYpocTKz7JCQEnHmdtqPqyts6p9sox8Y8Hh1TQdGc65YcL6d",
  "key36": "uGS6FK8RGJfNxM6HV65CH2iFJBkK12dKMDxUzBV5wXTuareSDUqPaZCBELiE1H2TdYp7phjTyZQd7UDZ9hkY9iK",
  "key37": "2LvJzsh65HMxb7ZabjtCyabHL3F7PNjWF7hN9ZNNxwNUocZTLMYXCWWhpHxyGRg7okGuAK6QmQKt5eQSjAwAmTZV",
  "key38": "3XDMPWk5AEQJDFdRTDwxVBvn5mKKxCL18hUkzMT3WswPugVJL8WujT7CJ1ZGhGpDMjbFBhLAJkaD46J278VXtUpT",
  "key39": "57Cb5eBhJ1q82qgdcpDLHBkNuWX7xuqUo9uRiAGpSdRr5DXFxvkLsx5ss32CgnUYSfy6H9dv7dH9toSw4MEapcMN",
  "key40": "3BtKZKoC7eqTSfmEB3sYcJV1NVf5LVoqCNcPdELJ4c654uGFqFajnnpsFGexYWH5jmC7nKoKGQwFYwDvUQQrgpM"
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
