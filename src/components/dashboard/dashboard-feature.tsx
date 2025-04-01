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
    "3hzNGd4sSdMd1qEMvPofLY6ZZJgh3d996LBpwF3V9wv2Gc7maYdVwcA95YPc9N8SxRMG45W5NJT9Me5s53apJcsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFGKjE64sxRURmGEE8chpT2jg1dT35YvLdu1UttYH3aVmRtkFDq6VrzeX1T5iCkZuFJxfZkbLWPSMFS8MaRQyCq",
  "key1": "3RTuN7aufNnQNPjTzZyVKqgGn5ov1kamGSU1oW4E3pC7NULfVL3Ft7yBRRDwVXJrJqtYhnnXNhtZGfx71L7UM7tM",
  "key2": "5TSyGn3mvdxHNV5UCqkaSgx8cNDzUoHHvdeC4N6ZGR5gkfCHTpcKpTVU1ct8uR2Paz1BQH3bYpwyjfUW6DrgNBoa",
  "key3": "34QmyM44EAv27hXDRCDj3Pm9E7LkdJpbMLga98GMP3fkERK8eWokCjdQRqowsW8KEJ5uZ8rGhBDHvHRU8Lx8cUpY",
  "key4": "4RrTzUP8cyXEMKagxx8NKLPFKeRoSxp9A7jWJS3uSQxoBZmK95KTyLY9FYt8VdS261ffKUUEY7GdHyj5V3N4GBr1",
  "key5": "5sTvkhCwuWJe7nJewgtP2BS4ZBr4MS8md37evsxATZ8wKRR9i9KGJyrCHbBU9omxY8v2eULW515uTNQKvwaWqJDQ",
  "key6": "3itLvXDs4Y1cmaXTaUDCtvBBVTWNvZtkfamXjmFxAbQSE9MsYLzGUsWhFN51Uedc9xiYkEEKtF9R5ApUEQw5Umed",
  "key7": "4d9LkrJeUwHWRExTKKd2zsYT7cqT4tmpc2Q1n411nP9qw4F9HwegNoJ9zm13b4KAb9PUaWDCDEExaQp1WHaTueCH",
  "key8": "4iJzmGL1cr3jAnbxKwaRgiXCdoWqpFEpmX6DxTR7NwzGXsmw5tWwyPigDByivL4LGqziikESdrZ2dk5iD2ogk4Cb",
  "key9": "nrvzG6SvRg6xPT2pTL2qwu4n17YenSye6SXhsZTmhfz27VZ4XaG5J78pcXvWuXo3fNrifhNUpe2UBUuT2UuTxw4",
  "key10": "3GYui7iBHZk1YKdZtPPHaQR5MrQ9Cg7PnZj5KGaLqkd86cL9VDQNJpRksTFXzzrfUZRxmfkavvS9hBDmAqXd9GFs",
  "key11": "cRt5DxDn4rEzA9mDZ6qHXbn51HztURfTCM9gyeoEpfTcTTp53Yg4Npk5Wgf8eu2t5rTDm1s2BsAs5FXjCZubtmP",
  "key12": "G8hqdDTnSRNZb2BFcpvH1gKSTRi5HfKGFkcqvNuZBs5j16dybLrie4uYWyv7v9RibYAoVjJYUSjDCdzYLkZkHWt",
  "key13": "3hvKj4VepAt1vJcD1WiK9EMkkDymBWjuUXPYsxicT8YiCcvUKVgPkfcr5co2Hu1WKFTZh7UshQZ5iLA3H8UH2wpe",
  "key14": "4FEv9mpgSd6UkAAew2L4tE7ZdGKWqch4b7mVCcMkoNTS2A5wosWNAJcK5MJQDLTFUEZ6yyPFypoy9JHXmquvbgfK",
  "key15": "LZ9yJ6FRUiBDVxjbJ1rLb5RyKVQhgZiKpU1Gs9fnmQUppoY19j8SVTx98ebXL3PeFWj535Z4niGqN35jSJHouR7",
  "key16": "4uEQFptEqvxyrQgwq2z5W4QagJkSrurWMHySBxJoHrSYMiZpMoe1hHHQwcFiamEGjGkLwTS2x2qGYANUT5tufUkr",
  "key17": "5LUuEox2EUaqMRB7VRmkmTAbNgnJowMtnRYmdKr3vDbiniMNakUb8jKoFS69Qng76VuDV1WpLB7oEkbVxDRBSVcq",
  "key18": "wy55iPW6ei4ePH64saap6NWgTJppqaLom3RXLKG5MJaUPgxeujENm2S46HnrZj2vQns5uDXSEPrFKzvjCxNoHS5",
  "key19": "57dJgSRYikBVCN7dktsXzt1MhLkUx81chMkhm3X4E1213Xxarxbs9abQ7SEG7X3YEiVLYmG48eEbctsn8mdxnvxT",
  "key20": "aU9Mf3QE47fX1x315o1JR7bUEZT6K6a4Q1S8JgzRTQ1kP6zM4Qe152kKM3hH8qtD61VQefaUpCM2aTAuCQRnCet",
  "key21": "3A5tBKgiFuXcq9NJtByU7CBXoYzCbzdC6o8CTqE43KyRr8vsM3fzAHUgssW26kejZcPSGR5FRCcvAbHwXGzcj39j",
  "key22": "3xziAqgPkfh7CQKK8TKUjqBVfBtCYB6Nk1ywqKNiJ1rPBqRi9oy7YzmGTd6ifstcBMBCmQUUuxuaDtkfohY9Kogh",
  "key23": "2csEUQS61ofeA9XqQdhaga3W3CJaX7fzGnrted5LDSLgv1gAK5qucehtfuyZvkwPSXC336HCjnozdFbvTsk4uRnu",
  "key24": "4nVF29ipWb635ohxFciji6XN8DXvC4UFCs3mBBxNAg7JJxXfdQUxwBhdzXPn4XwffSx3FT6gUt29ZejuURY53AhK",
  "key25": "2dByXvYbXtWf3ia9hEGejiuKbhuDiUmSA9PPnwpHMnBv9JuZSAEp4hareAQqr362279rqerMsoHRWbujufTWX7rz",
  "key26": "5MF5Nvqgwgn8emK16pA85jQjWj3XzF2Z6gtPLFbQoP2vsXquNNduamJsSq44MXUZVcJaXRGaVAeBCnBAsirVUVtq",
  "key27": "4YsfVRyMi2NDgN62TUfY9e48JasYiromwMp79QWY5gT6GHq3vxBzaDYaorkh1C35f12XcDhnDvW4rLybW8URY93k",
  "key28": "9WgiEiaYA67i9EPTF68DB7UbLVewkpU629ASTDSrogdCNYt2xsM7k6w2VPVZkvzwcvbocCGL9Vv4se39aMDd6Vi",
  "key29": "RTKL1pEmW14oyd1gSQ7S3qu7vgz5S6PuETU5QG3LMgFSQHvzcjee8p6HpsCb3ZHyig17nXySt59rdLogZ5cjdPH",
  "key30": "3YNt7PxkYNcjMY2XU7JxAVbDDjjXCVE8sE6f1NRriC5UdqdCEcKrDGkporvswTYRjGXhD3r8eudJ9Cf8wuZRq2Wk",
  "key31": "3tjbVASQcvBQfyPuARkn5Hwop2qYdJ8htwLxesViaAKftM4mFrJXQ7q4KBjP319vWqjq7VxK2RoJEMs5mma8WTKg",
  "key32": "23YqDsNHdEShC3MDoXwqGqcRPh71M2HkV9eS7XG6p9pQkd64UXosLWMn2Fz2sk1AqmAxYopDzqeAanvS2dDKpqxe",
  "key33": "3iHLeNFKNopRNLR8GZ84x9fobNtNXA1aLEPBsPxTkTcSxD3VUfjKWu3bnAfpMVqx9FXxLJDcwnmdK8bhS8Cg82Gd",
  "key34": "22wgiPqS1bBnvXYaTR7MT9wK5AzrfdFAVMKhwKx33HxA6JzPP6fWNnrCJVMS4ijYKXoMgSAjSv4r5T5sYhsZ4242",
  "key35": "R4H4e4fGTUquyUKqmaqX1yKw2epLU4JzkPf2X6e8pxrRLo5A4AzE5Nqh1mRf6X9suUDBTVjWPYNhCXpTKvSmfoD",
  "key36": "2X5Vs8vNPbTKyuRshufhT83mseh6byNCnNjDfFEd2RcKGAsQcM6bgnQc9opE6Tmewfjqx7yAkVHLJ1ngoWsw2pA3",
  "key37": "3tRmkseDSnfe4vBh8sDG71Dmtx2zgGQxE3W2r1fXLHnTDBdJrkBRCKL8KUC88fxfvp7cDeQQ5Mfdnj9CJoWJ7Kfe",
  "key38": "5rHa6tBeY6Vz6VjssJR2d9ikr1Yi9DE28MikKgziF2uBnD6R5SzYTpq9WHRB8jDVT8aY8dFfyjCTwdEUMpLVWKeg",
  "key39": "5KL3vo45xsNUp87tGt66hxfpT8A3VXCgGbQ5AYQmDwW7zAXP9Ko8hXojxXKQwAeLc5WWyVvZCpiY1Ch7ARtUFQao",
  "key40": "2uaBnxZbQUwZu2rrxCwmht2HjkTiEpYE6Y5XBpY1BgRmcR9uxgGW6Cf1mcqcYK4ZgWUf8ppuBMsS6hHBrDGssHeG",
  "key41": "4KJHz3ukxh5MjNwo7EtGihFkNRBCav5ght64XR8WWzfNKHjZ9Vwy1cs9iW6WLZ4E4uGVRuLLtyRPrQHk6SHCmyPn",
  "key42": "2i1dDTjwt4tfAXN4WRxx2jh78gBo1JvjUPDz3VDYS9T2BBMJKzAxxE7sSrhjVQ1gGVRnyQF6r5DN6cJhtyQaaoLj",
  "key43": "2ZY5Ge4jXtEGg9soG4V7J64T88MphMoC5uj9t9F6LQqBUV1R3tgRjadegktAkbJEMBzKqFANh6Yib3tD9rwynFu8",
  "key44": "5UQpFnHQTNy8nEiouvprhY1gL487dV4EDW1tqyxotSAmysaHRiqJuy9JppCi8Z5DjVVXXCgXGnQJSvFmwfP2jP2t",
  "key45": "56A9oSa9SzUgdYNiN89gLgrsuwfc5Y84NmFQbyWWwsTx3JsmwSXqNyDGCp7aCSeUiThsQpaFxTk7AvvSqNWTLwzm",
  "key46": "4TbmXf89TWVyyB3ExKS6vH8uysbChFnksoYMPw2kEkCdZNuFdv1B1Hu7pAsyJpuUJm86rYqjJKey812SbyH7s7Ry"
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
