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
    "39NfsybBdw9A6XLRB5ecJjbdPLMnZKY7uGhimVhZWWoEHovTGeCem2V31tJixaz5HsUR4pdme8A1joecr2NDyX3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGsJMMW5d1BMJVGnkJii6r5UAbAUDvVSMXcP5bufsTqsfb8zwhyDKYwJQpc7eYgw4JWMe43zA38N9wWckmoSFVF",
  "key1": "3YBW7N2JmPqXem6fq3cJxgBDhzWKfbYcQoBD1o5Qq7Ke5XZKnaKJoDZ84a9eUcqEowLySrEX64gvtvL6CkW76gvL",
  "key2": "5r6Pou2Pa6wp87qaCaajvDJ1RNp8fpEv8TrySKuA9phimHZJgLx7UQw6PZCVZPan962at9uREnh7WX2XQ49L6MqN",
  "key3": "4yziwYYkWVGxrGWZSyr68QgVsjALCQA48VCP1NkyYyhpxKVg68UaM9f2F8iPvdsBF6pEXZTYuCwNrEJpgHStyggB",
  "key4": "2VAvHArG6Zmq5CDqsa2Js9WtEqWgRczcxxNnUGpq7Ee4MBnoQetSzk4JZ26v8kL15vXgGAKuhmHSYmhjWG7NZSQD",
  "key5": "2XRzphebpnr7iPkkXths6negwkziqPvmARcN9Wpy8bkVggQdgGNKc4Sbf8KTkY4edfYksQzksMqbLxtxqTong4C3",
  "key6": "6LPw846y9xQwJKgyZ4wM7m3x9qSDwvgtioSrQ7Do4n8n5ShPEt79BgdG5gzUNzvD9K6XY3dAusf2S8rnXgvqhAe",
  "key7": "2rSHkPNLScDmDqGxtW5a4emXukoK215r3B9sqo5zrYiJrpVHhCaGHZCdWno5acc5xtTTsxfDVB4r1grgKcFtmiUq",
  "key8": "61M8giUo4Hc89TjnyToPVERFQ2oNBbcff6e2JJQyU1YM78Xu1p6Zr4bZs3vi19VHMgfih4f2uJNn5BXR3FXTnp7c",
  "key9": "4z13J9PktZ8AsNcQJ8vf3m6qcLZak6su6ZwTpYmM5BTB19Cw7Bo3FEMFaUZSoDdZrRdqRQsipNNRzVU4WGeuBYYv",
  "key10": "2Wgtuz9XYjzFd9iUEW5nxYPSGcqXGk8JVNvdXJMxKmU5YPuAbUdrX88EtqCtWEUr4fzzNXHwwUSP9dpJADPk4nda",
  "key11": "2VHN3w2x5tDdjAforSRqnCsQNuEzrppjzd4trT2Kipkkijyt3x1dcQ1eZ4Zbu3CzD6wLoWy6isUcpAfXpcRLwZKc",
  "key12": "5akAuMDUZf6dU2Vf4rnjFLcK58TgvRs91vNsMHuwbXLURL3R6zLu6LEy7sFiQWyhAtoNUNyWRH7iXiVfsyjyjnEU",
  "key13": "3AQ4c1yZBE3F9JihzQKmUUexcVhdSiMVdthfj4Lf8QWiQPupeXKdx4Dykha26qotr7qjkFf4Kd3zArqR6FmJ6KWk",
  "key14": "2vNPsXNTY77fc887qnyTWxmcM5NedUcWkDSwBhdWxuuobxUs3qkNvK8snXNYCgTahzPmhgdATNVYcfipUEmsj7Cm",
  "key15": "5oRU5J4RWZiWPnxnWD4UDH8ac5XMAQbYhB7ywuGAKBua1kfDA1rhaqRb49ewWr85GyDm8biaSxoMHCDf27R1PYPs",
  "key16": "vpbx2iYdSKa63tsbPmNgFRKKmKja27Lhvy9wvCJX5qJwjgGmNfXgXhLs9hHqBz1FZQaySGopnrdbQzyruxyV8iM",
  "key17": "3eUttNzpwkfm8ihxtfQQ3ZtoP5ZNWR89CnX6SQ2a7LGeWDNhioBbssonTTU1y6mz3ZRuessb97hXNWpeWi7nVsT8",
  "key18": "DriT4rdNugBkMMfgYmeMaovKb33F7f6xrzV2XEDE9UeUhgaD3nYqHScjEKCbZhs2oz5JUyeaAs9mpCTaKxf6cuy",
  "key19": "4gVDzFRr8ZLNmJTbfhaczRMkDgnKv9LGTCTULJFwywdtHTVGCvw1efW2JF7oL82jNC12izSuMh43ptMBgPWq6nDa",
  "key20": "2kcWYvTJ7LCJTRrzrUD8bS5c6o6SFQzUihES5Leo5XR7C6XaWFhDJRQtwNbqMjm51MwsizBYQoYGunVCi2HzsN9Y",
  "key21": "5uSTRmdajtEc6dYuzNS22eFutjEaxAj48GfJvEGhqGoMGtDkzfiJMJk3f86EGCwHpStyTGeGGfEUkAJ4WLGo3dhv",
  "key22": "5ND4YT1NqgZLXWVCA2yqcR1daHFascEG7vAiYnHYt16E4CXmB6TpUKcF1zWaEMmLUKfu6T5PBESQ4pRDaPTePG1f",
  "key23": "37tm9RGxmQ8m4LRYiit3QE4jznBXJrsBqvrvWQ6WWrxF5DUq1CL3r2Hce2D7LdSmPUToXg9xeumXWnmfspZmbHDJ",
  "key24": "2dwo5TjepHFo27bE17xcX51onCWCX7JUPmg7gxNmXWgUZAKqy14vKYPx1NaQ7dBaZGVQ8QdHiwfQuuqGjZShj2qQ",
  "key25": "3pySLKAjtPhPQsRJ8pgLH7rpb5oTadvrV3aufdGMVzaFgFeiGtoPo9qm4wU6hwGHs5unVtQcSmZwb7bbHLkBouiv",
  "key26": "7r5qJtywnspi36PXTdsMCRpvAsD2gxxxXArQEBL5nLrTpeSCg3QjcJ3cZTdF7mjPmJDmiaupj3UCGc6RTVK8k7x",
  "key27": "2Xs7NPns1vJevD6AgwB3tmoSPsc8MreDVTWvTgmtv9BWLuuba3phn17ApX5EKo4vZ34X6Ubqzg46Ap27JptUN7m6",
  "key28": "hH9bAv1ScMuKoTJFjWNNhRBnnCi3cejJGpExqtiA6sExK2nb2rwsMqVpGLubCWDC5t6jcGb8LVLcvMZnfdVeLCC",
  "key29": "48bh9asTssVNANJjeRmrbo39kSN3WUxKSg9J3qieJ4u269Jv2USDvheeUGBrnCcTj18JKAKEWRiSW7XDjE4EKofp",
  "key30": "44qc78pLvrvisBtycN7t3ucjrTFczJCopGyNFuFGv3LduQR1ZEHhy5VPBqKDrwZTaozQSChZ1ivPoH8XYnamLdog"
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
