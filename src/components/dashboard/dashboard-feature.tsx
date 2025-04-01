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
    "55Dsp1DwnBJoiZ47a4cLnhXszYjSkHZALrNqniwaWdy98a4uo5t5BKKq7JqEMkVc257LaMMMoaww3vJfsjEe5LJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACmqvc9Lnzwa5C59Vq5bFC2Vk7sQXgiSR26JZMmWfi1Q5LDc5v9MXF6gfpFbmeTTbpNUteMQbCHFxcjm82zUpqw",
  "key1": "5DvmfVCTPQ2bGufhCBEkxGoVBP4ScU2HiPxDgo9aTXQdvu5Y7ZLJddU1ZfKF93y9kNoVcxfMUU6HUm3joXL9cLMp",
  "key2": "4p3k4PexQT46QUxF7dTvJK3BP2Szz1uqrwDznrCWrv7gRDjhzcbTZ37tTcCJp6PyWJHAuhbPEDo4CmbJ3K7RskTN",
  "key3": "286Ca7AguKsKcNVkZdXAcs8zijLhJRiRKtnCJTzSw6wcDKhsKm8PVWU8RT5xzkRSNyKSTkgRAp2S4RcMhnK621Np",
  "key4": "fNidTTqV61nnUYzcV4n7WkVx4BfzcCpJ8m2ZypY1fEVDec7BPEcE278TtrpiaUdsRVTct13mvLo5tnpNf59XKD6",
  "key5": "5ZXm6op32kDD2sEEm9gKpD2oWRgSpbVzK74QskRNbjA8BRWz548m8LesB8mYUbEkx4DLq9ZFxMAz5ksnazWWd35d",
  "key6": "5zmD9CTVvdB8YMTuVzoAsAUJJs5s85XeFZs3V7kkb8P3B28882fVuzz7ofbMQZ2k7qH86rp8Pb6LzKBv1f25ihJB",
  "key7": "23CrLQCpt9KLw6erGjmnEGm4SfUrTv5BQSJshGp7f5NbEawdUTYUbssbwizaUHN1UhSeuRNQsCaKWggi2fhTDL2K",
  "key8": "5scMgW5R2mo11WDEz3UaLv6FRr64CX7aYRCgRHkRbLHXtqdxSUSWoqshQbyGEHACiJXKn6C3aGfmA3o5ojZGFJio",
  "key9": "3MA4cgxUyhdfAgnZukHbcPdKYdiHH5fFSfwvKgW43W9X4GibzWWCZzdgFDBZ9MojRmhVMowUAhkgpp1LehvgcFAY",
  "key10": "UCTnh2C5CKzmBZL8jxMrtYeFrxzaq8uaaetmsSFGYxMpsyXqBF2w7TEudsSdLtcp5eY6oRW1dGab5rfeBGhq2vp",
  "key11": "YEMUXcaCwJ8TMMuFFiV9KQ7bZxc2hm2KKFmxJMPnUokJABgCAz8CeZQAcekuGu6ce7RYXKUAXdyHCS4znXK52WG",
  "key12": "2w5pxJThGpmgnd4xuSHz1nSE16iPXa7dSJDHxSUd6g9ugW9a6r8gRbfB5xybNTi3cmU4xHDPv9xvMq4ppATBeu46",
  "key13": "3NUXUznfxXQiFedRHBF9EyZYqP4VjbfCdbg2Vzagjh978fp9Lo4ChH6piins9JQEbnhn4AXZKhVExhsL8SQK85Ye",
  "key14": "3sPbjgzBRGr1zEqah1fbdMXW257ttQTFDdxQaWrzEgEE44ubk5ZTLHy3CRd6W3DZqkUMZnjVF6wWvH6QJfJr19kt",
  "key15": "2bxW8F6RLJG3LdyfUXiR7BQoQAGDAaq2QJ954NUGb8iUQYhpn6zk3TRkQL2mtSJRRaPJ3Bvzsh1NLjbKF2obqQpQ",
  "key16": "2ywWdMvTvFMPiJL3qDLtxqK3wb9m3EQcwZCNFtPXQVYpJ3oU5iRYrhV57m2FHdhQssk7qkQGPYnDoK3RLMbuSWHF",
  "key17": "3Lc7Nj7d6CDpnLYnn7bM6Z4XZGTsJFBKZJ8Ytv3cQPMcNvaDYZgi9Y8rvECAFLVmwhi1NPTT2Zt2jT6hPShi6Con",
  "key18": "5jMzE4rA189DwJRjhTcQzYpENbxfp8ae5RavWu8h7cA3XqH8cWqsopnRP7EztNpiacxjcGsKzcKsfHNELnR2kp3Q",
  "key19": "7VcUCiS3e9kJBiRWBkuAc2bjfPn7rebEXaCP3PPFjXJhP9cireGapWyhELB3AeJB3iKo3WdQKm3xxPJXeWhQKed",
  "key20": "4qpBmkkmJE5kXxc1ncZjfuKvzzcd1WVFBA2UdPu5jayxX54aSHsc4VFMaXEp9S66VAr6fcXJeYdb2HFfPeSh5f7T",
  "key21": "rVktVq1arUvHnogRaUMT7zmQR1WLb9E2sKcTiD14rvySESexNyFo2VaxCJQUe6atkfs3AzQS2oPtkEt43QKwSNU",
  "key22": "2hcZi6wU267G94CQTikP9vaYcqd28yBkreLQfRUQnbmjGwpU58pjUJAHT3rs4miyR8mLb9sQNz3k3S9VFCM3sp46",
  "key23": "2x6yLEB8PxtvWsh8MNnNESnGxKRfU5BGF6DSTEfs1VtWWQKZa1mMtLSe1hMp72dpEYVcN37TqUuTXbinHSrZ46ZF",
  "key24": "3XnpWEY56t8NLTR9sjYcN5LSpWdmnqouPwRSxb7HvzAFzFvDaPBVoirasFifLZvuo8DrJEFvVJ13LCH3MAofLKmH",
  "key25": "VBUdG6ZYfhyP7eEuC3b4FaHaP8XyHZLupNJYZFTHK23fXFPLBEG6nXDj8QV9CHt5Bc7Rt48KYA7QS6MvEuHHC41",
  "key26": "sP17eKPBXUmCSB8hSz714EXVp8rzYMi8ogB7ZBawjg9H6ouHo9HhvAWpP32F7wrwUp7Jdemz78TWGjbychs1oDE",
  "key27": "5khxTkXk5T4MoU5NMkwg1N69NgVpo8aapT1JB5u3SDPPrgpCTKW4CkbAyWXfH1Ks3jGsAK7P2kAkQxkBQJ2Z81mZ",
  "key28": "4cAWb6rKstNPCSJrQLob1fEcj9N3gvndST4e2EMhqz2GP91BExX3t1QoE6wVZp8Kz4DT2L2Yy2hv6sLaxAUxiX69",
  "key29": "2ZoTERxdesiww4eAuaSAkEN6aS8BQXGU8q1KELbVB9W5hHBdaitgZLCubMFsuGjGUdvgDGSjp13APfsFWir8m5jq",
  "key30": "22bHb4zz3EgtBMKWf67tRjjwcfGi4uy4kn25sgnya5fgwXcDKkAsDettFMAt64aN13UH3b7aLS5sHb4JgctANZ3u",
  "key31": "Evouwvn8sBCJ3SA7WU2Zw31FYDnF2ueVPJKUtd5EXmcatPuQbmi4t5Bi2oVgnRTx6BQBLFUuAYTHzPXEHjtx2Vv",
  "key32": "5r1SPHPGSnmjBhGwjaHy58R4j5fSoprPNxxcKxdXxtYfirg6oatAj93vyE6m89ydGGkd199P2rGjzThGJzgNVPkp",
  "key33": "44aQQPoJw4sDWdkrReQGRh7fEFhX49y9NGkuKSkfJnu7yR71cejdv192vubpkz8E162m4eodTxYdaMdXKJhtkyMM",
  "key34": "5K2t1hkB2c3xgq2ecuxEPATwtFL2hHPSodHntfTe4vhh6B5Cfa9Db9k8YbbnmCkKY9cCkra54yryTqCdk8rsjWy8"
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
