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
    "48tcDDBvPzKaE7cC6iukUCY441p2u2dBVBnyB41F3UUjKp8CWcAcQtpsvyoTB2EhF8tJraK5TDFD4rP5H3QmPbJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6S9zr4wtQmbNMMo3ijPrpXmwENM9FGyBqDUpGMKrmi9w74REFsp3fBVnQURUU7CziHiCa2bVCMEnCce2CWRbCd",
  "key1": "Y31Y2PuqXQXbf4J7b2dPA6xgJoZoNcmp8xAr3uA1BiRz7zBfFCo9CD24zffbeCQfjBftWgmU9rSj5QgyVTePot5",
  "key2": "3NYxcGXKRVm8LmcrCUtDsF8CdYW4kPieUpTETW8uyEQLoirFswd3Zk842sQa1iaLVHGiHsaFsGiTY3UYDfqbCYfT",
  "key3": "5zzkTBuBWDFGAaXTLFJVFY6MsMiV8mDZxtMiMcvm2nNmdraSbMYs2d1EZTsZ4koRGpksew1KJjPNcRoaqzss232C",
  "key4": "GQq6eToLyuLALSKJ35Twwskhfow1aqWMT6KEt962NXKCqxc3fkC2P1RueivVPMn4U7BzRC2CtnAmaiWR2zCgjsW",
  "key5": "47wk1pfCjci6ZETzbL5NdDprCWBpLKWixRsgQDDpNZ6aVMKVD9RLRiQgXjw25VcxH152Yz4zmwpBJ5dMwL2jVQ5L",
  "key6": "3qBAVSE1D8yJ2F5VheM67bKGfNGdvW3jTcRvQAMFWrkoEunLtTaLey9Eg94oQ2opncJdnXkiohfHmZ1uVj71L5SV",
  "key7": "A2LDcjbSvY5sjHTiAiPVwot6cTUT38pgayXmfGJ7ffVxYAFFwma1skLife9NeSFSTiHayS29utZEuj1GxYoYXSp",
  "key8": "578nWqcxCnBxSxmktood7nnEs2wYoZ5LRQDXAaH6KSLPH3NTLSb6yhHdJTCcwzTTegXY2wm4kwYu8kEPjZQ6hvSS",
  "key9": "aueeQYDycwgs8VXUUAmzNhYjgi6AxYgcf4bcf3UVDsDE3jYvGr1TjFXzX8anDjzQJgytZ1cXKmrMbD6LU4LGvaM",
  "key10": "4on4Y2ndRDfN8JfGZ1qhwLAKEpaHW96M5RuKkUxX1FaqCQaNcxAvy4xVkqcZzm7k92htzN6R7MWVeiM5aAEy38m2",
  "key11": "mPJbs95Zk8ZLEN51EF6zSuzk4PY5ijowM99KPoktFXrJ2pNCoyZmeiBgUHqWS6k3RhAHYjqBWrGdGWSP5NsTSc4",
  "key12": "5uSiuW2ByCbhbezeKry7JsAk8f67eLQAE81AfMtKjXfzcDKEqX7AfTnhrysdPgqVAbo8uMKpeN1MjjMF1vVvr9RG",
  "key13": "2wJQoJf9orH3N6TNcnCT2NbeENrXGbzbdJqfWKsp16EkWsPWrcoEdyMMqdJJcAnWgamXLBPDTJCm1yuTNMJtoaz3",
  "key14": "5rmtghJQUB5QpN74AGjgePevwaPLMAAP7mcoppgRDXbYe9p6enXu8akHAKMLEWfbx7hSYeW5BCGCzzPndDa1T4cu",
  "key15": "4ccMtXhA6J1qxjS9oCC7VcnUwZggNuYXnCJhenkjMFNz8AYZYRV43bu12WozHzqJK33tDonkayM9HJActbwKPnDs",
  "key16": "37rCGB2RQP1Dsk3RRfHMQyt496WWxsDnsyUDrFLejHmYzwiukFd5k63MePwDswu8JDgHgTCRtPbf4f1heXg74FyZ",
  "key17": "odqM8HQcZdeTZBVnRcAWRmPHt7asYofFB4vAAB1Cs1AAM2Ag7HoCCA9GvVBeGi79WUMnmGUJw3PB6Xv1XmgDPc8",
  "key18": "4aZJtkcRxDwdWrfZNKUKvp9nGmwvjLthwe1Bekw3gs6V2yv522voTVTeeZKVMSUwjF81CpHhvLtdfq7bLica3UPa",
  "key19": "4Xu58D57hg4AKvGaSAAvcTypBTFsPDgY5RyNaMAvksheyTNARahYn28Tirk7XpV4SJDRVmBXHkT4aFpCnpEoSVj6",
  "key20": "5uMMSgBnhGBamipPdkFjDhB83GC65B38FSnLHa3v2NaXEgstHHBWqaKP3dkEBLAcBEhrEs6UMpf6VuWESx7hotSU",
  "key21": "2V1YSmPphrMFRi7zFUMvr2BPWK4L9yb4Rz8CPbZWR688iFgkbU5D1LreQtisRa2qAc1KE1Z2WtBnYCsae1vG49nC",
  "key22": "537KB8zounSbsEyeuPMrxAyLkuSC1jKyCLvLJqq1XJepK9oAKbLiJLTrSXxyFKvpXE1oc32tENwoQQzcvin6oJhL",
  "key23": "28T3qmQC9Y4Tk8JNwgTwQz899RmRHPSQMKtg2cXrVxeHgVLP74eM7pfyeTHT9JGyFhxRd3gdSxAteG2kJRTKvTdv",
  "key24": "4BHiRhzzvjwHAJw2zzMvFG3i33KH5LTKZYB67BfdZYpvUhhvH2ua3KdfYjQSidB9gjzFZR7byHeHXNYv9PuWFe4L",
  "key25": "5bnfqX2BSCoDZXGeyEn9Di4P7eT3qy6PNt95cghHfH2eU26ShSZgRfgPdicX1K4T2ctTaG7CmrJoKiQFnFr3Q6yD",
  "key26": "A1WkQVZW9XrzJy9KgRrde6mdbZ5iX8gTvh6c3ZEEo9fdfMEGupRkLN45Ab4CkD7Ewu6ZuoPCB3gHtzp29tDiqmF",
  "key27": "4AMvF37Y4dB7TyzfoGyV6MwyzXLxfwwurank6XTWedyKqRotPeoqyZfRUVcKz34YvJ84w3tTNhjLb7mZWvhaSCLK",
  "key28": "QXQo1PQY4ugiL7JPb14ZAzYVvvET2D2MoWPsWc6woLmpf6kGT7YzmJSP78KSALU6UKFEKwGzzrf9pFpV3Jf7UYS",
  "key29": "59RhNoegYM4TbYM2UKw8wdXN78kdqTU3oyenATaGuo6zT7MY3QtE2cLLimrjmRp4rcNKffss38CBQ1iF8GbpGR4d",
  "key30": "4hWPQkHtKFu1zEb8ccoa8k7b7R9evXXLwoJ22r788KrVX8HivWPEDiNT2YKRGhvepUVTjeC8ubk2qFiGeRAgGXUf",
  "key31": "4q35ExT8WnRh1K58TdzxKLDEYMNuZZBbqiMXKr2ubspucv7Gga8KJK8rYaepw7jqjHuX1tPwPKc8aBYVbwujrMAb",
  "key32": "5L5xWr5rmh91Pgijfb7V51CxrpWjukGP5xD5Rt5PW522PkSsxDMRB6pQwSfJsbBBjmQbnd6ecrAJEdK6L7osc2Uz",
  "key33": "nBSxE4S9QiocBJuJUwo8MCjMdmrGZ2in3b1QCqk7yPuiq3LhQuPtW7guiWcKdFaitHJ2NsRqRHpwyxWSqiAUL18",
  "key34": "5aMHVeXPGLZF4Jq99g76TDBYxwnVxaz9rKAF1vHZ4fTvENbVykJW2zJBt19DA83T6LeAoxAcRPTbnvEpe5d6Kif3",
  "key35": "4LvoxZT2MgUXB1NN4uw8G4AehzvcfW8PdQRVB8JvVsomZ7iheB1g5UC2gu83rbsAGdJndSQN8qN13breH8vc11sR",
  "key36": "3LKoKX5BfRv54B3Xk8YGEKuEj4H9grrbbmPa3crTjswHuHHZf15q5oq8pLsuVjbfWqZuVXqWrVdWeuBzTcf3dRzt",
  "key37": "5Zz5B27ZH8mUSPY3ZCVLKxp8iQZr9rAX92fcvZKtYhYY9SgqLGXam7rryrn1S91s4iRfM3J5dpYJjHhPL5c6x2Ki",
  "key38": "5NmDqvEeDk3MshqtEUnYkkS1b4g8LdRc64awAvfcaRShBdsNe9HAJZXgrj8Mu6kK6ErevwVtSkxttAwLRa6EWcWg",
  "key39": "5rwPcUtBVVC3WxteeJ4HvmjPpU2unMphJQEEh9YAHAYP3Yu8crFT2Ltweo8DQeKKYVUQqyhW95eDDVXR16Hzb1o3"
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
