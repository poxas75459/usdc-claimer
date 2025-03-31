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
    "2WfqTQbzN795qVKJ7XGzUeUmo7TtpC3KNtJZpWS1JMJRM834vRh5eTsmm3anoe4aAz4f6LNL7JYG62fuLbREaz8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NdMfPZ1N2dugUD2XgyNQApqtjCLAdD61BXaDHKV2zyn1aDxM1t9xQvuEsFbfXCf1FHDf54aJiR8JsvEQM276YGg",
  "key1": "5FGv3SRizLdNdALHDihqxrRX9HeJP83cxQ9GPbXs6p1KEeDuKvpSuhRca5RorQtVRnhPAJ3B1TV9Jw5nvzeDU8p9",
  "key2": "3k2SyfQ77gTfYMs3c6UyTVPW27JWEReHL7LFbQDs79oZ5EtPgiY7svrVGfwF2KfDax4ktCGqbLSNMY5rgkgyCGGB",
  "key3": "pRDfnrbNxUx8Y8xtqEDFtjSBTkXsgu42poyy3haHmQGSrPaemeKCudAf7k7AocBkXUXno55VPoWcKoacv3zxQxi",
  "key4": "2sdkmseKfwRVYLYpcFDu5kk9FWv3fFgj9N9ta53rDjFQUGUaxEuDY54LYZx2dxVVprQvjpmDdu8VduSxXdHJYuS2",
  "key5": "3oq8jXvfeXVdaZi9SoqruGpu42spthhhXDmGaaxyXiPiiXY6qhqVcK2t6Q4AgYXws4ykuNiV1psEM7AzThUpsRxV",
  "key6": "34pzdicACohJC7KFthxAH4BWAnzougR8LHV1auKS8XquMxXWdzZRervve57ex4RBy28gmwEkmkeXppsuvWyK9Fx",
  "key7": "2XrRgE83b8V5p58BnmJmdsAzDGx2Wyd4TMXLwBmj7YhKPEEXaNTbfK8Xq6LAFfgZw9U5NBjpXsNERDB7mUb51RQ7",
  "key8": "3bbnyowei4cCUeQg8k6FdUHJJ7AN9YkWBs6EQ5UNhb1dmmW8eosrdzpvxivB6vcq6XRXybcg3jv9TK8cqxuQ8LL5",
  "key9": "Dups9L6bBLhH2NRzQb9Q938QXXbmbibyS2VBGLkadCCxHZhwaBwQ5tDVZ5f4RLddNQUG7JrTF4aHBeCGBvtZQmx",
  "key10": "5sEb4PwZjCsdcVXHKYsrVYNRbgy1SAHNtNPadVZHvxgwG7NWiLzugsXTqVxcmxeSynHX7Pp74J2sKPaJCs3JCBhN",
  "key11": "3CNUrbX1Gfj8Aw5xoRJR8a7QcfbLcYn7aksFtSCiZmUuzUVY3WQNdTaS3Wsw7gvUhJUSZxe7aXhAM4weeFuyPSy5",
  "key12": "5y9HBDaZLgNqs1wVT3xFYRmUgK1v2EhtkPGtbNKs2Xewq7rLfyGXmm3gtVgcLQdUX58VakREskeEZyNykX8NkrfF",
  "key13": "2Ee3YQ5wFqEMmp2MBcrCtYmR4wE6evoQuX5GfrkM3UwKp8FqwPfMFr2KoADM8VuM5jQd82yP1dZhsKqh6Lz9hXcZ",
  "key14": "33ybsxMhRAPD4f19ePiFoAh1rRZXGXu5ZgCwmZVYga2DhNZT8VMJSzsxHZQpNqSC1XxDrNk82cD53eqTPjTz4Szh",
  "key15": "42hyx6weKxzVownQbYWQBFwgG6yVgiN5uKxcJxaesqzrmZin2jnuwbbRDfD1FB2dNAjga5j5nDer3A2egAKLzrDS",
  "key16": "4PoekkbJ1WZVkRTQ2HFQNi19FWnCYcNRsHdKXJWjBPHArTJJ6KpamtoWFJcC9iSavBt2qz8Pur63ZtiwupaaUEXu",
  "key17": "4UnvHQHMoUPsQiAe9Yaq4JVu9oM4kVB3XkXAXX4GPhaxn2BfNNMTZHPPGJk2BJk7zn2YRdJCoAdzV9CXpqNy3qpP",
  "key18": "2mescfinNXZ5PYYfKUYVVnnEe8gvZTcuDMgpjU5kTyMAYL78RTi2UvPjCdKRAM4ZBw95cmAXkzRsoCaCM8oxKeFG",
  "key19": "4kCoKyk41eZ4gn4gCuqR5ZnSxeK3bdxHVKVhnQa5Y7jUVQZzYB5CbwffWL7tg5iknUSVEbBNCDFdLgpq3Bw1i97p",
  "key20": "2RKK26fTr2zZCRBU5NQsvDa4JDMW6TUssnjdCk8Vfya9nEdjNbAojuNasx1TyfSkyYy3GknVsrcmaevQ2DV2ipsN",
  "key21": "4CMjGgzniNH7ideRh5SM2CmgSe8apy6tGeiJ9wBZJ27W47DfaJ4TtFgKhGPqcbPJWeDFtJybYMbSusihdGh1uJd9",
  "key22": "38c1a7WaQfKgaNF2J2sxnpyRvotw2we3AC2ThpoajzNAA4ePe5aKPHSdA7NxvyAL9vAz9BrLiSrbD9YnyXLwCkGD",
  "key23": "2koAm36NTUXWzTWx4v8TDbTEVMifgqm1B6DhNyWUWPcNKUD4AFwD53nL4eoXY2oF6kBpSSUfBuwzgPZXCGZLDegd",
  "key24": "62EkhpUrT5skmSaNLPLij9n5gAJgzohGT9CAnsKi57wF3YHoMNVVwpCmoTDCtGJhFFEgdXgrgKchbGtXdqx9n7c1",
  "key25": "24iuKkG2sX5ScLciAVFhwqmRDy2M6p8jAtTPQhkFSc7Q2AYNfBxEiuQWy8k3hjA6j7pysNXz21horKiYyTVTxqMW",
  "key26": "24JYeYpCHPHH4zUfx8pRH6atpDU4ArxdzdHe6v8nYqWUu7k6Egpjxw4qtELLKJA5He9MfArriRfz7Qxux2TAe6P9",
  "key27": "4RCwqNTErqMsoRYmp3oEHLDe18wHvz7SaZkDxH9qznvynNnuK4UsZqxghUQW2HfPREnwWyuQXAEvMMjCsokgLeGs",
  "key28": "5CQDJAFTiXqFiY7Ho3iFVfxEzXFADw9f5pfb2SYiEyVuafPXCg1H3t3TNMRKiYdbqzXoHXwnvhhyFVpsghvkZCow",
  "key29": "5o877NCJrJSn2vaS8vyPZHV6KorrmY4snmNZfyVHdfexEoEGwexGJukjbYjsjDbN9uWiuAAZeP9tLBdyNBUrKopH",
  "key30": "4ykoN3CcM5WuaRkd5czMaJ5o4xspBFZEqJPwtcoW5LpVru41coszZfVbvcLYcStXZd4v6oRmRGktGNN3h4fLBSnZ",
  "key31": "2SqaB2WdpZxLCcYMJrLuJUWTY5nQJxooStHj8RQ58jgawrgRvP8G9t59BxPdPKghZXQZLT1xbi8tCWjWLMqFhVXG",
  "key32": "56Zii9apceQs1b5v4WRFag6T15YVswfdQe8cHCmKnLdeem6fA62zsavMcjFmtKQFycEqPjt2trsP94DcrFtCj3Vv",
  "key33": "49nExe1TpPipAWj5kSrDyziRAiwcfuE4nEqLwfs88NMMJSRc6XdfGRsh4dPbciJy5zaMeitQzJEGPTC18UozD2rq",
  "key34": "31NixehTuYbgFW5Q8Uf2yZtouVDbktpUNZUoCx1usbzCzedVJmvKbTeWMqtnQTaqu7FTDDZYCaRVZMXgk68FJPrK",
  "key35": "267vWKxHxcqG5Y9qSw3j2M3sUN9Pa7zytyhPSQ51wsfeXqQPvGU5FSLLZRKU7PKfWkcZ9Y6kZYuBKo3BxfBbeG4k"
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
