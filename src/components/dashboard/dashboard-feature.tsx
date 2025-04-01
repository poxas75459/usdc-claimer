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
    "5GtDZGxkdsGebYKVBYKQw2n9VCU3DhghtnzQ9P2sQgKsqUUGxbd6CZmWFBtsxgAnw4P86B4kybbRzJQ53DqAmamd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUdWwQkyPUhYVAHyRtJqHyWw1iqFJ5KeHZLoW5iQ1migeNb4WwwipqHXLnvAxaooe3ciqmNk3Rix5HBA17NNqeH",
  "key1": "6xugou4kH1z91de9RmmJoYJavMfX4sHyhZjJdwRNpkpPfeCgMS36dsxfKHDzLwKXxRPd2ZknKsjbUtatF8gUnPr",
  "key2": "NJwZEk4hMhZaVhCwTZeFNuRNY4qJC619aiJzqsC7QAfbwF5gnJyn8vbbc3n7sMgidtv99C6tYsuMgWx3zvKdR8n",
  "key3": "3Jn32ugvDRBY9g7LJtosChMXZzX5SWMmdcZyNxcShzxgxjvR8GcKQRPwdFyFGPvdyRnMDE27HYDboeVeBp9CeWQb",
  "key4": "5JzhHbmLEDXhA5fsNDVVg54SpiG8w45rrL9RTqNQYRunLLahxxyQjH6nyXRqyUFAhfPoSepkBpBswjy3hfeVHDcS",
  "key5": "44uSWLDhZfxJrF6gJFRFV3ch8cXe1pn3gEizHDACqi2dS6VMz6nrXbHd2YmeJBrh4BpRSntAGvhBvHjcoHpgN2PL",
  "key6": "4qjBbQUA5Rjspt8fv8nJZeMrQYfgrfyLsvpka9zM2WSKe9gs5i8xBfWfT4SRUc4MaajXwn4VGA3mCxtHDKdjdivE",
  "key7": "25ucYuoej5wvk8gDJzCHx94TnLv6cdG1DR23znMu8J1NNioLP1fpaqjVbQUzhk1SKDQMLhvW7diZzBTg59mNXMmD",
  "key8": "2CFeBquJ4FGv9nAR69J7ZnYLuDmWGh7kHipWRG4q4h8egBBTVCFQcogTZ3TT5VHaEzLEv9CgkgLEG4rZ4rPpwVdy",
  "key9": "4DK8BKQ4SZGJdiw3sJ15XTBadvUUb2HxsjDe9SU8QY3jF4j5WzYhxavN9jMJuzTr1WVZUk5GFUnii33ndUxL3tax",
  "key10": "4yPfqu6y8QCswVDXxEZxcnce3QZQMEWDGVcKQDw9CAKJvqAEjzVXxhN4CGqSFPffjKun4SGeKvSmViMuwM3iuc3s",
  "key11": "63mXGWhMzuxVeiDSLsdh2szXhN8q1sqQeVtzrpVbqGnEAuWAxZBcNw6ze4RY16bfDLzzzuYEBTdYuX3MCYeWkvAR",
  "key12": "3FumyJkoKPrb2r7qhG696J2GM3JQmYHR9n1CfUEW7mVGErDmbuANYBSNAEdiw4T64btqvcLLZRDRYyoiip5uw3xS",
  "key13": "ADg2jgSXh2Q2XyMwV18weFBZbxH5um9UwDvQEdwUp5fEz1yEf5qNd6xHwaFZ5wqF5JkWopxyhsVXBdf3rBs4DFz",
  "key14": "4QptjWcHarBbWL9bfn5bn7j2Gj7vB2gh7bKsmKJFyWqvCfwyCHq3eRySTjLxyVDFMFncX1M2pDHgpG1V7w5VGdBP",
  "key15": "64McXEgbLFvoS6Y3LJaogqUu82hDALbK2meWRRxx98q3KiSpGoLqz289TXRVVHijotVNjezui39jjnFm5hNUFDJB",
  "key16": "3aRHAWCDaPiwTzosxaYPZLsf4ReoqwT6xjFu9mZ9hwXM4sPUWT1kmitRLw8VyXNxUUisvRHLgkgtUJ2aYdUNzSuF",
  "key17": "22or8yW7FKt6yAxki8ec7jPy8w8EWeUgaTFg6CJHjeZNbjiQNaZpoKQYBnZg2AYTtAYB9JgBFEdjPVKsHC9N81yQ",
  "key18": "5t1BLoG3UeeMDWd5y6sEuBPTiGEHa5GwF2PV9TqqCW4seT1XhZsSHt3oJYzDU3NsUXTCpnyeTCo8rcrFY74JST4S",
  "key19": "jTghW2E4NBD2s4Jftgg5HgxEoXHY3jHbZYxLDCiLvrvDU6rAXqAXo4D2AvwfXgPC1iMzdakAzGvnD88XUvuhE7D",
  "key20": "2cc8eKfi9wAPA2df9ti5gsheY9DxmaSgcGTeEPz9rnhFKqxXYN8FAJtZFRUh9mkaHvm3cjEsUGLoRzxt6g6Prsp6",
  "key21": "2oNLqyhNWM6SxNoXWWBjY8uJCdzAx8EkYNeNoNbvftcUoqbGeJPL6QpDLgzESfdyB7SZvjN1qRjdu6nYCyohT1q6",
  "key22": "4v7WjyyYzgvVco22tyPuf6dzYaFN9gM5PDn8944R597SeJozW9Qg6VaB4X7d96oTk18gtWcNhbzpRjq83CHvQLWR",
  "key23": "5ZPdk1cfdcMgRFRVqh9kKZiQmtvyUmKaW5NEwJnqSuXkJp3PmokTmYi1uuYMWmCPZXRswrNVwwZHkDXe7S4S5PAM",
  "key24": "SFLufQprDoKeRtqgAvSqaZyaTUSKbhnEWUZHY6LYnUwDzc6sSd9v46ZomUrmQJfxykh4MMUtjuNFuK58JnqRu1i",
  "key25": "sV9h5Nn3zAuZvNjGTQGrtCEcRfMMXjBcLyPweauyWQFy9Xc5h3eDwt94pAgW56GVvTU8sesGP6DF22Ce7PiNKJx",
  "key26": "4qruBDUFw13x12RWipGhcyngvmM6rawt3WDz7giXLvBCBgqEumAGckMQabM45G443rpKUz7Zu2xSPkx9QYiFSjeq",
  "key27": "4ApGkvX25v2B8G5AShG4Xz3UDS6qBkbEF1HeSZcopgFsrq6Gd7378PZVkg8FCtntvRG5uPRHkSFPHQ72BVDzDTFe",
  "key28": "49WnkRNTKv1pknahTtVZbCQ7Dayy7y7uPXyQsLt7dKac11AsEdYN9fCPQKiMUgBLbL4QRfyAF6rqt16psjNSAJ7J",
  "key29": "2LrfLUEdN8E8eogKKYgxZW6ShPbKNybaxxxamQCFzhyV4iC8AiJqBrkURAMedmZWMj47jo2GaPEfwe1JX9Z29uJS",
  "key30": "D1uBN2tbeTpS1EjNikkmPxwSWmTQ2QmExQ3yWb8c3i4Waq9B5LkMNpYMyUDonX6esRfDVsH3ThfprVezUfsXt5Z",
  "key31": "5QWanSLKS3fVSsShyfAuyN5eLU2BXx5WjZU6cUmBwbxVzUAczVN5WzDSDMXaKfajsE3xeKs7m1VZHzAVRchEwftw",
  "key32": "L8EaUSXUbRrtdCpokQoXciCV5gmVtiP6qtsCVRQLGVv3ExQ59n6SHBdMHcgz8qnJeu2Gs5Pif85xqgf9sgTPnhP",
  "key33": "2VC2jG6j5NWfor4Qp6qGxBS5pzi3zWtL7TvUEKmMEtCW5iBhT6Mc8MPpvT6sia9SpV3Q6ii5tF79EaDndo5S5poQ",
  "key34": "5bNPMCgvPE71ZkYBNJ99HjYr2CVJjkgvHjvHUw3bXyorugrCnZpsQ9zALUYsoaXgUVQcXXC922gtRSQhsikJ2wCH",
  "key35": "4UR8D24kY6Bx2PXqJGXLSrxu6hKZpdXgwMKtceQKwW7c2fAw6cJWs333adPmV14ponc5cGpLHfaCXJdSGVNdyBSD",
  "key36": "2JF6iui7qdJm6VWEM8oVzuATzpPG1g35Jdyyw995kgjhYWYJbaqgHSVU45XtkYaZVpPB1QqFV7dPAy5GcwmRBLCd",
  "key37": "v63juMYC82HXrSe6UxUvRsAigV7kwoqZd8wZQCbmAfSHsdsucS2u2gLUT6X2UV1c4M2T2vunpNQRfA9HHorF83L",
  "key38": "52gKqh2fpydiF1csZTBSvznwp5va7oZETM44P7tNstdSFWuSwDEouZSqakFjbERob39K3e5Pumw5hgWNcpmsXD2p",
  "key39": "27zsad1wBqjRdZuxRKV6x88KchPWDy3vmoejsuzmgojqcQwAjH9isiUve1uffaiNEWi1bpu6ktzAFe7A7ftU1kpc",
  "key40": "8KaG3nd9b6UnrZSqiGMkTBhaFix4ZfgEFGJM7YAMjLJQzZJajX62yNvfk1wU6R92NufdGiwXtUJ2aQGz16qorev"
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
