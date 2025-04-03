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
    "5jebD3QaCi287JzZk54jbQjPNkBs9Fux1hW1dCsgW9NVpNxVonGNrG11wt5Myws85zrHDANBpVPhFymTAx249J3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iz1LMGrmSpA392Ao6cCoz4EshGoLYAJQYxeH6uowZ1iyavYingu6FCC6UjqYkUQPPcUaGvKeysbpB7L1LvSgqXX",
  "key1": "4dHXkafxwATUDp751Ect7JYQSGXcES6LqWaXJfFfvL2dLspgJ3Wz3FxxVN9egAK5NQx4zZfR5QTMEAYtNJnAYqdQ",
  "key2": "2ih6tj5Xg7dzg5ZabM6qj1KNGmZJkqTd7Sc15miGsUy73nW16uZTSkxT4VeAJ6PS4ip5BrhQWdAmihK5oQnrRmtq",
  "key3": "4gM1Q8xq8KRw6nWTWtrcggBF1GuLjqb52gn6psgTdYCMM9w4yHTQN7TupmT1S1BsSJRQFmFrwTnvH4a8r28mxxAE",
  "key4": "4pzeAhsZxV83ejunUvDUynWA9ymShygK4gDmPLEYbiVmroup3oYQwGmwn1dwSMYfpUr9gmfnNtfN8Z958dC3s9FN",
  "key5": "3bW3VSMja12B2zcJPCJcAjT1r9cHNrJP8iXpVJyHe2unuaJWmC2YtA6QEMETPi3fYqnv1SgB8TLUwocnhv271jzA",
  "key6": "4NNbqgS3zvgE2mBdKhtNJBLunwHssduN9SEsUsx9UbQbipdFnGvZrArv54EWjyHp51sskLj6Z5gb1HkBebEgiq5r",
  "key7": "KsqRquiq9XqmRjUSxxNJmhTdZvUUAJuypVziKeiwmEhiHo8ztGX1szidjXpk72XrZkHRPfZRmqqBothKYGhL2uD",
  "key8": "4ydzbf7kUsMXhNVE883Yzt5QdkV2NouxDoGyrjeX8boEsuFjgvQP9W94kuD48f9Depu1S6gciHjPj9HUA8FXLQ4T",
  "key9": "5dLBWd91hq7Q39CadqroCn8q6R1n4SYccKYApWr5WPfoBDvbQMU13VBRktGTgddkgmoqENNzBUKByJH5ZzNgGong",
  "key10": "51vft7AAjAbo6pXR7rD65AY45cmFKFixQgxTvJvRbg5snpi1vfiN2DQ3paX7SGCtNLymVuCYHp4nPe8pSG2fJPui",
  "key11": "jiRbUeSdKidMuGXyBK9AXYK7Q85RawGGfbECwEjxXdNswb3mrpSbX8sbwZVPS1Cn8VWwdVAgyd2efB6S5zrhsWo",
  "key12": "2Hy6utg1rkW1M7fYEZZExbQnFGsWVNT9qPPsQ2E7QtUXDq2W13h7GCypZtWhfbtF2JVrCwNfWmY68RLP3kSWzJRj",
  "key13": "snAZsGYdc2ez6dDBmoiFChppgjZV2hzbvDxbbi4oXwAPqydpuXEmfVKz51Fgs2E3L8txMrgVJUa5jjpwG9pV1Cs",
  "key14": "2kefK2YriCrb2jcV9KRCTwT9xQEjxbe76gGqe1kN5jPq63mHkQVALMmgGtHqFbjE1t2HJwxnBcQPiiBAvt1rJ9c1",
  "key15": "3brXcWrrQC4eqdUTjxQcaNcrBq7EJhh7rdqjptZmghoeU6BySZJZoKUnTYHSHf9ifCiwE4thkWWf8yApYBZjoXY2",
  "key16": "5REvVWjUgBG5guasejpT8qBG81u7weq5wK83xFGPC1M4b79yK38wk8VW6UGEXtaRnRCiyphiR3SjmCWGQ2cmpZBr",
  "key17": "3zXMo54GFgQFb8PDChuczyT4EcqGNeFqZaKCVP8xzMBT68UGo4yAU1i3igC8huvJ9xHsZFkFxwJgyJdNhMLWWou5",
  "key18": "3wEe4LWRSH5nYgqs6Q99YvH9FsxYaw33sPMiNS1sGVY9khrouP8URV4BdhPudzqQWVss3BKZjfkAWSJq8eL2aC2d",
  "key19": "5nw1xsG55a2VKBuSdoEy6dk8HXUbyrzBFZ5tYkx2WEiDCy5Wuv9QD9Q8FohfBAQ6F7WhDmXLSF584Sdt3yXTyrpX",
  "key20": "5grjNHApLbRdr6yxNhFkA34dL9HbQx23AJ1b6WFnLvMvX5hMuhXqtMPF2wDF7JXDAgDdxunv9axvN2zWkDuocX6K",
  "key21": "3tLDb2daXBtJ3pCp3JGEDMUXVz6819gyqGyUtjc7GAV7HzZ84ezbeVtU2Yw5Sdu5WcZXvKYBHJh5KcZ5qcwCY86A",
  "key22": "22fVHAW62hLLkUp3ov7cNpznMHmp8PzUZgQ2HxwE27XSHDSbEJCDdR1wtKddH4FwdaCwiXjJKRDBugKCj2nf6WD1",
  "key23": "2exSfExWKnDsDv9x1FUcm3Rwhru5HAasCZ4vRXzQ6C3Fd2dJihoXjcK75CS3ZaVCMJP296NXjCSMjKYh8a6dGH44",
  "key24": "56JcBXn9SVMMELM9focHfxWJRbC5VpZ9xfaLyGggCr1KJUu2WKyzzAUC6a2xXKhHLcfq9L57c67U2bdESYGr7hoW",
  "key25": "3a28tXc8ufJLBcWjRbbn7sJ7NM91GbQr1fUg396fTac8jX7TAdZprpTthGGJ8gixMWZ4x1YRvYK8qiyx8qaQ4VyH",
  "key26": "4mZ4bDSQEdNvNacZZZA1thyYjG8KABd35EZdXDGuU1DNs6rathCzhxARD9wCP84eviW5NwioHy3PwZfpSud14HM7",
  "key27": "4zNvw1yrxQ6HHaVCitCDS5CbQ7N7VwZVvV9yfGWaFFsMLqAAvLrJaJa9ukgMwZ2PC2sCuXKBcjrBCcLuExCUhhtA",
  "key28": "288CVHhomSg1JkYceGPCo1FKkiBKtJGiTYbHtiKMMAgPhtDkbEzm8LKCPC73Ys1VUwCL5bughpfi8byJoYBY3yWU"
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
