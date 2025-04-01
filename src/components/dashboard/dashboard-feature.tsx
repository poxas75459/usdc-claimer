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
    "5A7DNsvGCW81wWn1RiJFJYgPRKusXwJBSBJMGJYYzSLAgmFcc1mLUvxpDR9WDrzAG48QUxxw7B1TBmYMxtfdEQEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfXtPsU2uvW5u8sqo6Aw8fs3CkVwbFjkkBLd7VtnFRXiRT8mDgqPKgPuBS5yja7VDUcVVbiU85PHcHinjpEhet4",
  "key1": "cWuzmTSyUkfa9LeNyAdJgwzfMdrbKd3rd3i8zjnnnyhSbXYPCCfGhByhW1WkS15BxsPYWK9epgZutmH82VmpK2z",
  "key2": "5wYeK8nBruq5h229X2h5itJY8RJP2puhhB1nwJi952WMszWjgjKKhUXdxuQnNaP3tbx7CWEKWeEbRHULb9h9r4SV",
  "key3": "gujASxczj3WHZqVk8ETakGw6r2giPow4Lt6jB6xLvdH3i9hPPYR6bMQ4DwKm7FMVaAK6Y1A3SR79bKokhaRbgMf",
  "key4": "3jYsikfCcgh1s2jpQazpmZmdsLgECts4JRHrdF92DwwUBsL4ZjzdczaUVNmC8zTNsuaYzUtoB5mGfcUgH3Z5nhpE",
  "key5": "5fP3wTEqAfBkgkoqZwuhNFFkPhqRSFRpVvFJiYfsz7hsT2xSn4WoFevynkKj18QJoYR7UMnXcD8zbPbR7CmVsNey",
  "key6": "2FTpo2JXN916CbLwcfRwLJWAPHA97uqmrQR6QovFgc3t4WMqTEusVt19W5j4NB4PzNespWsJcDTy3zAkMVY7pTj5",
  "key7": "511bRxFpimPhygdNbhZQobKAmN99vaCdVt98jyQaCKNZbYkE5ugFGK89QWkb3zBfeJivrqf398gbmqTgWXePXC6n",
  "key8": "4mA3QZh93K9mj8LRhDLmWjcnaMMw8LKdFQbkVVS1meGAgjrdo5hyvWxiUgaCrzn25kzPN6VJSX9AMm8NGx9bs9qh",
  "key9": "5kwBwT2Z1gfezchZkBoRp92F3q82UvVg2bQRCDEDejMKy7RhKCvsMTv4b2mxZzdezx1Ug8L9gmDdYoxe4Q7wXUid",
  "key10": "4hc8s1owMTm4WnGYAE5mbN8Mgb38zJR5BA8GUgH42uPceAjF9T3sznaxyGHBSmj8gEW3uB9acQPTeqGjxeYzpgtX",
  "key11": "3ayKYV5vqQH9DQjsMEBpSePKi6m2T1KcQmwDEongyuu7mmnPeGeaSNH7cEh5WbC5qVt9gTX7ZYYgrRnrRomerLfH",
  "key12": "co3L3gDjRJgam3eHc8XjXdvWUpcttA3xGEZZpLsAAgkqvT7byiw74CmihfqosyFWHC8dDcvX9vHWYWw7crmQ5YD",
  "key13": "63dZCmUWN512eBodNg7ekkjNdiD1CyEPpJSBvhAqaaos8qaLewK3mrURk245z4uFSR8tNKU3XZgGdaJf2XuNvgfJ",
  "key14": "pnryAiC6VSeN8XGoXa9KnSk5Grdg2knUPTYxzGYRVvFJh2dT3JqVpAAJKUV26udGMEHXsvdfcSsZpv2hQZkGXyK",
  "key15": "2or59hVdam9837nEAUeRH8YcfyE5GERwaw5UYmFTZUXRUiFRCDY1eZcqBcKLMBPdSTSUVMzavfnbss5mdpMDxFVz",
  "key16": "3dymGpMSTnbpzZ1sCe9rg5SfyTaa8pf592CL4u913WgznWNCuSQKgY35LsyeV5xvX3AGEPdkWceCeSUyNSGe2sf9",
  "key17": "573CDnpuj97jxjRfLzvY8YkvKW86bL2Zdssj4gkx5RksTT4VoeSK8hk81zwRwnc848pLCT41VTZcSCRPzp6zefas",
  "key18": "3GQ1uHBd2rPcDsDR46KgdZiwEfV1X3Mz5tz7nZJ7RpKWp4zTm97YhA6rAkw31ajdBzKojTaF8pAiS1VmTyKgvGKa",
  "key19": "4aVMj2UBoPXQy4eLTxqL3aSXnvowhdCBTkPdT1Hc85bzzcixuHETZXgeTbUBSNkBEb7pfLSaxQPZBb8f9RbkWn4v",
  "key20": "3dAUi19SdT3SYwkiNurCskyHFUefLcMXeTDrvHmgT9yWrmFqQvH94aPgeK9cX2WGQUfYMUG9BuU4NoQRZQX1yjWU",
  "key21": "4jUdNQnTgWXaQW7iQ3eLtTFG8i4trimKeNV3YUXiqi7z2Po8tfeS2eL95yoyJuE1vsHui6UrZadekHzjqwSBvC15",
  "key22": "5DmBX7LRYhuvx8rhfGMteWSk6kfyJewU4w8ysyUwxA9iFttTiTHGdC6xy98MrzEXgYqxvQAKK9MYzwg1pvtPTGm5",
  "key23": "ZciFCC2AtPtmMCzyR4B5xM8RfcC2Cx6a6p8j7XtDzxddcCvUDJMzmkya9UQyppxGNnRCL2vUCXSZni9Jv3P98EY",
  "key24": "2vyg3BHvg1h3RE4x1kK1CFpEj7nLkTZ12Pa6Ho63TnmHhKG5XccVE3KG1ojVeX2StgMDMnRS1jaRCtBffMKNjvbt",
  "key25": "3R5w2uNgViN6gYWZ5ZRugjhyBpFdRtWZFFqJrh6kvBLbpMi8vRw65ui18E4JAhbVDJE7QqCDUX2MDeWgxhEi3mRL",
  "key26": "21spK6NdLGcj9NuRgqZoNVLSn4vWwWSVNhRWCb14eTtJPkBi6mYznBGpEDZX2615dVEGUNRomubuZNkK9Vqi6B9z",
  "key27": "5xw175xQrdh48GQHGeUcTqYGGpWCFF74NfepEdSLjDSos4p9UHUGb9KpE5zjYJut2Dev1TkhxxRWebFzb39zTHEh",
  "key28": "4m5p2bEDGHoZbzorHLgEmTR1zFTiMFjQiPikBKfzLpUiBrxhDAHLgV8bbMmcG6vqEyWoYect4of8PEADV3QUxms7",
  "key29": "XeVFGcVgMExtrSavhWkdtens18hWbY9QgebfyL35oetnB9v9HjUJgsh5sfGboTvvnbcbnuEiqe1WP9bbKX1UZwM",
  "key30": "44w2FgCZ5Kj9X4hhn2QTohy2grzX1bvR3XCRxr2u4oj4bDjhVNZuSzoJKhbVa1Jo2VBojPehef1XZCQU6KqThLgf",
  "key31": "4Dt3kRoV3ovyAEnAVa27ivMjaHRXYwau8RDDMZApr9TxxN1aAiKC6Ec7vwD73kivZU7uS83wbU7xxFT1pdQbxMoo",
  "key32": "2q7gbt8cYPRZE5u1TktuZ5W6tV9JPjoKQCLBuC2WACx7oAqmu5i3PpsiNYZvrm3bCj1re9KcxrE2VJ8GFZKPG95h",
  "key33": "4VNJQ2ZJ5oKrNYTnpgHb3a8QAnbzEYoyDuYDX1uU69jCKpSwQVm7zTBDU4rvVRKPSq7EGpwGtE3Xc94zoM13TaKj",
  "key34": "2TUhDc3CoJXHdpjkFCW5Gt5zV2d8MYU5Cj7jjWMn2MyZn2pbZ5nZFcYdVpKVPxDjz5taifM7yLasWnDvkqW2Pusd",
  "key35": "5v7jBtau3wLiqgCjh1AxbijAp5Eksho2JbvxmNx2TYQVrnn9Fq4HbpsRS4TZczcyArteEzR2XfBzxrveWcbpL7E2",
  "key36": "5YCWC41sUsBPNv5FuTC2r2rr2EKb55Kjf4846eUxFdxuzSxuZrYUJDsw8N6viju7hYEuGVfEebKtQ5JwyyNKVbbi",
  "key37": "4nyP6xxsZzyeVkFbmbr9HFdSmNzPA1ftaXoPRShLgkUwtjfs6m3srL8hahu47g74sL7isQBjbG7mhfLP4pcoXRpL",
  "key38": "2cT3ViH8AvCNAegKM2GFCuBFS31t2P699JcF86v93K3TZtKwaYrW9bB5yctTzS13bEh5pStHree1KHrN1daT9sWE",
  "key39": "3wdSPTf6w2aSVCZ9PYFTUErHvcRGvaaceci4q78NxFfeXJuaBf66uzHV3KCo1boWBPt5sDTcP92tC4oc5zd7w3gD",
  "key40": "54E3qR4dcU9nzmUmCox4HVoHgU9EqLWteLShn2QWLqptdht15Pr5E5QsQWjfuXsSFUorMEj6N9sEDG8X7ZBNAqEJ"
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
