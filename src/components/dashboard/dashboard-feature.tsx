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
    "aQxnCQEvidoAY15SPBTMYzRdUbaysY78Kg7czqovQxos8m4DUbAguLs6M63KTnPG8vg6koSQKkL2keUG2upyHYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9PFykY7bbWyPRh87gQ7zbnqoNSYb5ooZxMcffJexx3wv58yiM7khTqUtHLgttx2xQyzRYE4ULY9EwhVafss1CK",
  "key1": "aKqT4QhvD1sYNYW42Ah6kU4HScoEvyJ5kxzx1grGNkjkWPC7S5N9vc4SVNtUuSTgJSAG4BSgdqk8hVKKTpETFp6",
  "key2": "41Mp42BCxRWrJPj3ecgjmsKhs2LUmoMtRgU5ZHHWKX3hd1bRQSs3ZWPoNg9wU5yuRci4M3qFnQNvT29zsBdpuMrC",
  "key3": "3jvzLAaDnvSC7awc5CzNqaBzxx5a4XvSbvvw84PFtY9j8yi5BSMf6DR7Toqm4Sdcqbc4g3p2ZPFoHHYjh88J5XPu",
  "key4": "2AbVhiSEv1256BSVTeaEtwCDKS7DpGXmAmnfWP2iLBRgxcnmNR7J3CeLYEjCPSwqmPnBYKyZZFeL3kPrJ7bQiXqr",
  "key5": "4pQxR5RAVjAYYmQ1VnSNLBBfYwmgYV7b9BoFTyAqcc8qh385oCFDnKEZjdUtb1XsEduDXvkpuNcb6Cmy8xqQstsm",
  "key6": "4XoqbXprrJtVDdxcZynSDXHZjuD1t9TjVttCcU3N3vz2XGBmFSr2V6M5B8Xg4orYkymi1iWxUNK9En4hqCjuvKgh",
  "key7": "ixtfF3qtxpyBHQQXgkGosE45jHH7E123koTBJ2KTeT7HBi2vHQEDQaqaDhpM2STc5NNLSM78MhDyf9rQEGhkBFj",
  "key8": "5kwMZ4EkyYgrvYbYNMaQeyzA99qTXJsBRTiiiNbZtQswe8pF3GkCTZRNxuwTTCGTPV269yt8y7aXKe5RmAfibPED",
  "key9": "52uiVS7GbrtzEC7Gbi8KpghuDHu1Gp85EXuwDg6KXoLBrWrS3dKhvoMS5gAqVB19YenjiHWwKtuAakwy5QoDdCvf",
  "key10": "44Tk3UPJXGgABCAgbHjSzGfx1H6cnty9VDkzKGE2UgyqoamyBWmSq2g8hjXCPaP7QW46Ns6vGjBwCt6CBGDchnDV",
  "key11": "DGTUAdmR3uciXdBqjD2jbkpxWBZsFSKE5tp47RwxFtFu2jANCjGZ7esvD5u2SWTWRD9q3YodYe88N1qjyGmjNxV",
  "key12": "5LoNmXgnFQKQ24xa68yTxx14pq86G7MhknGz8w2ZFBUE9PqJ4ENQFhLEhbEs8ermmA9ixqjiBFo8bAxVffxQqUzH",
  "key13": "3GkokYZqB9P85qGR1kkrXZU1USYqLEYBrnk1r8XE89yaSkAT8QTBnpmA1TqyoxiHb8HbZJawz9eq5YmiuiGSCLEP",
  "key14": "4hVWpedWMBbx3Bpn7jm7ktdiGNXqG8eBthwEM7XAGS2WvPgGVB1FYpPV3b2V4NFr33mvJcErVYXUCHVnN4X7FBLg",
  "key15": "5XD6TXKVudzJTu6j2vp1xcsopRc6ZGhmDhmi3bnZ1bMpqo38kxHxMof8VdV2MiCNNxkXuz7TzVvFK7Mbb9ZGg53r",
  "key16": "4bdCbATi9tGdkduiNpHkyvLH6PjHsJo7cu6oy4f5sbXDdBrzv8Ff8sRiwtKZrzH2AgQwsFruB4HNnDmKJX1NWMcA",
  "key17": "2NCzQU4BKtmXRpS32YhRyBa8upPCT76F7uPL4NJzsU7XzfwkvUdUBRcqtNedCtaExLcp9q6TxvXHTcfdHa3ikrhZ",
  "key18": "StUyzLeGg7ixSFbKonvBZbST7xjhkx5bMqCztkCKXFgjYmCreYPY14wijKeEVhXwvg5aUerfPgr8EEgqu1m87Fb",
  "key19": "4oBj2tpsuwcnCKq5XaecZPzoLCJbG6VgKUHEPGZo3JJ5DdmWpUMKg3vcPT2Ui5d7w5sqFrU12okWdFxWaMU4zTqG",
  "key20": "2No212vF73ZPyBuTBNGsHwUa8CgfEwxHG1qzKGQCHAFYke5rNuwinUU6r18kfdJWrRjbvTLowfYptJLqmtEpZ4S8",
  "key21": "3L99Smp4E8VyGG1wWM9uW6rUhNGugvbbPAHoAjARTh2oLudynwwQwV15iL1cH72tdhamZVcxM2BhpYpWTQpYi1YB",
  "key22": "45i1sHyvn88MUAwGFnpGMYumdSs1zowD9B4cTqBUreChcqwFpY8SYwfJ2gmZED6CjVPcPQevcrA2ZCbiBhv2xCkr",
  "key23": "587HMXnchvCCa4FWqEyDp7QaB44R6yFcHN1WjSPpV2BERftzEQALXTKabHFgwKPK8o6Qy6HSmWZZVppQPDMitqKA",
  "key24": "k1GaP6tX18z8UT6Q1rLwVjGHBBDDU5r5ymn12jWeBuYV7uFRYr18rCFaTueJc8H82vHZrhD6JsQfEAG76QkLWP5"
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
