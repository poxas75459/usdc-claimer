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
    "4oHH2TB9enqoUEfY3pJoa2QAYky54XTNL9L2R78L24gHhToHuLgUZ1Ws4xZZBPRi2HQLUNbUMYfzPXKxZfrP9qe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMt5prrQf1u3XRKfaLuMHj6Rs4fB5VPtq7uHm76M6C48g9chsCGyyreZRqjzSjNZkkEL6U26cEM3PJx3d5Am2eX",
  "key1": "2Bb8WfYfSk3T8fxSTEuo5vZiS3oHeMzcTavvSzbUw4m772y5oaFALgv88dfrGnAqDcwXbzVgNXzaS33bsYqzzVoX",
  "key2": "3WzT7jvDoLL43eVwbksmt5NeSUniWVXXb5BKy3a1w2fR2prwcm5W9yjTaBifNL3oAwYkNw526Xpfzci7x2y4M1T4",
  "key3": "RK3r3ZTTPKJJcpX4xrC8PPnE67QLzCky5nDithV2Tt9pKEG82qsN5ygVvMb7uPsZwZ4GcpiKJap84edJwE7hEaj",
  "key4": "2gMQFedfZYi7ynojdf9Jbh1CamjpGPmusCe2dojYnwjSorPD6VRgxPSneXJNU1eAMkjiYz5KdmKmczzB8LB7y2bu",
  "key5": "4p1ys6FLgBD3HVRfLYK9MUyTu547jAvSCEnAu4HypvVzagwzeZ6aCBY49HTc9CNRk2pFXbNLEpLJkMxUCuhDEswx",
  "key6": "3xMFWf9dXdc8P9Jtb7imwX1LEZSHu7PDUFmK6ymTZgcPkrcgiMNU5htQ9KzQWjaxFvkCAd2NuJEz84qtft4VZ6Ns",
  "key7": "2ojhBvpzqrXRCwVrtA3C5gvatw8nZXvqN6AEji82J7wvRqWyWvijXkJBjwuWj9obXqoqGQc5CHZfws2YK83xWTvS",
  "key8": "3wXitv4zNpK4WFHF917HYCDSaHBTGgWpZXragfvysKWujuPbkMCLDnkCgiRfBMn4aVST61iwKeAfaDrjtmiDisdY",
  "key9": "3MgEYmtCkDWM9EHpvEe8bsczqM9LieVM6A5qaUtNha53DyBkQ6GHB6m4cwSDvQhMpNHwQZboMqMXEYRBtd7HvJPa",
  "key10": "2Frd3o6Xneo12ftgdX4nvfPyogZ3St6yS12iyFPFKWZXLSz8EGPMVegWxPugHZssrYMPWLtL8MSs6492tM9Jqrzt",
  "key11": "4ugGPqQ2GZcfrxTnsqB4Bs5qq3TViYWjEdTu1Pgb3PH5bHu38pYHPYcvig5wQgRhww6xsMSWDeTPvhfj7ZPCpPCz",
  "key12": "5sZELE65w3SuBXVVMhH7DGCvF9RFY4QxePBKChHL74Y5xsURAEAg8hSUzF6EZ179NVPFNWjxVHMYARRcKUseGL1K",
  "key13": "5tZAM7cpBgGmDKEeMso8MufzPDTS5iveXanSRC77yg5UR1qgKfTagBqjMyiXsQidKJQiDsy919onK6fo26CESVkQ",
  "key14": "5VNX7FMDqg9Yr5qFcEQupZj9uoEycNtiE3b6Dyqg7jNLpDiNcumRbSkBABzpGoRL4tfjLExUrM7v9uqUaEvEa3ws",
  "key15": "4X3F4xb1Y2CYytiPTBZn5ZqjsQL7g88YrLSSK6pad2jm7tjocDWE7TsyHJ6CbHz8zPYXVx6ySJ3ht3QuesEEtfNo",
  "key16": "4paHyzJSYge6chp4bvoLaxyyVyNBzWNaMnJr6oQ6Vc9ZY6PwLXC4uWzeRykTgnsxiy2qQF4B5jhNYworsarpGxjC",
  "key17": "3VWKL7jMzbg6pZnu5krvobZDktBLHu6T5PJ3H4sbzSYttB6M4DgPsKBJaWSeTe3ebBdm1AcGky6rxcweJeXMvao",
  "key18": "eqNT7arRZsCuEcF4ZV4L8KUC6C9txbmJwoL68q6JZ2CZTv6oDaWeY1jLUuzzMxZn5EJoir1K6UtGx24KSWnHRLH",
  "key19": "tmv1L1rppyZkLy31mxhUxye7AUa8my6kW5H3qnbnABGtgv6U8nkPed7jM193fs3Qn5GJX1itJZe7BfDDey9odZY",
  "key20": "25tX1KvwXJz6i4Vfpymz25WvUn2HsNtDjtHpe5iegWbCDrsXUgzrp6SKnM8s3BSLfsojXrBg4y2jqd4gquUP1ZKA",
  "key21": "4htgkWmZi8xgx98r2StfMjM8Jk6DVYtG4J4wdN4ouYFZtF1JmcURts3nVm7rEKbminM69oobNEBRkSnquZTnW1Lq",
  "key22": "4yxNYPqdCNg5K9wVRWydi6iXuLBr3bAUmfGpbxdxwigUVTJJG7FKZ5S6BUeqbEd6TTH1TLC113qy6okMPHMwbMwh",
  "key23": "5aGvqPfudKxvTcwFpqGfj8eUd6dHiEioxHBsgH5AojFbnv99aEiymYDE1UGd1qzTKMNUJA9KbYSkNHKzCdMMhx6m",
  "key24": "3e1kDJBNeYWwWqKbguPBq3Ri6ZG7uCL8vy82HC6iJJEoMAtyBdFMXYFqprLUgsu1jD38og5zRumEhgKc2arKRL3w",
  "key25": "5nB5KhVJ3TY3RheptDL9Y9iJxiDN9ouuQbbq8CLRdsL84ARJPzoCEZSDKXYZM72ac3CQ5PLUKC4W4zT3MefGL2fo",
  "key26": "5fGuZmLFBiicYec3kzpV4yHbZnteCJ5vpvWhHdPK4MLLZg1Na1mSZm4QqpmGCEyJSzAZL3x7mo1smnVCRPhqC7dG",
  "key27": "4ifyZQkFE6gu6D5ZWkyDTT5WCybV5NzZC2uET3MutPjx1NeZjRDQxAsu4DMqDT2wUNRwksGipf7Ad6Nw2Fjunciq",
  "key28": "2MuamwcPF9Jzk4UgHVgtgLU1z86gXXTAU7q1gwQw4K5vD8j5vkM3e2A2CxtWcRtHUS161dDDjKLHgAtvSzEmSRFc",
  "key29": "4ERR6hUP6ZLGVyF9cdKQFQUQvxz81WyRbrcxm9tXF1PzAembV5uRoySGGHCKaKNqBVeC1LjmQjCJLLiNjiTL9gKS",
  "key30": "3Z5m7eertV4uigNXuL75TTjva18vMztWz7P2mpVoWJpkRRY6jzqU3vANbEKDBRH6yfsqmBNuxW3mVp1hM9aXKKEQ",
  "key31": "9mNd6XVYAQjwfpqrAkbdjyDcEkeak6Z5r56vfsumCBbketyoTyYDKGx11XxKAbn546p15tMNkDj5d2LP5xh8yYz",
  "key32": "5kh3QV8C8JdTEnhfU38L4ETj6mG1jmWj98UgN4zLP8JrZd5C5MKPV8b1Vjsak5a3fuK1PgrPeggsYHEFfZMLFZuh",
  "key33": "2CgbBBLcDJiQXPQwsPmUjg9bLsbJsSjLQc9c7GUv463eZnjjVYbmsvG4woATEZkxsB7N1TsVrFv42Qw1SgmPdHR1",
  "key34": "efmkP7uEGRBE7Ut4nA25Vi9kLiKGZRorz8XSNK1szdafhqKovjVrCbEEmR7cxvgTZVNT65sKLwdpnUkgn1aVUGd",
  "key35": "4cwisvfxfSrdzHCTJAW1S3QcCdRxfQwMJrtVhJU4KsD4Eu5QE6t4CrhRGh5bBMGS6Nvf42b3JFRPSP2yKYNCjwtQ",
  "key36": "2rm4NrspryxJv4GjPqn7iGJXYxmHgy7A4t9S1f94dS9D95YuG1969K1tGsvKRRi1i3Su9V4QJLTgrhTnyKRp8Prd",
  "key37": "RsquR7QvScRHAGLDxVdoHzcYbkzSCXBASzQBL8QoY5Smozgo2G13esFEbbwTGS9aT4qjdAvqW6PTENe2nGPieZk",
  "key38": "56U2W2tzF4BewefKoxaTqvpFSqok1Ntmju5BkPo3GQtkStwHiEM7H2jXh4iTZfuogcmLkxSNYNYnpb8REtYH5mbU",
  "key39": "3NHUZsiJwPeETKTVxbQbX9xSABh7zj6Y31TsPb9bfRqbrcYKJxAJQHRDuPDtV4Vvg784jT3wcFDdJ97aovfq4kKN",
  "key40": "2Mq2jjE8aofUrjTnrZJUJtk3SUXyrKFBEu57SooK78hqC7LEMAXfVGq9h7ZfodrZyVkTQHgdAkffhfkYDiVfDCop",
  "key41": "4jEKQWZb8TmyxJQaFMKWZkwcQD5mwkrzUdSHfHCJSJoAjCdM8c3t2TWZyL42MXDub2yYsbeZ9b9kdHaqyiwq3ecw",
  "key42": "uNB6jSQYyvRy7MDeuuqGtRB1jiRYE52SST2JChATTNrbZ2Cf7VqqSqMEyrKC4DHKfqGQr5VMbKeDrrA1DSf4DYj",
  "key43": "4XzQsMtyMnYWziTCf4ZRTGsakehZ7hBT8rdpi1DhFEKGW6wmJ1KgjT2vzeojcjb6RRHuZ3hKmyy18D5UzQjqvv54",
  "key44": "5AFcDrzRt5okYGoFedcLB96rhnhVL9YPhiKYL4Q72KP6swe7RFyFVMkJLNMr2zDsH7th4XQ7EpVaEke6vaoV2a3n",
  "key45": "2h3RmRrJZJTWXMZYbZausuZNpb7w8PaGucL1Bpv3B2ChbSfALiLz4CnxoDG5o6eNE2QZeQULagJvBdmSNahvqYpD"
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
