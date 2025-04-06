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
    "38buvVSoCTLnGbQM66AwRmdaJVUoGfShAQACbT7SWjvTi2bYKsMjsTMTAYW4iGc2aNMy6boXahiAiHtkNGkAEPW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmJwaAz8oPtFw6msWy84g4oQ98wpyBkC44P4ieecujzHukd6m85hBZ6UhGpVHEjCmAywGEDXtcu5t92ETmipvef",
  "key1": "4Q8DDc1goiQTg2nWc6VmT1AsNB2Tyz5xZM1Jw4YdXXMhe21LLNxo4QAA2KSQKbGcX7pPTvL87MNqnVJS4NUkF6Rv",
  "key2": "3GfMWsN7bPkCHBDHnJ34niycJTWRfAtFuaGVTzy5ubLXQ5t4pL1qTqA5HH3E15ufrE8sZ26r5hsLSCxhQzzscgxk",
  "key3": "4z2mhU6cNYbxehfRiEa1W7FpB6TNe7CZD5NdyeHG9crHHgRWavLjsrbRebEd6Rzaoa9ns39fX87vJvXA8jL6oFby",
  "key4": "YMjNpgL1kX3FwFv3QnYxVzjHCJZibg4C42zC6ZvpgihghGR2hnKhxu6nKZwigJD61rXNDZtDWadeqkyEBPCXWme",
  "key5": "4h3vWAKUN8pHT1gp4Mfw6428mDLqnv3nbdLfCxJz77gbNxcpHcVeT5bbiugmxRHqdyCYG8wDK1K3HqWWWMPVSt8H",
  "key6": "5ySxBa5BdJPNni9gxEbEKB8Co3ptamAm9qKpTQyrd6gZTrW1wsdTgPxTKcskPd9isLAiWU263LQ9kNffSdGjpsPS",
  "key7": "T2GZZ3mugNf2WUKxmQFAGLk32VZBGCErSxnVKHUsCDLWNADTm1fJvQgGSsscaasKELeDLzgmpeV38EYxS41uvJY",
  "key8": "273TYiLxtYzr2PyffDAGbziAHkHrpJdwSURqyQXNMHRBYeC4zTNycnZn9oqSDE6Kffs7AiPTKge7zNAia6Waw1qt",
  "key9": "2SQs4M5CFvw66XHn75ihCzsRvBT8Ckag2z2Mmixr1NAX5VL4WTbff52rq7pQuCoJYEa7b2ctUU3jb2iapuB8e6C8",
  "key10": "2ExsJ6TySz3TnH673E8EusfQp3iZXbBFeCsj5xFzq1T97a8YYdDXKeuJpphGLudQABgyUtpBVVMDAmVZnn6aZJky",
  "key11": "4HtgwSFeKC3MJqkjfd3QzmpJsvKivEBavyypHbw1o7Z3UyLxm5QA4baxgddCQAL37BcQc4xLQWXi8buhxoWqpfLc",
  "key12": "2N3w67LstEPtx3KBTcBLSdy3HsynarHkiqP2ZbgXQDXAS6WHpx8tvoS3trRbUnxuvaApJTxnjN4nFS3U7TUZsPHN",
  "key13": "2Nt8itTpRzcaGVGC5UZEnDZJBTGSrsc5hzDGdtu1ciW9EZudpoTPAVHiiVTRcBM3NExcensZCrVjYjAYCDuoJ3Wh",
  "key14": "4NTJ76GyrvbpctBEUcu5mqKUgGe42nx6HJu5KbYueaDurxrqo1PvZvRch6zsU6MQ8kacR44P7xymhvcRw5X4WrCY",
  "key15": "463UrFNYds5RhCnXLrZynML19pQr1PVcvHSUZ2wa9uUH8JLqWbYNg1VZBU5DgqTU6ck3BN4F9mLTyaDkaVsciKgp",
  "key16": "2ns224Wymp46ScHXFXWbfrAXPWhRTpiE8q7F2GierPXdcJm1ppxGHGCGzAWDwkdYSxzVkA1PeoBtkK7fgmRHtLFX",
  "key17": "FCApKKZvSn8tSgkcBUVbxzm3eLHQuKPsa7XDhx4xNxG6VSXPNjQ7PdJAQoCrVdCJDEBaChUrEfAtekuZMmJeiMM",
  "key18": "XhC4NHSw7NSo5cmyHMgRQD6dBAoRrZ5wXZmebQxQTPp3539U5yDmqyXq8Vhw63Wz2EVgtRggeUZQniPyd7XUhUB",
  "key19": "bVT3teXN1bDKGPkGgNPexaLubEELpytYBB9Ab4k7iBFcageRjcPukpQHHwiHvKJ1mo8mWNcP94QHojw5qG1YbdK",
  "key20": "3jEQyficVbrDgGyU43SK1APvYnDbtkpAc1vcWnwas6SKZiTyjjVRzcQ7qJ3qw6GqjaP77wTgrPMtqLrbHc21U8vh",
  "key21": "pTCQE8kvPQv4UqzBm3RFaN4FHZXez14Y9jAgTWehDvZJvNFSfkVrhcWCnP4NGkCSSonv9uRMeAUnuHXz8qrp5qS",
  "key22": "5LQzNpSa3utrNBYkNX3SdCyhe2iYsXdif4uECEQq2cXtFqh3K1PQuLZcZrPhe5rtLdqxVPnyxFMSqKg4uQjjTpzk",
  "key23": "4wLo4rdm3awLTjxDzpRrrY6ahVJmrM8YR8u5TY6v3UBMwJvsx91Ju3DWBGHoHxvhPC6Ztw3GPr8AZWWCRYDtpanb",
  "key24": "4ub6t74597Adr2hW8E9hAWfLwvSyiEeYR9WUHTaNdxCfmbV3RGMcZZPKo35ZCqithphKaQdyudS1BR9Wqd9apXZk",
  "key25": "2RThZhTBqoDu2CxHE7fGvurfuDuuADHXE6xQYZqQ8khaZCXrxxWwnfnGBRLT2yfifEKVF9b7aAYdhgEDDaSEZQsq",
  "key26": "5Cpobn831Y2HgMcMsqpKvughrgVHvPgCc3MsNwDJJpBaxbXpSQ9XnDkgsXasfuhUDH88UHSW35rv8EMFbUPq7H3k",
  "key27": "4b4kssjoFNVgaFSa5RKWSKaMSx4T24GJz2s9aFJeJb6yPJ9q9RkPWquhitgbAWDgLr52MVTPqXQbxKVCsFS38v8V",
  "key28": "5YsuLgQ6mJvbsfG4aWvCZDnYdQdtyc6AMUobunkyfi26EKts3mH369fNvqGA3YBmWpUYkS1mh52a4eLJLt52hkKX",
  "key29": "59ht2ZV2n21Uju9yQt1B1m1eMZNMsqxCrn1qBzvDJmL3LMb9RxhRn9EYrUTLWhxWcEZL1fQZ77rzYm4B91c8h1ao",
  "key30": "fvghy3bxvYpsysTUyiLGkepaSQ5yyZhg1ipT6BbT1uigL3vgYmkEH11iGRmD9D44yY3x2qDwiQdt33sSDgpyjSu",
  "key31": "4JJzamn19dRLDymMFvmucf1oRnLazuwWM13sBUGYXjxEm2it8hHaGhFDrFoMUEJ7wGMmaDvcTJxHecbmvdVtsHHF",
  "key32": "2Txdrr4eyqBwzUCmxeLtPZLptw4RnDuC1Tu5Q9sTrB2FC1KuBrtLHnBEon22WmhEZfxUgXXbQwVdn8v4QsikbneQ",
  "key33": "4NJLGzjL3D67jPUWjQxgSNxXH4fucZdTUcFr9BWHhJhi2xX6medQ4MBGx5XMYssGbRmDedqaeKs5wFH6NPQDHNdX",
  "key34": "3uDMyiY3wsqj4yAG4cYNbYYdAanKuQVFp8fdo5LR5dewu4xacTSsuX3go5jHWa9MAy1iuZAjEoVyzjzzWKKjM33d",
  "key35": "3afkziDJiEnppRCAeDa1dDBkUFqpmEomi92JG4Rt1N7nrEQ8wwYMFgYDpkCXbvbLquff5G9v57QpjwNHmmfvnWyZ",
  "key36": "2kpLfUDNJnP8RLbxyNSnrV4Nx1DeTurF3dHfFQ3w4cWZAFGmE6TrLnP3cs2aYJcSa8Z97SNbEQSNp23yGD3dr2gs",
  "key37": "2ca2jMHrfBqAjz49j9h4HaLB7QaqHMmd6B9ax4rk3oUZQV3knm8Va1mG2wZtH9y7bZE7ZFr9NfNjnPbA8NJZskk3",
  "key38": "3GvqdZYZrcMDFRPyrvyr23YBHfrdJSo5Ms1BdLdPsm7HeeD7HezECmVtPeXppAm5Ckf35JcMqzwP5g84z2br8cWN",
  "key39": "5yuYJTtKdEH9YfuWUtU6W9qJpxTFL4FttoozRwJ8mDyjkf7obHHL9NtTHLotZ7U7e1bdUWWcdC7TWkBL7A1iJ9qF",
  "key40": "5oSuFXocHUi4BPR6KomNP2Y9CjF4Tobcoz4quDdAKGEhUn27LFzX1xEBtfsQU4XHMbRzsPJsg5rVDgKSoWHxksZd",
  "key41": "53TCLzQYx1W9D4f5VMzaaoGbPE2ue1zno9LmALZ4QneApaC24Sn2idAzUakc8v6TsrHQ6CUc4KphtNyxgjvyLH84",
  "key42": "3y9DEcFnrwEMJ7zqETEcwkDNBxYr3ktojEAQLEpRCMrckuYEQjswGtDrM9aaeBTA67q36V36SYBPRLBdvajjPxob",
  "key43": "B9gqbFoURK7STgBUr8ykmAthkRyWBWXKYnJcgmPjBj3m9dsj4TeWqj6HckiuKbaqFeNhvgivbbKpv7hXDqzQCyh",
  "key44": "3Y8vxZq7Qk97FikD1UsNfTcb11SHMpDpiykjYuQPP8XRpcn4nXMcv2qyFZ2oMePwKsjYwFwWQApxArFM3W9h3RkU"
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
