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
    "5fqbR5XkDCcBevsjFN8GWSmUxHL4vBnyJS1kekgNx9UWhwuEB3rcDdLmwwKGvvkSdxcVAWtgb4ErBh1gi3X3stqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMVtvpsL8JxPsR2A6vrrcz8WQs786WCCwjgS3V6iLdPY4fSo3V9Rzkhu2Nj9kg3JrMPXuAQGnhvGaZSSqTp7kAB",
  "key1": "5n8hX91F9mYf466kg5j7h3T1f82wHnNzyJJ5qLz3ZJEk7QULkBemknQ5AbBH39cHnvf7bgD1Gjhete1JW1UhUZYR",
  "key2": "HxN5mftoDTx1qkv7VWWWRemmZY9edvBYNwgetSjd7rhCJWYFL9vYwurMvKTqLpNiuqEH1a3zwVEwbae2CJCA9C6",
  "key3": "3J8QdrNJPHn1DW4QXo5jHGzZkuiwB6UeXwQyrPYCQbQ3caEr6B2oonNrd7dBbv7vTAGzpdJYBqJ39YErMUjpmd27",
  "key4": "2j6ZBasD5YsUrzp5vmd5fEZ3Rn7BLcMBDtU37fmgV7UwMA3sqqLC8pU5Azs5sKHeEJYpGRf8oBW7teT7GG7Adz8Q",
  "key5": "5izci8ZdP2R79Atf7XAC6YAzowZUKZTyvg4S6yakk3TjwLPx2PULQbX3RLuEPD4bmAxdTwz5MLPddyA51ZXbtoxV",
  "key6": "53Y1YmnyXGVGiqbCAoXVFwJtJb9sT4V6ittyGY7vaChuhdNTyP7JeXdVhmySA3TCPaNxA8HAtBCVmMoa1QbPWQE9",
  "key7": "ppfmxZLzzGGoCCBJ9Y6LLqRmvmCDnrcBDuwMaaUpituCYRdGGPixwUWaM3i8U6ppKwp2R3XvwSLE9X9gEE48kX9",
  "key8": "NUFacznw9L1YgNp2g11v3UfQiysiSWSb5mHaQzc4PAhY7My2s9wEkrjHAAQce4RrywKRbUjqWQLHSeLwiitn8cN",
  "key9": "Uf7gnZZkYMzYb7DTn7MPXdpPTqFETX5ry82kmYwPHnqz3ykgNEd3igVkNJe6pS8ptamGh7C4Abpk1QoHAHLbAbu",
  "key10": "5nRUcedYMosKzu6txb9aw65r4qh17qVS4Z5kwa1gEsJXF2A9Uqaam57oFPjKZzvYeHTxncAtcps54wAt3X49oyjG",
  "key11": "4FRBySHDcaFPdRNXm8yUJm3p4o8UPN1MJBFwq3zgCBcY1gqXv9vooBm1x1GeoCbWX3eP23sC7R4H1uUnemTgKSqW",
  "key12": "3Ect78dgg4x1dvWY65JD1xXz3fHaCDfuVmxLNK1QCZioEed66CsY3wpf7C9h91NKCwXyPj23wfsjgdWAUuy2crxB",
  "key13": "26TRgZUCXz52cgUZgpuW8pwxCLB5DU8WtoFaF8yAba1qdpKSSBcDF5uXMYMsLSwrhb4KZj3qkj4qntr2EpJXxzS6",
  "key14": "V7QgS2sHYas5Vj1aCciRq6o2Ra2aDS464oaf6Kwamfuf31sP6HovBX2RnZ5VKgPRNdEwLpUtUhPkBUdFgnyAtkm",
  "key15": "4Ehme3FKXYUtvSqXi7wwqJcb9AHKUMMV5FexSTroyZFKMpuZDpTGcevdGojPHM6caJ2Q88TxgLridxEohFkhay6h",
  "key16": "5LW6kVAPvtxhA92KEmYmjN5ymoyFQJQUiwwyjgYXAw62xd5ShvBoeJb2ShFqjXbREQJLpEEjE8FELHPesquHNPmS",
  "key17": "3pXjiUP9ZKYssKmG4UbpLjJaJmX7V45sQ2N2nLQRbDL7AqbUSkH4XBczaqjKKmFGr6WJp53wpm64So1mxHy98Sfb",
  "key18": "2LexZr7KLoq6uKpHsAwtaC4HHXCM28qftmS4kM8R6et1r9w9eYyb68zAJyZ5NjC119w1MuiqnD4eerW7yeRankCP",
  "key19": "5RjbzMzUrqnabvnseNee9Jh1VnKdibixwKaFEEYCoCSafkwnq61zCH3PTfTSqwbAPHcjqeb3LGwZ866T8CmvhPnM",
  "key20": "4GJsrs52f1TmNEBoMTkpcfqts61EnoXoA7U7dR7wNxjLemtLXuvCxwj8uSYu3T5zPfuSBCr8wqQJm2Q8FhzvZXPq",
  "key21": "juYRuFZXfDZuHN2A8HCT4DYPuUiQT3fLMEesgN11nFUwwz31rbjFTrvPUr5ttR2VV7sQ1oWA8pC27ZmSGAB2x7z",
  "key22": "YVPEErHD4FhwqN7zkSYMXDyhQRYVSup7ZFq5WmhyZVsmCtUWMiFqVSGNWer9ik8TE51N6vJunT986BQNRGVFaZg",
  "key23": "2es16xfnqd2MFv2P1KDWMBprRv4kDDULsfm6g4wnBBQkGLQyfV9NCv5yEVc4wcJV8SbYJyhSwLwZMXo9iG7VWgvi",
  "key24": "2HxYLfuacpbHxmvb7CpunNtVt3L1xS57MphQVHKxZKrEjwUDKtt4vphbXNjbRUqqW4MYRXrtKQK7uLk8eNspVRay",
  "key25": "31QDvVV2HP5DjGqjFZ7ySh2gCVk4S6RWFhhCsr5Wxpy9bxqaytybchnsQNiQH9TzfqfFez3envCc2wqk8aD95Zqs",
  "key26": "57jKE5fLVwivheVVgAzHBsAz1FNPVKVDAQEsLH95bTASpP3WixMA2Hga7jrqeaNr7KWnTjgkoeA42QM9RPqESiLj",
  "key27": "4Ucx7RoEhHLpxXw16C4oArAng2ri47ScFWygwCerGF9GAmc4mYTQRrBeWWRjMaiqzUp7noTtZrfnj7g2KTnN6B2G",
  "key28": "5jfrP5NcsYyhLto2X54oGpCgHu6yBk8q4VgXXs4ipK6JAwCYvaCVr4rPfet6xdUsDNSCQN49WbAU3g6BW9QSHutZ",
  "key29": "4nhFvNE3vrd4p6v8cv8bf4g4UwFB62Rt1aug3JwCE2S9hvTZFVy5zGXnFfHZzPdVb2FrcksyszzNGCHrLfZ5YxsF",
  "key30": "5mr4nkB8o2eU6eNhqbedDSiciaLUmERKKXBRucoz3eGbRBBnx4VBJGA55qqYck236Y2bzq4rsZ3SyvztEqEUsEFB",
  "key31": "41PuXT4aacsLNUBvFu4aKfhKW1bzzYBVzMjHdoj7Wn5QsX9AvXKi9zXtEjFw71mgAFXTWf8toc9bCAMemWgwwRy9",
  "key32": "3odncXCGeJv71GQy5qEFjrvnktx6trb5FR1Y8WcQYGEWBJQazcb9jfN4K3BrQoTDvQmgFPLn96ccixQBgKrkQycG",
  "key33": "4GK3j1BPVZeEMnme2Y1Z8XzXV96rE8y3p8Vjd31C9esS5K4UfykXSES4jiYiSjieY3W3mHtFrCErRJ1MSGt9hebV",
  "key34": "3MKJ1sbXvezS96EgVj4sT7ieaS7dhxCkDCyCzgtw1tMNdWhaVWnUKarHX31UmuXzPfHMF6oKdRu4C4BvL7qeVpDq",
  "key35": "3EWWH4myYFXECyh9YpQCq9Gz55u78hCWLF5xD5phRjLQbMBiH581J53NLKsvRNXuHeNZZEXCoJzMXWUCgQ5mTbms",
  "key36": "2fJXjxSTNbEpoAthdzkpABwEd97dHofPUYPpwSmoLhPMYYmQXL1UstzkgthH8GdX61W6tQ3Vn2BPZu7f9Doaocaj",
  "key37": "2n6KApeG1RLykedjo4kKgbB5FLWRcKtSgULDfPUPTZgr2ukaPnmct8TbX3YqSybz8XtZZWFkZhRAc5Gyoxd3d4Db",
  "key38": "51spsU1hG6JvrvSkHTKa8kMoQZ9rbFoHjNdPbMKy4PiLpD3bcJPk6w6Ra9qdS9bxj899qn8JP2J3iSve1PE9yotU",
  "key39": "rdsSSMUgyD6DHkRCpvQ5FN7oCeLtAqJSgC9KzCy95NgcqhfgmCnM1RCWCTUU3bC9pWgCpsSkUndxqMQ4nWRt7ZR",
  "key40": "4beDnKtbZr5hbA7QCy8tRK8SCiABiWPa8Bmw86w84CF39uSNqxhCvQrUT6JtT3CnV4oVMKkvdZFoAzhzbxGqC1VP",
  "key41": "5oroDNzwJFbFgoysBELwiBxa5viyAFXwSDraRDw9UrGZx424hngq9xnpRbsJ4WuSYDZ9TyWieC5BCLg6jPtC1soF",
  "key42": "5VSYxBUZvhkizDWiSaHS3SaX3EdJkDTR9NzwmjVNKqNfxPpuNDP4Wbz9MXyX8UVPHB2AyyLdWck8hmBEty8zepK9",
  "key43": "4bKVGYtPULYpKhwny6psBQA4c942GR2yXBSXyDLtY9Mw88Jz4hFFxZuVuajc1oCg3iFuh5nZefUhapmpBBZkMjRx",
  "key44": "tw7JhxVty8q88XmiTQYe7jyhzHogBfXuksA5EkHvTxWGxDUVmdKpAGtLTBBNBM5SsCZ3aRWeQVWshiTQyN5tHTG",
  "key45": "FBBAHddn1vwZzsv9rNBKQqTiYvHvrAr1ZvH6Xb4AmbMsaXSEx1pFUZBPprvuweGt8aXQp87CbXYbhNJqHi3TEkJ",
  "key46": "S5vMtM2pav9emxu7ztFfkUG9C1gevBVTp299tJrcxng6oPjEQxNxFW91ZAiVW6pXRjyRwoxPLs1Ez1oRCrpDy1t"
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
