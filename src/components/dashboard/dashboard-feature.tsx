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
    "25EAMSFLZr8hjAEu5yqMJAYaaJfGYudDYZmfLK4AckVhvHSACf3LukTGqdvZtKim2imUWbrpCknJkjiUDf5ktPpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GaokWue1QAVt5QnEuHWybEhVFLFhzMp3JnQ53Nc3gZeatNeHGMc8x8z8249E9cmRPBUaQ9FbvDPAe13SyNmTzrq",
  "key1": "Cxbx6ynphR5B2Vpw8VUgwn1eC26VMgvzyVMtbV2UiwtrAbFwXwHkeL9NbMQkpTiztr9omfjGTwtvaqgwo8ZetKM",
  "key2": "5QqTWWDXKbi9FFyAaE3eNCKNFUcu5BQ71qqbPZP2dJsWP4om58c6kCjQ8vqmFC412Pr2NA4EaeSXGh36nYBgzk9e",
  "key3": "3vkCVDn1KDhutqGnUrdJRvrXf9U2d8GspcTZD32AH8uykTN3FR2k4VuXjuk8oRsC9RVcXumJukUeQnRdQsWKyGgX",
  "key4": "5zZP5Y1CPEZwRE7ogTPTaD8xZ7BXMGAyQ94gYBLQW2fseMKmuB1j13ZQheEhWDFqiHrQYEnxkT5bKuUGqRAWikSN",
  "key5": "3YRba7HR2QoWKBw6Yhv8HDrhLYREjgZY7Y484NyjDaZCj9UjULygQxsLDvnk8j9KpnsTEHX7UxZ51hmjQGcraavP",
  "key6": "3qw866fn4UUNaLBwpJXhHiz1axgw3xrv7Y6zmPbeixAM6gQDzGiLeHpAXCUqj52hZizagbFZ2VsEYaui4JJUK6JR",
  "key7": "3MexMr6ko2m4SJ4B7AGervt9UdWm1p6ZgFNNE8rbS3EaXbBAQin73fJ25sS9YY8VwZXZB1RuuzfG3y2A2VWyeWED",
  "key8": "2XPKbGtjxGxkVkK56Fdm8BYErtNzfxyW8dsCyEjEGykPdgqDN68gQUAbo1t8ZCsvy2TCCadW4dkuK51H4sVrWxZW",
  "key9": "Lc9dNRVh1QqaH4fiGqE3LURQWHYyiMyBVDgjxbZE9dLq7rwJGRJwEBhXxKoUnnoe3XQYXDvTdoKCqupfteMWDGb",
  "key10": "5Lt31y84xjtU3iDzxVn1es5RrA9Ggjg78653XnMfcNmYypnP931NPvWPmVtZKFwjnz2J8vsrZwYBUar1eH8sRA4B",
  "key11": "5tTdUyR2Yx72cSfn7z1ErYXNnU9s13mdnXNAASFhcgHDYY87f7sFJDNapeVn2csJrDtH3QfwnNfjgu5nYXBCfQAE",
  "key12": "26RhrKXK3Uw7wwSYn87vk9huCGCeKpnQbChLuF51es1KUi1rnsbfneY9BW96pZhiAa6ojxQTR61W3rh46k3zjXck",
  "key13": "3pthZoc8uDe9qa764fwLufG2Av1Ekna68jEJTR3NFyAoo6guEGtRqyn5wbecW1rhACk9TMB2cgM4fpzVDVVdZL4q",
  "key14": "21ZjgPCK726feyXGdvRLU7NrdBKWoxCd3jQwqKVKhvdSNhbhVSPqi9a92B7j7zNH7UDhZHmY6PZr9bto687mYYRY",
  "key15": "3Tr2gP5EvfXFxw8jy21VX5Tevb7CFG9zxMBJMqHwYu88QhQbXUX2mxuvJpTMnEkFufi54146vkRNeskJLTfCQUk9",
  "key16": "5xbxjMWsv5A5dGXbu17XMTx4arvwNZ8JCJqLrNSrkJbEEWv3MivS6WcKYjs1jGQ9WbBEiBDK7kWQ4suriERXM4JP",
  "key17": "38tJaX4wFdThETB9qTWcFrUrsmFoxp1ua2UEgc8jLTa2qcwQnVLi7ns9btL19dp1Zq8PWWLHUj5UKd1QSKRXEYLf",
  "key18": "coAbWMphWN8K4aunjN8iwr3SqTcq5U1J3nfL8ujWSrt4WgGdYht6FTwh8mGRHob9Cd9PRsz6DkW8ojhSkzarB6A",
  "key19": "444tApHkDCivo5M8yzvnJ1acUYcGArwtBKqB5b5Nyg4QnPHm8s6PFatRzFxk66oY65n6kdWdqPRDnrEbRgg5ffDu",
  "key20": "owSVc4SRYmr6zqhMeA6do9YBxTV69j9BjFJ8u9QyFAfoYwkHCHG8xCePRpdb1f6SHGkGE47SstKYdsA9nJDn2eK",
  "key21": "4x36DgUTGKAbJZE8gBWmGi5fLUAg1iTqvVZvmm8HfmamnhoeLd4JfJZCA54YopXQJuGwBXrJCMiF2zUNAyvcFNKB",
  "key22": "2NeHLPRzboxeUtqTidvGhZxoyTdSARkTiBcbdCEBcGLRZjhxGCZtZsS9TsaQ4jCgzd4NjNhJTAWKygXWovcQZfX6",
  "key23": "35h8QgM1AV6TyEZ2qf4cyBrRSRcxAq41vvSbHMi66F8EeP1YXUFQVpehc3ZHgGjNP1HmvHgbsicVGcPujJrxFgTF",
  "key24": "445yjntA7Lmo2fSVuwWKHwEYSiR1EVbKFnUZ6mt9NYhexghaycZ3MgAxzPfjfiNVtcBH2dFj6fwB3mXZB4hdLYLB",
  "key25": "39RonrX7z4LwqGqiFeyE89ykoTudDRWqJqtLZJDDBqpmZzFShfPuYSUe3xjJJhW5zrdeKUMThD2SovfvJXBAr4hD",
  "key26": "3RtaWAoV6T1b9QyYKr83wQVdqUt2ukvZAAFN2M75BQgbvA968zDBexbGcGZgcfFwwWG5D1WpWTS7x2mvTEftprEH",
  "key27": "2RhQkrM8C2Wi8UT3ULfRuoXUGTZdykrCmwcnYPeQtBnsUDSxB6iJ5fsvNCJmdSxTHS6DnavrPK4ZnPyVugghNwmv",
  "key28": "5BLZm4WvqKkfTbYNv65bexRPEcXVrnZegiDko9aLp9nsvmB7ARoZpmdsv3NPnVnW4Az127NisTNzQT5U4MP7usxY",
  "key29": "5h6wXUM3kYWrQUQQuUaLAYfUJpvxAkcMUWZscMCge8VQMk7KhQBsBdznKCjFH1uMrYHcXjnzefrgtP3LxXtQVVvR",
  "key30": "dmxX6PCWP3yiEtBt2KGiahtAAdoXkU2b42EBaGc9ixRuf3pqbjGd9DzLzFyuo9ujx7ew6GheUXCR7egFj2zwbvZ",
  "key31": "2gnrm4miMMYtpSQcFUw2MqqWQLWCr2xhJhZGjkHooXHBsLdQ6BNWa3CV3QFjxSUeBEVqrBcAaejZPshE9UUd7e8u",
  "key32": "5VLSBJ4FN1pPRRySFiTLsRJMCu99PHvYwrHkrcr2NgnCzt2aCyxXAefNC7Eez44QwyHmG6U7PU6jhhBJtLa3i1Rh"
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
