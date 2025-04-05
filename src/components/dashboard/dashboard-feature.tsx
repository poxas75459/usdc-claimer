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
    "5Yr1U4z8g8vXxP9haArq7A7W1C4BiTKp5qRHsVV565FRXSYLJWjLU4G8XS5nkygLHZyYEG3RHPY8sNQej52v2Jfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f61BKvAnCGYMEkguGPDEbwinnNfsLfGxsgfHk547FhXGpmfWxDpj2o4PVXCccWVeE51z9dcrVpAMrfyMjiMN1es",
  "key1": "MkNvhZQTHzjjRkkEvspJfyZt8M3eMPbDNwDTGHQT5HTvhQtfVGnMjQAog3V8ggEA8FVdBkHqCRkmhpaCkxAzgiK",
  "key2": "5jHsJ2Y1khxY3GPd7hctVJxt36hRbDvM36nDYX7vuFEsz6vMxAXMg2nyCzJjQsJMwgMWS6yfuyADKXaxPxwvCMuk",
  "key3": "2CJXQyMDhS8M9LaGoo94SgT8m5ghhnBfkA6nND6CKHw5C9abChj75CBikecTqGANMmePrYMGAf6JiYMFtBfJPc5D",
  "key4": "4g9dcdFXZTWFGuy3mdxsUsS2bFAWAPahxCkVgZrDehTC31kqbPEQ3HedXkUBTZMPMJ2gLrD2J6uAFoPeq9x13DQZ",
  "key5": "4qpchnCJja8822VZWcTkUqGHJotxRig8UX58bJcfKozCYazoFGHfwwj7DZETqEQygY5hf15XN3qitGPgBGvq8Jeu",
  "key6": "3qc6prVofwLXuvK3MTqH8dAJuHsciVnuV9GTtZwpMFH5WRafDJ66MjzEtFwSLMLvoJzmAzLwPqF73DpHh5Kiw67L",
  "key7": "44Anx51hx1qRaZxcojveCFDMTCDZko47Y6W7usYJ53EJQBCb1BuaxMNXVijGNKYLb8NacSaK2QMtXZFxEB2wkPAe",
  "key8": "3BACr6BTbcDbzASipf7UPPnF54hh5FDzqTwF9sf1p7xbKRAez4PxKRzwYvaG1HB5RCQi9NgdcraWn8oTeF7eHdpH",
  "key9": "3UeeLYz8xsfryk9AzMvBHR8RPdgu9HWyYYXJNoLXBox92BGxB3VTuVuu6EigJDeEAP4tW6KxCak7BNmutLZwHhrk",
  "key10": "2MM2NQEbF228CwUhgcbYtFe1fd4N6SdQQa2YTwiQSYJdds9o2PCSwBLCXRooPcQcPfJRLFpYuNpzaahHyaLwzVcj",
  "key11": "TP8Y45EFtd7fCCYbAKSrndpSfSmG7RxdMTTXRYqzx9fd228XBDFzNs9DbLRCXML4uQbMqaRHTTYkeLEV9wvjQUd",
  "key12": "2wEugTWZPyDg34PdbxzVC4hgb6Az7FvsfozsKx7rHHRk3Eqa9BThhQEUrbitZ1pwMnJuC7U6B9LnMCMWLksFv15D",
  "key13": "2F24cKgWeZi9QkS1ARQKuMk7FsWgo7E5YB8LJMpdrEuFKw4JbgaJmdaS6CERJKh9uUfjvPK8ySrXUnNCdk76qn9x",
  "key14": "5NjVJhYULaNxotB3tRDSu17g7TYsim2BJZL89yMrg7pHVj146aaqyKKnfyzvXdoaXwDL58vYfJ9sXJyrTvFoPtvD",
  "key15": "44yWtaC1jtw8rmTZYgPu5cZguKpLPWwhPFbYic8Sy9aHHAXLk9H5VS2Dvn4cE8pCwcxENHj6ZE2PeD33WPcDxj8b",
  "key16": "YsEtZ9eADPJW7aLxAiPaKGjj4AX8fQmXf3mdfZCLodSiZA6HvMs2anPN9jFTn3Hb6kvFf4LmdkQJfvf3Zn6BNTW",
  "key17": "4chMHvwYF1s9MdfykKLW3NUFLKYzGLYYUNeoNcWntBVFad2GYRML72cZ6e7rR7WNAAKb2MWQRAETFPZnnEeQbZ5T",
  "key18": "4rkm2Bc1ENyg18dCKBN6zWmWoTKpJSAjvXFhKmQSpmqaMNa4gJZ7Tc51r31zmiVq9v7fxmY5VsNS5UFDjqACywmY",
  "key19": "3HUD2uC41r1nPNzwx6E4NFQfg4V5jSH8jHceoMbj6JGbiSmZug4yNibzkq2N996EaZ8GH4iydAEpAkarcfzV5yKR",
  "key20": "2mNtdvnv95TdM2u1eX1bmWgKBZxiSnnWbVDc9UE7uma1HJmsdkQTsXNmn2i9ePQoTqKzDM17pTQHzytnsnBUt49r",
  "key21": "rrGhprtS9ChzMAsorF7NuYaDxrE4UHZTiWDBJurGNsA1cvnuansnii6MaFoUZ7T6iunJmmh6N9C63bvm3rr3BHd",
  "key22": "3Tkyhh8S4KH27ecWrVwfuU9EtjLdoMagEaQ9SbT3iRxT4iEuDUTLa54wofrq6SSdknWMGmHJ571kzXjEFViewDsq",
  "key23": "5oyGPdEMRY1smFarrzpqUTr9PAHNsYjww3oAp62MMxkX7Ctyt1RrTDz3g4mEbAtwfwxP2yzpY2fiz6SZ5Rtjr4up",
  "key24": "3hp6HgFtHTejjwfbPzhmjaR2ZBGYPvrHqQXbqhmxsXEJ4a2K2V9PHuKHXBgsbHrCnooPbaC8VjLBEYGSvnpZhYYA",
  "key25": "55etsUyJLPYKkFcYsG2kpKPVhWK6DzffQWG3Jt2N38yKYkqQRjA5XfJwnbaFgmzahnrujD7wdjRScFk6qPEdihHa",
  "key26": "4NeP545U5ZojSKrCToZMXfTd9fD5MBSi2dn51SovN4FHWpgYL91GrtGGy9fm9hEgXiBHR4X7bZP89Vty7dP3pCTB",
  "key27": "vSRRc8YpxdiRgTXzDdNtEeVVYuMAhMjM4QStaWVzWr3whecb9Jk2gFL7J5KEG7zWz8mHohcbzZzS8criUqY7h9F",
  "key28": "57XS4pndche2pqyV4AUUF1DNh4h1RYBBcgBrS8UBJTxyRPevVQRLDLCRBfokqyjwQC5WE4NctnVHZRgA93YtsBTe",
  "key29": "4PGzxcJZ9TEuDyjZUKyyqCHwaqag2skvtaqq3FAXW459XZLYhmGgPT5BT1jTqot6BFxk1WjEHRd5dsXW7HXWtaWa",
  "key30": "4YeP9S1CcfcKg59BwPgakfnhoKVgkdkij4Co6wtTS1S2gVh8zh3WohECQkBV2zYXnZLJKt2znePZiQbyRTCjZMZ5",
  "key31": "41zBWjDvY1ybPeQj5KJi5SwZdApnb7mv7UogJJ7dvZVzwQGdYhigC99rKPyK5F6cQhRWTVvA49fVeUcJqsx4LdcK",
  "key32": "5vQBfyPoQGH6sn2CdmfrFRwZuyrB121Ahr9XkXjQnEMRhQWsPhRRpiNjgpohNaECqEdxG2QADHxfWWsfngAgf1jm",
  "key33": "5dyMrNfGyhd4kDo36oECcVLfCVhqTo1qrV6VKoNfjfgeJ6VseGno3gWLQFowwy2RXCazvrn9ATSWqsfw81KCzTfB",
  "key34": "63xBpcF4q3xeLQrz482PR9FhrAr6ZwHPC3qtRYtZFtXjQdehqkgkDvr4ZM9GWQ63kN3NomTPuiXWaPX5faYVnsSg",
  "key35": "2wH55BQdZYxiMCTEv1ZSB99jM9STRnkdiEXS41bXfNjwBZrMwJ9TUtVVHAXzTU74EpuFFZ3VKzmyTuq4Awi4VNrj",
  "key36": "4tjowmJeKkAhJVBC1oR2hXrGB3nkjDNz8rEqpMw73GttoG3ABy2yqoGkmBVd4TvstFkzCUEZByHM8DQbRNxuG9vb",
  "key37": "5i3oMKSP9Q5PppKe3rcoiPFiUvn3RZQd6tYtMbqaTnKqYVDDoWuc4bUTR846Sq1wrY2ESPbe4XXxYPJWPnW4EQyg",
  "key38": "5oCSxWeFRy6MurtLAUVDcvhim5XLSuLLc7cYTnD4qCQLrTuhHdg9Dj7ADRyRVVLdZT5KGFBB7AjMMwmJEdhCerku"
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
