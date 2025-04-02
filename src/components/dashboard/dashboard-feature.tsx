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
    "F257DdWcsAyCLoxUfLh6TkcPJ8qFFoz5tMZQ1oUPoFR2siXyiG2FXXfqLMRd83YdWva5CMHyGu3B7mukZpzG3pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sjBsnYJLPvBX3SRiqD2WRswmi9s7vnw8MLPjzBuUomFfo8YTg4S6sZhUxzzzEXhiuYhCqEY53vtFR1ViqjmKXh",
  "key1": "1x62vaSj4EXN2stBLKAf2nrjTKaXCXxRad4fBE4NzWKLh7oSkPdkL5qCwrKa26Kg7ZZafnFMErGfXRrxdn4XGWi",
  "key2": "2fvj4FcyxLEs2x87TRriS1ebACQBiu6z2cw1gKaFuhGXKYvun94c9CnvmbJfw3Ap2WfTSeSewXxqvbbiymooFqiX",
  "key3": "64kjj5WMxTFT83NgK364MujxjQSEN5hoMQrpKdfoqhmdghGU4ofiPDmr4c1hiF1RbmuFZTSuSJKiHRdNKgKCvqMW",
  "key4": "5gYTDJ64LcHJJkx6bebEQkh4jLCn4VyVX86nnnW64WfzrCwNq1ZTmKu7ESX7xt7QZ7HUdVNqgSs8xx8aFRgWUnpF",
  "key5": "5muxwRbcL9u3uzyS6VXLW9RcXUGmmfNcRiY1EZisJiybedMek5oEqXFvdQ4bJchwwvq98EEa8WimXRd4vAayf4hm",
  "key6": "4GXYahyd3G9pdahXMQv9yPnMQDAnThknf2iTVb9W9foyciXnfktEGfwXhixVqf9sdTrcV3gfj1A2jL7ResSCHcxX",
  "key7": "rpd8MNKQDGjbzUuc8NTijGy9w6x8UsEhjEvug7PTrDa53utvpmcurhKZDJ6S47VGRaCDNJFfth33ZLJ9hhH5dgV",
  "key8": "Na1765VM3kGMp6RKZ3poYmsFzqf3PRwXtQ5ruTBVLsk635jjdfmbiZYM1dhBnC3Jc3rnAzbjPTttsiZUe3rPTYY",
  "key9": "4dKmJaqnQRCxKCaL2tSSr7sUkKtvB6UQMbC7XKFrnZfDnUczWmCDw8uUhZn47UjRsukXPBxXAGYh5vcMzYd6S44",
  "key10": "3kvt6Wfq49qL2WVTFptWog4MADRzi1sLqptfwr9Z3F636j2Dx6dSvZRo55PBc97HfN1Az3ioDhe2pbezKZWmTS3A",
  "key11": "SJkgwzwrEAj66n5XinyXHeMK6FkhafpJnNEcC5DmqLdbQyP3Tf7Rpuj53TiMPehRP2iWmysbtuepFz81E8NsWDo",
  "key12": "3rNQcGGraNF8yp2DQXHp8DhT2bdhjfyfGdjqPHv13YgpqiZhpatSjVakBktxU46UWpnVy8EecZ2NM3HQJdgHz6c6",
  "key13": "4YTNCuPJTVd9vQsDwNAf4CggCpXMHKHsnjJBgwEdZjCQAeMxb2TZGWjn8rdXnrGMw8cuiPEyAdTeGyFQyDYpTC2S",
  "key14": "3eM6GW2CFJ9uzLtHHMtTdn1kdhEDRPGgsxtHhvm65xvPrUkBXNNLoPCcmLSjPySTJZrrsc4sUWcbtW43S465xU44",
  "key15": "VkQqKm9cVtMQb4J3PogPUKEbg8TNL39WGwLwVhA9QA4wLd1Ch8KwRY8S27Wp4HoagFBcVa3Pyo2Wgki13Gq7TPG",
  "key16": "43ixVkXbbvKzDyjLrcHrio2GkZGpyNYs2dRpfjqDnMRwf2m67smZWn7XhiPxWxaYKnPCEEHbYGBr2qTQByQSnFkn",
  "key17": "SgZgqrc4sw2yNVoWy8SWYSNoneU8mJJvGzZD91F9AsEJksBnTcToFzKK8M5S5L2Cr14hLug3AZQ9zY5JrwurNdR",
  "key18": "2UxtWdgM1gHXhvs95dyPgcCTRRpKMmTGGYejQvqggEKa1MmqPv8A5zjfMwTE8rkbLcGx8yE3WS9rc6UaMZNAsaP2",
  "key19": "zHs1yQkwAgwWg4jTNBW51Toa876VCsnKqeJa3GhcVFVqRRg7AUCrXCBHaFiaUHTQFNsgnCBvAYRBXSMZzeJya6Z",
  "key20": "mTdQPRn1GTDawiVLAbvUnwyZpwWEWa268mpjfhgHhvjYLodCZ2X3nLpP9d7m65XY5ywdvKFSJhFhvrNKBvRz2wF",
  "key21": "2NRnzHLhjZ4qUqAQz7wHEcFspcTswKsvWKG81wzLpXqdtziZuHRCH5uYLPHMhWyeNeEy4kUJptShUWb6Za7cQecG",
  "key22": "2QqiKSnAKgE3e7Kd6VxT8zYo5s1UZ7zAgA2RWQud26LKyVSNsKBue1oQdk2ntzejn9nX9Gvr5mAKcGKNSXQav8iL",
  "key23": "4wPi9jk9wYypRRqKqXzuaeeeCDN674ZY4fdqiR11WWD11tgwdt31RXPUm3a8GzTJgoWv9LSVw12UXGkY8bGEMuEA",
  "key24": "4fPrt7NbWmygA4SdXHpvgZ9673qtqBd6PfZojdYC3SfCrHuSV7zj4EKPMb2UxFaMYxq2TfR1GfqWtFWWhEGWy4BE",
  "key25": "2veEsPjBW1J9X9xSDKCxiC8eY95SVdk9zdzAf4H8gCQpEkTZua3hxFeR9vT53rapJo5skvdPA2H6GYSZCiAsYExu",
  "key26": "WRH17yJRqfiiiSdL4fL2qpHXKCJyFKpERzLfhkQRmqHX7yypQ1XthkPC9L5ggkG8nUASAMujpRMg9w2h2gWUxu3",
  "key27": "rm7KEZSP5c2iGxMATwQpueuzRE8m6YP1giTLcvEZa9z68QBgs18NJr2mbawEp1ZwC22bKR6atZZXtTPN2jTf7kF",
  "key28": "5YhQcf244YjBu1kkTYHFD7MfKVS8zQVvTeQrPKKfSpwvanMTbuFQxNsbnQ3Ev7f3M2scVFXC1jSwNJFvZY1rm6W8",
  "key29": "289D7MEaHWkwh6udRCX1qmpZxWH7qz8XYYgNHzScHwq4seK2TwYP1Pp69qifW5ryNCFTko1p9KXtVzUDuApDaac2",
  "key30": "4P4NgjocSVYxvoXqBTyq1eVjPsJRrCJNfB9VizhTV7CcreJ2Uv9dr7haArQgjVEYRePHEGr9hKrtBw5GwjjiF511",
  "key31": "2gvieHD937feWmYMfjhQdAS3qsf6ja11FJvXe6qSP8NUVYq3fW6pttmEMByPtwL54SM2g9Zf2bxGAmLXi5NnWtHQ",
  "key32": "2Puef6y4BaoVEcRKbQRsGgDBDLSS7Wdb8kmcxPdUnSyK39Vd7dDMwvTTUZKwPvKo2npgSVom4tUXHxgoVSzWMQQQ",
  "key33": "xuboTsJhLa9W9g4MqxJzhXPLsyH4ESnYdCtc9JagQ1wRWqaBpFj6FgEiJxmqFKSzetfmuTHaTiSqF2XRyexLBkW",
  "key34": "3PQVHZ4b3cUV74sPmEkRBdMMn3icoTo4pNuTfdn3R92rmvp5QQnuxUrVkfN1DPbGB4eqzGSwZP5V25kkZzXwCfw6",
  "key35": "3G7Jkf84rF374ZMtNCUiBMxSa1T6Z7x9DTigGddfvPTUsEuYUxQdKuW42XLYFPF2hLMDuRV5NfXQRz8YeLTwUqzX",
  "key36": "2njh4Y7EJ9VNr3NkdBxukR9u9MVcbX18TvaYWxenRdoVjKcMxNMs9T3YSLzqoF3rvHJ8Uzamq9LqCQa9SG4GxQMq",
  "key37": "29PNp7K9KhzUGca3S1ziB4uvXQ2MVZrpuv6832GRW5rpFEtH8ErYhqbtJEeVBzVPfYQzakEYrXF2xLGGh2etSkfF",
  "key38": "442cbWMiHa515Mibx8nHz6kNzTx95Xr4AoSH2QNvLxC39gs8cWJH7TQgmrGexRouoJDCb24CVWEKYV83VbgwzkgA",
  "key39": "VSnDfo6vJBf7ggAuEKfYiL6ybkb4YG1zqYo97iAj5fG3FvmoQVhQ1PteneC7EeAXe66AeJP9snFwqS2n8njRP2S",
  "key40": "2Mx5cs9Kv1LbxtyPUXi7dcuShgt4QZZ1ErareuxFB4F8uByFX2tthLhR6PpJLz58cZxXeprmXxzA1JEjd2sLCD4n",
  "key41": "5KMapwPW8ZjKxpfV2TWQTzRdtKxeZbpVGboibNL1jgNXUSUaUfQAnBgVqPsyVTkiBvkVdzsNUJSqVTc22EqtGe6r",
  "key42": "UmzySr25TCgykdsPJEgbkrene1ctWuDZbJK2WRuAesAHwPjrp2YbfURcNphrzutU2LozegHDUnPAy2NCYppaAFT",
  "key43": "3Xh3oeunuKjoTcCxAPAj1QrETKGMjx85EZqL8RJF8FcnEwNYo7caAxd3wm65oTos64e4RbgTH2wdnJzxPh8C9D3Q",
  "key44": "4iTgmDzaSnNMPxFDozpaCkRqpoFGDL3KpZ3bvMU7PGvRL6AAoqWo4JBzrStR7ZjBgjgdbmmz2xksy8cp4Fr9f9dN",
  "key45": "49B4qnq7wxiccaGixDpaX2mhywgASGFpvmakZ9HH9mLf56fbST1bevLLDG6UK1uLcy3NbLKDWt9Xkm3EVkFeunwn",
  "key46": "4UbhAuT5bMPHDep5GqLHw399QJDW6gJ6DJCVi2yGD4nraYX4DBsiPs7fti3KaoBov9r8VNYiHNchC7V9rDRWr3t4",
  "key47": "2QWoTYRVgcY3mWJ4PP2wEVmP7Terq6QiKTaTz7zqQXzi6jb1eZqhutGfZGCdRLVVrB2faMLATVe5hqsatXHQGXGb"
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
