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
    "p7fDKNx8KdVfMMgbUa8YTMhyUauS8NnUd1cKNpGp36LeLeDfCuvtzVThZhimv1EZqTWwEFyM7Kqcp9E7KGnPtMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwDpJjmCn8RjW9a3vYUFk8C8pv8raPfqQdKhL1c2WafFd6ttNiVmJ7k78z3ChDPSx6DmgKuyuVE3DLTKV4DPwmx",
  "key1": "2ryJ1YCPcsCTtvfUEm1VburQrBohhJGLe7GHayrFdysVz5d3TVgn8g7PxCcfSD88C18spEUXbXTS6WbNU7aeEWU8",
  "key2": "4zDKsHSYS3LjW2ZqQe6bmEGToeQMKLQ3ztVatssoAG5P2jZQRXzMneoWSLiPm9d1Taze2fmL3nN8os9LxMpgQjDd",
  "key3": "2i9tGdUCkjPfv751WsCHZwf9h9yP9tNarFLjCaaDYg2YbpW35jzDjKPgE85nFSs2iKHVediEvKzmx5AAbrD8LX6y",
  "key4": "2RM8dro5veP7sAEnaH3UbFmkmCeGeUqc9Xtc6si3yPBW7HbydKE5jXT6tJFkSx4cyAmTjjn7hBq7skua5c5VbG1e",
  "key5": "WbgqciP3uRQFe7SgyFy3Fsdrqemao4NqYaNESVa6bJD5BT34aPiVMYvh6GAxovB96zreX5jsbV12vU2gEC9tnfd",
  "key6": "5sqvcx4gbN5gN7NemottbG67gtFx5nBLBZQtqhkT2CCPT1mKRgZZWJWVjhQwGhBGomMV7gMXuNCtnWy3Gw8mTk9D",
  "key7": "4CV5zSLFAKB6bTU54B98yY7QjdxfVVWhWEBYNieE2E78isJGzLFpR5kFs2ii6Vdegna94h9b1C5zeHXvbXtt5UC8",
  "key8": "57xvegZ2QkhT6FfEgSFXi3MabMacSeZoJ9xhxmaP2uoLPohkVbNMMCXseSQvnRcUpCS5NYJrX8n7hK5WCcgqT8ea",
  "key9": "5FBt2vxhVrkiHtdD6qEUhjk338fkNxJGkW33mssbEY5yLGj9xbUNjvD3cpRkbXZseCMF5ykz8HS4ncyDC2vomsxW",
  "key10": "cNnxHaSfEFPk2kNn57ysLapGSeurnwD3WfP3qMrkPXVXqybPD7C29qnbgNnjDNEJa1gDNpA89dxo7LGftfizj87",
  "key11": "65EXGBb1XkDMLrdfuunpjWL9iitSJWTP947bqXaZUd3o4iABamDH5mgqJNeQ8nUh2d52s3crMvsLXNJf1pqykRoH",
  "key12": "4qkXZhTDuuGJWTN7QHEDg31p7MYMAQN78R1auzL4EFwySn5CcwX27xffvngBmqfvwkxTgvimniMsMGLjLkm6opui",
  "key13": "NvPmxhwsTzMXsF54APXy9Tt2xHWrRXKnDzCFqwnxYKci5vURKbWsMSJ6H17eeE4XugrHC2qunN8pzgXXTpoGwCE",
  "key14": "4MTJ5PsNnZkbiJzPZx5vS66PjSbBCNsLfsM7EZkciUUv9XDkWvNRRqcLuSzQTE5uSsXRGg8RFhXMG7h8TBFnuZ9c",
  "key15": "65La8oNfihoZ4HLRiYKUWZVHX8BktX2g6cQXub3TjvC8GR5S35ooqRywTxoyYTFkToVdwhqkUdmjrLxFb2f4AEjX",
  "key16": "2XrJtmRsL6JCy5vhqYKUu3sbBcYHuc4psVKamdtnm52WizSMqhfcL3hmmCZrnt9M3mvuNR5HWzTWsuWAiWDoYsYh",
  "key17": "2uqZz2wmZXUn39PTLFFjS34xdHGxCNtMbtMASK2XLjinmz79TvxutC9r852ZrsygExxxNwqq1z8gjWUqPs5dGwxV",
  "key18": "3Rks8NYEXNLDzXyLJ5r8opDXpzk435DUQbaLZy2K5kwsrDacXa6bJJqFgBwiT6D6Y7rk2U3wLGQp6dqhLA3ZsKEW",
  "key19": "65cPhQcuNuPAffKRydt6xUDdpLtSpPhW1FhqH5dScgPVyCUX7mfQbnJNc3s5vCfmPKQm8VyvvSQsGvLFnWXQJGpN",
  "key20": "5dxJBnq7JtuLcucAtWPsJ1BqUanNeht75JmF6ErqXvKBWT6nFgm8MSEHgqxxNYMrzRyZFA32P26W1LxujWgB6VoF",
  "key21": "4ZC7JWw6x3KAbECz2FGxNokP1y7vDx1tSfAjhp5eJUFL7UqDMM7ZhSBgsehye3UKQL7swx9eqAVCHxms8g2WsTgy",
  "key22": "2xe637spiVFNa2LKAwQ3Tk48v6TGjjviykLfrHSZ91a2PqxUA55dhpFA85Gxy5k49iBCnNWhbEAwxHkCVTDpJayY",
  "key23": "4e17WgsAxWP5jLVq3iEP6bpnHFkzNiLobsQoRVCWTwsYkSB3g5dbE6s7jH5XHVyvoiUydcNcGPN9kWjc9XUXwTGX",
  "key24": "3DEpmoVvC7A3tyMwAqhAuiR2ktAihVP92GEqMAz3JEDLXHmMpq9JrddnKcEX6hd2SrapQ8y45L8rA6zEbKWcRBPY",
  "key25": "5VE7e9GDpcfddThhRiJQRDvYRygHFAMBHeMgwbwKc4kDW8yoRACebv1gRv7XtVeZkXzcTeZ2YfTYbv2YYZfnb5YH",
  "key26": "hFj5nAkKvwexi4avnNxEHZ37yPLT7Cqfu3C2ruGiyCwNA977ApiN8SNAPwQNgmARxbhe7MQ8aSqdG36nsyGiQoH",
  "key27": "3FGPrJmDPiJGmpW85DTfHrBmJxM6b8x9kLCXQJEP6mMoAmKY32h88TegJbeztPFo3LTctGosZAW6kTvoithtvHkg",
  "key28": "234PnwcFNjfnG5uG3emtjt4wcqLSsRbdWViysnaQAMpFo2e9EDqvq1CSKr8atTvpFMJSwcTgogUKHbkrcJ8TRTDP",
  "key29": "2YvqqZK9LUVENMB4bgdiLaGbVjEzT7wUdGZxCizL2g8WmUrjencCmieKtPdwNvXiEPaMCKBVtkbhqWNqoQEW6F6r",
  "key30": "4C5TGfkaxNxGQJdNefHpxNUbNTWV6dtfHP7cb4hED7RLShgBrSJMdpWc6g1LBxbSGHguZTfdrn51aFpnTWvhM7tR",
  "key31": "5pwJZbKy8TAoBgg8vocGi8pmgf7orUFZUdgWuqFWj7PehsCTnV9uyPRzRwLsmHPcTMRrrYH1pFRU8f58wZvooaZD",
  "key32": "3v3qQctEiZ8YrYJg1twp9mp45kFGB58Ng8C4yRseZx6KLRGXoV7yKxX79acd4wDr84xGEaBPcVes876DxBmd4dRh",
  "key33": "5ueBzqcQwteXZD1V6KBgZTkXteREUpg5mgGe7KG3uWuxjV1uuQtsnctp99stWkGKUqXnWjx6u9nvxyXu9M3E4k85",
  "key34": "j8xPKA52oDzTeZLurD2pJXD3aFCZM9hhyrxKZvGBrrJvPcPxigvsie5afvJojY3FNTDwHZakvDEgDiQuEJUANNa",
  "key35": "2kMKW7xpsjPpLimZeV7vDnYaNmk9Csyyj7yCPCCWcPxv2MhEtNK77VntkmJsd9qerw3XBybPGVqn5zmfrQLb99JB",
  "key36": "hmLcrYipCYATZHjW9W95e9pyo57iv7RNNQ1NrNYbnTCJUJw17pDQG9iHCuBrSL9AobzqZKC7VDrv2Z2V4uBZzVv",
  "key37": "3APoBqrNEY8jkPDVSBd1r2V5vyZxvGumCHiwDfEEEHPBKHdxfx93dCAr1M1p7YwSH3S9wdUq2657giaJzUwS7c63",
  "key38": "5N55gsc2Q7ikzoDz5CU8Qac2AhvX3rj76TpfvyJe8d3rUc1TCPEy12nPZAKPsqkJQnrAaFXp5HK1DAJ8Y1QRpYo4"
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
