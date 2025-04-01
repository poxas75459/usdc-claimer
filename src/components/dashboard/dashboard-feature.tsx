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
    "fWVEzjm8nJ2pi5CbVTaxnG91aGu2xtnpUi8NpwQ2FvdwN9h6U3SHoUqozJL8uZK28pao5i7LADtbpqXaFjULBZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2D8yinppgXVkbTD34G727x8Ssxxke2L13T7n1XcweRHNxu3Zwd1JhtjWBydiQKEDe39ReSKDWUgEMtnbia6CyU",
  "key1": "5kFJn1mjDtutc1YtbBocQhzvDpj1av2hiNFn1bgaHV5F2ebjXqw7qcE8YTtLBZTrYz9oQSHtipbpYehrRRQ7kJSg",
  "key2": "2kw9PAnX9RTAVr9TTxeiHj9EhXCXBtevWz1DPjNJa3NwA9LCogRaAPJfgcGNeqb8SdRPFr7Zsn6YgHwamresDrPv",
  "key3": "JsNHnMhsEfvSGrPjyEccM8qW8ftHzcRwNDDLz8NeWTEG2uoSFFMWe5bKEXq4824c4tZxarzvs6D5Cfo13SJvfz8",
  "key4": "LhRVvTCcBY6UgLXTQWLoE5hfDbWrNtAXx9SCCahaPsg2sCo5AvrrJGoxvFDZUY1p26yDJrPNYgumYzBFLE5LD35",
  "key5": "U6eAr9chAxfef31F66vvKbLNcnVFzqrThVRmPBuJVi1yYyC4ZD15UjPR1oJ6npsVng5WGH2HQpu2bWABwdTikcn",
  "key6": "31oFe55zowa7moeAsYrno7uDCYKEneCCoKM8apU19hGyMvqkuHZLgXvENttiicV3yc1gp2ddNWzkNdZ5VeR8RPCU",
  "key7": "4iocz5TRr6Q8guA9du9w7SbrjEizmQ8y68H2YETvygXqiyV4HoXnrsCaFzy4wvJrLcfy475FchRYEKbzG5pURgG4",
  "key8": "4t7erFNNgv1eVv5FHApAVQo26dJcjRu2JZi9nRc5mhqerYRZXpBBYBtg5C1y2SLuKTt1TMh6y9cGtmnRJfARAQ4x",
  "key9": "3yDAWx9Efu6CpvEkPjRQ79cBjeMYgNAFEZg5RFT6ocVHYhhkJrjocMMwPurhQimrHiQeTt18gtMuAjtdGjmGidoV",
  "key10": "424pupB5qGAMcbtUej7CwrCR7ArrNQgaRgTtmrDzKaVQfT1RiAtQo5hnKP34D7Y5uWbhG7kWLLLzLYiE57NSzZiN",
  "key11": "4nnMXZ7cKYHdBy9LRq6YzP1eGmbQZLdsszsCoHZmideRwYw4Kho13XyT1qof5HAHmz8HHxL3K5kXP9JUbtFFVW67",
  "key12": "eURPwwBtJi2TxWGVaGyYGMaBgrKdft2rjqxvtm6b7AivS2eeu8C3EGZuhLrBSGbzUaebiWpmZN4GXjAYNtaJzFK",
  "key13": "4QgXo77rWzrc8nfg37Ydetxvt6ppUPvVus2xQ2AwDxtF5gL79PmzRhSb4pgonAqWzWXobYyKMQnuB8VgPA9Y9B8b",
  "key14": "5VA6F3xqGtQ7Bc2d6kcgeK34CTmC53yDrFi4NoppBTZ6EpYgb9MXshjD3gLAsgFVwe41WHY2grTUau1Co8r2Uc35",
  "key15": "khKy6K1id4mjDmQjQb7VnrmtE5mPiPzJgP1TeRgWcXYydxkGdeff3N8knpJ8aLQg9E7hKoRdpQS47uJMR1SzVvP",
  "key16": "hricfknQfKpPZu4gkUMjMMk8d9588aHceuwvDU6hyJRuba6hZnF1K1vK6UX6Nq3uQZd5RiDSFxwWzR1hqKZqWam",
  "key17": "62k9TWmuQNZLgpH5d9MTE3NDamSj9Z8Yx3SU7kXfSF6jumRtgqRCq79jZhj4QqjCHwG5rAxtpKqFE3niPM5oDojL",
  "key18": "iMH85TawW1RWb6HiPGLgTed7egtjHHzdohfJLNkzbXvGvDPrepdR6GCM5y2NKfK1xYDd9TJqoiUbFoCnz6h82ko",
  "key19": "kFeioDAfqf6FFz8w9RhatXbfid5zzT6KHS544YVjc8MhLdmrRf7ypn3SWHdJZTrrwtGjC9FgAqqR8egVSFUHS4K",
  "key20": "5wxjeokU2DMpYuuCQJqUmqmwJUfat67baRpfRtMK95tXdtjm55gtj8VTauVMFhTadBU5DjwNMSYxeLpWALWjkcU7",
  "key21": "36mh5sJaqwDv9qwscK7ccQ2ZVPnKypXZveB9NnGsdwQiGbpTEbMbJShomdjpUtzFDLYjAWJf4VoHUVgD3Hjg6hJh",
  "key22": "23jbt7uqnqdmpezemgHPKKNhsR6u3yMKQ8Bi4YJrMASFtiqhZSm1gvXSAdCq4zswWKVA4RsvFhPDzZqKk7ru16Sm",
  "key23": "4APmRG4XFmTKBqtDBASwjt8M9jpFphc4DxyaJqAg43h6ThdDHnTLcga792t49CMkajqCJakcMxc8izf5EzsQgcB8",
  "key24": "eqYE8jAMee9fRRfYsf4sfAZbcUQvcGCymVVCoZYe58bgyjMn3JYvZoQZn4a9PujBusMKGz9xyfpEiwzJYJzXC4Z",
  "key25": "3LzETYLYX7oaPde8tJfpDJgeZcp8gtWM3fJVkzQShs8ZoSebVs1VnKjjxon3jwUH99NHe6sMmrXun3HqtLDPcqY8",
  "key26": "5Sfv3sWBJEVK91yVE2MEV6iram5AotBMx7qKd8ZwaPm1MBJdxmWfVTH8aCizbFgdyw81ZAVdSniCHfBcWqeALkL5",
  "key27": "66ZjRv2sjb7treUA8JosFxjNPhBAYtnviFwJjtMpoRgnf5Zf19BS59GVVvnkfVS4kha8HR7u3io4LkQNvsecau9R",
  "key28": "4nSNmPMu7Gg4adjxu9qcCzTW4oGDKhm4jPyPfcKQeyZVA4d43vb94Uec3wbtdncYPfwQitbf7KwSqexgBTpGkgr6",
  "key29": "3LAAiE5z8FCU4DZknvhxhyTtXbMPgc9Nz2n4LTa5ujzD3iHGLmGesTUmdHzzgTbLfn9d5ypQoQi72hZ7bAFQeSZf",
  "key30": "NSBmpM7ZmaZb9XqX3pU29SLMNqnhUpVhtQWnq3pRoBRD8RMiyPLnRumLyU6L58Ayb59zXRtE57p4iJkjZ8BZhf6",
  "key31": "QZsgV3uwNj7ASrhWSmLGQDLJHmsPWXc73FN2bJztZm12LFe1psxUBW6LgXuWdhiQUUqW42guwtnrjKmR6E6yXWW",
  "key32": "Ks2nt5UJQvqLaozPAcgBbaToXyQJ6xKZve3MnDxt4w94Ypu6n9tmVfJcxoUMQMSEXHMBJTm2dQBs5AxF1wAD7zL",
  "key33": "5aM7kJZT69AvhKeHTSHrryaGPtQWEo2LcyPgR4BzwgrpXGsVHjY8oULwUYfDAcgANYQStiCF6byB4wdu7CUX7bw8",
  "key34": "35z8YoRUAk6S1mc7JtRNC4h2Z6JMmJt4Vq2MgJmZi9uKFiCdTRdBQgJGDLitJ77LacHjzCGph6pYS9kY3LNYPYrL",
  "key35": "44nrupN2aNB286HdwRzQHgyYDZkio35ZUiAMg2pzLx6iK8Z1TE964hUMgmVCLUa4TUqNPfLZN3EDgeyJXx63WX1v",
  "key36": "5ydiXZ1vZ87PYG6DXdtFYGTU763fcN6Rysx3z6HtjYcWpBUNmoRfL5qNkBnYZYfwka6d6ukJUJyuVYQw1ndVGj3W",
  "key37": "8piCp3NM85HAgQyQc9J1d358CG4QQGgJQ2Kw6KZA6hPBThJYUgk3UZXfn481NCb6fCm7DUbGQ8CH4oKgyGke5NM",
  "key38": "3vRZiJxLCvJauw67VMUmn9SLFCkf1gziE5Pxu1qFjcxG7E9i5Bw6E5CrFgUJyJNAooh3Gf5ffNZuYid2cFjw68E2",
  "key39": "241DMW69Kx94m9fMLvJ3N9ZUSJSkQBBqPbJHsDzabQbuALQRMX8X17BKVya5kpoGAibZ3dP3S4mLCmqCKAUSZFmT",
  "key40": "3jcCG4Q1JhsHeV6ARPNnHpewhRcwcCEJriNjpwhQdn3WJicceNqSXpQVSbwp1XdB5JXsnrGN4SxTuhCzXovKJ79h",
  "key41": "3hbbjLYibWZi86T3Tb5aKLbnTJ3rWDxA8vrAuwhzgmABabmp6kDwuWvhEuT7VXKgFvw5DTZu5DNCdqkQpgXspPuh",
  "key42": "4rLpuxKAFkFZyvNiNegj4YAgmLUfscKzTF9me8WoRQDqFCo93B6gz3hJw8Yt45kr1UiQU25qjAJc7gVAizo82HhK",
  "key43": "3K7wg7niMrzUWLgb7SeD2HLpCWW47hnSFDsEojEYLqVp2YdPDiLWVKQN78mkusvjPveoyNiFz4qctYV1EKZYrLSe",
  "key44": "28HEE76H3dqx5PPo6zeaFCLjSB1ytibefqE36x1DC4zJBkYoAjdzoFqZJsesfx275fAcZeD8yYuyth1vZpehYA4z",
  "key45": "5FvMAoaCPEkcTbNT3EduSPRBU54NdPMxC8J5H2erHb2WeLJE5JHM6GyABvNjxAGWZuE6xqo9ASd3k86qaUKR7az2",
  "key46": "4TNVjizxm9XjvAqGoiNntQy4fEfqJpfwmmkMjGLqz9zqg1mkAn8Q6GQvJwzipuLuPnoiYQwkhkQhZyzcXSCX42Xt",
  "key47": "9d9DjTjuq7NapUdDtakvsvYgxC942wivYoovmvcj7mKG1RHRr9rymyCA2gRBnoi56qoYv81G7zfZ13xdFybo6KF",
  "key48": "6657uVmJVgXT5pj6PWxqNJ7NWbJSxto77d6PmpbUKyvv8AVJG5qupb4RdptQ2ZSr49XoHeaCAHFeUpSPMH1TDdG3",
  "key49": "2dPggJLQbPMpP2KDS7S3MMXZq1VcEE25Bq4W1JoUuf9YMRcm9VEyTLEGtDYLsMpM53VKFXsyeLDEEHV2wqBeLdDy"
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
