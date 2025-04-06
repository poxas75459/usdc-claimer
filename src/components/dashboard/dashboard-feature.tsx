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
    "2E18e8aNrpcwWSiqZeWjRWW2NrLEHuN7k7E6PdvfhJ9RkLPLa5LRqpsbkE44bR4tmMZv12X75oiqL2ZZjrkj7H27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HSDfMNn93hm9WrXnTUCnMVATgcN7o1WyNt842MGzh84C9cfNkV3Kqjcy5QiDSqyjbssWpJ8csnWosGbdXLnrcLm",
  "key1": "4UPZepx6sMbsmxWZ4dpvRDekFu6k3swFsCr7qgqrJtBjbfZmVwfJkvZJHqfoTtVC3VKGUXKjryyaMXrFqabCy9Rf",
  "key2": "5ZMEXJVZF7UPDDXfhXhqhtpoVdtihf2mYTeyEhT7YaByGQfVhL6P2mFfKR6HgpB2agSHSsSX26tqqbJQ9p4hjcH7",
  "key3": "2k5mFUCDmkGyJGyWVY9yaFisyDuSNKZia5bpNYPV5NqVTEREyL8bt5FAM9H8Gs28qPHVxyBHH3crgC9q1hTw2F79",
  "key4": "GKxencyw2DDq4pnNzDVYyjy8tFLzsPWBERdqUitfvKpLhRuEA3Lb7y9fWyzrkyKvK2x5LWXW2STFUCcCiZ3JLMd",
  "key5": "639wCRZhzVpbSm5GE9TWQbwXoTnDQSG45u76LFnMGFZzowjzpXCud2uPQcm1GgkBVaYjzA4UHpbu3yK7QfoQJ3WQ",
  "key6": "3ArHZxF3BTSDkGvsw5rjrdTsefFpzsMQKvP2rm6vCfhnRVRfmp4oRH3uC5MrtAVHgjQ8odp5RgZWmfSyw6b3ZNdm",
  "key7": "3JfEfCHH8huokv89u63uYLWPgdodcpbNx7uxEcdeqLQnFWTBubkFJTNwFEMzz1czbmozvV33NUBEJtH7qM3wj9vc",
  "key8": "4EYoZuoPgVTXpYGLALKs3Jobto7y27ev5bBT3QX46gq7yXPheAMxmM1mcpyv5FXKKUz8fB8kdX78Lptpqi4MphCN",
  "key9": "axzptcLB1Bih5GKDRZPATMweeCtM8UpM1oBwCeCzAr9PFs8HmVWnc4VwApDQQVMySmyWeLT3R7G19RJiyp4oikS",
  "key10": "5cqNQJ8tMyGgKAtQQHNsgxnofxC7B8dMnWNsf93feM5ce3cSkgU1eDvng39TQD6Ygv1g5ExcusiG4R2dhRVWmhs5",
  "key11": "5H2GAxj72ybQSqkvBJN74YTSfhBmRNYDmFjiNot6ihkU6qrK4DewGSsdnYK8j3DzcD19TCASSaLHUtQfryGN4Pm7",
  "key12": "5auQfjPfnBG4FLEGoKZdLseXGhEH9g3jqmY8CsqqHzEb7kvuRCyuu2uoWJZnXFxHTdskxejmRbPCf4g7EtfyktYa",
  "key13": "42NKPBQfx9XHgkBJqq6Sn1RXWk6R6zvVNLUt3to3UvCA1hzxj9hxze7X6ao14L47kSLNrwAxuQhao4UTUeZbFwUr",
  "key14": "5qk2kziLxGoa77sNsKfdSJwvqM2rjB8ZD9yRb3Y62B8a4efyj9KSKmHDNP7GqaQgsT83zEVKsY3FEi753gpk1ExE",
  "key15": "45zRKod1u69mqHwaXazvqQgrqhLxVBamhQdT4KhzHWyZtKjWzDXhBvaAc6tikYJPopd1ZtUAnCHheYE27CiiCUm4",
  "key16": "2LFB4o8QiEEjVaovVoyoDVGoT1EfUNz5Sb4vT9s9ys3ysc3ygL5hTi83Zx6FALhooJKzhcgMKJT9MrauYyx5FZGU",
  "key17": "2f7iVvpMbeCsgYxY4Kuf3gBHceeMzG7zQwfDxGDA7n5kBRkJPaa4J4mgbiUFPLkLs2A9UVCTrXUxpcGSivFqNxF2",
  "key18": "28zoHu3E7Kq4azwKEAJK3Usbz1nt8HfhCSWtGG7KcvMEM7sKH2iFyUxtt8wjxq8bYkT2j2p7rZt4DjEtaSuwoGdQ",
  "key19": "3cTLwdn9VULocphFjiRvw3USebm2YAFCdXEwviyCBC2pqDueoStqXj9PPwJCpWJYgdxFTJbFRmrAWmmZghc3yGQU",
  "key20": "2DQWyx8bqqyZ6tyqDLCi69UpZoNk91Mr85mKuycchBGww6uqsTRHninS7JCEcvVZC97zeBAqqqB9c5q4VfHShJLX",
  "key21": "2AxaqTriqpt6bTDEXKqpjb7jwmhX9HgtHFS4gMS9aHTnbyhPbUz3TnaEh5HtgDrLiAtnyzwJnvYomiL7MG55R43",
  "key22": "5fem4zrYUUkS9fQjCqf1Xy6V649sTE4nDmu3uQrmdu6u1YUYW8d9gZPLDu6kovamWK1oh6JzpeAUf7RfXiDVAvKV",
  "key23": "PEp7Ac8iQxczVX2XQ2m8PnZn4it1Tw61GZe4nqLQJGMQWjNqUK7uDc3X6LT6oQGwcAQW2YQc8s3hCcEjthrhPXN",
  "key24": "dMxbn6rubx4FR1Ja8dnpbpZvbijECvV3YUAdtf3mWdHgfkcxEKxBnHJzcoDpa28BEKPaQRLqWLENvNopohMQGoR",
  "key25": "2UbFBUcMEcPfgCykBFePUnM33hzU6BKE6svdfuZwuennFtCfJFHRWemA3kyHgWUAWG9EbY2HJ6Jw3DETnmpv8Pnf",
  "key26": "2tNtSDXcweYppEkeHArSR1hk7AnX87BAyLWsmAzAFVNSFEMBgvtz3ZCP3rnQybU2fHzTMCuQ62c8xTEStkNwZL2Q",
  "key27": "3gAUZkxAodw4BCemwjJgX3bbHCKcyLzJ2E77wNepavxQNxkaeaDK3AZMEBgySY2Ab1gpFdsZPTjAh2xMSsLYZ9WG",
  "key28": "2G19dREPkSP2CZF99eVxMnoBTwVXeYCVvcaeWwAQSdaTUt4Uqu2p6Dv5dwkARvMp43hB3MhjVEHEwhsJuS2k8d5U",
  "key29": "2z3pqdNg5cr1KEjwuWnX4fgsyKDQkpSgsh7VtDLBYt2HE9WjYrsBnFWbk3YHQChkT7K1i2EUQFS1VkM7WJmy5qQY",
  "key30": "3UB8MdPDMUHen4i9SrxtQmW5ohK5pqFeGUGnixW6ezWRyvvXQaQQ7vP56K3La2LaJYuvNvzHvVCN5zw2goJX7ANB",
  "key31": "2jNkHodJeHiVNtQuoohY8xNVNTSQL3r8oyZve7BShr85T3pbk6RaPKZXobF16yAC7TQ36XJS7PK5iH3AGg4pBPPA",
  "key32": "36bPTcZ2wvqY2NPZLBD7YDd6pHJsTgSLc6HE77HJof9hbzYaHKq9f94ix7ykc2sT2tSUcaZ8bk2DPaHvVKVwavTi",
  "key33": "5JZRFerT3jAQqq2rB4m7rYtyjfAV6pQYJDunAMffmdPtgSeUHobqbAU5MuuisUrCYANXv4x46HZSLcUTZWZf7vmM",
  "key34": "ZSG83s2fgK8TAbdKFuwY55EMHoivunxi3VMhQ5PRiYZyDbdSP3rth2U6xKue6c4JEoRvXdKQWdSqudszyk1FQu1",
  "key35": "4Q7SAQkFVsTfLuzJ4oMg26GLBBjachyk98CuhFca4JhgTo9PTD1K7rD1LhgFmEyYqeKAayg8o2QDWuD24aFDta9N",
  "key36": "3GUSYwdNzCVv5kbmD6FLZKrCxrVGC2qfrB6sRJBGx4wiMrWx1bNKtwtPBgn84a7JVjmt2mD4jCUSWG32WYd6uPwy"
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
