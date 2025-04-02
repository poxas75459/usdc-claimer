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
    "3djQVMizQyb6M4g5Km7tmQyfMsAroqFLPuFBfSp899JdXg1G8bw1jDNYuu6nxiKbhgpoxGyqWntfTwaP4B2W6eGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czC7BDRLKsYFe6W6B7z2PVCva7jS8noYgWYwRpoq7BufPxQZgUB4acqAQx5yjDWwLxxzvZd4Gtp2SXNPTypBhXF",
  "key1": "4hcVFEsRRyFAcKmZ9X1K8Vb3jnBkuxjLBPCX3RxCaiVgFBhKNoyb7PqHC4KK8id4gzS2hy5thEXs94c9CsG3Ma1D",
  "key2": "62tcDdESWV28utWgtRCnMUh5xFk1VoC8p1Rg8mLHnncADNJRDRMFdP2NK6ww1jPoEpzA4CKQjSPWie2FgPHsBb9e",
  "key3": "26mfZJq39Pyc2xoCUNvr6bcNfMWqcnDtDvNCAfbhqKZ3YFe8HZ9L5m9qxhcaU65rsMU49vbjL7L1evrkz14875gi",
  "key4": "4iqjX6yfmT3akud21jaWqsiNVFi86DAmo78c7FQK73fCFKphgwduxugm2bEHrKss2LG5RLE2RS6hTZEvRXLReYWu",
  "key5": "4jjL3sWvxk48uuizVbZx2EsQVdorRr8xwYNx1nHEcw4eub3S77DB18vhd7nJcND8LZmsWaC1TEJdGuyWc3yoQfaw",
  "key6": "4DQHADnYWwDz3zJd7i2Q6GjWtQ8yn4Wxy3ajwVdzpWGpcPWRGJrYwUSrVECvDwcxwnNEF99E3GSXMtroKyJpsvCm",
  "key7": "2gSzx46Liczb3abX9aVBiQK1qB4iD5TuzJsuEXmHPNT2oC223a2TqenziVMZLBVZW5ZbQYT8195h2vTMheW29kEF",
  "key8": "4aTHwnR5TmkSuCofpvtTmmytMvcU5X3uY9AdNSsVANNWm22xW5kGegJJVS1gakskCj5sKAobyZYqCrq313ZoPdKc",
  "key9": "47aXpvpt6mezA8cCoXpgyjVcRhp2oNq2YjwsUJGa5iLgxQaHJnJAsHhQeBdVPHeakoLSE4FT6gV3BNyrnwZWgjDE",
  "key10": "2TFdFg5miY2UX6kDfHSfMLK2yzGt2D4L6VpdPKTopGd6zsUXMcK3ufxFoAGdEfMhK5PS5hCS45y9G8hRM6NDr4xD",
  "key11": "5TgDT4jj5oxsUPrQ3foEgSx4KhTkaESkThTK8qTbb9iXNqsmJgzofPE2rmTfx73mNNLaL1axLy31j4g9Ad1YCawR",
  "key12": "5rZW9NTmAaxu9nmXx9t73YrCSKJHTmSVoETR8J59XtgtQWp1kbW1Y877xVRBxaMfK7Sz7Z92sEudHADKcsHzXb6B",
  "key13": "5dytNqtF55rvpGd9yDW3w6pawiwfMJvLhiBVo79FWTGoPKcn2GvYpMB1JRCpFR9eZbD4E2GZo19WC9PPDxcZaPrV",
  "key14": "2xmNzPhPEnb3hGwAKBZuzsW6XSGRTpx8GdSi9j5ke4Ez6PStsFzZUGWwmn9qARmSpew6fD8Xnq2NauK2Y126ysNT",
  "key15": "ha5eHcXpHGs2S7qw99HaacMbefhVj7c9yaUgTc49hwaDDoKbVmkaRtEk3dFat4766QhaUu9fo15MNBEYfmzH2hs",
  "key16": "3VCHfcFaViExrpnX598H9oGnGhPmnj8nbs4yQobDVshRo3bDUvUfNVhbJZMw344TWm1QVtemEuptMKUDvHehHiVV",
  "key17": "3cXvC6byveNFd7ufVwVjR1TwXBw6u5KLYE4JDLdEmi1PzVjjKHfhP4zNDKh1HQs5HoVGN1fpkfgrenmh6Bt6tf1y",
  "key18": "3uLNt2tuFHsFSa2uzjgdBuQUNUx5SuBDA7ozrPFxSrFcbuwyumQAnBQDmh4SuNzkmVS7aDHauJktEfCWp6s1tXgs",
  "key19": "34J9RhrVBJaZkVV1Q9LugKGa7f6ezN4KsjNYHx11MgukH92vWFPH6Vsw2nf6hxwaJYFDpAXEpjfPZGTVAg6L3i3C",
  "key20": "26YDt7zsZy3auDCUuSRJ8YHWNiUYaegH5J7KQv6L4hGKm5qxLbwri2YUBQ51ppTpuzP9bU5vYAQMaq6wTrY2ycj1",
  "key21": "43T4PEKE9VWgUVYMoqZoRxhM2MxdAcB81mtLLNSneMJDMxa7kPz9AYinJqqm64NRtRSpj1V5eJ1FYSfoBSwF9qGh",
  "key22": "2EM8sEDA6aAuGRXCuioEPAzQp3v5XcUP7BD63pAyTHVWNjYo8DxwQYwWagT3kvLLVPBpd4Nj6UiBDBZkgNRrFbh9",
  "key23": "5A6G46oftyRppgetA8BRoUStySRLEs6wPE8CUSRNWvbsUNBREod8fbz8X2wyJxp52ofbUzBeoUbAexMZDrXvBAf4",
  "key24": "5GA7CdPGpZrmjbasVkASfbzkW7uvVVojinkEdb7QcvX6pbFzzC1wx9mTcWKK93FgbmPwU46s2MthJRMyf1RqKP9H"
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
