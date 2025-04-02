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
    "3qAHyfZU6Lw2kvBipKzG2yq2ooxFvhZDTY7xhDRrbpLaaq8uqv76iLSWZFjeVkQavH2BK7Wxq2R6bfCSwLFKY4ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSPNHDs4rjRdbufwrewG7bYDJ5WBtGTUctzqnVaTLHrhHsSkdpuZyBmBp5qt8zsZpJS1E1ESLUcZcSfSq9WPwHE",
  "key1": "3dU8Xkgoaei8EVoa8NXjdYatsu5nDSHNGCdL4JSvrZMZG4R1XX2jiq41FZ96gxESHe8nL3j6HnkftViwsy65hXxS",
  "key2": "2oFCiwcdn8u6MJxyLXMA8pGvnvfmD9r7vbULkNHWt2smfkEoySKax2cpajUgUWnA1Vx12pXPDYDeH3E3N3y4upQD",
  "key3": "54GG1db8hzAEVqVKSjGyMs5YnNuZKjBmzxo1LoQcW6dh41dg3UiPu5tY5z7bQD5JRVBBo4hVjaD5iTvLtP29xZkQ",
  "key4": "2cPDuQykLJne2p1ygTbUQFTKGsBrQwPeDAZLJTnJRNkPQV6CDGimTe22SskDwcUL8CPhwearUqseJmZDpEJcaKLg",
  "key5": "4a1rCP3H6jB3BaQ5QZWmx3zLuVH9RtWCQCRcJ3Lw1hGNvvMGgHZeMx9Ji3QesrF12x7nacLjHUPZfD4hHfdHA2KP",
  "key6": "5RY13XtwC4QgUVUZkysCfLrLCJrGNSqWwaeFWhuEGoQzfKsfZyMA4Gf8m848CMnf8F3yGLyciDQERviahKudNoV1",
  "key7": "2LoKqQV31FffZDmxn7c5ecjEcALP5USo2BBcThxN2qCWM1Lor8m92YrY4gsHDpLPJFRfoJDK78S83ftucunKmrpD",
  "key8": "UpppXBitTVyhcmTtMbHuzmtf7Ds1ctfD325FBFBdb1cEa6bG29tcAzp3Uw8yjeVwmU6NdvYJEoPbY1hDQyUXHbS",
  "key9": "4nR4fj6DtGT73PvVtcycisL6ZEH36jxuGi2PXeUMSVWNLMuQ6iFFtmVhhRHbPFJ3UdbfZ58Wqnk7uYKQJ9SE14Vs",
  "key10": "5hEZYMg47AV1rYkxyHgUBvc7eKMiwkj8chxBaQKe6R5MXWhn9eyRj2qe1F4WfWwEhtEXU3eoyoAiHXACE78rSzii",
  "key11": "Jgo1mbaBp3buXmDjwcEbKXXGTsan8i2jsmQ4E9nAQtgFGUFRiMeEWHZkRBr8BSij9pgcpQC5wkHFmFYVMP73GcK",
  "key12": "58DJEQW56k3zbnpD6GwcL8iF4YpaBqQibqgxpEQx8xUAh8BTJSomC94FE1Zo4X84Gu1nHAVFMCxUwvm8tmcP8zrc",
  "key13": "38vukYfYgstjhjgFFrXNoRoFVw6Ld2gt2DwJe1m9XYtzm6erfZUaYaWwccAPdB2TXYJbw6XmNcKKb9XiHXqjwfV8",
  "key14": "zctTuFVUx2Z7ctDYc4KS21MVXR2xRKGXLPUkLSBzHuzGKvJSQFNhMrnXiymQe97zcKijGtokDLPHKVU14uYjELW",
  "key15": "54BdmexEh49c9j9eZhjbZrvoREwDzhV2qqbrx3YYnMk7aPGRvcgPLuKWjjEKcYRQTSgvg82RwN9S4qVVUSaQcPGQ",
  "key16": "3m5AppfnUbPNf798pRXpqpMgbFdsDiuAgK1T7MCqvdga3xeXkiqfYQUvomXYYXVqTDC3wyTHLVfnK8yVgqfcphBc",
  "key17": "3QZpcxg5SH5mi6TZCFBsa5mHYooc4w4R9Ud6JeZLvi2o3qFAYm8VXFdq95BpCnTGJ9zRLwgpCJroR1ZGKKkiJKMR",
  "key18": "3EoqE5w8GkkzKfANkNWv6oXY995bDqeJAEeoL1hqKTRPLGCemQmuZ55m4QSsyecsdxWuaqRY3F2gLjDhL149wr5t",
  "key19": "5qeoei6KGzUEDAFd7QCn29Mjj7k6bNV75VPLR1u4e8iGbeTTrGUocnNSqeHzkkgG7H3aRxQJ2oaWwRcDJjgnAWaP",
  "key20": "4Qj8yEi5EMwQK1rvNaU4wGHVZ4FfNW9jd6FfnNM5jyezsmNjiFHVGuk8cxNdunRBhf7V7u5z3E4HuJtC3E8ZoY3c",
  "key21": "3UYhcmvo39r1mpmgJV2hD4bHc5Ek9JWdYbatZ2y3n4uMpzZhY4oQ1GA9JaeYrfkSJLEw3LtmsRJ5sRySiAukRpSS",
  "key22": "Yb7pE66j498KvyeqeFSaUcLmeijaS3Hujes8iFnodojoo8bK9pXwaax293argKx22NypX43vCNZAvYTSzjVFnFk",
  "key23": "2noveCsvjgd6Ms4gXkLd1e7ayHeFcWnLeCXvhbTho1ASukUSpisjFoexvmm9Ez4sS438AoP69To3Drvay9zoPrEA",
  "key24": "3pyPHgnCHoTzQeXHoYF6zKEirZc2A6YEExXDBAYT91xRocP1nnAH1MzsCt9pjVbuFVvnYZXXooYZEDnZFRyKrVER",
  "key25": "5nQpGxAB2V4Je7wBjUgGAaKAPcMu4wa2j3zxeBp8HMzMy6cRHSPq34fAqhvRhTji6adWkGZncsTjNG1963TiWYvN",
  "key26": "25ZioHWQSxCppUCMHxeQePU4P5uNZ6ij1rb83Ykd1JurDwtuwATfxh61MhFcdHU8sqYzrdt6iemHZ1zgVHQvz96M",
  "key27": "Q2VRmvuNYcqzYZdmw5b7qrth36Bkx9VovaMidsH6pwGD1KKsqHVbRPVR5dQf1Dy48fyc5yj2CSMpRy7NwL7vRZE",
  "key28": "5Ges5BE6MFHhxQ1PhT8WeUPYZy8eVEWtXgynkpTvYAdqJyhQxz8ZFzaFQ1Jka2oeHytQaS71wB3FDuGtKvTyRn3k",
  "key29": "2Rm1pciH36q85JHxkCpqCya44ssWyPddUjhVcZkdRowFJEBMsqDAgu2vcL89kiznpFUvWEcJoQYQJoh24ZFWRydm",
  "key30": "4yHmqortADDrvKAiDxMyUSREHUuVc1vq1KKjSwbjULhm5Nw4cEXHioNeKZKj5z2ju8T2HErHniF2NM1vqEPyK744",
  "key31": "3jrCamB77JGDhGw73rJY5RSBZL1FivJsTcMTfVtbPwADcGQeoTeB83GYFhCYuD684HtDafwxcgy9aDep2kginXKe",
  "key32": "5ULf5Tg1HNdiTpbr8eLf2wpm8225R1ezvM7QZ6e1kWrt98dz6NvH4eBqvBbLMEnwvsFGEetRdeDybZzWLM7b1QR8",
  "key33": "2j5vJD4t91wkBzWy6q4KonA4NJHram8hEd3Rtmgrq3vzDUdW6jiGBX9kPuKUDRJ9W7XA9NoZ9djtcftxw8aCFbRx",
  "key34": "5PKzW8qUgfvskrs6z8sqSZCDhSNSn22AA5gN8UzCshftJuQPB3aAzjF34NCQjrs24Z39WGy87B8fbW15xw1E525j",
  "key35": "4De6weWKaJFJTnRCUPn118TKfETJwF5rexHZHXDgWBWVTK2yyf2rWdYJDfcNGZSi3eqNvk9JLSM52kRR63QqZcZb",
  "key36": "2rhmvSDa69Pi6q3yo3WRwbSeJ6s77F2vp77s79Upc75o6SiqGX1QBAS3c5eGwy27fytMnWDnCAaookGQUouWCoNN",
  "key37": "3EmeRFYdcLoRPaUmV6tTStxe42n26nCCjifut4p1NSvtoXprc1f3DcmJ2Yc1ZpoTVE8kTzfWzyURzBo619pPnonZ",
  "key38": "3fSyraQQZnrGuai4jgf5WAH2SMP4rAWqjT127zRwKfQ2EknepbqCV2iQ1TLTVLtQ51V4pWieBB3KrLPPTKHMnRHd",
  "key39": "3xoftJHX1FEMWxTmCLnr6ycLb4MVoMfphmyo6ysZYGT39Hhp9BJyf6PBB7xinZADPniMSUrkzTZdMTZ5ScK1RM1w",
  "key40": "2WeYoCRfWSgLr1uVLcR6rD7RTS7yV7qMiJro8uWXDz6TXhq7fhUzXWVYdqp1UtfDJX2MbyHR6kiqvUwo7sk8aYDR",
  "key41": "5gPgycQRvx7kgBj6bfHCKFyPWP9xyyMJD8tpZaGEoEUZt1369A8zyEf1fCNAAQqvSRzVMEBtmrdAsRozrEBfBRjP",
  "key42": "8mz1v4ht7kXx6JrNqPqJ768m6513v2dbzV9WAG492Ghm1HzCAgHDWUeKA3a6siSVjRTEzk4dX9fMSjNcPHeoZh9",
  "key43": "2mhZbjWWNyca472UcAP91ftiUS7iQmMfMJx8UjJgjch5qcUW7qFFSHXkugtowLVHQp1vgmS4GnnfyopaiJMhunJo"
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
