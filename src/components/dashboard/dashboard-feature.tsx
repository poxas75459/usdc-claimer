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
    "4GnF1fo3peAzxzaq7J2sCy3fZjXLcee6ozbBWZ7cRqYfqnkWEk5sZ77a4LYbjxGsGnqofa4cCo1cH5hXpsCNRtcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEw4eQWJyRSnyPDKn4x754qbvFX8zSEh5TMiSxkK8iLWQY81zx4jpN8Zkrt18iTq1QPhjgqSq21PQgDgqRhkPtM",
  "key1": "2cvUDLkhxurcWugvMtgVb9XnqUQFECZjmVpCMREZoWNJoiebRpC7mvxAHEBah9C7UKkkF6qAYsd3nvcqCFxRXvfL",
  "key2": "kCBbt4HwutqFMbrbaPRaHrDxfmwh4Zbmdk9e4ik9meSrJxvCkGQoLhvTBDrAPhRSaLyw56YgHcnXAxtRzCJrftr",
  "key3": "62qquuAYZboQ9C54h3AbaYXzeYWLL7kgQsK7vwbHs1DEwH36jr6TjXYreDE5sk5bptxQLwdwPpSZKbgAUmCebMCV",
  "key4": "4euUgj8sN31d2nrP6LkfeA1LcDQ8qHx4XC4pAn5CewB1bQ9Bpwy2Pj6hMrtSDWoM7CgLy4XFPnizR9b4chLQN3pf",
  "key5": "j8tCpexutrgKkXNXCRn8jmLNbbgeWGykNY6QW983E96gN2gg8MdtEoKWEHxsvJPCvWp5YR1AaTBjHA9bgBuHSYV",
  "key6": "zWW3t6BSvh2qXxpKc6Qe4Z3jRXp8AwSbKMenyrCfojZHvSrtM4SWizj4u4zdAssY8Pb3ntcPXEkSEJuyxsFFNtD",
  "key7": "589xKjSwMK4mZnDa6YxNZ31Qrq3U1524uHcNET55guxLXLsJi9feyd9hDKAkXsjmdnLrAx1YS7k7ebh6eJLYCotP",
  "key8": "37VsMzLztamaNrasd4D3tLduDJJ2TTKC8KGL8qJqdmpaXbwjim1dxVdFy5SxUPZLxo6oyebS5Ntozfp3rutVyFvF",
  "key9": "3oYBSyUYsuk9dXZspj2uARFKB5TH1NNBYjUDguWEZ1SXzxCnQ1QCLDCtgqvJuToE4dAnfWRZH1iyvU4jJCqxtXje",
  "key10": "5NbMGnwmByke8GhVuhKboFmiVs3LZcKCoP6VUycZ5PDE4rC1RJdocu6Zh837x38abqTzjKNa83q9zqXyYLfyseUC",
  "key11": "2jjBiGynY558DkqJCUAhoUaeXGG3QMRFvcRZBna6YrBjYNrtdyTMXChvMwLDsjzUFVmjZsCCew9yVXecwu2WoTHK",
  "key12": "Vja5hzzvrTqhH72zwTwyd9ecM4AT6nVx3nXSAJbTm8WZ1vKxfQ2aEeSqpE4jB2TuqL1Fwk4s1htbXDtgRB3uD8k",
  "key13": "24nZXxoraZs52ZjGxHDNRzQHud5J3xKwGAV6sGfvr6GF1vho7sWqHfpxmrEpFcfMzhB1Y7jYiFg54Dz83BAzSAh3",
  "key14": "2VHJG2MNhQHPwjkVQupCmszb3oHG8ecP3NKZ2V6BbwJwDr5h82GG9jVfP1NfdVc9J5CPTzf4iJJe7bf157fv3rxi",
  "key15": "4XrK3PYfXcafPDSmLPtKSXxzaoCZq9pXzJxhn3JTwh5EZeSkZKRvQe3VeoGYivGJsjL7FZMKP4T7NRywYRgVDgVt",
  "key16": "zu9HBSioJXNKGP1JMJk7AfD8XwfVG8zFApT99XAMCyswkzJQG7WwxwhXBCdvFRCp7n381aMQUgo3s5xcVELKWcv",
  "key17": "4kv1FWTJnsYTd9FbHnU6ZU8nC5vbcPxW7khnZwJqmGi5fTttzGQmiHFDB2uegE2fWx7AWX9fEpGXNEhdAjko5PhK",
  "key18": "WWJ2yTHYeDAp7ESTZC5EdVHeWtFmYoakfXQSr3o6vwenbkdhH8UEAbRfaQjVoT7423u7NeS2z3KGUiR9dyniG3h",
  "key19": "3QoAKTGdmT3aFDrufq54Szc3C4ZWeYY3h2QviexRUhAdtuHmbdXwoKSaThfep2wCNis1eemBF46bytK6xxD8cdwJ",
  "key20": "5uAGABhyEhvw5ZkXktbUBxeuMF5CU5f3x5qBVK8FNve3nGUHJpFMxWJguNTsHn4cPMNnFNE3vM8SrVrsCNbTW6m3",
  "key21": "3W4xWpWZtpYpXSpxVADzL5zBxn8YPRfkEuKYHVXXiFo1jK969zDHjkAn7Pce2kjX2eKXNh3E8AGjygnjYA6gdEBU",
  "key22": "55mGH6Qgn3wPK58iahcV6xkALUUejLrktyKUWjymif4zWx5NjHqNAkDFiXHZ7RSQ8iSk17Nutqq4nNSH3Ujk6HYs",
  "key23": "5s17fWakKrodyGFS8wGomkQQ8K6TGPue93EiUwYk9Nywig8A4wtnTP4MkJJu9m8uiyU42pBwKwmemFkakZZybn4d",
  "key24": "64FEc5riK3MXd3ecXJAjggHWvjmeTgLHtUABu79f7aUo1CRJZ8xM3Evg2sQjGhBYZRfxfbRHKgox7BE2waZHcLwp",
  "key25": "4gLZkG5ktW3bjkhGsi7fFQuGDm2Dp9P5nUyHBBoPdNUL4w2s9bq4fduLzZCFZsKTaMXsuMgLZmaxxWVZKr5nWfta",
  "key26": "2epu3q2e6H23V6Zxh89dq58YN6ETR6haeRvwZtThV7SUmVrQ9TiuEHuK5ePUoj3Yesmt8s8XdqmBeJiD1CRcERdF",
  "key27": "2uCo4otszz5vU2ymAgYKcPDSu9n1SWK4EQgSc7n45J9HgHdxQBHDXMchbrHSxMRWz8Nexf8PGxjRd3bApHXYL2MP",
  "key28": "BPbRa2ebSJWWas63wja4QF4DmgjWAJEGjSGU9HmMun7ucqwCeAXgGQ1UtKgBzSuwRsVm51AZdTUsd3K3gFjfA7K",
  "key29": "5a9sLuxsN5yrTTqJPnzzVfzmE4DDzycf6gwQB3WR1tyMT2w9XpEykV7dyMMfJBGZ6Pc4rYPddJ7o2fRidHkfCiKX",
  "key30": "4QzuD3RqCx8ZBYpneUnohHzBwPvf3f698opqK6BFV5pATM2wA1t7kGnHEwGEHL52mSWFCxjs4hJgAjbtQdga6Rn7",
  "key31": "4Sa4Rc2JVqqxmv5pSzjU8VrZjBoikBb1qWGL2UpJ13ehwkU1dhBDLEa8UEniyFyT7nKEkqaK1The4GYNhJKP9u2h",
  "key32": "25qvD4c25toMiDM1kuXSUX48cKQV1hyqhzJj9crzHURm1UA11TFesP4AsAqcDGHAUFVej9hhjkei639Q2hQbLZWz",
  "key33": "59iwbxo5yzq3zpLLH7N4jLRqMU2fM4tTRUm8aDyZnqrVLdLFDqeCQPvC2ERaHLjSAK797wkcpMX7VKyu58fJfWxt",
  "key34": "5zrA98YSoxjZRj5CKd8Xatz5cEEsHooqAUh2E97k3N62HXMidsMqmj9MugkT713gwq6WtccBLGtbhBqMvpyN9UoU",
  "key35": "qSjKKyPnik1NDCZt77rdQiCw3raDv9oabw3dty9Uqs9VHnUPwQSHPr45yBnKU78kAFCsbvUNWhtCActshnKDZuY",
  "key36": "2fxuab5cH8T5Fcwja3QCbnW4vvJgrLhiNQPH3kE8QwXqrRTVgd5ZAstnWPFvujDRLKm2HVkFN9Dza6JW1wFZbhUK",
  "key37": "43M1DtHC1yZmLGPfd4U5kWxwuuB5XoM5w9GTgYZXNbSVv6tHpjQ7DvYgjXB8MCccGWDRnwBb9dJ52p1V7BwPpZn8",
  "key38": "2N4Sezz52Z7uRnqnp5YHXkSFKnp9iozzgguHTgh78yLwAmuoqNQfhQ1KMS3c3fc6uaCVa6Dx3ACWiPsfCaPuXrMH",
  "key39": "49eqTxCKAnpZwjttVqCWiwLi4Z9XGAKov3vYUM9v42qNFytA39vgWPyNkfBrrbEoHcw6hBM9hFDdTVjvojTHrC2r",
  "key40": "rnZ2aasrbjFRbd3PwXnDy6gyRxzSJcjCJJagzdm7W2eFcKTcqhbGxgksxaGRVpaDnRsn99Gj8kNXCAEFpuxXGCk"
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
