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
    "3mK2sGUsUPcmUxxgRw6VV5g3AdDnQ3yNguPDDDdrDrpBbNdpCn4zWhjxqnE8DeBythkwJhyhLhRzTAZnxQW7T4Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29oJXSLaJbVG6xRtD13arHRD8uo9bDbmfUQBeYou5VPmS8QVKrQYCr5LKLM2SztCaE5Nxecm4HK32HHzzfVUfC6q",
  "key1": "34VpSrgNzzDmQzLL2VQnmpTCARdsGyxtNWbsKdsDCPopyJec8pgNyBp3XNcnmLckjQ1Y73e2tcPH9u8ARJtQTZoG",
  "key2": "JAWBua5bjMrrCcv1MGUAiosrANREcscK5LS7TEMuYqA6N8kUtBJWUMoNQABEz1AvnW1rw7HwV4CXNFYzGpQF2aT",
  "key3": "2VmVYpDmuHLM9TG4noT7sgeP1kXmeShehcoBKf7USttxy4BhiznQyUbW3ynR8J6GTL4CQMmdwCY7PGvWd7QZG1ao",
  "key4": "51PBEnj8WQ2qT9kHdEvxjwMERoRqDxAZ94qDvYPVyvGsCJCD4oaytL33E7P9vrkJo86J5Wutft6jAWHYo3rnPhmm",
  "key5": "65FoquEi6GVhHKuMuasBkHRrkD3mJiC6pm6cYWoZHzqCKZh9LAXRaygeoavCMdjf2hj39gDDe6aQuMGRHrFSNpEC",
  "key6": "573Ja8EEWJJaMJWX3QNo84vKpoR6JLDZgJpxHBvqxLz8CFv5xa9biFssS2fQMrfBEkZpi933Ei2k5xJPdGmjCKp6",
  "key7": "yWyhe3ZSZH6qy64uABExkRWX4BsHYV1L4gq1iAdXpg4pidZ9DSGyFrqf6cXhrABc2Z2tH6fyUyjQtGYnsEmGRmD",
  "key8": "3naV4toATECsuzb764YUsv5Va77ZPaZs8ANdh1dmd8EiHfwpXxt7CEPTCVHfzsqSSCxtTYkasRAEZsk37LorpCsE",
  "key9": "3Nf4MrfJRBHcF7BHcwm8AJpqdPfoR5tkFYuWyL532U2LnQbTyHftjM5KgBsSAfxKGNabiCSYRmv4ZuGerYXga18a",
  "key10": "5qgphvFhH2HXBUANcbYuCQ3omYNQkYk9apYK3DxtLheT5Th1BDaMTBYrQemW95kLKZtbZ2fchoDH5znXejxt1Wob",
  "key11": "5VKLERDL17grkmsuxG5YYzDBe88V7so5p5ypX3H6V2xvjZqmXofbhCDFdeqHfdJdqLGbUywb9AqYJSJJXtJYor3R",
  "key12": "3HmzBpBxFGYuWNX1WeuV6T9TsLB8zG4qzLEENK45tEetbjRmz2kAJJNQY8F18soTbDPCkJPLrhxGHUxXxLtf6VZk",
  "key13": "5KpD3kFmXz9WNsT1av6EkyMfG1UeKKfqPUZbfLQgykLA6mKkD84rSiZ6jaZj17Rs9jjSWS5aAKHn9CD9TFBCtL4T",
  "key14": "2VReoRXQShVXoWfFCDvAS7y7ZWJxBNp9mgUc9QETQCt77xACL29gej3S48THLJFJAcFhqzVBjvej3ct25KwcM3YU",
  "key15": "4LMtXWcvNzvVWtkq47dKHHMaMBs6oA8pYReiss2MHguJ3MVB8nV6vg6KDQFm1FThHR24h8zzocwF2j7RbSAo4cJT",
  "key16": "xx7ZSbqRL4FnCm59wKbagdaRzCLf4eFzNdb9ArqRuSdGkDM1AhFMpsUvyxq9Lx4n6qib2PE6vkRd8CFXePW8BvH",
  "key17": "FaFfZbEcPFPdMHuGs85SZdaNjagoBWTn4wNhe6GrNtuyfDfwoUoQw51wq32js41279rkEaUFaCeKXKooy4VzWGL",
  "key18": "yWhdHdrSQGoaLPRHXJ8UazoQyFKoLL7smMwkaP8ABeaHkFitGWhifQWHD9K48oDnGhuKSbkf99rdsmgqJqL8r3e",
  "key19": "5etg1Fc3QaDuaorJXjcTAa7bW7kRR6gdoGNBAhde1uTHZvFzaXYCyjQn55eWSiZFuX27Y8RM1GQ4AE2e4ScrR6n1",
  "key20": "4GP3cAWgsB5YfpYLoyTtgRw5BhD8VP2gbiMfqC7QSqpgQTt9owQEDHNgE6B1LNXUpHtgTjTWLNX9WNm4hiBP4hY5",
  "key21": "3GpzaCaXjaRvJKbFygcWteUf6XqcZW5eSF12oAF653Z9s1xgPF7QS9f5XFLtSgen84QVGm9WMKBvjPim3CEnESeG",
  "key22": "4enaAojdwkmkhvBbfHqDArHGC1nHss1pHpm1sS6AXB5dN8m7hWtiFkqybDi3DURnKP8JGUHwRXkdfWj5s4WbRYYN",
  "key23": "3FWBmeqtQJJYXvt6w8ZpWoehq5C3UdD16m255oMKakAPqFrtxru7eeMT6ZSqrWmsmqzo5KAEUsDSmMmGoHRCWMdN",
  "key24": "3oi2PoWrgCxbam7puh5uFNkApUcEnPDkhKXAV4E2CcoSXydD77ot9VbpaKRkqFgt5Mi4Xay7oQp41Qf613YT5mUx",
  "key25": "5tkboPcyjsHpEWHEwew91As9KWRsoH6jaPRbnr2mhRyWxG6qFh63YYngFCYHBfZuq1DaNttYYTeowhwsFmLs2KgM",
  "key26": "3jb4xvgU6Qy3RpeemAwCnRewq126pxmh7dyXTg4P3s5uKwWYGCqtE6xw2QL7ZiuUCQLxi3zmFTHYFvuw7hbKmSt7",
  "key27": "5vBxLD1LDnfhrNLDZJDQhUWZkGuBRrdSwtA2qcPFBqWsZXA4pR8E4a78Be4tE1F3HGQ6afHS9XP33h97V5UcRZhM",
  "key28": "3fJKUf3PUviEGdj5AwWWC4V135dy8k5v7wNARnymMrMxq2eDHBbKnzd54QWQRdoX3vCpdXfMs5H5qMXqnRLGJQbn",
  "key29": "4PGzLJqPHyjeFmFio3XuVXHPb9vAmyzKk8zsG8znq5Tj7691o2bBtxXZ2NU1iLrH61QCLVNR3fP9DvPFwuMRcGiy",
  "key30": "5KZLsRMXHW9ZCLnUa1WC9u2ddciFFinvsasAv9RAZ2JKKeaB5DMiYwGHSXannwxf4hEQZmunZLmgPYAWjrgxsEbk",
  "key31": "2QqGNrVePE77F7s5Ks4CSXYRVuNgYWjLd5LTd5DBki7tpU1QZgXom6mcMpywMVCi4E5K1FTFsygaHpM7EYGxp2tp",
  "key32": "LDbUHzgKFrxY8gzUYNX5EamHWxtEAvJeA4SgxJ1ynRJuUUgUdnBSho1TjpwNRzs1ya6FgdL49uoo43fj3dWoKXz",
  "key33": "2zG4md5ZbWBWK5vp8mh4cxqufLH2ydGBy4PiRjv99p2prpinXcgvrBokDYiq5En7NSjqZebM6tnwYXZYzver2NnX",
  "key34": "47cmsjWhx7cGhSa3G3Sb2h8w6yjzbfzvzdyfUVUuUACjJNzrkJkpSt9LZ8oBLnxyYT8x2KF9zKusYerGWzvX84Bb",
  "key35": "5UqT3T3sciBKuVbh6pGc7tKQSDxox18vZNNXZT7SNhpRqpCqezq8yw7nDYysf3NK4erR7Jx79jtc4DgTH1PKQzYL",
  "key36": "LdaMzeorQBWeLZSJG9EboQUThRo2c7wiGmieWDhWvgR3gfFYifj4m5xXnQRPeqvkEr6yFkGGiyuLXw1fpoKgQU3",
  "key37": "3o9LE9tbER5U3JzCdcuE1xXD1FqrmS6DfiRfrmnHSF5yVJcetWCT285vEsHUWNhQgSpQauXyEZmqWKZiq3JTPfNG",
  "key38": "QJTep79pNMvbtyHqwc1nHdfMfyjLo6TEx147CbabWHKdwYoumrox4VTieSjxhdcMrv64dorB3E6iMFtKXGmw4Qo",
  "key39": "2Em45n3WJaFwNJHUKzLqewJ8ws4sjmekvuz7A9Fx136sgqyscmmAXYAs23DJ8y6fStW2Md4WV7kC579xZSes8Mwo",
  "key40": "4rtHLh3gP5NpHhn5hcsfFt174A1Rp8XWcKZvtab9bJoeXigZeZug5p5iNGULazk3aRcQpYiyjY8eBNxvszEa1d6m",
  "key41": "51V2VD8EU2EMLnZeoRLXQvN6NtNL3GZTbFFmixzfgL7nBVU6Z4x9Q8cqxxA34pJ2E5JSzE1yBt59j4axu717YsdM",
  "key42": "4oFjgNHsRxa862zgGFEFyHGggLRmR8QsbiSAkh82hGMNDUREB2TNCntgPagaYZTFPzfjrCNsWmmd95YBCGpNHGZM"
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
