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
    "3ez4UYZ73f2bQQwrWtqRUmQfxRZ2szxJAqJ1nx9pBXp27h4eu1EwJmntXU7MHYb8BhHiPgKMzgc8RC7xMCxEcQEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkpkLC5miFvtP3jbj99XmqL8ie28YNfeM9zgSurXDXv5gceD5xUeSXsw7Y1iJKrJQd8mJD6ZoPAHuLocq4GzRJ",
  "key1": "4xxghGf643Fc7z1xszxKKmMSBFZCAcn59zaq13ZwjMsNujYVAqmtWfjkYUVVKXQRhWZQ3jWWJdgMC8BzaZ76qcJa",
  "key2": "5SBMiHMYkU3Qs33uaNdBnwDnDhkUVW9dfv45Lecfe9zvYCZ28QzEKatPPwCdnrfgEb4Dwjtho8Zuwz8zsMR7zgMC",
  "key3": "3oLfSWH6FJXQc5Gb1dMynSsHtoq185aWJd735ZmsuvXzpuwQc1YPs5X9sm1GYzTDHqWFUF6JeH5qbfRgWvUiBFRH",
  "key4": "agDcre2orJgzo4whRjgvHjiH7AM7gk98r4CKWXCy993BoEbqdJ3dPxnto6TqwdWyFeAzwwEvDYVxEXzuaC6vatt",
  "key5": "417uNws1jp9ezrrB7KEWQjPG6jfWnjtM1SnG4usE6qjkBxbxtP3DPguEa6eG8XjpPyy1vAEciEBgycgYMJ2wAb8u",
  "key6": "45rp9MkdUbH1qYzN986kwgvZ3SoT6uqQrCyezSEZX4BFtQpihBYrfatbwEVvVHgu8XZKqGaEHe97mqr2qdKk8J7M",
  "key7": "5wv2PsqEzUwsfSchB4Pq9SrDsUmsgHw6KaSdasLR74c9w4hGVv4KBgHMvaoxYrbnTwdGAD2kV9W6GAZuhhH7G92h",
  "key8": "45R27VK5gpmXBPDW6wqVV2FaRvpm8iKda3m5aJWTjB7EWq8BrcHxq9Rm2h7mgyDhFe1T8CRrXTD6RyZa72BuNS8D",
  "key9": "2cFA7PoMVbdS8HxSgDQTMfKvKZSWAzxbU6XdcyyB29yEiAGRavndEQpJLchb8qt7L3TtnHqG3gPpxnRaxDDp9JMB",
  "key10": "5WLbMKVtdTRgXLQvytGFZEt9JwUHtCNVvU4nxXJG3FWXJL6Yo2129sj7bvD8CJJcKiZdoBgziuX8H8WfFrR5XK8a",
  "key11": "4AE7eCwZPymhwTR8GowAz2ZDtD4rBd4zM2VHMBTrFCeMyEZkdgABzBZ5qmkDdtAPbRvASmoT4998W7vW5U9kwNmu",
  "key12": "YAy4Z1cAog63vZDBwKdVXmfgY1Z3wwc9awommgY5uUTG5VoGb8pie7PLxLpftVQrm5ng49uk69RR3pPukzoWbDR",
  "key13": "2MRsGLyqgBCwMk4iNzwDwUZF8tGxSaPRjDoDKWu8mfcNoxbsHLntsJp2H6QHR18kR2Q6FzEW6mgheKtN59zfvwJN",
  "key14": "5zjWCLvh9eH5MRU7HZQKxgxPe4h1pE2wupWEyeVLPmN4Uu7NtGKCpgc9ik9tEGCgw1HLDsuccAhW36kmuRDJtXGP",
  "key15": "77YWMXPgdw9QreBnw2LyYYf3svp7GA93tMYW41Y97nKGMaXNLmSCLnQ5vF3mD3p7i48GnaXXagg47zPrXnKEcF2",
  "key16": "afPzr4FnqZYmxvTkDYQHXScjthk3x4P4Fk3J2oR5YzPREDkK7SNsHFAjxPRcfNfc1krdzA6884VQDwK4WVunkNm",
  "key17": "3ZjHPuK2FGf88e3Uwr29GAVkCfTaYjvBY2U3QqZ79dGD2dsgEqrnyp2gYKqtQavREskvVL1rk9DgEXrmX8ivK5zm",
  "key18": "2nTDPnKU1imAC2s6MSfeXEVm9feTbzdmbvxWuAkCLzDNHzPQ8vUCuJLQ2Eut7agGYoTpMU9zRdCak7szfSoJM42s",
  "key19": "3jYwSVCrcnEYdT8EarudeWK6YJHNrRg5usnJkhqcaPHumBVyQTKVtZosCRdLz1mZNceeN6mUyMyJ88bmsPT3cfth",
  "key20": "EH4iZFstjvujSwiu993SCXBdhffdi9dzipQoFAj7WZ4aEC24GkkHKConSSgH8FbUNFJ1xGEZwjDAu2y8PmE7Jfu",
  "key21": "2U9EZnMf6BJQ98Z46qpYpf6ay9vbm6Snt8EPeU5pPpkwRQL8KY5TMcULx9XERUMMDk3Ax5J7jQiN2MQavhsyaKzN",
  "key22": "59ACBcXJLuvw7BdigaBw1FGxBcwNF7GD7Ypa2GDDrFYC7aK8P2sMSRqEdcsAdFGXWyGgq7gTiNhSqu9ctKb5Zw1Y",
  "key23": "5DRNC2j1mrwBh3dsXbpDT6bgxJxZ9j6XNyriRe8K2m4iN9dc6LaZssaWcFYY1ttrEWT4VikJim9Dbau4p8nG3PPA",
  "key24": "2rE5xSNTRpVmzXxZ8jbsRL7KcnitjTAYHcuZ9LvrB9AMFXGXUexDHhxkkcZ26nqtCs4akx2cyNXk5cu8CbUGWFks",
  "key25": "yXwaezxd3h9KznHgf3noN6yiMdZnNDCk9dFA3Uk8Udpnfwu8SueGauvGm9B1kf4h74Zu2XEQFWAEaNSn1PJPXKg",
  "key26": "3j6Hqefw2EvcFTHudpKEindFJ8Hsbbm1Ny8U89EMH3QnQhehcxK52Vt63aE1ejQhdmBcQGKRC8BfWEuXKzE2Z7RM",
  "key27": "4chReXqTg8DVwPAPGEvoysn9BopYSiXgzrxqQg1brsZnHxWxssGYacJ84oufWBLV66K9J6opyi3ymaEJVUv1PToJ",
  "key28": "3Rt7bgvX6oaeVEt6hCEiPDdn1utv5JTeR5hiZHgG1xunkLcig9Lrfevdibqg1Hspub7kvN2vhesTHDvbesGFWZDA",
  "key29": "DNAne8GNmVxvhLo8ZBBTn2cUx5yfQZYQ8qFaYsUbtrya6m7vdCr33VwQX7RSvUbu4M76XsojjuAVcaprXBrthwY",
  "key30": "5SYJECxS5en841wYnbsWwMa7uuS9qMnRcAUeQFk1Y1Q9AxhMu1w94iQHhsTJWB82xVfb43GBjTeV5ybzQKw746MT",
  "key31": "C53Ri6yBm3AUcp1a8GGefhba56x2PNzDto5ERc2j5CHSDA81eLZeSpX5J4MWzCQdGL7z38KCxTUoEL8RS4opDAX",
  "key32": "3wWjSKts6WVNZ6qmU6X4fqjzyJz3r8kfsmELkg2ALzNGsGhv4p7SSbw7Sow45ZzTmTFipzmayi7pcXS8noC6DCSr",
  "key33": "2QHfxPEvHXJ5BmeqLUzzA7mKwvWEXWZgGpkPZbmtagre5jcHsN8AgWV833z7rV3aVHEEKQy9Cq1qnEQTeCuDMzWw",
  "key34": "5ZDQ4qz3ekEX4iskFJSs89dBsFRiMjDxvCbYmVVkDSrUSfFWmtLDA2Q6Q8uipmMTMumJPoBdofybTLpaw19eYLZW",
  "key35": "5Y2R1mfKmAtndMsqa8MbyR3bAGxfv5Q6dojhmEAr9RMrRKYp1Nv2UDfWL8XYekwf5ae1W9LVBozYM78NHPcq6zXX"
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
