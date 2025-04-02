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
    "eimjB6yU5DD85KE9GXXxKV2hVcPXnKrBUXgeKi2b7dFdC3TCE1AdNriVm6QgpwSQKv32NXf9wFNhkdTePrEqoqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFR59cPxyM7SbcWnzAtPHzyxgcSnMoCUr3e6dgk3WkXgptsPwR1MxvPyywJTEn2jb9seyc1MXoN58Y14jARgHjk",
  "key1": "47WhhcdNSADM6NzZARfpJzxh1cRiAUDM7V7Vt5wcNNBTwbqEhddvFbtZSyhbqPB96PjGMqnbB2G9sURpPzZGzoD1",
  "key2": "2eK6E2yuu7aawfitymLqWLTxkHJ9R4fhqy6LhoogA2WK6uH9MiGV519Yve6Xpz6Zv9yoS2Xn2kJePHVKjhYPjCEy",
  "key3": "5SSbasjAgg4bLKAxSBSQwrQiK68pVYjXkqk18Xm3xj3ih9qLvDN8r85qFtoRS26H98D9PYa4iUcNGw2vfuwrZ8rA",
  "key4": "54FT1ExYxrmu4ajzDkEHfbBK3veLn1TzBvX2fVGuDxRvuHYCZJUDx3bbBYnKL1tKKyysTrm6wc34Y3qv6wypVZFv",
  "key5": "2pT1fSnBV8nT6ZVeuvHMP4ZwHEczfVmv1QkkMCABwS9JfSnyoax57oyqozE5PNWrQjCZH4XBxkUyGqv3sBertXtA",
  "key6": "41G35UGsovm4L7pLWv6hLf8FSpb196ogZNX5CCM9y5zPevVHmbivLvEbULVFQu133ycbkpEWMKbqH6wKy1eEKVdh",
  "key7": "5RLGr8gz2wh9aMyrdFDR2PMWHzjQAoRTETjUBgRThvtgn6QPQoLVyYJNqC46HdRgSfQ1MhJvnLbsScw2fGKbJnN",
  "key8": "49aPpAVvWxg1iAPuUygE1RtDgMF3XsTypnmc7juqJyvNypQtMCpZaUmxpsNK5f4UKZH9VL4R1bQeyabvSmsJhBPJ",
  "key9": "2VXWmmTwfVX5grAJ3Z5bmXuF5GGc5rbpJjWgms4xe3sHRCD7ckZyoVw2dGkBX88bevMF2TZ3pxaszENhrUpmup1C",
  "key10": "34SLRRasiv1HXpdxVMpv3KRWVF6qkvwC9irPcyZ2GQiUoTsnpHSiWv2vTiBMN3h5bZmEwciiBLSELjB186NFxjs",
  "key11": "2srF22KQBBqGqWjqhVB1YrdUKbTqYmjE8dQFz8vrkjFRemYbAVuPmFZBiUiLQQbypVLh2KvpDCAmEpZvGRED8icP",
  "key12": "EddCHRk4mhxGcPi8J2Dvb8wRshdZ2SuicKaeRkTEZDpFoN8vdCiJs7qECx6ebS3twxHuhFjHF4epox1SiukvLcV",
  "key13": "4QmV37Xti5rGqoE4j6u9v3aSM8FVbQhuEGciQomrcFhX8pK5wRScP6pusUvXne2rqzyTupmjNoXFjTCbfSykfa1J",
  "key14": "2cNezdhnR5vQRpRfymH6uRnX9iohMU7Pq5Fs3LEW891cTnEG41SNCBATRkWP1ojWMWSHnuFdNxtmd5955WGscfDf",
  "key15": "5mgPU5v9fvzo4eo6SCYwX2BUnmtvQ1vBmv3DsMVJfRkhWWGDqqvZ9U26dqF39FB7HZYQr6QNhJvCBj2BcRv68Eoc",
  "key16": "4VcDdNUFD1Lyd58NAEXfchk18gqk6WD6VTHQuMkYXzoYM77BLyqkc4DouCNfiSVzLMRYakUWbF8ZGwPGdMPGp4Xc",
  "key17": "5dhbS8pab7attF1nDLCPtTutsTSLRhZpkBe63W1wjv3iTeNgM93PmnpEGp8jBEFRsg7rodtfdbuVk17Hy7AjnhLq",
  "key18": "2mFKgdQ6GnBepcUkDbG5fNDwNofmG6yxus1urkuGrwtKbJPJ68MdohoJPRM111erVvhoXGUvbKTHHLVSBc5aAzAJ",
  "key19": "4FG8qbMzZ3to66nPRWmiAqSohdyVLusr4ECRqRrLkTpBJ2y7Ksc7vKW38t2rqKUE47e8WMAFTYPDEAhckAoPe2pn",
  "key20": "4hH2kbeLJmci8SKtMwd4Ua1SBE4FKFGiYw2W2ez3ALU4mjJXnAC1mctXL5RdMSHCQzYVmXKgNBGAgoCMuJwnsn5C",
  "key21": "2RLA2DB8BFe6GhsLUD9LgmxL83nfbUnpkVVQ1mRr4YDnzyPZsajqxRjC1hWExZoxh3Ur8pwKZwsKcn4r5erQhJG2",
  "key22": "5FuaLLSkRcxC4SmvcoteRGwtFdNFKZeSb4iRSUGuzYE6zX1JTnmiyRqoaiDZgYuSrbNazimS9UidCdZu4DwWMuM2",
  "key23": "3ygfQc9FrwnwfTdRhin1rLMsCR7iHSW5Kqnx938SxSGAaaA2ofWR2xnyR8wzyUzh7x28pYrrxWbQr3fg4yzP391R",
  "key24": "5AXtnVDnEN3X5btKD6hbB3TSUqCbqzoEnCX2RNZ4AxgZPDd337j2EdeWj6foSS6vo8XLpaXUzsSgbDfRPvNHTQz6",
  "key25": "soz3fnw6h7eg2bAXKV5AdryFvjRkSheLA4PMS3fhpmYqFwcykwTWSBJhrLDnQ7Gkq2fJWf6dTqfMRhQHpY7EmJV",
  "key26": "3CmLSo8PSifDw4wTkmbo1vbJsTVV1qsJa4Exh833tFZ15H4suhKXCU91Sf26MBKjeahjcSwiNpsBJf4hoATpzgwT",
  "key27": "124C7V5dGDowTsUEuUMgrSLKpeYMyyEp2qZB7XvyEU9WJdChZrBCivKVjERyqw1jFxApAQ8KZdt8pq2oH5SBjcyo",
  "key28": "5RNj6AaA4Kh5DwQLzy7ifQ7TgCuYxx8ahd5EzMDaCRmbN1EuLeYiukms1PZdQQAAMkLAt7BU3gb86YHEw9XA8Nch",
  "key29": "4TJqc9BpyDswknyUCBghHoBU7eHDFvBU5Ypnhqu9aiD7NXTp4w2NNNPVEZrNYRD92GkhpMmMQNeX9KFs9PX81pPr",
  "key30": "3GCFpx2EZWvYDwXsgQ3cbY4D7kfzPHAe8s3PzhDFHgcY4DwcXjVcq5hpogMVweqsdbnWj4NMeKBoxPB5wRV1cpHv",
  "key31": "5rQrcTTR6ee9qcCefK1eDrngEs6QGoupjeiXafkZKcJavhc9gonawMNsucQvnByhPE3cbPYvrwpGfU89u97dLJMr",
  "key32": "3BMvm7F4UwzdU9ZxHuWJxEbpK49FHZ1v35aQZ9gGYCikaLr63yzahPmAu85UkDvBBZuYYrFohGv26N2GcN2a7i5h"
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
