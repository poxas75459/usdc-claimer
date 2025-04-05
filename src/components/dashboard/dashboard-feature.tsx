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
    "5viyQNZFB5pXBUneh4Y3V92UTK9ZY2K7oeXHAfWS8759oGgXt9kDnf4g1zVEqsz9DHV4msycVULSzKxvoEGMGAoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129dhqg4JbND3Ds43WLQwBJLaDaR9QKgwxc9kBbwPK2yniWEeGGXet9uxVLG5zAvW7V4n4GSgE9jF6aa3Fni7oBm",
  "key1": "5nxbHb5sV6Yu1oNN9cBVP7hvebmw9h7ewBhfGtr6fXBTfuKRkS9JjwVcBDmXDmD1SqnGzUnzp7Tr3FrSZRfgqSEU",
  "key2": "BkTwSSfEC1xGjpQHnhE7mHCYRJmffh7wocNPAWTDmLVW4iBmqWfa4KNyRgj4To6iFHpqWxF5fRvfnE73Ge4e6sJ",
  "key3": "2cJYQUk9WeYZDcicJPjWehxU3gMTeom3Q79iN1wXozFUWo1JSvaSx77moNzw54XrMQicwZKiTr2rRbRsguwJQond",
  "key4": "4o2i2FGBHkvAxB3nWjJoXAAJ6R4zp46Ud8TCspngzB7QLTKGemLJ1XwT9izGSndZ9C4Y3BA7E3r9CHkBzZ3LRe3Z",
  "key5": "4v7afYgP9q9a7RbXywDmL4SS6AmAZmYAVqCAJB9v6or5cptvEyg3ipngsJ8MNncddTu1tfenckmjFyHN8Wdhhobt",
  "key6": "3Ntnq94wymUpxiWzKdxom8hpQz61NoArgXrSAWQvr5EAQLPczWQFSymaPMPUQb4nnGqWDpJFxCYTePvkju8Fi1iJ",
  "key7": "5jQxDT2jow9YhZm6nqc9VNCsLWwgQ6xj55sq2yjdyrAqVEvNsgYqLTp33mJCDa9pXV8tTCLyML2Vj96io7Xan5sq",
  "key8": "324rK1A1CoTaDVwZJc7Ls9bxgZPSngE2aagyMp1ax2NC9LvgTfk8AxUcongcL4Ly6ZEjBnFYJZ8xPj3gm2S1QHzj",
  "key9": "2eufbN31sYzWgWBNyucbiK8HkXWjioLaxodAioPQrzsnLcBgG1y3c6a57DoixCVjoabW2b3oqaV5nhh7taShvTh8",
  "key10": "4ENZtPND3fLAM3iQB79iKd7Teg2RMArUTu2Z1zX7r6KYYM5pTsJFCbL2PoSUb5SQDgcezvoyV8CNiVCWKDSiTVE6",
  "key11": "2zKcQeVSo5EBEFtNv5nHmvZSozdCLuER9nSAKM77pArJmBD7V4bD4UYmPRLAkHcvSEtojT1LnQTiYfb8R5bsuYxR",
  "key12": "5WmEyj8JSAowq1WxpREWu3Qo8NDTBXJY469qVRj9b2h6fUQGpA5GTq8kSGkvde7S52kFLmFdEh4uvCxS74xauA2w",
  "key13": "5yUnWuCQQUC9K3yVpxNX1BPCKpNKdfkwMpmnjK1eNLit4j2EcarL2yYtzgeKPGRCak2PKdpxfcutDWjc8aewA3mu",
  "key14": "3ZHqLy6NeWFPDTRGiXkVC76rgKZUrdNFdqdngDaioRnE9vjRAKmZx5PkH1AjkEjnsqqLDRkAVobzxqVbfAkRTfMo",
  "key15": "2CUYPty2A2ACLrqqPu4AytyhFiD6A8BgTJjFLeAu1hsNtZkFsUHFU7rBaf6THFXTT3A2xEGvQvzu5E7czmcJJ4Cm",
  "key16": "VtmSg6oKqz5dPYkDfX2RLjzpDQDEWB13Lx2f3peBCFW1z9gBMrJz7eAWfVkdAcy8YyLTCMQQWbvGEnMHG4NzKhE",
  "key17": "3tPqjGN53xiJbJeQyoPFncTGL1LiJm32fSzEUf6XccY5FhJbrQt4hwtTh6q4FCn4KKr1zb4xo8d5ArnB8V36y3rA",
  "key18": "613E43AU6wFHN3FNuoxVASbF2LLk4FnyQV3nLejB7rzQerUkZWfCKmGgBo4sAjyLeBfKgDt43uynQ8TTDq5E4CLp",
  "key19": "5NNDu8nKC16EjsrKGCFHcF43omkYKRu72yUCQBsHxvXpk4B67yuBC7GDye7sbT66sc8oK4XtuRaRvC8YbmeKoSBd",
  "key20": "3VfMaVXX9eX56vN2fTWu3xHEANDctSFhpbFajwEfEoa8dLN4m3KQjAo6gnnAbWnUQUmmiuuMydWycTyMYpJs9LRn",
  "key21": "39rvTVf9HTuFz1AKHa1CzjRop98uG8BAope99EkpUe4mXTkkcoZMKCA7EvxHzaiSQkbWzxNcieWM7tHXi4w6N4Qe",
  "key22": "4LjJwEXXJC4BSJD4kRGvpCgZEDkKyMM2yWFGyBn51pUEowiAREK8zLQuf47b1L1Q3rs5x97tVPAejNJrodDy5zcf",
  "key23": "4SS75or28suNboZD9AdjE48r4aHJpk9G3A2sGKvYXjyXcQ3mjQ9gw6evWossNziRu6qYaS8WFD3heeFQ6PHgZjqr",
  "key24": "nw5oV5KZ2238jgC4uN2s5jVKCPvFxKdyJCynFrfC5vEC3RB4nCRbfjWxDrvZ5bq2S3cLAqpJHN7Zamw5wgH2YQw",
  "key25": "TE5zv1nrCjgqKhEE9iEsGi4m4z74vH7AK8rdGnp9ncaBrkcBYdDdrVSKVMScEHtKcu9vsC6ZZ9AzEPyv2Awv7FF",
  "key26": "3heuGg1mC9rT3b6Do58Km3ZHZu9pQ2JtzrnYjQwnprGasUtfZoaACqkLWDmpVA8rtYBmqYcNk9GwLUsamWoNfThx",
  "key27": "BSe45XwMvWuoRQFmuCt2fHCX5ZzKth89aPSnqX1YgyBYDbq76enHAb85ecKLjb4X3RTjM8vz83DTXHfAUofK13S",
  "key28": "4riHyQE6b34pvm6DfuQSNGRgziVrxoSCk1LhW9tVmZmKqTcdxTKuSAqSFB2ibJnmr6vcsGyxD8wUVEYafjKrSqm2",
  "key29": "3kFfKMBontLdCxmAiWeoKpdsja6cwMHET517MvvQk7nNCzXEAAs5rP7DNqPDAs4RPhZ6Geu7bnkdjNbAyL36BwhV",
  "key30": "uouepdHQfkeb6zLXKLxojwiYREGPfq9i2MheVnQK6WYpBJbE1R1eXKYP456kyzr81EF3KMRgNgSBxEdKrUZEwYR",
  "key31": "vCgmbVTuCNvGZq5dQVnTGWsUGJRnwYJosvx8nJuBBBaNBxEaXV7vbYHXReCvW1AtQAoVMrd4ymd7o4V9aKTYFbu",
  "key32": "5Ti8hjw5ZL9R1MSFrbfyVY8YbSxN68kFKDmvj1pUfv8ERwEwCTq1VRGdw5tVyMJCULjSxpS3oHgWU2XVZFL9buGG",
  "key33": "63U1qXMSohbxgeTtuLEwBiDPnXmYQkZ4EAAcR7Wx3uegqeHRHovD9QsJGv1m2bHrWEMitNB2xFvyqZxHJ4RANdca",
  "key34": "3wxxM9SxXxDkMq7ZEfL27j6BkSmh7bB37Ema5LxxUiXGif7gGWVCGWfGWdKg3TjDSwfYUy7q5SDF2NCeVurNUsdg",
  "key35": "4oc8pmCVqxqGcy9kx11ysqHsXhVKSv7tUnBrkDXLGzzigKjGNZ6NLgE6JQ3Z5MGutCNYFwU5V8oo4zUPzm3Hxe8e",
  "key36": "5dkpacCQyjajYdV12AB3dGk2XiPeAaJfTuyY7aNwVDtXZ3VrreoQ24UXU8k7xvXfdRK2Dp79siff5EGdU7Lq9VBV",
  "key37": "5Hb4GrTTehzdT4q5qzVSzxQcBHuCFZGqQMarGeusZDWKzjuncEBqxU8UBDTYx9Kjp2nUpHbEk4pooz7rUd7paEnE",
  "key38": "5D6VJHbAtvu6NvvMpc5wzR15rntqNkUysEsusVgBYqb9sujtNAPV8jVJfLLDXYGqnNsCWsi9sG9WE9fc5wCsma6W",
  "key39": "2sDTmkcjKVSUqgE7w9mzkxGJJZHDz9L8nBRBWRi4Y6WNbJgCRPRjzsYpkPXtPPWYPphvyKdDSPJ52SPSRhiEh7Rm",
  "key40": "3XqunoVVJEDWEr96oKbmWMvGKFYwzx1fcBHrB5wMEtHZhvEafiaAawppRfohHvZfy54C6b5kse2sMD6sVRbp9CYj",
  "key41": "Gn1G6kgDZppa7m3q8onhkfjW3vjPEYkGX2qcTgCvxB82pbH3uhsYvubmu48zTBGTzjy6aALMVWUNdfsuPGoyPMt",
  "key42": "4n9Ju4bvsFNp3PUEwuxV2qei5jrNbdixFEvViZT7jARFiSgim4RASFyuXirhJmZ2MW74zXqxUK5293A49zmrapUq",
  "key43": "26GBoYtfnEXFRYsfEkpcpqxszpUebaASF47asPNZULK4j96vo7ztHXYQjMKVLxnKg8J2KUDYwGfv95rgEAuBGASu"
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
