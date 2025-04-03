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
    "5K8UqfBrZLbhPz1bdyMQn2PDHPhEZ4KFPJ5j8qA7C6GShYLxaN4VudioEPFWxcfQYhrzTsaWp412R8JdrQvo38BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bK5GDtfTSD3E8zA8L9f1V4QhmFsWLPVaLyeQfy9t23a7K9pPmB6W8cabxAWZkHGQpJ6p1cfbnqBxP9VZkHDTdFp",
  "key1": "4fDTBYSapTUMT3gCLgT9DuynqFo2h1Ynifmb6psyV6u1pGWpoxc2LJw64sXDSwGzSdLQSXuqkk9WaWmWfiTApoc4",
  "key2": "DZQT4aBKwjFcmbBjWZSWSwAcNW6QPVGxNx5nbJPu2BrVqrLqhEZoLwP9G8B9v1uDzz6xy2JF1eYhTTJCAVtTDQD",
  "key3": "4DGMYKRFcsjiH2cygc4cQcXPzQu5TnH4Y1ArmZSqpQe4oasQMGRcD8nXq23411LUKSHBcSWWpntB75ToYQMvUe96",
  "key4": "5RooSv9eA9tMqUXTqxJERP3anxiC8mhoeeHBvaApDdiZDtJsLbjw84zV5d3y8xKkW3zCwafkWy87n3FNc3vUQYz3",
  "key5": "2NYs8HQN9ENJb8vEBCnmjwvSuVhqyvw9tNkgPbyFffq5nwPEbLvQnhYCthyK1GxGMVVjjwXxvyiuVodQphxBSKb4",
  "key6": "4J38r49UUWk1F8dJcroNBQpUsEM1cCLeYefmgXWw8MrQGcoeuVkxkFfF68fLgMNRf11929BALjj19Lq3xg2McpUJ",
  "key7": "2BAEzCeec2BJu3iguQMdka9MNERRtpvwp6YnpM2qrHDT3bcEtp1vRcax9qv26Qjem53aXGmm3wTcLtEBbjErB8vq",
  "key8": "2jjo8EnoPkMxLSEJcGF2y9MSST919H35ozNjU9ERTChXZVRw6MsGDuMmezkdUJAusyTpajd6nYfiPSDNsVdeE1hG",
  "key9": "zojUzmnpkjbsCxYCGdtA329EKQXqu3Lo9hjxYSD2cEzESjEUqn5k8LEV49aJNYHB6stKbM25gdKVjQpaM8Z29ai",
  "key10": "4PQnr4W9Wamcv25aGMhhgtaxthHwMQyYXuoSKBaUPb1EV2uy9bBorPy7Cd9Vud5kB6YfqywEEa29BZhEFrtk67dY",
  "key11": "3XQWfjXKbTtftgVHHWe1nnb9cwqwwDZSXACEEdCAbjJVFSg8hHsfEN58iSSpTskA3iCMpK13sY2keLezqyRcJpCk",
  "key12": "3Sas1XND647Hof8QnS4mrb737XBgzz1yWSmkFWenSaFTRD642oV6HtJ4ojkqqdaeWJSGuniL1ASnvUk5cZi8yDkT",
  "key13": "5jEGuxJ62mgPESgK2KX5o18XrZLYHkbXSqVTExy4Pq8Dizo43ytYLu6BZUzDKYKe9mMaY5QRSiw9ovskibkGL5Nx",
  "key14": "4a29DTZmP1NdUSM4znn8xx7APw6mCvA9XKgQUpGQTKWcBvFCMpJWm72UHJXJxqAwdyBPzhKobUYGiaK4bVan6spf",
  "key15": "49SVovTbRbboW4krsBifqFbEJAxTPMkKdPZQKvV1HWWR6UeaqCAQmTcXzELkgRLx79XQ893ar8QLsQLZ9StDNKJv",
  "key16": "7Xn4yP8hWmvbcRm85sMvQeopcuAi5BoZ9h9hiYshEiTSm4qpEewGVRvG6ySZq2yGXRApcdWtvauULJCuZ7o6Q8x",
  "key17": "4bS99nQzDqjFwGostxTtzi3oGr2WQibNNfegxr3ipYxH8PCaUjMAhNYnh4PdLsCiLfMX77urAYEWuGEK6ivhEUoT",
  "key18": "2JoUso1dqg43E6w3cmXJ2RM9CXh4eRFW8iLrMg2RyRDeuRhkWuKHcaCS2tcZXDKt5fGqH9tqU8xJ7gSUduyjzSnN",
  "key19": "7gZgjsVxVFxEXjwUtpH3Z6otDL5ew7DRyqSA968kFmo8xdm6BaJSAiQq1vUkTG6kavs1nimemvjti4CiDbfmtjQ",
  "key20": "2ML1tKyTZ9q7D9UKygFh8Er8JtsaknbWrmcX3y8uuZBZjtGPfME1vXGFpK8tCbKZ6jugBaVxyxokjNMCgd3mJNdr",
  "key21": "2CMaYrw9RPXgbr4DUoRZeToZj5k7wosbLRYcBj3oowuuExHMmvmRcKPrLBdve7wBLCYAZGSDVBKhQDw5eeEbeNxE",
  "key22": "4wfFLx2rFKfzzD4NBtGd7Zpxa1EBqhu1ac7aSTeujZ67vfEHjgUaem46uYQDAEHWk9Sg9yqGtmVvL8SKZt5SHmj8",
  "key23": "37AxrxRQz3xyf6m8EhYDojnYoESQcRU34x713FCdBtmFQYRMDnYnEaz9sgyX5tCx5sh4zboa8g91exkFYQghYn5r",
  "key24": "2uinPHxAhtoCXkeK3K95Rd57g6DxEQb1gvHf3pXYZKhZZeHDtUNVQw71iiHB5HP1HgiuL2cTzzjwmyKmetjz3Sv2",
  "key25": "2HnnmbJw5wSSHEW4QtrCW88fyZigVdzK3D91WyRPwxFFkkZuhxj84M9K5hbPfJzHvHyxMCNP4MxJCKP6RgnsfLVX",
  "key26": "53A73KUqcePF3nMeVFMX8YAL5QReDdVJ79ZfjxG9zbzvfM5Ui2TKcAP6fRu92KbRQkANc1ukuvmUqE3kMbHwVVdg",
  "key27": "2Hd6jjCNRzw18LkGwWKZKFTXWtnVevbNgnaNUPz8QdiV7Z1Zcby7j1x9kcvvwvd4rogeCqiDbZNxooh25hRVdFBB",
  "key28": "4Ec3fdbFx8rNXeXWVVk57zJxhhhx2bz99tV3PVWTjVEGXbbBX5qUJUNSjN9b87nWjqZ2fnnLEzPJHMMPa2AGpuQU",
  "key29": "5JdFXciPsyAoTHg3xstUv7fBYRTVhW65PGmRWsBj9geGL9CyE2zUR6A6MEAxNPnbMEHXYZ3sZfVrVPzCSVkCvio8",
  "key30": "5V41nfb8iiQtZRYzPkF6cKKBvbW2vdBHcK3v3XJHXjNGvxRb6dccqTxkrDvaXoKcWUtdDfHEtA6PEiRuf2pozrQT",
  "key31": "5v3daFC2CsxgCxEkqV2YpXCgHHq6FtaS3E5RohLYzqeYDNJhANHdfSJRtNE3a3rjyGk31ba2mbnvV6vCB7fFVr1B",
  "key32": "2HiGsv1uLtcxv2kXjcpzSfptcnY4PccRMhY9Gvvbtyqu35hy5LJzk3sA16bNRhMiv4c5G5bYg2iLWNezVKVQzxkh",
  "key33": "3RSFj195QdaXzWjRenDaw5sSFfE5ubwVyusiBeet8T6inH9XEJuyqcv9KskdXuLYUpCSBqoV7f7V3ga7JrekSSJD",
  "key34": "27vmXJ5wJoJ19xThjsebkFMKxcF84WrXC8PoTsaf5T9BCQFMLxwKcQMVZxuSXkGVcdW62cKfXW1yGsoBnU2z2HQu",
  "key35": "4nbqzKVnZnq29M2eEY9XpDYDqPmkVNXjsPrBmyWmqbU3xP5F2qArD7UCYB4LrxEqNxA5RwXaNNmiGq5FumnhSieZ",
  "key36": "2PbwyesSHQHPKHNxTreFd6JKDbQs3MLxwa1ET76t1E6tQJUjM5y3ZkYc7WVSP4ge4ZCoCK7AxqPjVr5TZGzF82hA",
  "key37": "2FufxMZo2FFsoaQuQTwrHbhJy54rh8PUXjuPYs7CuGDZ6ay3xHMNEWmREfX7KbBmnSVWRoaAhvsF532JARWf5WLc",
  "key38": "3Loa2iEmzGKQGRvePNfqmMH4smee1jsdYB1zrZqkTQUu2gy52bVdQd81coRNt3i6E6GkRJD8RhyHxGnLMFFLdjWw",
  "key39": "4rLRZp78YjsydyQkJH1fBj7mLqrfkVSHWiZZdQ61fRkvcdN7v51dTer41h4KcSvy1pd4ZqEnFy71yppFNduCG14W",
  "key40": "3wycth35a4KYQv1QXjbQjxugE94dkjczr3A1oSe56DmthcUYsFKtk1bS7JRTYEMMWXTi13C7YF8UxpAym4sMnE7s",
  "key41": "2TYAJVdvz4T95DLPHNuCqpnuwoktGAZ1gg8YJCEUcJSwTdXMstq1kK8xQZQrqxpzeeSngpvSWx6WUVrA9w1mTPDK",
  "key42": "4EgexUxMXcewLqZKsc77Ty3DQBdQpbivKedxks9paXh2ofug3JJWS3JRGgv4PF1aNKhQRQ7aMEK2fHHZaRrHTWn5",
  "key43": "jfxPJbMpt4JP7ARGamDNbEFP5Xyj8CbDzJbZc3no8PcfvGnBxHBau31vUvrovuzvuzuZXane6jSJdc1Dv2A1Jtz",
  "key44": "4v8sfJBpsYZTav4JXMy1r43a7ynXPqFHYgg8tDLn4JQhD4iYLuS5SnQCgpraKLp1edpvqb1zuAJQSFthUm5Xt4U3"
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
