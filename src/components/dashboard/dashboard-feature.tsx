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
    "2RUujXLBx6TpUxmHX8B8VmkZQsHSFsWtt9oY9ddoBdNac3XVwzNF4ohvEDmG9BAQEzeud6Rr7jGnXjsz53sNYUCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnFkHAjqEPGghfVW5GQoVVpZmWiXgvhT4KVCSKq1tgwhyvvFJqT9U74vQPH9qhguvhKNoQevPfxbnthsu4BZ52C",
  "key1": "4PSeMjyTvBkmdxuWNZbRKJKigURSQ4ZJZhMWnAiGPgMwi5uHiS4iMsaBmQ5xBchhXhXYqoQjGcuwrvZXPotdM1eV",
  "key2": "2XkCGEUZbLsXLAV9sBaFr3jo5gS9twkisRFMi4MJXs3oGkACcgmupAP6r49jQdQSfKy19jDE3n5BVMpE3qwemdA",
  "key3": "3VaDEPFexMat5FxN6kRjm6hon3jbmqNwW9sSH5QJcW3Ftt5LEZ3FqfAnWUB4EJP8ZkQku7K2gKQyzAHd12bmXdJG",
  "key4": "44gTv9K897cZNwLN9Zm25C2AxQmJo2uFjMxxESTgjNLCDJUdZjEnNSHkXhEfFPtAQPJeXCkNziB7HjGMmNvQ6Rif",
  "key5": "3oQ6ABKrQNDavh4Wjj5ZQN98L8ZRg5i72sHKBZ9v1ak6FTcsBQKYG2E45jnvmet4eWLG31DUVkEUQNtqrMqD21RF",
  "key6": "2DdK6ujXyTKHq7ygztZKXUFuug7LvDHSkuuai93R2FD1uWNxw4WJZ6UySUYJVSWWEEE2xWzrNodSbUSt8w8rXQw5",
  "key7": "3gGzGCf1F343pmxV3HfC7PCr5BfubRgsNNmPNAK8C4uB4DwDnyFKHfSTHr6susEp8Vh6txo4WenNeobBD83keF3z",
  "key8": "7znPzHMnzEMuZAHPFpkYE1FE1xztU5XyxmWHAXgVMsRWNRHtJ678thkoVv1baz3Lio43j1XjkqZPsJA3Pe4wBnP",
  "key9": "4GSaV1KAbEFoxuMuKmTFRbpsWz5txD7mVZiErxrYoBh3kqEj7vkPo2JkhrBEW86Ab7jpMEuNXNjnYmNAXNtEA5VC",
  "key10": "3Yh3jVJCR7GDML15x3GQH63sf1ZbqYyuyjtYGL7LUVZZMxQbX5TcLpRTgREFszEpr4NXmVTSmtoz3dtJva672Qsp",
  "key11": "3SRyV1Y87DDxnAr71zN6jpJpQUUD5FWYNn6CtsdteareK7fjYKJKYSu5v3baf1XCvxqAqFC8gHUSYfTgT7ZjKzy7",
  "key12": "5hr6dfWggHAHjndJKHBPGmBp9U5jy7R5nnUqf758D3p4owdYGPQsmrBxxyXRVxWh7JHnPUKSjach22P4WtNwMBtw",
  "key13": "DaRpkVvDyxwdz7oFe4T3XfwZXVCWFB8KA388zG4bD1CACyUtLofqyV7iYZFRL3b6GJSwNZCixm4aTSdVHJxH5mo",
  "key14": "3M6NFzmgvWgawbQQqpn5FDyZccQDGowfTwQCKCer7jzuLTRzv9qULpuKsKArwqwvTWMoS7SsT2bFF2mybyLL2zCC",
  "key15": "2HAU65jirbyrZYRaEwHsDqYgDgDkXPZqujPKuRq21eMESWxXM5J5TWJRTGBHwivQKXDTFvYvWaMJGu4HiFTrsfY3",
  "key16": "4VnVE2mbYZbHLT37MfXEkcEnVkjKa9akWWFG18LoPsYuRZJbbBXHgcPx1mvajXHmvQYZNd5XXVTK1WrsG2k8yEvG",
  "key17": "37P1VVoKotmN2yPHdT3rwhxJevKXh2fSifnkX6Q9rwzk8fyteRHbyj4kC4GawY2M9juQCry7yy4ZVXTRMM8XzT1t",
  "key18": "5dGxLC2GxDLgRB4qefe7BezSYHdyhpyVCCWf7f63CEfSWnyqUoRaXhZj6R2ZHXDrckAo2pD11Vq2QnoQMCVE6cSN",
  "key19": "eGfjrw1rphnTBPXWpYkgXw7ADsA3G6eV2rSxe7EruHouGbsFcuB121HNa1Fr6nWLAnnmUVFxUPUvvdqQQThYmB7",
  "key20": "55tjK2VArPWcfurkvRsvyLWjdKQYArXNGmaR3HyPJcAMqAjnSAn4Bxk5TUcFfc3uyd1WEMYhUnv6a1jtQC4qBLw5",
  "key21": "4iz5bDk6ZV2MkNxpGfqwu3EVLaf1tL274yDxukvhWLsRwAZQTHPQ1WoUE3DjyxqaWuqgwqDCXnhhSsV3HsKETpVb",
  "key22": "xTjr9FpDWaY3Kmomgmim8KdVZ24D11qHxoLTsXJoo1zjTJPqEdBKBn7hDwHmNH94BqDTWAoggsprRk2iZLUWdXo",
  "key23": "3b8kDzF7j3RwbVFmP3pnT6QtB9EfTKCw2cqxa9JMXZWT3aEM6kf7kWDZV9TTPw4Lua5EP5AGBKisij62p75vRXvi",
  "key24": "TL83VkLQo7jQRKDc8ZXuepDUPiAK9Rrv79pWi1kDWT15F7ggXFsSVVRjqvyo1ekQKLER9agNAUFca43JP1xGQqy",
  "key25": "2rtnjVBwKoQgvsK1doHiuuj5GHoSdnAUMw5db4khtoVw15uFyUcYb1xCSxvABjWmUVgkNGcUW3AGThnKjiBakY2u",
  "key26": "5WdjyNozuPUcPBVthLMSUHwSSjvBC2Q2xx6VdA8q3VpoPkZZsR9qeQUywRQjaJ9gvWDTavkuprEqjKFp8HCv9yE7",
  "key27": "2rbeZdG6xvPCQfXESxKS9zydoJHLNieUQ37Qm1bSA8uGhovKGXsRGNoDGge7A9wzCJkWVNxwTwDdYrrHJoGhpaP",
  "key28": "35qxbKFyU8Eqyn7pXbCTa9WHfARVh2ezq9UmXiTEemd4JuQk28rc9HbEYKEVJeqyGaQWDB7xxkWtafY8FXd6zrhW",
  "key29": "4zxGxDhhqy6wREM6kWSrJnWcAFykyvSdgPmKqsmrQAQCrTp5ZT2ALUvNb5oPgsjrdHiUL1KhCX49gfiyYhmmK2eH",
  "key30": "5TrzvWNoMQ9XMbVnfx94ECphLuNonf3K61Bo6r34MHbTv8puyF6GB5c2wU6mpmknwBC2xCTXumxQ7XNg36qqLRMU"
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
