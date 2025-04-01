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
    "2ygLLWQUQ84xvdLauMAXLw5MRVg9vZMueEZJzSQPyNjkrwJARaSezDsoVyRvddYsL4DpnBbmQuHx741a1H4PdU2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4behiG82ySeVSixFiEMgGnXLh3DWSK2YS8ykn9TANmYje7qoySEXkxgcG9KgtJt7s43Jbo1N5nWsnMVubux4hU",
  "key1": "5qredZcSG4sb2WNZsB8ZMXuJHk4WjCg2MGxjMsfCj5FK1kQSiSwsTH2fFXfbLTydSeLwSzx6KkzM79ukJuEQiaM3",
  "key2": "ftycouqnCcBkWunJEwFJFXAnLwMgamQmhEr7ex6NHC761FPMH84dmy3rV48FMbVtXDYrjaRj9ZoZm5YezAfDmg2",
  "key3": "5UhkvYVtV1wpxn2q56epGQLUKmMGwHfFxZ4yhouNFs4nM11N13VFJsmgs2TaF1nxieqneEzUJjhyv8kmrFaok4os",
  "key4": "3C6SLME1AyRMUxri9WW9jQHQKTBZCmV1o8GQuKhhg3nnvvK9TW38hBquC5n8JhrDwEAucuAN33aYZpgeYsgS1rtm",
  "key5": "2UTytRfTtHAqUeQWSCW7Ha8MmKEcpSX9Lx29rfn9oTyx1TPvzNSryZ99W1N7bys6tKuwmaDiqAWxgN1cH4ic9LFp",
  "key6": "5XPWaga1yn3KRysxpX3X7SLogWNZkrGSXXUFThoPua12jKxkiFcDCNkzDy9tLXMXESfzU9At2zQr65t1KSbPRFTA",
  "key7": "5UxKvVDeb2FuRzJwPXvF1RxLncpQG7r3gNM4GmQpxCamFPxVhoAVgQa3DVFQ2nBb8cRMFFAmkZVYAjdfZKkQvsix",
  "key8": "3yR1LWs5GfjJ6FvAuyjEXhYJmUEmZCCE4uNy21iASHPfPQFanrmsT5MbS22kgiAjwgKFyYt7cg9sS7S7KKw5ncHE",
  "key9": "2iEL2cNDPBc91U47gdkSQnzqcsNAv7jzAVNECQnw7ihWnnm9js4UDXpNjJB19sVTBHkRCuMEWnusmNMEiX99ccBn",
  "key10": "25Hfvz7ec6H6mupKzsbfG9mRHm5vrxEbsShSvN1dMRN4fBFQGpi1L9R7GxnHmWxw6g5RmKU3A3VtWuHUmU81H8AM",
  "key11": "3Ed6Td368rbvX8ksk96JCnYa8vBE7rubTNcgRB5D6rYU754R736vNDveQJ1FrvVKcNrMNXL2r8LGN9dk26PytEHY",
  "key12": "2kthuW4myZHV756dx34W2QZ1MHWsFuhqBKkchxR47Dx3zo7NpzSd2kShV3TuiPG19f6d1faaWWEg3zpwZ2qjZW76",
  "key13": "4mmBYHQ25pyFpqqRTcsyFvmEMgTLs8cNniBogy1VqU6AYvTPSwqejVccBTpw9aXHW3L86mrJ3USgZrH9qREA6CK1",
  "key14": "3Nxt2Jj263GLUD3WDE8WW5xzgR7J24fNgNS7Ro1WBZU2kfW7dfCP4ccRioVaUnwNHyWzyHEznaaiVSjx18TzQHbs",
  "key15": "Bs2PYjw7VmccBzkuM2wR163m6eSj8PDv7BzsfX6DRcPXMwFk5Acutes6DB61VwczuVpcYG3rpDbCzEnL5Yu91NF",
  "key16": "2pKvYP6L6SN1ayX4rX4GJZ52Rz5TYKDAFuKyGXZUa8uKvWwHTRY3sNFNrTfUjNzdE7T91qR12WMgpdeySco7mAyv",
  "key17": "s56xqj8s7mVji8TLonhKwJspRfeYbyUPUwJupeXt8JBAVPBHYGRaAgHcTKxAsSQFY7jqnq7DT2L5GwmxCh3NFL8",
  "key18": "3wGyNquggUbrZGW74RF6WWXA17yCj27QkW9mANvpS4bvcLPN9TdBz7xZ2WYbPHMzuWnS76gmefKjpkgWqJkBZNC3",
  "key19": "fKfnNpZEoFVhgUGPt83k4TAvep4vXBqRaFnuhW9uDZ2XeUzfkPAiawa7da3ikjRE4oupj6jqqQam8oiG5Bwt698",
  "key20": "249GCvXtdiQaPo4sKxTbU2ZWU2cnBXTrFSzPNCnTtyUh2p4ZxgCvMDENDeWEFDb7E6wm7p1TF6UwMcux4fiqLtcG",
  "key21": "fEix83inLkCr4skVQDoL3rVemU3ZazhodzLUZ3Bqp8EKPPYPyK6G5mvCoR8VuqHSqAmRHZkh1kPtwBnp8yYioJx",
  "key22": "27MFz3XXzf8EW9nfjDpvFBoHhz346jjhAkW5iVmTVq2J1h8reAPNi5BNFSix7aTdC3PbEk2cwn7ByBNDx4t9vjjP",
  "key23": "LCcKL5TrZLSazCqtCVwhXLU2FZfWwpTTTcVvyvWzsc6dxmiGKrDciwtpiMmpR54qijmip4tMrj36CaiwoGp2SRZ",
  "key24": "59cvpC1GAVsGzo5HAij7LLFVZ71HYBR3rQ1g83dMRaa146AMWzLuj7ZtjhxByfV4tQccYHvfct2XHiD3qaguSHh"
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
