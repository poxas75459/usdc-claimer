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
    "58z52E28VvwyRu1qZG5yboY8pwxcQcsz5CnWGfT1UWUuCbg7iGCW31MA2pz71N5AUdM2P5D43NGGXzeakogwvUE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gA5a8yVXudna7EMz8dyXfGfTK5XpBVMFZr5QybBc87oU4DEzH7C2EJUuiF56YsojnKN88SK1Wqoj8UzeSdX8s4d",
  "key1": "KQXp5G4EcoPM6y2SzSdikrccq1EZ9AScARr5tk4K9gg7M3rE3LzmkAny3gAuhjZpuuMb1GdNRTipXHoKpv9Whc3",
  "key2": "4VEsnQ7goLCcaBw3qjjg62LTrv6TVuHHxyB1YFyAqL5dw8GJUt2hbasuAsMdwkgvqJuRtL1fELM1f8LNaiwXdaem",
  "key3": "65pjGhK4KKp4ufE3kvD7kqmtMyi3rDqd4cKTWkFSNoKww8ktzRCBYAmtstS3GhAWMDNCQLHAe1b4X28WHokFEN3o",
  "key4": "4ixfKnm74JqhagTLBezzEtk5MFT3UAfi2NXUqWLjxVJP28Xiq1xFjxa4LgZnY444KF8E5fT7ub7PNXUfRC4Uk9dw",
  "key5": "4qvSCFXbuFDTvAwxwL7bbR3b3w68SMu9p3MJjkcCgyHDK7QKpiV3TMaRg9c6Aryjnov8UQN9DBhdgNyUmJhFZnJe",
  "key6": "3UfDihkKr4rSft8skHqkGkAC3uWJqjBoSXGU6qB4xVh38pZMH83aeJ4c8eoVkNr5RjVPvidA2rxdpkvC4H9cSKvg",
  "key7": "4NpoQRDiz7kMhrJ72cBgqvZUczJYe1dKbji5SJsyfpkLgmQ5xmH4QMvUeU7yy4PvSMrNsXdHh9GacZkVADpAxshP",
  "key8": "4s7WCboVqT3t6eChCsdBsyx28WJFpXE1p7D9FAnVcGwqE7oyaMNQzM3gNmLDqysbii5q7wvA4vm6ZLTKCpYJLhEt",
  "key9": "4c6Kgxmi1r4UKgUht1vzxG4MmPA8JbTLEc7FzcTKF8quWuJ58G7VazoVV77KghVixa88B5eaHnDKCtpWkUk5Cs7o",
  "key10": "4sp6NAnH81LtiZDr6hKBDBg4uGwimHD1moLizEdcZdMyuo2pCZnR2EWY8r15pquTgSEdbLytGiVPbnWHkNgDdxLk",
  "key11": "2DuEZmCksZFQvgP6pqX68ESseBdiPqPkuKChVEs1yRGHs5gyRHupydUf6k7A8zMnF2NxgcJKkmMSAtBHZkHcFD9n",
  "key12": "4b38MBaCQfYfHfpHE54ruknL5tFL9DCmWMWLhQQEWhP2sWDyGQg4Ei8zFAERqfSk6vygJZqghhx2VmoUUJk3nTyJ",
  "key13": "2RQUymofoGTgk2Cdvp49z8NcGKt383DUGWi6A2dw85VWvTKyM6grX8wf2PokKBns4BVE9yCSryxSCwJjDEz96x6W",
  "key14": "2symPSEa9EroHFTdFinerJUn5KhDU6jCoC7ELAKnA1uZA9fAJgvKLcPDiVyVGNjjPWDSjhiTd7vUve2VJ65aoxES",
  "key15": "5WoZHPNstE9sQtWCcRo3NE5UpXcFKdKZURznbHKzA9QSSUMifx8MMU48AbHxtL7CGAqL6PdkWskq2q4YbeWCCp7x",
  "key16": "2EVBEUFVWt4tfA6YBifLvAvq5HoH247eMRak8u4s4BYS7CKdXLx3ja2skQ2FG94k7tMWMoaTRFn5eTnEj2pw8uf1",
  "key17": "56waE8qSV8pA2rmGSdTFqbAwQJGvfVVJX6PES8UZfgCzcLetkpdo8mijURVsLWaL5kwustyt7tqLhiy1J9JYSVeC",
  "key18": "2TDhc8DvJsYSfMsC1ckqd1Wm4pgj8avH2DaN4YRFFkj8VrMvzS4QmpdAiETxCD6WDA7zPU89pMPiMgFCMFQQRzW",
  "key19": "5qCLjSeqUM2bRdSvA6CX8FbiyAFfp7GHu8ELG7HcNap78WfrmcEWJ3XdXGdTk2A1B9Ead6bejGuS9sFu1maeDt6w",
  "key20": "5GC7sAFAQvoRUfUtzTEETaFQQQmHMLJhCRCz1gD4jyCVDsubyWERNtsdX7in2WZDp6mg5uPGuhKDwqofCrNZi3AA",
  "key21": "5Xt63EQK7TEMqZafmME9HvWjcFWf7iZpqRTfJJh55ysi6wWAP71iQ242oefipsqJq2ihnWyCLwgMtZwoUmLDYtAZ",
  "key22": "jnirsPNhq2XYpyoWiJXpDeAzvBMpKvQxyxBbVLkqmkkx8nPKMHPBRte9hWPN44oYTUfCGjJfSTQUxHPZJEmotLC",
  "key23": "4TLLn26dneX4dLxucbWmhFBj9MXSwMqBFR2xjjVRWZ8HUvFGQvvQ8DhvfaJSz9ehdjrFWpeACrB5iY35be7PRyLQ",
  "key24": "3KgVS1zhZLNFcESM6seG1kgH77iBvgrrLkAFVuv6mvfDfr3sEEMMHxJi9tf83h4GPj546mdZ2SBarwFucV9EPMye",
  "key25": "9cK98CVToS9Zg28ncMn838UPn12hrFNc99hFh5UfZL8ZEGS79gWXJCjwugBv1TUd3yBxvxgjzMkcHnAmKZ4M1jk",
  "key26": "enGZEUpmuqJo15nyF65k1oyjA5i1jQYfiXqBZyXbtYj16demzN4uCLFmLDGsnPA6zybhfgKk4eCq4kfWm68t4bX",
  "key27": "49yk5TTNcDTsNjHP3iWerWP8rYryPeqCrmd3tRsH6g7m6YssqkcFZ5ybBQSQfLcuTPNxtCyKdbtjoq929EzfUsL3",
  "key28": "3tAwU731KAUk4HkKQEged1EnLK2Ut8ZqM9nggUwur2R485ksXvZgqxDrGmEXF2JqTzyxrPmJ48mfoETTMEedq1Z6",
  "key29": "58qKBPyQAaLE9N1navrf8bNscJXpkp1onSKNheBff3aiF8wBoND7Aq3GmX1gsmgKcheeJDDkYcWVm3j7XQ52QXXW",
  "key30": "34zZzjZthqCaBrAWHUhJGW8svNmPrh914fLmw8xvAe4DMY9JZSLXBp6tE314ZqL9eNUtJMa9VFTmEqxDtoCoSahe",
  "key31": "33exTtSGZxE583sm8LhPnbSQqk2Nu8yBCnaMfMFNkjanZtSDaEiMkox8MP3eAdWTnjFE92LQ4d7gt5sR5cwvzB6j",
  "key32": "XFroMyp3hSfxJjo6Tdd2BR7TDcCA4pdsU5TRWktEqQ8w68m3KpqC1VjWBvCm7ueMfwthpiXPvst1bdWHaV7Q4n1",
  "key33": "3bRi7PTBJSR9JhAQgYnwgcS2oAfxHX9PJULmq9EzaFTcfdBMRnJR7hzwdd84gUXQ9NK55SSUupUhcdWZVnwkMgaJ",
  "key34": "3QJGjNSt6ECWeCEHYm2BLZSFe9PvMuXvk4s7rtM65st6wuvYXzYJpDctMM9F8jD8kKE7fWrMD5ctLuWqgLhdMMBq",
  "key35": "2GMPycYL5y44EHh6ZLMAmeMxDZnwUpdzjdyWsSEsJ8MrZ4WaJvARKDtS3cPXDheETp9PEcJTAj5xWmMjSA94e3ZQ",
  "key36": "5XrR4AE3kX8JSdc16xoaWFHxsw1K6NfN4WuAS29k4kxTTas2ds5qicbSLMWP2vgPn2eG8fgNZhEp3hUBTxrn7EWM",
  "key37": "3vBKAtYJXW4L5L3VPnAwziZrPdSADejJtUKBZjC1XVNqb9YFo9ye34NRnD44tMo1Hret19Q4cRdT4VgSPs2888py",
  "key38": "LQB2FCcNpoxGWXNNqU2SY23ZQs8xPyrh7YwQfzEyfdprNr4YVwM5dJaZQ84wnayES6GjWYZx8v5PS7Epc8f8FYR",
  "key39": "2H7VGGFAugzC7ugFL9Z55FBmRWx6y16YzPqjyJxM5WLa95xHDhzSdNVyJzsjkB8Ep8qZAhdnRCwptzJasjrFFhLG"
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
