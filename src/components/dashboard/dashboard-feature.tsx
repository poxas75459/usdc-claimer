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
    "mNmRjL4SUsNUmiojpENrkeJxTTdU7VhtBLuGVnZ6Bvi5G6sNVDiFHa15sTRgQp4xgKrh2RGZH9e6cv83pfMKxYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqA8kGaqv3DmAWASguzBSB5Anxs3eHLjGhNez54NDczVSYtVb47VhDMQRDm4D1KKy4Fgoktb5Ee1rxXv7Fk5PFH",
  "key1": "2sgJsMz3fWgHGtXKeVz67vmPPnB6RvJUL32tiAhAsaHT8uv222Sg1UWG3d7EQf9e5HdyMeSPujMgv5Wnxzb72dQF",
  "key2": "3kMsmAC7v2v32WYxhmaogMwcdHzbVqCzfwcMrS588ZuZkT5QXB7iJjEJuCpifGu9yEgfryY5qRyphHjVo7xujScP",
  "key3": "3hTpmedqf1fBU22PpDcPNccukbnzmAvawpLNCnuvfei9htexjD6wM2nUTLGRUHvPvf31rB5hpd7HdTX3YrjS2Sm8",
  "key4": "51ygyBi5jDu6nQo5fGheZ91Ggvg6mR1FRydgBras6o8ytyy13AvAooksm8nQhxUQ71BdY8KmGg46sm8vV5NDqH5e",
  "key5": "CHBaksttQW9xDSNJxq1D8z23vkH2EEWpZBkS5ihPJchG6fKtUjQC2E8p29ExUvBafHeTP5ByXKJHVLtp7he8BDL",
  "key6": "5KcZUXjaQP7pKzMGmqfGzF7iDpThjuSAY79L5a898udp8gkoi18cohVovWxnxPBThc353TXvZnDepFyodsZwBZQm",
  "key7": "3EHcFFYx2hXxsyitNov9aQLQNXGMk4huUdkYt6ZW5kePmMAmAekUS4yWjftsNKwDcYeJZ4CYHYagZbu6e9bocUwh",
  "key8": "3xLg8X7rzWbY9uL3ZqzNzVNdJx1kycd3k7d1uACg58ts2yaVeZGyDz8yTXLrK6NjqwpVt3u9dcmrzXzz9AuNLaUC",
  "key9": "TdpQxxz6rLLJnLdiQKFHpfG8pqEP3VBzarNtAPs6XsTAnKndwUL9Y9eb5FhwUBssLo7Q9kgPwgnDsbEtGfDkikD",
  "key10": "4t6ZM2tPgcmS5GELDXMJ9cEPkRtSn5n2WJ4AR9it2g3FJW3fUFMErroLyBqjTs1b8KV6zHS7BCRwtFLSsnwQaRkd",
  "key11": "3wwk3wV2TGUyy8CrpHyoLMBsHZXJ31nBY4iJLX51pRK3SxMdnAH1YAMeG3Ny63vNyW15jL4jRPePr3DD8LgzuXLo",
  "key12": "3G7a58yiWSuwMwgtiWLDD7LyKuJaCux4R2imwojb1TBxLXhTVqnnKxeMG1Yx5zmLMFPqUg1nJJyQsUB1hsfzGir3",
  "key13": "5XCoYyLERsfxpn12Fgg6UE2YEigqwrf72UzByv8juRXGktZgE8iBr3ZTWfdo1vNruzF29e1zfchrJPspL3mjxQS1",
  "key14": "4fuCV916k6j2g4wxW3c5NWtTe4xXHuJy48fmwV6wYKmg18Lcat3Jpmz1MbtrZj6M8MGmhcnMjtg8w6FzsRcYnioc",
  "key15": "5vtfHm2Y3PzgJVkvoAdcSN93gPh8SmnjxdtiLF8TvTgzUwitS9MJzR7nBgDDcLdtUUUTvQJuWEBoEke8DtXVpMWG",
  "key16": "3uYPuVTFCQGnZKzVcTgkhwjg56ymX3NYq3HccXzsxJroa5PnjuhPkCoZpVuE5d95DdLZghw3wiyzu1cz4UKKie3e",
  "key17": "2tFdQSHvAVBMymUGr5whw1Vf5tbvacHH9sTh2RNPsL2qbtGHKvAYoW1h9vYHLXxHcjs37A2uzyePgkxGcFiiL7ut",
  "key18": "4QXBm419PrzAqc3kdwmZHL7zXR9Duqa6sf4YVQLyjga2GyA6vGDWtSpKE7yyqWiQiBxqUip4nMD7jobcVVQp7SeY",
  "key19": "5UQrLcXNjX6vbm5gRkJ8FU4iqXjJUAU8okk4ELDbo8CXkYug4ATQkRMbeJYNxDgmLSCHHnTwrds5HuXqZgk11hrn",
  "key20": "2W7JfDhxk5ECa5xTc82Uz59Z2tmyC8UaNcmXrGXQWBokU5eSyhbCVLaxpctRFU3MeLZUEU3nztVuroNksK5XVyCj",
  "key21": "2idVombLTW4sLGFbuFohsJwqC8muZwEh7VzcwbZNpikHYJpTVAv95fjQ5yTqdcPez2p8Lsqb2moR2hJRSe14PDZD",
  "key22": "2V7TJmtBixXDciiH27a3xf1eYVfEyqHfjCzZGk62urz1entsmkoTp1ms4eEF8CfEPyd66hYJ1Y1n4VcoL7HUfEyR",
  "key23": "AAJUEBiAzxS7Ag7kJJsrn57yic3Ab2DEXSJxphvjdEE9jMokze6AazyaS1Zno3DDFmNex8zbJXrQ8MEkfstNJM9",
  "key24": "2ufBrFQVuJ1owPtfqXffvxVqsgHmZCmh1YB2zPJ4KUd71ayFQW3iqJS99GPRLUiWNExFssYFsdrpHQd7vfmSPqh1",
  "key25": "9HAYQLe4sYDxDdt4ngF3dL7m1MtkEFduFmXUziUR1vfkUeJQAcPW4Ww1uvmhv7aTFP7dqPCTrq1tm9fKfmXjqLQ",
  "key26": "5fk3q87JnZB3GVVW5Hhu1J1e2hddXAisBK2oZndytDqmNJLGVp7BwpeZCVJkqyCzBu7BSq3JzUXwyKvYwxMVkjVF",
  "key27": "2n5T87xDRFgYtXaeFfiLnNjGphjxQC36N16V4jwa55rAeDMX7Rwitj1pj65zoodoy5JoZDnLXeA4TWcAdBFZF3ew",
  "key28": "57sfSY5T6c6hJCCxEt5oSxhjKFvoWwhJfU4dtTri7JTG2ca6epEMVoF5zCXX7jSUqbpjw5azPsiBJqMmt8oyb727",
  "key29": "5ho9VFi9MBhsxJ9DTP7Em5mKcd17FqEn5vETWkbzy2bfb2FKeQdHuUk7CL1Rw4RWWUgaC2LxbVvgctHtbHvdFR9Q",
  "key30": "35Cnd1pqDCHDWbaeLVgP5uYnBWNRRDAg2KHRJMmG4nvbMGEsGdhfVVCqoVNPHQu8V4HTXnsphriXrs76JhwiEGJJ",
  "key31": "3uGcd9fBZvdCPfhL7JfLEMB9N5aemdJN8QBkyQAuJyLzGcpi96hy13tazHNu7uZkoiwZytSpEHJTPZ9SCVwLoHLw",
  "key32": "4ztPpChksq6sB9SCnNuNot1RBmRMhuoPNXd2k49XKWsygN96e31vEEFs4UMVgUBAiYcF6mFdsKHuy87fh4W6U4sb",
  "key33": "4QhfjsapZtegqVP38W5GQKDbCER97Qf9aLJrDATo8tkuWY38KRdc1QAp6rsRufs9LAe26bgj9REkbnGtKswYgEdA",
  "key34": "RiWSbHPJb1YHztSVkspq826nSrgvTYY8yeJ9n9Tn5tcEZ35yCM4rbWdr6f3c8YchXENqztp6KTX7Rqs7AZ9Aw8u",
  "key35": "2ezK4byVaLYFm8iytBGBYERjrG8sjX43rZEYoCUa3BEMruADgdzrNE3ZEP4DMbMbAa4gn7uNMv6r4FZKB5DU4jMD",
  "key36": "2HSGTcDSsRqJwmNJhsD5zw8vW5CbNa14PvLkSKGgi9hVDDWPveVDSL5gE6rYTTohJz8LGfBd9MGHCbWfz2djmoZr",
  "key37": "4p9t1yMC1FZibiFQeoFwEZ2bVp1nh5BfZJLrNuKRsdRQHxDFmLN8xp9aRWpnik4JmkFGcHzwSg67md6aSecRSs3Y",
  "key38": "71imPNtM59wMSjsocVNLPWeHfZ33LVXPZd1Uc2gAR3qa6ZX3e88udMJTKsnCcZz5if81H2FNedmKbtZj2QRmUfv",
  "key39": "3X3Ddd1X8iuDBJB9gmwYYv2RB5X7saiKRKoMMRaz4bh9TbjcceoyNp7gcT5t7aAkcncVyP4vxLJh3r1VNpjCpzsr",
  "key40": "2KohrEooGDSu3or8utdKNQqd5rM5jkJVDjesMBdbsSpZbCFAugMiWA8KQGtHHMv2PKxrJPvfFUngDQcMLT2hxe6X",
  "key41": "gNWUY1QhwaWsaxh1DQq44SZMnAxWRpFGgz7txVpfpYDz1pg9v4T966JAV77GHQ7zfWGVKm42UwWoehALgJnKzpV",
  "key42": "572H2pMAskaBD5tNHHBmG5wuNSuf5Gnf5zJDVjMj8vsYzeBpoVpEye1SbQajJQLYx4KihEcshxFZUEwbXmsN79Nz"
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
