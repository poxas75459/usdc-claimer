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
    "3Z3anjx7x68ycZPmagqqYYsbLKvH5tRRY82yp8dyojkqFNMzP1Ah8ErcV9gTXAWX3sy8VqBb23SthxCyqHAabbPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34aEtfd3XSFz7DNoiZZrAwycfVBDfGLVedjFNwpHbNqyY1Ge2PGuAzxB9WHk4a2PR3eYaCNzU7j8SBKXZMPf9tic",
  "key1": "4YwB61UE8emfTi4M7CVpQyfBLdx9y1M1kyJYqoBvYuvbrAxaqCRvFwq2uDztgr4NGLR8syUAzRSuzswsCpfj8aHo",
  "key2": "5QQBn2ZEMbiwoTUM6SSYS1z1reArkt8AUsCddq6BzJAmHw8tgRPgdiSzzZqvUCE8Fov2h8bxGb3aZ11uHKu2mbza",
  "key3": "3C6enanucHzs1EbX37Z35JoQ4f9WmXAWBT296WG5r5s78FwRSMHxtK3HQQXPcDWPSSsZw3LZfLvowWwBSfgsxLMm",
  "key4": "38MizEb6By7AByJmagEWCAZweqPRfhAL2PgiUeRtsf6DpFmYoo9NTTsHecLKUTkNkHuzoRDDrZPv7mpkXVbgkcDc",
  "key5": "5GFhUd4uRuhCReKWxvg9GWFsQUQz5gw1Coa2Vx9PrQ9R5rV7uWkjQ6nh7HLYUYwHHC9xw5bDJW81EyWTYQztwKck",
  "key6": "2MHggDMXLQ28cP8Trv7aDNXFva7ZCS8NjDcMzz77jvsFGRKRnfBb291Hy9q6Eskju4VpdLi24eDw4vZ2fkBoSWCC",
  "key7": "51mtVjP9Ma94Xj24SacdSG1kA6x4ZVwCmiceezkt4KHPgQNwdv2HnJ6nk2v4msfWypZE18ncePSnwfBh6xjmD6uu",
  "key8": "27oSWSzNsGhYjRtUdvz5oHhQYQzRqw7Um18f4w5choz7YAkUWUtjoafUAsUnEjLvpwP1v4PCbYc8o3nGX31m2P71",
  "key9": "VSQyWdYbyW37mFe6HoSJFGcCW45cFYMBAqxKdNXTFVLckBQUQbNFj6AKhwdtt8JbAiXn5jk7hRvwQktLundRZ4M",
  "key10": "4bRLPumrfDfEnb5vz1RQBZiMzdMQ2Jqg24gYKr2ZngXxZznZD7fRUhoAiWgR4emYTpcJbLTBuYECPm3Tt6YhFG2D",
  "key11": "21GNtM6jPSs8iQEic6b5pwKBL4vPH9jYXp2Q8YxQT9K1p9dFB3nUST3wPjum1aGPDnxU3auUBA8BU72AQX847wA4",
  "key12": "3aLctdeXJQqaM3dtnxRb3fGSuK52bxA8H3Xipcfu35DyMXm8qPxSXxuSry6QR7n2hXfa1FqnUX9kUSjtKafHjc3J",
  "key13": "5gGQt98tAdLa6L8oJCNpskwDqNJuFNvsyfaAYoNM2hViQs13MW4qGPpd2a3NFfX2gqMNAVFa4q6ndzraNWiAnNj4",
  "key14": "bLixpbaLh2Qak5F3oBk2vDGihnsD2kvY8BitKRSW4BEt3scCF4fRkvkaexrZ2LtcFRdQrRBRy4F5NR3qMQrXXDr",
  "key15": "2k72Tmc7LGtVFHgtYpes8idf2e9xweeDv1bgs9bXte7bsPh1BiuM3s8VxeveMcWs1mWtsLoHpWirmi8G2MdxXJNV",
  "key16": "4c8QZzba3ZqUcFVDSSm1YSXqjmDk9DggVE6c93z3ZRD5WUKZvWrSU6BxxG24hnCJ6HWtJeckTLCTvr5ijUWsePvB",
  "key17": "24UNqLDrX198M7rL1ZeWMmyZcY5xfr7HXmGQCd4Ar45ULnFUTBm6ufmf8nRa2ViYjQ3Hj9uPbqmNSroRMVeuqSZB",
  "key18": "2V1xbmnXfPwoSKHRBGEFEGjV768MRZvt2y5MgX6Egf2AeELRjC5ESJoJwVnZoGqeCcqFLaUDPNSJRNcSKBiie3e1",
  "key19": "5XPDfRckh9NW7D9EHCTVUg2KuxxyZK5b1BdF8rufuqGXGKt77zybdpQXAxWue5tKoGMzNszXZ7XXs3CQp156hVTx",
  "key20": "2cNMb2XKQ5WzwJGcLJcyDoKsTzDv1hJG9cQsEZzX4x4c1jS1nQfXBtTUkN1u5B7PjUScbrLyXQVCf5YPpVBiPMNV",
  "key21": "3WDqNkRoPbNQZaZHgkQY3yC532UyVwsNWwGhiC4EX7nSF4ts8zyqTUxEhRWUXPbUpfR8Fz1xgjFJjPnX9btp596Z",
  "key22": "5pfoPNbJwh3o3XAMUvQyQ5rmFaf6dd1NcFM3JMPPsuJGLSoJWx23DSpVs6LrUymzQDPUGigDmpjxSaYSPte7JbEu",
  "key23": "3B8XbVCCEHUBG7BCt1YHVZnCMnw3ZW6vABSGWFLp5Hg51yoFh6a2Ymo63g8vyi1N99X7MFK2Le6XateGFrazv13e",
  "key24": "MJmw3EqhxU5fTzQKMguQbCcmbYDQv4NgDMFmnGWRJqxwuL8CeBDbAftk7CfwSrQs78j71J1KnT69F8S7DcvJiqT",
  "key25": "6Wmq2Qqj1kdXNPaCQsPAwXTa8Md6agtQaNmMFdXkPQh2pEDoCm8dPRgfKby4jsFaah8c8mY3daC89Bd6n7VFoFM",
  "key26": "3PKq1wcQ7rPxuRTwLNPwtTmi55xqQ14Wbw2Vkugu51QacGeTXfRTuGSxd8kRxCtXUGRXwxgnQX3CXmqqGQYdZBdW",
  "key27": "3UcGMhYJjrAuhBtekPcpNhL2aH7DV7FBZgMenav5impSQ5oXwcCyFhEKf6HYLKWjA3UNYvj8Guoj6krbJuGAeuVv",
  "key28": "3uyKc7QytTsgr1Dmzm35rQvZsCPnFHYsqthAbfNfqxK66Ejc5eeybXpfc9ucd2YHGPPERkFZqCjkSmPtUx4TKbqh",
  "key29": "2NsPxWRSSpgyv9imf4Z4Wr3Ss8RYw3eFPnXdNawaTfpYZFYSQrJss9MoMaZVtkJjp3SFdwhwy6VPC95BHns8W5HN",
  "key30": "SjYfB3ERzHBiskXeELWJKRto2CvwAgxHndM9Vet2tHfSh4mhDbDRHXHRpbTyAs1AAriTdCAoZVX2fvv2WkJPgUQ",
  "key31": "2QH25zQq2BjwxfS24JkMaZPpg6e1bGpAGrg9miuHb1ds4JfUHJQkzme626hvyZjQnsvdwxxV6JW5rrTV36K6p2zW",
  "key32": "5YNNs6sckz5mfDtiXiE7sYb6fotngGXzrQk7uSfj8xh4XreVaEVhUokZHjJZ9hgYBobZJGxYU2G3byeU1WMKjWBr"
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
