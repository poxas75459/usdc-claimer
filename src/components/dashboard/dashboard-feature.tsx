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
    "3J234j8R1Gx7K1txqPeo46pFhqjUDw2a48FQUq3dU9aNR6L5kdVpazhapC2STYw7sP4cTo3VUHkfzm5wdwcLj38B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54kyreFriGtPN1NGQQ6jyB7HcPS3Zes3Z3EayDLgVZdMiJA43Us4eTxhhASSbTWiJqsteQvYfoqAssVq6aucaqEQ",
  "key1": "DBLEe5BHF9HHTN1UA4cy4SCAA9vJdnojuwYVe855SE8PcAkCBJEEtFEZPujrLVDubovxU8Z29HRKfkzgtR1czba",
  "key2": "3VcF5Ctfu8ztBXeK2h6beU9uF8HFZFacaLpzUMS6oGEvEeYM1Hfvct9hZfkLSp66fT6GBKChedpzJFJitVt2DNTE",
  "key3": "2uSrFQ2UkvQAJ42nPCY9gUXDY11rSq5qreYEAUw3B4HFjDUMjT71nAhTa4FJ2RN12DuQvzRBFRPmT7NNWQQjt1md",
  "key4": "4x7Z9dGXu7fJVQjMDmV4WfraZcdvcRsKGMTRmHWEZnxHPSK1ypASt2ntDx6t8NiCshHwKpqctQUkpLHfAuXguUUq",
  "key5": "3uckr2xriqGfV7N48syR8Ny1rh7RJpciZhnpGn5PKXTCjUvFho7SxSDYFxJUYKASiQn1wi4Mfiid2uUwXtYeFAwM",
  "key6": "3yst7vV1mLxvMv7z3sZx8GTbHuHYzXLBohWP9ucdbXKHhQKuijuviJQfwsgj1b3Mybw8vS5y2fbypEaqisiFWFK",
  "key7": "2Ua5Mt4CXhbdEWmjaiUj65MryeVnX2hTkGyUhSvjyXo5jM5k6WpVo6QmXVJzGPJwECUiP93fSJdXRV2MM49de9EZ",
  "key8": "N6sMMUtz82A7WZUAtBC3Kxs8ttwWLJQEhK9KGiPPzrjh3Ss7AsJctNpUnZyJ8pzsZiyd2WSnjpy1THaMgM9AQzk",
  "key9": "3rtQ2c8g6f8cpWh4snBpCiEbV4H1Gy1vireqbCn78vDXyAqpXwNpuWMs6ghc7xWfYmFnoHeWLvpCJbhhSzbvna4B",
  "key10": "3ShtjyVfy3zVWdJceEnjvrcvFM4wjFrUi6146cxaC3Fah7fKVtveUx7Me7pbehwrjpp7VVUoT1LAb9VZBsY6qZCY",
  "key11": "3vyStU9aj1bf1xWhfcDsMMZ15mu3xq5AJgNhZFbhm4oLq6XzMwrJAnsN1CVJbeBZFke8tW1ShLgCKDjfkaUgz1hj",
  "key12": "4GHAwpNfLBbxqn1tpE1ikMzyS9zKKLEKV6zgFYiPu4N8TDKj9futq42xGJV5aWnn63ZvLuimopTWRmqXiJpqVRKq",
  "key13": "2nrphTtPhp4noPN36rxinSu62fCV6LiUTRJccK3oEuSFvm8TWX3raAmd6yX4mSaScCmcfjeNQ88g7LWxWKFvMUdq",
  "key14": "4qkuvCxn431f2nMuDk25eckqDbUWAPvQy2vTwpei98YcMnnHiSsQtmJbiUBpCbR4yUfRuJukiEtYrRVzhZbMgDpH",
  "key15": "4x9GV98ByEqW4HDFiy3cB9JtFExcx3es2izaBXDfdxzqiwRTxgM6jPeiC3gXgkURsFUq2G5AFoPxiUHBqZDGfH4B",
  "key16": "XYHnfWt8sPVwNjubJuH24W4SMWHecoCUhxFZ6B3kqQw9YHj3iWNcYTpfizwJfYfmtaFC58zWRfvrtRrZh2qQmT9",
  "key17": "5tjdrgWNKeME32M3JZjsD6abhqg8TXknY6SdKDJHpuwm7jxerPEaHjpM8vZ4Zeh8SErGwQRbQjm9KBUvtEFPgZVN",
  "key18": "5ydQZtUQUwdqbvFovFyRwQoxuLT2u6meYbdHVKQwDaSqcRZnuGX8ui5vfTsZyoSx86c1zvVzuCo67tLUhoW693TH",
  "key19": "667seKUjgTYpUNgE1kes3GKAE2E9oR32tTMmSXwwjXehuxH4KWuKdRVvXkoGxfMBXwgs6z71F2zWbpf7tKy4AqBa",
  "key20": "r2p2DrhLx1fgQ6cD5vQCFc94NYzKDq7vSQxhg51j3Hy6BuhrdXUYA1Q8VXxH5yoruaaf7uCEVgiGpuViiGVMxF6",
  "key21": "3t4WpTNUER9C4g3pY2hv9zkrgrwNAByHvCxYv8ahPN7YRSAFXtBKdEdpkzhbJbsef9od6t6Yxpni6DT2po3GNcEJ",
  "key22": "DEuBVQbEX6a7WCSABfvWPxpdwB9Rad6ys63N73f4LqKG26hcLsMMVSC8CzRrgNY1QutvF3gNFYpHDLoHw79veiw",
  "key23": "5J8w3mioexysAdji5dXQD1tJ3bL9k8AXkwdkF9pkDq6aDQ3dRQ8KtjFhst3X2mGGjpyRPUMWb2iLiQNgRFNsrJLD",
  "key24": "3tsjNrdvg8c3v6ssEkk8RUUMNPAQ5x8v6Jz4e5ohfXLtdV2HsERdoME9qPib6Zq1mrrpkMb9PSK7bFP4FSuCudVr",
  "key25": "4oShxYrtNgfiRQAjutkprKNqsBqCKXGzGvuf79z3LdQZ65hV74cVj2XCGAhfTNfaPGKT8WrzepRFdi8BYrAZ1EVT",
  "key26": "2F4tzYkGHrL1CGu7RUoZqaVErycSJUwgjV2ArLW9gitPGUfNff1WEiWmbGjuFiHowfxdppUn1qyiWi5XBYZJjsZS",
  "key27": "5vnMstLVNmSYg6MB6aBHdgAMeYpE7BwBjRNj8pBQJ4wXQgb8EZDN9R69Qd9jbkPNQwzeyc7KvRjoaEz6E4y3KBNQ",
  "key28": "2cjUzwGYDmaqK7RSSe4cZfgELoE2xgMJxSp9pF6CLjpNQhk367p3aHYei6FU6EZYdwZLENwaNAhDmSH48p3Nx2o5",
  "key29": "2YJHMWeTCMHpoj7d1A6gtffwSHMqpntkU6Z56KzGUmU2oKZLNmGHfWbFpBUjW3BEf4cVeDCeSYTPcLPZJdJkZpZ3",
  "key30": "2oFL4engur8ejMUu81oWcoPQhb6xQxLXmYZ5aWMMe2Q63VJjLyHNtKndwDKuGofPRhWsPRWefuPF5fFqh7Kk8kH",
  "key31": "QCu9odhgmh49my63n5LWJgo4S217c9UuoXT3L85QoTzd7LkvjaqxjrUg4v1WKaDbaU1s7X8Gy6cVo4rVxPtnEmB",
  "key32": "3gDhwVKzc7Q819nHBi6ZTSESjmE5BZGhm4eizticvePbCQ9zDRQB6Tj8MoWsZ5qJ3SKodDxCTnbRhiQ2gQTk19Ec",
  "key33": "3zZAv37tvu5LZKggSyob9SSNrtTCgJCcNKgVpQ51hC3kha9CdD3p5i3Kxb9ST4eKBQqhUbtCLZS3HMpGpZKmipM8",
  "key34": "5hcjufZR8Jpfm1LZuAAru3MVCWD3FwVLhX1uJL7HRtYqEjL1XjCFjowtK4uLZXLphczFQfqeo7GVPepXdGMFYuDz",
  "key35": "4KKPAEeXPSjWn9Kf9tXqCEHkKAy26XrXXF2N89qHFavAvthky4JBkt9Fu6eqFytZgeGoVy1E5WiFSVCm8vAFenGH",
  "key36": "MFhAChqL3MAiSB6BGMj7pgTmFaijLoUVfGek62GjT1ShsYLsWbztkrnYPcUuucp1kyRnaxRSRmS2xuJHY6Kb7bR",
  "key37": "2L79AymVES5GuVdv3mpz4hmResyro3G8EU5c5AHkPsRY37Wp1hRUZZvUEn1VCwZVAZPXz6J59PjiAGpsFoBHtjxL",
  "key38": "61cGobMghAqokbRF7fJVKDzgEyu4i13AixkDidekENyfqN4LYrPCz5rCVxPJg8ff7nTmssj1SZKe3ASbet42Fgca",
  "key39": "3Y1uuwVSmHgnDgjYUCv4j61YREb4MgJmLrYbjyFr7Z5HhyAW2wvysyMAaUUe9Ku1uHHFiyBKHtGcPBt6XFPMWaNY"
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
