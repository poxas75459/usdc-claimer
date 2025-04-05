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
    "3dWP5Z3K2NUue1LmMEGBHtP7Jp8KDo1AwsjyrdRUWcjf8srkseTtCor6Nvtk4ib1SH1wkMmcncyEriJkgo8VfT8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxGq55kAB9kzooKRYfkHmgLv2StQ3E4CtMnMuoid4mvXZnKbCRH54tWTik5uckUYSeMhB2YKVV61TTygjLWWemc",
  "key1": "515bWS6eP27QfBtmJiq1coxMcYo6cjG8GWVg3F3skgLuJXVaiMr5Rft8mvaHhi5dt75B7LnBn9RF2ybr3ejh9q52",
  "key2": "58eqEtejxKXHGLHbetAkFXYjqrabiXMGhF3jkzAUQ1DnPDenzxjo43b9yaUaMBAtnwFtfEtjfiY69CYt7KDgiEfq",
  "key3": "3CdK962nRzTiRzKoF1JQzsbSJjatokwKfeFXUorjtb2RhhvNV3zmsiNB3fCQUP7Wwa3L9UxVdo3hDNw3vZaC6bZa",
  "key4": "LpBuUjiBfY5D9rLQfXAbR7gyNKrgspiDX1t2zzYNNKa81RfZDcZ6ErdCEm6vgn7MHMqCeocfAhFrt7VwL88uprV",
  "key5": "5HrkDGPT48KHFfHUdAKd56nSUc4rzw6SEVAspUshQcpwMxD4BsnPocr6gyzFgU6JZeF2WHUcb8ptP8kDMAmCUPrU",
  "key6": "M1WfrYkqA7ggfZKPYphazoLH8orVMM37pgzXpxSWGvFRZk4X8imEuF7z77dHKVM5ihAV5SMboe5i2sxK33xqigV",
  "key7": "2uniEP9MwYQ8SdTJeCbJnUrgFvwUWSi1wcSCX7G3JW1TZPLdokx8seFJwQFGvfBMLYcygsnqxpohkEus16nho61W",
  "key8": "5dUDbfXDCviyHszeED5AcFUa7mnkgDvTJTcvjSTWXEHbNvcnB3MzNiLLoc9fCkKZN3pPV2abucuZkAUkCarxCc1R",
  "key9": "83SUGMqY8ENZ3LPyggkUt5am1xFuPR3t56Vs9b7Cdecfubtj8mShk9MD8Cum5hy9XQ3kivHvbodCT8sEdCQ2tHW",
  "key10": "3r8NwL3ZPQogUX1CecqXrR1NgidoF1kc7YJFqUKg4C11tSjUaEpqJjzw7UibXbWKaW2G7REVkdAbiRcXwXgDSXQG",
  "key11": "58ov3UWqCaFKtyxk7Ck1DtfDE1d8GLJmirNaUAsfQPK89j3VU6fLGsPzqz5VkaoAGc1u3PqnEsETXVDyhB4KbeYX",
  "key12": "4A3T6kdu2SiJNaf73TFHN2RP96PFwjuaTktX9uREAwaj8osRnKiHkg3ztbrzZ7yhA8BwSjriRZywjimLdaavuEuF",
  "key13": "3YGjR8sUoo8LdEaDg21PDDRbthVZv7nQGC8uQ5723Z475Nbus7gcEAZQWBb92cKWHuE5EKKHwt6cfwWe81ERmZzY",
  "key14": "2y3rfisfX83EsV9pQ4otGriFABsWNMSH7qxc6zeTgtpwKE6YybcMQheZB8JoH21QZWLqtMcPNr7DsuyUmnneo4Be",
  "key15": "534ui8gxooq8cfCPC227MQMdtJoW6t89g2onnJXXMFW4K2GAHHzjeMhMgFgnVVUL5z9KGdJFnideYZT6hwLXXWoQ",
  "key16": "4bWdNefygguQAKah1xwevgMw7bMNr7qYvS2rkHbYHS1yHcKiDgYtpZMwW8mNqnSiGdDcU8K7RTK7cngfhS3t35Pt",
  "key17": "3ms6KwcbFCZcbd1s2AzY6437sieGf8xwYgET6n11tmTPBvzvfCJWpqF8LiNpBTT7Z9T3xXHK3wN3qvu62oLeUMjg",
  "key18": "2Ue9uGuZDaqjiA9H6yLdBovqb8J5Cj7aog1BCSngAe4fNRgGmBHtjqTeQyxobcK58RTQZL1z66egNbyLpRKf5p9z",
  "key19": "5CXTCVDsLZagkqjbB3DQBvTWwhfooAejbaDy3TUTESXoepQoPJUookfeYw1SRbCPL5Gqspw9AkNxGyHe9uj6rQRc",
  "key20": "4SzfieZSx4FBxA7FmgdCEjDV7uDff6EyG4au2G3JuD1oE11XEyF2Y1vuVqxYCs77XtcudHn6e8ozbdiqCwgTk68k",
  "key21": "5Rpqb68iN28vkKJS6MiDEUBhicJyChaarVzWypF4PaRJR8FWAb3maBSudSzN5SpsJppaN1Jy56KJx6d5zSpwZrV",
  "key22": "5HNJuzhxvcQTpCXctEkaf5eWsgy8mFdNjvPTwJeDbkdGDAnN3fkbAgNAVd3ssWNMEQHQ7NPBC4Q16Zy4KNwpjkCN",
  "key23": "3VY7fMT6tKwpZLC456H4ZeXVY4JxtzkoYkM66K7rHHAopeMESSEx5mbfYaTW8jsHN27go5h8tMgNXi25VgEmorue",
  "key24": "26Dt4MCKB2E8DC3A9jHC7qPBKGocyUMQUUWpuS3JkAopbWySK8dCvC5rkLkNY7QZV6ih2791RyndL23YxzwdWxrR",
  "key25": "4RDFg4eFvLm7dUzntC8hB1kwkWFsQEg8qK8rrY5q3fXSYzbyHL2xygM5U2jfPbgrUJeEsGy1RNHVNb3t543y4ZUK",
  "key26": "3dDYw2KtNNHsCDPYcERrCmyhpoCCjrghi43EQneHnybPrLLfdidoQfKFyqjK2HRrPFAhfDPuzGfmuY9n3ia7jyJM",
  "key27": "tW2LmEDTLZ6zTDpqUjujLZnHEpdNQKWV4FwYVPZAHaxFpjqXUp4CEVCzVjUPpMTTqojLcSf538y7XgEbfPdrm5p",
  "key28": "5U1jF8YAtnS4TYpTqfVXi8LsrBnyqHgRWR9qgUBZVPsQvSK2a6dxLcxtBmShAz1jd1ukzb9aYp1Zh9qoxz1yeYRF",
  "key29": "2464QCLciACgZLxWEF53iX7jAty3oXjd5rPkw7ExQbUqfKDeLP5qg2Fqp4AoM6W66LPeBhrSkonANnMZ3t7hExaS",
  "key30": "4cjhXkEVBTmPETGbj3RiHf69QPWEJacyUsw8CnWoW7as2MaZbeJtUVBogMEUy7f3E1f5vsufooqh1TNY3TWuk2Ph",
  "key31": "iyHpUScmQV7LAUdDnUvS35kh8gSLQyuwxgeC9MRxbbCdkstZNGnNPhs9HbwDpEgGvWiKw43tcqZzgEVJe9vs2F5",
  "key32": "2ncndmxTG12UGZbWTnsQXh253Sx6KYqhYxdg3ewp1nznmZvqmRJWcp3yqGRxrUN5WofAU97dkuxZvPnNgfY6pWmx",
  "key33": "2Y2CMW4Tn9zRQrXdbuEcpoBqBM4wWgbRAsyNpLaWtCqSnrdX4R2eAuFtckmXkEbBTT5VNvYqfRrM21oCfmsw3ZMr",
  "key34": "2oGcQ8YiXnmJXv5MvZLvoVhmYZya129rxdTzouPLF4MKhR6aC26CYXKhfj6adWyipa5KU7PoHxs1j6ngP7yeZkYP",
  "key35": "Y79d6d1py49YuDGckiwPYW7WCorGK9bsHSN4QLapzNnCMwGu3gnj4qFBDyYHCLYMv7gXU4tDfaFsnXyjgTidNWi",
  "key36": "3dRh3L9KABTdqM3eDCrEYcqGgvpEfqxruN2rZL4Y4d88jWNK7aTaN1ygvadX2Z4o1sgSbxuearNSrYg1xHJRDxgL",
  "key37": "cmw64dQYHPBhhwTBn6JF6ueWaUMomTAPWTMUg3N1ziQfGitPqUZAM6Ro2XZeDkQmPEv391oVfkNUyrk9DsMCfbh",
  "key38": "5pRZxbjRRQ1Nbwf3kLASBfAZUmqWXnnFFKtMeJ3k76ScqwdHPjvn9wBmHHjvFxJFd1oVFXF9Vs8cWTao6dHpokrk",
  "key39": "2neYzAkzYH2pmbicYjt1ZHC4575rEPM9MEsgQBmyr91mT3VSK8pvnbyWrHme7WdbAtu5HtaJzheYTxqD8iGZ9VjD",
  "key40": "2qmGFvZDDEacDJLgQcduBzSoAejWhif9KDYH4oDRmUkgxPatt9fbGy2WQmN51Azkhu85NvXNKNgzkRBz7VX97Nqc",
  "key41": "5DvKpft6fD639ZAYTW6fwk1ZBEzVndBXCZiFw68QJdd33yNfB3tBdp4aKiEQQ3mRsHmc9NqbyhPcxPjPMqpgqkaJ",
  "key42": "3z82vhdKU76m3Kw1Dw7CtTjyv3bVGgwJ7WjeAASmmT3VtriK8aeoBUS97v9JS5CNANCSWMLqpZHpsWkkDiTcZrvf",
  "key43": "4AqX4seAwuoY1BHvun2uQtwXpCaSABy15F2XesP7H3AcSNBYJW8VNuRDGDnMunzgyY2eC1qcztcEAtqpAoyarXMu",
  "key44": "yV66efeNPN57qoLHsWAbEmops9jmAo1wdjLDhLsDEZ6g43kD8uq3GL7JZjLXGs7ynEK5ew7ZgavLwv46iiFdQxL"
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
