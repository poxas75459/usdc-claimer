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
    "5nrmmf4yYj9sZ6EgCiabjbeB8fVKjrVubesREr86gjEVnZrxRWLnJsikiWSeH5vuUbw882Ma8emUJSWhWZLEYNHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnoKHhXpWbUTby3TFVTDF2i7WWJYkWqmyd54igERxaDiKAJp9RQbqeFZ5LRGRv6XMrBEs8FhcwdUNPuSeVZUVsb",
  "key1": "482q31Y2PgA1ngeEBT6iaXuK75B7zQ891NrERk6y3F2B5VsuiSJn1f7JxRHHjbrA7yDJeYKe74ZVQZ38tE3Ywtdt",
  "key2": "26o8H1gMUrXk3S11K5C55JsSbioidaf468zEXPgoySAwJP3AENFZ6GM5Jjw8kFSCmXH5Q5fUAJEG9H6PbtW2cqmW",
  "key3": "2BBbnnbZWQHxXJEDzHj6CvRGm3D67VH4dkj9eRoQbxQk5L4ou9CS1i842owmsS2iHkeFjtQ1mqSfL43VEKrET1Eb",
  "key4": "5mvEbvrhBjKCFeDjMPoLnZXrNVfbfnSZ15zjHPbAFqaWz49c1SDzcU6DHz7fdB7ECf8U6wmsoZDJYSgiBT2VDozr",
  "key5": "3onXbRpoJtWYqAQsWnMdpZrNRMRD6QniiYW29Uz6ecFTzAhobZEwzKv85AVgv2YDeipYKo7AsaaPJipYuDehyAPi",
  "key6": "2U4oRy6eCxpWfGDNpZYVobq12S8dCLfqywKVNPqEKA4vvk9SnEXnJeNa4aREQvhgzSUbrm5tks4jMNB5AFsAunCL",
  "key7": "5eyhfA5gE3tYtjf2qA96U6rgVmiufvQHn4hZhLtZkyjApmwXj4Yi141tY3coseanSoL91kHUGRFW4Ne9mstHesRj",
  "key8": "3zdHJhpcRt1Zu5PzWTm5dp1cb4hBFw8fkAN6UEA7UENvjbRkNYqqZTzotvPnhN6UbJXxavWgWG1BeJBMhnYTYSph",
  "key9": "2z9YPffLF3moy2uUjvJBqu9wapjNsDVwa3VkR2TGtroz4F4LxdvsuRm6JbyXw5dC58Cx1eERMBR8fpwAgYMUW7MF",
  "key10": "M2FoPpBGp9PebCfywNgkWV4vzgbLCi6EBF7ur7d1QMWCncZB6Dh1fRddAGKW5RT97rkKYRi5pV2isdTKcuasKDq",
  "key11": "3mhj87v69vcknu4xCvEXkT5i62atjRmstgqN5dxBWhPQvGHzuSDVw6FJicrxVhLp735sfJ6mvX3WV6SgEqUAKwrY",
  "key12": "67EcjSUnvVMRxhjKm5pEr27GkVkAyt26pKfScLZqu2TNL5qDx97DhQjwXoNFE87HHE1fbekdkGZw63hA23bxVqBf",
  "key13": "32zhYPUjrVdtMgRvsKJaqa2452DcYPbDSBGKiNg7U1xXAnA1kLXn5aHk8dMEdc117cGCCZg9XTuARSLuBxCKeNqU",
  "key14": "2viwXRy7QWoFqv6J6sc2iDhC2eMqGYTsHKRn3SoSTV3XEwq1q5c8aPgVNrUaeAodJVUQRL71eXdnV6XM6CJuMaq9",
  "key15": "2V3d21Xmyp648dVb8EnFkdSuh2a5h5mbqMoBFWLNZj6yRpuDsXvRFpf7bXpSb8a5GW2iX9mtPj7azr2wnXT1qfCa",
  "key16": "2ojzt16QNvbgWbuKDhz7gD4JcTzGpkWjVvKwUChmuxzjcir3faSeKgmMq5AmnT4os5xHUiKFtZdAw4edHCQBqyzq",
  "key17": "3QgGNECLTyjrMxBBnmssuLnghh2dvNiGiUa9bZLdyW6FGpWeg14eET14zTvkpY9TcaZr6Gg3LzV3HJ5SHC76SEQY",
  "key18": "3Mw6wvZyduk6qbWvSmdqMezkexKXoNynLqMD69PZcSdxj4kmEarbw3XWaAE9Gr4KtNPB5yZ74zMJKicf2jRnacaF",
  "key19": "R6TjwowZnJpgR6metqsQ3ng8R7Cak1AM8qxBWWjbapTQFe6Wo6ewVwX96oKv1wXyFdxS2t7KJGZFHLYM3yeDUUc",
  "key20": "4doUiPZGfGhq3s593ZtvhFckY57vPoDsK7zo3s1NGKdt2vVVZGTJEoEEg3rEC1dqrsCNMAUDSX3YtLZ4JmgLWggB",
  "key21": "3dVMyFSTVwu2nwUyLJ7ZjN1UC8GpMc3CfUR86SNcHB2MbmCXcwCVcvxUQnz4p8MKdzxGgrcjL48S3n4JiD2ujy1L",
  "key22": "4mfm91mbei87x9NxbwB8qKWsNrRk3yMnzZraBSwK4TyAGzhsWmyv571fEtHDA4n7X2HAxdgJSrRV9SA4Z56oco3U",
  "key23": "255snMoVJdoFC1P4CEPbneQ7usu3TD6oPGJsd2oPgN1ZwXqPeZAsSVKKQk7RtXdPEqyv6pbgwi65RMpx6WBekgpr",
  "key24": "w3DdWPPvRMkCUAxmRgmKhVWJ3D4njpUQsBB5bd2EjUEmxD4DN844Li1WDXNTf4oZiqSvcRUFJiL1xhx8L2roqr4",
  "key25": "2fmUR5XhVvDNwVqj48ZWK4cm14pL6z7LLJiniidxwJyTGMLWsp16AdF8yemMZ9Qd6V9hPCKDj94nzPUdkpdTJme",
  "key26": "34qA2xoKrRd2kWPFF3SvxmtiraW6Sf8shMhvtyqnq9SMgjjebuc572JnmUYh2VW1ASUoatB9QaT8AACM8X9DSWfn",
  "key27": "5rcxkwrdtZkn6Hh3WLSdAbYMdnu9cMcnTP8rZkwFSajmRAk8V4wFBvvvrUNfHFzHxCHcK234QhKN2adcyqANR3dB",
  "key28": "2CghvziybS97g1UfcsqQh2H2X2U6WeTq3srRPVA2KyVcVvEfkVnwNSwgVgpg83aEoGjVvt6WeL4Up6hxrwp68bmJ",
  "key29": "5RsVJCaGLeW32EAVZV9Q7vTWdhcxnMipsMzCC3SAt8aDWGJjihgYYJb95agYVQWcnZoVASBvU9N6RYYYA4RLt7ke",
  "key30": "2HGGNfaCVKyGZjwSLpfUxCq4VfAxeqzxvyucxudNuuEsegNynxA86NBcr2yzAShXHuaLqvV6ok8phaquba2LcwU1",
  "key31": "2kQ87PDAWPuk52Lgg6h3XXb3KACtvYgkUD3QcgFWaX9ijUTiLbekhA5n7ZUvCL2WUnEtBozEBB5fJw2y4hyDXH7h",
  "key32": "2evk7MNX9VNEeh62L3HC3soy8n6dXXAwcFEUTsxEYKBcifpZTu9h2Lv53uWCmEazEvNUuhzZBXpk7nQfbgDLKmKH",
  "key33": "2wJxAJe5Y8EZucZBpMF6Dfv4hkqqyKwZ1AKhvpmFNZFttmCe3ZBTm9qbEF7ikmmqgEiYR2mc2EirMbrbyJDBktu",
  "key34": "2yNJy13tt3uhxocFmpM8cVQgiudCZDomqNiqQ7RVk3XgszAPgdThiRx7MfzJvtwQ5g9cPwPqVwKeyXJi66rxA2aP",
  "key35": "5Lny16yn1FobxT54boRe86fXQh3DYSSdohRs4CEkyXyTmow26dsDYBhJMkfBuMBWqSVVDnGrFVmPc4dWcHpFyX9C",
  "key36": "3cXHT9jyQ8VNo14QaXL4HdVKj5w4etcJHeRWbXEQcxKkVNXcKaVCgaYRr3JJqWjrkirp1rRprfTGCXkPYW4zr2Ey"
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
