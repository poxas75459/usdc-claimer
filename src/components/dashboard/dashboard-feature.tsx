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
    "5wzyHvJaYtJtRTACEUEDjjdqZ1j7DQPegfq5qJLH1fPPwuTr8x7Gpem9TVC9pgyuqB576qJnhhn5S1i2PixJ68vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZNBgVjEZvzQNrZzcWF2oQ5cN3vTboF9vTLTQ39vpJuXa2tR8NC7p4chveQV4DmzDYzx5HLLmwyKVRQsT4UbTi9",
  "key1": "WQNNEbihLzb57qV6wZN4C8jURDGWN32deT6jHUM4ZgVsthNd4R9CDmajwErv8ZqZfV6EefW44SW2HDFCnEAYBL4",
  "key2": "3GT8Ug8VchNW1df9bsTLH5jYaN4JKc6hqgJd7f7xEK67Re14ZJBF5pcGoPLsqmidkHFhauAz6Jwynf7o4gShXkmP",
  "key3": "3qboGoZEG1aLppbu6YCgJSpMrp6TBzbaiyKebik82cPN6qTyTSdUy9XfDrjzXAzuATAwEfy5Upe1FeaXxm6CsdZ4",
  "key4": "2NhwU15V7VZtyyU6uZZV1gnsYtnX4fiN94sGhBdCG7ZETYQnnezHzF8iRP3Mk9rLvs5zCBJZueQ6szCnEooDhV9V",
  "key5": "gtgESVGMzp25pNhgUe8LsspsNoq2cUoft2FhVLdpEveEaSZBHYTSmUEdDUs19twhggHqKLFa1ZotihGuLov4xbR",
  "key6": "2rMsTd7EXVxov3CceJvskKHNKzqpM2CqUGxtDTENWQLMDqmBpkmXEx6BkVEN1FtEkcYMXV6RJ8W8v3M62Y1Fxwtt",
  "key7": "2gWvgoW4BvWt38hGeJaJr6g9N6AUfRFLPk5gaZwAuEvWvUoC8k13X1LgPqG8ZqE2dJNrPmpQ5aNvaim6i4cRbdSr",
  "key8": "3Hk6ySm1Erz6NZ5YrBMEHZ2SNZR7A6xPtLvFBoEfTLsTM8vrS9mkhZVK8QwByL2tGjFMfPjsWXCAiALd5YXCWs9J",
  "key9": "3xsBFt7XpPZ8BCntxoV88yt7jpouvMD2qsCM6uGrz1RaM3BeFCDyYvhrJNz5adaNwZVKVi76TgEKFSE1GiGBuW9i",
  "key10": "4yehvrmdCK3Vt63p5vy5gxsh3qbD4kggjWFD6L2ipejqMq2xCFHMcmXLhzva4nmNDBQwcgW2qmP6hvRv5jZEn3Lj",
  "key11": "3VCWvYK6GUYHdcbN7LypiZhVVBFoyiYZ4YAx3vJ3CykBGTdGPG8nA3cM9atdDRDcHqzbxxhNzJ5Y2iKJtPECFdwf",
  "key12": "5MTWUietTxPSVHV5V9Ee3JbBtpQhiNKc9jvNT1RWyK9cxCHrNyxPdWgRYU7avUvbwZKrZVr8KNpUHr3fNX8N4SEW",
  "key13": "59XodQXfmbEa26t6buoNh8ACk1SYKTq2C3bshcSxcUxMcvoyJsh931iHMxFkRhKrAAB3VXzf5YpsEAyWeTG5aMgw",
  "key14": "32HD4EpKg3dtpsr4mHgNpY6s1oRvHX5CZFBUK7HhaQSyu3rrWcF6BgiPSjBhrde21E7bLZe1oZnHD6JhqH2998EY",
  "key15": "fXoGgrgguStwVrhtnH5MU5XwXxHeAYq9sSWLLtXk2iFvzWrAhFnudzCZrDzMdKGPMptrtdfDbDmKGmHt1oYABnG",
  "key16": "MvkAVHRZibXwwbWcr2KsrDaKhewASXVyM1pCYSfpxN6vQp4gMyBLoGGmhVavvHr7WZ36M2r3PuC1Ljsr9rKZEyZ",
  "key17": "PmxecXHCyu31RceKNjSRvYwH5AMvKdgHeaoSEANsbY177xY1MJkvAS7MgDgRVBQ5XwR89oJAqS79J9hCsfm6CbZ",
  "key18": "3y13Md6Wh3gyMeiip2PwMebWjA4wtR2NgwXEShwA6Q1djAp1t2EzLwJ2hrJRuvutJfMcqXhC4rkpnWTGKJaVQfwo",
  "key19": "52kHgrLzSxvRhQva3YtTm4taaJET759evL7VCRdrmDWTyiHVHga5q1Dfm1C6cZqsoytQ2UmNAEm6qbgEqguBttta",
  "key20": "4D9wEidsBYAxduQDkAe8QewgV89znFTnq186n2SKKm3rCQAobpqXJfomtG7ztjZ7n3Z4hE5xGqhcWiR9jh1GGY94",
  "key21": "2nqqFB7YZniCJuT5VqCcx2UyaTxm99N2Qs4YaraFEpvrWz8Fz5eQNRFQ16pGJSMkVjCp9haB7X1PMjiSc3zicXoh",
  "key22": "8LgTPhU2v4XtCVjf1RJnYdYdodFzUF6X5LjeTBAooa8tRxE49mtgF11dEVrw67yLXX8QZtSbVbKAUowvaRnENP6",
  "key23": "5gXqUz9jxtAGycFhPrapknkvLtFSyYxojyQo3VVyqDLvXHUqUrJiAEf93HoCqNvH4bEfjFeKVKp4ZBV3QR6ksUGf",
  "key24": "5EFA9ZcUfVb9T4B4rYNmngGwVpfTR7vz6oD7aUaipyzs8dHN5stpazsoentS6K12ZG7ypLeDXL5e8jFro7tXMjPi",
  "key25": "sCGCYYmVyyxfMsfzqbzeRUK2Aa8K3tJrjp1Q3Qt1VwDms656HwH94uW9fj8jVoQps4qZ7hq1gzPuBfQ9aFVPAiY",
  "key26": "5Gurng5qfnKwmyCqEgoTnZEefaJuseGnPu2ituMA66nJACyo1jeJhjLSXcS8W5odXydhLDKZkV8xTN1Jh6ZBx5iA",
  "key27": "4bL1815ZnxSr1J4iCQQcRzhNBg4irEYRmMXcGV6r9qQgNF2SWDrdpX1KCKmLR4E3JyHRMAkwEzggW6ZxFicAzcoA",
  "key28": "vM6Fj93eRSGTvuoenanFpg7RT4ufytBrc6DsRsSJBXJDAdELB5ymSHA7LdqeWvhvTtdcTrn9o81fK4LA6iBAYzt",
  "key29": "2sabJJDUhq7dfNXvFFfZE5SFAkCbY9TxndviQUPXNKXhMvzGZpjDBgrWQLRaogARC8rwvExay3TtM4ee3LHsKZcm",
  "key30": "2g6QJQefVKChpmHB8pzVvmKpvAfCg2eAEiCxvNXW8ZWqDJUqtS6pXmm2fdX6E8JN3oJkneRfpjZGGhzvnzu2iJL4",
  "key31": "23PFhiK8BPp2xR7ZSuxhhLFH3QX3MEG3d3hA7rdDecEsdpnPVTXf2RHFgKGkyvRzBQzfNHt1L4ts4T7NmSjYoL87",
  "key32": "2k1QWQy2FzArkjuMAgWyTFvamG7Jj31KszeVsx1q8nu2ddjnkTNgJksyr4UapNBWTXsEY1XU4fbiW27qDeEG6B1H",
  "key33": "27zANJ6zhAeS9HiVY4xcz5h46RSu25RUpUATfEWpSS1pEgRwitdEe3WrpZZjcAGDA2HMpSv8rkC17FiZDXDAwWSW",
  "key34": "2D6UvReku8Lf2fsWrxVrreqNNisVrm1tyZ8AWJPukhq5wpD6tqAxh8FiTj4j4fc1YyWFjh8rjdUXjyXP8M2imz9M",
  "key35": "3wn2TgWEhrFzGJktNC6AMEhuqi1ZsvfHQwphbPSneuA3S5zm2sQKZEQfLbkrU7HXYPx8ESd1TBcc2iTBe84Nhu7n",
  "key36": "2sx16oR9ftK74jaKi341B3cSiUmxXL4Kk4WFXXJYXTyX4PeGCbxs82ayUCCoQoJ8iFScjma8c97g93MfHRzDFRR8",
  "key37": "sTFYcMEkHWJS1eDf2JxT4K2pqRZJhu5pf9GR93zEXCo1J9icEZqeiaE4bh4HxpjRGErAJZEfmJJZHksgaWerCez",
  "key38": "4Q6EedQBSrnCx1sMC2zUTJnYwynMvYmKjuJTQjxQ2GxoaaAq5FEXMyBX5bQz4NaKB7AdSRpTbxgdg9BZxeWzxhMb",
  "key39": "MG2M4Fvw9rRwtdnYN4hPvadgMxwDLJC6UbqHBdf9xSp4rpjtha7vGEZhMfCETVvvHkZFRnzxeuR1iQDzFZtpFRN"
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
