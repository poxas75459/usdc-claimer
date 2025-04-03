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
    "7qX13Wshceioo43ruvp46zvPoZQ5szC7pxy3b9PuZ86UBhzi9af5UDX7DLKVbXdEM7UENdDyRjStwqeSNwj5Zmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMpkiaDNWV7ckBnbMhrCoJTMLpqpFKKCm3KWCD3HXAfGz6GZoUyKMjkBd4kNSX9JPUXmkvP6tmzDcuCdFxdW9uK",
  "key1": "4WpB3XHo7ZUuH6mSDLufGANKGHYR9EFiCJUfzwwj5bBho9eXmbtKBmjLJG8YFB4MuX7D4TuptZ1nkyf9WLmKM3bh",
  "key2": "FPHnFaGZDH3Y5iWTwy9f9hJ9ZXrB5mFQPZPr5wxwdgXBNxpLZRwjL7zRimsahUVQvv8ib45pWp9xndwqhFmiYWK",
  "key3": "2yzUXVJA71CMzFkaziqSmav8k6GCeXSchmz1d9rGXftG2UuD58WkoaJUwnKKfbSpqdN3yVnTxs5Aw1PmqasJscbS",
  "key4": "3dMaCTn4DBTL9WPfRFU71HN1mQTYcGQKfiSVQbTkNT8XN4cY1sL5HfDHTt4XivVu7BTEVn6NkbKxUXJJGAKr5TUk",
  "key5": "4MPDo5d8AE4FgcLZ17pkU1YYirBeWM28P5Kdhpx8F4iNeWS3JHV4D9zZYcoevYT54hhhvsPQLAqakAvMzkiHnyvZ",
  "key6": "4FjGHYPzCohTRKoXvZuJbAU99r3Zfj7n8irDALDEUY8CFywcLdsofVNF5EkFxfzynsomzF8WHDVqTkUfPCdesxzB",
  "key7": "3rHG4TpmjSf3Z6UkZWAUow8R9r9HNQtFyiurhrUhUdu2Y4oHPLUZjuAGtbvSS27Z8Kr6WEcVRxtHsoAiehy4HtUn",
  "key8": "DtioQzMqYmq2eNEgF8E9t9eupeH5dwiTUR8iP6M6urnDY5Yrp9mfRXo39mk8oNe76QTuobyHZNEQpZqbQARAy9e",
  "key9": "unatBnXua7hamSM7thyyb8AuVi4VyaBuK2xCgHhVwUTgh3WKirgxNSxUSn2PvHCPQ9dpy1ShPS3JFcjLXJ22F9o",
  "key10": "48DgPBjLdYGzc6TDcjQVM8MYosMTuKh3Aezs4bytUCawN51icsFg2GLSJTPjQcNw9N2mZ3WDdV6fk6sxwiiShaLn",
  "key11": "2iKASPAJyTR6rQG1KTy9hh62ScXtmRqRRyrULaJ1G8hjpn2HkkhPEBhkEKQG2Wej9MgAXVdhdjh5byS1UmdGim92",
  "key12": "2WV9RkbmJFcXLDaDVDyDppQJS4ifgcQsBerBsDePnubimWkEgzL2P4EyszeeGC67J2KbG7u15rgkqyxQRmb5y4zc",
  "key13": "FABiwZcdvJFpAJtTFVETfXuKSJ7oKX2945y4hzznJKhuhp7tiAH8bcptqvubqDsRii2fzDQFDVT5pzLRkhxwncu",
  "key14": "3Lih7gvho3Qf3wLThhg1uArRdLc1MwMxnrgdZU2ETPHu9PXhm2wsFtwpG2kgx1Q5ncPA9m3MN8bAq4yQAziDA2W5",
  "key15": "4urA26w8LnsUMQYLTraTczCAnXna1R9PGnTHRC3zt4Y7Xa2iMVXFx8eHmge4rWiEF3UoQ1QYozbNmFRDUMr4fbfc",
  "key16": "2FTFxCVcpevn2eS3Qykt9zsvoMQ6J97idR3PL8ZtTRZheeeRiENr3cgPNHwSBxv9mvEARyrn8ViUPAizwbNexWUw",
  "key17": "5wHwxQbT79N6RpQrNrcf9eXf2VfrzN8Uf2osB5rs1MrmkhgcedxgiC3VeWVABBSQqyNmpjQX9JEH5pWvm4oeLZf7",
  "key18": "5FdSMbkjzxqEVMg2rwRzE1R63YLcemAhsTTbr2yhMpPtmZNXR3V73BZXW2epT7yaRXXiseb7Nu3KtT4pWAoCmDBY",
  "key19": "4ZYKUNHchTMLEAe3YWTvi73pwcMRj7avkc3WVjBaRMxJ9yFnXDHGNdDGuXKjF5kHGqgtDfEa4ZNbpaRevdk7yWPy",
  "key20": "3dch6jtkMEZSSUvKgUV4sQed5aPZXMw3NRcMN4Kfz9JYebYuRZkeAqY82cvfo4hcFGBVR54J89RTLnKpp5rMtwmm",
  "key21": "gZijjioWL5wDPPEfomZmHvcdDVXt9qTJRrjSAypThkZAC5vuPxtpehuozfbjYuTpuEjWLXqJCgBCHr4dewyEKL2",
  "key22": "5Tyj1hCK8pdgkG2rhshjJLCKeaUKu6n2LP1wF6SmDRkJh92eVjwpSodhHuikH1UQYdwxNaYznDm8DR3tPgc4eEeB",
  "key23": "2wELefYvimgL2p7dafD4SFbGHLYVK8SRxmCU571WWZf46Zh3XkYQ3PjPqUNdmHin1Ya9SFdgyf7qnN9wVdrdAwfL",
  "key24": "349JENPJGLLTA1uZyT3gL8cT4ASFQLviHhgkhSWczkYsVQtMMaJDATWaJ5iuU8ZGTgD9hbMDNRVAacsFZqy9PfBi",
  "key25": "FECY9XDhCPpbtHabxVDvRuegmDUDx2tYJnbbuWkjwDJuBFJK1ByG1XCtackiQWz2PrQJPRfzxGFebXxNxJoyXYJ"
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
