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
    "2ZoGQEttRrZHEpmjFW9Hm4viAnovoh6dAcEFEPcB4eugNbMTFce8wrHJreEUgR94WxiohYnHBR4RYuaoMmYkNMCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSapyZZB87ESKFWL2kVWAGGzSme7hqLprfxoiDGCuHpfJ3WKR2b2jupQePMXuiwLCde51M1JuZiaNWYdGUK2Eta",
  "key1": "2s1ajL43n1SxNrtmJncVLe6FqCYaYjeJFjejnTy9WCNEfhVqbWmWTnDEJAYaRzXyPHWuRroLQuTisdNAbkBqcofJ",
  "key2": "4VNF7dgvRMGxL4pqgQ1LtiioyMp6T3HsVhKNzwNqReZx8svXuw3EGWeqtXbPc2LXmvMXcAujLeppapNrc12udJ9e",
  "key3": "2qzoMYi1z37U3uzcTsJhbTttqohwkCm5txVWqjvvLVAPjdZRiZ6jhyiuRN69rFAd1xC2qnfsW9Yr6cdX976EACAW",
  "key4": "5d2DvvLDwXUvnucwRrviqGEf65AxCpedxL2eVqrpJ4eUwkDGqNnpb6LRJEi8xWYqAy3YkRpY8uxyUutZq9gyQALb",
  "key5": "VCsnynLv4p7fP64B9SqEJMHFos9bMSjpGThQLu7RbwPtqdaXEaRMUd2TrXkyMgXe2r8D99fT8VSZdXSRLtdeBPz",
  "key6": "2o5PVAhkUQi1Bh5MHsHCAa5R5sr3WBtMTkwMFf3kDh6MGEqEz6vW7rqStb48BTUR1UEMZbgxZTM1txKSAwPCETu",
  "key7": "4sG2jUXUga86KyGwEkzew5Yr3s95zdjnNy9q49mrhQL9gucc8gvDwVbNrT21KNTtamPpgw44Ud5LnUia6KmYVDcL",
  "key8": "uh5Y57yPFw2k9VK1Kt2E6kJvXujHDzcbZEMbdmvG64GysZRBVk2dpzNLpKUxKWxoPFRJ2dynWSFgCqnS145LBor",
  "key9": "5cbHn1sL2XRGAbvBsdVMgw7tGiraieyYhC259mFjvkVFwTCP1ButT3t4x649YYVEMRa8Y8cN8LKawzHfX3H4ekEu",
  "key10": "3EFGmtSY7HiqfB3FCyecG5ajg8gLN7VZwYyZxLagckdzqnDskcpq22vYeXvo4UaqURRmorVhLjnwHqyVkkAytgqr",
  "key11": "3fpraR8JRUXZ1kQsgLMijeZjnoEhSFRHyYR9SaWPrvHzyGdHcXEg1HPQdRQSTMhbzAhZ65mM6UErJo7YqAnvKUQp",
  "key12": "63oFuDJRUYSzpGuDRPSVo9g2pHniZBS1gEnfoLtJswNm2miL6ehPQYsJLPzWXcM4pqusYpELzF67YSD7pVqj1CET",
  "key13": "21CtrZbaKc25wwYXRD8dkLxK78EUHhXdLsSAY3ysB1wwsTnUju72whHuomjE2SFZjyVhRp6zSUv1VhBmqp7PwtcC",
  "key14": "2NuebwhnRtsW6FQC1YQXE1B5WzP9sdRUKUsYV39TQ1kvkBLa8G78pCdWgqk2i7qN8xS4QYnztWpmzR3ATRSNiRUz",
  "key15": "sPowEi2gGafsVqKmUBJxhV2oRea9YLEmc4dGAcAKhLWiYF26qAC5WyA3SspUwh2Zt9K7DMCrLUCF6EgS1DsVFgx",
  "key16": "9jeXLUVKKTTMc3UYA4KE4rP1qbpWymqZku1dCDEqpWBHWsBi8aX88NVxTDV19hDadbEfnvsWiBLCxWfmzykyzed",
  "key17": "38vLVZTTsKX1M1tK57ucxLGGVYPskJx24kf7weze49tnrdWq371vY6xkdc7KvMuY1wb1Vg2UoqbBx4YzJUUhhppV",
  "key18": "33srn8z4wgbEPUMZwjk6SYMJZ9eFuyLau942Y9Zg2TqUuZj2EifndvVtGg7iGJXDLhCBBq3dR7U4kUj1Wu7zPRMX",
  "key19": "4UfL5iXjgan1icU99J1i2aaWSRM6zH5nr2uhkUtoakRUxky9f6MQnH7D68dpPAXuaMCyQTRujJbQkjZ4BVdw4crw",
  "key20": "1knxJXoU2dQ8c53SrGNREN4REKpMFo74roRE44G6xmXJR4SBHxi5VLkbzgLEBYpFCMGm2cKAKWjaWrzzGdHsWqj",
  "key21": "5H5fbBFg38KH2mGHEDJhhAMyabMMoJZNePWRHkBdqq37hEbrgi25qmMuFr3SDygDeHnrtorzZF2ghryLqUGvZWum",
  "key22": "5pauBZNgRw35YctjaaSiFLB4X2BDxUXTs5Ee3RHbCrFbrS69FHeNEGNJitQEzoSs5YdsiejAf6yoR4gyuKJX1yCj",
  "key23": "4eAMM8vf26HoDszWCmKYiNveVHfe2vnkCSCDZaqtQMVJCgwLzMpdDPJ9e6gatVnkrsQLfZ7skfyZh5XJ2w7zQJEE",
  "key24": "4HNPDj8WgWE8NwdDE2mCCR5c743mcNdeouNqhWkKWGcgyXwow57khn3JTMXzjporvE2bWgJ9hyUYqZ84BN1wQAiN"
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
