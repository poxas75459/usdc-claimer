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
    "2LWJt7hXZ2SX67qdCGezjceUTCj8PUN6w2RVY3BWLrnkY4jpWh29nEnLxaVT1XTqamAqYKhBQBMhY4GjtFkq8Aix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpU5THTgDGNLM4A1zN11Wqm5sxKU4DihYm6X2Na2ZZMbtUzA6NJkLKwpwWvcQ9AKfwDhrsve6VphVttknFCftff",
  "key1": "2aZ8q5P6AQM3jwVaBLicjdpZicxnKAPeQKiXQHTvBpb7cgTjz4uzfagyNDV58K5HpqgPsBmuCk3nZVZSv7bkUVu5",
  "key2": "2b8Es8zGAcGybrUDPzFbSn49NrFmv3DTksNb2uxioSCAidGdR8NvY9aBtkoocZPUnhkWuCNXXMJCKiGR2t5gC7iE",
  "key3": "3GXwJEH6Z8wNn6gL8Co4Fqe6V1szn3VXqvykbWkhvoabtZKNXvBDS5aYsdcPF12PmVT3aty6WwmRtQPksj9heLx4",
  "key4": "3ppMSy9FdC39NSHQwXe7saLGVtzN7GRsUUNwCMio2Se3tjKmRBSq84WZvMmPQVEmE69FJdJTS4Ue2Ydy9RQVzkCy",
  "key5": "gcEcPZF2PBCtteZsku5rGfuhU37X3oDjA7Jg7kfWX3jZE33T6pqXyDXd4pugcdbL2uZTMe37xx1zGpMMV7t1xGA",
  "key6": "4SWhGMURNBZonJyzHuPpUcNW81Fk4wU4oRT5DJRzVy1RjzQYBtmu691vnv8dS9h7qf7CD12XPEeLFCApV4vw54ay",
  "key7": "5p48ZFEEQYxJBNg6eK9RRjfWKCHh6YRFt4NGPD4CV81A9WxRTdFrXinVoaZtqQviMQwdFk4fnLoUAF3NWR97Ewh3",
  "key8": "z21qJs8jDh94YdLK511EoeDCXSrjUthg2NusTGz37DqpDHqTYCdnfnXHctkHCUtKJom6pH8CR1JwxnDVDjez2Dd",
  "key9": "3s8ebyMsY6jbdje5z68DXjm6FnavBvWxGaa4WvFiKUwA7VGa5AsuRHQci2myCJMfmHpCfM2x6UkPXEwHp8uphDYu",
  "key10": "8FF2YM8BNrDxwykkENMq1afdUvtVGdyPLcq7qSG995cjk48iXyMNbzDBtMDPoXYA4yvf2XXU8nEjejVUBmKtNSA",
  "key11": "6Ai7eYhvxMjdZ91yUJnpgH3Aoo7MV6zpsS5hgpHGRN8piHe6Hbud7v726vctvf4fKC4t41tTXt3mDvT2PfsGhj7",
  "key12": "2aTk3dUh9GvmCkJdcJysfi42CbLZnGPzp1BpESuSYEs1rvyuKW9kMEmm6oieYWCr38Qrb4aT2N1QbhGcWSMFw4wZ",
  "key13": "5RBCunjEtEDBku8ckoPbrVBAC5Bb9MSRFBAVLsNsX8bCFRLCeeqbKWTLc5MrKhUFz26kPGginQRSzQxKM84HuuTB",
  "key14": "4SWmbMFuS5xdZ4R1ttBkqchkShMkNpCoCm8cNpYDZAbwJnuk5NyaeZn9WKtCU2aePHy5PHuab1wsWTTg3G4CzoTg",
  "key15": "Dyn1a4ay9J4Cf5mLnumTX3c27SUqu5ZBXuSWJb31jshsg6AXq2i1WNEArEA6sK3wgGgy2JmFLpyi2uEiSgdbzzd",
  "key16": "WFH3PDqh2Re2QRCW7Nr8At5LbR1t9nipUSoSkQ4dEAyaXFzwzCnq2jB4acTqVjTEGLdksg432ciwtRH8kNaJM1C",
  "key17": "2V3TTj7ZesxpU44S5qsi3nAh89SvnMvWjdsjAL5qFFNz57dd73TjTgWoB53Sjs2tDApUxAFgvumKDohZpaWBr6KK",
  "key18": "32UySZriPJRn13oGHykWygU4hrjJnbBJL3BVcioC5YzTrejDxBjvuvsnfVVAPmYF16kzfue9uUEk6fAvVPmzreAb",
  "key19": "5gWpF9Gs2VNiFBNoexuvDkTW9XGXcjrfSLo151N55e82RkT1nv8cr3xFFq5kaDg3huBqS69eREhC5gMQRqra6vwB",
  "key20": "5g7EL1uHizya1FA1hR53LMS1Sm7HNEGk4mDBJtVECwk3hpx6kZ6gtXaTgmgkx8unVFEemk4rYexRgzQbRJ8Mqep1",
  "key21": "289LKuk9JhFNRzfK84FP8jPcvWFEQZC7fkNSjat3axTHPLRt1176e9SLaTYm8MJzPUYhCnj2H8vik65zAvStek4h",
  "key22": "2qEf8hd4UUdZk9CB8P64XWFZo3zrg2WeZPyytdWL6TbkdhYxATTRcnYbDomJMibG7FePUWgc8TAqiQNseYPfmZD5",
  "key23": "29E1jGj7ugsHp4YdJaqqtwnGRASLiUCsDprk1XwLCF2RVCKXRwpcvuccc6UBzWFhSVaTTgjKBcSjLvF4dMFcBhAZ",
  "key24": "2BVSBgTK5z7N3Ro3ca2Gordxhbrri8pGYYjVvxh9gsppbwF5zdDrKYg3bVBzahZgEMovvqfGpueu4XepCTX1Z7cT"
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
