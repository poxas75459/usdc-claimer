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
    "3hyx5hQT2sULQxu5ssiuVhV2yJ54pSyPVGg4RQMc4SNziz7dBuZYd65SGshNH5N3HZmJJdQomUKcvk5K5v1L2xGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Gob5SfARV5xqTgiEVa9TwQpa1TikzMby9upLymdvnKtBEv5WUF47Bc9WYtLEfu9FicWXjyeQBE1LKVFdsWXN2u",
  "key1": "3vidUtbAYWgEcSQHvj28EkADJh7eBSomK1kzRnfZJTHpu4FBXANWrn7xRvLCYuM2b2SRwXK4u2AGEd3axag3DMUh",
  "key2": "4wRFei9SXhGnfvZSMyCoGFSni5wE4fGKQPEAXvfJuy5Zkad5SrC9hwaSaPyKxxeFzL2DVbgCwreMzmnR9Uris7o1",
  "key3": "4nSrjiXRcxEVhY8Tvs6WY6Ff812CzJ2Qo7kfLAiBRNHb8Va7ijAjXioenheWfTiBmh6xK2ye97Tmw8NhG4aFTc8a",
  "key4": "2c47DWpPe5deQQpqANWTHbyG8pH3ZpvukcAm8F6omZUnP2VxtVJFd67w3tPtbn1qVXHtHVgLawMBdPucq3HKmyup",
  "key5": "5erwghnFLDpHybPtZurLRKV9Lq8zUT4iiNJ6NPaxDyJaJk3fz22VqM5636nH9kqddQtMw2B8n38rSQd17Ndt4sxC",
  "key6": "FDjq5PwhbM3awfiEifWdV8LK6V7Eu9tEdbxq9k582wRveYHHAwXm1pcDo4vXTohDZGAM6sWz3dMRKWAFjSkttc1",
  "key7": "4QvtPGFPdTJjnz7Vjvo5x3R3mum7Abj2ubCF2we5EfWzrrm7Ee9vcWxVXnAdxSsgdrboyZyYGP29X5JWob5uQs2B",
  "key8": "4rkjHxD99QcdJRZHfPRsg8kFupjL7TrchKzHb47gVWi2WEK2zsVhapwDQCEq8gcovxMWUHYho6NiStY23vht4kj1",
  "key9": "3eWbRo7hRddFQ7umBxtuoEqSyAVUEoGWmwokzHvwHgKd8uhkDznbTHv3Nf53BWKzAB1PTNC6PVCvrSPj4fyCLMic",
  "key10": "MsyoerqeCjb6BdA8EK63GC94mPCLrifKKrVGiQn4yAa6Ej6V3ejtxnBSeNeAGEdPfg4jYL3ji436M9XD217AMph",
  "key11": "5xDM9JdxYoR8h8Eu9u8HfDWUk4zPBWyKNeiqMNb9kg6tFvYFoDvZreVCxJUp9Zx2j9ufkTdw8Ne4y1r25YkeLQ6M",
  "key12": "5SCtwyAW5DCQ6p1n4iXN1NhdGMcdEQcKCkSaPezJ5SNExYyaGS4jdUQbdjjkbUJZJJ6VXRDdBQCBGTJmYJc4wKHv",
  "key13": "1s6qxVPbeSJXAwDwHMMzpRaFdKTPmAtN116Ve5SLuLvwPBxquKyA2bLH4A7f3j1M636Rez9CSHQzfJoNy3QHTbo",
  "key14": "2N7JAKMPmyj1EemBnK78idAvsSdBPUfsXELmNXNAzjDqJEmkhLDP8ymjzKz63jMg42YJSJMtsAkA1ye6Hu12txhz",
  "key15": "i2LKwsyBtjw7PQ1Q5AaXCfMKQsknJsErbPBA2CaRftTTwu9dgatocZhNK8HSWRcqND3dM6SRZLNBYi3AtxiL898",
  "key16": "3S1PyvTqwXf5gEgKiXxCTzgZ5crkHHZ5rjTVmic98iGCKLwNHsx7FHPJBQdVCgY4wQ1jGqzCdYzWc3Sh4nccYeQQ",
  "key17": "4owxqL1K3qsxFDXtA3BqwrRcyYvzGDEYUJpdwTnjt84mrHewk9DvQ7L52pSCnJkuF95fqf1VN2YAsBj663jZ21t9",
  "key18": "2xJWFcpUK3PXRKUsSYU31HMHDRfHM2Qvve929WQLpuyA1c4y1eeK3LxV2GezwfHnGuZautnMW4b8fsWyxfUEWxdd",
  "key19": "2xRffXFzA9rsXw4ctKua8YCVtKdjmAjGjvoBbbHT9HJBWXuPzdvp3LRdgHVCnDHTdaTBLGuc9xYRpFYHfqsUEKCa",
  "key20": "215QPaQV2L8Ue2i8VDhEJ48DQtucsCzfGNqMmkWPFFkTk5kUCdwMmu6yMZEj8PZMb9omUj7imWvzoxThkr5mV4Wc",
  "key21": "5x9VpxwkMAmFFR4conDBooc8amL6y57fQbYjp51WHNDxUJq6x1379tCBtEiSV5vAe6cpN8jEt7VFcrUnLUK5dbTf",
  "key22": "2Ep1zDdAT8ddiuTu8q2p5ZrUULhCQGAB5SDzBCA8PoESRJoxms13HWZjA75UhVJHpEZmxFZ1BhMuP8NNkbZgCYQQ",
  "key23": "4TfhGWCZCxsuTsmpcvR2iHzQ6XTxJBVxmqatMTQtH4mcu9nrXrJ1TzvuZNmJL9vNFakQjsXw81TfenZLx7QJApie",
  "key24": "4LGrMAVHhyC69TKaQpPv5WmBqCVdLCW7MQSNwiRYgUmXAcGRhAhogn5ueVNBLQaShogc1uuw5L36MvmXxmtefRXv",
  "key25": "47H736DtqmdBGWZzj1rvVA9V4sYERSgBnFcT3nj8C9gmWJ5vveaCkCZj3FyYR9RdX3WAoyGeVX5GGttn8VCbqtWF",
  "key26": "5cjXV5TstCES3miAKo2wXGhRnBBgo7A3n1B93397CMBRYD42xzNDnCmVBmQKd4A3Hhidpj1WuzWkgG2U5ASFLJtm",
  "key27": "3CPpJZE2qCtVpn8qR9jNhvEBR89ZpJraZtsYcyRQAVAXtp4PfS6D4iCECWggHKFDSJtcsTTMjyJtGV8xRVb1JmGa",
  "key28": "4FNpHCHnuicGR3zeMzje9SUq8sa3x1fr9ibn59Z7S23stS6pvgNGEKQuk9uz1yns138yn8MPc6TF1CyXS7k6cjK4",
  "key29": "36XVoorTx3KsbX8ESCRLTjZ36Cjc5M4tDJWq1HUouX3WSXXvofR2c4KK2fegFpaL4e92B4Y4Pg5oDBpEsTGQyDi9",
  "key30": "2boe82KqQDYBw21RsjjqEYwrPhujuP2DhatbiEQ4pfLHxXdnea829rcPZV49L93Gdy2SFG4YqaEkvzzND5bstBgr",
  "key31": "3831pHkVoThu7mtQ9HCnSu46cW6aG9KZFvtumg45NzCFbv1vtFNAfyG8SjmmdEgFPA3pyfyGVKw3pvZa1v8fiqDF",
  "key32": "3HyGMbAPhjuLPbm5FGNhd5BAHkasAXGjaNia56P9PbFsh9iXf9ANdEWrRqadrfDFa2ULMSYgbYQ3YqTj2yA2KuK",
  "key33": "4VP1p4SpndnTtakHgzp7Di5Dxm7J4xTSAijzAwGz5ZtkS3YKJ3Zz3PdjsQsgRig6jtbTaNKFdUU53NywZ6btS84u",
  "key34": "3fwuRs7RZfrreGgb63UndyksuP7ch2mdkS3PNbZfN19Yz4A7kvHzdF932F7r5b9qwk6B6UVtvRNhAozoA9JKWGnx",
  "key35": "3UMpD1vctwwumkzShRMz8miQsG3p7SrtodQoeRbp3PvjWomxaYRbrmuJ3Y9h39y672LThkT758Tb4wZn92gkAyfQ",
  "key36": "4dqD8ttvEPcHdEQ38nNYr47vitNEYzrRqt12T2dDTk3Vqppek5tPEF91tHb4FUnB2Mretr1FMaufWGizvc73wx6X",
  "key37": "2iagW2CjA9nPq7H24yRuUjENFinFj9jY4DdyGwW2W22LUC2H2EuegM8KSWFVLYPyLQaWMn4Bjg6nBEXF7woxL1a1",
  "key38": "2v5oj6WxSqWCzqsEdoh76xWccPXfSXnKY7JuM5n23xNxS9VQ71RsNqM57F7bpt8ekSzEMzt6qYeCSZkajxZG79Hs",
  "key39": "5hsbCWTBLGYk6JUt6jM4CUhMw19x3oKzSXY9tpiEoYiqPL8QAASMNdoWYYSr8hmWUb54ntt41nBgssKuWd7G4n9q",
  "key40": "3Bf2tjJbznaWtzKWR9XpQrTAUGGEYd6NV4fQybjGGYmEFRW6kECA8qNehqcNRCRfmYSJvQ1KAa2AD7wdXYzpYHik",
  "key41": "2rha2vRnGxAQW98rmbzjnUpFPnarbChuLPip4H4ppWGWU5SP2avkyZTK4rpiYF6zn1UGd5YZpcacc941CAqrsGaG",
  "key42": "63PmA6q8s9348ctmwf82N3DH1pYDuqUsk2u3zQ6Qy1WgiwMYGxZkXJuouVPM7Jmjhe8T3gPto2xAWVLyYPW2Rip6",
  "key43": "2xruzi87szpJBwPKtENAdVNkkG1Cc4iYDSwNwXvcPN7NKXipt8pWtZywDBqH48JvdSnUePVgP3zdS4XGiJA75JqT",
  "key44": "3Ddf6zsaew1kuryYewCvQq5HtKAosmZ2rD6pc2oPFwhAPoNVGJzWUhadmcBCu55wQQ5ej8xP797SMuS6D6FjRC4H",
  "key45": "5PQy7VrAcxTsjSaKdECZpXVwXZNmBLd3xapKbTn7WwT56wftUcFroXmdmcdU4nf4Xjh2FuYpv4D4WbsZppp6iakc",
  "key46": "5ZWKrRrfTcHh5Bf56vRdo8pvAf2EbMWfKoetq16E4UTXnSxxNEg3YQFCnBmpHxj6GohRoUfLz6tAa5bz7gpcx9N9",
  "key47": "ayjhdfbxp6kA4ifAJSidAh87H6yrUwwXGCLuumyQXiiiBV91LVQt2x14iVfkzdBWYnLLRrEzxMvsh1HyA4RaS1F",
  "key48": "4BNiXUZX4yBdSP1zzyn3XDFhL343CvdjXTc8CFLUrcqEknkzQ15V4T6GMyy9AfuQ5vUQJjZt4SxF6ipXCE8F4Uq7"
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
