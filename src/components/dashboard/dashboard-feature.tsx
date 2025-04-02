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
    "5KSqKM3HAKeeqgngWUVchUAxKABkq2pjgcs4sT3f5v2fdmNFMyWGJ1iFHEswPkzYsTpwfyXsoNNbDUZwQmypEVht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wNZNbFRqyKRjQJHqWyBS2C9rdd25hQMMt5nMjiqmztPq3fryMs5BMsdhSpLNUcLDz1C7iruVGNRgFGTt82sUVx",
  "key1": "PAeYzqtnnDZDZQWSucQwATz1ETW36EjGLRzHdTVxE6YuMMb2bMh498ZpHJywM4uu5cdcZztor5q5S9T3eFmsQwe",
  "key2": "NDb722FY3kC7CrV9K5KEMWA1MA3BcnfTKW1qzddRoTW7W1LLHnGipxzwexEwWZU27BZUemCaekxwm79QXpYGXbR",
  "key3": "2nMX7ZjNLLPLoAVXDSCoacBnyo5Pz1RbqHKpoqrpf1gWNNNfeeZNRscYa2qDtuRyKXHU7USqszS7pJpog4P33opc",
  "key4": "39UQXU4mXoHgDRjokzbBQh6K2QmBWLuvHaouSwHnhdi1ZCkZeG58MqoNW3uT91xbWH2VG3gaWRFoHSh85iR8q9H1",
  "key5": "5uHCm4imt9Ktx8SqqbMWA6gcSdREV4KyhccgvNjpVzHCJpxSqSrVC6vYL5fcRzE7vdnNBqFbPuiuLTCupsnYAiiF",
  "key6": "Du8toj3m4nqyha95iaKd6KTgZktF6HXAESKv4x6EBSYHUfJT9LhDG3f5zqiFAxcmjsq1gg4ingsjwDBxmthaMv3",
  "key7": "4mHJ1MdamAWs3thtzq4iXVy4qkFHU27G682VorAxcmP32btj9xoRrLihLKrdHrqW9wdiPvEJf82LkYKzGTJNcrc8",
  "key8": "pbfyTFRvuapNkwUQcmaGvcABRDuf7gui8EwTij6oTfGLdYBJDhCwfXejtnzJajCy5cqsJmSLYjEccLJk7smYZjF",
  "key9": "21D3xnSQJXLAAshKpjmHmkfMU2gGE4drVYR2u2Hy9opD7bwyMhnevN9eenpsmEBL4pBTKRdg21jL7gvfHmuBjAgQ",
  "key10": "26pqvqeU6VqAMcBs28W2CXbSg4DLUCgQ7s2fTEYiZyUkAbWRinVH8W9V6WV7SLaYhHFHRAmAqkczofzbHsnxbhmv",
  "key11": "Rhu1kApxXbw4zjX5y4QpwqtaDF6nMyq6Yq2uJhyYo4dshQAG4pUuNodGG4fec9g8tyKdPnuKz9DuhbsbwiZxcqm",
  "key12": "4u8DuocvFc5Jf7WZDA8qW1P8RSkrQCDxY8k9PrDpuVAkAAfQbmBDkw7Vpo3S2AeF8UAqugy6uQ855fGqhRFkJfnf",
  "key13": "2BgTAwkQ8rjh4RLbwePd1CrN4Naz1KRR6Dhtf1y8w8ayuSZbJZ4WRdtByw6se4JxBB7LM5K1Vt1rXgpRoGjrr3xQ",
  "key14": "29x6LKGE6WZH6CMWa3qLQK2AcicJZ7oukrVCK6rFfcfwVQzXvHudKmKPyZcA3LoYg77AnwrNBFWNxWnGSEpvFdpP",
  "key15": "5nBdsM5cQUYEAt1arQqecwCzT6waykbVCb9KKfhawdvioaNR8FUqFmQrTYp8SZ9HrnArX2oagTStXjPYxsy7RAs1",
  "key16": "56eswecQHSBbWsKk5Vbs3irnWXkkwezQWHZMw48wwfPqF2Lz1byQ1bueKzumb8vD4wZ5cAgabfH8BL1G85ZcWgGi",
  "key17": "2pE4wiKw2Btajh4KxpiZKeTpHST7W6QCaXFHXFrZ6YKdH7VbiL9WGbJYRVtkHVeFPiNUxtP8wRz7YGhmpbH2iw9r",
  "key18": "p8Cb92ajy2gvLUujK5smViWpEd8RLK7UPLHFSqQxMCDZP4uAjbw425KurwRjSqBHXszJiSqN1txSSsBPZ9efJUP",
  "key19": "29BaWgPUsKa87gtaJNoYqRCjJrczVDCT87Ci8ajDq8DJtzJPC4w4WpJKihnSKw73YqidB5mrfcFZeeVjbHBDUfUo",
  "key20": "h425CUqV7U7iesaa3WzdDw8Y9XqrSqjEQPmQYCBBvifQ5oaT7PjZLLofZkbG2BCMd23Bw1hB1cK9J45WVkiwGGT",
  "key21": "5LSyEtkEhU5TNARqn2EJyicFkLNHztAxe9X1eTPnQPUtwcnj1FmSVoMFoYHQtqySwF75saZSLof9J88bVT3hzyYP",
  "key22": "2WcVEqWZnogP7ay7TdrULY5NohNuFCadLPGdySBt1unMP3Ry9KzP3JbPyWrhcVmkby65Yeb3qKksuHPCHEVERtk4",
  "key23": "29Yw3sFetbFo12HT7W6MRWQzFm4tmDeN7wYkuBfyCXwhgR9cDSGfzSL4gEmRVm6HGJiYiFn7h4Bzmj1CPWG87DzQ",
  "key24": "5hke8brbVppXrV2LeETgeBDTFj5EpqTrK4U2AfnoWqGuQQ2Qy7tYnWZn7Li5STxfMKxwiLhVZ6b3LsfzKj8ZQADu",
  "key25": "4nYno8EHP2PWd8pAaBvybLtKWDd9QKqMQ9XzRUZmwdZVNVQZ6PF8vYfrfb7rBKKEbHvcnUfCrUaxB9B7eiyuBxFB",
  "key26": "4whVEEHni8Fzr4qn4pT4NjS8ggwXKDm8mG5vJQSxbPgiK2t1xv3FaZo33VinunFqEhugW4Gdf764TwsThbMH9fh7",
  "key27": "2w95FtnL56ayhaxqFz3w33HvAsXSN5P7V48bGQp1Hh8hfgsdywRNEkpzpixYVbyqGKGgajgQ4v4tHtGefPGqtZYj",
  "key28": "mGT4v6Leb8mrGVXDtNzGrRpVU1wpE9gj1dMVnFA5dV7V1dnKvHzFzL5GNaZM1QW5QJcKFyh3sgsNagAwmSnasMf",
  "key29": "2eKJhukhWQ8EgUcE7L7Jqad7q14yPxjFu2mYCYYrpLydZhRLWU5cRHSDVmV1pRrGWZjMLkzWCvqoEAJUmmUTq11K",
  "key30": "3exdQtsPx6Vxz4GNQiHKhisiTVRPH38YpSWR5PivdpNMgHMWxYJdgjFsHZBFkhMY2LoiLur8RtiRG3CNVuMev9eH",
  "key31": "4TPChALrUfvfjxsdqVsmjZ896dYqDtLJEUtVDwMFdXfC1SvkfDHWbhS46VEgwf2brdMMcjMpRmVisro95b5ZM4R7",
  "key32": "2Ejw2aR4ocKX35DE1sUxkkD4F4eA8JYjVnj3pLqx4D7yjqwUJe71ziaCpkk3tydekPdu32CmQ8qfC226XQGCdomg",
  "key33": "44qkaSsUB4c55MWCUXoq7bERk9xH9QAuxMUTBy21FqErXHdXuEQgWYdzEj1oyVx74PmzjDSg1bvtkr1Hnck6nXoD",
  "key34": "3yX4aqb93CUCbNhYRQgczGjzA9M7tGzvBhV7WW2mjECsZDeXYrsad6jRQiR7WdX1Q8VaxYwL9ztyCyms2k2XhoFE"
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
