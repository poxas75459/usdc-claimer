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
    "4yanbpe6ZtotD7hMGGpBNe1DSBYxd45TCESSBkMjvxfdqoA4qGG8wdzG9EAccEM1grhvcxJPHZJn9GuDeQBnCvJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJrAeB6VT5yh896oANUEEG3QY88jURs2CmP4DLV75hSwzm8bJVxAJFg3M1T8Zw4JLNQyJwq5ngqAs3QPXiVkTVB",
  "key1": "3qBikZbVKvuRTqB65zg7PmqJKLtuPusuoCZaU38R9QeuSwutm4rD9wBPuXHUFrLxEfPnD4jCTW1eLJ8UV3i8S1gi",
  "key2": "5fSBJkU6uUVqRqQZJKaK3a1VYiZksiuNFQMbTveBA8A3cvBTsLUpgvZds3ysxX3LZTtZXPFsW6kaDErLKqQHhtFb",
  "key3": "z5sW2dQ5g5oMThjPwryWARR8AqyuzprDQBfgrmkmwvWy7R8Xyix9xsJsjCVEN8YubtXbYMTpGX1LABmvXsV9xY1",
  "key4": "29szpWQpPPDGyU7ob7f8ykTWLK3v3FPp2VBztbvNRZkNojqDdeWsNv6A4XeLa2CTn6zZ6JJ5ifqrpyGZPny7bScH",
  "key5": "2wq5zFQ8b3S2Sf3nb5juERPcLoZkP3WZBVGGLhwEMeMo13FUx5wkpw4NswKJML5jmGye1wNMxKcThpC7RGSU5Q3H",
  "key6": "9H46xmjbh8H8M3jNeFopxMk5PQoa1oHvboqwM1DGYuR4GFSBjqpjPag7zuUmzLBnCwvocq4xs1tn2XM3facgSMU",
  "key7": "2kqj1XyR6MiKvrramSPgfFkUBgzogDyBhvvCHMzRhrjhBwzMDHkUFnjfWpXMy831anzxBfmtba3t6W2DBTY2bJhH",
  "key8": "5a1CBH7c3ZsB9g4viJR223oUUSs32Bvn8bkgfW1YpSpcQ72hUaV4dN3NL7jUay3Lq6eFBVUtW6oeGiDe2GPY2zqX",
  "key9": "5jc8sJ1afPYQGBawNU1RYxVUc2wMaFK91Q2FhSL1icQuA6wWPzPt42vgTgQanJrzFSVLmXv1Cei9GidgyS8uifkH",
  "key10": "2pWQCisiNnfDYjH2kTbZpQwaUvZTKUBp399ybuGL1QqrAKYtRoS6ASNz5VoZ4vr5aJY6H5rDf9b1Tf7nB3MBA8N3",
  "key11": "3wdbDxgdikjxz2iUm8sWQeNJqs4smc8asiJgrf99Bvw5aiKkdiBc4znM2jujEDJzxSXdbybd82XMSAbJATUoS187",
  "key12": "41EgGwqvJ7PHnraSVMbfPsfnEsgcabaLZib9HPESLKJWUyHZzCDPG4KrBLvANVmdADwrKoxk8t6LCmkzsiBXPUXX",
  "key13": "3eXBdNEExypCanrcHpbpkEaUZZPfW3se15S8tUgWdjPizHC7Xtyp1pBKkjuEQCeMQqaVSLiXbUnYN33Zw1LUGwbA",
  "key14": "L127ZzBkkKvdiJ9yLhVgLvTmVnNsJ8GU6GiVmmGoE8xrUBqtcQJkRgiBW7uPUfj9ev89kC9rVU8jLVjmcFLFJaR",
  "key15": "4UN3rtc9nJ3FrMGovWd8H1cH5X2oJUR9sST1JwJB9bVCaD5FfEyBPW8JzUxD8MxiUe4WA3Qn2KYNi8vk9irX2S3L",
  "key16": "2X3ohNkiMNaCJiWQoqAhTzSVEdpRBZygfNADYUaUaGn57SGUhEwyoZnrxfebisrFYdg1LAsMuraJ3H6RXeDadifP",
  "key17": "4zVdoKhzLdwuqkcwk9Erc2PLNVGebtHr8tRwkUFSi3ohnt3MCB8ySLrwuia8TCyW5QJiD77QbuyDFNUDoZzyTESq",
  "key18": "3ZUJqAMXZCHAVLrF9vUPCTqH4Ts6WzZmkVQaULvXQ7EDYGxQjMDCpPicVC4fj2SELL5JrWKC7FsXjAxVCrKwaEhU",
  "key19": "5nMEZAePFAx24QP1sAmM8zngR9SUBgiAQj3EDZKkdFBwSubGjqQ4ypUrPJWSp3wCoCCeayNRpdGKGJVzY3xdVVdQ",
  "key20": "1hQpHzgCNn6zVLuSXYiEyNun9KZBnwm5yDmteKg5kNqU21dnQsqFRHXMx5zfofSjwPH3uJymkp7XySvxTHXxee8",
  "key21": "5SWgYD5UMBLUo3dQe6VddjRqwvBhqVXWkA4DKCRfUJ4AfTHwQnGRrGYRXD2b61j98m9XXeFefC9B9Wq7Rz2gW1i9",
  "key22": "5pdWWgwrCzzg7mjKWU3tvLejCFr8CDyRTNLwKZ4JS7vRXUAHm943xbvbz2gznEh6Lo4MdeJ4NRBexwvFNMc61MY",
  "key23": "4DgLDRdWdmquwtdGXYKDMhQuePuLsyAZF6oKqTqA8Fu8gr6sZUJRvAFXFuir1bDzbahwQMxLq33bjgmtKkZMmRie",
  "key24": "4uEnJg7Xch1D6kmLuVmgqds2dMwngusvkdBsF3zNUTHRewYXTemKBFCA1Ka5ZWQx6PZ4K1MxQgdH5bj9AcXgg7dL",
  "key25": "2pBLRLgQVgBTpEvGghLiicDeHov5ssXe6vXD6JCEdbRfrysqUa2Ap554bg6q4x1qdo7aPgkofWFs9qzM4H8tnPQP",
  "key26": "5eiNh1ugS1nQUd32HeMAzt6futXFanMNYpwEyLg4viPJ6enQhrU6DRs4HSozZvHHZvKLRVmTRtwgPvNy9MoSCKrP",
  "key27": "4VrRZpJCuvFjvbknqsTJykqfTLgZ9Q3CBaNPdE8M31VWWmV5eNP215Pb1uE5Wgrt3HjK9VZ5qM2kZcbZq575mkkh",
  "key28": "5Kq4bQpG3vGhk9if96HPefTe45BVS4LrBsf8ckRaaQL6G5eqXFf5tTvLLUxC2eqm4Auqia88cnNiDUzkf5cJovEu",
  "key29": "2M2FqemBVbNQHXs7T5KmqwJnuwcri8avUtApfccsBej9QWcbjn2ZCBxd7zxNzETnkLuAmzvP6JcM1dSy8evhq8Sg",
  "key30": "o5YzA3TwUne6fDz1oQvU5opH9uveGMp7pmXz7DTHxDywmgmQZ62KDrtmQC6bqt8nJpJdftNjfkdTvH5ATbNieEJ",
  "key31": "2MqsjzUSn7CTjVkghAmpnRsxtnZPB5UaKJ2jcxMY7LfXRo5AcWGYV7zAGT1vGorBBDyPqy5RqxJbwUzcGXTsfHvV",
  "key32": "3Hx2Sm353uUuNCtokzwQS7x9zCTmAov9QvKcjZA9tJAHssxb8LzivHcpr21WTTqG1BNy84BNz4kMaoeUKCnmiepm",
  "key33": "TJNRNeVJzxdYYTEZiz46vnrjPNqKpU3S3FnMnFHKSEec363MNxHzQq87xHmfKG9gzAvE7TqAoEkeCsM7B35jZnD",
  "key34": "2JEauWUKwXo4gCWiyiaSo23m58FtJJ8KHsNLwNFySf6ZrYu3rAavFJ8hHdEeNAG81sv6C9rqdDxAbgta675Nh7p1",
  "key35": "2aaVWoyE35Hn1vJCPk4nYAw2uaNckh6U2cS2GH6hePkJSeF86wg3ARuFnFPdcMSjdMohXP2Mrvsf3ffb6aVitU1r",
  "key36": "2yW8SzUbQ2XDSuNSoFk726y18rjEyxZV5dNJioNt2J84HdABAg54QnnYNLHwQiKHgmitpCKP5PiyXFiVX5UCSALE",
  "key37": "2G5aJMUEZs8GWd6aHgrb2wYhEHgBDM9ZsEUP9p7Vpdc9pU34hMGJf1NQQPq81mYRYxEzQko8p81QssznRVcUfvuA",
  "key38": "3SJUgaojwFVvFY4jCLj8xca8unS6HuvSYKShVf5QgLHNHLKqrcP6cfyjusFjY4PzWDNsuPFXXHwFCs7tFyYvSHpT",
  "key39": "4SikPNL2U3qxGF8pB37GnLPtb3wSvxxcveXe2gwfNyJxhYi6cv83EemsLFLE2Sb5jFTSFWHJcm3FgkUqRtrChN1e",
  "key40": "DDAQmMgMsdGhyZ98W1WqkjjkRu9yiBykPwcLseoFEr2L1agmKSfLmVoHH2oDoaWjWU93ik8sy2ViKbKsfA8og46",
  "key41": "5mTnh1rNFpKEHF7pz2LEG9ce72cyRbncASjvHu8zBL3FeMquM3fTrwrqTn9LRZLEoza3hGoRBZqCsMiUzVPc4N3H",
  "key42": "2hKwm3746b3agqym6jwuQzUJpZQ16zFGs2pBcUtLG9Ct3ov79q4AJpnxeceekR1WsLTdDQriHgSoFuqDRPXiFfDK",
  "key43": "ugAwgtGHqRGMBtSmVhLn1U491QX5XCrhY11GzydibGBkc2nmzVgw8bsYK5QarBqYgnmXru8dFvCu51XJRDgSdd1",
  "key44": "4cJe686XwWyQdwJpCFB2QvA9vzNWZc79k7E3pCtMNtpag3r4ipZqYhGWdUyGseN2YxhMSBBbihVGariCnwurv2bP",
  "key45": "24JheMVykdKUDk681FuXefUofRDXpy7RvDbX9bRCU3qREAWuPN2pFLSUPuB1kacGZLZzqrB1irkYMgEKuzAVbo6P",
  "key46": "vpQ3EyZzcwVGmgDn8EisEueELmsVeDWHEQX9qKyQeQpsTu9M9wAecT8yud3Mr3eNBkLMwowtgYkBRMbPhuZYyMh",
  "key47": "5vVs85R1FRVtmigHSm2DEtof8871KYqGEvT4oyVFGtkCYLEiWBeEvdZi6A9U6y3rGRsh6dwtUYca991Umz53TUyi",
  "key48": "3DBCMXbGmYoM68dp9ABQBofVKAJAYMsaBm172YKdqgZp684cmoK3JkRXGBJxohwpz3mpDC5Cgnhhv93bEU5avCNX",
  "key49": "3s8MJPTk3qQJ725wLMBiPE8WjRoViGWeRbwQG6BFGi9fZDvPaiLbJHEL9GSwX3BcWsGoGEu2ScRkdRy4ceTNJciC"
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
