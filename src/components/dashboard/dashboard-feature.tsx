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
    "45fB3e25aN7EVbBzJTt5VTzCvhQzj9Z2KRft2Jw3Ssh8PNz8vyyXeby5qEqiEwaw97V7qU78SdCbL5J8JWXS3Jg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAQETduRJjonPgFENnAbYzfVvrfBmnRLmDYQdDs2Yn92dXCfEPpfMQMRJgh1jASCoYnjwdMBcGiYVszMGNVTuAA",
  "key1": "6XkBabJ2LVAcJ3JS2M5HNBR1xit3vMJwDiEYjpEcYtMGbmmye5oyyCFQuvaf7LpLeoXC3sVVi9ix4Nk5hAVPZF5",
  "key2": "3nz2CN3nKU3RsnrnqwxdHydUM9nsUWcEUg9vX9Vskc4KTYQVBVEG9Wjna2gxmJZxm6w8BLDzTNTj8VsUXhAwyiTh",
  "key3": "2iEh6F2vAYczDUvDMnuUjF3ThpJu67ZWjpvbt548tUiqMdHy6VrdKnfH5yypPBzqre3Yi7YdhTAobk1afPwjxQgw",
  "key4": "66CmioDgvPqEAnaDN1MQ92akZQzHPf5UPmTWB6VLUKWjb8R2pnVGmEYzrDE1Uo2JfhRFRn7wva2MzXAy79m4eAFj",
  "key5": "4WmPNLXU5p8Yv5NJkCZKMKNua2emfDkVM4dZHbiBA4mvhSZLXwNHiVQXNLwEmbiYPZHME5hTD1hegi8kcWtzFH6t",
  "key6": "3VvDd2jdWLo5dXPfczpMuHLuGVoPSXHaMXNiwB4kmkSG5Vt884PHzyEqnEJWGHzuM2wToxacM1at1J2AHBGr4gNH",
  "key7": "2krk1Z9dKEqojgYrvuhMc9q2mgFNmaWNW21iAxbEMGKsUwpvSQV73HP3946LxVxb8oqPcrpSZj9FBauN5dqNj3jU",
  "key8": "4tPZAMknRqqQn32fsKrYzrRbT5C9gRfzPHGVen8buVUXfcHsr8HBgA6W5TqT74T4Ux1UqzUu6sHhJVT62SSSZsmy",
  "key9": "EsDx6cdDqeeNHMCPkuXPLbFBj9L6KAXbnevfwYnRvafC2YTtdfpxJ99a8ai992AWWwEdesFeTfBpKnzMfoqzDCC",
  "key10": "JG847V2JxWLcRR2pgA63mM35asNANMEpJfQbnJDybVWBtzoRNU7VQetd1Lg82Qe9RhbaVpe3Tm4DfzFGj9ULDRh",
  "key11": "2SzCc5oLbr18knsZ7oaZnV23W93tkSXrAXqKU74RotikXzxjSChKU7LrUVFdL3y8cyAqwmDo8mSMQgGVaphBjYYu",
  "key12": "4Hv6wYdvHBaAwZsc5TjrvgkrubXQU5o3QVYEQeeohwxcntM1WK28xkm54w8ZToEjRbXxLKkcjXwMVoHE1Fmg34CL",
  "key13": "5c6bofiCk1hytnqt3YczhBpyrEPi8qT5SN1EywHDtGk9JriuLUf1xwYwEmQD3UXUrgLsEU8fHUdVDnASUBFJgm6K",
  "key14": "63yLak2T7Ak9JLqLBWH9ARMjCGdYTQk7i2RN13LbpRdbKjcWd1tXH6t4v4EcAJekMeDmYMwbeybTS4DHZTRS8SR3",
  "key15": "4bUrfed3H2cM1sWn14snf5FSaSXbXxcJMz6gVdV4foSF1gt6vUoeC6xQMAcjTvrTnCkyMYDkjkPFeuSu6NQkYsfv",
  "key16": "373xXt2rKunAG2b4Mh5e5wBGFbvzd7u8pmRATkeobq66BVv2ssV3jP9vNYHNcpM1p7QyjrbJ6XZYy1STcx7Lf6Wn",
  "key17": "3dVNoVm2spX1SezRYj7wDpVGR7TtEGTha9MddtFshRJsNDHhVJnCJsNE16MvBcxU7ksvinkVe8PM2LCtYuW93jaH",
  "key18": "5dRQHiYLgHNiCTHrNBaHQrRMLgN7Su9K8qnFGhNLetLhYTJTJCrpcxtotcDZvqeiuGahW6KkQaMEqyk4a2SsXe5B",
  "key19": "wdVcd95nSB5v9PymBtKkcaGedHiiJVQhgwjdT7De7GDNYvGLAo28fZX2mcVngQeJz8pLA2C46T6aBZnLsMMds8r",
  "key20": "5zzQc2rb6D3orm14omYAUTCUEdnC6jKMCuvhrzvedJPGEiLo9uSjTTWThVdakUonnuSm35YjT45tqp5hX9XarAuo",
  "key21": "4a5QSa2u9QgjByUsR1vE9orHyHUVov9CpS1ah8a3Acqz7fWjKn93MDmhQfzsuFpLbHmzMtL9KLwpkqgd9Rf2JSMt",
  "key22": "5J7JmfWgcj2XGnapoeqHs3XQcQnvRtvXRwZA25irkHA2UKiX4RyDd44aGTdU4XfnP8cDcDUEr8t1mqv583V3AbdH",
  "key23": "5My1S8zha36YpbyP2Ei4V4DT5SbfPCLserCiZ9Zkad6446GankYUkVRj58U2b1BhvFAgXF1HFH376McawChnKwo",
  "key24": "2pZ1wzcBqfHryTYAX7KLqc4266VqcSLoPsGS5qgreFkUhkqowKREFaNpugnWbVScRjGHjJYS9t2PW7MgwDsgopDr",
  "key25": "2NhMxV3oEytBHQHesJgTtGZKvcvLGNLXuj5Ptg3rEJWRAFnswxWw1krDWntffmd6cwDhWRWTMrfTfccYJ5LH4ikY",
  "key26": "3aYBvhbTJYYhCauub4ycmSqWF8GwrxjdVeYx5MHCtQ5mP3nzsaLpetL15vDf2ntLoxtcMAwh4aN4YgBnFMN6VmLi",
  "key27": "2cQDjxWaE1B5mydj75YjeF8VAYEkzFVkPHUAWhiLm8RyCYepNm9fjnCyyhNSMTqaDeMbXtrDyUqqzBG4EgWM1uFY",
  "key28": "59tb3Uw8bVoN25FUnSZ731C7FSchBSP941bJZVPVpENd3oP8fLA9dBf9fVvB6eKFBRuNGrV5G6o9WYcJf24amZL",
  "key29": "2wRsN265MguYXZDwWfCtsT5h5rWHEpfwoBZfkLzVFDiu9MeZWRwADJ6QxGdLtBSwLdJBHFZDtDiGXAPDhnWjfMjv",
  "key30": "5wQbAgYyyXHP9PYRjJpjHd96pQKi2oTPd2BxWEzhyvetamR4iU5KqQgTZGuTGGLZPoPsCkshYy9thkGZujhH1Stk",
  "key31": "42NrGyryh8kXuCKoGT1xKmhB6uuNsUrWEeweonGLjQZnECwHj3QmHKa3EmcmKNweQ3W6BWxHE9uYjkQ4D8U8U67y",
  "key32": "3eLEL9aaTUxRAbdKDQEx7JArieRu7CzXAEDGpMC6z7HruNJwiuz16WXBP5MQt9Roqtrmac2ht1bdvzvoETzVZcWF",
  "key33": "EjsPWGMLaAiCLV2sJKABduBg6niRt83xkJzWLibZ8SPoLq2euojq3azJ66n4tPNq4G5pryZsonNMxgo2N1FYLGp",
  "key34": "rXer1bBnsQeP8gaQaLw28zpyh8Q7ac1YXH7pDpNVvx2LM2EonAeVqXabUsA1TH5DDMTGUbCiCE47bmPLBryZ9gm",
  "key35": "2uXvn2wsFP7b2NJhyofnfdbfEAV1pG1hDV24N4ortSFb6xb5jZVN4QHfFNXtr2mFZrvj1R7VZApqA1dSdahVHD5p",
  "key36": "2zUjSHBJoCwP7F4gsuBeyEhzywKUvzDWkEeSQ1cXj3gVQZMm6Qk2vLb77UWGg2JKLFP6KYaviCrsWc7iC8eXsvjG",
  "key37": "oEgqGeSsXxFd2FovKKnVwxtXnLtv4z6X4mXQgk1nSxSScWCJ28F2ZjxnyKsGUsTrjHXjbxPL5AHVjLMh6o4r1BC",
  "key38": "2UvefBYfc9zKhMv3mrunc1V3vbrBc73on4vL1MXRkfsWqfmvazXg6K1T8LEGWy8MvY9Q7Hed2pMmc5wvRqoJLZWM",
  "key39": "5YiufuoMgDp7xZfoQNvMaPj8JTpTk7LjsjiBdVizpBDnYeU34GYJc8CHkFrLDMtfCRfxiwWy6BK3f6zztbkBaM8a",
  "key40": "4uhQSEwrgArkn83kBTb47zYRcdut6gy2wZw5zbnncqoxv6b3DpjXMWcEsJD7fFRiSnQYy561VQTd5qxZaaTSBPpi",
  "key41": "2wiyAibwC39TyH21go66aza5eaRt29peqA45gRpm4fVzXzgjcsbs57xAUnm8s2ctrC4xX2waeUeb8NA1vn14Fq9",
  "key42": "4N8aCrLpX5FFQqxiQ7hkxv2hJpSywmQbeeKpynP2PmZhrxxM7Gnta9ne8mXdT7Rs1NJ23EHbAgR2XhqN76E6jYfu",
  "key43": "5xED1GQdR6xbR4ABct391wD3sZ4ZVargsnRZ98JVbeaeG56YJLFAATnzdTeJgjGYCqb4cL2rzisfX663tgHKhCLb",
  "key44": "2ZrXK6Aot8ZTtEXHKBdtzXwrSKv7FM11jcmYV7DwpuBL2uuigJJsSE4jECCQyMMSpFaBLsawRwNcWX4UuUsm7Vsc",
  "key45": "5JYARA3aJXkfUGA1Z27eu3CF2K5TeRgABCsfp4XzFhmMERZxeMkLeKJjzwrDXrK63dpsddjQXtHZmfUUnP7Yiwkc"
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
