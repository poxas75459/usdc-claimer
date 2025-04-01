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
    "7aiR5PqffG8acB9y612Sc1kK7ex9vpdTMWFpdwvXdtmBGvsapz775N18HRz8HwWi2MpxaqM77HGRETUmCzMm6e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xydM4MX9W434RosDzv6hsrXnYGxwJeC556tzYjBWxkaLHDt6uG23t6Vjn1mPR8LU7yWjZwT6U5aAAp43fkCoVbq",
  "key1": "2hQZrEMv7jeumG67u16bhDadViiXsPzPibpU1HYWkPVtQvWcoPQVEPzaJFLZHf6BVCZsUrnJkVqTcEgsBNc2S15y",
  "key2": "5vadjY5N5dJv3hzXGxuaCBX5nCW251SqaM9mTLL26qG7nzpwq6F4SY1oHLcRSRWTQSGDYtSneA9BvPDzZWTFKEHC",
  "key3": "jxKqZF2v7tbRDXZfdRYY4J7uGJBv7isHFd8efw5BKE2UeAcBmmNyoqiDY1PrAPeb8LAkfgxdaFbiT9YHQXmsdsc",
  "key4": "4usFa3j8kmtao5U1VPeLo1vdoS5pF6EmTxuG8npapUn6FpdYyQMSsnUXEHZM4EvfSfCiXNKSNimiLiUM83dLEYXS",
  "key5": "2Pf9DaPSWYM5jYXdPvfy2pThfcFweb4gaqcktd6BgNxZ5hN34f3v8B2B3usRXyacju4RFf1Tkg7kRf3qqXGTH6n6",
  "key6": "2RDhrWmGLQaN1oyNJxoY4dWZfz1QwwKDqK6uNcGHUizD6AdhKxZ4xpY2RiMigVGGuAv97GMaimg7dL1iMcojm74o",
  "key7": "3AVv67283PNBZjVet5w6TZP7KrCzPPZDP7ZnDbpeiH5tsMfNFw5Wp6fJqavTYW12b1otnCpsFM62GRrqZWpsEZba",
  "key8": "4MQHt1dmB1TTt8yMk7RWfbi7FxrCTgsw52cem3jW6WEZh89tB5woZ1q2YAGhKKffqD1PrAdboHoZ3UQ1FuohbTkf",
  "key9": "5bDJwg3GJD6Jwegt3sdhVqZrvR1hvhNoi1R2W8P2Gt5kW88bjzz8SNHGi6rzRQ6bggo2tFYvxQES7Qe1PKcidc1C",
  "key10": "2w3xKsEK2q9mqDaefa5d7VQTjMMunMZMR3uJo4rDcZcEqmTYeNevmXgVT2fZRpJAk9dEmHC8gLoKNedrB95amGky",
  "key11": "3qeXrf8ifGbA5gqrPH2voPMkAJvwrr6katLcaG2NSsioSHVqN5Ufo6hdqQP1rcQUxQpx9NZvxgJtYpvrWA4EqCQR",
  "key12": "4GcrrSRGRVAntoEyTsoWNTwTeUb8VEAR3f4Z8wxWuZPoQeVsqa2W7MGBSpfurCoavMkfVV6MSterwWkFjVGMz7jy",
  "key13": "298J9b5aKcmcDQxsBS61vguKYvYWsEc3LDRgGdJcvbLjf3PDrRVPT9aJYJDiUUj9sjaZUHN5wUfTbbnvHWnudFvP",
  "key14": "2JkA4HziGfBpqH7dAwoidMWfyzzDoFSUH5PBSnFyoCETf3pNtTuyGq3g8myrWY2PFuJp3z4Qi3q1uT8KEy2SeJLS",
  "key15": "kJ7VE1QrjrL4DDVVAdh5mtxi5sWu1YbPDMLVGL5xqw37CcD34BCkaZ9CYrAKGJU5FHv9t9x28iJxBjpvNb1wwAS",
  "key16": "27frLns1ZJzdySe48CTsjgRkrt4SGbQdQjqDBA3yFaNKCEaDdjAoaFDLTTVpF7kcr4rDr3dCt8Hr7jDYyvNJHoK8",
  "key17": "CamghaqKePEPPBhKUUw9xKhr52s1mq12CVHyckqgFgsZVjQzxNJq9KfEEi3zSS9zxNRhaxb58vaJPWugRaYzZSL",
  "key18": "5aM1wsz1dFp4A3tZMUum9WaNogn6o2XXBFPcruPUAU8h6FV6MdF62tBhQ9w4rHUAsFZucmAP3NMBE6WnsvuJtxDy",
  "key19": "2wSUpUn1ZqUkqBNQwsfejdEnz4coCuKgBCFbnfwMB3X64WbytfhX8EXimZhdZuZt8kRHkGHT83nbyZbzXkxdbaao",
  "key20": "3AkHmMMaXLnCucGaBJHn9FpbiNDEDSgj8vYRokgBsfUsCeYB9XyL8Fa1bfQ9q2sichBt1thMkg21VK69CE6eAjkP",
  "key21": "39EkMvEKcVJAmbhvNBuSjQuBFXVUjkYMyLZPaaE7SoxYdQBxyhSypjkr6tk6TknnRJgDm1ytS8LtX2kq55vDYCE3",
  "key22": "2FGVuzrxyrMKXL9kBXUHDBgvrtWh7VuBTaruawijDs9rXGy4GD9S7hX8bvvyrfdykKTqFYmviuGXZDAmoCfcQKkp",
  "key23": "3odSUoDrjzBVWswrrEDwovrUiiAVyMfz4ms4DhoFeieopQig5YpWQBWmAbed93PrhADb8KDXNFhcBGd2Sq7PwQUM",
  "key24": "CaoCGaRYAWXXnfbJfo4MnybwD7A35uRMxKEi8TR5SwM4oDdupXz7wXM6WeeQ6Rbo59wUfhRDK9FdT6R44ZhpsDy",
  "key25": "jALCrHWkkV734x74tTB4kUfSijp21Qbt5WHQEYiFEtvUFtaSTPjb3PtSvjSsE7SMiNmcsLDXYTPFRRgwcMokj1k",
  "key26": "791Q9rkzXkykgQYv3qb21KiFdC1VdZVn7DGAoREmG6FPaJ9CAPdzfmeDUpyduTbLpRKBfkQFHxhr7LXQb7nNF3o",
  "key27": "5XLrmAFpspQmtsFmC4qrabTqb6FeZTjr719qTvQLiwFTHTMt9fViwV9GFxLXMJ3tAuZKui1i1f4NgQfSbhyrpKMG",
  "key28": "47udiyH91YoR6ianQ2hEYZz6RrrgaVxikXMABwZ1z8D3HThwP8G6aB4P7ckksR8bPfAtA8iwXKsR8HPQVXN25pbp",
  "key29": "2zoDHvqEF1h8suAGekvsJyHZ9WdPUYn5DcrHUJC7j9Sj65tBfLEbDwMCPCXSZD9ynGhUHGWfxDSyAj7Qpy6B5Gum"
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
