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
    "3TXM9CzT7Cp1j4kzrEyyMHePDBBgGrEpHQwHAQDWeLAookSVHJwyaoWdj8J6T4cWTxWZnQ6mmfXwkbAGGMt6VMJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ybb8zDV2co9jPGRKSBfLvAYAUJLaoVR7juKxGDHdpC3hbAFAHoLcVrvj1MF8Z5bNYpPWzZRakPaAYE9r1ZXyEAK",
  "key1": "2ZxUqi2uH82hWEdrp5tRRXQSzsfH2xvEaNNKXRv96Q5hidLFm9Y8sw7hhinceqm7ee1gNfnmGraoLyNFPhLJxV5e",
  "key2": "5vvoFQv5otYgCmtwdLx4SerzoccamjBDx6QcQe7ZU1bkz4mokyJUHn7WEb9rRoEqaZGjwwRf2gRw8yUutHXxDb95",
  "key3": "qeHRqvnDQQSxjfQQPZiJEgH9dsUtb65YhzVsonRYPPg9SRacxL55EUUyhq83eWow6HRrNfP4uxNtMF17chFa2dZ",
  "key4": "5xa3s8hzGU2BnJHdG7YE7vLbFgnyYvgJFi9HXM9xMnfn5YbK28bJiuBZ83t2YdauTutyg84TkV8GWDeo1CLzpm7j",
  "key5": "4aFDmckLEnjersPAv39RhtGUMVFmCq7DjZ1r9ELRn3BowdGfZCh3YncYyijp2ZgW9WTPaqpGW1BafrZF6mKgTqjD",
  "key6": "PXu7xFVa5CWU98ZafhdYeazgtzpJgMx7RkazaSBe4dLiWgRrd8Hz2RSwjTFwa9fXtgc3jU6F82rAzVFmwtvGD7W",
  "key7": "2uNzRfaPuxquWGfcMCHRLmCX8WPtkqNeLMYwsAGAVANnsn3mh8aoBx5nj3xuqtuzfgd7NB6mfg2Azmgpj1jJ6spY",
  "key8": "5FgkpTqG5SHZR2XkyTwn2xfbAPZCS677i1TnZJdYtgwmWzs2LEW8E1sfZPrsxk5NhrSghvgFdBbnsmxmHBKjfZms",
  "key9": "hrZxEksSGu9iEMJ2RS7gBaw9UxF4QKERv6dzzQDf3UpTRqykU1pW6EJWn7L5Q8UGFtKgaDkQrX5fj3xUgQYMg87",
  "key10": "5uSmSkE1YKU3j4hPyRWDoz1tp4qWDS7czJAKpbGV5ZNMsxmSyBsrnz1HSr9gKCMVbMnT6ba67iRqLbDhbCQXyQuZ",
  "key11": "2UTkMR7tUwtRin5Nh4kNzNoiNdLUpF5WRYqXrCFNbbw7VgtNeroSoZwH4qevk1SRZT4mGGtPhTqmd9pfZkA6BhrP",
  "key12": "2TE4MeQ8p5zZVV53iJPvgQC8hsFhpU4m1gkDgrVBSgwokoyo9TrvbD9hYzBmYLUaCfh1wpFG6dQgWBNFN97nVEag",
  "key13": "2Z6BkMRJix7fVtBQ8ZXGLXtGrJzVDHxtBEa7DXKEwLCAkc5372phM7EPFCmWuw2UDaznx2YFGXrCKfqEoNefw1ey",
  "key14": "5PnsmCMFJW7Pahqu1Q3Er9NSzapzuyQft4KsJCsbcw37zHASXSQrDKx7egs2zxoHHaaaNMcn66iMfaWqeac7L9hN",
  "key15": "2Gbf61QwJw9zzKkqBC7XDscdUnoFvi9f5yeBS1bZDLHUr9x61EhzGM27RKJ9LFb2V18aFJ5CNfydXjCZzr2vmqYk",
  "key16": "62J7csNrfP8n3mdq9KdLrojWX8My8frEPqpvqqtEs2wCzy8xqisbHkb7MU9Z5U2VftDDQN5LCqcCLnk5rxzgXB1F",
  "key17": "61sz5EbqMNvHrXX5RyyqdDDXRPttoqMwKjhrAZGEPTy42TN56MgFfMxCwq5CNxTSjNZsr1sPfkvRDEww7jMCX4v6",
  "key18": "2npmBcpP4kvmn9VAaZ6QcrHtte3K3gdCrXRfDm1Tr5M3Gn347jJepdJPJwpYd6FHeL626ZxV58datNUmjz9GR53d",
  "key19": "JUC1rjFbsTrNTHkyoduiY9YUaeDwB1W2vVi7bGTtmWRDn7rosPVX9th8sphwKunhvz7N3PmF4sjY6YgqwWZvjKq",
  "key20": "5jwgSkgRgB3qPrmVKXVuyRVzRGADGvWJJxTM5EKE22G8GRWyi3MCBNmwbfc9Jou91CVKmJR3Cf6rfUkVpKTfbuxw",
  "key21": "4Awxzg8m7PpVT7ERaPkaaEe4DfWNfXUXSJm16DrLzidpWL5c9E4o9ptmKAYJ68mpJViaaa4GBpMh943DoRWAg67g",
  "key22": "2EULVbxdvaRyJEmDTmLmB4Uv9sioFRxFy58Tj7tWcBDHtbCxjiqbqPagPsL5juykAYd8KhsYV89JQ1ssaztUuu6b",
  "key23": "27tbnpceW4sagFQ4pkSuBF8Qby8VsE2X928gpXAuPbuD7HaGNzMjqX3GzT4Zt6Cg1xzLCs7r971QP2b9herrBqVA",
  "key24": "5jMCMgkgotAcC5xun6WbYoBDDwh9oKogiS9QZAJVLQW2CrKkHt6nFkzKskSfMtdgji2PpVzUuHSR99VRk5qk6EDs",
  "key25": "28rYGcgq9ze26QQc1y6JERJS6EceDQ32bVq844YtGEfaY1BLDutVzVgfiGh59ZsyPfh7AEh23s9y8Zzsr3MmNUwq",
  "key26": "4qvf6iErFdoRrYj22UfXgciAA6kmkiMYFSzbbL7encU9vginfZsu3A9gqB3EckpYbz6i7p6Rcd4TGmozXnCeqnxk",
  "key27": "2wRCWK42L1c8RY4pqFZ5XB8norciKAXs1D7FQbnw6ju4bnNsKubQCL9B6hcMGL46jik192eHfVpnmXoKXmEXPKiW"
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
