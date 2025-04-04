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
    "KxBBvemSNH5w43M8Avu24MEC4dnMMKP7ERYTfA9QNR9vGAz8s3ncWU2Tb9YQ6LeNDyjHSyLuTEGmEgWaTFA3utT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4tDtQW88PfohvSebCq8uXKzYUP7PQLF6a37E6DV1E7wEKXpUt9Fev5nejkNVphdHdspANAjq9haSxTnqBfGxD7",
  "key1": "4c5raTYk5H97MbxkRnQMjzvBynF4gns3kuiEXSZLobCsXRoAbCyipqThzZ7qkr47T12UUCKR9B2UKPsopevY78s7",
  "key2": "2YwH3SuLaEF4zowGfCob1k8WkUeh2nyt98PETUEUEkv8vFEfeYARi1NmMkCPS9EayTuuKsZ8aHszmE2PSkERxKR4",
  "key3": "G4AsnNLj54tcxenCorE2bFTpvfnJpCwAgX7kvdWTXemyT2s8sWSb1AbRGoPvTbotaNstk5UP39tncx6zhEYxxg7",
  "key4": "4CrjCeCRRAdDErKPLSrt8KdzbZhBicx8mn4zBk5xLhPNjSfrp735xVBPHaxwksfFHcUhVYAMtm3iU7beEgZKP8oE",
  "key5": "4v7WxLCJ1YKpiSnm5cg1U7m28f94RxggqGGWs4cqEGeZyNyR8VVQ6TWEoajS9W4HKvG1pH4QxFqcNtBEvWna5hzy",
  "key6": "4gzU8kvS4pUSqjGGpiuA2rVA6ZRnaMdFgNAYkuiLdxGnTJ6JikvK4Hz8yuopdCxa8zmRMDG4zM4LSb1eWT1G9d1K",
  "key7": "skF1tZebsdF1X7u1bGphBRDXq7M2RADE8W8xWYJE4FsJ1pHuL566EKa4rvP7uziLXjdv9Pwav3DehS9jbM7NnEL",
  "key8": "K2Jrt6TgiQPfqDFVD78VSroRwzzwxT7zP8tauBA6oaZnjPpfc3TVnEJi569tZegS1cQQchfNWQB9yKHc1P4Nch7",
  "key9": "2Lqqc8jxr7eEdJDnu3gjKviTJzucxx8cDuNqD29cgNxA98dtenvgdndFBumgiyVxXxSfKHRdY5rpjPeS7dkfjzsW",
  "key10": "3aA9cndSsWydrxAog4zGGqWh2E3uCgbhxHpmRzzJPvy5pxNJjdji1LqzXDYEZLc48xEFQwvQ4SGQnQN6YSSyAphP",
  "key11": "3qrMjBvrUnXNUHSTttAPL1GaPcMTqJZZErjhxfCMdN73gnjnaBpJGczt5vZ1yBj9rEvv9oCYRj2WuZi4eGY87RSC",
  "key12": "56dmPUyUK8woST8jWFqKQM5J3w3pNsijiTgaNbTC6fGHAFJAmRXVK39DmfsTnCwV9aptyQrYSrfYWy2DDAo2rUBH",
  "key13": "9tavRGFAcmKVkRZ6BZ7AYUBrGBL1z6ugy3RLdSz2pPtXdS7dUzPydfnu3kx9UFuhEHkuYMnwwe4ZrdubgGMBBTN",
  "key14": "28Hs9Eu5Kwcr21UaZWNxEXi2C4dxDLq6muiXsdn4GL8ki1Zf6MCxab3fWyWusym2VcHmCC8KYzHuVSyzzmnkmpp6",
  "key15": "5ZxGjahBaRpYFerPdXHBdw6o2QA27erG7dRoYcjnVxtW9Qi1TdXkXzh1D7ZNpzYN1NU4yzKGSTPCnRxiSwaerKmW",
  "key16": "3rFHXazJ8yuGZbARLojvq2Q16jPrJ8vTSCfZaFEaj6m8tqH7jWbJhjFX8k5u39EWBw1u6an8iKzQghyyafSnMzXC",
  "key17": "4cufkRVrBHnUqN7cGyMRtj9Yh9ofDvptaaX73s83a6dQVoVYfRjhx55yRbX9a53HUsmkKizeFsTbjSJA7tMzuPdk",
  "key18": "5XKGtm9foUaDGjLJG8667QLWU4yRCNvQRpG1oR65bSZwN9jcJQcvt2j2gKt3a16qj7fyRr46mRjwSc6Cgh2aTfSS",
  "key19": "3cE5YZsi4Qe2jWUc4GEtwQN25SZskzf7B566F8DLJGGJLjHpcRKRSr6eHt5V9FbPk9jSzn7NMkD2LBakZUD5riRo",
  "key20": "5uNcphrtwYrbi1WfRuKrFERGkJ8yomZ9VXhKNjk9fARQ8oDh24kvbcXnA5FhNpr96mTWUovTV9M1sSFEsrxhDDg4",
  "key21": "5aRGqPkVbxci3RfYvBEXmH3LhnbGcFGg3yjZ9a4QqCHMzC5CkudrVkxZiatvesEmmkNRG9bt3MBAjX37JXh7jJeC",
  "key22": "4RkURWhBKy9F7Z9hxYUhY5QH2Nx16duUA2MnhaGFk6NK5TeBDZLMF9AUNs6NTKSFmn777HawcF8qJPHSemjFGj4d",
  "key23": "4izKpvkcfojahiHjig7sdBZcAB9TpgeTxLsyhiB5oWYfoqtebPPNCqmFULY7TQarcA3715RbB1L8wpapf5wrcj7R",
  "key24": "5XExK4hVtzwF5jNSaKfdXT1CGoPawrea1v8QakG598QuFd92j2gbqXBh2TBa773qv9KAxWvP9xd2BbomzfrBuyzA",
  "key25": "5zqXwnLexwSNTzhyxJMnCMAKcpZHTzWSpemvuLpAQ5iAYuzwdbx4oxhfqP6eJypYzff4TeAq5MkqqA6nRHsdonsm",
  "key26": "4cJMRBpDtdHf8h5RPpHjRxBdBqhw7wH4Kpmba1kEK5CCYAxJKakXBAZMnM9fRHFBctuhyGTaZGDSy4dKdHdBgwnM",
  "key27": "2fsNe4VHbz5GkegGc25zqSErCmi99B7HsxywPcsuvrV8vterhoMgdbGHtgDfbFQEEtvGpU31XAEEmVPVssxWAfCL",
  "key28": "3VbpcLeMX28YXp1VW6b4PyQe7ToFQha6Ro85apXLYuMhU2ptZ6enCRYWLJqy3Ex8Ps9W3Hut9PdRHNGK3kgvLHAQ",
  "key29": "9m8Drhjw9MCQat6zjnZfKxXpVMdhE77JMR4ii17G7HdPjzoNDP2UbwKPL3Dgp7RfTep5j24qTPfd4SGrFaNsMLg",
  "key30": "5bokkhd32NFfooeuchtqdSvFw9BxBdsT77DMncMF46DvJ488oFrMCJqMWZ8qwwh44XySrhw7Jn5oNGTFeEJg2Unq",
  "key31": "52CAcjbe1QaFiYTZ3iv8bpbNJa5BbUf154WLrvZLyujxUzN7dT2UAD985YHHFBmXpBycqvUMGDKhnC5rLiyiiPnA",
  "key32": "3TUBKFGNRQ9GhJAnu5LE9vCGFhRR6AW7jJ2FrATpqLP8MZwbczq4XJvRmYfzKseVszCpABbUgJx71Tr2WEcPkNRh",
  "key33": "ENss914gLw9gR82SDGsrF78cw7D2fkkB1xzdaKuYx6wsrZTrSrquxSdb7Mptcrz551mEYipdVwTp3FtdNatwf8J",
  "key34": "4s2NdwhLqNjS8SmwfJDkadxomuHzXTZX2CPsuNJVk6LnB4re9MEpVoKeekxSb8wmpgUDKBMQGCRbpuoqkntijp1S",
  "key35": "2A9h292CM78ECGMtFHjnTemt2fH4AADKeW3UZpELiFshgoQ2d381UiNDALs4BzWtxrTp47yPno6ohnVEKyAMJ93W"
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
