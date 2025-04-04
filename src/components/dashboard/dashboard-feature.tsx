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
    "61eidtFJraaFFPZzLKAfsS3j21ND4Z1a2u2LiEpvfn9dr97edc451Zikuesd1hKJ9YdQL15ZNAg3B1FFrzaJjooz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjyazwTxQ29EDvodSvr7154ZRNbruDoh3ABCHZf6RWEWdnEezA2N43Nue4pP6HvDqymuCJ6DjWNYLZFj8U892Yp",
  "key1": "Pr9CeMyzoG5VZhTr7Q1812GNZG9BK7FBj2zZia84baCC1Zw8dW3GmECY4PNPWvAfzeWJ1iGuUXqtFyzWFct59CJ",
  "key2": "24A79btLvwawzzJMuPwECytwXEPpMGdu95FPkg6VDJgji5gWXz6nrB4tyaSHjxZvCt7qpCQuhJsoPWM4j9wyKuvU",
  "key3": "2tNskrKvpgfN2srfRvQGXUmPeNsWeqtmcvrhdu4dJ1EVzcY3KjgDPWfbng3xQwtVALx7czhFgz6FpZoQHv2rvZ6u",
  "key4": "4KALxkPSgUsB2Mgsta2HZiLbBtFwrGvteSuoXRNkUjkCQrzTU1shRz4kSF3qunxajMMJQwfiWMgqj3u7yD7c1EX4",
  "key5": "2hsBS9Zt7pAeQBK5muw67XyLW6tMJBVEYt5WjWfSadAsppHVdA7CTC5N9rCVzptaqF6UoGkTpiEbsxKAR7cLgy7f",
  "key6": "45mwp8oX6ENqSG3hsUpAepivNtEPhw9YgaXwFWACjocUDTZJ6USz44yuJrrksgopQZXwTNaxApGKgc9Zx7Vq6mn1",
  "key7": "3j7CaoYmG4Sii8HmEvicLNVEWAXqPudvHSdheQ1LvaY4voxhToUeBUKDPGgCCGMUzzTDfGYRqKJEKB1Rfb19Ft2F",
  "key8": "2cAS3GZNwLAciQ5gcY516WZHVqB19zzb6axijPjpuYTzQMsDaZyh12tUgtCukZ7DnRFamJbAohJ1br7FUigRMUh8",
  "key9": "2Sw3KuwL1cTp9kq882vKAAx4TVPahV16mPGUzQgcZmdUJZbgoN3C7b5bBNKPkP1osYtrc919MSTBXyZCe4bhybEV",
  "key10": "4qszHqYxgTh9dEDtFu6oDDt3SWWZzTtDn8dduVFjaD25Rn32jGkVZPg3SkLREDQA47UY6StF3TbQqYvcvGQdJDjK",
  "key11": "58tNeQSW9J1z7TvmLm322P94pKR1DwcsquBtaabU4e5UmQJ1ES2CGUTXuVJzuuTQZuSWqnhe5pC2M2nxc2aWBuFK",
  "key12": "4pESKNMZabiPJ73dr9CoBZuJnDLbpozdL2QtDVeUGCUGzVN2LbBQLdMMBy49hJKt8XM8vpBd9TSxp8pEN5xujU1a",
  "key13": "5G5gVd6uEK2krom9d5SGgEoDoXVkxDATaeNBvXxiJ1qWe5R235En7XA8iN3wVUWa6z3oB26UirnmCZCMwV6TFSPx",
  "key14": "48woYYvGX2AkDSoisHWqZFkZ28ShsHmp1TduxxB7B4jQV6BZwdcLy153WCtx6sniCD9nbFnWe2ATh8twCwM9rpgg",
  "key15": "G2EALCSNSvrbaGD6UEDt7brdrGZsPDDhxuY8Bfaajru6rPthppQ7P4pjCx4AZGC63z1JBEFodRVyJNxhn2RQ8Bk",
  "key16": "2qtDWtf9Rn8Z3R6yx5t3g48K7qeFXGNgjGJTuvcDw1QZUxo9uxSfK4fEfyD3jnhXMEiVtvmA62zEsQn8ZDM4NxB8",
  "key17": "4uGhbC8mRZzUKdEHwJSE3aPwBhNsfWSKTpwkXAFybykhoGGpDXfNX1aQSDBxwJoeGPitMWov8K9Xw7yeFVGJ1Rp2",
  "key18": "4RjLcJHHgW9Uicdrf83jj1FANprqzYXhmb5k6GuN3cGokzZWc251LgEx6qjc8xP99szveUFr1jkCEn2uCESL6mM8",
  "key19": "T5uvt7ieZLMtKAL6YLLpMfwwtU5qqftHnWzGa95nkgUYb7tVscNyugJHK5ZqnuLo4cJXGzbAVSSVScaJvr5ozRH",
  "key20": "3EDR9dqqasF5vJ7Kaq7vZk4jZPwbZTEmkKnfT8vrNTLiado7H3L2VpSmtTnaw8FsvdGtvjw6Lw42CQfx1YzKkoy6",
  "key21": "eUxis47eSHRDji8xab2PENZ3Skpq5bhRC4rg8QmHcpWpGu97xfVjdjDqPjMZKkBTy4TjxuhREmRCXbjtwSMrb2c",
  "key22": "dpNZdBgwsgw9tafsQ9wPabZK476aPdUkDRhfRBNor6Vhoe6N11kK2HgPiFbmd7JUevneLiDW8d9iXiLzWuMaKvj",
  "key23": "3VjYFGDnb2pcjTC2fBdcYEHv4jew4Vdf7mqDtCDLjRVXPWhgMWBUmUuyhekMZ7HFuyUkbmb578eL7fuVVZBA3GeL",
  "key24": "5WfCahSmPS7xB9SPncZeRmvxYfFGXat9yM6CLMZnreQpRpMm1iM8YvBMxerRtAB8oRSFa8KvYhEBRvNikxr1QEjS",
  "key25": "2EPxHhspJfjwMqsiwCnJzcN9PXqt2CyfsZtETn3y3GReG4PUugupLfjbaRboHmMX4fm6XYsMtutkDLBDsnP95UEL",
  "key26": "VXva7Ga1c4X8TwMTcmUNE3jyXL5KctuGCPmz7t9WrMccWX6iACc8MGTMUxJi6LWah4VrgvPudYBRCxCDraYDYbW",
  "key27": "ARXDrC4VE3qpKPCKQs252VWi5zwnJHnp8AT19QfneTavMDJr5sbATjnXn5yqP3zYwmC4Un4vnhxSbQHaTHmedh4",
  "key28": "ExYLpkmfJyhszS4FiMs1EUejCVuRcupJge11zQepoRJYBWG6WLnnH7ZjcTjniwRMWErxZBg8fuws3QyyH22wpPx",
  "key29": "58YQGERUrb1WAWMx3P5UzmMRqa7o2kmNcyKjBiUmPgsnW23pyG1RYddyeP49RL47UMLJ1h9ZjhVX8R9BgoNeLspc",
  "key30": "5NFg2ZHmXKSHFmCkxP7ZvmRv9pYJx4S5LPa7HtjBkTxCE8ZZKvzCXdpVno3ysQzEofDmBEx48rxsBhaCanQSZtX1",
  "key31": "24gyGDSeQ2PtUsHqnCx5U8yoyhzqCvGCqeCdRCMzr3uFh3LXYAjvZ19vRrnwvNWbuacAiFHt6K2ViGWsLE9nrX3Y",
  "key32": "5AV8g1eAXTVfQUTNGVFTyBg2BtGMBXLFdUHPgEBZyxPuf53mZpAt1r7ujvLVShXgXUNzttC4Ae3uWmzr4enDNVxo"
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
