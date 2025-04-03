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
    "4VLBCuH9nbFn4fyzLn1o92o6mThcqdNT3QYcpFyc3M8RbdTdK5u6ups4Gsp6RZBDh11tYZth125KvaQeHARHTZ9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g3UntdFCGyEYjZvLeX5EVQkuHA9s974LqKzeaX5qPnF1NDYeeJ6AB4uQJGyGNZQkPi8S8N1RvJQzfWHC9F4TBpw",
  "key1": "5AcPiSqzLEHTV6RAkPztLX23AWzeC7msMwXwxQfWxfcWwD3aE53cgSBBQc7JvQwqTFbtZhZ4f88GRmC297eSAH2S",
  "key2": "tofGyWzGYVp7pg42WWcHy7UvDteb2nbPfGBXiUu5LZtHntLihi1XWHnMMetpFne8X52f67QtX3iYJfNAJjQxZsN",
  "key3": "5BRcdnQFj3qDuAcaEmvZUDbF7croLeWbP1dvCNtUzzLnZkWfG2JWtuB8SJDNnyEVGxhCYADKFoYaVjy4ieLbAQqB",
  "key4": "2yUroEagzswWmn61SgLCVGE39yzsU5YvCuzhoyjAcvwcMJQGZvLzguk9jtbCbLSeLeqK86RJZiA9SJJmJnkVbScx",
  "key5": "5w3Pkh5dJi8Q2VyhFT2RPzNhawhNxWtdkzN2YvpKjKffSqVjt4TkmAeAw8DW129V9R3xX4TnrNLtE1F9TDtmHcTZ",
  "key6": "2xkbtRud3wiwXxu8J3Gf2QEf5coc9esKUH9BAwyRdRfxxgb2BXotiPjf2LLW6FFqdXYq6oSBVHZ1u6wUnTsqrzQD",
  "key7": "5DM8dZcAAaGZLhiFGZS5QGKDbH4YyY2mmuJw2eDGVnmXNXr1UtB2uyngLPT8GeSsCLMj1LHM1xRMQwPLn89NPF49",
  "key8": "3Dvf2TEv6Rtyh9Ls32tdLmgriEZgjRajpLy9TUhjSjgjV61ayf21fuieR3k6NPMC7Y6w6P1Kh2y82AxoVNUAzEjr",
  "key9": "2987nq6mVj9rGyvJRFqzHZtNcqbHKGYe6zatLdvRiCfcw7cEpda4upvujDZ4i1S5d9SD8e4bmza5LE7aZw7P8tU7",
  "key10": "1U5ogii6repaWEhwFJbPAKPGu8irDhBj14pQEY7cErJzqRJsCXWuRmKx1dkvDXYq1x7sbS5r3xV6hzekJBEa6Gj",
  "key11": "4SWUmutNmhHmP3kvpfFxAUWMaSuPL4TJwBBGrLhbbERnpiTJQu5YcmDpjn9MJvTk8MeQkBGHVFoCULnQLoxfyLas",
  "key12": "61fBR5oawuEDLTXstiRgongPqkgmRj1ok8Zth44F1NPfXvZtrYyrG5ndPz9MdUnYst2RhWquizHBNuaKjiPzGWNb",
  "key13": "34tAj5H9iMK2Edf841pyZp65Ye3W73rN6QBsGyun7sZDrnyww1tnieRjGvfgM6MfTrLTBTyCZuE7xPzEDbConNGj",
  "key14": "2Qg2jbEpN8sF3wYwzdre4yiCCkDpsa54NJQS5orVrcP49VHxpv9fbXvtjpmLqG9h7iPBrjh4MQo9qFxnVJK1YxmT",
  "key15": "3wuytgUwcBcM84h16x5E8rLfnEoAvLnfJHDQy1Pgykg3Rxx6g2euFsgKrCpnJ4k9eQAMRY4CJdekawamJjgWtrEP",
  "key16": "63Y1dWdFijM9QsdJnmdid7gV7zfbASTpNHdijy3zj2KP1Zx9WfXDE3Hsv6uWpX6QZenrfXASbpyfWKzGa6KH8DH4",
  "key17": "PqVbcYwLJAenBP8WLfjSvyRS78fpAXLwFD2jp6FAysZtjvoYXyP4jJaexDrAGSqt4mcGYLLqoVTgSLadj7CVgJV",
  "key18": "7ahd5XwvsgdWraDZen1xy864PtDhaet6oU46JywNiVR1yEt87ujpM55HeiCU6pJArHmxLGTTnUhkzMjgHEtcSvY",
  "key19": "3uDg71PpGoSSvmsSoX1nXvNTymUFU1RXpFhLPBVsL8UWuyjWwpXSSKTHh3R9Fz4RQopT8vGJrJRHezwALHmB23YD",
  "key20": "2XnDiq5mDNqXTsU5aty4dducKvXhQ1vfeVPNfeYbqYyfUozLbZhoResNZQ9n2tyG8kyGCcVYkJoTS3MHkJXjkzQn",
  "key21": "4PNaCLVrxfs6AmQwMbV1ukSPLta7FHQzZxr3bB7CjXk7Y1syddF7uCLdY92UdvFseA7E45G4VgWApGTV26nqbFe5",
  "key22": "3RNeuTeTVBQn8bwUFsnpMDfDa6A9PwgsTCaH5PY5cxsbjZKocZmPv2xz66xCXowHwT348R8K8EDp1z19cjFrEso3",
  "key23": "U9XqLfikaoecS4YHgV8rAvmqfYdkDu7dhh8jwZybWD117ocKazZMcNTfX1x9txpvmg9PTX7qq59bJaB5G81xRQ8",
  "key24": "66BE5Yj2mkbJMCnu3FRXB3LmzMnwDXtGfjMQGV8M6cwLHSuTyirMv7VV6mvpSaveRQwGPp2evdTfbrqGf9s7Fowa",
  "key25": "4FEdEiu9SuSDz3j1pbsrwDnRQ4V5C97MKeFXJ3DGxpj53d2NuxxmNYNLfLCYaEzKKsnBumyUvh7Pr8fqgCk7AN5v",
  "key26": "3VzfdHbcSCvnZzfSGSPKKwvbCzxDyzy6xeGPydoWWBHDa95ZhyNj2cieevXP7BJ62DaedPzHDMLSGrmC13DkVbVk",
  "key27": "23LexMf7DrApf9dp3EMi6HdA8gS4ptyNa78xSn4HeKKyZrnTJ62GGA1kHPsvr27gqW78wvvpoHa2op9isc7wJkc6",
  "key28": "3hQC3Xk8itZqV9rvJRWhv1xZ2qjseXAKRvMEko13XHjPnVE4fJdPmeQ932SMDkpXHCvYh3aLqmsTrrLE4aB35GTQ",
  "key29": "4qgp7php7xzHFa8gMynrxrvigPgfmpbjZv7SvkE7qDbTnX7zymJ8WXPBpZuStrzHQnhEn1AiqKJNJNQ75cUGtctD",
  "key30": "rNFerPxqzwMMENNVyPUShFZtaLjt4QFjWPBAjiuvoLxEdsWU4hZ9APJXv6J57No5ksEFc7qjUjnMpuh7j2YfM3V",
  "key31": "3ccZkB6du3quqWgXghc5pWxYrp4kM431Ctjix3NvPjY4MzvV7x1eokQPhgxQg7iWB5rDFivrSnVy232a48FKrqNY",
  "key32": "5MrxcuMoQH4MiY6B5VHXgDbLL7PNHjPxUUV5KbTXNUUgqvVubvp1fNEUiamtByM1QXqt4g1xLL82MxBoMQz1WPVT",
  "key33": "h42wfp7nEaj7NvEz9VmXJk3LiH2VTWzRnZ3EoZQc4ouWSDNkvB5fdnHFZkj7Pr3ybehJoZHk3nqrt2BsEM3XJ9H"
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
