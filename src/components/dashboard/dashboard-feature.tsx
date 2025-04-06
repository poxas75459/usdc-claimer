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
    "5asRiEmq3RXxvWvFkDWfwkXssPemycLwm3ynP9TVBQLpKtL9zhUi8iayHbiYnf8HnpMuapfhAAdJFgWDh7NRSYUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qs846Ae2fjnEadgxgSzBp8oRKfNKH4JXR96BN3nvh5hS5iVFbyWyfwEXNpArkfE5LYYmXkUK8CejmGddHDiFsQA",
  "key1": "3edozxGXeLKozvR1k2jhxeTNBU9JbWfEWiJggJBxSq5Y41wrhZ83SeBr8Lu6pDDJ4p7PKixp7hirZmY2G2UTQKyo",
  "key2": "57aiSyFK1HC1RS9nZ71S5CjTkL1oqGDaSdZiVcm2N1d5jSkikCGDhsRqF2FMRmyCvXK4fGCLvcJBmviEsd1HzEC1",
  "key3": "5dqK6iKAY9azUeUDTwH8NEJJtvDWqpLfDxi28bxm1MkAgvFzEMYt4Kd6EfoTP1Y2MDi7YLXeM1v5wNsR1Mzr4HUp",
  "key4": "3dxAZaruMCWhrUJdhWsEcGKfNaDzAeoHPbxJ2HuhwKku1E7S4B7dK7VHXdaoxRr8P2YKGs7UgtPraadytyCGScCD",
  "key5": "4fKm5WotQfW9eHkY7mdrYxKfQk8nKWfnKUPVdGmhJ9dHSxWxuiYtuWPFhSR9WNQ3JDzMNLXvC69voNrBp9M94Q46",
  "key6": "21tQfdutQbRbfyUNBLDezt8Zh3uNVqBKEcmSN6t9PVdxKeRXd15uA6UPTjXZXLsvHEEJHqSzG2ozcRsn8PwNANtc",
  "key7": "4PKSxpk2JoHbx2HgX8jWDRbF5mE4cdqgbTCN6iYtcf6VEnuh1hGZ46edS6pxDLBg2XNe39RxSD6QrCp518Ekkxf8",
  "key8": "3Pw6CNsZ7yFNqkaQdxnyziJCdHsCE6Ai4G2RCFJgpMQzkFbPVLYVjqK3yXXuvY9a1J3hrDWtfkvoKmg6pyDKC1R2",
  "key9": "EL9CYqRhapD76KQG8Xu9RLg1p3PS2i4X98yuevJqqFjN4XvPo5eRQZSAn8YXpRexiXZcwiAfsWSpjNh4oUhpV1h",
  "key10": "4LuMx6MhMgk51LmYWieY8an1qqFjnqCiDV7ih4cBJWpFhamrtJS2htSN24eTXK8sJZjrxG1ZnPnEbEW51bvvhbiX",
  "key11": "4Ez6sPgkGzPCr34f69b1TXcumNPbbpQ11FMb5wQQVNqBvmjykWJBCkZisrz3o5PThFsY5DYTjwFTjL5KDGGB5Az3",
  "key12": "267GDiKfyAaWUMrSySNXagWTY6nUSKc8SpyotEVaVcJ3znFo2DjkLyYdqS6CKCQpnSCbGbFuCatKGesGwddbkdMs",
  "key13": "2nkzwMwUj26fLXwi8xnuHRAS2BPbGa8tZEEXhdCiw3Ug53dYgDrr7D4KAaH7tWER6SmcroT4qmP4yT7PHrNjBrZ5",
  "key14": "4XzzGgYvMX9gYHBAW5yUMZih1CFxukq86yM3eLoAbeoiBDysVxRpE9ctRihvn9Z6g6YJ4N7UVkDiZ1aGXHASRY54",
  "key15": "5ARpSDsRWuGe2DmsHBi5S7trb1F84C5Lc1xwxstqySYSuWh88gnHBHUS6eQwW6tnxJTKu87ck677pZ9Jyu7WVQeG",
  "key16": "3LhN3LSihNW681AYjkYytFa41BUp72rteAVNFSoMn1im9qgbAy868RTXG71jnP8RPxbTBz4MJHY5Mohgs4aT1XsW",
  "key17": "3VL9XgyH4s2GJb2nS8yms2uyMac1hoSBVn7wZRs1F7mbYD5tWSbbKA7Bpb2ey3jaXW1xwkWRD3W56kKjUboeT5jN",
  "key18": "jDqAJpcdJDYoqQjy7T2VbfnjnMjL2KdoQ2R52np6RCyj6CzA5oV9Tdja7hc4kjf3NXAyrypi8EWgvx3XCet73LG",
  "key19": "32X89yUhqj2rpT62WeptatPgtDmPE2FbRcZC3LWqQSoJJQD4kRhazvjKaYH3h8kq9QBWFq5ZrDW75ksGiNgu7E7V",
  "key20": "2i78rF1UAzq1pj9Vm5AFzKY8tAPsewQa7Kb2anuo64rgEX1xtVgPJDaMLCjozR9GnGbD2Kv7CcviFMXtfRmTmSzC",
  "key21": "3fyLfaAxqwkUWRY55WBS9UtiDi5HCJqg53yc61jttiDKNHj9wkfRgsR36ibFfYvVZeGWjRkBv484XeEpwS2qo4J7",
  "key22": "w7sMzGA5WG31XyVmBPBpczqubSWYXFwQQcFfxFePLXdkxJkXNmW2LUhj9HnieHTZVEVAKWiXkdE783zYA6So51k",
  "key23": "2RTeefHQLt2rdPz4RPBb8LfAKsc8KsqA9cZ1REvkqKfn26f4KQDMQYskUVc2ittaphuEXZc4fjVG4eMYLf1Wtspp",
  "key24": "5KzxU15ShXpTTcs9bPSHyMhR8kUn1U8N6ar9Xq2AC4wxVAHs85Vbfe3iow7iGKMRvup7P46oRDWpJpuHqBjbwniN",
  "key25": "3jJmfeBR8Cy4Tw8YLAys2JcXj56WusAT2SG58hTqDBtaMFapvJ8QyCRiSiEcAFvyKNjFYm15BYjV6zSfpmrQxcXM",
  "key26": "2UVUr6GdR1AS8HeDkXpbWGVRRKDCnmCkriJWd9x59oYLRgCqerRZyQaBnqm9Nxt57u4KQwXij4kShDqAy1awU6xU",
  "key27": "5uc68qTBHnxC8rap25qjmcyZp73yshkf1kTnAgUVjDpkteSCn6j76YnetJAm5HpFxmr2HjefucMUo9kGMEN5FYzy",
  "key28": "27uFAVxJ3kL1etJCXHjgeVXbc5vMAR5qHjDrr1jtDkYfZnhugWPNvLQ2Ej6QButhd6bhtcsSRZYzZHKQ5BM1S7xT",
  "key29": "2PXZQJAaAhsP38V8LGPs9GvLtN7mqaM5p3ThFf1orNcA4zU6mDMgrcxqF5y2UWGwdKdf8a7F5jEvKpH89UPDC4wx",
  "key30": "3XsUqyAcmeyaLo7fM3X9q5RuzZbqKA11gyxBdKh7zoK789c382kbgyvbARZLEY8hcem2mejeQzhrzvbWcRQfKK7F"
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
