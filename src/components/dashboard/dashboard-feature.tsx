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
    "3reiruCVUry65ZSnWCGqTNPPvDyH1adTB5XqQHXLkKufz59TbVEs3ZftDN5NjDb3RuEEWrNQvPUeeC2yqwDjG5FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dY22Q4ESfHY1cDDKtpMGrjaCUjtLLVqzjS1p3UjgDcAvo5Er6UHADfvU6CZ9hxq394XQACRejf1JnFZ55Y9j4zS",
  "key1": "4U2Tq7z4nPzceu81qfHZUPBRveoPkL9D8sXtD9kDfUNpPSTU3HB74vPzqo5vAPkh3cvS5zinYNZsp6sMin51QFee",
  "key2": "24F9W9BiXL9aqCQ51duzdgqokjBz9c8R9cs3z2ukdMwTR7K99DEzpHfrG1YTgFWSRXoKHW8cwHbDLn9X1fq2Fhqz",
  "key3": "m6eAekY2rLCMpxWZJsuJTUPeJg4kHFM9ZxD6HcDywPG2vT5djBACrnNbv8Hhxf2E5oSJ4Qrg4vrfLkPYYhJbt7r",
  "key4": "3HyvTNa4xv5X4RkZbxhEfub7dMao7iirJoBatn6aWEKCKPHXkB49whNF2PWf4vZV2RutD8e6v5Umpdn7DE6K7qKs",
  "key5": "4t63AuSNSetjw4vYJWuMt81NkUV1ZtQHnnMeenNxBZuKugzjdgbLVeXLgpw13YUnv1xJaurmBhP9vxu67Jq2mf8v",
  "key6": "7AAyv3aRb1LP6Jb1zSDtNT2wphez5y9wXoNW45TKHFtugFnAk7eULZkt6hEZ3iqmMkkxFTkivDxcEFLNqvdaJ7h",
  "key7": "2QgtMEo2DRVSTY78FyM7LQFER3TV4s9BsJqp3oqCWdQSRzCvV3KZeZfTQfy3xA8C9hk8YQVYvEmdLhcwfij8fmgZ",
  "key8": "4BBEFEWBRB2wjvosB732QvRz1jqgiJ4uRtyH2C4c1AZribTByBb8PBiDfN2K3vEMnPMkH9kdtsVMRcBDM4Ls7nU8",
  "key9": "3n4yP1VdusCwJPYhX5KU1gDVszoehLpRt98r6YcR9YmAY2zEvDXGNCGWgUELfx5PRyzkpR8z4ATnf2iAg4GDtUh8",
  "key10": "2dh43sdfFhAPeoQw2deB8Xv6HA5GFnA4xwFcfkRgTcVqhhstfLWf3fUETF1MfTPpTiqkJ58ikapWbvpmXsXSbLqD",
  "key11": "3QkKUuFgpGJNqLAHhJRFnxpMWJyDoYuGmyWmWdoawsS5Q9MqTAm65ANXCH4bWoPvXZD5DUymG1apN4nBreDwkLuj",
  "key12": "4ZRTysPur1UZuzH75u6ir2fZqdBVXqc3oBdK62CNRXWiJ92ZeuhZZpPp44D4q7sKM6Mfzp2Sjqwx6aX1fbMfGeoG",
  "key13": "5qKU6tUX5MLjj5NXUPQ1p7BRoXMMs6djJ3tfE6sozQuV1iXY9CBsQyBrk1usiaXidJhxc9KgbFCJEijVp6iwidQS",
  "key14": "5i3m4jVQtyafCKEy3XS7N5NE3Z6p6rESXviQeTCHi9QuW4CLzXYC6wqRsf1vagtdxtVyxBtFyo23qRFHqVQGxJmv",
  "key15": "3oL1w7oEuuhqA1EFeKrn78cMvUp4qMm4j1eS5f92WitpvUPdJGicUo3kZBgmWTLKYwvHeHS8q1HXrMm1kQujEGYd",
  "key16": "64m6aDKzaW4qoNnqGEPWgzqRvikCuptcxEPeqEhDx5MyQ29JqviFp6nv7ihN8iXfEn1E52MiUAUoDESYHNeaxtcp",
  "key17": "2DUKAedFdRFaGwt5FWQ4remJkxR6j4YW4sgAT9HXd1EwzJdst9DZR9YWuc1mD8qfYk4oSL4WYXnbqd28TguPgmri",
  "key18": "3MvpLrPNsPBUSVUfURMeDiZkebZ5srg6zNEaRth5Yx7qJVFgrxEdNt8TGGqb3jJw1xXo182jaAh14rKH4FDB3M2s",
  "key19": "2Zj8X1yoAQtfaUYpv5vbb6YcB3uk8mB7WLzsbYU4EY1uXu4wes2ZmCtw9vjNEJjpAiNiJdpmDELxVnisfuo7JSDv",
  "key20": "MKGCLsC8vhtAnx6BEtuxQ7qYbXDqXppD5uEp6EFaoMc3xSnBmnUJtxUpq4kxjDBnKZbCM3Z84NEmpvhvPZfMg8P",
  "key21": "4Dg3bfu6iNpuHSEukE4SqQinLZtDCzdp9PcEUvHsLZvofqe9pBqDckQrpvQ9Lgp8XoTNoR9N8hXeQTedY2tJrr81",
  "key22": "5iB2VhC9gchDpjGj6ZfdP4NauhspiYYyXTCAPcbU4hGYVJ8PvYrT7BZzZL6WwahwrVSrbXPT5REC3iZdzrAqJew1",
  "key23": "5Pzqruy8JjS6z34citTcFADzS9tbQTJgdg3LYaMLDkQuzVXL8orW6HARSdazSgANu9mWWJNhnAQzACFrBvBxxj74",
  "key24": "7UtrPqpk5ZNtMyj9QbJ3SDPcGx7W7Ghr4YVFbZ4m3httxp4q5jV8xJd3xZPPc7W6AUw3zW4P1aaBVoRdFWLc6CQ",
  "key25": "5b4yCxgPyuvtBiW6yK6appRE8uYHvqUBkCeokoNWES1fEcCp3S2Sbn426KXdxYUiskaoqCN89EmV4VSvz7AycMgd",
  "key26": "4YUWoCgXSC9xk1PtWUwMAf4hKauhALPYspTxZFUbzT7aoNnYHuLBkdnxVAHbH5p38jU7aeikZtpPF2WWzbHjCHgD",
  "key27": "u1KNVGFHoqNfeUPcNSWx1UHNo67zUw3tnuHCRT87CgVei5UByqJHWaxRMLMYsMPaf1obSqC8HFFaKjXKsff7Z7V",
  "key28": "2MCg7HnQ1nKzUxaRz5aBfknmEUWquNkrGtExDv8CpJLP81tb3SmCgTtmUkFibCbuF7kdjNoWiS2RixpoaBPtCTsc",
  "key29": "3WEgSCKjr33Rs4FkKUPzmZFfP87pxKK5nazFmBwrpLb3YNFmkVSBHQvLkobsJw2zFHx8wb8AVGNYPE7ibLHrZp9o",
  "key30": "WpDuayk71BGHVXwt82god8UcCTpD3uHX6ZqVhzS36A3vEYhBWtWNMYK3VkMc9GBTex34rEVdhMgeU5gctGQDY6o",
  "key31": "5hSzuDAgaaS6pvtf5aaqM8GBk8mQkwqQsPKpSRPyaoRAvsBXKh7fC2mxCbGnNWDoALo41cnJ2pNpnjdQMoh8VzH7",
  "key32": "TtiWyZVdiwM4DA129hH8dSypqWtioAfhzvL648B2TDymrSkgGjJH5xNa34qLw3ucQTvvNdtmcQZPGpbVKfVsZxk",
  "key33": "4454GSFJPKSThSjDkm31Ccx73PSUT6K3Jzia6ta8ZkYde6KprSRRSWDrWPBquHp6AJVaSkCH5hxSNTixahmaoGS1"
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
