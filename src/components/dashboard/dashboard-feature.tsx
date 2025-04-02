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
    "61nVQ4pDUvqssfpLoMtKzLM1bdoKFNZqKWWc3qer7KJLCcUmg2sdpYhLQZaNyGxCuZCDzLgz8AEHGmfTcHnJxeNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YyUb2rYPmoGmenKFMBEKHwG57GsjdYeadHhcKaQo7XukUBo2pZCVzPPZiKRtLjjXoWsCLQqkimpFDSQ6onbW8d",
  "key1": "3sy4yDvuM3n6cmcgCUZwpbfSQoFFxAXBocfq5DMSwwXuSRiV7t76Nakt5h2htzMyHRAMjoHPw1pLa4LXpQ36Ms8w",
  "key2": "257H7QMUnwNZ2qPpnqYZRe7vLVRFFSAwhwMzXpfHYJYZ4YaAjh9HMB7aREn8ACDYHjeAtWxeYC4hYph5bKnBDjgP",
  "key3": "3cyZ1czyKKpDFrNTtB59YJQovtM1mN8Ly1inPXUGuxmcH43PeQoJxfApzgACxc5sP5ijwxSCDUCnemZPun5DExre",
  "key4": "5FJnGZ9ffJA69KoF2ujMmyC8cWzeVwojAKaEaSeb4QJLSiGvEFgXQwfg74pkjJAFba6y5TzxUKfx2UK6eAeRpE42",
  "key5": "2DNpU3tydDdGzcRh7MwmEPZuCn9hWEUJPf4fsRnijtxBuXpmyZbwsoMPVgJphCcZa4euzK12QWSTTxju3ZuAT1wN",
  "key6": "5rBse4EGUDcXv5zheqNxYbGRBjeF7LzpbTPPsnk7DzqizHN1oBEx5ajA1QiwfiToM8r4B2NsmBnc4TbQLq712Nj7",
  "key7": "4nSo32MEqxDv7ZYQi5q9ePRyMihNdT5B1aQWHGP4uLNW1vWRbo8Lb1tmeTdC4mZQcn7fWRhaG7sEbgUCYEtF4LH4",
  "key8": "3MsXfqFKcmK1NZGg66gUoAHMfNKbdSaeNXppHDSRFi6rHknULFJ9pvhewQUW7FVCH155unWSQVqpbgxLQRnvt6CX",
  "key9": "5MJp5rhYk1asNg9FZekW99XmiouyhH4fTYYij76BMjzkoZoV91GVdy2tHCd8sByHY2DLhU8UCaTSUDnAtQghJpHC",
  "key10": "5hNw7Re4FYFHFJcV7dZmGHw7hjbQkxUTCgrJ5CiSNywCeHfX36bxnVFYDuPmT7unJamyBa2yWQyYMe2PbQhCe5DU",
  "key11": "35rgPHzKT3XMrcoEkmHPRZUk9Y2AAE9otvq2x3ndpVnjyc6TCyLzdG5bhdKZZbVkeiHThyCCJ74WZywTxRVfNifp",
  "key12": "4XajK2nbMRoEGPTiykfFTLUFoyTq87VYgLvcMRmXkZZa1waWUBawEKvYYNrDrx2xhwYcu6QQQ1SGkcvMsbmTzLTH",
  "key13": "gQYDVAfSL2WnBWPJZdCqXvMSU49fKuDnztBsKq1mjjCUrq2bvJ8RvHpF71vYn77oKPviZxvGzR2bMYMm1TwcRrc",
  "key14": "4yNFCVdrEDnS7aKMLqbNZ47Br99gCg3WhXxnNhYrzDgDKsXk8qx9hAeV86hjP3xQvSP1zpuCkqwR1AGnASZ1z9P2",
  "key15": "5pymUT5BpzN1bKPwwBbZSy8YrXEwmmHNg5cTGezeatHkKnLd415kX1dSHrHeNAqCqY5Q1Rjg8N6DnKFqN97paLCC",
  "key16": "41WFUBDA5EfdUS1MzswxJ7924e6ZcxzyRY6V9BpVHwzRX3QagdS2pq4emja3UNzMwJPRLm8hz4GgdxJhRg7kYPXo",
  "key17": "4a9NxSci6r7NVBRoSeJqCZuvqSYNfzZJssZCkvqurbL22MAFQpZ34ftaLpSBEzkFPcUDCmWzinpyyi2fKM82X1ty",
  "key18": "2n5rgtANnm3LAK4HXuAfPojhqRo4ajhvRaidpewNTGkUggPd4rPgfQXFmUcuHjFB6omp7sXn4d3st1oPqBwhLfN9",
  "key19": "njAUvhg7Cz4o6wqLvHBuPQD3CqTW6SDav3Z1cuE7vMWEVvtfCGVpcAkAsVB41uhWy27TCzmrF6zietAGuHzmBnP",
  "key20": "zABzGicdZf18jCs415gJnaCW4DgFTsbdTTUhWJDJn13KXucP8GE5RbTP1xkdm4QViDVZR7mq9hY87LvRb3tzQC8",
  "key21": "2JphBqAUokeK1zhQsSTCwKM8bYBmHa3N17ZZALxdSttmyQm84HdsGvSQrbs62pnq4ps4p173vLjpFwSEDHek9ENA",
  "key22": "2vjQ6haZ6zytoRXvgafDjMABYGwJdytKs6Gr54yUitK4oFqKfjQ9d5XGCAUbaC7jX1sZ9gvpZxsHpMEKy4bV5nKc",
  "key23": "L2nUfWtJYZips3rR2ukCCCoR2a8xNWQcdtmQWbBLwwZL9Bvt8VYEsdweY3jba3qhS3ectbDub2grJP7o8CU6hcQ",
  "key24": "2hD23fjkFZ3XAcpvQ7n9xkoU7y75bZXPXvQVrcPFdvNJwjXwPRDePmfMBQ5EiuxqhHAQFVVbdGBbaVh9BHtWGMwc",
  "key25": "2snfmGiTKCvm4FjpHm8iVzeGfbfcXvh8auvgRzw4LjsqwyVcHqXdaCxFjV1mchoGebt8bNcxSCT29FhWCnLUoGgt",
  "key26": "aVxP6kWQm1ZP5zND4srwQttkEFuavSCcS2PPvSryGcpXp1c7ogBofWKDYbTJhyE4Eu1znyiiw4vRPhtUU9v77F4",
  "key27": "53N6xcUspxYn4xMaX7Y6Fmxerir3JKtAYKkps4Z1EQbk8D1RtQHnuVd1KphyHMkoCqwQC78LsVSggg4nyAFSMEF5",
  "key28": "4UkXvvcRoasPFmD9SKogq8gWgJFwQ4qgMPTSNWK97EAyEoTkyRWkbjPhDFzuLtnYim1rmKHByR6Z5riwaH1ChVSB"
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
