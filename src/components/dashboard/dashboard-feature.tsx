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
    "3mBvWHbWpP65fDLrG549XpfXifa6jiYpRAaLMPPwZsVnGeuX2pfaZmKMhYhJ8yirnNNkBqtErhXDULMU9xo8qSv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WxtErr84e333ndKnR3rjZmQW5EnhBhfFZaxvqZqAVBYxuthakDwTwtzbXbnGJFe72rZYzq7FsBvQ6ppYuQubMxD",
  "key1": "46mRYyvxXrNdigfy19P4K9CgFQ1vNm8mKpaMkLf7UQ2zVxSQoFEj2DFXA6n2TmgMaqiWAgqrxvar36amz1BMk2Xx",
  "key2": "449uYQ5UGiBZuajwA2Dst1NPcQYQybn5oXXHsvM83mTvWe9pXoPuBwjkz78M9v6rY1ADxETMKZ36wGYdEuMadrLQ",
  "key3": "2Sc6atmQuHbLJuRA17wCW7ivbmmaYk6fEMKCDxZKJwPabYzRG8B9qqkXNpqeYBhFwYVQz1Ka4wYNxPDVhMNeLdsb",
  "key4": "2FmGBaEiLgcPpxFBRfqf5ovwcYwAP2a2RR6XKmZUzcjsamMdxcYCohTbvsTyesbkWijZ7B9uGQ7KaJzAM9mw2gMA",
  "key5": "AgaZnzMCMReABnaXa9jVzSfkYVJSC3xCbSV5sZy77Yj8JG7ezPssXarMi6jcpwLUs6FQce4xBQtQV7yFUFqVfYn",
  "key6": "3L5HPLghcvVncvVLgfSXT61XiGnb9HgGBRotSb9B8hWYCgkREyEfieRrQkJ6JBgLjGWPSRmKJEYaz9SqQRxeJqu9",
  "key7": "56vXVV1U3AXG6BM2sUXcgLm6iZobrCtiNy8Wpk4vaG6oZe3SVjJfimJnYPZTd3yB3ueR1oSsiAjbA3jfdQbnpGTk",
  "key8": "2XasxBFh4ro4rWLWwCpcerKbMBGxAUGf4pCZfDrKX93DxS6LEkpKNjq19pcftD96jtc7Ho6V133sn1AXDyqEMENj",
  "key9": "26Nj4Upr3ALnMTwkSP9bs6UTTtPGfAJJYZDmZZRsGRJh5FzcCJR9TDy5EfU8PdTdJJBKQe8e3sF65askonboVWB4",
  "key10": "4sCCcwCyLqsjdVivjprn1o2tkVVmCqojnB7uAzJqFRzCh1d8gyqszNsojDLct81aJBTc5pdUo5pUVcuDVzASH6xU",
  "key11": "5qbbQc8B4vDusJrHF4ktgMJxBkuHLzF8yQ7CBFWiYZgyLgBNXopKLU2bELyq3FHNXR954LRj9k5FZVPARf8XY3sm",
  "key12": "23GgMYctcqcDimf23tAjtPxw16viucrbifAgg8uVLwFxnT6Zk7M9kqEMFaN7Z8UD6PEVBySYvB5d43Zd5bedPKtb",
  "key13": "kDcvyQ2mccqthwaavz6UFzXnFMPV6VvNMhd9fwzsbcGVC61FCXxhBrv9nRuoC5LhWDCJ8EiPTR2h6xcQ24qcFN1",
  "key14": "4UMDjTStULMMDHgNUD3rteDFsTtVvbMSK3RpquCzwdp8E7zTVcg2aCXF4B4N4EJ4X9L5q72Zy2cXD1pcnn6NnprD",
  "key15": "AsyrXbiAFHsuiiXXe6JGw8NETK84W8pXqbeLjRZQibiYdNJ1VtqEZtdTpBiiUAxmMd2N9pWAn5fukmGENggseCY",
  "key16": "4tYzr3dLmf2NnCvLpfkRhMtgciqNSerTH8PanyCUuZqquTYQxXkPttyDxgvXq6tqgubN2EgnjnfKB6ARfHkVu2Ja",
  "key17": "4pAFuEiZBi18PnLm2JdNcEJkP4e4PBt5hxfBhjYTRbJFygP1T7uuEi1Fj9YyqNtiLfWx332SMBrsFDV3iNwVW3g6",
  "key18": "4BQfivNtBt3RSiTESVSRqGYLFuGwCd5t1Sn1MWGkyrLfJeTbHbPppmprp1SmPQmA1dBfC22uKCxRuyd44bpXJ4e2",
  "key19": "2P5ZbkBXAun6UscDs214P5cfVP7nieQ7h535ErM3AaapsW3GhNugu4T8uWeGTPVnvk2AC36YdUVHRYz6QGpJoTb7",
  "key20": "65Ht2WeZhk1Q2Lz1YH3g2WwjKVaodJbCSuNkajDuQ8XxfTYC9Qgb74QEHSjVsR94dvwKW7sgUYyUoHYmxY5NfRx8",
  "key21": "4ch6NVyR2vsoSSwESNUsRTQWCdmWJDmKhminycnC46tfqtUE2x3T2dHhFDnR9su6TecTkk833GYC9XshSf2Bmx8T",
  "key22": "428hC864HnS9eANZyZxLo3BMz4TFWWqoxPzih2eierAuVt9YhbVkJNdYz837UY5yioJxYtRqc7Kzw99s5DRBRQPG",
  "key23": "5sYwwnvDfrGPkv2cv9HE1r7EpUHENY5zCRNQxXsCQpoHvuDMCAE63Bks2Pq5jtdrZy9H6oGLknPuqqMafFhcFp3",
  "key24": "2aR5ZWsKQuDNtYW5pcAunKGGDSgE9VRYCvdGgtR7XapLi1EjBtLBUYEypefmGpjj1vJdYHALQY337rXepfYngvPx",
  "key25": "61XgFh3viECy3w5iknqdxjjBkHoVcjDgMYXnRqEfxwCcWPWk9mN6FPk6Pr4MzJHuFoQJneyUCPrYWgp8nYwHuDQE",
  "key26": "55ra9xbr3PHg6JGLPV8iNPAfCau5KsLLvtkbwkZkZw4ZCxnF4QG7NSu2mLyjpzwxQqkd5dCZup2xcoypxaoPEMao",
  "key27": "4Gn1ShbY8NwaKsmkb8pC4vxXfYsPdBAuFZuzANgBNALJ9zNwxphH4ADD5decgxb99sJCoRMP1jryZXB22ha3yR9X",
  "key28": "2GDVitoT8uPbyXH35XHSMK8MDDAKAxVxcHSTq5DaZK8U6WzbQtJvvxHZHFmym5nkBAJSEKj2s1WU1cXiTgyu2SjD",
  "key29": "2bXgFTxW1j72N7AZ8NDJo93bAuiYsE4Ud5eR7BeR6EWgkJVcKGpvwtQPow4VsiVzseAgaKpn2WcCPNVgWwjrvYX8",
  "key30": "62mGZ4tEaraR9pBCPtsiic2AexhMRzZbTeKNYoehYhSCc2SbtCKtwGG1ErrpaCvENdDiohdM9DcRnUCUPSuianwU",
  "key31": "2U67Jf1JkzQT9RuHMhVWS5NeQ3E4SPkbQCbiqRSHgF1VFNH5wBJEh2ZeYLe6Mer6hRSFCgbzAi6sd6WTeQEioDdc",
  "key32": "4CKMpY31BHumPJSX6gy7z1WxzG5G86qMS1dm2rNcZk1gutnqfsoFYqhRyhMWGHfkoR7n25qQm3vHrnVL7TrF2ZHt",
  "key33": "4iGRERHrTZTHXLxPs562x9peQHFYaARVd7tPT2H7ZqdnFUzyB1C1cYgMxcda5RHVi3NP6JfQGeqtfWyrWJmxLLMU"
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
