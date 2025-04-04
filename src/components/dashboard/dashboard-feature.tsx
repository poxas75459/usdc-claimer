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
    "542LzPTg7z7qu9ywC7WDNacV3YwwWKoaS4gRDma2bNkW9oytrHm6a35i6NmYtEgg4sB7xV1hUyVm4HVfvVDzRvHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hcBZyfZu3jT9K3boPN9vt8jmchwsJHVPsv3CHWCgKuVGixidyWFiSwiUZKHw1pS1Mbh4CguvGVfJjTs2TwkaVT3",
  "key1": "2hvUPx9fnWKVBTiNSytHN31V8qzZecSwpzkwV7QQhxyhfQDGS2YTrsi15cxvuKnxw7Fprr6WyfY48xjzcN3NKtvB",
  "key2": "4aqewnCqh7eC4zGcqEus5DF3swoBnNQXbbkCTUYE3kZ2VG43j4gneTnjY68RAjozyMA5fEoX2TFxtMJ5zEJfhBDA",
  "key3": "p2qD4chFD3bb45najSfnNPi4Mv991vECvjyDRayA6qAegDD5NGrVYFjx8YcceWteRkjMaC4t3U4sYeaphZ3CxBd",
  "key4": "2sodWxYrL6W6EgqvnEeMobR8BzPeYRRFPa8jxbSACtRs4CxxWPySen8jzraA8uQLDBCYGdTrEk1Kc4dKs6vTnbJT",
  "key5": "5nFFrwME1yC8s1W195zCpfocJsvP2M7JrbucN4sSD268oSVYQ9QFVD9oCoVxUqky9MNnreb9NAVAVmSQ9KxL9cou",
  "key6": "AkuWSxivbq83PzvsCG5Cs6qpyRyfk3K542oenBTzAZCVcNQ6RqXTWCQqnoMmwMK2JKy3QqB76tb9L1fW1eb3mQM",
  "key7": "5pxLy8FLcRYrTZmija5syRUNzvFVGAjDZb3yjoimiD6JnXkgisfYD5PcutmmtBybdBFEnLHmMqZRZPuuWGaNnUaM",
  "key8": "2FRf2SJNSuHCtHMZKLTQ3BenZPFZfCEEFoncj39SgjWTLo5endXJFGfTFGWeXEQenqG6zkXGfdyAzr8MtGsakSWe",
  "key9": "tGuLhgncGaVkaBtMssA6JVtcwbqTHRs9C4iHaxgy8qQYJKMymp2iQvVzbuXreKQVGJLfF5e39iw7K5efD3Jmex6",
  "key10": "iTeuc7PCJp6s6cCSrhJNPBnGA92ex7y7RuDD4U7aBkpU3LnrPPX55jKkDj9iS9brB4mkPtjmmLAwRtoxhuHqs4o",
  "key11": "2sdS5qAnNBmxLkiPa2gryR8NHQULZyrPWzpBraK9RsaXJ4Uno35X6eEfkgK3zRtV8VVcA19ufGo8iAjDjS5Je6HA",
  "key12": "WuTnKhsFw8h7kgkwEUh4L8N7mrA2GnnFWutZo71pbiag2vtjTC593pBJRgpRNmPBZBfDnzez2cUJQ2TDuDErsCV",
  "key13": "2PWqyMK647ZuPMRbRHak6iPE1gSPzuwUSWoTseu62kWPuSx4AT1q52JCZUdDZAY8xYmCQ77DQ1eoi4gWHk9wBmSu",
  "key14": "5KXKWaAKv7dbBiXnN1LNJx8DoUaeskVwQ4oWgVCFKRykdVp2xW2zwXNfFwfrxz86BoSSyzVd9pDB5RLEsACpUpwi",
  "key15": "54jVh1oE46XfgELbw6MJURgrMoQn3W2F6QDBySYpmcHg9VrjmQBafCBxSDVNawJkmH5YQMEiHCbTEa6WVWoucTmf",
  "key16": "3Eyc6gzCvkEeLg6omNa9MLQEBEZXCECUjtiERCVcpggAdjMfGCcdDZu5ncxjnrUndobMrUQpwwCsfkf9z1pNH74z",
  "key17": "2Ek9wMm6Stt45TjkJmNQUYsEXM3wppfARhUR1NdqtQf3BfSWXpoM2sRRkHx1BEwLiJJgqj3SwZx8VesibnBg1knM",
  "key18": "5pZLQSSFgiqxw3y1RBCL9aQYuXP42U9hLUY2iYQQWd4aDBgRpSoTmqLnsDzv2FKdMAA3Wkpg6o5mAYaaAHPPzzdq",
  "key19": "qZuWg2ZaB2j35A5YptDeE6vpQxp5xJVRcP8BqJ4rPEfoqDGdDN16UauQ4aPwjGovtXqiKy2eerSwoidQzFG2JjY",
  "key20": "5h8qwuJtZHuzy4gQ3psxSgsrT8MyrKy9vf2eS96JhdVWqPzfyrWTWCtBf3Mc7QgJD1BN7MNFqMCgvBhYLy7rUaNL",
  "key21": "2P7LehZt4ZKj3MRAeMPXn9oSrSs2vFMhhCpairVtDmxFsvyniWLBdxt2Vag6GivLkHRuM53f999PqKZApfxf8nEg",
  "key22": "RiVCF8LRxF6z79HpVcveeMuzKCNEgLqjS4p5QLoia8WNQdiYeRvgoSKssgTXRgXh7xo7NnGWQntxsfF4kqBz6D3",
  "key23": "2u6F54SJMZzsGNXRPDTwE7GBAEyN4zfnSEPpnRcjJgt2bsJPQzxG1LTj9oZ7a3a11sYg1DyPaDeD6nG6FR8h8oHf",
  "key24": "3qt6736WDt19UWhPhxfSWYvvL5NecvhrnHqtBawq1kQnTuFovqdn2u29Ztn9dSYVS8Ry6uMm5SMQGnRN95YwB1Vh",
  "key25": "47ghn5TrRbPgvEqNZM5HFshMZ2p2Qw3V4Ek1i6Rqe5XytEWyYBLbtrTHHQgmD27kWpakEwT3Eq3as7SUkLxZwpTZ",
  "key26": "4wkg9GtmDn1MvJLfLRtBfF7hUt8J3UYtY9Kn6GiJaRE11sMfJt8hXVr9CsmK7RczPTVWLmWhDhqmh8LJVwg3Jq5v",
  "key27": "26AemMGjVAuvLu8jDriq1G1DVH3GnWF6Dp2Czs85uKBgTPbNUCrbnjmNNg9RX4iGS3XBwJPhPQV3dJvJ99LghHS8",
  "key28": "3pRmeVGrpZXraE5xY3Paf9gYuxE8iGiMXTa6AD218cVr9ciyjh9RmP2y3fpNDsGvPXZG2Jy7oRnRt13Dee3YjMpP",
  "key29": "22RBHPS9myPiwB8eMvvWP95aDjs4Mr8Tn7cGa7nqHPkKGwZqgspGDqGh5UMhkYuFaFQByy6ircmVjyJL5kB9amGH",
  "key30": "PydH6pnjt942d7i6VuFaYpKHz5BevLAgs1RnS4CKjtphiibmzFbqSKV9voctpxJSzGpqRgk5zPCKDtJx8teY5QH",
  "key31": "4MPz29FS1JHXVtL8aZh9V7c4a4ZjQftPTyhMJbeRJeso6nLDPkUoUgHF2se5kNJ964nFHDVBM8V6jo3gXSByN9EM",
  "key32": "3g4fzDuZSy7awKr3TpiPbGkpGznmjKgt1C4JQG5eEYY3riEVDJvUpwT9gynivmgyuhqhvkX4A8d6GBLgRhabvMUC",
  "key33": "31jsV7VmsgxVCMkhkVRDJskFLEn2PHaeHvx4PktW4TSHMfY8LgoYUw87RvgfPH4Ho7Ac3veuA8cQrkZkBFUV4eiL",
  "key34": "AFaSaG272E6FWe29jbdpY5d2EQPPTUFp1fFKcP4aFi86c9yH5Tx25BY4aoTc5u76cTvTKVvhFduRVA93PcbWK8Z",
  "key35": "H1MMAZjkcDFj8AKc2DJHXzd3Q5pcoqZVa89ov8Vs7VFZJ6bDQ5t3UtcT4NHK8tVBsqKvBE5Nt1HvS4ux5E9nTx2",
  "key36": "3zjLiXsSLAVXA5trG3ZRCDFVGT9VMG54JJ3gv5iUvnv846MpG7j4wLfjEt6rDovm7xh7SjCJPsVhER2hfEhy5hoz"
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
