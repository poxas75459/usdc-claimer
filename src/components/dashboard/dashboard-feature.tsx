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
    "5fkTZRNgvwKkEC8hjLEerHuE4f9xm2tkWaPHNv21NTheKooEsExWBMRruEUFTM8vrscfvjmoZAh3mfC9N2eKfcHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajTzmU94vDRmJequAdYt3o41ZT71C7qC7hn7vpQdqmejckXzN1tEFy6RgT57RzgbGyxhEEnUQGWobcb1eKHGn1u",
  "key1": "4Vi99aSfWnR2UsiNaw31cHk2yhD6bDGcH6D9hyVSJxAcsxNEgSV7LKKm6nEc7fsFMDSd1E5FLf6iRGqTMaY2SmQn",
  "key2": "uZ8rDL6E2DWgB1pgPgTmqvALomRG7gdMarMNn8brBKGTEaTWp36zPDAShshSBwWd8Ves5ZA33nRZ8hB3jT12D6e",
  "key3": "wsDMvn7fXdL4nxeevjMmF3qLhwWmo5dFrAZqZwpwzGnV9MjHe9TaBEWewzLjxDxaHCydhH43nQgAbu5xiZbYXH2",
  "key4": "2H7SnmB4azFWZpBQQpQ7f8L8GxmcR5CgSug8V3hxFMHA6jxRLDUSfAtnNoAPUnNRzDCKgdevd2iDDD16ee625atk",
  "key5": "Gt4tJh3o1SRwqwoSpsak4v9anmuuW6Rv3ywM1j1WeNz5DWQQhixR1jMkG2i3xm1BagmTgGhr4LMt1aqgCzegRAm",
  "key6": "WMaeZBLGtHgTYGtvQW5v5h7eq8NC6Y2ZuSV8y9FCQUfMWeZzius3TZBcxrNSVUefJZR18Fpo9GMGb9Tm3HyrZhb",
  "key7": "2yE7UxNx4adpPr42THr7ReSd8ADSias1BqkibbrovbS7wWCMX6NZ4LQj26PmksWYtCS3Vj42hLw7zLYZ7NFtwKxs",
  "key8": "2LxNfyk4r9PBoCZ9VkfWPRdkiAwf9WL2G9mz6aN4RB3wqs1YmzoBwAGb3Mx8uUvBwqbM9xQzHi8bXUq7bsR66Sxv",
  "key9": "268L7JkqzUCY1Rrbf1aQKSKXX3ZzaH1PUcsMcMZQzyLiC1vjjxFkRjLjUtiSuS4Hp6cp2rpd15SvZH4xje27wvWz",
  "key10": "NkMrdmyxiLQL7sDRgM7sZmVkcWgSvceq9Pq3xJEqpUcS4BgSArghwKtm6ZU6aWXMrRWqQXuLzNnqWChqe3hVAzr",
  "key11": "2hCyLUE6qfFLaT49FtTdWxbZaTmAfzJF2j2z7daKqLru1aZ5LmarPj1mftemfPVUXPmG2x2QQCMkXtQuZSrsiMTM",
  "key12": "4QheKmks5umnd5AMXSx6LBZTa6n81uxDqSRi69kXxJt2DFESKx5EsZ8BdkqCHyCjQn5LgqtPVrbZHDLGkrxYYB9F",
  "key13": "2d7TL7oKcACUoj3Y7ELQKHyBN8rYxLcM96uZj5rQcEnRWYLvsRAVCuibTNNNhtZ17VHHDX2CBSe7zTdc8masySEe",
  "key14": "1mSBUB9DC7Au2SNMUcCqZF8VfgNXMTyXXmeT26Tke2wPSwmxxsFGZvmF4b4dsSPEPQ4xaAiTQSJF7RJnmXdA4xC",
  "key15": "3rfT99JWAUckTAnnCQi2h4pd2kvEVLwZ6BXz4GNBrA1HBUHj4Gfc5jvBpp6qWCus1eCm4ksjnDEnCcgDtW3KxyKF",
  "key16": "qTcpRo9yGnZFy6ymbFVPkMU1SM34iKhqJRQB9Mbs5z9PY7Wa9CxyR4igemXEr1xhfwxVQiWhhG7HM18gAY23pgy",
  "key17": "65Egjjs9pJ5RyeWqhqPHyQH4jxRXe1LZGrDxtGPPt8jcJP18KTUyX2fbdhdgzJSm2ixpW6bEbPCj9m44TMhAQWdH",
  "key18": "aVG3wmzzoJGsj2CKFFhmr2rNBDhSrxNjutZgasuW7RCu6mrFaZx77cA6DL992yUWKqAjhT19TEQVcSdiiwYf4rr",
  "key19": "68JhJn5Vn7QgZwBNXnagD5ovauHGqqzLJrPwZSZofCXnVc58PmdkbSWtRoLT3dtANYd7ScRp2Un8Brr8Djj4ooQ",
  "key20": "4r7m4xDyXPv5XVmTTYftwZmZ3ZUhKHdCGSovqtCALZiG8ZN6q4WY3LgzVdKvdoLUEoRz3m7HJ8XY7VaEnKU3Xod7",
  "key21": "5bfSAZ4f3isE9VPhYqwPGLr9iSF1KSrYHiweRbgACpr2vrnKTQ5eqocb182Tx7qpue5kwBputr1L3uhXZ1Pbc5sR",
  "key22": "5jGMezGGBvyoDEMsXJSRoqMEmazHRj1ia3bRco98EJ23BHXNL5fa6wtJqYzHpnWrocnqxMKU9z7KXmvMY1yiC5rt",
  "key23": "3BdtLv2VmD8R5ixGtWPDj2aeG4pTZDcWtEWdkK37DA91KqFXE5yqLrumck6HoJQ1kPuwzGv8A4ecLaLChbe7v4qn",
  "key24": "2MQhjFqkWpocsaeCQYWPr52sCvvRBAP238SArFoZxvY8rZuitGmyv4YW3TnFAX1bdB1RYVyZbLf7wm7SSUdsGmsa",
  "key25": "2QeeFFfxjjHb5ZFAuxqVf6ipF5w4B3DFGW74hdxQeKpkWhCvd2D6GjBofWHuvaqYxETHrPzZBUKaJDssCLR8TaVX"
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
