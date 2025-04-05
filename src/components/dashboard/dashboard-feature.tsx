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
    "2CEhNA5TM6staDAbPNuZsaQkyzeBGqAjcBCR9Sjuzj3RnWBXEGbrgPUZKu4B6V33ENhzfndJEzj3FuDLVpt6EUdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfU9zajHAkcQk1hP28gXb2mrZZygVbT2UhDLqMavkq2k1CgHLyPAJvstxPMmQcWY4V2yprvALGB3rfeEtmjZbSq",
  "key1": "5FoB7837d3oVRyhzSpEDhE5KndDEWWJxNg7GhvahRN7c5F4xi1sQ9dQmj64candxe18niu6nLNrAKjhs6HedTeLQ",
  "key2": "4CwUiZVp5DcBSLqseEErYiiepCtGSwtKk3FFmdxGVUDw2PwkW8W16J3RS1ZyLdhsXLF7axZrW8ZMSUd7o4FyytzM",
  "key3": "45wgvx1t9fDLAwxtmbPLmhPgVPuCmVaBmUJSdpVevCJtpt43esVdKKWpw7yqo5cXmUDUTLqA3iRZkfWbajpuRjLH",
  "key4": "4XPhrpeEiLmL7vBAXK4qgDi2RX5kXh1hDrNJd7GMLraqyH9tB882sEHEh1DebTQ6vVAqLPUYt4THBFmtKb3UVYTp",
  "key5": "2BadiLdNQB4PT6ox92SZ7PzB1RGF1t7g8Qq8Thog2rnFeEWYKpA7soafD9qur7H7fZb6t7HNEYi1oJE9adQtPLJf",
  "key6": "aYgaZ6ie1uUAr99AnRuWRwKPPcHqPfbuJP33aTdmLnCj4hEXdaXRbLhGCAGALBtAB6ApYkBYMgYPJJL2JQC2PYR",
  "key7": "W82PaCbRyRwVsjsWfLcPeotdiPG2oLHFoNQPqU4GPTWSCVdxCDLqLkxoeeAx1sDHXL8oayA6AAWJCCve21ZDA83",
  "key8": "3pjWNQYcyXTKSfX9nUsSqea3aRVosgRp1T7S42zhuhCKt1Rgg8zgBanzvErwoLk6u6NJ51hKadHAxYzf5dbSXzc5",
  "key9": "4DnpFZEvF2bRUuGkDKdWqNVBWWzypq6aR5NW6cBMxdqM2RdTQYn3XUZUdBZPhdb4eW8412hgf6MWwHtMw6w15qqN",
  "key10": "61u3tk6qd5p3kyYbErP9M1ve7xa7gKdL2WVGCeDyAgsN2Y4dt8K4WkLHxohgh4Uf9qd2E79cxktyNUZbtRRcJ2nn",
  "key11": "4aNPaLqQRCmA1gRGAvduuGYbvMXHzy7aAe27r4F8qgMdaoDthSzBhBvpKniwjg2UpBhgFUJCXYhFZwFHWmWPQVJY",
  "key12": "3wB8MYCPcaxKVBAzDXj7KRJPRsft5gBNkvDa46DjHxdnA7ooS4PQjMusJVM1TAnfhkZ4S2cRNZ7BEBJ7LnVfknyV",
  "key13": "4ZqALThks9BceaZyeW5pRMMbSsTMJDvjrB5MhtHRxZVpZFxnBnh9dTidnPrQVSAfZxuc4MddPBrVfXmZW6TVgqNq",
  "key14": "51zu5omHSuEDGrK7tZb6YvTexZJVM7TaLw34qB84FQRTU7LFa9TxkZyJr3hjKUAixNa9iYKjDXbgZafDjpKCq5yQ",
  "key15": "2SoYvrHWfJqF3K971ZvhucGBbDdW2tJVdwYYmU9PqsPeUXcRgPUYeZARcKMYunY5uFB2T8B5J7dZdLbXsK6Nryi2",
  "key16": "5CnnNzFZexcAWQYXGLH9LjHpH9esMZFMCoux5w6BvMTywzfqXguCTYPmXJRkiztXBFZcopGWDAWWQuLu475hs5my",
  "key17": "5KRPw8yJ66BobbkwQwsW5iUSqnbCL2U81wVmNZ6tep7rBHmwBDsmZ9WiXbKTo7Ej1VbNvpnEZP3Rh63L3JhnGpok",
  "key18": "47pccGevgNqwoZuU4Yq9ycZspKh2Df5RpuuLXZxYvJsxDmuB8SwZacxCdAktiDrmA5owEbaPeeMrGefLRQQdUXRa",
  "key19": "38ZqgBeAMBPWGWrXLD1Qr48Qz4imkNFcxeaP18WsTQJvBxNST76j27AW3QMZZcLvvuUduELyY9JbNT9MLXD7v1pS",
  "key20": "5b99c6nFBeUvnH2ZZ6dQne7HBJPvqxwX4677WXQM2sqdzdXgRm5QHBwspVDpLsToG3NBvjDJ9dQZ4qLqQVeBWU7N",
  "key21": "5fiFfqxDEpmMoekgsTvagB3priTcXVnbRgoANxZtvVw2B6mypaczTKpoJczxVwhVtdJZLGWSxA2tg74Rff4sRRdm",
  "key22": "5WzPo2MRYNU4Sc5oLnUR2rJEy2YsmfB88SGiaGm3qdp3RBDddxajxxmJ541Dkvju9jkCJwVowV7NC91YL9ybHdfp",
  "key23": "24sHey5cCjJGDXDk2rz1dCNzeivFpccScedv51HZHsZgfLfuZgi5hjSPoj3gf9rE7JQhCMwVVwTACPDgsQ1Wt17w",
  "key24": "62K1XUqayX8SpCnnTsG2RpHs2TDuy9rVL6poY6BkYT1ty4v2EyjjQuUnogvJMDSabtjiHbCogMw17DSqhTzFakQP",
  "key25": "2nM1fuoVF3LjWWQo3WZsZUmGnwU1kHH6mNXpMQSCGT5PryX3DFa9k2gN4wQzaSHfK2zTM8qcmtrCNxF6wDmV8H88",
  "key26": "2cGfqevZVa27qaj9Z33Hf8hggY7PWvRnuhbohsJXx1dcPDLzp7XGKZQk7nbPjLKb8jaw64AZkFDDzvKfHgGHFXan",
  "key27": "28gPjYfYstBkyMpuhctHaZdQ48jY6N6pU7TQqquRme3PiJvP7NKrc88oVUngb5qyaHFEMNwLVcPUzm5myXkRGq4n",
  "key28": "5ZcdygcgKBToaRBz1EjrVQB2CFN2zNs14WmDNFGk3vVWVepf9sdDMwGVzBXGEVQWBTGCqG3sfZ4KfRfexDib7o3o",
  "key29": "56CP3e316PRxNHM4XHQ9aCDZt3StevDTP5PK34Wm5KoP7Ti8e5V6GtLVj3JbodoYj5KiriZios8RD81GDpRotTJN",
  "key30": "5GwNs6Y9tr94qiaX2VAxzsgoTiwKwryZYqXjayb61SejNStqok9qWPrGLdn9j9b3T8DzdEov5xMVZ9C3GJ1yKRZS",
  "key31": "35wnQpfoMCq3YQdFYwKA56EDLTru9TArcr2SAGHoRWEnf57WvXNrK1zxy2cqKJLWQhDLswomaiZfLPkQUEJ6XgHN",
  "key32": "2sCBmmDnvroFQoTXJMAXSBjL1JUpEa9guTirZiBWkLRqr5jwCPjk6FawQem6m97eR3xK8y5EKGguEmiqFebrDsZT",
  "key33": "Z67rdbtUMju6EgnvUKTGB6ExQho7Rn8KLBxUR6zwuo5WW6Mbgy3Ap31WAb7yJq4FAEg3JcGpSHVSUex3EFxHP1H",
  "key34": "5nmcuGu847YD1Sd9tNb9Actp9Q5FWnkUcAu3fR4KCJbz1KURygkPVKbkcXc3xyUsU9WNto5Jpd8X2yj5NLorXrs2",
  "key35": "VjXgyPSBFQMfHEXKA5FaxGbqdu2PtH2wNWyokm9MyXNW8KVKiyW3VqptbrEBwY4y1NUABhckKZZ4NL3tSK5hdQ2",
  "key36": "2WeK8xhkvE8ASLA2fgC8ztoyuGtqjs8vkTx373vDazWfDPQ1RhQXVVJnkRtqBTzr4TBiHdZe63kVETThxrzVApH7",
  "key37": "5xPoFLQH8vrrErzKMFF3noJ1aT5xTUzDqFPqYizoz8rGLDe7Cm7wMNdHmHwoc9ZTwX3WjAcNzH4mDd14xVqN5Ld5",
  "key38": "5yGrtjpRbBb3443ie8unvLCCUde716sQA5W5vwW1kUFm6h8nD9JmkvCJgwh7vLm3YsQwiEivppx2KrcoimJUvjX5",
  "key39": "5A6St44g6mesLisSTLpt3hZTwH8RCCDb7TLeWUzeqVLN8n7Ng4KLvbHzwR1BA4tJek1fmS2w6zFHnqyrE8hxEaoC"
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
