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
    "31tv4R8RuGbR1zcP3xBB7ZiniUfMiiNr5UyJT2YfLsvZQ9SpsiiKsa1yjA6YqyMcr9PuwEjxe8ZPTxJ9yLNSQWzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEUg9vF4hTrA3hiMTbZE2ooq4mxLRerz8vsbhfhYUHWonF7uuDYdNNcjM8amL2wosuTGxxVip3ckbYATQbWSZ5J",
  "key1": "4HPaqi1W4F5W65uTNyiBEj6XsHmu38pSSHL2F9F1NYPYPv9P2NnUwrHC49MWQAAp58RhFFtrVXRiNYmd1Zzu5qfn",
  "key2": "2zsXPZ6vNgUimwnELRqZPBnhxtWVKQaWtzopn1MSzFZRFbkQyxNyJ55NRqBLzUWiNhqfPkt6Sp5QjQyaU2poDpxw",
  "key3": "4PXTAEc2uvjPpqzt9xW3iSSUX2SEc82PYUb8HvUfsFsSJYeAtoy842PkDwackf5uBzD26TrE1GezMXrYuFNjQ1gn",
  "key4": "4XBLuX62aHqVynkHR6E8t3gk6t7mo4gcFKxRgJAaxHN7Mh1eeqnfXL7YEVQsnaCYBCj5scxmwYcYTt99tM3Yasno",
  "key5": "2tKDsXfo9NwDzZV1DUDqRWbruG5vduNXXogDKgRKNn8F5mixdJUXfDJuys3dNQBpuTujyQUtxukXyYVoCxogTpBQ",
  "key6": "3oBV7VsVgEegrSao3TDPH1qsmjMFCubhvDxyrVTm5hZDEnkXysWNiAbm3nUPaybXstsXKGVoYTsuNgiMtbh2Z9nb",
  "key7": "5sghmj783bdQRtjwwztTxexHc2cxAoG7xb8B6NW4poYXsyqZKEL859o4sJ53SUpPsRR36DeB1SWCC8s25C9xDXto",
  "key8": "2F4AWyWhBVmbgmMEiMuuQiifAGce8LaihYckTqcq9g8V4hhWj9vY8VRWS79CmxxvREqM75SLQu7ko3FV562tHrSk",
  "key9": "3d8Y9d8dryhyYRxdyfJ6T7gHcCGRsJvhzaJUHhCK4ekcEiGTfronVNVuLTQB6vXMo5nAdHMoDmwmSLsHMd5GbaEp",
  "key10": "5EL7DD84HLB5ZDsrbYy79fyR8jWKXdYEctBCbcmv1WnQi14z66aS6sXB1JXREawZ1qc8namFFQRc9R2aNgVtZgv3",
  "key11": "64Q2vXMuYo1caKC8imRfWGSHMTS8nmh8f39xUrsRngxGZFpj7hHoJPRxfqfz5zT221jzGEBHWGEv2WDvWDjsmuae",
  "key12": "253saCpipTJnRhns5J2CH2hZkS3jrsSEwzv2fQ1mBoWMg38oiTxgdp2XP7NMXaBKYfNiVFh6ab6ZDtfmkeheGx9n",
  "key13": "4XypaK8UnK1TydJjPkQhU48oLfmJptedUYDGJJPDEjxjbVCLTnCZ8RovoJ7CaCfLP2WrFbZwkTwhqiGPuJhhN26q",
  "key14": "59UvGUnmRix3hEcZYqjpxU8WpJqWK7TcrBJ2Hu2Yez5KZDwPh9WB8QkSYzqgiMxZkabzy2UKY8fwSvHqccTkNDFW",
  "key15": "46d9db3MthGg3DAvE3rgNyJy1CpF66Yphtpmc86AJ2pRkBAMYHSvnmUPLSkUsx1DCduUMDiNyGyJUzhjrseK2Lp3",
  "key16": "25UeFUtjDS7WhRAJ11ZG846S4fRSffcwKsSm51LxeAcWxCVGrqkgGmPmfoQzAGXY29K4UpXCtaiymzr45sYkXGe5",
  "key17": "3D7Vq8BUDa424uRhmfq12dSXMP5TX9LVfu8VdotnmpjsgaKgDssC5zLVwNjQbSC1zKK5hW23NVLUx3tCNAWM39vh",
  "key18": "5m6mkGk1j1xo8xFpjbVSiJmDmyPSrxzJSx7eR2gzYswFEvd17wgzSAg4R561dfjWM4vurwMhHqK7LPDD2daYS3mw",
  "key19": "61D77SnNh6kaj6WaTieNVExvxJ61bdavFad3qd7PTfgahnvbeP2Ttz3VmnrVbKFEqKYLu9PZfjtZDpZGhDm1Ts9E",
  "key20": "3pQBfvKcJ33chMkpuc4nptRUXBRsSn2DQRcci8kF7YMTcCWuccZJZQs5v2vSPD6XgM18duxeUZsZndz3ZXhTqxr5",
  "key21": "5vLkrUzFsUyauGEY4zzWGKkwqCm8ZQGnb6puTN8ANwMwBDTshAYD7pwLkzzxh1hLTMzr2hzNbhiQYff1nT2V74MN",
  "key22": "2V6R7a4wKTa82hEGjoLmZ7hx2gtX5tnRbtKBWesVMHggUhGTmtgSzuF2z5TuMCFN4oxWwEUps2Mx8xCcs9iGKUwN",
  "key23": "4wByumWgSeF4PrA6w4THaghGw5LMCsDVSTU28GcvH76esGLgpwS78j5pBYXvjKfShRi2fhTsi8VtafdoZ5L9Zdgn",
  "key24": "5ykCuXkdN2puTrtD8KeupDp5PmwDv5VQ3VKmgFiDkBNDFxFc1PkFQer2x2toKycMKAb3jDiGKNW42e7oViPZVJ4u",
  "key25": "62tRaWHpyZH7QTderSgW4zzvMSynbURBjkrX47nf1jSBCqAfV1jL4tqWDKuZgiPbz6tn9DgyeuEDe5u7JRq5y6gu",
  "key26": "2MCKngNAcHDLDMpqCWzF7x8om9n8ehNp954h8W6i1x3BUVgdhLcZdakS7297JjKzmNPk1TZbx4zYGzb619oYxK1D"
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
