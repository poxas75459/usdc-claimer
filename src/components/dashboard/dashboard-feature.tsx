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
    "2GAMbj5633QYAhyzoNUZWfFEMXhPZnoN8sZVW9inYiiJTAahHVk8WrbEtNPv3AfwzHRD2mFkWSDBuLKZkig4hVu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rL58aToa3RfKS77kxq93yDoMT9iCfvQykYmn3qXdkrL26iMK68WqcFV9CtNf5Ueurb3xSbdfhWC4BZ1GXHkAR3h",
  "key1": "3gEbFZzYMk6qpLgfzfwD9WfaJEhAmqztHJiX6XX3dAgvVN2g6Rj2rdAcWhWBG5xvRgP8ngTp9gCRNZYiJfaA3MiZ",
  "key2": "4eRK4XSKQwgnT8VZAG6ACrc9UdT51CNX9HBmgZ6CU5FPJMQ1Cx5sfCowj9ctUk56hj1gRVKUv2sBmXHEBPYAb4Ye",
  "key3": "4SeELy9rxyWx3MctrsK64NJhH3V3cfocnzvs7C2meMNaWMypepKCfFuTXJ7QJo6ezQgTgjLopZT4ZNHdQqkAenVD",
  "key4": "42WBTwJLgZvxCspsErzy9CgMJYRHH3B72BFBkAmpqrV1w4NidnYsm6GU57pwdyuUUxpKTLb5NahBzaxEgBGqCczS",
  "key5": "2CezcUrxLcP4jos8K1hEDmhi4K7ZKhPxkEr7hQW29axSFFrD6jQnzzWQapq7MEXexqjHKny6huNyqrtY7Wvjf7YA",
  "key6": "3JPNe99tPozPZ9LMmSVU7fLMxrnFB9kpYxEyzbqGfxjdagnJiBhLq55jKbCexmt8b81EboCG2ZTVnoNKAyryfESG",
  "key7": "3yPNFA45PvBCwRGvviyfsCbgZqM6rJuZR8yhGJDksbuNC2dHN2SH9Zad8tmsohBY1RqW26JBYPYJgq2iMMuF7N39",
  "key8": "25T4GdDbVPzDugyw8ESpasJAYjHngwaoCFWG82n2fePKxRTrpivHAFavER1uLeAG7jDafLT9iZfEKbvyGZjX4ixu",
  "key9": "5KYx9Lsw2YgcyfxrjLTAJYV2zkrcpxinHbYAFZC1CTe8S6UHhrjHvXbeMnFWJZjynSagBCBkatQiYA1amL4GfY3t",
  "key10": "56dvG8NKDKLikdB2gouswPBuD6Y1pL7pWx7LAKSEh5CHdtGnVdqZjZzoMQXFutzE8Dx9zYUNhd9fegkjzWAMisBX",
  "key11": "2W8QAAzrhp1Df6FSsXHosGayU4VK6DG19io21H5SNp3q43JhJLdJiRht5EgfEa1gC3EKemE3pW3zp6n4wEzmkGow",
  "key12": "3PyfkHS9Dg1x8fd84aqDtbRAjovZPVghV9GRkFLyh5h3Vhw9ggXomRqPxbwgJNPwAZBSUrUPQGG6HMyL9eAYJxkx",
  "key13": "wfXqesXHx1kTtcy68a6i8Mi3U53S5WXJWv9ScSjd7SRLevkCorKaKVT2PVXAH9dnkirq9R464qBsVPsHv8bB4kQ",
  "key14": "2bwrJJh76iAjVXh7Xbu3pnS8m2owD4AU8CPZiXmBxHto8t7NbLWHeGpiD7AF5vUZWc3PfC77h1mg9U3zUXPM1gfw",
  "key15": "4eQ2KTWHBGF4h3TTvEaDrMN7HgGkUqqrSMtsGncA6rZUK8a3mCRAN5JVkDa1oYvae1GhsH3Ax8LKbH5xm9ywxZEN",
  "key16": "2ipuiYWLqy2rdNaEKXFRLTJAvSuC9UFD41FzipNsgpMu27qdcuVdHDr4zo6T2E9D3Ccv58wdvGHQr94b4R1EZahk",
  "key17": "3zVZqqY8heLkNBPnaRZbVw71pk3sakBezR4j1dSqw1VWsvF4qmMR8nnRvozUBYCKPf9dod2a369jhXrzAhL74MVb",
  "key18": "2CbWTeq26FwfRgQHdJrzeVjq5MyD522nJMkUxTTC3zcAkFm8r6zEvomjz81QxGdrZSvtSmwGDpTQ6S1Wn3etTbAo",
  "key19": "2VGuA8R3X5doRBMVSFLWuhSFX5UX7AdTnD4oQssR6CE4keBwNi37KnSxmccLyyQ9Cg1pgsbsZwRykShsVzVuDjZg",
  "key20": "46vF2zaTqVegssNYVoqohMAToSRef2fWZ6XaGW8jr2FRbMC6vpmoJjYyoyxofwiVzZ74LfJrbGdsMJd1bgdyMj5X",
  "key21": "G35LxujomsGdnovP8SGdxLkNCoGvAyThqEWH9xci838kxggUe4oU6x5Lzxgp2Zp2oYePPvGLf5b9UQrbsjdgM8o",
  "key22": "3B69xUMdB5wTn8E6hzFJQn2LSdhQ3mWu1UhA2bDyFmULbnRjB7eup8qYYdmgKyJM2GwKNioqHexK62YsVXKPdPje",
  "key23": "5JgSSrwLBsbeNVW4vXN8itLc8FQ6YBDkh4yhLsGLNHsXPMUVQd7heqFMQczNWSMQvpM3Fvq2yHp2dTbfq3zu6UPt",
  "key24": "371e19EL3q4b1SdCYW9okjEe2MoT2jbjPmJ6d7GyaRSKF7eZPyGrqygujbCmtA5jVgzFjDAqHKTUZx2LDxJHvkAU",
  "key25": "56HHFVQ8Bbux1jK7aSLAGSmPFgESV396tGAoZQESeW7o39N9VJG8aiUPt1AteNmj8Y8Jz4CaDPcmFFA2i7mEdfTu",
  "key26": "4dbex3DL82W4XXRz3gLWVEKii5aGoHxYkxkQoJsuEgnnrTLrYPWYVhfcqATaEnBEZZWTjN9BKMkSyky7ogMZV1Jg",
  "key27": "562AtZsnxDk6Bie5FWWknvkgTDCxKfTMJt7D5JxVxe4LZt9DyJu8sfme6ipq6mwYVaTcsjdZj2a4N2vwPEUTg7M3",
  "key28": "2g226H3XaGJv5Vigw8SFJLq8RUNguaTBrvzibCoRd9G7XH5WB9pjUbFfjPYGa7YMjeTJVcxR1hpR38rm1FADvTVi",
  "key29": "5q8EEU98zJUc8BpJ9mfu1A6a9rSX7GyTELLmRgUWJC2Jj1bdLV3WmGCS8LhjAs7Pw8oV4Zgkpvr9TeLKZAfpsQ1N",
  "key30": "2gbzCEMyFyLKC8ubebz2EGh8PfyKztkK1Q38u7BZoUXc6agejKbWvT9kEL3RPXsZV4aSVR63kcnF1dDBjd6umw4q",
  "key31": "2oje6tMHKxybj98KXzYhDuSmMQATf8bXrfC8vdkUBj7MJvjrjMe6nNobrNjq1XNCaXTKvJdXMhJyCue1iruW5v13",
  "key32": "64SsWg6sRBxZgNByq1Gfv3kTnRdgc2nxa25M3BePtViEdYys59PXwqiUJQqjCuyLRhnUWcMhJneS6dNCFEo33rZu",
  "key33": "2nwEZFKpNvNnrcRBtqy8sCh6q6nU2GqfoAqEWJkB5p35qe8eLVQEtZfKhnodsNnPuFEaVZp12VM5r7atCfmkG9n2",
  "key34": "5KVRVmtgRoJUFvtaKupCKg7pwDuStK3CgyaXcL4po4XHZy812uXjLh55h39xXW2gpvCHZxH5yNmTwDLkoWMsPqC8",
  "key35": "5oMFLP8VJUBG8enHy8QYW1xCcaPnuuw5bDdM5F76pYfiMTc1G29NREqRCHGsW1j1sbYY9frA5ighcd7tRMQQY3qC",
  "key36": "2TVqDmUUZUxkqS47V3QG4gYrh6hWDyLCM9YoRXVYFKVHx7meahuwLkDLzMSEfk1NRUDYm6fb1pxfPJsSFocgrMFK",
  "key37": "2bEgQ7FXjUzoRNRqDdNe4BFyqdKECUjX9jNE8S7a3GYbRGGFoxL3cHB629qfydrpv9BgAiMRPC75dPowqzUxEGqU",
  "key38": "NeXnbfn7aTvnfe7PFpQNYbma66oAMoF55MCiCRU8Ue44wZ8djZzBb9JH4JJmsndXqnw35cX3aMxFaNW8KLFfN3U",
  "key39": "62Njc8e6PLz26mYXMcEuuVC9jsuKTzPKDYHcC6GVZSpYzxyvfYd6TLTbyVsFE1KqFjTtKAZdVrhoJvAj7ZarSYbq",
  "key40": "48UUTehJ1owrXK2P8GjH6evULo5tpQXZDTGDcUvn5iuECZqbS9Cmnq3dyxkJSHyUBf4ifLqK57rUqErRTGL6szr3",
  "key41": "4rpRcJJFxSSXzmyT4QGgzSeCkoF7v5ZGKArHCUPD5uzwDWLLQy57VuVJ7G1u12R7mpEbUAwKkcuYmsZ57k6jA6gd",
  "key42": "5SYaA6Tv5Anewn1QErd2qhCrLnRgCTEPZHxfvC5ARuihzAKmG99PwFZduibhjbqn3MiDHgVQr9mihF51XSgrZSsP",
  "key43": "4XAzKQvGY6aKVvgUzqbshkRGkEkwCzFbf9S8iETt5rTjuifJsLzY1rDSCyrpJD3gL6HSxJxE8T3zXU6vKr9r59UX",
  "key44": "5i2E8V8MtM8H63gEeCrr9subrokwWyrZW6bD7d2PL5xGz1nF5Y4drrBued4sUHBYooUgx6rmviwT63rBZwUsfRPi",
  "key45": "5sbGbSMddpcQPPuu3wjgQnkEFNuvWcZHYHjga2YuiXtLtUGiMNUD9Sg2xvmdUNkSdK3qnZ6KWztUSxPfoatbbLp1",
  "key46": "a5aStgtsj6maibWug35jQXiYKXDLqtde4WSV73TyUkZgj8G8u8W35Nipnxt5xkuy8MDEVXWBCzkpiZKjuX8uWat"
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
