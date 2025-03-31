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
    "33MLuft4npvFB51EqspYnrqyWfGMrAMYppN1dRVCBdWyT2iwQ9HwvpTBwkHgeDzdpKn22XpUGqrx1XnEmJsUJGX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTCsLJhgGJ2aJHMzvDhS3D7AM15MRGgGbdRrc396jBnEDTvzsk2e3h1uDycoFV1UNVJcxwDtEW2uStmwBoBvu2V",
  "key1": "4KWH5snzRCdH3mF9UiEwT6LR1obCfs7o4b2eZvQ62VujWWQexrqweknu7YwgZF2CHDPmk1ZYkLTfTdaPANK7ab8R",
  "key2": "2ToEgkWGiGCgm8ZyZFwLCApMY5GoCvYxEUoxY1eaP9Dx3mNvbinyaeTCBiYnxGBnF4GKP2PFAQLFKpqn5pvv8F5T",
  "key3": "3REVsU2Gf9WuZnvP7PWePGBeux639eG31DyroyCeRJah6Yk8oMjDM8tzGKCUREykQNJNzPsJJVpw5CjhJKYjJ31P",
  "key4": "3xeFi9AM5JkaBn5TLZ3xGxEcqAAaTDqSbH7wfUnq55sG8fDZXM8vZrxodEdoSQ3oc163iSf6P72E5WJvsc9d7dkZ",
  "key5": "52ddiRvNsfXZNyyUsWo2pB9LU4iVpARnRMfskXoNaWbFHqt8k1axKqjFtPbp65vDZ3S1TiXVKckoojxuTntiN6Js",
  "key6": "3EiPXSBuDssm4dcMnFeoUafiFHhxS9Y4Aij9Fyim2ewMhxvo7z475Hi6YX6pdazP2eGS9uxiPvoyx9oT7nEZrqBt",
  "key7": "4iBvfoJMs6bbqFBBnafCHqEu3yb6FQB2sd2gHt3W21YjgS9x5MtDSdVLesuH6ViPTF4d9rEPskgsk2JxBQ5ESfGJ",
  "key8": "5gBfmNxdXk7N6MfX6RAxU4yog9yBoF4VMHYXcDSQS3pFfQapHSpbMaAc4XVwpVeMYgV4LysRSm6guqqWjZziG9NY",
  "key9": "5gJXJuBF7NkP3t1mgdadi8d9cC3vVeAqhCoHhegyL7bGgLSHVZxLna1bMEhdpZv2ABpHUskEQTgwwZY5nxRiPeM9",
  "key10": "MoKcFVnRq1uRSax4d7t2Vy6svLWutY9BMDiBPn3WpcoN8rAEvv1Hy8RjUYuAfArtnwD8X1G7JPSNk9zSTbfcepz",
  "key11": "44P3niN5yTpkdEDSaFueCksyiirNx6KADxRpAhvYZDGM71thg2N8t6QwPyqRxTscdryEyTn6FUfazs3EuxQVUC3J",
  "key12": "iX7K1ZV8iu5ePLuWUK1hgJ5ipvo8ovbxaSzKrjdbiwDKrk54dTu1n42k6b4cJhFPaMVHgZkGnMesrjiNRExhoKn",
  "key13": "66kLBXifvM3TDL96pu9QSwahuza5uhRdaBm1EK7vr7NFfVmSf1rodGnBeY3zDU6UHcWXQe3QKvx2q3uvTe3EBfDB",
  "key14": "r5dkw8LGc5r2b8HaN78YeMnYPdr5NA2YENzNZTvCVpJFicvuDyBtaGAPc3FgnbFw7k7tWK1mB6DrFgYADivcBKB",
  "key15": "2KkjgNnQ8AabDgVRokKLTKr8Sjjyf6MFL9gzC7v7qi2RaXFW1fTbqTGLSWKKN4MvWz9T4z2vNch8znqXQmrYUjq3",
  "key16": "48WGBv4DEp2gehyEFJnEKo6UPvC5inANijT8nmpSubiSFVHro8CcrAKqf21eakaebfB75YwSLp3Dz2RLdxU6oFKf",
  "key17": "2LtHP9kc1FEN9sbxpdb8kTD8ySfEtmYZU1t8aG9phqmvyT6zTxvMrP4Rqmzzx986VyXPn1Qh3w66xtAM6DM926S5",
  "key18": "5eZtUmp7rpuEdSbhPbbwFk63vgt5Dh54utXLu3vHjC7bouvPNQGyCh2xZb1R6oijoVWXM3jBd64L2RrPL7zCL8hd",
  "key19": "4Zwq4CEULAryEj5RMtnZLDiFEr3sLP8Kf7WG4PxsrY5i9ykTaPhUfvxSKpRkKbUFYSxSfnVqf8tEwuawhfQNVaQf",
  "key20": "3zoLSAn4f3pGZCCKxYBGbJL8ajNL32AKenWpvnV5kjjRaLPdCWJzwjAoBP9TYSBcrw1w9b4NVdLUBMiRsT5jdXWP",
  "key21": "pQ2oiHDqi1zHeHVA1tkXoYm3GnTCANZ3iHKK9SgANURHKaRxBZZ5NziF6gGMRAKa7KnKkYc3aCKMfZ7Z3rkdbZT",
  "key22": "3xkSBUbh8vB9fN7igx6Yz52ZPvXWLaT7eFvqeMevMQUG5MxtYQ8MYhKJLWpYuLK481oFtiBXBEx3AbQJqU3dvo8s",
  "key23": "4n1u3GQQh1ZcYdLjv6wJBaTrApxrEhcbDDrjQ5SAN4H8cjeyJaxBXrfLYDC4oJFPmjkvrRwSE9c2TsNdYSndEyLT",
  "key24": "gbRuDTcDwJi7yasG8q1nAgM5fN45EPZpw8oJ1wKayss1XxwDVYveYrx17v6LNP8cB6bK5BUV98RPTaQVNjaXTQf",
  "key25": "5ViQh6GC2B9i1UijhTbWRJA6P9RTd9evf8rDp5UzwKxWJeGd5xnhSxJExdKycyE8UU1b2M2vgx95hnMwGhi5pYuX",
  "key26": "4kRnmWdRR4JZqVM3hr3cDDcEECTMphVkpDaH3apAbaxCRAWfEZm8AhrLuwC8J9z7cDyhZrKcDtGEqHE8vPceeQp9",
  "key27": "31Y8ACpRn8aSDdDDiWogUDqnsWgFn8T6bpWu5vxRVL8MaBnbWYm1B3eEynArmWoto6bgvE4KBgHQWJZ3ucME6g9q",
  "key28": "5Cfr6d7i4JBgtqSWgaBPRDvzFKyzeX4XMCTZH9tCYQfenf8xmeyHKyBgGHxBxJ5QGjWbxhN4uYgNigZKXJiqcvWu",
  "key29": "2bmPjh4cxvyQuytmJZbRr8EPtU84X443Rfes9LbtNFkCgjZ37ihzqXhjh2Vop7SqZMGj5voSdP2B96bbXcqdh8Zq",
  "key30": "3CzS2xnqNuHh1C5SAtvsdrAeAEm2ghMH5UZEMtiNfPqSR4hJzVuSgwdJXJsFG5sswqHpwNRmDBGpWFiYLuEUeBVJ",
  "key31": "38CfV4UzMgdbpX2gfiqFGvQNCvCHpXKngvUk4HjS6e9M1QFW8FfJUrxZkRKmgvAvXqgvWyy7nqY8ebyqHCJFVefQ",
  "key32": "5LkudRFxQbFvVWWHUefYdmrTMExio3kjdV8LGpc8LuDgmH9onMThQzwrNuCN9eymaSe5LASKxSEMYm7F9vVdvVoH",
  "key33": "2ps3sZtL76wphXjbWnhtKPnSm4onGtDsMpfWRvtmKUuHq8N9hadqu2swN4vNMtHUveov6JQ3AkQtNp8b1FHfRP5H",
  "key34": "4RukbZGmWgQJ3pQ21bHL97qBJPEHeyPm47cDDrbMromDaQLgHaBhj4ZGhw4uoE9YWJFZq5DXKPMrrpmH1uh5ijxk"
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
