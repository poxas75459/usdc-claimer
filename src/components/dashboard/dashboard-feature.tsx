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
    "3bU1MKcTNXoPfFHzjfzp7f5kG35Q7KXcD2v22kNDw1xThcUetf341bUVed1BuDjAmZcwQRaknxXyAznpNpPFwzbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHSd21gS5oD16b7DijYtRXsndDqBgAEXb2QkGkPqRDnMQgMuZ8adr2d8RzCj35kqnYN36gPcCnVakzwZXq9nRRC",
  "key1": "2ix3Tr7kXoFg2h38N2Z69NDFDi1sCaE28CuC2z1cS2KAq2XMUpCSibjwRvn3vhiy86KTRVpa6QqW4EooA1L5pyGr",
  "key2": "3e4q6whahNey7xL1kV98swzLy35jYqNkDedeVWHxCyr6nroyPLkCWbL8z1ErJ6PM1LTsjfVNFnspk9Y78ZspT5Gy",
  "key3": "5mw5uySWTgFYJ3aavJLgkJWdc4qX38UBGN69Nrz12bBP4bff7sdo4pSc9vFh9mfUtELrjW8WejHi61P1nkGvXwkx",
  "key4": "4yKtLWLuTFYsdtA5pUTwxJ3qUr5bdEJ6ruT4hPQH3KbQd73w2GdacaRgd16cvBE7AGcRvDYik1mcDSNYaN7kZcWB",
  "key5": "56LSKEwPZEgSd5AXWPxqyWQvhoonzRRzD4eVvhv4huvhKugkDTXu8dmQumJs4hA1TuEaC2ZHjBSuMSv4asSkidFh",
  "key6": "4XXe6FPjNi7mUcy2A8BHCpxZqRwn3jmHjx1prCJZboY6mAJ6ombxndfn4vNkBCTovpQ3hGN7DqUu4HydBrNrjLsK",
  "key7": "5pM7uCfR5odKDDPMP4cvW515Jmmhade27eAQ2maJY71oDhDJskxG7cozCr6vRAcupHvUTGTZX8gLewdu6hJtPnnr",
  "key8": "SWeFsQKPQ9SgYgbdXKNy17gKKozLSP6Q4d55wA4jNHGutu4ToBK3AUWxYhEWscxP9gTk5EcgoF3HavsGNoacdFC",
  "key9": "3vAqog965GXsgRSLwXbTA5yAcm6K8Ea9732V3gMSKj4t111LUdiyV7eAqPSRBfjUHosuCSgiSXjGHV5m8CwMjV5i",
  "key10": "4vWf5e6CkNifLtYi6XyyW3AZVSKdb5Qhr51FzR9TJcQB3JRdJVx9esg3QAU4CYJK2rX7JwxtMLyE2xf66sxaYTrZ",
  "key11": "3kn92NtxCyNkzsDTkH4v3bvGqiHpTsqopK7udjiRGDnF75QQYVfSTW1qj1F8AeQaQHFLYD3Ajnb89sfaksUt9cFr",
  "key12": "2zDrzgRUSY2a8SCZrhrfapzSHdocB7aBaihFnNPi8nvFkjrGmX42cyoSGLe5xuVTuZphMZpB48nhitYMQ3KPvk7U",
  "key13": "HQCYGkZmjVZzr4vaFvRuvo34mewWunJ6jF34bLdUioSgbtJSLP596GReH9UASKSbWgUdbvUDBtKWVKpPsJaQJsi",
  "key14": "StPnpREYTjFDEqCSu1CugZ4hFxtgxVa5Ex6AQU7TRbhcyc9yPTGZfRcc283EeS7YAPD4johhmj3FwEcHbdFY4qk",
  "key15": "5v2bv2v2b1EHFJMgXrJ12RKCNaXgZhVtBdVWyCtgaX5iPW7sJr5MqJrjVZbkYQwy8Lv5Pg16o7ATTLTkUfa9Zqe6",
  "key16": "546fJNUn4j4XkJAcb5BU1rExs92n3zg6WkLTi6hizXKG4wbNAWcPDKEfKGEKvVmgqQcyovPVhDdeH7ws8aqzCRML",
  "key17": "2JoAqb38vjTnWAGwHLUL1xX2CNDhfLg783hm2zcuJpvQCTAfTthx4C5FtzEc5DcKorDUz3DgKURjzGfH4seWDyQL",
  "key18": "m2R2JJQvwAG5j9c1fxFYDLP9RkvNQtUJ7arhkMMLWdfC1h2kcXW2Ri8HJ3jYhK89f97cJWYjEAoYQtdkk6pC9P3",
  "key19": "pAd8HXER7X9fzWgDTXK8CpYdeGn9ysmp5PUiaMkjuDfTToSHskP3ziJxLgByGYRzfDNpgGpzLeMsDobUmz7T8LJ",
  "key20": "2k8Vu6YFyzuRHrYv5ZBwJujxhwtWPFk9wosqQHqYqLKwNi83KdsZzBjTkmEzrvtNSFc6cmEWZSV1KoBpFkJPsQak",
  "key21": "5p5VvjsaYTmgtazb8yPuBHMJqnsja6aKKrad3p6a7eDv3Skc7NDsL7ZFoeTWDyAPebSBDr4tLZzqfWxXg1FbiWjm",
  "key22": "5CzYwz92jce9ayE7CL4xDf1AWVa2TUrLSFA2qkFNCPt2fE2YWUeuQ4qZJdUXaxqJYTESWjJcaBpVujQr2a63sXBM",
  "key23": "4A8iC1Lspc6kbF1vQAS7BS37kCeabXZjV6tk5f3WSEvHYLHTvnFZAr2qyHFg4SHqNZd4RdeUUkhNeFBjLZVqjk7F",
  "key24": "5xHyt4FFK8HmcysXuYieHn46s48N1BK13JWd1EyzvRLR3hd1vQu5XdxzNNfgr37XSvVnp9A47Q17hC7NCnph2or8",
  "key25": "4G6Em3WGNKDPnXfEdqC29gS8CTQmrC6kgVDQLw4HTLz7sHqCAgtrMegxK2mUc3xswBmGswchGGi8yTRzX5Gb81sy",
  "key26": "24guLYCKEW5wCcUdBiC7MqN3CrXNME6prKiTUJ7zbpjYKW9RxhyhNPc7AiWMteED7coKKDYaT3zEBoJNRG8nM1fi",
  "key27": "5kcyLzuPChafkFt2RL83kXxfyx9BKLMH1MveFSqCfr8Kej7MUcvXFQ5Ahmt42DxFZTVopcJ6esHQiQ6xhzBBZeE5",
  "key28": "5wH7otSqQtKaBKbmc1dBXsWHyRKwLfemj7TGe5rku4swD4EA4qn1H3wqugTCA7ipn2ZA3CgcV5fy6Bkc2nc8WZo7",
  "key29": "TvbE7cbuBSHTFyxCQG3BvBAvUcAVTDcQMRTK5MVhu23uyJpKYcsiHCihNiCMz2Segxg576hKZsqhWeNsuM9rxKZ",
  "key30": "52PghyVuJkR38AxGM64UwG6M24eUTQ1oK3LpRjRzZb7gLUfK2cH1JByibJZ5oNi1oTTJW1C74i7wkSKTeRFba2rZ",
  "key31": "mCbX8k3awT1tkLVMttx6o97eud7dShsTBm7szU3HoQMrcNM8gdv7XYDG9go4QgsG9BrFgKUKBSPQgzmrmSajn3g",
  "key32": "4RTSk4yCqArobcBmzwbhduyzNgcedfPijeGKtNujr9BN2DSHkt8xj4NF5Yuq73xHDj1JTxiwwsndkZ5BNQm9175r",
  "key33": "3FDeoYx1KN6b5n7pFARLvKag7Cwy68te5Mm94swxiTnhn1jt8nb4HSkoXbTkDGR75GBrQdgpCGqv77HJb298yCRU",
  "key34": "4roBxssHRQQiSzWACmFEVHMTFuvyVwzAQeQj9P4oofkaNXZihaf6uDQfvroRoVDnrSwzdjeHA5X9rqV6BoSZM24V",
  "key35": "42XBBixpdXhPntny7mkS3JeatKgmRBUARW1EejhxHSwzb4qW4ikWax7QPmh2vSBCS5YioFGH7ePToLTCqUrgtsre",
  "key36": "4aNr1JkQNZ8kS18YSFmjH7cw2H8DtvkPgneeDPAPPBbRmMK1DuJygWQCRj7QqM9vFyYnvUEEQEak7RyeiEuWomip"
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
