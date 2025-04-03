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
    "3uKwcetdvfDwpgUdUd5DVifyok7RQcK9yafEftkwPmfF63SS7yXBtdKXviXNVV8dm5wVgy6aoBTvof2nUfV8Wes2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D3gxZyoee9JjfAkkrfdYjk7R6htwuLuHfkk7J5L8zPqeSEJ2qzGdPQzAz8fESPtUbySQa1uxbFbGkKywYQDzPHC",
  "key1": "53Tps4CcJx4gk7MwYzA1UFdByb7CffLkVVHJye4gMmBjLY9y2gZj7DQFHMqJK5PHYo3Ja2mjwfEPSbXCn5iteRG2",
  "key2": "ZVrLRyypSqXvdPsSSDEPiXmu25CZ4JwuFJL7aqoS51UEUGyryAe2W7Se4nmqUD9ES756Ypiv5TZcMsxgR3BfBRr",
  "key3": "8RszkDY1ogkWuviupFiP9h5UehGKecEtWuDerLRPhLvEfWHWnFWkJyjCbMdecVze1QcLkmqEKAnrX9ZFzCtUtte",
  "key4": "2ovgbtxNZ9jTWaPKyGd8GDEKzE8QV7QbZo2B2hm2ap5jDyHMjc5nq2Tna7PUCCToHmMTvP7waBmjQQU8jznazY4Q",
  "key5": "8jnZsTP22aNuU7eVDphEh3YZiWZ3HdacjqJG4icuncNsDTcEPSfMgQv3d565tbmgpYVLX8T5iTca6zd846Ak4tP",
  "key6": "3eU6qY9DWVnDrghn45rDH5jaDiAXhGv4LjSDeGpDR5JSrAbS5nM53iSuSEUNg38nsd8RN3RF5k7xhMdfSR9n2i5N",
  "key7": "5bXsThJ27cbyFkSBPmcwm9eAvVbywvjWPrMyPPYj2E8HoQK3X3aJq6fRHrfi51JATXBRoc76ZZu7Rr4WDL7L6BbF",
  "key8": "3p6bbbj5oVjyiBQ4iCDVNn62i336aZJDRvecd4FLBLVPoxewPCtyM14SdKcb7VGndXMGyP58z7iwZe97i2imvSpD",
  "key9": "4UBH8FwRkkECfXXuGCgWT27x2WYW4j8SkYycmwVEV2VQnKc6ihdQWGwmnQekcu8tMypRChSNfeBsAsy2YWjogjxt",
  "key10": "31W3Ygvqd5mubrywMAzPqvf6ruoQJKxe7zQCbMjtNLGFtfLmC5YhJ1BFM4wCfojrwGHTJ9aLaRZAjdL3foCJvU8E",
  "key11": "4oafh1QRDX2GRKxNKZpXsuFnj1SQWTJpk4kTCpnAgq8Y3qcqfANm1FUL3mRMCd2W5WsVsqKN2Djf8NaukSNavpFg",
  "key12": "2imeu8PbrDreq8f8VrP5GMLgPgDea9hfgxV884Km9xqMFcmbKqK2KNkekCzkERZjdKzw3K1r6aLEzYGCqGFnBJNP",
  "key13": "4h7Q9G2CtyxadEcvMEsLcCn4TLzHC84Z1SaRsgxsGMHbwwUtUE2WthPCgwj4i2iJAqR6V5zc6S3Nzwi6xxxgE6kK",
  "key14": "fL4zhqtfGSVUxURqQe3v3xAogQSdsxQvjtL5p2HUW19hSdLsT1rsGfdnstfpdsd45JJ78o1REe8ztbShs6y3eBR",
  "key15": "5qDJiRvjnG17sbDvwg8H8YcGgTAnCXTxuNRy1ftjPdmicHzWgnMLBwxM8aawM4jk8QDBoV3poFrc9XfpXrDMG2YW",
  "key16": "v3UcayPZUmWQeWRfLzGDtuHKJdzSTmKGTbdZNxF6TCQHiptMyPWLG2tL7n5eJdKzsBrpLcV5YNnHQqeokYry4Tu",
  "key17": "3oumKdrtgM3LBn6FGeoALk23BSU6AeWYqeVQ2qEfAQrih6oipwBpBK3EBXnGoQ5FepBnvtsXSBL23FRMAGfG3gQo",
  "key18": "56M27LJJydm8xzUkASAqMnHA6XLxW9sGR1GUvYHrQt55zNqbBTiC8Yo7ZPhixB2gmQEnA2H33nWemLAvkKCmwvnT",
  "key19": "5Sc7XdJe6j9ikAjXpNmz7ha8r8jnudLbvNfMLpUq5mSatD7uuyCgZ2ihYcqMR1hCahF4sssxfD7JskFwtsi3vS9r",
  "key20": "FGZznB4NV77RLb71WyKAnE9dpT4FoswXMF1sh5BQKoE8jHPcPBgeVHqujnn8pc2MkFgSr3MQd7xvdRSQFSuvLu6",
  "key21": "4DDybT1Ju6LabQwP8iXkCKso6TEtkE6LYMhbfzYop7ZRwFpNt97x1sR5t9S3n1KeBjfdzv3VEhs9NsEik333m7S5",
  "key22": "dWJybL41am7NYj6KRqDjbYhvMdHbvS3DViozNkqDEJVkNrvkAsCBJ7ZVbi1BFBx6kaqExYbW4q2EWYWCWjmzwiy",
  "key23": "5Dm6uDcwwFqsjgDSVzZaULxSgP3Ea5YFD3sYJkpR9cwjLvotB96x9jWjwVdpB5py9Hk7N8vv8u7eDoztwoEZW7f3",
  "key24": "3huxGrTvjDqnYhk8eStjgsQnWm5wAXK85FnctRgMekJ7QiCkA4TKVyt8qUkX5Jox9ynaEUyufEoGFqhRpb8BsQTi",
  "key25": "6S7fbrLiCDdT4skM7VZstpQ4riE3LdM4sDrz4CxxuQ9ctgpedEANdTQ4A31SMn57ALMiSUrEVnfv6ftgYwAmw16",
  "key26": "SoUPRJNEQxp1jjwj1HPQBYJFJ9yhNeexEqmK4dwbJQAdNPGtZFUTyze6wcc4x7P7ZRa4jrCRqbxWf9pQipeeBcw",
  "key27": "4JzagpqEzyDEMdP4TkuRB5Kgn3ENhGyYuNESk5dNpGiML1ot44n2gnaNw6DEz9J6zccSvRiwyjoV3dwXGfSXZcy3",
  "key28": "3CY39forkmse8QwHUUKGqDB5mfMos6JN1vreN5xWJWj3yMtmiNZgUYkujhtjRDT8dFRW8BxjY8SCC2VVd6rTDrk5",
  "key29": "4Zsv5FXw4k4LvLaJZJWs8fFdsfSFEUu9A7Gt4k4z8CQKCEU5MGRNjARMUoXHSpM7TQzQqty68JBGQVPe5gW1cmsm",
  "key30": "igwy1TAhZACKSxc5gMJJhxsxeCr6HcR6REVx8w64C25rTExRL5yp5K2GHgV1c15CJJauFtRQhefzdu2csp6ZQwj",
  "key31": "2yhnd83qmfGzaGfk6uvPmKFsp8Luw2UNW43ZdHPWBG344QW7hrxXgU5hrEUY4vYtHMicxR1wAGJLwtBWcUxS95Ci",
  "key32": "3uDUE5RMMJxHwSxL9N3WLL94U2yxVDJpgiP6bRgfkzUh7eK7ML6gu3Nou4ccS4fNhKqLEKZ7dkhQMEq3mMPwsV94",
  "key33": "2puRfVnZTkApLPXc2hVZsLn2uGeDqQ9CKXuyyM3n13aVEoUMsqvB6iSYnFKNw22Lt727pwVYGeZqA5vmsHqtHDZJ",
  "key34": "3Dhmwpfymxzv3euS12ij4UMrot5Ze9fzsjnKQgVQJPv3a4DP8TuuHagr1Q8NDz9iShKssQNEDTgJ8CLu2YnxnQRM",
  "key35": "2xQQhTsUMxC67XgWf3MkWVf1JkRC4K9cRD7Rx7KPcK3FDnWc7cqw4ycnucdhd8bxeGitVfTde2QQ55wtuUghXWjR",
  "key36": "4MQh6EuUG9Kdhezck5bgvsBYP3XSpVsVt3ftwwCinGnqsgrNrzzNDvXGiSkLvaYrjwojZHUkjszBKi9jmDbbgusi",
  "key37": "f3TWtATWBEvqrTKogLgLqofqMZGg5QaxQfDbaqLBiGd8PGi2mt6ANwRWQDVDzx6XdUwobzC6MaxhjS1RizKF7ZQ",
  "key38": "5M1MH9edJ3nTNeVj5MyEoVaWByskpyJX92sa9QkZjFpQFocGmVigv5Y9zXk63CJMQELQpBsP1BUXDZH4bpU2KzvM",
  "key39": "3FBN78LXzQFEp91MSHCDLQV6HKXnNg2B9xVZUrtFPh1h2vNMPj8UTxS89yKsEMFPmF8c3pXsjbr7Avub2Z2KdTFR",
  "key40": "rnEfPdPiKoy6EPyy59t6vuAnPLrgzWaiu1hHdzkyR7DxQRryxbW9eXdS6BP3HSSPKYoVbFhiGacRSbmUG9YW3yT",
  "key41": "4JKf86mpCj75edd3tEN2Hn4vNNRuELR1Se4Rw1XcuwopqCbNfzvsDMJVaZRru3TYHHxA5a9jS9cGQephx6AgkiBL"
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
