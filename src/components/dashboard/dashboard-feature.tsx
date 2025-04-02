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
    "TZG9JDhpYL2CV38Q9AuUm2EQDNJNCPzRaC9ACBHS2HvLzEczcVdhqLh4zefoecEuSD5kMZgc687MLV4ZwzwEWqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjygZ5kM6UETo69CL1VU6hJodatvc9KchG1FqoLJKhHoCECSGUvnoDN9jt8HWpbCaaZvC7DLYwvu8irwFj2c95C",
  "key1": "2LHZtcafc4uSCqpiLAXqAGxavabf9nKB48NTpo89CfcCLkqxuvFeHtwqmL3nHbvtK3NyQyRNntUabPAuVZpjV1ui",
  "key2": "38zDjE61bVTUW5XzRihpUL1hhy8KqfMX5HBZyRPogmg3yMGPCGe6J369KU5Li15Ax39gt1qhDL9onq6EgAX9uM8F",
  "key3": "5kJYzPCrknnjddcwcfwmTjHHc35eN8h5ktNNKjAu1fXX17iRwNebf2Rh6MTAKE7zELGDvky6u3zv1fgMcwdMQBP6",
  "key4": "3L5bvpKNjKHDdFtdFFuY8S4gvW2DxQrMqcb4gA4w57k4cRNiahipDfUo9UXDH6p3mNFz9zUnbuYNtPoTLy7GHi1q",
  "key5": "3VLcqEmBUdy5rMDQp4gLXuv6fsejWbvkrKE8JUh3ywV7CKzzbbExywgwMHmziR55aSrydSRrGRDcJnS2VmsBo6JZ",
  "key6": "2iYZJwjsr7bjkKvkdSqmV3L25WN5XZVzpEVbTLTiG9xWH7DoBaCMnTjTB8yLgPA5K9de1sngNNzL1Lxqe1zz6Twm",
  "key7": "Hv8Fe76MbTpZNJ91PKCCB1pPGeiDo2jRTNsoUksuGuEyAtDT62Dhyc9tMAWU9SCkWqXSS8JnecfF9b4ZFf8Gwdu",
  "key8": "4qiUygz9tUHgtDwk9yFvCnoFQYqyhH6MYtSoztMCM5LeAbqGaVLtMmj9RxTopayqidM9ysyXZeDomAmiyqLWiy4x",
  "key9": "2D6mLk3ufwvzhCSe2vSL5MGwb2cZxttwjjq6AAfkiaETJce82v3H3nZirgFkhxZgQFZW3KAXuupPtRDhD4NQd22L",
  "key10": "2P6xTwo9hFDf6KCJN2JHKn7V6cowhM8UN6gXXU7Ttbv6KYrUF8FMNJS9Ds6AuKk1XcrDG4YdMZ8RZvZhfcQF3vMD",
  "key11": "3deAJLG5cviHEdibfGKE1sHw1xupccoXt8nikzqHRYoEXFVveG36p14xN5udd1swxFemhMdWwYBFW8UKPT4k7RkG",
  "key12": "KFkPKwfz96bwn6S21q3qi1hPXiCEfUFGaBRCckm768hu9e4JNtgqxcfDsj8v5yee6xLADsMgQUf8yrk2JTgHV2x",
  "key13": "wZXVvg4taUFZtVfPKe2DpwTRHxxjh1wwMPWd1DWHVR94ty9jk3E6Vv5oYAMRbNMxaDzZBoCjiLHW9cNxhoiD1nE",
  "key14": "3QHyn3zy8M8L2pWgWLSTriqmKB9ZztbScrNsDKgv6VLyWCYYh5hJC5wGWgBs6yEh47bXt2SjDdeRVE95BSvCVCgw",
  "key15": "4pi922wXx5irCAqmtpRn2Q397wQiwiEw7aCV9wiwVAj47iiZ2aHXqjcivv3uLgMSK3ooBtHhZ4TAEpvQgoMujD4P",
  "key16": "2ethccRbuNykCmcxHcNADitJstLpm8VY47KyMeWkcLehX1Mf2WVQu4dda8qSTYL8vWHfuGh8Rs6oGw8c8EEBKhtq",
  "key17": "NEHdashdziEQU2wmMCw9gESS7AthZRaRa1XUcRmR4feJV2tEib9VTCpv1Yyu7tPbegcqQ1hJN54b16tWQewqGVR",
  "key18": "6N8kis4h98KrJmy2gga5yqmBU33PFfsoWd3PLF7fq86UujNpDuZ8pjMd9CfYeuqajfzFsbMbUvkM2WgCqUtLD5s",
  "key19": "2hbYnmbC75Bx9Rz7ZjtPXGgE2HiTQRtk9HXWP56KWeggAdnr8E94tZwT7noipmuAjUnC6W1Dw8U7SuDHyhvhNd7B",
  "key20": "ZnH9Hq8snK2q8VMmuYxzXhiex4FtT7f5VNaeicyBTysTRrE61Lj3Fch4GEF8Kq6DzFKQVujtCwXGQNecTzBKM5c",
  "key21": "zDNwoy1GTFkM78PmWW6aTL9y3XirHKyoGtFfK8DX3S1hMYCVYFB34t5h8soNXUDNGewA3D7D9UxsW3ESNVy1fvy",
  "key22": "vwJEXuh9na3crc2Wqsrs3but2xpzu3MN5KAhQ55LT1js5cUztw6VKf7BjHraN9UCEQmHqoKoFiauBLwijwtwVMp",
  "key23": "46wKBEi3HghnsuWzF75PDsDojyXGp5rgCx9sG1mobSqUth7BFsx38adbSL9Yd8MM8SRPp9d5JHHboDVxvxXzhnem",
  "key24": "5kUh71gJ32PvLpAdz6f7XZ7bh2pnUZpmrbAvYVofANt6e9o22p1XgUAGujYsJRVcoSVQ9kDDKr4ifvebjtQjUfZx",
  "key25": "5Z9AdAkjvjRcPDZWp2EMwA8mH8VqS11jWKL1qUg5AkG73giNbLCKqczffecaw7HBXXRH6qRk7rSCHNxBPdbYzeD9",
  "key26": "Cg6VVBmdzEeYM6b4fuxkGNqt6pWTgdxpJm7zxod4Z6EUuaNKxMLjnHbVkGY6cAmdDDGsyG6yUfyvobmFcaenUDV",
  "key27": "3RSw9XG9Z2KcgjyY7gdWkNAGuFn9ZyF6dGvBPHqyQzhpGArmVbw8FPXoGc8UyoKd83nFgw1Dq1zoVkkYcLCesxoD",
  "key28": "2f2xZubCsPAYH8wpquxS7YBiK8C79ds1t6CcUvYE1duALVsub2EL3LdtcmwfxZX3LsVGcMmMxnRtLW8K6bagtHs5"
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
