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
    "4TReETYpTcKK45fzV4dLeND8KtCfe3ZsxtmDxKDxNVu6yKRGzYmfywddQfU8g15Xqed8HWwcypcLCioQE6papcgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vT91JWnjbJqfn9x5LxD5pzJG6ccZyTScsV9JGhuoo4ogks3ijDS3Y8JFq5C8DXQQC8Qx9DxLEfPBLpeLhzBmMcz",
  "key1": "47MnEwF4jLRB7mpW24X8TPd8p5XoLDfuoPDYDLrxKeTdaAafKNjexzUPP269vhx8cuds64NfYVJTpCFKgav5NhRb",
  "key2": "24bjXDCePMDGNyQVi6akWBM43zXikEWAMKGAXmis4bVN8sYfdWjeWLcNiGHjrJTxiSZuFbCtdFdMaoGoehg7Ksi4",
  "key3": "25h5QcEXBevEqjMRDyFosNanJ7H8qnQkesTQXE7wSS8YAhz9VdBnSroiRiQLRDRAwGvLwMmMCjCuomt29JcykqGm",
  "key4": "3Ks2H7vD66CMGVYnk12xfiRKNDVnU1AafrMRwZWzEqhWiidancAZwK93nPNUkbz9fkUuycHTq62prRdKTc1wvi4q",
  "key5": "tWsNT9VTPoL8ofzFur3yGHqBjxh4uvGiheXmQompLLHLA4Ed7qER54Dg7JSBxxXwkmTPczKeymgvuHpRVjY4otS",
  "key6": "2JRaRH9jK85QjyRxdYHTr3oAn6m2VcU3X3pHy4tPTZUtAy5n2gzf3fcgjRMNWBaFzgKtjNN4SKfswoArVaEhdmiW",
  "key7": "581XH1VS3am1EEpnqJsYU44kQDP7o4QxGXe8UU2ta5iv2JNFWkgFK7u2R273ACXQENq5S8gztf1EtzqbJjoD3VAg",
  "key8": "5QrgQrEVwrrhFYh41PECp9TSuVeudW1t9RYzejn93EjfCvaKd3NdvAMHLha6LtKv5FZRw2MGcgDEr8tze345YEw",
  "key9": "g7WusyrhQHm1s1MY7Dgqi4N8cZGVvbthjdUqjfGZ648du3uXpyoPC4rQD1UhtWuWpSmuHyk6s84MTRMMceVUZvi",
  "key10": "4LKXJnf3yMMHhtTqMCFWZ4VdsZGW11VfU2HYBcL84SLDFa8xJfikYoQveC6bV6LZkn33ks8jtNivdR2abemb1Gn7",
  "key11": "26qZD1CQb2YTUeSuXyTB73bE5wVCFGZvigp23g732QN6A3DzM7L3WEuH7Kr5ffjxZAnAJtemEbrbpUpAMCwkahUE",
  "key12": "2NK4XsVyCwgWayg9vCHGmascRX7VwJ7LMJcvwAGww85YByRsKxYHQzZw2DBbBKPWHcgoWmhTdcFkM5PmyNKZ3Dsv",
  "key13": "KV26wPtdvYCUG75LMeK7tgqCaKQJyVT4EpmTAuwn8adrMgKogHeYVGd95hGYXK757PyDWtiRi8ruGbapCNKJYdc",
  "key14": "5MzJxyZYQ8KzyvqA6pM1RWZa3XScqhvdJsADE3fnwZ4TGuYpn2CiCxTjP1TPrBXcRn5wuyTtKMQzZ3WsAfNELLiz",
  "key15": "5mGcvrYG68wcc6owyAPHvgFLz825kUK5nvxQvkkUUKx8cMjVyrpwcpHGQbtsGAUkbA46WySpiuamPJ9qozFPAz59",
  "key16": "3eYyasyr89kZVUj5Djh4kDugdBpah3iqqiNP3DS7qYKzuqUrouVivBRzqMAUoT9pkLEf6h3WPfnP3fsjpurxf2J3",
  "key17": "3TKztLccdfdfxe8uR698wjTfLbp3CJ3yiViX9SbazRMksZkg8swfTmHWGNaBWC2JZQqCpgmcA9szre14pKSkkSXh",
  "key18": "36t7a5Dn8tshWS4Yi6GTRCXXG5awwwbWXKmjLURxL1MnDdrPrzyboo5jKb7q7y7bGXnb277iJQ7BvRF3UwFKoZnn",
  "key19": "2CSnmsBrEk487HL8dHcrQgysdy6QSxuFRsfRBEwBAhnoxifz4eEBZRJg7HcpoQg9SpdyFJmSpQu1ApA6xF8DkQ5o",
  "key20": "UgqMLe8RGZasaAotSnk6GU7ZtRKuniccn7aCTB7zwWXku8ZSRhw1zssNo6a3GxhEoR8hZQfc23ewwuwvymchuyx",
  "key21": "gUhu7PEbxjg6J53gMkPPFo8yB62ZczakEboHU4a88tteD9QASyiGP3U4v3tpTEZsXuBFtRiJ3rstYGiwHK9kLbX",
  "key22": "4oFtMjXUGzwrh6C8u83z1svSFEwiR4SUErh7jXfmcGfjdsNtEUP5o1DhnLeF9BxtisVquHfcdVvbHxXeXenL3Mxp",
  "key23": "4UJYaamkrQJdo4WkTjvqNpixjgwRJ795ptNSrUDyrDFLD3262CnAUQjekvWvopZpBfr3yiFgWfb6qJw3hhXqByC2",
  "key24": "4F2nHj54dp12ktZWYxQ3hF9paBkb4zASrDvx1p26hq4wPv4da8ibW34tCLi8MMFovRJsurHSxS7C2HCQgcy434Fw",
  "key25": "2SvnSArVV4qdUmsKVWwnigyVKd5i152q8BVkSUo9EFipSxkGhgo8TibctCHSvsNH82bV1Axp6cd9rt2tMUNNhG4u"
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
