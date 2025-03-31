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
    "5CsfEteW5gP79wAX7nRrDn41VwRUsshgC4UUsDFaSX9SBedpWuopZ6cXYDsasGAXHDaYuXKkZVmzYtME7xyd6kA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyrRVajeT2oJuv7NHG5jErBv3binmGJefzz691WAcjr1obEwwCqLHWKwDeHH8VP1CkcG81jLdgMJxUPZcCKWWfL",
  "key1": "5EjBFkPuqk1Qank5CkcqsdZ9yhjbKy5uXdFuBxzK8ofpgDVYXzWtc3cbvVwfudhxAy1yyhRuPGHMkmamHxiDjFM3",
  "key2": "uiVU6eqBdrtG4uLkRQBwg7yMRUjbmciKREBKZDWexaakd5UVkKVcAtCrvJr7xmSvVoagct4nuY1dGvw8Ywn8mCJ",
  "key3": "27Nzi9DwhfApPYMoJeiriVwz8W85DQVuh1mDhJJQN5gZymVShYNpqJmBmHvXFzXi2r6o2b6brurieuHNfi36DaNV",
  "key4": "2cSiTZbQNhwwnne1jpN7Wnmu6VdQrWRBsQcCmYfAyNkRW1Dsvo7eiNACpV1bp3TXxFfuNSdtHomMMfGibu3sU5sW",
  "key5": "3sQfS4CSWuFDNvHJJVAU2Tqyn52Fe9e1xkF4UzmYttX1YQvQTsxKv2DkL64r3EFnWuavHUBtmAXcDbKto7932NUC",
  "key6": "5XhX51rCtCD6TEfMfXkwHWorUX8B5DrhPKNm2HgBMMQyHEXbdMpTkZ2bWNXkemMHyUkUewjBfAVRxL6GSKuPTky6",
  "key7": "4SY1dpiFTqsmyRBYeE3DAMxh68LFrN5ig3MymLuJJCHAb1f4FAgAh8xbR26sLvGDDd4phsiLuiuuY4Ehsb4bTXxN",
  "key8": "5FHw2AwHTY2bWHrZ9C9nFXisb29vQeQ6rkGF7Z27ZGrBXRb12NGD15fkkKxxPhhsJtWnBW6axGk7tmWY3vqoZcZ8",
  "key9": "PQfyRrweDc6wqMGUGg92ewGhyneFBA8uaAcFqTMKSYe9khQPKB9GCiDJxMwu8aBntoCe6UfcXy7SsEMGweT2QDo",
  "key10": "52jk7pV55G4vx7CAL6Vegz1g12Qfh8UKCbHCjTj1VoJGfJDovF2e9VUmGGGt7LHA8ngYC9xMBqeDK22zUgdfMWpU",
  "key11": "nQN2bqSFhNxnBRm4yYCuc7bCuJJncwtACiuTPwbdogujMnqvGpH8NEyJYzJeTKQmianDgvrDGJNwQJXqcKLJELa",
  "key12": "3ovQQZQG9Pe4yTsyzA84cQd6EuW37TaGbDrYGZDbBKRmeFvkUbXd29eh6GSYzn3BSmeCaPGST4CsxiHRv4sLQPwP",
  "key13": "3Aq4ypvdbKfpJbRN6A2Wnh5ngDviMkCW63L2UKfUZsNb3kdVVWWrxpWfvXcpLbkq5fG8CJggsxm3AXpx7KRBDqZg",
  "key14": "4g19c8gwdQ2HoaRvL2qZJJ65jW6XiA4GyjtD22nZYGjhqtLAw4htJPhBE6YbnFVP2MryiXJJRem2XpoKTPWJgXMF",
  "key15": "e6HBbBa1fDskncgqwkT7LVDeZQX9D3aQXpJyTbdgLBmLq22EbxKfYrBHSzFCYxXgvMVQmQwAB82vcc8jJk8Tywz",
  "key16": "5TUeTH9pNwpbxvWjg52NGe43dYBspdjm7ctHhwnVNxpXW29RJxWWYySqv8m9VnVKfpaHEYfKbL1nHotk2bZFS7Vv",
  "key17": "3TVABfkCEPLjgKMsmsjFvFJATJjirh4UaX3YB9UUvWb3PswKp8ab33HuRJCR2rikTxiLM9FvGqAg13gZdSVZ9uxH",
  "key18": "59o22WCxrAoJ8VDc8GPwWLLjdYexmmS9uRmJCLTASWHsBkfAir3NLbyLQYisdxbMfbWo3VAViYrm4MtXm416CG4p",
  "key19": "4GiHNKbkS8J6JuD6tFFWzgCrPwAgj9ZhbiC67EV4bRm64j6NieYx22VV3dph7PvKfTxxUMhimi5pfmK6dmEGppEc",
  "key20": "Q1rtMJBNcymCE4UyE2nVq3oWZ4GUa5Acrhv8khZM9NgeJB5nidBLCvA8nz7EG9Jt9j19G5bnRCfBYEzDpqbkXw5",
  "key21": "4hkGFE4N1xfXBzDLbKVqLLEtgo11cJZ8J6Wv27tNP6Vf5hgmDPMkcrncsXsoZCxn37TYNFbrMYZGy2RZaJDrXc6d",
  "key22": "4BknU1dL5qK7nwv8o1cHYjQvjRZAuRtD4TqBk94fajFtCWCMyUuF6faibtAeWUaRJGjmRMVNWnwba5xkGBrupXDK",
  "key23": "2kZfqnXgmTkHAQB3E1KDjzAuuS1j5PPgKiD1wQ5gvQGxS7nbogoWoFhhcL4TNFspW7BaPQb4n7kaoXg31sz4qSqJ",
  "key24": "4qbBmjtyjk1byiiHpCakAEFniuuoi85xCBVLzfno281zchAyGN2Mk9X1jnmg9nP7X7AVX3ppwrorfi5eXBDPFS4J",
  "key25": "664X7shsAvHuCRsVNYYywLzSdiNGgzBtMnchnJ1Vkbrf4cHYYWx3SeVbmcEjHSAMCWvTPimYSyuJSsnvZiM95ors",
  "key26": "44fASYKyBNFa4y2q6JtCVct5zfiJukx8VDn5KgkZh7mghQRtW56jyU2LgfyYq3oHAq2cK1hqTQzuJUAEj5H2jWLn",
  "key27": "22YSF3D8JsLoBaoekcdnYsWVbpTAHUTZ3vpMyTkipAKvVybxnSeiw5NZd7UMbxwgMCxmr1RojUpy1g3jHLMrvCNC",
  "key28": "5ypgsmMJXZ4ETNNEcgbNdyuv6jPc3PKSBqfap65FSeLJq9SsdrRFd9kAfKyH2S3vL4nVPCxxAndaNCq6vNBXLaUp",
  "key29": "5Z86TuX3mn3AP388C1cZ6sYSXfmmRVTD8SgQd5d8PEGzQeQyznShLL86ShVz3WLMgbz1gZ9ZRTvwkgywZ8y6MQ94",
  "key30": "5GiFjEmyznVAUme3GdEXESiPw28dqEVCQt7GvjXoAPQVv3v2aWNj8oDpdiBXKSvNot2W7SsaWNDiFgmGypytu6rg",
  "key31": "419Y8632LZ2f5yiLrdv29Q211jWpQrG3PYV1Szf9nbHpTxxKdKchBGFvbGExEmCinDwHkRYVBGycTYBJ3gMuxZyx",
  "key32": "5FSfngtMcJAyHSXDsDJ7fEmSvcFxEBuZxQhWoD7NLxLHFSX8AHzaYRwQ7YX1LfQPSFo8ZRJdxiFprFVnbC4o2SWV"
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
