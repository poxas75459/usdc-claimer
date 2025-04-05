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
    "33H1xCkYKXBPSTrb3rFRMShj27tJLFtWhZm3Fcz7eueuASC1C2Kh78CaNdqDDMhVd7z8Ajm9SN2VbiwNKnNe6MuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGXZ7aevnmEDh1efrQZkY8ZxhgRTpWe37KaXPsumZj3TC8Q1hH1DRohdQYc2wm6JBUBopaTDi4XezPQLMQadzgL",
  "key1": "3iuPQMqEninsvp8TxaTG6A6hu7wNAncXJ9it4HCNAPhory1nNQYXT3u4yBrNs4eWemX1gGJkYQNJf12Aee2b2uBW",
  "key2": "426zVywgSjjXU2GVtfTvaaohquVen6syxCwNntroNN6SgL4qeQreBSXWjJAKuZ3NAZFaoD2tx5o61b8WDLXYzLTd",
  "key3": "5LqHaJu9FPEpVFsQmNCmpqpbFrVtHgNFpkzSkyxjVQqisnzMpziqd95EWyLWo2E4jXxnaBFd3EE8k9m7RZSiDZzT",
  "key4": "29wQXYfr6y7psrAceGRzuPfhAgQZ1BNStd1LPPadtsj1b2RhCuteLvTLG2XA7wAStMfuA2aUcfS3TsoRDx39DygN",
  "key5": "5rMYGUoCj1gHakfVju8gzrKRJVzgHDk2Gdi5EE3kUERvXoL9msrcWDKxcnpk4gPLVRQJu7UHXVbJic761NfnnRUP",
  "key6": "5fe41KwKCGeFWGYrrMRT587i5Gn9JaRXXpTVVzYV3pNrDq7obx8KFUqAWL4siYY1T9GjYxjABj33DTVerDmdmyXV",
  "key7": "Ynm9QkJBUMmrWcJbtuBC9ST4HpBjgqhoBedjyJpGELEvffnwFgRWR72KcZTt9WFR1fhLf2ZYUgXvcXvkVLzkGgM",
  "key8": "2JcQuVf66BDXyMPeWwnRf9U9BrJeBvDJuCodPVR7yY5pudqGxwjxRh6MD3GB5hWa4dVc1S82BkuwH7W7AnaNNyGg",
  "key9": "4h5pGHfiMPdk3WUponeaFi3u1LgybhKZWtTtmhAnejKvs6V7mTg7oKnPM32W6VxUepRL27aWNoyHCKBMEGok48qK",
  "key10": "3CJMd4WxuPHsiHS8QaoLivkWTZd5z74HvJuR8vFcyWuWnsUhonQ5CEGsbPFVyZgohWQszwe9H5bKZHUQcXugzWNd",
  "key11": "zyo5AM1NWhs2iAEJsJyt1qZer7jNhXJXFaEeSqi9LABxZtDV3442vtMqPfMJpocTTLY1wVJ2HzCHtRdvuVB2Bdu",
  "key12": "2WAtveCASvv398iU5yyD788nxbpKPmDNVtZiMXuQ6U3UFvJwdyfWzr2FtF1U4F73pBa4634TxAPh3wz9HUYMessr",
  "key13": "3VoxyGiWHF4tGKWPjfKfmtwU9ZjyYDaHACnjZRVqdKtWVjVVgJrUDRDPzgQm2VTD3bNvL8NmHYy4SAdNYXEwnnct",
  "key14": "6rZBQtpTZfxkJmhJSAa297KtWqvNHskC1FwyS2ithGiXj5ZTxu4vxG5Ff583kaSvMeaMfPZUYKyNsMbBQrcjXGv",
  "key15": "2koLQYEoYVHZ2EHq7DxSxJDZWcph7QAzGnLzUHsAxqqy9a7mAJs75PKYMVz3nB6a4ENPWybz8BUkQo9dhg4KQpDq",
  "key16": "4nLawficU8PPE69aHPrhxK2qKydf2BB6Q37AP1u2sjhkPWa9v8XqLRXPJ79vnbbB9i9tvWvvF9fRXj5mXka4M6gv",
  "key17": "3y9UU9DoLXDNBzNSDsACMnrXXTFqbKgGqzSxHTCvm4d2hTejY1DApSPXggrr9jy5BGSaFPEkuJdL261cq7jonHf1",
  "key18": "4VsApAAry8hUWk35f3aBPCmrvjf7iHoDG8snBpEwHFjydjc2mNez17X8vLAYBRqrtvsZLbXRx58TnkEa95zdqPY9",
  "key19": "4J4KZFSbCAhGuRNtKoHfFrnXAwH19KaPQzDaR4hfM7YNpbfo8bGpDEYJL7w85GUKuoF8jHEuKnNkAyg7StB6qdHH",
  "key20": "5nqMUknJS91BKabENG8ouDedRgc1kZZACj1ZciY2UB2EiydE2JkSMAsPdDkTkf7UNHqQtdFUDZtWcPB7vkMVch9d",
  "key21": "5EtNecJ6EGckhrTUm1UrBdbtKoqry8n91vuPE4wyMvcgpNGKwF7Xk8Syo6VUu9RqqxyJb2gM2JkDb7NvFCpCVAVr",
  "key22": "5JgQPZWNYWEYjzutSXDbwpZPCHxWX1goxwa5PjGEJojyNL4QBoCMSdmoLvdbCvgAH1VgmtyifxNUf6azp2MoUDSf",
  "key23": "3AgWv7RSr6jjLHjype9PnG7TCB5yedwYzNRbUeeknfQ4N12QukxgEPeHbAuaJaw6kNfJVGnuxGqdqpv4L3nVesxs",
  "key24": "5Z634pYnrMb1jRCXSZiBgLdndEDFLE6o5M5MytdNbbooCBnQC1Ena1xJ4g6mcDp5z15uQLWUJGJE8SM7RTv3kvMx",
  "key25": "4TeSaGUxDvUsGiT9QToFLMin7386efyoZfuK7Q1baoJd3MxF6W4gN41xSvzLk7dhmQhfooeEXPiwLen2fcRSr87p",
  "key26": "45R99Ub2gdsgLYBqh3DZ6S1G3v5dPA5B9VCjPwY2ebSbVYFLsqyf2iSBfUEmtpzDgdareCc3yvbmWcFkWGovLn2w",
  "key27": "3S3qZN67Ls8rRtgqeRMRdJtmvuzGG1sCBnaYYvLh8oZBqPMHSDRgX5MnGRFpTXQhsh2yBsqVyAuPdF5LcaVtLFpg",
  "key28": "4dw7ZwcTpJwQb9maxE5jhBnNg4QQgxCKYQw1q57DY2y9zwZqGhTzBkuezwrdUmqW2ar4GUyviHS6SxE5LAa2KjPG",
  "key29": "4e8rVWYd5jCXHDXkhW3YyyLvTJhH2gMchQ7VXUVWkKgyvBPkxCG3Cy9JLAVxbCqYs6HMB696HoRnmpmD9MZMyTuA",
  "key30": "2iD24dRhjif1vnZtATPu4r5nyzqBCusqSdrG5VeE2Hz7vj8b4xPka9Yf83kbXXpBELag7GRHsKvUJWSUtESdZpPR",
  "key31": "4SgHa7cveTYGL8QhK7V8SXsDDFwAikVftnDA31VsfADNVo3Tfqx3jyaWUNCoEZprNsyaJGdenS911BpvAGKkBCXG",
  "key32": "28m6fTP9idChFx3GJsFE59TXKVjt1EfRcUwow36bXujiou9ACUqxKkjBXKku9aEqQxvruzrmhvJXvMV2eUJiwemo"
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
