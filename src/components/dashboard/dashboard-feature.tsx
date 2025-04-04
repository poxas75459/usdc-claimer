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
    "5Bra6EHheTRd1TNYw3px7RjvJGmuEYPY49XCn463gszqFHtp1g45gkpyUxUtjEFwZ3SjTYXzurCexCTafg3nAWTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fB9Lu3kKza89YKLKabZKR5WqXN2MyGQ7GU8qmuobjow42gtUTR6qjGm9CRHdbvJzeaswR5GSzWLnTzqFpNnRLv",
  "key1": "ziQ7RXbjtjFULDCHBLYghRQh3DeL3EfeaiTnEPFWQZh6U2qDDbpS6h3qt9zjFbKXccwT3knCTKgJ4muCJSYAUyB",
  "key2": "4AJMzaZLcWzHtxyPLjJ8gLSUy5N7GJfKz6k5tc5VuHKHQfPMXY6dtXHggwaL7S77U2VH5bmNcnoE1f9pQ4r8UNrg",
  "key3": "4RZKr28dUZZHqAQ8EM1pW2U8w2xMyvxCzL9vgxrQxDwptJPvhEXFHwTB8hpJqJNCWdq26zyag2QKCyDgCR2MszGZ",
  "key4": "2Nxe7WuWrW6useN3E1PVh6PqG8JNdb6E12rbyGrUHEhivSz6h4Dm2nLe4KMRnRHXxg8S47tdvx5ZYsHShaLt2qvj",
  "key5": "TqjLFnFC9rzVtrpC4CfKxeumNssx7yN6uPyhwYHw4ksF6BhbFZWqnLnNds5SkXYJtk9tivm5Co4NHsLHfX7xQ4G",
  "key6": "3vDDwCTHszqdwGM8Awmm9zYwcoaJfQoCVfd5C5BZ42or8BW54duPiUiEKbFgWAHg8cKLqpoxRf8WfqTThdHSWbCJ",
  "key7": "51jwdEQYXxH8XicdnW9iwDJhXqfkMpE6mnc7uyW4JtXo4owg4dhsvVEuYGvVntpjmyfNRiPNpX6rCeZdbvFsQzaa",
  "key8": "3QFXu8gkS8Yx4KkNhmfGXUaTnBzxzJMYpMf2fesV8k12PJs1P6zmjvTfnTETt4XyjAvEkhMbXN647Lx5sJP3Q3AJ",
  "key9": "3ktgUbrEbbQ9Pbrsc8x3VDwMHLH2H8gWgjCyQNTQ2ZHPzvX15Xqd7Y6kaw4reK1ApjLqEdvZqQFauvKXdJW6xu53",
  "key10": "4iMgKYbQCbXJNjE5pkSEiTCpP9ppBYfER6rP2AGaijFPPNxa2pfiJbzGP4smghgPe3LL8yH83ytaKH1AXgAEw6h1",
  "key11": "rbjfKbhH5PJthxdjzR32JpkH3URY2gGtho3Aq5sygEXbs7sKiyqvicWzLxxP2XZTVnjeZZA5JQT9DLkV4Xauvke",
  "key12": "3MJKDe7XgiJJ3cE2otY51941JveD8KFERTg3g2HmFNYdD8xcvVMhrWMX2ZXEQWrKQVkzcdZDGCUpTG1VQ4Lud8pV",
  "key13": "2EnF8v7x1JqnR3iqBJdspfo4UVxug6BZChf3t97kANm6bH9kLsYkHRyW8kjd81ya5b9Ni6V5SF4ffWFDBkp9U2cZ",
  "key14": "4DYVjEdbRjy7jEAgMRxnKN4XHdiwJ8uG7ZTutTJKQjPejrzmzatW7yt4XKDdaWG8jwgPdxp7L8mU5Q6ygLEbr7gB",
  "key15": "4yYimwejzvinXGN6ftxCuLPhYicUiSr4NikYBzpDNmeJeYvgGKusEBJMczDegoese8MFqs4cLbN94yMNKoXkh5a7",
  "key16": "LAsyb92XGCbvRuLUdkS2KmTBj32t8udAMJ3vPg8yN7c8BLhX8zsZf3RczGwcWog4X27w5WqVk2JviuQzR9QTi7y",
  "key17": "6mrhVM2Qtb1iJbiYy4xXuLDuNzdLsrnk5Ug8VjcQmrk9AdoT3F79ctrEmsoUSJSH1xSkaFP9JxCBUgJ77LnWN1V",
  "key18": "n9qnrwVJ4hp2T5gt46A9PnPAKkNi53qZ5JvqQC8Wkukcaaz2Xga1FWi2w3GPi19D2339YBdENYhUxu7sB8hX3Ha",
  "key19": "5c1DgCX1444U4BZcSSgGEqeoG6EFsJazuszXYy2hNmnXj5TKB35T6gh5T6VVbzQQzvC6k2J4zo1NJv8q5tQWASmw",
  "key20": "2e4akM8NsnEABLz7RAFkvhtqbpVpqjg73GYYrjqVYQV7uXezkw2nqipiisKZifgoZZxYFkrvW9oxzfazh9UbuVt",
  "key21": "WHJympQfwnJCZsGQJuXiyFeXwdG68dLS92iHkQ9JvXkUgp3k7xJDX5jia8WYU6HeT2tXBgFrhjJuBw21UqJ9QYH",
  "key22": "52qKYFqWy5gFz2aE2f7pcRzNbNr96jXW8EYM92FD4Tf6VZoWhnUozaAXKYsyrcZMyJLiYVjVdU1ogLcpRQEgTaJR",
  "key23": "5ghn2c1d1aKzsoLFdRQSU9maLtnn7uy5BPLKRVMTzn7By3HPjxpKLvQhCVpAU1wZmYsMcedLaN835gvXgDjz3iCF",
  "key24": "4SpWxL91dSpk4ztNcAVmhBZffP3vBzgqkhdGic7KcuJMaN1tkEXnnbqMCQAXXYwZbAXjtNEmXwpQxdUEfv1yffWn",
  "key25": "2rYUZwxnnNSR8hkKCc81SMxYW9dnaunH59vq8qXpTBtngH5xCbtu4WNa1hDWCUST2o1b8mV6pjW4z5F4jPZC7yd",
  "key26": "2o6qBRumcqpWZx1xs8ZHTkG9Qb3PFeCdbgZ48Vj2ZEaD27bFDdo78RsRWx94ukWk1697cdhox7D4aYT7Q7YbdUJc",
  "key27": "5TsngUsnSqFV4nv2c5pYi6ZVyzxw2qp9Up5EnciFcXxPyAE25XNNLzx7TjRrhhTmkAZSatdvyLTyKP7xX1bPsZu5",
  "key28": "ab7bFpfPiC7VLNcpzRz6LMHmbrx61tdE7WeQyaZgM5QrRsJ3JNjLP8zQLaLA68mQjndkHLbprBJUc5zFfHsktPA",
  "key29": "2B4kfgpAE43GSQzZB1VgR1qX52oFwYPMoVzzMifsjST8a6p2HgECXJyJytE4LSv34aetLLxJFhZUm7SrC21AXNWd",
  "key30": "36Nky89kSm6MiZqeJGbJpYmPMDggbZUqH48cPfHkvBgdtDKcXNJ3XDxfzA7rBsiiNCXZJW3vM4uYT3G3FKd6h3Un",
  "key31": "2ByJ3JRqArDD8XFiBnSvsBNosbYGCpmmdNiygG3bzUPgJrHMqmoULTGnTYoBswyCvYtcZwV7WxdmsjuiEK5YL8y2",
  "key32": "3WrP2Qi9EduC9bkUPmw3EACF5uAKWf9rQB7oxck8tNAfv9vZGdtrYqGi5py3dMeKw5gbNunQTNamfLJjwu3LZru3",
  "key33": "2ogz7xNhYjQCopaKfJyV2rb9qoyVrTqS4gocyWz44f8JWWMTMNWakQrJsmRXyS7DAEbKUvqfb2JRMy5xgNTnMBXi",
  "key34": "5JBLb2bP2MECgu9ckFMHvS4eUdN1dEmQ7KtHwDiDXtPB9SpqCPaDfSYmPfcnohhnNMXs27i2YMNSVWhNZdmbHEvQ",
  "key35": "3WeZVbFbxxrJ7jM13tfjbGJHhuwg6oV2NRAJSk4zGgZuLvhBVgmtDcf3rT9FyNctpCNyGRLFVbCJpwG3B8XKGPBQ",
  "key36": "3WEHJSK3geHrE7jSCbt46vVkew9bSxGTExT6Nod3DNSPc6niCQd11tMgy8xB4efsooABmaZMqHqecMEHhDeXbFVc",
  "key37": "4BWdaDk1hTcis5Z5w12juR5yRKTjEcBeXZ6JWrZoiQFYpkScKiudV6AF4xJxsT1q8bXZvQkKzm1gtTpZTRdZ2BHF"
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
