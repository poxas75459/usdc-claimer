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
    "yTms2Tm3EZtMqadbsPRMroaMNabFUo5jQ628J5x43hLLcxNHYkyPwKTTrciKbQjqgHqdpAr7zbybpjpH3qWXkuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Q1WpkYpjbgwwoFNqrfVJc2oBYrnZS7CFHDtJGykrS7TQ9tuVZa3p719vSRXzfoGnzypAMHk898Bg9GfZeZhXer",
  "key1": "2BzEsDZexkJoA3LwxTtxCKxHKHhrFEBdV4ZMyNhWctoCkpJAAxPCsfQMMfA76bcYsHRaSmkFRrUS9e97tztFsY7r",
  "key2": "5DzDT8CwAJ1hKDMuhpJPo3fUgEdZxeivuujrv5GAm5AHWzjTHCQWPcRxzCnk6WYRvUTwzcdNfa2hvJQod6c9Ho7f",
  "key3": "3s2U1aDSC9uEyGxsXQRBxsJEwktX2pr14gCrFp1PE6chWwJCsdXETbhAtzmNNxJA3nc2FzL3G5eGU4amnGaHtYDH",
  "key4": "MUpihq5SH2h2K2v8M5Ecg4Rc5x5PKzotk8qY51jV8JRfVFQGsP7bzarAESK4fzkDP71sokx6gaerU8D516hNCVd",
  "key5": "yb7fJ3zbzaCKLUKizN2eswJoQxE99M2sab2rz5FucNwGUsXN2zZi4dpzHHWZVeE5gjZktKYU2qs8F566K1xs4u8",
  "key6": "2UQeGXsZJa6asNxyGNrEVRJKBDTsmKmixV2jR22f4RbqZfgx1CtuCfkgKZiomBdvMYb68DRrRQ75XvZBEGx9yWL2",
  "key7": "67jQ2QN25ASurC6h1dcW81oYBb6THL7DJkrdyj9zo1Mtwg7iqo7QVkH7jmE4c7YTtziQD3EhDxky7XSkG2odWM8c",
  "key8": "qBT5Y4NogpMk9ptDGC3jhop37UJHg2xrF87U78uJugp9qCa3ErWWp1wJxkLswMqn6BWy5Kr9WXiU9QBFgfQJ6PR",
  "key9": "4kE1eM8fR2wuTsihH9TZdJQaE73xmn3RTwewvXQGApQaSdGEzdBAVCuTcBuHLTEyWFqTozbkRkMABvN797DjWq4a",
  "key10": "5ngaXpUv5YgemUYKNkSH7uMma7BKuPdL2JrU4XNMihbvQcBpRC6yDj4KkWGhqWAAQbubBujSAfqdFod5GTG7czr9",
  "key11": "3kgAHbF46gQgPtZwQcCzQRsU7bqdoYvi7ZFzqHZ34KxZd4kTQiF24Rj85JADfGccDFrXHgV3Ytnfkm5dTr3DLNue",
  "key12": "4SWtmYk8mpWFZVLCZrX1h18AXwtzi3a79h63cCBbzMfycQTJPupvxZ42mhtLKocZAvwD5P3UaBd4capK4BSACaTu",
  "key13": "2oS6iBqN8L7yZxKsKooMoPPLowaRuthfwCpfTSbL1GBiU17EtoF8wrBF5scDWVZLR8vjezTSauZbyRN9gLPLvSDa",
  "key14": "5zyE63qFUcsMmgDfmyUQMEkGSDq4HHVpvAFKFLhwrxy4wzHgCqX7mrdvNMgQTpCxfBpTuYpTBydCTS8wuS2ZBRud",
  "key15": "5Esbii5NdbwAdWMAyCHG3YkuZwB2QprWn44gMg7t9BuRxSa2Hi8uqpwkxwngD8ex7AfH3pE12VhZH336ajz8JwK3",
  "key16": "548bi1aq1LMPE1L6GPtYjXU9ogHWk7VhH8XqA7dm4GebbGLnvA892dcnxh9tPWv1BEZCMabiPW9GnPByF9iQ1EcB",
  "key17": "3CxrRfxLeQ543KgYoJQ6Rvab3MuYqk97Vit8vuKewLEUtv9Wfn7r12rKVQWqhz45mZGS3iYF1EmHVSCjTEaaQ8b5",
  "key18": "4q6rMk6apUGK64x1th6EpJg99iyuMUnBeTmdYhHtcaZhnzs1UhQdFC6QSZpPEp2F2y66WPh8VFJTxdGiThuahTWn",
  "key19": "5TobvWXCBfAw8q8MaNK2sGUf48GNMXk1irkQjZTqbf6wVD7cHAeYK564HBmNqANuomZNn8tWSacH8XdTkget1ZBL",
  "key20": "42fC7i6iDSZBxLWcNLDCbX1gF9ZGtiDFL3iesJd2iXuZJdhgvGvpy3qdfwJ368PDBRoaphpTSViVDsfWrHfv1bNh",
  "key21": "3tV9Vea13ywbgXyW4gu5YvASW3gGtPPvRH6QFmNbfQWEoGX2ULBzzEeD5wqyALf171yFD2s9V5oXERULRB5U7Qps",
  "key22": "i9NzfGkYLFyJQBphnyCqPvHucsQUS5DwG21YnzAStyCrvaNa5FnDnSnxZRUv53uLYe3WqYg7HX24mvC4Z8aMwiS",
  "key23": "656ZPj1tBUVGb3drpi2yfPK6K4XXhw1ueR2o4pvM7yzunp52ybTH8uUrxw2eHkJVw7RCFYTst9E9Vs7b6Gt5RqbM",
  "key24": "2MMnsdUyGzdNbGZfA7Tv7tTbq5kHjugnYmYNZXHGNMuHznBxQDXE7wvySszibUbotXFe1fFowVS9yPKE58wepagH",
  "key25": "2v1QB8LDzEz2kTzjXo7ZWg7fFeH9pjYRa4zW4WicDX1urMWbFy2nC2GPHoNURdHpYsrD7twPDi8v11Mm6jWn8ZNA",
  "key26": "XKXdMJgL9vuXWj3V53mztwhG38Zmq6VnWg6jBhdYXUDVdNiZnck7pydTVVMMa9DC2Vf6RktwjaYV4f3YwDJfbhR",
  "key27": "4SzhB8MnhSTAVhgx51JvwcSNZV6Pb96ncz9GcLcnBuD1dPZNdwjT9pdbKpFP2qjTvYqowrT677P4PWeiTk3nhQXY",
  "key28": "46KJUcQarXicoyHX2CRpza3kFB1tfwtmGBZVJshupRmKwW4CrwpJTfDzLWjgaDVoqs5bkpnJuS95UMub5PcvBs7X",
  "key29": "Td5rsPadRMm6X1GtEqFK82JU46ZVHSPKsM7UFwuLkhen2ftcDXnUKno9cbC1xvYQQNjv4Ad1HdacC2Dxgep4yad",
  "key30": "22YFxBtnxa72ZcSQHjQsBVmxStzckrxD8CM31cDKFeTjgL9eTH1duC8TLFh6yFB4MHnfeedfTkg9Fjv5u29HauqJ",
  "key31": "3nSHyhJSJR7daK3Kbvan62Td1bHfMT9fA7WNBYcJPJDDfgZgEQenf8yMNvuFDer3fdz6QVMaNLpgYtVQzCSFKkpw",
  "key32": "4orqJusyPjJ6hLXTob3LwRDQDPghJTZVmz4izS3hY3aePkocwkqPTHHypcU5LcLpC8N7ZaHoPF8YMAMNajJ6b2WX",
  "key33": "MPNgT9jqgWAYxBsLGrMofmB24zEQnmn1tSC3VC55ZTtXztpgB2Y5RdGJB52Pt1WEeK7d7saXbyHQtqKGCTtuAco",
  "key34": "3R5m5XtW4cskrQJW8oQE1hGA8d2dVBKyVDXkhEhcFrMpMXfxgAbDxdvVjReL4GZj8rVr1bhQwnthe6xoNYdpmxL1",
  "key35": "4Y6i4o9nVKk6BvwEWFSUZ4uvS5wTMAZYhry73HVscqieXyDiGBsUr3qyM7fQzVVkdpMWoRWTQu2qpRMm267obQBZ",
  "key36": "3L4HJLz2riiygdUDFfPszC1d81J1dedPXbdxCWEHgB888qtPPv3rJ8wWKHtvehjXbZhUn23Qx48RFuH3jLUYHwjR",
  "key37": "2xcaZ77fr5F9XaoJXxt7K5whDywHfvKTMGbqboDLXZa8eHiUMzH9RVF7DGhQndRepJk9jBRCUP2PEMcGLpGsmGvU",
  "key38": "AhdfneNGVgB9vEi1QEYvR2Yb4SVUc7oTRkws6xwfdkvH663Jw66DmcjpdaACKRgDk7DBfBd25oMsXRgPDnDpR13",
  "key39": "33uYQxoZAR3yrg6YrxF7YUHd41H3KXuMmkJUgerzmDh1tQ9Ry6PUNXrWUtMcGsn9Qeu7YBmsXg5swTVkrEWE3iKM",
  "key40": "4PV4KfuRJBxaLcMk9g2EbWf4zGXRTUxHsqZPcfiqayZZzKZU4QBQiRJRUBeQKRuutwj96ofWkZioG9zkXdNsH3j4",
  "key41": "3h6tPaRisTkgm8MECaPvG7Uh7Pmt4o93hj1fySUFd2YCweX9q2n5JSu9bbPx1yDvsesb61VPJvHoUVuGJ522PZaU",
  "key42": "3HNsn4SdH1DHSiCA4SQPwNcevWSe6JbdtwRF9YwRvgJNw8ptKKRNF6GRdx8xHzoFwk8nqMAtcSTgWEJwQUyvqAwK",
  "key43": "8n7tji5fNdgZPCeTEm6K138Tg8AxoPWuGmbxSaAWpGaJ6iCzTtEbEvhnySewrNQqQcxKKAzcHuk2rLS25grSM31",
  "key44": "4j58XNXFBUweuagjutfVgYzRsCgdU7qg2SxCiUwjxjMpfdS7BAbb2hGeBweJLLHRnELvao6S8jiX38X16xA3CA7o",
  "key45": "3aT6msgnKL2GP36pCRQemwAxGeU817fhSSJgeYTZiL7yUxiRFihQHcwJG8XFBqAiqYACMgsKqWwc1HF2ouyvtjBC"
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
