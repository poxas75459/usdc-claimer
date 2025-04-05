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
    "5CMCnu7aTuPtqnndJh2jPDJenSNPrQCJdmrRBmZyoAjERneNDeyaDCGMDNZfdafFRCQ6vXfiVPgeYc7g2KjZHJG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrgryQrUTXGNibt5hR2d7CKxxLTTRaDowfhu9LQ775GV7pSiHkc73qYRA4LzjdxvmVdszX5WhL93MyvhCzLxBiv",
  "key1": "dVaseE39qP36AP5L6j7pvBgrqnmBNwHeVggbkyBJKQeBUyLSvSXuQsWLYRHCx4H4cvp2rhVE2Nm8obqQDMkosAu",
  "key2": "52wugX26MD1vwTkzLGNun8LmXGPqoJfxSAZMogpD7p5txXkVPqHPaKhXzvDezWWu7u46gxKxyt3XZZEnf9P3QVy8",
  "key3": "2tng6nf64PzyupUMMfid7HWJUQcJjr64uLSWSGGWr4MwEtUkUu1DGgNFvCw84w6xPpMYD7EueeXhU3hmyU1TSH4x",
  "key4": "S9aZDFR9bkKi4HzfU5cjuZn3pSLm3tXKqcwg7aa5C4cwxWfsqRoAcN1npvKhCq6tuMHNGSMXtepu1H9oJhu39sT",
  "key5": "2er4npG998Qp7iSu3LG1QDNY2UhhxiPZuiqEkqNUvfp4CCGzezj7nXYQ8RnkeAatxVczr13By1A27VTAAuHodmQs",
  "key6": "52w91ChPqjYwvYinmH5PSC9JqZZKEFgkNJDL7hEmRd9th3w46WqmJFqU9ouDWL5zDyKN4Def1Pt65jSGjD1hz9Ft",
  "key7": "3qz9QpPKigZnQjif3eQEhNRMyKowysGHKBsmsMWgKr7pHpCjkHvwf8gtRfDmgyYbKuNiY2jSQX1xjmmruMfa4akd",
  "key8": "5bT2CLGHcxfaL3bJEcdAGZFWoW9eBzvz6SYbmkQm3ZNEZUQyr8DyezK4bqDkMKGNyaSP774MqibJd4KZ5hpD8ctR",
  "key9": "bwt5eFe5KaqajNkcCFHYjrtBtHgLRFRrpnfkVLWpqJJg84pxcFyXkgzj9VTuFsYr4w6c6hCpp7aRtjfA8n7aeui",
  "key10": "4Vud3jb1Jn7oE658f7KiBwwYfvgWHioVgMZa1ECAZNiEFRZGv3uyx2Dy3fFe1bWbkuSa5CupEHvoudUchgrQ2yeM",
  "key11": "4NrSgTaiUTPTUUqsz1Z2ycfFRKzddjwfWv65ZByzCoNbqh3yRqTkK4XH2GsEybt8s6gni4wYDRrXg1GH9PHsPi3a",
  "key12": "4YPaeYrhzod7v2y2FkujG2yBW59JZ1QRWQLCTzj8jTHAMcBtDzGnRkB2pjrkqagwsQ2UqhDNhLcD5e1XsDHFyZ8n",
  "key13": "gLtFNb2Naag9wAky7RTXiaUrPemHo3XqQ4zRKbqKjctQMWz7Jn1tcyvXTZfJq6h5jx7pTxpCMKu8FkmUdh9XeZg",
  "key14": "4BnTDYCugUmhoi3qZnTSzK8cvQu4pXoHxVMzCx3wLsNQEr8QjYJnN9YxK17wFMhygmsPAXhYFpRS5sm2GGdRjj7c",
  "key15": "3auHvRT9ykgpRCmobFgtFx6anUq61u9THzkjus82RuGUTk6poxJ6tVWK9i6b9YpGJt5du4qJkHFKhmvG4Nt6Ldcs",
  "key16": "2o87pUzsoVmtuQCUNdKKURwAvZEugpCXR3mG5Cy8DcF1vxZez4HCZNRn5fE5LicMU3QM3FYr73DfogZLeznfKNe1",
  "key17": "3JMiCsVtgCih8GEYmZSNvqJJ8C6UBdbsL33uQMdb1XPxYcFyoxwkSczG9i6LArLwNAx78TinDA3Bk7QJ3LUiSBdp",
  "key18": "5KQgVzE7beCthE8eQxAsyYhf5L4T8yz7eh6avSrqe5ENmhEdPipgpTwkyVHSoPcV5x32wT2VQKEc3xCV1fUHEJmr",
  "key19": "4sz8aQcFrxHcQ14yyzfyR8fcGi8Mp6A5C4tt3aheSe4VhGSULnz2cBoikExCsA5wMhb8QuvbWtSqXKqB8N6mZZ44",
  "key20": "2iov582DzhAXke5Bfi8964Ask7pvWC6rAmeLobruYrZqFEMPtn4PuH8tdDuMmnYgMrfmVX7u4k9qmmFJ1yrRStDC",
  "key21": "2CTHtsa2HfJ8tq3EGqPnYXAHphrok99s7TLVf8aHRR8nV2YEDPPDzLAr4QorQt29drtWGXMPzhyfiXZVLmDDmiF4",
  "key22": "5cQFrZyCCNE4SgU3qZkEgdSp5nUxwwybUNxvvsinbYBqoscJM5i1U7aFqbmD97SqSe5Heb7BJAzWmw7KLzW72dMj",
  "key23": "yQjxs2iptacujiYi76KEwiGp5J4a5VPzpAWvzrw34t3Kk3oyzSrdPFA8A2xiC9oWSw88gHd4AfQ9wR3nRpQDV5c",
  "key24": "EVxfXA9zE2hUo8wKodLhN9spyhnC8abE4E8zVaEPXJUufnzRHhWviWUMgs7J1acCCrU8C7NJCzuWza6imAyttvP",
  "key25": "2MKs1B9nvpNhW4m2rB829qfpHmuftouDD327qvMCL77pc2nYopDa1F8ebB3VeNeT6ruFor8F7S3M49L3ieMBKjjA",
  "key26": "4dVopcNzWdmv6Pf2wBvnb8gGbiK2mM9fLjhFTP4V5s5TWSeTm5xA1Vmo8HTQ453ZEN9LAWiW15kCSZDNaXFHGAqb",
  "key27": "2VGUaHheMWWRs2LKTwvbYyFuUCVvfUtGqBAgSfXPDFkwWf9Xyqmp3wSXcz7fddYJKA4cFGjeur4qs9zNuVoUkFi1",
  "key28": "48DArhm2qtmuGsqi3M8iRUDe6bM3eGAVdXiJz1tREsnyvLbx6HTBfrV94rrwWeyKyGCJhqP2z43GScaV3szHV7qY",
  "key29": "ViTHeh9BqBSjGGrZX1usFWJ8SeRuq7eKVzQEjCETyNW79n7zWqjDJTm98rrzVNFNQzRkHbnk1gMFgm4Ndi2GHy9",
  "key30": "5P84wYQe8vKynK4Hjgv9EhU5mRMtjSaSPpUfLiFW1RS7zibS1MP1oUqoqyr7VMpu545Ai83ciuMy4qkfbMo5YsUv",
  "key31": "5HnVTaL8ZpnMt3e79CSPgY3ykS3DM1WNdffAHFBtW1j6qcb7kTifZth7N9gchx8u3CksCZ8GzS93c85ptpXhUQRv",
  "key32": "5LjSeJoQ6z96xhMnaKXgvG6kGofs2VGLHFhqGJDZ72L5T23qMuYteY82BntGqM2ChAuia6s57StyZmUEFskcPtqC",
  "key33": "56wgcomAtPaifTzNkuBCct5vcfg5VFLTH5t2Cf8NGin84MaXSevRyCxHK9VZ72bxwmcS6eL1Q2MFXNQt9tte6Xac",
  "key34": "4egveuivb3xfPJeQt3UXEW5bubGeABBCXZ1kTZzLwMGChN87YhkEGM8x5VVbSYs86m6rWuE1uzZa6KQmDHDoMj2x"
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
