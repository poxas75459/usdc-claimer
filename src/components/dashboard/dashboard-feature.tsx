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
    "3JdzWKHUTjpJbwDDEVH1GNGkAGfigJ9YMB3tGpiF9bbDLatNPmntcSGN9KsYAqJ2KS9X7eF6NSufoxUc26PCdqv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ix268syv8qFTGdzCNfVWL9mGBEA13ivzD7TVnPiRG6NcCEuFJFUURYm6qzDuqRpx8c3NqwjykS2SuFErHpVNkV8",
  "key1": "5mveDmk8amyWh7niPn1kriegT2WZmR9SiCGkKBMdr9GkJN79r8rEVeEPxSuNAmZ9CqkiuqSWaMde7sC5sjoJ7au8",
  "key2": "5yHzuGcdvMrn7fhpNWGRmCChsrnvyzAqQuU2eShqSQ4LttFvN1sT7EBgDLck3AP5jTiRdoPjBYT4DA8GemaXU7JW",
  "key3": "51yKsTpPn4tPUKEhkogA4Euo3AEtnbdfUDBFANe7J74UMwTdfdsjqePQoLYSmnUeaJq2F3QWeXUWkb1fNW35gNfx",
  "key4": "2MeXGsHdn1PM49EN2uys2tcBzivVydnoJrseDHM8zNTKMkS2FSi6uCUfuWRCe4YnsLLZir4C3Qc7b3DBXgmSJfjC",
  "key5": "2Ta2DWmzHM9sSx1WBD5wzb9k4kpKcN4goiz7GtQJfBhCmQpvxADRGoHttnGksoAzNj5KAdHTJCXuAXHC6JzJMSm8",
  "key6": "2kvbRCcmwdtoRWAYiuNroxYxgZufq59nbjUNgTpBpzD97VzVS87LyuxF292PLFgKqPPfLQEBzacrkoZVUo2M5gkq",
  "key7": "2BYrZUQvMCmamokZGyvZzyYs8FSX1MDn1iUmd93D9MeTngzjxemFknoWEUNZ9e2upy3fLC3BznQBnjFeLVNPhwt8",
  "key8": "5ag1WV4uUF4YFMGRhhdYy5hpFNMokHTC37RioC5KX8w6JqAzbcKfWicXpS5rXX7zJN1jWz4gF8igq3sow214c4bL",
  "key9": "2i4zwvZgo5P9RWXJZ8k8p3QTtynUG65Bmxsf7s11t3QM9MTySBYiXThzPNS7QLQ2S3pkac4MH1xSMjFQJdJdxXCp",
  "key10": "fXDWgzVyTKhZ1xKr9PGoLMhAiJSk6zhVkVP4EP9Bpx54vdyUccZGChSY9JspXC2N1RKKFjLkmhZkD71hgkuqkJV",
  "key11": "4t3ZWfnTYMQab8RcVXu7UFaUU9vGKNcDsj8BPb4Lri8p6jP1Z8nzfzdUK9UekcuJVhtY47TANKzVfsKe8HZECjPK",
  "key12": "2Bq5wPKvVzz2DaH2YT6EnCjW4CrDxMU2Y9azmdS12CK8WLs6meWLYzeM8nJ4YnECPEorkAoQi7UbMtZhKx3eDUzU",
  "key13": "3iJ5pZUd2G4uBHtmAr7jAAHqMLt6MYgEb44dmnXnCG9CJSGfLWLJjCL3Dz48XbWwLbgH5JX6fG4eTqjmG123bu9X",
  "key14": "3MiKDDmbfeeBALfnUS8rBoDRxhJ5RKhbPzdcd8nrkPGSAXjofyzKcxNTnUi1pnGdsK6756hpGZWBwpn4epYNXUDh",
  "key15": "4YgMxavn3gkKGJff5xm3ZM1Ek9aJWnTA9twvc3FUmabVdEk7SjjxrQHPgZ4vAjRXJ1z7fDBDRyr9E9K3WJCYswR7",
  "key16": "2KmmQiLhxxUasNGq8YU3AHhGVWAerbxf5rUk5b574ASj6ap6gtuFVYFxq2vfYPrp1MSSevGWpNAzrdurAwMBBFS8",
  "key17": "4bSeUX52h7bQkKbNWQ2t2hQub5xkrKHShCCteUzz3U94pr2euUbebWnaqeQteJhFKQZCC1ykX6HAL821G45zr1DW",
  "key18": "54XWaKit227gvkY6ZMPFpZiXaGPpSQV9vdt3THnWHCUSX8mnthQKbJBXXBGa8Q3Tbz5ffpzu6Mv9To9CMntNjc9",
  "key19": "449abr9Ki31wbiLKv5s6mxo5HEbjJBzDFRW9iapvacyihcb3EcQrb7S1bNsTKzpgbhVTy6cmstcZPg6reVdmJz4",
  "key20": "5Huyvr33883mAxmPyhme2NyQ9UeZMeAxcEgzCMUL3SGyy6BRMLzops8JwHFuHQCekSbWhrvYv7ycGMvXaz9FmyGM",
  "key21": "55jUwHCWXQDWN3fzGjfTgFrF26RrULdgwruQm8Y5MiZsBzqnssJFuqRnamUUNq4tM9LwGFtcpEU9XmHMMT994eJk",
  "key22": "zYFdd51Q4vF2YStfSaGE31EG5BSYjzskhtufZq8VTdhxdYHiiynG9szDgZsDkXTsWFprwsDcF8WaG6iDx39cEoJ",
  "key23": "5c8JeVSV7T8vVemuBxuQBKS2twjnCNm6Z54UyzEMbSzkcNbEQkA2ePwGLgh3afNmWmp1MEDGQzdStBtUvW6SBzkG",
  "key24": "3ra1GTqsBo2tGn41iR7NPZRF76DovWpnB4Z7WGapqx1rAgjjW5FQWTQZ9D6LHtZJaow7P3XoLmmFPWtL5q9wHr7B",
  "key25": "3qBd6VUUzJbVhTJPu4gdabfEeaEDjTPy5k2iioVN74h4hRZKkdWcsdGGH5DG7ZVizbH5NTTHZcKeSJraKPyDGuB",
  "key26": "4bu3Qywb2cmMeAzvPtFs3Z4vqUhHcLX7x8qs3M4SehjHuT2inFiGx8mN1LuLFedGpBkEGy1ch2PpESWDBWqTTmfm",
  "key27": "2BJDuLMTZMw6BGtWobomfbbJaaeHEDNDfJaVt9U2WCMD3HGn9bvoVeik58zfvmajfEUV7VbdnYAbwVow2DX8ZzeB",
  "key28": "5BokPBbkfr2cPLoRtGKmjdCp7mYmGUZcYyMkxB8xN1KLjwXSo8GksAnxUbjisJAnrQz1h5cTbap4T95ECkF7W5No",
  "key29": "fgDM4YYNLEDasJ92bzY1er6ksgDw5vfxAx2YRfJQLEhyps1PaG4xYjHFNzcQqz17wJuvNMPDyBXMdZFBfYEjnNe",
  "key30": "w9Pwe1SyeaezA8aLshghTrEqGoQbnpCRF1GncURyE6xt4bBJHU5NTpXv8v9ZdfDjQSQobGRqX1AGAw64jWycdCw",
  "key31": "36bqngs7Xxf7cnBu6aHDiwhZ3Vo1wYZ4rDhSTH7R3nBs6J9Q2fzDVnFuR8GHxTyC2eS31ozqLaaiey5ZnEmAre7N",
  "key32": "5W74WGAvtVsGauUdtqvzApfAExbS4vFGEKQCCD6u8RGZpPB1jd99mt77eWVdaMaB38rwxUprtH4SrcuoTSSKgFaq",
  "key33": "4DqCJqiEbrHS9KYBij3avWMD3kJXV7BtLQGS4Ev54oj7QgVHBDdvobFzB8grgAkZcoDSWeXZBnAbCnxAyn2qCJVb"
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
