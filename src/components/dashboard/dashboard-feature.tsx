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
    "YRzJAEVTaNVuae3vKL7BbamqErEqb6HJrABHjXZZFr2nRjqYGAgK169c56jY3DVy4kPhQEXHGThpWFD1WHJfeUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VAsWRqeUQ1PoVDmnfMtaWhQocujHPiRKGTqLpowCBGi2p3dtR8Pmy6NqyDPw4NvxdZCLVyzMQoCCVtB5mzrXbi",
  "key1": "4A6rJXnT9fUFD7sc2ZQeGykzM3EDNNWudqijzu96k9WohtoMQNs8gPjxduYWLUHpbQLc6x9bzVhV6RVrJZDHT6gK",
  "key2": "5ssiFxFFuDixaNTBGjsa1js4JQVGKZuaCBsGmyPNii64VL67r1t7x31B4NaaezEjABW3W5FXNAzU9VAZgDdduArF",
  "key3": "51but3YsXc6P9HqLMEv3oZbAUczfPgM45rTuFaNUHdWDWYC6AHF25PG2C1va1UeB6EFjGyXzArQn8LS55LCL7HfL",
  "key4": "5E5WDibo9omr2vc4JWREUetNTsJsatwSDBT2ya5TDdMXcaGtyUEaV7f586xjoFroEZw1yRbfXqumwEAbK1hfmV3C",
  "key5": "2mcvnmJsi7Xz9jaEBNuTLMRUVpprjxaWDGFHpRs4n7U6uAfryLLPJmbe6iqsgZumNsg5EqmAgnJDVdnh147puRD2",
  "key6": "3ATbqtpEMHnyHnxipAXvvbbWEzExsRr1WUVpJsxQBMrXpypqNFASthcwN8K961iNAApA8Ct292pYhLFQy1NBmwif",
  "key7": "41jdBqGrRffVM7SjGfRniTb8ohCDCkvfJyuhCgJdKheN2zsh8LSjwxnfAw2Xg6ofr3sEQi2BCMMS92v9pVVkxJSx",
  "key8": "5dkTKwAmyh1f3tEzTDGQAYRzPg4j2gVK3uSp57gu7W9pawLLmfHJ1PqJebRLPV4E77FghLiT9hA93gbHSUU3iAUL",
  "key9": "3iy5jRoqvFeuE8N7tWbf7tEcWpiqHFAUjq7YjGEJAUJqb3UYahJZryMbvdbtqB3n2yBUq8Y6B5udmKut5pjY96nh",
  "key10": "4NvMGsooKasa6zB84SKyiGeEAwioSZWCpzYBceM6HBhKt8S9SSe8C7X1G81FsG1fDKgStB7DEbmAJdcAw8Ruahqo",
  "key11": "25D4M2Nm8bHeLNKWphwYjSuC4Uu1LczdELpdYF9VHA7e6jnMh4M5UewW7oSinZoSaib2Dpn1NthxBStSQZckPrso",
  "key12": "742HswoTRzWz5nVucpN5t9AGaetkbtYdkxV4yScg3WLA3sgTrPScgsvNdgVkk6zBU7zhHCuvDBJNSzU8aabwFnD",
  "key13": "2AYz9c3pHU1rtcRiv2dy8Q6XsPLRsAGBSY5faYvFAR2zRFgYtC2YaugJkBfuHszVtoxWwUbgW16pkHLiBU2LxX1m",
  "key14": "3QoVWokyed1Z1uyGpGd7US1woQQQqmpuQsv3rbaniZboWVSkdXAUm4YE527idJgcyAsn3g86Ta8374BdRjwd4EGk",
  "key15": "5ppJLmDwmhjFgFo1bzowkKYz42PyBXEtXpiAE6nNFj9DdLNP9WTsSVPwwaoScfy9cDfn6kCZfokuRvgBtnnQ3Qas",
  "key16": "5hi8oA3pRKVWL2M16TdoYDJN4niEYim5QfeSP5URHeYCUuHqBKWuCpwDoYEubfTuEVDkc8P6B6LrE7h7HVEmgWg5",
  "key17": "3Nsr7nzSwKw2KvYStdob2GcfcMmtpG9QysaSpbpppqaLbNz4vinjmuAKdRjBkifi8FLwRfu2wkofqBqUzFDWpk1q",
  "key18": "5go1ZPpAMFvjbUfygMFc5XkZBjKC7spAVgJ8BWXR4Vj8jtcYgemvjHenMPV34i3QKhpto7YkQqPYHQTz4khGDu6E",
  "key19": "58vgCnJiYLWUg1niSTFAg2GRdcj77jhzi6dsagy37KvWjFSCFc7iAhZm6FzUahki5sc8zyGCWxTwn7ATJMEfWBSk",
  "key20": "2ZvkP5gpKZJSa12bkQ8gwX9Trj1KivMCsctxiwgERS8UoiTt8pGSRC1aZdzSfsuXGmA3FKp57y1wzXCzj2RGxwXK",
  "key21": "4Qk9V2hyQXg1sZysMdR1iihAodm2ztrNyaDUeS8PMQgnRP8F5oRajE2W3XU2QWfCv6wZZEhe9DxZG3Lf8U9oKTt7",
  "key22": "5NTQcnfkoc9GwjJ4sXvGpuXThdQspfCm2pjA7ArhSkEv9Y8nGRWychyHzyNTajcsRzmMBviUNeLsbAU6RUoRwZei",
  "key23": "burc3T6hPWJop6wZ6vb8RkjoVQ6fdu6KVGwswTeRt4WgUKx8t9LJmWVwqe2feUnnyFdw64zCKxFqmwy9jwqEPzd",
  "key24": "4j8QtkCfUnPEi4Zkid3NatN8BMquTSJyYoMXaqvm4DawcgDP8navpkDHTGADXNQ7oYXjfhn9HVhaoTWJTiyzajqk",
  "key25": "2MevEesfpM26hqe2My9UD471T573eNeozgnjN5K6SfWDxt4xTaaJgwGcGM1bq9x3hnFe5KtGhoMN1yvMm9pX29U4",
  "key26": "PKqC7rtU9CbZWWV8MBvCK3MbEJBcHJzvQmtK5DQeo1JJijuVSNqkewvycok8eVUcrY2apfgiYvZ8MfrSQkMQH3Y",
  "key27": "CKhVajgGVFEJaYXU2mirBt157rD7DpvbwXQ5r8tdxB4pWpKnGTtRTyDTfVUuXUQDd4XPb7axyVDby6558bScBDK",
  "key28": "2NcJ5vWz9i9kANgsi6RH5QpgYePLEwCG1uemWxKjzhJHXjEVfMuaysh8faPvkfb4swLLehMJzmJTwN7jqJ8ScBQn",
  "key29": "3XMsQ458FiqbcLmhUgvpPRNoKxp7u2QqUMiCMWdSnvuqckXL7rJwiT5DjKtdZcef9Dzvvn4rcDBkjy9dCh4nyHZ9",
  "key30": "4dj79etvemKnT3DzUeba1xk8s1ZVLATrrxqQhEbK6xwErqLV5Nfzt32Yw7gccrGjnaoDQhskYMir58Et56m8rfXb",
  "key31": "5rRfxFcdqLqcCZswuwNX1sdCuP8vmSXY3kDyQoHEnjc7z8pEQLifTYQyuWtx8torZJyXZW4zwAPuH64H2zJTT9oU",
  "key32": "3BVMQGpD9c4gXYy5LPCfG15pEFs3Zh1nijtnvCzJkQ5e4XrReCZJ6zSwsv4SgZnp2wAcz469xpakT7jc64f2xeZQ",
  "key33": "5J9u24P1NKSoEmgNjos9pkEHa2RF92fRoKrv3AxAfsA1rJ5dMUvbsTPJzM3GiHczdQMG1EyCcU5x39rpP7KAaU6y",
  "key34": "fw3ReVjkYSGF5aEaL7h2mv95k2vprig457PXCZCBgf2LD8gVsPc85PGqsnL6t47LbcAZHVx7S9xSpLHYCMWkqaB",
  "key35": "2VgerX3NXr9rawR8CVXVTsMT2osmYM7BjYBesUfqogLRSxHDcHj8avVFCgUyQ59ktPK1vHZPH7NH8XsWsC6mM6nr",
  "key36": "5b4dGEr9D2obECo367aQSp4SNhib6ZvLf3M7dR3NtaZ95ecEntFPnSzHe72EHoiXur9PmvPKeCqZVpXJ87W3rBb8",
  "key37": "2mBYnCJoxXarg5D8MjLQZW7Gc66AgSE6WyLNiTr2AhVWLFue3cuTVCpMTQAkM1Tk7WR7Pe63ERABKgYp47tiT37Q",
  "key38": "KAj6rvGaCHzNC7NwCCVrBDuh8pzR1gmKZmFHb1N4FiPc4qAzQytJrbYsGt7F1cdqXBa8mH3FyG2HXKR4GGHMD7e",
  "key39": "2Qf472HFvWfi7n5Am66TVRa3GXemeFdveFEdxg329KQaYJjqXJnWZSKBQv27SMSERsLVviRcHkvDitVLDU2vxLZ5",
  "key40": "46gZyunPgPvWpZu5GLbaPH1oQj8umhCzWuBCMjkRQEfZ3ZjhLq7XnAiyi4Cp9hx8sUjaUoPxoQx9ipEgZr38MPC3",
  "key41": "31vaPcoKpAmSSy3ACxBQFZvXM3TivjxRsDaUgAcizTu43MYQtskFGe5TiMBXf6d3BqCixn6apPgABK8nvwxyne3G",
  "key42": "29dmNJJ9MbtY9YQxLPzSVbaHoCQ1z1LuQS73C4dqchgUW4EpLdQ4jnixk2HwLgyG9guCKydnMMyQbdDgZ1XyZvy7",
  "key43": "3a2uAtXzkQtqLNGgkUBidY8KFbWrD9VDstmj2vgiMPaVHBCLkGGQyhJ5t46gskiCiWGEd9kxHm6kHivZg8C1pwgq",
  "key44": "5Lk63kguRrRRCjSVSRdLxSEbVSjg1Yr4QP6BZ2kEqjE4V3TK1WdLi2KcKw8t4UDCAzueSd18UHuRu2eT4FDrq4yb",
  "key45": "2RZ56BESXApFaYCYpfeq2qhQ55ksfxzKda2bybYps5oNFekJ78X1jpdTAfMtQCxjLW3rf9U5ZCHsyHZJph22VQrb",
  "key46": "2xWUpzD9G4erMJhMXJWtPfpTyCw8Rbi1CEKL5ubwTbW3zmeJ5YiDSB2x4wpSkxUEtWdzt6opue12KhQ1QPKwpevs",
  "key47": "2pHQg1teCLRRZZ8YKniidSyUfByaKonofV7d8etKZfcT7TW75akb5JkonpiwPQFpc6fQUxDcyGhxZ9fZLvY2itLw"
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
