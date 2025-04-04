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
    "3aLNGzu1Lv6qpDvGNCPBMGsihhYcyMj6mq822WqPapBsNUzbivF9SuK2moHar9PQHDfJkqHPzde3WAXrkrMLXeNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Mh4nVzEJekEajmionF3qZ9KxzZQjqKVKXhRtSSLL3UzrFceTYC3MtYr1zuLDaWDAY2TUHJ8mTHHkogZZYyYwjX",
  "key1": "3SHyeA2zGF667zXcEs92D7mynb2e5K3oYJyJ9czSgmB1cUW8VMQj5sTkufhoEh86FboFnXoM1s7BerDusYVRRamr",
  "key2": "449PG6vcDH7RvsgX5amh2uep5EPJPXmAxQt52R895BCo1cREckxK6vK7x1rfLuxgKokp2fycUwpT8BwemjsUi9Au",
  "key3": "2NQnuPJ11REgiZGvkPDEgSwgGDpvMTyV4Vq2cEgkbLsoje2P43bP5CRujQAGa5sHW9QVoB7DceuNbXtdY7fm26Uf",
  "key4": "2BUiH3gHQq3x2FHeouCdMi4vm6t3mjgZUy2dB1L8Ha8tdoZTnPZSbXfufDKrXwFpW2hFLfoYPSVVBcK75quemdHx",
  "key5": "3AHR1dvJZNH6xqyyE8pqHPvt5k7mL1fNzQoBwNnSwWAaCKCNBneZkP6VLdnacPRigHzbEWjXHhh6vvcE2MbLBxWm",
  "key6": "7B7Y5fKVafn98R2X9CoRKpeuiFX9dnukXXzAwinYhpMWH2nETjiaoexpaq6wncNidR4qry9T2wkBFEhLyxB1ufq",
  "key7": "4jUyHW5YW8HpapZz2ywpWc1FNGXv2EV6zJKZFa35x46EnVq5EXLEKiMo6aHBSQuACRgW35bGEAbCti15E6rF27Mq",
  "key8": "5NDfJ8j14yuN5ywm4ASPe6PDU9q632J9rBNpbpmruPi9bRhiU7MPdQUvxmqtuyzg3H2i1JRgTo1qgHNJaJbKUVmd",
  "key9": "2VPVzXCJy52UV1puKkrUp5kJ4o5VJvw4sJozrZg8SjECrY6Dog1oeSFcAXZAiau8b6rw5PRpGptb72uK7mg3qsmT",
  "key10": "4JsT3ph67j14nurwkJt9pYEX8drLsFz7L1XyEP7zFbXqSXWZ8YVu8x4QW6dCbf8UDmoDFA938v1ykZ3smH5Z9EW9",
  "key11": "VBp5oNcvvkFeDuSNZGvd18rzEsmDDjY3VmNFWiDuF8aPizPTCcy1F75FC4bK9vcogJsDAMbdALpKSwPNXnrmYhG",
  "key12": "386K44Lp3YwGZ5zxioHp8eg7PKrm4PxiCTx9YUnXbFjeWzNu5zr8MJ4twPecmRZ52NQNL1VjbQ6BMN1a1YYuTkU4",
  "key13": "5zJNW4nwx2qjeUmgDDN26pUfU6wbAWwGktcAcCqNeroyv3XECdMVZKW12EbMrpwnBffXG967eZMT1HwEFuvFNsct",
  "key14": "4de8QLzUM7psz1dm5TT7dtB6Sy9fXzFtTFNLo5vBHJnZ8KiPYyGZUFfCBasdUAXDTrSaYw22xHhhTNWtrJVMfyju",
  "key15": "2ywHhs3c3MUytBybrUybdDFzneaQaCtaT43yXixjFYYQhcvva35xh3CsVRJZkquAbyEzRJWZnfJy9syKkQNQtqwA",
  "key16": "38MU915gxqQtrX5X3vVHHEoUGhHXXAz8SEtZzN2Z1GAUVy5ksXsWRVkBLdmqVzEjLFJFLKDTn9Gwz6Ys5mVQxLfF",
  "key17": "3so57oLPFWrr1ynWn2sugRq2dR8ULuNGmQjikk2yZg9nBNC7M7cq43DhnSBMsqf6T2GUeYKXTKqCDTn1eqgAgPVH",
  "key18": "26tT3v2A7mtrMCy3ghfE5V8vSxRqnpNDvvCk4DNxsubqRFoBW8JRXTJ3fLhTKPihBDnnfswWQJVCoRVtHMwuRXFd",
  "key19": "23CxFoLfW2T3QLrA8scV8bQYt6P1d9hcinkvbenZyotVBieiDeHiFFrTwq8qq8mV7YYV3NBbs6MRGcnKHHEz5M1L",
  "key20": "4uurPQNaVtmmpnLG9vYrH8mrWR2LKwPh4zqGhNMQitSaNeuT2C1rR9vLWDCZmsGe58g6uH2DfN56giWEstN3jcta",
  "key21": "4W6NMFdd4M7ZKmENEAPZxj8RW1cKobbkq87NrKVLFenHrzvXnJg3ukzRF5abJCis7NW3FoFH46ptzSmDS8Ti3SYN",
  "key22": "J4zofkmqofXBhSmujfpks2b31HnNQr5KNcMkTxu4WAJxCp5VaXZMZw7kpjC68TRP2mfc7VDebgaY3YFrYgP7spV",
  "key23": "77dvMgX2SJ6nbxQ5ThA152rLLs3RRcNHTnu3qqqUY4dAJ7UwbFUUr59JMkYuYqzBe8MPTgRqQCCeXZBHgiBwPDb",
  "key24": "59on8ecHs5dGADFgh5sL1RqvNwvixmiiDHRqg71qnkUFsFazLgUFpRChCJRy6VLcPAweC1CD41phq54CYWmcpGCb",
  "key25": "4RHxaGRhGQiGVTY6ZcYC5JKK7d4RWnUn4UcEz372XS7QgV76hFTC8UH6yWDyoY9vSZFG2hX8r9J3KzCCA9UuqjyY"
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
