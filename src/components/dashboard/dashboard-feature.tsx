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
    "3wbRtcMghfooKzUeAo4d7d6N4x6UqhR9h8D2BkudF3X6iDJEh3Q5CAXCVReA6FtyXbPV1ZPX2AmZy2ZoxfHbHVFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edYC9hD3ATEJLVssVrQuygGgfPzL4B8E392fVp5NYVhh7sExLRsBJXwEpjQqsZNaxQ3d1Tn8rjvP5QbksxWL9Dz",
  "key1": "2sMPf6PGHEHCwEVdH9nqdjxqF4V6KVeF6GWRWW4ZSzEs1RGbEHfAsjYwVZWcQtUt9NV6zNF9sPaL2zN6ZAEX9Ny3",
  "key2": "648WaEMxvjhnJgiFv1QbB11vB9SkqQ2ZDhg1nQA7TtwekBkzDLsXvcMvAb4Wmojq6zN55sc2dtxq2NMQS3oKcfPx",
  "key3": "5XNmYZSvtSjFaaeVqiJPeHt6vPNnhh9eauVsWjaPH1PWXkxCVPuzeuLDKL1A5BamSuzjtuiA2hrnJg66G58gLXMg",
  "key4": "SKQbgtZamft9CU5EBvP39R74iLCUK1KpmZkb2L3366cnFQX5Lvcazv5QGMNTZPT8nPt8GsBTMj3RKSDVVgEpnHC",
  "key5": "3wCpCbpVN3TfrcNsF4iBA5jEXUVtvDbMFjhSCfdUkWnxsf9kWKoHvNLfdLVvQ9FsaSST8Mn6eTjyUJGm5VmYcZad",
  "key6": "4NELgvPe8ZuNERRfNdPg4Cfi838LTt4ZZTYoxipysXK8vJeQt6x62oUpWXm5wjqQ5vXUPeHzzPmuE2nfBTVyWCet",
  "key7": "5oNuZRs3Hjwjpb14FtM4e4RoNkcfqtGQV2C6VhvRG1P1LohefeHNYdRDPeT7v5d8Nm4mDp4CwTqUPvpJ9x4g49GZ",
  "key8": "3yky7ZbwR7QNG1LV4PtYWgtkJMJy3m3wWabU7a2PJunnaSdmpUS9Cm2SKsVcsgo7prGdDTWhRU79Pcay5tcpa5Wc",
  "key9": "29pNs3iE3qor2pBpZ4BeBs9jJXEUt2T9RM3i2G1P2JZ6Q3xLuC2sx2zbjhmTdyac8jcNKj8KfKyJseN5se1of3J9",
  "key10": "2314ELVixi61tcpJTBpRXoNDtsboe1P9dsW3x9vTRw1NCeM8MqgjyYYputPv3jQNTVC9A8E85HEwzZ48UJ3t3Voo",
  "key11": "5UNVqEs1t1J7XkP4GspHWUNCWMVZonfXhcsbcKBbXdgh6ohbVWGqtX1B2PizkZZudyxv8Xu1jwAeB5jrUfJHvdQ6",
  "key12": "3ekGxrkG3MEZgHM4N9cmC5SDCiQP9hLziAMXp31AdiSFRyhXWUuZoNPyK5jK385yvPRcVPEMBYhTxKfxTDoeURNV",
  "key13": "62izP9YASyoRRKNf4Myvguk9gWNp4c4bLG79J74HEvDgkNWoLy37XypDB4RywReiGc6BB2UuCepQAxpjKNwa2j6c",
  "key14": "5vAkKPgKeJVQ5QKyUiFMvMfPvMVAVR7z8C6zNokZEnBdxqrZiCGXfhQw967Eg8UxeyZcmwjxy1fUMfnzd15QaTBx",
  "key15": "541qbgokonQCct6Go1NpNhsnaUcXqc9g1cFkc8gozwDSygHB9itgongArkv1yx8PzRs6y16MajMxRrAgaqxF356f",
  "key16": "454W9XUsLqiz9hoW2ENLGjkmBRX7oy9BCNeeGf5fcBYWRyVwNcboab9HZ6y8tunNeGBvDowfwbSsuX1edPrkgZbi",
  "key17": "4J4RmADYSukM3jf6U45a2CjQb1xxAoCJjnyvVmHTeXHmYf1Z1o3HVvJ5YymkZsPfZfpcTRs5UY56HL1qdCK15Gj7",
  "key18": "W1nzsgCYvH4SxacrJ7mQqsEzHmzyEC7dLhbeLq9LTyaJE1F2CVeaPfrgUV5JyPCAzD4BRr3YHbPAjCAx1Phptmc",
  "key19": "5GUAHKzyZEXKPkm1SjvGZeY2heH5ZLaMExaaDaBTNxrcv5wck1WYb9hzxqq3Vk2QLzpmZxhTEG5x6v7qKELBeFsB",
  "key20": "4FPhybckeSQiG6htRNW1cjkQEZernrDqi1oSG6vXzgXXQ7LU9sLseu7mT3hs9iPqyNm7FsQYmtARutrmHHo9aTaa",
  "key21": "5Yeamc6SEWbKHCaUyngXQuHhdfZJRexpKpQYbtvbeyqnKg3HbxUmePohnRhBXDM9v24VYDxunup6c4rchHW9EBJe",
  "key22": "5NSwgNX76oxL74wpv6wDzkdrTPJE3A5Khdp1fZsM1ucdRjjKuECg15Nx3WH6MELppPrggyYMGtzJr9ki1oSxnPGT",
  "key23": "9WNbupJZvueaMGmT1fP9RaoAX8Hv2uX8r3XcQ7nofF3g46JoSa8fE5JJqudS9scFQvbDosRMYUqQJpkcXuBp4jp",
  "key24": "ekLRSGZ9eSbSj8G7kjdsZPAmnacXv8JnLXng3YD3nidD2xu2bCCVA3cvfwwg5Yx1uAPpLVn1hW8SY7aAjkStTHg",
  "key25": "4J4AWcpMe3hoMTb7PoUJXEJBEwFYF4HCwfQvB4JoxNefHPQvf8iLzxqMptMYNVbHkQsj8hgi4pDxoTtYv6Gqi57c",
  "key26": "2FgeyYPm21PmyHLYaiAAdEEnTUWrXHaV2NXGBrpDe3dTJJGVw1uhquGLTieXEzp27CEcnjeJMc7qZei62dQYNGNd",
  "key27": "3eGTfKKMb87142eisJB5fq3Poc8kXdvVV4TwTCL4Asccvcuvz1pFKqciMMnk9kvrwyGUDxUS4oByhU3iugdPWGb8",
  "key28": "2E7jHEoy7mf99J1npADhnaTcvSHBGQzDf9czgYZ8JqaC612DZPQqqvgppiNetNYtXTHHtBXHMzrJDSZKk5CT9aEF",
  "key29": "2GECdQf2CmBf5qMeyd2nSQmTDbVETsNTaSSWLQAm3khWs2ZRKwxQbYWgXte4NBMmmS4TswWiXrBbv6M8AvBAxVmz",
  "key30": "62z3oFEpGDKgg3nQS5ZifB8tpSatSgK5bQgWu3miuVCGWAipP3873Pp7p3saM8et2Ad1Cg71JgzG7HLgFiaHtjB7",
  "key31": "JzVi93mqyEMmY5278gPGFCpqudk5Q3AS8DPhPFFbA6Lx5PTstRyBjvTzppyTR3WqYBDc3aSd4vENdZSJKQEjUa7",
  "key32": "3tVYs4WLcoWRMP59TuWEYWqczuF3zDwy4cntwR1CoeNhEjPR1ZP5HJnzf4GyJVr3EU1UPsoKtJuJxwB6WndACTfK",
  "key33": "4edJfZzHFQhLLcQzcrYdezmV1RSaQXPktok4QebdpQaGXbQVbt28p83JbsTFRCwJUu58BdEgBP2NZQBeorDXT4Pm",
  "key34": "4SkryqHtCzZmJqL273JmLWozLuHbKxXzhSBewF3k7dbDg75h6Num7XfCD3Z28riGLpa2vWJrBTVPMpz9vysHcwdf",
  "key35": "2sstosqguBAs8E1CmAvBjJboudwTsVDZ9dga81VRpRS8iXm7ioAwK84haSs11LVXMwEqS5KMGNato4a8G8NSh9xQ"
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
