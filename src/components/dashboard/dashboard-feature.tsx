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
    "2Dasw6JisJJrFjF8wQ5KVpBsWVWJyKcNm47pZTmXuKHkQ5PqkNtZ3zwBkMuWs2o5sA45iFYcZSRN5FmDRxySrMGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrgySaQM6ParHUizzXghrEBbNxNqQRA8odRZ6jMDabQxjhhjjqJifLMox3scJeqyapCXLXCDdtDHCWwNPMia9Z9",
  "key1": "5UKr8meZcBH6ZkceYGapt63rWjwa3F4DDiTZVPU9iHeqEvEjmLLengQDEx5jvAPdAzapuHj7kCHC5zkei6JnJb88",
  "key2": "QF3Pw8o8SLfHtuezr6vYtiGk1uQCx58pe1dMnZsJpChj6Vkr2PDrU36teodZDT44PRCScgj4JkRWHGEXB9GadWJ",
  "key3": "4vi4Wri7xpRnQ6XRF5e4cQofLsFwcgB3Xp881r2hszS3YQLRv6a3mmc7f4vPoa8cTJtraiynLpHW6fTqM2FE3cb9",
  "key4": "2V1FJUWLqL5WX3tPtPWodDxMVvCAQvi1W7DSaPWkCTCj7dZX28DZHe6tYA7CoUNAzrq3vyvPTM6w3cS9ar2N4HkF",
  "key5": "3qKBQJmSo2PuWvVR6JJVbgoCWUgfEL1gcHRJ4MSD96XZAhEuHKN2nVUj1wkZbqnuvcAhqPak6gVbtUCizoEAmXz3",
  "key6": "4LSys11UzGrwaZtxhyJsJoj9pKjGyjQCQx43V1oMpeLmpzm7gkQq3NEHUVajkBUGrLfymc15G7QfUUDDCaiF1od6",
  "key7": "2E1WxzqyLSwET3g5sE46DVTtEk7rMWMnmmVWapMjp7QVLgpUwqyGuAao3itdyn2H6PVGZ46X2jrVXjPtEKkukyrQ",
  "key8": "5Di7mhw1kBzqPCQgRvt45jdgwLMwBz1h8knwfoemAcBqimBdRw761zECgnbk9in8iFoBd72FyUaZsmwU3LgjoNqN",
  "key9": "5qGcQ3ao4Sr9NAxYSQv36Ee7BcNmhnbuTLGY1LSDfKyB25EV6i3nCyqpfvYGb7iDQBGmvT9vMcv5W886dVuDGzJh",
  "key10": "2ECiMTDGwASXhoqkuMcu9yrrgJG2H1o4oqTd5YfE1bQVaJN11XFKhuEN6xAJHQe9oompK3QcQJ6GzGi7XgB4sxrD",
  "key11": "3irbv3CsHUo92ZFb89PaFhrR2Yz89mzf44eUno5AwXe27s1MAQ5r3uai5Q3YcYYd5QKMvt6KHwZHMJbdgnzT3dPH",
  "key12": "4ijRJurDrYP6sMEkR8zRMZkxDwCmq7wKZeFcAxjABWFnpm3gYnXUNHNvSL4q3mLRZEKdx4kMTM1B6ejrEaZoMLyW",
  "key13": "61QnyHTQCGgaiy9mSiaP74pCFK49rqm9PAjzpZs9KR6jXrYGmqZdGPgesagv2HihkQatgaQyRwfhosHB1kxNz8zf",
  "key14": "4kbU7AS3t2PvzMeRdvBvv7CABPUXRxmqgPdLifvqhTLfUCFcgNrUMdq33X6JCdztBik3Ubr3tWjJWfEa3rvYpn4",
  "key15": "N9j5LZY38kYU6vrSjnahiARYY52Dz41ZuMdkYwubQYfLoLRrUANvZ9C7oEmhzEmyzjcGc8oK71UPrGF3cYPKiyo",
  "key16": "2nQyW7GPLBDXf34ZY5SU3qp3iZYKWeA6UbsL7Vp57UHE2ybvp8udHFb2iz1WaXDnEQQNGmuuzyDGZE8KTtBXEyu8",
  "key17": "4H4js8N9uT42Zrvk3j59pgLW6rTH6qLXsS2KubymUwrqrkJHQcRXYFQJ8qbqFWKgnV5Mr3cZNcmCwQny4r88nER4",
  "key18": "2vxpoN3d7s5TgraYAWxkvSszGbhPPE3cDYsWPZCaFcFyMpRr21CLCd5XzikMitB1WEjQNfK69ddRcENQFaw25ntW",
  "key19": "2wNFwUHwbFwT5SyToT1bijL557Es3aheVtcfnwyqgC77gDEhdcU9vQAxNqF94H7665WTRVir1f7A6th73UCcdRXE",
  "key20": "3AkursKyiaUiCLcpMMxykXLRoUQVuB8BPDxrzcDzyi1NEVt82nx5cYSRrTwyZPqbAR2h3JdZoAARJnkkwj6HUaXP",
  "key21": "vzk2ANMnfkBJ2s5y3zkoWMsLk7vWHJdPAKbP6LPuxAqPJ9w6ABq3R6zK9J4yxMxJkwV1Lo834BRYdgnKSBmUSfZ",
  "key22": "3W9EGWCvxdhkkkQjCyixXkLyozEjt61KQveGtZWPB3bqn2V1tq5Ja6eUVsAMFMLMSG95Za52iXiDfXXqKRrAkdzX",
  "key23": "5yEZaACKMfEZRsafhQLUh93d6E6FSC4EeFgPyk93Q1xqQSFX5NinaUb7SFXUqBWWiFDqobdBKrBtUxVWmoYn2NGs",
  "key24": "3wEiZefvyGSp7G9LSeRwAyjkj2huYPd4Pm636KJnyBWQsPtEsy5fnk3ALZTH2d3D4PeEKbyoaR2puTwGQ5jKB4i1",
  "key25": "2CzmRpjLfBQWjTN1i4WBnKutp7iZtSK3c8jzgkWvSsDFpUqviwNQLXkDTvq58dzYJ9DBJYc8XprsFMS4iBtoTEuE",
  "key26": "5n4EGcknsPr9wfV2Af2TpCi7ffrXKffscJg3htwKhYid7dYxVj51sEWkPe1WzWFXAosETcukQmm5Aq7ETHaKz7Jz",
  "key27": "3mntLNeFSmKtJWFwQhAbnW8rDAvaVG9RPtaSdgZvKAVYt17Zfbzr3DhvHsxUoTyaXxCXMP5ZWsSX4QohpfZ3tgS",
  "key28": "5yyRjYwkiuxoWz8mWbMT4astUVn92XwSZvpc5FNZ8sQxFpBcNhuCbabjG5zm1K2LQMJNbULRo21X1y9PpJERTihM",
  "key29": "4cXS3oJowZKXDXEF2VpGuGSUzhsNKACTZik4jwZEyBjjAyD11jZkPajjvuWGqmaubdzLa5g3Rp5BErM5y2Uop8G",
  "key30": "5UJUyYtWeFRiAT8oMxPoA6cWUSYXqDzNDHRi3uGTHzqtCeBnEJ99ACV66VTFcBEHdCgfhHbc2KDAG8yVszSJzSwe",
  "key31": "2ehrgQbjA3geRfePW7SBaTCzKjTQMJcoXLkifgDp9hJK4DCwLvwPaUyo7PBhjaUtxmpKD6ULPWe39bKgTHeBqhJy"
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
