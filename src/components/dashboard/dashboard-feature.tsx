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
    "4sBpmNpG4jpnBgjRtPiSztMiCUwpSwu7XS2Ff4E3fXFYAUFRtyoH4z5UjF1zdym7VPiRANQHgzihZD8fp9f23GfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khK7LuEfBcN2bAkuiJrtd8TMVbGxRe2GaxddDvSG2gfrCQBr2sXB5bYYkj4TktBLLH3H5FBRuDWBoqqWWwMAY28",
  "key1": "3EtYje5sF7aKDU2DiKog4wSoNpQxSjwKixxvJbcYa8AnjXhVaiwaD2XPeTdHZ7RHsxg89Q1Txkde33NmApzsMLUD",
  "key2": "3PK8STbGD1cDCdVZkhZTGrBnSnCPiBb29qUmy8bf9UTQi1e5yGg5WfP8dtrEb8p9Pu2v1b5CiLq3NP5o48iKtJoX",
  "key3": "2F9Jmis8N9JjEM2zeiVNYD2UnWFodjabZ7ixooHjqN4TBqeibPGJp3vgwCNur1udECUJEXfZ3TAEbMDe5V2tfTLZ",
  "key4": "2dTf9zumLSWAVyvmKjx2RbhQrwq6ZaWCJG3vgBKchkep1Qy3S2qu8x86Fh7sj1uA3tEz74SLxJ7VYa3qjvpZ9gxZ",
  "key5": "5QPR4m1B6U2rq2SD7hh7ek8ikWPv9RBAY6PcH9LqfEqQc9fsRrjMGCNKDARjqC9Pbtdeb55LPnHsCtVns5HW54c8",
  "key6": "5USG1zuPfCiUdzbhvm93c7ABuUPyv2poc4d5QekieizWcu9skAqzC5AGUmGxhK6oVEPe45Hxgp3KZbbUvwNDRcSD",
  "key7": "CLsdGxLFxUDoLkGeVgEDPYgiXw8eFbVyp4FNeekbKCk9mooS69i9PABRDCqDQanWgvcg1ZBrjt1afxqtwp6qmrB",
  "key8": "iabttTqS69UBiwJq6tRtCeAKer6rVpFsYQn8rMoeyZBDu38Ff51GpBQ9pQ9gkw6A72uhLTjVNRFEreguTEUSTwD",
  "key9": "4EzfCyu2UuDVDDXCHMGAW7KHbD7Ck8dWPNugzcwtZUNUB9MNKyQNxijox2Uk1GqZAMnnKD6qeGNwsGJePHjyqr1c",
  "key10": "3tgNnrdw8eC3qKszHheKVQv66CgWo79dmEp5gpygeWivUXxGok9tYuKg8EdM3jLkSZfaQudcWpy15MFLM3GghLWP",
  "key11": "4nBuycD3sw71fen2HSD5SZ3r2Z33ouE5auroQ3mKk7jmWh749rhbQSWCbiSwc4HEMPAHRjdjJXBgUvqiX5Gun1rX",
  "key12": "5ZBzwMyuRcHbzPNtFptf9fZka5H9o5sRM68PwGzqG2QqVsxYECXSgVVB7qL1QenCcZie3McrcPWHgzMysqFhwZgF",
  "key13": "648pghS3R7deZ1tRoLcYnUDonk3Bmxz2e6Dnkwvq2LDZM9YfERLhH8kdueQvddPw7DPb2PVjDfN6aHcwKwhjsVv6",
  "key14": "2ZHkGX7pVvrkAWJbC8gBdtPR37BbcPn1yjc4gcMYixKwqnAuN52RGZYM1Yo9xj2FRqnijdynZrxsw9oCJf2QvcnP",
  "key15": "61hw2KPXvF4hyKUqfNR84iRZBWXZw8vV7bskTGRVJ5niGwfM5UmnHC3P3wETfbZFefod3NKjmp62eQ2hMa4W3XM3",
  "key16": "5zxybnyum3Te9exWMBaDT6khEzi9tt4tWqnxX3WpDLM28Vkjw142ZqTYHrUEnoeUGCpNUsNwLfugCQC9sB1y3ZFa",
  "key17": "3u9nbA9bc8dmkfcP1WFyQSDtKznq7n93DVfUBGf84iMeqHBk99n1A32qV5b5b999VjVRrWr95TCrXnDvWQ5TwhNz",
  "key18": "5o3KzzKQ9n1sNNKkPi7oVZqd6SFKsdn3Yco2inNGrvp1uzxNU3K1iKbCTQrzXAJLpznxkcAEZSTy6TrudVtAXxtK",
  "key19": "66s3UfwbzPQWEuJpDPvvET8bu8cvtjUDHHzh36WH5WFWoiygZP1oAFCiWppiQdswxVCpeJjf7o6GvTx1dewwTUVM",
  "key20": "3D3M4ThubsjjWai2qPpCnbkw5fP7ZgtYT9ZJ5szaNB5rwCYmCtq5jsn38Uz4d18ZTnCLixciweBrHd8vtp5NGczv",
  "key21": "2X3XQbTi4GpL9kVuZJzkDUeyJxDSeAWkQqM8cucfPkzggxaGCGPw3ELn9J9LCfGJbCcrXmxYNjx8RmgYbyHGYT3i",
  "key22": "5K4Lez9gpHfQ1yYLgcZMAzwPtgE31jFzui5TPA8WwWtPNjJoPFHGurfPLfjXqhyT4dPwteGSZ6C31zPmG37uGSft",
  "key23": "37SFGhahJyzCtyRc3WAV4YYiCbJZvp9Q4MC2ReuUpiz5aMxrBbgDsEepTB66aj9mmD5WnYiZjYJFuxrkgrSTqqnf",
  "key24": "4b52m3LXrGekHewStK6iHW5HaLVRWxwnaVTp3hdwEVutDSWF4soCDLn97tnZ8BPALYQ3FfaBhdi2BspzJDdq8Vsn",
  "key25": "4XkJsySuyCwZBnToDh4m2LqQGnapXvhPcdx7ne3HJL3XA5WJbp5e1zvg7YTDWNDez6qKshzUfQAr3mvPB9CkDBge"
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
