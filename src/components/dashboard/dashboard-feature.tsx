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
    "5aSJPBYY8JF9k7mxgwkuDpWBUEnXsVCy1d1d52L1E1hM36KhgaRukcexK2b2CHFb1y6oLzM5tSwNoS6gLjQawCJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s57EbcBApVsAsrQn3t9bW2WPJSQyfjXivVuAT6fRa2SApJ9HTi4sdhikZj1gLFU3p6UATm78SYe73bae4akF2X",
  "key1": "3qfLoiJ735LChKRFqAK2QUkKsremB8S3eBJbxQozopU8jQX7wVbEpMfsC2tZfgNiKTHMyhKKRc9AKVJytygRJJhD",
  "key2": "4VWy5shK6ZNMy3ob6USfp4pxvg9Hay5T3bHN3hYoCRq2NMcn67i5SRtbYVEtgA1SdoQgxiZz3HP4cKNyhrk88cNd",
  "key3": "243zH2cdGun8nSrAzDQvSbzMWg1ZXXRKWR6jpnB1nypw2d36J5Jh9KVuoW1JWUrPpEHnn2R13DvBHqTuYVZD562v",
  "key4": "WEBK5PEuupNnErpXxoK9ZNYiVLCnpFbfVUMyYgSy2e79R5xsWd7rprQEaLjBDz7353ypY9tEMPehChrqjcfVmD5",
  "key5": "641pDxag8xp4ooL7ih4D5oJjQpJQ4C2Vr7WpVZoMQ2KjgYN8VLaKig47ya9GeMYRzNaQgBCB36pPSJEMpiGJ8f59",
  "key6": "GNwP7bLEMKKQJTgbb2SToSHR9bKQQhMuiGzN8HKc2rLUdshGqH8dWSkqWjF8B2zjpkviGAMcrgWWaK5oHpWqXCF",
  "key7": "jxb6HFfw9yqJESXmLsHMb7WnPGgPkDNCvgxi9WVAP6ow9oGVX1kgDQqTPH6DQstaQgYfrU4wyAnCuUYNuxRDaKS",
  "key8": "3zkCLaYcZJcRHQfzdkWkeJ4sJEKNmfpQ1USTcFDjmA3zfQawub63Bo81rtDDVmmSL784WkJJQWuovnUz2pLHcrvV",
  "key9": "BJep3iVjmFxXMUWJSeG3dsWZjx12nK6dfAV2LmBqDiJGDj2MYFFweLNvXGvhQXvdemme2fz9mdub1NyjnLj2F29",
  "key10": "36WEkd4CaKyyd4R9EdFABTqFdQb9ZUHnVYZs5RdVGgJTEusJMzH9qfL2cZifFQLqXnULQKMQofenf4w8x7315rzG",
  "key11": "32w45mWbKHcu69RBZjCXjiCAx3VFDA1ZiJGZKCXqhCf92fNb9JR7UTKeSw2NdZabNU1pjukJeucjZtiS9Q8ZA1xP",
  "key12": "5mHDZqxaBNiThtNi6dgUTMXKEncTzrb6GtcUVAvxr2sB5wJbKzG26SnrsAWeJpAr1hK46PrNy9D9YnWuZm1H7LaE",
  "key13": "2oSCj6ckPebvr1VmUnbiRPMidnm2bc98rRgjGW8T1GdspUskLdKXWiwLYR2vzV8cu3LAR9M13LsyvgQ3hv52EigR",
  "key14": "2SHLKkJUUeH3jg2YxBJd9LbFaKE16tE5ZoiDgbdY21PdJEjbuTSxbyVHAeYqxed7BEmjmNU9Z7f2WjS7e5ReZDt5",
  "key15": "5GL43FMCidSMspaS5PneUoazcQBwPokARm6BaLXqb9dcVaEBRKNAD8deqt8MDFvPfAS5givZhoomv3tRPPSS8odm",
  "key16": "x8hPGCYtd4igG9zEwm4RwySYCvznDGBgXSehs1RK6Spsb5z29PnQuRowTMdxNnzmbDUyVYRCrAWH68kcp8PbcRk",
  "key17": "3gGuUhMuQnKNaNDXzAawvaaVQFhCqm7xdh2Jf7GagBXBhxUaQ2pp3CCiXdoosyJj4zZWhgyMBYy6zfUodmPd5Dcr",
  "key18": "3yGwSRCWwUpwM2Tfpkm9ot3Ve8oWmCy7BdqfVdotJFaCVzC5kzCMAdBb4uugUJLTDDQXyYSxca7tXsDi6GRsRcGS",
  "key19": "4gft7u2HneYhXBk2M9HkcxyBgzBrLZxngVkMXh7fwvMv7PpELBQyrd5jSJQzXhzSJ4v65Y3AGcMrHdmHy2dTt5jG",
  "key20": "3hU3aFcayqLieLqe8cR2bYoMjkNWL7d7QQg8vMvSRpR5Nzb6Ng6gPMpJK33cgHZ1oN2ziYkKJunYbSToLT6CB26B",
  "key21": "256bQrB4LdP7hYtbADebEP7RzvV4xpKaajUNhzPN28QyHRAXUcaMApXXkNFjCczQ2wQWU6KphhsTvPPzLurtGTF7",
  "key22": "5f52bmdMqy3Dn7yfZVU61545EeTmiPAo7kke4hFC7tEe3vxHfQE69mMTDZEKSd2NQMfCGF5ursZtXwAtcyPZ96JL",
  "key23": "42ypeJbtQrneGe6qmXsDaWoD8Pej7K86oVVsB7G4hCvy9b7fL6m82FHHsjwhkH56QRm2C5Kr4VJUFCFZzBDxGynS",
  "key24": "3foB71seoyhUUU1ycrYowHaC7s3UUds2VCnmbbcLotU9212wtrTxWygZqLo7odpbnTbiBEsEq8NaTXimxDb4ETRM",
  "key25": "4pTLqx5pkbhfxRzUZdmC2ohtrk9rPnS8f5bF2vb2HLzsUHMgs5D5f6JXAac58MAYygjVsv9t9YG96hdnqLHwdh4j",
  "key26": "27tV1hjT7AUwj7irUZesoAKBKCrVUhw41y63vo6f9UbTBTwDtjt5qVNf6JyzACgvGbjZcCgpR9GfC2sGBWq2Ra3L",
  "key27": "3JsvLXatdQVE6A5GnkCQf2wpSBSqs8i4EBsaCBrWveKxXPR1YLVrWxexqaHM1LDhVh2kF2a2zX6Ny9WjcVqtMC2C",
  "key28": "4KnTfS6ipabvYLPmzH6hJ3UGFZCtTuGRtGq2Wkp1U6GzDvVrx4JLAFLPriBMhDDbNANipBpgimD4L9rcDYjyd6bw",
  "key29": "4eLGTjivXvad5umi9f3mRmnr84fGDtaShXFj2sW537vLJpMMzqmSUYVCbk5QBweXFYhSwzySjJd11gej5Een5ZiD",
  "key30": "3Ac6STWdGmrUpHC5ijnrsyopxBvpbkWKbP7cgbrHkErAe9D6rjszuSCpXWQVBvnBT9xjZYTd7GTArq2DzraMv9P9",
  "key31": "4ku4LGfg1SzkkjSEbUH1NWLy5vgptYzAMoqeSnWMWqwtjMH7gEzgviFy34HmKf5ZxZFaHTDFH6YCsTWyLJpwpgw1",
  "key32": "4q9n9SMzUdkEPduzh3sahCMp6S1XEiC3Rybsj1VQvBN5LRoSozewUrzs7jhzGD24c3hfTxqhCnuwd2ytodtvWzAj",
  "key33": "4KzCKLf3VYQi7o97qW4RwcZtVnzihfnUWvaZ1hE1v1MK7exZVpNuFtdKnRocDYSfqEjy3BkqGkynisSQhcLBmUTp",
  "key34": "2ZYyTj6dF9YeDMGm2ZuHyhpwWuToDonRp9iK44EDXBDoBa6CVGB9Rbw3UjJifcm9S4ce1kqM2AaK79dQn1YF6Fgn",
  "key35": "2jS6xtrLNojZLzTDpmDRQU6QZxLyvPtXzU7d3SHnF9un544aUWcBgUsmjQX2kBMUHsz4BJgogt52u8ek5f9gDqbU",
  "key36": "3iJRcMuNoNdkF31u5y2ShSjhHr4SrcDG4aSJWsGXisGEijB2EVPQ8TWDB2YEFu9TevUrNATcRvHzmrchpjy8TAWJ",
  "key37": "2QxAMt1BxcrsnWSMeMNRXEzLCf9urd3ZZg3S2uuhTkuCEnAMBqCCCyDBufz69F7Xgx2suf9GmVrA7ZyVHTLdgrZ5",
  "key38": "2eyxufmDyD4JDhdG3V8DkjQx2q5PktLLrE9KngHMcrTX4Jdqa3Tz72idGXc15ECeaPSQ1z138BHkMerLcWm26zK3",
  "key39": "R1ZKJirCVNmz4zks3hxANPSR913ebdTy3zFzJsu1Sp4wbcpiyfCu69EFaKMVxVYFaJFg12QTuFSFc6r1k3rpA73",
  "key40": "4Q1SrvcUCvqquy82JuzjP4mLxQr4VPMFJW2JVBsReWFxrQpFXcsyXRsUinHSjoKdiXThVZeitH4d6Zp8Txhjr5Rf",
  "key41": "5ZhSp4g9ZuxuqJLtti2yUFSXD5pggS3M3a3WMSBccFx298uNU4KpD76hqaBNbb4dALkrJutHW57Wr7jmmVPfJdbN",
  "key42": "3hgkBiVWDLWwGKPjvjuvbHMjGffXNmYqHWXJW21D4stCgT7MLJG85McysgbsZurSx5ogjD2gQpqoRqWpHd6MGP4G",
  "key43": "VyAYfnxanheqCRTqHdkFoSz5fAmQVJmJ9cKFUCmJJy2DDEMK8P8KadJzu639VQEAXA73ZrX2Dta3smDufd6CEgR"
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
