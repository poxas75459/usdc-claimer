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
    "41uLZ4ZgjhpmNxLUwY9VKmCRdhQ7CDkfm1yWiTVCeoFCPwMaCUTBCrBj7c4anmmJEa73ALFyjA58zuUvA3abVMgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9YKx6MY2QoryKweHHdXPf9dNg4iBXiUUu8MSf1S4FRKfMabDRovxrs3gHPeVRDv7V4syVFXuvnvJFaADzUNJni",
  "key1": "5pHhfk2gq7zdf3oMrpmMNEdxJ4bvPttTUmEareta1PQDtwfCynJYrbTYGK8HhvsvUB5jJFwgixTtcrQVWN6R4kvv",
  "key2": "9W6hDFoYpmQJ6LG9wsUaSDuMA2LdCnduUwZwvkS6aqxVghZ7DuGsc6PswiUcMerWZjQCh9MKbQgoNwtGKatCrfb",
  "key3": "54CwpPh3WgSXhKtWDVRWGk1vpUuaSvAburKhZ5W61dZ8h3JjAFtxmfb1Eu1V9WoUmKmm82dnv41reP8JsncvPcTk",
  "key4": "55mLzgq2XPeUWfJj6smq1QVKxmma2Tiv9eycz3Tck4VmujkHPtv2AQRdHrcW3kDCym4ifRLhg92wJmAMvtcwoWyy",
  "key5": "8h6tbpR8weyAMBRchL1Z24b3so68UfbFMhpPMpf91QpTj8J3tWP4bw9Ap9186cigiBnKQEsWEErmJdyfNJea7U4",
  "key6": "2D4TR9W5KXD1bqXrAkN77HHwhGyFPEJCsAY8DxrSE6QocyHpxo2it11vKhNAu2E4sERZxcKJrAsZxzESfsBwN4E1",
  "key7": "3tVbzN8RvtyC4KaLP7q6PA32rCgqdwLUpG6J5tU5SmzVksixABcpHToKWCFT5taugvgrNQQWrW3sjm7PhHQNq6Fz",
  "key8": "4g8zYGH1vxTqtaRWpLraYJGq7AaC7QQLBx7TcRvUN5qnz8kRJvR38K8qqQFAqSHCqdoJA9T417EELfCpPpGc24x9",
  "key9": "4Uo2mre3ETWg87sWvqDXMcwCbM9G16LW4uHpmiBXC87jLtJGuj2hngCJCT7PtxPrdjidLZJhJkymYvAETXzrqhqZ",
  "key10": "2i8gPmmrAPb4DU6z2zewhCH9FaGmw6be6is4AXwB9UeN7XYSeuae1v3KgWB1MHFND3ufiovcTZdgkADPGak9Yaf5",
  "key11": "53c3SePjebULEFXsYSrbTE3gkJAehDSgdoPpysaAR8MFWvRDHrgWj9RwZH1hAQ9HZFMzAsRmUG2UNz7QzHkuCLwP",
  "key12": "3C3PuayD5QdN3dLmEcU3xvHaVf5Lg7xsm9s4tzE7c6mNb2FU3KmzXuqYwau5htpAt98jNUpvuWvL2fpsePvfG8KE",
  "key13": "262NuRBsqT9eezQhxCjJ1NcmBWKKKcQxFPqDpDdcv1mcp6CTKXNj2LeXiq8UCqZHNpgKfXygmuy5C6yfB2MrN9kA",
  "key14": "3nmarx4PXTAujxgJEkH5a35cXcSfVbMz7jbRcxz4qHSshVnxLkYCiJZBvjfgF8vrRaaxWUePns4A3dtjk3Szed4j",
  "key15": "54ZKaYXvJrjJd5SWzYPsquErN6ToBWAeKjQHnSJLUCLFbhH44vZAUbgoPLrprnZe5FoHUMEtYfguhbbg5fLVNZjk",
  "key16": "5kUEvnZrLm4F8AKQH2owNBbHiD5fbo8LR7bqFDdET95Vj2hyJ5J1AStp8odgoMkGb9eB6yWvMHbHQHG5yUxjsbFP",
  "key17": "5JeQdNfVpYK8D6Ct6WGu1Vvzg71253ZVgAdvt5hRJBUzPSViq3PMuQK9TxBAfRPRzmvGADe3qfVTMVzfUBX7hdN4",
  "key18": "2tJHhjHN2cNjktcrhQ63Wi2p4FpcaTSzrb9Nnw7gyDycH5ST1qB1cLCUqUGpzAopNFnmkTBU1aZAAzkgHQCGihqE",
  "key19": "45KzvXMahg7vqFUMFA8gCyamNrS3JqWEduFsxzvLsSdcv4cVVCmnAwevwUwjAr6toAKaoLj4LAQK68tmdQAcfjWj",
  "key20": "4ctMHkw9QRLSjUc59c62EJcj3ZpaCXwUboAxSNsYSy4uzvvw7AbM8fzuaYFokk5x7rqFVjxPYysWdGzCGyRmcUxo",
  "key21": "2GpAPojfaRUNxNAamXRCNuezQCbRxbgGyBd42U4anwGM3tjzGfBPnsYgkZqUzMvNDs7NKFFU3EHtyBzrK9SKBeRw",
  "key22": "2F2sP1Kgr5c17yFm29v7HHn7xBUgvLW7SSd3Cb1CQpoerzY4CBamRS6RghnNT3c8gtXugP3jrNFPvGW6D1EPXZDV",
  "key23": "3mfbcDLeoztMns3FqxUmLQcX6Q3qXaGgjdJstgCj7VLXwDV7TprBgujMEeFZxVARDPsjRhaie2oAKfhX9422vdi2",
  "key24": "4V2qHF7pDoqj76Dg9SqW7xQg1zwEorzpFh7KufA8PhYstdsPQFFv5fqYyUVEmPie6NXErgrxxU4eNqxBi8Zj7eqq",
  "key25": "36WW7ibSAnpyvBd89xJAoMy8F6UzntoCgQREmSgbuwgKJGFiFRjcGcQizonN8KvJHhmuR9p4SKzPAjGFKUR7qSwh",
  "key26": "XBA5WkejYFYUt8eR93AVaAj5UFuMrsvvx7t1XQWyLoyNmsbHUTddktcxgAUHPgbvd3L21B21Aysse7JnxeyjBJV",
  "key27": "2z9PciJMsK1T5p1aAGgQNUfGHY22Ap4sqp2gbVGfpNC8mzm4oK4ZRATdnWziR1rFdV22kABQuPXvfTYXjvpoXkUN"
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
