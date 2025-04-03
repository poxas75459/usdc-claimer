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
    "4AfERWa3G7McwdvU6sAZ275qDPrkDJj4fUUQwYpha9FM9pZNUtkRZVqpXwvQdiQuaspSKED4gLTaXPbGxfiLM4cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wCAxekGbddjDUgpzv6wmiXUn5NGPgkVDJuXPzLXuawQsorNdMkMZfJ2wutzdTKrarWAgAoRBEMkC3CpwS2p9Rx",
  "key1": "aMkLAQyuBZTmHteDq1T1i4dveEmgG5mKpRowJkRcjtxFfdrgqkyYDd5WnpFFkPNSNBfrJfuVPdYmNrap1we8pRi",
  "key2": "2V4bhguCqPQjKVrT24yGSZwvg19T1tEbpWUHNaftYghVTfZmNLvE4Af3EVdetu2vnGfd5JYAsGrJ7GoophLRFeo4",
  "key3": "5wpxv4eLecfEHiV4zyFrK8mepUUAaeJ5vmXtvvP7Fb7HGPSWL3MV2do4XmtMdvRqRRNJVN7J8Pph1fcSFy4oLGfR",
  "key4": "4cGiMgVcL4fyVASHhnnemWfy7pF4vHbgb6Rxn8ed7LZmfHa3u6UVJBxW8f6CPujY3RwogR2dvbSXweuV6okM7LoA",
  "key5": "3rBpSihsVLiGb28aJnP74y5XpCABVyRdy8VEU56pt2Xwht6tGUgqtZRp4Uau9K86rdTm4zER4MmiXbBNHxYE6oLT",
  "key6": "5PNEvUVyXm4wH4KFmb3mrnxLADzcnmpYmVZ9RjtbmQx4KgYZV29Dg5P1TkPaLMEnGB268EjJRJJ1BEP8Grzcet5f",
  "key7": "3bvWLi36azFQ5A1qwSZ6HGBWH2RKmXNesmN7MsbgY3hL1GmmYa8tFhTfvYXseV11Yv2BAUk9LDideZxHjJvCHJLD",
  "key8": "34JRbfDjccsNz8vnoK1P4QaKS8B9tmBmWB7z3518LH9GnEXg8hBFSBP5g6xB24e3KibADmpBgGa4qgWbLA96ykXU",
  "key9": "56v2jBNTWb8cGdWMyZpDQn32T2kQAZFwJ2DLGNidWP9SRsRotXP79T3Ke2AX1oBUm7d6qdhwCKwJzrEwAiiHYvJT",
  "key10": "21A6WTVh9crhpsbvm78MTCE7upJMV3KVwEkFHWHrCpq6XBuMeiXdGMdRrNBtQE9kY7EfWT3kFJmdwXGZWQZPpmvY",
  "key11": "26VodsCQSMBamPy67EuTEj8YeMDKqfRLSqAdtST8CQg87bEpgY8iago6NfAcAF65GAbSJksqvqkDFaeSqbhnYerV",
  "key12": "2eMqRHcQ7oTneuKi25EqvPJBNy24EZro7asPxqtsMMfCPDmSzuzumxU5AeMtfbHMCSnYtw6hiJ7skw2iQeimRv71",
  "key13": "2ecZPWad8oBuEUqoxdKJjcpnrVY3r4h8knezfyMyyPiWwBPv23rN3HHeEYqcZRQpoX2YhCj7kzCX6zA7T6nsxqku",
  "key14": "hQ2xcg8YCjhwTF3SrQ5Xxyzc4j1Bm1Aheoc3J179EabCCxCFcmEr2E1kkwF3HMqTTMi1sJxs9E6ZdvWuCRdk4ug",
  "key15": "HPMyva4bCdt8MiiChVQWcJdup3fdwfcf4XY4qPqnRA8gZRSqoRooyvXqoDWCGXminfSCC1ykJDAsEXzqWApPko3",
  "key16": "5AaT7bnZHH8VFBMjkfpnDGayQtyR9XeWcC9Kp8dcUWCRgwWkiEVz48XwUYvqWA84g6eJ2PFZG3jhniXNEBgeuJ35",
  "key17": "2ySmC9aSBx1VRJWTXGQiWyX7HLRNxjdpBShVfVAAzkPL3XELv8XXnHeNKNrUPdQmAqVSWMNymJAtfkvHHeWUNfgw",
  "key18": "5y61sTruam7f4vvCrmESL6s2fc5Qg11PtcLUtZB1dTPzBSBSSjC4eJMjEFTRxhgZz18CWVR7DmpZHBVXE9LDMphw",
  "key19": "3YU3cJbZCGRHGoWCVbq7BftMe7WgCtpS9spRXTnrBpV39azzj8EmPLFNtpXFaGJXk6hEKGmxFHsZLpZMLVPmbkx8",
  "key20": "3M6221B2c1DQFLpox74LXK4jVCSEeAFDkj24Zt6TmsQ2zKFm9JwrjcvqZU6ZCU2kN5ddMoGd2PzkZXsDUTXd9VbD",
  "key21": "2FZQV49kEryUapdk65RTwVddjPqaaqHWitLDW75Tf87cJv5o8qGZvboezQcegST4LGHXpZD9gr9KECW5FfEyfpug",
  "key22": "3Ux4tFauR8Vcf35RTbSbH1A7aE53WqAjUufRVTbZ1xYRP4fiyZLHDAAgP7steEUCjxeaKnH4XAJBtSkuE4w8hj97",
  "key23": "33SuV4BKj7zz11xAyk7kX61kFTDLUnT9MppGbWwoL54azSidkqYqNkci5YHmUnhccEUdJZq4ZQab33y6QbJB6WvE",
  "key24": "5zmRHRoPmfQnMXKSzuXxvasho8X8UXbWihoqqvT5Jdf2DspPaNMq4d8fMRybqGK1NQe7o5HnfizavYwMZ9gkE3Qx",
  "key25": "3XtFJ2Lgv92g6djPJK71F5MRDxzX24Nrf8PwaqYBuhoqNydrebRBPATVQQDK8KUox1GhHGimZbLaqwSLDkGcnbwJ",
  "key26": "5cjpaiGspFAtnFQK12QyHFzZuCzVkcGjv596T18MK66PsugQ7YGUoamnLoxgxtybyEENKJRz919k6mCwMYdcY67d",
  "key27": "2rNRyNiQwTogmF45JtDFkG1KAv2czpV1VuZwTW9gif6tjzhwieQPLs4Y1YdhnzDGrK8ggKyW5dEL9SDNoimkky8X",
  "key28": "47mFfn5Qzx6hjkbD6KkG3UxoopoBvUvDNeuB3K7HqzbNN9WDC9qciRYh6D6pyjZ6NwaL8ueJcTC4qFG77ygZD1ya",
  "key29": "5ZZVXYgFTRoVuc1g3EYEXtjHSFYhecs9TKke2zfzGQQwPJdtYru8e4PMoxswHehWFKHK697GdTr59YzWYWsm176Y",
  "key30": "4vTG9uFN13gBEYoEYAmLF6SPvL1gqf3NfVbqKnzD7CyEtcVv24RRNs6mZopKCJ4z6BaxfuigCE8sVYY2UcQcBbLD",
  "key31": "4MYpoXuYdqmYJkYCmfxDZYAAztBmNGVUSrZu59ZUimRurtEFF6K3M4KXq3yGL92JRga3uv7XMKH2oZW6h2ycQEMS",
  "key32": "3yxYBGS1Z8gccoFcNNggTAs4QfRSV1hub8xMzzudNLciVDCCVaoRkVb7Cv64uCG7WnXQfcc7XHNifXYChhz1yHGx",
  "key33": "4y29nDusefuSZniAmiXFLX2QhVXXtUxYggC5YPPhHTFEF2eTsjbjUoDcALQC1FP7vXDBpYQH5f3ogKGBaakva6Gi",
  "key34": "5fyGheXMmkTrZgdwgK6kRJnq4h7gceWP89C1rn7jw8YSAYbprq7eqFiBjEVurbUSpUbwVphZA6Vwnu4q7nuEDShz",
  "key35": "624GP6P6zXaWnhqoPKfvf6NcqYs1CR6mt97qooiUsgGb4QvYJ8khedZV7L7eNh7RgPX8pDpa65cfQ47Qb5nrMmSz",
  "key36": "GLb7pE9cBaPrFgxoqczVic6DCCHfhzDXY9weFPLMXSkHKN9JSg7B886ddN9BLQWBWU3Q5rJLByZ5JFjpZHhoAiH",
  "key37": "5f1LsRXcaAJpuXWRHfutzD7whCouR946rBiyftn94af14tvEvbAg2FWPTqDxj2ZM2bugor8G875P2YHHthz1DnCb",
  "key38": "2RZVWPLC6FE7ysPvpDM2JSk3URNacZ4woim9wd76LLR9rmRV7gzN5p64EfxFT7BWtK7NjfBjREEX4z9y2Gqz6HPr",
  "key39": "2RxHxcCKct9xKXDoq9WMZvExoouKLGtoQkppc58aq5gEseZHxLTB59P2L753tYY1NVAUWkW2QgTjuSFA3zuH1B53",
  "key40": "23zHSC1ZafEjHSPaj9xRnQvwEKAwmQNzS8mP6cjQqBfntNsgYTCro7XG6koYJ26Kg4EtwMDdnqjianAo7uAGfNs8",
  "key41": "23tMop4ZkP5rQmfVaHm5mjrxFaJ38NFwhdkVbwc4sNsxLHippo4zPsPohP4eFDBsa33oKdZFCr2BfjHCxAnAEZ6e",
  "key42": "3NJhXM3QsPvmoRfRyzefDf5QWQBhVMWi4CyzT3S143MqFJkMVzuXvWFz4zVwRasBwQSheNNeEFHCcbdSCum135Yi",
  "key43": "2NWhTykvucqEqvACk3REPToJJ2vHGchFMQBfAXqj8rGY3N3asgUkUe99EPyhpkc1AP66QYXM43VDr8cgNdwgCuF5",
  "key44": "2N2uuvqh7n6bJfWHe1MX5SPToednYgSLBHAKXZbGeskU5m9rmN2drvypkrgF7TsRoDNLURWvq5Rjsu69dGLyiDoq",
  "key45": "2ky3uVmrjYt4aFPSYAxSE1LRWFpBVcwg7hMmNPSNLtJoa8LFBFrNb7QE2ADUs9KrC9iFeSRcwghhLLVzfZZv98t7"
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
