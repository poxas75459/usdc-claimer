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
    "3yWKhVthsVg6vKmCakjX7MJbuwyJ8VSMsCBo3wq9Uk2nT3XFjJ6epGCR6z7dRkCdPHrptNYhCrmrCKLuMByLi87m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whjsd88GGcjfsvaAQFW5w32rwgmGMBkMbtCqT11Z7PyTtByw1HMMh2iWDcgGg92hUUxFqscbPxQeoeq5prV1fvK",
  "key1": "G3LAWFLz2s8daUnfn5w5johWxz5w6ce9wSAZjr9AfGSRFxZUN7dM9WUp1fVBUthpC6eGg5RzbVNNLK4Gf4Duydm",
  "key2": "2QLEQ1JaWCoKM8665CQe4rACv3oi1yukR7mnjmL1Cwfw1Kx7VAuFcLZ8h7Stx4k7zhB4eECpiRGMoVgf2D4oG9w1",
  "key3": "2TkHfMAsVhb14KBAvpAZw9eQQvoiAG7xrMQvWxxP783Y1veQYryt7cZUaELNq6YtLspPWTfCd6xNrjtUgQNs8DvQ",
  "key4": "b3wzsCnjcyhGQuAB99SWNHMCTF1GzBPw8T51MGpELJpvdvZdnAzPMwyq3itTMZXkkjrhgXzHMSDJrcG25eTufPD",
  "key5": "5Mfp4Hw9feCyajwV8oRYrLujqUu7AxTMFn7urdCkx3CL1248JzzZtWdoWMyfdaHs3mhpXRDqeuNQVVbE6Ckk4z4s",
  "key6": "39p4X1oeLhiuYbr3UVJZLkjP8UPaZpQEsfc4t94TApX9nxRWQz32oY4uPZEsDboLR1tt7cBsvK5YK9HsjQuuoHpU",
  "key7": "fcKkW7eHZgZauJqvM5BCkurTmossZ5aNkEzE9aAN2kPUZNj3qgYciVM9dgMzLiSAudhL4jKRUsFRLCJTYdey47i",
  "key8": "5NMoy8CZjisn2ffDnC5Q6L5MmBVL9cxXACsSqGsAuM3MULdqcenMkdYqRhqZnjNtNh742TYqSfRWKAFs1q6oioy2",
  "key9": "32vwMWLaiC5PNP5ZF42HuoHnF7qyDBfRUaTwGFE7NBRZSSd6kxGvtxq7jARvFrx61WKKpvJA6389xuvi5uM5RxZn",
  "key10": "3V5yLiEKB6EizaDEa7Jp8n4KeDzjtt2NDnzA4U61fo6f9aWzrWAWw24PXtzbYLCxZdr2eG5nyeBDkZWewHbf95Yr",
  "key11": "67qzASu9ahrUxtNVWKf9SwCTmFpzdEGWxDBrZxzxHVmhTY7B6cuEM2KCesg5gxRx7yKRmBPZPrJKDoeQRiR8nHTt",
  "key12": "3vuuNAp3n2vPrjm35ZdbtZs3cM3u3B3syRg51ZRPbbRpPYoJndf3dGneVvTpPxjVXyrGzAmikCFRp2g973bCYGse",
  "key13": "2Rgt7dApH4kssKyr95YnGBdeM56VAFrehF7aZEQjjy7Y8qNprZKppWyWMqoHsRsoDVfaW6jHhZDY44aEErQ23hJE",
  "key14": "3JJexEWSh7NeSc8SqqmQKLtNqMKZCtgmND1CuSQjNZC7r7uRAcNPKd3ELfp7qVep9Y4MgrvC96pjNuLBkoAWZ6cX",
  "key15": "5ugZPmJHBpdFszz8BkdsGaduWH6njR1eS3r47yPqzYiVKDuxLR6UJCAHTTkSSEXMqt2m49dVft79XaM7JRtR5f8G",
  "key16": "666oYEeRkc1D5y56VYw5V878B2rTruNHHr6EQgB55WQwm7Hui5fNwwHqeSUENNbLXWXK2U3kpqNK7Ea1mzJZi7Pp",
  "key17": "NNtsVPtkyG9xZJKeP4MPpSVRQcGxyfWiMjkAgm4gSuTDx9xsygetcD8vDcd5YgU3prRzU9uCer5Namq7L6arZwZ",
  "key18": "c8LPGtBosgrqFJKhEaiENY5BNUpwNxCwo6bQKCFA7VbAtbMA5XTTrP7nDw4KPorwcwvZeENTuQzGHG3BLga2Bgh",
  "key19": "4z2XnCdQCqJpipriJrpxRb83NEDuLKvow1oJdmMihyGuBftPWmR59pgxYUaB49hXqPuxSYqs9T9osfPnaWxf4Ech",
  "key20": "3Ycxbq76WMkceQZSDso2ydPjkc1scqjmAz1kbj5umSBgSPcDrT48JHYmoUgzmCzdfUuZtAQzsHnLu1QKGGZKeGrM",
  "key21": "3g271P9G3UrV75YcvBQNweDRn9xPZycFrxgMRdJv5R1Evm76a5KQCPmrdVGVHNwE4UbDhAS43p1dkpHtLycfhHzy",
  "key22": "5Avb9Fw5NafCr9CBjW98fjzdzbBsQLD9WLvv6tYxTjUkjnHuVtpnZj5WRjEjCsAUQXatabM77VKTSdgLhBCYfrdq",
  "key23": "2518LduQPaR5UkK8N7GC5A8PaGynR6tYHKty6hfZUVCXzTKY2JefrB6Fo98A5pKeAjYcQ2miHCwm1ZQvceQpxopp",
  "key24": "5fVWkqWE22hE6VYu5seoMMKSHEzSr2dB2d3isB7KrRd8UZqGkxtcexLyzy8GNLKWbvVtuLYNVw5mwKFSUPyYV5SW",
  "key25": "57yhNmbHUqTPR1Ah9yVNqd5Arn1yWaxESEv9Q1Depa8EZLqwsbaK3L3MZFMWVoRhNyFjX46nVeRixTKShxSeuL6H",
  "key26": "3XsNyvtGDKP2AB1cvTTvShV9BdJfrsN2wMDucMf1oPGN68FwwNysjXdgARv4GLTTCoawJL3FoSZvgbU2wfTWkmiq"
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
