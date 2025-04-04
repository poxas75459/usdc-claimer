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
    "3LzXFqnvXk8f7oSDbs1A4TSxus5BASWgmntB8BfjPTzy7yao6kXx1SCQyGBHMJLswjtH6HNGkYLxoFezX2CLgX7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aR2C573NRGSje4GhFRWHrUPCXDppuN47CZXoLMTei2kpZseHQ2P4rccmvB8ufG3XuectPdh5e7b4frwj4wFZ32e",
  "key1": "36VwPpA5UxpMPWRVtwLGXKqTPPZDbYFQgigdXhFksCn58bHLL71cTNFQVaYxAufdmoGYR5rVJ6akZbq6Yv3jN4sq",
  "key2": "2fiieA8TEVudCDotv3HDuR1Vir8RzYrDnmNCr2CQCjArUNdMzzMBXrF11KHLmJCHD2qPHASfReqErxt83iYfi6dD",
  "key3": "2fTe2bp24KJ3nrkuLsJLHetoawWnYT7rm1v5ZUmdMLfcsEHzyCx6hn9Eza2j6ZFc5nxU3JAVmS8b7H8y47JEkJvq",
  "key4": "4gfMo1vxD1yeP3SZkXpvh36YKgFsWdWKLFN7Ai3wqdidND24tpqLFgnoUTuVWqetejm6Z4NwhGui2Say2dTwi4Lu",
  "key5": "2Pa97YubtzMTfQgo3ddYToZw37fKrmY8WY8ocZtyB71s3fthmzkLZWAARBXjSrGahyXstAQUoYhWuf5GziLxsko",
  "key6": "3T1VdEVtCk4ispFagR8rFAdgV3U1m9spz9LppTNDU3Y28w5g688Gb6RMhUQbVYWR7uEimF3Rt9XVvPwKkbiwD942",
  "key7": "2NoosjFv1sgMyNhLoTx4hb1PFV2Dp6vsmKRGkNwwsaUPUMwcv7115L39BYghdaHCJkf7G754kJ4RcYrzcZUnuZmy",
  "key8": "2EhVz9vPoWVtULAwZFxeQLj9XsCh6V8NDm6WFkaAsuQTqnsPm6WWwEwQeWqnxhypXpHmTujo84g7jkVnF74gqM5t",
  "key9": "ASWXCai3ekmt7vbzQF6RRYkzYw69mSCyJ566R2PqYbyHYygCyGxZHu1s3Sv2VqKqS65XowZhmcmzgXJg7w7RYgg",
  "key10": "3rPexKdxubUwtkmEnosH4mTaG8LuM5coG98JxKfFhwQp9rdtuVYkxWvgzozYh2Lxf4w8mTwQF1ErnMzw9WVZedMA",
  "key11": "4CqLxUf3ZHZN27A5pKnG8MdcnmtPMdXEus2apYsbrbDbEK5E3uxnw1VYqpYfdRpCTeiAZgdtimYKdtMXYcLv772c",
  "key12": "2FhvoDtnbTDBhg9sgZ42t64ieZaEJopWnV1nJE4e3xCww8gAhwG7xk1LKe5VENdHpunC9HTdnWkpJHPyQ4v4XLzj",
  "key13": "436CSJzcvjUpKHibuxAoK2ZfzBV7PvAZSGQ7t7uZxXqdHdHLstAwRHdYcGNh1pQqKKCfFBBFx6K9WbHFui3YxDyv",
  "key14": "5a7vM64jhUnYnuT5xzbZakJ9wb96pRWxLPsuU659jpRtJHenLo4pSzeXCvG7LBTBYJnUaZ6omVHS13nee2emf6jW",
  "key15": "5hJfuL9ktzBf48xP6z5iiPHMfyTGfoLcUzCTMrNjuJU8WrkPNXFxB6zk5X2GFUyMSBc4LofVEZg6pWUAAybq2j79",
  "key16": "5spn8y6nfYXABpArB3KgJ41Lsc2J9sAzCK1XSmctruoj1MN83PXxcnQVZQ5V7BuueG4hHWCEza8huWqnnvFve4su",
  "key17": "m4VfbizbzhJR4h8QRd4WJQvrTEw6k2JQgzDMaWchn9aJaV3qEzScethD1PTy2vWPowySutBRGWEMaumj9NLebiR",
  "key18": "4n5RQYoR5F4nDnDESU8q75wnEvCVKk13MJgDE2KSU76CvRS93iJY263XaGQ7mzpfEUHhiJ4Rju7zcKYrgTcPEiFY",
  "key19": "4P7W4rMzWnPxyMzw2TEoVaTJhR4qyxxA8aGVadSBq5Dh6odbtsCpZ6h8QRR4fFkTaYTQEo6hfewRRHrc6qRHTWEh",
  "key20": "56g7rj9VTSberdQyWTt1p5wkTom3eqwv19wacxAwNfmbc7kgba8TnTngPjAAAGogcGYPaTW5SauCnrrzhPXDQDeZ",
  "key21": "3FiDdBvsPs9ZAaBXhgmgzsUZo15fdXHuAr8VeVkMaztPDDWc2KQtAvz9FoGbJrPZWXeb9chH9hkU3ZQ3f4WXXS57",
  "key22": "35SjimkXGWUsjboNBi4T4EjkPomuwRZPjEPGQ1YGh9UUFhHcpphWE6g5RHmdjiL4oKXY2obD4RQM7o656SzuXA9C",
  "key23": "63M6bRLaQt5LwneSRMeaJmSZbgkCZkYjw1A4tCYZciBYPsuiCmzcEmrwRu7ZNPg7HPQmfzZJudR4A3JjQATjQJke",
  "key24": "UvY3qKhRtSFQzKE4LdHbnE2ztmcwh6uzaf4niwYEEpEr3yKVjxGv5ix3nwrTsnffPvK73Sf7RBtZHdyWdoB5emP",
  "key25": "5niaWU7fUUACeYJKZTDSeiF9gDUpKXXvd9oBntAdvzrVtYNPgk7xNmm3b7VRjZVd1GUsgtHdyNH8FBJbmCXqLTfH",
  "key26": "ZmvEwY19JxYpMVjgpNzsFgbsB8FdCmGgSPANn1yAyuNbdDuSQy8erKfgPgPd5dK8AKSxRr7gLea1wXEx7dmomNX",
  "key27": "T6ZZtPoaBNSnVN8CnqjnMsg5QrsgG92ti8qzpb1KchfTXedoEVkyp4fC3aeQVtCoTV4dMroYzhxMozLixUmfJw4",
  "key28": "2fXy5oicLE8BiHGN2PvLGguwE9iLqsCtFmDamC1Nqndv2fJZbCNkQVhbkBxzG97FeXTw3nh3GGY6Q2WY2BHdPjYN",
  "key29": "61PT8sTDNsCzwD6CTYfPHwZhJ6cfMmgdTbGsDkeoqiDAegqVgqh9RWotUT9zpjo34Lrq7kDbWuka9VmYXpdMN8Va",
  "key30": "4cqAyGKmQuZgMRQ7P7MxAAFjxpYehyzFsGu9F1UHfdtmwBcAChtVvnXpX7At6csJpsRnV4Q2AFK7vX6ZERD3Zxjg",
  "key31": "wjLVCiwxuRC3AWhUMNmcXii3LrAmdXZFdriyiEUkyuZWf4gvdUevNF5njbJfUNR7f6UbBs92C5ZennD2LM15P7j",
  "key32": "4kVW3RJR3anYadae2t4YsoHmJSEENGzKsoehSKiBFW6u4Csuui5nBmQVWPVXWLYJ8PyfWk1y1JuVgawN9LTK2oUn",
  "key33": "3VXFnasqeJoCVLKzsiuVfV3BZBgsEcRn8urxZwvt4NCMtAXPsHS6yALm6W2oGGfMpLV2AJnFX6jzdwYxBRfo6WBi",
  "key34": "63EeUyLMh8diJy668MfXXM34pVM2Zdyiio3LvhJJ3bKXpSyo44jro46ieEWRxJoDiyiWhvEYoQ3HaZPSDUN25B7w",
  "key35": "tEyQn7RPSC1PLh2SL82Q5LzieUsT2vtk2bbs3XxFa8YNH6YR11DLZ2vfxUYoCkm3iHtRYymhKyw3KogTTXXej8x",
  "key36": "4jPGVuhNwRSBw3KGMVVjTAUemtV8mCFM7bHworJmrDi43XjV3Wj3ZdWCCNQn2oEVSQNriWfU9ggBF88CNHw2bAT2",
  "key37": "3dKsoymfQfr7Uvx5CGMY2Uwm11jyqE9SbEFjAbyPZbirXYiPW5GiiozZGhxombry6Xbjkmo9572qhqMSA4WGmnPq",
  "key38": "2AX2niQYNacf5BrwnkUjSjagBJ2aAGoCqSrgH9pTdaa7U9CNFxcstCHU6tkNkVWrKzZErzqKjudq5eCDtNozijNz",
  "key39": "3MDxwpYZwqJXDNKzo5LrXYaWR6AQG1uaxceJQURWtbAZCce9hqCUtrDvQjKEo6zDZJ1HktWhRgura6A21sLvJkeV",
  "key40": "5x3PY8BLkRPDKzC5ovwtfwhPwdL5Jg6a86pkNGof6pfmuzH5jgw8V1289Miy2Vh8KBAbVcwvM6HGkkaPj8Zi74pu",
  "key41": "LBjQRFYcV3ssth7T5v6ZjyDFAFZn9Q19wqT8KjSn8RhAW715kTTbZbihRBvEmkAw7VAADzHFUBP2BxgS7w7UTid"
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
