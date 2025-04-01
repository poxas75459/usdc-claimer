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
    "puY8cFhm6nm7S8mDpRVuvBvAdhkwAxCRQSoefMGY5UpCN47qGPHekXxArKid8442bNcTz3gB55gZHeGKQRqzJcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H1RAHRZHPYZELssMghnx6qNftMP86qvXTP1M32pWsFuWDER6vhDtsnzygvxBBZyaaHLiFVaWzsuVTWenzF2sJPr",
  "key1": "2yUbMpjxbbypR5CDSvZVPm3ezXpHkuEJkHdvfVa4L5ejYc1egnXtsJEBTuCMSSQBsxfD9PMda7Mt8mb4k9fmnao9",
  "key2": "4bEZfcJiFkkxapfQx72LS27ETWMdYh27rcxLH8yJBrKa7XBJV4oumejiDoxSWo8ThS8nDwrJqDkF2Y8GeDZ3AQ69",
  "key3": "c6pmuCKRWijeDV1R8ubTgN42eayMqjtK3FVG786gFa1oxMJEvHnUGch1qm13pJoJTkbegXXtcwrRiUsBaUiRrfv",
  "key4": "3zJsQsPYkG5JBgUxXbSL7G45CMpUUt4keWbREVHdpfYg6WwgqUZU1AwimopD1ndh2U9U6oawRuEXfFgghj3VpxPj",
  "key5": "JGjBtKko73D8NpA87g4Y3fqpDa3ZgpXiqR7oHEzhXh1vxdjDvcCdHdhpFZzTrrWSUd7e922H5n8427iUxvoTZQH",
  "key6": "5n2iNPYxzT6WkTXVaTgiSMHK1pgiMsN7r1TGExurFPyDLxzWdU4awZojbrs7KRSeSUJjyUocRRKazKdijUFwfSuS",
  "key7": "3EvKB7sHdoJV3oJ7WBtFAfVRKfdFtxY868te7uLXzZ4DsB1Gmps4MZwJBstJRvK4ydxiFA35nUYAJnwLsq2ax6kn",
  "key8": "5qJYWeZGbc5z7XwynjyiGZgKjGHQav6opUJhMJ7h7wUd79Ks1CKLDbDXGDzHE6JXzeGyhA1Acs8fvqHdyNWmtqe5",
  "key9": "cdNVUFkNSHB8RbuqSXMHjViY792Sdn84CSeYrrVmPQmj7tE6y4HCamb4et5wZsCZQcVbfZhuVu2dhjiFhN5vjRk",
  "key10": "5M8wH4WPEU3SjAeKA5ZwGFZuhTYnspdsDtKgS4zw386zSpaEJWtyVBH5SiAhXyPMYnh7bvKS6WiBeGqBjyNV54Lk",
  "key11": "rGXvYwtk7Lb29ZRLTx57x3PXNvmTfscMPe8Dfn3sNEgPKokRQSiC3hBtkMHTdYgwWQDD9GQJdE9FXYXWecpNPux",
  "key12": "5RKGXpH5GQc3BZTs1fLH4CYZLJSLGspRGQG5k3djdBLPXjw1AmpwUKMESbEf5jaEEVHC2JoMz5XzrVEBRNu3zmuT",
  "key13": "EQAFLx9YkZjnMG86pFbwdcgfhqqGY7986s23H7CRpDcNRmHxkBQbWJ8nUrJYeQ5vmunKxwQsTZL4MJZ9RjVJ3Ab",
  "key14": "3EShoJSh3KT8Rqs7fyfjLDDLU56uHPRzTnuq2Gq1hhBfoKj5b2M1VDHsn8r7CPWZSR3aFSYJWP1U3qwV9JCb9cw1",
  "key15": "4VZN29zcyFwVrAKf3P4xgYLfFLdqSeBLSRjZbt7TM5deRCQfN43YEmiWdfnGEuJESvQ2KMTahevnNQD3rXuMZvQ2",
  "key16": "4xwCg5QWgMfJ3FqcCLUJQFEcHq58NZAcqrdqcyXMAEFmAvDxA55ceDppe8uEqi5uZAPFhZYpUpJSrg16sCbfNkvA",
  "key17": "21zSvaJQxVd8p2vSTuuFk4ftKj8ciqn9RcKYazZJsDDNwrKSBqKD67T9bTfURKxrhkWzU6Fj3ekANj46p8j8NXXa",
  "key18": "TvmFe8mBiPBwFzQZ7phSWxs9cYHz55kmrjMvc6gL2aDBEoYsQ6JL1GwsL5ts9D212RSbb22VxnM25eMjLwc8h3v",
  "key19": "26ZeR2NRAcze7Uo87G1yDnTdywQrbPzBt66KnzuaUHk13dMPsdMZYQoaUU7CUofEUWcSoAtRyqhYuAD6TB3Bku6A",
  "key20": "4BbJrVpEpMdiru3Trz59bvdoatztfL4aNXnmCiAViHp9ChotLAQHQdZ1CGDj1ZphixeXm3Nr9sy4Tc2UdGAovcQ",
  "key21": "3X622cuz5s1NsHGtyWgSkHnxHEcWoaoCz43K65NnLhPA23srZ98vERzy7ZYxmiwMKzPJEWFcwhtqACLkLUsJCMGC",
  "key22": "3bJ4JzTBuR397Jotcpd15jR5vGGjoCg1SkdQ4dBuJEzH1dXQuPqdfkQNg7puQ6ZdZCTfMwFrWdCWdQohenysprn1",
  "key23": "21V9atUAMf8pVACNRNNMkxSF4722QnUV8jotayT3UtMfDeuKhssZPLNN9iwExW9qLyN2qwfyMCNMwYXnjPAJnrwF",
  "key24": "SmMwszuQL3n8mQiuNEMQ8ogairVPEtTc5XZinZHHo1LxmWBJTpj2txnp5dtsHTN9eFr9u8UQTD8HRkFYPf3CqQB",
  "key25": "41DVTdyyDmFfFKHJkrRY9aadYEWZvYsMwyeNVfJQhEyYMXA9eF5XERwKY8j1kXPVwcYoLCJK5pSujN7vAHfxhbFF",
  "key26": "tLnaqejCDVnPaJaJVzASa3Ts7rAgjWxaNbobai7z3mLU4HuE61eiNnr1MjFAmqdCkmPNkQSKXHGnQHkwUVFKFwj",
  "key27": "62S5YJwAozYhAMbckZYtYyYbQYQ5daz6oZjPVjYdpCx9GCiz4UigzxFtNQ1sTEGzwC2ZPzDXu1kiHoUR6Xvna7Kx"
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
