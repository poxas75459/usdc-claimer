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
    "3Pe9pC5FS4YZd95RiM2ESFapHR2xMUyw26cMjoGybdrCJMJBa6YmQcMbNsUdVYRgoFSAEnscEBUnkx7YJakUsZRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByWjFNob2RyYsM3sMSNqQU4kDtAspi5JcbnBKhAhs2mQ9aiPNYW5DRN1Y9Dxydqcve9xebdfL84pEVJSucURNRU",
  "key1": "35Sx2Qcy9zxkZEJ7V9Vkcp9kxjaHMcsTLMB1mW1m8C5LZ4T4mq7CSE7F2qL3xnrhVmytAMoUEsPVHL9XUdr2646B",
  "key2": "XzJBn7LaRgPodtx3WgpLnvaL7c1u3ra5eC5vEjLZvZAC3BSqPCECTrpNooaCDs9XUAsGwKdqn7GwT2pNoDtAsPp",
  "key3": "21YdzFHAvjHPF16j5Y84BRPh4mYbrFTymVTXqGMak9DoGyPxP4MRyHHr7FDekS1H1EY5nV292HGsgK2FcL5YaYaw",
  "key4": "5gmKcm13cYLYGDujEpceMzUNp5CQd3rLS1yndRtZyaPXPWZmv6hdiGyimtMTjJ2Jw5CRamVFExybzHdtUkWejTqC",
  "key5": "4Q7Dj84anLr2VaVDtRLAzEzdXen4uaMKCFpuDoSmWi1p99qGfpYjoCexox3kS8jLnbCNA6g7PJtmRVCgJS1efvok",
  "key6": "fWmmusP5kkaPZDSyPeqWzch3r5LDQKGidhJEdKZ372rNoWvNdAp44fTGRYvWzp7ULSSwn38GtiRMiD4uWU5Qh3c",
  "key7": "2tjpEs2rQeBc8XrqjATXbddVXN415SkuJWHA5r5aZe9vsooTv9Lh8cfqjxjfj1nj6RcUDaaZouWv5LCExdPoopZP",
  "key8": "2J4JEqPkRLfTWcNcYqMzAn6ce1HS7V2vMW3R2VueybeBktjGegJ39Km6mnkwuRSpDZUprxtt1GgN3KmACh9Xsv7p",
  "key9": "4T9mLnfxyeTGWsqBqRo2VqvYoc3zZKM5rWM415uUipqH6oszt1sXVe2Bc5TpLuf2CY1b7GSF7rqTTPhaWVJ8BawB",
  "key10": "5sPoqWjAW8PNxkoT9v3z8HMLnXm4EHfrogK3PramWzERLL4RuxsDraBZ2nd198dx57Utiy8ZXzwiVn35CL4kW8tF",
  "key11": "2Xqs17Y8dZrQ4f3shikY4P6LW3aGVtNTXGkweD2rsDXSSHi9CEt9Ar5WnnHRk61dM2KxWisUQ4FjS6HPevn5dJAU",
  "key12": "Sj8FozcfTb9kGaSxCdTFrE2hspmgXiY8tHkuJB8hW6DhuxQdz49rVD2gSWRoA1d99EicV3e7bZt6QrQ326ySKWV",
  "key13": "49jt3aYa6h5Q66EQgSEnBNsvu4sbsZErd24yWKtXSjQvCAeDCbQgfGkvb1PjCJvVQk9TSiajSvbHcfY8ZPxSPqpN",
  "key14": "2AhjB52nqi7tbPHYqPfKnu2QU2KTLyhWN7xsYJVBz3zQnsF8jUu37ZDNsHpMyGZQBszeVyekGd8QYQJnZ6s7DSSQ",
  "key15": "3Eo5KKRMDEiroJK1WpBmtqVNWKZJa21UCcR4LYoPLntdcbhBEP1CKiZuPC6iKaBrzN4Y21DvminpgkfGcFMuXJy6",
  "key16": "27vSqwsfoJTYqCo3CQDR6rCNisUcCbZC5XNku773qWBenzafFEKAaxPht162rd6JMdhcDfnjEVo5hPaGsNLyq1UV",
  "key17": "4m3erBjfLasU3S7ad4GTPnhPXqMJ9VYkMdgqiWkgtgmiKFbVZRr2VzDWqW5yixtV22M2BHRzj85jfVsg3NVJzwkp",
  "key18": "5eyJUm6v6YjUFX8evNQrH4bjbWgQiTD9RkGTzBWpaV2TxQ6vK3krsjBYBwcwTKGb6DbPdkpqVFZbmisEnTyQYqk1",
  "key19": "2v7fLVFL65wE5wvXKki7oFstZhzux3EFc85mg9Cx7BptJ1T3M9dyNmiY3nfjH6UN5boYrBaz1bcz5KcvTHtsmTfd",
  "key20": "2m2mFbjWp3VivCezD7rTBJUpTx5V6HZMToUNebZJdL19eiSuvfsVPBZWnAmQQoTrtqHeEm4hEE6UWNvdL95Dcwuf",
  "key21": "51tdx6efDg7u2oRau3N5zb2TUvUmSYNw5SjMbzV9GN2i6c4EAiqPqWLCzv6ivfToGfR5Cg7krzSniN85PKzkXafn",
  "key22": "3ao3Wvgw1zBaZ6pXpoSH6U4PvDedCojoVTGZ1SvVZP7xyEnHod3PYbVpCrZPPtoLzSqTL5gCY73j8jZVoZvgUwCH",
  "key23": "5P5P892oRC9NXjSu6x2woYkw7BCuyc1A6yAoQMkpjbeCoQynconD3cFayJd5dsQHmdipgzxTmxitEFTF1Phsh3XL",
  "key24": "3jz7idzi9zWARsSkEHwX8iCg4VTG9V7PXUgeGPsiCHzMiSm3TtSTs2EybiHBf6UbkyMo6oP7snEZawi4ENHeoJSn",
  "key25": "3XBBcv6YwnKZty8mgAS2AP9oTpMzozWYC1kJsErXsdpZyusx4KfvHNBRNKRkbEFq644rYsP7wvbDcAQ47UNh8E3e",
  "key26": "4TCeRUKLPBn7Th1KMd7nMTpSJ8h7Pf9oFyhaz69K7W5rGwDgPf4TFJwGTM3HkkxXQpqciFBVYBSZnoxKjocDGZSE",
  "key27": "Y8hN8BLMBoixxzvXnS7TBdhnbTrPVzaLXJDEcJVwmpPN8VMXqB29pfr9N9ihc9AvhhjAbgw2Bi8Vmtbvwbwuh71"
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
