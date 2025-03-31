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
    "2jZD732RSPdVu19FX8WVfYSL5fFWEhutC26WdtMAqWSjqtrnLYS8FzGYBrgc6wcPzGEZm7bWkwSR1LTaCaEwtTZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfFMMANibi6PPEs94ZFf1WvuPs86JtvByYBrNXYvuThZQAWVm3X2W1syHSWhT8RSpDyVSGDSmeJuKC1FZ73HP2B",
  "key1": "4EH2kR45n9mfPghssEd58fsxcagShdR31pUm32asz3NrHjeTi7WGiSYaMrFAwDLTfQMkZmgKEz76oA75juwE4zaq",
  "key2": "4FFtxHNU63XsqGTQT92YuyZMkL8P6WFYiZoC37ADDKxGFr1GMtBRFSdqMyARGC7JL5aWMEYyN6fiBZTADrhRdbwM",
  "key3": "33ubzb897Vk7qT2cuwsjo98iQt5ntfDZmeRzcM78oAzpajz3MVzg8juP1PGcHj7mFyzqdu7vQaYXJeC3zCYrmvw4",
  "key4": "3PJRuRuVaN1NFv1yQqCSLCu2aYpX8K4rX1bxDqJL9jqDzDbPb2hmaGeSiAu3g6f8nD9RGwSPezoJYPk9qZHgWZ2h",
  "key5": "2DR5hURa3oR8etBCin2uaWXGQdpSg4UmhZWPgMRrz5CCYJhZMaN6ZwY6L5Ktq49dmK56tdoRV954gfFhEfeGvbes",
  "key6": "3W1F3WYSAcK2dESzRuHiqTHMKZqMLzC8XdxYvfZYyt5TkG3Wu1jF8456C6GoWgMD5nTCrH19eMhyBdaRNmL2GQMX",
  "key7": "4U8byp5KjHhdU7fPmn3PQaZY8nBRKiqHhzxY7dULXgyMT2yHnxV7yBgwRhPNDraKEAS8n5Gb3386pA9SvoVxbPu",
  "key8": "3HfEiPVs3U16ii43JAmLThn6DtEmqcJcB7eyac1Mw7LWCg9ogSBPcbWcJeJjDSgSdZPbxW7JjSupecRBEjmgyZxT",
  "key9": "5WppYfyHDGbunXrENnc8UzJdNfYTnVJWHp9e6u9MDKEqv4SVM8jgwoDpZ4Ls94evKG7uWndFvSAdgKbW1e3anC8K",
  "key10": "5tt5fEko68sKvcCTRhnM3J8MeKBpFNHL4L1DkS4ozrsETe4LmHZmoG7ead1ix7TABg41tsh5tnoCrvgSpZ2LLMfo",
  "key11": "3qBvqHpefpkzJK36z2SwdmZfpmWAzQJBvjqdEbEYCFhdf7hh6nBCnDf7qonCBEv5TiqRT4miwTyW9zvvACjxp9QK",
  "key12": "QH2Ua87z9VZPi2Cb78CTZ1ec1MbPboNEDSQAgysA59iZQyYhkQvYwGsyuqPzPUZ1WqFxz7Yzm8T8Xv6tFkr3YZS",
  "key13": "59rasUnPCF87GcZmhP5rvEGuFCCKzThqPpniubKxuyyWk2hjubtKPSyWCWYqKPshefNuTKEUn4zeBBWpSyNAm71a",
  "key14": "53cJy5ojNbmWkreTWLdPncd5ajNmu6MmighWPeyCuL2bnTCgWUzA4ZrhqH19MYiXq9eu7vtGT9ueGUx65Ga6ct2N",
  "key15": "3KAmTSfA1jJfAQi4fxbEenY8z4yuDpi1pvECWqGaFiwFD18Rku3yDY66MPtRCRGFeF67uZLPbbwcLGckLUFZACL8",
  "key16": "543oeAMVyd4DG8ZeKPiHGipXGtovhf1oPn9WFnyoT8GNfGZREzE8gGv77k3LL8r51i134tXLiy8tjf4rCFFgDcEn",
  "key17": "2ddXAy8tC5DXzi2umQowHRDxL7kAENJaA1QsibuW2PVZanri8efqZUU2yREjr5WxYYsrMfngG57zz4kcjQVnuGRU",
  "key18": "CjPJbcrscxkdRY2xm46KiNDKRWzTkpzVb2mEDquuRc9kgAmwRJhsGtF9XtYm8iWvbb6w4VZSXUNm74WkXBjfUqi",
  "key19": "2MpLRSMGfYkkgejfztufPwzbNXdEZbLL7SR14QSywxVVem2kmNv46e6x2buxwR98wVf1MKPgg1c3pywt843zSvfu",
  "key20": "3JS9E7fmDmLMAfjqbsYTXNoiN8FVxwn3FvPMPyuViSMPFVXXuXCDvQTso3A4RDUsot7mKnfkEV3KjS7V42VgqNju",
  "key21": "3nsgPBANEso3PKVH6BL2s8fXSZRcEUiwxAadwPe7VGpHcxfSMXwYJbNzpCt9mLPaecbzmdNe6QcVA43EsFB9nCXJ",
  "key22": "478DY9781Qt2CW68A5CyemGoNKoUg7Rzag2WijesMmipqLD8BVRtsF5QKmHMSW1vMu6yWDnPxne6WazbfBEpDET7",
  "key23": "2cHyxXh4shJp5qzEw2xpR3eJ5HrmXw7vMZFyki6iwipoSgxaqtgKeyht42ZTE2QVXYHG98MSpotCroDV19QjJv1Y",
  "key24": "2mCF67qj8kYtJ2zH4618VrZ5ceSbUmBC1zWMgpMPXrcoMCoa8pBUkNUcpAjDJZrHNqGJJqYb1eNm9rSsa7GLRa4",
  "key25": "3yDZ1dZJdzywDSXPBVQWbUyRQhbciY5DWdLwsTJ2FUbRSxqCBHoq2Cp8rMbjn7F5k1ia1qBddktTwBKVN9W29mbM",
  "key26": "5YYgXwApUGJtfd51auiQJQbi34mif4MoLYarkqUqhgYtaw1VK1jR1RuA4pPd3YgV1fhhC1oEoNGrrr8XG4LDB6E",
  "key27": "3LR393aug5KoFqfay9rCCqUZjzDxjhXdNA7C5QDQp2wKSvF5LAt7oDDEhVhE39Wi7k6aEjeUwdvsRMTgDjFBy3xn",
  "key28": "5gBTaAM18tFB2SHqsf4xwe7VvSYEKEApYMN2dB7bKroS3KtNHFVN4CHjqgkq45ZfAqCYzbXLo4Kvy8cxyETn3bTx",
  "key29": "4MJ7mRsJ2Sk1iutrszKmfTDEGSs1TCwL2jdk8UEpvWGdGXPc3273rFGe6bMwwKWfSwfAdwKLyweW8cuDzEZpsSz9",
  "key30": "3NB9etzMsaPtveAjWMawmCppZAetes362mQsvMAwYYMY623tw1tjqd32gk2BPwAD6T9Y5Nub1T2GDafJ2ZMwWJBT",
  "key31": "4yQSjFLeJ43fQa2jFHpLNUYyY253YDsYiCBHPM9aGtMUwgPpBWUs1dAYFPmWmcLGGcYdUom1mDivsbK3JQhqL45K",
  "key32": "5GJ9h9Qr7AJc5AsJ8Rr6BrY6VDXzjyUbLJq86povw2dFkcuqntSJiLMiSUQ1vtGUx877LW5D33tL7DptNQpfTxRN",
  "key33": "4hYLkgca6qb8751ixAgMAzP5juYonQXhVs3iUbtn79QzjSGvU8AiwyCATzYNUucuFfyrV67E4Fhm5Jb39TarSj59",
  "key34": "538PBW9GyodHjj2EgtXB4XdVPwdEDkMPFzzkZMqseXW1T4GGuERnHitRkqSXXtDiBDyewUbERxjSpoGvs28TuVSH",
  "key35": "2XvD9AKFVjVt3xUHDGZYZDmd9NXDuTQFz6G179898bEf9fPKaAmoWcdzXoNiHcMvRdbZ6rYL6qDeyuCAj438C6Nk",
  "key36": "5LpHxY4Ayan28Zi3oaKLj9KBNuZdg2R3SgbXyUpAeSVbhuUBw1c3umFThs97gthUK1kEKAaB2geAp9nAem1Ssfif",
  "key37": "4HLjiFohyFwjWDUvZUnJE5j61g366YxBygEaPzZxfE28K8doRBZ3XpxsTw33JqMDxZ5VM24atPBWM1weA7cyuDPP",
  "key38": "2RMpZFpDvzN9uJGQbLSRwe9TA3wdgomyC99fMWrsNFWPLqW2c2XTYNM7qfWZA6MEqLN9wiN7EYEdrTpVPvL8Hj7",
  "key39": "2zYY6kGrZGKP1BGkxHZ6eeYD1GZRWMHQnKppEVEoKY4ryLA7BgGxBr8qZSPRuornjKQuKPz5vN271FLRD9emy4Gq",
  "key40": "2tv6hbjwEf8TqPyHW9Q4TAyAif3Cip1hfy5YESW9gwGA8vc2AMWf9AJbXFYwNewAWPGq9MDEw4y1A5Q8c2YGbn5f",
  "key41": "5eceL5JKAM8bW9WNsg9hJZPnm8vTFhwkNYLnvbWWLbNWAS7zfXZ3nvqpc8HGaEMnyJMJq3XZLBAzcb1A4nTjqJhN",
  "key42": "5bGam3P1phJGFyDPaAzFMNFhBmLsDYpJ3eH3tB3xjueQSrNN74su7ZMQfL79RWbRdH5FtVXy4APwHiSCYDCR9tVC",
  "key43": "3inb2VoUVBLRCy2SzL9KSCfxMeVwRi5vZAZwE65HzU99NLRhmv9WbDd35eDH6JvWxgQgjK9eLynwZmNEsUoqhkLE",
  "key44": "hdPZ4nwGqSqsNTnNaKJDrKt4GMTf4ZpihiGLDr1efJJdFmkQCz3XtaEYJJqxLLUYKCP5aLRvyxxkL1D6eq2oiku",
  "key45": "SBESS65BNbezQSTi3gEJfwiVVjiWCnnzc26YSouP2GR8PQTLUcHemxsvFybS1NidQbbSjs3sHXrJQrdzMJnFMoK"
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
