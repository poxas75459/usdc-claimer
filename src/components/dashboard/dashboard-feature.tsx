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
    "294BttdWzquSsQbq23RjNVkYV7Qc5xXUCtBL4hJezAcGYCR3niWqMvuqhREcJttQsFW2XB8Rsgf653EwXVnZzZcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARnEmEMf1ZA4QRHFX1YXMgahTp9WFniHSgZose6HnJTs4DEab6w3C8tAv8DuTfY65g9uVPMMerjavzkozPQTRFS",
  "key1": "MRqJoAWgQmuDohaTG8MHVvVaAZVyEiJHnvidHL87ae2PFu3f5jtKSUUFE9XhSm3REkNbDV9nGkrKEDfeij7nx6r",
  "key2": "5av7Qw7Af1sJT1kyRQzgdsunEY4L7aFFMKKWPaoecQ6cha2BeLy5tjGufuzVKgHbD5kuER6uc1WuWCgck8JtkPHs",
  "key3": "s5aArJH1udPK5BV6sir7kFjn8w223CqLRMcJrwreg7m9bJDrC4kx4WbBVF5sPNqBiUn3mQVNVAJuKSV7YUfarsz",
  "key4": "EKzVd8P6ou4ovZ4r9rXv2w9a39D9WuSxigeYn8pJQWECNo37yh895DC937sfCJUw2xwDbHvLN8qTx6TCKtdWZxf",
  "key5": "3FdBS1uxTZpiR9QwfPtVAEChrfNErAtX6tnRnU1tqdMu2sJtFBdRuewRSkcAQixLyFjoRjNhURsPw1CyAH9y4BZ9",
  "key6": "iZ5tizV2FHKEGU3ahFtnDi3ofjBYpuTjphmyya5J119qhdbDFX9PcSTwTV86Ji66qLaX7md4WPHkpbAHmN6sW4Q",
  "key7": "5mnZLGGLXn5KEqsbTevxe2S9x3YwvyzaTacHkyzYLLyvvGrUj9ZU6sEsFTSkKeQ4xyhLgnbP3YG5NhomLpr4P84w",
  "key8": "51s1xeMRGPEdq5LUMwru3BTPm3XEC7VcFZWSX13KcdKBfc6gkESxfUwHLducSC2BWunBzWSfFR4X5ow1xQCkzaTj",
  "key9": "4YiLC6Ti9nugiFULDCXkQ8bKCQH7qF16DvBDFJeQiuYZMFJAhqQH5Xs6MdQ7wzpSbnFjufNCbeud1DFAkNs9V8tv",
  "key10": "46WcK66E1rZQD2t8jZz4UgGEczfcY4trrCgM8mWYuihdK6nuJmDFFn1yNFo8kfEBMDkQARTedvonaZUSuJZw6eVN",
  "key11": "3Aezi9GfEjnRWcnT6i8ArW9Ajr97QDbWwsvVq7WrevPWPuKVE39rJ7txo86m8KV4B7Bf2eaYAd7CRZPFcxqvYFBz",
  "key12": "yWMJbUrLfr2vroRkAyBwiFNSgMyre2XUr4Dpr4zxWyEJNCapVU6ajSB7g49fJBqRt5eHjAPDxAiKbZPzAuREyVW",
  "key13": "4jVz3Mx44rskfSinivfDReyECCHiB9YytkdAv9me2JP9dxQfD3VvrFFB1YGZ2P6efRJ5a7RYhKu6zaeu8HxtfqMo",
  "key14": "23oC2ngUksSguShWD2Uj6xGukQMrmY8aLqnNFStTBzviuYv4z6HdFd9J6DDtjT3MbrnQf57BbixRx5XMRdnYvFZ8",
  "key15": "43cLA9KBuXUBkQk14NZ48NUSPnumFTBrwdWTs1kvQUNsKKLRZ3HCdQVUqdjYpsd5BUbf1VeVFd5fdjrrYijpgf1x",
  "key16": "4XdFKwtMYHAC8w6GvAKMfEUJWUbNCP79BrPVLvGRh1XzreokTRbbVLDRUqeuNjUvpazNYsNV9kexTybnmA5FGTUx",
  "key17": "5zpX4HnZJzBiThoYRZjk7gYAN4LwtD1FrVYTf3ELX5wJfqZiYnLs6NhT4an5Kn2oZ6GDyehSxpdinP25karSYi9t",
  "key18": "5WzAGJeRWaHqUEVV1Qr9GWXSanBR81FWVsNEhbNUY8PGZW6UA3FifXjwthyawvxH4aYJfe4bTKWLR3DXtrd1aiEp",
  "key19": "5yyabNoc4cNiaLbg23xTkrDRysYVCtVsJK9EeiPSeq4qFukbNfQyusHbJVpjv7NmNFLXMir4YoEG3rXSVt4b1PwF",
  "key20": "4d69LwM1gGqDnjawzTtgnBrCt3udvmF1fe5vHxcRU2EBN671TgGGXH9G19pH1zsbmVgdzw2FLG8r1vjX67iB4gCj",
  "key21": "46ewf7dwXcBbAJqvXKhVcn2QCr8YheLc7zTQPJjYYBYrWVrHz2LZSaCyRymqpdTQjS6efGF8f6nQDCpWow4XRyyD",
  "key22": "64Y4gM4cGwDWagCk2jHbrsdYEkivRPMnUd9pQRuziqyC2FhoJRX4Qy6TA7CSKR8CK4Cr2mD7rypQZZ5wNS6tpmmJ",
  "key23": "3XVafySohVXWRaCTuZ5qB3cpmaQyXrwRPgPdQhqiVWVKjD4ZY5obG6m4A4LtD2zd323Px1qRDnWdgg7ciUjaoALW",
  "key24": "4cZrwPWDLQJDzvYZ3uBuxg7Twkzig4Z4HWou1Q3WhaSD8KkfScEgnpwKNUXMYmztZiaqdtWXnbfVh1ecEZ78j3Jj",
  "key25": "zj6TRfYKhoKjXJ6v4iJkqhuozrzJ9s5QBhwMSzPSfA2uzUCksyAFGL3Po9Wn7CNk3LAx11jXxKis23hveWiiACw",
  "key26": "4GWTnZ3v19Bo4FmxvpwftC7BmvJcSeJ4pFNr5KFVpexctJCXapr7Zj41KbtN4tuao9BSmGtsJFhtsrBQWpFPucPx",
  "key27": "2bLnVdZK9QyfJMUQLA9eC188aKHfRhT7PTdj7SmnjToxKVrNurK1tyHqW5hD1DSJvom5BUMWfkwuMGe9M7kBPak4",
  "key28": "3refZshFdXmmrWuFwCgPfGqo7z3ThmtyWnmyPoYDwYUsBDxqpvZ7QoYirF67TM8FmZh7QAsh9kz2ULBLZFgHsB9w",
  "key29": "2vKFdFgakj4PTmrvvy82uL2nQhz5EUer6874pNVyXnwQNLkLdmRuPFu1ifc9UKwa6eKEb7o8C3uxwyf9WXNu2HiP",
  "key30": "3UBccS7rZonY61BgVMQeUT5uN5UMWZcY6gJJVcyBzgDA5v51tA3wpXz9LCrFLKCN8he6KwweuW2jJjZRqp9UjBo6",
  "key31": "43FcRX3FHBrvxeZPwKRnq6ttw16fCP9iSA5mqLpXcXhBsuD8NTBxUd5nppbfgazzfabxraHWQPVn7pGcgCV7rVCp",
  "key32": "4hr7FkTTo7aMmXctxNKBTfxMWYMqzvm256HHUJCYM8hcZhGDX8MzpHTi1hG47VSwVo4J8rqf1Lx4pk4BdaPRuq2J",
  "key33": "5uHFuuFV8mKGAAiFYWVMYz9kSKFSxWyeS9yjVwi3R9QkQ7WPRTYK4bN5fGVCQcY2ycWh29RzfKk9UiNh1VoQSWiR",
  "key34": "2BeAr6okc9pz3PbrT4fVj5QPEUJkt93Q1R2i3sU8V3kpLzzrL5nu6VGfddKZYZQphvB7DRSuHeq2vBzvjpAUaY6H",
  "key35": "5cx79Xrk9bmnRt7Wzo8vZzFceLvGsWn8C7UKnFPHx7UmQBTSGXrtTqbGULY3ku4NkKd5XRvcnRa8DBfPUWX4ibR5",
  "key36": "cKAZKmepGYsatQdMpm9zFm8sP1MrBFRyUoLVdBXYpn1eXiTxksxnnvooacpW7XetzCBR26gcAj5AciMG4rZ2fgH",
  "key37": "zUkd9aPsMov1qm2qZptTgcE4Sht4cBHck1jxkEJYtNozUMRGwaTJQrxrcVxQnSLQua6xveq9M4pB1YHvRbNSuBh",
  "key38": "3PoS2FSYkPVf4Kmvfp6pHeDncZtyjiH7PFaek7D9aBRcvXD3cZS3BvPXzhAGg1rzYcD6AxFW45t1TWXmwuk6bU4o",
  "key39": "4Fgt51Zp67Pc5UyShU8Pk5r94CnPQ1SdKsn4YdFTYzYHYPfTV7Q51hqyGRufynaSQZ58juHENLSGSuWPE3EafR5s",
  "key40": "2xLnQqsMW2jjQX3rrxAoX1PmLiUaeWXHPyo4AmdTpKgFTzcKNp56wmDa96tdaCfGFQGmkWo1S9884ypBzDmpFPT2",
  "key41": "2Ri5F719zcz7Tifi9RxG4hJbXTY84oAuk11drWuR8DiXtGBv76RBxAuNhKciMNr4dAFLWHf2eG3A7ghQvwse4DeB",
  "key42": "3evse28xoN8KhWbUo8LHtp1WBuJPpdQwZWnD51Vgq2FvHGwPh9Zdqpuict8KdyCqWU2QKFRfAdFCSo4nb5GKn4M6",
  "key43": "2jDtmCkvtcDDbmGzfYuexFCbGgPTvjaEEzphtbCRaf3emSqPq6Auve7ZAFGXGJ1ZBGLNEWVg1Juy6SQC7cuXDbEQ",
  "key44": "5xTjN4Y7ZMxRNYSppRCfTJ5KFCp2xifkRyWmphVUnZzAsa7hRUkr6NjG2bsZfs1dyJBdkUR1H5eDy7ZWTzQ9pzCo"
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
