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
    "4CQNGrbUCoZtmXjb47gMeJpu8bEW4TeP4oZS8nSWbCE7U7zAWEzWNszS12Y8csP7G3kzeeomicKrbJy1SYLCTP6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApYjsqNbKteFVpMhSiRqu7mtJMAjcV1Swgy9fYVnWhKCDSKU63Qmdt7ByPYvDTANxf3CRxym8h4AVRdHy63VxGZ",
  "key1": "5KsgX23Q3vbwBSubMueUf9CkaVXvAfuwZQLcXcsLQ3mnm1z2VzDRWE6cnbRbVTBBXBcjiqM5D1hHKRGt2yEquRmx",
  "key2": "3roUMm2cYEc6Dq8znyPGeRBDUMc9iuevTbtXD7RDpvSyoscMmMEZiyDmEDh4o2jjrW3aX7u8hBtxZ2fjCXNP9YDo",
  "key3": "4EuR943REyjAX1EFm9Ei1XzuRYxEqWHdhE5ZxoFGivNzEj32CsWRo8suhR4L7y4SXjxP47maVHecEo8J7mioC2Do",
  "key4": "3JMt9TMm2WYijr5mAWVv7baSCswHafzaLR25AMkxxmSEVBZDLx9MHs7Ki6a9xiiBJNMx9c14CVgsnNsQhfSaGkWv",
  "key5": "4KDHJ7yer3pTaYopWqxw9RJanv4eggd6c85Sewyxii4cByxdnDdhVrHxx5oBNWrULCTYaB43sRuXCfC1iCdcAZ8X",
  "key6": "5QW177YbpVFy63tS6RJAhn1W76PibUPATZeEheXWNC4944JqcPKYL8AXwtYvqZg8hLVBoc1i8JtmaeKMDsqF3Wd",
  "key7": "jXQ81DZiK1bnqfTFEdpsLH9Y4jKy3c2EfUTm14wpaQ5h8HaKfttUNioKpzar6rEB74mo99HDdTZW8KPdpBuFy4F",
  "key8": "4P7JcgMFsdh7ZC1KuEZAeDmRAWnqrsLZmJm4Jx4jEL3SpJ8MZLVUSE4dvdazKS8dFoKyy39GQV2znw6UhVU8ZX4i",
  "key9": "2U3iUJLzycsC8ZM3pKtd6qyyV5qX5ZG7sYQ8MH69y8WqvTodB8MiPdZ68vedJi5BGLyXHjbti6sg3XT4P4QAzmRt",
  "key10": "2B53gFDCRBH3su7BFc7bj7MLA7rHw4HmyQVpff5dUEnWEKZJQ1gzJcykKu7CSjGfuH1Vim86wcuVyuzQ6Nu6srH6",
  "key11": "dh1yJZ5Gdu7AMn9joZfmXNjmhSy1VcicYEf4NnYgdVu6Fhxq677G95Zw1kQJLHK9QYWzgKBWWj4iBQvACBPaH7t",
  "key12": "3ic3iYyobEKZBsrJDDaxZeo6u5931ar6pLRV1njkm41WAYUCF58khVKBaArTHh5cC6ZJtG7E6SQnfgcjPSo8kHGV",
  "key13": "3VTL2bjuuXsjCa9UGytEqjFQWfyJM796LvLwRe1vrpPhumxWPuno9QN21uQ9hosCUTYTj9TwHhFSEQ25hQR2z9dS",
  "key14": "KQau1UtoxrxkmrZzpsmxQapiwH34zGg3STUCKVdyvU4KAc6pAkN7qruqtT1kPoYy3dRVazGX5VutnJppgetdQg9",
  "key15": "rBFo8XDna2LQtPKzhGyhM3tfbfd8rJxLdLtPBQiszs3tizdZbLcrbwGapcUNF8AXkHPjo6dMVw2QUveTmZEBb6H",
  "key16": "372vx1FaeSo7dWXu4qoFSztREBFsz3WZ44M7e4gtU9AQtxnjchjcZyKyWpCEcqUQT4uMmX8J1n4P5MMD2jmqpfGa",
  "key17": "488xeKUUwnj17kKdJGwkdg1L1P2SjfQW23U7epZMS8crJDgCtctwAQ9bCnvtHDrwfUfQ7JCfRmvpAX9KdBVaLKfs",
  "key18": "3YoZEJsz9pN4743vgePSRf9Gzt6HaAxf1bNtiTm5XjphTdY3pBEzRBCA5oDkn8eAvqPv31BZMFxfU9ZpJcem9QcG",
  "key19": "3XGmHSCCYhiNKkGkB4gsBn5c5nVxtfpXxtHPCuaNdoYryVPBLxAAz6uQTyhAK2AfnSfojsGx3Kj4U6rhK8RaSUuo",
  "key20": "28KaLfERBcNHej8yzckMqGq8jgSBtSrXXFx4yMQWjPRaJ6aoz7KPZ2i27e8kRCammhgKDRE5N4iYzJjujR9vjCEr",
  "key21": "4c24Fyh3gqb3nHXiWBXLXyoSWNy73T7DmeBg2h9JPhcLPJ3pEtupxX4VcBnhhG1pEUDj5U1QvofWJCT5nszJFBey",
  "key22": "omDTL1L9Sd9N87vwWNGrPkkZ9jZRDQ7dCRzv13FZyQCKUCqUWs8HSayae4qWzseRS4DwAqkyW2BHeJmyCJ5Y63j",
  "key23": "2j48VFoL4pPEEBitHN4Up2h7xhDv87GdouAa63aw3cDQSJ6rba2EBp5FrrjLwdyWLibmrek1mM9jU7wzdeczfMjB",
  "key24": "3xwJM8BnpvxPBJibR2HDsS1hCkGWa9rN61KmKRpZeibxe8rEc7g2UNoxL94MAiTmTXWzcnXdvEc9baNtytv9hoe4",
  "key25": "3bsBuBqw1U6fdJEJeMTQ3swfg52qjcpx3LCL7gVtvKmdrmA1RSFno9grhW1qVNuEkZ7QUEZrXVrpk2rgb1WxV11y",
  "key26": "27ahoB3C5bfZcTDYCoJaKcvia6zjYh1LgPKAJEuTVHw3gzh3edYHWEVymfiWSg7aY1cWtjweWo3K5SAp7jfCehBs",
  "key27": "7mHqGBNGdNMywWFtmai6GzLhLNtAVMJn6zST3mNvfn9M1sov9MD3ecKhmgvAfS242gWTLyMqt1sRK1SASiBq7ym",
  "key28": "RA5mkAJcwuqsBdb1U8aEHWTUwy5yEUwaS27KfYAksHctB7ckw5zH8GL6oQuLTkuPz3ZgNkTYf8o6FBuVgaqew8y",
  "key29": "4UGqou2YKCHk681PhvgUzKAsRVyoBKLMcnYKEWM2HyXFTHidG9C2Ta3A4zwWiY423ZLsDx5VhCQRen6Gzrx7uPeJ",
  "key30": "4EXYTo47MXwv6xi9w4XzkCNvJySHiapWEjaKak3bj3aDetmbMYhf64jvEFmTV5GcEokmNDpSAF2t19jWPdhW7MkV",
  "key31": "2GWL74YDMbiuTnMGc3PBPXEx77uVQDVmngEBHhUycTLMZqypXxwhpek4YbQUvTiTtHqvp8hsZSJ2yAsmnyomGkv3",
  "key32": "3vnAGS7qKwbg2tJNoY6JBco9ubUKv2sxWNiGoqi55RXM2MnYkS2U7FF1pDTpo3hbassEpU97PEdSJdsKbKXYopUB",
  "key33": "2duHezAVxybuc6pDi5JvMnxehPK2sqvDzWLCWRHvbMGN2yA6uKGp1zezxxybEDvV7Mwt9S5kF9x8RRxUfPxUyBwD",
  "key34": "56YbXdp3tpqGzEk32DjtJdHzyVnS6JCXSuZQMFKqAzjzo528D1kLX7sntXAucH2YdvnjaLyDMNtQCH3bqUsivyLR",
  "key35": "28yEgHLTe4QMLHK7RnUJjFtxwLZXSXSr5wBFcEwFU8gJcCy4btMyH7Rzv3KhKRdUR5mp37WLALCwWUmGxqs1Wsxy",
  "key36": "5k7eknLMZ1NFkQMFEuhe6DwkmFZTJWjaqcCPu2dXpkaVfX8rsiMcvrfQEt5idvxQQ12iWSyM15RzwsHpfR9TrJ6H",
  "key37": "5j7aPRcuW8ATepdAaTnSJ1XbXhGt8j8h4pBRvv8frq5eySU5dEx5oTZ5uikLYwhvkFe1xr8Ue2MejUoJUC564ML2",
  "key38": "5dkm9pzG7A1rpag9sYWURywupTyQDNt8Ceh872swfwnpYh9rVMiKvsHBdt3ZfVmAvN8jZ3ynN8GHytWX7Am9kF6M",
  "key39": "5kYYq6gQybPQ5mbrhPPw3DaHkPmMegW4PZPvvifCzjpatbkDoydY9hsEdrHktChHspnL1JsJ6CK646SNURVSfLm5"
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
