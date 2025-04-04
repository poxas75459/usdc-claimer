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
    "59N6fSCrKgG3byDLpfJ1xpMXfvrYQebUUDkTtKj2AoeXVTLrb42PDZQD9j5piUzfjJ87izY4cggsA1JMDwnFkMgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfMqEkoCoCYcDHnE9FKbYuiJDHRGqNgD6ht3nApN7Fz52LKK4kXHcvgUsoe82zbr35oh98atnEoPNQNM5CLL6HZ",
  "key1": "2Mj8ovLmC3ywCneEEKqUYinBgMSay133swPxcdz7CJkMiYXx6aX2UDWoX1W8kE3dkam9hDgYQPtQxk243mmPe8VS",
  "key2": "2zbBxC1AX4tLR1d4Cm7SfxWxuzCShAogHgh9MpEht7iTmsRQobd8jRKHJHVsEZ5zcDspJCaU6EVEbx3bBce3vujS",
  "key3": "4cTer9xoxuD1M1gT2achEBamCvQHDc12oSbLD4UaYkMWtD1E7kyWxujVxeWfmjwr65AxqfG7P6N1hPpDxttipLRa",
  "key4": "2hTnBEJg3vDZnuF9UW3LJzk9oqsBuMWZVAz5pbLadxd4zh1rMAjKfUqVaa9dfztXdZ3z6hamBU4mrLkv4qBjZPS4",
  "key5": "2sinyMSi5gcG839NmZiwhj1up3ommfYLFVDcHczhnxj8aaZxJijgTceadsBoGWPPWF9QtZ2t27iem4XKMFSSdKZ9",
  "key6": "3ozgfWGdsXTctbwj5XTvpJfcGK8sPfvqjjsXhfzS4aXsoKKCif6TXdYvZze483752kuB6k873RXDV7CChTFxm1BP",
  "key7": "5aaWKHBff2CYaJz2dPkKxokD9FsU8VVGVWgxLAeVfPSUkuWwKFv1HX8eFcFKu8NvWEay1wk2kN9p1U2zjCAShrj3",
  "key8": "4zUFSWU1Fvn8wZWZ5AHYYo9XhR6vEp6XdtDJ18x8EFRNNQk4AZow4bFbJvNVEq5BNeHaqvcZj9ZT2XGLvux7H8Lf",
  "key9": "2NhYA1QceTeL3JoFSnUWgQf6mQjM9FTV85ecPqWQk3jSNMRKdniwLAtBy22m5QsEjyeJvRoSmhweVDehNuz4eQtB",
  "key10": "2zV5fGx1LaBqAiccJhi6YQZRDAewU1pJYqSg11xWem8G4UFTJwG2kwADh8SK71LuKSu23ygDaac9auYCu5Bzdm8s",
  "key11": "5Cby7513pZkESeMSFDpWFoqNcyM7uPb1V5AjF5makEsiF9gB3PQFejGrnnha4hhFiNvBuAXrN1RRJEH9v3hfrdoH",
  "key12": "tynQVf7ugT3o5E7VNQYotTuWsKAhn3goQn52R7vPtHWDUycWjE4cnBwvZCoX4eVyYeQ7KxCXbCarQxPoayB5BdQ",
  "key13": "4Ce8vkKgV9rc36WrdF16e2vEvzWP33P2ACaqkUef9J1xpEPByqAcThJGEJW1cwpBoKZYoix2zZAx4nXUGyXZxHsr",
  "key14": "3GJUm1RoRekGYHNReR7TiBabTQatm18fcFHg8mpWwmy3puThJc7EYcnpX2hV7d9ykU8V98acMromMQskAAiBgyZD",
  "key15": "8GJtzPEYbeJCJdrwECP5b3b8yizJPuxbXg5ugoS3dGReSK1k5a24FsjQvdXbVVqCziEm9JqkBgNxQiM3zofSBAW",
  "key16": "UseJtj8uF6x7kynMcimQ5vtz2Yj5tCDNCWDfQrFx3fMFDif4jMKS8fsTPne6HuaJxqnMEcdwbEdBW6JneSPannQ",
  "key17": "22otkau9YJHWncfSTSZsLTavTbVtWJTBcsp7Co3tUunCLK1mj24tSYBeLFD5Sbz8cFGXp8A7TW9TWwM7x4nLvVpj",
  "key18": "4zqTpXGUiXrt5EoFLwduRZeJdc2afd8oSit3QDkWxdQLWjEGqYcufHVBqSTVyHtZceXNudV2hR6Tr5rCZmrCF4ta",
  "key19": "5sDdS3pWc2gkbQCeVutwg5LXmcK52hoAEhupyd174FvvQ66H4yso5UMoGjtnvdFR4AzBN9CkVWZGj4HAGo6fhB4J",
  "key20": "43jGts221VNFCNccZqQBAByKDqDWn928kfMMAuMPbYqDe3DGq1D2oMy446ETswVNUfCcCGNijGfeqGWGEvGXgswZ",
  "key21": "4sQKXypnitPBs3uujwXD6q4DBp6VxVLARwRFdkXxvr3Cq8B8sDQNg17Bbmoa9XZzfSoYxRCPWL2uZGiUDzi6nw8P",
  "key22": "5UmQpzpaTvxgwXAHbnd4gms3UEAJZ5GDDCmAUcibsehGHjzawBQ3D9V4YN8YBMv9Z1KynZzByYLTdJLVF18hT1aU",
  "key23": "4Dvg5s1hnDzSpkmLUbDscgGn33gUPs33CgCzhdLCo5Nw1Vpmv1m1PSRVAwyEk7rMGFUaxpDwCZ6jShu1wgcWybQ7",
  "key24": "3tmUtxn9dk9vTicSKn2WtAiydYEEsNDF8hJKTACXPEhzsPPsTzJHenNXvNnTmWeFuSJCGhJs6D5FgNG1rL8WLzuj",
  "key25": "LxBsgGBUFBPbyao2zUtHgrH29najVuRfeMg9Ba59vow7Ue7vyRkPHzSdTaJyLPemZgBTfQLbSu3m6EwkqFwWVEo",
  "key26": "2n76TNUoJ5XvmfnxvsdKWCSZkWLuwoQBUqEDgd61nrniKu4xLYxfQWNsTWWtLCBCtaY7CezB358Ro2KdXKNddwY8",
  "key27": "4U6eyzWxZrgrB2NvL4yGJTqVbqUZZzjmrtT86yGibsqG394iU9f7UoAmnsrJiYHoz9F3ppBCK8cGtzzh7Jk2Wacr",
  "key28": "5dRK95HcQUTzTTfHEkEyqHsLyci4LeMkdBUs8WiunUdCmRwNG1yYuu9CEmxePeu1t9cSGQri3meuH1aRiATiFgfo",
  "key29": "4NvmyjjCkW47ngv3WDRs68rhkJNXPfoj83TiwntEmMkyHhAqe138k9cWKZG2HYzEf3WnDQXBETNSkNdqwUQZvtbC",
  "key30": "4o7bRuhYgLCNkH2WqqMMnigUG7k1fhWuoZxp4pxfR3BaH3wmTUtthguSn4KeGiDj3Luz8UkSAWsaZ6iy2ECdrjsy"
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
