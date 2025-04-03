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
    "4DpLvjyBqRvuq3QqqUXnPRLp9FcbrwZpuLuzCW1QzwBLpMervPRTDMktpU1ZkHo5YPRGRDPYZazSUJp4aq4fHv8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJjFe2JFE5fqbsN26EWZrdEA6zNrYCZVbf6hnQ7PL1bQQnpdwi3nBAVTDoKKdWu8BczorG7YcRmJVCwpFwbzgEb",
  "key1": "3vosiPEmWunNqMiCxpuvzt4HebxwqXXvWzrK7TCLU73tVzL9DkHLosZCHyUH1eXGQobQvMNNPhAt85BUAshoWge1",
  "key2": "3BnGeGMTGXucT5CePvuZESPF7as14LEK3FKwqwM5xqZ2pWNoTyc2dtdJiNjWW5RSnqwPtaUEnY6Qvpdc3FkgWZKN",
  "key3": "2Mg9uswZWYvxcao4PxbryHrEVJfF3vhWU1gVGDtkeaA48AT6N7ycvXBXBWohv5AmFPmwwU86bJBA4aG24XDiTHWC",
  "key4": "3JgDZB8ibrQmuK9padp3o2QbPzcV3md9CpwnYyVRktZVCBo7F7NwVqHKYnuFVkVk7Q7PUBgsmegCKWoL5VyPSvJg",
  "key5": "PRUpqC4xdWsHP4rcoqckP53MPNuFwcLpKTz6FwY6vu52MQN5WqFJFPXdUgsbyfFiVi3gqi3qipvPYP2WjCuuNDi",
  "key6": "4qL1GVoeDAmyBwMRQYYqG7MztH4GX15h6Afes6S5NPspLtwhskWnS3wK97J7BZj3QaqqzzLXPKSLKhbRuFH6Kv8G",
  "key7": "2AbAWR9pdDHpyzFEWxfCHTk8fD9VYdrnzZhdWgvx2LHPAw7u4UbHZg7csLTs431VUPU6bVdSGLjs2v7TQ3LfVDYw",
  "key8": "5ewzm3hvkcaiH346k2AKNweiKchRu3XCyzR2KEFNF2H23ZMEbtFdR8eAVqgXuonzcmvF8bciraqWzVvQ8HJrBj3",
  "key9": "3URgrWB2KMCGtFFmM2fhwFyAokuxtGtn4gmQP5gELJ11a5ZZrez2oNWZdakxBBby6avguZck1QrHQ4AxvLrR5SbV",
  "key10": "5kXvNepEDoN5PvqtHVW8VcL1UNCdUPMQ1hvykge7xQh5Xwbds8RK7M6stmsmyf7zt7rBMGUabDmRXcm86vjDnkK1",
  "key11": "4ZbJ3xyqUsWF8YRYaFhNTNM1pULQYFAhPxtZcGFP2oxUkU8aRTyL8kjySHGK3jzw2c37SDBTuSnBhV1o9wttKiRP",
  "key12": "3X9Cm32HBQqfqoM555GS6FCUtdoMk8py334NNcYjAWsh5tUc26axBobPdez6ubtcWWWoX9RNpAh1cMaPc7QfM7xK",
  "key13": "Bb9xXCSnGAbiEw7xDVv9YQTBeADS8TcqrtBU6w3U7cp1PhJ5p2i2H4EkYm6GYGeQGkYwGM5njV9sdt8NHCoXJFt",
  "key14": "37cxfJnBwynmSNABcaAVHAqWmCd4rScacAapebHQiue9gaG1gamKYUDWLUK8dW1No8hTDVfbNJzGN32rSMzcqdQt",
  "key15": "54iZhN6afk63boutMytbRBkXMJBXrft1YmgEVH8W1XdRL8UJoDE3f9gLVDLoDtDsqsrjFzfAafzvNi6hCokymHbG",
  "key16": "iVqFmDi4crJ2Hr3RHQ1aTRQ6sS8FQPBr8VoKbBuNz1eB6Wdg6kabKpTStEphATTqPAE4G9aQKgzGNXJLHypyKP9",
  "key17": "4n6tntS21BztUYHxN36fC7GfdFP1oSrcq7fCx6Ls3XCTM7qtHzT94qv8sGQwPoABk9VLjvLnyayWTMEvfs11vCq7",
  "key18": "4cJsuMSk1fwS3x6oZcXtBw8buGANxfejX7C64H3kbJ9rpegWqHcY1RCnVwpgmx1t1a9RWWGCeKeVwxZSs6o5Mkym",
  "key19": "51YhD3UvbReuqsoUSzcKtZfjniC2TtbpxvtyRiYLhr1WPR1W1AFG71Eoih4qWWAa35S7o8gDPEPXzkDSQWyGbZte",
  "key20": "4iW4tU2dUej3YefdjiYCk41XuLPn3Hz5i1YVqUFXhcKzJQNyTuT5g1y8De39yRqrzaw9m7Ey4P6yEVAbzseFzV6Y",
  "key21": "2cwJSPqxqHEGDgqHBSZd6EmhhdcrgTegxAXVjYKrd2T8BaAXHRZzgWia1ebyAqTGpmDDQnKBCn4tdMZrsFe1CYeJ",
  "key22": "2ugYUv9Ebs3Mcetwj6U1jZB2GB6fVQnvZoz337s8iKemn5UqQCsduWdxoCJqhRmekm7kjrvjcZFHJ4Hy6oLKoHnL",
  "key23": "ogKsoXGWFJpvVsG74m3dBJW3oJbLpwdBrzuZHYRGKSkeaVbh88aPZNaLnJytAkEiPsmsde7PLeFZyoUa8utPbA6",
  "key24": "4vgwMVoFWwZEwcnGvpRKvQiAUghT8q2bfdWqVXwFCUry8dDbqrqZuig1Wb554fR6q8voZ8MTr73JSu9JYBMvW8hT",
  "key25": "3RivFKtmiDNpGmeMfohTYLxwh4cM3XmovUaN8mFVJir2o3Npbv1D9jrucDBuYvGNEg8sAEK6QJQB5mUPk64SaMW8",
  "key26": "29RPo6XKaEvEBXnLXLaP4DVrxKhJYPJfp2sMJP7MmeTyhPhMzDLKNnVm3bkLP1VckiH8b313YpS76sQMLzSKHXAZ",
  "key27": "4dt3qnuQiBX96ePQKMPHQqEiy916qYoSg28gsLygeReQYAkbWgvs7uuwzUyxoDrsTfjW7Atdr4vFAw8Dmq1j8vn9",
  "key28": "5szKqQeZYyP7fuFhjku1zeardcsBF9AgjJ4Sgcc3XwN55dv8gJmEUZoi58DAM5Qy9UTikCKD9vcBLuU33GouYzSV",
  "key29": "24GzvypSeEisncSpTxrKPTifJoPn8X2y84q4BbXf6u28Fe8DYVFAnJ1pz3x3n7JHm6o5VJYi1gpi3yBEtDUT2Dro",
  "key30": "3ahzcdCE32Z9DHzbi8ucKgDKjF1rWR6e5GaA1q2bid898GxkGjGqpmNSvLYL4xJZQPL7yr22Ni16KibEFoBUNQea",
  "key31": "4ATn7EwdY7LFwhfYC6xGjZdi5ScThWdHE8Z7eKRUAkMoCtiFEH9RxYAmPnydP8K1Lwx2KuFp6BYcMuKXoZvTxHwU",
  "key32": "QdehiWApX65UyUFpdNZPhi2vJgRvpn8pNoz7QimTPzoLL4avFKPnGyM2ZdNUFzttGUTpcnzm2nLEXvDhNGJWuu4",
  "key33": "3f8DuazwVRbPo7RbXRJPs3QELuWn13k7WmfNvLxBRAyFguofQfz185XL2xbRABwLSnnzb1wvKioVcpECWjxSfmXo",
  "key34": "4u4UXQdbuKP1qe7npZFBoKAAgjibDV8mFPpmw4oNk6H4B1X32FMkXXHsqPgkJD2x8bc6GwC39xVwQDEs4V7JPB8j",
  "key35": "2uQBfMc2oS4XxfUarv8TMNmbCSPFumMkA1bKwteaADJ6uN4fw38Eut4fdxJ8vLF9iNqYhbpGMimtE8H31ug6tmQQ",
  "key36": "4qWrXPoS95yEE32cHjyV7bruJ66UF7ZG3htwTRfKuRNk9SWaD1AF8Bp485zco1oPpvnPJsnHrbG82X4L231hzJhA",
  "key37": "42f2uY2jvqBZdmRR4AusxywqcTahop7C4qB3opB1GgkiSEN5p6W5jkHXstKyLTPBFdhBBZCMbKvk7cSZemx9G7Tx",
  "key38": "kGN7kwf35SCzhuweUSHLBRKjFrTjC1c4A6rPgLeUMCMeJZP7jkahp2Q4RNYUE5taYyPoj6jwrVU6GHCfqQ6mjXu",
  "key39": "4RdPJsuzLLQrPrUvWs7X63UbHbQ3nN2rBLwYqr2dRYwGFDFSmEByJThQ5qCA47ujxUMeSktfrApTfHD3AanBWPvV",
  "key40": "BNixyd6GkipnxGyn6N8YFXwJt7GKscSxQ9NU6dAy2VbBdjmzRNPjQFdsFJX8bSTv9fCuKFqZJ8rHjaQMizzfW6S",
  "key41": "CjwnVoQxAdHdYyDqLSkVpWYqbvuckPC5ZPwi5nm7k7HUXkAi9MPA9bcmDDeHZZE7qU644j5AksfngCEuZZ6LuRr",
  "key42": "2n367ZzGwtdwBUhUQqj9airCUkC3tHKZFU8MMNuvyPvPYA5te4p6ohM4wKKy1bUHb1Gcx1W7gNVCmi3Y4WaZGpmp",
  "key43": "3xV2JM9uoWfRT5hbWN9paXRdkZ8g6336GBTVZADuo3oXv7k3KT7bFRLmVMkra3k6orH84Kj4fdGdL2X3MrKP4m95",
  "key44": "5dqCwwkubmWx7ERXCASNXHeq1JVVUzGHg37kabSeNowTqDuboFQ4tV71xT9DatE2k2hXXCs6XuLXLeM5B69Dz2tB",
  "key45": "2Nhs3bXAYpGFCeVx9how4KDxY46Toi3uPpW6wGgYa3cNkvo2DVmsUhfeEWHhxfyGwRX1wZA1em69qBZmFNurPtCm",
  "key46": "4LS4ZDre2yJq2GcUzEEtAbkNjaPzYFTn8yK2ghi3Zqu1yUA85jzS722UsFjTG8nsDFHdcmGQoGf1YEFrHE94kFmM",
  "key47": "5ViovqnaouC7DWgPZwmBGL2JPjszRGwV7yd6kG61BJumvZZm4gRu1WSEu7jbtsrCX9vnzLWBVot9oATFrpKNaeko"
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
