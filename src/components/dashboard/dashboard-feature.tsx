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
    "2h7RbGsvzhWXkt9p5qzag4d6PhV8oxDQy5qm5AQ7n1Ag3tEGtHd6ZmN2YHohASDjks8o1XJ86fi5hVNv6fi37HWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxhXPYkwN733TiLXhcDMTX52vb6M5Y4PWNb5wSr99iWHPoXvgdPffpPVr9D5HFQ94HqqQbeKpk6uMwQL2xHGuPV",
  "key1": "3DA15Ce24p3LDQXE6fMqGRaqgeLAxpVYT5TnDw5MEocDkVmkvdqz4ZFdjfhBrsfTtcrsWodZfB66VyWcWafEhXxU",
  "key2": "3nXrccxi2eCDLdmqiwQBsJvtL3jZdqn67EcU7bYr6cLriDXE5DDMEXSLKire4F6J7bMxhGagappHp7AZSuqQtAkg",
  "key3": "2VSMMvPWcAhxuL6NhH4jT97BWsfiAhqLqQB5EYcv8D5P95fTES6UE7PuiDafwFds2975hgmrpgbpbxuRuuAfAHpE",
  "key4": "3k8WQSn4CG317z5toVUrGHn2sDRkaLKN9dD43BmmiEVmtXBw9TSPdh6bgpdNC8ALqHoeukxWPud7D18ZG29AQm6x",
  "key5": "3DBWRteTVG2Bbpk2pmpvE85Tg6WxJBCG9rZ5NrRSgZDWTbYVn7V488A1MS7C9Ar2234ftCrazYogCgsva6iyANLb",
  "key6": "4A2KEMGPpYwnoNP7eA5JV1JFgRjKSGidVQDPZ7YfmKNroRkxv7XoTffS3pD522RQRGzyrMAUCMtgeTqCndLPSLFp",
  "key7": "4g29PuVPJkTc3xJAdGWgVWrH7TaV1jAg6zGUusfuDmjiheUoEGLnfGvFZBeHmVkxb3yvJy7S414LMNDiZpjYNL4x",
  "key8": "4wLynL36MJjteGdScE12EtcUYHLDB2RKyjt6wZhn2oXr7RvYPWCWbUxJSuHwCYgkse8cQmUNxvVSJTAXgP2oKDL4",
  "key9": "3PioNhmNFejVHDoLM8zJsRYUqqSDfxnnNu9qLkCFpkfu3hB5arpgcxP19D9QUDNvcRwE7skmz183aXCBatTXVbao",
  "key10": "2dv7xNryddaXza8xENsA33v8nX2NTvXcZzM1pDcRigYixAANu8S9dVmGQw9ZibSmwi5aFtedrNf5HcZ2wrFfF1LU",
  "key11": "qzPcTaZqvYn5apcex9ByQyVVn9vouvz4GHr8ikPka66zMsMTEAJtqafUC7pZrS3gnna5m2tPCzchaLWnT4Hu7ps",
  "key12": "37ANNz9F48GbX8nV6hTjU9VDFTNzeBbnPCDfwM18s3BviiNvNr38gNfFqMwvdXDHqfbbQWRcZsUWcweyQiuo21tF",
  "key13": "4PC8x7QYF11RA4ovGj8HLcvLvMcPAjhWPbMgGYBtBkjEnmjtCM7gdf6yiugYACPp9UAGcm42mmSY2tNFdGFZXbJS",
  "key14": "5crmeV4Hsyvf5N2SCxFw4dyXLToSzYtXAX9t8qBeu6uTksLghpDuX3TCLjGwSrr3rKwyswn6Zok9Uu9fDjmiBKek",
  "key15": "4JvUw2m6am9NVPPQRSQaJzRUczUa5YGyfSwMsGaANtLkvbYnuzMQ4BwhBPLU1NMxmkzZvynhZiizfru8Dub5jjK",
  "key16": "3ggWfx6YioLVXAHoZYtLdQiEgc97H3Wqo1eLiRbqCY5YSHKdumJWxB2BcbmYB9GF5AfoDdGzZhqpVkMu1bBTyWin",
  "key17": "ZWT7zCZ81UpEk1EWqzSZTwPWjrzJsUbKy3952skXnsU5wbsfX1BSPo1fUPgDLVEQNRSk5NK8iyFr1ZuwvfuEsGb",
  "key18": "2LvjUrL68hvR7tsoKDDx3skmadAApAgXkTZ411jUE8WUKHEUm6jZ6G1apxMGg4GeWx5dDEqb9UNw3F7ZvFW17x7Z",
  "key19": "4DKGY2Seq55VRhiWEaF8FaMfAUGfbWmuAaWyqGbBNsd7rYyyqcnrXc9tR4wW49eEogN4WiUmwcqxbHzo4mvhSc8D",
  "key20": "5ake1s5Rm66grcqWcY1YiYdsiwWZErGnju9WRNZskmAeYuHqTJkcHqDyb51tQHm4tP8qq7HpvPijCUoR5J54C1Sd",
  "key21": "4XvY18sDyqQBKgcMYixwgG8E3YoUrSSBWfiDLo67NYbxK5oXtNEKBRj5tUefBMTYrQWLZ8PnshRzeAX5JGKywkxd",
  "key22": "62pgb4PaoWTandTvW8MonDjgzcGiKiLeAKj9gRX1sSwwmffRx7ZZTPs2fJfzZDkpLFuRLqjuP9QA15BBJtKBGXG8",
  "key23": "7Yu9dHyaPLkksgBQoeGe9gCMvmTargBrtFTAijwGzELJU6epovwafEDjZvJ52aKGc25PApR5EXpgS1VyimjWzvF",
  "key24": "41THpJBdDQeNdTMXn4XM8prDd61SquQw5Fy71i5RCDXZLBRiKnGwRQ5qNnfGMeZXkTGFCosrW4RwKgqTdtAwRpW3",
  "key25": "3yDtrooJc8nz3N2TsUdXfdAscqdujZYBiRfBWV6B2DGVjx15wo1tnNmBsvniKxt8K46sRPdJbVaBueyxR1o5A6nt",
  "key26": "25k2NsCtD5UMAucwpdJRqFDQSApJYMCHEAen9L6jgpTkVE4uwumV1pzbbjo1RNLBKKEuxoeprwgwqVyDRBf7owmg",
  "key27": "5Mp1Gy958J3GxBPeSx2C3EGS7vgvgY3SXAxMY6SyMnmKzbWK1ZYnGUtut9kJFQwDKC3wSEm5RwVP9c9Xgwh7KKCv",
  "key28": "2Ja6JmRyG6Zsg6KFN9uPHGDvEGmLZNJbmyn5mEunniuuJRXewc3hqQRaxd4Vm8QAv36LCG9Xv88js4peyKznDBBa",
  "key29": "obEsBKBNakgaYufstC3wywo1ChLu5mRRHd4iGd7eJaYXaYL6gBniZXVmWVd5gfbKBxgnLFPCMWbugPb1TzMhNXo",
  "key30": "3PntHvimcUMng8bn7boz54riA2LtQf5waANYm4kRhwPKN84WrtriVrLRAd6cEEnoubnPNWZ18pbHSWsx1EYYx7rv",
  "key31": "299262ELwRbiWnSuEXP7BzDxtUMuPK54D5QzSpYNf332tZgZCgjGgFNxkVJCfZiLaiG1Nk3FhS4pbeC8UpZmYa2X",
  "key32": "5tYk61EpCA6LqcDmXTYPtaLbHJKvL1pY9rpVC7EiVQHYy7xuNFC2GQR3HUuSTx78zc5wZRYMYKbSSap2Qtx7hZsv",
  "key33": "35Q9ww9TFEXPCaDi3wVwfCda1P5S39E7z9Rvx4zrs4fMLtT6TGFCQbAsgWZbUqJgfw4NZbz1pab6TduLb2rv8iVX",
  "key34": "XW7wyBwvYUfCj2Gy1zqBuHwztKp7cyjQFTwg3a9E5ZmbZPL2BadchNy8SRvNcRa4GFWyAbjUkMG1ht8W8VruGcy",
  "key35": "1uAySCm8ZBaZv2jwcqJDXaEPxevvzxUqSkCGcs416yyNH3PcC86hn9bVzL1gMv1M4hxaPLyAAifxvxsCRfKmSCd",
  "key36": "4oxdEcjFYmL4UiZfkLzm5SgpgLW6psWtmqHpRU3b7wsioMpYT2bsqHaTLuWGbbY2BVJMXvzzF2VSW68bBiJJ6bu3",
  "key37": "35gBSQhaB4GEuGaKaVZAcx9owiTzd7Y16uKqD6KNyfwXaRGGxsohE1E59vwt12pkBz2FKQTJJoiFdcBqLgtzCBUF",
  "key38": "2Tm2DAJ6dA2drJDRpMS27jnkFUzDPE6hm5oJVNhqG41JDuhDciQ5ZFzC9Jf1bZy1wdBsEkpscfjLE1WbXZiv8KuX"
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
