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
    "2GrNDfaYXJapwkNUPpBdCzfvivGobjSyLvNFvLoNQtSNi2MFTJwyAbjViy9MSR9Qnxp9mpkCwfk5symx3nUwHnDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6DxmkKHJbtbdxSe3ANbggRm3rJfvMDna6ZrQhbAsBs6hsx5yUdog3tqUkDHGSDuDpSqYxofNsGhfXxxUdbvtmX",
  "key1": "3CXrSWKHBdLmetzSrY7EySkMKthepqwXKjh6XDESHpse5dHMS5dFnJDku2qw2YXJdW4BkisZxCi8hsyJBmFsBzzi",
  "key2": "5qQQtxPsG74GypFawitWFFy9hH8iSZ1sGEnpiazSKKhYLbzcvME5ggmtw1CSoYuQcc4so3MJHLxStkcTxyrTKPW7",
  "key3": "4UFpHhUJcShHWQNQVEKyUnwPkPfAUWimwMPLGrjuj5YrCk3WNG6SmGPQ7T4F8a6Mg18NokH7Mz4NZTKtQ7dfvwDR",
  "key4": "3BbfFgxQduYsQLoQUh4cBgckpBWW8kEi2qc2G1wfzBiYS4YADkpbP9LQ2hzW9UWa9SPBvfecS14fHtKsabb5YFjC",
  "key5": "2qdGpui71Xb7G7EWFnJyWpfP5rV4fStx76Hf28PJMXJEyTYgBEozeqVj7AbPKrh8pKpnJB9bpnhMb6tEvCAGj4Rf",
  "key6": "4WnF2yM316gPQSJYSu8XQiSyut4TBJy14oFzkCid76rTQ2akSQhCN6VDnGJFHA2mcBUfdbbLjAiyonnEupLnFYuz",
  "key7": "5VwmTchLL4LfsJJXacqBv7A1BeX4xGjCp8xUruX41JvVJidpBrHfhnLWKFWERtfFbTRuBSq1ntayuvEnDDLtieRk",
  "key8": "2vbAadDZfBQc3foFZHisrsBohAacJvfUSvZWC8UzGXokhkEYn4EpYZvPKAeGYgWySoXEdjn1Ggef1zze4b3yQssw",
  "key9": "3EZLZirZ593R9j64GGRCKwLMMy1ptFea7RAvig3zi6UBDpXZMs99A6KmnMFtFtaxmCBbMNrX5RNbFvPcXm9WcqFK",
  "key10": "56L1WgiQaqZtxa6ykEirNvhoN6xSAgyW8N5YNT4eDkPdPveC6msbF5Vi98mKuSPR2DHFZx6VMS8EjHDGjzbdYPre",
  "key11": "HPFKczxRTLnMM2UtAmSQ5D2MZZr9ATcq3aXLVcS8F3YT5K2bKMENhrXNSvQ14e7TVi3vdGo1y2eQSt6aAW8QTAR",
  "key12": "3pTmSqrEzXsQnvayM8MD2R4tJ2oxJYZjH12fxBsEKT6KCsEvhjabGpMQUcUKSEfPcqj9nrwuqS6czMVHnZX4vaUN",
  "key13": "37x738YzEeGPN8W5PqPA5yvycqQu3ZrMZemp4pU7hDpisVv6BJnzYP6W5BagGn8SGWoTKkGCNY7N6CmP7vSCXkbH",
  "key14": "2cCGXxZw3wA8UPbreqxYf765PWAtPx8UUr6BEd6mu5HPV1nq972qt5nLo1P1rfG9hzQLHWAeY5upVYo6i6nfrYuf",
  "key15": "5UAuxnGRyvE41Hq9f6BHKTLrA27q88PvXQVN8Bxacyzo1rKTVEfALpgbPmgUWFHExf4GX6dfrX7EcBbzSZQZ7Rkr",
  "key16": "2qmdtgBSdHjZZJAPfhXVuKTuUHmMk9tWo373BvtsY5ywLWPnEpxMZGzEU8iT8ZmUWDJDQPoLMvgxbVX5J4nNTWSK",
  "key17": "3hJNe8vyZNRPghW6mBeqWLpaKHKUhWiqMQzujAZNdwzsGMVWEbU1hJiCCWXZZ35qeqAmCvsp6gsNqVh8sboyeNSk",
  "key18": "3Uft49aw34ZTADH6yARzC1x2j7zS4o1hDhWkrMyMQgHKWik7AVQPopBfbPxGPLJfZvpQC4UD3fvQgWeUtnAdEynX",
  "key19": "3wgVUnvDdBZVzcDhsd7my2eiKGyCNCqTYsJUkgw8ZomwVmxWRbp2hessV8ZhYpthhS4ksWPCLrNAKgDeYRjMBBVs",
  "key20": "3duu2dQiGKXBn1V3JSBKzV4BnpMfGnQCZqBaDUHoyTMq5cwhJm68D9TqY9BTgUSA4V8Ah4DsoaDX7MAbN5N7e3Xy",
  "key21": "32PpeW3d8UEpkTpUKmWZqfyvFA1a5WgqWAQTVpz39sdcnBuPTmsYmHNuAkbGUKcXdeQASS37ridtofYpNfUFNnFa",
  "key22": "2TpX25hiubxrtcPjXwgnYRoXSXND3uVwsZXr7iX2XZEBqYj6Qr5GUcAu5Zcs5TFPB4X5PuvM6SCvoXLz3wyaQUvu",
  "key23": "3NfYXfZED5s2FaxoHjvB6w3f9Kx5wjUAN5fCEi6LeMiKW2ZWMAx9ACyFgvV9aPi6HJr7PtpATdnxRKj28EmQKM6A",
  "key24": "odqosJiqFKe3GLqFQ7rvEKxYsJCtV4HwoQQN1FHxLH7oH8mYBWv62h9TCWYBoC55VFB9suokrxBT6i9b2jbnwYK",
  "key25": "3gJvtG1Uj5MBpjP5sUiCHyFcdD71fVntd1e6pb5peKvL3t2DeXgCzgUVXLY9StrSh5uVpPxaXbLLpVcJeKKhqJrY",
  "key26": "2YoipTjxTnJasKnYfVZ31tjyBAk5qYZLb4j2nBBJgQXkoJS6TM3puDoBVS6v7Jf8xaegKGi5ELct5QFLvTBnpXC1",
  "key27": "3QMSoLde5hxZRVZbEcCL6cW7XM7YEKEwbHUV794s57YroKfSfnCWEUie5Vddz6e2L5jdWwkeQzYx2DHe2oVCuUFr",
  "key28": "295yxEZ3ArjU8J3aFJXCt75fi1XVQ9gnSDd7HA3YoK9DZNgEJTfEdFHxZ21LoUquschYztsjHBMgau1YSfJw5zaE",
  "key29": "4zdW2uuPrsHvgVmHvWvTpBCrgHyNttbjN7jDX97f5do9MadCHLV3UeURcWvVmBtwtDpvqCLFe3HLVnYTN3wbfL7v",
  "key30": "4veN1zX3kBDs19Y6tnqhMzXYfPa2LkEHXLPBrMmdoxgVdKe8QS2JEixtReQkfZKzKJY9u9QFdXeds2D5vhzm8Guf",
  "key31": "53BJWmAJ75gvEUvzF98axkhwjudZQgroTwKGXAY1zyQtX1XTFeSY3RkcqPAnBrLKEWCzwbF9LMbLW5b7Fc2uvJju",
  "key32": "RBYWcbdAeEY8UGfst9SBy4eBpNxdBpUWd69SZrfEhaiZsUpftZEuUmBBns2uAH5qqCgnXpUrrc8hyNdrD7i8cQR",
  "key33": "2kpACEcrTYkrDy99cbcDZdAKw4mMA95Aaip9DiRo7Zj5MvGdwvNoq8vyAXXstmDG3wsSZHWSyWRosE8jUftzkrwp",
  "key34": "3PBtXLeTS4GXFro4LykbqWwCcrfQR6iWgdSLMxgV1yn6t2uLJJVAkFjxncsJydFT3kDiCrcQDaWAB8yv2hQMaJ19",
  "key35": "3DNNrw9Cqign2f2DKXLwAsYPgjdwgoRcpWj2iZVc3kHQgAkNvMG7fG7fwotG1qva9TCJjw4WaPBqUvbYT2m9GWZD",
  "key36": "5SWjpmueiXzYHTddPMoY8xVrpHrmWwkGp12dLY9e4cJghfwrtkGDC3gBBvCWuAXVTuXbac6JK6nKNbBQpTjY2WTZ",
  "key37": "3DEP9DNaDu6DGnrwzZo8uq46d3JMiBUM35jB4wFDfSvdEX77wKK9Sd2upXtXZDtzoRvLnGhRWPBQSB2DkKiQdkvL",
  "key38": "2aeV6up1sqtkb5gWFBtaJ8YsG9YvMgm8MwU7mw8MTHJ3MBXzQXY8bKrSjXtYVW1FfiMYmyYAZQVrRuwRSkqJXpx5",
  "key39": "31QGycAbuSz1q1i25gF19U723XCNo6htqEtGh1sehnxy7kLxrzrNfFmp9mw8fA5M8cpm4Pd2c6528Bs6XpMkyHww",
  "key40": "2WeZFb3QvhLXDMK9AGPJt5kEd2egmTN9sM45wCAzxxPNqi7ythtspXKh6eGVboTW9oVT8AS6PikJ95oztgT6Sq5y",
  "key41": "65Q5ZNEGiVggWum34gEFMQ3dFc1MzAWt8fQRBSmLA6pr7Rosp7eLjWHKuKLVaEecYwrBgHGinvHD9XkgeK5xBhGr",
  "key42": "EwjM1pnLcXK7yAwQB5PQ2rRmfibQ7F9WXDQVVTgdXunnFzt82rJL1aKxcPiou9migq7u7wQeE1xQ2WR9zgmXUPv"
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
