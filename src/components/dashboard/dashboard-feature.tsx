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
    "43evEGtKomrWtVH9P3ZrQJjueDSrC5LCcovLSk8RFpoWURPsYk2BarS8cZ1Ej8KvxkRyxS6MvordStmvZHk1s8ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZ7EZUHvc9fs5C3wAVTfsfgLzy8RbFYDXY38eSTKPjGNfiCZdwujkmtPj4Mkdo321FBX4ad2v1MgGeERWjdg4Vb",
  "key1": "5d7cAUH8czpD3QpTJXhMQLzxJW8Q4uvW2ftkqSiAriVBTrxW6cfF5jgFNh9hccc6Pwhiuzv5hrPMYJQhixZaehEg",
  "key2": "5j5i4kZYYNAsnX7UfDRhv4uAWnVUPkweSGKfZysGJrnbt4Cw3v7XJTbV9vKdb1cv57gWZ6DQXLSUpNow8EDXAgPJ",
  "key3": "24w6gaXNg6smaKPaEp7Qcij37VUKDGJNAoiaoxtWZTupRNLYf8yznEtfyZe3EieaJLhDcn9sWQj3mmmRBWwvF7eH",
  "key4": "4w8DiSZJFZYj4mfRAtqcDxRj3Xy3tbrGzvBBqLSeyTzWjzNSztUb17anSnAN4XWLuxJkqLBK6gpHZDiRY3rmzTyL",
  "key5": "2647Uzi7rTA5x81WktpNKfW5MbENBDdbGSrULbEmZjaVbshBAuPGK5Z4z8VJ1dZuZweEWArz9pnbLWV9uaH812oG",
  "key6": "4Udy6883MyJMZRZypvd8CoqPbWZF9zhSSa3vmob4aUQAAoHU8o54fRCeDZDK8nhHoDmFGjTGb5vi4sPtf381oxZR",
  "key7": "HFW9hgCy2X5XfCnZ78sHmiMZ89xxZs8jrABFyZ8ZeyNMjS3QUmz9AezFXxYPTHcDb9eD3pXuvxN6shh5j5PJPr4",
  "key8": "QfeRCN7ujp3q4C15mhZ4vMyJcvbUDhijHptzLVZ1fwbee972f34yd1nzcVedoBTpwMoxBMR3rM2VrT759iKuRDF",
  "key9": "NKQY3EerH6ZobXWWjHdZhLqTgb66NPYyxLr1pvMofUPS79Hegv8eZ8Gfq43bjLQA6RM5vy1H6xKCH1SV1HTZtJz",
  "key10": "4r8YqftmZbBaWReS8hR8G9URafdimibASzuwpMbJj8yJG1mNC8Ji7XujbkazNDt5YzcWKntgrds88rKMSrxwcWAk",
  "key11": "5LJzz6o2cwjtC46kerWfETGJVDqh66TCbQnwv21JqoZ3yMz8UbMtVAn8k8vWyfBnnhesa6krKZrvgAUQSu7wvyFZ",
  "key12": "5LomHbHkVDXd8VYYYB4KKHxLPwrvW8DaB6GC11T9vdcCgBwuwgpPWasg26w3Cubi4Movjdfp5eeVaACKufTYfVk1",
  "key13": "4dso4iTN1KULSDSP3TkdQNRiZAdFhKnyt7Wi2hJbjGsM7MmHcXvZ9t89LWi5H751wCSb8FETHc7v1h4pFpx3RDqT",
  "key14": "2QqhCzaPBo74fNgP4v7z65Vr1wrQihmghJFoM5Lbgq5H3fLwVHrr5ZT9mjBoNEZFWajkyJUdTGJ6uw8ofoCxr2Tk",
  "key15": "37D24FoCfKqqXoCPwarPDkn2fu93Poo7Mke8PyGdmLygRVTL29kSUTyucfkH21vLkUPEC22fpiZYSBwdpRkHE44i",
  "key16": "3YAJhovxRCpTKsrDhdtwbEXoUoug5DUxtNs6URV1DTDBTLTu67bnp1r4gvAbtvnDfMkchxsX12kYneLPkJLUjpxP",
  "key17": "3A7E5MszJeLwmF8QFde5YC11iE1Zbbzc6DHG9dGYmxmmyMuuhsFVbCNi9U98KWbk1q99GapH2JCmXjLh5gSxKPUY",
  "key18": "S1zbF4ympS516f4C1QzezbRh6zJusiitkSgbmxMdrUFd93Y2avM1974MNotSZkCGwVygWT7tBBwrTz9C5YqegMz",
  "key19": "4yFp5SA68F5BMCs4odVnrVpturhkjqwpVKPh3EwQJ2Sf1KdTB35VVgP3RnnEi2mMKDGBWWCPrrGp9SS7hrVMGRBG",
  "key20": "HMtgh7h5bUwPYs9nRGR2LsfBjLSR2LguCAqqqWtMTZcbXuN9gKrB8NLn7sMDPnWerzfaX5zLrm5XW99xjM8CZhQ",
  "key21": "u1x8z6g48zrvf4zbvT7fqWE8Tunqbwq8CK73urPtU9Ry5ALCjyKeyzepwjo9GxNzo61aJb5qiVyW5d8oNmKusTJ",
  "key22": "2dTKpZuNJjQuTLx585qiVjjipXQENaTD8xN9KUGMGUjcmTScGbHcFe5c7KR6EYWLmdgLNDHy7UD5cCyYqqy85tLH",
  "key23": "DguTfKk7G46XoroNwFJXrbY8m4TtgZXruKHXgJXhtNv2LU7i5aUfKXnxriMcwJF7NRw8UdJHybSuT9Y24yH6SKM",
  "key24": "Zd5c1FDYXu91VzZmpJHareCWJnd8kKhpQYnyvCRPXbcFAmc86y7EcEUY8ePRNVpR6HZZCjWUmH1F9qm8kmXLJNx",
  "key25": "5iU16uUG4Fa7RApw1r39j4YBgGBovyKMkV4VzV6aWEX5jghmvYb6uQ5eze9AuzjEmfi53s1FgQ8A7NBFdN46h9Zt",
  "key26": "23Xa3jt3co1RV2A9XgV268gQjJdYWSZ56mPQgu3y1wspEmnCwHBcqbYMpciwh4wqwjNAerMPmsERauAEdztUsRXU",
  "key27": "4bbmanewJnnsQTHPjwFrcpkxhAmMragJaEvtfd8WYg7Sk9jz7cvD9QsJ924VFjJRCMhFHDMgiLho4X1fBK9nDhxT",
  "key28": "5oKjdKtHqCMs8bap8h7mfxb9yYdbnBmjcesTCuX6t8jyDTepPkESjhmiPTFBf7Y3dnXfLZK19LfEZAem4p1hiEt6"
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
