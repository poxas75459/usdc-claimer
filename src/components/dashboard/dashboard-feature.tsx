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
    "YFgEy9z1fMVSJrnhcRD1L9VVA7Ae35TfpkFjnWN2AL2ZbjGgiun4ZDmekUGKjypBadPtUYxarmKnNfmHEYwUVV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EX21HzwT2eV5SjM6iomkHkcftsdbUANp8KJhpGpprpxVbgAMoNgYMJ6zKpD4VsXspMqTYc8qJguHwxCsJLo97V8",
  "key1": "5B8MGPvjmNxJmBkWwiAMQexBY1NfV3ZomY1bXyaostjZ3juQt7AELJZcKFUa253R6HrVjnBmyevseCfHba1Poxwd",
  "key2": "4ZK6iepnFbDrMj9PwH28TGZGks4N2tNEq4PhU4aBdtGzSVfib4EAcqUS52ykFoJGCBnStYGp87noZWSzLo6RFJ8M",
  "key3": "28GxH5tN2EyrxR85whrcNgbGwiYnpJU8DBZ2dnm2jfUARNCgWt6JBXYQfvdev3sg5hiFNsqDeJssAZ7prB2aF4S2",
  "key4": "3VoMA3CgDS8hyW7DT5i89qDRdsoWdQZ2S26Whb97XHbiR21G94HVozotAfRnFKqqe2oc47eTcKfaewc4DP43J8Sn",
  "key5": "4YG89oJn1rUYPTavRUDvp693129TtgihuKYizoUraeCkeWLch8YGqka5Tg8CavWytrmjRXsrRxb5gzmCQMHeqEwp",
  "key6": "3bR9D5ebZBkh9SWwawUn7xfvhovtr1ZJHjpjx5pVxgbfsUGxZoPB5Por54jDeidcTkRUBzPeB9QmR5FW46fkVrVq",
  "key7": "4itBkEHxCxzgRxa3YPVaCJCoaVcT6q7WVEMaAffVWdFke5vfsdQSLMxLBd5D2vctJKEiJFs1gwnFSWwGVXX2efEd",
  "key8": "wFruaEeRGAAgD41W573j7rFrCWvYCZDdyTr1f9CS8yHevbh1qpMTyaz6tvTKvqjWpXG4vWwYFbaeLAcRs1QixRx",
  "key9": "4XhBWrjZ5Nk9ckZWjwdfRg7jVGy7SWuDVaeguy1VjmiGaeH5RqP7UZP47TY9WyDeLnKTvKh5iDAWfiETsXFfkTJU",
  "key10": "4fquFqiRpY4eFY49WBUE2j7Ty7UK9TW6MKyGafSero6bBN8ib92Q7mMwhKJUXfG7saaVUGY1opUY2bECEaiXq3tz",
  "key11": "37E8ZiH6JJCNCr6jjB4WoRNduEZN4Jf6XUZpAdUGSe2tPeJa6KMqe37d5YBSF2KCbdW48A4sNgX7qsbiSv7jnys5",
  "key12": "5TJpxLTPfqeLTh4R8h8Lo8qnQzUJcezRqfTprSPyPHf5WWvKDkH46rpFRVn9SzJJDkJusevYxJcH6nYn9eRWhdkj",
  "key13": "2ifUh4hMJLhwSP4hQ8uW94dtJtYx2noVLEUxC5hb8u6PfdqHV1qC19RZBgAYpQpV65MXJFEt2hdNbZJN1csqJmue",
  "key14": "5KhaddQ4B74zphXL5Yox8rDAmW1mHq1fqWgDchoqk39HF4mFfsuZPuTM8yDmhKLpVyEy5Ubqw4JreV3tPSWhstu2",
  "key15": "3xrwmGyNxi2w7gz9177skqnkxVv5yVMjTAeTkmLHNfGaNqHU5BRA6ckuoSbMvp4ae3G3r79834HJDFigvikXzVwm",
  "key16": "5C6TQtsm2bBp5f81PcZVadtRjm6D7kamKo7bZmm2EBpHqusHTs7CH2DFRg9kVfvTxSVaeDc83RUNqNNeX2HPNqPb",
  "key17": "4bhUAhNPz4zBoJvRfE58bmpBiKgqRUmFfnbTmmowwaeaiTFRTbbQ6HKEkyyArUramGkBzxuRnNPQTgAn5dewm2z",
  "key18": "2vxskztjYyfpPTQCJ6fjHT6HCjyVDfnj2hnK44QKNWiZFYKzi71TCTu8p7uscz2YPHxaR2F3BayepAQfpjppMgwk",
  "key19": "3mVdfWNqxQrRngCLfPUgYvax6HxGqqAvZL3aCb5rs74qLoonEFfRsaSqm5RmNWwxSrfT5xn2C84ayzMiTto7xPVC",
  "key20": "YYXxURcWuTAAxwgX6YEGdG4RDfsDzV71JHhaEMk1UP6L6fdjbHJYNNL3yvXHNKcKEbCriJR5nTdJYFHaKYVdu4Q",
  "key21": "3AzSZ7EkrWmK2SY3vucySPWpMM9VMrL9WTrMMzKc9ZFrRjGP2LwKNj2FZ59AsLZsdZYmeU2S9kSr7xWRCc716ifu",
  "key22": "ddmJRKfVYQN6yEH5kyfMYLhTFBP63fxc3uzR95Q4zAMeR2HeHPpwbHLDt3bn44KawUxXTVFRZzLZqr2kLweatFL",
  "key23": "ewLUpBrLp1XGCYZKAcs4JqzEHT87WiY6bopFusDJv4uN3X2JxK6iujCxFBky81HtSBRhYjngJkNCcFxfiwisvDg",
  "key24": "29bmrR27mWnQ1wno7nyN33kUsLJwV9KB9NMgdoxitMJ6artujjw71Z2AFdmEoKsG1rnyJ5spgDfwUoLZn6wNMC21",
  "key25": "4R79mPZ4qaRJaDgj9Ce2frhrLPHfB4bJEyHRQkMK7JQXDM223YegMd5fxJgZVjS7F5WumEbd4HRPVentQuW3BDQF",
  "key26": "2Xb8puaoxPumhbEKhcSXFCfBJeBus6i2qHWTkTRFw2Rxy7V3tjPkKX1TaMxnZv1G9RFz2wkzZ9Nr7PkwEWDTbBoF",
  "key27": "4FiRvdscexn8LaW23pTGEyLX3f1LBzcjxLkG6p6htDggGvb4JsosraBx4sK7tnhyuetNMfpC2ikZHTbTWEnxhEwn",
  "key28": "2rL2nzLoARWMxLTZUVcFe2CBcgS4HbXd1kNbanFkDe9TjgvNMurHtkVbttRqW1HfJX4RbDnb8eEZjD9UEz1vQkHe",
  "key29": "5vzvJt3rWdU5N1SE35mFhhbz9Tx97k125XLiFD51WKe6BdWFKPkkMeDdnuo59vt75vyUkuwhbAKCRyhCFKkfiDAF",
  "key30": "bhEKr9UR5thQfWFPDDWswHYkm4MN6o1L943WYyCtAgBat4NrsSagfyVm5QZB82zJpTLSgnF1mbdwxrkg2hw61Y6",
  "key31": "2eu4VYbNe6zPptU14oeMXy63rJPPMFuhYsphqLoTzJx6qBgG4CxEC85MCwjnRgEvZssZAxayMX8ksZzRXKfdurRt",
  "key32": "5sCRPRr3XbKU9oHiGddsCTM4AhTBZBMcCktff5PuLh2KhLSsVaMjAjELDYYcZguw4kEqwxc96zywHfyPZDRVwa88",
  "key33": "C9n2zu4KHRgK45ynGToS4xcR2bVRnb55oiCYavz2kN49YqWoAjqKFt718XbBzSR9jrjU9emBQERP7KKVT16REn7",
  "key34": "aYhdsPzDCvFUg7vNuGBUc1bL21kn3rA1GCrGNFVCLGbmpd2qu6NsVVNppkspB7TBM4uqPsmwd4Nnb9VweHVpFkf",
  "key35": "5tacuEjT7KPCswMZ3EgbjPEu5s93LnD8FKXWkyaZAYQwCYLQFQJm3m2tCBYFjqLUg775u4BfVq4M2YHPiA8DrRVX",
  "key36": "ZJEjY52YbZuVTKU9VKx5x3thcVyGVz7ELHEcqjfK1Q6i94FXaw5TRFaQAgKsrg5cNk3QYk5kvfCxA6oBGJWB34r",
  "key37": "61YJHFudCctpj77VyyARSB8h6AFCVJaV9eVuQsW92UZF2fqDvp8Ub6anKuEgZCXBngP9oLLzDnWGLBLy8pea4bXq",
  "key38": "4nc8jEDszrhNkcPegF7Qa3MLi36supZefC42BpzCYJUyaEUWrEFSBpTn3VrXpLVdGwz35j3RBWv8NtcnnUnwpRwy"
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
