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
    "4AdCcTckjafoGxF8h6319E6BbxwQnNJPEP6B4XfPwXuwDiywdWwqS6RStUhPSbbWnYFvgfbtiSxmY1DCRNDxDuAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQYN1MvKRmzL2x2DVptzLNhV1BHnUqXnNoFfpMkxsZzKrt4oVu33qoxPEhKb771zpy7UGmaMf5pPze5XsgbgARi",
  "key1": "iAXxQQ5S5cvuQMz4NwKA9y6LWjGBazxrgj8xGzmzgN9Kr57usVw9ByGXZeJ4KS5vQzzTNaZzJ25SXNdu1YFrQrD",
  "key2": "2EgnxLkYXS36LhKXC7DXsYzrbhs5RtjEdntsCKNKpbc95wZ5Eu34x95fWLmPcQ5bDjXtknUnH3Pu5Nz1smBaSNLH",
  "key3": "2aeaRBeGHjHXR52PbY4iSVzvYceCw4KX71DX5hd2MYzFWX46fmgWvJwFPhcFwwepLv6SCdqJvEQtD66ZT9oifD8Z",
  "key4": "4FRfz6SSpu9dMYe3CyyXc4Eu9ZgYEVNsfzgHejJQggK9Zyy6daLc7GqvguRaS9Yq3g9oeu289xKcBxytioE3E5do",
  "key5": "2X4S3ARj1jhQqhKSiKMPjPU4f6XiuQBz7CGw2jdevirjrW7SN2QCGAJJi1nQ6JYgew2jqjMW2oznMCEDSN384UYQ",
  "key6": "3jcS8zNbMSEiocAjb24HzUPa1MBtFRbyp1B3r4Ez3pNA7w4xzMtBPWxnASeEZ3N5t8fZFGTPvqo5GyCgpT6kXGr4",
  "key7": "5iPucJ8JrydUkc2z21KJ9eNAXpjF7aJWLijdWEEDk2QyXE8U7c2gRR9zwZqRHuBqBkV47JncgwCoyKpGt3uvASwu",
  "key8": "5iS4SbEwyTJ4vJJLirU5YwPsbq6JYwcvJ27pamEvhL1qtmVo4bTDKV44dfZ13LJv8U3hFwDWYXGYtEW8kTJvVid3",
  "key9": "5wYjmjNvk4XotQ1r7feqUQ7bMtwq4KXVwjJGHAm9p8iJzN31FtDS8wi6imxHS1ViGapn6GpW8qfYLNzbknWKKFqf",
  "key10": "4fucHSMJ1YevPvHpRUbbAUPndmQ5qDmgCXmhEdD9rCDvJ65di7kkRqjpZP4X1BbbL3QqjNJK4oqnGnZVfKFKjAmJ",
  "key11": "64sgeEDA91azmAA94i8HmLV5LPhCRvP9gRHJgPatnwaMs75e4NsQN1jHjDSvvPDqPhJ9kY4rFkaFR8o4RZc6QezK",
  "key12": "35CsC1qcmu9UhsAht9ViyPcZs7kBLs3N6azWRAyfHMYgVRqiWuciNPxJkY66CD7Hipn252WLgAJt972ZrMfA5fE3",
  "key13": "48EveHE317mYfyjAR3aoxagfU84PZriHzaHwhaWhJf89Sjs2PeNzkyH5b2ptZiGaj2QCf42bjEuoqJwbuWa1K2HT",
  "key14": "5tRYWiKqYGSD3qwSZFsFeekthg8oyyYKFCcarifgHv8h1QhN4zYAwqhNf5qd5SxXqonyhBs7H4DkQpADBbE23sn",
  "key15": "3wvdAEMw4hqnzVat87foV4zrPRT2YrNomLN4c651ewYAUoFphWTxTdeapyv6fuAqxZJWGqf7fAVdfAFBMxesCFJh",
  "key16": "4XjBYrVxUoP26VDcr4bRSGD7vyBzz1YmKE7BAJaF3Req5gCLkMUo6H5JbTBAdVUPu724dGz7bSG2KWUVM8hEJ3iW",
  "key17": "3E9owerPmvMQvvmbiXKNXJiwJENY9kw4bP4zxqVXzqKxR5mSrswGvmMSqTcDLPrghvPxrqumtHzH7RPSjDUU6j54",
  "key18": "5EkK5syWW6vSHNjU8gzevDGjTHFW73uxsWXuuoZpgSpgMENwryDrtsEXvn6HMLdHwfQMS64tFAVcjRm16iPhh2MY",
  "key19": "cWMZ1MMn5dnV4UktGAZVXe2rwjQma6NApkFxNmqAvWfKxHkvFbLo6nnaaKwRTdTY424nANhfKyDK8NJYiG8DCDH",
  "key20": "59PGb29AhAfziB4p1wADKYwRaDoiWiFWRM9LSJfje8MTs7X8mMVNrSE7zjhRLB4Mn15AVLgUNecySpVEmHkUh2Bh",
  "key21": "3mUcYMZdf8G53t3UUVUKam8AgsLtvuu37SNeX4nuhAoXtgp1uDPFEyM6umUszo7SpdqQwVmzfrnR1AwWbm7HdXdD",
  "key22": "Jp5bGxnq3PY7SMARWTozkEDvqiFaTJSJG9Pg3tGDrtZdDEBTnAPkKUCsB3GKsiehqVtxNMwb5agMuKnTX37E6nt",
  "key23": "PUqUP13pWYwtxVFbie7BDqdueFEU2zY1AATaggfjGeDucR2P6HVpVM2aLHHwwBjBndSiEc7bjo4RuL5w37W6Rzu",
  "key24": "3umZaRj4FKWsw3t9rPAQYWSA1eSAQVQrtnNjxczSczVWSBuvcvZLNyjx39pyBevAJF4NhwT99SdbtqDfXwAgM4yH",
  "key25": "2K4j26mfeNo96Fp1C1dzB8NNNxr4NaAaw33ZY2TtnjRaiJpSSpsvpYzssSN9GzgnDLxJsmfTcEFhrjzRKyaY7XjC",
  "key26": "44Bpg9eoXRUs8xER8XiMdqYnGkYx29341t6RVhTBp2W8DQo5mjWz7fxVew4eRidshZLxHQ4rWQLxK7fXEimfFvzf",
  "key27": "5gbK5zBXvs3UYR762fwm3WUYEyzt7GNTv5hyUVNNCzV5DoprcqxxswquMyK6gfuQJs2ZaKhiK9BFYYHDgzfyDeGS",
  "key28": "5SeLcghyVKPEdvn8m7Hnf8hiQd6PcPDgJ57bJyzXquWHGkRKBDusFN2JYxMxeKKj5rPS1KFfaXm12Xp8vCC2KYA4",
  "key29": "4J4iH17ttykYSYF1qxUXpoqi7ougMXmmpMRSUo84YQWLm4YaFMVTGiBMctUTGBuQrmEPQ8a74An1J5JhjgmeoziU",
  "key30": "42eXmzDaGPjLwL5SumxuH55LYopPzJGWJyvv3RtBoktpuuPvgkQZQBSgmmZfkXUFH7pqSBwK9Lax7CmiEo11KHBh",
  "key31": "5umB878JmDvCdTezgLLLXombVPDnabZiTehev4B6wFUwzaRSyDHXS93aJg5sd6WSsH5PeoC9MZ4jhNB2sFUA7CTC",
  "key32": "qA9W5MTS3q8Rt7KCRatSCbjmnMdCkeh8qTgnCfvSb1G65G5zHFC4dkcje2Ws1FYLZtN7UXVWbodLqvmyoyLMu7B",
  "key33": "2DpxJXv2shaqtPN8P1k35HPeKGjL1iT1oqUo3DcWGDeynYWnhVWM9Yk7epjrkbAUVL1ZKTVhXfBU3qZeRjcWsRW4",
  "key34": "RuabJXnznopotcgYiXRHiD9GtFiGPTzvS587yLPD7obypQ4Bc5SAntw71jWdJB4U4dQstGaCZZtbxYokL48DShG",
  "key35": "5FTWjZJEQ2BvNhCaA4F3HXhjh3cC5j6d7Nyiay8JX3kWbQ7EdA7hnJrJysecaeUFSZqCdj25op2M431ALXDpyEDr",
  "key36": "5tBJP7D1wmeiUYosBXdvYWQ9t7RX3r8dktjQnnoxvwGFf8BWy1YpCFS4s9nLwGXfuvHMU2LXmRhD1vin2Pe6yRkr",
  "key37": "589VB6mYs5QuTeNgG1Y9ge7eHPdnuFH9NtGF1vqXy9M39KyUWzQnAh2TLqze1zoY9RuBsduzecGQnYL3mQrpQP5E",
  "key38": "5GTEaWENk9t4gsLnYdq6MXMKR8VKBQ9b3NTrVhvDyYqZJCrXGqcZCRQqtWV9PRZjcwsvtdwrWCV87Qjb8f194B2C",
  "key39": "sjnNvFVbE65cC1SWiYHa7gKe5NHJsDmWPSNKeGxfzZBk3bBi2xzbr3dX5ktWqdAFK3HhjUaNisskiY6bjEYmuFp"
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
