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
    "pKZWWqfRPutGJaC9sMbn5xoGyFMaTbyCedyoopKi1zjWaQvJZZJRs4XatDs5L8ZAtAy3k5H85B5yUEfy29T5PhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rqi1PVNcNQ7eD98SEoo6Nc1RvuQJjXor11xepodF6Y7ymxHQNFZSKNP7dBJNCd52us7Jz7EApW5C3hYBoCPphSU",
  "key1": "aQVRXEi8umRKp4Xx2kWgNYZWs1VWi1duxkj5S8LyvyxBRAx8FTmK1yPyNGBfb334z3AXRDJD1A4Eng1mukdX4SE",
  "key2": "2T1aZbNhgVpFhbpi7RG8YcocgSwChFHJDaA58xvzTJeWhgeQimSsTQedw4UjwJt3AA7fN94YPEZyZA4mNPCVkxwv",
  "key3": "2Z48RT87RFTsceB22TcQ8qL5ZaVSSbjJTj8z61Luyysk7KjhUGWShWeAxRHNnRhxvVUPGhG8qFWE2NrZTNm2gE2R",
  "key4": "3o6Bh1NfNqgzeB83LqsNAF2aHzqkDX4xWXrRm1he5PvAPi6tBYDpBZuGsKgSE7Eq6TrVfqKdoBLqX2MoAd5BmSA4",
  "key5": "2BonveFKSTPMLk7RDk3C3AYrkTZkmRGTnFAcixhigmDfFGE8FVjFjFGySyYeBWQNAhLCbTFx1j3oNxAXhfn3UMeP",
  "key6": "648Rro2jyWTwDPBfpurtM8bo9V14sV4BFxvmjAKvYkVPex6NM2V7yf9CWtfMepV3nRwbRfiCTvfQDaDR9hXbJAGb",
  "key7": "8bg2JeTpu8Yd22j3aao1KjdmRrUH7dEfNa45fC1u6XmJtdttf4sqFSEFTG3xBFQUPffhxU2ykBnMjGY4J8MJuaa",
  "key8": "4xoHRjjGaEBBhbZGcfkr89J5Jo4H7ixW1KoyCcPZBZK7oootUTVeDGkkN5shYsphst82t6BwmnoMb9jynzJv3DKD",
  "key9": "2qW6dwCwzGq62GLxqGo7Bmh6VyHBqv1n3dSJY4a3svCojhN4hFpk1gSwDcdGuCrEdPzQj4ZGW9kDARi2gHLHLXfg",
  "key10": "5RaVaymBkQGoFAWzV4YHz7buJtq9KQ3Rhnbs6KNPEC5VnSeA2PT3BiXCQ4At7JoaZCmnkf721xx9RF8HRF3WwGni",
  "key11": "4Za7msKLBquAGEX5QGdm5LSAaeYsN5ePwUKo1cpx3p9rPJLUHcFoCu4ogrt4dz2q6KRcjUeiwvxxacpdXWsBQRTv",
  "key12": "3E2voKyhkq7Cb4KXL56cFwFC9mE7K7rcZXBvfAep8Hr1TnDA8ekJjtLA8RLkD2sGyw8sYfLFvTi8w7Fqrhx7jY8j",
  "key13": "5fDsDrWvtuYYmvzSye4jyrbPumTDpfjrwiaRjjvpMoZDjs58V6MUXxjgftZ44KCrS7nkvkRrkY8aLY7eCvRwSiN5",
  "key14": "2xMwh2RTDa2f6d3m538FL7F4FCYecbKiC3wRvnjM5b1nGKRiyoQYmp2i4Mr1bgTQ6DcDsvghqS9eCc6uro6wQXDx",
  "key15": "2p623qBQCEn5NZsXdCxfUrAxBF7BoUr6X4ux6qDcfM4WWB8aDkF8LPtdBgs9Wz4NtStiQYJGoi7zh77J34Cth6J9",
  "key16": "5Chy8UwWJwPsGq8TTeUeP1EC1yYH2VPoiN3n6CCcjaaubyqLGZMkR2NcTvBPEXpbHDUKMQTeVspCeKcXf5CuMQE6",
  "key17": "513eWM9EFRs6LBTLurrFUSwkYF5TV91MqnDqZLzGxA4LzzmdVp2PiqafF6oetjaWiGWGcWJ3dGGCGmUzDLB96x65",
  "key18": "3yLPMPnaGSHYKn232juU1JCeQknDEKAuRvnFt5tfBj5SLzDz2AGaFU6fdiLU5mKFZNyiHXxrbBE8WvcBsKk4Tf3B",
  "key19": "5NzSNe7CGfpfvegdqMCmPeLVQv2wPARbqZTZDc9wJUeFqNQMq3G52au1L2EQGcJFzUUan9uodcHBXaWz5Wjxka7U",
  "key20": "3PhFV7Ko6K8WvByi4qwGescexQ2qKoo3vfptsPaB2z3Zej6wfEsjguhJ57GmpSYdXQy1k2gdzCYrEMTue4kQyjV5",
  "key21": "3X3oM8WdmJjMGAuZYU4Dx7c4bDYmrXydknbfadNe8C91go718wU4NESJ77AYEbCXoHFTTB6STNETDaf8EA5Kgaf7",
  "key22": "2MdZeUphNSrDjiAwyQnWe5wN4R21DKWKb5X1edhmmLXu4VV9ypWEy4Q7akRLDAUgZG1dQPFU2EYrSyEEiajyCsF3",
  "key23": "3QTwcAo1rEY9Nz93YSfJzR4xAN8gewsH8Qf4fhRDxKbmFBnYxR7tZTtcyZxRxZRVwa4iyAi2hsrUjSyCSyWq1HgS",
  "key24": "5b6PkLUwjF61HX3kjtakaquwo55cUxkm1JTmS6Wgfuieh5PtEfXDjhnDCWQu9RSiuMwZjZ9KwryC1zM3a5CULmh6",
  "key25": "2EXs1Q2iW89U4dw89n2Gr8tqPR5hudNFB3NWAyX1niJpbfDm7qyYKv9vCsVzKYjsCf27HzKf4fAjKKUVYcAeQkmk",
  "key26": "EY1Y9ewZxbLaC3etQAz336B9AYZHRtZiMt2UPS7nVghG5cdyir8vFNJp13f1RWqDYPFNhpqFmP5SmPGZgP2Ma9X",
  "key27": "59tUP32kZicbfrDFbzaU9bDh2u6oaBJRUJvoeTRGfWYGjWMy4ViNGw2VEih1YiKLgfxFgz5Rtbh9H8uaRXStuLw7",
  "key28": "3a2waJtBQrLQDwb2xVJqfuWguveGWLhEvhTJn8zLj72L2LwuRmmv51ayUoj3zU5oiA4kM2W3sk6KmRPZDaEGNyZe",
  "key29": "4YcWb6bcALqh49mje4pu9UdcmHdzLD5FZrUY75LVwjuQW2zfQjGZwwePcTB31RBqYdTj19JGg2UqqtKEka4brV7s",
  "key30": "3C51TnyinmXhAbEzMg92HDiP6mFP5gUatdYcQTpoNDHUFMQKPaFuspM5JiTdgkAJJoAcstwYfcyhmwoJa4oQcks",
  "key31": "35zBzUKHht8WhYxAAeGxXokh5cqrjg4aaLS7yNEeaCfc3YWVVnmN73eP779TahWSzKvfY4qzVV2sjaamonw88wkA",
  "key32": "WzZXTdVRDymC3Qjjnfav7TekskPFrLwe2BEhow8HUVjzzi3GFjBTLXFQvs5xeixr8sT6QZBk2wTxxdSSRCvULjf",
  "key33": "5oFRYq64HapWryggTHcNESntsATDM5433cdh1aPMTJLfDyULYbhpnWccSRuccc235W8ffJgzRrQuFSvyEP5bgv2P",
  "key34": "51MvW5FirFM9wiTxUPneMg2VJSQj671cuJ4dZFNBSwP74nZZADUcFgnNpQE169yeMa3EFDA7GaMpFSvTRVauwgNi",
  "key35": "2KL34r33dHeX6pgG4HGSDgsycyTeT836qy2K43r2SSwt8dqW9pQbxdqMnj5RnJfxH7N8rV1F2WJ5G8t1yZQuBP6y"
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
