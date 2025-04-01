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
    "3VURxPpTTNaAcZBNY2UCPw4L9FGB9voKWWEMCc7joa56qJ73BGWF1nrQrg9kWs9XUj8UvRr6HhA5PhSoqwJfKeyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntouoiCRW4QJ8ZtT9C7uxZe7fhnrtr7inotndFmGG6tpyQd8haMx1wdPy4vQnjmMNJDjVTH66bww7GNY8vMa9uM",
  "key1": "2QMtg8Vaws6z6YknRevEEUPBqkjoszkzYyBpAZLcJiNYMa4Htyud8eNdUUdxrTkpJJSoiQGJLYK6LeNWtFnbJfW2",
  "key2": "TCpPsoMckQ9pHs78qwUKSiDZxTFpeLwMBcnVFSDG4CJVXsbkh8K99ZjYk5wu6rfGAvSHhSyDKXQUcARseR9ZE38",
  "key3": "2EcCmVL1VSnFrJHqpvjZsqDRgChkQ9gYr9YggGU9T818LsgQ6gY5dVoXftdXiHzsELU5tAx48Mjz6nfUAvqKbr6L",
  "key4": "65GB9mCwoPYxiyNNwrvNUrmruZLXTZmvkeXXFHk8dJ4xMuEjZbqbFNoYM8PFF7AbfrJsvydKumyoehQFmdofmEng",
  "key5": "3PrkmSgwwDbagLH9cNBxrN11ghuxiqEMZjZvv94h4hKpdB7Eu6kpL2NLotCZWjpkX7UGkyYfUFf7oKDqTyL41tku",
  "key6": "cKE4wzQnmCMHeBQUKYgfqjEgjgDRHos6VPN5UCBrUVJt7q1V4AxTFNX3gdM5djC5mVJxSL9Zb2KbHPdABsEnVhW",
  "key7": "4m4pjMLJRE7i7Y82JoRnwiHzny6ns7SC6BkvXPJDf84T6FZXjUNoxEe66rawDKrZ2qC2cj38ir7cJL4mEK73QNXK",
  "key8": "xbajYmwvhTCG4EfmDuiQ8Um1CkMb8QAhvTVEpMLcxYpbPPRSLMX3dz27PMPZ7XWyhN68PxUCWRgNLxDsBc6oPZF",
  "key9": "28jier2M4f7Svbm2nPqZsYeRw8Dr4TjRna3NJYkVJ5J8Hzd4DyoKSb3y3HmWCy7FMfayjN4pbd4zFoaieHPwpaWF",
  "key10": "VJ81EwMdc1k6EBPJ4g4TNERcvjhtSToHuRCLD4Hq5hNAH8bNqBJEjTeTxzF35XJDME9LRL2otPN28HUkBFjZJni",
  "key11": "ddvVCgPAyFERtWDS7NecNGamCsZwnYZPboi8HyycrJSvpkxcHSVjjFcJDwpV6ktLMasMSTWpFNpouNEcVA2Git1",
  "key12": "dBTe5vZ63qxPgPXP1X8XxzBY23S6HrREq4X4P1k3qepPNXWes7Toi2MndVa2DSCi7t1o7rmtQidreGXLaEpi7No",
  "key13": "4NPhsdEj7r65XTjYD5m8SL6bXpWWpsTYDzusD4rBnM37cYpAxy468wRQCg4wgCG2rJVaiyufH6UJ5cELTaXg4na1",
  "key14": "YvN1AiBC3PyfrajMDjnp7kZ2XRVuPtZhTPVXUXb5ovktrCHS2UQFPBBPC65vQZKq2vJHi2ZaFiFu6Qkqf2HXYoM",
  "key15": "V1ZLeuQDeXUgUM3CHn89QXH4d6W4GKy7tuBMJVDAFoAtwK34KVLrUkoA2MPAHYR4eBNaFrdReHuAzaPDc1MBFWt",
  "key16": "41fhJFgLSeqE3776SDWT1dRyyWo8qr26wAuDCvrxETD6Ab8HDnmfTwZphdU3kb2vBEx6zJfJdrPNcDwCgMxc1en9",
  "key17": "bRm7uF9w4rg7HVLtDmKF6xrCi4cFM3marGZivJDEkPSN1xzEnW6yREGDRQQ3jPy472RGAbnAAWpGRXd3XSbSeZ7",
  "key18": "T9VdvhLys7yn5h1Pqs5uwmDLuaWBdR82UBujRQttHj1Z8XGUPjceXfin6aUdzb1zEFC7mvPABUhbRmyhmuvSTQv",
  "key19": "3JXCX1m4vtdsgoJHbMQ6QoM1FK8rnXJLpv3XfATqfRT3o8aJR34D6YD1tzxnzbPdbcUhwu5t3sU2kjK1AC76VwP8",
  "key20": "4UR1opQJXK188B8asnaFmXW2rCRbYXawFtSwkaRWSpbKRhcp8qkEkhwkGjfF9K4WTaBeFczizfSUzqm3V6S276jx",
  "key21": "263ENqo4xzXJ6o5ub9nrUfcCxeCWSVqy7mNL5fq8WkscPuZBfhu7RC51DY7dhU6xikUKZg2Jn3by5zoqQwHwjPKG",
  "key22": "2y2nNk1G7X31gG52zBXb5eCDgr7tPkgsUXaKMK1YLgnPS9JsWoDLHK1F5w8rGXpzDfyJa5pgXFUKH6SKk5GnaVXo",
  "key23": "2FYAJEdbX25VxhMB5MJEgaMejUX8t19xJQctwwzYkgySSmwPCB3k2PF65sduv6SGujtisqMj8HmEVu5MVeDQuwuV",
  "key24": "3j7ECCbJpgENVVcWaiskkTbYTbxo3dvu377v8FuE8W6L71AACh6TfNyaZJQHw348qPxQbcT1hbqC6s1GVmEvrdAA",
  "key25": "H25zprhnaMRo7HSxAwhUH1zEgpnqx4WkzgHbss9LaSMjRWSNmbd4qV42vZCoaHqidARHzHjwFA7TVW1VJ6nQLX2",
  "key26": "4SUQapL9PUjnU8UKEwEHYqh4Gfyc9WsQ1xtrgYs2Cvp1WrAkYzT6Gnf96DVnBAKCC2RgddRpTzZjYP5dgngzuNiN",
  "key27": "4XbfTGhdrdmWwBn8epeupjYF4JDkM1bpBAryVXZitSMcdS8r7EcUzoCLaaK2mzEs8sH5FrUuMZG42GVatMu8wjWP",
  "key28": "5qPtibSoX8SNFrraCW4iTvvdbxUFn7xSuhYKWbvJGDfz8dpAyQWD3r3e3S1yRXYM4SqzqnCKNGtFSEG8YjqCd8yL",
  "key29": "4LXoLkLpc6DD3by94hxp2wKNAb1QJTWcLAJFG3V6FHsiZCwT46ULXz3P8HFZKpcbVyyUKB9B8piFwc5hvaRWqeHV",
  "key30": "23mhjKqCXjzj66mAkbwcW6KuWPCxnVZ7mHqyL3tjHvyvxmz2kTnbQVsVnmUwJtaZoGVj8dGwVpcXtwFK3NJxKR2y",
  "key31": "42iw5ugkVPQdcwnhgXs6JgWq2ieJx9isBHdqitwsZboNQhfkKFg4EgoVReG7U4FXC5qbFFWdZvsp1wns1XtEgFBc",
  "key32": "53RkGY4gUvXK8ZRNdrppqiYo4ScB1RNKRHKnUhpeZrLCBGY7WipmaTXACcDYZQsGZZ1vkQHi6cSuC68bPDdEJULS",
  "key33": "4CJZd9cpk8nkzbQZeBPmTxyuLtCmH7gXT6w6EasG7UgSXct96XwVitpeEEEKuy8PLwPVaUTuyFEmWSWLfFTVo1Ut",
  "key34": "3zyjbuc5bikXLmUy3EH5BhSTwFJzkMiHhoWJ8H6tZKEDVDpWQNtai4VK2gSGFqJBEULHR5rM6R8gjGR7bhDMGZhr",
  "key35": "3aa4tmGUFr2kz42tvZydAKrNxdGeMPSW56fL8HAxToWmrGn3stJYjCkstfzMSpT9ny9zko3FGygFVwXZGmg78dXS",
  "key36": "3F6tqgUrj3S7vApn6L63sdcTZRyzauqV35P9Qk5FQMxU3QkLBzxaZntgxebn23X5S5NdrjbGMsiVhLCfrPbCfFWt",
  "key37": "4tu8oQWWLMqnRLNoWUpsVpWdDt28rkmfMvSvxBefuZQHdMtf9mR5pCZrxQMsEBh68q5L43U3ssCC5ZvtVe5zyX3w",
  "key38": "56EKUMfZ97pzEsGTBsW8Kfr1ukgyh2BsvTAD9J6uBXP3jk8VkTgKX4guSZpLeMVwRbD2riHapWSE52tKcfK1sxpq",
  "key39": "52svKbVwYnXfP9xcX5j7kfpJR9eUMCSwoshzUogJorhYc1AR1zNAG56hEDLzrjshR8UmPPAdwieS8BpNwLXSatkn",
  "key40": "4f8kUkbBdVdpnK336YckATRJFy6STDLMqXoyX1Swd1TzcwtUcNUA3cJHhZVdoqjdCLeDvpbrDEs2pNAsxY71vsLW",
  "key41": "2MN3gWrKn6WdxfxD3B8Pv44aFmc6d8sEfD9jbjH7n7tdaYEyk3xPFpUJaYyc22DVGgpazkgkefe9E372xDwceX2d",
  "key42": "4LzX5e3h5Fs9mfHt1jwHuyQyS3xU5By6bPyb83z5u5t22h2XM4dBmmp8Uv8xvQ3YSSgG1LY3jppUxAP296BQEkUH"
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
