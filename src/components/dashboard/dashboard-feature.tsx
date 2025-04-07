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
    "2ZpMxHdxduRgGNheGCVesmPV52y9saHhZWswS7daQiqyuhVbQ3XdmBeA7u8HFbDSfta6nTXcL6MWdKY3XpHR3fg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56L8tqdANK6nkYJTFDwhz5XSPqJC182j9eXhwmirkXFQ8MyuFPYnTfySPWhwxTWL7shKK2ym2z5oArrPvsecF2J",
  "key1": "3ENqKwcBuxkxUqYTCB7MMXQJTCV2Hr9xFRwT2B5ivvcffpbL75DbfVpgy14b3k3ecN9zjfJHwvCpkrAUCMRC2HPa",
  "key2": "QiCWnb7YJJR1W7os6bQjdnPuM7gtTVoxQjfrXLq8E6YTeoj9ELmvPTNbCSWmxfwaMfPcvt63iogkxxpwFP1SnKH",
  "key3": "2xW5JRe899ENX6uxSLjK6MfC4kqLBsKSEmPa6dL71pN48jK63SvvDMfDFvt2eEkZWwMSY4ExfPVkgTcVL35C6LJP",
  "key4": "2XrxXgucg9QfoSZhDCCbKTRzfhEprHWbybfsgvnTBKjAEdnpQQGDunPhzBHs3KEPw5FGrvZZtwKyV3eYXfdZhhUj",
  "key5": "4NGDgeU3sdbCxAxZdz1fDa5AqQrbBCRM2AVh1ceuywCCufK1YK75Ky1uXHCxmj94vjCVA2Z2dKJnjdCdhotQjDZK",
  "key6": "54Ymv44AtWPVSnVUere41W5EPU35DyXFKuggHuRabLcQYnbyDMwwfWbwXKzAWuNwCh4CgjMXy2AWDTfb3TBMJ7Dy",
  "key7": "h1YAoojobsupA6PnRnBBtUiFokDvz5qjnW7gxTckEgGxPtC3TMCu1typTVsd5hDfWQFoMVFqq9T22diNxMGoQui",
  "key8": "3ELVBeibDc4KEC4Rg2k8gZWyd47hKJYzhzL2LY3iuJMwYKbWpsggmwz7xXEdP3W4U6z6BdyfCzTiyZLKhKsf9qBj",
  "key9": "2vePdP14wyfLwygQRPjXWAbpb8mizuNmmnHR692nF9qksWyQrpiEtn4Xmoa2VkyWnEq6i6vxFWeYQqQ3yBGPy7iX",
  "key10": "5byDVUMJxvp5Zz3cQx839Hcpf2fmXZo3B8rjFjXwfMwcC1iH7z6AyZWPLSF44xVuMNhtRnxVVRBds6ZL5tPS2Vmi",
  "key11": "5JP6AJyPDFkyNrhLrH39AbfT8rRMoxs6ea7c7ynr9UcStq2EDi83CWsfGLjAjs91QtTJDUojN57XdonwgTPdqWcE",
  "key12": "2cxjW615pnB8Gngx5kT4VCcvfrC9xMTLtvMdjKzAoRXBkJUNpjyrJJg71ESMbsTVtUEBatwYQG7VScsHzKrevstw",
  "key13": "52FmkDEDPSY8TCdQeLxmmu3jsRtJNeeRUtnbRphq5vHr1k3MfVfyNhCvyYcjLhgrStJbr6hYKsdS9DUwCpeuoHEZ",
  "key14": "47AbjHDWVRXvKK8hEEvJWczv1m7NfTJUx7W91S6Z4cM6KaWrQDZXE8GE4Zz2MCCs5mvte9ytVPkVaNesof3pG1fR",
  "key15": "HPXdVhtC9SDKy4ZSvQfoaEBTHfhcaDJzGVDMjKjY4k73jazRRY6uSpPnAHy9orT2zWDcbH9StVWekK5ePvnUTxi",
  "key16": "WzJz2XzpApBWDRGTcpp8z2hssBqweybN1N6cUyZK12EBLfJ6vjnH7BrDZHVgJ2EJz2JosqjSqJpLz2QKiRxzFvp",
  "key17": "2vFGAyVFfn46a523du3C5R3Me5F3T7WEVTdGTMQjCqY8hGspFSqgu6G2WjSyepoYb22U9kwnVGY1eiDZdewWKKUj",
  "key18": "2QBithEFMun1CfN8jp4gEP13dYhaQ6hvpvxUcWp5BhHj5Ad8UXd7m29WG2RKPrza94NpzhdpF8r9sM1XiDjc15ye",
  "key19": "nAqgDHdBLXMMRPDi3EEPLHQx4XozgEdsVxLtZ9oY6anc48nyxoCwGaPzQ7RVVPtvQrKnDXtq2bLWu6FkiA6PmkE",
  "key20": "6388WCYgB4NW8EEPRjqEsViQpFthtvg5TUQQBNMfSw5ymWwcPfwg5PcSHGRDBDtPWtNgNCDFKQuaF5fZ42N3AQCK",
  "key21": "4Pw64cfUUkPPqo1WQFy92hM2gfAnGSmPSSPvSvPUuwm1BSLyczChq1A4rVEkD67q4breBhCkUrp7U9y6aCJRNnZw",
  "key22": "4eKZPCZPrbx4TmBEuYJBMytc39ujaaxgkV5tzGqVbrMwXmbfQjLkRGqxituU7qGDgeSkqfYbLEMQRv4PhWf6su74",
  "key23": "Kcn4U1Xd3yLceudx6V6iyjFocx8wrnFhEqmHpvyKCbVC2ZEMqBW48UCpqHRZWHa9pHntbUj1NwiAuUzKjrBNiz4",
  "key24": "5BevHNRR2v3ATsqYknJedVjYSxT7c25VDhyuL2EBVdRBnMEL1F5wuhX4Nw5VKwMoWkLtp1G7iZr2bwREqkSboBGc",
  "key25": "3Nk9BL3SxzRz1F7cgrRK1BzRZjTvYHsS4oLPgRk3VXYd8Ru98BoHqDbC4zYXEN3PB1cYZ5M6ZnYSMS9Epvnyj5LX",
  "key26": "3MaQPzMT2Do6vCxMkYuszLRwT39MYtCmei2zaS55eTFDHvw3eCW39uyoki9hF7UL3siuny4sXPyyEk1Gk71o2H5E",
  "key27": "5rNCFyD63bNrHrz9SMJD6CKfFfmGchfqRxkdRttEG1zDdKmt5VSPoGR9jos4wP39fvgvyT59Vo7EcheMa6ioC9Xw",
  "key28": "53SKBB5i1fnEHFMe6ifbCzELE2wdtCL6saKNUYvPskkCqoPQ3wWM5J13acqVeMGyTYdQqMDL93qF9v29nerHpPms",
  "key29": "5a44XyZqSFPK1QNct8KSTG8yDjTu7Ney7iHusTaAkhyRCr6gHUwYPJ72wLnMoYjLx96XFtogdo3ZCxqkdx362Xyo",
  "key30": "5d1RvZogaQ47aXniW9ctn6dkFsa4fX1jwLtmAwP9qYwb5x2TFoGDhVJ5STieGZo7vQDEphkBzD2as1NBNU1W3T3s",
  "key31": "2b4QbySLHc9sWRHc2rzFHXni98FiYgk4Mzoq1C7jxeHVhQzVPT27p2KuNDs6DbEncCRfUfzESgUNvFTRedGZH1Uj",
  "key32": "59gduG7JrnikoUJ1QafR6C5deBJVy2zVAMuu1c5qJHFwhXQctHpeLyx53ja5iuArGra36vTjaxKgTgXGfRB1Y3ca",
  "key33": "4QLdV2q7fN2vGL6is5Se4u1fRFWWU1KQKFum3jernX7yfGjoWvSPjjyrzYy24A7w5z7fjhgijxRvVXQ17NP71Y66",
  "key34": "2yvAQoZCtyX1PEcGYMXhM3bqHsERG39YeMmeUszdKNY6ShpQGmodhR6LUrCr7ThuKHyxcKcs4MmDRS6NPMa7TzZX",
  "key35": "4oAaf8eyU69bBuTbXTq47V253nNKVFwND7u9Mh2mkrf5GzRswN7HgYqmbtey7SyWfCGy1EpauvL34Q7BNzwJRMe2",
  "key36": "422c7ex7fXimUxXxJJwQbeiHajaz1CuT1RYqrP4edSxjWJT358Tk6mNsHrzT9Gegrb7TBMoWQVjbUFSVTyfhKobx",
  "key37": "3faVAoqnqDRhE7vzwXFzAYW9LV72AKE3o3qPEvFWzmTLtSeoyphcQTpfhBtKZC4sNtgnCNhM45ZrCGrmW1LZqTQj",
  "key38": "5Q8w4up3o2bZPoSLdwKbhsm7YZtUd96xeCyEnT8c2aQkNnBQN8ADxiqtH9oBAgzZdzBLUb7NFgyXhSjJsV5NMY1P",
  "key39": "4jAaAgswEsqHk6BGqrU5V45GxUMRQdR6ccUxCvGxhsiaiQcsuoGHfc7qFs8ACfP86km6Z4vNuKURSDriU4ZQ7qum",
  "key40": "5jdadZBytGHWZuLMzXcBQXRdGxVhJYRfHoDhDGxp1iAbimjPX4mD6aaw17YosuTeP4S3ZrkeSPnfBVi6jhLxDhL5",
  "key41": "4M7mHZZTXxQN9wBwhNFwaT3hUKMKN6HJAUFrhVKq1D7jXSw3HJ1rR5bdnMmey1ydmGWZYD99hfmYVMdHhP3BH2Q3",
  "key42": "N2tVq3dUdiR9QZ4diy7cGubZVSrzmNNGHg7idMZ7XFUs728NJvdVhp73vwDeTqryHHbzPJnJoYyLgeeFEBzE7pz",
  "key43": "4LEWeVrGJDg9SJwsGUPvoYqVqit4KPf81bC8gwrmmPpKfTk3xnrLdP3zsDt21vJwWR2SiXqXfQk1ReKFrgo7ZWba"
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
