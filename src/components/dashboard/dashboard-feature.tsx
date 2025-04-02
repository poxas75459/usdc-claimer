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
    "KfmqgmtWkJB6MEbcGkPwcSKLSUNMjGNiCNypYgdrxu623Pm6vZW3xaiHsCPTiwejEwjLEuDJpk42kTwayZKRhN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDwk6kft9VwMvxNAN15th9fwYSBcDWsaCBWKoY5ZEr1E9a66YeCBW4WRwSWyLVWZuEMGgnsZibeFTcPk5pRr4Jd",
  "key1": "3zoF5Y8ZxMaC3TY9T15JRYp65bA966DLADfKQZ1fd1faYpUDJvUKzwWacuTtpKecsvSPm23iSXwK5tMXfm5XkuJH",
  "key2": "4nc7yLzswDx4zc4kmkH6jQ5QqKpL9Bn96MXfdtgT6ihpA2qXJWVgrNVejGrB1r4bidaL2g9vAuSn5C9T1BgadYCv",
  "key3": "3Ds4grNtCoSF1EfTGws3KVs9vedmoCmoqCdZb2uaavpwcjeCmoWEtPLyhTnrdHBs3JX6cEMoU3bsNPkhneZpfRWh",
  "key4": "3sx6w1ZatvxrygZy4miyYYcuLppAFNHCaAD1JNmN7cQ1zdqNEdevqoaxHqjm9HAXnauPTYkEdeTwstBEHYXHH1ue",
  "key5": "KkgVxmmkhj1PDNrVTXYccYt3gb3kLhFjhDjw2LeFSZM2qHmBSsaJhaNnB9x43XyJGXo5JbKzsmB6z1CE1q1wUBn",
  "key6": "64GCMa1bFGQBtNwUYawGZ4d9BeTL16BjEKfcGJCrsPb8vNRtbbuBKF1bgR1GingoJuAcCKKrtmP3Sq7m1YuidBcw",
  "key7": "2qa9fZDS33eHJ5AWnQyzBxfrj3hgHtmW1tWokMJWQ5dAXQVbGzcSKMfNuHekkiRWMqTH2uhwuKjzgDqhGdLabU8X",
  "key8": "4Jx5gL1LupZMXKcWXjWYFnsHBgJcQiKHpwTSHDK8pN148xsNKTdQwLhADdFpbGbVFsV7Bt833zBrbs5SL2iwYPJx",
  "key9": "2M8c8wPufDVxa8UgsUGrBTrPEeWdJvcEP4ATUEucYzfkEV6MjBH7Ycdh7tadEvMYGz5FPMQMfqco8tzAyQLdaY9x",
  "key10": "3b52fa1Nj58uh8hT2LRuK8VmB8YPhEpe7c948XhVV4PTxhAqutSRRKnogqz4sCzBxVrBJGZgzaAM4rqfYzzuGkyM",
  "key11": "2kBLdRMhkXN7xwnFdhkVttgM2gTS52sSwb9db86nGTG8FtkWAFHRLVLiQb3q1DcMEZHR7SQ6ReGBzpHqCRjeJj5R",
  "key12": "4vmpSuT6avnhwcPFbWiJMyh7zmeuP11qXtzMRdPBEMyQSDaMz9W2q4aAZRpLmrv3V55bfgVuayqNaxEaftGXWw4C",
  "key13": "5o3iGVrwSu4imVfnLgss2ozEhLDkVbsgkuNdy8qLUsyBhxWwtEaja92bRtWDu15Tv3SR6S82KhpWwX3ntaPNffKE",
  "key14": "2cvUAG9QjDSc3rTUvwNSWNqdHUJcYKeX5h4A8NUZ8x41oDirTjq9E41h5HG9aouXz2XS7PmmgXzJDwWnw1uDG5so",
  "key15": "GpJMXure8XnFWDVYm9zx5RhtQBjnuCKc6n2isnEQvMJvRrkjHW4AXm2WR1KCfgZWfJ3biUFNg6RptJGvvkJLumj",
  "key16": "5B1rgCwJahrMQwegCYS1fet3L4AqXRuCAzwSo1fj43aoUEZK8aqHBfYYdBmHsMwhuFavRf81mXiPuBDeCBEi5ik4",
  "key17": "4nutjgZ4rXQaFGj2PPzwp1NJHtKdXWTfppLJQEq4Sv3Kro7vQS2JvDKXA1af5H9CpaGNnxnxpYH1ghUp2Sfqxwxk",
  "key18": "3xuYHT1VnZ5nh4dqc7Jmp74tiiqqEfF3p8vxV7b98V22a9P6B8w64J7G4d55uKwxUQq1YXtZ5JSmyBeXyP9YFtTp",
  "key19": "2LYTGvbfrZkAzio7QxA1Y9ELsT8mMVUaMRmnNxGU7UBJAYJPoycaTpKspLYoCTdfXJGSA8Sov2AvkmbinktcvxWB",
  "key20": "21aJPmNmoxSM97ka2gKEU5kPFZangzeQ7sCNVdtwwMjAn1YEc4AKWXkRTd6FaGjceX5GV8jak7aTwohM97jRLqXy",
  "key21": "4BgmMwoQkHUtexdFpt8k25aJJsSMFvtgQCGcmqTsdbwFRX2cbct7qKjNQ93qoZnmLH1sSAXCAyf2TG3WpUmuTFyp",
  "key22": "2jKpJCy4TiuMthC25JccxDXPTQdT31BXiZ3KL3AUxm6Bs22jo8XUvtCzYeLiwaKEzXCnhXUGNWVeybPVkvUKisP",
  "key23": "4aDUBrTi5vyV7UZgdvct88YbyHkTTx15ZSHbSMSXbs5Pwy2EfxzyZQwY9XQpTF3Phk7LqvrcuUciFb9GW5tiQYJ3",
  "key24": "3ntGEmC49F2t3uWGPZnqgByg5fnb7xRwPc9imKFahhEBwUgtx15uyrWesm36LecCRQoo1gjk34WJFkxk48ZbNy1g",
  "key25": "3N367sz5TULTGqaoSSowgZ2Tpv82WT4G65A5FJXr7PEfmEBH5D8HFf3QM8be4fi4BmMaaGRqc8rRPwAyAXzXLWim",
  "key26": "6Yxz7eiCMGGiSrX7zgeP2azZhokfRwmZAaME1u8wnSsrfj6woyEqhQnkr9L9syhjXKCB6XaSHUDRc6hWiHSsySt",
  "key27": "3R5Z4zj35gVAKrVu8covbPZzjoD7ZR8PitwQGoZCYAaThR9zYVxnyxWSf639FVD8prvQZ6yEzWyn6Eof8ugRFWbq",
  "key28": "5NQaicCGTV5jhy7EHR1qVdkW833GCCTHpUkc6b6HFdvNsNWAC4dsweAawtGLACzdZc5XBJBe9anApiA7UKywURiR",
  "key29": "3xSZDW1u3LbEDSwFbcD1t7j3DtJ1njAdocJtz4XRohgT1guzt4ARAXRqDoXQiQYzy8rYXL3o813eWKfj5h29Jh6s",
  "key30": "5a34beJnFyDVhPh2e1hcm3kCRfAS5i9CXYQRziH1Pyk3c4ziRSFUdwsmeJm1izWJYEqprJrNUU8TXcccrQzSu1xo",
  "key31": "B6utAFK9zrSnGfA5U8eG7emiajLXdrRZGXGjb6xV3dcNHgySEvBDAWsAGpiFBzkmnfw5wkh6MGgS2dgVWfjC9kA",
  "key32": "3az79ELBm7gDTtor5uwKbSBji6wmdUWGFgg3e8Ky2rCJdKswajC8gX2VDm3q4puucHcp9SLG5YKsnPq7LgPZz5bN",
  "key33": "3NG5tNBT2eGhJ8TLBQwpXyoTf1efnkeX6arggZGA5Lp9MoMxxcE9YcYLFNRELrY98s7uqTgGwEkfHvSh4auf8sk",
  "key34": "55e5f8tMEA7px4CLEEE1LT3pXWkds5u9xtEdo76SSygzD17in1dKF92XrLtmBrikkk2V29KHS6repSZbMoEdwqM7",
  "key35": "QKqHB8t1XT5rAhEejH4e2S2yfN1n7BJRWxy3dmvnPgfRhW9sC1RJP1uQu8Md2JcqQngEQzc6ZiziWBenVXAboMM",
  "key36": "2wrkeq4pEv2qwtuAddS3W1c4M3RZ6JvEWsbGZGYAQrVoLdFKhngdrLw53RvyYdcFH1Q8D84YNmGcVHzYgf4XJidj",
  "key37": "2VpxEowoWBwjwe6XZUdToLfWVnmimLfgzTeuX2iNaLMeopBsbjsHpkfwnys3oatwA4FBdWszCnqVRi9MQqB4q6E7",
  "key38": "2vfpUwQ4pK4ZZU8amdb7NRZySKr8ZkHnCqjAiNcxCWBV8cnyo4SyGhHvqfDWT1Sup2C52GXHp2RBf3pwq236Bgqj",
  "key39": "3SnjQpqyda3Kx7Ei96qmCzHeqHbyPUgyvyt8cwEFFYUFVeG5EYpWJUrSdMq5nYNPdPZ1Hc3EWcgLLhicJyAhS39h",
  "key40": "5yZRXkzDNbR1ZdX6VkFgQZ1CAnUZ45meQh1NPtY3dK1zqSiA9U9qh5jDyBey7MUi53QLC51iDoTNh8nsiYNtXd26"
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
