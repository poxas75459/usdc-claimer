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
    "52rAuJGxFST7MhJJh2k52DNeejHPhXSdwnFnb7PepZwnhaBnPNqBZvQeLA2k5p5GA8safokmV183Xmpn51tT1ab8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNAtcLUQq7VmvN2u3b4tG5KiqLma3aXwbEeantHTLyu8nmqCYCRMTqbXtTmwjecRgWJzM1YofRu2p8WbQiPkpU5",
  "key1": "iEb9AL3T6yYmiz4zEfTNggCMiME1NFFUDioLSTR6c3Lfhzn2qMnz3CgNS4hNa2KjeU8E8omCGQzJgcWVoYaEvEV",
  "key2": "5bFvMzd3Q9tegtnsAoVgsChEwFxLxt1ufpKHe43LduCd8Xj16yga1RRoae41CT1gAqAurywiuT1Yjwy4xs3yhrph",
  "key3": "3KdmtFKLkUyvgtqJdawoRufgSuUNLPqCfHQzhLPA8BDtwwEzYKT8mj8NBgUYTkEPZstxsmLpFGZR3VcMuEn6cyxR",
  "key4": "2eqkqAKMF6mH3aympq4RdM8JvcGQ85x2iEE7eQJzzJP936E3491Se1L2XE67EN15NgHna5izbUz9GSP6zq4ETRTY",
  "key5": "66MZNWaZrw6dqHucoDk7LwiKHVoRVd6B2wfr1WMuKXPFW8P2CyG1MHfaFwm6jwTMS5vFJ4wHeWrRfHo11kBjZDRD",
  "key6": "4TobqJovDeSThUh1nFRp3CnJ36YAV31VBTC8ZMjJN4KHrG17iVDf9F4WBLd68Z6ZM8WUsxivgj2HdpvUqBK4wtgu",
  "key7": "5hiAYXn5iM2LQTYipEcTeEau7Qhh2x4Jp3weWbL9AXzbgWHV4QVoEuG1Kh54SfmWj12RSJiahADsbycjwbsFjYmV",
  "key8": "2ZBkHv9DxHhkNgAm3PisuuwUg1jibibpbNq3QxCRVF9EUhNHTXTmgszcDnGrPmAhDDRorVaMDA2poAcSntAiMVgf",
  "key9": "3bVVUnhKEAWW2zfyiCghFkkiVYD3Zt5U3uSYHJWr4Pz2wfUxRAGZ1cJkC84TXQQeLmx9uNgqARtKrAyGLe1izqAt",
  "key10": "2TAXMZV5ym85M9QQ6gH74wB4EsRNQjB9aeSj4W2Vgg1DdvyvTv29Y8D4Dy8D8yu75qjmsmFsmHm6wW7zJQHx6kLa",
  "key11": "5c1DpVtLwQaej6H7v5rJsmToTZMVTMFFPaz88rNTLBGThgvgK7vwzUHiGqtfjjLJ1WmnUhYDTiGD5Np3pGT48MaV",
  "key12": "2bpgWBJZ6WhYuFhqDYJsYr17dDA57EMW71rSvDvD9MrHeysRrVKHkNt6W93NP8tGJK73RirqVyjtCiLKV2g4xHWw",
  "key13": "5nCFnCC3T7DCTaqfFZ94wULtukz32jnStgyda2Bd1sb1Ybz65BGXrvjDqTRQPaNB5TkQgu2rwuoWZmdEtHffSd9g",
  "key14": "sN1Pgyir9X7bkzMAVU1ft7vUmKSDCj2D5a3XbWAGsQnc3259dvbTbvCaw8hZEep7Lq3t6LjugbR19jHVXhzJsUb",
  "key15": "mqqUy5nP38r3TWuBsvQLDKf7vk28ExqDU6hoHv42EeDSD9ACNPQcWzz8BtseSXuuCHPJ66ZSiRYBFrahmGqTd6X",
  "key16": "2T4Fpv8Xjb2n8MhcbmjnRyXG4inGdgPuDfiVD366GBEa8EfpfaC2aRuaXhBtCb4QTZVahFhfUgvASYoKhUtpvdaY",
  "key17": "KN5LcfznYz9sHSfdBSYSs78wXxGGbWfjTBtoxn6dr8wQA1d7od2QdFCBV2vw8LVkiHkZP1tNxddsyy2AR9tBA8g",
  "key18": "3qPMapXFHa2yDNkgQ5Ma1uFhMr9WZmtXJJR2UaXHDjuQJ9GoY2XrQF31inK5zGJczvhdxQ5GZ3nrg7i1GbMDMkRq",
  "key19": "oJjUCjwGMvmc5Czz8GbGdG4nMUyvxCdagqqF6arsWFvunzZsK4gyzmCqgsKZoB4WRwhJgtGjZ2rrA4hmjC89tEL",
  "key20": "4EaYonuSWbAKwsHp2Q18WTthqbSzfumokhBTiHLfEDuFT9hmu27bhoZRFtZrQky2NKZ8mmbx53ADySuMMcnDvN8m",
  "key21": "RufkG7T85sdbX3gUCUBoj6kwaV5yFe29xVTGFqnV5KGKcCwzHvqURePRyAF5AnFeLHvcbshTNGcpKKGqeZshzGH",
  "key22": "5w8Uu1bEQe16ZemMSgxeBPNHs4LmaM5V5H78EYwJ3mRnkM8nPYfEzZinCecSiMiCiQ4XbuVWteGfaUPszC18W5k7",
  "key23": "356Wi9ENZcggDLJpSn4PqSbZ8M3jEYu6MDz4JzuBUeMwzqkqtgxfvQpXPrMPUTan8jrJRZnggyMj6f5DYZ7cby6m",
  "key24": "3nM1dJyz3QZUMwYz68Bh2YsBqRqPoDgU1FJk392uQKjJBwr8RbKkG6Q4gGafSPu8nNswiK3PomhUbA3LkgBAATUs",
  "key25": "XhrEgpAWEg5XFL27yqJFsMrqpLfPYqXqWApEVAhcAYgJmJc7VibaqaPpx3mFXqBHJKLtszLATQZi1kjkQwSKxpu",
  "key26": "5AgnwYEefeJMaCWGvpsNWKiKEV8tDzxvsxYHDKM3fRv5X6BDorf3iLiJm3WDgdocQ3GX9mADXGxc8dAjZf9Cf8kK"
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
