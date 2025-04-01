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
    "66WGDzJg31ap1ayvpefqfSW8TZzScvv2WSw1bZ38ttCLZNdAoXDSA7Z7bgbbsyHDrU4r72NKYRtzaQSR92FFQQbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nNTMFWif2rzDvpGb4nho24b2ULeoKxxPBS9LZanBHFGUwhfKjK67zvXFTcng52Rr5F35H1AXqeDx3zf83NL3uCx",
  "key1": "2GVrWSvM1f7U4igYNye27Gwce8BiD8b34Nx5iAaJcGYCR5KGfvAP5w5ywZTBb59ahC9trtzwgg2EnSdrqhHNs9UR",
  "key2": "23sRacRJUHKhN2C4y4gxv7q82211ygrCeLSDgYhHd6MoZvn9JuXCUa78FaRX2HnieV8SMDYCA38RBqmGottGti3T",
  "key3": "2pisnkhnEDtQYGuewrdTRKiSMQVmTKZLDXCnED9wXQSyNiVj49QXfJToP6mb51wAhCJwg2hLHm5y3wXHBHEXbeuC",
  "key4": "4NHnJkcqfzDihZSGw3RuxbbSEdwX51Yz3i1bo77VGd2jf1X4uesg2KbJ6EzFnavmLxBjAHwpZ6Br2G7oSkZYgUr",
  "key5": "4cnxkBKNd99VWEqWZkenodWkBerSybQkjH7eVGxPsChQL4CV4sE5VMMCjp1uuvTyXZwhNFJLfXYGdwmxfgwHihtb",
  "key6": "5NZCaoqY1DA1DuGLYogRDdoRCEaVv1xTX1WMbTUzyjCRnHWRbnQCnG2tbi8UyK9stXAWouhXKVQNLonMUSR92yU",
  "key7": "5hpXYdXdo29y1hzgM1tN6xSM6rUfuX9hJXJ7TAvveTU4BUSNt2tb8VDM3QDeARr7GPU69z88JBRDGiZNjXKp7xBG",
  "key8": "5UpokcE6eXJp8fL2TKWZHcQ4QvzvQ9ok7ksvfrEj9PuK5xupbitKTCt2cvrx4iHacKoYQKLFfuBjXCx1T1vCqWwF",
  "key9": "4bfdNmH8bvP2aXFLzoumrJi2mhnHBaePEbWphSyipuu1WY4ammXWkmjDFMzHWiok6Ven3dDtu2YXFrtcR9ZujCRN",
  "key10": "5Y81KikcczTpoj2ZbuCh5o6gPyandWqxTGPuAJ5RbmKvJV6yi6Y8ctyYC41q9SmN84KjubXiiAVnWT92hHs6tUB1",
  "key11": "3tTz4AqgZJfERRvegoufDFY81iiheNjTweoEUzrtrvtXEQGtG58194NQA2aNKY6b9zbCEhWVP83Y5xgUuyAwBrmg",
  "key12": "4kFr1ghzAzenpiTyyr9QKEpPr7YH4DhQQ4nMYCxZ3nueQTbZMCvVxG22WUGepowXTnNrDjTSric4wHfQce7opUXV",
  "key13": "3xRFMWmbfiXEEXCpUTSywaGSxVCicKtNdwNvbfWBjQGF2QCK5JXYjX3Gfh1Dq6cKMaKjefoGFEUQevHrqLF86T9t",
  "key14": "39EViQT55m8Nc9NGdaMrvA84DWDuMAfHB6Y6cS8yUtLwBBqGoVxwhTK7tcaud9c2tDuBRmFCDFHJcRV1J66SrfXd",
  "key15": "3pqbRx5EBt59usyxcgu7UFSWudPxZvXnGgrUyFxtBz1twjnYUcankGUHjC2yXdnVUJJwyAyAYyoSaMwDBNbuxU6N",
  "key16": "5gUwvh8b7XDHTszchmz4BiWa9wDyS5FxRqnkgestXR5eNhjyixqfbNgRTQJhJuinMFDRXYoxMnQS14abgu1DyQF6",
  "key17": "3tXy3w9J6vXQR3s4KD4xwgXkvaoRs9dxuVeY6r9173zqyPcPjkMeHvDWd6WJdwxD3wAkvrU9Zgz2eb27n8DUimXx",
  "key18": "2tEdBJEeZKEK14AWKqsr23SLk9fU7CWnVmpGgCXgj75uAs3wo3QHjTLwXoThf6EbHLGFidptv5SK3VmPcaTxcELm",
  "key19": "4FeaQwU958B56pVntLb3hhihQe3uKiPp3FWYAfzqLjCufrVgw9HXzRenNERWRDUi4yZRThCo12qtwvByxZy1KB2K",
  "key20": "61HHcE9wt9fmci68NR8S3R6WWH1T6ja2rRSWvdPaekrR2yEn5XvmtwFAvPBzafdREFpR4eFkKxRf8BhpEk82ay4w",
  "key21": "4vUYeiSJQb4UGb1d7VendBoC7uZGqXo7YZb6vQC5mwobE1mYHVqAHCDhsRi6mGvfwGSeBmbtUBm6JeHVLnGPGnnS",
  "key22": "PFun7ey3osLrF7rJiXHeBL57AMzzXorQHqZk5zyFmQB3qwXU7RHM3FmjBTrNoW889sMC6Fi5uHNcCTXa7FgV4oF",
  "key23": "3adcF4DvquyUBVp1Q9kQeoD1GDP1NZbSwQNDezomKjc8rGveZr3yRzV9JBhGKhU9hsYTUnLtckaAPnEfnBqhdgoF",
  "key24": "2sRjJgr6ChtENCJMPyhq7MYPNRisSnCRNSgQdtgUbkoTgJ6wZ5ohVTX3rKCrUZ8X9YD6eGb1MKMFELXULP4DNEni",
  "key25": "3r8gpZeni4dfGKBKqHwjfL8WdXnXND9XxtXgsKxAdUZ7AAsiLxGMgtFtUfGaSjz4tP2pmagtTeR5E8HqMNcbFQU2",
  "key26": "3wUARu7r129mVqAZbdkvtGkzZrpBfC4qWMwtNcwTkYo5wL6Zgx7Xr2QStSguDAMDP3GwiueALuHHsDFftick9RBg",
  "key27": "5BybWoZFZq38t6JxxNohGU2w3gFQiDo8QPSvrUAL1jDHEzdrxoMieh6MkQBGZ6qo2SVEnMBbQAvcEnwCzkivo4zp",
  "key28": "5AWzFXFvt4TZdmBY4DAerCFRYVxeT1WxgtoPA9G7eoKggMG6QxPFpcicNzwvmF1w6RePNeHLmLgcd4NpDw1t6Zfc",
  "key29": "3sfNQ7Ej9yyYu25EjesLMgopESXuzjAdBccGpjdA6BA7kFJg2aB4yHFVWVqKhW17GrKRa7V9rgEWzvg8ynJJDg5e",
  "key30": "ny8KF82K5paeXMtm7s7x4iu6SioPYTs39KgGzAr2EVfbu9VcTc25mARursKXNF4ZzCjPT91W4BEY3B2YVLWTBA1",
  "key31": "4yi4tWTFRpdd9saBtajstwnFNmSYcqtgvNygTPSL3LnecTAVzrFAuCQpcAN8UBkzsBMYcfX6Bjro9DLe59NeHfN7",
  "key32": "48GHP7zh9a2zBtDgzoNHnQufd7Vb6U545m187JHkbZ3NQNd9RMSroQdYRQ1UNen62CKj7ChT8gDy5xDYTUfkYXLs",
  "key33": "4nHUvyWPftxtr52rM5wULsjb3f1WWuyykkTngedMtDpRdU4xYo3acLszN1VE34r7a74tpD5SnVD8SJuMdTXJaVe",
  "key34": "5uCckYnoqSQb8GmLoTAZfeF7iU5b6LnbG216Smf93i86ExmKPNqq7aMrJGeS9n4njxrcSCcji2SU57vciEP4ULYc",
  "key35": "33N2epS4YsgEQkE7isBgYLZSaVwSpjJ1k3j2u6tdoTNvFgAVQ3zNeYSHpQMDXhAjU8WA8omoFFXJHgR6CkLcbtKL",
  "key36": "4GnDZ1Z1L7FoTRavvgNXcC9thvfZ7J9eaBQKtvJ9wZCiTSvnrA4SsKQCBKGxUmB8mPLBg4fMqupdvZ381H3oRfs5",
  "key37": "zs9phz3YA36bregtuu4VpEpt2UE2iHFdSHrduFhLRDyEVCgxmEsc5MoBD5652bxxy46rxGTX7x8nnqw8FBxm3Di",
  "key38": "jfBMhibHtunejMHnwBqzkpWdkkGwbvJqLzmPNwEuN3amnhS8X5n9hvRU2qoJ2HipLTz5u7rh2ZPxzmk2KoQ3Yq7",
  "key39": "28BYQn9ZtUmT8kmcMEyc3Fe6DagBus6xPkDwZYUNAGQWZmF3E1oWVWpqoFsXwWevNfaStMd333a6kiqFiMEvbVEi",
  "key40": "2LkshEBECP7vL6AzwGrwZ5ts96Ns6fQGPdNSYhSGAsNWjLJTm9fsUd1QadWC6jyaZWnzT2ZwUjSNhK5xrNWdoYvQ",
  "key41": "2HpD7h8J8QZmPQn6ZMSTC57yvFZLe4AJ71jWg7H1PZ3vW84oaxvT6zC7DUy81tDZrYP56kwnjJ1MyGX5Hnx9x3jf",
  "key42": "2QNkvUfGJtB3fWZUt5wT7E1nNyYcNueztG6XersY6Xd926MK3WgeYpMznZhLBDbtmY3eMtVdobooD26MM7vLBgFQ",
  "key43": "2JY7uX3QmToELSR9iuFfj7RjMjYBMVoqbi5ToW1XXiqtk9XuzTuiV3WUGeTZHYkKoj4sMzD4fyyp4XTDqXA91NVo"
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
