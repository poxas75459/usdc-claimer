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
    "3iQP4JiGAr5N3q2yKGdbkLeieP5RBwKoM6uq3xECCi8qVZ1QPbVX1EtpKsGkuffcXxdBUME3QFcgsTWJX5Gu6D8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7Vqd9vPoQtmKtpQetu2kA6ySBmMRiKNHfutUMhgKZ4vRnJMRF2zD5D2mFmYtDrF4ZiGRCEKghECoYsc7n5risT",
  "key1": "HbR2hjbxRBxX6JVAMy4BhRrQTxmnK5QHY8AoRFgtLBR64qwVa6dtonH8iLWqBSFnH4YNChqfYRDL3f98iaJdAXu",
  "key2": "4z3LBX43u67FtHuSWRNhg22UZmAmMnqrSwZ4EBKZjf28oL4PkoHGu2PcejHKSu3Weo2VcKAuq39hTQwkv91UXAQA",
  "key3": "5C2UfeH6ponfwmnAdd7kYmXpuAssPh1jaepzhMZ7NG7AdE6uv4m2GmHnxctwwyGJooc9A2AkTLUxi47RCyH13Wr5",
  "key4": "4EEV2ncjqbYouuDq4XHdfv9i9xtgGNPjycz2nn97BU62v43V48aEFv21ujpkuvVgKSWjuzF6fa3Wur7rWuMrBbNh",
  "key5": "4HqpXpJ7KAc7HqZeP874kyB6gDzWptvS8acLH1DZSSqDL1eaUphd7fdNMPUFKMHvLF8DGirGXF15RWPKudWC3jUX",
  "key6": "AAAfj8jEwPx9EyhJ8CiahCnswwB783HnmwtbQxtxEAECrK4zH1Qre987gUNNFBi8zUXSekfrcrQMwQ8UZ8UDn6R",
  "key7": "5Bj9WkFVgksBVVoDTGGJiFLHpwHksf1nSyxSs9q43LvGtR2mDEFRRH1GbkKGbzzAsz64iQH4dcDmdEYPCx2c6NPm",
  "key8": "45X61VFyGmzyocx7asSzQecn4Kv3cciiydmSxrSKKver2fUC1yWggUpWxLZvgQJYzmCqkrDHENqcx3kEh25sRjgJ",
  "key9": "3L9KKSx7SrTukVsMmibNtpqtcXrnEAF2mRc9rYJJ31QmEcwaKsc3rKVzzhTWMfxqoozKLuSuFU2MpiS3oFHHnacV",
  "key10": "33dSDKbm5sVWtZzqPkcNVuQ5ej6fhEpet26owujJha5jb1H8x5U1wm4qCeJT4eH49jcda1voaHSgFAL1g2NgN92k",
  "key11": "5ef4rFM4qGoWHXY8KEua7zhp955bNu7LbqNKAqgdS6FQdLBwpwJuSd3FaucNhGRs3RkvtMgArA4FLYa5rCXGrX2",
  "key12": "2namt4K8duf1qbuqzj7y9JTURokmhQz3yCSvyoQmL2ZMX2N9YdemtAsu5J11ThgGVoYBZj5R6xJ2wqnDX2Xay1DM",
  "key13": "3ZdG2gXzjQfQxuRNPkD7GwkWj67adA9Kneby58Mq1L7A1dF5BEFBtqx7Dqee5cxNrZ8ZnBnjjdoWW67y8UwPkGfP",
  "key14": "5zbWt7oWhKNhtm83WTVH4V4kBkAG7w4kT6YqiXnCGRQshiAbxDmjRWhDtbx8HJokxcmuYZJyECRmrGbXeaB9eGcZ",
  "key15": "5V7aXMCMuT6A4mqJDB9pLpFEFveDrNAu9Wa1VGYy4pWBBNYauL7UU8SkBkknh3iaWLQJ7wzzu2pTBZSpiAwn9xnR",
  "key16": "CQXjH2iQzfG1NZGTvARgLfdU7Ui7Ja74f6D7xm2TXWtMe2EAFfG7PyEu6RypeqK4g6w5mYNAM6YSC8LH4HZkEck",
  "key17": "2N44k8p6QVsz5uRjzEEhnd9Nmg15961PnnoGjgqD7b9CwukiK6cJBzZGPYw9p26ZuTqwc5zZti9am1twh1vafpcM",
  "key18": "4Lbn2f5Rgw8uoLQpbr5AWpkJrSoyHA2TEgJ5LHnDu17uWEtAEGV8KFSshau4C5QE1n3LKY9RhBSx1VPHBkWkwsG6",
  "key19": "zbU7kmrjjY1mWBc7RuzxF4NCiakctY26UzuNxXQaEk5QX8CwGd1ANYKA7zE3optw3iEMtN63P7wXbjapnNYYfoX",
  "key20": "3S6WnDAtCiish2chaqipencseRknhJhJEgYgPfKR4NCckbgMnBs9eBxvcHB4RUiC2DE8GgRs2GHdr9vw5fttapRw",
  "key21": "2BpmajDCMqeGxDMPSCj9t9UiHb2gFRHrtT3iXZX1Tkr13Tjz27iM7udsmqHp5PBeVPk1LJxBGqvf3WRKAKV98WLR",
  "key22": "5Y5ssHJsZi9kZaLx7L19R44mJB2YTQsY5hf279ykfT1qn2auf7VySjdbWPkyJ3Ehv2zLDVWPDRqhH2skTQvTi8yo",
  "key23": "2QgYeDfhepiyFpV1rSouXDntyp9GKXUAzPXLUzG81hYaMG3VpvikZQ1GauBVFmj4AZts2ZmBVFR9sovavc9ipDtf",
  "key24": "5R7pU4qhp3LidTHyF8pBro7DqX5GvV88qH581PT3d44ZUAJcxAaxGypmKbvQRv6naFHkAc65URP1naEbQWzBPQjQ",
  "key25": "2GyigcQjTmfWRzp7rgzRsu4ebZmtGBHhM5qB5XoprGGMmP3JQabNpv9bfLyegYm4VsAm95fvUC2347whM3ffFw5i",
  "key26": "3frmkYasb2CrMkqBc3CdbKXMSh1ga7LL5vJukZm7zaJVm79HRzNnTBTPGdQc6gB7nDVveKCFBajceasFrw6zi1iu",
  "key27": "5FyD7VxJGs4iA8efQXFwnpCgCN5uK5vtzVgBWihLVMFB7q4A2Cq6WrsawGJQSHdv8oPeYGhwdfiVKYyQFEj6SM6R",
  "key28": "5oCUQNjsL18pM9z6GnBPkS7YQbCbVnX9eSvmnnYMeA8DWBN2fMBS5vcWcyqH5KpxjVNVp7aC2Lcaow5rVAXZq1mT",
  "key29": "4sp5nu84A132tZWsKY3ipe9r3oQMmAcuUZ75Fee6xBeVxsKJMhf17ojW1w5ickCeZthw5Q9krqRf39bVV7cGXuQ",
  "key30": "T1jBYzk5J6wPRwi5Jd2nunQGeY9A4MxBVZBC5yiiZBWRcqZ7bNYgBvLgkqPFahNCMoXazUKAC6oVG96xTMDz18D",
  "key31": "4UhhdDMYjMzQ2tXMZ2N2qA8PPwQkK41pWft7Ahn799r5hadQBCom4Cq4ejNb1PiJxvfrMkdK26SKUgJqhnk4wCnr",
  "key32": "4XA9rArXaEtxvg3PiDkJ3i8bZxzf9rQ8cwzdkm4ALzBcD8mTfwDFgYGsrA6LWCpoHvDUwijMq14XfLbK5EJZVDxd",
  "key33": "5jfHGguij6K5DXqERcGV3mig8zDFg3DBZuQ9aomGDfPxFrvy7pz8rJ4bnBQ1HZHbwAhPk8dZmjm3SXhA7aYjxAGa",
  "key34": "3HXSWWWSZSm4Z7um88FWU6JAYsK1sfUaZrNbR5stfcu1BvLih4vtYByNx1F5BiLfuL4zWit7YeyUUUoAcEqDuPKd",
  "key35": "2nKpu1aBvHErb4UMwHV5tfZW6vE6513SjLVKj4Tsr9d6rEMTbBDvaGd81KnraZLqC34ejvq8fDPNdTgYmZoeuaN6",
  "key36": "SkPEeAuf95rFSp4GhqPJQUVzm1dytVY5XPSKACVgcvRTv7jj9zvG3AjWgbhxF8eAzCXk1RyZSwsjVKSxUqzNvWN",
  "key37": "3ju7QjmLTWM7yXQYU92XXpxkFYuYEcj7FE3hqiPpPr6kP65tv6DBjfstxvZz7Hq7eVjkdaTkxKTVTXudFHALmTap",
  "key38": "appuMuzJPBaJRLDAXvSkQcG8t5Ta7xi6NFvDtnUzKGy7rM7nED1JxbVVeDpRENhsFXjjEegWGcbcFp8xaCkavUL",
  "key39": "2Yss7UCc6A8Vxdxd2MMdoJUt7hg7AhYnDTPoNqHRWCwBtMAyrKDc5qy7AcmC4mY3TJzGpnSem7Lbeez2Rt6rmNHE",
  "key40": "z8Jad59gS87i94njDjacAHVp7UoaAzHY9XdmPFwpvPYaoVWEHsy69MBmf2dhFN6xhVaXVikv67RddUsHFhi69G1",
  "key41": "4jCNTUW6wxW2nqXYK4hfDkRuLkpnPz9DSPcF872k7pGZJPZGDoGQFmJsnVXudUKz2mRkpFgzZCoMjHfKadpAPAAw"
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
