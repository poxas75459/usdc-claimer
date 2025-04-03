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
    "52jWf7bHaFmjZqy5pxTZe9B4tUbhKJdk59asQ8deTCrfTRm2aNwtqygHe69pRaVh3ha1aRU5ybJfVLx9VuxFnLPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7nLUFJHrEJu8TBGBMTmkQrsfEBxdx94tv5qqczKxsa8awBQyPJWWiAEXjb71Y7HYR9YFucDWKCXsag2PLXDAEd",
  "key1": "VP6CAuwAizyqj8wCLfaziK9s6yp4ZDjio5Q3WM3F8htc85mWAzeSzxx7eQVmXagrBD33DRFzBGQAqShaL36mQ6K",
  "key2": "3MFAV2y5Kc4vpQr4KFasvz3PLRme8sjE6DiAuPkD977qFQ91eqnVmuPYxTggXjCDcJUx7nuUhX36FpiuUp6yPyEE",
  "key3": "427bibDmpJhV7UJDGJyLkTphYpAtYaGuoe5qnz2XdYLyuyxCBVR4cyU4rEzMuWhGnFYkqP6tr49qTjXJZvP5E8kK",
  "key4": "4S8gH4cPt6j7oGbtse6ENWy2BgKuuVgDWpD6tYfURe1niPXsZQoRUtKsSWmjNDJgbuNPD6HwiQWH6wepMAGM8xDc",
  "key5": "3DTu7esWn5no71YJh5xMypQNLHoUTqjM9VcLYmEQHbevQDSHzDodLJkGZE26hsEGWRW6isGetzfGjRr5WacZSef4",
  "key6": "28mna4ah9vG4Cqag5FVwP6vxL15CoxQ6WGnspQvXSBQshQzsSa9gD427AwghrKCdyXMv2LZUSTcs9Ekf2eLCBwfp",
  "key7": "XXQMuTHDLnQRQieS47JraHd7edVP74TVDctwAdMgr8sgXPYmCxExqKiou8rAcTu2S5nbXZwZprzrRQfXBmh2c39",
  "key8": "5K31wj4qUojQWyDLHxiHGzLk9Zp6zJATdiyDv9Li32aKjqqRv86LFFzvLUwnBu9G6vjUcWw8rSHhgkLb33nTeAQo",
  "key9": "5RmmE32hhNCvPpmMxtnasWbpCgTZD4EEcQ2S11GEth9oweshizW2CxhbrkusHgzaH2ZJ7gwo1RUEYdweoZGVoCpX",
  "key10": "67PEEHc7tSseQR6euYzDhgm66bumaEYHtguvyCyHVBJm9DHpGh3V8vjG4CwCVw4z9pmF8Ns3FQFXZ2Q2526rbG93",
  "key11": "KnquR4wks3L4JTTuNRv9UoFi7j4eRdT7eZDTQN9Dc7SwSCXiA95qpk1rzURgKk55Ckt4yTcbi1iCWoaqiS9zASc",
  "key12": "5q2iFot5i6XxmGC2EpQgMBGgoHTTR5VYLpvhZPD3qQja2ybEFz8yXyKnmncqVj7d7VY2wi9zK8DC8MKJuLN3Q39p",
  "key13": "koJd7Ukv7GWk45nwZ8rCAs1KGcUqhpSuhcpDRrGBUgEDdanVNHDsQSJy1Sm9FQx2hZgiLMcrXLXJTBdLBB4M3PX",
  "key14": "JuChFR5wEWHEy9oJNZTa9xxYi5Ujf2HpFJEoDm5raxEzh9UnrD97Z4hL77vYThWju1XhqxLcxGVrEgCzn8WbUEp",
  "key15": "4AAdp4TSmA2jyWqtNtThKmbda452v738AYJ6FAxGdw4fuGzyAPWsi1n4v23ZkyiqTM7qP7iHk6Nd1bGLbogo8fS4",
  "key16": "2bizgJizQZNkobNEFUjrD9oPMjAUXnh8jQBTx9TqNLfdKSLp7gVvA1EAfCzfQZiWHc8uTbMKxJEpogvPQnjnsEji",
  "key17": "dWd6TddKN7ctiMgh1kni2bNff7PtxAiSwt6AjJDhkq6D15wJti99tvpPcwj4cSDauXjiMW8yZSrMYidAmxKapd7",
  "key18": "2U7f4GGpgrqzspmiNaXx1UkBwrVBLdt4XeqaAPkr1R8g5cFjsWSGtGCkuFgeYCAHnJCEJn3f1FLtzbSCpx7BfLY5",
  "key19": "28ECEqsFN1E4E8uxJ8DbmLDJnE1zA3QXNGu3eP5UPD3KAyhJpoxw9zVDcWcuY8DXY6yKCdSvddVzu7EBLfDaM8p5",
  "key20": "2Fh8Tbd1hySKV1NSVdkizct2ioP4exeMPeVryJLXWCLHYLiyRcGUotAqvmL11dTRyNuDpNBAyVWenw32i9cqMYCR",
  "key21": "wH7Ji1ahZJBynUCbNfvvNzRdvQooJDdREFbtvKszcvJAWKLEnR4zriPiypVNNt4nHXXhy9ftyCRnrmMi28sx96M",
  "key22": "3JdY5nds42pzzA1BBkCXFPD8FV5NPtqxF25wqNKM4A6AxnPjS8SFxT4Cc5eD2JNd9MP7hYpJUjc7MiGKULLeR5gP",
  "key23": "54VjUMdEzwEzU5oBgYesEXEvhGAdXCZZ9AoyjaAH4suyU8V3rVLziudwbqGmD7bBWkNWagDDobN4ujGS1PEgT47R",
  "key24": "4qj5v12DAHC44AHndYJcgQCbdAnHv9KTkmHke6MXkXQix7tVaAHLstMkgzikt381qZoH7fm6daUSkQHAMuDmvNMa",
  "key25": "3ezPLjcw25RMrGA3tqdQniwEiHF8e7KT4XbzJJbq75fybDMnF7mAPr2PJ1HNTyTcJEpMZfzuYu9MYeVEo2xQRrFb",
  "key26": "26NhsodGnY6iCL3xm7hJLsKkeEHBXGHBHsiWZyt5piEHctnDPLFotj9MCxSfYoZnCML68uXJeoHheSqBbmufK8XX",
  "key27": "5PiZ645qcJRzjksueh1RTvbkZX1qVhKqEa3rnYrgRZAzUWJPYVuwh3G9CpxxU1yDwv5oTpqqoodxtSmcSufc1tGC",
  "key28": "Dqb2iSH1t249Kz4WdDFZm6pgRuVxcHMAHWZFWvHuwotHUVmHpHtV8fGHb1BDNG2mqffNC5j675srGk1zqVxn8MS",
  "key29": "4a1dvR6Z5kAVMfumYBgh922UQAVHScXxXmcbrvVzK1QrypvbJh78AJdktgRHmAFYGtKobuEMa32dTtydTSu7TfPB",
  "key30": "ZqMRoZuaVDM75fnk4Nc9tiB1bDenWKZ6GGfEUx9NxR87ohByUJTmnHYUPBinyPYwrG8GtQgoEdVUUg67CAbpVem",
  "key31": "5P5fDTHiNYXLugZ3SectxNKJ4R25BsuEw9RxtYbcvEfcnZJrBhBAnsiT3BK8YtiZvHxiUApLaRKDTU5A4N5pFsTa",
  "key32": "3ZeayZ4bWaDShfrmrLcAXoUGCYfJb2w2rWUe8h8k5yAF1wXK82ggcFVBZpSSoEUEmyitbpp4q38bpNf1ParHhCYc",
  "key33": "34Ckn8cP4s9AYJcobaiTLEUhehNdBzisoQTTPkvnMbrHmPPuVR1HCvrmDUYEGb8GGdBZBRWWTWaM3fYp2zVMVZuf",
  "key34": "5xuvHEzmhkH6dur4C42Dj1ttK5BwepGcbhnDkDb48YqscCRSjp13kG2Wkiot8mjMtQX3DQDGEjri83NbSn7jdiCk",
  "key35": "4KS3uXrWx9K8mv71v8vgwbXBALqSDicSbqtVRpsavt64N11zNg6XdyY5utdimSPn7sxLm687dxdLT4tdwPQLDAn6",
  "key36": "3BCyEHpkR19JM2ZTJUahZduB7zxn1moVf4eRfAw5T4F6G8boYBiqVMJwcghPP9D1nMjPEDjkTok9s2tASF5KBo9j",
  "key37": "4wwHiRJ7r8ygdEhQZTeEatiCiCMXEGcpvcpm2Mo3Qtk9bAQScY7iwrtimcPwgSoGkLACCKvr4ouGEBTQnxZtX48R",
  "key38": "4x1KhHZibNkQuia9hpFA1hc9inTPn7cZ9aHdjhpiCfW2rQwVtpYN2Y178YJgMze3R6wE4sejfcpaY8kddbwcQJzs",
  "key39": "21sx6WUu3DCW4FAhfsuwWp7EmkZoRQydeBNdgeuFA7YvkvcQZUR45JWDm3bG8WjMWy3sP6s6iCYBHPuhAdh3zjfb",
  "key40": "2NFJWhGaxSnE5YJAqZMZF5DoHBkoZNTZdbSzRMruyVcmBES7sdYQ4HAmCtTTi7h5MEAC7xvWsExRUkyfsQHXYb3D",
  "key41": "575LoXGymsu8NC4pWag7GgzYF2mWfe3Eikauiq9oYmqueDFFTGLCX8XfBWYR1meExbuNrULdUpuQekwViqzMKyxK",
  "key42": "5U15Bz3odTjUao3opH1NJAV677CeVuHhnoWarGigVxDPXXvgCF8XiqNai57awhTyD9G2mJC7vSL4ZSNKnv5N4DnT",
  "key43": "4wFEiuYQHKxahwTCwi4FBEJjscfcc7kHkVQSe1AwLUYwYGmjs22npsfZoouNxMrhD8NSrbwM9AhPohLoJZNAjD4L",
  "key44": "3Rt5FRjVwpEVuR3tkFKWsJAMn19KHHUr7PRhk1sH5Kd3wD4LsR2CPG8gB6NXYe8Vs39ofCo2SLb6iJUr7DtcNFXE",
  "key45": "37EPtP73XPWdp2Z5kiA5FihW9qSCmXqMhEWoMtbAZuwcVpNnvgS4FFMgJpbzatWEXrFfg6qY969mMMTtXDZQ9y4A",
  "key46": "2ThV599Gv6kNuoj8Jb3nAxmpdr2Z5oGLnr8GADsEgjPLTT2SWWvn5pBDTe17zSWj8vjUJjVvpKyo3tXGw9LxBUnJ",
  "key47": "2iKbUXnJeW2Bq415HuoHnDgKsVYFSXBH21aBHb7XikT1EmY9jqcSBS81ppgbk63Dm31Hy7ZaUGYXYkM3cNV2zPp8",
  "key48": "rVjef1w2BmL7rdA5TKp4qS7RiBqxs7GBdY15Z1FkKAPksDhVHJ2Gn6zyhg9qB9ruGkMgjHoKvh9hyQaMFtHMso7",
  "key49": "5PgfiYCmoqCuokZA1rFqHJNBynvvZrY6pP64bW2FoNRJt1Cb1sCVcmkJwe7Ce3R3SEBwgaB7U9ZyEiBnBewU66q3"
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
