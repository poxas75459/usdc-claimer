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
    "j1khSfcHG77PHnCPQCGojNviPYbYRgxPsKU7TEpTAkPKcu1cVfWEHEjcF7Rqpg8sYR7mwzdddqYvWU7DWiZksmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvXYtWqtZWDqdHBVFFrFBHX7x1ppGLf23Mep6ttavdSzhdvnLrDZDp4GkUBReBUWfgxwHYwALwLE5GpWGNZPrjn",
  "key1": "42oGan6A4vYiMikWcWbHHDf4qeLqMW46jWEFs8zVWywdTiQaX7rHZccGzTgPJi3briymWMkqwm8PGA7dmJRrH4Cd",
  "key2": "ZxAjaMT348ZG1itxXb2WCHYeJDPYdLbmutyGXeACBwdQVxB7KAtPAhCxxdvJBiU7eSJsKZ2J6GmNdfTu6m9WLLY",
  "key3": "2BCwUJDJim1nuWHxCiVMsn43HhhumFReo6xPY33DTjArZscfcty8FEz6mEL6QpUSTSQc6aYsD6Z8oYsWcDMvBbRQ",
  "key4": "3i2NAUEDydfnnHXLbCvzV4zaG3LDWXiYTYqDrTPhGWBNTERJyTMgK2EV5aQAwQ8p3Qwo15EA9XaEuD6KmqivRjNP",
  "key5": "2pfm6A4w9ow912uE9NTBRbGCLYbe6BJszTqiemZR9ZgtzUxnaR3XFgF9ceiCvvBk66SjcLNRHYc2gEyV6viyHYe5",
  "key6": "5z2WAx1856fhWSGsiLPJkheETuNnKthLkZvpnL2bMWsceQZQkHg3Mn63RMdS3nYaoRyZ9CgdAdURRPQgDdUHeibA",
  "key7": "32dL9yeFoPwCKVZCMmUhf5L1Gqqiyy6VdEFuXWo13dNsFdkmETsagBBNt8h6C8FeNSjdU69oRcuhFZvkt8HRwmks",
  "key8": "5d4jbJg4zmmX28Knfkqu1j84aB2jA328sZqH5yF2qsAmALSPE48wEBarKBNpTC3fdZ7SG9hT7t2qTjtUdcPYTjrS",
  "key9": "J2zqJP5wpfsVn9NeNM2GgHw3RTL1sVPTTppZ2UtjXfmCV1kV957nke7KvemY9ZwGs2sBCSbZXyi1BGjDNYjMTVG",
  "key10": "t9coFdGYAwun2Zn8ngb386oiF1DSpcAdjH1W1vWYPmHhH5d9BpEu1v6DkN1iPT2i6X1iwdQg1H7NuJwRKGUfDTT",
  "key11": "4pnD4F8hpRsWcWtcR287EZZojSrTJTRynz9r3i12UzT9Pdi3cQmM9zY46zjwSfmiQ5EWggM89q9jQdM35NWwZadZ",
  "key12": "ni7fssaEveiRwWQxyn9TCQCYTgrngSVZ1SLPZghSAYAVCVju1UiWa6CA5uH4oraro4AdDK7stupopRnGzxo2BcJ",
  "key13": "4oBrpgaDAW9sTCy8UgcrnFYhXeu7jMFg8FVutVgJgszHF41BsAkoYDvZAumooqnz53z5aWCLXXmwfdhi15zjbHUo",
  "key14": "59q4qN1Um67SZpn3vzNpnswsCjmoYJ8gkcHtNyMR1HFR8enAR4AUM6sU5jsXMWhHc2BhY9qzsDDERNmunitHrRbA",
  "key15": "3tmNFuEeE43Zaef2sjyBYz8sXzwGNkCCKmLqJ9zNnXjuUZDTuAZvukRcivsnrSdGa1xgiAfebQLhGeGsqWifp78v",
  "key16": "4eKzr8ZPvPM4Pzmt9xuayy7WHhAt8M48o94k8sHGud2y5sBRq8x8JdV9ZutXFLMZdVEGrMdYee8WSHevCJ9CvCFP",
  "key17": "1EFgTEodAgNjX6bthkB7qsupjnXCwB6XQKSrGsgrQU9MenbAbfqCefTwbpejMDdcUyo4x1eLqhcy3hULNZP9ebE",
  "key18": "539wC1Y31TxGepMnSSPmxXdTuRRC9rGgKg8RT4miC5ifddqMp6NmPF7wS4CwWnxcpFVELHWtse5JsRtUuAtfyVxC",
  "key19": "52aHEzNack5STcA5AhFGGxHuAgdHxLKGVhav66FYd7QvqWzzDsdUAtsCvPh12zsmTBXabTztaGVbu4b3TwZ7jUBt",
  "key20": "3SCxAQnUknBj4ZqZNkaAyJiYz9z8gsofmUUNpAU7A5Q8oJChBZkbhUCyc7pNrWLinEjmqFZyJ49Xz5hU2U8zxkMY",
  "key21": "4M96jFmddczkegJTuWba6KX25pEuq6ty2HPUx9ukuhNVf8U3LFYDXaWDM6nHWS7uq93xJZWLozYTKQwK2HLk4PRq",
  "key22": "GgwajAMokNRnJyMnooqTZ7dGDvz6xhXfSWmph76pZQYWxXfyHfxdHDSrnLEbteHm6hDJG7ec83qh7vxdtXgo6Hd",
  "key23": "5jJJR3V3CapQN6Ud1SNZ8Pohf3ePwTwvJtT8FwrY1XCaPqpsqoMSqMFmSx181raxFgQNTd1DEjuwrz2PWWLf2RUV",
  "key24": "2BBieiXty5VK3ucwaJpgqCrQNb8bfpcAgFZPr7WmBsQLr3MCaBKDVY14ScPWW7jTVJ8UFRfJh7rcrmVgNSoTRshB",
  "key25": "6akXPHSxEXFMXRUwzxpfvogRvEybxcoYq4DFaVKHCqHMeDzxKawkKk3JDzBZkQZdwScxfQP9EPANWVTu2korsEt",
  "key26": "qiPzW534T94hB8dV7FCQmm72MGURZuNaVmLVVEeRGADtC3AFTqx3opPGmrmrkE2YgLgtXmW3u4r1Xt7xYe4j9KT",
  "key27": "4kM2bCB6ydqXkYaq4icmS6fHt3HZKygeou7epkMZG4aQvtedRLVLEHx7vFqsodkm6zF5cfi2iMdPF1AEc2pHtac2",
  "key28": "49y8xsR4A3wGkydHvqdExwjaDx4maYAQacoin1Ma9namNxoMd4ov9TGPQzzgZUL5wcBtyEopif1ifB53JR9sFUR1",
  "key29": "3pVoV6gC9qJhU7E8rMM11F9UJ7Vj9c67wrvdt8HL67cAPFSS4FZPCJ1AxwL7Q9nbEs9BhAwCAsEFpCgesqmFDzWe",
  "key30": "yRxt1iDZGkN7SzJVEoKKz8NEG99ZrAc73uSNUga13JUYrFJw5hYuKwjfPgseUHetNhoEHTmPisFaXTCBizPCowS",
  "key31": "3naUwV5ChgPF61YMirgC6kYQkVRaUHw4QWGgaavx4QCiQhdu4snYekvtnAJGdYX4XQWMjbrcPaTPXQ866zU8aVHR",
  "key32": "37JMHD95gDFPuC1U2kP239YPJdoad7ezUmg1JAeqRsgzwfZv3ARK6X8Bq9r3w8WKvFoBAcw3iU35zPxe6SXDVHE4",
  "key33": "54k8ic1zdbT9AGL1pV6gJqsNvR6sYgNi5Yos2bjGvM5Xq9n2g2DX5htNf7zPaWXJFwxXeL6VvWbBSJqySQQCEe6N",
  "key34": "3BnX8ftwyuphCwGCLddDTDBZu9Yw4GFeLg1k3V3LejqBf7axrLrxBwL6X7srNY3jyDrRCYAkyPbzsuyHQRNbRjQZ",
  "key35": "4JhGty5QxgVDjsxvuoVHmMQmKapHEytSeMbXM4ZxbF6JK8MkHqRk7i2xr7uwCS2F9WFmKebGKAFvy85H3b1gBwh3",
  "key36": "5FzTkCp2hG7B9awyZ6cPQRKcwUcZnFPy2JwiEfafedEd4j23aW5vqQUJsAJYcEykPTpQ9cJUen2Mt6e8s9gwhjFy",
  "key37": "4913DfVgQCxNXVnYDGNQUAvmgkU7ZuPzYTCfp1GNcX7bDaZHcA54MEHKScf9524PGzu9bdhreyngH49u3f3CDP7U",
  "key38": "4og7jhatHZRxwfoGcRUCrKeUnbHNKY9MZuM9idbpQxNHcaxR6PW1zLF84rfVoAHTJTxnyNFchJxzNew3vfyPZZPX",
  "key39": "3vpkKq4XH9VREdKsRs9R8jNaGWqZWGc9bjLKRppb7vBFTTyspDLLMEYNFrx6vFsfZ6N4P8LfgbEsyUC8E5hqLPU7",
  "key40": "Fd5XETJg4cBV5epQpzy4R4GRQ8nnUbqij9qGNJ2f8oAExc8975tyqdBdMkDh3oWRh3Vv3jxnnmGihnqgvLdLgnD",
  "key41": "54ft9LfkoShP7BcFVzXShq5N8PYQU5zWvc8sH1qp3NzdzUCBXueurYmZ7N48itd5gG7jLWBU3Kk8DhdsVPmgWCF8",
  "key42": "3RKis12ZrGRhnPPnCYFCht6NwZRAE7M89XqboYJ6bXFixGxEJtE3mfuauL3U4AzxnwscHYFq5Y9bFkgBRZXHxemo",
  "key43": "3Be8hKmwsCnotEaRKfRrapzWN8k3YxV2oo6aPepMFzG4iYJioDeAa9EVt5oAFcuLSjZ4nR6EmV5STDx8vDCUshqZ",
  "key44": "5FRap21Q8ebBKbzPWjQPxCEWhkadeQSDQm9aMxTTQEDtHqpzvaKFmqghbQgUSiMro8DCxVTMYdamHUnpCgpLhKfo",
  "key45": "4GqSTrjW12rW3ffR26tZBtjtiDZ76651zUiF8CfJkXFjrCLAUXE7NyWKm7mdF2XRhzDXqQFEhWYkgpV3MSk3MEe6"
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
