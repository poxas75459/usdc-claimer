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
    "2CcRP4DHcQheZKGKKJW6eKLPCKpEDh9x65gcATmPSHyKmEbD74z7dnjMPmCj4WHFvkf5pSjJH23AFyLvyBYQL8rY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFWhiphdjDnDY2B6tZEfY8rfpwbVZs5iRCDw7URy1A6jNGGAAzUuN7kijPKjNhhG39iqzRtQpuAfBjYqFzwpEAV",
  "key1": "49UwAqaPjdaPtQA1qab7HdRFAatMFpSAD3YyuGod3ZxYdn11sEFCkeD5bGUZwNyySyD1KDeYZFWeTj3UE2vTWrky",
  "key2": "4wrYPyTBJR1AA8EtJ82teVY8W8axNCmEE5ftGEj3vkRo7FWY4DEBGmYzYqgJxY6soSg6fyhCWZgkjenjJBTgpeRa",
  "key3": "5PpmcTbfbxHs27dZqrPRRnf5Je5bJ5WMLaGSspo7enFR5G6DobZ68Twc9USZT6eC4B1YC6W1YnPdw729yPK3c7EL",
  "key4": "4LuvJokC5jJtBBbP7MEgRvxDhXBchVUQurPwfahaq6kqTnF1y8octcFtWEc57gVgXQddECvREUaWA7AfbJGcHsKe",
  "key5": "5mgyGUBLHzuUrE5K1kM3dfXW6JDT63m3kbchmUVbPcx18rtJbXkbhpYaD5jzMs8T1YrPJCXuuMs5Q8VGdwL6JguW",
  "key6": "33jhrT5SwW3HdTsdCyK9gfBo9F1romXYyaPeLDp6hb5Fy17hwETc151QMfn7yMtxSqoUQoUfLumcy4MG83sADNNA",
  "key7": "4QA3qj2hoMo2xUERC43jm1bdTxyYeacZ9R7SetqNu6UNfMZso4Nv4feBo53RnYNB1LT35edPRKHnZ3RVXLrWNi9b",
  "key8": "4mnTFMEfiWb8Zd1fqJZT6a9vtevyrgCvMjJBRkG8S9WEua6ZfU7nDMCyC1QjWwZGcTUU8CZN6nVPCuZvpTLHLby9",
  "key9": "47bkAY2BSdxYSZr5px8NcDS2CJSNnNYFyTUVRNjERC8ELLuKBWaRugi2aJnT4MB4udaMVKoquiUau4Udxc4qNhKp",
  "key10": "58kmLntSYspbL4m5QRpD91UjaX6UgMjLHr59HkW8nwxH9Rw82LFdQUjZH5by1K1eZtHMYdJbmk3sWBsEuA99fyFV",
  "key11": "2iN1E2vsCBdajNGS5ASUko2ejjbRNYCGAFXaL6Lwnkj9cXV142wvxNCEPfJaGXpxGge1nJG76ePDTrE4o8VBn4m5",
  "key12": "4YZwn9R1Muxah6TYdf8jFe181qrHUSicSgUWh2fJNEXE7UkFkLcSj1SQ6pLBQsVGBVuEJfUC1YPft5GynARNNwfJ",
  "key13": "2uEUg4MRKvkzhFP3pMRzMtnfm3fFDHxjXJ5HrLT9xdoizNXbocQnPiiLGroXZkw8xQRosW1zdag88H4AHrgXTyue",
  "key14": "38F283DWv8x2qC3zvT9TA4yVPffvmtAMZB7GrtFcc4e6fAvfnLCEeC8HR3jdkJjdV6KkU7gixBbFnof8uHzHK2iQ",
  "key15": "2oM1NjjvXTDP5YNrEZBqHLsQ1XqHLBGn7qyvfTToJoAv68G7xhFzid6ZjTnUL1e71J65FRegGKTT5bDZyLDEDyVf",
  "key16": "3gyhpNcYuFpGfiM5dFqrL5CtJXpZv6phsFt2vJzxvhxPXfWJpwqWdrK7FK4tuwGyu1xCT71y1PcNZ5Kj8EkWkqcT",
  "key17": "SWpikXom9oC68TMmLkhUPFX5KaKQE1Nj81vPj7To7muBV12cfXhXcuiSUFGNk19a9XRqRCfZzVnKjZEQD1EG68D",
  "key18": "3k3DgkkaonMpVQv9GTCswiBsGHL6ZPCfUcRk2bXpDYNPYprN2J1Mwat4t984TEzq4cQfSrLSJQAetHQg4WAEN5s7",
  "key19": "2voCgxrN4H9ug1J4hCkrGzf2NRSc9qv9bR1mxXHkws1ZBtrW5CJveXh4C6j4uUZUyvUBmzAp8EyQoVh5KtbjErYZ",
  "key20": "1q31nxD77oFwU7BRpaGKoFtZrVLNA2J6NotxbpXJkdFpMHasSu9tQ2GmBcPxxraYozDi49ZG2nk68qzj8J9uTTy",
  "key21": "2aq73hrsCh5A6G4W7hM9oqEvdZXRvRVKyoh6Jpahe5DEWpXqYeaBqkX4DCoCJ8UJo3ih5MSowhQdbVmAZtK4yFvb",
  "key22": "vGMf67k3mRKRE5RgA9p83ZH1tpmGVuNJToEPBxDp12qmS2dYDQwEKF6ttKvwfX9As2TiHpsCsj4wrkSiTrRoPBF",
  "key23": "52CGARBus2gXUPwTF5nJkVfYxh6ChAEdNyYEXAKyMdcs1otWReokXtDV3d6qbrbygVVu364XDkr1qFnF559mR6mp",
  "key24": "5fNR8BMCrJ2TQPL6sb28AjecEAz4hCM1tMSii3TJznHrbWqfq7Lev959PBAAGyBMAjTic9kXpCDj3QPJbk1tXgXT",
  "key25": "2BpoWnph9pSqzYfR8YiBKed9mtQY4RPgxr8MUUKoudYpjq6JkVXJM3LKiSrYC97H5y9fdmY4t5yLWna8NF7Z7ZSk",
  "key26": "3nmRkTSYBDPKEQD4znpN7zxVih7WCzNL3LTkZ8oCtgn1kLMbxjuYNhwMy4bUfzN2r8WoiBqDPrgoGLDVAMb8JDUq",
  "key27": "3V7GV3BT2B6jYFtd8R2VsTDK64Xmr1geaHjrV2FUMa8tUom1qyHYqTBRNXSKVPSqzLgMK8uYbum2R77bpe6MUEyA",
  "key28": "3nSZEwu1wMUk4ow6isLr6fENeG3NRB43fGqAjqJyUEM6dv7AqjvQSNZLKqJKVmYuHgieR4paP7LCshzeQRAYdkkM",
  "key29": "2dZ6myHuoRfDehZ4dFt6tfAJAgdn7m3bLSXWtcKZXk8V1x56KfTmZWfp7WegZoiNQo9tQQSsjjcN4pUw5oUAWkuQ",
  "key30": "2abLkR5LZw3UknpXxKZXshfykEFFMpx5TbkGBx8xr858MxAK9eQEh9rZHUxHeexeqDAPauf8kA85HBRqt2rTWcoy",
  "key31": "2JSnESEamHG5Nvg92iarVHxiXre8PeFHQf8St2mVgyzj5WGz5d6vjTWThVu11m3M2n7seFRHc3UFLJ7QS2hSb4pt",
  "key32": "hSDuCVkaKgAp7V611Pg2ETbbS79Si6n6wtyxxDdJvgceqQkzo6SFMsDGUqqHzjwLvh3D93Jz5ghx8afzvjgbzwe",
  "key33": "3P4wJqJFmb3ggLFhB2obvWsiG6be52vqkKGhuMg1RhMuLZpnw55uDQzkSUki5KtxYYh29RL3ihc4g7166NsZGjvF",
  "key34": "4uNyTipL37FmaRtJW2N2E9EES8ypFasPk6XwgaFh6n1Y9phqYnA5LdxvNoSpph4baqr9gYoznyL4dtpHYBd2trkG",
  "key35": "61f54aRUcLUyLR55GNkwatXT86CFno9KTb5WtTU6UjdrFCcoCbLPeC5MEssTy6go97Dv9miuhPsaRHgxRWvBNrDJ",
  "key36": "4BXjNcjh17TEPkX7RhMm9Z4YQCToc5bDssTust7h5osxsHyTKdHBefi5KWT93YVPtWmGpS1vDVDffkBX61gzbzAf",
  "key37": "3nt32gQxNd1GPmqyWJNc1z5va5gHr6nuPbr1DTnvNvoJivjikbcVXviN4oANHXdULQoJtuL4hqzZzhrJzdPwVJWe",
  "key38": "3Ytb5i9b2Yn5Q4GqGNJZFHtArBMLHkWAB2CM7U9d228ZfbTq9RPCdypi375bBNj7KCdKj6JbgdM2jmBUvt3tjxB8",
  "key39": "3kzoXjgQ58pTWFm1HQtxRkoCnxq1FvUDr8K22VXpVTX17VsPBNTorJMwFETMrFbcV4CTCmEdyAokyFyd4J6b6nKN",
  "key40": "4NK4Ta5VGJwEscGkyRkBMAvgfc65rgYKnESDuinsbAJKJ55VGZho4faWDQrn2EmxWknDjzfKbR2LjEiSmQYhJtMf",
  "key41": "Ft2hi5n9foQhmRaJNRhQQEwmenHtuvgb2EpzpqaJ2AFdcY6hpHmxMkBzm31Eo5zZtmsv11SVfRxMmNsGnHtqSwg",
  "key42": "NRNrRFqzgHv1jRCuYnTkYKYV2nYnQLYsSCTus5NvK3hzbAqnPwDCCDtkP4SAf9T1G1Dry7n1fqdUv59ReFJivNp",
  "key43": "45RcU7GS5hnqiVP5hYDyv9YwQwB74rPyUgqBYAhMXCrBVCQRqAc7gwesbyUFZk5XwQx69AvCYFXsuWdUgvtyjuK4",
  "key44": "3aU2Rz878axEYE3dBhfEXzayjJfTYHLwqQdCFkAh5u97ayGLvZd6PHcDv7R47ULYpeyNkKNoqp1JotGspkEPYXQ2",
  "key45": "3RTQ6ey4XHo53XfkoyBoS6VPSHdYnr8ceYF7C5hQZSEmnGDVABN6H4zGvDwPRmywFgu5q8j5a1GoAJJ3NfWvRUu6"
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
