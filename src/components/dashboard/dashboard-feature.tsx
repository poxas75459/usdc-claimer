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
    "jQUcxZbLjT7uJQMopGqFhFDbCguQoRHD8R94MVUgivNSjdUQ1f8RGAFoi19stfLZpUGM1kCN8EhWLK7LAQn7dY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29kBYmD43HJ4fHc57CpgNKb5p2rbcTsu8rfpmY6Z1i6cX7iS9ipmH78XUbeP78sHGm3yZ7b9jz6hmAthPeEqi9Bi",
  "key1": "4cPmWXrmJaFC8gGLvfjXPebStkem6jce25mUq3W9vceh1kfG5NbyQUo4YoBWm1BSspJ1KiUbMjfwa3mZpriNGUyu",
  "key2": "566bTQohg6nnWdoHawddNoqVhFsFexE3aYPuvGdfcnSD3TDiymvJvqP26PHrqHxqY9vqMFJyWD9AkLBPoMhfZ6bj",
  "key3": "SCPqj9UY9yDUN5eogKZfXsr5eJtakB3Dw4eVBuXWenqnCEbaSgnxvAgMLukUKx6XrX4VUjqaDK5fzoRN7BX2KLQ",
  "key4": "2CqtXZC7zuH1DY12Q5bWcq5MbrexS9oxc6ETMVXfAMJujhwkmwGKoxfzz57qzb6nZvA2Se5kSLNv5g5oTzm9hfQw",
  "key5": "oevPhUXUaii1ohJbNZPDFXSuMH7YPJdzxqVPA2NJdKzNVBVF1vyrSYYtAazKGyDXrRYL5PehRPHM42UtimL37DN",
  "key6": "5PotSUoVY3e4Fohwj2mB19AzJbFaJeJoSLR4cE9AydfGKthaGDLTZPuEBtmpmgfFTwtuCe7wpp3jY2tUf2o417qN",
  "key7": "RsqcUHM75FYnL2s4xWCg7YFETauEtnLJenTqTCKacK5seKhXpQPeqWR4uKy3X3UfZ5miFK9KBMqYfqkmAXZmJVp",
  "key8": "43n9tfexUFriHZqFbpgk69GeWYH6Drab3qQ6q5X7HqNjPkJFyWgiDb4goBN8cMmoqZuBsaY2zbXpvG2nZ5Ua3hr6",
  "key9": "FX2ZWLHZBNVU9ZPF8UpPd6Y8VV7xxYRs6KbKjmSCcvKfpm3zZcs5kE4u4GWGvJHKxchF9eccNThbcnKNscU8fhW",
  "key10": "4okjjBhavzFMXoG9y5myLqCpjCHzyzvuFTR9KoQHWtuic9fetKw8kvxZxMvScdhjnh9mCYwsbPNmk5C1MSWNP7gw",
  "key11": "4MzV28dz28oSNFTyncnHVCgyTBrsaCV3kohn5eG9aVf9HtEr9fX43owDrKfRWwYm2YkMys6SDfLhkMQFqb1vy5iC",
  "key12": "3b6NJz3Cbrbr7hoffHqFwDN8bxRw1f5wqeXExvKpCmCh1Ek1aupbffQnqYuZtXMMobmfm1xED9WATUKQ4DyzXnT1",
  "key13": "TdiQkNXzApo8joZea5GwmJkGxpTQBDeWvZVnmhQRxqwBWjBv3MDp4hQuz4JeWtzj6RMStc1TQ5NeWFANfUfTp3Q",
  "key14": "n5jKCZsKo5ySoTEFLWFNnaGA98QcSd7owRNLQEFaL62Rfh4a5p7LUrEKp9DkcXsvgJfeveJFABFwRPXEHNxcWKh",
  "key15": "28qWvS6Lz6MUWdXog76M7Tbu9MxTZi7gzgGinm5Ecjxej8GrZqpmNS1egptAumqijVntvGf9qqUBKyNgGGtQzWS4",
  "key16": "PC32JCnSx5QhG8Fiz3cqg3MR6rjikNWNguiATqkPk8xksjNp4TqtExA23ezuv2Fe55uSPQLjwy2ASkxmv7j2VYo",
  "key17": "4GppaQULCWtbNnH8RsnrQTrWFegNskLN5VdiH4utzN7CUhCnM8T8xHvceLq7Ud8ayV5at9y28DsdUaUJ7nvkEyHn",
  "key18": "ekAmvM9tQCD58XDLMSq5MSAuJn6jXnVdAGK1nUGtWYdkadCsyRUsuNDZKSk63qmxc6aWa3M5Sq2sg2jZNYRKNWq",
  "key19": "3yYfPdeAo9Q3YEo6nfZTbYAwi4AuHjCTgpVmiBULg55Wfq9dsRGMKkS924thGTHFKyo1FWf3oix6aN1bq1PXwSBs",
  "key20": "3bRCAiM4tU2hjvzgd8T13WxLobba2hbiQknTX1edKJCa4z7BzQYhZEJMXzHAEXJuzSm2XYg2m6kVvaqevH3cewE",
  "key21": "pcEqVj6HBK4gtXkE5LCPBevoFVgS1fvUi2TMvx2K2ouwnBoC9TU3siJzEouWMmH6aMAhBfHU1do3G1ZX33wR8Pa",
  "key22": "4rEHznerLQBkHaYxaWnpBhK6rvK2uEKCG9Gpz2X8u7W64dzpJjUi9ukAS3NqopmT3xDNyZte7inpWtckENmiPoLc",
  "key23": "2Nf8s6VWuadP3rKmsc8qKcHcz3Q9c8jRY34cTLFuoQwTa4aKRcgVpdMawbWzvDESaTrNKaTwJRk3zzS7tenFMRBq",
  "key24": "2XctaF7nccTP7kbBdSWwbAzdSN2c2WcYDV5a49nq6ij2XkVpKk5UFNqU5ejGg5SdJE3ZtUXbvAZqpm4F4D4N9QKG",
  "key25": "5TqzqVieX9LstVaDNpyNq5CKSLPzmKXz6W6H29KYEGeGV3o53wtc37SAK45PLvJ9Giz4dQDWSYMpVvx2tkr58Xth",
  "key26": "5HPTTZuHWYHXSGYjHhd4vNU5NJxxi3UHmC1wGgzsjD6txUBoqLC6rQubN5ijYmtxgE9AbHhPTEmW1kW7Cs8nm4rB",
  "key27": "btyGy2AFJHY2oGkYt5DQ475zom4jjajjrpWzaVNkQ2SvcezxW3ypLE63wcSWJfvTVZzGAnMGAfunho1hNd7x4pK",
  "key28": "3w1DZxHdemU6JWikBcw8DAqsSkwys2a1G1FLNeeNArfzp1eMoL78omDgWji9TvMjC98naGTFbCwryiuvbAs7QV9M",
  "key29": "38hGLuD7VDGzRo3tBjmzcCTU9e1h48kr9ZmqdZtNBVdANM3AGYnBiP2vTn2WyHQ83Sp5qKZvsSQw9XGxBCRi7BsC",
  "key30": "3gr1AgVZSXzdb1kWsQHAqU4NgP6ZaKGAJxd1gxtkRTqKrXF2vZHxqAGnVcWLU7yo6MLsugxHzdrZgZ6k5w9pVo2U",
  "key31": "3wNNjt7ntndgfH5bv49ubfWrRfDLjMzgTv7o3Yp2bb78EX2HvcvRH7hL2NU5G4fWnVrxk7kvzUPNY5g81hwjH56m",
  "key32": "3WmjGP4XgNY9AewjMtoFfgtPL8wiWdGv4WxJNTnyLY5y4M9NLwZt9yvoW13TFX3Xg7jkCjp2Naq766vVrawm2rqA",
  "key33": "63GBU5CcptHvQYpfRLHnpSRuL1qPE9qc458GewCsTesM23MfAN4Wgct72YRnb36jC3pUcUGYLJNKXUcuzLTdmgEG",
  "key34": "wtB6GojMdsnPEYrqLADstP3pbXPaReCy3hmJVspThu8eHRcTFhERLNnTJhyk2zFYCq1t3NVLjHkCUYWW6WERiXr",
  "key35": "53ruBomcz6ekoXLo5d7SSxMac28C8g9xYnhVbCMYhwFkUC6hLAee594UcDfRnNF4GPF2CVzCTCTfaQ9KvTwasgoU",
  "key36": "Sd6rtzkJfVmvqJhwRGGrdMLJ42RPu94GmN32pVZFiMdV2ogGeBLzJDACvQ5JCPRrh6Q8evY7WDGWmwUTuE1rNQy",
  "key37": "52v49iKNCKe144jdEmB56WB78BJM5MaCuWDDuH77nHN5mvF7aVN4RHnP8XopCMoH4ayLXjV2bGa1y8Z5thFJkv9Z",
  "key38": "4Qd5H88aMkSyPTrdGRruwApJy5DazbWjY3zmdGvqFeLCs7rHK2rM42ELxppeLxci9BP9e4CEie2Gq5YPUKiapcqv",
  "key39": "5XhKvKuierUCjcRwTPk2Ts72KfmmKhzvgMKW5zDkafKeyJnTEgX5GAt8zkNkKmTnFb2eNEDH2L5DXercAzvhL15j",
  "key40": "3pNMWfAo2M3bnYBrZfM6MkPHyv6Lng9QCfcgpEvhFHYDg9FAfYpEsHHEqCXKH5jcrQQD8xdS6cRNPbjG5dxG1gWU",
  "key41": "eqhCUJgMtQuBPFMNGUeoSpdPoaDQ83jwHFkA3beqxCUstXM1G2FARg2epvYLdsQyJyUE3UJH1xd6TidKNUAdWbb",
  "key42": "2QzYvcgaa8p7WqrWXunRwKhJR7p9pGSYHF7c3dVYfhyswHLWyS5tMS8AFStG8ZH2CEznU66J2WzYwQMQjwu5Zjt5",
  "key43": "RCbUjRXDmkmhDzowCWhh1bQYnNv4uFHugSFLgMr5SYMKf9ohdk1ccybpX6paotuQ6fSLLvakgugs7swSCn6vs7t",
  "key44": "2FwPVT7wo8ZF44PJTu5dvHp9YtyDY1QtrWQyvrC8mXqhTCBwA2HrGBnNCiqTahLRaM8J79dUSaRizS27JujNx5Rn",
  "key45": "AWX5xGTuY3WBHP4cd6xg8SKiJ1XvK9oeig1LRWM2Hmo7XSAyiPwRXPbKkgid6FDq497LGXHzezMBADY7y1MqpzD",
  "key46": "5VrEXu3LpVYTjX89N9bEg6MUKPyQdgeopUR1GwEqkovKHW5cMeJLhq4ryvnwrS21W95nRFKGwCxao3Uz2sV4To7c",
  "key47": "3PtVin7pe7cvyrAajGom7fiVhjD34pQJZbQjJg9iCzS3M4AduppCr7Xb3n2u9Ku9TFNh5NsQtoHcjcy3WGpr7HfD"
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
