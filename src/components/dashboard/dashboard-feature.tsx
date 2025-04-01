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
    "Gdvdsv1bSRPQ5BktZywJyPn1MHvMEKviAgofgSnjgyzMPMepBxUJc4dX6ZxKycbv3TYiGw8AF4YKC3jyavFPqmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oRmC8rNwvWNJu1dpnBZN1QtMGwcM54wLGSFK3o7ZQ4CJQFTwfMM1rvA8SWbQV3esMEyrALHGcQ7PnagViNwHJJL",
  "key1": "2eQrWgGEdeXkon1kjN4EiBCTRfZgKuWpcR75dvyKFy9JbAoTBcrXDacasZybSTsSLZANynnTycd5YNgcPguedUXk",
  "key2": "2P6nWKr5L24CMjUQvaqbScf1MmsCaCvvmtvuCNHrmQcYW7WdVaY5u4wWXe2HQT84JKJsLtjUyxWWt73dyU2RpYhG",
  "key3": "2fnDGZC2YhgoCLdEcKTG6o8JvNQ8Lo1LCtBywUt1tSeT5Ef8aHdoX6ukVKtgxorsfkvbfWXCk8LkbaXQURSwy9aT",
  "key4": "jScNdFtrXomvPtoxjV4NxgXxTkcyEDQiqgfqGSFJECv192c24AuMV2Rng5dMM2RUtevzQUXnAZVNtoxQyeLKHf5",
  "key5": "5SPekwkAew9WSLVgjdQfHufmJFp81qAXavFd6iRdCwZuGfibkzbVV1yJXSiXsWLSpGeJnLtZZFX3bBuafY9UZjNh",
  "key6": "3vfDZsZmY7q5u8eWtkGgD6QeHBSmbqxwwLzQdw9Jngk17wYVRrzCLqDBdgCQ2BpekjVJ3oGU2n9d1FEPALcdbpd1",
  "key7": "JMR2WoQY4uoysafrZgBANHSnHUDtbiPkd6zg7CvBziu22f13Epvz5gAWMdGedo1KZaGbRCnVJKuydTYR6oGh7us",
  "key8": "2PTpBEf6PXtYstssJ6PRT19FiVm11bKTCsCAJtSNfoibiWDjFKANNLWdiPYLYeEN4dQGBJyNuyZiqPb4DmiDdmEQ",
  "key9": "2yqCuwQz2zt9z3WVWbXiHZ1rM5eK8xjayQsG1BRdyZ1qg25ftFnhQshQMpY8sSf9VWkZx47n67MoGbcN1JF6oEda",
  "key10": "23teY4viU6n7PCo8g28VAGQEA1yQgTjHyEEZCbaetdJDJEq44o8AWmJLHnEEqhdyC8ZNN5jTTWdW5ctDzNMXWyc4",
  "key11": "5mrCKDFYAPVNyfrShdgXMpHjFPsS13sayLoAHEuPgXn4FtFoLhkb3NNPE8mGbZkP6PU49u79uWnaMoGSjkfuJgf5",
  "key12": "5Uig6VRocDaU3gPeJj9mVXrAGfWAtJPw73KiAHa8BnTgTXLjfMa6rZWU1xEVjPgAf28J32kZXw2fuaJuJfcHAyHX",
  "key13": "2x9wKbzPmVNAEVE9trHNxQrQvUvJWoHtFjDsQutsk9aqiv3Emr22Uw3Mz6e91QubgHfvFq96gjwTLWGq3kwnieVN",
  "key14": "5t6Wyyn2oW7TairGzefCecFAvkkCcoLB2ZqBbJkjbPwFgfwGDnJu6vzNeDCDbCZzscVfPZ6yEgckmzLFBUkPXQkV",
  "key15": "EKTEoSoxA8HgrZTuzYqVy3PnsHTaFcRCxLj2rQZWVFnLfoxZbGD3TBd5DeQXrNGVUqdCPwiC9r7wzK7j9EdbADX",
  "key16": "3XMMfbhjjkzXKVXayLg8FHrgag1CjQVHMnY4WSRbeKehssu4R2CqXsJ4R5L15hpmFH4774HwHrTyn9Fi7QUg8BDD",
  "key17": "gzipBnnPt7wgZBWVnENiFRJ8P4wMbVgMpeFjRbA2F7T2T8FT6vgjiKUfTpszN79rWc3E3AFEX3vM7hYVvVABLCU",
  "key18": "5VyKzzV2KmnvYpyhf6Htw1EwzgPEC3u8mwszA9MJj2Gv5snCn9u7jTdTiERFzrrt4mTPHZ9zko6XKrvL2k74yFtG",
  "key19": "4L2BpNL2Snbcpq8bVR9iJ3kDstvRrB9BD6fYawUUFGYPUs36eUZsBFQkEdkAbTFf2CejBT1AQ2AajWUvhTWsLHZc",
  "key20": "4DXxdE4zvhh8k5TVhuEW4hGsCTPgjrWX1XZtpemmxHVJLgryAW5NF2GwVDLhUWCCQ6G3gEKatMW14uKDpHfSzjf6",
  "key21": "5VneJLfEStvfyrHKPjeRFjUCDsU7KXDuYyHaQQVdxNRQUPBqMWAcCB2WwxanjYK5YQku4F9kHJYDiNX8yTWTMMPd",
  "key22": "3TGgo3dUrETbhTG2QSSj58q17mumeVBG7dxG42vGJNo2ci3uiwH2qALpGLZa9byMBG3PUesMj8j2foEsepmUozZy",
  "key23": "2UuTb3Sjz89ExNGbG6S5VmmAwUQj2bn8uiVXrpqiByRerjnzaySn7LfHcA62DfktWtteMQaYyXipR3exk3bTCygy",
  "key24": "5McY5GhBsioJZfDMoydE3TpcNjs4ZXsT5pYf5nJDceqE4scewyNaJWJGvAJs1WWsxDSUALqLs7QyfAQt7UghqSMB",
  "key25": "4X1pECwDQtpcTZmwP7iU39tm1PMhRzCBgRy9hKZE3wVdn5jrjV6A6dT9B6VoGKjaGHC3XxxQKyRKDaFaTVdncVrx",
  "key26": "4a3kEmJu5Z5d5Wku4ig74R3NsyHXBEvx4GbrbJhbixrY5M3rBdfTo9UhnpFhbqDFWeWHaVUDhuzH4DN5P2sUHDou",
  "key27": "2Na7xpGSxgpkXcgKoXzBHEtyhxoSYbHn5me8gQZL4t75ew43ek3rKEnJotF2d9wf5jidAz6eikc7hJpHJ8QFkMRK",
  "key28": "PfCZViUTee4fBi1bJuMxcZUyYsnhjXUcbfVsDSmKD2vDAz4unCKiTo4E3YW7AkAbrx7r5RJqjyAzVp7kS9EhEVm",
  "key29": "v9fhFwCPwt7nUhWQbBNqkZ1uxcKAYtEHzCwTUmMkk1gBETVvj7eVKFkuPNLgWTkwViwtLYyw2f4eY6Vn6y4SHUp",
  "key30": "3kbq8FvjeVKptSPLHFv14bFz1o9Vvtj7Hjq6hKqY5Hm1QEBV9jDZLABR7vqiBbBhjLocKPf35uZBnLYqS2dyaRDv",
  "key31": "3Mq9T8U8GrAc8AaVR1ied3NzYMvBXZUdaK5HmE4cchCcKmnEXDAdu6c1xrm5HfkTjnNrH1on746uyWVwKr7Ra7YE",
  "key32": "538fcVWipFX9BP9srzi12Yo2XtympM9WqbkF4F24HwmEosyMUWuXu3XjjerzVB4rc2iV1D7VfvtiptQZbMZAiqoM",
  "key33": "3XPZbVmXbjsQepxZhSHRCzTiJedtWgs5Pn2Jyp8AmMXeyQSDBmkdtvUNJBFBZctxGMLbFBf4EZTUgaz7SCBQub42",
  "key34": "2GwKDZd3TQT8RezdUT5iGz5PNQLy7b9D39QT8qpDaUfzGJ1EdVrA8w69wiaCQ4uUzNeHgVUE87MmMWDzf9cZ7Mhk",
  "key35": "26h6HLf7QmHrVSNiZT2wzR4HzpQWy1eQCKfdxoRuVi6Vw4VRKRiusYuphzUWpuqCSZGjKq1ugbuLNbq8QCa3JLwy",
  "key36": "29NH9qV4PjgnyTi454wzEvzn3Je9BBzVmptZQGiLiWrgED1uo3ier7GX3eUG3vvBbNAXskcnQBaKMLGT6pKJR4ro",
  "key37": "5GHiXvTSfmiEz4g61XCLyrBoQ8ZRNy4qqhbMe61u861YoGAHefwP5HeV7CcxAgcVxMh2C6D6J5x57TjxYUtTnSx6",
  "key38": "4ddaSb3rd6Fmi5X7DiQKp8Shm1tEkLADoBpgagvJ8CSZbDoH2vHVbu86xgjhwUDvLKMQ93t7CVvBP3iRDfaBcHdy",
  "key39": "2kcK6Hj9gauQoTv5WMAVajDT3bZFxFVeDXvqxZexKCi4Gdx6roXfa5xpP1ajyYxfFyLp9cm3xYhwj25szyK9VmiG",
  "key40": "auzKiFsKcrHdWesrALovEw4XXQdTEdeNhyMy2EyrFczjP2NjrHQFgaTpSSVi5A4XnMEJHM2fDPpjn4Wy6EUm2Y3",
  "key41": "2XeobMMSWeoQtV528hU6EZFA2dahfujoAtLmswBoyhGEYeqqiUEhN4F8PhxVeUEuwjVsfwxkeKwm8qwFMCot11Ah",
  "key42": "461bD2yaFPmQpB1WRZ1FdcQwjQ2S63aavMPgYZaWswwVnLEEAMtweNF7w1N91c7TiwsBTVCAJK5ZGLYSpxtpuXYW",
  "key43": "5v2pciLKiEsDLpPdBKHKmYazVVNBa14y9YHKU3erFgZ6fZXLq8vdgJUCH3xpVtXU76Zo5TsPy8yy51CJn4gWBpUc",
  "key44": "2jeorvV1NbXaphykbSmXAzdmNkNq1FS5tMvMz7kwzDy7yBuPqnSofcBMhTe1YEeK5xDRYxkZ4BxZ3ZWzMTdcMw8g",
  "key45": "2snqtuX4aNpE9g5eLhBfLiQrKH48jABRVzf2EM21PYiEwEtY4p8r7okgpt2kFMXBqjofKvpAWxENveVC3MjbYcNJ",
  "key46": "XKFWCBgCJPssDTVMb6FGGpbtVDDBmvTt7j91BLLoxLkAooeA9eytjQ5sypxsV58ScyjcSwAVZizEgPFrXbPSBTa",
  "key47": "3GBEEe5eJMHGfaq7ysoS4tDakcnm9nUxP7S8MkUMkCtA8JvScZUGjp5xtbkeUvnw7Na4Na6YPTQnFhnKUxMGmNky",
  "key48": "5jFbR5UtvcEUaEGZaBdA9kUgc7W615oHJ3XMp1FRpqcPmFSSWFM2v5NUurwcPdHQ5AtytA7zqPXmewVd6w2dC7sL",
  "key49": "UHW8USgPat7XpreZVzf1hogVR1kYhwodqy5jkQHohzcGY2EWgdULgKN5pBmNTNQKGuinJiKQAJxK1pyh1d2xns8"
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
