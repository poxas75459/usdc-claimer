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
    "rjVQzsWSnwDVUXcPdEjX9Yckm4zntrmdD1Ja4Ra9wLiJGj8fUHs2McH57X2tsX1NRKRVZbaHyQx1YDVxBEK6tEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NVrcJFVhhCVADwWDwHA45uct136zCX1o3rrPJeFHiDRZecdmc52xRKrrqBzA9eoFLQSG49Q4qeo1N4WgbRqu6yH",
  "key1": "65omswuRGkGJ8ZWDnbmqYXsoGtcF75yLF7FF1j8Dvv8fENS64pVE8NcsbamTMYriAUCD8xUZpTyEH75qsh3SMAok",
  "key2": "35Je69ynSfGD7zbEE6RYk4xucXd2W3eGU15VKUPZ4hpdVuLRiWhtMeVAkPpXkuRsogmZ2uffidHyn5Q4aN1U3bjT",
  "key3": "4d3S3G1M9osBNkRdu2eadzyPMztoN9saHKgnjR49kXYM8Xi3gfxrNsvNesJDxhc2ibdDkE3QDH4fpkDpCunW8ayT",
  "key4": "4SGTQUPW9UD36xhSgrfVMN8ZZTZXoGSpRnN86DKH5hHh7WG6YDZMCJXrCGzFcSg6FwSXvALjJVQ52G4URBq4kNV4",
  "key5": "3DAXtyij9R1WeWamP1ubcuzrFcBY8otu8GQRoUXRX7nmFZoedxhw2erM8t9NkriFR5wwKPu8APHN4EDuzipkxBZH",
  "key6": "2yxp3iDSVpNSRaqm9Y5icVrw7aafkHZSSxzohHDA5KurRvMpisqDRJjbChiAnSy2djfLKXLFCGbTmFhcQ6Nnqv2u",
  "key7": "4qXoqPfnd9YeuwBeougb5sDeKXyYJok7cqEVwrbp2K5gYbEbQgKYRsmxhzgVGi66UX356tdbQfsuFgmnYrbYpa97",
  "key8": "2ZvfAJUGpytBRx8nEypzcrXDFxf19Aougy8JL9wkbyxGhwZLpDYPVqVhB4gmepPcNNjreUzxYVhzX8qBLT7o4iF",
  "key9": "59tH5fgo4z2CzpCafTVWqPFUfDNLvWycdcsHWDs6PjNmLbvwgBbgfBme48xmXRpuwNWRjKMJZC3fr5ogpU7wLmrk",
  "key10": "4NknHNW8HdFWPoauvzs6LY6S47N72qrwEaLg1z9JtMUgsQk3BNBYhDeSTs95E9XM6agnRcqJjip9KEXMfptbFYGK",
  "key11": "3t8EiayC4jKuLLipPeRFa4WQKJx7CKS64PB5xCnjSJi97iL9x98YqDnyu9PVTXq8x3cwcHdRa5d2zgduXST4GNsH",
  "key12": "36TpsChhjXQXmBzmoQU5zbryL3m6bLeQ43JbBV5Rwvt8tWJwTxbuWzEWm1F5tALqD9Hag4NNn9dNBvTjtbq4HtFZ",
  "key13": "3zj4Nb25P9qBRKR1oCpQwkbLcii5xabw26UPtMaxeJyYSiYMBELwW4PCDx2iBmW3pezPgjpFWuFALspB59oedRXy",
  "key14": "ZRxGPo6ZsCPqJmvb4dVqkcDs64jURSKHg9Tx2znfzqmnFZ2u5q8Y2MLMB7vHMvrdMtrPr8nzreahPUX91QjJRTL",
  "key15": "29K3VzJs4Ko9ELWABA7c7c1hyJBXJjmieR4jdNNr6H4m61hSHJ4GVd1yL8x6hM4tt8rftd7Js6tkCKAPPtnyizKy",
  "key16": "5Fgg1tDcz8GKWsjzkDPnibwfMFPsuEQUqcx3tpe8DAr1z78jiWGBaCRneWrtUvp9r7kAz2od2HeQP4ANkoWwYWBt",
  "key17": "3X48AvgsKMTjw3kKx9S9qvuHQ7bjrkRKk6N1d4j4dVMUejxcyXRAtb7AT3t3JLzcgL5ofh8eXHYoxYrZ5ZLsXFJo",
  "key18": "2FU2NwSvXKuUGoSRQ5utjgPGdtzus4DhUtQAc9fkFqyNKSSTHrXKrZUvLSdT6Z5T28k6zAmFsT6TRPy3g2ryRqhN",
  "key19": "2UCHnVFCyDEhTrkDCx2LG9MaA8Ze2FMAdQkZYDYjaUULgUgghquV4En7MxSBUNSb6N5M4GMskkoirN8256pG8h3z",
  "key20": "4nwaRvNoMC3oi9JetTc5ER3mSS9i6CMSW9CZ6pheCkEaMCkvB6wnxor1CzqKbLtXBbroxYqabx7CguU2WzvSgQkW",
  "key21": "tzXTBHvMy3BX7Ug3bBinaabLp7qKiKeS5mB7fWejSXukr9KduTkaktcU2dEF72a5vpBY7MAjVcfVfDxyvtUJ8rE",
  "key22": "xny6g25nAKgggJfN7gXNdq14w6Vp7FwCEfj5XJv14FgiSfC1iythGCA7KTt2Yabfem4Ez3RCG3nZ3X7WuzPNAqV",
  "key23": "5p2zDJSoqqyZhZrd7MQb1gmu9BWmiPpKu2YSjMXScBnHnx5NeoQS5C2SCfcn7kjcfZ6uC9BmLwrVtdEHgGNpPb5C",
  "key24": "4F2ps58HKNZdqTCtXYUMH79nY3nuMXDR8UNdQ8t7yyorosWJqV59XXCpKrgnRKjJz6kqBBdJAQwYAHccK21cfXtN",
  "key25": "49aNxjN9jADszMbsvVj6dpU6t5LaanEWoPKhTx5mrCEDkRSQ29chDY5jy8gen1Av9ekRVTV7SG5LmDboPAAyfW6u",
  "key26": "3coMLhxg7tyEh4Wp9ALUUpK6Zf251PtAc83H7digdL4Ve1BWmPMEHuAQ9XjiAZhVAqt6GhGyLcQQBCv5rWHeDSUQ",
  "key27": "5fqDJ72XuasDFPhKCxgEgSsKJwZmbS5FGAeedhyykkVFXPChaCcM2kwGNFrkgdJn8LjPrQYS6CornVTtxRLTXHTv",
  "key28": "1bfb2SCoSXEgK9VUufVwcGbBQoiweyqT8xQY5Qk97BeUg6bDJLk9xQXLM25kpxjM1ievrE4sQkpFx4hGhQjhBNQ",
  "key29": "63b35Q7unBGhZggz7bhAutytbbQDRYkvYAk7jwfes4i6D9AAD7xNdk1vekL38W5oDUrXtjc4FEzVxX36y6MNiwes",
  "key30": "5ZPybWZWAhvC6PDZHUT9KKvRG9X7ZkJxprsmN58kxH6S3fYTzovJPTW99NBVQhcYrcnN9RDJEt7pVZafszgiuXH6",
  "key31": "21PAJpDLpoNWDCgXdP6hmZie8G9ezgxK8k1uxCBMpAeAXAPrag2LDYnkbcfujH1Jxb6EjavCNiwFA4g4681mUphA",
  "key32": "mbPpmDQavj3JiuKcWaaPRe1rZMqEwEafmX5gK74TjxPtNUZxPjJtSCn4icL8MuM2kPXZ2fcBhirxT4qYr5feTBp",
  "key33": "2C5tFfSjCGTYYq2Br894NrzYTR3XQt9DQeK17f1c7sF7JDNDnfqvWVji5tUmrx4c7nogj4GdZ34Qakq9VgP8JdrJ",
  "key34": "2yNKc3gnxDGeoMZYkKTPiRRqj2LMyF5LBam7kULzWMRoWFJeeWWwnyYWPsVBhotyvLxjXEs9Tnk8aR74bjvyD97q",
  "key35": "5CXbu1TPxxLyGn8upJxzM6Q8nck48es3GCfqQGGQSjv7h2ZYhQP4VkpE6uXWRUUU1PaG68tqJst7MCpXbWjDZ9fr",
  "key36": "5F4XZ9YyNdQwUY442bvkRwpt2epUBzao1s2i5xhTgRZm2cUqANnmKCSBEP9iUoJZe9iTgdSBZrbuDNN7tmWZuv2a",
  "key37": "4zZXkZLpZPLARAonAJc1xfq1NiPKWJ6FQpy9sYNL1v2hvbkkXGN74SqqAJo3QmxrFPpaz9t4EyQamrozhPZ7ENUr",
  "key38": "5Ppn93CjutZn22h5JP4mDfqnbscbxdtFDdgn7sd4q6dUB1asgFQY5XqZNebL8QAXBjnNsGbEYPktm1JRQmBp9Boa",
  "key39": "1yvoaU4rLU4sX9MX4wqXLBH1kByedmFK37NvRhFmjzC2mR4EzUoEiBqGsAPuxwFUBtvXDXyMooZ44E5hDohne1L"
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
