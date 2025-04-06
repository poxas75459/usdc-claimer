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
    "TaWGDbfyLYDpCgejmiSJTyeg98cy3fZr6L7D7Qycpg3LWp9wP8PFiHi14DKTAzxRRiag7HMZNATTt4n5mj6B5b1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srupBrQQZKFMJMZhZRVy3td97rtiKtEzux3g8ruAnn9NokeuYHDJyGrja5Dcg3KuMnv8PwBB5ZuT832uEEM1RpS",
  "key1": "5fwebXir9HRPT7qytXqx6Mk6S6NiAK6cvsj5snaxUuLF5qgxPFoV4MHSYaVcP8gv6qGBcHeURudpW8WnwQcE9giQ",
  "key2": "49gc6iiCLc6ysHL1MXYtoNX8VGPxPLNudiAxJgjvJrUg43DDRMQL7giv8iVWgvChMmS19YVMwZ4XKzkKqPacsRiH",
  "key3": "5Pa8xntAUPdcpDXQTyscsGc618sbDb8KHqgkUSttCrPYhhNyLNJQW6GdUv75hZ6bXuGuT5ynYB4MHFHPohhHnLEh",
  "key4": "5owepcyNsRt5gjMWFKFnK5HqamEMqc4cduthuL63mgkNFACutyHFTqs24iHs2svnVCChiXen6yRr8GRyCNzuhR2E",
  "key5": "mXHS7GmDdvM5ZNH24CiqEyHTH8n9WH7nigzZB6yBRkte3rsPJUXfMdxUGGGiYbzwQxFPD9TtLgkHsaX7eHaUKC2",
  "key6": "37kL62DgVY9K3kHRgpgPhDjGDC9JS7VF3DT26B2BKEqHFZbJznZvxhypJJgzsopWTryhVJ7ygKn3Q8euGJ9J1QG3",
  "key7": "4WdMTH55f9yt3kdkx6N5kvectthqj8ZfFbHmBFEaf3JgF41AxhtVUVKNvPiw31kNrE6zRVPSvYoeKPwUkDKqPJeY",
  "key8": "4ToyKHdVp83Vxkqj57uGHzR7cEQkk91g9dskcsMuBPGMsQXKAa9kSRhpj3PCuohrWmfZJVZ1qomPidu7td5j69p6",
  "key9": "4uHnek56WKcLiuuDKp6kmgxxS7GaqUnkda1tYaVa4WgV7KU1mFr1yS7HF93CedGUGoDpiCRNtY6GhXGMsYyqtMy8",
  "key10": "5bYDH1DhDEL6mDZHcZr6hDLoK9kZxkC7by3Hu45tAZvLGJVXoct9avJzyh8VS3kjNd3WcauwK8Bvxik3HmdRfqgN",
  "key11": "3DPX6i9F2ykG5Aa5EEGLo2yuEMT9y8e2wQu4hsSSw9TZ1HKwxZ7n5AnU1BkpzwfoZvHB1bV6NpUXQsUEVxar1xzg",
  "key12": "29hd3pUEiYaRJaXWLMQjxtnzEFu7Pvc6V4hGM29oBj6LggMNaVALAXUNxSY2wgFJLoFQ9rpmU9uBZyozgSjFeuFy",
  "key13": "2HxQ88fs1YDyc6t7eeEruwZAL1jas7gjswLcWEEu5z8TAM9DRyo4AVs7nUg7SjtUAZyb6mKXNcKGQT9EhPWTRMzq",
  "key14": "5T7D9BhaFFPNRRGM19gwWmATVnhiJqfBvJthiqQmZEzsobxPfR7iCDYhGYoGfAuHCSgvcPa7V9FtX55fAnN6rz5i",
  "key15": "5BREhDr8w4y4YJPTR42v5krZQJiwttXhzF2GUuypSL7KAwMpayXgyQjXrVD4CQnNMwBMshELiZ5dDJQYdDnHhr3F",
  "key16": "59GXar8bozXK4oZ7EJG98xusGYzWgFfKvoPCQywag5ETE2rfN6Y4wke87aidRqyVdh6nQ1qDTG2ccy1UXzLvAUPH",
  "key17": "3SYFKHfRjoEebWhe2dTFDt7NCBL3LEBxU27epbZCjx4dzwzyEf5KvL2XoETL765U7nY172c2v5pQ4ZHwd6mS75QY",
  "key18": "3spFCfSHomVmrjT5gECFLK6wfUaZkLvfhUMHom4cq5guQk5pSGYoFRHKRUiiBprGH9mqamuZFfQrmrWHrsAytfdX",
  "key19": "3cEJEoFn1KjksJmjSst1HEt8q6vYiR7pMgMrKZEm5AWrXfevhRLXgZr7qU8y2TQWZTGDCtJkbMDv2sSX97r9Vc77",
  "key20": "3BKF4qGG8MzYo7nbbgETrVDcZG9gKnR9T2fg4pLBL2UdFrdYkTSifphwGqWavpBV97e7FEYx68HsDWXCbK5q8Nm4",
  "key21": "3ZpxbiqFYTBnPCHpEvs9RcxGtaB1Q83avcvLUDSuTxUtkjZ85iqZYWn6ECVcHyFdxTWkJe47FMuHfrFghBhvRiwM",
  "key22": "2mKC7S4HHN4Mf1KKtaHzLTTLodc2GiXk2TgCSCJBADZ3DaKkU6kRn2VuWgye6ZKbMwjK3wbqiJrST6a9deZt4sjr",
  "key23": "3WXr17MJA6TUt6j3hZHgziTwB7DREibfaizz3ii2cKKh7rNT1397aNZLfAjUFW3DJ2UG7uvYtib72CGdCcgDyNwo",
  "key24": "4xxdGnJg3ZitanoyPMm69gzTCUHZDbYEXRxDybEDBHy2wmPUV6g69SPBAKC5LqspiqtfQ9QojJpFbLVwWVxZVye1",
  "key25": "4rdhaVTHCzkVKRsvVrJ8PiS57x9oFwe439RnLFxMGdmC2rWcRyD6Agx5cSbRpzkpqi7Zo56oHJQ6jueozP7WnF8G",
  "key26": "3fgDd91Cgi2Uh2rWwJ6wNkjBk2F1uxKy16F6QeyctTfvviGw6t9vLFCpsG6R8hansS2AYWVY2g6XgenSN36nN5Qq",
  "key27": "EUn8r15HchH4sS52iWCZxgoQQV9pUvDzuRvw4hFbfukDVg1UPVcSSBeaXtMviBzdW6235v16Kxm29jgiHGkpc9j",
  "key28": "2F9qXDo2ZRtvRXR8TYSrfsVw8mMJTBfMAu192TADThW3VFCCnYvWxWNBRvvDMwqHmkvtqe517scEZWydbrA8Yi1M",
  "key29": "5tPARjgueGWA89LfiH6ohf1qF5MoXCknNyfN8mBv1uQc9m3C1f1o8G9cRsV3JcXGRmRpz9vfw8L16MQYvxwLmDVy",
  "key30": "ogGs62YFSbnG2aXn4u2TrtPSYuxsJSfkJVX7AdGiLd85kya8BGxu8Jj6smwqHU9BS7sePEmKri6Uh9WrF8cazM4",
  "key31": "34ipApFrmaR3qH7nFEEvtgCYPtyMgeWDjRc7eeaCF4qQa1V6oeUkTJK4WyGeNFbMGGzhdBaPHhxj8qgKt2cvap7q",
  "key32": "erCctBGuNTzpj1D9NSH9KtzMWcbrvqFRywbUkCradSQ6f8LxKnsNwEMiWA5NiRHRBDY7PY25h2nESEH94WUjxBB",
  "key33": "AqEmNB4FxAWyVUZU2hFWX9YSarFDMn1ddVRizNtep7Sd3owmCmvcFqMX9TVtQBEDkxHSoEARzmwKgprkBo1bg1a",
  "key34": "5SbeQb3CC2NU5THuCzsP1StydaytBKKVfGTsbcAxSKjDbnkJ7yNGpqiBVf2iTJAKgJNhayVE58AAhLWUa2Pih4T",
  "key35": "fo2wvCon2WwcjauzVV5rYknYHaMYY316JZvTda1Tbeat5hgYZJVvvwX9GXNrL7FKnyjDssWiSibzXdLHqhr4KBu",
  "key36": "2KwnHLD4bzbDpmoko2mQpQg6LFLFPZ3HFSF3rgFXcYCBBd4E6vc5ZaiouYAoepTyvQEpQqHDNDVhK3jcQMvtwt6p",
  "key37": "TA1PpJKJGCPB85BuaMszvhA27aySzwx5qtANfnXv7NHLUZCDd388FVLJUcpvnQayhRB6BphuVoKTBUbza2ugveq",
  "key38": "adUy5Kd7WHr4vp8KAohtPEUpKXSVSfYFA1QZXDpmZA4jWiSVjYXYYS67JzZaTebKMYVwkZBQCjkFP9ouqzZVRKv",
  "key39": "Cwvko6B3mvC61d54bfq9LzZhChTKzXrf2oRZuZJ87b5dMwi782x68rPHyCEucp7k4eeKpatWsYD3DxsZYajbvSm",
  "key40": "2jRma7EMaTMKUEBaJ9FviEjxBNzirpBfgkpydqqJ6ucCCmg7kyj6HWwFBUBx8JNWPFUcsY6s8VCDrioDaiZV1JhA",
  "key41": "3ziAdUkcddLMSEd2FLPK8RurUVbYoX9M97NkMDbQzGBpBTE1fS5WN6GCtPbuuTGL5UfjkRDoJAc7bRz3awmiPQvg",
  "key42": "2aGAkmPcHbNtN2AGtoKM6p6cvqbbrjm22apcDT4RDMujiVfgrY7WwjpBLGjLNTXPeHakiPvVELogmzGBXDTUy9uX",
  "key43": "56bJJsuzKqt3sACKm4d4bDWova3YqB7PUXoKdsAcLm1PiAo2sPuLf6eeYV9DA8WKkDx89zdyumRzSDSG9tCj6H36",
  "key44": "4rXJZ1YXhCQFDFudjTeX9jzxX1eu777xpM2vdieod5m3JUxLpFfG7FE8n5A9pf5qK43hF5XUPj2sA4sdT14w6d7p",
  "key45": "2fFyQ498GiNizMxpr9g3LEq7A51E3619WDUEUQ8G82CYTfb6YcitPoqfhDPSeXULkNunoLtrvBxU2m47o19fUp8J",
  "key46": "4aZabFFY8Adzk6eFKWMN7WXeQFYFC2U3Uy3tfMRXkXAMAc5Ex8joZwLknxWhYZs38wk5o8mLvcYTnJTy96Gqkb9U",
  "key47": "5LnrS554FAYRRthJ2GSkFcwH7RYYPjM5AfvPamcbkDW59vjqKJfPkof73HB51NhwvWjKCicZUkrMiGJVaUuxRmMX",
  "key48": "5wzGhEaSLKyKbgx3LPSFUs6yLR9jiiGA4vCjPExyziNFDJYPkcdGnEV1fqyXw6pucJKodXLdbGfW2d3DPkZ4GBKi",
  "key49": "4vFuDGzLYMSNdqpYv3t3d4vV1Q1MmZ8QTX7MR1CKdrMvR6vwimdQ3nRgGqrrEPDvtzYTKujQqtvaWD4Ew7e1cVpW"
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
