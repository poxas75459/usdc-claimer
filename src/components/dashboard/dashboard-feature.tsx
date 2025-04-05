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
    "JUJHEeY3F75FqLhdgSywbtMLud5kNiNbczaSUyiuErTcMrvbCZpLsRtf64Nk4Ab9PDmGFkUYSKtvSaZK7whk7gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ixAA9nxeDM4ZfBN2BfCAHuAi3dxREHQZXDAHf8gL5AavFxCpynkjDShgpnRB9bsi7nJhPUaPJ79mJKunrFCB5P",
  "key1": "2uLyCTbTr5U2ksJPSAfBKoXxvX82dCzRNXcNyBtFR6FfiKot3Po5V6UiyErLAEfL8gDoQAYRoHQZwW1rzRdTh6LA",
  "key2": "2BLQV5DEemeP8GsKKQ2vwHsA42erUeZ4M2c4mf8VsQELSQkaYEuJahv1vPHw2ftZbbN64Fq8ZYHCdUuzUmJGp157",
  "key3": "xyxTRZ16TZY8kGksG6SHhJwGNU5ynVEigYw3vEkC7JaXamubJeiyTcKzR8hx3mvukydnEs6rH6hnjtxNGZMeF1Q",
  "key4": "46er3TxwL8um24LpArRCQ9LoaFYtGodU1GKe6nfPQZfsTdZ1mJQNJFGFuAQWTwcuXYt16LHWWjxEZAftdL6Y68H4",
  "key5": "4CN4Bn5yWuyFJrucakEviXf9gRBprXiKNw637C6SGFBvDdqcSBdc8VqAFsknJAkUa7KAiBuBazNGkuTxj3ybf87j",
  "key6": "4RtMC7hBf3QsucVsEeCKRXDguX5cvSyxUQ6qbms9s9QU2GA6ugz4E2tNDfKN2fMHhTmyXMt87t5XvfpEuVAkMN8D",
  "key7": "62MFv8U6avztmrZhY4xN4Kttj1sxUHwbq9NC9K5zqm2ESkZ6wevMxouALh5sedeH97aTFtWXDSWRdyT7WE9j4xkL",
  "key8": "29nbB4XcTnjDxYCkNstLv5hudcZUUy6ZSxpvm6DYttZGisCu4UdVo3sQCSKQyZvB26orgzVZJnTNttEAVHsdppQB",
  "key9": "sRs4e6jgD6Caj9UftK715fnwpvLBz785jBZuEkukUHiKZzzqjHRWNXJkePKRNFQ6X4nRtbe7EMLUtPtkrnchcfp",
  "key10": "3yJDMpRu3B8HEq2u8utXHqwNcVHb1sJeSE489heW37vEUesLKH3dYvrWibSajqHQ2Q5kD5cmnRfGxCY5VVyfmfzb",
  "key11": "3oS3B8sRPXg74mfMMcNimdDD3WJPuA6oZLdD18CYiyvPSUmRFRxsiMLVLo6SobVqdL2mhcBo6UwmnjHaonzRde9P",
  "key12": "5nMq78VQntSbPh4iiKTg2sLCtnxZHik9yNMgXygds5xdBtwZDqHyoykRw499z8b242d9WjiHcHKjYtjKoRDrJ3gU",
  "key13": "3Y8vAzsTP67XbpQaESKxLp4Dd1nVxDsHreD3DwFCSM474LkzAH2EMFybtMzhhDD4GWnf3NqSMHDQVBnXGT8NkhdP",
  "key14": "46NzoZc6dGZyhhc5NkuEsD1MMQ4jmf7uXep1v54kQ3YjAVr8kehbcy4Yg5eWiGcrqANB4dL7u5GfFAM3aEaxptEt",
  "key15": "WyAQfa1HZHG5irngPVDr3TUzhU9MKfmcXfBnav9oYfpcCpy8vG9HMEeT5ey7L3DjzF8NjC1FdGLBTKcLWABfZzF",
  "key16": "k85CkNieV8pYXVoTMEqw9xXazLAT1nMhPP1di3R1k88G2dGvQEs1VpqFv9mSYmuK74irCZFeP2PjLmk8XtKfPrv",
  "key17": "4AyUNqRio1WABXXaNW1PYGq4sTgYi1JefE3RDt165fcjmw5tgorDHfUz1MDLUa4JGB5ewpFcdoXNN89QyQws7T6f",
  "key18": "2NJYmRk2kpaq688u9DUrTKa5FVJ167HyvAdpiPwD9PeXmafn8LtGxEbA6qNub2wj4e6unokUQAbi9B76DWCuqjYq",
  "key19": "3Lu3pKjZsA8HSTAqH76659KxHc3tpLEJfVVpQCeBd4vDbV8k1QPXpc6ZBb4YV1SJ53jm5NssXagjQLeWVPSCdqu9",
  "key20": "2PbwQ7PyP9MpaDvqy8hZMwNWtxq1GkFHCXoERB4vBphSHCLxzcRFRVFt163ytVyuVwz68WTzZ17F6VtvS8NRiRUC",
  "key21": "3pbKEsrQddxjeeZPbPyQjNnu4Zrb5gWfLTQC9ghAHnvBPWpajr9u1wNyQLK31AQNpJzMbeqWpcproNmNtV5mY8Cn",
  "key22": "xwugJQmFmpCC9Pn1n9RYiGohmVvvCPFTgRVRtydH8z8MBZLsaFUmqBG3ckft5p1pVcsAKuaUiRh8tMWwXo6urMk",
  "key23": "2NShhic2PtFqcwXWZikjMj6rM1deAaFEHCTta9pLMEtMDyxwxCtSt5CbuUyvg7qPEiRw4pUsEwDMuLYeoyPeysPV",
  "key24": "5wzL91szWg4YRRrWzHNaWg33S1zR8E5ZDdwv4UaLtK45iu6uXHpF6AXQwKq2j6cUHbM9HNgbvQH1vFEbsAVPriKh",
  "key25": "2P19wnekhTE6zdfvdyNcRdrgdTRfHpC3cMrwfYuvwfN2A8zJLZkju1DwaZAApNdWieVvdGjenWdwg9aUUSG9Hz5X",
  "key26": "2PBAM6nAZCNQU8Xxyq6RZLEEMrjhtZXVpPTNqQ17zm3ByJ1put9N5qP6UP5qPh6Vh8926iqTQiywD5XZEmnwzdnd",
  "key27": "wrbbvABVNPJCroxFVBynrYGgbWQUe2pLhKTxWGFav1RoESRCrVkxZmkdJETfnpjbWcYzTVEhSLfksJ2v5Ne1R7z",
  "key28": "5ErhsCnmJB1BBww5mzr2fHYMi34SDjbyREXPcjziAUhWMKSGyUhYz1HGREVCDxKFPaLqPVih8xiaG2hhJH5dRSE9",
  "key29": "hFn3QYgsrB7k5tfyhSBXbn57RNRb5Z1Za48uWqsCFfSm4Rmu56fUMigA3zqYtcragk9EUXu1yjxz2J66yWcgYbp",
  "key30": "3n7Y5BC7SSTnjbVhVSLvYWkLNyaLsAQdgmFfLzDC3anLPvkc2VsMFqeY6Jjovmi4xRFXTX52XrMDPe2Yj1tPYCZQ",
  "key31": "3qU5Wb6CpGQvWDGTHeJ5To2pSEPxx644q37p6S1Qpg2crcnVsVkbSPMiYgwmqaQYbrnrigq6sg6cG8BHBCRh6Ppm",
  "key32": "27hWuA7xjC4ehEF4VbaVEBXYxX5okM3FPr1LvRcjz85WbqZjUnurFePUcrVnSae5ML6cdt8KEQ3QCipdumZNVU7y",
  "key33": "5VX71bunyen3XJnCQSfv3p87Jie5CJWGmFnxXKqZN4t5FRBv39k3qhjJrMeas8RZkQySGKjTcqXe7jJq3gTSq8F5"
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
