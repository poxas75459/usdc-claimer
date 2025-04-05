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
    "2SNmysPfvXSxAj4oSQ7CUrVVanLJy7f4QqxWL49vbshid8GucmyXRv9cNmyXvmZGsDFz9ydnKagAuSjLgPeUnX7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xz6xUPLEq1r8HNsTG6dWdEmhoSFFmnYkfEAx4iChp4WkxDHDJGmX2P2F7DgrV5ytiAJQxcNBgodvo2ULWF4uEQv",
  "key1": "5F5RGxNuRmy5WQSMmkz9tBiVxTpMYMbdJK6mFwzrdTbveTpKowi6FdkKc2oNkRm85e8fDoPTwheYYaK6QdcRMxaY",
  "key2": "2obSm5ZSKqXadKsuJRzyeUitS6pBJ4FpPuTxFgeQJFN8LTD4XpMBtJ4Xjz9YgkokMvbDxMVEyyxywAZ7JXpA1qAy",
  "key3": "3FBKAU363A7TsSX8KE1cWmLGj58TdQJttmAm7Ukt4yY7jN2PmUShuW9RC2kT4KZ1zPPFJaXaNGSqdUuF7dczbTCF",
  "key4": "413U7Zs5MR3wUc7FfAi3YzdLaPSrCNHA89ccnXGNoZr9y8uaVcFzGVYcPJ5HheGMcPdWLu11o5qu8xeNL8JPrfcr",
  "key5": "2xidbYoDQgLw7dwANvDKvV2bVdbFQ671yVt8bJZPAwEjnqEpb6FMX4GGq3tCkxZuygryhNGKtdsuLAvCprQMAyHB",
  "key6": "2exB3a7RbAusNjbNSvnLnSh5kAUxWDzhv1kE5sv27uiFnviLNmiCokueqJBUjqXj4njbvHbjWHUEqLn54FvEcX3v",
  "key7": "f3HqaHf9Uyviz9Z7hkdM9yu3LpiXLpkJVxxU7PnP64HKzWfgXAWGxSyT6HAZobmbyZyMYd5CFK3M3VafSeu9Zxp",
  "key8": "5wmcmpB1rLzq4LzahVkZopcVWUsKUkZUbkhLqDoPPeCntdSxiFjHUDV3zDcMtBqPd2vXWuE74FMTzSfPuZSzGQ48",
  "key9": "2rwoJZLVuUkZxLENyG7TcMUfLCLsZW4iBJjvvgz3VYaqT29qDMC5VMdbynwTj8BgvDbAtMCtWv828Y8HAvcE6MpF",
  "key10": "uvwHM3FGPnsLrYg1oUgvqp2cjui8o43tSbV4gWLqcq7wy7swCzDdHvjwvUw6M8efxFGvi1rmRrcV1oEdbr9yutG",
  "key11": "35v9QexxFDJohwvb2SXrQdxPTUkq3wWvPR2AULNYC2RPVhvoMKmH6kfUb5X3Rp6sjB9aXAZ2WTAW8goFPYLuAzu9",
  "key12": "5Lj2Bx8YtLk3xcWcVhzyX9cPiYPb2kEDqwujSPMsSo9FhXdHnGgpkHXoPv5BDWgJwLzUsgk7DVQmppJWDpwEQR2Z",
  "key13": "5RHKUT4KDGdUobeQvPxa5Qswo8KUX8YvPHN8zTkp7vsfff45SNiV5wTqt4fUFdysPYungJgsFrrYS6XaKw4EodAV",
  "key14": "M1cQJ9zXfkofSnAJrxrkfXxCY7NcD876LvwDBFbQdufkw9sG9RkarEL7oQy1EJ2XBtbDY16DAS8gNxD1EekdRkr",
  "key15": "61729ATXiYhr7rQsGNQYc5LkXuD3761ex5vdURvHPHBvr2jA8iSHau7bns5BXpFsQUdz77CXoJTzpWqUVZNw1oGU",
  "key16": "4y26uJreXemHHLhRWjYGAFBKUsB3bjonDJNrtXKvLMdg5mGXZtBuGecdN3oyWjtEewRpocfVuhYmpANZw1Yuap2j",
  "key17": "5nvtvFA7qgb37VsEz2mPYHeYVB9195jKNNWcQpTt8bB4ADao2ZPAdX8fAUD3ukEAuvKa82YKgFJ9NatKk4BdezRN",
  "key18": "2KURxMJnLCLWfdY2nnzYmMbYmkU4hAo38HZjLEeg18KsJovAwLE8MLmmjXDnc4LdhmQySepKtxVhNjQoCKTPmVjW",
  "key19": "44WhkhJG67vxbgqdT3R2bzmJac7RCbyVtA5pbKoDDJ9UqEnKgdZARrTKBebJnm4VZL8bUnCG8xHUq939zKnvHwep",
  "key20": "5jq3WN9izH3sfUTqxASkF91xxByfSdpL6oxQq5HuvGSp34iR8dbpape2WnAWY3B2Tes6VozCzcx6Th7y5WHYcWyz",
  "key21": "42D3HGf7pFzozxtFsdA6e5GXvePjsfG9oC8omRPdUwjW7UR2TKsfWVUo1jp73zcc9MpxtCyhhPGsnbe6EMSySLys",
  "key22": "3CTNUwL8Dh2HM6gG3zW5nyjX9BUchhbT5z8GCYffPGEwbqVnAZjb4rgv4Bs1DWC4bvBidBhiK6ax9FqCeo7whVGb",
  "key23": "4hJrdxH6jvph6rjcjnYvu25XYkzphEwwYrQCw1jBzXBywD8sSKW3TaMESaBxznvgYbbhexRCHECwKKPBZyqn793c",
  "key24": "3fPb7Kp5johjsHAyFWRiv44ahuaiQqnFeDZb1E6f8TinUgtnGB1CdoEg7ckd6vsxpNHD57L8NeY2Qyu17iJPuV3k",
  "key25": "5sDMAViDmrqLhvHVmiuiSz4b1RmKZp9MvT2UM827otJZ2qobEdgYPM5FxFuKqzbCc7eoK8SrP4qsD35t5RWpgRV3",
  "key26": "2m1WRbVePiqQW1yyzCmcuRzHi8RG2GZjkGYBG9TChLwgsVmACr5Dh4kz1uo4DRQqQQpKS7pEKfwdEGu5YQBRP2M",
  "key27": "31YYfiKu3Fo5CSq1JvWePS1V4cux3dmAWUddtLWYHN4TAcwaAsDp8HXVbsx5XKKZ8w1AcaGTPh2u1kFTneNKntQp",
  "key28": "2iNQAY6Lkx5Q471972La8hm2g8qU2bJv3ZQxbJ6zwA71uYSr9Y2YU4PeiEcHQcVnJ4g2GTareDWGA2iFynpymUjY",
  "key29": "gnziCh9gGSgD2r5i8s2txpBE6d9zPNzK2YhSosjfuDRuzZUNU7kcF4icgJRa1gSwrK3AwePUNJez3UB2oatTmXF",
  "key30": "Fi7ARmbFZCcuAvDQtnZoaoUccXJmjzMnJRCLeHnb3EzAvCz6Qpm3Qiz5AhMJRap9sZhFPJHJDuLFmoYT7LQb7UE",
  "key31": "JmaCaPEoZb3fmihBS5BDKdswqr5EukfocV1KwaDU1ggyJLzt2vC5ifi2FkaZupL2gzhh1gRsA4vDVdieE34NPgV",
  "key32": "33Ly6oXYS47QmkueVVz8xe9TPyt88cLexM74rNPLxeNtQeNqkYgVKyxQdRGQJQS8kQcRQmMbQqrvvsQ9skUZxezE"
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
