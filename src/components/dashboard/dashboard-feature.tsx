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
    "3no3DVEDLHbpUTWqy2Ly66F3NyQpBeDRVfoYWFgtkfB5ZoMJ9pMa43Ky7MSPN3QJFtQwkUu37uMrBf1czYtJZCmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bgU5oP7DWv6idpMmG1p9m8mGg4enqjqQjLMZV9JePK9YYaJfzueXDpeZbpurNdg3UpRwc8bwhQcoNiP9RfK6ib",
  "key1": "45AsLdXK8PdHUqMi64usVfBfnJ828yoS1gDSExDHvAYyThArSLDz9JANgBfRBRbyi6tHEQy91tXJ3J8jgZsi3fSD",
  "key2": "5GcKEKUoozA8E5goYoNRdwe4iPNFvu6Xvf5CevR9mNuGLinynZMP5d558wyeQrzgtB3uR9i8PdpmQwG7L8JXSsHB",
  "key3": "5gxceW2hPwyrxajKsmomdGXJM9V1yqBD87HKnux1zHdB9vM8KX9MBeMskQk7atKRp8mdAkZwfSvFK4fJ8FL1dDd9",
  "key4": "tizLdVS6XShafnAvSrQ1MVGaxP9wP8ydjsGkGknNzY2HVDT3nbzdviowAX2NSxHAwsACAhQb8oCzyNASJ1ArpLh",
  "key5": "5B7wWKBQRZRxUxa97ZJgqh19XfGDM12dSwKjmPDjvSCvZ2znkPd93LoWQZdqFQEniUMGvfXj9UBfcTWsYt3NRs2L",
  "key6": "67TeXTYUbYbNHJTGZfBnztFx7FYotZoFmRHXfxsttVNFBvphEN5TtunAsLCYwBZPfivR8fTC7RSqzZEH3UojNtUJ",
  "key7": "4pms9B3YZvTT77wHqfFJLCVJV8H7bvxCd6jhKZxzr2X5f9GW8isuyaYaS6kNfEBdpDHmAW8J2UkbyM91ouNiYSLE",
  "key8": "3GjCfgbaCd8fu6hK2iuq96ku6nRReaUm5SmeFRgt8GxTija1qxU7G4A3oMwoZut8QsK1NJnKU26spB4LNAq3GcQF",
  "key9": "5JXxbHP3PP3srZSEJNUuST9nvYHzfyTBogmaDWYkmYjoKYVxj8rUogKfFEETbDEyNhdXoGngQ5xAN7ZtMnan7CSJ",
  "key10": "3TsJLKMbR2zveXS8PLKFpX1hd6AF1hcZ3NGoq8SrTVj9esZoBUTb9WfRCTqJyVimpEKFnhwXFZF3THkx44xVGASB",
  "key11": "2KD2LHE5TDYopRr5nX8m5V116Rp18RVWwqsuh9uk9xJXJmXGk5doaQCxQRtfwXcuYeAjcB5r9E6rjZyjzrEVEcs6",
  "key12": "4dszunrM5zbSgWHsUXTbYo46LWNoLnTaQwE6RuaoGkcxyboJDY3tzToGsnyCQ5Cr8tcYsDiZ4oazoweyVcbe8Cty",
  "key13": "2XpyP6CviN6VLqJvBNXiL7Yq1r2V12hc35csNotY1kPRrsCLjr4dbSvah6aTxpy4C6y8rArWTbe4iCSXpoMwurtw",
  "key14": "DWxuudeQzXF1K5n3bsUxzFwY8PyVRu7KMMVYKRZzixKzLxn7m8S5sG22gUKjU3kr6oA6RNb51wjuRJuNjkeowxw",
  "key15": "4RkyN1bEZg76hoWP3Ejf9AmbAYnMhnjEPxZkcKQsjrYbNK5J7vKKQ8uRjdNdnh7CRJvL5fQGqNUNK4X1wjuLqLfs",
  "key16": "2acBVQgLReDAK1SaiWUJaxadwA6hAfhWUBaR491tGiFBsP3BYiy9QYC9roqp8eoTLkbHcpjTVG2rNLevTqeqnTtJ",
  "key17": "4A9JyhUu3VJG7rYEFqXNMHR9czKSTxhdA58e1TeXC3v2okBWWNxAdbnhk6msanh147RkTLbcxWtcugDNz512Wcve",
  "key18": "5MdBEktABLVdCzutdtqwgU9jjAB32oiKBjhouMBWkrBXyJYG9yixHrkCxhKZ7nuneov5c8fwPGHKx9et4NDKhPKs",
  "key19": "63kP5v8GXUpbGP7NxXR45zyg1kKDavgoJFXqkKKgD9UfES9Fp57fsZ8e6cB4XMze4t1HfFUqrawyjKpeAhbMLBmb",
  "key20": "29ECVn6B7gRqKyDLxQ8L7qk8bGG1Lo3G18cc231NZCH9oqM3xD5firt2E2NuJLKfktyY81ZsorJE2g5oaghDrJGf",
  "key21": "61zFU9gt5X3sH8tvrip3v7LpqxD8QGU75fqtSDug1uf19tP5N9q3mZsMV4VwjDievzjfQkz9mG4go9beHfjo2Wam",
  "key22": "4x49mCSyDD47EyL6SRmQemjZZxeXoY1WokxD1nUN8DGBHuCCGxYeSkm1odyQiuAQiVKDtfanL6LgZhZGTjeoDNdf",
  "key23": "4RQCZC7YaK6HRXZkR22fSKNpQeXsCsQK6DGbM79P8FAka9zikLCrZUnBGTErGF73SwjijFbhKsgsHk1tbxLSWofT",
  "key24": "3ykDZuLNcet9pxbunPW6YgJ742vHVzTq5hTMSuLPgtmQRifYnD3ezxQQaie3GK9KtjzYWYVkzLgP7LpmnsJXzkJm",
  "key25": "49a7pQS5es52ZUxsiG8USbQJZga85AtnwkiEYUfFECJpeNstEfwWcm3P8MWG5bmZ7rwd1Dbjky2MaHadgARvHeah",
  "key26": "4msWrPajotNe44KADHjNNoB1Jt7jrMFKe8mbo3yYzcB65R3bjyZeuZkMwDs46LBLTTbaBEHimh2BJWTxkCHUWrnA",
  "key27": "5nhwfn8rsmJW7QFCRHE9PqqZZbaF7PLfWXyXapMpnWZCpJ2sXqSD43XJBRQY4uHzFYqLWtF9u6FhBQDemj9kEsL3",
  "key28": "65qbtQQDWky9K81xJznUhbXPRWZqD2MwWZfdHy7Xy9iNRumhBf7ZFEfxFrrcEWGqea9CmyxNXPJPm2SVa1f8oeeG",
  "key29": "5ZLJeMtcnSaTUtgEdRyyxnXtFiAaAsXFHUdhnXAPG9jt9WY58Y7yQ88TAJ8sC7QPEUfBx5fKTtAMwFNvs6bJt81A",
  "key30": "5Hmx6vUeYWEu4Sp3sdwR1o2ogigVYyk27pGc6ZKy81Cd4hGSXuYyJuWJuCtXmtVhRvhsgRJAv7UPe3wgLV87UQYT",
  "key31": "5AkMGy3FPdnKTYRHpEUynpzv1hr4X8Sdcn7P9fCSRPfEYUddsJGewjsziV2z1KFsJcC95hGKk6oJJ9jao6Xzjot7"
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
