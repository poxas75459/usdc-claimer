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
    "xUxQkdrfa6KRC8mnQrTirLtXN3VrR9u38qUEYtSM67qjk5TEUbx6eBvZAmdo8FRTHHCqVuinphy8xnepDqMGLn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fEUGRve6fCr5p86Fcf2jrX92denXm7xEuZcov2F33aMtpjUdWVZfpnqbvBF53ZWhigLJJ97iyaXtY75LmGkJPaw",
  "key1": "4uxC4vrqUYk5iBpiSREZcFvuz4Khys2kTn8wSyXSB1ZERDztHNCys7GMgWfbNN2k7oC7W3wiBWruD4hUHhUKkwPX",
  "key2": "XBAJG2eydJSNnWaivRyvCZkjmGM5qmrzMFou8SGkYLEc9QzEEWp2HWy7MkCACbsYLeKXBkEZLcJevMAXMApmz87",
  "key3": "5HMzgrms4t77n25N8VT1uVoRx6JKLE15GPafMar2ZHoAyMYEiRhmpoyNB5XDiwrg7uRTbgQ7P4YCeNF7eWD9LpH4",
  "key4": "zpzZNmZL1Nc92ZyiGzYnsfQzAVe5fPrE2VjZ5Vpv2V1SLrck48x3oUn6cKrfwHCYCjtTa8gBdWS1aY7bmbMqbJe",
  "key5": "DCMcaX5N2s5xFScXJLwPrpQeyPsZVFSyXf2Dkso13pAd1w9XyafzmBhfbmssNbcphtwuJvMtWwDVZaVvpw6qppZ",
  "key6": "53eQhDpLN7pjhQ6u3akMZZUDBPvVdZ4UPPZXNWd54RzGswZCfbuUfnVNAbTSUBe7zdmSVMpFdUhWCt5c5a21ehXo",
  "key7": "5WatquNdy5whvMjaQeArF2zLoZCpH8x5fznocuxeC41dPGhaGQgYBFvZ5NpfAWD5y2z8bSKPVVMeK8G4dxTmzWPT",
  "key8": "3ammv9apqZRWbECEYjw7ugEgg7zKp6o7yp4pz9KMcSo19puoKTSByop5FhCdq38Psus56U5dskqMKGQD95HJUF3R",
  "key9": "5TgYwJptJvxUAgSXzpEVuerRZzUebMjobetdRNzmo1m41UmCbbD1BiDBBfTYQdThnTYVzN39QqWPXkYHxKzJTJRz",
  "key10": "3Pyf32ySPCbm4yjNCo2ubJj45GY3Kx6nS8TUoFA9q2iEc42h5UEGdBuZirgbHVaMswNtKNoLEQczeSAydd3pkSPF",
  "key11": "29dkvHqodnYYgYKmsFDpusX65pJKgVNDdYzqbQXXNu59SnX9xzmYxNAaFQTZQYiSH3ZKVFEMKnCKeiCWom7nEjai",
  "key12": "2gJDL1P6nDSHVq9zTrkh7bXxSNE65iYn2ATWh9ZWQ2aJhPjonziccnjQnXAAFGyyhsArpfyTbeZTuoRsUHGRXcKu",
  "key13": "nEaJgJaBH9DW9rFA6iHvT7Dvp3yWZpiNta6Qee1bGjxYM14CFEfvuZcpBdDu3maFy77MTYo5XC7DV8M8XLadmzB",
  "key14": "5hqdgK1QLDS3jSmiN4yekQF8jP3AvPyCHjj8c9T8ocbGwdTbC3iBPFGstCQq1SEhDfqtseigKJeZ9Euq74CXw4sW",
  "key15": "2DwoREsHjykFvk5WLvF127E7pPzidM3tZ5onzNJAwSPqdxtkkBvrzBBk4ThPauU8XcqnP17PpTPuTBghu1ZV18XN",
  "key16": "4C2MWQHEUzQ4GU5ite3NhioW7AQ7avgod8aQYrpzrZuYq6UFWVGkcAbzzw2vD9BF1ymykgeRNd4ck5ZLHgCSgqQD",
  "key17": "33zSH7UnUzjPshyUsSCt6oNaRuCtergvNfKchPb8jvqznMTne6ahYBVNg3UPhLYQegJqMzisRaVbw1TLaaTwmr1p",
  "key18": "rWJWQW4xoshjsDXPTf6o4bMAmAo947ty92aqsFhbzqD3qkiTEqdscjkoVABDpiqCMLYxgirp3CEbjd11LjcJFFd",
  "key19": "2gzQda4K29FLjC5LvERA2RTuqpf9EGSeveZ4Lw6qTvqtTMLKjoNUjN1kBhteRfx6jmjF8cj95ozkDFyfmNMaq4mB",
  "key20": "5mbLSvyt6cX7L4ke8eEs4ubRV8D2e5uBirvvELwsJnPa3BM7Pz2Y4yP7hknkJCCnhfeNhC6Y6LzhSKWWsDE5vgon",
  "key21": "5GCQyT41B19uB3V8LiqerAkVnmTmGPZwLga3Z8vn7SDwe3Mfd7LZHA2HEz8zS6dgDVvtshUMHdobTAjcivjzNTD5",
  "key22": "2vXGbxRUE2bbNMJdQUsTMst25sGPHx1MJRipJH15x6p4HLh9nZS6mzsBhWR5jnmdDmx5VEbLLrNcoohJ5xLWD8To",
  "key23": "JhEPs6hRQ5hCjVMs1HvTxpVkkTNVNRSxyzF6bK8iFro7z6pMHJRBRgEAS2g84gaXvvcwqLVuDmjrUCvuzUFLNiw",
  "key24": "5pCMygiLR9vCJC9eAca9amaFSwmhEpvXAoCG2kja5p5ai8CsXMSkReiwH1iPJdKPSBFs77eQdpfjSn9qYnTBt7sd",
  "key25": "9p9dwC2Jh3zuViGzHBENzkz4nUnf4zNFE349i31AErhVhYuxzPUChznRjejaELy7ebHmf4pAWhq2wugeUe93aVx",
  "key26": "24jiFHBHdxDskjDFtn8nyQgjXkCTaiVTkv8qd5MXvb2Eay7gNALTwmtLFbFCJmcZvQERgaoeKWgadgTH8ED1xU83",
  "key27": "58VYRKAyhMxdqtt5M8jGEmtXHqiA77a7uST8RHQqK3H9niy8GosCcEaipuEnWqfph8UJ81r2Wds5dsvEGmZJVYZi",
  "key28": "5AtTea1FF4Z9sRgGcFh5sF3KPy8i1tuWarX8G9ovNG6faZoKdjQjsSojLZkChztKzsybFd2Gbp1vQStjD5wBzMxD",
  "key29": "3h2tehd5SzMxiSwPrbzNAiVb6Bp6uTgYmz9UB5pp91Qcqg8y5r1KwJ6Tc6ekFBKaLwaeFPexd91VtjsxNPa96EYJ",
  "key30": "5LWcxDHjwBThb11Av5Kd63LKgAuiN4kNWwnrNJ8VHEnDNRfTN5eaoDWQXmXG9AL9BPWD5j3DBLtkMZSR9TW7WKbq",
  "key31": "4kJRzA1h7x3DaNgyLTmy5LieJXH2mGrbFuXey5pCStKTPiLTdkfvBhyexH6XZ1UJ4a46EKrHxztNGbaSXmSU9EfH",
  "key32": "NHkgnoBM7wDx3Xhq7NgvTcEypQQtkcPYkNgpFHmLqsuymaG4koeweix8ks6etZvaaR3bpuxZYGhfJbHj1EKrRfh"
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
