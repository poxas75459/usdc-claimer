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
    "3PBcLTpaqi2S3M7FCVnUZNa4R1V7XE5frTntcASALX7TzqxSFXDJMnk81X2EWZBHgu7DzjVSLTgNNpiA9rFBYJXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yfzJveLJAeXuqSBeEVVSEcsCgPaY1haDEAvfgRizE6tsjW3JXdUae7CDGsRx254GLq8JG7mvqssqVHgkfrqamL",
  "key1": "4sgw85wHXrQPZQhVoJu11PwvV1C8LazN33buZw7S9XvR4aBXT9vgaQ4Vmk5Trgw5nzt23tuwY5fwk7gJ49KmNz8h",
  "key2": "2sDkrLgxe44M4EZaRNr6WpRDxWkvANL1UaDKsYJ6WYBWPTmrDhG81cvVk7G2aSBhaL7ouAFjQtDMAyjo1PQ3VhD5",
  "key3": "4RHv2woZXj4e6FA2VXcNjmesPoxAeEQ17LTr2yiSFfPc3iCnnvQt7QJsJiAHD1TmRgHZmRGWUBkwuc8Y6d1EoF36",
  "key4": "2qTuy6Sqs34P4oH9mfgYwH9EwQQHKgEwQHM7Vn41gqAHcQXxvCznxsJza1h5DKnDTMNjownrV9Pc7yfvZGtrfew9",
  "key5": "4A5DbwtpBSeZBSv9sCXciV6M5g5kJHg5kSSEKNYJCNXhiGC6sgyoZUZNfv2ts2Fik1dT957fNovxTd5mysnTAmWS",
  "key6": "2SdjnDk7GhU8nMVVzY5fhyR1ArFK29w2kQX7eYpWnYfsB3S8hL3RYGaPo3H6EGeMYfC38LxwsFrE2QRCnEUUEPbA",
  "key7": "5dd4Z4GXytskAngTyXHdP8ru31vqCfqRKmHWmCj93b4gY36MShdXpyJZxBHhYmchG2Zr8nFUKcXPL2XvaGenJ29e",
  "key8": "2MAzWyAuid8ngfGGFULSY6sGWANbjpGMPqXqavwRqsnhqPNf22Dje7JLQ6jo5cEep3XMnYGCTNAYjViC5HTruMzA",
  "key9": "2aNSfFuVssxfHvZoCbpWhWJKiscYM63PvztPKdK3dHCwN7CzLQky7XfwaTT6gbLvRJ6wKMJ3czZWtCfGiqvisBrH",
  "key10": "5YFcFRj631WuyvvkykYow68hHpNtC5Y5B9RqZqhacnoMhxRVdUcUYyJZ64WeBZ9pEoU59ue7S8oTbphNPPrKTsbz",
  "key11": "HuCSGJcPKzTawwhXqsz8aB77KLmvdgyu9f1XcM5QbjdEFkLvjAZrTTa963UkKJbqnYsVCBphgYEx15xPJjPe6GF",
  "key12": "4sVNmbraD39FtuzACVMNbxRmJ1eyrfXeR3RLx3cQkJxLso7bAzgvVvnFXTZ8Jk1VNgWem3tTdxiVjsLLh82appzb",
  "key13": "41R6AsqWfFjN3Au4oDCaKndiYECoegfTLu9gYSoQZikqmsK1caVhrtTZKAoqvG56oZVQ7mHmEZfHPjV2Pf93XesZ",
  "key14": "5eptHy31ixu1CWcd84SPF2EjRhFoP4VuRwbW242cDPKVuY11MnNo6k6MuizeCykekicEg6U4Kmn2req3VaVW4DBA",
  "key15": "2jvQEFzoBBQuEfnRM53HMuZjBCo4if8xTC6KD9bGTd8kWzS9McqeVJdhmXjvS1F7daDFc8VChEvxx8XxjLMiKc9Z",
  "key16": "2uUGbaoG2hwQkxx6JRtRUAUG93bRJysntUuQeSyFpntfBMJK4v2ER5Wj6mFY9895AdTykQje3RwQQs7EP5iNrMVx",
  "key17": "3gE1DpAin4eCJjawNDvNdwzLVozMReEdYBpdXawCd6txE1X1g3r44H4qHiqAdnzUq5jaNuA7ZdNdY3FrDZJrHSVV",
  "key18": "36mickR56yQsq1fQikxJoevnP86df94JZkVmg7vQTceAacre5J1Z31FH2j1n78pjDUoZyDuDiLNLWFjRsvXhCQFr",
  "key19": "6yDxYc8yiQrac4i96tcaRA6aMamyZkjfdhpmrhB1vgT9CnorkDSL1FsTkBTtw2UAFMHHbTpZjxQzaY57CnwYUmo",
  "key20": "ae6ey6rGACEREhZcgtRdbvtzvAJA3WJxfVb6Z2GTYDHSff21PFaGF4BLRoqiQ7Fjf9HWvqrdS3kFcnD3pxebrTs",
  "key21": "okQwu3Mu4raEDcnY8zVQehiCF583wvjy9J1TRZkTtZhu8xwW3RPPyDuLDYKT15on6ZdtDXdAobzkAwoN177iTc1",
  "key22": "4YUkZNgUAR5DvLa1xNdy5b7FY2e3CwqNYz7vUm2jrfdbbSzi8YiRKKGGWGkCB4wHPGuVz4DzAEEfFvY8JAHxwP8Y",
  "key23": "4B3i3jfti2zzWNGyr3iLpbo2YKX9bYygyYiJbxwz3jYZ71LRa5YhF2WM2LE9LH4tK9vNtWf1bC8ZoANidrXyohhN",
  "key24": "3R3pmGELXV1SCUx7JtZDF2Zq2fniXPvGvpM1dsfNSgNuDXF5w2tEyUeWXcyWyXRx733hEwRzWWF2V2nvLc2AwdzD",
  "key25": "2nFhqabPUKqoiqusdQGKV4YwprykpkJsH9sR7aEZetV7xs8H7qbxRqGepNxCr3j3yTdeQ6a2jYVhPbt2UqVK7VqU",
  "key26": "d4Bwj4224yheN9msz5K58oRnN2hGYGoQZoQsuk6AnVKQ24ULabYJcUmWgnR4jh1NBHjNSEeyNoWgWuAfKYf3RB8",
  "key27": "Y4Z9cVQRfSq2Woh2e7Jjyk5tbPYYDbWxqMJG75an6N6cP1HYJ3cPkoWX4ArawR2zBeQFoVdt2AgiS6xHWGhX98D",
  "key28": "2X3ZCagg2HYBh9mBSK1u6hsVs2JwuAjyD5FUGT1aQFUPpw9vMRWtKsDndx88mDc5amh9McjJH4ze8zRA99ibihHh",
  "key29": "4c9BRCrtc27C7u3QPt6tjjm8219EUDHnPfKGnY6kjFtyG67etEaTtGAbE7q2UP4KQfDJxj9rWA4RqcTkL1jNrxZt",
  "key30": "AWc4iK9hsyAzo3X26NSsGoGoT5XVfA6wRMACL71repLq5WG9pYve1kHsK8hsS4sJf6nrdzyCHcZzAy89wYcpTsk",
  "key31": "u43J1x4XkNZuG53Hj3eCtVyikD6Rcx9nq1Lh5XKF2ewrcZxSjnjJJ8hepTs6Ro55Fj9FnjmiLQVWiMWA31y2tJi",
  "key32": "67SuN6R4SmVD8sJ3MJ8otadk6BVQVARzqZE2WEaVZ5CsiL7YFfTAy96FLHRwGafpS8fvWm5iNnDARKt82PMykPa1",
  "key33": "678at9kZY29gXbksD95tRdKvggcSKyW6RXAPkUPPXnDLpLeTembuHTqwdaamFytdP8y8RfdTRRKWQXD53pjUQVz1",
  "key34": "4iyfGgezf3vWfW4A5PW7p8QsnYp7on8r65kKu6L4JN2yhkHfECipKDQkBhT86mdg2aHTm4ZPEdtkCRVjortKCDcA",
  "key35": "44jG5CMtFpSiBtiY723uG8ubkQa9jgdPb4kPt1rpg7BnCT3tCEAoNmEK2vYEbi3rEkLRCrLEnaAQEwVkG2fTAyC9",
  "key36": "3rYRKPd21YcsHjyyJhwJRPhZftioZcsQEr6ALTW34EoPCjon8ajiATM4A9annSbcQMq4YN6ycmuT2aexhoxnq9fx",
  "key37": "42wqD9xDAVAZjJDoe4rR1xo6c3CJsUnVviFBzruBgzN8S6WUciX48NrHxGwcAQhSRBjJKdMYHwh2bxGpruQaA3fo",
  "key38": "56V9NPNpXJ959mwLipUT1mUP9AgtZAK7nYLmR3Y9oHpDv2FCWhK13XMqaYZWAdxLBcUphcKgSCecVgMjurDSTx2N",
  "key39": "4A3axtrc7GKBFGAqquFjLUxb3AnoDeWizRvsnTzhJTkTfZvenF37GyTu93JfurmpUdN9MSs65AY6pWPPe7znznxN",
  "key40": "3p3sJgkV1j9QBj8Po9LcEg1vDXBpK8sWEuWqd9LhZ4m5HSmqHxVvCfS6zHznWEYEugJ1UyGt4uRSnN8rVDss4fZd",
  "key41": "3Ygw5AkGFvyNtNKiZ2TXyzKB8A5PvxGFJGeAcRLRCkozQjhLnpe5qRdJCaGjxDYBfqQJbKJxnbLea8BTrqa7puJ2",
  "key42": "F9bUMLi4wYre1cLC5pM8xJPKQxFdSk7h2kB4JNRHz5HwKPyBA1GmxsA9W1CzaQ1nVeTwqEwaNGpZiC9RmCCsk7u",
  "key43": "3eGaa3XKno7zQ3AZGBDHQ3NWvi9a7qEVhR2RmH7TwjsPunxng7hvzFi961s2hWc2A3eMWjr2Gkt5qm9y5umKkiUx",
  "key44": "TZQdEckqdVkeF5SUzNFGZrmir7mDoahHXusw6gZAmnaVpnqZDoKE7KJSVbzD1ze4BsNgDebGGf2c7NRQT9Fd7Fs",
  "key45": "66TZ1F1wzmEPPxuGagW8pXyDtHrgdJ1y5fyiHSiH9PduCcb3JpU7tdDpS78Qo3YisXYqYjfhHSKRqMD1xoiravcy",
  "key46": "5XXsWwiVuxcNbBJvnqegMNADuLetEM7rwb3umy1PMkjHQqP7jPU7iT5BFz99HJg8kSvJExZR3F9J4bRawGDjMhCs",
  "key47": "4TSGTa5c8LBYgkqBkxxZFM3XZfygfentq4eGmKF9vC9QiD7yAGSKkeu4bbeLiLvanAGUAmK1sdPj5wZkCfJG1Pfx",
  "key48": "3dRV4cj7ZvHLTMgZQX5MrNaoNDobqfNRfybNr6tZUEsKYPYAXNVHM8CwXZ7wuPK6LQPrkX4bstM2vVKTLmg2KvTA",
  "key49": "438VR2dtCPJnZN2vvwvQVpDTZ43FDscBK57JarecCzhoGCviF4CZWMSjXxd9P5foLd4cX2dw7pNPekHKYB7vY69o"
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
