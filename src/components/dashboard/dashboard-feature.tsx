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
    "3fDTpfVau2YuwnDNs6pht5bvekoGR6kDCpCudgDFYzW5HigBF2XGMWHEE7CDnt4nxZ5X4EPtJ2hD7RvvnwXTn7o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLz5kgHzKuX6VGQvke9Db4pvGRkWxecytAEBvsdnG76sPV7ooDwfA3sNt93CXh1ntxKzN6D6wTZo91zsEN81FgM",
  "key1": "5xNcqwzZzzSMVngbaLQnqRqNravG5P1xxnXid9gGVnkV3bPyyhf5idHBfpWXU5L4EfGozvVXRaNLTFQjh7mVT2WW",
  "key2": "5HApUCVUR8KrYTjpNbCGiPG5tgtKBuKZ3ZugW4pRd3PgShFLb4273Dh3rLpVLLgLus332fwkFU8hE32vennEd4rN",
  "key3": "5WcmK6wMYDSqa2Uzwy1HdnU1HMtHBmdJpjBmroX2j8hkEPcXzhL41hJEXaP8eAvUYGRDFRqJP1AUoTe7mE7Eg155",
  "key4": "5GNTYMG2LCAC1Hu4f9ScbADXExqNcL3oBKwABamVzkijHBZ9jaQgYfDA752ATprjPTdbQjtPMx4KFU4rLTxrdCTt",
  "key5": "BoWAGJTBS4MPFswU2z6PBFgFeKApwcJgvJQgHCskxrNvtvrW1A2ZHeaJY4fmdM9FdwxDmC9VrRCb1AxX243nYAW",
  "key6": "2E6h1DaQqBGPkaDcpxJbr8LFps7pzcLYpaBCnf3CAXVme3jxfL5BwnZBotMgkrfGb2saALX5x5yZ5uqahtyFwvx8",
  "key7": "4NJXqxrSNwz1avhZZiFv9owQ5MRCfYGxFWYH5iRCSExLdruMHU2HeZDEwQj5X2kYB8PrXUuEL3Y3i2e7j9RqyCpu",
  "key8": "4yQxHgj5qx22sP6i9gmdBf7vV9HSQYgfXXTqnPmrbo1gZ5QiqSSyFCWmjPnFLvjA1ydcynrEiyNcramBxySTLo4m",
  "key9": "5bvddpAboUQXPtf4VPAbJtWU1G5yoomN7eKbBmknm6NfSc3V2ncvLRrNonjyhNnARDp2qH3UPpLDYigmg5ytywc2",
  "key10": "3JqtFDYv4SoWHWxPCjd2ss7Bybv9WrnDnVMKjRCa1yEcBsNZkeYCmotro11EU1umEbp9Nfv1JVZXSuFhxin3ym6V",
  "key11": "421RhhgPvcDeikVgsN7w739hYMRfZpBBbZTuDLwmeJgaaE4XeBCCdZXb7baWKDaLUH1Lh4MyHURynszdmprSnW8T",
  "key12": "4aJ8jK5apMxeQ68oFmcVYbJppsXrowm6zeXFwWWN4Tmtrvdp9BbBe9AVpWEcxgPMz265uWyLwkmGJ6yYk2oL3rXd",
  "key13": "4RJTTv9HUUireBihBjbWgHLSTmz5NxBZ7GvdftNBnuqeAFztNnKxntYy1k2f5g6ooxknZ61TRvUWRJjU8WfZv3Tv",
  "key14": "oK4Huh2CDo82be82QZRrAzXfvqKjgGCzWZkjvEk6mRZNmKpupwcnRSL1inLbHEwWwRa1vN1Fqr732kC8ursfnCT",
  "key15": "Ctx9kyP7hhyv4xvpttGMPMSf2astRikqmfyM3QQMV14MfV9e7E576DLgWSCF1HmpKnTHxhJWaxtmPdeREcHpATW",
  "key16": "2QAkvVcQa2FDctYpVy3Q9hDS5pW78v2xod6t956wbLVghJtEzvnPqVqwQUZy7nJR4hwqjskozzt8Sp3KJ5rUEbR4",
  "key17": "4YXm7TZue72DWNAR4U94YCNBV1KeCELBc5D3mxyyUJxHfv5nV5HgqEa4xKxTgKN1gke4pJQCqTDU2F5Si9Dbnhsk",
  "key18": "rbAKzbmKNsKoz1vqMFZe49w3axHewYVMZZwJ8jpeTSsqfWwPHFiGtAGox1H75mktHEUw6EHJsBU56MZSHXXcHmC",
  "key19": "29okhfdDuKS5eu3wJkNiYaPWnhycrSoChoaoLxUzd3izr41ZCaWWDr35zht92RGs5qH5Thiv514q2DhHM1UFaKvR",
  "key20": "rkdSMgVfynvGkxExj4Mx1Qyp1yeS6ST7i8Z98vuZHwpJLVEKBwjDEXKFpqLqxMP1gzcuLD4bWB9jSg8L16XwrDn",
  "key21": "47fFUoTNWVAZBhcbaZN2TvP191Sma4pE6VQFg2DQ3SJZLA4A5puJSxwrkstvWBuuktvBkftmcoJgVQvDVeqaNKKK",
  "key22": "bQ4yEUhML9ADEdzJBmKxJRMmTe7t8QEy1xPvcHNgEBLcENKktwHySyZG7uKKrkBDvYCh9inKyqU1ZyoxyVeHUmV",
  "key23": "2gQUo9yX6RXxUWVFXZbtx9FzgAWbkJmhjzCxVvDAR9LJf3UQXGsCF2EeqWiMMTj24ubPcL8S4KbgLFrHmU1DThUD",
  "key24": "2SDWPfZ9yTe3JhqnizQEkQhxkjpLsN92KT4WA2jzcFrBMyyXSQdVSKtRZHsdPRyFc1jHYjRyszFfw6xyeSrSekvD",
  "key25": "Q8RsuYL2MmQqpnsJ5hJqK1ahuXgahGntaMCYPBQ3HX5CkeQ1vzj37ic8PGBHXvsK3Dj75HDmb55vxnGKwjvfu3N",
  "key26": "2TjPUi6wRVx6wYoGASF498uLT2TW6kHdcTWsSCF7ZQ1zmhRpUTdJuSwMVipwXdUJc5xcoM9G22ZJb57zccjoRLY7",
  "key27": "4zJprgoAJXnmRgPcs4LB5fiy8xNjGUDT6VrWSX3P9uZjnvnbbMbeVGUgiZBHC56n6TuxzHrzngwzvtJrwTYvGzwD",
  "key28": "WjHnRp3N5Ft3yEeM3z4RueqUiqUHdfph5CmtXwLMZWHYXSKXR8rwoRUeBdAe3w56mo22XatXA5hXSvJ2jtmmByU",
  "key29": "3BCDHdtFpaShkfNYenCqHCp1YJbaVZTRrXCXP2B4jx2n5FrudnPDNW5Us5VZ7nHcKj7uLFqkVWLJuzphYduvGkgM",
  "key30": "4ozTNdMnZfLhGH4tD44KGcdSLAxrM4WzDQtDqny8CxCVZfh3DRQiv7nimzxrEo6srDfiP5y22Jjk6J3iKKHe8ePx",
  "key31": "2FxbgzwjFa2t21vJ64Mr4JuWPDabrK6oWo3qz5WQsgEY73jHutfxsjkkowuzYaSki9AU7zDx8ELrhNNrQESAE1Up",
  "key32": "vHk1CjBd38MmEiHf6MF4NSY6CjtXh1ehzWYvFV7vt2rtMrXwwmzz6qxAidcPa3oubhrCSHo7ofSCDY2JDbku2xR",
  "key33": "2HVYdRyEmzrAJdKtqyRALLq3NaAnsQMqsmsKByEzaSyzS9Lu3CBFwoHTemerPWnkiDeXLg7FDADY7G8ukDhph7xF",
  "key34": "3MYLSQj3TxPnuKjNbKYq2qJRiod3KAujMNqA2c9Pz5g9U84a6ZTF58DxSJCo8U1GL7cRnij1SPkeZDtsrdeeEK5w",
  "key35": "5AjRxiqKPd24wVBk1sT2M7KCeQAdJWpVuZ4az8gTbLkMnonUjKrwV8n8im3eB2tv8UPKi1izMU1Hqah74bbdr3zw",
  "key36": "439RVQWBZ52hdRgCPF5wAR5VcXd8ejiqVYLeq64GVPybFW4JsbTbBEyJbEYsQhnPRkjoLg7vpeQQzSYbzRv4qeXH",
  "key37": "2QYGui1ADqcYE4D5gHMSHMxcQTT1HUHqpYEcNJwwSEfSVSt6GcSLkpcEjLgjfycaYzDAdJGcZ4H5ijonx8J1q7fD",
  "key38": "3kRh933Qj16gFQzYJttVAbPheSmZP8uCQyUS8cJMKFbQFSMyoi75afJkco4C4AEWZdQ4rQD2hjJjJVdfL75oko4h",
  "key39": "5GNAg8W1VcoZN425VQ9aWz5YCMN2pXM6mbhgn2VAstAoBSVqrTfeBJgk5tdug9LjdFzFpHw9VC7FS92RmWEpACB",
  "key40": "4xwLY9rsi1d7LsRzAmuZErnRjfAGP1ZcEYgQ5hCsoLC8ia1Sa5GHrXUehNpQ35hHPPBzu6NsKRYJgaTu53bEzx46",
  "key41": "iYu1vDE56tpmaBNFUNr9p6GAdHKLkWF575cdaFUkFFw6AKgRMrQD9ZN5PY7xetjRSx487n5jGQX19bihcrTQcWF",
  "key42": "5wwsExXYUyiNfyH2ATQ8b9ydny5bTUBNKX9f61AgXwusZGfpDsr3XHG36ovG6JdpgqExU1Rc1mzhXtgzsWdp9g75",
  "key43": "3S4ncZHHWYi2nNVxxBFBF4ZvQX48YaYUt3W4euRnZ96d2DBfvpsb2op1vUq7jzT5VASGBnk8tqVGAFgLVDuTNQYV",
  "key44": "ar3zu2hQdjJuhsmC9vNW8cwLHGF3us458kT8PLSdatkafV5Z2Y5GnqYeitZaB4xAz8w8y4eKJu5ETjMxWie6qfW",
  "key45": "4hXvsXcRQheg3SWUY3bz2gz39F6Pf4MiLgMgbjYgHaWMYFjVxd2FYH2ACNxuFKJFhnPNaVxLEi6hYPFb4q7ARZby",
  "key46": "4HfuU77BrtRBENoUmeTCFY8HkbL2eFaAtTeswySNk99r532vWhNtv3ocBQm1ZiGcHByrvwBWrG6aSedJHcWCyGx9"
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
