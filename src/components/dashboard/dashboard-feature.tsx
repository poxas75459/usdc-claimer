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
    "2EgwBntA3VqDP2xEYhTvoaDKhWVNickYvWEPwgcpQ9hGCsUYwzECpUiFRJVe6K3aWh9R99Z4bJcw2hvJD3tDMSNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5skyVbPk6RzwAsTQPBP5KvxjYqwxvNF7BsfTywtpvFauapG8BN5nvaywZ4rfxJEFX5gYNYFbw8C1FaYbJr4ieeAD",
  "key1": "5w24rXgmURg6YQYDdXgNP2LzbdJowZjWVTJ7yxauNAj8EkpqDVDThkoEXamqvGWurci3Pojb1fWim1cgqZA599fL",
  "key2": "3JPfeiShkHr6Fet9yq9WQk2q7VTLU14vdpTcaSNeUtXRFCjDYDJFbaMGWKduxExscxrPegaB7Dc4b4TfB7SFj8oH",
  "key3": "ngwdVARzS82KiiGtMSXS7vTWofkzEmoGZygpReCFP2bk45tYKqXjN64WrBUXxwntVk4Yu99UsL5K972wCdKjcWM",
  "key4": "5799ZjhfDVexAL6cthWwPDGWrwdYVMXzn7yvhvBoMWvppw43joiN81U4mAfojAJm49dLCDdvYyXLjUkXoG4WtwBk",
  "key5": "3pHwcqVrGYZEXLc7p27koErfpxWaj6KNMo2PHJNGVkfUHA4rykzkjkPmgFAPB21wSfkBzJ865U3eLzdxZ8rAHU2i",
  "key6": "bV2rqXZznexMVjL1Hgq7mdYNqLq2bFn2PtNcrXuTzLLk75uMhS7V1DwjKZKxSYv3cVcY5GhxGk5Tkhadvpm6QXV",
  "key7": "4BaSENFTup8qcWo56UtFsuLdAJFoTLMvjPXP56vnWEphXAg6HoXkK6CtzgZ8m1mG9qqfUzwetZ91wGrhWqxPxx9P",
  "key8": "5puTSx9a66P4hxjzRQ611cT8e5v2GTWHPjs2zsreYoDZ1KkuyN982vnkr553AhN3c2V8TjnkQdvwcXqd78W32sKi",
  "key9": "3jggnMdRdz5zUuYS8vi3appTMCqwaaptuh7ztQjBcWQCXnk7AGijmyGa2a3VtpteqLa2pZLCaLjziAqz9JBFT9SL",
  "key10": "4i4SuAC7PNtAGJfB9aAzun8gcYAZVivbNkrbPdpH83JUbdNTR1r56sCKbsCG8NMWWtcPwdZJ1GcJcetP4jHyx3Vp",
  "key11": "3U8wq7o7ThdSQFZuXBdHUvjnGHNhMGg24XK7o51gzNH9ihrQihoXxyF7yUgCFH7QezcP8r7NQZEGqMdgZAzyjP8b",
  "key12": "57BCwR7d63AjCQZep4MurvY7PNWxvU4xeSNcJYdNhbwSspn4TbZmN6gkWjXgH2yPJuJD7gPXcZrAuXmy1EcapSQS",
  "key13": "3wcfXMSoUZzgm6mou8diaN8FFMDrhhDJmEtxjsaxbrXQBBVmCWxVsRTk9FytzKi3Xuk5QXF7Ny4RVYJwNZEQRahe",
  "key14": "5jE9hMAsC7GcMwiLCQ9VC9xaWT3QyyHDza9nr24oN7t7wmoRBRKbyttrxy2X7nraf4uqNnPiyTuu7z8bB6anPSis",
  "key15": "95akezj76eBTdHbx3TiKZDv2ze2ZDFatf9jqMaHdhGGJZRb9V2bbdhpQJ4uFf262MGHpt7bNcomNTSTndQwVf8H",
  "key16": "2Qp1Qivy6pcNkoVZUGChDkuxjioJSjGnZGW7xF5AJ13RHJopch71oLANfHDnKaCoBSsSJKLNzKqEVDAHH8aRyLay",
  "key17": "5bXA9qUotqYXDmGzntVJ1c6VZbKPiiVrGoa7n4v9nQumhbses5MacKrZZfPNuLQo6aDADRXH1Efc9YbmUrHb4MXA",
  "key18": "2XzVAJY7cDydN6XvGG1QthmmkiWK6MyjX3vT23jFVhSQVyoLC4XHNBBdmPHRg8D3RNfBX2PREdKAW7uTHi6bCsvv",
  "key19": "QSboVp4bjPhXiPXsnpSzjHPxHG8MMEDPUQ7UYtJP7WZmTbhEFCPG57C7GfRMtkNUJ3CxkHR7qwZMSUijydiG4hA",
  "key20": "4wzi7XsmohFehqPcAsBn3gNBSff8pUHyVUUrL1ChYhQUXF1AHv5kD5ti9dHBtuFGAz9ZTGUAqSgHxrx6Y881rpVr",
  "key21": "9JEZdxPNZaG3fvbRrCaqkjP9N2vmSZ5zJDPLBVG7VxCCm48zd6V9RbSPnJ3HMZhJfjR95kBLnSeDWXXqtzusZop",
  "key22": "24YH4N3JtjZqsxjKgzJ4aWesxZWk98V2dQbHRQ9vtYhfaUK9aH3VnKHGE7sNaRkTFP2ac5fEfkn1mrnDPH21kUwZ",
  "key23": "4yzcn13VEqs45znkRJzN8UGRjuZLpA3mSrX6DDU9DdNhnhbsBf7tgcdBDm4NdvMQrZv2Kvtabf2Qf97oTu3jHkgP",
  "key24": "3YyJ2tHP6w76hn2mDAJkgNPox7ts8Ad9vQzfAWS2APKBzhrBv8UC3w34B5MSAMmVQ7em3KtAEmGaPeG9hv4YceqK",
  "key25": "6cfQ66cPVQGb2ru9fLHLe8QrpsYQh2mNSBuRsnpiA3WBQPNmqrvKvZCjbUxpUXrC5LRe9Wnnd9f7EusQo1Af8Ap",
  "key26": "48iR3ELUSu3v4YiYbVStGWgPHKPGk9btRfZdo4avD684BwsnKXeut5yt6DSZdy5cFibnEAxKRap2NL3kHdJqvxVj",
  "key27": "4FJSVYkgbnCPdVZMnM6SeACg5tsPUaXDcVuuqhyZxhDbUmnoc3bLugE2akXLGDsvXf22eDiFFmYab1j6MVM4w7gq",
  "key28": "HERAwxwWi4prXVGxRuUBPqg3Xcp1RxAr8RTUvvjnczxxMx1Bx9ewU2RJHUbBSp9n6w6SztxwCbpnZe1WUthyJFi",
  "key29": "2JxKuyXMGiUAkr4j6hgh2ubHYunLLwTX5i6fzrJzveg689BdTyTBPR5jrUMwe3tzBy61fVfxDTLBPxkykrBaFaSz",
  "key30": "2r36M142hh8fm1Nc2CugmMcK4MFNuUhDMC4JjQpoDvdUsVpqNxAfd4NyMvnezKvYLxMHfjhSEDLRxKLWBhj1ZBKt",
  "key31": "giFCBwbYWWd5Q24ySF3owTEERtCAtT4zRDw7bZ87J4LRvTVtomVuynv4F2VAkbW5ACTZDAHRxKkKiXJXYSYodZQ",
  "key32": "4QJaSf1pfVwnQWpPbQ4pazBHerFB1pETyhPJMNHCQjCxGq2ByFMQrHiaEjgvQtf3CW51Jt2ptdqyqEW1dSFsEfMW",
  "key33": "4CjSpmTM5Vc8JYsnHif5popgr6gY85jZZngxtDpqpPUUFZ6M1TwSAvgTjfK2ZdHrz5vyAvg7XjTk5UauTKCY69Vs",
  "key34": "5yx4ySyAAVXmLY581uqu4CYbNSJCQyu5Pa7rJaAvbqHDxMsc949R49D18CtjmqBcwQ8XhfzznEGPBPSHLqajYYoj",
  "key35": "Usf96K5maXCN31j61xNMM2AV6nnAH4VEBPY8bDiYFLJxzqZv6peDa9kPv7vuh2vr9HDJb22EtC3B67NiTVcsJtz",
  "key36": "51JmjTtJabLtV2CAXEgASH7kCH9aVMicFomCtzo22biGEEbSUS3XYQmAZ6NrAMjhk9UdJQSN7iKTuSTR3N59G5pH",
  "key37": "zjnsELCK7jo9RkEHz8Npsqmw3LGkmXUA9ZERyTbnYux5y6hisEZCCQUTgJyrRz16DPfmNppBWsZHbWnMautaWVU",
  "key38": "4wmPXP2XXszRQZNDysEN4Hgqp8Rf8BPv8CXNbSjXnubw9g7PNE5o5DVfvn3po1DdrFBqgqU9RT6ZkAdNgrjV7HhB",
  "key39": "48fZXxPjKE7ayCK1xrjZfWeKcBSuV3g6azvEipitzpKNqLenMM2C7pb6JMvBgveG9dVoZv2xKFdpKj1p6543Kfup",
  "key40": "3SEtbF6jidVuvxKDm3fFFw4RR59s1LVbKheKk9q3hSyzttWSgMcq82iepKmyar8HrPiVJXaHZBcamEcVS12LaYjR",
  "key41": "5SMa24ZGWWATeQNELa3idUwZhSAs8K6pCWhsdkw3ee9ERivkgP9YRBPSNb3gb5dfAkrkeAVKyx7WDWhWK2C71DRw",
  "key42": "3MGjLcNimJDAnoQ9nPAeSSECCzgyrSdSuGnm7AvJVp8raht8X2MQy3x3MZRYVYyRdJEEMZfCifg598B9FcytvAJA"
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
