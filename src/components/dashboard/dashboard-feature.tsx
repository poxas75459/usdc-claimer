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
    "2THpc5Z3ZnL2sDcrFvz9vcaVi4oqqmbYoshiwA7hRuRuuUUae3vGdavLzQZwkW8BpVphmjSaGTqUMxpCuK1eobHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gD9YKbjpeAcwHJFTthvCe63ZR6uM7F6ipBk1C6CA3wGHnP1N5hhShiu5ZxSbFosasjNAqSLeLjhCBpT4saRykP",
  "key1": "CnSct9dXRfPC4LDgpseAz1PXxkeq2eKzzW8fv47usininS5FiGcs6FrF1d4TbxsTsVZ7Bh5xBXdHqYVK1yFHPio",
  "key2": "krfprCgm2hmwKDuoUwW2vQsTkmrMTv29fmvViXjn3SV7sbTQSXUG4yCCj8gck3mJqiJAB4xvDcinRM8Su996Xpm",
  "key3": "3F8v76mEyEnV6UgyqxcQU1g3PBGgDkn5swG2aVdY8TYBq1n31uVdjA2wFDYCPtPe5KWQhxt3tNa1nEi1fXfH3YPZ",
  "key4": "4XDBfZNrnJfXpR5aB1cxuzKQtH1gQzEzJEEmgXSPcQdrmepeh8Gbm9Ba9xgHXsFHRX6DCdNQWMffgrhsBHsGA4Dj",
  "key5": "2gav9fTpmHEcohQjHAoVkdt1gyFJQ8QEFos5xtkyNSAqGNm9PV79RxQtcKpPjLRcgdtXCV7RdYdKY1rqBJMp3qDm",
  "key6": "C6q66ia7RBAcC3qx4jYe9aUJ3rCN6USs5piLoE1VBRauBRQuQnzN8pckAAsbN1AMypRKvskFnihiPRVgSpLkfjL",
  "key7": "2W528mJhZbUahD5TvRxenJYGXJEwB8ofkPyxVjpRnDD2XtS3uuuyqJrw9PBQWN65r2yrtj7Ewxq1s1daHS17HJAi",
  "key8": "2suJyviS8VhsKvFBBJukyRbcfKkLS7wjDTAC7oo9ooAsqfdxhAdN2eQfSng8MDHkxPBzDrbmSXR4VTuFU5VDSJMt",
  "key9": "2XYdxMppm57HG7G15tnrVQPHjSoWdPchqdr11LbN4rrEP69oTY8LAPMztUheqQD6TkmVGng9MpYhvUigu9inFFmZ",
  "key10": "5RkcHfRz64z1Mm5emBQ2kxFKkveNY97YyPdJ1vVM25KHVX2BAdRwSsAwVZTfqNcPa8yUGENSjYuWZpbgMWjjDHPb",
  "key11": "5jnUcp8WFzYgH7gJb5XyaiiKCRSFZTphRS6WyubLctY9oMSyTBf5x94PVQbGLSVf4pYxUDhiSGiNdxVXUVpNXC1i",
  "key12": "2KPm8E4r1f6hXctWtHGmgPwJNxqC4HCiwwQ5qsZmEbqwxEGXX5QRuAZhAaVg2j8g9oepsuau9huFZFboHVDDNnaZ",
  "key13": "2u43vhrs3GB65cAmwBpwzhbQABE4nPJfuQaK7VHMmmaMqjpAdM7AUEkyByKqeShW2BsCmMLhsNAcJoMG2Vamc8uQ",
  "key14": "4eQQxVM4YeD1iheiEmj9kyFojzGtitSnLVz2TGM1C62GSdrrQZnHpBD5x94j4MngMFXND4iUWLooWntsh5Cp3vqo",
  "key15": "DzCikVaPWNib2Uyr3ZKbWS7TrawCqAP7gryjK8aeQZDXc9MrajfQ8W3eqzxo2J1VjFrWR2tbCtkfFad8QeaMxHs",
  "key16": "5veV59YzMJ7qd63nKYYnCWGmy8FsWz6x2EUXZvoPMhHLS8iu2x5FSqPGmTLWaL7BQ1ou2LPtCTtaFUkLjByBPQ7K",
  "key17": "4rpSmEPJ5s2JJvj9TBfd5aSqprH2YM5kaA47gM5cFTJPqrMGmnZTznWBUed9PMUGo8k2CuXt2HuQ5n5oZgcj24pL",
  "key18": "2BWxjFiiA2uAjDxFjbvZJHztrho5e4VVuaZZjo5a6bhXYmq1pNFty3qG1BWKeHQgcvahQx9fkaD2zNXFRjk8XyFG",
  "key19": "vyTBaQT342MeK5GwG3AEaoDrzZMqpGLapuvFEMoyfwG5pBCVkrBsTp84ZMTtDzqUGoHWQo79LA9pCeLGX7euuHZ",
  "key20": "52cdRHBZrdUn2gj9Z8oMX5qi4Bf9ryA57tFXd6w5kot7XqCdC5C5P3QEM4SgzMQRjwP65jzbsjBpv3xrifNJx5XS",
  "key21": "u4xmvaghRbFFgdfMGLaAR9p4G3hRexPcinkvuCV32rS3REnRQYRQFx1PMhdAv6bbsYJkimjVXV4Vxza9R24Y9kP",
  "key22": "xZKeDVD1AusSzqSAXqdweiPj89vfUbSn7qRYPP9EGAnfdQAXKAcrWVMe5cpqJkLAGDM8kLTztnnjZBrewsD8JVk",
  "key23": "ec7KyHAkis72irTEKfzKGKYopguVLxLxjbvAnnUZc6FCN3hqNNa1jvYeVgQ3bVQA6m4PzygudK2utGUQxNBTA4p",
  "key24": "PWYFmy3j8fn7q2tV72gtR3McftZ79ZDbXtNces5sshjMRPoGE2g3Yuo3hY3EuJURg9C1GcBEtyehrYGiFJpnaRs",
  "key25": "5jb66pfo6PBDXAxekVw4cEBWN34YC2AAYmTmWagKLZsYAUnHUmDx1FhzVzs9MLU4UqZtf9v3etxu3FTsNosbUohH",
  "key26": "DJxLnFQSB6EoKm16Sh4ztZVB5bnBrL3YedfUp3fP8QXJD6XjYFt7BAjeXwjyFjnkGZW3VBGPDALhzbXX9Py8K5b",
  "key27": "LGGsF21N4jvwrdNgJi4ADZompLAjUpmbnNZyuPaUkMWbfyY2fTEovRs4o3CYiGeLDLVKpdZrcW8Fw7buDDJUtZd",
  "key28": "4ouUoHM3uGvnsuhpZbkd6YcmgH8qccvCAgLWWim5QafaFcVpg22DzU54ooeXbnpQxZrkReExAf9cGiLDwik8eC8A"
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
