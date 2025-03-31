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
    "4R4bjdh4RVXRJ6PRWUhikdskDHXBpp48gWjVEVWwdPH42b7pSst9gHWnTCoexVn33fSFSRS4CngzCYHH5gSzjTyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qssXwTYAbEHE9bmDUoAZcEoCKdXR8wk4i44jj64tzhbxP32zDjdMf8XSpYrjmjvtDMamknYernXWuQ9CQiarKpH",
  "key1": "2PmLz9gdGisBz7Ke9PPrfspUkLKdHuJPwUwdzcqKPSC1C7LbW1stRvVHeDjW5AS78PmvvYc1MioKzhADET9rK8A5",
  "key2": "3CUviHXTucTXEcRmGdmikbSCotRtAC66RGjCUCdwreYqLik7twqQLCZ5JsQin5Lxnv2QPpE3LAX2pNh95KsQGvDR",
  "key3": "3iubLN6GgXdhxdRwHzFTEb185s1t4tUJRRgFiruuFQxptSMLmm5pPL9zp283ScqDKVDXVQg2hkaRgo6cpCoFTR2R",
  "key4": "5jsJomh7eh2Qca9HRy66iimZQbRp8dTGdidgu8vaJvSKQasVGYEE7iRj7HNnYPLuU4voUws9EjwQSnMwbn3FHukX",
  "key5": "4iSuNoB9T4hXs1HvZVmJktPivy8swKamYd1Vw5iiLCiuN8ZkDpALpmJZY3DYaWPFHa1tQgiGxmY8Qh1FAkHWiKxx",
  "key6": "261x8ey8TNkcdkEN9AftoWHBfq991ryR3b1FJSxPfqn1XBttJtgasJwmmcPnonUtKaKbnGYkWf7rQZSL3fsRwHBb",
  "key7": "1CqgPJQr5XXQMCSnBRGXgQch2QXnekT8EghZefZYaTCtQhFKRyQVysCYTXQ4RJkGWPgMi1ziSy2F3FNFDySNAhy",
  "key8": "42uFioef8TyfEiVEhKTCLsJ7wcFbVirVubaSjBijm8BhwUZE39eacaf4bCrztTmoaNnLwHfiggH4uk55eE8wjZgZ",
  "key9": "66cXPoTp7wTGNGoVaodExZEtmTLaYt7kWSBWVXKBUT2Z9gaKe38FACa3Y4kG7LthZN4remKrALUSnpFDNQ8CggAV",
  "key10": "2eidcsNYBqg2FgpYs1A2F7MTqPJBnEXcL4ftN3byFEFv3Zqhy2fheWZBHGJ9HasMRtLgJ5t8zxMvyu2CA2CZuPFd",
  "key11": "2iLDNGQpjmUNXTcaJULc5QBpFeFNaFqkkoFYqFX3zQHDJM6jztQVsM2LcftqoHPQtM32tUqQdpcztxzWhgSXvXyT",
  "key12": "bK5x1JiBAJCzr2jEt4bN9FTv5rQahdNMNtTR9wCFZMhQ56r66F2KUTQKqPCzndNevgZBQcKnfh1HpBnotwn8EKm",
  "key13": "2K5Sv7rPkAVVeTf7JL6METzJniyufjAU92vKcthd8MEM1R5P5KGHyaz5BBp9tsiTgTp4ZWW1n8CkaFrpRqoMdrUa",
  "key14": "5QxraG6oE5t9779fcyLsZ3c34AiHRgKtaCfJoosRJ2YUYEbwyUfmxQrb7eXvXrk5uLS3TkFtsmHX912VcFCXXGuE",
  "key15": "3qzKTkhWx1tex7LsqdjqwSjBYov1KM2uCTuRmmDiMRmi8SxFMcqjh2rWk27NJPhPpmvsiLd5qMxY78qZYcg6BHmb",
  "key16": "3mb4pkmvr4VWv54WzvyfLG5U2oftD7QFVTEgXrBqVeGmEb2YUQhfyMpy7NzBpL14H3wwPEqZyTv3Ubhz8DNyFcY",
  "key17": "36bUSMREAdc7uwq66zQmHx1MFZ5jRPoDyHFLc9WNA55ACtNiyKnKcnBspDAcHJcVEL5kJkg1y1TvbXTcXy6J15A1",
  "key18": "5jXjqcvJCDeq3kcbcngd8ffosv2eJrkQx8BHQDRrJk4cqkQkc9jf45JrefPz6C4s5MWmeAGBs32s4DsFsChxGheD",
  "key19": "2mz7jUPANDrmRHTZYehyrvnZnLiMzfEqAoDdJnrjuKhWroPWEfxhrLhaZj1krnbbvao44or7H4xAjoz65kwdZRyG",
  "key20": "4RfVUhEPE6ZT3WsveQVMs5NeGjfDRfvnxqTesaVoVum2UaZXne4R8VsgmXxpPWeXHaUP6Jo29Zbq5EXkpwQFnnp1",
  "key21": "3zf21vDT4At4XaqtsDw8UKrudAdTvXhKrTH4zeCZrUXU3KGcDLya6UCnbzY5EaR5anvwCLnVugFQvDa6BX3Fgrmt",
  "key22": "5p297PfsQJocFgHJTmjK3oPHCsFVsJaKS35Xem18AXvVFj5XRKpgae57YgPNdUSYPW5P4rbUpS3LKNGf3frJdr6S",
  "key23": "3nrmLnZHGKTN459S2HPFApbKZHxcffMZq7nQRE8RkMetegXNLSHXjbWt8T4mghfPe4R1Db9yhNpGYEerK68xki9x",
  "key24": "3SzzncJJRGnnTXtkcEA4b2kWPZiab2CYJh5Hz1WS35Az7qcFPz7igsfCgipXB4rZM6NkiW4PaEsbZtXxU6jWTPqS",
  "key25": "2fRmtth67FhBWgfyugAYqAqeTgPWuM1EVE6VdczqQMS2645o3mu6vrmnpxoHztzMqMjGzQYf19YXUt2TXgpxBipd",
  "key26": "Y3ELHiHe6Mw8Uib4ieY1kF3P5C1MFVcrh4DX7UCCykhoPk846WKKmAzkeAMZy5nzWk3LCKrkM1V4Kyk3LdLT5WB",
  "key27": "x2GWFvLgHJzSipfuavaitJZJWi1A9dtbGr5CooraCAzHksogvDaifcaj8cLsiywhzpwFoHaKNrKSXL3oGDpHXZe",
  "key28": "3z291FTD1uR239Z7kEvHB9tkq6Sy9QgMorbUXYZd78PWCd9soCcy48fTvAwJQtmSGzZjhBeQcMQtNCbgrNCZobh4",
  "key29": "3Dn7nJ55H6AZbqyGGEnxL7xwPzpCAC6JADDT8GqRkX2Yk8Hv7ywXrdrrGSTjwCRUtmGGHKjvrsAnKvAGfDcMUUWP",
  "key30": "2MeGnoDWLzxQRxSN2UkTjuQf4gEFGRW9JyE7BcpxvLjh8nMHjPFzd7jc5tYJXaHFLGKJaYa6Jih1BMCWvkJquqST",
  "key31": "9UaWjMmSxRFfBWUgefPnBfb71LiCJ3YBfCa5SGAmnPR8qntbkgqH5Y99w2vQ29iMzikqck7W4uqNK9pbZUsXDNn",
  "key32": "616tNQKTfcXhXCu2Lz4mi5kC8UZn7g3CSrdo5yw9QxyUwXjnbHCVGUM7FoboGS81rjFZkcfb1UTYArfXwZLioU4e",
  "key33": "55fzzhYS4pDZg74KNqPtyjdnYS9K2PSNCD5oUeT2tuGyVDkHRc6reSHgzF2hWB5pcLdU992giK6hsGAPbcmReaGn",
  "key34": "5JK6ond2w5GWNYtWMc3QE74wciSaiZa29gE1Nm2HXp49GLHcyivsVYipVNvr5bL9tHcgyLk9qQHbzEtbkznrLqvX",
  "key35": "KChZKbySLyyqxzMRwz7MFysxdLNQnoEJXstzDAa3VaqJvPmcBxmaR4DGyzsm6rCuojXgo61WX9XKkeHeweEAkac"
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
