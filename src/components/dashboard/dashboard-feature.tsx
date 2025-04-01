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
    "62B4MF5LgksgNvQtAwep3PV8if7Agrt4vYxT7pDSjEmAAqg1vJkQ8a1rSbtMNdHhf7eoCyo34HUjj44CfVkyB7jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3haWCbicaeyohzdFigN2icNNyCA8wQMeNSjBmBNqpLEX59Ty83AAPAZk1cSTdDFyGuYEU8NkdZqtNcof4pwFvWYi",
  "key1": "3X3aK461uoicpsCXT4vysTCq8fMjV1jjnqR24B7xMaW8aaruE22JUDrD3XUYbWtsdffs9djQMogjQCL7wPi8ZKBd",
  "key2": "4NYQFwoEuasx17LTSAM1YRZMbJKKHbYJ3GEowbAP8SCaT8ZMMHLkSf5tEKvv8VsSkeGtdTWTioJrfQMrz6wGf7xV",
  "key3": "4Wb8tjbGRAR1QMpdocMLEJSXrXdG5MEq63Ec89rujMNDv5YcXLGfqoTkcXwQiGiyyP6iY2adi4kkBRNbBqSMHoKZ",
  "key4": "2QXEPa5pWzAchZdTKJgGgGwKYGV2UMRsg3fHXquXW8oxBrpvChQndBFn7YMzBgQWas6AuAgNPNS4WSUgzbqozAkh",
  "key5": "5rW81TmCSQxQUqtiYkJtEdFgd7RNK8WVrAupVHbsMmDTfUWXh7stetCbzY5kk52ER4jmLC9tRPS2B8gsuBMhcbg7",
  "key6": "64Qz7Dw3RSdLKXGLyqeSFiJ4Cy8cEGMN2P5Ha2TCLi7eAeWgbfraFyqAqmxk9kXHcT96mqZeWhXFdE8LSGRvEXpT",
  "key7": "2PmUCH3xhUtZwGV1v47wYnhocRCcADtnufihxtuvoCDJZUN9RjofqEThb2fRyEi65UNXKK1KH5H6cGK9o54RbdwV",
  "key8": "5hYaqkXHjU5t9oFp8c7nLQJg4Q3fBRA47S7CQSrEYdpw5Z2miexiwr6Ki3Xwj6D2jSCVdyTmyJBhbEb17NRHRf41",
  "key9": "4j1aZN22XXUWSFJker9hhwbpZ3XypYTSTgwnA1jNSwkYJ3uG6vXTTF3TWMmDkvAR4d4QBUbAoDMcUuXaxfuPBMCt",
  "key10": "5vcwkPG8xdaHFejgxB6HDT2wMp5syAVULix8MppN3q8EGLa87BwZo4tGBiHvTfiwTBV5njirvzf1mR6xC2mkTnp6",
  "key11": "31wEt3VPWVB7Eq8f9q3XeaPxC8KzTMtsVjuG33nxJdyxyvAmD2X2d1x5K2wzk2wJnNM2JxzZTSCBgLvUFvHgpJfF",
  "key12": "3b1fkUKdCDCycQgvTUCX83TBB8wR6jhZ9DFeVjQTTqJuXG4LtTX7MpVeyAd4TD87seX1rpP6pqC3XNraJa9jdtbE",
  "key13": "2oHQ9nGbJp5WJZ5Vzr2dGBtXcHL9VYXrVPMhHJZEa32Dg28p5Tm5BtHHpiL9kJ14jffsgHFXLwqw6zDJ1cmjBZMT",
  "key14": "2fDuKb9hoKZtCC4AyejvFVUNSPQ8mUK29zB6kQLTQq8npV55PRG1Z62K9yv394N3Ahvvn2yJxP5tu3oLNtuLDH82",
  "key15": "3JYCduE75SSazsCSJz9by626xPJY9Boq8uh7SVKeZi6hADVRAkzy43mz2bdogVjpdNe8qMiDztFuqeYJ8hfxQMZt",
  "key16": "5r5eiPwUR1ipAuWVzm94fpXo7KJKQuoJzSvsHae43kVhgb7AjeUEaNbcv1kryY3mmQWYM4uXmLtyehDcTa3CRpw3",
  "key17": "UkjG1qmkycBoJk7M847UVgumSXRZRAevRiXJpDYzvDSgkmd4hXULd8nyW6Ybs6Fu2E2ouoYopnjXqboNoGE9MUT",
  "key18": "36L7EXGpDDDVR44CrtD6cbhtTmFfZRUmZSwcwh2MCJeVBLYUWwDkgBfwLTPTwTijH5nar2AZcDGrd8JYGeRnFrqk",
  "key19": "3Vzt8bfoQrZUUdZKhXcP7rKKVQ9jGemUxVTWasq4AS4kQ5E4REBGwzD9FtR7yF1DrDNaocceTohgugMQoFwV9uHE",
  "key20": "4nwsVokvjA112HpbhNfmaddUCdiCnBebJemHz1j7Rb6HpdDdMxCcpjTEsC7XcMzFekwsa2w5cnQJ9dxy29D3ubF4",
  "key21": "FHn7wgoxzqXVPPLvJxtbh1VqmbY7SBiAzMN9ku6Zb9ZFzphQon6y3bd5RQGxYacugAUPdCJXZDx99h6wn3ahtMy",
  "key22": "5bhBBgMXgVCy1y6k4BEVWgX4zDyN8KsaB9rpCdJN7k42Q7UjnZxdXk2T2kUzSeKUpYgUZXFuRhJ2XZ9TzYFzeQ7e",
  "key23": "3XjxRLmdXWbC69FqBG5jt3on2z4SutbqTBHrUfQZ3i4ZqXAnbJjSfMdug23KMyFrqJBdXU8efEyHWCnw1cnVjUPc",
  "key24": "35oJMWhD9uXmsK2bYSq8cbA6MtuPAWp7eStXV4bnQW8eydr1CQYc7mYn2wfVetAczpnHR15nKUzSnVVnmYs7nsQX",
  "key25": "3Cnma2jXa1TMimMaLxSPfQSqALrrD1MpQxVR1jbsJihcWdr9Dz2EKScAQ1Gc46jraeJntqMDTKJckM7MvCRkT1gG",
  "key26": "5AseFALCZaoywRBnBqCmvSWRo8RiggWtfAk2t1t2Haw7FpJYSwa8Vft3PkCNtT1XMxLkss96BA1HEr7K9BXgZr4E",
  "key27": "2V4G3KS3p3U2qs7L9hssgB2ge1uEVVMdAvaEvrxTyMom3V98vYn1PZRnkfwyusLvdvapwkVH1yweqCLjdrGhQ83V",
  "key28": "3AKjPTFrQuCg5AqccmqZFp4VxrAuriRggDiP7owSTY18cBAgZjKFQeHeWmU5NwxZwM6PDqbamXTdqf88TrW61XcM",
  "key29": "4tMzqt4xbVLtWdJaruWci7qfjmqpCi28reJSdVCeETa26qiNAh5Y2A6mJrxPw9GRbofWeXTDzvXVmBpD9gkfAkFe",
  "key30": "5aSSpiSzfshz8ANVKe5gayTfWPinLAebHh5PCsjZwQXGxHbhy4XSAcL8Dtg28acEjPqJjmv7fr2686NKPGeczmX5",
  "key31": "UgRs5UGwY3iiaZUpHDSDdoHXgYwmcv3HZp5L8jc7nrKhAGVnQvV9dPVLjEDUKukrvnTvjEVqMvhXReDCDzev3Zf",
  "key32": "2xKt3SAacYJ3annsW8vFQtuBNv55hk3UxLvwR2aJ3CEc66kYBERK8KEptjiQYeCbgrqGK3Cstm5ePHfyZ3mWdQov",
  "key33": "2d8oGkiccmppErJvwsZNkXuskeFnj7tGfP8e1QQRbunrsrWoybkrubv1CQiDpic5DowxraZ2eFyJyZJ9ckzCNZSW",
  "key34": "4makeey8FjTXgv8VZMVQR384KoP3gQ9gkZ8N9edM1t9rZgneGgbnq18ysv2BPEV2H4eQBozZUNF745YbRBDP4TxQ",
  "key35": "5RApuoSSv9L9UwwGoNtu6nVCgxmoYiZRbx8cc6QfAzM74kaqTjdbF4TuyYuqDZ67bE1HSEqJ5NHHtyzJsCzWYy31",
  "key36": "2uaCiuMVnYytatdjzWzV3axWgxXJjbM8r3YksfcZiHv9hhMqG9PbrUMJHUyP6b6u1qN8j2xRsyawWo9iD1Wmsu9g",
  "key37": "4gmuHgd8KMhXNVczBhfymd2ujgxjXFBawJ4RrckAsEboAdQec3P98Wcnj4DtxhneKVs1GFfyWMdnnUEEJd5HcYqj",
  "key38": "hkqLrFEy1NvUeuDgDKZpcCfyLbpZ7tmSqQS1Fx5wQcUy5NmtA8j1HFZMDESJsXjGSZtRxY1PzcdtDNaHGub5ArP",
  "key39": "3kZ88T6A8oJjk5r1wmbAJDhzFBrrp6UL8PkRqSNAiMLZjyVcSt6JGiy6g3PPLj7bK299kWrWnArb1yUqT2PnVJgY",
  "key40": "efMoZMWVRgm9CmCRwZzg5vh5FaKhaKuJETxTzXnMfDDEky73mh2uTYozuCjsQBcbqJL1DdWuXHgMnmyJGocXWpV",
  "key41": "48PT6es16RCDCRYoWDNPxD3Xcs8q7FYzHnqnrc9GWtd3HTwSTKNEa9h8dcs2JgQMBrLhAHEn2acSWCawbFHdnwfD",
  "key42": "5iZiTd33GWRgawxPyHQyyasCzudMoZQv5tRv9GYyQfVa6bhKUJGHdzfevTjaL5MZ88arFnvez5c6YuFmLxnXk2Pt",
  "key43": "4uFsc6ApKBVZaUwiekFCjTJGKxdv4hHsd4wGkFWroAKm6rtad2TVkQ6RgXRG2C5eEbue7vtq5DsRUUcSypXEzTGb",
  "key44": "2ytzc6SYw29Rj6ozTdLRmWFTrANLiLUskMy4stBpX2jELNjJQidfY61jidrxgwa2imf2BQfkMqnTzMG7GH3kWovA",
  "key45": "2wZGaAWdr9yQeV2ZL3ue8hnXzdzhLmBqSnc9javV58rvj2d5mPppk39dnQPgtrGFkZctkBZYYcA4HMGJRDt6CA17",
  "key46": "3oW3LG1SAAXugitbAyW2UgC2Nzjf8w2CaUpsjvHWzQeifGi3Dfbsum2tDkFXQvdFhssogm9Yk7Yuuiuymr7ic4No",
  "key47": "3ajEA5jVD7VJpfeLUKUWjg3be6ceLy7HEdvj4WhV6yu4DsBNGZp8WnogAinj8SxUQyx7bBge6oiyBG8B6jhZ5PwD",
  "key48": "LUKihs4V6iq8gSRCpGau7dRnUUDDkci7K2f8YeoLu3FG8YnQekaGZvx9aAo6Ezbtk1Je2zSLyzbqwQLQXHRyEWZ"
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
