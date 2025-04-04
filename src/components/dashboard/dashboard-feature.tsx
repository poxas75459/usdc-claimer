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
    "374uAbHNMf7CHtSRCQQsH5rDSi3mmHMW3KdjRgQcHbP5dd6Dpx2XT59C7j6kLwZAbSDRv6ShPP2y5VPtiqzHKbVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYkDwtLF5dpWrREuoQCEZ6BoqxXhqvUQLXtmrt97Z93Ueuiv1o5jRM5Xco1tQe6HYeusiRHXnSTL2dHpmbBBHL2",
  "key1": "24imcKdrimhVYFbwvbs7Y4fPKPkFeByZu2LRaSiypHbX3Y2WPkRuZWh9ESn9JxhWV682U7xmzbxwxvpbeZfySrNY",
  "key2": "SaVHmVRFDGahRtyPXq5YUBnSavL715wDLcGRYMvCfWDsrew7zCX7JLssRAbM9RNrmfmzXthCq9fBbjiUA4PLYyB",
  "key3": "4iw8DBAHj3u6BeRViCcCxqnJCQS89X314MkbzkMVpCX6gCrKWb2caG8ViT6VweJHvEuyLo4XavZLaRjhXKAsyKBE",
  "key4": "5dhvCSdvU1Wnsqo42DRbnMJSPMon8SneHScvrisf6pTHcMtifzpdizummYQbxzLu6o4anUadtmdSPCWbwmaHFbGq",
  "key5": "5t2pbwSdo3wKSS4WjSCPh24SWwCFRodzpqMJsWdY8Q76o8pa3eEn7788nsVh9KuRLYvQ4oNVoUv3u8TFUmpk6YdB",
  "key6": "4NKvzsGM16JmV1gNgEFzwozqa2cSfQ1xYY8F1AUUULKBFA7CcmJimd7Fo124GRLK731PaGJuKDV6QVAehaxvCSJ7",
  "key7": "3bWRm4PiH9gbeRggUmeXk9S8YWet5bcS7zqg6XrRRRbMyGUdZVV8DY8BuKVmFN66g4UgpVgKSraxcYVFVtVkfb64",
  "key8": "3PQBUNBz4t9EeSGnr2QgN768kT3zR8PTQfoEBDM71DDspLPFNdrAWCvLVrePEpygdt5TYZFNRK4pWVmbx9c3K99H",
  "key9": "41rcDUrcQZZi6mYcMvqgDo9JWQZ87DvT3129LPXsy2vMpseSNeNoACGEjdw7rntq8G4wf1RmeohN3qUBoCeiNDtu",
  "key10": "2QoPHweFgPR5KcbdPTDJFump4Nuf9YSMuij5azxN95eKFdgZWACX5zDgjsBoAo8WsMsuGkQNt8RqrML2Y6TwoyCF",
  "key11": "4WeRuLnAXDJTZ6m9iP7FCo8chYdU1FjCkBKmKwshvBsEkCeNL5H4uujW4xY5tMErgM8etd9SUxLQP1WmtmHWANsr",
  "key12": "62tvBLrVLgmNcG64LkdKRXLeZh3Uq7Hh265XvMQ5HE1gsVN8T4616Hd9d6WxuPv4ftFW2nkGHUQYWqo2ir1hHg3P",
  "key13": "H53m3s65Mq1kZrLLZEGFs4ipKAifp7PEYTp99chFpqWwVPksTuq2odkWeXd2qF957Z4mRAAuBYG4Tb5ncVJS9rt",
  "key14": "37a3S6t1MSNnXHgNoAtwv9LBpaT5aNNE2XQ2isVzXP47zwmdn2yaZj12rTeCmb7kH8zB8eZKdCNTgCcJKM253jiF",
  "key15": "aTi81r2GVyu6bEupjq8hrHTe248WNUb8uoxGkTnK4osYpB54eR6PLaSCybbTeKfXzot1MJHtvcNZ9Qs2TFikRPc",
  "key16": "3qyYhh6ZWbM651hbr7A1dsmyv3figa3W4jqWBeZrHxHfQxc6mJpSDDFggrmZPwmjUGmGbgJ3gSD4ikr3SSzx9Hro",
  "key17": "4MKEeEKgkxRJhqBvuvqf6ZUtavpNYBoRimjecwf9KeGGYw3TAbCDFo8R3nrfyciPLkSgaPgf7aZhqv7zyvF5CyUF",
  "key18": "5RDGdavNTg3bok4A9gsQwkpCpDCSCZYt55dTjZK5GF9h3tgzWY1ZsnAVUXnz1TXBr7iTVkKgM3fCLWStNhfHGBfY",
  "key19": "5jU3o4kd6inrP1Uh7TjD3cPRC6DPWywQWNnrBGYSvDKpUY2bYBWKPNEDJ6PidYwWefvoVaip2kk13c7g3LHSkjPD",
  "key20": "5F4PhDDL68ff9b3QcTXUSGPXceHk3gaiuFa2eKH8XtoYfTndTMpvZt1LsWEvj3vAev7xSTTyDdvEjmgwAwvprxeG",
  "key21": "2H7uS2KJNamsF8SYfSe6hiUx98KPCC1QzPDo7tCtKLWQThV56MXbeDkMoY3a36uNJ5JjC52Lix2xTv2PfUmLtFYq",
  "key22": "3JC4aNAuY5PHKfNtyZSoQdhL17v2tLDPDMeH6oKC4H6UwuWqfwgscGRg5uCyMH2AZYsbGL33PPVjngjdcEDqauYS",
  "key23": "4vuvD4wd63fxDDJd6nYpWCCjv39pE5D4WhMQ2XoiZ7HfPNS44Y2bKruGsyjLkVYWzggtowwqCWuUatEW9ksx4PK7",
  "key24": "5n8gC2W4Kt865zwXDsxhZ55VRjgRVbLMTSM2t2PY2qoeGHCme887u9s8CTz5fsgmFSwNhQqH2R3Rt5AhpGWkbyqd",
  "key25": "b6FpFqsqBAU2u9rKSAmmfGTAgVAAQJd5sz75Rm4bWshBQv4x1eq1RFi3bKiui3hueSJFTBhYVBZSyzDRS5KpkCQ"
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
