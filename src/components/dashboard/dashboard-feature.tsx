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
    "5k2w2JBsxparmKFUMqRZ4b1CT9JzeeB2BZbUS6zkH1gT9XzqxMhm4GbRAp9Z7LcgpZvudcT68gcF5oja1dhk5JXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34XCJVNgNozF74acWUPVo6DpzxxMX2LjjVXZCQrbeyXYJ4tkwnXtM2oev5hoMCYKsWe1eM22Gdpo4gMQGWwm1ySb",
  "key1": "2EApC8455gKhUsp76hPGDHVc2FUpgseKXz2Mwexkq6zfMZhW297kgSJkRd6mexqsyAT5iv3E15W4agk9UAuxkYex",
  "key2": "2KPdaFFHXhChse4hjjEFm1ZLUX5k9527i3v2U1VkRJixVJVKoVCmLg2gTT1AMbeyQXzkJXPypBKT8zCzUYCivgPs",
  "key3": "6KmcqroKM1gmd966yeZSnRuu8N1NvsScZ1zXnRGJLmcAcQFYVPJaJQUD3xFCW1DGouUPUeGXcL3i1TrJRTgED8E",
  "key4": "4k85PcHFHWzPUBspBts85uwTRuTyjQPZjgmdd2rFfPSgB7rYKt2gJjTnTvcocU292B4L7WawZT1b5mCEYaMcvSCV",
  "key5": "3yqYG2WstixK3UUTTHXSUiNK9kbc7uDBcCSbrXCkuKQGjMaRLmzkvoVYWSipXFiL8ALh3ZPxSDC6K3v8ApK9cT88",
  "key6": "3ciigpKWT5LADCEHsxE8AkVbA34ARhCLYLsjRvetctcxsLL6eujp585XJqJhKHVA8muLET9vErmGhteofUYNBpxf",
  "key7": "5qv2YkysgMwCYEsmqVn1JVP4a2wPwH9iZGsozBesmDwzMjspazm2CgJkLeQBiqfcSw8JuCNiHLELys5GxSHXeBUS",
  "key8": "5ojTZ61kYtJRUjWEHvxxTYRSbqzmWJXJmL2oUtZQnBsMoSJsUm5PbvKo3TYRWmrZgWzjpq25wNaGsrnM4yG4r1wm",
  "key9": "3XgNNjzPVrnvoAH5AK75LiikzYS13o6KfdUe9ZnvamS87JZZZyqmbxZhBAzpb85fqPMTtjx9zhUtYc4VmFHvrGuz",
  "key10": "ZcgejAB5pzQ4Dq29seDqWeJ7CTj36uVnbQdeait5YshvzVW1XNhES24PVfN71rbwDwxRXKpf2oEkbqhVEMPUjz6",
  "key11": "4MDrQwGVumDxxaEGD73gCopJEkN8tsboirYDJX51dEKS4xNQuGXHbjvjd8NUe4cr2FDWtkDhryzMxfTbJSoUUvfE",
  "key12": "xQV367PSHLAsZ317afW2xVuvRxfVC3LPye3dr9GEitpA6PrYcHojmS1iERLTXda3pPF968ZiWfVP4s3o9sktc9g",
  "key13": "r2BrgWETNDh8aTFzeH4ByPTgzc7mfk3jdmgwHVCjVkhM4B3PytTL3yJHcbLWhdBXPzopAAweaW8qXhqL5XxcmKP",
  "key14": "2FyXeAaoMpi53qfVJ7cHHwPfqRKGrQpCSVzvUSuotbRSNYt54PUHdNf71yaefcHsjaQeb54Z9XK1H19pKYacSDxt",
  "key15": "3Qxy3dh5uXoH8uuebj5UoiCpCHmBcbUeP71H4hVB7Vv1pPEmmUG1RcwAZRXV22N6yP3FdAg2bDm9NwyK8wfszxBE",
  "key16": "3cEHPF4DKZfbnLjxqkDHaERm5o9TfMpUeb2XBkCVRDeiyKqdPu1BQu4tiCt5nuTYndtRw7PtKeywaPkudzdzewGm",
  "key17": "3adp5tfcTMz6YKGGLvjFDBrWr5PHtDj5cWzaRgcZr1ReErrBvd6ZcHdYoy81AhsB8wHqZyYrwypS5cJbXXB7evsW",
  "key18": "17QnNTF9dhE4vShY8hStWDTZbhzeAAxumexXwZre4XqBdq8ZQ7aEq5NK5jbar8U1JhvfH9a1hiTSfAP3gAF6JJ3",
  "key19": "dSGvqKGqJ5cGvpkLzwyGesSu5TkNEbts59TVAtFR8o5anSVucn4bSwaKoNxZFNgNpr17KAszitt4PBjdYnwXTBT",
  "key20": "5niFHcVU6bH14AA7aMDNJgn2giV3xEDHuJ9qsWYnmSM8RxoG4YAA188RhJLSTNGDJZGg982umZucSMpYZyf18hsQ",
  "key21": "2QEsJz42ymCg3CfQF56oXa5AeSs5inF1MEM5MLYP8KZZueE1agV5b9PoH4fH56bxK8nr3dZrfgetJbu6CyZrLjbg",
  "key22": "3KpjRzmyPCgnxKUHNdU9ovmDUNxJBeBJSZ1eko9yH4nh59jEEc8MDVC1KGCYdTRtXoTKqEgX9g1uKKX2Y7qYsqdn",
  "key23": "4hgQfwTSLDmivbqdXJ3k3y3DZeQKnK8XZHzPfd8Bd6YQSXBuVsFTGBEQruqX9Z82tAunTdQyXwi6zUGytREi8y94",
  "key24": "YzbkWzFyNEKMwAPhdsNMry1oamJu7pRjbRwmXdXQ4FCTPqjinwijo8owqZpn1cwEeazR7UPG2g3YbWTTz6eowPX",
  "key25": "3wncT6F2iTEpNqw9eLu118LmZnKz9MnAWEX1FZR5epTDgxhgqicyy719BKXf1eQmQKUzC6sPSe2tMWToT4BAYMZG",
  "key26": "3CUQGwfFNqGsF8LEWQwypPHYPEZ9vaXTNAgBHVqT6xYU5P2CKWHRNMcVENQ6Jd9ADaGnBTNPRJTUXS1pgmLsVZky",
  "key27": "g9UxGZBbq9LEDxHTXZBRaWaScZ2eRCay9EPSFueGmCgKiLevTRrUM9UdBhcYAhq1t2MQvfmFMv5G4bHmrCaQAzH",
  "key28": "5sGsnJNq1ZSsP94QxWEAotMqyeDwn2s5G8tqYhTSFVhBjtu22DgpCPKKoSdXaKyJjmUfTqkXxUst7HshCwcrT9yH",
  "key29": "4vGPjRcRpHSGHGd4dGU6vhHzrduxm4Nh6iAxtSn9YcymLLRQ4AkeAw3uUG3dHh9AHpbb8KtN3Z9xQS4DqLejaQi7",
  "key30": "8k1EnCnsYpiWHxZsEu8aJSFfwHbWCCBmPRrf3v1E82S84ncjePnDDPewemhWmqdyNMR31559NtykiqbW6aYZF1z",
  "key31": "4EEWAYAGKvbBLyDWzZenKgAyRjN5k4BDN4hjcrJNH7KSiz2DqxnqtrhW7C9b9cefJo6JupQahLmmQ5FJXVbvBBSM",
  "key32": "4reAhWbh219uAcJqYG3iUvKkuWUSWiVmyLYWESZRNenEuMesyg1BGL3kTRarQ2YqKWRDyjR84UCvsL618sjkrh9H",
  "key33": "a6FegWCCy1vtpSXtvZcxXWYa7kaM1XZSWBmbvY4k7EXbLXabRAZ8TEBCJjQC7L1eBqZ5ngZ4sVTcJmMf88nTygB",
  "key34": "44U2XM7LQ8f6x93oaVaYMAg3ykfrRxccGKphFg6SFFMpJ61q53cQRgBRa1tkcHy6rWPqguLLUp4mc1yYqUaauiWu",
  "key35": "66CdrwF4ZUw96mNcVF5L1ChzrdT7gGJ14JEqznVpj7aYMiw225NRqeGqvAZAS9Ys8F25HMjWWyATseq7xcwdvihz",
  "key36": "2jK57R2whRXhPXBiRjc8rQTgxMbnMUCH4HGZCqrnCsEjKyRNfQ9doLAA233c15XC5sxnweE3Ja9rqxWSTgikWdLN",
  "key37": "XeBURwC8QUiLKk3Uso89B8LfwuAPCnEy5gVErBZYfddVjRt9qM55vF8RxFBvMWEpdtoy7BSV4r4kzwHXZ8n46aa",
  "key38": "4vti8nBvLyxghMn8NCejeUEskRqRapcGfoCr2wf2DfTo54wr2yvhvTzQepeJARn9ui7JQxeziLt47Kr4SUkqDw8q",
  "key39": "2DeRuvFbQNz8xcjgFWwnYN3U8GfW3JbMgjmhVFykNE27WLbJWVfw6dmDLURNUMsMqzdZk13Egap5RLEiC7gXxrXR",
  "key40": "4ifwzg6tGWmpiAd8bms6Z9z7XcgMhXwFyLLe7bmj8Ug9fE3YjQyvcCveHtrt6LWjzFhUh5DkX3W1mjtxoJE9GkQ4",
  "key41": "2wZY91qnKaASXpHmrWyC5YLpNKrPQGYFDJuYCVuM243S5eexqZRtZy3KCwywVhePem5mUrddyJrnHrhApNVGRjVG",
  "key42": "4Ja9CdBYLBZ1GEh24y2pLhUBdzrhS1ZtERth1SzF5i4TERm3CJwaeVoVSXpM8C6aB8PtPZcmooZJApaANZ4AdJHr",
  "key43": "4vaHjSbqMKpkqSiPoZmZmQEYESRwVviTVJ4DAW25Usybvu4TWnmoR9V6bqPqtwBQqcqX1PeeWYLdTLubgswo1Nh8",
  "key44": "2CqqThBpCU5Wt1TExqAkCgtn8JFJ5eaSQZEvL1cszbs8oxybf1b4Bc4BbjeyEV3BncTYraaap5GUxdy2HGGs4EKV",
  "key45": "62sH9sjR3NMSeqqVCk1jjCS9ztkzmLXorYRWAPQCFQnHwMAjHaJNFzij7tHKkhZBPnLnUVJBGdDBEPjjeGjqE9Ht",
  "key46": "4zifHtPef8GxqBxMDbsvRcaU4qA3yRCcNGcd8ZfEkLWHMBqXQEa3tXvYK7UXGMJNVm3KiAp7ABg3NTcknw3V8Wav",
  "key47": "TzmHgxaGkTRE21Q4ywy973CiiNxj3RRGRHaDXyXo9LoH91vcBJ8wuUpaxuWCaJkcBK1bAy6rK1M5HA5MyLXDt9m"
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
