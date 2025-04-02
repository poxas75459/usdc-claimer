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
    "3VuVnnXhJs4pEQrXx7ZRSneJYXSuMWQ7wuJ466gPgMGqEo4DVJz6uxa9VixZLKFNK3qtGcwHCjS6kH1JjWDuj9yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAvDJ6YJpgZyp9M3JkzxzJApVwqUbBJxXV8eoccHQiWaZFHpDtth9M4geSZR8rH6FNYXBEiJErffDBUQPnP8T6b",
  "key1": "2nCUcPVka7b6DTiP8h69QDLsxvxrAPXjivwvEm2xAsgsLsZGaAnCgrMnHDwzZGUTiGRNRnVtXpuoiKX4QZrvXGbS",
  "key2": "RzeMq4dtTEV1T5EtWXV6cMbWaQbaKG4Wv9PT2pxkqV29wHPWEpooBddWaggenGnmfWLNqX797PVFmwNQPfK6Q7s",
  "key3": "LMLSt7jGbBBMdPdNUG8qpPqQpN97jhtNgQ8HM65695ZdaWhBgpaMRxbRgAAQg8d5YhA4sqNSJofMfc5RUXB5EmD",
  "key4": "4Ra9JD1xmw2hTLy6bvjm7hrNBrauFktv2wqzKXiFF9cV46SDYpMMK2ub6Lo5dtPUnNWVGdNm4Uz7dbnj9hPN7j3T",
  "key5": "2u82b1G71LaqkgPMbokqNLZUNcR23FgcXy7XjP6k5XwNhGMVdAid8CF17iKLgczKar9PDhX6nzGCVY8zGd97Ennv",
  "key6": "xbbkuJTKLdkqZADsdrAipWAGM2hpHJJNeqPr8PqVhTA4sBs4bkSAefbmn3yAHHbKBY45o4pDKqKHnPL8CVEDFtN",
  "key7": "3azbtQdpcXLJUTM9cmF59mg23HXSKE6dq7rMqMwFc2n1d3aeFKy1EvyTGxf8UoQdA4XSwf2The58adFd3hXkXU6R",
  "key8": "irdnG1KRrMECkHCuMNLGSm6pP12amJyNUemHFDPZaTKCT5Wgw5D94FAj2fM1v2Xr6p9p2dfmgT6VJwnCCiU3dbU",
  "key9": "3DR2EZ3JVNcizhXZZSAfaB15jM1ySuo2UhCVH5aUPSwsMRP7CBvWBrKNHNEfPWZSaHDR5vxRMBk238mJZeZ4xbr6",
  "key10": "dBxNE6KBQEwEAodre54gq7EMNLYX52kMCy2d8uuuM7cr4w9YSZebLqRg398NxCDbpetKyozU9Rf4opSTt7rg3Ya",
  "key11": "4dPW6ycjy8M8xj94rBM2cxumRtrqy4nLc42BijDk7Toz9zbdku5nC3CFe7wxoiveBoSafPPBCGUHBpeHGcmPMjck",
  "key12": "4YgG8mkgYwiAoVwJGrRUwpKn4GtfUBFqMAUh9nqUJNbeuC21oNrkVShUwhutGPwTHeDjRdXBB8ZxjSps6aB9G2XX",
  "key13": "AuxTu92hgRuN7eBJPHvfZBkz7hny1XfEqmttbnbKhMA1PrxQg9GPhivG1LwuUCaxegEV7zt7doUeaCWDWTovFp1",
  "key14": "47FVZhnapvT9appnHZWbegZG3JLoQYPEiSpkS5LBpAEAtRgDUvcJ1THX9TbpP9muZbEydC21C7FRZCVa1A9MJ8qt",
  "key15": "5ZkXR2jxAX18o82qaSsxoMZZgEk2M98p8imBggAabtRoGJnAU3RBGppkLZYC2RNxHGXeci4U7sDd2KG3qEBnbuNq",
  "key16": "2CZ2kQsRCCo6KSn4LvjXC4amRWEbgckBEijsPVhNByqE1NcjucYSnuyo21PkWahwAruL15KUXsjh1kuHJpAwRXsJ",
  "key17": "bPcgCdGQtTu5N5yKYYCm2s2uaP1Hq4bCkvGpif2xVx5FiqdCb1eY11vtuViSa1Rw3N17vsWLoW7MBQJZc23Roam",
  "key18": "2Bc7X7cVJ8vmKrVgRFFgFS8NTTUazuhXjKCAQa2oupvLuaHcN7EioWwPE23Ss9u1pWqZxpxNVjtm8vUxk8wMizmV",
  "key19": "4o2jJZHDbctn3rDKKbXrohDaMFZeoS8biQGmTG95gC4Ano6NmTiyMWiQCikA6Tjf5QYkcwrYaLtGZnQDirXXB4qL",
  "key20": "3FxCRqMT8ZdTphZxo8tRnRy9FKKjiFRBG7FWwxGQk7Ha7Tkv63Dxb2tc8iQfiLABoKaFQ23qCbsWj54qTMPGS2e7",
  "key21": "2mK36XRNJnV1LjCMjDA5LPzVnoVLqUMLA5kpGrdCTDjzPaR8TG9qYamCYyQhHUTebnAmPbFGAAz8yuEBB5aoasgX",
  "key22": "5i9sES7r7zJZsW3rgmMsRN1y33XkCKzWCw4W4dcTiQg7mvWDS1TShzANysxYVymfYMpePosQzF7JfbFLiDsjjZK1",
  "key23": "3FMKBxLXCZ8ztD2LafrKYbJgbjZBRnsE34PpgggFWpWUyAxaAcM4hYj72UGs7xRGar4zHaGA8oedLLmrUspNrwe8",
  "key24": "2aW9XLhQgaCUrwhyrJApFdryQN6gXU5zuReSct93ZzLETaaSf8QJtWLZTbT5Fo3p9uPqXDxCCJpvS3Ee9UXhQaeW",
  "key25": "3nsThmzbXBU6ehH8t2ycGnCq6EZjoBq48SkDSRwq3XJjrCN3D9tZk2AqwNXmb2JuCFHMt3HxYpAsrg653Xicf74r",
  "key26": "8KzoLC8B6xLUeCUvNqW8nMDAv3XY7uU4aY9xK4ceq1HGvkVfpDdfyQ4jZeC1n9GXGAJxvrCuLJdqiWggyCwXCxu",
  "key27": "NhboZAgBn4LMfjrXGEXbmW1tFvfyS1JgVZpwEuk1U29CkD2tWsaNCdpVFRb9bLAGoeg8CWVtXYUjECfmWbfmMRt",
  "key28": "2GoVhtSWtUD9nZc13P4xTsaVihwgqdkUkgVd58jcEKdz1cf71YPs7wxBcS3vfJdK35G4VEEjcbH4Gtd38CJnCXaa",
  "key29": "3JEvJ3gmpHBagWNRkAfozxVDCHPDii4vNnc7Zad7RWCsWuc9q8BHNxhXf88Up8pYuoLemFAUomUWBHBjfqGoqRwZ",
  "key30": "5vvdp1RdhkdXWVgTbEgzBy2MeMXZcNuQXmmPWEzLLGCqb7vm2UStJf7P1fJruTzmkKA8SE6MGCZeffLgxbUNspks",
  "key31": "bZ8k4ieTpZQpcy8LkKRZFzM326U1Sk8gSrbzfdTchRwRGmKjXv7sB6SSAhaHnfMjzc2zKNkMBqPb9rYFMn2xbhu",
  "key32": "3Wu8UDsbQLmYmYuYuhogfh6cY4iNidBzKDisQvH9VxSjqBxaSphtrRdpUS21d5DHkBd6auuR8wDs7xUv3UJGKzFq",
  "key33": "2kTekaeu8zmufZkx8LzBg9HaCHW2jkrvejYkBiPVzsr89U8xA39bMdPrHTUtdnmKXMn8KejBwDSSHLSs2HejqZch",
  "key34": "4q9xp1HZJza8hQ4pQpVHzRT63GNNX4fD5fAageUqoekfqiYerG7j8gM7SiN1Hf3wkkxHpUFGzDn35mnbS9Hb5KA1",
  "key35": "2XTCas3ZSXKot7QfxKGJRESKT9TSoh8BUEAwyvhtBG3UCVkn19Re79jrbXCFhXB4sQWGGA7i8YE8eiAxnqTyManv",
  "key36": "3y226TjGtfovvEqisFryeYVj16LdGVEGVF6U6T4iYWDW5mVxwnxUizP6jMix4nNMRhqZUcKCgqFM2eNZXQyjWFWC",
  "key37": "HDLHu6d7JSyshB5sZ3ZESyiaB14n5RMtv6tcoQt2HHu8CswjtcdgrESJXpyJUyrHJNkXauxnppMxkoFHUfWVmTv",
  "key38": "5U3bCxNF6g26jg8UovukGUjCx39f54FDYbSPq2y5dQnVDVQ2qKUM4nmWSap2zQddmPo7A9LWacWYnYnWyHzLe9op",
  "key39": "3LYdAEQrNUqTL4MQNrjop1TZiNLWGE7JguzqH1UQcwhMbYm3vYwnnNcgLBJ4k2zrLvu9zhKsXNFV6pLS2G8KCgKa",
  "key40": "4ERa1t8m5TbjmRjYp2wPTWPsMZXmRG6c3mMaPJFh6852VpTkifaNZkG41nUFojdt34uCywKKNhPG9VeDL2AEJv3L",
  "key41": "H98vZhidwyB4ZzyvR8dNFzQZAaXBeGsUzhGbFBxS1zdayUBaCe4sckYpsvHPZzogGjJcJD7WUopTBtXte4o436H",
  "key42": "2koDyPmAuBAbEvwUvv9NV1dJWqoF1GKHEWwNCtJVJwVLcyqakNKBEGH835S8CcMvdg6jZo2hxwM1QxUyNyrQWKkz",
  "key43": "fWD9WgqtZYUFmFkPn2VY3btFMc992iLHHNSKYdY7JNdZr1NrQFb7S2mu8qzvGtSrwvhDrqE9KA6PrZJ7oFpceGk"
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
