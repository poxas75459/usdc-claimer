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
    "2HFPXXrLzdKuixPw32Ammoat9jnS9CrDG63cQAeKaqQnEKJSgnC7PskSEDYfLQqogrQZgSGehYxbiCPFUUsyCjep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3381ovvm9F8jpYTESxsVByZTQ3KkfbBRRkRFJBsfaau4W1aXxAumzi2cXgMfZkWmV73r2YSTDokt9DkXnb23JwB6",
  "key1": "51c1nPnDuPrxUiGuncHsMqgi6VgRMzCP2tbNaTLG3yV1bzCjcqVMrqUvxhyTpmtMShKbcPnMr5okUKzXCJqU3PzT",
  "key2": "52ZppfyDwHMVsEouHDiAcoSopsnJ33wsiyAJUodEqMR62jxoNffhAXQCs9ZBZ1Q88qFQrGbpHRQ6mqsSGQPnrPBB",
  "key3": "VefvG3dLcKnjBaaJcSmZqQhxp3V39bBmBQM9W8rNC2R63YuYyP6rYNr7mf3yRtama1wBep4Br6M5Jrk8CNcTXv2",
  "key4": "EgDhiLef7LgtFX1UZQWe2BCDGLUZGKAxHxRj1inqhV9LWGBFDWHBfueUUrnDgiCwXLcNUuafAHqUBvJgVLbbbvJ",
  "key5": "2KnQYsWDL9KC9jqLtftBiNTQBegRd1mcKdFUoRFbdefr2xdrBabhUJAFJLu1pcNSn48tTMBLH4MPJLudxyAoR49p",
  "key6": "4G4xAmnJnWtiAJmbp3G6ic2NVMNWze8VFQGtLpbJmG3f3Ur35QcMUkLrkxwybh1JboQXiWXoXaUXLKi8mjAjyf7x",
  "key7": "4UMVkZPY4F3pi6vNXAZqU2cb1GLteFN1QtvFFpU4NhnJUUt3iuYNRkfqNE7GHT4cs5xfcFmbeBejJJ8mHbbFEcpz",
  "key8": "mucu1auppbf9Xs2iShc71XWvWMyUsCEfbSZuksRKoV5xthgutQZ9vXoFrXeky4sBvgstywKSdKZo7cDHfJ9ZRtm",
  "key9": "2V4WrETJEPp7kzHvbTw6q2zT8y1ERnc2ZHbmiLA7K2ugKoFdYtrAb1Pk34o7jZcs8s33gvwPCDB9UsH1UF1UUejy",
  "key10": "53FbXpe5t7GwdHFaHJHZ2PVp6enp39aPzfMsH4tUPzFKgh2948t9C2hCdTTaCJx8wFEVnDa61DR7kBSytZgQ3qGb",
  "key11": "2iBRLobQ3MVQa8j87dDZvfLRvCszEKXT3cLuTXMCpgqXyoJsDAJDqpYAJg5tiAGgFfCPEudTa3PnPJ8X51UwmAqg",
  "key12": "4iEdk6HBR8qiPhAWCxMGpaggNQpK93iY4swCjsem5d9btMAd7zPHEzLkhoLxK4XKkm1eVc7cX5UpPdfASfi1wv6S",
  "key13": "54fWNqSjc3LdFZxq9DzzH8iazsuCnWToNkaQMaByEDkEVupWz8JyrS4RUZ3C54MGCVeB6k7MMDAwxWYty6idmDHx",
  "key14": "45hA392sRy3QpKdVCeLDwoYDamEs8v64vU5PHARNqwTLvZgGudvoe4UcJe5ACkSLSWPcyBtDpeqzySKXWmhf21bh",
  "key15": "4iTcuvn8EhZig4sdBzRrAhkCkRbipAAh6LXdpRHhBhLbcC84zs2pwmk67HjL2DSpScnx58zaZz3ebpCpYGbzHuZ1",
  "key16": "2vyyMYDkAeaMhcGhipLKsrTsuxefWFmMQHKKfW1fLvrwmXmA578f4MEdj5pjfuWCzZxVc1xNPq8CV7D2Upgnopx5",
  "key17": "dbbJU77mKEotLniPBMd7RrNp7fg7aXMH4vfzbQ2CE8sfoW5oDRhUur21Qzmr9tMZ6DzJSTBiH2F7QE64KsMDoB9",
  "key18": "4YSJEfLd7hx3oz28LJmS9Z5RgAJVr49uXNSp1f4VBiA6G8EASaBitYn1EB1HujGygpAC1qeZARaNQPAg3WPCpT1p",
  "key19": "4htP114H6GFFzzGhqEog9JqDA2bJType3dXefrMYZyfsbHV35gsk2fesaCR8YV7L6Mzniev5fepxGksG5GTAiyza",
  "key20": "Zb6YEssnSHqu89S88nzPZtJ9BdfV2Gj2u1zb7iKL7D4pj4oq2sYpXcbDHPYrCHBva65Rrsx9pLqxsLD4yn921xs",
  "key21": "3ovHVEZpGS1LkH4Ddm8Jznsbaa4Dm3a786u5jALuoV68wDCiLXWxrZoe79NBnAps9RHp6MrPPErNajBJePFMDHpp",
  "key22": "65Aa1664LYhCYSDuTxiC2d7QWRmxHfadwntc2HPztugPzQ8BCxxhNYK66G2f6HNAkoFCnTgMhsqQP7qKMRQmCqcj",
  "key23": "Ge5qA4N571LBsqgtRBmQyYBuznn1qQ8D5Exeqzsvcg7PaMFuy1scJjBrwEyXNoBCvKSpSivrqxAVTawu3nU8zwM",
  "key24": "LCQ5dXDN8XFgX9b3trtBcaZRvMketvSUkyuN5srvkaduK42PNpmy8rXL4TKTbkUxbacS1YNV8iLDdutPgrWf3Pb",
  "key25": "3RBYUPyEYQc97VSwkFAR2FXouTkJEzvZimP4pcVDMPSZ1xofZnngbUPcJF9e496EMgBZm95Dskaj6JBNF1YcRsFD",
  "key26": "3unoHiFJUuuhKTJYrz1LU4vk8VJAjvTsYFGdvAz8jyNpFomnAJ1PaX6hKwN6otu5SUd3zG5BVbtbwNjGRKM6Xa7c",
  "key27": "5sr8EFEb5HHgtNSFPp3ocBPWJKxDqV9hYfP7Ddq48K76hBAsyiW3J6h78XeYfiarsZgRMQbsuauZuSVUXH9D1ufE",
  "key28": "3VdtDqqjcCef5UrYYAyXK4wNGkn1kkhpwj2uSGKBLZSeGPRVDVQ5BQPFghce3JHWjiFffq7ihWzUizzpepDJ8BBb"
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
