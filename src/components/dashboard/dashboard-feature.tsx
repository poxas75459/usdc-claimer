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
    "34u4jwWMD3Uj3mRLo2uFSM6Dn9atcyT3cFu4DzU4t233pXL2bzMeadJkb1EZgrEEVVi3qniVsCMjUsdJueujdF8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2CRSfAsMc6dGj13T5kk9hn9gMZ7A5whN9Ff6MC53T6JQby7poyX88TkgabfqYADsaj5phm6vb9MJGPxz8xT2Y1",
  "key1": "2sKhi9WsRqpHxWeWghTEygU7FEecEKYAe5WmcyEfoRrwas5x7p7HbVKRWB3pdcpUkCKhCrvW9RbZaVAPhT3Ge7mX",
  "key2": "3r4BqshGkLomb1mPpgjECWVwh3btnAhVcr3UcXWgQRN9FeojH25vZsfuLEC7A3mhKw8akLQh5P1hnEk8FDPTFoYa",
  "key3": "2qpvSSqQQb4k3cZcmB2BH1CGwfarSX28UnNJ5kwZiFezJ7K1bnxjCTGK2DweAt7EqRdjm1YzQaNE4eU92HmFEEt5",
  "key4": "5nZ7ugnWkifYb7BwySSJzNtXZGrB1v3sYiCtotDe4Y4uWpi7LkUnsemJF2VEMdSq6EkCujBPwDwCFEzjAFrS2cU7",
  "key5": "2iko9hBY6owiFgk87HjDtetXRhGzaDhmm9eebJjE8nsyen9bKzTZHHH6dMnkdySa1DW8p1HV3cfYkWKZ6Hhc9hPv",
  "key6": "52xi7eL4dF7ba5x8NfHUthPdu5rQRwLxfs5TR3owra6Rq135Fth7KQAfLijEE2mPJDmTw3pUsw8Yvb65yyFkM45K",
  "key7": "46hNqtRr2FVrHuRsvUHNWCawKH8H2dMziyZimJqduyBdzvNmNh8QKhMLzJ9jXE3os3eLvYbLgkBYQ2TE5BJY1Ks7",
  "key8": "2sYdms4EaX448V5j3D3hyKdhTMESaU26mVQRpXWbhox3kBUXYktUjMs7hLA1SoX49gT96RPpLQhjKEXZJCwXJs41",
  "key9": "39aPe6ZXdCpy8TYXK2ELFPBi7hwt2BdhLuA1VvSg9wc8ebdzaqJ6eRkTk6VehZnHwmCUQEYRYqowbdinuzjF37DK",
  "key10": "5ftwowbK4XXNg73eMek6r6UGPw4zjnrMpvupGWdyKHjwmjeiB433ZPPRVnSD441zwnH52yt2QF4Z2ip8nEwwAt6J",
  "key11": "2qeFVo2tTZv38jdYfECwnogLDihM76Ueo7aiqUtX4J3saG5U6agi1Re8Fu91Gf5R4M59WN21sfDPtEQUkpZskcUq",
  "key12": "3Ji4MKKY2USPKNNSWJWqk1ZKDXFAeU8hRDsPnxVUip65z5c8i5oSMDy3C1qmmntrqYbGG5GW7ebU9ytGJPVkpm2N",
  "key13": "2JFApCAT5kiMqmpCmdZ8ZT1N8d2Sr1dnLdkeGWiwk4T6e4gDpwJ1gbp1vibm4mwVnbsvkoBuDnFrHMdv76LkBrsE",
  "key14": "5RRDa9o8qHUq87qAh2YPStWwuafUCrQaRqh4XuEvxKCABte7hBTyuZEGDbCPEMr18rVwKa4NvjTWBvTpqh38GXuw",
  "key15": "5va6kp9DUgi3z8GY7oGLB2aLeSGZWGygfHRUoa9uHzXeY33bdK9H4x9HgsZdCZbS8QyUx3v9w8rnbp3bFHG9yKM7",
  "key16": "3vaubPBdm2uF6ycUyasWi4K3twtgZoZf4xFbmhVjFcTKZKg19CkTsTzEzQXWJFnXfKzhdCTfWN8DRYY1a8rBeZT8",
  "key17": "3t7ybDcDUBTiv4NGnHskv38TUNhE9xP33aT9N7KicxsspMUz2BPS5ripUhn7kzMXYJvzjEBUWiqTK7w8YLvDKa1K",
  "key18": "57e78nUASAAzE4Ucs9Y1skygREttvH7o39HFbdXRb8HgSDLSUeaazuahknzV8tm17zz2NqNSeQhEZahVG4iSpTRY",
  "key19": "5tnhLGxhhXnDwgxiezuyXnQD8vmAaHWcXe3xEHViVcQMKNUsvXS4kxDFHgWkbXEPWJ1fCH76knW4HihnJVZdePGv",
  "key20": "64ARjMAnTSS2YuQr9eom2npFP71PnAgAwCWMo25phUkASbBsbwy7zv5tgh5CCkHvGdu2siPcNHXVwhqVhF3AJdUo",
  "key21": "48iGaAkvzVxSmJNBb2tBCFf3vdQTwW7rb8h83JMYNMfVpGtFGw9t8b4e2pnGuK2rLjphV8cqFF49dzwvdU4KMtrd",
  "key22": "3b3z5XdJNc1Ja5U42MRANaUdh9m3oLXj1C8frKVos2Ev4tt9XWAUk58W9CnnBaNXbfNk7EmQ2kvJVfiQTgwLLsr",
  "key23": "3BDnUEbi7pLvQ29PsUfXCbsEdGHEpAAV2uVtR8cB1pmwzeek63az5g9kU9NfmAteJETeFShrFyHvqCwL2UXqtpz9",
  "key24": "dQpvdrnwT2iDvPrGKaYnQ18AufiMjJd4Ns1vMuxwkCbU2thN1gGybh3ujxipf596NXpMSC5eMSaDzSZuw3DnRVZ",
  "key25": "46CWdXdSgShNEYZLBikJ3ZPFMuP9znhqbbSHxvHrUcVzGc246agdUoHFravYiXXGkx1TX7hV1dZ7HzAXp9FyAL5d",
  "key26": "4EYF9v9LKW8BTapivdxTY9kzGx9zQTJYzb63xUnRp2ef8jLhE8grZffCf1sbamQDHeRdPdyr8XKXsqkF76ySp1Kx",
  "key27": "2UM2zYd18yuWvVoiHmvpbsWjGsAqNBvqXDeqStYKPNuqQw769PNUV6yc1siz8XPZv6tyVw5HanAFnGARjDtcAuzz",
  "key28": "65i2HeQXriTj2hzEXTd5py7suTaCSBzU5FR7FhHpectYeMXfuUrdYWBfJM7QrRxJxoB1L5SWUZoyzLqAcBVrdaKB",
  "key29": "4zwRRoFmdoxkL8MpBLNzZLYyhTkzGEwCjLPNhzrSQqQz941moxzpPhddvM4bcsYSphN4s5uBLjUZJRgqG9ytisLp",
  "key30": "3Z2aFEoDvLvpGsGYGLM5wzkHcydTJXetPYm14TSr9mzxqZxw7uGkeuXizw9a6CNCoWTH133j2nbA3yJBAwKJazsh",
  "key31": "4A52Kn5rmBifagbcfmTsmTZEECqVdrVnfGkisvYr48t5boJW8U1Zd9rhPPsK5PafC2Q1ofncdmEnduWBxFZZZUaN",
  "key32": "XH1AHyQNJEBEk8vZsXX5SLimrYDrvRsLuzrcPfYibLpPWvNzbbvpZd8XbE9QAHxqCN9BFNALuH5AaremcHwV8Ws",
  "key33": "3TAagQPWNTmFwiVyMXEH88kspfm1gNrXWDAMNvKe3rhyHjgCP69Yo4WLZtgjg3te6zmnu3iPeKBLePeGPv8W6wRi",
  "key34": "bwQbG2f3J8v4qAKVGovHxsCU2zSunUug6btrXd8BH2szhgaGGFaZr6xEiRQAvvradjuJWm2p6zmQs6eFaz9YgwX",
  "key35": "4owqYD3Hchaw4LYWE8egGKfmpkBYm2JLkW6CwzKvrEBd7csCxk27EUJvqSoYUGHNYfWNJ1k1kZ9HUs74PHnaZ9PV",
  "key36": "1cvXU247mpag6mJuHzmTPRsjt2ejqr7HpY25FR9ytWqm3GieQabq9Zkyzamr9ebkzxN1MYxv2rKxjpsrrAoE44e",
  "key37": "ac3WyBukafFQMCKG9YMG3nQFq7tByZqfVi8xGUYaSDWusvjc8REe3f4FidXqY8spKN3PeZYZdQVXekG72QThYEY",
  "key38": "5mfuWABEemB8Nqkx3cdQmuLqfRCxpNRKT5aEt13VTGdfUXFptEdFNRw2q84E8kB9xJcSLacD4qq69iw1Jy53fYrc",
  "key39": "2BHhr2EqZBnMhczj7t6dvKBhy7pabSffSMUs1sKceRvnpyHwTw7tQNzHSoVQTtKBTbcLWa3zmBNNoWT6RDr29q23",
  "key40": "5jGAjWTfrPtKhSETsmmYx7zPSeDtGEdvMW4kR2qn25U6NcuXrpAGNLUyZXk95RfU8X4d6cUoT94hXXyEfuozJApP",
  "key41": "S2z6NjToh1Tdx3KFUGsLdsSYx496pxw49J6GtjWz5d2JH9nEMhzFCkThnWXDbFhuV78UFrNqnuspJgEr5nyV9QL",
  "key42": "4QBeKA7QJFhFG24WeFQ877bfxHjKQJk7M1HSoR1N5CwzaNVP86xB5dUE88K8VtKwDdBkcwkpnV825fC1VZnrmpCH",
  "key43": "5ShrHMoDoMmjbp1aETmPjkypUeUZhcYjqCmhiFvX36GvH3Xs8qNUgVeSBASR147VT8cQgQ7eXYCVgyUs2HuRmawu"
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
