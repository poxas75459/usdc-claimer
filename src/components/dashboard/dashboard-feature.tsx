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
    "4rPyKyjSGvuQUmdx6vrRFE68AdNWTWt7d8m5VgqRXX2wvSrAarzoFwYBZyhYq2R2r15q4vVYhH3wp9tddYSnmDYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dYaSD5UojNt8STVai2AaBUi8F7bdhs9Q78aMTDLFEgg5rGRfVuQwcAQhEhVEL1Xy2UdSkMmNnEaSZD9BgtSEGYF",
  "key1": "q9Y5ADCcCXppELgk6ooABJLpuNMGMLcSY6NM8R5zHtRhFJJqq1L8DRDFGpoiKQPUCZ4WukVEtyNwfk1hwfbnLX3",
  "key2": "MTyvBMHPzkV6ic2Hs956KqeoRToyU3NEq44vDBDqopc3t22MUWqCQixNVWGZrUCkm9BXEukB9Ro2PFecTA7qkDs",
  "key3": "UZt7KVWqcH4HYLRWhdGGsZs9hGNTsrwK231anjAmc1aRgNyvdPwWxquYxWKQjFRZASArdgppsM5iaH7MzuRa3E4",
  "key4": "5HxndgUpwcTTeF6kwyTQqDZ3aChSkc5XREJ69k4tMACoWvYKa7jbX9dehEwHQ6TCpotQ2nLs5ZxXUNfXx5855M6U",
  "key5": "4Yo8QRTnDsP42EC1o2BQffpXMpvoRzpiA6mduS2LYeteZZZt231c8n1qFqQyWQ1JWVJmqfPpzx2AqKshvyrKVgta",
  "key6": "cwqjEogNws3mBfYcU7jbEd5C2rUbfhoDERfHNZLUgjdHPtpJSSoqQshbUmm9wxqphT5qKKuWqkZS1FdtJv97oiZ",
  "key7": "4mz5528RV4U3fVoWe2bwhgQbjjeDQjsMEAjhBwQxRNs54KLsSDb6PUH4kRw7zc3VdfHtyJTCkFYEN9jmfYuEBxow",
  "key8": "4VQXniqfHHGKkJj3uAufjpKnG2NXQSKRXJhu5atvyerYFM9cAmZEmX4J9mYa1LzkrmvpEq1wKQ2XMbhkEtwk9qsL",
  "key9": "3osj3YJ9cc29Bjff2ZzyfvSRDGURUvirYjjTGVQmkvS4SJNH9Dvop6jMveubxwCasswbTvSbyhdksHTyEDS7PUUj",
  "key10": "56mdoKSDfCQNNocuYojXNT2yx2GPMCgrtdAt8w3wB1etmZMP4dK83YxAVjfvp18qH9zfw9c28EnL5j9nduZPF8gT",
  "key11": "22m5k9yq8CSUooaVjYavsxNrmAT3LHfk3g8AVA9piTwg2VeSnAM91oBssveGXYM3GVRpUrT53gWCz2sKcu2oUH7t",
  "key12": "5sFhVyJFtEXJSWYstYfAFSngZzcpewPhY7whS54dqa5thH281qC4gi7dedysc1dEVPJF7FHGxq1PdXpjMNWJXLDc",
  "key13": "4XfhP35qWPpwtKJ4K1occbr9LFWv3BqoCFdo9TFcqd2TkQnDkKBNFotwGkfeRVhMWA9YvJ3sHnq9h61xhb863611",
  "key14": "3rpxmpoNgCZn7cKzBYR2Sc4GYu54CmEmjsVjYnrToASJomSRbtgDGuFF7PyLsjgVxNNVRHcmYt5zAH7svRsQAt3T",
  "key15": "3SP8s4bXL8Qehxt3SdjKrqrkGtZEKMVui1dkkAk2MQSXGsh19KNwgySFk72MS2aMSeSFH6H181ARUFfHJmA7K9cE",
  "key16": "3gpYvMdu5hAVnZPLnfwNgAW5eYRDNw8grZK4YgCngkuvwxcKX13FZMwE6DGcTPKZL3okPbHo5fhLXFZ13X64Gtpy",
  "key17": "4kSxuUGjjZwFX1Qh4DABidfgBETAvU5bsUBeF6uf7wXwMWzAycUQEm7Tb8gDGcjsTSey7gGaiidmcu4FztYRyoNn",
  "key18": "3iMVMGwTttrkZG3UXu2XCEu7tbAQkhpAffcqaYBdPRzNzTwFTAGmoaP7v4wgXw7Tt18g8p5gZSU8NeDGh3Z7Hhpa",
  "key19": "67a5EVCdSsaHzoi1HpuvK5gVNLpsEAWPyQTzsib5RYVoqJgr1oXsBWxnz97D614T9MDWueBELYWD2XwVZiYDNFvV",
  "key20": "CjmovzQesP2NJe29FgrJbN45BhLexk7uToBMoo9UHLGxH9igMZPqnEDeJmyzjeikWhd1jd3SyLosgaBrAKmp1em",
  "key21": "2jypEUWJm2GhHVS92LBeMi2FQAqR2BJ94aN9StwrZvsqqGp3FwwbtdaTf4DvbEdZ5Nx9LPgCEqgALpKa4Na58wt1",
  "key22": "5E7s9uLmmMfESRTHri3LC8Q7gEpppizRE2HbBBkSrMhicUpKsD9ib7VcMvXJKiezPvigpAjcb1jeFW1gMzJZRVWH",
  "key23": "DFpybnHkub5pf1Q1NXuTDSgaJSDZDwyL1jR3gqrR5nZZgcdrX2ufupzxaMs7oB3YEsJELeA9RSQoxGJGV6QCcw1",
  "key24": "3ewNEWLaoZSxcKxPcFoLhBSmZCxmtApXS2mXzgLvjNiERsbNXpHDihFfbhzkeeo7k4YH3P5SR41u5beS82CoqTNc",
  "key25": "5Q36NV2iATKGCxAaJfoJ3gczCNLGc5qGdQJTBfQQsAjWGJJk7oiwZwHR9zN2FvbKJTu7c6M93B361TA8tXLy1xPu",
  "key26": "2CYX1SxWRXw8HCAyNbMGjeshbTZEVdAgZ9vh3oPBaFYH2Chda7ShmMkLdQQ83b8XgWv7XR12npqpFCuPbqXqPAG2",
  "key27": "2351EcmBuvXB8DmhNCAxymV1nP7U1eovztegafS3RZCG2vLFsLLw7nwocc1q2qHZVjyaATv1whw5bVCLQzMppNk5",
  "key28": "5XoXm64vxiDRtSD4MvghVTRW2G4TmpcnxoPa2Khzi6qMAGq8JiYWQd4rn6xHkEabFRYGDgTjEGfR7PkCsdferYNq",
  "key29": "2gihgehMraKVy6nruxiSPGZfgb8jputBxzJinnzcjSxBtjiomCSMdVTZKwFLQt1W3DgSSCnRo3YEezWAdoE5MepD",
  "key30": "3Y4efjxApv6guHCPYiXAbEXpQmCbmWzAp4zxWgKVNW4DaTCsLQtuyrFbWpDBNmMjDHLqUKXrJ9WyV9oY5GEMdeaf",
  "key31": "23gf4iKLzCB6U3v46wwjTn69FUMCx9d1p9QHj9ssRB8r1yiba4r8bJ33CL3mXzKkuc97HgmtT3vjZjVyDECpCLHf",
  "key32": "4g9Shpm5aeDLEmRW9mSsz3gKbNwWVz6mfsczRjvLLCMmCsi41CocwJ9BQomvBqxLEBVAu6j8L7nM6K6Np15CRZ8u",
  "key33": "5HkCSTxEneUC7tRmKP5kPsSqVCus19GmSqCq3j6ZCRJhRzhnjXxp1BsxZVpkwEyDqHWGKr176E4FRWT1CKWYTQrL",
  "key34": "6iqMxV71rZ4tXBRJQgNt2JejwNHbUmSpoEhxos7y9jSKbXMMaLHor9aZmbE1Kqnnwde9vCGstkWbGdEPThoSW5Z",
  "key35": "5XgZaXfzeqUPyL9JVrgggaDiMuNbkveA8gFdLZMadmZDJ8w3F3oBrsN8z5VnyoKjDHzsToSvnZj2SCgPaeWRw1XR"
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
