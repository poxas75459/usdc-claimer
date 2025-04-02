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
    "4n4NpGGCi1VMV2Wn4WxuLiQP3svMvKSAvjkvmZAMEcf7VujuczJAeUe5hXQdLNmR6hm5rcAafUffDsBJRE5iqJhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZH9xcVBWrbRteKkda6Ur5rL61354GvAtoqwb37rwmJwMMsmiJSijWLheMg1wWrFBpaTutFCaAVhGhwAaHrUxgFT",
  "key1": "2GWnHYBA1HQQSM6NTuiqrX1uzQENMjHp9Tktc1ynn7qmrLHrPdwTon3XyvKFEG7b1Te3KddccoPVsZzBGE7ghsKK",
  "key2": "xGFAyaz3mpLJ3EjLkwuTnwX23i2dXJt3JVgo5q9fjJNUELJNxqitkKFjLtVUcrQVWzAYSDQUzp94UxqMqPGuxgD",
  "key3": "5ef7u71dLN9yuMYe46mC4bQw4bBufSrfpDm4WexC8NBb92yBmzyrMHnQzjftfxqyBbDRZRLZVQ6aAMhREWeC8Rn6",
  "key4": "4tLgco6McD7MTEgoioixC3En6C1JWPmVuK2v8LHYFAHymPEujpm61rWTLNuiSM9LJ6XVtwh3KKKaEaaUU1oyUyH7",
  "key5": "4jxPiEqbaoVy6FTxux9RrhA6ZNC9qE8RquPuSSoVLjieJaT7o592GW1J5XQShxX8NDRuEDj11YnrBRTFHByNxjNU",
  "key6": "5HBGLpkDDtwwZbBxXu5u9ePCjKTNGBZv3G9gccP4pm5Xwbvhyty6Gv6PBDQg8i6RAX98dfUcWY7n6zzvoVjYAdqU",
  "key7": "2vAvTcQGZxjD9jmypqYMfrCqCatUjnVm8tXChjxnNh2ew2Faj53mq5TeU3Xa7p8Te9qcdrJoNWTs1w3Q6CoQgZ9P",
  "key8": "3PCnzijuQvvVGuLipTEov8QbK59pxdUXtKtPzzHqmW1x3GbsZytUdognqxrBQ7d5td7wKwgLQ51mSrTc2oJ6S9yS",
  "key9": "4Jc3LBp5KhQiehdHxQixjUYqViT4sBkyshEJyWuGPLycniuv2Zcy9eZyCGnYtMXBdcDSqn5GRrynAmzVusxt7CE6",
  "key10": "bLUu8KgqXMTvVk4o49DVaDcUV8EMiK28oWV28znH1AdjRcausnWEa7vuEcwJF5ar8DW3VfegQpzPwbCRWCJoJ83",
  "key11": "5kCpXYdDHXH6PMKsFS3jywspuyVhamXhJBoPwcc3CeTqcmrb98vbpgD19Lv716NvrRoVQPFYNNmVZwuTyYV1EJtF",
  "key12": "46xNgBDKhAyw7TUAwkW56R2sfebaJdhhLB9LTnJ8RbPEj3GTdJTQ7F2jcQtJD3GSUxBZPdQuJZMiTVP19bjDPCwX",
  "key13": "67KgQtfMZYvgz2LthJNGB24ZES9Sk3G6DRNUXvUfhohyDhWgppRe1Xmf5vKxhXwgTgaZWQor6uApuYoyfejKZ3uV",
  "key14": "67UZF7BkfvQ8LmPLrR6ZVLXHUksNT1GfUhsrbp2QQL22w5ZCDhzdUoEMccXJDjHXwzXTK35j6Uyp7CjgnoUym4Pa",
  "key15": "HxuPpda34XfySEMmhN38SgwcAGZ1CKHLDjJFKNzs4wjs8sWpPyiEGPFc9QAgCc1bBb94CLG2MbQiEZqMMT2cQkX",
  "key16": "5BPyc4Tf1HMXEgFqVJWS2gmNXY3HQq4QhjhZDogdVqfzM947ir3huaVpVp1hyDrpT3wyZzZ4NK3TUpchWtXzhfH4",
  "key17": "56i1eXs5xtsv2GwEVxuotVuPTYTpbGePrhgeS25xLjVRMzXJAduMGBPuxofbb2mUw2yqcTm8zk5cYAMek23gWxnY",
  "key18": "Y8H7JawPk4PthjmaKu2NAx2HSw49zMsFHS1s2F7ugibKzbT1KmQxSHwNCEa2jcDjfsP4ntCJXH26Q9oMbrzPBYg",
  "key19": "53NEckJN8QJgFYc9BLnBcLRdawhQSFRX9GCKoejSF2EoMRsbrWVbgJYrAFRGcLX29A4Fk85rrukNUncY1Ey853mm",
  "key20": "62VhaxgMmcMG7c6ETzQJqD9zBP7CrE358pvMhV22dHzomebi72oXH7CwjhmPUSicwrr1AEdMPAKRD5ovTHpRBSHP",
  "key21": "4HdwqBuqFGK2ZCiymVtSYXJhH8arDxsfbRs1nN3U4aHQ6YPUVQSvVMzePae8PntrP7SRosyWXJEFL5U1xinEDrqt",
  "key22": "2ts56uUGLgB8t4XwcarWdSCuV5d5p5ZaQyMDYtcspaNFfQNyoEmAH41QFRjvkzLRCTFmDxWfz8Q93CHT9CwT1xV7",
  "key23": "3fFMZzfUzw1T1wAt6MJLX2K5JLaySy1i6TGsMynhMAMajC7js7uiqYZKqWE315Dsjy6pQsYyZQhT6FpNsQq4MiKL",
  "key24": "5LE31PUky4HFzg1MhDBfj1nWG8cCGegGVaYZjor63iDeonypLCBxATv7sPSoMR99jaBQ5VYMEbsQrNahpm7V59gh",
  "key25": "35a8DhsFxS6eLbew3GVGBFGroMmt3ksMCfE52hRkCqg3Jws6swoqNx3Dae7JnpTYPUKRoBUWf5EDRbhvD4wMzyBo",
  "key26": "2oKHjqHKZLiqN4fRbmCFmiwwNjmLvgAahPmW4BFkyDugoKez76nmTAHP21KCk4Xkpb6F9i5nqNtjFfatzeBZUr7V",
  "key27": "3okYojp577ekHDoAoF66zJXx7rqQj2TCXXWaQvaJzATqLxV3RqfUYavTvH11PNgukmqLBqrpE84gsGmaRg6JHttK",
  "key28": "5SbJkgf28eYZH12PW12x5RjTodJ9r5qWEQJw9hTkZsmYxKtjqfYCQb8GrhoRzDcm3QWqdrPHDV9eH2QEcqz59WYP",
  "key29": "4NH7Gf2BhnRzJE8nJK4ebZ3WMkj5NVL7oTczzBtVKeqkvofXTXeL4onSFwwzfX4LN3CQuPzryjugCmocg6QtPGZN",
  "key30": "2ASvQP3wos8ixHhpPVWP1ii586bY7rbgXiErFeqBmPHF4giNNMSEfMG9b4Pv43XS6YxDEARvCA7RydnjSypnYdvq",
  "key31": "3iK78KPjoHvceQCwPdgmzSdoUQC7z8o41Y7QavojKVsMNvpm8yg2StQERLhos8PnACRs1R7L6WjV3xiHge524sCa",
  "key32": "bYtUFX8Wfp2A87zMkBBYrAQqhwAbMfmCPEcWTUM5S8zyELGkRa2rbErM6ozRHibRRyyw7iJ4qpvVE4nWpGXJHdx",
  "key33": "3AeSL5buA1CykZL5U3nQeVW7CDwCFJnRAhBnEXrYXfiTiVTvpZVb9bP93wf7dS1ZNF2odXX8VUQVDpVhd6eXY5BF",
  "key34": "4Z7PgYjzHLQkdVks2MKXG4GiYokSEQMpsWxT2VUs6JG5huCXXt8gapVLP5axZiqc3XKGsZjoffg2ggprh5EJ6Gx8",
  "key35": "if2YzzLuCSTCRmV2qLjMDeHi13UpTdKZE7DYF7vrKxSkUde8HTGwNLJqbw5CkjfMUhQdygnM921sQLrk6f7BMsD",
  "key36": "5YJqkKdpcCNmderc2SH9qeiWVgXRBQ91PH6Ag6EqMGhxtneyXdKEgDr4bSXX3CsXEYbEtGbztvEJad9mzp7srBVM",
  "key37": "3wHMXCe12fM6TtXwv7veYT1pLTEj4psKx2DhNC5nUKrkJAvmFpgyCWL2oxNnKUX5XtgtTyqStbYxxK8w6qUSipkx",
  "key38": "2NeXKtZ5zk9zaryFjRro4FFTHGD2YD27UFNDJq2jQJyHvhRANaCKKXey6cRi6y2S8Ank1v2U73ww6uN95QW2YfbX",
  "key39": "3HVSPxFLinbZDRQQ9Xq1uQgmdjGvmbFDpHJS3A1jzy2yCvSbJ4FBZqNeNvVMPFKrrD3SvwzHMXwqYGvjaGMcnMUL",
  "key40": "2f9WocAmyLLwiriSDeZ3uzx5FH5452eegQ3KNWHHgSKNMUhGBvseUCRdMMvLhVowJHQHHZxbkGAfztACMeJTvkto"
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
