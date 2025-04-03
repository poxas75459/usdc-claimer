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
    "5NurdLvy6SNkojiLG5kKuzJRuPhMDRWJRgCADeAtX3sosczaYPAox2FU1tYcfiyuMGXfpZX15zzKeFwWXWALdToJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WeNhoMgLkzSzfVvESCnZF7RMvNTYoa7JeueLViSsgWNxiVLb2MfDe16oPfW3pKDpeJEwZ6gwEn7L46ru3uPAFtu",
  "key1": "2etLMXLYVThR74e2ZYPfBv5jJg36pLYWNZRQEeiYyyR82T2HZ86PgB9J3C2NMKseZYL6HP2j2ZSVgnhahv53fDQL",
  "key2": "5VuJo5MXpNQyei9WeRMxvD8fkb9ExtYufnax6LeHi1xz82q2jYHX84PCoipbUrBDPP6Y9Cjm9UsjYLKAdSBTxQ1r",
  "key3": "2ZiUYX1TZvzJ9eU7oExdzQinSLGzoQ1P9zPwM7nqY3W2wkWxmDQeenx1VinrixbY1JUTF2zJwwKNwhD86f8zhNpF",
  "key4": "GB2FyF29Vw4KciYVmVY4bkgqmgBJuJ1RGvcg7NY5QVvkeyMAEEUWNGcUYEXayp5TQtLEqCof59TnQ9UApTiFfmt",
  "key5": "4kp7NfW8jaYk8U7BCDJuqf6cTuMfY2XHh5U5WJU1JHKRzDWRQFJs9jFrTTZfHnuujcHUyVgarAENkkP7cA6nLZcr",
  "key6": "2RCxDTLix45xuqxjeVSRKV6BiQRtrdbmwu4XRWQpzkxN6twmdRm3yL2pbs5Tg4JftsuCqN7H4Fsg9Ka3zax4PcpT",
  "key7": "2ZCrSnVBWG6ReFbbmwSS9E8ZzEdWvhB9s2rjrkkN8ib6J4WeuAJy97QaS8ULxJ3y1U15WyyWg8JRMoUS3ZwBvkGa",
  "key8": "4775FLSMZXmjSXcdvRaYcqqtkSp5vjojGKU7diaDoLVXiEqmAvzLu69jo8RwraJdDjSGGQooxLKgm32WDf4ce8ek",
  "key9": "5uDMzyaNPUkMnFuu21TKNvK2jFjzBQf2NrcGCwk8ZeAbjT5t9KuxRsfQsKQ2cy9Bp3kB5yu41SFxXwBqPqtzTWLb",
  "key10": "2kxirr6C6sEZHgSDvG1EviFGWQXx8enuTd39wB26HpYgRV3ig3S1acLsTGtcCb49o6Wdo9oP1LMiRBRex7UoTEoc",
  "key11": "63uzAyvnSwc4xyqVZKmCivECbr73JRyBEWRrj38Mh61A3E5Ruduy17RXaN6XPZz7jxBi2fSXiJjzjtjf6kGtFhgS",
  "key12": "5tdNxqckbMr4nB6h9nAH9nHdY7dMYVbE84h9bvPuEA864YPWURkTtcpuqhbSKU2i2rNdtLgvjfecaLC2Dp3QGzg6",
  "key13": "tCpYGVX1QAco3UAj6tfcBKXHVqYCCcd6PE7xHMk2FuzULaC8fpkdgU3uNo3fxkTagtFVLCkmWYx151T2pTVVTm3",
  "key14": "36eggwPs78MXz97XPPGFwrojhJboQp8JLpw4GBZxkqQVkgS6MQgScnafJZQDtMtxe5FUH6v2c6cJZkWHkTW6shQj",
  "key15": "3ZmsuHRBeUzPnZNFJGjwmFVARctbf6SxMnzojNbZbsq2Gbw11ZeBL8tvdb8cMLwjAWsdtsEV4U2ArF8Tc5Fy47A5",
  "key16": "2wVqWT7jqRxEx1nVfrBpqqDJLR9gg2ZW3QrkzYqdwzhCKJbKq6AMYGs8Vv6WUY7AxzPRssEZj9PKrAUHxqWC6q52",
  "key17": "2z5Z4s3GQzEQ1B1jx42TVfHrjaKZ78G1H7BtbyjjmdDYqzprWeW5pFSNpRSsXeNgLosVo6p1WGKRPsJKchJG3Kso",
  "key18": "44jRLEMBMyqDoG57HnkuViqhs2h3DA6hN9pGGX8TWpGXm8Z7GvcTCDcNrzKm5YKnGjFghKQ91wCGKCzyxhjmWfHq",
  "key19": "2FyDhMDUuJFqPsQbsoLy9sUcogDBYatEHZ1XXu9wAdrSQgf27i2uWaSSvMs63LDM7GY2y4o4jxF85WGe1LziVtNq",
  "key20": "4MFx9vkYk9UMx6kDsnmsnU4aahUe7x6VfL6chmGmx3Vsttef4TsuQqCCgGS7mP48SXmL5ZzswZKDF3kyHi8FAtgc",
  "key21": "rNJ9b2cBrmfWFKHZUadohWPCXCZkdhEdJB7GxgAMcjTA183xHPDSywtYsqtkbunaccnQu25DdEAAcBTrYHnWDom",
  "key22": "3rLxFH4imJutBMbRZxqNqoJYBbXNm4LyyHwr68ST8WyG3m29mZHdhixhpxQg34tBJJoe8UweQTKiWnqA6hDGJMRk",
  "key23": "5SAiV9LKYj8eCmTb4qQcw4iTzbVvEexVpwm7PUbYEPpzck5peTkSCyDwCVbe9XbheqrBmezG76jU8X6CohSsnmJV",
  "key24": "LK3SiqSGP4MrYw6Q748amEXepYwpYm2NaveTTmbmFCAH1RwSNEWZdf69SvAtYUyTRPHzhARUjpu6pk122CKPeyF",
  "key25": "4kEZ2xr9uWHk53bvQ3gSYwQDExqmNNBNGHew5rXJTDVXt2LbgTkuwSRaDoqqY4pjNqTUatMNHX5ovKAmmxFYfqux"
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
