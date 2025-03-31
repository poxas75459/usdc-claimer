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
    "RLHhgfFbuDqCCVZiapnUt5p84PCpmkv2STvATgexg2RWKTJyMaEQUnauh14tXbg7wMD7Uddju8JVBTDq52pg8Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdayVJsnPDXMNTW9gRPkv5kKKZAYyE4s2ryGZNKewkFkaHP2Vyu6KFdJpz19oQfo5zYaLBwrsqgLQz117UAcQkZ",
  "key1": "5r7vBWcpA1Vhj8xBqDbq4ya4qZGERhjw5vWbYR4MZffVngnutCdTZMgwKFjaQ6ffArFiB5Hb1WYm2ZXJVKEPvhZs",
  "key2": "5Z4eXbo22UQsD9F289FM3UCBPtvoBi39Y7hzEM7hy964YKngohsny45UtGFfn9nF1d7hahAc83rb72RehiA23d22",
  "key3": "EzWLQ8NkfkRZVGvuabvHybUq9CPzWvFzu5chPKXQLTRQG2zcjWS3DMZtc4CEMdRRKLimQVCd7SwGTXYNzSqGP1S",
  "key4": "3YXfgkmCmcvLgejveEYzX1QEszeKCMJnQ8MECLfL1bH6DpXi2MWsnB5XBTTJhjFkE82o9X59bZU8EL7V5wPTExUV",
  "key5": "58jpVKS4x9Wzrf5Hv5nyPd2YenEVEgNjLMvUkZ3vwwC28ynYKMaktbNt5DN6gXsnYTzihzj9eDtEoj8cVXgWYizU",
  "key6": "kPrLCpR338pudrRh8Y1MW6FGTHVZsXbMHgNU9h6L7bx6D1khTXq5xrgKCoybXQdWC2qfHxxT833DzhvJXttEebz",
  "key7": "4ir7XnNu8hJAYDAFEv3ps9JxxVtbqRRvJgczNW7KfdbbZknwjLthB2sTduGp6BPMcEfwhagVfj1gfnhLHAscms1J",
  "key8": "LH6JUEzS3FJVKbX7db4Qduj88P2QM7ubh7asFnx5RzvxryeV7E1W2iG62SUHzZtEhrWMy7HQnh5bDFKN4gaULgz",
  "key9": "4GuZgnjZMubmdh9YsKmRsyxsL6t34Ckn4AGbixwSLQ8TRXXM44KqK84BPaSJmRxbJweYaH86V7o2qj6apwuEir4A",
  "key10": "5Ua4LtcZowSKzuBGupddYVv9YBdUF7z3FRdAhMjeWHYVyd4SYi8qU4X2k41rp1S3gDWQnZBcV1So4SuD3Kr8WmrV",
  "key11": "K7gY8LghE5jyJPYj947JGzkisprtAF4wUxQnES337bEeRuR5UHL1HWnFy85ein31CZ9gDER3Fv1WwDcaSokV5vB",
  "key12": "3S113YpZofps1gJmLdWXCdFymsyLZbPi36XyQssCPVm9UscLi4JScT5bSPaCo5pP6XTcnk28DX6nqPWpsw2xYJTM",
  "key13": "5dcpC43ae7nVYPwsKmhzRhV1Asn8k2cMx4wAWh19tf5t3q5UEbAj4SkVxrkgMfGArR7Aod1ZqGmBjMZrrYZVrNPp",
  "key14": "3vZw7n4Kk3E1echkV925fZDWYefyYy9zZGtDokEsQ1qFcSU4E56CCdVsh9C12paTGwmsY4HTKUy4bh6ACtuBtmrC",
  "key15": "aEPSUmBDMPgtNmixLR3AjBcVUHCDBXizpi1kpf3V6Kev3iswN8qzw1SjNVKACMxDe1rH7mRWjMADMDxHzUCSfTU",
  "key16": "4UU5EryuAfEz2epic9WVy8rdwBPjsXqwGuwwvJEtpuFqx6ZLtzY7hYvkSr7o6ornRawfzpWiHVd6iSoeFHexcgpc",
  "key17": "4WgTstP2eJGpdWHZaX6UPinhqpi9pN88SPcGp7hmErmuDjubrDxYaYAr2ERvXsCv6zQBKR1sHnd9ZCHQygXFnjys",
  "key18": "SxX94qFsFRHTmRo5azihKPS7b3izCcwzvMeTDEZUF2M7JnjPVBhtHRbCw7LbQBJzKwb7L12YFmPUUCyL4g7BsEU",
  "key19": "4c6t8JME3rkrLGc4m3bVqvwcG4nTRGdXEY67u4S3d2LMpyRTHkQNPhzsEoeSaTW3uAqP1KZnBpS1kXw9RE9Aoccu",
  "key20": "2b8svLVnPsb9cxZ2dxMjVjCpMHxhnmqvGQtJhRj5kEAgNssh73MugpaLzRnFszLEsSMuZwPmKzqBQyFpnKXnFKww",
  "key21": "3akrcTW6eQtzhDUSpMGvn3uxqMY9RQgoKcEAefvk2PcqZvJYRoRwPB8VYiYZnDj1A4jrv3QtsX2PFeSw4iARpoKa",
  "key22": "2rnEVc9bCLY8JfbeWhLy847M5fXW8fhmvoz6PYMJznvXrztJM3HD7LVo9raooxTr57UuxupN4uEWg6ddtyHEWZ73",
  "key23": "4rWwCHXQc1ndozeJSyf3HFAYmrcWtMnT2zpuusqaqEBBcyp2R7NSP9FPvgFidpNrozh7PaApTxQRv43AmK3FrGjt",
  "key24": "42VhNELuFinkRCKsn5m8TLW4ASZ4c65LapfppwtLsP8H4yibKg9WJpsJjHiyxc5swhbz18WHGGQZPidKgNoMhTU9",
  "key25": "3vgve4u7BziGkbhxzKWXo732qUoLBUPGSZH8dwHtGhXcAwtHkaXBUXTNvuXDBxFrRBJYePvmqp2jY2fHuf6i61tF",
  "key26": "3oZVrWHgkAqFWcdqVWDsq6bp7b5cpRMkwp8YAHufVneojK14hq4wS5tDjG1cBuekU43M5EujbRCXEiXNPQNr8VqE",
  "key27": "5S2yTujyiGJBbuD1exDU1PKTqR1Hiu6MuUrqgj5S5AFyv8rCsLPfgSvMgNGtyz3E1R59yoHVkAnMiRGPFhT1NJE9",
  "key28": "4vPmh7xEZDDnkzR3MbdSQKqkC8wipGovhwVyAtNaqR4LybtiSSbsy7HvjFxQfKs628u1AoaevYPjo7C6X7cyMvUK",
  "key29": "5m6K2mAJW7oNn6xK2nU9ftbxW9ATrjnzBR8awkH1majn4877HowaviSv261yYvsYYtB55AUBoUEfbjmZesGvw6qq"
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
