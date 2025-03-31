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
    "4BA4ujVXdEX3FcRF1cqyaHFKj4DrTYPnE2S53fLFthwF1PTG19SZSonSqRfYFkxtowK2w5FdTd9nStdHogWF9hp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFi7WC1gMPkMPN3sdhU4F4cibd3MKsHQrdtz7iuZtHqa8kJtWg9HaooWUfKgLpQZf6hgdWNvVHiFEE3gz28jKf6",
  "key1": "5w6Kx4k7Lr1PxY5qZyEkNZJv2K3377FLDYe26A365GBDry352jt6MdJzKJ9wF6h5GuXKKctZPQzYxWFbkqqJ2UKU",
  "key2": "3NdNTfqrNsw8C24wLrKKmFZQurf2gAZhFVbvh7brzcBRmdagZPXFyiPp5xxfhqfSKwsU1TSew8KAGb9JLM3hPe76",
  "key3": "3nWS5VKVPwdJDDFJkGjfP4s99yfvoUbDiy7JM68M2hk3GfHLjmhzF37h5cc81qdoNFhLzf3PB1Rbfz4BWzExugaW",
  "key4": "2e1aKBMhjSHSikKKXCpMv7zxnHLd4gHR2t6JSpPtPndk116YLwJ2VN2cUqhgxX7VeKWazv4UxEZejRZe2SjrgMuQ",
  "key5": "3dLy7DhqmHXdFTkuj8qarzU7cZVmzk93DYCdvG94dBWxBUnaoZ1MRQqq1pibiu68jR7yUnLJcRKak2wQ17AcJ3UT",
  "key6": "AFfhrexJgq1VBty6tkRCyaQJH9yhKUsYx7hdGQ2BX8ZjXQ5LvxpCyBt37xPcot2u3JeDNZ2pcVRJ5nt2NCdLpDw",
  "key7": "4MSRyh3VWwnzBBeHrYtyzCX2MxTfmAWJtwDQdcuVVGsbjFPM6DUWneJKRCeEMviGviTUA2DUZYc8Mzw9Ayptr8Ni",
  "key8": "2WVTNxsaLTPBeQB2xYnfz156KYMMh6BpMPR4whNAyFeudrJq57aqNxhMh7syNbHeauR9XdZJeu1X44b93ZfwhEKL",
  "key9": "3X8w4kYFCvRYB8VphMFFyj1cwW7HJj7F7MNLQ2r89DdTxsmqbgsowBmux8yDNYEEVL2gYL46cEkAU25XTeRHkgSb",
  "key10": "26rpZ5H9YupZgsXUp7oWQNRSS157UAF5p25PF63psQMXhys9dBQKUsxe2ouN9cfPZVx5Bbo7pKu69a9qa4nW1kZQ",
  "key11": "2sG3WfvMG6wcaNKkpAFfU8qj2hPtedDo4cnFkk4kRTSpBidwvSRgCmV13PyWpT5wSHduHp3UhJFv67P3xUzzLUeg",
  "key12": "5LeuMz4C53H1v4Vd1UeFpjiZdJAvjRKjT3rXmA3bVkM1JP4TkxpiNeU8MDCY7rnmUTqrvz86qjnjpd3KmYEgpMMS",
  "key13": "61KrPEVeAyBDVyrJXSzyLY3Tg9kwtdxEtuoGpYwtsUnCJzdBLK9BheqyJkUvV38dY4RAeVn83A1pfUz9u6dY3dXt",
  "key14": "2EVHSGRyyywteUGCzTCwQj1xPhj1hLnDkN3CHsH1M31trNfAVMkiCt3s5L7fDEfCYEfe721FMg4BKDqAJt7RHD4C",
  "key15": "rLar4t2X6xmzwfccpKAuP9W3uPWoXvFEjEw7S2oHSor38f21irycconhcEYHExDhtiSzB6NWLeoXHMVQj8dEtiU",
  "key16": "4JwbFrV9CLDJKwsw2yB2Z3sYgLqydvYjLB2EFXo2LJUD3zx3rAR1WeMznY3MYYY2bF3r2uLQi2EfvmYNfvHzeTxX",
  "key17": "63BAZN829yXFrmUxi4ZshrwDpn876H1Sp6Uwr7wjzgGcaFMe9DApi9ssoszwDwRoGizVr7QNsLoewb2FFx3koV9k",
  "key18": "3L7KkD6D6AFH8UiHnh5gaPzqQZEDSPKX3ie1N6CzNHaXH5UDZDNRBroQK3KLnF4Eu4B4Go4jHrg4p4wci5VjvLVs",
  "key19": "3ukned8hCSVmSoojyiEXpEDirZD6tZeCD59fibMsTECB7rZ6CSJJT1GivS4wjdUpzWMzfYkxJWUYXZu4oE6DomTD",
  "key20": "2cmNPky1n43rcucTeENGjn4z3Ym6jXngLsGDTJEou3p3xnmfQZ1zpLS9kMyAqGw1CmRsnDvTaqBuBifio1Yj24BT",
  "key21": "43Qhui6gkH13oyGryW9AKovoKqDmG3xxLFCund9bTqoyz2FTfDx8fxGtFZ7Agci5vYYprCggiMx5kaRZjsfwTXcT",
  "key22": "mT1sA27b2iCsR51QLV1WGJQtZFy4vjwYAEH3k5nHybxu5MXXJkTwSZDbwLq598GqBP7EEuewx9mLgvmAx2DaPTD",
  "key23": "3AmY22585eho3KK5tRxXB5xC6kD69bn67zXYERJTrTX4BuEtJTqMtesYUENCoTcY2UiFpD3ZaDe21urPBdTzww34",
  "key24": "4VuJjjjta3LZj6LhQD3Fz58xxLDSRuSZbrRhAzZ3JekTRixnXPFMi5Ec5ZaGvgyjPDk9YyD8CNAtfSZUtcKTdZ3f",
  "key25": "KUPbWRSV7PaBMqvJ6ZrNUCNNT7Zjv7fNHdxuEkW6NmqyL1Rz5Ly6Je8bnfYeFtRKEeqmxs7Yq7Zs7qmaodSmHdj",
  "key26": "BskqAr7bv6YGXmQytEtdv21w52qgrguqD4FoyBtvY4Tcw5ng65HXPdBpP66oSrwXiCAiTgwDerNEn7nBX8sF9bY",
  "key27": "5SgkD8pm1g5Xp3t1n6W8buH92mbN3kYevCgZcYXXp5wXgcAFG5t89vxWyftTjETkUfYDQtHs8t62cmJKJcsnQ73Y",
  "key28": "PsbAxxn1JG22U68sRAUvtTdzTAdcVHchvUKbEUSyAzt9nar1rm2z5FSUKkDX98LFogxqvXHJUWocreNBAif2uJb",
  "key29": "2U8HzzAKGErLRR3JCWfdwp8JWxdqtBNR8LcpwM3wXZzY3soqYBpJ8CUCL4TEbRauqCVoZtWLeMGDZJosfn551SPo",
  "key30": "nrNndFYNWLg1VJpi9Y4fzHA1rC1xVn3NPEo2X54MLhWaD3Q6DUP86egmo9pFAxfG9rWbtcML6HndpqeJUCBRxJw",
  "key31": "4xRzsPdaZghgypGyS4rsvTdJ4QiUhFqrmna3Wj5dErYV77qfFWNaKojEvw3Cx2W1XRr2L8aNk6AFUFtVvQ7zN2T9",
  "key32": "2p54GggGqPJwrCZwVYmH3ieLZgyPTxjCjxey9TMN4KMnkfrzix2EjcwHeYarazk7eamsCWBCgFG6dYNpKMdxs8ps",
  "key33": "4h8xyhAdvWqebeH7YkDKTobpLrF8ZooDjHk3CCEgiSdB7yH4PmNwrFT1jYrVBkDoJb69i4DJevrpF3jvE92EUBL4",
  "key34": "2MoJGHXUK45J3jBAyEmp67tFyheQvET6uLocYFGtfR3aFSFBunv4S1FQtjE4W8Vd5b6vpyUrJzSPgHRKksLeriW7",
  "key35": "22LJDnuGmSiFCDTD77vXdqh1fZQichpUgEnUHrZKzQzP13BJRMoFDmHL8dsv39H6LriZdyx8T9Fevr2sUanVkwNg",
  "key36": "4FmYceexAQG4WFkNzEBECMdjH9y5zk5cTRbUrYHtvpFcruQk8vVn59uCafzTxLg51nPws4Mn3CmMjW3HSGvtE8zD",
  "key37": "5ULWaNcD3WBxCFQb7VJJ9iEjtvDGx1z9mysttjwfiirR1XqkYRcghRfzjC3GKVX33t1dvuhyYJ3FkYJAB7PUCewC",
  "key38": "2Kj2JQVXZh2n2qrNPtiwNUc6b7z4qCW3U9Vmtdd9vN6wSZXcAkHkzaAFhKtCEcdSqY7Gni7kfPMdY7ubQrCxkbE4",
  "key39": "4Rj7xXgauMjprHTEFLFBrEsK1Ma8qwQqo863wea3KzoSGGtJAeSPq6tjX9SvBd5nVjQVqze1u1rNoqaSGUGmrbp3",
  "key40": "3W2QLtfboV8MeDmV1Va1mUmhdPKp6ZhHMWaTMrafMXqBSF4EQ1Vjrw824B1uB6b6AqaQ2DbSKynyLNWAm7sCb6fs",
  "key41": "2fWxCbRDc1FDZS35xgypvtwVUVV5WgbRCQRuFXKwmHwMRhyq8eSpomfvrFYJP8HP7qnuR1xFfvjaAJBNosHJ6Z5J",
  "key42": "3ygZcVMMQyjAVhBTsAR2ggBiZ9cvLYSwDfpE6q5hDw37mBQMXzmVzZ36P2zhACNWYnsK1mJEp1vHgZ6YWq8nayzP",
  "key43": "5jgcHFvzQ9yjvsYMpuqZN7THLT4PM4WjbwQ4ASsL8YbxSTsy1NEmLKCUGhHHkkw3Th7MfR9tgNcTHBgPHncdVdvj",
  "key44": "Th1Ees8jHN7N38qtSz28vRJgp4sNxWaM6NtvPLJWVa57VNAXwMtvH1hQBNfxEt28SJktAfusoSKYSrPWKaNbcp4",
  "key45": "5hDyPMXkr7CZJTSbW4b1y1iczXgwYGhcVrPpPujBMFSUjEhxMPavtb3p8fjryjFHor8qumTdiArPYirPaFRxqrTi",
  "key46": "3XszfNA86fnCRMfDLAgSs18ictUEsECDyrgJDBXC23tbSvgp5HHg6tdGFPYS7M3kQthKRPmkN9D5yc5hQPRk4oMJ",
  "key47": "4BFwZq4RHgXU7MDMDJTNmc4QZnDAYPsnqWLJMjfSXNSsmzoze8q55K78FYpV1G9PX8sLZAd1URjg941JLXQv2tCR",
  "key48": "2hUFfKoaN3KSvVHsiSmGMy37d7SfsaGEg71izXP5ATHVSNmqkobycxamBYdmbtnGccpZPWufP2L9HZwnkMf5VGwC"
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
