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
    "2C3bBQw9tDEk7kPJbtj3FVBXk1sdfABgCw9KjT8yjas3s5XAKvbU5tXnKG4wH4vhnYJpwWGcTbJx8jxKXiuyUHrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCZpFmbMED1PZS4KvHMgQdSzBc3szVBLhmHs4NpiR2iPQyARafQYRzxm1Pb4dvWUuteVcSa5CXPNNZE8evwStuW",
  "key1": "4QoGpDiPPngqZLnGfrbjwxi9DwiGojmUCk1Vrttp6yxHaUowgQJB44uXjQ6K6FnPhtceGw4NqT6k1oUt6e8HFEKa",
  "key2": "4QpEHAENWuWM88sxcD8fbpLGjB7893Bnz6kJKwXJBYPoRHhUDLjDCN7iPAVCBRbEuW9jnNGMXenmXZugLY8JqQNK",
  "key3": "3KXc3UmiW46HxsQFk6DkkC66EFTFEXTF3nbU5msYv2TMuHe3UAhfmAsbrjKnHoWjdU4S5YUc5DPmwZHoMdfgpCCY",
  "key4": "GVKm4cAkBTNEyroPsaMMayhRg4oipQ3XgHLdDAd58UiopThfhRSFBJvmQGrDtSb6P6o53bf6QLJsYfzMq6jSbku",
  "key5": "59cX4V2c9TDJk6d7EgYuwjCruzmgniwsnbsnn9V2jKejfu85FDbyULRbqynvQEwPwZyECrZbctpRDNUJ8cffg839",
  "key6": "5RHVujp2jMsjHSjU9KV7QPZ51QwhFjLnr8iKim8LWNSmSXr48FfLsJmPHHCXxp9VbFofsAYufxVpdi8vCoAWQNFz",
  "key7": "3PadcbnZAHe92yJrc4Xyjjr2zhfEz7KbH8tYRh1E4MKgQ1GccAQE6Cj2dm5CK5w6Zij2ss1GntqYyQ7KUJhPwb5b",
  "key8": "25H3GkmPXyaffBMCuVP99xzAPy2NHD1U4hCYEq8xR7FArPmDxc41C5nwr7JFkKJwdbcFxZY5GrJoEBnZ6KwPJEg8",
  "key9": "3xaifhZHGBWvuPAte2Dif4zojkdgkuiC4Bdyo3xAfbrTt6W6mm7VK16yvtzYTVSszy67dgma2HoooeBoyx8NKH9b",
  "key10": "31y16Jfaxr1zxAY7SdYFtUMFi7u58t9HZ7wJe76ueaSYJnNTN6R7HKiMtnPtvVCqFtnRCq5sWAK5urDVMy2GXTPF",
  "key11": "4pveNyDR11qifxwaEyPMsihsyCJhYktiSFNBeeSnh763hY3qKsbVuu9NQ8ia3x2hsQJFHuT2PjyfV7CYE51RhE3b",
  "key12": "imRYGKCVm2imnBRf5QzXNbqouLaXoAEjRUHqSyYSuNDUpYA7w9V3d8MEh6vAhir3YDPsh4oNNdoyfNTgXqMexHY",
  "key13": "3EDWYXwDxCJJnSc22BMbVqpyMhpKPzq4AELdv8tJkbotzZevHgWqgrY1BHwzz2iMzdkcqBtKQ9cm1EHL2AxgJfbD",
  "key14": "4qwJkA6d3BU3jigUtSWtZfLgxghwCKoCqgDDxeFqvqvQQVF9BEqrFLFGQDg89JafgwaaCeGNDGtx8Uvnb7ToSAPG",
  "key15": "3vYpwN8CtFu4jXnjJ8B7Qn1C5pofk5sHZRqiDvfpzh5FQ4Y4JGBviw4FQfNqCsMC2yLUrkLFoHENwmUKLG3ahpNA",
  "key16": "5Pi6oKyBLVSpxAShNMptfSs7bgcRboz8idJwciiBct7vW9sr56CE4Kb35WjPGehjr8oG18816MtN28eKShxWxXfn",
  "key17": "2St1gfqGWx4mn4BXC33ic2USzT2Gj77YXHV89y6iE6UhQS7msRawX5XBw5XdW93UvswXKzr1o6EWLnz8jkU2oU3a",
  "key18": "31gX98e5x1y8q2tAsweqkqjQ5w9NKViA8gTrgTvNaww1WmLfYXwBf1JWyQdYR19mkfWnp3DQzamwnxWPGBR4G4EH",
  "key19": "3j3kJL2iB2Ech2AuEpay3jdevJPyr643B3skQXqPT26s4g7x96ssCU1xugqMRavNVux9QzXGQhNCs9KE1pkA3UzE",
  "key20": "3E6Cm4GsW5p9TyLPYesY8uunvms55RtDYbMd3cJZxcgDgZnF3sgcQ1ECfuzsmDfNBEWfuFJ9DY8qfhYStn8jjesM",
  "key21": "24bVyKpufCojx8BVMrd3WgrPtFAGvsqPznPzrwuC6kFhkSi6WFgyEFFuZUfvBiw6WFprvLnvq1M3CGaez9pH24R2",
  "key22": "2trTspNZheFviZhBSZc5VSnMnKf4DT8K6aP6HdYL8rd1dShmPozbSDf7x8AZwDk8Dqkuzvn6zZiQNtzfWrXBtzYU",
  "key23": "4YXUL3JP1tgTpSKfRb7aB1gs3skEFhKqt6iQ18PEZVLCqpSBGCBa1YSXgcpE26QsYE6i5awnVSda4MHsY3ns5Ykz",
  "key24": "3KdyNnSa6RxP86VNc2VHTtHfpd5UaKHKXZv3qDPiwcHgPTEV4Zs5Fpwe89T1uphuxqndenqR95KGvo6wXyut3nuW",
  "key25": "5YkfcPp1chug1ZaW5ShGMAtd2qGfKSHCmi4bTJcD5DgDyCJdgPhRWpMtuoTXjw2PxaNip9EBseZwXpfLgSamSnHn",
  "key26": "5x6XQTSyj4m1oNuBTMJ2vGpraGWE8xJBdaPishxUy8g6abFm7kgDjQ6axpH7je83YSz7uPTsWCJGDtxsTSR8D7GW",
  "key27": "5BU5ZGWzKWiobmY3KkJm9eCcruqVaA2zrYmvCnThMLhz5MqG2CbjCz3gwUJQPuagQEDZui4RAGpLf2AVbiujCTo5",
  "key28": "22FrPUHaSLW1TmWXCBFR1QRCDcJmJKJnjqDvZRi9frXaoSV6UB3qGumvnBC2TB679UYAUL5VfHENd41MK8i4hCQ1",
  "key29": "isi3fjg9Jo9nXyBwuzAmSeBkVJAhDDmdNo6hnfSf9mRWzuVaAjRJiqp9Nnb35mwDBZwD55rwHqnSkTiYwNfye4S",
  "key30": "63nzoxeFJ3jYEW3DNgCoRX9fkczRJhSqUua3mB9FWqhpFgwdzk1pV2KXnzCBTQCTvKXJkwHbPBY7VRmZXopzubLf",
  "key31": "qLXGKtKfiB4uYpeee2cdNsj8hELdhhxDPg1q3X5AiNx1KeAYBSrbPhzMJHKnJ3VZEbKgDZpva2mrNWPM4WiKfTV",
  "key32": "371DtK85svScPMWwEGEhYCxsJEdtTigmXjakM8odmeKBR6vCUdQkD7P1Lv6sCyY1MRdErrNSAqwkLSX762Fy8GdA",
  "key33": "3Pcw7N2WrGF6Eq6vzkpbyEw6kzPkzSfh68rDo1yRiCE2ssMA1Fbuf8xaecQ2LMLse5H1fcKjQoFsKPksm9A2o8eS",
  "key34": "4g23fCERs3itKhzZRzTiWj8fjKw2AtDeqXZccXpNvri2v4mAQmGiQ1sFiFqLiy3r1MG5kCUhD1drZBDLv4gvRcCU",
  "key35": "3DxEvfbhn4YTTMxpuUEp5R2VSJwyPhvZ9wgTEVeZFuFXkd22mvZz3PsTdFHgrcHbrUDUWVBNhaeZSBurRT3jieVr",
  "key36": "4CJHTDAZAcuJ1i7MLSyspyPtcmFgPRLVTYX5n4GLe6fR7Sf9Mn76qQ9p6kKhcHiRabNthcNp1vP3cKz1rxFgvpLv",
  "key37": "3i21moW2WwXgk9fnirsNitPHGNRwLivFEyaHCqiSQfohZRDccCxrZoPtGzTBQBHpMCGMz1E3tuZY7GvfenojHZC5",
  "key38": "5axJRbsaY1QN2RhApoXhFAszGzkjJdCgdeQwTYuVF4DWcQmuFYA38Q5nMZ4EFxBTzfiFivLp5HUkTVZ1fL3y8969"
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
