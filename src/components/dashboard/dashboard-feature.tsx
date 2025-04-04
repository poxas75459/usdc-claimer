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
    "bVbF8o8YBDDYKd5ZVRbLRWRSS4bCx56225zhe8DNaf9d1suEVZGkBNHeE2WtKjeA4iq5UUopLNyFYdZWpPeWLGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqAMFCFvrRdwuBf2JAKnqv5TspNf9cMv1f3Vtg7tfDzpwBtdtmqwfaXvRnvTgejMEBeznLiDSDTpF3q8XsJedgr",
  "key1": "2cAAD4RYos71MZFLLdPFQ4Xyj7Dfdk1uUYu9JKcfQ6fMfjwzS3HqhfCbMaaD1uxehF2gM8DSNfCnwafBHMGqi2b",
  "key2": "2ni3G3KKrsX1HjTfLYeHxZtHeH7b5psrANqV3E2ETgCQg5F4z1xBKc9JrXSPdsjTCGxupipHCLoMNHXkxPhb4BrM",
  "key3": "2oWKwWzt15kBaz9KCTiZdzdhFKV7MeS3wuSuStbRsxRK7pB1TiSsx8G9s2CD7BZvDYKaBrAYDJ1bmXFsjzDTYbKy",
  "key4": "4MtZzMJ9woiprPjV3m27ZW6p4nFMkF2MTCg8AgAuL8BqJJ3j8jhnPDdJ3HEa4m7pXNKj2zZ2AaobDUhuSxJRn7d1",
  "key5": "jQpj5rXKLti3yc75bMFH8R1RscrqNm3eDSt84mrqktPpKEyLxF6GpZu359xyEJyeBoc31iNtZhpD27ic2psnDti",
  "key6": "5YSc8iCDkDMgKaNFSTn2hQd1bskmw4TSM3M7PfpmTFZz2cJC7hR8GKq855DwSXCD9giAAmF5ohgWvczNJ3Wv7bLH",
  "key7": "5bZgqjZNyuth26WmyPP8JMbpmqKevosyeaKu5Jui2oJ3uX6tzDQ22VinxcHrkJNwV3pyDudbA8MDLEvrCazeNr8",
  "key8": "3Yccem4p16Phetf633PiYrmUsa1PRvXGYjs5sgCRwCAmk3XnxP6jQF5HzpMxScDyVip3EF7uyiQQkdc9TMo3ZcKV",
  "key9": "2UPsM9FYRViYPHUxTtLjwyiAGcoyPLEV7LbzGS9WN7t7W6HcZtKvntX9jDwrwUfNzrqPZZZtnfTTYNyVthVxwErd",
  "key10": "5V45cvMUXtySEBjrFx7NooW7NohYhUkJtwQBULnBTRcnrUePDVLqMAfzhfLyybKGSCRiPvpwUsnNnxA1U4YuaeMp",
  "key11": "4iLgwGK2ma98PapUqXp9oi6XsHokQrrJCpEPTiHAMgbkVGhZwbfV7Qnu9KmvemiJMntKow4ucturMirQhUT7XRq8",
  "key12": "5LqmiuTUd1c3QDPAyvrtbEe8RR7aRsorVAcdmA4HdVWGihdre9vXijgrhsRvbfRQDZk9hWhMygHMVvPp4t5jo93d",
  "key13": "3uKecDezCQaLVKmfpfLWhvYRVnh1bXL6SGrpqVtukjk2C1sAmUkfCSZecB8pHAPBuuyGbWr8NGx9xdniPfdNW4Jb",
  "key14": "65AfPGA1PsAsfBBZUtyrvP1RfrhrZ2xkZEe4zW8M7jBxSw2Z3H7G2DLaRitwnYZyixHEVNQgZdFSZEFoWYJZb9Gw",
  "key15": "9W13twoyruScEVqQ156AT5Aod8uZ83GcjCKbdXhhcSbmw8uMMPNTEYzALpFDdn8uLYtiMywd1AqhUAd9DkSpRFr",
  "key16": "hn98CwPJYkcNWs2ZzvFbJ1rPvXPPALrxVJ4W2Mz6F1a4tFBASaYnF3s8mrjNwSs47Axm1pGRSzwyXQpgt8PfZax",
  "key17": "3rVH3L3QCTeyAUDr5DXK6HeiKoTUa2PRCG9wvQ5uXs1S4Ro2GbFWzm5Arkrs7fLJxiNSmr7NpWtrZM6D9WcpHVmu",
  "key18": "4emSpgXwtbRqap8N9Qt2aqmiEVtyqUcXCFthDrW6aP1kzCWX1p2oTHihsoTkSqdSaSNZFmqgtjiMTa7NywNKji9N",
  "key19": "5KKtApGYMeG5xHd83upD6jpSEsurHp9TWBtJxyYGCXSvoAb2dKyiZ3qqxinaW2rXqyKc8aHLdv4gpxohkPHVB7hW",
  "key20": "grdqZEbtzwVda1Kgb687AqnKJ2eTEHmjB5i25zqULLuwsNgUuvkTFr4BNgYmV66uqwCQ5oxhqwyXeCQNhBkFh4M",
  "key21": "3GNMUPaELvtTBGEuTixXiAt4rbTYNgCdzoDJM1PJHGa4AAKwNKn5nVVfht9AurUdRjV5wdohoMseqehPDZWcBmAn",
  "key22": "2AV2bZzcHS1ocfEvaLBE5Dndq2gyjfnGjgY6NamJ8afoZXqG4THXreTL8iCxi4UBzkrGabcXrqq6C7mGYWkPEkSW",
  "key23": "2uzPeM1TSJDNz2qyUyMAHpn9J7ER93mMntGx65JzScvSxfCgKVJ5C7DqgVndWLKNd822xZdyXHSBGx2BNAYhadRa",
  "key24": "2JzskwN8YR5prWrKy1aGwCJFJvp5JPbT4yugSm9L598FN4EX7jtxZVApjhKw3iWJBTLhA94vFgGrP1vNKaCP6Xxy",
  "key25": "3jdHxF9tYzJ5kvNC343cvowYNieU1tkLiJkHdUUQYXvp2Tq7FM7xzfntMCBC1VrFjhgYN5QiM5SXx1raWLzi5ggn",
  "key26": "51jGtStw7zsFxDy8qLFvV14EW8F7pNGSZKtwAjYbCJHsisAguFk3W5Upoe4uHw2YeCMQCr8MmgfWbmfBNkALkQam",
  "key27": "fNLk8T4ZgH9xmrZQknjwrg9VwABAn7DioAPPtoL4xn5wFXtiwSyJS1RBHX4C6fsB4bo3h27kDqdcTMyPfCYVbEf",
  "key28": "3GemSJZDX39hgjRDrwfVQswrTsiBqrNqiW5CM14NA2DoW6mXyijJUJ1bfCnNBQFsMscrkAxdZfNtUG6kJhCTPhug",
  "key29": "3Cgat6ycAtYBcJFops73N3Hy6KzJqipZPYcwVg6PsxcHNiGzGN9soUWSzvquE5VnopyXPgn9KE45NBdqzK9KryRd",
  "key30": "3uhi4xvLRupaHSjiV9Eueec848ioG9yH9BgviCpCx9X49GNqHdR9KJXBLePYRRuGZM61TKBJUtyAX7cvgfYjfCYx",
  "key31": "CDmB4gbMjVPUY4qYMZJjYWhj29x929ikftaqz164LFHS7yd4uE4S47G4Qb5H76qNxZg489kirN39TfgtmoqyE4b",
  "key32": "61mVMxpbqJL2kkN357N5Fi7YsnyUbmU5MeEabqVvEbSUtQA4YocE9feA6fQS4Gp6rg1JPQhkKXzvHPF5gJRh6trU",
  "key33": "5N7c4UfBgKTWnXnoKTiTzMa8X4SdtUWR5Uo5qrTWbdYNZr7Hjb8dsf2htqrCrfjF1Yk3dBwqW51QPYRahVyKoA4r",
  "key34": "2XjKPb75ExDKQTUXT2B75KYAvxNfMw6KXte8qA4AchenRR4a2qaGqp4rtnSXBVpUqbtMHXh7nXuthypCZ6taC1ky",
  "key35": "44ix2DYX5DESewwTjAWhHGkPorRhBZdLHopanvsvX86awQ3hnRJFNc4L6EU9gJg7T1X7M4QvHLNU9eQgsWSxFH3g",
  "key36": "48eKB3ZV8YaeJPPdDikhMSbBa9REvG5WtdMYhmGVBoruvvEueFBkXp4jufXaKXNnaYx1YxNgCkiEp3nyH78t8D2d",
  "key37": "zUQntsAeeWCXK7YEbxc68FPSbfqfkERd62mnJsCGWzAnmezNcp1RMAQzJdSKmQGc7oqakt2NLiWP9kPCMSuSwno",
  "key38": "5wTSeafBAuBZpdTVpVtvgHQRrQD5XGYozCfofHUqKrA5ZNu1HNKZGRD525uiFrjMPMBFNDTdic7AjV9Ro66HLoEH",
  "key39": "3m52MvAx76p9d1ESNn31LZTxRDSHDU2582Zj8hvQ2xUKpEL2NLTenNKzyYRrCwLNaJAuMQz6R7q1MorJS5DqAdJV",
  "key40": "2A6so6iEKGnKd4sLE7ZZN11bxNiHfAxSUv7oWs3NgGdR5bMGY7mGycmcMcRGWDDXnafaxsxLBnAcwWUuNuSbabwd",
  "key41": "MN9RMg4Ph3UPAmn4VsPzzMMbwRNfMzaxwx8jHb8EHoFqBLduqGAuWFBsonCjN4m4WfaRe25UVQXRsot2pw5LWUJ",
  "key42": "55YjTZdk4e9MhKN3jLSe1mz7mDDTH2rn2dRuj791rp9VDr1xp25HSJ2qhQPtmneGrw3fbpEy1LknFwuhjAYwqbjP"
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
