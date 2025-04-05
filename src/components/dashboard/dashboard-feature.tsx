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
    "34tV6KoJRehmVijRoMjdfV6VRhuJXMhF7W6rQKgwijwoFWsnJt8LJ5aLJ7oWzkJLESXQVi4VPBhMG2Um1AYL6Yqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "353U11GfFNk4fVncHLdWtpM4zw829rkjQQrHJxtxBLki7thR42dDbNQwZY43u6Rjvb6EqQ9EQX4gndCAnjkxczzq",
  "key1": "2vu5maWznAwncfPv6M3ENWsxqimbmVbZbXG46r7YRskR5gcHNPLem9uAUDHZVSZGHq8GiVa3BBdEAHA8q5krSjf",
  "key2": "3nNbuuEo4mkM5qPvVcsz1yPoXZnpbWLReCZisSX5kT5Q1sXpZVrx4RPY3WYdZJJR9dZCiu6tteR8jEawmxg74Q1k",
  "key3": "6QHGuG4C3qLBBrrT6XKuYRaV9zUZpBVWqMkkvBU9Ld2sZDmDc3TK5wvnFbFxKFyDj71ENW8jpcYAxK1AaNshw1q",
  "key4": "3h2Vx4k1Hyt3zUrYTQCWHT5aoYycdeSDe9hHpBa78FAnJtJpqtD4hWqYixYnB2DcH1idLKJiex7HqZ263uitMPim",
  "key5": "5vaPKuWHfRLRqZ17eLQC8bGsFiuMp96shHspgUKxZuhYcvWH63DdHWbHCosTejdUoAfkU2pR2tM4aCLVmV63Vjw",
  "key6": "45yLrtZdE8Hyb4qqD6yDAqNC4FdRdypLuoVL8s5oY9EgH8Wzrev65RHwhS7EiVpwZTAA8TQV5gLMq4PMF2gpkM9F",
  "key7": "26f5Rc7KRoprGtZk7PCqTG9HPA7aF9dAkyGFXW7zN2gs4R2MhWgWNV6tMipXJLxH9UC62WsnywPjoJXU9qLVGyTu",
  "key8": "2ED6YVMvGBx6i67x3TRyTTVvAkkfTNkDEDYyCUBeFkMAvibd3UtcFGBFFmkT6Q34iJb58Bn7kSX8S7gsdy2NV2D9",
  "key9": "5iSfCRveBBLSZd1TNc1rSKKbFQZzuHv8TwcZk6gvt1u1q7bCmg1ZWLtTLN5KMiYuWz4APHGK1BMHNGHKW6NTyLH4",
  "key10": "5XuxbirdixkMZ1QYuEV1Qx89BWzwHtbtAQs4gAaviZbBQGS6u2omTHHr2xWE2DKBUQyNBnB36eW1Kt8FQj8ztD5c",
  "key11": "tYuKYWwqnAvgZPM5RyNxQRntDzBKNMDYGmvKyEncN9fB8XbjncqYXXkJYuGXE1jNnBCCPBTHVUv8JeVQidETt8a",
  "key12": "SmJqFeDbYAC14vqz1EiLNUCVL4BkPA8kS7AxD4zG4civURhzMStrjzbchBrYxCrQHfU2g35e8czBtiDpxxvRjwM",
  "key13": "C4RaUXZpJbnJdztBGwR7Sx9HtCmt7WTdi2vdd5yKPsNEkqqwdtpsX17QusZMHkBgBAcYYyYefqwRauudFkHiEjX",
  "key14": "4bY1FrTsT7VPdWaaKj5y1Fo36ephpdkNtt8ccFJttDyuXTzDq7fejG2jxpKagRWsMLJumdELPbbHx5d49bCKgmE6",
  "key15": "98ixLXdieLn48VRjVADeUCxJbg41q8n2CdwH6F4s8DrsiPoXi9kNbzBVbCLriswcbUQtmBZNHv3bzZSR8rGi4EQ",
  "key16": "4Sm4GpScFe4EKu1dBhdLPnhvywaTo4tDuemmqKRKkAuFd8jmM9ey6uz49B1zeZq66nF9rV76s2PzbGi5TwmXCF2q",
  "key17": "5KtG6xLSav2cn8HYYw6Tp7VHo7T2uUV9SdLgs7gQknkntViuxYAoPjGGdz9ayoujBgpJyAhwo6SAwgjZQo9vRQJD",
  "key18": "4S4LTrPLghXetbsRKoZ4NRtrT1v1hcbwfdfQqV4WFeQhDb5JczHsasNKwFvRt9aDwu5eNHuATYXA9piD92sKnpQU",
  "key19": "4nhnpJ4un9A6fJv5DksGWfQHVZNphS8KG8xbJkenXDf349fUKWuwyvRNcEXNFaovf5EVh9HPzWyGV7mur2oHG5E4",
  "key20": "UhkVnnGM5RCjcng6cS1mNrvrqF3rCC9yXUNY8ovVfwUfihTEYstUfUsz4PUtxiUdppV22coLEBzLqCkdjwQZ1MW",
  "key21": "qXqVkuFKRhyi55DJgzzx8kFdZhQedEePNNzMinLZ18PdWDLTEvkjdbu6HNxsjx9We2xm3Xz2PLEjdB1KuvDE5ht",
  "key22": "4KviKz6EpQVf4d7M9rEmqw9qYN94fTb47MxnE5ZhnaNmyNsBYw2zBeuiLMYsgXujhF4Wpm8dracxM71ZPZBbKKxg",
  "key23": "5YtHfhueztsKwCXdVLA6FBLitGJFbjZifxBq3o4fwe2TjZwMXa667YPrvMHpuLrUJuXKP3oVU9BRn78mr9KKtPUc",
  "key24": "ZANobyoqPnkHATA9jEvdAgYHVj7J4PyLg2Ep2fqAcZzeDqQzYCvecHaqrxCSRKDGxeRUgqpPd6RfMsNvZayAWmn",
  "key25": "36XjH7HFnm1tNREM28V33ukFX59ZTdG68iqezfs2PZAPY1roLo35g4YgtrGjuUi9TZGWTLR7EriaW5gYeq5PACBY",
  "key26": "2LDUq95wGkgTuMZPWBQqaXtie5PCKSkQJPA7iREjPGFyR416NUHi8Fs9PeDWMxWMdf1onBaa1gf83eySMixhvh35",
  "key27": "zgZjAn5UzkJah2AFSUXj46akHBgNfK4EdPnGt5VH2NDSPXYnbjgNR64avpvWQH3aH8K9BTeHJc2X8e4yUQAEUeB",
  "key28": "4HcAyRM3Cbbn4UDpv68eVC5DZnHSmrSKhSBztiygWVRTGmrmDvmWZkKUs5Tprms2MLha6v4srnm7baTWmkX5a7EV",
  "key29": "35a5J3H4jCqdPF4SyVqc9jBgEJcSa7B74gdX8bUHLur61UwcNbmmdgALx5K7cEh6GwTBYgPwfKgWE7LpgGoWnkzC",
  "key30": "NkSVtFHvoYpL75L7gNnfu3wxS8sa3uxS7cCYaJ43xYSEzqKu7F7vskMoa6nWVmgfRt9Nc9w7eQqsoUrb8qXSMjh",
  "key31": "5KxH9byYVS5cpCSTQ73w9w9TM2fZyXPxM2N1D55DkA3SG2Z8i3CQ94naxuCXt3b24E5xzDjowwhL86TDSSubtYBt",
  "key32": "5bJArJhskx9ovLX32cLv9E8RhozbHTxE2ADo6zLQRrHsBWVsvy5GoM131ekWV2vGvYbyjEgSZfYg3eVNgouFBwqc",
  "key33": "2TzsPF6CTnVpQYmHz983qRBQe1oZYGDHHknTACcMGpAcoYwMAyZ5X17s1C2RQX35jU3FWFNXGu2rCgHybHat3w3C",
  "key34": "3XdA7kcAvSxRLr4MbgFY89hpkzWtWPoT1Uj4t8Q1dxak8uPpvjNPAvkxd6LTkx2UYsuibN9ETyJknExkcvURU2Nn",
  "key35": "653iydUr3Gm2C1wNxmZRnJrH2bpCofcmWdhKfiZSsNkc8F5TiDaqKDbcAoWXW79LXvJAFPiZMHouNq74sf5uoRs4",
  "key36": "4qBn5gbm3jxE8c6aUvruN8MTyru3dSCAHnyL27ocaVcH4xBAv5NsUBjeTKr64zAGKvF7G4CLHBiJRCRJtAcUnpay",
  "key37": "3GVkxhp5TAfDnbHGdy5LSs3Hz9XMr6bB5rRbxCjmxTfFtrGffMz5sE3vKUopaeS8NwUKfuo9WscNaNNFnnokHuS1",
  "key38": "WJYbWsFxgQZ27WHURLiAdgBZfUUgURLQiSPusJrKp7W23z7XqbS1FShQ654qZDTC6omVVPHDJR21hD72wEpvgTY",
  "key39": "H9d9bqFRr73CcoDdTQZPSe1p5bvdejmmZggV6bPcpQnxaup1WUFdXgHVABWyZ378Y79mPWVr82aKXj7fzHWZSAu",
  "key40": "3WpZQyYZ3QqSXpZzZqmaGTrFbhBvxBjQgLnDKxWUcJH2NC35P3HsXp7sJDECtNCLcnwQUQodKRt1QMdN5rQVYwPc",
  "key41": "2bjrzgAoHpZq7uMyNDJL8iew8vMTepmhYr8LyfK784B85SRuLobkWWUgkZbyAsa1hgTXTQKVDTLMS9cTKjmd8h5w",
  "key42": "4a4GuKNYLf3ZAgg1PoeKHxPrcaW6TPhZXJFPky66LafDXWRx9rEqLdd5irhMkhXjpXR1apwDgs3z1PWCDGVuXTsq",
  "key43": "3HpfzDKWYEpE7U8z1HLs5XnKyyRhg85ASnLo51HxqLpAbFvfzVuTW3XxwjEjA8HRUdzSUq6VgXQHtD6j3rmWizzR"
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
