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
    "37eEao5ESVazYGmgZAufzSQpTU3Eqjy1AK3qGPEUV82KqHqbkW1dUTm9tN7DSzD5ewNB6TZq1nCbnGrr9ba8rP2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eimH5srzF4b2TDPrHbadYW7GNPiWAPb7CgSfFexA1jf3cEfo3Wv8au6wdSKHgdNAvUuCWaAJNXX3my5EmrW1GYX",
  "key1": "5tihoQgGsJycZpFrRygT4G1P3Lit4sDhuvmULqHCYtGmKAADfHtWj1iWDUY4fbr9DYKgtk9y62fu2gkXzqpchopp",
  "key2": "3Fbw5ZhoMYqQHMuxmXQcyzCgtbE23sHYRhHnpbrCQ7CFvzPg1LSzMgV8MGz9HHUnSTMAnBGjCMYjT9YTg1XU2V4H",
  "key3": "4PfEGDsbqf1MpE6v3JrNfeytrAMi94K1m6eVdNVeComok1SaG6jySWtGr97YN3FkffTwwa3my5vvqsGrrBJMpgDP",
  "key4": "52k8eSw4UkRwHoitc8rnEL3r81QzLQaCPTdgwK97pfYduzAAYioSwWRPGPGbhTVexMM11wpCBx8PJwRuGPTBBVro",
  "key5": "5U7w7BywRn112xcubTmyJxBh46CjWWnXFo23YEKDf17394jrvL6essR2qq4pbFE6vj5876xPv8xwJhMjf1uBMaRK",
  "key6": "2vgHe7vvCBDPBTvTyZf9CoWEapcmPd9MtbrvW7XPqN9MKRr5kZe4BKZehCvpcvehaGX2xtvGvn55yxo4v6kpNy9p",
  "key7": "38GrptZWg27TF73JowkkjSfQi44b4dYFqbSb9mtmQCAWQwEa5rWP3bQEygRYSpAQjLJoRsey3VAYSuR1SimYkrYH",
  "key8": "2pHKHsqgGZU2ATxGWHNSzfwtJBUdSYngEDB83iiKrixdPxyFvhhiQRf1dVbrfkjmkcReGfNqcNwtZqRVxDpSDrhx",
  "key9": "3bLPT4t77Q6dVE3D533vK1zFNZb72NpxX4VXzTSRWZX9xTUwcvAeB12kREEX2ZpXQD8pmbaRqfYtBkjUrjDtNja9",
  "key10": "Ug4Q7SZttq5KASqwE6PBwDMzCndCQfkneen822rYpsGDzmfoqW91GFXfieYVpwNXTC7HueQSR8vJLHoS2u42Pui",
  "key11": "341gsEaw6A5WHfxB4VL2JBDF6Tij6si9SZEdV7wL24Av8RgikBq2rPTDUMQinmXoPSNQVMdLVHQuV91RYF2nbCqe",
  "key12": "2T3RSDeXYi7H4kvmWvBFeCMARnMNPMVaCc9MpLJXekFQJGfDcHZiRWC2ox8JLUPKvjm5FQYF2vshvdyJgpiipLsK",
  "key13": "5rLbr2FtEWjcHPWCiGuxRnfjk54PKsDfC7Y213hxocN4UwYJT4NeDDb5QkJwWBzC3n5sbW9UuxxrVBWeXe718LGq",
  "key14": "2w8t9vZw1i1nHBwgsYb9MjC2ejrQyVq2bVkKdrjEbW2JyZb73iyzJFuRqtjz2A9bmJ28djdkaTyK8maaZpTytCVi",
  "key15": "5RMamUnKa5n6B1EMQhoLArePHAUHkbSCm4tmkFt6ZZcUebY65i3mYmuUNAWjgxdV5eGNj4grn5mjsfWNdQdjf7gG",
  "key16": "2ZmLD5zArV5j4m2afSZQV41ykH5SFmFQ8VbEXmjQVqHUnmWuheoB2sAEkoXoYsxSPQ2NMYMbkM2z9zDGMvRTDtTJ",
  "key17": "43MDUkmJ84Xmm8dwshnQTvVr84uFycYQC64irT7GrAraW68U9NfGzt3YQFTneBtXUovQzaaX48r9rgRGKD1i4mBW",
  "key18": "hnaPtadn14HRQtXmwgKR5ba9MYrhCjDBUFeDZ9AdA3mropnXUyVGSfonjbKR3HRgy7PPRQ3JojHdSVKnXikvJTy",
  "key19": "sgqL7JJxr3NHRMJkKprRx1ebRrthCeM2QC6TZeVfqPqtTwx13MC36Ed9Jr91BJE8pDSXLrERqJsEVquVjUbjMGv",
  "key20": "3e9KW1XLW43XMKVXaXFFmDfGFzoW1ik647pWsKDbaE5Tfke3pkXw8KBqSeR6FnkC3AvzZLqUQrKg7mkd3RBizTxA",
  "key21": "4QudZX2KxksADZuZYs9aTcNceGsvuKa6iWTZV7zDcbgiGJVPHxgFtCRWdVPmnNq1kR8HTkmu4Ge9TY7gQqYZowtu",
  "key22": "2RNu4eAfrbiH4Fq7GQTjfPyb1UD2efhrrRXMeLNjwVpYZn5R7ctUPFHF6RC9bwNbgVv7ECjeTb4oeCJ1TTWoNcsc",
  "key23": "5u5aopw5RNAv9m4a7gWKE3b45a37yW3amsuNnJkwUXjZmu6YJezieWSqoXYJThdAwwri7hhN7acyYPxWbCexUXBr",
  "key24": "5beEbcfZ8ka5UuUsL1x7CwhVhW3oZpa1AZPsqUoz7jDNzyNJsraqaMqXKvtzBzGj8wG1q3JrPvLZbXRXzyouu85H",
  "key25": "3suQH2P8DsrT9GtzsAbqU4APhQk8DQsjqjoKWMNutKSUkqXx46qBkbxZp4LVt233rGPbPNAZ4boiLyc5qwsWsxVB",
  "key26": "4yvZD7MC5sDbq2TrSxgeUndJY5axodND73pd1ECgaKE5XtWGqq5ob9ag4wXMK5VeET7jCc98KhcW6FLVs2wirZ7L",
  "key27": "5vNMUqacBRWusZJE2rv5Nvb3mFA4XFs4u1UDxGESntJJ25sAetSpZ2nhsRu9AdYic8HEEAR7NnyhFK5GntDtppwe",
  "key28": "96UvPyqWZfQ47SGgYDP2zvwN6ZUdx6SAE2KkqJmHrQaAor2CC6reKggUUCeZWo8jGQtxyXvQtUAL8AsFt3An5tK",
  "key29": "4a2kjy3Ugxp9ENQP682TfhRzP5Bg82BRUzNKYf9qcVpv47rYfdR8bjQGuMQScxzvyLVqXnf1pkWcLjASStNr7oqM",
  "key30": "4LcqNr6msSEharj8KXivCVm6FvLUYZqFZGSPPsWQaKtWz91MdthriDLJBaPr2XZy6yYSci58ZZv52ob4ZgWEzSCN"
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
