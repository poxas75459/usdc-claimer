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
    "4R7dXjMHtbfJRJftitkTUDN8oCnZUpiVJjW97wcEPzXRCr6uVqUovUyDLh9iFaLLhQoshhgP3aACVBmDvzBHiac5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6dPkY3yYhhcGMtK8j9aTKpnuVmgKTYeeuiB96HnGjZXJ1BQCKPTGn5bARUU9tYQqw2HbGhKhZmaQLnGJfesDWy",
  "key1": "2VMVGRSzc2vamMe3g35q3UX9M3DCQHtTQxqQ6CjK9W2mVrQrzuA43ChSEDgsrj7whMX4XG7UdEVBECstMFCg5dvQ",
  "key2": "oHLtpw9rcmcCFpKmo5Du8pYwezCk6fGTY8FNtG3xMmanRJxCCbqQio7QZA9nFg4QujiwyssDqmjhgVwvMCC5dXN",
  "key3": "9jM4KgovUyp8Tdx1RMrkhAcctGzyd9KDB8rqqSLPCceJAxXqRasiAT8xsjcwWA3yhbefryaLdpwPizLxcqv8pbZ",
  "key4": "3UnMMvDrHedkcW1SiLojj4Ctu4zEehaBQUbBmxHoSixF9dpMBgNXDKgcSoQhuQp8VD1PjErSAnpnsau8af4QYgYj",
  "key5": "5RMG4PLHL7dijtp8stTpQBJee4Uudmeqbj8B2ephmQhHSKaMUsormSWstZbdEQ8CwAVFYSY7HrXsDCFRXLMMRRG4",
  "key6": "4BC8EX9Y2gdiSFgQe1UrEvtMuZGE6YtQwhxD3xxSFT9RkeBx5daPhbVxquG2X6fcmXLJ9cphYbeaM3YewQmfdXKU",
  "key7": "Sf467iQ5XqXNHsaMdtcycy8gdAtkHCd3X1M8TA38NuhiAT5UFeksqW8xpQJuMcvnRbcmgsikapezqSom6F7Y5Mh",
  "key8": "3VYZVXCPxJhHhqJjkytfe564ph1ebj57C5qRCs247sxotoGxCwCsd7m2oaqswqVxh3c5AiDq7vJyVB8mFobbegRt",
  "key9": "2WC49QYcZHBdYCkN85cFSaoj7TWqZF2rFv5B34Z43TLhk81JaopbzjVEz2JcQAuPXJhXhNQmXwDBvFgxzaUCUPGV",
  "key10": "FdaWCRtS4DczmVoB5XnY6F3qtVtq4SCrTg8wgt2rmTecif3e74f5DpfHrAiKJkjzHyCe51VFJSe34fV6MBEupso",
  "key11": "3QeGUGzXnaDcSE1cpS1beANBTbKgypKDTzcbz5HgujK1EfZ4RoAf1qbea3UjpXL8bALDUxRCEHRmqRtHqWzoMcgm",
  "key12": "UzBmVbf4T6YuKh8DzAVDDdyZAUgGUCUHRnHgwHXzoZTxcxTLA5j2Xtmoa6Bp4Fu2pAKgkfvv3XfyDon28zjB722",
  "key13": "39pus1Aqkh8qxrPJPSMyTdCzsPJtY7nviAWcg5GwwZXj4xJSP82VziTWq3o2pGGuN8yddya8zUqd7wnnWRxcC9Rp",
  "key14": "3g51NdXnNULGgCUi9iu6TZesocaTjbWPHrLNCbkM2mmH4Yu2nMQKSN5hRY8umFiX5WYH8NCeoAVGXT8t7m9w4sv",
  "key15": "5XV22De79qYrVtaY5PhTYvZk9pYBj4gqLbzriLLRsPKz3mAmWbbEacRjoCAouRbcyj2ZSgsyJ6BmiGD7kAUmgW9g",
  "key16": "5H6QwnUHdttosF4Xz7yy3ca4yLQbsHEJf6guDDA7wKtkXQM6aZQcUAo4H3XHdH2Jq4ES6hewBbHQ8vi4xhtRy8nV",
  "key17": "vYFpJZ5aD2GJpq9pbzU5dZnhiWVMqT9TcGtdUQ6czrZ7NdvK3veWbs9tvMFe5G4rugxYupHeKQGHdThUq4GNaWn",
  "key18": "2PHnpK6iA8XLsRxH34pKrpMkcci6wB75ru9HojxH5erjyXJegvDw1a4o93pxxPSp2rYN5VXKJtL6kXnxFatjALTj",
  "key19": "2pvSQ7aVBM3nfuuXanXvjSAWzkjXE19epkS9CQXSCpt25DKeDDX93qrAt26cbnd7xj2Nd6pSF5e5kdEf1VUUCptq",
  "key20": "Cj1pxn2f1PgHNEbJ2mTqQwJkzdPjciZ5qGWiAn4iohkdm6zMaGTRbXg28JhDvUiZxjehm1vg6AREoaktfQWnuRv",
  "key21": "fuB791NZUrTacAqUeqK7rX6ErEKFeVNX6wy6BTQKdP7UayJjUF7jH1cBC36Bsw22oG5w2uC9eRdkV7LCYsPTJeT",
  "key22": "2LzzJr8VtudeUmeg3GgzRBkv1mks5AWwF3jhvdyAgzFypy1jdTrRkQCEm51B52kzgU7Vjv38SZzYJNs5Va8w574A",
  "key23": "3J4bbZZpH2Q4wkZeiqa4J9u9zqfkSLheaUekNCQJAbWDPcyn3aFvxY4vLwcYrciTnPRhpsP4cH7iPybRRP56kDXV",
  "key24": "5996FFLE8HAGgPVLAdzKA2vSVLsm7VajDfpzLrgi56ccHTzAzAo28aiD4NUQKfYXvZa8mWacJZB7V7seYszdk3AX",
  "key25": "5BPEffyEYyGytB6rsiPKhD4iH26gxgzUxxjh1V4wjW3Boa8VfuuE34tz9cAXkxjQ8oT4kBsqw9uX8oxTkEdpSoyH",
  "key26": "2otZELGWaBAfT85mwb5oFcHgf4vuL5cA57WD1jK3wFSFs2sUuiLdEowMMhe8G5JNQZibeHejwmJvFurpGcKBDJPj",
  "key27": "5D3faxUyxUDDxCQqG1FfZzYVddv9oj98NShtUZU8uhABduWWKoiSitnfbT63S9VHdPMCVvtPgBAAJ6EMnavLbkcs",
  "key28": "3mEtWcvk4Kk4bKhdnBe3cU4SNpKK3PMHHgm5QFN67jUM9q8aH5MXCp9TzV5DUsGHosLamYeZ4dn2LNfZNVnP3r4Y",
  "key29": "3StXneG8TidRp6mLRCycf7Nn6NajcsgL1yVUVs9XbMGQ5BJmMyg3mB5Ad7ytTfZpbEsASATRkQGiLJzz61bRwDSr",
  "key30": "5AscJgNzSbymgDq1beL78fzYuoiaW6YFdX4i2TkRTncFenbsRKLb38AoUXCA7tUQfWuioKoysebkLMcze3Da4UqB",
  "key31": "474uhdpNQTfDWtAqNTVhpVeAUydrHQURzSTCFHoYdCzqeYK16vLBSt8KXjbu1bs8qYmNANXUoPD88M9jqXR6zmDR"
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
