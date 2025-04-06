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
    "4DfgYRM51yMmxLfrqeA85PPCMg1YQ31Xcdp1UYRKpSAp4yJvSgiTSos2Xz8iSfV5gjBk6yZTLMurviMEhc5TNSKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9s7f4opN6sLFfUiPjwbcZasm762NA781VxDhmDtai8SdixDq2QaJdqWxzxadBMRFGSnWdoAx2L2w8CGWkUANkK",
  "key1": "5seh53mVgfBZaJ5YgauMccjYDCZzMoivKQ4ke7VhyM8YVMNUe9CfTAEWLqUD4drWwW21aTKpseSzaC8kJybxcjXa",
  "key2": "5aEPyyoYsnXVqvgndXDeiBRJe3F5fBMG9AMMUXLxBPiUsm3fJpCgmCh1L4P1mecZJnonPR8eagAim1dK7xjmhfXw",
  "key3": "3iHBi1DtV9R3p6CBD6iAnTwyZv19pYc1YCZFhDDnz52RQGhJrwaEhR7g8uEanYxukDHKafkjnsdrwnhyGpQiWuvm",
  "key4": "21ot8aakUrbbpuV3LPtRezJCL569JbMmqRMTaCzpUM68Ry3R5nQbzYrvGCoEcHgqsahHMXXnZC36LFcKhiHEAw2w",
  "key5": "2j6XumAEahC3a5JfoTZgw6aTskrgGAQaw716PkByv9pdqWWqtBk4HCrPWNLLJ8GdnpMVbTGKKogv9UwNkfCADChm",
  "key6": "4Y5HFJRds5MR1omKKo1qfHznjAxZhRGp51qMqBrYxsDJqcmJnzco1wYfr7sduWrxg5TVFrudAfACGzDAn1nfUnLP",
  "key7": "4PaEprbqWJvLLaRauqQwdxmqtCKhGmHRdqo7m9H88NgkwuMj9J6ASdYLDjQJAn9kFptaaJ3Q28Yee4aeGbP63kyP",
  "key8": "hRBeFqe3c1RsevipjxTgVojbEUUJwFTvZMijrvYZMcb99rSNx8H3RubuTkpKTjJ1hX9qZLjrw13udrTPXrQqfMv",
  "key9": "27oiPfzeq3BPyJnFGadK49tpvBjphpZPxUJF6Gjd5bu8fqfBKsAjDjN8vSnDKs3L4Mubbrq2m81xjxpWp2BKK4R6",
  "key10": "tfTjB65tch6EyKR18LpUUpRQ911ZBd3ABEHzjdnRbL4wudS1QKvfKoA3B8B6KnynmTrR5ihpTUrg3i92mkTkHVA",
  "key11": "4P6Lnh2UTmQwoYiRaDykHE6Au2M5Syzroz9L8kGMBXXZdv3Cm9MhSbzXLj9nSSceESLr3Quck8Pw3kLyS7pJ1Z7h",
  "key12": "5n11i6Mygoh9PqEav4BfNi4z9X9Ug3A32wpJCfw5Q6z1bh3PQeZf3RFGKxMvbPrADpbzXVj5VoBWaQsAQJQ8JJoo",
  "key13": "5dLYDxdDnk3dnZoSSrtiHK3ryNX38ttW4o4W2zC4NWZuU1PZYUfGi4d2BH9GAipWZh76WJzwGASfgSyRSj1Z9JGz",
  "key14": "46pkz3PXyqCuu7qtSR6nE7qg16h5nijGmsFaHLkQhn4Bsz86G1qGQUuGVjiqnfnTEa4zpBbNjyfbCQBsgGfAU5uj",
  "key15": "58QxKTq1RNr6UjYjvesi9rXZBjs5ECN9igDdYdNcwYLh1Vw3eWQgLGeiWrDePc7Pxkiegp8zVpjuErwhmrde2DSV",
  "key16": "4hXhsXZDVGZkyF1TqyQ3aZcbnNiCGBdZEweQgt9j7VSxx3HmFxJ1jqzEJd71biaxTEkYzWY7A7naSXPK6tKwvcDT",
  "key17": "5kxhV9ojk4Nfb4x32X4Dz5mkcz5nvBTh9vnF1qtas469NnnqSqFcVWfJA83EJNgEL1LKDcFerfCAn26gYLd4KA5f",
  "key18": "5ZYJNkhP4n6NYQENVVMUXqzy3D8F3Egukzi7dHnJyJTXGN7syvk2P21cKapmDqVmwJr8pgAvPqUocfTwdko9PeVL",
  "key19": "44ZwcYCisCjeQfPr2q6N33NvDkdG934faVYk7vzYoZTkkBH97NqfwvoA3kmzvoBGgt69xQhut6MrWzEAqHcBkiZD",
  "key20": "wU4LPrRWNSzFFzffwZaYuSfibn4czLECrg5Vf9jJbtEeRnvwLW479xxNuxapRyFte874oNgFxn576xXcw5puTf9",
  "key21": "35jgqMjqUCamZcS4sTt9e8nPAECUuJW1cY2EwYtbkaxESHt4arnDyboqEzZsUwQPPL34kQ7waZQo3pwQ4dNMmXEJ",
  "key22": "4FPYaqhphKbpJovxCL6fqWv3KEprn6qCE9CaWFXmbpjGSSPvxzEVkMSUwe5eVjXcQGV82nxN32tfTu1Guh3jJfLY",
  "key23": "2KDmAdNdtTNdUnCrvg5YMC8q49GsYHoGMvv3NT4P1Td44TTmmc1KGNqhF9xMNDXy7yr98qheeCGaYS1zinkV4QnW",
  "key24": "3z7nktt7tRj1gRSa9BrUqPi5KPdiMRbWwmrQtXoWvNXRjWeCHDdLLPLnWdsZFH23J5K5Cu3SxdUztJwAfFXNmdtJ",
  "key25": "kgnDfMhk99t6vL3NDKqe6ZzfDRJdxBKSrzMAbEU944uZRRqeBLZ7cqbAgidiLSHTY3xchwTooHx7ZRCDdygMHLG",
  "key26": "vYVPotjoVedSPidUSGnjH9JPWT4KZ88xrdzz8ucdsjFSFkVCddTqhSpgb54gS9stVKwrsTxJ7bxUzWXFNhPWGbV",
  "key27": "31zhoyt2R5UtaKxWDJjjauGeypB54wmfHaVJ4JKb9ruN3qiocN6EAB98pTVL1FeKVUEP4NQByqKUmiz4KQitJo38",
  "key28": "47tgrHfjsKfjCAkntaMGe2SEVqQQ3EU2dN88493St9qKsMsc4rZhj4ViEK8sMaG9jGu4qXk6f9uH1PYixCDEVHHn",
  "key29": "5gWHDULtk6Fb76bptK59A7xq9UZGHdXko4XoQ2GgCUJJ2zphoV46vCUdCZNTUp383wu1XqdXmya9DCavkZwwds7P",
  "key30": "2SV5VDJ4UDguoiPBkvgQJ1ikETDEHvEYJ7EpwkHGnSjC3djat5VNs2bKA51DAD7vTGn49qBVgPkW5v9yDkDEAESP",
  "key31": "2QapbFUxU1gnrCiaxcRsqBkVsS7HGatqPvS5LQRNwq9FGagw6EykC632cB9rSQ3zwnacmweKHoLei7a21fbNvfrj"
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
