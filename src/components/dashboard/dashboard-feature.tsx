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
    "q3UF7UDxhec8iXqH2DPUJDNCW7Un6HakWKBFG3mMxZUsBfvYMCKFTzdBMTvFwR7K2Xk9cRgANH2DKaxbjC6G4fG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pFaTihXTcPRpFyRGC9ShEDxXbsdihHA95Lp57m5RCcqF7A2U6HNqrtTrzT3rQaK1aSuC5Et6jBD6p7Sjj9dautC",
  "key1": "2wSPdA9EuRVtbkFtccbwhdwiNsJqPNC6rP6Cvua1kiFeykvMhavbZcamUzFp5gsxJNaJ7vpxRDbAHKro6cTygaCp",
  "key2": "2QowY3PohDvMxiG9Hv9VCXHQAwmiHAebhLsrm9CxLo7xRfD2wsusXPtibLE9EnconywmiQHQdYUAXgpbJiYHmS3b",
  "key3": "4wb3wKdrNmcfNHTZ7R7S8p76U1xJgkLsqqx1p41kTwZm2NYqxLB8wyr7B7iy2KoM9Psy6fa8kX8aNE89gJqExDRN",
  "key4": "CVsNdW8t3PzS43xC3cZDDEaHLygGWvvJh17ytTWrEHpBhXYELGmTcF7YsqZnehVTrmfgsozhdJT6p5Ds2ctGnBQ",
  "key5": "5ZoUaW3hGs8WQAPGRKdxcQLe5ftjBS1XXzZCnNHY448eMpt4GX1XKfRhETHHuJ6RPe6PPpbGgfv9epGcsSChnfxk",
  "key6": "2F6aRviKvjCbAwPy3tcga8jyQKNf6G7zW1G1FGfeF9QByS6jfV6vhXtUtxTcC6EQRuv21PfgoXt2JJcHPCgJv3t5",
  "key7": "6QX6i1T4EBNULh82kdR4bSxSnDN1EkCkqH2TnLUfC469x3xtdN8mFyqzcQRiMinBaGXE6Xpbn9Kt8hgsgNB5fuM",
  "key8": "5KwLaDhKiMji99DRQGGDPmwx48JYLYjkeUG3MQEvXqhRoKAzeu2CAqT3Mbm5i6yzUQZoKAruzoZWGQKa8FVAvkz4",
  "key9": "5iJK8sX2rUWwt5S7HRgW79oydQRWyGj4Z946SJ2QYPHcSozbTnk4sfpWb9D1ToBQ4ff3HfjUooHsdze5oEJVywva",
  "key10": "5xeQCiwp2FhMFWNCc1jt1KP3ufkSkDqJUmNMHCYv9m3cUPH8XEz2JKDRAgMWFbaYR5VmNeaUNbmSm19arWBLs4y9",
  "key11": "6FC4Xj1hTXVBhLfrHh1bfNL4UYwn3tQWnpos5Q6E4cop9LWnqGdY2REjj1QRkfohrcK1PVYSvYW3DoRehQiN1XE",
  "key12": "48k6ueqCXobyWwQiGHiMJkLJ9Rab7oZ2E7Unp2BsPF1kdNgHjT43W66T4LNPxjra1KhACXhNR9kAhWB294KfXJfX",
  "key13": "4un5755HnCyjpAuaSLgrBLc12re7GAY9rQwNEQDeYc5QLDWscGURNjaSrqregsCR2HprTHR9dcMwDbK6fZE7sNHo",
  "key14": "2BetvoRULswWbnUn9UcczZdt48BbBJNKs5x4Mzeft218bN6mMgtGGuH85z4f1hYvgcdXWPTYH6GUhjhCxdySEVTx",
  "key15": "4XSfhrzZBMSuu63LKgBhuBbywFUFDpdHiw4VTNBurTFQ3uLNPtix58LjJcB8bJZoxbijSZKtbPYtU1c2JeEqQ24D",
  "key16": "4KsMAGzn1jmJCTAKBx5kcKGNKuC6AiTGJc8iWa8cubu4VUjkHziYKWU9yb8RxGr8BWa5a2kYmo3qusmEE7GRhNbp",
  "key17": "288YQ8mamALnxu9n5azRi99yYBs4ZrYMiGxCCCdBPDvmSaFwZveGmK2Vi6wVWAjGwMXzmBUS4pewSVdRM6vB7Z3S",
  "key18": "4oq4qohUuSjLX5LfF9ZxZsgG7XP38VPc56aNKrZur7d9EMJYKDq9poj75NundUznM19KsfUo59yfp39xsACPC7RH",
  "key19": "4CQfCU9wQwvp3UzxJfdpoG6S7vqA8cB2F7o9qRV9MUkXXcLcpPYh7jkeVKwcKYabozThENQLWCogfdYRifUUEAc5",
  "key20": "3R6qcQ4JPjWXo5NnktDaDF9n6wN9L8tjMBLseMrQM6za4kookwvK8wEubTUVz1fwEh7EpQjqDjLPfdiMzSqqg3kQ",
  "key21": "5wNSchzXWmgV4xZULKfG7MgZ1ehyY99sSuLG1AoKWYHzQR3FWLUVquhfzKtgzTe3EwpXpB2PuPeTD5ASkqcdhn58",
  "key22": "3wocTihcfRwjUJdH1P1LqkBNNA9hi1qumSqNmtDiZ6R7eKsbHMTMef7Vt8vxv2Yd6kXHgnER5wTjRAfr36FQk4HF",
  "key23": "4BghRHMkDa1UDDJUVKgmJz3EbC6Ps4DSZGNHA6ND2wj1uuEoi98KCgwetpLJYWs9pEiwtigRRtUDndaGkHs4zpUf",
  "key24": "4of9Av2RJLN9bSzKCHWps2x8AnJUzaFhT2SgjjeLAazA3Jz2S3wgFd5MzjYKgfikRXj7NJAFxH1zUUBaUibkc19Y",
  "key25": "5xtZTK94MVVdhxMynS9QrJUQRFvDRxRLQH9qALndANXjtCFjiBt4M19Uhh15ipciq1L9UtcnnXGLmT6vhzW69FYF",
  "key26": "4f8wXqMQjQwSJRHYvh2YUmMGFDNRu9qDarCpbBcz8GMJWuogbkmsTrF9obCAx4j22znffRo5LQBrbj7gN9bzz8q6",
  "key27": "43CozujJJFigLAiqxfph1zgcAjPh1wCwyy3xtMV15KZQpHCfTafufL716ce4D7xNjoBKX1cy3AZeG4j4sBtPrL1r",
  "key28": "4ssu27ag92LvWoDPzj6wGEYdJ8TmNMruLWhpRFB4bKDtEK4vwK6nHahJf75QKor8uLTNJoeyhXm5bTDtuBMdQ19R",
  "key29": "fFeDjPAdHH9PFRPjmtbHzcjHVYUeHcVMsmSwWQMJgEmPe1dtnnMQmkmoyQ3UzwWncHXZLEBLNRiFCc747PXznfp",
  "key30": "42v7KUJocAsZsQ4A3HxcmXeZbffLvghE4vnNF95FbCQoGA3QC5rKqMmn5pkDXFNstVXsRavSNqGmJ5LjRK8q4F3V",
  "key31": "3i6pD19rtbEjuP7wAhKYcdBjy37qzfGSRgwgXGajSMJ4TFLGvAoLfArtopNEg7ASic1wkT1v66sGhCF1YtLGKzxp",
  "key32": "5Gxtrymnvr3VUvyoC3RQG1wdUvU35rcC23tYPzs2GbGzunLhprLCDP4S7UgAvFcCJbteMGSxnXHaBYHd7h6qttfN",
  "key33": "xpeCsFA7DvYjwJaKoiFwLPT3rMftysvRRuz3mdf79TRgndBQcw9GcmsAcxniaaDyhSevYXDTQfkH1LYfNEMhEPX",
  "key34": "4FK2fGhfQKa6qPD7t6A3Kxy3aJaoebX1HaboWfU53ZMyvEnZpWNpwTt8Rzy8suYi8VgmFegHdPTVXgq5H2m27w9u",
  "key35": "3u29ZSy7chhRfN6LxPgHUemDKDVwED2fGnkDPDHLjqsHvmtrevof2xyxCE75N9cEPyQVACoWHZiEkgDrVnZFbFbq",
  "key36": "4Jm5YJbEfyhP4gTYCsfQ78gNbruTAWQNmYriN8WMQ1ZNdqj6isgXL7LskfuCfVY1TqeTUhnRM6UoQ9cU6p1e1zAC",
  "key37": "55MHcuhqSbqnc3vEBdGR3E4eXZc4QnUoFDVTRriVHy7qvfJHGkR8X51FcbdPXtMwgKn76G4kG1TMQDjZkvTs97At",
  "key38": "649rZsbKLw8fzak12BjJ9JmR7XY7hq2ffQQ4F23w2gKbbeSesew89ytg2BFWp52tXoZpxNwBvhWQub81Ujs8z1pY",
  "key39": "4aL4q4jEUdwA6aXYDj7dKi1UoPRVEjTfZBh47tyXU8SbCG85QZmFw88pBv2G41uarzmcDcdxZY9CW5FkWg66BZzj",
  "key40": "5hZsTw824QsaY5c7hxkgXB61aDkwaQUpJ6QftBDeeUFiGxeaHWcvm186uMTfr2cWij4zotJCSvRAsGD5y1S11R8d",
  "key41": "2kRHQkKnamuWJ7H5Y15nqvXL8dSqawizG1MHyUhzqcGtdu29G3GdVs1jgk5aGUN6Js1Vs7PKW6DppRq9t19er44P",
  "key42": "5tsn8WKUpc72M9bX3gjskY7wrhFjqKeu2d5QNJ3ZqVWDjZ2a4WmAu7G3v9XLjCj9xmTNSLzxojXLBezcG3SgQR1R",
  "key43": "4Y8uXLxHXBYbkGP2UqcLwuM3gowfaVJr6rPNrNMW1gWmgdq9aw2XQ9jPtbAsiMooBnHb9p2Kg7TWn2YBfr25t4xt",
  "key44": "2KApWY7M7CeeB5nEDsEjPvNVkRwjhmTakEdAgQe56gq5dk5PSZNk6KcVZjvj8BsJCjoyGQrLhqcX7tLujywh16y",
  "key45": "4ysBz1XG9DuUg6MzJRS2Uqv86V8sqMYyLkVC7yqAEVtaUUUHpKRH9fRPfPH1BrXuk2akWMbr961DgbAwYLiZxf3H",
  "key46": "2dp8GuYkbcpoeMq8Pibt6QeqdwEe2aQPhv7ojqrsHAq4Vz1dxhkUH6bbMnYcsB1UoVQ2a3994H6BUTJKCWai56ds",
  "key47": "4m6jyrdLzPEooTYvYAXfGxAxsSWs4hsDtRNBrPssUQ8vdS9eQJT3wrcEYsvctPSGdL691CRBALTD5FvcLsGMZCXj",
  "key48": "5uZfojLNAFwZsubb115qtqD95g2dzK48ESUh75CKSE7rKc4bFxsF4yR22dJFvToViYGRjQt4dkKDBp7pU8na1Nzq",
  "key49": "651NRoYJbciJj52n3kPv9HWeQBfAC8DNUK9uHwjAuaenj1LMnjjRt6yAigSkLQetEoe2qyo67DXhwsAGes7deNjd"
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
