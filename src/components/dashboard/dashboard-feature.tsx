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
    "5kaZgRPBmyCgjGqWmuvQQcsTvwoik8c1CsJaKVLBQYbhoZZYzMFETiD8tdv32269faxPBQKikEtgqyXkF2gyy8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WiVxK68WNCTrrPo68RxyKvaFtr8EFzVaKMoWZkA8Vn9p6rWjdynKAJRtTZpinUzixi7L89zWfC35N2Z9Ce9SKP6",
  "key1": "5p33HsMh1YKLtKa3wzgxLL2Tq1ghE4YdgJV6PVQPq8QQ7wMaZyKrG8mn1p2dSD9TYwSWwmgC52G4SWAey6wnrSQC",
  "key2": "ssntYwDW1HPe5bRwkEqJaqRQH99dN3CJehRZ9B8z8v6WprB9W3yRS5iFX4WYZ2v9XkyMtY6McpXQLaLWMN2kyS6",
  "key3": "5YSLLT3NSrcRPs8giWxonS8LR6cX1S2MPjzbMWjW6TcaYBjruVdcYmPfWgdDpjH1YJtMdacipXk8ooTGe7PQvC5v",
  "key4": "2PWtob5upPkxxbEX2GAYsHKKmhsxuNb1jGhJv5AQen4TJaSoX9fP6Hdm5aBnx3idf5cGK62a6Ujiwi8vtBdtpm91",
  "key5": "MBzPvifrybBTirsWLqvnjRycgUmxVLAzoa6NcprwjyGx98ZWBjmh1RGmT3Qiab6ZHiwGnFA9njx4rD3T18X1DGZ",
  "key6": "xr3dijkrgkHNL78vtmQKLgLFt7p7gUJzNiCPjx1JjBESLBLxiaFmtyN6w5yc7nTb4wMrE9bxLt741Rn1MeTccE5",
  "key7": "qckuQkqYAh6ZFhyvVWXGs91UEeWnGvsv2q7aQe8wzDpttAYuh7jRBrVdcdLvqS1nnHwYkPjhcVGrigZmdc7kSgq",
  "key8": "43fJAdMRMNDWThVmxsNAnL4Kpa4YYhDBrz5VmDLH6HxubibXNxWp7Yhr2PGk4AgF5u1vwic5oAQ6pHcAaZhx9Lht",
  "key9": "knmwjL82aN2Mu7sg1Q7ve76TQQDBqNRKzrs73em9E24gfRvs49GPeejuDNKt9Ci1tsQpqaBWcqKUiSvcUkNC1NJ",
  "key10": "4ZdSLX9nZ8FZoDei9g3W2evdtNMjE6PwFHScVfF3bTvEdPfBT3i14YYryJ3aCXtRxx4pXu4GPyvDrt9s49EyxXEB",
  "key11": "4A8xDRfCYPPYyoFGSLsaT1FkBfGmFgdBKcELUkFA6cCn6W18FF5HxRDgwinm6YgMU3twvE2U4SVVfLnpy9iKdW4X",
  "key12": "4qeQPZieqowQ6NoSDUahC8RZ2PWYyR1Wt7aTvbRNFXQXeB9TwuWurU5JJN1FKYpYgKAsqL5JpsLrFNm3grUGXe8c",
  "key13": "2wtYfovQMkiX7PZfesqZNiVmVD2aAEQBK1SHhJoRUm1e3Jy6kKTAZEApx6AuNmPyFWHvf2wkPHWxemN4KuyEmHBh",
  "key14": "4iPbEsQnrwk7VABrdKLB6ktJERis7wCaRyfH6dxENYcHZtoaNTRbPyxREWzvHykKTSsfLMxR7dVkEZLR2MvnPpBy",
  "key15": "44ReY3hz99DHPojjMULKuz699CvjXTu964ezJyM5CQchYyAASbcmz1pwmEswLGJCCbJcVpdo7i6uEwFq5NLxExTA",
  "key16": "5PqcDevJWL8tUK7oVnabh9NZTdh7RGh1w4JWWi1arRMwGZszRrwvvbBHMGdW2toUVG4M5qxmRCknk28czsVregDp",
  "key17": "KRLFQZkM4FL2mTjZWR4drvGaCKS6hUB7fEtL1YmNiTA37ZsxYsDR4LHqN7P9RUCr1k6BGFTPKrzUDktwjKWC9V7",
  "key18": "3iAGTKdHFXKhFNEYji3t7kz5SWkXSNYoi2W8g7q8K9KP1fv7K65CgX1gC5wThZw6YT37uqLAzTHAkFt5uZWooGqP",
  "key19": "2AdcDe5QB1TKx8NNF7nJHfy2HyFNBWyFZdUPnQpXUcGCxsR3siSm3kffbLoTcc2yuXJjcnGugDkWmDRZpiaCNDFG",
  "key20": "5vgk2mgcEyJhcpDXbJYWXeBgax27EaRzCSauTiNdcWvaEN55q4U2PVF2osH78UX1RHco9BTT62TFYJMcMRKZbjjX",
  "key21": "2CNptwkaamZymeJy361iiYSqExyYBsTP7Ym5hjr9uW52nkVMDihJfohzMfxdtgWNteAxTN9wN67B77cBnW53BtPX",
  "key22": "5LcPs3DLU7DHEUHn2N2WNHdeXtqMPbwWiCEb47NMDHyWLzyFn2uPdDbsGfEVynHAC9JCv64AWqdRHeaJZ4XUn7ej",
  "key23": "js6rMj87UoTR9rPLzz8cJYy3o1pnEh5LePNXMp4ZGa95xra11Gd2Kb5naE2kxBHBph8PMVGgHtrpz15JTTSfR6s",
  "key24": "5mjBso2Z6kJVd27x7nC6LX2khRN5E5BbUJafEzFtBpzgdkMBhgp2XhHutkZf1db2HL7Jf33U5NQRXXJVyk1HbqD4",
  "key25": "sr7uFuzvCB4QuYyvCBxVdqn5KBrRqD2VpZpc5kPDVrRGdBG7sYYFQ913ba1YL5QzxzJjeabbsRuSR51LXQJMaYm",
  "key26": "2SEw4JMN43imb6eRDk4PJaLPsLweBYBFTSqqsXbZdTEaA9bxUPFrSKrxHX5qfn4bq5GEVy5bCNvgR4Y33rV7Nvp3",
  "key27": "oAH874vSxWhv98zsRuZPGdV3PktZL5JFGKXwMzzwqh4oVnkf67gH8bsCmAH5ch1VXd1o8eJgm4jBjy7dUX7eBeo",
  "key28": "33DJYsU6nnFshLmv41Z6M6M5NVayttG8KqbLrUDt3D8e6KbKbQdPqKJprPHu5Qeyv5d31awMYmhAeFKUshEY4Ze2",
  "key29": "2hCRBY4N6ukD9RpiSUmQyAus4iXMtdP7De54qvq7kkr82tTGYynDnVbGRwMinWUZSSgwicgV5fnB9zBohsGobiCb",
  "key30": "2LSyc7NkVZq6fXm4WmPENWZRDNG4fwz1BauF3ndq6uVs3dc9QF42cz4u8UXMTrHSXLDtTjVv2pGkcKGNXc735SnC",
  "key31": "4cw53dXNLedBezR2oLkfz9EsDLid8huDdwiSwW1Hn6oDnQq7gVUMFtVDqCKdxZMwL6WyRCeNRorXjGDG9B6heMR3",
  "key32": "2GgsGytGE19vmWPq7YjXAFLDhKCcSEKH7NyMzJoyoUHH6oiE64DP18ffjp57pUL5KmkrE4VBEQdH4pBn8NE78agT",
  "key33": "NZPn5BquhZpdGZNta6BWApCmhTwMXm6AnUcQHgWaXyHYBbmQTq7LqyTcfhXDqwJgDyVQUfsj7sRv8UwfESLMY1Y"
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
