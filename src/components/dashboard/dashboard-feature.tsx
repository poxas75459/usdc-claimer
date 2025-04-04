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
    "56EK99VqLPoVDaX1EyY63aDCxoonvFg7SWaihkxz8Pv8bmgJ9wnuDN9RzVsxNvLVtLNJKWLMk3Ls6mjgmeZB4x3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lma964fMt4zYapBzLhh7MGFNG4wy8AG2ZE5h6Jtq8hdoDm97Cw7fHb3knrpHFnxPjTjqbp55SiFJJukGKGcmPAc",
  "key1": "63LreR7oPxJkqSXpkYfJD7M9DVUcBop7V6zsW2zNNq64Bmp3VbQBHyFTUQ9knhh2ZTVLhw1fhRdUHbvz239ELwJF",
  "key2": "5cx1vj1jdnFw8Guw6pFrUVpFCFd5dUSKVnmbqGhJpLpW8oyz1hM8wan81B3BVzycURBwU5rfDjvk6cL3PwFcYGwn",
  "key3": "tHHnbTL3ebGsXbi8YRxG5VXkLH18GDewVie4AigbonEXtejkAm17SqBYNx2TSSe76VwH3orVqyDaeqJW8DwPmNA",
  "key4": "5jGxWUuNtU7hWVveenFNoH75rqp72FwK7o9sDCn97rCNpzcpqAn6HyZnF9JJ372Z6fC4ptmhqu3vGUDVqz4PMfWp",
  "key5": "2DpmUjBEcoG1wcLfoU49JJrfKVYfYCrU4wvG9ot3ZiyWpp4TWynn7NPkve8qHRUYjsmPGnYTrd6PRajfPABm5JGK",
  "key6": "4DdxLYLz6inDQ18HPD23ccXFghsQQkKA2ZUVaJNNjRYX3AVMP4WMDMJ68FBZxfwVNNVPzniJpUx5NKymfqWnDoKz",
  "key7": "4iEafh8hiQj9TxMcCKekD9c1RmYLWsfZSTqZ8ZYwRycABBpW2ZttTyuBMsH5UgxXfvNna9GtMVJudXEcVs9FVtso",
  "key8": "67PtRV4y4bA6SQkf4wQGBrrw3dDGt44SG1uAsz9xD4xmxbSKLh5621Py3VYrP37AWFbynb12SJyaqa76KR6BRC8a",
  "key9": "61D7rZhBgVAgorXFEDWRSeRK3YjL48hAdn61vsKgT5fMJ4qYCjnTzwooh7egDjJYeRWJYZBDCgpYisGoQZARPYsk",
  "key10": "2DBJa14D42q68ziKjVJHTRL6eAHkj41fyqJEsVmkuuMSj9V3K9HGV5eB5TfS9KiWgsKTdbgLqeWqJyT5c5XV1oRq",
  "key11": "5FqtxgZjGmx7Vbtn1C2agrgxrLjbP31LpZvpvGgt74EgByq7iCYxJp2NiKdCjfdeuthYFU3GP4cTftdUqDNAagvV",
  "key12": "47CPnUfizYhXGVk3TKUpwQpWfUpfgrqm6w2qsWpJptFJ6dhKTRN14LB27a8QDSDUmokwgUSN6etYr82Y9KFrkkaL",
  "key13": "4PPDtk37mPHbqRpX1msQqtFXwGvb3kYyJAVVRcizq2P83oUzrc4gH2RYsQiFAbbWQ591MLboFV6ke4dMUECF9jh3",
  "key14": "2nPehHcJ5NGx1JUpRwPNuNjJzRqUmyATUcyn56qdUxgYRUifuoRekvAz9zKNAcRUs2yzhhTHeypTLgSiMQ4yL8su",
  "key15": "3skE7x3dhvCMTG8DRgwrx21L5XNyAvQZNWeG9Gedpfud7pGEgKLMiQGTg4nYEcQWbcamGytRHj6rLWgDAU8Siikf",
  "key16": "37AiUHCKkL2Jta6Na7z36J7DM8jKwf6LQdwjxUndiTT31GsyVeC1vRz94vB6CN81V1WBs4WRmAW3GVYnFW8FrqCZ",
  "key17": "5AbFSNvHo2V9ZUUAJh5qJVyUh8HZrEZXmS2oUpeURpzLmSjUnQuRyWfuNE4w3YdMTRR5JPVaMSkiDuw4t43MKAgv",
  "key18": "9qqkPuMeP57X4ezt5HGi5mxBapziXqauXsYJTUEzrQtfdjyDbUMsFje7nS2PLhGrgZ1b8GYaJDxmLi3VnFgyMCq",
  "key19": "2XJz9ay6CNjt7fDAZRvvLz5UBiXFG1iZu3AK9uFWt8DRDhWPbaHXPff7JczQ9keyqhutntCfo5R3YHKn88USpSPK",
  "key20": "3k9sTpXcUfRyu7aUk8F5D5YueJ1zfHhAPZEwCvZmTUpkJWKDgcFE3Jc5QFJuBRoWeZmSiu7RhnNJwGWJ7Wfdx9P7",
  "key21": "5xW9ihmaSDbVm8o856zKwQzqK8j1YE2rFEoCtxbbQN2THWBDF2YDkvSW75LjUW9SKBrvfRHdo5ZB3Y4rZ42MF4ZP",
  "key22": "mUhHETmSHPW1cqKL6SLVVFi5g3Df3KHhrY8g9HM1GaFZhFfP6hoecuQdM7dCXYuocVgGa3DnHJUkAMuMUvxEdnV",
  "key23": "sbqXsF5T3piZmHdUtkV3Xutxnbuw4f5YG7zshfNX38VMxWRo7Un4ue3is6H1DmAqM76uEFjNUvsRQWrgFQwbWfH",
  "key24": "Uuou2d1XN4VXip2GkumotBNAgKpNrQHL44M9zzx9WXvm5Pg47YpqUZsN76LzP5pd3A67Sjya4c974DaBCTu7Tvy",
  "key25": "3k6EVmejPUKcub7rBDVmSTxDxfJ5GtZZUoGVaCGHSzaJ9rtL7Dmc41AapMiaTbr8HdCfNf6J154YGzJMuUv9FrgH",
  "key26": "9RRb6eYW5W5HvG6MRoysZPawXH3GMnfsUfoMC4LPTQMJHCZbk7FaDEGTi1wKkdkzzPLUvCUECZyAfPguNmtAVwV",
  "key27": "4dLP5J2jaBwdwVhoEHyWy172SzDtbYGki7ccAr8Ea2WtUrkSvpn8rLUye7tZT38YHamyvKuLhAi24rHz4C8SrooR",
  "key28": "3u2G2Zxoj4f4VBXgThUskejacw1uxgeXSBhzHLwiLBCvKNBeVWemFWfn92rhSZy3oZuLzucPWHPeAMNDaQZYkChZ",
  "key29": "37sgwWmReqtJ2TfagT7aUuEW5QaEHj23ULHDjLZj8hDgWvYBQ7qRF1E54kGjdcM9u3stjBWUrCDXTv3f7CYRpg7m",
  "key30": "23MRo6MYu4Ty5pqo2AS2NyCvwLjwQz8p46VCyJ1JhWWuWcCTiDDxSDG1HJXzjN1BDSMVa2RkMzHAM6iugQZnQ37z",
  "key31": "51LJfctBfUDVJExcGGQkiSC3ED5tkoyWC3ZyhBZ9d2N57VmVjYGq4zJwyi9jknPmtsiFuXwZYzNjKdZ1u6wqKqk6",
  "key32": "wZw6netpBCT2TnqtcVTYSMX8PzgkzyiBhLyrAbXXU25kc5eKM4WmUgYMYsH6MHMTkwrtwwNcx5KZXHiZXeajDKW",
  "key33": "5iJqLemyRA4WQ1i59cjry69QpArqdEpKCtaTNhQR1TVsNuTNhK5uFY6QFbfmevA5CyTXT6ggvuyFY7as7pA4GdTK",
  "key34": "65Hw9twywxGr7XPsLcA72zUnr5iqiWPGSuvkCFDqAbE4SK1LKnjHAUzkbGYEoA54Wf5jihGAfsz491uKh2MiGYJX",
  "key35": "4imN6Tum9g5qLGvzNeUMZQoV4Ee9nHcvUXAyHECjVy2ra8gCapvCCK3cqJN8WvbJ2McDgJ6YQMuzxzYvPwoyzSRE",
  "key36": "4kbDmfNbbFxEuWuZpU4acsHqx2rAbDkjJ7CW68NLjFfBjZEAqWarGhRYWoPjXkwJuqSBu7aDSBP8x2fx28knGPjn",
  "key37": "5jPJ6BDnoWYsm71wBTFx14vRJMLc2V22NDaxD41GcePLaBSfuGdRdgP5YDgE2DGud9WAc1hhFduA3AXR79n17CCB",
  "key38": "5QhM9mu2yn83rN4gRY4e7yyU1Wn3KZxA2e1YbtBD1DSMqV44y699jnhAdTPUJWNaHs9tvaVLTGNstDQLfKKt5sJd",
  "key39": "4HV9PcwZPtvYomzNgKRxNa9UzFG7uwjHrkYYmWNrptUTcXjNBGJyHRCjUTmDoaTV6i5gXd6rBbUw2FBxc5H3n4MX",
  "key40": "YKM8qYnemuLFs3By5HLdykL4591PMbDFktXbMntdg5iFi9WGXomEEpnNbDiy315XVNQuF3ZrzTQbuRqBLpBYm6j",
  "key41": "5sEZaTyeAtmWbkM6uBKVCQ9ieUqGMdvio2REPpgdTjTWqx3ibBzRuLxLVhpVexs3tpXnNaZb6wx8qmPSdyCPXzN3",
  "key42": "24tpP8H2owTe9Sm5MhYnfoE23WkJTNTJCCv5pKjr1iJs4gMKgmwSG3twktikSFZmoxJG12NDNN7kcWwo2GfEv26P",
  "key43": "4xzeob9VA13epxXx5aGUZ95AZczoYy2nzcNBwmhSzdVHaxHybvT5RdLx3UxLrC9qfwB6BebQiHgy2H8vaNyZ47aL",
  "key44": "4qtCE9uBKRhyvkMJVtqLVEVPCJc4n18Rk338nqySVk2oaBhK1v7XchNpThKkffYEvPtoYQEoyGFhUWPsP3oBX3KD",
  "key45": "3HEMkL9krXmdoeDSfdXjEa71EDB6BGHDdomJBXv9szXbwk1yY4GFyvhYfLeAty9JsDawVtGNSnthzesbQs1sNdxU",
  "key46": "3pbyQ3UPMTtLVmxaUK7kWWhY9VAvMuLoTNLh1JYxA26nGX2CbRCXXZvvfnNYia12eZ2Npeh2ks5Cc3ZXxURdvGw",
  "key47": "rKDquuJhRUBkVFqDazwuViFBXZjFwxfgFU5xrEqk7pepyUWi98CNCtF43b1WgaDJPBMgANrU7fCJhjUSRQg4SNZ",
  "key48": "5Y13Rpf67A1vfamLYaLBfZUZGebzb7G8Qzf5uXi57TqR6wgf2XQvsEhmSwj28vDgEZSHNRDrR6CYg2A5tutv14rF",
  "key49": "3CU2V97R9eNwARUaAaDtY2kKGhgHDqFqaEN62omKWNFDQ3rmZfvsukvP2iCv4uE8XmmH8Pb7fccenh5WkEfHixjq"
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
