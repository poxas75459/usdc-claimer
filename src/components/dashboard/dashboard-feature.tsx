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
    "2zSWSoH9HxVac8ai2jnaBT21G6zdrHFJjKhoCwsvB7TTfiQ1RQVqYnpUqJbKzESzPrnU47CikkKkVwizKxvkWG69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ks6MsKBR9kABe7USdHnpoAmTCjr8t3twywWXxo2Rv2F8yULSDjE7r62cDdz4FNTip6WWWBzud7taBwUPuFai8SQ",
  "key1": "2DURBfbof5vqSp9qNyeM1ruqZBG9vidEb5CCNRpensFr6SVMdnaqwQxU7UCyYpyzaHFYTNEdQ2uW53ZxJGxDKBUj",
  "key2": "4zWRKwH8SYomK1QJMrAb6RVP4vciKXheJzaEK8gPZVVnqBGP18MpcBUf1eaqELFpwhWyQ9q5YeswFrE3MLGV8kM7",
  "key3": "oqK8jE7UVav6awgCJtN5rFMQenwUwz4EZj5jiMxXs38eQtFmE7gxdSkdPC4DpiLdshZfYTDrtciTYsJ8VFLSnih",
  "key4": "4q5baWaaAntXFs1zVGx7tcxpTi6H3PBLuRnjwSpwiDGpDQaXeNWzqSnqxhAdbxk3kkYFKMJh782N39hJksULFK8h",
  "key5": "28v5q5dFpRoH8XCrB7XEQHn71jZnaWzmbc9mvR2ZghoCZ1ZFBVvjFMdpPrXeByaWTVkLPvAia7bMSaBtVqV9YvBq",
  "key6": "x6H6KaGbKDUPVVSYuYpvaSYASv6B3cTNqkY4vvmp487WcTyueKhwoA1gsEGk6Et73z9ZEC55Hk6wZB9VTjRUtiC",
  "key7": "361G1FHJTcBuZLo4oM2JkCViNzcXsUfCRQZc2WQxT7vrfRgcsonUMyMQQuhuM26Au3ZHmsGMcPJ1P9muQj4Nxh2A",
  "key8": "2x9A7fzE1yFsuEfovjzzE5tQgyXQB5FrvLhLaorJBbF1iK5nLT1g3p716ixEHD3EvFPUSPxwxgot4WixwtZB1j1C",
  "key9": "3p3tLsEWEZ3AHcnknuGMEbZ5HEEEC8QN8NVYsiimgCpAXfzb3TPeeFWQEsh6tF1zYm79vwDTzSSVTAB4VucLiqpY",
  "key10": "4yYXyYNTcuzbGBuohsp6z8K2j5977ALgYnCBBxSKrpe58B8R6Lokwm1B1BNQ9aQ7ua8E6YNmvqaGDt8Pg5hRdNUL",
  "key11": "5noLH7CLne5zg7nHem36FaAye1FnjFgFqGQw9ct9mZiZcAbx4XT5SLrB1aPVMC3UfeR9Z59t2d3AyhP1WqAyJeRb",
  "key12": "KUMdoc6Crz9m7W1EjqtQqXCozEVNgLMruzcBVySQdoMQHeRqR5MWYsruj6szB6tVb5eZ98GTP82p9Fh9YZgjxrQ",
  "key13": "2ZHHUjYEPfKNVSrqhqnSzcHApmxtXUWYVYxDEzRi8tUoF85bpjRw2KvzmowczjgNzLYzo3Et2bBxf3phwTeCUBVX",
  "key14": "4rZUS4fb97nMa5EAoQubPtUdtww9Z92E6fw5wD4RUoKZrsteZmFmGp5eY8qzGWifatnBPEHweXDygBLiQkhUBgVx",
  "key15": "4tem1PyHrv7tMWaUmFVhEtbYcBdy2mgsFFnfJHVNZoV99XXnqYwdi7LFgDkBKQ6z119syCo16rHGRJ1PkPcbsRfe",
  "key16": "3EwzsSsaRJd9em55sULh8kio3a7jkFLAhHoTDLF7F9xqYFLCBUGmXJARWtJArPKZsX9Rb1nz6yttQeZGoogns8M8",
  "key17": "dQWAoHKJwRu6riLPSPfD7vCF9azXEDXC6EYxqdJniPFhBMQmtmohDLkXTW8CMtqi8BFvDbFVfrpmpGZPzqh5Rck",
  "key18": "9HnrhJgJteksMP3NTTKcy7oVH9JPEWDbXRWTbNLEPPNeUrUDCBGKMh1CUWaCoEPPJ6xcbkVmScAB9rLVcsXzMz4",
  "key19": "4f1hbh9wHWYS5ib32AP8vXD7iutoQJbJezbSiDbSSGKmcZ2G6BfnBebWAs8zfEwqnGDaQtDkgoQopcykXVycEj3G",
  "key20": "4NKnBeWR1cX6UhjXmMFjqiLWLKhhoa7jDeEmX1n6LhtRiHrvbnANoRFpb6XPSxXFT5KC2LcMq69siKqSzGkNdddm",
  "key21": "2VmwdLU55rAWhTqTDnt4tz2Q2djLimpnsJ72WxWX4ovRTTETpD8iLHDJUx3KvpS1agswDZZXqoCFyFo4xjtBWTfV",
  "key22": "uNJFL3peKYRrFnxMqszY2FgRQxhsr7xJfNJp5h5zsNbkAKrYHXkPzqJ5uRrFvh7hh2cNCDpngnPyKT312TMSv2b",
  "key23": "WR8RvgX5Ckft5FcQi8GGdPfWcBWqupEgri3RqekHMcuF5DwW3RdTnpL9ydVZvTR6wqBNSz3P3JhmQZueFG7HuSX",
  "key24": "36T1ZvvqGWqT17WZDT7MMfyz8N6PzhXge2ZmhbrsMLcxg9xxsrp9yPxFHnxuopKui7aYwB1uFkF2FXi2P9zzXaxR",
  "key25": "c6Zte8LouRWF3BYU7Sck9dg16UE2gxWUxjURD5tkX2numfd17jA8VSaG12o98SVgBscrAtkUUJnZBVEAhtwJEJk",
  "key26": "5FZDN6ZBsn4owLK6KpB3HRRYSpepYeCDTZc2v68EVdEuRN62cJHSG8v5AsPEQULtsu6a564GW8AoLVQxfkLYEGDZ",
  "key27": "57WPYt2kj3EamzkyAHKCTzZdyC3MF5UDERwgncmMpgjXCfaomuDdJuJ9VjPwC6GCuQ6wW87eh1NYrVorPp3RgzH5",
  "key28": "2pkU72J2yK1p1Q6nAq84pA3FhcxPNtqjmKJXYJ2tYGxfpSrBmFh7Nfpbc8Ee6dpt7G8HkmakVUncbdhaTi89XnY5",
  "key29": "4kCh3Vjctg9a7zXUPGmEE9CFhwpThZeSNxuWuw54Lte3kKDB3B2HUkih557Va5HXA2aZgHuo1vCNbmLPhA8MsMWE",
  "key30": "7FmoGZb2tWAvX1tDnBwqqdWf1rzCwZ1bcHQmxQgc8Q2dioo2DhYAFkiYf8fMh3RxPbAj4hwJ74v2TGEFxRbvta3",
  "key31": "3E5qa2z2rp6WEMSvvvw8ZGW96maLWsXBZkfRAtYsjMzJP3YgMH1vvwg752wFVTEpNuPj8mYfUA7ztJgNiWFm1w9R",
  "key32": "ABvvsvpQtfBiUrYN1nErCMe2DMzn4j53jJRzJKr2BNGnp3CkNAbzQknmBHqktb65MrrJMHzwdeCXQDvMx9obpjK",
  "key33": "1z19fxZiPcQF64PGnPxM19YkJbAS1TaGfDjLuCjUs7LXZwui5DoUE8JVAoBamEXNuGUggC8uLmP8SvogTVHTVwD",
  "key34": "5ad9bR1sJJJpEfztnJt2Ahrti7kPTq1DpE9XEYygdUzgT4gVZtx4EjkYRQYysGGWkDBoMrXAh36KxQnVvPkJsMXg",
  "key35": "5trfTjrpAzi5gJZsEvgTukiW8AXU6qPVoYJCwdvi48wRTd1WB4CTySiC7hANi8jxmv3P34BqdT7bk3NETujvnBss",
  "key36": "4WBrNiPh2uzxpH238knRnSL6aoaqR9CiM789mBwgsf8DnmzpbFfbgKxKDNGwX12y1RMApY5aZq8ZLUyuWRqhY7R9",
  "key37": "7ryipC4nxJzfEAUshaLt1ftYxCwmzj9T9vtwFSsE6tRL3MyTkn1q5DjWbpvSVfQUf3AYRXzFVtewYapG9D88y2U",
  "key38": "CKXzNiXStMArVQsmitEVTAdzcCk58371sXD5BYZmUacFPnPXZz34sw8Z916swPW3mDABp82LBXYpahh4ZFbPpju",
  "key39": "2WsoRkQnpeez3UKK3Td6YRqeBfhDFmh27D6ZiNfVcXUcLW6BZ3Z5qAgHDTNKH8C5eqG2oE3cd6ha3LReNGR1Ap9r"
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
