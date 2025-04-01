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
    "2Y4hHYnynuFq85JJeH7kZtLf3imZcuPtQBpdXwqZTEs4715LoTHKB77gFByXLCN1bGdPQCMN16M5vxsyVg47JJFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46zW6c3vZtJ8aAvqadzgxDtP4bmEyvnzPZcTSBiefDdy1wkgXGDXyFKZVz4KiPjAyaLF3FeorEhctnjAVX5hog4M",
  "key1": "2g6NhZmy9x3we5BKkwK4VUgXrdmewFJzeXwmuLPFvzrhqMztLVX9Jb5kL1zgKYHrah8PyLpp31GGGGdtjd3tTYEz",
  "key2": "48HPwSHy7hEidtawDhzqJBzKf1ojcLXFJGwpm5TurqUbzdVZq3pcN9bpEqeiCiBA3VNGYeeAatRCTyrMKWPVo8LM",
  "key3": "3CX7ZXCQM4S6EUUc37NwnNLoS8ptuAyrcxPmRh5ZDqKDH9BTCJK7FD6r5RR8zrimyNwjuK5RUT8zEKSvfuHcjcLW",
  "key4": "4cY3E7UY1faXwnsannpHNSKJDQMLbeszup5UQzHurcN5x8kQUunhgyBM4YQ79qUPwvjQ9JLS7FW2yEfiiL3HSaHr",
  "key5": "5gBqzr6zKphWeCEm5a1kPzkd991o4ZjfZVzmEjCdgZ5hoZKC6WbhCYHjQXSghjL4YLDxPZA5JuTRNRmQLcUtNTy6",
  "key6": "rdajGa2dHQLobTautm8F2kajwuT9mWRAH25R9NFRpan6hALpNeDLwqeuWrpuzbAds5axM4RyUUVtPwe8FLUQpmS",
  "key7": "39Yr4JLY5Keio3tcNAL2fgwfouDsjwZb661R7XaabvJdsT2mUHzHP71NRS7o91uomQPEv6B47NrobLQb9MNWJbcP",
  "key8": "4yUTvWporr6kEBbhUcXcLm8Vq5A8JXwNKVUMwNqwLPqyZX9ruQ7CPERetB6UncPLcJpTkgnyuqSNxteeoCysgXZq",
  "key9": "JJyBwv4ksuM6MkuYuebqAdx6fpRcyTmqNhCNXuEnDadYhCTUFEN4nz1nhPEu5n5wGgH83CfGiuc6qjcioq76Xni",
  "key10": "mh4qujrFE9do8krTXceHLibcJQs4wRaEcwNbHkwZTDCdY1sgKRpFj31wQKrk2yRV7VMX33wC7Bmf3T2s3k4yNHB",
  "key11": "5vt66u1PbPmAYBkUDeWZW7dNcwJLVnw7DtT3o7RzKbxvfhr61XL35BXMtof7dnFUgVaSWsSsJKrojWVf4SLBWJs5",
  "key12": "4iLZmZj7qDQthy8bweDrFTaCcJcaioLyjK8rJsVyA5muCXYrJ2erPqnmKJbjpXDg9bKv3wuCgsDdwGrzH4SQf7r1",
  "key13": "4ADwmeJJUcVoQJSoWP1xqnuzG38gudWeJWFRtR1KqCmg28FeYnUL7cFBpqtFwaoPK5Am7YQhp6y5xc6jhqSjRuAS",
  "key14": "3XYR7NxGzY76C7VFnmZftQ8vqy4MmrSjdKmgh5nhJFZQ9dgs28RLEEdqrSby9r8fza27A23Mc2u831zefpRAC6Nq",
  "key15": "46ynev2aHuBtyB81xPZbW9jUpYuVaovQsJafPznyzakv3KemjMriWEwkrbRr2ne2oNRDu5byY7waqp1PzbeKVZX5",
  "key16": "5xQ7NaPtsXaeag6VxATjhJpLzHQmahvf1kCVuo7jZG8VzejM5Q2DU9KnC89uf3Hnccwnj87BtPz8bXUkDsPpmrf5",
  "key17": "4Rq9e2iHaCvx4y2c4HWGbjDUTd7H2d3JVZzBC5UWEUwNMtK9REa6ZGpFp8F9wydXGjttMMWeJRnQPtpy1WtB6rfa",
  "key18": "4e7UiKH6yDpRWxpGDNPN215G4FCgYRsQxndKwYGhBp2RtY9LrQKveRBgyTWB4qSK4B5qRHN6H2DevcpYVM5wo6Xw",
  "key19": "29QztdEzfYxfVM9227xays2Uau95Pq5NKVXp74Cd6625PJYzB4q9uD6kNXNTyNuktqSzgT1kwC9AnqvdycLAo3i9",
  "key20": "2wYjZrjtVZ7NWKRgkyxzceFKTN6bRHinAAJVXUdaPx7aGrYwkfuoTkrxuhrnjs13qAQfwiKH1F7UfwVAJ4jTRo8Y",
  "key21": "2CjR5wYiBmPiFKamMBpEdtFQEpha4VM4gC31DSTrLBDwXn8S9JzdaMwLf42SRamL5a2gPbx2nEBw2omGQ98xsYRZ",
  "key22": "4cEV5gMUP1DDG5EpeW4FHNbJrByR8ciCrnRZdtsLC7QFaLNatt77onMhyScgu19LsyCNrVeQmsQ4yA7DtPaecpGQ",
  "key23": "5aCybvRg4WJ6J6wvHBVpCXZpC53nonmnYojWTbkhMbFHgsvMW1gNnafKSDoibyuH2wacyj12mGEzwG8G73DzuRrp",
  "key24": "3NirhMoudpcy6KeP6jnQq1DtwXnDCJJ4CUo9E5DdQU3L7odL6u9J76hFFvwFX3pm5rcWkc3TTgKziLBJcfFzQro6",
  "key25": "pbUUZobTNZPXae4P2be4iCndjaURtnLiRyEYNEvHncVM1Joa4aVCjk3gmh83jDMp8gNneMRgBV4csrMT1CpAxmR",
  "key26": "5ShmvFLYVyU23CrS9EpJUHEk1Ptc9W9nVVtTz3SvUW11cnak9UESLk3VXHSCTdSLGmrudiHMbuznnFguZxNRoWjF",
  "key27": "2BxRVRvXZ6cT1xyBFVbYyyGMkkb1ov6uYnGSC2eWDadsUjU9YBsqQnxULaQ79PGZgrHJXFVaiNUeJt2anNrZipUG",
  "key28": "LWgYv5xNUN8QWc7XN2xwydRsPKcFGbqeFGdXzSzxP1Fv2KuHQRjFMwySs3cXtmr6agNNimuVBr961qTrDbcusDL",
  "key29": "2kvPji2dE632zZqBZEhL7cNwsFGSYMrbNYMJR66waXZJyNEWSReGsMsh3abDo9dBta3ec26N4mGxia4MF2wumxVZ",
  "key30": "C3N5GyhjRY6DZCudpSX6ojDR4RAAFhpehVz15QVqC7Lk69EWXuSoHQwwPrNZ35tExp1odnE74fg9rjU1CaLxmem",
  "key31": "3c9CpcTAg6tj7Mb7eNBcYdEAjYcCGp4YpXTiwhjvndnSFGBJeuYjMCEHQ76Dkp824khjGinFCapFEf538LtszjRC",
  "key32": "3sDcGb7mf22jJXtJBGLH8AhqxU7WFy8jK7XKpD454WGAzPFUPjwzVH4avr5KDagcUdV9RuejvM4WpSfLTLT3xWuh",
  "key33": "545ScdSXTSTssJf11QXzLfMdjrCsHNtxRzfBC5wNFKYRooXvVtuegGnAKQAuxedmyfvyjWgwFUE6LSrTRWzhQCQx",
  "key34": "pcrap2iryrujtEtjZqHYLcr5ZL6CbHM574Gfe6Ephpm1eYrAuBakRbPzBDnswpy6vkD46FYiCCVLJCs4Ehg6987",
  "key35": "5eoL2yF33717bVMC21WVqT6Yn56ccX3THnDaUhZ968kpi8FaU3P7DQ2QjdQgNBEqpazjLwsFHesCKext2z6ukkvr"
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
