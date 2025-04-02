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
    "29XD4NcQxQhR6m4hCEuPu6Wqt9XNXn1qaWwwnKKY1LiLmytaJQPGqiSAxPppmeQqJgNd1eYhaSAXbwQktVa4Cygc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uc7qjU8g9QpJ5JCoK2gidHVTWysomMV4PXauSFoPWiwxtnY6PBukYphpNnbtZ3hyAPNbU6VZE8qCVEra7sqi66i",
  "key1": "2hy65ud2AZFiYdSeptyapp4GFvDFAL25uV7Lxcuqv9rdhUEECXYzKSZHLWF32SJe6vDM5nKUX2RGrsT1XtJ7aFb7",
  "key2": "tLJ5r8JPXMzqsfKpBuGjHLUc3cn3PRJJykDtbCWcTJzuBUvvQ1ZbURuaU9hXfgELbZ74JNUFXHhvEYVase2cF4t",
  "key3": "4xGFWKScQ8i3gQmJ6a1T6xYBXXG9RxnMt1ZxZ15h3hX48CNe9TWsHpc9s1EKk5g9XbNJAuGWZp5pfSewCcaFUVtp",
  "key4": "2fhCNsC13kkHE8Rm36FRKEskZosoYQfaivetWfEfCimyVd1eaKy8YEkZZJ5BxnBc58RQpSBqoV6BYPRwPiaz4RG5",
  "key5": "Rg1hfCt2spV4LqQ2WCN7daRzg7Hp8MxcxCrqoGkrXME27RrYAmfkEc7P4bAZ16HrwLeeW91A5BxCaZcs7dFeXZA",
  "key6": "3eTpGjHmy6Pb2dy67k6TVCaZyHDXBwmDt34h4VwTByW92Apdx37tvuZnuWYrAgck9f8noikE1PS4iepMymb1xJLJ",
  "key7": "2GmUDwxh4whgFw9SUhWtLtorYcGDHHgJUt1dCyaxumDfSzjcwKjUCitmKZqhrFjAwCVZKMkvTS3ZF15MMdUVtXmz",
  "key8": "4cnkdKNGhTVxirT3CcsZXfJPbnc7pCJ6VFnaArPAu7HJ5tcNwyaSZXVM8duhMwWofVagT7t3YojGiRBE1mqCRULS",
  "key9": "4kDe7F8LECwJcZE5khDJpPWkzfK5sEAPK296ovKGad1ZVz46qzBwNzR3dpi7DYXfAdrnNiv5bq3tc4FSqFzvs7A6",
  "key10": "5tEei9sDhnpLUiQiXNtbosN2cv6A5BmdLoMX6EKxZMnFypWJu5HdPiuqDc3LkpTNMTzNGGD4Pa8o3463ya3xdKR8",
  "key11": "3jrs2VrK6nfzucbg9o5ofUZHpwWiar46yTu8cAJvUEamNZAR1cnewM4vdmfuyaGjAx7utunwuHURDN8t8Ev1SEPF",
  "key12": "33WYEtBDS4Yti56KquroKiCDdrN6UTMZZ38J82pmgV1ABeAyCgCPZi2XFRQFGFNBJYz1FbAHK6Ho1Q4WqEdYeYsu",
  "key13": "5kmUwaa6rhvdV5STqoNDf6VyE3ksR2vJT6PDPBxpVMtXdy567yMEgKkCniVz1pa7BQVVJYSfYoMVj8E8Rt18Z79o",
  "key14": "2ofmpZnz9ZpfVD3PhBMXQmwvzh25hA9yEXnB3J6SkS3QfmB2yGFPcXcbM8649kteWyQFyReqAdriD4A5Q3ptrei7",
  "key15": "LnV4joSNwZmaPvo5r3NwG891TvGBfQeqp2r4Q3Bqt679ZaeamE9SEz6episjyPKraWdpTJZCiBpfYFywc4cFVwH",
  "key16": "5twppY5uGGE4AdYRz6HLGsa1dYF62GoRXEme7p8KJC2Qiqk3EeUzbBd4NhGe5GvUK4ujo3zTGBC15GLgxRBU4pc3",
  "key17": "3SCfg3epaxPv5WkagHzAAf8HjKaNcZSVuuKiDhCVKthVVLHdMwELFPgbrFv93yn4x6AtVjdRQ5JQauMsYmGkazzU",
  "key18": "5fwxXtFYJfAvvShNzpwbXbDaH1FUcJsFfBBuM729p3tdjLAqfFDLjLFYR1YLb9QZ2Nf8GFVE5MuNLEjEQvFrX6R8",
  "key19": "2TwSGhxz8pTx9THutQAYHtAV6dLKMYvHNhCKWVzdhNa5jPKy5HzkrRmvMAdu1Fgf58tbVDuxSu3MGM3NfWaPFqau",
  "key20": "5DFsemkNjgV8hzvyA6PA7CM8SSRvuECVhZiVnKZh1mmNgerT1eYSNs5yLGuJ7uoxEDwryGPYhm5Uc7oocwWbN9rQ",
  "key21": "59pube4q7gisq4Q71nVbPFqCd7PszJYgzwrjc2XoCmYRQwgPM8cVJr4EZHgE72n8hFsNDCySRhRXDtfxvNBWMUxU",
  "key22": "3iWS7R2iKk1bBXTePVdGPq7MRVLMKUY8K2hDRZ1HdNsPumkSC3RbaT6egvuuTG7E3QnbDeRWW4votnY4qmpbeic3",
  "key23": "g9r4D2KwoVJj7gHnbngc63vBGMQvB2mwqp5cxwk8BWwi2Q9daUy3DnEbym2PFRtNCM1fZTv29WpyFvE6oSYDUWe",
  "key24": "2ktsTrryzpTYg3fdd8niNUQkvA5tvrvVEW6aThdPZSM15beCHP5UKjLHst8hnRX1BZcKX3JuikZcQxZUeskwwmmw",
  "key25": "2cFefmwkaCEu4E3mhNk5gxdCTZWqgxubnjEgnjg8QKiBELnQSHNKfQSpLtqgP9X7CsM9Upp9sDrbcxgrQFBSVWKS",
  "key26": "5anJAyNMJpLGj8rjJKExmPfGV9tEmZebvGm7qRigX2iWUKf1xucFhfQ4wD2uDzvP81RhyRUd8LpYDjSHFqWJexpF",
  "key27": "3oepSyUYu2cC24Za7YtkgxVuE16SUEtZBjbRoxy7t2JJjuvLF7usr1sv1vTHkTZynL9NHp7Sv1FNtzHS8nRbiszK",
  "key28": "6392VPtekgNXVEgEthMYcTE4a2G6baiG3YMBoDBhWiiph5LKUdTidRbfrxG4yBAMx1Q8waMmHWYn93dDDMA7Rjue"
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
