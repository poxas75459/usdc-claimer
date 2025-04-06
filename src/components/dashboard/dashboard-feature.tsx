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
    "3H6bDQoAmua1RPMNgSkvJ1McHjtrv3SQ5Sh6dkxfoZuQM4LnDvkgwVD5mwLcSrbFG1PMMVjdD2tiBPbHhyehVtvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EF4wS2uVFs351n5PGTrdP1eU9SrHVGtiUxhfLi9R2fP6CahM9Di5ZxCRE35DSR9PgcoyK8f36HjD2u9GhHSwQVL",
  "key1": "5Eao7atgmm2ftAJihPNuEDQrpR23yWt5vNghXRBHUVeY89aBkWGmDffifLgpSEtcVdPPS2sCCtxiL7LmxdVCi2pc",
  "key2": "3Wm2BUYCpttHxmi218AE3zfb2DxEpchSVPyf8iTiF9iB3eEuPxcoxr2SFMEJv41fN9onngcccRqxoe9aLjqircpQ",
  "key3": "3EWtJp1UvdizBTPJJD3oerVwcqcYgwhtvHDQVn4VoxXm9z9rz6rWexMFcNfMUeWzaJDF9P87E2nsGjTBe1nrzaAk",
  "key4": "hHgg9xMyNbfmHcQNbfnUjUkHYyrScBfqXvB3BAGFT9fj86dpaVrh6tVobDweij2RhozAYnEi6EBibmZxypm2b6B",
  "key5": "3uegrSB9usofLXfZPMUXcdQvtUGjyjDftCjRvxeHEHGryoGQTQgdiGeqZDBuBDDdTypCdoVrV9CgiLh8KVnyjCqo",
  "key6": "5ETmbEatpHRc7inbJy6FhMnHEmtMG15Ejttp3KJTomVK4CcQY7w2VWMivA585HpwerjVjgGVgCoZ1jX3rLJZnDo8",
  "key7": "4BgsvyFU2BCaJmqCegcr5V2qHRrSDkMHo3yyKbkV2coYWLd5Lr65yKbKxs4kx1P8sQFADgEfvYEtkAsJBRBSPwCw",
  "key8": "4bkY4hLnwShBWbGqkt5pUQsCKsCHrALUubJWwX3BtnC2ypLK1uSRhJy6wcDdpTknDRWgvUTmoxuaETBeoe6FvsRR",
  "key9": "cjP4bsaTfzwHQq8k7L8LhDhhNXm9bSS1bt9XoLFiPHyiknb2r8GTDr4x4GSQkuAYBwqBNfPT1Fx2AUUeuZXz9mM",
  "key10": "zDvLiU3ayjXgivKsCxxKNynsPoK1k9x55yxLC1uP1ksobV73y8PpHwJVA29zzQXjNfFPia6Eu2iSnYqw3prT32F",
  "key11": "xH86mhGrDTPTZskVuZ1snLq7QvXHeah6qb9RWYMHa5Re5PZXttM3yNhtykYYp1GtH8NkQd5fnJ5ZkxKpiDPZjP5",
  "key12": "5emiyBE1hUPhaVqcb4pDrSmRWm5XCrbVUXQiB8ibTTa4Yfcd72inNL4cysWP62wEqKL8ikX8KJegBet4D965Eism",
  "key13": "2bEup9TgDcetCJUKjvu4YCU2c8m126UCf5RUtUBNtduPM964BCpyvYiP4Y1tcTa4dgd9VZzB2wXEVGL8cndmhSoL",
  "key14": "3az7Yi4rx8LQDgUECZZmAVfQCdte8cmfZsTwdGTGcVf8825oF7FN6X4pjqJqrztStyAt6DK7FDqASL81KQx4Wqki",
  "key15": "3e83EhmBmoWGzx4xuLM91gBk8xfWUnkAKFUeBMZseNj4YKseDiMHnWRsfVEbsjfMXbsrSpcd8mDjNv6dhFLFn6WR",
  "key16": "5GD8ADPn5X5XzwHn9nj9RvjiEoTkVJ4ukmjAThUbAZBXs9Dbxcy8Jysw5iJdz7xptkEF2J3yPiddmMtskNm5132b",
  "key17": "4M9NfK8STrLGPRT5isxXqemnM5i4zBpSeTfoipRrDQRUSW64krQZNycr3tuBGo21RRyqcZZ87iHBUXA17aiJyfyb",
  "key18": "3cMuzcRETANgrBa9ukp1ZXnqyRB9o29p3HSBiLm8sXDTMdTo4ECvxGadW7cxgUaQ43TCTJNFbBDRfbD2eiJraGQx",
  "key19": "5VtUPoVnA9cRY2wD9uPXNBKZcbdwntZXd6AFrir6ivMUHwbPP1gig9x5vHKnZx4kyM9xSrExr2U7Do7m16yS6Mam",
  "key20": "2aWiHZzEjhv1MS85oXrVBCPBxmesmzk1SvsH5J2XH9LTuoumDVaSBJ5HVk89gcpoBxi96GscxVS1h5zovuuirBxa",
  "key21": "4TA5GmjTnVtYFiQrqf8bQxQaLFbvcQ2G32cAtDqtc5qyPEVjNmrof2xBD8e1gt3U46iBWHh33by7yCSfktMe8zPA",
  "key22": "4BoybYL1wUmqxSoc3cL9K5EFayzVutuXy24T4VR1MNnkPRVo4ardgvo5UtE9EwdNkfPb6NfwwUJdBB7x1eNZvA9",
  "key23": "46szggsAGifRHVDnqwa3UHY17pekPKpY78FSC9MREAmXhfFGuaPWax2yxwDuhXE8UykfzhDXyq8PuRsD1oSB6Qay",
  "key24": "4v2uknaCzMoDN1XatDHA7SjuJyyHin3m7BPsiNwapRXUiZRz7bUhs6xQzZps2LH29n7cnxsizpBGUzt9hR9kdQmE",
  "key25": "kCXLueiJLZXNZwrhfEBpwtyzHF4fY2DV2oYPkR8hSaY14NQbq3UC9DcuX6XAezphDxMEbsXFoWc3wX71gGKYAnV",
  "key26": "5iebDuBjywFzQT2kV3aQ2bS5zDpvoMRacpEmXQnw9PNRHGKnB1nRfez6QRNHavGcrawaSHyFW4C9qDihGRSZoun9",
  "key27": "VirEsxRV7ENt4JCjDcXL1rSB5fEMbK7nDVg2XUEmNxd3W3ppb5dF8n5WopVh74bygNyNDgTJHTzHBKvcRF5XMrq",
  "key28": "3yRL8vjajYBJRe9azMtqC8JTwuNUiMeUWPoEmTr6kFBkNJvsBmYTnxbPvaW2JD7gvQ3zv2ZrPJu9x1JLMMbNoPLy",
  "key29": "cPQuEhuYqdHuGAyWvcfugNV1gEsSTp2gRbAqDgLm12yTesnybQsa2jwbyZWNyHCq74ExEWz6RXKnkoJAHPMsMpG",
  "key30": "2Bmams1fTcPXwrD3ssrZnW25L5cXkSzejRmLUmX92RxaoXjgpVx9M1iaDHxf9aESZe91RUmwKtApQ1URxzBz6hyL",
  "key31": "55tMFn2R5ULCN2kbxEHWKNaeuwF9yedr3T8wpqnPsXQVNsY7nJtmAVkcjZ7FrRe1X66pvXoYcaiSkDdxjjwYQSc3",
  "key32": "3RdcR1Eo6eZ8izFLquWysF4SXM5EFpRjJUDTNvw3GRMp6UsvYSns6ckrj9nNi2E9bb2Vq8k49Ud94QuiFyUwAgAx",
  "key33": "5bJgFRbhaUJ8RryDfCphCNrMpwn5SSJBzJ7nVDdSp8wc2WdYNaWkjD5sdwcmbAwpw8GBsNLNWBj5EUDL4h1WVoWC"
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
