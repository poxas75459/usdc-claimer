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
    "4yWd4M4XvU1UQTfJ8dF3aAkgZHUbYr9jyozuHZNceJtmpCyjsLUXy5kCunKyN439QZa5Abigxc2uUBY56cj5Ekme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRp3xWHswqN53e1xvxiXahyuhEu68CWgrym2AxdKiRHLifvUhN2h41ajgnSeYSP2MjkYSCpTNWTjB4Etpt2b1mR",
  "key1": "3Lqdan26pJk4KgYNDbSqLutd91N49EqvsTzT9XFvmz8ZtXfJrX6WtmTLijHyWQeWBTgH8nQhQ6SiNemBTaLi19k1",
  "key2": "4bWPVhWq9SbF5TX9okokYxM2J2b9ksXvJfkCGgEug3Y7N9DWtaQbenqukoQphJrPXjCwzbEHrCBWqAnvTqFfCwSZ",
  "key3": "m3DhwViJ9BGdb4uK9h8V2SAZ3vXAyKyV2VZSL5nXDnkmhdE4g8B5L4SmAd7GkRGbWNMSbMTGLZHSpF4EF9XsGLE",
  "key4": "3N574nPp6wCmtyDEVL51nWvoC37D5E7opRwTDAiTZaENVxE7DFo4LN2dRgLjvUb5y5yvaaC4W1c1FttKNYgwvMpR",
  "key5": "5nXuMiaczFmBhG4PSgh71M59iCrXLsbcw9QUJrU4wgDZ9GFqQ2zAUwLkUoc2qwQ7DjnRwTkauJaxUgfg4MubYrqx",
  "key6": "22xMBShDikKa8WrZeGuz59uhh2imXrh98U8jeguAvrVCAfj4pUGJR9vm1j71XWE4FYvFFtaDKcx6dEVumEvU6UQ6",
  "key7": "4CLQutEHuCKk8rRdM6FsNCaGkoRNGNPoaMrjHA7zDRPfUYKG3xs6gonD9WiKnmbp7jyNg1DExSqMSnJvbvsRxtKH",
  "key8": "5ghCmkcFDxEZuRPk792mrPkmyjwBnDMTs3Y3GZG34jhWDk244XW5meNUyyQFmoBCQ9hBshrKV8wkDkMPWXQSi3si",
  "key9": "3tWjZnmAF43eB1LVuKWWdvCMdUPhN2PSz8Xev6dWD2SwXduLHeiE7Zq6KzRLCXSMZwqtQHyLhMyA4RUjttb595hk",
  "key10": "T9LwWDXKLkzATRgscSNxLKNnzDodG2XmhitJFhyS1abS6PjXtkGayTT8D43kPGu7oYeUZefySkYiACo5J2GcEck",
  "key11": "TcdxZyFq2vv8Vq5QfF8citStd18jNEShYDTJRrRPPwvwKqEcwz4LST4DyVQGYYuT4HnWkBcgX7drRgVbjjGP55f",
  "key12": "5Ts1PWEZCCec1h3uxab3snpHgt3KeP2SoTiPCaLxiAdrMBA9yZvUz1QYzKEL72KFRi5awiBDwxhdUR5ThbCxUv4U",
  "key13": "2omfTnxJLfqQEEc4hp9LstQS53ihZnsKxxEVFrFmQDhNZJpveYAq5YNHvAg8ER8zvKtF7QeUJvhmG7bXp9tDLS5H",
  "key14": "2A8xeXTDFou3cJX7wKY6558VnFu7BBqbvGjhBy4qfdBZuBLz3NfGFFHGeAZTJFGUuWsfSYrSMFnN4iME6KajeM86",
  "key15": "5WRbp7hdfnd18mPBejWsEf4KbH7Bfqv1H3ERT7pGSfih5tJN67TrbdoH6JhJja6tFTbWYNnhSxNELzyCg76RFiVG",
  "key16": "4GhsCdo3Cfz2bTELLEG9aN9uc7Q5uZqgfksSkg941jZ4WhbpJLjPZNPys2F8wsF8rEvDewe7DZZoh5pCotNMAVAU",
  "key17": "aysaDjoTmHpHMRgTLrBtNT3sN9Ae6igaEeAKRa7Ubj8oZn92X6vqBSNjPjDkHZVsWxp3wnj5K51yVq19RgHyGPC",
  "key18": "3t3Hq8xynD3xzHLjexJp4d4v9Tx5Q8zWn3MNqzE5EYCtpr7UoWQ8pvxVR28dzHrZjE1Cx3XUp125dygssxheps3M",
  "key19": "4QhZBqzh4C5oCE49K7RcZNTYDtmrXxo7KUjQNmMxLCBQVAdks3WVcR235hDkB2ru4mYQpv47wvDB8RKADbGa1TG7",
  "key20": "MejGKRr8fLKTBoehpcH9ae8iV6RMa4Cj53mtVRox39NWjWkkwPwZSuhPvgRykHq3KwFK328oU1wkft8Tn5msDpe",
  "key21": "46NtgFtA4PKB8qbZ91RNjpHpwqiVE7KsSQLy2H2YHMrvaBLyJ6be14MW5GNVNg1QBCxfgGARnUQoHGS22wrS2CDT",
  "key22": "547JtHwek5e4Hk4LPNxqvYFSKNPWYKYzntEZeZHLjsUAQKoyTJQ6NDSR3xkbXhh8RS6GcQ8vQgDz5z7ecJUesVcx",
  "key23": "2JHTpT3iSxogcxsfJEKXnYLLLYm2odnyjDojB111SCwTEYtyrCkRZ8HWdn5fynCvpKmae1PNryfMvc9yMjoFFjLf",
  "key24": "22rpdiRbz7AxgmuNXMABenbgwiAe8AL29xMf8Ttr1cL2fnM6z2vHQhAubZHUUpBZ1pM6YEQpUkS28xRSy6mt1N9D",
  "key25": "5ao4YVmJiVgE7LhZmKPvqyUCuY3L7kPMNgfWm7Fzx318xHp1zTNU3mYnbnJ6gv7ZutcHJc3kEoh93B2eJZiRx7rm",
  "key26": "5mD8VQm3EbJD4aypMtx6e3Ae1syDozmpHd6o4XQNvXqpmxZgMwrUqrabqn8jVJycNqhtc87qyhnuNhbSH7ckhDSG",
  "key27": "4UhqVG3PCLYkZvFGguGJjdFYkzN9Y15oJbYC4Vpjbn5N3LnLw2JrMoUkTBB2HMRJybYWpF1rKzSptcWF6Ed23cEj",
  "key28": "42pYt5TFZMPoxUx56dndC7BWr9Qo1KKoXRSjtQCkq5wf1riY6wzFikJTLRroKN1yMDSREZxt63YVojgkef5CEicR",
  "key29": "mpz3FoYJqUeb8gEJ6uiGF5kzerjmznwxDzm3rTtfrkd2xXoQ5bjmYe9R9bdhxjdQSzxpjLo45KuBExZVWrAGbji",
  "key30": "62tZV9xDztbD8ZxWeApb5bWRQ7MN4hGvV4fpSLoW2Qr5QKCgne4e3bnK5uPw913V1U9SSvRaEKrUxhp3MyjQnLGP",
  "key31": "65fYPNdhfAsXFmGEL4bvme9nQDdnVVTTRSe66f1wQE24CvXNCU9vs2TAJQguBcPGjqLCn5PCCi4STPva5igkoMAz",
  "key32": "5yTXNwT1GsRa6N84sX5Y7voshFFhqF2mzxNoyr6MCuhw6v9Bf9aACXhz1PWGnUrCRPWfBxMrzU5aNLQXra2Bja9N",
  "key33": "54D9nZZ3qLS8hyHWenxWuWuoVN9LnyWhWSSqw8qrFnWKosUiBJqjX5B1JUWy7WsrcF7Rk8YSdmm1TX26VR1PFWc3",
  "key34": "58K9BdcohFPRTTYJMJbEqY5xUjT4tVpchwjpbx6ZfCixRikFFfPmSMoioRSLY6T2dfJwYqM49X2zsRYLK9oVE7QH",
  "key35": "2Vgq8dXF6rJYUNRDFnz37pBAF96Bk8U9tRZwgPdMcrdvMUySkQTrzbGNE49bwBaYgSocZngDr2rN31NwZMtGJvpV",
  "key36": "2mUs27YsEfM1AXbNrHYZCcRmfT7UoTxPDZs3AUAKTiN3XcHw2kHBtTHsb4gb5FxQqwgboxrLjTeGaK4EzXqHGQ3E",
  "key37": "4Pi5bmNDkdc5WDCyh5PuhtWPNfJ4JSbvyGY23UrHBXtdmoA9F5cYx7KumYLLrGG2EmtiwwNZdAc4JTJDpH3LMZDM",
  "key38": "4TmKWHijWxpcr7uFTVDDNrXTrfbXgwxoPUjFGqMWDsdUL1zhuriDAUFeAHEKnmvHUH3YpXbFivN5vLedKNDea3PP",
  "key39": "4X4wTKV78M8Re3oRzekirAudLHBkiwBLoWDMaqufLLJoaWuUev4cU6r1uSyn1B6sMMSUzgFPxxcYNsqL5mezY4V6",
  "key40": "5YASVojDsfZNzfWqdm1GqD6LZaaAvwCsZBTo3YSD55zjP1jkajD7Rm2pAkSmuE9ZM6JkNmktxRwYXM8s7RwuLBG",
  "key41": "65Bu36fLFRkacEZS6WigGe9xanRWouqq3qPHahc2jdpSfYhQJmuL8TJuTEABvjrx81mbTNfjRrNNp2TQZEU81NPE"
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
