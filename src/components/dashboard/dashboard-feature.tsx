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
    "56fki1tmC9NA3ZHyDrWDmG2ui7hc6BmAZ4SAvi5zumJ5VzUJRWx3BKLTT1d1smut9tWYoRYmJZd5TQALjGsp1sre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3XoyBE5SdbxEBGvJD4D9yHu3zL4t3xShJutSaDSZGzwb6YxXsekuQgpLt4PnVZiggo2L65zTJrjPccZbrkwGgw",
  "key1": "5UmYQ6vxaL4XjWdJjnudTLS3US2MHioCZXwaBram9icLbq63ziCiGS9vDUTE92RG8RYo8uWM93KhBozqA8ynqmtA",
  "key2": "5PvEUD4M5sirNV3itPDkfWsBHqU4nJAgEVieVviWNrKFpzwU6ayHJWTkh3XryhRChqJNAmo4iwF2FQd18UWmNXWm",
  "key3": "3wm4DG6dGhv3RDsgReSTDuhWR4x7Z63dWNvWJhRyERE7Ub1SfkoKu5RnsKMdGkaUPR98GGpJMrXibU7ExjBGkKB6",
  "key4": "3qv6DuddwPzMk5AmjbaUZf6jv6xRCjgLwR8M7BPLK3nPR7qBQrHDTrsxNULi2qN3ffZLs5BLSTyFC9WCYpoXARoP",
  "key5": "2F37DtiCLiNhWg2QsppLYqpwuReeQL4C7KZq9yZXYonU2nE2ELgtz7hmmYxfj3mZfVDxdGwzGhgEEGuwxguyRXYS",
  "key6": "3PfacQqJirhmXJepcBjUeQeCdCC66EAzKog7wDhWPTWxYaLYAM2pRMUy1TdoYt9M2q6kHXiLYLVt3pd7B3Tazknt",
  "key7": "j8wg5KSz9VtRuUiskXyGe3c1BvEnfDvSPy9jMUExh9hMsSs5mz1tgsy2R3s7trNtN4c8LvovPKExrnnf2XNcT7T",
  "key8": "3ZXmentKNT76wY9jUXdsX9KvwnWePUfhfHQXPCA34faHuiAcwWUgjpUBvtsNSQYbBfv6tN7Mtn7o4XFQAqsvhwXR",
  "key9": "26evFPJqtPh13PZSKvknLE5WcdjFSxUxHFr6JELZQHLCyziM5VkkrzJ53dh1nVLQng78bYf7Hp2VcyaGJGXW3MB9",
  "key10": "YeerGKrBfvAdD4cVgrsSUokMnNr3iYWQZnv2nhvf11PVz466CYp46koNW1kDMv54JRBVb7bY4WgP7vE2Gomuc7M",
  "key11": "5KB6MziTZojBEpCeSaaNVgKCfbZQpK9pNgQY9xaAeYNDfPez5F7sgRaafdqQDzyBJ64aWynaaY1jFaGRe3D9bL6A",
  "key12": "5phFpggPikQqCYeYNEbKmcHGdLQR8VvSZ2jMM1zPHFGSggXkGt4MDUDkgsLk8E1ng48xsdB6aacdebdQsZWapLfz",
  "key13": "bUSiwp37gVojJRAPSFPpD5fiYg5Pfk1YnBQ9ikujVcGgai4U6zHs2Vj8Z39h2rveEkpdbHzBHx5tujPFRo4UFQ7",
  "key14": "47L68uVJBb723TvbCcCoDrTwYsQByhGv55j8GP2NQGyVYvrvftA6TdvXCfTvDybgu9rdvqoHugXt4N5gvCix4v2D",
  "key15": "eFaDwR6NJBWXkJsYREPyZv3yf2Uba4drvBm9rfYQZT5iSStVCFLiVjd62jfuFsByUWEX9Xv68Az97wR5wsLM93y",
  "key16": "3WX7Y8kmLi1ckPorP1mzFYfRAp1ez5TZuDb1tzfC8mjQGv71Syhso2V1sXLa1jv1zL8MPtXSN3Nytojew3zkUjN4",
  "key17": "RyddLQNQd6Eq21Zhh9USn5TVGbE7mZu5SWDHKWt4e8gmvybppKk5KxmwK13LCnEXsKS4AMtF7noxHTWfwjVXJFW",
  "key18": "52cvPpPcpeV75scwMdjY7yMxuEpkzweeyrkizJ9Cxxw7h6BQWB74xSnxLYn8bMjaXZowPwKpfX6qMvHpzcJBzkkr",
  "key19": "4bngE67w3JGh3QG2kweU893giFz3LZggnCoM8VpjzdYDDMs8BHZD5v4TAV3MoskAzFTBBEb59vZh2Dn9uPma9qvx",
  "key20": "2iwBQhRkyiFGorqtnMnjhi28BdDKsRqxAE9nrRmuJFiirb4aow9KfWr3KuhuEAxxyqdT1kaqjHtbotZkGhyx3vdN",
  "key21": "ZkYJcZn8rKDqEu2tXuqjZWG3atQHnuLwp8naB2YWMzoUEsmGYruK6FPa54u62PrQSmTX8CaA427YaX9RBg4FXEJ",
  "key22": "5RoQtBvfEodZEyVgKpaa4dd6hts93h86ToXECCRcbHjdWSMQfiUrNXukMnifrEiY1mHxwgZ7CxUapTut9Y6KpcMW",
  "key23": "46cqX7eNvNjvjBVtRvg9fLSeVuF37awdx7cLvud2ML7LRnPsJ8WKBKjbk1e7RaJVHdojrKmFimCxJXRp8s7p4zG1",
  "key24": "4zBiNtcFHaZbseRpncvK1AqsyX5ZHUPwZiJiRW3R1MAdnjw5yBDR7mpvwUnyJQ8gHjEKJHXSCWYHDdHkpRX5rQQQ",
  "key25": "8u21974rsnbrq9uKZ8kyK68bSauNb3VbFXaFKid8FV1jDCo3m4adpkSUaaFHMC1bD1WSngbPVKaETCZZzR1ztV7",
  "key26": "4AxbZsm3XLeSj7eTjxAx6rBVHjcShnmCKSwxwf7ov3CTsnAyNzftB5pbzSXceTx54UGukQe18bpLqcX6K2sC6yXZ",
  "key27": "4JGLQvBk12jADNiEJR63p3R1fHCYhN8J87mPHo8tq8svWMood3usqvpo7sQLd4JSdBP7oPbwJjfoWPY7nxpEFwr8",
  "key28": "4751SvsehatQ3QMS5jZtWj5PCLUKyd71prratQFca33DieMvm5s9rTagddVceFsSY9sUXeRiZE2yMut6qLeNHWwv",
  "key29": "3VcdvZR5egEgUhPx2q2Vxpn4V5R9SFG7tmoCkHhUwoPYustWvsG9pG3zjVSBbm7ByNK4x3NCHuzam8mzRV5qj8Gs",
  "key30": "59jZJihFsknYjQxovaNpzx4Z4dHrvMv2NPWgrGLQWLeyHon3kwjhtjzTh8Uuas1bsVgrXce3n3w7gUJHHtMGTWCv",
  "key31": "47GJebHrzmnFs2fSLwrEvThmc8WYnN2hYwXL3yzN1FCkwpk6UHsZF7oeSN3W6xJA1JrdWdoL1K3MW37LhmYWuJWP",
  "key32": "v2ikRkDwFnmogy7eD6nmhcRUSm59kb8Wm2weh5YoL2hWVMe9KG7WEuDxCRN2TNn5U1ku1F8rMBMPREVG2XViCS2",
  "key33": "4WRuC4LGQFYTtRy46SEKA4tumCpSzXtDnra9x8a29eAWuGtF2wJ2xaaFXhDDjBonpPKvv19VD1gH2y9eRqTzZY3T",
  "key34": "TMSBMzDZuJqDWtE2GLwKCt2zvih6BtGCN31hF9DFABewr91xqPKvxZeZYjkDEbdS3e2tt3k5vzXVmuQfFyW6CPu",
  "key35": "3LaDngMpHka5DzQrmJLSFYTU3Cmh8BTHAJUwzAkTsNecGe14cd6YNcAgtTgHiV17zMpf8enAV5tkgG3yQ3fkzMto",
  "key36": "2EDgqhkHjHy2tpPNBXGubWNpeV7RfmQg3BtUGKjvfvAEmej2nFuSycoahkj5VzLC2MJXkNZ826SgrWbih8myre2t",
  "key37": "tbW3HquV5VGryWXxGC6WoyUCRtEV1rCy3Xx7AM1TLRAFhpdNZZv4zq4iCKLYACMRFTQHvCRMuWPR9iFVhTbRCfJ",
  "key38": "RZ9rL5p38XYxw9nZxapbrsh9LzvodP7gYdG84PkHRFZcGZpUcH34JPDhrj4BV9L3cQuwdVN6shCdvfCE8nemyxY",
  "key39": "5iceW2eAAngRndkXxHRdm5gkWRYpQRPsEpNu3B9tLtkqUDzMpDTbfArQBWgmn3TwYnTHzQB8dH6faRx3dXj7EbR",
  "key40": "3Sxb5ztxRSryScvFpnNneMZNnHPSKyY9RrNWDb2oJ7rbfHoGNrQhcYhDtoMVVD36aatsL8LNEVkFye38RJfqEmvf"
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
